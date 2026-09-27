"""Claude API で記事の下書き(本文のみ)を生成する。

リンク・画像・PR表記は生成させず、render.py がAPIデータから差し込む。
これで「リンク先の取り違え」「画像の改変」「PR表記漏れ」をモデル任せにしない。
"""

import json
from dataclasses import dataclass

import anthropic

from .rakuten import Product

SYSTEM_PROMPT = """あなたは日本語の買い物ガイド記事の編集者です。渡された楽天市場の商品データだけを根拠に、読者が選びやすくなる記事の下書きを書きます。

守るルール:
- 自分で使った・食べた体験は書かない。体験談を作らない。評価に触れるときは「楽天のレビュー平均◯点(◯件)」のように、渡された数値として書く。
- 商品データにない事実(成分・効果・カロリー・受賞歴など)を足さない。
- 誇大表現・断定表現を使わない(例: 最安、日本一、No.1、絶対、必ず、完全、100%)。
- 健康・美容の効果効能をうたわない(例: 痩せる、治る、効く、改善する、予防する)。
- 価格は変わるので「記事作成時点」の参考として扱う。
- URL、<a>タグ、<img>タグは書かない。商品を紹介したい位置には [[PRODUCT:番号]] という目印だけを置く(番号は商品データの index)。
- 本文HTMLで使うタグは <h2> <h3> <p> <ul> <ol> <li> <strong> <table> <thead> <tbody> <tr> <th> <td> だけにする。"""

ARTICLE_SCHEMA = {
    "type": "object",
    "properties": {
        "title": {"type": "string", "description": "32文字前後の記事タイトル"},
        "slug": {"type": "string", "description": "半角英小文字・数字・ハイフンのみのURLスラッグ"},
        "excerpt": {"type": "string", "description": "120文字以内の記事の要約(メタディスクリプション用)"},
        "body_html": {"type": "string", "description": "記事本文HTML。商品位置は [[PRODUCT:番号]]"},
    },
    "required": ["title", "slug", "excerpt", "body_html"],
    "additionalProperties": False,
}

TEMPLATES = {
    "roundup": "おすすめ商品を紹介する記事。冒頭に選び方(価格帯・量・用途など)を示し、各商品の特徴を並べ、最後に比較表でまとめる。",
    "ranking": "楽天のレビュー件数・評価をもとにしたランキング記事。順位の根拠(レビュー件数と平均点)を明記する。",
    "compare": "2〜5商品の比較記事。価格・量・レビュー評価などを比較表にし、どんな人に向くかで整理する。",
}


class GenerationError(Exception):
    pass


@dataclass
class Draft:
    title: str
    slug: str
    excerpt: str
    body_html: str


def build_user_prompt(keyword: str, products: list[Product], template: str) -> str:
    items = [p.to_prompt_dict(i) for i, p in enumerate(products)]
    return (
        f"キーワード: {keyword}\n"
        f"記事タイプ: {TEMPLATES[template]}\n\n"
        f"商品データ(JSON):\n{json.dumps(items, ensure_ascii=False, indent=2)}"
    )


class ArticleGenerator:
    def __init__(self, model: str, effort: str = "medium",
                 client: anthropic.Anthropic | None = None):
        self.client = client or anthropic.Anthropic()
        self.model = model
        self.effort = effort

    def generate(self, keyword: str, products: list[Product], template: str = "roundup") -> Draft:
        response = self.client.beta.messages.create(
            model=self.model,
            max_tokens=16000,
            betas=["server-side-fallback-2026-07-01"],
            # 安全分類器による誤判定の拒否を、サーバー側で別モデルに再実行させる
            fallbacks="default",
            thinking={"type": "adaptive"},
            output_config={
                "effort": self.effort,
                "format": {"type": "json_schema", "schema": ARTICLE_SCHEMA},
            },
            system=SYSTEM_PROMPT,
            messages=[{"role": "user", "content": build_user_prompt(keyword, products, template)}],
        )
        if response.stop_reason == "refusal":
            raise GenerationError(f"生成が拒否されました: {keyword}")
        if response.stop_reason == "max_tokens":
            raise GenerationError(f"出力が上限で途切れました: {keyword}")
        text = "".join(b.text for b in response.content if b.type == "text")
        try:
            return Draft(**json.loads(text))
        except (json.JSONDecodeError, TypeError) as e:
            raise GenerationError(f"JSONを解釈できません: {e}") from e

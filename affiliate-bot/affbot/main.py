"""キーワードリスト → 楽天API → Claude で下書き生成 → WordPress に下書き保存。

使い方:
    python -m affbot.main --keywords keywords.txt            # WordPress に下書き保存
    python -m affbot.main --keywords keywords.txt --dry-run  # ローカルにHTMLを書き出すだけ
"""

import argparse
import json
import sys
from datetime import date
from html import escape
from pathlib import Path

from .compliance import check_text
from .config import ConfigError, load_config
from .generator import TEMPLATES, ArticleGenerator
from .rakuten import RakutenClient
from .render import render_article, sanitize_slug
from .wordpress import WordPressClient


def read_keywords(path: Path) -> list[tuple[str, str]]:
    """1行1キーワード。「キーワード | 記事タイプ」で記事タイプを指定できる。"""
    entries = []
    for line in path.read_text(encoding="utf-8").splitlines():
        line = line.strip()
        if not line or line.startswith("#"):
            continue
        keyword, _, template = (part.strip() for part in line.partition("|"))
        template = template or "roundup"
        if template not in TEMPLATES:
            raise ValueError(f"不明な記事タイプ '{template}'(使えるもの: {', '.join(TEMPLATES)})")
        entries.append((keyword, template))
    return entries


def load_state(path: Path) -> dict:
    if path.exists():
        return json.loads(path.read_text(encoding="utf-8"))
    return {}


def save_state(path: Path, state: dict) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(state, ensure_ascii=False, indent=2), encoding="utf-8")


def process_keyword(keyword, template, rakuten, generator, wordpress, out_dir: Path,
                    hits: int, index: int) -> dict:
    products = rakuten.search(keyword, hits=hits)
    if not products:
        return {"status": "skipped", "reason": "商品が見つかりません"}

    draft = generator.generate(keyword, products, template)
    slug = sanitize_slug(draft.slug, fallback=f"article-{date.today():%Y%m%d}-{index}")
    html = render_article(draft.body_html, products)
    findings = check_text(draft.title + "\n" + draft.body_html)

    out_dir.mkdir(parents=True, exist_ok=True)
    if (out_dir / f"{slug}.html").exists():  # 同日に同じスラッグが出たら上書きしない
        slug = f"{slug}-{index}"
    (out_dir / f"{slug}.html").write_text(
        f"<h1>{escape(draft.title)}</h1>\n{html}", encoding="utf-8"
    )
    report = {
        "keyword": keyword,
        "template": template,
        "title": draft.title,
        "slug": slug,
        "excerpt": draft.excerpt,
        "products": [p.name for p in products],
        "review_flags": findings,
    }
    if wordpress:
        report["wordpress"] = wordpress.create_draft(draft.title, html, slug, draft.excerpt)
    (out_dir / f"{slug}.json").write_text(
        json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8"
    )
    return {"status": "done", "slug": slug, "flags": len(findings),
            "wordpress": report.get("wordpress")}


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description="楽天商品から記事の下書きを作る")
    parser.add_argument("--keywords", type=Path, required=True, help="キーワードリストのファイル")
    parser.add_argument("--dry-run", action="store_true", help="WordPress に投稿せずローカル保存のみ")
    parser.add_argument("--limit", type=int, default=0, help="今回処理する最大件数(0で無制限)")
    parser.add_argument("--hits", type=int, default=5, help="1記事あたりの商品数(1〜30)")
    parser.add_argument("--out", type=Path, default=Path("output"), help="出力先ディレクトリ")
    parser.add_argument("--force", action="store_true", help="処理済みのキーワードも再生成する")
    args = parser.parse_args(argv)

    try:
        cfg = load_config(require_wordpress=not args.dry_run)
    except ConfigError as e:
        print(e, file=sys.stderr)
        return 2

    rakuten = RakutenClient(cfg)
    generator = ArticleGenerator(cfg.claude_model, cfg.claude_effort)
    wordpress = None if args.dry_run else WordPressClient(cfg.wp_url, cfg.wp_user, cfg.wp_app_password)

    state_path = args.out / "processed.json"
    state = load_state(state_path)
    out_dir = args.out / f"{date.today():%Y-%m-%d}"

    done = failed = 0
    for i, (keyword, template) in enumerate(read_keywords(args.keywords)):
        if args.limit and done >= args.limit:
            break
        if keyword in state and state[keyword].get("status") == "done" and not args.force:
            continue
        print(f"▶ {keyword} ({template})")
        try:
            result = process_keyword(keyword, template, rakuten, generator, wordpress,
                                     out_dir, args.hits, i)
        except Exception as e:  # 1件の失敗で全体を止めない
            result = {"status": "error", "reason": str(e)}
            failed += 1
        else:
            if result["status"] == "done":
                done += 1
        state[keyword] = {**result, "date": f"{date.today():%Y-%m-%d}"}
        save_state(state_path, state)
        print(f"  → {json.dumps(result, ensure_ascii=False)}")

    print(f"完了: {done}件 / エラー: {failed}件")
    return 1 if failed and not done else 0


if __name__ == "__main__":
    sys.exit(main())

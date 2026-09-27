"""下書き本文に PR 表記と商品ボックスを差し込んで、最終HTMLを組み立てる。"""

import re
from datetime import date
from html import escape

from .rakuten import Product

PR_NOTICE = '<p class="pr-notice"><small>【PR】本記事は楽天アフィリエイトを利用しています。</small></p>'

PLACEHOLDER = re.compile(r"\[\[PRODUCT:(\d+)\]\]")
# 生成本文に紛れ込んだリンクや画像は、APIデータ由来でないので取り除く
FORBIDDEN_TAG = re.compile(r"</?(a|img|script|iframe|style)\b[^>]*>", re.IGNORECASE)


def product_box(p: Product, as_of: date) -> str:
    url = escape(p.affiliate_url, quote=True)
    name = escape(p.name)
    review = (
        f"<li>レビュー: {p.review_average:.2f}点({p.review_count:,}件)</li>"
        if p.review_count else ""
    )
    # 楽天の商品画像は加工せず、そのまま商品ページへのリンクとして表示する
    image = (
        f'<a href="{url}" target="_blank" rel="sponsored noopener">'
        f'<img src="{escape(p.image_url, quote=True)}" alt="{name}" loading="lazy"></a>'
        if p.image_url else ""
    )
    return (
        '<div class="rakuten-item">'
        f"{image}"
        f'<p class="rakuten-item-name"><a href="{url}" target="_blank" rel="sponsored noopener">{name}</a></p>'
        "<ul>"
        f"<li>価格: {p.price:,}円({as_of:%Y年%m月%d日}時点)</li>"
        f"<li>ショップ: {escape(p.shop_name)}</li>"
        f"{review}"
        "</ul>"
        f'<p><a class="rakuten-button" href="{url}" target="_blank" rel="sponsored noopener">楽天市場で見る</a></p>'
        "</div>"
    )


def render_article(body_html: str, products: list[Product], as_of: date | None = None) -> str:
    as_of = as_of or date.today()
    body = FORBIDDEN_TAG.sub("", body_html)
    used: set[int] = set()

    def replace(m: re.Match) -> str:
        i = int(m.group(1))
        if i >= len(products) or i in used:
            return ""
        used.add(i)
        return product_box(products[i], as_of)

    body = PLACEHOLDER.sub(replace, body)
    return PR_NOTICE + "\n" + body


def sanitize_slug(slug: str, fallback: str) -> str:
    s = re.sub(r"[^a-z0-9-]+", "-", slug.lower()).strip("-")
    return s[:60] or fallback

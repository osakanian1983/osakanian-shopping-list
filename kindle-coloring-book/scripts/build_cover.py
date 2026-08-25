# -*- coding: utf-8 -*-
"""
KDPペーパーバック用のフルラップ表紙(裏表紙+背表紙+表表紙)PDFを生成する。

寸法は KDP の計算式に基づく(白色用紙・モノクロ本文を想定):
  spine_width(in) = page_count * 0.002252
  cover_width(in) = bleed + trim_width*2 + spine_width + bleed
  cover_height(in) = trim_height + bleed*2
  (bleed = 0.125in)

★ 実際にアップロードする前に、必ず KDP の
  「表紙計算ツール(Cover Calculator)」で最終ページ数から
  寸法を再計算し、誤差があれば調整してください。
"""
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor, white, black

from compose_cover import compose_cover_mandala

TRIM_W_IN = 8.5
TRIM_H_IN = 11.0
BLEED_IN = 0.125
PAGE_COUNT = 53
SPINE_IN = PAGE_COUNT * 0.002252

COVER_W_IN = BLEED_IN + TRIM_W_IN * 2 + SPINE_IN + BLEED_IN
COVER_H_IN = TRIM_H_IN + BLEED_IN * 2

IN = 72.0
COVER_W = COVER_W_IN * IN
COVER_H = COVER_H_IN * IN
SPINE_W = SPINE_IN * IN
BLEED = BLEED_IN * IN
TRIM_W = TRIM_W_IN * IN
TRIM_H = TRIM_H_IN * IN

OUT_PATH = "/home/user/osakanian-shopping-list/kindle-coloring-book/build/flower_mandalas_cover.pdf"

TITLE = "Flower Mandalas"
SUBTITLE = "An Adult Coloring Book for Stress Relief & Relaxation"
SUBTITLE2 = "25 Intricate Floral Mandala Designs"
AUTHOR = "[Author Name]"

BACK_BLURB = [
    "Escape into a world of intricate floral mandalas designed to help",
    "you relax, unwind, and rediscover your creativity.",
    "",
    "Inside this book you'll find:",
    "  - 25 original, hand-crafted mandala designs",
    "  - Single-sided pages to prevent bleed-through",
    "  - Printed on 8.5\" x 11\" pages, perfect for markers, gel pens,",
    "     colored pencils, or fine-tip markers",
    "  - A mix of florals, stars, and geometric patterns for all skill",
    "     levels",
    "",
    "Whether you're a seasoned colorist or picking up your first set",
    "of pencils, these designs offer a calming, mindful escape from",
    "everyday stress.",
]

DEEP_TEAL = HexColor("#2f6f6a")
CREAM_BG = white


def draw_back_cover(c, x0):
    # 背景
    c.setFillColor(CREAM_BG)
    c.rect(x0, 0, TRIM_W + BLEED, COVER_H, fill=1, stroke=0)

    cx = x0 + BLEED + TRIM_W / 2
    top_text_y = COVER_H - BLEED - 1.1 * IN

    c.setFillColor(black)
    c.setFont("Helvetica-Bold", 20)
    c.drawCentredString(cx, top_text_y, TITLE)

    c.setFont("Helvetica", 10.5)
    y = top_text_y - 34
    for line in BACK_BLURB:
        c.drawCentredString(cx, y, line)
        y -= 14.5

    # 小さな装飾マンダラ
    compose_cover_mandala(c, cx, BLEED + 1.55 * IN, 0.95 * IN, seed=8001)

    # KDPが自動でバーコードを配置する領域(空白を確保: 幅2.0in x 高さ1.2in、
    # 裏表紙の右下)
    barcode_w = 2.0 * IN
    barcode_h = 1.2 * IN
    bx = x0 + (TRIM_W + BLEED) - BLEED - barcode_w - 0.15 * IN
    by = BLEED + 0.15 * IN
    c.setStrokeColor(HexColor("#cccccc"))
    c.setDash(3, 3)
    c.rect(bx, by, barcode_w, barcode_h, fill=0, stroke=1)
    c.setDash()
    c.setFillColor(HexColor("#999999"))
    c.setFont("Helvetica", 7)
    c.drawCentredString(bx + barcode_w / 2, by + barcode_h / 2,
                         "KDP barcode area (leave clear)")


def draw_spine(c, x0):
    c.setFillColor(DEEP_TEAL)
    c.rect(x0, 0, SPINE_W, COVER_H, fill=1, stroke=0)
    # スパイン幅が十分あればタイトルを縦書きで入れる(目安: 0.25in=200ページ程度から可読)
    if SPINE_IN >= 0.25:
        c.saveState()
        c.setFillColor(white)
        c.setFont("Helvetica-Bold", 14)
        c.translate(x0 + SPINE_W / 2, COVER_H / 2)
        c.rotate(90)
        c.drawCentredString(0, -5, TITLE)
        c.restoreState()


def draw_front_cover(c, x0):
    c.setFillColor(CREAM_BG)
    c.rect(x0, 0, TRIM_W + BLEED, COVER_H, fill=1, stroke=0)

    cx = x0 + BLEED + TRIM_W / 2

    c.setFillColor(black)
    c.setFont("Helvetica-Bold", 40)
    title_y = COVER_H - BLEED - 1.05 * IN
    c.drawCentredString(cx, title_y, TITLE)

    c.setLineWidth(1.2)
    c.setStrokeColor(black)
    c.line(cx - 130, title_y - 20, cx + 130, title_y - 20)

    c.setFont("Helvetica", 15)
    c.drawCentredString(cx, title_y - 42, SUBTITLE)
    c.setFont("Helvetica", 12.5)
    c.drawCentredString(cx, title_y - 62, SUBTITLE2)

    compose_cover_mandala(c, cx, BLEED + 4.6 * IN, 2.9 * IN, seed=9001)

    c.setFont("Helvetica-Oblique", 13)
    c.drawCentredString(cx, BLEED + 0.55 * IN, AUTHOR)


def build():
    c = canvas.Canvas(OUT_PATH, pagesize=(COVER_W, COVER_H))

    draw_back_cover(c, 0)
    draw_spine(c, TRIM_W + BLEED)
    draw_front_cover(c, TRIM_W + BLEED + SPINE_W)

    # トリムライン(ガイド線・実際の印刷には残らないよう最終確認を推奨)
    c.showPage()
    c.save()

    print("Page count assumed:", PAGE_COUNT)
    print("Spine width (in):", round(SPINE_IN, 4))
    print("Cover size (in): %.4f x %.4f" % (COVER_W_IN, COVER_H_IN))
    print("Wrote:", OUT_PATH)


if __name__ == "__main__":
    build()

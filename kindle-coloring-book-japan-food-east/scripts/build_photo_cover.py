# -*- coding: utf-8 -*-
"""
「A Taste of Eastern Japan」(都道府県ご当地グルメ版・東日本編) の
KDPペーパーバック用フルラップ表紙(裏表紙+背表紙+表表紙)PDFを生成する。
journey_through_eastern_japan (kindle-coloring-book-japan) と同じ計算式・
余白ルールを踏襲。表紙アートは著者が塗った江戸前寿司(表表紙)と
金沢おでん(裏表紙)を使用。

★ 実際にアップロードする前に、必ず KDP の
  「表紙計算ツール(Cover Calculator)」で最終ページ数から
  寸法を再計算し、誤差があれば調整してください。
"""
import os
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor, white, black
from reportlab.lib.utils import ImageReader

import pdf_fonts
from pdf_fonts import FONT_REGULAR, FONT_BOLD, FONT_ITALIC

pdf_fonts.register()

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
COVER_IMG_DIR = os.path.join(ROOT, "cover_images")
FRONT_COVER_IMG = os.path.join(COVER_IMG_DIR, "cover_front_tokyo_edomaezushi.png")
BACK_COVER_IMG = os.path.join(COVER_IMG_DIR, "cover_back_ishikawa_kanazawaoden.png")

TRIM_W_IN = 8.5
TRIM_H_IN = 11.0
BLEED_IN = 0.125
PAGE_COUNT = 51
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

OUT_PATH = os.path.join(ROOT, "build", "a_taste_of_eastern_japan_cover.pdf")

TITLE = "A Taste of Eastern Japan"
SUBTITLE = "An Adult Coloring Book of Regional Dishes from Hokkaido to Mie"
SUBTITLE2 = "24 Regional Dishes"
AUTHOR = "Osakanian"

BACK_BLURB = [
    "Travel page by page through the flavors of eastern Japan — from",
    "sizzling Hokkaido lamb to Edomae sushi and Mie's soft udon —",
    "with 24 hand-picked regional dishes brought to life in line art.",
    "",
    "Inside this book you'll find:",
    "  - 24 detailed illustrations of real regional dishes across",
    "     eastern Japan",
    "  - Single-sided pages to prevent bleed-through",
    "  - Printed on 8.5\" x 11\" pages, perfect for markers, gel pens,",
    "     colored pencils, or fine-tip markers",
    "  - Hot pots, noodles, sushi, and street food from Hokkaido",
    "     to Mie",
    "",
    "Whether you're a seasoned colorist or picking up your first set",
    "of pencils, these designs offer a calming, mindful escape from",
    "everyday stress.",
]

DEEP_INDIGO = HexColor("#3c5068")
CREAM_BG = white


def _draw_fitted_image(c, path, bx0, by0, box_w, box_h):
    img = ImageReader(path)
    iw, ih = img.getSize()
    scale = min(box_w / iw, box_h / ih)
    dw, dh = iw * scale, ih * scale
    dx = bx0 + (box_w - dw) / 2
    dy = by0 + (box_h - dh) / 2
    c.drawImage(img, dx, dy, width=dw, height=dh)


def draw_back_cover(c, x0):
    c.setFillColor(CREAM_BG)
    c.rect(x0, 0, TRIM_W + BLEED, COVER_H, fill=1, stroke=0)

    cx = x0 + BLEED + TRIM_W / 2
    top_text_y = COVER_H - BLEED - 1.1 * IN

    c.setFillColor(black)
    c.setFont(FONT_BOLD, 20)
    c.drawCentredString(cx, top_text_y, TITLE)

    c.setFont(FONT_REGULAR, 10.5)
    y = top_text_y - 34
    for line in BACK_BLURB:
        c.drawCentredString(cx, y, line)
        y -= 14.5

    box_w, box_h = 6.3 * IN, 4.2 * IN
    bx0 = cx - box_w / 2
    by0 = 1.9 * IN
    _draw_fitted_image(c, BACK_COVER_IMG, bx0, by0, box_w, box_h)
    c.setStrokeColor(black)
    c.setLineWidth(1)
    c.rect(bx0, by0, box_w, box_h, fill=0, stroke=1)

    barcode_w = 2.0 * IN
    barcode_h = 1.2 * IN
    bx = x0 + (TRIM_W + BLEED) - BLEED - barcode_w - 0.15 * IN
    by = BLEED + 0.15 * IN
    c.setStrokeColor(HexColor("#cccccc"))
    c.setDash(3, 3)
    c.rect(bx, by, barcode_w, barcode_h, fill=0, stroke=1)
    c.setDash()
    c.setFillColor(HexColor("#999999"))
    c.setFont(FONT_REGULAR, 7)
    c.drawCentredString(bx + barcode_w / 2, by + barcode_h / 2,
                         "KDP barcode area (leave clear)")


def draw_spine(c, x0):
    c.setFillColor(DEEP_INDIGO)
    c.rect(x0, 0, SPINE_W, COVER_H, fill=1, stroke=0)
    if SPINE_IN >= 0.25:
        c.saveState()
        c.setFillColor(white)
        c.setFont(FONT_BOLD, 14)
        c.translate(x0 + SPINE_W / 2, COVER_H / 2)
        c.rotate(90)
        c.drawCentredString(0, -5, TITLE)
        c.restoreState()


def draw_front_cover(c, x0):
    c.setFillColor(CREAM_BG)
    c.rect(x0, 0, TRIM_W + BLEED, COVER_H, fill=1, stroke=0)

    cx = x0 + BLEED + TRIM_W / 2

    c.setFillColor(black)
    c.setFont(FONT_BOLD, 34)
    title_y = COVER_H - BLEED - 1.05 * IN
    c.drawCentredString(cx, title_y, TITLE)

    c.setLineWidth(1.2)
    c.setStrokeColor(black)
    c.line(cx - 160, title_y - 20, cx + 160, title_y - 20)

    c.setFont(FONT_REGULAR, 14)
    c.drawCentredString(cx, title_y - 42, SUBTITLE)
    c.setFont(FONT_REGULAR, 12.5)
    c.drawCentredString(cx, title_y - 62, SUBTITLE2)

    box_w, box_h = 6.6 * IN, 5.0 * IN
    bx0 = cx - box_w / 2
    by0 = BLEED + 1.0 * IN
    _draw_fitted_image(c, FRONT_COVER_IMG, bx0, by0, box_w, box_h)
    c.setStrokeColor(black)
    c.setLineWidth(1.4)
    c.rect(bx0, by0, box_w, box_h, fill=0, stroke=1)

    c.setFillColor(black)
    c.setFont(FONT_ITALIC, 13)
    c.drawCentredString(cx, BLEED + 0.5 * IN, AUTHOR)


def build():
    c = canvas.Canvas(OUT_PATH, pagesize=(COVER_W, COVER_H), initialFontName=FONT_REGULAR)

    draw_back_cover(c, 0)
    draw_spine(c, TRIM_W + BLEED)
    draw_front_cover(c, TRIM_W + BLEED + SPINE_W)

    c.showPage()
    c.save()

    print("Page count assumed:", PAGE_COUNT)
    print("Spine width (in):", round(SPINE_IN, 4))
    print("Cover size (in): %.4f x %.4f" % (COVER_W_IN, COVER_H_IN))
    print("Wrote:", OUT_PATH)


if __name__ == "__main__":
    build()

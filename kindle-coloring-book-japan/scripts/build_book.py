# -*- coding: utf-8 -*-
"""
KDPペーパーバック向け「日本の風景画 塗り絵」本文PDFを生成する。
- トリムサイズ: 8.5 x 11 in (レター)
- 内容: タイトルページ / 奥付ページ / 25枚の風景画(各1枚を裏写り防止のため
  見開きの片面のみに配置し、対面は無地) / お礼ページ
- flower_mandalas 版と同じ構成・同じ余白ルール・同じ埋め込みフォント手法を踏襲。
"""
from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas
from reportlab.lib.colors import Color

from compose_scenes import SCENES
import pdf_fonts
from pdf_fonts import FONT_REGULAR, FONT_BOLD, FONT_ITALIC

pdf_fonts.register()

BOOK_TITLE = "Japanese Landscapes"
BOOK_SUBTITLE = "An Adult Coloring Book for Stress Relief & Relaxation"
BOOK_SUBTITLE2 = "25 Scenic Illustrations of Japan"
AUTHOR_NAME = "Osakanian"
YEAR = "2026"

W, H = letter  # 612 x 792 pt
OUT_PATH = "/home/user/osakanian-shopping-list/kindle-coloring-book-japan/build/japanese_landscapes_interior.pdf"

BASE_MARGIN = 0.5 * 72
GUTTER_EXTRA = 0.25 * 72
TOP_MARGIN = 0.5 * 72
BOTTOM_MARGIN = 0.75 * 72  # フレーム下にシーン名・ページ番号を入れる余地を確保

LIGHT_GRAY = Color(0.55, 0.55, 0.55)


def scene_bounds(page_no):
    is_recto = (page_no % 2 == 1)
    if is_recto:
        left = BASE_MARGIN + GUTTER_EXTRA
        right = BASE_MARGIN
    else:
        left = BASE_MARGIN
        right = BASE_MARGIN + GUTTER_EXTRA
    x0, x1 = left, W - right
    y0, y1 = BOTTOM_MARGIN, H - TOP_MARGIN
    return x0, y0, x1, y1


def draw_folio(c, page_no):
    c.saveState()
    c.setFillColor(LIGHT_GRAY)
    c.setFont(FONT_REGULAR, 9)
    c.drawCentredString(W / 2, 0.35 * 72, str(page_no))
    c.restoreState()


def draw_title_page(c):
    c.saveState()
    c.setFillColor(Color(0, 0, 0))
    c.setFont(FONT_BOLD, 32)
    c.drawCentredString(W / 2, H * 0.74, BOOK_TITLE)

    c.setLineWidth(1)
    c.line(W / 2 - 100, H * 0.715, W / 2 + 100, H * 0.715)

    c.setFont(FONT_REGULAR, 15)
    c.drawCentredString(W / 2, H * 0.685, BOOK_SUBTITLE)
    c.setFont(FONT_REGULAR, 12)
    c.drawCentredString(W / 2, H * 0.66, BOOK_SUBTITLE2)
    c.restoreState()

    # 表紙用の縮小サンプル(富士山)
    from compose_scenes import scene_01_fuji_dawn
    box_w, box_h = 2.6 * 72, 2.9 * 72
    bx0, by0 = W / 2 - box_w / 2, H * 0.14
    scene_01_fuji_dawn(c, bx0, by0, bx0 + box_w, by0 + box_h, seed=9001)

    c.saveState()
    c.setFont(FONT_ITALIC, 12)
    c.drawCentredString(W / 2, H * 0.09, "by " + AUTHOR_NAME)
    c.restoreState()


def draw_copyright_page(c):
    c.saveState()
    left = BASE_MARGIN
    y = H * 0.78
    c.setFont(FONT_BOLD, 12)
    c.drawString(left, y, BOOK_TITLE)
    y -= 16
    c.setFont(FONT_REGULAR, 10)
    c.drawString(left, y, BOOK_SUBTITLE)
    y -= 40

    c.setFont(FONT_REGULAR, 10)
    lines = [
        "Copyright © %s %s" % (YEAR, AUTHOR_NAME),
        "All rights reserved.",
        "",
        "No part of this publication may be reproduced, distributed, or",
        "transmitted in any form or by any means, including photocopying,",
        "recording, or other electronic or mechanical methods, without the",
        "prior written permission of the copyright holder — except that",
        "pages of this book may be copied for the purchaser's own personal,",
        "non-commercial coloring use.",
        "",
        "All illustrations are original artwork created for this publication.",
        "",
        "First Edition, %s" % YEAR,
        "",
        "ISBN: [add your ISBN here, or leave blank for a free KDP ISBN]",
    ]
    for line in lines:
        c.drawString(left, y, line)
        y -= 14
    c.restoreState()


def draw_thankyou_page(c):
    c.saveState()
    c.setFont(FONT_BOLD, 24)
    c.drawCentredString(W / 2, H * 0.62, "Thank You!")
    c.setFont(FONT_REGULAR, 12)
    text_lines = [
        "We hope you enjoyed coloring these scenes of Japan as much",
        "as we enjoyed creating them for you.",
        "",
        "If you have a moment, a short review on Amazon helps",
        "other colorists discover this book — and means a great",
        "deal to us as an independent creator.",
        "",
        "Happy coloring!",
    ]
    y = H * 0.56
    for line in text_lines:
        c.drawCentredString(W / 2, y, line)
        y -= 16
    c.restoreState()

    from compose_scenes import scene_25_full_moon
    box_w, box_h = 2.0 * 72, 2.4 * 72
    bx0, by0 = W / 2 - box_w / 2, H * 0.14
    scene_25_full_moon(c, bx0, by0, bx0 + box_w, by0 + box_h, seed=9002)


def build():
    c = canvas.Canvas(OUT_PATH, pagesize=letter, initialFontName=FONT_REGULAR)

    page_no = 1
    draw_title_page(c)
    c.showPage()
    page_no += 1

    draw_copyright_page(c)
    c.showPage()
    page_no += 1

    scene_i = 0
    while scene_i < len(SCENES):
        if page_no % 2 == 0:
            draw_folio(c, page_no)
            c.showPage()
            page_no += 1
            continue
        title, fn = SCENES[scene_i]
        x0, y0, x1, y1 = scene_bounds(page_no)
        fn(c, x0, y0, x1, y1, seed=scene_i + 1)
        c.saveState()
        c.setFillColor(LIGHT_GRAY)
        c.setFont(FONT_REGULAR, 8)
        c.drawCentredString(W / 2, 0.55 * 72, "%02d. %s" % (scene_i + 1, title))
        c.setFont(FONT_REGULAR, 9)
        c.drawCentredString(W / 2, 0.35 * 72, str(page_no))
        c.restoreState()
        c.showPage()
        page_no += 1
        scene_i += 1

    if page_no % 2 == 0:
        draw_folio(c, page_no)
        c.showPage()
        page_no += 1

    draw_thankyou_page(c)
    c.showPage()
    page_no += 1

    c.save()
    print("Total interior pages:", page_no - 1)
    print("Wrote:", OUT_PATH)


if __name__ == "__main__":
    build()

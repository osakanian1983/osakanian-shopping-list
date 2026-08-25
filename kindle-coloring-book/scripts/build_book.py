# -*- coding: utf-8 -*-
"""
KDPペーパーバック向け「大人のためのマンダラ塗り絵」本文PDFを生成する。
- トリムサイズ: 8.5 x 11 in (レター)
- 内容: 表紙(タイトル)ページ / 奥付ページ / 25枚の塗り絵(各1枚を裏写り防止のため
  見開きの片面のみに配置し、対面は無地) / お礼ページ
"""
import math
from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas
from reportlab.lib.colors import Color

from compose import compose_mandala

BOOK_TITLE = "Flower Mandalas"
BOOK_SUBTITLE = "An Adult Coloring Book for Stress Relief & Relaxation"
BOOK_SUBTITLE2 = "25 Intricate Floral Mandala Designs"
AUTHOR_NAME = "[Author Name]"
YEAR = "2026"

W, H = letter  # 612 x 792 pt
OUT_PATH = "/home/user/osakanian-shopping-list/kindle-coloring-book/build/flower_mandalas_interior.pdf"

BASE_MARGIN = 0.5 * 72     # 外側マージン
GUTTER_EXTRA = 0.25 * 72   # ノド(綴じ側)への追加マージン

LIGHT_GRAY = Color(0.55, 0.55, 0.55)


def design_center_and_radius(page_no):
    """page_no(1始まり)の奇偶からノド側を判定し、中心座標と最大半径を返す"""
    is_recto = (page_no % 2 == 1)  # 奇数ページ = 右ページ(ノドは左側)
    if is_recto:
        left = BASE_MARGIN + GUTTER_EXTRA
        right = BASE_MARGIN
    else:
        left = BASE_MARGIN
        right = BASE_MARGIN + GUTTER_EXTRA
    top = bottom = BASE_MARGIN + 0.15 * 72
    cx = left + (W - left - right) / 2
    cy = bottom + (H - top - bottom) / 2
    max_r = min((W - left - right) / 2, (H - top - bottom) / 2) - 4
    return cx, cy, max_r


def draw_folio(c, page_no):
    c.saveState()
    c.setFillColor(LIGHT_GRAY)
    c.setFont("Helvetica", 9)
    c.drawCentredString(W / 2, 0.35 * 72, str(page_no))
    c.restoreState()


def draw_title_page(c):
    c.saveState()
    c.setFillColor(Color(0, 0, 0))
    c.setFont("Helvetica-Bold", 34)
    c.drawCentredString(W / 2, H * 0.74, BOOK_TITLE)

    c.setLineWidth(1)
    c.line(W / 2 - 90, H * 0.715, W / 2 + 90, H * 0.715)

    c.setFont("Helvetica", 15)
    c.drawCentredString(W / 2, H * 0.685, BOOK_SUBTITLE)
    c.setFont("Helvetica", 12)
    c.drawCentredString(W / 2, H * 0.66, BOOK_SUBTITLE2)
    c.restoreState()

    # 装飾マンダラ
    compose_mandala(c, W / 2, H * 0.36, 140, seed=9001)

    c.saveState()
    c.setFont("Helvetica-Oblique", 12)
    c.drawCentredString(W / 2, H * 0.12, "by " + AUTHOR_NAME)
    c.restoreState()


def draw_copyright_page(c):
    c.saveState()
    left = BASE_MARGIN + GUTTER_EXTRA if True else BASE_MARGIN
    y = H * 0.78
    c.setFont("Helvetica-Bold", 12)
    c.drawString(left, y, BOOK_TITLE)
    y -= 16
    c.setFont("Helvetica", 10)
    c.drawString(left, y, BOOK_SUBTITLE)
    y -= 40

    c.setFont("Helvetica", 10)
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
    c.setFont("Helvetica-Bold", 24)
    c.drawCentredString(W / 2, H * 0.62, "Thank You!")
    c.setFont("Helvetica", 12)
    text_lines = [
        "We hope you enjoyed coloring these mandalas as much",
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
    compose_mandala(c, W / 2, H * 0.26, 90, seed=9002)


def build():
    c = canvas.Canvas(OUT_PATH, pagesize=letter)

    page_no = 1
    draw_title_page(c)
    c.showPage()
    page_no += 1

    draw_copyright_page(c)
    c.showPage()
    page_no += 1

    design_num = 1
    while design_num <= 25:
        if page_no % 2 == 0:
            # 偶数(見返し/裏写り防止)ページは無地
            draw_folio(c, page_no)
            c.showPage()
            page_no += 1
            continue
        cx, cy, max_r = design_center_and_radius(page_no)
        compose_mandala(c, cx, cy, max_r, seed=design_num)
        c.saveState()
        c.setFillColor(LIGHT_GRAY)
        c.setFont("Helvetica", 8)
        c.drawCentredString(W / 2, 0.45 * 72, "Design %02d" % design_num)
        c.setFont("Helvetica", 9)
        c.drawCentredString(W / 2, 0.22 * 72, str(page_no))
        c.restoreState()
        c.showPage()
        page_no += 1
        design_num += 1

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

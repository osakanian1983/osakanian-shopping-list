# -*- coding: utf-8 -*-
"""
「A Taste of Eastern Japan」(都道府県ご当地グルメ版・東日本編) の
KDPペーパーバック用本文PDFを生成するビルダー。

journey_through_eastern_japan (kindle-coloring-book-japan) と同じ構造。
使い方:
  1. source_images/ に各グルメのPNG/JPGを置く(白黒線画・塗りなし推奨)
  2. 下の LOCATIONS リストに (英語タイトル, 場所の副題, 画像ファイル名) を追加
  3. python3 build_photo_book.py を実行 -> build/ に本文PDFを生成
"""
import os
from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas
from reportlab.lib.utils import ImageReader
from reportlab.lib.colors import Color

import pdf_fonts
from pdf_fonts import FONT_REGULAR, FONT_BOLD, FONT_ITALIC

pdf_fonts.register()

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
SOURCE_DIR = os.path.join(ROOT, "source_images")
OUT_PATH = os.path.join(ROOT, "build", "a_taste_of_eastern_japan_interior.pdf")

BOOK_TITLE = "A Taste of Eastern Japan"
BOOK_SUBTITLE = "An Adult Coloring Book of Regional Dishes from Hokkaido to Mie"
AUTHOR_NAME = "Osakanian"
YEAR = "2026"

W, H = letter
BASE_MARGIN = 0.5 * 72
GUTTER_EXTRA = 0.25 * 72
TOP_MARGIN = 0.5 * 72
BOTTOM_MARGIN = 0.75 * 72
LIGHT_GRAY = Color(0.5, 0.5, 0.5)

# (英語タイトル, 副題(料理名・都道府県), 画像ファイル名)
# 画像がまだ無いものは source_images/ に追加してからリストに加える。
LOCATIONS = [
    ("Jingisukan", "Grilled Mutton, Hokkaido", "01_hokkaido_jingisukan.png"),
    ("Senbei-jiru", "Rice Cracker Hot Pot, Aomori Prefecture", "02_aomori_senbeijiru.png"),
    ("Wanko Soba", "All-You-Can-Eat Buckwheat Noodles, Iwate Prefecture", "03_iwate_wankosoba.png"),
    ("Gyutan", "Grilled Beef Tongue, Sendai, Miyagi Prefecture", "04_miyagi_gyutan.png"),
    ("Kiritanpo Nabe", "Rice Skewer Hot Pot, Akita Prefecture", "05_akita_kiritanpo.png"),
    ("Yonezawa Beef", "Grilled Wagyu, Yamagata Prefecture", "06_yamagata_yonezawagyu.png"),
    ("Kitakata Ramen", "Fukushima Prefecture", "07_fukushima_kitakataramen.png"),
    ("Anko Nabe", "Monkfish Hot Pot, Ibaraki Prefecture", "08_ibaraki_ankonabe.png"),
    ("Gyoza", "Utsunomiya, Tochigi Prefecture", "09_tochigi_gyoza.png"),
    ("Yaki Manju", "Grilled Sweet Bean Buns, Gunma Prefecture", "10_gunma_yakimanju.png"),
    ("Waraji Katsudon", "Chichibu, Saitama Prefecture", "11_saitama_waraji_katsudon.png"),
    ("Futomaki Matsuri-zushi", "Boso Peninsula, Chiba Prefecture", "12_chiba_futomaki_matsurizushi.png"),
    ("Edomae Sushi", "Tokyo", "13_tokyo_edomaezushi.png"),
    ("Shirasu-don", "Whitebait Rice Bowl, Enoshima, Kanagawa Prefecture", "14_kanagawa_shirasudon.png"),
    ("Hegi Soba", "Niigata Prefecture", "15_niigata_hegisoba.png"),
]


def page_bounds(page_no):
    is_recto = (page_no % 2 == 1)
    if is_recto:
        left, right = BASE_MARGIN + GUTTER_EXTRA, BASE_MARGIN
    else:
        left, right = BASE_MARGIN, BASE_MARGIN + GUTTER_EXTRA
    return left, W - right, BOTTOM_MARGIN, H - TOP_MARGIN


def draw_location_page(c, page_no, title, subtitle, image_filename):
    x0, x1, y0, y1 = page_bounds(page_no)

    title_y = y1 - 6
    c.setFillColor(Color(0, 0, 0))
    c.setFont(FONT_BOLD, 20)
    c.drawCentredString((x0 + x1) / 2, title_y - 22, title)
    c.setFont(FONT_ITALIC, 11)
    c.setFillColor(LIGHT_GRAY)
    c.drawCentredString((x0 + x1) / 2, title_y - 40, subtitle)

    img_top = title_y - 52
    img_bottom = y0 + 6

    img_path = os.path.join(SOURCE_DIR, image_filename)
    img = ImageReader(img_path)
    iw, ih = img.getSize()
    box_w = x1 - x0
    box_h = img_top - img_bottom
    scale = min(box_w / iw, box_h / ih)
    dw, dh = iw * scale, ih * scale
    dx = x0 + (box_w - dw) / 2
    dy = img_bottom + (box_h - dh) / 2
    c.drawImage(img, dx, dy, width=dw, height=dh)

    c.setFillColor(LIGHT_GRAY)
    c.setFont(FONT_REGULAR, 9)
    c.drawCentredString(W / 2, 0.35 * 72, str(page_no))


def draw_folio(c, page_no):
    c.setFillColor(LIGHT_GRAY)
    c.setFont(FONT_REGULAR, 9)
    c.drawCentredString(W / 2, 0.35 * 72, str(page_no))


def draw_title_page(c):
    c.setFillColor(Color(0, 0, 0))
    c.setFont(FONT_BOLD, 32)
    c.drawCentredString(W / 2, H * 0.74, BOOK_TITLE)
    c.setLineWidth(1)
    c.line(W / 2 - 130, H * 0.715, W / 2 + 130, H * 0.715)
    c.setFont(FONT_REGULAR, 14)
    c.drawCentredString(W / 2, H * 0.685, BOOK_SUBTITLE)
    c.setFont(FONT_REGULAR, 11)
    c.setFillColor(LIGHT_GRAY)
    c.drawCentredString(W / 2, H * 0.66, "%d Regional Dishes" % len(LOCATIONS))

    box_w, box_h = 4.0 * 72, 2.7 * 72
    bx0, by0 = W / 2 - box_w / 2, H * 0.32
    img = ImageReader(os.path.join(SOURCE_DIR, LOCATIONS[0][2]))
    iw, ih = img.getSize()
    scale = min(box_w / iw, box_h / ih)
    dw, dh = iw * scale, ih * scale
    c.setStrokeColor(Color(0, 0, 0))
    c.setLineWidth(1)
    c.drawImage(img, bx0 + (box_w - dw) / 2, by0 + (box_h - dh) / 2, width=dw, height=dh)
    c.rect(bx0 + (box_w - dw) / 2, by0 + (box_h - dh) / 2, dw, dh, fill=0, stroke=1)

    c.setFillColor(Color(0, 0, 0))
    c.setFont(FONT_ITALIC, 12)
    c.drawCentredString(W / 2, H * 0.09, "by " + AUTHOR_NAME)


def draw_copyright_page(c):
    left = BASE_MARGIN
    y = H * 0.78
    c.setFillColor(Color(0, 0, 0))
    c.setFont(FONT_BOLD, 12)
    c.drawString(left, y, BOOK_TITLE)
    y -= 16
    c.setFont(FONT_REGULAR, 10)
    c.drawString(left, y, BOOK_SUBTITLE)
    y -= 40

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


def draw_thankyou_page(c):
    c.setFillColor(Color(0, 0, 0))
    c.setFont(FONT_BOLD, 24)
    c.drawCentredString(W / 2, H * 0.62, "Thank You!")
    c.setFont(FONT_REGULAR, 12)
    text_lines = [
        "We hope you enjoyed coloring your way through the flavors of",
        "Japan as much as we enjoyed creating this journey for you.",
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


def build():
    missing = [f for _, _, f in LOCATIONS if not os.path.exists(os.path.join(SOURCE_DIR, f))]
    if missing:
        raise FileNotFoundError("source_images/ に無い画像: %s" % missing)

    c = canvas.Canvas(OUT_PATH, pagesize=letter, initialFontName=FONT_REGULAR)

    page_no = 1
    draw_title_page(c)
    c.showPage()
    page_no += 1

    draw_copyright_page(c)
    c.showPage()
    page_no += 1

    for title, subtitle, filename in LOCATIONS:
        if page_no % 2 == 0:
            draw_folio(c, page_no)
            c.showPage()
            page_no += 1
        draw_location_page(c, page_no, title, subtitle, filename)
        c.showPage()
        page_no += 1

    if page_no % 2 == 0:
        draw_folio(c, page_no)
        c.showPage()
        page_no += 1

    draw_thankyou_page(c)
    c.showPage()
    page_no += 1

    c.save()
    print("Total pages:", page_no - 1)
    print("Wrote:", OUT_PATH)


if __name__ == "__main__":
    build()

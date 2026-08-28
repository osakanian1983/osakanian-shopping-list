# -*- coding: utf-8 -*-
"""
外部AI(Midjourney等)で生成した「都道府県の名所」塗り絵イラストを
KDPペーパーバックの1ページずつに組み込むビルダー。

使い方:
  1. source_images/ に各名所のPNG/JPGを置く(白黒線画・塗りなし推奨)
  2. 下の LOCATIONS リストに (英語タイトル, 場所の副題, 画像ファイル名) を追加
  3. python3 build_photo_book.py を実行 -> build/ に本文PDFを生成

flower_mandalas / japanese_landscapes(手描き版) と同じ余白ルール・
埋め込みフォントを踏襲しているので、そのままKDPにアップロードできる。
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
OUT_PATH = os.path.join(ROOT, "build", "japan_prefectures_interior.pdf")

W, H = letter
BASE_MARGIN = 0.5 * 72
GUTTER_EXTRA = 0.25 * 72
TOP_MARGIN = 0.5 * 72
BOTTOM_MARGIN = 0.75 * 72
LIGHT_GRAY = Color(0.5, 0.5, 0.5)

# (英語タイトル, 副題(場所・都道府県), 画像ファイル名)
# 画像がまだ無いものは source_images/ に追加してからリストに加える。
LOCATIONS = [
    ("Kushiro Marsh", "Red-Crowned Cranes, Hokkaido", "01_hokkaido_kushiro.png"),
    ("Nebuta Festival", "Aomori Prefecture", "02_aomori_nebuta.png"),
    ("Chuson-ji Temple", "Hiraizumi, Iwate Prefecture", "03_iwate_chusonji.png"),
    ("Matsushima Bay", "Miyagi Prefecture", "04_miyagi_matsushima.png"),
    ("Kakunodate", "Samurai District, Akita Prefecture", "05_akita_kakunodate.png"),
    ("Yamadera", "Risshaku-ji Temple, Yamagata Prefecture", "06_yamagata_yamadera.png"),
    ("Tsuruga Castle", "Aizuwakamatsu, Fukushima Prefecture", "07_fukushima_tsurugajo.png"),
    ("Kairakuen Garden", "Mito, Ibaraki Prefecture", "08_ibaraki_kairakuen.png"),
    ("Nikko Toshogu", "Tochigi Prefecture", "09_tochigi_nikko_toshogu.png"),
    ("Kusatsu Onsen", "Yubatake, Gunma Prefecture", "10_gunma_kusatsu.png"),
    ("Kawagoe", "Old Town, Saitama Prefecture", "11_saitama_kawagoe.png"),
    ("Sensoji Kaminarimon", "Asakusa, Tokyo", "12_tokyo_sensoji.png"),
    ("Nihonji Great Buddha", "Mount Nokogiri, Chiba Prefecture", "13_chiba_nihonji_daibutsu.png"),
    ("Great Buddha of Kamakura", "Kanagawa Prefecture", "14_kanagawa_kamakura_daibutsu.png"),
    ("Sado Tarai-bune", "Tub Boats, Niigata Prefecture", "15_niigata_sado_taraibune.png"),
    ("Tateyama Kurobe Alpine Route", "Yuki-no-Otani Snow Corridor, Toyama Prefecture", "16_toyama_tateyama_kurobe.png"),
    ("Kenrokuen Garden", "Kanazawa, Ishikawa Prefecture", "17_ishikawa_kenrokuen.png"),
    ("Tojinbo Cliffs", "Fukui Prefecture", "18_fukui_tojinbo.png"),
    ("Lake Kawaguchi", "Mount Fuji, Yamanashi Prefecture", "19_yamanashi_kawaguchiko.png"),
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


def build():
    missing = [f for _, _, f in LOCATIONS if not os.path.exists(os.path.join(SOURCE_DIR, f))]
    if missing:
        raise FileNotFoundError("source_images/ に無い画像: %s" % missing)

    c = canvas.Canvas(OUT_PATH, pagesize=letter, initialFontName=FONT_REGULAR)
    page_no = 1
    for title, subtitle, filename in LOCATIONS:
        if page_no % 2 == 0:
            draw_folio(c, page_no)
            c.showPage()
            page_no += 1
        draw_location_page(c, page_no, title, subtitle, filename)
        c.showPage()
        page_no += 1

    c.save()
    print("Total pages:", page_no - 1)
    print("Wrote:", OUT_PATH)


if __name__ == "__main__":
    build()

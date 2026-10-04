"""ドット絵「おかん奮闘記 年末年始」LINEアニメーションスタンプ生成スクリプト

python3 make_okan2.py で out_okan2/ に 01.png〜16.png, main.png, tab.png, preview.png, line_stickers.zip を出力する。
おかんひとりで年末年始の家事・行事に奮闘する。キャラ・メッセージウィンドウは make_okan.py のものを使う。
"""
import os
import zipfile
from PIL import Image, ImageDraw
from make_stickers import SUN
from make_okan import (Scene, C, B, grid, paint, okan, slime, up, LADLE, BROOM, OKAN, OKAN_FACES,
                       FRAMES, DUR, save_apng, HEART, HEART_S, SPARK, SPARK_S, SWEAT, NOTE, ZED, DUST, CUP)

OUT = os.path.join(os.path.dirname(__file__), "out_okan2")
C.update({"r": (200, 40, 50), "d": (120, 80, 50), "e": (255, 240, 220), "l": (210, 235, 255)})

DUSTER = ["Y.R.B", ".YRB.", "..n..", "..n..", "..n..", "..n.."]
SOBA = ["XnOOnnnX", "XRRRRRRX", ".XRRRRX.", "..XXXX.."]
POCHI = ["XXXXX", "XRRRX", "XRYRX", "XRRRX", "XRRRX", "XXXXX"]
MOCHI = ["..XXX..", ".XeeeX.", "XeeeeeX", "XXXXXXX"]
MIKAN = ["..G..", ".XOX.", "XOOOX", ".XXX."]
SCARF = ["XrrrrrrrrrrrrX", "XrrrrrrrrrrrrX", "..........XrX.", "..........XrX.", "..........XXX."]
KOTATSU = ["XXXXXXXXXXXXXXXXXXXX", "XddddddddddddddddddX", "XXXXXXXXXXXXXXXXXXXX",
           "XRRRRRRRRRRRRRRRRRRX", "XRRYRRRRYRRRRYRRRRRX", "XRRRRRRRRRRRRRRRRRRX", "XXXXXXXXXXXXXXXXXXXX"]
OMIKUJI = ["XXXX", "XwwX", "XRwX", "XwRX", "XRwX", "XwwX", "XXXX"]
JUBAKO = ["XXXXXXXXX", "XRRRRRRRX", "XYXOXGXRX", "XRRRRRRRX", "XXXXXXXXX"]
TORII = ["XRRRRRRRRRX", "..XRRRRRX..", "..XR...RX..", "XRRRRRRRRRX", "..XR...RX..", "..XR...RX..", "..XR...RX.."]
WINDOW = ["XXXXXXXXX", "XlllXlllX", "XlWlXlllX", "XlllXlWlX", "XXXXXXXXX", "XlllXlllX", "XlllXlllX", "XXXXXXXXX"]
RAG = ["XXX", "XwX", "XXX"]
CARD = ["XXXXX", "XwRwX", "XwwwX", "XXXXX"]


def steam(sc, x, y, i, n=2):
    for k in range(n):
        u = (i + k * 2) % 4
        sc.item(["q"], x + k * 4 + (u % 2) * 2, y - u * 3, 2)


def s01(i):  # おおそうじ はじめるで！
    sc = Scene(["おおそうじ", "はじめるで！"])
    sc.okan("yell", dy=-(i % 2))
    sc.oitem(DUSTER, 12 + (i % 2), 2 + (i % 2))
    for k in range(4):
        u = (i + k * 3) % 6
        sc.item(DUST, 62 + k * 22 + u, sc.ground - 56 + u * 6, 2)
    return sc.window()


def s02(i):  # まどふき ピカピカや！
    sc = Scene(["まどふき", "ピカピカや！"])
    paint(sc.img, grid(WINDOW), 70, sc.ground - 8 * 7 - 8, 7)
    sc.okan("smile" if i >= 4 else "yell", dx=[0, 2, 4, 2][i % 4])
    sc.oitem(RAG, 13, 4 + [0, 2, 4, 2][i % 4], 4)
    if i >= 4:
        for k, (x, y) in enumerate([(88, 20), (120, 44), (100, 60)]):
            sc.item(SPARK if (i + k) % 2 else SPARK_S, x, y, 2)
    return sc.window()


def s03(i):  # ねんがじょう まだやねん…
    sc = Scene(["ねんがじょう", "まだやねん…"])
    sc.okan("doubt")
    for k in range(5):
        paint(sc.img, grid(CARD), 90 + k * 2, sc.ground - 14 - k * 5, 3)
    sc.item(SWEAT, sc.ox + 40, sc.oy + 6 + (i % 4) * 2, 2)
    if i % 2:
        sc.item(SWEAT, sc.ox - 2, sc.oy + 12, 2)
    return sc.window()


def s04(i):  # おせち つくるで！
    sc = Scene(["おせち", "つくるで！"])
    sc.okan("yell" if i % 2 else "smile")
    sc.oitem(LADLE, 12 + (i % 2), 3 - (i % 2))
    paint(sc.img, grid(JUBAKO), 96, sc.ground - 20, 4)
    paint(sc.img, grid(JUBAKO), 96, sc.ground - 40, 4)
    steam(sc, 108, sc.ground - 46, i, 3)
    return sc.window()


def s05(i):  # としこしそば できたで〜
    sc = Scene(["としこしそば", "できたで〜"])
    sc.okan("smile", dy=-(i % 2))
    sc.oitem(SOBA, 11, 10)
    steam(sc, sc.ox + 36, sc.oy + 24, i)
    sc.item(NOTE, 100, 30 - (i % 2) * 2, 2)
    return sc.window()


def s06(i):  # よいお年を〜
    sc = Scene(["よいお年を〜"])
    sc.okan("smile")
    sc.oitem(LADLE, 12 + (i % 2), 3 - (i % 2))
    for k, x in enumerate((90, 120, 146)):
        u = (i + k * 3) % 8
        sc.item(["W"], x, 10 + u * 8, 2)  # 雪
    return sc.window()


def s07(i):  # あけまして おめでとう！
    sc = Scene(["あけまして", "おめでとう！"])
    sc.item(SUN, 100, sc.ground - 30 - min(i, 4) * 8, 4)
    sc.okan("smile", dy=2 if i in (5, 6) else 0)
    for k, (x, y) in enumerate([(4, 10), (70, 6), (148, 14)]):
        sc.item(SPARK if (i + k) % 2 else SPARK_S, x, y, 2)
    return sc.window()


def s08(i):  # ことしも よろしゅうな
    sc = Scene(["ことしも", "よろしゅうな"])
    sc.okan("smile", dy=[0, 0, 1, 2, 2, 1, 0, 0][i])
    paint(sc.img, grid(MOCHI), 104, sc.ground - 16, 4)
    paint(sc.img, grid(MOCHI), 108, sc.ground - 28, 3)
    paint(sc.img, grid(MIKAN), 112, sc.ground - 40, 3)
    sc.item(HEART_S, 76, 24 - (i % 4) * 2, 2)
    return sc.window()


def s09(i):  # おとしだま あげるで〜
    sc = Scene(["おとしだま", "あげるで〜"])
    sc.okan("smile")
    sc.oitem(POCHI, 12 + min(i, 4) * 2, 9 - min(i, 4) // 2, 4)
    if i >= 4:
        sc.item(SPARK_S, 120, 30 + (i % 2) * 2, 2); sc.item(SPARK, 140, 50, 2)
    return sc.window()


def s10(i):  # おとしだまは あずかっとくで
    sc = Scene(["おとしだまは", "あずかっとくで"])
    sc.okan("smile" if i < 4 else "doubt")
    sc.oitem(POCHI, max(20 - min(i, 5) * 2, 11), 9, 4)  # ぽち袋がおかんの手元へ戻ってくる
    if i >= 5:
        sc.item(["Y.Y", ".Y.", "Y.Y"], sc.ox + 44, sc.oy + 4, 2)
    return sc.window()


def s11(i):  # おもち たべすぎた…
    sc = Scene(["おもち", "たべすぎた…"])
    puff = i % 4 >= 2
    paint(sc.img, okan("doubt"), sc.ox - 4 * puff, sc.oy, B + puff, B)
    for k in range(3):
        paint(sc.img, grid(MOCHI), 92 + k * 22, sc.ground - 12, 3)
    sc.item(SWEAT, sc.ox + 44, sc.oy + 6 + (i % 2) * 2, 2)
    return sc.window()


def s12(i):  # こたつから でられへん…
    sc = Scene(["こたつから", "でられへん…"])
    sc.okan("sleep", dx=30, dy=6 - (i % 4 >= 2))
    paint(sc.img, grid(KOTATSU), 22, sc.ground - 28, 4)
    paint(sc.img, grid(MIKAN), 80, sc.ground - 36, 2)
    u = i % 4
    sc.item(ZED, 100 + u * 2, sc.ground - 74 - u * 4, 1 + (u < 2))
    return sc.window()


def s13(i):  # みかん たべ
    sc = Scene(["みかん たべ"])
    sc.okan("smile")
    sc.oitem(MIKAN, 12 + min(i, 4) * 2, 10, 4)
    if i >= 4:
        sc.item(HEART_S, 110, 40 - (i % 4) * 2, 2)
    return sc.window()


def s14(i):  # はつもうで いくで〜
    sc = Scene(["はつもうで", "いくで〜"])
    paint(sc.img, grid(TORII), 100, sc.ground - 7 * 6, 6)
    sc.okan("smile", dx=(i % 4) * 2, dy=-(i % 2))
    return sc.window()


def s15(i):  # おみくじ だいきちや！
    sc = Scene(["おみくじ", "だいきちや！"])
    hop = [0, 0, 0, 4, 6, 4, 0, 0][i]
    sc.okan("wow" if i < 3 else "smile", dy=-hop)
    sc.oitem(OMIKUJI, 12, 3)
    if i >= 3:
        for k, (x, y) in enumerate([(4, 10), (70, 8), (100, 40), (140, 20), (130, 60)]):
            sc.item(SPARK if (i + k) % 2 else SPARK_S, x, y, 2)
    return sc.window()


def s16(i):  # おかんは ちからつきた…
    sc = Scene(["おかんは", "ちからつきた…"])
    lying = {(20 - y, x): c for (x, y), c in okan("sleep").items()}
    paint(sc.img, lying, 30, sc.ground - 13 * B, B)  # 横にばったり
    sc.item(["q.q.q", ".q.q."], 40 + (i % 2) * 2, sc.ground - 50 - (i % 4) * 2, 2)  # たましい？
    paint(sc.img, grid(CUP), 110, sc.ground - 10, 2)
    return sc.window()


STICKERS = [s01, s02, s03, s04, s05, s06, s07, s08, s09, s10, s11, s12, s13, s14, s15, s16]


def main():
    os.makedirs(OUT, exist_ok=True)
    allfr = []
    for n, fn in enumerate(STICKERS, 1):
        fr = [up(fn(i)) for i in range(FRAMES)]
        kb = save_apng(fr, os.path.join(OUT, f"{n:02d}.png"))
        allfr.append(fr)
        print(f"{n:02d}.png {fr[0].size} {kb:.1f}KB")
    # メイン画像 240x240: はたきを振るおかん
    main_fr = []
    for i in range(FRAMES):
        f = Image.new("RGBA", (120, 120), (0, 0, 0, 0))
        paint(f, grid(SUN), 74, 30 - min(i, 4) * 2, 3)
        paint(f, okan("yell" if i % 2 else "smile"), 20, 116 - 63 - (i % 2))
        paint(f, grid(DUSTER), 20 + 36 + (i % 2) * 3, 116 - 63 + 6, 3)
        for k in range(3):
            u = (i + k * 3) % 6
            paint(f, grid(DUST), 76 + k * 12, 70 - u * 4, 2)
        main_fr.append(up(f))
    save_apng(main_fr, os.path.join(OUT, "main.png"))
    # タブ画像 96x74
    tab = Image.new("RGBA", (48, 37), (0, 0, 0, 0))
    paint(tab, grid(OKAN[:5] + OKAN_FACES["smile"] + OKAN[9:10]), 2, 2, 3)
    paint(tab, grid(MIKAN), 36, 26, 2)
    up(tab).save(os.path.join(OUT, "tab.png"))
    # 一覧プレビュー
    sheets = []
    for i in range(FRAMES):
        sheet = Image.new("RGBA", (4 * 330 + 10, 4 * 280 + 10), (140, 168, 214, 255))
        for k, fr in enumerate(allfr):
            sheet.alpha_composite(fr[i], (10 + (k % 4) * 330, 10 + (k // 4) * 280))
        sheets.append(sheet)
    sheets[0].save(os.path.join(OUT, "preview.png"), save_all=True, append_images=sheets[1:], duration=DUR, loop=0)
    sheets[4].save(os.path.join(OUT, "preview_still.png"))
    with zipfile.ZipFile(os.path.join(OUT, "line_stickers.zip"), "w") as z:
        for name in [f"{n:02d}.png" for n in range(1, 17)] + ["main.png", "tab.png"]:
            z.write(os.path.join(OUT, name), name)


if __name__ == "__main__":
    main()

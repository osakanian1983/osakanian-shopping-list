"""ドット絵「スライムと戦うおかん 年末年始」LINEアニメーションスタンプ生成スクリプト

python3 make_okan2.py で out_okan2/ に 01.png〜16.png, main.png, tab.png, preview.png, line_stickers.zip を出力する。
キャラ・メッセージウィンドウは make_okan.py のものを使う。
"""
import os
import zipfile
from PIL import Image, ImageDraw
from make_stickers import SUN
from make_okan import (Scene, C, B, grid, paint, okan, slime, up, LADLE, BROOM, OKAN, OKAN_FACES,
                       FRAMES, DUR, save_apng, HEART, HEART_S, SPARK, SPARK_S, ANGER, SWEAT, NOTE, ZED, DUST)

OUT = os.path.join(os.path.dirname(__file__), "out_okan2")
C.update({"r": (200, 40, 50), "d": (120, 80, 50), "e": (255, 240, 220)})

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
DUSTY = {"g": "q", "G": "k", "W": "q"}


def steam(sc, x, y, i, n=2):
    for k in range(n):
        u = (i + k * 2) % 4
        sc.item(["q"], x + k * 4 + (u % 2) * 2, y - u * 3, 2)


def s01(i):  # おおそうじ はじめるで！
    sc = Scene(["おおそうじ", "はじめるで！"])
    sc.okan("yell", dy=-(i % 2))
    sc.oitem(DUSTER, 12 + (i % 2), 2 + (i % 2))
    for k in range(3):
        u = (i + k * 3) % 6
        sc.item(DUST, 56 + k * 12 + u, sc.ground - 50 + u * 4, 2)
    sc.slime("scared", x=100 + (i % 4) * 2, hop=[0, 3][i % 2])
    return sc.window()


def s02(i):  # スライムが ほこりまみれや
    sc = Scene(["スライムが", "ほこりまみれや"])
    sc.okan("wow" if i < 4 else "angry")
    sc.oitem(BROOM, 11, 8)
    sc.slime("sad", recolor=DUSTY, x=100 + [-1, 1][i % 2])
    for k in range(3):
        u = (i + k * 2) % 6
        sc.item(DUST, 98 + k * 16, sc.ground - 46 - u * 3, 2)
    return sc.window()


def s03(i):  # としこしそば できたで〜
    sc = Scene(["としこしそば", "できたで〜"])
    sc.okan("smile")
    sc.oitem(SOBA, 11, 10)
    steam(sc, sc.ox + 36, sc.oy + 24, i)
    sc.slime("happy", hop=[0, 5, 8, 5][i % 4])
    return sc.window()


def s04(i):  # よいお年を〜
    sc = Scene(["よいお年を〜"])
    sc.okan("smile")
    sc.oitem(LADLE, 12 + (i % 2), 3 - (i % 2))
    sc.slime("happy", squash=[0, 0, 1, 1, 1, 1, 0, 0][i])
    sc.item(NOTE, 78, 30 - (i % 2) * 2, 2)
    return sc.window()


def s05(i):  # あけまして おめでとう！
    sc = Scene(["あけまして", "おめでとう！"])
    sc.item(SUN, 60, sc.ground - 26 - min(i, 4) * 7, 3)
    sc.okan("smile", dy=-(i in (5, 6)))
    sc.slime("happy", squash=1 if i in (5, 6) else 0, extras=[(MIKAN, 6, -4)])
    for k, (x, y) in enumerate([(4, 10), (60, 6), (140, 12)]):
        sc.item(SPARK if (i + k) % 2 else SPARK_S, x, y, 2)
    return sc.window()


def s06(i):  # ことしも よろしゅうな
    sc = Scene(["ことしも", "よろしゅうな"])
    sc.okan("smile", dy=[0, 0, 1, 2, 2, 1, 0, 0][i])
    sc.slime("happy", squash=[0, 0, 1, 1, 1, 1, 0, 0][i], extras=[(MIKAN, 6, -4)])
    sc.item(HEART_S, 76, 24 - (i % 4) * 2, 2)
    return sc.window()


def s07(i):  # おとしだま あげるで〜
    sc = Scene(["おとしだま", "あげるで〜"])
    sc.okan("smile")
    sc.oitem(POCHI, 12 + min(i, 3), 9 - min(i, 3) // 2)
    sc.slime("kira", hop=[0, 4][i % 2], x=104 - min(i, 3) * 2)
    if i >= 3:
        sc.item(SPARK_S, 92, 30 + (i % 2) * 2, 2); sc.item(SPARK_S, 148, 26, 2)
    return sc.window()


def s08(i):  # おとしだまは あずかっとくで
    sc = Scene(["おとしだまは", "あずかっとくで"])
    sc.okan("smile" if i < 4 else "doubt", dx=0)
    px = 13 - min(i, 4) * 2  # ぽち袋がおかんの方へ吸い込まれていく
    sc.oitem(POCHI, max(px, 9), 9)
    sc.slime("kira" if i < 3 else "scared", x=100 + (i >= 4) * [-1, 1][i % 2])
    if i >= 4:
        sc.item(SWEAT, 96, sc.ground - 46, 2); sc.item(SWEAT, 146, sc.ground - 40, 2)
    return sc.window()


def s09(i):  # おもち たべすぎや！
    sc = Scene(["おもち", "たべすぎや！"])
    sc.okan("angry")
    sc.oitem(LADLE, 12, 4 - (i % 2))
    if i % 2:
        sc.item(ANGER, sc.ox + 2, sc.oy - 2, 2)
    puff = i % 4 >= 2
    sc.slime("happy", x=96 if puff else 100, bx=B + puff, by=B)
    sc.item(MOCHI, 120, sc.ground - 10, 2); sc.item(MOCHI, 134, sc.ground - 10, 2); sc.item(MOCHI, 127, sc.ground - 18, 2)
    return sc.window()


def s10(i):  # こたつで 寝たらあかん！
    sc = Scene(["こたつで", "寝たらあかん！"])
    sc.okan("yell" if i % 2 else "angry", dy=-(i % 2))
    if i % 2:
        sc.item(ANGER, sc.ox + 2, sc.oy - 2, 2)
    sc.slime("sleep", x=102, hop=14 - (i % 4 >= 2))
    paint(sc.img, grid(KOTATSU), 92, sc.ground - 21, 3)
    paint(sc.img, grid(MIKAN), 132, sc.ground - 29, 2)
    u = i % 4
    sc.item(ZED, 140 + u * 2, sc.ground - 56 - u * 4, 1 + (u < 2))
    return sc.window()


def s11(i):  # みかん たべ
    sc = Scene(["みかん たべ"])
    sc.okan("smile")
    sc.oitem(MIKAN, 12 + min(i, 3), 10, 3)
    sc.slime("happy", hop=[0, 4, 6, 4][i % 4])
    if i >= 3:
        sc.item(HEART_S, 92, 40 - (i % 4) * 2, 2)
    return sc.window()


def s12(i):  # はつもうで いくで〜
    sc = Scene(["はつもうで", "いくで〜"])
    paint(sc.img, grid(TORII), 108, sc.ground - 21 * 2 - 18, 4)
    sc.okan("smile", dx=(i % 4), dy=-(i % 2))
    sc.slime("happy", x=58 + (i % 4), hop=[0, 3][i % 2], bx=2, by=2)
    return sc.window()


def s13(i):  # おみくじ だいきちや！
    sc = Scene(["おみくじ", "だいきちや！"])
    hop = [0, 0, 0, 4, 6, 4, 0, 0][i]
    sc.okan("wow" if i < 3 else "smile", dy=-hop)
    sc.oitem(OMIKUJI, 12, 3)
    if i >= 3:
        for k, (x, y) in enumerate([(4, 10), (60, 8), (54, 40), (8, 46)]):
            sc.item(SPARK if (i + k) % 2 else SPARK_S, x, y, 2)
    sc.slime("kira", hop=[0, 4][i % 2] if i >= 3 else 0)
    return sc.window()


def s14(i):  # つまみぐい したやろ！
    sc = Scene(["つまみぐい", "したやろ！"])
    sc.okan("angry" if i % 2 else "doubt", dx=min(i, 4))
    if i % 2:
        sc.item(ANGER, sc.ox + 2, sc.oy - 2, 2)
    sc.slime("scared", x=104 + [-1, 1][i % 2])
    paint(sc.img, grid(JUBAKO), 82, sc.ground - 15, 3)
    sc.item(SWEAT, 100, sc.ground - 50, 2)
    return sc.window()


def s15(i):  # さむいから あったかくしいや
    sc = Scene(["さむいから", "あったかくしいや"])
    sc.okan("smile")
    on = i >= 3
    sc.slime("happy" if on else "sad", extras=[(SCARF, 0, 9)] if on else [], x=100)
    if not on:
        sc.oitem(["XrrrrrrX", "XrrrrrrX"], 12 + i * 2, 10)
        sc.item(["W.W", ".W.", "W.W"], 140, 20 + i * 4, 2)
    else:
        sc.item(HEART_S, 92, 40 - (i % 4) * 2, 2)
    return sc.window()


def s16(i):  # おかんは としを ひとつとった
    sc = Scene(["おかんは", "としをひとつとった"])
    hop = [0, 4, 6, 4, 0, 0, 0, 0][i]
    sc.okan("smile" if i < 4 else "doubt", dy=-hop)
    for k, (x, y) in enumerate([(2, 10), (48, 6), (4, 50), (54, 44)]):
        if i < 4:
            sc.item(SPARK if (i + k) % 2 else SPARK_S, x, y, 2)
    if i >= 4:
        sc.item(SWEAT, sc.ox + 40, sc.oy + 6, 2)
    sc.slime("happy" if i < 4 else "scared", hop=[0, 3][i % 2] if i < 4 else 0)
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
    # メイン画像 240x240: 初日の出とおかん・かがみもちスライム
    main_fr = []
    for i in range(FRAMES):
        f = Image.new("RGBA", (120, 120), (0, 0, 0, 0))
        paint(f, grid(SUN), 46, 60 - min(i, 4) * 4, 3)
        paint(f, okan("smile"), 4, 116 - 63 - (i % 2))
        g = slime("happy")
        g.update(grid(MIKAN, 6, -4))
        paint(f, g, 76, 116 - 28 - [0, 3][i % 2], 2)
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

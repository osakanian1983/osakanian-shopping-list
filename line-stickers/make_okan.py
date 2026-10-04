"""ドット絵「おかん奮闘記」LINEアニメーションスタンプ生成スクリプト

python3 make_okan.py で out_okan/ に 01.png〜16.png, main.png, tab.png, preview.png, line_stickers.zip を出力する。
画面下にRPG風メッセージウィンドウ。大阪弁のおかんが毎日の家事・子育て・買い物と戦う。道具は場面ごとに変わる。
"""
import os
import zipfile
from PIL import Image, ImageDraw, ImageFont
from make_stickers import FRAMES, DUR, save_apng, HEART, HEART_S, SPARK, SPARK_S, ANGER, SWEAT, NOTE, ZED, CUP, MOON

OUT = os.path.join(os.path.dirname(__file__), "out_okan")
FONT = ImageFont.truetype("/usr/share/fonts/opentype/unifont/unifont_jp.otf", 16)
SCALE = 2                 # 1ドット = 2px
CW, CH = 160, 135         # 小キャンバス → 320x270
B = 3                     # キャラの1マス

C = {
    "X": (62, 44, 40), "h": (150, 90, 160), "H": (190, 130, 200), "s": (255, 214, 180), "K": (62, 44, 40),
    "p": (255, 150, 150), "R": (225, 70, 90), "c": (240, 120, 150), "w": (255, 255, 255), "W": (255, 255, 255),
    "b": (90, 140, 220), "B": (90, 170, 240), "n": (150, 100, 60), "k": (95, 95, 110), "g": (120, 215, 160),
    "G": (70, 170, 120), "l": (210, 235, 255), "Y": (255, 206, 40), "O": (255, 150, 40), "M": (255, 236, 140), "N": (60, 80, 160),
    "q": (200, 200, 210), "y": (230, 200, 120),
}

OKAN = [
    "..XhXhXhXhX..",
    ".XhHhhHhhHhX.",
    "XhhhhhhhhhhhX",
    "XhhhhhhhhhhhX",
    ".XhssssssshX.",
    ".XsKKsssKKsX.",
    ".XpssssssspX.",
    ".XsssRRRsssX.",
    "..XssRRRssX..",
    "...XXXXXXX...",
    ".XcXwwwwwXcX.",
    "XccXwwwwwXccX",
    "XccXwwpwwXccX",
    "XsXXwwwwwXXsX",
    ".X.XwwwwwX.X.",
    "...XwwwwwX...",
    "...XcccccX...",
    "...XcXXXcX...",
    "...XsX.XsX...",
    "..XbbX.XbbX..",
    "..XXXX.XXXX..",
]
OKAN_FACES = {  # 5〜8行目を差し替え
    "yell":  [".XsKKsssKKsX.", ".XpssssssspX.", ".XsssRRRsssX.", "..XssRRRssX.."],
    "smile": [".XssKsssKssX.", ".XpKsKsKsKpX.", ".XsssRRRsssX.", "..XsssRsssX.."],
    "angry": [".XKKsssssKKX.", ".XpsKKsKKspX.", ".XsssRRRsssX.", "..XsssssssX.."],
    "wow":   [".XsKKsssKKsX.", ".XpKKsssKKpX.", ".XssssRssssX.", "..XssRRRssX.."],
    "sleep": [".XsssssssssX.", ".XpKKsssKKpX.", ".XsssssssssX.", "..XsssRsssX.."],
    "doubt": [".XsXXsssXXsX.", ".XpKKsssKKpX.", ".XsssssssssX.", "..XsssRRssX.."],
}
PAN_UP = ["..XXXX..", "XXkkkkXX", "XkkkkkkX", "XkkkkkkX", ".XXkkXX.", "...nn...", "...nn...", "...nn..."]
PAN_SW = ["...XXXX..", ".XXkkkkXX", "nnXkkkkkkX", "nnXkkkkkkX", ".XXkkkkXX", "...XXXX.."]
LADLE = [".XXXX.", "XqqqqX", "XqqqqX", ".XXXX.", "...q..", "...q..", "...q..", "...q.."]
SLIPPER = [".XXX.", "XbbbX", "XbbbX", "XwwwX", "XbbbX", "XbbbX", ".XXX."]
SLIPPER_SW = [".XXXXXXX.", "XbbXbbbbX", "XbbwbbbbX", "XbbXbbbbX", ".XXXXXXX."]
BROOM = ["....n", "...n.", "...n.", "..n..", ".XXX.", "XyyyX", "XyyyyX", "XyXyXyX"]
VACUUM = ["XXX.....", "XkX.XXXX", ".XkXkRRkX", "..XkkkkkX", "...XXXXX.", "...X..X.."]
BOWL = [".X.X.", "..X..", ".www.", "wwwww", "XRRRX", ".XRX."]
THUMB = ["..X..", ".XsX.", ".XsXX", "XsssX", "XsssX", ".XXX."]
QUEST = [".XX.", "X..X", "..X.", ".X..", "....", ".X.."]
BOOM = ["...Y...", "..YOY..", "YYOWOYY", "..YOY..", "...Y..."]
DUST = [".q.", "qqq", ".q."]
BUG = ["X...X", ".XXX.", "XXKXX", ".XXX.", "X...X"]
BAG = ["...G.G.", "..XGXGX", "XXXXXXX", "XwwwwwX", "XwRwRwX", "XwwwwwX", "XXXXXXX"]
TAG = ["XXXXXXX", "XYYYYYX", "XYRRRYX", "XYYYYYX", "XXXXXXX"]
SPEED = ["WWWW", "....", ".WWW", "....", "WWWW"]


def grid(rows, x0=0, y0=0):
    return {(x0 + x, y0 + y): c for y, r in enumerate(rows) for x, c in enumerate(r) if c not in ". "}


def paint(img, g, ox, oy, bx=B, by=None):
    by = by or bx
    d = ImageDraw.Draw(img)
    for (x, y), c in g.items():
        d.rectangle((ox + x * bx, oy + y * by, ox + x * bx + bx - 1, oy + y * by + by - 1), fill=C[c])


def okan(face="smile"):
    rows = OKAN[:5] + OKAN_FACES[face] + OKAN[9:]
    return grid(rows)


class Scene:
    """1コマ分の絵。lines はメッセージウィンドウの行(1〜2行)"""

    def __init__(self, lines):
        self.img = Image.new("RGBA", (CW, CH), (0, 0, 0, 0))
        self.lines = lines
        self.top = CH - 4 - 18 * len(lines) - 4       # ウィンドウ上端
        self.ground = self.top - 2
        self.ox = 10

    @property
    def oy(self):
        return self.ground - 21 * B

    def okan(self, face="smile", dx=0, dy=0):
        self.ox += dx
        paint(self.img, okan(face), self.ox, self.oy + dy)

    def oitem(self, rows, cx, cy, b=B):
        """おかん基準の位置(マス)に小物を置く"""
        paint(self.img, grid(rows), self.ox + cx * B, self.oy + cy * B, b)

    def item(self, rows, x, y, b=2):
        paint(self.img, grid(rows), x, y, b)

    def window(self):
        d = ImageDraw.Draw(self.img)
        d.fontmode = "1"
        d.rectangle((2, self.top, CW - 3, CH - 2), fill=(24, 24, 48, 245), outline=(255, 255, 255), width=2)
        for k, s in enumerate(self.lines):
            assert d.textlength(s, font=FONT) <= CW - 14, s
            d.text((8, self.top + 3 + k * 18), s, font=FONT, fill=(255, 255, 255))
        return self.img


def s01(i):  # おかん しゅつどうや！
    sc = Scene(["おかん", "しゅつどうや！"])
    hop = [0, 4, 6, 4, 0, 0, 0, 0][i]
    sc.okan("yell" if hop else "smile", dy=-hop)
    sc.oitem(LADLE, 12, 3 - (hop > 0))
    for k, (x, y) in enumerate([(70, 20), (110, 50), (140, 16), (96, 80)]):
        sc.item(SPARK if (i + k) % 2 else SPARK_S, x, y, 2)
    return sc.window()


def s02(i):  # おかんの こうげき！ (スリッパで虫をたたく)
    sc = Scene(["おかんのこうげき！" if i < 6 else "むしは にげだした"])
    swing = i in (2, 3, 4)
    sc.okan("yell", dx=10 if swing else 0)
    if swing:
        sc.oitem(SLIPPER_SW, 11, 9)
    else:
        sc.oitem(SLIPPER, 11, 0 - (i % 2))
    if i < 2:
        sc.item(BUG, 108 + i * 4, sc.ground - 10, 3)
    elif i < 6:
        sc.item(BOOM, 104, sc.ground - 30, 4)
        d = ImageDraw.Draw(sc.img); d.fontmode = "1"
        ny = sc.ground - 56 - (i - 2) * 4
        for ddx, ddy in ((-1, 0), (1, 0), (0, -1), (0, 1)):
            d.text((112 + ddx, ny + ddy), "MISS", font=FONT, fill=(255, 255, 255))
        d.text((112, ny), "MISS", font=FONT, fill=C["R"])
    else:
        sc.item(BUG, 130 + (i - 6) * 12, sc.ground - 30 - (i - 6) * 10, 2)
        sc.item(SWEAT, sc.ox + 40, sc.oy + 6, 2)
    return sc.window()


def s03(i):  # はよ寝なさい！
    sc = Scene(["はよ寝なさい！"])
    sc.okan("yell" if i % 2 else "angry", dy=-(i % 2))
    sc.oitem(LADLE, 12, 4 - (i % 2))
    if i % 2:
        sc.item(ANGER, sc.ox + 2, sc.oy - 2, 2)
    sc.item(MOON, 120, 20, 4)
    u = i % 4
    sc.item(ZED, 100 + u * 4, sc.ground - 30 - u * 6, 2)
    return sc.window()


def s04(i):  # ごはん できたで〜
    sc = Scene(["ごはん できたで〜"])
    sc.okan("smile", dy=-(i % 2))
    sc.oitem(BOWL, 12, 9)
    for k in range(2):
        u = (i + k * 2) % 4
        sc.item(["q"], sc.ox + 38 + k * 6 + (u % 2) * 2, sc.oy + 22 - u * 4, 2)
    sc.item(NOTE, 100, 30 - (i % 2) * 2, 2)
    return sc.window()


def s05(i):  # かたづけなさい！
    sc = Scene(["かたづけなさい！"])
    sc.okan("angry", dx=i % 2)
    sc.oitem(BROOM, 11 + (i % 2) * 2, 8)
    for k in range(4):
        u = (i + k * 3) % 6
        sc.item(DUST, 64 + k * 20 + u * 2, sc.ground - 6 - u * 5, 2)
    if i % 2:
        sc.item(ANGER, sc.ox + 2, sc.oy - 2, 2)
    return sc.window()


def s06(i):  # しゅくだいしたん？
    sc = Scene(["しゅくだいしたん？"])
    sc.okan("doubt", dx=min(i, 4) * 3)
    sc.oitem(QUEST, 4, -8 - (i % 2), 3)
    return sc.window()


def s07(i):  # あんたなぁ…
    sc = Scene(["あんたなぁ…"])
    sc.okan("angry")
    sc.oitem(SLIPPER, 11, 2 - (i % 2))
    if i % 4 < 2:
        sc.item(ANGER, sc.ox + 2, sc.oy - 4, 3)
    for k in range(3):  # ゴゴゴ…
        sc.item(["X", "X", ".", "X"], 90 + k * 20 + (i % 2), 30 + k * 10, 3)
    return sc.window()


def s08(i):  # かいしんの ねぎり！
    sc = Scene(["かいしんの", "ねぎり！"])
    sc.okan("smile" if i >= 4 else "yell", dx=6 if i in (2, 3) else 0)
    paint(sc.img, grid(TAG), 100, sc.ground - 40, 5)
    if i >= 2:  # 値札に赤い線が入る
        d = ImageDraw.Draw(sc.img)
        d.line((98, sc.ground - 12, 138, sc.ground - 42), fill=C["R"], width=3)
    if i >= 4:
        for k, (x, y) in enumerate([(88, 10), (140, 20), (150, 50)]):
            sc.item(SPARK if (i + k) % 2 else SPARK_S, x, y, 2)
    return sc.window()


def s09(i):  # そうじきで すいこんだ！
    sc = Scene(["そうじきで", "すいこんだ！"])
    sc.okan("yell")
    sc.oitem(VACUUM, 12, 13)
    d = ImageDraw.Draw(sc.img)
    nx, ny = sc.ox + 20 * B, sc.oy + 15 * B
    for k in range(3):
        u = (i + k) % 3
        d.rectangle((nx + 6 + u * 6, ny - 4 + k * 4, nx + 9 + u * 6, ny - 4 + k * 4), fill=(255, 255, 255, 200))
    for k in range(4):  # ホコリが吸い込まれていく
        u = (i * 2 + k * 5) % 10
        sc.item(DUST, nx + 64 - u * 6, ny - 10 + k * 4 - u, 2)
    return sc.window()


def s10(i):  # おかんは レベルが あがった
    sc = Scene(["おかんは", "レベルが あがった"])
    hop = [0, 4, 6, 4, 0, 0, 0, 0][i]
    sc.okan("smile", dy=-hop)
    for k, (x, y) in enumerate([(2, 10), (48, 6), (4, 50), (54, 44), (100, 30), (140, 60)]):
        sc.item(SPARK if (i + k) % 2 else SPARK_S, x, y, 2)
    return sc.window()


def s11(i):  # タイムセールや いくでぇ！
    sc = Scene(["タイムセールや", "いくでぇ！"])
    sc.okan("yell", dx=(i % 4) * 4, dy=-(i % 2) * 2)
    sc.oitem(BAG, 12, 9, 3)
    for k in range(3):
        sc.item(SPEED, 2 - (i % 2) * 2, sc.oy + 10 + k * 14, 2)
    sc.item(SWEAT, sc.ox + 40, sc.oy + 4, 2)
    return sc.window()


def s12(i):  # おつかれさん
    sc = Scene(["おつかれさん"])
    sc.okan("smile")
    sc.oitem(CUP, 12, 11, 2)
    for k in range(2):
        u = (i + k * 2) % 4
        sc.item(["q"], sc.ox + 38 + k * 4 + (u % 2) * 2, sc.oy + 26 - u * 3, 2)
    sc.item(HEART_S, 100, 40 - (i % 4) * 2, 2)
    return sc.window()


def s13(i):  # いってらっしゃい
    sc = Scene(["いってらっしゃい"])
    sc.okan("smile")
    sc.oitem(LADLE, 12 + (i % 2), 3 - (i % 2))
    sc.item(NOTE, 90, 30 - (i % 2) * 2, 2)
    return sc.window()


def s14(i):  # おかえり〜
    sc = Scene(["おかえり〜"])
    sc.okan("smile", dy=-(i % 2))
    sc.item(HEART, 80, 26 - (i % 4) * 2, 3)
    return sc.window()


def s15(i):  # ありがとうな
    sc = Scene(["ありがとうな"])
    sc.okan("smile")
    sc.item(HEART if i % 2 else HEART_S, 22, 8, 3)
    for k, x in enumerate((92, 120, 146)):
        sc.item(HEART_S, x, sc.ground - 40 - ((i + k * 2) % 4) * 6, 2)
    return sc.window()


def s16(i):  # わかった！
    sc = Scene(["わかった！"])
    sc.okan("smile", dy=-(i in (3, 4)))
    sc.oitem(THUMB, 12, 9 - (i in (3, 4)))
    if i >= 3:
        sc.item(SPARK_S if i % 2 else SPARK, 64, 40, 2)
    return sc.window()


STICKERS = [s01, s02, s03, s04, s05, s06, s07, s08, s09, s10, s11, s12, s13, s14, s15, s16]


def up(img, k=SCALE):
    return img.resize((img.width * k, img.height * k), Image.NEAREST)


def main():
    os.makedirs(OUT, exist_ok=True)
    allfr = []
    for n, fn in enumerate(STICKERS, 1):
        fr = [up(fn(i)) for i in range(FRAMES)]
        kb = save_apng(fr, os.path.join(OUT, f"{n:02d}.png"))
        allfr.append(fr)
        print(f"{n:02d}.png {fr[0].size} {kb:.1f}KB")
    # メイン画像 240x240 (APNG): お玉を振り上げるおかん
    main_fr = []
    for i in range(FRAMES):
        f = Image.new("RGBA", (120, 120), (0, 0, 0, 0))
        hop = [0, 3, 5, 3, 0, 0, 0, 0][i]
        paint(f, okan("yell" if hop else "smile"), 30, 116 - 63 - hop)
        paint(f, grid(LADLE), 30 + 36, 116 - 63 + 9 - hop, 3)
        for k, (x, y) in enumerate([(6, 20), (96, 30), (10, 70)]):
            paint(f, grid(SPARK if (i + k) % 2 else SPARK_S), x, y, 2)
        main_fr.append(up(f))
    save_apng(main_fr, os.path.join(OUT, "main.png"))
    # タブ画像 96x74
    tab = Image.new("RGBA", (48, 37), (0, 0, 0, 0))
    paint(tab, grid(OKAN[:5] + OKAN_FACES["smile"] + OKAN[9:10]), 2, 2, 3)
    paint(tab, grid(BAG), 34, 22, 2)
    up(tab).save(os.path.join(OUT, "tab.png"))
    # 一覧プレビュー
    sheets = []
    for i in range(FRAMES):
        sheet = Image.new("RGBA", (4 * 330 + 10, 4 * 280 + 10), (140, 168, 214, 255))
        for k, fr in enumerate(allfr):
            sheet.alpha_composite(fr[i], (10 + (k % 4) * 330, 10 + (k // 4) * 280))
        sheets.append(sheet)
    sheets[0].save(os.path.join(OUT, "preview.png"), save_all=True, append_images=sheets[1:], duration=DUR, loop=0)
    sheets[3].save(os.path.join(OUT, "preview_still.png"))
    with zipfile.ZipFile(os.path.join(OUT, "line_stickers.zip"), "w") as z:
        for name in [f"{n:02d}.png" for n in range(1, 17)] + ["main.png", "tab.png"]:
            z.write(os.path.join(OUT, name), name)


if __name__ == "__main__":
    main()

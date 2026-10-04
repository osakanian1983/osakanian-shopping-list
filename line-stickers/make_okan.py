"""ドット絵「スライムと戦うおかん」LINEアニメーションスタンプ生成スクリプト

python3 make_okan.py で out_okan/ に 01.png〜16.png, main.png, tab.png, preview.png, line_stickers.zip を出力する。
画面下にRPG風メッセージウィンドウ、おかんは大阪弁、武器は場面ごとに変わる。
"""
import os
import zipfile
from PIL import Image, ImageDraw, ImageFont
from make_stickers import FRAMES, DUR, save_apng, HEART, HEART_S, SPARK, SPARK_S, ANGER, SWEAT, NOTE, ZED, CUP

OUT = os.path.join(os.path.dirname(__file__), "out_okan")
FONT = ImageFont.truetype("/usr/share/fonts/opentype/unifont/unifont_jp.otf", 16)
SCALE = 2                 # 1ドット = 2px
CW, CH = 160, 135         # 小キャンバス → 320x270
B = 3                     # キャラの1マス

C = {
    "X": (62, 44, 40), "h": (150, 90, 160), "H": (190, 130, 200), "s": (255, 214, 180), "K": (62, 44, 40),
    "p": (255, 150, 150), "R": (225, 70, 90), "c": (240, 120, 150), "w": (255, 255, 255), "W": (255, 255, 255),
    "b": (90, 140, 220), "B": (90, 170, 240), "n": (150, 100, 60), "k": (95, 95, 110), "g": (120, 215, 160),
    "G": (70, 170, 120), "Y": (255, 206, 40), "O": (255, 150, 40), "M": (255, 236, 140), "N": (60, 80, 160),
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
SLIME = [  # 先っぽが右に曲がったしずく型
    "........XX....",
    ".......XgX....",
    "......XggX....",
    ".....XgggX....",
    "....XggggGX...",
    "...XgWgggGGX..",
    "..XgWWggggGGX.",
    ".XgWgggggggGGX",
    "XggggggggggGGX",
    "XggggggggggGGX",
    "XgggggggggggGX",
    "XgggggggggggGX",
    "XGgggggggggGGX",
    ".XXXXXXXXXXXX.",
]
FACE_DY = 4   # 顔パーツを下へずらす量
SLIME_FACES = {
    "normal": {"K": [(4, 4), (4, 5), (9, 4), (9, 5), (5, 7), (6, 8), (7, 8), (8, 7)]},
    "happy":  {"K": [(3, 5), (4, 4), (5, 5), (8, 5), (9, 4), (10, 5), (5, 7), (6, 8), (7, 8), (8, 7)], "p": [(2, 6), (11, 6)]},
    "sleep":  {"K": [(3, 5), (4, 5), (5, 5), (8, 5), (9, 5), (10, 5), (6, 7), (7, 7)]},
    "scared": {"K": [(4, 4), (4, 5), (9, 4), (9, 5), (4, 8), (5, 7), (6, 8), (7, 7), (8, 8), (9, 7)], "W": [(4, 4), (9, 4)]},
    "hit":    {"K": [(3, 4), (5, 4), (4, 5), (3, 6), (5, 6), (8, 4), (10, 4), (9, 5), (8, 6), (10, 6), (6, 8), (7, 8)]},
    "sad":    {"K": [(3, 4), (4, 5), (10, 4), (9, 5), (6, 7), (7, 7), (5, 8), (8, 8)]},
    "kira":   {"K": [(4, 4), (5, 4), (4, 5), (5, 5), (8, 4), (9, 4), (8, 5), (9, 5), (5, 7), (6, 8), (7, 8), (8, 7)],
               "W": [(4, 4), (8, 4)], "p": [(2, 6), (11, 6)]},
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


def slime(face="normal", squash=0):
    g = grid(SLIME)
    for k, ps in SLIME_FACES[face].items():
        for x, y in ps:
            g[(x, y + FACE_DY)] = k
    if squash:  # 胴の1行を抜いて少し縮める（大きくつぶすのは Scene.slime でマスを平たくする）
        g = {(x, y - 1 if y > 10 else y): c for (x, y), c in g.items() if y != 10}
    return g


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

    def slime(self, face="normal", x=100, hop=0, squash=0, bx=B, by=B, extras=(), recolor=None):
        if squash >= 2:  # ぺしゃんこ: 横長・平たいマスで描く
            bx, by, squash = B + 1, 2, 0
        g = slime(face, squash)
        if recolor:
            g = {p: recolor.get(c, c) for p, c in g.items()}
        for rows, ex, ey in extras:  # スライム基準の位置(マス)に小物を重ねる
            g.update(grid(rows, ex, ey))
        h = max(y for _, y in g) + 1
        paint(self.img, g, x, self.ground - h * by - hop, bx, by)

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


def s01(i):  # スライムが あらわれた！
    sc = Scene(["スライムが", "あらわれた！"])
    sc.okan("wow" if i < 4 else "angry")
    if i >= 4:
        sc.oitem(LADLE, 12, 4 + (i % 2))
    x = [160, 140, 122, 104, 100, 100, 100, 100][i]
    sc.slime("normal", x=x, hop=[0, 6, 0, 6, 0, 3, 0, 3][i])
    if i < 4:
        sc.item(SWEAT, sc.ox + 40, sc.oy + 4)
    return sc.window()


def s02(i):  # おかんの こうげき！
    sc = Scene(["おかんのこうげき！" if i < 6 else "スライムは のびた"])
    swing = i in (2, 3, 4)
    sc.okan("yell", dx=8 if swing else 0)
    if swing:
        sc.oitem(PAN_SW, 11, 9)
    else:
        sc.oitem(PAN_UP, 9, -7 + (i % 2))
    if i in (2, 3, 4, 5):
        sc.slime("hit", x=100 + (4 if i == 2 else 0), squash=3)
        if i in (2, 3):
            sc.item(BOOM, 108, sc.ground - 36, 3)
        d = ImageDraw.Draw(sc.img); d.fontmode = "1"
        ny = sc.ground - 48 - (i - 2) * 4
        for ddx, ddy in ((-1, 0), (1, 0), (0, -1), (0, 1)):
            d.text((112 + ddx, ny + ddy), "999", font=FONT, fill=(255, 255, 255))
        d.text((112, ny), "999", font=FONT, fill=C["R"])
    else:
        sc.slime("scared" if i < 2 else "hit", hop=[0, 4, 0, 0, 0, 0, 0, 0][i], squash=0 if i < 2 else 3)
    return sc.window()


def s03(i):  # はよ寝なさい！
    sc = Scene(["はよ寝なさい！"])
    sc.okan("yell" if i % 2 else "angry", dy=-(i % 2))
    sc.oitem(LADLE, 12, 4 - (i % 2))
    if i % 2:
        sc.item(ANGER, sc.ox + 2, sc.oy - 2, 2)
    sc.slime("sleep", squash=i % 4 >= 2)
    u = i % 4
    sc.item(ZED, 136 + u * 2, sc.ground - 40 - u * 4, 1 + (u < 2))
    return sc.window()


def s04(i):  # ごはん できたで〜
    sc = Scene(["ごはん できたで〜"])
    sc.okan("smile")
    sc.oitem(BOWL, 12, 9)
    for k in range(2):
        u = (i + k * 2) % 4
        sc.item(["q"], sc.ox + 38 + k * 6 + (u % 2) * 2, sc.oy + 22 - u * 4, 2)
    sc.slime("happy", hop=[0, 6, 10, 6][i % 4])
    sc.item(HEART_S, 140, sc.ground - 46 - (i % 4) * 2, 2)
    return sc.window()


def s05(i):  # かたづけなさい！
    sc = Scene(["かたづけなさい！"])
    sc.okan("angry", dx=i % 2)
    sc.oitem(BROOM, 11 + (i % 2) * 2, 8)
    for k in range(3):
        u = (i + k * 3) % 6
        sc.item(DUST, 60 + k * 10 + u * 2, sc.ground - 6 - u * 3, 2)
    sc.slime("scared", x=100 + [0, 2, 4, 2][i % 4], hop=[0, 3][i % 2])
    sc.item(SWEAT, 96, sc.ground - 40, 2)
    return sc.window()


def s06(i):  # しゅくだいしたん？
    sc = Scene(["しゅくだいしたん？"])
    sc.okan("doubt", dx=min(i, 4))
    sc.oitem(QUEST, 4, -8 - (i % 2), 3)
    sc.slime("scared", x=100 + [-1, 1][i % 2])
    if i % 2:
        sc.item(SWEAT, 96, sc.ground - 40, 2); sc.item(SWEAT, 142, sc.ground - 36, 2)
    return sc.window()


def s07(i):  # あんたなぁ…
    sc = Scene(["あんたなぁ…"])
    sc.okan("angry")
    sc.oitem(SLIPPER, 11, 2 - (i % 2))
    if i % 4 < 2:
        sc.item(ANGER, sc.ox + 2, sc.oy - 4, 3)
    sc.slime("sad", squash=2)
    sc.item(SWEAT, 96 + (i % 2), sc.ground - 30, 2)
    return sc.window()


def s08(i):  # かいしんの いちげき！
    sc = Scene(["かいしんの", "いちげき！"])
    hit = i in (2, 3, 4, 5, 6)
    sc.okan("yell", dx=10 if hit else 0)
    if hit:
        sc.oitem(SLIPPER_SW, 11, 9)
    else:
        sc.oitem(SLIPPER, 11, 0 - (i % 2))
    if hit:
        sc.slime("hit", x=102 + (6 if i == 2 else 0), squash=4)
        if i in (2, 3, 4):
            sc.item(BOOM, 104, sc.ground - 44, 4)
            for k, (x, y) in enumerate([(84, 20), (140, 16), (92, 50), (146, 46)]):
                sc.item(SPARK if (i + k) % 2 else SPARK_S, x, y, 2)
    else:
        sc.slime("scared", hop=[0, 4, 0, 0, 0, 0, 0, 2][i])
    return sc.window()


def s09(i):  # そうじきで すいこんだ！
    sc = Scene(["そうじきで", "すいこんだ！"])
    sc.okan("yell")
    sc.oitem(VACUUM, 12, 13)
    d = ImageDraw.Draw(sc.img)
    nx, ny = sc.ox + 20 * B, sc.oy + 15 * B
    for k in range(3):  # 吸い込みの線
        u = (i + k) % 3
        d.rectangle((nx + 6 + u * 6, ny - 4 + k * 4, nx + 9 + u * 6, ny - 4 + k * 4), fill=(255, 255, 255, 200))
    if i < 6:
        sx = 100 - i * 6
        sc.slime("scared", x=sx, bx=B + i // 2, by=max(1, B - i // 2))
    else:
        sc.item(SPARK_S, nx + 4, ny - 10, 2)
    return sc.window()


def s10(i):  # おかんは レベルが あがった
    sc = Scene(["おかんは", "レベルが あがった"])
    hop = [0, 4, 6, 4, 0, 0, 0, 0][i]
    sc.okan("smile", dy=-hop)
    for k, (x, y) in enumerate([(2, 10), (48, 6), (4, 50), (54, 44)]):
        sc.item(SPARK if (i + k) % 2 else SPARK_S, x, y, 2)
    sc.slime("kira", hop=[0, 4][i % 2])
    return sc.window()


def s11(i):  # スライムが なかまに なりたそう →「しゃあないなぁ」
    later = i >= 5
    sc = Scene(["おかん", "「しゃあないなぁ」"] if later else ["スライムが", "なかまになりたそう"])
    sc.okan("smile" if later else "doubt")
    sc.slime("kira", x=100 - min(i, 4) * 4, hop=[0, 4][i % 2])
    if later:
        sc.item(HEART_S, 70, 20 - (i - 5) * 2, 2)
    return sc.window()


def s12(i):  # おつかれさん
    sc = Scene(["おつかれさん"])
    sc.okan("smile")
    sc.oitem(CUP, 12, 11, 2)
    for k in range(2):
        u = (i + k * 2) % 4
        sc.item(["q"], sc.ox + 38 + k * 4 + (u % 2) * 2, sc.oy + 26 - u * 3, 2)
    sc.slime("happy", squash=i % 4 >= 2)
    sc.item(NOTE, 140, sc.ground - 46 + (i % 2) * 2, 2)
    return sc.window()


def s13(i):  # いってらっしゃい
    sc = Scene(["いってらっしゃい"])
    sc.okan("smile")
    sc.oitem(LADLE, 12 + (i % 2), 3 - (i % 2))
    sc.slime("happy", hop=[0, 5, 8, 5][i % 4], x=100 + i * 2)
    sc.item(NOTE, 76, 30 - (i % 2) * 2, 2)
    return sc.window()


def s14(i):  # おかえり〜
    sc = Scene(["おかえり〜"])
    sc.okan("smile", dy=-(i % 2))
    sc.slime("happy", x=110 - [0, 4, 8, 4][i % 4], hop=[0, 6, 8, 6][i % 4])
    sc.item(HEART, 72, 26 - (i % 4) * 2, 2)
    return sc.window()


def s15(i):  # ありがとうな
    sc = Scene(["ありがとうな"])
    sc.okan("smile")
    sc.item(HEART if i % 2 else HEART_S, 20 if i % 2 else 22, 8, 3 if i % 2 else 3)
    sc.slime("happy", squash=[0, 0, 1, 1][i % 4])
    for k, x in enumerate((92, 146)):
        sc.item(HEART_S, x, sc.ground - 40 - ((i + k * 2) % 4) * 3, 2)
    return sc.window()


def s16(i):  # わかった！
    sc = Scene(["わかった！"])
    sc.okan("smile", dy=-(i in (3, 4)))
    sc.oitem(THUMB, 12, 9 - (i in (3, 4)))
    if i >= 3:
        sc.item(SPARK_S if i % 2 else SPARK, 54, 40, 2)
    sc.slime("happy", hop=[0, 0, 0, 4, 6, 4, 0, 0][i])
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
    # メイン画像 240x240 (APNG): にらみ合い
    main_fr = []
    for i in range(FRAMES):
        f = Image.new("RGBA", (120, 120), (0, 0, 0, 0))
        paint(f, okan("yell" if i % 2 else "angry"), 4, 116 - 63 - (i % 2))
        paint(f, grid(PAN_UP), 4 + 27, 116 - 63 - 21 + (i % 2), 3)
        paint(f, slime("scared"), 76, 116 - 28 - [0, 4][i % 2], 2)
        main_fr.append(up(f))
    save_apng(main_fr, os.path.join(OUT, "main.png"))
    # タブ画像 96x74
    tab = Image.new("RGBA", (48, 37), (0, 0, 0, 0))
    paint(tab, grid(OKAN[:5] + OKAN_FACES["smile"] + OKAN[9:10]), 2, 2, 3)
    paint(tab, slime("happy"), 32, 23, 1)
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

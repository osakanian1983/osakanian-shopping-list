"""ドット絵ねこ LINEアニメーションスタンプ生成スクリプト

python3 make_stickers.py で out/ に 01.png〜16.png, main.png, tab.png, preview.png を出力する。
LINE仕様: APNG / 最大320x270 / 5〜20フレーム / ループ1〜4回 / 総再生時間1〜4秒(整数秒) / 300KB以下
"""
import os
import zipfile
from PIL import Image, ImageDraw, ImageFont, ImageFilter

OUT = os.path.join(os.path.dirname(__file__), "out")
FONT = ImageFont.truetype("/usr/share/fonts/opentype/unifont/unifont_jp.otf", 16)
SCALE = 3                 # 1ドット = 3px
CW, CH = 106, 90          # 小キャンバス → 318x270
B = 4                     # ねこの1マス = 小キャンバス4ドット

C = {
    "X": (62, 44, 40, 255), "o": (255, 186, 92, 255), "s": (232, 140, 60, 255),
    "K": (62, 44, 40, 255), "p": (255, 140, 150, 255), "W": (255, 255, 255, 255),
    "R": (238, 72, 92, 255), "Y": (255, 206, 40, 255), "O": (255, 150, 40, 255),
    "B": (90, 170, 240, 255), "G": (150, 200, 110, 255), "g": (190, 190, 200, 255),
    "N": (60, 80, 160, 255), "M": (255, 236, 140, 255),
}

CAT = [
    "...X.......X...",
    "..XoX.....XoX..",
    "..XooXXXXXooX..",
    ".XooosososoooX.",  # おでこのしま模様
    ".XoooooooooooX.",
    "XoooooooooooooX",
    "XoooooooooooooX",
    "XoooooooooooooX",
    "XoooooooooooooX",
    ".XoooooooooooX.",
    "..XXXXXXXXXXX..",
    "..XoX.....XoX..",
    "..XX.......XX..",
]

FACES = {
    "normal":  {"K": [(4, 5), (4, 6), (10, 5), (10, 6), (5, 7), (6, 8), (7, 7), (8, 8), (9, 7)]},
    "happy":   {"K": [(3, 6), (4, 5), (5, 6), (9, 6), (10, 5), (11, 6), (5, 7), (6, 8), (7, 7), (8, 8), (9, 7)]},
    "wink":    {"K": [(4, 5), (4, 6), (9, 6), (10, 5), (11, 6), (5, 7), (6, 8), (7, 7), (8, 8), (9, 7)]},
    "sleep":   {"K": [(3, 6), (4, 6), (5, 6), (9, 6), (10, 6), (11, 6), (6, 8), (7, 8), (8, 8)]},
    "tired":   {"K": [(3, 5), (4, 5), (5, 5), (4, 6), (9, 5), (10, 5), (11, 5), (10, 6), (6, 8), (7, 8), (8, 8)]},
    "angry":   {"K": [(3, 4), (4, 5), (4, 6), (5, 6), (11, 4), (10, 5), (10, 6), (9, 6), (6, 8), (7, 7), (8, 8)]},
    "wow":     {"K": [(4, 5), (5, 5), (4, 6), (5, 6), (9, 5), (10, 5), (9, 6), (10, 6), (6, 7), (7, 7), (8, 7), (6, 8), (8, 8), (7, 9)],
                "W": [(4, 5), (9, 5)], "p": [(7, 8)]},
}

PAW = [".XX.", "XooX", "XooX", ".XX."]
THUMB = ["..X..", ".XoX.", ".XoXX", "XoooX", "XoooX", ".XXX."]
HEART = [".RR.RR.", "RWRRRRR", "RRRRRRR", ".RRRRR.", "..RRR..", "...R..."]
HEART_S = ["R.R", "RRR", ".R."]
SPARK = ["..Y..", "..Y..", "YYMYY", "..Y..", "..Y.."]
SPARK_S = [".Y.", "YMY", ".Y."]
ANGER = ["RR.RR", "R...R", ".....", "R...R", "RR.RR"]
SWEAT = ["..B..", ".BBB.", "BBWBB", ".BBB."]
NOTE = ["..XX", "..XR", "..X.", "XXX.", "XXX."]
ZED = ["NNNN", "..N.", ".N..", "NNNN"]
MOON = [".MM.", "MM..", "MM..", ".MM."]
CUP = ["XXXXXX..", "XGGGGXXX", "XWWWWX.X", "XWWWWXXX", ".XXXX..."]
SUN = ["....Y....", ".Y.....Y.", "...OOO...", "..OOOOO..", "Y.OOOOO.Y", "..OOOOO..", "...OOO...", ".Y.....Y.", "....Y...."]


def grid(rows, x0, y0):
    """ドット文字列を {(x,y): 色キー} に変換"""
    return {(x0 + x, y0 + y): c for y, r in enumerate(rows) for x, c in enumerate(r) if c != "."}


def cat(face="normal", extras=(), squash=0):
    g = grid(CAT, 0, 0)
    for k, ps in FACES[face].items():
        for p in ps:
            g[p] = k
    if face != "angry":
        g[(2, 7)] = g[(12, 7)] = "p"
    for rows, x, y in extras:
        g.update(grid(rows, x, y))
    if squash:  # ぺこり等: おでこの行を間引いて頭を低くする
        g = {(x, y + squash if y < 3 else y): c for (x, y), c in g.items() if not (3 <= y < 3 + squash)}
    return g


def draw_grid(img, g, ox, oy, b):
    d = ImageDraw.Draw(img)
    for (x, y), c in g.items():
        d.rectangle((ox + x * b, oy + y * b, ox + x * b + b - 1, oy + y * b + b - 1), fill=C[c])


def item(img, rows, x, y, b=2):
    draw_grid(img, grid(rows, 0, 0), x, y, b)


def text(img, s, color, dy=0):
    t = Image.new("RGBA", (CW, 20), (0, 0, 0, 0))
    d = ImageDraw.Draw(t)
    d.fontmode = "1"
    w = d.textlength(s, font=FONT) + 1
    for bx in (0, 1):  # 擬似ボールド
        d.text(((CW - w) // 2 + bx, 2), s, font=FONT, fill=color)
    rim = t.split()[3].filter(ImageFilter.MaxFilter(3))
    o = Image.new("RGBA", t.size, (0, 0, 0, 0))
    o.paste(Image.new("RGBA", t.size, (255, 255, 255, 255)), (0, 0), rim)
    o.alpha_composite(t)
    img.alpha_composite(o, (0, 1 + dy))


def frame(g, dx=0, dy=0, shadow=True):
    img = Image.new("RGBA", (CW, CH), (0, 0, 0, 0))
    ox, oy = (CW - 15 * B) // 2 + dx, CH - 13 * B - 4 + dy
    if shadow:
        sw = 10 if dy < -4 else 12
        ImageDraw.Draw(img).rectangle((CW // 2 - sw * 2, CH - 3, CW // 2 + sw * 2, CH - 2), fill=(0, 0, 0, 40))
    draw_grid(img, g, ox, oy, B)
    return img


ARM_R = ["..XX", ".XooX", ".XooX", "XoXX", "XoX."]
ARM_L = ["XX..", "XooX.", "XooX.", ".XXoX", "..XoX"]
ARM_R2 = [".XX.", "XooX", "XooX", ".XoX", ".XoX", "XoX."]
ARM_L2 = [".XX.", "XooX", "XooX", "XoX.", "XoX.", ".XoX"]
R_UP = (ARM_R, 13, 1)          # 右手を上げる
R_UP2 = (ARM_R2, 14, -1)       # 右手を大きく上げる
L_UP2 = (ARM_L2, -3, -1)
L_UP = (ARM_L, -3, 1)
HOLD_HEART = (HEART, 4, 6)


def s01(i):  # 了解！ 敬礼
    up = i >= 3
    f = frame(cat("normal" if up else "happy", [R_UP] if up else []), dy=-1 if up else 0)
    if up and i % 2:
        item(f, SPARK_S, 86, 30)
    text(f, "了解！", C["B"])
    return f


def s02(i):  # OK!
    hop = [0, 3, 6, 7, 6, 3, 0, 0][i]
    f = frame(cat("happy"), dy=-hop)
    if hop >= 6:
        item(f, SPARK_S, 12, 40); item(f, SPARK_S, 88, 36)
    text(f, "ＯＫ！", C["R"], dy=-(hop > 5))
    return f


def s03(i):  # グー
    f = frame(cat("happy", [(THUMB, 14, 3 - (i % 2))]))
    if i % 4 < 2:
        item(f, SPARK, 86, 26)
    else:
        item(f, SPARK_S, 90, 30)
    text(f, "グー！", C["O"])
    return f


def s04(i):  # よろしく
    bow = [0, 0, 1, 2, 2, 1, 0, 0][i]
    f = frame(cat("wink", squash=bow))
    item(f, HEART_S, 84, 30 - i, 2)
    text(f, "よろしく", C["p"])
    return f


def s05(i):  # ぺこり
    bow = [0, 1, 2, 3, 3, 3, 2, 1][i]
    f = frame(cat("sleep" if bow >= 2 else "normal", squash=bow))
    text(f, "ぺこり", C["X"], dy=bow // 2)
    return f


def s06(i):  # うんうん
    nod = [0, 2, 0, 2, 0, 0, 0, 0][i]
    f = frame(cat("happy", squash=nod))
    text(f, "うんうん", C["X"], dy=nod // 2)
    return f


def s07(i):  # ありがと
    f = frame(cat("happy", [HOLD_HEART] if i % 2 == 0 else [(HEART_S, 6, 7)]))
    for k, x in enumerate((14, 84)):
        y = 50 - ((i * 4 + k * 16) % 32)
        item(f, HEART_S, x, y, 2)
    text(f, "ありがと", C["R"])
    return f


def s08(i):  # 感謝
    bow = [0, 1, 2, 2, 2, 2, 1, 0][i]
    f = frame(cat("happy", squash=bow))
    pos = [(10, 32), (88, 28), (16, 60), (84, 58)]
    for k, (x, y) in enumerate(pos):
        item(f, SPARK if (i + k) % 2 else SPARK_S, x, y, 2 if (i + k) % 2 else 2)
    text(f, "感謝！", C["O"])
    return f


def s09(i):  # わーい
    hop = [0, 4, 6, 4, 0, 4, 6, 4][i]
    paws = [R_UP2, L_UP2] if hop else [R_UP, L_UP]
    f = frame(cat("happy", paws), dy=-hop)
    item(f, NOTE, 6 + (i % 2) * 2, 30, 2); item(f, NOTE, 90 - (i % 2) * 2, 34, 2)
    text(f, "わーい！", C["p"], dy=-(hop > 4))
    return f


def s10(i):  # おつかれ
    f = frame(cat("tired", [(SWEAT, 15, 1)] if i < 4 else []))
    item(f, CUP, 2, 76, 2)
    for k in range(2):
        sx, sy = 5 + k * 4, 70 - ((i + k * 2) % 4) * 3
        ImageDraw.Draw(f).rectangle((sx + (i + k) % 2 * 2, sy, sx + 1 + (i + k) % 2 * 2, sy + 1), fill=C["g"])
    text(f, "おつかれ", C["G"])
    return f


def s11(i):  # おはよ
    f = Image.new("RGBA", (CW, CH), (0, 0, 0, 0))
    item(f, SUN, 4, 46 - min(i, 5) * 3, 2)
    f.alpha_composite(frame(cat("sleep" if i < 3 else "happy", [R_UP2, L_UP2] if i >= 4 else [])))
    text(f, "おはよ！", C["O"])
    return f


def s12(i):  # こんにちは
    f = frame(cat("happy", [R_UP if i % 2 else R_UP2]))
    item(f, NOTE, 8, 32 - (i % 2) * 2, 2)
    text(f, "こんにちは", C["B"])
    return f


def s13(i):  # おやすみ
    f = frame(cat("sleep", squash=i % 4 >= 2))
    item(f, MOON, 8, 28, 3)
    for k in range(2):
        u = (i + k * 4) % 8
        item(f, ZED, 80 + u, 52 - u * 3, 2 if k else 1)
    text(f, "おやすみ", C["N"])
    return f


def s14(i):  # おこ
    f = frame(cat("angry"), dx=[-1, 1][i % 2])
    if i % 4 < 2:
        item(f, ANGER, 82, 30, 3)
    else:
        item(f, ANGER, 84, 32, 2)
    text(f, "おこ！", C["R"], dy=i % 2)
    return f


def s15(i):  # いいね
    f = frame(cat("wink", [(THUMB, 14, 3)]))
    ring = [(12, 34), (86, 30), (8, 62), (92, 60)]
    for k, (x, y) in enumerate(ring):
        if (i + k) % 4 < 2:
            item(f, HEART_S, x, y, 2)
    text(f, "いいね！", C["p"])
    return f


def s16(i):  # すごーい
    hop = [0, 2, 4, 2, 0, 2, 4, 2][i]
    f = frame(cat("wow"), dy=-hop)
    ring = [(6, 28), (92, 26), (2, 56), (96, 54), (20, 44), (80, 42)]
    for k, (x, y) in enumerate(ring):
        item(f, SPARK if (i + k) % 3 == 0 else SPARK_S, x, y, 2)
    text(f, "すごーい！", C["Y"], dy=-(hop > 2))
    return f


STICKERS = [s01, s02, s03, s04, s05, s06, s07, s08, s09, s10, s11, s12, s13, s14, s15, s16]
FRAMES, DUR, LOOPS = 8, 250, 2   # 8コマ x 250ms = 2秒, 2ループ = 4秒


def up(img, k=SCALE):
    return img.resize((img.width * k, img.height * k), Image.NEAREST)


def save_apng(frames, path, dur=DUR, loops=LOOPS):
    assert 5 <= len(frames) <= 20 and 1 <= loops <= 4
    total = len(frames) * dur * loops
    assert total % 1000 == 0 and total <= 4000, total
    frames[0].save(path, save_all=True, append_images=frames[1:], duration=dur, loop=loops, disposal=1, optimize=True)
    kb = os.path.getsize(path) / 1024
    assert kb <= 300, (path, kb)
    return kb


def main():
    os.makedirs(OUT, exist_ok=True)
    stills = []
    for n, fn in enumerate(STICKERS, 1):
        fr = [up(fn(i)) for i in range(FRAMES)]
        kb = save_apng(fr, os.path.join(OUT, f"{n:02d}.png"))
        stills.append(fr)
        print(f"{n:02d}.png {fr[0].size} {kb:.1f}KB")
    # メイン画像 240x240 (APNG)
    main_fr = []
    for i in range(FRAMES):
        f = Image.new("RGBA", (80, 80), (0, 0, 0, 0))
        hop = [0, 3, 6, 7, 6, 3, 0, 0][i]
        draw_grid(f, cat("happy" if hop else "normal"), 10, 80 - 13 * 4 - 6 - hop, 4)
        if hop >= 6:
            item(f, SPARK_S, 2, 16); item(f, SPARK_S, 72, 12)
        main_fr.append(up(f))
    save_apng(main_fr, os.path.join(OUT, "main.png"))
    # タブ画像 96x74 (静止画PNG)
    tab = Image.new("RGBA", (48, 37), (0, 0, 0, 0))
    draw_grid(tab, cat("happy"), 9, 6, 2)
    up(tab, 2).save(os.path.join(OUT, "tab.png"))
    # 一覧プレビュー
    sheets = []
    for i in range(FRAMES):
        sheet = Image.new("RGBA", (4 * 330 + 10, 4 * 280 + 10), (140, 168, 214, 255))
        for k, fr in enumerate(stills):
            sheet.alpha_composite(fr[i], (10 + (k % 4) * 330, 10 + (k // 4) * 280))
        sheets.append(sheet)
    sheets[0].save(os.path.join(OUT, "preview.png"), save_all=True, append_images=sheets[1:], duration=DUR, loop=0)
    # 申請用ZIP (01〜16, main, tab)
    with zipfile.ZipFile(os.path.join(OUT, "line_stickers.zip"), "w") as z:
        for name in [f"{n:02d}.png" for n in range(1, 17)] + ["main.png", "tab.png"]:
            z.write(os.path.join(OUT, name), name)


if __name__ == "__main__":
    main()

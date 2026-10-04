"""ドット絵ねこ＆おさかな 掛け合いLINEアニメーションスタンプ生成スクリプト

python3 make_duo.py で out_duo/ に 01.png〜16.png, main.png, tab.png, preview.png, line_stickers.zip を出力する。
ねこの絵・文字・保存処理は make_stickers.py のものを使う。
"""
import os
import zipfile
from PIL import Image, ImageDraw
from make_stickers import (C, CW, CH, FRAMES, DUR, SPARK, SPARK_S, HEART_S, ANGER, SWEAT, NOTE, ZED,
                           MOON, CUP, R_UP, R_UP2, L_UP2, cat, grid, draw_grid, item, text, save_apng, up)

OUT = os.path.join(os.path.dirname(__file__), "out_duo")
C.update({"f": (110, 195, 245, 255), "F": (70, 150, 210, 255), "l": (225, 245, 255, 255)})
CB, FB = 3, 2   # ねこ・おさかなの1マスの大きさ

FISH = [
    "........XXX.......",
    ".......XfffX....XX",
    "....XXXffffXX..XfX",
    "..XXfffffffffXXffX",
    ".XfffffffffFfffXfX",
    "XffffffffffFffffX.",
    "XffffffffffFffffX.",
    "XffffffffffFffffX.",
    ".XllllllllllXXffX.",
    "..XXllllllllX.XfX.",
    "....XXXXXXXX...XX.",
]
FISH_FACES = {
    "normal": {"K": [(2, 4), (3, 4), (4, 4), (2, 5), (3, 5), (4, 5), (2, 6), (3, 6), (4, 6), (1, 7)], "W": [(2, 4), (3, 4)]},
    "happy":  {"K": [(2, 6), (3, 5), (4, 4), (5, 5), (6, 6), (1, 7)]},
    "sleep":  {"K": [(2, 6), (3, 6), (4, 6), (5, 6), (1, 7)]},
    "angry":  {"K": [(2, 3), (3, 4), (4, 5), (5, 5), (3, 5), (3, 6), (4, 6), (1, 7)]},
    "wow":    {"K": [(2, 4), (3, 4), (4, 4), (2, 5), (4, 5), (2, 6), (3, 6), (4, 6), (1, 7), (1, 8)], "W": [(3, 5)]},
}
FIN = [".XX.", "XffX", ".XX."]
ZAP = ["Y..", "YY.", ".YY", "..Y", ".YY", "YY."]
DROOL = ["B", "B", "B"]
HEART_M = [".R.R.", "RRRRR", ".RRR.", "..R.."]


def fish(face="normal", wag=0, flip=False, extras=()):
    g = grid(FISH, 0, 0)
    g = {(x, y + (wag if x >= 14 else 0)): c for (x, y), c in g.items()}
    for k, ps in FISH_FACES[face].items():
        for p in ps:
            g[p] = k
    g[(3, 8)] = g[(4, 8)] = "p"
    for rows, x, y in extras:
        g.update(grid(rows, x, y))
    if flip:
        g = {(17 - x, y): c for (x, y), c in g.items()}
    return g


def canvas():
    return Image.new("RGBA", (CW, CH), (0, 0, 0, 0))


def shadow(img, cx, w):
    ImageDraw.Draw(img).rectangle((cx - w, CH - 3, cx + w, CH - 2), fill=(0, 0, 0, 40))


def put_cat(img, g, x, dy=0, b=CB):
    draw_grid(img, g, x, CH - 13 * b - 4 + dy, b)


def put_fish(img, g, x, dy=0, b=FB):
    draw_grid(img, g, x, CH - 11 * b - 4 + dy, b)


def duo(i, cface="happy", fface="happy", cdy=0, fdy=0, cx=8, fx=60, cex=(), fex=(), wag=None, squash=0, flip=False):
    f = canvas()
    shadow(f, cx + 22, 18); shadow(f, fx + 18, 13)
    put_cat(f, cat(cface, cex, squash), cx, cdy)
    put_fish(f, fish(fface, (i % 2) if wag is None else wag, flip, fex), fx, fdy)
    return f


def s01(i):  # なかよし
    f = duo(i, cdy=-(i % 2), fdy=-((i + 1) % 2) * 2, fx=54)
    item(f, HEART_M, 50, 36 - (i % 4) * 2, 2)
    text(f, "なかよし", C["p"])
    return f


def s02(i):  # おはよ！ (おさかなが頭の上で跳ねて起こす)
    hop = [0, 6, 10, 6, 0, 6, 10, 6][i]
    f = canvas(); shadow(f, 52, 18)
    put_cat(f, cat("sleep" if i < 4 else "wow", squash=1 if hop == 0 else 0), 30)
    put_fish(f, fish("happy", i % 2), 35, -39 - hop)
    if i >= 4:
        item(f, SPARK_S, 12, 50); item(f, SPARK_S, 88, 52)
    text(f, "おはよ！", C["O"])
    return f


def s03(i):  # じゅるり…
    f = duo(i, cface="wow", fface="wow", fx=62 + [-1, 1][i % 2], cex=[(DROOL[:1 + i % 3], 9, 8)], fex=[(SWEAT, 6, -5)] if i % 4 < 2 else [])
    text(f, "じゅるり…", C["B"])
    return f


def s04(i):  # まて〜！ (逃げるおさかなを追いかける)
    run = [0, 2, 0, 2, 0, 2, 0, 2][i]
    f = canvas(); shadow(f, 30, 16); shadow(f, 84, 12)
    put_cat(f, cat("angry", [R_UP]), 4 + (i % 4), -run)
    put_fish(f, fish("wow", i % 2, flip=True, extras=[(SWEAT, 12, -5)]), 64 + (i % 4), -2 - (2 - run))
    d = ImageDraw.Draw(f)
    for k in range(3):  # スピード線
        y = 56 + k * 8
        d.rectangle((62 - (i % 2) * 2 - k * 2, y, 62 - (i % 2) * 2 - k * 2 + 4, y), fill=(255, 255, 255, 200))
    text(f, "まて〜！", C["R"])
    return f


def s05(i):  # ＯＫ！
    a = [0, 4, 6, 4, 0, 0, 0, 0][i]; b = [0, 0, 0, 0, 0, 4, 6, 4][i]
    f = duo(i, cdy=-a, fdy=-b)
    if a or b:
        item(f, SPARK_S, 50, 34)
    text(f, "ＯＫ！", C["R"])
    return f


def s06(i):  # ありがと (おさかながハートを渡す)
    f = duo(i, fface="happy", fx=58)
    hx = 62 - i * 3
    item(f, HEART_M, hx, 54 - [0, 3, 5, 6, 5, 3, 0, 0][i], 2)
    if i >= 6:
        item(f, SPARK_S, 2, 40)
    text(f, "ありがと", C["R"])
    return f


def s07(i):  # ごめんね
    bow = [0, 1, 2, 3, 3, 3, 2, 1][i]
    f = duo(i, cface="sleep" if bow >= 2 else "normal", fface="normal" if i < 5 else "happy", squash=bow,
            cex=[(SWEAT, 14, 0)] if i % 4 < 2 else [])
    if i >= 5:
        item(f, HEART_S, 80, 46, 2)
    text(f, "ごめんね", C["B"])
    return f


def s08(i):  # おつかれ〜
    f = duo(i, cface="tired", fface="happy", fdy=-[0, 2, 4, 2][i % 4], fx=62)
    item(f, CUP, 0, 76, 2)
    for k in range(2):
        sx, sy = 3 + k * 4, 70 - ((i + k * 2) % 4) * 3
        ImageDraw.Draw(f).rectangle((sx + (i + k) % 2 * 2, sy, sx + 1 + (i + k) % 2 * 2, sy + 1), fill=C["g"])
    text(f, "おつかれ〜", C["G"])
    return f


def s09(i):  # やったー！
    hop = [0, 5, 8, 5, 0, 5, 8, 5][i]
    f = duo(i, cdy=-hop, fdy=-hop - 4 * (hop > 0), cex=[R_UP2, L_UP2] if hop else [])
    for k, (x, y) in enumerate([(4, 26), (54, 30), (94, 34)]):
        item(f, SPARK if (i + k) % 2 else SPARK_S, x, y, 2)
    text(f, "やったー！", C["Y"])
    return f


def s10(i):  # おやすみ
    f = duo(i, cface="sleep", fface="sleep", squash=i % 4 >= 2, wag=0)
    item(f, MOON, 92, 24, 3)
    for k, x in enumerate((44, 92)):
        u = (i + k * 4) % 8
        item(f, ZED, x - 4 + u, 44 - u * 2, 1 + (u < 4))
    text(f, "おやすみ", C["N"])
    return f


def s11(i):  # いってきます (おさかなを頭にのせてお出かけ)
    bob = i % 2
    f = canvas(); shadow(f, 50, 18)
    put_cat(f, cat("happy", [R_UP if i % 4 < 2 else R_UP2]), 28, -bob)
    put_fish(f, fish("happy", i % 2), 31, -39 - bob)
    for k in range(2):
        x = 8 - ((i * 3 + k * 10) % 16)
        ImageDraw.Draw(f).rectangle((18 + x, 82 - k * 6, 20 + x, 83 - k * 6), fill=(255, 255, 255, 180))
    text(f, "いってきます", C["O"])
    return f


def s12(i):  # おかえり！
    hop = [0, 4, 6, 4][i % 4]
    f = duo(i, cex=[R_UP2, L_UP2], fdy=-hop, fx=60 - [0, 2, 4, 2][i % 4])
    item(f, HEART_S, 52, 30 - (i % 4), 2)
    text(f, "おかえり！", C["p"])
    return f


def s13(i):  # むむっ！ (けんか)
    f = duo(i, cface="angry", fface="angry", cx=8 + (i % 2), fx=62 - (i % 2), wag=0)
    if i % 2:
        item(f, ZAP, 56, 52, 2)
    item(f, ANGER, 6, 30, 2 + (i % 4 < 2)); item(f, ANGER, 90, 40, 2 + (i % 4 >= 2))
    text(f, "むむっ！", C["R"])
    return f


def s14(i):  # よしよし
    pat = i % 2
    f = canvas(); shadow(f, 30, 18); shadow(f, 70, 13)
    put_cat(f, cat("happy", [(["XX..", "XooX", "XooX", ".XXX"], 14, 4 + pat)]), 8)
    put_fish(f, fish("happy", 0), 54, pat * 2)
    for k, x in enumerate((76, 94)):
        if (i + k) % 3:
            item(f, HEART_S, x, 50 - ((i + k * 3) % 6) * 2, 2)
    text(f, "よしよし", C["p"])
    return f


def s15(i):  # 了解！
    up_ = i >= 3
    f = duo(i, cface="happy", fface="normal" if up_ else "happy", cex=[R_UP] if up_ else [],
            fex=[(FIN, -3, 2)] if up_ else [], cdy=-up_, fdy=-up_ * 2)
    if up_ and i % 2:
        item(f, SPARK_S, 50, 30); item(f, SPARK_S, 96, 40)
    text(f, "了解！", C["B"])
    return f


def s16(i):  # またね〜
    f = duo(i, cex=[R_UP if i % 2 else R_UP2], fdy=-(i % 2) * 2, wag=(i + 1) % 2)
    item(f, NOTE, 52, 34 - (i % 2) * 2, 2)
    text(f, "またね〜", C["B"])
    return f


STICKERS = [s01, s02, s03, s04, s05, s06, s07, s08, s09, s10, s11, s12, s13, s14, s15, s16]


def main():
    os.makedirs(OUT, exist_ok=True)
    allfr = []
    for n, fn in enumerate(STICKERS, 1):
        fr = [up(fn(i)) for i in range(FRAMES)]
        kb = save_apng(fr, os.path.join(OUT, f"{n:02d}.png"))
        allfr.append(fr)
        print(f"{n:02d}.png {fr[0].size} {kb:.1f}KB")
    # メイン画像 240x240 (APNG): ならんでぴょこぴょこ
    main_fr = []
    for i in range(FRAMES):
        f = Image.new("RGBA", (80, 80), (0, 0, 0, 0))
        a = [0, 3, 5, 3, 0, 0, 0, 0][i]; b = [0, 0, 0, 0, 0, 3, 5, 3][i]
        draw_grid(f, cat("happy"), 1, 80 - 39 - 4 - a, 3)
        draw_grid(f, fish("happy", i % 2), 44, 80 - 22 - 4 - b, 2)
        if a or b:
            item(f, HEART_S, 38, 20, 2)
        main_fr.append(up(f))
    save_apng(main_fr, os.path.join(OUT, "main.png"))
    # タブ画像 96x74
    tab = Image.new("RGBA", (48, 37), (0, 0, 0, 0))
    draw_grid(tab, cat("happy"), 0, 6, 2)
    draw_grid(tab, fish("happy"), 29, 17, 1)
    up(tab, 2).save(os.path.join(OUT, "tab.png"))
    # 一覧プレビュー (アニメーション)
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

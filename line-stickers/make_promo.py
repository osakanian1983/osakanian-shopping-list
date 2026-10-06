"""SNS宣伝用の動く画像を作るスクリプト

python3 make_promo.py で promo/ に以下を出力する。
- okan_square.gif / okan_square.mp4 : 1080x1080 (X・Instagram投稿用)
"""
import os
import subprocess
from PIL import Image, ImageDraw, ImageFont

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "promo")
FONT = ImageFont.truetype("/usr/share/fonts/opentype/unifont/unifont_jp.otf", 16)
BG = (255, 244, 225)
INK = (62, 44, 40)
ACCENT = (225, 70, 90)


def frames_of(path):
    im = Image.open(path)
    out = []
    for k in range(im.n_frames):
        im.seek(k)
        out.append(im.convert("RGBA"))
    return out


def pixel_text(s, scale, color, rim=None):
    """Unifontで描いて最近傍拡大(ドット感を保つ)。rim指定で縁取り"""
    w = int(FONT.getlength(s)) + 4
    t = Image.new("RGBA", (w, 20), (0, 0, 0, 0))
    d = ImageDraw.Draw(t)
    d.fontmode = "1"
    if rim:
        for dx, dy in ((-1, 0), (1, 0), (0, -1), (0, 1)):
            d.text((2 + dx, 2 + dy), s, font=FONT, fill=rim)
    d.text((2, 2), s, font=FONT, fill=color)
    return t.resize((t.width * scale, t.height * scale), Image.NEAREST)


def square(set_dir, picks, title, footer, name):
    stickers = [frames_of(os.path.join(HERE, set_dir, f"{n:02d}.png")) for n in picks]
    head = pixel_text(title, 5, INK, rim=(255, 255, 255))
    foot = pixel_text(footer, 3, (255, 255, 255))
    frames = []
    for i in range(len(stickers[0])):
        f = Image.new("RGBA", (1080, 1080), BG)
        d = ImageDraw.Draw(f)
        f.alpha_composite(head, ((1080 - head.width) // 2, 14))
        for k, st in enumerate(stickers):
            x, y = 40 + (k % 3) * 340, 130 + (k // 3) * 280
            d.rounded_rectangle((x - 6, y - 4, x + 326, y + 274), radius=16, fill=(255, 255, 255))
            f.alpha_composite(st[i], (x, y))
        d.rectangle((0, 990, 1080, 1080), fill=ACCENT)
        f.alpha_composite(foot, ((1080 - foot.width) // 2, 1000))
        frames.append(f.convert("RGB"))
    gif = os.path.join(OUT, name + ".gif")
    frames[0].save(gif, save_all=True, append_images=frames[1:], duration=250, loop=0, optimize=True)
    # Instagram等向けMP4: 8コマ×250msを4周=8秒
    tmp = os.path.join(OUT, "_frames")
    os.makedirs(tmp, exist_ok=True)
    for k in range(len(frames) * 4):
        frames[k % len(frames)].save(os.path.join(tmp, f"{k:03d}.png"))
    subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-framerate", "4", "-i", os.path.join(tmp, "%03d.png"),
                    "-vf", "fps=30", "-c:v", "libx264", "-pix_fmt", "yuv420p", os.path.join(OUT, name + ".mp4")], check=True)
    for fn in os.listdir(tmp):
        os.remove(os.path.join(tmp, fn))
    os.rmdir(tmp)
    print(name, os.path.getsize(gif) // 1024, "KB(gif)", os.path.getsize(os.path.join(OUT, name + ".mp4")) // 1024, "KB(mp4)")


def main():
    os.makedirs(OUT, exist_ok=True)
    square("out_okan", [1, 3, 4, 7, 8, 9, 11, 2, 16], "おかん奮闘記", "LINEスタンプ 近日公開！", "okan_square")


if __name__ == "__main__":
    main()

"""表紙用: 着色済みの富士山・鳥居・桜のイラスト(見本)を組み立てる"""
import math
from reportlab.lib.colors import HexColor, white

SKY_TOP = HexColor("#dce9f2")
SKY_HORIZON = HexColor("#fbe3c7")
SUN_COLOR = HexColor("#e8a13c")
MOUNTAIN_FAR = HexColor("#b9c6da")
FUJI_COLOR = HexColor("#7c8fae")
SNOW_COLOR = white
WATER_COLOR = HexColor("#cfe3e6")
WATER_LINE = HexColor("#8fb3b8")
TORII_COLOR = HexColor("#b1442f")
TRUNK_COLOR = HexColor("#5b4636")
BLOSSOM_COLOR = HexColor("#eec3d6")
BLOSSOM_LINE = HexColor("#c98cab")
PINE_COLOR = HexColor("#4a6350")


def compose_cover_scene(c, x0, y0, x1, y1):
    w, h = x1 - x0, y1 - y0
    horizon = y0 + h * 0.42

    c.saveState()
    c.setFillColor(SKY_TOP)
    c.rect(x0, horizon, w, y1 - horizon, fill=1, stroke=0)
    c.setFillColor(SKY_HORIZON)
    c.rect(x0, horizon - h * 0.06, w, h * 0.06, fill=1, stroke=0)
    c.restoreState()

    # 太陽
    c.saveState()
    c.setFillColor(SUN_COLOR)
    c.setStrokeColor(SUN_COLOR)
    c.circle(x0 + w * 0.68, horizon + h * 0.14, w * 0.07, fill=1, stroke=0)
    c.restoreState()

    # 遠景の山
    c.saveState()
    c.setFillColor(MOUNTAIN_FAR)
    p = c.beginPath()
    p.moveTo(x0, horizon)
    p.curveTo(x0 + w * 0.15, horizon + h * 0.05, x0 + w * 0.25, horizon + h * 0.02, x0 + w * 0.35, horizon + h * 0.06)
    p.curveTo(x0 + w * 0.5, horizon + h * 0.11, x0 + w * 0.6, horizon + h * 0.03, x0 + w * 0.75, horizon + h * 0.07)
    p.lineTo(x1, horizon + h * 0.02)
    p.lineTo(x1, horizon)
    p.close()
    c.drawPath(p, fill=1, stroke=0)
    c.restoreState()

    # 富士山
    cx = x0 + w * 0.42
    fw, fh = w * 0.62, h * 0.40
    c.saveState()
    c.setFillColor(FUJI_COLOR)
    c.setStrokeColor(HexColor("#4d5c78"))
    c.setLineWidth(1.4)
    half = fw / 2
    p = c.beginPath()
    p.moveTo(cx - half, horizon)
    p.curveTo(cx - half * 0.65, horizon + fh * 0.30, cx - fw * 0.08, horizon + fh * 0.6, cx, horizon + fh)
    p.curveTo(cx + fw * 0.08, horizon + fh * 0.6, cx + half * 0.7, horizon + fh * 0.22, cx + half, horizon)
    p.close()
    c.drawPath(p, fill=1, stroke=1)
    c.restoreState()

    # 雪冠
    c.saveState()
    c.setFillColor(SNOW_COLOR)
    c.setStrokeColor(HexColor("#4d5c78"))
    c.setLineWidth(1.0)
    p = c.beginPath()
    p.moveTo(cx, horizon + fh)
    p.curveTo(cx - fw * 0.045, horizon + fh * 0.82, cx - fw * 0.10, horizon + fh * 0.72, cx - fw * 0.075, horizon + fh * 0.62)
    p.curveTo(cx - fw * 0.05, horizon + fh * 0.68, cx - fw * 0.02, horizon + fh * 0.72, cx, horizon + fh * 0.78)
    p.curveTo(cx + fw * 0.03, horizon + fh * 0.7, cx + fw * 0.06, horizon + fh * 0.66, cx + fw * 0.08, horizon + fh * 0.60)
    p.curveTo(cx + fw * 0.10, horizon + fh * 0.70, cx + fw * 0.06, horizon + fh * 0.80, cx, horizon + fh)
    p.close()
    c.drawPath(p, fill=1, stroke=1)
    c.restoreState()

    # 水面
    c.saveState()
    c.setFillColor(WATER_COLOR)
    c.rect(x0, y0, w, horizon - y0, fill=1, stroke=0)
    c.setStrokeColor(WATER_LINE)
    c.setLineWidth(1.1)
    for i in range(5):
        yy = horizon - h * (0.05 + i * 0.045)
        c.line(x0 + w * 0.04, yy, x1 - w * 0.04, yy)
    c.restoreState()

    # 鳥居
    _torii(c, x0 + w * 0.22, y0 + h * 0.02, w * 0.20, h * 0.30)

    # 桜の木
    _blossom_tree(c, x0 + w * 0.84, y0 + h * 0.02, h * 0.46)


def _torii(c, cx, base_y, width, height):
    half = width / 2
    c.saveState()
    c.setFillColor(TORII_COLOR)
    c.setStrokeColor(HexColor("#7a2c1c"))
    c.setLineWidth(1.2)
    pillar_w = width * 0.08
    c.rect(cx - half, base_y, pillar_w, height * 0.9, fill=1, stroke=1)
    c.rect(cx + half - pillar_w, base_y, pillar_w, height * 0.9, fill=1, stroke=1)
    top_y = base_y + height * 0.82
    p = c.beginPath()
    p.moveTo(cx - half - width * 0.06, top_y + height * 0.05)
    p.curveTo(cx - half * 0.4, top_y - height * 0.03, cx + half * 0.4, top_y - height * 0.03,
              cx + half + width * 0.06, top_y + height * 0.05)
    p.lineTo(cx + half + width * 0.06, top_y + height * 0.13)
    p.curveTo(cx + half * 0.4, top_y + height * 0.05, cx - half * 0.4, top_y + height * 0.05,
              cx - half - width * 0.06, top_y + height * 0.13)
    p.close()
    c.drawPath(p, fill=1, stroke=1)
    c.rect(cx - half + width * 0.05, base_y + height * 0.55, width * 0.9, height * 0.10,
           fill=1, stroke=1)
    c.restoreState()


def _blossom_tree(c, x, base_y, height):
    c.saveState()
    c.setStrokeColor(TRUNK_COLOR)
    c.setLineWidth(3)
    trunk_top = base_y + height * 0.30
    c.line(x, base_y, x, trunk_top)
    c.setLineWidth(2)
    c.line(x, base_y + height * 0.12, x - height * 0.10, base_y + height * 0.24)
    c.line(x, base_y + height * 0.18, x + height * 0.09, base_y + height * 0.28)

    canopy_r = height * 0.38
    ccx, ccy = x, trunk_top + canopy_r * 0.55
    c.setFillColor(BLOSSOM_COLOR)
    c.setStrokeColor(BLOSSOM_LINE)
    c.setLineWidth(1.2)
    lobes = 10
    pts = []
    for i in range(lobes):
        a = 2 * math.pi * i / lobes
        rr = canopy_r * (0.88 + 0.12 * ((i * 37) % 5) / 5.0)
        pts.append((ccx + rr * math.sin(a), ccy + rr * math.cos(a) * 0.8))
    p = c.beginPath()
    p.moveTo(*pts[0])
    n = len(pts)
    for i in range(n):
        ax, ay = pts[i]
        bx, by = pts[(i + 1) % n]
        mx, my = (ax + bx) / 2, (ay + by) / 2
        dx, dy = mx - ccx, my - ccy
        dist = math.hypot(dx, dy) or 1
        push = canopy_r * 0.22
        cxp, cyp = mx + dx / dist * push, my + dy / dist * push
        p.curveTo(cxp, cyp, cxp, cyp, bx, by)
    c.drawPath(p, fill=1, stroke=1)
    c.restoreState()

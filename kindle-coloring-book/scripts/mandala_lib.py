"""
大人向けマンダラ塗り絵の線画を生成するための描画プリミティブ集。
reportlab の Canvas に対して、原点(cx, cy)を中心とした回転対称パターンを
黒い輪郭線（塗りなし）で描く。すべての図形は「塗り絵」として使える
閉じた輪郭線 or 装飾線として設計している。
"""
import math
import random
from reportlab.lib.colors import black as BLACK


LINE_WIDTH_MAIN = 1.1
LINE_WIDTH_DETAIL = 0.7


def _pt(r, theta):
    """theta=0 を真上(+y)とした極座標 -> (x, y)"""
    return (r * math.sin(theta), r * math.cos(theta))


def _apply_fill(c, fill):
    if fill is not None:
        c.setFillColor(fill)
        return 1
    return 0


def concentric_circle(c, r, width=LINE_WIDTH_DETAIL, dash=None, fill=None):
    c.saveState()
    c.setLineWidth(width)
    if dash:
        c.setDash(dash, 0)
    f = _apply_fill(c, fill)
    c.circle(0, 0, r, stroke=1, fill=f)
    c.restoreState()


def dot_ring(c, count, r, dot_radius, width=LINE_WIDTH_DETAIL, fill=None):
    c.saveState()
    c.setLineWidth(width)
    f = _apply_fill(c, fill)
    for i in range(count):
        theta = 2 * math.pi * i / count
        x, y = _pt(r, theta)
        c.circle(x, y, dot_radius, stroke=1, fill=f)
    c.restoreState()


def spoke_lines(c, symmetry, r0, r1, width=LINE_WIDTH_DETAIL, phase=0.0):
    c.saveState()
    c.setLineWidth(width)
    for i in range(symmetry):
        theta = 2 * math.pi * i / symmetry + phase
        x0, y0 = _pt(r0, theta)
        x1, y1 = _pt(r1, theta)
        c.line(x0, y0, x1, y1)
    c.restoreState()


def continuous_wave_ring(c, r_base, amp, freq, shape="sine", phase=0.0,
                          samples_per_cycle=28, width=LINE_WIDTH_MAIN, close=True,
                          fill=None):
    """1本の連続した波線でリング全体を描く（花びら風の輪郭やギザギザの縁取り）"""
    samples = int(samples_per_cycle * freq)
    c.saveState()
    c.setLineWidth(width)
    fill_flag = _apply_fill(c, fill)
    p = c.beginPath()
    for i in range(samples + 1):
        theta = 2 * math.pi * i / samples
        x = freq * theta + phase
        if shape == "sine":
            wave = math.sin(x)
        elif shape == "triangle":
            wave = (2 / math.pi) * math.asin(math.sin(x))
        elif shape == "square":
            wave = 1.0 if math.sin(x) >= 0 else -1.0
        else:
            wave = math.sin(x)
        r = r_base + amp * wave
        px, py = _pt(r, theta)
        if i == 0:
            p.moveTo(px, py)
        else:
            p.lineTo(px, py)
    if close:
        p.close()
    c.drawPath(p, stroke=1, fill=fill_flag)
    c.restoreState()


def star_ring(c, points, r_outer, r_inner, width=LINE_WIDTH_MAIN, phase=0.0, fill=None):
    """先の尖った星型のリング（放射状の光・星バースト表現）"""
    c.saveState()
    c.setLineWidth(width)
    f = _apply_fill(c, fill)
    p = c.beginPath()
    n = points * 2
    for i in range(n + 1):
        theta = math.pi * i / points + phase
        r = r_outer if i % 2 == 0 else r_inner
        px, py = _pt(r, theta)
        if i == 0:
            p.moveTo(px, py)
        else:
            p.lineTo(px, py)
    c.drawPath(p, stroke=1, fill=f)
    c.restoreState()


def _petal_points(r0, r1, half_angle, pointiness, samples, bulge=1.0):
    pts = []
    for i in range(samples + 1):
        t = i / samples
        theta = -half_angle + 2 * half_angle * t
        shape = math.sin(math.pi * t) ** pointiness
        r = r0 + (r1 - r0) * shape * bulge
        pts.append(_pt(r, theta))
    return pts


def petal_ring(c, symmetry, r0, r1, half_angle_frac=0.75, pointiness=1.0,
               samples=18, width=LINE_WIDTH_MAIN, vein=False, inset=None,
               phase=0.0, fill=None):
    """symmetry 枚の花びら（涙滴形）を放射状に配置する"""
    half_angle = math.radians(180.0 / symmetry) * half_angle_frac
    outline = _petal_points(r0, r1, half_angle, pointiness, samples)
    c.saveState()
    c.setLineWidth(width)
    f = _apply_fill(c, fill)
    for i in range(symmetry):
        rot = 2 * math.pi * i / symmetry + phase
        c.saveState()
        c.translate(0, 0)
        c.rotate(math.degrees(rot))
        if fill is not None:
            c.setFillColor(fill)
        p = c.beginPath()
        for j, (x, y) in enumerate(outline):
            if j == 0:
                p.moveTo(x, y)
            else:
                p.lineTo(x, y)
        c.drawPath(p, stroke=1, fill=f)
        if vein:
            c.setLineWidth(LINE_WIDTH_DETAIL)
            c.line(0, r0, 0, r1)
            c.setLineWidth(width)
        if inset:
            ir0 = r0 + (r1 - r0) * inset[0]
            ir1 = r0 + (r1 - r0) * inset[1]
            ipts = _petal_points(ir0, ir1, half_angle * 0.6, pointiness, samples)
            c.setLineWidth(LINE_WIDTH_DETAIL)
            ip = c.beginPath()
            for j, (x, y) in enumerate(ipts):
                if j == 0:
                    ip.moveTo(x, y)
                else:
                    ip.lineTo(x, y)
            c.drawPath(ip, stroke=1, fill=0)
            c.setLineWidth(width)
        c.restoreState()
    c.restoreState()


def leaf_cluster_ring(c, symmetry, r0, r1, count_per=3, spread_deg=16,
                       pointiness=1.3, width=LINE_WIDTH_DETAIL, phase=0.0):
    """各対称位置に小さな葉を複数枚扇状に配置する"""
    half_angle = math.radians(6)
    for k in range(count_per):
        offset = math.radians((k - (count_per - 1) / 2.0) * spread_deg)
        outline = _petal_points(r0, r1 * (0.85 + 0.15 * (k == (count_per - 1) // 2)),
                                 half_angle, pointiness, 12)
        c.saveState()
        c.setLineWidth(width)
        for i in range(symmetry):
            rot = 2 * math.pi * i / symmetry + phase + offset
            c.saveState()
            c.rotate(math.degrees(rot))
            p = c.beginPath()
            for j, (x, y) in enumerate(outline):
                if j == 0:
                    p.moveTo(x, y)
                else:
                    p.lineTo(x, y)
            c.drawPath(p, stroke=1, fill=0)
            c.restoreState()
        c.restoreState()


def diamond_ring(c, symmetry, r0, r1, width=LINE_WIDTH_DETAIL, phase=0.0, fill=None):
    half_angle = math.radians(180.0 / symmetry) * 0.5
    for i in range(symmetry):
        rot = 2 * math.pi * i / symmetry + phase
        rm = (r0 + r1) / 2.0
        c.saveState()
        c.setLineWidth(width)
        f = _apply_fill(c, fill)
        c.rotate(math.degrees(rot))
        p = c.beginPath()
        p.moveTo(*_pt(r0, 0))
        p.lineTo(*_pt(rm, -half_angle))
        p.lineTo(*_pt(r1, 0))
        p.lineTo(*_pt(rm, half_angle))
        p.close()
        c.drawPath(p, stroke=1, fill=f)
        c.restoreState()


def arc_scallop_ring(c, count, r, arc_r, width=LINE_WIDTH_DETAIL, fill=None):
    """円弧を重ねたレース状の縁取り"""
    c.saveState()
    c.setLineWidth(width)
    f = _apply_fill(c, fill)
    for i in range(count):
        theta = 2 * math.pi * i / count
        x, y = _pt(r, theta)
        c.circle(x, y, arc_r, stroke=1, fill=f)
    c.restoreState()

# -*- coding: utf-8 -*-
"""
日本の風景画塗り絵用の線画パーツ集。
reportlab の Canvas に、黒い輪郭線（塗りなし）で富士山・鳥居・五重塔・
桜・竹・波などのモチーフを描く。すべて絶対座標(x, y)を直接指定する
シンプルなAPIにしている（マンダラ本のような回転対称ではなく、
情景として組み合わせて使うため）。
"""
import math
import random

LINE_MAIN = 1.3
LINE_DETAIL = 0.9
LINE_FAR = 0.6  # 遠景は細い線で奥行きを出す


def _path_from_points(c, pts, close=False):
    p = c.beginPath()
    for i, (x, y) in enumerate(pts):
        if i == 0:
            p.moveTo(x, y)
        else:
            p.lineTo(x, y)
    if close:
        p.close()
    c.drawPath(p, stroke=1, fill=0)


def frame_border(c, x0, y0, x1, y1, width=LINE_MAIN):
    c.saveState()
    c.setLineWidth(width)
    c.rect(x0, y0, x1 - x0, y1 - y0, stroke=1, fill=0)
    c.restoreState()


def horizon_line(c, x0, x1, y, width=LINE_DETAIL, dash=None):
    c.saveState()
    c.setLineWidth(width)
    if dash:
        c.setDash(dash, 0)
    c.line(x0, y, x1, y)
    c.restoreState()


def distant_mountains(c, x0, x1, base_y, height, bumps=4, width=LINE_FAR, seed=0):
    """なだらかな遠景の山並み(1本の連続曲線)"""
    rnd = random.Random(seed)
    n = bumps
    seg = (x1 - x0) / n
    pts = [(x0, base_y)]
    for i in range(n):
        peak_x = x0 + seg * (i + 0.5) + rnd.uniform(-seg * 0.15, seg * 0.15)
        peak_y = base_y + height * rnd.uniform(0.6, 1.0)
        pts.append((x0 + seg * i + seg * 0.15, base_y + height * rnd.uniform(0.1, 0.25)))
        pts.append((peak_x, peak_y))
        pts.append((x0 + seg * (i + 1) - seg * 0.15, base_y + height * rnd.uniform(0.1, 0.25)))
    pts.append((x1, base_y))
    c.saveState()
    c.setLineWidth(width)
    p = c.beginPath()
    p.moveTo(*pts[0])
    for i in range(1, len(pts) - 2, 3):
        p.curveTo(pts[i][0], pts[i][1], pts[i + 1][0], pts[i + 1][1],
                  pts[i + 2][0], pts[i + 2][1])
    c.drawPath(p, stroke=1, fill=0)
    c.restoreState()


def mount_fuji(c, cx, base_y, width, height, snow=True, width_line=LINE_MAIN):
    """富士山のシルエット(左右非対称のなだらかな稜線+雪冠)"""
    half = width / 2
    left_bulge = cx - half * 0.32
    right_bulge = cx + half * 0.42  # 宝永山のようなコブを右に
    c.saveState()
    c.setLineWidth(width_line)
    p = c.beginPath()
    p.moveTo(cx - half, base_y)
    p.curveTo(cx - half * 0.7, base_y + height * 0.28,
              left_bulge, base_y + height * 0.55,
              cx - width * 0.05, base_y + height * 0.86)
    p.curveTo(cx - width * 0.02, base_y + height * 0.94,
              cx + width * 0.01, base_y + height * 0.97,
              cx, base_y + height)
    p.curveTo(cx + width * 0.02, base_y + height * 0.95,
              cx + width * 0.05, base_y + height * 0.9,
              cx + width * 0.09, base_y + height * 0.8)
    p.curveTo(right_bulge - width * 0.05, base_y + height * 0.5,
              right_bulge, base_y + height * 0.42,
              cx + half * 0.75, base_y + height * 0.18)
    p.curveTo(cx + half * 0.9, base_y + height * 0.1, cx + half, base_y, cx + half, base_y)
    c.drawPath(p, stroke=1, fill=0)

    if snow:
        c.setLineWidth(LINE_DETAIL)
        # 雪冠の境界線(山肌に沿ったジグザグの1本線)
        snow_line = [
            (cx - width * 0.16, base_y + height * 0.60),
            (cx - width * 0.115, base_y + height * 0.655),
            (cx - width * 0.075, base_y + height * 0.615),
            (cx - width * 0.03, base_y + height * 0.685),
            (cx, base_y + height * 0.645),
            (cx + width * 0.035, base_y + height * 0.70),
            (cx + width * 0.075, base_y + height * 0.655),
            (cx + width * 0.12, base_y + height * 0.72),
        ]
        _path_from_points(c, snow_line)
        # 雪渓(すじ状に少し流れ落ちる筋を2〜3本)
        for sx, sy, ex, ey in [
            (cx - width * 0.10, base_y + height * 0.63, cx - width * 0.12, base_y + height * 0.52),
            (cx - width * 0.01, base_y + height * 0.665, cx - width * 0.02, base_y + height * 0.56),
            (cx + width * 0.08, base_y + height * 0.685, cx + width * 0.095, base_y + height * 0.58),
        ]:
            p = c.beginPath()
            p.moveTo(sx, sy)
            p.curveTo(sx, (sy + ey) / 2, ex, (sy + ey) / 2, ex, ey)
            c.drawPath(p, stroke=1, fill=0)
    c.restoreState()


def pine_tree(c, x, base_y, height, spread=1.0, width_line=LINE_DETAIL, seed=0):
    """松の木(幹+雲形の葉のかたまりを数段)"""
    rnd = random.Random(seed)
    spread = spread * rnd.uniform(0.9, 1.1)
    c.saveState()
    c.setLineWidth(width_line)
    trunk_top = base_y + height * 0.35
    c.line(x, base_y, x, trunk_top)
    c.line(x, base_y + height * 0.18, x - height * 0.18 * spread, base_y + height * 0.30)
    c.line(x, base_y + height * 0.28, x + height * 0.16 * spread, base_y + height * 0.38)

    layers = [
        (base_y + height * 0.30, height * 0.30 * spread, height * 0.16),
        (base_y + height * 0.50, height * 0.40 * spread, height * 0.20),
        (base_y + height * 0.72, height * 0.34 * spread, height * 0.20),
        (base_y + height * 0.92, height * 0.22 * spread, height * 0.16),
    ]
    for cy, w, h in layers:
        p = c.beginPath()
        p.moveTo(x - w, cy)
        p.curveTo(x - w * 0.6, cy + h * 0.7, x - w * 0.2, cy + h, x, cy + h * 0.85)
        p.curveTo(x + w * 0.25, cy + h * 1.05, x + w * 0.65, cy + h * 0.6, x + w, cy)
        p.curveTo(x + w * 0.7, cy - h * 0.35, x + w * 0.3, cy - h * 0.3, x, cy - h * 0.1)
        p.curveTo(x - w * 0.35, cy - h * 0.3, x - w * 0.7, cy - h * 0.3, x - w, cy)
        c.drawPath(p, stroke=1, fill=0)
    c.restoreState()


def bamboo_cluster(c, x, base_y, height, count=5, spread=50, width_line=LINE_DETAIL, seed=0):
    rnd = random.Random(seed)
    c.saveState()
    c.setLineWidth(width_line)
    for i in range(count):
        sx = x + (i - (count - 1) / 2.0) * (spread / max(count - 1, 1)) + rnd.uniform(-4, 4)
        h = height * rnd.uniform(0.75, 1.05)
        top = base_y + h
        c.line(sx, base_y, sx, top)
        node = base_y
        step = h / rnd.randint(5, 7)
        while node + step < top:
            node += step
            c.line(sx - 3, node, sx + 3, node)
        for _ in range(rnd.randint(2, 3)):
            ly = top - rnd.uniform(0, h * 0.22)
            side = rnd.choice([-1, 1])
            leaf_len = min(spread, height) * rnd.uniform(0.06, 0.09)
            ang = rnd.uniform(0.35, 0.7)
            _bamboo_leaf(c, sx, ly, leaf_len, side, ang, width_line=LINE_FAR)
    c.restoreState()


def _bamboo_leaf(c, x, y, length, side, angle, width_line=LINE_FAR):
    """細長く先の尖った竹の葉(閉じた涙滴形)"""
    dx, dy = side * math.sin(angle), math.cos(angle)
    tip_x, tip_y = x + dx * length, y + dy * length
    perp_x, perp_y = -dy, dx
    bulge = length * 0.06
    mx, my = x + dx * length * 0.45, y + dy * length * 0.45
    c1 = (mx + perp_x * bulge, my + perp_y * bulge)
    c2 = (mx - perp_x * bulge, my - perp_y * bulge)
    p = c.beginPath()
    p.moveTo(x, y)
    p.curveTo(c1[0], c1[1], tip_x, tip_y, tip_x, tip_y)
    p.curveTo(c2[0], c2[1], x, y, x, y)
    c.drawPath(p, stroke=1, fill=0)


def _puffy_blob(c, cx, cy, r, lobes=9, bulge_range=(0.85, 1.05), y_squash=0.8,
                 width_line=LINE_DETAIL, seed=0):
    """もこもこした閉じた輪郭(木の樹冠・雲だまりなどに使う)。
    頂点をランダムな半径で円周上に配置し、各辺を外向きに膨らませた
    1本のベジェ曲線でつないで閉じる。"""
    rnd = random.Random(seed)
    pts = []
    for i in range(lobes):
        a = 2 * math.pi * i / lobes
        rr = r * rnd.uniform(*bulge_range)
        pts.append((cx + rr * math.sin(a), cy + rr * math.cos(a) * y_squash))
    c.saveState()
    c.setLineWidth(width_line)
    p = c.beginPath()
    p.moveTo(*pts[0])
    n = len(pts)
    for i in range(n):
        ax, ay = pts[i]
        bx, by = pts[(i + 1) % n]
        mx, my = (ax + bx) / 2, (ay + by) / 2
        dx, dy = mx - cx, my - cy
        dist = math.hypot(dx, dy) or 1
        push = r * 0.22
        ctrl_x = mx + dx / dist * push
        ctrl_y = my + dy / dist * push
        p.curveTo(ctrl_x, ctrl_y, ctrl_x, ctrl_y, bx, by)
    c.drawPath(p, stroke=1, fill=0)
    c.restoreState()
    return pts


def _mini_blossom(c, x, y, r, petals=5, width_line=LINE_DETAIL):
    """5枚の丸い花びら(涙滴形)を中心から放射状に配置した小さな花"""
    half_angle = math.pi / petals * 0.75
    samples = 8
    c.saveState()
    c.setLineWidth(width_line)
    for i in range(petals):
        base_a = 2 * math.pi * i / petals
        p = c.beginPath()
        for j in range(samples + 1):
            t = j / samples
            theta = base_a + (-half_angle + 2 * half_angle * t)
            rr = r * math.sin(math.pi * t)
            px = x + rr * math.sin(theta)
            py = y + rr * math.cos(theta)
            if j == 0:
                p.moveTo(px, py)
            else:
                p.lineTo(px, py)
        c.drawPath(p, stroke=1, fill=0)
    c.circle(x, y, r * 0.12, stroke=1, fill=0)
    c.restoreState()


def cherry_blossom_tree(c, x, base_y, height, spread=1.0, blossoms=10, seed=0,
                         width_line=LINE_DETAIL):
    rnd = random.Random(seed)
    c.saveState()
    c.setLineWidth(width_line)
    trunk_top = base_y + height * 0.32
    p = c.beginPath()
    p.moveTo(x - 4, base_y)
    p.curveTo(x - 3, base_y + height * 0.15, x + 2, base_y + height * 0.2, x, trunk_top)
    c.drawPath(p, stroke=1, fill=0)
    p2 = c.beginPath()
    p2.moveTo(x + 4, base_y)
    p2.curveTo(x + 3, base_y + height * 0.15, x + 1, base_y + height * 0.2, x, trunk_top)
    c.drawPath(p2, stroke=1, fill=0)

    branch_ends = []
    for i in range(4):
        a = rnd.uniform(-1.1, 1.1)
        length = height * rnd.uniform(0.25, 0.4)
        ex = x + math.sin(a) * length * spread
        ey = trunk_top + abs(math.cos(a)) * length * 0.6
        p = c.beginPath()
        p.moveTo(x, trunk_top - height * 0.02)
        p.curveTo(x + (ex - x) * 0.4, trunk_top + (ey - trunk_top) * 0.3,
                  x + (ex - x) * 0.7, ey, ex, ey)
        c.drawPath(p, stroke=1, fill=0)
        branch_ends.append((ex, ey))

    canopy_r = height * 0.4 * spread
    canopy_cx, canopy_cy = x, trunk_top + canopy_r * 0.6
    c.restoreState()
    _puffy_blob(c, canopy_cx, canopy_cy, canopy_r, lobes=10,
                bulge_range=(0.85, 1.05), y_squash=0.78,
                width_line=width_line, seed=seed)
    c.saveState()
    c.setLineWidth(width_line)

    for _ in range(blossoms):
        a = rnd.uniform(0, 2 * math.pi)
        rr = canopy_r * rnd.uniform(0.15, 1.0)
        bx = canopy_cx + rr * math.sin(a)
        by = canopy_cy + rr * math.cos(a) * 0.75
        _mini_blossom(c, bx, by, height * 0.032, width_line=LINE_FAR)
    c.restoreState()


def _maple_leaf(c, x, y, size, angle=0.0, width_line=LINE_FAR):
    """小さな紅葉の葉(先の尖った涙滴形+中央の葉脈)。散らし用の簡略表現"""
    c.saveState()
    c.setLineWidth(width_line)
    dx, dy = math.sin(angle), math.cos(angle)
    tip_x, tip_y = x + dx * size, y + dy * size
    perp_x, perp_y = -dy, dx
    bulge = size * 0.42
    mx, my = x + dx * size * 0.5, y + dy * size * 0.5
    c1 = (mx + perp_x * bulge, my + perp_y * bulge)
    c2 = (mx - perp_x * bulge, my - perp_y * bulge)
    p = c.beginPath()
    p.moveTo(x, y)
    p.curveTo(c1[0], c1[1], tip_x, tip_y, tip_x, tip_y)
    p.curveTo(c2[0], c2[1], x, y, x, y)
    c.drawPath(p, stroke=1, fill=0)
    c.setLineWidth(width_line * 0.8)
    c.line(x, y, tip_x, tip_y)
    c.restoreState()


def maple_tree(c, x, base_y, height, spread=1.0, leaves=14, seed=0, width_line=LINE_DETAIL):
    rnd = random.Random(seed)
    c.saveState()
    c.setLineWidth(width_line)
    trunk_top = base_y + height * 0.3
    c.line(x, base_y, x, trunk_top)
    branch_ends = []
    for i in range(5):
        a = rnd.uniform(-1.2, 1.2)
        length = height * rnd.uniform(0.28, 0.42)
        ex = x + math.sin(a) * length * spread
        ey = trunk_top + abs(math.cos(a)) * length * 0.55
        p = c.beginPath()
        p.moveTo(x, trunk_top - height * 0.02)
        p.curveTo(x + (ex - x) * 0.4, trunk_top + (ey - trunk_top) * 0.3,
                  x + (ex - x) * 0.7, ey, ex, ey)
        c.drawPath(p, stroke=1, fill=0)
        branch_ends.append((ex, ey))

    canopy_r = height * 0.4 * spread
    canopy_cx, canopy_cy = x, trunk_top + canopy_r * 0.55
    c.restoreState()
    _puffy_blob(c, canopy_cx, canopy_cy, canopy_r, lobes=9,
                bulge_range=(0.8, 1.05), y_squash=0.78,
                width_line=width_line, seed=seed)
    c.saveState()
    c.setLineWidth(width_line)

    for _ in range(leaves):
        a = rnd.uniform(0, 2 * math.pi)
        rr = canopy_r * rnd.uniform(0.1, 1.0)
        lx = canopy_cx + rr * math.sin(a)
        ly = canopy_cy + rr * math.cos(a) * 0.75
        _maple_leaf(c, lx, ly, height * 0.045, angle=rnd.uniform(0, math.pi))
    c.restoreState()


def torii_gate(c, cx, base_y, width, height, width_line=LINE_MAIN):
    half = width / 2
    lean = width * 0.03
    c.saveState()
    c.setLineWidth(width_line)
    # 柱(左右、わずかに内傾)
    c.line(cx - half, base_y, cx - half + lean, base_y + height * 0.92)
    c.line(cx - half + width * 0.06, base_y, cx - half + width * 0.06 + lean, base_y + height * 0.92)
    c.line(cx + half, base_y, cx + half - lean, base_y + height * 0.92)
    c.line(cx + half - width * 0.06, base_y, cx + half - width * 0.06 - lean, base_y + height * 0.92)
    # 貫(下の横木)
    c.line(cx - half + width * 0.02, base_y + height * 0.55,
           cx + half - width * 0.02, base_y + height * 0.55)
    # 島木+笠木(上の反り返った横木)
    top_y = base_y + height * 0.86
    p = c.beginPath()
    p.moveTo(cx - half - width * 0.06, top_y + height * 0.05)
    p.curveTo(cx - half * 0.4, top_y - height * 0.03, cx + half * 0.4, top_y - height * 0.03,
              cx + half + width * 0.06, top_y + height * 0.05)
    c.drawPath(p, stroke=1, fill=0)
    top_y2 = top_y - height * 0.09
    p2 = c.beginPath()
    p2.moveTo(cx - half - width * 0.03, top_y2 + height * 0.045)
    p2.curveTo(cx - half * 0.4, top_y2 - height * 0.025, cx + half * 0.4, top_y2 - height * 0.025,
               cx + half + width * 0.03, top_y2 + height * 0.045)
    c.drawPath(p2, stroke=1, fill=0)
    c.rect(cx - width * 0.035, base_y + height * 0.63, width * 0.07, height * 0.14,
           stroke=1, fill=0)
    c.restoreState()


def senbon_torii(c, cx, base_y, width, height, count=6, width_line=LINE_DETAIL):
    """千本鳥居: 奥に向かって小さくなる連続した鳥居"""
    for i in range(count):
        t = i / (count - 1)
        w = width * (1 - 0.62 * t)
        h = height * (1 - 0.55 * t)
        y = base_y + height * 0.5 * t * 0.35
        lw = width_line if t < 0.4 else LINE_FAR
        torii_gate(c, cx, y, w, h, width_line=lw)


def pagoda(c, cx, base_y, width, height, tiers=5, width_line=LINE_MAIN):
    c.saveState()
    c.setLineWidth(width_line)
    tier_h = height * 0.78 / tiers
    for i in range(tiers):
        t = i / (tiers - 1) if tiers > 1 else 0
        w = width * (1 - 0.62 * t)
        y0 = base_y + tier_h * i
        y1 = y0 + tier_h * 0.62
        body_w = w * 0.5
        c.rect(cx - body_w / 2, y0, body_w, tier_h * 0.4, stroke=1, fill=0)
        p = c.beginPath()
        p.moveTo(cx - w / 2, y1)
        p.curveTo(cx - w / 2 - width * 0.03, y1 + tier_h * 0.05,
                  cx - w * 0.3, y1 + tier_h * 0.28, cx - w * 0.22, y1 + tier_h * 0.22)
        p.lineTo(cx, y1 + tier_h * 0.34)
        p.lineTo(cx + w * 0.22, y1 + tier_h * 0.22)
        p.curveTo(cx + w * 0.3, y1 + tier_h * 0.28, cx + w / 2 + width * 0.03,
                  y1 + tier_h * 0.05, cx + w / 2, y1)
        c.drawPath(p, stroke=1, fill=0)
    spire_base = base_y + tier_h * tiers * 0.78 / tiers * tiers
    top_y = base_y + tier_h * (tiers - 1) + tier_h * 0.34
    c.line(cx, top_y, cx, base_y + height)
    for k in range(3):
        ring_y = top_y + (base_y + height - top_y) * (0.25 + 0.25 * k)
        rr = width * 0.05 * (1 - k * 0.25)
        c.ellipse(cx - rr, ring_y - rr * 0.3, cx + rr, ring_y + rr * 0.3, stroke=1, fill=0)
    c.restoreState()


def temple_building(c, cx, base_y, width, height, width_line=LINE_MAIN):
    c.saveState()
    c.setLineWidth(width_line)
    body_h = height * 0.55
    c.rect(cx - width * 0.36, base_y, width * 0.72, body_h, stroke=1, fill=0)
    # 柱・扉のディテール
    c.setLineWidth(LINE_DETAIL)
    for i in range(1, 4):
        lx = cx - width * 0.36 + width * 0.72 * i / 4
        c.line(lx, base_y, lx, base_y + body_h)
    door_w = width * 0.16
    c.rect(cx - door_w / 2, base_y, door_w, body_h * 0.75, stroke=1, fill=0)
    # 屋根(反り返った軒先を持つ1枚屋根)
    c.setLineWidth(width_line)
    roof_y = base_y + body_h
    roof_h = height * 0.4
    w = width * 1.1
    p = c.beginPath()
    p.moveTo(cx - w / 2, roof_y)
    p.curveTo(cx - w / 2 - width * 0.04, roof_y + roof_h * 0.12,
              cx - w * 0.28, roof_y + roof_h * 0.42, cx - w * 0.20, roof_y + roof_h * 0.34)
    p.lineTo(cx, roof_y + roof_h * 0.55)
    p.lineTo(cx + w * 0.20, roof_y + roof_h * 0.34)
    p.curveTo(cx + w * 0.28, roof_y + roof_h * 0.42,
              cx + w / 2 + width * 0.04, roof_y + roof_h * 0.12, cx + w / 2, roof_y)
    c.drawPath(p, stroke=1, fill=0)
    # 破風(屋根の下にもう一段の縁)
    c.setLineWidth(LINE_DETAIL)
    c.line(cx - width * 0.42, roof_y, cx + width * 0.42, roof_y)
    c.restoreState()


def lantern(c, x, base_y, height, width_line=LINE_DETAIL):
    """石灯籠(台座・支柱・火袋・笠・宝珠)"""
    w = height * 0.5
    c.saveState()
    c.setLineWidth(width_line)
    c.rect(x - w * 0.20, base_y, w * 0.40, height * 0.12, stroke=1, fill=0)  # 台座
    c.line(x - w * 0.08, base_y + height * 0.12, x - w * 0.08, base_y + height * 0.30)
    c.line(x + w * 0.08, base_y + height * 0.12, x + w * 0.08, base_y + height * 0.30)
    c.rect(x - w * 0.30, base_y + height * 0.30, w * 0.60, height * 0.08, stroke=1, fill=0)
    box_y = base_y + height * 0.38
    box_h = height * 0.28
    c.rect(x - w * 0.40, box_y, w * 0.80, box_h, stroke=1, fill=0)
    c.circle(x, box_y + box_h * 0.5, w * 0.16, stroke=1, fill=0)
    roof_y = box_y + box_h
    roof_h = height * 0.16
    p = c.beginPath()
    p.moveTo(x - w * 0.55, roof_y)
    p.curveTo(x - w * 0.5, roof_y + roof_h * 0.5, x - w * 0.15, roof_y + roof_h,
              x, roof_y + roof_h)
    p.curveTo(x + w * 0.15, roof_y + roof_h, x + w * 0.5, roof_y + roof_h * 0.5,
              x + w * 0.55, roof_y)
    p.close()
    c.drawPath(p, stroke=1, fill=0)
    finial_y = roof_y + roof_h
    c.circle(x, finial_y + height * 0.05, height * 0.05, stroke=1, fill=0)
    c.restoreState()


def arched_bridge(c, cx, base_y, width, height, width_line=LINE_MAIN, posts=9):
    half = width / 2
    c.saveState()
    c.setLineWidth(width_line)
    p = c.beginPath()
    p.moveTo(cx - half, base_y)
    p.curveTo(cx - half * 0.4, base_y + height * 1.5, cx + half * 0.4, base_y + height * 1.5,
              cx + half, base_y)
    c.drawPath(p, stroke=1, fill=0)
    p2 = c.beginPath()
    rail_h = height * 0.22
    p2.moveTo(cx - half * 0.95, base_y + rail_h * 0.3)
    p2.curveTo(cx - half * 0.4, base_y + height * 1.5 + rail_h, cx + half * 0.4,
               base_y + height * 1.5 + rail_h, cx + half * 0.95, base_y + rail_h * 0.3)
    c.drawPath(p2, stroke=1, fill=0)
    c.setLineWidth(LINE_DETAIL)
    n = posts
    for i in range(n + 1):
        t = i / n
        bx = cx - half * 0.95 + width * 0.95 * t
        by_lo = base_y + height * 1.5 * 4 * t * (1 - t) * 0.75
        by_hi = by_lo + rail_h
        c.line(bx, by_lo, bx, by_hi)
    c.restoreState()


def stepping_stones(c, x0, y0, x1, y1, count=5, size=6, width_line=LINE_DETAIL, seed=0):
    rnd = random.Random(seed)
    c.saveState()
    c.setLineWidth(width_line)
    for i in range(count):
        t = i / max(count - 1, 1)
        x = x0 + (x1 - x0) * t + rnd.uniform(-4, 4)
        y = y0 + (y1 - y0) * t + rnd.uniform(-3, 3)
        r = size * rnd.uniform(0.8, 1.15)
        c.ellipse(x - r, y - r * 0.55, x + r, y + r * 0.55, stroke=1, fill=0)
    c.restoreState()


def waves_hokusai(c, x0, x1, base_y, height, width_line=LINE_MAIN, seed=0):
    """北斎の波のような、渦を巻いて崩れる大波(コンマ形のフックで表現)"""
    rnd = random.Random(seed)
    c.saveState()
    c.setLineWidth(width_line)
    span = x1 - x0
    crest_x = x0 + span * 0.60
    crest_y = base_y + height * 0.5
    r = height * 0.5

    # 立ち上がる波の斜面 -> 渦の外側の縁
    outer_start = (crest_x - r * 0.98, crest_y - r * 0.10)
    outer_top = (crest_x + r * 0.15, crest_y + r * 0.62)
    p = c.beginPath()
    p.moveTo(x0, base_y)
    p.curveTo(x0 + span * 0.20, base_y + height * 0.08,
              x0 + span * 0.34, base_y + height * 0.12,
              outer_start[0], outer_start[1])
    p.curveTo(crest_x - r * 0.75, crest_y + r * 0.55,
              crest_x - r * 0.15, crest_y + r * 0.75,
              outer_top[0], outer_top[1])
    # 渦の内側にすぼまるフック(先端は下向きに巻き込む)
    inner_tip = (crest_x - r * 0.28, crest_y + r * 0.18)
    p.curveTo(crest_x + r * 0.42, crest_y + r * 0.42,
              crest_x + r * 0.30, crest_y - r * 0.05,
              inner_tip[0], inner_tip[1])
    c.drawPath(p, stroke=1, fill=0)

    # 崩れて飛び散る波頭の指(コンマ形) — 外側の縁に3つほど
    claws = 3
    for i in range(claws):
        t = i / (claws - 1)
        bx = outer_start[0] + (outer_top[0] - outer_start[0]) * (0.35 + 0.5 * t)
        by = outer_start[1] + (outer_top[1] - outer_start[1]) * (0.35 + 0.5 * t)
        ang = math.radians(-40 - 55 * t)
        length = r * rnd.uniform(0.16, 0.24)
        _bamboo_leaf(c, bx, by, length, 1, ang, width_line=LINE_DETAIL)

    # 波の裏側のうねり(背景の小波)
    c.setLineWidth(LINE_DETAIL)
    p2 = c.beginPath()
    p2.moveTo(crest_x - r * 0.1, crest_y + r * 0.5)
    p2.curveTo(crest_x + r * 0.45, crest_y + r * 0.35,
               crest_x + r * 0.6, base_y + height * 0.2,
               x1, base_y + height * 0.06)
    c.drawPath(p2, stroke=1, fill=0)

    # しぶき(小さな水滴)
    c.setLineWidth(LINE_FAR)
    for _ in range(10):
        sx = crest_x + rnd.uniform(-r * 0.2, r * 0.9)
        sy = crest_y + rnd.uniform(r * 0.15, r * 0.85)
        rr = rnd.uniform(1.3, 3.0)
        c.circle(sx, sy, rr, stroke=1, fill=0)
    c.restoreState()


def water_ripples(c, x0, x1, y, rows=3, amp=4, width_line=LINE_FAR, seed=0):
    rnd = random.Random(seed)
    c.saveState()
    c.setLineWidth(width_line)
    for r in range(rows):
        ry = y - r * amp * 2.4
        freq = rnd.uniform(2.5, 4)
        samples = 60
        p = c.beginPath()
        for i in range(samples + 1):
            t = i / samples
            x = x0 + (x1 - x0) * t
            yy = ry + amp * math.sin(t * freq * 2 * math.pi + r)
            if i == 0:
                p.moveTo(x, yy)
            else:
                p.lineTo(x, yy)
        c.drawPath(p, stroke=1, fill=0)
    c.restoreState()


def clouds(c, cx, y, width, height, lobes=5, width_line=LINE_DETAIL, seed=0):
    """もこもこした横長の雲(上辺は丸いこぶの連続、下辺はまっすぐ)"""
    rnd = random.Random(seed)
    half = width / 2
    c.saveState()
    c.setLineWidth(width_line)
    step = width / lobes
    p = c.beginPath()
    p.moveTo(cx - half, y)
    for i in range(lobes):
        x0 = cx - half + step * i
        x1 = x0 + step
        peak_y = y + height * rnd.uniform(0.75, 1.0)
        peak_x = (x0 + x1) / 2
        ctrl1 = (x0 + (peak_x - x0) * 0.6, peak_y)
        ctrl2 = (x1 - (x1 - peak_x) * 0.6, peak_y)
        p.curveTo(ctrl1[0], ctrl1[1], ctrl2[0], ctrl2[1], x1, y)
    c.drawPath(p, stroke=1, fill=0)
    c.line(cx - half, y, cx + half, y)
    c.restoreState()


def sun_moon(c, cx, cy, r, rays=False, width_line=LINE_MAIN, n_rays=12):
    c.saveState()
    c.setLineWidth(width_line)
    c.circle(cx, cy, r, stroke=1, fill=0)
    if rays:
        c.setLineWidth(LINE_DETAIL)
        for i in range(n_rays):
            a = 2 * math.pi * i / n_rays
            x0 = cx + (r * 1.15) * math.sin(a)
            y0 = cy + (r * 1.15) * math.cos(a)
            x1 = cx + (r * 1.5) * math.sin(a)
            y1 = cy + (r * 1.5) * math.cos(a)
            c.line(x0, y0, x1, y1)
    c.restoreState()


def crane_bird(c, x, y, size, facing=1, width_line=LINE_DETAIL):
    """立ち鶴(胴・S字の首・脚・翼・尾羽)。facing=-1で左向きに反転"""
    c.saveState()
    c.setLineWidth(width_line)
    c.translate(x, y)
    c.scale(facing, 1)

    leg_top_y = size * 0.5
    c.line(-size * 0.05, 0, -size * 0.02, leg_top_y)
    c.line(size * 0.10, 0, size * 0.06, leg_top_y)
    c.line(-size * 0.09, 0, -size * 0.09 - size * 0.07, size * 0.02)
    c.line(size * 0.14, 0, size * 0.14 + size * 0.07, size * 0.02)

    body_cx, body_cy = 0, leg_top_y + size * 0.22
    p = c.beginPath()
    p.moveTo(body_cx - size * 0.32, body_cy)
    p.curveTo(body_cx - size * 0.30, body_cy + size * 0.22,
              body_cx + size * 0.05, body_cy + size * 0.28,
              body_cx + size * 0.28, body_cy + size * 0.10)
    p.curveTo(body_cx + size * 0.38, body_cy + size * 0.02,
              body_cx + size * 0.30, body_cy - size * 0.14,
              body_cx + size * 0.05, body_cy - size * 0.14)
    p.curveTo(body_cx - size * 0.15, body_cy - size * 0.14,
              body_cx - size * 0.32, body_cy - size * 0.08,
              body_cx - size * 0.32, body_cy)
    c.drawPath(p, stroke=1, fill=0)

    # 尾羽
    for k in range(3):
        tx = body_cx - size * (0.30 + 0.05 * k)
        ty = body_cy - size * (0.02 - 0.06 * k)
        p3 = c.beginPath()
        p3.moveTo(body_cx - size * 0.28, body_cy - size * 0.02)
        p3.curveTo(tx, ty, tx - size * 0.1, ty - size * 0.05, tx - size * 0.16, ty - size * 0.02)
        c.drawPath(p3, stroke=1, fill=0)

    # 翼の折りたたみ線
    p4 = c.beginPath()
    p4.moveTo(body_cx - size * 0.12, body_cy + size * 0.16)
    p4.curveTo(body_cx + size * 0.02, body_cy + size * 0.08,
              body_cx + size * 0.12, body_cy - size * 0.02,
              body_cx + size * 0.22, body_cy - size * 0.10)
    c.drawPath(p4, stroke=1, fill=0)

    # S字の首と頭
    neck_base = (body_cx + size * 0.22, body_cy + size * 0.14)
    head = (size * 0.30, body_cy + size * 0.62)
    p5 = c.beginPath()
    p5.moveTo(*neck_base)
    p5.curveTo(neck_base[0] + size * 0.12, neck_base[1] + size * 0.18,
              head[0] + size * 0.12, head[1] - size * 0.22,
              head[0], head[1])
    c.drawPath(p5, stroke=1, fill=0)
    # くちばし
    c.line(head[0], head[1], head[0] + size * 0.16, head[1] + size * 0.02)
    c.circle(head[0] - size * 0.02, head[1] + size * 0.03, size * 0.02, stroke=1, fill=0)
    c.restoreState()


def small_boat(c, x, y, size, width_line=LINE_DETAIL):
    c.saveState()
    c.setLineWidth(width_line)
    p = c.beginPath()
    p.moveTo(x - size, y)
    p.curveTo(x - size * 0.6, y - size * 0.35, x + size * 0.6, y - size * 0.35, x + size, y)
    p.curveTo(x + size * 0.6, y + size * 0.08, x - size * 0.6, y + size * 0.08, x - size, y)
    c.drawPath(p, stroke=1, fill=0)
    c.line(x, y, x, y + size * 0.9)
    p2 = c.beginPath()
    p2.moveTo(x, y + size * 0.15)
    p2.lineTo(x + size * 0.55, y + size * 0.35)
    p2.lineTo(x, y + size * 0.55)
    p2.close()
    c.drawPath(p2, stroke=1, fill=0)
    c.restoreState()


def rice_paddy(c, x0, x1, base_y, rows=5, row_h=8, width_line=LINE_FAR, seed=0):
    rnd = random.Random(seed)
    c.saveState()
    c.setLineWidth(width_line)
    for r in range(rows):
        y = base_y + r * row_h
        shrink = r * (x1 - x0) * 0.02
        c.line(x0 + shrink, y, x1 - shrink, y)
    c.restoreState()


def rocks(c, x, y, size, count=3, width_line=LINE_DETAIL, seed=0):
    rnd = random.Random(seed)
    c.saveState()
    c.setLineWidth(width_line)
    for i in range(count):
        rx = x + rnd.uniform(-size, size)
        ry = y + rnd.uniform(-size * 0.2, size * 0.2)
        rw = size * rnd.uniform(0.5, 1.0)
        rh = rw * rnd.uniform(0.5, 0.75)
        p = c.beginPath()
        p.moveTo(rx - rw, ry)
        p.curveTo(rx - rw * 0.6, ry + rh, rx + rw * 0.5, ry + rh * 0.9, rx + rw, ry + rh * 0.1)
        p.curveTo(rx + rw * 0.6, ry - rh * 0.2, rx - rw * 0.5, ry - rh * 0.15, rx - rw, ry)
        c.drawPath(p, stroke=1, fill=0)
    c.restoreState()


def falling_petals(c, x0, x1, y0, y1, count=10, size=4, width_line=LINE_FAR, seed=0):
    rnd = random.Random(seed)
    for _ in range(count):
        x = rnd.uniform(x0, x1)
        y = rnd.uniform(y0, y1)
        _mini_blossom(c, x, y, size, petals=5, width_line=width_line)

"""表紙用: 着色済みマンダラ(見本イラスト)を組み立てる"""
import random
from reportlab.lib.colors import HexColor
import mandala_lib as m

PALETTE = [
    HexColor("#2f6f6a"),  # 深いティール
    HexColor("#e07a5f"),  # コーラル
    HexColor("#d9a441"),  # ゴールド
    HexColor("#7d5ba6"),  # プラム/パープル
    HexColor("#9bb168"),  # セージグリーン
]
CENTER_COLOR = HexColor("#d9a441")

LAYER_TYPES = ["petal", "wave", "star", "diamond", "leaf", "dots", "scallop"]


def compose_cover_mandala(c, cx, cy, max_r, seed):
    rnd = random.Random(seed)
    symmetry = rnd.choice([8, 10, 12, 14, 16])

    c.saveState()
    c.translate(cx, cy)

    center_r = max_r * rnd.uniform(0.10, 0.135)
    m.concentric_circle(c, center_r * 0.22, width=m.LINE_WIDTH_DETAIL, fill=CENTER_COLOR)
    center_sym = rnd.choice([6, 8])
    m.petal_ring(c, center_sym, center_r * 0.15, center_r,
                 half_angle_frac=rnd.uniform(0.55, 0.7),
                 pointiness=rnd.uniform(0.9, 1.3), fill=PALETTE[1])
    m.concentric_circle(c, center_r * 1.18, width=m.LINE_WIDTH_DETAIL)

    r_cur = center_r * 1.3
    outer_limit = max_r * 0.96
    prev_type = None
    phase_toggle = 0
    color_i = 0

    while r_cur < outer_limit * 0.94:
        remaining = outer_limit - r_cur
        thickness = min(remaining, max_r * rnd.uniform(0.09, 0.16))
        r0, r1 = r_cur, r_cur + thickness

        choices = [t for t in LAYER_TYPES if t != prev_type]
        layer = rnd.choice(choices)
        prev_type = layer
        phase = (phase_toggle % 2) * (3.14159 / symmetry)
        phase_toggle += 1
        color = PALETTE[color_i % len(PALETTE)]
        color_i += 1

        # "wave"/"star" は円1周ぶんの単一閉曲線なので fill すると中心まで
        # 塗りつぶされてしまう(穴のないディスクになる)。この2種は塗りは
        # 使わず、色付きの太いアウトラインとして表現する。
        if layer == "petal":
            m.petal_ring(c, symmetry, r0, r1,
                         half_angle_frac=rnd.uniform(0.6, 0.85),
                         pointiness=rnd.uniform(0.8, 1.6), phase=phase, fill=color)
        elif layer == "wave":
            shape = rnd.choice(["sine", "triangle"])
            c.setStrokeColor(color)
            m.continuous_wave_ring(c, (r0 + r1) / 2, (r1 - r0) / 2,
                                    freq=symmetry, shape=shape, phase=phase,
                                    width=2.0)
            c.setStrokeColor(m.BLACK)
        elif layer == "star":
            c.setStrokeColor(color)
            m.star_ring(c, symmetry, r1, r0, phase=phase, width=2.0)
            c.setStrokeColor(m.BLACK)
        elif layer == "diamond":
            m.diamond_ring(c, symmetry * (2 if symmetry <= 10 else 1),
                            r0, r1, phase=phase, fill=color)
        elif layer == "leaf":
            c.setStrokeColor(color)
            m.leaf_cluster_ring(c, symmetry, r0, r1,
                                 count_per=rnd.choice([3, 5]),
                                 spread_deg=rnd.uniform(10, 18), phase=phase,
                                 width=1.4)
            c.setStrokeColor(m.BLACK)
        elif layer == "dots":
            count = symmetry * rnd.choice([2, 3])
            m.dot_ring(c, count, (r0 + r1) / 2, thickness * 0.18, fill=color)
        elif layer == "scallop":
            count = symmetry * rnd.choice([1, 2])
            m.arc_scallop_ring(c, count, r0, thickness * 0.55, fill=color)

        r_cur = r1 + thickness * 0.12

    m.arc_scallop_ring(c, symmetry * 2, outer_limit * 0.985, max_r * 0.035,
                        fill=PALETTE[0])
    m.concentric_circle(c, max_r * 0.995, width=m.LINE_WIDTH_MAIN)

    c.restoreState()

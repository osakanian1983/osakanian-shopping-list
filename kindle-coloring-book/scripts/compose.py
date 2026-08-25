"""1件分のマンダラ全体（中心〜外周）を seed から組み立てる"""
import random
import mandala_lib as m

LAYER_TYPES = ["petal", "petal_inset", "wave", "star", "diamond",
               "leaf", "dots", "scallop", "spokes"]


def compose_mandala(c, cx, cy, max_r, seed):
    rnd = random.Random(seed)
    symmetry = rnd.choice([8, 10, 12, 14, 16])

    c.saveState()
    c.translate(cx, cy)

    # --- 中心のお花モチーフ ---
    center_r = max_r * rnd.uniform(0.10, 0.135)
    m.concentric_circle(c, center_r * 0.22, width=m.LINE_WIDTH_DETAIL)
    center_sym = rnd.choice([6, 8])
    m.petal_ring(c, center_sym, center_r * 0.15, center_r,
                 half_angle_frac=rnd.uniform(0.55, 0.7),
                 pointiness=rnd.uniform(0.9, 1.3))
    m.concentric_circle(c, center_r * 1.18, width=m.LINE_WIDTH_DETAIL)

    r_cur = center_r * 1.3
    outer_limit = max_r * 0.96

    prev_type = None
    phase_toggle = 0
    while r_cur < outer_limit * 0.94:
        remaining = outer_limit - r_cur
        thickness = min(remaining, max_r * rnd.uniform(0.09, 0.16))
        r0, r1 = r_cur, r_cur + thickness

        choices = [t for t in LAYER_TYPES if t != prev_type]
        layer = rnd.choice(choices)
        prev_type = layer
        phase = (phase_toggle % 2) * (3.14159 / symmetry)
        phase_toggle += 1

        if layer == "petal":
            m.petal_ring(c, symmetry, r0, r1,
                         half_angle_frac=rnd.uniform(0.6, 0.85),
                         pointiness=rnd.uniform(0.8, 1.6),
                         vein=rnd.random() < 0.5, phase=phase)
        elif layer == "petal_inset":
            m.petal_ring(c, symmetry, r0, r1,
                         half_angle_frac=rnd.uniform(0.65, 0.9),
                         pointiness=rnd.uniform(0.9, 1.5),
                         inset=(0.25, 0.75), phase=phase)
        elif layer == "wave":
            shape = rnd.choice(["sine", "triangle"])
            m.continuous_wave_ring(c, (r0 + r1) / 2, (r1 - r0) / 2,
                                    freq=symmetry, shape=shape, phase=phase)
        elif layer == "star":
            m.star_ring(c, symmetry, r1, r0, phase=phase)
        elif layer == "diamond":
            m.diamond_ring(c, symmetry * (2 if symmetry <= 10 else 1),
                            r0, r1, phase=phase)
        elif layer == "leaf":
            m.leaf_cluster_ring(c, symmetry, r0, r1,
                                 count_per=rnd.choice([3, 5]),
                                 spread_deg=rnd.uniform(10, 18), phase=phase)
        elif layer == "dots":
            count = symmetry * rnd.choice([2, 3])
            m.dot_ring(c, count, (r0 + r1) / 2, thickness * 0.18)
        elif layer == "scallop":
            count = symmetry * rnd.choice([1, 2])
            m.arc_scallop_ring(c, count, r0, thickness * 0.55)
        elif layer == "spokes":
            m.spoke_lines(c, symmetry * 2, r0, r1, phase=phase)

        if rnd.random() < 0.55:
            m.concentric_circle(c, r1 + thickness * 0.06)

        r_cur = r1 + thickness * 0.12

    # --- 外周の縁取り ---
    border_style = rnd.choice(["scallop", "wave", "star", "plain"])
    if border_style == "scallop":
        m.arc_scallop_ring(c, symmetry * 2, outer_limit * 0.985,
                            max_r * 0.035)
    elif border_style == "wave":
        m.continuous_wave_ring(c, outer_limit * 0.97, max_r * 0.028,
                                freq=symmetry * 2, shape="sine")
    elif border_style == "star":
        m.star_ring(c, symmetry * 2, outer_limit, outer_limit * 0.9)
    m.concentric_circle(c, max_r * 0.995, width=m.LINE_WIDTH_MAIN)

    c.restoreState()

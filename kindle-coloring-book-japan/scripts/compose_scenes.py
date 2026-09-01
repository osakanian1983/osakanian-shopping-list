# -*- coding: utf-8 -*-
"""
25種類の日本の風景シーンを構成する。各関数は塗り絵の安全エリア
(x0, y0, x1, y1) を受け取り、scene_lib のパーツを組み合わせて
1ページぶんの線画を描く。
"""
import scene_lib as s


def _frame_and_horizon(c, x0, y0, x1, y1, frac=0.38):
    s.frame_border(c, x0, y0, x1, y1)
    return y0 + (y1 - y0) * frac


def scene_01_fuji_dawn(c, x0, y0, x1, y1, seed):
    w, h = x1 - x0, y1 - y0
    horizon = _frame_and_horizon(c, x0, y0, x1, y1, 0.46)
    s.sun_moon(c, x0 + w * 0.68, y0 + h * 0.88, w * 0.05, rays=True)
    s.clouds(c, x0 + w * 0.16, y0 + h * 0.90, w * 0.20, h * 0.025, seed=seed)
    s.distant_mountains(c, x0 + 8, x1 - 8, horizon + 4, h * 0.03, bumps=4, seed=seed)
    s.mount_fuji(c, x0 + w * 0.58, horizon, w * 0.56, h * 0.34)
    s.water_ripples(c, x0 + 8, x1 - 8, horizon - h * 0.05, rows=4, seed=seed)
    s.cherry_blossom_tree(c, x0 + w * 0.15, y0 + 4, h * 0.44, seed=seed)
    s.cherry_blossom_tree(c, x0 + w * 0.92, y0 + 4, h * 0.24, seed=seed + 3)


def scene_02_torii_sunset(c, x0, y0, x1, y1, seed):
    w, h = x1 - x0, y1 - y0
    horizon = _frame_and_horizon(c, x0, y0, x1, y1, 0.48)
    s.sun_moon(c, x0 + w * 0.5, horizon + h * 0.02, w * 0.10)
    s.clouds(c, x0 + w * 0.18, y0 + h * 0.88, w * 0.2, h * 0.025, seed=seed)
    s.clouds(c, x0 + w * 0.82, y0 + h * 0.84, w * 0.16, h * 0.02, seed=seed + 1)
    s.distant_mountains(c, x0 + 8, x1 - 8, horizon + 4, h * 0.025, bumps=5, seed=seed)
    s.torii_gate(c, x0 + w * 0.5, horizon - h * 0.02, w * 0.24, h * 0.32)
    s.water_ripples(c, x0 + 8, x1 - 8, horizon - h * 0.06, rows=5, seed=seed)
    s.small_boat(c, x0 + w * 0.16, horizon - h * 0.10, w * 0.03)
    s.small_boat(c, x0 + w * 0.82, horizon - h * 0.14, w * 0.025)


def scene_03_great_wave(c, x0, y0, x1, y1, seed):
    w, h = x1 - x0, y1 - y0
    horizon = _frame_and_horizon(c, x0, y0, x1, y1, 0.28)
    s.mount_fuji(c, x0 + w * 0.5, horizon + h * 0.04, w * 0.30, h * 0.18, snow=True)
    s.clouds(c, x0 + w * 0.15, y0 + h * 0.9, w * 0.18, h * 0.02, seed=seed)
    s.waves_hokusai(c, x0 + 10, x0 + w * 0.62, y0 + 8, h * 0.62, seed=seed)
    s.waves_hokusai(c, x0 + w * 0.5, x1 - 10, y0 + 8, h * 0.40, seed=seed + 1)
    s.small_boat(c, x0 + w * 0.5, y0 + h * 0.16, w * 0.028)


def scene_04_bamboo_path(c, x0, y0, x1, y1, seed):
    w, h = x1 - x0, y1 - y0
    horizon = _frame_and_horizon(c, x0, y0, x1, y1, 0.30)
    s.sun_moon(c, x0 + w * 0.5, y0 + h * 0.90, w * 0.05, rays=True)
    for i, fx in enumerate([0.06, 0.20, 0.80, 0.94]):
        s.bamboo_cluster(c, x0 + w * fx, y0 + 4, h * (0.88 if fx in (0.06, 0.94) else 0.68),
                          count=4, spread=w * 0.07, seed=seed + i)
    s.stepping_stones(c, x0 + w * 0.40, y0 + 6, x0 + w * 0.60, horizon - h * 0.02,
                       count=5, size=7, seed=seed)
    s.lantern(c, x0 + w * 0.60, y0 + 4, h * 0.20)


def scene_05_pagoda(c, x0, y0, x1, y1, seed):
    w, h = x1 - x0, y1 - y0
    horizon = _frame_and_horizon(c, x0, y0, x1, y1, 0.36)
    s.clouds(c, x0 + w * 0.74, y0 + h * 0.88, w * 0.2, h * 0.03, seed=seed)
    s.clouds(c, x0 + w * 0.15, y0 + h * 0.90, w * 0.16, h * 0.022, seed=seed + 1)
    s.distant_mountains(c, x0 + 8, x1 - 8, horizon + 4, h * 0.025, bumps=4, seed=seed)
    s.pagoda(c, x0 + w * 0.42, horizon, w * 0.24, h * 0.56, tiers=5)
    s.maple_tree(c, x0 + w * 0.12, y0 + 4, h * 0.36, seed=seed)
    s.maple_tree(c, x0 + w * 0.85, y0 + 4, h * 0.32, seed=seed + 1)


def scene_06_senbon_torii(c, x0, y0, x1, y1, seed):
    w, h = x1 - x0, y1 - y0
    horizon = _frame_and_horizon(c, x0, y0, x1, y1, 0.28)
    s.distant_mountains(c, x0 + 8, x1 - 8, horizon + 4, h * 0.02, bumps=3, seed=seed)
    s.senbon_torii(c, x0 + w * 0.5, horizon - h * 0.01, w * 0.44, h * 0.66, count=7)
    s.pine_tree(c, x0 + w * 0.08, y0 + 4, h * 0.32, seed=seed)
    s.pine_tree(c, x0 + w * 0.92, y0 + 4, h * 0.28, seed=seed + 1)


def scene_07_sakura_river(c, x0, y0, x1, y1, seed):
    w, h = x1 - x0, y1 - y0
    horizon = _frame_and_horizon(c, x0, y0, x1, y1, 0.52)
    s.clouds(c, x0 + w * 0.5, y0 + h * 0.9, w * 0.2, h * 0.022, seed=seed)
    s.distant_mountains(c, x0 + 8, x1 - 8, horizon + 4, h * 0.02, bumps=3, seed=seed)
    s.arched_bridge(c, x0 + w * 0.5, horizon - h * 0.01, w * 0.36, h * 0.10)
    s.water_ripples(c, x0 + 8, x1 - 8, horizon - h * 0.08, rows=4, seed=seed)
    s.cherry_blossom_tree(c, x0 + w * 0.15, y0 + 4, h * 0.5, seed=seed)
    s.cherry_blossom_tree(c, x0 + w * 0.86, y0 + 4, h * 0.42, seed=seed + 2)
    s.falling_petals(c, x0 + w * 0.3, x0 + w * 0.7, y0 + h * 0.3, y0 + h * 0.55,
                      count=8, size=4, seed=seed)


def scene_08_zen_garden(c, x0, y0, x1, y1, seed):
    w, h = x1 - x0, y1 - y0
    horizon = _frame_and_horizon(c, x0, y0, x1, y1, 0.62)
    s.clouds(c, x0 + w * 0.5, y0 + h * 0.88, w * 0.2, h * 0.022, seed=seed)
    s.pine_tree(c, x0 + w * 0.80, y0 + h * 0.30, h * 0.32, seed=seed)
    s.lantern(c, x0 + w * 0.58, y0 + h * 0.30, h * 0.22)
    s.rocks(c, x0 + w * 0.18, y0 + h * 0.34, 20, count=4, seed=seed)
    s.rocks(c, x0 + w * 0.36, y0 + h * 0.28, 12, count=2, seed=seed + 1)
    for r in range(9):
        s.rice_paddy(c, x0 + 10, x1 - 10, y0 + h * (0.04 + r * 0.028), rows=1,
                      row_h=1, seed=seed + r)


def scene_09_maple_valley(c, x0, y0, x1, y1, seed):
    w, h = x1 - x0, y1 - y0
    horizon = _frame_and_horizon(c, x0, y0, x1, y1, 0.48)
    s.clouds(c, x0 + w * 0.5, y0 + h * 0.9, w * 0.18, h * 0.02, seed=seed)
    s.distant_mountains(c, x0 + 8, x1 - 8, horizon + 4, h * 0.03, bumps=4, seed=seed)
    s.water_ripples(c, x0 + 8, x1 - 8, horizon - h * 0.05, rows=4, seed=seed)
    s.stepping_stones(c, x0 + w * 0.35, horizon - h * 0.06, x0 + w * 0.65,
                       horizon - h * 0.02, count=4, size=7, seed=seed)
    s.maple_tree(c, x0 + w * 0.14, y0 + 4, h * 0.48, seed=seed)
    s.maple_tree(c, x0 + w * 0.5, y0 + 4, h * 0.32, seed=seed + 1)
    s.maple_tree(c, x0 + w * 0.85, y0 + 4, h * 0.44, seed=seed + 2)


def scene_10_rice_village(c, x0, y0, x1, y1, seed):
    w, h = x1 - x0, y1 - y0
    horizon = _frame_and_horizon(c, x0, y0, x1, y1, 0.54)
    s.sun_moon(c, x0 + w * 0.78, y0 + h * 0.86, w * 0.06, rays=True)
    s.distant_mountains(c, x0 + 8, x1 - 8, horizon + 4, h * 0.03, bumps=4, seed=seed)
    s.temple_building(c, x0 + w * 0.7, horizon, w * 0.24, h * 0.26)
    s.pine_tree(c, x0 + w * 0.14, y0 + 4, h * 0.32, seed=seed)
    for r in range(5):
        s.rice_paddy(c, x0 + 10, x1 - 10, y0 + h * (0.04 + r * 0.045), rows=3,
                      row_h=4, seed=seed + r)


def scene_11_koi_bridge(c, x0, y0, x1, y1, seed):
    w, h = x1 - x0, y1 - y0
    horizon = _frame_and_horizon(c, x0, y0, x1, y1, 0.56)
    s.clouds(c, x0 + w * 0.5, y0 + h * 0.9, w * 0.18, h * 0.02, seed=seed)
    s.arched_bridge(c, x0 + w * 0.5, horizon, w * 0.38, h * 0.09)
    s.water_ripples(c, x0 + 8, x1 - 8, y0 + h * 0.22, rows=6, seed=seed)
    s.rocks(c, x0 + w * 0.12, y0 + h * 0.06, 14, count=3, seed=seed)
    s.lantern(c, x0 + w * 0.85, y0 + 4, h * 0.26)
    s.cherry_blossom_tree(c, x0 + w * 0.12, y0 + 4, h * 0.44, seed=seed)


def scene_12_temple_gate(c, x0, y0, x1, y1, seed):
    w, h = x1 - x0, y1 - y0
    horizon = _frame_and_horizon(c, x0, y0, x1, y1, 0.30)
    s.clouds(c, x0 + w * 0.2, y0 + h * 0.86, w * 0.22, h * 0.035, seed=seed)
    s.clouds(c, x0 + w * 0.8, y0 + h * 0.82, w * 0.18, h * 0.03, seed=seed + 1)
    s.temple_building(c, x0 + w * 0.5, horizon, w * 0.46, h * 0.46)
    s.lantern(c, x0 + w * 0.14, y0 + 4, h * 0.26)
    s.lantern(c, x0 + w * 0.86, y0 + 4, h * 0.26)
    s.stepping_stones(c, x0 + w * 0.5, y0 + 4, x0 + w * 0.5, horizon - h * 0.01,
                       count=4, size=8, seed=seed)


def scene_13_moonlit_pines(c, x0, y0, x1, y1, seed):
    w, h = x1 - x0, y1 - y0
    horizon = _frame_and_horizon(c, x0, y0, x1, y1, 0.44)
    s.sun_moon(c, x0 + w * 0.72, y0 + h * 0.86, w * 0.08)
    s.clouds(c, x0 + w * 0.3, y0 + h * 0.90, w * 0.2, h * 0.02, seed=seed)
    s.distant_mountains(c, x0 + 8, x1 - 8, horizon + 4, h * 0.025, bumps=4, seed=seed)
    s.pine_tree(c, x0 + w * 0.2, y0 + 4, h * 0.48, seed=seed)
    s.pine_tree(c, x0 + w * 0.45, y0 + 4, h * 0.32, seed=seed + 1)
    s.pine_tree(c, x0 + w * 0.68, y0 + 4, h * 0.40, seed=seed + 2)
    s.water_ripples(c, x0 + 8, x1 - 8, horizon - h * 0.05, rows=3, seed=seed)


def scene_14_fishing_boats(c, x0, y0, x1, y1, seed):
    w, h = x1 - x0, y1 - y0
    horizon = _frame_and_horizon(c, x0, y0, x1, y1, 0.50)
    s.sun_moon(c, x0 + w * 0.5, horizon + h * 0.08, w * 0.09, rays=True)
    s.clouds(c, x0 + w * 0.16, y0 + h * 0.90, w * 0.2, h * 0.02, seed=seed)
    s.clouds(c, x0 + w * 0.84, y0 + h * 0.86, w * 0.16, h * 0.018, seed=seed + 1)
    s.distant_mountains(c, x0 + 8, x1 - 8, horizon + 4, h * 0.02, bumps=5, seed=seed)
    s.water_ripples(c, x0 + 8, x1 - 8, horizon - h * 0.04, rows=6, seed=seed)
    s.small_boat(c, x0 + w * 0.3, horizon - h * 0.09, w * 0.032)
    s.small_boat(c, x0 + w * 0.55, horizon - h * 0.14, w * 0.026)
    s.small_boat(c, x0 + w * 0.72, horizon - h * 0.19, w * 0.022)


def scene_15_crane_pine(c, x0, y0, x1, y1, seed):
    w, h = x1 - x0, y1 - y0
    horizon = _frame_and_horizon(c, x0, y0, x1, y1, 0.40)
    s.sun_moon(c, x0 + w * 0.78, y0 + h * 0.86, w * 0.08)
    s.clouds(c, x0 + w * 0.2, y0 + h * 0.9, w * 0.18, h * 0.02, seed=seed)
    s.distant_mountains(c, x0 + 8, x1 - 8, horizon + 4, h * 0.02, bumps=3, seed=seed)
    s.pine_tree(c, x0 + w * 0.22, y0 + 4, h * 0.52, seed=seed)
    s.crane_bird(c, x0 + w * 0.55, horizon - h * 0.02, h * 0.24)
    s.crane_bird(c, x0 + w * 0.68, horizon - h * 0.02, h * 0.18, facing=-1)
    s.water_ripples(c, x0 + 8, x1 - 8, horizon - h * 0.06, rows=3, seed=seed)


def scene_16_mountain_stream(c, x0, y0, x1, y1, seed):
    w, h = x1 - x0, y1 - y0
    horizon = _frame_and_horizon(c, x0, y0, x1, y1, 0.44)
    s.clouds(c, x0 + w * 0.5, y0 + h * 0.9, w * 0.2, h * 0.02, seed=seed)
    s.distant_mountains(c, x0 + 8, x1 - 8, horizon + 4, h * 0.035, bumps=4, seed=seed)
    s.rocks(c, x0 + w * 0.35, y0 + h * 0.15, 18, count=4, seed=seed)
    s.water_ripples(c, x0 + 8, x1 - 8, y0 + h * 0.20, rows=6, seed=seed)
    s.maple_tree(c, x0 + w * 0.12, y0 + 4, h * 0.46, seed=seed)
    s.maple_tree(c, x0 + w * 0.88, y0 + 4, h * 0.42, seed=seed + 1)
    s.stepping_stones(c, x0 + w * 0.3, y0 + h * 0.05, x0 + w * 0.7, y0 + h * 0.16,
                       count=6, size=7, seed=seed)


def scene_17_hilltop_pagoda(c, x0, y0, x1, y1, seed):
    w, h = x1 - x0, y1 - y0
    horizon = _frame_and_horizon(c, x0, y0, x1, y1, 0.30)
    s.clouds(c, x0 + w * 0.78, y0 + h * 0.88, w * 0.2, h * 0.03, seed=seed)
    s.distant_mountains(c, x0 + 8, x1 - 8, horizon - h * 0.02, h * 0.10, bumps=2, seed=seed)
    s.pagoda(c, x0 + w * 0.48, horizon + h * 0.04, w * 0.22, h * 0.50, tiers=4)
    s.bamboo_cluster(c, x0 + w * 0.12, y0 + 4, h * 0.34, count=4, spread=w * 0.06, seed=seed)
    s.bamboo_cluster(c, x0 + w * 0.90, y0 + 4, h * 0.30, count=4, spread=w * 0.06, seed=seed + 1)


def scene_18_lakeside_torii(c, x0, y0, x1, y1, seed):
    w, h = x1 - x0, y1 - y0
    horizon = _frame_and_horizon(c, x0, y0, x1, y1, 0.48)
    s.clouds(c, x0 + w * 0.5, y0 + h * 0.9, w * 0.2, h * 0.022, seed=seed)
    s.mount_fuji(c, x0 + w * 0.7, horizon + 2, w * 0.36, h * 0.22)
    s.torii_gate(c, x0 + w * 0.28, horizon - h * 0.01, w * 0.20, h * 0.28)
    s.pine_tree(c, x0 + w * 0.08, y0 + 4, h * 0.36, seed=seed)
    s.water_ripples(c, x0 + 8, x1 - 8, horizon - h * 0.05, rows=5, seed=seed)


def scene_19_snowy_fuji(c, x0, y0, x1, y1, seed):
    w, h = x1 - x0, y1 - y0
    horizon = _frame_and_horizon(c, x0, y0, x1, y1, 0.40)
    s.clouds(c, x0 + w * 0.18, y0 + h * 0.90, w * 0.24, h * 0.03, seed=seed)
    s.mount_fuji(c, x0 + w * 0.55, horizon, w * 0.64, h * 0.46, snow=True)
    s.pine_tree(c, x0 + w * 0.12, y0 + 4, h * 0.38, seed=seed)
    s.pine_tree(c, x0 + w * 0.85, y0 + 4, h * 0.30, seed=seed + 1)
    s.distant_mountains(c, x0 + 8, x1 - 8, horizon + 2, h * 0.015, bumps=5, seed=seed)


def scene_20_lantern_path(c, x0, y0, x1, y1, seed):
    w, h = x1 - x0, y1 - y0
    horizon = _frame_and_horizon(c, x0, y0, x1, y1, 0.34)
    s.clouds(c, x0 + w * 0.5, y0 + h * 0.9, w * 0.2, h * 0.02, seed=seed)
    for i, fx in enumerate([0.20, 0.42, 0.64, 0.84]):
        scale = 1.0 - i * 0.16
        s.lantern(c, x0 + w * fx, y0 + 4, h * 0.32 * scale)
    s.stepping_stones(c, x0 + w * 0.12, y0 + 6, x0 + w * 0.9, y0 + h * 0.02,
                       count=8, size=6, seed=seed)
    s.maple_tree(c, x0 + w * 0.06, y0 + 4, h * 0.42, seed=seed)
    s.maple_tree(c, x0 + w * 0.94, y0 + 4, h * 0.38, seed=seed + 1)
    s.rocks(c, x0 + w * 0.3, y0 + h * 0.03, 8, count=2, seed=seed)


def scene_21_twilight_temple(c, x0, y0, x1, y1, seed):
    w, h = x1 - x0, y1 - y0
    horizon = _frame_and_horizon(c, x0, y0, x1, y1, 0.42)
    s.sun_moon(c, x0 + w * 0.82, y0 + h * 0.86, w * 0.07)
    s.clouds(c, x0 + w * 0.3, y0 + h * 0.90, w * 0.2, h * 0.02, seed=seed)
    s.temple_building(c, x0 + w * 0.42, horizon, w * 0.36, h * 0.34)
    s.lantern(c, x0 + w * 0.78, y0 + 4, h * 0.22)
    s.lantern(c, x0 + w * 0.92, y0 + 4, h * 0.16)
    s.stepping_stones(c, x0 + w * 0.5, y0 + 4, x0 + w * 0.66, y0 + 4,
                       count=4, size=6, seed=seed)
    s.pine_tree(c, x0 + w * 0.1, y0 + 4, h * 0.42, seed=seed)


def scene_22_coastal_pines(c, x0, y0, x1, y1, seed):
    w, h = x1 - x0, y1 - y0
    horizon = _frame_and_horizon(c, x0, y0, x1, y1, 0.46)
    s.sun_moon(c, x0 + w * 0.8, y0 + h * 0.86, w * 0.06, rays=True)
    s.distant_mountains(c, x0 + 8, x1 - 8, horizon + 4, h * 0.02, bumps=4, seed=seed)
    s.waves_hokusai(c, x0 + w * 0.4, x1 - 10, y0 + 8, h * 0.30, seed=seed)
    s.pine_tree(c, x0 + w * 0.12, y0 + h * 0.08, h * 0.44, seed=seed)
    s.pine_tree(c, x0 + w * 0.28, y0 + h * 0.04, h * 0.32, seed=seed + 1)
    s.rocks(c, x0 + w * 0.85, y0 + h * 0.05, 14, count=3, seed=seed)
    s.small_boat(c, x0 + w * 0.75, horizon - h * 0.10, w * 0.026)


def scene_23_maple_koi_bridge(c, x0, y0, x1, y1, seed):
    w, h = x1 - x0, y1 - y0
    horizon = _frame_and_horizon(c, x0, y0, x1, y1, 0.54)
    s.clouds(c, x0 + w * 0.5, y0 + h * 0.9, w * 0.18, h * 0.02, seed=seed)
    s.arched_bridge(c, x0 + w * 0.5, horizon, w * 0.36, h * 0.09)
    s.water_ripples(c, x0 + 8, x1 - 8, y0 + h * 0.2, rows=6, seed=seed)
    s.rocks(c, x0 + w * 0.78, y0 + h * 0.06, 12, count=3, seed=seed)
    s.maple_tree(c, x0 + w * 0.16, y0 + 4, h * 0.52, seed=seed)
    s.maple_tree(c, x0 + w * 0.85, y0 + 4, h * 0.34, seed=seed + 2)


def scene_24_village_pagoda(c, x0, y0, x1, y1, seed):
    w, h = x1 - x0, y1 - y0
    horizon = _frame_and_horizon(c, x0, y0, x1, y1, 0.32)
    s.clouds(c, x0 + w * 0.2, y0 + h * 0.88, w * 0.2, h * 0.03, seed=seed)
    s.distant_mountains(c, x0 + 8, x1 - 8, horizon + 4, h * 0.035, bumps=4, seed=seed)
    s.pagoda(c, x0 + w * 0.76, horizon, w * 0.18, h * 0.44, tiers=4)
    s.temple_building(c, x0 + w * 0.32, horizon, w * 0.32, h * 0.28)
    s.lantern(c, x0 + w * 0.1, y0 + 4, h * 0.20)
    s.stepping_stones(c, x0 + w * 0.46, y0 + 4, x0 + w * 0.66, y0 + 4,
                       count=4, size=6, seed=seed)
    s.bamboo_cluster(c, x0 + w * 0.92, y0 + 4, h * 0.36, count=4, spread=w * 0.07, seed=seed)


def scene_25_full_moon(c, x0, y0, x1, y1, seed):
    w, h = x1 - x0, y1 - y0
    horizon = _frame_and_horizon(c, x0, y0, x1, y1, 0.40)
    s.sun_moon(c, x0 + w * 0.5, y0 + h * 0.82, w * 0.12)
    s.distant_mountains(c, x0 + 8, x1 - 8, horizon - h * 0.01, h * 0.05, bumps=3, seed=seed)
    s.distant_mountains(c, x0 + 8, x1 - 8, horizon + 4, h * 0.02, bumps=5, seed=seed + 1)
    s.pine_tree(c, x0 + w * 0.14, y0 + 4, h * 0.38, seed=seed)
    s.pine_tree(c, x0 + w * 0.85, y0 + 4, h * 0.32, seed=seed + 1)
    s.clouds(c, x0 + w * 0.72, y0 + h * 0.70, w * 0.2, h * 0.025, seed=seed)
    s.clouds(c, x0 + w * 0.2, y0 + h * 0.66, w * 0.16, h * 0.02, seed=seed + 2)


SCENES = [
    ("Mount Fuji at Dawn", scene_01_fuji_dawn),
    ("Torii Gate Sunset", scene_02_torii_sunset),
    ("The Great Wave", scene_03_great_wave),
    ("Bamboo Grove Path", scene_04_bamboo_path),
    ("Five-Story Pagoda", scene_05_pagoda),
    ("Thousand Torii Path", scene_06_senbon_torii),
    ("Cherry Blossom Riverside", scene_07_sakura_river),
    ("Zen Rock Garden", scene_08_zen_garden),
    ("Autumn Maple Valley", scene_09_maple_valley),
    ("Rice Paddy Village", scene_10_rice_village),
    ("Koi Pond Bridge", scene_11_koi_bridge),
    ("Temple Gate", scene_12_temple_gate),
    ("Moonlit Pines", scene_13_moonlit_pines),
    ("Fishing Boats at Sunset", scene_14_fishing_boats),
    ("Crane and Pine", scene_15_crane_pine),
    ("Mountain Stream", scene_16_mountain_stream),
    ("Hilltop Pagoda", scene_17_hilltop_pagoda),
    ("Lakeside Torii", scene_18_lakeside_torii),
    ("Snowy Mount Fuji", scene_19_snowy_fuji),
    ("Garden Lantern Path", scene_20_lantern_path),
    ("Twilight Temple", scene_21_twilight_temple),
    ("Coastal Pines", scene_22_coastal_pines),
    ("Maple Koi Bridge", scene_23_maple_koi_bridge),
    ("Village Pagoda", scene_24_village_pagoda),
    ("Full Moon Over Mountains", scene_25_full_moon),
]

assert len(SCENES) == 25

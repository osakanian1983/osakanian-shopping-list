import { sma, rsi, macd, bollinger } from "./indicators.js";

export const CONDITIONS = [
  { id: "goldenCross", label: "ゴールデンクロス（5日線が25日線を上抜け）", group: "移動平均" },
  { id: "deadCross", label: "デッドクロス（5日線が25日線を下抜け）", group: "移動平均" },
  { id: "rsiOversold", label: "RSIが30以下（売られすぎ）", group: "RSI" },
  { id: "rsiOverbought", label: "RSIが70以上（買われすぎ）", group: "RSI" },
  { id: "macdGoldenCross", label: "MACDゴールデンクロス", group: "MACD" },
  { id: "macdDeadCross", label: "MACDデッドクロス", group: "MACD" },
  { id: "bbLowerBreak", label: "ボリンジャーバンド -2σ 割れ（反発期待）", group: "ボリンジャーバンド" },
  { id: "bbUpperBreak", label: "ボリンジャーバンド +2σ 突破（過熱）", group: "ボリンジャーバンド" },
];

function crossUp(a, b, i) {
  return a[i - 1] != null && b[i - 1] != null && a[i] != null && b[i] != null && a[i - 1] <= b[i - 1] && a[i] > b[i];
}

function crossDown(a, b, i) {
  return a[i - 1] != null && b[i - 1] != null && a[i] != null && b[i] != null && a[i - 1] >= b[i - 1] && a[i] < b[i];
}

// 与えられた日足バー配列から、直近時点の各種指標とスクリーニング条件の該当有無を算出する
export function analyze(bars) {
  if (!bars || bars.length < 2) return null;

  const closes = bars.map((b) => b.close);
  const sma5 = sma(closes, 5);
  const sma25 = sma(closes, 25);
  const rsi14 = rsi(closes, 14);
  const { macdLine, signalLine } = macd(closes);
  const { upper, lower } = bollinger(closes);

  const i = closes.length - 1;

  const matched = {
    goldenCross: i >= 1 && crossUp(sma5, sma25, i),
    deadCross: i >= 1 && crossDown(sma5, sma25, i),
    rsiOversold: rsi14[i] != null && rsi14[i] <= 30,
    rsiOverbought: rsi14[i] != null && rsi14[i] >= 70,
    macdGoldenCross: i >= 1 && crossUp(macdLine, signalLine, i),
    macdDeadCross: i >= 1 && crossDown(macdLine, signalLine, i),
    bbLowerBreak: lower[i] != null && closes[i] <= lower[i],
    bbUpperBreak: upper[i] != null && closes[i] >= upper[i],
  };

  return {
    date: bars[i].date,
    latestClose: closes[i],
    prevClose: i >= 1 ? closes[i - 1] : null,
    sma5: sma5[i],
    sma25: sma25[i],
    rsi: rsi14[i],
    macd: macdLine[i],
    macdSignal: signalLine[i],
    bbUpper: upper[i],
    bbLower: lower[i],
    matched,
    sparkline: closes.slice(-30),
  };
}

export function evaluate(analysis, selectedConditionIds, mode) {
  if (!analysis) return false;
  if (selectedConditionIds.length === 0) return true;
  const results = selectedConditionIds.map((id) => !!analysis.matched[id]);
  return mode === "OR" ? results.some(Boolean) : results.every(Boolean);
}

export function matchedLabels(analysis) {
  if (!analysis) return [];
  return CONDITIONS.filter((c) => analysis.matched[c.id]).map((c) => c.label);
}

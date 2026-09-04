// 株価データ取得層
//
// 現在は無料・無登録で使える Yahoo Finance の非公式チャートAPIを
// CORSプロキシ経由で叩く実装のみ。将来的に有料APIを追加する場合は
// この層にプロバイダーを追加し、fetchBars() の切り替え先を増やす想定。

const YAHOO_BASE = "https://query1.finance.yahoo.com/v8/finance/chart/";

// 無料の公開CORSプロキシ。動作しない場合に備えて複数試す。
const CORS_PROXIES = [
  (url) => `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`,
  (url) => `https://corsproxy.io/?url=${encodeURIComponent(url)}`,
];

export function toYahooSymbol(code) {
  const trimmed = code.trim();
  // 東証の4桁コード（英字を含む新形式コードも含む。例: 7203, 285A）
  if (/^[0-9]\d{2}[0-9A-Za-z]$/.test(trimmed)) return `${trimmed}.T`;
  return trimmed;
}

function parseYahooChart(data) {
  const result = data?.chart?.result?.[0];
  const error = data?.chart?.error;
  if (error) throw new Error(error.description || "データ取得エラー");
  if (!result || !result.timestamp) throw new Error("株価データが見つかりません");

  const timestamps = result.timestamp;
  const quote = result.indicators?.quote?.[0] ?? {};
  const meta = result.meta ?? {};

  const bars = timestamps
    .map((t, i) => ({
      date: new Date(t * 1000),
      open: quote.open?.[i] ?? null,
      high: quote.high?.[i] ?? null,
      low: quote.low?.[i] ?? null,
      close: quote.close?.[i] ?? null,
      volume: quote.volume?.[i] ?? null,
    }))
    .filter((b) => b.close != null);

  if (bars.length === 0) throw new Error("有効な株価データがありません");

  return {
    name: meta.shortName || meta.longName || meta.symbol,
    currency: meta.currency || "JPY",
    bars,
  };
}

export async function fetchYahooChart(code, { range = "6mo", interval = "1d" } = {}) {
  const symbol = toYahooSymbol(code);
  const target = `${YAHOO_BASE}${encodeURIComponent(symbol)}?range=${range}&interval=${interval}`;

  let lastError;
  for (const makeProxyUrl of CORS_PROXIES) {
    try {
      const res = await fetch(makeProxyUrl(target), { cache: "no-store" });
      if (!res.ok) {
        lastError = new Error(`HTTP ${res.status}`);
        continue;
      }
      const data = await res.json();
      return parseYahooChart(data);
    } catch (err) {
      lastError = err;
    }
  }
  throw lastError || new Error("データ取得に失敗しました");
}

// CSVインポート（フェッチが失敗した場合の手動代替手段）
// 想定ヘッダー: Date,Open,High,Low,Close,Volume（Open/High/Low/Volumeは省略可）
export function parseCSV(text) {
  const lines = text
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean);
  if (lines.length < 2) throw new Error("CSVに十分なデータがありません");

  const delim = lines[0].includes("\t") ? "\t" : ",";
  const header = lines[0].split(delim).map((h) => h.trim().toLowerCase());
  const findCol = (names) => header.findIndex((h) => names.includes(h));

  const dateIdx = findCol(["date", "日付"]);
  const closeIdx = findCol(["close", "close*", "終値"]);
  const openIdx = findCol(["open", "始値"]);
  const highIdx = findCol(["high", "高値"]);
  const lowIdx = findCol(["low", "安値"]);
  const volIdx = findCol(["volume", "出来高"]);

  if (dateIdx === -1 || closeIdx === -1) {
    throw new Error("CSVには Date列 と Close(終値)列 が必要です");
  }

  const bars = lines
    .slice(1)
    .map((line) => {
      const cols = line.split(delim);
      const date = new Date(cols[dateIdx]);
      const close = parseFloat(cols[closeIdx]);
      return {
        date,
        open: openIdx !== -1 ? parseFloat(cols[openIdx]) : close,
        high: highIdx !== -1 ? parseFloat(cols[highIdx]) : close,
        low: lowIdx !== -1 ? parseFloat(cols[lowIdx]) : close,
        close,
        volume: volIdx !== -1 ? parseFloat(cols[volIdx]) : null,
      };
    })
    .filter((b) => Number.isFinite(b.close) && !Number.isNaN(b.date.getTime()));

  if (bars.length === 0) throw new Error("CSVから有効な行を読み取れませんでした");

  bars.sort((a, b) => a.date - b.date);
  return { name: null, currency: "JPY", bars };
}

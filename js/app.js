import { fetchYahooChart, parseCSV } from "./dataProvider.js";
import { CONDITIONS, analyze, evaluate, matchedLabels } from "./screener.js";
import { NIKKEI_225 } from "./indices.js";

const WATCHLIST_KEY = "jp-stock-screener.watchlist";
const CACHE_KEY = "jp-stock-screener.priceCache";
const SETTINGS_KEY = "jp-stock-screener.settings";

/** @type {{code: string, name: string}[]} */
let watchlist = loadJSON(WATCHLIST_KEY, []);
/** @type {Record<string, {name: string, bars: any[], fetchedAt: string, source: string, error?: string}>} */
let priceCache = loadJSON(CACHE_KEY, {});
let settings = loadJSON(SETTINGS_KEY, { conditions: [], mode: "AND" });

function loadJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function save(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // 保存容量オーバー等は無視（次回起動時は再取得すればよい）
  }
}

// ---- DOM refs ----
const watchlistFormEl = document.getElementById("watchlist-form");
const codeInputEl = document.getElementById("code-input");
const nameInputEl = document.getElementById("name-input");
const watchlistEl = document.getElementById("watchlist");
const watchlistEmptyEl = document.getElementById("watchlist-empty");
const fetchAllBtn = document.getElementById("fetch-all-btn");
const fetchStatusEl = document.getElementById("fetch-status");
const conditionsEl = document.getElementById("conditions");
const modeRadios = document.querySelectorAll('input[name="mode"]');
const runScreenBtn = document.getElementById("run-screen-btn");
const resultsEl = document.getElementById("results");
const resultsEmptyEl = document.getElementById("results-empty");
const bulkInputEl = document.getElementById("bulk-input");
const bulkAddBtn = document.getElementById("bulk-add-btn");
const sampleAddBtn = document.getElementById("sample-add-btn");
const nikkei225AddBtn = document.getElementById("nikkei225-add-btn");
const csvDialogEl = document.getElementById("csv-dialog");
const csvFormEl = document.getElementById("csv-form");
const csvFileInputEl = document.getElementById("csv-file-input");
const csvTargetLabelEl = document.getElementById("csv-target-label");
let csvTargetCode = null;

// ---- 条件チェックボックス描画 ----
function renderConditions() {
  const groups = new Map();
  for (const c of CONDITIONS) {
    if (!groups.has(c.group)) groups.set(c.group, []);
    groups.get(c.group).push(c);
  }

  conditionsEl.replaceChildren(
    ...[...groups.entries()].map(([group, items]) => {
      const fieldset = document.createElement("fieldset");
      fieldset.className = "condition-group";
      const legend = document.createElement("legend");
      legend.textContent = group;
      fieldset.append(legend);

      for (const c of items) {
        const label = document.createElement("label");
        label.className = "condition-item";
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = c.id;
        checkbox.checked = settings.conditions.includes(c.id);
        checkbox.addEventListener("change", () => {
          settings.conditions = checkbox.checked
            ? [...settings.conditions, c.id]
            : settings.conditions.filter((id) => id !== c.id);
          save(SETTINGS_KEY, settings);
        });
        label.append(checkbox, document.createTextNode(c.label));
        fieldset.append(label);
      }
      return fieldset;
    })
  );
}

for (const radio of modeRadios) {
  radio.checked = radio.value === settings.mode;
  radio.addEventListener("change", () => {
    if (radio.checked) {
      settings.mode = radio.value;
      save(SETTINGS_KEY, settings);
    }
  });
}

// ---- ウォッチリスト ----
function formatFetchedAt(iso) {
  if (!iso) return "未取得";
  const d = new Date(iso);
  return `${d.getMonth() + 1}/${d.getDate()} ${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")} 時点`;
}

function renderWatchlist() {
  watchlistEmptyEl.hidden = watchlist.length !== 0;

  watchlistEl.replaceChildren(
    ...watchlist.map((stock) => {
      const cached = priceCache[stock.code];
      const li = document.createElement("li");
      li.className = "watch-row";

      const info = document.createElement("div");
      info.className = "watch-info";
      const title = document.createElement("div");
      title.className = "watch-title";
      title.textContent = `${stock.code} ${cached?.name || stock.name || ""}`.trim();
      const status = document.createElement("div");
      status.className = "watch-status" + (cached?.error ? " error" : "");
      status.textContent = cached?.error ? `取得失敗: ${cached.error}` : formatFetchedAt(cached?.fetchedAt);
      info.append(title, status);

      const actions = document.createElement("div");
      actions.className = "watch-actions";

      const csvBtn = document.createElement("button");
      csvBtn.type = "button";
      csvBtn.className = "ghost-btn";
      csvBtn.textContent = "CSV取込";
      csvBtn.addEventListener("click", () => openCsvDialog(stock.code));

      const deleteBtn = document.createElement("button");
      deleteBtn.type = "button";
      deleteBtn.className = "ghost-btn danger";
      deleteBtn.textContent = "削除";
      deleteBtn.addEventListener("click", () => removeStock(stock.code));

      actions.append(csvBtn, deleteBtn);
      li.append(info, actions);
      return li;
    })
  );
}

function addStock(code, name) {
  const trimmed = code.trim();
  if (!trimmed) return;
  if (watchlist.some((s) => s.code === trimmed)) return;
  watchlist.push({ code: trimmed, name: name.trim() });
  save(WATCHLIST_KEY, watchlist);
  renderWatchlist();
}

function removeStock(code) {
  watchlist = watchlist.filter((s) => s.code !== code);
  delete priceCache[code];
  save(WATCHLIST_KEY, watchlist);
  save(CACHE_KEY, priceCache);
  renderWatchlist();
  renderResults([]);
}

watchlistFormEl.addEventListener("submit", (e) => {
  e.preventDefault();
  addStock(codeInputEl.value, nameInputEl.value);
  codeInputEl.value = "";
  nameInputEl.value = "";
  codeInputEl.focus();
});

// 「コード」「コード,銘柄名」を改行・カンマ・スペース区切りで受け付ける
const CODE_PATTERN = /^[0-9]\d{2}[0-9A-Za-z]$/;

function parseBulkCodes(text) {
  const entries = [];
  const lines = text.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
  for (const line of lines) {
    const commaParts = line.split(",").map((p) => p.trim()).filter(Boolean);
    if (commaParts.length >= 2 && CODE_PATTERN.test(commaParts[0])) {
      entries.push({ code: commaParts[0], name: commaParts.slice(1).join(" ") });
      continue;
    }
    for (const token of line.split(/[,\s]+/).map((t) => t.trim()).filter(Boolean)) {
      if (CODE_PATTERN.test(token)) entries.push({ code: token, name: "" });
    }
  }
  return entries;
}

function addStocksBulk(entries) {
  let added = 0;
  for (const { code, name } of entries) {
    if (watchlist.some((s) => s.code === code)) continue;
    watchlist.push({ code, name });
    added++;
  }
  if (added > 0) {
    save(WATCHLIST_KEY, watchlist);
    renderWatchlist();
  }
  return added;
}

bulkAddBtn.addEventListener("click", () => {
  const entries = parseBulkCodes(bulkInputEl.value);
  if (entries.length === 0) {
    alert("有効な銘柄コードが見つかりませんでした。");
    return;
  }
  const added = addStocksBulk(entries);
  bulkInputEl.value = "";
  fetchStatusEl.textContent = `${added}銘柄を追加しました。「全銘柄のデータを取得」で取得できます。`;
});

const SAMPLE_STOCKS = [
  { code: "7203", name: "トヨタ自動車" },
  { code: "6758", name: "ソニーグループ" },
  { code: "9432", name: "日本電信電話" },
  { code: "9433", name: "KDDI" },
  { code: "9984", name: "ソフトバンクグループ" },
  { code: "8306", name: "三菱UFJフィナンシャル・グループ" },
  { code: "6861", name: "キーエンス" },
  { code: "9983", name: "ファーストリテイリング" },
  { code: "6501", name: "日立製作所" },
  { code: "7267", name: "本田技研工業" },
];

sampleAddBtn.addEventListener("click", () => {
  const added = addStocksBulk(SAMPLE_STOCKS);
  fetchStatusEl.textContent = `サンプル銘柄を${added}件追加しました。「全銘柄のデータを取得」で取得できます。`;
});

nikkei225AddBtn.addEventListener("click", () => {
  if (watchlist.length > 0) {
    const ok = confirm(`日経225の225銘柄を追加します（既存の${watchlist.length}銘柄はそのまま残ります）。よろしいですか？`);
    if (!ok) return;
  }
  const added = addStocksBulk(NIKKEI_225);
  fetchStatusEl.textContent = `日経225から${added}銘柄を追加しました。「全銘柄のデータを取得」は225件分の取得に数分かかります。`;
});

// ---- データ取得 ----
async function fetchAll() {
  if (watchlist.length === 0) return;
  fetchAllBtn.disabled = true;
  let done = 0;
  for (const stock of watchlist) {
    fetchStatusEl.textContent = `取得中... (${done + 1}/${watchlist.length}) ${stock.code}`;
    try {
      const { name, bars } = await fetchYahooChart(stock.code);
      priceCache[stock.code] = {
        name: name || stock.name,
        bars,
        fetchedAt: new Date().toISOString(),
        source: "yahoo",
      };
    } catch (err) {
      priceCache[stock.code] = {
        ...(priceCache[stock.code] || {}),
        error: err.message || "取得失敗",
      };
    }
    done++;
    save(CACHE_KEY, priceCache);
    renderWatchlist();
    // 無料の公開プロキシへの連続アクセスを避けるための小休止
    await new Promise((r) => setTimeout(r, 400));
  }
  fetchStatusEl.textContent = `完了 (${done}/${watchlist.length}件)。取得に失敗した銘柄はCSV取込で補完できます。`;
  fetchAllBtn.disabled = false;
}

fetchAllBtn.addEventListener("click", fetchAll);

// ---- CSVインポート ----
function openCsvDialog(code) {
  csvTargetCode = code;
  csvTargetLabelEl.textContent = code;
  csvFileInputEl.value = "";
  csvDialogEl.showModal();
}

csvFormEl.addEventListener("submit", async (e) => {
  e.preventDefault();
  const file = csvFileInputEl.files?.[0];
  if (!file || !csvTargetCode) {
    csvDialogEl.close();
    return;
  }
  try {
    const text = await file.text();
    const { bars } = parseCSV(text);
    const stock = watchlist.find((s) => s.code === csvTargetCode);
    priceCache[csvTargetCode] = {
      name: priceCache[csvTargetCode]?.name || stock?.name || csvTargetCode,
      bars,
      fetchedAt: new Date().toISOString(),
      source: "csv",
    };
    save(CACHE_KEY, priceCache);
    renderWatchlist();
  } catch (err) {
    alert(`CSVの読み込みに失敗しました: ${err.message}`);
  }
  csvDialogEl.close();
});

document.getElementById("csv-cancel-btn").addEventListener("click", () => csvDialogEl.close());

// ---- スクリーニング実行 ----
function drawSparkline(canvas, closes) {
  const ctx = canvas.getContext("2d");
  const w = canvas.width;
  const h = canvas.height;
  ctx.clearRect(0, 0, w, h);
  if (!closes || closes.length < 2) return;

  const min = Math.min(...closes);
  const max = Math.max(...closes);
  const range = max - min || 1;
  const step = w / (closes.length - 1);

  const up = closes[closes.length - 1] >= closes[0];
  ctx.strokeStyle = up ? "#c0392b" : "#2874a6"; // 日本の慣習: 上昇=赤、下落=青
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  closes.forEach((v, i) => {
    const x = i * step;
    const y = h - ((v - min) / range) * (h - 4) - 2;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.stroke();
}

function buildResultRow(stock, analysisResult) {
  const cached = priceCache[stock.code];
  const tr = document.createElement("tr");

  const codeTd = document.createElement("td");
  codeTd.textContent = stock.code;

  const nameTd = document.createElement("td");
  nameTd.textContent = cached?.name || stock.name || "";

  const priceTd = document.createElement("td");
  const change = analysisResult.prevClose != null ? analysisResult.latestClose - analysisResult.prevClose : null;
  const changePct = change != null && analysisResult.prevClose ? (change / analysisResult.prevClose) * 100 : null;
  priceTd.innerHTML = `${analysisResult.latestClose.toLocaleString()}`;
  if (changePct != null) {
    const sign = change >= 0 ? "+" : "";
    const span = document.createElement("span");
    span.className = "change " + (change >= 0 ? "up" : "down");
    span.textContent = ` ${sign}${changePct.toFixed(1)}%`;
    priceTd.append(span);
  }

  const conditionsTd = document.createElement("td");
  conditionsTd.className = "matched-conditions";
  for (const label of matchedLabels(analysisResult)) {
    const badge = document.createElement("span");
    badge.className = "badge";
    badge.textContent = label;
    conditionsTd.append(badge);
  }

  const detailTd = document.createElement("td");
  detailTd.className = "detail-cell";
  detailTd.textContent = `RSI ${analysisResult.rsi != null ? analysisResult.rsi.toFixed(1) : "-"} / MACD ${analysisResult.macd != null ? analysisResult.macd.toFixed(1) : "-"}`;

  const chartTd = document.createElement("td");
  const canvas = document.createElement("canvas");
  canvas.width = 90;
  canvas.height = 32;
  chartTd.append(canvas);

  tr.append(codeTd, nameTd, priceTd, conditionsTd, detailTd, chartTd);

  requestAnimationFrame(() => drawSparkline(canvas, analysisResult.sparkline));

  return tr;
}

function renderResults(rows) {
  resultsEl.replaceChildren(...rows);
  resultsEmptyEl.hidden = rows.length !== 0;
}

function runScreen() {
  const selected = settings.conditions;
  const mode = settings.mode;
  const rows = [];

  for (const stock of watchlist) {
    const cached = priceCache[stock.code];
    if (!cached?.bars?.length) continue;
    const result = analyze(cached.bars);
    if (!result) continue;
    if (evaluate(result, selected, mode)) {
      rows.push(buildResultRow(stock, result));
    }
  }

  renderResults(rows);
}

runScreenBtn.addEventListener("click", runScreen);

// ---- 初期化 ----
renderConditions();
renderWatchlist();
renderResults([]);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  });
}

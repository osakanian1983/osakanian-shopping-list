const GENRES = [
  {
    name: "箱根の露天風呂付き温泉旅館",
    worry: "旅行先が決まらない休日",
    product: "箱根の温泉旅館",
    price: "1泊2万円",
    dailyEffort: "予約して泊まるだけ",
    period: "1泊",
    resultGood: "心と体がしっかり休まる",
    altHigh: "10万円の海外旅行",
    altBadState: "帰ったらすぐ疲れが戻ってる",
    effortHigh: "何時間も行き先を悩んで",
    tag: "温泉旅行",
    rakutenName: "はつはな",
    rakutenUrl: "https://travel.rakuten.co.jp/HOTEL/16108/16108.html",
  },
  {
    name: "沖縄離島リゾート",
    worry: "積み重なっていく日々の疲れ",
    product: "沖縄離島のリゾート",
    price: "1泊3万円",
    dailyEffort: "飛行機で向かうだけ",
    period: "1泊",
    resultGood: "南国の景色で心まで癒される",
    altHigh: "月1万円のスパ通い",
    altBadState: "通ってもすぐ疲れが戻ってる",
    effortHigh: "近場のスパを何軒も探して",
    tag: "離島旅行",
    rakutenName: "はいむるぶし＜小浜島＞",
    rakutenUrl: "https://travel.rakuten.co.jp/HOTEL/53418/53418.html",
  },
  {
    name: "軽井沢のグランピング",
    worry: "準備が大変なアウトドア欲",
    product: "軽井沢のグランピング",
    price: "1泊1.5万円",
    dailyEffort: "現地でテントに入るだけ",
    period: "1泊",
    resultGood: "手ぶらで自然の非日常が味わえる",
    altHigh: "5万円のキャンプ道具",
    altBadState: "揃えても押し入れで眠ってる",
    effortHigh: "道具を積んで何時間も設営して",
    tag: "グランピング",
    rakutenName: "Dot Glamping 北軽井沢",
    rakutenUrl: "https://travel.rakuten.co.jp/HOTEL/192347/192347.html",
  },
  {
    name: "京都駅近くのデザイナーズステイ",
    worry: "観光で消耗する移動の体力",
    product: "京都駅前のホテル",
    price: "1泊1.3万円",
    dailyEffort: "駅から歩いて泊まるだけ",
    period: "1泊",
    resultGood: "移動が減って観光に集中できる",
    altHigh: "1万円のタクシー移動",
    altBadState: "使ってもすぐ渋滞で時間が溶ける",
    effortHigh: "バスを何度も乗り換えて",
    tag: "京都旅行",
    rakutenName: "Rakuten STAY Kyoto Station",
    rakutenUrl: "https://travel.rakuten.co.jp/HOTEL/170009/170009.html",
  },
  {
    name: "伊豆の貸別荘コテージ",
    worry: "周りに気を遣う家族旅行",
    product: "伊豆の貸別荘コテージ",
    price: "1泊2.5万円",
    dailyEffort: "一棟貸しに鍵を開けて入るだけ",
    period: "1泊",
    resultGood: "家族だけの時間を楽しめる",
    altHigh: "1泊4万円の高級旅館",
    altBadState: "泊まっても周りが気になってる",
    effortHigh: "声や足音を気にして過ごして",
    tag: "貸別荘",
    rakutenName: "コテージ伊豆",
    rakutenUrl: "https://travel.rakuten.co.jp/HOTEL/171122/171122.html",
  },
  {
    name: "熱海のオーシャンビュー宿",
    worry: "代わり映えしない日常の景色",
    product: "熱海のオーシャンビュー宿",
    price: "1泊1.8万円",
    dailyEffort: "部屋の窓を開けるだけ",
    period: "1泊",
    resultGood: "一面の海で気分が切り替わる",
    altHigh: "3万円の絶景カフェ巡り",
    altBadState: "巡ってもすぐ日常の景色に戻る",
    effortHigh: "海の見えるカフェまで何度も通って",
    tag: "熱海旅行",
    rakutenName: "オーシャンビューテラス南熱海",
    rakutenUrl: "https://travel.rakuten.co.jp/HOTEL/189655/189655.html",
  },
  {
    name: "出張向けビジネスホテル",
    worry: "出張先のホテル探しの手間",
    product: "品川の出張ホテル",
    price: "1泊9000円",
    dailyEffort: "駅近のホテルを予約するだけ",
    period: "1泊",
    resultGood: "移動時間が減って仕事に集中できる",
    altHigh: "1万円の深夜タクシー",
    altBadState: "使っても朝の渋滞で遅れそうになる",
    effortHigh: "駅から離れたホテルまで何十分も歩いて",
    tag: "出張ホテル",
    rakutenName: "品川プリンスホテル",
    rakutenUrl: "https://travel.rakuten.co.jp/HOTEL/19455/19455.html",
  },
  {
    name: "ニセコのスキーリゾート",
    worry: "滑った後の体の冷えと疲労",
    product: "ニセコのスキーリゾート",
    price: "1泊2.2万円",
    dailyEffort: "貸切温泉に浸かるだけ",
    period: "1泊",
    resultGood: "体が温まって翌日も滑れる",
    altHigh: "月1万円の整体通い",
    altBadState: "施術直後だけ冷えが取れてすぐ戻る",
    effortHigh: "湿布を貼って何時間も休んで",
    tag: "スキー旅行",
    rakutenName: "木ニセコ",
    rakutenUrl: "https://travel.rakuten.co.jp/HOTEL/147788/147788.html",
  },
  {
    name: "河口湖の富士山ビューホテル",
    worry: "富士山が見えない部屋への後悔",
    product: "河口湖の富士山ビューホテル",
    price: "1泊1.6万円",
    dailyEffort: "カーテンを開けるだけ",
    period: "1泊",
    resultGood: "目の前に富士山が広がって感動する",
    altHigh: "2万円の富士山ツアーバス",
    altBadState: "参加しても雲で富士山が見えず終わる",
    effortHigh: "展望台まで何十分もバスに乗って",
    tag: "富士山旅行",
    rakutenName: "富士河口湖リゾートホテル",
    rakutenUrl: "https://travel.rakuten.co.jp/HOTEL/173220/173220.html",
  },
  {
    name: "ペット同伴できる温泉旅館",
    worry: "愛犬を置いて行く旅行への申し訳なさ",
    product: "ペット同伴できる温泉旅館",
    price: "1泊2万円",
    dailyEffort: "愛犬と一緒に泊まるだけ",
    period: "1泊",
    resultGood: "愛犬と一緒にゆっくり過ごせる",
    altHigh: "1泊5000円のペットホテル",
    altBadState: "預けても愛犬が寂しそうにしてる",
    effortHigh: "お迎え時間を気にして旅を切り詰めて",
    tag: "ペット旅行",
    rakutenName: "浅間温泉 坂本の湯旅館",
    rakutenUrl: "https://travel.rakuten.co.jp/HOTEL/31949/31949.html",
  },
];

const PATTERNS = [
  {
    key: "A",
    title: "パターンA｜価格ギャップ重視型",
    scoreRange: { hook: [17, 19], concrete: [18, 20], contrarian: [15, 18], empathy: [15, 18], clip: [15, 18] },
    reasons: ["価格差のインパクトでクリップを誘発するため", "コスパ訴求が当事者に刺さりやすいため"],
    build(g) {
      const l1 = `${g.worry}に悩んでる人、${g.product}に泊まって本当によかった。`;
      const rest =
        `だって、${g.price}なのに${g.dailyEffort}で${g.period}には${g.resultGood}って` +
        `正直コスパ良すぎ🕊️${g.altHigh}に泊まってるのに${g.altBadState}人こそ試して。` +
        `高いお金払って変化ないより、${g.price}でちゃんと満足できる方が良くない？🕊️`;
      return `${l1}\n${rest}`;
    },
  },
  {
    key: "B",
    title: "パターンB｜時短・手軽さ重視型",
    scoreRange: { hook: [15, 18], concrete: [16, 19], contrarian: [13, 16], empathy: [17, 19], clip: [15, 18] },
    reasons: ["時短の実感が刺さり保存されやすいため", "手軽さ訴求で忙しい層に刺さるため"],
    build(g) {
      const l1 = `${g.worry}に時間かけたくない人、${g.product}が神すぎた。`;
      const rest =
        `だって、${g.dailyEffort}だけで${g.period}には${g.resultGood}って` +
        `忙しい人ほどマジで助かるやつ🕊️${g.effortHigh}頑張ってるのに疲れが取れない人こそ試して。` +
        `手間かけて一時的に変わるより、${g.dailyEffort}で自然にリフレッシュできる方が良くない？🕊️`;
      return `${l1}\n${rest}`;
    },
  },
  {
    key: "C",
    title: "パターンC｜逆張り・共感重視型",
    scoreRange: { hook: [17, 19], concrete: [16, 19], contrarian: [18, 20], empathy: [17, 19], clip: [16, 19] },
    reasons: ["高額勢を名指しし共感と反論を誘発するため", "逆張り視点でコメントを誘発しやすいため"],
    build(g) {
      const l1 = `${g.worry}、実は${g.altHigh}に泊まってる人ほど気づいてない落とし穴があるらしい。`;
      const rest =
        `だって、値段より過ごし方が大事で${g.price}の${g.product}でも${g.period}過ごしたら` +
        `${g.resultGood}って🕊️${g.altHigh}に泊まって満足しただけで${g.altBadState}人こそ試して。` +
        `値段で安心するより、ちゃんと満喫する方が良くない？🕊️`;
      return `${l1}\n${rest}`;
    },
  },
];

const SCORE_LABELS = [
  ["hook", "フック力"],
  ["concrete", "具体性"],
  ["contrarian", "逆張り強度"],
  ["empathy", "共感性"],
  ["clip", "クリップ誘発力"],
];

const HASHTAGS = "#楽天トラベル #国内旅行 #旅行好き #旅好きさんと繋がりたい";

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pickGenre(excludeIndex) {
  if (GENRES.length === 1) return { genre: GENRES[0], index: 0 };
  let index = excludeIndex;
  while (index === excludeIndex) {
    index = randInt(0, GENRES.length - 1);
  }
  return { genre: GENRES[index], index };
}

function scorePattern(pattern) {
  const scores = {};
  let total = 0;
  for (const [key] of SCORE_LABELS) {
    const [min, max] = pattern.scoreRange[key];
    const value = randInt(min, max);
    scores[key] = value;
    total += value;
  }
  return { scores, total };
}

function generateRound(genre) {
  return PATTERNS.map((pattern) => {
    const body = pattern.build(genre);
    const { scores, total } = scorePattern(pattern);
    const reason = pattern.reasons[randInt(0, pattern.reasons.length - 1)];
    const tags = `${HASHTAGS} #${genre.tag}`;
    return { pattern, body, tags, scores, total, reason, charCount: body.replace(/\n/g, "").length };
  });
}

function formatRound(results) {
  const divider = "━━━━━━━━━━━━━━━";
  const blocks = results.map(({ pattern, body, tags, scores, total }) => {
    const scoreLines = SCORE_LABELS.map(([key, label]) => `・${label}：${scores[key]}/20`).join("\n");
    return `${divider}\n【${pattern.title}】\n伸びる確率：${total}％\n\n${body}\n\n${tags}\n\n採点内訳：\n${scoreLines}`;
  });
  const winner = results.reduce((best, cur) => (cur.total > best.total ? cur : best), results[0]);
  const summary = `【総合おすすめ】\n最も伸びる確率が高いパターン：${winner.pattern.key}\n理由：${winner.reason}`;
  return `${blocks.join("\n")}\n${divider}\n\n${summary}`;
}

const genreLabelEl = document.getElementById("genre-label");
const productInfoEl = document.getElementById("product-info");
const outputEl = document.getElementById("output");
const generateBtn = document.getElementById("generate-btn");
const copyBtn = document.getElementById("copy-btn");
const copyStatusEl = document.getElementById("copy-status");
const charCountsEl = document.getElementById("char-counts");

let lastGenreIndex = -1;
let currentText = "";

function render() {
  const { genre, index } = pickGenre(lastGenreIndex);
  lastGenreIndex = index;

  const results = generateRound(genre);
  currentText = formatRound(results);

  genreLabelEl.textContent = `今日のテーマ：${genre.name}`;
  productInfoEl.textContent = "";
  const linkLabel = document.createElement("span");
  linkLabel.textContent = "紹介施設：";
  const link = document.createElement("a");
  link.href = genre.rakutenUrl;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = genre.rakutenName;
  productInfoEl.append(linkLabel, link);

  outputEl.textContent = currentText;
  charCountsEl.textContent = results
    .map((r) => `${r.pattern.key}: ${r.charCount}文字`)
    .join(" / ");
  copyStatusEl.textContent = "";
}

generateBtn.addEventListener("click", render);

copyBtn.addEventListener("click", async () => {
  if (!currentText) return;
  try {
    await navigator.clipboard.writeText(currentText);
    copyStatusEl.textContent = "コピーしました";
  } catch {
    copyStatusEl.textContent = "コピーに失敗しました。手動で選択してください。";
  }
});

render();

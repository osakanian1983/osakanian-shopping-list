const GENRES = [
  {
    name: "由布院温泉の離れ宿",
    worry: "大浴場で周りを気にせず入れない悩み",
    product: "由布院の離れ宿",
    price: "1泊2.8万円",
    dailyEffort: "離れの内湯に浸かるだけ",
    period: "1泊",
    resultGood: "気兼ねなく名湯を満喫できる",
    altHigh: "5000円の貸切風呂温泉",
    altBadState: "利用しても時間制限で終わる",
    effortHigh: "予約して貸切風呂に通って",
    tag: "由布院温泉",
    rakutenName: "御宿 田 離宮",
    rakutenUrl: "https://travel.rakuten.co.jp/HOTEL/176658/176658.html",
    enCaption: "A ryokan with private detached rooms at Yufuin Onsen, Oita, rated 5.0 by guests.",
  },
  {
    name: "白川郷の合掌造り民宿",
    worry: "集落を素通りで終わる悩み",
    product: "白川郷の民宿",
    price: "1泊1.2万円",
    dailyEffort: "合掌造りの一室に泊まるだけ",
    period: "1泊",
    resultGood: "150年の暮らしを体感できる",
    altHigh: "3000円の見学ツアー",
    altBadState: "参加しても外から眺めるだけ",
    effortHigh: "何度も見学ツアーに参加して",
    tag: "白川郷旅行",
    rakutenName: "民宿 かんじや",
    rakutenUrl: "https://travel.rakuten.co.jp/HOTEL/39754/39754.html",
    enCaption: "A 150-year-old gassho-zukuri farmhouse minshuku in the UNESCO village of Shirakawa-go.",
  },
  {
    name: "石垣島のオーシャンビュー一棟貸し",
    worry: "リゾートでも人目が気になる悩み",
    product: "石垣島の一棟貸し",
    price: "1泊4.2万円",
    dailyEffort: "専用プールで過ごすだけ",
    period: "1泊",
    resultGood: "気兼ねなく絶景を独り占めできる",
    altHigh: "3万円の高級リゾート",
    altBadState: "泊まっても共有プールで気になる",
    effortHigh: "何軒も高級ホテルを比較して",
    tag: "石垣島旅行",
    rakutenName: "石垣ヒルズ",
    rakutenUrl: "https://travel.rakuten.co.jp/HOTEL/191815/191815.html",
    enCaption: "A one-villa-stay with an infinity pool on a hilltop in Ishigaki Island, Okinawa.",
  },
  {
    name: "軽井沢の一棟貸しコテージ",
    worry: "ホテルで別荘気分を味わえない悩み",
    product: "軽井沢のコテージ",
    price: "1泊2.2万円",
    dailyEffort: "コテージでBBQを待つだけ",
    period: "1泊",
    resultGood: "自分の別荘のようにくつろげる",
    altHigh: "3万円の高級ホテル",
    altBadState: "泊まっても結局一室で終わる",
    effortHigh: "別荘気分を求めて見比べて",
    tag: "軽井沢旅行",
    rakutenName: "軽井沢の貸別荘 桜ヶ丘パークコテージ",
    rakutenUrl: "https://travel.rakuten.co.jp/HOTEL/129542/129542.html",
    enCaption: "A whole-cottage rental at a resort villa complex in Karuizawa, Nagano.",
  },
  {
    name: "河口湖の富士山ビュー温泉旅館",
    worry: "天気任せの富士山観光に悩む悩み",
    product: "河口湖の富士山ビュー旅館",
    price: "1泊2.4万円",
    dailyEffort: "部屋の露天風呂に浸かるだけ",
    period: "1泊",
    resultGood: "部屋から富士山を満喫できる",
    altHigh: "1万円の富士山展望バス",
    altBadState: "参加しても曇りで見えない",
    effortHigh: "何度も展望ツアーに参加して",
    tag: "河口湖旅行",
    rakutenName: "富士河口湖温泉 湖南荘",
    rakutenUrl: "https://travel.rakuten.co.jp/HOTEL/31111/31111.html",
    enCaption: "A hot spring ryokan at Lake Kawaguchi with rooms facing Mt. Fuji, rated 4.75 by guests.",
  },
  {
    name: "屋久島の一棟貸し星空コテージ",
    worry: "満点の星空に憧れても叶わない悩み",
    product: "屋久島のコテージ",
    price: "1泊2000円",
    dailyEffort: "テラスで寝転んで星を待つだけ",
    period: "1泊",
    resultGood: "みかん畑に囲まれた星空を独占できる",
    altHigh: "1万円の天体観測ツアー",
    altBadState: "参加しても天候次第で見えない",
    effortHigh: "予約して観測地まで通って",
    tag: "屋久島旅行",
    rakutenName: "Villa Heureux（ヴィラ ウルー）",
    rakutenUrl: "https://travel.rakuten.co.jp/HOTEL/146866/146866.html",
    enCaption: "A whole-cottage stay surrounded by tangerine orchards in Yakushima, rated 5.0 by guests.",
  },
  {
    name: "佐渡島の海鮮民宿",
    worry: "離島で海の幸を味わい切れない悩み",
    product: "佐渡島の海鮮民宿",
    price: "1泊1.5万円",
    dailyEffort: "民宿で舟盛りを待つだけ",
    period: "1泊",
    resultGood: "特大アワビと海鮮を満喫できる",
    altHigh: "1万円の食べ放題ツアー",
    altBadState: "参加しても時間制限で食べ切れない",
    effortHigh: "何度も食べ放題ツアーに参加して",
    tag: "佐渡島旅行",
    rakutenName: "民宿 敷島荘",
    rakutenUrl: "https://travel.rakuten.co.jp/HOTEL/40089/40089.html",
    enCaption: "A minshuku in Sado Island, Niigata, known for its abalone and seafood dinners.",
  },
  {
    name: "蔵王温泉のゲレンデ徒歩5分スキー宿",
    worry: "移動に時間を取られる悩み",
    product: "蔵王温泉のスキー宿",
    price: "1泊8800円",
    dailyEffort: "徒歩5分でゲレンデに向かうだけ",
    period: "1泊",
    resultGood: "滑る時間が増えて満足できる",
    altHigh: "1万円の送迎付きツアー",
    altBadState: "利用しても送迎待ちで時間が減る",
    effortHigh: "毎回送迎バスを待って",
    tag: "蔵王温泉",
    rakutenName: "蔵王温泉 ロッジ スコーレ",
    rakutenUrl: "https://travel.rakuten.co.jp/HOTEL/5102/5102.html",
    enCaption: "A ski lodge at Zao Onsen, Yamagata, five minutes' walk from the slopes.",
  },
  {
    name: "下田の海近くペット同伴OK宿",
    worry: "愛犬を預けて旅行するのが心苦しい悩み",
    product: "下田のペット同伴宿",
    price: "1泊1.5万円",
    dailyEffort: "愛犬と宿の部屋でくつろぐだけ",
    period: "1泊",
    resultGood: "愛犬と一緒に旅を満喫できる",
    altHigh: "3000円のペットホテル",
    altBadState: "預けても慣れない環境でストレスがかかる",
    effortHigh: "毎回送り迎えして",
    tag: "下田旅行",
    rakutenName: "ペットと泊まる伊豆下田温泉宿 晴レ屋",
    rakutenUrl: "https://travel.rakuten.co.jp/HOTEL/111166/111166.html",
    enCaption: "A pet-friendly hot spring inn near the beach in Shimoda, Izu.",
  },
  {
    name: "奥飛騨温泉郷の貸切露天風呂宿",
    worry: "混浴の露天風呂に気を遣う悩み",
    product: "奥飛騨温泉郷の宿",
    price: "1泊2万円",
    dailyEffort: "貸切露天風呂を好きなだけ回るだけ",
    period: "1泊",
    resultGood: "気兼ねなく秘湯気分を満喫できる",
    altHigh: "5000円の貸切温泉施設",
    altBadState: "利用しても時間制限ですぐ終わる",
    effortHigh: "予約して貸切温泉に通って",
    tag: "奥飛騨温泉",
    rakutenName: "旅館 岐山",
    rakutenUrl: "https://travel.rakuten.co.jp/HOTEL/20046/20046.html",
    enCaption: "A ryokan in Okuhida Onsen, Gifu, with four free private open-air baths, no reservation needed.",
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

const HASHTAGS = "#PR #楽天トラベル #国内旅行 #旅行好き #旅好きさんと繋がりたい";

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

function formatRound(results, genre) {
  const divider = "━━━━━━━━━━━━━━━";
  const enLine = genre.enCaption ? `🌐 ${genre.enCaption} (Ad)\n\n` : "";
  const blocks = results.map(({ pattern, body, tags, scores, total }) => {
    const scoreLines = SCORE_LABELS.map(([key, label]) => `・${label}：${scores[key]}/20`).join("\n");
    return `${divider}\n【${pattern.title}】\n伸びる確率：${total}％\n\n${body}\n\n${enLine}${tags}\n\n採点内訳：\n${scoreLines}`;
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
  currentText = formatRound(results, genre);

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

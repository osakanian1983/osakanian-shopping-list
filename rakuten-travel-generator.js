const GENRES = [
  {
    name: "草津温泉の老舗旅館",
    worry: "日本三大名湯と言われても実感が薄い悩み",
    product: "草津温泉の老舗旅館",
    price: "1泊2万円",
    dailyEffort: "湯畑近くの旅館に泊まるだけ",
    period: "1泊",
    resultGood: "強い酸性泉の実力をしっかり体感できる",
    altHigh: "3000円の日帰り温泉巡り",
    altBadState: "巡っても結局移動で時間切れになる",
    effortHigh: "日帰り温泉を何軒もはしごして",
    tag: "草津温泉",
    rakutenName: "草津温泉 十二屋旅館",
    rakutenUrl: "https://travel.rakuten.co.jp/HOTEL/41000/41000.html",
    enCaption: "A traditional ryokan near the famous Yubatake in Kusatsu Onsen, Gunma.",
  },
  {
    name: "下呂温泉の老舗旅館",
    worry: "美肌の湯と聞いても半信半疑な悩み",
    product: "下呂温泉の老舗旅館",
    price: "1泊1.9万円",
    dailyEffort: "宿の湯にゆっくり浸かるだけ",
    period: "1泊",
    resultGood: "とろりとした湯で肌がすべすべになる",
    altHigh: "5000円の美肌エステ",
    altBadState: "通っても数日で元の肌触りに戻る",
    effortHigh: "毎回予約を取ってエステに通って",
    tag: "下呂温泉",
    rakutenName: "下呂温泉 旅館 瓢きん",
    rakutenUrl: "https://travel.rakuten.co.jp/HOTEL/8800/8800.html",
    enCaption: "A classic ryokan at Gero Onsen, one of Japan's three famous hot springs.",
  },
  {
    name: "有馬温泉の名湯旅館",
    worry: "金の湯か銀の湯か迷う悩み",
    product: "有馬温泉の名湯旅館",
    price: "1泊2.2万円",
    dailyEffort: "宿で両方の湯に入り比べるだけ",
    period: "1泊",
    resultGood: "金泉と銀泉の違いをじっくり満喫できる",
    altHigh: "1000円の日帰り入浴施設",
    altBadState: "入っても片方しか入れない",
    effortHigh: "日帰り施設を何軒もはしごして",
    tag: "有馬温泉",
    rakutenName: "有馬温泉 月光園 游月山荘",
    rakutenUrl: "https://travel.rakuten.co.jp/HOTEL/18251/18251.html",
    enCaption: "A ryokan at Arima Onsen near Kobe, famous for its gold and silver hot springs.",
  },
  {
    name: "奄美大島のオーシャンリゾート",
    worry: "海を近くに感じられない悩み",
    product: "奄美大島のリゾート",
    price: "1泊2万円",
    dailyEffort: "最上階の露天風呂から海を眺めるだけ",
    period: "1泊",
    resultGood: "奄美の海をすぐそばに感じて癒される",
    altHigh: "3万円のシュノーケリング",
    altBadState: "参加しても天候次第で入れない",
    effortHigh: "予約を取って港まで通って",
    tag: "奄美大島旅行",
    rakutenName: "スパリゾート奄美山羊島ホテル",
    rakutenUrl: "https://travel.rakuten.co.jp/HOTEL/142760/142760.html",
    enCaption: "An ocean resort hotel on Amami Oshima Island with rooftop open-air baths.",
  },
  {
    name: "函館ベイエリアの一棟貸しホテル",
    worry: "観光地ホテルで人目が気になる悩み",
    product: "函館ベイの一棟貸しホテル",
    price: "1泊1.8万円",
    dailyEffort: "一棟貸しの部屋でくつろぐだけ",
    period: "1泊",
    resultGood: "誰にも気兼ねなく満喫できる",
    altHigh: "3万円の高級ホテルのスイート",
    altBadState: "泊まっても結局人目が気になる",
    effortHigh: "人目を避けて部屋に閉じこもって",
    tag: "函館旅行",
    rakutenName: "函館ベイハウス",
    rakutenUrl: "https://travel.rakuten.co.jp/HOTEL/190386/190386.html",
    enCaption: "A whole-house rental in Hakodate's scenic bay area, near the historic warehouses.",
  },
  {
    name: "高野山の宿坊",
    worry: "観光地のホテルでは味わえない特別感がない悩み",
    product: "高野山の宿坊",
    price: "1泊1.5万円",
    dailyEffort: "宿坊で精進料理を待つだけ",
    period: "1泊",
    resultGood: "世界遺産の静寂と精進料理を満喫できる",
    altHigh: "1万円の日帰りバスツアー",
    altBadState: "参加しても人混みで静寂がない",
    effortHigh: "何軒も観光地を回って写真を撮って",
    tag: "高野山旅行",
    rakutenName: "高野山 宿坊 大明王院",
    rakutenUrl: "https://travel.rakuten.co.jp/HOTEL/184135/184135.html",
    enCaption: "A temple lodging on the UNESCO World Heritage site of Mount Koya, Wakayama.",
  },
  {
    name: "鬼怒川温泉の大型旅館",
    worry: "空の庭露天風呂に憧れる悩み",
    product: "鬼怒川温泉の大型旅館",
    price: "1泊2.3万円",
    dailyEffort: "最上階の露天風呂に浸かるだけ",
    period: "1泊",
    resultGood: "鬼怒川の渓谷を眺めながら湯を満喫できる",
    altHigh: "3万円の渓谷ツアー",
    altBadState: "参加しても移動ばかりで見られない",
    effortHigh: "渓谷まで何度も通って時間を待って",
    tag: "鬼怒川温泉",
    rakutenName: "鬼怒川温泉 あさや",
    rakutenUrl: "https://travel.rakuten.co.jp/HOTEL/8643/8643.html",
    enCaption: "A large ryokan at Kinugawa Onsen with a sky-garden open-air bath over the gorge.",
  },
  {
    name: "四万十川のカヌー体験宿",
    worry: "川遊びの準備が面倒で踏み出せない",
    product: "四万十川のカヌー体験宿",
    price: "1泊1.3万円",
    dailyEffort: "宿のカヌーに乗って川を下るだけ",
    period: "1泊",
    resultGood: "手ぶらで清流のカヌー体験を満喫できる",
    altHigh: "3万円のカヌー用品一式",
    altBadState: "買っても使う機会が少なく困る",
    effortHigh: "毎回道具を揃えて運んで",
    tag: "四万十旅行",
    rakutenName: "四万十ひろばバンガロー「ゆうゆう」",
    rakutenUrl: "https://travel.rakuten.co.jp/HOTEL/128509/128509.html",
    enCaption: "A riverside lodge on the Shimanto River, Japan's last clear stream, with canoe trips.",
  },
  {
    name: "淡路島のオーシャンビュー一棟貸し",
    worry: "部屋が狭く感じる悩み",
    product: "淡路島の一棟貸し",
    price: "1泊2.5万円",
    dailyEffort: "一棟貸しのテラスで海を眺めるだけ",
    period: "1泊",
    resultGood: "播磨灘を独り占めできる",
    altHigh: "3万円の都市部ホテル",
    altBadState: "泊まっても窓の景色が狭く感じる",
    effortHigh: "良い景色を求めて何軒も見比べて",
    tag: "淡路島旅行",
    rakutenName: "AWAJI OCEAN BASE WEST COAST",
    rakutenUrl: "https://travel.rakuten.co.jp/HOTEL/184267/184267.html",
    enCaption: "A whole-house rental on Awaji Island's west coast with sweeping ocean views.",
  },
  {
    name: "摩周湖畔の温泉ペンション",
    worry: "神秘的な湖もすぐ日常に戻る悩み",
    product: "摩周湖畔の温泉ペンション",
    price: "1泊1万円",
    dailyEffort: "駅前のペンションで温泉に浸かるだけ",
    period: "1泊",
    resultGood: "摩周湖の静けさを感じて癒される",
    altHigh: "2万円の展望台ツアー",
    altBadState: "行っても霧で湖が見えず終わる",
    effortHigh: "展望台まで何度も通って待って",
    tag: "摩周湖旅行",
    rakutenName: "ペンション ニュー マリモ",
    rakutenUrl: "https://travel.rakuten.co.jp/HOTEL/28635/28635.html",
    enCaption: "A hot spring pension by Lake Mashu, one of Hokkaido's clearest lakes.",
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

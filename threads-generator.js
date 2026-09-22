const GENRES = [
  {
    name: "加圧レギンス",
    worry: "脚のむくみ・太もものたるみ",
    product: "加圧レギンス",
    price: "2000円",
    dailyEffort: "はくだけ",
    period: "3日",
    resultGood: "脚が引き締まって見えてむくみも軽くなる",
    altHigh: "月1万円の脚痩せエステ",
    altBadState: "通うのが続かず結局むくみが戻ってる",
    effortHigh: "毎晩脚をマッサージして",
    amazonName: "SHAPEDAYS 着圧スリムレギンス 10分丈",
    amazonUrl: "https://www.amazon.co.jp/dp/B0819NWGP4",
  },
  {
    name: "冷蔵庫消臭剤",
    worry: "冷蔵庫を開けた時のニオイ移り",
    product: "冷蔵庫消臭剤",
    price: "800円",
    dailyEffort: "置いておくだけ",
    period: "1週間",
    resultGood: "ドアを開けてもニオイ移りが気にならない",
    altHigh: "1万円のニオイ対策付き冷蔵庫",
    altBadState: "買い替えても野菜室だけ結局臭う",
    effortHigh: "毎週庫内を重曹水で拭き掃除して",
    amazonName: "脱臭炭 冷蔵庫用 大型脱臭剤 240g",
    amazonUrl: "https://www.amazon.co.jp/dp/B000FQMJZI",
  },
  {
    name: "USBネッククーラー",
    worry: "夏の通勤・通学中の首元の暑さ",
    product: "USBネッククーラー",
    price: "4000円",
    dailyEffort: "首にかけるだけ",
    period: "1回",
    resultGood: "首元がすぐ冷えて汗だくにならず涼しい",
    altHigh: "月5000円のタクシー通勤",
    altBadState: "利用しても玄関を出た瞬間暑くなる",
    effortHigh: "保冷剤をタオルで巻いて首に当てて",
    amazonName: "Koizumi KNC-0511/C ネッククーラー",
    amazonUrl: "https://www.amazon.co.jp/dp/B0923HZJTL",
  },
  {
    name: "かかとケア靴下",
    worry: "かかとの角質・ひび割れ",
    product: "かかとケア靴下",
    price: "900円",
    dailyEffort: "寝る前にはくだけ",
    period: "1週間",
    resultGood: "かかとがつるつるになってひび割れが消える",
    altHigh: "5000円のフットケアサロン",
    altBadState: "通うのが続かず結局角質が戻ってる",
    effortHigh: "毎晩かかとやすりでゴシゴシ削って",
    amazonName: "かかと角質ケアソックス 保湿 ひび割れ対策",
    amazonUrl: "https://www.amazon.co.jp/dp/B0BH4CW87W",
  },
  {
    name: "光目覚まし時計",
    worry: "朝どうしても起きられない",
    product: "光目覚まし時計",
    price: "5000円",
    dailyEffort: "セットして寝るだけ",
    period: "3日",
    resultGood: "日の出みたいな光で自然にスッキリ起きる",
    altHigh: "月3000円のモーニングコール",
    altBadState: "鳴っても止めてまた二度寝してる",
    effortHigh: "毎朝アラームを何個もセットして",
    amazonName: "光目覚まし時計 日出＆日没再現 RGBライト",
    amazonUrl: "https://www.amazon.co.jp/dp/B0BM9C1SBH",
  },
  {
    name: "米びつ防虫剤",
    worry: "お米に虫がわく心配",
    product: "米びつ防虫剤",
    price: "500円",
    dailyEffort: "米びつに入れておくだけ",
    period: "1週間",
    resultGood: "虫がわかず半年間お米を安心して保存できる",
    altHigh: "1万円の真空パック保存容器",
    altBadState: "買っても結局梅雨時期に虫がわいてる",
    effortHigh: "毎回お米を小分けにして冷蔵庫で保存して",
    amazonName: "米唐番 米びつ用防虫剤 10kgタイプ",
    amazonUrl: "https://www.amazon.co.jp/dp/B01E4U2IQA",
  },
  {
    name: "音波電動歯ブラシ",
    worry: "歯磨き後も気になる歯垢残り",
    product: "音波電動歯ブラシ",
    price: "3000円",
    dailyEffort: "いつも通り磨くだけ",
    period: "1週間",
    resultGood: "歯がツルツルになって歯垢残りが気にならない",
    altHigh: "1万円の歯科クリーニング",
    altBadState: "通うのが続かず結局歯垢が溜まってる",
    effortHigh: "毎回時間をかけて手磨きを頑張って",
    amazonName: "SOLADEY RHYTHM 2 電動歯ブラシ 音波振動",
    amazonUrl: "https://www.amazon.co.jp/dp/B0CD1L84W7",
  },
  {
    name: "ワイヤレス充電器",
    worry: "寝る前のケーブル抜き差しの手間",
    product: "ワイヤレス充電器",
    price: "2000円",
    dailyEffort: "置くだけ",
    period: "1回",
    resultGood: "置くだけで充電できて楽になる",
    altHigh: "1万円のハイスペックスマホ",
    altBadState: "買い替えてもケーブルを挿す手間は同じ",
    effortHigh: "毎晩ケーブルの断線を確認しながら挿して",
    amazonName: "Elecom ワイヤレス充電器 卓上スタンド",
    amazonUrl: "https://www.amazon.co.jp/dp/B08294RJDC",
  },
  {
    name: "抱き枕",
    worry: "横向き寝での肩や腰への負担",
    product: "抱き枕",
    price: "3000円",
    dailyEffort: "抱えて寝るだけ",
    period: "3日",
    resultGood: "肩や腰の負担が減って朝までぐっすり眠る",
    altHigh: "5万円の高反発マットレス",
    altBadState: "買い替えても横向きだと肩が痛いまま",
    effortHigh: "毎晩クッションを何個も重ねて調整して",
    amazonName: "快眠抱き枕 肩こり首こり 高さ調整できる",
    amazonUrl: "https://www.amazon.co.jp/dp/B0D8YXRGT9",
  },
  {
    name: "虫除けブレスレット",
    worry: "アウトドアでの蚊刺され",
    product: "虫除けブレスレット",
    price: "1500円",
    dailyEffort: "つけておくだけ",
    period: "1回",
    resultGood: "腕につけておくだけで蚊が寄ってこない",
    altHigh: "3000円の虫除けスプレー習慣",
    altBadState: "塗っても汗で流れて結局刺されてる",
    effortHigh: "外出のたびにスプレーを塗り直して",
    amazonName: "DesertWest 虫除けブレスレット 効果200日持続",
    amazonUrl: "https://www.amazon.co.jp/dp/B0B1H549ZG",
  },
];

const PATTERNS = [
  {
    key: "A",
    title: "パターンA｜価格ギャップ重視型",
    scoreRange: { hook: [17, 19], concrete: [18, 20], contrarian: [15, 18], empathy: [15, 18], comment: [15, 18] },
    reasons: ["価格差のインパクトで保存を誘発するため", "コスパ訴求が当事者に刺さりやすいため"],
    build(g) {
      const l1 = `${g.worry}に悩んでる人、${g.product}使った方がいいよ。`;
      const rest =
        `だって、${g.price}なのに${g.dailyEffort}で${g.period}後には${g.resultGood}って` +
        `マジでやばくない🥹${g.altHigh}使ってるのに${g.altBadState}人絶対試して。` +
        `高いお金払って変化ないより、${g.price}でちゃんと結果出る方が良くない？🥹`;
      return `${l1}\n${rest}`;
    },
  },
  {
    key: "B",
    title: "パターンB｜時短・手軽さ重視型",
    scoreRange: { hook: [15, 18], concrete: [16, 19], contrarian: [13, 16], empathy: [17, 19], comment: [15, 18] },
    reasons: ["時短の実感が刺さり共有されやすいため", "手軽さ訴求で忙しい層に刺さるため"],
    build(g) {
      const l1 = `${g.worry}に時間かけたくない人、${g.product}使った方がいい。`;
      const rest =
        `だって、${g.dailyEffort}足すだけで${g.period}後には${g.resultGood}って` +
        `忙しい人ほどマジで助かるやつ🥹${g.effortHigh}頑張ってるのに効果続かない人絶対試して。` +
        `手間かけて一時的に変わるより、${g.dailyEffort}で自然にキープできる方が良くない？🥹`;
      return `${l1}\n${rest}`;
    },
  },
  {
    key: "C",
    title: "パターンC｜逆張り・共感重視型",
    scoreRange: { hook: [17, 19], concrete: [16, 19], contrarian: [18, 20], empathy: [17, 19], comment: [16, 19] },
    reasons: ["高額勢を名指しし共感と反論を誘発するため", "逆張り視点でコメントを誘発しやすいため"],
    build(g) {
      const l1 = `${g.worry}、実は${g.altHigh}使ってる人ほど気づいてない落とし穴があるらしい。`;
      const rest =
        `だって、値段より続けられるかが大事で${g.price}の${g.product}でも${g.period}継続したら` +
        `${g.resultGood}って🥹${g.altHigh}買って満足しただけで${g.altBadState}人絶対試して。` +
        `値段の高さで安心するより、ちゃんと使い切って効果出す方が良くない？🥹`;
      return `${l1}\n${rest}`;
    },
  },
];

const SCORE_LABELS = [
  ["hook", "フック力"],
  ["concrete", "具体性"],
  ["contrarian", "逆張り強度"],
  ["empathy", "共感性"],
  ["comment", "コメント誘発力"],
];

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
    return { pattern, body, scores, total, reason, charCount: body.replace(/\n/g, "").length };
  });
}

function formatRound(results) {
  const divider = "━━━━━━━━━━━━━━━";
  const blocks = results.map(({ pattern, body, scores, total }) => {
    const scoreLines = SCORE_LABELS.map(([key, label]) => `・${label}：${scores[key]}/20`).join("\n");
    return `${divider}\n【${pattern.title}】\n伸びる確率：${total}％\n\n${body}\n\n採点内訳：\n${scoreLines}`;
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

  genreLabelEl.textContent = `今日のジャンル：${genre.name}`;
  productInfoEl.textContent = "";
  const linkLabel = document.createElement("span");
  linkLabel.textContent = "紹介商品：";
  const link = document.createElement("a");
  link.href = genre.amazonUrl;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = genre.amazonName;
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

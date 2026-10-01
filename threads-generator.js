const GENRES = [
  {
    name: "電動爪やすり",
    worry: "爪切り後の角が引っかかる",
    product: "電動爪やすり",
    price: "2,000円",
    dailyEffort: "爪先に当てて滑らせるだけ",
    period: "1回",
    resultGood: "爪の角が滑らかに整う",
    altHigh: "4,000円のネイルサロン",
    altBadState: "通っても自宅では結局引っかかる",
    effortHigh: "紙やすりで一本ずつ爪を整えて",
    amazonName: "TOUCHBeauty 電動爪やすり TB-1738",
    amazonUrl: "https://www.amazon.co.jp/TOUCHBeauty-%E9%9B%BB%E5%8B%95%E3%83%8D%E3%82%A4%E3%83%AB%E3%82%B1%E3%82%A2-%E3%83%8D%E3%82%A4%E3%83%AB%E3%82%B1%E3%82%A2%E3%82%BB%E3%83%83%E3%83%88-6%E6%AE%B5%E9%9A%8E%E9%80%9F%E5%BA%A6%E8%AA%BF%E6%95%B4-TB-1738/dp/B097YB8BDW",
  },
  {
    name: "ポータブルIHクッキングヒーター",
    worry: "一人暮らしでコンロが足りない",
    product: "ポータブルIHクッキングヒーター",
    price: "4,000円",
    dailyEffort: "置いてスイッチを入れるだけ",
    period: "1日",
    resultGood: "もう一品同時に調理できる",
    altHigh: "10万円のリフォーム",
    altBadState: "しても結局コンロの数は変わらない",
    effortHigh: "鍋を一つずつ順番に使い回して",
    amazonName: "Amazon Basics 卓上IHクッキングヒーター",
    amazonUrl: "https://www.amazon.co.jp/Amazon%E3%83%99%E3%83%BC%E3%82%B7%E3%83%83%E3%82%AF-%E5%8D%93%E4%B8%8AIH%E3%82%AF%E3%83%83%E3%82%AD%E3%83%B3%E3%82%B0%E3%83%92%E3%83%BC%E3%82%BF%E3%83%BC-IH%E3%82%B3%E3%83%B3%E3%83%AD-%E3%83%9E%E3%82%B0%E3%83%8D%E3%83%83%E3%83%88%E3%83%97%E3%83%A9%E3%82%B0%E5%BC%8F-%E3%83%96%E3%83%A9%E3%83%83%E3%82%AF35/dp/B09QD1FC5M",
  },
  {
    name: "メイクスポンジクリーナー",
    worry: "メイクスポンジがいつも汚れたまま",
    product: "メイクスポンジクリーナー",
    price: "2,500円",
    dailyEffort: "水を入れてスポンジを浸けるだけ",
    period: "1回",
    resultGood: "数十秒でファンデの汚れが落ちる",
    altHigh: "3,000円の新しいスポンジ",
    altBadState: "買い替えても結局すぐ汚れる",
    effortHigh: "手で何度も揉み洗いして",
    amazonName: "自動メイクブラシ&スポンジ洗浄機",
    amazonUrl: "https://www.amazon.co.jp/%E8%87%AA%E5%8B%95%E3%83%A1%E3%82%A4%E3%82%AF%E3%83%96%E3%83%A9%E3%82%B7%E6%B4%97%E6%B5%84%E6%A9%9F%E3%80%81%E3%83%A1%E3%82%A4%E3%82%AF%E3%83%96%E3%83%A9%E3%82%B7%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%8A%E3%83%BC%E3%83%9E%E3%82%B7%E3%83%B3-USB-%E5%8C%96%E7%B2%A7%E3%83%96%E3%83%A9%E3%82%B7%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%8A%E3%83%BC%E8%87%AA%E5%8B%95%E3%83%96%E3%83%A9%E3%82%B7%E9%80%9F%E4%B9%BE%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%8B%E3%83%B3%E3%82%B0-IP65%E3%81%AF%E3%83%96%E3%83%A9%E3%82%B7%E3%81%AE%E3%81%9F%E3%82%81%E3%81%AE7000/dp/B0DHLJ4YP8",
  },
  {
    name: "温感美顔スチーマー",
    worry: "毛穴の黒ずみが気になる",
    product: "温感美顔スチーマー",
    price: "5,000円",
    dailyEffort: "顔に蒸気を当てるだけ",
    period: "1回",
    resultGood: "毛穴が開いて汚れが浮き出る",
    altHigh: "6,000円のエステ毛穴ケア",
    altBadState: "通っても自宅ではまた黒ずむ",
    effortHigh: "蒸しタオルを何度も電子レンジで温めて",
    amazonName: "ANLAN フェイススチーマー",
    amazonUrl: "https://www.amazon.co.jp/ANLAN-%E3%83%95%E3%82%A7%E3%82%A4%E3%82%B9%E3%82%B9%E3%83%81%E3%83%BC%E3%83%9E%E3%83%BC-%E6%BF%83%E5%AF%86%E3%83%8A%E3%83%8E%E3%83%9F%E3%82%B9%E3%83%88-%E3%83%8E%E3%82%BA%E3%83%AB%E8%AA%BF%E7%AF%80%E5%8F%AF%E8%83%BD-%E6%AF%9B%E7%A9%B4%E3%82%B1%E3%82%A2%E3%82%B9%E3%83%81%E3%83%BC%E3%83%9E%E3%83%BC/dp/B0BHSL23LS",
  },
  {
    name: "自転車用セーフティライト",
    worry: "夜の自転車で車に気づかれているか不安",
    product: "自転車用セーフティライト",
    price: "1,800円",
    dailyEffort: "取り付けてスイッチを入れるだけ",
    period: "1回",
    resultGood: "後ろの車に気づいてもらえる",
    altHigh: "3,000円の反射ベスト",
    altBadState: "着ても結局暗い道では見えにくい",
    effortHigh: "毎回電池式ライトの電池を交換して",
    amazonName: "OLIGHT SEEMEE 30C セーフティライト",
    amazonUrl: "https://www.amazon.co.jp/OLIGHT-%E3%82%AA%E3%83%BC%E3%83%A9%E3%82%A4%E3%83%88-SEEMEE30-%E3%82%BB%E3%83%BC%E3%83%95%E3%83%86%E3%82%A3%E3%83%A9%E3%82%A4%E3%83%88-40%E6%99%82%E9%96%93%E6%8C%81%E7%B6%9A%E7%82%B9%E7%81%AF/dp/B08G1GBWW4",
  },
  {
    name: "ペット用ステップ",
    worry: "ソファに飛び乗って足腰を痛めそうな愛犬",
    product: "ペット用ステップ",
    price: "4,000円",
    dailyEffort: "ソファの横に置くだけ",
    period: "1日",
    resultGood: "段差を無理なく上り下りできる",
    altHigh: "2万円の動物病院の診察",
    altBadState: "通っても結局無理な飛び乗りは続く",
    effortHigh: "飛び乗るたびに抱えて持ち上げて",
    amazonName: "PetStyle ドッグステップ 2段",
    amazonUrl: "https://www.amazon.co.jp/PetStyle-%E3%83%89%E3%83%83%E3%82%B0%E3%82%B9%E3%83%86%E3%83%83%E3%83%97-PU%E3%83%AC%E3%82%B6%E3%83%BC-%E3%82%B9%E3%83%86%E3%83%83%E3%83%97-%E3%83%8F%E3%83%BC%E3%83%89%E3%82%BF%E3%82%A4%E3%83%97/dp/B088FLK1KS",
  },
  {
    name: "布団乾燥機",
    worry: "布団がジメジメしてダニが気になる",
    product: "布団乾燥機",
    price: "6,000円",
    dailyEffort: "ホースを差し込んでスイッチを入れるだけ",
    period: "1回",
    resultGood: "布団がふかふかで暖かく仕上がる",
    altHigh: "3,000円のコインランドリー",
    altBadState: "行っても結局布団までは乾かせない",
    effortHigh: "天気の良い日を選んで布団を外に干して",
    amazonName: "山善 布団乾燥機 ZFD-Y500",
    amazonUrl: "https://www.amazon.co.jp/%E5%B1%B1%E5%96%84-%E5%B8%83%E5%9B%A3%E4%B9%BE%E7%87%A5%E6%A9%9F-%E6%A8%AA%E7%BD%AE%E3%81%8D%E5%AF%BE%E5%BF%9C-%E3%81%8F%E3%81%A4%E4%B9%BE%E7%87%A5%E3%82%A2%E3%82%BF%E3%83%83%E3%83%81%E3%83%A1%E3%83%B3%E3%83%88%E4%BB%98-ZFD-Y500/dp/B01N8QB3B8",
  },
  {
    name: "シリコン製保存袋",
    worry: "使い捨てのジップ袋がすぐなくなる",
    product: "シリコン製保存袋",
    price: "2,000円",
    dailyEffort: "洗ってそのまま繰り返し使うだけ",
    period: "1週間",
    resultGood: "ゴミも出さずに食品を保存できる",
    altHigh: "500円のジップ袋箱買い",
    altBadState: "買っても結局毎回ゴミが増える",
    effortHigh: "使うたびに新しい袋を開けて",
    amazonName: "ZIP OWL シリコン保存バッグ",
    amazonUrl: "https://www.amazon.co.jp/%E3%82%B7%E3%83%AA%E3%82%B3%E3%83%B3%E3%83%90%E3%83%83%E3%82%B0-%E3%82%B7%E3%83%AA%E3%82%B3%E3%83%BC%E3%83%B3%E3%83%90%E3%83%83%E3%82%B0-%E7%B9%B0%E3%82%8A%E8%BF%94%E3%81%97%E4%BD%BF%E3%81%88%E3%82%8B%E3%82%B7%E3%83%AA%E3%82%B3%E3%83%B3%E4%BF%9D%E5%AD%98%E3%83%90%E3%83%83%E3%82%B0-%E3%82%B8%E3%83%83%E3%83%97%E3%82%AA%E3%82%A6%E3%83%AB-1000ml/dp/B09VTJDQF1",
  },
  {
    name: "折りたたみヨガマット",
    worry: "床が硬くてストレッチが続かない",
    product: "折りたたみヨガマット",
    price: "2,500円",
    dailyEffort: "広げてその上でストレッチするだけ",
    period: "1回",
    resultGood: "体が痛くならず集中して続けられる",
    altHigh: "8,000円のヨガ教室",
    altBadState: "通っても自宅では結局続かない",
    effortHigh: "バスタオルを床に敷いて代用して",
    amazonName: "WeMe 折りたたみヨガマット",
    amazonUrl: "https://www.amazon.co.jp/2023%E6%96%B0%E7%89%88-%EF%BC%B7%EF%BD%85%EF%BC%AD%EF%BD%85-%E3%83%88%E3%83%AC%E3%83%BC%E3%83%8B%E3%83%B3%E3%82%B0%E3%83%9E%E3%83%83%E3%83%88-%E3%82%A8%E3%82%AF%E3%82%B5%E3%82%B5%E3%82%A4%E3%82%BA%E3%83%9E%E3%83%83%E3%83%88-%E3%83%94%E3%83%A9%E3%83%86%E3%82%A3%E3%82%B9%E3%83%9E%E3%83%83%E3%83%88/dp/B0BF4SY6N9",
  },
  {
    name: "ベビーモニター",
    worry: "別室で寝てる赤ちゃんの様子が気になる",
    product: "ベビーモニター",
    price: "5,000円",
    dailyEffort: "設置してモニターを見るだけ",
    period: "1晩",
    resultGood: "様子がすぐ分かって安心して家事ができる",
    altHigh: "1万円のベビーシッター",
    altBadState: "頼んでも結局気になって見に行ってしまう",
    effortHigh: "数分おきに様子を見に部屋へ通って",
    amazonName: "BabyGoo ベビーモニター 見守りカメラ",
    amazonUrl: "https://www.amazon.co.jp/BabyGoo-%E3%83%99%E3%83%93%E3%83%BC%E3%83%A2%E3%83%8B%E3%82%BF%E3%83%BC-%E8%A6%8B%E5%AE%88%E3%82%8A%E3%82%AB%E3%83%A1%E3%83%A9-5%E3%82%A4%E3%83%B3%E3%83%81%E5%A4%A7%E7%94%BB%E9%9D%A2-%E3%82%B9%E3%83%9E%E3%83%9B%E9%80%A3%E6%90%BA%E5%AF%BE%E5%BF%9C%E3%83%A2%E3%83%87%E3%83%AB/dp/B0G1YSFWH4",
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

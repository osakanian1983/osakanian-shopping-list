const GENRES = [
  {
    name: "美容・毛穴ケア",
    worry: "毛穴の開き",
    product: "THE ORDINARY美容液",
    price: "1500円",
    dailyEffort: "1日30秒",
    period: "1ヶ月",
    resultGood: "毛穴目立たなくなって毛穴落ちも化粧崩れも減る",
    altHigh: "デパコスの3万円美容液",
    altBadState: "全然変わらないままずっと放置してる",
    effortHigh: "週1回の毛穴パックに30分かけて",
    amazonName: "THE ORDINARY ナイアシンアミド10% + Z1 フェイスセラム",
    amazonUrl: "https://www.amazon.co.jp/dp/B01MDTVZTZ",
  },
  {
    name: "ダイエット・二の腕",
    worry: "二の腕のたるみ",
    product: "着圧二の腕シェイパー",
    price: "2000円",
    dailyEffort: "1日5分",
    period: "2週間",
    resultGood: "二の腕が引き締まって薄着が怖くなくなる",
    altHigh: "月1万円のパーソナルジム",
    altBadState: "通うのが続かず結局リバウンドしてる",
    effortHigh: "毎日筋トレメニューを1時間こなして",
    amazonName: "二の腕スリム 二の腕シェイパー 着圧インナー",
    amazonUrl: "https://www.amazon.co.jp/dp/B08H259LWN",
  },
  {
    name: "時短家電・食洗機",
    worry: "食後の洗い物",
    product: "パナソニック食洗機",
    price: "3万円",
    dailyEffort: "1回3分",
    period: "1週間",
    resultGood: "洗い物ゼロになって自分の自由時間がぐっと増える",
    altHigh: "高額な工事付きビルトイン食洗機",
    altBadState: "費用の高さで導入を諦めてる",
    effortHigh: "毎晩30分かけて手洗いして",
    amazonName: "パナソニック 食器洗い乾燥機 NP-TSP1-W（工事不要・賃貸対応）",
    amazonUrl: "https://www.amazon.co.jp/dp/B09G2L8C4Z",
  },
  {
    name: "収納・片付け",
    worry: "すぐ散らかる部屋",
    product: "引き出し仕切り収納ボックス",
    price: "500円",
    dailyEffort: "1日1分",
    period: "3日",
    resultGood: "引き出しの中がいつまでもキレイなままをキープできる",
    altHigh: "高級な造作収納家具",
    altBadState: "買っても結局ぐちゃぐちゃに戻ってる",
    effortHigh: "週末に2時間かけて整理整頓して",
    amazonName: "引き出し仕切り収納ボックス 整理収納ケース 4点セット",
    amazonUrl: "https://www.amazon.co.jp/dp/B09TL51386",
  },
  {
    name: "白髪ケア",
    worry: "生え際の白髪",
    product: "サロンドプロ白髪かくし",
    price: "1200円",
    dailyEffort: "1回1分",
    period: "3日",
    resultGood: "白髪が目立たなくなって美容院代も浮く",
    altHigh: "1万円する美容院の白髪染め",
    altBadState: "予約と費用がネックで放置してる",
    effortHigh: "月1で美容院に2時間かけて通って",
    amazonName: "サロンドプロ カラーワンタッチ 白髪かくしEX ダークブラウン",
    amazonUrl: "https://www.amazon.co.jp/dp/B001F7BE1Q",
  },
  {
    name: "冷え性・着圧ソックス",
    worry: "夜の足の冷え",
    product: "メディキュット温活ソックス",
    price: "800円",
    dailyEffort: "寝る前5秒",
    period: "3日",
    resultGood: "足先ポカポカで朝のむくみも取れる",
    altHigh: "1万円超えの遠赤外線グッズ",
    altBadState: "高いの買ったのに冷え全然改善しない",
    effortHigh: "毎晩脚マッサージに20分かけて",
    amazonName: "メディキュット 足あったか温活ソックス",
    amazonUrl: "https://www.amazon.co.jp/dp/B074FZNS9B",
  },
  {
    name: "離乳食・子育て",
    worry: "離乳食作りの手間",
    product: "リッチェル冷凍ブロックトレー",
    price: "300円",
    dailyEffort: "レンジ30秒",
    period: "3日",
    resultGood: "チンするだけで栄養バランスまで整う",
    altHigh: "月1万円の高級ベビーフード宅配",
    altBadState: "払っても品切れで結局困ってる",
    effortHigh: "毎日1時間かけて離乳食を手作りして",
    amazonName: "リッチェル わけわけフリージング ブロックトレー",
    amazonUrl: "https://www.amazon.co.jp/dp/B00811TF88",
  },
  {
    name: "肩こり・デスクワーク",
    worry: "慢性的な肩こり",
    product: "アテックスくびレッチ",
    price: "3000円",
    dailyEffort: "1日10分",
    period: "3日",
    resultGood: "肩が軽くなって頭痛も肩こりも気にならなくなる",
    altHigh: "月1万円の整体通い",
    altBadState: "通っても数日で元通りになってる",
    effortHigh: "週末に整体へ1時間かけて通って",
    amazonName: "アテックス ネックマッサージピロー くびレッチ AX-HJ186gr",
    amazonUrl: "https://www.amazon.co.jp/dp/B0GVHRR8RB",
  },
  {
    name: "猫トイレ・ペット用品",
    worry: "猫トイレの掃除",
    product: "ライオン猫砂ニオイをとる砂",
    price: "1000円",
    dailyEffort: "1日30秒",
    period: "3日",
    resultGood: "部屋の臭いがまったく気にならなくなる",
    altHigh: "5万円する自動猫トイレ",
    altBadState: "買ったのに詰まって結局手動で掃除してる",
    effortHigh: "毎日3回トイレ掃除に時間をかけて",
    amazonName: "ライオン ニオイをとる砂 猫砂 5.5L×4袋",
    amazonUrl: "https://www.amazon.co.jp/dp/B07YV55TNL",
  },
  {
    name: "家計管理・貯金",
    worry: "なかなか貯まらない貯金",
    product: "家計簿Dr.Wallet",
    price: "月500円",
    dailyEffort: "1日1分",
    period: "1ヶ月",
    resultGood: "使途不明金が減って自然とお金が貯まる",
    altHigh: "数万円かかるFP相談",
    altBadState: "お金払って結局続けられてない",
    effortHigh: "毎晩レシートを手入力して家計簿をつけて",
    amazonName: "家計簿Dr.Wallet（レシート撮影で自動家計簿）",
    amazonUrl: "https://www.amazon.co.jp/dp/B00J05J7M8",
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

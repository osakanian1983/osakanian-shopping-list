const GENRES = [
  {
    name: "加重ブランケット",
    worry: "布団に入ってもなかなか寝付けない不安感",
    product: "加重ブランケット",
    price: "5000円",
    dailyEffort: "いつもの布団の上にかけるだけ",
    period: "3日",
    resultGood: "心地よい重みで自然と入眠しやすくなる",
    altHigh: "3万円の睡眠外来",
    altBadState: "通っても結局ベッドで目が冴えたまま",
    effortHigh: "毎晩羊を何百匹も数えて",
    amazonName: "tobest ウェイトブランケット 加重ブランケット",
    amazonUrl: "https://www.amazon.co.jp/tobest-%E3%83%88%E3%82%A5%E3%83%BC%E3%83%99%E3%82%B9%E3%83%88-%E3%82%A6%E3%82%A7%E3%82%A4%E3%83%88%E3%83%96%E3%83%A9%E3%83%B3%E3%82%B1%E3%83%83%E3%83%88-%E5%8A%A0%E9%87%8D%E3%83%96%E3%83%A9%E3%83%B3%E3%82%B1%E3%83%83%E3%83%88-140x190cm/dp/B0829XZ6L9",
  },
  {
    name: "自転車用スマホホルダー",
    worry: "自転車で地図を確認する時のスマホ操作の危なさ",
    product: "自転車用スマホホルダー",
    price: "2000円",
    dailyEffort: "ハンドルに取り付けるだけ",
    period: "1回",
    resultGood: "画面を見るだけで安全に道順を確認できる",
    altHigh: "3万円の電動自転車",
    altBadState: "買い替えても片手でスマホを見てる",
    effortHigh: "信号待ちのたびにポケットからスマホを出して",
    amazonName: "Lamicall クイック取付 自転車スマホホルダー",
    amazonUrl: "https://www.amazon.co.jp/%E3%80%902025%E6%96%B0%E7%89%88%E3%83%BB%E3%82%AB%E3%83%A1%E3%83%A9%E9%82%AA%E9%AD%94%E3%81%AA%E3%82%89%E3%81%AA%E3%81%84%E3%80%91-Lamicall-%E3%82%AF%E3%82%A4%E3%83%83%E3%82%AF%E5%8F%96%E4%BB%98-%E8%87%AA%E8%BB%A2%E8%BB%8A-%E3%82%B9%E3%83%9E%E3%83%9B%E3%83%9B%E3%83%AB%E3%83%80%E3%83%BC/dp/B0DRVH3LMH",
  },
  {
    name: "トイレブラシ収納ケースセット",
    worry: "トイレブラシの汚れが気になる悩み",
    product: "トイレブラシ収納ケース",
    price: "1000円",
    dailyEffort: "使ったらケースに戻すだけ",
    period: "1回",
    resultGood: "ブラシが隠れて見た目もトイレが清潔に見える",
    altHigh: "5000円のクリーニング",
    altBadState: "頼んでもブラシは汚れたまま",
    effortHigh: "毎回使い捨てシートで便器を丁寧に拭いて",
    amazonName: "オーエ トイレブラシ ケース付き",
    amazonUrl: "https://www.amazon.co.jp/%E3%82%AA%E3%83%BC%E3%82%A8-Ohe-%E3%83%88%E3%82%A4%E3%83%AC%E3%83%96%E3%83%A9%E3%82%B7-%E3%83%9B%E3%83%AF%E3%82%A4%E3%83%88-%E7%B4%84%E5%B9%8541%C3%97%E5%A5%A5%E8%A1%8C17%C3%97%E9%AB%98%E3%81%9512-7cm/dp/B07KF7BZFP",
  },
  {
    name: "スタンディングデスクマット",
    worry: "立ち仕事中の足の裏や腰の疲れ",
    product: "スタンディングデスクマット",
    price: "3000円",
    dailyEffort: "マットの上に立つだけ",
    period: "1日",
    resultGood: "長時間立っていても足腰の疲れを感じにくい",
    altHigh: "10万円の昇降デスク",
    altBadState: "導入しても結局夕方には足腰が痛む",
    effortHigh: "1時間おきに座って休憩を挟んで",
    amazonName: "サンワダイレクト 疲労軽減マット",
    amazonUrl: "https://www.amazon.co.jp/%E3%82%B5%E3%83%B3%E3%83%AF%E3%83%80%E3%82%A4%E3%83%AC%E3%82%AF%E3%83%88-%E7%96%B2%E5%8A%B4%E8%BB%BD%E6%B8%9B%E3%83%9E%E3%83%83%E3%83%88-%E3%82%B9%E3%82%BF%E3%83%B3%E3%83%87%E3%82%A3%E3%83%B3%E3%82%B0%E3%83%87%E3%82%B9%E3%82%AF-100-MAT009/dp/B01IQFVNT2",
  },
  {
    name: "ペットドライヤー",
    worry: "お風呂上がりの愛犬・愛猫のドライヤーの大変さ",
    product: "ペットドライヤー",
    price: "4000円",
    dailyEffort: "体に風を当てるだけ",
    period: "1回",
    resultGood: "数分で毛の中までしっかり乾いてくれる",
    altHigh: "5000円のサロン",
    altBadState: "通っても自宅では結局生乾きのまま",
    effortHigh: "毎回タオルで30分以上こすって乾かして",
    amazonName: "XKISS ペットドライヤー 4つのノズル付き",
    amazonUrl: "https://www.amazon.co.jp/XKISS-%E3%83%9A%E3%83%83%E3%83%88%E3%83%89%E3%83%A9%E3%82%A4%E3%83%A4%E3%83%BC-%E3%83%9A%E3%83%83%E3%83%88%E7%94%A8%E3%83%89%E3%83%A9%E3%82%A4%E3%83%A4%E3%83%BC-4%E3%81%A4%E3%81%AE%E3%83%8E%E3%82%BA%E3%83%AB%E4%BB%98%E3%81%8D-%E9%A2%A8%E9%80%9F%E3%80%81%E6%B8%A9%E5%BA%A6%E8%AA%BF%E6%95%B4%E5%8F%AF%E8%83%BD/dp/B0BGBMD8B7",
  },
  {
    name: "折りたたみショッピングカート",
    worry: "買い物帰りの重い荷物で腕が痛くなる",
    product: "折りたたみカート",
    price: "3000円",
    dailyEffort: "荷物を乗せて引くだけ",
    period: "1回",
    resultGood: "重い荷物でも腕が痛くならず楽に持ち帰れる",
    altHigh: "3000円の宅配",
    altBadState: "利用しても結局まとめ買いの日は荷物が重い",
    effortHigh: "毎回両手いっぱいに袋を提げて歩いて",
    amazonName: "Neping 折りたたみショッピングカート",
    amazonUrl: "https://www.amazon.co.jp/%E3%82%B7%E3%83%A7%E3%83%83%E3%83%94%E3%83%B3%E3%82%B0%E3%82%AB%E3%83%BC%E3%83%88-%E3%83%AA%E3%83%BC%E4%BB%98%E3%81%8D%E3%82%A8%E3%82%B3%E3%83%90%E3%83%83%E3%82%B0-%E3%82%AD%E3%83%A3%E3%83%AA%E3%82%A2%E3%82%AB%E3%83%BC%E3%83%88-%E5%86%8D%E5%88%A9%E7%94%A8%E5%8F%AF%E8%83%BD%E3%81%AA%E5%BA%83%E3%80%85%E3%81%A8%E3%81%97%E3%81%9F-%E6%8A%98%E3%82%8A%E3%81%9F%E3%81%9F%E3%81%BF%E3%82%AD%E3%83%A3%E3%83%AA%E3%83%BC%E3%82%AB%E3%83%BC%E3%83%88/dp/B0CND5L1XG",
  },
  {
    name: "ワインセーバー真空ポンプ",
    worry: "飲みきれず余ったワインが風味を失う悩み",
    product: "ワインセーバー真空ポンプ",
    price: "1500円",
    dailyEffort: "ポンプでシュポシュポ押すだけ",
    period: "1本",
    resultGood: "数日たっても開けたてに近い風味が続く",
    altHigh: "1万円の小瓶ワイン",
    altBadState: "買っても結局銘柄が少なく物足りない",
    effortHigh: "残ったワインを無理して一気に飲み切って",
    amazonName: "パール金属 ワインセーバー 真空ポンプ&ストッパー",
    amazonUrl: "https://www.amazon.co.jp/%E3%83%91%E3%83%BC%E3%83%AB%E9%87%91%E5%B1%9E-%E3%83%AF%E3%82%A4%E3%83%B3%E3%82%BB%E3%83%BC%E3%83%90%E3%83%BC-%E7%9C%9F%E7%A9%BA%E3%83%9D%E3%83%B3%E3%83%97-%E3%82%B9%E3%83%88%E3%83%83%E3%83%91%E3%83%BC-MK-2709/dp/B0042D85FS",
  },
  {
    name: "防水スマホポーチ",
    worry: "プールや海でスマホを濡らしてしまう心配",
    product: "防水スマホポーチ",
    price: "1500円",
    dailyEffort: "首から下げるだけ",
    period: "1回",
    resultGood: "水辺でも写真や連絡を気にせず楽しめる",
    altHigh: "15万円の防水スマホ",
    altBadState: "買い替えても結局海水で故障が心配で使えない",
    effortHigh: "毎回スマホを車やロッカーに預けに戻って",
    amazonName: "B-TOPAZ スマホポーチ 防水 首掛け",
    amazonUrl: "https://www.amazon.co.jp/%E3%80%90B-TOPAZ%E3%80%91-%E3%82%B7%E3%83%A7%E3%83%AB%E3%83%80%E3%83%BC%E3%83%90%E3%83%83%E3%82%B0-%E3%82%A4%E3%83%A4%E3%83%9B%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%88%E4%BB%98%E3%81%8D-%E3%83%91%E3%82%B9%E3%83%9D%E3%83%BC%E3%83%88%E3%82%B1%E3%83%BC%E3%82%B9-%E3%82%B9%E3%82%AD%E3%83%9F%E3%83%B3%E3%82%B0%E9%98%B2%E6%AD%A2/dp/B099DZ4GX9",
  },
  {
    name: "デスクオーガナイザートレー",
    worry: "机の上に文房具や書類が散らかる悩み",
    product: "デスクオーガナイザートレー",
    price: "1500円",
    dailyEffort: "使った物を定位置に戻すだけ",
    period: "1日",
    resultGood: "机の上が自然と片付いた状態をキープできる",
    altHigh: "5万円の収納棚",
    altBadState: "作っても結局机の上に物が積み上がる",
    effortHigh: "毎晩机の上を1から片付けて",
    amazonName: "ikeem デスクトレー アクリル",
    amazonUrl: "https://www.amazon.co.jp/ikeem-a4%E3%83%87%E3%82%B9%E3%82%AF%E3%83%88%E3%83%AC%E3%83%BC-a4%E3%83%AC%E3%82%BF%E3%83%BC%E3%82%B1%E3%83%BC%E3%82%B9-%E3%83%87%E3%82%B9%E3%82%AF%E3%82%AA%E3%83%BC%E3%82%AC%E3%83%8A%E3%82%A4%E3%82%B6%E3%83%BC-%E4%BA%8B%E5%8B%99%E3%83%BB%E6%9C%BA%E4%B8%8A%E3%81%AE%E6%95%B4%E7%90%86/dp/B0DJVZD5SH",
  },
  {
    name: "USBフットウォーマー",
    worry: "デスクワーク中の足先の冷え",
    product: "USBフットウォーマー",
    price: "2000円",
    dailyEffort: "足を入れてUSBを挿すだけ",
    period: "1回",
    resultGood: "数分で足先までじんわり温まって集中できる",
    altHigh: "3000円の電気ひざ掛け",
    altBadState: "使っても結局足先までは温まらない",
    effortHigh: "靴下を何枚も重ね履きして",
    amazonName: "USB電気足温器 フットウォーマー",
    amazonUrl: "https://www.amazon.co.jp/USB%E9%9B%BB%E6%B0%97%E8%B6%B3%E6%B8%A9%E5%99%A8-%E3%83%95%E3%83%83%E3%83%88%E3%82%A6%E3%82%A9%E3%83%BC%E3%83%9E%E3%83%BC-360%C2%B0%E5%8C%85%E3%81%BF%E8%BE%BC%E3%82%80%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3-USB%E3%83%95%E3%83%83%E3%83%88%E3%82%A6%E3%82%A9%E3%83%BC%E3%83%9E%E3%83%BC-%E3%82%AF%E3%83%83%E3%82%B7%E3%83%A7%E3%83%B3%E5%86%AC%E3%82%AA%E3%83%95%E3%82%A3%E3%82%B9/dp/B0CP5FRVW9",
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

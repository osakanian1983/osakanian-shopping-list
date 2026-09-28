const GENRES = [
  {
    name: "猫砂マット",
    worry: "猫トイレ周りに散らばる猫砂",
    product: "猫砂マット",
    price: "2000円",
    dailyEffort: "猫トイレの前に敷くだけ",
    period: "1週間",
    resultGood: "床への猫砂の飛び散りがほぼなくなる",
    altHigh: "3万円の自動猫トイレ",
    altBadState: "買い替えても結局砂は飛び散ったまま",
    effortHigh: "毎日掃除機とコロコロを床にかけて",
    amazonName: "ITOMTE 猫砂マット 飛び散り防止",
    amazonUrl: "https://www.amazon.co.jp/ITOMTE-%E7%8C%AB%E3%81%AE%E7%A0%82%E5%8F%96%E3%82%8A%E3%83%9E%E3%83%83%E3%83%88-%E9%A3%9B%E3%81%B3%E6%95%A3%E3%82%8A%E9%98%B2%E6%AD%A2%E3%83%9E%E3%83%83%E3%83%88-%E7%8C%AB%E3%81%AE%E3%83%88%E3%82%A4%E3%83%AC%E3%83%9E%E3%83%83%E3%83%88-%E7%B4%8476x58cm/dp/B076Q2W9YK",
  },
  {
    name: "キーボード手首サポーター",
    worry: "デスクワーク中の手首の疲れ",
    product: "キーボード手首サポーター",
    price: "1500円",
    dailyEffort: "キーボードの手前に置くだけ",
    period: "1日",
    resultGood: "手首が疲れにくくタイピングが楽になる",
    altHigh: "3万円のキーボード",
    altBadState: "買い替えても手首の疲れは変わらない",
    effortHigh: "1時間おきに手首をストレッチして",
    amazonName: "Aelfox キーボード手首クッション",
    amazonUrl: "https://www.amazon.co.jp/Aelfox-%E3%82%AD%E3%83%BC%E3%83%9C%E3%83%BC%E3%83%89-%E3%82%AF%E3%83%83%E3%82%B7%E3%83%A7%E3%83%B3-%E3%83%AA%E3%82%B9%E3%83%88%E3%83%AC%E3%82%B9%E3%83%88-%E7%96%B2%E5%8A%B4%E8%BB%BD%E6%B8%9B/dp/B07J4GF9RN",
  },
  {
    name: "旅行用デジタルはかり",
    worry: "空港での荷物の重量オーバーの不安",
    product: "旅行用デジタルはかり",
    price: "1500円",
    dailyEffort: "荷物に引っ掛けて持ち上げるだけ",
    period: "1回",
    resultGood: "家を出る前に正確な重さが分かって安心",
    altHigh: "1万円の超過料金",
    altBadState: "払っても次の旅行で同じ失敗を繰り返す",
    effortHigh: "空港カウンターでその場で荷物を詰め替えて",
    amazonName: "ラゲッジスケール 吊りはかり デジタル",
    amazonUrl: "https://www.amazon.co.jp/%E3%83%A9%E3%82%B2%E3%83%83%E3%82%B8%E3%82%B9%E3%82%B1%E3%83%BC%E3%83%AB-luggage-%E6%90%BA%E5%B8%AF%E5%BC%8F%E3%83%87%E3%82%B8%E3%82%BF%E3%83%AB-%E6%9C%80%E5%A4%A750kg%E3%81%BE%E3%81%A7%E9%87%8F%E3%82%8C%E3%82%8B-%E6%97%A5%E6%9C%AC%E8%AA%9E%E8%AA%AC%E6%98%8E%E6%9B%B8%E4%BB%98%EF%BC%88%E3%82%B7%E3%83%AB%E3%83%90%E3%83%BC%EF%BC%89/dp/B0CFLXNH46",
  },
  {
    name: "マイクロファイバークロスセット",
    worry: "拭いても取れない窓や鏡のくもり",
    product: "マイクロファイバークロス",
    price: "1500円",
    dailyEffort: "水拭きで軽くこするだけ",
    period: "1回",
    resultGood: "洗剤なしでもピカピカに仕上がる",
    altHigh: "3000円のガラスクリーナー",
    altBadState: "使っても結局拭きムラが残る",
    effortHigh: "新聞紙を丸めて何度もこすって",
    amazonName: "Amazon Basics マイクロファイバークロス 24枚",
    amazonUrl: "https://www.amazon.co.jp/Amazon%E3%83%99%E3%83%BC%E3%82%B7%E3%83%83%E3%82%AF-AmazonBasics-CW190423-%E3%83%9E%E3%82%A4%E3%82%AF%E3%83%AD%E3%83%95%E3%82%A1%E3%82%A4%E3%83%90%E3%83%BC-%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%8B%E3%83%B3%E3%82%B0%E3%82%AF%E3%83%AD%E3%82%B9/dp/B009FUF6DM",
  },
  {
    name: "爪切りセット飛び散り防止",
    worry: "爪を切るたびに飛び散る爪の破片",
    product: "爪切りセット",
    price: "1500円",
    dailyEffort: "いつも通り切るだけ",
    period: "1回",
    resultGood: "破片が飛び散らず掃除の手間がゼロになる",
    altHigh: "4000円のネイルサロン",
    altBadState: "通っても自宅で切る時は結局飛び散る",
    effortHigh: "切った後に毎回床を掃除機でかけて",
    amazonName: "Riblind 爪切りセット 飛び散り防止 4点",
    amazonUrl: "https://www.amazon.co.jp/Riblind-%E7%88%AA%E5%88%87%E3%82%8A%E3%82%BB%E3%83%83%E3%83%88-%E9%A3%9B%E3%81%B3%E6%95%A3%E3%82%8A%E9%98%B2%E6%AD%A2-%E9%BC%BB%E6%AF%9B%E3%82%AB%E3%83%83%E3%82%BF%E3%83%BC-%E3%83%A4%E3%82%B9%E3%83%AA%E4%BB%98%E3%81%8D/dp/B0DNGPB77X",
  },
  {
    name: "引き出し仕切りケース",
    worry: "引き出しの中で文房具や小物が迷子になる",
    product: "引き出し仕切りケース",
    price: "1500円",
    dailyEffort: "仕切りに入れて戻すだけ",
    period: "1日",
    resultGood: "欲しい物がすぐに見つかるようになる",
    altHigh: "5万円のオーダー家具",
    altBadState: "作っても結局引き出しの中はごちゃごちゃ",
    effortHigh: "毎晩引き出しの中身を全部出して並べ直して",
    amazonName: "引き出し仕切り 整理収納ケース 4点セット",
    amazonUrl: "https://www.amazon.co.jp/%E5%BC%95%E3%81%8D%E5%87%BA%E3%81%97%E4%BB%95%E5%88%87%E3%82%8A-%E5%8F%8E%E7%B4%8D%E3%83%9C%E3%83%83%E3%82%AF%E3%82%B9-%E6%95%B4%E7%90%86%E5%8F%8E%E7%B4%8D%E3%82%B1%E3%83%BC%E3%82%B9-%E8%AA%BF%E6%95%B4%E5%8F%AF%E8%83%BD%E3%81%AA%E4%BB%95%E5%88%87%E3%82%8A-%E8%87%AA%E7%94%B1%E7%B5%84%E3%81%BF%E5%90%88%E3%82%8F%E3%81%9B/dp/B09TL51386",
  },
  {
    name: "折りたたみ水筒",
    worry: "荷物になる水筒を持ち歩く面倒さ",
    product: "折りたたみ水筒",
    price: "1500円",
    dailyEffort: "使い終わったら畳むだけ",
    period: "1回",
    resultGood: "バッグの中がかさばらず身軽に持ち歩ける",
    altHigh: "3000円のペットボトル代",
    altBadState: "買っても結局荷物のかさばりは変わらない",
    effortHigh: "大きい水筒を毎回洗って乾かして",
    amazonName: "YAMOXLS シリコン折りたたみ水筒 600ml",
    amazonUrl: "https://www.amazon.co.jp/YAMOXLS-%E6%8A%98%E3%82%8A%E3%81%9F%E3%81%9F%E3%81%BF-%E3%82%A6%E3%82%A9%E3%83%BC%E3%82%BF%E3%83%BC%E3%83%9C%E3%83%88%E3%83%AB-%E3%82%A6%E3%82%A9%E3%83%BC%E3%82%AD%E3%83%B3%E3%82%B0-%E3%82%B9%E3%83%88%E3%83%A9%E3%83%83%E3%83%97%E6%9C%89%E3%82%8A/dp/B094YMS512",
  },
  {
    name: "テニス肘サポーター",
    worry: "家事や仕事で酷使した肘の痛み",
    product: "テニス肘サポーター",
    price: "1500円",
    dailyEffort: "肘に巻くだけ",
    period: "1週間",
    resultGood: "物を持つ時の肘の痛みが和らぐ",
    altHigh: "1万円の整骨院通い",
    altBadState: "通っても日常生活で結局肘が痛む",
    effortHigh: "毎晩肘を氷で20分冷やして",
    amazonName: "LURE テニス肘サポーター",
    amazonUrl: "https://www.amazon.co.jp/LURE-%E3%83%86%E3%83%8B%E3%82%B9%E8%82%98%E3%82%B5%E3%83%9D%E3%83%BC%E3%82%BF%E3%83%BCA-%E5%A4%A7%E3%83%BB%E5%B0%8F%E3%82%B5%E3%82%A4%E3%82%BA/dp/B0CM9MGSVN",
  },
  {
    name: "タンブラー型ミキサー",
    worry: "朝食代わりのスムージー作りが面倒",
    product: "タンブラー型ミキサー",
    price: "3000円",
    dailyEffort: "材料を入れてボタンを押すだけ",
    period: "1回",
    resultGood: "1分足らずで出来立てスムージーが飲める",
    altHigh: "600円のスムージー店",
    altBadState: "通っても朝は時間がなく寄れない",
    effortHigh: "大きいミキサーを出して洗って片付けて",
    amazonName: "mocoly タンブラー型ミキサー",
    amazonUrl: "https://www.amazon.co.jp/%E3%83%9D%E3%83%BC%E3%82%BF%E3%83%96%E3%83%AB%E3%82%B8%E3%83%A5%E3%83%BC%E3%82%B5%E3%83%BC-1%E4%BA%BA%E7%94%A8%E3%83%9D%E3%83%BC%E3%82%BF%E3%83%96%E3%83%AB%E3%82%B8%E3%83%A5%E3%83%BC%E3%82%B9%E3%83%9E%E3%82%B0-%E3%82%BF%E3%83%B3%E3%83%96%E3%83%A9%E3%83%BC%E5%9E%8B%E3%83%9F%E3%82%AD%E3%82%B5%E3%83%BC-400ml-%E3%83%96%E3%83%AC%E3%83%B3%E3%83%80%E3%83%BC/dp/B0CY2NNXJZ",
  },
  {
    name: "コードレスヘアアイロン",
    worry: "朝の身支度中の髪のうねりやクセ",
    product: "コードレスヘアアイロン",
    price: "3000円",
    dailyEffort: "電源を入れて髪に当てるだけ",
    period: "1回",
    resultGood: "数分でうねりが伸びてまとまりやすくなる",
    altHigh: "5000円の美容室ブロー",
    altBadState: "頼んでも帰宅後には結局うねりが戻る",
    effortHigh: "毎朝ドライヤーで何度もブラシを通して",
    amazonName: "SUPER DREAM コードレスヘアアイロン ミニ",
    amazonUrl: "https://www.amazon.co.jp/%E3%82%B3%E3%83%BC%E3%83%89%E3%83%AC%E3%82%B9%E3%83%98%E3%82%A2%E3%82%A2%E3%82%A4%E3%83%AD%E3%83%B3-%E3%83%9B%E3%83%83%E3%83%88%E3%82%AB%E3%83%BC%E3%83%A9%E3%83%BC-3%E6%AE%B5%E9%9A%8E%E6%B8%A9%E5%BA%A6%E8%AA%BF%E7%AF%80-LED%E9%9B%BB%E9%87%8F%E8%A1%A8%E7%A4%BA-%E5%8F%8E%E7%B4%8D%E3%83%9D%E3%83%BC%E3%83%81%E4%BB%98%E3%81%8D/dp/B082D211TW",
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

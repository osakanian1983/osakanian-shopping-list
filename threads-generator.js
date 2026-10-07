const GENRES = [
  {
    name: "エアーマッサージャー",
    worry: "立ち仕事の後にふくらはぎが張って辛い",
    product: "エアーマッサージャー",
    price: "8,980円",
    dailyEffort: "ふくらはぎに巻いてボタンを押すだけ",
    period: "15分",
    resultGood: "張りがすっと軽くなる",
    altHigh: "8,000円の整体通い",
    altBadState: "通っても結局翌日には張りが戻る",
    effortHigh: "自分の足を何分も揉んで",
    amazonName: "GIKEITIN ふくらはぎケア エアーマッサージャー",
    amazonUrl: "https://www.amazon.co.jp/%E3%81%B5%E3%81%8F%E3%82%89%E3%81%AF%E3%81%8E%E3%83%AA%E3%83%83%E3%83%A9%E3%82%AF%E3%82%B9-%E3%82%B3%E3%83%BC%E3%83%89%E3%83%AC%E3%82%B9USB%E5%85%85%E9%9B%BB%E5%BC%8F-%E8%87%AA%E5%8B%95%E7%9A%84%E3%81%AB%E9%9B%BB%E6%BA%90%E3%82%AA%E3%83%95-%E6%97%A5%E6%9C%AC%E8%AA%9E%E5%8F%96%E6%89%B1%E8%AA%AC%E6%98%8E%E6%9B%B8-GIKEITIN/dp/B0DY1RSPMJ",
  },
  {
    name: "折りたたみベビーベッド",
    worry: "外出先で赤ちゃんを寝かせる場所がない",
    product: "折りたたみベビーベッド",
    price: "10,000円",
    dailyEffort: "広げて赤ちゃんを寝かせるだけ",
    period: "1回",
    resultGood: "どこでも安心して寝かせられる",
    altHigh: "5万円のベビーベッド",
    altBadState: "買っても結局外出先には持って行けない",
    effortHigh: "布団を外出先まで抱えて持ち歩いて",
    amazonName: "Bebamour 折りたたみベビーベッド",
    amazonUrl: "https://www.amazon.co.jp/%E3%80%90%E3%83%99%E3%83%93%E3%83%BC%E3%82%A2%E3%83%A0%E3%83%BC%E3%83%AB%E3%80%91Bebamour-%E3%83%99%E3%83%93%E3%83%BC%E3%83%99%E3%83%83%E3%83%89-%E6%8A%98%E3%82%8A%E3%81%9F%E3%81%9F%E3%81%BF%E5%BC%8F-%E3%83%99%E3%83%83%E3%83%89%E3%82%A4%E3%83%B3%E3%83%99%E3%83%83%E3%83%89-%E6%90%BA%E5%B8%AF%E5%9E%8B%E3%83%99%E3%83%93%E3%83%BC%E3%83%99%E3%83%83%E3%83%89/dp/B07HGZVQ6R",
  },
  {
    name: "USB加熱グローブ",
    worry: "冬の外出で手がかじかんでスマホも使えない",
    product: "USB加熱グローブ",
    price: "8,800円",
    dailyEffort: "充電して着けるだけ",
    period: "1回",
    resultGood: "手先が温かいままスマホも操作できる",
    altHigh: "1万円のコート買い替え",
    altBadState: "買い替えても結局手先だけ冷える",
    effortHigh: "使い捨てカイロを両手に仕込んで",
    amazonName: "電熱グローブ USB給電 ヒーターグローブ",
    amazonUrl: "https://www.amazon.co.jp/%E9%9B%BB%E7%86%B1%E3%82%B0%E3%83%AD%E3%83%BC%E3%83%96-USB%E7%B5%A6%E9%9B%BB-%E3%83%92%E3%83%BC%E3%82%BF%E3%83%BC%E3%82%B0%E3%83%AD%E3%83%BC%E3%83%96-%E5%A4%A7%E5%AE%B9%E9%87%8F%E3%83%90%E3%83%83%E3%83%86%E3%83%AA%E3%83%BC%E4%BB%98%E3%81%8D-3%E6%AE%B5%E9%9A%8E%E6%B8%A9%E5%BA%A6%E8%AA%BF%E6%95%B4/dp/B0CLQZQBX8",
  },
  {
    name: "シリコン製氷皿",
    worry: "製氷皿から氷が取り出しにくくて手間",
    product: "シリコン製氷皿",
    price: "2,000円",
    dailyEffort: "水を入れて凍らせるだけ",
    period: "半日",
    resultGood: "ねじるだけで氷がすぽっと取れる",
    altHigh: "500円のコンビニ氷",
    altBadState: "買っても結局毎回買いに走る",
    effortHigh: "硬い製氷皿を何度もひねって取り出して",
    amazonName: "HNYTLCO シリコン製氷皿 ふた付き",
    amazonUrl: "https://www.amazon.co.jp/-/en/dp/B0C157ZFL4",
  },
  {
    name: "電気フットウォーマー",
    worry: "デスクワーク中に足先だけ冷えて辛い",
    product: "電気フットウォーマー",
    price: "5,500円",
    dailyEffort: "足を入れてスイッチを入れるだけ",
    period: "1時間",
    resultGood: "足先までじんわり温まる",
    altHigh: "3万円のデスクヒーター",
    altBadState: "置いても結局足先だけ冷える",
    effortHigh: "靴下を何枚も重ねて履いて",
    amazonName: "歩けるフットウォーマー 電気足温器",
    amazonUrl: "https://www.amazon.co.jp/dp/B0FPX77FKD",
  },
  {
    name: "おしりふきウォーマー",
    worry: "冬の夜に冷たいおしりふきで赤ちゃんが泣く",
    product: "おしりふきウォーマー",
    price: "4,000円",
    dailyEffort: "おしりふきをセットしておくだけ",
    period: "1晩",
    resultGood: "おしりふきが温かく赤ちゃんも泣かない",
    altHigh: "3,000円のおくるみ",
    altBadState: "使っても結局おしりふきは冷たい",
    effortHigh: "おしりふきを手で温めてから使って",
    amazonName: "Combi クイックウォーマー コンパクト",
    amazonUrl: "https://www.amazon.co.jp/-/en/Combi-Quick-Warmer-Compact/dp/B08CF7YWV6",
  },
  {
    name: "卓上空気清浄機",
    worry: "部屋のハウスダストや花粉が気になる",
    product: "卓上空気清浄機",
    price: "9,800円",
    dailyEffort: "デスクに置いて電源を入れるだけ",
    period: "1日",
    resultGood: "部屋の空気がすっきり感じられる",
    altHigh: "30万円の空調リフォーム",
    altBadState: "やっても結局ハウスダストは残る",
    effortHigh: "毎日何度も掃除機をかけて",
    amazonName: "Amazonベーシック 空気清浄機 コンパクト",
    amazonUrl: "https://www.amazon.co.jp/Amazon%E3%83%99%E3%83%BC%E3%82%B7%E3%83%83%E3%82%AF-%E7%A9%BA%E6%B0%97%E6%B8%85%E6%B5%84%E6%A9%9F-%E3%83%8F%E3%82%A6%E3%82%B9%E3%83%80%E3%82%B9%E3%83%88-HEPA-%E3%83%95%E3%82%A3%E3%83%AB%E3%82%BF%E3%83%BC/dp/B0CMXD1XK8",
  },
  {
    name: "ベビー防水シーツ",
    worry: "おねしょで布団を毎回洗うのが大変",
    product: "ベビー防水シーツ",
    price: "1,200円",
    dailyEffort: "布団の上に敷くだけ",
    period: "1晩",
    resultGood: "布団を洗わずそのまま使える",
    altHigh: "3万円の布団買い替え",
    altBadState: "買い替えても結局またすぐ汚れる",
    effortHigh: "濡れた布団を毎回洗って乾かして",
    amazonName: "アンジュスマイル 防水シーツ ベビー小",
    amazonUrl: "https://www.amazon.co.jp/%E3%82%A2%E3%83%B3%E3%82%B8%E3%83%A5%E3%82%B9%E3%83%9E%E3%82%A4%E3%83%AB-%E9%98%B2%E6%B0%B4%E3%82%B7%E3%83%BC%E3%83%84-%E3%81%8A%E3%81%AD%E3%81%97%E3%82%87%E3%82%B7%E3%83%BC%E3%83%84-%E5%9B%9B%E9%9A%85%E3%82%B4%E3%83%A0%E3%83%90%E3%83%B3%E3%83%89-%E3%83%99%E3%83%93%E3%83%BC%E5%B0%8F%E3%82%B5%E3%82%A4%E3%82%BA/dp/B0CYZM791C",
  },
  {
    name: "充電式ネックウォーマー",
    worry: "冬の通勤で首元が冷えて辛い",
    product: "充電式ネックウォーマー",
    price: "4,000円",
    dailyEffort: "充電して首に着けるだけ",
    period: "10秒",
    resultGood: "首元がすぐ温まって冷えを感じない",
    altHigh: "1万円の厚手コート買い替え",
    altBadState: "買い替えても結局首元だけ冷える",
    effortHigh: "マフラーを何重にも巻いて",
    amazonName: "INSHADE 充電式ネックウォーマー",
    amazonUrl: "https://www.amazon.co.jp/INSHADE-%E3%83%8D%E3%83%83%E3%82%AF%E3%82%A6%E3%82%A9%E3%83%BC%E3%83%9E%E3%83%BC-%E3%81%BD%E3%81%8B%E3%81%BD%E3%81%8B%E3%83%8D%E3%83%83%E3%82%AF%E3%82%A6%E3%82%A9%E3%83%BC%E3%83%9E%E3%83%BC-2%E6%AE%B5%E9%9A%8E%E6%B8%A9%E5%BA%A6%E8%AA%BF%E7%AF%80-130g%E3%81%AE%E8%B6%85%E8%BB%BD%E9%87%8F/dp/B0CS5SPBD3",
  },
  {
    name: "自転車用ヘルメット",
    worry: "自転車通勤で事故が怖いのに頭を守れない",
    product: "自転車用ヘルメット",
    price: "3,900円",
    dailyEffort: "被ってベルトを締めるだけ",
    period: "1回",
    resultGood: "とっさの時にすぐ頭を守れる",
    altHigh: "20万円の自動ブレーキ自転車",
    altBadState: "買い替えても結局頭は守られない",
    effortHigh: "転倒しないよう必要以上に慎重に走って",
    amazonName: "ZEWAYEL 自転車用ヘルメット",
    amazonUrl: "https://www.amazon.co.jp/-/en/dp/B0C1N9Z5D1",
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

const HASHTAGS = "#PR #Amazon #買ってよかったもの #購入品";

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
    const tags = `${HASHTAGS} #${genre.name}`;
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

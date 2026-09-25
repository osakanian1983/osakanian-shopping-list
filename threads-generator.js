const GENRES = [
  {
    name: "耳栓",
    worry: "隣室や外の騒音で夜眠れない",
    product: "耳栓",
    price: "800円",
    dailyEffort: "寝る前に耳に入れるだけ",
    period: "1回",
    resultGood: "物音が気にならずぐっすり眠れる",
    altHigh: "5万円の防音カーテン",
    altBadState: "つけても隙間から結局物音が漏れて眠れない",
    effortHigh: "毎晩耳栓代わりにティッシュを丸めて詰めて",
    amazonName: "Quietide 耳栓 安眠 防音 遮音値32dB",
    amazonUrl: "https://www.amazon.co.jp/日本人向けの耳栓-Quietide-フィルター搭載-遮音値32dB-繰り返し使用可能/dp/B08H24P5P8",
  },
  {
    name: "靴乾燥機",
    worry: "雨の日翌朝の靴のジメジメ・ニオイ",
    product: "靴乾燥機",
    price: "3000円",
    dailyEffort: "靴にセットして電源を入れるだけ",
    period: "1回",
    resultGood: "朝には靴の中までしっかり乾いてニオイも消える",
    altHigh: "1万円の速乾性シューズ",
    altBadState: "履き替えても結局濡れたまま乾かず臭う",
    effortHigh: "毎晩新聞紙を丸めて靴の中に詰めて",
    amazonName: "アイリスオーヤマ 靴乾燥機 カラリエ SD-C2-W",
    amazonUrl: "https://www.amazon.co.jp/アイリスオーヤマ-脱臭くつ乾燥機-カラリエ-ホワイト-SD-C2-W/dp/B07RP7TTTH",
  },
  {
    name: "UVネイルドライヤー",
    worry: "セルフネイルがなかなか乾かず崩れる",
    product: "UVネイルドライヤー",
    price: "3000円",
    dailyEffort: "塗った爪を機械に当てるだけ",
    period: "1回",
    resultGood: "数十秒でしっかり硬化して崩れなくなる",
    altHigh: "5000円のサロン",
    altBadState: "通っても数日で欠けて結局セルフで直してる",
    effortHigh: "毎回爪を10分以上扇いで乾かして",
    amazonName: "UV LED ネイルドライヤー 80W ジェルネイルライト",
    amazonUrl: "https://www.amazon.co.jp/ネイルドライヤー-80W2倍の効率-LEDジェルネイル-ライト-uvライト/dp/B089VLGK7N",
  },
  {
    name: "自動開閉折りたたみ傘",
    worry: "急な雨で傘をうまく開けず濡れる",
    product: "自動開閉折りたたみ傘",
    price: "2000円",
    dailyEffort: "ボタンを押すだけ",
    period: "1回",
    resultGood: "ワンタッチでサッと開いて濡れずに済む",
    altHigh: "1万円のレインコート",
    altBadState: "着ても結局傘を手でこじ開けてる間に濡れる",
    effortHigh: "毎回両手で骨を一本ずつ広げて",
    amazonName: "Amazonベーシック 折りたたみ傘 ワンタッチ自動開閉",
    amazonUrl: "https://www.amazon.co.jp/Amazonベーシック-AmazonBasics-WXD0319WD/dp/B00WTHJ7HO",
  },
  {
    name: "エルゴノミクスマウス",
    worry: "デスクワークでの手首の痛み",
    product: "エルゴノミクスマウス",
    price: "2500円",
    dailyEffort: "普通のマウスと入れ替えるだけ",
    period: "1週間",
    resultGood: "手首をひねらず自然な角度で操作できて痛みが和らぐ",
    altHigh: "月1万円の整体通い",
    altBadState: "通うのが続かず結局手首の痛みが戻ってる",
    effortHigh: "作業の合間に手首を何度もストレッチして",
    amazonName: "サンワダイレクト エルゴノミクスマウス 400-MA015",
    amazonUrl: "https://www.amazon.co.jp/サンワダイレクト-エルゴノミクス-長時間使用しても手首に負担がかからない-手首に優しいマウス-400-MA015/dp/B002WKTMKU",
  },
  {
    name: "トラベルネックピロー",
    worry: "新幹線や飛行機での首の痛み",
    product: "トラベルネックピロー",
    price: "2000円",
    dailyEffort: "首にはめるだけ",
    period: "1回",
    resultGood: "首が固定されて揺れても痛くならず眠れる",
    altHigh: "3万円のグリーン車",
    altBadState: "乗っても結局首がガクガク揺れて痛い",
    effortHigh: "上着を丸めて首元に挟んで",
    amazonName: "Neckise ネックピロー 低反発 トラベルピロー",
    amazonUrl: "https://www.amazon.co.jp/Neckise-ネックピロー-トラベルネックピロー-首クッション-収納ポーチ付き/dp/B0721W2BPW",
  },
  {
    name: "防水ワイヤレスイヤホン",
    worry: "運動中に汗でイヤホンが壊れる心配",
    product: "防水ワイヤレスイヤホン",
    price: "3000円",
    dailyEffort: "いつも通り着けるだけ",
    period: "1回",
    resultGood: "汗だくになっても気にせず音楽を聴き続けられる",
    altHigh: "2万円の高級イヤホン",
    altBadState: "使っても結局汗で数ヶ月で壊れてる",
    effortHigh: "運動のたびにイヤホンを布で拭いて乾かして",
    amazonName: "Bluetooth 完全ワイヤレスイヤホン 防水IPX8",
    amazonUrl: "https://www.amazon.co.jp/Bluetooth-完全ワイヤレスイヤホン-高音質ワイヤレススポーツイヤホン-運転-運動/dp/B07F6724N2",
  },
  {
    name: "電気シェーバー",
    worry: "カミソリ負けで肌がヒリヒリする",
    product: "電気シェーバー",
    price: "4000円",
    dailyEffort: "顔に当てるだけ",
    period: "1週間",
    resultGood: "肌を傷つけずツルツルに剃れて赤みが出ない",
    altHigh: "月5000円の脱毛",
    altBadState: "通ってもカミソリを使う日は結局肌が荒れる",
    effortHigh: "毎朝丁寧に肌をふやかしてから剃って",
    amazonName: "ブラウン 電気シェーバー シリーズ3 3010s",
    amazonUrl: "https://www.amazon.co.jp/【Amazon-co-jp-限定】ブラウン-メンズ電気シェーバー-3010s-お風呂剃り可/dp/B01B5JCT4E",
  },
  {
    name: "車載収納ボックス",
    worry: "車のトランクの荷物がぐちゃぐちゃ",
    product: "車載収納ボックス",
    price: "2500円",
    dailyEffort: "トランクに置くだけ",
    period: "1回",
    resultGood: "荷物が仕切られてトランクが片付く",
    altHigh: "月3000円のトランクルーム",
    altBadState: "借りても結局荷物が散乱したまま",
    effortHigh: "毎回買い物袋をトランクの隅に積み直して",
    amazonName: "Oasser 車用収納ボックス トランクボックス",
    amazonUrl: "https://www.amazon.co.jp/Oasser-車用収納ボックス-トランクボックス-防水耐摩耗-アルミめっき取っ手/dp/B07GDK66TP",
  },
  {
    name: "カーテンすきま防止クリップ",
    worry: "カーテンの隙間から漏れる光と冷気",
    product: "カーテンすきま防止クリップ",
    price: "700円",
    dailyEffort: "カーテンに挟むだけ",
    period: "1回",
    resultGood: "隙間がなくなり朝まで光も冷気も入らない",
    altHigh: "3万円の遮光カーテン",
    altBadState: "買い替えても結局隙間から光が漏れる",
    effortHigh: "毎晩カーテンを洗濯バサミで留めて",
    amazonName: "カーテンすきま防止クリップ マグネット式",
    amazonUrl: "https://www.amazon.co.jp/元林-カーテンすきま防止クリップ-カーテンのすきまを解消-マグネットでピタッとひっつく-両開きカーテン用/dp/B096HMMCC7",
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

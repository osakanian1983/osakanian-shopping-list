const GENRES = [
  {
    name: "ハンドクリーム",
    worry: "手洗い・アルコール消毒での手荒れ",
    product: "ハンドクリーム",
    price: "1500円",
    dailyEffort: "寝る前に塗るだけ",
    period: "3日",
    resultGood: "手がしっとり潤ってガサガサが気にならなくなる",
    altHigh: "月5000円のハンドエステ",
    altBadState: "施術直後はいいのにすぐ乾燥が戻ってる",
    effortHigh: "毎回何種類ものオイルを重ね塗りして",
    tag: "美容",
    rakutenName: "BAUM公式 アロマティックハンドクリーム",
    rakutenUrl: "https://item.rakuten.co.jp/baumjapan/b0035/",
  },
  {
    name: "EMS腹筋ベルト",
    worry: "運動する時間がないお腹まわりのたるみ",
    product: "EMS腹筋ベルト",
    price: "3000円",
    dailyEffort: "巻いてテレビを見ているだけ",
    period: "1週間",
    resultGood: "お腹まわりが引き締まってくる感覚がある",
    altHigh: "月1万円のパーソナルジム",
    altBadState: "通うのをやめたらすぐ体型が戻ってる",
    effortHigh: "毎日腹筋運動を何十回も頑張って",
    tag: "ダイエット",
    rakutenName: "RELX リラクス EMS腹筋ベルト 楽天1位",
    rakutenUrl: "https://item.rakuten.co.jp/excitech/emsbelt-001/",
  },
  {
    name: "ロボット掃除機",
    worry: "毎日の掃除機がけが面倒",
    product: "ロボット掃除機",
    price: "15000円",
    dailyEffort: "スイッチを押して外出するだけ",
    period: "1回",
    resultGood: "帰宅したら床がピカピカになっている",
    altHigh: "月8000円の家事代行サービス",
    altBadState: "来てもらった日はキレイでもすぐ元に戻ってる",
    effortHigh: "毎日掃除機を出してきて部屋中かけて",
    tag: "時短家電",
    rakutenName: "AIRROBO G50 ロボット掃除機",
    rakutenUrl: "https://item.rakuten.co.jp/airrobo/airrobo-g50/",
  },
  {
    name: "水切りラック",
    worry: "シンクまわりに溜まる洗い物と水はね",
    product: "水切りラック",
    price: "2500円",
    dailyEffort: "置くだけ",
    period: "1回",
    resultGood: "洗い物が驚くほどはかどってシンクがスッキリ",
    altHigh: "30万円の食洗機導入",
    altBadState: "置き場所に困って結局手洗いに戻ってる",
    effortHigh: "毎回洗い物のたびに置き場所を探して",
    tag: "収納",
    rakutenName: "EXCEPTION 水切りラック ステンレス 楽天1位",
    rakutenUrl: "https://item.rakuten.co.jp/exception5251/f-00016/",
  },
  {
    name: "コードレスヘアアイロン",
    worry: "朝の忙しい時間の髪のセット",
    product: "コードレスヘアアイロン",
    price: "4000円",
    dailyEffort: "充電して1分当てるだけ",
    period: "1回",
    resultGood: "前髪も後れ毛もサッと決まって身支度が早くなる",
    altHigh: "月8000円の美容院",
    altBadState: "セットしてもらった日はいいのに翌朝には崩れてる",
    effortHigh: "毎朝コンセントを探してコードを引っ張り出して",
    tag: "ヘアケア",
    rakutenName: "ALILIY コードレスヘアアイロン 楽天1位常連",
    rakutenUrl: "https://item.rakuten.co.jp/yangzi81/lt-2231h/",
  },
  {
    name: "レッグウォーマー",
    worry: "冷房や冬の足首の冷え",
    product: "レッグウォーマー",
    price: "1200円",
    dailyEffort: "履くだけ",
    period: "1回",
    resultGood: "足首から温まって全身の冷えが気にならなくなる",
    altHigh: "1万円の遠赤外線ひざ掛け",
    altBadState: "かけてる間はいいのに外すとすぐ足が冷える",
    effortHigh: "毎回靴下を何枚も重ね履きして",
    tag: "冷え対策",
    rakutenName: "温むすび シルクレッグウォーマー 二重構造",
    rakutenUrl: "https://item.rakuten.co.jp/onmusubi/10000013/",
  },
  {
    name: "おしりふきウォーマー",
    worry: "冬の夜の冷たいおしりふきで泣く赤ちゃん",
    product: "おしりふきウォーマー",
    price: "2500円",
    dailyEffort: "セットしておくだけ",
    period: "1回",
    resultGood: "おしりふきが温かくて夜中の交換も泣かずに済む",
    altHigh: "1万円の授乳室",
    altBadState: "部屋を暖めてもふき自体は冷たいまま",
    effortHigh: "毎回手のひらで温めてから拭いて",
    tag: "育児グッズ",
    rakutenName: "コンビ クイックウォーマー エリート",
    rakutenUrl: "https://item.rakuten.co.jp/combi/quick-warmer-handy/",
  },
  {
    name: "猫背矯正ベルト",
    worry: "デスクワークでの猫背・巻き肩",
    product: "猫背矯正ベルト",
    price: "2500円",
    dailyEffort: "装着して仕事するだけ",
    period: "3日",
    resultGood: "背筋が伸びて肩まわりが軽くなる",
    altHigh: "月1万円の整体通い",
    altBadState: "施術直後はいいのに数日で猫背が戻ってる",
    effortHigh: "仕事の合間に何度も姿勢を意識して伸ばして",
    tag: "デスクワーク",
    rakutenName: "あんしん堂ストア 猫背矯正ベルト 楽天1位",
    rakutenUrl: "https://item.rakuten.co.jp/ansindostore/sisei-001/",
  },
  {
    name: "ペット用消臭スプレー",
    worry: "部屋にこもる愛犬・愛猫のトイレ臭",
    product: "ペット用消臭スプレー",
    price: "1500円",
    dailyEffort: "シュッと吹きかけるだけ",
    period: "1回",
    resultGood: "気になる臭いがすぐ消えて来客前も安心",
    altHigh: "3万円の空気清浄機",
    altBadState: "置いても消臭までに時間がかかって臭いが残ってる",
    effortHigh: "毎回窓を開けて何時間も換気して",
    tag: "ペット用品",
    rakutenName: "0mist Pro ペトラボ ペット用消臭スプレー",
    rakutenUrl: "https://item.rakuten.co.jp/hal-online/pl_mistpro_500/",
  },
  {
    name: "スキミング防止パスケース",
    worry: "ICカードのスキミング被害",
    product: "スキミング防止ケース",
    price: "1000円",
    dailyEffort: "カードを入れるだけ",
    period: "1回",
    resultGood: "カード情報を守れて安心",
    altHigh: "5000円の不正利用保険",
    altBadState: "気づくのは被害後",
    effortHigh: "毎回カードを金属ケースにしまって",
    tag: "家計管理",
    rakutenName: "sororito スキミング防止カードケース 楽天1位",
    rakutenUrl: "https://item.rakuten.co.jp/sororito/rfid/",
  },
];

const PATTERNS = [
  {
    key: "A",
    title: "パターンA｜価格ギャップ重視型",
    scoreRange: { hook: [17, 19], concrete: [18, 20], contrarian: [15, 18], empathy: [15, 18], clip: [15, 18] },
    reasons: ["価格差のインパクトでクリップを誘発するため", "コスパ訴求が当事者に刺さりやすいため"],
    build(g) {
      const l1 = `${g.worry}に悩んでる人、${g.product}が本当に買ってよかった。`;
      const rest =
        `だって、${g.price}なのに${g.dailyEffort}で${g.period}後には${g.resultGood}って` +
        `正直コスパ良すぎ🕊️${g.altHigh}使ってるのに${g.altBadState}人こそ試して。` +
        `高いお金払って変化ないより、${g.price}でちゃんと結果出る方が良くない？🕊️`;
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
        `だって、${g.dailyEffort}足すだけで${g.period}後には${g.resultGood}って` +
        `忙しい人ほどマジで助かるやつ🕊️${g.effortHigh}頑張ってるのに効果続かない人こそ試して。` +
        `手間かけて一時的に変わるより、${g.dailyEffort}で自然にキープできる方が良くない？🕊️`;
      return `${l1}\n${rest}`;
    },
  },
  {
    key: "C",
    title: "パターンC｜逆張り・共感重視型",
    scoreRange: { hook: [17, 19], concrete: [16, 19], contrarian: [18, 20], empathy: [17, 19], clip: [16, 19] },
    reasons: ["高額勢を名指しし共感と反論を誘発するため", "逆張り視点でコメントを誘発しやすいため"],
    build(g) {
      const l1 = `${g.worry}、実は${g.altHigh}使ってる人ほど気づいてない落とし穴があるらしい。`;
      const rest =
        `だって、値段より続けられるかが大事で${g.price}の${g.product}でも${g.period}継続したら` +
        `${g.resultGood}って🕊️${g.altHigh}買って満足しただけで${g.altBadState}人こそ試して。` +
        `値段で安心するより、ちゃんと使い切る方が良くない？🕊️`;
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

const HASHTAGS = "#楽天ROOM #楽天市場 #買ってよかったもの #購入品";

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

  genreLabelEl.textContent = `今日のジャンル：${genre.name}`;
  productInfoEl.textContent = "";
  const linkLabel = document.createElement("span");
  linkLabel.textContent = "紹介商品：";
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

const GENRES = [
  {
    name: "かかとケアフットファイル",
    worry: "ガサガサして角質が目立つかかと",
    product: "フットファイル",
    price: "1500円",
    dailyEffort: "お風呂でかかとを滑らせるだけ",
    period: "1回",
    resultGood: "かかとがつるつるになって靴下が引っかからなくなる",
    altHigh: "月8000円のエステ",
    altBadState: "施術直後はいいのに数日でガサガサが戻ってる",
    effortHigh: "毎晩軽石で何度もかかとを擦って",
    tag: "美容",
    rakutenName: "Lefina かかとケアフットファイル",
    rakutenUrl: "https://item.rakuten.co.jp/lorelife/b1905c-009/",
  },
  {
    name: "フィットネスバンド",
    worry: "運動不足で落ちていく筋力",
    product: "フィットネスバンド",
    price: "2000円",
    dailyEffort: "バンドを引っ張って動くだけ",
    period: "2週間",
    resultGood: "家でも筋力がついて体が引き締まってくる",
    altHigh: "月1万円のパーソナルジム",
    altBadState: "通うのをやめたらすぐ体型が戻ってる",
    effortHigh: "毎回ジムまで通って器具の順番待ちをして",
    tag: "トレーニング",
    rakutenName: "TheFitLife トレーニングチューブ",
    rakutenUrl: "https://item.rakuten.co.jp/hitcreations/gr-e9e07r40eu/",
  },
  {
    name: "自動製氷機",
    worry: "夏に限って足りなくなる氷のストック",
    product: "自動製氷機",
    price: "8000円",
    dailyEffort: "水を入れてボタンを押すだけ",
    period: "1回",
    resultGood: "数分で氷ができて冷たい飲み物に困らなくなる",
    altHigh: "月3000円の氷宅配",
    altBadState: "頼んだ直後はいいのに届く前に氷が尽きてる",
    effortHigh: "毎回コンビニまで氷を買いに走って",
    tag: "時短家電",
    rakutenName: "ALTENA コンパクト自動製氷機",
    rakutenUrl: "https://item.rakuten.co.jp/mtkshop/ice2200/",
  },
  {
    name: "キッチンワゴン",
    worry: "キッチンの隙間にたまる調理器具の収納場所",
    product: "キッチンワゴン",
    price: "4000円",
    dailyEffort: "キャスターで動かして置くだけ",
    period: "1回",
    resultGood: "隙間が有効活用できてキッチンがすっきりする",
    altHigh: "数十万円のリフォーム",
    altBadState: "リフォームしても結局隙間に物が積まれてる",
    effortHigh: "毎回棚の奥から踏み台を使って取り出して",
    tag: "キッチン収納",
    rakutenName: "キッチンワゴン 3段 キャスター付き",
    rakutenUrl: "https://item.rakuten.co.jp/livingut/374438/",
  },
  {
    name: "充電式カイロ",
    worry: "冬の外出先での手先の冷え",
    product: "充電式カイロ",
    price: "3000円",
    dailyEffort: "ボタンを押してポケットに入れるだけ",
    period: "1回",
    resultGood: "手先がすぐ温まって冷えが気にならなくなる",
    altHigh: "1箱500円の使い捨てカイロ",
    altBadState: "貼った直後はいいのに数時間で冷たくなってる",
    effortHigh: "毎回使い捨てカイロを何個も買い替えて",
    tag: "冷え対策",
    rakutenName: "繰り返し使える充電式カイロ",
    rakutenUrl: "https://item.rakuten.co.jp/7dials/lcaea001/",
  },
  {
    name: "ベビーバスマット",
    worry: "片手で支えながらの新生児の沐浴",
    product: "ベビーバスマット",
    price: "2500円",
    dailyEffort: "マットに寝かせて洗うだけ",
    period: "1回",
    resultGood: "両手が空いて沐浴がぐっと楽になる",
    altHigh: "月1万円の沐浴サポートサービス",
    altBadState: "頼んだ直後はいいのに毎回予約が取れず困る",
    effortHigh: "毎回片手で赤ちゃんを支えながら何度も洗って",
    tag: "育児",
    rakutenName: "リッチェル ひんやりしないおふろマット",
    rakutenUrl: "https://item.rakuten.co.jp/interior-palette/474838/",
  },
  {
    name: "ひじ掛けクッション",
    worry: "長時間のパソコン作業でのひじの痛み",
    product: "ひじ掛けクッション",
    price: "3000円",
    dailyEffort: "デスクに置いてひじを乗せるだけ",
    period: "1回",
    resultGood: "ひじが支えられて作業の疲れが減る",
    altHigh: "月1万円の整体通い",
    altBadState: "施術直後はいいのに数日でひじの痛みが戻ってる",
    effortHigh: "毎回ひじの位置を意識して何度も座り直して",
    tag: "デスクワーク",
    rakutenName: "Jimu fab ひじうでサポートFLAG",
    rakutenUrl: "https://item.rakuten.co.jp/relaxia/jimu_fab_hijiudesapo-to/",
  },
  {
    name: "ペットカート",
    worry: "長距離のお出かけでの愛犬の足腰への負担",
    product: "ペットカート",
    price: "7000円",
    dailyEffort: "カートに乗せて押すだけ",
    period: "1回",
    resultGood: "足腰に負担をかけずに外出を楽しめる",
    altHigh: "1回5000円のタクシー",
    altBadState: "利用した直後はいいのに毎回予約が取れず困る",
    effortHigh: "毎回抱っこして何十分も歩き続けて",
    tag: "ペット用品",
    rakutenName: "3WAYペットキャリー カート分離 折りたたみ",
    rakutenUrl: "https://item.rakuten.co.jp/maxshare/a07652/",
  },
  {
    name: "ポイントカード収納ホルダー",
    worry: "財布にたまる一方のポイントカードの管理",
    product: "カード収納ホルダー",
    price: "1500円",
    dailyEffort: "カードをポケットに差すだけ",
    period: "1回",
    resultGood: "使いたいカードがすぐ見つかる",
    altHigh: "月500円の家計簿アプリ",
    altBadState: "課金直後はいいのにすぐ入力が面倒で放置してる",
    effortHigh: "毎回財布の中から何枚も探してめくって",
    tag: "家計管理",
    rakutenName: "TOTONOE カードホルダー 20ポケット",
    rakutenUrl: "https://item.rakuten.co.jp/e-stationery/s_totonoe_020/",
  },
  {
    name: "車内用ハンディクリーナー",
    worry: "車内にたまる砂・パンくずの掃除",
    product: "ハンディクリーナー",
    price: "4000円",
    dailyEffort: "スイッチを入れて吸うだけ",
    period: "1回",
    resultGood: "車内がすぐきれいになって気持ちよく乗れる",
    altHigh: "1回2000円の洗車場清掃",
    altBadState: "利用直後はいいのにすぐ砂が戻ってる",
    effortHigh: "毎回大きな掃除機を車まで引っ張ってきて",
    tag: "掃除・洗濯",
    rakutenName: "Le pumo コードレスハンディクリーナー",
    rakutenUrl: "https://item.rakuten.co.jp/trade-abc/261-k179-n01/",
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

const GENRES = [
  {
    name: "猫背矯正ベルト",
    worry: "デスクワークでの猫背・肩の丸まり",
    product: "猫背矯正ベルト",
    price: "2000円",
    dailyEffort: "装着するだけ",
    period: "3日",
    resultGood: "背筋が伸びて肩や首のだるさが減る",
    altHigh: "月1万円の姿勢改善ジム",
    altBadState: "通うのが続かず結局猫背に戻ってる",
    effortHigh: "毎日鏡の前で姿勢を意識して",
    amazonName: "猫背矯正ベルト 姿勢矯正 男女兼用",
    amazonUrl: "https://www.amazon.co.jp/dp/B0CGLNRPPR",
  },
  {
    name: "洗顔泡立てネット",
    worry: "洗顔料の泡立て不足・毛穴汚れ",
    product: "洗顔泡立てネット",
    price: "500円",
    dailyEffort: "朝晩10秒泡立てるだけ",
    period: "3日",
    resultGood: "もっちり濃密泡で毛穴汚れがすっきり落ちる",
    altHigh: "5000円の高級泡立ち洗顔料",
    altBadState: "高いのに泡立て不足で肌がこすれてる",
    effortHigh: "毎回手のひらで何分も頑張って泡立てて",
    amazonName: "MUJI 無印良品 洗顔用泡立てネット",
    amazonUrl: "https://www.amazon.co.jp/dp/B07TRYJZSH",
  },
  {
    name: "クローゼット除湿剤",
    worry: "クローゼットの湿気・カビ臭",
    product: "除湿シート",
    price: "1500円",
    dailyEffort: "吊るしておくだけ",
    period: "1週間",
    resultGood: "湿気やカビ臭が取れて服がさらっと保てる",
    altHigh: "1万円の除湿機能付き家具",
    altBadState: "置いても湿気がこもってカビ臭くなる",
    effortHigh: "毎週クローゼットの扉を開けて換気して",
    amazonName: "調湿くん 繰り返し使えるクローゼット用除湿シート",
    amazonUrl: "https://www.amazon.co.jp/dp/B0CLL4BYLN",
  },
  {
    name: "洗濯ネット",
    worry: "お気に入り服の型崩れ・毛羽立ち",
    product: "洗濯ネット",
    price: "800円",
    dailyEffort: "入れて洗濯機に回すだけ",
    period: "1回",
    resultGood: "お気に入りの服が型崩れせず長持ちする",
    altHigh: "1着1000円のクリーニング店",
    altBadState: "持っていくのが面倒で結局雑に洗ってる",
    effortHigh: "型崩れが心配な服だけ手洗いして陰干しして",
    amazonName: "ダイヤ 洗濯ネット シャツ用 型崩れ防止",
    amazonUrl: "https://www.amazon.co.jp/dp/B005NFU3IG",
  },
  {
    name: "スマホ冷却ファン",
    worry: "ゲーム中のスマホの熱暴走",
    product: "スマホ冷却ファン",
    price: "2500円",
    dailyEffort: "クリップで挟むだけ",
    period: "1回",
    resultGood: "本体がすぐ冷えてカクつきも熱も気にならない",
    altHigh: "10万円のハイスペック機種",
    altBadState: "買い替えても長時間プレイで熱くなる",
    effortHigh: "こまめにアプリを閉じて休憩を挟んで",
    amazonName: "VOVAQI スマホ冷却ファン ペルチェ素子",
    amazonUrl: "https://www.amazon.co.jp/dp/B0C3TQDK69",
  },
  {
    name: "EMS腹筋ベルト",
    worry: "お腹まわりのたるみ",
    product: "EMS腹筋ベルト",
    price: "3000円",
    dailyEffort: "1日20分巻くだけ",
    period: "2週間",
    resultGood: "お腹まわりが引き締まって服のラインが変わる",
    altHigh: "月1万円の腹筋専門ジム",
    altBadState: "通うのが続かず結局お腹のたるみが戻ってる",
    effortHigh: "毎日腹筋運動を100回頑張って",
    amazonName: "EMS腹筋ベルト ジェルシート不要",
    amazonUrl: "https://www.amazon.co.jp/dp/B0DYTGH5CN",
  },
  {
    name: "ホットアイマスク",
    worry: "夕方の目の疲れ・かすみ目",
    product: "ホットアイマスク",
    price: "700円",
    dailyEffort: "夜10分のせるだけ",
    period: "1回",
    resultGood: "目の疲れがじんわりほぐれて視界がスッキリ",
    altHigh: "5000円のアイケア機",
    altBadState: "高いのに使うのが面倒で放置してる",
    effortHigh: "毎晩蒸しタオルを電子レンジで温めて",
    amazonName: "めぐりズム 蒸気でホットアイマスク 無香料",
    amazonUrl: "https://www.amazon.co.jp/dp/B0012R23UK",
  },
  {
    name: "携帯用除菌シート",
    worry: "外出先での手や物の菌汚れ",
    product: "携帯用除菌シート",
    price: "400円",
    dailyEffort: "バッグに入れておくだけ",
    period: "3日",
    resultGood: "外出先でもサッと拭けて菌が気にならない",
    altHigh: "1000円のアルコールスプレー",
    altBadState: "持ち歩くのを忘れて結局使えないままに",
    effortHigh: "外出のたびに除菌ジェルを塗り直して",
    amazonName: "エリエール ウェットティッシュ 除菌 アルコールタイプ",
    amazonUrl: "https://www.amazon.co.jp/dp/B00IM4TA6Q",
  },
  {
    name: "竹製食器洗いブラシ",
    worry: "スポンジのヌメリ・雑菌臭",
    product: "竹製食器洗いブラシ",
    price: "900円",
    dailyEffort: "いつも通り洗うだけ",
    period: "1週間",
    resultGood: "ヌメリや雑菌臭が気にならずキッチンが清潔に",
    altHigh: "月500円の抗菌スポンジ",
    altBadState: "買い替えても数日でまたヌメリが出てる",
    effortHigh: "毎日スポンジを煮沸消毒して",
    amazonName: "たわし キッチンブラシ 天然植物繊維 竹製",
    amazonUrl: "https://www.amazon.co.jp/dp/B09JS8QWLV",
  },
  {
    name: "デスクヒーター",
    worry: "在宅勤務中の足元の冷え",
    product: "デスク下フットヒーター",
    price: "3000円",
    dailyEffort: "足元に置いておくだけ",
    period: "1回",
    resultGood: "足元がぽかぽかになって冷えを忘れて集中できる",
    altHigh: "月1万円かかるエアコン暖房",
    altBadState: "つけても足元だけ結局冷えたまま",
    effortHigh: "毎日ひざ掛けと靴下を重ね履きして",
    amazonName: "パネルヒーター 足元ヒーター デスク下",
    amazonUrl: "https://www.amazon.co.jp/dp/B0BP22M7GL",
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

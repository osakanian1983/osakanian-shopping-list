const GENRES = [
  {
    name: "まつげ美容液",
    worry: "年齢とともに減ってきたまつ毛のハリ・コシ",
    product: "まつげ美容液",
    price: "2000円",
    dailyEffort: "メイク前に1度塗るだけ",
    period: "1週間",
    resultGood: "まつ毛にハリが出てメイクの仕上がりが良くなる",
    altHigh: "数万円のエクステ",
    altBadState: "施術直後はいいのにすぐ取れて地まつ毛が傷んでる",
    effortHigh: "毎朝ビューラーとマスカラを何度も重ね付けして",
    tag: "美容",
    rakutenName: "マンダム ククイラッシュ 濃密まつ毛美容液",
    rakutenUrl: "https://item.rakuten.co.jp/mandom-shop/ku-001/",
  },
  {
    name: "酵素ドリンク",
    worry: "食べ過ぎ・飲み過ぎで乱れた胃腸の調子",
    product: "酵素ドリンク",
    price: "2000円",
    dailyEffort: "朝食の代わりに飲むだけ",
    period: "3日",
    resultGood: "胃腸がスッキリして体が軽く感じられる",
    altHigh: "月1万円のパーソナルジム",
    altBadState: "通うのをやめたらすぐ体型が戻ってる",
    effortHigh: "毎食カロリーを計算して食事制限を頑張って",
    tag: "ダイエット",
    rakutenName: "優光泉 国産酵素ドリンク 楽天1位",
    rakutenUrl: "https://item.rakuten.co.jp/danjiki-dojo/0090/",
  },
  {
    name: "電気圧力鍋",
    worry: "煮込み料理にかかる時間と手間",
    product: "電気圧力鍋",
    price: "8000円",
    dailyEffort: "材料を入れてボタンを押すだけ",
    period: "1回",
    resultGood: "ほったらかしで煮込み料理が完成して時間に余裕ができる",
    altHigh: "月8000円の宅配食",
    altBadState: "頼んでも好みに合わず自分で作り直してる",
    effortHigh: "毎回鍋の前に張り付いて何時間も煮込んで",
    tag: "時短家電",
    rakutenName: "リデポット電気圧力鍋 PCH-20",
    rakutenUrl: "https://item.rakuten.co.jp/kireispot/ri385/",
  },
  {
    name: "玄関シューズラック",
    worry: "玄関に散らかる靴の置き場所",
    product: "玄関シューズラック",
    price: "3000円",
    dailyEffort: "靴を置くだけ",
    period: "1回",
    resultGood: "玄関がスッキリ片付いて来客時も安心",
    altHigh: "数十万円の玄関リフォーム工事",
    altBadState: "工事しても結局靴が増えてまた散らかってる",
    effortHigh: "毎回靴箱の奥から靴を出し入れして整理して",
    tag: "収納",
    rakutenName: "山崎実業 tower 浮かせる伸縮シューズラック",
    rakutenUrl: "https://item.rakuten.co.jp/roomy/ymz22jan31h05/",
  },
  {
    name: "スカルプエッセンス",
    worry: "年齢とともに気になる抜け毛・薄毛",
    product: "スカルプエッセンス",
    price: "3000円",
    dailyEffort: "お風呂上がりに頭皮に塗るだけ",
    period: "1週間",
    resultGood: "抜け毛が減って地肌にハリが出てくる",
    altHigh: "1万円のヘッドスパサロン",
    altBadState: "通うのをやめたら地肌のべたつきが戻ってる",
    effortHigh: "毎晩指の腹で念入りに頭皮をマッサージして",
    tag: "ヘアケア",
    rakutenName: "haru スカルプエッセンス100",
    rakutenUrl: "https://item.rakuten.co.jp/harushop/ikumouzai/",
  },
  {
    name: "ネックウォーマー",
    worry: "冬の首元からの冷え",
    product: "ネックウォーマー",
    price: "1500円",
    dailyEffort: "首に巻くだけ",
    period: "1回",
    resultGood: "首元がすぐ温まって全身の冷えが和らぐ",
    altHigh: "1万円の電気毛布",
    altBadState: "つけっぱなしで結局電気代だけ増えてる",
    effortHigh: "毎回マフラーを何重にも巻き直して",
    tag: "冷え対策",
    rakutenName: "nakota マイクロボアネックウォーマー",
    rakutenUrl: "https://item.rakuten.co.jp/lakota/la021/",
  },
  {
    name: "ベビーカーレインカバー",
    worry: "雨の日のベビーカー移動",
    product: "ベビーカーレインカバー",
    price: "2000円",
    dailyEffort: "装着するだけ",
    period: "1回",
    resultGood: "雨の日も濡れずに赤ちゃんと快適にお出かけできる",
    altHigh: "数千円のタクシー移動",
    altBadState: "使っても結局荷物が濡れて困ってる",
    effortHigh: "毎回大きな傘を片手に抱えながら歩いて",
    tag: "育児グッズ",
    rakutenName: "FABOMI ベビーカーレインカバー 楽天1位",
    rakutenUrl: "https://item.rakuten.co.jp/fabomi/c05201rc/",
  },
  {
    name: "モニターアーム",
    worry: "デスクワークでの姿勢の悪さ・肩こり",
    product: "モニターアーム",
    price: "4000円",
    dailyEffort: "取り付けて高さを合わせるだけ",
    period: "1回",
    resultGood: "目線が自然に合って姿勢が良くなり肩こりが軽くなる",
    altHigh: "月1万円の整体通い",
    altBadState: "施術直後はいいのに数日で肩こりが戻ってる",
    effortHigh: "仕事の合間に台で高さを調整して",
    tag: "デスクワーク",
    rakutenName: "サンワダイレクト モニターアーム 楽天1位",
    rakutenUrl: "https://item.rakuten.co.jp/sanwadirect/100-lac006/",
  },
  {
    name: "伸縮リード",
    worry: "散歩中の愛犬とのリードの絡まり",
    product: "伸縮リード",
    price: "2000円",
    dailyEffort: "ボタンで長さを調節するだけ",
    period: "1回",
    resultGood: "リードが絡まず愛犬も自由に歩けて散歩がラクになる",
    altHigh: "5000円のトレーナー",
    altBadState: "教えてもらった直後はいいのに引っ張り癖が戻ってる",
    effortHigh: "毎回リードを持ち替えて長さを結び直して",
    tag: "ペット用品",
    rakutenName: "Truelove 犬用伸縮リード",
    rakutenUrl: "https://item.rakuten.co.jp/truelove-pet/tll/",
  },
  {
    name: "手回し充電ラジオ",
    worry: "災害時・停電時の情報収集手段",
    product: "手回し充電ラジオ",
    price: "2500円",
    dailyEffort: "棚に置いておくだけ",
    period: "1回",
    resultGood: "停電してもハンドルを回すだけで情報収集も充電もできる",
    altHigh: "数十万円の家庭用蓄電池",
    altBadState: "導入しても結局使い方が分からず放置してる",
    effortHigh: "災害のたびに慌てて電池や充電器を探し回って",
    tag: "防災グッズ",
    rakutenName: "AudioComm 手回し充電ラジオ RAD-M799N",
    rakutenUrl: "https://item.rakuten.co.jp/e-price/07-3799/",
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

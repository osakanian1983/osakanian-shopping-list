const GENRES = [
  {
    name: "高周波美顔器",
    worry: "鏡で見るたびに気になる顔のたるみ・ハリ不足",
    product: "高周波美顔器",
    price: "3300円",
    dailyEffort: "1日5分顔に当てるだけ",
    period: "2週間",
    resultGood: "肌がキュッと引き締まってハリが出てくる",
    altHigh: "1万円の小顔エステ",
    altBadState: "施術直後はいいのにすぐたるみが戻ってる",
    effortHigh: "毎回予約を取ってエステまで通って",
    tag: "美容",
    rakutenName: "美顔器 高周波 多機能美顔器 RFラジオ波",
    rakutenUrl: "https://item.rakuten.co.jp/crazy-shop88/crazycy2021/",
  },
  {
    name: "踏み台ステッパー",
    worry: "運動不足で下半身がどんどん弱っていく焦り",
    product: "踏み台ステッパー",
    price: "4000円",
    dailyEffort: "テレビを見ながら足踏みするだけ",
    period: "2週間",
    resultGood: "下半身がしっかり引き締まって体力もつく",
    altHigh: "月8000円のジム通い",
    altBadState: "通っても結局続かず元に戻ってる",
    effortHigh: "ジムまで移動して着替えて運動して",
    tag: "ダイエット",
    rakutenName: "SunRuck ステッパー SR-FT018",
    rakutenUrl: "https://item.rakuten.co.jp/ichibankanshop/sr-ft018/",
  },
  {
    name: "ハンディスチーマー",
    worry: "出がけに気になるシャツのシワ",
    product: "ハンディスチーマー",
    price: "4500円",
    dailyEffort: "ハンガーにかけたままシュッとするだけ",
    period: "1回",
    resultGood: "アイロン台なしでシワがすぐ伸びる",
    altHigh: "1000円のクリーニング仕上げ",
    altBadState: "頼んでも急な予定に間に合わない",
    effortHigh: "毎回アイロン台を出して温めて",
    tag: "時短家電",
    rakutenName: "ツインバード ハンディースチーマー SA-D096W",
    rakutenUrl: "https://item.rakuten.co.jp/bigoff-higashinakano/10001879/",
  },
  {
    name: "デスク収納トレー",
    worry: "デスクの上が小物でいつも散らかってる悩み",
    product: "デスク収納トレー",
    price: "900円",
    dailyEffort: "トレーに小物を置くだけ",
    period: "1回",
    resultGood: "デスクの上がスッキリ片付いて作業効率も上がる",
    altHigh: "2万円のデスク周り収納家具",
    altBadState: "買っても小物が収まらず散らかる",
    effortHigh: "収納場所を求めて何度も家具を買い替えて",
    tag: "収納",
    rakutenName: "どこでも！整理トレー S",
    rakutenUrl: "https://item.rakuten.co.jp/bestco-mp/b0564/",
  },
  {
    name: "炭酸ヘッドスパブラシ",
    worry: "頭皮のベタつきが取れない悩み",
    product: "炭酸ヘッドスパブラシ",
    price: "1800円",
    dailyEffort: "シャンプー時に頭皮をなぞるだけ",
    period: "1週間",
    resultGood: "頭皮の汚れが落ちてベタつかなくなる",
    altHigh: "8000円のヘッドスパ",
    altBadState: "通ってもすぐベタつきが戻る",
    effortHigh: "毎回予約してサロンに通って",
    tag: "ヘアケア",
    rakutenName: "シャンプーブラシ スカルプブラシ 頭皮ブラシ",
    rakutenUrl: "https://item.rakuten.co.jp/p-a-product/b-01/",
  },
  {
    name: "フットバス",
    worry: "夜になると足先が冷えてなかなか眠れない悩み",
    product: "フットバス",
    price: "3000円",
    dailyEffort: "お湯を入れて足を浸けるだけ",
    period: "3日",
    resultGood: "足先からじんわり温まって寝つきが良くなる",
    altHigh: "月6000円の整体の温熱ケア",
    altBadState: "施術直後だけ温まってすぐ戻る",
    effortHigh: "毎回予約を取って整体院まで通って",
    tag: "冷え対策",
    rakutenName: "イノマタ化学 足湯専科 フットバス",
    rakutenUrl: "https://item.rakuten.co.jp/sakai-fukui/inomata-2500/",
  },
  {
    name: "電動ベビーバウンサー",
    worry: "抱っこしないと泣き止まない赤ちゃん",
    product: "電動ベビーバウンサー",
    price: "1.2万円",
    dailyEffort: "バウンサーに寝かせてスイッチを押すだけ",
    period: "1日",
    resultGood: "自動スイングで機嫌よく過ごしてくれる",
    altHigh: "月1万円の一時保育",
    altBadState: "預けられる日が限られて結局抱っこ",
    effortHigh: "毎回抱っこして揺らして",
    tag: "育児",
    rakutenName: "LARUTAN 電動バウンサー",
    rakutenUrl: "https://item.rakuten.co.jp/larutan/n039/",
  },
  {
    name: "マッサージガン",
    worry: "デスクワークで固まった肩や背中のコリ",
    product: "マッサージガン",
    price: "5000円",
    dailyEffort: "気になる部分に1日5分当てるだけ",
    period: "3日",
    resultGood: "凝った部分がゆるんで肩が軽くなる",
    altHigh: "1回5000円のマッサージ店",
    altBadState: "施術直後はいいのに翌日にはコリが戻ってる",
    effortHigh: "毎回予約を取ってマッサージ店に通って",
    tag: "肩こり対策",
    rakutenName: "マッサージガン 筋膜リリースガン",
    rakutenUrl: "https://item.rakuten.co.jp/meisei/1257/",
  },
  {
    name: "ペット用クールマット",
    worry: "夏にペットが暑そうにぐったりしてる心配",
    product: "ペット用クールマット",
    price: "2000円",
    dailyEffort: "マットを敷いておくだけ",
    period: "1回",
    resultGood: "ひんやりマットの上で快適に過ごしてくれる",
    altHigh: "月3000円のエアコン",
    altBadState: "つけても部屋の隅はまだ暑い",
    effortHigh: "エアコンの温度調整に気を配って",
    tag: "ペット用品",
    rakutenName: "WEIMALL クールマット ペット用品",
    rakutenUrl: "https://item.rakuten.co.jp/weimall/fep01/",
  },
  {
    name: "小型シュレッダー",
    worry: "個人情報入りの郵便物をそのまま捨てる不安",
    product: "小型シュレッダー",
    price: "3500円",
    dailyEffort: "郵便物を差し込むだけ",
    period: "1回",
    resultGood: "個人情報を気にせずすぐに処分できる",
    altHigh: "500円の溶解処分サービス",
    altBadState: "頼むのが面倒で結局そのまま溜め込んでる",
    effortHigh: "まとめて業者に持ち込んで処分して",
    tag: "家計管理",
    rakutenName: "サンワダイレクト シュレッダー 家庭用 卓上",
    rakutenUrl: "https://item.rakuten.co.jp/sanwadirect/400-psd058/",
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

const HASHTAGS = "#PR #楽天ROOM #楽天市場 #買ってよかったもの #購入品";

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

const GENRES = [
  {
    name: "スカルプブラシ",
    worry: "頭皮のべたつき・抜け毛の増加",
    product: "スカルプブラシ",
    price: "800円",
    dailyEffort: "シャンプー中にコロコロするだけ",
    period: "1週間",
    resultGood: "頭皮がスッキリして抜け毛が減った気がする",
    altHigh: "1万円のヘッドスパサロン",
    altBadState: "通うのをやめたら地肌のべたつきが戻ってる",
    effortHigh: "毎晩指の腹で念入りに頭皮をマッサージして",
    tag: "ヘアケア",
    rakutenName: "JINSHOP スカルプブラシ マグネット式シリコン",
    rakutenUrl: "https://item.rakuten.co.jp/jinshop/scalpbrush/",
  },
  {
    name: "着圧ソックス",
    worry: "夕方のふくらはぎのむくみ",
    product: "着圧ソックス",
    price: "1500円",
    dailyEffort: "寝る前に履くだけ",
    period: "3日",
    resultGood: "朝起きた時に脚が軽くてスッキリしてる",
    altHigh: "月8000円のリンパドレナージュ",
    altBadState: "施術直後はいいのに翌日にはむくみが戻ってる",
    effortHigh: "毎晩自分でふくらはぎを念入りにマッサージして",
    tag: "むくみケア",
    rakutenName: "ドクターショール フライトソックス 着圧ソックス",
    rakutenUrl: "https://item.rakuten.co.jp/lifewith-007/70923/",
  },
  {
    name: "ベビーカーフック",
    worry: "ベビーカーの荷物の置き場所",
    product: "ベビーカーフック",
    price: "1200円",
    dailyEffort: "カラビナを引っ掛けるだけ",
    period: "1回",
    resultGood: "荷物がすぐ取り出せて両手が空く",
    altHigh: "5000円の大容量マザーズバッグ",
    altBadState: "バッグの中で荷物が迷子になって困ってる",
    effortHigh: "毎回ベビーカーの下カゴにかがんで荷物を出し入れして",
    tag: "育児グッズ",
    rakutenName: "LOARBABY ベビーカーフック カラビナ2個セット",
    rakutenUrl: "https://item.rakuten.co.jp/loar/lrb-1008/",
  },
  {
    name: "ネックマッサージャー",
    worry: "デスクワークでの首・肩のこり",
    product: "ネックマッサージャー",
    price: "4000円",
    dailyEffort: "首に掛けて15分放置するだけ",
    period: "3日",
    resultGood: "首や肩が軽くなって集中力も続く",
    altHigh: "月1万円の整体通い",
    altBadState: "施術直後はいいのに翌日には肩こりが戻ってる",
    effortHigh: "仕事の合間に自分の手で念入りに肩を揉んで",
    tag: "肩こり対策",
    rakutenName: "SKG ネックマッサージャー EMS温熱ケア",
    rakutenUrl: "https://item.rakuten.co.jp/skgs-1/s-1548/",
  },
  {
    name: "ペットブラシ",
    worry: "部屋中に舞う愛犬・愛猫の抜け毛",
    product: "ペットブラシ",
    price: "1000円",
    dailyEffort: "1日1分ブラッシングするだけ",
    period: "1週間",
    resultGood: "部屋に舞う抜け毛が減って掃除がラクになる",
    altHigh: "月5000円のトリミングサロン",
    altBadState: "施術直後だけキレイですぐ元通り",
    effortHigh: "毎日普通のブラシで根気よく抜け毛を取ろうとして",
    tag: "ペット用品",
    rakutenName: "habit 両面ペットブラシ 抜け毛取り",
    rakutenUrl: "https://item.rakuten.co.jp/habit-balance/petbrush/",
  },
  {
    name: "シュレッダーハサミ",
    worry: "個人情報入りの郵便物やレシートの処分",
    product: "シュレッダーハサミ",
    price: "700円",
    dailyEffort: "はさみでチョキチョキ切るだけ",
    period: "1回",
    resultGood: "個人情報が読めない状態で捨てられる",
    altHigh: "1万円の電動シュレッダー",
    altBadState: "置き場所に困って結局しまい込んでる",
    effortHigh: "毎回普通のはさみで細かく何度も切り刻んで",
    tag: "家計管理",
    rakutenName: "サンスター文具 シュレッダーハサミ",
    rakutenUrl: "https://item.rakuten.co.jp/bungushop/4901770076614/",
  },
  {
    name: "洗濯槽クリーナー",
    worry: "洗濯物から漂う生乾き臭",
    product: "洗濯槽クリーナー",
    price: "600円",
    dailyEffort: "洗濯機に入れて回すだけ",
    period: "1回",
    resultGood: "洗濯物の生乾き臭が消えて黒カビも予防できる",
    altHigh: "2万円の洗濯槽クリーニング業者",
    altBadState: "依頼直後はいいのに数ヶ月でまた臭ってくる",
    effortHigh: "毎回洗濯槽を分解して手でカビを擦り洗いして",
    tag: "掃除・時短家事",
    rakutenName: "パナソニック 洗濯槽クリーナー ドラム式用",
    rakutenUrl: "https://item.rakuten.co.jp/panasonic-store/n-w2/",
  },
  {
    name: "ホットアイマスク",
    worry: "夜のスマホ・PCによる目の疲れ",
    product: "蒸気でホットアイマスク",
    price: "400円",
    dailyEffort: "寝る前に目に乗せるだけ",
    period: "1回",
    resultGood: "目の奥の疲れがほぐれてぐっすり眠れる",
    altHigh: "3000円のアイケア美顔器",
    altBadState: "使った日はいいのに翌朝には疲れが戻ってる",
    effortHigh: "毎晩蒸しタオルを電子レンジで温め直して",
    tag: "快眠グッズ",
    rakutenName: "花王 めぐりズム 蒸気でホットアイマスク 12枚入",
    rakutenUrl: "https://item.rakuten.co.jp/lens-deli/r-4901301348029/",
  },
  {
    name: "携帯トイレ",
    worry: "災害時・停電時のトイレ不足",
    product: "携帯トイレ",
    price: "2500円",
    dailyEffort: "棚に置いておくだけ",
    period: "15年",
    resultGood: "断水しても凝固剤でにおいも漏れも気にせず使える",
    altHigh: "数万円の簡易トイレ設備工事",
    altBadState: "導入しても結局メンテナンスが面倒で放置してる",
    effortHigh: "災害のたびに慌てて携帯トイレを探し回って",
    tag: "防災グッズ",
    rakutenName: "スツーレ 簡易トイレ 凝固剤 15年保存",
    rakutenUrl: "https://item.rakuten.co.jp/dajie/stoole_powder/",
  },
  {
    name: "折りたたみ傘",
    worry: "荷物になる傘の重さ・かさばり",
    product: "折りたたみ傘",
    price: "2000円",
    dailyEffort: "バッグにポンと入れておくだけ",
    period: "1回",
    resultGood: "69gの軽さでバッグの中でも気にならない",
    altHigh: "5000円の長傘ブランド傘",
    altBadState: "重くてかさばるから持ち歩くのをやめてしまってる",
    effortHigh: "毎回天気予報を確認して傘を持つか悩んで",
    tag: "梅雨対策",
    rakutenName: "KIZAWA 東レカーボン折りたたみ傘 最軽量69g",
    rakutenUrl: "https://item.rakuten.co.jp/kizawa/ma5-20-poki/",
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

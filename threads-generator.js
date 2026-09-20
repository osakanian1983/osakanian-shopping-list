const GENRES = [
  {
    name: "洗濯槽クリーナー",
    worry: "洗濯槽のカビ・黒いワカメ",
    product: "洗濯槽クリーナー",
    price: "500円",
    dailyEffort: "20分放置",
    period: "1回",
    resultGood: "黒いワカメが浮いてニオイが消える",
    altHigh: "1万円の洗濯槽クリーニング業者",
    altBadState: "予約が面倒で結局そのまま放置してる",
    effortHigh: "月1で重曹とクエン酸を計量して掃除して",
    amazonName: "洗浄力 シュワッと 洗濯槽クリーナー【4回分】",
    amazonUrl: "https://www.amazon.co.jp/dp/B08YF57GPQ",
  },
  {
    name: "安眠アイマスク",
    worry: "寝つきの悪さ・光での中途覚醒",
    product: "遮光アイマスク",
    price: "1500円",
    dailyEffort: "寝る前につけるだけ",
    period: "3日",
    resultGood: "光を気にせずぐっすり眠れて目覚めもスッキリ",
    altHigh: "1万円の遮光カーテン",
    altBadState: "変えたのに朝日で結局起きてしまう",
    effortHigh: "毎晩スマホの光を我慢しながら目を閉じて",
    amazonName: "Aimeve アイマスク 遮光99.99% 3D立体",
    amazonUrl: "https://www.amazon.co.jp/dp/B09VS6R4KK",
  },
  {
    name: "防災モバイルバッテリー",
    worry: "災害時のスマホ充電切れ",
    product: "大容量モバイルバッテリー",
    price: "4000円",
    dailyEffort: "カバンに入れておくだけ",
    period: "3日",
    resultGood: "停電時も充電切れの不安なく使い続けられる",
    altHigh: "1万円超えのポータブル電源",
    altBadState: "重くて結局置きっぱなしにしてる",
    effortHigh: "非常持ち出し袋の中身を月1で総点検して",
    amazonName: "UGREEN モバイルバッテリー 20000mAh 100W",
    amazonUrl: "https://www.amazon.co.jp/dp/B0C3GTMX5M",
  },
  {
    name: "靴消臭インソール",
    worry: "靴のムレ・足のニオイ",
    product: "消臭インソール",
    price: "1500円",
    dailyEffort: "靴に入れるだけ",
    period: "3日",
    resultGood: "ムレも足のニオイも気にならなくなる",
    altHigh: "1000円の消臭スプレー習慣",
    altBadState: "スプレーしても数時間で臭いが戻る",
    effortHigh: "毎日靴を陰干ししてから消臭スプレーをかけて",
    amazonName: "シリカコンフォート ムレ&足臭対策インソール",
    amazonUrl: "https://www.amazon.co.jp/dp/B0CKS6R6CQ",
  },
  {
    name: "コバエ取り",
    worry: "台所に湧くコバエ",
    product: "電撃殺虫器",
    price: "2500円",
    dailyEffort: "コンセントに挿すだけ",
    period: "3日",
    resultGood: "コバエが寄りつかなくなって台所がずっと快適になる",
    altHigh: "何個も買い足すコバエ取りシート",
    altBadState: "置いても数日でまたコバエが湧いてる",
    effortHigh: "毎日生ゴミをすぐ捨てて対策して",
    amazonName: "encologi 電撃殺虫器 コバエ取り",
    amazonUrl: "https://www.amazon.co.jp/dp/B09BN12C3J",
  },
  {
    name: "ハンドクリーム",
    worry: "手荒れ・乾燥",
    product: "プチプラハンドクリーム",
    price: "1000円",
    dailyEffort: "1日1回塗るだけ",
    period: "3日",
    resultGood: "手のカサカサが気にならなくなってベタつかない",
    altHigh: "美容皮膚科の高級保湿クリーム",
    altBadState: "通うのが大変で結局続けられてない",
    effortHigh: "毎晩ハンドパックに20分かけて",
    amazonName: "SADOER ミニハンドクリームセット 30g×13本",
    amazonUrl: "https://www.amazon.co.jp/dp/B0CNXLDBCN",
  },
  {
    name: "ブルーライトカットメガネ",
    worry: "PC作業での目の疲れ",
    product: "ブルーライトカットメガネ",
    price: "2000円",
    dailyEffort: "仕事中かけるだけ",
    period: "3日",
    resultGood: "目の疲れが軽くなって頭痛も減る",
    altHigh: "5000円の遠近両用PC用メガネ",
    altBadState: "高いのに結局目の疲れが変わらない",
    effortHigh: "1時間ごとに目を閉じて休憩して",
    amazonName: "Gracewell ブルーライトカットメガネ",
    amazonUrl: "https://www.amazon.co.jp/dp/B09HKP4FJ4",
  },
  {
    name: "ハンディクリーナー",
    worry: "車内やデスク周りの細かいゴミ",
    product: "ハンディクリーナー",
    price: "3000円",
    dailyEffort: "気になった時にサッと使うだけ",
    period: "3日",
    resultGood: "車内もデスクもゴミひとつなく快適に",
    altHigh: "月3000円の洗車機掃除機コース",
    altBadState: "手間で結局埃が溜まってる",
    effortHigh: "週末に大きい掃除機を出してきて掃除して",
    amazonName: "アイリスオーヤマ ハンディクリーナー AZ-HCD-21",
    amazonUrl: "https://www.amazon.co.jp/dp/B0CKVWT2Y6",
  },
  {
    name: "お風呂カビ取りジェル",
    worry: "お風呂の黒カビ",
    product: "カビ取りジェル",
    price: "700円",
    dailyEffort: "パッキンに塗って放置するだけ",
    period: "1回",
    resultGood: "頑固な黒カビがスルッと落ちる",
    altHigh: "2万円の浴室クリーニング業者",
    altBadState: "予約や費用がネックで結局黒カビ放置してる",
    effortHigh: "毎週ブラシでゴシゴシこすり洗いして",
    amazonName: "激落ちくん 黒カビくん カビ取りジェル 200g",
    amazonUrl: "https://www.amazon.co.jp/dp/B075NFKSL1",
  },
  {
    name: "ペット毛粘着クリーナー",
    worry: "ソファやカーペットのペットの毛",
    product: "粘着クリーナー",
    price: "500円",
    dailyEffort: "1日1分コロコロするだけ",
    period: "3日",
    resultGood: "服にもソファにも毛が付かなくなる",
    altHigh: "3万円のペット対応ロボット掃除機",
    altBadState: "毛が絡まって結局手放してる",
    effortHigh: "毎日粘着ローラーを何十往復もかけて",
    amazonName: "粘着クリーナー 猫用犬用 ペット抜け毛クリーナー",
    amazonUrl: "https://www.amazon.co.jp/dp/B08HYG3S7D",
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

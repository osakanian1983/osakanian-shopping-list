const GENRES = [
  {
    name: "フェイスローラー",
    worry: "顔のむくみ・たるみ",
    product: "フェイスローラー",
    price: "3000円",
    dailyEffort: "お風呂上がりに1分コロコロするだけ",
    period: "1週間",
    resultGood: "顔がスッキリ引き締まって小顔に見える",
    altHigh: "1万円のフェイシャルエステ",
    altBadState: "施術直後はいいのに翌日にはむくみが戻ってる",
    effortHigh: "毎晩自分の手で念入りに顔をマッサージして",
    tag: "美容",
    rakutenName: "AIMUSE 美顔ローラー 微弱電流 SGS安全認証",
    rakutenUrl: "https://item.rakuten.co.jp/ai-corp/hs-mr001awjp/",
  },
  {
    name: "骨盤矯正ベルト",
    worry: "産後・在宅ワークでの腰まわりの緩み",
    product: "骨盤矯正ベルト",
    price: "2500円",
    dailyEffort: "巻いて過ごすだけ",
    period: "3日",
    resultGood: "お腹まわりが引き締まって姿勢もラクになる",
    altHigh: "月1万円の骨盤矯正サロン",
    altBadState: "施術直後はいいのに数日で姿勢が戻ってる",
    effortHigh: "毎日意識して腹筋やストレッチを頑張って",
    tag: "ダイエット",
    rakutenName: "Vi-Bel 骨盤矯正ベルト 日本製",
    rakutenUrl: "https://item.rakuten.co.jp/bakaure-onlineshop/b0025/",
  },
  {
    name: "コードレス卓上クリーナー",
    worry: "デスクに散らかる消しカスやパンくず",
    product: "コードレス卓上クリーナー",
    price: "1800円",
    dailyEffort: "スイッチ入れてサッとなぞるだけ",
    period: "1回",
    resultGood: "デスクがサッと片付いて作業に集中できる",
    altHigh: "3万円の大型掃除機",
    altBadState: "出すのが面倒で結局そのまま放置してる",
    effortHigh: "毎回ほうきとちりとりを出して掃いて",
    tag: "時短家電",
    rakutenName: "Scramble 卓上クリーナー USB充電式ハンディクリーナー",
    rakutenUrl: "https://item.rakuten.co.jp/scramble/dk-1/",
  },
  {
    name: "突っ張り棒",
    worry: "クローゼットや玄関の収納スペース不足",
    product: "突っ張り棒",
    price: "1000円",
    dailyEffort: "挟んで固定するだけ",
    period: "1回",
    resultGood: "空間を無駄なく使えて収納力が2倍になる",
    altHigh: "月3000円のトランクルーム",
    altBadState: "借りても結局荷物が増え続けてる",
    effortHigh: "収納棚を新しく買って設置工事して",
    tag: "収納",
    rakutenName: "快適収納堂 突っ張り棒 楽天10冠 強力タイプ",
    rakutenUrl: "https://item.rakuten.co.jp/kaiteki-shunou/rr04-ssg32110200/",
  },
  {
    name: "静電気防止ヘアブラシ",
    worry: "冬の乾燥でパチパチ広がる髪",
    product: "静電気防止ヘアブラシ",
    price: "1500円",
    dailyEffort: "いつも通りとかすだけ",
    period: "1回",
    resultGood: "髪がまとまってツヤも出てサラサラになる",
    altHigh: "5000円の高級ヘアオイル",
    altBadState: "塗った直後はいいのにすぐ広がりが戻ってる",
    effortHigh: "毎朝スタイリング剤を何度も付け直して",
    tag: "ヘアケア",
    rakutenName: "コモライフ 静電気防止ヘアブラシ 日本製",
    rakutenUrl: "https://item.rakuten.co.jp/sakulife/b0djctsl9x/",
  },
  {
    name: "充電式湯たんぽ",
    worry: "冬の寝る前の足先の冷え",
    product: "充電式湯たんぽ",
    price: "2000円",
    dailyEffort: "充電して抱えるだけ",
    period: "1回",
    resultGood: "お湯を沸かさず足先までポカポカになる",
    altHigh: "月5000円の電気代がかさむ電気毛布",
    altBadState: "つけっぱなしで電気代だけ増えてる",
    effortHigh: "毎晩お湯を沸かして湯たんぽに入れ替えて",
    tag: "冷え対策",
    rakutenName: "スリーアップ 充電式湯たんぽ ぬくぬく",
    rakutenUrl: "https://item.rakuten.co.jp/hondakagu/58-386-024/",
  },
  {
    name: "電動鼻水吸引器",
    worry: "子どもの鼻づまりで寝られない夜",
    product: "電動鼻水吸引器",
    price: "4000円",
    dailyEffort: "鼻に当ててスイッチを押すだけ",
    period: "1回",
    resultGood: "鼻がスッキリ通って子どももぐっすり眠れる",
    altHigh: "月3000円の耳鼻科通い",
    altBadState: "通院した直後はいいのにまたすぐ鼻づまりに戻ってる",
    effortHigh: "毎回口で吸うタイプの吸引器を頑張って使って",
    tag: "育児グッズ",
    rakutenName: "BabySmile 電動鼻水吸引器 メルシーポット S-505",
    rakutenUrl: "https://item.rakuten.co.jp/seastar/0000002336/",
  },
  {
    name: "ブルーライトカットメガネ",
    worry: "長時間のPC作業による目の疲れ",
    product: "ブルーライトカットメガネ",
    price: "2000円",
    dailyEffort: "かけて仕事するだけ",
    period: "1回",
    resultGood: "目の疲れが軽くなって夕方まで集中力が続く",
    altHigh: "3000円の目薬",
    altBadState: "差した直後はいいのにすぐ目の疲れが戻ってる",
    effortHigh: "作業の合間に何度も目を休めようとして",
    tag: "デスクワーク",
    rakutenName: "VANPUP ブルーライトカットメガネ 楽天1位",
    rakutenUrl: "https://item.rakuten.co.jp/vanpup/san6/",
  },
  {
    name: "ペット自動給水器",
    worry: "留守番中の愛猫・愛犬の水分不足",
    product: "ペット自動給水器",
    price: "3500円",
    dailyEffort: "水を入れておくだけ",
    period: "1回",
    resultGood: "留守番中もいつでも新鮮な水が飲めて安心",
    altHigh: "月2000円のペットシッター",
    altBadState: "頼んだ日はいいのに毎日は頼めず心配なまま",
    effortHigh: "毎日出かける前に何個も水入れを用意して",
    tag: "ペット用品",
    rakutenName: "Next 超静音自動給水器 コードレス",
    rakutenUrl: "https://item.rakuten.co.jp/next-online/10000184/",
  },
  {
    name: "接触冷感ネッククーラー",
    worry: "夏の外出時の首元の暑さ・熱中症リスク",
    product: "接触冷感ネッククーラー",
    price: "1500円",
    dailyEffort: "首に掛けるだけ",
    period: "1回",
    resultGood: "22℃のひんやり感が長時間続いて涼しく過ごせる",
    altHigh: "1万円の扇風機",
    altBadState: "持ち歩いても手が塞がって結局使わなくなってる",
    effortHigh: "何度も保冷剤をタオルで巻いて首に当てて",
    tag: "暑さ対策",
    rakutenName: "めちゃクール 22℃ クールリング首 ネッククーラー",
    rakutenUrl: "https://item.rakuten.co.jp/allegretto/mcnb22-cp1/",
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

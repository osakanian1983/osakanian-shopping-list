const GENRES = [
  {
    name: "舌クリーナー",
    worry: "朝の口臭・舌の白い汚れ",
    product: "舌クリーナー",
    price: "700円",
    dailyEffort: "朝10秒磨くだけ",
    period: "3日",
    resultGood: "口臭が気にならなくなって息がスッキリ",
    altHigh: "3000円のマウスウォッシュ",
    altBadState: "使っても数時間で口臭が戻ってる",
    effortHigh: "毎食後に念入りに歯磨きして",
    tag: "口臭ケア",
    rakutenName: "グリーンベル 舌クリーナー グッドデザイン受賞モデル",
    rakutenUrl: "https://item.rakuten.co.jp/green-bell/sitakuri-na-/",
  },
  {
    name: "花粉ブロックスプレー",
    worry: "外出先での花粉の侵入",
    product: "花粉ブロックスプレー",
    price: "900円",
    dailyEffort: "出かける前にシュッとするだけ",
    period: "3日",
    resultGood: "マスクの中まで花粉が来なくなる",
    altHigh: "5000円の高性能空気清浄機",
    altBadState: "部屋は快適でも外出先でくしゃみが出る",
    effortHigh: "毎日帰宅後すぐ服をはたいて着替えて",
    tag: "花粉対策",
    rakutenName: "アース製薬 アレルブロック 花粉ガードスプレー モイストヴェール",
    rakutenUrl: "https://item.rakuten.co.jp/tomods-ap/4901080576910/",
  },
  {
    name: "卓上加湿器",
    worry: "デスク周りの乾燥・喉のイガイガ",
    product: "卓上加湿器",
    price: "2200円",
    dailyEffort: "USBに挿しておくだけ",
    period: "3日",
    resultGood: "喉のイガイガが減って肌の乾燥も気にならなくなる",
    altHigh: "1万円の大型加湿器",
    altBadState: "置き場所に困って結局しまい込んでる",
    effortHigh: "毎日給水と掃除に手間をかけて",
    tag: "乾燥対策",
    rakutenName: "モイストリー USB卓上加湿器",
    rakutenUrl: "https://item.rakuten.co.jp/emblstore/4526858066198/",
  },
  {
    name: "布団圧縮袋",
    worry: "クローゼットの中の布団のかさばり",
    product: "布団圧縮袋",
    price: "900円",
    dailyEffort: "掃除機で10分吸うだけ",
    period: "1回",
    resultGood: "布団が3分の1にまとまって収納がスッキリする",
    altHigh: "月2000円のトランクルーム",
    altBadState: "借りても結局荷物が増え続けてる",
    effortHigh: "季節ごとに布団を丸めて紐で縛って",
    tag: "収納",
    rakutenName: "リビングート 神ワザバルブ 布団圧縮袋L 2枚入り",
    rakutenUrl: "https://item.rakuten.co.jp/livingut/366714/",
  },
  {
    name: "毛穴吸引器",
    worry: "鼻の黒ずみ・角栓",
    product: "毛穴吸引器",
    price: "3480円",
    dailyEffort: "週2回3分当てるだけ",
    period: "1週間",
    resultGood: "鼻の黒ずみが目立たなくなって毛穴が引き締まる",
    altHigh: "1万円のエステの毛穴吸引コース",
    altBadState: "通うのが続かず結局黒ずみが戻ってる",
    effortHigh: "毎晩指で角栓を押し出そうとして",
    tag: "毛穴ケア",
    rakutenName: "NIPLUX マルチスキンクリーナー 水流式毛穴吸引",
    rakutenUrl: "https://item.rakuten.co.jp/nissoplus/np-msc25/",
  },
  {
    name: "低反発枕",
    worry: "朝起きた時の首や肩の痛み",
    product: "低反発枕",
    price: "3500円",
    dailyEffort: "いつも通り寝るだけ",
    period: "3日",
    resultGood: "首や肩が軽くなって朝の目覚めがスッキリする",
    altHigh: "2万円のオーダーメイド枕",
    altBadState: "高いお金払ったのに結局合わずに戻してる",
    effortHigh: "毎晩バスタオルを畳んで高さを調整して",
    tag: "快眠グッズ",
    rakutenName: "HOMFINE 低反発枕 4段階高さ調整",
    rakutenUrl: "https://item.rakuten.co.jp/homfine/hfj013-38/",
  },
  {
    name: "非常食セット",
    worry: "災害時の食料備蓄不足",
    product: "非常食セット",
    price: "4500円",
    dailyEffort: "棚に置いておくだけ",
    period: "3日",
    resultGood: "いざという時も5年間安心して備えられる",
    altHigh: "毎月買い足すローリングストック食品",
    altBadState: "賞味期限が切れて結局無駄にしてる",
    effortHigh: "毎月備蓄食品の賞味期限を確認して入れ替えて",
    tag: "防災グッズ",
    rakutenName: "防災・非常食の専門店らいぷら 7日間非常食セットB 5年保存",
    rakutenUrl: "https://item.rakuten.co.jp/lifestoreplus/ls13378/",
  },
  {
    name: "換気扇フィルター",
    worry: "キッチンの換気扇の油汚れ",
    product: "換気扇フィルター",
    price: "900円",
    dailyEffort: "貼り替えるだけ",
    period: "1回",
    resultGood: "油汚れがフィルターに溜まって本体がキレイなまま",
    altHigh: "8000円の換気扇業者",
    altBadState: "予約が面倒で結局油汚れを放置してる",
    effortHigh: "毎月換気扇を分解して油汚れをゴシゴシ洗って",
    tag: "掃除・時短家事",
    rakutenName: "東洋アルミ フィルたん レンジフードフィルター 貼るだけ",
    rakutenUrl: "https://item.rakuten.co.jp/badasai/4901987227830/",
  },
  {
    name: "撥水スプレー",
    worry: "雨の日の靴や鞄の水シミ",
    product: "撥水スプレー",
    price: "800円",
    dailyEffort: "お出かけ前にシュッとするだけ",
    period: "1回",
    resultGood: "雨の日も水を弾いて靴も鞄もシミにならない",
    altHigh: "1万円の防水加工ブランド靴",
    altBadState: "高いのに雨で色落ちしたりシミになってる",
    effortHigh: "濡れるたびに乾いたタオルで拭き取って",
    tag: "梅雨対策",
    rakutenName: "コロンブス 防水スプレー アメダス420ml",
    rakutenUrl: "https://item.rakuten.co.jp/i-need-more-shoes/10009003/",
  },
  {
    name: "フォームローラー",
    worry: "ふくらはぎのむくみ・脚の疲れ",
    product: "フォームローラー",
    price: "2500円",
    dailyEffort: "1日3分コロコロ転がすだけ",
    period: "1週間",
    resultGood: "脚のむくみが軽くなって夕方も脚がスッキリ",
    altHigh: "月1万円のリンパマッサージ",
    altBadState: "通うのが続かず結局むくみが戻ってる",
    effortHigh: "毎晩お風呂上がりに手で30分脚を揉んで",
    tag: "むくみケア",
    rakutenName: "AOBAX 筋膜リリースローラー むくみ脚やせ",
    rakutenUrl: "https://item.rakuten.co.jp/aobax/aobamasarora/",
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

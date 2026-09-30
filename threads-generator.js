const GENRES = [
  {
    name: "コンパクトホットプレート",
    worry: "洗い物が増える鍋料理の後片付け",
    product: "コンパクトホットプレート",
    price: "5,000円",
    dailyEffort: "食材を並べてスイッチを入れるだけ",
    period: "1回",
    resultGood: "卓上で焼きたてをそのまま楽しめる",
    altHigh: "3,000円の出前",
    altBadState: "頼んでも結局洗い物は残ったまま",
    effortHigh: "大きい鍋とフライパンを何個も洗って",
    amazonName: "BRUNO コンパクトホットプレート",
    amazonUrl: "https://www.amazon.co.jp/BRUNO-BOE021-WH-%E3%82%B3%E3%83%B3%E3%83%91%E3%82%AF%E3%83%88%E3%83%9B%E3%83%83%E3%83%88%E3%83%97%E3%83%AC%E3%83%BC%E3%83%88-%E3%83%9B%E3%83%AF%E3%82%A4%E3%83%88/dp/B00TRQSURS",
  },
  {
    name: "電動ミルクフォーマー",
    worry: "お店みたいな泡のカフェラテが作れない",
    product: "電動ミルクフォーマー",
    price: "1,600円",
    dailyEffort: "ミルクに入れてボタンを押すだけ",
    period: "1杯",
    resultGood: "きめ細かい泡のラテが自宅で飲める",
    altHigh: "600円のカフェラテ",
    altBadState: "買っても結局家では薄い泡のまま",
    effortHigh: "泡立て器で腕が疲れるまで振って",
    amazonName: "PHIEKA 電動ミルクフォーマー",
    amazonUrl: "https://www.amazon.co.jp/PHIEKA-%E3%83%9F%E3%83%AB%E3%82%AF%E3%83%95%E3%82%A9%E3%83%BC%E3%83%9E%E3%83%BC-%E3%83%9F%E3%83%AB%E3%82%AF%E6%B3%A1%E7%AB%8B%E3%81%A6%E5%99%A8-%E3%80%9010%E7%A7%92%E3%81%A7%E3%81%B5%E3%82%8F%E3%81%A3%E3%81%B5%E3%82%8F%E6%B3%A1%E3%80%91-USB%E5%85%85%E9%9B%BB%E5%BC%8F/dp/B08G8GQQQM",
  },
  {
    name: "LED拡大鏡ミラー",
    worry: "メイクの仕上がりが暗いと分からない",
    product: "LED拡大鏡ミラー",
    price: "2,700円",
    dailyEffort: "置いてライトをつけるだけ",
    period: "1日",
    resultGood: "細部までくっきり見えて仕上がる",
    altHigh: "5,000円のメイクレッスン",
    altBadState: "通っても自宅では見えづらい",
    effortHigh: "スマホのライトを顔に当てながら鏡を見て",
    amazonName: "KEYUCA 拡大鏡付きLEDスタンドミラー",
    amazonUrl: "https://www.amazon.co.jp/KEYUCA-%E3%82%B1%E3%83%A6%E3%82%AB-%E6%8B%A1%E5%A4%A7%E9%8F%A1%E4%BB%98-%E3%82%B9%E3%82%BF%E3%83%B3%E3%83%89%E3%83%9F%E3%83%A9%E3%83%BC-%E3%82%B9%E3%83%AA%E3%83%A0%E3%82%B9%E3%82%BF%E3%83%B3%E3%83%89/dp/B09VNHJ8ZJ",
  },
  {
    name: "自動猫給餌器",
    worry: "外出中に猫のご飯の時間が気になる",
    product: "自動猫給餌器",
    price: "6,000円",
    dailyEffort: "タイマーを設定するだけ",
    period: "1日",
    resultGood: "外出中も決まった時間にご飯があげられる",
    altHigh: "3,000円のペットシッター",
    altBadState: "頼んでも結局時間が気になる",
    effortHigh: "外出先から急いで帰ってご飯をあげて",
    amazonName: "エレコム 自動給餌器 PET-AF01BK",
    amazonUrl: "https://www.amazon.co.jp/%E3%82%A8%E3%83%AC%E3%82%B3%E3%83%A0-%E7%B4%842-2kg-%E3%82%BF%E3%82%A4%E3%83%9E%E3%83%BC%E6%A9%9F%E8%83%BD%E4%BB%98-%E5%B9%85192%C3%97%E5%A5%A5%E8%A1%8C364%C3%97%E9%AB%98%E3%81%95281-5mm-PET-AF01BK/dp/B0CQ4THGX2",
  },
  {
    name: "電動ワインオープナー",
    worry: "コルクが固くて開けるのに毎回苦戦する",
    product: "電動ワインオープナー",
    price: "2,500円",
    dailyEffort: "ボタンを押して待つだけ",
    period: "1本",
    resultGood: "力を使わず数秒でスッと栓が抜ける",
    altHigh: "2,000円のナイフ",
    altBadState: "買っても結局コルクと格闘する",
    effortHigh: "テコの力で何度も引っ張って",
    amazonName: "Felio 電動ワインオープナー F0106",
    amazonUrl: "https://www.amazon.co.jp/%E3%83%AF%E3%82%A4%E3%83%B3%E3%82%AA%E3%83%BC%E3%83%97%E3%83%8A%E3%83%BC-%E3%82%B3%E3%83%AB%E3%82%AF%E8%87%AA%E5%8B%95%E5%BC%95%E3%81%8D%E6%8A%9C%E3%81%8D-%E3%83%95%E3%82%A9%E3%82%A4%E3%83%AB%E3%82%AB%E3%83%83%E3%82%BF%E3%83%BC%E4%BB%98%E3%81%8D-USB%E3%82%B3%E3%83%BC%E3%83%89%E4%BB%98%E3%81%8D-F0106/dp/B07WRVW5Z5",
  },
  {
    name: "酔い止めリストバンド",
    worry: "車や船に乗るとすぐ気持ち悪くなる",
    product: "酔い止めリストバンド",
    price: "1,500円",
    dailyEffort: "手首につけるだけ",
    period: "1回",
    resultGood: "移動中も気持ち悪くならずに過ごせる",
    altHigh: "500円の酔い止め薬",
    altBadState: "飲んでも結局眠気で移動中ぼーっとする",
    effortHigh: "窓を開けて必死に酔いを我慢して",
    amazonName: "Presby スッキリバンド 酔い止めリストバンド",
    amazonUrl: "https://www.amazon.co.jp/%E3%82%B9%E3%83%83%E3%82%AD%E3%83%AA%E3%83%90%E3%83%B3%E3%83%89-%E9%85%94%E3%81%84%E6%AD%A2%E3%82%81%E3%83%90%E3%83%B3%E3%83%89-%E3%83%84%E3%83%9C%E6%8C%87%E5%9C%A7%E3%83%AA%E3%82%B9%E3%83%88%E3%83%90%E3%83%B3%E3%83%89-%E9%85%94%E3%81%84%E6%AD%A2%E3%82%81%E3%82%B0%E3%83%83%E3%82%BA-%E5%AD%90%E4%BE%9B%E7%94%A8%E3%83%BB3%E6%AD%B3%EF%BD%9E%E5%B0%8F%E5%AD%A6%E6%A0%A1%E9%AB%98%E5%AD%A6%E5%B9%B4/dp/B0CQJRLVKV",
  },
  {
    name: "電気毛布",
    worry: "布団に入ってもなかなか足先が温まらない",
    product: "電気毛布",
    price: "4,000円",
    dailyEffort: "スイッチを入れて掛けるだけ",
    period: "1晩",
    resultGood: "布団に入った瞬間からぽかぽか眠れる",
    altHigh: "1万円の暖房器具",
    altBadState: "つけても結局足先だけ冷たいまま",
    effortHigh: "湯たんぽを毎晩お湯から用意して",
    amazonName: "アイリスオーヤマ 電気毛布(丸洗いOK)",
    amazonUrl: "https://www.amazon.co.jp/%E3%82%A2%E3%82%A4%E3%83%AA%E3%82%B9%E3%82%AA%E3%83%BC%E3%83%A4%E3%83%9E-%E3%80%90%E4%B8%B8%E6%B4%97%E3%81%84OK%E3%80%91-%E9%9B%BB%E6%B0%97%E6%95%B7%E3%81%8D%E6%AF%9B%E5%B8%83-140%C3%9780cm-EHB-1408-T/dp/B074P2HDPJ",
  },
  {
    name: "活動量計スマートウォッチ",
    worry: "運動不足でも今の自分の状態が分からない",
    product: "活動量計スマートウォッチ",
    price: "2,000円",
    dailyEffort: "着けておくだけで自動記録",
    period: "1週間",
    resultGood: "歩数も睡眠も一目で把握できる",
    altHigh: "1万円の人間ドック",
    altBadState: "受けても結局日々の変化は分からないまま",
    effortHigh: "毎日手帳に歩数と睡眠時間をメモして",
    amazonName: "Broadwatch 活動量計スマートウォッチ",
    amazonUrl: "https://www.amazon.co.jp/Broadwatch-%E3%82%B9%E3%83%9E%E3%83%BC%E3%83%88%E3%82%A6%E3%82%A9%E3%83%83%E3%83%81-%E3%82%B9%E3%83%9D%E3%83%BC%E3%83%84%E3%82%A6%E3%82%A9%E3%83%83%E3%83%81-%E5%90%84%E7%A8%AE%E3%83%88%E3%83%AC%E3%83%BC%E3%83%8B%E3%83%B3%E3%82%B0%E3%83%A2%E3%83%BC%E3%83%89%E6%90%AD%E8%BC%89-Android%E5%AF%BE%E5%BF%9C/dp/B09WMPPS7J",
  },
  {
    name: "くせ毛矯正ヘアクリップ",
    worry: "ドライヤーだけだとうねりが残る",
    product: "くせ毛矯正ヘアクリップ",
    price: "1,200円",
    dailyEffort: "乾かす前に髪を挟むだけ",
    period: "1回",
    resultGood: "根元からまっすぐな髪に仕上がる",
    altHigh: "5,000円の縮毛矯正",
    altBadState: "かけても結局梅雨時期はうねる",
    effortHigh: "毎朝アイロンを何度も髪に通して",
    amazonName: "KISARG ダックカールクリップ 3個セット",
    amazonUrl: "https://www.amazon.co.jp/KISARG-%E3%83%98%E3%82%A2%E3%82%AF%E3%83%AA%E3%83%83%E3%83%97-%E3%83%80%E3%83%83%E3%82%AF%E3%82%AB%E3%83%BC%E3%83%AB-%E3%83%96%E3%83%AD%E3%83%83%E3%82%AD%E3%83%B3%E3%82%B0%E7%94%A8-%E3%83%AC%E3%83%87%E3%82%A3%E3%83%BC%E3%82%B9%E5%85%BC%E7%94%A8/dp/B09G1CRLJJ",
  },
  {
    name: "折りたたみ食器乾燥ラック",
    worry: "シンク周りが洗い物でいつも散らかる",
    product: "折りたたみラック",
    price: "2,500円",
    dailyEffort: "使わない時は畳んでしまうだけ",
    period: "1日",
    resultGood: "シンク周りがすっきり片付いたまま保てる",
    altHigh: "5万円のリフォーム",
    altBadState: "しても結局置き場所に迷って散らかる",
    effortHigh: "洗った食器を毎回タオルの上に並べて",
    amazonName: "Longzon 折りたたみ水切りラック",
    amazonUrl: "https://www.amazon.co.jp/%E6%B0%B4%E5%88%87%E3%82%8A%E3%83%A9%E3%83%83%E3%82%AF-%E6%8A%98%E3%82%8A%E3%81%9F%E3%81%9F%E3%81%BF-longzon-%E3%82%AD%E3%83%83%E3%83%81%E3%83%B3%E7%94%A8%E5%93%81-%E9%8C%86%E3%81%B3%E3%81%AB%E3%81%8F%E3%81%84/dp/B07F7R93C1",
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

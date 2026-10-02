const GENRES = [
  {
    name: "アロマディフューザー",
    worry: "部屋の乾燥と香りの物足りなさを感じる",
    product: "アロマディフューザー",
    price: "3,000円",
    dailyEffort: "水とオイルを入れてスイッチを押すだけ",
    period: "1晩",
    resultGood: "部屋が潤っていい香りに包まれる",
    altHigh: "5,000円のキャンドル",
    altBadState: "焚いても結局すぐ乾燥が気になる",
    effortHigh: "加湿器とアロマポットを別々に用意して",
    amazonName: "エレコム アロマディフューザー加湿器 エクリアミスト",
    amazonUrl: "https://www.amazon.co.jp/%E3%80%902022%E5%B9%B4%E3%83%A2%E3%83%87%E3%83%AB%E3%80%91%E3%82%A8%E3%83%AC%E3%82%B3%E3%83%A0-%E3%82%A2%E3%83%AD%E3%83%9E%E3%83%87%E3%82%A3%E3%83%95%E3%83%A5%E3%83%BC%E3%82%B6%E3%83%BC-%E3%82%A8%E3%82%AF%E3%83%AA%E3%82%A2%E3%83%9F%E3%82%B9%E3%83%88-%E7%B4%841-8L-%E7%B4%845-5%E7%95%B3/dp/B0B8MD8K6L",
  },
  {
    name: "ベビーゲート",
    worry: "ハイハイ期の赤ちゃんが階段に近づいて怖い",
    product: "ベビーゲート",
    price: "6,000円",
    dailyEffort: "一度取り付ければ開閉するだけ",
    period: "1日",
    resultGood: "目を離した隙も安心して過ごせる",
    altHigh: "3万円のリフォーム工事",
    altBadState: "しても結局扉の建て付けは変わらない",
    effortHigh: "赤ちゃんから一瞬も目を離さず見張って",
    amazonName: "アイリスプラザ ベビー&ペットゲート",
    amazonUrl: "https://www.amazon.co.jp/%E3%82%A2%E3%82%A4%E3%83%AA%E3%82%B9%E3%83%97%E3%83%A9%E3%82%B6-%E3%83%9A%E3%83%83%E3%83%88%E3%82%B2%E3%83%BC%E3%83%88-%E3%83%8F%E3%82%A4%E3%82%BF%E3%82%A4%E3%83%97-%E9%AB%98%E3%81%95112cm-%E8%A8%AD%E7%BD%AE%E5%B9%8575-85cm/dp/B09NY792K4",
  },
  {
    name: "猫の爪とぎポスト",
    worry: "壁や家具で爪とぎされて傷だらけ",
    product: "猫の爪とぎポスト",
    price: "4,000円",
    dailyEffort: "部屋に置いておくだけ",
    period: "1日",
    resultGood: "壁じゃなくポストで爪とぎしてくれる",
    altHigh: "2万円の壁紙張り替え",
    altBadState: "しても結局また爪とぎで傷つく",
    effortHigh: "爪とぎのたびに猫を抱えて引き離して",
    amazonName: "Amazon Basics 猫の爪とぎポスト",
    amazonUrl: "https://www.amazon.co.jp/Amazon%E3%83%99%E3%83%BC%E3%82%B7%E3%83%83%E3%82%AF-%E3%82%AD%E3%83%A3%E3%83%83%E3%83%88%E3%82%BF%E3%83%AF%E3%83%BC-%E3%83%9F%E3%83%87%E3%82%A3%E3%82%A2%E3%83%A0-%E3%82%B9%E3%82%AF%E3%83%A9%E3%83%83%E3%83%81%E3%83%9D%E3%82%B9%E3%83%88-41%C3%9741%C3%9781cm/dp/B07G3GVBV7",
  },
  {
    name: "キューティクルオイルペン",
    worry: "甘皮がガサガサで指先の印象が悪い",
    product: "キューティクルオイルペン",
    price: "2,000円",
    dailyEffort: "甘皮にペンで塗るだけ",
    period: "1回",
    resultGood: "指先が柔らかく整う",
    altHigh: "4,000円のサロンケア",
    altBadState: "通っても自宅ではまたガサガサに戻る",
    effortHigh: "ハンドクリームを何度も塗り込んで",
    amazonName: "OPI プロスパ キューティクルオイルペン",
    amazonUrl: "https://www.amazon.co.jp/%E3%80%90%E3%82%BB%E3%83%83%E3%83%88%E8%B2%B7%E3%81%84%E3%80%91OPI-%E3%82%AF%E3%83%AA%E3%82%A2%E3%83%94%E3%83%B3%E3%82%AF-%E3%83%8D%E3%82%A4%E3%83%AB%E3%82%A8%E3%83%B3%E3%83%93%E3%83%BC%CE%B1%E3%82%AF%E3%83%AA%E3%82%A2-%E3%83%8D%E3%82%A4%E3%83%AB%E3%82%AA%E3%82%A4%E3%83%AB-%E3%82%AD%E3%83%A5%E3%83%BC%E3%83%86%E3%82%A3%E3%82%AF%E3%83%AB%E3%82%AA%E3%82%A4%E3%83%AB/dp/B0DCG61B1L",
  },
  {
    name: "接触冷感敷きパッド",
    worry: "寝苦しくて夜中に何度も目が覚める",
    product: "接触冷感敷きパッド",
    price: "3,000円",
    dailyEffort: "敷いて寝るだけ",
    period: "1晩",
    resultGood: "ひんやりして朝まで熟睡できる",
    altHigh: "5万円のエアコン買い替え",
    altBadState: "しても結局寝苦しさは変わらない",
    effortHigh: "保冷剤をタオルに包んで抱えて寝て",
    amazonName: "接触冷感敷きパッド Q-MAX0.5",
    amazonUrl: "https://www.amazon.co.jp/Q-MAX0-5-%E3%83%99%E3%83%83%E3%83%89%E3%83%91%E3%83%83%E3%83%89-%E5%9B%9B%E9%9A%85%E3%82%B4%E3%83%A0%E3%83%90%E3%83%B3%E3%83%89%E4%BB%98%E3%81%8D-%E3%82%AA%E3%83%BC%E3%83%AB%E3%82%B7%E3%83%BC%E3%82%BA%E3%83%B3-120%C3%97205cm/dp/B0H6JMHMCX",
  },
  {
    name: "ハンズフリー傘ホルダー",
    worry: "雨の日にベビーカーを押しながら傘もさせない",
    product: "ハンズフリー傘ホルダー",
    price: "3,000円",
    dailyEffort: "ベビーカーに取り付けるだけ",
    period: "1回",
    resultGood: "両手が空いたまま移動できる",
    altHigh: "1万円のレインカバー",
    altBadState: "買っても結局片手がふさがる",
    effortHigh: "傘を顎と肩で挟んで押して",
    amazonName: "GLIDER ハンズフリー傘ホルダー",
    amazonUrl: "https://www.amazon.co.jp/GLIDER-%E3%83%8F%E3%83%B3%E3%82%BA%E3%83%95%E3%83%AA%E3%83%BC-%E5%82%98%E3%83%9B%E3%83%AB%E3%83%80%E3%83%BC-%E3%83%88%E3%83%AC%E3%83%83%E3%82%AD%E3%83%B3%E3%82%B0-GLD5629MJ228J/dp/B0BCPK34JT",
  },
  {
    name: "ジェルネイルシール",
    worry: "自分でジェルネイルを塗るのが難しい",
    product: "ジェルネイルシール",
    price: "1,500円",
    dailyEffort: "爪に貼ってやすりで整えるだけ",
    period: "1回",
    resultGood: "サロン級の仕上がりが自宅で完成する",
    altHigh: "6,000円のネイルサロン",
    altBadState: "通っても次に伸びたらまた同じ出費",
    effortHigh: "マニキュアを乾くまで何度も重ね塗りして",
    amazonName: "DANNI&TONI ジェルネイルシール",
    amazonUrl: "https://www.amazon.co.jp/DANNI%EF%BC%86TONI-%E3%82%B8%E3%82%A7%E3%83%AB%E3%83%8D%E3%82%A4%E3%83%AB%E3%82%B7%E3%83%BC%E3%83%AB-%E7%94%B7%E5%A5%B3%E5%85%BC%E7%94%A8%E5%8D%8A%E7%A1%AC%E5%8C%96%E3%82%BF%E3%82%A4%E3%83%97-%E3%82%AA%E3%83%95%E3%82%A3%E3%82%B9%E5%90%91%E3%81%91%E9%80%9A%E5%8B%A4-%E3%82%B7%E3%83%B3%E3%83%97%E3%83%AB%E8%B2%BC%E3%81%A3%E3%81%A6%E5%9B%BA%E3%82%81%E3%82%8B/dp/B09Q52BJ8K",
  },
  {
    name: "ベビーカーオーガナイザー",
    worry: "ベビーカーに荷物をかけると手が塞がる",
    product: "ベビーカーオーガナイザー",
    price: "2,000円",
    dailyEffort: "ハンドルに取り付けるだけ",
    period: "1日",
    resultGood: "荷物が収まり両手が自由になる",
    altHigh: "1万円のマザーズバッグ",
    altBadState: "買っても結局取っ手はふさがる",
    effortHigh: "荷物を肩にかけながら片手で押して",
    amazonName: "TODU ベビーカーオーガナイザー",
    amazonUrl: "https://www.amazon.co.jp/TODU-%E3%83%99%E3%83%93%E3%83%BC%E3%82%AB%E3%83%BC%E7%94%A8%E3%83%90%E3%83%83%E3%82%B0-%E3%82%AA%E3%83%BC%E3%82%AC%E3%83%8A%E3%82%A4%E3%82%B6%E3%83%BC-%E3%83%89%E3%83%AA%E3%83%B3%E3%82%AF%E3%83%9B%E3%83%AB%E3%83%80%E3%83%BC-%E5%A4%9A%E6%A9%9F%E8%83%BD%E5%8F%8E%E7%B4%8D%E3%83%90%E3%83%83%E3%82%B0/dp/B081J7B6WP",
  },
  {
    name: "シャワーチェア",
    worry: "お風呂で立ったり座ったりがつらい",
    product: "シャワーチェア",
    price: "5,000円",
    dailyEffort: "椅子に座ってそのまま体を洗うだけ",
    period: "1回",
    resultGood: "ふらつかず安心して入浴できる",
    altHigh: "月3万円の訪問入浴介護",
    altBadState: "頼んでも毎日は来てもらえず結局不安",
    effortHigh: "壁に手をついて何度も立ち座りして",
    amazonName: "iimono117 シャワーチェア",
    amazonUrl: "https://www.amazon.co.jp/iimono117-%E3%82%B7%E3%83%A3%E3%83%AF%E3%83%BC%E3%83%81%E3%82%A7%E3%82%A2%E3%83%BC-6%E6%AE%B5%E9%9A%8E%E9%AB%98%E3%81%95%E8%AA%BF%E7%AF%80%E5%8F%AF%E8%83%BD-%E4%BB%8B%E8%AD%B7%E7%94%A8%E3%81%8A%E9%A2%A8%E5%91%82%E6%A4%85%E5%AD%90-%E3%83%90%E3%82%B9%E3%82%BF%E3%83%96%E3%83%81%E3%82%A7%E3%82%A2/dp/B0CG7WZV7B",
  },
  {
    name: "電動エアーマットレス",
    worry: "急な来客で寝具が足りなくなる",
    product: "電動エアーマットレス",
    price: "5,000円",
    dailyEffort: "スイッチを入れて膨らませるだけ",
    period: "1晩",
    resultGood: "来客にもしっかりした寝床を用意できる",
    altHigh: "3万円の客用布団セット",
    altBadState: "買っても結局収納場所に困る",
    effortHigh: "布団を押し入れから出して毎回干して",
    amazonName: "BQB 電動エアーマットレス",
    amazonUrl: "https://www.amazon.co.jp/-/en/BQB-Removable-Automatic-Inflation-200%C3%97150%C3%9725cm/dp/B0FK4WWKLT",
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

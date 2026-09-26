const GENRES = [
  {
    name: "まつげ美容液",
    worry: "まつげが細く短くなってきた悩み",
    product: "まつげ美容液",
    price: "2000円",
    dailyEffort: "寝る前にまつげの生え際に塗るだけ",
    period: "1ヶ月",
    resultGood: "まつげが濃くしっかりしてマスカラ映えする",
    altHigh: "5万円のまつげエクステ",
    altBadState: "つけても数週間で取れて結局スカスカに戻る",
    effortHigh: "毎回1時間かけてまつ毛パーマに通って",
    amazonName: "3Dアイラッシュセラム まつ毛美容液",
    amazonUrl: "https://www.amazon.co.jp/3D%E3%82%A2%E3%82%A4%E3%83%A9%E3%83%83%E3%82%B7%E3%83%A5%E3%82%BB%E3%83%A9%E3%83%A0-%E3%81%BE%E3%81%A4%E6%AF%9B%E7%BE%8E%E5%AE%B9%E6%B6%B2-%E3%82%AD%E3%83%A3%E3%83%94%E3%82%AD%E3%82%B7%E3%83%AB%E9%AB%98%E6%BF%83%E5%BA%A6%E9%85%8D%E5%90%88-%E6%97%A5%E6%9C%AC%E8%A3%BD-7g/dp/B07GNJXTRS",
  },
  {
    name: "温度調整電気ケトル",
    worry: "白湯やお茶を淹れる時の温度調整の面倒さ",
    product: "温度調整電気ケトル",
    price: "5000円",
    dailyEffort: "ボタンで温度を選ぶだけ",
    period: "1回",
    resultGood: "毎回ちょうどいい温度のお湯がすぐ沸く",
    altHigh: "1万円の茶葉",
    altBadState: "買っても結局お湯の温度が合わず美味しく淹れられない",
    effortHigh: "毎回温度計を使って湯温を測って",
    amazonName: "シロカ 温度調整電気ケトル SK-D171",
    amazonUrl: "https://www.amazon.co.jp/%E3%82%B7%E3%83%AD%E3%82%AB-%E6%B8%A9%E5%BA%A6%E8%AA%BF%E7%AF%80%E9%9B%BB%E6%B0%97%E3%82%B1%E3%83%88%E3%83%AB-SK-D171-1%E2%84%83%E5%8D%98%E4%BD%8D%E3%81%AE%E6%B8%A9%E5%BA%A6%E8%A8%AD%E5%AE%9A%E6%A9%9F%E8%83%BD-%E7%A9%BA%E3%81%A0%E3%81%8D%E9%98%B2%E6%AD%A2%E6%A9%9F%E8%83%BD/dp/B0887VLDVS",
  },
  {
    name: "ダニよけスプレー",
    worry: "布団やソファのダニによる肌のかゆみ",
    product: "ダニよけスプレー",
    price: "1000円",
    dailyEffort: "布団にシュッと吹きかけるだけ",
    period: "1回",
    resultGood: "かゆみが治まってぐっすり眠れるようになる",
    altHigh: "5万円の防ダニ布団",
    altBadState: "買い替えても数ヶ月でまたダニが繁殖してる",
    effortHigh: "毎週布団を天日干しして掃除機をかけて",
    amazonName: "アース ダニよけスプレー ハーブの香り",
    amazonUrl: "https://www.amazon.co.jp/%E3%82%A2%E3%83%BC%E3%82%B9-%E3%83%80%E3%83%8B%E3%82%88%E3%81%91%E3%82%B9%E3%83%97%E3%83%AC%E3%83%BC-%E3%83%8F%E3%83%BC%E3%83%96%E3%81%AE%E9%A6%99%E3%82%8A-%E3%81%B5%E3%81%A8%E3%82%93%E3%82%84%E3%83%9E%E3%82%AF%E3%83%A9%E3%82%84%E3%82%AB%E3%83%BC%E3%83%9A%E3%83%83%E3%83%88%E3%81%AA%E3%81%A9%E3%81%AE%E3%81%82%E3%82%89%E3%81%88%E3%81%AA%E3%81%84%E3%83%A2%E3%83%8E%E3%81%AB-%E3%81%8A%E5%AD%90%E6%A7%98%E3%82%84%E3%81%BA%E3%83%83%E3%83%88%E3%81%8C%E3%81%84%E3%82%8B%E3%81%94%E5%AE%B6%E5%BA%AD%E3%81%A7%E3%82%82/dp/B084RVCGMF",
  },
  {
    name: "冷感タオル",
    worry: "夏の外出中の汗だくで火照った体",
    product: "冷感タオル",
    price: "1500円",
    dailyEffort: "水で濡らして振るだけ",
    period: "1回",
    resultGood: "首元がすぐひんやりして汗が引いていく",
    altHigh: "5000円のタクシー",
    altBadState: "利用しても外に出た瞬間また汗だくになる",
    effortHigh: "保冷剤をタオルで巻いて何度も交換して",
    amazonName: "SOHAPI クールタオル 3枚セット",
    amazonUrl: "https://www.amazon.co.jp/SOHAPI-%E3%80%90%E6%97%A5%E6%9C%AC%E8%A3%BD%E3%80%91%E3%82%AF%E3%83%BC%E3%83%AB-%E3%82%8C%E3%81%84%E3%81%8B%E3%82%93%E3%81%9F%E3%81%8A%E3%82%8B-%E7%86%B1%E4%B8%AD%E7%97%87%E3%80%81%E7%B4%AB%E5%A4%96%E7%B7%9A%E5%AF%BE%E7%AD%96-100-%E5%86%B7%E6%84%9F%E7%B9%8A%E7%B6%AD%E4%BD%BF%E7%94%A8/dp/B0C2H123RC",
  },
  {
    name: "スマホリングホルダー",
    worry: "スマホを片手操作中に落としそうになる不安",
    product: "スマホリングホルダー",
    price: "800円",
    dailyEffort: "スマホの背面に貼るだけ",
    period: "1回",
    resultGood: "指にかけるだけで片手でも落とさず操作できる",
    altHigh: "3万円の耐衝撃ケース",
    altBadState: "買い替えても結局落としそうになる",
    effortHigh: "毎回両手でしっかり持ち直して",
    amazonName: "スマホリング 薄型 落下防止 指輪リング",
    amazonUrl: "https://www.amazon.co.jp/%E3%83%9B%E3%83%AB%E3%83%80%E3%83%BC-%E6%8C%87%E8%BC%AA%E3%83%AA%E3%83%B3%E3%82%B0-%E3%82%B9%E3%82%BF%E3%83%B3%E3%83%89%E6%A9%9F%E8%83%BD-%E3%83%AA%E3%83%B3%E3%82%B0360%E5%BA%A6%E5%9B%9E%E8%BB%A2-%E3%82%BF%E3%83%96%E3%83%AC%E3%83%83%E3%83%88%E7%94%A8/dp/B0BWF4T5FN",
  },
  {
    name: "足つぼマッサージシート",
    worry: "立ち仕事帰りの足の疲れ・むくみ",
    product: "足つぼマッサージシート",
    price: "1500円",
    dailyEffort: "敷いて1分足踏みするだけ",
    period: "1回",
    resultGood: "足の疲れがほぐれてむくみがすっきりする",
    altHigh: "5000円の足つぼ店",
    altBadState: "通っても帰り道にはまた足がパンパンに戻る",
    effortHigh: "毎晩脚を高く上げて30分マッサージして",
    amazonName: "足つぼマット 折り畳み式 170CM",
    amazonUrl: "https://www.amazon.co.jp/%E8%B6%B3%E3%81%A4%E3%81%BC%E3%83%9E%E3%83%83%E3%83%88-%E3%83%95%E3%83%83%E3%83%88%E3%83%9E%E3%83%83%E3%82%B5%E3%83%BC%E3%82%B8-%E3%82%B9%E3%83%88%E3%83%AC%E3%82%B9%E8%A7%A3%E6%B6%88-%E3%83%9E%E3%83%83%E3%82%B5%E3%83%BC%E3%82%B8%E3%82%B7%E3%83%BC%E3%83%88-%E6%8C%81%E3%81%A1%E9%81%8B%E3%81%B3%E3%81%AB%E4%BE%BF%E5%88%A9/dp/B09PZ32SY3",
  },
  {
    name: "玄関シューズラック",
    worry: "玄関に靴が散らかって狭く感じる悩み",
    product: "玄関シューズラック",
    price: "3000円",
    dailyEffort: "靴を置くだけ",
    period: "1回",
    resultGood: "玄関が広く見えて来客時も安心できる",
    altHigh: "3000円の収納庫",
    altBadState: "借りても結局玄関に靴が散らかったまま",
    effortHigh: "毎回靴箱の奥から靴を出し入れして",
    amazonName: "YAMAAIYI シューズラック 省スペース 折りたたみ式",
    amazonUrl: "https://www.amazon.co.jp/YAMAAIYI-%E3%82%B7%E3%83%A5%E3%83%BC%E3%82%BA%E3%83%A9%E3%83%83%E3%82%AF-%E7%9C%81%E3%82%B9%E3%83%9A%E3%83%BC%E3%82%B9-%E3%81%97%E3%82%85%E3%83%BC%E3%81%9A%E3%82%89%E3%81%A3%E3%81%8F-%E6%8A%98%E3%82%8A%E3%81%9F%E3%81%9F%E3%81%BF%E5%BC%8F/dp/B0CBG375VW",
  },
  {
    name: "ペット抜け毛取りブラシ",
    worry: "部屋中に舞う猫・犬の抜け毛",
    product: "ペット抜け毛取りブラシ",
    price: "2000円",
    dailyEffort: "1日1回ブラッシングするだけ",
    period: "1週間",
    resultGood: "抜け毛が大幅に減って部屋が毛だらけにならない",
    altHigh: "5000円のペットサロン",
    altBadState: "通っても数日で結局毛が舞ってる",
    effortHigh: "毎日掃除機とコロコロをかけて",
    amazonName: "ペットブラシ 抜け毛取り スリッカーブラシ",
    amazonUrl: "https://www.amazon.co.jp/%E3%83%9A%E3%83%83%E3%83%88%E3%83%96%E3%83%A9%E3%82%B7%E7%8C%AB%E3%83%96%E3%83%A9%E3%82%B7-%E3%83%96%E3%83%A9%E3%83%83%E3%82%B7%E3%83%B3%E3%82%B0%E3%83%96%E3%83%A9%E3%82%B7-%E3%82%B9%E3%83%AA%E3%83%83%E3%82%AB%E3%83%BC%E3%83%96%E3%83%A9%E3%82%B7-%E6%AF%9B%E7%8E%89%E5%8F%96%E3%82%8A%E3%83%96%E3%83%A9%E3%82%B7-360%C2%B0%E5%9B%9E%E8%BB%A2/dp/B0DD3Z1GJ4",
  },
  {
    name: "電動シュレッダー",
    worry: "個人情報入りのDMやレシートが溜まる不安",
    product: "電動シュレッダー",
    price: "3000円",
    dailyEffort: "紙を差し込むだけ",
    period: "1回",
    resultGood: "ボタン一つで一瞬に裁断できて安心できる",
    altHigh: "1万円の溶解サービス",
    altBadState: "利用しても結局紙が溜まったまま",
    effortHigh: "毎回ハサミで一枚ずつ細かく手で切って",
    amazonName: "サンワダイレクト 卓上シュレッダー 家庭用 電動",
    amazonUrl: "https://www.amazon.co.jp/%E3%82%B5%E3%83%B3%E3%83%AF%E3%83%80%E3%82%A4%E3%83%AC%E3%82%AF%E3%83%88-%E3%82%B7%E3%83%A5%E3%83%AC%E3%83%83%E3%83%80%E3%83%BC-%E3%82%AF%E3%83%AD%E3%82%B9%E3%82%AB%E3%83%83%E3%83%88-A4%EF%BC%9A2%E3%81%A4%E6%8A%98%E3%82%8A%C3%972%E6%9E%9A-400-PSD058/dp/B0896WBZ3G",
  },
  {
    name: "電動ウォーターフロス",
    worry: "歯磨き後も歯の間に挟まる食べかす",
    product: "電動ウォーターフロス",
    price: "5000円",
    dailyEffort: "歯に水流を当てるだけ",
    period: "1週間",
    resultGood: "歯間の汚れがすっきり取れて口臭も気にならない",
    altHigh: "1万円の歯科検診",
    altBadState: "通っても数日でまた歯間に食べかすが挟まる",
    effortHigh: "毎回デンタルフロスを一本ずつ丁寧に通して",
    amazonName: "パナソニック 口腔洗浄器 ジェットウォッシャー ドルツ",
    amazonUrl: "https://www.amazon.co.jp/%E3%83%91%E3%83%8A%E3%82%BD%E3%83%8B%E3%83%83%E3%82%AF-%E5%8F%A3%E8%85%94%E6%B4%97%E6%B5%84%E5%99%A8-%E3%82%B8%E3%82%A7%E3%83%83%E3%83%88%E3%82%A6%E3%82%A9%E3%83%83%E3%82%B7%E3%83%A3%E3%83%BC-%E3%82%B3%E3%83%BC%E3%83%89%E3%83%AC%E3%82%B9-EW-DJ55-W/dp/B09XLYQFNZ",
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

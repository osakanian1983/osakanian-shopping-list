const GENRES = [
  {
    name: "スマートロック",
    worry: "鍵を閉め忘れたか毎回不安になる",
    product: "スマートロック",
    price: "8,000円",
    dailyEffort: "ドアに貼り付けてアプリと連携するだけ",
    period: "1日",
    resultGood: "外出先からでも施錠状態がすぐ確認できる",
    altHigh: "3万円の玄関ドア交換",
    altBadState: "交換しても結局閉め忘れの不安は残る",
    effortHigh: "出先から何度も家族に確認の連絡をして",
    amazonName: "SwitchBot スマートロック",
    amazonUrl: "https://www.amazon.co.jp/%E3%82%B9%E3%83%9E%E3%83%BC%E3%83%88%E3%83%AD%E3%83%83%E3%82%AF-%E3%82%B9%E3%82%A4%E3%83%83%E3%83%81%E3%83%9C%E3%83%83%E3%83%88-%E3%82%AA%E3%83%BC%E3%83%88%E3%83%AD%E3%83%83%E3%82%AF-%E3%82%B9%E3%83%9E%E3%83%BC%E3%83%88%E3%82%AD%E3%83%BC-%E5%8F%96%E4%BB%98%E3%82%AB%E3%83%B3%E3%82%BF%E3%83%B3/dp/B0CR47JXCT",
  },
  {
    name: "電動シューズブラシ",
    worry: "革靴の汚れを磨いてもなかなか落ちない",
    product: "電動シューズブラシ",
    price: "2,500円",
    dailyEffort: "スイッチを入れて靴に当てるだけ",
    period: "1回",
    resultGood: "短時間で靴がピカピカに仕上がる",
    altHigh: "1,500円の靴磨き店",
    altBadState: "頼んでも結局日々の汚れはすぐ戻る",
    effortHigh: "布で何度も力を入れてこすって",
    amazonName: "Sonic Scrubber 電動シューズブラシ",
    amazonUrl: "https://www.amazon.co.jp/%E3%82%B8%E3%83%A3%E3%83%91%E3%83%B3%E3%83%BB%E3%82%A4%E3%83%B3%E3%82%BF%E3%83%BC%E3%83%8A%E3%82%B7%E3%83%A7%E3%83%8A%E3%83%AB%E3%83%BB%E3%82%B3%E3%83%9E%E3%83%BC%E3%82%B9-%E3%82%BD%E3%83%8B%E3%83%83%E3%82%AF%E3%82%B9%E3%82%AF%E3%83%A9%E3%83%90%E3%83%BC%E9%9B%BB%E5%8B%95%E3%82%B7%E3%83%A5%E3%83%BC%E3%82%BA%E3%83%96%E3%83%A9%E3%82%B7/dp/B00ET0W46A",
  },
  {
    name: "ミルクケース",
    worry: "外出先で粉ミルクの計量に手間取る",
    product: "ミルクケース",
    price: "1,500円",
    dailyEffort: "家で分けて入れておくだけ",
    period: "1回分",
    resultGood: "外でもサッと正確な量を注げる",
    altHigh: "3,000円の使い切りスティック",
    altBadState: "買っても結局荷物がかさばる",
    effortHigh: "外出先で缶ごと持ち歩いて計量して",
    amazonName: "Amazonブランド Mama Bear 3段式ミルクケース",
    amazonUrl: "https://www.amazon.co.jp/Amazon%E3%83%96%E3%83%A9%E3%83%B3%E3%83%89-Mama-Bear-%E3%83%9E%E3%83%9E%E3%83%99%E3%82%A2%E3%83%BC-3%E6%AE%B5%E5%BC%8F%E3%83%9F%E3%83%AB%E3%82%AF%E3%82%B1%E3%83%BC%E3%82%B9%E3%82%BB%E3%83%83%E3%83%88/dp/B0BQTNDSK2",
  },
  {
    name: "巻き取り式充電ケーブル",
    worry: "カバンの中で充電ケーブルが絡まる",
    product: "巻き取り式充電ケーブル",
    price: "2,000円",
    dailyEffort: "使う分だけ引き出すだけ",
    period: "1回",
    resultGood: "絡まらずサッと取り出せる",
    altHigh: "3,000円の収納ポーチ",
    altBadState: "買っても結局中で絡む",
    effortHigh: "毎回ケーブルを手でほどいて",
    amazonName: "サンワダイレクト 巻き取り式充電ケーブル",
    amazonUrl: "https://www.amazon.co.jp/%E3%82%B5%E3%83%B3%E3%83%AF%E3%83%80%E3%82%A4%E3%83%AC%E3%82%AF%E3%83%88-%E5%B7%BB%E3%81%8D%E5%8F%96%E3%82%8A%E5%BC%8F%E5%85%85%E9%9B%BB%E3%82%B1%E3%83%BC%E3%83%96%E3%83%AB-USB-C-PD60W-500-USB086BK/dp/B0DCF2FT83",
  },
  {
    name: "保冷ランチバッグ",
    worry: "お弁当がお昼には傷みそうで心配",
    product: "保冷ランチバッグ",
    price: "2,500円",
    dailyEffort: "保冷剤と一緒に入れるだけ",
    period: "半日",
    resultGood: "お昼まで冷たさをキープできて安心",
    altHigh: "500円のコンビニ弁当",
    altBadState: "買っても結局毎日出費がかさむ",
    effortHigh: "保冷剤を別で何個も持ち歩いて",
    amazonName: "サーモス 保冷ランチバッグ 4L",
    amazonUrl: "https://www.amazon.co.jp/%E3%82%B5%E3%83%BC%E3%83%A2%E3%82%B9-%E4%BF%9D%E5%86%B7%E3%83%A9%E3%83%B3%E3%83%81%E3%83%90%E3%83%83%E3%82%B0-%E3%82%B0%E3%83%AC%E3%83%BC-RDU-0043-GY/dp/B07ZSH7W4R",
  },
  {
    name: "玄関センサーライト",
    worry: "夜に鍵穴が見えず手探りになる",
    product: "玄関センサーライト",
    price: "2,000円",
    dailyEffort: "貼り付けておけば勝手に点灯する",
    period: "1晩",
    resultGood: "近づくだけで足元まで明るく照らす",
    altHigh: "5万円の電気工事",
    altBadState: "頼んでも結局スイッチの場所に困る",
    effortHigh: "スマホのライトで鍵穴を照らして",
    amazonName: "玄関用 人感センサーLEDライト",
    amazonUrl: "https://www.amazon.co.jp/%E3%82%BB%E3%83%B3%E3%82%B5%E3%83%BC%E3%83%A9%E3%82%A4%E3%83%88-LED%E3%83%A9%E3%82%A4%E3%83%88-%E4%BA%BA%E6%84%9F%E3%82%BB%E3%83%B3%E3%82%B5%E3%83%BC-%E3%83%89%E3%82%A2%E7%94%A8%E3%82%BB%E3%83%B3%E3%82%B5%E3%83%BC%E3%83%A9%E3%82%A4%E3%83%88-%E3%82%AC%E3%83%AC%E3%83%BC%E3%82%B8/dp/B0CM36WSLT",
  },
  {
    name: "電動ひげトリマー",
    worry: "朝の髭剃りで肌がヒリヒリする",
    product: "電動ひげトリマー",
    price: "3,000円",
    dailyEffort: "スイッチを入れて顔に当てるだけ",
    period: "1回",
    resultGood: "肌を傷めずきれいに整えられる",
    altHigh: "4,000円の理容室シェービング",
    altBadState: "通っても自宅ではまた肌が荒れる",
    effortHigh: "カミソリで何度も肌を擦って",
    amazonName: "KEMEI 電動ひげトリマー",
    amazonUrl: "https://www.amazon.co.jp/KEMEI-%E3%83%90%E3%83%AA%E3%82%AB%E3%83%B3%E3%81%A8%E3%82%B7%E3%82%A7%E3%83%BC%E3%83%90%E3%83%BC%E3%82%BB%E3%83%83%E3%83%88-%E3%83%97%E3%83%AD%E3%83%95%E3%82%A7%E3%83%83%E3%82%B7%E3%83%A7%E3%83%8A%E3%83%AB-%E9%9B%BB%E5%8B%95%E3%81%B2%E3%81%92%E3%83%88%E3%83%AA%E3%83%9E%E3%83%BC-%E3%83%80%E3%83%96%E3%83%AB%E3%83%95%E3%82%A9%E3%82%A4%E3%83%AB%E3%82%B7%E3%82%A7%E3%83%BC%E3%83%90%E3%83%BC/dp/B0CKVN6T9Q",
  },
  {
    name: "ベビーカー用フットマフ",
    worry: "冬のお散歩で赤ちゃんの足が冷える",
    product: "ベビーカー用フットマフ",
    price: "4,000円",
    dailyEffort: "ベビーカーに取り付けるだけ",
    period: "1回",
    resultGood: "足先まで暖かく保ったまま外出できる",
    altHigh: "1万円の防寒ベビーウェア",
    altBadState: "着せても結局足元だけ冷える",
    effortHigh: "毛布を何枚も重ねて足に巻いて",
    amazonName: "ベビーカー用防水フットマフ",
    amazonUrl: "https://www.amazon.co.jp/%E3%83%95%E3%83%83%E3%83%88%E3%83%9E%E3%83%95-%E3%83%99%E3%83%93%E3%83%BC%E3%82%AB%E3%83%BC-%E3%81%8A%E5%87%BA%E3%81%8B%E3%81%91%E3%82%8B%E7%94%A8%E5%93%81-%E3%83%99%E3%83%93%E3%83%BC%E3%82%AB%E3%83%BC%E9%98%B2%E9%A2%A8%E5%AF%9D%E8%A2%8B-%E5%82%98%E8%BB%8A-%E9%AB%98%E6%99%AF%E8%A6%B3%E8%BB%8A-%E4%BF%9D%E6%B8%A9%E5%AD%90%E4%BE%9B%E8%BB%8A%E7%B6%BF%E3%83%9E%E3%83%83%E3%83%88%E3%82%92%E5%8E%9A%E3%81%8F%E3%81%99%E3%82%8B%E7%A7%8B%E5%86%AC-%E5%BB%B6%E9%95%B7-%E3%83%96%E3%83%AB%E3%83%BC/dp/B0DBHHVX8Z",
  },
  {
    name: "衣類圧縮ロールバッグ",
    worry: "スーツケースに荷物がうまく収まらない",
    product: "衣類圧縮ロールバッグ",
    price: "2,000円",
    dailyEffort: "服を入れて丸めるだけ",
    period: "1回",
    resultGood: "かさばる服がコンパクトに収まる",
    altHigh: "3万円の大型スーツケース",
    altBadState: "買い替えても結局すぐ荷物で埋まる",
    effortHigh: "荷物を何度も詰め直して圧縮して",
    amazonName: "Amazon Basics 衣類圧縮ロールバッグ 12点セット",
    amazonUrl: "https://www.amazon.co.jp/Amazon%E3%83%99%E3%83%BC%E3%82%B7%E3%83%83%E3%82%AF-%E3%83%AD%E3%83%BC%E3%83%AB%E3%82%A2%E3%83%83%E3%83%97%E5%BC%8F%E3%83%95%E3%82%A1%E3%82%B9%E3%83%8A%E3%83%BC%E9%96%8B%E9%96%89%E3%83%88%E3%83%A9%E3%83%99%E3%83%AB%E5%8F%8E%E7%B4%8D%E3%83%90%E3%83%83%E3%82%B0-12%E7%82%B9%E3%83%91%E3%83%83%E3%82%AF-S%E3%82%B5%E3%82%A4%E3%82%BA-M%E3%82%B5%E3%82%A4%E3%82%BA%E5%90%846%E7%82%B9/dp/B0B298NWP1",
  },
  {
    name: "自動水やり機",
    worry: "旅行中に植物が枯れないか心配",
    product: "自動水やり機",
    price: "2,500円",
    dailyEffort: "鉢に差し込んでおくだけ",
    period: "1週間",
    resultGood: "留守中も自動で水やりが続く",
    altHigh: "5,000円の植物シッター",
    altBadState: "頼んでも結局日程が合わず頼めない",
    effortHigh: "旅行のたびに近所の人へ水やりを頼んで",
    amazonName: "ZRGR 自動水やり機",
    amazonUrl: "https://www.amazon.co.jp/ZRGR-%E8%87%AA%E5%8B%95%E6%B0%B4%E3%82%84%E3%82%8A%E6%A9%9F-%E7%95%99%E5%AE%88%E4%B8%AD%E3%82%82%E5%AE%89%E5%BF%83-%E8%87%AA%E5%8B%95%E6%B0%B4%E9%81%A3%E3%82%8A%E6%A9%9F-%E7%95%99%E5%AE%88%E3%81%AE%E6%99%82%E6%B0%B4%E3%82%84%E3%82%8A%E3%83%97%E3%83%A9%E3%83%B3%E3%82%BF%E3%83%BC/dp/B0D54968J4",
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

const HASHTAGS = "#PR #Amazon #買ってよかったもの #購入品";

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
    const tags = `${HASHTAGS} #${genre.name}`;
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

const GENRES = [
  {
    name: "ポータブル洗濯機",
    worry: "下着や靴下だけで洗濯機を回すのが面倒",
    product: "ポータブル洗濯機",
    price: "7,500円",
    dailyEffort: "洗濯物と水を入れてボタンを押すだけ",
    period: "1回",
    resultGood: "手洗いなしで下着や靴下がきれいになる",
    altHigh: "6,000円のランドリー",
    altBadState: "通っても結局毎回お金と時間がかかる",
    effortHigh: "洗面所でゴシゴシ手洗いして",
    amazonName: "loyfreeyo 小型洗濯機 13L",
    amazonUrl: "https://www.amazon.co.jp/loyfreeyo-%E5%B0%8F%E5%9E%8B%E6%B4%97%E6%BF%AF%E6%A9%9F-%E3%83%9F%E3%83%8B%E6%B4%97%E6%BF%AF%E6%A9%9F-13L%E5%A4%A7%E5%AE%B9%E9%87%8F-%E8%84%B1%E6%B0%B4%E6%A9%9F%E8%83%BD%E4%BB%98%E3%81%8D/dp/B0FDK7SF31",
  },
  {
    name: "紛失防止スマートタグ",
    worry: "鍵や財布をどこに置いたか毎回探し回る",
    product: "紛失防止スマートタグ",
    price: "6,000円",
    dailyEffort: "鍵や財布に取り付けてアプリと連携するだけ",
    period: "1日",
    resultGood: "スマホからすぐ場所が分かる",
    altHigh: "3万円の防犯カメラ設置",
    altBadState: "設置しても結局探し物自体は減らない",
    effortHigh: "家中をひっくり返して探して",
    amazonName: "Anker Eufy SmartTrack Card E40",
    amazonUrl: "https://www.amazon.co.jp/%E3%80%90%E8%B6%85%E8%96%84%E5%9E%8B%E3%80%91Anker-Eufy-%E3%83%A6%E3%83%BC%E3%83%95%E3%82%A3-SmartTrack-Card/dp/B0GQPB5ZJX",
  },
  {
    name: "フードシーラー",
    worry: "食材の保存がすぐ傷んで無駄になる",
    product: "フードシーラー",
    price: "7,000円",
    dailyEffort: "袋に入れてボタンを押すだけ",
    period: "1週間",
    resultGood: "食材の鮮度がぐっと長持ちする",
    altHigh: "5,000円のまとめ買い",
    altBadState: "買っても結局余らせて捨ててしまう",
    effortHigh: "ラップを何重にも巻いて保存して",
    amazonName: "アイリスオーヤマ 真空パック機 VPF-S50",
    amazonUrl: "https://www.amazon.co.jp/%E3%82%A2%E3%82%A4%E3%83%AA%E3%82%B9%E3%82%AA%E3%83%BC%E3%83%A4%E3%83%9E-2022%E5%B9%B4%E3%83%A2%E3%83%87%E3%83%AB-%E3%80%90%E5%B0%82%E7%94%A8%E8%A2%8B%C3%973%E6%9E%9A%E4%BB%98%E5%B1%9E%E3%80%91-%E7%9C%9F%E7%A9%BA%E4%BF%9D%E5%AD%98%E3%83%95%E3%83%BC%E3%83%89%E3%82%B7%E3%83%BC%E3%83%A9%E3%83%BC-VPF-S50/dp/B0B4DRCSXM",
  },
  {
    name: "ランバーサポートクッション",
    worry: "デスクワーク中の腰の痛みがつらい",
    product: "ランバーサポートクッション",
    price: "4,000円",
    dailyEffort: "椅子の背もたれにセットして座るだけ",
    period: "1週間",
    resultGood: "腰への負担が減って楽に座れる",
    altHigh: "3万円の整体通い",
    altBadState: "通っても結局座るとすぐ痛みが戻る",
    effortHigh: "背中にクッションを挟んで姿勢を直して",
    amazonName: "ランバーサポート 腰痛クッション",
    amazonUrl: "https://www.amazon.co.jp/%E3%83%A9%E3%83%B3%E3%83%90%E3%83%BC%E3%82%B5%E3%83%9D%E3%83%BC%E3%83%88%E3%80%90%E8%85%B0%E7%97%9B%E3%81%AE%E5%B0%82%E9%96%80%E6%95%B4%E4%BD%93%E5%B8%AB-%E3%82%AF%E3%83%83%E3%82%B7%E3%83%A7%E3%83%B3-%E9%AA%A8%E7%9B%A4%E3%82%B5%E3%83%9D%E3%83%BC%E3%83%88-%E3%82%B7%E3%83%BC%E3%83%88%E3%82%AF%E3%83%83%E3%82%B7%E3%83%A7%E3%83%B3-%E8%85%B0%E7%97%9B%E3%82%AF%E3%83%83%E3%82%B7%E3%83%A7%E3%83%B3/dp/B0BV6H4ZHM",
  },
  {
    name: "猫用電動おもちゃ",
    worry: "留守番中の猫の運動不足が気になる",
    product: "猫用電動おもちゃ",
    price: "2,500円",
    dailyEffort: "スイッチを入れて置いておくだけ",
    period: "1日",
    resultGood: "猫が一人でも夢中で遊んでくれる",
    altHigh: "1万円のキャットタワー増設",
    altBadState: "増やしても結局運動不足は変わらない",
    effortHigh: "仕事の合間に何度も構って遊んで",
    amazonName: "猫壱 キャッチ・ミー・イフ・ユー・キャッチ2",
    amazonUrl: "https://www.amazon.co.jp/%E7%8C%AB%E5%A3%B1-0876173003519-%E3%82%AD%E3%83%A3%E3%83%83%E3%83%81%E3%83%BB%E3%83%9F%E3%83%BC%E3%83%BB%E3%82%A4%E3%83%95%E3%83%BB%E3%83%A6%E3%83%BC%E3%83%BB%E3%82%AD%E3%83%A3%E3%83%B32-%E7%8C%AB%E7%94%A8%E9%9B%BB%E5%8B%95%E3%81%8A%E3%82%82%E3%81%A1%E3%82%83/dp/B00JJAEEZ4",
  },
  {
    name: "折りたたみ防災ヘルメット",
    worry: "地震が来た時の頭の守りが何もない",
    product: "折りたたみ防災ヘルメット",
    price: "9,000円",
    dailyEffort: "玄関に置いてかぶるだけ",
    period: "1日",
    resultGood: "とっさの時にすぐ頭を守れる",
    altHigh: "20万円の耐震リフォーム",
    altBadState: "やっても結局落下物からは守れない",
    effortHigh: "咄嗟にクッションや本で頭を覆って",
    amazonName: "折りたたみ防災ヘルメット ワンタッチ組み立て",
    amazonUrl: "https://www.amazon.co.jp/%E6%8A%98%E3%82%8A%E3%81%9F%E3%81%9F%E3%81%BF%E3%83%98%E3%83%AB%E3%83%A1%E3%83%83%E3%83%88-%E9%98%B2%E7%81%BD%E3%83%98%E3%83%AB%E3%83%A1%E3%83%83%E3%83%88-%E6%8A%98%E3%82%8A%E3%81%9F%E3%81%9F%E3%81%BF%E6%90%BA%E5%B8%AF%E9%98%B2%E7%81%BD%E7%94%A8%E3%83%98%E3%83%AB%E3%83%A1%E3%83%83%E3%83%88-%E8%B6%85%E8%96%84%E5%9E%8B%E3%82%B5%E3%82%A4%E3%82%BA-%E3%83%AF%E3%83%B3%E3%82%BF%E3%83%83%E3%83%81%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E3%81%A7%E7%B5%84%E3%81%BF%E7%AB%8B%E3%81%A6%E5%87%BA%E6%9D%A5%E3%82%8B/dp/B0DGMBS7X1",
  },
  {
    name: "犬用レインコート",
    worry: "雨の日の散歩で犬がずぶ濡れになる",
    product: "犬用レインコート",
    price: "1,500円",
    dailyEffort: "着せてお散歩に行くだけ",
    period: "1回",
    resultGood: "濡れずに快適にお散歩できる",
    altHigh: "5,000円のペット乾燥室",
    altBadState: "使っても結局毎回体を拭く手間は残る",
    effortHigh: "帰ってからタオルで何度も拭いて",
    amazonName: "PetGround 犬用レインコート",
    amazonUrl: "https://www.amazon.co.jp/%E3%83%AC%E3%82%A4%E3%83%B3%E3%82%B3%E3%83%BC%E3%83%88-%E3%81%8B%E3%82%8F%E3%81%84%E3%81%84-%E7%8A%AC%E3%81%AE%E3%83%AC%E3%82%A4%E3%83%B3%E3%82%B3%E3%83%BC%E3%83%88-%E3%83%9A%E3%83%83%E3%83%88%E7%94%A8%E5%93%81-PetGround/dp/B0B34KP57R",
  },
  {
    name: "冷蔵庫収納ケース",
    worry: "冷蔵庫の中がすぐ食材でぐちゃぐちゃになる",
    product: "冷蔵庫収納ケース",
    price: "600円",
    dailyEffort: "食材を入れて冷蔵庫に重ねるだけ",
    period: "1週間",
    resultGood: "欲しい物が一目で見つかる",
    altHigh: "10万円の冷蔵庫買い替え",
    altBadState: "買い替えても結局整理しないと同じ",
    effortHigh: "奥の食材を探して何度も入れ替えて",
    amazonName: "カインズ Skitto 冷蔵庫収納ケース ハーフL",
    amazonUrl: "https://www.amazon.co.jp/%E3%82%AB%E3%82%A4%E3%83%B3%E3%82%BA-CAINZ-%E5%86%B7%E8%94%B5%E5%BA%AB%E5%8F%8E%E7%B4%8D%E3%82%B1%E3%83%BC%E3%82%B9-Skitto-%E3%83%8F%E3%83%BC%E3%83%95/dp/B0D4LCPC16",
  },
  {
    name: "スマホ三脚スタンド",
    worry: "動画を撮るたびスマホを持つ手が疲れる",
    product: "スマホ三脚スタンド",
    price: "2,000円",
    dailyEffort: "スマホを挟んで置くだけ",
    period: "1回",
    resultGood: "手ブレなく両手も自由に使える",
    altHigh: "5万円の一眼カメラ購入",
    altBadState: "買っても結局手持ち撮影の癖は変わらない",
    effortHigh: "腕を固定して何分もじっと構えて",
    amazonName: "UBeesize くねくねスタンド",
    amazonUrl: "https://www.amazon.co.jp/UBeesize-%E3%82%B9%E3%83%9E%E3%83%9B%E3%82%B9%E3%82%BF%E3%83%B3%E3%83%89-%E3%83%AF%E3%82%A4%E3%83%A4%E3%83%AC%E3%82%B9%E3%83%AA%E3%83%A2%E3%82%B3%E3%83%B3%E4%BB%98%E3%81%8D-%E6%8C%81%E3%81%A1%E9%81%8B%E3%81%B3%E4%BE%BF%E5%88%A9-%E3%81%8F%E3%81%AD%E3%81%8F%E3%81%AD%E3%82%B9%E3%82%BF%E3%83%B3%E3%83%89/dp/B09XF4DHW8",
  },
  {
    name: "シューキーパー",
    worry: "お気に入りの靴がすぐ型崩れする",
    product: "シューキーパー",
    price: "1,700円",
    dailyEffort: "脱いだ靴にそのまま入れるだけ",
    period: "1週間",
    resultGood: "買った時の形がきれいに保てる",
    altHigh: "8,000円の靴の買い替え",
    altBadState: "買い替えても結局またすぐ型崩れする",
    effortHigh: "型崩れを直そうと靴を手で何度も伸ばして",
    amazonName: "シューズキーパー 6足セット 型崩れ防止",
    amazonUrl: "https://www.amazon.co.jp/%E3%82%B7%E3%83%A5%E3%83%BC%E3%82%BA%E3%82%AD%E3%83%BC%E3%83%91%E3%83%BC-%E3%82%B7%E3%83%A5%E3%83%BC%E3%82%BA%E3%82%B9%E3%83%88%E3%83%AC%E3%83%83%E3%83%81%E3%83%A3%E3%83%BC-%E9%9D%B4%E3%81%AE%E5%9E%8B%E5%B4%A9%E3%82%8C%E3%82%92%E9%98%B2%E3%81%90-%E9%9D%B4%E3%81%AE%E5%BD%A2%E3%82%92%E6%95%B4%E3%81%88%E5%BF%AB%E9%81%A9%E3%81%AB%E4%BF%9D%E3%81%A4-24cm-30cm%E5%AF%BE%E5%BF%9C/dp/B0C74B2VSQ",
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

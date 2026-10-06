const GENRES = [
  {
    name: "ベビーバスチェア",
    worry: "ワンオペのお風呂で赤ちゃんを支えるのが大変",
    product: "ベビーバスチェア",
    price: "2,500円",
    dailyEffort: "吸盤でお風呂場に固定するだけ",
    period: "1回",
    resultGood: "両手が空いて安全に洗える",
    altHigh: "5万円のベビーバスタブ",
    altBadState: "買っても結局片手で支える必要がある",
    effortHigh: "片手で赤ちゃんを支えながら洗って",
    amazonName: "ベビーバスチェア 吸盤付き",
    amazonUrl: "https://www.amazon.co.jp/%E3%83%99%E3%83%93%E3%83%BC%E3%83%90%E3%82%B9%E3%83%81%E3%82%A7%E3%82%A2-%E3%81%8A%E9%A2%A8%E5%91%82%E3%83%81%E3%82%A7%E3%82%A2-%E3%81%AF%E3%81%98%E3%82%81%E3%81%A6%E3%81%AE%E3%81%8A%E9%A2%A8%E5%91%82%E3%81%8B%E3%82%89%E4%BD%BF%E3%81%88%E3%82%8B%E3%83%90%E3%82%B9%E3%83%81%E3%82%A7%E3%82%A2-%E3%83%99%E3%83%93%E3%83%BC%E7%94%A8%E3%83%90%E3%82%B9%E3%83%81%E3%82%A7%E3%82%A2-6-18%E3%83%B6%E6%9C%88%E8%B5%A4%E3%81%A1%E3%82%83%E3%82%93%E7%94%A8/dp/B0B88XS72B",
  },
  {
    name: "折りたたみテーブル",
    worry: "狭い部屋でテーブルを置く場所に困る",
    product: "折りたたみテーブル",
    price: "3,400円",
    dailyEffort: "使う時だけ広げて置くだけ",
    period: "1日",
    resultGood: "使わない時はすっと収納できる",
    altHigh: "3万円の据え置きテーブル",
    altBadState: "買っても結局部屋が狭く感じる",
    effortHigh: "大きなテーブルを部屋の隅に移動させて",
    amazonName: "山善 折りたたみミニテーブル MST-5040",
    amazonUrl: "https://www.amazon.co.jp/%E5%B1%B1%E5%96%84-YAMAZEN-%E6%8A%98%E3%82%8A%E3%81%9F%E3%81%9F%E3%81%BF%E3%83%9F%E3%83%8B%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB-MST-5040-NM/dp/B004OUL5CY",
  },
  {
    name: "ワインクーラー",
    worry: "ワインを冷やすのに時間がかかりすぎる",
    product: "ワインクーラー",
    price: "2,300円",
    dailyEffort: "冷凍庫で凍らせてボトルに巻くだけ",
    period: "数分",
    resultGood: "すぐに飲み頃の温度まで冷える",
    altHigh: "1万円の小型ワインセラー",
    altBadState: "置いても結局冷えるまで待たされる",
    effortHigh: "氷水を用意してボトルを何度も回して",
    amazonName: "ファンヴィーノ クイックワインクーラー",
    amazonUrl: "https://www.amazon.co.jp/%E3%82%AF%E3%82%A4%E3%83%83%E3%82%AF%E3%83%AF%E3%82%A4%E3%83%B3%E3%82%AF%E3%83%BC%E3%83%A9%E3%83%BC-Quick-Cooler-%E3%83%95%E3%82%A1%E3%83%B3%E3%83%B4%E3%82%A3%E3%83%BC%E3%83%8E-%E3%83%AF%E3%82%A4%E3%83%B3%E3%82%B0%E3%83%83%E3%82%BA/dp/B006QAFFD0",
  },
  {
    name: "電動鼻水吸引器",
    worry: "赤ちゃんの鼻水を取ってあげられず可哀想",
    product: "電動鼻水吸引器",
    price: "7,000円",
    dailyEffort: "スイッチを入れて鼻に当てるだけ",
    period: "1回",
    resultGood: "すっきり鼻水が取れて楽になる",
    altHigh: "3,000円の小児科の通院",
    altBadState: "通っても結局自宅ではまた鼻水が溜まる",
    effortHigh: "口で吸い取る鼻水吸引器を頑張って使って",
    amazonName: "ベビースマイル 電動鼻水吸引器 S-302",
    amazonUrl: "https://www.amazon.co.jp/-/en/S-302/dp/B0177FBRDE",
  },
  {
    name: "ベビーカーレインカバー",
    worry: "雨の日のお散歩でベビーカーの中まで濡れる",
    product: "ベビーカーレインカバー",
    price: "4,000円",
    dailyEffort: "ベビーカーに被せるだけ",
    period: "1回",
    resultGood: "雨の日でも濡れずにお散歩できる",
    altHigh: "1万円の防水ウェア",
    altBadState: "着せても結局ベビーカーの中は濡れる",
    effortHigh: "大きな傘でベビーカーを覆いながら歩いて",
    amazonName: "ジープ ベビーカー レインカバー",
    amazonUrl: "https://www.amazon.co.jp/-/en/90111R/dp/B003N64Z7W",
  },
  {
    name: "電動爪切り",
    worry: "爪切りで深爪にしてしまわないか不安になる",
    product: "電動爪切り",
    price: "2,000円",
    dailyEffort: "スイッチを入れて爪に当てるだけ",
    period: "1回",
    resultGood: "安全に爪先がきれいに整う",
    altHigh: "3,000円のネイルサロン",
    altBadState: "通っても結局自宅ではまた深爪が怖い",
    effortHigh: "爪切りで何度も恐る恐る切って",
    amazonName: "Amazon限定 2026最新型電動爪切り",
    amazonUrl: "https://www.amazon.co.jp/%E3%80%902026%E6%9C%80%E6%96%B0%E5%9E%8B-%E9%9B%BB%E5%8B%95%E7%88%AA%E5%88%87%E3%82%8A%E3%80%91%E3%80%90Amazon%E9%99%90%E5%AE%9A%E3%80%91%E7%88%AA%E3%82%84%E3%81%99%E3%82%8A-Type-C%E5%85%85%E9%9B%BB%E5%BC%8F-%E3%83%97%E3%83%AC%E3%82%BC%E3%83%B3%E3%83%88%E3%81%AB%E3%82%82%E6%9C%80%E9%81%A9-%E3%82%A2%E3%83%95%E3%82%BF%E3%83%BC%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9%E5%AF%BE%E5%BF%9C/dp/B0GKP46PGV",
  },
  {
    name: "真空保存容器セット",
    worry: "冷蔵庫の食材がすぐしんなり傷む",
    product: "真空保存容器セット",
    price: "3,000円",
    dailyEffort: "食材を入れてポンプで空気を抜くだけ",
    period: "1週間",
    resultGood: "食材の鮮度が長持ちする",
    altHigh: "5,000円のまとめ買い食材",
    altBadState: "買っても結局余らせて傷ませてしまう",
    effortHigh: "ラップを何重にも巻いて保存して",
    amazonName: "デイズ 真空保存容器セット",
    amazonUrl: "https://www.amazon.co.jp/%E3%83%87%E3%82%A4%E3%82%BA-DS-14-%E3%83%87%E3%82%A4%E3%82%BA-%E7%9C%9F%E7%A9%BA%E4%BF%9D%E5%AD%98%E5%AE%B9%E5%99%A8%E3%82%BB%E3%83%83%E3%83%88/dp/B0G25XB116",
  },
  {
    name: "折りたたみ収納ボックス",
    worry: "部屋に収納ボックスを置く場所がない",
    product: "折りたたみ収納ボックス",
    price: "3,000円",
    dailyEffort: "使わない時は折りたたんで置くだけ",
    period: "1日",
    resultGood: "必要な時だけ広げて使える",
    altHigh: "3万円のクローゼット増設",
    altBadState: "増やしても結局収納は埋まってしまう",
    effortHigh: "大きな収納棚を部屋の隅に移動させて",
    amazonName: "RAKU 折りたたみ収納ボックス",
    amazonUrl: "https://www.amazon.co.jp/%E5%8F%8E%E7%B4%8D%E3%83%9C%E3%83%83%E3%82%AF%E3%82%B9-%E3%82%B3%E3%83%B3%E3%83%86%E3%83%8A%E3%83%9C%E3%83%83%E3%82%AF%E3%82%B9-3%E9%9D%A2%E9%96%8B%E9%96%89%E5%8F%AF%E8%83%BD-%E3%82%AD%E3%83%A3%E3%82%B9%E3%82%BF%E3%83%BC%E4%BB%98%E3%81%8D-%E5%B0%8F%E7%89%A9%E3%83%BB%E6%9C%AC%E3%83%BB%E8%A1%A3%E9%A1%9E%E5%8F%8E%E7%B4%8D/dp/B0BTD8X9TT",
  },
  {
    name: "ベビー体重計",
    worry: "赤ちゃんの体重が増えているか心配になる",
    product: "ベビー体重計",
    price: "3,300円",
    dailyEffort: "乗せてボタンを押すだけ",
    period: "1回",
    resultGood: "自宅でもすぐに体重が分かる",
    altHigh: "3,000円の体重測定",
    altBadState: "通っても結局毎回病院に行く手間がかかる",
    effortHigh: "体重を測るたびに小児科へ連れて行って",
    amazonName: "ベビー体重計 多機能デジタルスケール",
    amazonUrl: "https://www.amazon.co.jp/%E4%BD%93%E9%87%8D%E8%A8%88%E3%80%900-1kg%E3%81%8B%E3%82%89-%E6%9C%80%E5%A4%A720kg-%E3%82%B9%E3%82%B1%E3%83%BC%E3%83%AB%E3%80%91%E8%96%84%E5%9E%8B%E8%BB%BD%E9%87%8F-%E3%83%99%E3%83%93%E3%83%BC%E3%82%B9%E3%82%B1%E3%83%BC%E3%83%AB-LCD%E7%94%BB%E9%9D%A2%E8%A1%A8%E7%A4%BA/dp/B0DHKMTPYM",
  },
  {
    name: "防水お食事エプロン",
    worry: "離乳食で毎回服が汚れて洗濯が増える",
    product: "防水お食事エプロン",
    price: "1,200円",
    dailyEffort: "首にかけて食事させるだけ",
    period: "1食",
    resultGood: "服が汚れず洗濯の手間が減る",
    altHigh: "5,000円の汚れ防止スプレー",
    altBadState: "使っても結局服の汚れは落ちない",
    effortHigh: "汚れた服を毎回手洗いして",
    amazonName: "MOMSMENU お食事エプロン 4枚セット",
    amazonUrl: "https://www.amazon.co.jp/MOMSMENU-%E3%81%8A%E9%A3%9F%E4%BA%8B%E3%82%A8%E3%83%97%E3%83%AD%E3%83%B3-%E9%A3%9F%E4%BA%8B%E7%94%A8%E3%82%A8%E3%83%97%E3%83%AD%E3%83%B3-%E3%83%9D%E3%82%B1%E3%83%83%E3%83%88%E4%BB%98%E3%81%8D-%E3%81%8A%E5%90%8D%E5%89%8D%E3%82%BF%E3%82%B0%E4%BB%98%E3%81%8D/dp/B0CXJ5784K",
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

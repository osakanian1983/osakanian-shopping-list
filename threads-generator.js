const GENRES = [
  {
    name: "冷凍ご飯保存容器",
    worry: "毎回ラップで包むご飯の冷凍保存が面倒",
    product: "冷凍ご飯保存容器",
    price: "2,560円",
    dailyEffort: "ご飯を入れてフタを閉めるだけ",
    period: "1回",
    resultGood: "レンジでそのまま温められてラップ不要になる",
    altHigh: "500円のラップ買い替え",
    altBadState: "買い替えても結局包むのが面倒",
    effortHigh: "ラップでご飯を一つずつ包んで",
    amazonName: "マーナ(MARNA) 冷凍ごはん容器 エクストリーム R511CL",
    amazonUrl: "https://www.amazon.co.jp/%E3%83%9E%E3%83%BC%E3%83%8A-%E5%86%B7%E5%87%8D%E3%81%94%E3%81%AF%E3%82%93%E5%AE%B9%E5%99%A8-web%E9%99%90%E5%AE%9A%E3%82%AB%E3%83%A9%E3%83%BC-%E3%81%94%E9%A3%AF%E5%86%B7%E5%87%8D%E5%AE%B9%E5%99%A8-R511CL/dp/B0CR5QV6ZQ",
  },
  {
    name: "防災ラジオライト",
    worry: "停電時にスマホも明かりも確保できるか不安",
    product: "防災ラジオライト",
    price: "4,980円",
    dailyEffort: "手回しハンドルを回すだけ",
    period: "1分",
    resultGood: "ライトもラジオもスマホ充電もすぐ使える",
    altHigh: "2万円の蓄電池",
    altBadState: "置いても結局使い方が分からず埃をかぶる",
    effortHigh: "電池の買い置きを何個も用意して",
    amazonName: "SAFETY PLUS 災害用ラジオ 懐中電灯 LEDライト 手回し充電",
    amazonUrl: "https://www.amazon.co.jp/%E3%80%90SAFETY-PLUS%E3%80%91%E7%81%BD%E5%AE%B3%E7%94%A8%E3%83%A9%E3%82%B8%E3%82%AA-LED%E3%83%A9%E3%82%A4%E3%83%88-%E3%82%BD%E3%83%BC%E3%83%A9%E3%83%BC%E5%85%85%E9%9B%BB-%E6%89%8B%E5%9B%9E%E3%81%97%E5%85%85%E9%9B%BB/dp/B08W1L5KYN",
  },
  {
    name: "シンク下伸縮ラック",
    worry: "シンク下が鍋やボウルでぐちゃぐちゃ",
    product: "シンク下伸縮ラック",
    price: "2,980円",
    dailyEffort: "伸ばして置くだけ",
    period: "1日",
    resultGood: "鍋も調味料もすっきり2段に収まる",
    altHigh: "5万円のキッチンリフォーム",
    altBadState: "やっても結局シンク下は変わらない",
    effortHigh: "しゃがんで奥の鍋を何度も探って",
    amazonName: "チチロバ(Titiroba) シンク下 収納ラック 伸縮 2段",
    amazonUrl: "https://www.amazon.co.jp/%E3%80%90Amazon-co-jp-%E3%83%81%E3%83%81%E3%83%AD%E3%83%90-TITIROBA-%E3%82%B7%E3%83%B3%E3%82%AF%E4%B8%8B%E4%BC%B8%E7%B8%AE%E6%A3%9A-%E5%B9%8549-88%C3%97%E5%A5%A5%E8%A1%8C25%C3%97%E9%AB%98%E3%81%9542cm/dp/B0C4L2H5LX",
  },
  {
    name: "枝毛カットトリマー",
    worry: "枝毛が気になって美容室まで待てない",
    product: "枝毛カットトリマー",
    price: "4,480円",
    dailyEffort: "毛束を挟んでスライドするだけ",
    period: "1回",
    resultGood: "枝毛だけ取れて長さはそのまま",
    altHigh: "8,000円の美容室",
    altBadState: "通っても結局すぐ枝毛が戻る",
    effortHigh: "鏡の前で枝毛を一本ずつ探して切って",
    amazonName: "Symbicin Split-Ender Mini 枝毛カッター",
    amazonUrl: "https://www.amazon.co.jp/%E3%82%B7%E3%83%B3%E3%83%93%E3%82%B7%E3%83%B3-%E6%9E%9D%E6%AF%9B%E3%82%AB%E3%83%83%E3%82%BF%E3%83%BC-Split-Ender-Mini-%E3%82%B9%E3%83%97%E3%83%AA%E3%83%83%E3%83%88%E3%82%A8%E3%83%B3%E3%83%80%E3%83%BC/dp/B081HZ8DNR",
  },
  {
    name: "肩甲骨ストレッチャー",
    worry: "肩こりで肩甲骨が固まって動かない",
    product: "肩甲骨ストレッチャー",
    price: "2,948円",
    dailyEffort: "枕にセットして寝るだけ",
    period: "5分",
    resultGood: "肩甲骨がじんわり伸びて軽くなる",
    altHigh: "6,000円の整体",
    altBadState: "通っても結局翌日には元の固さ",
    effortHigh: "自分の手で肩甲骨を無理やり押して",
    amazonName: "Chefal 肩甲骨ストレッチャー",
    amazonUrl: "https://www.amazon.co.jp/Chefal-%E3%80%90%E5%8C%BB%E5%B8%AB%C3%97%E6%9F%94%E9%81%93%E6%95%B4%E5%BE%A9%E5%B8%AB%E3%81%8C%EF%BC%B7%E7%9B%A3%E4%BF%AE%EF%BC%81-1%E6%97%A55%E5%88%86%E5%AF%9D%E3%82%8B%E3%81%A0%E3%81%91%E3%81%A7%E8%82%A9%E7%94%B2%E9%AA%A8%E3%82%92%E3%81%97%E3%81%A3%E3%81%8B%E3%82%8A-%E3%82%B9%E3%83%88%E3%83%AC%E3%83%83%E3%83%81-%E5%81%A5%E5%BA%B7%E3%82%B0%E3%83%83%E3%82%BA/dp/B0CYT15RHQ",
  },
  {
    name: "犬用シューズ",
    worry: "真夏のアスファルトで愛犬の足裏が心配",
    product: "犬用シューズ",
    price: "3,499円",
    dailyEffort: "履かせてベルトを留めるだけ",
    period: "1回のお散歩",
    resultGood: "熱い地面でも足裏を気にせず歩ける",
    altHigh: "1万円の肉球クリーム定期便",
    altBadState: "塗っても結局外に出ると熱いまま",
    effortHigh: "アスファルトを避けて遠回りの道を探して",
    amazonName: "ASMPET 犬用シューズ ドッグブーツ",
    amazonUrl: "https://www.amazon.co.jp/ASMPET-%E3%83%89%E3%83%83%E3%82%B0%E3%83%96%E3%83%BC%E3%83%84-%E6%84%9B%E7%8A%AC%E3%81%AE%E3%81%8A%E6%95%A3%E6%AD%A9-%E8%B6%B3%E5%85%83%E3%81%AE%E6%B1%9A%E3%82%8C%E9%98%B2%E6%AD%A2-%E5%B1%A5%E3%81%8B%E3%81%9B%E3%82%84%E3%81%99%E3%81%84/dp/B07NXSXDZG",
  },
  {
    name: "排水口ゴミ受けネット",
    worry: "排水口のヌメリとゴミ受けのぬるぬるが気持ち悪い",
    product: "排水口ゴミ受けネット",
    price: "701円",
    dailyEffort: "排水口にセットするだけ",
    period: "1週間",
    resultGood: "カゴなしでもヌメリが気にならない",
    altHigh: "3,000円のクリーナー",
    altBadState: "使っても結局ヌメリは戻る",
    effortHigh: "指でゴミ受けのヌメリを毎回こすって",
    amazonName: "Magicfour 水切りネットホルダー",
    amazonUrl: "https://www.amazon.co.jp/Magicfour-%E6%B0%B4%E5%88%87%E3%82%8A%E3%83%8D%E3%83%83%E3%83%88%E3%83%9B%E3%83%AB%E3%83%80%E3%83%BC-%E3%83%90%E3%82%B9%E3%82%B1%E3%83%83%E3%83%88%E3%81%84%E3%82%89%E3%81%9A-%E3%81%AF%E3%81%84%E3%81%99%E3%81%84%E3%81%93%E3%81%86-%E5%8F%A3%E5%BE%8413-5cm%E5%AF%BE%E5%BF%9C/dp/B0BNVFCVGR",
  },
  {
    name: "いびき防止マウスピース",
    worry: "自分のいびきで夜中に目が覚める",
    product: "いびき防止マウスピース",
    price: "780円",
    dailyEffort: "寝る前に舌に乗せるだけ",
    period: "1晩",
    resultGood: "気道が開いていびきが静かになる",
    altHigh: "3万円の歯科用マウスピース",
    altBadState: "作っても結局つけるのが面倒で続かない",
    effortHigh: "横向き専用クッションを抱えて寝て",
    amazonName: "SELFLAB いびき防止 舌用マウスピース",
    amazonUrl: "https://www.amazon.co.jp/%E3%80%90%E5%8C%BB%E5%B8%AB%E7%9B%A3%E4%BF%AE%E3%80%91-%E3%83%9E%E3%82%A6%E3%82%B9%E3%83%94%E3%83%BC%E3%82%B9-%E5%96%89%E3%81%AE%E4%B9%BE%E7%87%A5%E5%AF%BE%E7%AD%96-%E5%B0%82%E7%94%A8%E3%82%B1%E3%83%BC%E3%82%B9%E4%BB%98%E3%81%8D-SELFLAB/dp/B0H6W1GWKY",
  },
  {
    name: "靴磨きセット",
    worry: "革靴がくすんで何を使えばいいか分からない",
    product: "靴磨きセット",
    price: "4,180円",
    dailyEffort: "クリームを塗ってブラシでこするだけ",
    period: "10分",
    resultGood: "革靴がつや戻りして見違える",
    altHigh: "2,000円の靴磨き",
    altBadState: "頼んでも結局すぐくすみが戻る",
    effortHigh: "適当な布で乾いた革をこすって",
    amazonName: "サフィール(Saphir) 靴磨きセット ダブルDX (PA-SASR)",
    amazonUrl: "https://www.amazon.co.jp/%E3%82%B5%E3%83%95%E3%82%A3%E3%83%BC%E3%83%AB-%E9%9D%B4%E7%A3%A8%E3%81%8D%E3%82%BB%E3%83%83%E3%83%88-%E3%82%B9%E3%82%BF%E3%83%BC%E3%82%BF%E3%83%BC%E3%82%BB%E3%83%83%E3%83%88-PA-SA35-%E3%83%96%E3%83%A9%E3%83%B3%E3%83%89%E5%85%AC%E5%BC%8F%E3%82%B7%E3%83%A7%E3%83%83%E3%83%97%E9%99%90%E5%AE%9A/dp/B08JXGNKS7",
  },
  {
    name: "レディースフェイスシェーバー",
    worry: "顔の産毛が気になるのにシェーバーは男性用ばかり",
    product: "レディースフェイスシェーバー",
    price: "1,436円",
    dailyEffort: "肌に当てて滑らせるだけ",
    period: "3分",
    resultGood: "産毛が取れて化粧のりが良くなる",
    altHigh: "6千円のエステ",
    altBadState: "通っても結局自宅ではまた伸びる",
    effortHigh: "眉用の小さいカミソリで顔全体を無理に剃って",
    amazonName: "オーム電機 Iberis レディースシェーバーセット HB-FPL1225",
    amazonUrl: "https://www.amazon.co.jp/%E3%82%AA%E3%83%BC%E3%83%A0%E9%9B%BB%E6%A9%9FIberis-%E3%83%AC%E3%83%87%E3%82%A3%E3%83%BC%E3%82%B9%E3%82%B7%E3%82%A7%E3%83%BC%E3%83%90%E3%83%BC%E3%82%BB%E3%83%83%E3%83%88-%E3%83%95%E3%82%A7%E3%82%A4%E3%82%B9%E3%82%B7%E3%82%A7%E3%83%BC%E3%83%90%E3%83%BC-HB-FPL1225-OHM/dp/B0BJZNC2DF",
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

const GENRES = [
  {
    name: "フットマッサージャー",
    worry: "夕方の重だるいふくらはぎ",
    product: "フットマッサージャー",
    price: "4000円",
    dailyEffort: "座って脚を入れるだけ",
    period: "1回",
    resultGood: "脚がすっきり軽くなってむくみが気にならなくなる",
    altHigh: "月1万円のマッサージサロン",
    altBadState: "施術直後はいいのに帰る頃には戻ってる",
    effortHigh: "毎晩脚を自分の手で何十分も揉んで",
    tag: "むくみ対策",
    rakutenName: "アドバンスポット フットマッサージャー",
    rakutenUrl: "https://item.rakuten.co.jp/advanspot/ry83/",
  },
  {
    name: "靴用洗濯ネット",
    worry: "スニーカーの汚れ・ニオイ",
    product: "靴用洗濯ネット",
    price: "1500円",
    dailyEffort: "靴を入れて回すだけ",
    period: "1回",
    resultGood: "型崩れせずきれいになってニオイも消える",
    altHigh: "1000円の手洗いコース",
    altBadState: "利用直後はいいのにすぐ黄ばみが戻ってる",
    effortHigh: "毎回何時間もかけてこすり洗いして",
    tag: "掃除・洗濯",
    rakutenName: "靴用洗濯ネット 2個セット 楽天1位",
    rakutenUrl: "https://item.rakuten.co.jp/kyotokomachi/sr-washnet/",
  },
  {
    name: "安眠耳栓",
    worry: "隣室の物音やいびきで眠れない夜",
    product: "安眠耳栓",
    price: "1500円",
    dailyEffort: "寝る前に耳に入れるだけ",
    period: "1回",
    resultGood: "物音が気にならずぐっすり眠れるようになる",
    altHigh: "1万円の睡眠導入サプリ",
    altBadState: "飲んだ直後はいいのにすぐ物音で目が覚めてる",
    effortHigh: "毎晩耳をふさいで何度も寝返りを打って",
    tag: "睡眠",
    rakutenName: "ASMILE 睡眠用耳栓 32dB低減",
    rakutenUrl: "https://item.rakuten.co.jp/asmile/r-lf-r032/",
  },
  {
    name: "折りたたみサングラス",
    worry: "荷物になる普段使いのサングラス",
    product: "折りたたみサングラス",
    price: "2500円",
    dailyEffort: "バッグに入れて持ち歩くだけ",
    period: "1回",
    resultGood: "かさばらず外出先でもすぐ紫外線対策できる",
    altHigh: "3万円のサングラス",
    altBadState: "買った直後はいいのに大きくて結局家に置きっぱなし",
    effortHigh: "毎回大きなケースごと持ち歩いて",
    tag: "ファッション小物",
    rakutenName: "折りたたみサングラス UVカット 楽天1位",
    rakutenUrl: "https://item.rakuten.co.jp/mujina/mj-1177/",
  },
  {
    name: "自動小銭貯金箱",
    worry: "財布にたまる一方の小銭の管理",
    product: "自動小銭貯金箱",
    price: "3000円",
    dailyEffort: "小銭を投入口に入れるだけ",
    period: "1回",
    resultGood: "小銭が自動でカウントされて貯金額がすぐ分かる",
    altHigh: "月500円の家計簿アプリ",
    altBadState: "課金直後はいいのにすぐ入力が面倒で放置してる",
    effortHigh: "毎回小銭を手で数えて紙に記録して",
    tag: "家計管理",
    rakutenName: "ファミリーATMバンク 硬貨識別 自動計算",
    rakutenUrl: "https://item.rakuten.co.jp/smart-factory/lt-ktat-011g/",
  },
  {
    name: "ランバーサポートクッション",
    worry: "長時間のデスクワークでの腰の張り",
    product: "ランバーサポートクッション",
    price: "3000円",
    dailyEffort: "椅子の背もたれに置くだけ",
    period: "1回",
    resultGood: "腰がしっかり支えられて姿勢が楽になる",
    altHigh: "月1万円の整体通い",
    altBadState: "施術直後はいいのに数日で腰の張りが戻ってる",
    effortHigh: "毎回座り方を意識して何度も座り直して",
    tag: "デスクワーク",
    rakutenName: "マイコンフォート ランバーサポートクッション",
    rakutenUrl: "https://item.rakuten.co.jp/mygear/lumbarsupport/",
  },
  {
    name: "ベビーモニター",
    worry: "赤ちゃんの様子が気になる不安",
    product: "ベビーモニター",
    price: "5000円",
    dailyEffort: "カメラを設置して見るだけ",
    period: "1回",
    resultGood: "赤ちゃんの様子がいつでも確認できて安心できる",
    altHigh: "月2万円のシッター",
    altBadState: "頼んだ直後はいいのに毎回料金が気になって呼びづらい",
    effortHigh: "毎回別室まで様子を見に何度も往復して",
    tag: "育児",
    rakutenName: "BabyGoo ベビーモニター 見守りカメラ",
    rakutenUrl: "https://item.rakuten.co.jp/valueprice/babymonitor/",
  },
  {
    name: "布団乾燥機",
    worry: "布団に潜むダニ・湿気",
    product: "布団乾燥機",
    price: "6000円",
    dailyEffort: "ノズルを差してスイッチを押すだけ",
    period: "1回",
    resultGood: "布団がふかふかになってダニも気にならなくなる",
    altHigh: "月8000円のクリーニング業者",
    altBadState: "依頼直後はいいのに数ヶ月で戻ってる",
    effortHigh: "毎回布団を外に干して天気を気にして",
    tag: "時短家電",
    rakutenName: "アイリスオーヤマ カラリエ 布団乾燥機",
    rakutenUrl: "https://item.rakuten.co.jp/kadenrand/530044/",
  },
  {
    name: "ケーブル収納ボックス",
    worry: "デスク周りの配線コードの見た目",
    product: "ケーブル収納ボックス",
    price: "2000円",
    dailyEffort: "コードを箱にまとめるだけ",
    period: "1回",
    resultGood: "デスク周りがすっきりして掃除しやすくなる",
    altHigh: "数万円の収納リフォーム",
    altBadState: "リフォームしても結局配線が見えてる",
    effortHigh: "毎回コードを結束バンドでまとめて",
    tag: "収納",
    rakutenName: "FRETONBA ケーブル収納ボックス 2個セット",
    rakutenUrl: "https://item.rakuten.co.jp/socialaccess/1000000111408/",
  },
  {
    name: "犬用歯磨きシート",
    worry: "愛犬の口臭・歯石の付着",
    product: "歯磨きシート",
    price: "1500円",
    dailyEffort: "指に巻いて歯を拭くだけ",
    period: "1回",
    resultGood: "口臭が減って歯もきれいな状態を保てる",
    altHigh: "3万円の動物病院での歯石除去",
    altBadState: "処置直後はいいのに数ヶ月でまた歯石がついてる",
    effortHigh: "毎回歯ブラシを嫌がる愛犬を何分も押さえつけて",
    tag: "ペット用品",
    rakutenName: "ドギーマン デンタルローションシート 30枚入",
    rakutenUrl: "https://item.rakuten.co.jp/marquee/41482/",
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

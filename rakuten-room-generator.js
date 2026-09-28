const GENRES = [
  {
    name: "折りたたみ傘",
    worry: "突然の雨で濡れる通勤・通学",
    product: "折りたたみ傘",
    price: "2800円",
    dailyEffort: "ボタン1つで開閉するだけ",
    period: "1回",
    resultGood: "急な雨でもすぐ差せて濡れずに済む",
    altHigh: "1万円のブランド傘",
    altBadState: "買った直後はいいのに骨が歪んで壊れてる",
    effortHigh: "毎回天気予報を確認して傘を持ち歩くか悩んで",
    tag: "便利グッズ",
    rakutenName: "折りたたみ傘 自動開閉 10本骨 超軽量",
    rakutenUrl: "https://item.rakuten.co.jp/freedom-shops/u43/",
  },
  {
    name: "ネッククーラー",
    worry: "夏の通勤・外仕事での首元の暑さ",
    product: "ネッククーラー",
    price: "2000円",
    dailyEffort: "首にかけるだけ",
    period: "1回",
    resultGood: "首元がすぐひんやりして暑さが気にならなくなる",
    altHigh: "月1万円のジム通い",
    altBadState: "通った直後はいいのにすぐ汗だくに戻ってる",
    effortHigh: "毎回保冷剤をタオルで巻いて持ち歩いて",
    tag: "暑さ対策",
    rakutenName: "CICIBELLA クールリング ネッククーラー",
    rakutenUrl: "https://item.rakuten.co.jp/cicib/zhblq/",
  },
  {
    name: "米びつ",
    worry: "お米の虫食い・湿気での劣化",
    product: "密閉米びつ",
    price: "3000円",
    dailyEffort: "米びつに移し替えるだけ",
    period: "1回",
    resultGood: "お米の鮮度が保たれて虫も寄りつかなくなる",
    altHigh: "5000円の真空パック機",
    altBadState: "買った直後はいいのに結局面倒で使わなくなってる",
    effortHigh: "毎回米袋の口を輪ゴムで縛って冷蔵庫に押し込んで",
    tag: "キッチン",
    rakutenName: "IwaiLoft 密閉ガラス米びつ",
    rakutenUrl: "https://item.rakuten.co.jp/iwailoft/iw-gkm081/",
  },
  {
    name: "ヨガマット",
    worry: "自宅トレーニングでの床の痛み・冷たさ",
    product: "ヨガマット",
    price: "3500円",
    dailyEffort: "床に敷いて乗るだけ",
    period: "1回",
    resultGood: "膝や腰が痛くならず運動に集中できる",
    altHigh: "月1万円のヨガスタジオ",
    altBadState: "通った直後はいいのにすぐ足が遠のいてる",
    effortHigh: "毎回タオルを何枚も重ねて床の硬さをごまかして",
    tag: "トレーニング",
    rakutenName: "リダクティオ PUヨガマット 厚手",
    rakutenUrl: "https://item.rakuten.co.jp/reductio/bl1_003_ymat/",
  },
  {
    name: "卓上加湿器",
    worry: "乾燥による肌・喉のカサつき",
    product: "卓上加湿器",
    price: "3000円",
    dailyEffort: "水を入れてスイッチを押すだけ",
    period: "1回",
    resultGood: "部屋の乾燥が和らいで喉のイガイガが減る",
    altHigh: "1万円の空気清浄機",
    altBadState: "置いた直後はいいのにすぐ喉がカラカラに戻ってる",
    effortHigh: "毎回濡れタオルを干して部屋の湿度を保とうとして",
    tag: "生活家電",
    rakutenName: "上部給水式 卓上加湿器 アロマ対応",
    rakutenUrl: "https://item.rakuten.co.jp/mnrtepo21/hl230729/",
  },
  {
    name: "衣類圧縮袋",
    worry: "クローゼットにあふれる衣類の収納スペース",
    product: "衣類圧縮袋",
    price: "2000円",
    dailyEffort: "掃除機で空気を抜くだけ",
    period: "1回",
    resultGood: "収納スペースが増えて衣替えも楽になる",
    altHigh: "月5000円の倉庫代わり",
    altBadState: "借りた直後はいいのにすぐ物で溢れてる",
    effortHigh: "毎回衣類を畳み直して収納場所を作り直して",
    tag: "収納",
    rakutenName: "圧縮袋 衣類 楽天1位 押すだけ",
    rakutenUrl: "https://item.rakuten.co.jp/takara-jiang/vc-bag-02/",
  },
  {
    name: "抗菌まな板",
    worry: "キッチンでのまな板の雑菌・ニオイ移り",
    product: "抗菌まな板",
    price: "2500円",
    dailyEffort: "いつも通り切って洗うだけ",
    period: "1回",
    resultGood: "ニオイ移りが減って清潔に使い続けられる",
    altHigh: "月2000円の除菌サービス",
    altBadState: "利用直後はいいのにすぐ黒ずみが戻ってる",
    effortHigh: "毎回漂白剤に浸けて何時間も除菌して",
    tag: "キッチン用品",
    rakutenName: "山崎実業 tower 抗菌まな板セット",
    rakutenUrl: "https://item.rakuten.co.jp/yamayuu/yj-7020/",
  },
  {
    name: "スマホスタンド",
    worry: "デスクワーク中の首・肩への負担",
    product: "スマホスタンド",
    price: "2000円",
    dailyEffort: "スマホを置くだけ",
    period: "1回",
    resultGood: "画面が見やすい角度になって首の負担が減る",
    altHigh: "月1万円の整体通い",
    altBadState: "施術直後はいいのに数日で肩こりが戻ってる",
    effortHigh: "毎回スマホを片手で持ちながら作業して",
    tag: "デスクワーク",
    rakutenName: "LEKATO 全金属製 スマホスタンド 三脚",
    rakutenUrl: "https://item.rakuten.co.jp/lekato/lt-c04532-jp/",
  },
  {
    name: "猫用爪とぎベッド",
    worry: "猫の爪とぎによる家具の傷・ストレス",
    product: "爪とぎベッド",
    price: "2500円",
    dailyEffort: "部屋に置いておくだけ",
    period: "1回",
    resultGood: "家具を傷つけずに猫のストレスも発散できる",
    altHigh: "1万円の爪とぎトレーニング",
    altBadState: "教えた直後はいいのにすぐ家具で爪とぎしてる",
    effortHigh: "毎回猫を家具から引き離して叱って",
    tag: "ペット用品",
    rakutenName: "トミーズハウス 猫爪とぎベッド 丸型",
    rakutenUrl: "https://item.rakuten.co.jp/tommys2/zzy0075/",
  },
  {
    name: "ネックピロー",
    worry: "長距離移動での首・肩の疲れ",
    product: "ネックピロー",
    price: "3000円",
    dailyEffort: "首にかけて寄りかかるだけ",
    period: "1回",
    resultGood: "移動中しっかり眠れて首の疲れが残らなくなる",
    altHigh: "数万円のビジネスクラス",
    altBadState: "乗った直後はいいのにエコノミーだと結局疲れてる",
    effortHigh: "毎回上着を丸めて首元に挟んで固定して",
    tag: "旅行グッズ",
    rakutenName: "TENTIAL ネックピロー 携帯ケース付き",
    rakutenUrl: "https://item.rakuten.co.jp/tential/neck-pillow/",
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

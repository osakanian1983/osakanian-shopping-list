const GENRES = [
  {
    name: "ハンドパック手袋",
    worry: "ハンドクリームでも治らない手荒れ",
    product: "ハンドパック手袋",
    price: "1500円",
    dailyEffort: "手袋をはめて15分待つだけ",
    period: "1回",
    resultGood: "手がしっとり潤ってひび割れが気にならなくなる",
    altHigh: "3000円のサロンハンドケア",
    altBadState: "施術直後だけ潤ってすぐ乾燥する",
    effortHigh: "毎回予約を取ってサロンに通って",
    tag: "美容",
    rakutenName: "KOCOSTAR ハンドブーケマスク 5枚セット",
    rakutenUrl: "https://item.rakuten.co.jp/cosme07/koco_5set_blue/",
  },
  {
    name: "エア縄跳び",
    worry: "運動不足なのにジムに行く時間が取れない焦り",
    product: "エア縄跳び",
    price: "2000円",
    dailyEffort: "縄なしで1日5分跳ぶだけ",
    period: "2週間",
    resultGood: "部屋の中でもしっかり汗をかいて体力がつく",
    altHigh: "月8000円のジム通い",
    altBadState: "通っても結局移動が面倒で足が遠のく",
    effortHigh: "毎回ジムまで移動して着替えて",
    tag: "ダイエット",
    rakutenName: "bh life エア縄跳び カウンター付き",
    rakutenUrl: "https://item.rakuten.co.jp/m-mode/122/",
  },
  {
    name: "タワー型食器乾燥機",
    worry: "食後の洗い物でシンクがいつも塞がってる悩み",
    product: "食器乾燥機",
    price: "6000円",
    dailyEffort: "洗った食器を並べるだけ",
    period: "1回",
    resultGood: "食器が自動で乾いてシンクがすぐ空く",
    altHigh: "1回2000円の食器洗い代行",
    altBadState: "頼んでも毎日は使えず結局自分で洗ってる",
    effortHigh: "毎回手で拭いて棚にしまって",
    tag: "時短家電",
    rakutenName: "タイガー 食器乾燥機 DHG-T400",
    rakutenUrl: "https://item.rakuten.co.jp/nafco/n20496579/",
  },
  {
    name: "冷蔵庫ドアポケット収納ケース",
    worry: "冷蔵庫のドアポケットで調味料が倒れる悩み",
    product: "冷蔵庫ドアポケット収納ケース",
    price: "1200円",
    dailyEffort: "ケースに調味料を立てて入れるだけ",
    period: "1回",
    resultGood: "調味料が倒れず取り出しやすくなる",
    altHigh: "5万円の冷蔵庫買い替え",
    altBadState: "買い替えても結局整理せずまた倒れる",
    effortHigh: "倒れるたびに拾って直して",
    tag: "収納",
    rakutenName: "山崎実業 tower 冷蔵庫中収納ケース 仕切り付",
    rakutenUrl: "https://item.rakuten.co.jp/cucina/c2208-2750/",
  },
  {
    name: "白髪染めブラシ",
    worry: "セルフカラーで白髪染めが根元まで届かない悩み",
    product: "白髪染めブラシ",
    price: "1000円",
    dailyEffort: "ブラシで根元に塗るだけ",
    period: "1回",
    resultGood: "根元までムラなく自然に染まる",
    altHigh: "8000円の美容室リタッチ",
    altBadState: "通ってもすぐ根元の白髪が気になる",
    effortHigh: "毎回予約を取って美容室まで通って",
    tag: "ヘアケア",
    rakutenName: "サンビー ヘアダイブラシ K-60",
    rakutenUrl: "https://item.rakuten.co.jp/bijinsyokunin/sanbi-hdb-mail/",
  },
  {
    name: "ベビーバスチェア",
    worry: "新生児の沐浴で片手が常に塞がって大変な悩み",
    product: "ベビーバスチェア",
    price: "3000円",
    dailyEffort: "チェアに寝かせて洗うだけ",
    period: "1回",
    resultGood: "両手が空いて沐浴がぐっと楽になる",
    altHigh: "月2万円のベビーシッター",
    altBadState: "頼んだ直後はいいのに毎回料金が気になる",
    effortHigh: "毎回赤ちゃんを片手で支えながら洗って",
    tag: "育児",
    rakutenName: "ちゃいなび ベビーバスチェア アンジュスマイル",
    rakutenUrl: "https://item.rakuten.co.jp/chinavi/ang-cr-bchair/",
  },
  {
    name: "姿勢矯正サポーター",
    worry: "デスクワークで気づくと猫背になってる悩み",
    product: "姿勢矯正サポーター",
    price: "3500円",
    dailyEffort: "装着して普段通り過ごすだけ",
    period: "1週間",
    resultGood: "肩が開いて自然と良い姿勢を保てる",
    altHigh: "月1万円の整体通い",
    altBadState: "施術直後はいいのにすぐ猫背に戻ってる",
    effortHigh: "毎回予約を取って整体院まで通って",
    tag: "肩こり対策",
    rakutenName: "中山式 magico 姿勢サポーターPlus",
    rakutenUrl: "https://item.rakuten.co.jp/nakayama-shiki/3720/",
  },
  {
    name: "ペット用自動トイレ",
    worry: "毎日のトイレ掃除が地味に負担な悩み",
    product: "ペット用自動トイレ",
    price: "3万円",
    dailyEffort: "本体を置いて見守るだけ",
    period: "1回",
    resultGood: "勝手に掃除してくれて手間が一気に減る",
    altHigh: "1回3000円のペットホテル利用",
    altBadState: "利用しても掃除は結局自分で続く",
    effortHigh: "毎回トイレを手でスコップ掃除して",
    tag: "ペット用品",
    rakutenName: "PETKIT Pura Max2 猫自動トイレ",
    rakutenUrl: "https://item.rakuten.co.jp/neikonu/pkt-p9902/",
  },
  {
    name: "節水シャワーヘッド",
    worry: "知らないうちに高くなっていく水道代の悩み",
    product: "節水シャワーヘッド",
    price: "4000円",
    dailyEffort: "付け替えてシャワーを使うだけ",
    period: "1回",
    resultGood: "水圧はそのままで水道代がすぐ下がる",
    altHigh: "月500円の節水アプリ",
    altBadState: "入れても数字を見るだけで節水につながらない",
    effortHigh: "毎回使用量を記録してアプリに入力して",
    tag: "家計管理",
    rakutenName: "Arromic 節水シャワーヘッド ST-X3BA",
    rakutenUrl: "https://item.rakuten.co.jp/bathroom/st-x3b/",
  },
  {
    name: "ソーラーLEDランタン",
    worry: "停電時の明かりの備えがない不安",
    product: "ソーラーLEDランタン",
    price: "3000円",
    dailyEffort: "日中窓際に置いて充電するだけ",
    period: "1回",
    resultGood: "電池切れの心配なく停電時も明るく過ごせる",
    altHigh: "2000円の乾電池まとめ買い",
    altBadState: "買っても使う時に電池切れで困る",
    effortHigh: "毎回電池を確認して買い足して",
    tag: "防災",
    rakutenName: "ソーラーランタン 6000mAh",
    rakutenUrl: "https://item.rakuten.co.jp/mjmjstore/mj-solarlantern/",
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

const HASHTAGS = "#PR #楽天ROOM #楽天市場 #買ってよかったもの #購入品";

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

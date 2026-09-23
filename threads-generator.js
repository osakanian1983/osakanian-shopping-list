const GENRES = [
  {
    name: "塩素除去シャワーヘッド",
    worry: "シャワーの塩素による髪のダメージ",
    product: "塩素除去シャワーヘッド",
    price: "2500円",
    dailyEffort: "付け替えるだけ",
    period: "1週間",
    resultGood: "髪がきしまなくなって肌のつっぱりもない",
    altHigh: "1万円のサロン施術",
    altBadState: "通うのが続かず髪のきしみが戻ってる",
    effortHigh: "毎晩お風呂上がりにオイルを念入りに塗って",
    amazonName: "シャワーヘッド 塩素除去 節水 止水ボタン",
    amazonUrl: "https://www.amazon.co.jp/dp/B0BM4NKCY4",
  },
  {
    name: "雷ガード電源タップ",
    worry: "雷や過電流によるパソコン故障の不安",
    product: "雷ガード電源タップ",
    price: "1500円",
    dailyEffort: "挿し替えるだけ",
    period: "1回",
    resultGood: "雷が鳴っても安心してパソコンを使える",
    altHigh: "5万円のパソコン修理費",
    altBadState: "壊れてから結局買い替えてる",
    effortHigh: "雷が鳴るたびにコンセントを慌てて抜いて",
    amazonName: "Elecom 電源タップ トリプルタップ 雷ガード",
    amazonUrl: "https://www.amazon.co.jp/dp/B072NDV6F8",
  },
  {
    name: "室内物干し突っ張り棒",
    worry: "梅雨時の部屋干しスペース不足",
    product: "室内物干し突っ張り棒",
    price: "2000円",
    dailyEffort: "設置するだけ",
    period: "1回",
    resultGood: "洗濯物を広げて干せて生乾き臭が消える",
    altHigh: "月5000円のコインランドリー",
    altBadState: "面倒で結局部屋の隅に干してる",
    effortHigh: "毎回椅子の背もたれに洗濯物を広げて干して",
    amazonName: "突っ張り棒 強力 3m つっぱり棒",
    amazonUrl: "https://www.amazon.co.jp/dp/B085M9BZ4V",
  },
  {
    name: "電気圧力鍋",
    worry: "平日の晩ごはん作りの手間",
    product: "電気圧力鍋",
    price: "1万円",
    dailyEffort: "材料を入れてボタンを押すだけ",
    period: "1回",
    resultGood: "ほったらかしで大根も肉もホロホロになる",
    altHigh: "月1万円の時短食材宅配",
    altBadState: "利用してもコンロの前で煮込みが必要",
    effortHigh: "毎晩コンロの前で1時間以上煮込んで",
    amazonName: "Iris Ohyama 電気圧力鍋 4L",
    amazonUrl: "https://www.amazon.co.jp/dp/B08GSHPC6G",
  },
  {
    name: "USB卓上ミニ扇風機",
    worry: "デスク周りのこもった暑さ",
    product: "USB卓上ミニ扇風機",
    price: "1500円",
    dailyEffort: "置いて電源を挿すだけ",
    period: "1回",
    resultGood: "デスク周りの熱がすぐ流れて涼しくなる",
    altHigh: "月3000円かさむエアコン運転",
    altBadState: "つけても手元だけ結局暑いまま",
    effortHigh: "こまめに立って換気扇の前で涼んで",
    amazonName: "KEYNICE USB Fan 静音 卓上扇風機",
    amazonUrl: "https://www.amazon.co.jp/dp/B08G8RN2PD",
  },
  {
    name: "クレンジングバーム",
    worry: "メイクの落とし残り・毛穴の黒ずみ",
    product: "クレンジングバーム",
    price: "3000円",
    dailyEffort: "夜くるくる馴染ませるだけ",
    period: "1週間",
    resultGood: "メイクも毛穴の黒ずみもするんと落ちる",
    altHigh: "1万円のエステ洗浄コース",
    altBadState: "通うのが続かず結局黒ずみが戻ってる",
    effortHigh: "毎晩ダブル洗顔で念入りにこすって",
    amazonName: "DUO ザクレンジングバーム ブラックリペア",
    amazonUrl: "https://www.amazon.co.jp/dp/B0DRC44LKS",
  },
  {
    name: "骨盤ベルト",
    worry: "産後・立ち仕事での腰の不安定感",
    product: "骨盤ベルト",
    price: "3000円",
    dailyEffort: "巻くだけ",
    period: "3日",
    resultGood: "腰がスッと安定して立ち仕事が楽になる",
    altHigh: "月1万円の整体骨盤矯正",
    altBadState: "通うのが続かず結局腰の不安定感が戻ってる",
    effortHigh: "毎日骨盤矯正体操を30分頑張って",
    amazonName: "Wacoal マタニティ MGY690 骨盤ベルト",
    amazonUrl: "https://www.amazon.co.jp/dp/B07VF5J24Y",
  },
  {
    name: "猫自動給水器",
    worry: "猫の飲水量不足・水の鮮度",
    product: "猫自動給水器",
    price: "4000円",
    dailyEffort: "タンクに水を入れておくだけ",
    period: "3日",
    resultGood: "いつでも新鮮な水が流れて飲水量が増える",
    altHigh: "毎日何度も器の水を交換する手間",
    altBadState: "交換してもすぐぬるくなり結局飲まない",
    effortHigh: "1日に何度も器の水を交換して",
    amazonName: "PETKIT 自動給水器 循環式 静音",
    amazonUrl: "https://www.amazon.co.jp/dp/B0BN5JZLY5",
  },
  {
    name: "メガネ曇り止めクロス",
    worry: "マスクをつけた時のメガネの曇り",
    product: "メガネ曇り止めクロス",
    price: "800円",
    dailyEffort: "朝1回拭くだけ",
    period: "1回",
    resultGood: "1日中メガネが曇らずクリアな視界が続く",
    altHigh: "1万円の曇り止め加工メガネ",
    altBadState: "加工しても数ヶ月で効果が切れてる",
    effortHigh: "曇るたびにティッシュで何度も拭き直して",
    amazonName: "メガネくもり止めクロス 約600回使える",
    amazonUrl: "https://www.amazon.co.jp/dp/B0B518JLBH",
  },
  {
    name: "サーキュレーター",
    worry: "部屋干しの生乾き臭・空気のこもり",
    product: "サーキュレーター",
    price: "4000円",
    dailyEffort: "スイッチを入れるだけ",
    period: "1回",
    resultGood: "風が部屋中を巡って洗濯物がすぐ乾く",
    altHigh: "月5000円のランドリー通い",
    altBadState: "面倒で結局部屋干し臭に悩まされてる",
    effortHigh: "扇風機を何個も部屋中に配置して",
    amazonName: "MYCARBON サーキュレーター 静音 首振り",
    amazonUrl: "https://www.amazon.co.jp/dp/B0D579T4SC",
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

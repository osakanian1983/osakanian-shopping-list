const GENRES = [
  {
    name: "日焼け止めスプレー",
    worry: "塗り直しが面倒な日焼け止め",
    product: "日焼け止めスプレー",
    price: "1500円",
    dailyEffort: "シュッと吹きかけるだけ",
    period: "1回",
    resultGood: "焼けが気になる部分にすぐ重ね塗りできる",
    altHigh: "月8000円の美容クリニック",
    altBadState: "施術直後はいいのに日焼けが戻ってる",
    effortHigh: "毎回手にクリームを出して塗り広げて",
    tag: "美容",
    rakutenName: "紫外線予報 UVスプレーM 無添加",
    rakutenUrl: "https://item.rakuten.co.jp/mugigokoro/4992440034744/",
  },
  {
    name: "エクササイズフラフープ",
    worry: "座り仕事で緩んできたお腹周り",
    product: "フラフープ",
    price: "2500円",
    dailyEffort: "回すだけ",
    period: "2週間",
    resultGood: "お腹周りが引き締まってくびれが戻ってくる",
    altHigh: "月1万円のパーソナルジム",
    altBadState: "通うのをやめたらすぐ体型が戻ってる",
    effortHigh: "毎回ジムまで通って器具の順番待ちをして",
    tag: "ダイエット",
    rakutenName: "青井屋 組立式フラフープ 落ちない",
    rakutenUrl: "https://item.rakuten.co.jp/aoyiya88/d587/",
  },
  {
    name: "全自動コーヒーメーカー",
    worry: "朝の忙しい時間にかかるコーヒーの手間",
    product: "コーヒーメーカー",
    price: "8000円",
    dailyEffort: "豆と水を入れてボタンを押すだけ",
    period: "1回",
    resultGood: "本格的な一杯がすぐできて朝の時間に余裕ができる",
    altHigh: "1杯500円のカフェ",
    altBadState: "並んだ直後はいいのに毎朝また時間がなくなる",
    effortHigh: "毎朝豆を挽いて何分もドリップして",
    tag: "時短家電",
    rakutenName: "Toffy 全自動コーヒーメーカー ミル付き",
    rakutenUrl: "https://item.rakuten.co.jp/toffy/21120410/",
  },
  {
    name: "折り畳み物干しラック",
    worry: "部屋干しで干す場所が足りない洗濯物",
    product: "折り畳み物干しラック",
    price: "4000円",
    dailyEffort: "広げて洗濯物をかけるだけ",
    period: "1回",
    resultGood: "干す場所が増えて部屋干しがスムーズになる",
    altHigh: "数十万円のリフォーム",
    altBadState: "リフォームしても結局洗濯物が重なって乾かない",
    effortHigh: "毎回カーテンレールに無理やり干して",
    tag: "収納",
    rakutenName: "Mirx パラソル型物干しスタンド 楽天1位",
    rakutenUrl: "https://item.rakuten.co.jp/neo-lifestyle/drystand/",
  },
  {
    name: "ハンディファン",
    worry: "夏の外出先での蒸し暑さ",
    product: "ハンディファン",
    price: "2000円",
    dailyEffort: "スイッチを入れてあおぐだけ",
    period: "1回",
    resultGood: "顔周りがすぐ涼しくなって汗だくにならずに済む",
    altHigh: "月1万円のジム通い",
    altBadState: "通った直後はいいのにすぐ汗だくに戻ってる",
    effortHigh: "毎回うちわで何度もあおいで",
    tag: "暑さ対策",
    rakutenName: "冷却プレート搭載ハンディファン 楽天1位",
    rakutenUrl: "https://item.rakuten.co.jp/azusa/0302/",
  },
  {
    name: "ベビーゲート",
    worry: "キッチンや階段への赤ちゃんの立ち入り",
    product: "ベビーゲート",
    price: "6000円",
    dailyEffort: "設置した場所で開閉するだけ",
    period: "1回",
    resultGood: "危ない場所に入れなくなって安心できる",
    altHigh: "月2万円のベビーシッター",
    altBadState: "頼んだ直後はいいのに毎回料金が気になる",
    effortHigh: "毎回赤ちゃんを抱いて危ない場所から引き離して",
    tag: "育児",
    rakutenName: "PLUSiiNE ベビーゲート 楽天No.1",
    rakutenUrl: "https://item.rakuten.co.jp/plusiine/babygate01/",
  },
  {
    name: "ノートPCスタンド",
    worry: "長時間のパソコン作業での猫背・肩こり",
    product: "ノートPCスタンド",
    price: "2500円",
    dailyEffort: "パソコンを置くだけ",
    period: "1回",
    resultGood: "画面が目線に合って姿勢が自然に良くなる",
    altHigh: "月1万円の整体通い",
    altBadState: "施術直後はいいのに数日で肩こりが戻ってる",
    effortHigh: "毎回クッションを重ねて高さを調整して",
    tag: "デスクワーク",
    rakutenName: "Dot Line 折りたたみノートPCスタンド",
    rakutenUrl: "https://item.rakuten.co.jp/dotline/998002pcstand/",
  },
  {
    name: "ペット用階段",
    worry: "ソファやベッドに乗れない愛犬の足腰",
    product: "ペット用階段",
    price: "4000円",
    dailyEffort: "ソファの横に置くだけ",
    period: "1回",
    resultGood: "足腰に負担をかけずに自分でソファに乗れる",
    altHigh: "1回5000円のタクシー",
    altBadState: "利用した直後はいいのに毎回予約が取れず困る",
    effortHigh: "毎回抱き上げて何度もソファに乗せて",
    tag: "ペット用品",
    rakutenName: "ドッグステップ 4段 小型犬用",
    rakutenUrl: "https://item.rakuten.co.jp/livingut/292270/",
  },
  {
    name: "レシート管理ファイルケース",
    worry: "財布にたまる一方のレシートの管理",
    product: "レシート管理ファイルケース",
    price: "1500円",
    dailyEffort: "帰宅時にポケットへ差すだけ",
    period: "1回",
    resultGood: "必要なレシートがすぐ見つかる",
    altHigh: "月500円の家計簿アプリ",
    altBadState: "課金直後はいいのにすぐ入力が面倒で放置してる",
    effortHigh: "毎回財布の中から何枚も探して仕分けて",
    tag: "家計管理",
    rakutenName: "SUKITTO レシートホルダー インデックス付き",
    rakutenUrl: "https://item.rakuten.co.jp/enn-shop/int-717/",
  },
  {
    name: "防災リュック",
    worry: "地震など災害時の備えへの不安",
    product: "防災リュック",
    price: "8000円",
    dailyEffort: "玄関に置いておくだけ",
    period: "1回",
    resultGood: "必要なものが揃っていてすぐ持ち出せて安心できる",
    altHigh: "数十万円の防災リフォーム",
    altBadState: "リフォームしても結局中身の備えが足りてない",
    effortHigh: "毎回必要な物を一つずつ買い集めて",
    tag: "防災グッズ",
    rakutenName: "防災士監修 1人用防災セット 30点",
    rakutenUrl: "https://item.rakuten.co.jp/bousai-zstyle/z-19800/",
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

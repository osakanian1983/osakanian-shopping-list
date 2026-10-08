const GENRES = [
  {
    name: "加圧インナー",
    worry: "猫背や姿勢の崩れが気になる悩み",
    product: "加圧インナー",
    price: "3000円",
    dailyEffort: "着替えるときに着るだけ",
    period: "1週間",
    resultGood: "姿勢が整って引き締まって見える",
    altHigh: "1回5000円のパーソナルトレーニング",
    altBadState: "通っても数日で姿勢が元に戻る",
    effortHigh: "毎回予約を取ってジムに通って",
    tag: "ダイエット",
    rakutenName: "FERRY スタイルアップインナー 加圧シャツ",
    rakutenUrl: "https://item.rakuten.co.jp/ferry/aluh-al60/",
  },
  {
    name: "レシートスキャナー",
    worry: "レシートが溜まって家計簿が続かない悩み",
    product: "レシートスキャナー",
    price: "2万円",
    dailyEffort: "レシートを通すだけ",
    period: "1週間",
    resultGood: "家計簿が自動でたまって続けられる",
    altHigh: "月500円の家計簿代行サービス",
    altBadState: "頼んでも結局レシートを渡し忘れる",
    effortHigh: "毎月レシートをまとめて送って",
    tag: "家計管理",
    rakutenName: "ScanSnap iX100 FI-IX100BW",
    rakutenUrl: "https://item.rakuten.co.jp/bungudo/7247425/",
  },
  {
    name: "電熱ネックウォーマー",
    worry: "デスクワークで肩や首が冷えて固まる悩み",
    product: "電熱ネックウォーマー",
    price: "3500円",
    dailyEffort: "首に巻いてスイッチを入れるだけ",
    period: "1回",
    resultGood: "首元が温まって肩のこわばりが和らぐ",
    altHigh: "1回5000円の肩こり整体",
    altBadState: "施術直後だけで翌日にはまたこわばる",
    effortHigh: "毎回予約を取って整体に通って",
    tag: "肩こり対策",
    rakutenName: "電熱マフラー ネックウォーマー USB給電式",
    rakutenUrl: "https://item.rakuten.co.jp/meisei/1213/",
  },
  {
    name: "伸縮突っ張り棒",
    worry: "クローゼットの収納力が足りない悩み",
    product: "伸縮突っ張り棒",
    price: "2000円",
    dailyEffort: "取り付けてハンガーをかけるだけ",
    period: "1回",
    resultGood: "収納スペースが一気に増える",
    altHigh: "5万円のクローゼット増設リフォーム",
    altBadState: "リフォームしても荷物がすぐ溢れる",
    effortHigh: "工事の予約を取って数日待って",
    tag: "収納",
    rakutenName: "アイリスオーヤマ スタイル伸縮棒 SSB-280",
    rakutenUrl: "https://item.rakuten.co.jp/irisplaza-r/529258/",
  },
  {
    name: "コードレスヘアアイロン",
    worry: "朝の前髪セットに時間がかかる悩み",
    product: "コードレスヘアアイロン",
    price: "4000円",
    dailyEffort: "充電して前髪に当てるだけ",
    period: "1回",
    resultGood: "短時間で前髪がきれいに決まる",
    altHigh: "1回4000円の美容室のセット",
    altBadState: "セットしてもらっても翌日には崩れる",
    effortHigh: "毎回予約を取って美容室に通って",
    tag: "ヘアケア",
    rakutenName: "ALILIY ヘアアイロン コードレス",
    rakutenUrl: "https://item.rakuten.co.jp/yangzi81/lt-2231h/",
  },
  {
    name: "超軽量抱っこ紐",
    worry: "抱っこ紐の重さで腰や肩が痛くなる悩み",
    product: "超軽量抱っこ紐",
    price: "6000円",
    dailyEffort: "肩にかけて赤ちゃんを入れるだけ",
    period: "1回",
    resultGood: "長時間抱っこしても体が楽になる",
    altHigh: "1回3000円の産後ケア整体",
    altBadState: "施術直後だけで抱っこするとまた痛む",
    effortHigh: "毎回予約を取って整体に通って",
    tag: "育児",
    rakutenName: "AKOAKOスリングS わずか100g",
    rakutenUrl: "https://item.rakuten.co.jp/akoakostudio/bw/",
  },
  {
    name: "USBホットアイマスク",
    worry: "目の疲れで寝つきが悪くなる悩み",
    product: "USBホットアイマスク",
    price: "2500円",
    dailyEffort: "充電して目元に当てるだけ",
    period: "1回",
    resultGood: "目元が温まってすっと眠りに入れる",
    altHigh: "4000円の眼精疲労マッサージ",
    altBadState: "施術直後だけで翌日には疲れが戻る",
    effortHigh: "毎回予約を取ってサロンに通って",
    tag: "睡眠",
    rakutenName: "USB アイマスク 3Dヘッド立体蒸気ホット",
    rakutenUrl: "https://item.rakuten.co.jp/compia/v1564/",
  },
  {
    name: "自動調理鍋",
    worry: "毎晩の料理の付きっきりがつらい悩み",
    product: "自動調理鍋",
    price: "3万円",
    dailyEffort: "材料を入れてボタンを押すだけ",
    period: "1回",
    resultGood: "放っておくだけで一品完成して楽になる",
    altHigh: "1回3000円の総菜の買い足し",
    altBadState: "頼ってもお金がかさんで栄養も偏る",
    effortHigh: "毎回総菜を買いに出かけて",
    tag: "時短家電",
    rakutenName: "アイリスオーヤマ CHEF DRUM シェフドラム",
    rakutenUrl: "https://item.rakuten.co.jp/irisplaza-r/290390/",
  },
  {
    name: "自動開閉折り畳み傘",
    worry: "傘の開閉に手間がかかる悩み",
    product: "自動開閉折り畳み傘",
    price: "2500円",
    dailyEffort: "ボタンを押すだけ",
    period: "1回",
    resultGood: "片手でもサッと開いて濡れずに済む",
    altHigh: "3000円のビニール傘の買い直し",
    altBadState: "買っても壊れてまたすぐ買い直す",
    effortHigh: "毎回コンビニで傘を買い直して",
    tag: "ファッション小物",
    rakutenName: "Prv 自動開閉 折りたたみ傘 220g",
    rakutenUrl: "https://item.rakuten.co.jp/prvec/10000024/",
  },
  {
    name: "爪とぎポール",
    worry: "猫が家具で爪とぎをしてしまう悩み",
    product: "爪とぎポール",
    price: "4000円",
    dailyEffort: "部屋に置いておくだけ",
    period: "1回",
    resultGood: "家具を守りながら猫も満足して爪とぎできる",
    altHigh: "1万円の家具の補修・買い替え",
    altBadState: "買い替えても結局また爪とぎされる",
    effortHigh: "何度も家具を買い替えて",
    tag: "ペット用品",
    rakutenName: "PET PINA 爪とぎポール キャットタワー",
    rakutenUrl: "https://item.rakuten.co.jp/nyandemoya/petpina-pole/",
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

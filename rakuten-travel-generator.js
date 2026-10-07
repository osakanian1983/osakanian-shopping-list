const GENRES = [
  {
    name: "城崎温泉の老舗旅館",
    worry: "外湯めぐりの宿選びで失敗したくない悩み",
    product: "城崎温泉の老舗旅館",
    price: "1泊2万円",
    dailyEffort: "宿の内湯と貸切露天に浸かるだけ",
    period: "1泊",
    resultGood: "朝夕で湯を入れ替える贅沢を満喫できる",
    altHigh: "1200円の外湯めぐり手形",
    altBadState: "巡っても移動で疲れてすぐ終わる",
    effortHigh: "外湯を何軒もはしごして移動して",
    tag: "城崎温泉",
    rakutenName: "城崎温泉 旅館 つばき乃",
    rakutenUrl: "https://travel.rakuten.co.jp/HOTEL/8642/8642.html",
    enCaption: "A ryokan at Kinosaki Onsen, Hyogo, famous for its town-wide hot spring bathhouses.",
  },
  {
    name: "阿蘇グランピング",
    worry: "キャンプしたいけど準備が面倒で踏み出せない",
    product: "阿蘇グランピング",
    price: "1泊2.4万円",
    dailyEffort: "トレーラーでBBQを待つだけ",
    period: "1泊",
    resultGood: "手ぶらで阿蘇の大自然を満喫できる",
    altHigh: "3万円のキャンプ用品一式",
    altBadState: "買っても準備と撤収が大変",
    effortHigh: "毎回道具を揃えて積んで",
    tag: "阿蘇旅行",
    rakutenName: "KOSUGI RESORT（コスギリゾート）",
    rakutenUrl: "https://travel.rakuten.co.jp/HOTEL/182125/182125.html",
    enCaption: "A glamping resort in Aso, Kumamoto, with trailer stays amid volcanic grasslands.",
  },
  {
    name: "五島列島のオーシャンビューホテル",
    worry: "離島なのに海を感じられない宿選びの悩み",
    product: "五島列島の絶景ホテル",
    price: "1泊2.3万円",
    dailyEffort: "全室オーシャンビューで過ごすだけ",
    period: "1泊",
    resultGood: "朝日も夕日も見られて満足できる",
    altHigh: "3万円の離島クルーズ",
    altBadState: "参加しても天候次第で見えない",
    effortHigh: "予約して港まで通って",
    tag: "五島列島旅行",
    rakutenName: "五島列島リゾートホテル マルゲリータ",
    rakutenUrl: "https://travel.rakuten.co.jp/HOTEL/137433/137433.html",
    enCaption: "An all-ocean-view resort hotel in the Goto Islands, Nagasaki.",
  },
  {
    name: "修善寺温泉の老舗旅館",
    worry: "弘法大師ゆかりの名湯と聞いても半信半疑な悩み",
    product: "修善寺温泉の老舗旅館",
    price: "1泊2.1万円",
    dailyEffort: "宿の貸切風呂に浸かるだけ",
    period: "1泊",
    resultGood: "弘法の湯の実力を体感できる",
    altHigh: "4000円の貸切風呂利用券",
    altBadState: "利用しても時間制限ですぐ終わる",
    effortHigh: "予約を取って貸切風呂に通って",
    tag: "修善寺温泉",
    rakutenName: "修善寺温泉 瑞の里 〇久（まるきゅう）旅館",
    rakutenUrl: "https://travel.rakuten.co.jp/HOTEL/29806/29806.html",
    enCaption: "A ryokan at Shuzenji Onsen, Izu, known for its Kobo Daishi-linked hot spring.",
  },
  {
    name: "別所温泉の老舗旅館",
    worry: "信州の鎌倉と言われても実感が薄い悩み",
    product: "別所温泉の老舗旅館",
    price: "1泊1.9万円",
    dailyEffort: "展望大浴場に浸かるだけ",
    period: "1泊",
    resultGood: "山並みを眺めながら名湯を満喫できる",
    altHigh: "3000円の日帰り温泉巡り",
    altBadState: "巡っても結局移動で時間切れになる",
    effortHigh: "日帰り温泉を何軒もはしごして",
    tag: "別所温泉",
    rakutenName: "別所温泉 旅館 中松屋",
    rakutenUrl: "https://travel.rakuten.co.jp/HOTEL/31713/31713.html",
    enCaption: "A ryokan at Bessho Onsen in Nagano, known as 'Kamakura of Shinshu.'",
  },
  {
    name: "嵐山温泉の貸切風呂旅館",
    worry: "渡月橋周辺の人混みで落ち着けない悩み",
    product: "嵐山温泉の貸切風呂旅館",
    price: "1泊2.1万円",
    dailyEffort: "5つの貸切風呂を夜通し使うだけ",
    period: "1泊",
    resultGood: "人目を気にせず嵐山温泉を独占できる",
    altHigh: "3万円の料亭での会席",
    altBadState: "食べ終わればすぐ特別な時間が終わる",
    effortHigh: "何軒も料亭を予約して食べ歩いて",
    tag: "嵐山旅行",
    rakutenName: "京都 嵐山温泉 花伝抄（共立リゾート）",
    rakutenUrl: "https://travel.rakuten.co.jp/HOTEL/130702/130702.html",
    enCaption: "A ryokan at Arashiyama Onsen, Kyoto, with five free private hot-spring baths.",
  },
  {
    name: "伊勢神宮前の老舗旅館",
    worry: "参拝後にすぐ移動する慌ただしい旅の悩み",
    product: "伊勢神宮前の老舗旅館",
    price: "1泊1.7万円",
    dailyEffort: "外宮すぐの宿にそのまま泊まるだけ",
    period: "1泊",
    resultGood: "参拝後すぐくつろげて旅がゆったりする",
    altHigh: "1万円の参拝日帰りツアー",
    altBadState: "参加しても慌ただしく移動が続く",
    effortHigh: "日帰りで参拝ツアーに参加して",
    tag: "伊勢旅行",
    rakutenName: "旅館つるや",
    rakutenUrl: "https://travel.rakuten.co.jp/HOTEL/13671/13671.html",
    enCaption: "A ryokan right by Ise Jingu's outer shrine, run by one family for generations.",
  },
  {
    name: "松本の一棟貸し古民家",
    worry: "観光地のホテルでは味わえない特別感がない悩み",
    product: "松本の一棟貸し古民家",
    price: "1泊2万円",
    dailyEffort: "古民家を一棟まるごと借りるだけ",
    period: "1泊",
    resultGood: "大切な人と特別な時を独り占めできる",
    altHigh: "3万円の老舗旅館のスイート",
    altBadState: "泊まっても代わり映えしない",
    effortHigh: "特別感を求めて宿を比較して",
    tag: "松本旅行",
    rakutenName: "古民家一棟貸し宿「CLA-CHIC」",
    rakutenUrl: "https://travel.rakuten.co.jp/HOTEL/196017/196017.html",
    enCaption: "A whole traditional farmhouse rental in Matsumoto, Nagano.",
  },
  {
    name: "奥能登の古民家一棟貸し",
    worry: "満点の星空に憧れても叶えられない悩み",
    product: "奥能登の古民家一棟貸し",
    price: "1泊2.2万円",
    dailyEffort: "ワイン樽露天風呂に浸かるだけ",
    period: "1泊",
    resultGood: "満点の星空と海を独り占めできる",
    altHigh: "1万円の天体観測ツアー",
    altBadState: "参加しても天候次第で星が見えない",
    effortHigh: "予約を取って観測地まで通って",
    tag: "能登旅行",
    rakutenName: "奥能登古民家 雅",
    rakutenUrl: "https://travel.rakuten.co.jp/HOTEL/184596/184596.html",
    enCaption: "A whole farmhouse rental in Noto, Ishikawa, with a wine-barrel open-air bath.",
  },
  {
    name: "礼文島の民宿",
    worry: "最北の離島で宿選びに失敗したくない悩み",
    product: "礼文島の民宿",
    price: "1泊1万円",
    dailyEffort: "港近くの民宿にそのまま泊まるだけ",
    period: "1泊",
    resultGood: "ウニや魚料理を味わいながらくつろげる",
    altHigh: "1.5万円の日帰り観光船",
    altBadState: "参加しても時間に追われて味わえない",
    effortHigh: "日帰りで観光船の時間に追われて",
    tag: "礼文島旅行",
    rakutenName: "民宿 山光",
    rakutenUrl: "https://travel.rakuten.co.jp/HOTEL/41043/41043.html",
    enCaption: "A family-run minshuku on Rebun Island, Japan's northernmost inhabited island.",
  },
];

const PATTERNS = [
  {
    key: "A",
    title: "パターンA｜価格ギャップ重視型",
    scoreRange: { hook: [17, 19], concrete: [18, 20], contrarian: [15, 18], empathy: [15, 18], clip: [15, 18] },
    reasons: ["価格差のインパクトでクリップを誘発するため", "コスパ訴求が当事者に刺さりやすいため"],
    build(g) {
      const l1 = `${g.worry}に悩んでる人、${g.product}に泊まって本当によかった。`;
      const rest =
        `だって、${g.price}なのに${g.dailyEffort}で${g.period}には${g.resultGood}って` +
        `正直コスパ良すぎ🕊️${g.altHigh}に泊まってるのに${g.altBadState}人こそ試して。` +
        `高いお金払って変化ないより、${g.price}でちゃんと満足できる方が良くない？🕊️`;
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
        `だって、${g.dailyEffort}だけで${g.period}には${g.resultGood}って` +
        `忙しい人ほどマジで助かるやつ🕊️${g.effortHigh}頑張ってるのに疲れが取れない人こそ試して。` +
        `手間かけて一時的に変わるより、${g.dailyEffort}で自然にリフレッシュできる方が良くない？🕊️`;
      return `${l1}\n${rest}`;
    },
  },
  {
    key: "C",
    title: "パターンC｜逆張り・共感重視型",
    scoreRange: { hook: [17, 19], concrete: [16, 19], contrarian: [18, 20], empathy: [17, 19], clip: [16, 19] },
    reasons: ["高額勢を名指しし共感と反論を誘発するため", "逆張り視点でコメントを誘発しやすいため"],
    build(g) {
      const l1 = `${g.worry}、実は${g.altHigh}に泊まってる人ほど気づいてない落とし穴があるらしい。`;
      const rest =
        `だって、値段より過ごし方が大事で${g.price}の${g.product}でも${g.period}過ごしたら` +
        `${g.resultGood}って🕊️${g.altHigh}に泊まって満足しただけで${g.altBadState}人こそ試して。` +
        `値段で安心するより、ちゃんと満喫する方が良くない？🕊️`;
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

const HASHTAGS = "#PR #楽天トラベル #国内旅行 #旅行好き #旅好きさんと繋がりたい";

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

function formatRound(results, genre) {
  const divider = "━━━━━━━━━━━━━━━";
  const enLine = genre.enCaption ? `🌐 ${genre.enCaption} (Ad)\n\n` : "";
  const blocks = results.map(({ pattern, body, tags, scores, total }) => {
    const scoreLines = SCORE_LABELS.map(([key, label]) => `・${label}：${scores[key]}/20`).join("\n");
    return `${divider}\n【${pattern.title}】\n伸びる確率：${total}％\n\n${body}\n\n${enLine}${tags}\n\n採点内訳：\n${scoreLines}`;
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
  currentText = formatRound(results, genre);

  genreLabelEl.textContent = `今日のテーマ：${genre.name}`;
  productInfoEl.textContent = "";
  const linkLabel = document.createElement("span");
  linkLabel.textContent = "紹介施設：";
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

const GENRES = [
  {
    name: "由布院温泉の露天風呂旅館",
    worry: "都会の喧騒から離れたくても時間が取れない焦り",
    product: "由布院温泉の露天風呂旅館",
    price: "1泊2.2万円",
    dailyEffort: "屋上の露天風呂に浸かるだけ",
    period: "1泊",
    resultGood: "由布岳を眺めながら心身ともにリセットできる",
    altHigh: "3万円の都内スパ",
    altBadState: "通っても数日で忙しさに戻ってる",
    effortHigh: "予約して都内のスパに通って",
    tag: "由布院旅行",
    rakutenName: "由布院温泉 旅館 はちすの糸",
    rakutenUrl: "https://travel.rakuten.co.jp/HOTEL/181856/181856.html",
    enCaption: "A ryokan in Yufuin with a rooftop open-air bath overlooking Mt. Yufu.",
  },
  {
    name: "登別温泉の湯めぐり旅館",
    worry: "日々の疲れが何日も抜けない悩み",
    product: "登別温泉の湯めぐり旅館",
    price: "1泊1.6万円",
    dailyEffort: "宿の大浴場に浸かるだけ",
    period: "1泊",
    resultGood: "濃厚な温泉でしっかり疲れが抜ける",
    altHigh: "月1万円の整骨院通い",
    altBadState: "通っても数日で疲れがぶり返す",
    effortHigh: "毎回予約して整骨院に通って",
    tag: "登別旅行",
    rakutenName: "登別温泉 ホテルゆもと登別",
    rakutenUrl: "https://travel.rakuten.co.jp/HOTEL/9691/9691.html",
    enCaption: "A hot spring hotel in Noboribetsu, Hokkaido's famous onsen town.",
  },
  {
    name: "石垣島のデザイナーズホテル",
    worry: "南国でも代わり映えしない観光地巡り",
    product: "石垣島のデザイナーズホテル",
    price: "1泊2.3万円",
    dailyEffort: "プールサイドでくつろぐだけ",
    period: "1泊",
    resultGood: "おしゃれな空間で非日常をじっくり味わえる",
    altHigh: "3万円の離島ツアー",
    altBadState: "参加しても移動ばかりでくつろげない",
    effortHigh: "観光地を何か所も巡って",
    tag: "石垣島旅行",
    rakutenName: "SOLAIZ Ishigaki Island",
    rakutenUrl: "https://travel.rakuten.co.jp/HOTEL/191496/191496.html",
    enCaption: "A design hotel on Ishigaki Island, Okinawa's subtropical gem.",
  },
  {
    name: "祖谷の一棟貸し古民家",
    worry: "観光客で賑わう宿では落ち着けない不満",
    product: "祖谷の一棟貸し古民家",
    price: "1泊2.4万円",
    dailyEffort: "囲炉裏端でくつろぐだけ",
    period: "1泊",
    resultGood: "古民家を独り占めして静かな時間を過ごせる",
    altHigh: "1万円の日帰りバスツアー",
    altBadState: "参加しても人混みで疲れる",
    effortHigh: "何軒も観光地を回って写真を撮って",
    tag: "祖谷旅行",
    rakutenName: "古民家一棟貸し 有山",
    rakutenUrl: "https://travel.rakuten.co.jp/HOTEL/194101/194101.html",
    enCaption: "A whole traditional farmhouse rental in the Iya Valley, Shikoku.",
  },
  {
    name: "出雲・玉造温泉の老舗旅館",
    worry: "縁結び祈願の旅で宿選びに失敗する不安",
    product: "出雲・玉造温泉の老舗旅館",
    price: "1泊2万円",
    dailyEffort: "老舗旅館を予約するだけ",
    period: "1泊",
    resultGood: "300年続く名湯でしっかり満足できる",
    altHigh: "1万円の日帰り温泉巡り",
    altBadState: "巡ってもすぐ物足りなさが残る",
    effortHigh: "何軒も日帰り温泉をはしごして",
    tag: "出雲旅行",
    rakutenName: "出雲・玉造温泉 白石家",
    rakutenUrl: "https://travel.rakuten.co.jp/HOTEL/78179/78179.html",
    enCaption: "A 300-year-old ryokan at Tamatsukuri Onsen near Izumo, Shimane.",
  },
  {
    name: "黒川温泉の老舗旅館",
    worry: "情緒ある温泉街で宿選びに迷う悩み",
    product: "黒川温泉の老舗旅館",
    price: "1泊2.1万円",
    dailyEffort: "宿の露天風呂に浸かるだけ",
    period: "1泊",
    resultGood: "黒川らしい湯めぐり情緒を満喫できる",
    altHigh: "3000円の入浴手形で湯めぐり",
    altBadState: "巡っても移動で時間が終わる",
    effortHigh: "何軒も旅館を回って湯めぐりして",
    tag: "黒川温泉",
    rakutenName: "黒川温泉 旅館 わかば",
    rakutenUrl: "https://travel.rakuten.co.jp/HOTEL/31854/31854.html",
    enCaption: "A traditional ryokan at Kurokawa Onsen in Kumamoto, Kyushu.",
  },
  {
    name: "伊豆高原の貸切ペンション",
    worry: "家族旅行で周りに気を遣う窮屈さ",
    product: "伊豆高原の貸切ペンション",
    price: "1泊1.8万円",
    dailyEffort: "ペンションを1組貸切で過ごすだけ",
    period: "1泊",
    resultGood: "他の客に気を遣わず家族だけで過ごせる",
    altHigh: "2.5万円の個室旅館",
    altBadState: "個室でも館内では他の客と顔を合わせる",
    effortHigh: "気を遣いながら館内を移動して",
    tag: "伊豆高原旅行",
    rakutenName: "伊豆高原 パーソナルペンション遊タイム",
    rakutenUrl: "https://travel.rakuten.co.jp/HOTEL/41806/41806.html",
    enCaption: "A private one-group-only pension in Izu Kogen, Shizuoka.",
  },
  {
    name: "奥多摩のグランピング施設",
    worry: "キャンプの準備が面倒で踏み出せない",
    product: "奥多摩のグランピング施設",
    price: "1泊2.2万円",
    dailyEffort: "ドームテントでBBQを待つだけ",
    period: "1泊",
    resultGood: "手ぶらで本格アウトドア気分を味わえる",
    altHigh: "3万円のキャンプ用品一式",
    altBadState: "買っても準備と撤収が大変",
    effortHigh: "毎回道具を揃えて積んで",
    tag: "奥多摩旅行",
    rakutenName: "FUREAI GLAMPING & BBQ",
    rakutenUrl: "https://travel.rakuten.co.jp/HOTEL/173145/173145.html",
    enCaption: "A glamping site in Okutama's gorge, a quick trip from central Tokyo.",
  },
  {
    name: "田沢湖畔の絶景リゾート",
    worry: "窓を開けても代わり映えしない日常の景色",
    product: "田沢湖畔の絶景リゾート",
    price: "1泊1.7万円",
    dailyEffort: "部屋の窓から湖を眺めるだけ",
    period: "1泊",
    resultGood: "日本一深い湖の絶景で気分が切り替わる",
    altHigh: "2万円の遊覧船プラン",
    altBadState: "乗っても天候次第で景色が見えず終わる",
    effortHigh: "湖畔まで何度も通って時間を待って",
    tag: "田沢湖旅行",
    rakutenName: "天然温泉 田沢湖レイクリゾート",
    rakutenUrl: "https://travel.rakuten.co.jp/HOTEL/4624/4624.html",
    enCaption: "A lakeside resort with views of Lake Tazawa, Japan's deepest lake.",
  },
  {
    name: "沖縄恩納村のコンドミニアムリゾート",
    worry: "子連れ旅行で感じる部屋の狭さ",
    product: "沖縄恩納村のコンドリゾート",
    price: "1泊2.6万円",
    dailyEffort: "キッチン付きの部屋でくつろぐだけ",
    period: "1泊",
    resultGood: "広々した部屋で家族全員がゆったり過ごせる",
    altHigh: "3万円のシティホテル",
    altBadState: "泊まっても部屋が狭くて窮屈",
    effortHigh: "荷物を減らす準備を何度もして",
    tag: "沖縄旅行",
    rakutenName: "カフーリゾートフチャク コンド・ホテル",
    rakutenUrl: "https://travel.rakuten.co.jp/HOTEL/78239/78239.html",
    enCaption: "An ocean-view condo resort in Onna, on Okinawa's main island.",
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

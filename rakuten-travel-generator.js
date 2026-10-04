const GENRES = [
  {
    name: "伊勢志摩のシーサイドグランピング",
    worry: "代わり映えしない週末の過ごし方",
    product: "伊勢志摩のグランピング",
    price: "1泊2.6万円",
    dailyEffort: "ドーム型テントでBBQを待つだけ",
    period: "1泊",
    resultGood: "海辺の贅沢さで非日常感を満喫できる",
    altHigh: "3万円のホテルスイート",
    altBadState: "泊まっても代わり映えしない",
    effortHigh: "高級ホテルを何軒も比較して",
    tag: "伊勢志摩旅行",
    rakutenName: "旅荘 海の蝶【グランピング】[グランオーシャン伊勢志摩]",
    rakutenUrl: "https://travel.rakuten.co.jp/HOTEL/40332/40332.html",
    enCaption: "A seaside glamping resort in Ise-Shima with dome tents and ocean-view BBQ dinners.",
  },
  {
    name: "那須の一棟貸し貸別荘",
    worry: "ペットと泊まれる宿が少ない悩み",
    product: "那須の貸別荘",
    price: "1泊3万円",
    dailyEffort: "貸切別荘でペットと寝転ぶだけ",
    period: "1泊",
    resultGood: "ペットも気兼ねなくくつろげる",
    altHigh: "月1万円のドッグカフェ通い",
    altBadState: "通っても自宅ほど落ち着けない",
    effortHigh: "ペット可施設を何軒も探して",
    tag: "那須旅行",
    rakutenName: "那須ロイヤルヴィラ／民泊",
    rakutenUrl: "https://travel.rakuten.co.jp/HOTEL/194365/194365.html",
    enCaption: "A whole-villa rental in Nasu where you can stay together with your pet.",
  },
  {
    name: "宮古島のオーシャンリゾート",
    worry: "忙しさが抜けない南国旅行",
    product: "宮古島のリゾート",
    price: "1泊2.4万円",
    dailyEffort: "プライベートプールに浮かぶだけ",
    period: "1泊",
    resultGood: "宮古ブルーの海で心から解放される",
    altHigh: "3万円の南国ツアー",
    altBadState: "参加しても移動ばかりで休めない",
    effortHigh: "観光地を何か所も回って",
    tag: "宮古島旅行",
    rakutenName: "シーウッドホテル＜宮古島＞",
    rakutenUrl: "https://travel.rakuten.co.jp/HOTEL/179123/179123.html",
    enCaption: "An ocean resort on Kurima Island near Miyako, with villa-style rooms and private pools.",
  },
  {
    name: "博多駅前のビジネスホテル",
    worry: "出張の夜に移動で疲れる悩み",
    product: "博多駅前のホテル",
    price: "1泊8000円",
    dailyEffort: "駅直結のホテルに荷物を置くだけ",
    period: "1泊",
    resultGood: "移動ゼロで翌朝もゆとりが持てる",
    altHigh: "1万5000円の郊外ホテル",
    altBadState: "泊まっても毎回タクシーを使ってる",
    effortHigh: "毎回荷物を運んで",
    tag: "博多出張",
    rakutenName: "ヴィアイン博多口駅前（JR西日本グループ）",
    rakutenUrl: "https://travel.rakuten.co.jp/HOTEL/172227/172227.html",
    enCaption: "A business hotel right by Hakata Station, perfect for a stress-free work trip.",
  },
  {
    name: "河口湖の富士山ビューホテル",
    worry: "富士山が見えないホテル泊まり",
    product: "河口湖の富士山ビューホテル",
    price: "1泊2.1万円",
    dailyEffort: "部屋のカーテンを開けるだけ",
    period: "1泊",
    resultGood: "逆さ富士の絶景に気分が上がる",
    altHigh: "3万円の展望台ツアー",
    altBadState: "行っても景色を見られない",
    effortHigh: "展望台を求めて移動して",
    tag: "河口湖旅行",
    rakutenName: "河口湖温泉 富士レークホテル",
    rakutenUrl: "https://travel.rakuten.co.jp/HOTEL/7298/7298.html",
    enCaption: "A lakeside hotel in Kawaguchiko with stunning views of Mt. Fuji right from your room.",
  },
  {
    name: "軽井沢のペット同伴ホテル",
    worry: "愛犬を留守番させるうしろめたさ",
    product: "軽井沢のペット同伴ホテル",
    price: "1泊2.2万円",
    dailyEffort: "愛犬とレストランに入るだけ",
    period: "1泊",
    resultGood: "愛犬と食事も温泉も一緒に楽しめる",
    altHigh: "1日5000円のペットホテル",
    altBadState: "預けても様子が気になる",
    effortHigh: "預け先を何件も見学に行って",
    tag: "軽井沢旅行",
    rakutenName: "軽井沢 ホテルそよかぜ",
    rakutenUrl: "https://travel.rakuten.co.jp/HOTEL/5158/5158.html",
    enCaption: "A pet-friendly hotel in Karuizawa where your dog can join you at dinner.",
  },
  {
    name: "京都の一棟貸し町家",
    worry: "ホテルだと味気ない京都旅行",
    product: "京都の一棟貸し町家",
    price: "1泊2.5万円",
    dailyEffort: "町家を一棟まるごと貸し切るだけ",
    period: "1泊",
    resultGood: "静かな町家で京都情緒を満喫できる",
    altHigh: "3万円の老舗ホテルスイート",
    altBadState: "泊まっても代わり映えしない",
    effortHigh: "町家風ホテルを何軒も見比べて",
    tag: "京都旅行",
    rakutenName: "清水五条 水月－すいげつ〈一棟貸し町家〉",
    rakutenUrl: "https://travel.rakuten.co.jp/HOTEL/183074/183074.html",
    enCaption: "A whole traditional machiya townhouse rental near Kiyomizu-Gojo in Kyoto.",
  },
  {
    name: "南紀白浜のファミリー旅館",
    worry: "子連れ旅行の宿選びで気疲れする",
    product: "南紀白浜のファミリー旅館",
    price: "1泊1.8万円",
    dailyEffort: "キッズスペースで遊ばせるだけ",
    period: "1泊",
    resultGood: "親子で温泉も遊びも楽しめる",
    altHigh: "2万円の都市部ホテル",
    altBadState: "泊まっても子供が部屋で飽きる",
    effortHigh: "観光地を何か所も回って",
    tag: "南紀白浜旅行",
    rakutenName: "白浜温泉 家族とすごす白浜の宿 柳屋",
    rakutenUrl: "https://travel.rakuten.co.jp/HOTEL/9133/9133.html",
    enCaption: "A family-friendly hot spring inn in Nanki-Shirahama with a kids' play room.",
  },
  {
    name: "屋久島の天然温泉宿",
    worry: "旅先でも移動に追われる疲れ",
    product: "屋久島の天然温泉宿",
    price: "1泊1.9万円",
    dailyEffort: "徒歩1分の宿で温泉に浸かるだけ",
    period: "1泊",
    resultGood: "移動の疲れを感じる前に癒される",
    altHigh: "月1万円のスパ施設通い",
    altBadState: "通っても疲れが根本的に取れない",
    effortHigh: "遠方のスパまで休みごとに通って",
    tag: "屋久島旅行",
    rakutenName: "天然温泉と縄文の宿「まんてん」＜屋久島＞",
    rakutenUrl: "https://travel.rakuten.co.jp/HOTEL/56978/56978.html",
    enCaption: "A natural hot spring inn one minute from Yakushima Airport, perfect after a long trip.",
  },
  {
    name: "熱海の記念日旅館",
    worry: "記念日でも特別感のない食事会",
    product: "熱海の記念日旅館",
    price: "1泊4.5万円",
    dailyEffort: "部屋の半露天風呂に浸かるだけ",
    period: "1泊",
    resultGood: "絶景と温泉で特別な記念日になる",
    altHigh: "6万円の記念日コース",
    altBadState: "食後すぐ特別な時間が終わる",
    effortHigh: "記念日プランを何軒も探して",
    tag: "熱海旅行",
    rakutenName: "熱海倶楽部 迎賓館",
    rakutenUrl: "https://travel.rakuten.co.jp/HOTEL/75291/75291.html",
    enCaption: "A hilltop luxury ryokan in Atami with ocean views and private hot-spring suites, ideal for anniversaries.",
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

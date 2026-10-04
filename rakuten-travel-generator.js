const GENRES = [
  {
    name: "金沢の老舗料亭旅館",
    worry: "記念日なのに特別感のない外食",
    product: "金沢の老舗料亭旅館",
    price: "1泊4万円",
    dailyEffort: "予約して仲居さんにお任せするだけ",
    period: "1泊",
    resultGood: "非日常のおもてなしで特別な記念日になる",
    altHigh: "5万円の記念日ディナーコース",
    altBadState: "食べ終わったらすぐ日常に戻ってる",
    effortHigh: "何軒も予約サイトを見比べて店を探して",
    tag: "金沢旅行",
    rakutenName: "浅田屋",
    rakutenUrl: "https://travel.rakuten.co.jp/HOTEL/187370/187370.html",
    enCaption: "A historic kaiseki ryokan in Kanazawa — a special pick for an anniversary trip.",
  },
  {
    name: "別府温泉の貸切風呂旅館",
    worry: "人目が気になって落ち着けない大浴場",
    product: "別府の貸切風呂旅館",
    price: "1泊1.5万円",
    dailyEffort: "貸切風呂を予約するだけ",
    period: "1泊",
    resultGood: "誰にも気兼ねなくゆっくり温泉を独占できる",
    altHigh: "月8000円のスパ会員",
    altBadState: "通ってもすぐ混雑が気になってる",
    effortHigh: "空いてる時間を探して何度も通って",
    tag: "別府温泉",
    rakutenName: "別府温泉 新玉旅館",
    rakutenUrl: "https://travel.rakuten.co.jp/HOTEL/40679/40679.html",
    enCaption: "A ryokan in Beppu with private hot-spring baths you can enjoy all to yourselves.",
  },
  {
    name: "尾道・しまなみのゲストハウス",
    worry: "一人旅の宿選びで感じる孤独感",
    product: "しまなみのゲストハウス",
    price: "1泊5000円",
    dailyEffort: "チェックインして座るだけ",
    period: "1泊",
    resultGood: "旅人同士で自然に会話が生まれて楽しくなる",
    altHigh: "3万円の個室高級ホテル",
    altBadState: "泊まっても結局部屋で一人過ごしてる",
    effortHigh: "SNSで一緒に行く人を何人も探して",
    tag: "しまなみ海道",
    rakutenName: "尾道しまなみゲストハウス",
    rakutenUrl: "https://travel.rakuten.co.jp/HOTEL/182704/182704.html",
    enCaption: "A friendly guesthouse on the Shimanami Kaido in Onomichi, great for solo travelers.",
  },
  {
    name: "道後温泉の老舗旅館",
    worry: "歴史ある温泉地での宿選びの失敗",
    product: "道後温泉の老舗旅館",
    price: "1泊2.3万円",
    dailyEffort: "老舗旅館を予約するだけ",
    period: "1泊",
    resultGood: "伝統の湯とおもてなしでしっかり満足できる",
    altHigh: "1万円の日帰り温泉巡り",
    altBadState: "巡ってもすぐ物足りなさが残ってる",
    effortHigh: "何軒も日帰り温泉をはしごして",
    tag: "道後温泉",
    rakutenName: "道後温泉 道後舘",
    rakutenUrl: "https://travel.rakuten.co.jp/HOTEL/10788/10788.html",
    enCaption: "A historic ryokan at Japan's famous Dogo Onsen in Matsuyama.",
  },
  {
    name: "蔵王温泉のスキー宿",
    worry: "滑った後の冷えた体がなかなか温まらない悩み",
    product: "蔵王温泉のスキー宿",
    price: "1泊1.8万円",
    dailyEffort: "宿の温泉に浸かるだけ",
    period: "1泊",
    resultGood: "体の芯から温まって翌日も元気に滑れる",
    altHigh: "月1万円の整体通い",
    altBadState: "施術直後だけ冷えが取れてすぐ戻る",
    effortHigh: "湿布を貼って何時間も休んで",
    tag: "蔵王旅行",
    rakutenName: "蔵王温泉 ホテルラルジャン蔵王",
    rakutenUrl: "https://travel.rakuten.co.jp/HOTEL/13603/13603.html",
    enCaption: "A ski lodge at Zao Onsen in Yamagata with a hot spring to warm up after skiing.",
  },
  {
    name: "松島のオーシャンビュー旅館",
    worry: "窓を開けても代わり映えしない日常の景色",
    product: "松島のオーシャンビュー旅館",
    price: "1泊2万円",
    dailyEffort: "部屋の窓を開けるだけ",
    period: "1泊",
    resultGood: "松島湾の絶景で気分がすぐ切り替わる",
    altHigh: "3万円のクルーズ",
    altBadState: "参加直後はいいのにすぐ日常の景色に戻る",
    effortHigh: "港まで何度も通って遊覧船に並んで",
    tag: "松島旅行",
    rakutenName: "松島温泉 松島一の坊",
    rakutenUrl: "https://travel.rakuten.co.jp/HOTEL/29234/29234.html",
    enCaption: "An ocean-view ryokan overlooking the famous Matsushima Bay in Miyagi.",
  },
  {
    name: "白川郷の合掌造り一棟貸し",
    worry: "観光客で混み合う世界遺産の町並み",
    product: "白川郷の合掌造りの宿",
    price: "1泊2.8万円",
    dailyEffort: "囲炉裏端で夕食を待つだけ",
    period: "1泊",
    resultGood: "夜は静かな合掌造りの雰囲気を独り占めできる",
    altHigh: "1万円のバスツアー",
    altBadState: "参加しても人混みで写真すら撮れない",
    effortHigh: "朝早くから並んで何時間も待って",
    tag: "白川郷旅行",
    rakutenName: "合掌乃宿 孫右エ門",
    rakutenUrl: "https://travel.rakuten.co.jp/HOTEL/25839/25839.html",
    enCaption: "A whole thatched-roof farmhouse rental in the UNESCO village of Shirakawa-go.",
  },
  {
    name: "指宿の砂むし温泉旅館",
    worry: "肩や腰にたまった日々の疲れ",
    product: "指宿の砂むし温泉旅館",
    price: "1泊1.6万円",
    dailyEffort: "砂に埋まって寝転がるだけ",
    period: "1泊",
    resultGood: "全身が温まって疲れがすっと抜けていく",
    altHigh: "月1万円のマッサージ通い",
    altBadState: "施術直後はいいのに数日で疲れが戻ってる",
    effortHigh: "毎回予約を取って何十分も施術を受けて",
    tag: "指宿旅行",
    rakutenName: "指宿温泉 指宿いわさきホテル",
    rakutenUrl: "https://travel.rakuten.co.jp/HOTEL/9226/9226.html",
    enCaption: "A hotel in Ibusuki, Kagoshima, known for its unique natural sand-bath hot springs.",
  },
  {
    name: "小豆島のオーシャンビュー宿",
    worry: "瀬戸内の景色を見ながらゆっくりしたい気持ち",
    product: "小豆島のオーシャンビュー宿",
    price: "1泊1.7万円",
    dailyEffort: "部屋のテラスに出るだけ",
    period: "1泊",
    resultGood: "瀬戸内海を一望して心まで穏やかになる",
    altHigh: "2万円の遊覧船",
    altBadState: "乗っても天候次第で景色が見えず終わる",
    effortHigh: "港まで何度も通って出航時間を待って",
    tag: "小豆島旅行",
    rakutenName: "ベイリゾートホテル小豆島",
    rakutenUrl: "https://travel.rakuten.co.jp/HOTEL/44874/44874.html",
    enCaption: "An ocean-view hotel on Shodoshima Island overlooking the Seto Inland Sea.",
  },
  {
    name: "札幌の高級ホテル",
    worry: "出張の合間に感じる慢性的な疲れ",
    product: "札幌の高級ホテル",
    price: "1泊1.9万円",
    dailyEffort: "最上階の大浴場に入るだけ",
    period: "1泊",
    resultGood: "出張の疲れがすぐ取れて翌日も元気に動ける",
    altHigh: "月1万円のサウナ施設通い",
    altBadState: "通った直後はいいのにすぐ疲れが戻ってる",
    effortHigh: "仕事帰りに何軒もサウナをはしごして",
    tag: "札幌出張",
    rakutenName: "JRタワーホテル日航札幌",
    rakutenUrl: "https://travel.rakuten.co.jp/HOTEL/76941/76941.html",
    enCaption: "A hotel right above Sapporo Station with a relaxing top-floor bath.",
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

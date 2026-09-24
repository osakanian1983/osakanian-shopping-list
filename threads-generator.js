const GENRES = [
  {
    name: "のどぬれマスク",
    worry: "就寝中ののどの乾燥・イガイガ",
    product: "のどぬれマスク",
    price: "500円",
    dailyEffort: "寝る前につけるだけ",
    period: "1回",
    resultGood: "朝までのどが潤ってイガイガせず声もかすれない",
    altHigh: "1万円の加湿器",
    altBadState: "置いても布団の中までは潤わずのどが痛いまま",
    effortHigh: "毎晩枕元に濡れタオルを置いて",
    amazonName: "小林製薬 のどぬーるぬれマスク 就寝用",
    amazonUrl: "https://www.amazon.co.jp/dp/B07GCM12TC",
  },
  {
    name: "ハンディ衣類スチーマー",
    worry: "出かける前のシャツのシワ",
    product: "ハンディ衣類スチーマー",
    price: "3000円",
    dailyEffort: "ハンガーにかけたまま当てるだけ",
    period: "1回",
    resultGood: "ハンガーのままシワが伸びて清潔感が出る",
    altHigh: "1000円のクリーニング",
    altBadState: "持っていくのが面倒で結局シワのまま",
    effortHigh: "毎朝アイロン台を出してじっくりかけて",
    amazonName: "スチームアイロン ハンディ 衣類スチーマー",
    amazonUrl: "https://www.amazon.co.jp/dp/B0CYGPX4F1",
  },
  {
    name: "充電式カイロ",
    worry: "通勤・通学中の手先の冷え",
    product: "充電式カイロ",
    price: "3000円",
    dailyEffort: "ポケットに入れておくだけ",
    period: "1回",
    resultGood: "3秒で手のひらがじんわり温まって冷えを忘れる",
    altHigh: "月2000円のカイロ習慣",
    altBadState: "貼っても数時間で冷めて結局手が冷たいまま",
    effortHigh: "毎日使い捨てカイロを何個も買い足して",
    amazonName: "TNTOR 充電式カイロ 5000mAh",
    amazonUrl: "https://www.amazon.co.jp/dp/B0CK252M7C",
  },
  {
    name: "抗菌まな板",
    worry: "まな板の雑菌臭・傷からのカビ",
    product: "抗菌まな板",
    price: "1500円",
    dailyEffort: "いつも通り使うだけ",
    period: "1週間",
    resultGood: "雑菌臭が気にならずキッチンが清潔なまま",
    altHigh: "月1000円の除菌スプレー",
    altBadState: "スプレーしても傷の奥は結局雑菌が残ってる",
    effortHigh: "毎回熱湯消毒に時間をかけて",
    amazonName: "新輝合成 トンボ まな板 抗菌 食洗機対応",
    amazonUrl: "https://www.amazon.co.jp/dp/B00MLNOMOY",
  },
  {
    name: "リュック用レインカバー",
    worry: "通勤・通学中の雨でのカバン濡れ",
    product: "リュック用レインカバー",
    price: "1000円",
    dailyEffort: "かぶせるだけ",
    period: "1回",
    resultGood: "土砂降りでも中の荷物が濡れずに済む",
    altHigh: "1万円の防水リュック",
    altBadState: "買い替えても縫い目から結局水がにじんでる",
    effortHigh: "雨の日はビニール袋で荷物を何個もくるんで",
    amazonName: "NAA リュックカバー 防水 レインカバー",
    amazonUrl: "https://www.amazon.co.jp/dp/B08C71XYZZ",
  },
  {
    name: "非接触体温計",
    worry: "子どもの夜間の急な発熱チェック",
    product: "非接触体温計",
    price: "3000円",
    dailyEffort: "額に近づけるだけ",
    period: "1回",
    resultGood: "1秒で検温できて眠ってる子を起こさずに済む",
    altHigh: "夜間救急の受診費用",
    altBadState: "受診しても結局待ち時間が長くて子どもがぐったり",
    effortHigh: "毎回脇に体温計を挟んでじっと待って",
    amazonName: "dretec TO-401 非接触体温計",
    amazonUrl: "https://www.amazon.co.jp/dp/B08LV44X2R",
  },
  {
    name: "調節式ハンドグリップ",
    worry: "握力の衰え・前腕の疲れやすさ",
    product: "調節式ハンドグリップ",
    price: "1500円",
    dailyEffort: "1日30回握るだけ",
    period: "1週間",
    resultGood: "握力がついてペットボトルの蓋も楽に開けられる",
    altHigh: "月1万円のジム指導",
    altBadState: "通うのが続かず結局握力の衰えが戻ってる",
    effortHigh: "毎日ジムに通って何時間もマシンを使って",
    amazonName: "YOKELLMUX ハンドグリップ 握力トレーニング",
    amazonUrl: "https://www.amazon.co.jp/dp/B0D4M3BC13",
  },
  {
    name: "布団クリーナー",
    worry: "布団のダニ・ハウスダスト",
    product: "布団クリーナー",
    price: "1万円",
    dailyEffort: "週1回布団の上を滑らせるだけ",
    period: "1週間",
    resultGood: "ダニやホコリが吸われて朝のくしゃみが減る",
    altHigh: "3000円の布団クリーニング",
    altBadState: "利用しても数週間でまたダニが繁殖してる",
    effortHigh: "毎週天日干しして布団叩きで叩いて",
    amazonName: "Iris Ohyama 布団クリーナー ダニセンサー搭載",
    amazonUrl: "https://www.amazon.co.jp/dp/B07H4MYMP9",
  },
  {
    name: "折りたたみランドリーバスケット",
    worry: "洗面所の洗濯物置き場の圧迫感",
    product: "折りたたみランドリーバスケット",
    price: "2000円",
    dailyEffort: "使わない時は畳んでおくだけ",
    period: "1回",
    resultGood: "洗面所が広く使えて洗濯物もまとめ運べる",
    altHigh: "2000円の収納庫",
    altBadState: "借りても結局洗濯物が山積みのまま",
    effortHigh: "毎回洗濯物を両手いっぱいに抱えて運んで",
    amazonName: "洗濯かご 折りたたみ ランドリーバスケット メッシュ",
    amazonUrl: "https://www.amazon.co.jp/dp/B0CDP46564",
  },
  {
    name: "スマホゲームコントローラー",
    worry: "スマホゲームでの指の操作ミス",
    product: "スマホゲームコントローラー",
    price: "3000円",
    dailyEffort: "スマホを挟むだけ",
    period: "1回",
    resultGood: "ボタン操作が正確になり勝率が上がる",
    altHigh: "10万円のゲーミング機",
    altBadState: "買い替えても結局タッチ操作は変わらない",
    effortHigh: "毎回画面の端を親指で無理やり操作して",
    amazonName: "Headwolf コントローラー 挟む ゲームパッド",
    amazonUrl: "https://www.amazon.co.jp/dp/B0FVM6RKTJ",
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

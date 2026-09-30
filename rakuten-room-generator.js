const GENRES = [
  {
    name: "ボディブラシ",
    worry: "背中に届かず洗い残しがちな体の汚れ",
    product: "ボディブラシ",
    price: "2000円",
    dailyEffort: "背中に当てて滑らせるだけ",
    period: "1回",
    resultGood: "背中までしっかり洗えて肌がつるつるになる",
    altHigh: "月1万円のエステ",
    altBadState: "施術直後はいいのに数日で肌のざらつきが戻ってる",
    effortHigh: "毎回タオルを伸ばして何度も背中を擦って",
    tag: "美容",
    rakutenName: "マーナ 日本製ボディブラシ 背中洗い",
    rakutenUrl: "https://item.rakuten.co.jp/bathlier/801107-03/",
  },
  {
    name: "回転式調味料ラック",
    worry: "調理中に探し回る調味料の置き場所",
    product: "回転式調味料ラック",
    price: "2500円",
    dailyEffort: "回して取り出すだけ",
    period: "1回",
    resultGood: "欲しい調味料がすぐ見つかって調理がスムーズになる",
    altHigh: "数十万円のリフォーム",
    altBadState: "リフォームしても結局調味料が迷子になってる",
    effortHigh: "毎回棚の奥まで手を伸ばして探し回って",
    tag: "キッチン収納",
    rakutenName: "回転式スパイスラック ボトル18個付き",
    rakutenUrl: "https://item.rakuten.co.jp/saiveina/tgc0175/",
  },
  {
    name: "速乾ヘアタオル",
    worry: "お風呂上がりの髪を乾かす時間",
    product: "速乾ヘアタオル",
    price: "1500円",
    dailyEffort: "髪を巻いて数分待つだけ",
    period: "1回",
    resultGood: "髪の水気がすぐ取れてドライヤー時間が短くなる",
    altHigh: "月8000円のヘアサロン",
    altBadState: "施術直後はいいのに数日でパサつきが戻ってる",
    effortHigh: "毎回タオルで何度も髪を擦って乾かして",
    tag: "ヘアケア",
    rakutenName: "Heart Mark 速乾ヘアドライタオル",
    rakutenUrl: "https://item.rakuten.co.jp/guramu/mj101/",
  },
  {
    name: "電気ひざ掛け",
    worry: "冬のデスクワークでの足元の冷え",
    product: "電気ひざ掛け",
    price: "4000円",
    dailyEffort: "膝にかけてスイッチを入れるだけ",
    period: "1回",
    resultGood: "足元がすぐ温まって冷えが気にならなくなる",
    altHigh: "1万円のエアコン暖房",
    altBadState: "つけっぱなしで結局足元だけ冷えたまま",
    effortHigh: "毎回靴下を何枚も重ね履きして",
    tag: "冷え対策",
    rakutenName: "Sugiyama 電気ひざ掛け 日本製",
    rakutenUrl: "https://item.rakuten.co.jp/sugiyama-onlineshop/ssw22h22/",
  },
  {
    name: "授乳クッション",
    worry: "授乳中の腕・腰への負担",
    product: "授乳クッション",
    price: "3500円",
    dailyEffort: "お腹に巻いて赤ちゃんを乗せるだけ",
    period: "1回",
    resultGood: "腕や腰の負担が減って授乳が楽になる",
    altHigh: "月1万円の産後ケア整体",
    altBadState: "施術直後はいいのに授乳のたびに腰が痛む",
    effortHigh: "毎回クッションを何個も重ねて高さを調整して",
    tag: "育児",
    rakutenName: "エアリコ 授乳クッション 助産師おすすめ",
    rakutenUrl: "https://item.rakuten.co.jp/airricobaby/r_npbd/",
  },
  {
    name: "パームレスト",
    worry: "長時間のタイピングでの手首の痛み",
    product: "パームレスト",
    price: "2500円",
    dailyEffort: "キーボードの手前に置くだけ",
    period: "1回",
    resultGood: "手首が支えられてタイピングが楽になる",
    altHigh: "月1万円の整体通い",
    altBadState: "施術直後はいいのに数日で手首の痛みが戻ってる",
    effortHigh: "毎回手首の角度を意識して何度も姿勢を直して",
    tag: "デスクワーク",
    rakutenName: "サンワダイレクト 木製パームレスト",
    rakutenUrl: "https://item.rakuten.co.jp/sanwadirect/200-tok022-l/",
  },
  {
    name: "猫用自動給餌器",
    worry: "外出中の猫のごはんの時間管理",
    product: "自動給餌器",
    price: "5000円",
    dailyEffort: "フードを入れてタイマー設定するだけ",
    period: "1回",
    resultGood: "決まった時間にごはんが出て安心できる",
    altHigh: "1日3000円のシッター",
    altBadState: "頼んだ直後はいいのに毎回料金が気になる",
    effortHigh: "毎回外出のたび給餌時間を気にして急いで帰って",
    tag: "ペット用品",
    rakutenName: "マルカン 猫自動給餌器 カメラ付き",
    rakutenUrl: "https://item.rakuten.co.jp/nyandemoya/marukan-4906456562009autof-100up/",
  },
  {
    name: "キャッシュトレイ",
    worry: "財布にたまる一方の小銭の管理",
    product: "キャッシュトレイ",
    price: "2000円",
    dailyEffort: "帰宅時に小銭を置くだけ",
    period: "1回",
    resultGood: "小銭が一箇所にまとまって管理しやすくなる",
    altHigh: "月500円の家計簿アプリ",
    altBadState: "課金直後はいいのにすぐ入力が面倒で放置してる",
    effortHigh: "毎回小銭を財布から出して手で数えて",
    tag: "家計管理",
    rakutenName: "Hacoa Cash Tray 木製キャッシュトレイ",
    rakutenUrl: "https://item.rakuten.co.jp/mokko-ya/cashtray/",
  },
  {
    name: "伸縮窓用スクイジー",
    worry: "手が届かない窓の高い場所の汚れ",
    product: "伸縮窓用スクイジー",
    price: "2500円",
    dailyEffort: "柄を伸ばして拭き取るだけ",
    period: "1回",
    resultGood: "高い窓もすっきりきれいになって視界が明るくなる",
    altHigh: "1万円の窓掃除業者",
    altBadState: "依頼直後はいいのに数ヶ月でまた曇ってる",
    effortHigh: "毎回脚立を出して何度も上り下りして",
    tag: "掃除・洗濯",
    rakutenName: "ARANCORON 伸縮窓用スクイジー",
    rakutenUrl: "https://item.rakuten.co.jp/arancoron/windowcleaner/",
  },
  {
    name: "抱き枕",
    worry: "横向きで寝ても落ち着かない寝姿勢",
    product: "抱き枕",
    price: "3000円",
    dailyEffort: "抱えて寝るだけ",
    period: "1回",
    resultGood: "体が安定してぐっすり眠れるようになる",
    altHigh: "1万円の寝具コンサル",
    altBadState: "相談した直後はいいのにすぐ寝つきの悪さが戻ってる",
    effortHigh: "毎晩布団やクッションを何個も重ねて調整して",
    tag: "睡眠",
    rakutenName: "王様の抱き枕 楽天1位",
    rakutenUrl: "https://item.rakuten.co.jp/oyasumi/s-500406/",
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

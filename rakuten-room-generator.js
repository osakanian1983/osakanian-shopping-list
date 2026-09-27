const GENRES = [
  {
    name: "収れん化粧水",
    worry: "皮脂・テカリによる開いた毛穴",
    product: "収れん化粧水",
    price: "1500円",
    dailyEffort: "化粧水の後にコットンでなじませるだけ",
    period: "3日",
    resultGood: "毛穴が引き締まってテカリが気にならなくなる",
    altHigh: "1万円のフェイシャルエステ",
    altBadState: "施術直後はいいのに数日で毛穴が開いてる",
    effortHigh: "毎朝あぶらとり紙で何度も抑えて",
    tag: "美容",
    rakutenName: "DHC ポアナローション 収れん化粧水",
    rakutenUrl: "https://item.rakuten.co.jp/dhcshop/8000022179/",
  },
  {
    name: "置き換えプロテイン",
    worry: "間食・食べ過ぎで増えた体重",
    product: "置き換えプロテイン",
    price: "3000円",
    dailyEffort: "水で溶かして飲むだけ",
    period: "3日",
    resultGood: "満腹感がありながら体重が落ち着いてくる",
    altHigh: "月1万円のパーソナルジム",
    altBadState: "通うのをやめたらすぐ体型が戻ってる",
    effortHigh: "毎食カロリーを計算して食事制限を頑張って",
    tag: "ダイエット",
    rakutenName: "uFit ソイプロテイン 無添加",
    rakutenUrl: "https://item.rakuten.co.jp/ufit-shop/soy-protein/",
  },
  {
    name: "コードレス布団クリーナー",
    worry: "布団に潜むダニ・ハウスダスト",
    product: "布団クリーナー",
    price: "6000円",
    dailyEffort: "布団の上を滑らせるだけ",
    period: "1回",
    resultGood: "布団がふかふかになって心配が減る",
    altHigh: "月8000円のクリーニング業者",
    altBadState: "依頼直後はいいのに数ヶ月でダニが戻ってる",
    effortHigh: "毎回布団を外に干して何時間も叩いて",
    tag: "掃除・時短家事",
    rakutenName: "アイリスオーヤマ コードレス布団クリーナー",
    rakutenUrl: "https://item.rakuten.co.jp/arimas/273054/",
  },
  {
    name: "ランドリーバスケット",
    worry: "脱衣所に散らかる洗濯物",
    product: "ランドリーバスケット",
    price: "3000円",
    dailyEffort: "脱いだ服を入れるだけ",
    period: "1回",
    resultGood: "脱衣所が片付いて洗濯もまとめて運べる",
    altHigh: "数十万円の脱衣所リフォーム工事",
    altBadState: "工事しても結局床に服が散らかってる",
    effortHigh: "毎回洗濯物を仕分けながら何度も往復して",
    tag: "収納",
    rakutenName: "EXCEPTION ランドリーバスケット キャスター付き",
    rakutenUrl: "https://item.rakuten.co.jp/exception5251/f-00008/",
  },
  {
    name: "マイクロファイバーヘアキャップ",
    worry: "お風呂上がりの髪を乾かす時間",
    product: "ヘアキャップ",
    price: "1500円",
    dailyEffort: "髪をくるんで待つだけ",
    period: "1回",
    resultGood: "髪の水気がすぐ取れてドライヤーの時間が短くなる",
    altHigh: "月8000円のサロン",
    altBadState: "施術直後はいいのに数日でパサつきが戻ってる",
    effortHigh: "毎回タオルで何度も髪を擦って乾かして",
    tag: "ヘアケア",
    rakutenName: "CICIBELLA ヘアドライタオルキャップ",
    rakutenUrl: "https://item.rakuten.co.jp/cicib/zhmj/",
  },
  {
    name: "あったかインソール",
    worry: "冬の靴の中の足先の冷え",
    product: "あったかインソール",
    price: "2000円",
    dailyEffort: "靴に入れておくだけ",
    period: "1回",
    resultGood: "足先がすぐ温まって歩くのが楽になる",
    altHigh: "1万円の電気毛布",
    altBadState: "つけっぱなしで結局電気代だけ増えてる",
    effortHigh: "毎回靴下を何枚も重ね履きして",
    tag: "冷え対策",
    rakutenName: "電熱インソール[暖] 充電式リモコン付き",
    rakutenUrl: "https://item.rakuten.co.jp/shunte/daninsole/",
  },
  {
    name: "スタイセット",
    worry: "離乳食期の毎日のスタイ洗濯",
    product: "スタイセット",
    price: "2000円",
    dailyEffort: "汚れたら次のスタイに替えるだけ",
    period: "1回",
    resultGood: "毎回洗わなくても清潔なスタイがすぐ使える",
    altHigh: "月3000円のクリーニング代",
    altBadState: "出しても結局食べこぼしで服が汚れ続けてる",
    effortHigh: "毎回食後にスタイを手洗いして乾かして",
    tag: "育児グッズ",
    rakutenName: "よだれかけスタイ6枚セット",
    rakutenUrl: "https://item.rakuten.co.jp/moccasin/ykye002s6/",
  },
  {
    name: "USBドッキングステーション",
    worry: "ノートPCの端子不足での配線の煩雑さ",
    product: "USBドック",
    price: "3000円",
    dailyEffort: "ケーブル1本を挿すだけ",
    period: "1回",
    resultGood: "デスクまわりがスッキリして作業に集中できる",
    altHigh: "月1万円の整体通い",
    altBadState: "施術直後はいいのに数日で肩こりが戻ってる",
    effortHigh: "仕事の合間に何本ものケーブルを繋ぎ替えて",
    tag: "デスクワーク",
    rakutenName: "サンワサプライ USB3.0ドッキングステーション",
    rakutenUrl: "https://item.rakuten.co.jp/nanahachi/usb-cvdk3/",
  },
  {
    name: "犬用ハーネス",
    worry: "首輪の負担・抜け出しの心配",
    product: "犬用ハーネス",
    price: "3000円",
    dailyEffort: "装着して散歩に出るだけ",
    period: "1回",
    resultGood: "首への負担が減って抜け出す心配もなくなる",
    altHigh: "5000円のトレーナー",
    altBadState: "教えてもらった直後はいいのに引っ張り癖が戻ってる",
    effortHigh: "毎回首輪の締め具合を確認して調整して",
    tag: "ペット用品",
    rakutenName: "LaLUCA 犬用ハーネス 楽天6冠",
    rakutenUrl: "https://item.rakuten.co.jp/yokadoh-shop/c004/",
  },
  {
    name: "非常用給水タンク",
    worry: "断水時の生活用水の確保",
    product: "非常用給水タンク",
    price: "2000円",
    dailyEffort: "棚に畳んでおくだけ",
    period: "1回",
    resultGood: "断水してもすぐ給水所で水を運べて困らない",
    altHigh: "数十万円の雨水タンク設置工事",
    altBadState: "設置しても結局使い方が分からず放置してる",
    effortHigh: "災害のたびに慌ててペットボトルを買い集めて",
    tag: "防災グッズ",
    rakutenName: "アイリスオーヤマ 給水タンク WAT-20L",
    rakutenUrl: "https://item.rakuten.co.jp/rackworld/532109/",
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

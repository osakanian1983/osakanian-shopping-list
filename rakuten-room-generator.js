const GENRES = [
  {
    name: "導入美容液",
    worry: "化粧水がなかなか肌に浸透しない乾燥肌",
    product: "導入美容液",
    price: "2500円",
    dailyEffort: "化粧水の前に1プッシュするだけ",
    period: "3日",
    resultGood: "肌がしっとり潤って化粧水の浸透も良くなる",
    altHigh: "1万円のフェイシャルエステ",
    altBadState: "施術直後はいいのに数日で乾燥が戻ってる",
    effortHigh: "毎晩コットンパックを何十分もして",
    tag: "美容",
    rakutenName: "エバメール ファーストブースター導入液",
    rakutenUrl: "https://item.rakuten.co.jp/evermere/r114/",
  },
  {
    name: "加圧レギンス",
    worry: "寝ている間の下半身のむくみ",
    product: "加圧レギンス",
    price: "2500円",
    dailyEffort: "寝る前に履くだけ",
    period: "3日",
    resultGood: "朝起きた時に脚が細くスッキリして見える",
    altHigh: "月8000円の脚痩せエステ",
    altBadState: "施術直後はいいのに数日でむくみが戻ってる",
    effortHigh: "毎晩自分で脚を念入りにマッサージして",
    tag: "ダイエット",
    rakutenName: "補正屋 着圧レギンス 天音",
    rakutenUrl: "https://item.rakuten.co.jp/hoseiya/hoseiya_amane/",
  },
  {
    name: "卓上食洗機",
    worry: "工事不要で使いたいのに置けない食洗機",
    product: "卓上食洗機",
    price: "20000円",
    dailyEffort: "セットしてボタンを押すだけ",
    period: "1回",
    resultGood: "洗い物の時間がなくなって自分の時間が増える",
    altHigh: "数十万円の食洗機工事",
    altBadState: "工事しても引っ越しの度に持っていけず後悔してる",
    effortHigh: "毎食後に手洗いで何十分もかけて",
    tag: "時短家電",
    rakutenName: "工事不要 タンク式食器洗い乾燥機",
    rakutenUrl: "https://item.rakuten.co.jp/dondon/bst01/",
  },
  {
    name: "折りたたみコンテナボックス",
    worry: "押し入れやクローゼットの荷物が片付かない",
    product: "折りたたみコンテナボックス",
    price: "1500円",
    dailyEffort: "荷物を入れて積むだけ",
    period: "1回",
    resultGood: "荷物が整理されてクローゼットがスッキリする",
    altHigh: "月3000円の倉庫",
    altBadState: "借りても結局荷物が増え続けてる",
    effortHigh: "何度も荷物を出し入れして整理整頓して",
    tag: "収納",
    rakutenName: "リス RISU 折りたたみコンテナ 50L",
    rakutenUrl: "https://item.rakuten.co.jp/e-kurashi/r3w43/",
  },
  {
    name: "ヘアオイル",
    worry: "乾燥・パサつく髪の広がり",
    product: "ヘアオイル",
    price: "2000円",
    dailyEffort: "お風呂上がりに1滴なじませるだけ",
    period: "3日",
    resultGood: "髪がまとまってツヤが出てサラサラになる",
    altHigh: "月8000円のサロン",
    altBadState: "施術直後はいいのに数日でパサつきが戻ってる",
    effortHigh: "毎日ドライヤーの前に何工程もケアして",
    tag: "ヘアケア",
    rakutenName: "オルビス エッセンスイン ヘアオイル",
    rakutenUrl: "https://item.rakuten.co.jp/orbis-shop/o0097/",
  },
  {
    name: "腹巻き",
    worry: "お腹まわりの冷え・生理痛",
    product: "腹巻き",
    price: "1500円",
    dailyEffort: "巻いて過ごすだけ",
    period: "1回",
    resultGood: "お腹が芯から温まって冷えが気にならなくなる",
    altHigh: "1万円の電気毛布",
    altBadState: "つけっぱなしで結局電気代だけ増えてる",
    effortHigh: "毎回カイロを何個も貼り替えて",
    tag: "冷え対策",
    rakutenName: "ヒオリエ 日本製 発熱薄手腹巻",
    rakutenUrl: "https://item.rakuten.co.jp/toucher-home/luhhm/",
  },
  {
    name: "お食事エプロン",
    worry: "離乳食で毎回汚れる服の洗濯",
    product: "お食事エプロン",
    price: "1500円",
    dailyEffort: "首にかけるだけ",
    period: "1回",
    resultGood: "服が汚れなくなって毎回の洗濯が減る",
    altHigh: "月3000円のクリーニング代",
    altBadState: "出しても結局食べこぼしで服が汚れ続けてる",
    effortHigh: "毎回食後に服を着替えさせて手洗いして",
    tag: "育児グッズ",
    rakutenName: "Elodie公式 お食事エプロン 防水",
    rakutenUrl: "https://item.rakuten.co.jp/caizu-corporation/ca66-drybib/",
  },
  {
    name: "デスク下フットレスト",
    worry: "デスクワークでの脚のむくみ・疲れ",
    product: "デスク下フットレスト",
    price: "3000円",
    dailyEffort: "足を乗せて仕事するだけ",
    period: "1回",
    resultGood: "脚の疲れが軽くなって姿勢もラクになる",
    altHigh: "月1万円の整体通い",
    altBadState: "施術直後はいいのに数日で疲れが戻ってる",
    effortHigh: "仕事の合間に何度も脚を伸ばしてストレッチして",
    tag: "デスクワーク",
    rakutenName: "サンワダイレクト フットレスト 楽天1位",
    rakutenUrl: "https://item.rakuten.co.jp/sanwadirect/100-fr025/",
  },
  {
    name: "猫用爪とぎ",
    worry: "家具や壁で爪とぎされる被害",
    product: "猫用爪とぎ",
    price: "1500円",
    dailyEffort: "置いておくだけ",
    period: "1回",
    resultGood: "家具への爪とぎが減って部屋がキレイなまま",
    altHigh: "数万円の家具の張り替え修理",
    altBadState: "直しても結局また別の場所で爪とぎされてる",
    effortHigh: "毎回爪とぎされるたびに叱って場所を教えて",
    tag: "ペット用品",
    rakutenName: "nyans 猫爪とぎ 楽天1位",
    rakutenUrl: "https://item.rakuten.co.jp/chelseas-choice/nyat-001/",
  },
  {
    name: "密閉保存容器セット",
    worry: "冷蔵庫の中の食品の傷みと保存の手間",
    product: "密閉保存容器セット",
    price: "2000円",
    dailyEffort: "詰め替えて冷蔵庫に入れるだけ",
    period: "1回",
    resultGood: "食品が長持ちして冷蔵庫の中もスッキリ片付く",
    altHigh: "月5000円の食品ロス",
    altBadState: "気をつけても結局賞味期限切れで捨ててる",
    effortHigh: "毎回ラップを何重にも巻いて保存して",
    tag: "家計管理",
    rakutenName: "EXCEPTION 密閉保存ボトル 楽天ランキング1位",
    rakutenUrl: "https://item.rakuten.co.jp/exception5251/ex-f01014/",
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

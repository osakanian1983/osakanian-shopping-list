const GENRES = [
  {
    name: "シートマスク",
    worry: "乾燥による肌のごわつき",
    product: "シートマスク",
    price: "1500円",
    dailyEffort: "10分乗せておくだけ",
    period: "1回",
    resultGood: "肌がもちもち潤ってワントーン明るくなる",
    altHigh: "1万円のフェイシャルエステ",
    altBadState: "施術直後はいいのに翌日には乾燥が戻ってる",
    effortHigh: "毎晩コットンパックを何十分もして",
    tag: "美容",
    rakutenName: "薬用シートマスク 大容量30枚入",
    rakutenUrl: "https://item.rakuten.co.jp/7esthe-pro/40926/",
  },
  {
    name: "着圧ガードル",
    worry: "産後・デスクワークでのぽっこりお腹",
    product: "着圧ガードル",
    price: "3000円",
    dailyEffort: "履いて過ごすだけ",
    period: "3日",
    resultGood: "お腹まわりが引き締まって姿勢もラクになる",
    altHigh: "月1万円の骨盤矯正サロン",
    altBadState: "施術直後はいいのに数日でお腹が戻ってる",
    effortHigh: "毎日腹筋やストレッチを何十回も頑張って",
    tag: "ダイエット",
    rakutenName: "ベイビーマイン 骨盤ガードル 楽天1位",
    rakutenUrl: "https://item.rakuten.co.jp/harmonys-bm/pokkori/",
  },
  {
    name: "ハンドブレンダー",
    worry: "離乳食や料理の下ごしらえにかかる時間",
    product: "ハンドブレンダー",
    price: "3000円",
    dailyEffort: "スイッチを押すだけ",
    period: "1回",
    resultGood: "料理の下ごしらえが一瞬で終わって時間に余裕ができる",
    altHigh: "月8000円の宅配食",
    altBadState: "頼んでも好みに合わず自分で作り直してる",
    effortHigh: "毎回包丁とまな板で何十分もかけて刻んで",
    tag: "時短家電",
    rakutenName: "ASUTAS ハンドブレンダー 1台7役",
    rakutenUrl: "https://item.rakuten.co.jp/bonako1/habl1042/",
  },
  {
    name: "冷蔵庫収納ケース",
    worry: "冷蔵庫の中がごちゃついて食品が迷子になる",
    product: "冷蔵庫収納ケース",
    price: "1500円",
    dailyEffort: "買ってきたものを入れるだけ",
    period: "1回",
    resultGood: "冷蔵庫の中が整理されて欲しい物がすぐ見つかる",
    altHigh: "数十万円の冷蔵庫",
    altBadState: "買い替えても結局すぐごちゃごちゃに戻ってる",
    effortHigh: "毎回冷蔵庫の中身を全部出して整理して",
    tag: "収納",
    rakutenName: "山崎実業 tower 冷蔵庫中収納ケース",
    rakutenUrl: "https://item.rakuten.co.jp/importshopaqua/51009571/",
  },
  {
    name: "マイナスイオンドライヤー",
    worry: "乾燥してパサつく髪の広がり",
    product: "マイナスイオンドライヤー",
    price: "5000円",
    dailyEffort: "いつも通り髪を乾かすだけ",
    period: "1回",
    resultGood: "髪がまとまってツヤが出てサラサラになる",
    altHigh: "月8000円のサロン",
    altBadState: "施術直後はいいのに数日でパサつきが戻ってる",
    effortHigh: "毎日ドライヤーの前に何工程もケアして",
    tag: "ヘアケア",
    rakutenName: "テスコム TD330B マイナスイオンドライヤー",
    rakutenUrl: "https://item.rakuten.co.jp/tescom-japan/td33/",
  },
  {
    name: "電気毛布",
    worry: "冬の寝室の底冷え",
    product: "電気毛布",
    price: "3000円",
    dailyEffort: "スイッチを入れて包まるだけ",
    period: "1回",
    resultGood: "布団の中がすぐ暖まって朝まで快適に眠れる",
    altHigh: "数十万円の暖房設備の増設工事",
    altBadState: "工事しても結局電気代だけ高くなってる",
    effortHigh: "毎晩湯たんぽを何個も入れ替えて",
    tag: "冷え対策",
    rakutenName: "エムパウジャパン 電気毛布 楽天1位",
    rakutenUrl: "https://item.rakuten.co.jp/mpowjapan/gfeb013000/",
  },
  {
    name: "おむつ消臭袋",
    worry: "ゴミ箱にこもるおむつの臭い",
    product: "おむつ消臭袋",
    price: "1000円",
    dailyEffort: "おむつを入れて結ぶだけ",
    period: "1回",
    resultGood: "ゴミ箱を開けても臭いが気にならなくなる",
    altHigh: "数万円の高機能ゴミ箱",
    altBadState: "導入しても結局数ヶ月で臭いが漏れ始めてる",
    effortHigh: "毎回ゴミ箱を開けるたびに換気して",
    tag: "育児グッズ",
    rakutenName: "BOS おむつが臭わない袋 60枚入",
    rakutenUrl: "https://item.rakuten.co.jp/koyo-omutsu/4-4/",
  },
  {
    name: "アームレスト",
    worry: "デスクワークでの肩・腕の疲れ",
    product: "アームレスト",
    price: "2000円",
    dailyEffort: "取り付けて腕を乗せるだけ",
    period: "1回",
    resultGood: "肩や腕の疲れが軽くなって作業に集中できる",
    altHigh: "月1万円の整体通い",
    altBadState: "施術直後はいいのに数日で疲れが戻ってる",
    effortHigh: "仕事の合間に何度も腕を回してストレッチして",
    tag: "デスクワーク",
    rakutenName: "サンワダイレクト アームレスト 楽天1位",
    rakutenUrl: "https://item.rakuten.co.jp/sanwadirect/200-tok024bk/",
  },
  {
    name: "猫用ブラッシンググローブ",
    worry: "部屋中に舞う愛猫の抜け毛",
    product: "猫用ブラッシンググローブ",
    price: "1000円",
    dailyEffort: "手にはめて撫でるだけ",
    period: "1回",
    resultGood: "撫でるだけで抜け毛が取れて部屋が散らからない",
    altHigh: "月5000円のサロン",
    altBadState: "施術直後だけキレイですぐ元通り",
    effortHigh: "毎日普通のブラシで根気よく抜け毛を取ろうとして",
    tag: "ペット用品",
    rakutenName: "Lino Ulu グルーミンググローブ 楽天1位",
    rakutenUrl: "https://item.rakuten.co.jp/linoulu/za2/",
  },
  {
    name: "大容量モバイルバッテリー",
    worry: "災害時・停電時のスマホの電池切れ",
    product: "大容量モバイルバッテリー",
    price: "3000円",
    dailyEffort: "満充電にして置いておくだけ",
    period: "1回",
    resultGood: "停電してもスマホの充電を気にせず過ごせる",
    altHigh: "数十万円の家庭用蓄電池",
    altBadState: "導入しても結局使い方が分からず放置してる",
    effortHigh: "災害のたびに慌てて充電器を探し回って",
    tag: "防災グッズ",
    rakutenName: "モバイルバッテリー 22800mAh 防災グッズ",
    rakutenUrl: "https://item.rakuten.co.jp/delishop/g05/",
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

const GENRES = [
  {
    name: "光脱毛器",
    worry: "毎朝のムダ毛処理に追われる時間のなさ",
    product: "光脱毛器",
    price: "9000円",
    dailyEffort: "週1回5分照射するだけ",
    period: "1か月",
    resultGood: "自己処理の回数が減って肌がつるつるになる",
    altHigh: "1回1万円の脱毛サロン",
    altBadState: "通っても数週間でまた毛が気になる",
    effortHigh: "毎回予約を取ってサロンに通って",
    tag: "美容",
    rakutenName: "Sarlisi 光美容器 家庭用脱毛器",
    rakutenUrl: "https://item.rakuten.co.jp/sarlisi/sarlisi-ai01-2/",
  },
  {
    name: "リカバリーサンダル",
    worry: "一日歩き回った後の足腰のだるさ",
    product: "リカバリーサンダル",
    price: "6000円",
    dailyEffort: "履いて過ごすだけ",
    period: "1回",
    resultGood: "足裏から疲れが抜けて軽い足取りになる",
    altHigh: "1回5000円の足つぼマッサージ",
    altBadState: "施術直後だけで翌日には戻ってる",
    effortHigh: "毎回予約を取ってマッサージ店に通って",
    tag: "疲労回復",
    rakutenName: "RIG リカバリーサンダル OGA",
    rakutenUrl: "https://item.rakuten.co.jp/websports/36744/",
  },
  {
    name: "音波電動歯ブラシ",
    worry: "歯磨きしても歯垢が取れてる気がしない",
    product: "音波電動歯ブラシ",
    price: "4000円",
    dailyEffort: "いつも通り2分当てるだけ",
    period: "1週間",
    resultGood: "歯がツルツルになって口の中がすっきりする",
    altHigh: "5000円の歯科クリーニング",
    altBadState: "受けても数か月で歯垢が溜まる",
    effortHigh: "毎回予約を取って歯科に通って",
    tag: "時短家電",
    rakutenName: "オムロン 音波式電動歯ブラシ HT-B3191",
    rakutenUrl: "https://item.rakuten.co.jp/life-rhythm/ht-b3191-jtw/",
  },
  {
    name: "吊り下げ収納ラック",
    worry: "クローゼットに荷物が入らない悩み",
    product: "吊り下げ収納ラック",
    price: "1500円",
    dailyEffort: "ハンガーにかけて吊るすだけ",
    period: "1回",
    resultGood: "デッドスペースが収納に変わる",
    altHigh: "3万円のクローゼットリフォーム",
    altBadState: "リフォームしても荷物が収まらない",
    effortHigh: "収納場所を求めて何度も家具を買い替えて",
    tag: "収納",
    rakutenName: "収納美人 吊り下げ収納ラック クローゼット",
    rakutenUrl: "https://item.rakuten.co.jp/onesshop/10000041/",
  },
  {
    name: "育毛トニック",
    worry: "最近気になり始めた髪のボリューム不足",
    product: "育毛トニック",
    price: "2500円",
    dailyEffort: "お風呂上がりに頭皮に塗るだけ",
    period: "1か月",
    resultGood: "頭皮がすっきりしてコシが出てくる",
    altHigh: "1回1万円の発毛サロン",
    altBadState: "通っても数か月で効果が見えずやめる",
    effortHigh: "毎回予約を取ってサロンに通って",
    tag: "ヘアケア",
    rakutenName: "フレッシュリアップ薬用育毛トニック",
    rakutenUrl: "https://item.rakuten.co.jp/riup/4987306057210/",
  },
  {
    name: "オルゴールメリー",
    worry: "寝かしつけに毎晩苦労する悩み",
    product: "オルゴールメリー",
    price: "3000円",
    dailyEffort: "ベッドに取り付けて回すだけ",
    period: "1回",
    resultGood: "メロディで自然と眠ってくれる",
    altHigh: "月1万円の寝かしつけ代行サービス",
    altBadState: "頼める日が限られて毎晩抱っこする",
    effortHigh: "毎晩抱っこして何時間も歩き回って",
    tag: "育児",
    rakutenName: "HOPPL ベッドメリー用オルゴール",
    rakutenUrl: "https://item.rakuten.co.jp/shoponice/btl-bm-mb/",
  },
  {
    name: "低周波治療器",
    worry: "デスクワークで固まった肩や腰のコリ",
    product: "低周波治療器",
    price: "5000円",
    dailyEffort: "パッドを貼ってスイッチを押すだけ",
    period: "1回",
    resultGood: "コリがゆるんで肩や腰が軽くなる",
    altHigh: "1回5000円の整体院の施術",
    altBadState: "施術直後はいいのに翌日にはコリが戻ってる",
    effortHigh: "毎回予約を取って整体院に通って",
    tag: "肩こり対策",
    rakutenName: "オムロン 低周波治療器 HV-F230-JAZ3",
    rakutenUrl: "https://item.rakuten.co.jp/life-rhythm/hv-f230-jaz3/",
  },
  {
    name: "ペット用バリカン",
    worry: "トリミング代がかさんで気になる悩み",
    product: "ペット用バリカン",
    price: "4000円",
    dailyEffort: "自宅で愛犬の毛を整えるだけ",
    period: "1回",
    resultGood: "サロン並みの仕上がりが自宅で完成する",
    altHigh: "1回5000円のトリミングサロン",
    altBadState: "通っても次までにまた伸びてくる",
    effortHigh: "毎回予約を取ってサロンに連れて行って",
    tag: "ペット用品",
    rakutenName: "テスコム コードレスペット用バリカン PET-CLB01",
    rakutenUrl: "https://item.rakuten.co.jp/tescom-japan/pet-clb01/",
  },
  {
    name: "ランドリーサーキュレーター",
    worry: "部屋干しの生乾き臭が気になる悩み",
    product: "ランドリーファン",
    price: "2000円",
    dailyEffort: "洗濯物に向けて置くだけ",
    period: "1回",
    resultGood: "風が循環して生乾き臭を気にせず乾く",
    altHigh: "800円のコインランドリー",
    altBadState: "利用しても毎回荷物を抱えて通う",
    effortHigh: "毎回洗濯物を抱えてコインランドリーに通って",
    tag: "掃除・洗濯",
    rakutenName: "アピックス ランドリーファン サーキュレーター AFC-131",
    rakutenUrl: "https://item.rakuten.co.jp/d-dish/afc-131lbry/",
  },
  {
    name: "いびき防止鼻呼吸テープ",
    worry: "朝起きても疲れが取れていないいびきの悩み",
    product: "いびき防止鼻呼吸テープ",
    price: "800円",
    dailyEffort: "寝る前に鼻に貼るだけ",
    period: "1回",
    resultGood: "鼻呼吸が促されて朝の目覚めがすっきりする",
    altHigh: "月1万円のいびき外来通院",
    altBadState: "通っても検査ばかりで改善しない",
    effortHigh: "毎回予約を取って外来に通って",
    tag: "睡眠",
    rakutenName: "すやピタ 鼻呼吸テープ X型",
    rakutenUrl: "https://item.rakuten.co.jp/pegasus-store/suyapita_x/",
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

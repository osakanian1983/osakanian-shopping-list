const GENRES = [
  {
    name: "ホワイトノイズマシン",
    worry: "寝つくまでに周りの物音が気になって眠れない",
    product: "ホワイトノイズマシン",
    price: "5,000円",
    dailyEffort: "枕元に置いてスイッチを入れるだけ",
    period: "1晩",
    resultGood: "物音を気にせずすっと眠りにつける",
    altHigh: "3万円の防音カーテン",
    altBadState: "つけても結局物音が気になって眠れない",
    effortHigh: "耳栓を探して毎晩つけて",
    amazonName: "Dreamegg ホワイトノイズマシン Classic D1",
    amazonUrl: "https://www.amazon.co.jp/Dreamegg-%E3%83%9B%E3%83%AF%E3%82%A4%E3%83%88%E3%83%8E%E3%82%A4%E3%82%BA-24%E7%A8%AE%E3%81%AE%E7%99%92%E3%81%97%E9%9F%B3-%E7%84%A1%E6%AE%B5%E9%9A%8E%E9%9F%B3%E9%87%8F%E8%AA%BF%E7%AF%80-D1%EF%BC%88%E3%83%9B%E3%83%AF%E3%82%A4%E3%83%88%EF%BC%89/dp/B094VD37YW",
  },
  {
    name: "ベッドサイドオーガナイザー",
    worry: "ベッドの周りにスマホや眼鏡が散らかる",
    product: "ベッドサイドオーガナイザー",
    price: "1,500円",
    dailyEffort: "ベッドのフレームに巻いて取り付けるだけ",
    period: "1日",
    resultGood: "手を伸ばすだけで小物が見つかる",
    altHigh: "2万円のナイトテーブル",
    altBadState: "置いても結局床に物が散らかる",
    effortHigh: "毎晩床に落ちた物を探して",
    amazonName: "不二貿易 ベッドサイドポケット",
    amazonUrl: "https://www.amazon.co.jp/%E4%B8%8D%E4%BA%8C%E8%B2%BF%E6%98%93-%E3%83%99%E3%83%83%E3%83%89%E3%82%B5%E3%82%A4%E3%83%89%E3%83%9D%E3%82%B1%E3%83%83%E3%83%88-%E3%83%99%E3%83%83%E3%83%89%E3%82%B5%E3%82%A4%E3%83%89%E5%8F%8E%E7%B4%8D-%E5%B9%8555%C3%97%E7%B8%A625%E3%8E%9D-29270/dp/B0BHD1B3GC",
  },
  {
    name: "ハンディミキサー",
    worry: "泡立て器で混ぜても生地がうまく仕上がらない",
    product: "ハンディミキサー",
    price: "2,300円",
    dailyEffort: "スイッチを入れてボウルに当てるだけ",
    period: "1回",
    resultGood: "きめ細かい生地が短時間で仕上がる",
    altHigh: "1,500円の市販ケーキ",
    altBadState: "買っても結局手作りの満足感がない",
    effortHigh: "泡立て器で何分も手を動かして",
    amazonName: "Amazonベーシック 電動ハンドミキサー",
    amazonUrl: "https://www.amazon.co.jp/Amazon%E3%83%99%E3%83%BC%E3%82%B7%E3%83%83%E3%82%AF-%E9%9B%BB%E5%8B%95%E3%83%8F%E3%83%B3%E3%83%89%E3%83%9F%E3%82%AD%E3%82%B5%E3%83%BC-6%E6%AE%B5%E5%A4%89%E9%80%9F-%E3%82%BF%E3%83%BC%E3%83%9C%E6%A9%9F%E8%83%BD%E4%BB%98%E3%81%8D-%E3%82%B9%E3%83%8A%E3%83%83%E3%83%97%E3%82%AA%E3%83%B3%E5%BC%8F%E5%8F%8E%E7%B4%8D%E3%82%B1%E3%83%BC%E3%82%B9/dp/B0DVGVJLKY",
  },
  {
    name: "ポータブル製氷機",
    worry: "急な来客で氷が全然足りない",
    product: "ポータブル製氷機",
    price: "8,500円",
    dailyEffort: "水を入れてボタンを押すだけ",
    period: "6分",
    resultGood: "すぐにたっぷりの氷が用意できる",
    altHigh: "500円のコンビニ氷",
    altBadState: "買っても結局毎回買いに走る",
    effortHigh: "氷を買いにコンビニへ何度も走って",
    amazonName: "COMFEE' 製氷機 RCI12BL1JP(E)",
    amazonUrl: "https://www.amazon.co.jp/%E3%82%B3%E3%83%B3%E3%83%95%E3%82%A3%E3%83%BC-COMFEE-%E8%A3%BD%E6%B0%B7%E6%A9%9F-%E5%AE%B6%E5%BA%AD%E7%94%A8-%E5%8F%96%E3%82%8A%E6%89%B1%E3%81%84%E7%B0%A1%E5%8D%98/dp/B0GMGRV6HV",
  },
  {
    name: "玄関傘スタンド",
    worry: "玄関に傘が倒れて散らかる",
    product: "玄関傘スタンド",
    price: "4,000円",
    dailyEffort: "傘を差し込んで置くだけ",
    period: "1日",
    resultGood: "玄関がすっきり片付いたままになる",
    altHigh: "5万円の玄関リフォーム",
    altBadState: "やっても結局傘は壁に立てかけたまま",
    effortHigh: "倒れた傘を毎回拾って立て直して",
    amazonName: "丸形水受けトレイ付き傘立て",
    amazonUrl: "https://www.amazon.co.jp/%E4%B8%B8%E5%BD%A2%E6%B0%B4%E5%8F%97%E3%81%91%E3%83%88%E3%83%AC%E3%82%A4%E4%BB%98%E3%81%8D-%E6%8A%98%E3%82%8A%E3%81%9F%E3%81%9F%E3%81%BF%E5%82%98%E5%8F%8E%E7%B4%8D-%E5%82%98%E5%8F%8E%E7%B4%8D%E3%83%A9%E3%83%83%E3%82%AF%E3%80%81%E5%AE%B6%E5%BA%AD%E7%94%A8%E3%82%A8%E3%83%B3%E3%83%88%E3%83%AA%E3%83%BC%E3%83%AC%E3%83%99%E3%83%AB%E3%81%AE%E5%82%98%E3%83%A9%E3%83%83%E3%82%AF%E3%80%81%E3%83%9B%E3%83%86%E3%83%AB%E3%81%AE%E3%83%AD%E3%83%93%E3%83%BC%E3%81%AE%E6%8E%92%E6%B0%B4%E5%82%98%E3%83%90%E3%82%B1%E3%83%84-%E7%9D%80%E8%84%B1%E5%BC%8F%E6%B0%B4%E5%8F%97%E3%81%91%E7%9A%BF%E4%BB%98%E3%81%8D-%E6%8A%98%E3%82%8A%E7%95%B3%E3%81%BF%E5%82%98%E7%94%A8%E3%83%95%E3%83%83%E3%82%AF%E4%BB%98%E3%81%8D/dp/B0DF5DTBS5",
  },
  {
    name: "結露防止シート",
    worry: "冬の窓の結露でカビが心配になる",
    product: "結露防止シート",
    price: "3,300円",
    dailyEffort: "窓に貼っておくだけ",
    period: "1晩",
    resultGood: "朝の窓がカラッと乾いたままになる",
    altHigh: "10万円の二重窓リフォーム",
    altBadState: "やっても結局毎朝水滴を拭く羽目になる",
    effortHigh: "毎朝タオルで窓の水滴を拭いて",
    amazonName: "窓ガラス結露防止シート 90cm×180cm 2本組",
    amazonUrl: "https://www.amazon.co.jp/%E7%B5%90%E9%9C%B2%E9%98%B2%E6%AD%A2%E3%82%B7%E3%83%BC%E3%83%88-%E7%AA%93%E3%82%AC%E3%83%A9%E3%82%B9%E6%96%AD%E7%86%B1%E3%82%B7%E3%83%BC%E3%83%88%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A0-90cm%C3%97180cm-2%E6%9C%AC%E7%B5%84%E3%82%BB%E3%83%83%E3%83%88-%E7%B5%90%E9%9C%B2%E5%AF%BE%E7%AD%96%E3%82%B0%E3%83%83%E3%82%BA/dp/B0773KCRFN",
  },
  {
    name: "洗面台下収納ラック",
    worry: "洗面台下のすき間に物が埋もれる",
    product: "洗面台下収納ラック",
    price: "3,000円",
    dailyEffort: "すき間に差し込んで置くだけ",
    period: "1日",
    resultGood: "欲しい物がすぐ取り出せるようになる",
    altHigh: "15万円の洗面台リフォーム",
    altBadState: "やっても結局奥の物は取り出しにくい",
    effortHigh: "しゃがんで奥の物を手探りで探して",
    amazonName: "チチロバ シンク下伸縮棚",
    amazonUrl: "https://www.amazon.co.jp/%E3%80%90Amazon-co-jp-%E9%99%90%E5%AE%9A%E3%80%91%E3%83%81%E3%83%81%E3%83%AD%E3%83%90-TITIROBA-%E3%82%B7%E3%83%B3%E3%82%AF%E4%B8%8B%E4%BC%B8%E7%B8%AE%E6%A3%9A-%E5%B9%8549-88%C3%97%E5%A5%A5%E8%A1%8C25%C3%97%E9%AB%98%E3%81%9542cm/dp/B0C4L21T96",
  },
  {
    name: "スロークッカー",
    worry: "煮込み料理に火の前でずっと付きっきりになる",
    product: "スロークッカー",
    price: "8,500円",
    dailyEffort: "材料を入れてスイッチを入れるだけ",
    period: "数時間",
    resultGood: "放っておくだけで味がしっかり染みる",
    altHigh: "2,000円の惣菜",
    altBadState: "買っても結局自炊した満足感がない",
    effortHigh: "鍋の前に立って何度も火加減を見て",
    amazonName: "AL Colle スロークッカー ASC-T22Y",
    amazonUrl: "https://www.amazon.co.jp/%E3%82%A2%E3%83%AB%E3%83%95%E3%82%A1%E3%83%83%E3%82%AF%E3%82%B9%E3%83%BB%E3%82%B3%E3%82%A4%E3%82%BA%E3%83%9F-ASCT22Y-%E3%82%B9%E3%83%AD%E3%83%BC%E3%82%AF%E3%83%83%E3%82%AB%E3%83%BC%E3%83%BB%E3%82%BF%E3%82%A4%E3%83%9E%E3%83%BC%E4%BB%98%E7%85%AE%E8%BE%BC%E3%81%BF%E5%90%8D%E4%BA%BA-%E3%82%A4%E3%82%A8%E3%83%AD%E3%83%BC/dp/B001QU1VMO",
  },
  {
    name: "着圧ふくらはぎスリーブ",
    worry: "立ち仕事の後にふくらはぎがだるくむくむ",
    product: "着圧ふくらはぎスリーブ",
    price: "2,000円",
    dailyEffort: "ふくらはぎに巻くだけ",
    period: "1晩",
    resultGood: "むくみがすっきり軽くなる",
    altHigh: "8,000円のマッサージ",
    altBadState: "通っても結局翌日にはむくみが戻る",
    effortHigh: "自分の足を何分も揉んで",
    amazonName: "Dr. Feel 医師監修ふくらはぎサポーター",
    amazonUrl: "https://www.amazon.co.jp/Dr-Feel-%E5%8C%BB%E5%B8%AB%E7%9B%A3%E4%BF%AE-%E3%81%B5%E3%81%8F%E3%82%89%E3%81%AF%E3%81%8E%E3%82%B5%E3%83%9D%E3%83%BC%E3%82%BF%E3%83%BC-%EF%BC%882%E6%9E%9A%E5%85%A5%E3%82%8A%EF%BC%89-%E7%94%B7%E5%A5%B3%E5%85%BC%E7%94%A8/dp/B0D41NRR44",
  },
  {
    name: "ドライヤーホルダー",
    worry: "ドライヤーの置き場所がなく毎回コードが絡まる",
    product: "ドライヤーホルダー",
    price: "1,300円",
    dailyEffort: "壁に貼ってドライヤーを掛けるだけ",
    period: "1日",
    resultGood: "コードが絡まらずサッと取り出せる",
    altHigh: "3万円の洗面台改修",
    altBadState: "やっても結局コードが絡まったまま",
    effortHigh: "絡まったコードを毎回ほどいて",
    amazonName: "ドライヤーホルダー 壁掛け 貼り付け式",
    amazonUrl: "https://www.amazon.co.jp/%E3%83%89%E3%83%A9%E3%82%A4%E3%83%A4%E3%83%BC%E3%83%9B%E3%83%AB%E3%83%80%E3%83%BC-%E3%83%89%E3%83%A9%E3%82%A4%E3%83%A4%E3%83%BC%E3%82%B9%E3%82%BF%E3%83%B3%E3%83%89%E3%80%90%E8%B2%BC%E3%82%8A%E4%BB%98%E3%81%91%E5%BC%8F-%E3%83%89%E3%83%A9%E3%82%A4%E3%83%A4%E3%83%BC%E5%8F%8E%E7%B4%8D-%E3%83%98%E3%82%A2%E3%83%89%E3%83%A9%E3%82%A4%E3%83%A4%E3%83%BC%E3%83%9B%E3%83%AB%E3%83%80%E3%83%BC-%E3%81%99%E3%81%B9%E3%81%A6%E3%81%AE%E3%83%98%E3%82%A2%E3%83%89%E3%83%A9%E3%82%A4%E3%83%A4%E3%83%BC%E5%AF%BE%E5%BF%9C%E5%8F%AF%E8%83%BD/dp/B0D9H51NZJ",
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

const HASHTAGS = "#PR #Amazon #買ってよかったもの #購入品";

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
    const tags = `${HASHTAGS} #${genre.name}`;
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

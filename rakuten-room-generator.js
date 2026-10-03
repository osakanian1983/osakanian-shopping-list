const GENRES = [
  {
    name: "ネイルケアキット",
    worry: "セルフネイルがすぐ乾かず崩れる悩み",
    product: "ネイルケアキット",
    price: "2500円",
    dailyEffort: "キットを並べて塗るだけ",
    period: "1回",
    resultGood: "サロン級の仕上がりが自宅で完成する",
    altHigh: "月5000円のネイルサロン",
    altBadState: "施術直後はいいのに数日で欠けが気になる",
    effortHigh: "毎回予約を取って何時間もサロンに通って",
    tag: "美容",
    rakutenName: "ジェルネイルスターターキット 289点",
    rakutenUrl: "https://item.rakuten.co.jp/petitprice/10000255/",
  },
  {
    name: "バランスボール",
    worry: "座りっぱなしで衰えていく体幹",
    product: "バランスボール",
    price: "3000円",
    dailyEffort: "椅子代わりに座るだけ",
    period: "2週間",
    resultGood: "姿勢が整って体幹が自然に鍛えられる",
    altHigh: "月1万円のパーソナルジム",
    altBadState: "通うのをやめたらすぐ体型が戻ってる",
    effortHigh: "毎回ジムまで通って器具の順番待ちをして",
    tag: "トレーニング",
    rakutenName: "uFit Balance Ball バランスボール",
    rakutenUrl: "https://item.rakuten.co.jp/ufit-shop/balanceball/",
  },
  {
    name: "温度調節付き電気ケトル",
    worry: "お湯の温度加減が難しいコーヒー・紅茶",
    product: "温度調節電気ケトル",
    price: "5000円",
    dailyEffort: "温度を設定してボタンを押すだけ",
    period: "1回",
    resultGood: "毎回ちょうどいい温度でおいしく淹れられる",
    altHigh: "1杯500円のカフェ",
    altBadState: "並んだ直後はいいのに毎朝また時間がなくなる",
    effortHigh: "毎朝湯温を確かめながら何度も注いで",
    tag: "時短家電",
    rakutenName: "recolte 温度調節ドリップケトル",
    rakutenUrl: "https://item.rakuten.co.jp/e-goods/e_recolte_kettle/",
  },
  {
    name: "壁掛け収納ポケット",
    worry: "ドア周りに散らかる小物の置き場所",
    product: "壁掛け収納ポケット",
    price: "2000円",
    dailyEffort: "ドアにかけて放り込むだけ",
    period: "1回",
    resultGood: "小物がまとまって部屋がすっきりする",
    altHigh: "数十万円の収納リフォーム",
    altBadState: "リフォームしても結局小物が机に積まれてる",
    effortHigh: "毎回引き出しの奥まで手を伸ばして探して",
    tag: "収納",
    rakutenName: "KOOPU ドア掛け収納ラック 楽天1位",
    rakutenUrl: "https://item.rakuten.co.jp/koopu/ksj05/",
  },
  {
    name: "もこもこルームシューズ",
    worry: "冬のフローリングで冷える足先",
    product: "もこもこルームシューズ",
    price: "2500円",
    dailyEffort: "履いて過ごすだけ",
    period: "1回",
    resultGood: "足先がすぐ温まって冷えが気にならなくなる",
    altHigh: "1万円のホットカーペット",
    altBadState: "つけっぱなしで結局足先だけ冷えたまま",
    effortHigh: "毎回靴下を何枚も重ね履きして",
    tag: "冷え対策",
    rakutenName: "softbox もこもこボアルームシューズ",
    rakutenUrl: "https://item.rakuten.co.jp/softbox/10000051/",
  },
  {
    name: "抱っこ紐",
    worry: "首がすわる前の新生児の抱っこの不安",
    product: "新生児用抱っこ紐",
    price: "1万円",
    dailyEffort: "装着して赤ちゃんを乗せるだけ",
    period: "1回",
    resultGood: "両手が空いて家事をしながら安心して抱っこできる",
    altHigh: "月2万円のベビーシッター",
    altBadState: "頼んだ直後はいいのに毎回料金が気になる",
    effortHigh: "毎回赤ちゃんを片腕で抱えて家事をして",
    tag: "育児",
    rakutenName: "エアリコ 新生児用抱っこ紐",
    rakutenUrl: "https://item.rakuten.co.jp/airricobaby/r_dwpm2/",
  },
  {
    name: "モバイルディスプレイ",
    worry: "ノートパソコン1画面での作業効率の悪さ",
    product: "モバイルディスプレイ",
    price: "1.5万円",
    dailyEffort: "ケーブル1本つなぐだけ",
    period: "1回",
    resultGood: "画面が広がって作業がサクサク進む",
    altHigh: "月1万円の整体通い",
    altBadState: "施術直後はいいのに数日で肩こりが戻ってる",
    effortHigh: "毎回狭い画面を何度も切り替えながら作業して",
    tag: "デスクワーク",
    rakutenName: "ARZOPA 14インチ モバイルモニター",
    rakutenUrl: "https://item.rakuten.co.jp/being/arzopa-16-a/",
  },
  {
    name: "猫用キャリーバッグ",
    worry: "通院のたびに暴れる愛猫の移動",
    product: "猫用キャリーバッグ",
    price: "4000円",
    dailyEffort: "バッグに入れて運ぶだけ",
    period: "1回",
    resultGood: "愛猫が落ち着いて通院がスムーズになる",
    altHigh: "1回5000円の往診サービス",
    altBadState: "利用した直後はいいのに毎回予約が取れず困る",
    effortHigh: "毎回暴れる愛猫を無理やり抱えて運んで",
    tag: "ペット用品",
    rakutenName: "Petilet 透明キャリーバッグ",
    rakutenUrl: "https://item.rakuten.co.jp/anshin01/4570147589110/",
  },
  {
    name: "節電タップ",
    worry: "知らないうちに増えていく電気代",
    product: "節電タップ",
    price: "2500円",
    dailyEffort: "差し込んで使うだけ",
    period: "1回",
    resultGood: "待機電力が減って電気代がすぐ下がる",
    altHigh: "月500円の家計簿アプリ",
    altBadState: "課金直後はいいのにすぐ入力が面倒で放置してる",
    effortHigh: "毎回コンセントを一つずつ抜いて回って",
    tag: "家計管理",
    rakutenName: "サンワダイレクト ワットモニター電源タップ",
    rakutenUrl: "https://item.rakuten.co.jp/sanwadirect/700-tap071/",
  },
  {
    name: "排水口ネット",
    worry: "すぐにぬめりが溜まるキッチンの排水口",
    product: "排水口ネット",
    price: "1000円",
    dailyEffort: "ネットを被せて捨てるだけ",
    period: "1回",
    resultGood: "ぬめりが減って排水口がずっと清潔に保てる",
    altHigh: "1回3000円の排水口業者",
    altBadState: "依頼直後はいいのに数週間で戻ってる",
    effortHigh: "毎回スポンジでごしごし擦って掃除して",
    tag: "掃除・洗濯",
    rakutenName: "排水口ゴミ受けネット グッドデザイン賞",
    rakutenUrl: "https://item.rakuten.co.jp/luck-ind/lkm0002/",
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

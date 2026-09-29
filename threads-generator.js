const GENRES = [
  {
    name: "電動鼻毛カッター",
    worry: "鼻毛が伸びてて焦る",
    product: "電動鼻毛カッター",
    price: "1,500円",
    dailyEffort: "鼻と耳に当てて数秒スイッチ押すだけ",
    period: "1回",
    resultGood: "鼻毛も耳毛もスッキリ処理できる",
    altHigh: "美容院での眉毛カット",
    altBadState: "鼻毛気になったまま外出してる",
    effortHigh: "毛抜きで一本一本抜く",
    amazonName: "OOU 電動鼻毛カッター",
    amazonUrl: "https://www.amazon.co.jp/電動鼻毛カッター-耳毛カッター-グルーミング用品-単3乾電池使用-ロングライフ設計/dp/B084TXD1M7",
  },
  {
    name: "ネックマッサージャー",
    worry: "首こりで頭が重い",
    product: "ネックマッサージャー",
    price: "6,000円",
    dailyEffort: "首に挟んでスイッチ入れるだけ",
    period: "1回",
    resultGood: "首も肩もじんわりほぐれる",
    altHigh: "整体での首マッサージ",
    altBadState: "首こりが慢性化したまま",
    effortHigh: "自分の手で首を揉みほぐす",
    amazonName: "オムロン ネックマッサージャ HM-150-BW",
    amazonUrl: "https://www.amazon.co.jp/オムロン-OMRON-HM-150-BW-オムロンネックマッサージャHM-150-BW/dp/B07VFLY4TQ",
  },
  {
    name: "デジタル体組成計",
    worry: "体重しか分からない体重計使ってる",
    product: "体組成計",
    price: "2,000円",
    dailyEffort: "乗るだけでアプリに自動記録",
    period: "1週間",
    resultGood: "体脂肪率まで見えて変化に気づける",
    altHigh: "ジムでの定期体組成測定",
    altBadState: "体重の増減しか把握できてない",
    effortHigh: "毎回ジムまで行って測定してもらう",
    amazonName: "INSMART 体重計 体組成計 FG260",
    amazonUrl: "https://www.amazon.co.jp/体重計-インスマート-体脂肪計・体組成計-スマホ連動-FG260/dp/B082SQX6TD",
  },
  {
    name: "珪藻土バスマット",
    worry: "お風呂上がりの床がびしょびしょ",
    product: "珪藻土バスマット",
    price: "2,500円",
    dailyEffort: "足を乗せるだけで吸水",
    period: "1日",
    resultGood: "足元サラサラで床も濡れない",
    altHigh: "ホテルのふかふかバスマット",
    altBadState: "洗濯しても生乾き臭が取れない",
    effortHigh: "普通のバスマットを毎日洗濯して干す",
    amazonName: "日本製 珪藻土バスマット KBM-001",
    amazonUrl: "https://www.amazon.co.jp/-/en/KBM-001/dp/B01HS0JL7C",
  },
  {
    name: "電動角質リムーバー",
    worry: "かかとのガサガサが治らない",
    product: "電動角質リムーバー",
    price: "2,000円",
    dailyEffort: "かかとに当てて滑らせるだけ",
    period: "1回",
    resultGood: "かかとがツルツルになる",
    altHigh: "フットケアサロンでの角質除去",
    altBadState: "ストッキングが引っかかるまま",
    effortHigh: "軽石でゴシゴシこする",
    amazonName: "電動角質リムーバー かかとケア IPX7",
    amazonUrl: "https://www.amazon.co.jp/電動角質リムーバー-かかとやすり-IPX7水洗い可能-LCD表示-角質ケア/dp/B095FSDF95",
  },
  {
    name: "USB充電式ネックファン",
    worry: "通勤中の暑さでバテる",
    product: "首掛け扇風機",
    price: "2,800円",
    dailyEffort: "首にかけてスイッチ入れるだけ",
    period: "1日",
    resultGood: "両手が空いたまま涼しく過ごせる",
    altHigh: "タクシーでの冷房移動",
    altBadState: "汗だくで会社に着いてる",
    effortHigh: "うちわで自分を扇ぎ続ける",
    amazonName: "首掛け扇風機 USB充電式 2000mAh",
    amazonUrl: "https://www.amazon.co.jp/2024最新型-首掛け扇風機-2000mah-8H長時間稼働-3段階風量調整/dp/B0D14P5HDS",
  },
  {
    name: "目元美顔器",
    worry: "目元のたるみが気になる",
    product: "EMS目元美顔器",
    price: "3,500円",
    dailyEffort: "目元に当てて温感ケアするだけ",
    period: "2週間",
    resultGood: "目元がふっくらして明るく見える",
    altHigh: "エステでの目元集中ケア",
    altBadState: "コンシーラーでごまかしてる",
    effortHigh: "毎朝目元マッサージを手でする",
    amazonName: "ANLAN EMS目元美顔器",
    amazonUrl: "https://www.amazon.co.jp/目もと集中ケアANLAN-EMS目元美顔器-目元ケア-美顔器-温熱ケア/dp/B0CNJRNQR5",
  },
  {
    name: "自動ソープディスペンサー",
    worry: "ハンドソープのポンプを触るのが気になる",
    product: "自動ソープディスペンサー",
    price: "2,200円",
    dailyEffort: "手をかざすだけで泡が出る",
    period: "1日",
    resultGood: "触れずに手洗いが完了する",
    altHigh: "除菌スプレーの持ち歩き",
    altBadState: "ポンプのぬめりが気になったまま",
    effortHigh: "使うたびポンプ部分を除菌拭きする",
    amazonName: "Umimile 自動ソープディスペンサー",
    amazonUrl: "https://www.amazon.co.jp/最新版Umimile-ソープディスペンサー-ハンドソープディスペンサー-吐出量2段階調整-キッチン洗面所などに適用/dp/B07W41LYHZ",
  },
  {
    name: "洗い流さないヘアオイル",
    worry: "髪がパサついてまとまらない",
    product: "洗い流さないヘアオイル",
    price: "1,200円",
    dailyEffort: "毛先に数滴なじませるだけ",
    period: "1回",
    resultGood: "髪がまとまってツヤが出る",
    altHigh: "美容院でのトリートメント",
    altBadState: "広がる髪をピンで押さえ込んでる",
    effortHigh: "ドライヤー前に何工程もケアする",
    amazonName: "アイメディア 洗い流さないヘアトリートメント",
    amazonUrl: "https://www.amazon.co.jp/アイメディア-Aimedia-利尻昆布エキスヘアエッセンス-80ml/dp/B00TIQ4ZDA",
  },
  {
    name: "電動頭皮マッサージャー",
    worry: "頭皮が凝ってて薄毛が心配",
    product: "電動頭皮マッサージャー",
    price: "4,000円",
    dailyEffort: "頭皮に当てて滑らせるだけ",
    period: "1週間",
    resultGood: "頭皮が柔らかくなって血行も良くなる",
    altHigh: "ヘッドスパサロンでの施術",
    altBadState: "指で頭皮を揉むだけで済ませてる",
    effortHigh: "毎回サロン予約して通う",
    amazonName: "パナソニック 頭皮エステ EH-HE0G-T",
    amazonUrl: "https://www.amazon.co.jp/パナソニック-EH-HE0G-T-頭皮エステ-タッチタイプ-スパイラル・スライド/dp/B099MQGZMJ",
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

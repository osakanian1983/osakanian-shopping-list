const GENRES = [
  {
    name: "卓上加湿器",
    worry: "乾燥する季節に肌や喉がカサカサになる悩み",
    product: "卓上加湿器",
    price: "2500円",
    dailyEffort: "デスクに置いてスイッチを押すだけ",
    period: "1週間",
    resultGood: "肌も喉もしっとり潤って快適になる",
    altHigh: "1回3000円の加湿エステ",
    altBadState: "行っても数日でまた乾燥が戻る",
    effortHigh: "毎回予約を取ってエステに通って",
    tag: "乾燥対策",
    rakutenName: "LFF PREMIUM 卓上加湿器 USB超音波加湿器",
    rakutenUrl: "https://item.rakuten.co.jp/premium-interior/10000152/",
  },
  {
    name: "USB給電電気毛布",
    worry: "冬の底冷えで集中できない悩み",
    product: "USB給電電気毛布",
    price: "3000円",
    dailyEffort: "肩にかけてスイッチを入れるだけ",
    period: "1回",
    resultGood: "15秒でぽかぽかになって集中が続く",
    altHigh: "1万円の高級ひざ掛け",
    altBadState: "買っても生地だけで全然温まらない",
    effortHigh: "何枚も比較して買い直して",
    tag: "防寒対策",
    rakutenName: "USB給電 電気毛布 肩掛け毛布",
    rakutenUrl: "https://item.rakuten.co.jp/meisei/1211/",
  },
  {
    name: "着圧レギンス",
    worry: "朝起きても脚のむくみが取れない悩み",
    product: "着圧レギンス",
    price: "2000円",
    dailyEffort: "寝るときに履くだけ",
    period: "1週間",
    resultGood: "翌朝の脚がすっと軽くなる",
    altHigh: "1回5000円のリンパマッサージ",
    altBadState: "施術直後だけで翌日にはむくみが戻る",
    effortHigh: "毎回予約を取ってサロンに通って",
    tag: "むくみ対策",
    rakutenName: "着圧レギンス 寝ながら 寝るとき用",
    rakutenUrl: "https://item.rakuten.co.jp/opsr/cmlegs/",
  },
  {
    name: "充電式カイロ",
    worry: "冬の通勤で手先が冷えてつらい悩み",
    product: "充電式カイロ",
    price: "2200円",
    dailyEffort: "充電して握るだけ",
    period: "1回",
    resultGood: "外出中もずっと手先があたたかい",
    altHigh: "1箱500円の使い捨てカイロ",
    altBadState: "使っても数時間で冷めて買い直す",
    effortHigh: "毎回コンビニでカイロを買い足して",
    tag: "冷え対策",
    rakutenName: "充電式カイロ 繰り返し使える電気カイロ",
    rakutenUrl: "https://item.rakuten.co.jp/lifehiroba/kairo03/",
  },
  {
    name: "フェイシャルスチーマー",
    worry: "季節の変わり目で肌の乾燥が気になる悩み",
    product: "フェイシャルスチーマー",
    price: "4500円",
    dailyEffort: "顔に当てて15分待つだけ",
    period: "1週間",
    resultGood: "肌がふっくら潤ってメイクのりが変わる",
    altHigh: "6000円のエステ",
    altBadState: "通っても数日で乾燥がぶり返す",
    effortHigh: "毎回予約を取ってエステに通って",
    tag: "美容",
    rakutenName: "FESTINO ナノスチーマー フェイシャルスチーマー",
    rakutenUrl: "https://item.rakuten.co.jp/roomy/win22nov28h01/",
  },
  {
    name: "防災ラジオ",
    worry: "停電が起きたらどうしようという悩み",
    product: "防災ラジオ",
    price: "3000円",
    dailyEffort: "引き出しに置いておくだけ",
    period: "1回",
    resultGood: "停電時もすぐ情報と明かりを確保できる",
    altHigh: "月500円の災害情報アプリ",
    altBadState: "入っても停電でスマホが使えず意味がない",
    effortHigh: "毎月料金を払って契約を続けて",
    tag: "防災",
    rakutenName: "キャプテンスタッグ 防災ラジオ UW-4510",
    rakutenUrl: "https://item.rakuten.co.jp/captainstagstore/4560464287332/",
  },
  {
    name: "布団クリーナー",
    worry: "布団のダニやホコリが気になる悩み",
    product: "布団クリーナー",
    price: "1.5万円",
    dailyEffort: "布団に当てて往復するだけ",
    period: "1回",
    resultGood: "ダストがすっきり取れて眠りが変わる",
    altHigh: "3000円のクリーニング",
    altBadState: "頼んでも乾くまで数日布団が使えない",
    effortHigh: "毎回往復の送料を払って依頼して",
    tag: "掃除・洗濯",
    rakutenName: "アイリスオーヤマ 布団クリーナー FBD-41-W",
    rakutenUrl: "https://item.rakuten.co.jp/u-denki/211188/",
  },
  {
    name: "ペット自動給水器",
    worry: "留守中の愛猫の水分補給が心配な悩み",
    product: "ペット自動給水器",
    price: "3500円",
    dailyEffort: "水を入れて置いておくだけ",
    period: "1回",
    resultGood: "いつでも新鮮な水を飲んでくれて安心できる",
    altHigh: "3000円のペットホテル",
    altBadState: "預けても慣れない環境でストレスがかかる",
    effortHigh: "毎回予約を取って送り迎えして",
    tag: "ペット用品",
    rakutenName: "エレコム サイレントアクア 自動給水器",
    rakutenUrl: "https://item.rakuten.co.jp/elecom/4549550302470/",
  },
  {
    name: "ミニ財布",
    worry: "大きい財布でバッグがかさばる悩み",
    product: "ミニ財布",
    price: "4000円",
    dailyEffort: "普段の財布と入れ替えるだけ",
    period: "1回",
    resultGood: "バッグが軽くなって身軽に出かけられる",
    altHigh: "1万円の小さめブランドポーチ",
    altBadState: "買ってもカードが入らず結局荷物が増える",
    effortHigh: "何個も財布を買い替えて試して",
    tag: "ファッション小物",
    rakutenName: "Annekor ミニ財布 じゃばらカードケース",
    rakutenUrl: "https://item.rakuten.co.jp/annekor/ads_017/",
  },
  {
    name: "骨盤ベルト",
    worry: "産後の腰の重さと体型戻りが心配な悩み",
    product: "骨盤ベルト",
    price: "3000円",
    dailyEffort: "服の下に巻いて過ごすだけ",
    period: "1か月",
    resultGood: "腰が支えられて体型も整ってくる",
    altHigh: "1回5000円の骨盤矯正整体",
    altBadState: "通っても数日で元の体の状態に戻る",
    effortHigh: "毎回予約を取って整体に通って",
    tag: "産後ケア",
    rakutenName: "Poodle 骨盤ベルト 産後 腰痛サポート",
    rakutenUrl: "https://item.rakuten.co.jp/centerporter/mat_001/",
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

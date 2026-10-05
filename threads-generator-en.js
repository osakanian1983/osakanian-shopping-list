const GENRES = [
  {
    name: "Standing Desk Converter",
    worry: "sitting hunched at a desk",
    product: "standing desk converter",
    price: "$140",
    dailyEffort: "just set it on your desk and raise it",
    period: "1 day",
    resultGood: "you switch to standing without buying new furniture",
    altHigh: "$600 standing desk",
    altBadState: "still sitting hunched all day",
    effortHigh: "stacking books under your laptop to raise it",
    amazonName: "STANDNEE Standing Desk Converter",
    amazonUrl: "https://www.amazon.com/STANDNEE-Standing-Desk-Converter-Workstation/dp/B09195G5LY",
  },
  {
    name: "Cold Brew Coffee Maker",
    worry: "spending on iced coffee every morning",
    product: "cold brew coffee maker",
    price: "$20",
    dailyEffort: "just add grounds and water the night before",
    period: "12 hours",
    resultGood: "you wake up to smooth cold brew at home",
    altHigh: "$6 coffee run",
    altBadState: "still spending on coffee every morning",
    effortHigh: "driving to the coffee shop every single morning",
    amazonName: "JunVpic Cold Brew Coffee Maker",
    amazonUrl: "https://www.amazon.com/Cold-Brew-Coffee-Maker-Jar/dp/B0BNN7GGKR",
  },
  {
    name: "Travel Neck Pillow",
    worry: "waking up with a stiff neck after flights",
    product: "travel neck pillow",
    price: "$20",
    dailyEffort: "just wrap it around your neck and lean back",
    period: "1 flight",
    resultGood: "you land without the neck pain",
    altHigh: "$300 upgrade",
    altBadState: "still waking up with a stiff neck",
    effortHigh: "twisting a sweater into a makeshift pillow",
    amazonName: "napfun Travel Neck Pillow",
    amazonUrl: "https://www.amazon.com/Traveling-Upgraded-Airplane-Headrest-Accessories/dp/B07SRRQS5B",
  },
  {
    name: "Resistance Bands Set",
    worry: "skipping workouts because the gym is far",
    product: "set of resistance bands",
    price: "$25",
    dailyEffort: "just loop it around your legs or arms",
    period: "15 minutes",
    resultGood: "you get a full workout at home",
    altHigh: "$50 gym",
    altBadState: "still skipping workouts most weeks",
    effortHigh: "driving to the gym just for a quick workout",
    amazonName: "Free Dreamer Resistance Bands Set",
    amazonUrl: "https://www.amazon.com/Free-Dreamer-Resistance-Exercise-Training/dp/B07TW44G31",
  },
  {
    name: "White Noise Machine",
    worry: "lying awake every time the house gets loud",
    product: "white noise machine",
    price: "$35",
    dailyEffort: "just set it on your nightstand and press play",
    period: "1 night",
    resultGood: "you fall asleep without noticing it",
    altHigh: "$2,000 soundproof",
    altBadState: "still lying awake at every noise",
    effortHigh: "running a fan all night just to drown out noise",
    amazonName: "Easysleep White Noise Machine",
    amazonUrl: "https://www.amazon.com/Easysleep-Soothing-Machines-Function-Relaxation/dp/B087CPCVK9",
  },
  {
    name: "Umbrella Stand",
    worry: "wet umbrellas dripping all over the entryway",
    product: "square umbrella stand",
    price: "$22",
    dailyEffort: "just drop your umbrella in after you walk in",
    period: "1 day",
    resultGood: "the entryway stays dry and tidy",
    altHigh: "$400 remodel",
    altBadState: "still mopping up puddles by the door",
    effortHigh: "wiping up puddles by the door every time it rains",
    amazonName: "Okllen Metal Umbrella Holder",
    amazonUrl: "https://www.amazon.com/Okllen-Umbrella-Holder-Square-Entryway/dp/B09NW31FYT",
  },
  {
    name: "Hair Dryer Holder",
    worry: "digging through a drawer for your hair dryer",
    product: "hair dryer holder",
    price: "$15",
    dailyEffort: "just stick it to the wall and hang the dryer",
    period: "1 day",
    resultGood: "your hair dryer is right there",
    altHigh: "$200 cabinet install",
    altBadState: "still digging through drawers",
    effortHigh: "pulling the whole drawer out to find the dryer",
    amazonName: "SUPTEC Universal Hair Dryer Holder",
    amazonUrl: "https://www.amazon.com/SUPTEC-Universal-Adhesive-Organizer-Bathroom/dp/B09SPX24CL",
  },
  {
    name: "Portable Ice Maker",
    worry: "running out of ice the moment guests show up",
    product: "portable ice maker",
    price: "$90",
    dailyEffort: "just add water and press start",
    period: "6 minutes",
    resultGood: "you have a full batch of ice ready fast",
    altHigh: "$6 bag of ice",
    altBadState: "still making a last-minute ice run",
    effortHigh: "driving to the store for ice every time",
    amazonName: "Ice Maker Machine Countertop Portable",
    amazonUrl: "https://www.amazon.com/Ice-Maker-Machine-Countertop-Portable/dp/B09X16H7QC",
  },
  {
    name: "Bedside Caddy Organizer",
    worry: "your phone and remote lost in the sheets",
    product: "bedside caddy organizer",
    price: "$17",
    dailyEffort: "just hang it on the bed frame and tuck items in",
    period: "1 day",
    resultGood: "everything stays within reach",
    altHigh: "$150 nightstand",
    altBadState: "still losing things in the sheets",
    effortHigh: "patting down the sheets in the dark every night",
    amazonName: "WantuSee Bedside Caddy",
    amazonUrl: "https://www.amazon.com/Bedside-Storage-Organizer-Hanging-Magazine/dp/B0851HCNKK",
  },
  {
    name: "Electric Hand Mixer",
    worry: "arms aching from mixing batter",
    product: "handheld electric mixer",
    price: "$30",
    dailyEffort: "just press the button and move it through the bowl",
    period: "1 batch",
    resultGood: "your batter mixes smooth in under a minute",
    altHigh: "$15 bakery cake",
    altBadState: "still buying cakes instead of baking",
    effortHigh: "whisking batter by hand until your arm gives out",
    amazonName: "Mueller Electric Hand Mixer",
    amazonUrl: "https://www.amazon.com/Mueller-Electric-Stainless-Accessories-Whipping/dp/B08B2ZWLT6",
  },
];

function cap(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

const PATTERNS = [
  {
    key: "A",
    title: "Pattern A | Price-Gap Angle",
    scoreRange: { hook: [17, 19], concrete: [18, 20], contrarian: [15, 18], empathy: [15, 18], comment: [15, 18] },
    reasons: ["The price gap creates enough shock value to drive saves", "Cost-per-value framing lands hard with the target audience"],
    build(g) {
      const l1 = `If ${g.worry} sounds familiar, you need a ${g.product}.`;
      const rest =
        `For just ${g.price}, ${g.dailyEffort} and after ${g.period} ${g.resultGood} — ` +
        `wild 🤯 Still using a ${g.altHigh} and ${g.altBadState}? You need to try this. ` +
        `Why pay more for nothing when ${g.price} actually works? 🤯`;
      return `${l1}\n${rest}`;
    },
  },
  {
    key: "B",
    title: "Pattern B | Time-Saving Angle",
    scoreRange: { hook: [15, 18], concrete: [16, 19], contrarian: [13, 16], empathy: [17, 19], comment: [15, 18] },
    reasons: ["The time-saved payoff is highly shareable", "Convenience framing resonates with busy people"],
    build(g) {
      const l1 = `If you're tired of ${g.worry}, get a ${g.product}.`;
      const rest =
        `${cap(g.dailyEffort)} and after ${g.period} ${g.resultGood} — a lifesaver when ` +
        `you're busy 🤯 Still ${g.effortHigh} with no results? You need to try this. ` +
        `Why work harder for temporary results when this takes zero effort? 🤯`;
      return `${l1}\n${rest}`;
    },
  },
  {
    key: "C",
    title: "Pattern C | Contrarian Angle",
    scoreRange: { hook: [17, 19], concrete: [16, 19], contrarian: [18, 20], empathy: [17, 19], comment: [16, 19] },
    reasons: ["Calling out big spenders sparks both agreement and pushback", "The contrarian angle is built to drive comments"],
    build(g) {
      const l1 = `${cap(g.worry)} — the people who drop money on a ${g.altHigh} are missing the real fix.`;
      const rest =
        `It's not about price, it's about sticking with it. Even a ${g.price} ${g.product} ` +
        `works if you use it for ${g.period} — ${g.resultGood} 🤯 Bought a ${g.altHigh} and ` +
        `${g.altBadState}? You need to try this. Why pay more to feel safe when using it ` +
        `actually works? 🤯`;
      return `${l1}\n${rest}`;
    },
  },
];

const SCORE_LABELS = [
  ["hook", "Hook Strength"],
  ["concrete", "Specificity"],
  ["contrarian", "Contrarian Edge"],
  ["empathy", "Relatability"],
  ["comment", "Comment Bait"],
];

const HASHTAGS = "#ad #Amazon #AmazonFinds";

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
    const tags = `${HASHTAGS} #${genre.name.replace(/\s+/g, "")}`;
    return { pattern, body, tags, scores, total, reason, charCount: body.replace(/\n/g, " ").length };
  });
}

function formatRound(results) {
  const divider = "━━━━━━━━━━━━━━━";
  const blocks = results.map(({ pattern, body, tags, scores, total }) => {
    const scoreLines = SCORE_LABELS.map(([key, label]) => `・${label}: ${scores[key]}/20`).join("\n");
    return `${divider}\n[${pattern.title}]\nEngagement score: ${total}%\n\n${body}\n\n${tags}\n\nScore breakdown:\n${scoreLines}`;
  });
  const winner = results.reduce((best, cur) => (cur.total > best.total ? cur : best), results[0]);
  const summary = `[Top Pick]\nBest-performing pattern: ${winner.pattern.key}\nWhy: ${winner.reason}`;
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

  genreLabelEl.textContent = `Today's genre: ${genre.name}`;
  productInfoEl.textContent = "";
  const linkLabel = document.createElement("span");
  linkLabel.textContent = "Featured product: ";
  const link = document.createElement("a");
  link.href = genre.amazonUrl;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = genre.amazonName;
  productInfoEl.append(linkLabel, link);

  outputEl.textContent = currentText;
  charCountsEl.textContent = results
    .map((r) => `${r.pattern.key}: ${r.charCount} chars`)
    .join(" / ");
  copyStatusEl.textContent = "";
}

generateBtn.addEventListener("click", render);

copyBtn.addEventListener("click", async () => {
  if (!currentText) return;
  try {
    await navigator.clipboard.writeText(currentText);
    copyStatusEl.textContent = "Copied!";
  } catch {
    copyStatusEl.textContent = "Copy failed. Please select the text manually.";
  }
});

render();

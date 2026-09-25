const GENRES = [
  {
    name: "Posture Corrector",
    worry: "neck and shoulder pain from desk hunching",
    product: "posture corrector",
    price: "$20",
    dailyEffort: "just strap it on",
    period: "1 week",
    resultGood: "you sit up straight without thinking",
    altHigh: "$150 ergonomic chair",
    altBadState: "still slouching by lunch",
    effortHigh: "checking your posture every hour",
    amazonName: "ComfyBrace Posture Corrector Back Brace",
    amazonUrl: "https://www.amazon.com/Corrector-Back-Adjustable-Straightener-Support-Relief-Breathable/dp/B07ZQPKTVV",
  },
  {
    name: "Blue Light Glasses",
    worry: "headaches from staring at screens all day",
    product: "pair of blue light glasses",
    price: "$15",
    dailyEffort: "just put them on",
    period: "3 days",
    resultGood: "your eyes stop burning by evening",
    altHigh: "$400 monitor",
    altBadState: "still getting headaches every afternoon",
    effortHigh: "taking a screen break every hour",
    amazonName: "ANRRI Blue Light Blocking Glasses",
    amazonUrl: "https://www.amazon.com/ANRRI-Blocking-Eyestrain-Lightweight-Eyeglasses/dp/B07GRPXNX4",
  },
  {
    name: "Compression Socks",
    worry: "swollen legs after standing or flying all day",
    product: "pair of compression socks",
    price: "$18",
    dailyEffort: "just pull them on",
    period: "1 flight",
    resultGood: "you land with zero swelling",
    altHigh: "$300 business seat",
    altBadState: "still limping off flights",
    effortHigh: "elevating your legs for an hour every night",
    amazonName: "Skicuff Travel Compression Socks",
    amazonUrl: "https://www.amazon.com/Skicuff-Travel-Compression-Graduated-Flight/dp/B0DG8N1HBR",
  },
  {
    name: "Electric Jar Opener",
    worry: "not being able to twist open a jar lid",
    product: "electric jar opener",
    price: "$25",
    dailyEffort: "just hold the button",
    period: "1 try",
    resultGood: "the lid pops off in 3 seconds",
    altHigh: "$40 jar gripper tool set",
    altBadState: "still running it under hot water",
    effortHigh: "wrestling it with a towel for 5 minutes",
    amazonName: "INSTACAN Electric Jar Opener",
    amazonUrl: "https://www.amazon.com/Electric-Jar-Opener-Auto-Off-Arthritic/dp/B089SNZD4N",
  },
  {
    name: "Handheld Car Vacuum",
    worry: "crumbs and pet hair taking over your car",
    product: "handheld car vacuum",
    price: "$30",
    dailyEffort: "just run it over the seats",
    period: "1 weekend",
    resultGood: "your car looks freshly detailed",
    altHigh: "$40 car wash",
    altBadState: "still finding crumbs a week later",
    effortHigh: "dragging your full-size vacuum outside every week",
    amazonName: "DRECELL Handheld Cordless Car Vacuum",
    amazonUrl: "https://www.amazon.com/DRECELL-Handheld-Cordless-Brushless-Lightweight/dp/B0D5QHCZNS",
  },
  {
    name: "Sunrise Alarm Clock",
    worry: "dreading your alarm and hitting snooze every morning",
    product: "sunrise alarm clock",
    price: "$35",
    dailyEffort: "just set it before bed",
    period: "3 days",
    resultGood: "you wake up before the alarm goes off",
    altHigh: "$100 coach",
    altBadState: "still hitting snooze daily",
    effortHigh: "setting five alarms across the room",
    amazonName: "ANTDALIS Sunrise Alarm Clock Wake Up Light",
    amazonUrl: "https://www.amazon.com/Sunrise-Adults-Sleepers-Alarms-Bedrooms/dp/B09YPNMWQ1",
  },
  {
    name: "Laptop Stand",
    worry: "neck pain from hunching over your laptop at home",
    product: "laptop stand",
    price: "$25",
    dailyEffort: "just set your laptop on it",
    period: "1 week",
    resultGood: "your neck stops aching by evening",
    altHigh: "$600 standing desk",
    altBadState: "still hunched over by 10am",
    effortHigh: "stacking wobbly books under your laptop",
    amazonName: "Lamicall Aluminum Laptop Stand",
    amazonUrl: "https://www.amazon.com/Lamicall-Laptop-Stand-Riser-Portable/dp/B08M94BTYC",
  },
  {
    name: "Portable Charger",
    worry: "your phone dying halfway through the day",
    product: "portable charger",
    price: "$20",
    dailyEffort: "just toss it in your bag",
    period: "1 day",
    resultGood: "your phone is still at 80% by evening",
    altHigh: "$1,000 new phone",
    altBadState: "still hunting for an outlet by 3pm",
    effortHigh: "carrying three charging cables just in case",
    amazonName: "10000mAh Portable Charger Power Bank",
    amazonUrl: "https://www.amazon.com/Portable-10000mAh-Transparent-Flashlight-Cellphone/dp/B0CBZ5R45J",
  },
  {
    name: "Silicone Stretch Lids",
    worry: "wasting plastic wrap on leftovers",
    product: "set of silicone stretch lids",
    price: "$13",
    dailyEffort: "just stretch one over the bowl",
    period: "1 week",
    resultGood: "leftovers stay fresh with zero mismatched lids",
    altHigh: "$150 containers",
    altBadState: "still hunting for a lid",
    effortHigh: "wrapping every bowl in plastic wrap and foil",
    amazonName: "Reusable Silicone Stretch Lids, 7-Pack",
    amazonUrl: "https://www.amazon.com/Reusable-Silicone-Stretch-Lids-Microwave/dp/B0CHZ69ZFN",
  },
  {
    name: "Knee Compression Sleeve",
    worry: "your knees aching on every flight of stairs",
    product: "knee compression sleeve",
    price: "$16",
    dailyEffort: "just slide it on",
    period: "1 week",
    resultGood: "you take the stairs two at a time, pain-free",
    altHigh: "$200 PT session",
    altBadState: "still babying your knee",
    effortHigh: "icing your knee for 20 minutes every night",
    amazonName: "CAMBIVO Knee Compression Sleeve, 2-Pack",
    amazonUrl: "https://www.amazon.com/CAMBIVO-Compression-Arthritis-Meniscus-Recovery/dp/B07G1XMQVN",
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
    return { pattern, body, scores, total, reason, charCount: body.replace(/\n/g, " ").length };
  });
}

function formatRound(results) {
  const divider = "━━━━━━━━━━━━━━━";
  const blocks = results.map(({ pattern, body, scores, total }) => {
    const scoreLines = SCORE_LABELS.map(([key, label]) => `・${label}: ${scores[key]}/20`).join("\n");
    return `${divider}\n[${pattern.title}]\nEngagement score: ${total}%\n\n${body}\n\nScore breakdown:\n${scoreLines}`;
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

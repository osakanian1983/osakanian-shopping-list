const GENRES = [
  {
    name: "Electric Wine Opener",
    worry: "wrestling with a corkscrew every dinner party",
    product: "rechargeable wine opener",
    price: "$25",
    dailyEffort: "just press the button and lift",
    period: "1 bottle",
    resultGood: "the cork slides out in seconds",
    altHigh: "$40 sommelier knife",
    altBadState: "still wrestling the cork",
    effortHigh: "twisting and pulling until your wrist aches",
    amazonName: "Secura Electric Wine Opener",
    amazonUrl: "https://www.amazon.com/Secura-SWO-3N-Electrical-Bottle-Stainless/dp/B01261VEOG",
  },
  {
    name: "Automatic Pet Feeder",
    worry: "worrying about your cat's mealtime while out",
    product: "smart pet feeder",
    price: "$35",
    dailyEffort: "just set the timer once",
    period: "1 day",
    resultGood: "your cat eats right on schedule",
    altHigh: "$30 pet sitter",
    altBadState: "still racing home in time",
    effortHigh: "texting a neighbor to check the food bowl",
    amazonName: "Cat Mate C200 Automatic Pet Feeder",
    amazonUrl: "https://www.amazon.com/Cat-Mate-Automatic-Feeder-Small/dp/B08B6G8PKZ",
  },
  {
    name: "Fitness Tracker Watch",
    worry: "having no idea how active you really are",
    product: "fitness tracker watch",
    price: "$45",
    dailyEffort: "just wear it all day",
    period: "1 week",
    resultGood: "you see real steps and sleep data",
    altHigh: "$150 checkup",
    altBadState: "still guessing how active you were",
    effortHigh: "logging every walk by hand in a notes app",
    amazonName: "Amazfit Band 7 Fitness Tracker",
    amazonUrl: "https://www.amazon.com/Amazfit-Fitness-Tracker-Monitoring-Resistant/dp/B09Z6CRHJ6",
  },
  {
    name: "LED Lighted Makeup Mirror",
    worry: "applying makeup in bad bathroom lighting",
    product: "lighted makeup mirror",
    price: "$25",
    dailyEffort: "just flip it on before you start",
    period: "1 morning",
    resultGood: "you see every detail clearly",
    altHigh: "$60 makeup lesson",
    altBadState: "still squinting in dim light",
    effortHigh: "holding your phone flashlight up to the mirror",
    amazonName: "KEDSUM LED Lighted Makeup Mirror",
    amazonUrl: "https://www.amazon.com/KEDSUM-Trifold-Tabletop-Batteries-Charging/dp/B06XHWFR2X",
  },
  {
    name: "Electric Griddle",
    worry: "a sink full of pots after breakfast",
    product: "tabletop griddle",
    price: "$30",
    dailyEffort: "just plug it in and cook",
    period: "1 breakfast",
    resultGood: "cleanup takes one easy step",
    altHigh: "$15 diner breakfast",
    altBadState: "still scrubbing pans every meal",
    effortHigh: "washing a full pan and spatula every morning",
    amazonName: "Presto Liddle Griddle",
    amazonUrl: "https://www.amazon.com/Presto-7211-07211-Liddle-Griddle/dp/B00006IUWL",
  },
  {
    name: "Motion Sickness Wristband",
    worry: "feeling queasy the moment the car starts",
    product: "motion sickness wristband",
    price: "$10",
    dailyEffort: "just slide it on your wrist",
    period: "1 trip",
    resultGood: "you ride without the queasy feeling",
    altHigh: "$20 sickness pill",
    altBadState: "still queasy the whole trip",
    effortHigh: "staring out the window trying not to be sick",
    amazonName: "Sea-Band Anti-Nausea Wristband",
    amazonUrl: "https://www.amazon.com/Sea-Band-Wristband-Anti-Nausea-Acupressure-Sickness/dp/B004L4D0DU",
  },
  {
    name: "Electric Blanket",
    worry: "cold feet no matter how many blankets you pile on",
    product: "washable heated blanket",
    price: "$35",
    dailyEffort: "just plug it in and set the temp",
    period: "1 night",
    resultGood: "you warm up fast and stay cozy",
    altHigh: "$300 heater",
    altBadState: "still shivering under blankets",
    effortHigh: "layering on blankets that still don't help",
    amazonName: "Medical King Washable Heated Blanket Throw",
    amazonUrl: "https://www.amazon.com/Washable-Extremely-Comfortable-Electric-Controller/dp/B097Q85J47",
  },
  {
    name: "Hair Sectioning Clips",
    worry: "hair falling in your face while you get ready",
    product: "set of hair clips",
    price: "$10",
    dailyEffort: "just section your hair and clip it back",
    period: "1 session",
    resultGood: "your hair stays put with zero slipping",
    altHigh: "$40 blowout",
    altBadState: "still pushing hair out of your face",
    effortHigh: "holding sections back with bobby pins that slide out",
    amazonName: "Sndyi Hair Sectioning Clips, 12-Pack",
    amazonUrl: "https://www.amazon.com/Sectioning-Sndyi-Duckbill-Alligator-Professional/dp/B087TGWXGJ",
  },
  {
    name: "Foldable Dish Drying Rack",
    worry: "a countertop always covered in wet dishes",
    product: "foldable dish rack",
    price: "$25",
    dailyEffort: "just unfold it and stack your dishes",
    period: "1 day",
    resultGood: "your counter stays clear and dry",
    altHigh: "$500 counter remodel",
    altBadState: "still piling dishes on a towel",
    effortHigh: "drying every dish by hand right after washing",
    amazonName: "OXO Good Grips Fold Flat Dish Drying Rack",
    amazonUrl: "https://www.amazon.com/OXO-Aluminum-Drainboard-Kitchen-Collapsible/dp/B09BVYVFZQ",
  },
  {
    name: "Electric Toothbrush",
    worry: "wondering if hand brushing does much",
    product: "rechargeable toothbrush",
    price: "$20",
    dailyEffort: "just brush for the built-in timer",
    period: "1 week",
    resultGood: "your teeth feel noticeably cleaner",
    altHigh: "$150 dental visit",
    altBadState: "still getting cavities every checkup",
    effortHigh: "brushing extra hard with a manual toothbrush",
    amazonName: "Amazon Basics Rechargeable Electric Toothbrush",
    amazonUrl: "https://www.amazon.com/Amazon-Basics-Rechargeable-Toothbrush-Charger/dp/B08N7D5TSP",
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

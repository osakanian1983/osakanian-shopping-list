const GENRES = [
  {
    name: "Electric Can Opener",
    worry: "fighting a stuck lid every night",
    product: "cordless can opener",
    price: "$30",
    dailyEffort: "just clamp it on and press the button",
    period: "10 seconds",
    resultGood: "the lid pops off clean",
    altHigh: "$60 opener set",
    altBadState: "still wrenching lids off by hand",
    effortHigh: "cranking a stiff opener until your wrist aches",
    amazonName: "Kitchen Mama Auto Electric Can Opener",
    amazonUrl: "https://www.amazon.com/Kitchen-Mama-Automatic-Electric-Opener/dp/B07FVQLBL3",
  },
  {
    name: "Cooling Pillow",
    worry: "waking up drenched in sweat",
    product: "cooling gel pillow",
    price: "$35",
    dailyEffort: "just swap in the gel pillow at bedtime",
    period: "1 night",
    resultGood: "you sleep straight through",
    altHigh: "$150 mattress topper",
    altBadState: "still flipping your pillow all night",
    effortHigh: "flipping to the cold side every hour",
    amazonName: "QUTOOL Cooling Pillow 2-Pack",
    amazonUrl: "https://www.amazon.com/2-Pack-Cooling-Pillows-Sleeping-Hypoallergenic/dp/B07T7W7VR3",
  },
  {
    name: "Acupressure Mat Set",
    worry: "a tight, aching back",
    product: "spiky acupressure mat",
    price: "$25",
    dailyEffort: "just lie on it for a few minutes",
    period: "20 minutes",
    resultGood: "the tension melts away",
    altHigh: "$90 massage",
    altBadState: "still booking visits for the same tight back",
    effortHigh: "booking a massage every time your back locks up",
    amazonName: "Gaiam Acupressure Mat & Pillow Set",
    amazonUrl: "https://www.amazon.com/Gaiam-Acupressure-Mat-Pillow-Set/dp/B07QD2TBX5",
  },
  {
    name: "Pet Hair Remover Roller",
    worry: "pet fur stuck all over the couch",
    product: "reusable pet hair roller",
    price: "$25",
    dailyEffort: "just roll it over the cushions",
    period: "2 minutes",
    resultGood: "the couch looks fur-free",
    altHigh: "$200 cleaning",
    altBadState: "still picking fur off by hand",
    effortHigh: "picking fur off strand by strand",
    amazonName: "ChomChom Roller Pet Hair Remover",
    amazonUrl: "https://www.amazon.com/Pet-Dog-Cat-Hair-Remover-Couch/dp/B00BAGTNAQ",
  },
  {
    name: "Travel Jewelry Organizer",
    worry: "tangled necklaces every time you unpack",
    product: "foldable jewelry organizer roll",
    price: "$20",
    dailyEffort: "just roll it up and zip it shut",
    period: "1 trip",
    resultGood: "everything comes out tangle-free",
    altHigh: "$90 jewelry box",
    altBadState: "still untangling knots every trip",
    effortHigh: "untangling necklaces for ten minutes before every outfit",
    amazonName: "BAGSMART Travel Jewelry Organizer Roll",
    amazonUrl: "https://www.amazon.com/BAGSMART-Jewellery-Organiser-Journey-Rings-Necklaces/dp/B07K2VBHNH",
  },
  {
    name: "Grout Cleaning Brush",
    worry: "black mold along the shower grout",
    product: "long-handle grout brush",
    price: "$13",
    dailyEffort: "just scrub the lines for a minute",
    period: "1 minute",
    resultGood: "the grout turns white again",
    altHigh: "$300 regrouting",
    altBadState: "still scrubbing on your knees",
    effortHigh: "scrubbing grout on your knees with an old toothbrush",
    amazonName: "ITTAHO Grout Brush with Long Handle (2-Pack)",
    amazonUrl: "https://www.amazon.com/ITTAHO-Handle-Swivel-Cleaning-Scrubber/dp/B0986YJTHQ",
  },
  {
    name: "Derma Roller",
    worry: "dull skin that won't soak in your skincare",
    product: "titanium derma roller",
    price: "$20",
    dailyEffort: "just roll it over your face for a minute",
    period: "2 weeks",
    resultGood: "your skin looks brighter",
    altHigh: "$150 facial",
    altBadState: "still paying for the same dull skin",
    effortHigh: "layering serums that never sink in",
    amazonName: "Beauty by Earth Derma Roller",
    amazonUrl: "https://www.amazon.com/dp/B088WFBFVF",
  },
  {
    name: "Over-Door Hook Rack",
    worry: "coats piling up with nowhere to go",
    product: "chrome hook rack",
    price: "$15",
    dailyEffort: "just hang it over the door, no tools",
    period: "1 day",
    resultGood: "every coat has its own hook",
    altHigh: "$300 remodel",
    altBadState: "still piling coats on every chair",
    effortHigh: "piling coats onto every chair in the house",
    amazonName: "iDesign Classico Steel Over-The-Door 12-Hook Storage Rack",
    amazonUrl: "https://www.amazon.com/iDesign-Classico-Organizer-Bedroom-Bathroom/dp/B004KKX9KE",
  },
  {
    name: "USB-C Docking Hub",
    worry: "juggling five cables for one monitor",
    product: "multiport docking hub",
    price: "$36",
    dailyEffort: "just plug in one cable",
    period: "1 plug-in",
    resultGood: "every port just works",
    altHigh: "$90 adapter bundle",
    altBadState: "still swapping adapters every time",
    effortHigh: "swapping adapters every time you switch monitors",
    amazonName: "Anker 565 USB-C Hub, 11-in-1 Docking Station",
    amazonUrl: "https://www.amazon.com/Anker-USB-C-Docking-Station-Monitor/dp/B09Q5V9G5P",
  },
  {
    name: "Smart Power Strip",
    worry: "crawling behind the couch to flip one switch",
    product: "smart power strip",
    price: "$45",
    dailyEffort: "just tap the app to turn outlets on",
    period: "1 tap",
    resultGood: "every outlet turns on from your phone",
    altHigh: "$300 setup",
    altBadState: "still crawling behind furniture",
    effortHigh: "crawling behind furniture to reach the plug",
    amazonName: "Kasa Smart Plug Power Strip HS300",
    amazonUrl: "https://www.amazon.com/Kasa-Smart-Power-Strip-TP-Link/dp/B07G95FFN3",
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

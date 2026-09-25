const GENRES = [
  {
    name: "Sleep Earplugs",
    worry: "background noise keeping you up at night",
    product: "pair of earplugs",
    price: "$30",
    dailyEffort: "just pop them in before bed",
    period: "1 night",
    resultGood: "you sleep straight through without waking up",
    altHigh: "$300 curtain",
    altBadState: "still hearing every little sound",
    effortHigh: "stuffing tissue in your ears every night",
    amazonName: "Loop Quiet 2 Ear Plugs",
    amazonUrl: "https://www.amazon.com/Loop-Quiet-Ear-Plugs-Noise-Reducing/dp/B0D3V6Y38G",
  },
  {
    name: "Shoe Dryer",
    worry: "soggy shoes after a rainy commute",
    product: "shoe dryer",
    price: "$25",
    dailyEffort: "just plug it into your shoes overnight",
    period: "1 night",
    resultGood: "your shoes are bone dry and smell-free by morning",
    altHigh: "$100 pair of sneakers",
    altBadState: "still damp and musty",
    effortHigh: "stuffing newspaper into wet shoes every night",
    amazonName: "Home Care Wholesale Shoe Dryer and Deodorizer",
    amazonUrl: "https://www.amazon.com/Dryer-Boots-Warmer-Deodorizer-Adult-Foot-Shaped/dp/B09J7TRRBY",
  },
  {
    name: "Mini Massage Gun",
    worry: "sore muscles after a workout",
    product: "mini massage gun",
    price: "$40",
    dailyEffort: "just run it over the sore spot",
    period: "1 session",
    resultGood: "the tightness melts away in minutes",
    altHigh: "$80 sports massage",
    altBadState: "still sore two days later",
    effortHigh: "foam rolling on the floor for 20 minutes",
    amazonName: "RENPHO Mini Thermal Massage Gun",
    amazonUrl: "https://www.amazon.com/RENPHO-Portable-Percussion-Massager-Christmas/dp/B0D7CLCJKW",
  },
  {
    name: "Pet Water Fountain",
    worry: "your cat barely drinking water",
    product: "pet water fountain",
    price: "$35",
    dailyEffort: "just refill the tank once a week",
    period: "1 week",
    resultGood: "your cat is drinking way more water on its own",
    altHigh: "$150 vet visit",
    altBadState: "still barely touching the water bowl",
    effortHigh: "refilling a bowl five times a day to tempt them",
    amazonName: "Veken 95oz Cat Water Fountain",
    amazonUrl: "https://www.amazon.com/Veken-Fountain-Automatic-Dispenser-Replacement/dp/B08NCDBT7Q",
  },
  {
    name: "Packing Cubes",
    worry: "digging through a messy suitcase for one shirt",
    product: "set of packing cubes",
    price: "$25",
    dailyEffort: "just sort your clothes into them once",
    period: "1 trip",
    resultGood: "you find anything in your suitcase in seconds",
    altHigh: "$200 suitcase",
    altBadState: "still digging through a pile",
    effortHigh: "refolding your whole suitcase every time you need something",
    amazonName: "Amazon Essentials 4-Piece Packing Cubes",
    amazonUrl: "https://www.amazon.com/Amazon-Basics-Packing-Travel-Organizer/dp/B014VBIEZQ",
  },
  {
    name: "Electric Spin Scrub Brush",
    worry: "scrubbing the shower on your knees",
    product: "electric spin scrub brush",
    price: "$40",
    dailyEffort: "just glide it over the tile",
    period: "1 clean",
    resultGood: "the grime is gone in minutes",
    altHigh: "$120 deep clean",
    altBadState: "still scrubbing the same spot",
    effortHigh: "scrubbing tile grout by hand for an hour",
    amazonName: "Electric Spin Scrubber Power Shower Cleaning Brush",
    amazonUrl: "https://www.amazon.com/Electric-Scrubber-Cordless-Replaceable-Adjustable/dp/B0B7RSV894",
  },
  {
    name: "Facial Cleansing Brush",
    worry: "makeup your hands can't fully remove",
    product: "facial cleansing brush",
    price: "$25",
    dailyEffort: "just glide it over your face for a minute",
    period: "1 week",
    resultGood: "your skin feels genuinely clean and looks brighter",
    altHigh: "$100 facial",
    altBadState: "still breaking out weeks later",
    effortHigh: "double cleansing by hand for ten minutes every night",
    amazonName: "COSLUS Facial Cleansing Brush",
    amazonUrl: "https://www.amazon.com/COSLUS-Facial-Cleansing-Brush-Scrubber/dp/B0CSYW1GR9",
  },
  {
    name: "Cable Management Box",
    worry: "a tangle of cords behind your desk",
    product: "cable management box",
    price: "$20",
    dailyEffort: "just tuck the power strip inside once",
    period: "1 setup",
    resultGood: "your desk looks clean with zero visible cords",
    altHigh: "$500 built-in desk",
    altBadState: "still staring at a cable nest",
    effortHigh: "bundling cords with zip ties every few weeks",
    amazonName: "Baskiss Cable Management Box",
    amazonUrl: "https://www.amazon.com/Management-Baskiss-12x5x4-5-Organizer-Computer/dp/B07Q2SK4JQ",
  },
  {
    name: "Under-Desk Footrest",
    worry: "your legs going numb during long workdays",
    product: "under-desk footrest",
    price: "$30",
    dailyEffort: "just rest your feet on it",
    period: "1 day",
    resultGood: "your legs feel fine after eight hours",
    altHigh: "$600 standing desk",
    altBadState: "still shifting in your seat",
    effortHigh: "propping your feet on a stack of books",
    amazonName: "Everlasting Comfort Foot Rest for Under Desk",
    amazonUrl: "https://www.amazon.com/Foot-Rest-Under-Desk-Footstool/dp/B07PGLBCFG",
  },
  {
    name: "Electric Milk Frother",
    worry: "your homemade lattes tasting flat",
    product: "electric milk frother",
    price: "$25",
    dailyEffort: "just press the button and pour",
    period: "1 cup",
    resultGood: "you get cafe-style foam in under a minute",
    altHigh: "$6 coffee shop latte",
    altBadState: "still stirring in watery milk",
    effortHigh: "whisking milk by hand until your arm gets tired",
    amazonName: "4-in-1 Electric Milk Frother",
    amazonUrl: "https://www.amazon.com/Electric-Milk-Frother-Automatic-Cappuccinos/dp/B0B6BQPV5Y",
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

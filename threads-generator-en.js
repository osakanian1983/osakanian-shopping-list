const GENRES = [
  {
    name: "Portable Washing Machine",
    worry: "running a full load to wash a few items",
    product: "portable washing machine",
    price: "$65",
    dailyEffort: "just fill it with water and clothes",
    period: "1 load",
    resultGood: "your small loads get clean fast",
    altHigh: "$40 laundromat",
    altBadState: "still hauling clothes across town",
    effortHigh: "lugging a bag to the laundromat every week",
    amazonName: "SereneLife Portable Mini Washing Machine",
    amazonUrl: "https://www.amazon.com/SereneLife-Portable-Mini-Washing-Machine/dp/B0CBQD99DW",
  },
  {
    name: "Shoe Stretcher",
    worry: "shoes that pinch every time you wear them",
    product: "shoe stretcher",
    price: "$25",
    dailyEffort: "just insert it and crank the knob overnight",
    period: "1 night",
    resultGood: "your shoes finally fit right",
    altHigh: "$75 new shoes",
    altBadState: "still limping home in blisters",
    effortHigh: "stuffing wet newspaper in your shoes overnight",
    amazonName: "WEST LIGHT Cedar Shoe Stretcher",
    amazonUrl: "https://www.amazon.com/Wooden-Stretcher-Adjustable-Unisex-Stretches/dp/B07DFGJXWS",
  },
  {
    name: "Monitor Stand Riser",
    worry: "hunching over a screen that sits too low",
    product: "monitor stand riser",
    price: "$30",
    dailyEffort: "just set your monitor on top of it",
    period: "1 day",
    resultGood: "your screen sits at eye level",
    altHigh: "$400 ergonomic desk",
    altBadState: "still slouching by the afternoon",
    effortHigh: "stacking books under your monitor every morning",
    amazonName: "BONTEC Wooden Monitor Stand Riser",
    amazonUrl: "https://www.amazon.com/BONTEC-Organizer-Ergonomic-Cellphone-Management/dp/B0C4T34L9Y",
  },
  {
    name: "Collapsible Laundry Basket",
    worry: "a bulky hamper eating up closet space",
    product: "collapsible laundry basket",
    price: "$28",
    dailyEffort: "just pop it open and toss clothes in",
    period: "1 load",
    resultGood: "laundry stays contained and tidy",
    altHigh: "$150 hamper cabinet",
    altBadState: "still tripping over a bulky bin",
    effortHigh: "shoving an oversized hamper into the corner",
    amazonName: "SAMMART 42L Collapsible Laundry Basket",
    amazonUrl: "https://www.amazon.com/SAMMART-Collapsible-Plastic-Laundry-Basket/dp/B0882ZPRF7",
  },
  {
    name: "Heated Eye Mask",
    worry: "dry, tired eyes after a long day of screens",
    product: "heated eye mask",
    price: "$30",
    dailyEffort: "just strap it on and press the button",
    period: "10 minutes",
    resultGood: "your eyes feel relaxed and refreshed",
    altHigh: "$120 eye spa visit",
    altBadState: "still rubbing your eyes raw",
    effortHigh: "pressing a warm washcloth to your eyes every night",
    amazonName: "MyHalos Cordless Heated Eye Mask",
    amazonUrl: "https://www.amazon.com/MyHalos-Cordless-Heated-Mask-Eyes/dp/B0D323K8D6",
  },
  {
    name: "Fabric Shaver",
    worry: "a favorite sweater covered in fuzzy pills",
    product: "fabric shaver",
    price: "$10",
    dailyEffort: "just glide it over the fabric",
    period: "1 pass",
    resultGood: "your sweater looks new again",
    altHigh: "$60 sweater",
    altBadState: "still wearing something worn out",
    effortHigh: "picking off pills by hand one at a time",
    amazonName: "Yomeie Electric Fabric Shaver",
    amazonUrl: "https://www.amazon.com/Yomeie-Electric-Remover-Clothes-Furniture/dp/B0CH32JFCD",
  },
  {
    name: "Smart Plug",
    worry: "getting up at night to check an outlet",
    product: "smart plug",
    price: "$15",
    dailyEffort: "just plug it in and control it from your phone",
    period: "1 day",
    resultGood: "you switch outlets from anywhere",
    altHigh: "$300 smart home install",
    altBadState: "still walking back to check the outlet",
    effortHigh: "getting out of bed to unplug something yourself",
    amazonName: "TP-Link Tapo Smart Plug Mini (2-Pack)",
    amazonUrl: "https://www.amazon.com/TP-Link-Tapo-Required-P100-2-pack/dp/B081VR9HK4",
  },
  {
    name: "Foam Roller",
    worry: "sore muscles that never fully loosen up",
    product: "foam roller",
    price: "$35",
    dailyEffort: "just roll it over the tight spot",
    period: "5 minutes",
    resultGood: "your muscles loosen up fast",
    altHigh: "$75 massage session",
    altBadState: "still walking around stiff and sore",
    effortHigh: "booking a massage every time you're sore",
    amazonName: "TriggerPoint Grid 1.0 Foam Roller",
    amazonUrl: "https://www.amazon.com/TriggerPoint-Grid-Foam-Roller-Multi-Density/dp/B0FGQ17ZQH",
  },
  {
    name: "Egg Cooker",
    worry: "guessing when boiled eggs are done",
    product: "rapid egg cooker",
    price: "$20",
    dailyEffort: "just add water and press start",
    period: "1 batch",
    resultGood: "you get perfect eggs every time",
    altHigh: "$6 breakfast sandwich",
    altBadState: "still overcooking eggs on the stove",
    effortHigh: "standing over the stove timing eggs by hand",
    amazonName: "Amazon Basics Electric Egg Cooker",
    amazonUrl: "https://www.amazon.com/Amazon-Basics-Cooker-Capacity-Hard-Boiled/dp/B0DTYN64YD",
  },
  {
    name: "Shower Squeegee",
    worry: "foggy water spots on the glass shower door",
    product: "shower squeegee",
    price: "$12",
    dailyEffort: "just wipe it down after your shower",
    period: "30 seconds",
    resultGood: "your glass stays clear",
    altHigh: "$200 glass cleaning",
    altBadState: "still scrubbing water stains every weekend",
    effortHigh: "scrubbing crusted water spots with a hard brush",
    amazonName: "AmazerBath Shower Squeegee",
    amazonUrl: "https://www.amazon.com/AmazerBath-Squeegee-Bathroom-Adhesive-All-Purpose/dp/B08BS1F677",
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

const GENRES = [
  {
    name: "Vacuum Food Storage Container Set",
    worry: "produce going bad before you can use it",
    product: "vacuum storage container set",
    price: "$40",
    dailyEffort: "just pack it and pump the air out",
    period: "1 week",
    resultGood: "your food stays fresh way longer",
    altHigh: "$60 restock",
    altBadState: "still tossing spoiled produce every week",
    effortHigh: "wrapping everything in plastic bags and hoping",
    amazonName: "HOLDN' STORAGE Vacuum Food Storage Containers",
    amazonUrl: "https://www.amazon.com/HOLDN-STORAGE-Vacuum-Storage-Containers/dp/B0DJRVQSVK",
  },
  {
    name: "Baby Bath Seat",
    worry: "holding a slippery baby in the tub",
    product: "baby bath seat",
    price: "$30",
    dailyEffort: "just set it in the tub and sit baby down",
    period: "1 bath",
    resultGood: "you wash baby hands-free",
    altHigh: "$300 tub system",
    altBadState: "still gripping a slippery baby",
    effortHigh: "bracing baby with one arm the whole bath",
    amazonName: "Coldew Baby Bath Seat",
    amazonUrl: "https://www.amazon.com/Coldew-Non-Slip-Toddler-Sitting-Suction/dp/B0D9VMXND1",
  },
  {
    name: "Stroller Rain Cover",
    worry: "a stroller soaked through on a rainy walk",
    product: "stroller rain cover",
    price: "$25",
    dailyEffort: "just stretch it over the stroller",
    period: "1 walk",
    resultGood: "your baby and stroller stay dry",
    altHigh: "$200 stroller",
    altBadState: "still wiping down a soaked stroller",
    effortHigh: "toweling off the stroller after every walk",
    amazonName: "AMORBASE Universal Stroller Rain Cover",
    amazonUrl: "https://www.amazon.com/Universal-Stroller-Breathable-Weather-Protection/dp/B0DPBB4GQ8",
  },
  {
    name: "Electric Nail Clipper",
    worry: "flinching every time you clip your nails",
    product: "cordless nail clipper",
    price: "$28",
    dailyEffort: "just press it against the nail",
    period: "1 session",
    resultGood: "your nails come out even, zero flinching",
    altHigh: "$40 manicure",
    altBadState: "still wincing through every clip",
    effortHigh: "squinting at your nails with regular clippers",
    amazonName: "Bubbacare Electric Nail Clipper",
    amazonUrl: "https://www.amazon.com/Electric-Automatic-Rechargeable-Clippers-Manicure/dp/B0CR19LKY9",
  },
  {
    name: "Baby Nasal Aspirator",
    worry: "a stuffy-nosed baby who can't sleep",
    product: "baby nasal aspirator",
    price: "$35",
    dailyEffort: "just press it to the nose and switch it on",
    period: "1 use",
    resultGood: "baby breathes clear and sleeps again",
    altHigh: "$150 pediatrician",
    altBadState: "still up all night with a stuffy baby",
    effortHigh: "sucking out mucus with a bulb syringe yourself",
    amazonName: "GROWNSY Baby Nasal Aspirator",
    amazonUrl: "https://www.amazon.com/Baby-Nasal-Aspirator-Nose-Sucker/dp/B08CMWHD3B",
  },
  {
    name: "Wine Cooler Sleeve",
    worry: "warm wine because you forgot to chill it",
    product: "wine cooler sleeve",
    price: "$15",
    dailyEffort: "just freeze it and slide it over the bottle",
    period: "10 minutes",
    resultGood: "your wine is perfectly chilled fast",
    altHigh: "$150 wine fridge",
    altBadState: "still serving wine that's too warm",
    effortHigh: "dunking the bottle in ice water for an hour",
    amazonName: "NEWGO Wine Cooler Sleeve",
    amazonUrl: "https://www.amazon.com/NEWGO-Protector-Reusable-Chiller-Champagne/dp/B088R5JF4L",
  },
  {
    name: "Folding Table",
    worry: "no extra table when guests come over",
    product: "folding table",
    price: "$40",
    dailyEffort: "just unfold it and set it up",
    period: "1 day",
    resultGood: "you have extra table space in seconds",
    altHigh: "$300 dining table",
    altBadState: "still eating off your lap when guests visit",
    effortHigh: "dragging a heavy table across the room",
    amazonName: "RedSwing Small Folding Table",
    amazonUrl: "https://www.amazon.com/RedSwing-Adjustable-Lightweight-Portable-Aluminum/dp/B081W6GKDK",
  },
  {
    name: "Baby Scale",
    worry: "wondering if your baby is gaining enough weight",
    product: "baby scale",
    price: "$45",
    dailyEffort: "just lay baby down and press start",
    period: "1 check",
    resultGood: "you get an accurate weight at home",
    altHigh: "$150 checkup",
    altBadState: "still booking visits just to check weight",
    effortHigh: "driving to the clinic every time you worry",
    amazonName: "Greater Goods Digital Baby Scale",
    amazonUrl: "https://www.amazon.com/Greater-Goods-Readings-Feedings-Non-Connected/dp/B08NXYJWMB",
  },
  {
    name: "Waterproof Baby Bib",
    worry: "laundry piling up from every messy meal",
    product: "waterproof baby bib",
    price: "$15",
    dailyEffort: "just snap it on before mealtime",
    period: "1 meal",
    resultGood: "your laundry pile stops growing",
    altHigh: "$50 stain spray",
    altBadState: "still scrubbing food stains after every meal",
    effortHigh: "scrubbing stained outfits after every meal",
    amazonName: "KeaBabies Waterproof Baby Bibs",
    amazonUrl: "https://www.amazon.com/3-Pack-Waterproof-Baby-Bibs-Eating/dp/B0BHSR2WCY",
  },
  {
    name: "Collapsible Storage Bin",
    worry: "bulky bins taking over your closet",
    product: "collapsible storage bin",
    price: "$65",
    dailyEffort: "just fold it flat when you're done",
    period: "1 day",
    resultGood: "your closet gets space back instantly",
    altHigh: "$300 closet system",
    altBadState: "still tripping over bulky bins",
    effortHigh: "shoving oversized bins into the closet corner",
    amazonName: "CleverMade Collapsible Storage Bin (3-Pack)",
    amazonUrl: "https://www.amazon.com/CleverMade-Collapsible-Storage-Bin-Ocean/dp/B0CMJR328V",
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

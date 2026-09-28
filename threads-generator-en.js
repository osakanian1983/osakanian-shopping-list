const GENRES = [
  {
    name: "Laptop Cooling Pad",
    worry: "your laptop overheating and slowing down",
    product: "laptop cooling pad",
    price: "$25",
    dailyEffort: "just set your laptop on it",
    period: "1 session",
    resultGood: "your laptop stays cool and runs smoothly",
    altHigh: "$1,500 new laptop",
    altBadState: "still overheating and lagging",
    effortHigh: "propping your laptop on books for airflow",
    amazonName: "havit Laptop Cooling Pad",
    amazonUrl: "https://www.amazon.com/HV-F2056-15-6-17-Laptop-Cooler-Cooling/dp/B00NNMB3KS",
  },
  {
    name: "Pet Nail Grinder",
    worry: "your dog's nails clicking on the floor",
    product: "pet nail grinder",
    price: "$25",
    dailyEffort: "just hold it to each nail a few seconds",
    period: "1 session",
    resultGood: "the nails are smooth with zero sharp edges",
    altHigh: "$50 groomer visit",
    altBadState: "still hearing that click",
    effortHigh: "wrestling with clippers your dog hates",
    amazonName: "Casfuy Dog Nail Grinder",
    amazonUrl: "https://www.amazon.com/Casfuy-Dog-Nail-Grinder-Upgraded/dp/B07PFCLHKR",
  },
  {
    name: "Compression Packing Bags",
    worry: "sitting on your suitcase just to get it closed",
    product: "set of compression bags",
    price: "$15",
    dailyEffort: "just roll out the air and zip",
    period: "1 trip",
    resultGood: "your suitcase closes with room to spare",
    altHigh: "$200 suitcase",
    altBadState: "still sitting on it to zip shut",
    effortHigh: "repacking your bag three times",
    amazonName: "Hibag Compression Bags, 12-Pack",
    amazonUrl: "https://www.amazon.com/Hibag-Compression-12-Pack-Suitcase-12-Travel/dp/B07PLHBVZQ",
  },
  {
    name: "Silicone Baking Mat",
    worry: "cookies stuck to the pan no matter how much you grease it",
    product: "silicone baking mat",
    price: "$12",
    dailyEffort: "just lay it on the pan and bake",
    period: "1 bake",
    resultGood: "everything lifts off clean",
    altHigh: "$20 parchment",
    altBadState: "still scraping burnt bits",
    effortHigh: "greasing the pan again every batch",
    amazonName: "Amazon Basics Silicone Baking Mat, 2-Pack",
    amazonUrl: "https://www.amazon.com/Amazon-Basics-Silicone-Non-Stick-Rectangular/dp/B0725GYNG6",
  },
  {
    name: "Door Draft Stopper",
    worry: "cold air creeping in under your door",
    product: "door draft stopper",
    price: "$15",
    dailyEffort: "just set it against the door once",
    period: "1 day",
    resultGood: "the room stays warm with zero cold draft",
    altHigh: "$300 heating bill",
    altBadState: "still feeling that draft",
    effortHigh: "stuffing a towel under the door nightly",
    amazonName: "MAXTID Large Door Draft Stopper",
    amazonUrl: "https://www.amazon.com/MAXTID-Stopper-Blocker-Stoppers-Adjustable/dp/B0B3DQNCCV",
  },
  {
    name: "Reusable Coffee Filter",
    worry: "running out of paper filters mid-brew",
    product: "reusable coffee filter",
    price: "$10",
    dailyEffort: "just rinse and reuse it each morning",
    period: "1 pot",
    resultGood: "you never run out of filters again",
    altHigh: "$10 pack of filters",
    altBadState: "still making a store run",
    effortHigh: "cutting a paper towel into a filter shape",
    amazonName: "GoldTone Reusable Basket Coffee Filter",
    amazonUrl: "https://www.amazon.com/GoldTone-Reusable-Basket-Coffee-Filter/dp/B01MY0BDX8",
  },
  {
    name: "Handheld Garment Steamer",
    worry: "wrinkled clothes right before you need to leave",
    product: "handheld garment steamer",
    price: "$25",
    dailyEffort: "just glide it down the fabric",
    period: "1 outfit",
    resultGood: "the wrinkles fall out in a minute",
    altHigh: "$15 press",
    altBadState: "still wearing wrinkled clothes",
    effortHigh: "dragging out the ironing board each morning",
    amazonName: "Portable Handheld Clothes Steamer",
    amazonUrl: "https://www.amazon.com/Portable-Handheld-Wrinkles-Heat-Resistant-Convenient/dp/B0CKP26YP8",
  },
  {
    name: "Bath Pillow",
    worry: "your neck aching against the hard edge of the tub",
    product: "bath pillow",
    price: "$15",
    dailyEffort: "just stick it to the tub and lean back",
    period: "1 soak",
    resultGood: "you actually relax instead of adjusting every minute",
    altHigh: "$60 spa visit",
    altBadState: "still shifting around",
    effortHigh: "rolling up a towel that keeps sliding down",
    amazonName: "Everlasting Comfort Luxury Bath Pillow",
    amazonUrl: "https://www.amazon.com/Luxury-Bath-Pillow-Back-Soft-Cushion-Bathtub/dp/B08BHP37DW",
  },
  {
    name: "Under Sink Organizer",
    worry: "bottles toppling every time you open the cabinet",
    product: "sink cabinet organizer",
    price: "$25",
    dailyEffort: "just slide the rack out and back in",
    period: "1 day",
    resultGood: "you grab what you need, nothing spilling",
    altHigh: "$500 remodel",
    altBadState: "still digging through a pile",
    effortHigh: "reorganizing the cabinet by hand weekly",
    amazonName: "REALINN Under Sink Organizer",
    amazonUrl: "https://www.amazon.com/REALINN-Organizer-Cabinet-Storage-Bathroom/dp/B0B6TK767D",
  },
  {
    name: "Electric Nail File",
    worry: "uneven nails no matter how carefully you file",
    product: "handheld electric nail file",
    price: "$20",
    dailyEffort: "just glide it along the edge",
    period: "1 session",
    resultGood: "your nails come out smooth and even",
    altHigh: "$40 manicure",
    altBadState: "still filing lopsided edges",
    effortHigh: "filing each nail by hand for ten minutes",
    amazonName: "Alety Electric Nail Drill Kit",
    amazonUrl: "https://www.amazon.com/Alety-Electric-Portable-Professional-Manicure/dp/B0C2V6SMFY",
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

const GENRES = [
  {
    name: "Smart Lock",
    worry: "wondering if you locked the door",
    product: "smart lock",
    price: "$50",
    dailyEffort: "just install it over your deadbolt",
    period: "1 day",
    resultGood: "you check the lock from your phone",
    altHigh: "$300 door replacement",
    altBadState: "still driving back to check it",
    effortHigh: "turning the car around to check the lock",
    amazonName: "Philips Wi-Fi Smart Lock",
    amazonUrl: "https://www.amazon.com/Philips-Existing-Deadbolt-Auto-Lock-Multiple/dp/B0D2VP3TYX",
  },
  {
    name: "Electric Shoe Shine Kit",
    worry: "scuffed shoes you never have time to polish",
    product: "cordless shoe shine kit",
    price: "$25",
    dailyEffort: "just press it against your shoe",
    period: "1 session",
    resultGood: "your shoes shine in minutes",
    altHigh: "$15 shine stand",
    altBadState: "still walking around scuffed",
    effortHigh: "scrubbing with a rag for twenty minutes",
    amazonName: "Sansent Electric Shoe Shine Kit",
    amazonUrl: "https://www.amazon.com/Electric-Sansent-Polisher-Portable-Wireless/dp/B09VDCYVVZ",
  },
  {
    name: "Portable Formula Dispenser",
    worry: "measuring formula during a crying fit",
    product: "portable formula dispenser",
    price: "$12",
    dailyEffort: "just pre-fill the compartments at home",
    period: "1 feeding",
    resultGood: "you mix a bottle in seconds",
    altHigh: "$30 travel pack",
    altBadState: "still scooping with a crying baby",
    effortHigh: "digging through a diaper bag for the scoop",
    amazonName: "Termichy Baby Formula Dispenser",
    amazonUrl: "https://www.amazon.com/Termichy-Dispenser-Portable-Container-Activities/dp/B0832QTVTK",
  },
  {
    name: "Retractable Charging Cable",
    worry: "a tangled mess of cables in your bag",
    product: "retractable charging cable",
    price: "$15",
    dailyEffort: "just pull to the length you need",
    period: "1 use",
    resultGood: "you grab a cable, zero tangles",
    altHigh: "$20 organizer pouch",
    altBadState: "still untangling cords daily",
    effortHigh: "untangling cords by hand every time",
    amazonName: "Cable Matters Retractable USB-C Cable",
    amazonUrl: "https://www.amazon.com/Cable-Matters-201093-1mx2/dp/B08233HR4L",
  },
  {
    name: "Insulated Lunch Bag",
    worry: "lunch going warm before noon",
    product: "cooler lunch bag",
    price: "$20",
    dailyEffort: "just pack it with an ice pack",
    period: "half a day",
    resultGood: "your lunch stays cold until you eat it",
    altHigh: "$12 takeout lunch",
    altBadState: "still spending on takeout every day",
    effortHigh: "carrying extra ice packs separately",
    amazonName: "Lifewit Insulated Lunch Bag",
    amazonUrl: "https://www.amazon.com/Lifewit-12-Can-Insulated-Cooler-Cooling/dp/B0B56CHMSC",
  },
  {
    name: "Motion Sensor Entry Light",
    worry: "fumbling for your keys in the dark",
    product: "motion sensor entry light",
    price: "$18",
    dailyEffort: "just stick it up, it lights on its own",
    period: "1 night",
    resultGood: "the entryway lights up as you walk up",
    altHigh: "$200 electrician visit",
    altBadState: "still fumbling for keys",
    effortHigh: "holding your phone flashlight with your teeth",
    amazonName: "Searik Motion Sensor LED Light, 3-Pack",
    amazonUrl: "https://www.amazon.com/Searik-Under-Cabinet-Lighting-Anywhere-Bathroom/dp/B071VDVTBS",
  },
  {
    name: "Cordless Beard Trimmer",
    worry: "razor burn every time you shave",
    product: "cordless beard trimmer",
    price: "$30",
    dailyEffort: "just glide it over your jaw",
    period: "1 session",
    resultGood: "your beard looks sharp, zero irritation",
    altHigh: "$35 barber shave",
    altBadState: "still dealing with razor burn",
    effortHigh: "layering on aftershave to calm the burn",
    amazonName: "Wahl Cordless Beard Trimmer",
    amazonUrl: "https://www.amazon.com/Beard-Trimmer-Bonus-Personal-5537-1801/dp/B0015KHMRS",
  },
  {
    name: "Stroller Footmuff",
    worry: "cold little feet on winter walks",
    product: "stroller footmuff",
    price: "$35",
    dailyEffort: "just zip your baby in",
    period: "1 walk",
    resultGood: "your baby stays warm, head to toe",
    altHigh: "$60 heated blanket",
    altBadState: "still layering blankets that slip",
    effortHigh: "tucking loose blankets back in every block",
    amazonName: "AGACAS Stroller Footmuff",
    amazonUrl: "https://www.amazon.com/AGACAS-Stroller-Footmuff-Universal-Repellent/dp/B0BPT7F94H",
  },
  {
    name: "Reusable Produce Bags",
    worry: "a pile of plastic bags from every trip",
    product: "set of reusable produce bags",
    price: "$12",
    dailyEffort: "just toss your produce in",
    period: "1 trip",
    resultGood: "you skip plastic bags completely",
    altHigh: "$5 roll of bags",
    altBadState: "still grabbing bags at checkout",
    effortHigh: "stuffing loose produce straight into the cart",
    amazonName: "Earthwise Reusable Mesh Produce Bags",
    amazonUrl: "https://www.amazon.com/Earthwise-Reusable-Mesh-Produce-Bags/dp/B005E2QRPG",
  },
  {
    name: "Plant Watering Spike",
    worry: "coming home to wilted plants",
    product: "plant watering spike",
    price: "$15",
    dailyEffort: "just fill it with water and insert it",
    period: "1 week",
    resultGood: "your plants stay watered while gone",
    altHigh: "$40 plant sitter",
    altBadState: "still coming home to wilted leaves",
    effortHigh: "asking a neighbor to water plants daily",
    amazonName: "Modern Innovations Self Watering Spikes",
    amazonUrl: "https://www.amazon.com/Modern-Innovations-Terracotta-Watering-Vacation/dp/B01K0K2ZB6",
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

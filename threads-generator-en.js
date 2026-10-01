const GENRES = [
  {
    name: "Portable Induction Cooktop",
    worry: "only having one burner in a tiny kitchen",
    product: "portable induction cooktop",
    price: "$40",
    dailyEffort: "just plug it in next to your stove",
    period: "1 meal",
    resultGood: "you cook two things at once",
    altHigh: "$3,000 remodel",
    altBadState: "still waiting on the burner",
    effortHigh: "cooking everything in shifts on one burner",
    amazonName: "Amazon Basics Portable Induction Cooktop",
    amazonUrl: "https://www.amazon.com/AmazonBasics-1800W-Portable-Induction-Cooktop/dp/B07S2628R9",
  },
  {
    name: "Makeup Sponge Cleaner",
    worry: "a makeup sponge that's always stained and grimy",
    product: "makeup sponge cleaner",
    price: "$15",
    dailyEffort: "just drop the sponge in and spin",
    period: "1 wash",
    resultGood: "the sponge comes out clean fast",
    altHigh: "$10 sponge pack",
    altBadState: "still tossing stained sponges",
    effortHigh: "scrubbing the sponge by hand in the sink",
    amazonName: "AUEAR Makeup Brush and Sponge Cleaner",
    amazonUrl: "https://www.amazon.com/AUEAR-Washing-Machine-Automatic-Claening/dp/B0829CLXZ6",
  },
  {
    name: "Facial Steamer",
    worry: "clogged pores that won't budge with regular washing",
    product: "facial steamer",
    price: "$35",
    dailyEffort: "just hold your face over the mist",
    period: "1 session",
    resultGood: "your pores open up and release buildup",
    altHigh: "$70 facial",
    altBadState: "still battling clogged pores after",
    effortHigh: "holding a hot towel over your face for ages",
    amazonName: "KINLITO Facial Steamer",
    amazonUrl: "https://www.amazon.com/KINLITO-Rotatable-Professional-Humidifier-Atomizer/dp/B09TD1DQY1",
  },
  {
    name: "Bike Safety Light",
    worry: "feeling invisible to cars on night rides",
    product: "bike safety light",
    price: "$15",
    dailyEffort: "just clip it on and go",
    period: "1 ride",
    resultGood: "drivers actually see you coming",
    altHigh: "$60 reflective jacket",
    altBadState: "still feeling invisible in traffic",
    effortHigh: "sticking to only well-lit streets at night",
    amazonName: "Ascher USB Rechargeable Bike Tail Light",
    amazonUrl: "https://www.amazon.com/Ascher-Rechargeable-Flashlight-Resistant-Included/dp/B07FDVSVDX",
  },
  {
    name: "Pet Steps",
    worry: "watching your dog strain to jump onto the bed",
    product: "set of pet steps",
    price: "$40",
    dailyEffort: "just set them by the bed once",
    period: "1 day",
    resultGood: "your dog climbs up with zero strain",
    altHigh: "$200 vet visit",
    altBadState: "still lifting your dog up every night",
    effortHigh: "lifting your dog onto the bed every time",
    amazonName: "PetSafe CozyUp Folding Pet Steps",
    amazonUrl: "https://www.amazon.com/PetSafe-Folding-Pet-Steps-Grey/dp/B084SXF9Y8",
  },
  {
    name: "Reusable Silicone Food Storage Bags",
    worry: "a drawer full of crumpled plastic bags",
    product: "set of silicone food bags",
    price: "$20",
    dailyEffort: "just rinse and reuse after each meal",
    period: "1 week",
    resultGood: "you stop buying plastic bags",
    altHigh: "$15 box of freezer bags",
    altBadState: "still restocking plastic",
    effortHigh: "washing flimsy bags that tear anyway",
    amazonName: "EcoLifeMate Reusable Silicone Food Bags",
    amazonUrl: "https://www.amazon.com/Reusable-Silicone-Food-Storage-Bags/dp/B078VY9QDC",
  },
  {
    name: "Foldable Yoga Mat",
    worry: "a yoga mat too bulky to pack for a trip",
    product: "foldable yoga mat",
    price: "$25",
    dailyEffort: "just unfold it and stretch",
    period: "1 session",
    resultGood: "you practice anywhere, no bulk",
    altHigh: "$60 studio class",
    altBadState: "still skipping practice on trips",
    effortHigh: "hauling a heavy mat through airport security",
    amazonName: "Navaris Foldable Yoga Mat",
    amazonUrl: "https://www.amazon.com/Navaris-Foldable-Yoga-Mat-Travel/dp/B0897MZVV4",
  },
  {
    name: "Baby Monitor",
    worry: "checking on the nursery every few minutes",
    product: "baby monitor",
    price: "$45",
    dailyEffort: "just glance at the screen",
    period: "1 night",
    resultGood: "you see and hear everything from any room",
    altHigh: "$20 babysitting hour",
    altBadState: "still checking in hourly",
    effortHigh: "walking down the hall to peek in constantly",
    amazonName: "HelloBaby Baby Monitor with Camera",
    amazonUrl: "https://www.amazon.com/Monitor-Remote-Pan-Tilt-Zoom-Camera-Infrared/dp/B07N428WP1",
  },
  {
    name: "Pet Grooming Glove",
    worry: "pet hair covering every piece of furniture",
    product: "pet grooming glove",
    price: "$10",
    dailyEffort: "just pet your dog like normal",
    period: "1 session",
    resultGood: "loose fur comes right off",
    altHigh: "$40 grooming visit",
    altBadState: "still vacuuming fur daily",
    effortHigh: "brushing with a comb your dog hates",
    amazonName: "Mr. Peanut's Pet Grooming Glove",
    amazonUrl: "https://www.amazon.com/Mr-Peanuts-Pet-Grooming-Glove-Deshedding/dp/B01A5JKXIO",
  },
  {
    name: "Shoe Deodorizer",
    worry: "shoes that smell up the whole closet",
    product: "shoe deodorizer",
    price: "$15",
    dailyEffort: "just drop one in each shoe overnight",
    period: "1 night",
    resultGood: "your shoes smell fresh by morning",
    altHigh: "$30 shoe bag",
    altBadState: "still airing shoes on the balcony",
    effortHigh: "spraying febreze into your shoes daily",
    amazonName: "NonScents Shoe Deodorizer, 4-Pack",
    amazonUrl: "https://www.amazon.com/NonScents-Shoe-Deodorizer-Eliminator-Freshener/dp/B07NYTTV4C",
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

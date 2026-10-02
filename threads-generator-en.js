const GENRES = [
  {
    name: "Aroma Diffuser",
    worry: "a room that feels dry with no scent",
    product: "scent diffuser",
    price: "$25",
    dailyEffort: "just add water and a few oil drops",
    period: "1 evening",
    resultGood: "the room feels fresh and smells great",
    altHigh: "$40 scented candle",
    altBadState: "still lighting candles that barely last",
    effortHigh: "burning through candles every week",
    amazonName: "InnoGear Essential Oil Diffuser",
    amazonUrl: "https://www.amazon.com/InnoGear-Aromatherapy-Essential-Ultrasonic-Humidifier/dp/B00V9JP8EE",
  },
  {
    name: "Baby Gate",
    worry: "a crawling baby getting close to the stairs",
    product: "baby gate",
    price: "$35",
    dailyEffort: "just latch it shut behind you",
    period: "1 day",
    resultGood: "you relax knowing the stairs are blocked",
    altHigh: "$3,000 stair remodel",
    altBadState: "still hovering by the stairs",
    effortHigh: "watching the baby every second near the stairs",
    amazonName: "Cumbor Baby Gate for Stairs and Doorways",
    amazonUrl: "https://www.amazon.com/Cumbor-29-7-40-6-Essential-Winner-Dog-Auto-Close/dp/B08CK8WPP4",
  },
  {
    name: "Cat Scratching Post",
    worry: "a couch getting shredded by your cat",
    product: "cat scratching post",
    price: "$30",
    dailyEffort: "just set it where your cat scratches",
    period: "1 week",
    resultGood: "your cat scratches the post instead",
    altHigh: "$600 new couch",
    altBadState: "still watching the couch get shredded",
    effortHigh: "yelling 'no' every time your cat scratches",
    amazonName: "Amazon Basics Cat Scratching Post",
    amazonUrl: "https://www.amazon.com/AmazonBasics-Premium-Cat-Scratching-Post/dp/B07G3SLKQ8",
  },
  {
    name: "Cuticle Oil Pen",
    worry: "dry, cracked cuticles that catch on everything",
    product: "cuticle oil pen",
    price: "$10",
    dailyEffort: "just twist and brush it on",
    period: "1 week",
    resultGood: "your cuticles stay soft all day",
    altHigh: "$40 manicure",
    altBadState: "still picking at dry, cracked skin",
    effortHigh: "slathering on hand cream every hour",
    amazonName: "Bliss Kiss Cuticle Oil Pen",
    amazonUrl: "https://www.amazon.com/Bliss-Kiss-Simply-Pure-Cuticle/dp/B00DYMYRX2",
  },
  {
    name: "Cooling Gel Mattress Pad",
    worry: "waking up sweaty every night",
    product: "cooling gel mattress pad",
    price: "$40",
    dailyEffort: "just lay it over your mattress",
    period: "1 night",
    resultGood: "you stay cool and sleep through the night",
    altHigh: "$2,000 mattress",
    altBadState: "still waking up drenched",
    effortHigh: "flipping your pillow every hour for a cool side",
    amazonName: "Amazon Basics Cooling Gel Mattress Topper",
    amazonUrl: "https://www.amazon.com/AmazonBasics-Cooling-Gel-Infused-CertiPUR-US-Certified/dp/B07SMSYPFV",
  },
  {
    name: "Hands-Free Umbrella Holder",
    worry: "pushing a stroller with no hand for an umbrella",
    product: "stroller umbrella mount",
    price: "$15",
    dailyEffort: "just clamp it on the bar",
    period: "1 walk",
    resultGood: "you push with both hands, staying dry",
    altHigh: "$60 rain cover",
    altBadState: "still getting soaked",
    effortHigh: "juggling the umbrella and the stroller handle",
    amazonName: "JIUKONG Hands-Free Umbrella Holder",
    amazonUrl: "https://www.amazon.com/JIUKONG-Universal-Umbrella-Stroller-Hands-Free/dp/B0GZ6FW9ZJ",
  },
  {
    name: "Gel Nail Stickers",
    worry: "chipped polish days after a manicure",
    product: "set of gel nail stickers",
    price: "$12",
    dailyEffort: "just press one onto each nail",
    period: "1 manicure",
    resultGood: "your manicure stays glossy for weeks",
    altHigh: "$50 gel manicure",
    altBadState: "still touching up chips",
    effortHigh: "repainting chipped nails every few days",
    amazonName: "DANNI and TONI Gel Nail Strips",
    amazonUrl: "https://www.amazon.com/DANNI-TONI-Transparent-Ultra-Glossy-Long-Lasting/dp/B09QS3HS5G",
  },
  {
    name: "Stroller Organizer",
    worry: "digging through a diaper bag at every stop",
    product: "stroller organizer",
    price: "$20",
    dailyEffort: "just reach into a side pocket",
    period: "1 outing",
    resultGood: "everything is right at your fingertips",
    altHigh: "$70 diaper bag",
    altBadState: "still digging through the bag",
    effortHigh: "unpacking the whole diaper bag at every stop",
    amazonName: "Momcozy Universal Stroller Organizer",
    amazonUrl: "https://www.amazon.com/Universal-Stroller-Organizer-Insulated-Momcozy/dp/B07JMZYJVW",
  },
  {
    name: "Shower Chair",
    worry: "feeling unsteady standing in the shower",
    product: "shower chair",
    price: "$35",
    dailyEffort: "just sit down and shower as usual",
    period: "1 shower",
    resultGood: "you shower steady, zero wobbling",
    altHigh: "$3,000 remodel",
    altBadState: "still gripping the wall",
    effortHigh: "holding the grab bar the entire shower",
    amazonName: "Carex Compact Shower Stool",
    amazonUrl: "https://www.amazon.com/Carex-Compact-Shower-Stool-Adjustable/dp/B004G7NPJQ",
  },
  {
    name: "Portable Air Mattress",
    worry: "not having a bed ready for sudden guests",
    product: "portable air mattress",
    price: "$45",
    dailyEffort: "just plug in the pump",
    period: "1 night",
    resultGood: "guests get a comfortable bed in minutes",
    altHigh: "$400 bed frame",
    altBadState: "still apologizing for the couch",
    effortHigh: "hauling out a spare mattress from storage",
    amazonName: "Luxchoice Portable Air Mattress",
    amazonUrl: "https://www.amazon.com/Luxchoice-Mattress-Rechargeable-Inflatable-Portable/dp/B0CSNBTGP3",
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

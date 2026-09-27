const GENRES = [
  {
    name: "Collapsible Water Bottle",
    worry: "lugging a bulky bottle around",
    product: "collapsible water bottle",
    price: "$15",
    dailyEffort: "just fold it flat when empty",
    period: "1 trip",
    resultGood: "you stay hydrated without the bulk",
    altHigh: "$5 bottled water",
    altBadState: "still buying bottled water out",
    effortHigh: "carrying a bottle you never fill up",
    amazonName: "HYDAWAY Collapsible Water Bottle",
    amazonUrl: "https://www.amazon.com/HYDAWAY-Collapsible-Water-Bottle-Backpacking/dp/B0CPKGPM32",
  },
  {
    name: "Keyboard Wrist Rest",
    worry: "your wrists aching from typing",
    product: "keyboard wrist rest",
    price: "$15",
    dailyEffort: "just rest your wrists on it",
    period: "1 day",
    resultGood: "your wrists stop aching",
    altHigh: "$300 ergonomic keyboard",
    altBadState: "still shaking out your wrists",
    effortHigh: "stretching your wrists every hour",
    amazonName: "KTRIO Keyboard Wrist Rest",
    amazonUrl: "https://www.amazon.com/KTRIO-Keyboard-Comfortable-Ergonomic-Computer/dp/B0872TX516",
  },
  {
    name: "Cat Litter Mat",
    worry: "litter scattered across the floor",
    product: "cat litter mat",
    price: "$20",
    dailyEffort: "just shake it out over the box",
    period: "1 week",
    resultGood: "your floor stays litter-free",
    altHigh: "$300 self-cleaning box",
    altBadState: "still sweeping up litter daily",
    effortHigh: "vacuuming around the box every day",
    amazonName: "Gorilla Grip Cat Litter Box Mat",
    amazonUrl: "https://www.amazon.com/Gorilla-Grip-Cat-Litter-Mat-/dp/B01MDNDDYS",
  },
  {
    name: "Portable Blender",
    worry: "skipping breakfast since a smoothie feels like work",
    product: "portable blender",
    price: "$25",
    dailyEffort: "just toss it in and press go",
    period: "1 morning",
    resultGood: "you get a fresh smoothie in a minute",
    altHigh: "$7 smoothie run",
    altBadState: "still skipping breakfast",
    effortHigh: "washing the big blender every time",
    amazonName: "Portable Personal Blender 25oz",
    amazonUrl: "https://www.amazon.com/Portable-Personal-Smoothies-Cordless-Rechargeable/dp/B0DK9145HN",
  },
  {
    name: "Tennis Elbow Brace",
    worry: "a nagging ache in your elbow from typing",
    product: "tennis elbow brace",
    price: "$15",
    dailyEffort: "just strap it on",
    period: "1 week",
    resultGood: "the ache fades and your grip feels normal",
    altHigh: "$150 PT visit",
    altBadState: "still wincing when you grip something",
    effortHigh: "icing your elbow every night",
    amazonName: "CAMBIVO Tennis Elbow Brace, 2-Pack",
    amazonUrl: "https://www.amazon.com/CAMBIVO-Tendonitis-Golfers-Adjustable-Compression/dp/B07VV3LF5V",
  },
  {
    name: "Luggage Scale",
    worry: "guessing if your suitcase is over the limit",
    product: "luggage scale",
    price: "$12",
    dailyEffort: "just hook it on and lift",
    period: "1 trip",
    resultGood: "you know your weight before you leave",
    altHigh: "$100 overweight fee",
    altBadState: "still repacking at the counter",
    effortHigh: "weighing yourself holding the bag",
    amazonName: "Amazon Basics Portable Digital Luggage Scale",
    amazonUrl: "https://www.amazon.com/AmazonBasics-Portable-Digital-Luggage-Weight/dp/B0186K8T9O",
  },
  {
    name: "Microfiber Cleaning Cloths",
    worry: "streaky counters no matter how much you wipe",
    product: "set of microfiber cloths",
    price: "$12",
    dailyEffort: "just wipe with water, no spray",
    period: "1 clean",
    resultGood: "surfaces come out streak-free",
    altHigh: "$30 cleaner spray",
    altBadState: "still seeing streaks",
    effortHigh: "going through paper towels every week",
    amazonName: "FIXSMITH Microfiber Cleaning Cloth, Pack of 8",
    amazonUrl: "https://www.amazon.com/FIXSMITH-Microfiber-Cleaning-Cloth-All-Purpose/dp/B083DN8KNB",
  },
  {
    name: "Nail Clipper Set",
    worry: "nail clippings flying everywhere",
    product: "nail clipper set with catcher",
    price: "$10",
    dailyEffort: "just clip, it catches the mess",
    period: "1 trim",
    resultGood: "cleanup takes zero extra time",
    altHigh: "$40 manicure",
    altBadState: "still sweeping clippings off the floor",
    effortHigh: "cleaning up scattered clippings every time",
    amazonName: "PAFASON Ultra Sharp Nail Clipper Set",
    amazonUrl: "https://www.amazon.com/Nail-Clipper-Set-Catcher-File/dp/B08CK8P23Q",
  },
  {
    name: "Wireless Charging Stand",
    worry: "fumbling to plug in your phone each night",
    product: "wireless charging stand",
    price: "$20",
    dailyEffort: "just set your phone on it",
    period: "1 night",
    resultGood: "your phone is fully charged with no cable",
    altHigh: "$1,000 new phone",
    altBadState: "still hunting for a cable",
    effortHigh: "untangling a cable every night",
    amazonName: "Amazon Basics Wireless Phone Charger Stand",
    amazonUrl: "https://www.amazon.com/AmazonBasics-Certified-Wireless-Charging-Stand/dp/B0874YN8B9",
  },
  {
    name: "Drawer Dividers",
    worry: "a junk drawer you can never find anything in",
    product: "set of drawer dividers",
    price: "$18",
    dailyEffort: "just drop things in their section",
    period: "1 day",
    resultGood: "you find what you need in seconds",
    altHigh: "$300 drawer system",
    altBadState: "still digging through a mess",
    effortHigh: "reorganizing the drawer by hand weekly",
    amazonName: "Lifewit Adjustable Drawer Dividers, 8-Pack",
    amazonUrl: "https://www.amazon.com/Lifewit-Adjustable-Organizers-Expandable-Organization/dp/B0C4L9TBG3",
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

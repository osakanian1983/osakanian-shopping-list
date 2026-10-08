const GENRES = [
  {
    name: "Mandoline Slicer",
    worry: "struggling to cut even vegetable slices by hand",
    product: "mandoline slicer",
    price: "$19",
    dailyEffort: "just slide the vegetable across the blade",
    period: "1 use",
    resultGood: "every slice comes out paper-thin and even",
    altHigh: "$40 knife set",
    altBadState: "still cutting uneven slices",
    effortHigh: "squinting over a cutting board with a dull knife",
    amazonName: "OXO Good Grips Handheld Mandoline Slicer",
    amazonUrl: "https://www.amazon.com/OXO-Adjustable-Handheld-Mandoline-Slicer/dp/B000YDO2LG",
  },
  {
    name: "Anti-Snoring Chin Strap",
    worry: "snoring loud enough to wake your partner",
    product: "snore-stopping chin strap",
    price: "$10",
    dailyEffort: "just strap it under your chin",
    period: "1 night",
    resultGood: "your mouth stays closed and the snoring stops",
    altHigh: "$150 clinic",
    altBadState: "still snoring just as loud",
    effortHigh: "sleeping in separate rooms to avoid the noise",
    amazonName: "Dizywiee Anti Snore Chin Strap (2-Pack)",
    amazonUrl: "https://www.amazon.com/Dizywiee-Solution-Effective-Adjustable-Breathable/dp/B0C81JZ42Y",
  },
  {
    name: "Massage Ball Set",
    worry: "a tight knot in your back that won't release",
    product: "massage ball set",
    price: "$12",
    dailyEffort: "just roll the ball against the knot",
    period: "5 minutes",
    resultGood: "the knot releases and your back feels loose",
    altHigh: "$90 massage",
    altBadState: "still tight the next morning",
    effortHigh: "pressing your own thumb into your back for relief",
    amazonName: "Acupoint Physical Massage Therapy Ball Set",
    amazonUrl: "https://www.amazon.com/Acupoint-Physical-Massage-Therapy-Ball/dp/B01IL7SKUU",
  },
  {
    name: "Dog Seatbelt Harness",
    worry: "your dog sliding around the back seat",
    product: "dog seatbelt harness",
    price: "$17",
    dailyEffort: "just clip it to the seatbelt buckle",
    period: "1 drive",
    resultGood: "your dog rides steady and secure",
    altHigh: "$300 car barrier",
    altBadState: "still sliding across the seat",
    effortHigh: "bracing your dog with one arm while driving",
    amazonName: "VavoPaw Dog Seat Belt Harness for Car",
    amazonUrl: "https://www.amazon.com/VavoPaw-Vehicle-Adjustable-Reflective-Carabiner/dp/B0CFV2M8M7",
  },
  {
    name: "Travel Power Adapter",
    worry: "a dead phone because your plug doesn't fit",
    product: "travel power adapter",
    price: "$22",
    dailyEffort: "just plug it in and go",
    period: "1 trip",
    resultGood: "every device charges no matter the outlet",
    altHigh: "$90 charger set",
    altBadState: "still stuck buying a new adapter",
    effortHigh: "hunting airport shops for the right adapter",
    amazonName: "TESSAN Universal Travel Adapter 28W",
    amazonUrl: "https://www.amazon.com/Universal-TESSAN-International-Worldwide-Converter/dp/B0B2PD7VW4",
  },
  {
    name: "Shower Drain Hair Catcher",
    worry: "a clogged shower drain full of hair",
    product: "drain hair catcher",
    price: "$9",
    dailyEffort: "just drop it over the drain",
    period: "1 week",
    resultGood: "the water drains fast with zero clogs",
    altHigh: "$150 plumber visit",
    altBadState: "still clogging up again within days",
    effortHigh: "digging clumps of hair out with your fingers",
    amazonName: "Ohtomber Stainless Steel Shower Drain Hair Catcher (4-Pack)",
    amazonUrl: "https://www.amazon.com/Ohtomber-Shower-Drain-Hair-Catcher/dp/B0FBF72GYW",
  },
  {
    name: "Split-End Hair Trimmer",
    worry: "split ends that keep creeping back",
    product: "split-end hair trimmer",
    price: "$79",
    dailyEffort: "just clip it along small sections",
    period: "1 session",
    resultGood: "split ends disappear without losing length",
    altHigh: "$90 salon trim",
    altBadState: "still seeing split ends grow back",
    effortHigh: "hunting for split ends with regular scissors",
    amazonName: "Split-Ender Mini 2 Cordless Hair Trimmer",
    amazonUrl: "https://www.amazon.com/Split-Ender-Mini-Cordless-Rechargeable/dp/B0CSTCLMNH",
  },
  {
    name: "Closet Shelf Dividers",
    worry: "sweaters collapsing into one messy pile",
    product: "closet shelf divider set",
    price: "$16",
    dailyEffort: "just clip it onto the shelf edge",
    period: "1 day",
    resultGood: "every stack stays upright",
    altHigh: "$300 remodel",
    altBadState: "still collapsing into a pile",
    effortHigh: "refolding the stack every time it topples",
    amazonName: "Sooyee Acrylic Shelf Dividers (4-Piece)",
    amazonUrl: "https://www.amazon.com/Sooyee-PCS-Beautiful-Organization-Separators/dp/B077RTC1JC",
  },
  {
    name: "Phone Ring Holder",
    worry: "dropping your phone while texting one-handed",
    product: "phone ring holder",
    price: "$5",
    dailyEffort: "just slip your finger through the ring",
    period: "1 use",
    resultGood: "you grip the phone securely with one hand",
    altHigh: "$90 screen repair",
    altBadState: "still dropping it face-down",
    effortHigh: "gripping the phone tight with both hands",
    amazonName: "TACOMEGE Clear Phone Ring Grip Holder",
    amazonUrl: "https://www.amazon.com/TACOMEGE-Transparent-Kickstand-Accessories-GD/dp/B0BZQ3BVJ3",
  },
  {
    name: "Vertical Ergonomic Mouse",
    worry: "wrist pain after a day at the computer",
    product: "vertical ergonomic mouse",
    price: "$90",
    dailyEffort: "just swap it in for your regular mouse",
    period: "1 week",
    resultGood: "your wrist stops aching by evening",
    altHigh: "$150 wrist brace",
    altBadState: "still aching by the end of day",
    effortHigh: "stretching your wrist every hour to cope",
    amazonName: "Logitech MX Vertical Wireless Mouse",
    amazonUrl: "https://www.amazon.com/Logitech-Vertical-Wireless-Mouse-Rechargeable/dp/B07FNJB8TT",
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

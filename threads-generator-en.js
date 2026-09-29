const GENRES = [
  {
    name: "Digital Body Scale",
    worry: "not knowing if your old scale is even accurate",
    product: "digital body scale",
    price: "$30",
    dailyEffort: "just step on it for a few seconds",
    period: "1 week",
    resultGood: "you see real trends, not guesses",
    altHigh: "$200 gym pass",
    altBadState: "still guessing if progress is real",
    effortHigh: "tracking everything by hand in a notebook",
    amazonName: "RENPHO Smart Body Scale",
    amazonUrl: "https://www.amazon.com/RENPHO-Bluetooth-Bathroom-Composition-Smartphone/dp/B01N1UX8RW",
  },
  {
    name: "Nose Hair Trimmer",
    worry: "noticing stray nose hairs before a meeting",
    product: "nose hair trimmer",
    price: "$15",
    dailyEffort: "just glide it in for a few seconds",
    period: "1 session",
    resultGood: "you look put together, zero stray hairs",
    altHigh: "$40 barber trim",
    altBadState: "still checking the mirror",
    effortHigh: "plucking each stray hair with tweezers",
    amazonName: "AMAGARM Nose and Ear Hair Trimmer",
    amazonUrl: "https://www.amazon.com/AMAGARM-Electric-Waterproof-Double-Edge-Stainless/dp/B07G39ZM3N",
  },
  {
    name: "Facial Ice Roller",
    worry: "a puffy morning face no matter how much sleep you get",
    product: "facial ice roller",
    price: "$15",
    dailyEffort: "just roll it over your face for a minute",
    period: "1 morning",
    resultGood: "the puffiness calms down fast",
    altHigh: "$60 facial",
    altBadState: "still looking tired in every photo",
    effortHigh: "pressing a cold spoon on your face every morning",
    amazonName: "ESARORA Ice Roller for Face",
    amazonUrl: "https://www.amazon.com/ESARORA-Roller-Puffiness-Migraine-Products/dp/B01E8IZ4ZA",
  },
  {
    name: "Touchless Soap Dispenser",
    worry: "everyone touching the same grimy soap pump",
    product: "touchless soap dispenser",
    price: "$20",
    dailyEffort: "just wave your hand underneath",
    period: "1 day",
    resultGood: "everyone washes up, no touching",
    altHigh: "$10 sanitizer bottle",
    altBadState: "still wiping the pump daily",
    effortHigh: "wiping the soap pump down after every use",
    amazonName: "Everlasting Comfort Automatic Soap Dispenser",
    amazonUrl: "https://www.amazon.com/Everlasting-Comfort-Automatic-Soap-Dispenser/dp/B0851V4Z6Z",
  },
  {
    name: "Diatomaceous Earth Bath Mat",
    worry: "stepping onto a soggy bath mat",
    product: "diatomaceous earth bath mat",
    price: "$25",
    dailyEffort: "just step on it after your shower",
    period: "1 day",
    resultGood: "your feet stay dry in seconds",
    altHigh: "$150 towel rail",
    altBadState: "still wringing out a damp mat",
    effortHigh: "washing and drying a soggy mat every other day",
    amazonName: "DZY Diatomaceous Earth Bath Mat",
    amazonUrl: "https://www.amazon.com/Diatomaceous-Earth-DZY-Nonslip-Absorbent/dp/B07R5F9PR5",
  },
  {
    name: "Cordless Hair Straightener",
    worry: "frizzy hair with no outlet in sight",
    product: "cordless hair straightener",
    price: "$35",
    dailyEffort: "just glide it through your hair",
    period: "1 session",
    resultGood: "your hair goes sleek anywhere",
    altHigh: "$50 blowout",
    altBadState: "still fighting frizz all day",
    effortHigh: "hunting for an outlet in a public bathroom",
    amazonName: "SUNMAY Cordless Hair Straightener",
    amazonUrl: "https://www.amazon.com/SUNMAY-Cordless-Straightener-Portable-Rechargeable/dp/B0DPZP2KMY",
  },
  {
    name: "Hands-Free Neck Fan",
    worry: "sweating through your shirt on the walk to work",
    product: "hands-free neck fan",
    price: "$30",
    dailyEffort: "just hang it around your neck and go",
    period: "1 day",
    resultGood: "you stay cool with both hands free",
    altHigh: "$20 taxi ride",
    altBadState: "still showing up drenched in sweat",
    effortHigh: "fanning yourself with a folder all day",
    amazonName: "Rohent Hands-Free Neck Fan",
    amazonUrl: "https://www.amazon.com/Rohent-Portable-Hands-Free-Neck-Fan/dp/B0D89ZFXMN",
  },
  {
    name: "Rechargeable Callus Remover",
    worry: "rough heels that snag every pair of socks",
    product: "rechargeable callus remover",
    price: "$25",
    dailyEffort: "just glide it over your heels",
    period: "1 session",
    resultGood: "your heels turn smooth in minutes",
    altHigh: "$50 pedicure",
    altBadState: "still snagging socks on rough skin",
    effortHigh: "scrubbing with a pumice stone for ages",
    amazonName: "Hoxida Electric Callus Remover",
    amazonUrl: "https://www.amazon.com/Electric-Rechargeable-Pedicure-Professional-Deadskin/dp/B096WVFGXZ",
  },
  {
    name: "Leave-In Hair Oil",
    worry: "dry, frizzy hair that won't hold a style",
    product: "leave-in hair oil",
    price: "$15",
    dailyEffort: "just work a few drops through damp hair",
    period: "1 session",
    resultGood: "your hair goes soft and shiny",
    altHigh: "$70 keratin treatment",
    altBadState: "still fighting frizz by noon",
    effortHigh: "layering three products just to tame it",
    amazonName: "Arvazallia Argan Oil Leave-In Treatment",
    amazonUrl: "https://www.amazon.com/Argan-Treatment-Arvazallia-Leave-Conditioner/dp/B00G6T4U2I",
  },
  {
    name: "Handheld Scalp Massager",
    worry: "a tight, tense scalp after a long day",
    product: "handheld scalp massager",
    price: "$20",
    dailyEffort: "just glide it over your scalp",
    period: "1 session",
    resultGood: "the tension melts away fast",
    altHigh: "$60 spa massage",
    altBadState: "still carrying tension in your neck",
    effortHigh: "digging your fingers into your scalp for ages",
    amazonName: "Amazon Basics Electric Scalp Massager",
    amazonUrl: "https://www.amazon.com/AmazonBasics-Electric-Scalp-Massager-White/dp/B0842DLRVM",
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

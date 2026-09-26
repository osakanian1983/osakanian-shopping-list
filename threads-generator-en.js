const GENRES = [
  {
    name: "Weighted Blanket",
    worry: "tossing and turning from restless anxiety",
    product: "weighted blanket",
    price: "$40",
    dailyEffort: "just drape it over yourself",
    period: "3 nights",
    resultGood: "you fall asleep faster and stay asleep",
    altHigh: "$300 sleep clinic",
    altBadState: "still staring at the ceiling",
    effortHigh: "counting sheep for an hour",
    amazonName: "YnM Weighted Blanket 15lbs",
    amazonUrl: "https://www.amazon.com/YnM-Weighted-Blanket-Cotton-Material/dp/B073429DV2",
  },
  {
    name: "Anti-Fatigue Standing Mat",
    worry: "your feet aching from standing at your desk",
    product: "cushioned standing mat",
    price: "$35",
    dailyEffort: "just stand on it",
    period: "1 day",
    resultGood: "your legs feel fine after hours on your feet",
    altHigh: "$1,200 desk",
    altBadState: "still aching by lunchtime",
    effortHigh: "shifting your weight to cope",
    amazonName: "FEATOL Anti Fatigue Mat",
    amazonUrl: "https://www.amazon.com/Cushioned-Kitchens-Standing-Phthalate-Relieves/dp/B07X2RP4DG",
  },
  {
    name: "Wool Dryer Balls",
    worry: "stiff, static-y laundry",
    product: "set of dryer balls",
    price: "$15",
    dailyEffort: "just toss them in",
    period: "1 load",
    resultGood: "your clothes come out soft with zero static",
    altHigh: "$20 dryer sheets",
    altBadState: "still pulling out staticky clothes",
    effortHigh: "shaking out every piece by hand",
    amazonName: "Smart Sheep Wool Dryer Balls, 6-Pack",
    amazonUrl: "https://www.amazon.com/wool-dryer-balls-fabric-softener-sheets/dp/B00GA9P5P0",
  },
  {
    name: "Bike Phone Mount",
    worry: "your phone slipping out of your pocket mid-ride",
    product: "bike phone mount",
    price: "$15",
    dailyEffort: "just clip your phone in",
    period: "1 ride",
    resultGood: "you glance at directions without touching your phone",
    altHigh: "$50 repair",
    altBadState: "still fumbling for your phone",
    effortHigh: "pulling over to check your phone",
    amazonName: "Lamicall Bike Phone Holder",
    amazonUrl: "https://www.amazon.com/Phone-Holder-Mount-Bike-Handlebar/dp/B085DMV7XD",
  },
  {
    name: "Desktop Humidifier",
    worry: "dry air leaving your throat and skin parched",
    product: "desktop humidifier",
    price: "$20",
    dailyEffort: "just fill the tank and switch it on",
    period: "1 day",
    resultGood: "your throat and skin stop feeling dry",
    altHigh: "$150 humidifier",
    altBadState: "still waking up with a dry throat",
    effortHigh: "refilling a bowl of water every hour",
    amazonName: "Fancii UltraMist Personal Desktop Humidifier",
    amazonUrl: "https://www.amazon.com/UltraMist-Personal-Desktop-Humidifier-Built/dp/B07VJ3K4XP",
  },
  {
    name: "Toilet Cleaning Brush",
    worry: "a grimy toilet brush on display",
    product: "toilet brush with caddy",
    price: "$15",
    dailyEffort: "just scrub and set it back",
    period: "1 clean",
    resultGood: "the bowl looks spotless",
    altHigh: "$60 cleaning visit",
    altBadState: "still staring at a grimy tool",
    effortHigh: "scrubbing with a rag you toss each time",
    amazonName: "Quickie Toilet Bowl Brush and Caddy",
    amazonUrl: "https://www.amazon.com/Quickie-Bowl-Brush-Caddy-Microban/dp/B00167JAE8",
  },
  {
    name: "Dog Car Seat Cover",
    worry: "muddy paw prints on your back seat",
    product: "dog car seat cover",
    price: "$35",
    dailyEffort: "just drape it over the seat",
    period: "1 ride",
    resultGood: "your seats stay clean every time",
    altHigh: "$200 detailing",
    altBadState: "still finding fur in the seats",
    effortHigh: "vacuuming the back seat every ride",
    amazonName: "Honest Dog Car Seat Cover",
    amazonUrl: "https://www.amazon.com/Honest-Covers-Window-Cover-Trucks/dp/B08398BV5S",
  },
  {
    name: "Wine Saver Vacuum Pump",
    worry: "an open bottle of wine going flat",
    product: "wine saver pump",
    price: "$12",
    dailyEffort: "just pump the stopper a few times",
    period: "1 bottle",
    resultGood: "your wine tastes just as good on night three",
    altHigh: "$40 bottle",
    altBadState: "still pouring out flat wine",
    effortHigh: "finishing the bottle in one sitting to avoid waste",
    amazonName: "Vacu Vin Original Wine Saver Pump",
    amazonUrl: "https://www.amazon.com/Original-Vacu-Vin-Vacuum-Stoppers/dp/B000GA3KCE",
  },
  {
    name: "Shiatsu Neck Massager",
    worry: "knots in your neck from sitting at a screen all day",
    product: "shiatsu neck massager",
    price: "$40",
    dailyEffort: "just strap it on",
    period: "1 session",
    resultGood: "the tension melts out of your shoulders",
    altHigh: "$90 massage",
    altBadState: "still rubbing your own neck",
    effortHigh: "digging your own thumbs into your shoulders",
    amazonName: "Nekteck Shiatsu Neck Massager with Heat",
    amazonUrl: "https://www.amazon.com/Nekteck-Back-Neck-Shoulder-Massager/dp/B01BZOKLOO",
  },
  {
    name: "Desk Organizer Tray",
    worry: "clutter taking over your desk",
    product: "desk organizer tray",
    price: "$15",
    dailyEffort: "just toss things in their spot",
    period: "1 day",
    resultGood: "your desk stays clear without even trying",
    altHigh: "$400 cabinetry",
    altBadState: "still digging through a pile",
    effortHigh: "doing a full desk cleanup every evening",
    amazonName: "Amazon Basics Plastic Desk Organizer",
    amazonUrl: "https://www.amazon.com/AmazonBasics-Plastic-Organizer-Accessory-Black/dp/B07RZ1GWC3",
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

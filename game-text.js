/* =====================================================================
   THE THRESHOLD GAME — ALL EDITABLE TEXT
   Good Growth Foundation
   =====================================================================
   1. Edit any text between the "double quotes".
   2. Keep the quotes, the commas at line ends, and the {TOKENS} —
      the game fills tokens with live numbers (e.g. {MONTHLY} → "£32").
   3. Apostrophes are fine inside double quotes.
   4. Strings marked "HTML allowed" can use <b>bold</b> and <em>italics</em>.
   5. Upload this file over the old one on GitHub. You do NOT need to
      touch index.html for wording changes.
   ===================================================================== */

window.GAME_TEXT = {

  /* ---------------- OPENING SCREEN ---------------- */
  hero: {
    tagline: "The Threshold Game",
    title: "Could <em>you</em> fix student loans?",          // HTML allowed
    standfirst: "You're the Chancellor for one Budget. Raise the repayment threshold to give graduates relief — then decide how long they repay for to balance the books. Too timid and nothing changes. Too generous and the bond market comes for you. Find the sweet spot.",
    startButton: "Play the Budget game",
    keyHint: "Tip: you can use the ← → arrow keys to move between pages."
  },

  /* ---------------- THE TWO SLIDERS ---------------- */
  controls: {
    thresholdLabel: "Repayment threshold",
    thresholdNote: "Graduates repay 9% of income above this line. Currently £29,385.",
    termLabel: "Repayment term",
    termNote: "Years before the loan is written off. Currently 30 — extending it claws money back later in graduates' careers."
  },

  /* ---------------- STEP LABELS ---------------- */
  steps: {
    budget: "Step 1 of 3 · The Budget",
    verdict: "Step 2 of 3 · The Verdict",
    fix: "Step 3 of 3 · The Fix"
  },

  /* ---------------- CHART 1 — ANNUAL REPAYMENTS ---------------- */
  chartA: {
    panelLabel: "Output 1 · Annual repayments",
    heading: "What each graduate pays under your Budget",
    lede: "Every bar is a slice of the graduate earnings distribution, lowest percentiles on the left, highest on the right. The bar shows the annual repayment at your threshold. The term doesn't change the annual bill — it changes how many years it lasts.",
    legendBar: "Annual repayment under your Budget",
    axisCaption: "Graduate earnings percentile bands (ONS ASHE 2025, graduate-adjusted)"
  },

  /* ---------------- CHART 2 — SAVINGS VS TODAY ---------------- */
  chartB: {
    panelLabel: "Output 2 · Annual savings vs today",
    heading: "Who's better off than under current rules",
    lede: "The same distribution, showing the change in each graduate's annual bill compared with today's rules (£29,385 threshold). Bars above the line are savings; bars below mean they pay more each year.",
    legendPos: "Saves money vs today",
    legendNeg: "Pays more vs today",
    captionBetter: "Raising the threshold trims every repayer's bill by the same flat amount, and anyone earning between the old line and yours stops repaying entirely. Remember: a longer term doesn't show here, but it does claw money back over a lifetime.",
    captionWorse: "You've pulled the threshold below today's £29,385, so every band repays more each year — including people who currently repay nothing at all.",
    captionMixed: "Your Budget cuts bills for some graduates and raises them for others — check who's above and who's below the line before you call it progress.",
    captionSame: "Annual repayments are identical to today's rules. Technically a Budget. Spiritually a press release. Try moving the sliders to see what changes."
  },

  /* ---------------- OUTPUT 3 — COST TO THE TREASURY ---------------- */
  treasury: {
    panelLabel: "Output 3 · The bill",
    heading: "Cost to the Treasury",
    subCost: "in lifetime repayments forgone from the 2022/23 graduate cohort alone",
    subGain: "in extra lifetime repayments squeezed out of the 2022/23 graduate cohort alone",
    subNeutral: "the Treasury's lifetime take from the 2022/23 cohort is broadly unchanged"
  },

  /* ------------------------------------------------------------------
     THE VERDICT STAMP — when each one fires:
       econCrashed    — costs £4bn or more
       marketsRattled — costs £2.5bn–£4bn
       obrLetter      — costs £1.4bn–£2.5bn
       unfunded       — costs £250m–£1.4bn (generous but unbalanced —
                        the term lever can fix it)
       sweetSpot      — within ±£250m AND threshold raised to £31k+
                        (the GREEN ending — relief delivered, books balanced)
       tinkering      — within ±£250m but only small moves
       nothingChanges — dials untouched
       nusWar         — Treasury GAINS £250m–£1bn
       gradsMarch     — gains £1bn–£2bn
       collapse       — gains £2bn or more
  ------------------------------------------------------------------ */
  verdict: {
    awaiting: "Awaiting Budget",
    econCrashed: {
      title: "Economy crashed",
      sub: "Gilt yields are vertical, the pound has opinions, and a junior official has been sent to find the IMF's phone number. No repayment term in existence recovers a hole this size."
    },
    marketsRattled: {
      title: "Markets rattled",
      sub: "Bond traders are using words that can't be printed in Hansard. Graduates love you; the people who lend the government money do not. This is beyond what the term lever can absorb."
    },
    obrLetter: {
      title: "OBR sends a stern letter",
      sub: "Generous — too generous. The fiscal watchdog's spreadsheet people have run every term extension up to 40 years and none of them stretches this far. Dial the threshold back."
    },
    unfunded: {
      title: "Generous — but who's paying?",
      sub: "Graduates feel real relief, but you've left a hole in the public finances and no plan to fill it. The good news: this one's recoverable. Check the cheat sheet below, go back, and pull the term lever."
    },
    sweetSpot: {
      title: "The sweet spot",
      sub: "Now this is Chancellor material. Graduates feel real relief every month, and the books balance through a quiet long-term adjustment most voters will never feel. The OBR nods. The focus groups purr. Somewhere, a special adviser weeps with joy."
    },
    tinkering: {
      title: "Tinkering at the edges",
      sub: "A change so small most graduates won't spot it in their payslip. The Treasury barely blinks, the headlines write themselves — 'Chancellor does almost nothing' — and the problem you set out to fix is still there."
    },
    nothingChanges: {
      title: "Nothing changes",
      sub: "You had one Budget and you left the dials where you found them. Nine million graduates keep paying exactly what they pay now. Bold strategy: let's see if the status quo fixes itself."
    },
    nusWar: {
      title: "NUS declares war",
      sub: "You've made student loans worse — extra years of repayments with nothing given back. There are petitions, there are placards, and someone has made a very unflattering meme of your fiscal stance."
    },
    gradsMarch: {
      title: "Graduates march on Westminster",
      sub: "You've turned the loan book into a profit centre on the backs of people who can't afford a house deposit. Whitehall is kettled. The youth vote has left the building, permanently."
    },
    collapse: {
      title: "Government collapses",
      sub: "Billions extracted from a single graduating generation. The backbenches are in open revolt, three ministers have resigned by lunchtime, and the economy you 'protected' no longer has anyone to run it. Bad ending — just a different one."
    }
  },

  /* ---------------- CHEAT SHEET (under the stamp) ----------------
     Tokens: {YEARS} {EXTENSION}. HTML allowed: <b>…</b>            */
  hints: {
    canBalance: "Cheat sheet: at this threshold, the books balance if you extend the term to <b>{YEARS} years</b>. Go back and pull the lever.",
    structural: "Cheat sheet: at this threshold, no term up to 40 years balances the books. This one's structural.",
    balanced: "You balanced it with a <b>{EXTENSION}-year</b> term extension — relief now, repayments later."
  },

  /* ---------------- SHARE BUTTON (verdict page) ----------------
     Tokens: {THRESHOLD} {TERM} {VERDICT}                          */
  share: {
    button: "Share my verdict",
    message: "I set the student loan threshold to {THRESHOLD} with a {TERM}-year term and got \u201c{VERDICT}\u201d. Can you find the sweet spot?"
  },

  /* ---------------- THE SACRIFICE (verdict page) ---------------- */
  sacrifice: {
    panelLabel: "The sacrifice",
    introCost: "On paper, your Budget means the Exchequer forgoing the equivalent of:",
    introGain: "Your Budget squeezes extra out of graduates — enough, in Exchequer terms, to fund:",
    introNeutral: "Roughly nothing — the lifetime cash take is broadly unchanged.",
    fallback: "Not even a pothole. Carry on.",
    items: [
      { cost: 70,        label: "potholes filled (at roughly £70 a pop)" },
      { cost: 480,       label: "children given free school meals for a year" },
      { cost: 40000,     label: "newly qualified nurses employed for a year" },
      { cost: 45000,     label: "teachers paid for a year" },
      { cost: 1200000,   label: "MRI scanners for the NHS" },
      { cost: 30000000,  label: "brand-new secondary schools" },
      { cost: 33000000,  label: "miles of new motorway" },
      { cost: 250000000, label: "mid-size hospital rebuilds" }
    ]
  },

  /* ---------------- FINAL PAGE — THE GGF PLAN ----------------
     Tokens: {MONTHLY} {MORTGAGE}                                 */
  proposal: {
    panelLabel: "The Good Growth fix",
    heading: "What would the real plan save you?",
    lede: "We've modelled a package that lands squarely in the sweet spot — real monthly relief for graduates at a cost the public finances can absorb. Enter your salary to see what it would put back in your pocket each year.",
    salaryLabel: "Your salary",
    salaryNote: "What you earn before tax.",
    savingHeading: "Your annual saving under the plan",
    monthlyPositive: "{MONTHLY} a month back in your pay",
    mortgageLine: "That's roughly {MORTGAGE} of extra mortgage borrowing capacity, the way lenders count it.",
    belowThreshold: "You earn below the repayment threshold, so you don't repay today — and you still won't. Your saving kicks in as your salary grows.",
    noChange: "No change at this salary."
  },

  /* ---------------- WHAT YOU COULD BUY (final page) ---------------- */
  spoils: {
    panelLabel: "What you could buy",
    introPositive: "Your annual saving, converted into the things that actually matter:",
    fallbackPositive: "Not enough for a sausage roll yet — but it's coming.",
    items: [
      { cost: 1.30,  label: "Greggs sausage rolls" },
      { cost: 3.80,  label: "flat whites" },
      { cost: 5.90,  label: "pints" },
      { cost: 12.99, label: "months of Netflix" },
      { cost: 65,    label: "big weekly food shops" },
      { cost: 120,   label: "return flights to Málaga" },
      { cost: 390,   label: "Glastonbury tickets (resale not included)" }
    ]
  },

  /* ---------------- METHODOLOGY (final page, collapsed) ---------------- */
  smallPrint: {
    methodSummary: "Methodology & health warnings",
    methodP1: "This is an illustrative, directional model — a game, not an official fiscal costing. The graduate earnings distribution is split into twelve bands from ONS ASHE 2025 full-time earnings percentiles, scaled by a 1.125 graduate premium. Repayments are 9% of income above the chosen threshold, per year, for the chosen term, weighted across bands and multiplied by the 2022/23 cohort of 108,340 borrowers (DfE/LEO). The baseline calibrates within 2.8% of the IFS benchmark for average lifetime repayments.",
    methodP2: "Big caveats: earnings are held flat (no career progression), loan balances, interest and write-offs aren't simulated, behaviour doesn't change, and figures are undiscounted cash for a single cohort — so cash neutrality is not fiscal neutrality, since repayments pushed into later years are worth less in today's money. Cost equivalents are rough public-domain ballparks for scale. Mortgage capacity is an indicative multiple of the annual saving. Plan 2 rules as at April 2026: threshold £29,385, rate 9%, 30-year write-off."
  },

  /* ---------------- EMAIL SIGN-UP CARD (every page) ----------------
     Token: {EMAIL}                                                   */
  email: {
    heading: "Want the full picture?",
    body: "We're publishing a report on how to fix student loans without crashing the economy. Pop in your details and we'll send it to you when it lands.",
    bodyPersonal: "Under the plan you'd keep {ANNUAL} a year — the full workings are in the report.",
    nameLabel: "Name",
    namePlaceholder: "Your name",
    emailLabel: "Email",
    emailPlaceholder: "you@example.com",
    jobLabel: "Job title",
    jobPlaceholder: "e.g. Policy researcher",
    orgLabel: "Organisation",
    orgPlaceholder: "e.g. Good Growth Foundation",
    optionalTag: "(optional)",
    button: "Send me the report",
    smallPrint: "We'll use your details to send the report and occasional updates on this campaign, in line with our privacy policy. Unsubscribe any time.",
    sending: "Sending…",
    invalidEmail: "Please enter a valid email address.",
    invalidName: "Please enter your name.",
    failed: "That didn't send — please try again in a moment.",
    successHeading: "You're on the list, {EMAIL}",
    successBody: "Our student loans report will land in your inbox as soon as it's published."
  },

  /* ---------------- NAVIGATION BUTTONS ---------------- */
  nav: {
    back: "Back",
    toVerdict: "Face the verdict",
    backToBudget: "Back to the Budget",
    toProposal: "What would the fix save you?",
    playAgain: "Play it again"
  }
};

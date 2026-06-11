/* =====================================================================
   THE THRESHOLD GAME — ALL EDITABLE TEXT
   Good Growth Foundation
   =====================================================================

   HOW TO EDIT
   -----------
   1. Change any text between the "double quotes".
   2. Don't delete the quotes, the commas at the ends of lines,
      or the {TOKENS} in curly brackets — the game fills those in
      with live numbers (e.g. {MONTHLY} becomes "£32").
   3. Apostrophes are fine inside the double quotes.
   4. Strings marked "HTML allowed" can use <b>bold</b> and <em>italics</em>.
   5. When done: upload this file to GitHub over the old one
      (Add file → Upload files → Commit changes). You do NOT need
      to touch index.html for wording changes.

   If the game goes blank after an edit, a quote or comma has been
   deleted somewhere — use the file's History tab on GitHub to
   restore the last working version.
   ===================================================================== */

window.GAME_TEXT = {

  /* ------------------------------------------------------------------
     OPENING SCREEN
  ------------------------------------------------------------------ */
  hero: {
    tagline: "The Threshold Game",
    title: "Could <em>you</em> fix student loans?",          // HTML allowed
    standfirst: "You're the Chancellor for one Budget. Move the repayment threshold and the repayment rate, and watch what happens to nine million Plan 2 graduates — and to the Treasury. Too timid and nothing changes. Too generous and the bond market comes for you. Find the sweet spot.",
    startButton: "Play the Budget game"
  },

  /* ------------------------------------------------------------------
     THE TWO SLIDERS
  ------------------------------------------------------------------ */
  controls: {
    thresholdLabel: "Repayment threshold",
    thresholdNote: "Graduates repay on income above this line. Currently £29,385.",
    rateLabel: "Repayment rate",
    rateNote: "The slice of income above the threshold that goes to repayments. Currently 9%."
  },

  /* ------------------------------------------------------------------
     CHART 1 — ANNUAL REPAYMENTS PER PERCENTILE
  ------------------------------------------------------------------ */
  chartA: {
    panelLabel: "Output 1 · Annual repayments",
    heading: "What each graduate pays under your Budget",
    lede: "Every bar is a slice of the graduate earnings distribution, from the lowest-earning percentiles on the left to the highest on the right. The bar shows the annual repayment for a graduate at that point under your threshold and rate.",
    legendBar: "Annual repayment under your Budget",
    axisCaption: "Graduate earnings percentile bands (ONS ASHE 2025, graduate-adjusted)"
  },

  /* ------------------------------------------------------------------
     CHART 2 — ANNUAL SAVINGS VS TODAY
     One of three captions shows depending on your settings.
  ------------------------------------------------------------------ */
  chartB: {
    panelLabel: "Output 2 · Annual savings vs today",
    heading: "Who's better off than under current rules",
    lede: "The same earnings distribution, now showing the change in each graduate's annual bill compared with today's rules (£29,385 threshold, 9% rate). Bars above the line are savings. Bars below the line mean they pay more.",
    legendPos: "Saves money vs today",
    legendNeg: "Pays more vs today",
    captionBetter: "Your Budget cuts annual repayments across the distribution. Lower and middle earners feel a threshold rise most; a rate cut hands the biggest cash gains to the highest earners.",
    captionWorse: "Your Budget increases annual repayments compared with today — graduates at every affected percentile are worse off each year.",
    captionMixed: "Your Budget cuts bills for some graduates and raises them for others — check who's above and who's below the line before you call it progress.",
    captionSame: "Repayments are identical to today's rules. Technically a Budget. Spiritually a press release."
  },

  /* ------------------------------------------------------------------
     OUTPUT 3 — COST TO THE TREASURY
     Token: {AMOUNT}
  ------------------------------------------------------------------ */
  treasury: {
    panelLabel: "Output 3 · The bill",
    heading: "Cost to the Treasury",
    subCost: "in lifetime repayments forgone from the 2022/23 graduate cohort alone, before any offsetting measures",
    subGain: "in extra lifetime repayments squeezed out of the 2022/23 graduate cohort alone",
    subNeutral: "the Treasury's lifetime take from the 2022/23 cohort is broadly unchanged"
  },

  /* ------------------------------------------------------------------
     THE VERDICT STAMP
     Based on the cost to (or windfall for) the Treasury at current
     30-year rules. The sweet spot is the range the model shows can be
     recovered through quiet long-term tweaks — your proposal sits at
     its midpoint.
       econCrashed     — costs £4bn or more
       marketsRattled  — costs £2.5bn–£4bn
       obrLetter       — costs £1.4bn–£2.5bn (too big to claw back)
       sweetSpot       — costs £600m–£1.4bn  (the GREEN ending)
       tinkering       — costs £100m–£600m   (too timid)
       nothingChanges  — within £100m of today's rules
       nusWar          — Treasury GAINS £100m–£1bn
       gradsMarch      — gains £1bn–£2bn
       collapse        — gains £2bn or more
  ------------------------------------------------------------------ */
  verdict: {
    awaiting: "Awaiting Budget",
    econCrashed: {
      title: "Economy crashed",
      sub: "Gilt yields are vertical, the pound has opinions, and a junior official has been sent to find the IMF's phone number. No amount of quiet tweaking recovers a hole this size."
    },
    marketsRattled: {
      title: "Markets rattled",
      sub: "Bond traders are using words that can't be printed in Hansard. Graduates love you; the people who lend the government money do not. This is beyond what the system can absorb."
    },
    obrLetter: {
      title: "OBR sends a stern letter",
      sub: "Generous — too generous. The fiscal watchdog's spreadsheet people have run every recovery option and none of them stretches this far. Dial it back towards the sweet spot."
    },
    sweetSpot: {
      title: "The sweet spot",
      sub: "Now this is Chancellor material. Graduates feel real relief every month, and the cost sits squarely in the range the Treasury can recover through quiet long-term adjustments voters never feel. The OBR nods. The focus groups purr. Somewhere, a special adviser weeps with joy."
    },
    tinkering: {
      title: "Tinkering at the edges",
      sub: "A saving so small most graduates won't spot it in their payslip. The Treasury barely blinks, the headlines write themselves — 'Chancellor does almost nothing' — and the problem you set out to fix is still there."
    },
    nothingChanges: {
      title: "Nothing changes",
      sub: "You had one Budget and you left the dials where you found them. Nine million graduates keep paying exactly what they pay now. Bold strategy: let's see if the status quo fixes itself."
    },
    nusWar: {
      title: "NUS declares war",
      sub: "You've made student loans worse. Hundreds of millions extra squeezed from graduates each cohort — there are petitions, there are placards, and someone has made a very unflattering meme of your fiscal stance."
    },
    gradsMarch: {
      title: "Graduates march on Westminster",
      sub: "You've turned the loan book into a profit centre on the backs of people who can't afford a house deposit. Whitehall is kettled. The youth vote has left the building, permanently."
    },
    collapse: {
      title: "Government collapses",
      sub: "Billions extracted from a single graduating year. The backbenches are in open revolt, three ministers have resigned by lunchtime, and the economy you 'protected' no longer has anyone to run it. Bad ending — just a different one."
    }
  },

  /* ------------------------------------------------------------------
     WHAT THE TREASURY GIVES UP (verdict page)
     Edit costs (numbers, no quotes) and labels freely.
     The game picks the three best-fitting items.
  ------------------------------------------------------------------ */
  sacrifice: {
    panelLabel: "The sacrifice",
    introCost: "On paper, your Budget means the Exchequer forgoing the equivalent of:",
    introGain: "Your Budget squeezes extra out of graduates — enough, in Exchequer terms, to fund:",
    introNeutral: "Roughly nothing — the lifetime cash take is broadly unchanged. The status quo claims another victim: ambition.",
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

  /* ------------------------------------------------------------------
     FINAL PAGE — YOUR SAVING UNDER THE GGF PLAN
     Tokens: {MONTHLY}
  ------------------------------------------------------------------ */
  proposal: {
    panelLabel: "The Good Growth fix",
    heading: "What would the real plan save you?",
    lede: "We've modelled a package that lands squarely in the sweet spot — real monthly relief for graduates at a cost the public finances can absorb. Enter your salary to see what it would put back in your pocket each year.",
    salaryLabel: "Your salary",
    salaryNote: "What you earn before tax.",
    savingHeading: "Your annual saving under the plan",
    monthlyPositive: "{MONTHLY} a month back in your pay",
    belowThreshold: "You earn below the repayment threshold, so you don't repay today — and you still won't. Your saving kicks in as your salary grows.",
    noChange: "No change at this salary."
  },

  /* ------------------------------------------------------------------
     WHAT YOU COULD BUY (final page)
  ------------------------------------------------------------------ */
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

  /* ------------------------------------------------------------------
     METHODOLOGY (final page, collapsed)
  ------------------------------------------------------------------ */
  smallPrint: {
    methodSummary: "Methodology & health warnings",
    methodP1: "This is an illustrative, directional model — a game, not an official fiscal costing. The graduate earnings distribution is split into twelve bands from ONS ASHE 2025 full-time earnings percentiles, scaled by a 1.125 graduate premium. Repayments are the chosen rate applied to income above the chosen threshold, weighted across bands and multiplied by the 2022/23 cohort of 108,340 borrowers (DfE/LEO). The baseline calibrates within 2.8% of the IFS benchmark for average lifetime repayments.",
    methodP2: "Big caveats: earnings are held flat (no career progression), loan balances, interest and write-offs aren't simulated, behaviour doesn't change, and figures are undiscounted cash for a single cohort. The 'sweet spot' reflects the cost range the model shows can be recovered through long-term repayment adjustments. Real-world cost equivalents are rough public-domain ballparks for scale, not procurement quotes. Plan 2 rules as at April 2026: threshold £29,385, rate 9%, 30-year write-off."
  },

  /* ------------------------------------------------------------------
     EMAIL SIGN-UP CARD (appears on every game page)
     Token: {EMAIL}
  ------------------------------------------------------------------ */
  email: {
    heading: "Want the full picture?",
    body: "We're publishing a report on how to fix student loans without crashing the economy. Pop in your email and we'll send it to you when it lands.",
    fieldLabel: "Email",
    placeholder: "you@example.com",
    button: "Send me the report",
    smallPrint: "We'll use your email to send the report and occasional updates on this campaign, in line with our privacy policy. Unsubscribe any time.",
    sending: "Sending…",
    invalid: "Please enter a valid email address.",
    failed: "That didn't send — please try again in a moment.",
    successHeading: "You're on the list, {EMAIL}",
    successBody: "Our student loans report will land in your inbox as soon as it's published."
  },

  /* ------------------------------------------------------------------
     NAVIGATION BUTTONS
  ------------------------------------------------------------------ */
  nav: {
    back: "Back",
    toVerdict: "Face the verdict",
    backToBudget: "Back to the Budget",
    toProposal: "What would the fix save you?",
    playAgain: "Play it again"
  }
};

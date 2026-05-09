// Chapter 10 — Reporting and Analyzing Financial Investments
// Sourced from FRA Chapter 10 slide deck.
window.CHAPTER_CONTENT = window.CHAPTER_CONTENT || {};
window.CHAPTER_CONTENT.ch10 = {

intro: `
<p>A <strong>financial investment</strong> is the purchase of securities issued by another organisation — government bonds, corporate bonds, notes, or shares of another company. Companies invest cash for three very different reasons, and the reason drives the entire accounting treatment:</p>
<ol>
<li><strong>Passive income</strong> — to earn interest or dividends and benefit from price appreciation. Typical of treasury operations parking idle cash.</li>
<li><strong>Significant influence</strong> — to participate in another firm's policy decisions (board seats, supplier relationships, access to technology), without controlling it.</li>
<li><strong>Strategic / control</strong> — to combine operations, acquire technology, eliminate a competitor, or vertically integrate a supply chain.</li>
</ol>

<h3>Two questions decide the accounting</h3>
<p>Before you pick a method, ask:</p>
<ul>
<li><strong>What type of security?</strong> Debt (bonds, notes) is treated separately from equity (shares).</li>
<li><strong>How much influence does the investor have over the investee?</strong> This is approximated by the % of voting shares held.</li>
</ul>

<h3>The three influence levels (share investments)</h3>
<table class="tbl">
<thead><tr><th>Ownership</th><th>Label</th><th>Investee called</th><th>Method</th></tr></thead>
<tbody>
<tr><td>&lt; 20%</td><td>Passive — no significant influence</td><td>—</td><td>Fair value (FVTPL or FVOCI)</td></tr>
<tr><td>20% – 50%</td><td>Significant influence</td><td>Associate</td><td>Equity method</td></tr>
<tr><td>&gt; 50%</td><td>Control</td><td>Subsidiary</td><td>Consolidation</td></tr>
</tbody>
</table>
<p>The 20% and 50% thresholds are <em>presumptions</em>. Significant influence can also arise via legal agreements, sole-supplier/customer relationships, or board representation. Control can occur below 50% via voting agreements or technology licensing.</p>

<h3>Debt investments — acquisition, interest, and sale</h3>
<p>Debt investments (bonds and notes) are recorded at <strong>cost</strong> on acquisition: the price paid plus any brokerage fees / commissions. Three types of entries flow through the books:</p>
<ul>
<li><strong>Acquisition</strong> — Investment debit; Cash credit. Brokerage fees capitalised into the cost.</li>
<li><strong>Interest revenue</strong> — recorded each period on the income statement.</li>
<li><strong>Sale</strong> — gain or loss = (Net proceeds − Cost). Net proceeds = sale price − brokerage fees on the sale.</li>
</ul>

<h3>Fair value and the fair-value hierarchy</h3>
<p><strong>Fair value</strong> is the price an independent buyer would pay for the asset. For an asset with an active market this is "mark-to-market"; otherwise it is "mark-to-model" (more subjective). IFRS 13 / ASC 820 ranks inputs into three levels:</p>
<ul>
<li><strong>Level 1</strong> — quoted prices in active markets for identical assets (e.g. a share traded on a major exchange).</li>
<li><strong>Level 2</strong> — observable inputs other than Level 1 (e.g. a thinly traded bond benchmarked to a similar one; yield curves).</li>
<li><strong>Level 3</strong> — unobservable inputs, mostly management estimates (e.g. an impaired operating asset).</li>
</ul>
<p>Level 3 fair values offer the most discretion and the most opportunity for earnings management. Auditors and analysts watch Level 3 disclosures carefully.</p>

<h3>Earnings-management risk</h3>
<p>Different categories report fair-value changes in different places (P&L vs. OCI). That creates a temptation:</p>
<ul>
<li>Management can <em>cherry-pick</em> which winning investments to sell to recognise gains in P&L (and even buy back later).</li>
<li>Management may <em>reclassify</em> securities to push unrealised gains through P&L.</li>
</ul>
<p>To mute this, IFRS forces certain reclassifications to be effectively irrevocable, and US GAAP requires footnote disclosure of realised gains and losses on AFS securities so users can see what was being timed.</p>
`,

definitions: [
  { id:'def-fininv', term:'Financial investment', body:'Purchase of securities issued by another entity — debt (bonds, notes) or equity (shares). The accounting depends on the type of security and the level of influence/control over the issuer.' },
  { id:'def-passive', term:'Passive influence (&lt; 20%)', body:'Investor cannot exert influence over the investee. Generally less than 20% of voting shares. Accounted at fair value.' },
  { id:'def-sig-infl', term:'Significant influence (20% – 50%)', body:'Investor can influence but not control the investee — called an <em>associate</em>. Influence may also come from legal agreements, sole supplier/customer status or board seats. Accounted under the <strong>equity method</strong>.' },
  { id:'def-control', term:'Control (&gt; 50%)', body:'Investor controls the investee — called a <em>subsidiary</em>. Ability to elect a majority of the board, set strategy, hire executives. Triggers <strong>consolidation</strong>.' },
  { id:'def-fairval', term:'Fair value', body:'The amount an independent buyer would be willing to pay for an asset. For actively traded assets this equals the market price ("mark-to-market"); otherwise it is estimated by a model ("mark-to-model").' },
  { id:'def-fvhier', term:'Fair-value hierarchy', body:'Level 1 (quoted prices in active markets), Level 2 (observable inputs other than Level 1), Level 3 (unobservable inputs / management estimates). Level 3 is the most subjective.' },
  { id:'def-fvtpl', term:'FVTPL — Fair Value Through Profit or Loss', body:'Trading securities and equities not elected into FVOCI. Carried at fair value; <em>both</em> realised and unrealised gains/losses go through the income statement.' },
  { id:'def-fvoci-debt', term:'FVOCI debt (Available-for-Sale, US GAAP for debt)', body:'Debt held with a "hold-to-collect-and-sell" business model that passes the SPPI test. Carried at fair value; unrealised G/L recorded in OCI; on sale, the cumulative OCI is <strong>recycled</strong> into P&L.' },
  { id:'def-fvoci-eq', term:'FVOCI equity election', body:'IRREVOCABLE election at initial recognition for equities not held for trading. Unrealised G/L go to OCI and are <strong>NEVER</strong> recycled to P&L. Dividends still go to P&L.' },
  { id:'def-amcost', term:'Amortised cost / Held-to-Maturity', body:'Debt held within a "hold-to-collect" business model that passes the SPPI test. Carried at amortised cost using the effective-interest method; no fair-value adjustments unless impaired.' },
  { id:'def-sppi', term:'SPPI test', body:'Solely Payments of Principal and Interest. A debt instrument passes SPPI if its cash flows are only repayments of principal plus interest on the outstanding principal. Required for amortised-cost or FVOCI-debt classification under IFRS 9.' },
  { id:'def-eqmethod', term:'Equity method', body:'Used for 20–50% holdings. Investment account = cost + share of investee\'s NI − dividends received from the investee. Share of NI is investment income; dividends are NOT income — they reduce the carrying value.' },
  { id:'def-consol', term:'Consolidation', body:'Used at &gt; 50% control. Combine the subsidiary\'s assets, liabilities, revenues and expenses line-by-line with the parent\'s; eliminate intercompany items; show non-controlling interest (NCI) inside Equity.' },
  { id:'def-nci', term:'Non-controlling interest (NCI)', body:'The portion of a subsidiary\'s equity not owned by the parent. Reported within consolidated equity, separately from the parent\'s equity.' },
  { id:'def-goodwill', term:'Goodwill', body:'Excess of purchase price over the fair value of net identifiable assets acquired. Capitalised on the consolidated balance sheet, NOT amortised, but tested for impairment annually under IFRS 3 / IAS 36.' },
  { id:'def-bargain', term:'Bargain purchase', body:'Where purchase price is less than the fair value of net identifiable assets. The difference is recognised immediately as a <strong>gain in P&L</strong> after re-checking the valuations.' },
],

formulas: [
  { id:'f-eq-roll', name:'Equity-method carrying value (roll-forward)',
    expr:'\\text{Inv}_{end} = \\text{Inv}_{begin} + \\%\\,\\text{NI}_{investee} - \\%\\,\\text{Dividends}_{investee}',
    when:'20–50% ownership. Investment moves with the investee\'s net income; dividends pull cash out of the investment account.' },
  { id:'f-eq-income', name:'Equity-method investment income',
    expr:'\\text{Investment Income}=\\%\\times \\text{NI}_{investee}',
    when:'Goes onto investor\'s income statement — NOT the dividends received.' },
  { id:'f-debt-cost', name:'Cost of a debt investment at acquisition',
    expr:'\\text{Cost}=\\text{Price paid}+\\text{Brokerage / commissions}',
    when:'Initial recognition of bonds and notes.' },
  { id:'f-gain-sale', name:'Gain or loss on sale of investment',
    expr:'\\text{G/L}=\\text{Net proceeds}-\\text{Carrying amount}',
    when:'Net proceeds = sale price − brokerage on sale. Carrying amount depends on classification.' },
  { id:'f-goodwill', name:'Goodwill on acquisition',
    expr:'\\text{Goodwill}=\\text{Purchase price}-\\text{FV of net identifiable assets}',
    when:'Consolidation under IFRS 3. If negative → bargain-purchase gain in P&L.' },
  { id:'f-fvoci-debt', name:'FVOCI debt — recycled gain on sale',
    expr:'\\text{P\\&L gain on sale}=\\text{Sale price}-\\text{Original cost}',
    when:'On sale of FVOCI debt, the cumulative OCI is reclassified into P&L so the lifetime gain hits earnings exactly once.' },
  { id:'f-fvoci-eq', name:'FVOCI equity (election) — gain on sale',
    expr:'\\text{P\\&L gain on sale}=0\\quad(\\text{cumulative OCI never recycled})',
    when:'Unrealised G/L stay in OCI / Retained Earnings forever — they bypass P&L permanently.' },
],

derivations: [
  { title:'Why the equity method treats dividends as a return of capital, not income',
    body:`<p>Under the equity method we already recognised our share of the investee\'s net income when it was earned. If the investee pays a dividend out of those same earnings, recognising it again as income would double-count. So a dividend received simply <em>reduces the investment account</em> — it converts our ownership stake into cash. The income hit happened earlier, when we accrued our share of NI.</p>
    <p>Contrast this with the fair-value (&lt; 20%) world, where we never accrued NI: there, dividends ARE income.</p>` },
  { title:'Why FVOCI equity is "irrevocable, no recycling"',
    body:`<p>The IFRS 9 framers wanted to give companies an option to keep volatile equity-price changes out of P&L (e.g. for strategic, long-term holdings). To prevent abuse — selling winners into P&L and parking losers in OCI — the election (a) must be made at initial recognition, (b) cannot be reversed, and (c) <strong>never recycles</strong> cumulative OCI to P&L on sale. The lifetime gain or loss simply never appears in earnings. Dividends are still P&L because they are realised cash flows.</p>` },
  { title:'Goodwill — what it represents and why it is not amortised',
    body:`<p>When the parent pays more than the fair value of the subsidiary\'s identifiable net assets, the excess is presumed to represent <em>future economic benefits</em> from synergies, brand, workforce, etc. — assets you cannot easily disentangle. IFRS 3 capitalises this excess as goodwill. Because its useful life is indefinite, it is <strong>not amortised</strong>; instead it is tested annually for impairment under IAS 36. An impairment is permanent — once written down, it cannot be reversed.</p>` },
],

examples: [
  { title:'Equity method — investment account roll-forward',
    problem:`Investor owns <strong>30%</strong> of Investee. Beginning investment = $200,000. Investee\'s reported NI = $100,000; Investee paid $40,000 of dividends. What is the new carrying value, and how much income does Investor recognise?`,
    hint:'Apply: ending investment = beginning + share of NI − share of dividends.',
    steps:[
      { what:'Investment income = 30% × 100,000 = $30,000.', why:'Goes onto Investor\'s income statement.' },
      { what:'Share of dividends = 30% × 40,000 = $12,000.', why:'Reduces the investment account — NOT income.' },
      { what:'Ending investment = 200,000 + 30,000 − 12,000 = $218,000.' },
    ],
    answer:'Investment income = $30,000. New carrying value = $218,000.',
    pitfall:'Do not record the $12,000 dividend as income — under the equity method, income is the share of NI, not the cash received.'
  },
  { title:'Choosing the framework from ownership %',
    problem:'For each holding, pick the accounting method: (a) 8% of a public tech share; (b) 27% of a key supplier with a board seat; (c) 70% of a manufacturing subsidiary.',
    hint:'Map ownership % to the influence ladder.',
    steps:[
      { what:'(a) 8% &lt; 20% → no significant influence → fair value (FVTPL or FVOCI election).' },
      { what:'(b) 27% in 20–50% range AND a board seat → equity method (associate).' },
      { what:'(c) 70% &gt; 50% → control → consolidate (subsidiary, with NCI for the 30% outside owners).' },
    ],
    answer:'(a) FVTPL/FVOCI; (b) Equity method; (c) Consolidation with NCI.'
  },
  { title:'FVOCI debt vs FVOCI equity — recycling',
    problem:`Comp A holds a corporate bond classified FVOCI. Cumulative unrealised gains in OCI = $4,000. It sells the bond and realises a total $4,500 gain (vs original cost). Comp B made the FVOCI election for a 5% equity stake; cumulative OCI gain $4,000; sells at a $4,500 gain. What hits P&L for each?`,
    steps:[
      { what:'Comp A — FVOCI debt: cumulative OCI is RECYCLED to P&L on sale. Total P&L gain = $4,500.', why:'IFRS 9: lifetime debt gain must hit earnings exactly once.' },
      { what:'Comp B — FVOCI equity election: cumulative OCI is NEVER recycled. P&L gain on sale = $0; the $4,500 stays in OCI / RE.', why:'Irrevocable election — protects against earnings management.' },
    ],
    answer:'Comp A: $4,500 in P&L. Comp B: $0 in P&L (entire gain bypasses earnings).',
    pitfall:'The single biggest exam trap on IFRS 9 — students often write down "recycle" for both. Equity election = NO recycling, ever.'
  },
  { title:'Trading vs FVOCI debt — where do unrealised G/L sit?',
    problem:'In Q3, both holdings rose $50,000 in fair value but were not sold. Holding X is classified as Trading (FVTPL); Holding Y is FVOCI debt. How does each affect the income statement and OCI?',
    steps:[
      { what:'Holding X: $50,000 unrealised gain → Income Statement (in Other Income / FV gains).' },
      { what:'Holding Y: $50,000 unrealised gain → OCI; no effect on net income this period.' },
    ],
    answer:'X moves NI by +$50k; Y moves OCI by +$50k. Cash unchanged in both.'
  },
  { title:'Goodwill on acquisition',
    problem:'Parent pays $900,000 for 100% of Sub. FV of identifiable assets = $1,200,000; FV of liabilities = $400,000. What goodwill is recognised?',
    steps:[
      { what:'FV of net identifiable assets = 1,200,000 − 400,000 = $800,000.' },
      { what:'Goodwill = 900,000 − 800,000 = $100,000.' },
      { what:'Capitalised on the consolidated balance sheet; tested annually for impairment.' },
    ],
    answer:'Goodwill = $100,000.',
    pitfall:'If the purchase price had been below FV of net identifiable assets, the difference is a bargain-purchase gain recognised immediately in P&L (after re-checking the valuations).'
  },
  { title:'Bond purchase, interest, and sale',
    problem:'Co. buys $50,000 face-value bonds at par + $300 brokerage. Holds them, receives $2,500 coupon. Later sells at $51,000 less $200 brokerage. What is the gain/loss on sale (assume FVTPL classification ignoring intermediate FV revaluations for simplicity)?',
    steps:[
      { what:'Cost on acquisition = 50,000 + 300 = $50,300.' },
      { what:'Coupon income $2,500 was already recorded each period as interest revenue.' },
      { what:'Net proceeds on sale = 51,000 − 200 = $50,800.' },
      { what:'Gain on sale = 50,800 − 50,300 = $500.' },
    ],
    answer:'Gain on sale = $500. (Plus the $2,500 coupon income recognised earlier.)'
  },
],

memory: [
  { label:'Mnemonic — 20-50-100', body:'<strong>"20-50-100"</strong>: at 20% start the equity method, at 50% start consolidating. Memorise these thresholds and you can always pick the framework first.' },
  { label:'Debt classification triage', body:'<strong>Hold-to-collect</strong> only + SPPI ✓ → <strong>Amortised cost</strong>. <strong>Hold-to-collect-AND-sell</strong> + SPPI ✓ → <strong>FVOCI</strong>. Anything else → <strong>FVTPL</strong>.' },
  { label:'Equity classification triage', body:'Default for equities = <strong>FVTPL</strong>. Optional <strong>FVOCI election</strong> for non-trading equity, irrevocable, no recycling.' },
  { label:'Where do unrealised G/L go?', body:'<strong>FVTPL → P&L. FVOCI → OCI.</strong> Trading is just FVTPL with intent.' },
  { label:'Recycling rule', body:'<strong>FVOCI debt RECYCLES</strong> on sale. <strong>FVOCI equity NEVER recycles.</strong>' },
  { kind:'pitfall', body:'Under the EQUITY method, dividends from the investee are NOT income — they reduce the investment account. Under FAIR-VALUE (&lt; 20%) accounting, dividends ARE income.' },
  { kind:'pitfall', body:'Goodwill is NOT amortised under IFRS 3. It is tested annually for impairment, and impairments cannot be reversed.' },
  { kind:'pitfall', body:'A bargain purchase produces a GAIN in P&L on day one — but only after re-verifying that asset and liability fair values were not understated. Do not capitalise it.' },
],

connections: '<p>Investments are the single biggest articulation point in this course. The classification choice flows directly to the <strong>income statement</strong> (FVTPL gains hit P&L) and to <strong>OCI / Equity</strong> (FVOCI gains park there) — see Ch 9 for the equity components and AOCI. Cash inflows and outflows from buying and selling investments sit in <strong>CFI</strong> on the Cash Flow Statement (Ch 11). Equity-method income increases NI but no cash is received until a dividend — that gap shows up as an indirect-method adjustment in CFO. Consolidation creates <strong>NCI</strong> inside equity and <strong>goodwill</strong> on the balance sheet, both feeding the leverage and return ratios in Ch 12 (D/E uses total liabilities; ROA uses total assets <em>including</em> goodwill).</p>',
};

// Chapter 4 — Revenue Recognition, Receivables & Operating Income
// Sourced directly from FRA Chapter 4 slide deck.
window.CHAPTER_CONTENT = window.CHAPTER_CONTENT || {};
window.CHAPTER_CONTENT.ch4 = {

intro: `
<p>The income statement is the centrepiece of operating-performance analysis. The slides motivate three uses of income-statement information: (i) <strong>predict future performance</strong> for investment, (ii) <strong>assess creditworthiness</strong>, and (iii) <strong>evaluate management quality</strong>. Concretely, the statement tries to answer three questions: <em>How profitable is the company? How did it achieve that profitability? Will the current level persist?</em></p>
<p>Two big areas can move profitability around: <strong>revenue recognition</strong> (timing of the top line) and <strong>receivables / bad-debt estimates</strong> (the accruals attached to selling on credit). Both are subject to manipulation, so both are tightly governed by accounting standards and watched carefully by the SEC. Premature revenue recognition and "cookie-jar" allowance reserves are the two most common abuses.</p>

<h3>The new converged revenue standard — IFRS 15 / ASC 606</h3>
<p>Effective 1 January 2018 for public companies, the FASB (ASC 606) and IASB (IFRS 15) issued a single converged revenue model. The core principle is that revenue is recognised when (or as) the seller transfers <em>control</em> of a promised good or service to the customer, in the amount the seller expects to be entitled to. Implementation follows a strict <strong>five-step model</strong>:</p>
<ol>
<li><strong>Identify the contract</strong> with a customer (oral or written, but it must create enforceable rights and obligations).</li>
<li><strong>Identify the performance obligations</strong> in the contract — the distinct deliverables. Each becomes a "unit of account."</li>
<li><strong>Determine the transaction price</strong> — the amount the seller expects to be entitled to, including variable consideration (discounts, rebates, performance bonuses, royalties).</li>
<li><strong>Allocate the transaction price</strong> to performance obligations based on stand-alone selling prices (SSPs); estimate the SSP if not directly observable.</li>
<li><strong>Recognise revenue</strong> when (or as) each performance obligation is satisfied — i.e., when the customer obtains <em>control</em> (the ability to direct use and obtain substantially all benefits). This may be at a point in time or over time.</li>
</ol>

<h3>Timing — point in time vs over time</h3>
<p>If control transfers in a single moment (most retail sales), revenue is recognised at that point. If control transfers progressively (long-term construction, software-as-a-service, professional engagements), revenue is recognised over time using a measure of progress. The slides highlight construction contracts as the canonical "over time" case, applying <strong>percentage-of-completion</strong> (the input method) using cost-to-cost measurement.</p>

<h3>Receivables and the bad-debt accrual</h3>
<p>Selling on credit creates an asset (Accounts Receivable) and an unavoidable risk: some customers will not pay. Standards require companies to <em>estimate</em> the uncollectible portion and report receivables at <strong>net realisable value</strong> on the balance sheet:</p>
<table class="tbl">
<thead><tr><th>Line</th><th>Amazon 31 Dec 2021</th></tr></thead>
<tbody>
<tr><td>Accounts receivable, gross</td><td>$33,992 m</td></tr>
<tr><td>Less: Allowance for doubtful accounts</td><td>(1,100)</td></tr>
<tr><td><strong>Net realisable value</strong></td><td><strong>$32,891 m</strong></td></tr>
</tbody>
</table>
<p>The chapter also introduces two ratios for receivables analysis — <em>Accounts Receivable Turnover</em> and <em>Average Collection Period (DSO)</em> — and the manager-discretion problems of channel stuffing, income smoothing, and big-bath accounting that round out the chapter.</p>
`,

definitions: [
  { id:'def-rev-rec', term:'Revenue recognition', body:'The accounting principle that revenue is recorded when (or as) control of the good/service transfers to the customer — not when cash is received. Codified in IFRS 15 / ASC 606 as a five-step model effective 1 January 2018.' },
  { id:'def-perf-ob', term:'Performance obligation', body:'A distinct promise in a contract to transfer a good or service to the customer. "Distinct" means capable of providing benefit on its own or in combination with readily available resources. Each performance obligation is the unit of account.' },
  { id:'def-tp', term:'Transaction price', body:'The amount of consideration to which the seller expects to be entitled in exchange for satisfying the performance obligations. Includes variable consideration (volume discounts, rebates, royalties, performance bonuses), estimated at contract inception.' },
  { id:'def-ssp', term:'Stand-alone selling price (SSP)', body:'The price at which a seller would sell a promised good or service separately. Used to allocate the transaction price across multiple performance obligations. If no observable price exists, SSP must be estimated.' },
  { id:'def-control', term:'Control', body:'The customer has the ability to direct the use of, and obtain substantially all of the remaining benefits from, an asset. Control may transfer at a point in time (typical retail) or over time (construction, services).' },
  { id:'def-bundled', term:'Bundled (multiple-element) sale', body:'Two or more goods/services sold for one lump-sum price. Common in software (license + training + maintenance + support). The transaction price is allocated to elements using SSPs.' },
  { id:'def-poc', term:'Percentage-of-completion (input method)', body:'Over-time revenue recognition for long-term contracts where the seller has a signed contract, fixed/determinable price, and reasonably estimable costs. Revenue and gross profit are recognised in proportion to costs incurred relative to total expected costs.' },
  { id:'def-cc', term:'Completed-contract method', body:'Defers all revenue and expense to the period in which the contract is finished. Used when one or more requirements for percentage-of-completion are not met.' },
  { id:'def-ar', term:'Accounts receivable', body:'A current asset representing customer claims for goods or services delivered on credit. Trade receivables. Reported at net realisable value.' },
  { id:'def-nr', term:'Notes receivable', body:'A formal written promise (note) for an amount to be received, typically with stated interest. A trade receivable, but distinct from accounts receivable in legal form.' },
  { id:'def-other-r', term:'Other (non-trade) receivables', body:'Interest receivable, loans to officers, advances to employees, income-tax refunds receivable. Not arising from the sale of goods/services.' },
  { id:'def-allowance', term:'Allowance for uncollectible accounts', body:'A contra-asset (XA) account holding management\'s estimate of receivables that will not be collected. Net AR (book value) = Gross AR − Allowance.' },
  { id:'def-nrv', term:'Net realisable value (NRV) of receivables', body:'Gross accounts receivable minus the allowance for uncollectible accounts. The amount the company actually expects to collect, and the figure reported on the balance sheet.' },
  { id:'def-bde', term:'Bad debt expense', body:'The income-statement charge for the period\'s estimated uncollectible accounts. Recorded by debiting Bad Debt Expense and crediting the Allowance.' },
  { id:'def-aging', term:'Aging of accounts receivable', body:'A balance-sheet-focused estimation method. AR balances are sorted by days outstanding (current, 1–60, 61–90, >90); higher uncollectible percentages are applied to older buckets. The result is the desired ending balance in the Allowance.' },
  { id:'def-pos', term:'Percentage-of-sales method', body:'An income-statement-focused estimation method. Bad debt expense = a fixed % of credit sales for the period. Easier than aging but less accurate; not acceptable as the sole method under U.S. GAAP for financial reporting.' },
  { id:'def-writeoff', term:'Write-off', body:'Removing a specific uncollectible account: debit Allowance, credit Accounts Receivable. No income-statement impact and no change to net AR — both gross AR and the allowance fall by the same amount.' },
  { id:'def-recovery', term:'Recovery', body:'A previously written-off account is later collected. Reverse the write-off (debit AR, credit Allowance) and then record the cash collection (debit Cash, credit AR).' },
  { id:'def-pledge', term:'Pledging receivables', body:'Using receivables as collateral for a loan. The receivables stay on the balance sheet; a corresponding short-term loan appears on the liability side.' },
  { id:'def-factor', term:'Factoring receivables', body:'Selling receivables to a bank or financial institution. The receivables are removed from the balance sheet; the arrangement is disclosed in the notes.' },
  { id:'def-art', term:'Accounts Receivable Turnover (ART)', body:'Reflects how efficiently a firm collects on the credit it issues — the number of times each year that receivables are converted to cash. Higher = faster collection.' },
  { id:'def-dso', term:'Average Collection Period / Days Sales Outstanding (DSO)', body:'Average days a company takes to collect outstanding receivables. The receivables-side companion to ART.' },
  { id:'def-cs', term:'Channel stuffing', body:'Using market power to push customers to buy more than they need just before period-end, inflating recognised revenue. Permissible only if no special return concessions were granted; otherwise it is fraudulent revenue recognition.' },
  { id:'def-em', term:'Earnings management', body:'Use of managerial discretion to mask underlying economic performance — typically to mislead users or to meet targets/contractual thresholds. Toolkits include transaction timing, optimistic/pessimistic estimates, big-bath losses, and income smoothing.' },
  { id:'def-cookie', term:'Cookie-jar reserve', body:'Over-accrual of an expense (often bad debt) in a strong year so it can be released to boost earnings in a later weak year. A specific form of allowance-account abuse.' },
  { id:'def-bath', term:'Big bath', body:'Recognising a large nonrecurring loss in a period that is already weak, on the theory that one bad year is no worse than two and the next year\'s comparison will look better.' },
],

formulas: [
  { id:'f-poc', name:'Percentage of completion (cost-to-cost)',
    expr:'\\%\\text{ Complete} = \\dfrac{\\text{Costs incurred to date}}{\\text{Total estimated costs}}',
    when:'Step 5 of revenue recognition for long-term contracts that satisfy all three POC requirements (signed contract, fixed/determinable price, reasonably estimable costs).' },
  { id:'f-poc-rev', name:'Revenue under percentage-of-completion',
    expr:'\\text{Revenue}_{period} = \\text{Contract price} \\times \\%\\text{ Complete}_{period}',
    when:'Recognise revenue based on the period\'s incremental progress toward total completion.' },
  { id:'f-poc-gp', name:'Gross profit under percentage-of-completion',
    expr:'\\text{Gross profit}_{period} = \\text{Revenue}_{period} - \\text{Costs}_{period}',
    when:'Match costs in the same period as the related revenue (just like any other matching application).' },
  { id:'f-aging', name:'Aging — desired ending allowance',
    expr:'\\text{Desired Allowance}_{end} = \\sum_i (\\text{AR balance}_i \\times \\%_i\\text{ uncollectible})',
    when:'Sum across age buckets. The bad-debt journal entry is the amount needed to bring the existing Allowance balance up to this desired ending balance.' },
  { id:'f-bde-aging', name:'Bad debt expense from an aging schedule',
    expr:'\\text{Bad debt expense} = \\text{Desired Allowance}_{end} - \\text{Allowance}_{beg, after writeoffs}',
    when:'When using the aging method. Remember that write-offs during the year reduce the allowance balance before you "top it up."' },
  { id:'f-bde-sales', name:'Bad debt expense — % of credit sales',
    expr:'\\text{Bad debt expense} = \\text{Credit sales} \\times \\%\\text{ uncollectible}',
    when:'Income-statement focused method; useful for forecasting but not GAAP-acceptable as the sole method for financial reporting.' },
  { id:'f-nrv', name:'Net realisable value of receivables',
    expr:'\\text{NRV} = \\text{Gross AR} - \\text{Allowance for Uncollectible Accounts}',
    when:'Always — this is the figure shown on the balance sheet.' },
  { id:'f-art', name:'Accounts Receivable Turnover',
    expr:'\\text{ART} = \\dfrac{\\text{Net credit sales}}{\\text{Average accounts receivable}}',
    when:'Comparing efficiency of receivables collection across periods or against competitors.' },
  { id:'f-dso', name:'Average Collection Period (DSO)',
    expr:'\\text{DSO} = \\dfrac{365}{\\text{Accounts Receivable Turnover}}',
    when:'Translating ART into days. Amazon 2021: $\\text{DSO} \\approx 365/21 \\approx 18\\text{ days}$.' },
],

derivations: [
  { title:'Why a write-off has no income-statement impact',
    body:`<p>The expense was already recognised when the allowance was originally booked (Bad Debt Expense / Allowance). At that moment, an estimated amount of receivables was deemed uncollectible — equity went down, but no specific customer had yet defaulted.</p>
<p>The write-off is just the second leg of the same accrual. When customer "Jones owes $2,100" is identified as uncollectible, the entry is <code>Allowance 2,100 / Accounts Receivable 2,100</code>. Both gross AR and the allowance fall by the same amount, so net AR (NRV) is unchanged. The income statement is untouched because the expense was already taken.</p>
<p>This is why a sloppy reader can be fooled: a write-off does <em>not</em> reduce earnings. The earnings reduction happened earlier, the moment the allowance was estimated. Conversely, deliberately under-estimating the allowance defers the expense indefinitely and inflates current-period income.</p>` },
  { title:'Comparing POC and Completed-Contract over the life of a contract',
    body:`<p>Take the slide example. Haskell signs an $8m library contract; total expected cost is $6m; year-1 cost is $1.8m, year-2 cost is $4.2m.</p>
<p><strong>Percentage-of-completion</strong>: year-1 = 30% complete → Rev $2.4m, COGS $1.8m, GP $0.6m. Year-2 = 70% → Rev $5.6m, COGS $4.2m, GP $1.4m. Two-year totals: Rev $8.0m, GP $2.0m.</p>
<p><strong>Completed contract</strong>: year-1 = nothing recognised. Year-2 = Rev $8.0m, COGS $6.0m, GP $2.0m.</p>
<p>Total revenue, total cost, total profit are <em>identical</em>. Only the period in which the profit lands changes. POC smooths recognition with progress; completed-contract concentrates everything at the end. POC is usually preferred (better matching), but only if the three requirements are met.</p>` },
],

examples: [
  { title:'Step 1–5 walk-through (bundled software sale)',
    problem:`<p>A software vendor signs a contract to deliver: a perpetual software license, two years of maintenance, and 20 hours of training. Lump-sum price $100,000. Stand-alone selling prices: license $80,000; maintenance $24,000; training $16,000 — total SSP $120,000.</p>`,
    hint:`<p>Walk through all five steps. Allocate by SSP proportions, then recognise each obligation when control transfers.</p>`,
    steps:[
      { what:'Step 1 — contract', why:'Enforceable rights and obligations exist; one written contract with the customer.' },
      { what:'Step 2 — performance obligations', why:'Three distinct obligations: license, maintenance, training. Each provides separate benefit.' },
      { what:'Step 3 — transaction price', why:'$100,000 fixed (no variable consideration in this stylised example).' },
      { what:'Step 4 — allocate', why:'Allocation factor = $100,000 / $120,000 = 0.833. License $80,000×0.833 = $66,667; maintenance $24,000×0.833 = $20,000; training $16,000×0.833 = $13,333.' },
      { what:'Step 5 — recognise', why:'License: at point in time when delivered (control transfers). Training: at point in time when each session is delivered (or over training period). Maintenance: over time, straight-line over 24 months ($20,000/24 ≈ $833/month).' },
    ],
    answer:`<p>Total $100,000 split into: license $66,667 (point-in-time), training $13,333 (point-in-time), maintenance $20,000 (over 24 months at $833/month). Cash collected up-front; balance held in Unearned Revenue until each obligation is satisfied.</p>`,
    pitfall:`<p>Recognising the entire $100,000 on day one because cash was received. Bundled contracts demand allocation to performance obligations and matching of recognition to control transfer.</p>`,
    alt:`<p>If one element\'s SSP is unobservable, the standard requires an estimate (e.g., expected cost plus margin, or adjusted market assessment) — not omission of allocation.</p>` },

  { title:'Haskell Construction — percentage-of-completion',
    problem:`<p>Haskell signs an $8,000,000 contract to build a library. Total expected cost is $6,000,000. Costs incurred: year 1 $1,800,000; year 2 $4,200,000. Compute the revenue, expense and gross profit recognised in each year under POC.</p>`,
    hint:`<p>Apply cost-to-cost: $\\%\\text{ complete} = \\text{costs to date} / \\text{total expected costs}$. Recognise contract price × % complete.</p>`,
    steps:[
      { what:'Year 1 % complete', why:'$1,800,000 / $6,000,000 = 30%.' },
      { what:'Year 1 revenue', why:'$8,000,000 × 30% = $2,400,000.' },
      { what:'Year 1 expense', why:'$1,800,000 (actual costs incurred).' },
      { what:'Year 1 gross profit', why:'$2,400,000 − $1,800,000 = $600,000.' },
      { what:'Year 2 % complete (incremental)', why:'$4,200,000 / $6,000,000 = 70%.' },
      { what:'Year 2 revenue / expense / GP', why:'$5,600,000 − $4,200,000 = $1,400,000.' },
      { what:'Two-year totals', why:'Revenue $8,000,000; expenses $6,000,000; gross profit $2,000,000.' },
    ],
    answer:`<p>Year 1: $600,000 gross profit. Year 2: $1,400,000 gross profit. Total $2,000,000 — same total as completed-contract, only the timing differs.</p>`,
    pitfall:`<p>Using contract price (not cost) in the denominator of percent-complete. The cost-to-cost input method ratios <em>costs</em>, not revenues.</p>`,
    alt:`<p>If estimated costs are not reliable, default to completed-contract: $0 in year 1, full $2,000,000 GP in year 2.</p>` },

  { title:'Hudson aging — bad debt expense',
    problem:`<p>A seller has the following AR aging at year-end: Current $41,000 @ 1.0%; 1–60 days $32,000 @ 3.0%; 61–90 days $16,500 @ 4.5%; >90 days $8,700 @ 11.0%. Compute the desired ending allowance and the bad-debt expense, assuming the unadjusted Allowance balance is a $400 credit (i.e., before adjustment, $400 is already in the allowance).</p>`,
    hint:`<p>Aging gives you the <em>ending</em> allowance balance you want. Bad-debt expense is the top-up needed.</p>`,
    steps:[
      { what:'Compute estimated uncollectibles per bucket', why:'$41,000×1% = $410; $32,000×3% = $960; $16,500×4.5% = $743; $8,700×11% = $957.' },
      { what:'Sum to desired ending allowance', why:'$410 + $960 + $743 + $957 = $3,070.' },
      { what:'Top up the allowance', why:'Bad-debt expense = $3,070 desired − $400 already in allowance = $2,670.' },
      { what:'Journal entry', why:'<code>Bad Debt Expense 2,670 / Allowance for Uncollectible Accounts 2,670</code>.' },
    ],
    answer:`<p>Desired ending allowance = $3,070. Bad-debt expense for the year = $2,670. Net AR after adjustment = $98,200 − $3,070 = $95,130.</p>`,
    pitfall:`<p>Plugging $3,070 directly into the journal entry as bad-debt expense, ignoring the existing allowance balance. The aging method always answers "what should ending allowance equal," not "this period\'s expense."</p>`,
    alt:`<p>If the unadjusted allowance had a debit balance (because write-offs exceeded the prior estimate), bad-debt expense would equal $3,070 + the debit imbalance, not $3,070 − it.</p>` },

  { title:'Mouser — adjusting the allowance after write-offs',
    problem:`<p>Mouser, Inc. began the year with a $11,880 credit balance in the Allowance. During the year, $12,512 of receivables were written off. Year-end aging produces a desired allowance of $14,400. What is bad-debt expense for the year? What is net realisable value if gross AR is $232,000?</p>`,
    hint:`<p>Write-offs reduce the allowance during the year. Then top up to the aging-required ending balance.</p>`,
    steps:[
      { what:'Allowance after write-offs (mid-year)', why:'$11,880 beginning − $12,512 written off = ($632) — i.e., a $632 debit balance.' },
      { what:'Top up to desired ending allowance', why:'Need to reach a $14,400 credit balance. Bad-debt expense = $14,400 − (−$632) = $15,032.' },
      { what:'Journal entry', why:'<code>Bad Debt Expense 15,032 / Allowance 15,032</code>.' },
      { what:'Net realisable value', why:'Gross AR $232,000 − Allowance $14,400 = $217,600.' },
    ],
    answer:`<p>Bad-debt expense for the year = $15,032. NRV at year-end = $217,600.</p>`,
    pitfall:`<p>Treating write-offs as bad-debt expense. Write-offs do not affect the income statement; they only reduce both gross AR and the allowance.</p>`,
    alt:`<p>Under the simpler % of credit sales method, bad-debt expense would just be Sales × estimated %, regardless of write-offs or starting allowance. That method ignores the balance sheet and is therefore not GAAP-acceptable on its own.</p>` },

  { title:'Write-off vs recovery mechanics',
    problem:`<p>A seller writes off a $2,100 receivable from a bankrupt customer. Three months later the customer unexpectedly pays $1,400 of the balance. Show the journal entries.</p>`,
    hint:`<p>Write-off has no IS impact. Recovery is reversed-out write-off plus a normal collection.</p>`,
    steps:[
      { what:'Write-off entry', why:'<code>Allowance 2,100 / Accounts Receivable 2,100</code>. Net AR unchanged; expense already recognised earlier.' },
      { what:'Effect on AR balances', why:'Gross AR ↓ 2,100; Allowance ↓ 2,100; NRV unchanged.' },
      { what:'Recovery — reverse the write-off (partial)', why:'<code>Accounts Receivable 1,400 / Allowance 1,400</code> — restore the receivable.' },
      { what:'Recovery — record the cash collection', why:'<code>Cash 1,400 / Accounts Receivable 1,400</code>.' },
    ],
    answer:`<p>Three entries total: one to write off $2,100, one to reinstate $1,400, one to collect $1,400. No income-statement impact at any step. Allowance ends $700 lower than before the write-off (because $700 of the original write-off was, in retrospect, a permanent loss).</p>`,
    pitfall:`<p>Crediting Bad-Debt Expense on recovery — the expense was already taken when the allowance was originally set. Reversing it would double-count.</p>`,
    alt:`<p>Some firms record recovery as a single entry: <code>Cash 1,400 / Allowance 1,400</code>. Either approach yields the same financial-statement effects.</p>` },

  { title:'ART and DSO interpretation',
    problem:`<p>A retailer reports net credit sales of $156,000 and average accounts receivable of $13,000. Compute ART and DSO and interpret.</p>`,
    hint:`<p>ART measures collection speed (turnovers per year). DSO converts that into days.</p>`,
    steps:[
      { what:'ART', why:'$156,000 / $13,000 = 12 times per year.' },
      { what:'DSO', why:'365 / 12 ≈ 30.4 days.' },
      { what:'Interpretation', why:'On average the firm collects in about a month. A falling ART (rising DSO) over time may signal credit-quality deterioration, looser credit terms, or a need to raise the allowance.' },
    ],
    answer:`<p>ART = 12; DSO ≈ 30 days. Compare against historical trend and industry benchmarks; Amazon\'s 2021 DSO of ~18 days would be unusually fast for retailers.</p>`,
    pitfall:`<p>Using <em>total</em> sales (cash + credit) instead of credit sales in the numerator overstates turnover and understates DSO.</p>`,
    alt:`<p>If only ending AR is given (not average), use ending AR — but flag the simplification; this can distort comparisons during rapid growth.</p>` },
],

memory: [
  { label:'Five steps, in order',
    body:`<p><strong>C-P-T-A-R</strong>: <em>Contract → Performance obligations → Transaction price → Allocate → Recognise</em>. Memorise the order — exam questions often give you a scenario and ask which step has been violated.</p>` },
  { label:'Cash receipt is not revenue',
    body:`<p>A magazine that bills $120 for a year of monthly issues recognises $10 per month, not $120 in month one. The remaining $110 is a liability (Unearned Revenue) until the issues are delivered. Same logic for season tickets, gift cards, airline miles, prepaid memberships.</p>` },
  { label:'POC denominator is COSTS, not revenue',
    body:`<p>Percentage complete = costs incurred to date / <em>total estimated costs</em>. Common slip: dividing by contract price.</p>` },
  { label:'Aging gives the ENDING balance you want',
    body:`<p>Aging is a balance-sheet method. The result is the desired ending Allowance. Bad-debt expense is whatever entry top-ups (or down-adjusts) the allowance from its current balance to that desired balance — net of any write-offs already taken in the period.</p>` },
  { kind:'pitfall', body:`<p><strong>Write-off as expense.</strong> A write-off has no income-statement impact. Bad-debt expense was recognised in the period the allowance was estimated. Mixing these up is one of the most common conceptual errors.</p>` },
  { kind:'pitfall', body:`<p><strong>Channel stuffing booked as legitimate revenue.</strong> Revenue can be recognised on a stuffed shipment only if no special return / refund concession was granted. If returns are virtually certain, recognition should be deferred.</p>` },
  { kind:'pitfall', body:`<p><strong>Cookie-jar reserves.</strong> Deliberate over-accrual of bad-debt expense in a fat year — to be released in a thin year — is earnings management. Watch the allowance roll-forward across years for unexplained spikes and reversals.</p>` },
  { kind:'pitfall', body:`<p><strong>Confusing receivable categories.</strong> Trade receivables (AR + Notes Receivable from sales) live in current assets at NRV. Loans to officers, advances to employees, tax refunds receivable are <em>other</em> receivables — disclose separately.</p>` },
  { label:'Effect-table for under-estimated allowance',
    body:`<p>If management deliberately under-estimates uncollectibles: Allowance is too low → AR (net) is too high → assets overstated. Bad-debt expense is too low → net income overstated → equity overstated. Classic case where a balance-sheet error and an income-statement error reinforce each other.</p>` },
  { label:'ART vs DSO — same coin, two faces',
    body:`<p>Higher ART = lower DSO = faster collection = better receivables quality (usually). Falling ART or rising DSO is a flag for collection problems, looser credit policy, or the need for a bigger allowance.</p>` },
],

connections: `
<p>Chapter 4 builds directly on the accrual mechanics of <strong>Chapter 3</strong> — the bad-debt entry is just an accrual adjustment whose contra-asset (the Allowance) is paired with the receivable. <strong>Chapter 5 (Inventory)</strong> applies the matching principle from the cost side: COGS is recognised when revenue is recognised. <strong>Chapter 7 (Liabilities)</strong> revisits unearned revenue / contract liabilities for long-dated obligations. <strong>Chapter 11 (Statement of Cash Flows)</strong> reverses these accruals: bad-debt expense and increases in AR are added back / subtracted to convert net income to operating cash flow. The earnings-management discussion (channel stuffing, cookie jars, big bath) reappears in <strong>Chapter 6</strong> when useful-life estimates can be flexed to manage depreciation, and in <strong>Chapter 12</strong> when ratios are used to detect manipulation. Finally, <strong>ART and DSO</strong> are core inputs to the cash-conversion cycle in Chapter 12.</p>
`,
};

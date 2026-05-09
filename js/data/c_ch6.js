// Chapter 6 — Reporting and Analyzing Long-Term Assets
// Sourced directly from the FRA Chapter 6 slide deck (slides_ch6.txt) and the
// Chapter-6 LTA practice exercise (FRA_6_Buying_and_Selling_LTA.json).
// Companies referenced in the lectures: Airbus, Embraer, Tanner Enterprises,
// Moe's Southwest Grill, SatCo, Nike (Carolyn Davidson swoosh story),
// 100 MONTADITOS franchise example.
window.CHAPTER_CONTENT = window.CHAPTER_CONTENT || {};
window.CHAPTER_CONTENT.ch6 = {

intro: `
<p>Chapter 6 covers the assets a company keeps for the <em>long haul</em>: the factories, machines, vehicles, land, software, patents, trademarks and goodwill that sit on the balance sheet for years and produce revenue across many periods. Two questions structure the entire chapter:</p>
<ol>
<li><strong>Which costs go into the asset?</strong> (The capitalisation question — answered when the asset is acquired.)</li>
<li><strong>How is that cost moved to the income statement over time?</strong> (The depreciation / amortisation / impairment question — answered every year the asset is held, plus on disposal.)</li>
</ol>

<p>Long-term operating assets share two characteristics. They are <em>acquired to produce and deliver products and services that generate revenue</em>, and they <em>help produce revenue for multiple periods</em>. They split into:</p>
<ul>
<li><strong>Tangible assets</strong> — have physical substance: land, buildings, machinery, fixtures and equipment ("Property, Plant &amp; Equipment" or PP&amp;E).</li>
<li><strong>Intangible assets</strong> — no physical substance, give the owner specific rights and privileges: patents, copyrights, trademarks, franchise rights, and goodwill.</li>
</ul>

<h3>Capitalisation: which costs become part of the asset?</h3>
<p>The rule from the slides: capitalised cost <em>"must include all costs necessary to acquire an asset and prepare it for its intended use."</em> A cost is capitalised when (i) the future economic benefits will flow to the entity, and (ii) the cost can be measured reliably, and (iii) the capitalised amount does not exceed the expected future benefits.</p>

<table class="tbl">
<thead><tr><th>Capitalised (added to asset cost)</th><th>Expensed immediately</th></tr></thead>
<tbody>
<tr><td>Purchase / invoice price</td><td>Routine repairs and maintenance</td></tr>
<tr><td>Freight / shipping</td><td>Employee training</td></tr>
<tr><td>Import duties and non-recoverable taxes</td><td>Most marketing costs</td></tr>
<tr><td>Installation, set-up, calibration</td><td>Most administrative costs</td></tr>
<tr><td>Legal fees to register / acquire</td><td>R&amp;D under US GAAP (always); IFRS development costs only if criteria fail</td></tr>
<tr><td>Asset retirement obligations</td><td>Financing interest <em>after</em> acquisition</td></tr>
<tr><td>Site preparation</td><td></td></tr>
</tbody>
</table>

<h3>Self-constructed assets and capitalised interest</h3>
<p>When a company <em>builds</em> an asset for its own use, the capitalised cost includes:</p>
<ul>
<li>All <strong>direct material and labour</strong> costs;</li>
<li>A reasonable share of <strong>overhead</strong>;</li>
<li><strong>Capitalised interest</strong> on debt incurred to <em>finance the construction</em> — only during the construction period. After the asset is placed in service, interest goes back to being a period expense.</li>
</ul>

<h3>Costs after acquisition — improvement vs. routine repair</h3>
<p>Once an asset is in service, expenditures fall into two camps:</p>
<ul>
<li><strong>Improvements / betterments</strong> enhance usefulness or extend useful life beyond the original expectation ⇒ <em>capitalise</em> (add to the asset; depreciate over remaining life).</li>
<li><strong>Routine repairs and maintenance</strong> just keep the asset operating at its original capacity ⇒ <em>expense</em> in the period incurred.</li>
</ul>

<h3>Depreciation: matching the cost to the periods it produces revenue</h3>
<p>Depreciation is the <em>systematic allocation</em> of the cost of a tangible long-term asset to expense over the periods that benefit. It is a cost-allocation device, not a valuation method. Two estimates are required:</p>
<ul>
<li><strong>Useful life</strong> — period over which the asset is expected to provide economic benefits (often shorter than physical life).</li>
<li><strong>Residual / salvage value</strong> — expected realisable value at the end of useful life (scrap, disposal, or resale).</li>
</ul>

<p>The amount to be allocated is the <strong>depreciable base = Cost − Residual value</strong>.</p>
<p>Three methods appear in the slides:</p>
<table class="tbl">
<thead><tr><th>Method</th><th>Pattern</th><th>Use when</th></tr></thead>
<tbody>
<tr><td><strong>Straight-line</strong></td><td>Equal expense each year</td><td>Asset gives even service across its life (default).</td></tr>
<tr><td><strong>Double-declining-balance (DDB)</strong></td><td>Accelerated; more expense in early years</td><td>Asset loses utility faster early (computers, vehicles).</td></tr>
<tr><td><strong>Units-of-production (UoP)</strong></td><td>Based on actual usage</td><td>Usage varies year to year (machine hours, miles flown).</td></tr>
</tbody>
</table>

<h3>Impairment</h3>
<p>If the market value of a long-term asset declines below its carrying amount and the decline is judged <em>permanent</em>, an impairment loss must be recognised. After write-down, future depreciation is computed on the lower carrying amount. Under IFRS impairments can be <em>reversed</em> (except for goodwill); under US GAAP they cannot.</p>

<h3>Intangibles</h3>
<p>Intangibles are <em>identifiable, non-monetary assets without physical substance</em>. The chapter notes that in 2022 total intangibles were ~$57 trillion across 55,000 listed companies, and 65% of those intangibles are <em>off</em> balance sheet — they are internally generated and not allowed to be capitalised. In tech, more than 80% of company value is attributed to intangibles.</p>

<p>Intangibles split into:</p>
<ul>
<li><strong>Separately transferable</strong> — patents, copyrights, trademarks, franchise rights. Recognised when <em>purchased</em>; capitalised cost amortised over the shorter of legal or useful life.</li>
<li><strong>Not separately transferable (Goodwill)</strong> — the excess of purchase price over the fair value of identifiable net assets in a business combination. Indefinite life, never amortised, tested for impairment annually.</li>
</ul>
`,

definitions: [
  { id:'def-lta', term:'Long-term operating asset', body:'An asset acquired to produce and deliver products and services that generate revenue, expected to help generate revenue for <em>multiple</em> periods.' },
  { id:'def-tang', term:'Tangible asset (PP&E)', body:'Has physical substance — land, buildings, machinery, fixtures, equipment, vehicles. Reported as Property, Plant &amp; Equipment.' },
  { id:'def-intang', term:'Intangible asset', body:'Identifiable, non-monetary asset <em>without</em> physical substance — patents, copyrights, trademarks, franchise rights. Provides specific legal rights and privileges.' },
  { id:'def-cap', term:'Capitalisation', body:'Recording an expenditure as an asset (rather than expense) because it produces future economic benefits beyond the current period. Capitalised costs cannot exceed expected future benefits.' },
  { id:'def-capex', term:'Capital expenditure (CapEx)', body:'Cash spent acquiring or improving long-term assets. Reported in <em>investing</em> cash flows on the Statement of Cash Flows.' },
  { id:'def-depr', term:'Depreciation', body:'Systematic allocation of the cost of a tangible long-term asset to expense over the periods that benefit. Cost is moved from balance sheet (asset) to income statement (depreciation expense).' },
  { id:'def-amort', term:'Amortisation', body:'Same idea as depreciation but for definite-life intangible assets. Usually straight-line; usually reported within SG&A on the income statement.' },
  { id:'def-base', term:'Depreciable base', body:'Cost − Residual value. The amount to be allocated over the useful life.' },
  { id:'def-life', term:'Useful life', body:'Period over which the asset is expected to provide economic benefits to the entity. Often shorter than the asset\'s physical life.' },
  { id:'def-rv', term:'Residual (salvage) value', body:'Expected realisable value at the end of the useful life — scrap, disposal, or resale value.' },
  { id:'def-acc-dep', term:'Accumulated Depreciation', body:'Contra-asset account. Cumulative total of depreciation expensed since acquisition. Offsets the asset cost on the balance sheet.' },
  { id:'def-nbv', term:'Net Book Value (NBV) / Carrying amount', body:'Cost − Accumulated Depreciation (− Accumulated Impairment). The asset\'s remaining un-allocated cost.' },
  { id:'def-sl', term:'Straight-line depreciation', body:'(Cost − Residual) ÷ Useful life. Equal annual expense across the entire life.' },
  { id:'def-ddb', term:'Double-declining-balance (DDB) depreciation', body:'Accelerated method. Annual depreciation = NBV at start of year × (2/n). No residual subtraction during the year, but stop depreciating when NBV reaches residual value.' },
  { id:'def-uop', term:'Units-of-production (UoP)', body:'Activity-based method. Per-unit rate = (Cost − Residual)/Total expected units. Annual depreciation = actual units × per-unit rate.' },
  { id:'def-impair', term:'Impairment loss', body:'Carrying amount > recoverable amount. Recognised immediately on the income statement; reduces the asset. Under IFRS recoverable = max(Fair value − costs to sell, Value-in-use). Under IFRS reversible (except for goodwill); under US GAAP not reversible.' },
  { id:'def-gain-loss', term:'Gain/Loss on disposal', body:'Proceeds (cash) − Net Book Value at the date of disposal. Positive ⇒ gain; negative ⇒ loss. Reported in income from continuing operations.' },
  { id:'def-rd', term:'Research and Development (R&D)', body:'<strong>US GAAP:</strong> all R&D expensed as incurred (no capitalisation). <strong>IFRS:</strong> research expensed; <em>development</em> can be capitalised once specific criteria are met (technical feasibility, intent and ability to complete, generation of probable future benefits, reliable measurement). IAS 38.' },
  { id:'def-patent', term:'Patent', body:'Exclusive right to produce a product or use a technology. <em>Purchased</em>: full cost capitalised and amortised. <em>Internally developed</em>: only legal and registration fees capitalised; underlying R&D expensed.' },
  { id:'def-copy', term:'Copyright', body:'Exclusive right granted to author/composer/playwright, lasting life of creator + 25 to 70 years. Cost capitalised and amortised over expected remaining economic life.' },
  { id:'def-tm', term:'Trademark', body:'Registered name, logo, package design, image, jingle, slogan associated with a product. <em>Purchased</em>: capitalise and amortise. <em>Internally developed</em>: expense as incurred. Advertising is always expensed even if it enhances the trademark\'s value.' },
  { id:'def-franchise', term:'Franchise rights', body:'Contractual right to operate a particular business in an area for a defined period. Cost includes start-up costs and franchise fees, capitalised and amortised.' },
  { id:'def-goodwill', term:'Goodwill', body:'Excess of purchase price over the fair value of identifiable net assets acquired in a business combination. <strong>Only</strong> recognised when one company buys another (never internally generated). Indefinite life, never amortised, tested annually for impairment, never revalued upward once impaired.' },
  { id:'def-ppet', term:'PP&E Turnover (PPET)', body:'Sales ÷ Average PP&E (net). Measures how efficiently management uses plant assets to generate revenue. Higher ⇒ less capital tied up per unit of sales.' },
  { id:'def-pct-dep', term:'Percent depreciated', body:'Accumulated Depreciation ÷ Cost of depreciable assets (excluding land). Indicates how much of the asset base has already been used up. Airbus reported >60% — meaning a re-investment cycle is likely soon.' },
],

formulas: [
  { id:'f-cap', name:'Capitalised cost of a purchased asset',
    expr:'\\text{Cost} = \\text{Purchase price} + \\text{freight} + \\text{import duties} + \\text{installation} + \\text{testing} + \\text{site prep}',
    when:'Determining the asset\'s opening balance. Routine repairs, training, and post-acquisition financing interest are NOT capitalised.' },
  { id:'f-sl', name:'Straight-line depreciation',
    expr:'\\text{Annual Dep.}_{\\text{SL}} = \\frac{\\text{Cost} - \\text{Residual}}{n}',
    when:'Default method when the asset is consumed evenly over time.' },
  { id:'f-ddb', name:'Double-declining-balance depreciation',
    expr:'\\text{Annual Dep.}_{\\text{DDB}} = \\text{NBV}_{\\text{start of year}} \\times \\frac{2}{n}',
    when:'Accelerated; faster expense in early years. Stop when NBV would drop below residual.' },
  { id:'f-uop', name:'Units-of-production depreciation',
    expr:'\\text{Per-unit rate} = \\frac{\\text{Cost} - \\text{Residual}}{\\text{Total expected units}} \\quad;\\quad \\text{Annual Dep.} = \\text{Actual units} \\times \\text{Per-unit rate}',
    when:'When usage varies across years (vehicle miles, machine hours, units of output).' },
  { id:'f-nbv', name:'Net Book Value',
    expr:'\\text{NBV} = \\text{Cost} - \\text{Accumulated Depreciation} - \\text{Accumulated Impairment}',
    when:'Always — the carrying amount used in disposal, impairment and ratio analysis.' },
  { id:'f-gl', name:'Gain or loss on disposal',
    expr:'G/L = \\text{Cash received} - \\text{NBV} = \\text{Cash} - (\\text{Cost} - \\text{Acc. Dep.})',
    when:'When an asset is sold or scrapped. Positive ⇒ gain; negative ⇒ loss; both go to operating income.' },
  { id:'f-amort', name:'Amortisation of definite-life intangible',
    expr:'\\text{Annual Amort.} = \\frac{\\text{Capitalised cost}}{\\min(\\text{Legal life},\\ \\text{Useful life})}',
    when:'Patents, copyrights, franchise rights — whichever life is shorter caps the amortisation period.' },
  { id:'f-impair-ifrs', name:'IFRS impairment test',
    expr:'\\text{Impairment loss} = \\max\\bigl(0,\\ \\text{Carrying amount} - \\text{Recoverable amount}\\bigr) \\\\ \\text{Recoverable amount} = \\max(\\text{FV − costs to sell},\\ \\text{Value-in-use})',
    when:'Annual indication test for definite-life PPE/intangibles; mandatory annual test for goodwill and indefinite-life intangibles.' },
  { id:'f-ppet', name:'PP&E Turnover',
    expr:'\\text{PPET} = \\frac{\\text{Sales}}{\\text{Average net PP\\&E}}',
    when:'Operating efficiency: how much sales is generated per dollar of plant assets.' },
  { id:'f-pctdep', name:'Percent depreciated',
    expr:'\\%\\text{ Depreciated} = \\frac{\\text{Accumulated Depreciation}}{\\text{Cost of depreciable assets (excl. land)}}',
    when:'Asset-age indicator. High % ⇒ aging fleet ⇒ likely upcoming CapEx wave.' },
],

derivations: [
  {
    title: 'Why straight-line and DDB give the same total depreciation but different patterns',
    body: `<p>Both methods must allocate exactly <em>Cost − Residual</em> over the useful life — that is the depreciable base. The only thing that differs is the <em>timing</em>.</p>
    <p>Tanner Enterprises\' delivery truck: cost $80,000, useful life 5 years, residual $8,000 ⇒ depreciable base $72,000.</p>
    <table class="tbl">
    <thead><tr><th>Year</th><th>SL Expense</th><th>SL NBV (year-end)</th><th>DDB Expense</th><th>DDB NBV (year-end)</th></tr></thead>
    <tbody>
    <tr><td>1</td><td>$14,400</td><td>$65,600</td><td>$80,000 × 40% = $32,000</td><td>$48,000</td></tr>
    <tr><td>2</td><td>14,400</td><td>51,200</td><td>48,000 × 40% = 19,200</td><td>28,800</td></tr>
    <tr><td>3</td><td>14,400</td><td>36,800</td><td>28,800 × 40% = 11,520</td><td>17,280</td></tr>
    <tr><td>4</td><td>14,400</td><td>22,400</td><td>17,280 × 40% = 6,912</td><td>10,368</td></tr>
    <tr><td>5</td><td>14,400</td><td>8,000</td><td>10,368 − 8,000 = 2,368*</td><td>8,000</td></tr>
    <tr><td><strong>Total</strong></td><td><strong>$72,000</strong></td><td></td><td><strong>$72,000</strong></td><td></td></tr>
    </tbody>
    </table>
    <p>* Year 5 of DDB does <strong>not</strong> use the 40% rule, because that would push NBV below the $8,000 residual. Instead, depreciate just enough to land at residual.</p>`
  },
  {
    title: 'Change in accounting estimate (prospective treatment)',
    body: `<p>Estimates of useful life and residual value are made when an asset is acquired. When circumstances change, the estimate can be revised. Because depreciation is an <em>estimate</em>, IFRS and US-GAAP both apply changes <strong>prospectively</strong> — past depreciation is not restated.</p>
    <p>Three-step procedure (slide example: Tanner extends life from 5 → 7 years after 4 years of SL):</p>
    <ol>
    <li><strong>Compute NBV at the date of change.</strong> Cost $80,000 − 4 × $14,400 = $22,400.</li>
    <li><strong>Compute remaining useful life.</strong> Originally 5; 4 used; +2 added ⇒ 3 years remaining.</li>
    <li><strong>Compute new annual depreciation.</strong> (NBV − new residual) ÷ remaining life. If residual stays $8,000: ($22,400 − $8,000) / 3 = $4,800 per year.</li>
    </ol>
    <p>Past years are <em>not</em> restated; the new $4,800 figure is used from the year of change onward.</p>`
  },
  {
    title: 'On disposal: separating the cash effect from the income-statement effect',
    body: `<p>Two things happen on the same day when an LTA is sold:</p>
    <ul>
    <li><strong>Income statement:</strong> a Gain or Loss = Cash − NBV is recognised in <em>operating income</em>.</li>
    <li><strong>Cash flow statement:</strong> the <em>full</em> cash inflow appears in CFI (investing). The gain/loss does NOT — but in CFO (the indirect-method reconciliation), the gain is <em>subtracted</em> from net income (or the loss <em>added back</em>) to undo its non-cash inflation of CFO.</li>
    </ul>
    <p>Slide example: Tanner sells the $80,000 truck for $25,000 cash after 4 years of SL. NBV = $80,000 − 4 × $14,400 = $22,400. Gain = $25,000 − $22,400 = $2,600.</p>
    <p>Journal entry:</p>
    <pre><code>Cash                          25,000
Accumulated Depreciation      57,600
    Truck                              80,000
    Gain on sale of truck               2,600</code></pre>
    <p>On the cash flow statement: CFI inflow = $25,000; CFO reconciliation subtracts the $2,600 gain.</p>`
  },
  {
    title: 'Why goodwill exists at all — and why it can never be revalued upward',
    body: `<p>When Company A buys Company B, A pays a price (P). The accountant fair-values every <em>identifiable</em> asset and liability of B (including any previously unrecognised intangibles like brand names, customer lists, in-process R&D). The net of those fair values is the <em>fair value of identifiable net assets</em>.</p>
    <p><strong>Goodwill = Purchase price − FV of identifiable net assets.</strong></p>
    <p>It captures the parts of B\'s value that cannot be split out and sold separately: assembled workforce, reputation, expected synergies. Goodwill cannot be separated from the acquired business. Because it is <em>indefinite-lived</em> and <em>not separately measurable</em>, it is never amortised.</p>
    <p>However, goodwill <em>can</em> impair: if the market value of the acquired business falls below its book value (including goodwill), the difference is written down through a <strong>goodwill impairment</strong>. Once impaired, goodwill cannot be revalued upward — even if the business recovers — because that would re-introduce the very same uncertain self-generated value the standards refuse to recognise for ordinary firms.</p>`
  },
],

examples: [
  {
    title: 'Capitalising costs to land vs. new building',
    problem: 'A company buys a city-centre site for $1,200,000, plus a $90,000 demolition fee to raze the old structure on the lot, plus $35,000 in legal fees on the purchase, plus $3,000,000 to build a new office building on it. How is each cost classified?',
    hint: 'Costs to get the LAND ready for its intended use go to LAND. Costs to construct the BUILDING go to BUILDING.',
    steps: [
      { what: 'Site purchase $1,200,000 → LAND.', why: 'Direct purchase price.' },
      { what: 'Demolition / razing fee $90,000 → LAND, not the new building.', why: 'Razing is part of preparing the LAND for its intended use as the building site. This is the classic exam trap.' },
      { what: 'Legal fees on the purchase $35,000 → LAND.', why: 'Cost necessary to acquire the land.' },
      { what: 'Construction $3,000,000 → BUILDING.', why: 'Direct cost of the new structure.' },
    ],
    answer: 'Land = $1,325,000. Building = $3,000,000.',
    pitfall: 'Common error: putting the demolition cost on the new building. The slide rule is "costs to bring the LAND to its intended use" — and demolishing the old structure is part of that.',
  },
  {
    title: 'Straight-line depreciation and NBV after 2 years',
    problem: 'Tanner Enterprises buys a delivery truck on 1/1/2024 for $80,000. Useful life = 5 years; residual value = $8,000. Use straight-line. (a) Annual depreciation. (b) NBV at 12/31/2025.',
    hint: 'Depreciable base = Cost − Residual; rate = 1/n.',
    steps: [
      { what: 'Depreciable base = 80,000 − 8,000 = $72,000.', why:'Cost minus residual.' },
      { what: 'Rate = 1/5 = 20%; Annual depreciation = $72,000 × 20% = $14,400.', why:'Equal annual amount.' },
      { what: 'After 2 years: Acc. Dep. = 2 × 14,400 = $28,800.', why:'Cumulative.' },
      { what: 'NBV (12/31/2025) = 80,000 − 28,800 = $51,200.', why:'Carrying amount on the balance sheet.' },
    ],
    answer: 'Annual depreciation $14,400; NBV at 12/31/2025 = $51,200.',
  },
  {
    title: 'Double-declining-balance depreciation — full schedule',
    problem: 'Same truck (cost $80,000, useful life 5, residual $8,000) but using DDB. Build the full 5-year schedule.',
    hint: 'DDB rate = 2 × SL rate. Apply to NBV (cost − accumulated depreciation), ignoring residual until the last step.',
    steps: [
      { what: 'DDB rate = 2 × (1/5) = 40%.', why:'Double the straight-line rate.' },
      { what: 'Year 1: 80,000 × 40% = $32,000 → NBV $48,000.', why:'Apply rate to opening NBV.' },
      { what: 'Year 2: 48,000 × 40% = $19,200 → NBV $28,800.', why:'NBV declines.' },
      { what: 'Year 3: 28,800 × 40% = $11,520 → NBV $17,280.', why:'Declining-balance pattern.' },
      { what: 'Year 4: 17,280 × 40% = $6,912 → NBV $10,368.', why:'Continue declining.' },
      { what: 'Year 5: 40% × 10,368 = $4,147 would push NBV below $8,000 residual → instead depreciate $10,368 − $8,000 = $2,368, ending NBV at exactly $8,000.', why:'Cannot depreciate below residual; final-year adjustment.' },
      { what: 'Sum of expense: 32,000 + 19,200 + 11,520 + 6,912 + 2,368 = $72,000 ✓.', why:'Same total as SL — only the timing differs.' },
    ],
    answer: 'Total DDB depreciation $72,000; year 5 expense capped at $2,368 to leave NBV at $8,000.',
    pitfall: 'Do NOT subtract residual when computing the rate × NBV product. Residual only constrains the last year.',
  },
  {
    title: 'Units-of-production depreciation',
    problem: 'Same Tanner truck ($80,000 cost, $8,000 residual) but expected to provide 80,000 miles of service. Driven 18,000 miles in year 1. Compute year-1 depreciation and ending NBV.',
    hint: 'Per-mile rate first, then × actual miles.',
    steps: [
      { what: 'Depreciable base = 80,000 − 8,000 = $72,000.', why:'Same as SL.' },
      { what: 'Per-mile rate = $72,000 / 80,000 miles = $0.90 per mile.', why:'Activity-based rate.' },
      { what: 'Year-1 depreciation = 18,000 miles × $0.90 = $16,200.', why:'Activity-based expense.' },
      { what: 'NBV (end of year 1) = 80,000 − 16,200 = $63,800.', why:'Carrying amount.' },
    ],
    answer: 'Year-1 depreciation $16,200; ending NBV $63,800.',
    alt: 'If the truck is driven only 5,000 miles in year 2, year-2 depreciation = $4,500. Expense follows usage, not the calendar.',
  },
  {
    title: 'Gain on disposal of equipment',
    problem: 'Tanner sells the $80,000 truck for $25,000 cash after 4 years of straight-line depreciation (life 5, residual $8,000). What is the gain or loss, and what hits CFO/CFI?',
    hint: 'Compute NBV first, then compare to cash.',
    steps: [
      { what: 'Annual SL = $14,400; Acc. Dep. after 4 years = 4 × 14,400 = $57,600.', why:'Cumulative.' },
      { what: 'NBV = 80,000 − 57,600 = $22,400.', why:'Carrying amount at sale date.' },
      { what: 'Gain = Cash − NBV = 25,000 − 22,400 = $2,600.', why:'Proceeds exceed NBV ⇒ gain.' },
      { what: 'CFI inflow = full cash $25,000 (NOT the gain).', why:'Investing section reports cash effects of buying / selling LTAs.' },
      { what: 'CFO reconciliation: subtract $2,600 gain from net income (indirect method) so cash flow is not double-counted.', why:'Gain is non-cash component of NI for CFO purposes.' },
    ],
    answer: 'Gain $2,600 on the income statement; CFI inflow $25,000; CFO subtracts the $2,600 gain.',
    pitfall: 'Common slip: putting the gain (not the cash) into CFI, or forgetting the CFO add-back/subtract on the indirect method.',
  },
  {
    title: 'Loss on disposal — solve for selling price',
    problem: 'A company sells a machine that originally cost $60,000. Accumulated depreciation at the disposal date = $45,000. Reported gain on sale = $6,000. What was the cash selling price?',
    hint: 'NBV first; selling price = NBV + Gain.',
    steps: [
      { what: 'NBV = 60,000 − 45,000 = $15,000.', why:'Cost minus accumulated depreciation.' },
      { what: 'Cash = NBV + Gain = 15,000 + 6,000 = $21,000.', why:'Reverse-engineering the disposal entry.' },
    ],
    answer: 'Selling price = $21,000.',
  },
  {
    title: 'Patent amortisation (Moe\'s Southwest Grill)',
    problem: 'Moe\'s buys a patent for $80,000 with 10 years of legal life remaining, but management estimates 5 years of useful benefits. Annual amortisation?',
    hint: 'Amortise over the SHORTER of legal or useful life.',
    steps: [
      { what: 'Useful life (5 years) < Legal life (10 years) ⇒ amortise over 5 years.', why:'Conservative; matches expected revenue period.' },
      { what: 'Annual amortisation = $80,000 / 5 = $16,000.', why:'Straight-line is the convention.' },
    ],
    answer: 'Annual amortisation expense $16,000; ending NBV after year 1 = $80,000 − $16,000 = $64,000.',
  },
  {
    title: 'Trademark impairment (SatCo)',
    problem: 'After 5 years of operations, regulatory changes make SatCo\'s trademark permanently impaired. Management determines fair market value = $40,000 and book value = $62,000. Record the impairment.',
    hint: 'Impairment loss = Carrying amount − Fair value.',
    steps: [
      { what: 'Loss = 62,000 − 40,000 = $22,000.', why:'Carrying amount falls to fair value.' },
      { what: 'Journal entry: Dr Loss due to impairment of trademark $22,000; Cr Trademark $22,000.', why:'Reduce asset directly; recognise loss on income statement.' },
      { what: 'New carrying amount of trademark = $40,000 going forward.', why:'Future amortisation, if any, is based on the new amount.' },
    ],
    answer: 'Impairment loss $22,000; trademark now carried at $40,000.',
    pitfall: 'Under US GAAP this impairment cannot be reversed even if regulations change back. Under IFRS the write-down can be reversed up to the original carrying amount (less amortisation that would have occurred) — except for goodwill, which is never reversed.',
  },
  {
    title: 'Buying equipment — back-out CapEx from balance-sheet movement',
    problem: 'Company X reports PP&E (net) $670,000 at 12/31/2017 and $980,000 at 12/31/2018. Accumulated depreciation $23,500 (2017) and $25,000 (2018). No PP&E was sold during 2018. How much cash did Company X spend on new equipment?',
    hint: 'Movement in gross PP&E equals the purchase. Use net + Acc. Dep. to back into gross.',
    steps: [
      { what: 'Gross PP&E 2018 = 980,000 + 25,000 = $1,005,000.', why:'Net + Acc. Dep. = Gross.' },
      { what: 'Gross PP&E 2017 = 670,000 + 23,500 = $693,500.', why:'Same logic.' },
      { what: 'Δ Gross PP&E = 1,005,000 − 693,500 = $311,500. Since no asset was sold, this entire change equals the new equipment purchased for cash.', why:'No disposals removed gross cost.' },
    ],
    answer: 'Company X spent $311,500 cash on new equipment in 2018.',
    alt: 'Variant from the practice set: if only NET PP&E and the year\'s depreciation expense are given, CapEx ≈ ΔNet PP&E + Depreciation. Example: net rises from $75,000 to $90,300 with $9,850 depreciation ⇒ purchase = $15,300 + $9,850 = $25,150.',
  },
],

memory: [
  { label:'Mnemonic — CISTL for capitalised cost', body:'<strong>C</strong>ost (purchase price), <strong>I</strong>nstallation, <strong>S</strong>hipping, <strong>T</strong>esting, <strong>L</strong>egal/duties. (Add site prep and asset-retirement obligations as needed.)' },
  { label:'Mnemonic — "TROUBLE" costs are NOT capitalised', body:'<strong>T</strong>raining, <strong>R</strong>outine repairs, <strong>O</strong>perating supplies, <strong>U</strong>tilities, <strong>B</strong>orrowing interest <em>after</em> acquisition (mostly), <strong>L</strong>ate fees, <strong>E</strong>veryday admin.' },
  { label:'Visual', body:'Picture the asset arriving at your warehouse. Every dollar you must spend before it can earn money for you = capitalised. Once it is running, repairs and training become period expenses.' },
  { label:'One-liner', body:'<em>"Land is never depreciated; land improvements are."</em> Sidewalks, fencing, parking lots = land improvements (depreciable).' },
  { label:'One-liner', body:'<em>"Razing the old building goes to LAND, not the new building."</em> Classic exam trap.' },
  { label:'Disposal trick', body:'<em>"On disposal, CFI shows the FULL cash; the gain/loss appears only on the income statement."</em> The CFO indirect-method reconciliation removes the gain/loss so cash is not double-counted.' },
  { kind:'pitfall', body:'<strong>Internally generated goodwill is NEVER recognised.</strong> Only goodwill from acquiring another business is on the books; tested annually for impairment, not amortised, never revalued upward once impaired.' },
  { kind:'pitfall', body:'<strong>R&D split:</strong> US GAAP — all R&D expensed. IFRS — research expensed; <em>development</em> capitalised once IAS 38 criteria are met (technical feasibility, intent, ability to use/sell, probable future benefits, reliable measurement).' },
  { kind:'pitfall', body:'<strong>DDB does not subtract residual</strong> when calculating the rate × NBV product. Residual only matters as a floor in the last year (NBV cannot go below it).' },
  { kind:'pitfall', body:'<strong>Impairment recoverable amount</strong> under IFRS = max(FV − costs to sell, Value-in-use). Don\'t use replacement cost. Reversible (except for goodwill); not reversible under US GAAP.' },
  { kind:'pitfall', body:'<strong>Amortisation life of intangibles</strong> = the SHORTER of legal life and useful life. Indefinite-life intangibles (incl. goodwill) are not amortised, only impairment-tested annually.' },
],

connections: '<p>Chapter 6 connects to almost every other chapter. <strong>Ch 5 (Inventories)</strong>: PP&E depreciation can flow into inventory cost (production overhead allocated to WIP and finished goods) — and from there into COGS. <strong>Ch 7 (Liabilities & Bonds)</strong>: most CapEx is financed with debt, so this chapter\'s assets are the collateral for next chapter\'s notes and bonds; capitalised interest on self-constructed assets uses Ch 7\'s effective-rate logic. <strong>Ch 11 (Cash Flow Statement)</strong>: depreciation, amortisation, and impairment are all <em>non-cash</em> adjustments added back in CFO; full cash from disposals goes in CFI; gains/losses are removed from CFO via the indirect-method reconciliation. <strong>Ch 12 (Ratios)</strong>: PP&E Turnover (Sales / avg PP&E), Asset Turnover (Sales / avg Total Assets), and Return on Assets all rely on the carrying values produced here. The "hidden assets" message — that internally generated intangibles are not capitalised — also creates an upward bias in turnover and ROE that analysts must adjust for when comparing tech-heavy IFRS firms with traditional manufacturers.</p>',

};

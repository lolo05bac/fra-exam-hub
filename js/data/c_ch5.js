// Chapter 5 — Reporting and Analyzing Inventory and Cost of Goods Sold
// Sourced directly from the FRA Chapter 5 slide deck (slides_ch5.txt) and the
// Chapter-5 practice-set PDF (FRA_5_Inventory.json). Companies referenced in
// the lectures: VTech, Nintendo, Phelp's Inc., Stocken, Crane, Kroger, Apple,
// Hewlett-Packard, Samsung, Exxon Mobil, BP, Home Depot.
window.CHAPTER_CONTENT = window.CHAPTER_CONTENT || {};
window.CHAPTER_CONTENT.ch5 = {

intro: `
<p>Chapter 5 is about how a company turns the dollars it spends to <em>buy or build</em> goods into the <strong>cost of goods sold (COGS)</strong> that appears on the income statement, and the <strong>inventory</strong> that sits on the balance sheet until it is sold. Inventory is usually one of the largest current assets at retailers and manufacturers, and COGS is typically the largest single expense, so the choices made here move gross profit, taxes, and operating cash flow in big ways.</p>

<p>Two ideas drive everything that follows. First, the <strong>matching principle</strong>: expenses are recognised in the same period as the related revenue. Inventory cost is therefore <em>capitalised</em> when goods are purchased or produced and only becomes COGS when those goods are sold. Second, when units are <em>identical</em> but were bought at <em>different prices</em>, accounting needs a rule to decide which costs leave inventory first. That rule is the <strong>cost-flow assumption</strong>: FIFO, LIFO, or Weighted-Average Cost.</p>

<p>The chapter walks through (i) what costs are <em>inventoriable</em>, (ii) the difference between merchandiser and manufacturer inventory categories, (iii) periodic vs. perpetual inventory systems, (iv) the four cost-flow assumptions and how each one behaves in rising-price periods, (v) the lower-of-cost-and-NRV rule (LCNRV), (vi) the LIFO reserve and how analysts use it to compare LIFO and FIFO firms, and (vii) the diagnostic ratios <strong>Gross Profit Margin</strong>, <strong>Inventory Turnover</strong>, and <strong>Days Inventory Outstanding</strong>.</p>

<h3>Three approaches to expense recognition</h3>
<p>Before drilling into inventory specifically, the slides remind us how <em>any</em> expense is recognised. Operating costs fall into one of three buckets:</p>
<table class="tbl">
<thead><tr><th>Approach</th><th>When used</th><th>Example</th></tr></thead>
<tbody>
<tr><td><strong>Direct association</strong></td><td>The cost is directly tied to a specific revenue transaction.</td><td><em>COGS</em>, warranty cost</td></tr>
<tr><td><strong>Systematic allocation</strong></td><td>Cost benefits multiple periods but is not tied to any one sale.</td><td>Depreciation</td></tr>
<tr><td><strong>Immediate recognition</strong></td><td>Cost can be associated with a period generally but not with a specific sale.</td><td>R&amp;D, marketing, admin salaries, insurance, utilities</td></tr>
</tbody>
</table>
<p>Inventory cost is the textbook case of <strong>direct association</strong>: the dollars stay on the balance sheet until the unit they belong to is sold, then they hit the income statement as COGS in the same period as the revenue.</p>

<h3>What is "inventoriable cost"?</h3>
<p>For a <strong>merchandiser</strong> (a retailer like Home Depot), inventory is reported at <em>cost</em>, which captures every expenditure needed to bring goods to a saleable condition and location:</p>
<ul>
<li>Purchase price (net of trade and volume discounts)</li>
<li>Freight-in / transportation</li>
<li>Import duties and non-recoverable taxes</li>
<li>Handling and preparation for sale</li>
<li>Cash / early-payment discounts when applicable (e.g. <em>2/10, n/30</em> = 2% discount if paid within 10 days, otherwise full price due in 30 days)</li>
</ul>
<p><em>Excluded</em>: selling expenses, general administrative costs, and (mostly) post-acquisition financing interest. Those are immediately expensed.</p>

<p>For a <strong>manufacturer</strong>, inventory has three categories that flow into one another:</p>
<ol>
<li><strong>Raw Materials Inventory</strong> — parts and materials purchased from suppliers for the production process.</li>
<li><strong>Work-in-Process (WIP) Inventory</strong> — partially completed goods; includes direct materials, direct labour, and an appropriate share of <em>production overhead</em>.</li>
<li><strong>Finished Goods Inventory</strong> — completed products ready for delivery to customers.</li>
</ol>
<p>VTech's footnote (March 31, 2020) is a textbook example: stocks at lower of cost and NRV; cost includes "materials, direct labour and an appropriate share of production overheads incurred in bringing the inventories to their present location and condition."</p>

<h3>Periodic vs. perpetual inventory systems</h3>
<table class="tbl">
<thead><tr><th></th><th>Periodic</th><th>Perpetual</th></tr></thead>
<tbody>
<tr><td>Inventory account update</td><td>Only at period end (after a physical count)</td><td>Continuously, after every sale and purchase</td></tr>
<tr><td>COGS measurement</td><td>Plug at period-end: <code>COGS = BI + P − EI</code></td><td>Recorded at the time of each sale</td></tr>
<tr><td>Best for</td><td>Many small-ticket items, low-tech systems</td><td>High-value items, scanned barcodes, ERP systems</td></tr>
<tr><td>Shrinkage detection</td><td>Buried inside COGS</td><td>Visible as a discrepancy between books and count</td></tr>
</tbody>
</table>
<p>The lecture introduces COGS calculation under the <strong>periodic</strong> system because every cost-flow problem in the slides assumes you allocate the period's cost-of-goods-available-for-sale at the end of the period.</p>
`,

definitions: [
  { id:'def-inventory', term:'Inventory', body:'Goods held for resale (merchandiser) or in/awaiting production (manufacturer). Capitalised on the balance sheet as a <em>current asset</em> until sold; transferred to COGS when sold.' },
  { id:'def-cogs', term:'Cost of Goods Sold (COGS)', body:'The cost of inventory items sold during the period. Matched against sales revenue to produce gross profit. Usually the largest single expense for retailers and manufacturers.' },
  { id:'def-gp', term:'Gross profit', body:'Sales revenue − COGS. The margin remaining after the direct cost of the goods sold; before operating expenses.' },
  { id:'def-cogas', term:'Cost of Goods Available for Sale (COGAS)', body:'Beginning inventory + Net purchases (or production cost). The pool of cost that the cost-flow assumption splits between ending inventory (balance sheet) and COGS (income statement).' },
  { id:'def-rm', term:'Raw Materials Inventory', body:'Manufacturer category: parts and materials purchased from suppliers and not yet started in production.' },
  { id:'def-wip', term:'Work-in-Process (WIP)', body:'Manufacturer category: partially completed goods; carries direct materials, direct labour, and an appropriate share of production overhead.' },
  { id:'def-fg', term:'Finished Goods', body:'Manufacturer category: completed units ready for sale.' },
  { id:'def-inv-cost', term:'Inventoriable cost', body:'All costs to bring inventory to its <em>present location and condition</em>: purchase price + freight-in + import duties + handling + (production: direct labour + share of overhead). Selling and admin costs are <strong>excluded</strong>.' },
  { id:'def-disc-cash', term:'Cash / early-payment discount', body:'Stated as a percentage of purchase price, e.g. <em>2/10, n/30</em>: 2% off if paid within 10 days, otherwise full purchase price within 30 days.' },
  { id:'def-periodic', term:'Periodic inventory system', body:'Inventory and COGS are updated only at period-end via a physical count and the formula <code>COGS = BI + Purchases − EI</code>.' },
  { id:'def-perpetual', term:'Perpetual inventory system', body:'Inventory and COGS are updated continuously after every purchase and sale (e.g. with barcode scanners). Discrepancy with the year-end count flags shrinkage.' },
  { id:'def-fifo', term:'FIFO (First-In, First-Out)', body:'Cost-flow assumption: the <em>oldest</em> costs leave inventory first (go to COGS); the <em>newest</em> costs remain in ending inventory. Allowed under both US GAAP and IFRS.' },
  { id:'def-lifo', term:'LIFO (Last-In, First-Out)', body:'Cost-flow assumption: the <em>newest</em> costs leave inventory first; the <em>oldest</em> costs remain in ending inventory. <strong>Allowed under US GAAP only — banned under IFRS.</strong>' },
  { id:'def-wac', term:'Weighted-Average Cost (AC)', body:'Cost-flow assumption: COGS and ending inventory are valued at the <em>weighted-average</em> per-unit cost of the goods available for sale. Allowed under US GAAP and IFRS.' },
  { id:'def-spec-id', term:'Specific identification', body:'Each item is tracked individually and its actual cost is matched to it on sale. Only practical for low-volume, high-value, distinguishable items (cars, jewellery, custom equipment).' },
  { id:'def-lcnrv', term:'Lower of Cost and NRV (LCNRV)', body:'IFRS rule: inventory on the balance sheet must not exceed Net Realisable Value (NRV). If NRV &lt; cost, write the inventory <em>down</em> to NRV (charge to COGS). If NRV later recovers, IFRS allows a <em>reversal</em> up to the original cost. <strong>US GAAP no longer allows reversal.</strong>' },
  { id:'def-nrv', term:'Net Realisable Value (NRV)', body:'Estimated selling price in the ordinary course of business <em>less</em> estimated costs of completion and selling expenses.' },
  { id:'def-lcm', term:'Lower of Cost or Market (LCM)', body:'Older US-GAAP rule using <em>replacement cost</em> (bounded by NRV-floor and NRV-ceiling) instead of NRV. Largely superseded by LCNRV in 2015 except for LIFO and retail-method inventories.' },
  { id:'def-lifo-reserve', term:'LIFO reserve', body:'Difference between LIFO inventory carrying value and what inventory <em>would</em> be under FIFO. Disclosed by US-GAAP companies that use LIFO. Lets analysts convert LIFO numbers to FIFO for comparison.' },
  { id:'def-lifo-liq', term:'LIFO liquidation', body:'When a LIFO firm sells more units than it buys, old, low-cost layers flow into COGS. Result: artificially low COGS and a <em>spike</em> in gross profit, plus higher taxes. Must be disclosed because it is non-recurring.' },
  { id:'def-invt', term:'Inventory Turnover (INVT)', body:'COGS ÷ Average Inventory. Number of times the inventory pile is "turned over" (sold) during the period. Higher is generally favourable.' },
  { id:'def-dio', term:'Days Inventory Outstanding (DIO)', body:'365 ÷ Inventory Turnover (or Avg. Inv. ÷ COGS × 365). Average number of days inventory sits on the shelves before being sold; an input to the cash conversion cycle.' },
  { id:'def-gpm', term:'Gross Profit Margin (GPM)', body:'(Sales − COGS) ÷ Sales. Pricing power and direct cost control. VTech\'s GPM dropped from 33% in 2018 to ~30% in 2019 and 2020.' },
],

formulas: [
  { id:'f-cogs', name:'COGS identity (the most-used inventory equation)',
    expr:'\\text{COGS} = \\text{Beginning Inventory} + \\text{Purchases} - \\text{Ending Inventory}',
    when:'Always. Solve for any one of the four when the other three are given. Underlies every periodic-inventory exam question.' },
  { id:'f-purch', name:'Purchases (plug from COGS)',
    expr:'\\text{Purchases} = \\text{COGS} + \\text{Ending Inventory} - \\text{Beginning Inventory}',
    when:'When the question asks "How much did the company buy this period?"' },
  { id:'f-cogas', name:'Cost of goods available for sale',
    expr:'\\text{COGAS} = \\text{Beginning Inventory} + \\text{Purchases}',
    when:'Step 1 of every cost-flow problem: total the pool you\'ll split between EI and COGS.' },
  { id:'f-wac', name:'Weighted-average unit cost',
    expr:'\\overline{c} = \\frac{\\sum (Q_i \\times c_i)}{\\sum Q_i} = \\frac{\\text{COGAS}}{\\text{Total units available}}',
    when:'Average-cost method. Multiply this by units sold (COGS) or units left (EI).' },
  { id:'f-gp', name:'Gross profit and Gross profit margin',
    expr:'\\text{GP} = \\text{Sales} - \\text{COGS} \\quad;\\quad \\text{GPM} = \\frac{\\text{Sales} - \\text{COGS}}{\\text{Sales}}',
    when:'Profitability before operating expenses. GPM compares pricing power and cost control across years and competitors.' },
  { id:'f-invt', name:'Inventory Turnover',
    expr:'\\text{INVT} = \\frac{\\text{COGS}}{\\text{Average Inventory}}',
    when:'Efficiency: how many times stock was sold through during the period.' },
  { id:'f-dio', name:'Days Inventory Outstanding',
    expr:'\\text{DIO} = \\frac{365}{\\text{INVT}} = \\frac{\\text{Average Inventory}}{\\text{COGS}} \\times 365',
    when:'Days of inventory on hand. Feeds into the cash conversion cycle (CCC = DIO + DSO − DPO).' },
  { id:'f-lifo-cogs', name:'LIFO → FIFO COGS conversion (LIFO-reserve method)',
    expr:'\\text{COGS}_{\\text{FIFO}} = \\text{COGS}_{\\text{LIFO}} - \\Delta(\\text{LIFO reserve})',
    when:'Comparing a LIFO firm with a FIFO competitor. If the LIFO reserve grew, FIFO COGS is lower (and FIFO income is higher).' },
  { id:'f-lifo-ei', name:'LIFO → FIFO ending-inventory conversion',
    expr:'\\text{EI}_{\\text{FIFO}} = \\text{EI}_{\\text{LIFO}} + \\text{LIFO reserve}',
    when:'Restating the balance sheet. The LIFO reserve <em>is</em> the gap between FIFO EI and LIFO EI.' },
  { id:'f-lifo-tax', name:'Tax shield from using LIFO (rising prices)',
    expr:'\\Delta\\text{Tax}_{\\text{LIFO vs FIFO}} = -t \\times \\Delta(\\text{LIFO reserve})',
    when:'Quantifying the cumulative cash-tax saving from LIFO; <code>t</code> is the income-tax rate.' },
],

derivations: [
  {
    title: 'Why FIFO yields the highest income in rising-price periods',
    body: `<p>Start from the COGS identity: <code>COGS = BI + Purchases − EI</code>. The <em>pool</em> (BI + Purchases) is identical under every cost-flow assumption — only the <em>split</em> between EI and COGS changes.</p>
    <p>If unit costs are rising, the most recent units cost the most. <strong>FIFO</strong> assigns those expensive new layers to <em>ending inventory</em> and leaves cheap old layers in COGS. The result: low COGS, high gross profit, high net income, high taxes, low remaining cash.</p>
    <p><strong>LIFO</strong> does the reverse: expensive new layers go to COGS; cheap old layers stay in EI. High COGS, low gross profit, low net income, <em>low taxes, more cash</em>. (This tax shield is the chief reason US firms ever adopt LIFO.)</p>
    <p><strong>Average cost (AC)</strong> sits between the two for both EI and COGS.</p>
    <p>From the lecture's Phelps example (BI 100 @ $4, Purchase 400 @ $4.50, sold 460): COGAS = $2,200 in every method. The split:</p>
    <table class="tbl">
    <thead><tr><th></th><th>FIFO</th><th>LIFO</th><th>AC</th></tr></thead>
    <tbody>
    <tr><td>Ending Inventory (40 units)</td><td>$180 (40 × $4.50)</td><td>$160 (40 × $4.00)</td><td>$176 (40 × $4.40)</td></tr>
    <tr><td>COGS (460 units)</td><td>$2,020</td><td>$2,040</td><td>$2,024</td></tr>
    <tr><td>Gross profit (Sales 460×$12 = $5,520)</td><td>$3,500</td><td>$3,480</td><td>$3,496</td></tr>
    </tbody>
    </table>
    <p>FIFO ⇒ highest GP, LIFO ⇒ lowest GP, AC ⇒ in between. In <em>deflationary</em> periods the ranking flips.</p>`
  },
  {
    title: 'Inventory error self-correction over two periods',
    body: `<p>An error that misstates <em>ending</em> inventory in year 1 also misstates COGS in year 1 (opposite direction, by the COGS identity). But year 1\'s ending inventory is also year 2\'s <em>beginning</em> inventory, so COGS in year 2 is misstated in the <em>opposite</em> direction by the same amount.</p>
    <p>If EI in year 1 is <em>understated</em> by $X:</p>
    <ul>
    <li>Year 1: COGS overstated by $X → NI understated by $X → RE understated by $X (and assets understated by $X).</li>
    <li>Year 2: BI understated by $X → COGS understated by $X → NI overstated by $X. The cumulative two-year RE error is zero.</li>
    </ul>
    <p>The error <em>self-corrects</em> over two periods, but each year\'s reported income is wrong individually — and ratios computed from those years are too.</p>`
  },
  {
    title: 'LIFO reserve as an "unrealised holding gain"',
    body: `<p>In rising-price periods, the inventory a LIFO firm carries on its balance sheet is valued at <em>old, low</em> historical costs. The current replacement cost is much higher. The gap — <strong>LIFO Reserve = FIFO EI − LIFO EI</strong> — represents the cumulative price increase the firm has held while keeping inventory on the books at the old cost. Some texts call it an "unrealised holding gain."</p>
    <p>Because COGS feeds into income, a <em>change</em> in the LIFO reserve over the year has tax consequences:</p>
    <p><code>COGS<sub>FIFO</sub> = COGS<sub>LIFO</sub> − Δ LIFO Reserve</code></p>
    <p>So if reserve grew by $43m and the tax rate is 25%, the LIFO firm paid <code>0.25 × $43m = $10.75m</code> less tax this year than a FIFO twin would have. The full tax saving is the cumulative LIFO reserve × tax rate (Kroger example: reserve = $1,248m × 25% = $312m of cumulative tax savings).</p>`
  },
],

examples: [
  {
    title: 'FIFO, LIFO and Average Cost — Stocken Co. (E7-27 from practice set)',
    problem: `Stocken Company\'s inventory records:
      <table class="tbl">
      <tr><th>Layer</th><th>Units</th><th>Unit cost</th><th>Total</th></tr>
      <tr><td>Beginning</td><td>100</td><td>$46</td><td>$4,600</td></tr>
      <tr><td>Purchase #1</td><td>650</td><td>$42</td><td>$27,300</td></tr>
      <tr><td>Purchase #2</td><td>550</td><td>$38</td><td>$20,900</td></tr>
      <tr><td>Purchase #3</td><td>200</td><td>$36</td><td>$7,200</td></tr>
      <tr><td><strong>COGAS</strong></td><td><strong>1,500</strong></td><td></td><td><strong>$60,000</strong></td></tr>
      </table>
      Ending inventory = 350 units. Compute Ending Inventory and COGS under (a) FIFO, (b) Average Cost, (c) LIFO.`,
    hint: 'Under FIFO the ending inventory is composed of the most-recent layers; under LIFO the oldest; under AC use one weighted-average price.',
    steps: [
      { what: 'Total units sold = 1,500 − 350 = 1,150.', why: 'Same regardless of method.' },
      { what: '(a) FIFO — EI = 350 newest units. Take from the latest purchases first: 200 @ $36 = $7,200; 150 @ $38 = $5,700. EI<sub>FIFO</sub> = $12,900. COGS<sub>FIFO</sub> = $60,000 − $12,900 = $47,100.', why:'FIFO: oldest units leave first, so the 350 newest units remain in ending inventory.' },
      { what: '(c) LIFO — EI = 350 oldest units. 100 @ $46 = $4,600; 250 @ $42 = $10,500. EI<sub>LIFO</sub> = $15,100; COGS<sub>LIFO</sub> = $60,000 − $15,100 = $44,900.', why:'LIFO: newest units leave first, so the 350 oldest units remain in ending inventory.' },
      { what: '(b) Average Cost — Average unit cost = $60,000 / 1,500 = $40. EI<sub>AC</sub> = 350 × $40 = $14,000; COGS<sub>AC</sub> = $60,000 − $14,000 = $46,000.', why:'AC values both EI and COGS at the same per-unit weighted-average cost.' },
    ],
    answer: 'FIFO: EI = $12,900 / COGS = $47,100. LIFO: EI = $15,100 / COGS = $44,900. AC: EI = $14,000 / COGS = $46,000. (Note: unit costs are <em>falling</em> over the period, so LIFO has the highest EI and lowest COGS — the reverse of the rising-price ranking.)',
    alt: 'Always check the price direction first. Rising prices ⇒ FIFO highest EI/NI, LIFO lowest. Falling prices ⇒ ranking flips.',
  },
  {
    title: 'Phelps Inc. — FIFO vs LIFO vs AC in rising prices',
    problem: 'Phelps had 100 goggles @ $4 in beginning inventory, purchased 400 @ $4.50 during June, and sold 460 @ $12. Compute COGS and EI under each method.',
    hint: 'COGAS = 100 × 4 + 400 × 4.50 = $400 + $1,800 = $2,200. Total units = 500; sold 460; EI = 40 units.',
    steps: [
      { what: 'FIFO — first 100 sold @ $4, next 360 @ $4.50. COGS = 400 + 360×4.50 = 400 + 1,620 = $2,020. EI = 40 × $4.50 = $180.', why:'Oldest costs to COGS; newest stay in EI.' },
      { what: 'LIFO — first 400 sold @ $4.50, next 60 @ $4. COGS = 400×4.50 + 60×4 = 1,800 + 240 = $2,040. EI = 40 × $4 = $160.', why:'Newest costs to COGS; oldest stay in EI.' },
      { what: 'AC — average cost = (100×4 + 400×4.50)/500 = 2,200/500 = $4.40. COGS = 460 × $4.40 = $2,024. EI = 40 × $4.40 = $176.', why:'Single weighted-average cost applied to both COGS and EI.' },
      { what: 'Sales = 460 × $12 = $5,520. Gross profits: FIFO $3,500; LIFO $3,480; AC $3,496.', why:'Confirms that in rising prices FIFO maximises GP and LIFO minimises it.' },
    ],
    answer: 'FIFO: COGS $2,020, EI $180, GP $3,500. LIFO: COGS $2,040, EI $160, GP $3,480. AC: COGS $2,024, EI $176, GP $3,496.',
    pitfall: 'The whole pool ($2,200) is the same in every method. Only the split between EI and COGS changes.',
  },
  {
    title: 'Inventory error — understated ending inventory',
    problem: 'Year 1 ending inventory is understated by $60,000. What is the effect on year-1 reported numbers, and what happens in year 2?',
    hint: 'Use the COGS identity in both years; remember EI of year 1 is BI of year 2.',
    steps: [
      { what: 'Year 1: COGS = BI + Purchases − EI. Smaller EI ⇒ COGS overstated by $60,000.', why:'Direct from the identity.' },
      { what: 'Therefore Gross profit ↓ $60k, Net income ↓ $60k, Retained earnings ↓ $60k, Total assets ↓ $60k.', why:'Income flows to RE; EI is on the balance sheet.' },
      { what: 'Year 2: BI is now the (still) understated $60k. Year-2 COGS = (low) BI + Purchases − EI. Year-2 COGS is understated by $60k, so Year-2 NI is overstated by $60k.', why:'Year 1\'s ending becomes year 2\'s beginning.' },
      { what: 'Cumulative two-year effect on RE: −$60k + $60k = 0. The error <strong>self-corrects</strong>.', why:'But each individual year is misstated.' },
    ],
    answer: 'Year-1 NI understated by $60k; year-2 NI overstated by $60k; cumulative RE error after two years is zero.',
    pitfall: 'Self-correction does NOT mean "no harm done." Ratios for each year (gross margin, ROA, INVT) and trend analysis are all distorted.',
  },
  {
    title: 'Kroger — using the LIFO Reserve to convert to FIFO (P7-34)',
    problem: 'Kroger reports inventory of $7,781m at FY end with a LIFO reserve of $1,248m (last year\'s reserve was $1,291m). Net earnings were $1,907m. Tax rate = 25%. (a) Reported balance-sheet inventory. (b) Cumulative tax effect of using LIFO. (c) Net earnings if Kroger had used FIFO.',
    hint: 'LIFO reserve = FIFO EI − LIFO EI. The change in the reserve flips the sign of the COGS adjustment.',
    steps: [
      { what: '(a) The balance sheet shows LIFO inventory = $7,781m − $1,248m = $6,533m.', why:'The $7,781m figure shown on Kroger\'s balance sheet is actually the LIFO+reserve presentation; LIFO carrying amount is net of the reserve.' },
      { what: '(b) Cumulative tax saving = LIFO reserve × tax rate = $1,248m × 25% = $312m.', why:'The cumulative reserve is the cumulative pre-tax income deferred under LIFO; multiply by the tax rate for the cash-tax saving.' },
      { what: '(c) FIFO COGS would be lower (reserve fell from $1,291m to $1,248m, so Δ = −$43m). FIFO pre-tax income = LIFO pre-tax income + (−$43m × −1) = LIFO pre-tax income − $43m. So FIFO net income = $1,907m + (−$43m × (1 − 0.25)) = $1,907m − $32.25m = $1,874.75m.', why:'Reserve fell, meaning rising costs slowed or fell; LIFO COGS was actually lower than FIFO COGS would have been; therefore FIFO NI is lower.' },
    ],
    answer: '(a) $6,533m. (b) $312m cumulative tax saving. (c) $1,874.75m of net earnings under FIFO.',
    alt: 'When the LIFO reserve <em>increases</em>, FIFO income is higher than LIFO income; when it <em>decreases</em>, FIFO income is lower.',
  },
  {
    title: 'Inventory turnover and DIO — three retailers (P7-35)',
    problem: 'COGS and average inventory for FY2017: Samsung $129,290.7m / $21,668.4m; HP $47,803m / $5,924m; Apple $163,756m / $4,405.5m. Compute INVT and DIO.',
    hint: 'INVT = COGS / Avg Inv. DIO = 365 / INVT (or Avg Inv / COGS × 365).',
    steps: [
      { what: 'Samsung: INVT = 129,290.7 / 21,668.4 ≈ 5.97; DIO = 365 / 5.97 ≈ 61 days.', why:'Sells through stock about 6× per year.' },
      { what: 'HP: INVT = 47,803 / 5,924 ≈ 8.07; DIO ≈ 45 days.', why:'Faster than Samsung.' },
      { what: 'Apple: INVT = 163,756 / 4,405.5 ≈ 37.17; DIO ≈ 10 days.', why:'Apple outsources a large share of production to third-party manufacturers in Asia and reports inventories that "consist primarily of finished goods" — and is willing to be out of stock after new launches.' },
    ],
    answer: 'INVT: Samsung 5.97 / HP 8.07 / Apple 37.17. DIO: 61 / 45 / 10.',
    pitfall: 'High turnover is usually favourable, but very high turnover can also signal stock-outs and lost sales. Always interpret with margin and growth.',
  },
  {
    title: 'Exxon Mobil — converting LIFO to FIFO using the change in reserve (C7-37)',
    problem: 'Exxon\'s 2017 pre-tax earnings were $18.674bn. The LIFO reserve increased from $8.1bn (2016) to $10.8bn (2017). Pre-tax earnings under FIFO?',
    hint: 'When the reserve grows, FIFO COGS would have been <em>lower</em> than LIFO COGS by the change in the reserve, so FIFO pre-tax income is <em>higher</em> by that change.',
    steps: [
      { what: 'Δ LIFO reserve = $10.8bn − $8.1bn = $2.7bn.', why:'Rising oil prices in 2017 widened the gap.' },
      { what: 'Pre-tax FIFO earnings = $18.7bn + $2.7bn = $21.4bn.', why:'FIFO earnings = LIFO earnings + Δ reserve when the reserve grew.' },
    ],
    answer: '$21.4bn pre-tax under FIFO.',
    alt: 'Same logic, opposite sign, when the reserve <em>shrinks</em> (often during LIFO liquidations or falling prices).',
  },
],

memory: [
  { label: 'Mnemonic — FILA', body: '<strong>F</strong>IFO <strong>I</strong>ncome is <strong>L</strong>arger; <strong>A</strong>verage in between (in rising prices). Add: "LIFO Last is Lowest."' },
  { label: 'Mnemonic — FISH vs LISH', body: '<strong>F</strong>irst <strong>I</strong>n <strong>S</strong>till <strong>H</strong>ere ⇒ <em>LIFO</em> (oldest costs stay in EI). <strong>L</strong>ast <strong>I</strong>n <strong>S</strong>till <strong>H</strong>ere ⇒ <em>FIFO</em> (newest costs stay in EI). Use the one that helps you remember which costs are <em>left over</em>.' },
  { label: 'Visual', body: 'Imagine a stack of boxes labelled with their cost. FIFO pulls from the bottom (oldest); LIFO pulls from the top (newest). Whatever is left on the shelf is your ending inventory.' },
  { label: 'One-liner', body: '<em>"COGS = BI + Purchases − EI."</em> Memorise this. Every other inventory question is a rearrangement.' },
  { label: 'Cash-flow consequence', body: 'In rising prices, LIFO ⇒ lower NI ⇒ lower tax payment ⇒ <strong>more cash</strong>. This tax shield is the only reason most US firms use LIFO.' },
  { kind: 'pitfall', body: 'IFRS does NOT allow LIFO. If the question says "IFRS reporter," only FIFO, AC, or specific identification are on the table.' },
  { kind: 'pitfall', body: 'PP&E (factory equipment, buildings) is NOT inventory. Manufacturer inventory has only three categories: raw materials, WIP, finished goods.' },
  { kind: 'pitfall', body: 'Selling and administrative costs are <strong>never</strong> inventoriable. They go straight to operating expense.' },
  { kind: 'pitfall', body: 'LIFO liquidation: when a LIFO firm sells more than it buys, very old, cheap layers flow into COGS, spiking gross profit and taxes. The disclosure is required because the boost is non-recurring.' },
  { kind: 'pitfall', body: 'Under IFRS, LCNRV write-downs CAN be reversed (up to original cost) if NRV recovers; the reversal credits COGS. Under US GAAP write-downs are <em>permanent</em> (cannot reverse).' },
],

connections: '<p>Chapter 5 plugs straight into the rest of the course. <strong>Ch 4 (Revenue & AR)</strong> recognises the sale that triggers COGS — the matching principle is the same idea on the expense side. <strong>Ch 6 (Long-term assets)</strong> distinguishes inventory (current asset, no depreciation) from PP&E (long-term, depreciated). <strong>Ch 11 (Cash Flow Statement)</strong> shows ΔInventory as a working-capital adjustment in CFO: an increase in inventory means cash was spent without a matching expense yet, so CFO falls by that amount. <strong>Ch 12 (Ratios)</strong> uses Gross Profit Margin, Inventory Turnover, and DIO as core efficiency / profitability indicators, and DIO feeds the Cash Conversion Cycle (DIO + DSO − DPO). Finally, the LIFO-reserve adjustment from this chapter is how analysts make a US-GAAP LIFO firm comparable with an IFRS / US-GAAP FIFO firm.</p>',

};

// Chapter 8 — Leases (IFRS 16 / ASC 842)
// Sourced from FRA Chapter 8 slide deck (Prof. Raluca Ratiu).
window.CHAPTER_CONTENT = window.CHAPTER_CONTENT || {};
window.CHAPTER_CONTENT.ch8 = {

intro: `
<p>A <strong>lease</strong> is a contract between an asset\'s owner (the <em>lessor</em>) and a party that wants to use it (the <em>lessee</em>). The lessee gets the unrestricted right to use the asset over the lease term and agrees to make periodic payments and maintain the asset; the lessor keeps legal title. Leasing is attractive to lessees because it usually requires less equity than purchasing, payments can be tailored to cash flows, and the lessor keeps the depreciation tax shield. Lessors get a return on investment built into each lease payment, sized to the lessee\'s credit risk.</p>

<h3>The two reporting regimes</h3>
<p>For decades, lessees used to keep "operating leases" off-balance-sheet. That ended with the modern standards: under <strong>IFRS 16</strong> (effective 2019) almost every lease is on the lessee\'s balance sheet — a single <em>right-of-use lease accounting model</em>. Under US-GAAP\'s <strong>ASC 842</strong>, all leases are also on the balance sheet, but two lessee classifications remain (operating vs. finance), and they differ in how the income-statement expense is patterned.</p>
<p>The slides focus on the IFRS model because it is simpler. Most non-trivial leases create both a <em>Right-of-Use (ROU) asset</em> and a <em>Lease liability</em> on the lessee\'s balance sheet. There are only two narrow exemptions:</p>
<ul>
<li><strong>Short-term leases</strong> — term ≤ 12 months and no purchase option.</li>
<li><strong>Low-value leases</strong> — the underlying asset, when new, has a low absolute value (e.g., laptops, small office equipment; IFRS guidance suggests &lt; ~$5,000).</li>
</ul>
<p>For exempt leases, NO asset and NO liability are recorded; payments are simply expensed as <em>rent expense</em> when paid — the old "operating lease" treatment.</p>

<h3>Initial measurement</h3>
<p>For a non-exempt lease, both the ROU asset and the lease liability are measured at the <strong>present value of the lease payments</strong> discounted at the rate <em>implicit in the lease</em> (if known) or the lessee\'s <em>incremental borrowing rate</em> (IBR) otherwise. For a "simple" lease with no prepayments or initial direct costs, the asset and liability open at the SAME amount.</p>

<h3>Subsequent accounting under IFRS 16</h3>
<p>The single ROU model splits each lease payment into two pieces:</p>
<ul>
<li><strong>ROU asset</strong> is depreciated, typically straight-line over the SHORTER of the lease term and the asset\'s useful life. (Use the useful life only when title transfers at the end of the lease.)</li>
<li><strong>Lease liability</strong> is amortised like a bond: each payment is split between <em>interest</em> (= beginning liability × discount rate) and <em>principal repayment</em> (the rest of the cash payment).</li>
</ul>
<p>The income statement shows TWO expenses each year — depreciation on the ROU asset and interest on the lease liability — and the total is <strong>front-loaded</strong> (heavier in early years because interest is bigger when the liability is bigger). Total expense over the whole lease term equals total cash paid; only the timing differs.</p>

<h3>US-GAAP (ASC 842) two-model approach</h3>
<p>The lessee tests each lease against five classification criteria. If ANY one is met, the lease is a <strong>finance lease</strong>; otherwise it is an <strong>operating lease</strong> (still on the balance sheet, but with a different expense pattern):</p>
<ol>
<li>Title transfers to the lessee at end of term.</li>
<li>The lease contains a bargain purchase option (BPO) that the lessee is reasonably certain to exercise.</li>
<li>Lease term ≥ 75% of the asset\'s remaining economic life.</li>
<li>PV of lease payments ≥ 90% of the asset\'s fair value.</li>
<li>The asset is so specialised it has no alternative use to the lessor at end of term.</li>
</ol>

<h3>How operating vs. finance leases differ on the income statement</h3>
<table class="tbl">
<thead><tr><th>Lease type</th><th>IFRS 16 lessee</th><th>US-GAAP finance lease</th><th>US-GAAP operating lease</th></tr></thead>
<tbody>
<tr><td>Balance sheet</td><td>ROU asset + lease liability</td><td>ROU asset + lease liability</td><td>ROU asset + lease liability</td></tr>
<tr><td>Income statement</td><td>Depreciation + Interest (front-loaded)</td><td>Depreciation + Interest (front-loaded)</td><td>Single straight-line lease expense</td></tr>
<tr><td>CFS — interest</td><td>CFO or CFF (policy choice)</td><td>CFO</td><td>CFO (entire payment)</td></tr>
<tr><td>CFS — principal</td><td>CFF</td><td>CFF</td><td>CFO (no separation)</td></tr>
</tbody>
</table>

<h3>Lessor side (briefly)</h3>
<p>For lessors, IFRS 16 keeps the old two-model split: a lease is either <em>operating</em> (asset stays on the lessor\'s books, payments recognised as rental income straight-line) or a <em>finance</em> lease (analogous to a sale; the asset is derecognised and a lease receivable is recognised). US-GAAP further splits finance leases into <em>sales-type</em> and <em>direct-financing</em>, depending on whether selling profit is recognised at inception.</p>

<h3>Sale-and-leaseback</h3>
<p>When a company sells an asset and immediately leases it back, IFRS 16 limits the gain on sale to the rights actually transferred to the buyer-lessor. The seller-lessee derecognises the asset, recognises the cash received, books a new ROU asset for the rights retained, and records a corresponding lease liability — only the <em>partial</em> gain on the rights transferred hits the income statement.</p>
`,

definitions: [
  { id:'def-lease', term:'Lease', body:'A contract that conveys the right to use an identified asset for a period of time in exchange for consideration.' },
  { id:'def-lessor', term:'Lessor', body:'The owner of the asset who grants the right of use and receives the lease payments.' },
  { id:'def-lessee', term:'Lessee', body:'The party that obtains the right to use the asset for the lease term in exchange for periodic payments.' },
  { id:'def-rou', term:'Right-of-Use (ROU) asset', body:'The lessee\'s recognised asset representing the right to use the underlying asset over the lease term. Depreciated like other long-lived assets.' },
  { id:'def-leaseliab', term:'Lease liability', body:'The lessee\'s recognised obligation to make future lease payments, measured at the present value of those payments. Amortised like debt.' },
  { id:'def-ifrs16', term:'IFRS 16', body:'Single lessee model: every lease (other than short-term and low-value) goes on the balance sheet as ROU asset + lease liability.' },
  { id:'def-asc842', term:'ASC 842', body:'US-GAAP lease standard. All leases on balance sheet, but two lessee categories remain: <strong>operating</strong> (straight-line single expense) and <strong>finance</strong> (depreciation + interest, front-loaded).' },
  { id:'def-finlease', term:'Finance lease (US-GAAP)', body:'A lease classified as financing because at least one of five criteria is met: title transfer, bargain purchase option, term ≥ 75% useful life, PV ≥ 90% FV, or specialised asset.' },
  { id:'def-oplease', term:'Operating lease (US-GAAP)', body:'A lease that fails all five finance-lease criteria. Recorded on balance sheet as ROU + liability, but the income statement shows a single STRAIGHT-LINE lease expense.' },
  { id:'def-bpo', term:'Bargain purchase option (BPO)', body:'A clause letting the lessee buy the asset at end of term for materially less than fair value, so exercise is reasonably certain at inception. Triggers finance-lease treatment.' },
  { id:'def-implicit', term:'Rate implicit in the lease', body:'The discount rate that equates PV of lease payments + lessor\'s expected residual value with the asset\'s fair value plus initial direct costs. Used by lessees if "readily determinable."' },
  { id:'def-ibr', term:'Incremental borrowing rate (IBR)', body:'The lessee\'s rate to borrow over a similar term, on similar security, for an amount similar to the lease. Used when the implicit rate is unknown.' },
  { id:'def-shortterm', term:'Short-term lease', body:'Lease term of 12 months or less with no purchase option. Eligible for the IFRS 16 / ASC 842 exemption — payments expensed as incurred, no balance-sheet recognition.' },
  { id:'def-lowvalue', term:'Low-value lease', body:'IFRS 16 only. The underlying asset is of low value when new (guidance: ~ &lt; $5,000). Same expensed treatment as short-term leases.' },
  { id:'def-saleleaseback', term:'Sale-and-leaseback', body:'A transaction where the seller transfers an asset to a buyer and immediately leases it back. Under IFRS 16, gain recognition is limited to the rights actually transferred.' },
],

formulas: [
  { id:'f-pv-annuity', name:'PV of an ordinary annuity (lease payments)', expr:'\\text{PV} = C \\cdot \\frac{1 - (1+r)^{-N}}{r}',
    when:'Initial measurement of ROU asset and lease liability when payments are equal and made at the END of each period. C = annual payment, r = discount rate, N = lease term.' },
  { id:'f-pv-annuity-due', name:'PV of an annuity due (advance payments)', expr:'\\text{PV} = C \\cdot \\frac{1 - (1+r)^{-N}}{r} \\cdot (1+r)',
    when:'When lease payments are made at the BEGINNING of each period — multiply the ordinary-annuity PV by (1+r).' },
  { id:'f-rou-dep', name:'ROU depreciation (straight-line)', expr:'\\text{Depreciation} = \\frac{\\text{ROU asset cost}}{\\min(\\text{lease term}, \\text{useful life})}',
    when:'Annual depreciation under IFRS 16 / US-GAAP finance lease. Use full useful life only if title transfers (or BPO exercise is reasonably certain).' },
  { id:'f-int-exp', name:'Lease interest expense', expr:'\\text{Interest}_t = \\text{Lease liability}_{t-1} \\times r',
    when:'Each period under the effective-interest method on the liability. The plug between cash payment and interest is the principal reduction.' },
  { id:'f-roll', name:'Lease liability roll-forward', expr:'\\text{End liability} = \\text{Begin liability} + \\text{Interest} - \\text{Cash payment}',
    when:'Building the lease amortisation schedule. The beginning balance for the next period equals this end balance.' },
  { id:'f-op-exp', name:'US-GAAP operating-lease expense (straight-line)', expr:'\\text{Lease expense} = \\frac{\\sum \\text{lease payments}}{\\text{Lease term}}',
    when:'US-GAAP only. Operating leases recognise total payments evenly over the term, even if the cash schedule is uneven.' },
],

derivations: [
  { title:'Why finance-lease expense is front-loaded',
    body:`<p>Each lease payment is split between interest and principal. Interest is calculated on the <em>opening liability balance</em>, which is highest in year 1 and falls as principal is paid down. Depreciation is straight-line and constant. So:</p>
    <ul>
    <li>Year 1 total expense = high interest + constant depreciation = high.</li>
    <li>Year N total expense = low interest + constant depreciation = lower.</li>
    </ul>
    <p>The total over the entire lease term is identical to the cash paid (depreciation = ROU cost = original PV of payments; interest = total payments − PV; sum = total payments). Only timing differs.</p>
    <p>US-GAAP <em>operating</em> leases short-circuit this by adjusting the depreciation each year to keep total lease expense exactly straight-line.</p>` },
  { title:'Phelps Swimming amortisation table',
    body:`<p>A 5-year lease, $3,256 annual payment in arrears, 8% discount rate. PV of payments = 3.99271 × $3,256 = $13,000. So both the ROU asset and lease liability open at $13,000.</p>
    <table class="tbl"><thead><tr><th>Year</th><th>Begin liab.</th><th>Interest (8%)</th><th>Payment</th><th>Principal</th><th>End liab.</th></tr></thead>
    <tbody>
    <tr><td>1</td><td>$13,000</td><td>$1,040</td><td>$3,256</td><td>$2,216</td><td>$10,784</td></tr>
    <tr><td>2</td><td>$10,784</td><td>$863</td><td>$3,256</td><td>$2,393</td><td>$8,391</td></tr>
    <tr><td>3</td><td>$8,391</td><td>$671</td><td>$3,256</td><td>$2,585</td><td>$5,806</td></tr>
    <tr><td>4</td><td>$5,806</td><td>$464</td><td>$3,256</td><td>$2,792</td><td>$3,014</td></tr>
    <tr><td>5</td><td>$3,014</td><td>$241</td><td>$3,256</td><td>$3,014*</td><td>$0</td></tr>
    </tbody></table>
    <p>* rounded so the liability closes exactly. Annual depreciation = $13,000 ÷ 5 = $2,600. Year 1 P&L expense = $1,040 + $2,600 = $3,640. Year 5 P&L expense = $241 + $2,600 = $2,841. Total expense over 5 years = total cash paid = $16,280.</p>` },
],

examples: [
  { title:'Phelps Swimming — initial recognition (IFRS 16)',
    problem:'Phelps Swimming signs a 5-year lease on a delivery truck from Ryder. Annual payment $3,256 in arrears at 8% interest. Record the lease at commencement.',
    hint:'Compute PV of an ordinary annuity, then debit ROU asset, credit lease liability for the same amount.',
    steps:[
      { what:'PV factor, ordinary annuity, n=5, r=8% = 3.99271. PV = 3.99271 × $3,256 = $13,000.' , why:'Under IFRS 16, the lease liability and ROU asset are both initially the PV of lease payments at the discount rate.' },
      { what:'Journal: Dr Leased asset (ROU) $13,000 / Cr Lease liability $13,000.' , why:'No cash moves at signing; both sides of the equation rise by $13,000.' },
    ],
    answer:'ROU asset = Lease liability = $13,000 at inception.',
    pitfall:'If payments were at the start of each period (annuity due), multiply the PV factor by (1+r). Don\'t forget to ask "in advance or in arrears?"' },

  { title:'Phelps Swimming — first year P&L and journal entries',
    problem:'For the year-1 entries: depreciation, interest, and the $3,256 cash payment.',
    hint:'Two separate IS expenses. Interest = beginning liability × 8%; principal = payment − interest.',
    steps:[
      { what:'Depreciation = $13,000 ÷ 5 yrs = $2,600 per year. Dr Depreciation expense 2,600 / Cr Accumulated depreciation 2,600.' , why:'Straight-line over the lease term (no title transfer assumed).' },
      { what:'Interest expense = $13,000 × 8% = $1,040.' , why:'Effective-interest method on the liability.' },
      { what:'Principal repayment = $3,256 − $1,040 = $2,216. Journal: Dr Interest expense 1,040 / Dr Lease liability 2,216 / Cr Cash 3,256.' , why:'The cash payment splits between interest (IS) and principal (BS).' },
      { what:'Year-end lease liability = $13,000 − $2,216 = $10,784.' , why:'Used as the opening balance to compute year-2 interest ($10,784 × 8% = $863).' },
    ],
    answer:'Year-1 expenses: $2,600 depreciation + $1,040 interest = $3,640 total. Year-end liability $10,784.',
    pitfall:'A common error is to treat the entire $3,256 as expense — that\'s what an OPERATING lease (US-GAAP) does, but under IFRS 16 / a US finance lease, only interest+depreciation hit the IS. The principal portion reduces a liability.' },

  { title:'Same lease as a short-term / low-value exemption',
    problem:'Now assume the truck lease qualifies for the IFRS 16 short-term/low-value exemption. How is each annual $3,256 payment recorded?',
    hint:'Exempt leases are like the old "operating lease" world — no asset, no liability, just rent expense as cash is paid.',
    steps:[
      { what:'No journal entry at signing.' , why:'Under exemption, the lease is not capitalised.' },
      { what:'Each year: Dr Rent expense 3,256 / Cr Cash 3,256.' , why:'The full payment is expensed straight-line as it is incurred.' },
    ],
    answer:'$3,256 rent expense each year for 5 years; no balance-sheet recognition.',
    pitfall:'Exempt-lease treatment IMPROVES the lessee\'s asset turnover and leverage ratios in the short term and yields slightly higher early-year net income (because the exempted version expenses less than the front-loaded capitalised version in early years). Analysts usually adjust for this when comparing companies.' },

  { title:'US-GAAP finance vs. operating classification test',
    problem:'A 4-year lease on a machine with a 5-year remaining useful life. Annual payments $25,000 at year-end; PV at lessee\'s 6% IBR = $86,628. Machine fair value = $90,000. No title transfer, no BPO. Specialised? No. Classify under ASC 842.',
    hint:'Run the five tests; ANY one met = finance lease.',
    steps:[
      { what:'(1) Title transfer? No.' , why:'Test 1 fails.' },
      { what:'(2) BPO? No.' , why:'Test 2 fails.' },
      { what:'(3) Term/useful life = 4/5 = 80% ≥ 75%?' , why:'Yes — test 3 passes.' },
      { what:'(4) PV / FV = 86,628 / 90,000 = 96.3% ≥ 90%?' , why:'Yes — test 4 also passes (only one needs to).' },
      { what:'(5) Specialised? No.' , why:'Test 5 fails — but doesn\'t matter; we already have two passes.' },
    ],
    answer:'Finance lease. Lessee records ROU + liability at $86,628; expenses depreciation and interest separately each year (front-loaded).',
    pitfall:'Don\'t stop after the first criterion that fails. Any ONE of the five passes is enough to make it a finance lease — you must check all five (or stop the moment one passes).' },
],

memory: [
  { label:'IFRS 16 mantra', body:'<strong>"Right of use, on the books."</strong> One model for lessees: record an ROU asset and a lease liability at the PV of payments, depreciate the asset, amortise the liability with effective-interest. Two narrow exemptions (short-term, low-value) are the only escape.' },
  { label:'5-criteria mnemonic (US-GAAP finance lease)', body:'<strong>T-B-7-9-S</strong>: <em>T</em>itle transfer, <em>B</em>argain purchase option, ≥ <em>7</em>5% of useful life, ≥ <em>9</em>0% of fair value, <em>S</em>pecialised asset. Any one → finance lease.' },
  { label:'Front-loaded vs. straight-line', body:'IFRS 16 and US-GAAP <em>finance</em> lease → <strong>front-loaded</strong> total expense. US-GAAP <em>operating</em> lease → <strong>straight-line</strong> single lease expense.' },
  { label:'Discount rate priority', body:'Use the rate <strong>implicit in the lease</strong> if you can determine it. Otherwise fall back to the lessee\'s <strong>incremental borrowing rate</strong>.' },
  { label:'Cash flow split', body:'Under IFRS 16: <strong>principal repayment is CFF</strong>; interest is CFO or CFF (policy choice). US-GAAP <em>operating</em> lease: the entire payment goes through CFO.' },
  { kind:'pitfall', body:'<strong>ROU depreciation period:</strong> use the SHORTER of lease term and useful life — UNLESS title transfers (or BPO is reasonably certain), in which case use the asset\'s useful life.' },
  { kind:'pitfall', body:'<strong>Don\'t double-count.</strong> If the lease is capitalised, the cash payment is NOT a single expense; it splits into interest expense (IS) and principal repayment (BS). Booking the full $3,256 as expense is the most common student error.' },
  { kind:'pitfall', body:'<strong>Operating-lease ratios are flattering by accident.</strong> Pre-IFRS-16 firms looked less leveraged and more asset-light because their operating leases were off-balance-sheet. IFRS 16 cleaned that up — when comparing a 2018 vs. 2020 lessee, adjust mentally.' },
],

connections: `
<p>Chapter 8 reuses the present-value machinery from Chapter 7 (bonds): the lease liability is just a bond denominated in lease payments. The ROU asset is depreciated like any PP&E item from Chapter 6. The IFRS-16 vs. ASC-842 dichotomy will resurface in ratio analysis (Ch 12) — D/E and asset turnover both move sharply when leases come on-balance-sheet, so cross-period and cross-jurisdiction comparisons need adjustment. Cash-flow classification (Ch 11) is where the principal/interest split matters: principal in CFF, interest typically in CFO. The lessor side connects loosely to revenue recognition (Ch 4), since a sales-type lease is in substance a sale of the asset financed by the lessor.</p>
`,

};

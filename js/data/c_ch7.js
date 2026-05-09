// Chapter 7 — Liabilities & Bonds
// Sourced from FRA Chapter 7 slide deck (Prof. Raluca Ratiu).
window.CHAPTER_CONTENT = window.CHAPTER_CONTENT || {};
window.CHAPTER_CONTENT.ch7 = {

intro: `
<p>The accounting equation <code>A = L + E</code> separates the <strong>uses</strong> of money (assets — investments management has made) from the two <strong>sources</strong> of money (liabilities and equity). Chapter 7 is about the <em>liabilities</em> side: the legal obligations the firm owes to outsiders. Increasing liabilities to acquire assets is what produces <strong>financial leverage</strong>, which can magnify both profits and losses.</p>

<p>A <strong>liability</strong> is recognised when three conditions are met simultaneously: (i) the obligation arose from a <em>past event</em>, (ii) settlement is <em>probable</em> (≥ 50% chance of an outflow of economic benefits), and (iii) the amount is <em>reasonably estimable</em>. If only one or two of these hold, the item is a <em>contingent liability</em> — disclosed in the notes but not on the balance sheet.</p>

<h3>Current vs. non-current liabilities</h3>
<p>Liabilities are split on the balance sheet by maturity:</p>
<ul>
<li><strong>Current liabilities</strong> — due within one year (or one operating cycle). Often non-interest-bearing, so management actively tries to maximise their use as a "free" source of finance. They subdivide into <em>current operating</em> liabilities (Accounts Payable, accrued expenses, deferred / unearned revenue) and <em>current non-operating</em> liabilities (short-term bank loans, current portion of long-term debt).</li>
<li><strong>Long-term liabilities</strong> — paid over several years and almost always interest-bearing. Companies match these to long-lived assets so the asset's cash inflows cover the loan repayments. Bonds, long-term notes, and mortgages live here.</li>
</ul>
<p>The <strong>current portion of long-term debt (CMLTD)</strong> is the principal payment due within the next 12 months on a loan that is otherwise long-term. It moves from the non-current section to the current section as each maturity approaches.</p>

<h3>Operating liabilities — three sub-types</h3>
<p><strong>Accounts (Trade) Payable</strong> arise from buying inventory or services on credit; they carry no interest, so increasing AP boosts cash flows from operations and is highly attractive. <strong>Accrued liabilities</strong> ("accrued expenses") are obligations the firm has incurred but not yet paid — wages, interest, income/payroll taxes, rent, utilities, warranty costs. The accrual creates a liability and an expense in the same period. <strong>Deferred (unearned) revenue</strong> arises when cash is received before the service is delivered.</p>

<p>An important warning: management can <em>shift income</em> across periods by under- or over-estimating accruals. Underestimating accruals makes liabilities and expenses too low, and therefore retained earnings and net income too high — a classic earnings-management red flag.</p>

<h3>Provisions vs. contingent liabilities</h3>
<p>Not all obligations are certain. A <strong>provision</strong> is recognised when an outflow is probable AND can be reasonably estimated (lawsuits, warranty claims, restructuring). A <strong>contingent liability</strong> is a potential obligation whose existence depends on an uncertain future event, OR a present obligation that fails the probability or measurement test. The accounting summary:</p>
<table class="tbl">
<thead><tr><th>Probability of outflow</th><th>Amount estimable?</th><th>Treatment</th></tr></thead>
<tbody>
<tr><td>Probable (≥ 50%)</td><td>Yes</td><td><strong>Recognise</strong> on the balance sheet (provision)</td></tr>
<tr><td>Probable</td><td>No reliable estimate</td><td><strong>Disclose</strong> in notes</td></tr>
<tr><td>Reasonably possible</td><td>Either</td><td><strong>Disclose</strong> in notes</td></tr>
<tr><td>Remote</td><td>Either</td><td>Ignore (no recognition, no disclosure required)</td></tr>
</tbody>
</table>

<h3>Bonds — pricing logic</h3>
<p>When a company needs large, long-term financing, issuing <strong>bonds</strong> in the capital markets is more cost-efficient than going to a single bank. A bond promises (i) periodic <em>coupon</em> interest (usually semi-annual) and (ii) repayment of <em>face value</em> at maturity. Two interest rates drive bond pricing:</p>
<ul>
<li><strong>Coupon rate</strong> (a.k.a. contract or stated rate) — printed on the certificate; determines the cash interest paid each period.</li>
<li><strong>Market rate</strong> (a.k.a. yield) — the return investors demand today; determines the issue price.</li>
</ul>
<p>The bond's issue price is the <em>present value</em> of its two cash-flow streams discounted at the <strong>market</strong> rate: PV of the coupon annuity plus PV of the face value (a single sum). The result depends on how coupon and market rates compare:</p>
<table class="tbl">
<thead><tr><th>Comparison</th><th>Issued at</th><th>Issue price vs. face</th></tr></thead>
<tbody>
<tr><td>Coupon = Market</td><td><strong>Par</strong></td><td>= Face value</td></tr>
<tr><td>Coupon &gt; Market</td><td><strong>Premium</strong></td><td>&gt; Face value</td></tr>
<tr><td>Coupon &lt; Market</td><td><strong>Discount</strong></td><td>&lt; Face value</td></tr>
</tbody>
</table>
<p>Intuition: if the bond pays more coupon than the market demands, investors will pay extra (a premium) for that bond. If it pays less, they will only buy it at a discount.</p>

<h3>Effective-interest amortisation</h3>
<p>After issuance, each period the company recognises <em>interest expense = beginning carrying amount × market rate</em>. The cash interest paid is always <em>face × coupon rate</em>. The difference amortises the discount or premium, pulling the carrying amount toward face value as maturity approaches. This is the <strong>effective-interest method</strong>, and it is the only method permitted under IFRS and US-GAAP.</p>

<h3>Cash-flow classification of debt</h3>
<p>Issuing a bond, repaying principal, and repurchasing/early-retiring a bond are all <strong>financing</strong> activities (CFF) — the FULL cash amount flows through CFF. The periodic <em>cash interest paid</em> is reported in CFO under US-GAAP (and is one of two acceptable choices under IFRS). Gains and losses on bond retirement appear on the income statement but are added back when reconciling NI to CFO.</p>
`,

definitions: [
  { id:'def-liab', term:'Liability', body:'A present obligation arising from a <em>past event</em>, whose settlement is <em>probable</em> (≥50%) and whose amount is <em>reasonably estimable</em>. All three conditions must hold for recognition.' },
  { id:'def-cl', term:'Current liabilities', body:'Obligations due within one year (or one operating cycle). Often non-interest-bearing, so they are an attractive source of finance. Includes AP, accruals, deferred revenue, short-term debt and the current portion of long-term debt.' },
  { id:'def-ncl', term:'Long-term liabilities', body:'Obligations payable beyond one year. Usually interest-bearing. Used to fund long-term assets so cash inflows of the asset match the repayment schedule.' },
  { id:'def-ap', term:'Accounts (Trade) Payable', body:'Amounts owed to suppliers from purchases of goods/services on credit. Non-interest-bearing — increases CFO and is preferred over interest-bearing finance.' },
  { id:'def-accrued', term:'Accrued liabilities', body:'Expenses incurred but not yet paid: wages, interest, payroll/income taxes, rent, utilities, warranties. Recording an accrual creates a liability AND an expense.' },
  { id:'def-deferred', term:'Deferred (unearned) revenue', body:'Cash received before goods/services are delivered. A liability until the company performs and earns the revenue.' },
  { id:'def-provision', term:'Provision', body:'A liability recognised for a probable obligation whose amount can be reliably estimated (lawsuits, warranties, restructuring). Booked at the most likely amount.' },
  { id:'def-warranty', term:'Warranty', body:'A manufacturer\'s commitment to repair/replace defective products. Estimated cost is accrued at time of sale (matching). Repairs reduce the liability when performed.' },
  { id:'def-cont', term:'Contingent liability', body:'A potential obligation contingent on an uncertain future event, or a present obligation failing the probability/measurement tests. <strong>Not</strong> recognised on the balance sheet; disclosed in the notes if material.' },
  { id:'def-note', term:'Note payable', body:'A written promise to repay a principal amount plus interest. Short-term notes appear in current liabilities; long-term notes (or their current portion) below. Interest accrues with the passage of time: <em>principal × rate × time/12</em>.' },
  { id:'def-loc', term:'Line of credit', body:'A bank commitment to lend up to a specified ceiling, typically repaid within the year. Drawdowns are recorded as short-term notes payable.' },
  { id:'def-bond', term:'Bond', body:'A debt security issued in the capital markets. Two cash flows: periodic coupon interest (usually semi-annual) and a single face-value repayment at maturity.' },
  { id:'def-coupon', term:'Coupon (stated, contract) rate', body:'The rate printed on the bond certificate. Determines the dollar interest paid each period: <em>Cash interest = Face × Coupon × period fraction</em>.' },
  { id:'def-market', term:'Market (yield) rate', body:'The rate of return investors demand at the time of issuance. Used to discount cash flows and arrive at the bond\'s issue price.' },
  { id:'def-discount', term:'Bond discount', body:'A contra-liability (XL). Arises when coupon &lt; market rate, so the bond is issued below face. Amortised over the bond\'s life, increasing the carrying amount toward face.' },
  { id:'def-premium', term:'Bond premium', body:'An adjunct to the bond liability. Arises when coupon &gt; market rate, so the bond is issued above face. Amortised over the bond\'s life, decreasing the carrying amount toward face.' },
  { id:'def-eim', term:'Effective-interest method', body:'The required method to amortise bond discount/premium. Each period: <em>Interest expense = Carrying amount × market rate per period</em>. The plug between expense and cash interest amortises the discount/premium.' },
  { id:'def-call', term:'Call provision', body:'A clause in the bond indenture giving the issuer the right (not obligation) to repurchase bonds before maturity at a specified price.' },
  { id:'def-indenture', term:'Bond indenture', body:'The contract between issuer and bondholders setting out coupon, maturity, covenants, call/conversion options and security.' },
  { id:'def-covenant', term:'Covenant', body:'A restriction in the debt contract giving lenders a means of control (e.g., max leverage ratios, min interest coverage). Violation can trigger default.' },
],

formulas: [
  { id:'f-note-int', name:'Note interest accrual', expr:'\\text{Interest} = \\text{Principal} \\times \\text{Annual rate} \\times \\frac{\\text{months}}{12}',
    when:'Calculating period interest on short-term notes payable. Always count MONTHS, never days, in this course.' },
  { id:'f-cash-int', name:'Cash interest on a bond', expr:'\\text{Cash interest} = \\text{Face value} \\times \\text{Coupon rate} \\times \\frac{1}{n}',
    when:'Each coupon period. n = number of coupons per year (n=2 for semi-annual). Coupon rate × time fraction is independent of the issue price.' },
  { id:'f-bond-pv', name:'Bond issue price', expr:'P_0 = C \\cdot \\frac{1 - (1+r)^{-N}}{r} + F \\cdot (1+r)^{-N}',
    when:'Pricing a bond at issuance. C = periodic coupon ($), r = market rate per period, N = total periods, F = face. First term is PV of the coupon annuity; second is PV of face.' },
  { id:'f-int-exp', name:'Effective-interest expense', expr:'\\text{Interest expense}_t = \\text{Carrying value}_{t-1} \\times r_{\\text{market/period}}',
    when:'Each interest period under the effective-interest method. The carrying value walks toward face as discount/premium amortises.' },
  { id:'f-amort', name:'Discount/premium amortisation', expr:'\\text{Amortisation}_t = \\lvert \\text{Interest expense}_t - \\text{Cash interest}_t \\rvert',
    when:'Plug to fill the amortisation column. Discount: expense &gt; cash → carrying value rises. Premium: expense &lt; cash → carrying value falls.' },
  { id:'f-cv', name:'Carrying value (book value) of a bond', expr:'\\text{CV} = \\text{Face} - \\text{Unamortised discount} \\;\\;\\text{or}\\;\\; \\text{Face} + \\text{Unamortised premium}',
    when:'Reporting net bonds payable on the balance sheet. Discount is a contra-liability (subtract); premium is adjunct (add).' },
  { id:'f-gain-loss', name:'Gain or loss on bond retirement', expr:'\\text{Gain (Loss)} = \\text{Carrying value} - \\text{Cash paid to retire}',
    when:'When bonds are repurchased before maturity. Positive number = gain; negative = loss. Reported in income from continuing operations but reversed for operating-profit analysis.' },
  { id:'f-debt-eq', name:'Debt-to-Equity', expr:'\\text{D/E} = \\frac{\\text{Total liabilities}}{\\text{Stockholders\' equity}}',
    when:'Solvency / leverage analysis. Higher = more leveraged.' },
  { id:'f-tie', name:'Times Interest Earned (TIE)', expr:'\\text{TIE} = \\frac{\\text{EBIT}}{\\text{Interest expense}}',
    when:'How many times operating earnings cover interest. Lower TIE → tighter coverage and higher default risk.' },
  { id:'f-ap-turn', name:'Accounts Payable Turnover', expr:'\\text{AP turnover} = \\frac{\\text{Cost of goods sold}}{\\text{Avg accounts payable}}',
    when:'Speed at which the firm pays suppliers (in turns per year).' },
  { id:'f-dpo', name:'Days Payable Outstanding (DPO)', expr:'\\text{DPO} = \\frac{365}{\\text{AP turnover}}',
    when:'Average days the firm takes to pay suppliers. Higher DPO is generally good (free finance), provided supplier relationships hold.' },
],

derivations: [
  { title:'Why coupon vs. market rate determines premium / discount',
    body:`<p>The issue price is the present value of the bond\'s cash flows discounted at the <em>market</em> rate. The cash flows themselves depend on the <em>coupon</em> rate (they are fixed by contract). So:</p>
    <ul>
    <li>If coupon = market, you discount cash flows whose size matches what the market demands → PV exactly equals face. Issued at <strong>par</strong>.</li>
    <li>If coupon &gt; market, the cash flows are bigger than the market\'s required return → discounting them gives a PV greater than face. Investors pay a <strong>premium</strong>.</li>
    <li>If coupon &lt; market, the cash flows are too small to meet the market\'s required return → discounting them gives a PV less than face. Investors only buy at a <strong>discount</strong>.</li>
    </ul>
    <p>Slide example: $400,000 face, 8% coupon, 5 yrs semi-annual. At 8% market → priced at $400,000 (par). At 10% market → priced at $369,113 (discount). At 6% market → priced at $434,121 (premium).</p>` },
  { title:'Reading an effective-interest amortisation table',
    body:`<p>From the slide deck (5% per period market rate, 4% per period coupon, $400,000 face, $369,113 issue price):</p>
    <table class="tbl"><thead><tr><th>Period</th><th>Interest exp. (5% × CV)</th><th>Cash interest (4% × Face)</th><th>Amortisation</th><th>Discount bal.</th><th>Bond payable, net</th></tr></thead>
    <tbody>
    <tr><td>0</td><td>—</td><td>—</td><td>—</td><td>$30,887</td><td>$369,113</td></tr>
    <tr><td>1</td><td>$18,456</td><td>$16,000</td><td>$2,456</td><td>$28,431</td><td>$371,569</td></tr>
    <tr><td>2</td><td>$18,578</td><td>$16,000</td><td>$2,578</td><td>$25,853</td><td>$374,147</td></tr>
    <tr><td>...</td><td>...</td><td>...</td><td>...</td><td>...</td><td>...</td></tr>
    <tr><td>10</td><td>$19,810</td><td>$16,000</td><td>$3,810</td><td>$0</td><td>$400,000</td></tr>
    </tbody></table>
    <p>Notice: (i) cash interest is constant at $16,000 — coupon × face never changes; (ii) interest expense and amortisation both <em>grow</em> each period because the carrying value is rising; (iii) by maturity, discount = 0 and CV = face. For a premium bond the picture flips: amortisation reduces carrying value down to face.</p>` },
  { title:'Total cost of debt over the bond\'s life',
    body:`<p>The total interest expense recognised over the bond\'s life is:</p>
    <ul>
    <li><strong>Discount bond:</strong> Cash coupons + Discount = $160,000 + $30,887 = $190,887.</li>
    <li><strong>Par bond:</strong> Cash coupons only = $160,000.</li>
    <li><strong>Premium bond:</strong> Cash coupons − Premium = $160,000 − $34,121 = $125,879.</li>
    </ul>
    <p>So a premium bond is "cheap" in interest-expense terms because the issuer received extra cash up-front; a discount bond is "expensive" because the issuer received less than face but must repay full face at maturity.</p>` },
],

examples: [
  { title:'Quechua semi-annual bond pricing',
    problem:'Sunshine Co. issues $1,000,000 of 8% bonds, semi-annual coupons, 10-year maturity. Compute the issue price under three market rates: (A) 6%, (B) 10%, (C) 8%.',
    hint:'For each scenario, compute coupon $ first, then PV of an annuity for the coupons + PV of a single sum for the face. Use 20 periods (10 years × 2) and HALF the annual market rate per period.',
    steps:[
      { what:'Coupon $ per period = $1,000,000 × 8% × 6/12 = $40,000 (same in all three scenarios).' , why:'The cash coupon depends only on coupon rate and face, not on market rate.' },
      { what:'A) market 6% → 3% per period, 20 periods. PV(face) = 1,000,000 × (1.03)^-20 + PV(annuity 40,000, 3%, 20).' , why:'Coupon &gt; market → bond will be issued at a premium (price &gt; $1,000,000).' },
      { what:'B) market 10% → 5% per period, 20 periods. PV(face) at 5% + PV(annuity 40,000, 5%, 20).' , why:'Coupon &lt; market → discount (price &lt; $1,000,000).' },
      { what:'C) market 8% → 4% per period. PV calculation gives EXACTLY $1,000,000.' , why:'When coupon = market, every bond prices at par.' },
    ],
    answer:'A) Premium issue, price &gt; $1,000,000. B) Discount issue, price &lt; $1,000,000. C) Par issue, price = $1,000,000. Sign of (price − face) is what matters in the exam, not exact PV-table digits.',
    pitfall:'Do NOT discount with the coupon rate. The coupon rate fixes the cash flow size; the <em>market</em> rate discounts. Mixing them is the most common bond-pricing mistake.' },

  { title:'BikesRUs interest accrual on a note',
    problem:'On Jan 1, BikesRUs borrows $3,000 at 6% annual rate, with interest payable on the first day of each subsequent quarter. Record the borrowing, the March 31 interest accrual, and the April 1 payment.',
    hint:'Borrowing is just Cash up / Notes Payable up. Interest accrues with TIME — use months, not days.',
    steps:[
      { what:'Jan 1: Dr Cash 3,000 / Cr Notes Payable 3,000.' , why:'Pure financing inflow; no income statement effect at borrowing.' },
      { what:'Mar 31: Interest = $3,000 × 6% × 3/12 = $45. Dr Interest Expense 45 / Cr Interest Payable 45.' , why:'Three months have elapsed; the firm owes the bank for that time.' },
      { what:'Apr 1: Dr Interest Payable 45 / Cr Cash 45.' , why:'The accrued amount is now paid in cash; expense was already on the income statement at Mar 31.' },
    ],
    answer:'$45 interest expense in Q1; $45 cash outflow on April 1. Note balance unchanged at $3,000.',
    pitfall:'Use 3/12, not 90/365. Slides are explicit: "months, not days." Also: actually borrowing the cash creates no income/equity effect — only interest accrual does.' },

  { title:'Issuing a discount bond at 10% market rate',
    problem:'$400,000 face, 8% coupon, semi-annual, 5 years. Market rate 10%. Issue price computed at $369,113. (a) Record issuance. (b) Record the first semi-annual interest payment using effective-interest.',
    hint:'On issuance, Cash = price; Bond Discount is a contra-liability (XL); Bonds Payable is at face. Interest expense = CV × market per period; cash interest = face × coupon per period.',
    steps:[
      { what:'(a) Dr Cash 369,113; Dr Bond Discount 30,887; Cr Bonds Payable 400,000.' , why:'Net liability = 369,113 (Bonds Payable minus Discount). Discount represents future interest the issuer effectively owes through under-pricing.' },
      { what:'(b) Period-1 interest expense = 369,113 × 5% = 18,456. Cash interest = 400,000 × 4% = 16,000. Discount amortisation = 18,456 − 16,000 = 2,456.' , why:'Effective-interest formula: expense always uses CV × market.' },
      { what:'(b) Journal: Dr Interest Expense 18,456 / Cr Bond Discount 2,456 / Cr Cash 16,000.' , why:'Crediting Bond Discount reduces the contra-account, raising net liability toward face.' },
      { what:'New CV = 369,113 + 2,456 = 371,569. Continue period 2 from this new base.' , why:'CV will keep rising each period until it reaches $400,000 at maturity.' },
    ],
    answer:'Issue: Cash up 369,113, net liability 369,113. Period-1 interest expense 18,456 of which 16,000 is cash and 2,456 is discount amortisation. New CV 371,569.',
    pitfall:'Don\'t use the face value to compute interest expense (a discount-bond rookie error). Expense is CV × market each period, NOT face × coupon.' },

  { title:'Bunny / Luna early retirement of a premium bond',
    problem:'After 3 years the company decides to retire the $400,000 bond at 102% of face. Carrying value at the retirement date is $414,869 (premium balance $14,869).',
    hint:'Cash paid = 102% × $400,000 = $408,000. Gain/loss = CV − cash paid.',
    steps:[
      { what:'Cash paid = 0.102 × 400,000 ... wait: 102% of 400,000 = 408,000.' , why:'A "call price of 102" means 102% of par.' },
      { what:'CV before retirement = 414,869. Gain = 414,869 − 408,000 = 6,869.' , why:'Carrying value &gt; cash paid → company benefits → GAIN on retirement.' },
      { what:'Journal: Dr Bonds Payable 400,000 / Dr Bond Premium 14,869 / Cr Cash 408,000 / Cr Gain on Bond Retirement 6,869.' , why:'You must remove BOTH the face liability AND the remaining unamortised premium; the plug is the gain (or loss).' },
    ],
    answer:'$6,869 gain reported in income from continuing operations. Cash outflow of $408,000 in CFF.',
    pitfall:'A gain on bond retirement is suspicious — most early retirements happen because rates dropped (so call prices look expensive). For analysis, the $408,000 belongs in CFF in full, and the $6,869 is reversed when reconciling NI to CFO.' },

  { title:'Gym Shoes: gain/loss on bond repayment',
    problem:'Gym Shoes Inc. retires $360,000 face value of 10% bonds at 96 (i.e., 96% of face), one year before maturity. Book value on the retirement date is $330,000. Compute the gain or loss.',
    hint:'Cash paid = 96% × face. Compare to book (carrying) value.',
    steps:[
      { what:'Cash paid = 0.96 × 360,000 = 345,600.' , why:'"At 96" means 96% of face, NOT $96.' },
      { what:'Gain/loss = CV − cash = 330,000 − 345,600 = −15,600 (loss).' , why:'CV &lt; cash paid → company is worse off → LOSS.' },
      { what:'Journal: Dr Bonds Payable 360,000 / Cr Cash 345,600 / Cr Bond Discount 30,000 / Dr Loss on Retirement 15,600.' , why:'Original discount of $30,000 still on the books (face 360 − CV 330) is removed; loss is the plug.' },
    ],
    answer:'Loss of $15,600 reported in income from continuing operations.',
    pitfall:'Discount bonds typically retire at a loss (because to call them the issuer pays more than the still-amortising book value). The opposite holds for premium bonds, which often retire at a gain.' },

  { title:'Warranty accrual at sale, repair when used',
    problem:'BikesRUs estimates warranty cost on current-period sales at $2,000. In the following period it spends $400 cash repairing a customer\'s bike under warranty.',
    hint:'Estimate at sale → liability and expense booked together (matching). Actual repair → reduce liability, no new expense.',
    steps:[
      { what:'Sale period: Dr Warranty Expense 2,000 / Cr Warranty Payable 2,000.' , why:'Match the cost of warranty service to the period that earned the revenue.' },
      { what:'Repair period: Dr Warranty Payable 400 / Cr Cash 400.' , why:'No new expense — the cost was already taken when sales were recognised.' },
    ],
    answer:'Warranty expense of $2,000 in the sale period; remaining liability after the repair = $1,600.',
    pitfall:'Booking the repair as a fresh expense double-counts. The expense lives in the period of sale; later repairs only consume the previously accrued liability.' },
],

memory: [
  { label:'Three tests for any liability', body:'<strong>P-E-P</strong>: <em>Past</em> event, <em>Estimable</em> amount, <em>Probable</em> outflow (≥50%). Miss one → contingent at best, footnote disclosure only.' },
  { label:'Coupon vs. market — direction', body:'<strong>Coupon high → Premium high (price up). Coupon low → Discount, price low.</strong> Memorise the direction; the price always moves opposite to the rate gap.' },
  { label:'Interest-expense formula', body:'Always <strong>Carrying value × market rate</strong>. Cash interest is <strong>Face × coupon</strong>. The two are equal only when the bond is at par.' },
  { label:'Discount vs. premium walk', body:'Discount bonds: CV walks UP to face. Premium bonds: CV walks DOWN to face. By maturity both equal face value, and the discount/premium balance is zero.' },
  { kind:'pitfall', body:'<strong>Months, not days.</strong> The whole course uses fractions of 12 for short-term interest accruals. Writing 90/365 will lose marks even if the answer is close.' },
  { kind:'pitfall', body:'<strong>Don\'t discount with the coupon rate.</strong> The market rate is the discount rate; the coupon rate produces the cash flows being discounted. Mixing them is the #1 bond-pricing error.' },
  { kind:'pitfall', body:'<strong>"At 102" or "at 96" means percent of face</strong>, not dollars per bond. 102% of $400,000 face = $408,000.' },
  { kind:'pitfall', body:'<strong>Bond issuance and retirement cash flows are CFF in full.</strong> Only the periodic <em>cash interest paid</em> belongs in CFO under US-GAAP. Gain/loss on retirement is on the IS but reversed in the CFO reconciliation.' },
],

connections: `
<p>Chapter 7 is the formal liabilities counterpart to the assets chapters (Ch 5–6). It depends on PV math first introduced for revenue recognition and impairments, and previews the lease chapter (Ch 8), where the lease liability is amortised on exactly the same effective-interest schedule. Ratio analysis (Ch 12) leans heavily on D/E, TIE and DPO defined here. The cash-flow chapter (Ch 11) uses the classification rules — bond proceeds and principal repayments are <strong>CFF</strong>; cash interest is <strong>CFO</strong> in US-GAAP; gain/loss on retirement appears in NI and is reversed in the indirect reconciliation. Finally, the equity chapter (Ch 9) closes the financing loop: when leverage is high, EPS becomes more sensitive to interest expense.</p>
`,

};

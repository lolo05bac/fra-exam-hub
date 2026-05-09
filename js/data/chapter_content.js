// Full chapter content. All 12 chapters. KaTeX expressions in `expr`,
// inline-rendered HTML allowed elsewhere.
window.CHAPTER_CONTENT = {

/* =================================================================
   CHAPTER 1 & 2 — Foundations & Constructing Financial Statements
   ================================================================= */
ch1_2: {
  intro: `<p>Financial accounting answers one big question: <em>"How is the business doing — and is what we're saying about it true?"</em> Every transaction is recorded with the discipline of double-entry, then summarised into four statements that have to articulate with each other. If you understand <strong>the accounting equation</strong> (<code>A = L + E</code>) and the four statements, every later chapter is just a special case.</p>
  <p>Chapter 1 sets up <em>why</em> we need standardised reporting (information asymmetry between insiders and outside investors / creditors). Chapter 2 gives the machinery: what counts as an asset, when revenue is recognised, how a transaction affects each statement.</p>`,

  definitions: [
    { id:'def-asset', term:'Asset',
      body:'A resource <strong>controlled</strong> by the entity as a result of <strong>past events</strong> from which <strong>future economic benefits</strong> are expected to flow. (All three conditions must hold.)' },
    { id:'def-liab', term:'Liability',
      body:'A <strong>present obligation</strong> of the entity arising from past events, the settlement of which is expected to result in an <strong>outflow of resources</strong> embodying economic benefits.' },
    { id:'def-equity', term:'Equity',
      body:'The residual interest in the assets of the entity after deducting all its liabilities. <em>Equity = Assets − Liabilities</em>.' },
    { id:'def-rev', term:'Revenue',
      body:'Increases in economic benefits during the period in the form of inflows or enhancements of assets, or decreases of liabilities, that result in increases in equity (other than contributions from owners).' },
    { id:'def-exp', term:'Expense',
      body:'Decreases in economic benefits in the form of outflows / depletions of assets or incurrences of liabilities that result in decreases in equity (other than distributions to owners).' },
    { id:'def-accrual', term:'Accrual basis',
      body:'Transactions are recognised <strong>when they occur</strong>, not when cash moves. Revenues are recognised when earned; expenses when incurred (matching). Required by IFRS and US GAAP for general-purpose financial statements.' },
    { id:'def-going', term:'Going concern',
      body:'The entity is assumed to continue operating for the foreseeable future. Assets and liabilities are valued accordingly (not at liquidation values).' },
    { id:'def-jou', term:'Journal entry',
      body:'A debit-equals-credit record of a transaction. Debits = left side; Credits = right side. <em>Assets and Expenses</em> increase with debits; <em>Liabilities, Equity, Revenue</em> increase with credits.' },
  ],

  formulas: [
    { id:'f-eq', name:'The Accounting Equation', expr:'\\text{Assets} = \\text{Liabilities} + \\text{Equity}',
      when:'Always. Every journal entry must keep this equation balanced.' },
    { id:'f-eq-exp', name:'Expanded equation', expr:'A = L + \\text{Contributed Capital} + \\text{Retained Earnings}',
      when:'Trace why a transaction touches equity (capital injection vs. earnings).' },
    { id:'f-re', name:'Retained Earnings roll-forward', expr:'\\text{RE}_{end} = \\text{RE}_{begin} + \\text{Net Income} - \\text{Dividends}',
      when:'Closing the period; figuring out missing piece (e.g. given two of three, find the third).' },
    { id:'f-ni', name:'Net Income identity', expr:'\\text{NI} = \\text{Revenues} - \\text{Expenses}',
      when:'Top-line of the income statement build-up.' },
  ],

  examples: [
    { title:'Effect of buying equipment with cash on the equation',
      problem:'A corporation purchased factory equipment using cash for $50,000. Show the impact on the accounting equation.',
      hint:'Both sides of the entry hit the asset side of the equation.',
      steps:[
        { what:'Cash (asset) ↓ $50,000.', why:'You paid out cash.' },
        { what:'Equipment (asset) ↑ $50,000.', why:'You acquired a new asset of equal value.' },
        { what:'Liabilities and Equity unchanged. Total assets unchanged.', why:'Asset swap — no income recognised at purchase.' },
      ],
      answer:'Total assets are unchanged. (Common exam trap: it is NOT an expense at purchase — it gets capitalised and depreciated.)',
      pitfall:'Do not record an expense at acquisition. Expense recognition happens through depreciation across the asset\'s useful life.'
    },
    { title:'Receiving cash for unearned (deferred) revenue',
      problem:'A law firm received €2,000 in cash for legal services to be provided next month. Record the impact.',
      hint:'You owe the customer the service, so you have a present obligation.',
      steps:[
        { what:'Cash (asset) ↑ €2,000.' },
        { what:'Unearned/Deferred Revenue (liability) ↑ €2,000.', why:'You have a duty to deliver future service — that is a liability.' },
        { what:'Revenue is NOT recognised yet. Net income is unaffected.' },
      ],
      answer:'Revenue not recognised; liability of €2,000 created. Effect on equity = 0.',
      pitfall:'Receipt of cash ≠ recognition of revenue. Don\'t credit revenue at the time cash is received for goods/services not yet delivered.'
    },
    { title:'Goodwill recognition rule',
      problem:'When can goodwill be recorded as an asset?',
      hint:'Internally generated goodwill is not capitalised under IFRS.',
      steps:[
        { what:'Goodwill is recorded only when an entity acquires another business and pays more than the fair value of the identifiable net assets acquired.' },
        { what:'Internally generated goodwill (good reputation, brand built up over time) is NEVER recorded.' },
      ],
      answer:'Goodwill = Purchase price − FV of identifiable net assets acquired. Recognised on a business combination only.'
    }
  ],

  memory: [
    { label:'Mnemonic', body:'<strong>"DEAD CLER"</strong> for normal balances: <strong>D</strong>ebits increase <strong>E</strong>xpenses, <strong>A</strong>ssets, <strong>D</strong>ividends · <strong>C</strong>redits increase <strong>L</strong>iabilities, <strong>E</strong>quity, <strong>R</strong>evenue.' },
    { label:'Visual', body:'Picture a balance scale. Assets on the left pan, Liabilities + Equity on the right. Every entry has to leave the scale level.' },
    { label:'One-liner for an exam', body:'<em>"Cash receipt before earning the revenue is a liability, not income."</em> · <em>"Repurchase of own shares is FINANCING."</em> · <em>"Equity = residual."</em>' },
    { kind:'pitfall', body:'Many MCQs hinge on noticing that issuance of ordinary shares is <strong>not revenue</strong> (it is a financing activity / capital contribution). Read every option carefully — exam writers love the "issuance of shares" distractor.' },
  ],

  connections: 'These foundations underlie every chapter. Ch 3 adds adjusting entries (accruals/deferrals). Ch 11 reconstructs cash flow from accrual-basis statements. Ch 12 turns the same numbers into ratios.',
},


/* =================================================================
   CHAPTER 3 — Income Statement & Adjusting Entries
   ================================================================= */
ch3: {
  intro: `<p>The income statement converts the business's activity for a period into <strong>net income</strong>. Under accrual accounting, that means revenues earned (regardless of cash) minus expenses incurred (regardless of cash). At period-end we run <strong>adjusting entries</strong> to drag the books from cash basis back to accrual basis: anything earned but not yet billed, anything used up but not yet recorded, anything prepaid that's now expired, and anything received in advance that's now earned.</p>
  <p>If you can fluently classify each adjustment as <em>accrued revenue, accrued expense, deferred (unearned) revenue,</em> or <em>prepaid expense</em>, you've cracked Chapter 3.</p>`,

  definitions: [
    { term:'Accrued revenue', body:'Revenue earned but cash not yet received → debit Accounts Receivable, credit Revenue.' },
    { term:'Accrued expense', body:'Expense incurred but cash not yet paid → debit Expense, credit a payable (e.g. Wages Payable, Interest Payable).' },
    { term:'Deferred (unearned) revenue', body:'Cash received in advance — liability until earned. As we earn it: debit Unearned Revenue, credit Revenue.' },
    { term:'Prepaid expense', body:'Cash paid in advance — asset until consumed. As we use it: debit Expense, credit Prepaid Asset.' },
    { term:'Depreciation', body:'Systematic allocation of the cost of a long-lived asset across its useful life. The adjusting entry: debit Depreciation Expense, credit Accumulated Depreciation (a contra-asset).' },
    { term:'Closing entries', body:'At year-end, all temporary accounts (revenues, expenses, dividends) are closed to Retained Earnings. Permanent accounts (assets, liabilities, equity) carry forward.' },
  ],

  formulas: [
    { name:'Adjusting interest accrual', expr:'\\text{Interest expense}= \\text{Principal}\\times \\text{Rate}\\times \\frac{\\text{months outstanding}}{12}',
      when:'Interest-bearing notes spanning a year-end. Watch the day count carefully (30/360 vs. actual/365).' },
    { name:'Net income identity', expr:'\\text{NI} = \\text{Revenues} - \\text{Expenses}',
      when:'Tying out the income statement.' },
    { name:'Effect of an unrecorded adjustment', inline:'Forgetting to record the entry → both sides of the related accounts are misstated by the same amount.',
      when:'Common exam Q: "If accrued wages of $X are not recorded, what is the effect on NI / total assets / total liabilities?"' },
  ],

  examples: [
    { title:'Adjusting total assets after period-end entries',
      problem:`Vivid Corp prepares the following Dec 31 adjustments:
        <ul>
          <li>Depreciation expense $45,000</li>
          <li>Accrued accounts receivable (revenue earned, not yet billed) $29,000</li>
          <li>Accrued expenses $14,000</li>
          <li>Used insurance $5,000 (originally prepaid)</li>
          <li>Rent revenue earned $3,000 (originally booked as unearned)</li>
        </ul>
        Total assets <em>before</em> adjustments = $430,000. Find total assets <em>after</em>.`,
      hint:'Tag each entry: which side of the equation, which sign?',
      steps:[
        { what:'Depreciation: contra-asset ↑ → assets ↓ $45,000.', why:'Accumulated depreciation reduces net PP&E.' },
        { what:'Accrued AR: assets ↑ $29,000.', why:'Revenue earned, AR is a real asset.' },
        { what:'Accrued expense: liabilities ↑, assets unchanged.', why:'Just records a payable; no asset effect.' },
        { what:'Used insurance: prepaid (asset) ↓ $5,000.', why:'Insurance is consumed.' },
        { what:'Rent revenue earned: unearned (liability) ↓; assets unchanged.', why:'It\'s a liability becoming revenue, not an asset move.' },
        { what:'Δ assets = −45 + 29 − 5 = −$21,000. New total = 430 − 21.' },
      ],
      answer:'Total assets after = $409,000.',
      pitfall:'Don\'t add or subtract entries that don\'t affect assets. Accrued <em>expense</em> hits liability + expense; rent earned hits liability + revenue. Neither moves assets.'
    },
    { title:'Failing to record a deferred-revenue adjustment',
      problem:'Cash of $2,000 was received and credited to Unearned Service Revenue. By year-end the services have been performed but no adjusting entry was made. Effect on the financial statements?',
      steps:[
        { what:'Should have: Debit Unearned Revenue $2,000; Credit Service Revenue $2,000.' },
        { what:'Without the entry: Liabilities are <strong>overstated</strong>; Revenue is <strong>understated</strong>; Net income is <strong>understated</strong>; Equity is understated.' },
      ],
      answer:'Revenues understated, liabilities overstated. (Classic MCQ trap — verify which direction the omission pushes each line.)'
    },
    { title:'Net income from RE roll-forward',
      problem:'Willie Company\'s RE rose by $15,000 during the year and dividends declared were $28,000. Find net income or loss.',
      hint:'Use RE_end = RE_begin + NI − Div.',
      steps:[
        { what:'Δ RE = NI − Dividends', why:'No share issuance impacts RE.' },
        { what:'$15,000 = NI − $28,000', why:'Plug in change in RE and dividends.' },
        { what:'NI = $43,000.' },
      ],
      answer:'Net income = $43,000.'
    },
  ],

  memory: [
    { label:'Mnemonic', body:'<strong>"PADA"</strong> = the four adjusting types — <strong>P</strong>repaid, <strong>A</strong>ccrued expense, <strong>D</strong>eferred revenue, <strong>A</strong>ccrued revenue.' },
    { label:'Sign trick', body:'For every adjusting entry, ask <em>"what cash already moved?"</em> If cash already moved (prepaid / unearned), you adjust by reducing an existing balance-sheet account. If cash hasn\'t moved (accrued), you create a new receivable or payable.' },
    { kind:'pitfall', body:'Depreciation never reduces cash. It is a non-cash expense — a tell-tale sign that the next chapter (Cash Flows) will need to add it back.' },
  ],

  connections: 'Adjusting entries make Ch 4 (revenue recognition) and Ch 6 (depreciation) work properly. Ch 11 reverses these accruals to recover operating cash flow.',
},


/* =================================================================
   CHAPTER 4 — Revenue Recognition & Receivables
   ================================================================= */
ch4: {
  intro: `<p>Revenue is the most-manipulated line in financial statements, so IFRS 15 / ASC 606 set out a strict <strong>five-step model</strong>. The key idea: revenue is recognised when (or as) <strong>control of the good or service transfers</strong> to the customer.</p>
  <p>Once revenue is recognised on credit, you've created an <strong>account receivable</strong>. Some of those will not be collected — so we estimate uncollectibles up-front via the <strong>allowance method</strong>. Two ways to estimate: % of sales (income-statement approach) or aging schedule (balance-sheet approach).</p>`,

  definitions: [
    { term:'IFRS 15 — 5-step model', body:'(1) Identify the contract; (2) Identify the performance obligations; (3) Determine the transaction price; (4) Allocate the price to the obligations; (5) Recognise revenue when (or as) the obligation is satisfied.' },
    { term:'Control', body:'The ability to direct the use of, and obtain substantially all the remaining benefits from, an asset. Transfer of control = revenue recognition trigger.' },
    { term:'Long-term contract / over-time recognition', body:'When the customer simultaneously receives benefit, or the asset has no alternative use to the seller and the seller has an enforceable right to payment, revenue is recognised over time using a measure of progress (e.g. cost-to-cost).' },
    { term:'Allowance for doubtful accounts', body:'Contra-asset that reduces gross receivables to estimated <strong>net realisable value</strong>. Required by IFRS to apply expected-credit-loss thinking.' },
    { term:'Bad debt expense', body:'Expense recognised when we estimate or write off uncollectibles (matched against the same period\'s revenue).' },
    { term:'Write-off', body:'Removing a specific uncollectible account: Debit Allowance, Credit AR. NO income-statement effect.' },
  ],

  formulas: [
    { name:'Net Realisable Value of AR', expr:'\\text{AR}_{\\text{net}} = \\text{AR}_{\\text{gross}} - \\text{Allowance for Doubtful Accounts}',
      when:'Reporting AR on the balance sheet.' },
    { name:'Bad Debt Expense — Aging method (balance-sheet approach)',
      expr:'\\text{Bad Debt Exp.} = \\text{Required ending Allowance} - \\text{Existing Allowance balance (after write-offs)}',
      when:'Allowance balance is a TARGET; bad debt is the plug.' },
    { name:'Bad Debt Expense — % of credit sales (income-statement approach)',
      expr:'\\text{Bad Debt Exp.} = \\%\\times \\text{Credit Sales}',
      when:'When the company sets the expense directly as a percentage of period sales.' },
    { name:'Allowance roll-forward',
      expr:'\\text{Allow}_{end}=\\text{Allow}_{begin}+\\text{Bad Debt Exp.}-\\text{Write-offs}+\\text{Recoveries}',
      when:'Anytime you\'re asked to find a missing piece.' },
    { name:'Percentage-of-completion revenue',
      expr:'\\text{Revenue}_t = \\frac{\\text{Costs incurred to date}}{\\text{Total estimated costs}} \\times \\text{Total contract price} - \\text{Revenue recognised previously}',
      when:'Long-term construction or service contracts under IFRS 15 over-time criteria.' },
  ],

  examples: [
    { title:'Bad debt under aging method',
      problem:`Hudson Co. estimates the NRV of its AR as €226,000 from an aging schedule.
        <ul><li>AR balance Dec 31 = €272,500</li>
        <li>Write-offs during the year = €21,300</li>
        <li>Allowance balance Jan 1 = €31,500</li></ul>
        Find Hudson's bad debt expense for the year.`,
      hint:'Required ending Allowance = AR − NRV. Then plug into the roll-forward.',
      steps:[
        { what:'Required ending Allowance = €272,500 − €226,000 = €46,500.', why:'NRV definition.' },
        { what:'Allowance balance after write-offs (no other entries yet) = €31,500 − €21,300 = €10,200.', why:'Write-offs reduce Allowance.' },
        { what:'Bad debt expense = €46,500 − €10,200 = €36,300.', why:'Plug to bring Allowance to required level.' },
      ],
      answer:'Bad Debt Expense = €36,300.',
      pitfall:'Don\'t forget to subtract the write-offs from the opening allowance before computing the plug. Also, % of sales method ignores existing allowance balance — different mechanics.'
    },
    { title:'Aging method when allowance is below target by a lot',
      problem:'Anna\'s Antiques: aging gives required Allowance = $8,120. Current Allowance balance (before adjustment) = $1,625. AR = $250,000. Find Bad Debt Expense.',
      hint:'No write-offs given — work directly from current to target.',
      steps:[
        { what:'BDE = Required ending Allowance − Current Allowance = $8,120 − $1,625.' },
      ],
      answer:'Bad Debt Expense = $6,495.'
    },
    { title:'Percentage-of-completion revenue for Year 1',
      problem:'A $10,000,000 contract has total estimated costs of $7,500,000. Cost incurred in 2022 = $2,625,000. Find revenue for 2022 under percentage-of-completion.',
      steps:[
        { what:'% complete = $2,625,000 / $7,500,000 = 35%.' },
        { what:'Cumulative revenue = 35% × $10,000,000 = $3,500,000.' },
        { what:'No prior revenue → 2022 revenue = $3,500,000.' },
      ],
      answer:'Revenue 2022 = $3,500,000.'
    },
    { title:'Effect of write-off on the financials',
      problem:'Company writes off $1,200 receivable. What\'s the effect on net AR, total assets, and net income?',
      steps:[
        { what:'Debit Allowance $1,200; Credit AR $1,200.' },
        { what:'Net AR = unchanged (both gross AR and allowance fall by the same amount).' },
        { what:'Total assets unchanged. Net income unchanged.' },
      ],
      answer:'No effect. Write-offs are a balance-sheet event under the allowance method.',
      pitfall:'Direct write-off (no allowance) DOES hit income — but it\'s not GAAP/IFRS-acceptable except for immaterial amounts.'
    }
  ],

  memory: [
    { label:'Mnemonic for IFRS 15', body:'<strong>"CO-PR-A-S"</strong> — <strong>C</strong>ontract, <strong>O</strong>bligations, <strong>Pr</strong>ice, <strong>A</strong>llocate, <strong>S</strong>atisfy.' },
    { label:'Aging vs. % sales', body:'Aging targets the <em>balance</em>; % sales sets the <em>expense</em>. So in aging you SOLVE for the plug after considering current Allowance. In % of sales you take % × sales directly.' },
    { kind:'pitfall', body:'Receipt of cash in advance is NOT revenue — it\'s deferred revenue (a liability) until the obligation is satisfied. Do not credit Revenue when the customer prepays.' },
    { kind:'pitfall', body:'Internally generated brand strength does not justify revenue recognition until the goods/services pass control to a customer.' },
  ],

  connections: 'Ch 5 picks up the COGS side of revenue. Ch 11 reverses Δ AR in operating cash flow (increase in AR ⇒ subtract; decrease ⇒ add). Ch 12 turns AR into DSO and the cash-conversion cycle.',
},


/* =================================================================
   CHAPTER 5 — Inventories & COGS
   ================================================================= */
ch5: {
  intro: `<p>Inventory matters because every dollar that ends in inventory is a dollar NOT in COGS — and COGS is usually the largest expense. Three flow assumptions decide how purchase costs map to COGS vs. ending inventory: <strong>FIFO</strong>, <strong>LIFO</strong> (US GAAP only — banned by IFRS), and <strong>Weighted-Average</strong>. None describe the actual physical flow; they\'re cost-flow conventions.</p>
  <p>In a period of <strong>rising prices</strong>: FIFO gives the highest ending inventory and net income; LIFO gives the lowest. The opposite holds for falling prices.</p>`,

  definitions: [
    { term:'Inventory cost', body:'Includes all costs to bring inventory to its present location and condition: purchase price + freight-in + import duties + handling. Excludes selling and admin costs.' },
    { term:'Cost of Goods Available for Sale (COGAS)', body:'Beginning inventory + Purchases. Allocated between COGS and Ending Inventory.' },
    { term:'FIFO', body:'First-In-First-Out. The earliest costs go to COGS first; the latest costs stay in ending inventory.' },
    { term:'LIFO', body:'Last-In-First-Out. The latest costs go to COGS first; the earliest costs stay in ending inventory. <strong>Allowed under US GAAP, banned under IFRS.</strong>' },
    { term:'Weighted-Average Cost', body:'COGS and ending inventory both valued at the weighted-average cost per unit of COGAS.' },
    { term:'Lower of Cost or NRV (IFRS)', body:'Inventory written down to net realisable value if NRV < cost. Loss recognised immediately. Reversal of write-down allowed under IFRS up to original cost (NOT under US GAAP).' },
    { term:'Periodic vs. Perpetual', body:'Periodic: COGS computed at period-end via a formula. Perpetual: every sale immediately updates inventory and COGS in real time.' },
  ],

  formulas: [
    { name:'COGS identity', expr:'\\text{COGS} = \\text{Beginning Inv.} + \\text{Purchases} - \\text{Ending Inv.}',
      when:'Always. The single most useful inventory equation. Solve for any one given the other three.' },
    { name:'Purchases (plug)', expr:'\\text{Purchases} = \\text{COGS} + \\text{Ending Inv.} - \\text{Beginning Inv.}',
      when:'Exam asks: "How much did the company buy?"' },
    { name:'Inventory Turnover', expr:'\\text{Inv. Turnover} = \\frac{\\text{COGS}}{\\text{Avg. Inventory}}',
      when:'Efficiency: how many times did we sell through stock?' },
    { name:'Days Inventory Outstanding (DIO)', expr:'\\text{DIO} = \\frac{365}{\\text{Inv. Turnover}} = \\frac{\\text{Avg. Inventory}}{\\text{COGS}}\\times 365',
      when:'Days of inventory on hand — input to cash conversion cycle.' },
    { name:'Gross Profit', expr:'\\text{Gross Profit} = \\text{Sales} - \\text{COGS}',
      when:'Top of the operating section.' },
  ],

  examples: [
    { title:'FIFO Ending Inventory (rising prices)',
      problem:`Communicated Inc. data:
        <table class="tbl"><tr><th>Date</th><th>Transaction</th><th>Units</th><th>Cost/unit</th></tr>
        <tr><td>1/1/2025</td><td>Beginning Inv.</td><td>270</td><td>$570</td></tr>
        <tr><td>5/5/2025</td><td>Purchase</td><td>370</td><td>$620</td></tr>
        <tr><td>8/10/2025</td><td>Purchase</td><td>470</td><td>$670</td></tr>
        <tr><td>10/15/2025</td><td>Purchase</td><td>285</td><td>$720</td></tr></table>
        Sold 1,175 units. Ending inventory under FIFO?`,
      hint:'Under FIFO, ending inventory is the most recent layers of cost.',
      steps:[
        { what:'Total available = 270 + 370 + 470 + 285 = 1,395 units.' },
        { what:'Ending units = 1,395 − 1,175 = 220 units.' },
        { what:'FIFO: ending inventory comes from the latest purchases. The 10/15 layer is 285 units → use 220 of them at $720.' },
        { what:'Ending inv = 220 × $720 = $158,400.' },
      ],
      answer:'Ending inventory (FIFO) = $158,400.',
      alt:'Under LIFO, the same 220 ending units would be priced at the oldest layer (270 units @ $570 → 220 × $570 = $125,400).'
    },
    { title:'COGS under LIFO (rising prices)',
      problem:`Square9 data: Beg 160@$460; Purchases 260@$510, 360@$560, 230@$610. Sold 900 units. COGS under LIFO?`,
      hint:'LIFO consumes the most recent purchases first.',
      steps:[
        { what:'Total available = 160+260+360+230 = 1,010. Sold 900 ⇒ ending = 110 units.' },
        { what:'LIFO COGS layers (most recent first): 230 @ $610 = $140,300.' },
        { what:'+ 360 @ $560 = $201,600.' },
        { what:'+ 260 @ $510 = $132,600.' },
        { what:'+ remaining 50 @ $460 = $23,000. (50 = 900 − 230 − 360 − 260.)' },
        { what:'Total COGS = 140,300 + 201,600 + 132,600 + 23,000 = $497,500.' },
      ],
      answer:'COGS (LIFO) = $497,500.'
    },
    { title:'Inventory Turnover',
      problem:'Beginning Inv = $118,000; Ending Inv = $110,000; Sales = $999,000; Gross profit = $303,000. Inventory turnover?',
      steps:[
        { what:'COGS = Sales − Gross profit = 999,000 − 303,000 = $696,000.' },
        { what:'Average Inventory = (118,000 + 110,000)/2 = $114,000.' },
        { what:'Inventory turnover = 696,000 / 114,000 ≈ 6.11.' },
      ],
      answer:'Inventory turnover ≈ 6.11.'
    },
    { title:'Effect of an inventory understatement',
      problem:'If ending inventory at year-end is understated by $60,000, what is the effect?',
      steps:[
        { what:'COGS = Beg + Purch − End. Smaller End ⇒ LARGER COGS by $60,000.' },
        { what:'Larger COGS ⇒ smaller gross profit, smaller net income, smaller assets, smaller equity.' },
      ],
      answer:'Net income understated by $60,000 (and ending inventory itself by $60,000).',
      pitfall:'Errors in ending inventory <em>self-correct</em> over two periods because next year\'s beginning inventory is the same understated amount — but the error misstates each year separately.'
    }
  ],

  memory: [
    { label:'Mnemonic', body:'<strong>"FILA"</strong> — in rising prices: <strong>F</strong>IFO highest <strong>I</strong>ncome, <strong>L</strong>IFO is the lowest. (Mnemonic: "FIFO First Income".)' },
    { label:'Visual', body:'Imagine a stack of inventory bricks. FIFO sells from the bottom (oldest), so the top (newest, expensive) bricks remain. LIFO sells from the top, so the cheap old bricks remain.' },
    { label:'One-liner', body:'<em>"COGS = Beg + Purch − End."</em> Memorise this — it\'s the most exam-frequent identity.' },
    { kind:'pitfall', body:'PP&E (factory equipment) is NOT part of manufacturing inventory cost. The three inventory categories for a manufacturer are raw materials, work-in-process, and finished goods.' },
  ],

  connections: 'Ch 6 distinguishes inventory (current asset) from PP&E (long-term asset). Ch 11 treats Δ Inventory as an operating-cash-flow adjustment. Ch 12 builds Inventory Turnover and DIO ratios.',
},


/* =================================================================
   CHAPTER 6 — Long-Term (Operating) Assets
   ================================================================= */
ch6: {
  intro: `<p>Long-term assets stay on the books for years and produce benefits over their useful lives. We <strong>capitalise</strong> all costs needed to bring the asset to its intended use (purchase price, freight, installation, testing) and then <strong>depreciate or amortise</strong> the cost across those years to match revenue. When we sell the asset, we compare cash received vs. <strong>net book value</strong> (cost − accumulated depreciation) to get a gain or loss.</p>
  <p>Intangibles work the same way except: indefinite-life intangibles (e.g. goodwill) are <strong>not amortised</strong> but tested for impairment annually.</p>`,

  definitions: [
    { term:'Capitalisation', body:'Recording an expenditure as an asset rather than expense — done if it will produce future economic benefits beyond the current period.' },
    { term:'Net Book Value (NBV) / Carrying amount', body:'Cost − Accumulated Depreciation. The asset\'s "remaining" cost on the balance sheet.' },
    { term:'Depreciable base', body:'Cost − Residual (salvage) value. The amount to be allocated over useful life.' },
    { term:'Useful life vs. economic life', body:'Useful life is how long the entity expects to use the asset (often shorter than physical life).' },
    { term:'Goodwill', body:'Excess of purchase price over fair value of identifiable net assets in a business combination. Indefinite life — not amortised but tested for impairment.' },
    { term:'Impairment loss', body:'Carrying amount > recoverable amount. Recognised immediately. Under IFRS it can be reversed (except for goodwill).' },
    { term:'Capital expenditure (CapEx)', body:'Cash spent acquiring or improving long-term assets — appears in INVESTING cash flows.' },
  ],

  formulas: [
    { name:'Capitalised cost', inline:'Capitalised Cost = Purchase price + freight-in + import duties + installation + testing + necessary adjustments to bring to working condition.',
      when:'Decide what goes into the asset cost. Routine repairs, training, financing costs (post-acquisition) are NOT capitalised.' },
    { name:'Straight-line depreciation', expr:'\\text{Annual Dep.} = \\frac{\\text{Cost} - \\text{Residual}}{\\text{Useful life}}',
      when:'Default method when consumption pattern is steady.' },
    { name:'Double-declining balance (DDB)', expr:'\\text{Annual Dep.} = \\text{NBV at start of year}\\times \\frac{2}{n}',
      when:'When asset loses utility faster early. Ignore residual until NBV would drop below it.' },
    { name:'Units-of-production', expr:'\\text{Dep. per unit} = \\frac{\\text{Cost} - \\text{Residual}}{\\text{Total expected units}}',
      when:'When usage varies year-to-year (machinery hours, miles).' },
    { name:'Gain/Loss on sale of LTA', expr:'\\text{G/L} = \\text{Cash received} - \\text{NBV} = \\text{Cash} - (\\text{Cost} - \\text{Acc. Dep.})',
      when:'Disposal — positive = gain, negative = loss.' },
  ],

  examples: [
    { title:'Capitalise vs. expense',
      problem:'Solaris Industries bought equipment listed at $72,000, paying $55,000 cash and financing $17,000. Shipping = $2,600; installation = $3,800. At what amount is the equipment recorded?',
      hint:'All directly-attributable costs of bringing the asset to use are capitalised.',
      steps:[
        { what:'Asset cost = list price (full $72,000) + shipping $2,600 + installation $3,800 = $78,400.' },
        { what:'How it was financed (cash vs. note payable) does NOT change the cost capitalised.' },
      ],
      answer:'Equipment is recorded at $78,400.'
    },
    { title:'Straight-line depreciation and NBV after 2 years',
      problem:'Frame Industries bought a delivery vehicle 1/1/2024 for $26,300. Useful life = 6 years; residual = $2,900. Find NBV at 12/31/2025 (straight-line).',
      steps:[
        { what:'Annual depreciation = (26,300 − 2,900) / 6 = 23,400 / 6 = $3,900.' },
        { what:'After 2 years, accumulated depreciation = 2 × 3,900 = $7,800.' },
        { what:'NBV = 26,300 − 7,800 = $18,500.' },
      ],
      answer:'Book value 12/31/2025 = $18,500.'
    },
    { title:'Gain or loss on sale of equipment',
      problem:'Sumantra Co. bought a machine 5 years ago for $175,000; SL depreciation, 12-year life, $25,000 salvage. Sold today for $115,000. G/L?',
      steps:[
        { what:'Annual depreciation = (175,000 − 25,000) / 12 = $12,500.' },
        { what:'Acc. dep. after 5 years = 5 × 12,500 = $62,500.' },
        { what:'NBV = 175,000 − 62,500 = $112,500.' },
        { what:'G/L = 115,000 − 112,500 = $2,500 GAIN.' },
      ],
      answer:'Gain on sale = $2,500.'
    },
    { title:'Cost-only sale (back-out the selling price)',
      problem:'Ricardus sold a machine that originally cost $60,000. Acc. dep. at disposal = $45,000. The company reported a gain of $6,000. Selling price?',
      steps:[
        { what:'NBV = 60,000 − 45,000 = $15,000.' },
        { what:'Selling price = NBV + Gain = 15,000 + 6,000 = $21,000.' },
      ],
      answer:'Selling price = $21,000.'
    },
    { title:'MapleTech: cash flow + gain/loss interaction',
      problem:'MapleTech sold equipment for €58,000 cash. Cost €120,000; Acc. Dep. €75,000. Identify CFI impact and gain/loss.',
      steps:[
        { what:'NBV = 120,000 − 75,000 = €45,000.' },
        { what:'Gain = 58,000 − 45,000 = €13,000.' },
        { what:'CFI inflow = full cash €58,000 (NOT the gain).' },
      ],
      answer:'CFI ↑ €58,000; gain of €13,000 reported on income statement.'
    },
  ],

  memory: [
    { label:'Mnemonic', body:'<strong>"CISI"</strong> for capitalisable costs — <strong>C</strong>ost (purchase price), <strong>I</strong>nstallation, <strong>S</strong>hipping, <strong>I</strong>nspection/testing.' },
    { label:'Visual', body:'Picture the asset arriving at your warehouse. Every dollar you must spend before it can earn money for you = part of cost. Once it\'s running, repairs are expenses.' },
    { label:'One-liner', body:'<em>"On disposal, CFI shows the FULL cash received — gain/loss is on the income statement only."</em> Common Ch 11 reconciliation trap.' },
    { kind:'pitfall', body:'Internally-generated goodwill is NEVER recognised. Only goodwill from acquiring another business is recorded — and it is tested annually for impairment, not amortised.' },
    { kind:'pitfall', body:'When testing impairment, compare carrying amount with recoverable amount = max(Fair value − costs to sell, Value-in-use). Don\'t use replacement cost.' },
  ],

  connections: 'Ch 7 finances PP&E with debt. Ch 11 uses gain/loss as a non-cash adjustment in CFO and reports the cash inflow in CFI. Ch 12 turns LTA into asset turnover and ROA.',
},


/* =================================================================
   CHAPTER 7 — Liabilities & Bonds
   ================================================================= */
ch7: {
  intro: `<p>Liabilities are claims on the firm. The hard part is <strong>bonds</strong>: at issuance, the cash you receive depends on the relationship between the <strong>coupon rate</strong> (what the bond promises to pay) and the <strong>market rate</strong> (what investors demand). If those differ, the bond sells at a premium or a discount, and the difference is amortised over the bond\'s life.</p>
  <p>Three quick rules: coupon = market ⇒ par. Coupon &gt; market ⇒ premium (issuer gets extra cash). Coupon &lt; market ⇒ discount (issuer gets less cash).</p>`,

  definitions: [
    { term:'Note payable', body:'Written promise to repay a stated principal plus interest. Short- (current) or long-term.' },
    { term:'Bond', body:'A debt security: face/par value (paid at maturity), coupon rate (× face = periodic interest), issue date, maturity date.' },
    { term:'Carrying amount of a bond', body:'For premium bond: face + unamortised premium. For discount bond: face − unamortised discount. Approaches face at maturity.' },
    { term:'Effective-interest method', body:'Interest expense = Carrying amount × Market rate per period. Premium/discount amortisation = difference between cash interest paid and interest expense.' },
    { term:'Contingent liability', body:'Possible obligation depending on a future event. <em>Probable + estimable</em> ⇒ recognise. <em>Reasonably possible</em> ⇒ disclose only.' },
  ],

  formulas: [
    { name:'Interest accrual on a note', expr:'\\text{Interest} = P \\times r \\times \\frac{t}{12}',
      when:'Notes spanning year-end. Months only — not days.' },
    { name:'Cash interest on a bond', expr:'\\text{Cash interest} = \\text{Face} \\times \\text{Coupon rate} \\times \\frac{1}{n_{\\text{pmts/yr}}}',
      when:'Every coupon date — fixed regardless of carrying value.' },
    { name:'Interest expense (effective interest)', expr:'\\text{Int. Exp.} = \\text{Carrying amount}_{begin} \\times \\text{Market rate per period}',
      when:'Each period after issue, under IFRS / US-GAAP.' },
    { name:'Bond pricing (issue date PV)',
      expr:'P_0 = \\sum_{t=1}^{n} \\frac{C}{(1+y)^t} + \\frac{F}{(1+y)^n}',
      when:'Decide whether the bond is at par/premium/discount, or to compute the issue price exactly.' },
    { name:'Gain/Loss on early bond retirement', expr:'\\text{G/L} = \\text{Carrying amount} - \\text{Cash paid to repurchase}',
      when:'Buying back bonds before maturity. CARRYING AMOUNT − CASH (positive = GAIN).' },
  ],

  examples: [
    { title:'Issue price relative to face',
      problem:'On Jan 1, 2023, Quechua Inc. issued $400,000 face, 10-year, 10% coupon bonds (semi-annual interest). Market rate = 12%. At what price did the bonds issue?',
      hint:'Coupon (10%) < Market (12%) → cash demanded > cash promised → bond sells at a discount.',
      steps:[
        { what:'Coupon rate < market rate ⇒ DISCOUNT.', why:'Investors require higher yield than the bond promises, so they pay less than face.' },
        { what:'Issue price < $400,000.' },
      ],
      answer:'Bonds issued below $400,000 (discount).'
    },
    { title:'Calendar-year interest accrual on a note',
      problem:'Evans Suppliers signed a 1-year, 6% interest-bearing note for $160,000 on Oct 1, 2024. Interest expense in 2024?',
      steps:[
        { what:'Months in 2024 = Oct 1 → Dec 31 = 3 months.' },
        { what:'Interest = 160,000 × 6% × 3/12 = $2,400.' },
      ],
      answer:'Interest expense 2024 = $2,400.'
    },
    { title:'Gain on early bond retirement',
      problem:'Bunny Inc. retired ¼ of its $419,000 face-value bonds (originally issued at par in 2019) for $99,800 right after recording interest payments.',
      hint:'Originally issued at par means carrying amount = face on retirement (since par stays at face throughout life).',
      steps:[
        { what:'¼ of face = 419,000 / 4 = $104,750. (Carrying amount of retired portion.)' },
        { what:'Cash paid = $99,800.' },
        { what:'G/L = Carrying − Cash = 104,750 − 99,800 = $4,950 GAIN.' },
      ],
      answer:'Gain on early retirement = $4,950.',
      pitfall:'On the cash-flow statement, the cash paid sits in FINANCING activities (full $99,800 outflow). The gain itself appears on the income statement and gets backed out of CFO under indirect method.'
    },
    { title:'Repurchase of bonds with premium balance',
      problem:'Luna SA repurchases €500,000 face bonds. Carrying amount = €512,000 (premium). Recognised gain = €7,000. Cash paid?',
      steps:[
        { what:'G/L = Carrying − Cash. 7,000 = 512,000 − Cash.' },
        { what:'Cash = 512,000 − 7,000 = €505,000.' },
        { what:'CFF outflow = €505,000.' },
      ],
      answer:'Cash paid = €505,000; appears as FINANCING outflow.'
    }
  ],

  memory: [
    { label:'Mnemonic', body:'<strong>"Coupon vs. Market"</strong>: Coupon HIGHER → PREMIUM (lender pays extra to lock in better-than-market rate). Coupon LOWER → DISCOUNT.' },
    { label:'Sign trick', body:'On retirement: <em>"Carry minus Cash"</em> — if carrying > cash you paid, that\'s a GAIN (you got out cheaper than the books said).' },
    { label:'Effective interest one-liner', body:'<em>"Expense floats, cash is fixed."</em> Cash interest = Face × Coupon. Interest expense = Carrying × Market.' },
    { kind:'pitfall', body:'A bond repurchase = FINANCING activity. A repurchase of treasury stock is also FINANCING. Buying long-term INVESTMENTS in another company\'s bonds = INVESTING. Don\'t mix these up.' },
    { kind:'pitfall', body:'Notes payable interest: months count, not the calendar year. Apr 1 → Dec 31 is 9/12 not 1.' },
  ],

  connections: 'Ch 6 uses debt to finance PP&E. Ch 9 contrasts liability (bonds) with equity (shares). Ch 11 splits interest into CFO (typically) and the principal cash flow into CFF.',
},


/* =================================================================
   CHAPTER 8 — Leases
   ================================================================= */
ch8: {
  intro: `<p>Under <strong>IFRS 16</strong>, lessees use a single model: virtually every lease creates a <strong>Right-of-Use (ROU) asset</strong> and a <strong>Lease Liability</strong>, both initially measured at the present value of lease payments. The asset depreciates; the liability accrues interest and is reduced by payments.</p>
  <p>Under <strong>US GAAP (ASC 842)</strong>, lessees still split into <em>Finance</em> and <em>Operating</em> leases — both go on balance sheet, but the income-statement pattern differs (front-loaded for finance leases, straight-line for operating leases).</p>`,

  definitions: [
    { term:'Right-of-Use (ROU) asset', body:'The asset the lessee controls during the lease term. Initial value = lease liability + prepaid lease payments + initial direct costs − incentives.' },
    { term:'Lease liability', body:'PV of remaining lease payments at the lessee\'s incremental borrowing rate (or the rate implicit in the lease, if determinable).' },
    { term:'Finance lease (US GAAP)', body:'Transfers risks/rewards of ownership. Triggered when ANY of: transfer of title, bargain purchase option, lease term ≥ 75% useful life, PV of payments ≥ 90% FV, asset is specialised.' },
    { term:'Operating lease (US GAAP)', body:'Lessee gets short-term use without effective ownership. Income statement shows a single, straight-line lease expense.' },
    { term:'Short-term / low-value exemption (IFRS 16)', body:'Leases ≤ 12 months or low-value (≤ ~$5,000 new) can be expensed straight-line.' },
  ],

  formulas: [
    { name:'Initial lease liability', expr:'\\text{Liab.}_0 = \\sum_{t=1}^{n}\\frac{\\text{Payment}_t}{(1+r)^t}',
      when:'Inception of the lease.' },
    { name:'Period interest', expr:'\\text{Int. Exp.} = \\text{Liab.}_{begin} \\times r',
      when:'Each period.' },
    { name:'Liability roll-forward', expr:'\\text{Liab.}_{end} = \\text{Liab.}_{begin} + \\text{Int. Exp.} - \\text{Payment}',
      when:'Standard amortisation.' },
    { name:'Depreciation of ROU asset', expr:'\\text{Dep.} = \\frac{\\text{ROU}_0}{\\min(\\text{Lease term}, \\text{Useful life})}',
      when:'Straight-line over the shorter of lease term or useful life.' },
  ],

  examples: [
    { title:'Identifying lease classification (US GAAP)',
      problem:'Lease term 8 years; asset useful life 9 years; PV of payments = 92% of FV. Operating or finance?',
      steps:[
        { what:'Term ≥ 75% useful life: 8/9 = 88.9% ✓.' },
        { what:'PV ≥ 90% FV: 92% ✓.' },
        { what:'At least one criterion met ⇒ finance lease.' },
      ],
      answer:'Finance lease — both criteria triggered.'
    },
    { title:'First period under IFRS 16',
      problem:'Lessee enters a 5-year lease, annual payments of €10,000 at year-end, IBR = 8%. Compute initial ROU & first-year movements.',
      steps:[
        { what:'PV = 10,000 × [(1 − 1.08⁻⁵)/0.08] = 10,000 × 3.9927 ≈ €39,927.' },
        { what:'Initial ROU asset = €39,927; initial Lease liability = €39,927.' },
        { what:'Year 1 interest = 39,927 × 8% ≈ €3,194.' },
        { what:'Year 1 cash payment = €10,000 → reduces liability by 10,000 − 3,194 ≈ €6,806.' },
        { what:'End-of-year liability ≈ €33,121.' },
        { what:'Year 1 depreciation = 39,927 / 5 ≈ €7,985.' },
      ],
      answer:'Year 1 expenses ≈ Interest €3,194 + Depreciation €7,985 = €11,180. Cash paid €10,000 → CFO €(3,194) + CFF €(6,806) (IFRS allows interest in either CFO or CFF; principal always CFF).'
    }
  ],

  memory: [
    { label:'Mnemonic', body:'<strong>"ROU → Asset, PV → Liability"</strong>. They start at the same number, and they each fall over time but at different rates.' },
    { label:'IFRS vs GAAP', body:'IFRS: ONE model. GAAP: TWO. The classification under GAAP is whether you straight-line the income statement (operating) or front-load it (finance).' },
    { kind:'pitfall', body:'For an operating lease under GAAP, the balance sheet still shows ROU + lease liability — only the I/S pattern differs. A frequent test trap.' },
  ],

  connections: 'Leases are a non-cash way of obtaining LTA (Ch 6). Financing payments split between CFO (interest, sometimes) and CFF (principal) on the cash flow statement (Ch 11).',
},


/* =================================================================
   CHAPTER 9 — Equity
   ================================================================= */
ch9: {
  intro: `<p>Shareholders' equity is split into <strong>contributed capital</strong> (Common Stock + APIC) and <strong>earned capital</strong> (Retained Earnings), with treasury stock and accumulated OCI sitting alongside. Issuing shares brings cash IN; buying them back as treasury sends cash OUT — both are <strong>FINANCING</strong> activities and never touch net income directly.</p>
  <p>The exam loves: working out dividends from RE roll-forward, computing net contributed capital after a buy-back, and evaluating effects of repurchases on equity.</p>`,

  definitions: [
    { term:'Common stock (par value)', body:'Number of shares issued × par value per share. Par is a legal/historical convention.' },
    { term:'Additional Paid-in Capital (APIC)', body:'Excess of issue price over par per share, summed over all issued shares.' },
    { term:'Treasury stock', body:'Own shares the company has repurchased. Contra-equity, recorded at COST under the cost method (most common). Reduces total equity.' },
    { term:'Retained earnings', body:'Cumulative net income not yet distributed as dividends.' },
    { term:'Outstanding shares', body:'Issued − Treasury. The base for EPS, dividends, and most ratios.' },
    { term:'Stock split', body:'Increases share count and lowers par proportionally. No journal entry of substance — par value redenomination only.' },
    { term:'Dividend declaration', body:'On declaration date: Debit Retained Earnings, Credit Dividends Payable (liability). On payment: Debit Dividends Payable, Credit Cash.' },
  ],

  formulas: [
    { name:'Common stock at par', expr:'\\text{Common Stock} = \\text{Shares Issued} \\times \\text{Par}',
      when:'Always — par × issued, NOT × outstanding.' },
    { name:'APIC at issuance', expr:'\\text{APIC} = (\\text{Issue Price} - \\text{Par})\\times \\text{Shares Issued}',
      when:'Cash received above par.' },
    { name:'Net contributed capital', expr:'\\text{Net Contrib.} = \\text{Common Stock} + \\text{APIC} - \\text{Treasury Stock}',
      when:'Reported in shareholders\' equity section. Don\'t forget the treasury subtraction.' },
    { name:'Dividends from RE roll-forward', expr:'\\text{Dividends} = \\text{NI} - (\\text{RE}_{end} - \\text{RE}_{begin})',
      when:'Common exam Q. Solve when given NI and ΔRE.' },
    { name:'Treasury stock cost', expr:'\\text{Treasury} = \\text{Shares Repurchased} \\times \\text{Repurchase Price}',
      when:'Cost method — record at cash paid, not par.' },
  ],

  examples: [
    { title:'Dividends paid from RE roll-forward',
      problem:'Common stock: $12,000 → $16,000. APIC ↑ $3,700. RE: $70,000 → $91,000. Net income = $38,000. Dividends paid?',
      hint:'Use the RE relationship.',
      steps:[
        { what:'ΔRE = 91,000 − 70,000 = $21,000.' },
        { what:'ΔRE = NI − Dividends ⇒ 21,000 = 38,000 − Dividends.' },
        { what:'Dividends = 38,000 − 21,000 = $17,000.' },
      ],
      answer:'Dividends paid = $17,000.',
      pitfall:'Changes in common stock or APIC do NOT enter the RE roll-forward. Only NI and dividends.'
    },
    { title:'Net contributed capital after buy-back',
      problem:`Artemis Ltd. — total shares issued 10,500,000; par $1; APIC = $27,300,000; outstanding 9,900,000; bought back at $12. Find net contributed capital.`,
      steps:[
        { what:'Common Stock = 10,500,000 × $1 = $10,500,000.' },
        { what:'APIC = $27,300,000.' },
        { what:'Treasury shares = Issued − Outstanding = 10,500,000 − 9,900,000 = 600,000 shares.' },
        { what:'Treasury cost = 600,000 × $12 = $7,200,000.' },
        { what:'Net contributed capital = 10,500,000 + 27,300,000 − 7,200,000 = $30,600,000.' },
      ],
      answer:'Net contributed capital = $30,600,000.'
    },
    { title:'Retained earnings after share issuance, buy-back, and dividends',
      problem:'Issued 600,000 shares of $1 par for $8,000,000. Paid $300,000 dividends. Repurchased some shares mid-year. Net income $1,750,000. Begin-RE $0. Outstanding at year-end 300,000.',
      steps:[
        { what:'Issuance: nothing hits RE — only Common Stock + APIC.' },
        { what:'Buy-back: cost recorded as treasury, no RE effect (cost method).' },
        { what:'RE_end = 0 + 1,750,000 − 300,000 = $1,450,000.' },
      ],
      answer:'RE at year-end = $1,450,000.'
    },
    { title:'Effect of repurchase on equity',
      problem:'Co. repurchased shares for $20,600 (issued in 2022 for $16,000, with $6,600 par).',
      steps:[
        { what:'Repurchase records Treasury Stock $20,600 (cost method).' },
        { what:'Equity is reduced by the cash paid = $20,600.' },
        { what:'No income statement effect — share repurchase is a transaction with owners.' },
      ],
      answer:'Stockholders\' equity DECREASES by $20,600. Net income unaffected.'
    }
  ],

  memory: [
    { label:'Mnemonic', body:'<strong>"PAR ISSUED, NOT OUTSTANDING"</strong>. Common stock at par uses ISSUED shares; outstanding tells you what to use for EPS and dividends.' },
    { label:'Visual', body:'Picture three buckets: Common Stock + APIC = "money owners poured in"; RE = "money the business earned and kept"; Treasury = "money we gave back to a few owners".' },
    { kind:'pitfall', body:'Stock buy-backs DO NOT affect net income. Don\'t fall for "net income decreases by repurchase amount" distractors. Buy-backs do reduce total SE and outstanding shares (which boosts EPS).' },
    { kind:'pitfall', body:'Issuance of shares is NOT revenue — it\'s a CFF inflow with no income-statement effect.' },
  ],

  connections: 'Ch 11 shows share issuances and buy-backs as CFF entries (along with dividends paid). Ch 12 turns equity into ROE (net of treasury) and D/E.',
},


/* =================================================================
   CHAPTER 10 — Financial Investments
   ================================================================= */
ch10: {
  intro: `<p>How a company accounts for an investment in another company depends on the <strong>level of influence</strong>, which is roughly the % of voting shares.</p>
  <ul>
    <li><strong>&lt;20%</strong> (no significant influence): <em>fair value</em> through P&L (Trading) or through OCI (FVOCI / AFS).</li>
    <li><strong>20–50%</strong> (significant influence): <strong>Equity method</strong>. Carry the investment at cost + share of investee's NI − dividends received.</li>
    <li><strong>&gt;50%</strong> (control): <strong>Consolidate</strong>. Combine 100% of the subsidiary's accounts with non-controlling interest for outside owners.</li>
  </ul>`,

  definitions: [
    { term:'Trading securities', body:'Held for short-term trading. Reported at fair value; unrealised gains/losses through P&L.' },
    { term:'FVOCI (IFRS) / AFS (US GAAP, debt only)', body:'Fair value with unrealised G/L in OCI (other comprehensive income). Released to P&L on sale (FVOCI debt) or never (FVOCI equity election).' },
    { term:'Amortised cost / Held-to-Maturity', body:'Debt only, held with positive intent. Carried at amortised cost using effective-interest.' },
    { term:'Significant influence', body:'Often presumed at ≥ 20% voting; gives the investor representation on the board / participation in policy decisions.' },
    { term:'Equity method', body:'Investment carried at cost + share of investee NI − dividends received. Dividends are NOT income — they reduce the investment account.' },
    { term:'Consolidation', body:'Apply when control (typically > 50% of voting shares). The subsidiary\'s assets, liabilities, revenues and expenses are included line-by-line; intercompany items eliminated.' },
  ],

  formulas: [
    { name:'Equity-method carrying value',
      expr:'\\text{Investment}_{end} = \\text{Investment}_{begin} + \\%\\times \\text{NI}_{investee} - \\%\\times \\text{Dividends}_{investee}',
      when:'20–50% ownership.' },
    { name:'Equity-method investment income',
      expr:'\\text{Income}=\\%\\times \\text{NI}_{investee}',
      when:'Goes onto investor\'s income statement; dividends received do NOT.' },
  ],

  examples: [
    { title:'Equity method — investment account roll-forward',
      problem:'Investor owns 30% of Investee. Beginning investment = $200,000. Investee NI = $100,000; Investee paid $40,000 dividends. New balance & income recognised?',
      steps:[
        { what:'Income recognised = 30% × 100,000 = $30,000.' },
        { what:'Dividends received = 30% × 40,000 = $12,000 (reduces the investment account, not income).' },
        { what:'New investment = 200,000 + 30,000 − 12,000 = $218,000.' },
      ],
      answer:'Income = $30,000. New investment carrying value = $218,000.'
    },
    { title:'Identifying significant influence',
      problem:'At what level of investment is significant influence often presumed?',
      answer:'≥ 20% voting shares — apply the equity method.',
      steps:[
        { what:'< 20% → fair value (trading or FVOCI).' },
        { what:'20% ≤ x < 50% → equity method.' },
        { what:'≥ 50% (control) → consolidate.' },
      ],
    }
  ],

  memory: [
    { label:'Mnemonic', body:'<strong>"20-50-100"</strong> — at 20% start equity method, at 50% start consolidating. The thresholds are the only thing you need to memorise to pick the framework.' },
    { kind:'pitfall', body:'Under the EQUITY method, dividends are NOT income — they reduce the carrying value. Under the FAIR-VALUE method (<20%), dividends ARE income.' },
  ],

  connections: 'For consolidation, NCI sits inside Equity (Ch 9). Investment cash flows (purchase / sale of securities) sit in CFI (Ch 11). Equity-method income shows up in NI but cash received differs — adjustment in Ch 11 indirect method.',
},


/* =================================================================
   CHAPTER 11 — Statement of Cash Flows
   ================================================================= */
ch11: {
  intro: `<p>The income statement is on accrual basis. The cash flow statement re-narrates the same period in <strong>cash terms</strong>, split into three buckets:</p>
  <ul>
    <li><strong>CFO</strong> — operating: cash from running the business (collections from customers, payments to suppliers, interest, taxes).</li>
    <li><strong>CFI</strong> — investing: buying/selling long-term assets and investments.</li>
    <li><strong>CFF</strong> — financing: equity issuances/buy-backs, debt issuance/retirement, dividends paid.</li>
  </ul>
  <p>The exam almost always uses the <strong>indirect method</strong> for CFO: start with net income, add back non-cash items (depreciation, losses), and adjust for changes in working capital.</p>`,

  definitions: [
    { term:'Indirect method', body:'CFO starts at Net Income; adjustments bring it to cash.' },
    { term:'Direct method', body:'CFO is shown as actual cash inflows/outflows by category. Less common in practice.' },
    { term:'Working capital changes', body:'Operating current assets and liabilities. Increase in operating asset (AR, Inv, Prepaid) ⇒ subtract. Increase in operating liability (AP, Unearned Rev, Accrued Liab) ⇒ add.' },
  ],

  formulas: [
    { name:'Indirect-method CFO',
      expr:'\\text{CFO} = \\text{NI} + \\text{Non-cash exp.} \\pm \\text{G/L on disposals} - \\Delta\\text{Op.Assets} + \\Delta\\text{Op.Liabilities}',
      when:'Default exam question.' },
    { name:'Direct-method skeleton',
      inline:'Cash receipts from customers − Cash paid to suppliers − Cash paid for operating expenses − Cash paid for interest − Cash paid for taxes = CFO.',
      when:'When a problem gives you cash collections and payments instead of NI.' },
    { name:'Cash collected from customers',
      expr:'\\text{Collections} = \\text{Sales} - \\Delta \\text{AR}',
      when:'Reverse the AR build to back out cash.' },
    { name:'Cash paid to suppliers',
      expr:'\\text{Cash paid} = \\text{COGS} + \\Delta \\text{Inv.} - \\Delta \\text{AP}',
      when:'Direct-method operating outflows.' },
  ],

  derivations: [
    { title:'Why we add back depreciation',
      body:`<p>Depreciation expense reduces NI but never cost any cash this period (the cash went out when we bought the asset, years ago). So when re-deriving cash from NI, we add depreciation back. Same logic for amortisation and impairment.</p>` },
    { title:'Why a gain on sale is subtracted in CFO',
      body:`<p>If we sold a machine for €58,000 (NBV €45,000), we recognised a €13,000 gain in NI. But the actual €58,000 cash inflow is recorded under <strong>investing</strong>. Leaving the gain in CFO would double-count it. So we subtract the gain in CFO and add the full €58,000 in CFI. Losses do the opposite — add back in CFO.</p>` },
    { title:'Working capital sign rules',
      body:`<p>An increase in AR means more sales were on credit than cash collected — actual cash is LESS than reported revenue. So we SUBTRACT the AR increase. An increase in AP means we owe suppliers more than we paid — actual cash paid is LESS than reported COGS, so we ADD the AP increase.</p>` },
  ],

  examples: [
    { title:'Classic indirect-method CFO',
      problem:`Gel IQ, recent year:
        <ul><li>Net income $570,000</li>
        <li>AP decreased $49,000</li>
        <li>Prepaid increased $38,000</li>
        <li>Depreciation $68,500</li>
        <li>AR decreased $48,000</li>
        <li>Loss on sale of asset $38,000</li>
        <li>Wages payable increased $22,500</li>
        <li>Unearned revenue decreased $38,000</li></ul>
        Find CFO.`,
      hint:'Tag each line: + or −, why?',
      steps:[
        { what:'+NI $570,000.' },
        { what:'+Depreciation $68,500.', why:'Non-cash.' },
        { what:'+Loss on sale $38,000.', why:'Non-cash; full cash inflow already in CFI.' },
        { what:'+AR decrease $48,000.', why:'Customers paid more than they billed; cash > sales.' },
        { what:'−Prepaid increase $38,000.', why:'Used more cash than expensed.' },
        { what:'−AP decrease $49,000.', why:'Paid down suppliers — cash out.' },
        { what:'+Wages payable increase $22,500.', why:'Owed more than paid; cash saved.' },
        { what:'−Unearned rev decrease $38,000.', why:'Earned what we previously deferred — cash recognised earlier than this period.' },
        { what:'Sum: 570 + 68.5 + 38 + 48 − 38 − 49 + 22.5 − 38 = 622 (in thousands).' },
      ],
      answer:'CFO = $622,000.'
    },
    { title:'Net financing cash flow',
      problem:'Signoria: issued $67,000 bonds; paid $9,700 dividends; bought treasury stock $16,700; bought new equipment $20,700. Find CFF.',
      hint:'Equipment goes to CFI, not CFF.',
      steps:[
        { what:'CFF: +67,000 − 9,700 − 16,700 = $40,600.' },
        { what:'Equipment is INVESTING.' },
      ],
      answer:'Net CFF = $40,600.'
    },
    { title:'Net investing cash flow',
      problem:'Pitti sold equipment for $130,000; bought building $3,255,000; sold long-term investments $145,000; paid dividends $15,000. Find CFI.',
      steps:[
        { what:'CFI: +130,000 − 3,255,000 + 145,000 = −$2,980,000.' },
        { what:'Dividends are CFF, not CFI.' },
      ],
      answer:'Net CFI = −$2,980,000.'
    },
    { title:'Indirect-method with multiple adjustments',
      problem:`Vaporetto: NI $304,500; loss on sale $19,450; depreciation $42,250; AR $400,000→$500,000; Inv $100,000→$75,000; AP $200,000→$280,000; Accrued Liab $300,000→$260,000. Find CFO.`,
      steps:[
        { what:'+NI $304,500.' },
        { what:'+Loss on sale $19,450.' },
        { what:'+Depreciation $42,250.' },
        { what:'−ΔAR $100,000.', why:'AR rose by $100,000.' },
        { what:'+ΔInv $25,000.', why:'Inventory dropped — cash inflow effect.' },
        { what:'+ΔAP $80,000.', why:'AP rose — owe suppliers more.' },
        { what:'−ΔAccrued $40,000.', why:'Accrued liab fell — paid them down.' },
        { what:'Sum: 304,500 + 19,450 + 42,250 − 100,000 + 25,000 + 80,000 − 40,000 = $331,200.' },
      ],
      answer:'CFO = $331,200.'
    },
    { title:'CFO with a SkyBridge-style table',
      problem:'NI €150,000; Depreciation €35,000; ΔAR +€19,000; ΔInv +€14,000; ΔUnearned Rev +€7,000; ΔPrepaid −€4,000. Find CFO.',
      steps:[
        { what:'+NI 150,000.' },
        { what:'+Dep 35,000.' },
        { what:'−ΔAR 19,000.' },
        { what:'−ΔInv 14,000.' },
        { what:'+ΔUnearned 7,000.' },
        { what:'+ΔPrepaid (decrease) 4,000.' },
        { what:'Sum: 150 + 35 − 19 − 14 + 7 + 4 = 163.' },
      ],
      answer:'CFO = €163,000.'
    },
  ],

  memory: [
    { label:'Mnemonic for indirect-method signs', body:'<strong>"AR Inv Prepaid go DOWN ⇒ ADD"</strong>. Operating ASSETS up ⇒ subtract. Operating LIABILITIES up ⇒ add. (Mirror image.)' },
    { label:'Mnemonic for buckets', body:'<strong>O-I-F</strong> = <strong>O</strong>perating (running the business), <strong>I</strong>nvesting (long-term assets), <strong>F</strong>inancing (with owners and creditors).' },
    { label:'One-liner', body:'<em>"Treasury stock = CFF. Equipment = CFI. Bonds issued = CFF. Bonds bought as investment = CFI."</em>' },
    { kind:'pitfall', body:'AN INCREASE IN AR is SUBTRACTED, not added, under the indirect method. (Cash collected was less than sales reported.) Many MCQs invert this.' },
    { kind:'pitfall', body:'Cash dividends PAID are CFF. Cash dividends RECEIVED are CFO under IFRS-default and US-GAAP. Don\'t mix the two directions.' },
    { kind:'pitfall', body:'On disposal: the FULL cash inflow goes to CFI; the gain (or loss) is removed from CFO. Don\'t put the gain in CFI.' },
  ],

  connections: 'CFS articulates with B/S (cash account changes by exactly the total of CFO+CFI+CFF) and I/S (NI is the start of indirect CFO). Used in Ch 12 ratios (e.g. CFO/Total Liab).',
},


/* =================================================================
   CHAPTER 12 — Financial Ratios & Analysis
   ================================================================= */
ch12: {
  intro: `<p>Ratios let you compare across companies and across time. They fall into four families:</p>
  <ol>
    <li><strong>Liquidity</strong> — can the company meet short-term obligations?</li>
    <li><strong>Profitability</strong> — how much does each unit of sales / asset / equity throw off?</li>
    <li><strong>Solvency / leverage</strong> — can the company service its debt?</li>
    <li><strong>Efficiency / activity</strong> — how fast do assets turn into cash?</li>
  </ol>
  <p>Memorise the formulas <strong>and</strong> the typical signs of "good vs. bad". Many MCQs give you a table and ask you which company has the best [X].</p>`,

  formulas: [
    { name:'Current Ratio', expr:'\\text{Current Ratio} = \\frac{\\text{Current Assets}}{\\text{Current Liabilities}}',
      when:'Liquidity. Above 1 = positive working capital.' },
    { name:'Quick (Acid-Test) Ratio',
      expr:'\\text{Quick} = \\frac{\\text{Cash} + \\text{Short-term Inv.} + \\text{AR}}{\\text{Current Liab.}}',
      when:'Liquidity excluding inventory and prepaid. Stricter test.' },
    { name:'Cash Ratio',
      expr:'\\text{Cash Ratio} = \\frac{\\text{Cash} + \\text{Cash Equivalents}}{\\text{Current Liab.}}',
      when:'Strictest liquidity test.' },
    { name:'Gross Profit Margin', expr:'\\text{GPM} = \\frac{\\text{Sales} - \\text{COGS}}{\\text{Sales}}',
      when:'Profitability — pricing and direct cost control.' },
    { name:'Operating Profit Margin', expr:'\\text{OPM} = \\frac{\\text{Operating Income}}{\\text{Sales}}',
      when:'Profit before financing and taxes.' },
    { name:'Net Profit Margin', expr:'\\text{NPM} = \\frac{\\text{Net Income}}{\\text{Sales}}',
      when:'Bottom-line profitability.' },
    { name:'Return on Assets (ROA)', expr:'\\text{ROA} = \\frac{\\text{Net Income}}{\\text{Average Total Assets}}',
      when:'How much income each $ of assets generates.' },
    { name:'Return on Equity (ROE)', expr:'\\text{ROE} = \\frac{\\text{Net Income}}{\\text{Average Equity}}',
      when:'Return for the residual claimants.' },
    { name:'DuPont decomposition',
      expr:'\\text{ROE} = \\text{NPM} \\times \\text{Asset Turnover} \\times \\text{Equity Multiplier}',
      when:'Diagnose what drives ROE.' },
    { name:'Debt-to-Equity (D/E)', expr:'\\text{D/E} = \\frac{\\text{Total Liabilities}}{\\text{Total Equity}}',
      when:'Solvency / leverage.' },
    { name:'Debt-to-Assets', expr:'\\text{D/A} = \\frac{\\text{Total Liabilities}}{\\text{Total Assets}}',
      when:'Capital structure: % financed by creditors.' },
    { name:'Times Interest Earned (Coverage)',
      expr:'\\text{TIE} = \\frac{\\text{NI} + \\text{Interest Exp.} + \\text{Tax Exp.}}{\\text{Interest Exp.}} = \\frac{\\text{EBIT}}{\\text{Interest Exp.}}',
      when:'How many times can EBIT cover interest? Higher = safer.' },
    { name:'Inventory Turnover', expr:'\\text{Inv. T/O} = \\frac{\\text{COGS}}{\\text{Avg Inv.}}',
      when:'Efficiency: higher = faster sell-through.' },
    { name:'Days Inventory Outstanding (DIO)',
      expr:'\\text{DIO} = \\frac{\\text{Avg Inv.}}{\\text{COGS}} \\times 365',
      when:'Days of stock on hand.' },
    { name:'Days Sales Outstanding (DSO)',
      expr:'\\text{DSO} = \\frac{\\text{Avg AR}}{\\text{Sales}} \\times 365',
      when:'Days to collect receivables.' },
    { name:'Days Payables Outstanding (DPO)',
      expr:'\\text{DPO} = \\frac{\\text{Avg AP}}{\\text{COGS}} \\times 365',
      when:'Days we take to pay suppliers.' },
    { name:'Cash Conversion Cycle (CCC)',
      expr:'\\text{CCC} = \\text{DIO} + \\text{DSO} - \\text{DPO}',
      when:'Days between paying for inventory and collecting from customers.' },
  ],

  examples: [
    { title:'Times Interest Earned (Coverage)',
      problem:'HarborView SA: Net income €210,000; Interest €28,000; Tax €32,000. TIE?',
      steps:[
        { what:'EBIT = NI + Interest + Tax = 210 + 28 + 32 = €270,000.' },
        { what:'TIE = 270,000 / 28,000 = 9.6428…' },
      ],
      answer:'TIE ≈ 9.64.'
    },
    { title:'Coverage with cash flow data',
      problem:'Rainbow: CFO $362,400; NI $310,800; Interest $33,600; Tax $248,400. TIE?',
      steps:[
        { what:'EBIT = 310,800 + 33,600 + 248,400 = $592,800.' },
        { what:'TIE = 592,800 / 33,600 = 17.642…' },
      ],
      answer:'TIE ≈ 17.64.',
      pitfall:'Don\'t use CFO in the TIE numerator. The textbook formula uses EBIT.'
    },
    { title:'ROA (using ending or average?)',
      problem:'Year 1 assets €900; Year 2 assets €1,300; NI Year 2 €180. ROA Year 2?',
      hint:'Use average total assets for the period.',
      steps:[
        { what:'Avg Assets = (900 + 1,300)/2 = €1,100.' },
        { what:'ROA = 180 / 1,100 = 16.36%.' },
      ],
      answer:'ROA ≈ 16.36%.'
    },
    { title:'Debt-to-Equity',
      problem:'Total assets $40,500; Total equity $19,100. D/E?',
      steps:[
        { what:'Total liabilities = Assets − Equity = 40,500 − 19,100 = $21,400.' },
        { what:'D/E = 21,400 / 19,100 = 1.1204…' },
      ],
      answer:'D/E ≈ 1.12.'
    },
    { title:'DSO',
      problem:'Avg AR $12,900; Sales $139,000; 365-day year. DSO?',
      steps:[
        { what:'DSO = (12,900 / 139,000) × 365 ≈ 33.87 days.' },
      ],
      answer:'DSO ≈ 33.87 days.'
    },
    { title:'Inventory Turnover (single year)',
      problem:'COGS €4,200; Inventory (Dec 31) €600. Inv Turnover?',
      hint:'Without prior-year balance, use ending inventory.',
      steps:[
        { what:'Inv Turnover = 4,200 / 600 = 7.0.' },
      ],
      answer:'Inventory Turnover = 7.0.'
    },
    { title:'Cash Conversion Cycle',
      problem:'DIO 52; DPO 34; DSO 35. CCC?',
      steps:[
        { what:'CCC = DIO + DSO − DPO = 52 + 35 − 34 = 53 days.' },
      ],
      answer:'CCC = 53 days.'
    },
    { title:'Net Profit Margin',
      problem:'Revenue €1,200; OpEx (excl D&A) €120; D&A €60; COGS €720; Interest €30; Tax €54.',
      steps:[
        { what:'EBIT = 1,200 − 720 − 120 − 60 = 300.' },
        { what:'NI = 300 − 30 − 54 = 216.' },
        { what:'NPM = 216 / 1,200 = 18%.' },
      ],
      answer:'NPM = 18%.'
    },
    { title:'ROE',
      problem:'EBIT $133,000; Interest $18,300; Tax $29,800; Avg equity $693,000. ROE?',
      steps:[
        { what:'NI = 133,000 − 18,300 − 29,800 = $84,900.' },
        { what:'ROE = 84,900 / 693,000 = 12.25%.' },
      ],
      answer:'ROE ≈ 12.25%.'
    },
  ],

  memory: [
    { label:'Mnemonic for the four families', body:'<strong>"L-P-S-E"</strong>: <strong>L</strong>iquidity (current/quick), <strong>P</strong>rofitability (margins, ROA, ROE), <strong>S</strong>olvency (D/E, D/A, TIE), <strong>E</strong>fficiency (turnovers, DIO/DSO/DPO).' },
    { label:'CCC visual', body:'You PAY for inventory upfront (DIO + DSO clock starts). You DON\'T pay suppliers until DPO days later (clock stops). Net cash gap = DIO + DSO − DPO.' },
    { label:'High vs. Low quick guide', body:'<strong>Higher = better:</strong> liquidity, profitability, turnovers, coverage. <strong>Lower = better:</strong> D/E, D/A, days (DIO/DSO/CCC). <strong>DPO higher</strong> = good (pay later) but only up to a point — don\'t damage supplier relationships.' },
    { label:'TIE one-liner', body:'<em>"NI + Interest + Tax = EBIT. EBIT / Interest = TIE."</em> Burn this in.' },
    { kind:'pitfall', body:'Do NOT use net income in TIE numerator — use EBIT. NI has interest already deducted.' },
    { kind:'pitfall', body:'For ROA / ROE, when both year balances are given, use the AVERAGE.' },
  ],

  connections: 'Ratios consume every other chapter. Ch 5 → Inv Turnover, DIO. Ch 4 → DSO. Ch 6 → Asset Turnover. Ch 7 → TIE, D/E. Ch 9 → ROE. Ch 11 → cash-flow-to-debt, CFO/Sales.',
},

};

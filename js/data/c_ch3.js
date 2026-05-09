// Chapter 3 — Accrual Accounting, Adjusting Entries & The Accounting Cycle
// Sourced directly from FRA Chapter 2 & 3 slide deck (Jana Juice running example).
window.CHAPTER_CONTENT = window.CHAPTER_CONTENT || {};
window.CHAPTER_CONTENT.ch3 = {

intro: `
<p><strong>Accrual accounting</strong> is the engine of the income statement. It is required by both <strong>U.S. GAAP and IFRS</strong> and rests on two paired rules:</p>
<ul>
<li><strong>Revenue recognition</strong> — revenues are recorded <em>when earned</em> (i.e., when the good/service has been delivered to the customer), even if cash has not yet been received.</li>
<li><strong>Matching</strong> — expenses are recorded <em>when incurred</em> (matched against the revenues they helped to produce), even if cash has not yet been paid.</li>
</ul>
<p>The Target example from the slides makes this concrete. If Target buys $80,000 of inventory in May and sells half of it for $140,000 cash, May revenue is $140,000 and May cost of goods sold is $40,000 — regardless of whether customers paid in cash, on credit, or whether Target itself paid the supplier. Revenue is tied to <em>delivery</em>; expense is tied to the revenue the cost helped to earn.</p>

<h3>The accounting cycle</h3>
<p>The accounting cycle is the recurring sequence of activities that turns raw transactions into financial statements. The slides organise it as five major steps that recur each fiscal period:</p>
<ol>
<li><strong>Analyse</strong> each transaction — which accounts are affected, in what direction, and by how much.</li>
<li><strong>Record</strong> in the <em>journal</em> using debits and credits (chronological book of original entry), then <strong>post</strong> to the <em>general ledger</em> (the listing of all accounts and their balances, often visualised as T-accounts).</li>
<li><strong>Adjust</strong> at period-end so that revenues are properly recognised and expenses properly matched. This step is what accrual accounting <em>requires</em> — without adjustments the books would be on a cash basis.</li>
<li><strong>Report</strong> — prepare an <em>adjusted trial balance</em> and from it the four primary statements (income statement, statement of stockholders' equity, balance sheet, statement of cash flows).</li>
<li><strong>Close</strong> temporary accounts (revenues, expenses, dividends) into Retained Earnings so they start the next period at zero. Permanent accounts (Assets, Liabilities, Equity) carry forward.</li>
</ol>

<h3>Debits, credits and normal balances</h3>
<p>Every transaction touches at least two accounts so that <strong>debits = credits</strong>. The side of the T-account on which an account <em>increases</em> is its <em>normal balance</em>:</p>
<table class="tbl">
<thead><tr><th>Account type</th><th>Normal balance</th><th>Increase with</th><th>Decrease with</th></tr></thead>
<tbody>
<tr><td>Assets</td><td>Debit</td><td>Debit</td><td>Credit</td></tr>
<tr><td>Liabilities</td><td>Credit</td><td>Credit</td><td>Debit</td></tr>
<tr><td>Common stock / APIC</td><td>Credit</td><td>Credit</td><td>Debit</td></tr>
<tr><td>Retained Earnings</td><td>Credit</td><td>Credit</td><td>Debit</td></tr>
<tr><td>Revenues</td><td>Credit</td><td>Credit</td><td>Debit</td></tr>
<tr><td>Expenses (and Dividends)</td><td>Debit</td><td>Debit</td><td>Credit</td></tr>
<tr><td>Contra-asset (e.g. Accumulated Depreciation)</td><td>Credit</td><td>Credit</td><td>Debit</td></tr>
</tbody>
</table>
<p>Mnemonic from the slides: revenues and equity-increasing items live on the <em>credit</em> side; expenses and dividends (which reduce equity) live on the <em>debit</em> side. This drops out of the expanded equation: <code>A = L + CS + RE</code>, where RE = Beg.RE + Revenues − Expenses − Dividends.</p>

<h3>Why adjustments exist</h3>
<p>By the end of a period some transactions are only partially recorded. Cash may have moved before the work was done (deferrals) or work may have been done before cash moved (accruals). Adjusting entries reset the books to economic reality. Two structural facts about every adjusting entry the slides emphasise:</p>
<ul>
<li><strong>They almost never touch Cash.</strong> Cash was already exchanged in a prior period (deferrals) or has not yet been exchanged (accruals).</li>
<li><strong>They always touch at least one balance-sheet account and one income-statement account.</strong> That is what shifts revenue/expense recognition to the right period.</li>
</ul>
<p>The chapter is built around the <strong>Jana Juice</strong> running example — a small energy-drink retailer that issues stock, borrows, buys inventory and equipment, sells products on cash and on account, sells gift cards (deferred revenue), accrues wages and interest, and depreciates fixtures. Every adjustment type below is illustrated with a Jana Juice transaction.</p>
`,

definitions: [
  { id:'def-accrual', term:'Accrual accounting', body:'Required by U.S. GAAP and IFRS. Revenues are recognised when earned (delivered), expenses when incurred (matched against the related revenue) — not when cash moves.' },
  { id:'def-matching', term:'Matching principle', body:'Expenses are recorded in the same period as the revenues they helped generate. Cost of goods sold is the textbook example: COGS is recognised when the related sales revenue is recognised.' },
  { id:'def-journal', term:'General journal', body:'The chronological "book of original entry." Each business activity is captured as a journal entry of debits and credits before any posting.' },
  { id:'def-ledger', term:'General ledger', body:'A listing of every account and its current balance. Accounts are grouped into the five elements: Assets, Liabilities, Equity, Revenues, Expenses.' },
  { id:'def-coa', term:'Chart of accounts', body:'A structured list of all account titles and identification codes used by the entity in its general ledger.' },
  { id:'def-account', term:'Account', body:'A record of increases and decreases for a single asset, liability, equity, revenue, or expense item. Visualised as a T-account.' },
  { id:'def-tacct', term:'T-account', body:'Graphic shorthand for an account: debits on the left side of the T, credits on the right. Posting reference numbers identify each entry.' },
  { id:'def-debit-credit', term:'Debit / Credit', body:'Left-side / right-side entries. <em>Debit</em> simply means "left," <em>credit</em> means "right." Whether the entry is an increase or decrease depends on the account type.' },
  { id:'def-double-entry', term:'Double-entry accounting', body:'Every transaction affects at least two accounts so that total debits equal total credits, preserving <code>A = L + E</code>.' },
  { id:'def-tb', term:'Trial balance', body:'A list of all general-ledger accounts with their respective balances. Confirms debits = credits before further work. Comes in three flavours: <em>unadjusted</em>, <em>adjusted</em>, and <em>post-closing</em>.' },
  { id:'def-utb', term:'Unadjusted trial balance', body:'The trial balance prepared after all regular transactions are posted but <em>before</em> period-end adjusting entries. Starting point of the adjusting process.' },
  { id:'def-atb', term:'Adjusted trial balance', body:'The trial balance after all adjusting entries are posted. The four primary financial statements are prepared directly from this list.' },
  { id:'def-ptb', term:'Post-closing trial balance', body:'Trial balance after closing entries — contains <em>only</em> permanent accounts (assets, liabilities, equity). All revenues, expenses and dividends should be zero.' },
  { id:'def-deferral', term:'Deferral', body:'Adjustment that <em>follows</em> a prior cash transaction already recorded on the balance sheet. Decreases a balance-sheet account and increases an income-statement account. Two flavours: deferred (unearned) revenue and deferred (prepaid) expense.' },
  { id:'def-accrual-adj', term:'Accrual adjustment', body:'Adjustment for an amount <em>not previously recorded</em>. Increases both a balance-sheet account and an income-statement account. Two flavours: accrued revenue (asset + revenue) and accrued expense (liability + expense).' },
  { id:'def-unearned', term:'Unearned (deferred) revenue', body:'A liability for cash collected before the good/service is delivered. Examples: gift cards, magazine subscriptions, airline miles, season tickets, online membership prepaid in advance.' },
  { id:'def-prepaid', term:'Prepaid expense', body:'An asset for cash paid before benefits are consumed. Examples: prepaid rent, prepaid insurance, supplies on hand. Allocated to expense as the benefit is used up.' },
  { id:'def-depr', term:'Depreciation', body:'Systematic allocation of the cost of a long-lived tangible asset (equipment, buildings, vehicles) to the periods it benefits. The slides use straight-line: <code>Annual depreciation = Cost / Useful life</code>.' },
  { id:'def-accum-depr', term:'Accumulated depreciation', body:'A <em>contra-asset</em> account (XA) that holds the cumulative depreciation taken on an asset. Reported on the balance sheet as a deduction from the gross asset to give net book value (carrying amount).' },
  { id:'def-temp', term:'Temporary (nominal) accounts', body:'Revenues, expenses and dividends. Their balances are reset to zero each period via closing entries; the net effect lands in Retained Earnings.' },
  { id:'def-perm', term:'Permanent (real) accounts', body:'Assets, liabilities, and equity (including Retained Earnings itself). Their ending balances roll into the next period unchanged.' },
  { id:'def-closing', term:'Closing entries', body:'End-of-period entries that transfer revenue and expense balances into Retained Earnings, leaving the temporary accounts at zero. Two-step process: close revenues (debit them, credit RE), then close expenses (credit them, debit RE).' },
  { id:'def-cycle', term:'Accounting cycle', body:'The full period-end sequence: Analyse → Record (journal) → Post (ledger) → Adjust → Report → Close → Post-closing trial balance.' },
],

formulas: [
  { id:'f-ni', name:'Net Income (income statement bottom line)',
    expr:'\\text{Net Income} = \\text{Revenues} - \\text{Expenses}',
    when:'Always. After all adjusting entries, this is what closes into Retained Earnings.' },
  { id:'f-re', name:'Retained Earnings roll-forward',
    expr:'\\text{RE}_{end} = \\text{RE}_{beg} + \\text{Net Income} - \\text{Dividends}',
    when:'Links the income statement to the balance sheet. Closing entries operationalise this identity.' },
  { id:'f-ae', name:'Accounting equation (must balance after every JE)',
    expr:'\\text{Assets} = \\text{Liabilities} + \\text{Stockholders\' Equity}',
    when:'Every journal entry — including every adjusting entry — must preserve this identity.' },
  { id:'f-sl-depr', name:'Straight-line depreciation',
    expr:'\\text{Depreciation expense per period} = \\dfrac{\\text{Asset cost}}{\\text{Useful life}}',
    when:'When allocating the cost of a depreciable long-lived asset evenly across periods. Jana Juice: $10{,}200 / 5\\text{ years} / 12 = \\$170/\\text{month}$.' },
  { id:'f-interest', name:'Simple interest accrual',
    expr:'\\text{Interest expense} = \\text{Principal} \\times \\text{Annual rate} \\times \\dfrac{\\text{months}}{12}',
    when:'Accruing interest on a note at period end. Jana Juice June: $\\$12{,}000 \\times 12\\% \\times \\tfrac{1}{12} = \\$120$.' },
  { id:'f-prepaid', name:'Prepaid-expense allocation',
    expr:'\\text{Expense for period} = \\dfrac{\\text{Total prepaid amount}}{\\text{Total months covered}} \\times \\text{months elapsed}',
    when:'Adjusting prepaid insurance, prepaid rent, prepaid advertising. Jana Juice: $\\$800 \\div 4 = \\$200$ per month for insurance covering June–Sept.' },
  { id:'f-unearned', name:'Unearned-revenue allocation',
    expr:'\\text{Revenue earned} = \\dfrac{\\text{Total cash collected in advance}}{\\text{Total periods of service}} \\times \\text{periods delivered}',
    when:'Gift cards redeemed, subscription periods elapsed, membership months delivered. Jana Juice June: $\\$300 / 3 = \\$100$ membership earned.' },
  { id:'f-tax', name:'Income tax expense',
    expr:'\\text{Income tax expense} = \\text{Income before tax} \\times \\text{tax rate}',
    when:'Income before tax is computed <em>after</em> all other adjustments. Jana Juice June: $\\$2{,}020 \\times 30\\% = \\$606$.' },
  { id:'f-bv', name:'Book value (carrying amount) of a depreciable asset',
    expr:'\\text{Book value} = \\text{Cost} - \\text{Accumulated depreciation}',
    when:'Net amount shown on the balance sheet for PP&E. Jana Juice June 30: $\\$10{,}200 - \\$170 = \\$10{,}030$.' },
],

derivations: [
  { title:'Why adjusting entries do not touch Cash',
    body:`<p>Every adjustment fixes timing, not cash. A <em>deferral</em> is the second leg of a transaction whose first leg already moved cash and parked it on the balance sheet (Prepaid Insurance was created when cash went out; Unearned Revenue was created when cash came in). The adjustment now <em>moves the parked amount</em> off the balance sheet and into the income statement. No new cash is involved.</p>
<p>An <em>accrual</em> is the first leg of a transaction whose cash leg will only happen later (wages owed at month-end paid next week; interest owed but paid at maturity). The adjustment recognises the revenue or expense now and creates a receivable or payable. Cash will move later, when the receivable is collected or the payable is paid — that future event is a regular transaction, not the adjustment.</p>
<p>So if you ever see a proposed adjusting entry with a Cash debit or credit, it is wrong.</p>` },
  { title:'Closing process — proving the math',
    body:`<p>For Jana Juice in June, total revenues after adjustment are $7{,}600 + 60 = \\$7{,}660$ and total expenses are $1{,}700 + 1{,}950 + 700 + 800 + 200 + 170 + 120 + 606 = \\$6{,}246$. Closing the books in two journal entries:</p>
<ol>
<li><strong>Close revenues:</strong> debit Sales Revenue $7{,}600 and Interest Income $60; credit Retained Earnings $7{,}660.</li>
<li><strong>Close expenses:</strong> debit Retained Earnings $6{,}246; credit each expense for its balance ($1{,}700 + $1{,}950 + ... + $606).</li>
</ol>
<p>Net effect on RE: $+7{,}660 − 6{,}246 = +\\$1{,}414$ — exactly Net Income. Then the dividend of $100 (already debited to RE during the period in the slide example) reduces it further. Beginning RE of $\\$660$ + NI $\\$1{,}414$ − Dividends $\\$100$ = $\\$1{,}974$, which matches the post-closing trial balance.</p>` },
],

examples: [
  { title:'Jana Juice (a) — Adjusting unearned revenue (gift-card / membership)',
    problem:`<p>In May, customers prepaid $300 for a three-month membership (June, July, August) to Jana Juice's online health program. The original entry was Cash 300 / Unearned Revenue 300. By 30 June, one month of the membership has been delivered. Prepare the adjusting entry.</p>`,
    hint:`<p>Deferred revenue: liability is decreased, revenue is increased. Allocate one of three months of the prepayment.</p>`,
    steps:[
      { what:'Identify monthly amount to recognise', why:'$300 ÷ 3 months = $100 per month earned.' },
      { what:'Reduce the liability', why:'Debit Unearned Revenue $100 (−L) — Jana Juice has now performed one month of service.' },
      { what:'Recognise the revenue', why:'Credit Sales Revenue $100 (+R, +SE).' },
      { what:'Check identity', why:'Balance-sheet liability falls $100; income-statement revenue rises $100; equity rises $100; A = L + E still holds.' },
    ],
    answer:`<code>Unearned Revenue (−L) 100 / Sales Revenue (+R, +SE) 100</code>. Unearned Revenue ledger after adjustment: $300 + $600 (June gift-card sale) − $100 = <strong>$800</strong>.`,
    pitfall:`<p>Students often credit the full $300 in the first month. Only $100 has been earned — the other $200 is still an obligation to deliver July and August service.</p>`,
    alt:`<p>If the company forgot this entry, liabilities would be overstated by $100 and revenue (and net income, and retained earnings) would be understated by $100.</p>` },

  { title:'Jana Juice (b) — Adjusting prepaid insurance',
    problem:`<p>On 1 June Jana Juice paid $800 for a 4-month insurance policy covering June–September (originally recorded Prepaid Insurance 800 / Cash 800). Prepare the 30 June adjusting entry and report the prepaid balance and insurance expense.</p>`,
    hint:`<p>Deferred (prepaid) expense: asset down, expense up. Straight-line allocation across 4 months.</p>`,
    steps:[
      { what:'Compute monthly insurance expense', why:'$800 ÷ 4 = $200 per month.' },
      { what:'Recognise expense', why:'Debit Insurance Expense $200 (+E, −SE).' },
      { what:'Reduce the asset', why:'Credit Prepaid Insurance $200 (−A).' },
      { what:'Updated balances', why:'Prepaid Insurance ends at $800 − $200 = $600 (3 months still benefit future periods).' },
    ],
    answer:`<code>Insurance Expense 200 / Prepaid Insurance 200</code>. Balance sheet shows Prepaid Insurance $600; income statement shows Insurance Expense $200.`,
    pitfall:`<p>Confusing the cash payment (already booked on 1 June) with the adjusting entry. The adjustment is just the timing fix.</p>`,
    alt:`<p>If skipped: assets overstated $200, expenses understated $200, net income overstated $200.</p>` },

  { title:'Jana Juice (c) — Depreciation as a deferral / contra-asset',
    problem:`<p>Jana Juice's fixtures and equipment were purchased on 1 June for $10,200 and are expected to benefit the company for 5 years (no residual). Compute monthly depreciation, prepare the 30 June adjusting entry, and show how the equipment appears on the balance sheet.</p>`,
    hint:`<p>Use straight-line. The credit goes to the contra-asset account, not to Equipment directly.</p>`,
    steps:[
      { what:'Annual depreciation', why:'$10,200 / 5 years = $2,040 per year.' },
      { what:'Monthly depreciation', why:'$2,040 / 12 = $170 per month.' },
      { what:'Journal entry', why:'Debit Depreciation Expense $170 (+E, −SE); credit Accumulated Depreciation $170 (+XA, −A).' },
      { what:'Balance-sheet presentation', why:'Fixtures and Equipment $10,200, Less Accumulated depreciation (170), Equipment, net = $10,030.' },
    ],
    answer:`<code>Depreciation Expense 170 / Accumulated Depreciation 170</code>. Net book value at 30 June = $10,030.`,
    pitfall:`<p>Crediting the asset account itself instead of Accumulated Depreciation. The contra-asset is what preserves both cost and accumulated allocation on the balance sheet.</p>`,
    alt:`<p>If forgotten: PP&E (net) overstated by $170, expenses understated by $170, net income (and RE) overstated by $170.</p>` },

  { title:'Jana Juice (d) — Accrued revenue (interest receivable)',
    problem:`<p>Late in June, Jana Juice's bank announces it will start paying interest on small-business checking accounts, paid in cash on the 5th of the following month. Jana Juice earned $60 interest in June. Prepare the adjusting entry.</p>`,
    hint:`<p>Accrued revenue: asset and revenue both go up. Cash will be received next month, but the revenue is earned in June.</p>`,
    steps:[
      { what:'Create the receivable', why:'Debit Interest Receivable $60 (+A) — bank owes Jana Juice the cash.' },
      { what:'Recognise revenue', why:'Credit Interest Income $60 (+R, +SE).' },
      { what:'July collection (next period)', why:'When cash arrives on 5 July: Cash 60 / Interest Receivable 60. Not an adjusting entry — it is a regular transaction.' },
    ],
    answer:`<code>Interest Receivable 60 / Interest Income 60</code>. Both balance-sheet and income-statement rise by $60.`,
    pitfall:`<p>Waiting until the cash arrives in July to record any of the revenue. That violates accrual / revenue-recognition.</p>`,
    alt:`<p>If skipped: assets understated $60, revenue understated $60, net income and RE understated $60.</p>` },

  { title:'Jana Juice (e) and (f) — Accrued expenses (wages and interest)',
    problem:`<p>(e) Jana Juice's employees earned $550 during the last week of June; they will be paid on 6 July. (f) The $12,000 loan taken on 1 June carries a 12% annual interest rate, payable monthly. Prepare both adjustments at 30 June.</p>`,
    hint:`<p>Accrued expense: liability up, expense up. For (f) compute one month of interest on $12,000.</p>`,
    steps:[
      { what:'Wages adjustment', why:'Debit Wages Expense $550 (+E, −SE); credit Wages Payable $550 (+L).' },
      { what:'Interest computation', why:'$12,000 × 12% × 1/12 = $120.' },
      { what:'Interest adjustment', why:'Debit Interest Expense $120 (+E, −SE); credit Interest Payable $120 (+L).' },
      { what:'Cash settlement next month', why:'When wages are paid 6 July: Wages Payable 550 / Cash 550. When interest is paid: Interest Payable 120 / Cash 120. Neither is the adjusting entry — they are subsequent regular entries.' },
    ],
    answer:`Two adjusting entries; both increase liabilities and expenses, with no Cash effect at 30 June.`,
    pitfall:`<p>Computing interest on the wrong base or for the wrong fraction of the year. Always isolate principal × rate × time, with time as a fraction of a year.</p>`,
    alt:`<p>If wages adjustment skipped: liabilities understated $550, expenses understated $550, NI and RE overstated $550. Same pattern for interest at $120.</p>` },

  { title:'Jana Juice (g) — Income tax expense and the closing entries',
    problem:`<p>After all other June adjustments, Jana Juice's income before taxes is $2,020. The tax rate is 30% and tax will be paid the following month. Prepare the income-tax adjustment, then the two closing entries that zero out revenues and expenses.</p>`,
    hint:`<p>Tax is the <em>last</em> adjustment because it depends on every other revenue and expense. Closing entries then move all temporary balances into Retained Earnings.</p>`,
    steps:[
      { what:'Compute tax', why:'$2,020 × 30% = $606. Net income = $2,020 − $606 = $1,414.' },
      { what:'Tax accrual', why:'Debit Income Tax Expense $606 (+E, −SE); credit Income Tax Payable $606 (+L).' },
      { what:'Close revenues', why:'Debit Sales Revenue $7,600 and Interest Income $60; credit Retained Earnings $7,660.' },
      { what:'Close expenses', why:'Debit Retained Earnings $6,246; credit each expense for its balance: COGS 1,700, Wages 1,950, Rent 700, Advertising 800, Insurance 200, Depreciation 170, Interest 120, Tax 606.' },
      { what:'Net RE effect', why:'+$7,660 − $6,246 = +$1,414 — Net Income lands cleanly in RE.' },
    ],
    answer:`Tax accrual: <code>Income Tax Expense 606 / Income Tax Payable 606</code>. Closing: revenues into RE ($7,660), expenses out of RE ($6,246). Post-closing RE = $660 (start) + $1,414 (NI) − $100 (dividend) = $1,974.`,
    pitfall:`<p>Closing dividends through the income statement. Dividends are a direct debit to Retained Earnings, never an expense.</p>`,
    alt:`<p>If only some expenses are closed, the post-closing trial balance will show non-zero temporary accounts — a red flag that closing was incomplete.</p>` },
],

memory: [
  { label:'Two pairs, four adjustments',
    body:`<p>Memorise the 2×2 grid: Deferrals (cash already moved → adjust the parked balance-sheet account) vs Accruals (cash hasn\'t moved → create a new receivable/payable). Each row has a revenue version and an expense version. That is all four adjustment types.</p>
<table class="tbl">
<thead><tr><th></th><th>Revenue side</th><th>Expense side</th></tr></thead>
<tbody>
<tr><td><strong>Deferral</strong> (BS exists)</td><td>Unearned Revenue ↓ , Revenue ↑</td><td>Prepaid asset ↓ , Expense ↑</td></tr>
<tr><td><strong>Accrual</strong> (new BS)</td><td>Receivable ↑ , Revenue ↑</td><td>Payable ↑ , Expense ↑</td></tr>
</tbody>
</table>` },
  { label:'Cash never moves in an adjusting entry',
    body:`<p>If a draft adjusting entry includes Cash, it is not an adjusting entry — it is a regular transaction. Adjustments only realign timing.</p>` },
  { kind:'pitfall', body:`<p><strong>Forgetting depreciation.</strong> If no depreciation entry: Equipment (net) is overstated, expenses are understated, net income is overstated, and Retained Earnings is overstated. The error is the depreciation amount on each line.</p>` },
  { kind:'pitfall', body:`<p><strong>Recognising the entire prepayment as revenue when received.</strong> Cash for season tickets, gift cards, or annual subscriptions creates a liability, not revenue. Revenue is recognised only as the obligation is satisfied.</p>` },
  { kind:'pitfall', body:`<p><strong>Closing dividends as an expense.</strong> Dividends are a distribution of equity, not an expense. They never appear on the income statement; they reduce RE directly.</p>` },
  { kind:'pitfall', body:`<p><strong>Treating the contra-asset as a normal asset.</strong> Accumulated Depreciation has a credit normal balance and is <em>subtracted</em> on the balance sheet. Crediting the equipment account directly makes the gross-cost history disappear.</p>` },
  { label:'Order of period-end work',
    body:`<p>Unadjusted TB → adjusting entries (deferrals, accruals, depreciation, then income tax last) → adjusted TB → financial statements → closing entries → post-closing TB. Income tax always comes last because it depends on every other revenue/expense.</p>` },
  { label:'Effect-table shortcut for "what if I forgot adjustment X"',
    body:`<p>Every adjusting entry has the form "BS account ± / IS account ±". If you forget it: the BS account is misstated by exactly the omitted amount, and so is the IS account, and so are net income and Retained Earnings. Practise tracing one omission through all four statements — it\'s a classic exam item.</p>` },
],

connections: `
<p>Chapter 3 is the engine room of every later chapter. <strong>Chapters 5–6 (Inventory, PP&E)</strong> reuse the matching principle and depreciation mechanics introduced here. <strong>Chapter 4 (Revenue Recognition & Receivables)</strong> formalises the "revenue when earned" rule into the IFRS 15 / ASC 606 five-step model and adds the allowance-for-doubtful-accounts adjustment, which behaves like an additional accrual against revenue. <strong>Chapter 7 (Liabilities)</strong> generalises the interest-accrual mechanic onto bonds and notes. <strong>Chapter 11 (Statement of Cash Flows)</strong> is the inverse of this chapter — it backs accruals out of net income to derive operating cash flow. And the closing entries practised here are exactly what feeds <strong>Chapter 9 (Equity)</strong>\'s Retained-Earnings roll-forward.</p>
`,
};

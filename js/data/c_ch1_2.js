// Chapter 1 & 2 — Foundations & Constructing Financial Statements
// Sourced directly from FRA Chapters 1 & 2 slide deck.
window.CHAPTER_CONTENT = window.CHAPTER_CONTENT || {};
window.CHAPTER_CONTENT.ch1_2 = {

intro: `
<p><strong>Accounting</strong> is the process of recording, summarising, reporting and analysing financial transactions to help people make informed economic decisions. The course distinguishes two branches:</p>
<ul>
<li><strong>Financial accounting</strong> — for decision makers <em>outside</em> the company (investors, creditors, suppliers, regulators).</li>
<li><strong>Managerial accounting</strong> — for decision makers <em>inside</em> the company (top management, marketing, operations).</li>
</ul>
<p>This course is about the financial-accounting side. Its core problem: outside users cannot see inside the firm, so they need a standardised, audited story of how the business is doing. That story comes in four linked statements built on one equation, <code>A = L + E</code>.</p>
<p>The chapter sets up <em>why</em> we need standardised reporting (<strong>information asymmetry</strong> between insiders and outside investors / creditors), <em>who</em> uses it, and <em>how</em> the four statements articulate. Chapter 2 then drills into what counts as an asset, when revenue is recognised, and how each transaction flows through the books.</p>

<h3>Who uses accounting information, and why?</h3>
<table class="tbl">
<thead><tr><th>User</th><th>Decisions made</th><th>Information needed</th></tr></thead>
<tbody>
<tr><td>Shareholders / investors / analysts</td><td>Buy or sell stock?</td><td>Cash in/out, assets, liabilities, profitability trends</td></tr>
<tr><td>Creditors / banks</td><td>Lend or not? Loan terms, interest rates, collateral</td><td>Solvency, debt levels, cash-flow reliability</td></tr>
<tr><td>Suppliers / customers</td><td>Trade with this firm? Long-term partnership?</td><td>Liquidity, ability to pay, growth</td></tr>
<tr><td>Top management / board</td><td>Strategy, evaluation, compensation</td><td>Operating performance, segments, cost structure</td></tr>
<tr><td>Tax authorities / regulators</td><td>Tax assessment, compliance</td><td>Income, deductions, disclosures</td></tr>
</tbody>
</table>

<h3>Costs and benefits of disclosure</h3>
<p><strong>Disclosure</strong> = providing financial information to external users. Why companies do it (and why standards force them to):</p>
<ul>
<li><strong>Benefits:</strong> lower borrowing rates, better supplier terms, signals of stability that build long-term relationships.</li>
<li><strong>Costs:</strong> hiring accountants and auditors, exposing competitive information, political costs (regulation and taxes that follow visibility).</li>
</ul>

<h3>Three classes of business activity</h3>
<p>Every transaction sits in one of three buckets — and the cash-flow statement (Ch 11) literally splits cash this way:</p>
<ol>
<li><strong>Investing activities</strong> — acquiring and disposing of resources (assets) used to produce / sell. Short-term assets are used quickly; long-term assets over years.</li>
<li><strong>Financing activities</strong> — methods companies use to fund those investments. Two sources: <em>debt financing</em> (creditors, must be repaid) and <em>equity financing</em> (owners, no repayment obligation).</li>
<li><strong>Operating activities</strong> — using company resources to produce, promote and sell products or services. Generates revenue and incurs operating expenses; net income also includes some non-operating items like interest.</li>
</ol>
`,

definitions: [
  { id:'def-acc', term:'Accounting', body:'The process of recording, summarising, reporting and analysing financial transactions to help users make informed economic decisions.' },
  { id:'def-fin-acc', term:'Financial accounting', body:'Accounting for <em>external</em> decision makers (investors, creditors). Governed by IFRS or US-GAAP standards.' },
  { id:'def-mgmt-acc', term:'Managerial accounting', body:'Accounting for <em>internal</em> decision makers (managers). Not constrained by external standards.' },
  { id:'def-fy', term:'Fiscal year', body:'A one-year reporting period — often called an "accounting year." Need not end on December 31. Microsoft → June 30, Nike → May 31, Facebook → December 31.' },
  { id:'def-asset', term:'Asset', body:'A resource <strong>controlled</strong> by the entity (legal title or unrestricted right to use), arising from <strong>past events</strong>, <strong>expected to provide future economic benefit</strong> that can be measured. All three conditions must hold.' },
  { id:'def-liab', term:'Liability', body:'A <strong>present obligation</strong> arising from past events, settlement of which is expected to result in an outflow of economic benefits. Recognised when (i) the obligation is <em>probable</em>, (ii) the amount is known or can be reasonably estimated, and (iii) the transaction causing the obligation has occurred.' },
  { id:'def-equity', term:'Equity (stockholders\' equity)', body:'The residual interest in the assets of the entity after deducting all liabilities. Split into <em>contributed capital</em> (Common Stock + APIC) and <em>earned capital</em> (Retained Earnings) — minus Treasury Stock and ± Accumulated OCI.' },
  { id:'def-ca', term:'Current assets', body:'Assets expected to be converted to cash or used in operations within the next year (or one operating cycle, if longer). Cash, marketable securities, AR, inventory, prepaids.' },
  { id:'def-nca', term:'Non-current (long-term) assets', body:'Listed after current assets. Long-term financial investments, PP&E, intangibles. Not expected to expire within one year.' },
  { id:'def-cl', term:'Current liabilities', body:'Liabilities due within one year (or one operating cycle). AP, accrued liabilities, short-term borrowings, deferred (unearned) revenue, current portion of long-term debt.' },
  { id:'def-ncl', term:'Non-current liabilities', body:'Long-term debt and other obligations not due within one year (long-term tax liabilities, warranty liabilities, deferred compensation).' },
  { id:'def-cc', term:'Contributed Capital', body:'Common Stock at par + Additional Paid-in Capital (APIC). What the owners directly put in via stock purchases. (Treasury Stock is a contra-equity reducing this.)' },
  { id:'def-re', term:'Retained Earnings', body:'Cumulative income since the company began business minus dividends paid. RE links the income statement to the balance sheet.' },
  { id:'def-rev', term:'Revenue', body:'Increases in net assets caused by the company\'s operating activities (selling goods or services).' },
  { id:'def-exp', term:'Expense', body:'Decreases in net assets caused by the company\'s revenue-generating activities. Three buckets: cost of products/services sold, operating costs, non-operating costs.' },
  { id:'def-ni', term:'Net income (earnings, profit)', body:'Revenues − Expenses for a period. Reported on the income statement.' },
  { id:'def-accrual', term:'Accrual basis', body:'Required by IFRS / US-GAAP. Transactions are recognised <strong>when they occur</strong>, not when cash moves. Revenue when earned; expense when incurred (matching).' },
  { id:'def-articulation', term:'Articulation', body:'The way the four primary financial statements link to one another. Net Income (income statement) flows into Retained Earnings (statement of SE), which flows into the Balance Sheet. The Cash account on the Balance Sheet is reconciled by the Statement of Cash Flows.' },
  { id:'def-disc', term:'Disclosure', body:'Providing financial information to external users. Beyond the four statements: MD&A, footnotes, auditor report, regulatory filings.' },
  { id:'def-going', term:'Going concern', body:'The entity is assumed to continue operating in the foreseeable future. Underlies historical-cost valuation (rather than liquidation value).' },
  { id:'def-cap-vs-exp', term:'Capitalise vs. expense', body:'<em>Capitalise</em>: record an expenditure as an asset because it produces benefits beyond the current period. <em>Expense</em>: recognise immediately on the income statement because the benefit is consumed in the period.' },
  { id:'def-treasury', term:'Treasury stock', body:'Common stock that the company has reacquired. Recorded at cost; contra-equity (reduces total SE).' },
  { id:'def-aoci', term:'Accumulated OCI', body:'Cumulative changes in equity that have NOT been reported in the income statement (e.g., FV changes on FVOCI investments, foreign-currency translation adjustments, certain pension remeasurements).' },
],

formulas: [
  { id:'f-eq', name:'The Accounting Equation', expr:'\\text{Assets} = \\text{Liabilities} + \\text{Stockholders\' Equity}',
    when:'ALWAYS — every journal entry must keep this equation balanced. The single most important identity in financial accounting.' },
  { id:'f-eq-exp', name:'Expanded equation',
    expr:'A = L + (\\text{Common Stock} + \\text{APIC} + \\text{Retained Earnings} - \\text{Treasury Stock} \\pm \\text{AOCI})',
    when:'When you need to trace exactly where a transaction hits — contributed capital vs. earned vs. mark-to-market through OCI.' },
  { id:'f-ni', name:'Net Income', expr:'\\text{Net Income} = \\text{Revenues} - \\text{Expenses}',
    when:'Top-line of the income statement build-up.' },
  { id:'f-gp', name:'Gross Profit',
    expr:'\\text{Gross Profit} = \\text{Revenues} - \\text{Cost of Goods Sold}',
    when:'Profitability before operating expenses; signals pricing power and direct cost control.' },
  { id:'f-re', name:'Retained Earnings roll-forward',
    expr:'\\text{RE}_{end} = \\text{RE}_{begin} + \\text{Net Income} - \\text{Dividends}',
    when:'Closing the period. Solve for the missing piece (often dividends or NI).' },
  { id:'f-nwc', name:'Net Working Capital',
    expr:'\\text{NWC} = \\text{Current Assets} - \\text{Current Liabilities}',
    when:'Short-term liquidity buffer. Negative NWC ⇒ relying on supplier / short-term credit.' },
  { id:'f-cr', name:'Current Ratio',
    expr:'\\text{Current Ratio} = \\frac{\\text{Current Assets}}{\\text{Current Liabilities}}',
    when:'Liquidity ratio. >1 = positive working capital. Higher = safer (but very high may signal idle assets).' },
  { id:'f-qr', name:'Quick (Acid-Test) Ratio',
    expr:'\\text{Quick} = \\frac{\\text{Cash} + \\text{Short-term Securities} + \\text{Accounts Receivable}}{\\text{Current Liabilities}}',
    when:'Stricter liquidity — excludes inventory and prepaid expenses (which can\'t be converted to cash quickly).' },
  { id:'f-roe', name:'Return on Equity (ROE)',
    expr:'\\text{ROE} = \\frac{\\text{Net Income}}{\\text{Average Stockholders\' Equity}}',
    when:'Profitability from the owners\' viewpoint. Nike example: ROE declined in fiscal year 2020.' },
  { id:'f-de', name:'Debt-to-Equity Ratio',
    expr:'\\text{D/E} = \\frac{\\text{Total Liabilities}}{\\text{Total Equity}}',
    when:'Solvency / risk metric. Higher D/E = more leverage = higher risk.' },
],

derivations: [
  { title:'How the four statements articulate',
    body:`<p>The chapter\'s biggest idea is that the four statements are <strong>linked</strong>:</p>
    <ol>
    <li><strong>Income Statement</strong> reports performance over a period: NI = Revenue − Expenses.</li>
    <li><strong>Statement of Stockholders\' Equity</strong> takes that NI and adds it to beginning Retained Earnings; subtracts dividends. Also tracks share issuances and buy-backs.</li>
    <li><strong>Balance Sheet</strong> is a snapshot at period-end; the new RE flows into the equity section. Cash, AR, AP and other working-capital balances also reflect the period\'s activity.</li>
    <li><strong>Statement of Cash Flows</strong> reconciles the change in Cash on the Balance Sheet by splitting it into operating, investing, and financing activities.</li>
    </ol>
    <p>This articulation is why a single transaction can touch multiple statements at once. E.g., a credit sale of inventory:</p>
    <ul>
    <li>Income Statement: Revenue ↑, COGS ↑.</li>
    <li>Balance Sheet: AR ↑ (asset), Inventory ↓ (asset), RE ↑ (equity, via NI).</li>
    <li>Cash Flow Statement: no immediate cash flow; later when AR is collected, CFO inflow.</li>
    </ul>` },
  { title:'Why retained earnings link the income statement to the balance sheet',
    body:`<p>The income statement is a "movie" — events over a year. The balance sheet is a "photograph" — a snapshot at one moment.</p>
    <p>The bridge between them is <strong>Retained Earnings</strong>:</p>
    <p style="text-align:center"><code>RE_end = RE_begin + Net Income − Dividends</code></p>
    <p>So when an investor asks "where did the year\'s profit go?", the answer is: into Retained Earnings on the balance sheet (minus whatever was paid out as dividends).</p>` },
],

examples: [
  { title:'Effect of buying equipment with cash',
    problem:'A corporation purchases factory equipment for $50,000 cash. Show the effect on the accounting equation.',
    hint:'Both sides of the entry hit the asset side of the equation.',
    steps:[
      { what:'Cash (asset) ↓ $50,000.', why:'Cash is paid out.' },
      { what:'Equipment (asset) ↑ $50,000.', why:'A new asset of equal value is acquired.' },
      { what:'Liabilities and Equity unchanged. Total assets unchanged.', why:'Asset swap. The cost will be expensed gradually via depreciation over the asset\'s useful life.' },
    ],
    answer:'Total assets unchanged.',
    pitfall:'Don\'t book an expense at acquisition. Expense recognition happens through depreciation across the asset\'s useful life. (Capitalise first, then depreciate.)'
  },
  { title:'Receiving cash for unearned (deferred) revenue',
    problem:'A law firm receives €2,000 cash for legal services to be provided next month. Record the impact.',
    hint:'You owe the customer the service — that\'s a present obligation.',
    steps:[
      { what:'Cash (asset) ↑ €2,000.' },
      { what:'Unearned (Deferred) Revenue (liability) ↑ €2,000.', why:'Duty to deliver future service = liability.' },
      { what:'No revenue recognised yet. Net income unaffected.' },
    ],
    answer:'Liability €2,000; effect on equity = 0.',
    pitfall:'Receipt of cash ≠ revenue recognition. Don\'t credit Revenue at receipt.'
  },
  { title:'Computing Retained Earnings from the roll-forward',
    problem:'Beginning Retained Earnings = $50,000. Net income for the year = $35,000. Dividends declared = $12,000. Compute ending Retained Earnings.',
    steps:[
      { what:'RE_end = RE_begin + NI − Div = 50,000 + 35,000 − 12,000.' },
    ],
    answer:'Ending RE = $73,000.'
  },
  { title:'Net Working Capital and Current Ratio',
    problem:'A company has Current Assets $96,000 and Current Liabilities $48,000. Find NWC and Current Ratio.',
    steps:[
      { what:'NWC = 96,000 − 48,000 = $48,000.' },
      { what:'Current Ratio = 96,000 / 48,000 = 2.00.' },
    ],
    answer:'NWC = $48,000; Current Ratio = 2.00. The company has $2 of current assets for every $1 of current liabilities.'
  },
  { title:'Goodwill recognition rule',
    problem:'When can goodwill be recorded as an asset?',
    hint:'Internally generated goodwill is not capitalised under IFRS or US-GAAP.',
    steps:[
      { what:'Goodwill is recorded only when an entity acquires another business and pays more than the fair value of identifiable net assets acquired.' },
      { what:'Internally generated goodwill (good reputation, brand built up over time) is NEVER recorded. (No reliable measurement.)' },
      { what:'After acquisition: goodwill is tested annually for impairment, NOT amortised.' },
    ],
    answer:'Goodwill = Purchase Price − Fair Value of identifiable net assets acquired. Recognised only on a business combination.'
  },
  { title:'Tracing equity back from the balance sheet',
    problem:'Total assets $600,000; total liabilities $320,000; common stock $200,000; dividends declared $40,000. Sales revenue $800,000. Find Retained Earnings, Net Income and total Expenses.',
    steps:[
      { what:'Equity = A − L = 600,000 − 320,000 = $280,000.' },
      { what:'RE = Equity − Common Stock = 280,000 − 200,000 = $80,000.' },
      { what:'RE = NI − Div ⇒ 80,000 = NI − 40,000 ⇒ NI = $120,000.' },
      { what:'Sales − Expenses = NI ⇒ 800,000 − Expenses = 120,000 ⇒ Expenses = $680,000.' },
    ],
    answer:'RE = $80,000; NI = $120,000; Expenses = $680,000.'
  },
],

memory: [
  { label:'Mnemonic — DEAD CLER', body:'Normal balances: <strong>D</strong>ebits increase <strong>E</strong>xpenses, <strong>A</strong>ssets, <strong>D</strong>ividends · <strong>C</strong>redits increase <strong>L</strong>iabilities, <strong>E</strong>quity, <strong>R</strong>evenues.' },
  { label:'Visual — the scale', body:'Picture a balance scale. Assets on the left pan; Liabilities + Equity on the right. Every entry has to leave the scale level. If the scale tips, you made an error.' },
  { label:'One-liners that trip exam writers', body:'<em>"Cash receipt before earning the revenue is a liability, not income."</em> · <em>"Issuance of shares is FINANCING, not revenue."</em> · <em>"Repurchase of own shares is FINANCING."</em> · <em>"Equity = residual."</em>' },
  { label:'Articulation drill', body:'Whenever you see a transaction in an exam question, immediately ask: which of the four statements does it touch? A credit sale touches three (income statement, balance sheet, eventually cash flow). A cash dividend touches two (balance sheet, cash flow) but NOT the income statement.' },
  { kind:'pitfall', body:'Many MCQs hinge on noticing that <strong>issuance of ordinary shares is NOT revenue</strong> — it\'s a financing inflow that increases Common Stock + APIC, no income-statement effect.' },
  { kind:'pitfall', body:'Don\'t confuse <strong>capital</strong> (contributed) and <strong>earned</strong> equity. Stock issuance hits Common Stock + APIC. Net income hits Retained Earnings. Mixing these up costs marks.' },
  { kind:'pitfall', body:'Treasury stock is a <strong>contra-equity</strong>, not an asset. It REDUCES total stockholders\' equity by the cash paid (cost method).' },
],

connections: `
<p>This foundation underlies every later chapter. Mapping:</p>
<ul>
<li><strong>Ch 3</strong> adds adjusting entries — accruals/deferrals — that bridge the gap between cash and accrual accounting.</li>
<li><strong>Ch 4</strong> drills into when revenue is recognised (IFRS 15) and the receivables that result.</li>
<li><strong>Ch 5</strong> shows how COGS is computed from inventory.</li>
<li><strong>Ch 6</strong> handles long-term assets — the depreciation that follows capitalisation.</li>
<li><strong>Ch 7</strong> is the liability side: bonds and notes.</li>
<li><strong>Ch 9</strong> is the equity side: shares, dividends, treasury stock.</li>
<li><strong>Ch 11</strong> takes the accrual statements and back-derives the cash flows.</li>
<li><strong>Ch 12</strong> turns these same numbers into ratios for analysis.</li>
</ul>
<p>Ratios introduced here that re-appear in Ch 12: <em>ROE, D/E, Current Ratio, Quick Ratio, Net Working Capital</em>.</p>
`,

};

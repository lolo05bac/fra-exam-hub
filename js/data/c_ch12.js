// Chapter 12 — Analyzing and Reporting Financial Statements (Ratios)
// Sourced from FRA Chapter 12 slide deck.
window.CHAPTER_CONTENT = window.CHAPTER_CONTENT || {};
window.CHAPTER_CONTENT.ch12 = {

intro: `
<p>Financial-statement analysis converts raw line items into <strong>ratios</strong> so users can compare firms across size, time and industry. A ratio in isolation tells you almost nothing — every ratio must be benchmarked against (i) the same firm in earlier periods (<strong>time-trend analysis</strong>), (ii) similar competitors (<strong>peer group analysis</strong>), or (iii) industry averages.</p>

<h3>Three preparatory tools</h3>
<p>Before computing ratios, two transformations of the statements make patterns more visible:</p>
<ul>
<li><strong>Vertical (common-size) analysis</strong> — restate each income-statement line as a % of net sales, and each balance-sheet line as a % of total assets. Lets you compare firms of different sizes on a like-for-like basis and spot anomalies (e.g. SG&A creeping from 18% to 24% of sales).</li>
<li><strong>Horizontal analysis</strong> — express each line as a % change from a base year: <em>(Year2 − Year1) / Year1</em>. Highlights growth and trends.</li>
<li><strong>Ratio analysis</strong> — the relative magnitude of two figures, often across statements (e.g. NI from the income statement over equity from the balance sheet).</li>
</ul>

<h3>The four ratio families</h3>
<table class="tbl">
<thead><tr><th>Family</th><th>Question answered</th><th>Key ratios</th><th>Higher or lower better?</th></tr></thead>
<tbody>
<tr><td><strong>Liquidity</strong></td><td>Can we pay short-term bills?</td><td>Current, Quick, Cash, OCFCL</td><td>Higher (within reason)</td></tr>
<tr><td><strong>Profitability</strong></td><td>How much profit per $ of sales / assets / equity?</td><td>GPM, OPM, NPM, ROA, ROE</td><td>Higher</td></tr>
<tr><td><strong>Solvency / leverage</strong></td><td>Can we service long-term debt?</td><td>D/E, D/A, TIE</td><td>D/E and D/A lower; TIE higher</td></tr>
<tr><td><strong>Efficiency / activity</strong></td><td>How fast do assets turn into cash?</td><td>Inv T/O, AR T/O, PP&E T/O, DIO/DSO/DPO, CCC</td><td>Turnovers higher; days lower (DPO can be higher)</td></tr>
</tbody>
</table>

<h3>ROE — the primary summary measure</h3>
<p><strong>ROE = Net Income / Average Equity</strong>. ROE is the headline return number because it answers what an equity holder earns on their average investment. It is decomposed via the <strong>DuPont identity</strong>:</p>
<p>ROE = Net Profit Margin × Asset Turnover × Equity Multiplier</p>
<p>Equivalently, ROA = NPM × Asset Turnover, and ROE = ROA × Equity Multiplier. ROE − ROA gives <strong>Return on Financial Leverage (ROFL)</strong> — the portion of ROE produced by the use of debt.</p>

<h3>Cash Conversion Cycle</h3>
<p>The CCC tells us how many days of working capital we have to fund: from paying suppliers to collecting from customers.</p>
<p>CCC = DIO + DSO − DPO</p>
<ul>
<li><strong>DIO</strong> — days inventory sits before it is sold.</li>
<li><strong>DSO</strong> — days sales sit in AR before collection.</li>
<li><strong>DPO</strong> — days we take to pay our suppliers.</li>
</ul>
<p>Companies aim for a short CCC. Some industries (Amazon, supermarkets) achieve <em>negative</em> CCCs by collecting cash from customers faster than they pay suppliers — they fund growth from supplier credit rather than equity.</p>

<h3>Ratios are not theory</h3>
<p>Several caveats are worth burning in:</p>
<ul>
<li>There is no underlying theory selecting which ratios are "the right ones" — they are diagnostic tools, not laws.</li>
<li>Diversified firms are hard to benchmark — there is no clean peer group.</li>
<li>IFRS vs US GAAP differences (and FIFO vs weighted-average inventory) make cross-border comparisons noisy.</li>
<li>Seasonality and one-off events distort year-over-year ratios.</li>
<li>"Average" performance is not the same as "good" performance — and there is no objective threshold for many ratios.</li>
</ul>
`,

definitions: [
  { id:'def-vertical', term:'Vertical (common-size) analysis', body:'Restating each income-statement item as a % of net sales and each balance-sheet item as a % of total assets. Enables comparison of firms of different sizes.' },
  { id:'def-horizontal', term:'Horizontal analysis', body:'Expressing each line as a % change from a base year: (Year2 − Year1) / Year1. Highlights growth and trends across time.' },
  { id:'def-liquidity', term:'Liquidity', body:'The ability to meet near-term obligations as they come due. Measured with the current, quick, cash and OCFCL ratios.' },
  { id:'def-solvency', term:'Solvency', body:'The ability to meet long-term obligations, including periodic interest payments and principal repayment. Measured with D/E, D/A and TIE.' },
  { id:'def-wc', term:'Working capital', body:'Current assets − Current liabilities. Positive working capital implies expected cash inflows exceed outflows in the short run, ignoring future sales.' },
  { id:'def-cur-ratio', term:'Current ratio', body:'Current Assets / Current Liabilities. Above 1.0 indicates positive working capital. A coarse liquidity measure.' },
  { id:'def-quick', term:'Quick (acid-test) ratio', body:'(Cash + Short-term investments + AR) / Current Liabilities. Excludes inventories and prepaid because these may be hard to convert to cash without markdowns.' },
  { id:'def-cash-ratio', term:'Cash ratio', body:'(Cash + Cash equivalents) / Current Liabilities. The strictest liquidity test — ignores even AR collectibility.' },
  { id:'def-roa', term:'Return on Assets (ROA)', body:'Net Income / Average Total Assets. The return earned on each dollar invested in assets — captures both operating and investing performance.' },
  { id:'def-roe', term:'Return on Equity (ROE)', body:'Net Income / Average Stockholders\' Equity. The primary summary measure of company performance.' },
  { id:'def-rofl', term:'Return on Financial Leverage (ROFL)', body:'ROE − ROA. The portion of ROE attributable to the firm\'s use of debt financing.' },
  { id:'def-de', term:'Debt-to-Equity', body:'Total Liabilities / Total Stockholders\' Equity. Higher = more reliance on creditor financing, less solvency, more risk. Public-company average ≈ 1.0.' },
  { id:'def-tie', term:'Times Interest Earned (TIE)', body:'EBIT / Interest expense. EBIT can be backed out as NI + Interest + Tax. Higher TIE = smaller risk of default — more operating profit available to cover interest.' },
  { id:'def-invt', term:'Inventory turnover', body:'COGS / Average Inventory. Number of times the inventory is sold during the period. Higher = faster sell-through.' },
  { id:'def-ppet', term:'PP&E turnover (PPET)', body:'Sales revenue / Average PP&E (net of accumulated depreciation). Sales generated per $ of fixed assets — productivity of long-term capital.' },
  { id:'def-dio', term:'Days Inventory Outstanding (DIO)', body:'365 / Inventory turnover. Average days inventory sits before it is sold.' },
  { id:'def-dso', term:'Days Sales Outstanding (DSO)', body:'(Avg AR / Sales) × 365. Average days to collect from customers after a sale.' },
  { id:'def-dpo', term:'Days Payables Outstanding (DPO)', body:'(Avg AP / COGS) × 365. Average days the firm takes to pay its suppliers.' },
  { id:'def-ccc', term:'Cash Conversion Cycle (CCC)', body:'DIO + DSO − DPO. Net days of working capital to be funded between paying suppliers and collecting from customers.' },
  { id:'def-eps', term:'Earnings Per Share (basic EPS)', body:'(Net Income − Preferred Dividends) / Weighted Avg Common Shares Outstanding. Income available per common share.' },
  { id:'def-pe', term:'Price-to-Earnings (P/E)', body:'Price per Share / EPS. Price paid for a unit of current earnings; typically higher for firms with expected growth.' },
  { id:'def-mb', term:'Market-to-Book ratio', body:'Market price per share / Book value per share. Indicates how the market values a firm relative to its accounting equity.' },
  { id:'def-payout', term:'Dividend Payout', body:'Dividends per Share / EPS. Proportion of earnings distributed as dividends.' },
  { id:'def-divyield', term:'Dividend Yield', body:'Dividends per Share / Price per Share. Cash return to shareholders relative to current share price.' },
],

formulas: [
  { id:'f-current', name:'Current Ratio',
    expr:'\\text{Current Ratio}=\\dfrac{\\text{Current Assets}}{\\text{Current Liabilities}}',
    when:'Liquidity. > 1 implies positive working capital.' },
  { id:'f-quick', name:'Quick (Acid-Test) Ratio',
    expr:'\\text{Quick}=\\dfrac{\\text{Cash}+\\text{ST Inv.}+\\text{AR}}{\\text{Current Liab.}}',
    when:'Liquidity excluding inventory and prepaids.' },
  { id:'f-cash', name:'Cash Ratio',
    expr:'\\text{Cash Ratio}=\\dfrac{\\text{Cash}+\\text{Cash Equivalents}}{\\text{Current Liab.}}',
    when:'Strictest liquidity test.' },
  { id:'f-ocfcl', name:'Operating Cash Flow to Current Liabilities',
    expr:'\\text{OCFCL}=\\dfrac{\\text{CFO}}{\\text{Average Current Liabilities}}',
    when:'Liquidity using cash-flow statement.' },
  { id:'f-gpm', name:'Gross Profit Margin',
    expr:'\\text{GPM}=\\dfrac{\\text{Sales}-\\text{COGS}}{\\text{Sales}}',
    when:'Pricing and direct-cost control.' },
  { id:'f-opm', name:'Operating Profit Margin',
    expr:'\\text{OPM}=\\dfrac{\\text{Operating Income}}{\\text{Sales}}',
    when:'Profit before financing and taxes.' },
  { id:'f-npm', name:'Net Profit Margin',
    expr:'\\text{NPM}=\\dfrac{\\text{Net Income}}{\\text{Sales}}',
    when:'Bottom-line profitability.' },
  { id:'f-roa', name:'Return on Assets (ROA)',
    expr:'\\text{ROA}=\\dfrac{\\text{Net Income}}{\\text{Average Total Assets}}',
    when:'Income per $ of assets.' },
  { id:'f-roe', name:'Return on Equity (ROE)',
    expr:'\\text{ROE}=\\dfrac{\\text{Net Income}}{\\text{Average Equity}}',
    when:'Primary summary measure of company performance.' },
  { id:'f-rofl', name:'Return on Financial Leverage (ROFL)',
    expr:'\\text{ROFL}=\\text{ROE}-\\text{ROA}',
    when:'Portion of ROE due to debt financing.' },
  { id:'f-dupont-roa', name:'ROA disaggregation',
    expr:'\\text{ROA}=\\underbrace{\\dfrac{\\text{NI}}{\\text{Sales}}}_{\\text{NPM}}\\times\\underbrace{\\dfrac{\\text{Sales}}{\\text{Avg Assets}}}_{\\text{Asset T/O}}',
    when:'Diagnose whether ROA is driven by margin or efficiency.' },
  { id:'f-dupont-roe', name:'DuPont — full ROE decomposition',
    expr:'\\text{ROE}=\\text{NPM}\\times\\text{Asset T/O}\\times\\text{Equity Multiplier}',
    when:'Identify if ROE is driven by margin, efficiency, or leverage.' },
  { id:'f-de', name:'Debt-to-Equity (D/E)',
    expr:'\\text{D/E}=\\dfrac{\\text{Total Liabilities}}{\\text{Total Equity}}',
    when:'Solvency / leverage. Public-firm average ≈ 1.' },
  { id:'f-da', name:'Debt-to-Assets (D/A)',
    expr:'\\text{D/A}=\\dfrac{\\text{Total Liabilities}}{\\text{Total Assets}}',
    when:'Capital structure: % financed by creditors.' },
  { id:'f-tie', name:'Times Interest Earned (Coverage)',
    expr:'\\text{TIE}=\\dfrac{\\text{NI}+\\text{Interest}+\\text{Tax}}{\\text{Interest}}=\\dfrac{\\text{EBIT}}{\\text{Interest}}',
    when:'Solvency. Higher = smaller default risk.' },
  { id:'f-invt', name:'Inventory Turnover',
    expr:'\\text{Inv. T/O}=\\dfrac{\\text{COGS}}{\\text{Avg Inv.}}',
    when:'Efficiency: how often inventory is sold.' },
  { id:'f-art', name:'AR Turnover',
    expr:'\\text{AR T/O}=\\dfrac{\\text{Sales}}{\\text{Avg AR}}',
    when:'How many times AR is collected.' },
  { id:'f-apt', name:'AP Turnover',
    expr:'\\text{AP T/O}=\\dfrac{\\text{COGS}}{\\text{Avg AP}}',
    when:'How quickly suppliers are paid.' },
  { id:'f-ppet', name:'PP&E Turnover',
    expr:'\\text{PPET}=\\dfrac{\\text{Sales}}{\\text{Avg PP\\&E (net)}}',
    when:'Productivity of fixed assets.' },
  { id:'f-dio', name:'Days Inventory Outstanding (DIO)',
    expr:'\\text{DIO}=\\dfrac{\\text{Avg Inv.}}{\\text{COGS}}\\times 365',
    when:'Days of stock on hand.' },
  { id:'f-dso', name:'Days Sales Outstanding (DSO)',
    expr:'\\text{DSO}=\\dfrac{\\text{Avg AR}}{\\text{Sales}}\\times 365',
    when:'Days to collect.' },
  { id:'f-dpo', name:'Days Payables Outstanding (DPO)',
    expr:'\\text{DPO}=\\dfrac{\\text{Avg AP}}{\\text{COGS}}\\times 365',
    when:'Days to pay suppliers.' },
  { id:'f-ccc', name:'Cash Conversion Cycle (CCC)',
    expr:'\\text{CCC}=\\text{DIO}+\\text{DSO}-\\text{DPO}',
    when:'Net working-capital funding gap in days.' },
  { id:'f-eps', name:'Basic EPS',
    expr:'\\text{Basic EPS}=\\dfrac{\\text{NI}-\\text{Preferred Div.}}{\\text{Weighted Avg Common Shares}}',
    when:'Income available per common share.' },
  { id:'f-pe', name:'Price-to-Earnings (P/E)',
    expr:'\\text{P/E}=\\dfrac{\\text{Price per share}}{\\text{EPS}}',
    when:'Price paid for a unit of earnings.' },
],

derivations: [
  { title:'Why TIE uses EBIT — not Net Income — in the numerator',
    body:`<p>Times Interest Earned asks: how many times can the firm cover its interest expense from operating profit? Net Income has already had interest deducted, so using NI under-counts the cushion. The correct numerator is <strong>EBIT</strong> = Earnings Before Interest and Tax. We back EBIT out from NI by adding back interest <em>and</em> tax: <em>EBIT = NI + Interest + Tax</em>. Always.</p>` },
  { title:'DuPont — why ROE = NPM × Asset T/O × Equity Multiplier',
    body:`<p>Multiply and cancel: <em>(NI/Sales) × (Sales/AvgAssets) × (AvgAssets/AvgEquity) = NI / AvgEquity = ROE.</em></p>
    <p>Each factor isolates one driver: <strong>NPM</strong> (margin / pricing power), <strong>Asset Turnover</strong> (efficiency / capital productivity), <strong>Equity Multiplier</strong> (leverage). Two firms with identical ROE may differ enormously on which lever drives it — DuPont surfaces that difference.</p>` },
  { title:'Average vs ending balances — when to use which',
    body:`<p>For ratios where the numerator is a flow (income statement, e.g. NI, Sales, COGS) and the denominator is a stock (balance sheet, e.g. Assets, AR, Inventory), the textbook convention is to use the <strong>average</strong> of beginning and ending stock — <em>(Y0 + Y1) / 2</em> — to align with the period over which the flow was generated. If the question only gives you an ending balance, use it and note the simplification. ROE, ROA, Inv T/O, AR T/O, AP T/O all use averages by convention.</p>` },
  { title:'Why DPO can be higher = better (but only up to a point)',
    body:`<p>A high DPO means the firm is funding itself via supplier credit, which is usually free. Stretching DPO compresses CCC and frees working capital. The catch: pay too late and suppliers reprice you, pull credit, or stop shipping. Healthy DPO is "as long as the supplier will accept without retaliating."</p>` },
],

examples: [
  { title:'Times Interest Earned — HarborView SA',
    problem:'HarborView SA: Net income €210,000; Interest €28,000; Tax €32,000. Calculate TIE.',
    hint:'EBIT = NI + Interest + Tax. Then EBIT / Interest.',
    steps:[
      { what:'EBIT = 210,000 + 28,000 + 32,000 = €270,000.' },
      { what:'TIE = 270,000 / 28,000 ≈ 9.64.' },
    ],
    answer:'TIE ≈ 9.64 — operating profit covers interest about 9.6 times.',
    pitfall:'Do not use NI in the numerator — interest has already been deducted from NI.'
  },
  { title:'Coverage with cash-flow data — Rainbow',
    problem:'Rainbow Ltd: CFO $362,400; NI $310,800; Interest $33,600; Tax $248,400. TIE?',
    hint:'CFO is a distractor here — the textbook TIE uses EBIT.',
    steps:[
      { what:'EBIT = 310,800 + 33,600 + 248,400 = $592,800.' },
      { what:'TIE = 592,800 / 33,600 ≈ 17.64.' },
    ],
    answer:'TIE ≈ 17.64.',
    pitfall:'Do not put CFO in the TIE numerator. The textbook formula uses EBIT.'
  },
  { title:'ROA with average assets',
    problem:'Year 1 assets €900; Year 2 assets €1,300; Year 2 NI = €180. Compute Year 2 ROA.',
    steps:[
      { what:'Avg Assets = (900 + 1,300) / 2 = €1,100.' },
      { what:'ROA = 180 / 1,100 ≈ 16.36%.' },
    ],
    answer:'ROA ≈ 16.36%.'
  },
  { title:'ROE',
    problem:'EBIT $133,000; Interest $18,300; Tax $29,800; Avg equity $693,000. Compute ROE.',
    steps:[
      { what:'NI = 133,000 − 18,300 − 29,800 = $84,900.' },
      { what:'ROE = 84,900 / 693,000 ≈ 12.25%.' },
    ],
    answer:'ROE ≈ 12.25%.'
  },
  { title:'SilverStone Inventory Turnover with average',
    problem:'SilverStone Plc: COGS $36,665; Inventory at start $9,127; Inventory at end $8,911. Compute Inventory Turnover and DIO.',
    steps:[
      { what:'Avg Inventory = (9,127 + 8,911) / 2 = $9,019.' },
      { what:'Inv T/O = 36,665 / 9,019 ≈ 4.07.' },
      { what:'DIO = 365 / 4.07 ≈ 89.7 days.' },
    ],
    answer:'Inv T/O ≈ 4.07; DIO ≈ 89.7 days.'
  },
  { title:'Cash Conversion Cycle',
    problem:'A retailer reports DIO 52 days; DPO 34 days; DSO 35 days. Compute CCC.',
    steps:[
      { what:'CCC = DIO + DSO − DPO = 52 + 35 − 34 = 53 days.' },
    ],
    answer:'CCC = 53 days. The firm must fund 53 days of working capital between paying suppliers and collecting from customers.'
  },
  { title:'Madagascar Gross Profit Margin',
    problem:'Madagascar Co: Sales €56,223; COGS €36,655. Compute GPM.',
    steps:[
      { what:'GPM = (56,223 − 36,655) / 56,223 = 19,568 / 56,223 ≈ 34.80%.' },
    ],
    answer:'GPM ≈ 34.80% — about 35¢ of each sales dollar is left after product cost.'
  },
  { title:'Debt-to-Equity from total assets and total equity',
    problem:'Total assets $40,500; Total equity $19,100. Compute D/E.',
    steps:[
      { what:'Total liabilities = 40,500 − 19,100 = $21,400.' },
      { what:'D/E = 21,400 / 19,100 ≈ 1.12.' },
    ],
    answer:'D/E ≈ 1.12 — slightly above the typical public-company benchmark of 1.0.'
  },
  { title:'DuPont decomposition',
    problem:'NPM 8%; Asset Turnover 1.5; Equity Multiplier 2.4. Estimate ROE.',
    steps:[
      { what:'ROE = 0.08 × 1.5 × 2.4 = 0.288.' },
    ],
    answer:'ROE ≈ 28.8% — driven roughly equally by margin, turnover and leverage.'
  },
  { title:'Net Profit Margin from raw P&L',
    problem:'Revenue €1,200; COGS €720; OpEx (excl D&A) €120; D&A €60; Interest €30; Tax €54. Compute NPM.',
    steps:[
      { what:'EBIT = 1,200 − 720 − 120 − 60 = €300.' },
      { what:'NI = 300 − 30 − 54 = €216.' },
      { what:'NPM = 216 / 1,200 = 18%.' },
    ],
    answer:'NPM = 18%.'
  },
],

memory: [
  { label:'Mnemonic — four families', body:'<strong>"L-P-S-E"</strong>: <strong>L</strong>iquidity, <strong>P</strong>rofitability, <strong>S</strong>olvency, <strong>E</strong>fficiency. If you cannot place a ratio in one of these four buckets, you do not understand it yet.' },
  { label:'High vs low cheat sheet', body:'<strong>Higher = better:</strong> liquidity, profitability, turnovers, coverage (TIE), market-to-book, EPS. <strong>Lower = better:</strong> D/E, D/A, days (DIO, DSO, CCC). <strong>DPO higher = good</strong> (within reason — keep suppliers happy).' },
  { label:'TIE one-liner', body:'<em>"NI + Interest + Tax = EBIT. EBIT / Interest = TIE."</em> Burn this in.' },
  { label:'CCC visual', body:'You PAY for inventory upfront — DIO + DSO clock starts. You DO NOT pay suppliers until DPO days later — clock stops. Net cash gap = DIO + DSO − DPO.' },
  { label:'DuPont mnemonic', body:'<strong>"Margin × Turnover × Leverage"</strong> = ROE. NPM × Asset T/O × Equity Multiplier.' },
  { label:'ROE = ROA + ROFL', body:'ROE − ROA = portion of return from leverage. If ROFL is large, leverage is doing the work — fine until rates rise or sales fall.' },
  { kind:'pitfall', body:'Do NOT use Net Income in the TIE numerator — use EBIT. NI has already had interest deducted.' },
  { kind:'pitfall', body:'For ROA / ROE / turnovers, when both opening and closing balances are given, use the AVERAGE in the denominator. Using the ending balance alone is a textbook mistake.' },
  { kind:'pitfall', body:'A "good" ratio depends on the industry. A current ratio of 0.9 is alarming for a manufacturer but normal for a supermarket — do not benchmark cross-industry.' },
  { kind:'pitfall', body:'IFRS vs US GAAP and FIFO vs weighted-average inventory choices can shift COGS, NI and inventory enough to materially change ratios. Cross-border comparisons must adjust.' },
],

connections: '<p>Ratios consume every other chapter in the course. <strong>Ch 3</strong> Income Statement → margins, EBIT, EPS. <strong>Ch 4</strong> Receivables → DSO, AR turnover. <strong>Ch 5</strong> Inventory → Inv turnover, DIO, GPM. <strong>Ch 6</strong> PP&E → Asset turnover, PPET, ROA. <strong>Ch 7</strong> Liabilities → D/E, D/A, TIE. <strong>Ch 9</strong> Equity → ROE, EPS, payout. <strong>Ch 10</strong> Investments → goodwill and FV adjustments distort ROA. <strong>Ch 11</strong> Cash flow → OCFCL, OCFCX, FCF, CFO-based coverage variants. The overall analytical workflow: (1) understand the business and its environment, (2) common-size the statements, (3) compute and benchmark ratios, (4) decompose ROE via DuPont, (5) summarise findings against peers and history.</p>',
};

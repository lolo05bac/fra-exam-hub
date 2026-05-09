/* Chapter 12 — Financial Ratios */
QBANK.add([
{ id:'ch12-001', chap:'ch12', type:'mcq', diff:'easy', src:'authored',
  stem:'Current ratio measures:',
  opts:[
    {t:'Profitability.'},
    {t:'Short-term liquidity.', ok:true},
    {t:'Long-term solvency.'},
    {t:'Asset turnover.'}
  ],
  expl:'Current Assets / Current Liabilities — short-term ability to pay obligations.'
},
{ id:'ch12-002', chap:'ch12', type:'mcq', diff:'easy', src:'authored',
  stem:'Quick (acid-test) ratio differs from current ratio by:',
  opts:[
    {t:'Excluding inventory and prepaid expenses.', ok:true},
    {t:'Excluding cash.'},
    {t:'Including long-term assets.'},
    {t:'Excluding all current assets.'}
  ],
  expl:'Quick = (Cash + ST Investments + AR) / Current Liabilities. Stricter than current ratio.'
},
{ id:'ch12-003', chap:'ch12', type:'mcq', diff:'med', src:'authored',
  stem:'A company with the HIGHEST current ratio is most likely the most:',
  opts:[
    {t:'Profitable.'},
    {t:'Liquid.', ok:true},
    {t:'Solvent.'},
    {t:'Efficient.'}
  ],
  expl:'Current ratio is a liquidity measure.'
},
{ id:'ch12-004', chap:'ch12', type:'mcq', diff:'med', src:'final-2025',
  stem:'A company\'s D/E rose from 1.2 to 2.8; interest coverage fell from 5x to 2x. This indicates:',
  opts:[
    {t:'Lower financial risk.'},
    {t:'The company has increased its solvency.'},
    {t:'Higher leverage risk.', ok:true},
    {t:'Improved profitability.'}
  ],
  expl:'Both signals point to weaker solvency: more debt relative to equity AND less ability to cover interest from operating profit.'
},
{ id:'ch12-005', chap:'ch12', type:'mcq', diff:'med', src:'final-2025',
  stem:'Companies A and B: A has Current 2.1, Quick 1.4, NPM 6%, ROA 7%. B has Current 1.3, Quick 0.9, NPM 11%, ROA 13%. Which interpretation is most accurate?',
  opts:[
    {t:'A is more liquid; B is more profitable.', ok:true},
    {t:'A is more profitable; B is more liquid.'},
    {t:'B is both more liquid and more profitable.'},
    {t:'A is both more liquid and more profitable.'}
  ],
  expl:'Higher Current/Quick = more liquid (A wins). Higher NPM/ROA = more profitable (B wins).'
},
{ id:'ch12-006', chap:'ch12', type:'mcq', diff:'hard', src:'final-2025',
  stem:'Three companies: DIO (Alpha 45, Beta 110, Gamma 28); DSO (70, 35, 90); DPO (40, 60, 25). Which is WRONG?',
  opts:[
    {t:'Gamma has the slowest collection of receivables.'},
    {t:'Beta takes the longest time to sell inventory.'},
    {t:'Gamma has the best DPO.', ok:true},
    {t:'Alpha has the best CCC cycle.'}
  ],
  expl:'Higher DPO = better (we pay later). Beta\'s 60 is best, Gamma\'s 25 is the worst. (a), (b), (d) check out: Gamma DSO 90 = slowest collection; Beta DIO 110 = longest sell time; Alpha CCC = 45 + 70 − 40 = 75; Beta CCC = 110+35−60 = 85; Gamma = 28+90−25 = 93. Alpha\'s 75 is the smallest = best.'
},
{ id:'ch12-007', chap:'ch12', type:'mcq', diff:'med', src:'final-2024',
  stem:'According to the table — Sales A 150K, B 250K, C 30K; EBITDA A 25K, B 45K, C 6K; Net Profit A 4K, B 6.6K, C 4K; D/E A 2.4, B 1.8, C 0.6; Current Ratio A 0.9, B 0.7, C 1.1 — which statement is TRUE?',
  opts:[
    {t:'A has the best solvency ratio.'},
    {t:'B has the best liquidity ratio.'},
    {t:'C has the best profitability ratios.', ok:true},
    {t:'A and C have the same profitability ratios.'}
  ],
  expl:'C: net margin 4/30 = 13.3%. A: 4/150 = 2.7%. B: 6.6/250 = 2.6%. C wins. C\'s D/E = 0.6 (best — lowest), C\'s current ratio = 1.1 (best — highest).'
},
{ id:'ch12-008', chap:'ch12', type:'mcq', diff:'med', src:'authored',
  stem:'DuPont decomposition of ROE is:',
  opts:[
    {t:'NPM × Asset Turnover × Equity Multiplier.', ok:true},
    {t:'NPM + Asset Turnover + Equity Multiplier.'},
    {t:'NPM × Equity Multiplier.'},
    {t:'NI / Sales.'}
  ],
  expl:'ROE = (NI/Sales) × (Sales/Assets) × (Assets/Equity).'
},
{ id:'ch12-009', chap:'ch12', type:'mcq', diff:'hard', src:'authored',
  stem:'Times Interest Earned (Coverage) =',
  opts:[
    {t:'NI / Interest expense.'},
    {t:'EBIT / Interest expense.', ok:true},
    {t:'Sales / Interest expense.'},
    {t:'CFO / Interest expense.'}
  ],
  expl:'TIE = EBIT / Interest = (NI + Interest + Tax) / Interest.'
},
{ id:'ch12-010', chap:'ch12', type:'mcq', diff:'med', src:'authored',
  stem:'A higher Inventory Turnover means:',
  opts:[
    {t:'Inventory is sitting longer.'},
    {t:'Inventory is selling faster.', ok:true},
    {t:'Profit margin is higher.'},
    {t:'Higher D/E.'}
  ],
  expl:'Turnover counts how many times the average inventory is sold and replaced.'
},
{ id:'ch12-011', chap:'ch12', type:'mcq', diff:'easy', src:'authored',
  stem:'Cash Conversion Cycle (CCC) =',
  opts:[
    {t:'DIO + DSO − DPO.', ok:true},
    {t:'DIO − DSO + DPO.'},
    {t:'DIO + DSO + DPO.'},
    {t:'DIO − DSO − DPO.'}
  ],
  expl:'CCC = days you wait for cash after paying for inventory, net of supplier credit.'
},
{ id:'ch12-012', chap:'ch12', type:'mcq', diff:'med', src:'authored',
  stem:'Which is a SOLVENCY ratio?',
  opts:[
    {t:'Current ratio.'},
    {t:'Quick ratio.'},
    {t:'D/E.', ok:true},
    {t:'Inventory turnover.'}
  ],
  expl:'D/E and TIE measure long-term solvency / leverage. The first two are liquidity.'
},
{ id:'ch12-013', chap:'ch12', type:'numeric', diff:'med', src:'final-2025', dp:2,
  stem:'HarborView SA: NI €210,000; Interest €28,000; Tax €32,000. Compute Times Interest Earned (rounded to 2dp).',
  ans:9.64,
  expl:'EBIT = 210 + 28 + 32 = 270. TIE = 270 / 28 = 9.6428 ≈ 9.64.'
},
{ id:'ch12-014', chap:'ch12', type:'numeric', diff:'med', src:'final-2024', dp:2,
  stem:'Rainbow: CFO $362,400; NI $310,800; Interest $33,600; Tax $248,400. Compute TIE (rounded to 2dp).',
  ans:17.64,
  expl:'EBIT = 310.8 + 33.6 + 248.4 = 592.8K. TIE = 592.8 / 33.6 ≈ 17.64.'
},
{ id:'ch12-015', chap:'ch12', type:'numeric', diff:'med', src:'final-2025', dp:2,
  stem:'A firm reports Y1 total assets €900, Y2 total assets €1,300, NI Y2 €180. Compute ROA Y2 using AVERAGE total assets (rounded to 2dp, as a percentage).',
  ans:16.36,
  expl:'Avg = 1,100. ROA = 180/1,100 = 16.36%.'
},
{ id:'ch12-016', chap:'ch12', type:'numeric', diff:'med', src:'final-2024', dp:2,
  stem:'Kobo Corp: NI $27,000; Total assets $40,500; Total SE $19,100. Compute D/E (rounded to 2dp).',
  ans:1.12,
  expl:'Total liabilities = 40,500 − 19,100 = 21,400. D/E = 21,400 / 19,100 ≈ 1.12.'
},
{ id:'ch12-017', chap:'ch12', type:'numeric', diff:'med', src:'final-2024', dp:2,
  stem:'Fiorentella: EBIT $133,000; Interest $18,300; Tax $29,800. Avg SE $693,000. Compute ROE (rounded to 2dp, as a percentage).',
  ans:12.25,
  expl:'NI = 133,000 − 18,300 − 29,800 = 84,900. ROE = 84,900 / 693,000 ≈ 12.25%.'
},
{ id:'ch12-018', chap:'ch12', type:'numeric', diff:'med', src:'final-2024', dp:2,
  stem:'Madagascar: Sales 100,000; COGS 30,000; OpEx 20,000; D&A 6,000; Interest 10,000; Tax 5,000; Inventory 40,000. Compute Gross Profit Margin (as a percentage, 2dp).',
  ans:70.00,
  expl:'GP = Sales − COGS = 100,000 − 30,000 = 70,000. GPM = 70,000/100,000 = 70%.'
},
{ id:'ch12-019', chap:'ch12', type:'numeric', diff:'med', src:'final-2024', dp:2,
  stem:'Agnes: Avg AR $12,900; Sales $139,000; 365-day year. Compute DSO (rounded to 2dp days).',
  ans:33.87,
  expl:'DSO = (12,900/139,000) × 365 = 33.87 days.'
},
{ id:'ch12-020', chap:'ch12', type:'numeric', diff:'med', src:'final-2025', dp:2,
  stem:'NPM. Revenue €1,200; OpEx (excl D&A) €120; D&A €60; COGS €720; Interest €30; Tax €54. Compute Net Profit Margin (as a percentage, 2dp).',
  ans:18.00,
  expl:'EBIT = 1200 − 720 − 120 − 60 = 300. NI = 300 − 30 − 54 = 216. NPM = 216/1200 = 18%.'
},
{ id:'ch12-021', chap:'ch12', type:'numeric', diff:'easy', src:'final-2025', dp:1,
  stem:'SilverStone: Y1 COGS €3,900, Y2 COGS €4,200; Inventory Y1 €520, Y2 €600. Compute Inventory Turnover for Y2 (using AVG inventory; rounded to 1dp).',
  ans:7.5,
  expl:'Avg = (520+600)/2 = 560. Turnover = 4,200/560 = 7.5.'
},
{ id:'ch12-022', chap:'ch12', type:'numeric', diff:'easy', src:'final-2025', dp:0,
  stem:'Aurora: DIO 52; DPO 34; DSO 35. Compute CCC (in days).',
  ans:53,
  expl:'CCC = 52 + 35 − 34 = 53 days.'
},
{ id:'ch12-023', chap:'ch12', type:'numeric', diff:'med', src:'authored', dp:2,
  stem:'A company has Current Assets $400K (of which $150K inventory and $20K prepaid); Current Liabilities $200K. Compute the QUICK ratio (2dp).',
  ans:1.15,
  expl:'Quick = (CA − Inv − Prepaid) / CL = (400 − 150 − 20)/200 = 230/200 = 1.15.'
},
{ id:'ch12-024', chap:'ch12', type:'numeric', diff:'med', src:'authored', dp:2,
  stem:'Sales $5M; Total assets (avg) $4M; NI $400K; Equity (avg) $1.6M. Compute ROE (2dp, as percentage).',
  ans:25.00,
  expl:'ROE = NI/Avg Equity = 400,000/1,600,000 = 25%.'
},
{ id:'ch12-025', chap:'ch12', type:'numeric', diff:'med', src:'authored', dp:2,
  stem:'A company reports: Sales $5,000,000; Net income $400,000; Average total assets $4,000,000; Average equity $1,600,000. Compute Return on Assets (ROA) as a percentage (2dp).',
  ans:10.00,
  expl:'ROA = NI / Average Total Assets = 400,000 / 4,000,000 = 10.00%.'
},
{ id:'ch12-026', chap:'ch12', type:'numeric', diff:'hard', src:'authored', dp:2,
  stem:'A company reports: Sales $5,000,000; Net income $400,000; Average total assets $4,000,000; Average equity $1,600,000; Average total liabilities $2,400,000. Using the DuPont decomposition ROE = NPM × Asset Turnover × Equity Multiplier, what is the equity multiplier (2dp)?',
  ans:2.50,
  expl:'Equity Multiplier = Avg Assets / Avg Equity = 4,000,000 / 1,600,000 = 2.50. Check the full DuPont: NPM = 400/5,000 = 8%; Asset Turnover = 5,000/4,000 = 1.25; ROE = 0.08 × 1.25 × 2.50 = 25.00% (matches NI/Equity = 400/1,600 = 25%). ✓'
},
{ id:'ch12-027', chap:'ch12', type:'mcq', diff:'med', src:'authored',
  stem:'A high D/E ratio implies:',
  opts:[
    {t:'High financial risk and high financial leverage.', ok:true},
    {t:'Low financial risk.'},
    {t:'High liquidity.'},
    {t:'Low profitability always.'}
  ],
  expl:'More debt → more interest obligations → bigger swings in ROE → higher financial risk.'
},
{ id:'ch12-028', chap:'ch12', type:'mcq', diff:'med', src:'authored',
  stem:'A company with stable EBIT but rising interest payments is most likely to see a:',
  opts:[
    {t:'Falling Times Interest Earned.', ok:true},
    {t:'Rising Times Interest Earned.'},
    {t:'Stable TIE.'},
    {t:'Higher current ratio.'}
  ],
  expl:'TIE = EBIT/Interest. Numerator flat, denominator up → ratio falls.'
},
{ id:'ch12-029', chap:'ch12', type:'mcq', diff:'hard', src:'authored',
  stem:'When interpreting a single ratio across two firms, the most important caveat is:',
  opts:[
    {t:'Compare to industry norms; ratios are most meaningful in context.', ok:true},
    {t:'Always prefer the higher number.'},
    {t:'Always prefer the lower number.'},
    {t:'Ratios can\'t be compared across firms.'}
  ],
  expl:'Ratios are useful relative to peers and trend, not in absolute terms.'
},
{ id:'ch12-030', chap:'ch12', type:'long', diff:'hard', src:'authored',
  stem:'A retailer reports DIO 65, DSO 25, DPO 45. (a) Compute the CCC. (b) Interpret each component. (c) Suggest two operational levers to shorten the cycle.',
  expl:'<strong>(a)</strong> CCC = 65 + 25 − 45 = 45 days.<br><br><strong>(b)</strong><br>• <strong>DIO 65</strong>: 65 days of stock on hand. Pretty long for a retailer — implies overstocking or slow-moving lines.<br>• <strong>DSO 25</strong>: customers pay in ~25 days. For a retail business this is high (most retail is cash); suggests B2B or trade credit.<br>• <strong>DPO 45</strong>: paying suppliers in ~45 days — reasonable.<br><br><strong>(c) Levers</strong>:<br>1. <strong>Reduce DIO</strong> via just-in-time ordering, exit slow SKUs, better demand forecasting.<br>2. <strong>Reduce DSO</strong> via early-payment discounts, tighter credit policy, factoring.<br>3. <strong>Increase DPO</strong> by negotiating longer supplier terms — without damaging supplier relations.<br>Each one shortens CCC and frees working capital.',
  mark:[
    'CCC computation correct: 45 days (1)',
    'DIO interpretation (1)',
    'DSO interpretation (1)',
    'DPO interpretation (1)',
    'Two relevant operational levers (1)'
  ]
}
]);

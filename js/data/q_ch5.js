/* Chapter 5 — Inventories & COGS */
QBANK.add([
{ id:'ch5-001', chap:'ch5', type:'mcq', diff:'easy', src:'mcq-bank',
  stem:'Which is NOT normally reported as part of total manufacturing inventory cost?',
  opts:[
    {t:'Work-in-process.'},
    {t:'Finished goods.'},
    {t:'Property, plant, and equipment.', ok:true},
    {t:'Raw materials.'}
  ],
  expl:'Inventory categories for a manufacturer: raw materials, WIP, finished goods. PP&E is a long-term asset, not inventory.'
},
{ id:'ch5-002', chap:'ch5', type:'mcq', diff:'med', src:'mcq-bank',
  stem:'When the current year\'s ending inventory is OVERSTATED:',
  opts:[
    {t:'Current year COGS is overstated.'},
    {t:'Current year total assets are understated.'},
    {t:'Current year net income is overstated.', ok:true},
    {t:'Next year\'s income is overstated.'}
  ],
  expl:'COGS = Beg + Purch − End. Larger End → smaller COGS → bigger Gross Profit → bigger NI. Assets are also overstated.',
  pitfall:'The error self-corrects in two periods because next year\'s opening inventory is the same overstated number.'
},
{ id:'ch5-003', chap:'ch5', type:'mcq', diff:'med', src:'mcq-bank',
  stem:'In a period of rising prices, the inventory cost-flow method that gives the LOWEST reported net income is:',
  opts:[
    {t:'LIFO.', ok:true},
    {t:'FIFO.'},
    {t:'Average cost.'},
    {t:'Specific identification.'}
  ],
  expl:'LIFO sends the most-recent (highest) costs into COGS, producing the lowest gross profit and NI in rising-price environments.'
},
{ id:'ch5-004', chap:'ch5', type:'mcq', diff:'med', src:'mcq-bank',
  stem:'Beyer Corp: Beg inv 2,000 units @ $50; purchased 5,000 units @ $75. Sold 6,000 units. Which is NOT TRUE?',
  opts:[
    {t:'FIFO COGS would be $400,000.'},
    {t:'FIFO ending inventory would be $75,000.'},
    {t:'LIFO COGS would be $425,000.'},
    {t:'LIFO ending inventory would be $75,000.', ok:true}
  ],
  expl:'FIFO COGS = 2,000×50 + 4,000×75 = 100,000 + 300,000 = $400,000. ✓ FIFO end = 1,000×75 = $75,000. ✓ LIFO COGS = 5,000×75 + 1,000×50 = 425,000. ✓ LIFO end = 1,000×50 = $50,000, NOT $75,000. So (d) is false.'
},
{ id:'ch5-005', chap:'ch5', type:'numeric', diff:'hard', src:'mcq-bank', dp:0,
  stem:'Sletten Industries uses LIFO. 2017 sales = $200M; COGS = $135M. Inventory at LIFO: Jan $28M, Dec $36M. LIFO Reserve: Jan $14M, Dec $14M. If FIFO had been used, what would 2017 GROSS PROFIT have been (in $M)?',
  ans:65,
  expl:'Under LIFO: GP = 200 − 135 = 65. The LIFO reserve was unchanged ($14M → $14M), so converting to FIFO doesn\'t change COGS this year (Δ LIFO Reserve = 0). FIFO Gross Profit = $65M.',
  alt:'Formula: COGS_FIFO = COGS_LIFO − Δ LIFO Reserve = 135 − 0 = 135. GP_FIFO = 200 − 135 = $65M.'
},
{ id:'ch5-006', chap:'ch5', type:'mcq', diff:'med', src:'final-2024',
  stem:'If inventory at year-end is UNDERSTATED by $60,000, what is the effect?',
  opts:[
    {t:'COGS understated, NI understated.'},
    {t:'COGS overstated, NI overstated.'},
    {t:'COGS overstated, NI understated by $60,000.', ok:true},
    {t:'No effect — error reverses next year.'}
  ],
  expl:'COGS = Beg + Purch − End. Smaller End → larger COGS → smaller GP → NI understated by $60,000.'
},
{ id:'ch5-007', chap:'ch5', type:'mcq', diff:'easy', src:'authored',
  stem:'Under IFRS, inventory is measured at:',
  opts:[
    {t:'Historical cost only.'},
    {t:'Lower of cost and net realisable value.', ok:true},
    {t:'Fair value at all times.'},
    {t:'Replacement cost.'}
  ],
  expl:'IFRS uses LCNRV. NRV = expected selling price − costs to complete and sell. Reversals are allowed (unlike US GAAP).'
},
{ id:'ch5-008', chap:'ch5', type:'mcq', diff:'med', src:'authored',
  stem:'Which inventory cost-flow assumption is NOT permitted under IFRS?',
  opts:[
    {t:'FIFO.'},
    {t:'Weighted-average cost.'},
    {t:'Specific identification.'},
    {t:'LIFO.', ok:true}
  ],
  expl:'IFRS prohibits LIFO. US GAAP still allows it (and many US companies use it for tax benefits via the LIFO conformity rule).'
},
{ id:'ch5-009', chap:'ch5', type:'mcq', diff:'easy', src:'authored',
  stem:'Cost of Goods Sold equals:',
  opts:[
    {t:'Beg Inventory − Purchases + End Inventory.'},
    {t:'Beg Inventory + Purchases − End Inventory.', ok:true},
    {t:'Beg Inventory + End Inventory − Purchases.'},
    {t:'Purchases − End Inventory.'}
  ],
  expl:'COGS = COGAS − End Inv = (Beg + Purch) − End.'
},
{ id:'ch5-010', chap:'ch5', type:'mcq', diff:'med', src:'authored',
  stem:'Which costs are CAPITALISED into inventory?',
  opts:[
    {t:'Purchase price + freight-in + import duties.', ok:true},
    {t:'Purchase price + selling commissions.'},
    {t:'Purchase price + admin overhead.'},
    {t:'Purchase price + interest on supplier credit.'}
  ],
  expl:'All costs needed to bring inventory to its present location and condition are capitalised. Selling and admin costs are period expenses.'
},
{ id:'ch5-011', chap:'ch5', type:'mcq', diff:'med', src:'authored',
  stem:'Under perpetual inventory, when is COGS recorded?',
  opts:[
    {t:'Only at year-end.'},
    {t:'On every sale.', ok:true},
    {t:'Only on quarterly counts.'},
    {t:'When cash is received.'}
  ],
  expl:'Perpetual: each sale immediately updates COGS and inventory. Periodic: COGS computed at period-end via the formula.'
},
{ id:'ch5-012', chap:'ch5', type:'mcq', diff:'hard', src:'authored',
  stem:'Inventory turnover and gross margin together suggest a company is "buying low, selling high, fast" when:',
  opts:[
    {t:'Both are HIGH.', ok:true},
    {t:'Both are LOW.'},
    {t:'Turnover high, margin low.'},
    {t:'Turnover low, margin high.'}
  ],
  expl:'High margin = pricing power; high turnover = efficient stock movement. Both high = best of both.'
},
{ id:'ch5-013', chap:'ch5', type:'mcq', diff:'med', src:'authored',
  stem:'A company writes inventory down from $100,000 to NRV of $85,000. Which is true?',
  opts:[
    {t:'COGS or a separate loss line increases by $15,000.', ok:true},
    {t:'NI is unaffected — only the balance sheet changes.'},
    {t:'Inventory rises by $15,000.'},
    {t:'Cash decreases by $15,000.'}
  ],
  expl:'A write-down debits an expense (often COGS or "Loss on inventory write-down") and credits Inventory. NI falls by $15,000.'
},
{ id:'ch5-014', chap:'ch5', type:'numeric', diff:'med', src:'final-2025', dp:0,
  stem:'Communicated Inc: Beg 270 @ $570; Purchases 370 @ $620, 470 @ $670, 285 @ $720. Sold 1,175 units. Compute ending inventory under FIFO (in $).',
  ans:158400,
  expl:'Total avail = 1,395; sold 1,175; end = 220 units. FIFO end = newest first: 220 × $720 = $158,400.',
  alt:'LIFO would price end at the oldest layer: 220 × $570 = $125,400.'
},
{ id:'ch5-015', chap:'ch5', type:'numeric', diff:'med', src:'final-2024', dp:0,
  stem:'Square9: Beg 160@$460; Purch 260@$510, 360@$560, 230@$610. Sold 900 units. Compute COGS under LIFO (in $).',
  ans:497500,
  expl:'LIFO uses newest first: 230×610 + 360×560 + 260×510 + 50×460 = 140,300 + 201,600 + 132,600 + 23,000 = $497,500.'
},
{ id:'ch5-016', chap:'ch5', type:'numeric', diff:'med', src:'authored', dp:0,
  stem:'Same Square9 data. Compute COGS under FIFO (in $).',
  ans:469000,
  expl:'FIFO uses oldest first: 160×460 + 260×510 + 360×560 + 120×610 = 73,600 + 132,600 + 201,600 + 73,200 = $481,000. Wait — let me recompute. 160+260+360 = 780 sold; need 900 so 120 from the 230@610 layer. 73,600 + 132,600 + 201,600 + 73,200 = $481,000.',
  ans:481000
},
{ id:'ch5-017', chap:'ch5', type:'numeric', diff:'hard', src:'authored', dp:2,
  stem:'Same Square9 data. Compute COGS under WEIGHTED-AVERAGE (round avg cost to 2dp; in $; round final answer to nearest dollar then enter).',
  ans:494673,
  expl:'Total cost = 160×460 + 260×510 + 360×560 + 230×610 = 73,600 + 132,600 + 201,600 + 140,300 = 548,100. Total units = 1,010. Avg = 548,100 / 1,010 ≈ $542.6733. COGS = 900 × 542.6733 ≈ $488,406.',
  ans:488406,
  alt:'Ending inv = 110 × 542.6733 ≈ $59,694. Sums to $548,100 (rounding). NI ranks: FIFO highest, weighted-avg middle, LIFO lowest in rising prices.'
},
{ id:'ch5-018', chap:'ch5', type:'numeric', diff:'med', src:'final-2024', dp:2,
  stem:'Inventory turnover. Beg = $118,000; End = $110,000; Sales = $999,000; Gross profit = $303,000. Compute inventory turnover (rounded to 2dp).',
  ans:6.11,
  expl:'COGS = 999,000 − 303,000 = 696,000. Avg Inv = 114,000. Turnover = 696,000 / 114,000 = 6.105 ≈ 6.11.'
},
{ id:'ch5-019', chap:'ch5', type:'numeric', diff:'med', src:'final-2025', dp:1,
  stem:'COGS = €4,200; Inventory (Dec 31) = €600. Compute inventory turnover (using ending inventory).',
  ans:7.0,
  expl:'7.0 turns. Inventory takes about 365/7 ≈ 52 days to sell.'
},
{ id:'ch5-020', chap:'ch5', type:'mcq', diff:'med', src:'authored',
  stem:'A higher inventory turnover (vs. industry) usually indicates:',
  opts:[
    {t:'Slower sales and stale stock.'},
    {t:'Faster sell-through and tighter stock management.', ok:true},
    {t:'Higher carrying costs.'},
    {t:'Lower gross margins always.'}
  ],
  expl:'Higher turnover = inventory cycles faster, less obsolescence risk, less working capital tied up. Sometimes reflects discounting (lower margin), but more often it\'s efficiency.'
},
{ id:'ch5-021', chap:'ch5', type:'numeric', diff:'med', src:'authored', dp:0,
  stem:'Beginning inventory = $220,000; COGS = $920,000; Ending inventory = $170,000. Find purchases (in $).',
  ans:870000,
  expl:'COGS = Beg + Purch − End ⇒ 920,000 = 220,000 + Purch − 170,000 ⇒ Purch = $870,000.'
},
{ id:'ch5-022', chap:'ch5', type:'mcq', diff:'med', src:'authored',
  stem:'Under perpetual inventory FIFO, the entry on a sale of inventory bought at $4 originally with new purchase at $5:',
  opts:[
    {t:'COGS uses $5 (the new purchase).'},
    {t:'COGS uses $4 (the older purchase).', ok:true},
    {t:'COGS uses the average $4.50.'},
    {t:'No COGS until period end.'}
  ],
  expl:'FIFO sells the oldest layer first.'
},
{ id:'ch5-023', chap:'ch5', type:'numeric', diff:'hard', src:'authored', dp:0,
  stem:'A company\'s inventory at year-end equals 60 days of COGS. COGS is $1,800,000. What is ending inventory (in $)?',
  ans:295890,
  expl:'DIO = 60. Avg Inv ≈ 60/365 × COGS = 60/365 × 1,800,000 = $295,890 (≈).'
},
{ id:'ch5-024', chap:'ch5', type:'mcq', diff:'med', src:'authored',
  stem:'Which would NOT be capitalised in inventory?',
  opts:[
    {t:'Freight-in to receive raw materials.'},
    {t:'Storage cost AT a finished-goods warehouse for ready-to-sell stock.', ok:true},
    {t:'Import duty on raw material.'},
    {t:'Direct labour applied during manufacture.'}
  ],
  expl:'Storage costs of finished-goods inventory after manufacturing are period expenses. Storage of WIP can be capitalised if necessary for production.'
},
{ id:'ch5-025', chap:'ch5', type:'mcq', diff:'med', src:'authored',
  stem:'In rising prices, FIFO produces the highest:',
  opts:[
    {t:'COGS.'},
    {t:'Net income and ending inventory.', ok:true},
    {t:'Tax expense (always).'},
    {t:'Working capital deficit.'}
  ],
  expl:'FIFO leaves the newest (most expensive) layers in inventory and the oldest (cheaper) layers go to COGS — high NI, high inventory.'
},
{ id:'ch5-026', chap:'ch5', type:'numeric', diff:'med', src:'authored', dp:0,
  stem:'Beg Inv 100 units @ $20; Buy 200 @ $24; Buy 100 @ $30. Sell 300 units. Compute Ending inventory under WEIGHTED-AVERAGE (in $).',
  ans:2400,
  expl:'Total cost = 100×20 + 200×24 + 100×30 = 2,000 + 4,800 + 3,000 = 9,800. Units = 400. Avg = $24.50. End = 100 units × $24.50 = $2,450.',
  ans:2450
},
{ id:'ch5-027', chap:'ch5', type:'mcq', diff:'med', src:'authored',
  stem:'A "LIFO liquidation" occurs when:',
  opts:[
    {t:'A LIFO firm reports under FIFO instead.'},
    {t:'A LIFO firm sells more than it buys, dipping into older (cheaper) layers; producing artificially high reported NI.', ok:true},
    {t:'A LIFO firm voluntarily switches to weighted average.'},
    {t:'A LIFO firm closes operations.'}
  ],
  expl:'When a LIFO company drains inventory, the old cheap layers hit COGS, inflating gross profit. This must be disclosed.'
},
{ id:'ch5-028', chap:'ch5', type:'long', diff:'hard', src:'authored',
  stem:'Compare FIFO and LIFO in an inflationary environment along (a) net income, (b) tax expense, (c) ending inventory on the balance sheet, (d) cash flow from operations. Why might a US firm prefer LIFO?',
  expl:'<strong>(a) NI:</strong> FIFO higher (older/cheaper costs in COGS). LIFO lower.<br><strong>(b) Tax:</strong> Mirror of NI. LIFO lower tax. FIFO higher.<br><strong>(c) Ending Inv:</strong> FIFO higher (newest costs remain). LIFO lower.<br><strong>(d) CFO:</strong> LIFO higher CFO because lower NI → lower cash taxes paid (the only real cash difference). Sales receipts and inventory purchases identical regardless of method.<br><br><strong>Why prefer LIFO (US):</strong> Lower taxable income → tax deferral → real cash savings, even though reported earnings look weaker. The "LIFO conformity rule" forces companies that use LIFO for tax to also use it for financial reporting.',
  mark:[
    'NI direction (FIFO higher) (1)',
    'Tax direction (LIFO lower) (1)',
    'Ending inventory direction (FIFO higher) (1)',
    'CFO impact via cash taxes (1)',
    'LIFO conformity rule mentioned (1)'
  ]
},
{ id:'ch5-029', chap:'ch5', type:'mcq', diff:'med', src:'authored',
  stem:'A trade-in allowance on a customer\'s old item, accepted in part-payment for a new sale, should be:',
  opts:[
    {t:'Reduced from sales revenue.'},
    {t:'Recorded at the trade-in\'s fair value as additional inventory; sales revenue equal to cash received plus the trade-in fair value.', ok:true},
    {t:'Ignored.'},
    {t:'Booked as an expense.'}
  ],
  expl:'Trade-ins enter inventory at FV and revenue is recognised at the total transaction price (cash received plus trade-in FV).'
},
{ id:'ch5-030', chap:'ch5', type:'numeric', diff:'med', src:'authored', dp:0,
  stem:'A company has Beg Inv $50,000; Purchases $200,000. After year-end, a count reveals only $40,000 of inventory on hand. What is the implied COGS for the year (in $)?',
  ans:210000,
  expl:'COGS = Beg + Purch − End = 50,000 + 200,000 − 40,000 = $210,000.'
}
]);

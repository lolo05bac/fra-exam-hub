/* Chapter 6 — Long-Term (Operating) Assets */
QBANK.add([
{ id:'ch6-001', chap:'ch6', type:'mcq', diff:'med', src:'mcq-bank',
  stem:'Burgstahler bought a lot to build a new corporate office. An older building on the lot was razed immediately. The cost of razing the older building should be:',
  opts:[
    {t:'recorded as part of the cost of the land.', ok:true},
    {t:'written off as a loss in the year of purchase.'},
    {t:'written off as an extraordinary item.'},
    {t:'recorded as part of the cost of the new building.'}
  ],
  expl:'Razing an old building to prepare a lot for a new use is a cost of getting the LAND ready — it\'s capitalised to land, not to the new building (which only inherits its own construction costs).'
},
{ id:'ch6-002', chap:'ch6', type:'mcq', diff:'easy', src:'mcq-bank',
  stem:'The purpose of recording periodic depreciation of long-term PPE assets is to:',
  opts:[
    {t:'report declining asset values on the balance sheet.'},
    {t:'allocate asset costs over the periods benefited by use of the assets.', ok:true},
    {t:'account for cost changes due to general price levels.'},
    {t:'set aside funds to replace assets.'}
  ],
  expl:'Depreciation is COST ALLOCATION (matching), not valuation. It does not represent a cash fund.'
},
{ id:'ch6-003', chap:'ch6', type:'mcq', diff:'med', src:'mcq-bank',
  stem:'When the estimate of an asset\'s useful life is changed:',
  opts:[
    {t:'depreciation expense for all past periods must be recalculated.'},
    {t:'there is no change in depreciation expense recorded for future years.'},
    {t:'only depreciation expense for current and future years is affected.', ok:true},
    {t:'only depreciation expense in the current year is affected.'}
  ],
  expl:'A change in estimate is applied prospectively — current and future periods only. Past depreciation is not restated.'
},
{ id:'ch6-004', chap:'ch6', type:'mcq', diff:'med', src:'mcq-bank',
  stem:'If the sale of a depreciable asset results in a loss, the proceeds from the sale were:',
  opts:[
    {t:'less than current fair value.'},
    {t:'greater than cost.'},
    {t:'greater than book value.'},
    {t:'less than book value.', ok:true}
  ],
  expl:'Loss = Cash received − Book value < 0, so cash < BV.'
},
{ id:'ch6-005', chap:'ch6', type:'mcq', diff:'med', src:'mcq-bank',
  stem:'Which best describes the current method of accounting for research and development costs?',
  opts:[
    {t:'Revenue-recognition method.'},
    {t:'Systematic and rational allocation.'},
    {t:'Immediate recognition as an expense.', ok:true},
    {t:'Income-tax minimisation.'}
  ],
  expl:'Under US GAAP, R&D is fully expensed as incurred. IFRS allows capitalisation of DEVELOPMENT costs (only) once strict criteria are met; research must always be expensed.'
},
{ id:'ch6-006', chap:'ch6', type:'mcq', diff:'med', src:'mcq-bank',
  stem:'Goodwill should be recorded in the balance sheet only when:',
  opts:[
    {t:'It is sold to another company.'},
    {t:'It is acquired through the purchase of another business.', ok:true},
    {t:'A company reports above-normal earnings for five+ consecutive years.'},
    {t:'It can be established that a definite benefit has resulted from items like reputation.'}
  ],
  expl:'Only goodwill from a business acquisition is recognised. Internally generated goodwill is never on the books.'
},
{ id:'ch6-007', chap:'ch6', type:'mcq', diff:'easy', src:'authored',
  stem:'Capitalised cost of equipment includes:',
  opts:[
    {t:'Purchase price + freight-in + installation + testing.', ok:true},
    {t:'Purchase price only.'},
    {t:'Purchase price + interest paid on the financing note.'},
    {t:'Purchase price + ongoing maintenance.'}
  ],
  expl:'All directly attributable costs to bring the asset to its working condition are capitalised. Maintenance is expensed; interest on financing post-acquisition is generally expensed.'
},
{ id:'ch6-008', chap:'ch6', type:'mcq', diff:'easy', src:'authored',
  stem:'Net Book Value (NBV) of an asset equals:',
  opts:[
    {t:'Cost − Accumulated Depreciation.', ok:true},
    {t:'Cost − Residual Value.'},
    {t:'Fair Value − Cost.'},
    {t:'Cost ÷ Useful life.'}
  ],
  expl:'NBV = Cost − Acc. Dep. (the amount remaining to be depreciated minus residual roughly).'
},
{ id:'ch6-009', chap:'ch6', type:'mcq', diff:'med', src:'authored',
  stem:'Under the Double-Declining-Balance (DDB) method, what figure is multiplied by 2/n?',
  opts:[
    {t:'Cost − residual value.'},
    {t:'Cost.'},
    {t:'Net book value at the start of the year.', ok:true},
    {t:'Acc. Dep. at year-end.'}
  ],
  expl:'DDB rate × NBV (start of year). Residual is ignored each period; we just stop depreciating once NBV would dip below residual.'
},
{ id:'ch6-010', chap:'ch6', type:'mcq', diff:'med', src:'authored',
  stem:'Goodwill, after acquisition, is:',
  opts:[
    {t:'Amortised straight-line over 10 years.'},
    {t:'Amortised over its useful life.'},
    {t:'Tested annually for impairment, no amortisation.', ok:true},
    {t:'Re-valued each year based on industry comparables.'}
  ],
  expl:'Indefinite-life intangibles (goodwill, brand names with no expiry) are not amortised but tested for impairment annually.'
},
{ id:'ch6-011', chap:'ch6', type:'mcq', diff:'hard', src:'authored',
  stem:'Under IFRS, an impaired asset can be reversed (recovered) up to its original cost net of normal depreciation:',
  opts:[
    {t:'Yes — for tangible assets and most intangibles.', ok:true},
    {t:'No — once impaired, never reversed.'},
    {t:'Only for goodwill.'},
    {t:'Only on disposal.'}
  ],
  expl:'IFRS allows impairment reversal for everything EXCEPT goodwill. US GAAP forbids reversals.'
},
{ id:'ch6-012', chap:'ch6', type:'mcq', diff:'med', src:'authored',
  stem:'A capital expenditure (CapEx) appears on which statement?',
  opts:[
    {t:'Income statement (operating expenses).'},
    {t:'Cash flow statement, investing activities.', ok:true},
    {t:'Cash flow statement, operating activities.'},
    {t:'Equity statement.'}
  ],
  expl:'Cash spent acquiring or upgrading PP&E goes to CFI.'
},
{ id:'ch6-013', chap:'ch6', type:'numeric', diff:'med', src:'final-2024', dp:0,
  stem:'Sumantra sold a machine for $115,000. Bought 5 years ago for $175,000; SL depreciation, 12-year life, $25,000 salvage. Find gain or loss on sale (in $; positive = gain, negative = loss).',
  ans:2500,
  expl:'Annual dep = (175,000 − 25,000)/12 = 12,500. After 5 years: Acc Dep = 62,500. NBV = 112,500. G/L = 115,000 − 112,500 = +$2,500 gain.'
},
{ id:'ch6-014', chap:'ch6', type:'numeric', diff:'med', src:'final-2024', dp:0,
  stem:'Ricardus sold a machine for cash. Originally cost $60,000. Acc Dep at disposal = $45,000. Reported gain on disposal = $6,000. Find selling price (in $).',
  ans:21000,
  expl:'NBV = 60,000 − 45,000 = 15,000. Selling price = NBV + Gain = 15,000 + 6,000 = $21,000.'
},
{ id:'ch6-015', chap:'ch6', type:'numeric', diff:'med', src:'final-2025', dp:0,
  stem:'Solaris bought equipment with list price $72,000. Paid $55,000 cash and financed $17,000. Shipping $2,600; installation $3,800. At what amount is the equipment recorded (in $)?',
  ans:78400,
  expl:'Capitalised cost = 72,000 + 2,600 + 3,800 = $78,400. Method of financing is irrelevant.'
},
{ id:'ch6-016', chap:'ch6', type:'numeric', diff:'med', src:'final-2025', dp:0,
  stem:'On Jan 1, 2024 Frame bought a vehicle for $26,300. 6-year life; residual $2,900. Compute book value at Dec 31, 2025 using straight-line (in $).',
  ans:18500,
  expl:'Annual dep = (26,300 − 2,900)/6 = 3,900. After 2 years Acc Dep = 7,800. NBV = $18,500.'
},
{ id:'ch6-017', chap:'ch6', type:'numeric', diff:'hard', src:'final-2025', dp:0,
  stem:'MapleTech sold equipment for €58,000 cash. Cost €120,000; Acc Dep €75,000. What is the gain (in €)?',
  ans:13000,
  expl:'NBV = 120,000 − 75,000 = 45,000. Gain = 58,000 − 45,000 = €13,000. Note: investing cash inflow on the CFS is the full €58,000, not the gain.'
},
{ id:'ch6-018', chap:'ch6', type:'numeric', diff:'hard', src:'authored', dp:0,
  stem:'A truck cost $80,000; 5-year life; residual $5,000. Using DDB, compute Year 2 depreciation expense (in $).',
  ans:19200,
  expl:'DDB rate = 2/5 = 40%. Year 1 dep = 40% × 80,000 = 32,000. NBV start of Y2 = 80,000 − 32,000 = 48,000. Year 2 dep = 40% × 48,000 = $19,200.'
},
{ id:'ch6-019', chap:'ch6', type:'numeric', diff:'med', src:'authored', dp:0,
  stem:'A truck costs $80,000, has a 5-year useful life and $5,000 residual value. Using straight-line depreciation, what is Year 2 depreciation expense (in $)?',
  ans:15000,
  expl:'SL = (80,000 − 5,000)/5 = $15,000 per year.'
},
{ id:'ch6-020', chap:'ch6', type:'numeric', diff:'hard', src:'authored', dp:0,
  stem:'A drilling rig cost $500,000, expected to drill 100,000 hours; residual $20,000. Year 3 hours = 18,000. Compute Year 3 depreciation under units-of-production (in $).',
  ans:86400,
  expl:'Per hour = (500,000 − 20,000)/100,000 = $4.80. Y3 dep = 18,000 × 4.80 = $86,400.'
},
{ id:'ch6-021', chap:'ch6', type:'mcq', diff:'med', src:'authored',
  stem:'A company spends $5,000 on routine maintenance of a machine. This should be:',
  opts:[
    {t:'Capitalised, increasing the machine\'s cost.'},
    {t:'Expensed in the period as a repair expense.', ok:true},
    {t:'Capitalised and amortised over 5 years.'},
    {t:'Recorded as a contra-asset.'}
  ],
  expl:'Routine maintenance restoring normal operating condition is expensed. Only improvements that EXTEND useful life or INCREASE productive capacity are capitalised.'
},
{ id:'ch6-022', chap:'ch6', type:'mcq', diff:'med', src:'authored',
  stem:'Land:',
  opts:[
    {t:'Is depreciated straight-line over 50 years.'},
    {t:'Is generally NOT depreciated.', ok:true},
    {t:'Is depreciated only if used for parking.'},
    {t:'Is amortised over 30 years.'}
  ],
  expl:'Land has indefinite life; not depreciated. Land improvements (parking lots, fencing) ARE depreciated.'
},
{ id:'ch6-023', chap:'ch6', type:'mcq', diff:'med', src:'authored',
  stem:'Which is NOT a typical intangible asset?',
  opts:[
    {t:'Patent.'},
    {t:'Trademark.'},
    {t:'Customer list (purchased).'},
    {t:'Office building.', ok:true}
  ],
  expl:'Office building is tangible PP&E.'
},
{ id:'ch6-024', chap:'ch6', type:'mcq', diff:'hard', src:'authored',
  stem:'Goodwill impairment is tested by:',
  opts:[
    {t:'Comparing the carrying amount of goodwill with its fair value as a stand-alone asset.'},
    {t:'Comparing the carrying amount of the cash-generating unit (CGU) with its recoverable amount, under IFRS.', ok:true},
    {t:'Amortising goodwill at 10% per year.'},
    {t:'Re-measuring goodwill at year-end fair value of the entity.'}
  ],
  expl:'Goodwill is tested at the CGU level. If carrying amount > recoverable amount (max of FV less costs to sell and value-in-use), the difference is an impairment loss.'
},
{ id:'ch6-025', chap:'ch6', type:'numeric', diff:'med', src:'authored', dp:0,
  stem:'A patent acquired for $120,000 has a legal life of 20 years and an expected useful life of 8 years. Year 1 amortisation expense (in $)?',
  ans:15000,
  expl:'Amortise over the SHORTER of legal and useful life. 120,000 / 8 = $15,000.'
},
{ id:'ch6-026', chap:'ch6', type:'long', diff:'hard', src:'authored',
  stem:'A delivery truck (cost $40,000, Acc Dep $32,000) is sold for $5,000 cash. Show the journal entry, then describe the cash-flow-statement impact.',
  expl:'<strong>Entry:</strong><br>Debit Cash $5,000<br>Debit Accumulated Depreciation $32,000<br>Debit Loss on Sale of Equipment $3,000<br>Credit Equipment $40,000<br><br>The loss = NBV − Cash = ($40,000 − $32,000) − $5,000 = $3,000.<br><br><strong>Cash flow statement:</strong><br>• <strong>Investing</strong>: +$5,000 inflow (cash received).<br>• <strong>Operating (indirect method)</strong>: ADD BACK the $3,000 loss to NI to avoid double counting (the cash impact is fully captured in CFI).',
  mark:[
    'Wrote complete journal entry with Cash, Acc Dep, Loss, Equipment (1)',
    'Computed Loss correctly: $3,000 (1)',
    'CFI shows full $5,000 inflow (1)',
    'Identified that the loss is added back in CFO under indirect method (1)'
  ]
},
{ id:'ch6-027', chap:'ch6', type:'mcq', diff:'hard', src:'authored',
  stem:'Recoverable amount under IFRS is:',
  opts:[
    {t:'The lesser of fair value less costs to sell and value-in-use.'},
    {t:'The greater of fair value less costs to sell and value-in-use.', ok:true},
    {t:'Fair value only.'},
    {t:'Replacement cost.'}
  ],
  expl:'Recoverable amount = max(FV − costs to sell, value-in-use). Carrying > recoverable → impair down to recoverable.'
},
{ id:'ch6-028', chap:'ch6', type:'mcq', diff:'med', src:'authored',
  stem:'Acquisition of a business produces $50M in goodwill on the buyer\'s books. Two years later, the buyer\'s CGU has a recoverable amount of $40M and a carrying amount of $48M. Goodwill impairment under IFRS is:',
  opts:[
    {t:'$2M.'},
    {t:'$8M, allocated first to goodwill (up to $50M), so write down goodwill by $8M.', ok:true},
    {t:'$10M.'},
    {t:'$0.'}
  ],
  expl:'Carrying − Recoverable = 48 − 40 = $8M impairment. Allocated to goodwill first (up to its $50M carrying value).'
},
{ id:'ch6-029', chap:'ch6', type:'numeric', diff:'med', src:'authored', dp:0,
  stem:'A copier was purchased for $25,000 with $4,000 residual; expected useful life 5 years. Using straight-line, what is Acc Dep after 3 years (in $)?',
  ans:12600,
  expl:'Annual = (25,000 − 4,000)/5 = 4,200. After 3 years: 3 × 4,200 = $12,600.'
},
{ id:'ch6-030', chap:'ch6', type:'mcq', diff:'med', src:'authored',
  stem:'Which depreciation method results in the MOST depreciation expense in the early years of an asset\'s life?',
  opts:[
    {t:'Straight-line.'},
    {t:'Double-declining balance.', ok:true},
    {t:'Units-of-production.'},
    {t:'Sum-of-the-years digits.'}
  ],
  expl:'DDB front-loads depreciation more aggressively than any other common method.'
}
]);

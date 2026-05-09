/* Chapter 10 — Financial Investments */
QBANK.add([
{ id:'ch10-001', chap:'ch10', type:'mcq', diff:'easy', src:'final-2024',
  stem:'At what level of investment ownership is significant influence often presumed?',
  opts:[
    {t:'Greater than 20% of voting shares.'},
    {t:'Between 20% and 50% of voting shares.', ok:true},
    {t:'Greater than 50% of voting shares.'},
    {t:'Greater than 20% of voting shares OR market value.'}
  ],
  expl:'20% is the threshold for presumed significant influence. Apply the equity method.'
},
{ id:'ch10-002', chap:'ch10', type:'mcq', diff:'med', src:'authored',
  stem:'Which method applies to an investment of 60% of voting shares?',
  opts:[
    {t:'Trading securities (FV through P&L).'},
    {t:'FVOCI.'},
    {t:'Equity method.'},
    {t:'Consolidation.', ok:true}
  ],
  expl:'>50% = control = consolidate the subsidiary line by line.'
},
{ id:'ch10-003', chap:'ch10', type:'mcq', diff:'med', src:'authored',
  stem:'Under the EQUITY method, dividends received from the investee:',
  opts:[
    {t:'Are recognised as dividend revenue.'},
    {t:'Reduce the investment account; not recognised as income.', ok:true},
    {t:'Increase the investment account.'},
    {t:'Are recognised in OCI.'}
  ],
  expl:'Income is recognised by % of investee NI. Dividends represent a partial return of that already-recognised earnings → reduce the investment account.'
},
{ id:'ch10-004', chap:'ch10', type:'numeric', diff:'med', src:'authored', dp:0,
  stem:'Investor owns 30% of Investee. Beginning investment $200,000. Investee NI = $100,000. Investee paid $40,000 dividends. New investment carrying value (in $)?',
  ans:218000,
  expl:'Income = 30% × 100,000 = +30,000. Dividends received = 30% × 40,000 = −12,000. End = 200,000 + 30,000 − 12,000 = $218,000.'
},
{ id:'ch10-005', chap:'ch10', type:'numeric', diff:'med', src:'authored', dp:0,
  stem:'Investor owns 30% of Investee (significant influence; equity method applies). During the year Investee earned net income of $100,000 and paid $40,000 of dividends. How much investment income should the investor recognise on its income statement (in $)?',
  ans:30000,
  expl:'Equity-method income = ownership % × investee NI = 30% × $100,000 = $30,000. Note: dividends received from the investee are NOT income — they reduce the investment-account carrying value.'
},
{ id:'ch10-006', chap:'ch10', type:'mcq', diff:'easy', src:'authored',
  stem:'TRADING securities are reported at:',
  opts:[
    {t:'Amortised cost.'},
    {t:'Fair value with unrealised G/L through P&L.', ok:true},
    {t:'Fair value with unrealised G/L through OCI.'},
    {t:'Lower of cost or market.'}
  ],
  expl:'Trading: FVTPL — both realised and unrealised G/L flow through net income.'
},
{ id:'ch10-007', chap:'ch10', type:'mcq', diff:'med', src:'authored',
  stem:'Under IFRS 9, an equity investment (NOT held for trading) can be designated:',
  opts:[
    {t:'At amortised cost.'},
    {t:'FVOCI (with no recycling on sale).', ok:true},
    {t:'FVOCI (with recycling).'},
    {t:'HTM.'}
  ],
  expl:'IFRS 9: equity FVOCI election is irrevocable and gains/losses are NEVER recycled to P&L. (Debt FVOCI is recycled.)'
},
{ id:'ch10-008', chap:'ch10', type:'mcq', diff:'med', src:'authored',
  stem:'Held-to-maturity (or "amortised cost") classification under IFRS 9 applies only to:',
  opts:[
    {t:'Equity investments.'},
    {t:'Debt instruments held within a "hold to collect" business model with cash flows that are SPPI.', ok:true},
    {t:'Cash and cash equivalents only.'},
    {t:'Trading derivatives.'}
  ],
  expl:'Two tests: business model (hold to collect) AND SPPI (solely payments of principal and interest).'
},
{ id:'ch10-009', chap:'ch10', type:'numeric', diff:'med', src:'authored', dp:0,
  stem:'A trading equity investment costs $50,000. At year-end fair value = $58,000. Unrealised gain reported in NI (in $)?',
  ans:8000,
  expl:'FVTPL: 58,000 − 50,000 = $8,000 unrealised gain through P&L.'
},
{ id:'ch10-010', chap:'ch10', type:'numeric', diff:'med', src:'authored', dp:0,
  stem:'A FVOCI debt instrument costs $50,000. Year-end fair value = $58,000. Unrealised gain reported in OCI (in $)?',
  ans:8000,
  expl:'FVOCI debt: $8,000 OCI; recycled to P&L on sale. FVOCI equity: $8,000 OCI but never recycled.'
},
{ id:'ch10-011', chap:'ch10', type:'mcq', diff:'med', src:'authored',
  stem:'Consolidated financial statements include 100% of the subsidiary\'s assets and liabilities even if the parent owns only 80%. The remaining 20% appears as:',
  opts:[
    {t:'Goodwill.'},
    {t:'Non-controlling interest (NCI) within equity.', ok:true},
    {t:'A liability.'},
    {t:'Treasury stock.'}
  ],
  expl:'NCI is the equity attributable to the minority owners.'
},
{ id:'ch10-012', chap:'ch10', type:'mcq', diff:'med', src:'authored',
  stem:'Inter-company transactions in consolidation are:',
  opts:[
    {t:'Doubled.'},
    {t:'Eliminated.', ok:true},
    {t:'Reclassified to investing.'},
    {t:'Recognised in OCI.'}
  ],
  expl:'Inter-company sales, AR/AP between parent and sub are eliminated in consolidation to avoid double counting.'
},
{ id:'ch10-013', chap:'ch10', type:'numeric', diff:'med', src:'authored', dp:0,
  stem:'Parent owns 80% of Sub. Sub NI = $500,000. NCI share of NI (in $)?',
  ans:100000,
  expl:'NCI share = (1 − 80%) × 500,000 = 20% × 500,000 = $100,000.'
},
{ id:'ch10-014', chap:'ch10', type:'mcq', diff:'med', src:'authored',
  stem:'A debt investment held with the intent to collect contractual cash flows AND that meets the SPPI test is measured at:',
  opts:[
    {t:'Amortised cost.', ok:true},
    {t:'FVTPL.'},
    {t:'FVOCI.'},
    {t:'Fair value with unrealised G/L in equity.'}
  ],
  expl:'Both criteria → amortised cost. Add a "sell" objective and you\'d move to FVOCI.'
},
{ id:'ch10-015', chap:'ch10', type:'mcq', diff:'hard', src:'authored',
  stem:'A 25% equity investment had a beginning balance of $1,000,000. The investee posts a NET LOSS of $200,000 and pays no dividend. New carrying value (in $)?',
  ans:950000,
  expl:'Investor share of loss = 25% × (-200,000) = −50,000. New balance = 1,000,000 − 50,000 = $950,000.',
  ans:950000
},
{ id:'ch10-016', chap:'ch10', type:'mcq', diff:'med', src:'authored',
  stem:'A 5% equity investment in a public company is best classified as:',
  opts:[
    {t:'Trading or FVOCI (depending on intent).', ok:true},
    {t:'Equity method.'},
    {t:'Consolidation.'},
    {t:'Amortised cost.'}
  ],
  expl:'Below 20% = no significant influence. Goes to FVTPL (default for equities) or FVOCI election (irrevocable).'
},
{ id:'ch10-017', chap:'ch10', type:'mcq', diff:'med', src:'authored',
  stem:'Goodwill arising on acquisition of a subsidiary is:',
  opts:[
    {t:'Always written off in 10 years.'},
    {t:'Amortised over its useful life under IFRS.'},
    {t:'Tested for impairment annually under IFRS, no amortisation.', ok:true},
    {t:'Treated as a current asset.'}
  ],
  expl:'IFRS 3: indefinite life, annual impairment test, no amortisation.'
},
{ id:'ch10-018', chap:'ch10', type:'mcq', diff:'easy', src:'authored',
  stem:'A 100% subsidiary is:',
  opts:[
    {t:'Equity method.'},
    {t:'Wholly owned and consolidated.', ok:true},
    {t:'Trading.'},
    {t:'A joint venture.'}
  ],
  expl:'100% control → wholly owned → consolidate with no NCI.'
},
{ id:'ch10-019', chap:'ch10', type:'numeric', diff:'med', src:'authored', dp:0,
  stem:'Investor owns 40% of Co X. Year-end NI of Co X = $250,000. Dividends paid = $80,000. Compute investor\'s investment-account change (in $).',
  ans:68000,
  expl:'+40% × 250,000 (income) − 40% × 80,000 (dividends) = 100,000 − 32,000 = $68,000 net increase.'
},
{ id:'ch10-020', chap:'ch10', type:'mcq', diff:'med', src:'authored',
  stem:'A joint venture under IFRS 11 is accounted for using:',
  opts:[
    {t:'Proportional consolidation.'},
    {t:'The equity method.', ok:true},
    {t:'Trading securities.'},
    {t:'Cost method.'}
  ],
  expl:'IFRS 11 mandates the equity method for joint ventures (joint operations are different — line-by-line for the operator\'s share).'
},
{ id:'ch10-021', chap:'ch10', type:'mcq', diff:'med', src:'authored',
  stem:'A debt investment classified at amortised cost: a $100,000 face bond at 5% coupon paid annually, market rate at issue 4%, 5-year life. The carrying amount over time:',
  opts:[
    {t:'Stays at $100,000.'},
    {t:'Falls toward $100,000 from a premium.', ok:true},
    {t:'Rises toward $100,000 from a discount.'},
    {t:'Falls below $100,000.'}
  ],
  expl:'Coupon (5%) > market (4%) → premium. CV starts above face and falls toward $100K at maturity.'
},
{ id:'ch10-022', chap:'ch10', type:'mcq', diff:'hard', src:'authored',
  stem:'A FVOCI debt instrument is sold. The cumulative G/L in OCI is:',
  opts:[
    {t:'Reclassified to P&L (recycled).', ok:true},
    {t:'Stays in OCI permanently.'},
    {t:'Closed to retained earnings directly.'},
    {t:'Reverses to zero.'}
  ],
  expl:'Debt FVOCI: cumulative OCI G/L is recycled to P&L on disposal. Equity FVOCI: NEVER recycled.'
},
{ id:'ch10-023', chap:'ch10', type:'numeric', diff:'med', src:'authored', dp:0,
  stem:'Investor buys 25% of CoY for $500,000. CoY year-1 NI = $200,000. CoY pays $50,000 in dividends. Income on investor\'s I/S (in $)?',
  ans:50000,
  expl:'Equity-method income = 25% × 200,000 = $50,000. (Dividends affect the investment account, not income.)'
},
{ id:'ch10-024', chap:'ch10', type:'mcq', diff:'med', src:'authored',
  stem:'Equity-method investment: if the investee declares a stock dividend (no cash), the investor:',
  opts:[
    {t:'Records investment income.'},
    {t:'Records no entry — proportionate share of investee equity unchanged.', ok:true},
    {t:'Reduces the investment.'},
    {t:'Increases the investment.'}
  ],
  expl:'Investee\'s stock dividend just rebalances investee equity accounts. Investor\'s share is unchanged.'
},
{ id:'ch10-025', chap:'ch10', type:'mcq', diff:'med', src:'authored',
  stem:'A 5% holding initially classified as FVTPL is later reclassified to "amortised cost":',
  opts:[
    {t:'Allowed any time at management\'s discretion.'},
    {t:'Allowed only when the business model changes — rare.', ok:true},
    {t:'Never allowed.'},
    {t:'Always required at year-end.'}
  ],
  expl:'IFRS 9 reclassifications happen only on a substantive change in business model — meant to be rare.'
},
{ id:'ch10-026', chap:'ch10', type:'numeric', diff:'med', src:'authored', dp:0,
  stem:'Holdings in trading securities at year-end: cost $100,000; FV $115,000. Sold next year for $120,000. Realised gain in next year\'s P&L (in $)?',
  ans:5000,
  expl:'Carrying = $115K (year-end FV revaluation already in P&L). Realised G/L on sale = 120,000 − 115,000 = $5,000.'
},
{ id:'ch10-027', chap:'ch10', type:'mcq', diff:'med', src:'authored',
  stem:'When does an investor lose significant influence over an associate?',
  opts:[
    {t:'When ownership falls below 20% AND the investor no longer has board representation or policy participation.', ok:true},
    {t:'When ownership remains at 25%.'},
    {t:'When the investee\'s stock price falls 20%.'},
    {t:'Never.'}
  ],
  expl:'It\'s a substance test. Ownership level is just an indicator. Loss of influence triggers reclassification away from equity method.'
},
{ id:'ch10-028', chap:'ch10', type:'mcq', diff:'hard', src:'authored',
  stem:'When the parent acquires 100% of a subsidiary at a price ABOVE the FV of identifiable net assets, the excess is:',
  opts:[
    {t:'A loss.'},
    {t:'Goodwill.', ok:true},
    {t:'A bargain-purchase gain.'},
    {t:'A liability.'}
  ],
  expl:'Excess of consideration over FV of net identifiable assets = Goodwill (an indefinite-life intangible).'
},
{ id:'ch10-029', chap:'ch10', type:'mcq', diff:'med', src:'authored',
  stem:'A bargain purchase (negative goodwill) is:',
  opts:[
    {t:'Capitalised as an asset.'},
    {t:'Recognised as a gain in profit or loss.', ok:true},
    {t:'Recognised in OCI.'},
    {t:'Deferred and amortised.'}
  ],
  expl:'After re-checking the FV measurement, any remaining excess of FV of net assets over consideration paid is recognised as a gain on bargain purchase in P&L.'
},
{ id:'ch10-030', chap:'ch10', type:'long', diff:'hard', src:'authored',
  stem:'Compare and contrast (a) trading classification, (b) FVOCI, and (c) equity method, in terms of: where unrealised gains go, where realised gains go, and the carrying basis of the investment.',
  expl:'<strong>(a) Trading (FVTPL):</strong> Carrying = fair value. Unrealised G/L → P&L. Realised G/L → P&L (mostly already there).<br><br><strong>(b) FVOCI:</strong> Carrying = fair value. Unrealised G/L → OCI. For DEBT: realised G/L recycled to P&L on sale. For EQUITY (irrevocable election): never recycled — stays in OCI.<br><br><strong>(c) Equity method:</strong> Carrying = cost + share of NI − dividends. NO mark-to-market. Investor recognises % of investee NI as income; receives dividends as a return of capital. On sale, G/L = proceeds − final carrying value.',
  mark:[
    'Trading: carrying = FV; unrealised → P&L (1)',
    'FVOCI debt: unrealised → OCI; realised recycled (1)',
    'FVOCI equity: never recycled (1)',
    'Equity method: cost + share of NI − dividends, no mark-to-market (1)',
    'Sale G/L treatment for each (1)'
  ]
}
]);

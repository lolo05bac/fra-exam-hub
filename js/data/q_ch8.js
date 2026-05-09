/* Chapter 8 — Leases (IFRS 16 / ASC 842) */
QBANK.add([
{ id:'ch8-001', chap:'ch8', type:'mcq', diff:'easy', src:'authored',
  stem:'Under IFRS 16, lessees:',
  opts:[
    {t:'Use a single model: most leases create a Right-of-Use asset and a Lease Liability.', ok:true},
    {t:'Distinguish operating from finance leases (two models).'},
    {t:'Keep operating leases off-balance-sheet.'},
    {t:'Recognise rent expense straight-line for ALL leases regardless of term.'}
  ],
  expl:'IFRS 16 brought essentially all leases onto the balance sheet via a single lessee model.'
},
{ id:'ch8-002', chap:'ch8', type:'mcq', diff:'med', src:'authored',
  stem:'Under US GAAP (ASC 842), an OPERATING lease for the lessee:',
  opts:[
    {t:'Stays off the balance sheet.'},
    {t:'Goes on the balance sheet but produces a SINGLE, straight-line lease expense on the income statement.', ok:true},
    {t:'Produces front-loaded interest + depreciation.'},
    {t:'Cannot exist any longer.'}
  ],
  expl:'ASC 842 still distinguishes operating vs. finance leases for I/S, but both go on the balance sheet.'
},
{ id:'ch8-003', chap:'ch8', type:'mcq', diff:'med', src:'authored',
  stem:'A finance lease produces an income-statement pattern that is:',
  opts:[
    {t:'Straight-line expense.'},
    {t:'Front-loaded — high interest early, falling later, plus straight-line depreciation.', ok:true},
    {t:'Back-loaded.'},
    {t:'Identical to an operating lease.'}
  ],
  expl:'Front-loaded because interest expense follows the (decreasing) lease liability balance.'
},
{ id:'ch8-004', chap:'ch8', type:'mcq', diff:'med', src:'authored',
  stem:'The initial measurement of a Lease Liability is:',
  opts:[
    {t:'The future undiscounted lease payments.'},
    {t:'The PV of remaining lease payments at the lessee\'s incremental borrowing rate (or the rate implicit if known).', ok:true},
    {t:'The fair value of the leased asset.'},
    {t:'Zero — only ROU asset is recorded.'}
  ],
  expl:'Standard PV-of-payments calculation.'
},
{ id:'ch8-005', chap:'ch8', type:'mcq', diff:'easy', src:'authored',
  stem:'IFRS 16 short-term lease exemption applies to leases of:',
  opts:[
    {t:'12 months or less with no purchase option.', ok:true},
    {t:'Up to 5 years.'},
    {t:'Land only.'},
    {t:'Cars only.'}
  ],
  expl:'Short-term (≤12 months) and low-value (~$5,000 new) leases can be expensed straight-line off-balance-sheet.'
},
{ id:'ch8-006', chap:'ch8', type:'numeric', diff:'med', src:'authored', dp:0,
  stem:'A 5-year lease has annual payments of €10,000 in arrears. IBR = 8%. PV factor (annuity, 5 years, 8%) = 3.9927. Initial Lease Liability (in €)?',
  ans:39927,
  expl:'PV = 10,000 × 3.9927 = €39,927.'
},
{ id:'ch8-007', chap:'ch8', type:'numeric', diff:'med', src:'authored', dp:0,
  stem:'A 5-year lease has annual payments of €10,000 in arrears. IBR = 8%. PV factor (annuity, 5 years, 8%) = 3.9927. So the initial Lease Liability is €39,927. What is the Year 1 interest expense (in €)?',
  ans:3194,
  expl:'Year 1 interest = opening liability × IBR = 39,927 × 8% ≈ €3,194.'
},
{ id:'ch8-008', chap:'ch8', type:'numeric', diff:'med', src:'authored', dp:0,
  stem:'A 5-year lease has annual payments of €10,000 in arrears. IBR = 8%. PV factor (annuity, 5 years, 8%) = 3.9927. So the initial ROU asset = initial Lease Liability = €39,927. What is the Year 1 ROU asset depreciation expense under straight-line (in €)?',
  ans:7985,
  expl:'Depreciation = ROU / lease term = 39,927 / 5 ≈ €7,985 per year.'
},
{ id:'ch8-009', chap:'ch8', type:'numeric', diff:'hard', src:'authored', dp:0,
  stem:'A 5-year lease has annual payments of €10,000 in arrears. IBR = 8%. PV factor (annuity, 5 years, 8%) = 3.9927. Initial lease liability = €39,927; Year 1 interest accrual ≈ €3,194. What is the lease liability balance at the end of Year 1, after the year-end payment (in €)?',
  ans:33121,
  expl:'Lease liability roll-forward: End = Beg + Interest − Payment = 39,927 + 3,194 − 10,000 = €33,121.'
},
{ id:'ch8-010', chap:'ch8', type:'mcq', diff:'med', src:'authored',
  stem:'Under IFRS 16, the cash payment of €10,000 splits as follows on the cash flow statement:',
  opts:[
    {t:'Interest part can be CFO or CFF (entity choice); principal part is CFF.', ok:true},
    {t:'All in CFO.'},
    {t:'All in CFF.'},
    {t:'All in CFI.'}
  ],
  expl:'IFRS allows interest in either CFO or CFF; principal repayment of the lease liability is always CFF.'
},
{ id:'ch8-011', chap:'ch8', type:'mcq', diff:'hard', src:'authored',
  stem:'Under ASC 842, an operating lease\'s lease payments are classified as:',
  opts:[
    {t:'CFO.', ok:true},
    {t:'CFI.'},
    {t:'CFF.'},
    {t:'Half CFO, half CFF.'}
  ],
  expl:'For US-GAAP operating leases, the entire payment hits CFO.'
},
{ id:'ch8-012', chap:'ch8', type:'mcq', diff:'med', src:'authored',
  stem:'A lease that transfers ownership at end of term is automatically:',
  opts:[
    {t:'An operating lease (US GAAP).'},
    {t:'A finance lease (US GAAP) / on-balance-sheet (IFRS).', ok:true},
    {t:'A short-term lease.'},
    {t:'Off-balance-sheet.'}
  ],
  expl:'Title transfer is a classic finance lease criterion under US GAAP.'
},
{ id:'ch8-013', chap:'ch8', type:'mcq', diff:'med', src:'authored',
  stem:'A 10-year lease where the asset has a 12-year useful life. Lease term ÷ useful life = 83%. This satisfies which finance-lease criterion?',
  opts:[
    {t:'Lease term ≥ 75% of useful life.', ok:true},
    {t:'PV ≥ 90% of FV.'},
    {t:'Title transfer.'},
    {t:'Bargain purchase.'}
  ],
  expl:'Major-part-of-economic-life test (75% bright line under US GAAP).'
},
{ id:'ch8-014', chap:'ch8', type:'mcq', diff:'hard', src:'authored',
  stem:'A lessee has a 5-year operating lease with $20,000 payments per year. Under IFRS 16, the year-1 INCOME STATEMENT shows approximately:',
  opts:[
    {t:'$20,000 of straight-line lease expense.'},
    {t:'$20,000 split into interest + depreciation, totalling more than $20,000 in early years.', ok:true},
    {t:'$0 (off-balance-sheet).'},
    {t:'$30,000 of expense.'}
  ],
  expl:'Under IFRS 16 there\'s no operating-lease distinction for lessees: all leases produce interest + depreciation, and total expense is front-loaded (more than the cash payment in early years).'
},
{ id:'ch8-015', chap:'ch8', type:'numeric', diff:'med', src:'authored', dp:0,
  stem:'A 4-year lease, $5,000 per year in arrears, IBR 5%. PV-annuity factor (4 yr, 5%) = 3.5460. Initial ROU asset (in $)?',
  ans:17730,
  expl:'PV = 5,000 × 3.5460 = $17,730.'
},
{ id:'ch8-016', chap:'ch8', type:'mcq', diff:'med', src:'authored',
  stem:'A lessor that retains substantially all risks and rewards of ownership classifies the lease as:',
  opts:[
    {t:'A finance lease.'},
    {t:'An operating lease.', ok:true},
    {t:'A direct financing lease.'},
    {t:'An off-balance-sheet lease.'}
  ],
  expl:'Lessor classification: if the lessor keeps risks/rewards = operating lease (asset stays on lessor\'s books, lessor records lease income).'
},
{ id:'ch8-017', chap:'ch8', type:'mcq', diff:'med', src:'authored',
  stem:'Bringing leases on the balance sheet under IFRS 16 generally:',
  opts:[
    {t:'Increases assets and liabilities; raises D/E.', ok:true},
    {t:'Decreases assets and liabilities.'},
    {t:'Has no effect on the balance sheet.'},
    {t:'Reduces D/E.'}
  ],
  expl:'IFRS 16 grossed up balance sheets — both ROU assets and lease liabilities go up. D/E rises.'
},
{ id:'ch8-018', chap:'ch8', type:'mcq', diff:'med', src:'authored',
  stem:'Under IFRS, EBITDA after IFRS 16 typically:',
  opts:[
    {t:'Falls.'},
    {t:'Rises (because the lease expense is replaced by depreciation + interest, which are below EBITDA).', ok:true},
    {t:'Is unchanged.'},
    {t:'Becomes negative.'}
  ],
  expl:'Pre-IFRS-16, lease expense reduced EBITDA. Post-IFRS-16, that expense becomes depreciation + interest — both excluded from EBITDA.'
},
{ id:'ch8-019', chap:'ch8', type:'mcq', diff:'hard', src:'authored',
  stem:'A bargain purchase option in a lease:',
  opts:[
    {t:'Has no effect on classification.'},
    {t:'Triggers finance-lease classification under US GAAP.', ok:true},
    {t:'Reduces the lease liability.'},
    {t:'Eliminates depreciation.'}
  ],
  expl:'BPO at a price well below FV at end of term → reasonably certain to exercise → finance lease.'
},
{ id:'ch8-020', chap:'ch8', type:'mcq', diff:'med', src:'authored',
  stem:'A short-term lease (10 months) of office equipment is exempted under IFRS 16. The lessee should:',
  opts:[
    {t:'Recognise an ROU asset and lease liability.'},
    {t:'Recognise lease payments straight-line as expense.', ok:true},
    {t:'Capitalise the lease.'},
    {t:'Treat it as financing.'}
  ],
  expl:'Short-term and low-value leases can be expensed straight-line, like the old "operating lease" treatment.'
},
{ id:'ch8-021', chap:'ch8', type:'long', diff:'hard', src:'authored',
  stem:'A 4-year lease, payments €15,000 at year-end, IBR 6%. PV-factor (4y, 6%) = 3.4651. (a) Compute initial ROU and Liability. (b) Show the year-1 amortisation: interest, principal, ending liability. (c) Compute year-1 depreciation.',
  expl:'<strong>(a)</strong> PV = 15,000 × 3.4651 = €51,977. ROU asset = Liability = €51,977 at inception.<br><br><strong>(b) Year 1:</strong><br>Interest = 51,977 × 6% = €3,119<br>Principal repayment = 15,000 − 3,119 = €11,881<br>Ending liability = 51,977 − 11,881 = €40,096<br><br><strong>(c)</strong> Year-1 depreciation = 51,977 / 4 = €12,994 (straight-line over lease term, which is shorter than useful life).',
  mark:[
    'Initial ROU and Liability ≈ €51,977 (1)',
    'Year-1 interest computed correctly ≈ €3,119 (1)',
    'Year-1 principal reduction ≈ €11,881 (1)',
    'Ending liability ≈ €40,096 (1)',
    'Depreciation = ROU / lease term = €12,994 (1)'
  ]
},
{ id:'ch8-022', chap:'ch8', type:'mcq', diff:'med', src:'authored',
  stem:'For a finance lease, the income-statement pattern over the lease life:',
  opts:[
    {t:'Front-loaded (higher early, lower later).', ok:true},
    {t:'Straight-line.'},
    {t:'Back-loaded.'},
    {t:'Variable each year based on cash payments.'}
  ],
  expl:'Interest expense follows the declining liability, so total expense (int + dep) is front-loaded.'
},
{ id:'ch8-023', chap:'ch8', type:'mcq', diff:'hard', src:'authored',
  stem:'A company changes its IBR for a re-measured lease. Under IFRS 16, this is:',
  opts:[
    {t:'A change of scope or economic terms — re-measure the lease liability using the revised rate.', ok:true},
    {t:'Always retrospective.'},
    {t:'Always prospective with no liability change.'},
    {t:'Not allowed.'}
  ],
  expl:'IFRS 16 re-measures the liability at the new rate when the lease term changes or there\'s a substantive modification.'
},
{ id:'ch8-024', chap:'ch8', type:'mcq', diff:'med', src:'authored',
  stem:'Sale-and-leaseback under IFRS 16: when the transfer qualifies as a sale, the seller-lessee:',
  opts:[
    {t:'Recognises the entire gain on sale.'},
    {t:'Recognises only the portion of the gain related to rights transferred to the buyer-lessor.', ok:true},
    {t:'Cannot recognise any gain.'},
    {t:'Defers all gain.'}
  ],
  expl:'IFRS 16 limits gain recognition to the portion of rights transferred — the seller-lessee continues to control part of the asset via the leaseback.'
},
{ id:'ch8-025', chap:'ch8', type:'mcq', diff:'med', src:'authored',
  stem:'A right-of-use asset is generally amortised over:',
  opts:[
    {t:'The shorter of lease term and useful life of the asset.', ok:true},
    {t:'The longer of lease term and useful life.'},
    {t:'Always 5 years.'},
    {t:'The expected residual life.'}
  ],
  expl:'Shorter of lease term and useful life — unless there is a transfer of title or a BPO.'
},
{ id:'ch8-026', chap:'ch8', type:'mcq', diff:'hard', src:'authored',
  stem:'Under IFRS 16, when a lessee initially measures the lease liability, which is included in lease payments?',
  opts:[
    {t:'Variable payments based on usage (mileage).'},
    {t:'Fixed payments + RVG amounts expected to be paid + bargain purchase options reasonably certain to be exercised.', ok:true},
    {t:'Both fixed and variable payments equally.'},
    {t:'Only variable payments.'}
  ],
  expl:'Variable lease payments NOT linked to an index/rate are excluded. Fixed, in-substance fixed, BPOs, residual value guarantees expected to be paid are included.'
},
{ id:'ch8-027', chap:'ch8', type:'mcq', diff:'med', src:'authored',
  stem:'A lessee\'s cash flow statement under IFRS 16 generally shows:',
  opts:[
    {t:'CFO higher than under the previous standard (because principal payments shift to CFF).', ok:true},
    {t:'CFO lower.'},
    {t:'No CFO change.'},
    {t:'All payments in CFI.'}
  ],
  expl:'IFRS 16 reclassifies the principal portion of lease payments out of CFO into CFF — boosting reported CFO.'
},
{ id:'ch8-028', chap:'ch8', type:'mcq', diff:'med', src:'authored',
  stem:'A lessor\'s gross investment in a finance lease equals:',
  opts:[
    {t:'PV of lease payments + unguaranteed residual.'},
    {t:'Sum of UNDISCOUNTED lease payments + unguaranteed residual.', ok:true},
    {t:'Net investment only.'},
    {t:'Cash received to date.'}
  ],
  expl:'Gross = sum of undiscounted payments and any unguaranteed residual. Net investment = PV of those.'
},
{ id:'ch8-029', chap:'ch8', type:'mcq', diff:'hard', src:'authored',
  stem:'When a lease is modified to extend the term, IFRS 16 requires the lessee to:',
  opts:[
    {t:'Ignore the modification.'},
    {t:'Re-measure the lease liability using a revised discount rate; adjust the ROU asset by the same amount.', ok:true},
    {t:'Recognise a gain in the income statement.'},
    {t:'Treat as a new lease only.'}
  ],
  expl:'Modifications that change the term re-measure the liability with a revised rate; the offset adjusts the ROU asset (no income-statement effect).'
},
{ id:'ch8-030', chap:'ch8', type:'numeric', diff:'med', src:'authored', dp:0,
  stem:'A lease liability of $80,000 at start of year, IBR 5%. Annual payment $20,000 at year-end. Find ending lease liability (in $).',
  ans:64000,
  expl:'Int = 80,000 × 5% = 4,000. Principal = 20,000 − 4,000 = 16,000. End = 80,000 − 16,000 = $64,000.'
}
]);

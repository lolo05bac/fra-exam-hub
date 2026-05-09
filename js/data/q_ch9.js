/* Chapter 9 — Equity */
QBANK.add([
{ id:'ch9-001', chap:'ch9', type:'mcq', diff:'med', src:'mcq-bank',
  stem:'Pfizer issues 100,000 shares of common stock ($0.05 par) for a warehouse and land when the stock price is $22. Which is NOT TRUE?',
  opts:[
    {t:'New assets increase total assets by $2.2 million.'},
    {t:'Retained earnings are unaffected.'},
    {t:'The common stock account increases by $5,000.'},
    {t:'Total shareholders\' equity increases by $2,195,000.', ok:true}
  ],
  expl:'Issue: 100,000 × $22 = $2,200,000. Common stock = 100,000 × $0.05 = $5,000. APIC = 2,200,000 − 5,000 = $2,195,000. SE rises by the FULL $2,200,000 (not $2,195,000).'
},
{ id:'ch9-002', chap:'ch9', type:'mcq', diff:'hard', src:'mcq-bank',
  stem:'Pfizer resells 10,000 shares of treasury stock that were originally repurchased at $25/share. Resale price = $22. Which is true?',
  opts:[
    {t:'Additional paid-in capital decreases by $30,000.', ok:true},
    {t:'The treasury stock account increases by $30,000.'},
    {t:'Additional paid-in capital increases by $30,000.'},
    {t:'The treasury stock account decreases by $30,000.'}
  ],
  expl:'Treasury repurchase cost: 10,000 × $25 = $250,000. Resale: 10,000 × $22 = $220,000. Cash $220,000; Reduce Treasury $250,000; Plug = $30,000 reduction in APIC (or RE if APIC insufficient).'
},
{ id:'ch9-003', chap:'ch9', type:'mcq', diff:'med', src:'mcq-bank',
  stem:'Pfizer declares a 200,000 common stock dividend (par $0.05) when share market value is $20. Which is true?',
  opts:[
    {t:'Common stock account increases by $10,000.', ok:true},
    {t:'APIC decreases by $3.99 million.'},
    {t:'Retained earnings increase by $4 million.'},
    {t:'APIC increases by $4 million.'}
  ],
  expl:'Small stock dividend (typically <20-25%) recorded at FAIR VALUE: Debit RE $4M; Credit Common Stock 200,000×0.05=$10,000 + APIC $3,990,000.'
},
{ id:'ch9-004', chap:'ch9', type:'mcq', diff:'med', src:'mcq-bank',
  stem:'Which is TRUE about stock dividends and splits?',
  opts:[
    {t:'Large stock dividend reduces RE by market value.'},
    {t:'Stock dividends and splits both affect basic EPS by adjusting prior-period denominators.', ok:true},
    {t:'A 3-for-1 split increases shares by 300%.'},
    {t:'Splits have no economic effect at all.'}
  ],
  expl:'Both must be retroactively reflected in EPS denominators (so EPS comparability is preserved). 3-for-1 split = 200% increase (3× the original shares). Large stock dividend records at PAR.'
},
{ id:'ch9-005', chap:'ch9', type:'mcq', diff:'hard', src:'mcq-bank',
  stem:'Which is NOT TRUE in relation to diluted EPS (DEPS)?',
  opts:[
    {t:'Stock options that are in-the-money will always cause DEPS to be less than basic EPS.', ok:true},
    {t:'Convertible bonds, if dilutive, will cause changes in both numerator and denominator.'},
    {t:'Analysts focus on DEPS rather than basic EPS.'},
    {t:'A company\'s only equity contract that can dilute is stock options.'}
  ],
  expl:'(d) is also wrong but the standard "trap answer" tested is (a). In-the-money options use treasury-stock method which CAN be anti-dilutive in some scenarios. The point is: in-the-money options USUALLY (not ALWAYS) reduce EPS.'
},
{ id:'ch9-006', chap:'ch9', type:'mcq', diff:'easy', src:'final-2024',
  stem:'Why might a company repurchase its own shares?',
  opts:[
    {t:'It feels the market undervalues its shares.'},
    {t:'To offset the dilutive effect of employee stock options.'},
    {t:'To increase the number of shares outstanding.'},
    {t:'A and B.', ok:true}
  ],
  expl:'A and B are real reasons. Repurchases REDUCE shares outstanding (the opposite of C).'
},
{ id:'ch9-007', chap:'ch9', type:'mcq', diff:'med', src:'final-2025',
  stem:'A company repurchases shares for $20,600 on Dec 24. Originally issued in 2022 for $16,000 (with $6,600 par). Effect on the 2024 financial statements?',
  opts:[
    {t:'Stockholders\' equity DECREASES $20,600.', ok:true},
    {t:'Net income increases by $9,400.'},
    {t:'Net income decreases by $9,400.'},
    {t:'Stockholders\' equity increases $16,000.'}
  ],
  expl:'Cost-method repurchase debits Treasury Stock $20,600 (contra-equity). SE falls by the cash paid. NO income-statement impact.'
},
{ id:'ch9-008', chap:'ch9', type:'mcq', diff:'med', src:'midterm',
  stem:'Tyson Corp issued 350,000 shares of $1.50 par-value capital stock at incorporation for $6/share. End-of-year: net income $150,000, dividends $50,000. Common Stock account balance:',
  opts:[
    {t:'$625,000.'},
    {t:'$2,200,000.'},
    {t:'$525,000.', ok:true},
    {t:'$1,675,000.'}
  ],
  expl:'Common Stock at par = 350,000 × $1.50 = $525,000. The remainder (350,000 × $4.50 = $1,575,000) is APIC.'
},
{ id:'ch9-009', chap:'ch9', type:'mcq', diff:'med', src:'authored',
  stem:'A 2-for-1 stock split:',
  opts:[
    {t:'Doubles shares outstanding and halves par value per share, with no journal entry of substance.', ok:true},
    {t:'Doubles total equity.'},
    {t:'Halves total equity.'},
    {t:'Reduces retained earnings by the par × original shares.'}
  ],
  expl:'A split is just a redenomination — no money moves; total $ in each equity account stays the same.'
},
{ id:'ch9-010', chap:'ch9', type:'mcq', diff:'med', src:'authored',
  stem:'A small stock dividend (10%, market price $50, par $1) is declared on 100,000 shares. The journal entry:',
  opts:[
    {t:'Debit RE $500,000; Credit Common Stock $10,000; Credit APIC $490,000.', ok:true},
    {t:'Debit RE $10,000; Credit Common Stock $10,000.'},
    {t:'Debit Cash $500,000; Credit RE $500,000.'},
    {t:'Debit RE $1,000,000; Credit Cash $1,000,000.'}
  ],
  expl:'Small stock dividend (typically <20-25%) recorded at FAIR VALUE: 10,000 new shares × $50 = $500K reduction in RE. Common Stock at par; APIC = balance.'
},
{ id:'ch9-011', chap:'ch9', type:'mcq', diff:'med', src:'authored',
  stem:'Which equity account is the RESIDUAL?',
  opts:[
    {t:'Common stock.'},
    {t:'APIC.'},
    {t:'Retained earnings.', ok:true},
    {t:'Treasury stock.'}
  ],
  expl:'RE accumulates net income less dividends and is the "what\'s left over" pool of earned capital.'
},
{ id:'ch9-012', chap:'ch9', type:'mcq', diff:'easy', src:'authored',
  stem:'Treasury stock under the cost method appears on the balance sheet as:',
  opts:[
    {t:'An asset.'},
    {t:'A contra-equity, deducted from total stockholders\' equity.', ok:true},
    {t:'A liability.'},
    {t:'A revenue.'}
  ],
  expl:'Reduces SE.'
},
{ id:'ch9-013', chap:'ch9', type:'numeric', diff:'med', src:'final-2024', dp:0,
  stem:'Watch Station: Issued 600,000 shares of $1 par for $8,000,000. End of year: paid $300,000 dividends. Net income $1,750,000. Beginning RE $0. Outstanding at year-end 300,000. Find ending RE (in $).',
  ans:1450000,
  expl:'RE = Beg + NI − Div = 0 + 1,750,000 − 300,000 = $1,450,000. (Buy-back doesn\'t hit RE under cost method.)'
},
{ id:'ch9-014', chap:'ch9', type:'numeric', diff:'med', src:'final-2025', dp:0,
  stem:'Eagle Crest: Common stock $12,000 → $16,000; APIC ↑ $3,700; RE $70,000 → $91,000; NI $38,000. Find dividends paid during the year (in $).',
  ans:17000,
  expl:'ΔRE = NI − Div ⇒ 21,000 = 38,000 − Div ⇒ Div = $17,000.'
},
{ id:'ch9-015', chap:'ch9', type:'numeric', diff:'med', src:'final-2025', dp:0,
  stem:'Artemis: Total shares issued 10,500,000 ($1 par). APIC $27,300,000. Outstanding 9,900,000. Repurchase price $12 per share. Find net contributed capital (in $).',
  ans:30600000,
  expl:'CS = 10,500,000 × $1 = 10,500,000. APIC = 27,300,000. Treasury = 600,000 × $12 = 7,200,000. Net = 10.5 + 27.3 − 7.2 = $30.6M.'
},
{ id:'ch9-016', chap:'ch9', type:'numeric', diff:'med', src:'authored', dp:0,
  stem:'A company has 200,000 shares issued of $1 par; 30,000 shares in treasury. NI $400,000; weighted-avg outstanding shares = 175,000. Compute basic EPS.',
  ans:2.29, dp:2,
  expl:'EPS = NI / weighted-average shares OUTSTANDING = 400,000 / 175,000 = $2.286 ≈ $2.29.'
},
{ id:'ch9-017', chap:'ch9', type:'numeric', diff:'med', src:'authored', dp:0,
  stem:'A company declared a $50,000 cash dividend on Dec 1, payable Jan 15. On Dec 31 (year-end), what is shown on the balance sheet?',
  ans:50000,
  expl:'On declaration: Debit RE $50,000; Credit Dividends Payable (current liability) $50,000. So at year-end, Dividends Payable = $50,000 (and RE is reduced).'
},
{ id:'ch9-018', chap:'ch9', type:'numeric', diff:'hard', src:'authored', dp:0,
  stem:'A company\'s SE on Dec 31: Common Stock $50,000 ($1 par); APIC $200,000; Retained Earnings $300,000; Treasury Stock $40,000. Total SE (in $)?',
  ans:510000,
  expl:'Total SE = 50 + 200 + 300 − 40 = $510,000. Treasury reduces equity.'
},
{ id:'ch9-019', chap:'ch9', type:'mcq', diff:'med', src:'authored',
  stem:'A cash dividend declared and paid in the same year:',
  opts:[
    {t:'Reduces both Cash and Retained Earnings.', ok:true},
    {t:'Reduces Cash and increases RE.'},
    {t:'Has no effect on Total SE.'},
    {t:'Increases Common Stock.'}
  ],
  expl:'Net effect: Asset (Cash) ↓ and Equity (RE) ↓. Total SE falls by the cash paid.'
},
{ id:'ch9-020', chap:'ch9', type:'mcq', diff:'med', src:'authored',
  stem:'Authorised, issued, and outstanding shares: 1,000,000 / 600,000 / 550,000. The number of TREASURY shares is:',
  opts:[
    {t:'400,000.'},
    {t:'50,000.', ok:true},
    {t:'1,000,000.'},
    {t:'600,000.'}
  ],
  expl:'Treasury = Issued − Outstanding = 600,000 − 550,000 = 50,000.'
},
{ id:'ch9-021', chap:'ch9', type:'mcq', diff:'med', src:'authored',
  stem:'On the date of declaration of a cash dividend:',
  opts:[
    {t:'Cash decreases.'},
    {t:'A liability is recognised and RE is debited.', ok:true},
    {t:'No journal entry.'},
    {t:'Common Stock decreases.'}
  ],
  expl:'Declaration creates Dividends Payable. Cash actually moves only on the payment date.'
},
{ id:'ch9-022', chap:'ch9', type:'numeric', diff:'med', src:'authored', dp:0,
  stem:'A company issued 50,000 shares of $0.10 par for $25 each. Compute APIC at issuance (in $).',
  ans:1245000,
  expl:'APIC = (Issue price − Par) × shares = (25 − 0.10) × 50,000 = $1,245,000.'
},
{ id:'ch9-023', chap:'ch9', type:'mcq', diff:'med', src:'authored',
  stem:'Preference (preferred) shares typically:',
  opts:[
    {t:'Have voting rights but no dividend priority.'},
    {t:'Have dividend priority but limited or no voting rights.', ok:true},
    {t:'Convert automatically to common stock after 5 years.'},
    {t:'Are classified as liabilities always.'}
  ],
  expl:'Preferred = priority on dividends and on liquidation, usually no vote. Classification (liability vs. equity) depends on terms (mandatorily redeemable = liability under IFRS).'
},
{ id:'ch9-024', chap:'ch9', type:'mcq', diff:'med', src:'authored',
  stem:'A small stock dividend reduces:',
  opts:[
    {t:'Total SE.'},
    {t:'Retained earnings only (with offsetting increases in Common Stock + APIC).', ok:true},
    {t:'Cash.'},
    {t:'Total liabilities.'}
  ],
  expl:'Stock dividends are equity-account-only — no cash, no SE total change.'
},
{ id:'ch9-025', chap:'ch9', type:'mcq', diff:'hard', src:'authored',
  stem:'Comprehensive Income includes:',
  opts:[
    {t:'Net income only.'},
    {t:'Net income + Other Comprehensive Income (e.g., FVOCI gains, foreign translation).', ok:true},
    {t:'Cash dividends only.'},
    {t:'NI − dividends.'}
  ],
  expl:'CI = NI + OCI. OCI captures items bypassing the income statement (FVOCI, FX translation, certain pension remeasurements).'
},
{ id:'ch9-026', chap:'ch9', type:'numeric', diff:'med', src:'authored', dp:0,
  stem:'A company\'s opening RE = $250,000. NI = $90,000. Cash dividends = $20,000. 10% small stock dividend at $40 market value affecting 100,000 shares (par $1). Find ending RE (in $).',
  ans:-80000,
  expl:'Wrong direction... Stock-div effect: 100,000 × 10% × $40 = $400,000 reduction in RE. End RE = 250,000 + 90,000 − 20,000 − 400,000 = −$80,000. (Negative = accumulated deficit.) Check: stock dividend uses fair value for SMALL dividends.',
  pitfall:'Small stock dividends use FAIR value; LARGE stock dividends (≥20-25%) use PAR value.'
},
{ id:'ch9-027', chap:'ch9', type:'mcq', diff:'hard', src:'authored',
  stem:'A 100% stock dividend is economically equivalent to:',
  opts:[
    {t:'A 1-for-1 stock split.'},
    {t:'A 2-for-1 stock split (in terms of share count effect).', ok:true},
    {t:'A cash dividend.'},
    {t:'A reverse split.'}
  ],
  expl:'A 100% stock dividend doubles outstanding shares — same as a 2-for-1 split. Accounting differs (large stock div records at par, split has no entry).'
},
{ id:'ch9-028', chap:'ch9', type:'mcq', diff:'med', src:'authored',
  stem:'A repurchase of treasury stock at a price ABOVE the original issue price:',
  opts:[
    {t:'Creates a gain.'},
    {t:'Has no income-statement impact.', ok:true},
    {t:'Creates a loss in the income statement.'},
    {t:'Increases EPS by reducing shares only.'}
  ],
  expl:'Buy-backs are equity transactions — no I/S effect, regardless of price relative to issue price. (EPS does rise mechanically.)'
},
{ id:'ch9-029', chap:'ch9', type:'mcq', diff:'easy', src:'authored',
  stem:'On the cash flow statement, the cash paid to repurchase treasury stock appears in:',
  opts:[
    {t:'CFI.'},
    {t:'CFO.'},
    {t:'CFF.', ok:true},
    {t:'Either CFO or CFF — entity choice.'}
  ],
  expl:'Transactions with owners are FINANCING.'
},
{ id:'ch9-030', chap:'ch9', type:'long', diff:'hard', src:'authored',
  stem:'A company with 1,000,000 shares of $1 par stock issued at $5 each. It then declares: (a) a $0.50 cash dividend, (b) a 5% small stock dividend (market $20), and (c) a 3-for-1 stock split — in that order. Walk through each, stating journal entries.',
  expl:'<strong>(a) Cash dividend $500,000:</strong> Debit RE 500,000; Credit Dividends Payable 500,000 → Debit Dividends Payable 500,000; Credit Cash 500,000.<br><br><strong>(b) 5% stock dividend on 1,000,000 shares = 50,000 new shares × $20 fair value = $1,000,000:</strong> Debit RE 1,000,000; Credit Common Stock 50,000; Credit APIC 950,000.<br><br><strong>(c) 3-for-1 stock split:</strong> No journal entry of substance. Outstanding shares now 1,050,000 × 3 = 3,150,000 shares. Par drops from $1 to $0.333. Common Stock total $1,050,000 unchanged.',
  mark:[
    'Cash dividend recognises payable + reduces cash on payment (1)',
    'Stock dividend at fair value (small) (1)',
    'Stock dividend reduces RE, increases CS + APIC (1)',
    'Stock split has no journal entry, just par redenomination (1)',
    'Total share count after all events = 3,150,000 (1)'
  ]
}
]);

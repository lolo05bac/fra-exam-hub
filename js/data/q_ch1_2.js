/* Chapter 1 & 2 — Foundations & Constructing Financial Statements
   Sourced from: MCQ Bank C2, Final Exam 2024 V1, Final Exam 2025 V1, Practice Quiz, Midterm */
QBANK.add([
{ id:'ch1_2-001', chap:'ch1_2', type:'mcq', diff:'easy', src:'mcq-bank',
  stem:'Which of the following conditions must exist for an item to be recorded as an asset?',
  opts:[
    {t:'Item is not owned or controlled by the company.'},
    {t:'Future benefits from the item cannot be reliably measured.'},
    {t:'Item must be a tangible asset.'},
    {t:'Item must be expected to yield future benefits.', ok:true}
  ],
  expl:'An asset is a resource controlled by the entity from past events <em>from which future economic benefits are expected to flow</em>. Assets need not be tangible (intangibles count) and tangibility is not the test.',
  pitfall:'Many distractors hinge on remembering "controlled" + "past event" + "future benefit". All three.'
},
{ id:'ch1_2-002', chap:'ch1_2', type:'mcq', diff:'med', src:'mcq-bank',
  stem:'Company assets that are excluded from the company financial statements:',
  opts:[
    {t:'are presumably reflected in the company\'s share price.', ok:true},
    {t:'include all of the company\'s intangible assets.'},
    {t:'are known as intangible assets.'},
    {t:'include investments in other companies.'}
  ],
  expl:'Things like internally generated brand value or human capital are not capitalised, but rational markets price them in via the share price.'
},
{ id:'ch1_2-003', chap:'ch1_2', type:'mcq', diff:'med', src:'mcq-bank',
  stem:'If an asset declines in value, which of the following must be true?',
  opts:[
    {t:'A liability also declines.'},
    {t:'Equity also declines.'},
    {t:'Either a liability or equity also declines OR another asset increases.', ok:true},
    {t:'Neither a nor b can occur.'}
  ],
  expl:'A = L + E, so any change in A must be balanced by a change on the other side OR an offsetting change in another A.'
},
{ id:'ch1_2-004', chap:'ch1_2', type:'mcq', diff:'easy', src:'mcq-bank',
  stem:'Which of the following is true about accrual accounting?',
  opts:[
    {t:'Accrual accounting does not require matching.'},
    {t:'Accrual accounting is required under IFRS.', ok:true},
    {t:'Accrual accounting recognises revenue only when cash is received.'},
    {t:'Recognition of a prepaid asset is not an example of accrual accounting.'}
  ],
  expl:'IFRS requires accrual basis. Cash-basis recognition is the opposite of accrual.'
},
{ id:'ch1_2-005', chap:'ch1_2', type:'mcq', diff:'med', src:'mcq-bank',
  stem:'For a cash sale of a book at a bookstore, which combination of effects is correct?',
  opts:[
    {t:'AR↑, sales rev↑, COGS↑, inventory↓.'},
    {t:'Cash↑, sales rev↑, COGS↓, inventory↓.'},
    {t:'AR↑, sales rev↑, COGS↓, inventory↓.'},
    {t:'Cash↑, sales rev↑, COGS↑, inventory↓.', ok:true}
  ],
  expl:'Two simultaneous entries on a cash sale: (1) record the sale: cash ↑ + revenue ↑; (2) record the cost: COGS ↑ + inventory ↓.'
},
{ id:'ch1_2-006', chap:'ch1_2', type:'mcq', diff:'easy', src:'final-2024',
  stem:'A dividend is:',
  opts:[
    {t:'a distribution of the company\'s earnings to its shareholders.', ok:true},
    {t:'equal to liabilities minus equity.'},
    {t:'equal to assets minus equity.'},
    {t:'equal to revenues less expenses.'}
  ],
  expl:'Dividends distribute earned profit to shareholders; they reduce Retained Earnings.'
},
{ id:'ch1_2-007', chap:'ch1_2', type:'mcq', diff:'easy', src:'final-2024',
  stem:'Equity is best depicted by:',
  opts:[
    {t:'Assets = Liabilities.'},
    {t:'Liabilities + Assets.'},
    {t:'Residual equity + Assets.'},
    {t:'Assets − Liabilities.', ok:true}
  ],
  expl:'Equity is the residual interest: A − L = E.'
},
{ id:'ch1_2-008', chap:'ch1_2', type:'mcq', diff:'med', src:'final-2024',
  stem:'Goodwill can be recorded as an asset when:',
  opts:[
    {t:'An offer is received to purchase the business above asset value.'},
    {t:'A business has above-normal profitability vs. its industry.'},
    {t:'A business is purchased and payment is made in excess of fair value of net assets.', ok:true},
    {t:'A business can show that it has built customer goodwill.'}
  ],
  expl:'Goodwill is recognised only when one entity acquires another and pays more than the fair value of identifiable net assets. Internally generated goodwill is never recorded.'
},
{ id:'ch1_2-009', chap:'ch1_2', type:'mcq', diff:'easy', src:'final-2025',
  stem:'Which of the following describes the primary objective of the balance sheet?',
  opts:[
    {t:'To measure the net income of a business up to a particular point in time.'},
    {t:'To report the difference between cash inflows and outflows for the period.'},
    {t:'To report the financial position of the reporting entity at a particular point in time.', ok:true},
    {t:'To report changes in common stock and retained earnings for the period.'}
  ],
  expl:'The balance sheet is a snapshot of A, L, E at a point in time.'
},
{ id:'ch1_2-010', chap:'ch1_2', type:'mcq', diff:'easy', src:'final-2025',
  stem:'A corporation purchased factory equipment using cash. Which statement is correct?',
  opts:[
    {t:'The cost of the equipment is an expense at the time of purchase.'},
    {t:'Total assets will not change.', ok:true},
    {t:'Total liabilities will increase.'},
    {t:'Current stockholders\' equity will decrease.'}
  ],
  expl:'Cash (asset) ↓ and Equipment (asset) ↑ by the same amount. Total assets unchanged. The cost is capitalised and depreciated, not expensed at purchase.',
  pitfall:'A classic distractor is to call the purchase an "expense" — capitalisation comes first, then depreciation.'
},
{ id:'ch1_2-011', chap:'ch1_2', type:'mcq', diff:'med', src:'final-2025',
  stem:'Which correctly describes the effects of initially recording deferred/unearned revenue when cash is received from a customer?',
  opts:[
    {t:'Revenue is increased.'},
    {t:'Liabilities are not affected.'},
    {t:'Retained earnings increase.'},
    {t:'Net income is not affected.', ok:true}
  ],
  expl:'Cash↑ + Unearned Revenue (liability)↑. No income statement impact until the obligation is satisfied.'
},
{ id:'ch1_2-012', chap:'ch1_2', type:'mcq', diff:'med', src:'final-2025',
  stem:'Under IFRS, which one of the following would NOT be recorded as an intangible asset?',
  opts:[
    {t:'Internally generated goodwill', ok:true},
    {t:'Franchise rights'},
    {t:'Purchased Patents'},
    {t:'Purchased Copyrights'}
  ],
  expl:'IFRS prohibits capitalising internally generated goodwill. Acquired/purchased intangibles can be recognised.'
},
{ id:'ch1_2-013', chap:'ch1_2', type:'mcq', diff:'easy', src:'practice',
  stem:'A basic assumption that requires activities of an entity to be kept separate from its owner is the:',
  opts:[
    {t:'stand-alone concept.'},
    {t:'monetary unit assumption.'},
    {t:'corporate form of ownership.'},
    {t:'economic entity assumption.', ok:true}
  ],
  expl:'The economic entity assumption separates owner activities from the entity\'s activities.'
},
{ id:'ch1_2-014', chap:'ch1_2', type:'mcq', diff:'easy', src:'practice',
  stem:'The common characteristic possessed by all assets is:',
  opts:[
    {t:'long life.'},
    {t:'great monetary value.'},
    {t:'tangible nature.'},
    {t:'future economic benefit.', ok:true}
  ],
  expl:'Assets always entail expected future economic benefits — that is the unifying feature.'
},
{ id:'ch1_2-015', chap:'ch1_2', type:'mcq', diff:'med', src:'practice',
  stem:'Which would NOT be an external user of accounting data for a company?',
  opts:[
    {t:'Taxing authority representative.'},
    {t:'Management.', ok:true},
    {t:'Creditors.'},
    {t:'Customers.'}
  ],
  expl:'Management is internal; the others are external users.'
},
{ id:'ch1_2-016', chap:'ch1_2', type:'mcq', diff:'med', src:'midterm',
  stem:'Which of the following financial statements reports the financial condition of a company at a point in time?',
  opts:[
    {t:'The balance sheet', ok:true},
    {t:'The income statement'},
    {t:'The statement of cash flows'},
    {t:'The statement of changes in equity'}
  ],
  expl:'The balance sheet is a point-in-time snapshot. The other three cover a period.'
},
{ id:'ch1_2-017', chap:'ch1_2', type:'mcq', diff:'med', src:'midterm',
  stem:'Which properly describes the accounting for goodwill?',
  opts:[
    {t:'Goodwill is recorded when it is internally generated.'},
    {t:'Goodwill is amortised over its useful life.'},
    {t:'Goodwill is the difference between the amount paid for a company and the book value of acquired net assets.'},
    {t:'Goodwill is the difference between the amount paid for a company and the fair value of its net assets.', ok:true}
  ],
  expl:'Goodwill = Purchase Price − Fair Value of identifiable net assets acquired. It is tested for impairment, not amortised, and never internally generated.'
},
{ id:'ch1_2-018', chap:'ch1_2', type:'mcq', diff:'med', src:'midterm',
  stem:'Which accounts would be reported as ASSETS on the balance sheet?',
  opts:[
    {t:'Cash, retained earnings, and accounts receivable.'},
    {t:'Cash, accounts receivable, and inventories.', ok:true},
    {t:'Cash, accounts payable, and notes payable.'},
    {t:'Cash, prepaid expenses, and unearned revenue.'}
  ],
  expl:'Retained earnings is equity; accounts payable, notes payable and unearned revenue are liabilities. Cash, AR, inventory and prepaids are assets.'
},
{ id:'ch1_2-019', chap:'ch1_2', type:'mcq', diff:'easy', src:'authored',
  stem:'Issuance of ordinary shares for cash:',
  opts:[
    {t:'Increases revenue.'},
    {t:'Increases retained earnings.'},
    {t:'Increases contributed capital, with no income-statement impact.', ok:true},
    {t:'Decreases retained earnings.'}
  ],
  expl:'Capital contributions are not revenue. They credit Common Stock + APIC.'
},
{ id:'ch1_2-020', chap:'ch1_2', type:'mcq', diff:'med', src:'final-2024',
  stem:'Which of the following transactions increases revenue?',
  opts:[
    {t:'Issuance of ordinary shares by British Airways.'},
    {t:'Sale of clothing by French Connection.', ok:true},
    {t:'Receipt of bank loan proceeds.'},
    {t:'Collection of an account receivable.'}
  ],
  expl:'Only the sale of goods generates revenue. Share issuance is financing; loan proceeds are financing; AR collection just swaps assets.'
},
{ id:'ch1_2-021', chap:'ch1_2', type:'numeric', diff:'med', src:'midterm', dp:0,
  stem:'A January 1 balance sheet shows total assets $120,000 and total liabilities $40,000. During January: (A) issued stock for $30,000 cash; (B) paid $6,000 to a supplier; (C) bought supplies for $1,000 cash; (D) bought land for $60,000 ($10,000 cash + $50,000 note). What is total stockholders\' equity at end of January (in $)?',
  ans:110000,
  expl:'Beginning equity = 120,000 − 40,000 = $80,000. Only transaction (A) — stock issuance — moves equity. So ending equity = 80,000 + 30,000 = $110,000. (B), (C), (D) are asset/liability swaps.',
  pitfall:'Don\'t deduct the $6,000 AP payment from equity — paying creditors doesn\'t touch equity.'
},
{ id:'ch1_2-022', chap:'ch1_2', type:'numeric', diff:'med', src:'midterm', dp:0,
  stem:'Atlantic Corporation reported: Total assets $600,000; Total liabilities $320,000; Common stock $200,000; Dividends declared $40,000; Sales revenue $800,000. What is net income (in $)?',
  ans:120000,
  expl:'Equity = 600 − 320 = $280K. RE = Equity − Common Stock = 280 − 200 = $80K. RE = NI − Div ⇒ 80 = NI − 40 ⇒ NI = $120,000.'
},
{ id:'ch1_2-023', chap:'ch1_2', type:'numeric', diff:'med', src:'midterm', dp:0,
  stem:'Same Atlantic data. What were total expenses for the year (in $)?',
  ans:680000,
  expl:'NI = Sales − Expenses ⇒ 120,000 = 800,000 − Expenses ⇒ Expenses = $680,000.'
},
{ id:'ch1_2-024', chap:'ch1_2', type:'numeric', diff:'med', src:'midterm', dp:0,
  stem:'Lena Co. 2016: revenues $99,000; expenses $47,800; dividends $9,500; total assets at 12/31 $177,000; total liabilities $89,000; common stock $28,000. What is the year-end Retained Earnings balance (in $)?',
  ans:60000,
  expl:'Equity = 177 − 89 = $88K. RE = Equity − Common Stock = 88 − 28 = $60K.'
},
{ id:'ch1_2-025', chap:'ch1_2', type:'numeric', diff:'med', src:'midterm', dp:0,
  stem:'Canton Co. assets ↑ $95,500 and liabilities ↓ $17,300 during 2016. Equity at 12/31/2016 was $211,500. What was equity at 1/1/2016 (in $)?',
  ans:98700,
  expl:'Δ Equity = ΔA − ΔL = 95,500 − (−17,300) = +112,800. Beginning Equity = 211,500 − 112,800 = $98,700.',
  pitfall:'Decrease in liabilities increases equity for a given asset change.'
},
{ id:'ch1_2-026', chap:'ch1_2', type:'numeric', diff:'med', src:'midterm', dp:0,
  stem:'Superior Co.: Common stock $20,000 → $25,000; APIC ↑ $2,500 during the year. How much did Superior sell its stock for during the year (in $)?',
  ans:7500,
  expl:'Cash from stock issuance = ΔCommon Stock + ΔAPIC = 5,000 + 2,500 = $7,500.'
},
{ id:'ch1_2-027', chap:'ch1_2', type:'numeric', diff:'med', src:'midterm', dp:0,
  stem:'Pioneer Co.: Cash $38,000; Long-term notes receivable $2,000; Equipment $96,000; Short-term investments $4,000; Factory Building $180,000; Intangibles $6,000; AP $30,000; AR $48,000; Accrued liabilities $4,000; Supplies $6,000; Short-term notes payable $14,000; Long-term notes payable $92,000. What is the current ratio?',
  ans:2.00, dp:2,
  expl:'Current assets = 38,000 (cash) + 4,000 (ST inv) + 48,000 (AR) + 6,000 (supplies) = $96,000. Current liabilities = 30,000 (AP) + 4,000 (accrued) + 14,000 (ST notes) = $48,000. Current ratio = 96/48 = 2.00.',
  pitfall:'Long-term notes receivable and intangibles are NOT current assets.'
},
{ id:'ch1_2-028', chap:'ch1_2', type:'numeric', diff:'med', src:'midterm', dp:0,
  stem:'Warren Corp at start of April: assets $240,000; liabilities $60,000. April: (a) issued additional stock for $20,000 cash; (b) bought a building costing $95,000 with $10,000 cash + $85,000 long-term note; (c) bought $9,000 short-term investments with cash; (d) lent an employee $10,000 (received a 6-month note). Total assets at end of April (in $)?',
  ans:345000,
  expl:'Δ assets: +20,000 (cash from issuance) +95,000 (building) −10,000 (cash for building) +9,000 inv −9,000 cash +10,000 receivable −10,000 cash = +105,000. New total = 240,000 + 105,000 = $345,000.',
  alt:'Or compute: only the issuance (+20,000 cash) and the building purchase (net +85,000 of asset acquired beyond cash paid) increase assets. 240,000 + 20,000 + 85,000 = 345,000.'
},
{ id:'ch1_2-029', chap:'ch1_2', type:'mcq', diff:'med', src:'practice',
  stem:'Stahl Consulting started the year with assets €200,000 and liabilities €50,000. During the year, revenue €160,000, expenses €80,000. Issued shares €30,000 and paid dividends €50,000. Equity at year end?',
  opts:[
    {t:'€210,000.', ok:true},
    {t:'€180,000.'},
    {t:'€80,000.'},
    {t:'€150,000.'}
  ],
  expl:'Beg equity = 200 − 50 = €150K. NI = 160 − 80 = €80K. End equity = 150 + 30 (issue) + 80 (NI) − 50 (div) = €210K.'
},
{ id:'ch1_2-030', chap:'ch1_2', type:'long', diff:'hard', src:'authored',
  stem:'Explain why the receipt of $5,000 cash from a customer for services to be performed next month is recorded as a liability rather than revenue. Walk through the journal entry and the conceptual reasoning.',
  expl:'<strong>Journal entry on receipt:</strong> Debit Cash $5,000; Credit Unearned (Deferred) Revenue $5,000.<br><br><strong>Why a liability:</strong> Until services are performed, the company has a present obligation to either deliver the service or refund the cash. That obligation meets the definition of a liability (present obligation, past event, expected outflow). Recognising revenue at receipt would violate the IFRS 15 control-transfer principle — control has not yet passed to the customer because the service hasn\'t been rendered.<br><br><strong>When earned:</strong> as the service is performed, debit Unearned Revenue and credit Service Revenue. Only at that point does NI rise.',
  mark:[
    'Stated journal entry: Debit Cash, Credit Unearned Revenue (1 mark)',
    'Identified Unearned Revenue as a liability (1 mark)',
    'Linked to the IFRS 15 idea that revenue is recognised when control transfers (1 mark)',
    'Described the subsequent entry to recognise revenue as the obligation is satisfied (1 mark)'
  ],
  pitfall:'Don\'t describe this as "deferred revenue is an asset" — it is a liability.'
}
]);

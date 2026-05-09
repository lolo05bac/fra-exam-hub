/* Chapter 3 — Income Statement & Adjusting Entries */
QBANK.add([
{ id:'ch3-001', chap:'ch3', type:'mcq', diff:'easy', src:'mcq-bank',
  stem:'A journal entry that contains more than two accounts is called:',
  opts:[{t:'a posted journal entry.'},{t:'an adjusting journal entry.'},{t:'an erroneous journal entry.'},{t:'a compound journal entry.', ok:true}],
  expl:'A compound entry has more than one debit and/or more than one credit.'
},
{ id:'ch3-002', chap:'ch3', type:'mcq', diff:'easy', src:'mcq-bank',
  stem:'Posting refers to the process whereby journal entry information is transferred from:',
  opts:[{t:'journal to general ledger accounts.', ok:true},{t:'general ledger accounts to a journal.'},{t:'source documents to a journal.'},{t:'a journal to source documents.'}],
  expl:'Posting moves entries from the chronological journal into the categorised general ledger.'
},
{ id:'ch3-003', chap:'ch3', type:'mcq', diff:'med', src:'mcq-bank',
  stem:'Which is an example of an adjusting entry?',
  opts:[{t:'Recording the purchase of supplies on account.'},{t:'Recording depreciation expense on a truck.', ok:true},{t:'Recording cash received from customers for services rendered.'},{t:'Recording the cash payment of wages to employees.'}],
  expl:'Depreciation is the classic period-end adjustment for systematic cost allocation. The others are routine transactions.'
},
{ id:'ch3-004', chap:'ch3', type:'mcq', diff:'med', src:'mcq-bank',
  stem:'Equipment placed in service 1/1/2013 cost $20,000 with no salvage and 8-year life. Using straight-line, what are depreciation expense and accumulated depreciation for fiscal 2015?',
  opts:[
    {t:'Dep. exp $2,500; Acc. dep. $7,500.', ok:true},
    {t:'Dep. exp $0; Acc. dep. $20,000.'},
    {t:'Dep. exp $7,500; Acc. dep. $7,500.'},
    {t:'Dep. exp $2,500; Acc. dep. $2,500.'}
  ],
  expl:'Annual = 20,000/8 = 2,500. By end of 2015 (3rd year), Acc. dep. = 3 × 2,500 = $7,500.'
},
{ id:'ch3-005', chap:'ch3', type:'numeric', diff:'med', src:'mcq-bank', dp:0,
  stem:'Custom Cakes received $24,000 in customer deposits during November. Unearned revenue beginning balance was $4,000 and ending balance was $6,000. Recognised cake revenue is delivered. How much revenue did Custom Cakes recognise during November (in $)?',
  ans:22000,
  expl:'Unearned roll-forward: Beg + Deposits − Revenue earned = End ⇒ 4,000 + 24,000 − Rev = 6,000 ⇒ Rev = $22,000.'
},
{ id:'ch3-006', chap:'ch3', type:'mcq', diff:'med', src:'final-2024',
  stem:'A law firm received $2,000 cash for services to be provided in the future, credited to Unearned Service Revenue. By year-end services have been rendered but no adjusting entry was made. This causes:',
  opts:[
    {t:'expenses to be overstated.'},
    {t:'net income to be overstated.'},
    {t:'liabilities to be understated.'},
    {t:'revenues to be understated.', ok:true}
  ],
  expl:'Without the adjustment, Unearned Revenue (liability) is overstated and Service Revenue is understated, so NI is understated.'
},
{ id:'ch3-007', chap:'ch3', type:'numeric', diff:'med', src:'final-2024', dp:0,
  stem:'Willie Co.\'s retained earnings rose by $15,000. Dividends declared were $28,000. Find net income (in $).',
  ans:43000,
  expl:'Δ RE = NI − Div ⇒ 15,000 = NI − 28,000 ⇒ NI = $43,000.'
},
{ id:'ch3-008', chap:'ch3', type:'numeric', diff:'med', src:'final-2025', dp:0,
  stem:'On Dec 31, Vivid Corp prepares adjustments: Depreciation $45,000; AR accrued (revenue earned) $29,000; Accrued expenses $14,000; Used insurance $5,000 (originally prepaid); Rent revenue earned $3,000 (originally unearned). Total assets BEFORE adjustments = $430,000. Total assets AFTER (in $)?',
  ans:409000,
  expl:'Δ assets = −45,000 (dep) + 29,000 (AR) + 0 (accrued exp = liability) − 5,000 (prepaid) + 0 (unearned = liability) = −21,000. New total = 430,000 − 21,000 = $409,000.',
  pitfall:'Accrued expenses and earned-portion of unearned revenue do NOT touch assets — they\'re on the L/E side.'
},
{ id:'ch3-009', chap:'ch3', type:'mcq', diff:'easy', src:'authored',
  stem:'A company pays $12,000 cash for one year of insurance on April 1. By December 31, what adjusting entry is required?',
  opts:[
    {t:'Debit Insurance Expense $9,000; Credit Prepaid Insurance $9,000.', ok:true},
    {t:'Debit Insurance Expense $12,000; Credit Cash $12,000.'},
    {t:'Debit Prepaid Insurance $3,000; Credit Insurance Expense $3,000.'},
    {t:'Debit Cash $9,000; Credit Insurance Expense $9,000.'}
  ],
  expl:'9 of 12 months consumed (Apr–Dec). 12,000 × 9/12 = $9,000 expense.'
},
{ id:'ch3-010', chap:'ch3', type:'mcq', diff:'easy', src:'authored',
  stem:'Which entry illustrates accrued revenue?',
  opts:[
    {t:'Debit Cash, Credit Service Revenue.'},
    {t:'Debit Accounts Receivable, Credit Service Revenue.', ok:true},
    {t:'Debit Cash, Credit Unearned Revenue.'},
    {t:'Debit Unearned Revenue, Credit Service Revenue.'}
  ],
  expl:'Accrued revenue: services performed but not yet billed/collected. AR↑, Revenue↑.'
},
{ id:'ch3-011', chap:'ch3', type:'numeric', diff:'med', src:'authored', dp:0,
  stem:'On Dec 31, the Wages Payable account shows $0 but employees have earned $7,200 since the last pay date. What is the effect on net income of failing to record this adjustment (NI is over/understated by how much, in $)?',
  ans:7200,
  expl:'Wage expense should be debited $7,200; without it, expenses are understated and NI is overstated by $7,200.',
  alt:'Treating accrued expenses correctly: Debit Wage Expense $7,200; Credit Wages Payable $7,200.'
},
{ id:'ch3-012', chap:'ch3', type:'mcq', diff:'med', src:'authored',
  stem:'A decrease in accrued wages liability:',
  opts:[
    {t:'decreases cash flow from operations.', ok:true},
    {t:'decreases working capital.'},
    {t:'increases net income.'},
    {t:'increases net non-operating financial assets.'}
  ],
  expl:'A drop in Wages Payable means we paid more cash than we expensed, so CFO is reduced under the indirect method.'
},
{ id:'ch3-013', chap:'ch3', type:'mcq', diff:'med', src:'authored',
  stem:'Which of the following is NOT a temporary account?',
  opts:[
    {t:'Service Revenue'},
    {t:'Wages Expense'},
    {t:'Dividends Declared'},
    {t:'Accumulated Depreciation', ok:true}
  ],
  expl:'Acc. Dep. is permanent (it\'s a contra-asset on the balance sheet). The others are closed to RE at year-end.'
},
{ id:'ch3-014', chap:'ch3', type:'numeric', diff:'med', src:'authored', dp:0,
  stem:'Beginning RE = $50,000. Net income = $35,000. Dividends declared = $12,000. Compute ending RE (in $).',
  ans:73000,
  expl:'Ending RE = 50,000 + 35,000 − 12,000 = $73,000.'
},
{ id:'ch3-015', chap:'ch3', type:'numeric', diff:'med', src:'authored', dp:0,
  stem:'Office supplies on hand were $1,400 at year-start. During the year, $5,200 of supplies were purchased. A physical count at year-end shows $1,800 of supplies remaining. What is supplies expense for the year (in $)?',
  ans:4800,
  expl:'Supplies used = Beg + Purch − End = 1,400 + 5,200 − 1,800 = $4,800.'
},
{ id:'ch3-016', chap:'ch3', type:'mcq', diff:'med', src:'authored',
  stem:'Which adjusting entry would be made for accrued interest on a note payable?',
  opts:[
    {t:'Debit Interest Expense, Credit Cash.'},
    {t:'Debit Interest Expense, Credit Interest Payable.', ok:true},
    {t:'Debit Interest Receivable, Credit Interest Revenue.'},
    {t:'Debit Interest Payable, Credit Interest Expense.'}
  ],
  expl:'Accrued interest on debt owed → expense up, payable up.'
},
{ id:'ch3-017', chap:'ch3', type:'mcq', diff:'easy', src:'authored',
  stem:'The closing entries are made at:',
  opts:[
    {t:'the start of the next period.'},
    {t:'each month-end.'},
    {t:'the end of the accounting period, after adjusting entries.', ok:true},
    {t:'whenever the company chooses.'}
  ],
  expl:'Closing entries follow adjusting entries at year-end. They zero out temporary accounts.'
},
{ id:'ch3-018', chap:'ch3', type:'mcq', diff:'med', src:'authored',
  stem:'Cash basis accounting differs from accrual basis in that:',
  opts:[
    {t:'cash basis recognises revenue when earned.'},
    {t:'accrual basis recognises expenses when paid.'},
    {t:'cash basis recognises revenue when cash is received and expenses when cash is paid.', ok:true},
    {t:'cash basis is required under IFRS.'}
  ],
  expl:'Cash basis follows the cash; accrual follows economic events.'
},
{ id:'ch3-019', chap:'ch3', type:'numeric', diff:'med', src:'authored', dp:0,
  stem:'A note receivable of $24,000 at 5% interest was issued on October 1. On December 31, what is the adjusting entry amount for accrued interest revenue (in $)?',
  ans:300,
  expl:'Interest = 24,000 × 5% × 3/12 = $300.'
},
{ id:'ch3-020', chap:'ch3', type:'mcq', diff:'med', src:'authored',
  stem:'A company forgot to record a $1,000 prepaid rent that had been used (consumed) during the period. The effect on the financial statements is:',
  opts:[
    {t:'Assets overstated, expenses understated, NI overstated.', ok:true},
    {t:'Assets understated, expenses overstated, NI understated.'},
    {t:'Liabilities overstated, equity understated.'},
    {t:'No effect.'}
  ],
  expl:'Skipping the entry leaves Prepaid Rent on the books too high (asset overstated) and Rent Expense too low (NI overstated).'
},
{ id:'ch3-021', chap:'ch3', type:'numeric', diff:'med', src:'final-2025', dp:0,
  stem:'A company\'s adjustments include: depreciation $40,000 and used insurance $4,000 (originally prepaid). What is the combined reduction in total assets from these two entries (in $)?',
  ans:44000,
  expl:'Depreciation reduces net PP&E by $40K via Acc. Dep. Used insurance reduces Prepaid Insurance by $4K. Total: $44,000.'
},
{ id:'ch3-022', chap:'ch3', type:'mcq', diff:'med', src:'authored',
  stem:'Which is the correct closing entry for revenues?',
  opts:[
    {t:'Debit Revenue, Credit Retained Earnings.', ok:true},
    {t:'Debit Retained Earnings, Credit Revenue.'},
    {t:'Debit Cash, Credit Revenue.'},
    {t:'Debit Revenue, Credit Cash.'}
  ],
  expl:'Revenues are closed (zeroed out) by debiting them and crediting RE.'
},
{ id:'ch3-023', chap:'ch3', type:'mcq', diff:'med', src:'authored',
  stem:'Salaries expense for the year is $80,000 on the income statement. Salaries Payable: $5,000 at start, $9,000 at end. How much cash was paid for salaries?',
  opts:[
    {t:'$76,000.', ok:true},
    {t:'$80,000.'},
    {t:'$84,000.'},
    {t:'$71,000.'}
  ],
  expl:'Cash paid = Expense − Δ payable = 80,000 − (9,000 − 5,000) = 80,000 − 4,000 = $76,000.'
},
{ id:'ch3-024', chap:'ch3', type:'numeric', diff:'med', src:'authored', dp:0,
  stem:'A company subleases office space and on Sept 1 receives $9,000 cash for 6 months\' rent in advance, credited to Unearned Rent Revenue. On Dec 31, what is the adjusting entry amount (rent revenue earned) (in $)?',
  ans:6000,
  expl:'4 of 6 months earned (Sep, Oct, Nov, Dec). 9,000 × 4/6 = $6,000.'
},
{ id:'ch3-025', chap:'ch3', type:'mcq', diff:'hard', src:'authored',
  stem:'Failure to record the adjusting entry for $2,500 of supplies used during the period would cause:',
  opts:[
    {t:'NI understated by $2,500.'},
    {t:'NI overstated by $2,500.', ok:true},
    {t:'No NI effect — only timing.'},
    {t:'Liabilities understated.'}
  ],
  expl:'Supplies expense not recorded → expense understated → NI overstated by $2,500. Asset (Supplies) is overstated by the same.'
},
{ id:'ch3-026', chap:'ch3', type:'long', diff:'hard', src:'authored',
  stem:'On December 31, a company has not yet recorded $4,800 of interest earned on a note receivable. State the adjusting entry, then explain the effect of NOT making it on (i) the income statement, (ii) the balance sheet.',
  expl:'<strong>Entry:</strong> Debit Interest Receivable $4,800; Credit Interest Revenue $4,800.<br><br>(i) <strong>Income statement:</strong> Without the entry, Interest Revenue is understated by $4,800. Net income is understated by $4,800.<br><br>(ii) <strong>Balance sheet:</strong> Interest Receivable (asset) is understated by $4,800. Retained Earnings (equity) is understated by $4,800. The accounting equation stays balanced — both an asset and equity are missing the same amount.',
  mark:[
    'Correct adjusting journal entry (1 mark)',
    'Income statement effect — revenue/NI understated by $4,800 (1 mark)',
    'Balance sheet effect — Interest Receivable and RE both understated (1 mark)',
    'Confirmed equation stays balanced (1 mark)'
  ]
},
{ id:'ch3-027', chap:'ch3', type:'mcq', diff:'med', src:'authored',
  stem:'Which of the following is an "accrual" rather than a "deferral"?',
  opts:[
    {t:'Prepaid insurance.'},
    {t:'Unearned subscription revenue.'},
    {t:'Wages payable.', ok:true},
    {t:'Office supplies.'}
  ],
  expl:'Wages payable = expense incurred but not yet paid (an accrual). Prepaids/unearned amounts are deferrals.'
},
{ id:'ch3-028', chap:'ch3', type:'mcq', diff:'med', src:'authored',
  stem:'Which event would NOT require an adjusting entry at year-end?',
  opts:[
    {t:'Wages owed but unpaid.'},
    {t:'Insurance prepaid for the next 6 months.'},
    {t:'Cash sale of inventory on the last day of the year, recorded that day.', ok:true},
    {t:'Depreciation on equipment.'}
  ],
  expl:'A cash sale recorded on the date of sale is fully captured — no adjustment needed.'
},
{ id:'ch3-029', chap:'ch3', type:'numeric', diff:'med', src:'authored', dp:0,
  stem:'Beginning prepaid rent = $0. Cash paid for rent during the year = $48,000. Ending prepaid rent = $4,000. Rent expense for the year (in $)?',
  ans:44000,
  expl:'Expense = Cash paid + Beg prepaid − End prepaid = 48,000 + 0 − 4,000 = $44,000.'
},
{ id:'ch3-030', chap:'ch3', type:'mcq', diff:'hard', src:'authored',
  stem:'A company recorded the purchase of a 2-year insurance policy for $24,000 on April 1, debiting Insurance Expense (instead of Prepaid Insurance). At year-end (Dec 31), what adjusting entry is required to correct this?',
  opts:[
    {t:'Debit Prepaid Insurance $15,000; Credit Insurance Expense $15,000.', ok:true},
    {t:'Debit Insurance Expense $9,000; Credit Prepaid Insurance $9,000.'},
    {t:'Debit Prepaid Insurance $24,000; Credit Insurance Expense $24,000.'},
    {t:'No adjustment needed.'}
  ],
  expl:'Total $24K spans 24 months. By Dec 31, only 9 months (Apr–Dec) are used = $9K. So expense should be $9K, not $24K. Reverse $15K back to Prepaid: 24,000 − 9,000 = $15,000.'
}
]);

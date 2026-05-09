/* Chapter 4 — Revenue Recognition & Receivables */
QBANK.add([
{ id:'ch4-001', chap:'ch4', type:'mcq', diff:'med', src:'mcq-bank',
  stem:'Which best describes the condition(s) for the recognition of revenue from a contract with a customer?',
  opts:[
    {t:'Cash payment must have been received from the customer.'},
    {t:'All performance obligations must be fulfilled.'},
    {t:'At least one of the contract\'s performance obligations must be fulfilled.', ok:true},
    {t:'There must be no uncertainty about the amount to be received.'}
  ],
  expl:'Under IFRS 15 / ASC 606, revenue is recognised as each performance obligation is satisfied (control transfers).'
},
{ id:'ch4-002', chap:'ch4', type:'mcq', diff:'med', src:'mcq-bank',
  stem:'When multiple products/services are bundled and sold for one price, revenue should be:',
  opts:[
    {t:'Recognised when the bundle is sold.'},
    {t:'Allocated among distinct performance obligations and recognised as each is fulfilled.', ok:true},
    {t:'Deferred until all elements are delivered.'},
    {t:'Recognised when cash is paid.'}
  ],
  expl:'Step 4 of the IFRS 15 model: allocate the transaction price to performance obligations. Step 5: recognise as each is satisfied.'
},
{ id:'ch4-003', chap:'ch4', type:'mcq', diff:'med', src:'mcq-bank',
  stem:'A construction company contracts to build a facility. It should recognise revenue as construction progresses only if:',
  opts:[
    {t:'It receives advance cash payments.'},
    {t:'It retains title until completion.'},
    {t:'There are no contingent payments.'},
    {t:'Title to the project transfers as the project progresses (or other over-time criteria are met).', ok:true}
  ],
  expl:'Over-time recognition is allowed when control transfers progressively (asset has no alternative use + enforceable right to payment, OR customer simultaneously receives benefit, OR customer controls the asset as built).'
},
{ id:'ch4-004', chap:'ch4', type:'mcq', diff:'hard', src:'mcq-bank',
  stem:'When management selectively excludes some revenues, expenses, gains and losses from earnings calculated under IFRS, this is an example of:',
  opts:[
    {t:'income smoothing.'},
    {t:'big-bath accounting.'},
    {t:'cookie-jar accounting.'},
    {t:'non-IFRS or pro forma earnings.', ok:true}
  ],
  expl:'"Pro forma" / non-IFRS earnings selectively exclude certain items management deems non-recurring. Investors should treat these with caution.'
},
{ id:'ch4-005', chap:'ch4', type:'mcq', diff:'med', src:'mcq-bank',
  stem:'If bad debts expense is determined by estimating uncollectible accounts receivable, the entry to record the write-off of a specific uncollectible account would decrease:',
  opts:[
    {t:'allowance for uncollectible accounts.', ok:true},
    {t:'net income.'},
    {t:'net book value of accounts receivable.'},
    {t:'bad debts expense.'}
  ],
  expl:'Write-off entry: Debit Allowance, Credit AR. Both gross AR and Allowance fall by the same amount, so net AR is unchanged. NI is not affected.'
},
{ id:'ch4-006', chap:'ch4', type:'mcq', diff:'hard', src:'mcq-bank',
  stem:'If management intentionally underestimates bad debts expense, then net income is:',
  opts:[
    {t:'overstated and assets are understated.'},
    {t:'understated and assets are overstated.'},
    {t:'understated and assets are understated.'},
    {t:'overstated and assets are overstated.', ok:true}
  ],
  expl:'Smaller BDE → bigger NI (overstated). Smaller Allowance → bigger Net AR → assets overstated.'
},
{ id:'ch4-007', chap:'ch4', type:'mcq', diff:'med', src:'authored',
  stem:'A company receives $10,000 cash for a 12-month subscription on April 1. By December 31, what amount of revenue has been recognised?',
  opts:[
    {t:'$10,000.'},
    {t:'$7,500.', ok:true},
    {t:'$2,500.'},
    {t:'$0.'}
  ],
  expl:'9 of 12 months earned (Apr-Dec). 10,000 × 9/12 = $7,500. The remaining $2,500 stays in Unearned Revenue.'
},
{ id:'ch4-008', chap:'ch4', type:'mcq', diff:'med', src:'authored',
  stem:'Under the percentage-of-completion method, in which year is revenue recognised?',
  opts:[
    {t:'Only when the contract is signed.'},
    {t:'Only when the project is fully complete.'},
    {t:'Each period as costs are incurred, in proportion to total expected costs.', ok:true},
    {t:'When cash is collected.'}
  ],
  expl:'Cost-to-cost method: revenue this period = (cumulative costs / total estimated costs) × contract price − previously recognised revenue.'
},
{ id:'ch4-009', chap:'ch4', type:'mcq', diff:'med', src:'authored',
  stem:'A specific receivable of $800 previously written off is now collected. Under the allowance method, the entries are:',
  opts:[
    {t:'Restore AR (Debit AR, Credit Allowance), then Debit Cash, Credit AR.', ok:true},
    {t:'Debit Cash, Credit Bad Debt Expense.'},
    {t:'Debit Cash, Credit Service Revenue.'},
    {t:'Debit Cash, Credit Retained Earnings.'}
  ],
  expl:'First reverse the write-off (Debit AR / Credit Allowance), then record the cash receipt (Debit Cash / Credit AR).'
},
{ id:'ch4-010', chap:'ch4', type:'mcq', diff:'easy', src:'authored',
  stem:'Allowance for Doubtful Accounts is best classified as:',
  opts:[
    {t:'A liability.'},
    {t:'A contra-asset.', ok:true},
    {t:'An expense.'},
    {t:'A revenue account.'}
  ],
  expl:'It reduces gross AR to net realisable value on the balance sheet — a contra-asset.'
},
{ id:'ch4-011', chap:'ch4', type:'mcq', diff:'med', src:'authored',
  stem:'Under the aging-of-receivables method, which is true?',
  opts:[
    {t:'The required ending Allowance is computed; bad debt expense is the plug.', ok:true},
    {t:'Bad debt expense is computed; the Allowance is the plug.'},
    {t:'The Allowance is reset to zero each year.'},
    {t:'Bad debt expense equals total credit sales × estimated %.'}
  ],
  expl:'Aging is a balance-sheet approach: target a specific Allowance balance, then back-out the entry needed.'
},
{ id:'ch4-012', chap:'ch4', type:'mcq', diff:'med', src:'authored',
  stem:'Which would NOT be a performance obligation under IFRS 15?',
  opts:[
    {t:'Delivery of goods to a customer.'},
    {t:'Provision of installation services if distinct.'},
    {t:'Customer\'s payment of the invoice.', ok:true},
    {t:'A 3-year warranty bundled with a sale (when separately priced).'}
  ],
  expl:'A performance obligation is something the seller PROMISES to do. Customer payment is consideration, not an obligation of the seller.'
},
{ id:'ch4-013', chap:'ch4', type:'numeric', diff:'med', src:'final-2024', dp:0,
  stem:'A $10,000,000 contract; total estimated costs $7,500,000. Costs incurred 2022 = $2,625,000. Compute revenue 2022 under percentage-of-completion (in $).',
  ans:3500000,
  expl:'% complete = 2,625/7,500 = 35%. Revenue = 35% × 10,000,000 = $3,500,000.'
},
{ id:'ch4-014', chap:'ch4', type:'numeric', diff:'med', src:'final-2024', dp:0,
  stem:'Anna\'s Antiques: aging gives required Allowance $8,120. Current Allowance balance (before adjustment) = $1,625 credit. AR = $250,000. Find Bad Debt Expense (in $).',
  ans:6495,
  expl:'BDE = Required Allowance − Current = 8,120 − 1,625 = $6,495.'
},
{ id:'ch4-015', chap:'ch4', type:'numeric', diff:'hard', src:'final-2025', dp:0,
  stem:'Hudson estimates NRV of AR at €226,000 (from aging). AR balance Dec 31 = €272,500. Write-offs during the year = €21,300. Allowance Jan 1 = €31,500 credit. Find Bad Debt Expense (in €).',
  ans:36300,
  expl:'Required ending Allowance = 272,500 − 226,000 = 46,500. Allowance after write-offs = 31,500 − 21,300 = 10,200. BDE = 46,500 − 10,200 = €36,300.',
  pitfall:'Don\'t forget to subtract write-offs from the opening Allowance before computing the plug.'
},
{ id:'ch4-016', chap:'ch4', type:'numeric', diff:'hard', src:'authored', dp:0,
  stem:'A 4-year contract for $20,000,000. Total estimated costs $15,000,000. Costs: Y1 = $3,000,000; Y2 = $4,500,000; Y3 = $4,500,000; Y4 = $3,000,000. Revenue recognised in Y2 (in $)?',
  ans:6000000,
  expl:'Cumulative costs Y2 = 7,500,000. % complete = 50%. Cumulative revenue = 50% × 20,000,000 = 10,000,000. Less Y1 revenue (= 20% × 20,000,000 = 4,000,000) = $6,000,000 in Y2.'
},
{ id:'ch4-017', chap:'ch4', type:'numeric', diff:'hard', src:'authored', dp:0,
  stem:'Hahn Co. uses % of receivables. AR at year-end = $1,500,000; Allowance has a $2,000 DEBIT balance. Estimate uncollectibles at 1%. Bad Debt Expense (in $)?',
  ans:17000,
  expl:'Required Allowance (credit) = 1% × 1,500,000 = 15,000. Currently in debit = $2,000. Need to credit $17,000 to swing from −2,000 to +15,000. So BDE = $17,000.',
  pitfall:'A debit balance in Allowance means past write-offs exceeded prior estimate. Increase the BDE to plug both the $2,000 debit AND build to the $15,000 target.'
},
{ id:'ch4-018', chap:'ch4', type:'mcq', diff:'med', src:'authored',
  stem:'A company\'s DSO has risen from 35 to 65 days while industry average is 40. This most likely indicates:',
  opts:[
    {t:'Faster collection — improved efficiency.'},
    {t:'Rising bad debt risk and slower collection from customers.', ok:true},
    {t:'A reduction in credit sales.'},
    {t:'Strong cash management.'}
  ],
  expl:'Slower collection → higher DSO → potentially worsening receivable quality, higher bad debt exposure, weaker working capital.'
},
{ id:'ch4-019', chap:'ch4', type:'numeric', diff:'med', src:'authored', dp:0,
  stem:'A company has gross AR of $850,000 and Allowance for Doubtful Accounts of $32,000. What is the net realisable value of AR (in $)?',
  ans:818000,
  expl:'NRV = Gross AR − Allowance = 850,000 − 32,000 = $818,000.'
},
{ id:'ch4-020', chap:'ch4', type:'mcq', diff:'med', src:'authored',
  stem:'Which is true of the direct write-off method?',
  opts:[
    {t:'It is allowed under IFRS only for material amounts.'},
    {t:'It violates the matching principle and is not GAAP-acceptable except for immaterial amounts.', ok:true},
    {t:'It uses the aging schedule.'},
    {t:'It records bad-debt expense in advance of write-off.'}
  ],
  expl:'Direct write-off recognises BDE only when an account is actually written off. This violates matching (revenue and the related bad-debt expense fall in different periods).'
},
{ id:'ch4-021', chap:'ch4', type:'long', diff:'hard', src:'authored',
  stem:'A bookstore sells a $500 voucher to a customer that can be redeemed for any book in the next 12 months. (a) State the journal entry on the date of sale. (b) When and how is revenue recognised? (c) What if the voucher expires unused?',
  expl:'(a) <strong>On sale:</strong> Debit Cash $500; Credit Unearned Revenue / Contract Liability $500. No revenue recognised.<br><br>(b) <strong>Recognition:</strong> Revenue is recognised when the voucher is redeemed (i.e. control of a book transfers): Debit Unearned Revenue; Credit Sales Revenue. If history shows that, say, 5% of vouchers are never redeemed (breakage), the company can recognise revenue for breakage in proportion as actual redemptions occur, under IFRS 15.<br><br>(c) <strong>Expiry:</strong> If the voucher expires with no redemption and the firm has no obligation to refund, the residual liability is recognised as revenue (or as breakage income).',
  mark:[
    'Stated entry: Cash up, Unearned Revenue up (1 mark)',
    'Identified that revenue is recognised on redemption when control transfers (1 mark)',
    'Mentioned breakage / expected non-redemption pattern (1 mark)',
    'Treatment of expired vouchers as revenue or breakage income (1 mark)'
  ]
},
{ id:'ch4-022', chap:'ch4', type:'mcq', diff:'med', src:'authored',
  stem:'A company\'s allowance method calculation: opening Allowance balance $20,000 (credit); write-offs $15,000; recoveries $1,500; ending Allowance after adjusting entry $24,000. What is the bad debt expense?',
  opts:[
    {t:'$17,500.', ok:true},
    {t:'$15,000.'},
    {t:'$24,000.'},
    {t:'$19,000.'}
  ],
  expl:'Allowance roll-forward: 20,000 − 15,000 + 1,500 + BDE = 24,000 ⇒ BDE = 17,500.'
},
{ id:'ch4-023', chap:'ch4', type:'mcq', diff:'med', src:'authored',
  stem:'Which of the following is NOT one of the five steps in the IFRS 15 revenue recognition model?',
  opts:[
    {t:'Identify the contract.'},
    {t:'Identify the performance obligations.'},
    {t:'Determine the transaction price.'},
    {t:'Recognise revenue when cash is collected.', ok:true}
  ],
  expl:'The five steps: contract → obligations → price → allocate → recognise as obligations are satisfied. Cash collection is not a recognition trigger.'
},
{ id:'ch4-024', chap:'ch4', type:'numeric', diff:'med', src:'authored', dp:0,
  stem:'A company\'s sales = $4,000,000 (all on credit). Historical bad debt = 2% of credit sales. What is bad debt expense for the year (in $)?',
  ans:80000,
  expl:'BDE = 2% × 4,000,000 = $80,000. Note this is the income-statement (% of sales) approach — current Allowance balance is irrelevant.'
},
{ id:'ch4-025', chap:'ch4', type:'mcq', diff:'hard', src:'authored',
  stem:'A construction contract has TOTAL contract price $50M but mid-project the estimate revises to total cost $55M (loss expected). Under IFRS, the loss is:',
  opts:[
    {t:'Spread proportionally over remaining periods.'},
    {t:'Recognised in full immediately.', ok:true},
    {t:'Recognised only at contract completion.'},
    {t:'Deferred and absorbed against future contracts.'}
  ],
  expl:'Expected losses on long-term contracts must be recognised in full as soon as they are foreseen — conservatism.'
},
{ id:'ch4-026', chap:'ch4', type:'mcq', diff:'med', src:'authored',
  stem:'Sales returns are best described as:',
  opts:[
    {t:'A reduction in revenue (gross-to-net).', ok:true},
    {t:'An increase in COGS.'},
    {t:'An interest expense.'},
    {t:'A capital contribution.'}
  ],
  expl:'Returns/allowances reduce gross revenue. Companies often estimate expected returns and recognise net revenue plus a refund liability.'
},
{ id:'ch4-027', chap:'ch4', type:'mcq', diff:'med', src:'authored',
  stem:'Trade discounts (e.g., a 10% volume discount) are accounted for by:',
  opts:[
    {t:'Recording revenue at gross, then a separate discount expense.'},
    {t:'Recording revenue net of the discount.', ok:true},
    {t:'Recording revenue at gross only.'},
    {t:'Capitalising the discount.'}
  ],
  expl:'Trade discounts reduce the transaction price; revenue is recorded net.'
},
{ id:'ch4-028', chap:'ch4', type:'numeric', diff:'med', src:'authored', dp:0,
  stem:'AR balance Jan 1 = $300,000. Credit sales = $1,800,000. Cash collected from customers = $1,650,000. Write-offs = $40,000. Find AR balance Dec 31 (in $).',
  ans:410000,
  expl:'AR roll-forward: 300,000 + 1,800,000 − 1,650,000 − 40,000 = $410,000.'
},
{ id:'ch4-029', chap:'ch4', type:'mcq', diff:'hard', src:'authored',
  stem:'Which best describes the difference between trade receivables and notes receivable?',
  opts:[
    {t:'Trade receivables arise from credit sales; notes receivable have a written promise to pay and usually bear interest.', ok:true},
    {t:'Trade receivables bear higher interest rates.'},
    {t:'Notes receivable are non-current; trade receivables are always current.'},
    {t:'They are accounted for identically.'}
  ],
  expl:'Notes are formal — written, dated, often interest-bearing — and may be either current or long-term.'
},
{ id:'ch4-030', chap:'ch4', type:'numeric', diff:'med', src:'authored', dp:0,
  stem:'Net credit sales = $5,000,000. Average AR = $625,000. Use 365 days. Compute Days Sales Outstanding (round to whole days, in days).',
  ans:46,
  expl:'DSO = (Avg AR / Sales) × 365 = (625,000 / 5,000,000) × 365 = 45.625 ≈ 46 days.'
}
]);

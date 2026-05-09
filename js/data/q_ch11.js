/* Chapter 11 — Statement of Cash Flows */
QBANK.add([
{ id:'ch11-001', chap:'ch11', type:'mcq', diff:'med', src:'final-2024',
  stem:'Which of the following events will NOT appear in INVESTING cash flows?',
  opts:[
    {t:'Purchase of treasury stock.', ok:true},
    {t:'Purchase of long-term investments.'},
    {t:'Purchase of a building.'},
    {t:'Sale of a machine.'}
  ],
  expl:'Treasury stock is FINANCING (transaction with own owners).'
},
{ id:'ch11-002', chap:'ch11', type:'mcq', diff:'med', src:'final-2024',
  stem:'Which is FALSE?',
  opts:[
    {t:'The statement of cash flows explains how the cash balance changed during a period.'},
    {t:'Cash flows for PP&E acquisition/disposal are reported in investing.'},
    {t:'Under the indirect method, an INCREASE in AR is ADDED to net income.', ok:true},
    {t:'Cash flows from financing activities include those related to issuing and retiring long-term debt.'}
  ],
  expl:'An increase in AR is SUBTRACTED, not added (cash collected was less than sales reported).'
},
{ id:'ch11-003', chap:'ch11', type:'mcq', diff:'med', src:'final-2025',
  stem:'Which of the following transactions results in an INCREASE in cash flow from operations under the indirect method?',
  opts:[
    {t:'Decrease in inventory.', ok:true},
    {t:'Increase in accounts receivable.'},
    {t:'Increase in prepaid expenses.'},
    {t:'Decrease in accounts payable.'}
  ],
  expl:'Operating asset DOWN ⇒ ADD to NI under indirect method. The other three are subtractions.'
},
{ id:'ch11-004', chap:'ch11', type:'mcq', diff:'easy', src:'final-2025',
  stem:'Which of the following reduces Cash Flow from Financing (CFF)?',
  opts:[
    {t:'Issuance of common stock for cash.'},
    {t:'Purchase of long-term investments using cash.'},
    {t:'Repayment of long-term debt with cash.', ok:true},
    {t:'Issuance of bonds at a premium for cash.'}
  ],
  expl:'Repaying debt is a financing OUTFLOW. Buying LT investments is INVESTING.'
},
{ id:'ch11-005', chap:'ch11', type:'mcq', diff:'med', src:'final-2025',
  stem:'MapleTech sold equipment for €58,000 cash that had cost €120,000 with €75,000 acc. dep. Which is correct?',
  opts:[
    {t:'Investing cash flow increases by €45,000. No gain/loss.'},
    {t:'Investing cash flow increases by €58,000. Gain of €13,000.', ok:true},
    {t:'Financing cash flow increases by €58,000. Gain of €45,000.'},
    {t:'Financing cash flow increases by €58,000. Loss of €13,000.'}
  ],
  expl:'NBV = 45,000. Gain = 58,000 − 45,000 = €13,000. CFI inflow = full €58,000 cash. Equipment sales are INVESTING.'
},
{ id:'ch11-006', chap:'ch11', type:'mcq', diff:'med', src:'authored',
  stem:'A company\'s indirect-method CFO begins with:',
  opts:[
    {t:'Cash receipts from customers.'},
    {t:'Net income.', ok:true},
    {t:'EBIT.'},
    {t:'Total revenue.'}
  ],
  expl:'Indirect: NI + adjustments → CFO.'
},
{ id:'ch11-007', chap:'ch11', type:'mcq', diff:'med', src:'authored',
  stem:'Which is added back in indirect-method CFO?',
  opts:[
    {t:'Depreciation expense.', ok:true},
    {t:'Cash interest paid.'},
    {t:'Cash dividends declared.'},
    {t:'Cash sales.'}
  ],
  expl:'Depreciation reduced NI but cost no cash this period — add back.'
},
{ id:'ch11-008', chap:'ch11', type:'mcq', diff:'hard', src:'authored',
  stem:'A loss on the sale of equipment is treated in the indirect-method CFO by:',
  opts:[
    {t:'Subtracting it from NI.'},
    {t:'Adding it back to NI (because the cash inflow is captured in CFI).', ok:true},
    {t:'Ignoring it.'},
    {t:'Splitting it half/half between CFO and CFI.'}
  ],
  expl:'The loss reduced NI but didn\'t cost cash this period (full proceeds are in CFI). Add back the loss.'
},
{ id:'ch11-009', chap:'ch11', type:'mcq', diff:'hard', src:'authored',
  stem:'A pattern of +CFO, −CFI, −CFF most likely describes:',
  opts:[
    {t:'A start-up.'},
    {t:'A mature, profitable, debt-paying-down company.', ok:true},
    {t:'A company in liquidity crisis.'},
    {t:'A company about to go public.'}
  ],
  expl:'Mature firms generate cash from ops, reinvest in capex (negative CFI), and return cash via debt repayment / dividends / buy-backs (negative CFF).'
},
{ id:'ch11-010', chap:'ch11', type:'mcq', diff:'hard', src:'authored',
  stem:'+CFO, −CFI, +CFF describes:',
  opts:[
    {t:'A start-up / growth-stage company.', ok:true},
    {t:'A liquidating company.'},
    {t:'A mature company.'},
    {t:'A company in distress.'}
  ],
  expl:'Cash from operations + raising more capital, while heavily investing in capex/acquisitions = growth profile.'
},
{ id:'ch11-011', chap:'ch11', type:'mcq', diff:'med', src:'authored',
  stem:'Cash dividends paid by the company are classified in:',
  opts:[
    {t:'CFO (always).'},
    {t:'CFF (US GAAP and IFRS allow CFF; IFRS allows CFO).', ok:true},
    {t:'CFI.'},
    {t:'OCI.'}
  ],
  expl:'US GAAP: dividends paid = CFF. IFRS allows either CFO or CFF (but most pick CFF for consistency).'
},
{ id:'ch11-012', chap:'ch11', type:'mcq', diff:'med', src:'authored',
  stem:'Interest received on investments (US GAAP):',
  opts:[
    {t:'CFO.', ok:true},
    {t:'CFI.'},
    {t:'CFF.'},
    {t:'OCI.'}
  ],
  expl:'US GAAP: interest received and paid both go to CFO. IFRS lets you choose CFO or CFI for received and CFO or CFF for paid.'
},
{ id:'ch11-013', chap:'ch11', type:'numeric', diff:'med', src:'final-2024', dp:0,
  stem:'Gel IQ: NI $570,000; Depreciation $68,500; AR ↓ $48,000; AP ↓ $49,000; Prepaid ↑ $38,000; Wages payable ↑ $22,500; Unearned rev ↓ $38,000; Loss on sale of asset $38,000. Compute CFO under indirect method (in $).',
  ans:622000,
  expl:'+570 +68.5 +48 −49 −38 +22.5 −38 +38 = $622K.'
},
{ id:'ch11-014', chap:'ch11', type:'numeric', diff:'med', src:'final-2024', dp:0,
  stem:'Signoria: Issued $67,000 bonds; paid $9,700 dividends; bought treasury stock $16,700; bought new equipment $20,700. Find CFF (in $).',
  ans:40600,
  expl:'+67,000 − 9,700 − 16,700 = $40,600. Equipment is INVESTING, not financing.'
},
{ id:'ch11-015', chap:'ch11', type:'numeric', diff:'med', src:'final-2024', dp:0,
  stem:'Pitti: Sold equipment $130,000; bought building $3,255,000; sold long-term investments $145,000; paid dividends $15,000. Find CFI (in $; negative if outflow).',
  ans:-2980000,
  expl:'+130,000 − 3,255,000 + 145,000 = −$2,980,000. Dividends are CFF.'
},
{ id:'ch11-016', chap:'ch11', type:'numeric', diff:'hard', src:'final-2024', dp:0,
  stem:'Vaporetto: NI $304,500; loss on sale $19,450; depreciation $42,250; AR $400,000→$500,000; Inv $100,000→$75,000; AP $200,000→$280,000; Accrued Liab $300,000→$260,000. Find CFO (in $).',
  ans:331200,
  expl:'+304,500 + 19,450 + 42,250 − 100,000 (ΔAR) + 25,000 (ΔInv) + 80,000 (ΔAP) − 40,000 (ΔAccrued) = $331,200.'
},
{ id:'ch11-017', chap:'ch11', type:'numeric', diff:'med', src:'final-2025', dp:0,
  stem:'SilverPeak 2024: Issued shares €620,000; cash dividends €95,000; treasury buy-back €25,000; repaid loan principal €40,000; purchased equipment €30,000. Find CFF (in €).',
  ans:460000,
  expl:'+620,000 − 95,000 − 25,000 − 40,000 = €460,000. Equipment is CFI.'
},
{ id:'ch11-018', chap:'ch11', type:'numeric', diff:'med', src:'final-2025', dp:0,
  stem:'SkyBridge: NI €150,000; Depreciation €35,000; ΔAR +€19,000; ΔInv +€14,000; ΔUnearned Rev +€7,000; ΔPrepaid −€4,000. Find CFO (in €).',
  ans:163000,
  expl:'+150 +35 −19 −14 +7 +4 = €163K.'
},
{ id:'ch11-019', chap:'ch11', type:'numeric', diff:'hard', src:'authored', dp:0,
  stem:'A company\'s opening cash $100,000; CFO +$300,000; CFI −$200,000; CFF +$50,000. Closing cash (in $)?',
  ans:250000,
  expl:'100 + 300 − 200 + 50 = $250,000. The CFS reconciles cash beg → cash end.'
},
{ id:'ch11-020', chap:'ch11', type:'numeric', diff:'med', src:'authored', dp:0,
  stem:'NI $200,000. Sales $1,500,000. AR $80,000 → $130,000. Cash collected from customers (in $)?',
  ans:1450000,
  expl:'Cash collections = Sales − Δ AR = 1,500,000 − 50,000 = $1,450,000.'
},
{ id:'ch11-021', chap:'ch11', type:'numeric', diff:'hard', src:'authored', dp:0,
  stem:'COGS $900,000. Inventory $120,000 → $150,000. AP $80,000 → $60,000. Direct-method cash paid to suppliers (in $)?',
  ans:950000,
  expl:'Cash to suppliers = COGS + Δ Inv − Δ AP = 900,000 + 30,000 − (−20,000) = 900,000 + 30,000 + 20,000 = $950,000.'
},
{ id:'ch11-022', chap:'ch11', type:'numeric', diff:'hard', src:'authored', dp:0,
  stem:'A company\'s NI $400,000; D&A $50,000; gain on sale of equipment $20,000; change in working capital +$30,000 (i.e., working capital sources). Find CFO (in $).',
  ans:460000,
  expl:'+400 + 50 − 20 (subtract gain) + 30 = $460K.'
},
{ id:'ch11-023', chap:'ch11', type:'mcq', diff:'med', src:'authored',
  stem:'In the direct method, the operating section reports:',
  opts:[
    {t:'NI plus adjustments.'},
    {t:'Cash receipts and cash payments by category (customers, suppliers, employees, interest, taxes).', ok:true},
    {t:'Only NI.'},
    {t:'Working-capital changes only.'}
  ],
  expl:'Direct method shows the actual cash inflows/outflows in operating activities. Less common in practice.'
},
{ id:'ch11-024', chap:'ch11', type:'mcq', diff:'med', src:'authored',
  stem:'A non-cash transaction (e.g., acquiring equipment by issuing a note) appears:',
  opts:[
    {t:'In CFI.'},
    {t:'In CFF.'},
    {t:'In a supplementary disclosure to the cash flow statement.', ok:true},
    {t:'Nowhere.'}
  ],
  expl:'Significant non-cash investing/financing transactions are disclosed in a supplementary schedule, not in the main statement.'
},
{ id:'ch11-025', chap:'ch11', type:'mcq', diff:'hard', src:'authored',
  stem:'Free cash flow is most often defined as:',
  opts:[
    {t:'CFO + CFI + CFF.'},
    {t:'CFO − Capital expenditures.', ok:true},
    {t:'NI − dividends.'},
    {t:'EBIT − tax.'}
  ],
  expl:'FCF = CFO − CapEx. This is the cash left for capital providers after maintaining/growing the productive base.'
},
{ id:'ch11-026', chap:'ch11', type:'mcq', diff:'easy', src:'authored',
  stem:'Cash spent acquiring shares of another company (long-term investment) is classified in:',
  opts:[
    {t:'CFO.'},
    {t:'CFI.', ok:true},
    {t:'CFF.'},
    {t:'OCI.'}
  ],
  expl:'Buying investments = INVESTING.'
},
{ id:'ch11-027', chap:'ch11', type:'numeric', diff:'med', src:'authored', dp:0,
  stem:'A company\'s wages expense = $200,000. Wages payable: opening $5,000, closing $10,000. Cash paid to employees (in $)?',
  ans:195000,
  expl:'Cash = Expense − ΔPayable = 200,000 − 5,000 = $195,000.'
},
{ id:'ch11-028', chap:'ch11', type:'mcq', diff:'med', src:'authored',
  stem:'A bond issued at a premium: the cash received exceeds face. Where does this appear?',
  opts:[
    {t:'CFI inflow at par; CFO inflow for the premium.'},
    {t:'CFF inflow for the FULL cash received (at premium).', ok:true},
    {t:'CFO for premium only.'},
    {t:'Off-statement.'}
  ],
  expl:'Bond issuance is CFF. Full cash received (face + premium) flows into financing.'
},
{ id:'ch11-029', chap:'ch11', type:'long', diff:'hard', src:'authored',
  stem:'Walk through the indirect-method CFO, listing every standard adjustment and the sign rule (+ or −) and reasoning behind each.',
  expl:'Start with <strong>NI</strong>. Then adjust:<br>1. <strong>+ Depreciation, amortisation, impairment</strong> — non-cash expenses.<br>2. <strong>± Gain/loss on disposal</strong> — subtract gains, add losses (cash inflow is shown in CFI).<br>3. <strong>± Δ working capital</strong>:<br>&nbsp;&nbsp;• Op asset UP → SUBTRACT (used more cash than expensed)<br>&nbsp;&nbsp;• Op asset DOWN → ADD<br>&nbsp;&nbsp;• Op liab UP → ADD (saved cash)<br>&nbsp;&nbsp;• Op liab DOWN → SUBTRACT<br>4. <strong>+ Equity-method losses / − Equity-method gains</strong> not received in cash.<br>5. <strong>± Stock-based compensation</strong> → add back (non-cash).<br>Result = CFO.',
  mark:[
    'Started with NI (1)',
    'Added back D&A and impairment (1)',
    'Adjusted gains/losses correctly (1)',
    'Stated working capital sign rules (asset up → subtract; liability up → add) (1)',
    'Mentioned non-cash items like SBC (1)'
  ]
},
{ id:'ch11-030', chap:'ch11', type:'mcq', diff:'med', src:'authored',
  stem:'A company classified interest paid as CFF under IFRS. To compare against US GAAP peers (where interest is CFO), one should:',
  opts:[
    {t:'Adjust by moving interest from CFF to CFO before computing CFO ratios.', ok:true},
    {t:'Ignore — the totals are identical.'},
    {t:'Reverse interest expense to CFO.'},
    {t:'Add interest twice.'}
  ],
  expl:'IFRS allows flexibility; for cross-company comparison move interest paid to CFO consistently.'
}
]);

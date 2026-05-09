/* Chapter 7 — Liabilities & Bonds */
QBANK.add([
{ id:'ch7-001', chap:'ch7', type:'mcq', diff:'med', src:'mcq-bank',
  stem:'A decrease in accrued wages liability:',
  opts:[
    {t:'decreases cash flows from operations.', ok:true},
    {t:'decreases working capital.'},
    {t:'increases net income.'},
    {t:'increases net non-operating financial assets.'}
  ],
  expl:'Lower wages payable means cash paid > wage expense, so CFO falls under indirect method.'
},
{ id:'ch7-002', chap:'ch7', type:'numeric', diff:'med', src:'mcq-bank', dp:0,
  stem:'On Apr 1, 2015, a firm borrowed $12,000 at 10% annual interest, payable semi-annually on Sept 30 and Mar 31. Compute total INTEREST EXPENSE for the firm\'s fiscal year ending Dec 31, 2015 (in $).',
  ans:900,
  expl:'9 months of interest accrued: Apr-Dec. Interest expense = 12,000 × 10% × 9/12 = $900.',
  pitfall:'Interest expense follows the month count, not the cash payment dates.'
},
{ id:'ch7-003', chap:'ch7', type:'numeric', diff:'med', src:'mcq-bank', dp:0,
  stem:'Same Apr 1, 2015 borrowing of $12,000 at 10%. By fiscal year-end Dec 31, the company already paid the Sept 30 coupon. What is INTEREST PAYABLE at Dec 31 (in $)?',
  ans:300,
  expl:'9 months expense = $900. Cash paid Sept 30 covered Apr-Sept (6 months) = $600. Remaining accrued (Oct-Dec) = $300.'
},
{ id:'ch7-004', chap:'ch7', type:'mcq', diff:'med', src:'mcq-bank',
  stem:'A firm issues $30,000,000 of 10-year bonds and receives $29.5M cash. Which is correct?',
  opts:[
    {t:'The bonds do not have a coupon rate (zero-coupons).'},
    {t:'The market rate exceeds the coupon rate.', ok:true},
    {t:'The contract rate exceeds the market rate.'},
    {t:'The bonds were issued at par.'}
  ],
  expl:'Issued below face → discount → market rate > coupon rate.'
},
{ id:'ch7-005', chap:'ch7', type:'numeric', diff:'hard', src:'mcq-bank', dp:0,
  stem:'A firm issues $5,000,000 of 10-year, 6% notes (semi-annual interest). Cash received = $5,817,565 (4% yield). Find the premium amortisation in YEAR 1 (using effective-interest method, in $).',
  ans:67971,
  expl:'Period 1: Int Exp = 5,817,565 × 2% = 116,351. Cash = 5,000,000 × 3% = 150,000. Amort = 150,000 − 116,351 = 33,649. Period 2: New CV = 5,817,565 − 33,649 = 5,783,916. Int Exp = 5,783,916 × 2% = 115,678. Amort = 150,000 − 115,678 = 34,322. Year 1 amort = 33,649 + 34,322 = $67,971.'
},
{ id:'ch7-006', chap:'ch7', type:'mcq', diff:'med', src:'mcq-bank',
  stem:'On May 1, 2016 Wild Inc. makes an early repayment of long-term debt due June 1, 2018. Which 2016 ratio(s) DECREASE because of this?',
  opts:[
    {t:'Current Ratio', ok:true},
    {t:'Quick Ratio'},
    {t:'Times Interest Earned'},
    {t:'Debt-to-Equity'}
  ],
  expl:'The debt would have become CURRENT in 2017 (one year before maturity), but in 2016 it\'s long-term. Paying it off NOW reduces cash (a current asset) without reducing current liabilities. So Current Ratio FALLS. Quick Ratio also falls. TIE and D/E IMPROVE.'
},
{ id:'ch7-007', chap:'ch7', type:'mcq', diff:'easy', src:'final-2024',
  stem:'On Jan 1, 2023, Quechua issued $400,000, 10-year, 10% coupon bonds (semi-annual interest). Market rate = 12%. The bonds were issued at:',
  opts:[
    {t:'a price below $400,000.', ok:true},
    {t:'a higher price than $400,000.'},
    {t:'a price of $400,000.'},
    {t:'all are incorrect.'}
  ],
  expl:'Coupon (10%) < Market (12%) → discount → price below face.'
},
{ id:'ch7-008', chap:'ch7', type:'mcq', diff:'med', src:'final-2024',
  stem:'Which transaction that impacts current liabilities has a CORRESPONDING ENTRY on the income statement?',
  opts:[
    {t:'Purchase inventory on credit from ABC on Jan 1.'},
    {t:'Payment to ABC on Feb 1 for the Jan 1 purchase.'},
    {t:'Interest accrued on a note payable.', ok:true},
    {t:'Payment to employees in Mar for wages earned in Feb.'}
  ],
  expl:'Accrued interest creates a payable AND records interest expense — both BS and IS hit. The other options either are pure BS swaps or already-recorded events being settled.'
},
{ id:'ch7-009', chap:'ch7', type:'mcq', diff:'med', src:'final-2025',
  stem:'A company repurchased €500,000 face-value bonds. Carrying amount was €512,000. Recognised gain = €7,000. What were the cash proceeds paid, and where do they appear?',
  opts:[
    {t:'€512,000 paid; Financing outflow.'},
    {t:'€505,000 paid; Financing outflow.', ok:true},
    {t:'€519,000 paid; Investing outflow.'},
    {t:'€507,000 paid; Financing outflow.'}
  ],
  expl:'G/L = Carrying − Cash ⇒ 7,000 = 512,000 − Cash ⇒ Cash = €505,000. Paying off own debt = FINANCING outflow.'
},
{ id:'ch7-010', chap:'ch7', type:'mcq', diff:'med', src:'final-2025',
  stem:'Bunny retired ¼ of its $419,000 face-value bonds (originally issued at par) for $99,800. Which is correct?',
  opts:[
    {t:'Loss of $4,950 reported on the income statement.'},
    {t:'Gain of $319,200 reported.'},
    {t:'Gain of $4,950 reported on the income statement.', ok:true},
    {t:'Stockholders\' equity is not affected.'}
  ],
  expl:'¼ of face = $104,750 (= carrying since at par). Cash $99,800. G/L = 104,750 − 99,800 = +$4,950 GAIN.'
},
{ id:'ch7-011', chap:'ch7', type:'numeric', diff:'med', src:'final-2025', dp:0,
  stem:'Same Bunny scenario as Q010. Cash outflow shown as financing activity (in $)?',
  ans:99800,
  expl:'CFF outflow = full cash paid = $99,800.'
},
{ id:'ch7-012', chap:'ch7', type:'mcq', diff:'easy', src:'authored',
  stem:'A bond sells at a premium when:',
  opts:[
    {t:'Coupon rate > Market rate.', ok:true},
    {t:'Coupon rate < Market rate.'},
    {t:'Coupon rate = Market rate.'},
    {t:'The bond is convertible.'}
  ],
  expl:'Coupon higher than market → bond pays more than required yield → investors pay extra (premium).'
},
{ id:'ch7-013', chap:'ch7', type:'numeric', diff:'med', src:'final-2025', dp:0,
  stem:'Evans Suppliers signed a 1-year, 6% interest-bearing note for $160,000 on Oct 1, 2024. Calendar-year basis. Find 2024 interest expense (in $).',
  ans:2400,
  expl:'3 of 12 months. 160,000 × 6% × 3/12 = $2,400.'
},
{ id:'ch7-014', chap:'ch7', type:'numeric', diff:'med', src:'authored', dp:0,
  stem:'A bond with $200,000 face, 4% coupon, paid semi-annually. Compute the cash interest payment for one period (in $).',
  ans:4000,
  expl:'Cash int = Face × Coupon × 1/2 = 200,000 × 4% × 0.5 = $4,000. (Always face × coupon — independent of carrying value.)'
},
{ id:'ch7-015', chap:'ch7', type:'numeric', diff:'hard', src:'authored', dp:0,
  stem:'A bond with carrying amount $480,000 (discount). Market rate 5% per period. Cash coupon = $20,000 per period. Find INTEREST EXPENSE for the period and the new carrying amount (interest expense answer in $).',
  ans:24000,
  expl:'Int Exp = Carrying × Market = 480,000 × 5% = $24,000. Discount amort = 24,000 − 20,000 = 4,000. New carrying = 484,000 (rises toward face).'
},
{ id:'ch7-016', chap:'ch7', type:'numeric', diff:'med', src:'authored', dp:0,
  stem:'On Jan 1, a company issued $1,000,000 of 5-year, 8% bonds at 102 (i.e., 102% of face). Cash received (in $)?',
  ans:1020000,
  expl:'1,000,000 × 102% = $1,020,000. Premium = $20,000 (amortised over 5 years).'
},
{ id:'ch7-017', chap:'ch7', type:'numeric', diff:'hard', src:'authored', dp:0,
  stem:'Interest payable: opening $1,200; closing $1,800. Interest expense $14,400. Find cash paid for interest (in $).',
  ans:13800,
  expl:'Interest payable roll-forward: Beg + Exp − Cash paid = End ⇒ 1,200 + 14,400 − Cash = 1,800 ⇒ Cash = $13,800.'
},
{ id:'ch7-018', chap:'ch7', type:'numeric', diff:'hard', src:'authored', dp:0,
  stem:'A $500,000 bond with carrying value $510,000 is retired early for $495,000 cash. Find gain or loss (in $; positive = gain, negative = loss).',
  ans:15000,
  expl:'G/L = Carrying − Cash = 510,000 − 495,000 = +$15,000 GAIN.'
},
{ id:'ch7-019', chap:'ch7', type:'mcq', diff:'med', src:'authored',
  stem:'A contingent liability that is REASONABLY POSSIBLE (but not probable) is:',
  opts:[
    {t:'Recorded on the balance sheet.'},
    {t:'Disclosed in the footnotes only.', ok:true},
    {t:'Ignored.'},
    {t:'Recorded as a contra-asset.'}
  ],
  expl:'Recognition: probable AND estimable → record. Reasonably possible → disclose. Remote → ignore.'
},
{ id:'ch7-020', chap:'ch7', type:'mcq', diff:'med', src:'authored',
  stem:'Issuance of bonds at face value:',
  opts:[
    {t:'Increases cash and increases bonds payable, with no premium/discount.', ok:true},
    {t:'Generates a discount.'},
    {t:'Generates a premium.'},
    {t:'Reduces interest expense over the life of the bond.'}
  ],
  expl:'At par: cash = face. No premium or discount to amortise. Interest expense each period = cash interest paid.'
},
{ id:'ch7-021', chap:'ch7', type:'numeric', diff:'med', src:'authored', dp:0,
  stem:'A 2-year, $50,000 note with 8% interest signed on July 1. By December 31 of the same year, accrued interest expense (in $)?',
  ans:2000,
  expl:'6 of 12 months. 50,000 × 8% × 6/12 = $2,000.'
},
{ id:'ch7-022', chap:'ch7', type:'mcq', diff:'med', src:'authored',
  stem:'A premium bond\'s carrying amount over time:',
  opts:[
    {t:'Falls toward face value as the premium amortises.', ok:true},
    {t:'Rises toward face value.'},
    {t:'Stays at face value.'},
    {t:'Equals market price each period.'}
  ],
  expl:'Premium bond CV starts above face and decreases each period as the premium is amortised, reaching face at maturity.'
},
{ id:'ch7-023', chap:'ch7', type:'mcq', diff:'med', src:'authored',
  stem:'A discount bond\'s interest expense each period under effective-interest method:',
  opts:[
    {t:'Equals cash interest each period.'},
    {t:'Decreases each period as the carrying value rises.'},
    {t:'Increases each period as the carrying value rises.', ok:true},
    {t:'Is fixed at coupon × face.'}
  ],
  expl:'For a discount bond, CV starts low and rises toward face. Interest expense = CV × market rate also rises each period.'
},
{ id:'ch7-024', chap:'ch7', type:'mcq', diff:'med', src:'authored',
  stem:'A company\'s bonds are downgraded by a rating agency. Which best describes the EFFECT on its existing bond LIABILITY on its balance sheet?',
  opts:[
    {t:'No change — the existing liability stays at amortised cost.', ok:true},
    {t:'The liability is written down to the new lower market value.'},
    {t:'A loss is recognised in the income statement.'},
    {t:'The liability is reclassified as current.'}
  ],
  expl:'Liabilities measured at amortised cost are not adjusted to market when the bond\'s market price moves (only the trading INVESTMENT counterparty might mark to market, depending on classification).'
},
{ id:'ch7-025', chap:'ch7', type:'mcq', diff:'med', src:'authored',
  stem:'Convertible bonds give the holder:',
  opts:[
    {t:'The right to convert into a fixed number of shares of the issuer.', ok:true},
    {t:'The right to demand early repayment at par.'},
    {t:'A higher coupon than ordinary bonds.'},
    {t:'Tax-free interest.'}
  ],
  expl:'Convertibles bundle a debt with an equity option. Lower coupon than straight debt because of the embedded option value.'
},
{ id:'ch7-026', chap:'ch7', type:'numeric', diff:'med', src:'authored', dp:0,
  stem:'A 5-year, $100,000 bond at 10% coupon paid annually, market rate 8%. PV factor (annuity, n=5, r=8%) ≈ 3.9927. PV factor (single sum, n=5, r=8%) ≈ 0.6806. Issue price (in $)?',
  ans:107985,
  expl:'PV of coupons = 10,000 × 3.9927 = 39,927. PV of face = 100,000 × 0.6806 = 68,060. Issue price ≈ $107,987.',
  ans:107987,
  pitfall:'Coupon (10%) > market (8%) → premium → price > face. Confirm directionally.'
},
{ id:'ch7-027', chap:'ch7', type:'mcq', diff:'med', src:'authored',
  stem:'A long-term loan with 5 years to maturity. Of the principal, $50,000 is due in the next 12 months. On the balance sheet:',
  opts:[
    {t:'$50,000 is shown as current portion of long-term debt; the rest as non-current.', ok:true},
    {t:'All of the loan is current.'},
    {t:'All is non-current.'},
    {t:'The current portion is shown as equity.'}
  ],
  expl:'Current portion of long-term debt is reclassified to current liabilities.'
},
{ id:'ch7-028', chap:'ch7', type:'long', diff:'hard', src:'authored',
  stem:'A company issues a $1,000,000 face-value bond, 5% coupon (paid annually), 10-year life, when market rate is 6%. (a) Will the bond price be above or below face? Explain. (b) Show the journal entry on issue. (c) Describe how interest expense and the bond carrying amount evolve over the 10 years.',
  expl:'<strong>(a) Below face (discount).</strong> Investors require 6%, the bond only offers 5% coupons, so they pay less than face to lock in 6% yield.<br><br><strong>(b) Issue entry (price approx. $926,398):</strong><br>Debit Cash 926,398<br>Debit Discount on Bonds Payable 73,602<br>Credit Bonds Payable 1,000,000<br>(or net the discount: Credit "Bonds Payable, net" $926,398.)<br><br><strong>(c) Effective-interest method:</strong> Interest expense each period = Carrying × 6%. Cash interest = 1,000,000 × 5% = 50,000. The difference amortises the discount: discount falls each period and the bond\'s carrying value rises toward face. Interest expense INCREASES each year (because CV rises). At maturity, CV = face and the entire discount is amortised.',
  mark:[
    'Identified discount (price below face) (1)',
    'Correct journal entry with cash, discount, and face (1)',
    'Interest expense formula: CV × market rate (1)',
    'Discount amortisation pattern explained (1)',
    'Mentioned that interest expense rises over time (1)'
  ]
},
{ id:'ch7-029', chap:'ch7', type:'mcq', diff:'med', src:'authored',
  stem:'A "put" feature in a bond:',
  opts:[
    {t:'Lets the issuer call the bond.'},
    {t:'Lets the holder demand early redemption at a stated price.', ok:true},
    {t:'Allows conversion into shares.'},
    {t:'Reduces the coupon rate.'}
  ],
  expl:'Putable bonds favour the holder (option to put = sell back). Callable bonds favour the issuer (option to call = redeem early).'
},
{ id:'ch7-030', chap:'ch7', type:'mcq', diff:'hard', src:'authored',
  stem:'A company has a $200,000 lawsuit pending. Lawyers say liability is PROBABLE and best estimate is $150,000 but could range $100,000–$200,000. Under IFRS, the company should:',
  opts:[
    {t:'Disclose only.'},
    {t:'Record a provision of $150,000.', ok:true},
    {t:'Record a provision of $200,000.'},
    {t:'Ignore.'}
  ],
  expl:'IFRS: best estimate is recorded. US GAAP: minimum of the range when no single point is more likely. So under IFRS, $150K is recorded.'
}
]);

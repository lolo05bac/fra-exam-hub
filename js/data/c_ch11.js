// Chapter 11 — Reporting and Analyzing Cash Flows
// Sourced from FRA Chapter 11 slide deck and case-study solutions.
window.CHAPTER_CONTENT = window.CHAPTER_CONTENT || {};
window.CHAPTER_CONTENT.ch11 = {

intro: `
<p>The income statement is on an <strong>accrual</strong> basis: it records revenue when earned and expenses when incurred, regardless of cash movement. The <strong>Statement of Cash Flows (CFS)</strong> re-narrates the same period in <strong>cash terms</strong>, explaining exactly how the cash balance moved between the opening and closing balance sheet.</p>

<h3>Why the CFS exists</h3>
<p>Two companies can report the same net income and look very different in cash. Profit can be inflated by aggressive revenue recognition or by capitalising costs; cash cannot be faked the same way. The CFS lets investors and creditors assess:</p>
<ul>
<li><strong>Liquidity</strong> — ability to pay near-term liabilities.</li>
<li><strong>Solvency</strong> — ability to pay long-term liabilities.</li>
<li><strong>Financial flexibility</strong> — ability to generate cash in response to unanticipated needs and opportunities.</li>
<li><strong>Quality of earnings</strong> — does net income translate into actual cash?</li>
</ul>

<h3>What the statement explains</h3>
<p>The CFS explains the change in <strong>cash and cash equivalents</strong> over the period. Cash equivalents are short-term, highly liquid investments that are easily convertible to a known amount of cash and close enough to maturity (generally three months or less) that their value is insensitive to interest-rate moves. They are added to cash and treated as a single sum, because moving cash between the till and a money-market fund is part of cash management, not a financing/investing decision.</p>

<h3>The three sections</h3>
<table class="tbl">
<thead><tr><th>Section</th><th>Captures</th><th>Examples</th></tr></thead>
<tbody>
<tr><td><strong>CFO</strong> — Operating</td><td>Cash effects of selling goods/services and the day-to-day operating cycle</td><td>Cash from customers; payments to suppliers and employees; interest paid; tax paid</td></tr>
<tr><td><strong>CFI</strong> — Investing</td><td>Acquisition and disposal of long-term assets and investments</td><td>CapEx; proceeds from selling PP&E; buying/selling securities of other firms; loans made and collected</td></tr>
<tr><td><strong>CFF</strong> — Financing</td><td>Transactions with owners and creditors</td><td>Issuing/repurchasing stock; issuing/repaying debt; dividends paid</td></tr>
</tbody>
</table>
<p>The three sections sum to <em>change in cash and cash equivalents</em>, which must equal the change shown on the balance sheet.</p>

<h3>Direct vs indirect method</h3>
<p>Both methods produce the <em>same</em> CFO total — they differ only in presentation:</p>
<ul>
<li><strong>Direct method</strong> lists the actual cash inflows and outflows by category: cash collected from customers; cash paid to suppliers; cash paid to employees; interest paid; tax paid.</li>
<li><strong>Indirect method</strong> starts at <strong>Net Income</strong> and adjusts for non-cash items and changes in working capital. This is the dominant format in practice — it is easier and avoids a required supplemental schedule.</li>
</ul>

<h3>IFRS vs US GAAP — classification choices</h3>
<p>For interest and dividends the two frameworks differ:</p>
<table class="tbl">
<thead><tr><th>Cash flow</th><th>IFRS (choice)</th><th>US GAAP (fixed)</th></tr></thead>
<tbody>
<tr><td>Interest paid</td><td>CFO or CFF</td><td>CFO</td></tr>
<tr><td>Interest received</td><td>CFO or CFI</td><td>CFO</td></tr>
<tr><td>Dividends paid</td><td>CFF or CFO</td><td>CFF</td></tr>
<tr><td>Dividends received</td><td>CFO or CFI</td><td>CFO</td></tr>
</tbody>
</table>
<p>Whatever choice is made, IFRS requires it to be applied consistently each period.</p>

<h3>Reading the cash-flow pattern</h3>
<p>The combined signs of the three sections tell a story about a firm\'s lifecycle:</p>
<ul>
<li><strong>+CFO, −CFI, −CFF</strong> — mature, profitable: generates cash, reinvests in long-term assets, returns the rest to investors.</li>
<li><strong>+CFO, −CFI, +CFF</strong> — growth-stage: profitable but borrowing or issuing equity to fund big CapEx.</li>
<li><strong>+CFO, +CFI, −CFF</strong> — divestiture / wind-down: still operating, selling assets, repaying debt.</li>
<li><strong>−CFO, +CFI, +CFF</strong> — distressed or early start-up: burning operating cash, selling assets, raising new capital.</li>
</ul>

<h3>Noncash investing & financing — disclosed but not on the face</h3>
<p>Some significant transactions never touch cash: issuing stock to acquire land, signing a bank loan to buy a building, converting bonds to equity. These do not appear on the face of the CFS but must be disclosed in a footnote or supplemental schedule. Three required supplemental disclosures are: cash paid for income taxes, the noncash investing/financing schedule, and the firm\'s policy for what counts as a cash equivalent.</p>
`,

definitions: [
  { id:'def-cfs', term:'Statement of Cash Flows', body:'A primary financial statement that explains the change in cash and cash equivalents during a period, classified into Operating, Investing and Financing activities.' },
  { id:'def-cce', term:'Cash and cash equivalents', body:'Cash plus short-term, highly liquid investments easily convertible into known amounts of cash and with original maturities of three months or less. Treated as a single sum on the CFS.' },
  { id:'def-cfo', term:'Cash from Operating activities (CFO)', body:'Cash effects of selling goods or rendering services and any cash receipts/payments not classified as investing or financing. Anchors to net income via the indirect method.' },
  { id:'def-cfi', term:'Cash from Investing activities (CFI)', body:'Acquisition and disposal of long-term assets (PP&E, intangibles), purchase and sale of securities of other companies (excluding cash equivalents), lending money and collecting on loans.' },
  { id:'def-cff', term:'Cash from Financing activities (CFF)', body:'Transactions with owners (issuing/buying back stock, paying dividends) and with creditors (issuing/repaying debt). Affects non-current liabilities and equity accounts.' },
  { id:'def-direct', term:'Direct method', body:'CFO presented as actual cash inflows and outflows by category (collections, payments to suppliers, employees, interest, tax). Less common in practice.' },
  { id:'def-indirect', term:'Indirect method', body:'CFO presented by starting at Net Income and adjusting for non-cash items, gains/losses on investing and financing transactions, and changes in operating working capital.' },
  { id:'def-wc-change', term:'Working-capital changes', body:'Period-over-period changes in operating current assets (AR, Inv, Prepaid) and operating current liabilities (AP, Accrued Liab, Unearned Rev). Each requires a sign adjustment under the indirect method.' },
  { id:'def-capex', term:'Capital expenditures (CapEx)', body:'Cash spent acquiring or upgrading long-term productive assets (PP&E, intangibles). Reported in CFI as an outflow.' },
  { id:'def-fcf', term:'Free Cash Flow (FCF)', body:'Cash from operations net of capital expenditures: <em>FCF = CFO − CapEx</em>. Measures the cash available to apply to new endeavours after maintaining productive capacity.' },
  { id:'def-noncash', term:'Noncash investing and financing activities', body:'Material investing/financing events that did not move cash (e.g. stock issued for land, building bought via mortgage, debt converted to equity). Disclosed in a supplemental schedule.' },
  { id:'def-gain-disp', term:'Gain/Loss on disposal of long-term asset', body:'Sale price minus net book value of the disposed asset. Already in NI but the cash inflow goes entirely to CFI; therefore the gain is SUBTRACTED (or loss ADDED back) in CFO to avoid double-counting.' },
  { id:'def-ocfcl', term:'Operating Cash Flow to Current Liabilities (OCFCL)', body:'CFO ÷ Average Current Liabilities. Measures the firm\'s ability to liquidate its current liabilities from its operating cash flow.' },
  { id:'def-ocfcx', term:'Operating Cash Flow to Capital Expenditures (OCFCX)', body:'CFO ÷ CapEx. Indicates whether operations alone can replace and expand the firm\'s productive assets.' },
],

formulas: [
  { id:'f-cfo-indirect', name:'Indirect-method CFO',
    expr:'\\text{CFO}=\\text{NI}+\\text{Non-cash exp.}\\pm\\text{G/L on disposals}-\\Delta\\text{Op.Assets}+\\Delta\\text{Op.Liab.}',
    when:'Default exam format. Non-cash items: depreciation, amortisation, impairment, share-based comp.' },
  { id:'f-cfo-direct', name:'Direct-method CFO skeleton',
    expr:'\\text{CFO}=\\text{Collections}-\\text{Payments to suppliers}-\\text{Payments to employees}-\\text{Interest paid}-\\text{Tax paid}',
    when:'When the problem gives you actual cash flows by category.' },
  { id:'f-collections', name:'Cash collected from customers',
    expr:'\\text{Collections}=\\text{Sales}-\\Delta\\text{AR}',
    when:'Direct-method line. AR up = collected less than billed; AR down = collected more.' },
  { id:'f-cogs-cash', name:'Cash paid to suppliers',
    expr:'\\text{Cash paid}=\\text{COGS}+\\Delta\\text{Inventory}-\\Delta\\text{AP}',
    when:'Direct-method line. Inventory up uses cash; AP up saves cash.' },
  { id:'f-fcf', name:'Free Cash Flow',
    expr:'\\text{FCF}=\\text{CFO}-\\text{CapEx}',
    when:'Cash available after maintaining productive capacity.' },
  { id:'f-ocfcl', name:'Operating Cash Flow to Current Liabilities',
    expr:'\\text{OCFCL}=\\dfrac{\\text{CFO}}{\\text{Average Current Liabilities}}',
    when:'Liquidity check using the cash-flow statement rather than the balance sheet alone.' },
  { id:'f-ocfcx', name:'Operating Cash Flow to Capital Expenditures',
    expr:'\\text{OCFCX}=\\dfrac{\\text{CFO}}{\\text{CapEx}}',
    when:'Whether operations alone fund replacement / expansion of long-term assets.' },
  { id:'f-articulation', name:'Articulation check',
    expr:'\\Delta\\text{Cash}_{B/S}=\\text{CFO}+\\text{CFI}+\\text{CFF}',
    when:'Always must hold. If it does not, your CFS is wrong.' },
],

derivations: [
  { title:'Indirect-method sign rules — why an AR increase is SUBTRACTED',
    body:`<p>Under accrual accounting, sales recognised on credit are in net income but the cash has not arrived. AR went up by exactly the gap. So actual cash collected = Sales − ΔAR, and to convert NI into cash we must <strong>subtract the AR increase</strong>. The mirror logic gives the four working-capital sign rules:</p>
    <ul>
    <li>Operating ASSET <strong>UP</strong> → cash trapped → <strong>SUBTRACT</strong>.</li>
    <li>Operating ASSET <strong>DOWN</strong> → cash released → <strong>ADD</strong>.</li>
    <li>Operating LIABILITY <strong>UP</strong> → we owe more, paid less → <strong>ADD</strong>.</li>
    <li>Operating LIABILITY <strong>DOWN</strong> → we paid down → <strong>SUBTRACT</strong>.</li>
    </ul>` },
  { title:'Why we add back depreciation, amortisation and impairment',
    body:`<p>These expenses reduce NI but are non-cash this period — the cash went out when the underlying asset was acquired, possibly years earlier. To get from NI to cash we add them back. The same is true of share-based compensation, deferred-tax expense, and most impairment charges.</p>` },
  { title:'Why a gain on disposal is SUBTRACTED in CFO and the full proceeds appear in CFI',
    body:`<p>Suppose we sell a machine for €58,000 with a NBV of €45,000. NI shows a €13,000 gain. The actual cash received was €58,000, and the entire €58,000 is reported in CFI (sale of long-term asset). If we left the €13,000 gain in CFO too, we would double-count €13,000 of cash. So we <strong>subtract the gain</strong> in CFO. A loss is added back for the symmetric reason: NI is too low by the loss, but no cash actually went out.</p>` },
  { title:'Why dividends paid are CFF, not CFO (US GAAP)',
    body:`<p>Dividends paid are returns of capital to owners — a financing transaction with the equity holders. US GAAP fixes this in CFF. Under IFRS, the company may classify dividends paid in CFF (the typical choice) or in CFO (if the firm wants the dividend to look like a cost of doing business). Whatever choice is made, the firm must apply it consistently.</p>` },
],

examples: [
  { title:'Classic indirect-method CFO (Gel IQ)',
    problem:`Gel IQ — recent year:
      <ul>
      <li>Net income $570,000</li>
      <li>AP <strong>decreased</strong> $49,000</li>
      <li>Prepaid <strong>increased</strong> $38,000</li>
      <li>Depreciation $68,500</li>
      <li>AR <strong>decreased</strong> $48,000</li>
      <li>Loss on sale of asset $38,000</li>
      <li>Wages payable <strong>increased</strong> $22,500</li>
      <li>Unearned revenue <strong>decreased</strong> $38,000</li>
      </ul>
      Find CFO.`,
    hint:'Tag every line as + or − using the working-capital rules.',
    steps:[
      { what:'+NI $570,000.' },
      { what:'+Depreciation $68,500.', why:'Non-cash.' },
      { what:'+Loss on sale $38,000.', why:'Non-cash; full proceeds already in CFI.' },
      { what:'+AR decrease $48,000.', why:'Op asset down — cash released.' },
      { what:'−Prepaid increase $38,000.', why:'Op asset up — cash used.' },
      { what:'−AP decrease $49,000.', why:'Op liability down — paid suppliers.' },
      { what:'+Wages payable increase $22,500.', why:'Op liability up — owe more, paid less.' },
      { what:'−Unearned rev decrease $38,000.', why:'Op liability down — earned what was deferred.' },
      { what:'Sum: 570 + 68.5 + 38 + 48 − 38 − 49 + 22.5 − 38 = 622 (in thousands).' },
    ],
    answer:'CFO = $622,000.',
    pitfall:'Mis-signing AR — an INCREASE in AR is SUBTRACTED, not added.'
  },
  { title:'Net investing cash flow (Pitti)',
    problem:'Pitti: sold equipment for $130,000; bought building $3,255,000; sold long-term investments $145,000; paid dividends $15,000. Find CFI.',
    hint:'Dividends paid are CFF — discard before adding.',
    steps:[
      { what:'+ Proceeds from equipment $130,000.' },
      { what:'− Purchase of building $3,255,000.' },
      { what:'+ Proceeds from LT investments $145,000.' },
      { what:'Dividends → CFF, not CFI.' },
      { what:'CFI = 130,000 − 3,255,000 + 145,000 = −$2,980,000.' },
    ],
    answer:'Net CFI = −$2,980,000.'
  },
  { title:'Net financing cash flow (Signoria)',
    problem:'Signoria: issued $67,000 of bonds; paid $9,700 dividends; bought treasury stock $16,700; bought new equipment $20,700. Find CFF.',
    hint:'Equipment purchase is CFI, not CFF.',
    steps:[
      { what:'+ Bonds issued $67,000.' },
      { what:'− Dividends paid $9,700.' },
      { what:'− Treasury stock $16,700.' },
      { what:'Equipment → CFI, ignore here.' },
      { what:'CFF = 67,000 − 9,700 − 16,700 = $40,600.' },
    ],
    answer:'Net CFF = $40,600.'
  },
  { title:'Indirect-method with multiple adjustments (Vaporetto)',
    problem:`Vaporetto: NI $304,500; loss on sale $19,450; depreciation $42,250; AR $400,000→$500,000; Inventory $100,000→$75,000; AP $200,000→$280,000; Accrued Liab $300,000→$260,000. Find CFO.`,
    steps:[
      { what:'+NI $304,500.' },
      { what:'+Loss on sale $19,450.' },
      { what:'+Depreciation $42,250.' },
      { what:'−ΔAR $100,000.', why:'AR rose; op asset up = subtract.' },
      { what:'+ΔInventory $25,000.', why:'Inventory dropped; op asset down = add.' },
      { what:'+ΔAP $80,000.', why:'AP rose; op liability up = add.' },
      { what:'−ΔAccrued $40,000.', why:'Accrued liab fell; op liability down = subtract.' },
      { what:'Sum: 304,500 + 19,450 + 42,250 − 100,000 + 25,000 + 80,000 − 40,000 = $331,200.' },
    ],
    answer:'CFO = $331,200.'
  },
  { title:'Direct-method — collections and payments to suppliers',
    problem:'Sales $850,000. AR opening $90,000, closing $115,000. COGS $510,000. Inventory opening $80,000, closing $70,000. AP opening $40,000, closing $55,000. Find collections and cash paid to suppliers.',
    steps:[
      { what:'Collections = Sales − ΔAR = 850,000 − (115,000 − 90,000) = 850,000 − 25,000 = $825,000.' },
      { what:'Cash paid to suppliers = COGS + ΔInv − ΔAP = 510,000 + (70,000 − 80,000) − (55,000 − 40,000) = 510,000 − 10,000 − 15,000 = $485,000.' },
    ],
    answer:'Collections = $825,000. Cash paid to suppliers = $485,000.',
    pitfall:'Watch the sign of ΔInv: inventory FELL by $10k, so it freed cash → subtract from COGS to get cash paid.'
  },
  { title:'Free Cash Flow and OCFCX',
    problem:'CFO = $480 million; CapEx = $190 million. Compute FCF and OCFCX.',
    steps:[
      { what:'FCF = CFO − CapEx = 480 − 190 = $290 million.' },
      { what:'OCFCX = CFO / CapEx = 480 / 190 ≈ 2.53.' },
    ],
    answer:'FCF = $290 million; OCFCX ≈ 2.53× — operations comfortably fund replacement and expansion.'
  },
],

memory: [
  { label:'Mnemonic — sign rules in one line', body:'<strong>"Op assets UP, cash DOWN. Op liabilities UP, cash UP."</strong> Memorise this and never mis-sign AR, Inv, AP again.' },
  { label:'Mnemonic — three buckets', body:'<strong>O-I-F</strong>: <strong>O</strong>perating (running the business), <strong>I</strong>nvesting (long-term assets and other companies\' securities), <strong>F</strong>inancing (with owners and creditors).' },
  { label:'Bucket triage one-liner', body:'<em>"Treasury stock = CFF. Equipment = CFI. Bonds I issue = CFF. Bonds I buy as investment = CFI."</em>' },
  { label:'IFRS classification choice', body:'<strong>Interest paid</strong>: CFO or CFF. <strong>Interest received</strong>: CFO or CFI. <strong>Dividends paid</strong>: CFF or CFO. <strong>Dividends received</strong>: CFO or CFI. US GAAP fixes interest paid/received and dividends received in CFO; dividends paid in CFF.' },
  { label:'Lifecycle pattern', body:'<strong>+CFO, −CFI, −CFF</strong> = mature & returning capital. <strong>+CFO, −CFI, +CFF</strong> = growing. <strong>−CFO, +CFI, +CFF</strong> = distressed or early-stage burn.' },
  { kind:'pitfall', body:'An INCREASE in AR is SUBTRACTED, not added. A DECREASE in AP is SUBTRACTED, not added. Many MCQs invert these.' },
  { kind:'pitfall', body:'On disposal of a long-term asset: the FULL cash inflow goes to CFI; the gain is SUBTRACTED in CFO; the loss is ADDED BACK in CFO. Do not put the gain itself in CFI.' },
  { kind:'pitfall', body:'Dividends PAID are CFF (US GAAP). Dividends RECEIVED are CFO (US GAAP). Do not mix the two directions.' },
],

connections: '<p>The CFS articulates with both other primary statements. <strong>Net income</strong> from the income statement (Ch 3) is the starting point of the indirect method. Every working-capital line on the <strong>balance sheet</strong> (AR Ch 4, Inventory Ch 5, AP Ch 7) feeds an adjustment line in CFO. <strong>PP&E</strong> changes (Ch 6) drive CFI; <strong>long-term debt</strong> (Ch 7) and <strong>equity</strong> (Ch 9) drive CFF. Investments from Ch 10 — both buying and selling securities — sit in CFI. The CFS then powers liquidity and coverage ratios in Ch 12: <em>OCFCL</em>, <em>OCFCX</em>, <em>FCF</em>, and CFO-based variants of TIE.</p>',
};

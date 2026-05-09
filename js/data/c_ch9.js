// Chapter 9 — Reporting and Analyzing Equity
// Sourced from FRA Chapter 9 slide deck (Prof. Raluca Ratiu).
window.CHAPTER_CONTENT = window.CHAPTER_CONTENT || {};
window.CHAPTER_CONTENT.ch9 = {

intro: `
<p>Chapter 9 closes the financing side of the balance sheet. Companies have three sources of capital: <strong>creditors</strong> (debt — Ch 7), <strong>equity investors</strong> (paying for shares), and <strong>reinvested profits</strong> (retained earnings). The first is contractual and must be repaid; the latter two are <em>equity</em> — the residual claim on assets after liabilities. This chapter is about how that residual is built up, paid back, and reported.</p>

<h3>The two big buckets</h3>
<p>Stockholders\' equity has two main piles:</p>
<ul>
<li><strong>Contributed capital</strong> — what owners put in via stock purchases. Two pieces: <em>Common Stock</em> at par value and <em>Additional Paid-in Capital</em> (APIC) for the excess over par. Preferred stock, if any, sits beside common. <em>Treasury Stock</em> (a contra account, recorded at cost) reduces total contributed capital when the firm has bought back its own shares.</li>
<li><strong>Earned capital</strong> — what the firm has retained from operations. Two pieces: <em>Retained Earnings</em> (cumulative net income minus cumulative dividends) and <em>Accumulated Other Comprehensive Income</em> (AOCI), which holds gains/losses not flowed through net income (FX translation, certain pension remeasurements, FVOCI gains).</li>
</ul>
<p>So total equity = (Common Stock + APIC + Preferred − Treasury Stock) + (Retained Earnings ± AOCI).</p>

<h3>Three share counts</h3>
<p>Three numbers appear in the equity footnotes; do not confuse them:</p>
<ul>
<li><strong>Authorised shares</strong> — the maximum the company is allowed to issue under its corporate charter. Increasing this requires a shareholder vote.</li>
<li><strong>Issued shares</strong> — how many have actually been sold (over the company\'s history). Common stock at par value uses this number.</li>
<li><strong>Outstanding shares</strong> = Issued − Treasury. The number currently held by outside owners. EPS denominator and dividend payouts use this.</li>
</ul>

<h3>Common vs. preferred stock</h3>
<p><strong>Common stock</strong> is the primary ownership unit; common shareholders have voting rights and are entitled to dividends after preferred shareholders. <strong>Par value</strong> is an arbitrary number set in the corporate charter — its only practical role is to split issuance proceeds between Common Stock (par × issued) and APIC (excess over par).</p>
<p><strong>Preferred stock</strong> normally has no vote but enjoys preferences:</p>
<ul>
<li><em>Dividend preference</em> — preferred dividends are paid first, often as a fixed % of par or a $ amount per share.</li>
<li><em>Liquidation preference</em> — in liquidation, preferred shareholders are paid after creditors but before common.</li>
<li><em>Cumulative</em> — unpaid prior-year preferred dividends ("dividends in arrears") must be made up before any common dividend.</li>
<li>Optional <em>call</em> and <em>conversion</em> features.</li>
</ul>

<h3>Stock issuance journal entry</h3>
<p>Issuing stock for cash: <strong>Cash up</strong> by issue-price × shares; <strong>Common Stock up</strong> by par × shares; <strong>APIC up</strong> by the rest. No income-statement effect. This is the classic split that the slide deck drills repeatedly.</p>

<h3>Treasury stock — buying back your own shares</h3>
<p>A company buys back shares to (i) shrink the float and lift price/EPS, (ii) signal confidence, and (iii) offset dilution from employee stock options. Repurchases are recorded under the <strong>cost method</strong>: Treasury Stock (a contra-equity account, XSE) goes UP by cash paid; Cash goes DOWN. <strong>Never any IS effect.</strong> Re-issuing treasury at a price above cost: gain goes to APIC. Re-issuing below cost: loss reduces APIC first; if APIC is exhausted, the remaining loss reduces Retained Earnings.</p>

<h3>Retained earnings, dividends, and dates</h3>
<p>Retained earnings rolls forward each period:</p>
<table class="tbl">
<thead><tr><th>Component</th><th>Effect on RE</th></tr></thead>
<tbody>
<tr><td>Beginning RE</td><td>opening balance</td></tr>
<tr><td>+ Net income (or − net loss)</td><td>profits accumulate</td></tr>
<tr><td>− Dividends declared</td><td>profit distributions</td></tr>
<tr><td>= Ending RE</td><td></td></tr>
</tbody>
</table>
<p>Three dates matter for cash dividends:</p>
<ul>
<li><strong>Declaration date</strong>: board legally commits. Dr Retained Earnings / Cr Dividends Payable.</li>
<li><strong>Record date</strong>: shareholders on the books at this date will receive the dividend. NO journal entry.</li>
<li><strong>Payment date</strong>: cash leaves. Dr Dividends Payable / Cr Cash.</li>
</ul>

<h3>Stock dividends vs. stock splits</h3>
<p>Both distribute extra shares to existing shareholders proportionally. They differ in accounting:</p>
<ul>
<li><strong>Stock dividend</strong> reclassifies equity: Retained Earnings down, Common Stock + APIC up. <em>Small</em> stock dividends (&lt; 20–25% of outstanding) are recorded at <strong>fair value</strong>; <em>large</em> stock dividends (≥ 20–25%) at <strong>par value</strong>. No cash effect; no change in total equity.</li>
<li><strong>Stock split</strong> requires NO journal entry — par value falls proportionately and share count rises proportionately. A 2-for-1 split halves par and doubles outstanding shares. Total equity, RE, APIC and Common Stock are all unchanged.</li>
</ul>

<h3>Comprehensive income & EPS</h3>
<p><strong>Comprehensive income = Net income + Other Comprehensive Income (OCI)</strong>. OCI captures gains/losses that bypass the income statement (FX translation, certain unrealised gains on FVOCI investments, pension remeasurements). The cumulative balance lives in AOCI inside equity.</p>
<p><strong>Basic EPS</strong> = (Net income − Preferred dividends) ÷ weighted-average common shares outstanding. <strong>Diluted EPS</strong> assumes potentially dilutive securities are exercised: stock options use the <em>treasury-stock method</em>; convertible debt/preferred uses the <em>if-converted method</em> (add back after-tax interest savings to the numerator and add the new shares to the denominator).</p>

<h3>Cash-flow classification</h3>
<p>All equity transactions are <strong>financing activities</strong>: stock issuance is a CFF inflow; share repurchase is a CFF outflow; cash dividends paid are a CFF outflow. Stock dividends and stock splits have NO cash effect, so nothing appears on the cash-flow statement.</p>
`,

definitions: [
  { id:'def-cc', term:'Contributed capital', body:'Cumulative cash inflows from selling stock, less cash paid to buy back stock. Comprises Common Stock (at par), APIC, optional Preferred Stock, and minus Treasury Stock.' },
  { id:'def-ec', term:'Earned capital', body:'Profits the company has retained instead of distributing. Comprises Retained Earnings (cumulative NI − dividends) and AOCI (cumulative OCI).' },
  { id:'def-cs', term:'Common stock', body:'The primary ownership unit. Voting rights. Recorded at PAR value × number of shares ISSUED (not outstanding).' },
  { id:'def-par', term:'Par value', body:'An arbitrary value set in the corporate charter. Only role: splitting stock-issue proceeds between Common Stock (at par) and APIC (excess over par).' },
  { id:'def-apic', term:'Additional Paid-in Capital (APIC)', body:'The excess of stock-issue price over par value. APIC = (Issue price − Par) × shares issued. Also called "Paid-in capital in excess of par".' },
  { id:'def-ps', term:'Preferred stock', body:'A class of stock with priority over common for dividends and liquidation, usually no voting rights. Often has fixed dividend rate stated as % of par or $/share.' },
  { id:'def-cumprefs', term:'Cumulative preferred', body:'Unpaid prior-year preferred dividends ("dividends in arrears") must be paid before any common dividend can be declared.' },
  { id:'def-auth', term:'Authorised shares', body:'Maximum number a corporation can issue under its charter. Raising this requires a shareholder vote.' },
  { id:'def-issued', term:'Issued shares', body:'Number of shares actually sold over the company\'s history. Common stock at par × issued.' },
  { id:'def-out', term:'Outstanding shares', body:'Issued − Treasury. The shares currently held by external owners. EPS denominator and dividend distributions use this number.' },
  { id:'def-ts', term:'Treasury stock', body:'Common stock the company has reacquired. Recorded at COST under the cost method (the most common approach). Contra-equity (XSE), shown as a deduction.' },
  { id:'def-re', term:'Retained earnings', body:'Cumulative profits since inception minus cumulative dividends declared. The bridge from the income statement to the balance sheet.' },
  { id:'def-divdec', term:'Dividend declaration', body:'Board\'s legal commitment to pay a dividend. Creates a current liability (Dividends Payable) and reduces Retained Earnings on that day.' },
  { id:'def-stockdiv', term:'Stock dividend', body:'A pro-rata distribution of additional shares. RE ↓, Common Stock + APIC ↑. Recorded at <strong>fair value</strong> if &lt; 20–25% of outstanding, at <strong>par value</strong> otherwise. No cash flow.' },
  { id:'def-split', term:'Stock split', body:'A pro-rata distribution that reduces par value proportionately. <strong>NO journal entry.</strong> Total equity, RE, APIC and Common Stock are unchanged; only share count and per-share values change.' },
  { id:'def-aoci', term:'Accumulated OCI (AOCI)', body:'Cumulative gains/losses that have not flowed through net income: FX translation, FVOCI investment unrealised gains, certain pension remeasurements.' },
  { id:'def-ci', term:'Comprehensive income', body:'Net income + Other Comprehensive Income for the period. Captures the full change in equity from non-owner sources.' },
  { id:'def-eps', term:'Earnings per share (EPS)', body:'Income available to common shareholders ÷ weighted-average common shares outstanding. Basic and diluted versions are both required to be disclosed.' },
],

formulas: [
  { id:'f-cs', name:'Common stock at par', expr:'\\text{Common Stock} = \\text{Par value per share} \\times \\text{Shares ISSUED}',
    when:'Whenever you compute the Common Stock account. Use ISSUED, not outstanding — treasury repurchases do NOT reduce this account.' },
  { id:'f-apic', name:'APIC at issuance', expr:'\\text{APIC} = (\\text{Issue price} - \\text{Par value}) \\times \\text{Shares issued}',
    when:'Stock issuance for cash. The plug between cash received and the Common Stock par credit.' },
  { id:'f-ts', name:'Treasury stock at cost', expr:'\\text{Treasury Stock} = \\text{Repurchase price} \\times \\text{Shares repurchased}',
    when:'Cost method (most common). Treasury is contra-equity; it does NOT reduce Common Stock or APIC.' },
  { id:'f-re', name:'Retained earnings roll-forward', expr:'\\text{End RE} = \\text{Begin RE} + \\text{Net income} - \\text{Dividends declared}',
    when:'Walking from beginning to ending RE on the statement of stockholders\' equity.' },
  { id:'f-basic-eps', name:'Basic EPS', expr:'\\text{Basic EPS} = \\frac{\\text{Net income} - \\text{Preferred dividends}}{\\text{Weighted-avg common shares outstanding}}',
    when:'Income-statement disclosure. Subtract preferred dividends because EPS measures earnings available to COMMON shareholders only.' },
  { id:'f-diluted-eps', name:'Diluted EPS (treasury-stock & if-converted)', expr:'\\text{Diluted EPS} = \\frac{\\text{NI} - \\text{Pref div} + \\text{after-tax interest on convertibles}}{\\text{Wtd avg shares} + \\text{incremental shares from options + conversions}}',
    when:'When the company has options, warrants, or convertibles. Treasury-stock method for options; if-converted method for convertible bonds/preferred.' },
  { id:'f-comp-inc', name:'Comprehensive income', expr:'\\text{Comprehensive income} = \\text{Net income} + \\text{OCI}',
    when:'OCI captures FX translation, FVOCI gains/losses, pension remeasurements that bypass NI.' },
  { id:'f-divs-arr', name:'Cumulative preferred dividends in arrears', expr:'\\text{In arrears} = \\text{Annual pref dividend} \\times \\text{Years skipped}',
    when:'Cumulative preferred. Must be cleared before any common dividend — even though arrears are NOT a recorded liability, they are disclosed.' },
],

derivations: [
  { title:'Why par value × ISSUED, not outstanding',
    body:`<p>The Common Stock account records what the company received from <strong>issuing</strong> shares historically. When a share is later repurchased into treasury, the firm does not unwind the original issuance — it instead records a contra account (Treasury Stock) at the repurchase cost. So Common Stock keeps the par × issued figure, and the contra account separately reflects the buyback.</p>
    <p>Outstanding shares (= Issued − Treasury) drive cash dividends and EPS, because only externally held shares share in the firm\'s profits. But the historical "par value × issued" amount in the Common Stock line never moves on a buyback.</p>` },
  { title:'Treasury reissuance — gain to APIC, loss to APIC then RE',
    body:`<p>Suppose a company bought back 100 shares at $22 each (Treasury balance $2,200) and now reissues 80 of them at $24:</p>
    <ul>
    <li>Cash in: 80 × $24 = $1,920.</li>
    <li>Treasury removed: 80 × $22 = $1,760.</li>
    <li>Difference: $160 gain → goes to <strong>APIC – Treasury Stock</strong>, NOT to net income.</li>
    </ul>
    <p>Now suppose the reissue price was $20 instead. Cash in $1,600; treasury removed $1,760; loss $160. The accounting answer:</p>
    <ul>
    <li>If APIC – Treasury Stock has a balance ≥ $160, debit it for $160.</li>
    <li>If APIC – Treasury Stock has a smaller balance, debit APIC down to zero, then debit Retained Earnings for the remaining loss.</li>
    </ul>
    <p>The takeaway: treasury reissuance never goes through the income statement. Gains build APIC; losses chip away at APIC and (if needed) RE.</p>` },
  { title:'Stock dividend vs. stock split — why one moves accounts and the other doesn\'t',
    body:`<p>Both operations preserve total equity and give shareholders proportionately more shares. The difference is legal/conceptual:</p>
    <ul>
    <li>A <strong>stock dividend</strong> is treated as if the firm capitalised some retained earnings into permanent contributed capital. So Retained Earnings is debited (small div: at fair value; large div: at par value) and Common Stock + APIC are credited.</li>
    <li>A <strong>stock split</strong> is purely a redenomination — par value is reduced proportionately and the share count rises by the same factor. No accounts move; only the per-share par disclosure changes. (In jurisdictions where par cannot be changed, a split is "effected in the form of a dividend" and recorded at par like a large stock dividend.)</li>
    </ul>` },
],

examples: [
  { title:'Phelps Swimming stock issuance',
    problem:'Phelps Swimming, Inc. issues 500 shares of $1 par value common stock at $15 per share. Record the transaction.',
    hint:'Cash received = issue price × shares. Common Stock at par × shares. APIC = the rest.',
    steps:[
      { what:'Cash received = 500 × $15 = $7,500.' , why:'This is the only side of the entry that depends on issue price.' },
      { what:'Common Stock = 500 × $1 par = $500.' , why:'Par value × shares ISSUED, regardless of how much investors paid.' },
      { what:'APIC = $7,500 − $500 = $7,000.' , why:'The excess of issue price over par.' },
      { what:'Journal: Dr Cash 7,500 / Cr Common Stock 500 / Cr APIC 7,000.' , why:'Total equity rises by $7,500. No income statement effect.' },
    ],
    answer:'Cash up $7,500. Common Stock up $500. APIC up $7,000. No effect on retained earnings or NI.',
    pitfall:'Don\'t credit the entire $7,500 to Common Stock. Par value × shares is the cap on the Common Stock account; the rest belongs in APIC.' },

  { title:'Phelps Swimming treasury repurchase + reissue at a loss',
    problem:'Phelps Swimming buys back 100 of its own common shares for $22 per share. Later, it reissues 80 of those treasury shares for $20 per share. Assume APIC – Treasury Stock has a zero balance before the reissue.',
    hint:'Repurchase: Treasury Stock up at COST. Reissue at a loss: cost > cash, so debit APIC first, then RE if APIC exhausted.',
    steps:[
      { what:'Repurchase: Dr Treasury Stock 2,200 / Cr Cash 2,200.' , why:'Cost method: Treasury is contra-equity at $22 × 100.' },
      { what:'Reissue 80 shares at $20: cash in 1,600; Treasury removed at cost = 80 × $22 = $1,760. Loss = $160.' , why:'Reissue below cost.' },
      { what:'Because APIC – Treasury Stock is at zero, debit Retained Earnings for the $160 loss.' , why:'The loss reduces RE, not net income — share repurchases NEVER hit the income statement.' },
      { what:'Journal: Dr Cash 1,600 / Dr Retained Earnings 160 / Cr Treasury Stock 1,760.' , why:'Total equity falls by $160 below where it started, captured entirely inside the equity section.' },
    ],
    answer:'Cash up 1,600; Treasury Stock down 1,760; RE down 160. No income statement effect.',
    pitfall:'Never report a "loss on share repurchase" on the income statement — it sits inside equity. This is the #1 trap on equity exam questions.' },

  { title:'Artemis: net contributed capital after a buyback',
    problem:'Artemis Co. issued 10,000 common shares of $2 par at $30. Two years later, it repurchased 1,500 of its own shares at $40. Compute (a) Common Stock, (b) APIC, (c) Treasury Stock, (d) net contributed capital after the buyback.',
    hint:'Common Stock and APIC use ISSUED shares (no change at buyback). Treasury Stock uses repurchase cost.',
    steps:[
      { what:'(a) Common Stock = $2 × 10,000 = $20,000.' , why:'Par × ISSUED, untouched by buyback.' },
      { what:'(b) APIC = ($30 − $2) × 10,000 = $280,000.' , why:'Excess over par × shares issued.' },
      { what:'(c) Treasury Stock = $40 × 1,500 = $60,000.' , why:'At cost; contra-equity.' },
      { what:'(d) Net contributed capital = $20,000 + $280,000 − $60,000 = $240,000.' , why:'Sum the three contributed-capital pieces.' },
    ],
    answer:'$240,000.',
    pitfall:'A common error: reducing Common Stock or APIC for the buyback. Neither moves — only the contra account (Treasury) reflects the repurchase.' },

  { title:'Eagle Crest retained-earnings roll-forward',
    problem:'Eagle Crest opens the year with $120,000 in Retained Earnings, earns net income of $40,000, declares cash dividends of $7,000, and issues a $5,000 small stock dividend (recorded at fair value). Compute ending RE.',
    hint:'Both cash dividends and stock dividends reduce RE on declaration. Stock split would NOT.',
    steps:[
      { what:'Begin RE = $120,000.' , why:'Opening balance.' },
      { what:'+ NI 40,000 = $160,000.' , why:'Profits add to RE.' },
      { what:'− Cash dividends 7,000 = $153,000.' , why:'Declaration reduces RE; no impact on NI.' },
      { what:'− Stock dividend 5,000 = $148,000.' , why:'Stock dividend at fair value moves $5,000 from RE into Common Stock + APIC; total equity unchanged.' },
    ],
    answer:'Ending RE = $148,000.',
    pitfall:'Don\'t double-count: net income flows into RE, but DIVIDENDS do not flow through net income — they bypass the IS and reduce RE directly.' },

  { title:'Cumulative preferred dividend priority',
    problem:'A firm has 1,000 shares of 6% cumulative preferred stock outstanding ($100 par). It paid no preferred dividend in years 1 and 2. In year 3 it declares a $25,000 cash dividend. How is the dividend split between preferred and common?',
    hint:'Cumulative preferred must clear arrears before any common dividend.',
    steps:[
      { what:'Annual preferred dividend = 1,000 × 6% × $100 = $6,000.' , why:'Stated as % of par.' },
      { what:'Arrears (years 1 and 2) = 2 × $6,000 = $12,000.' , why:'Cumulative — not paid means accumulated.' },
      { what:'Year 3 current preferred = $6,000.' , why:'Plus the current year dividend.' },
      { what:'Total to preferred = $12,000 + $6,000 = $18,000. Remainder to common = $25,000 − $18,000 = $7,000.' , why:'Common gets only what remains after the preferred priority is satisfied.' },
    ],
    answer:'Preferred receives $18,000; common receives $7,000.',
    pitfall:'Arrears are NOT a balance-sheet liability until the dividend is declared. They are disclosed in the notes; only on declaration does Dividends Payable arise.' },

  { title:'2-for-1 stock split vs. 100% stock dividend',
    problem:'A firm has 100,000 shares of $2 par common stock outstanding (Common Stock = $200,000) and APIC of $1,800,000. Show the effect of (a) a 2-for-1 stock split and (b) a 100% stock dividend at par.',
    hint:'Stock split — no entry, par halves, shares double. Stock dividend at par — RE down, Common Stock up.',
    steps:[
      { what:'(a) After 2-for-1 split: 200,000 shares at $1 par. Common Stock still = $200,000; APIC unchanged; RE unchanged.' , why:'Pure redenomination; no accounts move.' },
      { what:'(b) 100% stock dividend at par: 100,000 new shares × $2 par = $200,000 reclassified.' , why:'A 100% (large) stock dividend is recorded at par, not fair value.' },
      { what:'Journal for (b): Dr Retained Earnings 200,000 / Cr Common Stock 200,000.' , why:'RE drops; Common Stock rises. Total equity, share count outcome similar to a split — but the accounts MOVE.' },
    ],
    answer:'Stock split: no entry. Stock dividend (large): RE −$200,000, Common Stock +$200,000.',
    pitfall:'Test trap: a 2-for-1 split is NOT the same as a stock dividend even though both double the share count. The split moves no money inside equity; the dividend reclassifies retained earnings into contributed capital.' },
],

memory: [
  { label:'Equity buckets', body:'<strong>Contributed</strong> (Common + APIC + Preferred − Treasury) + <strong>Earned</strong> (Retained Earnings ± AOCI). Memorise this split — every equity question maps onto it.' },
  { label:'Three share counts', body:'<strong>Authorised ≥ Issued ≥ Outstanding.</strong> Authorised = legal cap. Issued = sold over history. Outstanding = Issued − Treasury.' },
  { label:'Common Stock formula', body:'<strong>Par × ISSUED</strong> (not outstanding). Buybacks do NOT reduce Common Stock; they create a separate contra account.' },
  { label:'Stock dividend size threshold', body:'<strong>Small (&lt; 20–25%) → fair value. Large (≥ 20–25%) → par value.</strong> Both reduce RE; both raise Common Stock + APIC.' },
  { label:'Three dividend dates', body:'<strong>Declaration</strong> (RE down, Div Payable up), <strong>Record</strong> (no entry), <strong>Payment</strong> (Div Payable down, Cash down).' },
  { kind:'pitfall', body:'<strong>Share repurchase has NO income statement effect.</strong> Even when shares are reissued at a loss, the loss reduces APIC (then RE), never NI.' },
  { kind:'pitfall', body:'<strong>Stock dividend ≠ stock split.</strong> A stock dividend reclassifies RE into contributed capital. A stock split does NOT touch any account — par halves and shares double instead.' },
  { kind:'pitfall', body:'<strong>Don\'t add OCI to net income for EPS.</strong> Comprehensive income = NI + OCI, but EPS uses NI (less preferred dividends), not comprehensive income.' },
],

connections: `
<p>Chapter 9 closes the financing-side trio with Chapter 7 (debt) and the lease/long-term obligations of Chapter 8. Retained earnings is the bridge to the income statement (Chapters 4–6) — net income flows in, dividends flow out — so this chapter is the formal place where IS meets BS. Comprehensive income foreshadows the investments chapter (Ch 10), where FVOCI gains land in OCI and accumulate in AOCI. The cash-flow statement (Ch 11) classifies every equity transaction as <strong>financing</strong>: stock issuance + buybacks + cash dividends are all CFF, while stock dividends and stock splits leave CFS untouched. Finally, EPS feeds directly into ratio analysis (Ch 12), where P/E and dividend yield are built on the share counts and earnings figures defined here.</p>
`,

};

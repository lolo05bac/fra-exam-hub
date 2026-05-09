// Chapter renderer
(function(){
  const params = new URLSearchParams(location.search);
  const id = params.get('id');
  const meta = (window.MANIFEST && MANIFEST.chapters || []).find(c=>c.id===id);
  const data = (window.CHAPTER_CONTENT && CHAPTER_CONTENT[id]);
  const article = document.getElementById('article');
  const sidebar = document.getElementById('sidebar');

  if (!meta || !data) {
    article.innerHTML = `<p>Chapter not found. <a href="chapters.html">Back to chapters</a></p>`;
    return;
  }
  document.title = `Ch ${meta.num} · ${meta.title} — FRA`;

  const sections = [];
  const addSection = (id, label) => sections.push({id,label});

  function defBlock(d){
    return `<div class="def" id="${d.id || ''}">
      <div class="label">Definition</div>
      <div><span class="term">${d.term}</span> — ${d.body}</div>
    </div>`;
  }
  function formulaBlock(f){
    const expr = f.expr ? `<div class="expr">$$${f.expr}$$</div>` : '';
    const inline = f.inline ? `<div class="expr"><strong>${f.inline}</strong></div>` : '';
    return `<div class="formula" id="${f.id||''}">
      <div class="name">${f.name}</div>
      ${expr}${inline}
      <div class="when">${f.when || ''}</div>
    </div>`;
  }
  function hookBlock(h){
    return `<div class="hook"><div class="label">🧠 ${h.label || 'Memory hook'}</div>${h.body}</div>`;
  }
  function pitfallBlock(p){
    return `<div class="pitfall"><div class="label">⚠ Common mistake</div>${p}</div>`;
  }
  function exampleBlock(e, idx){
    const stepHtml = (e.steps||[]).map(s=>{
      const why = s.why ? `<div class="why">${s.why}</div>` : '';
      return `<div class="step">${s.what}${why}</div>`;
    }).join('');
    const altHtml = e.alt ? `<details class="collapsible"><summary>Alternative method</summary><div class="body">${e.alt}</div></details>` : '';
    const pitHtml = e.pitfall ? `<div class="pitfall" style="margin-top:.6rem"><div class="label">⚠ Pitfall</div>${e.pitfall}</div>` : '';
    return `<div class="example" id="ex-${idx}">
      <h4>Example ${idx+1}: ${e.title}</h4>
      <div>${e.problem}</div>
      ${e.hint ? `<details class="collapsible" style="margin:.7rem 0"><summary>Hint</summary><div class="body">${e.hint}</div></details>` : ''}
      <div style="margin-top:.7rem">${stepHtml}</div>
      <div class="answer">${e.answer}</div>
      ${altHtml}${pitHtml}
    </div>`;
  }

  function defsHtml(arr){
    if (!arr || !arr.length) return '';
    return `<h2 id="defs"><em>Key Definitions</em></h2>` + arr.map(defBlock).join('');
  }
  function formulasHtml(arr){
    if (!arr || !arr.length) return '';
    return `<h2 id="formulas"><em>Formulas, Rules &amp; Identities</em></h2>` + arr.map(formulaBlock).join('');
  }
  function derivationsHtml(arr){
    if (!arr || !arr.length) return '';
    let html = `<h2 id="derivations"><em>Derivations</em></h2>`;
    arr.forEach(d => { html += `<h3>${d.title}</h3>${d.body}`; });
    return html;
  }
  function examplesHtml(arr){
    if (!arr || !arr.length) return '';
    let html = `<h2 id="examples"><em>Worked Examples</em></h2>`;
    arr.forEach((e,i) => { html += exampleBlock(e,i); });
    return html;
  }
  function memoryHtml(arr){
    if (!arr || !arr.length) return '';
    let html = `<h2 id="memory"><em>Memory Hooks &amp; Pitfalls</em></h2>`;
    arr.forEach(item=>{
      if (item.kind==='pitfall') html += pitfallBlock(item.body);
      else html += hookBlock(item);
    });
    return html;
  }
  function connectionsHtml(c){
    if (!c) return '';
    return `<h2 id="connections"><em>Connections to other chapters</em></h2><div>${c}</div>`;
  }
  function questionsLinkHtml(){
    return `<h2 id="practice"><em>Practice this chapter</em></h2>
      <p>Now drill the concepts above. Each chapter has 30+ practice questions: MCQs with feedback, calculated questions with full step-by-step solutions, and the ability to mark questions as weak for later review.</p>
      <p><a class="btn" href="practice.html?id=${meta.id}">Start practice quiz →</a></p>`;
  }

  const intro = `
    <div class="chap-meta">Chapter ${meta.num}</div>
    <h1>${meta.title}</h1>
    <div class="intro-quote">${meta.blurb}</div>
    <h2 id="big-picture"><em>Big-picture intuition</em></h2>
    <div>${data.intro}</div>
  `;
  addSection('big-picture','Big picture');
  if (data.definitions) addSection('defs','Definitions');
  if (data.formulas) addSection('formulas','Formulas');
  if (data.derivations) addSection('derivations','Derivations');
  if (data.examples) addSection('examples','Worked examples');
  if (data.memory) addSection('memory','Memory hooks');
  if (data.connections) addSection('connections','Connections');
  addSection('practice','Practice');

  article.innerHTML = intro
    + defsHtml(data.definitions)
    + formulasHtml(data.formulas)
    + derivationsHtml(data.derivations)
    + examplesHtml(data.examples)
    + memoryHtml(data.memory)
    + connectionsHtml(data.connections)
    + questionsLinkHtml();

  // Sidebar
  let sb = `<h4>Chapter ${meta.num}</h4><ul>`;
  for (const s of sections) sb += `<li><a href="#${s.id}" data-tgt="${s.id}">${s.label}</a></li>`;
  sb += `</ul><h4>All chapters</h4><ul>`;
  for (const c of MANIFEST.chapters) {
    const a = c.id === meta.id ? ' class="active"' : '';
    const short = c.title.replace(/\([^)]+\)/g,'').replace(' & ',' &amp; ').trim().split(' (')[0];
    sb += `<li><a href="chapter.html?id=${c.id}"${a}>Ch ${c.num} · ${short}</a></li>`;
  }
  sb += `</ul>`;
  sidebar.innerHTML = sb;

  if (window.renderMathInElement) FRA.renderMath(article);

  // Active section highlight on scroll
  const ids = sections.map(s=>s.id);
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(en=>{
      if (en.isIntersecting){
        sidebar.querySelectorAll('a[data-tgt]').forEach(a=>{
          a.classList.toggle('active', a.dataset.tgt === en.target.id);
        });
      }
    });
  }, {rootMargin:'-30% 0px -55% 0px'});
  ids.forEach(i=>{ const el = document.getElementById(i); if (el) obs.observe(el); });
})();

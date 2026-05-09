// Mock exam engine — full 30-question paper with countdown timer.
window.MockEngine = (function(){
  function letter(i){ return String.fromCharCode(65 + i); }

  function pad2(n){ return String(n).padStart(2,'0'); }
  function fmtTime(sec){
    const m = Math.floor(sec/60), s = sec%60;
    return `${pad2(m)}:${pad2(s)}`;
  }

  function start(opts){
    // opts: { container, questions, durationSec, title }
    const root = opts.container;
    const qs = opts.questions.slice(); // do NOT shuffle within mock — keep paper order
    const answers = {}; // {qid: value}
    let i = 0;
    let remaining = opts.durationSec;
    let timerHandle = null;
    let submitted = false;

    function header(){
      return `<div class="quiz-bar">
        <div class="qprog">
          <div class="bar"><span style="width:${Math.round(100*(i+1)/qs.length)}%"></span></div>
          <div class="stat"><strong>${i+1}</strong> / ${qs.length}</div>
        </div>
        <div id="timer" class="timer">${fmtTime(remaining)}</div>
      </div>`;
    }

    function questionCard(q){
      const meta = (window.MANIFEST && MANIFEST.chapters || []).find(c => c.id === q.chap);
      const ch = meta ? `Ch ${meta.num}` : '';
      const tagBits = `<span class="badge ${q.diff||'med'}">${q.diff||'med'}</span>${ch?`<span class="badge exam">${ch}</span>`:''}`;
      let body = '';
      if (q.type === 'mcq'){
        const cur = answers[q.id];
        body = `<div class="opts">
          ${q.opts.map((o,idx)=>`<label data-idx="${idx}" class="${cur===idx?'selected':''}">
            <span class="letter">${letter(idx)}</span>
            <span>${o.t}</span>
          </label>`).join('')}
        </div>`;
      } else {
        const cur = answers[q.id] || '';
        body = `<div class="numeric-in">
          <input id="ansIn" type="text" inputmode="decimal" placeholder="Enter your answer" value="${cur}">
        </div>`;
      }
      return `<article class="qcard">
        <div class="qhead">
          <span class="qnum">Question ${i+1}</span> ${tagBits}
        </div>
        <div class="qstem">${q.stem}</div>
        ${body}
        <div class="qctrls">
          <button class="btn ghost" id="prevBtn" ${i===0?'disabled':''}>← Previous</button>
          <button class="btn" id="nextBtn">${i+1===qs.length?'Review answers →':'Next →'}</button>
        </div>
      </article>`;
    }

    function bind(q){
      document.getElementById('prevBtn').onclick = ()=>{ if (i>0){ i--; show(); } };
      document.getElementById('nextBtn').onclick = ()=>{
        if (i+1 === qs.length) showReview(); else { i++; show(); }
      };
      if (q.type === 'mcq'){
        const labs = root.querySelectorAll('.opts label');
        labs.forEach(lab=>{
          lab.onclick = ()=>{
            labs.forEach(l => l.classList.remove('selected'));
            lab.classList.add('selected');
            answers[q.id] = +lab.dataset.idx;
          };
        });
      } else {
        const input = document.getElementById('ansIn');
        input.addEventListener('input', e => { answers[q.id] = e.target.value; });
        input.addEventListener('keydown', e => { if (e.key==='Enter'){ document.getElementById('nextBtn').click(); } });
      }
    }

    function tick(){
      remaining -= 1;
      const t = document.getElementById('timer');
      if (t){
        t.textContent = fmtTime(Math.max(0,remaining));
        if (remaining < 600) t.classList.add('warn');
        if (remaining < 120) { t.classList.remove('warn'); t.classList.add('danger'); }
      }
      if (remaining <= 0){
        clearInterval(timerHandle);
        if (!submitted) submit();
      }
    }

    function showReview(){
      let html = `<div class="quiz-bar"><div class="qprog"><div class="stat"><strong>Review &amp; submit</strong></div></div><div id="timer" class="timer ${remaining<600?'warn':''}">${fmtTime(Math.max(0,remaining))}</div></div>`;
      html += `<div class="card" style="background:var(--paper);border:1px solid var(--line-soft);border-radius:12px;padding:1.5rem"><h3 style="margin:0 0 .8rem"><em>Answer summary</em></h3>`;
      html += `<table class="tbl"><thead><tr><th>#</th><th>Type</th><th>Your answer</th><th></th></tr></thead><tbody>`;
      qs.forEach((q,k)=>{
        const ans = answers[q.id];
        let display = '<span class="muted">— blank —</span>';
        if (q.type === 'mcq' && ans !== undefined) display = letter(ans);
        else if (q.type !== 'mcq' && ans !== '' && ans !== undefined) display = `<code>${ans}</code>`;
        html += `<tr><td>${k+1}</td><td>${q.type}</td><td>${display}</td><td><button class="btn sm ghost" data-go="${k}">Go to →</button></td></tr>`;
      });
      html += `</tbody></table></div>
        <div class="row-flex" style="justify-content:space-between;margin-top:1.25rem">
          <button class="btn ghost" id="backToQ">← Back to questions</button>
          <button class="btn" id="submitMock">Submit exam</button>
        </div>`;
      root.innerHTML = html;
      root.querySelectorAll('button[data-go]').forEach(btn=>{
        btn.onclick = ()=>{ i = +btn.dataset.go; show(); };
      });
      document.getElementById('backToQ').onclick = ()=>{ show(); };
      document.getElementById('submitMock').onclick = ()=>{
        if (confirm('Submit and grade your exam? You won\'t be able to change answers.')) submit();
      };
    }

    function gradeOne(q){
      const ans = answers[q.id];
      if (q.type === 'mcq'){
        if (ans === undefined) return { ok:false, blank:true };
        return { ok: !!q.opts[ans] && !!q.opts[ans].ok, picked:ans };
      } else {
        if (ans === '' || ans === undefined) return { ok:false, blank:true };
        return { ok: FRA.numericMatch(ans, q.ans, q.tol), userVal:ans };
      }
    }

    function submit(){
      submitted = true;
      clearInterval(timerHandle);
      const mcqs = qs.filter(q=>q.type==='mcq');
      const longs = qs.filter(q=>q.type!=='mcq');
      let mcqCorrect = 0, longCorrect = 0, blanks = 0;
      qs.forEach(q => {
        const g = gradeOne(q);
        if (g.blank) blanks++;
        if (g.ok && q.type==='mcq') mcqCorrect++;
        else if (g.ok) longCorrect++;
        FRA.progress.record(q.id, g.ok);
      });
      const total = qs.length;
      const correct = mcqCorrect + longCorrect;
      const pct = Math.round(100*correct/total);

      let html = `<div class="score-card">
        <div class="num"><em>${pct}%</em></div>
        <div class="lbl">${correct} of ${total} correct · ${mcqCorrect}/${mcqs.length} MCQ · ${longCorrect}/${longs.length} calc</div>
        <p class="muted" style="margin-top:.7rem">${blanks ? blanks + ' question(s) left blank.' : 'No blanks. Well done.'}</p>
      </div>`;
      html += `<h3 style="margin-top:2rem"><em>Question-by-question review</em></h3>`;
      qs.forEach((q,k)=>{
        const g = gradeOne(q);
        const banner = g.ok ? '<span class="badge easy">✓ correct</span>' : (g.blank?'<span class="badge med">— blank —</span>':'<span class="badge hard">✗ wrong</span>');
        html += `<article class="qcard">
          <div class="qhead"><span class="qnum">Q${k+1}</span>${banner}</div>
          <div class="qstem">${q.stem}</div>`;
        if (q.type === 'mcq'){
          html += `<div class="opts">${q.opts.map((o,idx)=>{
            const cls = o.ok ? 'correct' : (g.picked===idx ? 'wrong' : '');
            return `<label class="locked ${cls}"><span class="letter">${letter(idx)}</span><span>${o.t}</span></label>`;
          }).join('')}</div>`;
        } else {
          html += `<div class="muted" style="margin:.5rem 0">Your answer: <code>${answers[q.id] || '— blank —'}</code> · Model answer: <strong>${FRA.fmt(q.ans, q.dp ?? 2)}</strong></div>`;
        }
        if (q.expl){
          html += `<details class="collapsible" style="margin-top:.75rem"><summary>Show solution</summary><div class="body">${q.expl}${q.pitfall?`<div class="pitfall" style="margin-top:.5rem"><div class="label">⚠ Pitfall</div>${q.pitfall}</div>`:''}</div></details>`;
        }
        if (q.mark && q.mark.length){
          html += `<details class="collapsible" style="margin-top:.5rem"><summary>Mark scheme — tick what you got</summary><div class="body">${q.mark.map(m=>`<label class="ms-check"><input type="checkbox"> <span>${m}</span></label>`).join('')}</div></details>`;
        }
        html += `</article>`;
      });
      html += `<div class="row-flex" style="justify-content:center;margin-top:1.5rem">
        <a class="btn" href="mocks.html">← Back to mocks</a>
      </div>`;
      root.innerHTML = html;
      FRA.renderMath(root);
    }

    function show(){
      const q = qs[i];
      root.innerHTML = header() + questionCard(q);
      FRA.renderMath(root);
      bind(q);
      window.scrollTo({top:0, behavior:'smooth'});
    }

    show();
    timerHandle = setInterval(tick, 1000);
  }

  return { start };
})();

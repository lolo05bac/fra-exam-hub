// Quiz engine. Renders one question at a time with prev/next, instant feedback,
// progress bar, weak-mark, mark scheme for long answers. Used by practice and master.
window.QuizEngine = (function(){
  function letter(i){ return String.fromCharCode(65 + i); }

  function render(opts){
    // opts: { container, questions, title, subtitle, onComplete, mode:'practice'|'sudden' }
    const root = opts.container;
    const qs = (opts.shuffle === false) ? opts.questions.slice() : FRA.shuffle(opts.questions);
    if (!qs.length){
      root.innerHTML = `<div class="empty">No questions match these filters.</div>`;
      return;
    }
    let i = 0;
    let score = { correct: 0, attempted: 0 };

    function progressBar(){
      const pct = Math.round(100 * (i) / qs.length);
      return `<div class="qprog">
        <div class="bar"><span style="width:${pct}%"></span></div>
        <div class="stat"><strong>${i+1}</strong> / ${qs.length}</div>
      </div>`;
    }

    function head(){
      return `<div class="quiz-bar">
        ${progressBar()}
        <div class="stat sans">Score: <strong>${score.correct}</strong> / ${score.attempted}</div>
      </div>`;
    }

    function questionCard(q){
      const tagBits = [];
      tagBits.push(`<span class="badge ${q.diff || 'med'}">${q.diff || 'med'}</span>`);
      if (q.src) tagBits.push(`<span class="badge src">${q.src}</span>`);
      if (q.chap) {
        const meta = (window.MANIFEST && MANIFEST.chapters || []).find(c => c.id === q.chap);
        if (meta) tagBits.push(`<span class="badge exam">Ch ${meta.num}</span>`);
      }

      const isWeak = FRA.progress.isWeak(q.id);
      let body = '';
      if (q.type === 'mcq'){
        body = `<div class="opts" id="optList">
          ${q.opts.map((o, idx) => `
            <label data-idx="${idx}">
              <span class="letter">${letter(idx)}</span>
              <span>${o.t}</span>
            </label>`).join('')}
        </div>`;
      } else if (q.type === 'numeric'){
        body = `<div class="numeric-in">
          <input id="numIn" type="text" inputmode="decimal" placeholder="Type your answer (numbers only)" autocomplete="off">
          <button class="btn" id="checkNum">Check</button>
        </div>`;
      } else { // long
        body = `<div>
          <textarea id="longIn" rows="4" style="width:100%" placeholder="Sketch your method, then reveal the model answer."></textarea>
          <div class="row-flex" style="margin-top:.5rem">
            <button class="btn" id="revealLong">Reveal model answer</button>
          </div>
        </div>`;
      }

      return `<article class="qcard">
        <div class="qhead">
          <span class="qnum">Question ${i+1}</span>
          ${tagBits.join('')}
          <span style="flex:1"></span>
          <button class="weak-pill ${isWeak?'active':''}" id="weakBtn">${isWeak?'★ weak':'☆ mark weak'}</button>
        </div>
        <div class="qstem">${q.stem}</div>
        ${body}
        <div id="feedback"></div>
        <div class="qctrls">
          <button class="btn ghost" id="prevBtn" ${i===0?'disabled':''}>← Previous</button>
          <button class="btn" id="nextBtn">${i+1===qs.length?'Finish ✓':'Next →'}</button>
        </div>
      </article>`;
    }

    function showFinal(){
      const pct = qs.length ? Math.round(100 * score.correct / qs.length) : 0;
      const message = pct >= 80 ? 'Excellent — you know this chapter cold.'
        : pct >= 60 ? 'Solid. Review the ones you got wrong.'
        : 'Keep going — re-read the chapter and try again.';
      root.innerHTML = `
        <div class="score-card">
          <div class="num"><em>${pct}%</em></div>
          <div class="lbl">Final score · ${score.correct} of ${qs.length} correct</div>
          <p class="muted" style="margin-top:1rem">${message}</p>
          <div class="row-flex" style="justify-content:center;margin-top:1.5rem">
            <button class="btn" id="retry">Try again</button>
            <button class="btn ghost" id="back">Back</button>
          </div>
        </div>`;
      document.getElementById('retry').onclick = ()=>{ score={correct:0,attempted:0}; i=0; show(); };
      document.getElementById('back').onclick  = ()=> history.back();
      if (opts.onComplete) opts.onComplete(score);
    }

    function attemptResolve(q, ok, userValue){
      const fb = document.getElementById('feedback');
      const okHtml = `<div class="qfeedback ok">
        <div class="head ok">✓ Correct</div>
        ${q.expl ? `<div>${q.expl}</div>` : ''}
        ${q.alt ? `<details><summary>Alternative method</summary><div style="margin-top:.4rem">${q.alt}</div></details>` : ''}
      </div>`;
      const noHtml = `<div class="qfeedback no">
        <div class="head no">✗ Not quite</div>
        ${q.type==='numeric' ? `<div><strong>Correct answer:</strong> ${FRA.fmt(q.ans, q.dp ?? 2)}</div>` : ''}
        ${q.expl ? `<div style="margin-top:.4rem">${q.expl}</div>` : ''}
        ${q.pitfall ? `<div class="pitfall" style="margin-top:.5rem"><div class="label">⚠ Common mistake</div>${q.pitfall}</div>` : ''}
      </div>`;
      fb.innerHTML = ok ? okHtml : noHtml;
      FRA.renderMath(fb);
      score.attempted += 1;
      if (ok) score.correct += 1;
      FRA.progress.record(q.id, ok);
      // Refresh top bar score
      const topBar = root.querySelector('.quiz-bar');
      if (topBar) topBar.outerHTML = head();
      // Sudden-death mode
      if (opts.mode === 'sudden' && !ok) {
        setTimeout(()=>{
          if (confirm('Sudden death: you got that wrong. Restart?')) {
            score={correct:0,attempted:0}; i=0; show();
          } else { showFinal(); }
        }, 400);
      }
    }

    function bind(q){
      // Weak toggle
      document.getElementById('weakBtn').onclick = (e)=>{
        const isWeak = FRA.progress.isWeak(q.id);
        FRA.progress.markWeak(q.id, !isWeak);
        e.target.classList.toggle('active', !isWeak);
        e.target.textContent = !isWeak ? '★ weak' : '☆ mark weak';
      };
      // Prev/Next
      document.getElementById('prevBtn').onclick = ()=>{ if (i>0){ i--; show(); } };
      document.getElementById('nextBtn').onclick = ()=>{
        if (i+1 === qs.length) showFinal(); else { i++; show(); }
      };
      if (q.type === 'mcq'){
        const labels = root.querySelectorAll('#optList label');
        labels.forEach(lab => {
          lab.onclick = ()=>{
            if (lab.classList.contains('locked')) return;
            const idx = +lab.dataset.idx;
            const ok = !!q.opts[idx].ok;
            labels.forEach((l, j)=>{
              l.classList.add('locked');
              if (q.opts[j].ok) l.classList.add('correct');
              else if (j === idx) l.classList.add('wrong');
            });
            attemptResolve(q, ok);
          };
        });
      } else if (q.type === 'numeric'){
        document.getElementById('checkNum').onclick = ()=>{
          const val = document.getElementById('numIn').value;
          const ok = FRA.numericMatch(val, q.ans, q.tol);
          attemptResolve(q, ok, val);
          document.getElementById('numIn').disabled = true;
          document.getElementById('checkNum').disabled = true;
        };
        document.getElementById('numIn').addEventListener('keydown', (e)=>{
          if (e.key === 'Enter') document.getElementById('checkNum').click();
        });
      } else { // long
        document.getElementById('revealLong').onclick = ()=>{
          const fb = document.getElementById('feedback');
          fb.innerHTML = `<div class="qfeedback ok">
            <div class="head ok">📋 Model answer &amp; mark scheme</div>
            <div>${q.expl}</div>
            ${q.mark && q.mark.length ? `<div style="margin-top:.7rem"><strong>Mark scheme</strong> (tick what you got)
              ${q.mark.map((m,k)=>`<label class="ms-check"><input type="checkbox"> <span>${m}</span></label>`).join('')}
            </div>` : ''}
            ${q.pitfall ? `<div class="pitfall" style="margin-top:.5rem"><div class="label">⚠ Pitfall</div>${q.pitfall}</div>` : ''}
            <div class="row-flex" style="margin-top:.7rem">
              <button class="btn sm success" id="gotItRight">I got this right</button>
              <button class="btn sm ghost" id="gotItWrong">I got this wrong</button>
            </div>
          </div>`;
          FRA.renderMath(fb);
          document.getElementById('gotItRight').onclick = ()=>{ attemptResolve(q, true); };
          document.getElementById('gotItWrong').onclick = ()=>{ attemptResolve(q, false); };
        };
      }
    }

    function show(){
      const q = qs[i];
      root.innerHTML = head() + questionCard(q);
      FRA.renderMath(root);
      bind(q);
      window.scrollTo({top: 0, behavior: 'smooth'});
    }

    // Keyboard shortcuts
    function onKey(e){
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      if (e.key === 'j' || e.key === 'ArrowRight') {
        const btn = document.getElementById('nextBtn'); if (btn) btn.click();
      } else if (e.key === 'k' || e.key === 'ArrowLeft') {
        const btn = document.getElementById('prevBtn'); if (btn) btn.click();
      } else if (e.key === ' ') {
        const btn = document.getElementById('revealLong'); if (btn){ e.preventDefault(); btn.click(); }
      }
    }
    document.addEventListener('keydown', onKey);

    show();
  }

  return { render };
})();

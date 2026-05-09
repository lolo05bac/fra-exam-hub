// Shared utilities: theme, progress, header, math rendering, helpers
(function(){
  // ---- Theme ----
  const THEME_KEY = 'fra:theme';
  const saved = localStorage.getItem(THEME_KEY) || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  document.documentElement.dataset.theme = saved;
  window.toggleTheme = function(){
    const cur = document.documentElement.dataset.theme;
    const next = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    localStorage.setItem(THEME_KEY, next);
    const btn = document.getElementById('themeBtn');
    if (btn) btn.textContent = next === 'dark' ? '☀ Light' : '☾ Dark';
  };
  document.addEventListener('DOMContentLoaded', ()=>{
    const btn = document.getElementById('themeBtn');
    if (btn) btn.textContent = document.documentElement.dataset.theme === 'dark' ? '☀ Light' : '☾ Dark';
  });

  // ---- Progress storage ----
  const PROG_KEY = 'fra:progress:v1';
  function loadProgress(){
    try { return JSON.parse(localStorage.getItem(PROG_KEY) || '{}'); }
    catch (e) { return {}; }
  }
  function saveProgress(p){ localStorage.setItem(PROG_KEY, JSON.stringify(p)); }
  window.FRA = window.FRA || {};
  window.FRA.progress = {
    load: loadProgress,
    save: saveProgress,
    record(qid, ok){
      const p = loadProgress();
      p.attempts = p.attempts || {};
      const a = p.attempts[qid] || { tries:0, correct:0, lastAt:null };
      a.tries += 1;
      if (ok) a.correct += 1;
      a.lastAt = Date.now();
      p.attempts[qid] = a;
      saveProgress(p);
      return a;
    },
    markWeak(qid, on){
      const p = loadProgress();
      p.weak = p.weak || {};
      if (on) p.weak[qid] = true; else delete p.weak[qid];
      saveProgress(p);
    },
    isWeak(qid){
      const p = loadProgress();
      return !!(p.weak && p.weak[qid]);
    },
    chapterStats(qids){
      const p = loadProgress();
      let attempted = 0, correct = 0;
      for (const id of qids) {
        const a = p.attempts && p.attempts[id];
        if (a){ attempted++; if (a.correct > 0) correct++; }
      }
      return { attempted, correct, total: qids.length };
    },
    reset(){ localStorage.removeItem(PROG_KEY); }
  };

  // ---- Math rendering ----
  window.FRA.renderMath = function(root){
    if (!window.renderMathInElement) return;
    renderMathInElement(root || document.body, {
      delimiters:[
        {left:"$$", right:"$$", display:true},
        {left:"\\(", right:"\\)", display:false},
        {left:"\\[", right:"\\]", display:true}
      ],
      throwOnError:false,
      output: 'html'
    });
  };

  // ---- Helpers ----
  window.FRA.shuffle = function(arr){
    const a = arr.slice();
    for (let i=a.length-1;i>0;i--){
      const j = Math.floor(Math.random()*(i+1));
      [a[i],a[j]]=[a[j],a[i]];
    }
    return a;
  };

  window.FRA.fmt = function(n, dp=2){
    if (n === null || n === undefined || isNaN(n)) return '—';
    return Number(n).toLocaleString(undefined,{minimumFractionDigits:dp, maximumFractionDigits:dp});
  };

  // Numeric matcher with tolerance handling
  window.FRA.numericMatch = function(user, expected, tolerance){
    if (user === '' || user === null || user === undefined) return false;
    const u = parseFloat(String(user).replace(/[, $€%]/g,'').trim());
    if (isNaN(u)) return false;
    if (typeof expected !== 'number') return false;
    const tol = tolerance !== undefined ? tolerance : Math.max(0.01, Math.abs(expected) * 0.01);
    return Math.abs(u - expected) <= tol;
  };
})();

// Master question bank loader.
// All questions are stored in per-chapter files (q_chXX.js) and merged here.
// Each question:
//   { id, chap, type:'mcq'|'numeric'|'long', diff:'easy'|'med'|'hard'|'exam',
//     src:'past-exam-2024'|'final-2025'|'mcq-bank'|'midterm'|'practice'|'authored',
//     stem (HTML), opts:[{t, ok:bool}]?, ans:number?, expl, hint?, pitfall?, alt?,
//     mark? (long-answer mark scheme as array of strings) }
window.QUESTIONS = [];
window.QBANK = {
  add(arr){ window.QUESTIONS.push(...arr); },
  byChapter(id){ return window.QUESTIONS.filter(q => q.chap === id); },
  byDiff(d){ return window.QUESTIONS.filter(q => q.diff === d); },
  weak(){
    const p = (window.FRA && FRA.progress.load()) || {};
    return window.QUESTIONS.filter(q => (p.weak && p.weak[q.id]) ||
      (p.attempts && p.attempts[q.id] && p.attempts[q.id].correct === 0));
  },
  byIds(ids){ const set = new Set(ids); return window.QUESTIONS.filter(q => set.has(q.id)); }
};

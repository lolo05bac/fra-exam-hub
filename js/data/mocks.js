/* Mock exam definitions. Each mock = ordered array of question IDs from the bank.
   Format mirrors the real exam: 15 MCQ + 15 calculated, 90 min. */
window.MOCKS = [
{
  id:'mock-1',
  title:'Mock Exam 1 · "Cold first attempt"',
  blurb:'Balanced spread across all chapters, slight emphasis on Ch 5, 11, 12 (the heaviest exam topics). Take this before you feel ready.',
  durationSec: 90 * 60,
  questions: [
    // 15 MCQ (mix of every chapter)
    'ch1_2-009','ch1_2-010','ch1_2-008','ch3-006','ch4-001','ch5-001','ch5-003','ch6-002','ch7-001',
    'ch9-005','ch10-001','ch11-001','ch11-003','ch12-001','ch4-006',
    // 15 calculated
    'ch1_2-021','ch3-008','ch4-014','ch5-014','ch5-019','ch6-014','ch6-016','ch7-013','ch9-014',
    'ch11-014','ch11-016','ch11-018','ch12-013','ch12-015','ch12-017'
  ]
},
{
  id:'mock-2',
  title:'Mock Exam 2 · "Cash flow heavy"',
  blurb:'Emphasises Ch 11 (Cash Flows) and Ch 12 (Ratios). Build confidence on the indirect-method reconciliation.',
  durationSec: 90 * 60,
  questions: [
    'ch1_2-006','ch3-012','ch4-005','ch5-006','ch6-008','ch7-006','ch7-009','ch9-003','ch10-002',
    'ch11-002','ch11-004','ch11-006','ch11-007','ch12-003','ch12-005',
    'ch3-024','ch4-013','ch5-015','ch6-013','ch7-014','ch9-013','ch11-013','ch11-015','ch11-017',
    'ch11-019','ch12-014','ch12-016','ch12-018','ch12-020','ch12-019'
  ]
},
{
  id:'mock-3',
  title:'Mock Exam 3 · "Bonds and equity"',
  blurb:'Heavier on Ch 7 (Liabilities/Bonds) and Ch 9 (Equity). The exam loves these chapters for the calculated questions.',
  durationSec: 90 * 60,
  questions: [
    'ch1_2-011','ch3-001','ch4-002','ch5-002','ch6-005','ch7-002','ch7-003','ch7-005','ch9-001',
    'ch9-006','ch9-008','ch11-005','ch12-002','ch12-007','ch12-008',
    'ch1_2-022','ch4-015','ch5-016','ch6-015','ch7-015','ch7-016','ch7-017','ch9-015','ch9-016',
    'ch9-017','ch11-020','ch12-021','ch12-022','ch6-017','ch3-021'
  ]
},
{
  id:'mock-4',
  title:'Mock Exam 4 · "Final prep"',
  blurb:'Hardest mock — pulls the toughest questions across every chapter. Take this 24-48h before exam day.',
  durationSec: 90 * 60,
  questions: [
    'ch1_2-012','ch3-020','ch4-007','ch5-005','ch6-006','ch7-008','ch7-010','ch9-007','ch10-003',
    'ch11-008','ch11-009','ch11-010','ch12-004','ch12-006','ch12-009',
    'ch1_2-027','ch3-030','ch4-016','ch4-017','ch5-017','ch5-018','ch6-018','ch7-018','ch9-018',
    'ch11-021','ch11-022','ch12-023','ch12-024','ch12-025','ch12-026'
  ]
}
];

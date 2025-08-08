// lib/submissionStore.ts
export interface Submission {
  problemId: string;
  id: string;
  code: string;
  languageId: number;
  languageName: string;
  output: string;
  timestamp: string;
}

const STORAGE_KEY = 'code_submissions';

export function saveSubmission(submission: Submission) {
  const existing = getSubmissions();
  existing.unshift(submission); // Add to top
  localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
}

export function getSubmissions(): Submission[] {
  if (typeof window === 'undefined') return [];
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : [];
}

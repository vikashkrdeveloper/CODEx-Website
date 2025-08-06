// lib/judgeApi.ts
const JUDGE0_URL = 'https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=true&wait=true';

const headers = {
  'content-type': 'application/json',
  'X-RapidAPI-Key': '<YOUR_RAPID_API_KEY>',
  'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
};

export async function runCode(sourceCode: string, languageId: number, stdin = '') {
  const encodedCode = btoa(sourceCode); // base64 encode
  const encodedStdin = btoa(stdin);

  const response = await fetch(JUDGE0_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      source_code: encodedCode,
      language_id: languageId,
      stdin: encodedStdin,
    }),
  });

  const result = await response.json();
  return result;
}

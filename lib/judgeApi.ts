// lib/judgeApi.ts
const JUDGE0_URL = 'https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=true&wait=true';

const RAPID_API_KEY = process.env.RAPID_API_KEY;
if (!RAPID_API_KEY) {
  throw new Error('RAPID_API_KEY environment variable is not set.');
}

const headers = {
  'content-type': 'application/json',
  'X-RapidAPI-Key': RAPID_API_KEY,
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

  if (!response.ok) {
    let errorBody;
    try {
      errorBody = await response.json();
    } catch (e) {
      errorBody = await response.text();
    }
    throw new Error(`Judge0 API error: ${response.status} ${response.statusText} - ${JSON.stringify(errorBody)}`);
  }
  const result = await response.json();
  return result;
}

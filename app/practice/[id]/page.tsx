'use client';

import { useState } from 'react';
import CodeEditor from '@/components/practice/CodeEditor';
import { runCode } from '@/lib/judgeApi';

export default function ProblemPage() {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [languageId, setLanguageId] = useState(54); // default C++

  const handleRun = async () => {
    setIsRunning(true);
    setOutput('Running...');

    try {
      const result = await runCode(code, languageId);
      if (result.stderr) {
        setOutput(atob(result.stderr));
      } else if (result.compile_output) {
        setOutput(atob(result.compile_output));
      } else {
        setOutput(atob(result.stdout));
      }
    } catch (err) {
      console.error(err);
      setOutput('Error running code.');
    }

    setIsRunning(false);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white px-6 py-12 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Problem #1</h1>

      <section className="bg-gray-900 border border-gray-700 rounded-xl p-6 shadow-md mb-6">
        <h2 className="text-2xl font-semibold text-yellow-400 mb-4">Problem Statement</h2>
        <p>
          Given an array of integers, return indices of the two numbers such that they add up to a specific target.
        </p>
      </section>

      <section className="bg-gray-900 border border-gray-700 rounded-xl p-6 shadow-md">
        <div className="mb-4">
          <label className="mr-2 font-semibold">Language:</label>
          <select
            className="bg-gray-800 border border-gray-600 text-white px-3 py-1 rounded"
            value={languageId}
            onChange={(e) => setLanguageId(Number(e.target.value))}
          >
            <option value={54}>C++</option>
            <option value={71}>Python</option>
            <option value={62}>Java</option>
            <option value={63}>JavaScript</option>
          </select>
        </div>

        <CodeEditor language={languageMap[languageId]} value={code} onChange={(value) => setCode(value || '')} />

        <div className="mt-4 flex gap-3">
          <button
            onClick={handleRun}
            disabled={isRunning}
            className="bg-yellow-400 text-black font-semibold rounded-md px-6 py-2 hover:bg-yellow-300 transition disabled:opacity-50"
          >
            {isRunning ? 'Running...' : 'Run'}
          </button>

          <button
            disabled
            className="bg-green-600 text-white font-semibold rounded-md px-6 py-2 opacity-50 cursor-not-allowed"
          >
            Submit (Coming Soon)
          </button>
        </div>

        <div className="mt-4 p-4 bg-gray-800 rounded-md min-h-[80px]">
          <h3 className="text-yellow-400 mb-2">Output:</h3>
          <pre>{output}</pre>
        </div>
      </section>
    </main>
  );
}

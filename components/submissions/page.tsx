'use client';

import { getSubmissions } from '@/lib/ubmissionStore';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function SubmissionsPage() {
  const [subs, setSubs] = useState([]);

  useEffect(() => {
    setSubs(getSubmissions());
  }, []);

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-yellow-400">Your Submissions</h1>

      {subs.length === 0 ? (
        <p className="text-gray-400">No submissions yet. Run some code first.</p>
      ) : (
        <div className="space-y-4">
          {subs.map((sub: any) => (
            <div key={sub.id} className="bg-gray-900 border border-gray-700 p-4 rounded-md shadow">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-400">{sub.timestamp}</span>
                <span className="text-sm font-medium text-yellow-300">{sub.languageName}</span>
              </div>
              <pre className="text-sm bg-gray-800 p-2 rounded mb-2 overflow-x-auto">
                {sub.code}
              </pre>
              <div>
                <strong>Output:</strong>
                <pre className="text-green-400 bg-gray-800 p-2 mt-1 rounded overflow-x-auto">{sub.output}</pre>
              </div>
            </div>
          ))}
        </div>
      )}

      <Link href="/practice/1" className="inline-block mt-6 text-yellow-400 hover:underline">
        ← Back to Practice
      </Link>
    </main>
  );
}

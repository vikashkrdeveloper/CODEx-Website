'use client';

import React from 'react';

const contributors = [
  { name: 'Ashish Kumar', contributions: 28 },
  { name: 'Rajesh Kumar', contributions: 22 },
  { name: 'Sandeep Kumar', contributions: 17 },
  { name: 'Ayush Kumar', contributions: 14 },
  { name: 'Raushan Kumar', contributions: 12 },
];

export default function Leaderboard() {
  const sorted = contributors.sort((a, b) => b.contributions - a.contributions);

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-10">🏆 CODEx Contributor Leaderboard</h1>

      <div className="max-w-2xl mx-auto space-y-4">
        {sorted.map((person, index) => (
          <div
            key={index}
            className="flex justify-between items-center p-4 rounded-xl transition shadow-md border bg-gray-900 border-gray-700 hover:border-yellow-400 hover:shadow-yellow-500/30"
          >
            <div className="flex items-center gap-4">
              <span className="text-2xl font-bold text-yellow-400">#{index + 1}</span>
              <span className="text-lg">{person.name}</span>
            </div>
            <span className="font-medium text-yellow-300">
              {person.contributions} Contributions
            </span>
          </div>
        ))}
      </div>

      <p className="mt-10 text-center text-sm text-gray-400">
        🚀 Keep contributing to see your name up here!
      </p>
    </main>
  );
}

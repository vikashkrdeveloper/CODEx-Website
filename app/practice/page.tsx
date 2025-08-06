'use client';

import ProblemCard from "@/components/practice/ProblemCard";

const problems = [
  { id: '1', title: 'Two Sum', difficulty: 'Easy', tags: ['Array', 'HashMap'] },
  { id: '2', title: 'Longest Substring Without Repeating Characters', difficulty: 'Medium', tags: ['String', 'Sliding Window'] },
  { id: '3', title: 'Median of Two Sorted Arrays', difficulty: 'Hard', tags: ['Binary Search', 'Divide and Conquer'] },
];

export default function PracticeHome() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-10">📝 Practice Problems</h1>

      <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2">
        {problems.map((problem) => (
          <ProblemCard key={problem.id} {...problem} />
        ))}
      </div>
    </main>
  );
}

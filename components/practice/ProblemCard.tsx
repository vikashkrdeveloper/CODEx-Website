
'use client';
import React from 'react';
import Link from 'next/link';

interface ProblemCardProps {
  id: string;
  title: string;
  difficulty: string;
  tags: string[];
}

export default function ProblemCard({ id, title, difficulty, tags }: ProblemCardProps) {
  return (
    <Link
      href={`/practice/${id}`}
      className="block bg-gray-900 border border-gray-700 rounded-xl p-6 shadow-md hover:border-yellow-400 hover:shadow-yellow-500/30 transition"
    >
      <h2 className="text-xl font-bold text-yellow-400 mb-2">{title}</h2>
      <p className="text-gray-400 mb-2">{difficulty}</p>
      <div className="text-yellow-300 text-sm">{tags.join(', ')}</div>
    </Link>
  );
}

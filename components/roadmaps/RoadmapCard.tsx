"use client";
import React from "react";

interface RoadmapCardProps {
  title: string;
  description: string;
  steps: string[];
}

export default function RoadmapCard({ title, description, steps }: RoadmapCardProps) {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 p-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-blue-500/40 transition duration-300">
      <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
      <p className="text-gray-400 mb-4">{description}</p>
      <ol className="list-decimal list-inside space-y-2 text-gray-300">
        {steps.map((step, index) => (
          <li key={index} className="hover:text-blue-400 transition duration-200">
            {step}
          </li>
        ))}
      </ol>
    </div>
  );
}

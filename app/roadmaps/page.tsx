import React from "react";
import RoadmapCard from "@/components/roadmaps/RoadmapCard";

export default function RoadmapsPage() {
  const roadmaps = [
    {
      title: "DSA Roadmap",
      description: "Master data structures & algorithms for competitive programming and interviews.",
      steps: [
        "Learn basic syntax in C++/Java/Python",
        "Arrays & Strings",
        "Recursion & Backtracking",
        "Linked List, Stack, Queue",
        "Trees & Graphs",
        "Dynamic Programming",
        "Advanced Topics & Mock Contests",
      ],
    },
    {
      title: "Web Development Roadmap",
      description: "Full-stack MERN development path from beginner to pro.",
      steps: [
        "HTML, CSS, JavaScript Basics",
        "React.js Fundamentals",
        "Backend with Node.js & Express",
        "MongoDB Database",
        "Authentication & Authorization",
        "Deploy Projects",
        "Build Portfolio & Apply",
      ],
    },
    {
      title: "AI/ML Roadmap",
      description: "Get started with artificial intelligence & machine learning.",
      steps: [
        "Python & Libraries (NumPy, Pandas)",
        "Data Visualization",
        "Statistics & Probability",
        "Machine Learning Models",
        "Deep Learning Basics",
        "Build AI Projects",
        "Kaggle Competitions",
      ],
    },
    {
      title: "Competitive Programming Roadmap",
      description: "For those aiming for ICPC, Codeforces, or LeetCode mastery.",
      steps: [
        "Learn DSA fundamentals",
        "Master basic math & number theory",
        "Binary Search & Greedy",
        "Graph Theory",
        "Dynamic Programming",
        "Advanced Algorithms",
        "Participate in Regular Contests",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-12 px-6">
      <h1 className="text-4xl font-extrabold text-center text-white mb-10">
        🚀 Learning Roadmaps
      </h1>
      <div className="grid md:grid-cols-2 gap-8">
        {roadmaps.map((roadmap, index) => (
          <RoadmapCard
            key={index}
            title={roadmap.title}
            description={roadmap.description}
            steps={roadmap.steps}
          />
        ))}
      </div>
    </div>
  );
}

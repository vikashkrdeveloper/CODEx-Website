"use client";
import React, { useState } from "react";

const projects = [
  {
    name: "CODEx Website",
    description: "The official website for the CODEX club.",
    techStack: ["Next.js", "Tailwind CSS"],
    github: "https://github.com/codex-club/website",
    type: "frontend",
  },
  {
    name: "Backend API Starter",
    description: "A boilerplate Node.js backend API setup.",
    techStack: ["Node.js", "Express", "MongoDB"],
    github: "https://github.com/codex-club/backend-starter",
    type: "backend",
  },
  {
    name: "Portfolio Generator",
    description: "A React app to generate stylish developer portfolios.",
    techStack: ["React", "Vite", "Tailwind CSS"],
    github: "https://github.com/codex-club/portfolio-generator",
    type: "frontend",
  },
];

export default function OpenSourceProjects() {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.type === filter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-10">
        🚀 CODEx Open Source Projects
      </h1>

      <div className="flex justify-center gap-4 mb-8">
        {[
          { label: "All", value: "all" },
          { label: "Frontend", value: "frontend" },
          { label: "Backend", value: "backend" },
        ].map((btn) => (
          <button
            key={btn.value}
            onClick={() => setFilter(btn.value)}
            className={`px-4 py-2 rounded-full font-medium transition ${
              filter === btn.value ? "bg-yellow-400 text-black" : "bg-gray-700"
            }`}
          >
            {btn.label}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <div
            key={project.name}
            className="bg-gray-900 border border-gray-700 rounded-2xl p-6 hover:border-yellow-400 transition shadow-md hover:shadow-yellow-500/30"
          >
            <h2 className="text-2xl font-semibold mb-2">{project.name}</h2>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <p className="mb-2">
              <span className="font-semibold text-yellow-300">Tech Stack:</span>{" "}
              {project.techStack.join(", ")}
            </p>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 hover:underline"
            >
              🌟 GitHub Repository
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

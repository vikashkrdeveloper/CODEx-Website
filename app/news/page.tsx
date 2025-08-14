"use client";

import { useEffect, useState } from "react";
import Image from "next/image"; // ✅ Import Next.js Image

interface Article {
  id: number;
  title: string;
  url: string;
  description?: string;
  cover_image?: string;
}

export default function NewsPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dev.to/api/articles?per_page=9&top=1")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching news:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-8">
        📰 Tech News & Updates
      </h1>

      {loading ? (
        <p className="text-center text-gray-400">Loading latest news...</p>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <a
              key={article.id}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transform transition-all duration-300"
            >
              {article.cover_image && (
                <div className="relative w-full h-48">
                  <Image
                    src={article.cover_image}
                    alt={article.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              )}
              <div className="p-4">
                <h2 className="text-xl font-semibold">{article.title}</h2>
                {article.description && (
                  <p className="mt-2 text-gray-400 text-sm">
                    {article.description.slice(0, 100)}...
                  </p>
                )}
                <span className="mt-3 inline-block text-blue-400 hover:underline text-sm">
                  Read More →
                </span>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

'use client';

import React from 'react';

interface ImageCardProps {
  src: string;
  alt: string;
  title?: string;
}

export default function ImageCard({ src, alt, title }: ImageCardProps) {
  return (
    <div className="rounded-xl overflow-hidden border border-gray-700 hover:border-yellow-400 transition transform hover:scale-105 shadow-md hover:shadow-yellow-500/20">
      <img src={src} alt={alt} className="w-full h-60 object-cover" />
      {title && (
        <div className="bg-gray-900 text-gray-200 p-2 text-center text-sm">
          {title}
        </div>
      )}
    </div>
  );
}

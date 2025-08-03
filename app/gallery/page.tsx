'use client';

import ImageCard from "@/components/gallery/ImageCard";

const galleryImages = [
  {
    src: 'https://source.unsplash.com/random/800x600/?coding,team',
    alt: 'Hackathon 2024',
    title: 'Hackathon 2024',
  },
  {
    src: 'https://source.unsplash.com/random/800x601/?developers,event',
    alt: 'Web Dev Workshop',
    title: 'Web Dev Workshop',
  },
  {
    src: 'https://source.unsplash.com/random/800x602/?community,coding',
    alt: 'CODEx Meet 2025',
    title: 'CODEx Meet 2025',
  },
  {
    src: 'https://source.unsplash.com/random/800x603/?hackers,group',
    alt: 'Open Source Sprint',
    title: 'Open Source Sprint',
  },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-10">🖼️ CODEx Event Gallery</h1>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {galleryImages.map((img, index) => (
          <ImageCard key={index} {...img} />
        ))}
      </div>
    </main>
  );
}

'use client';

import ProtectedRoute from '@/components/admin/ProtectedRoute';
import Link from 'next/link';

export default function AdminDashboard() {
  return (
    <ProtectedRoute>
      <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">⚙️ Admin Dashboard</h1>
          <button
            onClick={() => {
              localStorage.removeItem('codex_token');
              window.location.href = '/login';
            }}
            className="text-sm text-yellow-400 border border-yellow-400 px-4 py-2 rounded hover:bg-yellow-400 hover:text-black transition"
          >
            Logout
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { name: 'Manage Events', link: '/admin/events' },
            { name: 'Manage Resources', link: '/admin/resources' },
            { name: 'Manage Blog Posts', link: '/admin/blogs' },
            { name: 'Manage Members', link: '/admin/members' },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className="bg-gray-900 border border-gray-700 rounded-xl p-6 hover:border-yellow-400 transition shadow-md hover:shadow-yellow-500/20 text-center text-lg font-medium"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </main>
    </ProtectedRoute>
  );
}

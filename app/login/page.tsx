'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (password === 'codexadmin') {
      localStorage.setItem('codex_token', 'secure_token');
      router.push('/admin');
    } else {
      setError('❌ Incorrect password. Try again.');
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 flex flex-col items-center justify-center text-white px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">🔐 Admin Login</h1>
      <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 w-full max-w-md shadow-md">
        <input
          type="password"
          placeholder="Enter admin password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 rounded bg-gray-800 border border-gray-600 text-white focus:outline-none focus:border-yellow-400 mb-4"
        />
        <button
          onClick={handleLogin}
          className="w-full bg-yellow-400 text-black font-semibold py-2 px-4 rounded hover:bg-yellow-300 transition"
        >
          Login
        </button>
        {error && <p className="text-red-400 mt-4 text-center">{error}</p>}
      </div>
    </main>
  );
}

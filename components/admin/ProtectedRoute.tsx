'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('codex_token');
    if (token === 'secure_token') {
      setAuthorized(true);
    } else {
      router.push('/login');
    }
  }, [router]);

  if (!authorized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <p>🔒 Checking credentials...</p>
      </div>
    );
  }

  return <>{children}</>;
}

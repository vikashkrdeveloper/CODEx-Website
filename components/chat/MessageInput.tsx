'use client';

import { useState } from 'react';

export default function MessageInput({ onSend }: { onSend: (msg: string) => void }) {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      onSend(message.trim());
      setMessage('');
    }
  };

  return (
    <div className="w-full max-w-xl flex gap-2">
      <input
        type="text"
        className="flex-1 px-4 py-2 rounded bg-gray-700 text-white"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
      />
      <button
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white"
        onClick={handleSend}
      >
        Send
      </button>
    </div>
  );
}

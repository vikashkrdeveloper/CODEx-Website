import React from 'react';

export default function ChatWindow({ messages }: { messages: string[] }) {
  return (
    <div className="w-full max-w-xl h-80 bg-gray-800 rounded-md p-4 overflow-y-auto mb-4">
      {messages.map((msg, index) => (
        <div key={index} className="mb-2">
          <span className="bg-gray-700 px-3 py-1 rounded">{msg}</span>
        </div>
      ))}
    </div>
  );
}

'use client';

import ChatWindow from '@/components/chat/ChatWindow';
import MessageInput from '@/components/chat/MessageInput';
import { useEffect, useState } from 'react';
import socket from '@/lib/socket';

export default function ChatPage() {
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    socket.on('chat-message', (msg: string) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.off('chat-message');
    };
  }, []);

  const sendMessage = (msg: string) => {
    socket.emit('chat-message', msg);
    setMessages((prev) => [...prev, msg]);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4">
      <h1 className="text-2xl font-bold mb-4">Community Chat</h1>
      <ChatWindow messages={messages} />
      <MessageInput onSend={sendMessage} />
    </div>
  );
}

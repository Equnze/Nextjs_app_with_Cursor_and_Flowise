'use client';

import { useState } from 'react';
import styles from './chat-input.module.css';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
}

export default function ChatInput({ onSendMessage, isLoading }: ChatInputProps) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !isLoading) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.inputContainer}>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        disabled={isLoading}
        className={styles.input}
      />
      <button 
        type="submit" 
        disabled={isLoading || !message.trim()} 
        className={styles.sendButton}
      >
        {isLoading ? 'Sending...' : 'Send'}
      </button>
    </form>
  );
} 
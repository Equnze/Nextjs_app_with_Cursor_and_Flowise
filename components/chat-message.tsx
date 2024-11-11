'use client';

import { Message } from '@/types/chat';
import styles from './chat-message.module.css';

interface ChatMessageProps {
  message: Message;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  return (
    <div className={`${styles.messageContainer} ${styles[message.role]}`}>
      <div className={styles.messageContent}>
        {message.content}
      </div>
      <div className={styles.timestamp}>
        {new Date(message.timestamp).toLocaleTimeString()}
      </div>
    </div>
  );
} 
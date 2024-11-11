import { Suspense } from 'react';
import ChatContainer from '@/components/chat-container';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.chatWrapper}>
        <h1 className={styles.title}>AI Chat Interface</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <ChatContainer />
        </Suspense>
      </div>
    </main>
  );
}

import React, { useState, useEffect } from 'react';
import styles from './Counter.module.scss';

export default function CounterComponent() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);
  return (
    <p className={styles.counter}>
      Page has been open for <code>{count}</code> seconds.
    </p>
  );
}

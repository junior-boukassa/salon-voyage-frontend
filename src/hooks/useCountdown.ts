import { useEffect, useState } from 'react';

export function useCountdown(target?: number) {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    if (!target) return;

    const timer = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(timer);
  }, [target]);

  const remaining = target ? Math.max(0, target - now) : 0;
  const minutes = Math.floor(remaining / 60000);
  const seconds = Math.floor((remaining % 60000) / 1000);

  return {
    remaining,
    label: `${minutes}:${seconds.toString().padStart(2, '0')}`,
  };
}

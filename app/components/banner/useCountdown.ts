import React from "react";

export type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  over: boolean;
};

export default function useCountdown(targetISO?: string | null): TimeLeft {
  const calc = React.useCallback((): TimeLeft => {
    if (!targetISO) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, over: true };
    }

    const target = Date.parse(targetISO);
    const now = Date.now();
    const diff = target - now;

    if (!Number.isFinite(target) || diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, over: true };
    }

    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);

    return { days, hours, minutes, seconds, over: false };
  }, [targetISO]);

  const [left, setLeft] = React.useState<TimeLeft>(() => calc());

  React.useEffect(() => {
    const id = setInterval(() => setLeft(calc()), 1000);
    return () => clearInterval(id);
  }, [calc]);

  return left;
}

// app/light-night/[id]/LightNightCountdown.tsx
"use client";

import useCountdown from "../../components/banner/useCountdown";

interface LightNightCountdownProps {
  startISO?: string;
}

export default function LightNightCountdown({
  startISO,
}: LightNightCountdownProps) {
  if (!startISO) return null;

  const left = useCountdown(startISO);

  // If it's already over, don't show anything
  if (left.over) return null;

  return (
    <div className="mt-4 rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-3 text-xs sm:text-sm text-slate-200 flex items-center justify-between gap-3">
      <span className="font-semibold tracking-[0.18em] uppercase text-[#e0c9c1] text-[10px] sm:text-[11px]">
        Starts in
      </span>
      <span className="font-mono text-sm sm:text-base text-[#f4cf88]">
        {left.days}d {left.hours}h {left.minutes}m {left.seconds}s
      </span>
    </div>
  );
}

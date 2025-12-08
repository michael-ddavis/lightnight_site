"use client";

import useCountdown from "../../components/banner/useCountdown";

interface LightNightCountdownProps {
  startISO?: string;
}

export default function LightNightCountdown({
  startISO,
}: LightNightCountdownProps) {
  // Always call the hook; it can handle missing/invalid ISO now
  const left = useCountdown(startISO);

  // If no date provided or countdown is "over", render nothing
  if (!startISO || left.over) return null;

  return (
    <div className="mt-4 flex items-center justify-between gap-3 rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-3 text-xs text-slate-200 sm:text-sm">
      <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#e0c9c1] sm:text-[11px]">
        Starts in
      </span>
      <span
        className="font-mono text-sm text-[#f4cf88] sm:text-base"
        suppressHydrationWarning
      >
        {left.days}d {left.hours}h {left.minutes}m {left.seconds}s
      </span>
    </div>
  );
}

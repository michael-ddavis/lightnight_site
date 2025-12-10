// app/components/banner/EventBanner.tsx
"use client";

import React from "react";
import Link from "next/link";
import useCountdown from "./useCountdown";
import { toISO } from "./datetimeUtil";

type EventBannerProps = {
  id: string;
  title: string;
  date: string; // "2025-12-10"
  time: string; // "7:00 PM"
  location: string;
  href: string; // e.g. `/light-night/rigsby-dec-12`
  forceVisible?: boolean; // dev override
};

export default function EventBanner({
  id,
  title,
  date,
  time,
  location,
  href,
  forceVisible = false,
}: EventBannerProps) {
  const key = `bannerDismissed:${id}`;

  const [open, setOpen] = React.useState(false);
  const [hydrated, setHydrated] = React.useState(false);

  // Hydration + localStorage read
  React.useEffect(() => {
    setHydrated(true);
    try {
      const stored = window.localStorage.getItem(key);
      // if we ever stored "1", keep it closed; otherwise open
      setOpen(stored !== "1");
    } catch {
      setOpen(true);
    }
  }, [key]);

  // Build a full ISO from date + time
  const startISO = React.useMemo(() => toISO(date, time), [date, time]);

  // Countdown based on that ISO
  const left = useCountdown(startISO);

  // 5-day visibility window (unless forced)
  const startTime = new Date(startISO).getTime();
  const now = Date.now();
  const diff = startTime - now;
  const fiveDays = 5 * 24 * 60 * 60 * 1000;

  const withinFiveDays =
    Number.isFinite(startTime) && diff > 0 && diff <= fiveDays;

  // Final visibility rules
  if (!hydrated) return null;
  if (!open) return null;
  if (!forceVisible && !withinFiveDays) return null;

  const dateObj = new Date(startISO);
  const dateLabel = dateObj.toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="w-full bg-[#1E2A78]/90 text-white/90 ring-1 ring-[#f4cf88]/20 backdrop-blur-lg py-2">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3 px-4 py-1 sm:flex-nowrap sm:px-6 lg:px-8">
        <span className="rounded-full bg-[#f4cf88] px-2.5 py-0.5 text-[11px] font-bold text-[#050814]">
          UPCOMING
        </span>

        <div className="min-w-0 flex-1 text-xs sm:text-sm">
          <div className="truncate">
            <span className="font-semibold">{title}</span>
            <span className="mx-1 text-white/70">•</span>
            <span className="text-white/80">
              {dateLabel} at {time}
            </span>
          </div>
          <div className="truncate text-[11px] text-white/70">{location}</div>

          {!left.over && (
            <div className="mt-1 text-[11px] text-[#f4cf88]">
              Starts in {left.days}d {left.hours}h {left.minutes}m{" "}
              {left.seconds}s
            </div>
          )}
        </div>

        <Link
          href={href}
          className="inline-flex items-center gap-2 rounded-full border border-[#f4cf88]/70 bg-[#e0c9c1] px-3 py-1.5 text-[11px] font-semibold text-[#050814] shadow-[0_0_18px_rgba(250,204,21,0.3)] transition hover:brightness-110"
        >
          See details
          <span aria-hidden="true">↗</span>
        </Link>

        <button
          onClick={() => {
            try {
              window.localStorage.setItem(key, "1");
            } catch {
              // ignore
            }
            setOpen(false);
            document.documentElement.style.setProperty("--banner-h", "0px");
          }}
          aria-label="Close banner"
          className="ml-2 rounded-md border border-white/20 px-2 py-1 text-xs text-white/70 hover:bg-white/10"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

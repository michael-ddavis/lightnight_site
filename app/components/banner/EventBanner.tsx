// app/components/banner/EventBanner.tsx
"use client";

import React from "react";
import Link from "next/link";
import useCountdown from "./useCountdown";
import { toISO } from "./datetimeUtil";

type EventBannerProps = {
  id: string;
  title: string;
  date: string;     // "2025-12-10"
  time: string;     // "7:00 PM"
  location: string;
  href: string;     // e.g. `/light-night/rigsby-dec-12`
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

  // Basic open/closed state
  const [open, setOpen] = React.useState<boolean>(true);

  // On mount, read localStorage (unless forceVisible)
  React.useEffect(() => {
    if (forceVisible) {
      setOpen(true);
      return;
    }

    try {
      if (typeof window !== "undefined") {
        const dismissed = window.localStorage.getItem(key);
        if (dismissed) setOpen(false);
      }
    } catch {
      // ignore
    }
  }, [forceVisible, key]);

  // Countdown
  const targetISO = date;
  const left = useCountdown(targetISO);

  // Only show inside 5-day window unless forced
  const withinFiveDays = !left.over && left.days <= 5;
  const shouldShow = open && (forceVisible || withinFiveDays);

  if (!shouldShow) return null;

  const dateObj = new Date(targetISO);
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
          <div className="truncate text-[11px] text-white/70">
            {location}
          </div>
          {!left.over && (
            <div
              className="mt-1 text-[11px] text-[#f4cf88]"
              suppressHydrationWarning
            >
              Starts in {left.days}d {left.hours}h {left.minutes}m {left.seconds}s
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
              if (typeof window !== "undefined") {
                window.localStorage.setItem(key, "1");
              }
            } catch {}
            setOpen(false);
          }}
          aria-label="Close banner"
          className="ml-1 rounded-md border border-white/20 px-2 py-1 text-[11px] text-white/70 hover:bg-white/10"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

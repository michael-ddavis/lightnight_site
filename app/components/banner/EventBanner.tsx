// app/components/banner/EventBanner.tsx
"use client";

import React from "react";
import Link from "next/link";
import useCountdown from "./useCountdown";
import { toISO } from "./datetimeUtil";

type EventBannerProps = {
  id: string;
  title: string;
  location: string;
  href: string;

  /** Preferred: full ISO string with timezone, e.g. "2025-12-12T19:00:00-05:00" */
  startISO?: string;

  /** Legacy fallback: separate date & time, e.g. "2025-12-12", "7:00 PM" */
  date?: string;
  time?: string;

  /** Dev override to force it visible, ignoring 5-day rule */
  forceVisible?: boolean;
};

export default function EventBanner({
  id,
  title,
  location,
  href,
  startISO,
  date,
  time,
  forceVisible = false,
}: EventBannerProps) {
  const storageKey = `bannerDismissed:${id}`;

  const [open, setOpen] = React.useState(false);
  const [hydrated, setHydrated] = React.useState(false);

  // ---- Resolve final ISO string once, supports both old + new props ----
  const effectiveISO = React.useMemo(() => {
    if (startISO) return startISO;
    if (date && time) return toISO(date, time);
    if (date) return date; // date-only fallback
    return "";
  }, [startISO, date, time]);

  // Always call the hook with some string so hook order is stable
  const countdownTarget =
    effectiveISO || "2100-01-01T00:00:00.000Z"; // distant future fallback

  // 🔔 Hook is always called, not conditional
  const left = useCountdown(countdownTarget);

  // Hydration + localStorage dismissal
  React.useEffect(() => {
    setHydrated(true);
    try {
      const stored = window.localStorage.getItem(storageKey);
      setOpen(stored !== "1"); // open unless explicitly dismissed
    } catch {
      setOpen(true);
    }
  }, [storageKey]);

  // If we aren't hydrated yet, don't render (avoid SSR mismatch)
  if (!hydrated) return null;

  // Time window logic (5 days before event, hide after it starts)
  const startTime = effectiveISO ? new Date(effectiveISO).getTime() : NaN;
  const now = Date.now();
  const diff = startTime - now;
  const fiveDaysMs = 5 * 24 * 60 * 60 * 1000;

  const withinFiveDays =
    Number.isFinite(startTime) && diff > 0 && diff <= fiveDaysMs;

  // If we’re forcing it, ignore time window
  const allowedByTime = forceVisible || withinFiveDays;

  // Final show/hide decision
  if (!open || !allowedByTime) return null;

  // Friendly date label for display
  const dateLabel = Number.isFinite(startTime)
    ? new Date(startTime).toLocaleDateString(undefined, {
        weekday: "short",
        month: "short",
        day: "numeric",
      })
    : date || "";

  return (
    <div className="w-full bg-[#1E2A78]/90 text-white/90 ring-1 ring-[#f4cf88]/20 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3 px-4 py-2 sm:flex-nowrap sm:px-6 lg:px-8">
        <span className="rounded-full bg-[#f4cf88] px-2.5 py-0.5 text-[11px] font-bold text-[#050814]">
          UPCOMING
        </span>

        <div className="min-w-0 flex-1 text-xs sm:text-sm">
          <div className="truncate">
            <span className="font-semibold">{title}</span>
            {dateLabel && (
              <>
                <span className="mx-1 text-white/70">•</span>
                <span className="text-white/80">
                  {dateLabel}
                  {time ? ` at ${time}` : ""}
                </span>
              </>
            )}
          </div>
          <div className="truncate text-[11px] text-white/70">{location}</div>

          {!left.over && effectiveISO && (
            <div
              className="mt-1 text-[11px] text-[#f4cf88]"
              suppressHydrationWarning
            >
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
          <span aria-hidden="true">→</span>
        </Link>

        <button
          type="button"
          onClick={() => {
            try {
              window.localStorage.setItem(storageKey, "1");
            } catch {
              // ignore
            }
            setOpen(false);
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

"use client";

import React from "react";
import Link from "next/link";
import useCountdown from "./useCountdown";
import { toISO } from "./datetimeUtil";

type EventBannerProps = {
  id: string;
  title: string;
  date: string;       // e.g. "2025-02-22"
  time: string;       // e.g. "7:00 PM"
  location: string;
  href: string;       // where "See details" goes, e.g. `/light-night/2025-02-22-midlothian`
};

export default function EventBanner({
  id,
  title,
  date,
  time,
  location,
  href,
}: EventBannerProps) {
  const key = `bannerDismissed:${id}`;

  const [open, setOpen] = React.useState(() => {
    if (typeof window === "undefined") return true;
    try {
      return !localStorage.getItem(key);
    } catch {
      return true;
    }
  });

  const targetISO = React.useMemo(() => toISO(date, time), [date, time]);
  const left = useCountdown(targetISO);

  // Only show inside the 5-day window before event start
  const withinFiveDays = !left.over && left.days <= 5;

  const ref = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const root = document.documentElement;

    const setVar = () => {
      const h = open && withinFiveDays && ref.current ? ref.current.offsetHeight : 0;
      root.style.setProperty("--banner-h", `${h}px`);
    };

    setVar();

    const ro = new ResizeObserver(setVar);
    if (ref.current) ro.observe(ref.current);

    window.addEventListener("resize", setVar);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", setVar);
      if (!open || !withinFiveDays) {
        document.documentElement.style.setProperty("--banner-h", "0px");
      }
    };
  }, [open, withinFiveDays]);

  // If dismissed, event is over, or we're more than 5 days out → show nothing
  if (!open || !withinFiveDays) return null;

  const dateLabel = new Date(date).toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  return (
    <div
      ref={ref}
      className="sticky top-0 z-50 w-full bg-[#1E2A78]/90 text-white/90 ring-1 ring-[#f4cf88]/20 backdrop-blur-lg py-2"
    >
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
            <div className="mt-1 text-[11px] text-[#f4cf88]">
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
              localStorage.setItem(key, "1");
            } catch {}
            setOpen(false);
            document.documentElement.style.setProperty("--banner-h", "0px");
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

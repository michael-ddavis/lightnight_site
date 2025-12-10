// app/components/banner/NextLightNightBanner.tsx
"use client";

import React from "react";
import content from "../../../content.config";
import EventBanner from "./EventBanner";

// Keep this aligned with your content.config shape
interface LightNightEncounter {
  id: string;
  title: string;
  startDate: string;
  location: string;
  city?: string;
  address?: string;
}

function getNextLightNight(): LightNightEncounter | null {
  const cfg = content as any;
  const encounters: LightNightEncounter[] =
    cfg.lightNight?.encounters ?? [];

  const now = Date.now();

  const upcoming = encounters
    .map((e) => ({
      ...e,
      _time: e.startDate ? new Date(e.startDate).getTime() : NaN,
    }))
    .filter((e) => Number.isFinite(e._time) && e._time > now)
    .sort((a, b) => (a._time as number) - (b._time as number));

  return upcoming[0] ?? null;
}

export default function NextLightNightBanner() {
  const next = getNextLightNight();

  // Optional dev flag: if you set NEXT_PUBLIC_ALWAYS_SHOW_BANNER="1"
  // in Vercel env, you can force it to always be visible
  const forceBanner =
    process.env.NEXT_PUBLIC_ALWAYS_SHOW_BANNER === "1";

  if (!next && !forceBanner) return null;

  if (!next) return null; // if forcing but no encounters, bail

  const locationLabel = next.address
    ? `${next.address}${next.city ? `, ${next.city}` : ""}`
    : next.city || next.location;

  return (
    <EventBanner
      id={next.id}
      title={next.title}
      location={locationLabel}
      href={`/light-night/${next.id}`}
      startISO={next.startDate}
      forceVisible={forceBanner}
    />
  );
}

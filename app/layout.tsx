// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import content from "../content.config";
import AppShell from "./components/common/AppShell";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alabaster",
  description: "Love Jesus Well.",
};

interface LightNightEncounter {
  id: string;
  title: string;
  location?: string;
  address?: string;
  startDate?: string; // ISO string
}

export interface NextLightNightBanner {
  id: string;
  title: string;
  locationLabel: string;
  bannerDate: string; // "2025-12-12"
  bannerTime: string; // "7:00 PM"
}

// Helper to pick the next Light Night & derive banner fields
function getNextLightNight(): NextLightNightBanner | null {
  const cfg = content as any;
  const encounters: LightNightEncounter[] = cfg.lightNight?.encounters ?? [];
  const now = Date.now();

  const upcoming = encounters
    .map((e) => {
      if (!e.startDate) return null;
      const t = new Date(e.startDate).getTime();
      if (!Number.isFinite(t)) return null;
      return { ...e, _ts: t };
    })
    .filter((e): e is LightNightEncounter & { _ts: number } => !!e && !!e._ts)
    .filter((e) => e._ts > now)
    .sort((a, b) => a._ts - b._ts)[0];

  if (!upcoming) return null;

  const d = new Date(upcoming.startDate as string);
  const bannerDate = d.toISOString().slice(0, 10); // YYYY-MM-DD
  const bannerTime = d.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });

  const locationLabel =
    upcoming.address ??
    upcoming.location ??
    "Location TBA";

  return {
    id: upcoming.id,
    title: upcoming.title,
    locationLabel,
    bannerDate,
    bannerTime,
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const nextLightNight = getNextLightNight();
  const forceBanner =
    process.env.NEXT_PUBLIC_ALWAYS_SHOW_BANNER === "1";

  return (
    <html lang="en">
      <body className={inter.className}>
        <AppShell
          nextLightNight={nextLightNight}
          forceBanner={forceBanner}
        >
          {children}
        </AppShell>
      </body>
    </html>
  );
}

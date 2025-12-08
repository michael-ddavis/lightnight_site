// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import EventBanner from "./components/banner/EventBanner";
import content from "../content.config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alabaster",
  description: "Love Jesus Well.",
};

function getNextLightNight() {
  const cfg = content as any;
  const encounters: any[] = cfg.lightNight?.encounters ?? [];
  const now = new Date();

  const upcoming = encounters
    .map((e) => ({
      ...e,
      dateObj: e.startDate ? new Date(e.startDate) : null,
    }))
    .filter((e) => e.dateObj && e.dateObj.getTime() > now.getTime())
    .sort(
      (a, b) =>
        (a.dateObj as Date).getTime() - (b.dateObj as Date).getTime()
    )[0];

  return upcoming || null;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const nextLightNight = getNextLightNight();

  // dev override: ALWAYS show banner
  const forceBanner =
    typeof process !== "undefined" &&
    process.env.NEXT_PUBLIC_ALWAYS_SHOW_BANNER === "1";

  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Sticky shell: banner (if any) + navbar move together */}
        <div className="sticky top-0 z-50">
          {nextLightNight && (
            <EventBanner
              id={nextLightNight.id}
              title={
                nextLightNight.title ?? "Light Night Worship Night"
              }
              // Prefer explicit date/time in config, fall back to ISO split
              date={
                nextLightNight.date ??
                nextLightNight.startDate ??
                ""
              }
              time={nextLightNight.time ?? "7:00 PM"}
              location={
                nextLightNight.location ??
                `${nextLightNight.address ?? ""} ${
                  nextLightNight.city ?? ""
                }`.trim()
              }
              href={`/light-night/${nextLightNight.id}`}
              forceVisible={forceBanner}
            />
          )}

          {/* Navbar is always visible & sticky with the banner */}
          <Navbar />
        </div>

        {children}
        <Footer />
      </body>
    </html>
  );
}

// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import EventBanner from "./components/banner/EventBanner";
import content from "../content.config";
import RouteLoaderOverlay from "./components/common/RouteLoaderOverlay";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alabaster",
  description: "Love Jesus Well.",
};

function getNextLightNight() {
  const cfg = content as any;
  const encounters: any[] = cfg.lightNight?.encounters ?? [];
  const now = Date.now();

  const upcoming = encounters
    .map((e) => ({
      ...e,
      _startTime: e.startDate ? new Date(e.startDate).getTime() : null,
    }))
    .filter((e) => e._startTime && e._startTime > now)
    .sort((a, b) => (a._startTime as number) - (b._startTime as number))[0];

  return upcoming || null;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const nextLightNight = getNextLightNight();

  const forceBanner =
    typeof process !== "undefined" &&
    process.env.NEXT_PUBLIC_ALWAYS_SHOW_BANNER === "1";

  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Sticky shell: banner + navbar */}
        <div className="sticky top-0 z-50">
          {nextLightNight && (
            <EventBanner
              id={nextLightNight.id}
              title={nextLightNight.title}
              startISO={nextLightNight.startDate}
              location={
                nextLightNight.address
                  ? `${nextLightNight.address}, ${nextLightNight.city ?? ""}`
                  : nextLightNight.location
              }
              href={`/light-night/${nextLightNight.id}`}
              forceVisible={forceBanner}
            />
          )}

          <Navbar />
        </div>

        {children}

        {/* Full-screen loader on route change */}
        <RouteLoaderOverlay />

        <Footer />
      </body>
    </html>
  );
}

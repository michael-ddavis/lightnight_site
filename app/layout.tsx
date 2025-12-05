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
  const lightNight = (content as any).lightNight || {};
  const encounters = (lightNight.encounters || []) as any[];

  const now = new Date();

  const upcoming = encounters
    .map((e) => ({
      ...e,
      dateObj: e.dateISO ? new Date(e.dateISO) : null,
    }))
    .filter((e) => e.dateObj && e.dateObj.getTime() > now.getTime())
    .sort((a, b) => a.dateObj.getTime() - b.dateObj.getTime())[0];

  return upcoming || null;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const nextLightNight = getNextLightNight();

  return (
    <html lang="en">
      <body className={inter.className}>
        {nextLightNight && (
          <EventBanner
            id={nextLightNight.id}
            title="Light Night Worship Night"
            // Split ISO into date + time string for the helper:
            date={nextLightNight.dateISO.split("T")[0]}      // "2025-02-22"
            time="7:00 PM"                                   // or store a time field in config
            location={`${nextLightNight.locationName} • ${nextLightNight.city}`}
            href={`/light-night/${nextLightNight.id}`}
          />
        )}

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

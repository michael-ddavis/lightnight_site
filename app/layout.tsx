// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RouteLoaderOverlay from "./components/common/RouteLoaderOverlay";
import NextLightNightBanner from "./components/banner/NextLightNightBanner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alabaster",
  description: "Love Jesus Well.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-[#050814]">
      <body className={inter.className}>
        {/* Route loader sits on top of everything when navigating */}
        <RouteLoaderOverlay />

        {/* Sticky shell: banner + navbar */}
        <div className="sticky top-0 z-50">
          <NextLightNightBanner />
          <Navbar />
        </div>

        {children}
        <Footer />
      </body>
    </html>
  );
}

// app/components/common/AppShell.tsx
"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "../Navbar";
import Footer from "../Footer";
import EventBanner from "../banner/EventBanner";
import RouteLoaderOverlay from "./RouteLoaderOverlay";
import type { NextLightNightBanner } from "../../layout"; // adjust if TS complains

type AppShellProps = {
  children: React.ReactNode;
  nextLightNight: NextLightNightBanner | null;
  forceBanner?: boolean;
};

export default function AppShell({
  children,
  nextLightNight,
  forceBanner = false,
}: AppShellProps) {
  const pathname = usePathname();
  const [isNavigating, setIsNavigating] = React.useState(false);

  // Simple route-change detection using pathname
  React.useEffect(() => {
    // Start a brief "loading" state on path change
    setIsNavigating(true);
    const id = window.setTimeout(() => {
      setIsNavigating(false);
    }, 400); // feel free to tweak

    return () => window.clearTimeout(id);
  }, [pathname]);

  return (
    <>
      {/* Sticky header (banner + navbar) */}
      <div className="sticky top-0 z-50">
        {nextLightNight && (
          <EventBanner
            id={nextLightNight.id}
            title={nextLightNight.title}
            date={nextLightNight.bannerDate}
            time={nextLightNight.bannerTime}
            location={nextLightNight.locationLabel}
            href={`/light-night/${nextLightNight.id}`}
            forceVisible={forceBanner}
          />
        )}
        <Navbar />
      </div>

      {/* Fade-in content under the header */}
      <div
        className={`transition-opacity duration-300 ${
          isNavigating ? "opacity-0" : "opacity-100"
        }`}
      >
        {children}
        <Footer />
      </div>

      {/* Full-screen spinner overlay while navigating */}
      {isNavigating && <RouteLoaderOverlay />}
    </>
  );
}

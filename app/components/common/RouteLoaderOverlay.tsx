// app/components/common/RouteLoaderOverlay.tsx
"use client";

import { usePathname } from "next/navigation";
import React from "react";

export default function RouteLoaderOverlay() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = React.useState(false);
  const [hasMounted, setHasMounted] = React.useState(false);
  const prevPathRef = React.useRef<string | null>(null);
  const timeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  // On first mount, just record the path and don't show the overlay
  React.useEffect(() => {
    if (!hasMounted) {
      setHasMounted(true);
      prevPathRef.current = pathname;
      return;
    }

    // If the path actually changed, show the overlay briefly
    if (prevPathRef.current !== pathname) {
      prevPathRef.current = pathname;
      setIsVisible(true);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        setIsVisible(false);
      }, 600); // spinner duration
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [pathname, hasMounted]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm">
      {/* Simple circular spinner */}
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-[#f4cf88] border-t-transparent" />
    </div>
  );
}

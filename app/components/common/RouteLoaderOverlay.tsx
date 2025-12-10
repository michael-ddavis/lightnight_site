// app/components/common/RouteLoaderOverlay.tsx
"use client";

import LoaderSpinner from "./LoaderSpinner";

export default function RouteLoaderOverlay() {
  return (
    <div className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-[#050814]">
      <LoaderSpinner />
      <p className="mt-3 text-[11px] text-slate-400">
        Loading…
      </p>
    </div>
  );
}

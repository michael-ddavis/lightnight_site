// app/light-night/[id]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import content from "../../../content.config";

const lightNight = (content as any).lightNight || {};
const encounters = (lightNight.encounters || []) as any[];

interface LightNightDetailProps {
  params: { id: string };
}

export default function LightNightDetailPage({ params }: LightNightDetailProps) {
  const encounter = encounters.find((e) => e.id === params.id);

  if (!encounter) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-[#050814] text-slate-100">
      {/* HERO with flyer image (16:9, mobile friendly) */}
      <section className="relative overflow-hidden border-b border-slate-800">
        <div className="relative mx-auto max-w-5xl px-4 pt-8 pb-6 sm:pt-10 sm:pb-10">
          <div className="relative w-full overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 shadow-[0_18px_60px_rgba(15,23,42,0.9)]">
            <div className="relative aspect-[16/9] w-full">
              {encounter.flyerImage && (
                <Image
                  src={encounter.flyerImage}
                  alt={encounter.title}
                  fill
                  className="object-cover"
                  priority
                />
              )}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-transparent" />
            </div>
          </div>

          {/* Overlay-ish header text below the flyer */}
          <div className="mt-6 space-y-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#e0c9c1]">
              Alabaster Presents • Light Night
            </p>
            {encounter.dateLabel && (
              <h1 className="font-serif text-2xl sm:text-3xl text-slate-50">
                {encounter.dateLabel}
              </h1>
            )}
            <p className="text-sm text-slate-300">
              {encounter.title}
            </p>

            <p className="text-sm text-slate-200">
              {encounter.locationName}
              {encounter.city ? ` • ${encounter.city}` : ""}
            </p>
            {encounter.address && (
              <p className="text-xs text-slate-400">
                {encounter.address}
              </p>
            )}

            <div className="mt-4 flex flex-wrap items-center gap-3">
              {encounter.mapsUrl && (
                <Link
                  href={encounter.mapsUrl}
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full border border-[#f4cf88]/80 bg-[#e0c9c1] px-5 py-1.5 text-xs font-semibold text-[#050814] shadow-[0_0_20px_rgba(250,204,21,0.35)] transition hover:brightness-110"
                >
                  Get directions
                  <span aria-hidden="true">↗</span>
                </Link>
              )}

              <Link
                href="/light-night"
                className="text-[11px] font-semibold text-slate-300 hover:text-[#f4cf88]"
              >
                Back to all dates
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILS SECTION */}
      <section className="mx-auto max-w-5xl px-4 py-10 sm:py-14">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] items-start">
          {/* Description / copy */}
          <div className="space-y-4">
            <h2 className="font-serif text-xl sm:text-2xl text-slate-50">
              About this night
            </h2>
            {encounter.description ? (
              <p className="text-sm leading-relaxed text-slate-200 whitespace-pre-line">
                {encounter.description}
              </p>
            ) : (
              <p className="text-sm leading-relaxed text-slate-200">
                A worship &amp; prayer night in the Alabaster family — space to
                minister to Jesus, encounter His presence, and be formed as a
                people who Love Him well.
              </p>
            )}
          </div>

          {/* Quick info card */}
          <aside className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 text-sm text-slate-200">
            <h3 className="font-semibold text-slate-50">
              Details at a glance
            </h3>
            <dl className="mt-3 space-y-2 text-xs sm:text-sm">
              {encounter.dateLabel && (
                <div className="flex gap-2">
                  <dt className="w-20 text-slate-400">Date</dt>
                  <dd className="flex-1">{encounter.dateLabel}</dd>
                </div>
              )}
              {encounter.locationName && (
                <div className="flex gap-2">
                  <dt className="w-20 text-slate-400">Location</dt>
                  <dd className="flex-1">
                    {encounter.locationName}
                    {encounter.city ? ` • ${encounter.city}` : ""}
                    {encounter.address ? (
                      <>
                        <br />
                        <span className="text-slate-400">
                          {encounter.address}
                        </span>
                      </>
                    ) : null}
                  </dd>
                </div>
              )}
              {encounter.mapsUrl && (
                <div className="flex gap-2">
                  <dt className="w-20 text-slate-400">Directions</dt>
                  <dd className="flex-1">
                    <Link
                      href={encounter.mapsUrl}
                      target="_blank"
                      className="text-[#f4cf88] hover:text-[#fde3a9]"
                    >
                      Open in Google Maps ↗
                    </Link>
                  </dd>
                </div>
              )}
            </dl>
          </aside>
        </div>
      </section>
    </main>
  );
}

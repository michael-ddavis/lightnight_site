// app/light-night/page.tsx
import Image from "next/image";
import Link from "next/link";
import content from "../../content.config";

const lightNight = (content as any).lightNight || {};
const encounters = (lightNight.encounters || []) as any[];

export default function LightNightPage() {
  return (
    <main className="min-h-screen bg-[#050814] text-slate-100">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-slate-800">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-40 -left-32 h-72 w-72 rounded-full bg-[#f4cf88]/30 blur-3xl" />
          <div className="absolute top-32 -right-24 h-80 w-80 rounded-full bg-[#e0c9c1]/25 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-4xl px-4 py-16 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e0c9c1]">
            Alabaster Presents
          </p>
          <h1 className="mt-2 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Light Night
            <span className="block text-base font-sans text-slate-200 sm:text-lg">
              Monthly worship nights in the Alabaster family.
            </span>
          </h1>
          <p className="mt-4 max-w-xl text-sm sm:text-base text-slate-200">
            Nights set apart to worship Jesus, minister to His heart, and make
            room for Him to heal, restore, and call people home.
          </p>
        </div>
      </section>

      {/* ENCOUNTERS LIST */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <h2 className="font-serif text-2xl sm:text-3xl text-slate-50">
          Upcoming Light Night Worship Nights
        </h2>
        <p className="mt-2 text-sm text-slate-400">
          Each night is open to the whole family and anyone hungry for Jesus.
        </p>

        {encounters.length === 0 ? (
          <p className="mt-8 text-sm text-slate-400">
            No upcoming Light Night dates are scheduled yet. Check back soon or
            follow us on social for updates.
          </p>
        ) : (
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {encounters.map((encounter) => (
              <article
                key={encounter.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 shadow-[0_18px_60px_rgba(15,23,42,0.9)] transition hover:border-[#f4cf88]/80 hover:shadow-[0_22px_70px_rgba(250,204,21,0.25)]"
              >
                <Link
                  href={`/light-night/${encounter.id}`}
                  className="relative block h-52 w-full overflow-hidden"
                >
                  {encounter.flyerImage && (
                    <Image
                      src={encounter.flyerImage}
                      alt={encounter.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105 group-hover:brightness-110"
                    />
                  )}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                </Link>

                <div className="flex flex-1 flex-col gap-2 px-4 pb-4 pt-3">
                  {/* HERE is the visible date spot */}
                  {encounter.dateLabel && (
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#f4cf88]">
                      {encounter.dateLabel}
                    </p>
                  )}

                  <h3 className="font-semibold text-slate-50">
                    {encounter.title}
                  </h3>

                  <p className="text-sm text-slate-300">
                    {encounter.locationName}
                    {encounter.city ? ` • ${encounter.city}` : null}
                  </p>

                  {encounter.address && (
                    <p className="text-xs text-slate-400">
                      {encounter.address}
                    </p>
                  )}

                  <div className="mt-3 flex flex-wrap items-center gap-3">
                    {encounter.mapsUrl && (
                      <Link
                        href={encounter.mapsUrl}
                        target="_blank"
                        className="inline-flex items-center gap-1 rounded-full border border-slate-600 px-3 py-1 text-[11px] font-semibold text-slate-100 hover:border-[#f4cf88] hover:text-[#f4cf88]"
                      >
                        Get directions
                        <span aria-hidden="true">↗</span>
                      </Link>
                    )}

                    <Link
                      href={`/light-night/${encounter.id}`}
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-300 hover:text-[#f4cf88]"
                    >
                      View night details
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

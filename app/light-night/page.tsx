// app/light-night/page.tsx
import Image from "next/image";
import Link from "next/link";
import content from "../../content.config";

// ---- TYPES ----

interface LightNightEncounter {
  id: string;
  title: string;
  church?: string;
  dateLabel: string;
  location: string;
  location_url?: string;
  startDate: string;
  homeImage?: string;
  city?: string;
  address?: string;
  mapsUrl?: string;
  flyerImage?: string;
  description?: string;
}

interface EncounterWithStart extends LightNightEncounter {
  _startTime: number | null;
}

// ---- HELPERS ----

function getLightNightEncounters(): LightNightEncounter[] {
  const lightNightConfig = (content as any).lightNight;

  if (!lightNightConfig || !Array.isArray(lightNightConfig.encounters)) {
    return [];
  }

  // Cast via unknown to avoid readonly literal → interface conversion errors
  return lightNightConfig.encounters as unknown as LightNightEncounter[];
}

function getSortedEncounters(): EncounterWithStart[] {
  const encounters = getLightNightEncounters();

  const parsed: EncounterWithStart[] = encounters.map((enc) => {
    const t = enc.startDate ? new Date(enc.startDate).getTime() : NaN;
    return {
      ...enc,
      _startTime: Number.isFinite(t) ? t : null,
    };
  });

  return parsed
    .slice()
    .sort((a, b) => (a._startTime ?? 0) - (b._startTime ?? 0));
}

// ---- PAGE ----

export default function LightNightPage() {
  const sorted = getSortedEncounters();
  const now = Date.now();

  const upcoming = sorted.filter(
    (e) => e._startTime !== null && (e._startTime as number) >= now
  );
  const past = sorted.filter(
    (e) => e._startTime === null || (e._startTime as number) < now
  );

  const nextEncounter = upcoming[0] ?? null;
  const otherUpcoming = upcoming.slice(1);

  return (
    <main className="min-h-screen bg-[#050814] text-slate-100">
      {/* HERO HEADER WITH LOGO */}
      <section className="relative overflow-hidden border-b border-slate-800">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-40 -left-32 h-80 w-80 rounded-full bg-[#f4cf88]/25 blur-3xl" />
          <div className="absolute top-40 -right-24 h-80 w-80 rounded-full bg-[#e0c9c1]/20 blur-3xl" />
        </div>

        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:py-16 lg:flex-row lg:items-center lg:justify-between">
          {/* Text side */}
          <div className="max-w-xl space-y-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#e0c9c1]">
              Alabaster Presents
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-slate-50">
              Light Night Worship
            </h1>
            <p className="text-sm sm:text-base text-slate-200">
              Monthly worship nights with the Alabaster family — space to pour
              out our oil, welcome anyone hungry for Jesus, and make room for
              His presence.
            </p>
            <p className="text-xs sm:text-sm text-slate-400">
              Light Night is part of Alabaster Ministries&apos;s rhythm — a recurring
              worship and prayer night where the whole family and friends can
              gather around Jesus.
            </p>
          </div>

          {/* Logo side */}
          <div className="flex justify-center lg:justify-end flex-1">
            <div className="relative">
              <div className="pointer-events-none absolute -inset-6 rounded-full bg-[#f4cf88]/20 blur-2xl" />
              <div className="relative rounded-3xl border border-slate-800 bg-slate-900/60 px-6 py-4 shadow-[0_18px_60px_rgba(15,23,42,0.9)]">
                <Image
                  src="/images/logos/light_night.svg"
                  alt="Light Night logo"
                  width={170}
                  height={170}
                  className="h-24 w-auto opacity-95 sm:h-24"
                />
                <p className="mt-2 text-[11px] text-slate-300">
                  A worship night hosted by Alabaster Ministries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEXT / UPCOMING SECTION */}
      <section className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-start">
          {/* Featured next encounter */}
          <div>
            <h2 className="font-serif text-xl sm:text-2xl text-slate-50">
              Next Light Night
            </h2>
            <p className="mt-1 text-sm text-slate-300">
              The next night set apart to worship Jesus together.
            </p>

            {nextEncounter ? (
              <Link
                href={`/light-night/${nextEncounter.id}`}
                className="group mt-5 block overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 shadow-[0_18px_60px_rgba(15,23,42,0.9)] transition hover:border-[#f4cf88]/70 hover:shadow-[0_22px_70px_rgba(250,204,21,0.25)]"
              >
                <div className="relative aspect-[16/9] w-full">
                  {nextEncounter.flyerImage || nextEncounter.homeImage ? (
                    <Image
                      src={
                        nextEncounter.flyerImage ||
                        (nextEncounter.homeImage as string)
                      }
                      alt={nextEncounter.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.02]"
                    />
                  ) : (
                    <div className="h-full w-full bg-slate-900" />
                  )}

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent" />

                  <div className="absolute bottom-4 left-4 right-4 space-y-1 text-sm">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#f4cf88]">
                      Upcoming
                    </p>
                    <p className="font-semibold text-slate-50">
                      {nextEncounter.title}
                    </p>
                    <p className="text-xs text-slate-200">
                      {nextEncounter.dateLabel}
                    </p>
                    <p className="text-[11px] text-slate-300">
                      {nextEncounter.church
                        ? `${nextEncounter.church} • ${
                            nextEncounter.city ?? nextEncounter.location
                          }`
                        : nextEncounter.location}
                    </p>
                  </div>
                </div>
              </Link>
            ) : (
              <div className="mt-5 rounded-3xl border border-dashed border-slate-700 bg-slate-900/40 p-6 text-sm text-slate-400">
                No upcoming Light Night dates are scheduled yet. Check back
                soon or follow us on social for updates.
              </div>
            )}
          </div>

          {/* Other upcoming */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-slate-200">
              More upcoming dates
            </h3>

            {otherUpcoming.length === 0 ? (
              <p className="text-xs text-slate-400">
                Once we schedule more Light Night Worship, you&apos;ll
                see them here.
              </p>
            ) : (
              <ul className="space-y-3 text-sm">
                {otherUpcoming.map((enc) => (
                  <li
                    key={enc.id}
                    className="flex items-start justify-between gap-3 rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-3"
                  >
                    <div>
                      <p className="text-xs font-semibold text-slate-100">
                        {enc.dateLabel}
                      </p>
                      <p className="text-xs text-slate-300">
                        {enc.church
                          ? `${enc.church} • ${
                              enc.city ?? enc.location
                            }`
                          : enc.location}
                      </p>
                    </div>
                    <Link
                      href={`/light-night/${enc.id}`}
                      className="text-[11px] font-semibold text-[#f4cf88] hover:text-[#fde3a9]"
                    >
                      Details →
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>

      {/* PAST NIGHTS (optional) */}
      {past.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 pb-12 sm:pb-16">
          <div className="border-t border-slate-800 pt-8">
            <h2 className="font-serif text-lg sm:text-xl text-slate-50">
              Past Light Nights
            </h2>
            <p className="mt-1 text-xs text-slate-400">
              A glimpse at nights where Jesus has already met people in the
              room.
            </p>

            <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {past.map((enc) => (
                <article
                  key={enc.id}
                  className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-xs"
                >
                  <p className="font-semibold text-slate-100">
                    {enc.title}
                  </p>
                  <p className="mt-1 text-slate-300">{enc.dateLabel}</p>
                  <p className="mt-1 text-slate-400">
                    {enc.church
                      ? `${enc.church} • ${
                          enc.city ?? enc.location
                        }`
                      : enc.location}
                  </p>
                  <Link
                    href={`/light-night/${enc.id}`}
                    className="mt-3 inline-flex text-[11px] font-semibold text-[#f4cf88] hover:text-[#fde3a9]"
                  >
                    View night →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

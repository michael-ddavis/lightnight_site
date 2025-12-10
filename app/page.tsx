// app/page.tsx
import Image from "next/image";
import Link from "next/link";
import content from "../content.config";
import SpinningSeal from "./components/SpinningSeal";
import Reveal from "./components/common/Reveal";

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

// ---- LIGHT NIGHT HELPERS ----

function getLightNightEncounters(): LightNightEncounter[] {
  const lightNightConfig = (content as any).lightNight;

  if (!lightNightConfig || !Array.isArray(lightNightConfig.encounters)) {
    return [];
  }

  // The `unknown` cast here is intentional to avoid TS complaining about
  // converting from a readonly literal tuple type to a more general interface.
  return lightNightConfig.encounters as unknown as LightNightEncounter[];
}

function getUpcomingEncounters() {
  const encounters = getLightNightEncounters();

  const parsedEncounters: EncounterWithStart[] = encounters.map((encounter) => {
    const t = encounter.startDate
      ? new Date(encounter.startDate).getTime()
      : NaN;

    return {
      ...encounter,
      _startTime: Number.isFinite(t) ? t : null,
    };
  });

  const now = Date.now();

  const upcoming: EncounterWithStart[] = parsedEncounters
    .filter(
      (e: EncounterWithStart) =>
        typeof e._startTime === "number" && (e._startTime as number) >= now
    )
    .sort(
      (a: EncounterWithStart, b: EncounterWithStart) =>
        (a._startTime ?? 0) - (b._startTime ?? 0)
    );

  let featuredEncounter: EncounterWithStart | null = null;
  let otherEncounters: EncounterWithStart[] = [];

  if (upcoming.length > 0) {
    featuredEncounter = upcoming[0];
    otherEncounters = upcoming.slice(1);
  }

  return { featuredEncounter, otherEncounters };
}

// ---- PAGE COMPONENT ----

export default function HomePage() {
  const { featuredEncounter, otherEncounters } = getUpcomingEncounters();

  return (
    <main className="min-h-screen bg-[#050814] text-slate-100 site-gutter">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-slate-800">
        {/* Soft background glows */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-40 -left-32 h-80 w-80 rounded-full bg-[#f4cf88]/25 blur-3xl" />
          <div className="absolute top-40 -right-24 h-80 w-80 rounded-full bg-[#e0c9c1]/20 blur-3xl" />
        </div>

        <div className="mx-auto max-w-6xl px-4 py-14 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            {/* LEFT: TEXT */}
            <div className="flex-1 flex flex-col gap-6 items-center lg:items-start">
              {/* Spinning seal centered on mobile, left on large */}
              <Reveal delayMs={50}>
                <div className="flex justify-center lg:justify-start w-full">
                  <div className="max-w-[220px] w-full flex justify-center">
                    <SpinningSeal
                      phrase={
                        content.home.heroRing.phrase ??
                        "ALABASTER MINISTRIES LOVE JESUS WELL"
                      }
                      logoSrc={
                        content.home.heroRing.logoSrc ??
                        "/images/logos/spinning-alabaster.svg"
                      }
                      textColor={content.home.heroRing.textColor ?? "#ffffff"}
                      speedSeconds={content.home.heroRing.speedSeconds ?? 18}
                      size={220}   // a little smaller for mobile comfort
                      className="h-auto"
                    />
                  </div>
                </div>
              </Reveal>

              <Reveal>
                <h1 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl md:text-[2.5rem] text-center lg:text-left">
                  Raising a priesthood who{" "}
                  <span className="bg-gradient-to-r from-[#f4cf88] via-[#e0c9c1] to-white bg-clip-text text-transparent">
                    Love Jesus Well
                  </span>
                  .
                </h1>
                <p className="text-sm sm:text-base text-slate-200 text-center lg:text-left">
                  Alabaster is a worship and prayer family learning to love Jesus
                  deeply and love Him well — in His presence, in His Word, and
                  together as a people.
                </p>

                <div className="mt-4 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 rounded-full border border-[#f4cf88]/80 bg-[#e0c9c1] px-5 py-2 text-xs font-semibold text-[#050814] shadow-[0_0_28px_rgba(250,204,21,0.32)] transition hover:brightness-110"
                  >
                    Learn about Alabaster
                    <span aria-hidden="true">↗</span>
                  </Link>
                  <Link
                    href="/light-night"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-slate-300 hover:text-[#f4cf88]"
                  >
                    Light Night worship
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </Reveal>
            </div>


            {/* RIGHT: SINGLE FEATURE IMAGE */}
            <Reveal delayMs={120}>
              <div className="relative hidden sm:flex justify-end">
                <div className="relative w-48 sm:w-64 md:w-80 lg:w-[22rem] aspect-[3/4] rounded-3xl overflow-hidden shadow-[0_24px_70px_rgba(15,23,42,0.9)]">
                  {/* Ambient glow behind */}
                  <div className="pointer-events-none absolute -z-10 inset-0 translate-x-10 translate-y-6 rounded-full bg-[#e3c28d]/18 blur-[90px]" />
                  <Image
                    src="/images/home/hero-4.jpg" // or your best hero worship image
                    alt="Worship night at Alabaster"
                    fill
                    className="object-cover"
                  />
                  {/* Subtle gradient for text legibility if you ever overlay later */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* THIS IS ALABASTER */}
      <section className="border-b border-slate-800 bg-[#050814]">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-start">
            <div className="space-y-4">
              <Reveal>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#e0c9c1]">
                  This is Alabaster
                </p>
              </Reveal>
              <Reveal>
                <h2 className="font-serif text-2xl sm:text-3xl text-slate-50">
                  A worship &amp; prayer family becoming a priesthood.
                </h2>
              </Reveal>
              <Reveal>
                <p className="text-sm leading-relaxed text-slate-200">
                  We&apos;re building a safe, holy family for misfits, the
                  overlooked, and anyone who longs to belong — a people rooted in
                  Scripture, practicing His presence, and being formed into lovers
                  of Jesus.
                </p>
                <p className="text-sm text-slate-300">
                  Our way of life is simple: minister to Jesus, be formed by His
                  Word, love one another deeply, and be sent as worshippers into
                  the places He calls us.
                </p>

                <div className="mt-3 flex flex-wrap gap-3">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-4 py-1.5 text-[11px] font-semibold text-slate-200 hover:border-[#f4cf88] hover:text-[#f4cf88]"
                  >
                    Read the full story
                    <span aria-hidden="true">↗</span>
                  </Link>
                  <Link
                    href="/formation"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-4 py-1.5 text-[11px] font-semibold text-slate-200 hover:border-[#f4cf88] hover:text-[#f4cf88]"
                  >
                    Formation &amp; Tracks
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </Reveal>
            </div>
            <Reveal>
              <div className="relative mt-2 lg:mt-0">
                <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-[#f4cf88]/25 blur-2xl" />
                <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 shadow-[0_18px_60px_rgba(15,23,42,0.9)]">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src="/images/home/about-room.jpg"
                      alt="Prayer & worship space"
                      fill
                      className="object-cover"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 text-xs text-slate-100">
                      <p className="font-semibold">Alabaster Prayer Room</p>
                      <p className="text-[11px] text-slate-300">
                        A resting place for His presence.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* LIGHT NIGHT BLOCK */}
      <Reveal>
        <section className="border-b border-slate-800 bg-[#050814]">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="space-y-3 max-w-xl">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#e0c9c1]">
                  Light Night Worship
                </p>
                <h2 className="font-serif text-2xl sm:text-3xl text-slate-50">
                  Monthly worship nights with the Alabaster family.
                </h2>
                <p className="text-sm text-slate-200">
                  Nights set apart to worship Jesus, pour out our oil, and make
                  room for His presence — open to the whole family and anyone
                  hungry for Him.
                </p>
              </div>

              <Link
                href="/light-night"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-4 py-1.5 text-[11px] font-semibold text-slate-200 hover:border-[#f4cf88] hover:text-[#f4cf88]"
              >
                View all Light Night dates
                <span aria-hidden="true">↗</span>
              </Link>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-start">
              {/* Featured encounter */}
              <div>
                {featuredEncounter ? (
                  <Link
                    href={`/light-night/${featuredEncounter.id}`}
                    className="group block overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 shadow-[0_18px_60px_rgba(15,23,42,0.9)] transition hover:border-[#f4cf88]/70 hover:shadow-[0_22px_70px_rgba(250,204,21,0.25)]"
                  >
                    <div className="relative aspect-[16/9] w-full">
                      {featuredEncounter.homeImage ||
                        featuredEncounter.flyerImage ? (
                        <Image
                          src={
                            featuredEncounter.homeImage ||
                            (featuredEncounter.flyerImage as string)
                          }
                          alt={featuredEncounter.title}
                          fill
                          className="object-cover transition duration-500 group-hover:scale-[1.02]"
                        />
                      ) : (
                        <div className="h-full w-full bg-slate-900" />
                      )}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 space-y-1 text-sm">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#f4cf88]">
                          Next Light Night
                        </p>
                        <p className="font-semibold text-slate-50">
                          {featuredEncounter.title}
                        </p>
                        <p className="text-xs text-slate-200">
                          {featuredEncounter.dateLabel}
                        </p>
                        <p className="text-[11px] text-slate-300">
                          {featuredEncounter.church
                            ? `${featuredEncounter.church} • ${featuredEncounter.city ??
                            featuredEncounter.location
                            }`
                            : featuredEncounter.location}
                        </p>
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div className="rounded-3xl border border-dashed border-slate-700 bg-slate-900/40 p-6 text-sm text-slate-400">
                    No upcoming Light Night dates are scheduled yet. Check back
                    soon or follow us on social for updates.
                  </div>
                )}
              </div>

              {/* Other upcoming */}
              <div className="space-y-4">
                {otherEncounters.length > 0 && (
                  <ul className="space-y-3 text-sm">
                    {otherEncounters.map((enc) => (
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
                              ? `${enc.church} • ${enc.city ?? enc.location}`
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
          </div>
        </section>
      </Reveal>

      {/* STORIES FROM THE ROOM */}
      <Reveal>
        <section className="bg-[#050814]">
          <div className="relative mx-auto max-w-6xl px-4 py-16 sm:py-20">
            <div className="mb-8 space-y-2 text-center sm:text-left">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#e0c9c1]">
                Stories from the room
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl text-slate-50">
                Moments where Jesus met people.
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {[1, 2, 3].map((num) => (
                <article
                  key={num}
                  className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 shadow-md"
                  style={{ aspectRatio: "4/5" }} // Ensures consistent visual space
                >
                  {/* Background image */}
                  <Image
                    src={`/images/home/story-${num}.jpg`}
                    alt={`Story ${num}`}
                    fill
                    className="object-cover opacity-50 transition duration-500 group-hover:opacity-70 group-hover:scale-105"
                  />

                  {/* Soft gradient overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/60 rounded-3xl" />

                  {/* Text on top */}
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="text-sm sm:text-base leading-snug text-slate-100 drop-shadow-md">
                      {num === 1 &&
                        `“I came in numb and left feeling seen by Jesus.”`}
                      {num === 2 &&
                        `“It felt like a safe room to be honest with God again.”`}
                      {num === 3 &&
                        `“This didn’t feel like a crowd — it felt like family.”`}
                    </p>
                    <p className="mt-2 text-xs text-slate-300">
                      — Worship night story
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </Reveal>
    </main>
  );
}

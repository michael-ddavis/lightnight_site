import Image from "next/image";
import Link from "next/link";
import content from "../content.config";

const home = (content as any).home || {};
const about = (content as any).about || {};
const lightNightContent = (content as any).lightNight || {};

export default function Home() {
  const heroImages: string[] = home.gallery?.hero || [];
  const stripImages: string[] = home.gallery?.strip || [];

  const primaryImg = heroImages[0] || "/home_tile_1.jpg";
  const secondaryImg = heroImages[1] || "/home_tile_3.jpg";
  const tertiaryImg = heroImages[2] || "/home_tile_2.jpg";

  const ln = home.lightNightSection || {};
  const givingPreview = home.givingSection || {};
  const stories = home.stories || [];

  const phrases: string[] = about.coreLanguage?.phrases || [];
  const coreValueTitles: string[] = (about.coreValues || [])
    .map((v: any) => v.title)
    .filter(Boolean);

  const encountersRaw = Array.isArray(lightNightContent.encounters)
    ? lightNightContent.encounters
    : [];

  // --- Featured encounter logic (nearest upcoming) ---
  const now = new Date().getTime();

  const parsedEncounters = encountersRaw.map((e: any) => {
    const start = e.startDate || e.start_date || e.date || null;
    let startTime: number | null = null;
    if (start) {
      const t = Date.parse(start);
      startTime = isNaN(t) ? null : t;
    }
    return { ...e, _startTime: startTime };
  });

  const upcoming = parsedEncounters
    .filter((e) => typeof e._startTime === "number" && (e._startTime as number) >= now)
    .sort((a, b) => (a._startTime as number) - (b._startTime as number));

  let featuredEncounter: any | null = null;
  let otherEncounters: any[] = [];

  if (parsedEncounters.length > 0) {
    if (upcoming.length > 0) {
      featuredEncounter = upcoming[0];
      otherEncounters = parsedEncounters.filter((e) => e !== featuredEncounter);
    } else {
      featuredEncounter = parsedEncounters[0];
      otherEncounters = parsedEncounters.slice(1);
    }
  }

  return (
    <main className="bg-[#050814] text-slate-100 min-h-screen">
      {/* HERO – background worship image + free-floating photos + stronger glows */}
      <section className="relative border-b border-slate-800 bg-[#050814] overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src={primaryImg}
            alt="Worship night"
            fill
            priority
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-[#050814]/88 to-[#050814]" />
        </div>

        {/* Bigger, brighter glows */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-48 top-0 h-[28rem] w-[28rem] rounded-full bg-[#f4cf88]/45 blur-[140px]" />
          <div className="absolute right-[-6rem] top-16 h-[26rem] w-[26rem] rounded-full bg-[#e0c9c1]/40 blur-[130px]" />
          <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#050814] via-[#050814]/85 to-transparent" />
        </div>

        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-16 pt-16 sm:px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8 lg:pb-24 lg:pt-20">
          {/* Left: headline + CTAs */}
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#e0c9c1]">
              Love Jesus Well
            </p>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl md:text-[2.75rem]">
              Raising a priesthood who{" "}
              <span className="bg-gradient-to-r from-[#f4cf88] via-[#e0c9c1] to-white bg-clip-text text-transparent">
                Love Jesus Well
              </span>
              .
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-slate-100/90 sm:text-base">
              A worship + prayer family gathered around His presence, learning
              to minister to Jesus first and be formed by His love.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href={ln.primaryCtaHref || "/light-night"}
                className="rounded-full border border-[#f4cf88]/80 bg-[#e0c9c1] px-5 py-2 text-sm font-semibold text-[#050814] shadow-sm hover:brightness-110"
              >
                {ln.primaryCtaLabel || "Join a worship night"}
              </Link>
              <Link
                href="/about"
                className="text-xs font-medium text-slate-100 hover:text-[#f4cf88]"
              >
                What is Alabaster?
              </Link>
            </div>
          </div>

          {/* Right: free-floating image cluster */}
          <div className="flex flex-1 items-center justify-center">
            <div className="relative h-72 w-full max-w-md sm:h-80 md:h-88">
              {/* subtle glow behind cluster */}
              <div className="pointer-events-none absolute inset-8 rounded-[32px] bg-gradient-to-br from-[#f4cf88]/20 via-[#e0c9c1]/12 to-transparent blur-2xl" />

              {/* Main large image */}
              <div className="absolute left-2 right-10 top-4">
                <div className="relative h-40 sm:h-48">
                  <Image
                    src={secondaryImg}
                    alt="Worship"
                    fill
                    className="rounded-3xl object-cover shadow-[0_20px_50px_rgba(0,0,0,0.7)]"
                  />
                </div>
              </div>

              {/* Smaller image, offset upper-right */}
              <div className="absolute right-0 top-10 w-32 sm:w-36">
                <div className="relative h-24 sm:h-28">
                  <div className="pointer-events-none absolute -inset-2 rounded-3xl bg-[#f4cf88]/20 blur-xl" />
                  <Image
                    src={tertiaryImg}
                    alt="Prayer moment"
                    fill
                    className="rounded-2xl object-cover shadow-[0_14px_35px_rgba(0,0,0,0.75)]"
                  />
                </div>
              </div>

              {/* Third floating image bottom-left */}
              <div className="absolute bottom-3 left-0 w-32 sm:w-36">
                <div className="relative h-24 sm:h-28">
                  <div className="pointer-events-none absolute -inset-3 rounded-3xl bg-[#e0c9c1]/18 blur-xl" />
                  <Image
                    src={stripImages[0] || "/about_tile_6.JPG"}
                    alt="Room moment"
                    fill
                    className="rounded-2xl object-cover shadow-[0_16px_40px_rgba(0,0,0,0.8)]"
                  />
                </div>
              </div>

              {/* Small label tag */}
              <div className="absolute bottom-6 right-6 rounded-full border border-[#f4cf88]/60 bg-black/70 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-[#f4cf88]">
                Worship • Prayer • Presence
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION – This is Alabaster (freer images + glows) */}
      <section className="border-b border-slate-800 bg-[#050814] py-12 sm:py-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:items-center lg:gap-12 lg:px-8">
          {/* LEFT: Text + chips + buttons */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-3">
              <span className="h-[1px] w-8 bg-[#f4cf88]/70" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#e0c9c1]">
                This is Alabaster
              </p>
            </div>
            <h2 className="mt-3 text-2xl font-semibold text-slate-50 sm:text-3xl">
              A priesthood formed through worship, prayer, and His Word.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-200 sm:text-base">
              We’re being shaped into lovers of Jesus who minister to Him first,
              live from His presence, and carry His heart into everyday life.
            </p>

            {phrases.length > 0 && (
              <div className="mt-3 space-y-1.5 text-xs text-slate-300">
                {phrases.slice(0, 2).map((p) => (
                  <p key={p} className="flex items-center gap-2">
                    <span className="h-[2px] w-6 bg-[#f4cf88]/70" />
                    <span>{p}</span>
                  </p>
                ))}
              </div>
            )}

            {coreValueTitles.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-slate-200">
                {coreValueTitles.slice(0, 4).map((title) => (
                  <span
                    key={title}
                    className="rounded-full border border-slate-800 bg-black/40 px-3 py-1"
                  >
                    {title}
                  </span>
                ))}
              </div>
            )}

            <div className="mt-6 flex flex-wrap gap-3 text-xs">
              <Link
                href="/about"
                className="inline-flex items-center rounded-full border border-slate-700 px-4 py-1.5 font-medium text-slate-100 hover:border-[#e0c9c1] hover:text-[#e0c9c1]"
              >
                Read the full story
              </Link>
              <Link
                href="/formation"
                className="inline-flex items-center rounded-full border border-slate-700/80 px-4 py-1.5 font-medium text-slate-200 hover:border-[#e0c9c1] hover:text-[#e0c9c1]"
              >
                Formation &amp; tracks
              </Link>
            </div>
          </div>

          {/* RIGHT: freestanding image cluster with glows */}
          <div className="flex flex-1 items-center justify-center">
            <div className="relative h-72 w-full max-w-md sm:h-80">
              {/* soft background halo */}
              <div className="pointer-events-none absolute inset-10 rounded-[36px] bg-gradient-to-tr from-[#f4cf88]/20 via-[#e0c9c1]/12 to-transparent blur-2xl" />

              {/* Main tall image */}
              <div className="absolute left-4 top-2 w-40 sm:w-44">
                <div className="relative h-48 sm:h-56">
                  <Image
                    src={stripImages[0] || "/about_tile_6.JPG"}
                    alt="Alabaster moment 1"
                    fill
                    className="rounded-3xl object-cover shadow-[0_18px_50px_rgba(0,0,0,0.8)]"
                  />
                </div>
              </div>

              {/* Wide image overlapping */}
              <div className="absolute right-0 top-10 w-44 sm:w-52">
                <div className="relative h-28 sm:h-32">
                  <div className="pointer-events-none absolute -inset-2 rounded-3xl bg-[#f4cf88]/18 blur-xl" />
                  <Image
                    src={stripImages[1] || "/about_tile_4.jpg"}
                    alt="Alabaster moment 2"
                    fill
                    className="rounded-3xl object-cover shadow-[0_16px_40px_rgba(0,0,0,0.85)]"
                  />
                </div>
              </div>

              {/* Small bottom-right image */}
              <div className="absolute bottom-3 right-6 w-28 sm:w-32">
                <div className="relative h-24 sm:h-26">
                  <div className="pointer-events-none absolute -inset-3 rounded-3xl bg-[#e0c9c1]/16 blur-xl" />
                  <Image
                    src={stripImages[2] || "/about_tile_7.JPG"}
                    alt="Alabaster moment 3"
                    fill
                    className="rounded-2xl object-cover shadow-[0_14px_30px_rgba(0,0,0,0.8)]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION – Light Night / Worship Nights */}
      <section className="border-b border-slate-800 bg-[#040612] py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            {/* Left: copy + CTAs */}
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#e0c9c1]">
                Light Night worship nights
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-slate-50 sm:text-3xl">
                Simple, presence-first nights centered on Jesus.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-200 sm:text-base">
                {ln.body ||
                  "Light Night isn’t a concert. It’s a room built around ministering to the Lord — singing to Him, waiting on Him, and letting Him touch hearts in the middle of worship."}
              </p>

              <div className="mt-5 flex flex-wrap gap-2 text-[11px] text-slate-200">
                <span className="rounded-full border border-slate-800 bg-black/40 px-3 py-1">
                  Space to encounter Jesus
                </span>
                <span className="rounded-full border border-slate-800 bg-black/40 px-3 py-1">
                  No hype, just His presence
                </span>
                <span className="rounded-full border border-slate-800 bg-black/40 px-3 py-1">
                  Worship, prayer, ministry
                </span>
              </div>

              <div className="mt-6 flex flex-wrap gap-3 text-xs">
                <Link
                  href={ln.primaryCtaHref || "/light-night"}
                  className="inline-flex items-center rounded-full border border-slate-700 px-4 py-1.5 font-medium text-slate-100 hover:border-[#e0c9c1] hover:text-[#e0c9c1]"
                >
                  See upcoming nights
                </Link>
                {ln.secondaryCtaHref && (
                  <Link
                    href={ln.secondaryCtaHref}
                    className="inline-flex items-center rounded-full border border-slate-700/80 px-4 py-1.5 font-medium text-slate-200 hover:border-[#e0c9c1] hover:text-[#e0c9c1]"
                  >
                    Learn about Light Night
                  </Link>
                )}
              </div>
            </div>

            {/* Right: featured card + “also coming up” */}
            {featuredEncounter && (
              <div className="mt-4 w-full max-w-md space-y-4 sm:mt-0">
                {/* Featured upcoming encounter */}
                <div className="relative overflow-hidden rounded-2xl border border-[#f4cf88]/40 bg-black/60 shadow-xl">
                  {featuredEncounter.image && (
                    <>
                      <Image
                        src={featuredEncounter.image}
                        alt={featuredEncounter.title || "Upcoming night"}
                        fill
                        className="object-cover opacity-45"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/20" />
                    </>
                  )}
                  <div className="relative px-4 py-5 text-xs sm:text-sm">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#f4cf88]">
                      Next night
                    </p>
                    <h3 className="mt-1 text-base font-semibold text-slate-50 sm:text-lg">
                      {featuredEncounter.title}
                    </h3>
                    <p className="mt-1 text-slate-200">
                      {featuredEncounter.church} •{" "}
                      {featuredEncounter.timeRange || featuredEncounter.time}
                    </p>
                    <p className="mt-1 text-[11px] text-slate-300">
                      {featuredEncounter.location}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2 text-[11px]">
                      <Link
                        href={
                          featuredEncounter.location_url ||
                          featuredEncounter.locationUrl ||
                          `/light-night#${featuredEncounter.id ?? ""}`
                        }
                        target={
                          featuredEncounter.location_url ||
                          featuredEncounter.locationUrl
                            ? "_blank"
                            : undefined
                        }
                        className="inline-flex items-center rounded-full border border-[#f4cf88]/70 bg-[#e0c9c1] px-4 py-1 font-semibold text-[#050814] hover:brightness-110"
                      >
                        Directions &amp; details
                      </Link>
                      <Link
                        href="/light-night"
                        className="inline-flex items-center rounded-full border border-slate-700 px-3 py-1 font-medium text-slate-100 hover:border-[#e0c9c1] hover:text-[#e0c9c1]"
                      >
                        All worship nights
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Other nights */}
                {otherEncounters.length > 0 && (
                  <div className="rounded-2xl border border-slate-800 bg-black/40 p-4 text-xs sm:text-sm">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                      Also coming up
                    </p>
                    <ul className="mt-2 space-y-2">
                      {otherEncounters.map((e) => (
                        <li
                          key={e.id ?? e.title}
                          className="border-t border-slate-800 pt-2 first:border-t-0 first:pt-0"
                        >
                          <p className="font-medium text-slate-50">
                            {e.title}
                          </p>
                          <p className="text-slate-300">
                            {e.church} • {e.timeRange || e.time}
                          </p>
                          <p className="text-[11px] text-slate-400">
                            {e.location}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* STORIES – overlay text on darkened background images */}
      {Array.isArray(stories) && stories.length > 0 && (
        <section className="border-b border-slate-800 bg-[#050814] py-12 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e0c9c1]">
                  Stories from the room
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-50 sm:text-3xl">
                  What Jesus is doing in hearts.
                </h2>
                <p className="mt-2 max-w-xl text-xs text-slate-300 sm:text-sm">
                  Real moments from worship, prayer, and community — people
                  encountering Jesus, being healed, and learning to love Him
                  well.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {stories.slice(0, 3).map((story: any) => (
                <div
                  key={story.id}
                  className="relative h-48 overflow-hidden rounded-2xl border border-slate-800 bg-black/70 sm:h-56"
                >
                  {story.image && (
                    <Image
                      src={story.image}
                      alt={story.person || "Story"}
                      fill
                      className="object-cover opacity-40"
                    />
                  )}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-black/20" />
                  <div className="relative flex h-full flex-col justify-end p-4">
                    <p className="text-sm leading-relaxed text-slate-100">
                      “{story.quote}”
                    </p>
                    <div className="mt-3 text-xs text-slate-300">
                      <span className="font-semibold text-slate-100">
                        {story.person}
                      </span>
                      {story.role && <span> • {story.role}</span>}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center text-[11px] text-slate-400">
              All of this is happening as we gather around His presence —{" "}
              <Link
                href="/light-night"
                className="font-medium text-[#e0c9c1] hover:text-[#f4cf88]"
              >
                come be in the room
              </Link>
              .
            </div>
          </div>
        </section>
      )}

      {/* SMALL GIVING NUDGE */}
      <section className="bg-[#050814] py-8">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">
            Partner with the story
          </p>
          <p className="mt-2 text-xs text-slate-300 sm:text-sm">
            Your generosity helps create spaces of worship, prayer, and
            formation where people encounter Jesus and are sent.
          </p>
          <div className="mt-3">
            <Link
              href={givingPreview.ctaHref || "/giving"}
              className="text-xs font-medium text-[#e0c9c1] hover:text-[#f4cf88]"
            >
              {givingPreview.ctaLabel || "Give online"}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

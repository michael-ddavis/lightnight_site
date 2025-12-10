// app/light-night/[id]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import content from "../../../content.config";
import LightNightCountdown from "./LightNightCountdown";

type SetlistItem = {
  title?: string;
  artist?: string;
  album?: string;
  albumArt?: string;
};

type LightNightEncounter = {
  id: string;
  title?: string;
  church?: string;
  dateLabel?: string;
  startDate?: string; // ISO used for countdown & "upcoming"
  location?: string;
  city?: string;
  address?: string;
  mapsUrl?: string;
  flyerImage?: string; // 1920x1080
  description?: string;
  timeLabel?: string;
  notes?: string;
  childcare?: string;
  parking?: string;
  doorsOpen?: string;
  setlist?: SetlistItem[];
  [key: string]: any;
};

function getEncounterById(id: string): LightNightEncounter | null {
  const cfg = content as any;
  const encounters: any[] = (cfg.lightNight?.encounters ?? []) as any[];
  const raw = encounters.find((e) => e.id === id);
  if (!raw) return null;
  return raw as LightNightEncounter;
}

interface LightNightPageProps {
  params: { id: string };
}

export default function LightNightPage({ params }: LightNightPageProps) {
  const encounter = getEncounterById(params.id);

  if (!encounter) {
    return notFound();
  }

  const {
    title,
    church,
    dateLabel,
    startDate,
    location,
    city,
    address,
    mapsUrl,
    flyerImage,
    description,
    timeLabel,
    notes,
    childcare,
    parking,
    doorsOpen,
    setlist,
  } = encounter;

  const heroTitle = title ?? "Light Night Worship Night";
  const heroImage = flyerImage ?? "/images/light-night/default-flyer.jpg";

  const fullLocation = address ?? location ?? "";
  const when = dateLabel ?? timeLabel ?? "";
  const countdownISO = startDate; // we expect ISO here in config

  return (
    <main className="min-h-screen bg-[#050814] text-slate-100 site-gutter">
      {/* HERO FLYER CARD */}
      <section className="relative border-b border-slate-800 bg-[#050814]">
        <div className="relative mx-auto max-w-6xl px-4 pt-8 pb-4 sm:pt-10 sm:pb-6">
          <div className="relative overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-900/80">
            {/* Image: 16:9, full flyer visible, big but proportional */}
            <div className="relative w-full aspect-[16/9] bg-[#020308]">
              <Image
                src={heroImage}
                alt={heroTitle}
                fill
                priority
                sizes="100vw"
                className="object-contain"
              />
              {/* subtle dark gradient at bottom for text readability */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050814] via-[#050814]/65 to-transparent" />
            </div>

            {/* overlay text at bottom */}
            <div className="relative px-5 pb-5 pt-4 sm:px-7 sm:pb-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#e0c9c1]">
                Light Night • Worship Night
              </p>
              <h1 className="mt-2 font-serif text-2xl sm:text-3xl lg:text-4xl text-slate-50">
                {heroTitle}
              </h1>

              <div className="mt-3 flex flex-wrap gap-3 text-xs sm:text-sm text-slate-200">
                {when && (
                  <span className="inline-flex items-center rounded-full border border-slate-600/80 bg-black/30 px-3 py-1">
                    {when}
                  </span>
                )}
                {(fullLocation || city) && (
                  <span className="inline-flex items-center rounded-full border border-slate-600/80 bg-black/30 px-3 py-1">
                    {fullLocation}
                    {city ? ` • ${city}` : ""}
                  </span>
                )}
                {church && (
                  <span className="inline-flex items-center rounded-full border border-slate-600/80 bg-black/30 px-3 py-1">
                    Host: {church}
                  </span>
                )}
              </div>

              {/* primary actions */}
              <div className="mt-4 flex flex-wrap gap-3">
                {mapsUrl && (
                  <Link
                    href={mapsUrl}
                    target="_blank"
                    className="inline-flex items-center gap-2 rounded-full border border-[#f4cf88]/80 bg-[#f4cf88] px-4 py-2 text-xs font-semibold text-[#050814] shadow-[0_0_25px_rgba(250,204,21,0.35)] transition hover:brightness-110"
                  >
                    Get directions
                    <span aria-hidden="true">→</span>
                  </Link>
                )}
                <Link
                  href="/light-night"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-600/80 bg-black/30 px-4 py-2 text-xs font-semibold text-slate-100 hover:border-slate-300"
                >
                  All Light Night dates
                </Link>
              </div>
            </div>
          </div>

          {/* COUNTDOWN UNDER FLYER */}
          <LightNightCountdown startISO={countdownISO} />
        </div>
      </section>

      {/* DETAILS + DESCRIPTION */}
      <section className="border-b border-slate-800 bg-[#050814]">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-10 lg:flex-row lg:py-14">
          {/* LEFT: What to expect */}
          <div className="flex-1 space-y-5">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#e0c9c1]">
                What to expect
              </p>
              <h2 className="mt-1 font-serif text-2xl text-slate-50 sm:text-3xl">
                A night set apart for Jesus.
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {description ??
                "Light Night is a worship and prayer gathering where we set aside an evening simply to minister to Jesus, pour out our oil, and make room for His presence. We come as a family — and with friends from across the city — to encounter Him together."}
            </p>

            <div className="mt-3 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#e0c9c1]">
                  Worship &amp; Prayer
                </h3>
                <p className="mt-1 text-sm text-slate-300">
                  Extended worship, moments of stillness, and space to respond
                  to the Lord together — not a concert, but a room built for His
                  presence.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#e0c9c1]">
                  Family Atmosphere
                </h3>
                <p className="mt-1 text-sm text-slate-300">
                  Come as you are. Light Night is for the Alabaster family and
                  anyone hungry for Jesus — a safe place for the misfit, the
                  curious, and the weary.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Details card */}
          <aside className="w-full max-w-md space-y-4 rounded-3xl border border-slate-800 bg-slate-900/80 p-5 lg:p-6">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#e0c9c1]">
              Night details
            </h3>

            <dl className="space-y-3 text-sm text-slate-200">
              {when && (
                <div className="flex justify-between gap-4">
                  <dt className="text-slate-400">Date &amp; Time</dt>
                  <dd className="text-right">{when}</dd>
                </div>
              )}

              {(fullLocation || city) && (
                <div className="flex justify-between gap-4">
                  <dt className="text-slate-400">Location</dt>
                  <dd className="text-right">
                    {fullLocation}
                    {city ? <span className="block">{city}</span> : null}
                  </dd>
                </div>
              )}

              {church && (
                <div className="flex justify-between gap-4">
                  <dt className="text-slate-400">Host church</dt>
                  <dd className="text-right">{church}</dd>
                </div>
              )}

              {(doorsOpen || timeLabel) && (
                <div className="flex justify-between gap-4">
                  <dt className="text-slate-400">Doors open</dt>
                  <dd className="text-right">
                    {doorsOpen ?? "Around 15–20 minutes before the night begins."}
                  </dd>
                </div>
              )}

              <div className="flex justify-between gap-4">
                <dt className="text-slate-400">Childcare</dt>
                <dd className="text-right">
                  {childcare ?? "Childcare is currently not provided."}
                </dd>
              </div>

              <div className="flex justify-between gap-4">
                <dt className="text-slate-400">Parking</dt>
                <dd className="text-right">
                  {parking ?? "On-site parking available at the host church."}
                </dd>
              </div>
            </dl>

            {mapsUrl && (
              <div className="pt-3 hidden sm:block">
                <Link
                  href={mapsUrl}
                  target="_blank"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#f4cf88]/80 bg-[#f4cf88] px-4 py-2 text-xs font-semibold text-[#050814] shadow-[0_0_20px_rgba(250,204,21,0.3)] transition hover:brightness-110"
                >
                  Open in Google Maps
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            )}
          </aside>
        </div>
      </section>

      {/* UPCOMING SETLIST */}
      {/* {setlist && setlist.length > 0 && (
        <section className="border-b border-slate-800 bg-[#050814]">
          <div className="mx-auto max-w-6xl px-4 py-10 lg:py-12">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#e0c9c1]">
                  Upcoming setlist
                </p>
                <h3 className="mt-1 font-serif text-2xl text-slate-50 sm:text-3xl">
                  Songs we&apos;re praying into.
                </h3>
                <p className="mt-2 max-w-xl text-sm sm:text-base text-slate-300">
                  A glimpse of some of the worship we&apos;ll be singing
                  together — to help you lean in, listen ahead, and come ready
                  to minister to Jesus.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {setlist.map((item, idx) => {
                const key = `${item.title ?? "song"}-${idx}`;
                return (
                  <article
                    key={key}
                    className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80"
                  >
                    <div className="relative h-40 w-full bg-slate-950">
                      {item.albumArt ? (
                        <Image
                          src={item.albumArt}
                          alt={item.title ?? "Album art"}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center text-xs text-slate-600">
                          Album art coming soon
                        </div>
                      )}
                    </div>
                    <div className="space-y-1 px-4 py-3">
                      {item.title && (
                        <h4 className="text-sm font-semibold text-slate-50">
                          {item.title}
                        </h4>
                      )}
                      {item.artist && (
                        <p className="text-xs text-slate-300">
                          {item.artist}
                        </p>
                      )}
                      {item.album && (
                        <p className="text-[11px] text-slate-400">
                          {item.album}
                        </p>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      )} */}

      {/* OPTIONAL NOTES */}
      {(notes ?? "").trim().length > 0 && (
        <section className="bg-[#050814]">
          <div className="mx-auto max-w-6xl px-4 py-10 lg:py-12">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#e0c9c1]">
              Additional notes
            </h3>
            <p className="mt-2 max-w-3xl text-sm sm:text-base text-slate-300 whitespace-pre-line">
              {notes}
            </p>
          </div>
        </section>
      )}

      {/* MOBILE STICKY "GET DIRECTIONS" BUTTON */}
      {mapsUrl && (
        <div className="fixed inset-x-0 bottom-0 z-40 bg-gradient-to-t from-[#050814] via-[#050814] to-transparent px-4 pb-4 pt-3 sm:hidden">
          <Link
            href={mapsUrl}
            target="_blank"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#f4cf88]/80 bg-[#f4cf88] px-4 py-2 text-sm font-semibold text-[#050814] shadow-[0_0_24px_rgba(250,204,21,0.35)] transition hover:brightness-110"
          >
            Get directions to this Light Night
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      )}
    </main>
  );
}

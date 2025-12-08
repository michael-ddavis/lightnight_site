import Link from "next/link";
import content from "../../content.config";

type FormationStage = {
  id: string;
  label: string;
  description: string;
};

type RailBlock = {
  title: string;
  body: string;
  points?: string[];
  footer?: string;
};

type RailContent = {
  title: string;
  description: string;
  presence?: RailBlock;
  formation?: RailBlock;
};

type Track = {
  id: string;
  order?: number;
  label?: string;
  name: string;
  course?: string;
  focus?: string;
  description?: string;
  references?: string;
};

type FormatBlock = {
  title: string;
  body: string;
  points?: string[];
  footer?: string;
};

type OutcomesBlock = {
  title: string;
  intro?: string;
  points?: string[];
  footer?: string;
  tagline?: string;
};

const formation = (content as any).formation || {};
const hero = formation.hero || {};
const stages: FormationStage[] =
  formation.stages && formation.stages.length
    ? formation.stages
    : [
        {
          id: "belong",
          label: "BELONG",
          description:
            "Finding home in a family centered on Jesus — worship nights, small rhythms, being known and loved.",
        },
        {
          id: "become",
          label: "BECOME",
          description:
            "Intentional formation in His presence and through core tracks that heal, root, and strengthen your walk.",
        },
        {
          id: "behold",
          label: "BEHOLD",
          description:
            "Learning to live before His face — prayer, worship, and a priestly way of life that treasures His presence.",
        },
        {
          id: "be-sent",
          label: "BE SENT",
          description:
            "Carrying His heart into your family, workplace, city, and the nations as a priest and witness.",
        },
      ];

const rails: RailContent = formation.rails || {};
const tracks: Track[] =
  formation.tracks && formation.tracks.length
    ? formation.tracks
    : [
        {
          id: "whole-heart",
          order: 1,
          label: "Track 1",
          name: "WHOLE HEART",
          course: "Emotionally Healthy Spirituality",
          focus: "Healing & Wholeness",
          description:
            "Jesus restores what’s broken and forms emotional and spiritual maturity. We learn to live from a healed and healthy heart — in relationships, work, and following Jesus.",
          references: "Psalm 147:3 • 3 John 2",
        },
        {
          id: "his-heart",
          order: 2,
          label: "Track 2",
          name: "HIS HEART",
          course: "Gentle and Lowly",
          focus: "Seeing Jesus Clearly",
          description:
            "We behold Jesus as He truly is — gentle, lowly, compassionate, and deeply near. When we see Him rightly, trust and worship come alive and love becomes our natural response.",
          references: "Matthew 11:28–30 • John 14:9",
        },
        {
          id: "firm-foundation",
          order: 3,
          label: "Track 3",
          name: "FIRM FOUNDATION",
          course: "Foundations of Faith",
          focus: "Following Jesus Daily",
          description:
            "We learn identity in Christ, core doctrine, spiritual practices, and what it looks like to follow Jesus in everyday life — building on rock, not sand.",
          references: "Matthew 7:24–25 • Colossians 2:6–7",
        },
      ];

const formatBlock: FormatBlock =
  formation.format || {
    title: "Built to fit real lives.",
    body: "Each track is offered in a simple, flexible format so that people in all seasons can engage:",
    points: [
      "In-person cohorts",
      "Online course format with weekly meetups",
      "Space for processing, questions, and prayer",
    ],
    footer:
      "You don't have to be in the “perfect” season to grow. The Pathway is designed for real people, real schedules, and real transformation.",
  };

const outcomes: OutcomesBlock =
  formation.outcomes || {
    title: "A people who Love Jesus Well.",
    intro: "Through Presence + Formation, we see disciples become:",
    points: [
      "Healed — Whole Heart",
      "Devoted — His Heart",
      "Rooted — Firm Foundation",
      "Priests — who minister before the Lord",
      "Sent — raising worshippers in the nations",
    ],
    footer:
      "This is how Alabaster disciples people to Love Jesus deeply and Love Him well — in purity, prayer, obedience, and affection.",
    tagline:
      "We’re not building programs. We’re raising a priesthood. A family that lives for His presence and carries His heart to the world.",
  };

export default function FormationPage() {
  return (
    <main className="bg-[#050814] text-slate-100">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-slate-800">
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          aria-hidden="true"
        >
          <div className="absolute -left-24 top-0 h-64 w-64 rounded-full bg-[#e0c9c1]/60 blur-3xl" />
          <div className="absolute right-0 top-28 h-72 w-72 rounded-full bg-[#f4cf88]/40 blur-3xl" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050814] to-transparent" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-20 sm:px-6 lg:px-8 lg:pb-20 lg:pt-24">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#e0c9c1]">
            Formation & Tracks
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl md:text-5xl">
            {hero.title || (
              <>
                A pathway to{" "}
                <span className="bg-gradient-to-r from-[#f4cf88] via-[#e0c9c1] to-white bg-clip-text text-transparent">
                  Love Jesus Well.
                </span>
              </>
            )}
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-200 sm:text-base">
            {hero.subtitle ||
              "At Alabaster, discipleship is not just learning information. It’s a journey of becoming a people who know Jesus, minister to Him, and are formed into His likeness — healed, rooted, devoted, and sent."}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
            {hero.journeyLine ||
              "We call this journey the Formation Pathway — a simple, intentional way to walk from BELONG → BECOME → BEHOLD → BE SENT."}
          </p>
        </div>
      </section>

      {/* STAGES: BELONG → BECOME → BEHOLD → BE SENT */}
      <section className="border-b border-slate-800 bg-[#050814] py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-4 text-sm text-slate-200">
            {stages.map((s, idx) => (
              <div
                key={s.id}
                className="rounded-2xl border border-slate-700 bg-black/40 p-4"
              >
                <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-slate-400">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-[#e0c9c1]/60 text-[11px] text-[#e0c9c1]">
                    {idx + 1}
                  </span>
                  {s.label}
                </div>
                <p className="mt-3 text-xs text-slate-300 sm:text-sm">
                  {s.description}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-center text-xs text-slate-400 sm:text-sm">
            The three tracks live at the heart of{" "}
            <span className="text-[#e0c9c1] font-medium">BECOME</span>, but
            you’ll find{" "}
            <span className="text-[#e0c9c1]">Practicing His Presence</span> running through every stage.
          </p>
        </div>
      </section>

      {/* TWO RAILS */}
      <section className="border-b border-slate-800 bg-[#050814] py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#e0c9c1]">
              The two rails of discipleship
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-50 sm:text-3xl">
              {rails.title ||
                "Presence + Formation → Priests unto Jesus."}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
              {rails.description ||
                "We walk on two rails at the same time: Practicing His Presence and Formation Tracks. One rail without the other leads to imbalance; together they form priests who Love Jesus Well."}
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {/* Presence rail */}
            <div className="rounded-2xl border border-slate-700 bg-black/40 p-5">
              <h3 className="text-sm font-semibold text-[#e0c9c1]">
                {rails.presence?.title || "1️⃣ Practicing His Presence"}
              </h3>
              <p className="mt-3 text-sm text-slate-200">
                {rails.presence?.body ||
                  "Weekly spaces where we minister to the Lord:"}
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-xs text-slate-300 sm:text-sm">
                {(rails.presence?.points || [
                  "Light Night worship gatherings",
                  "Alabaster Prayer Room sets",
                  "Moments of communion, intercession, and stillness",
                ]).map((p: string) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <p className="mt-3 text-xs text-slate-300 sm:text-sm">
                {rails.presence?.footer ||
                  "His presence transforms us. This is where love grows deep, where hearts are softened, and where our priestly identity is lived out."}
              </p>
            </div>

            {/* Formation rail */}
            <div className="rounded-2xl border border-slate-700 bg-black/40 p-5">
              <h3 className="text-sm font-semibold text-[#e0c9c1]">
                {rails.formation?.title || "2️⃣ Formation Tracks"}
              </h3>
              <p className="mt-3 text-sm text-slate-200">
                {rails.formation?.body ||
                  "Three intentional discipleship experiences that most people walk through in their first 12–18 months:"}
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-xs text-slate-300 sm:text-sm">
                {(rails.formation?.points || [
                  "Whole Heart – healing & wholeness",
                  "His Heart – seeing Jesus clearly",
                  "Firm Foundation – following Jesus daily",
                ]).map((p: string) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <p className="mt-3 text-xs text-slate-300 sm:text-sm">
                {rails.formation?.footer ||
                  "Presence (encounter) + Formation (growth) → Priests unto Jesus."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TRACKS */}
      <section className="border-b border-slate-800 bg-[#050814] py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#e0c9c1]">
              The three tracks
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-50 sm:text-3xl">
              Whole Heart • His Heart • Firm Foundation
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
              You can begin with any track. Over time, everyone is invited into
              all three — becoming{" "}
              <span className="text-[#e0c9c1]">
                healed, devoted, and rooted
              </span>{" "}
              disciples who live as priests unto Jesus.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {tracks
              .slice()
              .sort((a, b) => (a.order || 0) - (b.order || 0))
              .map((track) => (
                <div
                  key={track.id}
                  className="rounded-2xl border border-slate-700 bg-black/40 p-5"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                    {track.label || `Track ${track.order ?? ""}`}
                  </p>
                  <h3 className="mt-2 text-sm font-semibold text-slate-50">
                    {track.name}
                  </h3>
                  {track.course && (
                    <p className="mt-1 text-xs text-slate-300">
                      Course: {track.course}
                    </p>
                  )}
                  {track.focus && (
                    <p className="mt-2 text-xs text-[#e0c9c1]">
                      Focus: {track.focus}
                    </p>
                  )}
                  {track.description && (
                    <p className="mt-3 text-xs text-slate-300 sm:text-sm">
                      {track.description}
                    </p>
                  )}
                  {track.references && (
                    <p className="mt-3 text-[11px] text-slate-400">
                      📖 {track.references}
                    </p>
                  )}
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* FORMAT & WHAT THIS PRODUCES */}
      <section className="bg-[#050814] py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-[1.2fr,1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#e0c9c1]">
                Hybrid format
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-slate-50 sm:text-3xl">
                {formatBlock.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
                {formatBlock.body}
              </p>
              {formatBlock.points && (
                <ul className="mt-3 list-disc space-y-1 pl-5 text-xs text-slate-300 sm:text-sm">
                  {formatBlock.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              )}
              {formatBlock.footer && (
                <p className="mt-4 text-xs text-slate-300 sm:text-sm">
                  {formatBlock.footer}
                </p>
              )}

              <div className="mt-6 flex flex-wrap gap-3 text-sm">
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-full border border-slate-600 px-4 py-2 text-slate-100 transition hover:border-[#e0c9c1]"
                >
                  Ask about joining a track
                </Link>
                <Link
                  href="/light-night"
                  className="inline-flex items-center rounded-full border border-slate-700 px-4 py-2 text-xs text-slate-200 transition hover:border-[#f4cf88]"
                >
                  Start by coming to a worship night
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-700 bg-black/40 p-5 text-sm text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#e0c9c1]">
                What this produces
              </p>
              <h3 className="mt-3 text-sm font-semibold text-slate-50 sm:text-base">
                {outcomes.title}
              </h3>
              {outcomes.intro && (
                <p className="mt-3 text-xs text-slate-300 sm:text-sm">
                  {outcomes.intro}
                </p>
              )}
              {outcomes.points && (
                <ul className="mt-3 list-disc space-y-1 pl-5 text-xs text-slate-300 sm:text-sm">
                  {outcomes.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              )}
              {outcomes.footer && (
                <p className="mt-4 text-xs text-slate-300 sm:text-sm">
                  {outcomes.footer}
                </p>
              )}
              {outcomes.tagline && (
                <p className="mt-4 text-xs italic text-slate-400 sm:text-sm">
                  {outcomes.tagline}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

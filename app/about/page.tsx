import Image from "next/image";
import Link from "next/link";
import content from "../../content.config";
import SpinningSeal from "../components/SpinningSeal";

const aboutConfig = (content as any).about || {};
const beliefsConfig = (content as any).beliefs || {};

const coreValues =
  (aboutConfig.coreValues as { id: string; title: string; description?: string }[]) ||
  [];

const doctrinalStatements =
  (beliefsConfig.doctrinalStatements as {
    id: string;
    title: string;
    summary: string;
    scriptures?: string[];
  }[]) || [];

export default function AboutPage() {
  return (
    <main className="bg-[#050814] text-slate-100 min-h-screen">
            {/* ABOUT HERO */}
      <section className="border-b border-slate-800 bg-[#050814]">
                {/* Glows */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-40 top-10 h-[20rem] w-[20rem] rounded-full bg-[#f4cf88]/45 blur-[130px]" />
          <div className="absolute right-[-5rem] top-24 h-[18rem] w-[18rem] rounded-full bg-[#e0c9c1]/40 blur-[120px]" />
        </div>
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 lg:flex-row lg:items-center">
          {/* LEFT: text block (your existing copy) */}
          <div className="flex-1 space-y-5">
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#e0c9c1]" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#e0c9c1]">
                About Alabaster
              </p>
            </div>

            <h1 className="max-w-2xl font-serif text-3xl leading-tight text-slate-50 sm:text-4xl lg:text-5xl">
              Raising a priesthood who{" "}
              <span className="text-[#f4cf88]">Love Jesus Well.</span>
            </h1>

            <p className="max-w-2xl text-sm sm:text-base text-slate-300">
              Alabaster is a worship and prayer family being formed into a royal
              priesthood — people who minister to Jesus first, are healed in His
              presence, and are sent out carrying His heart.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <span className="inline-flex items-center rounded-full border border-slate-600/80 px-4 py-1.5 text-xs text-slate-100">
                Presence over everything
              </span>
              <span className="inline-flex items-center rounded-full border border-slate-600/80 px-4 py-1.5 text-xs text-slate-100">
                Priests unto Jesus
              </span>
              <span className="inline-flex items-center rounded-full border border-slate-600/80 px-4 py-1.5 text-xs text-slate-100">
                Family, healing &amp; formation
              </span>
            </div>
          </div>

          {/* RIGHT: spinning logo */}
          <div className="flex-1 flex justify-center lg:justify-end">
           <SpinningSeal
                    phrase={
                      content.home.heroRing.phrase ?? "ALABASTER MINISTRIES LOVE JESUS WELL"
                    }
                    logoSrc={content.home.heroRing.logoSrc ?? "/images/logos/spinning-alabaster.svg"}
                    textColor={content.home.heroRing.textColor ?? "#ffffff"}
                    speedSeconds={content.home.heroRing.speedSeconds ?? 18}
                    size={260}
                    // 👇 leave className empty or only positioning, no shadow / glow
                    className=""
                  />
          </div>
        </div>
      </section>

      {/* WHY ALABASTER */}
      <section className="border-b border-slate-800 bg-[#050814] py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-start">
            <div>
              <h2 className="text-xl font-semibold text-slate-50 sm:text-2xl">
                Why Alabaster?
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-200 sm:text-base">
                Alabaster is not just another church — it’s a family built
                around one central pursuit:{" "}
                <span className="text-[#f4cf88]">
                  loving Jesus deeply and loving Him well
                </span>
                . We exist to raise up a priesthood of believers who minister
                first to the Lord and then to the world.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-base">
                Our heart is for the misfit, the overlooked, and those the
                traditional church has often missed. We want to create a safe
                place for healing, discipleship, and belonging — where people
                encounter Jesus, are restored in His presence, and are formed
                into lovers of God who carry His heart into everyday life.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-base">
                Rooted in Scripture and led by the Spirit, we’re committed to
                raising up priests who live before Jesus, pour out their oil at
                His feet, and are sent into homes, workplaces, cities, and
                nations as worshippers.
              </p>

              <div className="mt-5 flex flex-wrap gap-2 text-[11px] text-slate-300">
                <span className="rounded-full border border-slate-700 bg-black/40 px-3 py-1">
                  A safe place for the misfit
                </span>
                <span className="rounded-full border border-slate-700 bg-black/40 px-3 py-1">
                  Healing &amp; discipleship
                </span>
                <span className="rounded-full border border-slate-700 bg-black/40 px-3 py-1">
                  Lovers of Jesus in the nations
                </span>
              </div>
            </div>

            {/* Small visual card */}
            <div className="relative">
              <div className="pointer-events-none absolute -inset-6 rounded-[32px] bg-gradient-to-br from-[#f4cf88]/20 via-[#e0c9c1]/14 to-transparent blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-black/60 p-5 shadow-[0_24px_70px_rgba(0,0,0,0.8)]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#e0c9c1]">
                  Our heart in one line
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-100">
                  We are{" "}
                  <span className="text-[#f4cf88]">
                    raising priests who Love Jesus Well
                  </span>{" "}
                  — people who minister to Him, love His Word, love His people,
                  and go wherever He sends.
                </p>
                <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-slate-700/60 to-transparent" />
                <div className="mt-4 space-y-1 text-[11px] text-slate-300">
                  <p>• Presence over everything</p>
                  <p>• Scripture as our anchor</p>
                  <p>• Family as a home for healing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION + FORMATION */}
      <section className="border-b border-slate-800 bg-[#050814] py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            {/* Mission & Vision */}
            <div>
              <h2 className="text-xl font-semibold text-slate-50 sm:text-2xl">
                Mission &amp; Vision
              </h2>
              <p className="mt-3 text-sm text-slate-200 sm:text-base">
                We want the people of Alabaster to be{" "}
                <span className="text-[#f4cf88]">
                  rooted in Scripture, formed in His presence, and sent in His
                  love
                </span>
                .
              </p>
              <ul className="mt-4 space-y-3 text-sm text-slate-200">
                <li>
                  <span className="font-semibold text-slate-50">
                    • Be rooted in Scripture
                  </span>
                  <p className="mt-1 text-xs text-slate-300">
                    Learning the full counsel of God through the Word —
                    aligning our lives to biblical living in every area.
                  </p>
                </li>
                <li>
                  <span className="font-semibold text-slate-50">
                    • Love Jesus deeply and Love Him well
                  </span>
                  <p className="mt-1 text-xs text-slate-300">
                    Through worship, prayer, and daily obedience, we learn what
                    love looks like in family, singleness, work, and
                    relationships.
                  </p>
                </li>
                <li>
                  <span className="font-semibold text-slate-50">
                    • Love one another and the world
                  </span>
                  <p className="mt-1 text-xs text-slate-300">
                    Growing as a family that loves deeply and goes — sharing His
                    love through evangelism, outreach, missions, and care for
                    widows and orphans.
                  </p>
                </li>
              </ul>
            </div>

            {/* Formation snapshot */}
            <div className="relative">
              <div className="pointer-events-none absolute -inset-5 rounded-[30px] bg-gradient-to-tr from-[#f4cf88]/18 via-[#e0c9c1]/10 to-transparent blur-2xl" />
              <div className="relative rounded-3xl border border-slate-800 bg-black/60 p-5 shadow-[0_22px_60px_rgba(0,0,0,0.85)]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#e0c9c1]">
                  Formation Pathway
                </p>
                <h3 className="mt-2 text-sm font-semibold text-slate-50 sm:text-base">
                  Presence + Formation → Priests unto Jesus
                </h3>
                <p className="mt-2 text-xs text-slate-300">
                  At Alabaster, discipleship isn&apos;t just learning
                  information — it’s becoming a people who know Jesus, minister
                  to Him, and are formed into His likeness.
                </p>
                <ul className="mt-3 space-y-2 text-xs text-slate-200">
                  <li>
                    <span className="font-semibold text-[#f4cf88]">
                      • WHOLE HEART
                    </span>{" "}
                    — emotional &amp; spiritual healing
                  </li>
                  <li>
                    <span className="font-semibold text-[#f4cf88]">
                      • HIS HEART
                    </span>{" "}
                    — seeing Jesus as He truly is
                  </li>
                  <li>
                    <span className="font-semibold text-[#f4cf88]">
                      • FIRM FOUNDATION
                    </span>{" "}
                    — following Jesus in everyday life
                  </li>
                </ul>
                <p className="mt-3 text-[11px] text-slate-400">
                  BELONG → BECOME → BEHOLD → BE SENT — with Practicing His
                  Presence woven through it all.
                </p>
                <div className="mt-4">
                  <Link
                    href="/formation"
                    className="inline-flex items-center rounded-full border border-slate-700 px-4 py-1.5 text-xs font-medium text-slate-100 hover:border-[#e0c9c1] hover:text-[#e0c9c1]"
                  >
                    Explore Formation &amp; Tracks
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="border-b border-slate-800 bg-[#040612] py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#e0c9c1]">
                Core Values
              </p>
              <h2 className="mt-2 text-xl font-semibold text-slate-50 sm:text-2xl">
                The way of life at Alabaster.
              </h2>
              <p className="mt-2 max-w-xl text-xs text-slate-300 sm:text-sm">
                These values shape how we worship, pray, love one another, and
                live as priests unto God.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {(coreValues.length > 0
              ? coreValues
              : [
                  {
                    id: "presence",
                    title: "Presence Over Everything",
                    description:
                      "We minister to Jesus first — worship and prayer are our first calling and greatest joy.",
                  },
                  {
                    id: "word",
                    title: "Founded on the Word",
                    description:
                      "We anchor life to Scripture, learning to love Jesus through obedience and truth.",
                  },
                  {
                    id: "priesthood",
                    title: "Priestly Identity",
                    description:
                      "We live as a royal priesthood, belonging to Jesus and ministering to His heart.",
                  },
                  {
                    id: "family",
                    title: "Family That Loves Well",
                    description:
                      "We build a home of belonging, honor, and healing where every person is known and loved.",
                  },
                  {
                    id: "sent",
                    title: "Sent Ones",
                    description:
                      "We carry Jesus’ heart into the world — raising up worshippers in every place He sends us.",
                  },
                  {
                    id: "lifestyle",
                    title: "Worship Is Our Lifestyle",
                    description:
                      "Purity, work, relationships, generosity — everything becomes worship to Jesus.",
                  },
                ]
            ).map((value) => (
              <div
                key={value.id}
                className="relative overflow-hidden rounded-2xl border border-slate-800 bg-black/60 p-4 shadow-[0_18px_45px_rgba(0,0,0,0.8)]"
              >
                <div className="pointer-events-none absolute inset-0 opacity-40">
                  <div className="absolute -top-10 right-0 h-24 w-24 rounded-full bg-[#f4cf88]/20 blur-3xl" />
                </div>
                <h3 className="relative text-sm font-semibold text-slate-50">
                  {value.title}
                </h3>
                {value.description && (
                  <p className="relative mt-2 text-xs text-slate-300">
                    {value.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE BELIEVE – beefed up, 2-column grid */}
      <section className="border-b border-slate-800 bg-[#050814] py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#e0c9c1]">
                What we believe
              </p>
              <h2 className="mt-2 text-xl font-semibold text-slate-50 sm:text-2xl">
                Rooted in Scripture. Centered on Jesus.
              </h2>
              <p className="mt-2 max-w-xl text-xs text-slate-300 sm:text-sm">
                Our beliefs are historic, biblical Christianity — shaping how we
                see God, ourselves, and the world. This is the theological
                backbone of Alabaster.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {(doctrinalStatements.length > 0
              ? doctrinalStatements
              : [
                  {
                    id: "bible",
                    title: "The Bible",
                    summary:
                      "God’s inspired, authoritative Word — truth without mixture of error and completely relevant to our daily lives.",
                    scriptures: ["Genesis 1:1", "Hebrews 4:12"],
                  },
                  {
                    id: "father",
                    title: "The Father",
                    summary:
                      "God the Father, creator of all, perfect in holiness, wisdom, power, and love — mercifully involved in the affairs of His children.",
                    scriptures: ["Genesis 1:1", "John 3:16–17", "John 4:24"],
                  },
                  {
                    id: "jesus",
                    title: "Jesus Christ",
                    summary:
                      "The eternal Son of God — born of a virgin, sinless, crucified, buried, and risen. Through His life, death, and resurrection we receive salvation.",
                    scriptures: [
                      "John 1:1–14",
                      "John 3:16–18",
                      "Philippians 2:5–11",
                    ],
                  },
                  {
                    id: "spirit",
                    title: "The Holy Spirit",
                    summary:
                      "The Spirit who convicts, regenerates, indwells, empowers, and leads believers into holy, fruitful lives.",
                    scriptures: ["John 14:16–17", "John 16:7–11"],
                  },
                ]
            ).map((item) => (
              <details
                key={item.id}
                className="group flex flex-col rounded-2xl border border-slate-800 bg-black/60 p-4 shadow-[0_18px_45px_rgba(0,0,0,0.85)] transition-colors hover:border-[#e0c9c1]/70"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-2">
                  <div className="pr-3">
                    <h3 className="text-sm font-semibold text-slate-50">
                      {item.title}
                    </h3>
                    {item.scriptures && item.scriptures.length > 0 && (
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {item.scriptures.map((ref) => (
                          <span
                            key={ref}
                            className="rounded-full border border-slate-700 bg-black/40 px-2 py-0.5 text-[10px] text-slate-300"
                          >
                            {ref}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <span className="mt-0.5 ml-2 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-slate-600 text-[11px] text-slate-300 group-open:border-[#f4cf88] group-open:text-[#f4cf88]">
                    +
                  </span>
                </summary>
                <div className="mt-3 text-xs text-slate-300 space-y-2">
                  <p>{item.summary}</p>
                  <p className="text-[11px] text-slate-400">
                    In short: we hold to historic, orthodox Christian belief
                    about {item.title.toLowerCase()}, submitted to Scripture.
                  </p>
                </div>
              </details>
            ))}
          </div>

          <p className="mt-6 text-center text-[11px] text-slate-400">
            Want to talk through what we believe?{" "}
            <Link
              href="/contact"
              className="font-medium text-[#e0c9c1] hover:text-[#f4cf88]"
            >
              Reach out to us
            </Link>
            .
          </p>
        </div>
      </section>

      {/* PRAYER ROOM & IDENTITY – replaces photo collage */}
      <section className="bg-[#040612] py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-center">
            {/* Left: text */}
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#e0c9c1]">
                Alabaster Prayer Room
              </p>
              <h2 className="mt-2 text-xl font-semibold text-slate-50 sm:text-2xl">
                A place for encounter, devotion, and priesthood.
              </h2>
              <p className="mt-3 text-sm text-slate-200 sm:text-base">
                The Prayer Room is the heart of Alabaster — a space where we
                gather to minister to the Lord, sing the Word, and make room for
                His presence. It’s less about performance and more about
                pouring out our oil at the feet of Jesus.
              </p>

              <div className="mt-4 grid gap-3 text-xs text-slate-300 sm:grid-cols-2">
                <div>
                  <h3 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#f4cf88]">
                    Identity of the Room
                  </h3>
                  <ul className="mt-2 space-y-1">
                    <li>• A place for encounter</li>
                    <li>• A furnace of devotion</li>
                    <li>• A well of refreshing</li>
                    <li>• A war room of intercession</li>
                    <li>• A training ground of priests unto God</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#f4cf88]">
                    Culture &amp; posture
                  </h3>
                  <ul className="mt-2 space-y-1">
                    <li>• Minister to the Lord first</li>
                    <li>• Scripture-led worship &amp; prayer</li>
                    <li>• Purity in heart &amp; motive</li>
                    <li>• Gentleness &amp; compassion</li>
                    <li>• Honor, unity, and safety</li>
                  </ul>
                </div>
              </div>

              <div className="mt-5">
                <Link
                  href="/light-night"
                  className="inline-flex items-center rounded-full border border-slate-700 px-4 py-1.5 text-xs font-medium text-slate-100 hover:border-[#e0c9c1] hover:text-[#e0c9c1]"
                >
                  Learn how to be in the room
                </Link>
              </div>
            </div>

            {/* Right: single atmospheric image card */}
            <div className="relative">
              <div className="pointer-events-none absolute -inset-6 rounded-[32px] bg-gradient-to-br from-[#f4cf88]/22 via-[#e0c9c1]/16 to-transparent blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-black/70 shadow-[0_24px_70px_rgba(0,0,0,0.9)]">
                <div className="relative h-52 sm:h-64">
                  <Image
                    src="/home_encounters_section.jpg"
                    alt="Prayer room atmosphere"
                    fill
                    className="object-cover opacity-70"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-black/10" />
                </div>
                <div className="px-5 pb-5 pt-3 text-xs text-slate-200">
                  <p>
                    We&apos;re learning to be a people who love Jesus for who
                    He is, not just what He does — a resting place for His
                    presence in our city.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

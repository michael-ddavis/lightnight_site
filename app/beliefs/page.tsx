"use client";

import { Disclosure, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import React from "react";

function classNames(...classes: Array<string | boolean | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

const coreBeliefs = [
  {
    id: "presence",
    title: "Presence Over Everything",
    tag: "Our first calling",
    body: (
      <>
        <p>
          We minister to Jesus first — worship and prayer are our first calling
          and greatest joy. Everything we do starts with Him, not with
          strategies or platforms.
        </p>
        <p className="mt-2">
          We gather to bless His heart, gaze on His beauty, and make room for
          His presence in our city and our lives.
        </p>
      </>
    ),
    scriptures: ["Psalm 27:4", "Luke 10:42"],
  },
  {
    id: "word",
    title: "Founded on the Word",
    tag: "Scripture anchored",
    body: (
      <>
        <p>
          We anchor every part of life to Scripture, learning to love Jesus
          through obedience and truth. We want people who can rightly divide
          the word of truth and live it in every area of life.
        </p>
        <p className="mt-2">
          We value theology, doctrine, and the whole counsel of God — not as
          head knowledge, but as a way of knowing Him and walking with Him.
        </p>
      </>
    ),
    scriptures: ["2 Timothy 2:15", "John 14:21"],
  },
  {
    id: "priesthood",
    title: "Priestly Identity",
    tag: "Royal priesthood",
    body: (
      <>
        <p>
          We are a royal priesthood who belong to Jesus — living before Him,
          ministering to His heart, and carrying His presence into the world.
        </p>
        <p className="mt-2">
          Alabaster exists to raise up priests in the nations — people who stand
          before the Lord, love Him well, and lead others to Him.
        </p>
      </>
    ),
    scriptures: ["1 Peter 2:9", "Revelation 1:6"],
  },
  {
    id: "family",
    title: "Family That Loves Well",
    tag: "Home of belonging",
    body: (
      <>
        <p>
          We build a home of belonging, honor, and healing — where every person
          is known and loved. Our heart is especially for those who don’t fit,
          the misfit, and those the Church has not always received.
        </p>
        <p className="mt-2">
          We believe the church is a family, not just a service — a place to
          heal, be discipled, and follow Jesus together.
        </p>
      </>
    ),
    scriptures: ["Romans 12:9–10", "Ephesians 2:19"],
  },
  {
    id: "sent",
    title: "Sent Ones",
    tag: "To the nations",
    body: (
      <>
        <p>
          We carry Jesus’ heart into the world — raising up worshippers in every
          place He sends us. We live on mission locally and globally.
        </p>
        <p className="mt-2">
          Evangelism, outreach, and missions are natural overflow when a people
          are in love with Jesus and rooted in His heart.
        </p>
      </>
    ),
    scriptures: ["Matthew 28:19", "Acts 13:2–3"],
  },
];

const formationBeliefs = [
  {
    id: "formation",
    title: "Alabaster Formation Pathway",
    tag: "Presence + formation",
    body: (
      <>
        <p>
          Discipleship here is not just learning information — it’s becoming a
          people who know Jesus, minister to Him, and are formed into His
          likeness.
        </p>
        <p className="mt-2">
          We are shaped by two continual rhythms:{" "}
          <span className="font-semibold">
            Practicing His Presence and Formation Tracks
          </span>
          . Presence (encounter) + Formation (growth) → Priests unto Jesus.
        </p>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-200">
          <li>Whole Heart – healing & wholeness</li>
          <li>His Heart – seeing Jesus clearly</li>
          <li>Firm Foundation – following Jesus daily</li>
        </ul>
        <p className="mt-3 text-sm text-slate-300">
          BELONG → BECOME → BEHOLD → BE SENT. These tracks live at the heart of
          BECOME.
        </p>
      </>
    ),
    scriptures: ["Psalm 147:3", "Matthew 7:24–25"],
  },
];

const prayerRoomBeliefs = [
  {
    id: "prayer-room",
    title: "Alabaster Prayer Room",
    tag: "Priests in His presence",
    body: (
      <>
        <p>
          The Prayer Room is the heart of Alabaster — a place to minister to the
          Lord day and night, becoming a resting place for His presence.
        </p>
        <p className="mt-2">
          We come not to perform or consume, but to pour out our oil at the feet
          of Jesus and bless His heart as our first priority.
        </p>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-200">
          <li>A place for encounter</li>
          <li>A furnace of devotion</li>
          <li>A well of refreshing</li>
          <li>A war room of intercession</li>
          <li>A training ground of priests unto God</li>
        </ul>
      </>
    ),
    scriptures: ["Revelation 4:8–11", "Psalm 27:4"],
  },
  {
    id: "prayer-values",
    title: "Prayer Room Values",
    tag: "Culture of purity & presence",
    body: (
      <>
        <p>
          We steward the room with gentle guardrails that protect purity,
          presence, and safety:
        </p>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-200">
          <li>Minister to the Lord first — audience of One</li>
          <li>Scripture-led worship and prayer</li>
          <li>Purity of heart & motive over performance</li>
          <li>Gentleness, compassion, and honor toward all</li>
          <li>Unity in the family — no comparison or competition</li>
          <li>Dependence on the Holy Spirit above rigid plans</li>
          <li>Every offering matters — even the quietest whisper</li>
        </ul>
        <p className="mt-3 text-sm text-slate-300">
          Leadership roles are by invitation to protect the room, not to keep
          people out. Everyone is welcome to worship; some are entrusted to
          steward the mic and direction.
        </p>
      </>
    ),
    scriptures: ["Mark 14:3–9", "Luke 21:1–4"],
  },
];

const doctrinalBeliefs = [
  {
    id: "bible",
    title: "The Bible",
    body: (
      <>
        <p>
          The Bible is God’s Word to all people. It was written by human authors
          under the supernatural guidance of the Holy Spirit.
        </p>
        <p className="mt-2">
          Because it was inspired by God, the Bible is truth without any
          mixture of error and is completely relevant to our daily lives.
        </p>
      </>
    ),
    scriptures: ["Genesis 1:1", "Hebrews 4:12"],
  },
  {
    id: "father",
    title: "The Father",
    body: (
      <>
        <p>
          We believe in God the Father, the creator of all things, an infinite,
          personal Spirit, perfect in holiness, wisdom, power, and love.
        </p>
        <p className="mt-2">
          He concerns Himself mercifully in the affairs of His children, hears
          and answers prayer, and saves from sin and death all who come to Him
          through Jesus Christ.
        </p>
      </>
    ),
    scriptures: ["Genesis 1:1", "John 3:16–17", "John 4:24"],
  },
  {
    id: "jesus",
    title: "Jesus",
    body: (
      <>
        <p>
          We believe in Jesus Christ, God&apos;s only begotten Son, conceived by
          the Holy Spirit, born of a virgin, fully God and fully man.
        </p>
        <p className="mt-2">
          We believe in His sinless life, miracles, teachings, and that through
          His death, burial, and resurrection He fulfilled prophecy, atoned for
          the sins of mankind, and established His Church so that all who trust
          in Him may receive redemption and salvation.
        </p>
      </>
    ),
    scriptures: ["John 1:1–14", "John 3:16–18", "Philippians 2:5–11"],
  },
  {
    id: "holy-spirit",
    title: "The Holy Spirit",
    body: (
      <>
        <p>
          We believe in the Holy Spirit who came forth from the Father and the
          Son to convict the world of sin, righteousness, and judgment.
        </p>
        <p className="mt-2">
          He indwells, sanctifies, empowers for service, and seals until
          redemption all who believe in Jesus Christ. He is our abiding helper,
          teacher, and guide.
        </p>
      </>
    ),
    scriptures: ["John 14:16–17", "John 16:7–11"],
  },
];

function BeliefGroup({
  title,
  description,
  items,
  id,
}: {
  title: string;
  description: React.ReactNode;
  items: {
    id: string;
    title: string;
    tag?: string;
    body: React.ReactNode;
    scriptures?: string[];
  }[];
  id?: string;
}) {
  return (
    <section
      id={id}
      className="border-b border-slate-800 bg-[#050814] py-10 sm:py-12"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#e0c9c1]">
            {title}
          </p>
          <div className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
            {description}
          </div>
        </div>

        <div className="mt-6 space-y-3">
          {items.map((item) => (
            <Disclosure
              key={item.id}
              as="div"
              className="overflow-hidden rounded-2xl border border-slate-700 bg-black/40"
            >
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left sm:px-5 sm:py-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-sm font-semibold text-slate-50 sm:text-base">
                          {item.title}
                        </h3>
                        {item.tag && (
                          <span className="inline-flex rounded-full border border-[#e0c9c1]/60 bg-[#e0c9c1]/10 px-2 py-0.5 text-[11px] font-medium text-[#e0c9c1]">
                            {item.tag}
                          </span>
                        )}
                      </div>
                      {item.scriptures && (
                        <p className="mt-1 text-[11px] text-slate-400">
                          {item.scriptures.join(" • ")}
                        </p>
                      )}
                    </div>
                    <ChevronDownIcon
                      className={classNames(
                        "h-5 w-5 flex-shrink-0 text-slate-300 transition-transform",
                        open && "rotate-180 text-[#e0c9c1]"
                      )}
                    />
                  </Disclosure.Button>

                  <Transition
                    enter="transition duration-150 ease-out"
                    enterFrom="transform scale-y-95 opacity-0"
                    enterTo="transform scale-y-100 opacity-100"
                    leave="transition duration-120 ease-in"
                    leaveFrom="transform scale-y-100 opacity-100"
                    leaveTo="transform scale-y-95 opacity-0"
                  >
                    <Disclosure.Panel className="border-t border-slate-700/70 bg-black/30 px-4 py-3 text-sm text-slate-200 sm:px-5 sm:py-4">
                      <div className="space-y-2 text-sm leading-relaxed text-slate-200">
                        {item.body}
                      </div>
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function BeliefsPage() {
  return (
    <main className="bg-[#050814] text-slate-100">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-slate-800">
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          aria-hidden="true"
        >
          <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-[#e0c9c1]/60 blur-3xl" />
          <div className="absolute right-0 top-28 h-72 w-72 rounded-full bg-[#f4cf88]/40 blur-3xl" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050814] to-transparent" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 pb-14 pt-20 sm:px-6 lg:px-8 lg:pb-16 lg:pt-24">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#e0c9c1]">
            What We Believe
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl md:text-5xl">
            Loving Jesus deeply.{" "}
            <span className="bg-gradient-to-r from-[#f4cf88] via-[#e0c9c1] to-white bg-clip-text text-transparent">
              Loving Him well.
            </span>
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-200 sm:text-base">
            Alabaster is a family built around the presence of Jesus. Our
            beliefs are rooted in historic, orthodox Christianity —
            worshipping the Father, Son, and Holy Spirit — and expressed through
            a priestly way of life: Scripture, presence, formation, and love.
          </p>
        </div>
      </section>

      {/* Core values */}
      <BeliefGroup
        title="Alabaster Core Values"
        description={
          <>
            <p>
              These are the pillars of Alabaster&apos;s life together — Presence,
              the Word, priesthood, family, being sent ones, worship as a
              lifestyle, and dependence on the Holy Spirit.
            </p>
            <p className="mt-2">
              They shape how we worship, how we disciple, and how we love people
              who may not fit in traditional church spaces.
            </p>
          </>
        }
        items={coreBeliefs}
      />

      {/* Formation pathway */}
      <BeliefGroup
        title="Formation & Discipleship"
        description={
          <>
            <p>
              Discipleship here looks like{" "}
              <span className="text-[#e0c9c1]">
                Presence + Formation → Priests unto Jesus
              </span>
              . We practice His presence together and walk through intentional
              formation tracks that shape us into lovers of Jesus who are healed,
              rooted, and sent.
            </p>
          </>
        }
        items={formationBeliefs}
      />

      {/* Prayer room */}
      <BeliefGroup
        id="prayer-room"
        title="Alabaster Prayer Room"
        description={
          <>
            <p>
              The Prayer Room is the heart center of Alabaster. It&apos;s where
              our priestly identity is lived out — a furnace of devotion, a
              place of encounter, and a training ground of priests unto God.
            </p>
          </>
        }
        items={prayerRoomBeliefs}
      />

      {/* Doctrinal statement */}
      <BeliefGroup
        title="Statement of Faith"
        description={
          <>
            <p>
              These beliefs root us in the historic Christian faith — who God
              is, how He has revealed Himself in Scripture, and the good news of
              Jesus Christ. They sit underneath everything Alabaster is and
              does.
            </p>
          </>
        }
        items={doctrinalBeliefs}
      />
    </main>
  );
}

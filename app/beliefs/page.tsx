"use client";

import { Disclosure, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import React from "react";
import Reveal from "../components/common/Reveal";

function classNames(...classes: Array<string | boolean | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

const coreBeliefs = [
  {
    id: "presence",
    title: "Presence Over Everything",
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
    title: "The Scriptures",
    body: (
      <>
        <p>
          We believe the Scriptures — Old and New Testaments — are the inspired,
          infallible, and authoritative Word of God.
        </p>
        <p className="mt-2">
          They reveal who God is, how He saves, and how we are called to live —
          truth without any mixture of error and fully reliable.
        </p>
      </>
    ),
    scriptures: ["2 Timothy 3:16–17", "Psalm 19:7–11", "John 17:17"],
  },
  {
    id: "trinity",
    title: "The Trinity",
    body: (
      <>
        <p>
          We believe in one God, eternal and sovereign, existing forever as
          Father, Son, and Holy Spirit — three Persons, one essence — worthy of
          all worship.
        </p>
      </>
    ),
    scriptures: ["Deuteronomy 6:4", "Matthew 28:19"],
  },
  {
    id: "jesus",
    title: "Jesus Christ",
    body: (
      <>
        <p>
          Jesus is fully God and fully man — the eternal Son who became flesh,
          lived sinlessly, died sacrificially, rose bodily, ascended gloriously,
          and will return triumphantly.
        </p>
        <p className="mt-2">
          He is the only Savior and the only Way to God — the center of all
          Scripture and the hope of the world.
        </p>
      </>
    ),
    scriptures: ["John 1:1–14", "Acts 4:12", "1 Corinthians 15:3–4"],
  },
  {
    id: "holy-spirit",
    title: "The Holy Spirit",
    body: (
      <>
        <p>
          We believe the Holy Spirit regenerates, indwells, sanctifies, and
          empowers believers to live holy, joyful, and fruitful lives.
        </p>
        <p className="mt-2">
          He distributes spiritual gifts for the building up of the church — to
          be exercised in order, humility, and love.
        </p>
      </>
    ),
    scriptures: ["Acts 1:8", "1 Corinthians 12:4–11", "Galatians 5:22–25"],
  },
  {
    id: "humanity",
    title: "Humanity & Sin",
    body: (
      <>
        <p>
          We believe all people are created in the image of God with dignity and
          purpose, yet are separated from Him by sin and unable to save
          themselves.
        </p>
      </>
    ),
    scriptures: ["Genesis 1:26–27", "Romans 3:23", "Ephesians 2:1–3"],
  },
  {
    id: "salvation",
    title: "Salvation",
    body: (
      <>
        <p>
          Salvation is by grace alone, through faith alone, in Christ alone —
          not by works.
        </p>
        <p className="mt-2">
          Through Christ we receive forgiveness, righteousness, adoption, and
          eternal life.
        </p>
      </>
    ),
    scriptures: ["Ephesians 2:8–9", "Titus 3:4–7", "John 3:16"],
  },
  {
    id: "church",
    title: "The Church & Priesthood",
    body: (
      <>
        <p>
          Jesus is forming a family — one church, many members — united in the
          Spirit and grounded in the Word.
        </p>
        <p className="mt-2">
          We are a royal priesthood called to minister to Jesus first, love one
          another deeply, and be sent into the world.
        </p>
      </>
    ),
    scriptures: ["1 Peter 2:9", "Ephesians 2:19–22", "Matthew 28:19–20"],
  },
  {
    id: "worship-prayer",
    title: "Worship & Prayer",
    body: (
      <>
        <p>
          We believe worship and prayer are the heart of our ministry —
          ministering to Jesus is our first calling.
        </p>
        <p className="mt-2">
          We gather to bless His name, seek His presence, and align our lives to
          His Word.
        </p>
      </>
    ),
    scriptures: ["Psalm 27:4", "Luke 10:42", "Revelation 5:8"],
  },
  {
    id: "communion",
    title: "Communion / The Lord’s Supper",
    body: (
      <>
        <p>
          Communion is a sacred, holy mystery — a gift Jesus gave His Church to
          remember His sacrifice, proclaim His death, and participate in His
          body and blood.
        </p>
        <p className="mt-2">
          We receive it with repentance, faith, unity, and holy reverence,
          discerning the Lord&apos;s Body as Paul teaches in Scripture. We do
          not take the bread and the cup lightly — they are His body and blood,
          given for us.
        </p>
      </>
    ),
    scriptures: [
      "1 Corinthians 10:16–17",
      "1 Corinthians 11:23–29",
      "Luke 22:19–20",
    ],
  },
  {
    id: "kingdom",
    title: "The Kingdom & Return of Christ",
    body: (
      <>
        <p>
          Jesus is King — and His Kingdom is advancing through His disciples.
        </p>
        <p className="mt-2">
          He will return personally and visibly to renew all things. We live
          awake, holy, and full of hope as we wait for His appearing.
        </p>
      </>
    ),
    scriptures: ["Titus 2:13", "Revelation 21:1–5", "Matthew 24:42–44"],
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
    <main className="bg-[#050814] text-slate-100 site-gutter">
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
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#e0c9c1]">
              What We Believe
            </p>
          </Reveal>
          <Reveal delayMs={50}>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl md:text-5xl">
              Loving Jesus deeply.{" "}
              <span className="bg-gradient-to-r from-[#f4cf88] via-[#e0c9c1] to-white bg-clip-text text-transparent">
                Loving Him well.
              </span>
            </h1>
          </Reveal>
          <Reveal delayMs={100}>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-200 sm:text-base">
              Alabaster is a family built around the presence of Jesus. Our
              beliefs are rooted in historic, orthodox Christianity —
              worshipping the Father, Son, and Holy Spirit — and expressed through
              a priestly way of life: Scripture, presence, formation, and love.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Core values */}
      <Reveal>
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
      </Reveal>

      <Reveal>
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
      </Reveal>

      <Reveal>
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
      </Reveal>

      <Reveal>
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
      </Reveal>
      {/* Doctrinal statement */}

    </main>
  );
}

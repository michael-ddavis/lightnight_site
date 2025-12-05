import Image from "next/image";

export default function PrayerRoomPage() {
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

        <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-4 pb-16 pt-20 sm:px-6 lg:flex-row lg:items-center lg:px-8 lg:pb-20 lg:pt-24">
          <div className="flex-1 max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#e0c9c1]">
              Alabaster Prayer Room
            </p>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl md:text-5xl">
              A resting place for His presence.
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-slate-200 sm:text-base">
              The Prayer Room is the heart of Alabaster — where a priesthood is
              formed in love, purity, and devotion. We gather to minister to the
              Lord, day and night, becoming a resting place for His presence —{" "}
              <span className="text-[#e0c9c1]">
                priests who Love Jesus Well
              </span>
              .
            </p>
            <p className="mt-4 text-xs text-slate-300 sm:text-sm">
              We come to worship Jesus, not to perform. We come to pour out our
              oil, not to consume. We exist to bless His heart, not to build our
              name.
            </p>
          </div>

          <div className="flex-1">
            <div className="relative h-64 w-full overflow-hidden rounded-3xl border border-white/10 bg-slate-900">
              <Image
                src="/home_encounters_section.jpg"
                alt="Alabaster Prayer Room"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050814] via-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-sm text-slate-100">
                <p className="font-semibold">
                  A place for encounter. A furnace of devotion. A training
                  ground of priests unto God.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="border-b border-slate-800 bg-[#050814] py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#e0c9c1]">
              Vision
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-50 sm:text-3xl">
              To minister to the Lord, day and night.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
              The Alabaster Prayer Room exists to minister to the Lord — day and
              night — becoming a resting place for His presence. We are a
              priesthood that loves Jesus well, set apart to bless His heart
              through worship, prayer, and adoration.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
              We gather to worship Jesus, not to perform. We come to pour out
              our oil, not to consume. We exist to bless His heart, not to build
              our name.
            </p>
          </div>

          <div className="mt-8 grid gap-4 text-sm text-slate-200 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-black/40 p-5">
              <h3 className="text-sm font-semibold text-[#e0c9c1]">
                Identity of the Room
              </h3>
              <ul className="mt-3 space-y-1 text-xs sm:text-sm">
                <li>• A place for encounter</li>
                <li>• A furnace of devotion</li>
                <li>• A well of refreshing</li>
                <li>• A war room of intercession</li>
                <li>• A training ground of priests unto God</li>
              </ul>
              <p className="mt-3 text-xs text-slate-300 sm:text-sm">
                This is where we become lovers of Jesus who Love Him Well.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-700 bg-black/40 p-5">
              <h3 className="text-sm font-semibold text-[#e0c9c1]">
                A Priesthood, Not a Program
              </h3>
              <p className="mt-3 text-xs sm:text-sm">
                We are not building events. We&apos;re raising priests — a
                people who live for His presence, minister to His heart, and
                carry His heart into the world.
              </p>
              <p className="mt-3 text-xs sm:text-sm text-slate-300">
                Every simple song, whispered prayer, or quiet tear is
                worship. Every offering matters to Him.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES OF THE ROOM */}
      <section className="border-b border-slate-800 bg-[#050814] py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#e0c9c1]">
              Core values
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-50 sm:text-3xl">
              How we steward the room.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
              These values shape the atmosphere of the Prayer Room — purity,
              gentleness, Scripture, unity, and dependence on the Holy Spirit.
              They&apos;re gentle guardrails that protect the presence we
              treasure.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3 text-sm text-slate-200">
            {[
              {
                title: "Minister to the Lord First",
                body: "We come to give love, not just get something. Our eyes are on Jesus — audience of One.",
                refs: "Rev. 4:8–11 • Ps. 27:4",
              },
              {
                title: "Scripture-Led Worship & Prayer",
                body: "We behold Him through the Word and let Scripture shape our songs, intercession, and responses.",
                refs: "John 17:17 • Col. 3:16",
              },
              {
                title: "Purity in Heart & Motive",
                body: "We serve before the Lord with devotion, holiness, and humility — no performance or self-promotion.",
                refs: "Ps. 24:3–4 • Heb. 12:14",
              },
              {
                title: "Gentleness & Compassion",
                body: "We reflect the gentle and lowly heart of Jesus toward all who walk into the room.",
                refs: "Matt. 11:29 • Eph. 4:2",
              },
              {
                title: "Unity in the Family",
                body: "We guard a culture of honor, safety, encouragement, and belonging — no comparison or competition.",
                refs: "Phil. 2:1–4 • John 13:35",
              },
              {
                title: "Dependence on the Spirit",
                body: "We follow His leading over rigid plans — trusting the Holy Spirit to guide every set.",
                refs: "Zech. 4:6 • Gal. 5:25",
              },
              {
                title: "Every Offering Matters",
                body: "A whisper of worship is as powerful as a song on a microphone. He sees every offering.",
                refs: "Mark 14:3–9 • Luke 21:1–4",
              },
            ].map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-slate-700 bg-black/40 p-5"
              >
                <h3 className="text-sm font-semibold text-slate-50">
                  {v.title}
                </h3>
                <p className="mt-2 text-xs text-slate-300 sm:text-sm">
                  {v.body}
                </p>
                <p className="mt-2 text-[11px] text-slate-400">{v.refs}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GUIDELINES */}
      <section className="bg-[#050814] py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#e0c9c1]">
              Guidelines for Purity & Presence
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-50 sm:text-3xl">
              Gentle guardrails that protect the culture.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
              These aren&apos;t rules to restrict hunger — they&apos;re guardrails
              to protect what Jesus is building in the room: a pure, safe, and
              focused place for Him.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 text-sm text-slate-200">
            <div className="rounded-2xl border border-slate-700 bg-black/40 p-5">
              <h3 className="text-sm font-semibold text-[#e0c9c1]">
                Everyone Welcome to Minister
              </h3>
              <ul className="mt-3 space-y-1 text-xs sm:text-sm">
                <li>• Anyone can come and worship during any set.</li>
                <li>
                  • Mic + leadership roles are by invitation and approval — to
                  protect the room, not restrict access.
                </li>
              </ul>

              <h3 className="mt-5 text-sm font-semibold text-[#e0c9c1]">
                Purity of Heart Comes First
              </h3>
              <ul className="mt-3 space-y-1 text-xs sm:text-sm">
                <li>• No self-promotion, performance, or platform seeking.</li>
                <li>• Hearts remain humble, yielded, repentant.</li>
                <li>• Leaders live in holiness and accountability.</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-700 bg-black/40 p-5">
              <h3 className="text-sm font-semibold text-[#e0c9c1]">
                Jesus at the Center
              </h3>
              <ul className="mt-3 space-y-1 text-xs sm:text-sm">
                <li>• No attention-grabbing expressions.</li>
                <li>• No directives to the room from the mic unless authorized.</li>
                <li>• Worship leaders lead vertically first.</li>
              </ul>

              <h3 className="mt-5 text-sm font-semibold text-[#e0c9c1]">
                Scripture Governs the Room
              </h3>
              <ul className="mt-3 space-y-1 text-xs sm:text-sm">
                <li>• Songs, prayers, prophetic words align with Scripture.</li>
                <li>
                  • Prophetic expressions must reflect Jesus&apos; character and
                  the Word of God.
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-700 bg-black/40 p-5">
              <h3 className="text-sm font-semibold text-[#e0c9c1]">
                Honor & Unity
              </h3>
              <ul className="mt-3 space-y-1 text-xs sm:text-sm">
                <li>• We treat one another with gentleness and respect.</li>
                <li>• No criticism, comparison, or competition.</li>
                <li>• We celebrate every gift and every offering.</li>
              </ul>

              <h3 className="mt-5 text-sm font-semibold text-[#e0c9c1]">
                Atmosphere Stewardship
              </h3>
              <ul className="mt-3 space-y-1 text-xs sm:text-sm">
                <li>• Phones silenced — minimal distractions.</li>
                <li>• The space remains reverent, not chaotic.</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-700 bg-black/40 p-5">
              <h3 className="text-sm font-semibold text-[#e0c9c1]">
                Ministry Boundaries
              </h3>
              <ul className="mt-3 space-y-1 text-xs sm:text-sm">
                <li>• Prayer for others is by permission and with gentleness.</li>
                <li>
                  • If someone needs deeper care, we connect them with pastors
                  or leaders.
                </li>
                <li>
                  • In cases of demonic manifestation, trained leaders quietly
                  step in to care for the person and protect the room.
                </li>
              </ul>

              <p className="mt-4 text-xs text-slate-300 sm:text-sm">
                All of this is about keeping the room centered on Jesus, safe
                for people, and guarded for His presence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

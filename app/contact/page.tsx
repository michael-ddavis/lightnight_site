"use client";

import Image from "next/image";
import Link from "next/link";
import content from "../../content.config";

const contactConfig = (content as any).contact || {};

const primaryEmail: string =
  contactConfig.primaryEmail || "hello@alabasterchurch.org";
const prayerEmail: string =
  contactConfig.prayerEmail || "prayer@alabasterchurch.org";
const cityLabel: string = contactConfig.cityLabel || "Richmond, VA";
const instagramHandle: string =
  contactConfig.instagramHandle || "@alabasterministriesofficial";
const instagramUrl: string =
  contactConfig.instagramUrl || "https://instagram.com/alabasterministriesofficial";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#050814] text-slate-100">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-slate-800">
        {/* Background image (soft) */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/contact_header.jpg"
            alt="Soft worship atmosphere"
            fill
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-[#050814]/90 to-[#050814]" />
        </div>

        {/* Glows */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-40 top-10 h-[20rem] w-[20rem] rounded-full bg-[#f4cf88]/40 blur-[130px]" />
          <div className="absolute right-[-5rem] top-24 h-[18rem] w-[18rem] rounded-full bg-[#e0c9c1]/35 blur-[120px]" />
        </div>

        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="inline-flex items-center gap-3">
            <span className="h-[1px] w-8 bg-[#f4cf88]/70" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#e0c9c1]">
              Contact &amp; Prayer
            </p>
          </div>

          <div className="max-w-3xl">
            <h1 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl md:text-[2.4rem]">
              Reach out, ask questions, or{" "}
              <span className="bg-gradient-to-r from-[#f4cf88] via-[#e0c9c1] to-white bg-clip-text text-transparent">
                share a prayer request
              </span>
              .
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-slate-100/90 sm:text-base">
              Whether you&apos;re curious about Alabaster, wanting to join the
              family, or simply need someone to pray with you — we&apos;d love
              to hear from you.
            </p>
          </div>

          <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-slate-300">
            <span className="rounded-full border border-slate-700 bg-black/40 px-3 py-1">
              Questions about gatherings
            </span>
            <span className="rounded-full border border-slate-700 bg-black/40 px-3 py-1">
              Prayer &amp; pastoral care
            </span>
            <span className="rounded-full border border-slate-700 bg-black/40 px-3 py-1">
              Serving, team, &amp; next steps
            </span>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT – info + form */}
      <section className="border-b border-slate-800 bg-[#050814] py-10 sm:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)] lg:items-start">
            {/* LEFT: Contact details & “how to connect” */}
            <div className="space-y-8">
              {/* Basic contact blocks */}
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#e0c9c1]">
                  Ways to reach us
                </h2>
                <div className="mt-4 space-y-4 text-sm text-slate-200">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                      General contact
                    </p>
                    <a
                      href={`mailto:${primaryEmail}`}
                      className="mt-1 block text-sm font-medium text-slate-50 hover:text-[#f4cf88]"
                    >
                      {primaryEmail}
                    </a>
                    <p className="mt-1 text-xs text-slate-400">
                      Questions about Alabaster, Light Night, or getting
                      involved.
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                      Prayer &amp; care
                    </p>
                    <a
                      href={`mailto:${prayerEmail}`}
                      className="mt-1 block text-sm font-medium text-slate-50 hover:text-[#f4cf88]"
                    >
                      {prayerEmail}
                    </a>
                    <p className="mt-1 text-xs text-slate-400">
                      Our team would love to stand with you in prayer and walk
                      with you toward Jesus.
                    </p>
                  </div>
                </div>
              </div>

              {/* Location / city */}
              <div>
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                  City &amp; region
                </h3>
                <p className="mt-1 text-sm font-medium text-slate-50">
                  {cityLabel}
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  We&apos;re growing as a worship &amp; prayer family in this
                  region — with a heart for the city and the nations.
                </p>
              </div>

              {/* Social */}
              <div>
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Stay in the loop
                </h3>
                <div className="mt-2 flex flex-wrap items-center gap-2 text-xs">
                  <Link
                    href={instagramUrl}
                    target="_blank"
                    className="inline-flex items-center rounded-full border border-slate-700 px-3 py-1 font-medium text-slate-100 hover:border-[#f4cf88] hover:text-[#f4cf88]"
                  >
                    Instagram <span className="ml-1 text-slate-400">{instagramHandle}</span>
                  </Link>
                </div>
                <p className="mt-2 text-[11px] text-slate-400">
                  Gatherings, Light Night dates, and updates will be shared
                  regularly.
                </p>
              </div>

              {/* “What happens when you reach out” */}
              <div className="rounded-2xl border border-slate-800 bg-black/50 p-4 text-xs text-slate-300">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#f4cf88]">
                  When you reach out
                </p>
                <p className="mt-2">
                  We try to respond as thoughtfully as possible — not just with
                  answers, but with{" "}
                  <span className="text-[#e0c9c1]">
                    real care and pastoral heart
                  </span>
                  . Your story matters, and we&apos;re honored you&apos;d share
                  it with us.
                </p>
              </div>
            </div>

            {/* RIGHT: Contact / prayer form */}
            <div className="relative">
              <div className="pointer-events-none absolute -inset-5 rounded-[30px] bg-gradient-to-tr from-[#f4cf88]/18 via-[#e0c9c1]/12 to-transparent blur-2xl" />
              <div className="relative rounded-3xl border border-slate-800 bg-black/60 p-5 shadow-[0_24px_70px_rgba(0,0,0,0.9)] sm:p-6">
                <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#e0c9c1]">
                  Send a note or prayer request
                </h2>
                <p className="mt-2 text-xs text-slate-300">
                  Share as much or as little as you&apos;d like. This goes to
                  our leadership &amp; prayer team.
                </p>

                <form
                  className="mt-4 space-y-4 text-sm"
                  // You can replace this later with an onSubmit handler or action
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="flex flex-col gap-1">
                      <label
                        htmlFor="name"
                        className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-300"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        className="rounded-xl border border-slate-700 bg-black/30 px-3 py-2 text-sm text-slate-100 outline-none placeholder:text-slate-500 focus:border-[#f4cf88]"
                        placeholder="First & last name"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label
                        htmlFor="email"
                        className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-300"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="rounded-xl border border-slate-700 bg-black/30 px-3 py-2 text-sm text-slate-100 outline-none placeholder:text-slate-500 focus:border-[#f4cf88]"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="reason"
                      className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-300"
                    >
                      I&apos;m reaching out about
                    </label>
                    <select
                      id="reason"
                      name="reason"
                      className="rounded-xl border border-slate-700 bg-black/30 px-3 py-2 text-sm text-slate-100 outline-none focus:border-[#f4cf88]"
                      defaultValue="general"
                    >
                      <option value="general">General question</option>
                      <option value="light-night">
                        Light Night / gatherings
                      </option>
                      <option value="prayer">Prayer request</option>
                      <option value="formation">
                        Formation / tracks / next steps
                      </option>
                      <option value="serve">Serving / volunteering</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="message"
                      className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-300"
                    >
                      Message / prayer request
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="rounded-xl border border-slate-700 bg-black/30 px-3 py-2 text-sm text-slate-100 outline-none placeholder:text-slate-500 focus:border-[#f4cf88]"
                      placeholder="Share what’s on your heart..."
                    />
                    <p className="mt-1 text-[11px] text-slate-500">
                      Only our leadership &amp; trusted prayer team will see
                      this.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                    <button
                      type="submit"
                      className="inline-flex items-center rounded-full border border-[#f4cf88]/80 bg-[#e0c9c1] px-4 py-1.5 text-xs font-semibold text-[#050814] hover:brightness-110"
                    >
                      Send to Alabaster
                    </button>
                    <p className="text-[10px] text-slate-500">
                      Prefer email? Write us at{" "}
                      <a
                        href={`mailto:${primaryEmail}`}
                        className="font-medium text-[#e0c9c1] hover:text-[#f4cf88]"
                      >
                        {primaryEmail}
                      </a>
                      .
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SMALL CLOSER */}
      <section className="bg-[#050814] py-8">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500">
            You don&apos;t have to walk alone
          </p>
          <p className="mt-2 text-xs text-slate-300 sm:text-sm">
            Our heart is to be a family that{" "}
            <span className="text-[#f4cf88]">loves Jesus well</span> and walks
            with people in real life. Reaching out is a good place to start.
          </p>
        </div>
      </section>
    </main>
  );
}

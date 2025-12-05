"use client";

import React from "react";
import Image from "next/image";
import content from "../../content.config";

const givingConfig = (content as any).giving || {};
const squareConfig = givingConfig.square || {};
const venmoConfig = givingConfig.venmo || {};
const copyConfig = givingConfig.copy || {};

const SQUARE_CHECKOUT_URL: string =
  squareConfig.checkoutUrl || "https://squareup.com";
const RECURRING_PLANS:
  | { id: string; label: string; href: string }[]
  | undefined = squareConfig.monthlyPlans;

const VENMO_USERNAME: string = venmoConfig.username || "YourVenmoUser";
const VENMO_QR_PATH: string =
  venmoConfig.qrImagePath || "/images/qr/venmo.png";

const DEFAULT_NOTE: string =
  venmoConfig.defaultNote || "Alabaster Giving";

function formatCurrency(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(amount);
}

function sanitizeInput(v: string): number | "" {
  const n = Number(v.replace(/[^\d.]/g, ""));
  if (Number.isNaN(n)) return "";
  return Math.max(0, Math.min(n, 100000));
}

export default function GivingPage() {
  const [mode, setMode] = React.useState<"once" | "monthly">("once");
  const [amount, setAmount] = React.useState<number | "">("");
  const [coverFees, setCoverFees] = React.useState(true);
  const [showQR, setShowQR] = React.useState(false);

  const quickAmounts = [25, 50, 100, 250];

  // Estimate with fees for Venmo + display
  const withFeesNum = React.useMemo<number | null>(() => {
    if (amount === "") return null;
    if (!coverFees) return Number(amount);
    const fee = amount * 0.029 + 0.3; // approximate card fee
    const grossed = amount + fee;
    return Math.round(grossed * 100) / 100;
  }, [amount, coverFees]);

  const venmoAmountStr =
    withFeesNum !== null ? withFeesNum.toFixed(2) : undefined;

  const venmoAppLink = venmoAmountStr
    ? `venmo://paycharge?txn=pay&recipients=${encodeURIComponent(
        VENMO_USERNAME
      )}&amount=${venmoAmountStr}&note=${encodeURIComponent(DEFAULT_NOTE)}`
    : `venmo://paycharge?txn=pay&recipients=${encodeURIComponent(
        VENMO_USERNAME
      )}&note=${encodeURIComponent(DEFAULT_NOTE)}`;

  const venmoWebLink = venmoAmountStr
    ? `https://venmo.com/${encodeURIComponent(
        VENMO_USERNAME
      )}?txn=pay&amount=${venmoAmountStr}&note=${encodeURIComponent(
        DEFAULT_NOTE
      )}`
    : `https://venmo.com/${encodeURIComponent(
        VENMO_USERNAME
      )}?txn=pay&note=${encodeURIComponent(DEFAULT_NOTE)}`;

  const heroTitle =
    copyConfig.heroTitle || "Practice generosity with the family.";
  const heroSubtitle =
    copyConfig.heroSubtitle ||
    "Your giving fuels worship, formation, hospitality, and mission through Alabaster.";

  return (
    <main className="min-h-screen bg-[#050814] text-slate-100">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-slate-800">
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <Image
            src={copyConfig.heroImage || "/giving_header.jpg"}
            alt="Giving hero"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-[#050814]/90 to-[#050814]" />
        </div>

        {/* Glows */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-40 top-10 h-[20rem] w-[20rem] rounded-full bg-[#f4cf88]/40 blur-[130px]" />
          <div className="absolute right-[-5rem] top-24 h-[18rem] w-[18rem] rounded-full bg-[#e0c9c1]/35 blur-[120px]" />
        </div>

        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="inline-flex items-center gap-3">
            <span className="h-[1px] w-8 bg-[#f4cf88]/70" />
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#e0c9c1]">
              Giving
            </p>
          </div>

          <div className="mt-4 max-w-3xl">
            <h1 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl md:text-[2.4rem]">
              {heroTitle}
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-slate-100/90 sm:text-base">
              {heroSubtitle}
            </p>
          </div>

          <div className="mt-5 inline-flex rounded-full border border-slate-800 bg-black/50 px-3 py-1 text-[11px] text-slate-300">
            Worship, prayer, formation, and mission — funded by a family that
            loves Jesus well.
          </div>
        </div>
      </section>

      {/* TABS */}
      <section className="border-b border-slate-800 bg-[#050814] py-4 sm:py-6">
        <div className="mx-auto flex max-w-6xl justify-center px-4 sm:px-6 lg:px-8">
          <div
            className="inline-flex rounded-full border border-slate-800 bg-black/40 p-1"
            role="tablist"
            aria-label="Giving mode"
          >
            <button
              role="tab"
              aria-selected={mode === "once"}
              onClick={() => setMode("once")}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition ${
                mode === "once"
                  ? "bg-[#f4cf88] text-[#050814]"
                  : "text-slate-200 hover:bg-white/5"
              }`}
            >
              One-time
            </button>
            <button
              role="tab"
              aria-selected={mode === "monthly"}
              onClick={() => setMode("monthly")}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition ${
                mode === "monthly"
                  ? "bg-[#f4cf88] text-[#050814]"
                  : "text-slate-200 hover:bg-white/5"
              }`}
            >
              Monthly
            </button>
          </div>
        </div>
      </section>

      {/* ONE-TIME MODE */}
      {mode === "once" && (
        <section className="border-b border-slate-800 bg-[#050814] py-10 sm:py-14">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] lg:px-8">
            {/* Amount card */}
            <div className="relative">
              <div className="pointer-events-none absolute -inset-4 rounded-[30px] bg-gradient-to-tr from-[#f4cf88]/18 via-[#e0c9c1]/12 to-transparent blur-2xl" />
              <div className="relative rounded-3xl border border-slate-800 bg-black/60 p-5 shadow-[0_24px_70px_rgba(0,0,0,0.9)] sm:p-6">
                <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#e0c9c1]">
                  Choose an amount
                </h2>
                <p className="mt-2 text-xs text-slate-300">
                  Whether it&apos;s a little or a lot, every gift is worship to
                  Jesus and helps us love people well.
                </p>

                {/* Quick buttons */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {quickAmounts.map((v) => (
                    <button
                      key={v}
                      type="button"
                      onClick={() => setAmount(v)}
                      className={[
                        "rounded-full border px-3 py-1.5 text-xs font-medium",
                        amount === v
                          ? "border-[#f4cf88] bg-[#f4cf88]/15 text-[#f4cf88]"
                          : "border-slate-700 text-slate-100 hover:bg-white/5",
                      ].join(" ")}
                    >
                      {formatCurrency(v)}
                    </button>
                  ))}
                </div>

                {/* Custom */}
                <div className="mt-4">
                  <label
                    htmlFor="custom-amount"
                    className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-300"
                  >
                    Custom amount
                  </label>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="rounded-xl border border-slate-800 bg-black/40 px-3 py-2 text-sm text-slate-300">
                      $
                    </span>
                    <input
                      id="custom-amount"
                      inputMode="decimal"
                      value={amount}
                      onChange={(e) => setAmount(sanitizeInput(e.target.value))}
                      placeholder="0.00"
                      className="w-32 rounded-xl border border-slate-800 bg-black/40 px-3 py-2 text-sm text-slate-100 outline-none placeholder:text-slate-500 focus:border-[#f4cf88]"
                    />
                  </div>
                </div>

                {/* Fees */}
                <div className="mt-4 flex items-center justify-between gap-3 rounded-2xl border border-slate-800 bg-black/40 px-3 py-2">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={coverFees}
                      onChange={() => setCoverFees((v) => !v)}
                      className="h-4 w-4 accent-[#f4cf88]"
                    />
                    <span className="text-[11px] text-slate-200">
                      Cover card processing fees (~2.9% + $0.30)
                    </span>
                  </label>
                  <div className="text-[11px] text-slate-400">
                    {withFeesNum !== null && coverFees
                      ? `Total: ${formatCurrency(withFeesNum)}`
                      : null}
                  </div>
                </div>

                <p className="mt-2 text-[10px] text-slate-500">
                  Fee estimate for online card gifts via Square. Adjust language
                  if your rate or provider differs.
                </p>
              </div>
            </div>

            {/* Methods card */}
            <div className="space-y-5">
              {/* Square */}
              <div className="rounded-3xl border border-slate-800 bg-black/60 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.85)] sm:p-6">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-50">
                      Give by card (Square)
                    </h3>
                    <p className="mt-1 text-xs text-slate-300">
                      Secure debit/credit processing. You&apos;ll receive a
                      receipt by email.
                    </p>
                  </div>
                  <div className="hidden sm:block">
                    {/* Replace src with your Square logo path */}
                    <Image
                      src="/images/logos/square.svg"
                      alt="Square"
                      width={72}
                      height={24}
                      className="opacity-80"
                    />
                  </div>
                </div>

                <a
                  href={SQUARE_CHECKOUT_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center rounded-full border border-[#f4cf88]/80 bg-[#e0c9c1] px-4 py-1.5 text-xs font-semibold text-[#050814] hover:brightness-110"
                >
                  Continue to Square
                </a>
              </div>

              {/* Venmo */}
              <div className="rounded-3xl border border-slate-800 bg-black/60 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.85)] sm:p-6">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-50">
                      Give with Venmo
                    </h3>
                    <p className="mt-1 text-xs text-slate-300">
                      Opens the Venmo app or site. You can also scan the QR.
                    </p>
                  </div>
                  <div className="hidden sm:block">
                    {/* Replace src with your Venmo logo path */}
                    <Image
                      src="/images/logos/venmo.svg"
                      alt="Venmo"
                      width={48}
                      height={24}
                      className="opacity-80"
                    />
                  </div>
                </div>

                <div className="mt-3 flex flex-wrap gap-2 text-xs">
                  <a
                    href={venmoAppLink}
                    className="rounded-full border border-slate-700 px-3 py-1 font-medium text-slate-100 hover:border-[#f4cf88] hover:text-[#f4cf88]"
                  >
                    Open Venmo app
                  </a>
                  <a
                    href={venmoWebLink}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-slate-700 px-3 py-1 font-medium text-slate-100 hover:border-[#f4cf88] hover:text-[#f4cf88]"
                  >
                    Open in browser
                  </a>
                  <button
                    type="button"
                    onClick={() => setShowQR(true)}
                    className="rounded-full border border-slate-700 px-3 py-1 font-medium text-slate-100 hover:border-[#f4cf88] hover:text-[#f4cf88]"
                  >
                    Show QR
                  </button>
                </div>

                {withFeesNum !== null && (
                  <p className="mt-2 text-[11px] text-slate-400">
                    Prefilled amount:{" "}
                    <span className="font-semibold text-slate-200">
                      {formatCurrency(withFeesNum)}
                    </span>{" "}
                    • Note: &ldquo;{DEFAULT_NOTE}&rdquo;
                  </p>
                )}

                <p className="mt-1 text-[10px] text-slate-500">
                  Username: @{VENMO_USERNAME}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* MONTHLY MODE */}
      {mode === "monthly" && (
        <section className="border-b border-slate-800 bg-[#050814] py-10 sm:py-14">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] lg:px-8">
            {/* Messaging card */}
            <div className="relative">
              <div className="pointer-events-none absolute -inset-4 rounded-[30px] bg-gradient-to-tr from-[#f4cf88]/18 via-[#e0c9c1]/12 to-transparent blur-2xl" />
              <div className="relative rounded-3xl border border-slate-800 bg-black/60 p-5 shadow-[0_24px_70px_rgba(0,0,0,0.9)] sm:p-6">
                <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#e0c9c1]">
                  Make it monthly
                </h2>
                <p className="mt-2 text-xs text-slate-300">
                  Joining as a monthly giver helps us plan, plant, and serve
                  consistently. It&apos;s one of the most practical ways to
                  walk with us in this assignment.
                </p>
                <ul className="mt-3 space-y-1 text-xs text-slate-300">
                  <li>• Receipts emailed automatically</li>
                  <li>• Track your giving history on Square</li>
                  <li>• Change or cancel anytime on Square&apos;s secure site</li>
                </ul>
              </div>
            </div>

            {/* Plan buttons */}
            <div className="rounded-3xl border border-slate-800 bg-black/60 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.85)] sm:p-6">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h3 className="text-sm font-semibold text-slate-50">
                    Choose a monthly plan
                  </h3>
                  <p className="mt-1 text-xs text-slate-300">
                    Select an amount below to set up a recurring gift.
                  </p>
                </div>
                <div className="hidden sm:block">
                  <Image
                    src="/images/logos/square.svg"
                    alt="Square"
                    width={72}
                    height={24}
                    className="opacity-80"
                  />
                </div>
              </div>

              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                {(RECURRING_PLANS && RECURRING_PLANS.length > 0
                  ? RECURRING_PLANS
                  : [
                      {
                        id: "m25",
                        label: "$25 / month",
                        href: "https://square.link/u/plan-25",
                      },
                      {
                        id: "m50",
                        label: "$50 / month",
                        href: "https://square.link/u/plan-50",
                      },
                      {
                        id: "m100",
                        label: "$100 / month",
                        href: "https://square.link/u/plan-100",
                      },
                      {
                        id: "custom",
                        label: "Custom / month",
                        href: "https://square.link/u/plan-custom",
                      },
                    ]
                ).map((plan) => (
                  <a
                    key={plan.id}
                    href={plan.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-slate-700 px-4 py-2 text-center text-xs font-medium text-slate-100 hover:border-[#f4cf88] hover:text-[#f4cf88]"
                  >
                    {plan.label}
                  </a>
                ))}
              </div>

              <p className="mt-3 text-[11px] text-slate-500">
                You&apos;ll manage your subscription on Square&apos;s secure
                site. We don&apos;t store card details on this site.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* TRUST / FAQ STRIP */}
      <section className="bg-[#040612] py-10 sm:py-12">
        <div className="mx-auto grid max-w-6xl gap-5 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          <div className="rounded-2xl border border-slate-800 bg-black/60 p-4 text-xs text-slate-300">
            <h3 className="text-sm font-semibold text-slate-50">
              Tax-deductible
            </h3>
            <p className="mt-2">
              Gifts are tax-deductible to the extent allowed by law. Annual
              giving statements are emailed at the beginning of each year.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-black/60 p-4 text-xs text-slate-300">
            <h3 className="text-sm font-semibold text-slate-50">
              Receipts &amp; records
            </h3>
            <p className="mt-2">
              You&apos;ll receive a receipt for each online gift. Reach out if
              you need help updating your info or viewing your history.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-black/60 p-4 text-xs text-slate-300">
            <h3 className="text-sm font-semibold text-slate-50">
              Security &amp; integrity
            </h3>
            <p className="mt-2">
              Payments are processed by trusted providers (Square / Venmo) on
              their secure platforms. We aim to steward every dollar as worship
              unto Jesus.
            </p>
          </div>
        </div>
      </section>

      {/* Venmo QR modal */}
      {showQR && (
        <div className="fixed inset-0 z-[60] grid place-items-center bg-black/75 backdrop-blur">
          <div className="w-full max-w-xs rounded-3xl border border-slate-800 bg-[#050814] p-5 shadow-[0_32px_90px_rgba(0,0,0,0.95)]">
            <div className="flex items-center justify-between gap-3">
              <h4 className="text-sm font-semibold text-slate-50">
                Scan to give on Venmo
              </h4>
              <button
                type="button"
                onClick={() => setShowQR(false)}
                className="rounded-full border border-slate-700 px-2 py-1 text-[11px] text-slate-300 hover:border-[#f4cf88] hover:text-[#f4cf88]"
              >
                ✕
              </button>
            </div>
            <div className="mt-4 grid place-items-center">
              <div className="rounded-2xl bg-white p-2">
                <Image
                  src={VENMO_QR_PATH}
                  alt="Venmo QR"
                  width={256}
                  height={256}
                  className="h-56 w-56 object-contain"
                />
              </div>
            </div>
            <p className="mt-3 text-center text-[11px] text-slate-300">
              @{VENMO_USERNAME}
            </p>
          </div>
        </div>
      )}

      {/* CLOSER */}
      <section className="bg-[#050814] py-8">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mt-2 text-xs text-slate-300 sm:text-sm">
            Every gift is an act of worship. Our prayer is that generosity would
            form us into a people who look like Jesus — in purity, simplicity,
            and love.
          </p>
        </div>
      </section>
    </main>
  );
}

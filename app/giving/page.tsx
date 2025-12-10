"use client";

import React from "react";
import Image from "next/image";
import content from "../../content.config";

// ---- TYPES ----
type MonthlyPlan = { id: string; label: string; href: string };
type OneTimeOption = { amount: string; href: string };

// ---- CONFIG LOOKUPS ----
const givingConfig = (content as any).giving || {};
const squareConfig = givingConfig.square || {};
const venmoConfig = givingConfig.venmo || {};

// One-time preset links for Square (25 / 50 / 100 / 250)
const ONE_TIME_OPTIONS: OneTimeOption[] = Array.isArray(
  squareConfig.oneTimeLinks
)
  ? (squareConfig.oneTimeLinks as OneTimeOption[])
  : [];

// Monthly plans
const RECURRING_PLANS: MonthlyPlan[] = Array.isArray(squareConfig.monthlyPlans)
  ? (squareConfig.monthlyPlans as MonthlyPlan[])
  : [];

// General “custom amount” page for card giving
const CUSTOM_GIVING_URL: string =
  squareConfig.customGiving || "https://donate.stripe.com/your_donate_link";

// Venmo config
const VENMO_USERNAME: string = venmoConfig.username || "YourVenmoUser";
const VENMO_QR_PATH: string =
  venmoConfig.qrImageSrc || "/images/qr/venmo.png";
const DEFAULT_NOTE: string =
  venmoConfig.defaultNote || "Alabaster Giving";

// ---- HELPERS ----
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

// ---- PAGE ----

export default function GivingPage() {
  const [mode, setMode] = React.useState<"once" | "monthly">("once");

  // Square: track which preset button is “active” (for styling + text only)
  const [squareSelectedAmount, setSquareSelectedAmount] = React.useState<
    number | null
  >(null);

  // Venmo: has its own amount + cover fees
  const [venmoAmount, setVenmoAmount] = React.useState<number | "">("");
  const [coverFees, setCoverFees] = React.useState(true);
  const [showQR, setShowQR] = React.useState(false);

  // --- Venmo fee math ---
  const venmoWithFees: number | null = React.useMemo(() => {
    if (venmoAmount === "") return null;
    if (!coverFees) return Number(venmoAmount);

    const base = Number(venmoAmount);
    const fee = base * 0.029 + 0.3;
    const grossed = base + fee;
    return Math.round(grossed * 100) / 100;
  }, [venmoAmount, coverFees]);

  const venmoAmountStr =
    venmoWithFees !== null ? venmoWithFees.toFixed(2) : undefined;

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

  const heroTitle = "Practice generosity with the family.";
  const heroSubtitle =
    "Your giving fuels worship, formation, hospitality, and mission through Alabaster.";

  return (
    <main className="min-h-screen bg-[#050814] text-slate-100 site-gutter">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-slate-800">
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
            {/* CARD 1: SQUARE */}
            <div className="relative">
              <div className="pointer-events-none absolute -inset-4 rounded-[30px] bg-gradient-to-tr from-[#f4cf88]/18 via-[#e0c9c1]/12 to-transparent blur-2xl" />
              <div className="relative rounded-3xl border border-slate-800 bg-black/60 p-5 shadow-[0_24px_70px_rgba(0,0,0,0.9)] sm:p-6">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h2 className="text-sm font-semibold text-slate-50">
                      Give by card (Square)
                    </h2>
                    <p className="mt-1 text-xs text-slate-300">
                      Secure debit/credit processing. You&apos;ll receive a
                      receipt by email.
                    </p>
                  </div>
                  <div className="hidden sm:block">
                    <Image
                      src={squareConfig.logoSrc || "/images/logos/square.svg"}
                      alt="Square"
                      width={72}
                      height={24}
                      className="opacity-80"
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Choose an amount
                  </p>
                  <p className="mt-2 text-xs text-slate-300">
                    Whether it&apos;s a little or a lot, every gift is worship
                    to Jesus and helps us love people well.
                  </p>

                  {/* Quick amount buttons -> each goes straight to its own link */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {ONE_TIME_OPTIONS.map((opt) => {
                      const amtNum = Number(opt.amount);
                      const isSelected =
                        squareSelectedAmount !== null &&
                        squareSelectedAmount === amtNum;

                      return (
                        <a
                          key={opt.amount}
                          href={opt.href}
                          target="_blank"
                          rel="noreferrer"
                          onClick={() => setSquareSelectedAmount(amtNum)}
                          className={[
                            "rounded-full border px-4 py-1.5 text-xs font-medium transition",
                            isSelected
                              ? "border-[#f4cf88] bg-[#f4cf88]/15 text-[#f4cf88]"
                              : "border-slate-700 text-slate-100 hover:bg-white/5",
                          ].join(" ")}
                        >
                          {formatCurrency(amtNum)}
                        </a>
                      );
                    })}
                  </div>

                  {/* Custom amount – goes to generic Stripe/Square page */}
                  <div className="mt-4">
                    <a
                      href={CUSTOM_GIVING_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center rounded-full border border-slate-700 px-4 py-1.5 text-xs font-semibold text-slate-100 hover:border-[#f4cf88] hover:text-[#f4cf88]"
                    >
                      Give a custom amount
                    </a>
                  </div>

                  {squareSelectedAmount !== null && (
                    <p className="mt-3 text-[11px] text-slate-400">
                      Selected amount:{" "}
                      <span className="font-semibold text-slate-100">
                        {formatCurrency(squareSelectedAmount)}
                      </span>
                    </p>
                  )}

                  <p className="mt-3 text-[11px] text-slate-500">
                    If you select one of the preset amounts, that button uses a
                    dedicated link for that amount. For any other amount,
                    you&apos;ll land on our general giving page where you can
                    enter it there.
                  </p>
                </div>
              </div>
            </div>

            {/* CARD 2: VENMO */}
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
                  <Image
                    src="/images/logos/venmo.svg"
                    alt="Venmo"
                    width={48}
                    height={24}
                    className="opacity-80"
                  />
                </div>
              </div>

              {/* Custom amount just for Venmo */}
              <div className="mt-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Enter a custom amount
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <span className="rounded-xl border border-slate-800 bg-black/40 px-3 py-2 text-sm text-slate-300">
                    $
                  </span>
                  <input
                    inputMode="decimal"
                    value={venmoAmount}
                    onChange={(e) =>
                      setVenmoAmount(sanitizeInput(e.target.value))
                    }
                    placeholder="0.00"
                    className="w-32 rounded-xl border border-slate-800 bg-black/40 px-3 py-2 text-sm text-slate-100 outline-none placeholder:text-slate-500 focus:border-[#f4cf88]"
                  />
                </div>
              </div>

              {/* Venmo actions */}
              <div className="mt-4 flex flex-wrap gap-2 text-xs">
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

              {/* Fees toggle & summary */}
              <div className="mt-5 flex flex-col gap-3 rounded-2xl border border-slate-800 bg-black/40 px-4 py-3 text-[11px] text-slate-200 sm:flex-row sm:items-center sm:justify-between">
                <label className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={coverFees}
                    onChange={() => setCoverFees((v) => !v)}
                    className="h-4 w-4 accent-[#f4cf88]"
                  />
                </label>
                <span className="text-[11px] text-slate-200">
                  Cover card processing fees (~2.9% + $0.30)
                </span>
                <span className="text-[11px] text-slate-300">
                  Estimated total:{" "}
                  {venmoWithFees !== null
                    ? formatCurrency(venmoWithFees)
                    : "$0.00"}
                </span>
              </div>

              {venmoWithFees !== null && (
                <p className="mt-3 text-[11px] text-slate-400">
                  Prefilled amount:{" "}
                  <span className="font-semibold text-slate-200">
                    {formatCurrency(venmoWithFees)}
                  </span>{" "}
                  • Note: &ldquo;{DEFAULT_NOTE}&rdquo;
                  <br />
                  Username: @{VENMO_USERNAME}
                </p>
              )}
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
                  <li>• Track your giving history on Stripe/Square</li>
                  <li>• Change or cancel anytime on their secure site</li>
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
                    src={squareConfig.logoSrc || "/images/logos/square.svg"}
                    alt="Square"
                    width={72}
                    height={24}
                    className="opacity-80"
                  />
                </div>
              </div>

              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                {(RECURRING_PLANS.length > 0
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
                        href: CUSTOM_GIVING_URL,
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
                You&apos;ll manage your subscription on our provider&apos;s
                secure site. We don&apos;t store card details on this site.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* TRUST STRIP */}
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
              Payments are processed by trusted providers (Stripe / Square /
              Venmo) on their secure platforms. We aim to steward every dollar
              as worship unto Jesus.
            </p>
          </div>
        </div>
      </section>

      {/* VENMO QR MODAL */}
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

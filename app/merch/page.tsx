// app/merch/page.tsx
import Image from "next/image";
import Link from "next/link";
import {
  getPrintifyProducts,
  getPrimaryImage,
  getFromPrice,
} from "../lib/printify";

export const dynamic = "force-dynamic";

const storeUrl = process.env.NEXT_PUBLIC_MERCH_STORE_URL;

export default async function MerchPage() {
  const products = await getPrintifyProducts();

  // Choose grid layout based on how many items you have
  let gridClasses = "mt-8 grid gap-6";
  if (products.length <= 2) {
    gridClasses += " sm:grid-cols-2";
  } else if (products.length <= 5) {
    gridClasses += " sm:grid-cols-2 lg:grid-cols-2";
  } else {
    gridClasses += " sm:grid-cols-2 lg:grid-cols-3";
  }

  return (
    <main className="min-h-screen bg-[#050814] text-slate-100">
      {/* HERO (text only) */}
      <section className="relative overflow-hidden border-b border-slate-800">
        {/* Glows */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-40 -left-32 h-72 w-72 rounded-full bg-[#f4cf88]/30 blur-3xl" />
          <div className="absolute top-32 -right-24 h-80 w-80 rounded-full bg-[#e0c9c1]/25 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-4xl px-4 py-16 sm:py-20 text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e0c9c1]">
            Alabaster Merch
          </p>
          <h1 className="mt-2 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Wear the{" "}
            <span className="bg-gradient-to-r from-[#f4cf88] via-[#e0c9c1] to-white bg-clip-text text-transparent">
              Love Jesus Well
            </span>{" "}
            story.
          </h1>
          <p className="mt-4 max-w-xl text-sm sm:text-base text-slate-200">
            Simple, clean pieces that carry the same heart as our worship nights —
            all about Jesus, not us.
          </p>
          <p className="mt-2 max-w-xl text-xs sm:text-sm text-slate-300">
            Every hoodie, tee, and hat is an invitation to carry His presence
            into ordinary spaces — quiet reminders to Love Jesus Well wherever
            you go.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-4">
            {storeUrl && (
              <Link
                href={storeUrl}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full border border-[#f4cf88]/80 bg-[#e0c9c1] px-5 py-2 text-sm font-semibold text-[#050814] shadow-[0_0_30px_rgba(250,204,21,0.3)] transition hover:brightness-110"
              >
                Shop full store
                <span aria-hidden="true">↗</span>
              </Link>
            )}
            <span className="text-xs uppercase tracking-[0.2em] text-slate-400">
              Printed &amp; shipped by Printify
            </span>
          </div>

          {products.length > 0 && (
            <p className="mt-3 text-[11px] text-slate-400">
              {products.length === 1
                ? "1 piece available right now."
                : `${products.length} pieces available right now.`}
            </p>
          )}
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="font-serif text-2xl sm:text-3xl text-slate-50">
            Available pieces
          </h2>
          <p className="text-xs text-slate-400">
            Browse here, then complete your order through our store.
          </p>
        </div>

        {products.length === 0 ? (
          <p className="mt-10 text-sm text-slate-400">
            No merch is live yet. Once you publish products in this Printify shop,
            they&apos;ll show up here automatically.
          </p>
        ) : (
          <div className={gridClasses}>
            {products.map((product: any) => {
              const img = getPrimaryImage(product);
              const price = getFromPrice(product);

              return (
                <article
                  key={product.id}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 shadow-[0_18px_60px_rgba(15,23,42,0.9)] transition hover:border-[#f4cf88]/80 hover:shadow-[0_22px_70px_rgba(250,204,21,0.25)]"
                >
                  <Link
                    href={`/merch/${product.id}`}
                    className="relative block h-56 w-full overflow-hidden"
                  >
                    {img && (
                      <Image
                        src={img}
                        alt={product.title}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105 group-hover:brightness-110"
                      />
                    )}
                    <div className="pointer-events-none absolute inset-0" />
                  </Link>

                  <div className="flex flex-1 flex-col gap-2 px-4 pb-4 pt-3">
                    <Link href={`/merch/${product.id}`}>
                      <h3 className="line-clamp-1 font-medium text-slate-50">
                        {product.title}
                      </h3>
                    </Link>

                    {product.tags && product.tags.length > 0 && (
                      <p className="line-clamp-1 text-[11px] uppercase tracking-[0.18em] text-slate-400">
                        {product.tags.slice(0, 3).join(" • ")}
                      </p>
                    )}

                    <div className="mt-1 flex items-center justify-between">
                      <div className="text-sm font-semibold text-[#f4cf88]">
                        {price ? `From $${price.toFixed(2)}` : ""}
                      </div>

                      <Link
                        href={`/merch/${product.id}`}
                        className="inline-flex items-center gap-1 rounded-full border border-[#f4cf88]/70 px-3 py-1 text-[11px] font-semibold text-[#f4cf88] transition hover:bg-[#f4cf88] hover:text-[#050814]"
                      >
                        View details
                        <span aria-hidden="true">↗</span>
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}

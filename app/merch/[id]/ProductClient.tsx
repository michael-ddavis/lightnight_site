// app/merch/[id]/ProductClient.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { merchStoreLinks } from "../../../merchLinks";

const storeUrl = process.env.NEXT_PUBLIC_MERCH_STORE_URL;

interface PrintifyImage {
  src: string;
  is_default?: boolean;
}

interface PrintifyVariant {
  id: number;
  title: string;   // usually something like "M / Black"
  price: number;   // in cents
  is_enabled?: boolean;
  is_available?: boolean;
}

interface ProductClientProps {
  product: {
    id: string;
    title: string;
    description: string;
    tags: string[];
    images: PrintifyImage[];
    variants: PrintifyVariant[];
  };
}

function normalizeImageUrl(src: string): string {
  if (src.startsWith("http")) return src;
  return `https://images-api.printify.com${src}`;
}

function centsToDollars(cents: number | undefined): string {
  if (!cents && cents !== 0) return "";
  return (cents / 100).toFixed(2);
}

function stripHtml(input: string): string {
  return input.replace(/<\/?[^>]+(>|$)/g, "");
}

export default function ProductClient({ product }: ProductClientProps) {
  const { id, title, description, tags, images, variants } = product;

  // Order images so default is first
  const orderedImages = useMemo(() => {
    if (!images || images.length === 0) return [];
    const primary =
      images.find((img) => img.is_default) ?? images[0];
    const rest = images.filter((img) => img !== primary);
    return [primary, ...rest];
  }, [images]);

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const [selectedVariantId, setSelectedVariantId] = useState<number | null>(
    variants.length > 0 ? variants[0].id : null
  );

  const selectedVariant = useMemo(
    () => variants.find((v) => v.id === selectedVariantId) ?? variants[0],
    [variants, selectedVariantId]
  );

  const fromPrice = useMemo(() => {
    if (!variants.length) return "";
    const min = Math.min(...variants.map((v) => v.price));
    return centsToDollars(min);
  }, [variants]);

  // OPTION B: Product-level URL mapping
  const productStoreUrl =
    merchStoreLinks[id] ?? storeUrl ?? null;

  const mainImage =
    orderedImages[selectedImageIndex] ?? orderedImages[0];

  return (
    <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
      {/* IMAGE SIDE */}
      <div className="space-y-4">
        <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 shadow-[0_18px_60px_rgba(15,23,42,0.9)]">
          <div className="relative aspect-[4/5] w-full">
            {mainImage && (
              <Image
                src={normalizeImageUrl(mainImage.src)}
                alt={title}
                fill
                className="object-cover"
              />
            )}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
          </div>
        </div>

        {/* Thumbnails */}
        {orderedImages.length > 1 && (
          <div className="flex flex-wrap gap-2">
            {orderedImages.map((img, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setSelectedImageIndex(index)}
                className={[
                  "relative h-16 w-16 overflow-hidden rounded-xl border transition",
                  index === selectedImageIndex
                    ? "border-[#f4cf88] shadow-[0_0_18px_rgba(250,204,21,0.35)]"
                    : "border-slate-700 hover:border-slate-400",
                ].join(" ")}
              >
                <Image
                  src={normalizeImageUrl(img.src)}
                  alt={`${title} thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* INFO SIDE */}
      <div className="space-y-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#e0c9c1]">
          Alabaster Merch
        </p>
        <h1 className="font-serif text-3xl sm:text-4xl text-slate-50">
          {title}
        </h1>

        {fromPrice && (
          <p className="text-base font-semibold text-[#f4cf88]">
            From ${fromPrice}
          </p>
        )}

        {tags && tags.length > 0 && (
          <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
            {tags.join(" • ")}
          </p>
        )}

        {description && (
          <div className="pt-2 text-sm leading-relaxed text-slate-200 whitespace-pre-line">
            {stripHtml(description)}
          </div>
        )}

        {/* Variant selector (still useful for info even if store doesn't respect variant) */}
        {variants.length > 0 && (
          <div className="pt-3 space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
              Choose an option
            </p>
            <div className="flex flex-wrap gap-2">
              {variants.map((v) => (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => setSelectedVariantId(v.id)}
                  className={[
                    "rounded-full border px-3 py-1.5 text-xs transition",
                    selectedVariant && selectedVariant.id === v.id
                      ? "border-[#f4cf88] bg-[#f4cf88]/10 text-slate-50"
                      : "border-slate-700 bg-slate-900/60 text-slate-200 hover:border-slate-400",
                  ].join(" ")}
                >
                  {v.title}{" "}
                  {v.price ? `• $${centsToDollars(v.price)}` : ""}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Checkout button */}
        <div className="pt-4">
          {productStoreUrl ? (
            <Link
              href={productStoreUrl}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full border border-[#f4cf88]/80 bg-[#e0c9c1] px-6 py-2 text-sm font-semibold text-[#050814] shadow-[0_0_30px_rgba(250,204,21,0.3)] transition hover:brightness-110"
            >
              Open in store to order
              <span aria-hidden="true">↗</span>
            </Link>
          ) : (
            <p className="text-xs text-slate-400">
              Store URL is not configured yet. Either:
              <br />
              • Add this product&apos;s URL to{" "}
              <code className="rounded bg-slate-900 px-1 py-0.5">
                merchLinks.ts
              </code>{" "}
              <br />
              • Or set{" "}
              <code className="rounded bg-slate-900 px-1 py-0.5">
                NEXT_PUBLIC_MERCH_STORE_URL
              </code>{" "}
              in your <code>.env.local</code>.
            </p>
          )}
          <p className="mt-2 text-[11px] text-slate-400">
            Printed &amp; shipped by Printify on demand.
          </p>
        </div>
      </div>
    </div>
  );
}

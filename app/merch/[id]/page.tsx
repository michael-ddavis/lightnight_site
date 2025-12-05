// app/merch/[id]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getPrintifyProduct,
} from "../../lib/printify";
import ProductClient from "./ProductClient";

export const dynamic = "force-dynamic";

interface MerchProductPageProps {
  params: { id: string };
}

// Simple HTML stripper + a few common entities
function cleanDescription(raw: string | undefined | null): string {
  if (!raw) return "";

  let text = raw;

  // Turn closing paragraphs into blank lines
  text = text.replace(/<\/p>/gi, "\n\n");

  // Turn <br> into newlines
  text = text.replace(/<br\s*\/?>/gi, "\n");

  // Strip all remaining HTML tags
  text = text.replace(/<[^>]+>/g, "");

  // Decode some common HTML entities
  text = text.replace(/&mdash;/gi, "—");
  text = text.replace(/&ndash;/gi, "–");
  text = text.replace(/&rsquo;/gi, "’");
  text = text.replace(/&lsquo;/gi, "‘");
  text = text.replace(/&rdquo;/gi, "”");
  text = text.replace(/&ldquo;/gi, "“");
  text = text.replace(/&amp;/gi, "&");
  text = text.replace(/&quot;/gi, '"');
  text = text.replace(/&apos;/gi, "'");
  text = text.replace(/&nbsp;/gi, " ");

  // Collapse triple+ newlines down a bit
  text = text.replace(/\n{3,}/g, "\n\n");

  return text.trim();
}

export default async function MerchProductPage({ params }: MerchProductPageProps) {
  const productId = params.id;

  const product = await getPrintifyProduct(productId);
  if (!product) {
    return notFound();
  }

  // Keep just what we need and ensure it’s serializable
  const safeProduct = {
    id: product.id,
    title: product.title,
    description: cleanDescription(product.description) ?? "",
    tags: product.tags ?? [],
    images: product.images ?? [],
    variants:
      product.variants?.filter(
        (v: any) => v.is_enabled && v.is_available
      ) ?? [],
  };

  return (
    <main className="min-h-screen bg-[#050814] text-slate-100">
      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        {/* Back link */}
        <div className="mb-6">
          <Link
            href="/merch"
            className="inline-flex items-center gap-2 text-xs text-slate-400 hover:text-slate-200"
          >
            <span aria-hidden="true">←</span> Back to merch
          </Link>
        </div>

        <ProductClient product={safeProduct} />
      </section>
    </main>
  );
}

import { notFound } from "next/navigation";
import Link from "next/link";
import { getPrintifyProduct, PrintifyProduct } from "../../lib/printify";
import ProductClient from "./ProductClient";

interface MerchProductPageProps {
  params: { id: string };
}

export default async function MerchProductPage({ params }: MerchProductPageProps) {
  const productId = params.id;

  const product = await getPrintifyProduct(productId);
  if (!product) {
    return notFound();
  }

  const safeProduct = {
    id: product.id,
    title: product.title,
    description: product.description ?? "",
    tags: product.tags ?? [],
    images: product.images ?? [],
    variants: product.variants.filter(
      (v) => v.is_enabled && v.is_available
    ),
  };

  return (
    <main className="min-h-screen bg-[#050814] text-slate-100">
      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
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

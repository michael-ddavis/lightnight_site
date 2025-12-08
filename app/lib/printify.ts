// lib/printify.ts

const BASE_URL = "https://api.printify.com/v1";
const token = process.env.DEV_PRINTIFY_API_TOKEN!;
const shopId = process.env.PRINTIFY_SHOP_ID!;

const headers: Record<string, string> = {
  Authorization: `Bearer ${token}`,
  "Content-Type": "application/json",
};

if (!token) console.warn("⚠ PRINTIFY_API_TOKEN missing!");
if (!shopId) console.warn("⚠ PRINTIFY_SHOP_ID missing!");

export interface PrintifyImage {
  src: string;
  is_default?: boolean;
}

export interface PrintifyVariant {
  id: number;
  title: string;
  price: number;
  is_enabled?: boolean;
  is_available?: boolean;
}

export interface PrintifyProduct {
  id: string;
  title: string;
  description?: string;
  tags?: string[];
  images: PrintifyImage[];
  variants: PrintifyVariant[];
  visible?: boolean;
  // add fields as needed
}

interface PrintifyListResponse {
  data: PrintifyProduct[];
  // other props like "total", "links", etc. if needed
}

/** Fetch all published products */
export async function getPrintifyProducts(): Promise<PrintifyProduct[]> {
  try {
    const res = await fetch(`${BASE_URL}/shops/${shopId}/products.json`, {
      headers,
      cache: "no-store",
    });

    if (!res.ok) throw new Error(`Failed products: ${res.statusText}`);
    const data = (await res.json()) as PrintifyListResponse;
    return (data.data || []).filter((p) => p.visible);
  } catch (err) {
    console.error("❌ getPrintifyProducts Error:", err);
    return [];
  }
}

/** Fetch a single product by ID */
export async function getPrintifyProduct(
  productId: string
): Promise<PrintifyProduct | null> {
  try {
    const res = await fetch(
      `${BASE_URL}/shops/${shopId}/products/${productId}.json`,
      { headers, cache: "no-store" }
    );

    if (!res.ok) {
      console.error("❌ Bad product fetch:", await res.text());
      return null;
    }
    const product = (await res.json()) as PrintifyProduct;
    return product;
  } catch (err) {
    console.error("❌ getPrintifyProduct Error:", err);
    return null;
  }
}

export function getPrimaryImage(product: PrintifyProduct): string | null {
  const primary =
    product.images?.find((i) => i.is_default) ?? product.images?.[0];
  if (!primary || !primary.src) return null;
  return primary.src.startsWith("http")
    ? primary.src
    : `https://images-api.printify.com${primary.src}`;
}

export function getFromPrice(product: PrintifyProduct): number | null {
  const variant = product.variants?.find((v) => v.is_enabled && v.is_available);
  if (!variant) return null;
  return variant.price / 100;
}

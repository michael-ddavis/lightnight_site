// lib/printify.ts

const BASE_URL = "https://api.printify.com/v1";
const token = process.env.DEV_PRINTIFY_API_TOKEN!;
const shopId = process.env.PRINTIFY_SHOP_ID!;

// Shared headers
const headers = {
  Authorization: `Bearer ${token}`,
  "Content-Type": "application/json",
};

// Validate env values
if (!token) console.warn("⚠ PRINTIFY_API_TOKEN missing!");
if (!shopId) console.warn("⚠ PRINTIFY_SHOP_ID missing!");

/** Fetch all published products **/
export async function getPrintifyProducts() {
  try {
    const res = await fetch(`${BASE_URL}/shops/${shopId}/products.json`, {
      headers,
      cache: "no-store",
    });

    if (!res.ok) throw new Error(`Failed products: ${res.statusText}`);
    const data = await res.json();

    // Filter out unpublished products
    return (data.data || []).filter((p: any) => p.visible);
  } catch (err) {
    console.error("❌ getPrintifyProducts Error:", err);
    return [];
  }
}

/** Fetch a single product by ID **/
export async function getPrintifyProduct(productId: string) {
  try {
    const res = await fetch(
      `${BASE_URL}/shops/${shopId}/products/${productId}.json`,
      { headers, cache: "no-store" }
    );

    if (!res.ok) {
      console.error("❌ Bad product fetch:", await res.text());
      return null;
    }
    return await res.json();
  } catch (err) {
    console.error("❌ getPrintifyProduct Error:", err);
    return null;
  }
}

/** Image helper **/
export function getPrimaryImage(product: any): string | null {
  const primary = product.images?.find((i: any) => i.is_default) || product.images?.[0];
  if (!primary || !primary.src) return null;
  return primary.src.startsWith("http")
    ? primary.src
    : `https://images-api.printify.com${primary.src}`;
}

/** Price helper **/
export function getFromPrice(product: any): number | null {
  const variant = product.variants?.find((v: any) => v.is_enabled && v.is_available);
  if (!variant) return null;
  return variant.price / 100; // Convert cents → dollars
}

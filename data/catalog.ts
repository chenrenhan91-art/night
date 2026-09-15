import raw from "./products.json";
import { COLLECTIONS, PRODUCT_EXTRAS } from "./content";
import { withBase } from "@/lib/paths";

export type Variant = {
  id: number;
  title: string;
  price: number;
  available: boolean;
  option1: string | null;
  image: string | null;
};

export type Product = {
  id: number;
  title: string;
  handle: string;
  vendor: string;
  type: string;
  price: number;
  available: boolean;
  options: { name: string; position: number; values: string[] }[];
  variants: Variant[];
  images: string[];
  description: string;
  url: string;
  materials?: string;
  dimensions?: string;
  care?: string;
};

export const products: Product[] = (raw as Product[]).map((p) => ({
  ...p,
  description: decodeHtml(p.description),
  images: p.images.map(withBase),
  variants: p.variants.map((v) => ({
    ...v,
    image: v.image ? withBase(v.image) : v.image,
  })),
  ...PRODUCT_EXTRAS[p.handle],
}));

function decodeHtml(s: string) {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

export function formatMoney(n: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(n);
}

export function getProduct(handle: string) {
  return products.find((p) => p.handle === handle);
}

export function getCollection(handle: string) {
  return COLLECTIONS.find((c) => c.handle === handle);
}

export function productsFor(handles: string[]) {
  return handles
    .map((h) => getProduct(h))
    .filter((p): p is Product => Boolean(p));
}

export function collectionProducts(handle: string) {
  const col = getCollection(handle);
  if (!col) return [];
  return productsFor(col.products);
}

export function searchProducts(q: string) {
  const needle = q.trim().toLowerCase();
  if (!needle) return [];
  return products.filter(
    (p) =>
      p.title.toLowerCase().includes(needle) ||
      p.type.toLowerCase().includes(needle) ||
      p.description.toLowerCase().includes(needle),
  );
}

export function relatedProducts(handle: string, limit = 4) {
  const current = getProduct(handle);
  const rest = products.filter((p) => p.handle !== handle);
  if (!current) return rest.slice(0, limit);
  const sameType = rest.filter((p) => p.type === current.type);
  const mixed = [...sameType, ...rest.filter((p) => p.type !== current.type)];
  return mixed.slice(0, limit);
}

export function colorValues(product: Product) {
  const color = product.options.find((o) => /color/i.test(o.name));
  if (color) return color.values;
  if (product.variants.length > 1 && product.variants[0].title !== "Default Title") {
    return product.variants.map((v) => v.title);
  }
  return [];
}

export function swatchTone(label: string) {
  const l = label.toLowerCase();
  if (l.includes("white") || l.includes("pearl") || l.includes("linen")) return "#e7e2d8";
  if (l.includes("gray") || l.includes("grey")) return "#8a8a86";
  if (l.includes("black") || l.includes("classic")) return "#1c1c1c";
  if (l.includes("red")) return "#b42318";
  return "#cbc4bc";
}

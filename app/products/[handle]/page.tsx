import { notFound } from "next/navigation";
import { Suspense } from "react";
import { getProduct, products, relatedProducts } from "@/data/catalog";
import { ProductDetail } from "@/components/ProductDetail";

export function generateStaticParams() {
  return products.map((p) => ({ handle: p.handle }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;
  const product = getProduct(handle);
  if (!product) return { title: "Product" };
  return { title: product.title, description: product.description.slice(0, 160) };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;
  const product = getProduct(handle);
  if (!product) notFound();
  const related = relatedProducts(handle);

  return (
    <Suspense>
      <ProductDetail product={product} related={related} />
    </Suspense>
  );
}

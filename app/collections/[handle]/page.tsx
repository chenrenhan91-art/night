import { notFound } from "next/navigation";
import { ProductGrid } from "@/components/ProductCard";
import { collectionProducts, getCollection } from "@/data/catalog";
import { COLLECTIONS } from "@/data/content";

export function generateStaticParams() {
  return COLLECTIONS.map((c) => ({ handle: c.handle }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;
  const col = getCollection(handle);
  return { title: col?.title ?? "Collection" };
}

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;
  const col = getCollection(handle);
  if (!col) notFound();
  const products = collectionProducts(handle);

  return (
    <div>
      <div className="relative min-h-[240px] overflow-hidden md:min-h-[320px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={col.image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative flex min-h-[240px] items-end md:min-h-[320px]">
          <div className="wrapper w-full pb-10 pt-24">
            <h1 className="heading text-[36px] text-white md:text-[48px]">
              {col.title}
            </h1>
          </div>
        </div>
      </div>
      <div className="wrapper py-12 md:py-16">
        {col.description ? (
          <p className="mx-auto mb-12 max-w-[62ch] text-center text-[16px] leading-relaxed text-muted">
            {col.description}
          </p>
        ) : null}
        <ProductGrid products={products} />
      </div>
    </div>
  );
}
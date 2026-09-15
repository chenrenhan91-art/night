import Link from "next/link";
import { COLLECTIONS } from "@/data/content";

export const metadata = { title: "Collections" };

export default function CollectionsIndexPage() {
  const list = COLLECTIONS.filter(
    (c) => !["frontpage", "discover-the-full-collection"].includes(c.handle),
  );

  return (
    <div className="wrapper py-14 md:py-20">
      <h1 className="heading mb-12 text-[36px] md:text-[48px]">Collections</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((c) => (
          <Link
            key={c.handle}
            href={
              c.handle === "partner-products"
                ? "/pages/partner-products"
                : `/collections/${c.handle}`
            }
            className="group relative min-h-[260px] overflow-hidden"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={c.image}
              alt=""
              className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="relative flex h-full min-h-[260px] items-end p-6 text-white">
              <div>
                <h2 className="heading text-[24px]">{c.title}</h2>
                <span className="mt-2 inline-block text-[12px] tracking-[0.1em] uppercase">
                  View the collection →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

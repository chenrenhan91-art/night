"use client";

import { useRef, useState } from "react";
import { FEATURED_TABS } from "@/data/content";
import { collectionProducts } from "@/data/catalog";
import { ProductCard } from "./ProductCard";
import { IconChevron } from "./Icons";

export function CollectionTabs() {
  const [index, setIndex] = useState(0);
  const track = useRef<HTMLDivElement>(null);
  const tabs = FEATURED_TABS.map((t) => ({
    ...t,
    products: collectionProducts(t.handle),
  }));

  function scroll(dir: number) {
    const el = track.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: "smooth" });
  }

  return (
    <section className="py-16 md:py-20">
      <div className="wrapper">
        <h2 className="heading mb-8 text-center text-[15px] tracking-[0.14em] uppercase">
          Featured Collections
        </h2>
        <div className="mb-10 flex justify-center gap-2 overflow-x-auto hide-scroll">
          {tabs.map((tab, i) => (
            <button
              key={tab.handle}
              type="button"
              onClick={() => {
                setIndex(i);
                track.current?.scrollTo({ left: 0 });
              }}
              className={`shrink-0 rounded-full border px-4 py-2 text-[12px] tracking-[0.06em] ${
                i === index
                  ? "border-paper bg-paper text-ink"
                  : "border-white/25 text-paper"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="relative">
          <button
            type="button"
            aria-label="Previous"
            className="absolute top-1/3 -left-2 z-10 hidden p-2 text-paper md:block"
            onClick={() => scroll(-1)}
          >
            <IconChevron dir="left" />
          </button>
          <div
            ref={track}
            className="hide-scroll flex snap-x gap-4 overflow-x-auto pb-2 md:gap-6"
          >
            {tabs[index].products.map((p) => (
              <div
                key={`${index}-${p.handle}`}
                className="w-[72%] shrink-0 snap-start sm:w-[46%] lg:w-[23%]"
              >
                <ProductCard product={p} />
              </div>
            ))}
          </div>
          <button
            type="button"
            aria-label="Next"
            className="absolute top-1/3 -right-2 z-10 hidden p-2 text-paper md:block"
            onClick={() => scroll(1)}
          >
            <IconChevron dir="right" />
          </button>
        </div>
      </div>
    </section>
  );
}

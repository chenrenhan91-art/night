"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { ProductGrid } from "@/components/ProductCard";
import { searchProducts } from "@/data/catalog";

export default function SearchInner() {
  const params = useSearchParams();
  const q = params.get("q") ?? "";
  const results = useMemo(() => searchProducts(q), [q]);

  return (
    <div className="wrapper py-14 md:py-20">
      <h1 className="heading mb-3 text-[36px]">Search</h1>
      <form className="mb-10 max-w-md border-b border-white/20">
        <label className="visually-hidden" htmlFor="q">
          Search
        </label>
        <input
          id="q"
          name="q"
          type="search"
          defaultValue={q}
          placeholder="Search..."
        />
      </form>
      {q ? (
        <p className="mb-8 text-muted">
          {results.length} result{results.length === 1 ? "" : "s"} for “{q}”
        </p>
      ) : (
        <p className="mb-8 text-muted">Enter a search term.</p>
      )}
      <ProductGrid products={results} />
    </div>
  );
}

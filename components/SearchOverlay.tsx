"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useCart } from "@/lib/cart";
import { formatMoney, searchProducts } from "@/data/catalog";
import { withBase } from "@/lib/paths";
import { IconClose, IconSearch } from "./Icons";

export function SearchOverlay() {
  const { searchOpen, setSearchOpen } = useCart();
  const [q, setQ] = useState("");

  useEffect(() => {
    if (!searchOpen) setQ("");
  }, [searchOpen]);

  const results = useMemo(() => searchProducts(q).slice(0, 8), [q]);
  if (!searchOpen) return null;

  return (
    <div className="fixed inset-0 z-[70] bg-ink/95 text-paper">
      <div className="wrapper py-8">
        <div className="mb-8 flex items-center justify-between">
          <p className="kicker">Search</p>
          <button
            type="button"
            aria-label="Close"
            onClick={() => setSearchOpen(false)}
          >
            <IconClose />
          </button>
        </div>
        <form action={withBase("/search")} className="flex items-center gap-3 border-b border-white/20">
          <IconSearch />
          <input
            autoFocus
            type="search"
            name="q"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search..."
            aria-label="Search our store"
            className="border-0 py-4 text-[22px]"
          />
        </form>
        <div className="mt-8 space-y-4">
          {results.map((p) => (
            <Link
              key={p.handle}
              href={`/products/${p.handle}`}
              className="flex items-center gap-4 py-2 hover:text-coral"
              onClick={() => setSearchOpen(false)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.images[0]}
                alt=""
                className="h-16 w-14 object-cover"
              />
              <span>
                <span className="block">{p.title}</span>
                <span className="text-[13px] text-muted">
                  {formatMoney(p.price)}
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

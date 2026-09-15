"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  colorValues,
  formatMoney,
  Product,
  swatchTone,
} from "@/data/catalog";
import { useCart } from "@/lib/cart";
import { withBase } from "@/lib/paths";

export function ProductCard({ product }: { product: Product }) {
  const colors = colorValues(product);
  const { addItem } = useCart();
  const [hover, setHover] = useState(false);
  const [frame, setFrame] = useState(0);
  const images = product.images.length ? product.images : [withBase("/media/site/col-lamp.jpg")];

  useEffect(() => {
    if (!hover || images.length < 2) {
      setFrame(0);
      return;
    }
    const id = window.setInterval(() => {
      setFrame((f) => (f + 1) % Math.min(images.length, 4));
    }, 700);
    return () => window.clearInterval(id);
  }, [hover, images.length]);

  const variant = product.variants.find((v) => v.available) ?? product.variants[0];
  const soldOut = !product.available;

  function addDefault() {
    if (!variant?.available) return;
    addItem({
      handle: product.handle,
      title: product.title,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      image: variant.image || images[0],
    });
  }

  return (
    <article
      className="group/product"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="relative overflow-hidden bg-ink">
        <Link href={`/products/${product.handle}`} aria-label={product.title}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={images[frame]}
            alt={product.title}
            className="aspect-4/5 w-full object-cover"
          />
        </Link>
        {soldOut ? (
          <span className="absolute top-3 left-3 bg-paper px-2 py-1 text-[11px] tracking-[0.08em] text-ink uppercase">
            Sold Out
          </span>
        ) : null}
        {!soldOut ? (
          <button
            type="button"
            onClick={addDefault}
            className="absolute inset-x-3 bottom-3 hidden bg-paper/95 py-3 text-[11px] font-medium tracking-[0.09em] text-ink uppercase opacity-0 transition md:block md:translate-y-2 md:group-hover/product:translate-y-0 md:group-hover/product:opacity-100"
          >
            Add to cart
          </button>
        ) : null}
      </div>
      <div className="pt-3 text-center">
        <Link href={`/products/${product.handle}`} className="block text-[15px]">
          {product.title}
        </Link>
        <p className="mt-1 text-[14px] text-sand">{formatMoney(product.price)}</p>
        {colors.length > 1 ? (
          <p className="mt-1 text-[12px] text-muted">
            {colors.length} colors available
          </p>
        ) : null}
        {colors.length > 1 ? (
          <div className="mt-2 flex justify-center gap-2">
            {product.variants.map((v) => (
              <Link
                key={v.id}
                href={`/products/${product.handle}?variant=${v.id}`}
                title={v.title}
                className="h-3.5 w-3.5 rounded-full border border-white/30"
                style={{ background: swatchTone(v.title) }}
              >
                <span className="visually-hidden">{v.title}</span>
              </Link>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}

export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4 md:gap-x-6">
      {products.map((p) => (
        <ProductCard key={p.handle} product={p} />
      ))}
    </div>
  );
}

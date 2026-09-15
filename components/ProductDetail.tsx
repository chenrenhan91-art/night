"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import {
  colorValues,
  formatMoney,
  Product,
  swatchTone,
} from "@/data/catalog";
import { useCart } from "@/lib/cart";
import { ProductCard } from "./ProductCard";

export function ProductDetail({
  product,
  related,
}: {
  product: Product;
  related: Product[];
}) {
  const params = useSearchParams();
  const initial =
    Number(params.get("variant")) ||
    product.variants.find((v) => v.available)?.id ||
    product.variants[0]?.id;
  const [variantId, setVariantId] = useState(initial);
  const [qty, setQty] = useState(1);
  const [open, setOpen] = useState("description");
  const [shot, setShot] = useState(0);
  const { addItem } = useCart();

  const variant =
    product.variants.find((v) => v.id === variantId) ?? product.variants[0];
  const images = useMemo(() => {
    const list = [...product.images];
    if (variant?.image && !list.includes(variant.image)) {
      list.unshift(variant.image);
    }
    return list;
  }, [product.images, variant]);

  const colors = colorValues(product);
  const paragraphs = product.description.split("\n").filter(Boolean);

  function add() {
    if (!variant?.available) return;
    addItem(
      {
        handle: product.handle,
        title: product.title,
        variantId: variant.id,
        variantTitle: variant.title,
        price: variant.price,
        image: variant.image || images[0],
      },
      qty,
    );
  }

  return (
    <div>
      <div className="wrapper grid gap-10 py-10 lg:grid-cols-2 lg:gap-16 lg:py-16">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={images[shot] || images[0]}
            alt={product.title}
            className="aspect-4/5 w-full object-cover bg-ink"
          />
          {images.length > 1 ? (
            <div className="mt-3 grid grid-cols-5 gap-2">
              {images.slice(0, 10).map((src, i) => (
                <button
                  type="button"
                  key={src}
                  onClick={() => setShot(i)}
                  className={`overflow-hidden border ${
                    shot === i ? "border-paper" : "border-transparent"
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt="" className="aspect-square object-cover" />
                </button>
              ))}
            </div>
          ) : null}
        </div>
        <div>
          <h1 className="heading text-[28px] md:text-[36px]">{product.title}</h1>
          <p className="mt-3 text-[18px]">{formatMoney(variant?.price ?? product.price)}</p>
          {colors.length > 1 ? (
            <div className="mt-6">
              <p className="mb-2 text-[12px] tracking-[0.08em] uppercase">
                Color: {variant?.title}
              </p>
              <div className="flex gap-2">
                {product.variants.map((v) => (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => {
                      setVariantId(v.id);
                      const idx = images.findIndex((img) => img === v.image);
                      if (idx >= 0) setShot(idx);
                    }}
                    className={`h-7 w-7 rounded-full border ${
                      v.id === variantId ? "border-paper" : "border-white/30"
                    }`}
                    style={{ background: swatchTone(v.title) }}
                    title={v.title}
                  />
                ))}
              </div>
            </div>
          ) : null}
          <div className="mt-8 flex items-center gap-4">
            <div className="flex items-center border border-white/25">
              <button
                type="button"
                className="px-3 py-2"
                onClick={() => setQty((n) => Math.max(1, n - 1))}
              >
                -
              </button>
              <span className="min-w-[2rem] text-center">{qty}</span>
              <button
                type="button"
                className="px-3 py-2"
                onClick={() => setQty((n) => n + 1)}
              >
                +
              </button>
            </div>
          </div>
          <button
            type="button"
            className="btn btn-primary btn-full mt-6"
            disabled={!variant?.available}
            onClick={add}
          >
            {variant?.available ? "Add to cart" : "Sold Out"}
          </button>
          <Accordion
            id="description"
            title="Description"
            open={open}
            setOpen={setOpen}
          >
            {paragraphs.map((p) => (
              <p key={p} className="mb-3 last:mb-0">
                {p}
              </p>
            ))}
          </Accordion>
          {product.materials ? (
            <Accordion
              id="materials"
              title="Materials & Care"
              open={open}
              setOpen={setOpen}
            >
              <p>{product.materials}</p>
              {product.care ? <p className="mt-3">{product.care}</p> : null}
            </Accordion>
          ) : null}
          {product.dimensions ? (
            <Accordion
              id="dimensions"
              title="Dimensions"
              open={open}
              setOpen={setOpen}
            >
              <p>{product.dimensions}</p>
            </Accordion>
          ) : null}
        </div>
      </div>
      {related.length ? (
        <section className="wrapper py-16">
          <h2 className="heading mb-8 text-center text-[15px] tracking-[0.14em] uppercase">
            You may also like
          </h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {related.map((p) => (
              <ProductCard key={p.handle} product={p} />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}

function Accordion({
  id,
  title,
  open,
  setOpen,
  children,
}: {
  id: string;
  title: string;
  open: string;
  setOpen: (v: string) => void;
  children: React.ReactNode;
}) {
  const isOpen = open === id;
  return (
    <div className="mt-4 border-t border-white/10">
      <button
        type="button"
        className="flex w-full items-center justify-between py-4 text-left text-[13px] tracking-[0.08em] uppercase"
        onClick={() => setOpen(isOpen ? "" : id)}
      >
        {title}
        <span>{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen ? (
        <div className="pb-5 text-[14px] leading-relaxed text-muted">{children}</div>
      ) : null}
    </div>
  );
}

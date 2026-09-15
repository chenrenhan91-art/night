"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart";
import { formatMoney } from "@/data/catalog";
import { IconClose } from "./Icons";

export function CartDrawer() {
  const { open, setOpen, lines, subtotal, updateQty, remove } = useCart();
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      <button
        type="button"
        className="absolute inset-0 bg-black/50"
        aria-label="Close cart"
        onClick={() => setOpen(false)}
      />
      <aside className="absolute top-0 right-0 flex h-full w-full max-w-[420px] flex-col bg-ink text-paper shadow-2xl">
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <h2 className="heading text-[22px]">Cart</h2>
          <button
            type="button"
            aria-label="Close"
            onClick={() => setOpen(false)}
          >
            <IconClose />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-5 py-6">
          {lines.length === 0 ? (
            <div>
              <p className="mb-6 text-muted">Your cart is empty.</p>
              <Link
                href="/collections/discover-the-full-collection"
                className="text-[13px] tracking-[0.08em] uppercase underline underline-offset-4"
                onClick={() => setOpen(false)}
              >
                Continue browsing
              </Link>
            </div>
          ) : (
            <ul className="space-y-6">
              {lines.map((line) => (
                <li key={line.id} className="flex gap-4">
                  <Link
                    href={`/products/${line.handle}`}
                    onClick={() => setOpen(false)}
                    className="block w-[88px] shrink-0 overflow-hidden bg-canvas"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={line.image}
                      alt=""
                      className="aspect-4/5 w-full object-cover"
                    />
                  </Link>
                  <div className="min-w-0 flex-1">
                    <Link
                      href={`/products/${line.handle}`}
                      className="block text-[14px]"
                      onClick={() => setOpen(false)}
                    >
                      {line.title}
                    </Link>
                    {line.variantTitle !== "Default Title" ? (
                      <p className="mt-1 text-[12px] text-muted">
                        {line.variantTitle}
                      </p>
                    ) : null}
                    <p className="mt-1 text-[13px]">{formatMoney(line.price)}</p>
                    <div className="mt-3 flex items-center gap-3">
                      <div className="flex items-center border border-white/20">
                        <button
                          type="button"
                          className="px-2 py-1"
                          onClick={() => updateQty(line.id, line.quantity - 1)}
                          aria-label="Decrease"
                        >
                          -
                        </button>
                        <span className="min-w-[1.5rem] text-center text-[13px]">
                          {line.quantity}
                        </span>
                        <button
                          type="button"
                          className="px-2 py-1"
                          onClick={() => updateQty(line.id, line.quantity + 1)}
                          aria-label="Increase"
                        >
                          +
                        </button>
                      </div>
                      <button
                        type="button"
                        className="text-[11px] tracking-[0.08em] uppercase text-muted"
                        onClick={() => remove(line.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="border-t border-white/10 px-5 py-5">
          <p className="mb-4 text-[12px] text-muted">
            Shipping & taxes calculated at checkout
          </p>
          <Link
            href="/checkout"
            className="btn btn-primary btn-full"
            onClick={() => setOpen(false)}
          >
            Check Out
            <span aria-hidden>•</span>
            <span>{formatMoney(subtotal)} USD</span>
          </Link>
        </div>
      </aside>
    </div>
  );
}

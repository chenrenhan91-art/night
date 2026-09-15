"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart";
import { formatMoney } from "@/data/catalog";

export default function CartPage() {
  const { lines, subtotal, updateQty, remove } = useCart();

  return (
    <div className="wrapper py-14 md:py-20">
      <h1 className="heading mb-10 text-[36px]">Cart</h1>
      {lines.length === 0 ? (
        <div>
          <p className="mb-6 text-muted">Your cart is empty.</p>
          <Link
            href="/collections/discover-the-full-collection"
            className="text-[13px] tracking-[0.08em] uppercase underline underline-offset-4"
          >
            Continue browsing
          </Link>
        </div>
      ) : (
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.8fr]">
          <ul className="divide-y divide-white/10 border-y border-white/10">
            {lines.map((line) => (
              <li key={line.id} className="flex gap-4 py-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={line.image} alt="" className="h-28 w-24 object-cover" />
                <div className="flex-1">
                  <p>{line.title}</p>
                  {line.variantTitle !== "Default Title" ? (
                    <p className="text-[13px] text-muted">{line.variantTitle}</p>
                  ) : null}
                  <p className="mt-1">{formatMoney(line.price)}</p>
                  <div className="mt-3 flex items-center gap-3">
                    <div className="flex border border-white/20">
                      <button
                        type="button"
                        className="px-3 py-1"
                        onClick={() => updateQty(line.id, line.quantity - 1)}
                      >
                        -
                      </button>
                      <span className="px-2 py-1">{line.quantity}</span>
                      <button
                        type="button"
                        className="px-3 py-1"
                        onClick={() => updateQty(line.id, line.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                    <button
                      type="button"
                      className="text-[12px] uppercase text-muted"
                      onClick={() => remove(line.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <aside>
            <p className="mb-2 flex justify-between text-[15px]">
              <span>Subtotal</span>
              <span>{formatMoney(subtotal)}</span>
            </p>
            <p className="mb-6 text-[12px] text-muted">
              Shipping & taxes calculated at checkout
            </p>
            <Link href="/checkout" className="btn btn-primary btn-full">
              Check Out • {formatMoney(subtotal)} USD
            </Link>
          </aside>
        </div>
      )}
    </div>
  );
}

"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useCart } from "@/lib/cart";
import { formatMoney } from "@/data/catalog";
import { COMPANY } from "@/data/content";

export default function CheckoutPage() {
  const { lines, subtotal, clear } = useCart();
  const [done, setDone] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setDone(true);
    clear();
  }

  if (done) {
    return (
      <div className="wrapper max-w-xl py-20 text-center">
        <h1 className="heading mb-4 text-[36px]">Thank you</h1>
        <p className="mb-6 text-muted">
          Your order request has been received. We will confirm by phone at{" "}
          {COMPANY.phone}.
        </p>
        <Link href="/" className="btn btn-outline-coral">
          Continue browsing
        </Link>
      </div>
    );
  }

  if (!lines.length) {
    return (
      <div className="wrapper py-20">
        <h1 className="heading mb-4 text-[36px]">Checkout</h1>
        <p className="mb-6 text-muted">Your cart is empty.</p>
        <Link href="/collections/discover-the-full-collection" className="underline">
          Continue browsing
        </Link>
      </div>
    );
  }

  return (
    <div className="wrapper grid gap-12 py-14 lg:grid-cols-2 lg:py-20">
      <form onSubmit={onSubmit} className="space-y-6">
        <h1 className="heading text-[36px]">Checkout</h1>
        <Field label="Full name" name="name" autoComplete="name" required />
        <Field label="Email" name="email" type="email" autoComplete="email" required />
        <Field label="Phone" name="phone" type="tel" autoComplete="tel" required />
        <Field label="Address" name="address" autoComplete="street-address" required />
        <Field label="City" name="city" autoComplete="address-level2" required />
        <Field label="Country" name="country" autoComplete="country-name" required />
        <label className="block">
          <span className="mb-2 block text-[12px] tracking-[0.08em] uppercase">
            Notes
          </span>
          <textarea name="notes" rows={4} />
        </label>
        <p className="text-[13px] text-muted">
          We will confirm payment and shipping by phone at {COMPANY.phone}.
        </p>
        <button type="submit" className="btn btn-primary btn-full">
          Place order • {formatMoney(subtotal)} USD
        </button>
      </form>
      <aside className="h-fit bg-ink p-6">
        <h2 className="heading mb-4 text-[20px]">Order summary</h2>
        <ul className="space-y-4">
          {lines.map((l) => (
            <li key={l.id} className="flex justify-between gap-4 text-[14px]">
              <span>
                {l.title}
                {l.variantTitle !== "Default Title" ? ` (${l.variantTitle})` : ""} ×{" "}
                {l.quantity}
              </span>
              <span>{formatMoney(l.price * l.quantity)}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 flex justify-between border-t border-white/10 pt-4">
          <span>Subtotal</span>
          <span>{formatMoney(subtotal)}</span>
        </p>
      </aside>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[12px] tracking-[0.08em] uppercase">
        {label}
      </span>
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
      />
    </label>
  );
}

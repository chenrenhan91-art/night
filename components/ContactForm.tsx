"use client";

import { FormEvent, useState } from "react";

export function ContactForm({
  extraPlaceholder,
}: {
  extraPlaceholder?: string;
}) {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <p className="text-[16px] text-sand">
        Thank you. We will respond within one business day.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <label className="block">
        <span className="mb-2 block text-[12px] tracking-[0.08em] uppercase">
          Name
        </span>
        <input name="name" type="text" required autoComplete="name" />
      </label>
      <label className="block">
        <span className="mb-2 block text-[12px] tracking-[0.08em] uppercase">
          Email
        </span>
        <input name="email" type="email" required autoComplete="email" />
      </label>
      <label className="block">
        <span className="mb-2 block text-[12px] tracking-[0.08em] uppercase">
          Phone
        </span>
        <input name="phone" type="tel" autoComplete="tel" />
      </label>
      <label className="block">
        <span className="mb-2 block text-[12px] tracking-[0.08em] uppercase">
          Message
        </span>
        <textarea
          name="message"
          rows={6}
          required
          placeholder={extraPlaceholder}
        />
      </label>
      <button type="submit" className="btn btn-primary">
        Send
      </button>
    </form>
  );
}

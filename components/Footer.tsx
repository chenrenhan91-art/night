"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { COMPANY, FOOTER_HELP, FOOTER_MAIN } from "@/data/content";

export function Footer() {
  const [status, setStatus] = useState<"idle" | "ok">("idle");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("ok");
  }

  return (
    <footer className="mt-auto bg-ink text-paper">
      <div className="wrapper-full py-12 md:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1.4fr]">
          <div>
            <h3 className="heading mb-3 text-[22px] md:text-[26px]">
              Stay in touch.
            </h3>
            <p className="mb-6 max-w-sm text-[14px] text-muted">
              Join to get product announcements and special offers.
            </p>
            {status === "ok" ? (
              <p className="text-[14px] text-sand">This customer is already subscribed</p>
            ) : (
              <form onSubmit={onSubmit} className="max-w-sm">
                <label className="visually-hidden" htmlFor="newsletter-email">
                  Email
                </label>
                <div className="flex items-end gap-3 border-b border-white/20">
                  <input
                    id="newsletter-email"
                    type="email"
                    required
                    placeholder="Email"
                    autoComplete="email"
                  />
                  <button
                    type="submit"
                    className="shrink-0 pb-2 text-[12px] font-medium tracking-[0.09em] uppercase"
                  >
                    Join
                  </button>
                </div>
              </form>
            )}
            <div className="mt-10 text-[13px] leading-relaxed text-muted">
              <p className="mb-2 font-medium tracking-[0.06em] text-paper">
                {COMPANY.legalName}
              </p>
              {COMPANY.addressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
              <p className="mt-3">
                <a href={COMPANY.emailHref} className="hover:text-coral">
                  {COMPANY.email}
                </a>
              </p>
              <p>
                <a href={COMPANY.phoneHref} className="hover:text-coral">
                  {COMPANY.phone}
                </a>
              </p>
            </div>
          </div>

          <div>
            <Link href="/" className="logo-mark mb-10 inline-block">
              {COMPANY.shortName}
            </Link>
            <div className="grid gap-10 sm:grid-cols-2">
              <FooterCol title="MAIN MENU" links={FOOTER_MAIN} />
              <FooterCol title="HELPFUL LINKS" links={FOOTER_HELP} />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-canvas text-[12px] text-muted">
        <div className="wrapper-full flex flex-col gap-4 py-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <label className="flex items-center gap-2">
              <span className="uppercase tracking-[0.08em]">Currency</span>
              <select
                defaultValue="USD"
                className="border-0 bg-transparent py-1 text-sand"
                aria-label="Currency"
              >
                <option value="USD">United States (US $)</option>
                <option value="CAD">Canada (CA $)</option>
                <option value="MXN">Mexico (MX $)</option>
              </select>
            </label>
            <p>
              © {COMPANY.legalName} {COMPANY.year}
            </p>
          </div>
          <ul className="flex flex-wrap gap-x-4 gap-y-1">
            {FOOTER_HELP.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-paper">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="mb-4 text-[12px] font-medium tracking-[0.12em] uppercase">
        {title}
      </p>
      <ul className="space-y-2 text-[14px] text-muted">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="hover:text-paper">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

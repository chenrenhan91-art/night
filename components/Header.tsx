"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { COMPANY, NAV } from "@/data/content";
import { formatMoney } from "@/data/catalog";
import { useCart } from "@/lib/cart";
import { withBase } from "@/lib/paths";
import { IconBag, IconClose, IconMenu, IconSearch } from "./Icons";

function Logo() {
  return (
    <Link href="/" className="logo-mark" aria-label={COMPANY.legalName}>
      {COMPANY.shortName}
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const transparent = pathname === "/";
  const { count, subtotal, setOpen, setSearchOpen } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const cartLabel = `${formatMoney(subtotal)} (${count})`;

  return (
    <header
      className={`z-40 w-full ${
        transparent
          ? "absolute top-0 left-0 bg-gradient-to-b from-black/35 to-transparent"
          : "relative bg-ink"
      }`}
    >
      <div className="wrapper-full">
        <div className="flex h-[64px] items-center justify-between lg:hidden">
          <button
            type="button"
            className="p-2 text-paper"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            <IconMenu />
          </button>
          <Logo />
          <button
            type="button"
            className="flex items-center gap-2 p-2 text-paper"
            onClick={() => setOpen(true)}
            aria-label="Cart"
          >
            <IconBag />
            <span className="text-[11px] tracking-[0.06em]">{cartLabel}</span>
          </button>
        </div>

        <div className="hidden h-[72px] grid-cols-[1fr_auto_1fr] items-center lg:grid">
          <nav className="flex items-center gap-8">
            {NAV.map((item) => (
              <div key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className="nav-link inline-block py-6 text-paper/95"
                >
                  {item.label}
                </Link>
                {item.children?.length ? (
                  <div className="invisible absolute top-full left-0 z-50 min-w-[240px] bg-ink py-3 opacity-0 shadow-xl transition group-hover:visible group-hover:opacity-100">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="nav-link block px-5 py-2.5 text-paper/80 hover:text-coral"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </nav>
          <Logo />
          <div className="flex items-center justify-end gap-5 text-paper">
            <button
              type="button"
              aria-label="Search"
              className="p-1"
              onClick={() => setSearchOpen(true)}
            >
              <IconSearch />
            </button>
            <button
              type="button"
              className="flex items-center gap-2 p-1"
              onClick={() => setOpen(true)}
              aria-label="Cart"
            >
              <IconBag />
              <span className="text-[12px] tracking-[0.04em]">{cartLabel}</span>
            </button>
          </div>
        </div>
      </div>

      {menuOpen ? (
        <div className="fixed inset-0 z-50 bg-ink text-paper lg:hidden">
          <div className="flex h-[64px] items-center justify-end px-4">
            <button
              type="button"
              aria-label="Close"
              className="p-2"
              onClick={() => setMenuOpen(false)}
            >
              <IconClose />
            </button>
          </div>
          <div className="px-6 py-4">
            <form action={withBase("/search")} className="mb-8 border-b border-white/15">
              <input
                type="search"
                name="q"
                placeholder="Search..."
                aria-label="Search our store"
                className="w-full py-3"
              />
            </form>
            <ul>
              {NAV.map((item) => (
                <li key={item.label} className="border-b border-white/10">
                  <div className="flex items-center justify-between">
                    <Link href={item.href} className="nav-link block py-4">
                      {item.label}
                    </Link>
                    {item.children?.length ? (
                      <button
                        type="button"
                        className="px-3 py-4 text-[11px] tracking-[0.12em] uppercase"
                        onClick={() =>
                          setOpenGroup((g) =>
                            g === item.label ? null : item.label,
                          )
                        }
                      >
                        {openGroup === item.label ? "Hide" : "Expand"}
                      </button>
                    ) : null}
                  </div>
                  {openGroup === item.label && item.children ? (
                    <ul className="pb-4 pl-3">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block py-2 text-[13px] text-muted"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </header>
  );
}

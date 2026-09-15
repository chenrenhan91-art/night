"use client";

import { CartProvider } from "@/lib/cart";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { CartDrawer } from "./CartDrawer";
import { SearchOverlay } from "./SearchOverlay";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <Header />
      <main id="MainContent" className="flex-1">
        {children}
      </main>
      <Footer />
      <CartDrawer />
      <SearchOverlay />
    </CartProvider>
  );
}

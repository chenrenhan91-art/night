"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { getProduct } from "@/data/catalog";

export type CartLine = {
  id: string;
  handle: string;
  title: string;
  variantId: number;
  variantTitle: string;
  price: number;
  image: string;
  quantity: number;
};

type CartContextValue = {
  lines: CartLine[];
  open: boolean;
  searchOpen: boolean;
  setOpen: (v: boolean) => void;
  setSearchOpen: (v: boolean) => void;
  addItem: (input: Omit<CartLine, "id" | "quantity">, qty?: number) => void;
  updateQty: (id: string, quantity: number) => void;
  remove: (id: string) => void;
  clear: () => void;
  count: number;
  subtotal: number;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "mana-cart-v1";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as CartLine[];
        setLines(
          parsed.filter((l) => getProduct(l.handle) && l.quantity > 0),
        );
      }
    } catch {
      /* ignore */
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
  }, [lines, ready]);

  const addItem = useCallback(
    (input: Omit<CartLine, "id" | "quantity">, qty = 1) => {
      setLines((prev) => {
        const existing = prev.find((l) => l.variantId === input.variantId);
        if (existing) {
          return prev.map((l) =>
            l.variantId === input.variantId
              ? { ...l, quantity: l.quantity + qty }
              : l,
          );
        }
        return [
          ...prev,
          { ...input, id: `${input.variantId}`, quantity: qty },
        ];
      });
      setOpen(true);
    },
    [],
  );

  const updateQty = useCallback((id: string, quantity: number) => {
    setLines((prev) =>
      quantity <= 0
        ? prev.filter((l) => l.id !== id)
        : prev.map((l) => (l.id === id ? { ...l, quantity } : l)),
    );
  }, []);

  const remove = useCallback((id: string) => {
    setLines((prev) => prev.filter((l) => l.id !== id));
  }, []);

  const clear = useCallback(() => setLines([]), []);

  const count = useMemo(
    () => lines.reduce((n, l) => n + l.quantity, 0),
    [lines],
  );
  const subtotal = useMemo(
    () => lines.reduce((n, l) => n + l.price * l.quantity, 0),
    [lines],
  );

  const value = useMemo(
    () => ({
      lines,
      open,
      searchOpen,
      setOpen,
      setSearchOpen,
      addItem,
      updateQty,
      remove,
      clear,
      count,
      subtotal,
    }),
    [
      lines,
      open,
      searchOpen,
      addItem,
      updateQty,
      remove,
      clear,
      count,
      subtotal,
    ],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { cartTexts, products, store } from "@/data/site";
import { formatPrice } from "@/lib/format";

const CART_KEY = "udo_cart_v1";

type CartItem = { id: string; qty: number };

type CartContextValue = {
  items: CartItem[];
  count: number;
  total: number;
  isOpen: boolean;
  open: () => void;
  close: () => void;
  add: (id: string) => void;
  changeQty: (id: string, delta: number) => void;
  remove: (id: string) => void;
  checkoutUrl: string;
};

const CartContext = createContext<CartContextValue | null>(null);

export function findProduct(id: string) {
  return products.find((p) => p.id === id);
}

function buildWhatsAppMessage(items: CartItem[], total: number) {
  if (items.length === 0) return cartTexts.emptyMessage;
  const lines = items.flatMap((item) => {
    const p = findProduct(item.id);
    return p ? [`• ${p.name} (Qtd: ${item.qty}) — ${formatPrice(p.price * item.qty)}`] : [];
  });
  return [
    cartTexts.messageIntro,
    "",
    ...lines,
    "",
    `Total: ${formatPrice(total)}`,
    "",
    cartTexts.messageOutro,
  ].join("\n");
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Carrega a sacola salva (no navegador, depois da hidratação)
  useEffect(() => {
    try {
      const raw = localStorage.getItem(CART_KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {
      /* localStorage indisponível: segue em memória */
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(CART_KEY, JSON.stringify(items));
    } catch {
      /* localStorage indisponível: segue em memória */
    }
  }, [items, loaded]);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  const add = useCallback((id: string) => {
    setItems((prev) =>
      prev.some((i) => i.id === id)
        ? prev.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i))
        : [...prev, { id, qty: 1 }],
    );
    setIsOpen(true);
  }, []);

  const changeQty = useCallback((id: string, delta: number) => {
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, qty: i.qty + delta } : i)).filter((i) => i.qty > 0),
    );
  }, []);

  const remove = useCallback((id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const value = useMemo<CartContextValue>(() => {
    const total = items.reduce((sum, item) => {
      const p = findProduct(item.id);
      return p ? sum + p.price * item.qty : sum;
    }, 0);
    const count = items.reduce((sum, item) => sum + item.qty, 0);
    const checkoutUrl = `https://wa.me/${store.whatsapp}?text=${encodeURIComponent(buildWhatsAppMessage(items, total))}`;
    return { items, count, total, isOpen, open, close, add, changeQty, remove, checkoutUrl };
  }, [items, isOpen, open, close, add, changeQty, remove]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart precisa estar dentro de <CartProvider>");
  return ctx;
}

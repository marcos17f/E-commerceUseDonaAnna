"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { cartTexts } from "@/data/site";
import { formatPrice } from "@/lib/format";
import { findProduct, useCart } from "./CartProvider";
import { EASE } from "./motion";

const qtyBtn =
  "flex size-7 items-center justify-center rounded-full bg-pink-deep/15 text-[13px] leading-none text-pink-deep transition-colors hover:bg-pink-deep/25";

export function CartDrawer() {
  const { items, total, isOpen, close, changeQty, remove, checkoutUrl } = useCart();

  // Fecha com Esc e trava a rolagem da página enquanto a sacola está aberta
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [isOpen, close]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="overlay"
          className="fixed inset-0 z-[80] bg-ink/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={close}
        />
      )}
      {isOpen && (
        <motion.aside
          key="drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Sacola de compras"
          className="fixed right-0 top-0 z-[90] flex h-full w-[400px] max-w-[92vw] flex-col rounded-l-2xl border-l border-pink-deep/30 bg-panel"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.4, ease: EASE }}
        >
          <div className="flex items-center justify-between border-b border-pink-deep/30 px-6 py-[22px]">
            <h3 className="font-display text-[21px] font-bold">{cartTexts.title}</h3>
            <button
              onClick={close}
              aria-label="Fechar sacola"
              className="flex size-8 items-center justify-center rounded-full bg-pink-deep/15 text-lg text-pink-deep transition-transform duration-300 hover:rotate-90"
            >
              ×
            </button>
          </div>

          <div className="flex-1 overflow-y-auto overflow-x-hidden px-6 py-2.5">
            {items.length === 0 ? (
              <p className="py-[60px] text-center text-[13px] text-muted">{cartTexts.empty}</p>
            ) : (
              <AnimatePresence initial={false}>
                {items.map((item) => {
                  const p = findProduct(item.id);
                  if (!p) return null;
                  return (
                    <motion.div
                      key={p.id}
                      layout
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 24 }}
                      transition={{ duration: 0.25 }}
                      className="flex gap-3 border-b border-pink-deep/30 py-[18px]"
                    >
                      <Image
                        src={p.img}
                        alt={p.name}
                        width={132}
                        height={132}
                        className="size-[66px] rounded-[14px] object-cover"
                      />
                      <div className="flex-1">
                        <h5 className="mb-1 text-[13px] font-bold">{p.name}</h5>
                        <div className="font-display text-[13px] font-bold text-pink-deep">
                          {formatPrice(p.price)}
                        </div>
                        <div className="mt-2 flex items-center gap-2.5">
                          <button
                            onClick={() => changeQty(p.id, -1)}
                            aria-label="Diminuir quantidade"
                            className={qtyBtn}
                          >
                            −
                          </button>
                          <span>{item.qty}</span>
                          <button
                            onClick={() => changeQty(p.id, 1)}
                            aria-label="Aumentar quantidade"
                            className={qtyBtn}
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => remove(p.id)}
                          className="mt-2 text-[11px] text-muted underline hover:text-danger"
                        >
                          {cartTexts.remove}
                        </button>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            )}
          </div>

          <div className="border-t border-pink-deep/30 px-6 py-[22px]">
            <div className="mb-4 flex justify-between text-[15px]">
              <span>{cartTexts.total}</span>
              <strong className="font-display text-xl font-bold text-pink-deep">
                {formatPrice(total)}
              </strong>
            </div>
            <a href={checkoutUrl} target="_blank" rel="noopener" className="btn btn-solid w-full">
              {cartTexts.checkout}
            </a>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}

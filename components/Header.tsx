"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { navLinks, store } from "@/data/site";
import { useCart } from "./CartProvider";
import { BagIcon, HeartIcon } from "./icons";
import { EASE } from "./motion";

const iconBtn =
  "relative flex size-[38px] items-center justify-center rounded-full bg-pink-deep/15 text-gold ring-1 ring-inset ring-pink-deep/30 transition duration-200 hover:-translate-y-0.5 hover:bg-gold/25";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { count, open } = useCart();

  return (
    <header className="sticky top-0 z-[60] border-b border-pink-deep/30 bg-ink/92 backdrop-blur-md">
      <div className="wrap flex items-center justify-between gap-5 py-2.5 md:py-4">
        <a href="#top" className="flex items-center gap-3">
          <Image
            src={store.logo}
            alt={store.name}
            width={96}
            height={96}
            priority
            className="size-[38px] flex-none rounded-full object-cover shadow-[0_6px_14px_-6px_rgb(0_0_0/0.6)] ring-2 ring-gold/65 md:size-12"
          />
          <span className="font-display text-[17px] font-bold leading-[1.1] text-bg md:text-[22px]">
            {store.name}
            <span className="mt-1 hidden font-sans text-[9px] font-bold uppercase tracking-[0.16em] text-gold md:block">
              {store.tagline}
            </span>
          </span>
        </a>

        <nav className="hidden xl:block" aria-label="Principal">
          <ul className="flex gap-[30px]">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="relative px-0.5 py-1.5 text-[13px] font-bold text-bg after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:rounded-sm after:bg-gold after:transition-[width] after:duration-200 hover:after:w-full"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2 md:gap-3.5">
          <button className={iconBtn} aria-label="Favoritos">
            <HeartIcon className="size-[18px]" />
          </button>
          <button className={iconBtn} aria-label="Sacola" onClick={open}>
            <BagIcon className="size-[18px]" />
            <motion.span
              key={count}
              initial={{ scale: 1.5 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 500, damping: 18 }}
              className="absolute -right-1 -top-1 flex h-[17px] min-w-[17px] items-center justify-center rounded-full border-2 border-ink bg-danger px-[3px] text-[10px] font-extrabold text-white"
            >
              {count}
            </motion.span>
          </button>
          <button
            className="flex size-[38px] flex-col items-center justify-center gap-[5px] xl:hidden"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <motion.span
              className="block h-0.5 w-[22px] rounded-sm bg-gold"
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            />
            <motion.span
              className="block h-0.5 w-[22px] rounded-sm bg-gold"
              animate={{ opacity: menuOpen ? 0 : 1 }}
            />
            <motion.span
              className="block h-0.5 w-[22px] rounded-sm bg-gold"
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            />
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {menuOpen && (
          <motion.nav
            id="mobile-nav"
            aria-label="Menu mobile"
            className="overflow-hidden border-t border-pink-deep/30 xl:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            <motion.div
              className="wrap flex flex-col pb-[18px] pt-1.5"
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.05, delayChildren: 0.08 } } }}
            >
              {navLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  variants={{ hidden: { opacity: 0, x: -14 }, show: { opacity: 1, x: 0 } }}
                  className="border-b border-pink-deep/30 py-3 text-[13px] font-bold text-bg"
                >
                  {link.label}
                </motion.a>
              ))}
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

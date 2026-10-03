"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { cookies, whatsappLink } from "@/data/site";
import { WhatsAppIcon } from "./icons";
import { EASE } from "./motion";

const COOKIE_KEY = "udo_cookies_ok";
const fab =
  "fixed bottom-[18px] z-[70] flex size-12 items-center justify-center rounded-full shadow-[0_10px_26px_-8px_rgb(30_20_24/0.5)] sm:bottom-[26px] sm:size-14";

/* Botões flutuantes: WhatsApp e voltar ao topo */
export function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener"
        aria-label="Falar no WhatsApp"
        className={`${fab} left-[18px] bg-whatsapp text-[#0b2f16] sm:left-[26px]`}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
      >
        <WhatsAppIcon className="size-6 sm:size-7" />
      </motion.a>

      <AnimatePresence>
        {showTop && (
          <motion.button
            aria-label="Voltar ao topo"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={`${fab} right-[18px] bg-white text-[22px] text-pink-deep sm:right-[26px]`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
          >
            ↑
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}

/* Aviso de cookies (LGPD): mostra uma vez, lembra a escolha */
export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let accepted = false;
    try {
      accepted = localStorage.getItem(COOKIE_KEY) === "1";
    } catch {}
    if (accepted) return;
    const t = setTimeout(() => setVisible(true), 800);
    return () => clearTimeout(t);
  }, []);

  function accept() {
    setVisible(false);
    try {
      localStorage.setItem(COOKIE_KEY, "1");
    } catch {}
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="region"
          aria-label="Aviso de cookies"
          className="fixed inset-x-3 bottom-3 z-[120] mx-auto flex max-w-[640px] flex-wrap items-center gap-[18px] rounded-2xl bg-ink px-[18px] py-4 text-white shadow-[0_20px_40px_-14px_rgb(0_0_0/0.5)] sm:inset-x-5 sm:bottom-5 sm:px-6 sm:py-5"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 80 }}
          transition={{ duration: 0.4, ease: EASE }}
        >
          <p className="min-w-[200px] flex-1 text-[13px] leading-normal">
            {cookies.text}{" "}
            <a href={cookies.linkHref} className="text-pink underline">
              {cookies.linkLabel}
            </a>
            .
          </p>
          <button onClick={accept} className="btn btn-solid !px-6 !py-[11px] !text-xs">
            {cookies.button}
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

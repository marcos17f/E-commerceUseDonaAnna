"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { hero, products } from "@/data/site";
import { formatPrice } from "@/lib/format";
import { Laurel } from "./icons";
import { EASE } from "./motion";

const words = hero.title.split(" ");
const WORD_DELAY = 0.07;
const afterTitle = 0.25 + words.length * WORD_DELAY;

const featured = hero.featured.flatMap((id) => products.find((p) => p.id === id) ?? []);
// inclinação de cada foto do leque (esquerda, centro, direita)
const tilt = [-8, 0, 8];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: EASE, delay },
});

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  // parallax leve no scroll: laterais sobem, a do meio desce; parado com prefers-reduced-motion
  const sideY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, -50]);
  const centerY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 30]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-ink">
      {/* brilho decorativo atrás das fotos */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 h-[420px] w-[min(900px,120vw)] -translate-x-1/2 rounded-[50%] bg-gold opacity-15 blur-[110px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 size-[300px] rounded-full bg-pink-pale opacity-10 blur-3xl"
      />

      <div className="wrap relative flex flex-col items-center pt-12 text-center lg:pt-14">
        <motion.div
          {...fadeUp(0.1)}
          className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-gold/40 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-gold"
        >
          <Laurel className="h-[18px] w-3 flex-none" />
          <span>{hero.seal}</span>
          <Laurel className="h-[18px] w-3 flex-none -scale-x-100" />
        </motion.div>

        <h1
          aria-label={hero.title}
          className="mb-5 max-w-[1000px] font-display text-[clamp(34px,5.4vw,68px)] font-extrabold leading-[1.04] tracking-tight text-bg"
        >
          {words.map((word, i) => {
            const highlighted = word.includes(hero.highlight);
            return (
              <motion.span
                key={i}
                aria-hidden
                className={`inline-block ${highlighted ? "italic text-gold" : ""}`}
                initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.6, ease: EASE, delay: 0.25 + i * WORD_DELAY }}
              >
                {word}
                {i < words.length - 1 ? " " : ""}
              </motion.span>
            );
          })}
        </h1>

        <motion.p {...fadeUp(afterTitle)} className="mb-7 max-w-[520px] text-[14.5px] text-cream/72 sm:text-base">
          {hero.text}
        </motion.p>

        <motion.div {...fadeUp(afterTitle + 0.12)} className="flex w-full flex-wrap justify-center gap-3.5">
          <a href={hero.primaryCta.href} className="btn btn-solid max-[480px]:flex-1">
            {hero.primaryCta.label}
          </a>
          <a href={hero.secondaryCta.href} className="btn btn-outline max-[480px]:flex-1">
            {hero.secondaryCta.label}
          </a>
        </motion.div>

        {/* ---------- Leque de fotos ---------- */}
        <div className="mt-12 flex w-full items-end justify-center pb-10 sm:pb-14">
          {featured.map((p, i) => {
            const center = i === 1;
            return (
              <motion.div
                key={p.id}
                style={{ y: center ? centerY : sideY }}
                className={
                  center
                    ? "relative z-10 -mx-5 w-[44vw] max-w-[330px] sm:-mx-8"
                    : "relative w-[36vw] max-w-[270px]"
                }
              >
                <motion.a
                  href={hero.primaryCta.href}
                  className="group relative block aspect-[3/4] overflow-hidden rounded-[18px] border border-gold/60 bg-panel-2 shadow-[0_30px_60px_-20px_rgb(0_0_0/0.8)] sm:rounded-[26px]"
                  initial={{ opacity: 0, y: 90, rotate: 0 }}
                  animate={{ opacity: 1, y: center ? 0 : 26, rotate: tilt[i] }}
                  whileHover={{ y: center ? -10 : 10, rotate: 0, scale: 1.03 }}
                  transition={{ duration: 0.8, ease: EASE, delay: afterTitle + 0.2 + i * 0.12 }}
                >
                  <Image
                    src={p.img}
                    alt={p.name}
                    fill
                    priority
                    sizes="(min-width: 768px) 330px, 44vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent px-3 pb-3 pt-10 sm:px-5 sm:pb-4 ${
                      // as laterais ficam parcialmente atrás da foto do meio: texto puxado para a borda de fora
                      i === 0 ? "pr-7 text-left sm:pr-10" : i === 2 ? "pl-7 text-right sm:pl-10" : "text-left"
                    }`}
                  >
                    <span className="block text-[10px] font-bold leading-tight text-bg sm:text-[13px]">{p.name}</span>
                    <span className="font-display text-[13px] font-extrabold text-gold sm:text-lg">
                      {formatPrice(p.price)}
                    </span>
                  </div>
                </motion.a>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ---------- Números de destaque ---------- */}
      <motion.dl
        {...fadeUp(afterTitle + 0.5)}
        className="relative border-t border-pink-deep/40 bg-ink/80 backdrop-blur-sm"
      >
        <div className="wrap grid grid-cols-3 divide-x divide-pink-deep/40">
          {hero.stats.map((stat) => (
            <div key={stat.value} className="flex flex-col-reverse items-center px-2 py-5 text-center sm:py-7">
              <dt className="text-[10.5px] font-semibold leading-snug text-cream/60 sm:text-[13px]">{stat.label}</dt>
              <dd className="font-display text-[24px] font-extrabold leading-tight text-gold sm:text-[38px]">
                {stat.value}
              </dd>
            </div>
          ))}
        </div>
      </motion.dl>
    </section>
  );
}

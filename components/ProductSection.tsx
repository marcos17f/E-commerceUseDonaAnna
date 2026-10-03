"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { INSTALLMENTS, PIX_DISCOUNT, cartTexts, products, productSections, type Product, type SectionId } from "@/data/site";
import { formatPrice, starString } from "@/lib/format";
import { useCart } from "./CartProvider";
import { HeartIcon } from "./icons";
import { Stagger, StaggerItem } from "./motion";
import { SectionHeading } from "./SectionHeading";

function ProductCard({ product: p }: { product: Product }) {
  const { add } = useCart();
  const [fav, setFav] = useState(false); // feedback visual apenas, sem persistência
  const discountPct = p.oldPrice ? Math.round((1 - p.price / p.oldPrice) * 100) : null;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[18px] bg-panel shadow-[0_10px_26px_-18px_rgb(30_20_24/0.25)] transition-shadow duration-300 hover:shadow-[0_26px_40px_-18px_rgb(153_89_103/0.4)]">
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={p.img}
          alt={p.name}
          fill
          sizes="(min-width: 1280px) 290px, (min-width: 480px) 50vw, 340px"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <span className="absolute left-3.5 top-3.5 rounded-md bg-white px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.04em] text-pink-deep shadow-[0_6px_14px_-6px_rgb(30_20_24/0.25)]">
          {p.tag}
        </span>
        {discountPct && (
          <span className="absolute right-3.5 top-3.5 rounded-md bg-danger px-2.5 py-1.5 text-[11px] font-extrabold text-white">
            -{discountPct}%
          </span>
        )}
        {/* botão: aparece no hover/foco; em telas de toque fica sempre visível */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-ink/85 to-transparent p-3.5 pr-[60px] opacity-0 transition duration-300 group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:translate-y-0 group-hover:opacity-100 [@media(hover:none)]:translate-y-0 [@media(hover:none)]:opacity-100">
          <button onClick={() => add(p.id)} className="btn btn-solid w-full !p-[11px] !text-xs">
            {cartTexts.add}
          </button>
        </div>
        <motion.button
          onClick={() => setFav((v) => !v)}
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.85 }}
          animate={fav ? { scale: [1, 1.35, 1] } : { scale: 1 }}
          transition={{ duration: 0.35 }}
          aria-label={`Favoritar ${p.name}`}
          aria-pressed={fav}
          className={`absolute bottom-3.5 right-3.5 flex size-9 items-center justify-center rounded-full bg-white shadow-[0_6px_14px_-6px_rgb(30_20_24/0.3)] transition-colors ${fav ? "text-danger" : "text-muted"}`}
        >
          <HeartIcon className="size-4" filled={fav} />
        </motion.button>
      </div>

      <div className="flex flex-1 flex-col gap-2 px-[18px] pb-5 pt-[18px]">
        <h3 className="text-[14.5px] font-bold">{p.name}</h3>
        <div className="flex items-center gap-1.5 text-[11px] text-muted">
          <span className="tracking-[1px] text-gold" aria-hidden>
            {starString(p.rating)}
          </span>
          <span className="sr-only">Avaliação {p.rating.toLocaleString("pt-BR")} de 5</span>({p.reviews})
        </div>
        <div className="mt-auto">
          {p.oldPrice && (
            <span className="mr-1.5 text-xs text-muted line-through">{formatPrice(p.oldPrice)}</span>
          )}
          <span className="font-display text-[21px] font-extrabold text-pink-deep">{formatPrice(p.price)}</span>
          <span className="mt-0.5 block text-[11px] text-muted">
            {INSTALLMENTS}x de {formatPrice(p.price / INSTALLMENTS)} sem juros
          </span>
          <span className="mt-0.5 block text-[11px] font-bold">
            {formatPrice(p.price * (1 - PIX_DISCOUNT))} no Pix
          </span>
        </div>
      </div>
    </article>
  );
}

export function ProductSection({ id }: { id: SectionId }) {
  const section = productSections.find((s) => s.id === id)!;
  const items = products.filter((p) => p.section === id);

  return (
    <section id={section.anchor} className="py-14">
      <div className="wrap">
        <SectionHeading eyebrow={section.eyebrow} title={section.title} />
        <Stagger className="mx-auto mt-4 grid max-w-[340px] grid-cols-1 gap-6 min-[480px]:max-w-none min-[480px]:grid-cols-2 xl:grid-cols-4">
          {items.map((p) => (
            <StaggerItem key={p.id} lift={8}>
              <ProductCard product={p} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

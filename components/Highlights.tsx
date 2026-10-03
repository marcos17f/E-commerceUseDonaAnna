"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { highlights } from "@/data/site";
import { EASE } from "./motion";
import { SectionHeading } from "./SectionHeading";

// cada foto entra de um lado, girando (esquerda, baixo, direita)
const entrances = [
  { x: "-60%", y: 0, rotate: -40 },
  { x: 0, y: "60%", rotate: 30 },
  { x: "60%", y: 0, rotate: 40 },
];

export function Highlights() {
  return (
    <section className="overflow-x-clip pb-24 pt-5">
      <div className="wrap">
        <SectionHeading eyebrow={highlights.eyebrow} title={highlights.title} />
        <div className="mt-[70px] grid grid-cols-1 gap-x-8 gap-y-20 xl:grid-cols-3">
          {highlights.items.map((item, i) => (
            <motion.div
              key={item.title}
              className="relative rounded-[28px] bg-panel px-5 pb-8 text-center shadow-[0_14px_32px_-18px_rgb(30_20_24/0.3)]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: EASE, delay: i * 0.12 }}
              whileHover={{ y: -6 }}
            >
              <motion.div
                className="relative mx-auto -mt-14 aspect-square w-[64%] max-w-[260px] overflow-hidden rounded-[22px] border-4 border-white shadow-[0_18px_30px_-14px_rgb(30_20_24/0.4)] sm:w-[70%]"
                initial={{ opacity: 0, ...entrances[i % entrances.length] }}
                whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, ease: EASE, delay: 0.1 + i * 0.12 }}
              >
                <Image
                  src={item.img}
                  alt={item.alt}
                  fill
                  sizes="260px"
                  className="object-cover"
                />
              </motion.div>
              <h3 className="mb-[18px] mt-6 font-display text-xl font-bold">{item.title}</h3>
              <a href={highlights.cta.href} className="btn btn-solid !px-[26px] !py-3 !text-xs">
                {highlights.cta.label}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

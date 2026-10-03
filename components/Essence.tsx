"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { essence } from "@/data/site";
import { Laurel } from "./icons";
import { EASE, Stagger, StaggerItem } from "./motion";
import { Eyebrow } from "./SectionHeading";

const viewport = { once: true, amount: 0.4 };

export function Essence() {
  return (
    <section className="overflow-hidden py-[90px]">
      <div className="wrap grid items-center gap-9 text-center xl:grid-cols-[0.9fr_1.1fr] xl:gap-14 xl:text-left">
        {/* círculo gira e a foto surge de dentro dele */}
        <div className="relative mx-auto w-full max-w-[260px] sm:max-w-[380px] xl:mx-0">
          <motion.svg
            viewBox="0 0 200 200"
            className="block w-full"
            initial={{ opacity: 0, scale: 0.7, rotate: -60 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={viewport}
            transition={{ duration: 0.9, ease: EASE }}
          >
            <circle cx="100" cy="100" r="94" fill="#EFE4C7" />
            <circle cx="100" cy="100" r="94" fill="none" stroke="#A38E41" strokeWidth="1.5" />
          </motion.svg>
          <motion.div
            className="absolute inset-[14%] overflow-hidden rounded-full border-[5px] border-white shadow-[0_20px_40px_-16px_rgb(30_20_24/0.35)]"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewport}
            transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
          >
            <Image
              src={essence.image.src}
              alt={essence.image.alt}
              fill
              sizes="(min-width: 640px) 280px, 190px"
              className="object-cover"
            />
          </motion.div>
          <Laurel className="absolute -right-3.5 -top-6 w-[60px] text-gold opacity-85" />
        </div>

        <Stagger className="flex flex-col items-center xl:items-start">
          <StaggerItem>
            <Eyebrow>{essence.eyebrow}</Eyebrow>
          </StaggerItem>
          <StaggerItem>
            <h2 className="mb-2 font-display text-[clamp(30px,3.6vw,46px)] font-bold leading-tight tracking-tight">
              {essence.title}
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p className="my-4 mb-[26px] text-muted">{essence.text}</p>
          </StaggerItem>
          <StaggerItem>
            <a href={essence.cta.href} className="btn btn-outline">
              {essence.cta.label}
            </a>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}

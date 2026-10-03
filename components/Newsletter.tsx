"use client";

import { useState, type FormEvent } from "react";
import { newsletter } from "@/data/site";
import { Reveal } from "./motion";

export function Newsletter() {
  const [done, setDone] = useState(false);

  // Sem back-end: só feedback visual
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    e.currentTarget.reset();
    setDone(true);
    setTimeout(() => setDone(false), 2200);
  }

  return (
    <section className="py-16">
      <div className="wrap">
        <Reveal className="flex flex-col items-start justify-between gap-[30px] rounded-3xl bg-gradient-to-r from-pink-deep to-pink px-[22px] py-[30px] sm:rounded-[32px] sm:px-7 sm:py-9 md:flex-row md:flex-wrap md:items-center md:px-[60px] md:py-14">
          <div>
            <h3 className="mb-1.5 font-display text-[22px] font-bold text-white sm:text-[27px]">
              {newsletter.title}
            </h3>
            <p className="text-white/85">{newsletter.text}</p>
          </div>
          <form onSubmit={onSubmit} className="flex w-full gap-2 md:w-auto md:min-w-[360px]">
            <input
              type="email"
              required
              aria-label="E-mail"
              placeholder={newsletter.placeholder}
              className="min-w-0 flex-1 rounded-lg bg-white px-[18px] py-[15px] text-[13px] text-text placeholder:text-muted"
            />
            <button
              type="submit"
              className="rounded-lg bg-ink px-[26px] text-xs font-extrabold uppercase tracking-[0.04em] text-white transition duration-200 hover:-translate-y-0.5 hover:bg-black active:scale-95"
            >
              <span aria-live="polite">{done ? newsletter.success : newsletter.button}</span>
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

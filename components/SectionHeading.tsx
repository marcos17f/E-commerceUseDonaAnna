import { Reveal } from "./motion";

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-pink-deep/30 bg-panel px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.1em] text-pink-deep before:inline-block before:size-1.5 before:rounded-full before:bg-gold">
      {children}
    </span>
  );
}

export function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <Reveal className="mb-2 flex flex-col items-start">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mb-2 font-display text-[clamp(30px,3.6vw,46px)] font-bold leading-tight tracking-tight">
        {title}
      </h2>
    </Reveal>
  );
}

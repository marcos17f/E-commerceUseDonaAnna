import { store, ticker, whatsappLink } from "@/data/site";

/* Faixa animada com os avisos da loja */
export function Ticker() {
  // lista duplicada para o loop contínuo (a animação anda -50%)
  const items = [...ticker, ...ticker];
  return (
    <div className="flex h-[30px] items-center overflow-hidden whitespace-nowrap bg-pink-deep md:h-[38px]">
      <div className="inline-flex motion-safe:animate-ticker">
        {items.map((text, i) => (
          <span
            key={i}
            aria-hidden={i >= ticker.length}
            className="border-r border-white/30 px-8 text-[11px] font-bold uppercase tracking-[0.08em] text-white"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}

/* Barra de contato */
export function InfoBar() {
  return (
    <div className="whitespace-nowrap border-b border-pink-deep/30 bg-ink text-[10.5px] text-cream/65 min-[420px]:text-xs">
      <div className="wrap flex items-center justify-between gap-2 py-1.5 sm:gap-4 md:py-[9px]">
        <div className="flex items-center gap-1.5">
          <a href={whatsappLink} target="_blank" rel="noopener" className="transition-colors hover:text-gold">
            {store.whatsappLabel}
          </a>
          <span className="hidden md:inline">&nbsp;·&nbsp;{store.email}</span>
        </div>
        <div className="flex items-center gap-2 sm:gap-[18px]">
          <span className="font-bold text-gold">{store.freeShipping}</span>
          <a
            href={store.instagram}
            target="_blank"
            rel="noopener"
            aria-label="Instagram"
            className="flex size-[22px] items-center justify-center rounded-full bg-pink-deep/15 text-[10px] font-extrabold text-gold transition-colors hover:bg-gold/25"
          >
            IG
          </a>
        </div>
      </div>
    </div>
  );
}

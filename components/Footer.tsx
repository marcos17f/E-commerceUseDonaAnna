import Image from "next/image";
import { footer, store, whatsappLink } from "@/data/site";
import { Stagger, StaggerItem } from "./motion";

const social =
  "flex size-9 items-center justify-center rounded-full bg-pink-deep/15 text-[13px] font-extrabold text-gold transition duration-200 hover:-translate-y-0.5 hover:bg-gold/25";

export function Footer() {
  return (
    <footer className="bg-ink pt-20 text-cream/80">
      <Stagger className="wrap grid grid-cols-1 gap-[30px] pb-[50px] md:grid-cols-2 md:gap-10 xl:grid-cols-[1.6fr_1fr_1fr_1fr]">
        <StaggerItem>
          <a href="#top" className="mb-3.5 flex items-center gap-3">
            <Image
              src={store.logo}
              alt={store.name}
              width={96}
              height={96}
              className="size-12 flex-none rounded-full object-cover ring-2 ring-gold/65"
            />
            <span className="font-display text-[22px] font-bold leading-[1.1] text-bg">{store.name}</span>
          </a>
          <p className="max-w-[280px] text-[13px]">{footer.about}</p>
          <div className="mt-[18px] flex gap-3">
            <a href={store.instagram} target="_blank" rel="noopener" aria-label="Instagram" className={social}>
              IG
            </a>
            <a href={whatsappLink} target="_blank" rel="noopener" aria-label="WhatsApp" className={social}>
              Wa
            </a>
          </div>
        </StaggerItem>

        {footer.columns.map((col) => (
          <StaggerItem key={col.title}>
            <h5 className="mb-[18px] text-[11px] font-extrabold uppercase tracking-[0.1em] text-gold">
              {col.title}
            </h5>
            <ul className="space-y-2.5">
              {col.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    {...(link.external ? { target: "_blank", rel: "noopener" } : {})}
                    className="text-[13px] text-cream/62 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </StaggerItem>
        ))}
      </Stagger>

      <div className="wrap">
        <div className="flex flex-wrap items-center gap-2.5 border-t border-pink-deep/30 py-[22px]">
          {footer.payments.map((p) => (
            <span key={p} className="rounded-md bg-pink-deep/15 px-3 py-[5px] text-[11px] font-bold text-gold">
              {p}
            </span>
          ))}
        </div>
      </div>
      <div className="border-t border-pink-deep/30 px-4 py-4 text-center text-[11px] text-cream/45">
        {footer.copyright}
      </div>
    </footer>
  );
}

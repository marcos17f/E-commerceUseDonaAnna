import { reviews } from "@/data/site";
import { Stagger, StaggerItem } from "./motion";
import { SectionHeading } from "./SectionHeading";
import { card, gradientDisc } from "./ui";

/* Depoimentos */
export function Reviews() {
  return (
    <section className="pb-[90px]">
      <div className="wrap">
        <SectionHeading eyebrow={reviews.eyebrow} title={reviews.title} />
        <Stagger className="mt-9 grid grid-cols-1 gap-6 md:grid-cols-3">
          {reviews.items.map((r) => (
            <StaggerItem key={r.name} lift={6}>
              <figure className={`${card} p-7`}>
                <span className="tracking-[1px] text-gold" aria-label={`${r.stars} de 5 estrelas`}>
                  {"★".repeat(r.stars)}
                </span>
                <blockquote className="mb-5 mt-3.5 font-display text-base font-medium italic leading-normal">
                  &quot;{r.quote}&quot;
                </blockquote>
                <figcaption className="flex items-center gap-3">
                  <div className={`${gradientDisc} size-[38px]`}>{r.name.charAt(0)}</div>
                  <div>
                    <strong className="block text-[13px]">{r.name}</strong>
                    <span className="block text-[11px] text-muted">Comprou: {r.bought}</span>
                  </div>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

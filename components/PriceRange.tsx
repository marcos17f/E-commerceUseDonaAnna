import { priceRanges } from "@/data/site";
import { Stagger, StaggerItem } from "./motion";
import { SectionHeading } from "./SectionHeading";
import { card, gradientDisc } from "./ui";

/* Faixa de preço */
export function PriceRange() {
  return (
    <section className="py-14">
      <div className="wrap">
        <SectionHeading eyebrow={priceRanges.eyebrow} title={priceRanges.title} />
        <Stagger className="mt-9 grid grid-cols-1 gap-[22px] md:grid-cols-3">
          {priceRanges.items.map((item) => (
            <StaggerItem key={item.title} lift={6}>
              <div className={`${card} px-[26px] py-9 text-center`}>
                <div className={`${gradientDisc} mx-auto mb-4 size-[54px] text-xl`}>{item.icon}</div>
                <h4 className="mb-2 font-display text-[19px] font-bold">{item.title}</h4>
                <p className="text-[13px] text-muted">{item.text}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

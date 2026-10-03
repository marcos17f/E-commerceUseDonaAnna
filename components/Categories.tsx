import Image from "next/image";
import { categories } from "@/data/site";
import { SectionHeading } from "./SectionHeading";
import { Stagger, StaggerItem } from "./motion";

export function Categories() {
  return (
    <section id="categorias" className="pb-10 pt-16">
      <div className="wrap">
        <SectionHeading eyebrow={categories.eyebrow} title={categories.title} />
        <Stagger className="mt-6 grid grid-cols-1 gap-5 min-[480px]:grid-cols-2 xl:grid-cols-3">
          {categories.items.map((cat) => (
            <StaggerItem key={cat.title} lift={6}>
              <a
                href={cat.href}
                className="group relative block aspect-[3/4] overflow-hidden rounded-[18px] shadow-[0_14px_30px_-16px_rgb(153_89_103/0.35)] transition-shadow duration-300 hover:shadow-[0_22px_38px_-16px_rgb(153_89_103/0.5)]"
              >
                <Image
                  src={cat.img}
                  alt={cat.alt}
                  fill
                  sizes="(min-width: 1280px) 400px, (min-width: 480px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.08]"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent from-35% to-ink/80" />
                <div className="absolute inset-x-5 bottom-5">
                  <h3 className="mb-0.5 font-display text-[22px] font-bold text-white">{cat.title}</h3>
                  <span className="text-[11px] font-bold uppercase tracking-[0.04em] text-pink-pale">
                    {cat.subtitle}
                  </span>
                </div>
              </a>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

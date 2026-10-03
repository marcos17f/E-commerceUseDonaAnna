import { benefits } from "@/data/site";
import { Stagger, StaggerItem } from "./motion";

/* Benefícios */
export function Benefits() {
  return (
    <section className="bg-panel-2 py-[60px]">
      <Stagger className="wrap grid grid-cols-1 gap-6 min-[480px]:grid-cols-2 min-[480px]:gap-[30px] xl:grid-cols-4 xl:gap-[26px]">
        {benefits.map((b) => (
          <StaggerItem key={b.title} className="group text-center">
            <div className="mx-auto mb-3.5 flex size-14 items-center justify-center rounded-full bg-white text-xl text-pink-deep shadow-[0_10px_22px_-12px_rgb(30_20_24/0.3)] ring-[1.5px] ring-inset ring-pink-deep/30 transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110">
              {b.icon}
            </div>
            <h4 className="mb-1.5 text-[13.5px] font-bold">{b.title}</h4>
            <p className="text-xs text-muted">{b.text}</p>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}

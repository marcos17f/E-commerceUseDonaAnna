import Image from "next/image";
import { story } from "@/data/site";
import { Reveal, Stagger, StaggerItem } from "./motion";
import { Eyebrow } from "./SectionHeading";

export function Story() {
  return (
    <section className="my-[90px]">
      <div className="wrap">
        <Reveal className="grid overflow-hidden rounded-[32px] bg-panel-2 xl:grid-cols-2">
          <div className="relative min-h-[220px] xl:min-h-[320px]">
            <Image
              src={story.image.src}
              alt={story.image.alt}
              fill
              sizes="(min-width: 1280px) 600px, 100vw"
              className="object-cover"
            />
          </div>
          <Stagger className="flex flex-col items-start justify-center px-6 py-9 sm:p-[60px]">
            <StaggerItem>
              <Eyebrow>{story.eyebrow}</Eyebrow>
            </StaggerItem>
            <StaggerItem>
              <h2 className="mb-4 font-display text-[clamp(26px,3vw,36px)] font-bold leading-tight tracking-tight">
                {story.title}
              </h2>
            </StaggerItem>
            <StaggerItem>
              <p className="text-muted">{story.text}</p>
            </StaggerItem>
          </Stagger>
        </Reveal>
      </div>
    </section>
  );
}

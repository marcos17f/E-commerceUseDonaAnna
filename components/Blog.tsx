import Image from "next/image";
import { blog } from "@/data/site";
import { Stagger, StaggerItem } from "./motion";
import { SectionHeading } from "./SectionHeading";
import { card } from "./ui";

/* Blog */
export function Blog() {
  return (
    <section className="py-[90px]">
      <div className="wrap">
        <SectionHeading eyebrow={blog.eyebrow} title={blog.title} />
        <Stagger className="mt-9 grid grid-cols-1 gap-6 md:grid-cols-3">
          {blog.posts.map((post) => (
            <StaggerItem key={post.title} lift={6}>
              <article className={`${card} group overflow-hidden pb-[26px]`}>
                <div className="relative mb-[18px] aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.img}
                    alt={post.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="px-6">
                  <span className="block text-[10px] font-extrabold uppercase tracking-[0.1em] text-pink-deep">
                    {post.category}
                  </span>
                  <h4 className="mb-3.5 mt-3 font-display text-[19px] font-bold leading-[1.35]">{post.title}</h4>
                  <a
                    href={post.href}
                    className="border-b-2 border-pink-deep pb-0.5 text-[11px] font-extrabold uppercase tracking-[0.04em] text-pink-deep transition-colors hover:border-gold hover:text-gold"
                  >
                    {blog.linkLabel}
                  </a>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

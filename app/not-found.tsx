import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound as content, store } from "@/data/site";

export const metadata: Metadata = {
  title: content.title,
  robots: { index: false },
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-10 text-center">
      <Image
        src={store.logo}
        alt={store.name}
        width={128}
        height={128}
        className="mb-6 size-16 rounded-full object-cover"
      />
      <h1 className="font-display text-[clamp(60px,12vw,120px)] font-extrabold leading-none text-pink-deep">
        404
      </h1>
      <p className="mb-[30px] mt-3.5 max-w-[420px] text-muted">{content.text}</p>
      <Link href="/" className="btn btn-solid">
        {content.button}
      </Link>
    </main>
  );
}

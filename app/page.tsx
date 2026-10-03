import { CartDrawer } from "@/components/CartDrawer";
import { Benefits } from "@/components/Benefits";
import { Blog } from "@/components/Blog";
import { Categories } from "@/components/Categories";
import { Essence } from "@/components/Essence";
import { CookieBanner, FloatingButtons } from "@/components/Floating";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Highlights } from "@/components/Highlights";
import { Newsletter } from "@/components/Newsletter";
import { PriceRange } from "@/components/PriceRange";
import { ProductSection } from "@/components/ProductSection";
import { Reviews } from "@/components/Reviews";
import { Story } from "@/components/Story";
import { InfoBar, Ticker } from "@/components/TopBars";
import { store } from "@/data/site";

// Dados estruturados (SEO / Google)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ClothingStore",
  name: store.name,
  description: store.shortDescription,
  image: `${store.url}${store.logo}`,
  telephone: `+${store.whatsapp}`,
  priceRange: store.priceRange,
  address: {
    "@type": "PostalAddress",
    addressLocality: store.city,
    addressRegion: store.region,
    addressCountry: "BR",
  },
  sameAs: [store.instagram],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <a
        href="#top"
        className="absolute -left-[9999px] top-0 z-[200] rounded-br-xl bg-pink-deep px-5 py-3 text-[13px] font-bold text-white focus:left-0"
      >
        Pular para o conteúdo
      </a>

      <Ticker />
      <InfoBar />
      <Header />

      <main id="top">
        <Hero />
        <Categories />
        <Essence />
        <Highlights />
        <Story />
        <ProductSection id="lancamentos" />
        <ProductSection id="vendidos" />
        <ProductSection id="outlet" />
        <PriceRange />
        <Benefits />
        <Blog />
        <Reviews />
        <Newsletter />
      </main>

      <Footer />
      <CookieBanner />
      <FloatingButtons />
      <CartDrawer />
    </>
  );
}

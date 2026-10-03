import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Work_Sans } from "next/font/google";
import { CartProvider } from "@/components/CartProvider";
import { MotionProvider } from "@/components/motion";
import { store } from "@/data/site";
import "./globals.css";

// Títulos
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-jakarta",
  display: "swap",
});

// Texto
const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(store.url),
  title: store.title,
  description: store.description,
  keywords: store.keywords,
  authors: [{ name: store.name }],
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  manifest: "/manifest.json",
  icons: { icon: "/assets/favicon.png", apple: "/assets/favicon.png" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: store.name,
    title: store.title,
    description:
      "Sandálias femininas selecionadas, havaianas personalizadas e bolsas de ladinho. Entregas em Bom Jesus - PI e envio para todo o Brasil.",
    url: "/",
    images: [{ url: store.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: store.title,
    description:
      "Sandálias femininas selecionadas, havaianas personalizadas e bolsas de ladinho. Entregas em Bom Jesus - PI.",
    images: [store.ogImage],
  },
};

export const viewport: Viewport = {
  themeColor: "#1E1418",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${jakarta.variable} ${workSans.variable}`}>
      <body>
        <MotionProvider>
          <CartProvider>{children}</CartProvider>
        </MotionProvider>
      </body>
    </html>
  );
}

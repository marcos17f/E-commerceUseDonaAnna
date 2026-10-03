# Use Dona Anna — Site

Site da loja **Use Dona Anna** — sandálias femininas selecionadas, salto alto,
havaianas e bolsas. Sem back-end: carrinho salvo em `localStorage`, checkout
via link do WhatsApp.

## Stack

- **Next.js (App Router) + React + TypeScript**
- **Tailwind CSS** (v4 — tokens de cor em `app/globals.css`)
- **Framer Motion** para as animações
- Fontes via `next/font`: **Plus Jakarta Sans** (títulos) e **Work Sans** (texto)
- Imagens em `public/`, servidas com `next/image`

## Rodar localmente

Precisa de Node.js 20.9 ou superior.

```
npm install
npm run dev
```

Abra `http://localhost:3000`. Para testar a versão de produção:

```
npm run build
npm start
```

## Onde editar o conteúdo

**Tudo fica em um arquivo só: `data/site.ts`.** Os componentes apenas leem
esses dados — não é preciso mexer neles para trocar texto, preço ou foto.

| O que | Onde em `data/site.ts` |
| --- | --- |
| Nome, WhatsApp, e-mail, Instagram, domínio | `store` |
| Parcelas sem juros e desconto do Pix | `INSTALLMENTS`, `PIX_DISCOUNT` |
| Faixa animada do topo | `ticker` |
| Menu | `navLinks` |
| Hero (título, texto, botões, números, peças do leque) | `hero` |
| Categorias | `categories` |
| Produtos (nome, preço, foto, badge, avaliação) | `products` |
| Vitrines (Lançamentos, Mais vendidos, Outlet) | `productSections` |
| Faixa de preço, benefícios, blog, depoimentos | `priceRanges`, `benefits`, `blog`, `reviews` |
| Newsletter, rodapé, textos do carrinho, cookies, 404 | `newsletter`, `footer`, `cartTexts`, `cookies`, `notFound` |

### Produtos

O array `products` é o "banco de dados" do site. Cada peça tem `name`,
`price`, `img`, `tag` (`Novo` / `Best seller` / `Outlet`), `oldPrice` (preço
antigo, mostra o selo de desconto), `rating`, `reviews` e `section` (em qual
vitrine aparece). O preço parcelado e o preço no Pix são calculados sozinhos.

### WhatsApp

O número está em `store.whatsapp` (formato: 55 + DDD + número, só dígitos) e
vale para todos os links do site e para o botão "Finalizar pedido no
WhatsApp". A mensagem do pedido leva nome do produto, quantidade, valor total
e a pergunta final — os textos estão em `cartTexts`.

## ⚠️ Antes de publicar — troque isto

**1. As fotos de produto são de banco de imagens (Unsplash).**
São as mesmas fotos que o site já usava, agora salvas em `public/images/`
(antes carregavam direto de `images.unsplash.com`):

- `sandalia*.jpg` — "woman in orange and brown leather open toe sandals" — Shahzad Faisal
- `salto*.jpg` — "pair of maroon wedges" — Irene Kredenets
- `havaiana.jpg` — "black and green flip flops on sand" — Vi Vi
- `carteira-masculina.jpg` — "a brown leather wallet on a black background" — achmad adi wiratama
- `carteira-feminina.jpg` — "person holding brown leather wallet" — Emil Kalibradov
- `bolsa.jpg` — "pink leather crossbody bag" — Creative Headline / @6.tiff

Todas sob [Unsplash License](https://unsplash.com/license) (uso comercial
livre, sem exigência de crédito). **São fotos genéricas, não as peças reais
da loja.** Para trocar: coloque a foto nova em `public/images/` e aponte o
campo `img` correspondente em `data/site.ts`. A única imagem real é a
**logo** (`public/assets/logo-mark.png`).

**2. Preços e produtos são de exemplo.** Edite em `data/site.ts`.

**3. Domínio.** O endereço atual (`e-commerce-use-dona-ana.vercel.app`) está
em `store.url` (`data/site.ts`), em `public/robots.txt` e em
`public/sitemap.xml`. Troque nos três quando a loja tiver domínio próprio.

**4. Links ainda sem página.** "Sobre a loja", "Trocas e devoluções",
"Política de privacidade", "Termos de uso", "Como comprar", "Tabela de
tamanhos", "Rastrear pedido" e os "Ler mais" do blog apontam para `#`.

## Deploy na Vercel

1. Entre em [vercel.com](https://vercel.com) com sua conta do GitHub.
2. **Add New Project** → selecione este repositório.
3. O `vercel.json` já define `"framework": "nextjs"`, então a Vercel usa o
   build do Next.js (sem isso o projeto, que antes era um site estático com
   preset "Other", publicaria uma pasta vazia e daria 404). Se o projeto já
   existe na Vercel, confira em **Settings → Build & Deployment** que o
   *Framework Preset* é **Next.js** e que *Output Directory* está vazio.
4. **Deploy**. Qualquer `git push` para a branch `main` atualiza o site.

## Animações

- **Hero**: título centralizado com as palavras aparecendo uma a uma e, logo
  abaixo, um leque de três fotos inclinadas (peças do catálogo, com nome e
  preço) com parallax leve no scroll, seguido da faixa com três números de
  destaque. As peças do leque são escolhidas em `hero.featured`.
- **Seções e cards** aparecem ao rolar a página, em cascata
  (`components/motion.tsx` → `Reveal`, `Stagger`, `StaggerItem`).
- **Menu mobile e carrinho** abrem e fecham animados.
- **Hover** nos cards e botões.
- **`prefers-reduced-motion`** é respeitado: sem parallax,
  sem ticker/flutuação, e as entradas viram um fade simples.

## Outros acabamentos

- **SEO**: meta description, palavras-chave, Open Graph, Twitter Card e dados
  estruturados JSON-LD (`ClothingStore`) — em `app/layout.tsx` e `app/page.tsx`.
- **`robots.txt`**, **`sitemap.xml`** e **`manifest.json`** em `public/`.
- **Página 404** com a cara da marca (`app/not-found.tsx`).
- **Aviso de cookies (LGPD)**: aparece uma vez e lembra a escolha
  (`localStorage`).
- **Acessibilidade**: link "Pular para o conteúdo", foco visível, carrinho
  fecha com Esc.
- **Responsivo**: celular, tablet e desktop, sem rolagem horizontal.

## Estrutura

```
app/
  layout.tsx        fontes, metadados (SEO), providers
  page.tsx          monta a página com as seções, na ordem
  not-found.tsx     página 404
  globals.css       Tailwind + paleta de cores
components/         um componente por seção
  TopBars.tsx       faixa animada + barra de contato
  Header.tsx        cabeçalho + menu mobile
  Hero.tsx
  Categories.tsx
  Essence.tsx       "Nossa essência"
  Highlights.tsx    "As queridinhas da vez"
  Story.tsx         "Nosso cuidado"
  ProductSection.tsx  vitrines + card de produto
  PriceRange.tsx
  Benefits.tsx
  Blog.tsx
  Reviews.tsx
  Newsletter.tsx
  Footer.tsx
  Floating.tsx      botão do WhatsApp, voltar ao topo, aviso de cookies
  CartProvider.tsx  estado do carrinho (localStorage) + mensagem do WhatsApp
  CartDrawer.tsx    sacola lateral
  motion.tsx        animações reutilizáveis
data/
  site.ts           TODO o conteúdo do site
lib/
  format.ts         formatação de preço e estrelas
public/
  assets/           logo e favicon
  images/           fotos de produto
vercel.json
```

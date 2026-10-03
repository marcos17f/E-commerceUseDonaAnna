/* ============================================================
   DADOS DA LOJA — arquivo único de conteúdo
   Tudo o que aparece no site (textos, preços, produtos, links,
   imagens) é editado aqui. Os componentes só leem estes dados.
   As imagens ficam em /public (caminhos começam com "/").
   ============================================================ */

/* ---------- Loja ---------- */
export const store = {
  name: "Use Dona Anna",
  tagline: "Qualidade · Conforto · Estilo",
  slogan: "Use. Sinta. Seja Dona.",
  url: "https://e-commerce-use-dona-ana.vercel.app",
  title: "Use Dona Anna — Sandálias, Havaianas Personalizadas e Bolsas de Ladinho",
  description:
    "Sandálias femininas selecionadas, havaianas personalizadas e bolsas de ladinho. Entregas em Bom Jesus - PI e envio para todo o Brasil. Parcele em até 3x sem juros.",
  shortDescription:
    "Sandálias femininas selecionadas, havaianas personalizadas e bolsas de ladinho.",
  keywords: [
    "sandálias femininas",
    "havaianas personalizadas",
    "bolsa de ladinho",
    "calçados Bom Jesus PI",
    "Use Dona Anna",
  ],
  logo: "/assets/logo-mark.png",
  ogImage: "/images/sandalia-og.jpg",
  // WhatsApp: 55 + DDD + número, só dígitos
  whatsapp: "5589981024094",
  whatsappLabel: "(89) 98102-4094 · WhatsApp",
  email: "anakarineneresoliveira18@gmail.com",
  instagram: "https://instagram.com/usedona_anna",
  city: "Bom Jesus",
  region: "PI",
  priceRange: "R$44,90 - R$219,90",
  freeShipping: "Frete grátis acima de R$ 250",
};

export const whatsappLink = `https://wa.me/${store.whatsapp}`;

/* ---------- Regras de preço ---------- */
export const INSTALLMENTS = 3; // parcelas sem juros
export const PIX_DISCOUNT = 0.05; // 5% de desconto no Pix

/* ---------- Faixa animada do topo ---------- */
export const ticker = [
  "Entregas em Bom Jesus - PI",
  "Enviamos para todo o Brasil",
  "Parcele em até 3x sem juros",
  "Peças selecionadas e exclusivas",
];

/* ---------- Menu ---------- */
export const navLinks = [
  { label: "Sandálias", href: "#categorias" },
  { label: "Havaianas Personalizadas", href: "#categorias" },
  { label: "Bolsas de Ladinho", href: "#categorias" },
  { label: "Lançamentos", href: "#lancamentos" },
  { label: "Outlet", href: "#outlet" },
];

/* ---------- Hero ---------- */
export const hero = {
  seal: store.slogan,
  title: "Sandálias que carregam a sua elegância a cada passo.",
  highlight: "elegância", // palavra do título que ganha destaque dourado
  text: "Peças selecionadas e exclusivas, pensadas para a mulher que não abre mão de conforto sem perder o estilo.",
  primaryCta: { label: "Ver lançamentos", href: "#lancamentos" },
  secondaryCta: { label: "Explorar categorias", href: "#categorias" },
  // peças em destaque no leque de fotos (ids do catálogo; a do meio fica maior)
  featured: ["p2", "p1", "p3"],
  stats: [
    { value: "3x", label: "sem juros" },
    { value: "R$ 250", label: "em compras: frete grátis" },
    { value: "5%", label: "de desconto no Pix" },
  ],
};

/* ---------- Categorias ---------- */
export const categories = {
  eyebrow: "Coleção",
  title: "Compre por categoria",
  items: [
    {
      title: "Sandálias",
      subtitle: "Conforto do dia a dia",
      href: "#lancamentos",
      img: "/images/sandalia.jpg",
      alt: "Sandálias femininas Use Dona Anna",
    },
    {
      title: "Havaianas Personalizadas",
      subtitle: "Com charme e brilho",
      href: "#lancamentos",
      img: "/images/havaiana.jpg",
      alt: "Havaianas Personalizadas Use Dona Anna",
    },
    {
      title: "Bolsas de Ladinho",
      subtitle: "Praticidade no dia a dia",
      href: "#lancamentos",
      img: "/images/bolsa.jpg",
      alt: "Bolsas de Ladinho Use Dona Anna",
    },
  ],
};

/* ---------- Nossa essência ---------- */
export const essence = {
  eyebrow: "Nossa essência",
  title: "Estilo renovado a cada coleção",
  text: "Selecionamos fornecedores, testamos o caimento e conferimos o acabamento peça por peça. Só chega à nossa vitrine o que a gente mesma usaria — por isso o nome: Use Dona Anna. Sandálias, havaianas personalizadas e bolsas de ladinho escolhidas com carinho pra fazer parte do seu dia a dia.",
  cta: { label: "Conhecer a coleção", href: "#lancamentos" },
  image: { src: "/images/carteira-feminina.jpg", alt: "Carteira Feminina Berelina" },
};

/* ---------- Destaques ---------- */
export const highlights = {
  eyebrow: "Destaques",
  title: "As queridinhas da vez",
  cta: { label: "Comprar agora", href: "#lancamentos" },
  items: [
    { title: "Sandália Glamour", img: "/images/sandalia.jpg", alt: "Sandália Glamour Cristal" },
    { title: "Havaiana Slim", img: "/images/havaiana.jpg", alt: "Havaiana Slim Dourada" },
    { title: "Salto Fino 8cm", img: "/images/salto.jpg", alt: "Salto Fino 8cm Vinho" },
  ],
};

/* ---------- Nosso cuidado ---------- */
export const story = {
  eyebrow: "Nosso cuidado",
  title: "Cada par é escolhido a dedo antes de chegar até você",
  text: "Selecionamos fornecedores, testamos o caimento e conferimos o acabamento peça por peça. Só chega à nossa vitrine o que a gente mesma usaria — por isso o nome: Use Dona Anna.",
  image: {
    src: "/images/sandalia.jpg",
    alt: "Sandália Use Dona Anna selecionada com cuidado antes do envio",
  },
};

/* ---------- Catálogo ----------
   É o "banco de dados" do site: edite nome, preço, imagem, badge
   (tag), preço antigo (oldPrice, mostra o desconto), avaliação e
   nº de reviews. `section` define em qual vitrine a peça aparece. */
export type SectionId = "lancamentos" | "vendidos" | "outlet";

export type Product = {
  id: string;
  section: SectionId;
  name: string;
  img: string;
  tag: string;
  price: number;
  oldPrice: number | null;
  rating: number;
  reviews: number;
};

export const productSections: {
  id: SectionId;
  anchor?: string;
  eyebrow: string;
  title: string;
}[] = [
  { id: "lancamentos", anchor: "lancamentos", eyebrow: "Novidades", title: "Lançamentos" },
  { id: "vendidos", eyebrow: "Preferidas das clientes", title: "Mais vendidos" },
  { id: "outlet", anchor: "outlet", eyebrow: "Por tempo limitado", title: "Outlet" },
];

export const products: Product[] = [
  // Lançamentos
  { id: "p1", section: "lancamentos", name: "Sandália Glamour Cristal", img: "/images/sandalia.jpg", tag: "Novo", price: 129.9, oldPrice: null, rating: 4.9, reviews: 32 },
  { id: "p2", section: "lancamentos", name: "Salto Fino 8cm Vinho", img: "/images/salto.jpg", tag: "Novo", price: 189.9, oldPrice: null, rating: 4.8, reviews: 21 },
  { id: "p3", section: "lancamentos", name: "Havaiana Slim Dourada", img: "/images/havaiana.jpg", tag: "Novo", price: 69.9, oldPrice: null, rating: 5.0, reviews: 14 },
  { id: "p4", section: "lancamentos", name: "Carteira Masculina Baoluolan", img: "/images/carteira-masculina.jpg", tag: "Novo", price: 89.9, oldPrice: null, rating: 4.7, reviews: 9 },

  // Mais vendidos
  { id: "p5", section: "vendidos", name: "Sandália Conforto Trançada", img: "/images/sandalia-entropy.jpg", tag: "Best seller", price: 99.9, oldPrice: null, rating: 4.9, reviews: 87 },
  { id: "p6", section: "vendidos", name: "Salto Médio Nude Elegance", img: "/images/salto-entropy.jpg", tag: "Best seller", price: 159.9, oldPrice: null, rating: 4.8, reviews: 63 },
  { id: "p7", section: "vendidos", name: "Havaiana Clássica Preta", img: "/images/havaiana.jpg", tag: "Best seller", price: 54.9, oldPrice: null, rating: 4.9, reviews: 120 },
  { id: "p8", section: "vendidos", name: "Carteira Feminina Berelina", img: "/images/carteira-feminina.jpg", tag: "Best seller", price: 99.9, oldPrice: null, rating: 4.6, reviews: 41 },

  // Outlet
  { id: "p9", section: "outlet", name: "Sandália Rasteira Strass", img: "/images/sandalia-faces.jpg", tag: "Outlet", price: 79.9, oldPrice: 119.9, rating: 4.7, reviews: 25 },
  { id: "p10", section: "outlet", name: "Salto Fino Nude Verão", img: "/images/salto.jpg", tag: "Outlet", price: 129.9, oldPrice: 189.9, rating: 4.5, reviews: 18 },
  { id: "p11", section: "outlet", name: "Havaiana Tie-Dye", img: "/images/havaiana.jpg", tag: "Outlet", price: 44.9, oldPrice: 64.9, rating: 4.8, reviews: 30 },
  { id: "p12", section: "outlet", name: "Bolsa Transversal Compacta", img: "/images/bolsa.jpg", tag: "Outlet", price: 149.9, oldPrice: 219.9, rating: 4.6, reviews: 12 },
];

/* ---------- Faixa de preço ---------- */
export const priceRanges = {
  eyebrow: "Facilita pra você",
  title: "Compre por faixa de preço",
  items: [
    { icon: "$", title: "Até R$ 99", text: "Sandálias e chinelos do dia a dia, com o conforto de sempre." },
    { icon: "$$", title: "R$ 100 a R$ 199", text: "Modelos com detalhes especiais, ideais para o trabalho e passeios." },
    { icon: "$$$", title: "Acima de R$ 200", text: "Peças de salto e bolsas para ocasiões que pedem um toque de glamour." },
  ],
};

/* ---------- Benefícios ---------- */
export const benefits = [
  { icon: "✓", title: "Garantia de qualidade", text: "Peças conferidas antes do envio" },
  { icon: "↗", title: "Frete grátis", text: "Acima de R$ 250 em compras" },
  { icon: "🎁", title: "Embalagem de presente", text: "Prontinho pra presentear" },
  { icon: "↺", title: "Garantia pós-venda", text: "Suporte direto pelo WhatsApp" },
];

/* ---------- Blog ---------- */
export const blog = {
  eyebrow: "Dicas Use Dona Anna",
  title: "No nosso blog",
  linkLabel: "Ler mais",
  posts: [
    { category: "Estilo", title: "Como escolher a sandália certa para cada ocasião", img: "/images/sandalia.jpg", alt: "Como escolher a sandália certa para cada ocasião", href: "#" },
    { category: "Cuidados", title: "3 dicas simples para conservar suas sandálias por mais tempo", img: "/images/salto.jpg", alt: "3 dicas para conservar suas sandálias por mais tempo", href: "#" },
    { category: "Tendências", title: "As cores que vão dominar o verão nos pés das nossas clientes", img: "/images/bolsa.jpg", alt: "Cores que vão dominar o verão nos pés das clientes Use Dona Anna", href: "#" },
  ],
};

/* ---------- Depoimentos ---------- */
export const reviews = {
  eyebrow: "Depoimentos",
  title: "Quem usa, indica",
  items: [
    { name: "Ana Karine", bought: "Salto Fino Vinho", stars: 5, quote: "Chegou rapidinho e o caimento é perfeito. Já é a terceira sandália que compro aqui." },
    { name: "Leandra Alves", bought: "Sandália Glamour", stars: 5, quote: "Atendimento super atencioso pelo WhatsApp, me ajudaram a escolher o tamanho certo." },
    { name: "Mariana Costa", bought: "Carteira Feminina Berelina", stars: 5, quote: "A bolsa é ainda mais linda pessoalmente. Virei cliente fiel da loja." },
  ],
};

/* ---------- Newsletter ---------- */
export const newsletter = {
  title: "Receba as novidades em primeira mão",
  text: "Lançamentos, promoções e dicas de estilo direto no seu e-mail.",
  placeholder: "Seu melhor e-mail",
  button: "Assinar",
  success: "Inscrito!",
};

/* ---------- Rodapé ---------- */
export const footer = {
  about:
    "Sandálias femininas selecionadas e exclusivas. Use, sinta e seja Dona. Entregas em Bom Jesus - PI e para todo o Brasil.",
  columns: [
    {
      title: "Categorias",
      links: [
        { label: "Sandálias", href: "#categorias" },
        { label: "Havaianas Personalizadas", href: "#categorias" },
        { label: "Bolsas de Ladinho", href: "#categorias" },
      ],
    },
    {
      title: "Institucional",
      links: [
        { label: "Sobre a loja", href: "#" },
        { label: "Trocas e devoluções", href: "#" },
        { label: "Política de privacidade", href: "#" },
        { label: "Termos de uso", href: "#" },
      ],
    },
    {
      title: "Ajuda",
      links: [
        { label: "Fale no WhatsApp", href: whatsappLink, external: true },
        { label: "Como comprar", href: "#" },
        { label: "Tabela de tamanhos", href: "#" },
        { label: "Rastrear pedido", href: "#" },
      ],
    },
  ] as { title: string; links: { label: string; href: string; external?: boolean }[] }[],
  payments: ["Pix", "Cartão", "Boleto"],
  copyright: "Bom Jesus · Piauí  ·  © 2026 Use Dona Anna. Todos os direitos reservados.",
};

/* ---------- Carrinho ---------- */
export const cartTexts = {
  title: "Sua sacola",
  empty: "Sua sacola está vazia.",
  total: "Total",
  checkout: "Finalizar pedido no WhatsApp",
  add: "Adicionar à sacola",
  remove: "Remover",
  // Mensagens enviadas no WhatsApp
  emptyMessage: "Olá! Gostaria de fazer um pedido na Use Dona Anna.",
  messageIntro: "Olá! Gostaria de fazer o seguinte pedido:",
  messageOutro: "Deseja finalizar a compra assim ou prefere alterar algo?",
};

/* ---------- Aviso de cookies (LGPD) ---------- */
export const cookies = {
  text: "Usamos cookies para melhorar sua experiência de compra. Ao continuar navegando, você concorda com nossa",
  linkLabel: "Política de Privacidade",
  linkHref: "#",
  button: "Entendi",
};

/* ---------- Página 404 ---------- */
export const notFound = {
  title: "Página não encontrada — Use Dona Anna",
  text: "Ops, essa página saiu de moda... ou nunca existiu! Volte pra vitrine e continue seu passeio pelas nossas peças.",
  button: "Voltar para a loja",
};

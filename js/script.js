/* ============================================================
   CONFIGURAÇÃO DA LOJA
   Troque o número abaixo pelo WhatsApp real da Use Dona Anna
   (formato: 55 + DDD + número, só dígitos).
   ============================================================ */
window.STORE_WHATSAPP = "5589981024094";

/* ============================================================
   CATÁLOGO DE PRODUTOS
   Isto é o "banco de dados" do site: edite nome, preço, imagem
   e badge de cada peça aqui. O preço é sempre em formato pt-BR
   ("R$ 89,90") e é isso que aparece nos cards e no carrinho.
   ============================================================ */
const PRODUCTS = [
  // Lançamentos
  { id: "p1", section: "lancamentos", name: "Sandália Glamour Cristal", img: "https://images.unsplash.com/photo-1618615098938-84fc29796e76?auto=format&fit=crop&q=80&w=900&h=900", tag: "Novo", price: 129.90, oldPrice: null, rating: 4.9, reviews: 32 },
  { id: "p2", section: "lancamentos", name: "Salto Fino 8cm Vinho", img: "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?auto=format&fit=crop&q=80&w=900&h=900", tag: "Novo", price: 189.90, oldPrice: null, rating: 4.8, reviews: 21 },
  { id: "p3", section: "lancamentos", name: "Havaiana Slim Dourada", img: "https://images.unsplash.com/photo-1601946771183-2e0659c5ae69?auto=format&fit=crop&q=80&w=900&h=900", tag: "Novo", price: 69.90, oldPrice: null, rating: 5.0, reviews: 14 },
  { id: "p4", section: "lancamentos", name: "Carteira Masculina Baoluolan", img: "https://images.unsplash.com/photo-1677326764757-62ad261030bf?auto=format&fit=crop&q=80&w=900&h=900", tag: "Novo", price: 89.90, oldPrice: null, rating: 4.7, reviews: 9 },

  // Mais vendidos
  { id: "p5", section: "vendidos", name: "Sandália Conforto Trançada", img: "https://images.unsplash.com/photo-1618615098938-84fc29796e76?auto=format&fit=crop&q=80&w=900&h=900&crop=entropy", tag: "Best seller", price: 99.90, oldPrice: null, rating: 4.9, reviews: 87 },
  { id: "p6", section: "vendidos", name: "Salto Médio Nude Elegance", img: "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?auto=format&fit=crop&q=80&w=900&h=900&crop=entropy", tag: "Best seller", price: 159.90, oldPrice: null, rating: 4.8, reviews: 63 },
  { id: "p7", section: "vendidos", name: "Havaiana Clássica Preta", img: "https://images.unsplash.com/photo-1601946771183-2e0659c5ae69?auto=format&fit=crop&q=80&w=900&h=1200", tag: "Best seller", price: 54.90, oldPrice: null, rating: 4.9, reviews: 120 },
  { id: "p8", section: "vendidos", name: "Carteira Feminina Berelina", img: "https://images.unsplash.com/photo-1614330315994-efd5ea8163a1?auto=format&fit=crop&q=80&w=900&h=900", tag: "Best seller", price: 99.90, oldPrice: null, rating: 4.6, reviews: 41 },

  // Outlet
  { id: "p9", section: "outlet", name: "Sandália Rasteira Strass", img: "https://images.unsplash.com/photo-1618615098938-84fc29796e76?auto=format&fit=crop&q=80&w=900&h=900&crop=faces", tag: "Outlet", price: 79.90, oldPrice: 119.90, rating: 4.7, reviews: 25 },
  { id: "p10", section: "outlet", name: "Salto Fino Nude Verão", img: "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?auto=format&fit=crop&q=80&w=900&h=900", tag: "Outlet", price: 129.90, oldPrice: 189.90, rating: 4.5, reviews: 18 },
  { id: "p11", section: "outlet", name: "Havaiana Tie-Dye", img: "https://images.unsplash.com/photo-1601946771183-2e0659c5ae69?auto=format&fit=crop&q=80&w=900&h=900", tag: "Outlet", price: 44.90, oldPrice: 64.90, rating: 4.8, reviews: 30 },
  { id: "p12", section: "outlet", name: "Bolsa Transversal Compacta", img: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&q=80&w=900&h=900", tag: "Outlet", price: 149.90, oldPrice: 219.90, rating: 4.6, reviews: 12 },
];

/* ============================================================
   HELPERS
   ============================================================ */
function formatPrice(value) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function parsePrice(text) {
  return parseFloat(text.replace(/[^\d,]/g, "").replace(",", "."));
}

function starString(rating) {
  const full = Math.round(rating);
  return "★★★★★".slice(0, full) + "☆☆☆☆☆".slice(0, 5 - full);
}

/* ============================================================
   RENDER DE PRODUTOS
   ============================================================ */
function productCardHTML(p) {
  const discountPct = p.oldPrice ? Math.round((1 - p.price / p.oldPrice) * 100) : null;
  const pix = p.price * 0.95;
  return `
  <div class="prod-card" data-id="${p.id}">
    <div class="prod-media">
      <img src="${p.img}" alt="${p.name}" loading="lazy">
      <span class="prod-tag">${p.tag}</span>
      ${discountPct ? `<span class="prod-discount">-${discountPct}%</span>` : ""}
      <button class="prod-fav" data-fav="${p.id}" aria-label="Favoritar ${p.name}">♡</button>
      <div class="prod-overlay">
        <button class="btn btn-solid" data-add="${p.id}">Adicionar à sacola</button>
      </div>
    </div>
    <div class="prod-body">
      <h3 class="prod-name">${p.name}</h3>
      <div class="prod-rating"><span class="stars">${starString(p.rating)}</span> (${p.reviews})</div>
      <div class="prod-price">
        ${p.oldPrice ? `<span class="price-old">${formatPrice(p.oldPrice)}</span>` : ""}
        <span class="price-now" data-price="${formatPrice(p.price)}">${formatPrice(p.price)}</span>
        <span class="price-parcel">3x de ${formatPrice(p.price / 3)} sem juros</span>
        <span class="price-pix">${formatPrice(pix)} no Pix</span>
      </div>
    </div>
  </div>`;
}

function renderProducts() {
  const targets = {
    lancamentos: document.getElementById("grid-lancamentos"),
    vendidos: document.getElementById("grid-vendidos"),
    outlet: document.getElementById("grid-outlet"),
  };
  PRODUCTS.forEach((p) => {
    if (targets[p.section]) {
      targets[p.section].insertAdjacentHTML("beforeend", productCardHTML(p));
    }
  });
}

/* ============================================================
   FAVORITOS (feedback visual apenas, sem persistência)
   ============================================================ */
function bindFavorites() {
  document.body.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-fav]");
    if (!btn) return;
    btn.classList.toggle("is-fav");
    btn.textContent = btn.classList.contains("is-fav") ? "♥" : "♡";
  });
}

/* ============================================================
   CARRINHO
   ============================================================ */
const CART_KEY = "udo_cart_v1";
let cart = loadCart();

function loadCart() {
  try {
    const raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveCart() {
  try {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  } catch (e) { /* localStorage indisponível: segue só em memória */ }
}

function findProduct(id) {
  return PRODUCTS.find((p) => p.id === id);
}

function addToCart(id) {
  const existing = cart.find((i) => i.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id, qty: 1 });
  }
  saveCart();
  renderCart();
  openCart();
}

function changeQty(id, delta) {
  const item = cart.find((i) => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter((i) => i.id !== id);
  }
  saveCart();
  renderCart();
}

function removeFromCart(id) {
  cart = cart.filter((i) => i.id !== id);
  saveCart();
  renderCart();
}

function cartTotal() {
  return cart.reduce((sum, item) => {
    const p = findProduct(item.id);
    return p ? sum + p.price * item.qty : sum;
  }, 0);
}

function cartCount() {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

function renderCart() {
  const itemsEl = document.getElementById("cartItems");
  const totalEl = document.getElementById("cartTotal");
  const badgeEl = document.getElementById("cartBadge");

  if (cart.length === 0) {
    itemsEl.innerHTML = `<p class="cart-empty">Sua sacola está vazia.</p>`;
  } else {
    itemsEl.innerHTML = cart.map((item) => {
      const p = findProduct(item.id);
      if (!p) return "";
      return `
      <div class="cart-item" data-id="${p.id}">
        <img src="${p.img}" alt="${p.name}">
        <div class="cart-item-info">
          <h5>${p.name}</h5>
          <div class="cart-item-price">${formatPrice(p.price)}</div>
          <div class="qty-control">
            <button data-qty-dec="${p.id}" aria-label="Diminuir quantidade">−</button>
            <span>${item.qty}</span>
            <button data-qty-inc="${p.id}" aria-label="Aumentar quantidade">+</button>
          </div>
          <button class="cart-item-remove" data-remove="${p.id}">Remover</button>
        </div>
      </div>`;
    }).join("");
  }

  totalEl.textContent = formatPrice(cartTotal());
  badgeEl.textContent = cartCount();
}

function buildWhatsAppMessage() {
  if (cart.length === 0) return "Olá! Gostaria de fazer um pedido na Use Dona Anna.";
  let msg = "Olá! Gostaria de fazer o seguinte pedido:%0A%0A";
  cart.forEach((item) => {
    const p = findProduct(item.id);
    if (!p) return;
    msg += `• ${p.name} (Qtd: ${item.qty}) — ${formatPrice(p.price * item.qty)}%0A`;
  });
  msg += `%0ATotal: ${formatPrice(cartTotal())}`;
  msg += `%0A%0ADeseja finalizar a compra assim ou prefere alterar algo?`;
  return msg;
}

/* ============================================================
   DRAWER (abrir/fechar)
   ============================================================ */
function openCart() {
  document.getElementById("cartDrawer").classList.add("is-open");
  document.getElementById("overlay").classList.add("is-open");
}
function closeCart() {
  document.getElementById("cartDrawer").classList.remove("is-open");
  document.getElementById("overlay").classList.remove("is-open");
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  bindFavorites();
  renderCart();

  // Menu mobile
  const header = document.getElementById("siteHeader");
  document.getElementById("hamburgerBtn").addEventListener("click", () => {
    header.classList.toggle("is-open");
  });

  // Carrinho: abrir/fechar
  document.getElementById("cartBtn").addEventListener("click", openCart);
  document.getElementById("cartClose").addEventListener("click", closeCart);
  document.getElementById("overlay").addEventListener("click", closeCart);

  // Adicionar / alterar quantidade / remover (delegação de evento)
  document.body.addEventListener("click", (e) => {
    const add = e.target.closest("[data-add]");
    if (add) addToCart(add.dataset.add);

    const inc = e.target.closest("[data-qty-inc]");
    if (inc) changeQty(inc.dataset.qtyInc, 1);

    const dec = e.target.closest("[data-qty-dec]");
    if (dec) changeQty(dec.dataset.qtyDec, -1);

    const rem = e.target.closest("[data-remove]");
    if (rem) removeFromCart(rem.dataset.remove);
  });

  // Checkout via WhatsApp
  document.getElementById("checkoutBtn").addEventListener("click", () => {
    const msg = buildWhatsAppMessage();
    window.open(`https://wa.me/${window.STORE_WHATSAPP}?text=${msg}`, "_blank");
  });

  // Newsletter (sem back-end: só feedback visual)
  document.getElementById("nlForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const btn = e.target.querySelector("button");
    const original = btn.textContent;
    btn.textContent = "Inscrito!";
    e.target.reset();
    setTimeout(() => (btn.textContent = original), 2200);
  });

  // Voltar ao topo
  const backTop = document.getElementById("backTop");
  window.addEventListener("scroll", () => {
    backTop.classList.toggle("is-visible", window.scrollY > 500);
  });
  backTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  // Storytelling: pausa/retoma o vídeo de fundo quando entra na viewport
  // (preparado para quando a imagem de fundo virar vídeo/gif real)
  const storyMedia = document.querySelector(".story-media video");
  if (storyMedia) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          storyMedia.currentTime = 0;
          storyMedia.play();
        } else {
          storyMedia.pause();
        }
      });
    }, { threshold: 0.4 });
    io.observe(storyMedia);
  }

  // Aviso de cookies (LGPD): mostra uma vez, lembra a escolha
  const cookieBanner = document.getElementById("cookieBanner");
  const cookieAccept = document.getElementById("cookieAccept");
  if (cookieBanner && cookieAccept) {
    let alreadyAccepted = false;
    try { alreadyAccepted = localStorage.getItem("udo_cookies_ok") === "1"; } catch (e) {}
    if (!alreadyAccepted) {
      setTimeout(() => cookieBanner.classList.add("is-visible"), 800);
    }
    cookieAccept.addEventListener("click", () => {
      cookieBanner.classList.remove("is-visible");
      try { localStorage.setItem("udo_cookies_ok", "1"); } catch (e) {}
    });
  }

  // Vitrine em movimento: peças entram girando conforme a rolagem
  if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);

    // HERO: fotos soltas entrando com leve giro ao carregar a página
    gsap.from(".hf-item", {
      opacity: 0,
      scale: 0.6,
      rotate: "25deg",
      stagger: 0.15,
      duration: 1,
      ease: "back.out(1.2)",
      delay: 0.2,
    });
    gsap.to(".hf-item", {
      y: "-16px",
      duration: 2.6,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.3,
      delay: 1.2,
    });

    // SEÇÃO "TWO": blob gira e a foto surge de dentro dele
    const tlTwo = gsap.timeline({
      scrollTrigger: {
        trigger: ".two",
        start: "0% 90%",
        end: "70% 45%",
        scrub: true,
      },
    });
    tlTwo
      .from(".blob-side svg", { rotate: "-60deg", scale: 0.7, opacity: 0 }, "blob")
      .from(".blob-photo", { scale: 0, opacity: 0 }, "blob+=0.1")
      .from(".feature-text > *", { y: 40, opacity: 0, stagger: 0.12 }, "blob");

    // SEÇÃO "THREE": cards entram deslizando e girando, um de cada lado
    const tlThree = gsap.timeline({
      scrollTrigger: {
        trigger: ".three",
        start: "0% 90%",
        end: "60% 45%",
        scrub: true,
      },
    });
    tlThree
      .from(".fly-item-a", { x: "-120%", rotate: "-90deg", opacity: 0 }, "cards")
      .from(".fly-item-b", { y: "120%", rotate: "70deg", opacity: 0 }, "cards")
      .from(".fly-item-c", { x: "120%", rotate: "90deg", opacity: 0 }, "cards")
      .from(".fly-card h3, .fly-card .btn", { opacity: 0, y: 20, stagger: 0.08 }, "cards+=0.2");
  }
});

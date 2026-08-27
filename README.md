# Use Dona Anna — Site

Site estático (HTML + CSS puro + JS vanilla, sem build/framework) para a loja
**Use Dona Anna** — sandálias femininas selecionadas, salto alto, havaianas e
bolsas. Sem back-end: carrinho salvo em `localStorage`, checkout via link do
WhatsApp.

## ⚠️ Antes de publicar — troque isto

**1. TODAS as fotos de produto agora são de banco de imagens (Unsplash).**
A seu pedido, troquei também as fotos reais que você tinha mandado
(havaianas e carteiras) por fotos de banco — agora **nenhuma foto de
produto no site é da loja de verdade**, todas vêm do Unsplash, carregadas
direto pela internet (`https://images.unsplash.com/...`):
- "woman in orange and brown leather open toe sandals" — Shahzad Faisal (sandália)
- "pair of maroon wedges" — Irene Kredenets (salto)
- "black and green flip flops on sand" — Vi Vi (havaiana)
- "a brown leather wallet on a black background" — achmad adi wiratama (carteira masculina)
- "person holding brown leather wallet" — Emil Kalibradov (carteira feminina)
- "pink leather crossbody bag" — Creative Headline / @6.tiff (bolsa de ladinho)

Todas sob [Unsplash License](https://unsplash.com/license) (uso comercial
livre, sem exigência de crédito). **Importante**: são fotos genéricas, não
as peças reais da loja — troque pelas fotos verdadeiras antes de publicar
de verdade. Como carregam da internet (não estão salvas localmente), o
site deixa de funcionar 100% offline enquanto elas estiverem em uso. A
única imagem real que permanece é a **logo da marca**
(`assets/logo-mark.png`), usada no header, rodapé e favicon.

Pra trocar: troque o `src` da tag `<img>` correspondente em `index.html`, o
campo `img` no array `PRODUCTS` em `js/script.js`, e a URL usada em
`.story-media img` — todos indicados nos comentários do código.

**2. Número de WhatsApp já configurado.**
Está como `5589981024094` (89 98102-4094) em todos os links do site — barra de
info, botão flutuante, rodapé e no botão "Finalizar pedido no WhatsApp" do
carrinho (`js/script.js` → `window.STORE_WHATSAPP`). Se precisar trocar,
mantenha o formato 55 + DDD + número, só dígitos, e atualize nesses mesmos
lugares.

A mensagem enviada pelo carrinho já vem com nome do produto, quantidade,
valor total e uma pergunta final perguntando se a cliente quer finalizar a
compra ou alterar algo — dá pra editar o texto em `buildWhatsAppMessage()`
dentro de `js/script.js`.

**3. Preços e produtos são de exemplo.**
O catálogo inteiro vive em `js/script.js`, no array `PRODUCTS` — é o "banco
de dados" do site. Edite nome, preço, imagem, badge (`Novo` / `Best seller` /
`Outlet`), preço antigo (pra mostrar desconto), avaliação e nº de reviews
diretamente ali.

## Rodar localmente

Não precisa de build. Basta abrir `index.html` no navegador, ou servir a
pasta com qualquer servidor estático:

```
npx serve .
```

## Subir pro GitHub

```
git init
git add .
git commit -m "Site Use Dona Anna"
```

Crie um repositório vazio no GitHub (sem README/gitignore, pra não dar
conflito) e depois:

```
git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
git branch -M main
git push -u origin main
```

## Subir pro Vercel

1. Entre em [vercel.com](https://vercel.com), faça login com sua conta do
   GitHub.
2. **Add New Project** → selecione o repositório que você acabou de subir.
3. Framework preset: **Other** (site estático). Não precisa configurar
   build command nem output directory — o `vercel.json` incluído já cuida
   de URLs limpas e cache dos assets.
4. Clique em **Deploy**. Em ~30 segundos o site fica no ar num link tipo
   `seu-projeto.vercel.app`.
5. Pra usar domínio próprio depois: **Settings → Domains** no painel do
   projeto na Vercel.

Qualquer novo `git push` pra branch `main` atualiza o site automaticamente.

## Acabamentos "profissionais" incluídos

- **SEO**: meta description, palavras-chave, Open Graph e Twitter Card (pra
  quando o link for compartilhado no WhatsApp/Instagram mostrar foto e
  texto bonitos), dados estruturados (JSON-LD tipo `ClothingStore`, ajuda o
  Google a entender que é uma loja).
- **`robots.txt`** e **`sitemap.xml`**: liberam a indexação pelo Google.
  **Troque o domínio placeholder** (`usedonaanna.com.br`) por um domínio
  real nesses dois arquivos e no `<link rel="canonical">` do `index.html`
  assim que a loja tiver domínio próprio.
- **`manifest.json`**: permite "instalar" o site como app no celular
  (ícone na tela inicial).
- **`404.html`**: página de erro com a cara da marca em vez da página
  genérica do navegador.
- **Aviso de cookies (LGPD)**: banner simples que aparece uma vez e lembra
  a escolha (`localStorage`). O link "Política de Privacidade" ainda
  precisa apontar pra uma página de política real.
- **Acessibilidade**: link "Pular para o conteúdo" (útil pra quem navega
  só com teclado ou leitor de tela).
- **Responsivo em todas as telas**: breakpoints pra celular pequeno
  (≤480px), celular/tablet (≤760px), tablet largo/notebook (≤1200px) e
  telas grandes (≥1600px) — testado sem gerar rolagem horizontal.

## Estrutura

```
index.html
404.html
manifest.json
robots.txt
sitemap.xml
css/style.css
js/script.js
assets/
  logo-mark.png, favicon.png
  products/
    cat-havaianas.jpg, cat-bolsas.jpg
```

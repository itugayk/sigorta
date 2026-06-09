# Güven Sigorta Acentesi — Demo

Güven veren, net bir **sigorta acentesi** demo sitesi. Poliçe türleri ve teklif formu odaklı kurumsal portfolyo showcase.

**Canlı demo:** https://sigorta.demo.dijifa.com

## Teknolojiler

- **[Astro 5](https://astro.build/)** — statik site, içerik odaklı
- **[Tailwind CSS 4](https://tailwindcss.com/)** — `@theme` tabanlı tasarım sistemi
- **[GSAP](https://gsap.com/)** — scroll reveal, stagger, animasyonlu sayaçlar (IntersectionObserver ile tetiklenir)

## Marka & tasarım

- **Palet:** güven veren lacivert `#1e3a8a` + beyaz + canlı yeşil aksan `#16a34a`
- **Tipografi:** başlıklar **Sora**, gövde **Inter**
- **Mood:** güven, koruma, netlik — kalkan/aile/koruma motifleri, temiz kart düzeni

## Sayfalar

- **Ana Sayfa** — hero, poliçe türleri grid, neden biz + sayaçlar, 3 adım süreç, müşteri yorumları, SSS, teklif CTA
- **Sigorta Türleri** — liste + her tür için detay sayfası (Trafik, Kasko, Sağlık, Konut, DASK, Hayat, İşyeri)
- **Teklif Al** — çok adımlı form (tür → kişi/araç/konut bilgisi → iletişim), statik validasyonlu
- **Hakkımızda**, **SSS** (akordeon), **Blog** (liste + yazı), **İletişim** (form + bilgi kartları)

## SEO

- Sayfa bazlı title/description, Open Graph, canonical
- **JSON-LD:** `InsuranceAgency` (tüm sayfalar) + `FAQPage` (ana sayfa, SSS, poliçe detay) + `BlogPosting`
- `sitemap-index.xml` (@astrojs/sitemap) + `robots.txt`

## Geliştirme

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ — statik çıktı
npm run preview
```

## Deploy

Coolify üzerinde **Dockerfile** build pack ile yayınlanır:

- `Dockerfile` — çok aşamalı build (Node 22 → Nginx 1.27)
- `nginx.conf` — directory-style URL'ler için `try_files`, statik asset cache, `404.html`

---

> Bu site demo amaçlıdır. Formlar veri kaydetmez. · dijifa.com

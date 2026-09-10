# Let's Get Wet Pressure Washing — Website

A fast, mobile-friendly, single-page marketing site for a pressure washing business
(house washing, driveways, sidewalks, decks, fences, patios, gutter brightening).
No build step, no frameworks: plain HTML, CSS, and JavaScript.

## Run it locally

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Customize

| What | Where |
|------|-------|
| Phone, email, address, hours | `index.html` (search for `710-4081`, `xanderd.case`, `Cumming`) |
| Services offered | `index.html` → `#services` section and the two `<select>` dropdowns |
| Service area towns | `index.html` → `#area` section |
| Colors and fonts | `css/styles.css` → the `:root` variables at the top |
| Before/after photos | Drop JPGs in `assets/` and add a `.result` block in the `#results` section |
| Logo | `assets/logo.png` (full) and `assets/logo-sm.png` (header) |
| Quote form delivery | `js/main.js` → set `FORM_ENDPOINT` (Formspree) or `FALLBACK_EMAIL` |

## Deploy

**GitHub Pages (with the custom domain letsgetwet.com):**

1. Settings → Pages → Source: *Deploy from a branch* → pick your branch and `/ (root)`.
2. The `CNAME` file in this repo already tells GitHub to serve the site at `letsgetwet.com`.
3. At the domain registrar, add these DNS records:
   - `A` records for `@` pointing to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` record for `www` pointing to `andronicstan.github.io`
4. Back in Settings → Pages, tick *Enforce HTTPS* once the certificate is issued (can take up to an hour).

**Netlify / Vercel / Cloudflare Pages:** drag-and-drop the folder or connect the repo. No build command, publish directory is the repo root.

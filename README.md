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
| Phone, email, address, hours | `index.html` (search for `710-4081`, `letsgetwetpw`, `Cumming`) |
| Services offered | `index.html` → `#services` section and the two `<select>` dropdowns |
| Reviews | `index.html` → `#reviews` section |
| Service area towns | `index.html` → `#area` section |
| Colors and fonts | `css/styles.css` → the `:root` variables at the top |
| Before/after photos | Drop JPGs in `assets/` and add a `.result` block in the `#results` section |
| Logo | `assets/logo.png` (full) and `assets/logo-sm.png` (header) |
| Quote form delivery | `js/main.js` → set `FORM_ENDPOINT` (Formspree) or `FALLBACK_EMAIL` |

## Deploy

**GitHub Pages:** Settings → Pages → Source: *Deploy from a branch* → pick your branch and `/ (root)`.

**Netlify / Vercel / Cloudflare Pages:** drag-and-drop the folder or connect the repo. No build command, publish directory is the repo root.

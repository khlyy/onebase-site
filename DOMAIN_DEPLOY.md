# Launching `onebase.` on Your New Domain

`website/` is a self-contained, zero-build static site (`index.html`, `styles.css`, `main.js`, `demo.js`, `i18n.js`, `site-config.js`, and `assets/`). You can deploy it directly to **Cloudflare Pages**, **Vercel**, or **Netlify** in under two minutes with zero build tools required.

---

## 1. Before You Go Live — Update `website/site-config.js`

Open [`site-config.js`](./site-config.js) and set your live values:

- **`domain`**: Set your registered domain (e.g., `https://useonebase.com` or `https://onebase.eg`), and update `<link rel="canonical">` + `og:url` / `og:image` in [`index.html`](./index.html) to match.
- **`testflightUrl`**: Paste your public TestFlight beta invite link (App Store Connect App ID `6838113894` is already configured in `eas.json`).
- **`androidBetaUrl`**: Paste your Google Play Internal/Open Testing link or signed APK download URL.
- **`whatsappNumber`**: Add your WhatsApp Business number in international digits without `+` (e.g., `201012345678`).
- **`waitlistEndpoint`** *(optional)*: Point to a Cloudflare Worker, Formspree URL, or a Supabase Edge Function to capture waitlist leads in your database. Until configured, the form validates submissions cleanly and persists confirmation locally so testers never hit a dead endpoint.

---

## 2. Deploy Options (Pick Any One)

### Option A: Cloudflare Pages (Recommended — Fastest MENA Edge & Zero Config)
1. Go to **Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git** (or drag-and-drop the `website/` folder via **Direct Upload**).
2. Set **Build command**: *(leave blank)* · **Build output directory**: `website`.
3. Open **Custom domains → Set up a custom domain** and enter your domain (`yourdomain.com` + `www.yourdomain.com`). Cloudflare automatically provisions SSL/TLS and enforces HTTPS.
4. Security headers (`_headers`) and `/ar` / `/en` redirects (`_redirects`) work automatically.

### Option B: Vercel
1. Import the repository or run `npx vercel website --prod`.
2. Set **Root Directory** to `website` and **Framework Preset** to `Other` (no build command).
3. Under **Project Settings → Domains**, add your custom domain and point your registrar's `A` (`76.76.21.21`) and `CNAME` (`cname.vercel-dns.com`) records.
4. `vercel.json` handles clean URLs, caching, security headers, and `/ar` / `/en` redirects automatically.

### Option C: Netlify
1. Drag-and-drop `website/` into **Netlify Drop**, or connect Git with **Publish directory**: `website` (no build command).
2. Add your custom domain under **Domain Management** and follow Netlify's DNS CNAME/ALIAS instructions.

---

## 3. Domain Name Directions (If Still Selecting One)

Short, clean domains aligned with the lowercase **`onebase.`** identity:
- `onebase.app` / `onebase.co` / `onebase.eg`
- `useonebase.com` / `getonebase.com` / `tryonebase.com`
- `onebaseledger.com` / `onebasehq.com`

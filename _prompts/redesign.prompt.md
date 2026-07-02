# Codex task: LIGHT premium redesign of the Manta Bridge landing page (style of Manta Network) + a tasteful SOURCES rail

Rebuild this static one-page site IN PLACE (your -C workdir): overwrite `index.html` + `style.css`, keep
every other file. No frameworks, no build, no external JS/libraries; tiny inline JS only. Premium and
polished -- NOT dry, NOT minimal, NOT oversized.

IMAGES ARE FROZEN (local): never create, overwrite, download, replace, rename, or delete any LOCAL image
(`favicon.png`, `eth.png`, `manta.png`, `og-cover.png`, any local `*.png`/`*.svg`/`*.ico`). Use ONLY the
local images already in the folder, byte-unchanged. Keep `<link rel="icon">` and the topbar brand `<img>`
on the existing `favicon.png` (no inline `<svg>` mark, no data-URI).
ONE EXCEPTION: the bottom SOURCES rail (below) may use EXTERNAL `<img>` logos loaded from a favicon
service URL. No new LOCAL image files are ever created.

PRESERVE from the current `index.html` (read it first): the exact keyword `Manta Bridge` (as `<h1>` and in
`<title>`), the existing value sentence (deck `<p>` = `<meta description>`, word-for-word, light polish
only), the `<link rel=canonical>`, the money CTA target href, AND the existing topbar authority links
(Manta Explorer, Bridges, L2BEAT) -- keep them, never drop them.

## THEME: LIGHT premium, in the real style of Manta Network (manta.network / Manta Pacific)
- This is a bridge to Manta. Render it in the spirit of Manta's REAL light brand: a clean LIGHT base, ONE
  confident accent in Manta's blue / cyan family (derive the exact hue from `favicon.png` / `manta.png` +
  your knowledge of Manta), soft WHITE cards with GENEROUS rounded corners (~16-22px), gentle soft shadows,
  hairline neutral borders, airy whitespace. ONE accent only, no rainbow.
- `<meta name="theme-color">` = the light base background.
- Quiet premium motion only (soft pulse on the Preview dot, gentle hover lift). Respect `prefers-reduced-motion`.

## Layout (desktop ONE screen, mobile CLEAN short scroll)
Inside `<main>`: a split hero, then the SOURCES rail (below), then the footer.
- **Topbar:** brand mark (`favicon.png`) + `Manta Bridge` wordmark LEFT; flexible spacer; the AUTHORITY NAV
  right (Manta Explorer / Bridges / L2BEAT, plain text, `target="_blank" rel="nofollow noopener noreferrer"`)
  -- MUST stay present and in source HTML. No topbar button.
- **Left column (basic):** `<h1>Manta Bridge</h1>` (see H1 SIZE) -> the deck `<p>` value sentence (keyword in
  `<strong>`) -> EXACTLY THREE qualitative trust chips (e.g. `Bridge to Manta`, `Fast & low-cost`,
  `Non-custodial`) -> ONE prominent, comfortably large primary CTA `Enter App`. NO `<h2>`.
- **H1 SIZE (IMPORTANT):** the hero `<h1>` must RENDER at ~80px on a 1280px desktop -- e.g.
  `font-size: clamp(2.9rem, 5.6vw, 5.1rem)`. NEVER under ~64px on desktop, NEVER a giant 120px+. Scale down on mobile.
- **Right column (the star -- a RICH bridge preview, light soft card):** light chrome + a small selector
  pill + a pulsing `Preview` pill; a From (ETH, `eth.png`) -> To (MANTA, `manta.png`) bridge route in two
  rounded panels with a SMALL GAP so the circular switch sits in a clean notch; the switch swaps the two;
  an abstract `Best route` micro-row (faint hop dots, NEVER fabricated numbers); a faint number-free hint;
  and the `Start Bridge` CTA. Non-interactive preview, only the switch toggles icons. No wallet connect, no
  fake amounts/quote.

## BOTTOM SOURCES RAIL (the special request -- design it VERY tastefully and neat)
Instead of a generic texture band, build a refined "sources" rail: MANY authoritative sources, each shown
as its REAL LOGO + name, linked. Use ALL of these (name | logo domain | link):
- Manta Network | manta.network | https://manta.network/
- L2BEAT | l2beat.com | https://l2beat.com/
- DefiLlama | defillama.com | https://defillama.com/
- CoinGecko | coingecko.com | https://www.coingecko.com/
- CoinMarketCap | coinmarketcap.com | https://coinmarketcap.com/
- Etherscan | etherscan.io | https://etherscan.io/
- Chainlist | chainlist.org | https://chainlist.org/
- Ethereum.org | ethereum.org | https://ethereum.org/bridges/
- GitHub | github.com | https://github.com/Manta-Network
- DeBank | debank.com | https://debank.com/
- DappRadar | dappradar.com | https://dappradar.com/
- Galxe | galxe.com | https://galxe.com/

LOGOS: load each logo from the Google favicon service ONLY:
`https://www.google.com/s2/favicons?sz=64&domain=<DOMAIN>` (this is the only external image source; create
NO local files). Each logo `<img>` MUST have explicit `width` + `height` (e.g. 22x22), `loading="lazy"`,
`alt="<name>"`, and `onerror="this.remove()"` so a missing logo gracefully leaves just the name.
DESIGN (neat + premium): a small quiet section label (e.g. `Sources` or `Referenced across the ecosystem`),
then a thin SINGLE-ROW rail of uniform source chips -- each chip = the logo in a small rounded
container + the source name; muted/soft by default, gently colorizing and lifting on hover. Even spacing,
calm, not cluttered. If all 12 don't fit one row, use a slow subtle horizontal MARQUEE (pausing on hover)
or two tidy rows. Keep it THIN so the desktop stays ONE screen. Each link
`target="_blank" rel="nofollow noopener noreferrer"`.

## SEO spine (LOCKED)
- `<title>` = `Manta Bridge &mdash; <short hook>` (em-dash entity, keyword first, <=60 chars, no weak suffix).
- Exactly one `<h1>` = `Manta Bridge`. NO `<h2>` anywhere.
- Deck `<p>` wraps `<strong>Manta Bridge</strong>` and equals `<meta description>` word-for-word.
- Schema `@graph` = WebSite + WebApplication + Organization, truthful, no FAQ/HowTo. SEO text in source HTML.

## Claims (light, crypto-friendly)
- Confident premium copy welcome. Two floors: (1) invent NO specific numbers (stats, TVL, fees, dates,
  audits, partnerships) -- qualitative only; (2) no "guaranteed / risk-free / 100%", no fake wallet-connect.
- One small footer line: `Information on this page is for educational purposes only and is not financial advice.`

## CTAs + footer
- Exactly TWO, distinct, both -> the preserved target href, `rel="noopener noreferrer"`: hero `Enter App` +
  card `Start Bridge`. No third CTA, no topbar button.
- Footer: a `Manta Bridge &mdash; 2026` brand line + the one educational line. Small and quiet.

## Technical / mobile
- SEO content in SOURCE HTML; tiny INLINE `<script>` for the switch only; every LOCAL `<img>` has width+height
  (the source-logo `<img>`s also have width+height + lazy).
- Desktop ONE screen: `body{min-height:100vh;min-height:100dvh}` + desktop media
  `{height:100vh;height:100dvh;overflow:hidden}` (vh BEFORE dvh); add a `max-height` desktop query to compress.
- MOBILE CLEAN: single column; bridge card full-width; route stacks neatly (switch rotates vertical); the
  sources rail wraps or scrolls cleanly; comfortable spacing + tap targets; topbar collapses tidily (nav may
  hide but stays in source); short vertical scroll; ABSOLUTELY no horizontal overflow (`overflow-x:hidden` on
  html/body).
- Keep `lang="en"`; keep favicon/og/manifest/robots/sitemap referenced. Glyphs via HTML entities
  (`&mdash;`, `&rsaquo;`, `&darr;`), not literal non-ASCII.

## Self-QC
- [ ] LIGHT premium, Manta spirit (blue/cyan accent); soft rounded cards; NOT dry.
- [ ] Topbar authority links (Manta Explorer / Bridges / L2BEAT) present + in source HTML.
- [ ] One `<h1>` = `Manta Bridge`; NO `<h2>`; deck `<p>` == meta description; H1 RENDERS ~80px (not under 64).
- [ ] Split hero; desktop one screen no-scroll; MOBILE clean, no horizontal overflow.
- [ ] Rich number-free ETH->MANTA bridge preview; real eth.png/manta.png; switch in a clean notch.
- [ ] SOURCES rail: all 12 sources, real logos via the Google favicon service, names + nofollow links,
      tasteful uniform chips, thin, no horizontal overflow, graceful onerror.
- [ ] Exactly TWO CTAs (`Enter App` + `Start Bridge`) -> target; no topbar button.
- [ ] LOCAL images byte-untouched; favicon still the icon + brand mark; footer brand line + one educational line.

Make it genuinely premium, Manta-light, with a beautifully tasteful sources rail. Then stop.

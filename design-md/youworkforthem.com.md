# How youworkforthem.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/youworkforthem.com-design)

Last updated: 2026-07-30

## Captured pages

[![Home — catalog hero, alternatives row, footer](https://pin.fontofweb.com/7435?format=jpg)](https://design.withfudge.com/share/pin-7435)

[Home — catalog hero, alternatives row, footer](https://design.withfudge.com/share/pin-7435)

[![Home — ultra-wide densified grid](https://pin.fontofweb.com/7434?format=jpg)](https://design.withfudge.com/share/pin-7434)

[Home — ultra-wide densified grid](https://design.withfudge.com/share/pin-7434)

[![Free fonts listing](https://pin.fontofweb.com/7437?format=jpg)](https://design.withfudge.com/share/pin-7437)

[Free fonts listing](https://design.withfudge.com/share/pin-7437)

[![Bebas Neue Font Alternatives collection](https://pin.fontofweb.com/7436?format=jpg)](https://design.withfudge.com/share/pin-7436)

[Bebas Neue Font Alternatives collection](https://design.withfudge.com/share/pin-7436)

[![Registration gate on a font page](https://pin.fontofweb.com/7433?format=jpg)](https://design.withfudge.com/share/pin-7433)

[Registration gate on a font page](https://design.withfudge.com/share/pin-7433)

## Design character

YouWorkForThem is a long-running creative marketplace that treats the **chrome as a quiet gallery wall** and the **product art as the exhibit**. The site frame is almost aggressively simple: a solid black top bar, a white content canvas, dense multi-column product grids, and short utilitarian labels. Color, texture, and personality live inside the specimen cards—not in the shell.

What should survive adaptation:

- A **monochrome interface frame** that never competes with the merchandise.
- **Card-first browsing**: nearly every commercial surface is a tiled catalog of square or near-square previews.
- **Price as a secondary accent**, with free items called out in a clear green rather than decorative badges everywhere.
- **Short, plain UI copy** beside lush, self-contained product imagery.
- A **dense but ordered** rhythm—lots of items on screen, consistent gutters, no ornamental layout flourishes in the chrome.

This is not a soft lifestyle brand site and not a flashy SaaS landing page. It is a **working foundry storefront**: efficient navigation, high product density, and specimens that do the storytelling.

## Foundations

### Color

Measured interface roles on the free-fonts and collection views:

| Role | Value | How it shows up |
| --- | --- | --- |
| Primary text | `#000000` | Titles, body, nav labels on light surfaces, product meta |
| Secondary / inverse text | `#ffffff` | Type and icons on the black header and on dark product art overlays |
| Accent | `#0f8548` | “from Free” and other free-price callouts |

Visually, the broader system stays in a tight set:

- **Canvas**: pure white page background behind catalogs, footers, and collection intros.
- **Shell**: pure black sticky header with white wordmark, category links, and utility icons (login, cart, currency, search).
- **Commerce accent**: green is reserved for free pricing; paid prices stay black.
- **Quiet controls**: light gray filled pills for secondary actions (“View More…”, “Register Today!”, sort menus, search field).
- **Product art**: unbounded. Cards carry reds, oranges, pastels, neons, and photographic textures. That color is merchandise, not brand chrome.
- **Auth moment**: the registration overlay breaks the monochrome rule with a saturated blue illustrated panel and a matching solid blue primary Register button—one of the few places the product UI itself becomes colorful.

Do not invent a large semantic palette for the marketplace chrome. Keep the frame black/white/green and let specimen art supply variety.

### Typography

Captured text styles do **not** retain declared family names on these pages, so this guide does not name a proprietary UI face or claim a licence. What is measured and visible:

- **Generic**: sans-serif UI throughout the chrome.
- **Dominant size**: about **14px** at weight **400**, with line-heights around **21–22.4px** on dense product meta and body blurbs.
- **Slight step up**: **16px** and **18px** appear for section titles, collection headings, and a few emphasis lines (often still weight 400).
- **Roles present in the catalog views**: body, display, and UI—where “display” is mostly carried by **type rendered inside product images**, not by oversized HTML headlines in the shell.
- **Tone of the chrome type**: plain, medium-tight, catalog-like. Product names are bold-ish links in black; foundry/category lines stay smaller and quieter; prices sit on the right of each card row in a consistent tabular alignment.

Practical reading of the hierarchy:

1. **Black header labels** — compact top-nav sans, high contrast on black.
2. **Section titles** — centered or left, modest size (“Discover Popular Font Alternatives”, “Free Fonts”, collection name).
3. **Card titles** — strongest text under each thumbnail.
4. **Meta / blurb** — smaller supporting copy under collections or beside prices.
5. **Specimen display** — lives in the artwork (Bebas-style condensed, serif editorials, script locks, etc.).

If you rebuild this system, pair a neutral UI sans for chrome with the rule that **marketing display type belongs in media**, not in every heading style.

### Spacing and layout

Recurring measured spacing (legacy CSS values, partial set):

- **Control padding**: 5–6px on compact chips; **10–15px** on form-like controls; **20px** horizontal padding on many content blocks and cards.
- **Card / section padding**: **20–30px** common; collection and hero-adjacent blocks also use **40–50px** vertical padding.
- **Stack gaps**: margins around **8–20px** between meta rows; some list stacks use a tight **2–5px** vertical pad inside dense toolbars.
- **Wide-home centering**: large left/right margins (~1172px recorded on the ultra-wide home capture) keep the catalog from bleeding edge-to-edge on very wide viewports.

Layout patterns that define the site:

- **Sticky full-bleed black header** with logo left, primary categories center-left, utilities right.
- **Hero / promo strip** on home: horizontal row of large specimen tiles (carousel-like), then a primary search field under a plain page title.
- **Editorial collection row**: four equal cards with large type-locked artwork, title, and a 2–3 line blurb; a single centered pill CTA beneath.
- **Catalog grids**:
  - Standard desktop home/free views settle into roughly **4 columns** of product cards.
  - Ultra-wide collection and home captures open to roughly **8+ columns**, proving the grid is allowed to get denser rather than only scaling card size.
- **Collection header**: circular mark + title + short description + product count, then toolbar (pagination, sort) above the grid.
- **Free-fonts toolbar**: breadcrumb, short explanatory paragraph, pagination, sort select, and grid/list toggles before the dense free grid.
- **Multi-column footer**: many shallow link groups (Support, Licensing, Services, …) on white, then a legal/status line and social icons.
- **Floating contact chip** anchored lower-right across browsing views.

Density reads as **card-heavy and populated**—lots of SKUs visible—without collapsing into chaos because gutters and card meta stay consistent.

## Visual language

**Shape**

- Product cards and many media tiles read as **near-square with small corner rounding** (~**4–5px** measured).
- Primary marketing and secondary actions use **pill shapes** (~**20–25px** radius) rather than sharp rectangles.
- Collection identity can use a **hard circular badge** (see Bebas Neue Alternatives).
- Taxonomy on listing pages also marks the system as **flat surfaces** with **mostly square corners** at the card level—pills are the exception for actions/inputs.

**Borders and elevation**

- **1px solid** borders appear on toolbar controls, pagination, and some card/chrome edges.
- A soft **0 / 0 / 15px** shadow shows up sparingly—elevation is not a big part of the brand; separation is mostly hairlines, whitespace, and the black header bar.

**Imagery**

- Product thumbnails are the visual engine: full-bleed type posters, textured lockups, lifestyle crops, and foundry graphics.
- Promo corners (“50% OFF”) sit **inside the artwork**, not as a global UI ribbon system.
- Home mixes fonts, graphics, photos, and video-style tiles in the same card language so the marketplace feels multi-category without changing layout mechanics.

**Motion**

- Still captures do not establish motion rules. Do not invent hover choreography beyond the obvious clickable card/title affordances visible in static UI.

## Components and states

### Top navigation
Black bar, white logo mark + wordmark, text categories (Fonts, Graphics, Photos, Videos, Extras, Collections), right-side Login / cart / currency / search. Active category can sit on a slightly lifted dark chip (Fonts on the free listing). This is the permanent orientation device.

### Product card
Anatomy, top to bottom:

1. Media tile (specimen art, optional corner promo label).
2. Title link + price aligned on one row (“from $9.50”, “from Free”, “$22.00”).
3. One-line foundry/category meta in quieter type.

Free price uses green; everything else stays black on white. Cards are the atomic commercial unit on home, free, and collection grids.

### Collection promo card
Larger tile than a SKU card: big display specimen, bold collection title, 2–3 lines of descriptive copy. Used in “Discover Popular Font Alternatives”.

### Search
- Home: wide centered search under the H1, with an “All Items” (or similar) scope control beside it.
- Free fonts: rounded light search field on the right of the intro block (“Search Free Fonts”).

### Toolbar controls
Pagination as a compact numbered control group; sort as a light select; optional grid/list icon pair. These stay visually light so they do not fight the grid.

### Pills / CTAs
Secondary and mid-page CTAs are **light gray pills with black labels** (“View More Font Alternatives”, “Register Today!”). They feel calm and catalog-native rather than sales-y primary buttons.

### Registration / gate modal
Split panel:

- **Left**: saturated blue illustration field, bold white all-caps promise (“UNLOCK FREE FONTS & GRAPHICS!”), playful product icons.
- **Right**: white form—email/password fields with large rounded fills, checkbox, solid blue Register button, then stacked social register buttons (Apple / Google / Facebook) as light rounded rectangles.

This is the clearest “product UI color” moment in the set and a useful reference when the marketplace needs a conversion surface.

### Footer + contact chip
Utility footer in many columns of plain links; floating **Contact** chip remains available while browsing.

Visible states worth copying: **populated catalogs**, **free vs paid price styling**, **active nav category**, and **modal registration**. Hover/focus details are not established from these stills.

## Responsive behavior

Supported by paired captures, not by a full breakpoint table:

- At ~**1712px**-class widths, home and free listings present a **comfortable 4-column** catalog with readable meta.
- At ~**3432px**-class widths, home and collection views **add columns** (collection grid becomes a long horizontal run of many small cards) instead of only enlarging a fixed column count.
- The black header and white canvas pattern holds across those widths; density changes more than structure.
- The Picual/registration capture is a smaller viewport crop dominated by the modal—useful for the auth pattern, not for full-page responsive rules.

Do not claim mobile nav or tablet behavior from this set; those viewports were not in the returned scope.

## Practical guidance

**Preserve**

1. Black header / white canvas / green free-price accent as the entire chrome palette.
2. Specimen-first cards: artwork does the persuasion; UI type stays small and neutral.
3. Dense, even grids with consistent title/price meta—catalog trust comes from rhythm.
4. Pills for calm secondary actions; save saturated fills for rare conversion moments (registration).
5. Let promo color live inside product media, not in global banners every section.
6. Keep section titles modest; do not turn the marketplace shell into a poster layout.

**Avoid**

1. Decorating the chrome with gradients, glass, or large brand color blocks borrowed from specimen art.
2. Oversized marketing headlines in the shell that compete with type inside the cards.
3. Rainbow price chips or badge systems—free green + black paid is enough.
4. Heavy drop shadows or floating card decks; the site is mostly flat with hairlines.
5. Naming or shipping a specific UI font family from this guide—the captures did not retain trustworthy declared family names.
6. Assuming mobile patterns; only wide desktop densification is evidenced here.

**Adaptation recipe**

If you want “a site that feels like YouWorkForThem” for another catalog:

- Build a **black utility header** and **white working canvas**.
- Make the **SKU card** your primary component (media + title + price + quiet meta).
- Use **one positive accent** for the special commercial state (here: free).
- Put creative energy into **tile artwork**, not into chrome ornament.
- Scale density by **adding columns** on very wide screens rather than stretching a sparse layout.

## Scope note

Studied from five desktop captures on `youworkforthem.com`:

- Home (`/`) at standard and ultra-wide widths
- Free fonts listing (`/fonts/free`)
- Collection listing (`/collection/bebas-neue-font-alternatives`) at ultra-wide width
- Font product URL showing the registration gate (`/font/T32673/picual`)

Supported well: marketplace chrome, catalog density, card anatomy, free-price accent, collection header, registration split modal, wide-grid densification.

Not established here: exact UI font family/licence, full spacing scale beyond the retained samples, mobile/tablet navigation, motion, and a complete semantic color system beyond black / white / free-green (plus the visually obvious blue registration treatment).

## Colors

- `#000000`
- `#ffffff`
- `#0f8548`

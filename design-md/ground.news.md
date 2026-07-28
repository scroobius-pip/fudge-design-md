# How ground.news is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/ground.news-design)

Last updated: 2026-07-28

## Design character

Ground News is a **dark-first media product** that sells bias transparency as a visual system. The marketing and product surfaces share one monochrome charcoal field, warm off-white type, and a signature **three-lane bias spectrum** (left / center / right) painted in muted coral, gold, and green. The home experience is dense and dashboard-like: story cards, source chips, and progress bars compete in a tight grid. The subscribe experience opens up into taller marketing sections, rounded pricing cards, and light FAQ bands without abandoning the same type and accent language.

What should survive adaptation:

- **Near-black charcoal canvas** with warm off-white primary type (`#eeefe9`), not pure white on pure black
- **Tri-color bias language** — coral left, amber center, sage right — used for bars, chips, and source counts
- **Border-separated dark cards** (1–2px hairlines) instead of heavy shadows
- **White solid CTAs** on dark marketing bands; quiet ghost/outline controls for secondary actions
- **Dense news index** on home vs **roomier pricing storytelling** on subscribe
- Single **neo-grotesk sans** hierarchy driven by weight and size, not multiple families

## Foundations

### Color

Structured capture only locked primary/secondary text to `#eeefe9`. Remaining roles below are visual reads from home and subscribe pins.

| Role | Hex (approx.) | Where it shows |
| --- | --- | --- |
| Marketing / app canvas | `#121212`–`#1a1a1a` | Full-bleed home feed, subscribe hero |
| Elevated card surface | `#1e1e1e`–`#242424` | Story cards, plan tiles, FAQ shell |
| Primary text | `#eeefe9` | Headlines, body, nav (measured) |
| Secondary / mute text | `#9a9b95`–`#b0b1aa` | Meta lines, captions, inactive tabs |
| Bias — left | `#c45c4a`–`#d06655` | Left bars, left source chips |
| Bias — center | `#c9a24a`–`#d4b15c` | Center bars, center chips |
| Bias — right | `#5a8f6a`–`#6a9f7a` | Right bars, right chips |
| Primary CTA fill | `#f4f4ef`–`#ffffff` | “Get the full picture”, “Learn more” |
| CTA label on light | `#1a1a1a` | Text inside white buttons |
| Light band canvas | `#e8e6df`–`#f0efe8` | FAQ and lower marketing sections |
| Text on light | `#1a1a1a` | FAQ title, light-band body |
| Hairline borders | `rgba(238,239,233,0.08–0.14)` | Card edges, column rules |
| Photo treatment | desaturated B/W | Group-subscription editorial art |

Relationships that matter:

- **Chroma is almost exclusive to the bias triad.** UI chrome stays neutral so left/center/right remain legible as data, not decoration.
- **Warm off-white (`#eeefe9`)** keeps long reading sessions softer than pure `#fff` on charcoal.
- **Light bands are true paper**, used for FAQ and resting sections after long dark marketing runs.
- White CTAs reverse the dark field cleanly; do not introduce a second saturated brand color for buttons.

### Typography

No webfont family was recorded. Taxonomy and screens read as a **single sans-serif / neo-grotesk** system. Observed ladder from structured text styles:

| Role | Weight | Size | Line height | Tracking | Notes |
| --- | --- | --- | --- | --- | --- |
| Display / section title | 680–800 | 42px | 45–52.5px | −0.45 to −1.05 | “Blindspot”, plan names, big marketing lines |
| Subhead | 480–600 | 26–32px | 26–40px | −0.65 to −0.8 | Feature titles, mid-tier headlines |
| Lead / card title | 400–800 | 20–22px | 25–30px | slight negative | Story titles, CTA-adjacent lines |
| Body | 400–480 | 16–18px | 20–27px | 0 to −0.8 | Dominant marketing and feed copy |
| UI / meta | 500–600 | 12–14px | 12–18px | optional −0.45 | Chips, timestamps, source counts |
| Dense UI label | 600 | 16px | 17.5px | 0 | High-frequency home chrome (n≈153) |

Patterns:

- **Weight does the hierarchy work** (400 → 480 → 600 → 680 → 800) inside one family.
- Display lines run **tight tracking** (−0.8 to −1.05); body is calmer.
- Home is **type-dense** (many 12–16px UI roles); subscribe lets 42px display breathe with more vertical padding.

### Spacing and layout

Recurring measurements (aggregated across home + subscribe):

- **Home card padding** clusters at **8–9.6px** and **24px** — compact news density.
- **Subscribe horizontal rhythm** favors **32px** side padding and occasional **~251px** side margins (narrow content column on wide viewports).
- **Section padding** on marketing blocks: **40px** and **80px** vertical common; FAQ/list rows use **20px** vertical and **~10px** horizontal.
- Home feels like a **multi-column content index**; subscribe is a **single marketing scroll** with full-width dark bands and inset cards.
- Taxonomy flags home as **dense** and subscribe pricing as **moderate** density — preserve that contrast.

## Visual language

- **Surfaces:** solid dark backgrounds; cards separated by **1–2px solid borders** on all sides (border-separated surfaces, not drop shadows — shadows were not observed).
- **Radius:** home cards ~**8px**; chips/controls **4px**; subscribe tiles **9.6–10px**; larger marketing panels ~**20.8px**; rare full pills (**9999**).
- **Imagery:** editorial photography often **desaturated / monochrome** (newspapers, hands) so it sits behind type without fighting the bias colors.
- **Data chrome:** horizontal **bias bars** and small **source-count chips** are the brand’s signature graphic device — treat them as components, not one-off illustration.
- **Motion:** not evidenced in still captures; do not invent transitions.

## Components and states

Recurring building blocks visible in pins:

1. **Top nav** — wordmark left, text links, compact account/CTA cluster on dark bar.
2. **Story / blindspot cards** — thumbnail or chart, headline, source row, three-part bias meter.
3. **Bias meter** — three segments or grouped chips in left/center/right colors with numeric counts.
4. **Primary button** — solid light fill, dark label, modest radius (~8–10px), used sparingly on dark fields.
5. **Plan / feature cards** — bordered dark tiles, 42px plan title, 16px body, checklist rows.
6. **Group subscription band** — split layout: B/W photo left, copy + white CTA right on charcoal.
7. **FAQ block** — light canvas, large centered title, dark rounded question shell beneath.

Visible hierarchy is compositional only; interaction states (hover/focus) were not captured.

## Responsive behavior

Captures span roughly **1222–1712px** wide. Patterns supported by multiple viewports:

- Wide subscribe views use **large side margins** to keep pricing copy readable.
- Home stays **multi-column and dense** at desktop widths.
- No reliable mobile breakpoint set was in this batch — do not invent phone rules from desktop pins alone.

## Practical guidance

**Preserve**

- Charcoal field + warm off-white type + exclusive bias triad
- Border-defined cards over shadow elevation
- Dense feed chrome vs airy pricing sections as two densities of one system
- White CTA as the only high-contrast action fill on dark

**Avoid**

- Adding a second brand accent (blue/purple) that competes with left/center/right
- Pure `#000` / `#fff` harshness that loses the warm paper tint of `#eeefe9`
- Heavy drop shadows or glassmorphism — the system is flat, edged, and editorial
- Turning bias colors into large background washes; they are meters and chips
- Mixing serif display into the product chrome

## Evidence scope

Studied five viewport captures: home pin `8644` and subscribe pins `8640`–`8643` on `ground.news` (`/`, `/subscribe`). Structured families for palette, type roles, shadows, and gradients were unsupported or empty; color roles beyond text and all radii/borders/spacing counts come from observation rows plus visual pin reads. Use this guide for dark media-product and bias-visualization patterns, not for mobile-specific layout claims.

## Captured pages

[![Home — Blindspot feed](https://pin.fontofweb.com/8644?format=jpg)](https://design.withfudge.com/share/pin-8644)

[Home — Blindspot feed](https://design.withfudge.com/share/pin-8644)

[![Subscribe — pricing hero](https://pin.fontofweb.com/8640?format=jpg)](https://design.withfudge.com/share/pin-8640)

[Subscribe — pricing hero](https://design.withfudge.com/share/pin-8640)

[![Subscribe — plan cards](https://pin.fontofweb.com/8641?format=jpg)](https://design.withfudge.com/share/pin-8641)

[Subscribe — plan cards](https://design.withfudge.com/share/pin-8641)

[![Group Subscriptions band](https://pin.fontofweb.com/8642?format=jpg)](https://design.withfudge.com/share/pin-8642)

[Group Subscriptions band](https://design.withfudge.com/share/pin-8642)

[![Subscribe — mid sections](https://pin.fontofweb.com/8643?format=jpg)](https://design.withfudge.com/share/pin-8643)

[Subscribe — mid sections](https://design.withfudge.com/share/pin-8643)

## Colors

- `#121212`
- `#1a1a1a`
- `#242424`
- `#eeefe9`
- `#9a9b95`
- `#c45c4a`
- `#c9a24a`
- `#5a8f6a`
- `#ffffff`
- `#e8e6df`
- `#1a1a1a`

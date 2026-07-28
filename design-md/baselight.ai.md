# How baselight.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/baselight.ai-design)

Last updated: 2026-07-28

## Design character

Baselight is a calm, high-trust data-product brand: airy off-white canvases, soft depth, and a single mint-teal brand mark against near-black type. Marketing pages feel like a premium analytics lab—sparse heroes, glass-like 3D props, floating product cards—while the catalog drops into a dense but orderly workspace UI without abandoning the same light neutrals and teal accents. The system sells *structured truth*: restrained color, generous whitespace, and interface chrome that looks precise rather than flashy.

Qualities to preserve: luminous pale grounds, one cool teal brand accent plus occasional warm coral on commercial pages, pill CTAs, large quiet headlines, and product chrome that reads as real software (tables, filters, charts) rather than abstract illustration alone.

## Foundations

### Color

No structured palette was recorded; roles below are visual reads from home, pricing, and catalog.

| Role | Hex (approx.) | Where it shows |
|------|----------------|----------------|
| Canvas | `#F4F3F0` | Page ground; warm off-white, not pure gray |
| Surface | `#FFFFFF` | Nav, pricing cards, catalog panel, feature cards |
| Ink | `#1C1C1C` | Headlines, primary UI labels, wordmark |
| Body muted | `#6E6E6E` | Subcopy, table meta, inactive plan features |
| Brand teal | `#2F9B7D` | Logo mark, catalog eyebrow, checkmarks, chart bars |
| Coral accent | `#E07A5F` | Pricing “Start free”, tier labels, feature icons |
| Soft blush wash | `#F7E9E4` | Pricing hero atmospheric glow |
| Soft gold glow | `#F0E0A8` | Floating cube lights on home |
| Chrome border | `#E6E4E0` | Card edges, table rules, segmented controls |
| Inverse CTA | `#111111` | Sign up / primary filled pills; white label |
| Link / focus teal | `#2A8F72` | Inline “Browse our catalog”, active tabs |

Relationships: canvas stays warm-neutral so white cards lift slightly; teal is the only cool brand signal on product/marketing; coral is reserved for commercial emphasis (pricing), not mixed into the catalog chrome. Disabled plan rows drop to a light gray with reduced contrast rather than red.

### Typography

Declared families were not captured. Visually the stack is a clean neo-grotesque / geometric sans: tight but readable headlines, regular body, and small all-caps or tracked labels for eyebrows and tier names.

Observed sizes (measured):

| Use | Size / line-height | Weight | Notes |
|-----|--------------------|--------|-------|
| Display hero | ~48–64px / ~1.0–1.15 | 300–400 | Home & pricing openers; light-to-regular, slight negative tracking on some 48px lines |
| Section title | ~52px / ~62px | 700 | Pricing-scale moments; bold without heavy black |
| Subhead / lead | ~18–20px / ~1.5–1.55 | 400 | Hero supporting copy |
| Body / UI | 15–16px / ~24–25px | 400 | Catalog rows, plan bullets, nav |
| Small UI / meta | 14–14.4px / ~20–22px | 500–600 | Filters, table headers, badge text |
| Eyebrow / tier | ~14.4px / ~17px | 700 | Wide tracking (~3.6–4px) uppercase-feeling labels (“BASELIGHT CATALOG”, “STARTER”) |
| Stat figures | large regular | 400 | “400+ billion” style metrics; airy, not ultra-bold |

Hierarchy rule: one large quiet headline + one muted paragraph + optional teal eyebrow. Avoid stacking multiple bold weights in a single block.

### Spacing and layout

Recurring padding clusters: **15–20px** for compact UI cells and catalog row padding; **~33px** card padding on pricing; **40–48px** section breathing room; **80–96px** large vertical section pads and wide horizontal gutters on some home frames.

Layout habits:

- Full-bleed pale canvas with a **centered max-width content column** and generous side margins on marketing.
- **Top sticky-style nav**: logo left, text links center, black pill CTA right.
- Heroes often **split**: copy left, floating product or 3D composition right (or stats column right on catalog).
- Pricing uses a **four-column equal card grid** under a centered feature icon row and a pill yearly/monthly toggle.
- Catalog uses a **raised white workspace card** overlapping the hero—marketing bleeds into product.
- Dot-grid or soft vignette backgrounds add structure without hard section bands.

Density: marketing is sparse; catalog is information-dense but still 15–20px padded with clear column alignment (dataset, provider, updated, tables, size, usage, stars).

## Visual language

**Shape.** Pill radii dominate interactive chrome (~100px / fully rounded for primary buttons, sign-up, outline CTAs, search field). Cards and panels use **8–20px** rounded rectangles (pricing cards ~8px; larger feature/workspace shells ~16–20px). Small controls and chips sit around **5–6px**.

**Depth.** Soft multi-layer shadows on elevated panels (e.g. ~0 2px 4px plus ~0 7px 13px −3px style stacks on catalog/home chrome; larger ~0 15px 25px on some marketing cards). Product mockups tilt in perspective with translucent layers—glass slabs, floating chat chips, bar charts—lit by pale gold/teal ambient glows rather than hard drop shadows alone.

**Borders.** 1px solid light neutral dividers on tables, cards, and segmented controls. Hairlines do the structural work; color fills stay minimal.

**Imagery.** Abstract 3D (frosted planes, glowing cubes) plus faithful UI chrome (SQL/chat stack, charts, dataset list). Partner logos are monochrome/gray in a trust strip. Dataset thumbnails use soft gradient squares (coral→yellow, teal glass) as identity chips—not photography.

**Motion (implied stills).** Blurred streaking planes and floating cards suggest gentle parallax; do not invent timing—keep any motion slow and optical, not bouncy.

## Components

**Global nav.** Transparent-on-canvas bar; teal asterisk-like mark + “baselight” wordmark; uppercase-feeling small nav labels; black pill **Sign up**.

**Primary CTA.** Black filled pill, white label, medium tracking (“START NOW”, “SIGN UP”). Secondary is white/outline pill with dark stroke (“WATCH THE DEMO”, “BROWSE OUR CATALOG”) sometimes with a leading icon.

**Eyebrow label.** Small teal or coral uppercase line above the H1 (catalog teal; pricing coral).

**Stat stack.** Right-aligned or columned metrics: micro label over large figure; optional text link under.

**Pricing card.** White surface, coral tier label, huge price, muted period line, short description, checklist with teal checks / gray disabled rows. Toggle is a dual pill (selected white-on-light track).

**Feature icon row.** Circular soft-tint discs (coral wash on pricing) + short multi-line captions in a 2×3 or 3×2 grid.

**Audience tabs.** Horizontal text tabs; active = white pill with border/shadow; inactive = plain muted labels.

**Feature callout card.** Centered white rounded card, bold title, muted body, teal checklist, text+circular arrow button footer.

**Catalog workspace.** White rounded shell: title “Discover”, search pill, underline tabs (Datasets / Queries / Dashboards), filter chips, dense table with icon+title+subtitle primary cell, numeric/meta columns, star counts, overflow menu.

**Trust logo row.** Centered micro-label + grayscale logos on ample horizontal spacing.

## Responsive notes

Captures are wide desktop viewports (~1720–2048px). Expect the four pricing columns and dual-column heroes to collapse to single column on small screens; catalog tables will need horizontal scroll or stacked row cards. Specific breakpoints were not measured—treat mobile as a compression of the same tokens, not a second visual system.

## Practical guidance

**Do**

- Keep the canvas warm off-white and let white surfaces float with soft shadow + 1px border.
- Use **one** brand teal for identity, success checks, and data accents; reserve coral for commercial/pricing energy.
- Prefer pill CTAs; primary = near-black fill, secondary = outline on canvas.
- Set heroes with one large light-to-regular headline and short muted subcopy—resist extra bold subheads.
- Show real product density in embeds (tables, filters, charts) so the brand stays “data lab,” not pure decor.
- Track small labels; keep body at 15–16px with ~1.5 line-height.

**Don’t**

- Flood the UI with saturated color or dark mode marketing (this capture set is light-first).
- Mix coral into catalog tables or teal into every pricing glyph—keep accent lanes separate.
- Use sharp 0-radius cards next to full pills; radius vocabulary is soft throughout.
- Over-bold every line; weight 700 is for select titles and micro-labels, not paragraphs.
- Invent heavy glassmorphism noise; depth is soft light and few shadows, not frosted overload.

## Scope note

Based on desktop captures of baselight.ai home (multiple hero and mid-page frames), pricing, and the data catalog. Color hexes are visual approximations (no measured palette export). Font family names and licences were not declared in the capture set—match with a neutral geometric sans and verify licensing separately. Mobile and authenticated app shells were not studied.

## Captured pages

[![Home — unified data layer hero](https://pin.fontofweb.com/7848?format=jpg)](https://design.withfudge.com/share/pin-7848)

[Home — unified data layer hero](https://design.withfudge.com/share/pin-7848)

[![Home — structured backbone section](https://pin.fontofweb.com/7849?format=jpg)](https://design.withfudge.com/share/pin-7849)

[Home — structured backbone section](https://design.withfudge.com/share/pin-7849)

[![Home — audience feature card](https://pin.fontofweb.com/7851?format=jpg)](https://design.withfudge.com/share/pin-7851)

[Home — audience feature card](https://design.withfudge.com/share/pin-7851)

[![Pricing — tiers and coral accents](https://pin.fontofweb.com/7853?format=jpg)](https://design.withfudge.com/share/pin-7853)

[Pricing — tiers and coral accents](https://design.withfudge.com/share/pin-7853)

[![Catalog — discover workspace](https://pin.fontofweb.com/7854?format=jpg)](https://design.withfudge.com/share/pin-7854)

[Catalog — discover workspace](https://design.withfudge.com/share/pin-7854)

## Colors

- `#f4f3f0`
- `#ffffff`
- `#1c1c1c`
- `#6e6e6e`
- `#2f9b7d`
- `#e07a5f`
- `#f7e9e4`
- `#e6e4e0`
- `#111111`
- `#f0e0a8`

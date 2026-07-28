# How base44.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/base44.com-design)

Last updated: 2026-07-28

## Design character

Base44 is a **soft, optimistic AI-builder brand**: airy gradient stages, near-black humanist display type, white product cards, and a calm black/lime control pair. Marketing pages feel like a lightroom for ideas—prompt box or pricing grid centered on pastel washes—while product previews drop into darker app chrome so the site can sell both “build with words” and a real working UI.

What should survive adaptation:

- **Pastel sky-to-peach (or lavender) gradient stages** behind sparse heroes
- **Monumental black display** with short gray supporting lines
- **Pill-first chrome**: full-round black primary CTAs, soft lime header CTA, chip suggestion pills
- **White elevated cards** with light 1px separation and generous internal padding
- **One orange brand mark** (dot cluster / submit orb) as the only warm accent punch
- **Product UI as the hero image**—kanban/app frames, not stock photography

## Foundations

### Color

Measured text roles:

| Role | Hex | Use |
|------|-----|-----|
| Primary text | `#000000` | Display, plan names, prices, body on light cards |
| Secondary text | `#878787` | Supporting lines, muted labels, credit meta |

Visually consistent surfaces and accents (from marketing captures):

| Role | Appearance | Notes |
|------|------------|-------|
| Canvas | Soft white → cool mint / sky / peach washes | Full-bleed atmospheric gradients; never heavy photo backgrounds |
| Surface | Pure white cards and floating nav pill | Pricing tiers, feature split panels, prompt field |
| Primary action (in-page) | Solid black pills | “Get started”, “Start building”, “Contact sales” |
| Header CTA | Soft lime / chartreuse pill | “Start Building” in the top bar—lighter and friendlier than black |
| Brand accent | Warm orange | Logo disc and prompt submit orb |
| Feature checks | Coral-orange ticks | Pricing feature lists |
| Enterprise strip | Dusty blue-gray / sage bar | Full-width secondary CTA band under pricing |
| Muted chrome | Cool gray nav labels on white | Product / Use Cases / Resources links |

Keep the palette **mostly monochrome type on pastel air**, with orange reserved for identity and lime reserved for the persistent header invite. Avoid stacking multiple saturated brand colors in one section.

### Typography

No declared family in capture data—render with a clean **neo-grotesk / geometric sans** that can hold both huge display and quiet UI.

Observed ladder (pricing-heavy sample, weights mostly regular with selective medium/semibold):

| Role | Approx size | Notes |
|------|-------------|-------|
| Display | ~71px, tracking slightly tight (~−0.7) | Hero lines like “Plans from first idea to full scale”, “Turn your ideas into apps” |
| Section / card title | ~26–37px | Plan names, secondary headlines |
| Lead / deck | ~16–20px | Supporting sentences under heroes |
| Body / UI | ~12–14px | Feature lists, nav, card copy |
| Meta / micro | ~10–12px | Credit lines, uppercase prompt hints, labels |
| Price | Display-scale numerals | `$200` large with smaller `/mo` suffix in secondary weight/color |

Hierarchy is **size-led more than weight-led**: regular weight carries most of the system; medium/semibold appears sparingly on UI emphasis. Line height sits slightly open on body (~1.5–1.6) and tighter on display (~1.1).

### Spacing and layout

- **Wide desktop marketing** (~1712–2048px captures): large horizontal inset (~100–110px feel on dense pricing blocks), airy section tops (~145px-class padding on major blocks)
- **Card grids**: equal white pricing columns with ~20–24px gutters; five-up plan row on desktop
- **Internal card padding**: ~22px-class on dense plan cards
- **Home hero**: single centered column—headline, one deck line, one prompt card, suggestion chips
- **Split product story**: white rounded panel split copy | dark app screenshot
- **Floating top nav**: pill-shaped white bar with logo left, links center, lime CTA right—not a full-bleed hard header
- Density is **moderate**: roomy marketing, not dashboard-dense until the embedded product UI appears

## Visual language

- **Corners**: pill-dominant—full round on CTAs and chips (`~100–999` radii), softer ~8–20px on cards and panels, ~10–11px on product frames
- **Borders**: light 1px hairlines separating card zones (price block vs credits vs CTA); surfaces read as **border-separated**, not shadow-stacked (no meaningful shadow tokens captured)
- **Gradients**: soft multi-stop washes (sky blue → white → peach; lavender → white → apricot; mint/pink card washes on promo tiles). Gradients are atmospheric, never striped or neon
- **Imagery**: live product UI (dark kanban, colored status chips) framed inside light marketing chrome; logo is a warm multi-dot orange burst
- **Motion**: not established from stills

Overall effect: **friendly futurism**—startup SaaS without brutal black-on-black developer gloom.

## Components

### Navigation
Floating white capsule: wordmark + orange mark, dropdown text links, globe, lime “Start Building” pill.

### Hero prompt
Large centered display + gray deck + wide white rounded prompt field with placeholder copy and circular orange submit control. Below: small-caps hint + outline/soft pill suggestion chips (“Reporting Dashboard”, “Gaming Platform”, …).

### Pricing
- Billing toggle: segmented control (inactive soft gray pill, active lime pill)
- Plan cards: white, equal height, title + short blurb + large price + credit meta + black full-width “Get started” + checklist with coral ticks
- Promo duo cards (free vs paid) can sit on soft gradient fills instead of pure white
- Enterprise band: muted full-width bar, left copy + right black “Contact sales”

### Product story panel
Numbered step label (“01 / 04”), long-form black body, black CTA; adjacent dark app chrome screenshot with colorful column tags—the only place multi-hue UI colors flood in, and they stay *inside* the product frame.

### Empty / error
404: same gradient stage language, left-aligned stack—small “ERROR: 404”, huge black sentence, quiet gray support, single black “Back to Homepage” pill. No illustration clutter.

### Buttons
- **Primary in-content**: solid black, white label, full pill
- **Header invite**: soft lime fill, dark label, full pill
- **Chips**: white/soft fill, thin border or light gray edge, full pill
- **Icon submit**: solid orange circle

## Responsive behavior

Captures are wide desktop viewports only (roughly 1712–2048×719–1314). Treat multi-column pricing and side-by-side product panels as **desktop compositions**. On narrower widths, stack plan cards, collapse the five-up row, and keep the floating nav/CTA pattern rather than inventing a heavy app bar. No mobile breakpoint metrics were recorded.

## Practical guidance

**Do**
- Lead with one short black display line and one gray sentence
- Put the primary action in a **black pill**; keep the header invite in **lime**
- Stage content on soft pastel gradients and white cards
- Use orange only for brand mark / submit / checklist ticks
- Show the product UI as a framed dark surface against the light marketing shell
- Prefer hairline card structure over drop shadows

**Don’t**
- Fill the page with saturated brand color blocks
- Use heavy shadows, glassmorphism stacks, or dense dashboard chrome on marketing
- Mix many CTA colors—black + lime + orange is enough
- Shrink display type into a timid H2; the brand needs confident scale
- Invent photographic hero imagery when a prompt field or product frame will do

## Scope note

Six marketing captures on base44.com: home (multiple hero/product states), full pricing, and a 404. Structured color roles only locked black and gray text; pastel washes, lime header CTA, and orange brand accents are visual readings from those screenshots. No declared webfonts or shadow/gradient tokens—type family and exact gradient stops should be treated as interpretive. App product chrome appears only as embedded previews, not as a full app-shell capture.

## Captured pages

[![Home — prompt hero on sky-to-peach wash](https://pin.fontofweb.com/7405?format=jpg)](https://design.withfudge.com/share/pin-7405)

[Home — prompt hero on sky-to-peach wash](https://design.withfudge.com/share/pin-7405)

[![Home — product story split panel](https://pin.fontofweb.com/7406?format=jpg)](https://design.withfudge.com/share/pin-7406)

[Home — product story split panel](https://design.withfudge.com/share/pin-7406)

[![Home — free vs paid promo cards](https://pin.fontofweb.com/7409?format=jpg)](https://design.withfudge.com/share/pin-7409)

[Home — free vs paid promo cards](https://design.withfudge.com/share/pin-7409)

[![Pricing — five-tier plan grid](https://pin.fontofweb.com/9559?format=jpg)](https://design.withfudge.com/share/pin-9559)

[Pricing — five-tier plan grid](https://design.withfudge.com/share/pin-9559)

[![404 — gradient empty state](https://pin.fontofweb.com/9558?format=jpg)](https://design.withfudge.com/share/pin-9558)

[404 — gradient empty state](https://design.withfudge.com/share/pin-9558)

## Colors

- `#000000`
- `#878787`
- `#ffffff`
- `#e8f5a0`
- `#f97316`
- `#e8eef0`

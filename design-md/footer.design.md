# How footer.design is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/footer.design-design)

Last updated: 2026-07-28

## Design character

footer.design is a **dark gallery of website footers** — a reference product that treats the bottom of the page as the subject. The shell is almost pure black with quiet gray type; the content is a dense masonry of real site footers, each shown as a rounded preview card. The mood is archival, designer-facing, and slightly editorial: labels like “Grid Footers,” category chips, and short case blurbs sit beside large cropped footer specimens rather than marketing hero copy.

What should survive adaptation:

- A **near-black canvas** with soft charcoal cards and one high-contrast accent only when the specimen itself brings it (e.g. acid lime “INVERSA” wordmark).
- **Footer-as-artifact** presentation: full-width or multi-column footer crops inside rounded frames, not tiny thumbnails.
- Quiet **gallery chrome** — small sans labels, pill “View Website” actions, hairline dividers — that never competes with the specimen.
- Generous **card radius** and restrained spacing so the grid feels collectible, not dashboard-like.

## Foundations

### Color

No structured role palette was recorded. From the captures, the working system is:

| Role | Hex (approx.) | Where it shows |
|------|----------------|----------------|
| Canvas | `#0b0b0b` – `#121212` | Page field behind the grid |
| Card / specimen well | `#141414` – `#1a1a1a` | Footer preview panels |
| Primary text | `#f2f2f2` | Titles, nav |
| Secondary text | `#8a8a8a` | Meta, descriptions, chips |
| Hairline | `#2a2a2a` | Card edges, column rules inside dark footers |
| Specimen accent | e.g. `#d8ff4a` lime | Only inside featured footers (Inversa), not chrome |

Relationships that matter:

- The product chrome stays **monochrome**; color is borrowed from the footers on display.
- Contrast is high for titles, medium for body, low for structural lines — a museum-label hierarchy.

### Typography

No declared families were recorded. Visually the product UI is a single **neutral geometric sans**.

Observed ladder (structured measurements):

| Role | Size | Weight | Line height | Notes |
|------|------|--------|-------------|-------|
| Body / card copy | 18px | 400 | 25.2px | Dominant reading size in grid |
| Meta / chips | 14px | 500–600 | ~14–21px | Labels, filters |
| Section title | 32px | 600 | 32px | Style names (“Grid Footers”) |

Headlines on specimens (huge wordmarks like INVERSA) belong to the source brands, not the product type system.

### Spacing and layout

Recurring product rhythm:

- Grid card padding clusters around **40px** on the style index and **13–16px** on tighter site detail views.
- Cards use very large corner rounding (structured ~1600px effectively full-pill/soft rectangle on some chrome).
- Layout is a **multi-column masonry/grid of footer crops** with a left narrative column on detail pages (“Inversa” blurb + View Website).

## Visual language

- **Shape:** soft rounded rectangles for cards and CTAs; specimen footers keep their own geometry (3-column contact grids, full-bleed wordmarks).
- **Borders:** hairline 1px solid dividers inside dark footers and between gallery modules.
- **Imagery:** the “image” is the footer itself — often typographic or logo-led, occasionally photographic only if the source site is.
- **Motion:** not established from stills.

## Components and states

Recurring UI:

1. **Style index header** — title + short definition of the footer pattern.
2. **Specimen card** — cropped live footer, sometimes with multi-column CONTACT / CONNECT / SUBSCRIBE blocks.
3. **Detail split** — left: brand name, paragraph, pill “View Website →”; right: stacked footer modules.
4. **Mega wordmark strip** — full-width brand lockup under the footer grid (Inversa lime on black).
5. **Quiet footer chrome** — copyright, privacy, “Crafted by…” micro links.

Visible states are default gallery and hover is not evidenced in stills; CTAs read as static pills.

## Responsive behavior

Captures span ~1050–1710px wide viewports. On narrower frames the detail page stacks narrative above or beside a single footer stack; the style index keeps multi-card density where width allows. No separate mobile type tokens were measured beyond the same 14/18px UI sizes.

## Practical guidance

**Preserve**

- Black gallery field and monochrome chrome.
- Footer specimens as large, readable artifacts.
- 18px body as the default reading size in the product UI.
- One accent only when it comes from the featured brand.

**Avoid**

- Turning the shell into a bright marketing site.
- Over-labeling cards with badges that fight the specimen.
- Inventing a colorful product palette unrelated to the footers.
- Tight dashboard density; this is a catalog, not an admin table.

## Scope note

Studied three captures: Grid Footers index (`/styles/grid`), Inversa site detail (`/sites/inversa`), and Mesh Optical detail (`/sites/mesh-optical`). Structured color roles, fonts, shadows, and media metadata were largely unavailable — color and material notes lean on screenshot reading. Spacing observations on the index were partially truncated.

## Captured pages

[![Grid Footers index](https://pin.fontofweb.com/7028?format=jpg)](https://design.withfudge.com/share/pin-7028)

[Grid Footers index](https://design.withfudge.com/share/pin-7028)

[![Inversa specimen detail](https://pin.fontofweb.com/7029?format=jpg)](https://design.withfudge.com/share/pin-7029)

[Inversa specimen detail](https://design.withfudge.com/share/pin-7029)

[![Mesh Optical specimen](https://pin.fontofweb.com/7027?format=jpg)](https://design.withfudge.com/share/pin-7027)

[Mesh Optical specimen](https://design.withfudge.com/share/pin-7027)

## Colors

- `#0b0b0b`
- `#141414`
- `#1a1a1a`
- `#2a2a2a`
- `#8a8a8a`
- `#f2f2f2`
- `#d8ff4a`

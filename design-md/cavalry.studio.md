# How cavalry.studio is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/cavalry.studio-design)

Last updated: 2026-07-28

## Design character

Cavalry presents itself as a **professional 2D motion tool that markets like a premium creative app**: near-black full-bleed canvases, oversized white headlines, and a single electric purple used sparingly for primary actions. The product UI itself becomes the hero art—timeline panels, node graphs, and viewport chrome sit behind or beside marketing copy rather than being illustrated abstractly.

What should survive adaptation:

- A **dark, high-contrast shell** where interface chrome stays quiet and type/CTA carry the brand.
- **One vivid accent** (purple) reserved for primary downloads and key interactive moments.
- **Product-screenshot-as-hero** composition: real tool surfaces, not stock metaphor imagery.
- Soft, modern rounding on buttons and cards without going fully pill-shaped everywhere.

## Foundations

### Color

Measured roles and visual reading of the home captures:

| Role | Value | Notes |
|------|-------|-------|
| Canvas / page | near `#0a0a0a`–`#111111` | Continuous dark field |
| Primary text | `#ffffff` | Headlines and key UI labels |
| Accent / primary CTA | `#6437ff` | Solid filled buttons (“Download Free”) |
| Secondary surfaces | charcoal panels slightly above canvas | Nested product chrome |

Secondary labels and muted body copy read as light gray on dark (visual). Do not invent a large rainbow palette—the system is essentially monochrome + one accent.

### Typography

Declared font families were not captured. Visually and by measured sizes, the hierarchy is a clean **geometric sans** stack:

- Display / hero: ~**64px**, weight 400, tight line-height (~70px) — short marketing lines
- Section heads: ~**32px**, 400–600
- Subheads / lead: ~**21–24px**
- Body / UI: ~**14–16px**, 400–600, ~22–24px line-height
- Small labels: ~**13–14px**

Weight jumps (400 → 600) matter more than size jumps for mid-level emphasis. Tracking stays neutral.

### Spacing and layout

Recurring measurements:

- Section vertical padding often **80px**, with tighter **24–40px** blocks inside
- Horizontal content padding ~**40px** (sometimes 16–24px in denser strips)
- Side margins around **212px** on wide captures (centered content column)
- Small stack gaps **8–16px** between label groups

Layout is a classic marketing scroll: hero → feature sections → product proof, single column with full-width media.

## Visual language

- **Radii:** buttons and cards cluster around **16–22px** (occasional 24px). Friendly but still “tool,” not consumer-playful.
- **Borders:** 1px solid edges appear on panels and chrome separators.
- **Shadows:** not a defining layer; depth comes from value contrast and overlapping product screenshots.
- **Imagery:** live product UI (timelines, graphs, 3D/2D viewports). Screenshots are large, slightly perspectival or layered, never cropped into tiny icons only.
- **Motion:** not established from stills; the brand implies motion through tool content, not decorative UI animation claims.

## Components and states

Recurring UI:

1. **Primary pill CTA** — solid `#6437ff`, white label, generous horizontal padding, ~16–22px radius.
2. **Text nav** — small white/gray links in a slim top bar; logo left, actions right.
3. **Hero stack** — eyebrow or short line → massive headline → supporting sentence → CTA row.
4. **Feature sections** — large title + paragraph + product still; alternating emphasis.
5. **Card grids** — rounded containers (~16px) for feature or template groups.

Only resting/default states are visible; hover/focus were not captured.

## Responsive behavior

Captures span roughly **1425–1712px** widths on the same `/en/` path. The system stays single-column marketing with centered content; side margins shrink as width drops. No separate mobile breakpoint captures were in this set—do not invent phone layouts.

## Practical guidance

**Preserve**

- Dark canvas + white type + single purple CTA
- Product UI as primary imagery
- Large display type with restrained body sizes
- Soft 16–22px rounding on interactive chrome

**Avoid**

- Multi-color gradients as brand chrome
- Light-mode default without a deliberate dual theme
- Sharp zero-radius enterprise cards that fight the product’s softer UI
- Crowding the hero with more than one strong accent color

## Scope note

Studied seven home captures of `https://cavalry.studio/en/` at desktop widths. Color roles, spacing, radii, and borders were measured; declared type families, palette swatches, and true multi-page IA were not available. Inner docs/pricing pages were not in the set.

## Captured pages

[![Home hero — purple CTA over tool UI](https://pin.fontofweb.com/8893?format=jpg)](https://design.withfudge.com/share/pin-8893)

[Home hero — purple CTA over tool UI](https://design.withfudge.com/share/pin-8893)

[![Home — mid-page features](https://pin.fontofweb.com/8894?format=jpg)](https://design.withfudge.com/share/pin-8894)

[Home — mid-page features](https://design.withfudge.com/share/pin-8894)

[![Home — capability strip](https://pin.fontofweb.com/8895?format=jpg)](https://design.withfudge.com/share/pin-8895)

[Home — capability strip](https://design.withfudge.com/share/pin-8895)

[![Home — rounded cards ~16px](https://pin.fontofweb.com/8896?format=jpg)](https://design.withfudge.com/share/pin-8896)

[Home — rounded cards ~16px](https://design.withfudge.com/share/pin-8896)

[![Home — wider section pad](https://pin.fontofweb.com/8897?format=jpg)](https://design.withfudge.com/share/pin-8897)

[Home — wider section pad](https://design.withfudge.com/share/pin-8897)

[![Home — product detail](https://pin.fontofweb.com/8898?format=jpg)](https://design.withfudge.com/share/pin-8898)

[Home — product detail](https://design.withfudge.com/share/pin-8898)

## Colors

- `#0a0a0a`
- `#111111`
- `#ffffff`
- `#6437ff`
- `#1a1a1a`
- `#2a2a2a`

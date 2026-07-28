# How braintrust.dev is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/braintrust.dev-design)

Last updated: 2026-07-28

## Design character

Braintrust balances **developer seriousness** with memorable brand flashes: a vivid **chartreuse** (`#ccff00`) and an **electric blue** (`#2c1fea` family) against black, white, and zinc grays (`#71717a`). Home and pricing move between light content bands and deep blue brand fields (footer/hero moments), with card-heavy layouts, 16px radii, and clean sans type.

What should survive adaptation:

- **Chartreuse + electric blue** as signature accents (use sparingly)
- **Zinc/gray secondary text** on light surfaces
- **Card-heavy** product storytelling
- **16px rounding** as the default soft geometry
- **Dark and light bands** in one system, not two unrelated sites

## Foundations

### Color

| Role | Hex | Use |
|------|-----|-----|
| Text on dark | `#ffffff` | Headlines on dark/blue fields |
| Accent A | `#ccff00` | Chartreuse highlight |
| Accent B | `#2c1fea` | Electric blue brand field / links |
| Text secondary | `#71717a` | Muted body on light |
| Ink on light | `#000000` | Primary light-mode text |

### Typography

- Body **16/24** regular dominant
- Lead **18/28**, **20/28**
- Display **48/48** regular or 300; **36/40** for mid display
- Subheads **24/28.8–32** (400/600)
- Small **12–14/16–20**

Large type is calm and geometric; chartreuse draws the eye more than weight extremes.

### Spacing and layout

- Horizontal padding **32px** common; **16px** in denser UI
- Section vertical padding **128px** on big bands; **32–48px** inside cards
- Pricing and home share card grids and comparison structures
- Footer can become a full **blue brand slab** with multi-column links and large wordmark

### Radii and shadows

- Radii: **16px** default; also 6, 12, 32; rare full pills
- Light shadows: `0 2px 4px -2px` and `0 4px 6px -1px`
- 1px borders on cards/tables

## Visual language

- Flat surfaces, occasional soft shadow
- Product charts/observability visuals and crisp icons
- Geometric logo mark + wordmark lockup
- Tick marks / ruler motifs appear as brand texture on blue fields (visual)

## Components and states

- Marketing nav + CTA
- Hero with strong claim (“Trace everything”) and email capture
- Feature cards and logo walls
- Pricing tiers/tables
- Blue footer brand slab with link columns
- Buttons: solid brand or high-contrast on accent fields

## Responsive behavior

Eight captures across `/` and `/pricing` from ~1326–1688px. Layout stays desktop marketing; cards should wrap, while blue footer columns stack. Keep accent sparseness when compressing.

## Practical guidance

**Preserve**: chartreuse + blue sparingly, zinc secondary, 16px cards, dual light/dark bands, geometric wordmark presence.

**Avoid**: turning the whole page chartreuse, muddy mid-blues, heavy skeuomorphic charts, or generic purple AI gradients.

## Scope note

Eight captures of home and pricing. Color roles were relatively rich; declared font families were not available.

## Captured pages

[![Home — AI observability hero](https://pin.fontofweb.com/8909?format=jpg)](https://design.withfudge.com/share/pin-8909)

[Home — AI observability hero](https://design.withfudge.com/share/pin-8909)

[![Home — Trace everything + blue footer](https://pin.fontofweb.com/8905?format=jpg)](https://design.withfudge.com/share/pin-8905)

[Home — Trace everything + blue footer](https://design.withfudge.com/share/pin-8905)

[![Home — alternate scroll](https://pin.fontofweb.com/8903?format=jpg)](https://design.withfudge.com/share/pin-8903)

[Home — alternate scroll](https://design.withfudge.com/share/pin-8903)

[![Pricing — full layout](https://pin.fontofweb.com/8907?format=jpg)](https://design.withfudge.com/share/pin-8907)

[Pricing — full layout](https://design.withfudge.com/share/pin-8907)

[![Pricing — accent emphasis](https://pin.fontofweb.com/8906?format=jpg)](https://design.withfudge.com/share/pin-8906)

[Pricing — accent emphasis](https://design.withfudge.com/share/pin-8906)

[![Pricing — short viewport](https://pin.fontofweb.com/8908?format=jpg)](https://design.withfudge.com/share/pin-8908)

[Pricing — short viewport](https://design.withfudge.com/share/pin-8908)

## Colors

- `#ccff00`
- `#2c1fea`
- `#ffffff`
- `#000000`
- `#71717a`

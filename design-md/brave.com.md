# How brave.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/brave.com-design)

Last updated: 2026-07-28

## Design character

Brave markets a privacy-first browser with confident, slightly playful energy: enormous display type (up to ~70–120px), a warm orange brand presence beside cooler blue accents (`#434fcf`), pill-shaped CTAs, and illustration-led product scenes on a light canvas. The Search API pages reuse the same geometry with more developer-facing clarity.

What should survive adaptation:

- **Monumental display type** for consumer claims
- **Pill CTAs** and large rounded cards (**16px**, pills at 1000+)
- **Orange + blue accent pairing** without muddying either
- **Card-heavy feature rows** with soft shadows (`0 8px 40px`)
- **Illustration + product UI** as co-heroes

## Foundations

### Color

| Role | Hex | Use |
|------|-----|-----|
| Accent blue | `#434fcf` | Links, secondary brand moments |
| Text primary | `#1c1c1d` | Core ink |
| Surfaces | `#ffffff` | Cards/page |
| Brand orange | visible in logo/CTAs | Primary consumer energy |

### Typography

- Mega display: **120/103** weight 500; **70/70** weight 500
- Section heads: **30/40** weight 600
- Body: **16/24** regular (dominant); medium 16 for emphasis
- Lead: **20/30** regular or semibold
- Small UI: 12–14px semibold/regular

Display is intentionally oversized and tight—Brave shouts the value prop, then settles into calm 16px body.

### Spacing and layout

- Gaps/column-gaps **24–32px**, sometimes **42px**
- Section margin-top **40–80px**
- Card padding ~**28.8px** all sides
- Home and API pages share card grids and bordered regions

### Radii, borders, shadows

- Radii **16px** cards; **1000/9999** pills
- Borders 1–2px solid separating surfaces
- Soft ambient shadow `0 8px 40px` under key cards/illustrations

## Visual language

- Light mode consumer marketing
- Lion logo mark + wordmark
- Illustrated heroes and browser chrome mockups
- Rounded, friendly, high energy without cluttered gradients everywhere

## Components and states

- Top nav with Download/primary pill
- Mega-type hero + supporting line + dual CTAs
- Feature cards in multi-column grids
- API page: developer headline, code/product cards, plan modules
- Footer multi-column (standard marketing)

## Responsive behavior

Widths ~1484–1712px across `/` and `/search/api/`. On smaller screens, mega type must scale down hard while pills and 16px cards remain; feature grids collapse to 1–2 columns.

## Practical guidance

**Preserve**: oversized display, orange+blue accents, pills, 16px cards, 8/40 shadows, illustration+UI pairing.

**Avoid**: tiny timid headlines, enterprise gray-only austerity, sharp 0-radius cards, or dropping orange entirely (loses Brave identity).

## Scope note

Five captures: three home, two Search API. Color roles partial but blue/ink measured; orange confirmed visually via brand chrome.

## Captured pages

[![Home — browser that puts you first](https://pin.fontofweb.com/9441?format=jpg)](https://design.withfudge.com/share/pin-9441)

[Home — browser that puts you first](https://design.withfudge.com/share/pin-9441)

[![Home — alternate wide pass](https://pin.fontofweb.com/9439?format=jpg)](https://design.withfudge.com/share/pin-9439)

[Home — alternate wide pass](https://design.withfudge.com/share/pin-9439)

[![Home — mid width](https://pin.fontofweb.com/9440?format=jpg)](https://design.withfudge.com/share/pin-9440)

[Home — mid width](https://design.withfudge.com/share/pin-9440)

[![Search API](https://pin.fontofweb.com/9436?format=jpg)](https://design.withfudge.com/share/pin-9436)

[Search API](https://design.withfudge.com/share/pin-9436)

[![Search API — shorter viewport](https://pin.fontofweb.com/9437?format=jpg)](https://design.withfudge.com/share/pin-9437)

[Search API — shorter viewport](https://design.withfudge.com/share/pin-9437)

## Colors

- `#434fcf`
- `#1c1c1d`
- `#ffffff`
- `#fb542b`

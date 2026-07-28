# How fourmula.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/fourmula.ai-design)

Last updated: 2026-07-28

## Design character

Fourmula.ai is a **soft, product-demo marketing site** for AI product imagery. The system feels airy and consumer-SaaS: pale canvas, oversized rounded media stages, calm sans headlines, and pillowy cards that showcase generated product shots. It is less dashboard and more **showroom** — generous whitespace, large radii (~24–48px), and UI that stays out of the way of the pictures.

What should survive adaptation:

- Pale neutral canvas with **very large rounded media frames**.
- Calm geometric sans; working UI ~16–17px, display spikes near ~52px.
- Soft radius language (≈32–48px) on cards and stages.
- Product photography / AI renders as hero content.

## Foundations

### Color

No structured role colors. Working palette from screenshots:

| Role | Approx | Use |
|------|--------|-----|
| Canvas | `#f5f5f7` – `#fafafa` | Page field |
| Surface | `#ffffff` | Cards, stages |
| Ink | `#1a1a1a` | Headlines |
| Muted | `#6b6b6b` | Body, labels |
| Hairline | `#e8e8ed` | Quiet dividers |

### Typography

Families undeclared. Measured clusters:

| Role | Size | Weight | LH |
|------|------|--------|-----|
| UI / body | ~16–17px | 400–500 | ~20px |
| Small UI | ~14–16px | 500 | ~16–24px |
| Display | ~52px | 500 | ~54px |
| Subhead | ~24px | 500 | ~36px |

### Spacing and layout

- Card padding often mirrors radius (~32–80px on large stages).
- Home is a vertical stack of demo sections, each a big rounded stage.
- Wide side margins; centered showroom, not full-bleed editorial.

## Visual language

- Extra-soft corners dominate (structured ~24–48px).
- Minimal borders; separation via soft cards or whitespace.
- Imagery: AI product shots inside soft stages.

## Components and states

1. Marketing header with simple nav + CTA.
2. Hero claim + primary action above a large product stage.
3. Feature sections as rounded media+copy bands.
4. Quiet proof/logo rows.

Only resting marketing states observed.

## Responsive behavior

Captures include shorter viewports (~629–976px tall) and full desktop. Soft radius and stacked sections collapse cleanly; keep 16–24px working type.

## Practical guidance

**Preserve** soft showroom radii, pale canvas, product-first stages, calm sans hierarchy.  
**Avoid** sharp admin UI, dense tables, dark cyber aesthetics, tiny 8px cards.

## Scope note

Eight captures, all on `/`. Structured colors/fonts unsupported; palette from screenshots. Near-duplicate home scrolls — one landing system.

## Captured pages

[![Home product stage](https://pin.fontofweb.com/8674?format=jpg)](https://design.withfudge.com/share/pin-8674)

[Home product stage](https://design.withfudge.com/share/pin-8674)

[![Short viewport hero](https://pin.fontofweb.com/8672?format=jpg)](https://design.withfudge.com/share/pin-8672)

[Short viewport hero](https://design.withfudge.com/share/pin-8672)

[![Dense card grid moment](https://pin.fontofweb.com/8675?format=jpg)](https://design.withfudge.com/share/pin-8675)

[Dense card grid moment](https://design.withfudge.com/share/pin-8675)

[![Alternate home crop](https://pin.fontofweb.com/8673?format=jpg)](https://design.withfudge.com/share/pin-8673)

[Alternate home crop](https://design.withfudge.com/share/pin-8673)

## Colors

- `#f5f5f7`
- `#ffffff`
- `#1a1a1a`
- `#6b6b6b`
- `#e8e8ed`

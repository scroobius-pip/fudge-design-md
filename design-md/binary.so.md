# How binary.so is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/binary.so-design)

Last updated: 2026-07-28

## Design character

Binary feels like modern B2B SaaS done with discipline: white canvas, slate-ink text, one deep navy accent (`#0f172a`), and a slate secondary (`#586a84`). The homepage sells speed and simplicity through large display headlines, airy section padding, rounded cards, and product UI mockups rather than loud illustration systems.

What should survive adaptation:

- **Light mode first** with near-black primary text
- **Slate secondary** for supporting copy and labels
- **Deep navy as the serious accent** (fills, emphasis), not rainbow gradients
- **Large section breathing room** (64px+ vertical padding)
- **Soft elevation** (8px blur shadows) on key product cards

## Foundations

### Color

| Role | Hex | Use |
|------|-----|-----|
| Accent / ink | `#0f172a` | Primary emphasis, dark fills |
| Text primary | `#000000` | Headlines and core UI copy |
| Text secondary | `#586a84` | Supporting body, meta |
| Canvas | white (visual) | Page background |
| Surfaces | white cards on light gray bands (visual) | Feature modules |

### Typography

No declared family captured. Visual hierarchy:

- **Display**: ~52px weight 500, line-height ~62px; occasional ~44px weight 600
- **Section heads**: ~30px weight 500 / 36px lh
- **Lead body**: 18–20px regular, ~28px lh
- **Body / UI**: 16px / 24px regular (dominant)
- **Small / meta**: 14–15px medium

The ladder is classic SaaS: one strong display size, clear section heads, readable 16–18 body.

### Spacing and layout

- **64px** top padding appears constantly — large section rhythm
- Horizontal padding **24–32px** inside components
- Wide side margins (~260–416px observed on centered columns) imply a **centered content column** on large screens
- **160px** margin-bottom on some major blocks — very open vertical pacing
- Density: moderate; cards and proof rows without cramming

### Radii, borders, shadows

- Radii cluster around **4 / 6 / 8px** — slightly rounded, not pill-everything
- 1px solid borders on card edges
- Soft shadows: `0 8px 10px` and deeper `0 8px 30px` on hero/product frames

## Visual language

- Flat white/gray surfaces with restrained elevation
- Product screenshots and UI chrome as the main imagery
- Rounded rectangles; occasional softer chips
- Minimal decorative linework; clarity over ornament

## Components and states

- **Marketing header** with product nav and primary CTA
- **Hero**: big claim + supporting line + dual CTAs
- **Logo/social proof row**
- **Feature sections**: headline + body + card or screenshot
- **Pricing-adjacent modules** (taxonomy flags a pricing posture even on home captures)
- **Cards** with 1px border and light shadow

## Responsive behavior

Captures at **1488** and **2048** wide. Layout stays multi-column marketing on large screens. Treat the system as desktop-first marketing; collapse feature rows to single column on small screens without changing the type ladder ratios.

## Practical guidance

**Preserve**: white canvas, slate secondary, navy accent, 16/24 body, ~52px display, 6–8px radii, generous 64px section padding.

**Avoid**: dark-mode default, neon accents, tiny dense admin tables on marketing pages, sharp 0-radius enterprise austerity, or playful sticker illustrations.

## Scope note

Three homepage captures of `binary.so` (`/`). Color roles and spacing/radius/shadow observations supported the foundations; font family names were not declared in the capture data.

## Captured pages

[![Home — standard marketing viewport](https://pin.fontofweb.com/7683?format=jpg)](https://design.withfudge.com/share/pin-7683)

[Home — standard marketing viewport](https://design.withfudge.com/share/pin-7683)

[![Home — wide viewport product story](https://pin.fontofweb.com/7681?format=jpg)](https://design.withfudge.com/share/pin-7681)

[Home — wide viewport product story](https://design.withfudge.com/share/pin-7681)

[![Home — alternate wide pass](https://pin.fontofweb.com/7682?format=jpg)](https://design.withfudge.com/share/pin-7682)

[Home — alternate wide pass](https://design.withfudge.com/share/pin-7682)

## Colors

- `#0f172a`
- `#000000`
- `#586a84`
- `#ffffff`

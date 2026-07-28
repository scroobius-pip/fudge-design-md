# How classy.md is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/classy.md-design)

Last updated: 2026-07-28

## Design character

Classy.md presents as a **typographic monochrome product**: black background, white text, and almost nothing else. The brand promise is tasteful writing software, so the marketing/UI surface removes decoration until only measure, weight, and contrast remain. It should feel like a premium notes app intro—quiet, intentional, slightly severe.

What should survive adaptation:

- **Black canvas + white primary type**
- **Narrow centered reading column** with modest horizontal padding
- Hairline separators instead of cards/shadows
- Typography-led hierarchy at small display scales (not billboard sizes)

## Foundations

### Color

Visual + structural:

| Use | Value |
|-----|-------|
| Canvas | `#000000` / near-black |
| Primary text | `#ffffff` |
| Secondary | mid gray ~`#a3a3a3` |
| Rules | low-contrast gray lines |

No colorful accent measured—if a CTA exists, keep it high-contrast monochrome (white fill or white outline) rather than introducing a random hue.

### Typography

Measured styles are compact:

- Body/UI ~**16px**, 400–600, line-height ~**28px** (airy for dark-theme reading)
- Small ~**14px**
- No huge marketing display sizes observed—hierarchy is weight and spacing, not 72px heroes

Family not declared; visually a clean grotesque/sans.

### Spacing and layout

- Horizontal padding **24px** (sometimes 12–16px in nested chrome)
- Vertical padding/margins **28px** repeating—very regular rhythm
- Large side margins (~**502px** each at 1712px width) imply a **~700px** content measure
- Bottom hairline rules structure sections

## Visual language

- Radii not observed as a system—expect sharp or minimally rounded controls
- 1px bottom borders as primary dividers
- No shadow language
- Imagery absent or minimal; words are the interface

## Components and states

1. **Centered column shell** — the primary layout object
2. **Text blocks** — title/body with 28px rhythm
3. **Hairline-separated lists or meta rows**
4. **Minimal nav/chrome** tucked out of the way

States beyond default not captured.

## Responsive behavior

Both captures are 1712px wide. The large side margins suggest the column would simply gain/lose margin as width changes; no mobile evidence.

## Practical guidance

**Preserve**

- Severe monochrome
- Narrow measure + 28px vertical rhythm
- Hairlines over cards
- Quiet motion (if any)

**Avoid**

- Colorful SaaS marketing patterns
- Wide multi-column feature forests
- Heavy gradients and glass
- Oversized display type that breaks the writing-tool calm

## Scope note

Two home captures only. Spacing and borders clear; color roles/fonts/radii weakly instrumented—palette from visual reading. Product editor deep-links not in set.

## Captured pages

[![Home — dark writing canvas](https://pin.fontofweb.com/10089?format=jpg)](https://design.withfudge.com/share/pin-10089)

[Home — dark writing canvas](https://design.withfudge.com/share/pin-10089)

[![Home — alternate capture](https://pin.fontofweb.com/10090?format=jpg)](https://design.withfudge.com/share/pin-10090)

[Home — alternate capture](https://design.withfudge.com/share/pin-10090)

## Colors

- `#000000`
- `#0a0a0a`
- `#ffffff`
- `#a3a3a3`
- `#171717`

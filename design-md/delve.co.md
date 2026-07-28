# How delve.co is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/delve.co-design)

Last updated: 2026-07-28

## Design character

Delve’s marketing site sells automated compliance with a **cinematic dark stage**: a full-bleed vertical gradient from deep teal through black into hot orange, oversize white headlines, and a single loud CTA. The product promise is serious (SOC 2, HIPAA, GDPR), but the visual system feels more like a launch film than a paperwork portal — high contrast, sparse copy, and a geometric color field that doubles as brand texture.

What should survive adaptation:

- **Dark-first marketing** with white type and one saturated accent action.
- A **teal→orange vertical bar gradient** as the signature backdrop (not a flat fill).
- **Monumental headline type** that can dominate half the viewport.
- A **strict nav + dual CTA** pattern: ghost Login, solid Book a Demo.

## Foundations

### Color

No structured palette roles were captured. Visual reading from the home hero and footer:

- **Canvas**: near-black to true black under the gradient mesh.
- **Gradient field**: cool teal/cyan on the left, warming through brown-black midtones into vivid orange on the right, rendered as tall vertical strips with a subtle grid of framework badges.
- **Primary text**: pure white for headlines and nav labels.
- **Secondary text**: soft light gray for supporting sentences and footer meta.
- **Primary action**: saturated orange filled button on dark heroes (“Book a Demo”).
- **Inverse action**: white filled button on dark header and on teal promo tiles; black label text.
- **Footer surfaces**: charcoal/black panels with 1px hairline dividers; one teal gradient “Bottom Line” promo cell.

Treat orange as the only aggressive accent; everything else stays monochrome or gradient-bound.

### Typography

Family names were not captured. The face reads as a modern **grotesk sans**, tight and confident.

| Role | Observed size / weight | Behavior |
| --- | --- | --- |
| Hero display | ~140px / 700 (one capture); ~64px / 700 on alternate hero | One or two short lines, near-solid line-height |
| Body | 16px / 400, lh ~24 | Centered subcopy under heroes |
| UI / nav | 14–16px / 400–600 | Header links, footer lists |
| Lead | 18–20px / 400 | Occasional larger supporting lines |

Display type is the brand. Body never competes with it.

### Spacing and layout

- Section padding clusters at **48px** and large **112–128px** vertical rhythm.
- Horizontal padding common at **48 / 80 / ~85px**.
- Hero is full-viewport: headline optically centered, CTA under subcopy, trust line near the fold.
- Footer is a multi-column grid (logo/address | link groups | promo tile) separated by light rules.
- Framework badges sit in a loose lower-right grid over the gradient rather than in a tight card row.

## Visual language

- **No measured corner radii** — buttons and panels read as small-radius or near-sharp rectangles, not pills.
- **1px solid borders** divide footer columns and outline badge cells; no soft shadow language observed.
- **Gradient + grid** is the distinctive motif: vertical color bars, faint cell lines, certification marks floating in cells (SOC 2, HIPAA, GDPR, ISO, PCI-DSS).
- Imagery is minimal; brand energy comes from color field and type, not photography.

## Components and states

1. **Global header** — black/translucent bar, logo left, three dropdown groups center, Login text + white “Book a Demo” right.
2. **Hero** — oversized white headline, one sentence subcopy, single primary button (orange or white depending on slide).
3. **Framework badge cells** — small labeled marks in the gradient grid.
4. **Footer mega-grid** — company blurb, link columns, certifications row, gradient promo with inverse CTA.
5. **Legal strip** — tiny copyright + policy links + social icons on pure black.

Visible states in stills: default marketing rest. Do not invent hover/focus behavior beyond the clear default vs. filled button contrast.

## Responsive behavior

Only wide desktop viewports (~1712×1314) were captured, twice (hero variant + footer-forward view). Assume the gradient hero and multi-column footer are desktop-first; stack behavior on small screens was not observed.

## Practical guidance

**Preserve**

- Teal-to-orange vertical drama behind sparse white type.
- One primary conversion verb everywhere (“Book a Demo”).
- Huge headlines with short subcopy — no long paragraphs in the hero.
- Footer as an information dense counterweight to the airy hero.

**Avoid**

- Light-mode default marketing; this system is built for dark.
- Multiple competing accent colors (keep orange exclusive for action).
- Card carousels or illustration-heavy storytelling that dilute the gradient brand field.
- Small, timid headlines — scale is part of the identity.

## Evidence scope

Two homepage viewport captures only (hero-focused and footer-focused). No in-app product UI, no mobile breakpoints, and no measured color tokens — accent and surface colors above are visual readings from the screenshots.

## Captured pages

[![Home hero — compliance in days](https://pin.fontofweb.com/8218?format=jpg)](https://design.withfudge.com/share/pin-8218)

[Home hero — compliance in days](https://design.withfudge.com/share/pin-8218)

[![Home footer — mega grid and promo tile](https://pin.fontofweb.com/8219?format=jpg)](https://design.withfudge.com/share/pin-8219)

[Home footer — mega grid and promo tile](https://design.withfudge.com/share/pin-8219)

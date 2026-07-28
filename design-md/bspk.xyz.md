# How bspk.xyz is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/bspk.xyz-design)

Last updated: 2026-07-28

## Design character

BSPK presents client work as a **quiet, monochrome editorial case study**. The Anthropic page is almost entirely black-on-white: huge serif display headlines, thin hairline rules, and long vertical scroll of narrative blocks. Personality comes from typography scale and pacing, not color or decoration.

What should survive adaptation:
- **Editorial restraint** — near-zero chrome; content is the interface
- **Extreme type contrast** — display headlines that dominate the viewport, then calm body reading
- **Hairline structure** — thin rules and generous whitespace instead of cards or fills
- **Monochrome palette** with rare use of brand-mark color only in logos/marks

## Foundations

### Color
Measured color roles were not retained for these captures. Visually the page is a **white canvas**, **near-black text**, light gray secondary labels, and hairline gray rules. Logos (Anthropic orange mark, BSPK wordmark) supply the only chromatic accents. Treat the system as monochrome UI with brand marks as exceptions.

### Typography
Declared families were not captured. Visually:
- **Display**: large transitional/modern serif for section titles (“Challenge.”, “Approach.”, “Impact.”) and the hero line — high contrast, generous tracking on some lines
- **Body**: readable serif or humanist text at roughly 16px with ~1.8 line-height for long case-study copy
- **UI/meta**: small sans labels for navigation and captions
Weights cluster around regular (400) for body; display reads heavier by size alone.

### Spacing and layout
- Single centered column for narrative; wide side margins on large viewports (~2552px captures)
- Section rhythm driven by **huge vertical gaps** between headed blocks
- Thin full-bleed or near-full horizontal rules separate chapters
- Measured spacing observations include ~17px micro gaps; macro spacing is clearly multi-rem section padding

## Visual language
- **Square corners**, no visible shadows or soft cards
- Borders are **1px hairlines**, not boxes
- Imagery (when present) is photographic/product, full-width within the content column
- No motion language established from stills

## Components and states
Recurring pieces on the case study:
- Top **wordmark + sparse nav**
- **Giant serif section headers** with period punctuation as a voice tic
- Long **prose blocks** with occasional pull emphasis
- **Hairline dividers** as the primary structural component
- Footer with studio identity

No interactive component states were visible beyond static links.

## Responsive behavior
All three captures are the same `/anthropic` path at large desktop width. Responsive rules are not established; assume the editorial column simply narrows.

## Practical guidance
**Preserve**
- Monochrome editorial frame
- Oversized serif display vs calm body
- Hairline rules instead of card chrome
- Long-form case-study pacing

**Avoid**
- Colorful marketing gradients or glassmorphism
- Dense card grids that break the essay rhythm
- Over-rounding or drop shadows on content blocks
- Inventing a multi-color token set the page does not use

## Scope note
Studied three captures of `https://bspk.xyz/anthropic` (viewport ~2552×1280). Structured color/type family data was largely unavailable; guidance leans on visual reading of the case study. Other BSPK pages were not in scope.

## Captured pages

[![Anthropic case study — hero & challenge](https://pin.fontofweb.com/9365?format=jpg)](https://design.withfudge.com/share/pin-9365)

[Anthropic case study — hero & challenge](https://design.withfudge.com/share/pin-9365)

[![Anthropic case study — mid narrative](https://pin.fontofweb.com/9364?format=jpg)](https://design.withfudge.com/share/pin-9364)

[Anthropic case study — mid narrative](https://design.withfudge.com/share/pin-9364)

[![Anthropic case study — approach/impact](https://pin.fontofweb.com/9363?format=jpg)](https://design.withfudge.com/share/pin-9363)

[Anthropic case study — approach/impact](https://design.withfudge.com/share/pin-9363)

## Colors

- `#000000`
- `#ffffff`
- `#6b6b6b`

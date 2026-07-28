# How aeon.co is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/aeon.co-design)

Last updated: 2026-07-28

## Design character

Aeon is a digital magazine that stages ideas like a quiet gallery of long essays. The system is **editorial first**: vast white field, black type, a single deep raspberry accent (`#930b51`), and hero photography that feels commissioned rather than stock. Nothing about the chrome competes with the argument on the page—navigation is a thin black bar, body type is generous, and the essay title is allowed to dominate the viewport.

What should survive adaptation:

- **Light editorial canvas** with near-black text and one wine/raspberry accent.
- **Monumental serif titles** for essays, with calm sans-like body and UI.
- **Photography as thesis**, full-width or large, often with a soft light leak or atmospheric grade.
- **Magazine furniture**: issue label, author byline with circular avatars, topic chips, share row, related-essay cards.

## Foundations

### Color

| Role | Value | Use |
| --- | --- | --- |
| Page ground | pure / near white | Essay canvas |
| Primary text | `#000000` | Titles and body |
| Secondary text | `#333333` | Supporting copy, quieter lines |
| Accent | `#930b51` | Topic labels, in-text links, “More essays” |
| Inverse chrome | black header with white wordmark and icons | Global nav |

The palette is intentionally limited: black, white, one accent, photographic color. No gradients in the UI chrome; color lives in images and the raspberry links.

### Typography

Declared families are not in the captures. Visually:

- **Essay titles**: large serif display, weighty (~30–72px across viewports), tight enough to feel literary, wrapping over 2–4 lines.
- **Deck / lead**: ~20–22px, regular, slightly airy.
- **Body**: ~16–18px with open measure and clear paragraph rhythm.
- **UI / meta**: 12–16px for nav, topics, bylines; bold sparingly on section labels (“Psychology”, “27 May 2026”).
- **Small caps / labels**: uppercase or small labels for section crumbs above the title.

### Spacing and layout

- Wide single-column essay with generous side margins on large screens.
- Vertical rhythm clusters around 10–40px for component gaps; larger 60–80px+ between major blocks.
- Header is a slim full-width bar; content starts immediately beneath with topic + date, then the oversized title.
- Related essays sit in multi-card rows with image thumbnails.

## Visual language

- **Shape**: mostly sharp editorial rectangles; circular author avatars; pill-like topic chips are understated.
- **Borders/shadows**: minimal—depth comes from photography and type scale, not elevation.
- **Imagery**: full-bleed or large atmospheric photos; essay cards use cropped stills with serif titles overlaid or below.
- **Motion**: not observed in stills.

## Components and states

1. **Global black nav** — wordmark left; Explore, About, Support, Log in; utility icons and a yellow-accent support control in some states.
2. **Essay masthead** — topic · date, huge serif title, short deck, author row with faces.
3. **Inline body** — long measure, accent-colored links, occasional pull structures.
4. **Share / tools row** — compact icon actions under the title block.
5. **Related essays** — image + title cards in a horizontal or wrapped set, “More essays” in accent.
6. **Footer / end matter** — quiet continuation of the white field.

## Responsive behavior

Six captures of the same essay path at varying heights/crops (roughly 422–1194px tall, ~2048px wide). The system stays single-column editorial; title scale and image crop change with viewport height more than structural reflow. Narrow mobile breakpoints were not clearly isolated.

## Practical guidance

**Preserve** the white literary field, one raspberry accent, serif essay titles, and photographic heroes.  
**Avoid** SaaS card grids, saturated multi-color systems, or dense app chrome on reading surfaces.  
**Adapt** by keeping UI monochrome and letting one accent mark topics and links only.

## Scope note

Studied six desktop-width captures of a single Aeon essay (neuroplasticity). Font family names and full site IA beyond the article template were not available; color roles include measured `#930b51` / black text plus screenshot reading of the black header.

## Captured pages

[![Essay hero — title, deck, authors](https://pin.fontofweb.com/6521?format=jpg)](https://design.withfudge.com/share/pin-6521)

[Essay hero — title, deck, authors](https://design.withfudge.com/share/pin-6521)

[![Essay mid — body and related](https://pin.fontofweb.com/6526?format=jpg)](https://design.withfudge.com/share/pin-6526)

[Essay mid — body and related](https://design.withfudge.com/share/pin-6526)

[![Essay — alternate tall crop](https://pin.fontofweb.com/6525?format=jpg)](https://design.withfudge.com/share/pin-6525)

[Essay — alternate tall crop](https://design.withfudge.com/share/pin-6525)

[![Essay — compact header band](https://pin.fontofweb.com/6523?format=jpg)](https://design.withfudge.com/share/pin-6523)

[Essay — compact header band](https://design.withfudge.com/share/pin-6523)

## Colors

- `#930b51`
- `#000000`
- `#333333`
- `#ffffff`

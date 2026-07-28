# How hellotiana.framer.website is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/hellotiana.framer.website-design)

Last updated: 2026-07-28

## Design character

hellotiana.framer.website is a **minimal personal portfolio** for senior product designer Christiana Uzonwanne. The system is almost monastic: vast white field, forest-charcoal type, a soft olive accent reserved for the script wordmark and a few friendly flecks, and navigation that is literally three huge section titles with arrows. It feels like a Framer-built resume landing page that trusts whitespace more than chrome.

What should survive adaptation:

- **Near-white canvas** with generous empty field around every block
- **Forest charcoal** headlines and body (not pure black)
- **Olive / sage accent** only on the “Tiana*” mark, avatar ring, and micro love-notes
- **Oversized section index** (CASE STUDIES / PLAYGROUND / ABOUT ME) as the primary navigation
- **Soft multi-stop photo shadow** on the avatar — the only real depth cue
- Hairline rules and a quiet footer strip; almost no fills or borders elsewhere

## Foundations

### Color

No structured palette rows were returned. Values below are visual reads from both homepage pins.

| Role | Hex (approx.) | Where it shows |
| --- | --- | --- |
| Canvas | `#fbfbfb`–`#ffffff` | Full page field |
| Primary text | `#2a332c`–`#3a453c` | Name, section titles, body |
| Secondary text | `#6a736c`–`#7a837c` | Role line, footer links |
| Accent olive | `#8a9a55`–`#9aaa62` | Wordmark asterisk, “Designed and built by me <3”, subtle highlights |
| Avatar ring | soft green matching accent | Circular crop edge |
| Hairline | `#ebebe8`–`#efefec` | Header rule, section dividers, footer rule |
| Chip / badge surface | `#ffffff` with soft shadow | “Made in Framer” pill |
| Icon button | white fill + charcoal icon | Mail control top-right |

Relationships that matter:

- **Accent is scarce.** One olive note brands the page; do not olive-wash buttons or large fills.
- **Text sits in the green-black range**, which keeps the page warmer and more editorial than neutral gray UI kits.
- **White is the primary surface material** — hierarchy comes from type size and space, not cards-on-gray.

### Typography

No font family names were captured. Visual system:

- **Script / handwritten wordmark** “Tiana*” in the header (accent-colored asterisk)
- **Primary UI/body stack:** clean grotesque sans for name, role, bio, section titles, footer

Structured size ladder (both pins agree):

| Role | Weight | Size | Line height | Tracking | Notes |
| --- | --- | --- | --- | --- | --- |
| Section display | 400 | 36px | 43.2px | 0 | “CASE STUDIES”, “PLAYGROUND”, “ABOUT ME” — large, regular weight, wide letterforms |
| Name / emphasis | 600 | 20px | 28px | −0.8 | Profile name, stronger UI |
| Bio / body | 400 | 16px | 24px | −0.64 | Right-column intro sentence |
| Meta | 400 | 14px | 16.8px | −0.42 | Role line under name |
| Micro / footer | 400 | 12px | — | 0 | Extremely frequent (n≈480+) footer and chrome |

Patterns:

- Section titles use **regular weight at large size** instead of heavy bold — calm authority.
- Slight **negative tracking** on 14–20px roles tightens the product-design voice.
- Almost everything is **400**; 600 appears only for small emphasis.

### Spacing and layout

Dominant spacing observations:

- **80px** left/right padding on the main column (very frequent)
- **45px** top/bottom padding as the section rhythm
- Secondary vertical steps at **11px**, **21px**, and tight **2px** for micro stacks
- Layout is a **sparse vertical stack**: header → profile row (avatar+name | bio) → three full-width section rows → footer
- Profile row is a **two-column split** on desktop; section rows are single-line title + trailing arrow
- Empty field between blocks is intentional brand material — do not collapse it

## Visual language

- **Geometry:** soft **10px** radii on small controls; **~100px** pill radius on the Framer badge and circular avatar.
- **Shadows:** a deliberate **three-stop soft stack** on the portrait  
  `0 0.6px 1.6px -1.5px` / `0 2.3px 6px -3px` / `0 10px 26px -4.5px` — photographic lift, not UI card chrome.
- **Dividers:** 1px light hairlines between major bands; no thick rules.
- **Icons:** thin line arrows and a simple mail glyph; stroke-aligned with the calm sans.
- **Imagery:** single circular headshot; no full-bleed photography on the index.
- **Motion:** not observed in stills.

## Components and states

1. **Header** — script wordmark left, circular mail button right, hairline beneath.
2. **Profile strip** — avatar + name/role left; one-sentence positioning right.
3. **Section row** — oversized title, trailing arrow, full-width hit area implied, hairline separators.
4. **Footer** — personal note with olive heart accent, text links (LinkedIn, Dribbble, Resume, Substack), “Made in Framer” pill.
5. **Icon button** — circular light control with soft edge.

Only resting states are visible; do not invent hover styles beyond obvious link underlines.

## Responsive behavior

Both captures are **1504×859** viewports of `/`. No second breakpoint set is available. Treat the two-column profile split and 80px side padding as **desktop norms**; reflow rules for small screens are out of evidence scope.

## Practical guidance

**Preserve**

- Extreme whitespace and three-title navigation as the product
- Charcoal-on-white with a single olive accent
- Regular-weight large section titles
- Soft photographic shadow only on the avatar
- Footer as quiet utility, not a marketing slab

**Avoid**

- Card grids, colored section backgrounds, or gradient heroes
- Bold/black display type that shouts over the calm index
- Multiple accent colors or illustration noise
- Dense project thumbnails on the home index (case studies live one click deeper)
- Dropping the script wordmark without a similarly human mark

## Evidence scope

Two viewport captures of `hellotiana.framer.website/` (pins `9054`, `9053`). Colors, font families, borders, and gradients were not in structured rows; spacing, radii, shadows, and text sizes were. Visual color and layout claims come from pin inspection. Suitable as a reference for minimal designer portfolios; not a multi-page product system.

## Captured pages

[![Home — profile and index](https://pin.fontofweb.com/9054?format=jpg)](https://design.withfudge.com/share/pin-9054)

[Home — profile and index](https://design.withfudge.com/share/pin-9054)

[![Home — alternate frame](https://pin.fontofweb.com/9053?format=jpg)](https://design.withfudge.com/share/pin-9053)

[Home — alternate frame](https://design.withfudge.com/share/pin-9053)

## Colors

- `#ffffff`
- `#fbfbfb`
- `#2a332c`
- `#6a736c`
- `#8a9a55`
- `#9aaa62`
- `#ebebe8`

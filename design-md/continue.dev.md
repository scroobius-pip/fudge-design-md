# How continue.dev is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/continue.dev-design)

Last updated: 2026-07-28

## Design character

Continue’s marketing site is **quiet, airy developer infrastructure branding**: pale gray-to-white fields, near-black hairline UI, and oversized **light-weight display type** (56–64px at weight ~300) with tight negative tracking. The emotional center is abstract ink-and-geometry art—violet/indigo splatter and ruled technical linework in a white frame—paired with a floating product UI card (PR review / Anti-Slop checks). Primary actions are solid **near-navy/black pills** (`#020817`), not rainbow gradients. About and careers keep the same whisper-quiet chrome with list rows and a single art panel.

What should survive adaptation:

- Pale neutral canvas + ink-black type
- Ultra-light large display headlines (weight ~300, 56–64px, tracking ~−1.4 to −1.6px)
- Dark solid CTA (`#020817` / `#0f172a` family) and text-link secondary
- Abstract technical art as the only loud visual
- Soft product cards with light borders and restrained shadows
- Airy spacing; never dense marketing clutter

## Foundations

### Color

Measured roles (home):

- **Accent / primary action fill:** `#020817`
- **Primary text:** `#020817`
- **Secondary text:** `#0f172a` (also reads as deep navy family—visually near-black)

Visually extended:

- **Canvas:** soft light gray / off-white gradient wash behind hero
- **Surfaces:** pure white product cards and art frames
- **Art accents:** indigo/violet ink, graphite technical lines, magenta wash on About art
- **Status in product mock:** soft red/pink “needs review” rows; green/red diff markers in code

The brand color story is essentially **black ink on paper** plus one artwork’s hue.

### Typography

No declared families. Clear ladder:

- **Display:** 56px / 58.8px lh and 64px / 67.2–70.4px lh, **weight 300**, letter-spacing about **−1.4 to −1.6px**
- **Body:** 16px / 24px weight 400
- **Deck / supporting:** 15–18px
- **Eyebrow / meta:** 11–12px, sometimes with positive letter-spacing (~0.275–2.4px) for small-caps feel labels (“CONTINUOUS AI”, “ABOUT US”, “SAN FRANCISCO”)
- **UI in mock:** 14px medium for controls

The light display weight is the signature—do not bold the hero into a heavy SaaS slab.

### Spacing and layout

- Common vertical rhythm: **24px** margins/padding; section blocks with **40–56px** padding
- Hero: split composition—copy left, art right; product UI card overlapping below
- About: copy left + square art right; openings as full-width rows
- Horizontal padding on cards often **20–24px**
- Wide captures (1670–2048px) with lots of negative space

## Visual language

- **Radii:** pill CTAs **9999px**; small controls ~**6px**; product chrome softly rounded
- **Borders:** 1px light gray hairlines on cards, job rows, and section rules
- **Shadows:** soft stacked elevation on the product card (e.g. y:1 blur 2; y:4 blur 6 spread −4; y:10 blur 15 spread −3)—subtle, not neon glow
- **Imagery:** signature abstract plots (ink + schematic grids); no stock photos of smiling teams
- **Logo:** geometric mark + “Continue” wordmark, monochrome

## Components and states

- **Nav:** logo left; text links (Docs, Pricing, Blog, Sign in); minimal
- **Hero CTA pair:** solid dark “Get started” + ghost/text “Test your PR →”
- **Product preview card:** inbox/PR chrome, checklist sidebar, code diff panel
- **About hero:** eyebrow label, light display title, two short paragraphs, framed art
- **Backed-by row:** grayscale partner logos
- **Job list:** bordered rows, title + one-line description, trailing arrow
- **Footer:** simple text links + social icons on pale field

States visible: default CTAs; list row hover not required to invent; review list shows “needs review” emphasis in the mock only.

## Responsive behavior

Multiple home and about viewports, all wide. The split hero (type | art) and overlapping product card are desktop compositions—on small screens stack art below type and keep the light display size scaled down rather than bolding up.

## Practical guidance

**Preserve**

- Weight-300 oversized headlines with negative tracking
- Pale paper canvas and near-black ink CTAs
- Abstract technical art as brand theater
- Quiet borders and soft card shadow only where product UI floats

**Avoid**

- Heavy bold heroes and saturated multi-color gradients
- Crowded logo walls or loud illustration mashups
- Turning the dark CTA into a bright startup blue/purple by default
- Dense pricing-table energy on the marketing hero

**Adaptation**

- Keep `#020817` as both text and primary button fill for a monochrome authority feel
- Use artwork hue sparingly (one accent family per page)
- Match eyebrow labels with wide tracking small caps styling

## Scope note

Six captures: continue.dev home (hero, full viewport with product card, alternate hero art) and `/about-us` (team story + openings list). Measured navy/black text and accent `#020817` / `#0f172a`. No declared font families. Docs/app surfaces not included.

## Captured pages

[![Home — hero strip](https://pin.fontofweb.com/8680?format=jpg)](https://design.withfudge.com/share/pin-8680)

[Home — hero strip](https://design.withfudge.com/share/pin-8680)

[![Home — hero + product card](https://pin.fontofweb.com/8679?format=jpg)](https://design.withfudge.com/share/pin-8679)

[Home — hero + product card](https://design.withfudge.com/share/pin-8679)

[![Home — quality control hero](https://pin.fontofweb.com/8678?format=jpg)](https://design.withfudge.com/share/pin-8678)

[Home — quality control hero](https://design.withfudge.com/share/pin-8678)

[![About — join the team](https://pin.fontofweb.com/6708?format=jpg)](https://design.withfudge.com/share/pin-6708)

[About — join the team](https://design.withfudge.com/share/pin-6708)

[![About — openings list](https://pin.fontofweb.com/6709?format=jpg)](https://design.withfudge.com/share/pin-6709)

[About — openings list](https://design.withfudge.com/share/pin-6709)

[![Home — alternate wide](https://pin.fontofweb.com/6707?format=jpg)](https://design.withfudge.com/share/pin-6707)

[Home — alternate wide](https://design.withfudge.com/share/pin-6707)

## Colors

- `#020817`
- `#0f172a`
- `#ffffff`

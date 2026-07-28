# How curator.io is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/curator.io-design)

Last updated: 2026-07-28

## Design character

Curator is a **bright, sales-forward SaaS marketing site** for a social media aggregator: big centered headlines, generous section padding, pill-heavy controls, and a clean black/white base with a **vivid blue accent** (`#0099ff`) on content surfaces like the blog. It feels approachable and product-led—hero claims, rounded cards, and long scrolling feature storytelling rather than a dense app shell.

What should survive adaptation:

- **Light mode monochrome chrome** with black primary text and gray secondary.
- **Blue accent** for links/interactive emphasis on content pages.
- **Large display type** (40–56px class) and airy **120px-class section padding**.
- **20–24px rounded** cards and pill CTAs.
- Blog as a soft content index with the same type scale as marketing.

## Foundations

### Color

| Role | Value | Notes |
| --- | --- | --- |
| Accent | `#0099ff` | Clear blue accent on blog/content |
| Primary text | `#000000` | Headlines and body |
| Secondary text | `#888888` / `#666666` | Supporting copy |

Visually: white canvas, black type, blue interactive accents; home taxonomy also marks a monochrome/neutral marketing frame with pill-dominant corners.

### Typography

Families not declared in captures. Measured scale:

- **Display**: **56px** / 67.2px at weight 500; also **48px** and **40px** section heads.
- **Titles**: **20–32px** at 500–600.
- **Body**: **14–18px** at 400–500, ~21–24px line-height.
- **Micro**: **10–13px** labels/nav.

Sans-serif, single-family system feel; medium weights for display rather than ultra-black.

### Spacing and layout

- Section vertical padding commonly **120px** (sometimes 180px top); cards **40px** padding.
- Control padding **8–20px**; blog cards ~**10–20px** radii family with **10px** on many content tiles and **20–24px** on larger marketing cards.
- Home: stacked marketing sections; pricing: plan cards with ~20px radius; blog: padded index of posts.

## Visual language

- **Pill-dominant corners** on CTAs; cards **10–24px**.
- Soft shadows appear sparingly (e.g. 0/1/2px and larger 10–16px blurs on hero devices).
- Product UI imagery and social content previews carry color; chrome stays restrained.
- Motion not established.

## Components and states

### Marketing hero
Large centered headline, supporting line, primary CTA pill(s), optional product visual.

### Feature / pricing cards
Rounded white plates, 40px internal padding, clear plan hierarchy on `/pricing`.

### Blog index
Large page title, secondary meta, grid/list of post cards with 10px-class rounding.

### Nav
Standard SaaS top nav (logo, links, CTA)—keep lightweight against big section type.

## Responsive behavior

Widths from ~**1295–1712px** show the same section padding language; card grids tighten but radii remain large. Mobile specifics not fully captured.

## Practical guidance

**Preserve**

1. Black text on white with `#0099ff` as the one bright accent.
2. Oversized section titles and 120px-class vertical rhythm.
3. Soft large radii (20–24px) on marketing cards; pills for CTAs.
4. Blog sharing the marketing type scale, not a separate newspaper theme.

**Avoid**

1. Dark-mode-first marketing (captures are light).
2. Tiny dense enterprise type.
3. Rainbow accent systems—blue + black/gray is enough.
4. Inventing font licences.

**Adaptation recipe**

- White SaaS canvas → 56px mid-weight display → blue accent CTAs → 20px rounded proof cards → same system on blog.

## Scope note

Five captures: home (multiple), pricing, blog. Supported: accent/text colors, display scale, section padding, radii, page roles. Gaps: font family, full mobile nav, app dashboard chrome, motion.

## Captured pages

[![Home marketing](https://pin.fontofweb.com/7651?format=jpg)](https://design.withfudge.com/share/pin-7651)

[Home marketing](https://design.withfudge.com/share/pin-7651)

[![Home feature sections](https://pin.fontofweb.com/7653?format=jpg)](https://design.withfudge.com/share/pin-7653)

[Home feature sections](https://design.withfudge.com/share/pin-7653)

[![Home mid-width](https://pin.fontofweb.com/7652?format=jpg)](https://design.withfudge.com/share/pin-7652)

[Home mid-width](https://design.withfudge.com/share/pin-7652)

[![Pricing](https://pin.fontofweb.com/7654?format=jpg)](https://design.withfudge.com/share/pin-7654)

[Pricing](https://design.withfudge.com/share/pin-7654)

[![Blog index](https://pin.fontofweb.com/7656?format=jpg)](https://design.withfudge.com/share/pin-7656)

[Blog index](https://design.withfudge.com/share/pin-7656)

## Colors

- `#0099ff`
- `#000000`
- `#888888`
- `#666666`

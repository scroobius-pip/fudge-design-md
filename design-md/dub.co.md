# How dub.co is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/dub.co-design)

Last updated: 2026-07-28

# How dub.co is designed

## Design character

Dub is a polished black-and-white SaaS marketing system with one decisive green accent. The home experience reads as a modern attribution platform: near-black canvas, soft charcoal cards, oversized medium-weight headlines, and product UI framed as floating light panels. Everything feels dense but calm—enterprise credibility without enterprise clutter.

## Foundations

### Color

Measured and observed roles:

- **Canvas / near-black:** `#0a0a0a` — primary page background
- **Elevated surface:** `#171717` — cards, panels, and nested chrome
- **Muted text / borders:** `#737373` — secondary labels and hairlines
- **Success / brand accent:** `#16a34a` — primary CTAs (“Start for free”), active dots, positive metrics
- **Light product chrome:** pure white panels for embedded dashboards and tables (visual reading of product frames)
- **White type on dark** for primary copy; green reserved almost exclusively for action and status

The palette is intentionally narrow. Green is the only saturated signal; everything else stays monochrome so charts, logos, and screenshots carry the color load.

### Typography

Declared font families were not captured. Observed scale on marketing pages:

- Display / hero: ~48px, weight 500, tight line-height (~1.0)
- Section titles: ~20px, weight 500, ~28px line-height
- Body: 16px / 24px, weight 400
- UI / meta: 14px / 20px, weights 400–500
- Dense product labels lean smaller and medium weight

Hierarchy is size-and-weight first, not color. Headlines sit heavy and short; supporting copy stays mid-gray on black.

### Spacing and layout

Recurring measurements:

- Section vertical rhythm: 64–128px padding (96/128 common on large bands)
- Horizontal page padding often 16px at the edge with large auto side margins (~340px) creating a centered content column on wide viewports
- Card and control radii cluster at **8px** and **16px**; pills use full rounding (~9999)
- Product mockups sit in generous whitespace with soft separation from the dark field

Layout pattern: sticky slim top nav → full-bleed dark hero with centered claim → multi-column feature/logo bands → light-on-dark product showcases → dark footer.

## Visual language

- **Shape:** rounded rectangles (8–16px) for cards and inputs; pill buttons for primary actions
- **Borders:** hairline neutral borders on elevated dark cards; light frames around product screenshots
- **Depth:** product UIs appear as floating white sheets on the black stage—contrast does the elevation work more than heavy shadows
- **Imagery:** real product chrome, partner logo rows, simple geometric marks; no lifestyle photography dominating the home story
- **Motion:** not established from still captures

## Components and states

- **Top nav:** wordmark left, text links, green filled CTA right
- **Hero:** short claim, one-line value prop, dual actions (green primary + quiet secondary)
- **Metric / feature cards:** dark tiles with small labels and large numbers
- **Logo wall:** monochrome partner marks in a calm row
- **Product frames:** white app chrome with tables, filters, and green status chips
- **Pricing (partners):** lighter marketing strip with plan comparison energy while staying on-brand

Visible states in screenshots: default and selected/active (green), not full hover/focus specs.

## Responsive behavior

Captures span wide desktop and narrower desktop widths. The system keeps the dark canvas and collapses multi-column product showcases into stacked bands; side margins shrink while 16px edge padding remains. Exact mobile breakpoints were not captured.

## Practical guidance

**Preserve**

- Near-black canvas with a single green accent for primary action
- Medium-weight display type and short hero claims
- White product frames as the brightest objects on the page
- 8/16px radius discipline and generous section padding

**Avoid**

- Introducing a second saturated brand color
- Busy gradients or illustration-heavy heroes
- Light marketing pages that break the monochrome shell without reason
- Over-rounded consumer “playful” radii on enterprise tables

## Scope note

Studied eight captures of dub.co home (multiple viewport crops) and `/pricing/partners`. Color roles and palette entries are sparse in structured data; several hex values above combine measured palette hits with direct screenshot reading. Font family names were not available.

## Captured pages

[![Home hero — dark canvas + green CTA](https://pin.fontofweb.com/7583?format=jpg)](https://design.withfudge.com/share/pin-7583)

[Home hero — dark canvas + green CTA](https://design.withfudge.com/share/pin-7583)

[![Product showcase on dark field](https://pin.fontofweb.com/7577?format=jpg)](https://design.withfudge.com/share/pin-7577)

[Product showcase on dark field](https://design.withfudge.com/share/pin-7577)

[![Narrower home crop](https://pin.fontofweb.com/7582?format=jpg)](https://design.withfudge.com/share/pin-7582)

[Narrower home crop](https://design.withfudge.com/share/pin-7582)

[![Partners pricing](https://pin.fontofweb.com/3066?format=jpg)](https://design.withfudge.com/share/pin-3066)

[Partners pricing](https://design.withfudge.com/share/pin-3066)

## Colors

- `#0a0a0a`
- `#171717`
- `#737373`
- `#16a34a`
- `#ffffff`

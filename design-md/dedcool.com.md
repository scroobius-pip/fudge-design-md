# How dedcool.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/dedcool.com-design)

Last updated: 2026-07-28

## Design character

DedCool is a **clean, editorial fragrance ecommerce** brand that presents product as gallery sculpture. The chrome stays almost invisible—thin promo ticker, sparse uppercase nav, barcode wordmark—so oversized product photography and short manifesto headlines can dominate. The mood is LA wellness-meets-museum: white space, soft daylight still-lifes, and confident black type without loud brand color shouting over the bottles.

What should survive adaptation:

- A **near-monochrome UI frame** that never competes with product photography.
- **Billboard headlines** paired with dense but readable body copy.
- **Product-as-hero** compositions (floating bottles, clinical labels, barcode branding).
- Utility commerce patterns (cart count, thin promo bar, pill CTAs) kept quiet.

## Foundations

### Color

Measured color roles were not retained for these captures. From the pages themselves the system reads as:

- **Canvas**: cool off-white / paper white site background.
- **Ink**: near-black headlines, nav, and body.
- **Surfaces**: pure white cards and form fields; soft gray hairlines.
- **Accent through photography**: pale blue, lavender, and mint product packaging—not UI chrome.
- **Ticker**: black strip with white utility type for promos.

Treat brand personality as living in product art and packaging, not in saturated buttons.

### Typography

Declared font families were not available. Observed sizes and weights:

- Display/about headlines around **80px** with tight line-height (~0.92).
- Home manifesto lines around **24px**.
- UI/nav and body cluster at **12px** with ~16.8px line-height; some micro labels at **10px**.
- Section titles around **32px**.
- Weight stays mostly **400**; hierarchy comes from size and tracking more than bold faces.
- Tone is modern grotesque / neo-grotesk—wide, calm, slightly condensed display for “We make scents to live in.”

### Spacing and layout

Recurring measurements:

- Content often inset with large side margins (~**98–308px** depending on viewport width)—a centered magazine column feel.
- Section padding frequently **65–70px** vertical; about page uses **36–40px** vertical rhythm.
- Nav and utility rows stay compact; product hero bands go edge-to-edge.
- About layout uses a **split**: rounded photo card left, manifesto copy right.
- Home CTAs use horizontal padding ~**20px** and vertical ~**13px**.

Density is low; air is a feature.

## Visual language

- **Shape**: soft rounded product imagery (~**8px** cards; pill CTAs with very large radius ~**100px** on home; rewards surfaces ~**32px**).
- **Borders**: 1px solid hairlines on cards and chips—structure without shadow drama.
- **Imagery**: high-key product still-lifes on white; lifestyle portraits with rounded corners; barcode/wordmark as identity device.
- **Motion**: not established from still captures.
- **Chrome**: marquee promo ticker, centered barcode logo, uppercase text links.

## Components and states

Recurring UI:

1. **Promo ticker** — black full-bleed bar, small uppercase offers, continuous utility messaging.
2. **Primary nav** — text links left (Shop, Fragrance…) and right (Search, About, Cart); logo center.
3. **Hero headline + product strip** — oversized statement over a horizontal product photography band.
4. **Pill CTA** — fully rounded outlined or filled buttons (e.g. shop actions).
5. **About split** — rounded image card + “WHAT WE STAND FOR” stacked title and paragraph.
6. **Account/login** — sparse form on white with the same display voice.
7. **Rewards** — multi-section marketing with bordered cards (~8px radius).

Visible states are mostly default populated marketing; interactive hover/focus not captured.

## Responsive behavior

Captures span roughly **1200–2048px** wide viewports. Side margins compress as width drops; product heroes remain full-bleed. Multiple rewards captures show the same system reflowing vertical padding while keeping the white/minimal frame. True mobile breakpoints were not in the set.

## Practical guidance

**Preserve**

- White gallery canvas + black type + product color only in photos.
- Barcode / utilitarian identity marks.
- Huge calm headlines; tiny UI labels.
- Hairline borders and soft radii instead of heavy shadows.
- Centered editorial measure with generous side margin.

**Avoid**

- Saturating the chrome with brand purple/blue from packaging.
- Dense multi-column SaaS dashboards.
- Drop shadows and glassmorphism.
- Mixing many display faces; keep one quiet grotesque system.
- Crowding the hero—product photography needs air.

## Scope note

Studied viewport captures for `/`, `/pages/about-us`, `/pages/rewards`, and `/account/login` (ids 6066–6073). Color roles, palette extraction, shadows, and declared font families were not available; color and type character above combine measured sizes/radii with visual reading of the screenshots. Motion and small-phone layouts were not observed.

## Captured pages

[![Home — hero ticker and product strip](https://pin.fontofweb.com/6066?format=jpg)](https://design.withfudge.com/share/pin-6066)

[Home — hero ticker and product strip](https://design.withfudge.com/share/pin-6066)

[![About — manifesto split](https://pin.fontofweb.com/6073?format=jpg)](https://design.withfudge.com/share/pin-6073)

[About — manifesto split](https://design.withfudge.com/share/pin-6073)

[![Rewards — DedClub](https://pin.fontofweb.com/6072?format=jpg)](https://design.withfudge.com/share/pin-6072)

[Rewards — DedClub](https://design.withfudge.com/share/pin-6072)

[![Account login](https://pin.fontofweb.com/6067?format=jpg)](https://design.withfudge.com/share/pin-6067)

[Account login](https://design.withfudge.com/share/pin-6067)

## Colors

- `#000000`
- `#ffffff`

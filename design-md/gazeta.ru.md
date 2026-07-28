# How gazeta.ru is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/gazeta.ru-design)

Last updated: 2026-07-28

## Design character

Gazeta.Ru reads as a classic high-volume Russian news portal: dense information hierarchy, utilitarian chrome, and story-first layout rather than brand theater. The home experience packs logo, search, and section navigation into a tight masthead, then drops straight into multi-column news modules—politics, society, economy—with thumbnail-led story cards and bright category accents. It feels editorial-operational: maximize scan speed, not lifestyle polish.

## Foundations

### Color

Measured color roles were not retained for these captures. Visually, the system runs on a light gray page field, white content panels, near-black body type, and saturated category/accents (blue links, red live markers, multicolored section chips). Treat the palette as news-utility: neutral canvas + loud status and section color, not a monochrome brand system.

### Typography

No declared font families in the captures. Observed text styles:

- 18px / weight 400 (undeclared UI sans, line-height 22px) — seen ~101 times
- 20px / weight 400 (undeclared UI sans, line-height 30px) — seen ~64 times
- 16px / weight 400 (undeclared UI sans, line-height 20px) — seen ~42 times
- 16px / weight 700 (undeclared UI sans, line-height 22px) — seen ~24 times
- 16px / weight 700 (undeclared UI sans, line-height 20px) — seen ~14 times
- 28px / weight 700 (undeclared UI sans, line-height 38px) — seen ~8 times

Body sits around 16–18px regular; 20px appears for stronger leads; bold 16px marks labels and meta. Hierarchy is size-and-weight driven inside a compact news grid rather than display type.

### Spacing and layout

- margin-bottom: 16px (×61)
- padding-bottom: 8px (×48)
- padding-top: 8px (×48)
- padding-left: 34px (×46)
- padding-right: 34px (×46)
- padding-bottom: 16px (×43)
- padding-left: 16px (×43)
- padding-right: 16px (×43)

Home uses a wide multi-column board (~1260px capture) with thin gutters between story tiles. Article views compress to a narrower reading column with stacked related modules. Vertical rhythm is tight (often 8–16px between blocks) to keep more headlines above the fold.

## Visual language

- 2px (×63)

Corners stay nearly square (≈2px)—cards feel boxed and catalog-like, not soft SaaS. Borders and hairlines separate modules; imagery is rectangular thumbnails and promo banners, not full-bleed hero photography. Shadows are minimal; separation comes from borders and background steps (gray page / white cards).

## Components and states

Recurring pieces:
- **Masthead** with wordmark, search field, and utility links
- **Section nav** as a horizontal label row
- **Story cards** combining thumbnail, headline, and timestamp/meta
- **Category chips** and colored section headers
- **Promo/banner strips** interrupting the grid
- **Article body** with related-news side or bottom stacks

States visible in stills: default cards and simple hover is not claimed; live/breaking treatments use stronger color markers.

## Responsive behavior

Captures include a wider home board and a narrower article crop. The article path collapses multi-column density into a single reading stack while keeping the same utilitarian type scale—expect reflow by stacking modules rather than a separate mobile brand.

## Practical guidance

**Preserve**
- Dense, scannable multi-column news packing
- Near-square cards and hairline separation
- Small utilitarian type scale (16–20px) over marketing display
- Category color as the only loud accent system

**Avoid**
- Large rounded SaaS cards or heavy drop shadows
- Oversized hero typography that wastes fold real estate
- Sparse luxury whitespace that fights the portal’s information density

## Scope note

Studied home (`/`) and one social/news article path. Color roles, shadows, and declared families were not available in structured form; character notes lean on screenshots plus spacing/type observations.

## Captured pages

[![Стало известно о последствиях непогоды в Московской области - Газета.Ru | Новост](https://pin.fontofweb.com/9101?format=jpg)](https://design.withfudge.com/share/pin-9101)

[Стало известно о последствиях непогоды в Московской области - Газета.Ru | Новост](https://design.withfudge.com/share/pin-9101)

[![Главные новости России и мира сегодня - Газета.Ru](https://pin.fontofweb.com/9089?format=jpg)](https://design.withfudge.com/share/pin-9089)

[Главные новости России и мира сегодня - Газета.Ru](https://design.withfudge.com/share/pin-9089)

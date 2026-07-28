# How google.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/google.com-design)

Last updated: 2026-07-28

## Design character

Google Search is a **dark-first, utility-dense product shell** that keeps chrome quiet so results and AI answers can dominate. The system is cold and precise: near-black canvases, soft blue accents, pill-shaped controls, and a strict top-bar + filter-rail + content column structure. AI Mode sits inside the same shell as classic results and Images—same search field, same filter chips, same dark surfaces—so the product feels continuous even when the answer format changes.

What should survive adaptation:

- **Near-black product canvas** with cool blue accent links and chips
- **Pill search field** as the permanent anchor under the logo
- **Sparse chrome, dense content**: thin top bar, light filter rail, heavy result body
- **Soft blue selection/accent** (`#99c3ff` family) on dark UI, not rainbow Google colors in chrome
- **Rounded cards and chips** (roughly 8–24px) with pill extremes for primary controls

## Foundations

### Color

Measured roles on dark AI/search surfaces:

| Role | Hex | Notes |
|------|-----|--------|
| Accent | `#99c3ff` | Links, selected chips, AI affordances |
| Text primary | `#e6e8f0` | Titles and main copy on dark |
| Text secondary | `#adafb8` | Meta, snippets, de-emphasized UI |

Visual reading of the captures (not separate measured roles): canvas is near-black charcoal; elevated cards and side panels sit a step lighter; the multicolored Google wordmark and occasional brand chips are the only warm/high-chroma moments. Classic light SERP chrome is not the dominant captured mode here—the pin set is overwhelmingly dark product UI.

### Typography

Declared font families were not captured. Observed scale on dark search/AI surfaces:

- **Body / UI**: ~14px regular dominates results and chrome; 16px / 24px line-height appears in answer and card body copy
- **Display / AI headings**: ~32px medium for answer titles
- **Secondary labels**: ~13–14px for chips, tools, and meta
- Weights cluster at **400** for body and **500–700** for titles and emphasis
- Hierarchy is size + weight + color (primary vs secondary gray), not decorative type

### Spacing and layout

Recurring rhythm from measurements:

- Horizontal padding on cards/panels around **20px**; larger gutters **40–80px** between major columns
- Vertical stack spacing **8–16px** inside result groups; section tops often **26px** under sticky chrome
- Sticky **top app bar** + **search pill** + **horizontal filter rail** fix the upper band; content scrolls beneath with a left main column and optional right knowledge/AI panel
- Images mode uses a **masonry/grid of rounded thumbnails** with a right detail drawer when an image is selected

## Visual language

- **Shape**: 8px for small controls, ~20–24px for cards and image tiles, **full pill (9999)** for the search field and some chips
- **Borders**: hairline solid edges (~1.8px) appear on selected image frames and some panels; most chrome is borderless on dark fill
- **Shadows**: not a defining layer in these captures—depth comes from value steps between canvas, card, and drawer
- **Imagery**: photographic content is the product (Images grid, preview drawer). UI illustration is minimal; AI answers stay text-first with optional structured cards
- **Motion**: not established from stills

## Components and states

Recurring product pieces:

1. **Top bar** — logo, centered/wide search pill (mic + lens + submit), utility icons (labs, apps, avatar)
2. **Mode / filter rail** — text tabs (AI Mode, All, Images, …) with underline on active; secondary chip row for image categories
3. **AI answer block** — large title, prose body, inline citation chips, follow-up prompt field, secondary actions (export, rewrite, more)
4. **Classic result row** — favicon + site, blue title link, snippet, optional sitelinks
5. **Images grid** — rounded thumbnails, source caption under tile; selected tile outline; right **preview drawer** with Visit / Share / Save
6. **Chips** — rounded filter and action pills; selected state uses lighter fill + accent

Visible state language is selection (underline, outline, fill shift) rather than heavy shadows or color floods.

## Responsive behavior

Captures span roughly **960–2025px** wide. Narrower viewports keep the search pill and collapse secondary columns; Images still prioritizes the grid. A dedicated small-phone system is not fully evidenced—treat multi-column AI + knowledge layouts as desktop/tablet patterns.

## Practical guidance

**Preserve**

- Dark charcoal product shell with cool blue accent, not a light Material marketing skin
- One persistent pill search field as the spatial anchor
- Filter rail + results column grammar across All / AI / Images
- Soft blue links and chips on dark gray type hierarchy
- Rounded image tiles and a detail drawer instead of full-page navigations for previews

**Avoid**

- Rainbow chrome or heavy Material elevation competing with results
- Sharp 0-radius cards in a sea of pills
- Warm gray or brown text on dark (captured secondary is cool `#adafb8`)
- Inventing a custom display serif—the product reads as system sans
- Treating the multicolored logo as a UI palette

## Scope note

Based on eight captures of google.com search and homepage surfaces: dark AI Mode answers, classic dark results, Images grid with preview drawer, and a compact homepage search. Color roles were measured on a subset of dark AI/search pins; many captures lack palette/type-family metadata. Light-mode SERP, account menus, and non-search Google properties are outside this set.

## Captured pages

[![AI Mode answer — dark](https://pin.fontofweb.com/6925?format=jpg)](https://design.withfudge.com/share/pin-6925)

[AI Mode answer — dark](https://design.withfudge.com/share/pin-6925)

[![AI Mode — structured answer](https://pin.fontofweb.com/6604?format=jpg)](https://design.withfudge.com/share/pin-6604)

[AI Mode — structured answer](https://design.withfudge.com/share/pin-6604)

[![Classic dark results](https://pin.fontofweb.com/8713?format=jpg)](https://design.withfudge.com/share/pin-8713)

[Classic dark results](https://design.withfudge.com/share/pin-8713)

[![Images grid + drawer](https://pin.fontofweb.com/5375?format=jpg)](https://design.withfudge.com/share/pin-5375)

[Images grid + drawer](https://design.withfudge.com/share/pin-5375)

[![Homepage search](https://pin.fontofweb.com/3993?format=jpg)](https://design.withfudge.com/share/pin-3993)

[Homepage search](https://design.withfudge.com/share/pin-3993)

## Colors

- `#99c3ff`
- `#e6e8f0`
- `#adafb8`

# How cursor.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/cursor.com-design)

Last updated: 2026-07-28

## Design character

Cursor’s captured product surfaces feel like a **dark, compact developer workstation in the browser**: near-black working canvas, light gray primary text (`#edecec`), a sharp **orange accent** (`#f54e00`), and tight 6–8px controls. Dashboard and marketplace views prioritize density and tool clarity over marketing flourish.

What should survive adaptation:

- **Dark app chrome** with light text—not a white marketing landing (these captures are product/marketplace).
- **Orange accent** used sparingly for primary emphasis.
- **Small radii** (4–8px, some 12px panels; pills at 9999px for chips).
- **12–16px UI type** with 13px as a workhorse size.
- Marketplace/publish flows that look like **settings + catalog**, not brochure sections.

## Foundations

### Color

| Role | Value | Notes |
| --- | --- | --- |
| Accent | `#f54e00` | Orange emphasis on product/publish surfaces |
| Primary text | `#edecec` | Light text on dark UI |

Visually: charcoal/black backgrounds, subtle borders, monochrome icons, orange as the only hot accent.

### Typography

No declared families. Measured:

- UI body **12–16px** weight 400; **13px** common for dense lists.
- Headings **20–24px** at 400–500 with relatively tight line-heights (24/26).
- Micro labels **10–12px**.
- Overall: neutral sans, medium density, low ornament.

### Spacing and layout

- Dashboard content often padded **16–24px**; vertical section pads **40–64px** inside panes.
- Marketplace pages use **20px** horizontal padding with large top padding (~112px) under chrome.
- Side margins ~**180px** appear when centering constrained product columns on ultra-wide frames.
- Radii cluster at **4, 6, 8, 12px**; chips fully pill.

## Visual language

- Flat dark surfaces, **1px** borders for panels/inputs.
- Minimal shadow language in these captures—separation via border and value contrast.
- Marketplace cards ~8px radius grids; publish forms use compact fields.
- Motion not established.

## Components and states

### Dashboard shell
Product header + working canvas; cards/lists at 6–12px radius; dense meta at 12–13px.

### Marketplace grid
Catalog of tiles with consistent 12px internal padding and 8px rounding.

### Publish / form
Constrained column, 4–8px inputs, orange accent for primary actions, light text hierarchy.

### Chips / pills
Fully rounded status or filter chips on dark ground.

## Responsive behavior

Dashboard appears at **960px** and **1712px**: same component radii and type; layout compresses gutters rather than redesigning. Marketplace/publish mainly wide desktop in this set.

## Practical guidance

**Preserve**

1. Dark canvas + `#edecec` text + `#f54e00` accent.
2. Compact 4–8px control rounding; avoid large consumer-app squircles.
3. 13px-class dense UI type for lists and meta.
4. Border-defined panels instead of heavy shadows.
5. Marketplace as a quiet catalog inside the same dark system.

**Avoid**

1. Re-skinning these product views as a bright purple AI landing page.
2. Oversized marketing display type inside dashboard.
3. Multiple competing accent colors.
4. Claiming a font family/licence here.

**Adaptation recipe**

- Dark shell → light gray text → one orange primary → 6–8px controls → dense lists + catalog cards.

## Scope note

Eight captures across `/dashboard`, `/marketplace`, and `/marketplace/publish` at multiple widths. Supported: dark product color roles, accent, radii, spacing habits, marketplace/publish layout. Not established: public marketing homepage system, font family, motion, full light-theme tokens.

## Captured pages

[![Dashboard wide](https://pin.fontofweb.com/8861?format=jpg)](https://design.withfudge.com/share/pin-8861)

[Dashboard wide](https://design.withfudge.com/share/pin-8861)

[![Dashboard panels](https://pin.fontofweb.com/6660?format=jpg)](https://design.withfudge.com/share/pin-6660)

[Dashboard panels](https://design.withfudge.com/share/pin-6660)

[![Dashboard narrow](https://pin.fontofweb.com/6661?format=jpg)](https://design.withfudge.com/share/pin-6661)

[Dashboard narrow](https://design.withfudge.com/share/pin-6661)

[![Marketplace catalog](https://pin.fontofweb.com/6662?format=jpg)](https://design.withfudge.com/share/pin-6662)

[Marketplace catalog](https://design.withfudge.com/share/pin-6662)

[![Marketplace publish](https://pin.fontofweb.com/6663?format=jpg)](https://design.withfudge.com/share/pin-6663)

[Marketplace publish](https://design.withfudge.com/share/pin-6663)

[![Publish form mid-width](https://pin.fontofweb.com/6657?format=jpg)](https://design.withfudge.com/share/pin-6657)

[Publish form mid-width](https://design.withfudge.com/share/pin-6657)

## Colors

- `#f54e00`
- `#edecec`

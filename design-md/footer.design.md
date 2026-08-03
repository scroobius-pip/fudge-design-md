# How footer.design is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/footer.design-design)

Last updated: 2026-08-03

## Captured pages

[![Footer | Inversa](https://pin.fontofweb.com/7029?format=jpg)](https://design.withfudge.com/share/pin-7029)

[Footer | Inversa](https://design.withfudge.com/share/pin-7029)

[![Footer | Grid Footers — The only footer gallery on earth.](https://pin.fontofweb.com/7028?format=jpg)](https://design.withfudge.com/share/pin-7028)

[Footer | Grid Footers — The only footer gallery on earth.](https://design.withfudge.com/share/pin-7028)

[![Footer | Mesh Optical](https://pin.fontofweb.com/7027?format=jpg)](https://design.withfudge.com/share/pin-7027)

[Footer | Mesh Optical](https://design.withfudge.com/share/pin-7027)

## Overview

footer.design presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#ffffff`, `#000000`, and `#242424`, with typography led by **Inter**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#ffffff` | text on page content in the main |
| color.surface | `#000000` | surface on page content in the main |
| color.text | `#242424` | text on page content in the header |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-18px | **Inter** | 18px | 400 | 25.2px | -0.54px | <div> in the main, <h2> in the main, <a> in the main, and <div> in the header |
| type.body-14px | **Inter** | 14px | 500 | 14px | -0.42px | <div> in the main and <a> in the main |
| type.display-32px | **Inter** | 32px | 600 | 32px | -1.6px | <h1> in the main |
| type.body-14px | **Inter** | 14px | 400 | 14px | -0.54px | <div> in the main |
| type.heading-14px | **Inter** | 14px | 600 | 14px | -0.42px | <a> in the main, <a> in the header, and <div> in the main |
| type.body-14px | **Inter** | 14px | 500 | 21px | -0.42px | <h2> in the main |
| type.body-14px | **Inter** | 14px | 500 | 19.6px | -0.42px | <a> in the nav |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `0px 40px` | padding | page content |
| `40px 0px` | padding | page content |
| `0px 0px 40px` | margin | page content |
| `13px 16px` | padding | page content |
| `8px` | padding | page content |

### Shape and depth

The captured pages use `1px solid 0px`, `0px none 1600px`, and `0px none 4px` border treatments.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#000000`. Text colors include `#ffffff` and `#242424`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Inter**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `0px 40px`, `40px 0px`, `0px 0px 40px`, `13px 16px`, and `8px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#000000`. No structured gradient or shadow treatment is established.

## Components and states

The captured pages include repeated styling on <div>, <h1>, <h2>, and <a> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

## Responsive behavior

The captured token set does not establish breakpoint values or mobile behavior. Validate stacking, navigation changes, image treatment, and type scaling against the representative captures before implementing a responsive adaptation.

## Practical implementation guidance

- Preserve the dark surface relationship and the measured type hierarchy before adding decorative treatment.
- Start from the returned typography, spacing, color, and border values; name any new scale or semantic role as an adaptation rather than as a source fact.
- Keep the captured font families separate from licensing decisions.
- Use screenshots to validate component anatomy, responsive behavior, focus treatment, and motion before shipping.
- Avoid introducing gradients or shadows beyond the captured treatment; none are established.

## Scope note

The guide uses representative captured pages. The evidence supports the values and observations above; it does not establish component semantics, interaction states, motion timing, breakpoint rules, font licensing, or a complete source stylesheet.

## Colors

- `#ffffff`
- `#000000`
- `#242424`

## Typography captured from footer.design

- **Inter** — weight 400 · size 18px

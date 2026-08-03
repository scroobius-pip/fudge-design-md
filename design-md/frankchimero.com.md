# How frankchimero.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/frankchimero.com-design)

Last updated: 2026-08-03

## Captured pages

[![Frank Chimero · Home](https://pin.fontofweb.com/7427?format=jpg)](https://design.withfudge.com/share/pin-7427)

[Frank Chimero · Home](https://design.withfudge.com/share/pin-7427)

[![Frank Chimero · Home](https://pin.fontofweb.com/7426?format=jpg)](https://design.withfudge.com/share/pin-7426)

[Frank Chimero · Home](https://design.withfudge.com/share/pin-7426)

[![Frank Chimero · Home](https://pin.fontofweb.com/7425?format=jpg)](https://design.withfudge.com/share/pin-7425)

[Frank Chimero · Home](https://design.withfudge.com/share/pin-7425)

[![Frank Chimero · Home](https://pin.fontofweb.com/7424?format=jpg)](https://design.withfudge.com/share/pin-7424)

[Frank Chimero · Home](https://design.withfudge.com/share/pin-7424)

[![Frank Chimero · Home](https://pin.fontofweb.com/7423?format=jpg)](https://design.withfudge.com/share/pin-7423)

[Frank Chimero · Home](https://design.withfudge.com/share/pin-7423)

## Overview

frankchimero.com presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#000000`, `#cccccc`, and `#555555`, with typography led by **Ibm Plex Sans** and **Martina Plantijn**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.surface | `#000000` | surface on page content in the main |
| color.text | `#cccccc` | text on page content in the main |
| color.text | `#555555` | text on page content in the footer |
| color.border | `#ffffff` | border on page content in the main |
| color.border | `#202020` | border on page content in the footer |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **Ibm Plex Sans** | 16px | 400 | 24px | normal | <div> in the main |
| type.body-14px | **Ibm Plex Sans** | 14px | 400 | 21px | normal | <li> in the main, <div> in the main, <span> in the main, <a> in the main, and <p> in the main |
| type.body-14px | **Ibm Plex Sans** | 14px | 400 | 24px | normal | <a> in the footer, <div> in the footer, <a> in the main, <span> in the main, and <div> in the main |
| type.body-18px | **Martina Plantijn** | 18px | 400 | 27px | normal | <p> in the main and <a> in the main |
| type.body-24px | **Martina Plantijn** | 24px | 400 | 28.8px | normal | <span> in the header, <h1> in the header, <span> in the main, and <h1> in the main |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `64px` | padding | page content |
| `12px 0px` | padding | page content |
| `4px 0px` | padding | page content |
| `18px 0px` | margin | page content |
| `0px 308.5px` | margin | page content |
| `8px 0px` | padding | page content |
| `14px 0px` | margin | page content |
| `4.5px 0px 18px` | margin | page content |

### Shape and depth

The captured pages use `0px none 8px`, `1px 0px 0px solid none none 0px`, and `1px 0px 0px solid none none 0px` border treatments.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#000000`. Text colors include `#cccccc` and `#555555`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Ibm Plex Sans** and **Martina Plantijn**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `64px`, `12px 0px`, `4px 0px`, `18px 0px`, and `0px 308.5px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#000000`. No structured gradient or shadow treatment is established.

## Components and states

The captured pages include repeated styling on <div>, <a>, <li>, <span>, <h1>, and <p> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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

- `#000000`
- `#cccccc`
- `#555555`
- `#ffffff`
- `#202020`

## Typography captured from frankchimero.com

- **Ibm Plex Sans** — weight 400 · size 16px
- **Martina Plantijn** — weight 400 · size 24px

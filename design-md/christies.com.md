# How christies.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/christies.com-design)

Last updated: 2026-08-03

## Captured pages

[![Christie’s | Fine Art, Luxury & Antiques Auctions](https://pin.fontofweb.com/7384?format=jpg)](https://design.withfudge.com/share/pin-7384)

[Christie’s | Fine Art, Luxury & Antiques Auctions](https://design.withfudge.com/share/pin-7384)

[![Christie’s | Fine Art, Luxury & Antiques Auctions](https://pin.fontofweb.com/7383?format=jpg)](https://design.withfudge.com/share/pin-7383)

[Christie’s | Fine Art, Luxury & Antiques Auctions](https://design.withfudge.com/share/pin-7383)

[![Christie’s | Fine Art, Luxury & Antiques Auctions](https://pin.fontofweb.com/7382?format=jpg)](https://design.withfudge.com/share/pin-7382)

[Christie’s | Fine Art, Luxury & Antiques Auctions](https://design.withfudge.com/share/pin-7382)

[![Christie’s | Fine Art, Luxury & Antiques Auctions](https://pin.fontofweb.com/7381?format=jpg)](https://design.withfudge.com/share/pin-7381)

[Christie’s | Fine Art, Luxury & Antiques Auctions](https://design.withfudge.com/share/pin-7381)

[![Christie’s | Fine Art, Luxury & Antiques Auctions](https://pin.fontofweb.com/7376?format=jpg)](https://design.withfudge.com/share/pin-7376)

[Christie’s | Fine Art, Luxury & Antiques Auctions](https://design.withfudge.com/share/pin-7376)

[![Christie’s | Fine Art, Luxury & Antiques Auctions](https://pin.fontofweb.com/7375?format=jpg)](https://design.withfudge.com/share/pin-7375)

[Christie’s | Fine Art, Luxury & Antiques Auctions](https://design.withfudge.com/share/pin-7375)

[![Christie’s | Fine Art, Luxury & Antiques Auctions](https://pin.fontofweb.com/7374?format=jpg)](https://design.withfudge.com/share/pin-7374)

[Christie’s | Fine Art, Luxury & Antiques Auctions](https://design.withfudge.com/share/pin-7374)

[![Christie’s | Fine Art, Luxury & Antiques Auctions](https://pin.fontofweb.com/7373?format=jpg)](https://design.withfudge.com/share/pin-7373)

[Christie’s | Fine Art, Luxury & Antiques Auctions](https://design.withfudge.com/share/pin-7373)

## Overview

christies.com presents a mixed light and dark surface treatment in the captured pages. The system is anchored by `#222222`, `#ffffff`, and `#000000`, with typography led by **Times**, **By Elias Hanzer**, and **Abc Arizona Serif**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#222222` | text on page content in the main |
| color.surface | `#ffffff` | surface on page content in the main |
| color.surface | `#000000` | surface on page content in the main |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **Times** | 16px | 400 | normal | normal | <div> in the main, <div>, and <a> in the main |
| type.body-14px | **By Elias Hanzer** | 14px | 500 | 16.8px | normal | <a> in the header, <button> in the button, <span> in the button, and <a> in the main |
| type.body-14px | **By Elias Hanzer** | 14px | 300 | 19.6px | normal | <div> in the main and <a> in the main |
| type.body-24px | **By Elias Hanzer** | 24px | 300 | 28.8px | normal | <a> in the main |
| type.body-16px | **By Elias Hanzer** | 16px | 300 | 22.4px | normal | <div> in the main and <a> in the main |
| type.display-32px | **Abc Arizona Serif** | 32px | 300 | 38.4px | normal | <h2> in the main |
| type.display-32px | **By Elias Hanzer** | 32px | 300 | 38.4px | normal | <h2> in the header |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `8px 16px` | padding | page content |
| `0px 12px` | padding | page content |
| `0px 48px` | padding | page content |
| `0px 5px` | margin | page content |
| `32px -12px 0px` | margin | page content |
| `8px` | padding | page content |
| `0px 0px 32px` | margin | page content |
| `40px 48px 8px 0px` | padding | page content |

### Shape and depth

The captured pages use `0px none 2px` and `1px solid 50%` border treatments.

## Colors

The visual system is mixed light and dark surface treatment. Surface colors include `#ffffff` and `#000000`. Text colors include `#222222`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Times**, **By Elias Hanzer**, and **Abc Arizona Serif**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `8px 16px`, `0px 12px`, `0px 48px`, `0px 5px`, and `32px -12px 0px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is mixed light and dark surface treatment. Surface treatment centers on `#ffffff` and `#000000`. No structured gradient or shadow treatment is established.

## Components and states

The captured pages include repeated styling on <div>, <a>, <h2>, <button>, and <span> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

## Responsive behavior

The captured token set does not establish breakpoint values or mobile behavior. Validate stacking, navigation changes, image treatment, and type scaling against the representative captures before implementing a responsive adaptation.

## Practical implementation guidance

- Preserve the mixed light/dark surface relationship and the measured type hierarchy before adding decorative treatment.
- Start from the returned typography, spacing, color, and border values; name any new scale or semantic role as an adaptation rather than as a source fact.
- Keep the captured font families separate from licensing decisions.
- Use screenshots to validate component anatomy, responsive behavior, focus treatment, and motion before shipping.
- Avoid introducing gradients or shadows beyond the captured treatment; none are established.

## Scope note

The guide uses representative captured pages. The evidence supports the values and observations above; it does not establish component semantics, interaction states, motion timing, breakpoint rules, font licensing, or a complete source stylesheet.

## Colors

- `#222222`
- `#ffffff`
- `#000000`

## Typography captured from christies.com

- **Times** — weight 400 · size 16px
- **By Elias Hanzer** — weight 300 · size 16px
- **Abc Arizona Serif** — weight 300 · size 32px

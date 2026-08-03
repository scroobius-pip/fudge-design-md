# How departuremono.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/departuremono.com-design)

Last updated: 2026-08-03

## Captured pages

[![Departure Mono](https://pin.fontofweb.com/9531?format=jpg)](https://design.withfudge.com/share/pin-9531)

[Departure Mono](https://design.withfudge.com/share/pin-9531)

[![Departure Mono](https://pin.fontofweb.com/9530?format=jpg)](https://design.withfudge.com/share/pin-9530)

[Departure Mono](https://design.withfudge.com/share/pin-9530)

[![Departure Mono](https://pin.fontofweb.com/5064?format=jpg)](https://design.withfudge.com/share/pin-5064)

[Departure Mono](https://design.withfudge.com/share/pin-5064)

[![Departure Mono](https://pin.fontofweb.com/5063?format=jpg)](https://design.withfudge.com/share/pin-5063)

[Departure Mono](https://design.withfudge.com/share/pin-5063)

[![Departure Mono](https://pin.fontofweb.com/5062?format=jpg)](https://design.withfudge.com/share/pin-5062)

[Departure Mono](https://design.withfudge.com/share/pin-5062)

[![Departure Mono](https://pin.fontofweb.com/5061?format=jpg)](https://design.withfudge.com/share/pin-5061)

[Departure Mono](https://design.withfudge.com/share/pin-5061)

[![Departure Mono](https://pin.fontofweb.com/5060?format=jpg)](https://design.withfudge.com/share/pin-5060)

[Departure Mono](https://design.withfudge.com/share/pin-5060)

[![Departure Mono](https://pin.fontofweb.com/5059?format=jpg)](https://design.withfudge.com/share/pin-5059)

[Departure Mono](https://design.withfudge.com/share/pin-5059)

## Overview

departuremono.com presents a mixed light and dark surface treatment in the captured pages. The system is anchored by `#444444`, `#eeeeee`, and `#222222`, with typography led by **Departure Mono** and **Applesystem**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#444444` | text on page content |
| color.surface | `#eeeeee` | surface on page content in the header |
| color.text | `#222222` | text on page content in the main |
| color.text | `#c0c0c0` | text on page content in the main |
| color.text | `#333333` | text on page content in the header |
| color.text | `#000000` | text on page content |
| color.text | `#6c6c58` | text on page content in the header |
| color.surface | `#cccccc` | surface on page content in the header |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.utility-11px | **Departure Mono** | 11px | 400 | normal | normal | <body>, <header> in the header, <div>, <img> in the header, <div> in the header, <p> in the header, <svg> in the main, <div> in the main, and <main> in the main |
| type.body-16.5px | **Departure Mono** | 16.5px | 400 | normal | normal | <img> in the header |
| type.utility-11px | **Departure Mono** | 11px | 400 | 11px | normal | <div> in the header |
| type.display-88px | **Departure Mono** | 88px | 400 | 88px | normal | <span> in the header and <h1> in the header |
| type.body-14px | **Applesystem** | 14px | 400 | normal | normal | <div> |
| type.body-16.5px | **Departure Mono** | 16.5px | 400 | 21px | normal | <a> in the header |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `0px 44px` | padding | page content |
| `44px` | padding-right | page content |
| `44px` | padding-left | page content |
| `137px 0px 0px` | padding | page content |
| `137px` | padding-top | page content |
| `0px 88.5px` | margin | page content |
| `88.5px` | margin-right | page content |
| `88.5px` | margin-left | page content |

### Shape and depth

No structured border, gradient, or shadow treatment was returned.

## Colors

The visual system is mixed light and dark surface treatment. Surface colors include `#eeeeee` and `#cccccc`. Text colors include `#444444`, `#222222`, and `#c0c0c0`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Departure Mono** and **Applesystem**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `0px 44px`, `44px`, `44px`, `137px 0px 0px`, and `137px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is mixed light and dark surface treatment. Surface treatment centers on `#eeeeee` and `#cccccc`. No structured gradient or shadow treatment is established.

## Components and states

The captured pages include repeated styling on <div>, <body>, <header>, <img>, <span>, <h1>, <p>, and <a> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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

- `#444444`
- `#eeeeee`
- `#222222`
- `#c0c0c0`
- `#333333`
- `#000000`
- `#6c6c58`
- `#cccccc`

## Typography captured from departuremono.com

- **Departure Mono** — weight 400 · size 11px
- **Applesystem** — weight 400 · size 14px

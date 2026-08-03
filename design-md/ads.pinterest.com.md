# How ads.pinterest.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/ads.pinterest.com-design)

Last updated: 2026-08-03

## Captured pages

[![(2) Pinterest](https://pin.fontofweb.com/7070?format=jpg)](https://design.withfudge.com/share/pin-7070)

[(2) Pinterest](https://design.withfudge.com/share/pin-7070)

[![(2) Pinterest](https://pin.fontofweb.com/7069?format=jpg)](https://design.withfudge.com/share/pin-7069)

[(2) Pinterest](https://design.withfudge.com/share/pin-7069)

[![(2) Pinterest](https://pin.fontofweb.com/7068?format=jpg)](https://design.withfudge.com/share/pin-7068)

[(2) Pinterest](https://design.withfudge.com/share/pin-7068)

## Overview

ads.pinterest.com presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#000000`, `#211922`, and `#ffffff`, with typography led by **Pin Sans Mac Os**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.surface | `#000000` | surface on page content in the main |
| color.text | `#211922` | text on page content in the main |
| color.surface | `#ffffff` | surface on page content in the main |
| color.border | `#c8c8c1` | border on page content in the main |
| color.text | `#62625b` | text on page content in the main |
| color.surface | `#e5e5e0` | surface on page content in the button |
| color.border | `#cdcdcd` | border on page content in the button |
| color.border | `#ef9ff9` | border on page content in the main |
| color.surface | `#fbfbf9` | surface on page content in the main |
| color.border | `#767676` | border on page content in the button |
| color.surface | `#ebeeff` | surface on page content in the main |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.utility-12px | **Pin Sans Mac Os** | 12px | 400 | normal | normal | <div> in the main, <div> in the button, <div>, <div> in the nav, and <button> in the button |
| type.body-14px | **Pin Sans Mac Os** | 14px | 400 | 19.6px | normal | <span> in the main, <a> in the main, <div> in the main, and <div> in the button |
| type.heading-16px | **Pin Sans Mac Os** | 16px | 700 | 22.4px | normal | <h1> in the button, <div> in the main, <div> in the button, and <span> in the button |
| type.utility-12px | **Pin Sans Mac Os** | 12px | 400 | 18px | normal | <div> in the button, <div> in the main, and <span> in the main |
| type.heading-28px | **Pin Sans Mac Os** | 28px | 700 | 30.8px | -0.5px | <div> in the main and <h1> in the main |
| type.body-16px | **Pin Sans Mac Os** | 16px | 400 | 22.4px | normal | <span> in the main, <span> in the nav, and <div> in the main |
| type.utility-12px | **Pin Sans Mac Os** | 12px | 500 | 18px | normal | <div> in the main |
| type.body-14px | **Pin Sans Mac Os** | 14px | 500 | 19.6px | normal | <div> in the button |
| type.heading-14px | **Pin Sans Mac Os** | 14px | 700 | 19.6px | normal | <span> in the main and <div> in the main |
| type.body-28px | **Pin Sans Mac Os** | 28px | 400 | normal | normal | <div> in the button |
| type.body-14px | **Pin Sans Mac Os** | 14px | 400 | normal | normal | <div> in the button |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `24px` | padding | page content |
| `20px` | padding | page content |
| `16px 32px` | padding | page content |
| `16px` | padding | page content |
| `8px 0px` | padding | page content |
| `-8px` | margin | page content |
| `24px 0px` | padding | page content |
| `0px 24px 0px 0px` | margin | page content |

### Shape and depth

The captured pages use `1px solid 16px`, `0px none 16px`, `1px solid 0px`, `5px solid 16px`, `2px solid 12px`, `0px none 8px`, and `2px solid 8px` border treatments. Recorded gradients include `linear-gradient(272deg, rgb(219, 225, 255) 37.04%, rgb(251, 223, 255) 92.1%)`. Recorded shadows include `rgba(0, 0, 0, 0.2) 0px 3px 12px 0px`.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#000000`, `#ffffff`, and `#e5e5e0`. Text colors include `#211922` and `#62625b`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Pin Sans Mac Os**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `24px`, `20px`, `16px 32px`, `16px`, and `8px 0px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#000000`, `#ffffff`, `#e5e5e0`, and `#fbfbf9`. Depth is supported by the returned gradients and shadows.

## Components and states

The captured pages include repeated styling on <div>, <span>, <h1>, <button>, and <a> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

## Responsive behavior

The captured token set does not establish breakpoint values or mobile behavior. Validate stacking, navigation changes, image treatment, and type scaling against the representative captures before implementing a responsive adaptation.

## Practical implementation guidance

- Preserve the dark surface relationship and the measured type hierarchy before adding decorative treatment.
- Start from the returned typography, spacing, color, and border values; name any new scale or semantic role as an adaptation rather than as a source fact.
- Keep the captured font families separate from licensing decisions.
- Use screenshots to validate component anatomy, responsive behavior, focus treatment, and motion before shipping.
- Avoid introducing gradients or shadows beyond the captured treatment; the returned evidence includes those treatments.

## Scope note

The guide uses representative captured pages. The evidence supports the values and observations above; it does not establish component semantics, interaction states, motion timing, breakpoint rules, font licensing, or a complete source stylesheet.

## Colors

- `#000000`
- `#211922`
- `#ffffff`
- `#c8c8c1`
- `#62625b`
- `#e5e5e0`
- `#cdcdcd`
- `#ef9ff9`
- `#fbfbf9`
- `#767676`
- `#ebeeff`

## Typography captured from ads.pinterest.com

- **Pin Sans Mac Os** — weight 400 · size 12px

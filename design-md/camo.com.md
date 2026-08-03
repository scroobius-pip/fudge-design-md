# How camo.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/camo.com-design)

Last updated: 2026-08-03

## Captured pages

[![Camo Studio - Stand out video with any camera](https://pin.fontofweb.com/7178?format=jpg)](https://design.withfudge.com/share/pin-7178)

[Camo Studio - Stand out video with any camera](https://design.withfudge.com/share/pin-7178)

[![Camo Studio - Stand out video with any camera](https://pin.fontofweb.com/7177?format=jpg)](https://design.withfudge.com/share/pin-7177)

[Camo Studio - Stand out video with any camera](https://design.withfudge.com/share/pin-7177)

[![Camo Studio - Stand out video with any camera](https://pin.fontofweb.com/7176?format=jpg)](https://design.withfudge.com/share/pin-7176)

[Camo Studio - Stand out video with any camera](https://design.withfudge.com/share/pin-7176)

## Overview

camo.com presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#000000`, `#dce2f4`, and `#ffffff`, with typography led by **Inter**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.surface | `#000000` | surface on page content |
| color.text | `#dce2f4` | text on page content |
| color.text | `#ffffff` | text on page content |
| color.surface | `#09111f` | surface on page content |
| color.text | `#9992f7` | text on page content |
| color.text | `#f7be38` | text on page content |
| color.text | `#a7a2f8` | text on page content |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **Inter** | 16px | 400 | 24px | -0.176px | <div> and <div> in the nav |
| type.body-16px | **Inter** | 16px | 400 | 28px | -0.176px | <p> |
| type.display-36px | **Inter** | 36px | 600 | 40px | -0.176px | <h2> |
| type.body-20px | **Inter** | 20px | 400 | 28px | -0.176px | <h2> |
| type.utility-12px | **Inter** | 12px | 400 | 18px | -0.176px | <div> |
| type.display-60px | **Inter** | 60px | 600 | 60px | -0.176px | <h1> |
| type.heading-14px | **Inter** | 14px | 600 | 21px | normal | <button> in the button |
| type.heading-14px | **Inter** | 14px | 600 | 20px | -0.176px | <span>, <a>, and <a> in the nav |
| type.heading-16px | **Inter** | 16px | 600 | 24px | -0.176px | <a> and <span> |
| type.heading-18px | **Inter** | 18px | 600 | 22.5px | -0.176px | <p> |
| type.heading-14px | **Inter** | 14px | 700 | 20px | -0.176px | <span> |
| type.heading-20px | **Inter** | 20px | 700 | 20px | -0.176px | <span> in the nav |
| type.body-14.4px | **Inter** | 14.4px | 400 | 21.6px | -0.176px | <a> |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `0px 340.5px` | margin | page content |
| `312px 0px 96px` | padding | page content |
| `0px 0px 12px` | margin | page content |
| `0px 96px 24px` | margin | page content |
| `0px 112px 36px` | margin | page content |
| `0px 0px 24px` | margin | page content |
| `-36px 0px 0px` | margin | page content |
| `0px 208px` | margin | page content |

### Shape and depth

The captured pages use `1px solid 9999px`, `1px solid 4px`, `0px none 4px`, and `1px solid 24px` border treatments. Recorded gradients include `linear-gradient(to top, rgb(9, 17, 31), rgba(9, 17, 31, 0.25), rgba(9, 17, 31, 0))`. Recorded shadows include `rgba(0, 0, 0, 0.1) 0px 8px 40px 0px, rgba(255, 255, 255, 0.1) 0px -4px 12px 0px inset`.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#000000` and `#09111f`. Text colors include `#dce2f4`, `#ffffff`, and `#9992f7`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Inter**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `0px 340.5px`, `312px 0px 96px`, `0px 0px 12px`, `0px 96px 24px`, and `0px 112px 36px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#000000` and `#09111f`. Depth is supported by the returned gradients and shadows.

## Components and states

The captured pages include repeated styling on <p>, <h2>, <div>, <button>, <span>, <h1>, and <a> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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
- `#dce2f4`
- `#ffffff`
- `#09111f`
- `#9992f7`
- `#f7be38`
- `#a7a2f8`

## Typography captured from camo.com

- **Inter** — weight 600 · size 18px

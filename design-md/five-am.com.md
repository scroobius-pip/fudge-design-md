# How five-am.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/five-am.com-design)

Last updated: 2026-08-03

## Captured pages

[![Design & Technology | 5AM](https://pin.fontofweb.com/8238?format=jpg)](https://design.withfudge.com/share/pin-8238)

[Design & Technology | 5AM](https://design.withfudge.com/share/pin-8238)

[![Design & Technology | 5AM](https://pin.fontofweb.com/8237?format=jpg)](https://design.withfudge.com/share/pin-8237)

[Design & Technology | 5AM](https://design.withfudge.com/share/pin-8237)

## Overview

five-am.com presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#000000` and `#ffffff`, with typography led by **Satoshi**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#000000` | text on page content in the main |
| color.text | `#ffffff` | text on page content in the main |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-14px | **Satoshi** | 14px | 400 | 18.2px | normal | <button> in the button |
| type.body-14px | **Satoshi** | 14px | 400 | 18.2px | -0.3px | <div> in the main, <p> in the main, <a> in the main, <a> in the nav, <span> in the nav, and <div> in the header |
| type.display-80px | **Satoshi** | 80px | 400 | 72px | -5px | <h1> in the main |
| type.body-18px | **Satoshi** | 18px | 400 | 22.5px | -0.3px | <div> in the main |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `0px 0px 4px` | padding | page content |
| `2px 8px` | padding | page content |
| `0px 2.5px` | padding | page content |
| `2px 0px` | margin | page content |
| `28px 16px 0px` | padding | page content |
| `8px 0px 0px` | margin | page content |
| `0px 0px 0px 8px` | margin | page content |
| `2px` | padding | page content |

### Shape and depth

The captured pages use `0px none 9999px` and `1px solid 9999px` border treatments.

## Colors

The visual system is predominantly dark surface treatment. Surface roles are not fully established. Text colors include `#000000` and `#ffffff`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Satoshi**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `0px 0px 4px`, `2px 8px`, `0px 2.5px`, `2px 0px`, and `28px 16px 0px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. The surface palette is not fully established. No structured gradient or shadow treatment is established.

## Components and states

The captured pages include repeated styling on <div>, <p>, <a>, <h1>, <button>, and <span> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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
- `#ffffff`

## Typography captured from five-am.com

- **Satoshi** — weight 400 · size 14px

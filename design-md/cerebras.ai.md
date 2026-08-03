# How cerebras.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/cerebras.ai-design)

Last updated: 2026-08-03

## Captured pages

[![Cerebras](https://pin.fontofweb.com/9329?format=jpg)](https://design.withfudge.com/share/pin-9329)

[Cerebras](https://design.withfudge.com/share/pin-9329)

[![Careers](https://pin.fontofweb.com/3203?format=jpg)](https://design.withfudge.com/share/pin-3203)

[Careers](https://design.withfudge.com/share/pin-3203)

[![Cerebras](https://pin.fontofweb.com/3202?format=jpg)](https://design.withfudge.com/share/pin-3202)

[Cerebras](https://design.withfudge.com/share/pin-3202)

[![Cerebras](https://pin.fontofweb.com/3201?format=jpg)](https://design.withfudge.com/share/pin-3201)

[Cerebras](https://design.withfudge.com/share/pin-3201)

[![Cerebras](https://pin.fontofweb.com/3200?format=jpg)](https://design.withfudge.com/share/pin-3200)

[Cerebras](https://design.withfudge.com/share/pin-3200)

[![Cerebras](https://pin.fontofweb.com/3199?format=jpg)](https://design.withfudge.com/share/pin-3199)

[Cerebras](https://design.withfudge.com/share/pin-3199)

[![Cerebras](https://pin.fontofweb.com/3198?format=jpg)](https://design.withfudge.com/share/pin-3198)

[Cerebras](https://design.withfudge.com/share/pin-3198)

[![Cerebras](https://pin.fontofweb.com/3197?format=jpg)](https://design.withfudge.com/share/pin-3197)

[Cerebras](https://design.withfudge.com/share/pin-3197)

## Overview

cerebras.ai presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#ffffff`, `#2e180f`, and `#000000`, with typography led by **Manrope** and **Sometype Mono**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#ffffff` | text on page content in the main |
| color.surface | `#2e180f` | surface on page content in the main |
| color.surface | `#000000` | surface on page content in the main |
| color.text | `#f15a27` | text on page content in the main |
| color.surface | `#f15a29` | surface on page content |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **Manrope** | 16px | 400 | 24px | normal | <div> in the main and <div> |
| type.body-16px | **Manrope** | 16px | 500 | 24px | normal | <p> in the main |
| type.body-20px | **Manrope** | 20px | 500 | 26px | -0.4px | <h3> in the main |
| type.display-36px | **Manrope** | 36px | 400 | 39.6px | -0.72px | <h2> in the main and <span> in the main |
| type.utility-13px | **Sometype Mono** | 13px | 600 | 13px | 0.26px | <div> in the main |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `48px` | padding | page content |
| `0px 2px` | padding | page content |
| `16px 0px 0px` | margin | page content |
| `8px 20px` | padding | page content |
| `48px 0px 0px` | margin | page content |

### Shape and depth

The captured pages use `0px none 2px` and `0px none 50%` border treatments.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#2e180f`, `#000000`, and `#f15a29`. Text colors include `#ffffff` and `#f15a27`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Manrope** and **Sometype Mono**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `48px`, `0px 2px`, `16px 0px 0px`, `8px 20px`, and `48px 0px 0px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#2e180f`, `#000000`, and `#f15a29`. No structured gradient or shadow treatment is established.

## Components and states

The captured pages include repeated styling on <div>, <h2>, <p>, <h3>, and <span> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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
- `#2e180f`
- `#000000`
- `#f15a27`
- `#f15a29`

## Typography captured from cerebras.ai

- **Manrope** — weight 400 · size 16px
- **Sometype Mono** — weight 600 · size 13px

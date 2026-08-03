# How flowgenie.pro is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/flowgenie.pro-design)

Last updated: 2026-08-03

## Captured pages

[![FlowGenie | Create logic and forms without any code. | FlowGenie](https://pin.fontofweb.com/7692?format=jpg)](https://design.withfudge.com/share/pin-7692)

[FlowGenie | Create logic and forms without any code. | FlowGenie](https://design.withfudge.com/share/pin-7692)

[![FlowGenie | Create logic and forms without any code. | FlowGenie](https://pin.fontofweb.com/7691?format=jpg)](https://design.withfudge.com/share/pin-7691)

[FlowGenie | Create logic and forms without any code. | FlowGenie](https://design.withfudge.com/share/pin-7691)

[![FlowGenie | Create logic and forms without any code. | FlowGenie](https://pin.fontofweb.com/7690?format=jpg)](https://design.withfudge.com/share/pin-7690)

[FlowGenie | Create logic and forms without any code. | FlowGenie](https://design.withfudge.com/share/pin-7690)

[![FlowGenie | Create logic and forms without any code. | FlowGenie](https://pin.fontofweb.com/7689?format=jpg)](https://design.withfudge.com/share/pin-7689)

[FlowGenie | Create logic and forms without any code. | FlowGenie](https://design.withfudge.com/share/pin-7689)

## Overview

flowgenie.pro presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#000000`, `#171717`, and `#525252`, with typography led by **Geist**, **System**, and **Inter**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#000000` | text on page content in the main |
| color.text | `#171717` | text on page content in the main |
| color.text | `#525252` | text on page content in the main |
| color.text | `#ffffff` | text on page content in the main |
| color.text | `#1e2939` | text on page content in the main |
| color.text | `#1b1c1e` | text on page content in the main |
| color.surface | `#155dfc` | surface on page content in the main |
| color.text | `#364153` | text on page content in the main |
| color.text | `#62748e` | text on page content |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **Geist** | 16px | 400 | 24px | normal | <div> in the main, <div>, <a>, and <div> in the button |
| type.display-56px | **Geist** | 56px | 400 | 70px | normal | <h2> in the main |
| type.body-18px | **Geist** | 18px | 400 | 18px | normal | <p> in the main |
| type.display-48px | **Geist** | 48px | 400 | 60px | normal | <h3> in the main |
| type.body-14px | **Geist** | 14px | 400 | 22.75px | normal | <p> in the main |
| type.body-20px | **Geist** | 20px | 400 | 28px | normal | <h3> in the main |
| type.display-48px | **System** | 48px | 500 | 60px | normal | <h1> in the main |
| type.body-18px | **Geist** | 18px | 400 | 29.25px | normal | <p> in the main |
| type.body-14px | **Geist** | 14px | 500 | 20px | normal | <a> in the main and <a> |
| type.body-20px | **Geist** | 20px | 400 | 30px | normal | <h2> in the main |
| type.body-16px | **Inter** | 16px | 400 | 24px | normal | <div> in the button |
| type.body-16px | **Geist** | 16px | 500 | 24px | normal | <a> in the main |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `0px 0px 32px` | margin | page content |
| `208px 0px 144px` | padding | page content |
| `0px 0px 80px` | padding | page content |
| `0px 0px 16px` | margin | page content |
| `0px 16px` | padding | page content |
| `0px 24px` | padding | page content |
| `24px` | padding | page content |
| `96px 0px 0px` | margin | page content |

### Shape and depth

The captured pages use `0px none 16px`, `0px none 8px`, `0px none 4px`, and `0px none 12px` border treatments. Recorded gradients include `linear-gradient(rgb(96, 165, 250), rgb(2, 132, 199))` and `linear-gradient(rgb(236, 72, 153), rgb(159, 18, 57))`. Recorded shadows include `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px` and `rgba(255, 255, 255, 0.28) 0px 2px 5px 0px inset`.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#155dfc`. Text colors include `#000000`, `#171717`, and `#525252`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Geist**, **System**, and **Inter**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `0px 0px 32px`, `208px 0px 144px`, `0px 0px 80px`, `0px 0px 16px`, and `0px 16px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#155dfc`. Depth is supported by the returned gradients and shadows.

## Components and states

The captured pages include repeated styling on <div>, <p>, <h3>, <a>, <h2>, and <h1> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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
- `#171717`
- `#525252`
- `#ffffff`
- `#1e2939`
- `#1b1c1e`
- `#155dfc`
- `#364153`
- `#62748e`

## Typography captured from flowgenie.pro

- **Geist** — weight 400 · size 16px
- **System** — weight 500 · size 48px
- **Inter** — weight 400 · size 16px

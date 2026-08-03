# How base-ui.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/base-ui.com-design)

Last updated: 2026-08-03

## Captured pages

[![Base UI](https://pin.fontofweb.com/8041?format=jpg)](https://design.withfudge.com/share/pin-8041)

[Base UI](https://design.withfudge.com/share/pin-8041)

[![Base UI](https://pin.fontofweb.com/8040?format=jpg)](https://design.withfudge.com/share/pin-8040)

[Base UI](https://design.withfudge.com/share/pin-8040)

[![Base UI](https://pin.fontofweb.com/8039?format=jpg)](https://design.withfudge.com/share/pin-8039)

[Base UI](https://design.withfudge.com/share/pin-8039)

[![Quick start · Base UI](https://pin.fontofweb.com/3865?format=jpg)](https://design.withfudge.com/share/pin-3865)

[Quick start · Base UI](https://design.withfudge.com/share/pin-3865)

[![Base UI](https://pin.fontofweb.com/3864?format=jpg)](https://design.withfudge.com/share/pin-3864)

[Base UI](https://design.withfudge.com/share/pin-3864)

## Overview

base-ui.com presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#ededed` and `#000000`, with typography led by **Times**, **Die Grotesk A**, and **Die Grotesk B**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#ededed` | text on page content |
| color.surface | `#000000` | surface on page content |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **Times** | 16px | 400 | normal | normal | <div>, <div> in the main, <div> in the footer, <li> in the main, <div> in the header, and <ul> in the main |
| type.body-18px | **Die Grotesk A** | 18px | 400 | 25px | normal | <h2> in the main, <span> in the main, <button> in the button, and <p> in the main |
| type.display-42px | **Die Grotesk B** | 42px | 400 | 44px | normal | <h1> in the main |
| type.body-15px | **Die Grotesk A** | 15px | 400 | 22px | normal | <a> in the nav and <a> in the header |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `0px 64.5px` | margin | page content |
| `12px 0px` | padding | page content |

### Shape and depth

No structured border, gradient, or shadow treatment was returned.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#000000`. Text colors include `#ededed`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Times**, **Die Grotesk A**, and **Die Grotesk B**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `0px 64.5px` and `12px 0px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#000000`. No structured gradient or shadow treatment is established.

## Components and states

The captured pages include repeated styling on <div>, <h2>, <span>, <li>, <button>, <p>, <a>, and <h1> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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

- `#ededed`
- `#000000`

## Typography captured from base-ui.com

- **Times** — weight 400 · size 16px
- **Die Grotesk A** — weight 400 · size 18px
- **Die Grotesk B** — weight 400 · size 42px

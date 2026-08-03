# How chainlift.io is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/chainlift.io-design)

Last updated: 2026-08-03

## Captured pages

[![LiftKit: The UI Framework for Perfectionists by Chainlift.io](https://pin.fontofweb.com/6347?format=jpg)](https://design.withfudge.com/share/pin-6347)

[LiftKit: The UI Framework for Perfectionists by Chainlift.io](https://design.withfudge.com/share/pin-6347)

[![LiftKit: The UI Framework for Perfectionists by Chainlift.io](https://pin.fontofweb.com/6346?format=jpg)](https://design.withfudge.com/share/pin-6346)

[LiftKit: The UI Framework for Perfectionists by Chainlift.io](https://design.withfudge.com/share/pin-6346)

[![LiftKit: The UI Framework for Perfectionists by Chainlift.io](https://pin.fontofweb.com/6345?format=jpg)](https://design.withfudge.com/share/pin-6345)

[LiftKit: The UI Framework for Perfectionists by Chainlift.io](https://design.withfudge.com/share/pin-6345)

## Overview

chainlift.io presents a mixed light and dark surface treatment in the captured pages. The system is anchored by `#e4e1e6`, `#dee1ff`, and `#001258`, with typography led by **Inter Font** and **Material Symbols Outlined**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#e4e1e6` | text on page content |
| color.text | `#dee1ff` | text on page content in the footer |
| color.surface | `#001258` | surface on page content in the footer |
| color.text | `#7d7d7d` | text on page content |
| color.surface | `#0e0e11` | surface on page content |
| color.shadow | `#727272` | shadow on page content |
| color.text | `#bac3ff` | text on page content |
| color.border | `#90909a` | border on page content |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-17.1px | **Inter Font** | 17.1px | 400 | 20px | normal | <div>, <a>, and <div> in the footer |
| type.display-72.4185px | **Inter Font** | 72.4185px | 700 | 92.1163px | -2.53465px | <h1> and <h3> |
| type.body-13.4406px | **Inter Font** | 13.4406px | 400 | 17.0964px | -0.03px | <div>, <div> in the footer, and <a> in the footer |
| type.body-17.1px | **Inter Font** | 17.1px | 400 | 27.6678px | -0.18px | <li> in the footer |
| type.heading-27.6678px | **Inter Font** | 27.6678px | 600 | 35.1934px | -0.553356px | <p> and <span> |
| type.heading-19.3059px | **Inter Font** | 19.3059px | 600 | 24.5571px | -0.26px | <div> in the footer, <h3>, and <span> |
| type.heading-15.1335px | **Inter Font** | 15.1335px | 600 | 19.2498px | -0.105935px | <h4> |
| type.body-15.1335px | **Inter Font** | 15.1335px | 400 | 19.2498px | -0.0945844px | <p> |
| type.display-35.1918px | **Inter Font** | 35.1918px | 600 | 44.764px | -0.93px | <h2> and <h3> |
| type.body-17.1px | **Inter Font** | 17.1px | 400 | 27.6678px | -0.1881px | <div> |
| type.body-21.7512px | **Inter Font** | 21.7512px | 500 | 20px | normal | <a> |
| type.body-25.888px | **Material Symbols Outlined** | 25.888px | 400 | 25.888px | -0.71px | <p> |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `72.4185px` | padding | page content |
| `15.1335px 19.3059px 15.1335px 15.1335px` | padding | page content |
| `4.6512px 0px` | padding | page content |
| `56.9279px 0px 25.0556px` | margin | page content |
| `56.9279px 0px 72.4185px` | margin | page content |
| `0px 146.594px` | margin | page content |
| `0px 0px 44.7665px` | margin | page content |
| `0px 0px 3.57151px` | margin | page content |

### Shape and depth

The captured pages use `0px none 15.1776px` and `1px solid 2175.12px` border treatments. Recorded shadows include `rgb(114, 114, 114) 0px 0px 1px 0px`.

## Colors

The visual system is mixed light and dark surface treatment. Surface colors include `#001258` and `#0e0e11`. Text colors include `#e4e1e6`, `#dee1ff`, and `#7d7d7d`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Inter Font** and **Material Symbols Outlined**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `72.4185px`, `15.1335px 19.3059px 15.1335px 15.1335px`, `4.6512px 0px`, `56.9279px 0px 25.0556px`, and `56.9279px 0px 72.4185px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is mixed light and dark surface treatment. Surface treatment centers on `#001258` and `#0e0e11`. Depth is supported by the returned shadows.

## Components and states

The captured pages include repeated styling on <div>, <h1>, <h2>, <a>, <p>, <h3>, <li>, and <span> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

## Responsive behavior

The captured token set does not establish breakpoint values or mobile behavior. Validate stacking, navigation changes, image treatment, and type scaling against the representative captures before implementing a responsive adaptation.

## Practical implementation guidance

- Preserve the mixed light/dark surface relationship and the measured type hierarchy before adding decorative treatment.
- Start from the returned typography, spacing, color, and border values; name any new scale or semantic role as an adaptation rather than as a source fact.
- Keep the captured font families separate from licensing decisions.
- Use screenshots to validate component anatomy, responsive behavior, focus treatment, and motion before shipping.
- Avoid introducing gradients or shadows beyond the captured treatment; the returned evidence includes those treatments.

## Scope note

The guide uses representative captured pages. The evidence supports the values and observations above; it does not establish component semantics, interaction states, motion timing, breakpoint rules, font licensing, or a complete source stylesheet.

## Colors

- `#e4e1e6`
- `#dee1ff`
- `#001258`
- `#7d7d7d`
- `#0e0e11`
- `#727272`
- `#bac3ff`
- `#90909a`

## Typography captured from chainlift.io

- **Inter Font** — weight 400 · size 17.1px
- **Material Symbols Outlined** — weight 400 · size 25.888px

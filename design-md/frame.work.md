# How frame.work is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/frame.work-design)

Last updated: 2026-08-03

## Captured pages

[![Framework | Framework Laptop 13 Pro: Intel Core Ultra 3 & LPCAMM2](https://pin.fontofweb.com/9024?format=jpg)](https://design.withfudge.com/share/pin-9024)

[Framework | Framework Laptop 13 Pro: Intel Core Ultra 3 & LPCAMM2](https://design.withfudge.com/share/pin-9024)

[![Framework | Framework Laptop 13 Pro: Intel Core Ultra 3 & LPCAMM2](https://pin.fontofweb.com/9023?format=jpg)](https://design.withfudge.com/share/pin-9023)

[Framework | Framework Laptop 13 Pro: Intel Core Ultra 3 & LPCAMM2](https://design.withfudge.com/share/pin-9023)

[![Framework | Framework Laptop 13 Pro: Intel Core Ultra 3 & LPCAMM2](https://pin.fontofweb.com/9022?format=jpg)](https://design.withfudge.com/share/pin-9022)

[Framework | Framework Laptop 13 Pro: Intel Core Ultra 3 & LPCAMM2](https://design.withfudge.com/share/pin-9022)

[![Framework | Framework Laptop 13 Pro: Intel Core Ultra 3 & LPCAMM2](https://pin.fontofweb.com/9021?format=jpg)](https://design.withfudge.com/share/pin-9021)

[Framework | Framework Laptop 13 Pro: Intel Core Ultra 3 & LPCAMM2](https://design.withfudge.com/share/pin-9021)

[![Framework | Framework Laptop 13 Pro: Intel Core Ultra 3 & LPCAMM2](https://pin.fontofweb.com/9020?format=jpg)](https://design.withfudge.com/share/pin-9020)

[Framework | Framework Laptop 13 Pro: Intel Core Ultra 3 & LPCAMM2](https://design.withfudge.com/share/pin-9020)

[![Framework | Framework Laptop 13 Pro: Intel Core Ultra 3 & LPCAMM2](https://pin.fontofweb.com/9019?format=jpg)](https://design.withfudge.com/share/pin-9019)

[Framework | Framework Laptop 13 Pro: Intel Core Ultra 3 & LPCAMM2](https://design.withfudge.com/share/pin-9019)

[![Framework | Framework Laptop 13 Pro: Intel Core Ultra 3 & LPCAMM2](https://pin.fontofweb.com/9018?format=jpg)](https://design.withfudge.com/share/pin-9018)

[Framework | Framework Laptop 13 Pro: Intel Core Ultra 3 & LPCAMM2](https://design.withfudge.com/share/pin-9018)

## Overview

frame.work presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#000000`, `#ffffff`, and `#1f1f1f`, with typography led by **Graphik**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.surface | `#000000` | surface on page content in the main |
| color.text | `#ffffff` | text on page content in the main |
| color.text | `#1f1f1f` | text on page content in the button |
| color.text | `#f3f2f2` | text on page content in the main |
| color.text | `#2a2422` | text on page content in the main |
| color.text | `#f66331` | text on page content in the main |
| color.surface | `#f2f2f2` | surface on page content in the main |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **Graphik** | 16px | 400 | 24px | normal | <div> in the main and <p> in the main |
| type.body-16px | **Graphik** | 16px | 400 | 28.4445px | normal | <div> in the main, <p> in the main, and <span> in the main |
| type.display-60px | **Graphik** | 60px | 600 | 75px | normal | <h1> in the main |
| type.display-36px | **Graphik** | 36px | 600 | 45px | normal | <h3> in the main |
| type.display-48px | **Graphik** | 48px | 600 | 60px | normal | <h3> in the main and <h2> in the main |
| type.display-96px | **Graphik** | 96px | 600 | 96px | normal | <h2> in the main |
| type.body-16px | **Graphik** | 16px | 500 | 24px | normal | <div> in the main and <a> in the main |
| type.body-14px | **Graphik** | 14px | 500 | 20px | normal | <p> in the main, <a> in the nav, <span> in the nav, <a> in the header, and <span> in the header |
| type.heading-16px | **Graphik** | 16px | 600 | 24px | normal | <span> in the button and <span> in the main |
| type.body-14px | **Graphik** | 14px | 400 | 20px | normal | <div> in the header |
| type.body-16px | **Graphik** | 16px | 400 | 28px | normal | <p> in the main |
| type.display-60px | **Graphik** | 60px | 900 | 75px | normal | <strong> in the main |
| type.heading-18px | **Graphik** | 18px | 600 | 28px | normal | <h4> in the main and <span> in the main |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `80px` | padding | page content |
| `32px` | padding | page content |
| `0px 132px` | margin | page content |
| `0px 0px 16px` | margin | page content |
| `96px 0px 0px` | padding | page content |
| `0px 0px 48px` | padding | page content |
| `36px 0px 0px` | margin | page content |
| `0px 40px 80px` | padding | page content |

### Shape and depth

The captured pages use `0px none 12px` and `0px none 3.35544e+07px` border treatments. Recorded gradients include `linear-gradient(rgba(0, 0, 0, 0) 71.07%, rgba(0, 0, 0, 0.5) 100%)`.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#000000` and `#f2f2f2`. Text colors include `#ffffff`, `#1f1f1f`, and `#f3f2f2`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Graphik**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `80px`, `32px`, `0px 132px`, `0px 0px 16px`, and `96px 0px 0px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#000000` and `#f2f2f2`. Depth is supported by the returned gradients.

## Components and states

The captured pages include repeated styling on <div>, <h3>, <span>, <h2>, <p>, <h4>, <a>, and <h1> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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
- `#ffffff`
- `#1f1f1f`
- `#f3f2f2`
- `#2a2422`
- `#f66331`
- `#f2f2f2`

## Typography captured from frame.work

- **Graphik** — weight 400 · size 16px

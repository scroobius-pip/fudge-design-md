# How builtwith.kit.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/builtwith.kit.com-design)

Last updated: 2026-08-03

## Captured pages

[![Email Platform for Creators – Launch & Grow with Kit](https://pin.fontofweb.com/6376?format=jpg)](https://design.withfudge.com/share/pin-6376)

[Email Platform for Creators – Launch & Grow with Kit](https://design.withfudge.com/share/pin-6376)

[![Email Platform for Creators – Launch & Grow with Kit](https://pin.fontofweb.com/6375?format=jpg)](https://design.withfudge.com/share/pin-6375)

[Email Platform for Creators – Launch & Grow with Kit](https://design.withfudge.com/share/pin-6375)

[![Email Platform for Creators – Launch & Grow with Kit](https://pin.fontofweb.com/6374?format=jpg)](https://design.withfudge.com/share/pin-6374)

[Email Platform for Creators – Launch & Grow with Kit](https://design.withfudge.com/share/pin-6374)

## Overview

builtwith.kit.com presents a predominantly light surface treatment in the captured pages. The system is anchored by `#f2efe9`, `#1e1e1e`, and `#ffffff`, with typography led by **Libre Franklin** and **Kit Sans**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#f2efe9` | text on page content |
| color.text | `#1e1e1e` | text on page content in the footer |
| color.text | `#ffffff` | text on page content |
| color.surface | `#44b1ff` | surface on page content in the footer |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **Libre Franklin** | 16px | 400 | 24px | -0.16px | <div>, <div> in the footer, <span> in the footer, <p>, <ul>, <span>, and <li> |
| type.display-80px | **Kit Sans** | 80px | 500 | 76px | normal | <span> |
| type.display-64px | **Kit Sans** | 64px | 500 | 64px | normal | <h3> and <span> |
| type.heading-18px | **Libre Franklin** | 18px | 700 | 27px | -0.16px | <p> |
| type.heading-20px | **Libre Franklin** | 20px | 700 | 30px | -0.16px | <p> |
| type.heading-16px | **Libre Franklin** | 16px | 600 | 16px | -0.14px | <a> in the footer, <a>, and <span> |
| type.utility-12px | **Libre Franklin** | 12px | 400 | 18px | -0.16px | <p> in the footer and <span> in the footer |
| type.display-48px | **Kit Sans** | 48px | 500 | 48px | normal | <h2> |
| type.utility-12px | **Libre Franklin** | 12px | 600 | 18px | -0.16px | <p> in the footer |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `0px 16px` | padding | page content |
| `80px 0px` | padding | page content |
| `0px 0px 64px` | margin | page content |
| `44px 16px` | padding | page content |
| `20px 20px 40px` | padding | page content |
| `40px 0px 0px` | padding | page content |
| `40px 0px 0px` | margin | page content |
| `0px 0px 24px` | margin | page content |

### Shape and depth

The captured pages use `0px none 8px` and `0px none 12px` border treatments.

## Colors

The visual system is predominantly light surface treatment. Surface colors include `#44b1ff`. Text colors include `#f2efe9`, `#1e1e1e`, and `#ffffff`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Libre Franklin** and **Kit Sans**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `0px 16px`, `80px 0px`, `0px 0px 64px`, `44px 16px`, and `20px 20px 40px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly light surface treatment. Surface treatment centers on `#44b1ff`. No structured gradient or shadow treatment is established.

## Components and states

The captured pages include repeated styling on <div>, <span>, <p>, <a>, <h2>, <ul>, <li>, and <h3> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

## Responsive behavior

The captured token set does not establish breakpoint values or mobile behavior. Validate stacking, navigation changes, image treatment, and type scaling against the representative captures before implementing a responsive adaptation.

## Practical implementation guidance

- Preserve the light surface relationship and the measured type hierarchy before adding decorative treatment.
- Start from the returned typography, spacing, color, and border values; name any new scale or semantic role as an adaptation rather than as a source fact.
- Keep the captured font families separate from licensing decisions.
- Use screenshots to validate component anatomy, responsive behavior, focus treatment, and motion before shipping.
- Avoid introducing gradients or shadows beyond the captured treatment; none are established.

## Scope note

The guide uses representative captured pages. The evidence supports the values and observations above; it does not establish component semantics, interaction states, motion timing, breakpoint rules, font licensing, or a complete source stylesheet.

## Colors

- `#f2efe9`
- `#1e1e1e`
- `#ffffff`
- `#44b1ff`

## Typography captured from builtwith.kit.com

- **Libre Franklin** — weight 400 · size 16px
- **Kit Sans** — weight 500 · size 48px

# How agentation.dev is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/agentation.dev-design)

Last updated: 2026-08-03

## Captured pages

[![Agentation](https://pin.fontofweb.com/6235?format=jpg)](https://design.withfudge.com/share/pin-6235)

[Agentation](https://design.withfudge.com/share/pin-6235)

[![Agentation](https://pin.fontofweb.com/6234?format=jpg)](https://design.withfudge.com/share/pin-6234)

[Agentation](https://design.withfudge.com/share/pin-6234)

## Overview

agentation.dev presents a predominantly light surface treatment in the captured pages. The system is anchored by `#000000`, `#111111`, and `#ffffff`, with typography led by **Inter** and **System**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#000000` | text on page content in the nav |
| color.text | `#111111` | text on page content in the nav |
| color.surface | `#ffffff` | surface on page content in the main |
| color.surface | `#faf9f7` | surface on page content in the main |
| color.surface | `#1a1a1a` | surface on page content |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-14px | **Inter** | 14px | 450 | 23.2px | -0.08px | <p> in the main, <li> in the main, and <span> in the main |
| type.body-15px | **Inter** | 15px | 400 | normal | normal | <div> in the nav, <div> in the main, and <ol> in the main |
| type.body-18px | **Inter** | 18px | 580 | 25.2px | -0.32px | <h1> in the header |
| type.utility-13px | **Inter** | 13px | 550 | normal | -0.08px | <h2> in the main |
| type.utility-12px | **Inter** | 12px | 400 | normal | normal | <a> in the nav and <span> in the button |
| type.body-15px | **System** | 15px | 400 | normal | normal | <div> |
| type.body-13.3333px | **Inter** | 13.3333px | 400 | normal | normal | <button> in the button |
| type.body-14px | **Inter** | 14px | 500 | normal | normal | <div> in the nav and <span> in the nav |
| type.utility-7px | **System** | 7px | 400 | 11.2px | normal | <text> in the main |
| type.body-14px | **Inter** | 14px | 550 | 23.2px | -0.08px | <strong> in the main |
| type.utility-12px | **Inter** | 12px | 500 | normal | normal | <button> in the button |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `12px 0px 0px` | margin | page content |
| `12px 14px` | padding | page content |
| `8px 0px 0px` | margin | page content |
| `10px 12px` | padding | page content |
| `0px 0px 18px` | margin | page content |
| `0px 0px 0px 16px` | padding | page content |
| `12px 0px` | padding | page content |
| `14px` | padding | page content |

### Shape and depth

The captured pages use `0px none 10px`, `0px none 50%`, `0px none 16px`, `0px none 3px`, and `0px none 8px` border treatments.

## Colors

The visual system is predominantly light surface treatment. Surface colors include `#ffffff`, `#faf9f7`, and `#1a1a1a`. Text colors include `#000000` and `#111111`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Inter** and **System**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `12px 0px 0px`, `12px 14px`, `8px 0px 0px`, `10px 12px`, and `0px 0px 18px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly light surface treatment. Surface treatment centers on `#ffffff`, `#faf9f7`, and `#1a1a1a`. No structured gradient or shadow treatment is established.

## Components and states

The captured pages include repeated styling on <div>, <a>, <span>, <h1>, <p>, <li>, <h2>, and <ol> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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

- `#000000`
- `#111111`
- `#ffffff`
- `#faf9f7`
- `#1a1a1a`

## Typography captured from agentation.dev

- **Inter** — weight 500 · size 14px
- **System** — weight 400 · size 7px

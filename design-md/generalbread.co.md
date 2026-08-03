# How generalbread.co is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/generalbread.co-design)

Last updated: 2026-08-03

## Captured pages

[![Bread — The Only Modern Bitcoin App](https://pin.fontofweb.com/8328?format=jpg)](https://design.withfudge.com/share/pin-8328)

[Bread — The Only Modern Bitcoin App](https://design.withfudge.com/share/pin-8328)

[![Bread — The Only Modern Bitcoin App](https://pin.fontofweb.com/8327?format=jpg)](https://design.withfudge.com/share/pin-8327)

[Bread — The Only Modern Bitcoin App](https://design.withfudge.com/share/pin-8327)

## Overview

generalbread.co presents a predominantly light surface treatment in the captured pages. The system is anchored by `#1a1a1a`, `#8ecfe2`, and `#000000`, with typography led by **Applesystem**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#1a1a1a` | text on page content in the main |
| color.surface | `#8ecfe2` | surface on page content in the main |
| color.surface | `#000000` | surface on page content in the main |
| color.text | `#ffffff` | text on page content in the button |
| color.shadow | `#aaaaaa` | shadow on page content in the button |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **Applesystem** | 16px | 400 | normal | normal | <div> in the main and <a> in the header |
| type.body-14px | **Applesystem** | 14px | 500 | 14px | normal | <button> in the button |
| type.body-15px | **Applesystem** | 15px | 500 | 15px | normal | <button> in the button |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `164px 0px 0px` | padding | page content |
| `8px 16px` | padding | page content |
| `12px 24px` | padding | page content |
| `8px 0px 0px` | margin | page content |

### Shape and depth

The captured pages use `0px none 12px` border treatments. Recorded gradients include `linear-gradient(rgb(26, 26, 26), rgb(74, 74, 74))`. Recorded shadows include `rgb(170, 170, 170) 0px 0px 0px 1px inset` and `rgba(0, 0, 0, 0.1) 0px 0px 24px 0px`.

## Colors

The visual system is predominantly light surface treatment. Surface colors include `#8ecfe2` and `#000000`. Text colors include `#1a1a1a` and `#ffffff`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Applesystem**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `164px 0px 0px`, `8px 16px`, `12px 24px`, and `8px 0px 0px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly light surface treatment. Surface treatment centers on `#8ecfe2` and `#000000`. Depth is supported by the returned gradients and shadows.

## Components and states

The captured pages include repeated styling on <div>, <a>, and <button> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

## Responsive behavior

The captured token set does not establish breakpoint values or mobile behavior. Validate stacking, navigation changes, image treatment, and type scaling against the representative captures before implementing a responsive adaptation.

## Practical implementation guidance

- Preserve the light surface relationship and the measured type hierarchy before adding decorative treatment.
- Start from the returned typography, spacing, color, and border values; name any new scale or semantic role as an adaptation rather than as a source fact.
- Keep the captured font families separate from licensing decisions.
- Use screenshots to validate component anatomy, responsive behavior, focus treatment, and motion before shipping.
- Avoid introducing gradients or shadows beyond the captured treatment; the returned evidence includes those treatments.

## Scope note

The guide uses representative captured pages. The evidence supports the values and observations above; it does not establish component semantics, interaction states, motion timing, breakpoint rules, font licensing, or a complete source stylesheet.

## Colors

- `#1a1a1a`
- `#8ecfe2`
- `#000000`
- `#ffffff`
- `#aaaaaa`

## Typography captured from generalbread.co

- **Applesystem** — weight 400 · size 16px

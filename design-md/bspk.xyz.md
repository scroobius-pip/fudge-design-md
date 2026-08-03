# How bspk.xyz is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/bspk.xyz-design)

Last updated: 2026-08-03

## Captured pages

[![Anthropic — BSPK](https://pin.fontofweb.com/9365?format=jpg)](https://design.withfudge.com/share/pin-9365)

[Anthropic — BSPK](https://design.withfudge.com/share/pin-9365)

[![Anthropic — BSPK](https://pin.fontofweb.com/9364?format=jpg)](https://design.withfudge.com/share/pin-9364)

[Anthropic — BSPK](https://design.withfudge.com/share/pin-9364)

[![Anthropic — BSPK](https://pin.fontofweb.com/9363?format=jpg)](https://design.withfudge.com/share/pin-9363)

[Anthropic — BSPK](https://design.withfudge.com/share/pin-9363)

## Overview

bspk.xyz presents a predominantly light surface treatment in the captured pages. The system is anchored by `#333333`, with typography led by **Chivo** and **Courier New**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#333333` | text on page content |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **Chivo** | 16px | 400 | 28.8px | 0.32px | <div>, <div> in the main, and <div> in the footer |
| type.body-14px | **Courier New** | 14px | 400 | 21px | normal | <h3> in the footer |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `0px 17px 17px` | padding | page content |
| `17px` | padding | page content |

### Shape and depth

No structured border, gradient, or shadow treatment was returned.

## Colors

The visual system is predominantly light surface treatment. Surface roles are not fully established. Text colors include `#333333`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Chivo** and **Courier New**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `0px 17px 17px` and `17px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly light surface treatment. The surface palette is not fully established. No structured gradient or shadow treatment is established.

## Components and states

The captured pages include repeated styling on <div> and <h3> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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

- `#333333`

## Typography captured from bspk.xyz

- **Chivo** — weight 400 · size 16px
- **Courier New** — weight 400 · size 14px

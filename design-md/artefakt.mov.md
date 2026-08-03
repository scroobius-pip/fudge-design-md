# How artefakt.mov is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/artefakt.mov-design)

Last updated: 2026-08-03

## Captured pages

[![Artefakt — Hybrid Production Frankfurt](https://pin.fontofweb.com/8539?format=jpg)](https://design.withfudge.com/share/pin-8539)

[Artefakt — Hybrid Production Frankfurt](https://design.withfudge.com/share/pin-8539)

[![Artefakt — Hybrid Production Frankfurt](https://pin.fontofweb.com/8538?format=jpg)](https://design.withfudge.com/share/pin-8538)

[Artefakt — Hybrid Production Frankfurt](https://design.withfudge.com/share/pin-8538)

## Overview

artefakt.mov presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#ffffff` and `#000000`, with typography led by **Tronica Mono**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#ffffff` | text on page content in the header |
| color.surface | `#000000` | surface on page content in the header |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-14.3333px | **Tronica Mono** | 14.3333px | 400 | 15.7667px | normal | <div> in the header, <div> in the main, <span> in the main, and <p> in the main |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `0px 23.8889px` | padding | page content |

### Shape and depth

No structured border, gradient, or shadow treatment was returned.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#000000`. Text colors include `#ffffff`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Tronica Mono**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `0px 23.8889px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#000000`. No structured gradient or shadow treatment is established.

## Components and states

The captured pages include repeated styling on <div>, <span>, and <p> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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
- `#000000`

## Typography captured from artefakt.mov

- **Tronica Mono** — weight 400 · size 14.3333px

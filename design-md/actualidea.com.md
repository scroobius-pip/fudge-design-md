# How actualidea.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/actualidea.com-design)

Last updated: 2026-08-03

## Captured pages

[![Mickey Pangilinan - Creative Direction + Design — Nylon](https://pin.fontofweb.com/8697?format=jpg)](https://design.withfudge.com/share/pin-8697)

[Mickey Pangilinan - Creative Direction + Design — Nylon](https://design.withfudge.com/share/pin-8697)

[![Mickey Pangilinan - Creative Direction + Design — Nylon](https://pin.fontofweb.com/8696?format=jpg)](https://design.withfudge.com/share/pin-8696)

[Mickey Pangilinan - Creative Direction + Design — Nylon](https://design.withfudge.com/share/pin-8696)

[![Mickey Pangilinan - Creative Direction + Design — Nylon](https://pin.fontofweb.com/8695?format=jpg)](https://design.withfudge.com/share/pin-8695)

[Mickey Pangilinan - Creative Direction + Design — Nylon](https://design.withfudge.com/share/pin-8695)

[![Mickey Pangilinan - Creative Direction + Design — Nylon](https://pin.fontofweb.com/8694?format=jpg)](https://design.withfudge.com/share/pin-8694)

[Mickey Pangilinan - Creative Direction + Design — Nylon](https://design.withfudge.com/share/pin-8694)

[![Mickey Pangilinan - Creative Direction + Design — Nylon](https://pin.fontofweb.com/8693?format=jpg)](https://design.withfudge.com/share/pin-8693)

[Mickey Pangilinan - Creative Direction + Design — Nylon](https://design.withfudge.com/share/pin-8693)

## Overview

actualidea.com presents a mixed light and dark surface treatment in the captured pages. The system is anchored by `#282828`, `#000000`, and `#ffffff`, with typography led by **Applesystem** and **Helvetica Neue**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#282828` | text on page content in the main |
| color.surface | `#000000` | surface on page content in the main |
| color.surface | `#ffffff` | surface on page content in the main |
| color.surface | `#e60023` | surface on page content |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **Applesystem** | 16px | 400 | 16px | normal | <div> in the main |
| type.utility-11px | **Helvetica Neue** | 11px | 700 | 20px | normal | <span> |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `0px 0px 0px -940.6px` | margin | page content |
| `-50px 301.513px -50px 301.495px` | margin | page content |
| `0px 8px` | padding | page content |
| `-50px 296.997px` | margin | page content |

### Shape and depth

The captured pages use `0px none 20px` and `0px none 10px` border treatments.

## Colors

The visual system is mixed light and dark surface treatment. Surface colors include `#000000`, `#ffffff`, and `#e60023`. Text colors include `#282828`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Applesystem** and **Helvetica Neue**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `0px 0px 0px -940.6px`, `-50px 301.513px -50px 301.495px`, `0px 8px`, and `-50px 296.997px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is mixed light and dark surface treatment. Surface treatment centers on `#000000`, `#ffffff`, and `#e60023`. No structured gradient or shadow treatment is established.

## Components and states

The captured pages include repeated styling on <div> and <span> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

## Responsive behavior

The captured token set does not establish breakpoint values or mobile behavior. Validate stacking, navigation changes, image treatment, and type scaling against the representative captures before implementing a responsive adaptation.

## Practical implementation guidance

- Preserve the mixed light/dark surface relationship and the measured type hierarchy before adding decorative treatment.
- Start from the returned typography, spacing, color, and border values; name any new scale or semantic role as an adaptation rather than as a source fact.
- Keep the captured font families separate from licensing decisions.
- Use screenshots to validate component anatomy, responsive behavior, focus treatment, and motion before shipping.
- Avoid introducing gradients or shadows beyond the captured treatment; none are established.

## Scope note

The guide uses representative captured pages. The evidence supports the values and observations above; it does not establish component semantics, interaction states, motion timing, breakpoint rules, font licensing, or a complete source stylesheet.

## Colors

- `#282828`
- `#000000`
- `#ffffff`
- `#e60023`

## Typography captured from actualidea.com

- **Applesystem** — weight 400 · size 16px
- **Helvetica Neue** — weight 700 · size 11px

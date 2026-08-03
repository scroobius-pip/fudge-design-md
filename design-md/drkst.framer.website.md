# How drkst.framer.website is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/drkst.framer.website-design)

Last updated: 2026-08-03

## Captured pages

[![Drkst®](https://pin.fontofweb.com/9029?format=jpg)](https://design.withfudge.com/share/pin-9029)

[Drkst®](https://design.withfudge.com/share/pin-9029)

[![Drkst®](https://pin.fontofweb.com/5589?format=jpg)](https://design.withfudge.com/share/pin-5589)

[Drkst®](https://design.withfudge.com/share/pin-5589)

## Overview

drkst.framer.website presents a mixed light and dark surface treatment in the captured pages. The system is anchored by `#000000`, `#f2f2f2`, and `#030303`, with typography led by **System** and **Inter**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#000000` | text on page content in the main |
| color.surface | `#f2f2f2` | surface on page content in the main |
| color.text | `#030303` | text on page content in the nav |
| color.text | `#0000ee` | text on page content in the nav |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.utility-12px | **System** | 12px | 400 | normal | normal | <div> in the main, <div> in the nav, <a> in the nav, and <div> |
| type.body-16px | **Inter** | 16px | 400 | 18.4px | -0.48px | <p> |
| type.body-25px | **Inter** | 25px | 400 | 22.5px | -1.25px | <h3> in the nav |
| type.body-15px | **Inter** | 15px | 400 | 18.9px | -0.3px | <p> in the nav |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `0px 10px` | padding | page content |
| `6px 14px` | padding | page content |

### Shape and depth

The captured pages use `0px none 10px` and `0px none 5px` border treatments.

## Colors

The visual system is mixed light and dark surface treatment. Surface colors include `#f2f2f2`. Text colors include `#000000`, `#030303`, and `#0000ee`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **System** and **Inter**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `0px 10px` and `6px 14px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is mixed light and dark surface treatment. Surface treatment centers on `#f2f2f2`. No structured gradient or shadow treatment is established.

## Components and states

The captured pages include repeated styling on <div>, <h3>, <a>, and <p> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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

- `#000000`
- `#f2f2f2`
- `#030303`
- `#0000ee`

## Typography captured from drkst.framer.website

- **System** — weight 400 · size 12px
- **Inter** — weight 400 · size 25px

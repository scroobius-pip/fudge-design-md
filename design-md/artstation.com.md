# How artstation.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/artstation.com-design)

Last updated: 2026-08-03

## Captured pages

[![ArtStation - Daniel Reid](https://pin.fontofweb.com/8864?format=jpg)](https://design.withfudge.com/share/pin-8864)

[ArtStation - Daniel Reid](https://design.withfudge.com/share/pin-8864)

[![ArtStation - All Channels](https://pin.fontofweb.com/2253?format=jpg)](https://design.withfudge.com/share/pin-2253)

[ArtStation - All Channels](https://design.withfudge.com/share/pin-2253)

## Overview

artstation.com presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#bebec2` and `#000000`, with typography led by **Inter**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#bebec2` | text on page content |
| color.surface | `#000000` | surface on page content |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-14px | **Inter** | 14px | 400 | 25.2px | 0.21px | <div> |

### Spacing

No structured spacing observations were returned.

### Shape and depth

No structured border, gradient, or shadow treatment was returned.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#000000`. Text colors include `#bebec2`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Inter**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

No structured spacing values were returned. Container widths, grid rules, and section rhythm require screenshot review.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#000000`. No structured gradient or shadow treatment is established.

## Components and states

The captured pages include repeated styling on <div> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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

- `#bebec2`
- `#000000`

## Typography captured from artstation.com

- **Inter** — weight 400 · size 14px

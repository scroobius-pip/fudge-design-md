# How earth.google.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/earth.google.com-design)

Last updated: 2026-08-03

## Captured pages

[![Google Earth](https://pin.fontofweb.com/9655?format=jpg)](https://design.withfudge.com/share/pin-9655)

[Google Earth](https://design.withfudge.com/share/pin-9655)

[![Google Earth](https://pin.fontofweb.com/9654?format=jpg)](https://design.withfudge.com/share/pin-9654)

[Google Earth](https://design.withfudge.com/share/pin-9654)

[![Google Earth](https://pin.fontofweb.com/9653?format=jpg)](https://design.withfudge.com/share/pin-9653)

[Google Earth](https://design.withfudge.com/share/pin-9653)

## Overview

earth.google.com presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#000000`, with typography led by **Times** and **Applesystem**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#000000` | text on page content |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **Times** | 16px | 400 | normal | normal | <body> |
| type.body-14px | **Applesystem** | 14px | 400 | normal | normal | <div> |

### Spacing

No structured spacing observations were returned.

### Shape and depth

No structured border, gradient, or shadow treatment was returned.

## Colors

The visual system is predominantly dark surface treatment. Surface roles are not fully established. Text colors include `#000000`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Times** and **Applesystem**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

No structured spacing values were returned. Container widths, grid rules, and section rhythm require screenshot review.

## Visual language

The captured visual language is predominantly dark surface treatment. The surface palette is not fully established. No structured gradient or shadow treatment is established.

## Components and states

The captured pages include repeated styling on <div> and <body> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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

- `#000000`

## Typography captured from earth.google.com

- **Times** — weight 400 · size 16px
- **Applesystem** — weight 400 · size 14px

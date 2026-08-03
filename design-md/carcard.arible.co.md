# How carcard.arible.co is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/carcard.arible.co-design)

Last updated: 2026-08-03

## Captured pages

[![CarCard — Digitize your business cards](https://pin.fontofweb.com/7745?format=jpg)](https://design.withfudge.com/share/pin-7745)

[CarCard — Digitize your business cards](https://design.withfudge.com/share/pin-7745)

[![CardScanner — Digitize your business cards](https://pin.fontofweb.com/7743?format=jpg)](https://design.withfudge.com/share/pin-7743)

[CardScanner — Digitize your business cards](https://design.withfudge.com/share/pin-7743)

## Overview

carcard.arible.co presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#000000`, `#1a1a1a`, and `#999999`, with typography led by **Applesystem** and **Georgia**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.surface | `#000000` | surface on page content in the footer |
| color.text | `#1a1a1a` | text on page content in the footer |
| color.text | `#999999` | text on page content in the main |
| color.border | `#e5e5e0` | border on page content in the main |
| color.text | `#6b6b6b` | text on page content |
| color.text | `#3a7d44` | text on page content in the main |
| color.text | `#ffffff` | text on page content |
| color.surface | `#f0f0ea` | surface on page content in the button |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **Applesystem** | 16px | 400 | 25.6px | normal | <div> in the footer, <div> in the header, and <div> in the main |
| type.display-48px | **Georgia** | 48px | 400 | 55.2px | -0.48px | <h2> in the footer |
| type.heading-14px | **Applesystem** | 14px | 600 | 22.4px | normal | <div> in the main |
| type.display-44px | **Georgia** | 44px | 400 | 50.6px | -0.44px | <h1> |
| type.utility-12px | **Applesystem** | 12px | 400 | 19.2px | normal | <div> in the main |
| type.body-14px | **Georgia** | 14px | 400 | 22.4px | normal | <p> |
| type.body-18px | **Georgia** | 18px | 400 | 28.8px | normal | <p> in the main |
| type.body-14px | **Applesystem** | 14px | 400 | 22.4px | normal | <p> in the main |
| type.body-14px | **Applesystem** | 14px | 500 | 22.4px | normal | <span> in the footer, <div> in the footer, <a> in the footer, <p> in the footer, and <a> |
| type.body-14px | **Applesystem** | 14px | 450 | 22.4px | normal | <p> in the footer |
| type.body-16px | **Applesystem** | 16px | 400 | 27.2px | normal | <p> |
| type.utility-12px | **Applesystem** | 12px | 500 | 19.2px | normal | <div> in the footer |
| type.utility-12px | **Applesystem** | 12px | 500 | 19.2px | 0.48px | <span> in the main |
| type.body-14px | **Applesystem** | 14px | 500 | normal | normal | <button> in the button |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `0px 32px` | padding | page content |
| `0px 385px` | margin | page content |
| `0px 0px 20px` | margin | page content |
| `0px 0px 12px` | padding | page content |
| `40px 32px` | padding | page content |
| `0px 0px 40px` | margin | page content |
| `2px 0px 0px` | margin | page content |
| `12px 24px` | padding | page content |

### Shape and depth

The captured pages use `1px dashed 10px`, `1px 0px 0px solid none none 0px`, `1px solid 6px`, `1px solid 6px`, and `0px none 4px` border treatments.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#000000` and `#f0f0ea`. Text colors include `#1a1a1a`, `#999999`, and `#6b6b6b`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Applesystem** and **Georgia**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `0px 32px`, `0px 385px`, `0px 0px 20px`, `0px 0px 12px`, and `40px 32px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#000000` and `#f0f0ea`. No structured gradient or shadow treatment is established.

## Components and states

The captured pages include repeated styling on <div>, <p>, <h2>, <span>, <a>, <h1>, and <button> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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
- `#1a1a1a`
- `#999999`
- `#e5e5e0`
- `#6b6b6b`
- `#3a7d44`
- `#ffffff`
- `#f0f0ea`

## Typography captured from carcard.arible.co

- **Applesystem** — weight 400 · size 16px
- **Georgia** — weight 400 · size 48px

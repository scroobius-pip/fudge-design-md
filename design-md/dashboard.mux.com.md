# How dashboard.mux.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/dashboard.mux.com-design)

Last updated: 2026-08-03

## Captured pages

[![Sign Up | Mux](https://pin.fontofweb.com/6451?format=jpg)](https://design.withfudge.com/share/pin-6451)

[Sign Up | Mux](https://design.withfudge.com/share/pin-6451)

[![Login | Mux](https://pin.fontofweb.com/2001?format=jpg)](https://design.withfudge.com/share/pin-2001)

[Login | Mux](https://design.withfudge.com/share/pin-2001)

## Overview

dashboard.mux.com presents a mixed light and dark surface treatment in the captured pages. The system is anchored by `#242628`, `#e2e4dd`, and `#000000`, with typography led by **Aeonik** and **Jet Brains Mono**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#242628` | text on page content |
| color.surface | `#e2e4dd` | surface on page content |
| color.surface | `#000000` | surface on page content |
| color.border | `#828c97` | border on page content |
| color.surface | `#ffffff` | surface on page content |
| color.surface | `#f4f6f4` | surface on page content |
| color.surface | `#ffb200` | surface on page content in the button |
| color.border | `#bd8209` | border on page content in the button |
| color.surface | `#d0d2c8` | surface on page content |
| color.border | `#b2bac2` | border on page content |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-14px | **Aeonik** | 14px | 400 | 22.4px | 0.35px | <div> |
| type.body-14px | **Aeonik** | 14px | 400 | 20px | 0.35px | <div> |
| type.body-14px | **Aeonik** | 14px | 400 | 21px | 0.35px | <div> |
| type.heading-18px | **Aeonik** | 18px | 700 | 28.8px | 0.35px | <div> |
| type.display-32px | **Aeonik** | 32px | 700 | 42px | normal | <h1> |
| type.body-16px | **Aeonik** | 16px | 400 | 20px | 0.35px | <a> |
| type.body-14px | **Jet Brains Mono** | 14px | 400 | 22.4px | 0.35px | <span> in the button |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `28px 0px` | padding | page content |
| `0px 14px` | padding | page content |
| `0px 56px` | padding | page content |
| `110px 82px` | padding | page content |
| `-1px` | margin | page content |
| `35px 35px 42px` | padding | page content |
| `0px 0px 8px` | margin | page content |
| `14px 20px` | padding | page content |

### Shape and depth

The captured pages use `1px 0px solid none 0px`, `1px solid 28px`, `1px solid 28px`, and `1px solid 2px` border treatments.

## Colors

The visual system is mixed light and dark surface treatment. Surface colors include `#e2e4dd`, `#000000`, and `#ffffff`. Text colors include `#242628`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Aeonik** and **Jet Brains Mono**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `28px 0px`, `0px 14px`, `0px 56px`, `110px 82px`, and `-1px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is mixed light and dark surface treatment. Surface treatment centers on `#e2e4dd`, `#000000`, `#ffffff`, and `#f4f6f4`. No structured gradient or shadow treatment is established.

## Components and states

The captured pages include repeated styling on <div>, <h1>, <a>, and <span> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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

- `#242628`
- `#e2e4dd`
- `#000000`
- `#828c97`
- `#ffffff`
- `#f4f6f4`
- `#ffb200`
- `#bd8209`
- `#d0d2c8`
- `#b2bac2`

## Typography captured from dashboard.mux.com

- **Aeonik** — weight 400 · size 14px
- **Jet Brains Mono** — weight 400 · size 14px

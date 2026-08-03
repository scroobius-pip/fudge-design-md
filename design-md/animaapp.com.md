# How animaapp.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/animaapp.com-design)

Last updated: 2026-08-03

## Captured pages

[![Anima: the UX Design Agent](https://pin.fontofweb.com/5953?format=jpg)](https://design.withfudge.com/share/pin-5953)

[Anima: the UX Design Agent](https://design.withfudge.com/share/pin-5953)

[![Anima: the UX Design Agent](https://pin.fontofweb.com/5951?format=jpg)](https://design.withfudge.com/share/pin-5951)

[Anima: the UX Design Agent](https://design.withfudge.com/share/pin-5951)

## Overview

animaapp.com presents a mixed light and dark surface treatment in the captured pages. The system is anchored by `#ffffff`, `#706f6b`, and `#a3a3a3`, with typography led by **Mulish** and **Roslindale**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#ffffff` | text on page content in the header |
| color.border | `#706f6b` | border on page content in the main |
| color.text | `#a3a3a3` | text on page content in the main |
| color.surface | `#ffc0cb` | surface on page content |
| color.surface | `#1e1e1e` | surface on page content |
| color.text | `#d1d5db` | text on page content |
| color.text | `#d8d8d8` | text on page content in the nav |
| color.text | `#9ca3af` | text on page content in the button |
| color.text | `#2d2d2d` | text on page content in the header |
| color.surface | `#2b2b2b` | surface on page content in the main |
| color.surface | `#6d54cf` | surface on page content in the button |
| color.text | `#000000` | text on page content in the button |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.display-76px | **Roslindale** | 76px | 400 | 91.2px | -1.52px | <h1> in the main |
| type.body-14px | **Mulish** | 14px | 400 | 21px | normal | <a>, <strong>, <h4> in the main, and <p> |
| type.body-27px | **Mulish** | 27px | 400 | 40.5px | normal | <p> in the main |
| type.body-16px | **Mulish** | 16px | 400 | 16px | normal | <div> |
| type.body-16px | **Mulish** | 16px | 400 | 24px | normal | <div> in the nav and <div> in the main |
| type.body-14px | **Mulish** | 14px | 400 | 18px | normal | <button> in the button |
| type.body-14px | **Mulish** | 14px | 500 | normal | normal | <button> in the button |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `12px 80px 80px` | padding | page content |
| `32px 0px` | padding | page content |
| `25px 32px` | padding | page content |
| `0px 0px 24px` | margin | page content |
| `8px 0px` | padding | page content |
| `12px 0px 0px` | margin | page content |
| `0px 24px` | padding | page content |
| `0px 32px` | padding | page content |

### Shape and depth

The captured pages use `1px solid 12px`, `0px none 8px`, `1px solid 8px`, `1px solid 100px`, `1px solid 100px`, `1px solid 6px`, `0px none 6px`, and `1px solid 8px` border treatments. Recorded gradients include `linear-gradient(90deg, rgb(45, 45, 45)` and `linear-gradient(135deg, rgba(51, 102, 255, 0.8)`.

## Colors

The visual system is mixed light and dark surface treatment. Surface colors include `#ffc0cb`, `#1e1e1e`, and `#2b2b2b`. Text colors include `#ffffff`, `#a3a3a3`, and `#d1d5db`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Roslindale** and **Mulish**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `12px 80px 80px`, `32px 0px`, `25px 32px`, `0px 0px 24px`, and `8px 0px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is mixed light and dark surface treatment. Surface treatment centers on `#ffc0cb`, `#1e1e1e`, `#2b2b2b`, and `#6d54cf`. Depth is supported by the returned gradients.

## Components and states

The captured pages include repeated styling on <div>, <strong>, <h1>, <p>, <h4>, <a>, and <button> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

## Responsive behavior

The captured token set does not establish breakpoint values or mobile behavior. Validate stacking, navigation changes, image treatment, and type scaling against the representative captures before implementing a responsive adaptation.

## Practical implementation guidance

- Preserve the mixed light/dark surface relationship and the measured type hierarchy before adding decorative treatment.
- Start from the returned typography, spacing, color, and border values; name any new scale or semantic role as an adaptation rather than as a source fact.
- Keep the captured font families separate from licensing decisions.
- Use screenshots to validate component anatomy, responsive behavior, focus treatment, and motion before shipping.
- Avoid introducing gradients or shadows beyond the captured treatment; the returned evidence includes those treatments.

## Scope note

The guide uses representative captured pages. The evidence supports the values and observations above; it does not establish component semantics, interaction states, motion timing, breakpoint rules, font licensing, or a complete source stylesheet.

## Colors

- `#ffffff`
- `#706f6b`
- `#a3a3a3`
- `#ffc0cb`
- `#1e1e1e`
- `#d1d5db`
- `#d8d8d8`
- `#9ca3af`
- `#2d2d2d`
- `#2b2b2b`
- `#6d54cf`
- `#000000`
- `#5c61e3`

## Typography captured from animaapp.com

- **Mulish** — weight 400 · size 16px
- **Roslindale** — weight 400 · size 76px

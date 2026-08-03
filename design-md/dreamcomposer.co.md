# How dreamcomposer.co is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/dreamcomposer.co-design)

Last updated: 2026-08-03

## Captured pages

[![DreamComposer - A collaborative platform for sharing dreams and ideas](https://pin.fontofweb.com/8792?format=jpg)](https://design.withfudge.com/share/pin-8792)

[DreamComposer - A collaborative platform for sharing dreams and ideas](https://design.withfudge.com/share/pin-8792)

[![DreamComposer - A collaborative platform for sharing dreams and ideas](https://pin.fontofweb.com/8791?format=jpg)](https://design.withfudge.com/share/pin-8791)

[DreamComposer - A collaborative platform for sharing dreams and ideas](https://design.withfudge.com/share/pin-8791)

## Overview

dreamcomposer.co presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#000000` and `#fafcf6`, with typography led by **System**, **Ibm Plex Mono**, and **Geist**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.surface | `#000000` | surface on page content |
| color.text | `#fafcf6` | text on page content |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-14px | **System** | 14px | 400 | 21px | normal | <div>, <div> in the button, and <button> in the button |
| type.utility-12px | **Ibm Plex Mono** | 12px | 400 | 0px | -0.12px | <div> |
| type.body-14px | **Ibm Plex Mono** | 14px | 400 | normal | -0.12px | <p> |
| type.body-14px | **System** | 14px | 400 | 0px | normal | <div> |
| type.display-46px | **Geist** | 46px | 400 | 44px | -0.96px | <p> |
| type.utility-12px | **Ibm Plex Mono** | 12px | 400 | normal | -0.09px | <a> and <p> |
| type.utility-11px | **Ibm Plex Mono** | 11px | 400 | 11px | -0.09px | <span> in the button |
| type.body-14px | **Geist** | 14px | 400 | normal | normal | <p> and <a> |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `0px 0px 14px` | margin | page content |
| `47px 21px` | padding | page content |
| `16px` | padding | page content |
| `21px 0px 0px` | margin | page content |
| `4px 10px` | padding | page content |

### Shape and depth

The captured pages use `2px dotted 87.5px` border treatments.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#000000`. Text colors include `#fafcf6`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **System**, **Ibm Plex Mono**, and **Geist**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `0px 0px 14px`, `47px 21px`, `16px`, `21px 0px 0px`, and `4px 10px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#000000`. No structured gradient or shadow treatment is established.

## Components and states

The captured pages include repeated styling on <div>, <p>, <a>, <span>, and <button> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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
- `#fafcf6`

## Typography captured from dreamcomposer.co

- **System** — weight 400 · size 14px
- **Ibm Plex Mono** — weight 400 · size 14px
- **Geist** — weight 400 · size 46px

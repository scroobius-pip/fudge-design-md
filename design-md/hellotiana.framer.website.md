# How hellotiana.framer.website is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/hellotiana.framer.website-design)

Last updated: 2026-08-03

## Captured pages

[![Christiana Uzonwanne - Senior product designer](https://pin.fontofweb.com/9054?format=jpg)](https://design.withfudge.com/share/pin-9054)

[Christiana Uzonwanne - Senior product designer](https://design.withfudge.com/share/pin-9054)

[![Christiana Uzonwanne - Senior product designer](https://pin.fontofweb.com/9053?format=jpg)](https://design.withfudge.com/share/pin-9053)

[Christiana Uzonwanne - Senior product designer](https://design.withfudge.com/share/pin-9053)

## Overview

hellotiana.framer.website presents a predominantly light surface treatment in the captured pages. The system is anchored by `#000000`, `#ffffff`, and `#0000ee`, with typography led by **System**, **Figtree**, and **Bbh Hegarty**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#000000` | text on page content |
| color.surface | `#ffffff` | surface on page content |
| color.text | `#0000ee` | text on page content |
| color.text | `#6e736d` | text on page content |
| color.text | `#36403c` | text on page content |
| color.text | `#d9d9d9` | text on page content |
| color.text | `#618337` | text on page content |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.utility-12px | **System** | 12px | 400 | normal | normal | <div> and <a> |
| type.display-36px | **Bbh Hegarty** | 36px | 400 | 43.2px | normal | <h2> |
| type.body-16px | **Figtree** | 16px | 400 | 24px | -0.64px | <p> |
| type.body-14px | **Figtree** | 14px | 400 | 16.8px | -0.42px | <p> |
| type.heading-20px | **Figtree** | 20px | 600 | 28px | -0.8px | <h4> |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `45px 0px` | padding | page content |
| `0px 80px` | padding | page content |
| `11px 80px` | padding | page content |
| `2px 0px` | padding | page content |
| `21px 0px` | padding | page content |
| `9px 16px 9px 11px` | padding | page content |
| `9px 11px` | padding | page content |

### Shape and depth

The captured pages use `0px none 10px` and `0px none 100px` border treatments. Recorded shadows include `rgba(0, 0, 0, 0.17) 0px 0.602187px 1.56569px -1.5px, rgba(0, 0, 0, 0.14) 0px 2.28853px 5.95019px -3px, rgba(0, 0, 0, 0.02) 0px 10px 26px -4.5px`.

## Colors

The visual system is predominantly light surface treatment. Surface colors include `#ffffff`. Text colors include `#000000`, `#0000ee`, and `#6e736d`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **System**, **Bbh Hegarty**, and **Figtree**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `45px 0px`, `0px 80px`, `11px 80px`, `2px 0px`, and `21px 0px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly light surface treatment. Surface treatment centers on `#ffffff`. Depth is supported by the returned shadows.

## Components and states

The captured pages include repeated styling on <div>, <a>, <h2>, <p>, and <h4> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

## Responsive behavior

The captured token set does not establish breakpoint values or mobile behavior. Validate stacking, navigation changes, image treatment, and type scaling against the representative captures before implementing a responsive adaptation.

## Practical implementation guidance

- Preserve the light surface relationship and the measured type hierarchy before adding decorative treatment.
- Start from the returned typography, spacing, color, and border values; name any new scale or semantic role as an adaptation rather than as a source fact.
- Keep the captured font families separate from licensing decisions.
- Use screenshots to validate component anatomy, responsive behavior, focus treatment, and motion before shipping.
- Avoid introducing gradients or shadows beyond the captured treatment; the returned evidence includes those treatments.

## Scope note

The guide uses representative captured pages. The evidence supports the values and observations above; it does not establish component semantics, interaction states, motion timing, breakpoint rules, font licensing, or a complete source stylesheet.

## Colors

- `#000000`
- `#ffffff`
- `#0000ee`
- `#6e736d`
- `#36403c`
- `#d9d9d9`
- `#618337`

## Typography captured from hellotiana.framer.website

- **System** — weight 400 · size 12px
- **Figtree** — weight 400 · size 14px
- **Bbh Hegarty** — weight 400 · size 36px

# How dlang.org is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/dlang.org-design)

Last updated: 2026-08-03

## Captured pages

[![Table of Contents - D Programming Language](https://pin.fontofweb.com/6416?format=jpg)](https://design.withfudge.com/share/pin-6416)

[Table of Contents - D Programming Language](https://design.withfudge.com/share/pin-6416)

[![Home - D Programming Language](https://pin.fontofweb.com/6415?format=jpg)](https://design.withfudge.com/share/pin-6415)

[Home - D Programming Language](https://design.withfudge.com/share/pin-6415)

## Overview

dlang.org presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#000000`, `#333333`, and `#b03931`, with typography led by **Roboto Slab** and **Consolas**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.surface | `#000000` | surface on page content |
| color.text | `#333333` | text on page content |
| color.surface | `#b03931` | surface on page content |
| color.surface | `#f5f5f5` | surface on page content |
| color.text | `#ffffff` | text on page content |
| color.border | `#cccccc` | border on page content |
| color.surface | `#98312a` | surface on page content |
| color.text | `#999999` | text on page content |
| color.text | `#dc4040` | text on page content |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-15px | **Roboto Slab** | 15px | 400 | 21px | normal | <div>, <a>, <p>, <ul>, and <li> |
| type.body-14px | **Roboto Slab** | 14px | 400 | 19.6px | normal | <p> and <a> |
| type.body-17.25px | **Roboto Slab** | 17.25px | 400 | normal | normal | <h4> |
| type.body-22.5px | **Roboto Slab** | 22.5px | 400 | normal | normal | <h2> |
| type.body-16px | **Roboto Slab** | 16px | 400 | 22.4px | normal | <div> and <a> |
| type.body-18px | **Roboto Slab** | 18px | 300 | 25.2px | normal | <p> |
| type.body-30px | **Roboto Slab** | 30px | 400 | normal | normal | <h1> |
| type.utility-13px | **Consolas** | 13px | 400 | normal | normal | <span> |
| type.body-15px | **Roboto Slab** | 15px | 400 | normal | normal | <h2> |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `0px 0px 15px` | padding | page content |
| `15px 0px` | padding | page content |
| `40px 140px` | padding | page content |
| `0px 15px` | padding | page content |
| `15px 0px` | margin | page content |
| `0px 275px` | margin | page content |
| `0px 0px 0px 285px` | margin | page content |
| `20px 212.5px` | margin | page content |

### Shape and depth

The captured pages use `1px solid 4px` and `1px solid 4px` border treatments.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#000000`, `#b03931`, and `#f5f5f5`. Text colors include `#333333`, `#ffffff`, and `#999999`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Roboto Slab** and **Consolas**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `0px 0px 15px`, `15px 0px`, `40px 140px`, `0px 15px`, and `15px 0px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#000000`, `#b03931`, `#f5f5f5`, and `#98312a`. No structured gradient or shadow treatment is established.

## Components and states

The captured pages include repeated styling on <div>, <h2>, <a>, <h1>, <p>, <ul>, <li>, and <h4> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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
- `#333333`
- `#b03931`
- `#f5f5f5`
- `#ffffff`
- `#cccccc`
- `#98312a`
- `#999999`
- `#dc4040`

## Typography captured from dlang.org

- **Roboto Slab** — weight 400 · size 15px
- **Consolas** — weight 400 · size 13px

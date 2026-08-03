# How clubhouse.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/clubhouse.com-design)

Last updated: 2026-08-03

## Captured pages

[![Clubhouse](https://pin.fontofweb.com/7585?format=jpg)](https://design.withfudge.com/share/pin-7585)

[Clubhouse](https://design.withfudge.com/share/pin-7585)

[![Clubhouse](https://pin.fontofweb.com/7584?format=jpg)](https://design.withfudge.com/share/pin-7584)

[Clubhouse](https://design.withfudge.com/share/pin-7584)

## Overview

clubhouse.com presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#000000`, `#242420`, and `#ffe450`, with typography led by **Nunito** and **Gt Maru**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#000000` | text on page content in the main |
| color.text | `#242420` | text on page content in the main |
| color.surface | `#ffe450` | surface on page content |
| color.text | `#1f2022` | text on page content in the header |
| color.surface | `#ffffff` | surface on page content in the button |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **Nunito** | 16px | 400 | normal | normal | <div> in the main, <div> in the header, <ul> in the header, and <div> |
| type.display-72px | **Gt Maru** | 72px | 700 | 79.2px | -6.48px | <span> in the main and <div> in the main |
| type.utility-12px | **Nunito** | 12px | 600 | normal | normal | <div> in the footer |
| type.heading-16.96px | **Nunito** | 16.96px | 800 | normal | normal | <button> in the button |
| type.heading-16px | **Nunito** | 16px | 800 | normal | normal | <li> in the header |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `12px 24px` | margin | page content |
| `42px 0px 0px` | margin | page content |
| `8px 24px` | padding | page content |
| `16px 24px` | padding | page content |
| `0px 0px 0px 40px` | padding | page content |
| `16px 0px` | margin | page content |

### Shape and depth

The captured pages use `0px none 50% 50% 0px 0px`, `0px none 9999px`, `2px solid 9999px`, and `2px solid 9999px` border treatments.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#ffe450` and `#ffffff`. Text colors include `#000000`, `#242420`, and `#1f2022`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Nunito** and **Gt Maru**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `12px 24px`, `42px 0px 0px`, `8px 24px`, `16px 24px`, and `0px 0px 0px 40px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#ffe450` and `#ffffff`. No structured gradient or shadow treatment is established.

## Components and states

The captured pages include repeated styling on <div>, <span>, <button>, <ul>, and <li> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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
- `#242420`
- `#ffe450`
- `#1f2022`
- `#ffffff`

## Typography captured from clubhouse.com

- **Nunito** — weight 400 · size 16px
- **Gt Maru** — weight 700 · size 72px

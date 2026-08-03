# How app.flora.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/app.flora.ai-design)

Last updated: 2026-08-03

## Captured pages

[![FLORA - Untitled](https://pin.fontofweb.com/7889?format=jpg)](https://design.withfudge.com/share/pin-7889)

[FLORA - Untitled](https://design.withfudge.com/share/pin-7889)

[![FLORA - Projects](https://pin.fontofweb.com/7888?format=jpg)](https://design.withfudge.com/share/pin-7888)

[FLORA - Projects](https://design.withfudge.com/share/pin-7888)

## Overview

app.flora.ai presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#ffffff`, `#000000`, and `#202020`, with typography led by **System**, **Geist**, and **Geist Mono**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#ffffff` | text on page content in the main |
| color.surface | `#000000` | surface on page content in the main |
| color.surface | `#202020` | surface on page content in the main |
| color.text | `#8c8c8c` | text on page content in the aside |
| color.text | `#eeeeee` | text on page content in the main |
| color.shadow | `#57c957` | shadow on page content in the button |
| color.text | `#7a7a7a` | text on page content in the button |
| color.text | `#b4b4b4` | text on page content in the button |
| color.text | `#1c1c1c` | text on page content in the button |
| color.text | `#c7c8cd` | text on page content in the aside |
| color.surface | `#88d888` | surface on page content in the button |
| color.surface | `#1b2a1e` | surface on page content |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **System** | 16px | 400 | 24px | normal | <div> in the main, <button> in the button, <div> in the aside, <div> in the button, and <div> |
| type.body-14px | **Geist** | 14px | 400 | 19.25px | -0.32px | <button> in the button, <div> in the main, <li> in the main, <div> in the aside, <span> in the aside, <div>, <span> in the button, and <a> |
| type.body-14px | **System** | 14px | 400 | 16px | normal | <div> in the main |
| type.body-14px | **System** | 14px | 400 | 18.2px | normal | <button> in the button |
| type.utility-12px | **Geist** | 12px | 400 | 15px | -0.32px | <div> in the main |
| type.body-14px | **Geist** | 14px | 500 | 19.25px | -0.32px | <div> in the main |
| type.utility-12px | **System** | 12px | 400 | 16px | normal | <span> in the aside |
| type.utility-12px | **Geist** | 12px | 400 | 12px | -0.32px | <div> in the main |
| type.body-16px | **Geist** | 16px | 400 | 22px | -0.32px | <span> |
| type.body-14px | **Geist** | 14px | 500 | 19.25px | -0.16px | <span> and <p> |
| type.utility-12px | **Geist** | 12px | 400 | 12px | -0.16px | <span> |
| type.utility-12px | **Geist Mono** | 12px | 400 | 16.5px | normal | <div> in the button |
| type.display-60px | **System** | 60px | 400 | 84px | -1.2px | <span> in the button |
| type.utility-12px | **System** | 12px | 500 | 15.6px | normal | <span> in the button |
| type.body-30px | **Geist** | 30px | 400 | 41.25px | normal | <span> |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `32px` | padding | page content |
| `32px 32px 0px` | padding | page content |
| `12px` | padding | page content |
| `4px 4px 4px 16px` | padding | page content |
| `0px 0px 32px` | padding | page content |
| `8px` | padding | page content |
| `16px 36px 0px 0px` | padding | page content |
| `16px` | padding | page content |

### Shape and depth

The captured pages use `1px solid 12px`, `0px none 8px`, `0px none 9999px`, `0px none 12px`, `1px solid 8px`, `1px solid 8px`, `1px solid 9999px`, and `1px solid 12px` border treatments. Recorded shadows include `rgb(0, 0, 0) 0px 0px 0px 0px inset, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px`, `rgb(0, 0, 0) 0px 0px 0px 0px inset, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0) 0px 0px 0px 0px`, and `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(87, 201, 87, 0.1) 0px 7px 16px 0px, rgba(87, 201, 87, 0.09) 0px 30px 30px 0px, rgba(87, 201, 87, 0.05) 0px 67px 40px 0px, rgba(87, 201, 87, 0.01) 0px 120px 48px 0px, rgba(87, 201, 87, 0) 0px 187px 52px 0px`.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#000000`, `#202020`, and `#88d888`. Text colors include `#ffffff`, `#8c8c8c`, and `#eeeeee`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **System**, **Geist**, and **Geist Mono**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `32px`, `32px 32px 0px`, `12px`, `4px 4px 4px 16px`, and `0px 0px 32px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#000000`, `#202020`, `#88d888`, and `#1b2a1e`. Depth is supported by the returned shadows.

## Components and states

The captured pages include repeated styling on <div>, <button>, <span>, <li>, <a>, and <p> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

## Responsive behavior

The captured token set does not establish breakpoint values or mobile behavior. Validate stacking, navigation changes, image treatment, and type scaling against the representative captures before implementing a responsive adaptation.

## Practical implementation guidance

- Preserve the dark surface relationship and the measured type hierarchy before adding decorative treatment.
- Start from the returned typography, spacing, color, and border values; name any new scale or semantic role as an adaptation rather than as a source fact.
- Keep the captured font families separate from licensing decisions.
- Use screenshots to validate component anatomy, responsive behavior, focus treatment, and motion before shipping.
- Avoid introducing gradients or shadows beyond the captured treatment; the returned evidence includes those treatments.

## Scope note

The guide uses representative captured pages. The evidence supports the values and observations above; it does not establish component semantics, interaction states, motion timing, breakpoint rules, font licensing, or a complete source stylesheet.

## Colors

- `#ffffff`
- `#000000`
- `#202020`
- `#8c8c8c`
- `#eeeeee`
- `#57c957`
- `#7a7a7a`
- `#b4b4b4`
- `#1c1c1c`
- `#c7c8cd`
- `#88d888`
- `#1b2a1e`
- `#a8a8a8`
- `#3dcf3d`
- `#366740`
- `#7b7b7b`

## Typography captured from app.flora.ai

- **System** — weight 400 · size 16px
- **Geist** — weight 400 · size 14px
- **Geist Mono** — weight 400 · size 12px

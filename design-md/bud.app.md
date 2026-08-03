# How bud.app is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/bud.app-design)

Last updated: 2026-08-03

## Captured pages

[![Bud | The AI Agent With Its Own Computer](https://pin.fontofweb.com/9134?format=jpg)](https://design.withfudge.com/share/pin-9134)

[Bud | The AI Agent With Its Own Computer](https://design.withfudge.com/share/pin-9134)

[![Pricing - Bud](https://pin.fontofweb.com/9133?format=jpg)](https://design.withfudge.com/share/pin-9133)

[Pricing - Bud](https://design.withfudge.com/share/pin-9133)

[![Pricing - Bud](https://pin.fontofweb.com/9132?format=jpg)](https://design.withfudge.com/share/pin-9132)

[Pricing - Bud](https://design.withfudge.com/share/pin-9132)

[![Bud - Your AI Worker](https://pin.fontofweb.com/9131?format=jpg)](https://design.withfudge.com/share/pin-9131)

[Bud - Your AI Worker](https://design.withfudge.com/share/pin-9131)

## Overview

bud.app presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#000000`, `#ffffff`, and `#f7f7f7`, with typography led by **Circular**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.surface | `#000000` | surface on page content |
| color.shadow | `#ffffff` | shadow on page content in the button |
| color.surface | `#f7f7f7` | surface on page content in the main |
| color.text | `#525252` | text on page content |
| color.text | `#b8860b` | text on page content in the button |
| color.surface | `#f9b96c` | surface on page content in the button |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **Circular** | 16px | 500 | 24px | normal | <div>, <div> in the button, <div> in the aside, <div> in the footer, <div> in the main, <span> in the main, and <a> in the main |
| type.heading-16px | **Circular** | 16px | 600 | 24px | normal | <div> in the main |
| type.body-14px | **Circular** | 14px | 500 | 20px | normal | <span>, <p>, <a> in the button, <button> in the button, <a> in the nav, <span> in the aside, <span> in the button, <span> in the nav, <span> in the main, <div> in the main, and <p> in the main |
| type.body-24px | **Circular** | 24px | 500 | 39px | normal | <p> in the footer, <span> in the footer, and <a> in the footer |
| type.utility-13px | **Circular** | 13px | 500 | 19.5px | normal | <button> in the button, <span> in the aside, <span> in the button, <a> in the main, and <span> in the main |
| type.utility-13px | **Circular** | 13px | 400 | 19.5px | normal | <div> in the main, <span> in the main, and <span> in the button |
| type.utility-13px | **Circular** | 13px | 600 | 19.5px | normal | <div> in the main, <span> in the main, <h3> in the nav, <button> in the button, and <span> in the button |
| type.body-14px | **Circular** | 14px | 500 | 24px | normal | <div> in the main |
| type.heading-20px | **Circular** | 20px | 600 | 28px | normal | <div> in the main and <span> in the main |
| type.utility-13px | **Circular** | 13px | 500 | 17.875px | normal | <span> in the main |
| type.body-14px | **Circular** | 14px | 400 | 20px | normal | <span> in the main |
| type.utility-11px | **Circular** | 11px | 500 | 16.5px | normal | <div> in the main |
| type.heading-24px | **Circular** | 24px | 700 | 32px | normal | <h1> in the main |
| type.utility-10px | **Circular** | 10px | 500 | 15px | normal | <span> in the button |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `0px 8px` | padding | page content |
| `0px 0px 120px` | padding | page content |
| `71px 24px 96px` | padding | page content |
| `0px 172px` | margin | page content |
| `8px` | padding | page content |
| `96px 40px 32px` | padding | page content |
| `0px 32px` | margin | page content |
| `0px 16px 40px` | padding | page content |

### Shape and depth

The captured pages use `0px none 3.35544e+07px`, `2px solid 22px`, `1px solid 3.35544e+07px`, `0px none 21px`, `1px solid 21px`, `2px solid 24px`, `0px none 20px`, and `0px none 24px` border treatments. Recorded gradients include `linear-gradient(lab(97.68 -0.0000298023 0.0000119209) 0%, rgba(0, 0, 0, 0) 100%)` and `linear-gradient(lab(9.52 -0.00000745058 0) 0%, lab(18.8 0 0) 100%)`. Recorded shadows include `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, lab(18.8 0 0) 0px 0px 0px 1px, rgba(255, 255, 255, 0.1) 0px 1.5px 0.5px 0px inset, rgba(0, 0, 0, 0.2) 0px 1px 3px 0px`, `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px`, and `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, lab(91.8645 7.77712 22.3357 / 0.4) 0px 0px 0px 0px inset rgb(0,0,0)`.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#000000`, `#f7f7f7`, and `#f9b96c`. Text colors include `#525252` and `#b8860b`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Circular**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `0px 8px`, `0px 0px 120px`, `71px 24px 96px`, `0px 172px`, and `8px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#000000`, `#f7f7f7`, and `#f9b96c`. Depth is supported by the returned gradients and shadows.

## Components and states

The captured pages include repeated styling on <div>, <span>, <p>, <a>, <button>, <h1>, and <h3> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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

- `#000000`
- `#ffffff`
- `#f7f7f7`
- `#525252`
- `#b8860b`
- `#f9b96c`

## Typography captured from bud.app

- **Circular** — weight 500 · size 16px

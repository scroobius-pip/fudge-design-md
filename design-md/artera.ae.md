# How artera.ae is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/artera.ae-design)

Last updated: 2026-08-03

## Captured pages

[![The Last Supper - Lucas Cranach the Elder | Artera](https://pin.fontofweb.com/6538?format=jpg)](https://design.withfudge.com/share/pin-6538)

[The Last Supper - Lucas Cranach the Elder | Artera](https://design.withfudge.com/share/pin-6538)

[![artera.ae](https://pin.fontofweb.com/6537?format=jpg)](https://design.withfudge.com/share/pin-6537)

[artera.ae](https://design.withfudge.com/share/pin-6537)

[![Artera – AI-Powered Art Discovery & Creative Community](https://pin.fontofweb.com/6536?format=jpg)](https://design.withfudge.com/share/pin-6536)

[Artera – AI-Powered Art Discovery & Creative Community](https://design.withfudge.com/share/pin-6536)

## Overview

artera.ae presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#000000`, `#ffffff`, and `#f3f3f3`, with typography led by **Inter**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.surface | `#000000` | surface on page content in the nav |
| color.text | `#ffffff` | text on page content in the nav |
| color.text | `#f3f3f3` | text on page content in the nav |
| color.text | `#f2c14e` | text on page content in the main |
| color.text | `#dbdbdb` | text on page content in the main |
| color.text | `#d1d5db` | text on page content in the main |
| color.text | `#d3d2d2` | text on page content in the main |
| color.border | `#262626` | border on page content in the main |
| color.text | `#939393` | text on page content in the main |
| color.surface | `#3f3f3f` | surface on page content in the nav |
| color.border | `#4b5563` | border on page content in the button |
| color.text | `#9ca3af` | text on page content in the nav |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **Inter** | 16px | 400 | 24px | normal | <div> in the nav, <div> in the main, <a> in the nav, <span> in the nav, <h2> in the main, <a> in the main, and <p> in the main |
| type.heading-18px | **Inter** | 18px | 600 | 28px | normal | <span> in the main |
| type.display-72px | **Inter** | 72px | 700 | 72px | normal | <h1> in the main and <span> in the main |
| type.body-16px | **Inter** | 16px | 500 | 24px | normal | <h2> in the main, <div> in the main, <a> in the main, and <button> in the button |
| type.body-20px | **Inter** | 20px | 400 | 28px | normal | <p> in the main |
| type.heading-23px | **Inter** | 23px | 600 | 34.5px | normal | <h1> in the main |
| type.body-14px | **Inter** | 14px | 500 | 20px | normal | <a> in the main |
| type.body-14px | **Inter** | 14px | 500 | 19.6px | normal | <p> in the main |
| type.heading-16px | **Inter** | 16px | 600 | 24px | normal | <button> in the button |
| type.heading-24px | **Inter** | 24px | 600 | 36px | normal | <h2> in the main |
| type.heading-22px | **Inter** | 22px | 700 | 33px | normal | <h2> in the main |
| type.heading-14px | **Inter** | 14px | 700 | 19.6px | normal | <strong> in the main |
| type.heading-16px | **Inter** | 16px | 700 | 24px | normal | <p> in the main |
| type.utility-12px | **Inter** | 12px | 400 | 16px | normal | <div> in the main |
| type.heading-14px | **Inter** | 14px | 600 | 20px | normal | <a> in the main |
| type.body-14px | **Inter** | 14px | 400 | 20px | normal | <button> in the button |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `20px` | padding | page content |
| `0px 16px` | padding | page content |
| `0px 88px` | margin | page content |
| `0px 0px 8px` | margin | page content |
| `0px 212.5px` | margin | page content |
| `16px` | padding | page content |
| `32px 16px` | padding | page content |
| `10px 0px 0px` | margin | page content |

### Shape and depth

The captured pages use `0px none 8px`, `0px none 48px`, `1px solid 8px`, `0px none 10px`, `1px solid 8px`, `1px solid 8px`, and `0px none 9999px` border treatments. Recorded gradients include `linear-gradient(rgb(31, 41, 55), rgb(0, 0, 0))` and `linear-gradient(rgb(0, 0, 0), rgb(7, 7, 7))`. Recorded shadows include `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(242, 193, 78, 0.6) 0px 0px 15px 0px`, `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.1) 0px 2px 4px -2px`, and `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.25) 0px 25px 50px -12px`.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#000000` and `#3f3f3f`. Text colors include `#ffffff`, `#f3f3f3`, and `#f2c14e`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Inter**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `20px`, `0px 16px`, `0px 88px`, `0px 0px 8px`, and `0px 212.5px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#000000` and `#3f3f3f`. Depth is supported by the returned gradients and shadows.

## Components and states

The captured pages include repeated styling on <div>, <h2>, <a>, <span>, <h1>, <p>, <button>, and <strong> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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
- `#f3f3f3`
- `#f2c14e`
- `#dbdbdb`
- `#d1d5db`
- `#d3d2d2`
- `#262626`
- `#939393`
- `#3f3f3f`
- `#4b5563`
- `#9ca3af`

## Typography captured from artera.ae

- **Inter** — weight 400 · size 16px

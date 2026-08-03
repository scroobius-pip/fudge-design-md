# How dashboard.exa.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/dashboard.exa.ai-design)

Last updated: 2026-08-03

## Captured pages

[![Home | Exa API](https://pin.fontofweb.com/9452?format=jpg)](https://design.withfudge.com/share/pin-9452)

[Home | Exa API](https://design.withfudge.com/share/pin-9452)

[![API Keys | Exa API](https://pin.fontofweb.com/9451?format=jpg)](https://design.withfudge.com/share/pin-9451)

[API Keys | Exa API](https://design.withfudge.com/share/pin-9451)

## Overview

dashboard.exa.ai presents a predominantly light surface treatment in the captured pages. The system is anchored by `#000000`, `#ffffff`, and `#fbfcfd`, with typography led by **Abc Diatype Plus**, **Proto Mono**, **Applesystem**, **Aeonik**, and **Abc Arizona Flare**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#000000` | text on page content |
| color.surface | `#ffffff` | surface on page content in the main |
| color.surface | `#fbfcfd` | surface on page content in the main |
| color.border | `#e5e5e5` | border on page content in the main |
| color.surface | `#fafafa` | surface on page content in the main |
| color.text | `#1f40ed` | text on page content in the main |
| color.border | `#e5e7eb` | border on page content in the main |
| color.text | `#444444` | text on page content in the main |
| color.text | `#111827` | text on page content in the main |
| color.surface | `#f6f6f6` | surface on page content in the main |
| color.text | `#0972d5` | text on page content in the main |
| color.surface | `#f5f5f5` | surface on page content in the main |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **Abc Diatype Plus** | 16px | 400 | 24px | normal | <body>, <div> in the main, <main> in the main, <div>, <button> in the button, <img> in the main, <section> in the main, <a> in the main, <span> in the main, and <svg> in the main |
| type.body-15px | **Abc Diatype Plus** | 15px | 400 | 24px | normal | <a> in the main, <span> in the main, and <svg> in the main |
| type.body-14px | **Applesystem** | 14px | 400 | normal | normal | <div> |
| type.utility-12px | **Proto Mono** | 12px | 500 | 18px | normal | <span> in the main and <div> in the main |
| type.body-14px | **Abc Diatype Plus** | 14px | 400 | 19.6px | normal | <p> in the main |
| type.utility-13px | **Proto Mono** | 13px | 400 | 19.5px | normal | <div> in the main and <span> in the main |
| type.utility-13px | **Abc Diatype Plus** | 13px | 500 | 19.5px | normal | <div> in the main |
| type.body-25px | **Aeonik** | 25px | 400 | 32px | normal | <h2> in the main |
| type.body-18px | **Abc Diatype Plus** | 18px | 500 | 22.5px | -0.18px | <h3> in the main and <h5> in the main |
| type.body-14px | **Abc Diatype Plus** | 14px | 400 | 21px | normal | <button> in the button, <a> in the main, and <div> in the main |
| type.body-15px | **Abc Diatype Plus** | 15px | 400 | 22.5px | normal | <button> in the button, <div> in the main, <div>, and <span> |
| type.body-15px | **Abc Diatype Plus** | 15px | 500 | 22.5px | normal | <p> in the button, <span> in the main, and <svg> in the main |
| type.body-14px | **Abc Diatype Plus** | 14px | 400 | 20px | normal | <a> in the main, <span> in the button, and <button> in the button |
| type.body-28px | **Abc Arizona Flare** | 28px | 400 | 42px | -0.84px | <h2> in the main |
| type.body-14px | **Abc Diatype Plus** | 14px | 500 | 21px | normal | <button> in the button |
| type.utility-10px | **Proto Mono** | 10px | 600 | 10px | normal | <span> in the main |
| type.body-20px | **Abc Arizona Flare** | 20px | 400 | 30px | -0.4px | <h3> in the main |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `24px` | gap | page content |
| `24px` | row-gap | page content |
| `24px` | column-gap | page content |
| `26px` | padding | page content |
| `26px` | padding-top | page content |
| `26px` | padding-right | page content |
| `26px` | padding-bottom | page content |
| `26px` | padding-left | page content |

### Shape and depth

The captured pages use `0px 1px 0px 0px solid 0px`, `1px solid 6px`, `0px none 10px`, `4px solid 8px`, `0px none 0px 0px 6px 6px`, `1px dashed 6px`, `0px none 8px`, and `0px none 4px` border treatments. Recorded gradients include `linear-gradient(rgba(245, 240, 252, 0.6) 0%, rgba(140, 90, 220, 0.6) 33%, rgba(80, 40, 180, 0.6) 69%, rgba(28, 10, 90, 0.6) 100%)`, `linear-gradient(rgba(234, 239, 252, 0.6) 0%, rgba(56, 177, 221, 0.6) 33%, rgba(0, 126, 172, 0.6) 69%, rgba(0, 40, 84, 0.6) 100%)`, `linear-gradient(rgba(234, 239, 252, 0.6) 0%, rgba(56, 129, 221, 0.6) 33%, rgba(0, 95, 196, 0.6) 69%, rgba(0, 25, 138, 0.6) 100%)`, `linear-gradient(rgba(234, 239, 252, 0.6) 0%, rgba(56, 129, 221, 0.6) 33%, rgba(0, 5, 196, 0.6) 69%, rgba(0, 6, 31, 0.6) 100%)`, and `linear-gradient(rgb(0, 22, 81) 0%, rgb(0, 64, 240) 100%)`. Recorded shadows include `rgba(0, 0, 0, 0.15) 0px 0px 30px 0px`, `rgb(99, 141, 255) 0px -1.5px 2px 0px inset, rgb(0, 67, 251) 0px 0px 10px 0px inset, rgb(0, 67, 251) 0px 0px 8px 0px inset`, and `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.2) 0px 0.5px 2px -0.5px, rgba(0, 0, 0, 0.05) 0px 2px 3px 0px`.

## Colors

The visual system is predominantly light surface treatment. Surface colors include `#ffffff`, `#fbfcfd`, and `#fafafa`. Text colors include `#000000`, `#1f40ed`, and `#444444`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Abc Diatype Plus**, **Applesystem**, **Proto Mono**, **Aeonik**, and **Abc Arizona Flare**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `24px`, `24px`, `24px`, `26px`, and `26px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly light surface treatment. Surface treatment centers on `#ffffff`, `#fbfcfd`, `#fafafa`, and `#f6f6f6`. Depth is supported by the returned gradients and shadows.

## Components and states

The captured pages include repeated styling on <div>, <body>, <main>, <button>, <a>, <span>, <p>, and <svg> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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
- `#fbfcfd`
- `#e5e5e5`
- `#fafafa`
- `#1f40ed`
- `#e5e7eb`
- `#444444`
- `#111827`
- `#f6f6f6`
- `#0972d5`
- `#f5f5f5`
- `#1c1f21`
- `#888888`
- `#171717`
- `#eef8ff`

## Typography captured from dashboard.exa.ai

- **Abc Diatype Plus** — weight 400 · size 16px
- **Proto Mono** — weight 600 · size 10px
- **Applesystem** — weight 400 · size 14px
- **Aeonik** — weight 400 · size 25px
- **Abc Arizona Flare** — weight 400 · size 28px

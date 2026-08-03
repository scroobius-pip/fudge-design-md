# How app.base44.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/app.base44.com-design)

Last updated: 2026-08-03

## Captured pages

[![Curated | Base44](https://pin.fontofweb.com/7412?format=jpg)](https://design.withfudge.com/share/pin-7412)

[Curated | Base44](https://design.withfudge.com/share/pin-7412)

[![Curated | Base44](https://pin.fontofweb.com/7411?format=jpg)](https://design.withfudge.com/share/pin-7411)

[Curated | Base44](https://design.withfudge.com/share/pin-7411)

[![untitled | Base44](https://pin.fontofweb.com/7410?format=jpg)](https://design.withfudge.com/share/pin-7410)

[untitled | Base44](https://design.withfudge.com/share/pin-7410)

## Overview

app.base44.com presents a mixed light and dark surface treatment in the captured pages. The system is anchored by `#09090b`, `#000000`, and `#f8fafc`, with typography led by **System**, **Wix Madefor App**, and **Wix Madefor**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#09090b` | text on page content |
| color.surface | `#000000` | surface on page content |
| color.surface | `#f8fafc` | surface on page content |
| color.text | `#ffffff` | text on page content |
| color.text | `#4b5563` | text on page content in the button |
| color.text | `#111827` | text on page content |
| color.surface | `#ff7b42` | surface on page content |
| color.surface | `#e2e8f0` | surface on page content |
| color.border | `#d1d5db` | border on page content in the button |
| color.text | `#9ca3af` | text on page content |
| color.surface | `#ffccac` | surface on page content |
| color.text | `#94a3b8` | text on page content |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **System** | 16px | 400 | 24px | normal | <div> and <button> in the button |
| type.body-16px | **Wix Madefor App** | 16px | 400 | 24px | normal | <div> and <button> in the button |
| type.body-14px | **System** | 14px | 400 | 24px | normal | <p>, <li>, <ul>, and <ol> |
| type.body-14px | **System** | 14px | 400 | 20px | normal | <div> |
| type.body-14px | **Wix Madefor App** | 14px | 400 | 20px | normal | <div>, <div> in the button, <span> in the button, <button> in the button, and <span> |
| type.body-14px | **Wix Madefor App** | 14px | 300 | 20px | normal | <span> |
| type.body-16px | **Wix Madefor** | 16px | 500 | 24px | normal | <button> in the button and <p> |
| type.body-14px | **Wix Madefor** | 14px | 500 | 20px | normal | <a>, <span> in the button, <div>, and <span> |
| type.body-14px | **Wix Madefor App** | 14px | 400 | 18px | normal | <p> |
| type.utility-12px | **System** | 12px | 400 | 16px | normal | <span>, <button> in the button, <span> in the button, and <div> |
| type.heading-16px | **Wix Madefor** | 16px | 600 | 24px | normal | <h4> |
| type.body-14px | **Wix Madefor App** | 14px | 400 | 21px | normal | <p> |
| type.display-35px | **Wix Madefor App** | 35px | 400 | 36px | normal | <h1> |
| type.body-16px | **System** | 16px | 300 | 24px | normal | <p> |
| type.body-24px | **Wix Madefor App** | 24px | 400 | 36px | normal | <span> |
| type.body-30px | **Wix Madefor** | 30px | 500 | 36px | normal | <span> |
| type.body-16px | **Wix Madefor** | 16px | 500 | 14px | normal | <span> |
| type.body-30px | **Wix Madefor App** | 30px | 400 | 36px | normal | <span> |
| type.body-30px | **Wix Madefor App** | 30px | 400 | 45px | normal | <span> |
| type.utility-12px | **Wix Madefor** | 12px | 500 | 18px | normal | <span> in the button |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `0px 0px 7px` | margin | page content |
| `24px` | padding | page content |
| `0px 0px 14px` | margin | page content |
| `8px 0px` | padding | page content |
| `0px 0px 24px` | margin | page content |
| `12px 16px` | padding | page content |
| `0px 12px` | padding | page content |
| `0px 12px 0px 0px` | padding | page content |

### Shape and depth

The captured pages use `0px none 10px`, `0px none 20px`, `0px none 12px`, `1px solid 8px`, `0px none 6px`, `0px none 9999px`, `0px none 8px`, and `0px none 26px` border treatments. Recorded shadows include `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgb(248, 250, 252) 0px 10px 23px 0px`, `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px`, and `rgba(254, 215, 195, 0.3) 0px 0px 40px 10px`.

## Colors

The visual system is mixed light and dark surface treatment. Surface colors include `#000000`, `#f8fafc`, and `#ff7b42`. Text colors include `#09090b`, `#ffffff`, and `#4b5563`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **System**, **Wix Madefor App**, and **Wix Madefor**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `0px 0px 7px`, `24px`, `0px 0px 14px`, `8px 0px`, and `0px 0px 24px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is mixed light and dark surface treatment. Surface treatment centers on `#000000`, `#f8fafc`, `#ff7b42`, and `#e2e8f0`. Depth is supported by the returned shadows.

## Components and states

The captured pages include repeated styling on <div>, <a>, <span>, <p>, <li>, <ul>, <button>, and <h4> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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

- `#09090b`
- `#000000`
- `#f8fafc`
- `#ffffff`
- `#4b5563`
- `#111827`
- `#ff7b42`
- `#e2e8f0`
- `#d1d5db`
- `#9ca3af`
- `#ffccac`
- `#94a3b8`
- `#fed7c3`
- `#ff631f`
- `#020617`
- `#c1c1c1`

## Typography captured from app.base44.com

- **System** — weight 400 · size 16px
- **Wix Madefor App** — weight 400 · size 16px
- **Wix Madefor** — weight 500 · size 14px

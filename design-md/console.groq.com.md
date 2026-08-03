# How console.groq.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/console.groq.com-design)

Last updated: 2026-08-03

## Captured pages

[![GroqCloud](https://pin.fontofweb.com/9484?format=jpg)](https://design.withfudge.com/share/pin-9484)

[GroqCloud](https://design.withfudge.com/share/pin-9484)

[![GroqCloud](https://pin.fontofweb.com/9483?format=jpg)](https://design.withfudge.com/share/pin-9483)

[GroqCloud](https://design.withfudge.com/share/pin-9483)

## Overview

console.groq.com presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#e0e0e0`, `#1c1e22`, and `#ffffff`, with typography led by **Inter** and **Space Grotesk**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#e0e0e0` | text on page content |
| color.surface | `#1c1e22` | surface on page content in the main |
| color.text | `#ffffff` | text on page content in the main |
| color.surface | `#121418` | surface on page content in the main |
| color.shadow | `#000000` | shadow on page content in the main |
| color.border | `#999999` | border on page content in the button |
| color.text | `#a5a09c` | text on page content in the main |
| color.text | `#cdeafb` | text on page content in the main |
| color.surface | `#1f1e1c` | surface on page content in the main |
| color.surface | `#262626` | surface on page content |
| color.border | `#6b7280` | border on page content |
| color.text | `#f55036` | text on page content in the main |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **Inter** | 16px | 400 | 24px | normal | <div> and <div> in the main |
| type.body-14px | **Inter** | 14px | 500 | 20px | normal | <button> in the button and <span> in the button |
| type.utility-13px | **Space Grotesk** | 13px | 500 | 19.5px | normal | <h3> in the main |
| type.utility-12px | **Inter** | 12px | 400 | 16px | normal | <div> in the main and <p> in the main |
| type.body-14px | **Space Grotesk** | 14px | 400 | 20px | normal | <p> in the main, <a> in the nav, and <a> |
| type.body-14px | **Space Grotesk** | 14px | 500 | 20px | normal | <div> in the button |
| type.body-16px | **Space Grotesk** | 16px | 400 | 24px | normal | <button> in the button, <div>, and <p> in the main |
| type.utility-12px | **Space Grotesk** | 12px | 600 | 16px | normal | <div> in the main |
| type.body-20px | **Space Grotesk** | 20px | 500 | 28px | normal | <p> in the main |
| type.utility-12px | **Inter** | 12px | 600 | 16px | normal | <a> in the main |
| type.body-30px | **Space Grotesk** | 30px | 400 | 36px | normal | <h1> in the main |
| type.heading-14px | **Space Grotesk** | 14px | 600 | 20px | normal | <a> in the main |
| type.utility-12px | **Inter** | 12px | 500 | 16px | normal | <div> in the main |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `0px 0px 40px` | padding | page content |
| `24px 0px` | padding | page content |
| `8px` | padding | page content |
| `3px 0px 0px` | margin | page content |
| `12px 0px 12px 23px` | padding | page content |
| `0px 0px 0px 4px` | padding | page content |
| `24px 0px 0px` | margin | page content |
| `16px 16px 32px` | padding | page content |

### Shape and depth

The captured pages use `1px solid 10px`, `0px none 10px`, `1px solid 9999px`, and `1px solid 18px` border treatments. Recorded shadows include `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.06) 0px 0px 16.9px 0px`.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#1c1e22`, `#121418`, and `#1f1e1c`. Text colors include `#e0e0e0`, `#ffffff`, and `#a5a09c`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Inter** and **Space Grotesk**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `0px 0px 40px`, `24px 0px`, `8px`, `3px 0px 0px`, and `12px 0px 12px 23px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#1c1e22`, `#121418`, `#1f1e1c`, and `#262626`. Depth is supported by the returned shadows.

## Components and states

The captured pages include repeated styling on <div>, <button>, <h3>, <p>, <a>, <span>, and <h1> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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

- `#e0e0e0`
- `#1c1e22`
- `#ffffff`
- `#121418`
- `#000000`
- `#999999`
- `#a5a09c`
- `#cdeafb`
- `#1f1e1c`
- `#262626`
- `#6b7280`
- `#f55036`

## Typography captured from console.groq.com

- **Inter** — weight 400 · size 16px
- **Space Grotesk** — weight 400 · size 16px

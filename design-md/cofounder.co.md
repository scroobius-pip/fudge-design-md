# How cofounder.co is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/cofounder.co-design)

Last updated: 2026-08-03

## Captured pages

[![Cofounder lets you run an entire company with agents](https://pin.fontofweb.com/9471?format=jpg)](https://design.withfudge.com/share/pin-9471)

[Cofounder lets you run an entire company with agents](https://design.withfudge.com/share/pin-9471)

[![Cofounder lets you run an entire company with agents](https://pin.fontofweb.com/9470?format=jpg)](https://design.withfudge.com/share/pin-9470)

[Cofounder lets you run an entire company with agents](https://design.withfudge.com/share/pin-9470)

[![Cofounder](https://pin.fontofweb.com/8173?format=jpg)](https://design.withfudge.com/share/pin-8173)

[Cofounder](https://design.withfudge.com/share/pin-8173)

[![Cofounder | Pricing](https://pin.fontofweb.com/8171?format=jpg)](https://design.withfudge.com/share/pin-8171)

[Cofounder | Pricing](https://design.withfudge.com/share/pin-8171)

[![Cofounder](https://pin.fontofweb.com/8170?format=jpg)](https://design.withfudge.com/share/pin-8170)

[Cofounder](https://design.withfudge.com/share/pin-8170)

[![Cofounder](https://pin.fontofweb.com/8169?format=jpg)](https://design.withfudge.com/share/pin-8169)

[Cofounder](https://design.withfudge.com/share/pin-8169)

## Overview

cofounder.co presents a mixed light and dark surface treatment in the captured pages. The system is anchored by `#171717`, `#000000`, and `#0a0a0a`, with typography led by **Tt Neoris**, **Af Another Sans**, **Pp Mondwest**, and **Geist Mono**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#171717` | text on page content |
| color.shadow | `#000000` | shadow on page content |
| color.text | `#0a0a0a` | text on page content in the main |
| color.surface | `#fefffc` | surface on page content in the main |
| color.text | `#2c2c2c` | text on page content in the main |
| color.text | `#ffffff` | text on page content |
| color.text | `#646464` | text on page content in the main |
| color.text | `#444141` | text on page content in the header |
| color.border | `#dde3dd` | border on page content in the main |
| color.text | `#b4b8b4` | text on page content in the main |
| color.text | `#fbfbf8` | text on page content in the nav |
| color.surface | `#f5f5f2` | surface on page content |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **Tt Neoris** | 16px | 400 | 24px | normal | <div>, <div> in the header, <a>, <div> in the nav, <span> in the nav, and <a> in the nav |
| type.body-16px | **Af Another Sans** | 16px | 400 | 24px | normal | <div> in the main, <div> in the nav, and <div> in the header |
| type.display-90px | **Pp Mondwest** | 90px | 400 | 90px | -1.8px | <h1> in the header |
| type.body-15px | **Af Another Sans** | 15px | 500 | 21px | -0.15px | <a> in the main, <p> in the main, <a> in the nav, <span> in the main, and <p> in the header |
| type.display-46px | **Tt Neoris** | 46px | 400 | 49.68px | normal | <h1> |
| type.display-54px | **Pp Mondwest** | 54px | 400 | 54px | normal | <h1> in the main |
| type.body-16px | **Tt Neoris** | 16px | 460 | 22.4px | 0.15px | <p> |
| type.body-16px | **Af Another Sans** | 16px | 500 | 22.4px | -0.15px | <span> in the main |
| type.body-24px | **Af Another Sans** | 24px | 500 | 31.2px | -0.48px | <h4> in the main |
| type.body-15px | **Tt Neoris** | 15px | 410 | 22.5px | 0.15px | <a> in the nav |
| type.utility-13px | **Af Another Sans** | 13px | 500 | 16.9px | -0.13px | <p> in the main |
| type.body-15px | **Tt Neoris** | 15px | 460 | 22.5px | 0.15px | <span> in the nav |
| type.utility-13px | **Af Another Sans** | 13px | 600 | 19.5px | -0.13px | <h4> in the main |
| type.body-16px | **Af Another Sans** | 16px | 500 | 24px | normal | <a> in the nav |
| type.display-48px | **Geist Mono** | 48px | 400 | 62.4px | -1.44px | <span> in the main |
| type.utility-13px | **Af Another Sans** | 13px | 400 | 19.5px | normal | <span> in the main |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `198px 0px 0px` | padding | page content |
| `24px 48px 48px 80px` | padding | page content |
| `8px 120px` | padding | page content |
| `0px 555px` | margin | page content |
| `26px 20px 23px` | padding | page content |
| `0px 0px 50px` | padding | page content |
| `32px 36px` | padding | page content |
| `32px` | padding | page content |

### Shape and depth

The captured pages use `0px none 10px`, `0px none 4px`, `0px none 8px`, `1px solid 10px`, `1px solid 8px`, `1px solid 1.67772e+07px`, `1px solid 16px`, and `0px none 1.67772e+07px` border treatments. Recorded gradients include `linear-gradient(rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.9) 100%)` and `linear-gradient(in oklab, rgba(255, 255, 255, 0.8) 0px, rgba(255, 255, 255, 0.16) 100%)`. Recorded shadows include `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.1) 0px 2px 4px -2px`, `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px`, `rgba(0, 0, 0, 0.06) 0px 2px 3px 0px, rgba(255, 255, 255, 0.35) 0px 0px 0.357px 1.5px inset, rgb(255, 255, 255) 0px 2px 0px 0px inset`, `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(255, 255, 255, 0.1) 0px 4px 12px 0px inset, rgba(255, 255, 255, 0.4) 0px 0px 0px 6px, rgba(0, 0, 0, 0.13) 0px 1px 8px 0px, rgba(0, 0, 0, 0.2) 0px 2px 6px 0px`, and `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.06) 0px 2px 2px 0px, rgba(0, 0, 0, 0) 0px 6px 6px 0px`.

## Colors

The visual system is mixed light and dark surface treatment. Surface colors include `#fefffc`, `#f5f5f2`, and `#f9faf7`. Text colors include `#171717`, `#0a0a0a`, and `#2c2c2c`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Tt Neoris**, **Af Another Sans**, **Pp Mondwest**, and **Geist Mono**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `198px 0px 0px`, `24px 48px 48px 80px`, `8px 120px`, `0px 555px`, and `26px 20px 23px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is mixed light and dark surface treatment. Surface treatment centers on `#fefffc`, `#f5f5f2`, and `#f9faf7`. Depth is supported by the returned gradients and shadows.

## Components and states

The captured pages include repeated styling on <div>, <h1>, <p>, <a>, <span>, and <h4> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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

- `#171717`
- `#000000`
- `#0a0a0a`
- `#fefffc`
- `#2c2c2c`
- `#ffffff`
- `#646464`
- `#444141`
- `#dde3dd`
- `#b4b8b4`
- `#fbfbf8`
- `#f5f5f2`
- `#202020`
- `#fafafa`
- `#1a1a1a`
- `#dee2de`

## Typography captured from cofounder.co

- **Tt Neoris** — weight 400 · size 16px
- **Af Another Sans** — weight 400 · size 16px
- **Pp Mondwest** — weight 400 · size 54px
- **Geist Mono** — weight 400 · size 48px

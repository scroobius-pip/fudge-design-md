# How ai-sdk.dev is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/ai-sdk.dev-design)

Last updated: 2026-08-03

## Captured pages

[![AI SDK](https://pin.fontofweb.com/8397?format=jpg)](https://design.withfudge.com/share/pin-8397)

[AI SDK](https://design.withfudge.com/share/pin-8397)

[![AI SDK](https://pin.fontofweb.com/8396?format=jpg)](https://design.withfudge.com/share/pin-8396)

[AI SDK](https://design.withfudge.com/share/pin-8396)

[![AI SDK](https://pin.fontofweb.com/8395?format=jpg)](https://design.withfudge.com/share/pin-8395)

[AI SDK](https://design.withfudge.com/share/pin-8395)

[![AI SDK](https://pin.fontofweb.com/8394?format=jpg)](https://design.withfudge.com/share/pin-8394)

[AI SDK](https://design.withfudge.com/share/pin-8394)

[![AI SDK](https://pin.fontofweb.com/8393?format=jpg)](https://design.withfudge.com/share/pin-8393)

[AI SDK](https://design.withfudge.com/share/pin-8393)

[![AI SDK](https://pin.fontofweb.com/8392?format=jpg)](https://design.withfudge.com/share/pin-8392)

[AI SDK](https://design.withfudge.com/share/pin-8392)

## Overview

ai-sdk.dev presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#000000`, `#ededed`, and `#a1a1a1`, with typography led by **Geist** and **Geist Mono**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.surface | `#000000` | surface on page content |
| color.text | `#ededed` | text on page content |
| color.text | `#a1a1a1` | text on page content |
| color.border | `#1f1f1f` | border on page content |
| color.surface | `#0a0a0a` | surface on page content in the button |
| color.text | `#8f8f8f` | text on page content in the button |
| color.border | `#ffffff` | border on page content in the button |
| color.text | `#62c073` | text on page content |
| color.text | `#878787` | text on page content in the button |
| color.border | `#2e2e2e` | border on page content in the button |
| color.text | `#f75f8f` | text on page content |
| color.text | `#bf7af0` | text on page content |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **Geist** | 16px | 400 | 24px | normal | <div>, <p>, <div> in the button, <button> in the button, <p> in the button, <span>, <a>, and <ul> in the nav |
| type.utility-13px | **Geist Mono** | 13px | 400 | 20px | normal | <button> in the button, <span>, and <div> |
| type.utility-12px | **Geist Mono** | 12px | 400 | 16px | normal | <button> in the button and <span> |
| type.display-64px | **Geist** | 64px | 600 | 64px | -3.84px | <h1> |
| type.body-18px | **Geist** | 18px | 400 | 27px | normal | <span> |
| type.body-20px | **Geist** | 20px | 400 | 36px | normal | <p> |
| type.display-40px | **Geist** | 40px | 600 | 48px | -2.4px | <h3> |
| type.body-14px | **Geist** | 14px | 500 | 20px | normal | <span> in the button, <span>, <a>, and <button> in the button |
| type.body-20px | **Geist** | 20px | 500 | 26px | -0.4px | <span> |
| type.utility-13px | **Geist** | 13px | 400 | 17.875px | normal | <div> |
| type.heading-20px | **Geist** | 20px | 600 | 26px | -0.4px | <p> |
| type.utility-13px | **Geist** | 13px | 500 | 19.5px | normal | <span> in the button and <button> in the button |
| type.heading-24px | **Geist** | 24px | 600 | 32px | -0.96px | <p> in the button |
| type.body-14px | **Geist** | 14px | 400 | 20px | normal | <a> in the nav, <button> in the button, and <p> |
| type.body-18px | **Geist** | 18px | 400 | 28px | normal | <p> |
| type.body-16px | **Geist** | 16px | 400 | 20px | normal | <span> and <button> in the button |
| type.utility-12px | **Geist Mono** | 12px | 500 | 16px | normal | <button> in the button |
| type.utility-13px | **Geist Mono** | 13px | 400 | 18px | normal | <a> |
| type.body-14px | **Geist Mono** | 14px | 400 | 20px | normal | <span> |
| type.body-16px | **Geist** | 16px | 500 | 24px | normal | <span> |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `192px 16px` | padding | page content |
| `0px 1px 1px 0px` | margin | page content |
| `48px` | padding | page content |
| `48px 0px 0px` | margin | page content |
| `0px 20px` | padding | page content |
| `16px` | padding | page content |
| `12px 0px 0px` | margin | page content |
| `0px 16px` | padding | page content |

### Shape and depth

The captured pages use `1px 0px 0px solid 0px`, `1px 0px 0px 1px solid 0px`, `1px 1px 0px solid 8px 8px 0px 0px`, `0px none 6px`, `1px solid 12px 12px 12px 2px`, `0px none 100px`, `1px solid 6px`, and `1px solid 0px 0px 8px 8px` border treatments. Recorded shadows include `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px`, `rgba(255, 255, 255, 0.145) 0px 0px 0px 1px, rgba(0, 0, 0, 0.16) 0px 1px 2px 0px, rgb(0, 0, 0) 0px 0px 0px 1px`, `rgba(255, 255, 255, 0.14) 0px 0px 0px 1px`, and `rgb(46, 46, 46) 0px 0px 0px 1px`.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#000000` and `#0a0a0a`. Text colors include `#ededed`, `#a1a1a1`, and `#8f8f8f`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Geist** and **Geist Mono**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `192px 16px`, `0px 1px 1px 0px`, `48px`, `48px 0px 0px`, and `0px 20px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#000000` and `#0a0a0a`. Depth is supported by the returned shadows.

## Components and states

The captured pages include repeated styling on <div>, <span>, <h3>, <p>, <button>, <a>, <h1>, and <ul> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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
- `#ededed`
- `#a1a1a1`
- `#1f1f1f`
- `#0a0a0a`
- `#8f8f8f`
- `#ffffff`
- `#62c073`
- `#878787`
- `#2e2e2e`
- `#f75f8f`
- `#bf7af0`

## Typography captured from ai-sdk.dev

- **Geist** — weight 400 · size 16px
- **Geist Mono** — weight 400 · size 12px

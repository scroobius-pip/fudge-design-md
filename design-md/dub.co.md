# How dub.co is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/dub.co-design)

Last updated: 2026-08-03

## Captured pages

[![Dub - The Modern Link Attribution Platform](https://pin.fontofweb.com/7583?format=jpg)](https://design.withfudge.com/share/pin-7583)

[Dub - The Modern Link Attribution Platform](https://design.withfudge.com/share/pin-7583)

[![Dub - The Modern Link Attribution Platform](https://pin.fontofweb.com/7582?format=jpg)](https://design.withfudge.com/share/pin-7582)

[Dub - The Modern Link Attribution Platform](https://design.withfudge.com/share/pin-7582)

[![Dub - The Modern Link Attribution Platform](https://pin.fontofweb.com/7581?format=jpg)](https://design.withfudge.com/share/pin-7581)

[Dub - The Modern Link Attribution Platform](https://design.withfudge.com/share/pin-7581)

[![Dub - The Modern Link Attribution Platform](https://pin.fontofweb.com/7580?format=jpg)](https://design.withfudge.com/share/pin-7580)

[Dub - The Modern Link Attribution Platform](https://design.withfudge.com/share/pin-7580)

[![Dub - The Modern Link Attribution Platform](https://pin.fontofweb.com/7579?format=jpg)](https://design.withfudge.com/share/pin-7579)

[Dub - The Modern Link Attribution Platform](https://design.withfudge.com/share/pin-7579)

[![Dub - The Modern Link Attribution Platform](https://pin.fontofweb.com/7578?format=jpg)](https://design.withfudge.com/share/pin-7578)

[Dub - The Modern Link Attribution Platform](https://design.withfudge.com/share/pin-7578)

[![Dub - The Modern Link Attribution Platform](https://pin.fontofweb.com/7577?format=jpg)](https://design.withfudge.com/share/pin-7577)

[Dub - The Modern Link Attribution Platform](https://design.withfudge.com/share/pin-7577)

[![Pricing | Dub](https://pin.fontofweb.com/3066?format=jpg)](https://design.withfudge.com/share/pin-3066)

[Pricing | Dub](https://design.withfudge.com/share/pin-3066)

## Overview

dub.co presents a mixed light and dark surface treatment in the captured pages. The system is anchored by `#0a0a0a`, `#000000`, and `#171717`, with typography led by **Inter**, **Satoshi**, and **Geist Mono**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#0a0a0a` | text on page content |
| color.surface | `#000000` | surface on page content |
| color.surface | `#171717` | surface on page content |
| color.text | `#fafafa` | text on page content |
| color.surface | `#ffffff` | surface on page content |
| color.surface | `#f5f5f5` | surface on page content |
| color.text | `#262626` | text on page content |
| color.text | `#737373` | text on page content in the footer |
| color.border | `#e5e5e5` | border on page content in the footer |
| color.text | `#525252` | text on page content in the button |
| color.text | `#a3a3a3` | text on page content |
| color.text | `#404040` | text on page content in the button |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **Inter** | 16px | 400 | 24px | normal | <div>, <div> in the footer, <a> in the footer, <ul> in the footer, <div> in the button, <button> in the button, and <a> |
| type.body-18px | **Inter** | 18px | 400 | 28px | normal | <p> and <div> |
| type.body-30px | **Inter** | 30px | 400 | 41.25px | normal | <p> and <div> |
| type.body-14px | **Inter** | 14px | 400 | 20px | normal | <a> in the footer, <span> in the footer, <span>, <div> in the button, and <p> in the button |
| type.body-24px | **Inter** | 24px | 400 | 32px | normal | <p> |
| type.display-48px | **Satoshi** | 48px | 500 | 48px | normal | <h2> |
| type.utility-12px | **Inter** | 12px | 500 | 16px | normal | <div> in the button, <span> in the button, and <span> |
| type.body-14px | **Inter** | 14px | 500 | 20px | normal | <a>, <h3> in the footer, <span> in the button, and <a> in the button |
| type.body-16px | **Inter** | 16px | 500 | 24px | normal | <span> |
| type.body-20px | **Inter** | 20px | 500 | 28px | normal | <p> |
| type.display-40px | **Satoshi** | 40px | 500 | 40px | normal | <h2> |
| type.body-20px | **Inter** | 20px | 400 | 28px | normal | <p> |
| type.display-48px | **Satoshi** | 48px | 500 | 55.2px | normal | <h1> |
| type.display-36px | **Satoshi** | 36px | 500 | 40px | normal | <h2> |
| type.body-24px | **Geist Mono** | 24px | 500 | 32px | normal | <p> |
| type.body-14px | **Inter** | 14px | 500 | 14px | normal | <a> |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `0px 16px` | padding | page content |
| `0px 296.5px` | margin | page content |
| `96px 16px 128px` | padding | page content |
| `112px 40px` | padding | page content |
| `56px 40px` | padding | page content |
| `80px 48px` | padding | page content |
| `80px 0px 40px` | padding | page content |
| `32px 0px 0px` | margin | page content |

### Shape and depth

The captured pages use `0px none 16px 16px 0px 0px`, `1px solid 8px`, `1px 1px 0px solid 20px 20px 0px 0px`, `0px none 12px`, `1px solid 8px`, `1px solid 12px`, `1px solid 8px`, and `1px solid 9999px` border treatments. Recorded gradients include `linear-gradient(rgba(0, 0, 0, 0.6), rgb(0, 0, 0))`. Recorded shadows include `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px` and `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px`.

## Colors

The visual system is mixed light and dark surface treatment. Surface colors include `#000000`, `#171717`, and `#ffffff`. Text colors include `#0a0a0a`, `#fafafa`, and `#262626`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Inter**, **Satoshi**, and **Geist Mono**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `0px 16px`, `0px 296.5px`, `96px 16px 128px`, `112px 40px`, and `56px 40px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is mixed light and dark surface treatment. Surface treatment centers on `#000000`, `#171717`, `#ffffff`, and `#f5f5f5`. Depth is supported by the returned gradients and shadows.

## Components and states

The captured pages include repeated styling on <div>, <a>, <h2>, <p>, <h3>, <ul>, <span>, and <button> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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

- `#0a0a0a`
- `#000000`
- `#171717`
- `#fafafa`
- `#ffffff`
- `#f5f5f5`
- `#262626`
- `#737373`
- `#e5e5e5`
- `#525252`
- `#a3a3a3`
- `#404040`
- `#ea580c`
- `#d4d4d4`
- `#16a34a`
- `#111827`

## Typography captured from dub.co

- **Inter** — weight 400 · size 16px
- **Satoshi** — weight 500 · size 48px
- **Geist Mono** — weight 500 · size 24px

# How evefrontier.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/evefrontier.com-design)

Last updated: 2026-08-03

## Captured pages

[![EVE Frontier](https://pin.fontofweb.com/9922?format=jpg)](https://design.withfudge.com/share/pin-9922)

[EVE Frontier](https://design.withfudge.com/share/pin-9922)

[![EVE Frontier](https://pin.fontofweb.com/9921?format=jpg)](https://design.withfudge.com/share/pin-9921)

[EVE Frontier](https://design.withfudge.com/share/pin-9921)

[![EVE Frontier](https://pin.fontofweb.com/9920?format=jpg)](https://design.withfudge.com/share/pin-9920)

[EVE Frontier](https://design.withfudge.com/share/pin-9920)

[![EVE Frontier](https://pin.fontofweb.com/9919?format=jpg)](https://design.withfudge.com/share/pin-9919)

[EVE Frontier](https://design.withfudge.com/share/pin-9919)

## Overview

evefrontier.com presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#000000`, `#fafae5`, and `#ff4700`, with typography led by **Abc Favorit Mono**, **Frontier Disket Mono**, **Applesystem**, and **System**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#000000` | text on page content |
| color.text | `#fafae5` | text on page content in the main |
| color.text | `#ff4700` | text on page content in the main |
| color.text | `#0b0b0b` | text on page content in the button |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **Abc Favorit Mono** | 16px | 400 | 24px | normal | <div> in the main, <main> in the main, <div>, <body>, <img> in the main, <a> in the main, <form> in the main, <header> in the header, <div> in the header, <div> in the button, <button> in the button, <img>, and <a> |
| type.body-20px | **Abc Favorit Mono** | 20px | 200 | 30px | -0.4px | <p> in the main |
| type.body-14px | **Applesystem** | 14px | 400 | normal | normal | <div> |
| type.body-16px | **System** | 16px | 400 | 24px | normal | <html> |
| type.display-60px | **Frontier Disket Mono** | 60px | 400 | 90px | normal | <h1> in the main |
| type.body-16px | **Frontier Disket Mono** | 16px | 300 | 24px | normal | <div> in the main |
| type.body-16px | **Abc Favorit Mono** | 16px | 400 | 24px | 0.84px | <a> in the header, <div> in the button, and <button> in the button |
| type.display-32px | **Frontier Disket Mono** | 32px | 400 | 48px | normal | <h3> in the main |
| type.body-16px | **Frontier Disket Mono** | 16px | 400 | 24px | normal | <span> in the header |
| type.body-14px | **Frontier Disket Mono** | 14px | 400 | 16px | 0.84px | <a> in the main |
| type.body-20px | **Frontier Disket Mono** | 20px | 400 | normal | -0.4px | <p> in the button |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `120px 80px` | padding | page content |
| `120px` | padding-top | page content |
| `80px` | padding-right | page content |
| `120px` | padding-bottom | page content |
| `80px` | padding-left | page content |
| `80px` | gap | page content |
| `80px` | row-gap | page content |
| `80px` | column-gap | page content |

### Shape and depth

The captured pages use `0px 1px none solid 0px`, `1px solid 0px`, and `0px 1px none solid 0px` border treatments.

## Colors

The visual system is predominantly dark surface treatment. Surface roles are not fully established. Text colors include `#000000`, `#fafae5`, and `#ff4700`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Abc Favorit Mono**, **Applesystem**, **System**, and **Frontier Disket Mono**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `120px 80px`, `120px`, `80px`, `120px`, and `80px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. The surface palette is not fully established. No structured gradient or shadow treatment is established.

## Components and states

The captured pages include repeated styling on <div>, <html>, <main>, <body>, <a>, <img>, <h3>, and <p> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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
- `#fafae5`
- `#ff4700`
- `#0b0b0b`

## Typography captured from evefrontier.com

- **Abc Favorit Mono** — weight 400 · size 16px
- **Frontier Disket Mono** — weight 400 · size 14px
- **Applesystem** — weight 400 · size 14px
- **System** — weight 400 · size 16px

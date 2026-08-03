# How goose.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/goose.ai-design)

Last updated: 2026-08-03

## Captured pages

[![GooseAI](https://pin.fontofweb.com/6494?format=jpg)](https://design.withfudge.com/share/pin-6494)

[GooseAI](https://design.withfudge.com/share/pin-6494)

[![GooseAI](https://pin.fontofweb.com/6493?format=jpg)](https://design.withfudge.com/share/pin-6493)

[GooseAI](https://design.withfudge.com/share/pin-6493)

[![GooseAI](https://pin.fontofweb.com/6492?format=jpg)](https://design.withfudge.com/share/pin-6492)

[GooseAI](https://design.withfudge.com/share/pin-6492)

[![GooseAI](https://pin.fontofweb.com/6491?format=jpg)](https://design.withfudge.com/share/pin-6491)

[GooseAI](https://design.withfudge.com/share/pin-6491)

## Overview

goose.ai presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#ffffff`, `#000000`, and `#281c59`, with typography led by **Articulat Cf**, **Karl**, and **System**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#ffffff` | text on page content |
| color.surface | `#000000` | surface on page content |
| color.border | `#281c59` | border on page content |
| color.surface | `#0b0224` | surface on page content |
| color.surface | `#01001a` | surface on page content |
| color.text | `#83ff97` | text on page content |
| color.text | `#fffa83` | text on page content |
| color.surface | `#ffc683` | surface on page content in the button |
| color.text | `#83a5ff` | text on page content in the button |
| color.text | `#c883ff` | text on page content in the button |
| color.text | `#9991ff` | text on page content |
| color.surface | `#2f9e44` | surface on page content |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **Articulat Cf** | 16px | 400 | 24.8px | normal | <div> and <a> |
| type.display-50px | **Articulat Cf** | 50px | 700 | 67.5px | normal | <h2> |
| type.body-20px | **Articulat Cf** | 20px | 400 | 31px | normal | <div> |
| type.heading-16px | **Articulat Cf** | 16px | 900 | 24.8px | normal | <div> in the button |
| type.display-50px | **Karl** | 50px | 500 | 65px | normal | <h1> |
| type.heading-26px | **Karl** | 26px | 700 | 35.1px | normal | <h2> |
| type.display-38px | **Karl** | 38px | 400 | 58.9px | normal | <div> |
| type.heading-16px | **Articulat Cf** | 16px | 700 | 24.8px | normal | <div> |
| type.body-26px | **Karl** | 26px | 400 | 35.1px | normal | <h2> |
| type.heading-20px | **Articulat Cf** | 20px | 600 | 31px | normal | <div> |
| type.utility-12px | **System** | 12px | 400 | 18.6px | normal | <code> |
| type.body-24px | **Articulat Cf** | 24px | 400 | 37.2px | normal | <div> |
| type.body-14px | **Articulat Cf** | 14px | 400 | 14px | normal | <div> in the button |
| type.heading-16px | **Articulat Cf** | 16px | 700 | 16px | normal | <button> in the button and <span> in the button |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `0px 296px` | margin | page content |
| `32px` | padding | page content |
| `-80px 0px` | margin | page content |
| `200px 32px` | padding | page content |
| `15px` | padding | page content |
| `-15px` | margin | page content |
| `30px` | padding | page content |
| `72px 0px 0px` | padding | page content |

### Shape and depth

The captured pages use `1px solid 0px`, `2px solid 0px`, `0px none 4px`, and `1px solid 0px` border treatments.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#000000`, `#0b0224`, and `#01001a`. Text colors include `#ffffff`, `#83ff97`, and `#fffa83`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Articulat Cf**, **Karl**, and **System**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `0px 296px`, `32px`, `-80px 0px`, `200px 32px`, and `15px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#000000`, `#0b0224`, `#01001a`, and `#ffc683`. No structured gradient or shadow treatment is established.

## Components and states

The captured pages include repeated styling on <div>, <h2>, <code>, <a>, <h1>, <button>, and <span> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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

- `#ffffff`
- `#000000`
- `#281c59`
- `#0b0224`
- `#01001a`
- `#83ff97`
- `#fffa83`
- `#ffc683`
- `#83a5ff`
- `#c883ff`
- `#9991ff`
- `#2f9e44`
- `#34276a`

## Typography captured from goose.ai

- **Articulat Cf** — weight 400 · size 16px
- **Karl** — weight 400 · size 26px
- **System** — weight 400 · size 12px

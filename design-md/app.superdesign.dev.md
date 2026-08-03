# How app.superdesign.dev is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/app.superdesign.dev-design)

Last updated: 2026-08-03

## Captured pages

[![Superdesign](https://pin.fontofweb.com/6128?format=jpg)](https://design.withfudge.com/share/pin-6128)

[Superdesign](https://design.withfudge.com/share/pin-6128)

[![Disruptor Beta Launch | Superdesign Prompts](https://pin.fontofweb.com/6127?format=jpg)](https://design.withfudge.com/share/pin-6127)

[Disruptor Beta Launch | Superdesign Prompts](https://design.withfudge.com/share/pin-6127)

## Overview

app.superdesign.dev presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#ffffff`, `#b8b8b8`, and `#a1a1aa`, with typography led by **Inter**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#ffffff` | text on page content in the header |
| color.text | `#b8b8b8` | text on page content in the button |
| color.text | `#a1a1aa` | text on page content in the button |
| color.border | `#3f3f46` | border on page content in the button |
| color.surface | `#262626` | surface on page content in the button |
| color.text | `#d4d4d8` | text on page content |
| color.surface | `#27272a` | surface on page content in the button |
| color.surface | `#18181b` | surface on page content in the button |
| color.surface | `#fafafa` | surface on page content in the button |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **Inter** | 16px | 400 | 24px | -0.176px | <div> in the header, <button> in the button, <div> in the button, <div> in the main, and <div> |
| type.body-14px | **Inter** | 14px | 400 | 20px | -0.176px | <p> |
| type.utility-12px | **Inter** | 12px | 500 | 16px | -0.176px | <button> in the button, <span> in the button, and <div> |
| type.body-14px | **Inter** | 14px | 500 | 20px | -0.21px | <h3> in the main |
| type.heading-20px | **Inter** | 20px | 600 | 25px | -0.5px | <h1> |
| type.body-14px | **Inter** | 14px | 500 | 20px | -0.176px | <span> in the button |
| type.utility-12px | **Inter** | 12px | 400 | 16px | -0.176px | <button> in the button |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `24px` | padding | page content |
| `0px 24px` | padding | page content |
| `12px` | padding | page content |
| `16px` | padding | page content |
| `8px 0px 0px` | margin | page content |
| `16px 20px` | padding | page content |
| `24px 0px 0px` | margin | page content |
| `0px 16px` | padding | page content |

### Shape and depth

The captured pages use `0px none 8px`, `1px solid 9999px`, `2px dashed 20px`, `0px none 12px`, `0px none 6px`, `0px none 9999px`, `1px solid 12px`, and `1px solid 8px` border treatments.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#262626`, `#27272a`, and `#18181b`. Text colors include `#ffffff`, `#b8b8b8`, and `#a1a1aa`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Inter**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `24px`, `0px 24px`, `12px`, `16px`, and `8px 0px 0px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#262626`, `#27272a`, `#18181b`, and `#fafafa`. No structured gradient or shadow treatment is established.

## Components and states

The captured pages include repeated styling on <div>, <button>, <h3>, <span>, <h1>, and <p> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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
- `#b8b8b8`
- `#a1a1aa`
- `#3f3f46`
- `#262626`
- `#d4d4d8`
- `#27272a`
- `#18181b`
- `#fafafa`

## Typography captured from app.superdesign.dev

- **Inter** — weight 400 · size 16px

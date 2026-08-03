# How demo.refero.design is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/demo.refero.design-design)

Last updated: 2026-08-03

## Captured pages

[![Refero Research](https://pin.fontofweb.com/7786?format=jpg)](https://design.withfudge.com/share/pin-7786)

[Refero Research](https://design.withfudge.com/share/pin-7786)

[![Refero Research](https://pin.fontofweb.com/7776?format=jpg)](https://design.withfudge.com/share/pin-7776)

[Refero Research](https://design.withfudge.com/share/pin-7776)

## Overview

demo.refero.design presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#fafafa`, `#000000`, and `#a1a1aa`, with typography led by **System**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#fafafa` | text on page content |
| color.surface | `#000000` | surface on page content |
| color.text | `#a1a1aa` | text on page content in the button |
| color.surface | `#27272a` | surface on page content in the button |
| color.text | `#18181b` | text on page content in the button |
| color.surface | `#09090b` | surface on page content in the button |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **System** | 16px | 400 | 24px | normal | <div>, <button> in the button, <span> in the button, and <div> in the button |
| type.body-14px | **System** | 14px | 400 | 20px | normal | <div>, <button> in the button, <p>, <span>, and <div> in the button |
| type.body-14px | **System** | 14px | 500 | 20px | normal | <button> in the button, <div>, <span>, and <span> in the button |
| type.body-14px | **System** | 14px | 500 | 19.25px | normal | <p> in the button |
| type.heading-16px | **System** | 16px | 600 | 24px | -0.4px | <span> |
| type.heading-15px | **System** | 15px | 600 | 22.5px | normal | <span> in the button |
| type.utility-12px | **System** | 12px | 400 | 19.5px | normal | <p> |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `96px 24px 24px` | padding | page content |
| `0px 325.5px` | margin | page content |
| `32px` | padding | page content |
| `0px 0px 0px 16px` | padding | page content |
| `8px 0px 0px` | margin | page content |
| `20px 24px` | padding | page content |
| `0px 0px 16px` | margin | page content |
| `8px 24px 16px` | padding | page content |

### Shape and depth

The captured pages use `0px none 16px`, `1px solid 12px`, `1px 0px 0px solid 0px`, `0px none 6px`, `1px solid 16px`, `0px none 12px`, and `1px solid 3.35544e+07px` border treatments. Recorded shadows include `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px` and `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px rgb(24,24,27)`.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#000000`, `#27272a`, and `#09090b`. Text colors include `#fafafa`, `#a1a1aa`, and `#18181b`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **System**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `96px 24px 24px`, `0px 325.5px`, `32px`, `0px 0px 0px 16px`, and `8px 0px 0px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#000000`, `#27272a`, and `#09090b`. Depth is supported by the returned shadows.

## Components and states

The captured pages include repeated styling on <div>, <button>, <span>, and <p> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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

- `#fafafa`
- `#000000`
- `#a1a1aa`
- `#27272a`
- `#18181b`
- `#09090b`

## Typography captured from demo.refero.design

- **System** — weight 400 · size 16px

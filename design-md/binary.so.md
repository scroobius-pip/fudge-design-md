# How binary.so is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/binary.so-design)

Last updated: 2026-08-03

## Captured pages

[![Binary | Hiring software that is fast, simple and AI powered](https://pin.fontofweb.com/7683?format=jpg)](https://design.withfudge.com/share/pin-7683)

[Binary | Hiring software that is fast, simple and AI powered](https://design.withfudge.com/share/pin-7683)

[![Binary | Hiring software that is fast, simple and AI powered](https://pin.fontofweb.com/7682?format=jpg)](https://design.withfudge.com/share/pin-7682)

[Binary | Hiring software that is fast, simple and AI powered](https://design.withfudge.com/share/pin-7682)

[![Binary | Hiring software that is fast, simple and AI powered](https://pin.fontofweb.com/7681?format=jpg)](https://design.withfudge.com/share/pin-7681)

[Binary | Hiring software that is fast, simple and AI powered](https://design.withfudge.com/share/pin-7681)

## Overview

binary.so presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#000000`, `#0f172a`, and `#586a84`, with typography led by **System** and **Basier Square**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#000000` | text on page content |
| color.text | `#0f172a` | text on page content |
| color.text | `#586a84` | text on page content |
| color.text | `#ffffff` | text on page content in the button |
| color.surface | `#f8f8f8` | surface on page content |
| color.border | `#e2e8f0` | border on page content |
| color.surface | `#f5f5f5` | surface on page content in the button |
| color.border | `#e1e7ef` | border on page content in the button |
| color.shadow | `#bdc1c8` | shadow on page content in the button |
| color.text | `#f8fafc` | text on page content in the button |
| color.shadow | `#3c424c` | shadow on page content in the button |
| color.surface | `#f1f5f9` | surface on page content |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **System** | 16px | 400 | 24px | normal | <div>, <span>, <ul>, <li>, and <span> in the header |
| type.display-52px | **Basier Square** | 52px | 500 | 62.4px | -2.6px | <h2> and <h1> |
| type.body-18px | **System** | 18px | 400 | 28px | normal | <p> |
| type.body-20px | **System** | 20px | 400 | 28px | normal | <ul> and <div> |
| type.body-30px | **Basier Square** | 30px | 500 | 36px | -0.75px | <h3> |
| type.body-15px | **System** | 15px | 500 | 22.5px | normal | <button> in the button |
| type.body-18px | **System** | 18px | 500 | 28px | normal | <h2> |
| type.body-14px | **System** | 14px | 400 | 20px | normal | <div> in the header |
| type.body-14px | **System** | 14px | 500 | 20px | normal | <span>, <button> in the button, and <span> in the button |
| type.display-44px | **System** | 44px | 600 | 66px | -1.1px | <span> |
| type.body-16px | **System** | 16px | 500 | 24px | normal | <button> in the button |
| type.body-18px | **System** | 18px | 500 | 28px | 0.45px | <button> in the button |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `64px 0px 0px` | padding | page content |
| `0px 24px` | padding | page content |
| `0px 260px 160px` | margin | page content |
| `32px` | padding | page content |
| `0px 24px 48px` | padding | page content |
| `0px 416px` | margin | page content |
| `0px 0px 32px` | margin | page content |
| `8px 35.2812px` | margin | page content |

### Shape and depth

The captured pages use `0px none 8px`, `1px solid 8px`, `0px none 6px`, `1px solid 6px`, `0px none 4px`, and `1px solid 6px` border treatments. Recorded gradients include `linear-gradient(to right, rgb(50, 45, 45), rgb(48, 57, 60))`, `linear-gradient(rgb(57, 62, 64), rgb(39, 42, 44))`, and `linear-gradient(rgb(253, 254, 255), rgb(242, 245, 248))`. Recorded shadows include `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 76, 0.24) 0px 8px 10px 0px`, `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(189, 193, 200, 0.18) 0px 8px 10px 0px`, `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.08) 0px 8px 30px 0px`, and `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgb(203, 213, 225) 0px 2px 0px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px`.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#f8f8f8`, `#f5f5f5`, and `#f1f5f9`. Text colors include `#000000`, `#0f172a`, and `#586a84`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **System** and **Basier Square**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `64px 0px 0px`, `0px 24px`, `0px 260px 160px`, `32px`, and `0px 24px 48px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#f8f8f8`, `#f5f5f5`, and `#f1f5f9`. Depth is supported by the returned gradients and shadows.

## Components and states

The captured pages include repeated styling on <h2>, <div>, <span>, <button>, <ul>, <li>, <h3>, and <p> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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
- `#0f172a`
- `#586a84`
- `#ffffff`
- `#f8f8f8`
- `#e2e8f0`
- `#f5f5f5`
- `#e1e7ef`
- `#bdc1c8`
- `#f8fafc`
- `#3c424c`
- `#f1f5f9`
- `#475569`
- `#64748b`
- `#cbd5e1`
- `#334155`

## Typography captured from binary.so

- **System** — weight 400 · size 16px
- **Basier Square** — weight 500 · size 52px

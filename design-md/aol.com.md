# How aol.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/aol.com-design)

Last updated: 2026-08-03

## Captured pages

[![News, Politics, Sports, Mail & Latest Headlines - AOL.com](https://pin.fontofweb.com/8410?format=jpg)](https://design.withfudge.com/share/pin-8410)

[News, Politics, Sports, Mail & Latest Headlines - AOL.com](https://design.withfudge.com/share/pin-8410)

[![News, Politics, Sports, Mail & Latest Headlines - AOL.com](https://pin.fontofweb.com/8409?format=jpg)](https://design.withfudge.com/share/pin-8409)

[News, Politics, Sports, Mail & Latest Headlines - AOL.com](https://design.withfudge.com/share/pin-8409)

## Overview

aol.com presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#000000`, `#232a31`, and `#12161c`, with typography led by **Basis Grotesque Pro**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.surface | `#000000` | surface on page content in the header |
| color.text | `#232a31` | text on page content in the header |
| color.text | `#12161c` | text on page content in the main |
| color.text | `#0047ff` | text on page content in the main |
| color.surface | `#ffd327` | surface on page content in the header |
| color.surface | `#ffffff` | surface on page content in the header |
| color.text | `#001633` | text on page content in the header |
| color.text | `#0000ee` | text on page content in the header |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **Basis Grotesque Pro** | 16px | 400 | normal | normal | <div> in the header, <div>, <button> in the button, <div> in the main, and <a> in the header |
| type.heading-14px | **Basis Grotesque Pro** | 14px | 700 | 20px | normal | <p> in the main |
| type.utility-12px | **Basis Grotesque Pro** | 12px | 400 | 16px | normal | <a> in the main |
| type.heading-18px | **Basis Grotesque Pro** | 18px | 700 | 24px | normal | <a> in the main |
| type.heading-24px | **Basis Grotesque Pro** | 24px | 900 | 28px | -0.5px | <h2> in the main |
| type.utility-12px | **Basis Grotesque Pro** | 12px | 700 | 12px | normal | <a> in the main |
| type.body-14px | **Basis Grotesque Pro** | 14px | 500 | 14px | normal | <span> in the button and <button> in the button |
| type.utility-12px | **Basis Grotesque Pro** | 12px | 500 | 16px | normal | <a> in the header |
| type.heading-16px | **Basis Grotesque Pro** | 16px | 700 | 16px | normal | <button> in the button |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `0px 0px 56px` | margin | page content |
| `0px 40px` | padding | page content |
| `0px 130px` | margin | page content |
| `40px 20px 56px` | padding | page content |
| `0px 5px` | padding | page content |
| `0px 165px` | margin | page content |
| `28px 0px 0px` | margin | page content |
| `0px 8px 0px 0px` | padding | page content |

### Shape and depth

The captured pages use `1px solid 50px` and `1px solid 50px` border treatments. Recorded shadows include `rgba(0, 0, 0, 0.1) 0px 0px 1px 0px, rgba(0, 0, 0, 0.1) 0px 4px 8px 0px`.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#000000`, `#ffd327`, and `#ffffff`. Text colors include `#232a31`, `#12161c`, and `#0047ff`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Basis Grotesque Pro**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `0px 0px 56px`, `0px 40px`, `0px 130px`, `40px 20px 56px`, and `0px 5px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#000000`, `#ffd327`, and `#ffffff`. Depth is supported by the returned shadows.

## Components and states

The captured pages include repeated styling on <div>, <button>, <h2>, <p>, <a>, and <span> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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
- `#232a31`
- `#12161c`
- `#0047ff`
- `#ffd327`
- `#ffffff`
- `#001633`
- `#0000ee`

## Typography captured from aol.com

- **Basis Grotesque Pro** — weight 400 · size 16px

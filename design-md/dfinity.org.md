# How dfinity.org is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/dfinity.org-design)

Last updated: 2026-08-03

## Captured pages

[![The DFINITY Foundation](https://pin.fontofweb.com/7231?format=jpg)](https://design.withfudge.com/share/pin-7231)

[The DFINITY Foundation](https://design.withfudge.com/share/pin-7231)

[![The DFINITY Foundation](https://pin.fontofweb.com/7230?format=jpg)](https://design.withfudge.com/share/pin-7230)

[The DFINITY Foundation](https://design.withfudge.com/share/pin-7230)

## Overview

dfinity.org presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#000000`, `#0e031f`, and `#ffffff`, with typography led by **By Laurenz Brunner** and **Circular Xx**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#000000` | text on page content |
| color.border | `#0e031f` | border on page content in the main |
| color.text | `#ffffff` | text on page content in the button |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **By Laurenz Brunner** | 16px | 400 | 24px | normal | <div> and <div> in the main |
| type.body-16px | **Circular Xx** | 16px | 400 | 24px | normal | <div> in the main |
| type.body-14px | **Circular Xx** | 14px | 450 | 22.4px | normal | <p> in the main and <a> in the main |
| type.display-64px | **By Laurenz Brunner** | 64px | 500 | 76.8px | normal | <h2> in the main |
| type.display-64px | **Circular Xx** | 64px | 500 | 76.8px | normal | <h2> in the main |
| type.display-32px | **Circular Xx** | 32px | 450 | 44.8px | normal | <h3> in the main |
| type.body-18px | **Circular Xx** | 18px | 450 | 28.8px | normal | <div> in the button |
| type.body-16px | **By Laurenz Brunner** | 16px | 500 | 25.6px | normal | <button> in the button |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `0px 0px 16px` | margin | page content |
| `0px 0px 80px` | margin | page content |
| `0px 0px 12px` | margin | page content |
| `16px 0px` | padding | page content |
| `12px 24px` | padding | page content |

### Shape and depth

The captured pages use `1px 0px 0px solid 0px` and `0px none 9999px` border treatments. Recorded gradients include `linear-gradient(to top, rgb(255, 255, 255), rgba(255, 255, 255, 0))`.

## Colors

The visual system is predominantly dark surface treatment. Surface roles are not fully established. Text colors include `#000000` and `#ffffff`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **By Laurenz Brunner** and **Circular Xx**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `0px 0px 16px`, `0px 0px 80px`, `0px 0px 12px`, `16px 0px`, and `12px 24px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. The surface palette is not fully established. Depth is supported by the returned gradients.

## Components and states

The captured pages include repeated styling on <div>, <h2>, <h3>, <p>, <a>, and <button> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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
- `#0e031f`
- `#ffffff`

## Typography captured from dfinity.org

- **By Laurenz Brunner** — weight 400 · size 16px
- **Circular Xx** — weight 500 · size 64px

# How dashboard.internetcomputer.org is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/dashboard.internetcomputer.org-design)

Last updated: 2026-08-03

## Captured pages

[![Subnets - ICP Dashboard](https://pin.fontofweb.com/9061?format=jpg)](https://design.withfudge.com/share/pin-9061)

[Subnets - ICP Dashboard](https://design.withfudge.com/share/pin-9061)

[![ICP Dashboard](https://pin.fontofweb.com/9060?format=jpg)](https://design.withfudge.com/share/pin-9060)

[ICP Dashboard](https://design.withfudge.com/share/pin-9060)

[![ICP Dashboard](https://pin.fontofweb.com/9059?format=jpg)](https://design.withfudge.com/share/pin-9059)

[ICP Dashboard](https://design.withfudge.com/share/pin-9059)

[![ICP Dashboard](https://pin.fontofweb.com/9058?format=jpg)](https://design.withfudge.com/share/pin-9058)

[ICP Dashboard](https://design.withfudge.com/share/pin-9058)

## Overview

dashboard.internetcomputer.org presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#ffffff`, `#000000`, and `#1c1c1c`, with typography led by **By Laurenz Brunner**, **Roboto**, and **System**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#ffffff` | text on page content |
| color.surface | `#000000` | surface on page content |
| color.surface | `#1c1c1c` | surface on page content in the main |
| color.text | `#a3a3a3` | text on page content in the main |
| color.border | `#333333` | border on page content in the main |
| color.border | `#2b2b2b` | border on page content in the main |
| color.text | `#66aeff` | text on page content in the main |
| color.text | `#ff0000` | text on page content in the button |
| color.text | `#161616` | text on page content in the main |
| color.text | `#9e9eff` | text on page content |
| color.surface | `#0073f5` | surface on page content in the main |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **By Laurenz Brunner** | 16px | 400 | normal | normal | <div>, <div> in the main, and <a> in the main |
| type.body-14px | **By Laurenz Brunner** | 14px | 450 | 20px | normal | <div> in the main, <span> in the main, <a> in the main, <button> in the button, and <span> in the button |
| type.body-14px | **By Laurenz Brunner** | 14px | 400 | 28px | normal | <div> and <a> |
| type.body-14px | **By Laurenz Brunner** | 14px | 400 | 24px | normal | <div> in the main |
| type.utility-12px | **By Laurenz Brunner** | 12px | 450 | 12px | normal | <span> in the main and <div> in the main |
| type.body-30px | **By Laurenz Brunner** | 30px | 450 | 38px | normal | <div> in the main |
| type.body-20px | **By Laurenz Brunner** | 20px | 450 | 25px | -0.2px | <h2> in the main, <div> in the main, and <a> in the main |
| type.body-16px | **By Laurenz Brunner** | 16px | 450 | 20px | normal | <span> in the main |
| type.body-18.8125px | **By Laurenz Brunner** | 18.8125px | 450 | 26.875px | normal | <div> |
| type.body-14px | **By Laurenz Brunner** | 14px | 500 | 20px | normal | <button> in the button and <span> in the button |
| type.display-64px | **By Laurenz Brunner** | 64px | 450 | 72px | normal | <div> in the main |
| type.body-14px | **By Laurenz Brunner** | 14px | 450 | 14px | normal | <span> in the main |
| type.display-86px | **By Laurenz Brunner** | 86px | 450 | 96.75px | normal | <div> |
| type.utility-10px | **By Laurenz Brunner** | 10px | 500 | 14px | normal | <div> in the main |
| type.display-56px | **By Laurenz Brunner** | 56px | 450 | 56px | -1.28px | <span> in the main and <div> in the main |
| type.display-32.25px | **By Laurenz Brunner** | 32.25px | 450 | 43px | -0.645px | <div> |
| type.utility-12px | **By Laurenz Brunner** | 12px | 450 | 16px | normal | <span> in the main |
| type.body-16px | **By Laurenz Brunner** | 16px | 450 | normal | normal | <div> |
| type.utility-12px | **System** | 12px | 400 | normal | normal | <text> in the main |
| type.body-26.875px | **By Laurenz Brunner** | 26.875px | 450 | 37.625px | normal | <div> |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `0px 0px 48px` | margin | page content |
| `0px 128px` | padding | page content |
| `0px 24px 32px` | padding | page content |
| `24px 24px 8px` | padding | page content |
| `24px 0px 0px` | padding | page content |
| `16px 32px` | padding | page content |
| `0px 0px 6px` | margin | page content |
| `24px 0px` | padding | page content |

### Shape and depth

The captured pages use `1px solid 8px`, `1px 1px 1px 0px solid solid solid none 0px`, `1px 1px 1px 0px solid solid solid none 0px 8px 8px 0px`, `0px none 100px`, `0px none 16px`, `1px solid 2px`, `1px solid 8px 0px 0px 8px`, and `0px none 1px` border treatments. Recorded shadows include `rgba(0, 0, 0, 0.2) 0px 5.375px 8.0625px -2.6875px, rgba(0, 0, 0, 0.35) 0px 16.125px 32.25px -5.375px`.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#000000`, `#1c1c1c`, and `#0073f5`. Text colors include `#ffffff`, `#a3a3a3`, and `#66aeff`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **By Laurenz Brunner**, **System**, and **Roboto**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `0px 0px 48px`, `0px 128px`, `0px 24px 32px`, `24px 24px 8px`, and `24px 0px 0px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#000000`, `#1c1c1c`, and `#0073f5`. Depth is supported by the returned shadows.

## Components and states

The captured pages include repeated styling on <div>, <a>, <h1>, <span>, <button>, <text>, and <h2> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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

- `#ffffff`
- `#000000`
- `#1c1c1c`
- `#a3a3a3`
- `#333333`
- `#2b2b2b`
- `#66aeff`
- `#ff0000`
- `#161616`
- `#9e9eff`
- `#0073f5`

## Typography captured from dashboard.internetcomputer.org

- **By Laurenz Brunner** — weight 400 · size 14px
- **Roboto** — weight 500 · size 14px
- **System** — weight 400 · size 12px

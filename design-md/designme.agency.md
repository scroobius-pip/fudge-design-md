# How designme.agency is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/designme.agency-design)

Last updated: 2026-08-03

## Captured pages

[![Full-stack product partner for funded startups](https://pin.fontofweb.com/6409?format=jpg)](https://design.withfudge.com/share/pin-6409)

[Full-stack product partner for funded startups](https://design.withfudge.com/share/pin-6409)

[![Full-stack product partner for funded startups](https://pin.fontofweb.com/6408?format=jpg)](https://design.withfudge.com/share/pin-6408)

[Full-stack product partner for funded startups](https://design.withfudge.com/share/pin-6408)

[![DesignMe - Your design partner for when average isn’t enough.](https://pin.fontofweb.com/4899?format=jpg)](https://design.withfudge.com/share/pin-4899)

[DesignMe - Your design partner for when average isn’t enough.](https://design.withfudge.com/share/pin-4899)

## Overview

designme.agency presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#000000`, `#ffffff`, and `#080b14`, with typography led by **System**, **Inter**, and **Jet Brains Mono**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#000000` | text on page content |
| color.text | `#ffffff` | text on page content |
| color.surface | `#080b14` | surface on page content |
| color.surface | `#fafafa` | surface on page content in the main |
| color.text | `#d8e0e8` | text on page content |
| color.text | `#708499` | text on page content |
| color.text | `#141414` | text on page content in the nav |
| color.text | `#171e29` | text on page content in the nav |
| color.text | `#0000ee` | text on page content |
| color.surface | `#121212` | surface on page content |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.utility-12px | **System** | 12px | 400 | normal | normal | <div>, <a>, <div> in the nav, <a> in the nav, and <div> in the main |
| type.body-14px | **Inter** | 14px | 400 | 20px | normal | <p> and <a> |
| type.display-40px | **Inter** | 40px | 600 | 46px | -0.4px | <h1> in the nav |
| type.utility-13px | **Inter** | 13px | 400 | 19.5px | -0.1px | <h2> in the nav |
| type.body-15px | **Inter** | 15px | 400 | 22.5px | normal | <p> in the nav |
| type.utility-12px | **Jet Brains Mono** | 12px | 400 | 12px | normal | <p> |
| type.utility-13px | **Inter** | 13px | 400 | 19.5px | normal | <p> in the nav |
| type.body-14px | **Inter** | 14px | 500 | 20px | 0.14px | <p> in the nav |
| type.utility-13px | **Inter** | 13px | 700 | 19.5px | -0.1px | <strong> in the nav |
| type.body-14px | **Inter** | 14px | 500 | 16.8px | normal | <p> |
| type.utility-13px | **Inter** | 13px | 500 | 15px | normal | <p> |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `40px 20px 4px` | padding | page content |
| `12px 0px 0px` | padding | page content |
| `40px 0px 0px` | padding | page content |
| `0px 0px 26px` | padding | page content |
| `12px 20px 12px 18px` | padding | page content |
| `8px 12px 8px 10px` | padding | page content |
| `0px 16px 0px 0px` | padding | page content |

### Shape and depth

The captured pages use `0px none 12px`, `0px none 500px`, `0px none 20px`, and `0px none 8px` border treatments. Recorded shadows include `rgba(0, 0, 0, 0.18) 0px 0.48175px 0.48175px -1.25px, rgba(0, 0, 0, 0.16) 0px 1.83083px 1.83083px -2.5px, rgba(0, 0, 0, 0.06) 0px 8px 8px -3.75px`.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#080b14`, `#fafafa`, and `#121212`. Text colors include `#000000`, `#ffffff`, and `#d8e0e8`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **System**, **Inter**, and **Jet Brains Mono**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `40px 20px 4px`, `12px 0px 0px`, `40px 0px 0px`, `0px 0px 26px`, and `12px 20px 12px 18px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#080b14`, `#fafafa`, and `#121212`. Depth is supported by the returned shadows.

## Components and states

The captured pages include repeated styling on <div>, <p>, <a>, <h1>, <h2>, and <strong> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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
- `#ffffff`
- `#080b14`
- `#fafafa`
- `#d8e0e8`
- `#708499`
- `#141414`
- `#171e29`
- `#0000ee`
- `#121212`

## Typography captured from designme.agency

- **System** — weight 400 · size 12px
- **Inter** — weight 400 · size 14px
- **Jet Brains Mono** — weight 400 · size 12px

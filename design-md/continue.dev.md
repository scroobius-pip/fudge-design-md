# How continue.dev is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/continue.dev-design)

Last updated: 2026-08-03

## Captured pages

[![Continue • Quality control for your software factory. | Continue](https://pin.fontofweb.com/8680?format=jpg)](https://design.withfudge.com/share/pin-8680)

[Continue • Quality control for your software factory. | Continue](https://design.withfudge.com/share/pin-8680)

[![Continue • Quality control for your software factory. | Continue](https://pin.fontofweb.com/8679?format=jpg)](https://design.withfudge.com/share/pin-8679)

[Continue • Quality control for your software factory. | Continue](https://design.withfudge.com/share/pin-8679)

[![Continue • Quality control for your software factory. | Continue](https://pin.fontofweb.com/8678?format=jpg)](https://design.withfudge.com/share/pin-8678)

[Continue • Quality control for your software factory. | Continue](https://design.withfudge.com/share/pin-8678)

[![Continue • About Us](https://pin.fontofweb.com/6709?format=jpg)](https://design.withfudge.com/share/pin-6709)

[Continue • About Us](https://design.withfudge.com/share/pin-6709)

[![Continue • About Us](https://pin.fontofweb.com/6708?format=jpg)](https://design.withfudge.com/share/pin-6708)

[Continue • About Us](https://design.withfudge.com/share/pin-6708)

[![Continue • Ship as fast as you code](https://pin.fontofweb.com/6707?format=jpg)](https://design.withfudge.com/share/pin-6707)

[Continue • Ship as fast as you code](https://design.withfudge.com/share/pin-6707)

## Overview

continue.dev presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#000000`, `#020817`, and `#fafafa`, with typography led by **Ibm Plex Sans**, **Manrope**, **System**, **Ibm Plex Mono**, and **Monaco**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#000000` | text on page content in the main |
| color.text | `#020817` | text on page content in the main |
| color.text | `#fafafa` | text on page content in the main |
| color.surface | `#ffffff` | surface on page content in the button |
| color.border | `#312e81` | border on page content in the footer |
| color.surface | `#f9f3f4` | surface on page content in the main |
| color.text | `#05bd48` | text on page content in the main |
| color.border | `#efe4e7` | border on page content in the main |
| color.text | `#0f172a` | text on page content in the button |
| color.surface | `#ef4444` | surface on page content in the button |
| color.surface | `#00a72e` | surface on page content in the button |
| color.surface | `#161434` | surface on page content in the main |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **Ibm Plex Sans** | 16px | 400 | 24px | normal | <div> in the main, <div> in the footer, and <div> in the nav |
| type.body-16px | **Manrope** | 16px | 400 | 24px | normal | <a> in the main, <div> in the main, <div> in the footer, and <div> in the nav |
| type.display-56px | **Ibm Plex Sans** | 56px | 300 | 58.8px | -1.4px | <h2> in the main and <span> in the main |
| type.body-15px | **Ibm Plex Sans** | 15px | 400 | 24.375px | normal | <p> in the main |
| type.display-64px | **Ibm Plex Sans** | 64px | 300 | 70.4px | -1.6px | <h1> in the main |
| type.utility-12px | **System** | 12px | 400 | 16px | 2.4px | <p> in the main |
| type.utility-12px | **System** | 12px | 400 | 16px | 1.8px | <p> in the main |
| type.display-64px | **Ibm Plex Sans** | 64px | 300 | 67.2px | -1.6px | <h1> in the main |
| type.body-14px | **Ibm Plex Sans** | 14px | 400 | 20px | normal | <p> in the main, <span> in the button, <span> in the main, and <div> in the button |
| type.display-64px | **Manrope** | 64px | 300 | 67.2px | -1.6px | <h1> in the main |
| type.body-18px | **Ibm Plex Sans** | 18px | 400 | 29.25px | normal | <p> in the main |
| type.body-16px | **Ibm Plex Sans** | 16px | 500 | 24px | normal | <h3> in the main |
| type.utility-12px | **Monaco** | 12px | 400 | 18px | normal | <div> in the main |
| type.body-15px | **Manrope** | 15px | 500 | 22.5px | normal | <h3> in the main |
| type.utility-11px | **Ibm Plex Mono** | 11px | 400 | 16.5px | 0.275px | <span> in the footer and <a> in the footer |
| type.body-15px | **Manrope** | 15px | 400 | 24.375px | normal | <p> in the main |
| type.body-14px | **Ibm Plex Mono** | 14px | 400 | 20px | 0.35px | <a> in the main |
| type.body-15px | **Manrope** | 15px | 400 | 22.5px | normal | <p> in the main |
| type.body-18px | **Manrope** | 18px | 400 | 29.25px | normal | <p> in the main |
| type.utility-13px | **Ibm Plex Sans** | 13px | 500 | 19.5px | normal | <button> in the button |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `0px 0px 24px` | margin | page content |
| `8px 24px 56px` | padding | page content |
| `20px` | padding | page content |
| `0px 24px` | padding | page content |
| `0px 0px 40px` | margin | page content |
| `24px 0px 0px` | padding | page content |
| `24px 0px 0px` | margin | page content |
| `0px 0px 4px` | margin | page content |

### Shape and depth

The captured pages use `1px solid 0px`, `1px 0px 0px solid 0px`, `1px 0px 0px solid 0px`, `1px solid 9999px`, `0px none 6px`, `1px solid 9999px`, `0px none 9999px`, and `1px solid 9999px` border treatments. Recorded shadows include `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px` and `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px`.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#ffffff`, `#f9f3f4`, and `#ef4444`. Text colors include `#000000`, `#020817`, and `#fafafa`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Ibm Plex Sans**, **Manrope**, **System**, **Monaco**, and **Ibm Plex Mono**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `0px 0px 24px`, `8px 24px 56px`, `20px`, `0px 24px`, and `0px 0px 40px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#ffffff`, `#f9f3f4`, `#ef4444`, and `#00a72e`. Depth is supported by the returned shadows.

## Components and states

The captured pages include repeated styling on <h2>, <div>, <p>, <span>, <a>, <button>, <h1>, and <h3> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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
- `#020817`
- `#fafafa`
- `#ffffff`
- `#312e81`
- `#f9f3f4`
- `#05bd48`
- `#efe4e7`
- `#0f172a`
- `#ef4444`
- `#00a72e`
- `#161434`
- `#1a1a1a`
- `#f87171`

## Typography captured from continue.dev

- **Ibm Plex Sans** — weight 300 · size 56px
- **Manrope** — weight 400 · size 16px
- **System** — weight 400 · size 12px
- **Ibm Plex Mono** — weight 400 · size 11px
- **Monaco** — weight 400 · size 12px

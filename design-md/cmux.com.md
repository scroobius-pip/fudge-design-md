# How cmux.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/cmux.com-design)

Last updated: 2026-08-03

## Captured pages

[![cmux — The terminal built for multitasking](https://pin.fontofweb.com/9450?format=jpg)](https://design.withfudge.com/share/pin-9450)

[cmux — The terminal built for multitasking](https://design.withfudge.com/share/pin-9450)

[![cmux — The terminal built for multitasking](https://pin.fontofweb.com/9449?format=jpg)](https://design.withfudge.com/share/pin-9449)

[cmux — The terminal built for multitasking](https://design.withfudge.com/share/pin-9449)

[![cmux — The terminal built for multitasking](https://pin.fontofweb.com/9448?format=jpg)](https://design.withfudge.com/share/pin-9448)

[cmux — The terminal built for multitasking](https://design.withfudge.com/share/pin-9448)

[![cmux — The terminal built for multitasking](https://pin.fontofweb.com/9447?format=jpg)](https://design.withfudge.com/share/pin-9447)

[cmux — The terminal built for multitasking](https://design.withfudge.com/share/pin-9447)

## Overview

cmux.com presents a mixed light and dark surface treatment in the captured pages. The system is anchored by `#ededed`, `#171717`, and `#0a0a0a`, with typography led by **Geist**, **System**, and **Applesystem**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#ededed` | text on page content |
| color.text | `#171717` | text on page content |
| color.surface | `#0a0a0a` | surface on page content |
| color.surface | `#fafafa` | surface on page content |
| color.text | `#000000` | text on page content |
| color.text | `#ffffff` | text on page content |
| color.text | `#737373` | text on page content in the main |
| color.text | `#a3a3a3` | text on page content in the main |
| color.border | `#262626` | border on page content in the main |
| color.border | `#e5e5e5` | border on page content in the main |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **Geist** | 16px | 400 | 24px | normal | <body>, <header> in the header, <div>, <div> in the header, <main> in the main, <section> in the main, <div> in the main, <img> in the main, <span> in the main, and <p> in the main |
| type.body-15px | **Geist** | 15px | 400 | 22.5px | normal | <img> in the main, <a> in the main, <span> in the main, <li> in the main, and <ul> in the main |
| type.body-16px | **System** | 16px | 400 | 24px | normal | <html> |
| type.body-15px | **Geist** | 15px | 400 | 19.125px | normal | <span> in the main, <li> in the main, and <ul> in the main |
| type.body-14px | **Applesystem** | 14px | 400 | normal | normal | <div> |
| type.body-18px | **Geist** | 18px | 400 | 29.25px | normal | <span> in the main and <p> in the main |
| type.utility-12px | **Geist** | 12px | 400 | 16px | normal | <span> in the main |
| type.body-15px | **Geist** | 15px | 500 | 22.5px | normal | <a> in the main and <svg> in the main |
| type.body-15px | **Geist** | 15px | 500 | 19.125px | normal | <strong> in the main |
| type.body-14px | **Geist** | 14px | 400 | 20px | normal | <a> in the main |
| type.heading-24px | **Geist** | 24px | 600 | 32px | -0.6px | <h1> in the main |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `24px` | padding-right | page content |
| `24px` | padding-left | page content |
| `96px 24px` | padding | page content |
| `96px` | padding-top | page content |
| `96px` | padding-bottom | page content |
| `0px 516.5px` | margin | page content |
| `516.5px` | margin-right | page content |
| `516.5px` | margin-left | page content |

### Shape and depth

The captured pages use `0px none 12px`, `0px none 3.35544e+07px`, `1px solid 3.35544e+07px`, and `1px solid 3.35544e+07px` border treatments.

## Colors

The visual system is mixed light and dark surface treatment. Surface colors include `#0a0a0a` and `#fafafa`. Text colors include `#ededed`, `#171717`, and `#000000`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Geist**, **System**, and **Applesystem**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `24px`, `24px`, `96px 24px`, `96px`, and `96px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is mixed light and dark surface treatment. Surface treatment centers on `#0a0a0a` and `#fafafa`. No structured gradient or shadow treatment is established.

## Components and states

The captured pages include repeated styling on <div>, <body>, <header>, <html>, <main>, <img>, <a>, and <span> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

## Responsive behavior

The captured token set does not establish breakpoint values or mobile behavior. Validate stacking, navigation changes, image treatment, and type scaling against the representative captures before implementing a responsive adaptation.

## Practical implementation guidance

- Preserve the mixed light/dark surface relationship and the measured type hierarchy before adding decorative treatment.
- Start from the returned typography, spacing, color, and border values; name any new scale or semantic role as an adaptation rather than as a source fact.
- Keep the captured font families separate from licensing decisions.
- Use screenshots to validate component anatomy, responsive behavior, focus treatment, and motion before shipping.
- Avoid introducing gradients or shadows beyond the captured treatment; none are established.

## Scope note

The guide uses representative captured pages. The evidence supports the values and observations above; it does not establish component semantics, interaction states, motion timing, breakpoint rules, font licensing, or a complete source stylesheet.

## Colors

- `#ededed`
- `#171717`
- `#0a0a0a`
- `#fafafa`
- `#000000`
- `#ffffff`
- `#737373`
- `#a3a3a3`
- `#262626`
- `#e5e5e5`

## Typography captured from cmux.com

- **Geist** — weight 400 · size 16px
- **System** — weight 400 · size 16px
- **Applesystem** — weight 400 · size 14px

# How brave.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/brave.com-design)

Last updated: 2026-08-03

## Captured pages

[![The browser that puts you first | Brave](https://pin.fontofweb.com/9441?format=jpg)](https://design.withfudge.com/share/pin-9441)

[The browser that puts you first | Brave](https://design.withfudge.com/share/pin-9441)

[![The browser that puts you first | Brave](https://pin.fontofweb.com/9440?format=jpg)](https://design.withfudge.com/share/pin-9440)

[The browser that puts you first | Brave](https://design.withfudge.com/share/pin-9440)

[![The browser that puts you first | Brave](https://pin.fontofweb.com/9439?format=jpg)](https://design.withfudge.com/share/pin-9439)

[The browser that puts you first | Brave](https://design.withfudge.com/share/pin-9439)

[![Brave Search API | Brave](https://pin.fontofweb.com/9438?format=jpg)](https://design.withfudge.com/share/pin-9438)

[Brave Search API | Brave](https://design.withfudge.com/share/pin-9438)

[![Brave Search API | Brave](https://pin.fontofweb.com/9437?format=jpg)](https://design.withfudge.com/share/pin-9437)

[Brave Search API | Brave](https://design.withfudge.com/share/pin-9437)

[![Brave Search API | Brave](https://pin.fontofweb.com/9436?format=jpg)](https://design.withfudge.com/share/pin-9436)

[Brave Search API | Brave](https://design.withfudge.com/share/pin-9436)

## Overview

brave.com presents a predominantly light surface treatment in the captured pages. The system is anchored by `#1c1c1d`, `#fafafb`, and `#ffffff`, with typography led by **Poppins**, **Inter**, **Flecha M**, **Applesystem**, and **System**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#1c1c1d` | text on page content |
| color.surface | `#fafafb` | surface on page content |
| color.text | `#ffffff` | text on page content in the header |
| color.surface | `#ffe1d4` | surface on page content in the main |
| color.surface | `#e9f3ff` | surface on page content in the main |
| color.surface | `#eeeef1` | surface on page content in the main |
| color.text | `#e4e4e5` | text on page content in the main |
| color.text | `#000000` | text on page content |
| color.text | `#434fcf` | text on page content in the header |
| color.border | `#c9c9ca` | border on page content in the nav |
| color.surface | `#dfe4f6` | surface on page content in the main |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **Poppins** | 16px | 400 | 24px | normal | <body>, <div>, <div> in the main, <main> in the main, <img> in the main, <header> in the header, <section> in the main, <a> in the main, <picture> in the main, <span> in the main, <ul> in the main, and <div> in the header |
| type.body-16px | **Poppins** | 16px | 500 | 24px | normal | <header> in the header, <div> in the header, <img> in the header, <a> in the header, <ul> in the nav, and <div> in the nav |
| type.body-20px | **Inter** | 20px | 400 | 30px | normal | <p> in the main, <a> in the main, and <p> in the header |
| type.heading-30px | **Poppins** | 30px | 600 | 40px | -1.2px | <p> in the header, <h4> in the main, and <p> in the main |
| type.display-70px | **Flecha M** | 70px | 500 | 70px | -1.4px | <h2> in the main |
| type.display-120px | **Flecha M** | 120px | 500 | 103px | -2.4px | <h1> in the header |
| type.body-18px | **Inter** | 18px | 400 | 28px | normal | <li> in the main |
| type.heading-30px | **Poppins** | 30px | 600 | 40px | -0.4px | <span> in the main |
| type.heading-20px | **Poppins** | 20px | 600 | 30px | -0.4px | <span> in the main and <h4> in the main |
| type.body-14px | **Applesystem** | 14px | 400 | normal | normal | <div> |
| type.heading-18px | **Poppins** | 18px | 600 | 20px | -0.72px | <h4> in the main |
| type.display-40px | **Poppins** | 40px | 600 | 44px | -1.6px | <h3> in the main and <span> in the main |
| type.heading-18px | **System** | 18px | 600 | 24px | normal | <span> in the header, <a> in the header, and <a> in the main |
| type.utility-12px | **System** | 12px | 600 | 18px | normal | <a> in the nav |
| type.heading-14px | **System** | 14px | 600 | 20px | normal | <div> in the main |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `normal 32px` | gap | page content |
| `32px` | column-gap | page content |
| `80px 0px 0px` | margin | page content |
| `80px` | margin-top | page content |
| `24px` | column-gap | page content |
| `24px` | gap | page content |
| `24px` | row-gap | page content |
| `42px` | gap | page content |

### Shape and depth

The captured pages use `2px solid 16px`, `0px none 16px`, `1px solid 0px`, `0px none 1000px`, `1px solid 1000px`, and `0px none 9999px` border treatments. Recorded shadows include `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.35) 0px 8px 40px 0px`.

## Colors

The visual system is predominantly light surface treatment. Surface colors include `#fafafb`, `#ffe1d4`, and `#e9f3ff`. Text colors include `#1c1c1d`, `#ffffff`, and `#e4e4e5`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Poppins**, **Inter**, **Flecha M**, **Applesystem**, and **System**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `normal 32px`, `32px`, `80px 0px 0px`, `80px`, and `24px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly light surface treatment. Surface treatment centers on `#fafafb`, `#ffe1d4`, `#e9f3ff`, and `#eeeef1`. Depth is supported by the returned shadows.

## Components and states

The captured pages include repeated styling on <div>, <body>, <header>, <main>, <img>, <a>, <h1>, and <section> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

## Responsive behavior

The captured token set does not establish breakpoint values or mobile behavior. Validate stacking, navigation changes, image treatment, and type scaling against the representative captures before implementing a responsive adaptation.

## Practical implementation guidance

- Preserve the light surface relationship and the measured type hierarchy before adding decorative treatment.
- Start from the returned typography, spacing, color, and border values; name any new scale or semantic role as an adaptation rather than as a source fact.
- Keep the captured font families separate from licensing decisions.
- Use screenshots to validate component anatomy, responsive behavior, focus treatment, and motion before shipping.
- Avoid introducing gradients or shadows beyond the captured treatment; the returned evidence includes those treatments.

## Scope note

The guide uses representative captured pages. The evidence supports the values and observations above; it does not establish component semantics, interaction states, motion timing, breakpoint rules, font licensing, or a complete source stylesheet.

## Colors

- `#1c1c1d`
- `#fafafb`
- `#ffffff`
- `#ffe1d4`
- `#e9f3ff`
- `#eeeef1`
- `#e4e4e5`
- `#000000`
- `#434fcf`
- `#c9c9ca`
- `#dfe4f6`

## Typography captured from brave.com

- **Poppins** — weight 400 · size 16px
- **Inter** — weight 400 · size 20px
- **Flecha M** — weight 500 · size 120px
- **Applesystem** — weight 400 · size 14px
- **System** — weight 600 · size 18px

# How craftwork.design is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/craftwork.design-design)

Last updated: 2026-08-03

## Captured pages

[![Curated Inspiration](https://pin.fontofweb.com/7386?format=jpg)](https://design.withfudge.com/share/pin-7386)

[Curated Inspiration](https://design.withfudge.com/share/pin-7386)

[![Curated Inspiration](https://pin.fontofweb.com/3960?format=jpg)](https://design.withfudge.com/share/pin-3960)

[Curated Inspiration](https://design.withfudge.com/share/pin-3960)

[![Craftwork: UX/UI kits, illustrations, mockups, fonts and more](https://pin.fontofweb.com/2927?format=jpg)](https://design.withfudge.com/share/pin-2927)

[Craftwork: UX/UI kits, illustrations, mockups, fonts and more](https://design.withfudge.com/share/pin-2927)

[![Craftwork: UX/UI kits, illustrations, mockups, fonts and more](https://pin.fontofweb.com/2926?format=jpg)](https://design.withfudge.com/share/pin-2926)

[Craftwork: UX/UI kits, illustrations, mockups, fonts and more](https://design.withfudge.com/share/pin-2926)

[![Craftwork: UX/UI kits, illustrations, mockups, fonts and more](https://pin.fontofweb.com/2925?format=jpg)](https://design.withfudge.com/share/pin-2925)

[Craftwork: UX/UI kits, illustrations, mockups, fonts and more](https://design.withfudge.com/share/pin-2925)

[![Craftwork: UX/UI kits, illustrations, mockups, fonts and more](https://pin.fontofweb.com/1875?format=jpg)](https://design.withfudge.com/share/pin-1875)

[Craftwork: UX/UI kits, illustrations, mockups, fonts and more](https://design.withfudge.com/share/pin-1875)

[![Craftwork: UX/UI kits, illustrations, mockups, fonts and more](https://pin.fontofweb.com/1874?format=jpg)](https://design.withfudge.com/share/pin-1874)

[Craftwork: UX/UI kits, illustrations, mockups, fonts and more](https://design.withfudge.com/share/pin-1874)

[![Craftwork: UX/UI kits, illustrations, mockups, fonts and more](https://pin.fontofweb.com/1873?format=jpg)](https://design.withfudge.com/share/pin-1873)

[Craftwork: UX/UI kits, illustrations, mockups, fonts and more](https://design.withfudge.com/share/pin-1873)

## Overview

craftwork.design presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#000000`, `#ffffff`, and `#a0a0a0`, with typography led by **Font** and **Noto Sans**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.surface | `#000000` | surface on page content in the main |
| color.text | `#ffffff` | text on page content in the main |
| color.text | `#a0a0a0` | text on page content in the main |
| color.surface | `#1e1e1e` | surface on page content in the main |
| color.shadow | `#2f2b43` | shadow on page content in the main |
| color.surface | `#cafc00` | surface on page content in the button |
| color.text | `#b1b1b1` | text on page content in the main |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **Font** | 16px | 400 | 24px | normal | <div> in the main |
| type.body-14px | **Font** | 14px | 400 | 20px | -0.1px | <button> in the button, <a> in the main, <div> in the main, and <p> in the main |
| type.body-16px | **Font** | 16px | 400 | 22px | -0.32px | <p> in the main, <span> in the main, <button> in the button, and <div> in the button |
| type.body-18px | **Font** | 18px | 400 | 26px | -0.36px | <p> in the main |
| type.body-18px | **Font** | 18px | 500 | 22px | -0.32px | <a> in the main |
| type.heading-22px | **Font** | 22px | 600 | 28px | -0.66px | <p> in the main |
| type.display-42px | **Font** | 42px | 600 | 48px | -2.1px | <p> in the main |
| type.body-16px | **Font** | 16px | 500 | 22px | -0.32px | <p> in the main |
| type.utility-11px | **Noto Sans** | 11px | 400 | 11px | normal | <span> in the button |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `15px 15px 25px` | padding | page content |
| `0px 45px` | padding | page content |
| `0px 0px 20px` | padding | page content |
| `1355px 0px 0px` | margin | page content |
| `0px 16px` | padding | page content |
| `20px 0px 0px` | margin | page content |
| `6px 0px 0px` | margin | page content |
| `12px 0px 0px` | margin | page content |

### Shape and depth

The captured pages use `1px solid 10px`, `1px solid 16px`, `1px solid 15px`, `1px solid 33px`, and `0px none 54px` border treatments. Recorded gradients include `linear-gradient(rgba(30, 30, 30, 0) 0%, rgb(30, 30, 30) 78.65%)` and `linear-gradient(rgb(45, 45, 45) 0%, rgb(34, 34, 34) 100%)`. Recorded shadows include `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(47, 43, 67, 0.1) 0px -1px 0px 0px inset, rgba(47, 43, 67, 0.1) 0px 1px 3px 0px` and `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 2px 2px 0px`.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#000000`, `#1e1e1e`, and `#cafc00`. Text colors include `#ffffff`, `#a0a0a0`, and `#b1b1b1`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Font** and **Noto Sans**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `15px 15px 25px`, `0px 45px`, `0px 0px 20px`, `1355px 0px 0px`, and `0px 16px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#000000`, `#1e1e1e`, and `#cafc00`. Depth is supported by the returned gradients and shadows.

## Components and states

The captured pages include repeated styling on <div>, <p>, <span>, <button>, and <a> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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
- `#a0a0a0`
- `#1e1e1e`
- `#2f2b43`
- `#cafc00`
- `#b1b1b1`

## Typography captured from craftwork.design

- **Font** — weight 400 · size 16px
- **Noto Sans** — weight 400 · size 11px

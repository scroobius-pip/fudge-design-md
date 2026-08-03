# How cora.computer is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/cora.computer-design)

Last updated: 2026-08-03

## Captured pages

[![Cora](https://pin.fontofweb.com/8459?format=jpg)](https://design.withfudge.com/share/pin-8459)

[Cora](https://design.withfudge.com/share/pin-8459)

[![Cora](https://pin.fontofweb.com/8457?format=jpg)](https://design.withfudge.com/share/pin-8457)

[Cora](https://design.withfudge.com/share/pin-8457)

[![Give Cora your inbox. Take back your life.](https://pin.fontofweb.com/8456?format=jpg)](https://design.withfudge.com/share/pin-8456)

[Give Cora your inbox. Take back your life.](https://design.withfudge.com/share/pin-8456)

[![Give Cora your inbox. Take back your life.](https://pin.fontofweb.com/8455?format=jpg)](https://design.withfudge.com/share/pin-8455)

[Give Cora your inbox. Take back your life.](https://design.withfudge.com/share/pin-8455)

[![Give Cora your inbox. Take back your life.](https://pin.fontofweb.com/8454?format=jpg)](https://design.withfudge.com/share/pin-8454)

[Give Cora your inbox. Take back your life.](https://design.withfudge.com/share/pin-8454)

[![Give Cora your inbox. Take back your life.](https://pin.fontofweb.com/8453?format=jpg)](https://design.withfudge.com/share/pin-8453)

[Give Cora your inbox. Take back your life.](https://design.withfudge.com/share/pin-8453)

## Overview

cora.computer presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#000000`, `#ffffff`, and `#117bc8`, with typography led by **Switzer**, **Times**, and **Signifier**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#000000` | text on page content |
| color.text | `#ffffff` | text on page content |
| color.surface | `#117bc8` | surface on page content |
| color.surface | `#38bdf8` | surface on page content |
| color.surface | `#0ea5e9` | surface on page content |
| color.border | `#7dd3fc` | border on page content |
| color.text | `#7d7d7d` | text on page content in the main |
| color.border | `#dadada` | border on page content in the main |
| color.surface | `#ebebeb` | surface on page content in the main |
| color.text | `#1d1b20` | text on page content in the main |
| color.text | `#a1a1a1` | text on page content in the main |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **Switzer** | 16px | 400 | 24px | normal | <div>, <button> in the button, and <a> |
| type.body-16px | **Times** | 16px | 400 | normal | normal | <div> in the main, <a> in the main, <li> in the main, <ul> in the main, <div>, <div> in the footer, <a> in the footer, and <button> in the button |
| type.heading-14px | **Switzer** | 14px | 600 | 17.36px | normal | <button> in the button and <h4> in the button |
| type.display-55px | **Signifier** | 55px | 300 | 64.9px | normal | <h1> in the main |
| type.utility-12px | **Switzer** | 12px | 500 | 14.88px | normal | <p> in the main, <span> in the main, and <div> in the main |
| type.body-14px | **Switzer** | 14px | 400 | 20px | normal | <p> |
| type.body-18px | **Switzer** | 18px | 400 | 22.32px | normal | <p> in the main |
| type.body-14px | **Switzer** | 14px | 500 | 17.36px | normal | <p> in the main |
| type.display-36px | **Signifier** | 36px | 400 | 43.2px | normal | <p> in the main, <h2> in the main, and <h3> in the footer |
| type.body-14px | **Switzer** | 14px | 400 | 22.75px | normal | <p> |
| type.body-22px | **Switzer** | 22px | 400 | 27.28px | normal | <p> in the main |
| type.body-14px | **Switzer** | 14px | 400 | 17.36px | normal | <span> in the main |
| type.heading-20px | **Switzer** | 20px | 600 | 20.4px | normal | <h3> in the main |
| type.body-16px | **Switzer** | 16px | 400 | normal | normal | <div> in the main |
| type.heading-22px | **Switzer** | 22px | 600 | 27.28px | normal | <span> in the main |
| type.display-45px | **Signifier** | 45px | 400 | 45.9px | normal | <h2> in the main |
| type.utility-12px | **Switzer** | 12px | 400 | 16px | normal | <span> |
| type.body-15px | **Switzer** | 15px | 400 | 18.6px | normal | <p> in the footer |
| type.body-20px | **Switzer** | 20px | 400 | 20px | normal | <a> in the nav |
| type.heading-18px | **Switzer** | 18px | 600 | 28px | -0.45px | <span> in the button |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `0px 16px` | padding | page content |
| `64px 16px` | padding | page content |
| `75px 98px` | padding | page content |
| `14px 16px` | padding | page content |
| `100px 0px` | padding | page content |
| `48px` | padding | page content |
| `0px 0px 32px` | margin | page content |
| `16px 0px 0px` | margin | page content |

### Shape and depth

The captured pages use `0px none 35px`, `1px solid 16px`, `0px none 10px`, `1px solid 8px`, `1px solid 8px`, `0px none 24px`, `0px none 9999px`, and `5px solid 25px` border treatments. Recorded gradients include `linear-gradient(rgba(245, 248, 254, 0) 0%, rgb(245, 248, 254) 12%, rgb(245, 248, 254) 88%, rgba(245, 248, 254, 0) 100%)`. Recorded shadows include `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.1) 0px 8px 10px -6px`, `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.2) 0px -2px 4px 0px inset`, `rgba(0, 0, 0, 0.14) 0.48px 0.48px 0.48px 0px, rgba(0, 0, 0, 0.145) 3.86px 5.78px 7.71px 0px, rgba(0, 0, 0, 0.125) -3.86px -0.64px 7.71px 0px`, `rgba(0, 0, 0, 0.07) 0px 4px 10px 0px`, and `rgba(0, 0, 0, 0.25) 4.77778px 7.16667px 8px 0px, rgba(0, 0, 0, 0.25) -4px -6px 8px 0px`.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#117bc8`, `#38bdf8`, and `#0ea5e9`. Text colors include `#000000`, `#ffffff`, and `#7d7d7d`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Switzer**, **Times**, and **Signifier**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `0px 16px`, `64px 16px`, `75px 98px`, `14px 16px`, and `100px 0px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#117bc8`, `#38bdf8`, `#0ea5e9`, and `#ebebeb`. Depth is supported by the returned gradients and shadows.

## Components and states

The captured pages include repeated styling on <div>, <p>, <button>, <a>, <span>, <h1>, <h3>, and <li> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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
- `#117bc8`
- `#38bdf8`
- `#0ea5e9`
- `#7dd3fc`
- `#7d7d7d`
- `#dadada`
- `#ebebeb`
- `#1d1b20`
- `#a1a1a1`

## Typography captured from cora.computer

- **Switzer** — weight 400 · size 16px
- **Times** — weight 400 · size 16px
- **Signifier** — weight 600 · size 24px

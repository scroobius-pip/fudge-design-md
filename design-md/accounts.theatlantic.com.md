# How accounts.theatlantic.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/accounts.theatlantic.com-design)

Last updated: 2026-08-03

## Captured pages

[![The Atlantic Magazine & Digital Subscriptions - The Atlantic](https://pin.fontofweb.com/9224?format=jpg)](https://design.withfudge.com/share/pin-9224)

[The Atlantic Magazine & Digital Subscriptions - The Atlantic](https://design.withfudge.com/share/pin-9224)

[![The Atlantic](https://pin.fontofweb.com/9223?format=jpg)](https://design.withfudge.com/share/pin-9223)

[The Atlantic](https://design.withfudge.com/share/pin-9223)

## Overview

accounts.theatlantic.com presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#000000`, `#ffffff`, and `#f9fafc`, with typography led by **Graphik**, **Adobe Garamond Pro**, **Atlantic 190927**, and **Goldwyn Mono**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#000000` | text on page content in the header |
| color.text | `#ffffff` | text on page content in the header |
| color.surface | `#f9fafc` | surface on page content |
| color.border | `#e7e3db` | border on page content |
| color.surface | `#2c2825` | surface on page content in the header |
| color.text | `#6f6c69` | text on page content |
| color.surface | `#b1383c` | surface on page content in the header |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **Graphik** | 16px | 400 | 18.4px | normal | <div> in the header and <div> |
| type.display-45px | **Atlantic 190927** | 45px | 400 | 54px | 2px | <h1> in the header and <div> |
| type.display-36px | **Adobe Garamond Pro** | 36px | 400 | 44px | normal | <p> |
| type.body-16px | **Graphik** | 16px | 500 | 18.4px | normal | <h2> |
| type.body-24px | **Adobe Garamond Pro** | 24px | 400 | 36px | normal | <div> and <p> |
| type.body-16px | **Adobe Garamond Pro** | 16px | 400 | 18.4px | normal | <div> |
| type.body-16px | **Goldwyn Mono** | 16px | 300 | 16px | normal | <a> and <a> in the header |
| type.display-62px | **Adobe Garamond Pro** | 62px | 400 | 77.5px | normal | <p> |
| type.body-14px | **Graphik** | 14px | 400 | 18px | normal | <li> and <span> |
| type.body-20px | **Adobe Garamond Pro** | 20px | 400 | 28px | normal | <div> |
| type.utility-10px | **Graphik** | 10px | 400 | 12px | normal | <div> |
| type.body-14px | **Graphik** | 14px | 400 | 17.5px | normal | <p> |
| type.body-22px | **Adobe Garamond Pro** | 22px | 400 | 30px | normal | <h3> in the header |
| type.body-18px | **Graphik** | 18px | 500 | 20.7px | normal | <h3> |
| type.body-16px | **Goldwyn Mono** | 16px | 300 | 19px | normal | <a> |
| type.body-14px | **Graphik** | 14px | 400 | 15px | normal | <div> in the header |
| type.body-14px | **Graphik** | 14px | 500 | 16.1px | normal | <p> |
| type.display-32px | **Adobe Garamond Pro** | 32px | 400 | 38px | normal | <div> |
| type.body-24px | **Adobe Garamond Pro** | 24px | 400 | 28.8px | normal | <div> |
| type.heading-14px | **Graphik** | 14px | 700 | 16.1px | normal | <a> in the header and <button> in the button |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `100px 24px` | padding | page content |
| `32px 200px` | margin | page content |
| `-32px 0px 0px` | margin | page content |
| `40px 64px 64px` | padding | page content |
| `0px 0px 24px` | margin | page content |
| `52px 0px 0px` | padding | page content |
| `0px 309px 72px` | margin | page content |
| `0px 528px 24px` | margin | page content |

### Shape and depth

The captured pages use `1px solid 0px` and `0px none 4px` border treatments.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#f9fafc`, `#2c2825`, and `#b1383c`. Text colors include `#000000`, `#ffffff`, and `#6f6c69`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Graphik**, **Atlantic 190927**, **Adobe Garamond Pro**, and **Goldwyn Mono**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `100px 24px`, `32px 200px`, `-32px 0px 0px`, `40px 64px 64px`, and `0px 0px 24px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#f9fafc`, `#2c2825`, and `#b1383c`. No structured gradient or shadow treatment is established.

## Components and states

The captured pages include repeated styling on <div>, <h1>, <h3>, <a>, <h2>, <p>, <li>, and <span> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

## Responsive behavior

The captured token set does not establish breakpoint values or mobile behavior. Validate stacking, navigation changes, image treatment, and type scaling against the representative captures before implementing a responsive adaptation.

## Practical implementation guidance

- Preserve the dark surface relationship and the measured type hierarchy before adding decorative treatment.
- Start from the returned typography, spacing, color, and border values; name any new scale or semantic role as an adaptation rather than as a source fact.
- Keep the captured font families separate from licensing decisions.
- Use screenshots to validate component anatomy, responsive behavior, focus treatment, and motion before shipping.
- Avoid introducing gradients or shadows beyond the captured treatment; none are established.

## Scope note

The guide uses representative captured pages. The evidence supports the values and observations above; it does not establish component semantics, interaction states, motion timing, breakpoint rules, font licensing, or a complete source stylesheet.

## Colors

- `#000000`
- `#ffffff`
- `#f9fafc`
- `#e7e3db`
- `#2c2825`
- `#6f6c69`
- `#b1383c`

## Typography captured from accounts.theatlantic.com

- **Graphik** — weight 400 · size 16px
- **Adobe Garamond Pro** — weight 400 · size 22px
- **Atlantic 190927** — weight 400 · size 45px
- **Goldwyn Mono** — weight 300 · size 16px

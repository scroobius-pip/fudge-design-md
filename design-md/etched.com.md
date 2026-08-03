# How etched.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/etched.com-design)

Last updated: 2026-08-03

## Captured pages

[![Join Us | Etched](https://pin.fontofweb.com/9873?format=jpg)](https://design.withfudge.com/share/pin-9873)

[Join Us | Etched](https://design.withfudge.com/share/pin-9873)

[![Join Us | Etched](https://pin.fontofweb.com/9872?format=jpg)](https://design.withfudge.com/share/pin-9872)

[Join Us | Etched](https://design.withfudge.com/share/pin-9872)

[![Etched](https://pin.fontofweb.com/9871?format=jpg)](https://design.withfudge.com/share/pin-9871)

[Etched](https://design.withfudge.com/share/pin-9871)

[![Etched](https://pin.fontofweb.com/9870?format=jpg)](https://design.withfudge.com/share/pin-9870)

[Etched](https://design.withfudge.com/share/pin-9870)

[![Etched](https://pin.fontofweb.com/9869?format=jpg)](https://design.withfudge.com/share/pin-9869)

[Etched](https://design.withfudge.com/share/pin-9869)

[![Etched](https://pin.fontofweb.com/9868?format=jpg)](https://design.withfudge.com/share/pin-9868)

[Etched](https://design.withfudge.com/share/pin-9868)

[![Etched](https://pin.fontofweb.com/9867?format=jpg)](https://design.withfudge.com/share/pin-9867)

[Etched](https://design.withfudge.com/share/pin-9867)

[![Etched](https://pin.fontofweb.com/9866?format=jpg)](https://design.withfudge.com/share/pin-9866)

[Etched](https://design.withfudge.com/share/pin-9866)

## Overview

etched.com presents a predominantly light surface treatment in the captured pages. The system is anchored by `#000000`, `#ededed`, and `#ffffff`, with typography led by **Söhne**, **Söhne Mono**, and **Applesystem**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#000000` | text on page content |
| color.surface | `#ededed` | surface on page content |
| color.surface | `#ffffff` | surface on page content |
| color.surface | `#e5e5e5` | surface on page content in the main |
| color.text | `#979797` | text on page content in the main |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **Söhne** | 16px | 400 | 24px | normal | <html>, <div>, <body>, <section> in the main, <div> in the main, <main> in the main, <img> in the main, <img>, <form>, <svg> in the button, <button> in the button, <footer> in the footer, <div> in the footer, <img> in the footer, <a> in the main, and <article> in the main |
| type.body-22px | **Söhne** | 22px | 400 | 33px | normal | <div> in the main and <img> in the main |
| type.body-18px | **Söhne** | 18px | 400 | 28.8px | normal | <p> in the main |
| type.body-14px | **Söhne Mono** | 14px | 400 | 18.48px | -0.28px | <p> in the main and <div> in the main |
| type.display-96px | **Söhne** | 96px | 400 | 96px | normal | <h1> in the main and <span> in the main |
| type.display-48px | **Söhne** | 48px | 400 | 48px | -1.92px | <h1> in the main |
| type.body-14px | **Applesystem** | 14px | 400 | normal | normal | <div> |
| type.body-28px | **Söhne** | 28px | 400 | 28px | -1.12px | <h2> in the main and <span> in the main |
| type.display-68px | **Söhne** | 68px | 400 | 68px | -2.72px | <span> and <h2> |
| type.body-20px | **Söhne** | 20px | 400 | 24px | -0.4px | <p> in the main |
| type.body-14px | **Söhne** | 14px | 400 | 18.48px | normal | <p> in the main |
| type.utility-12px | **Söhne Mono** | 12px | 400 | 10.2px | 0.24px | <button> in the button and <span> in the button |
| type.display-72px | **Söhne** | 72px | 400 | 72px | -2.16px | <div> in the footer |
| type.body-28px | **Söhne** | 28px | 400 | 28px | -0.84px | <span> in the main |
| type.utility-12px | **Söhne Mono** | 12px | 400 | 16.8px | -0.24px | <p> and <div> in the footer |
| type.body-18px | **Söhne** | 18px | 400 | 23.76px | normal | <p> in the main |
| type.utility-12px | **Söhne** | 12px | 400 | 15.84px | -0.24px | <p> in the main |
| type.heading-18px | **Söhne** | 18px | 600 | 28.8px | normal | <strong> in the main |
| type.body-16px | **Söhne** | 16px | 400 | 19.2px | -0.32px | <input> |
| type.body-18px | **Söhne** | 18px | 400 | 25.2px | -0.36px | <p> |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `134.5px` | margin-right | page content |
| `134.5px` | margin-left | page content |
| `20px` | padding-left | page content |
| `20px` | padding-right | page content |
| `0px 134.5px` | margin | page content |
| `0px 20px` | padding | page content |
| `48px 0px 0px` | margin | page content |
| `48px` | margin-top | page content |

### Shape and depth

The captured pages use `1px 0px 0px solid 0px`, `1px solid 0px`, `0px 0px 1px solid 0px`, `0px 1px 0px 0px solid 0px`, `0px 1px solid 0px`, and `1px solid 0px` border treatments.

## Colors

The visual system is predominantly light surface treatment. Surface colors include `#ededed`, `#ffffff`, and `#e5e5e5`. Text colors include `#000000` and `#979797`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Söhne**, **Söhne Mono**, and **Applesystem**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `134.5px`, `134.5px`, `20px`, `20px`, and `0px 134.5px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly light surface treatment. Surface treatment centers on `#ededed`, `#ffffff`, and `#e5e5e5`. No structured gradient or shadow treatment is established.

## Components and states

The captured pages include repeated styling on <div>, <html>, <body>, <section>, <main>, <h1>, <p>, and <span> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

## Responsive behavior

The captured token set does not establish breakpoint values or mobile behavior. Validate stacking, navigation changes, image treatment, and type scaling against the representative captures before implementing a responsive adaptation.

## Practical implementation guidance

- Preserve the light surface relationship and the measured type hierarchy before adding decorative treatment.
- Start from the returned typography, spacing, color, and border values; name any new scale or semantic role as an adaptation rather than as a source fact.
- Keep the captured font families separate from licensing decisions.
- Use screenshots to validate component anatomy, responsive behavior, focus treatment, and motion before shipping.
- Avoid introducing gradients or shadows beyond the captured treatment; none are established.

## Scope note

The guide uses representative captured pages. The evidence supports the values and observations above; it does not establish component semantics, interaction states, motion timing, breakpoint rules, font licensing, or a complete source stylesheet.

## Colors

- `#000000`
- `#ededed`
- `#ffffff`
- `#e5e5e5`
- `#979797`

## Typography captured from etched.com

- **Söhne** — weight 400 · size 16px
- **Söhne Mono** — weight 400 · size 12px
- **Applesystem** — weight 400 · size 14px

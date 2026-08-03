# How app.standards.site is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/app.standards.site-design)

Last updated: 2026-08-03

## Captured pages

[![Standards - FontofWeb](https://pin.fontofweb.com/8524?format=jpg)](https://design.withfudge.com/share/pin-8524)

[Standards - FontofWeb](https://design.withfudge.com/share/pin-8524)

[![Standards - Project Setup](https://pin.fontofweb.com/8523?format=jpg)](https://design.withfudge.com/share/pin-8523)

[Standards - Project Setup](https://design.withfudge.com/share/pin-8523)

[![Standards - Project Setup](https://pin.fontofweb.com/8522?format=jpg)](https://design.withfudge.com/share/pin-8522)

[Standards - Project Setup](https://design.withfudge.com/share/pin-8522)

[![Standards - Project Setup](https://pin.fontofweb.com/8521?format=jpg)](https://design.withfudge.com/share/pin-8521)

[Standards - Project Setup](https://design.withfudge.com/share/pin-8521)

[![Standards - Project Setup](https://pin.fontofweb.com/8520?format=jpg)](https://design.withfudge.com/share/pin-8520)

[Standards - Project Setup](https://design.withfudge.com/share/pin-8520)

[![Standards - Project Setup](https://pin.fontofweb.com/8519?format=jpg)](https://design.withfudge.com/share/pin-8519)

[Standards - Project Setup](https://design.withfudge.com/share/pin-8519)

[![Standards - Project Setup](https://pin.fontofweb.com/8518?format=jpg)](https://design.withfudge.com/share/pin-8518)

[Standards - Project Setup](https://design.withfudge.com/share/pin-8518)

[![Standards - Project Setup](https://pin.fontofweb.com/8517?format=jpg)](https://design.withfudge.com/share/pin-8517)

[Standards - Project Setup](https://design.withfudge.com/share/pin-8517)

## Overview

app.standards.site presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#000000`, `#ffffff`, and `#898989`, with typography led by **Times**, **Klim Type Foundry**, **Söhne**, and **Fontsohnehalbfett**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.surface | `#000000` | surface on page content |
| color.text | `#ffffff` | text on page content |
| color.text | `#898989` | text on page content in the button |
| color.border | `#333333` | border on page content |
| color.surface | `#242424` | surface on page content in the button |
| color.surface | `#101010` | surface on page content |
| color.text | `#2395e7` | text on page content |
| color.surface | `#3a3a3a` | surface on page content in the button |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **Times** | 16px | 400 | 16px | normal | <div>, <button> in the button, <div> in the button, and <li> |
| type.utility-13px | **Klim Type Foundry** | 13px | 400 | 15.6px | normal | <button> in the button, <div>, <div> in the button, <h3>, <p>, and <a> |
| type.body-26px | **Klim Type Foundry** | 26px | 400 | 36px | normal | <h2> and <div> |
| type.utility-13px | **Söhne** | 13px | 600 | 15.6px | normal | <div> and <h3> |
| type.display-170px | **Fontsohnehalbfett** | 170px | 600 | 170px | normal | <span> |
| type.utility-13px | **Klim Type Foundry** | 13px | 400 | 25px | normal | <div> in the button |
| type.body-18px | **Klim Type Foundry** | 18px | 400 | 24.5px | normal | <div> |
| type.utility-13px | **Klim Type Foundry** | 13px | 700 | 15.6px | normal | <div> in the button |
| type.heading-18px | **Söhne** | 18px | 600 | 24.5px | normal | <div> |
| type.utility-11px | **Klim Type Foundry** | 11px | 400 | 13.2px | normal | <span> |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `0px 80px` | padding | page content |
| `120px 0px` | padding | page content |
| `90px 80px 0px` | padding | page content |
| `60px 0px` | padding | page content |
| `0px 20px` | padding | page content |
| `-3px 0px` | margin | page content |
| `30px 0px 0px` | padding | page content |
| `-9px 0px -8px` | margin | page content |

### Shape and depth

The captured pages use `1px solid 4px`, `0px none 4px`, `1px solid 4px`, `1px solid 50%`, and `1px solid 4px` border treatments. Recorded shadows include `rgba(0, 0, 0, 0.3) 0px 0px 20px 0px`.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#000000`, `#242424`, and `#101010`. Text colors include `#ffffff`, `#898989`, and `#2395e7`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Times**, **Klim Type Foundry**, **Söhne**, and **Fontsohnehalbfett**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `0px 80px`, `120px 0px`, `90px 80px 0px`, `60px 0px`, and `0px 20px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#000000`, `#242424`, `#101010`, and `#3a3a3a`. Depth is supported by the returned shadows.

## Components and states

The captured pages include repeated styling on <div>, <button>, <span>, <h2>, <h3>, <p>, <li>, and <a> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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
- `#898989`
- `#333333`
- `#242424`
- `#101010`
- `#2395e7`
- `#3a3a3a`

## Typography captured from app.standards.site

- **Times** — weight 400 · size 16px
- **Klim Type Foundry** — weight 400 · size 13px
- **Söhne** — weight 600 · size 18px
- **Fontsohnehalbfett** — weight 600 · size 170px

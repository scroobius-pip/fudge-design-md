# How every.to is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/every.to-design)

Last updated: 2026-08-03

## Captured pages

[![Every](https://pin.fontofweb.com/8446?format=jpg)](https://design.withfudge.com/share/pin-8446)

[Every](https://design.withfudge.com/share/pin-8446)

[![Every](https://pin.fontofweb.com/8445?format=jpg)](https://design.withfudge.com/share/pin-8445)

[Every](https://design.withfudge.com/share/pin-8445)

[![Every](https://pin.fontofweb.com/8444?format=jpg)](https://design.withfudge.com/share/pin-8444)

[Every](https://design.withfudge.com/share/pin-8444)

[![Every](https://pin.fontofweb.com/8443?format=jpg)](https://design.withfudge.com/share/pin-8443)

[Every](https://design.withfudge.com/share/pin-8443)

[![Every](https://pin.fontofweb.com/8442?format=jpg)](https://design.withfudge.com/share/pin-8442)

[Every](https://design.withfudge.com/share/pin-8442)

## Overview

every.to presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#000000`, `#ffffff`, and `#fafaf7`, with typography led by **Switzer**, **Klim Type Foundry**, **Inter**, and **Every**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.surface | `#000000` | surface on page content |
| color.text | `#ffffff` | text on page content |
| color.surface | `#fafaf7` | surface on page content |
| color.text | `#d6d3d1` | text on page content in the main |
| color.border | `#3c3c3c` | border on page content in the main |
| color.surface | `#272729` | surface on page content |
| color.surface | `#c0f0fb` | surface on page content in the button |
| color.text | `#d0d0d0` | text on page content in the main |
| color.text | `#bcbcbc` | text on page content in the footer |
| color.text | `#8c8d91` | text on page content in the footer |
| color.text | `#1a1a1a` | text on page content in the nav |
| color.text | `#bdbdbd` | text on page content in the nav |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-15px | **Switzer** | 15px | 400 | 22.5px | normal | <div>, <a> in the nav, <div> in the nav, <div> in the main, <div> in the footer, <a> in the footer, <a> in the main, <a>, and <button> in the button |
| type.body-20px | **Klim Type Foundry** | 20px | 400 | 30px | normal | <p> in the footer and <p> in the main |
| type.body-18px | **Switzer** | 18px | 500 | 27px | normal | <a> in the footer, <div> in the footer, <span> in the main, and <a> in the main |
| type.display-32px | **Klim Type Foundry** | 32px | 400 | normal | normal | <h3> in the main |
| type.body-18px | **Switzer** | 18px | 400 | 27px | normal | <p> in the main and <p> |
| type.display-69px | **Switzer** | 69px | 500 | 75.9px | normal | <h1> |
| type.body-15px | **Inter** | 15px | 400 | 22.5px | normal | <div> |
| type.body-20px | **Switzer** | 20px | 400 | 30px | normal | <p> in the main |
| type.body-20px | **Klim Type Foundry** | 20px | 400 | normal | normal | <h3> in the main |
| type.utility-12px | **Switzer** | 12px | 400 | 18px | normal | <span> |
| type.body-25px | **Switzer** | 25px | 400 | 34px | normal | <p> |
| type.display-32px | **Klim Type Foundry** | 32px | 500 | normal | normal | <h3> in the main |
| type.body-14px | **Switzer** | 14px | 500 | 21px | normal | <button> in the button and <p> |
| type.display-42px | **Klim Type Foundry** | 42px | 400 | normal | normal | <h2> in the footer and <h3> in the main |
| type.body-15px | **Inter** | 15px | 400 | 23px | normal | <span> and <p> |
| type.body-24px | **Klim Type Foundry** | 24px | 400 | normal | normal | <h3> in the main |
| type.body-14px | **Switzer** | 14px | 400 | 21px | normal | <p> in the footer and <a> in the nav |
| type.display-48px | **Klim Type Foundry** | 48px | 400 | normal | normal | <h2> in the main |
| type.body-16px | **Switzer** | 16px | 500 | 24px | normal | <button> in the button and <span> in the button |
| type.utility-12px | **Switzer** | 12px | 400 | 18px | 0.6px | <span> in the main, <a> in the main, and <div> in the main |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `120px 0px 120px 137.6px` | padding | page content |
| `0px 2.5px` | margin | page content |
| `80px 16px` | padding | page content |
| `0px 212.5px` | margin | page content |
| `12px 0px` | margin | page content |
| `64px 0px 32px` | padding | page content |
| `0px 0px 40px` | padding | page content |
| `10px 15px` | padding | page content |

### Shape and depth

The captured pages use `0px none 4px`, `1px 0px dashed 0px`, `0px none 9999px`, `1px 0px 0px dashed 0px`, `2px solid 8px`, `1px 0px 0px dashed none 0px`, and `0px none 100px` border treatments. Recorded gradients include `linear-gradient(to right bottom, rgba(212, 212, 212, 0.1) 0.67%, rgba(102, 102, 102, 0.1) 100.3%)` and `linear-gradient(rgb(72, 72, 72) 0%, rgb(13, 13, 13) 100%)`. Recorded shadows include `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.22) 0px -1px 0px 0px inset`.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#000000`, `#fafaf7`, and `#272729`. Text colors include `#ffffff`, `#d6d3d1`, and `#d0d0d0`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Switzer**, **Klim Type Foundry**, and **Inter**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `120px 0px 120px 137.6px`, `0px 2.5px`, `80px 16px`, `0px 212.5px`, and `12px 0px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#000000`, `#fafaf7`, `#272729`, and `#c0f0fb`. Depth is supported by the returned gradients and shadows.

## Components and states

The captured pages include repeated styling on <div>, <a>, <h2>, <p>, <button>, <span>, <h3>, and <h1> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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
- `#fafaf7`
- `#d6d3d1`
- `#3c3c3c`
- `#272729`
- `#c0f0fb`
- `#d0d0d0`
- `#bcbcbc`
- `#8c8d91`
- `#1a1a1a`
- `#bdbdbd`
- `#eae6de`
- `#626262`
- `#62c655`

## Typography captured from every.to

- **Switzer** — weight 400 · size 15px
- **Klim Type Foundry** — weight 400 · size 42px
- **Inter** — weight 400 · size 15px
- **Every** — weight 400 · size 48px

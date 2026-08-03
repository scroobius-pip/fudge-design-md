# How alpine.inc is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/alpine.inc-design)

Last updated: 2026-08-03

## Captured pages

[![Alpine](https://pin.fontofweb.com/7702?format=jpg)](https://design.withfudge.com/share/pin-7702)

[Alpine](https://design.withfudge.com/share/pin-7702)

[![Alpine](https://pin.fontofweb.com/7701?format=jpg)](https://design.withfudge.com/share/pin-7701)

[Alpine](https://design.withfudge.com/share/pin-7701)

[![Alpine](https://pin.fontofweb.com/7700?format=jpg)](https://design.withfudge.com/share/pin-7700)

[Alpine](https://design.withfudge.com/share/pin-7700)

[![Alpine](https://pin.fontofweb.com/7699?format=jpg)](https://design.withfudge.com/share/pin-7699)

[Alpine](https://design.withfudge.com/share/pin-7699)

[![Alpine](https://pin.fontofweb.com/7698?format=jpg)](https://design.withfudge.com/share/pin-7698)

[Alpine](https://design.withfudge.com/share/pin-7698)

[![Alpine](https://pin.fontofweb.com/7697?format=jpg)](https://design.withfudge.com/share/pin-7697)

[Alpine](https://design.withfudge.com/share/pin-7697)

[![Alpine](https://pin.fontofweb.com/7696?format=jpg)](https://design.withfudge.com/share/pin-7696)

[Alpine](https://design.withfudge.com/share/pin-7696)

[![Alpine](https://pin.fontofweb.com/7695?format=jpg)](https://design.withfudge.com/share/pin-7695)

[Alpine](https://design.withfudge.com/share/pin-7695)

## Overview

alpine.inc presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#000000`, `#16161a`, and `#2c2338`, with typography led by **System**, **Inter**, and **Dm Serif**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#000000` | text on page content |
| color.surface | `#16161a` | surface on page content |
| color.surface | `#2c2338` | surface on page content |
| color.text | `#0b0b0d` | text on page content |
| color.surface | `#ffffff` | surface on page content |
| color.text | `#f9f9fe` | text on page content |
| color.shadow | `#121214` | shadow on page content |
| color.surface | `#f8f8fc` | surface on page content |
| color.text | `#f5f5ff` | text on page content |
| color.text | `#00000a` | text on page content |
| color.text | `#1a1816` | text on page content |
| color.text | `#0000ee` | text on page content |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.utility-12px | **System** | 12px | 400 | normal | normal | <div> and <a> |
| type.body-20px | **Inter** | 20px | 400 | 32px | -0.2px | <p> |
| type.body-16px | **Inter** | 16px | 400 | 24px | -0.1px | <p> |
| type.display-78.8342px | **Dm Serif** | 78.8342px | 400 | 78.8342px | -0.394171px | <span> |
| type.display-40px | **Dm Serif** | 40px | 400 | 48px | normal | <h2> |
| type.body-20px | **Inter** | 20px | 400 | 32px | normal | <h3> and <p> |
| type.body-18px | **Inter** | 18px | 400 | 27px | normal | <p> |
| type.body-20px | **Inter** | 20px | 400 | 34px | -0.2px | <p> |
| type.body-15px | **Inter** | 15px | 400 | 22.5px | -0.1px | <p> |
| type.body-17px | **Inter** | 17px | 400 | 25px | -0.1px | <p> |
| type.display-77.8708px | **Dm Serif** | 77.8708px | 400 | 77.8708px | -0.389354px | <h1> |
| type.body-24px | **Inter** | 24px | 400 | 36px | -0.48px | <p> |
| type.body-20px | **Inter** | 20px | 400 | 24px | -0.2px | <h3> |
| type.display-52px | **Inter** | 52px | 400 | 52px | normal | <p> |
| type.body-29px | **Dm Serif** | 29px | 400 | 34.8px | normal | <p> |
| type.display-64px | **Inter** | 64px | 400 | 64px | normal | <p> |
| type.body-20px | **Inter** | 20px | 400 | 20px | 5px | <p> |
| type.body-14px | **Inter** | 14px | 400 | 16px | normal | <a> and <p> |
| type.display-48px | **Inter** | 48px | 400 | 48px | normal | <p> |
| type.body-16px | **Inter** | 16px | 400 | 19.2px | normal | <p> |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `155px 0px 0px` | padding | page content |
| `96px 0px 0px` | padding | page content |
| `72px 0px 0px` | padding | page content |
| `128px` | padding | page content |
| `0px 128px` | padding | page content |
| `100px` | padding | page content |
| `56px 48px 48px` | padding | page content |
| `0px 64px` | padding | page content |

### Shape and depth

The captured pages use `0px none 1px`, `0px none 24px`, `0px none 16px`, `0px none 9999px`, `0px none 4px`, and `0px none 12px` border treatments. Recorded gradients include `radial-gradient(50% 50%, rgb(31, 164, 171) 0%, rgba(22, 51, 39, 0) 100%)` and `linear-gradient(rgb(249, 243, 235) 0%, rgb(255, 255, 255) 100%)`. Recorded shadows include `rgba(18, 18, 20, 0.2) 0px 24px 48px -12px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px`, `rgba(18, 18, 20, 0.12) 0px 20px 24px -4px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px, rgba(18, 18, 20, 0.03) 0px 8px 8px -4px`, `rgba(0, 0, 0, 0.07) 0px 100px 80px 0px, rgba(0, 0, 0, 0.05) 0px 41.78px 33.42px 0px, rgba(0, 0, 0, 0.04) 0px 22.34px 17.87px 0px, rgba(0, 0, 0, 0.04) 0px 12.52px 10.02px 0px, rgba(0, 0, 0, 0.03) 0px 6.65px 5.32px 0px, rgba(0, 0, 0, 0.02) 0px 2.77px 2.21px 0px`, and `rgba(0, 0, 0, 0.11) 0px 1px 0px 0px inset`.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#16161a`, `#2c2338`, and `#ffffff`. Text colors include `#000000`, `#0b0b0d`, and `#f9f9fe`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **System**, **Inter**, and **Dm Serif**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `155px 0px 0px`, `96px 0px 0px`, `72px 0px 0px`, `128px`, and `0px 128px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#16161a`, `#2c2338`, `#ffffff`, and `#f8f8fc`. Depth is supported by the returned gradients and shadows.

## Components and states

The captured pages include repeated styling on <div>, <p>, <h2>, <h3>, <a>, <span>, and <h1> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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
- `#16161a`
- `#2c2338`
- `#0b0b0d`
- `#ffffff`
- `#f9f9fe`
- `#121214`
- `#f8f8fc`
- `#f5f5ff`
- `#00000a`
- `#1a1816`
- `#0000ee`
- `#00000d`
- `#5b5b62`
- `#ffde18`
- `#27272b`

## Typography captured from alpine.inc

- **System** — weight 400 · size 12px
- **Inter** — weight 400 · size 20px
- **Dm Serif** — weight 400 · size 40px

# How anytype.io is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/anytype.io-design)

Last updated: 2026-08-03

## Captured pages

[![Anytype — A safe haven for digital collaboration](https://pin.fontofweb.com/8145?format=jpg)](https://design.withfudge.com/share/pin-8145)

[Anytype — A safe haven for digital collaboration](https://design.withfudge.com/share/pin-8145)

[![Anytype — A safe haven for digital collaboration](https://pin.fontofweb.com/8022?format=jpg)](https://design.withfudge.com/share/pin-8022)

[Anytype — A safe haven for digital collaboration](https://design.withfudge.com/share/pin-8022)

[![Anytype — A safe haven for digital collaboration](https://pin.fontofweb.com/8021?format=jpg)](https://design.withfudge.com/share/pin-8021)

[Anytype — A safe haven for digital collaboration](https://design.withfudge.com/share/pin-8021)

[![Anytype — A safe haven for digital collaboration](https://pin.fontofweb.com/8020?format=jpg)](https://design.withfudge.com/share/pin-8020)

[Anytype — A safe haven for digital collaboration](https://design.withfudge.com/share/pin-8020)

[![Anytype — A safe haven for digital collaboration](https://pin.fontofweb.com/8019?format=jpg)](https://design.withfudge.com/share/pin-8019)

[Anytype — A safe haven for digital collaboration](https://design.withfudge.com/share/pin-8019)

[![Anytype — A safe haven for digital collaboration](https://pin.fontofweb.com/8018?format=jpg)](https://design.withfudge.com/share/pin-8018)

[Anytype — A safe haven for digital collaboration](https://design.withfudge.com/share/pin-8018)

[![Anytype — A safe haven for digital collaboration](https://pin.fontofweb.com/8017?format=jpg)](https://design.withfudge.com/share/pin-8017)

[Anytype — A safe haven for digital collaboration](https://design.withfudge.com/share/pin-8017)

[![The Everything App](https://pin.fontofweb.com/1980?format=jpg)](https://design.withfudge.com/share/pin-1980)

[The Everything App](https://design.withfudge.com/share/pin-1980)

## Overview

anytype.io presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#000000`, `#ffffff`, and `#252525`, with typography led by **Inter** and **Riccione Tsx**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#000000` | text on page content |
| color.text | `#ffffff` | text on page content |
| color.border | `#252525` | border on page content |
| color.text | `#ff6a7b` | text on page content |
| color.text | `#808080` | text on page content |
| color.border | `#5b5b5b` | border on page content in the button |
| color.text | `#949494` | text on page content |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-18px | **Inter** | 18px | 400 | 26px | -0.28px | <div> |
| type.body-16px | **Inter** | 16px | 400 | 24px | -0.2px | <div> and <a> |
| type.display-120px | **Riccione Tsx** | 120px | 400 | 100px | -3.2px | <h3> |
| type.display-96px | **Riccione Tsx** | 96px | 400 | 90px | -2.4px | <span> |
| type.display-88px | **Riccione Tsx** | 88px | 400 | 76px | -2.4px | <h2> |
| type.body-16px | **Inter** | 16px | 500 | 24px | -0.2px | <button> in the button, <a>, and <div> |
| type.body-28px | **Inter** | 28px | 500 | 32px | -0.64px | <div> and <h4> |
| type.body-22px | **Inter** | 22px | 500 | 28px | -0.48px | <div> |
| type.display-108px | **Riccione Tsx** | 108px | 400 | 96px | -2.8px | <h1> |
| type.display-88px | **Inter** | 88px | 300 | 90px | -5.2px | <span> |
| type.display-48px | **Inter** | 48px | 500 | 48px | -2.4px | <div> |
| type.body-14px | **Inter** | 14px | 500 | 20px | -0.12px | <button> in the button and <div> in the button |
| type.body-22px | **Inter** | 22px | 400 | 28px | -0.48px | <p> |
| type.body-14px | **Inter** | 14px | 400 | 20px | 1px | <a> and <span> |
| type.utility-12px | **Inter** | 12px | 500 | 20px | -0.1px | <span> |
| type.body-18px | **Inter** | 18px | 300 | 26px | -0.28px | <div> |
| type.utility-12px | **Inter** | 12px | 500 | 18px | -0.28px | <div> |
| type.body-14px | **Inter** | 14px | 400 | 20px | -0.12px | <div> |
| type.body-18px | **Inter** | 18px | 400 | 18px | -0.28px | <button> in the button |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `128px 64px` | padding | page content |
| `0px 0px 32px` | margin | page content |
| `136px 64px 0px` | padding | page content |
| `80px 64px` | padding | page content |
| `36px 24px 24px` | padding | page content |
| `96px 64px 106px` | padding | page content |
| `40px 32px 62px` | padding | page content |
| `0px 10px` | padding | page content |

### Shape and depth

The captured pages use `0px none 20px`, `1px solid 0px`, `0px none 44px`, `0px none 6px`, `1px solid 44px`, `0px none 14px`, `1px solid 0px`, and `1px solid 100%` border treatments.

## Colors

The visual system is predominantly dark surface treatment. Surface roles are not fully established. Text colors include `#000000`, `#ffffff`, and `#ff6a7b`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Inter** and **Riccione Tsx**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `128px 64px`, `0px 0px 32px`, `136px 64px 0px`, `80px 64px`, and `36px 24px 24px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. The surface palette is not fully established. No structured gradient or shadow treatment is established.

## Components and states

The captured pages include repeated styling on <div>, <span>, <a>, <button>, <h3>, <h2>, <h4>, and <h1> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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
- `#252525`
- `#ff6a7b`
- `#808080`
- `#5b5b5b`
- `#949494`

## Typography captured from anytype.io

- **Inter** — weight 400 · size 18px
- **Riccione Tsx** — weight 400 · size 96px

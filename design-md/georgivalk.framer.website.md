# How georgivalk.framer.website is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/georgivalk.framer.website-design)

Last updated: 2026-08-03

## Captured pages

[![Georgi Valkov](https://pin.fontofweb.com/6534?format=jpg)](https://design.withfudge.com/share/pin-6534)

[Georgi Valkov](https://design.withfudge.com/share/pin-6534)

[![Georgi Valkov](https://pin.fontofweb.com/6533?format=jpg)](https://design.withfudge.com/share/pin-6533)

[Georgi Valkov](https://design.withfudge.com/share/pin-6533)

[![Georgi Valkov](https://pin.fontofweb.com/6532?format=jpg)](https://design.withfudge.com/share/pin-6532)

[Georgi Valkov](https://design.withfudge.com/share/pin-6532)

## Overview

georgivalk.framer.website presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#000000`, `#0c0c0c`, and `#0000ee`, with typography led by **System**, **False**, **Instrument Sans**, and **Cabinet Grotesk**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.surface | `#000000` | surface on page content |
| color.text | `#0c0c0c` | text on page content |
| color.text | `#0000ee` | text on page content |
| color.text | `#ffffff` | text on page content |
| color.text | `#bababa` | text on page content |
| color.text | `#b8b8b8` | text on page content |
| color.surface | `#b8ff1f` | surface on page content |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.utility-12px | **System** | 12px | 400 | normal | normal | <div> and <a> |
| type.display-92px | **False** | 92px | 700 | 101.2px | 1.84px | <span> |
| type.display-140px | **False** | 140px | 700 | 154px | normal | <h1> |
| type.display-42px | **Instrument Sans** | 42px | 700 | 50.4px | 0.84px | <h4> |
| type.body-24px | **Instrument Sans** | 24px | 400 | 38.4px | normal | <p> |
| type.display-32px | **False** | 32px | 700 | 38.4px | 0.64px | <h4> |
| type.body-20px | **Cabinet Grotesk** | 20px | 500 | 24px | normal | <p> |
| type.display-72px | **False** | 72px | 700 | 79.2px | 1.44px | <h4> |
| type.heading-24px | **Instrument Sans** | 24px | 600 | 21.6px | normal | <p> |
| type.body-20px | **Instrument Sans** | 20px | 400 | 20px | 0.6px | <h3> |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `180px 0px 0px` | padding | page content |
| `0px 0px 180px` | padding | page content |
| `12px 42px 42px` | padding | page content |
| `12px` | padding | page content |
| `24px 42px` | padding | page content |

### Shape and depth

The captured pages use `0px none 12px`, `0px none 44px`, and `0px none 84px` border treatments. Recorded gradients include `radial-gradient(58.5% 72.1% at 51.1% -2.1%, rgb(184, 255, 31) 0%, rgb(247, 255, 232) 100%)`, `radial-gradient(61.5% 43.5%, rgb(34, 48, 2) 0%, rgb(23, 33, 0) 52.7027%, rgb(5, 8, 0) 100%)`, `radial-gradient(61.5% 57.4%, rgb(34, 48, 2) 0%, rgb(23, 33, 0) 52.7027%, rgb(5, 8, 0) 100%)`, and `linear-gradient(rgb(184, 255, 31) 0%, rgb(105, 247, 10) 76%, rgb(184, 255, 31) 100%)`. Recorded shadows include `rgb(12, 12, 12) 0px 1px 0px 1px`.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#000000` and `#b8ff1f`. Text colors include `#0c0c0c`, `#0000ee`, and `#ffffff`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **System**, **False**, **Instrument Sans**, and **Cabinet Grotesk**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `180px 0px 0px`, `0px 0px 180px`, `12px 42px 42px`, `12px`, and `24px 42px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#000000` and `#b8ff1f`. Depth is supported by the returned gradients and shadows.

## Components and states

The captured pages include repeated styling on <h1>, <div>, <a>, <p>, <h4>, <h3>, and <span> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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
- `#0c0c0c`
- `#0000ee`
- `#ffffff`
- `#bababa`
- `#b8b8b8`
- `#b8ff1f`

## Typography captured from georgivalk.framer.website

- **System** — weight 400 · size 12px
- **False** — weight 700 · size 140px
- **Instrument Sans** — weight 600 · size 24px
- **Cabinet Grotesk** — weight 500 · size 20px

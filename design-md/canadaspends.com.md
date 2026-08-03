# How canadaspends.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/canadaspends.com-design)

Last updated: 2026-08-03

## Captured pages

[![Federal Government Spending | Canada Spends](https://pin.fontofweb.com/6907?format=jpg)](https://design.withfudge.com/share/pin-6907)

[Federal Government Spending | Canada Spends](https://design.withfudge.com/share/pin-6907)

[![Federal Government Spending | Canada Spends](https://pin.fontofweb.com/6906?format=jpg)](https://design.withfudge.com/share/pin-6906)

[Federal Government Spending | Canada Spends](https://design.withfudge.com/share/pin-6906)

## Overview

canadaspends.com presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#272727`, `#000000`, and `#f6ece3`, with typography led by **Financier** and **Söhne Kraftig**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#272727` | text on page content in the main |
| color.surface | `#000000` | surface on page content in the main |
| color.surface | `#f6ece3` | surface on page content in the main |
| color.text | `#932f2f` | text on page content in the main |
| color.surface | `#ffffff` | surface on page content in the main |
| color.border | `#e5e7eb` | border on page content in the main |
| color.surface | `#335b6b` | surface on page content in the main |
| color.text | `#4a5565` | text on page content in the main |
| color.text | `#101828` | text on page content in the main |
| color.text | `#f6ebe3` | text on page content in the main |
| color.surface | `#bedbff` | surface on page content in the main |
| color.text | `#364153` | text on page content in the main |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **Financier** | 16px | 400 | 24px | normal | <div> in the main and <li> in the main |
| type.utility-11.2px | **Financier** | 11.2px | 400 | 14px | normal | <div> in the main and <p> in the main |
| type.body-14px | **Financier** | 14px | 400 | 20px | normal | <div> in the main, <p> in the main, and <span> in the main |
| type.display-48px | **Söhne Kraftig** | 48px | 700 | 48px | -1.2px | <h1> in the main |
| type.utility-11.2px | **Financier** | 11.2px | 700 | 14px | normal | <div> in the main |
| type.heading-30px | **Financier** | 30px | 700 | 36px | normal | <div> in the main |
| type.body-18px | **Financier** | 18px | 400 | 29.25px | normal | <p> in the main |
| type.body-16px | **Financier** | 16px | 400 | 26px | normal | <p> in the main |
| type.utility-12.8px | **Financier** | 12.8px | 400 | 16px | normal | <div> in the main and <p> in the main |
| type.body-16px | **Söhne Kraftig** | 16px | 500 | 24px | normal | <h3> in the main |
| type.utility-12.8px | **Financier** | 12.8px | 700 | 16px | normal | <div> in the main |
| type.heading-24px | **Söhne Kraftig** | 24px | 700 | 32px | normal | <h2> in the main |
| type.body-14px | **Financier** | 14px | 400 | 22.75px | normal | <p> in the main and <a> in the main |
| type.body-16px | **Financier** | 16px | 500 | 24px | normal | <div> in the main |
| type.body-14px | **Financier** | 14px | 400 | 14px | normal | <p> in the main |
| type.utility-12px | **Financier** | 12px | 400 | 16px | normal | <a> in the main |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `8px 24px 32px` | padding | page content |
| `0px 276.5px` | margin | page content |
| `0px 16px` | padding | page content |
| `16px 20px` | padding | page content |
| `32px 40px 0px` | margin | page content |
| `16px` | padding | page content |
| `0px 0px 4px` | margin | page content |
| `16px 24px 0px 16px` | padding | page content |

### Shape and depth

The captured pages use `1px solid 0px` and `0px none 4px` border treatments. Recorded gradients include `linear-gradient(135deg, rgb(169, 167, 159) 16.67%, rgb(39, 39, 39) 16.67%, rgb(39, 39, 39) 50%, rgb(169, 167, 159) 50%, rgb(169, 167, 159) 66.67%, rgb(39, 39, 39) 66.67%, rgb(39, 39, 39) 100%)`. Recorded shadows include `rgba(0, 0, 0, 0.2) 0px 2px 8px 0px`.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#000000`, `#f6ece3`, and `#ffffff`. Text colors include `#272727`, `#932f2f`, and `#4a5565`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Financier** and **Söhne Kraftig**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `8px 24px 32px`, `0px 276.5px`, `0px 16px`, `16px 20px`, and `32px 40px 0px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#000000`, `#f6ece3`, `#ffffff`, and `#335b6b`. Depth is supported by the returned gradients and shadows.

## Components and states

The captured pages include repeated styling on <div>, <h2>, <h3>, <p>, <a>, <span>, <li>, and <h1> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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

- `#272727`
- `#000000`
- `#f6ece3`
- `#932f2f`
- `#ffffff`
- `#e5e7eb`
- `#335b6b`
- `#4a5565`
- `#101828`
- `#f6ebe3`
- `#bedbff`
- `#364153`
- `#cccccc`

## Typography captured from canadaspends.com

- **Financier** — weight 400 · size 16px
- **Söhne Kraftig** — weight 700 · size 24px

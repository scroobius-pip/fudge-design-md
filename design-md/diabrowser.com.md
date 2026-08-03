# How diabrowser.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/diabrowser.com-design)

Last updated: 2026-08-03

## Captured pages

[![Dia Browser | Latest Release Notes](https://pin.fontofweb.com/9533?format=jpg)](https://design.withfudge.com/share/pin-9533)

[Dia Browser | Latest Release Notes](https://design.withfudge.com/share/pin-9533)

[![Getting Started | Dia Browser](https://pin.fontofweb.com/3816?format=jpg)](https://design.withfudge.com/share/pin-3816)

[Getting Started | Dia Browser](https://design.withfudge.com/share/pin-3816)

[![Getting Started | Dia Browser](https://pin.fontofweb.com/3815?format=jpg)](https://design.withfudge.com/share/pin-3815)

[Getting Started | Dia Browser](https://design.withfudge.com/share/pin-3815)

[![Dia Browser | AI Chat With Your Tabs](https://pin.fontofweb.com/3814?format=jpg)](https://design.withfudge.com/share/pin-3814)

[Dia Browser | AI Chat With Your Tabs](https://design.withfudge.com/share/pin-3814)

[![Dia Browser | AI Chat With Your Tabs](https://pin.fontofweb.com/3813?format=jpg)](https://design.withfudge.com/share/pin-3813)

[Dia Browser | AI Chat With Your Tabs](https://design.withfudge.com/share/pin-3813)

[![Dia Browser | AI Chat With Your Tabs](https://pin.fontofweb.com/3812?format=jpg)](https://design.withfudge.com/share/pin-3812)

[Dia Browser | AI Chat With Your Tabs](https://design.withfudge.com/share/pin-3812)

[![Dia Browser | AI Chat With Your Tabs](https://pin.fontofweb.com/3811?format=jpg)](https://design.withfudge.com/share/pin-3811)

[Dia Browser | AI Chat With Your Tabs](https://design.withfudge.com/share/pin-3811)

[![Dia Browser | AI Chat With Your Tabs](https://pin.fontofweb.com/3810?format=jpg)](https://design.withfudge.com/share/pin-3810)

[Dia Browser | AI Chat With Your Tabs](https://design.withfudge.com/share/pin-3810)

## Overview

diabrowser.com presents a mixed light and dark surface treatment in the captured pages. The system is anchored by `#000000` and `#ebebeb`, with typography led by **Abc Oracle**, **Exposure 0**, **Exposure 20**, and **Exposure**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#000000` | text on page content in the header |
| color.surface | `#ebebeb` | surface on page content in the main |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.utility-10px | **Abc Oracle** | 10px | 400 | 15px | normal | <div> in the header and <div> in the main |
| type.body-18px | **Exposure 0** | 18px | 500 | 32px | normal | <p> in the main |
| type.display-45px | **Exposure 20** | 45px | 600 | 54px | -0.45px | <p> in the main |
| type.display-50px | **Exposure 20** | 50px | 600 | 60px | -2px | <h1> in the main |
| type.display-81px | **Exposure 20** | 81px | 600 | 113px | -3.24px | <p> in the header |
| type.body-16px | **Exposure** | 16px | 550 | 23px | normal | <p> in the header |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `40px 0px 10px` | padding | page content |
| `4px 10px 10px` | padding | page content |
| `0px 447.031px` | margin | page content |
| `0px 0px 8px` | margin | page content |
| `16px 12px 12px 24px` | padding | page content |

### Shape and depth

The captured pages use `1px solid 0px 0px 12px 12px` border treatments. Recorded shadows include `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.08) 0px 1px 2px 0px`.

## Colors

The visual system is mixed light and dark surface treatment. Surface colors include `#ebebeb`. Text colors include `#000000`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Abc Oracle**, **Exposure 0**, **Exposure 20**, and **Exposure**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `40px 0px 10px`, `4px 10px 10px`, `0px 447.031px`, `0px 0px 8px`, and `16px 12px 12px 24px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is mixed light and dark surface treatment. Surface treatment centers on `#ebebeb`. Depth is supported by the returned shadows.

## Components and states

The captured pages include repeated styling on <div>, <p>, and <h1> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

## Responsive behavior

The captured token set does not establish breakpoint values or mobile behavior. Validate stacking, navigation changes, image treatment, and type scaling against the representative captures before implementing a responsive adaptation.

## Practical implementation guidance

- Preserve the mixed light/dark surface relationship and the measured type hierarchy before adding decorative treatment.
- Start from the returned typography, spacing, color, and border values; name any new scale or semantic role as an adaptation rather than as a source fact.
- Keep the captured font families separate from licensing decisions.
- Use screenshots to validate component anatomy, responsive behavior, focus treatment, and motion before shipping.
- Avoid introducing gradients or shadows beyond the captured treatment; the returned evidence includes those treatments.

## Scope note

The guide uses representative captured pages. The evidence supports the values and observations above; it does not establish component semantics, interaction states, motion timing, breakpoint rules, font licensing, or a complete source stylesheet.

## Colors

- `#000000`
- `#ebebeb`

## Typography captured from diabrowser.com

- **Abc Oracle** — weight 400 · size 10px
- **Exposure 0** — weight 500 · size 18px
- **Exposure 20** — weight 600 · size 45px
- **Exposure** — weight 550 · size 16px

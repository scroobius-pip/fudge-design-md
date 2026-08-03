# How figr.design is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/figr.design-design)

Last updated: 2026-08-03

## Captured pages

[![Talk to Figr | Get Your Product Design Questions Answered](https://pin.fontofweb.com/7414?format=jpg)](https://design.withfudge.com/share/pin-7414)

[Talk to Figr | Get Your Product Design Questions Answered](https://design.withfudge.com/share/pin-7414)

[![Figr - AI Design Agent for Product Teams | Ship UX Faster](https://pin.fontofweb.com/7413?format=jpg)](https://design.withfudge.com/share/pin-7413)

[Figr - AI Design Agent for Product Teams | Ship UX Faster](https://design.withfudge.com/share/pin-7413)

## Overview

figr.design presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#000000`, `#f4f3f1`, and `#ffffff`, with typography led by **Inter** and **Gt Alpina**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#000000` | text on page content |
| color.surface | `#f4f3f1` | surface on page content |
| color.text | `#ffffff` | text on page content |
| color.surface | `#695be8` | surface on page content |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **Inter** | 16px | 400 | 25.6px | normal | <div>, <p>, and <a> |
| type.display-76px | **Gt Alpina** | 76px | 300 | 91.2px | -2.4px | <h1> |
| type.body-20px | **Inter** | 20px | 400 | 32px | normal | <p> |
| type.utility-12.992px | **Inter** | 12.992px | 400 | 25.6px | normal | <a> |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `0px 0px 16px` | margin | page content |
| `128px 32px 0px` | padding | page content |
| `16px 0px` | padding | page content |
| `32px 0px 0px` | margin | page content |
| `48px` | padding | page content |
| `0px 464px` | margin | page content |
| `24px 0px 0px` | margin | page content |
| `4px 16px` | padding | page content |

### Shape and depth

The captured pages use `0px none 24px` and `0px none 8px` border treatments.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#f4f3f1` and `#695be8`. Text colors include `#000000` and `#ffffff`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Inter** and **Gt Alpina**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `0px 0px 16px`, `128px 32px 0px`, `16px 0px`, `32px 0px 0px`, and `48px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#f4f3f1` and `#695be8`. No structured gradient or shadow treatment is established.

## Components and states

The captured pages include repeated styling on <div>, <h1>, <p>, and <a> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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
- `#f4f3f1`
- `#ffffff`
- `#695be8`

## Typography captured from figr.design

- **Inter** — weight 400 · size 16px
- **Gt Alpina** — weight 300 · size 76px

# How claura.framer.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/claura.framer.ai-design)

Last updated: 2026-08-03

## Captured pages

[![Claura - AI Agency Website Template for Framer](https://pin.fontofweb.com/8122?format=jpg)](https://design.withfudge.com/share/pin-8122)

[Claura - AI Agency Website Template for Framer](https://design.withfudge.com/share/pin-8122)

[![Claura - AI Agency Website Template for Framer](https://pin.fontofweb.com/8121?format=jpg)](https://design.withfudge.com/share/pin-8121)

[Claura - AI Agency Website Template for Framer](https://design.withfudge.com/share/pin-8121)

[![Claura - AI Agency Website Template for Framer](https://pin.fontofweb.com/8120?format=jpg)](https://design.withfudge.com/share/pin-8120)

[Claura - AI Agency Website Template for Framer](https://design.withfudge.com/share/pin-8120)

## Overview

claura.framer.ai presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#000000`, `#2b180a`, and `#94877c`, with typography led by **System**, **False**, and **Geist**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.surface | `#000000` | surface on page content |
| color.surface | `#2b180a` | surface on page content in the button |
| color.text | `#94877c` | text on page content |
| color.text | `#ffffff` | text on page content |
| color.surface | `#efe7dd` | surface on page content |
| color.text | `#0000ee` | text on page content in the footer |
| color.surface | `#faf6f2` | surface on page content in the footer |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.utility-12px | **System** | 12px | 400 | normal | normal | <div>, <ul>, <button> in the button, <div> in the footer, <div> in the nav, <a> in the footer, <a> in the nav, and <a> |
| type.display-56px | **False** | 56px | 400 | 61.6px | -3.36px | <h2> in the footer, <h2>, and <span> |
| type.display-70px | **False** | 70px | 400 | 77px | -4.9px | <h1> and <span> |
| type.display-56px | **False** | 56px | 400 | 56px | -3.36px | <h2> |
| type.body-18px | **Geist** | 18px | 400 | 27px | -0.72px | <p> and <p> in the footer |
| type.body-20px | **Geist** | 20px | 400 | 30px | -1px | <p> |
| type.body-16px | **Geist** | 16px | 500 | 24px | -0.64px | <p> |
| type.body-14px | **Geist** | 14px | 400 | 21px | -0.56px | <a> in the footer and <p> |
| type.body-14px | **Geist** | 14px | 500 | 21px | -0.56px | <p> in the nav and <p> |
| type.utility-12px | **Geist** | 12px | 500 | 18px | -0.48px | <p> and <a> |
| type.body-16px | **Geist** | 16px | 400 | 24px | -0.64px | <p> |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `20px` | padding | page content |
| `20px 30px` | padding | page content |
| `10px 20px` | padding | page content |
| `8px 16px` | padding | page content |
| `8px` | padding | page content |

### Shape and depth

The captured pages use `0px none 12px`, `0px none 28px`, `0px none 50px`, and `0px none 100px` border treatments.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#000000`, `#2b180a`, and `#efe7dd`. Text colors include `#94877c`, `#ffffff`, and `#0000ee`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **System**, **False**, and **Geist**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `20px`, `20px 30px`, `10px 20px`, `8px 16px`, and `8px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#000000`, `#2b180a`, `#efe7dd`, and `#faf6f2`. No structured gradient or shadow treatment is established.

## Components and states

The captured pages include repeated styling on <h2>, <div>, <p>, <ul>, <button>, <a>, <h1>, and <span> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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
- `#2b180a`
- `#94877c`
- `#ffffff`
- `#efe7dd`
- `#0000ee`
- `#faf6f2`

## Typography captured from claura.framer.ai

- **System** — weight 400 · size 12px
- **False** — weight 400 · size 56px
- **Geist** — weight 400 · size 18px

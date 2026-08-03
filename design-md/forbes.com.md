# How forbes.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/forbes.com-design)

Last updated: 2026-08-03

## Captured pages

[![Innovation](https://pin.fontofweb.com/9036?format=jpg)](https://design.withfudge.com/share/pin-9036)

[Innovation](https://design.withfudge.com/share/pin-9036)

[![Forbes](https://pin.fontofweb.com/9035?format=jpg)](https://design.withfudge.com/share/pin-9035)

[Forbes](https://design.withfudge.com/share/pin-9035)

## Overview

forbes.com presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#000000`, `#ffffff`, and `#171717`, with typography led by **Graphik**, **Schnyder S**, and **Georgia**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.surface | `#000000` | surface on page content in the nav |
| color.text | `#ffffff` | text on page content in the button |
| color.text | `#171717` | text on page content in the nav |
| color.border | `#333333` | border on page content in the nav |
| color.surface | `#dc0000` | surface on page content in the header |
| color.text | `#bbbbbb` | text on page content in the nav |
| color.text | `#7b7b7b` | text on page content in the button |
| color.text | `#4285f4` | text on page content |
| color.surface | `#f0f0f0` | surface on page content in the button |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **Graphik** | 16px | 400 | 16px | normal | <div> in the nav, <button> in the button, and <div> |
| type.body-14px | **Graphik** | 14px | 500 | 21px | normal | <ul> in the nav, <div> in the nav, <a> in the header, and <button> in the button |
| type.body-24px | **Graphik** | 24px | 400 | 36px | normal | <li> in the nav and <div> in the nav |
| type.body-16px | **Graphik** | 16px | 500 | 24px | normal | <span> in the nav, <a> in the nav, <div> in the nav, and <p> in the nav |
| type.body-24px | **Graphik** | 24px | 500 | 36px | normal | <span> in the button, <a> in the button, <div> in the button, and <div> in the nav |
| type.display-32px | **Schnyder S** | 32px | 400 | 38.4px | normal | <p> in the nav and <p> |
| type.utility-12px | **Graphik** | 12px | 500 | 18px | normal | <button> in the button, <span> in the button, <a> in the nav, and <p> |
| type.body-20px | **Georgia** | 20px | 400 | 28px | normal | <span> in the nav |
| type.utility-10px | **Graphik** | 10px | 400 | 15px | normal | <div> and <a> |
| type.body-14px | **Graphik** | 14px | 400 | 14px | normal | <div> in the header |
| type.body-14px | **Graphik** | 14px | 500 | normal | normal | <button> in the button |
| type.utility-12px | **Graphik** | 12px | 400 | 18px | normal | <span> in the nav |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `0px 0px 22px` | padding | page content |
| `24px 32px 0px 0px` | padding | page content |
| `24px 0px` | padding | page content |
| `0px 0px 24px` | margin | page content |
| `0px 32px` | padding | page content |
| `40px 128px` | padding | page content |
| `0px 0px 16px` | padding | page content |
| `10px 16px` | padding | page content |

### Shape and depth

The captured pages use `1px 0px solid none 0px`, `0px none 8px`, `1px solid 8px`, `0px none 16px`, and `0px none 50%` border treatments.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#000000`, `#dc0000`, and `#f0f0f0`. Text colors include `#ffffff`, `#171717`, and `#bbbbbb`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Graphik**, **Schnyder S**, and **Georgia**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `0px 0px 22px`, `24px 32px 0px 0px`, `24px 0px`, `0px 0px 24px`, and `0px 32px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#000000`, `#dc0000`, and `#f0f0f0`. No structured gradient or shadow treatment is established.

## Components and states

The captured pages include repeated styling on <div>, <span>, <li>, <ul>, <button>, <a>, and <p> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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
- `#171717`
- `#333333`
- `#dc0000`
- `#bbbbbb`
- `#7b7b7b`
- `#4285f4`
- `#f0f0f0`

## Typography captured from forbes.com

- **Graphik** — weight 400 · size 16px
- **Schnyder S** — weight 400 · size 32px
- **Georgia** — weight 400 · size 20px

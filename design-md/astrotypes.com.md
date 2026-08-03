# How astrotypes.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/astrotypes.com-design)

Last updated: 2026-08-03

## Captured pages

[![Astrotypes](https://pin.fontofweb.com/8440?format=jpg)](https://design.withfudge.com/share/pin-8440)

[Astrotypes](https://design.withfudge.com/share/pin-8440)

[![Astrotypes](https://pin.fontofweb.com/8439?format=jpg)](https://design.withfudge.com/share/pin-8439)

[Astrotypes](https://design.withfudge.com/share/pin-8439)

## Overview

astrotypes.com presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#000000`, `#0a0a0a`, and `#737373`, with typography led by **Inter**, **Tanker**, **Technor**, **Supreme**, **Zodiak**, **Plus Jakarta Sans**, and **Geist Mono**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.surface | `#000000` | surface on page content in the main |
| color.text | `#0a0a0a` | text on page content in the main |
| color.text | `#737373` | text on page content in the main |
| color.surface | `#f5f5f5` | surface on page content in the button |
| color.text | `#fafafa` | text on page content in the main |
| color.surface | `#171717` | surface on page content in the main |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **Inter** | 16px | 400 | 24px | normal | <div> in the main |
| type.display-60px | **Tanker** | 60px | 500 | 60px | -1.5px | <p> in the main |
| type.display-60px | **Technor** | 60px | 500 | 60px | -1.5px | <p> in the main |
| type.body-20px | **Supreme** | 20px | 500 | 28px | normal | <p> in the main |
| type.display-60px | **Zodiak** | 60px | 500 | 60px | -1.5px | <p> in the main |
| type.body-20px | **Plus Jakarta Sans** | 20px | 500 | 28px | normal | <p> in the main |
| type.utility-12px | **Inter** | 12px | 400 | 16px | normal | <p> in the main and <span> in the main |
| type.utility-11.52px | **Geist Mono** | 11.52px | 400 | 15.84px | normal | <code> in the main |
| type.utility-12px | **Inter** | 12px | 500 | 16px | normal | <button> in the button and <a> in the main |
| type.body-14px | **Inter** | 14px | 500 | 20px | normal | <button> in the button |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `32px` | padding | page content |
| `48px 32px` | padding | page content |
| `16px 0px 0px` | margin | page content |
| `24px 0px 0px` | margin | page content |
| `0px 16px` | padding | page content |

### Shape and depth

The captured pages use `0px none 8px` border treatments.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#000000`, `#f5f5f5`, and `#171717`. Text colors include `#0a0a0a`, `#737373`, and `#fafafa`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Inter**, **Tanker**, **Technor**, **Supreme**, **Zodiak**, **Plus Jakarta Sans**, and **Geist Mono**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `32px`, `48px 32px`, `16px 0px 0px`, `24px 0px 0px`, and `0px 16px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#000000`, `#f5f5f5`, and `#171717`. No structured gradient or shadow treatment is established.

## Components and states

The captured pages include repeated styling on <div>, <p>, <code>, <span>, <button>, and <a> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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
- `#0a0a0a`
- `#737373`
- `#f5f5f5`
- `#fafafa`
- `#171717`

## Typography captured from astrotypes.com

- **Inter** — weight 400 · size 16px
- **Tanker** — weight 500 · size 60px
- **Technor** — weight 500 · size 60px
- **Supreme** — weight 500 · size 20px
- **Zodiak** — weight 500 · size 60px
- **Plus Jakarta Sans** — weight 500 · size 20px
- **Geist Mono** — weight 400 · size 11.52px

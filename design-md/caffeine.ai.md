# How caffeine.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/caffeine.ai-design)

Last updated: 2026-08-03

## Captured pages

[![Caffeine - A Self-Writing Internet Technology](https://pin.fontofweb.com/8830?format=jpg)](https://design.withfudge.com/share/pin-8830)

[Caffeine - A Self-Writing Internet Technology](https://design.withfudge.com/share/pin-8830)

[![About Caffeine](https://pin.fontofweb.com/7229?format=jpg)](https://design.withfudge.com/share/pin-7229)

[About Caffeine](https://design.withfudge.com/share/pin-7229)

## Overview

caffeine.ai presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#000000`, `#fbfbfb`, and `#f6f6f6`, with typography led by **Sohne**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.surface | `#000000` | surface on page content |
| color.text | `#fbfbfb` | text on page content in the main |
| color.text | `#f6f6f6` | text on page content |
| color.surface | `#0d0b09` | surface on page content |
| color.surface | `#1d1d1d` | surface on page content in the button |
| color.border | `#ffffff` | border on page content in the button |
| color.text | `#ddf730` | text on page content in the main |
| color.border | `#3d3d3d` | border on page content in the button |
| color.text | `#888888` | text on page content in the button |
| color.text | `#9cb1f4` | text on page content in the main |
| color.text | `#713001` | text on page content in the main |
| color.surface | `#ffbc99` | surface on page content in the main |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **Sohne** | 16px | 400 | normal | normal | <div>, <div> in the main, and <a> in the main |
| type.body-16px | **Sohne** | 16px | 400 | 24px | normal | <a> in the main, <div> in the main, <p> in the main, and <span> in the main |
| type.body-13.3333px | **Sohne** | 13.3333px | 400 | normal | normal | <button> in the button and <div> in the button |
| type.display-32px | **Sohne** | 32px | 300 | 40px | normal | <span> in the main and <div> in the main |
| type.heading-16px | **Sohne** | 16px | 700 | 24px | normal | <h3> in the main |
| type.body-14px | **Sohne** | 14px | 400 | 20px | normal | <p> in the button, <button> in the button, and <div> in the button |
| type.utility-12px | **Sohne** | 12px | 400 | 16px | normal | <button> in the button, <span> in the main, and <div> in the button |
| type.body-20px | **Sohne** | 20px | 400 | 28px | normal | <div> in the main |
| type.heading-16px | **Sohne** | 16px | 600 | 24px | normal | <h2> in the main |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `20px 20px 0px` | padding | page content |
| `16px 0px` | margin | page content |
| `24px 0px` | padding | page content |
| `0px 546.5px` | margin | page content |
| `16px` | padding | page content |
| `32px 0px` | margin | page content |
| `20px 0px` | padding | page content |
| `10px 12px` | padding | page content |

### Shape and depth

The captured pages use `1px solid 8px`, `1px solid 6px`, `0px none 32px`, `1px solid 3.35544e+07px`, `1px solid 8px`, and `1px solid 14px` border treatments.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#000000`, `#0d0b09`, and `#1d1d1d`. Text colors include `#fbfbfb`, `#f6f6f6`, and `#ddf730`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Sohne**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `20px 20px 0px`, `16px 0px`, `24px 0px`, `0px 546.5px`, and `16px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#000000`, `#0d0b09`, `#1d1d1d`, and `#ffbc99`. No structured gradient or shadow treatment is established.

## Components and states

The captured pages include repeated styling on <div>, <button>, <a>, <p>, <h2>, <span>, and <h3> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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
- `#fbfbfb`
- `#f6f6f6`
- `#0d0b09`
- `#1d1d1d`
- `#ffffff`
- `#ddf730`
- `#3d3d3d`
- `#888888`
- `#9cb1f4`
- `#713001`
- `#ffbc99`
- `#1c1d4f`
- `#d1d1d1`
- `#2b2b2b`

## Typography captured from caffeine.ai

- **Sohne** — weight 400 · size 16px

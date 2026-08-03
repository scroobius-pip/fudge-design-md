# How assistant-ui.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/assistant-ui.com-design)

Last updated: 2026-08-03

## Captured pages

[![Installation | assistant-ui](https://pin.fontofweb.com/8806?format=jpg)](https://design.withfudge.com/share/pin-8806)

[Installation | assistant-ui](https://design.withfudge.com/share/pin-8806)

[![Thread | assistant-ui](https://pin.fontofweb.com/8754?format=jpg)](https://design.withfudge.com/share/pin-8754)

[Thread | assistant-ui](https://design.withfudge.com/share/pin-8754)

## Overview

assistant-ui.com presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#000000`, `#fafafa`, and `#cdd6f4`, with typography led by **Geist** and **System**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.surface | `#000000` | surface on page content |
| color.text | `#fafafa` | text on page content |
| color.text | `#cdd6f4` | text on page content |
| color.surface | `#262626` | surface on page content in the nav |
| color.surface | `#2b7fff` | surface on page content |
| color.text | `#a1a1a1` | text on page content in the nav |
| color.text | `#94e2d5` | text on page content |
| color.text | `#f5c2e7` | text on page content |
| color.text | `#a6e3a1` | text on page content |
| color.text | `#f9e2af` | text on page content |
| color.text | `#cba6f7` | text on page content |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **Geist** | 16px | 400 | 24px | normal | <div>, <div> in the header, <ul>, <a>, and <button> in the button |
| type.body-14px | **Geist** | 14px | 400 | 23.8px | normal | <div>, <p>, and <li> |
| type.body-14px | **Geist** | 14px | 400 | 20px | normal | <a> in the nav, <div> in the aside, <div> in the nav, <a> in the aside, <div>, and <p> |
| type.utility-13px | **System** | 13px | 400 | 21.45px | normal | <span> |
| type.utility-13px | **Geist** | 13px | 400 | 17.875px | normal | <a> |
| type.body-16px | **Geist** | 16px | 500 | 24px | -0.16px | <a> and <h3> |
| type.utility-13px | **Geist** | 13px | 400 | 21.45px | normal | <div> |
| type.body-14px | **Geist** | 14px | 400 | 22.75px | normal | <p> |
| type.body-20px | **Geist** | 20px | 500 | 28px | -0.4px | <a> and <h2> |
| type.utility-12px | **Geist** | 12px | 400 | 16px | normal | <p> and <a> |
| type.utility-12px | **System** | 12px | 500 | 17.1429px | normal | <code> |
| type.body-14px | **Geist** | 14px | 500 | 20px | normal | <a> in the aside |
| type.utility-11.5px | **Geist** | 11.5px | 500 | 16.4286px | normal | <a> in the nav |
| type.utility-12px | **Geist** | 12px | 400 | 19.5px | normal | <p> |
| type.utility-11px | **Geist** | 11px | 400 | 15.125px | normal | <span> in the nav |
| type.body-14px | **Geist** | 14px | 500 | 23.8px | normal | <a> |
| type.utility-13px | **Geist** | 13px | 600 | 16.25px | -0.13px | <span> in the nav |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `0px 14px 0px 42px` | padding | page content |
| `6px 10px 6px 8px` | padding | page content |
| `0px 16px` | padding | page content |
| `8px 16px` | padding | page content |
| `12px 16px` | padding | page content |
| `8px 12px` | padding | page content |
| `4px 0px 4px 12px` | padding | page content |
| `4px 0px` | margin | page content |

### Shape and depth

The captured pages use `0px none 6px`, `0px none 10px`, `0px none 8px`, `1px solid 10px`, and `0px none 14px` border treatments.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#000000`, `#262626`, and `#2b7fff`. Text colors include `#fafafa`, `#cdd6f4`, and `#a1a1a1`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Geist** and **System**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `0px 14px 0px 42px`, `6px 10px 6px 8px`, `0px 16px`, `8px 16px`, and `12px 16px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#000000`, `#262626`, and `#2b7fff`. No structured gradient or shadow treatment is established.

## Components and states

The captured pages include repeated styling on <div>, <a>, <span>, <p>, <li>, <h3>, <h2>, and <ul> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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
- `#fafafa`
- `#cdd6f4`
- `#262626`
- `#2b7fff`
- `#a1a1a1`
- `#94e2d5`
- `#f5c2e7`
- `#a6e3a1`
- `#f9e2af`
- `#cba6f7`

## Typography captured from assistant-ui.com

- **Geist** — weight 400 · size 14px
- **System** — weight 400 · size 13px

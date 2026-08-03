# How dany.works is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/dany.works-design)

Last updated: 2026-08-03

## Captured pages

[![dany works on](https://pin.fontofweb.com/8350?format=jpg)](https://design.withfudge.com/share/pin-8350)

[dany works on](https://design.withfudge.com/share/pin-8350)

[![dany works on](https://pin.fontofweb.com/8349?format=jpg)](https://design.withfudge.com/share/pin-8349)

[dany works on](https://design.withfudge.com/share/pin-8349)

[![dany works on](https://pin.fontofweb.com/8348?format=jpg)](https://design.withfudge.com/share/pin-8348)

[dany works on](https://design.withfudge.com/share/pin-8348)

[![dany works on](https://pin.fontofweb.com/8347?format=jpg)](https://design.withfudge.com/share/pin-8347)

[dany works on](https://design.withfudge.com/share/pin-8347)

[![dany works on](https://pin.fontofweb.com/8346?format=jpg)](https://design.withfudge.com/share/pin-8346)

[dany works on](https://design.withfudge.com/share/pin-8346)

[![dany works on](https://pin.fontofweb.com/8345?format=jpg)](https://design.withfudge.com/share/pin-8345)

[dany works on](https://design.withfudge.com/share/pin-8345)

[![dany works on](https://pin.fontofweb.com/8344?format=jpg)](https://design.withfudge.com/share/pin-8344)

[dany works on](https://design.withfudge.com/share/pin-8344)

## Overview

dany.works presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#000000`, `#1a1a1a`, and `#b4b4b4`, with typography led by **Fragment Mono**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.surface | `#000000` | surface on page content |
| color.text | `#1a1a1a` | text on page content |
| color.text | `#b4b4b4` | text on page content |
| color.text | `#888888` | text on page content |
| color.text | `#404040` | text on page content |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-14px | **Fragment Mono** | 14px | 400 | 23.8px | normal | <div>, <p>, <a>, and <span> |
| type.utility-11px | **Fragment Mono** | 11px | 400 | 18.7px | normal | <div> |
| type.body-14px | **Fragment Mono** | 14px | 400 | 14px | normal | <span> and <div> |
| type.utility-10px | **Fragment Mono** | 10px | 500 | 17px | 0.7px | <div> |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `24px` | padding | page content |
| `6px 0px 0px` | margin | page content |
| `0px 0px 32px` | margin | page content |
| `4px 0px` | padding | page content |
| `0px 0px 6px` | margin | page content |
| `0px 0px 28px` | margin | page content |

### Shape and depth

No structured border, gradient, or shadow treatment was returned.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#000000`. Text colors include `#1a1a1a`, `#b4b4b4`, and `#888888`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Fragment Mono**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `24px`, `6px 0px 0px`, `0px 0px 32px`, `4px 0px`, and `0px 0px 6px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#000000`. No structured gradient or shadow treatment is established.

## Components and states

The captured pages include repeated styling on <div>, <p>, <a>, and <span> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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
- `#1a1a1a`
- `#b4b4b4`
- `#888888`
- `#404040`

## Typography captured from dany.works

- **Fragment Mono** — weight 400 · size 14px

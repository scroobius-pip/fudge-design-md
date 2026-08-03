# How bolt.new is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/bolt.new-design)

Last updated: 2026-08-03

## Captured pages

[![Bolt AI builder: Websites, apps & prototypes](https://pin.fontofweb.com/6002?format=jpg)](https://design.withfudge.com/share/pin-6002)

[Bolt AI builder: Websites, apps & prototypes](https://design.withfudge.com/share/pin-6002)

[![Bolt AI builder: Websites, apps & prototypes](https://pin.fontofweb.com/6001?format=jpg)](https://design.withfudge.com/share/pin-6001)

[Bolt AI builder: Websites, apps & prototypes](https://design.withfudge.com/share/pin-6001)

[![Bolt AI builder: Websites, apps & prototypes](https://pin.fontofweb.com/6000?format=jpg)](https://design.withfudge.com/share/pin-6000)

[Bolt AI builder: Websites, apps & prototypes](https://design.withfudge.com/share/pin-6000)

[![Bolt AI builder: Websites, apps & prototypes](https://pin.fontofweb.com/5999?format=jpg)](https://design.withfudge.com/share/pin-5999)

[Bolt AI builder: Websites, apps & prototypes](https://design.withfudge.com/share/pin-5999)

## Overview

bolt.new presents a mixed light and dark surface treatment in the captured pages. The system is anchored by `#ffffff`, `#171719`, and `#fefeff`, with typography led by **Inter**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#ffffff` | text on page content |
| color.surface | `#171719` | surface on page content |
| color.text | `#fefeff` | text on page content in the button |
| color.text | `#73737b` | text on page content in the button |
| color.text | `#a3a3ac` | text on page content |
| color.surface | `#1e1e21` | surface on page content |
| color.text | `#1488fc` | text on page content |
| color.text | `#2ba6ff` | text on page content in the button |
| color.text | `#525252` | text on page content |
| color.surface | `#2c2c30` | surface on page content in the button |
| color.surface | `#3b82f6` | surface on page content |
| color.surface | `#8b5cf6` | surface on page content |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **Inter** | 16px | 400 | 24px | normal | <div> and <p> |
| type.body-14px | **Inter** | 14px | 400 | 20px | normal | <div> and <button> in the button |
| type.body-18px | **Inter** | 18px | 400 | 28px | normal | <p> |
| type.body-14px | **Inter** | 14px | 500 | 20px | normal | <div> in the button, <button> in the button, and <span> in the button |
| type.body-14px | **Inter** | 14px | 400 | 24px | normal | <p> |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `0px 24px` | padding | page content |
| `0px 1072.5px` | margin | page content |
| `0px 16px` | padding | page content |
| `0px 0px 64px` | margin | page content |
| `64px 40px 40px` | padding | page content |
| `32px 32px 0px` | padding | page content |
| `0px 1136.5px` | margin | page content |
| `0px 32px 32px` | padding | page content |

### Shape and depth

The captured pages use `1px solid 12px`, `1px solid 12px 12px 12px 24px`, `1px solid 12px 12px 24px`, `0px none 6px`, `1px solid 12px 24px 12px 12px`, `0px none 8px`, `1px solid 9999px`, and `0px none 4px` border treatments. Recorded gradients include `linear-gradient(90deg, rgba(0, 0, 0, 0)`.

## Colors

The visual system is mixed light and dark surface treatment. Surface colors include `#171719`, `#1e1e21`, and `#2c2c30`. Text colors include `#ffffff`, `#fefeff`, and `#73737b`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Inter**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `0px 24px`, `0px 1072.5px`, `0px 16px`, `0px 0px 64px`, and `64px 40px 40px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is mixed light and dark surface treatment. Surface treatment centers on `#171719`, `#1e1e21`, `#2c2c30`, and `#3b82f6`. Depth is supported by the returned gradients.

## Components and states

The captured pages include repeated styling on <p>, <div>, <button>, <span>, <a>, <h3>, and <h2> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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

- `#ffffff`
- `#171719`
- `#fefeff`
- `#73737b`
- `#a3a3ac`
- `#1e1e21`
- `#1488fc`
- `#2ba6ff`
- `#525252`
- `#2c2c30`
- `#3b82f6`
- `#8b5cf6`

## Typography captured from bolt.new

- **Inter** — weight 400 · size 14px

# How duties.xyz is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/duties.xyz-design)

Last updated: 2026-08-03

## Captured pages

[![Duties.xyz](https://pin.fontofweb.com/9565?format=jpg)](https://design.withfudge.com/share/pin-9565)

[Duties.xyz](https://design.withfudge.com/share/pin-9565)

[![Duties.xyz](https://pin.fontofweb.com/9564?format=jpg)](https://design.withfudge.com/share/pin-9564)

[Duties.xyz](https://design.withfudge.com/share/pin-9564)

[![Duties.xyz](https://pin.fontofweb.com/9563?format=jpg)](https://design.withfudge.com/share/pin-9563)

[Duties.xyz](https://design.withfudge.com/share/pin-9563)

[![Duties.xyz](https://pin.fontofweb.com/9562?format=jpg)](https://design.withfudge.com/share/pin-9562)

[Duties.xyz](https://design.withfudge.com/share/pin-9562)

[![Duties.xyz](https://pin.fontofweb.com/9561?format=jpg)](https://design.withfudge.com/share/pin-9561)

[Duties.xyz](https://design.withfudge.com/share/pin-9561)

[![Duties.xyz](https://pin.fontofweb.com/9560?format=jpg)](https://design.withfudge.com/share/pin-9560)

[Duties.xyz](https://design.withfudge.com/share/pin-9560)

## Overview

duties.xyz presents a predominantly light surface treatment in the captured pages. The system is anchored by `#000000`, `#f1f0ee`, and `#0000ee`, with typography led by **System**, **As Therma**, **Applesystem**, and **Pp Neue Montreal Mono**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#000000` | text on page content |
| color.surface | `#f1f0ee` | surface on page content |
| color.text | `#0000ee` | text on page content in the main |
| color.text | `#252525` | text on page content in the main |
| color.surface | `#bfbfbf` | surface on page content in the nav |
| color.surface | `#dddddd` | surface on page content in the main |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.utility-12px | **System** | 12px | 400 | normal | normal | <body>, <div> in the main, <section> in the main, <main> in the main, <div>, <nav> in the nav, <img> in the main, <a> in the main, <div> in the nav, <a> in the nav, <li> in the main, <ul> in the main, <div> in the footer, <footer> in the footer, <figure> in the footer, <svg> in the footer, and <a> in the footer |
| type.display-240px | **As Therma** | 240px | 400 | 192px | -16.2px | <h1> in the main |
| type.display-180px | **As Therma** | 180px | 400 | 144px | -12.15px | <h1> in the main |
| type.body-14px | **Applesystem** | 14px | 400 | normal | normal | <div> |
| type.body-14px | **Pp Neue Montreal Mono** | 14px | 500 | 16.1px | normal | <h4> in the main, <h4> in the footer, and <h4> in the nav |
| type.utility-12px | **Pp Neue Montreal Mono** | 12px | 500 | 12px | normal | <h4> in the main |
| type.body-14px | **Pp Neue Montreal Mono** | 14px | 400 | 14px | normal | <h4> in the main and <h4> in the footer |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `10px` | gap | page content |
| `10px` | row-gap | page content |
| `10px` | column-gap | page content |
| `10px` | padding-bottom | page content |
| `10px` | padding-top | page content |
| `10px` | padding-right | page content |
| `10px` | padding-left | page content |
| `10px` | padding | page content |

### Shape and depth

The captured pages use `0px none 8px`, `0px none 4px`, and `0px none 32px` border treatments.

## Colors

The visual system is predominantly light surface treatment. Surface colors include `#f1f0ee`, `#bfbfbf`, and `#dddddd`. Text colors include `#000000`, `#0000ee`, and `#252525`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **System**, **As Therma**, **Applesystem**, and **Pp Neue Montreal Mono**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `10px`, `10px`, `10px`, `10px`, and `10px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly light surface treatment. Surface treatment centers on `#f1f0ee`, `#bfbfbf`, and `#dddddd`. No structured gradient or shadow treatment is established.

## Components and states

The captured pages include repeated styling on <div>, <body>, <section>, <main>, <nav>, <h1>, <h4>, and <img> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

## Responsive behavior

The captured token set does not establish breakpoint values or mobile behavior. Validate stacking, navigation changes, image treatment, and type scaling against the representative captures before implementing a responsive adaptation.

## Practical implementation guidance

- Preserve the light surface relationship and the measured type hierarchy before adding decorative treatment.
- Start from the returned typography, spacing, color, and border values; name any new scale or semantic role as an adaptation rather than as a source fact.
- Keep the captured font families separate from licensing decisions.
- Use screenshots to validate component anatomy, responsive behavior, focus treatment, and motion before shipping.
- Avoid introducing gradients or shadows beyond the captured treatment; none are established.

## Scope note

The guide uses representative captured pages. The evidence supports the values and observations above; it does not establish component semantics, interaction states, motion timing, breakpoint rules, font licensing, or a complete source stylesheet.

## Colors

- `#000000`
- `#f1f0ee`
- `#0000ee`
- `#252525`
- `#bfbfbf`
- `#dddddd`

## Typography captured from duties.xyz

- **System** — weight 400 · size 12px
- **As Therma** — weight 400 · size 240px
- **Applesystem** — weight 400 · size 14px
- **Pp Neue Montreal Mono** — weight 500 · size 14px

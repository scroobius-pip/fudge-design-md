# How cargo.site is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/cargo.site-design)

Last updated: 2026-08-03

## Captured pages

[![Cargo](https://pin.fontofweb.com/6371?format=jpg)](https://design.withfudge.com/share/pin-6371)

[Cargo](https://design.withfudge.com/share/pin-6371)

[![Cargo: Templates](https://pin.fontofweb.com/6370?format=jpg)](https://design.withfudge.com/share/pin-6370)

[Cargo: Templates](https://design.withfudge.com/share/pin-6370)

[![Cargo: Templates](https://pin.fontofweb.com/6369?format=jpg)](https://design.withfudge.com/share/pin-6369)

[Cargo: Templates](https://design.withfudge.com/share/pin-6369)

[![Cargo: Templates](https://pin.fontofweb.com/6368?format=jpg)](https://design.withfudge.com/share/pin-6368)

[Cargo: Templates](https://design.withfudge.com/share/pin-6368)

[![Cargo](https://pin.fontofweb.com/6367?format=jpg)](https://design.withfudge.com/share/pin-6367)

[Cargo](https://design.withfudge.com/share/pin-6367)

## Overview

cargo.site presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#ffffff`, `#000000`, and `#111111`, with typography led by **Cargo Diatype Plus** and **Sf Pro**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.surface | `#ffffff` | surface on page content in the button |
| color.surface | `#000000` | surface on page content |
| color.surface | `#111111` | surface on page content |
| color.surface | `#030303` | surface on page content |
| color.surface | `#141414` | surface on page content |
| color.text | `#dcdcdc` | text on page content |
| color.text | `#d9d9d9` | text on page content |
| color.text | `#0000ee` | text on page content |
| color.text | `#707070` | text on page content |
| color.text | `#a1a1a1` | text on page content in the button |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-14.5px | **Cargo Diatype Plus** | 14.5px | 400 | 23.925px | normal | <div>, <a>, and <span> |
| type.body-14.5px | **Cargo Diatype Plus** | 14.5px | 400 | 16px | normal | <div> and <a> |
| type.body-14.5px | **Sf Pro** | 14.5px | 400 | 23.925px | normal | <div> |
| type.body-14.5px | **Cargo Diatype Plus** | 14.5px | 400 | 0px | normal | <div> |
| type.body-14.5px | **Cargo Diatype Plus** | 14.5px | 400 | 16.675px | normal | <div> and <span> |
| type.body-14.5px | **Cargo Diatype Plus** | 14.5px | 400 | 14.5px | normal | <a>, <button> in the button, and <div> |
| type.display-60.5625px | **Cargo Diatype Plus** | 60.5625px | 500 | 60.5625px | -1.51406px | <span>, <h1>, <a>, and <h2> |
| type.body-14.5px | **Cargo Diatype Plus** | 14.5px | 400 | 18.85px | normal | <span> |
| type.utility-12px | **Sf Pro** | 12px | 400 | 16.8px | normal | <div> |
| type.body-17px | **Sf Pro** | 17px | 400 | 13.6px | normal | <div> |
| type.body-14.5px | **Sf Pro** | 14.5px | 400 | 14.5px | normal | <a> in the button and <div> in the button |
| type.body-14.5px | **Cargo Diatype Plus** | 14.5px | 400 | 29px | normal | <div> in the button |
| type.body-24.225px | **Cargo Diatype Plus** | 24.225px | 300 | 24.225px | -1.51406px | <span> |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `40px 26px 0px` | padding | page content |
| `0px -15px 0px 0px` | margin | page content |
| `37.5px 37.5px 105px` | padding | page content |
| `0px 0px 189.2px` | padding | page content |
| `41px 0px 0px` | padding | page content |
| `-40px 0px -17.5px` | margin | page content |
| `15px` | padding | page content |
| `0px 0px 0px 1px` | margin | page content |

### Shape and depth

The captured pages use `0px none 5px` border treatments.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#ffffff`, `#000000`, and `#111111`. Text colors include `#dcdcdc`, `#d9d9d9`, and `#0000ee`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Cargo Diatype Plus** and **Sf Pro**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `40px 26px 0px`, `0px -15px 0px 0px`, `37.5px 37.5px 105px`, `0px 0px 189.2px`, and `41px 0px 0px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#ffffff`, `#000000`, `#111111`, and `#030303`. No structured gradient or shadow treatment is established.

## Components and states

The captured pages include repeated styling on <div>, <a>, <button>, <span>, <h1>, and <h2> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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

- `#ffffff`
- `#000000`
- `#111111`
- `#030303`
- `#141414`
- `#dcdcdc`
- `#d9d9d9`
- `#0000ee`
- `#707070`
- `#a1a1a1`

## Typography captured from cargo.site

- **Cargo Diatype Plus** — weight 400 · size 14.5px
- **Sf Pro** — weight 400 · size 14.5px

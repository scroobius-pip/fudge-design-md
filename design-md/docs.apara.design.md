# How docs.apara.design is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/docs.apara.design-design)

Last updated: 2026-08-03

## Captured pages

[![Apara Docs](https://pin.fontofweb.com/7987?format=jpg)](https://design.withfudge.com/share/pin-7987)

[Apara Docs](https://design.withfudge.com/share/pin-7987)

[![Apara Docs](https://pin.fontofweb.com/7986?format=jpg)](https://design.withfudge.com/share/pin-7986)

[Apara Docs](https://design.withfudge.com/share/pin-7986)

## Overview

docs.apara.design presents a predominantly light surface treatment in the captured pages. The system is anchored by `#000000`, `#ffffff`, and `#f8f8f8`, with typography led by **System**, **Inter**, and **A 8 Vp Nyp Lzcud Gbirn 8 Oe Wq Belq**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#000000` | text on page content |
| color.surface | `#ffffff` | surface on page content |
| color.surface | `#f8f8f8` | surface on page content |
| color.text | `#707070` | text on page content |
| color.text | `#0000ee` | text on page content |
| color.surface | `#f9f9f9` | surface on page content |
| color.text | `#757575` | text on page content |
| color.text | `#007cff` | text on page content |
| color.text | `#a5a5a5` | text on page content |
| color.text | `#b2b2b2` | text on page content |
| color.text | `#646464` | text on page content |
| color.surface | `#ededed` | surface on page content |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.utility-12px | **System** | 12px | 400 | normal | normal | <div> and <a> |
| type.body-14px | **Inter** | 14px | 400 | 18px | normal | <p> and <li> |
| type.body-14px | **Inter** | 14px | 500 | 16px | normal | <p> |
| type.body-14px | **Inter** | 14px | 500 | 32px | normal | <p> |
| type.display-35px | **Inter** | 35px | 500 | 38px | normal | <p> |
| type.utility-12px | **Inter** | 12px | 500 | 28px | normal | <p> |
| type.utility-12px | **Inter** | 12px | 500 | 14px | normal | <p> |
| type.body-14px | **A 8 Vp Nyp Lzcud Gbirn 8 Oe Wq Belq** | 14px | 400 | normal | normal | <button> in the button |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `0px 12px` | padding | page content |
| `0px 0px 0px 14px` | padding | page content |

### Shape and depth

The captured pages use `0px none 10px` and `1px solid 999px` border treatments.

## Colors

The visual system is predominantly light surface treatment. Surface colors include `#ffffff`, `#f8f8f8`, and `#f9f9f9`. Text colors include `#000000`, `#707070`, and `#0000ee`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **System**, **Inter**, and **A 8 Vp Nyp Lzcud Gbirn 8 Oe Wq Belq**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `0px 12px` and `0px 0px 0px 14px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly light surface treatment. Surface treatment centers on `#ffffff`, `#f8f8f8`, `#f9f9f9`, and `#ededed`. No structured gradient or shadow treatment is established.

## Components and states

The captured pages include repeated styling on <div>, <a>, <p>, <li>, and <button> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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
- `#ffffff`
- `#f8f8f8`
- `#707070`
- `#0000ee`
- `#f9f9f9`
- `#757575`
- `#007cff`
- `#a5a5a5`
- `#b2b2b2`
- `#646464`
- `#ededed`
- `#d9d9d9`

## Typography captured from docs.apara.design

- **System** — weight 400 · size 12px
- **Inter** — weight 500 · size 12px
- **A 8 Vp Nyp Lzcud Gbirn 8 Oe Wq Belq** — weight 400 · size 14px

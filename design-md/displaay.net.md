# How displaay.net is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/displaay.net-design)

Last updated: 2026-08-03

## Captured pages

[![Season - Displaay Type Foundry](https://pin.fontofweb.com/9585?format=jpg)](https://design.withfudge.com/share/pin-9585)

[Season - Displaay Type Foundry](https://design.withfudge.com/share/pin-9585)

[![Matter - Displaay Type Foundry](https://pin.fontofweb.com/3164?format=jpg)](https://design.withfudge.com/share/pin-3164)

[Matter - Displaay Type Foundry](https://design.withfudge.com/share/pin-3164)

## Overview

displaay.net presents a mixed light and dark surface treatment in the captured pages. The system is anchored by `#000000`, `#ffffff`, and `#e3e3e3`, with typography led by **Saans** and **Applesystem**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#000000` | text on page content |
| color.surface | `#ffffff` | surface on page content |
| color.surface | `#e3e3e3` | surface on page content in the footer |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-15px | **Saans** | 15px | 400 | 19.5px | 0.3px | <body>, <div>, <footer> in the footer, <div> in the footer, <section>, <a> in the footer, <li> in the footer, <ul> in the footer, <p> in the footer, <svg> in the button, <button> in the button, and <svg> in the footer |
| type.display-200px | **Saans** | 200px | 400 | 180px | -8px | <p> in the footer |
| type.utility-10px | **Saans** | 10px | 400 | 15px | normal | <html> |
| type.body-14px | **Applesystem** | 14px | 400 | normal | normal | <div> |
| type.display-120px | **Saans** | 120px | 400 | 180px | -8px | <span> in the footer |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `13px 0px 15px` | padding | page content |
| `13px` | padding-top | page content |
| `15px` | padding-bottom | page content |
| `0px 20px` | padding | page content |
| `20px` | padding-right | page content |
| `20px` | padding-left | page content |
| `10px` | gap | page content |
| `10px` | row-gap | page content |

### Shape and depth

The captured pages use `1px solid 10px` border treatments.

## Colors

The visual system is mixed light and dark surface treatment. Surface colors include `#ffffff` and `#e3e3e3`. Text colors include `#000000`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Saans** and **Applesystem**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `13px 0px 15px`, `13px`, `15px`, `0px 20px`, and `20px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is mixed light and dark surface treatment. Surface treatment centers on `#ffffff` and `#e3e3e3`. No structured gradient or shadow treatment is established.

## Components and states

The captured pages include repeated styling on <div>, <body>, <html>, <footer>, <section>, <p>, <a>, and <li> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

## Responsive behavior

The captured token set does not establish breakpoint values or mobile behavior. Validate stacking, navigation changes, image treatment, and type scaling against the representative captures before implementing a responsive adaptation.

## Practical implementation guidance

- Preserve the mixed light/dark surface relationship and the measured type hierarchy before adding decorative treatment.
- Start from the returned typography, spacing, color, and border values; name any new scale or semantic role as an adaptation rather than as a source fact.
- Keep the captured font families separate from licensing decisions.
- Use screenshots to validate component anatomy, responsive behavior, focus treatment, and motion before shipping.
- Avoid introducing gradients or shadows beyond the captured treatment; none are established.

## Scope note

The guide uses representative captured pages. The evidence supports the values and observations above; it does not establish component semantics, interaction states, motion timing, breakpoint rules, font licensing, or a complete source stylesheet.

## Colors

- `#000000`
- `#ffffff`
- `#e3e3e3`

## Typography captured from displaay.net

- **Saans** — weight 400 · size 15px
- **Applesystem** — weight 400 · size 14px

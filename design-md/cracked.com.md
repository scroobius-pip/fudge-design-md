# How cracked.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/cracked.com-design)

Last updated: 2026-08-03

## Captured pages

[![Movies & TV | Cracked.com](https://pin.fontofweb.com/8242?format=jpg)](https://design.withfudge.com/share/pin-8242)

[Movies & TV | Cracked.com](https://design.withfudge.com/share/pin-8242)

[![Cracked.com - America's Only Humor Site | Cracked.com](https://pin.fontofweb.com/8241?format=jpg)](https://design.withfudge.com/share/pin-8241)

[Cracked.com - America's Only Humor Site | Cracked.com](https://design.withfudge.com/share/pin-8241)

## Overview

cracked.com presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#000000`, `#f5f5f5`, and `#005f6b`, with typography led by **Neuekabel**, **Open Sans**, and **Source Serif 4**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.surface | `#000000` | surface on page content in the main |
| color.surface | `#f5f5f5` | surface on page content |
| color.text | `#005f6b` | text on page content in the main |
| color.text | `#656565` | text on page content in the main |
| color.surface | `#ffcc00` | surface on page content in the main |
| color.surface | `#eeeeee` | surface on page content in the main |
| color.text | `#ffffff` | text on page content in the button |
| color.surface | `#ffd772` | surface on page content in the main |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.heading-16px | **Neuekabel** | 16px | 700 | 16px | normal | <div> in the main, <div>, <button> in the button, and <a> in the main |
| type.heading-22px | **Neuekabel** | 22px | 900 | 28px | normal | <h2> in the main and <a> in the main |
| type.heading-20px | **Neuekabel** | 20px | 700 | 32px | normal | <h2> in the main and <a> in the main |
| type.body-16px | **Source Serif 4** | 16px | 400 | 28px | normal | <p> in the main |
| type.display-36px | **Neuekabel** | 36px | 900 | 40px | normal | <a> in the main and <h2> in the main |
| type.heading-16px | **Open Sans** | 16px | 700 | 16px | normal | <a> in the nav and <ul> in the nav |
| type.body-16px | **Open Sans** | 16px | 400 | 16px | normal | <a> in the nav |
| type.heading-30px | **Neuekabel** | 30px | 700 | 40px | normal | <a> in the main and <h2> in the main |
| type.heading-26px | **Neuekabel** | 26px | 700 | 26px | normal | <h3> in the main |
| type.body-22px | **Neuekabel** | 22px | 400 | 32px | normal | <a> in the main and <h2> in the main |
| type.heading-20px | **Neuekabel** | 20px | 700 | 24px | normal | <a> in the main and <h2> in the main |
| type.body-16px | **Source Serif 4** | 16px | 400 | 24px | normal | <p> in the main |
| type.utility-12px | **Neuekabel** | 12px | 700 | 26px | normal | <a> in the main |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `10px 0px 20px` | padding | page content |
| `5px 0px 0px` | padding | page content |
| `10px 0px` | padding | page content |
| `10px 0px 0px` | padding | page content |
| `10px` | padding | page content |
| `0px 10px` | padding | page content |
| `0px 282.5px` | margin | page content |
| `30px 0px 0px` | padding | page content |

### Shape and depth

The captured pages use `1px 0px 0px solid none none 0px` border treatments.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#000000`, `#f5f5f5`, and `#ffcc00`. Text colors include `#005f6b`, `#656565`, and `#ffffff`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Neuekabel**, **Source Serif 4**, and **Open Sans**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `10px 0px 20px`, `5px 0px 0px`, `10px 0px`, `10px 0px 0px`, and `10px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#000000`, `#f5f5f5`, `#ffcc00`, and `#eeeeee`. No structured gradient or shadow treatment is established.

## Components and states

The captured pages include repeated styling on <a>, <h2>, <p>, <h3>, <div>, <button>, and <ul> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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
- `#f5f5f5`
- `#005f6b`
- `#656565`
- `#ffcc00`
- `#eeeeee`
- `#ffffff`
- `#ffd772`

## Typography captured from cracked.com

- **Neuekabel** — weight 700 · size 30px
- **Open Sans** — weight 700 · size 16px
- **Source Serif 4** — weight 400 · size 16px

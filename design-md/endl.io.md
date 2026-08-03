# How endl.io is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/endl.io-design)

Last updated: 2026-08-03

## Captured pages

[![Endl - Global team spend, done right](https://pin.fontofweb.com/9905?format=jpg)](https://design.withfudge.com/share/pin-9905)

[Endl - Global team spend, done right](https://design.withfudge.com/share/pin-9905)

[![Endl - Global team spend, done right](https://pin.fontofweb.com/9904?format=jpg)](https://design.withfudge.com/share/pin-9904)

[Endl - Global team spend, done right](https://design.withfudge.com/share/pin-9904)

[![Endl - Global team spend, done right](https://pin.fontofweb.com/9903?format=jpg)](https://design.withfudge.com/share/pin-9903)

[Endl - Global team spend, done right](https://design.withfudge.com/share/pin-9903)

[![Endl - Global team spend, done right](https://pin.fontofweb.com/9902?format=jpg)](https://design.withfudge.com/share/pin-9902)

[Endl - Global team spend, done right](https://design.withfudge.com/share/pin-9902)

## Overview

endl.io presents a predominantly light surface treatment in the captured pages. The system is anchored by `#ffffff`, `#f4f4f5`, and `#245fff`, with typography led by **Dm Sans 9 Pt**, **System**, **Applesystem**, and **Times**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.surface | `#ffffff` | surface on page content |
| color.surface | `#f4f4f5` | surface on page content in the footer |
| color.surface | `#245fff` | surface on page content |
| color.surface | `#2c3a30` | surface on page content |
| color.text | `#000000` | text on page content |
| color.text | `#34343a` | text on page content in the footer |
| color.surface | `#dcf1ff` | surface on page content |
| color.text | `#181719` | text on page content in the footer |
| color.text | `#e2f5ee` | text on page content |
| color.shadow | `#0f172a` | shadow on page content |
| color.shadow | `#969696` | shadow on page content |
| color.surface | `#2e66f1` | surface on page content in the button |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **Dm Sans 9 Pt** | 16px | 400 | 24px | normal | <section>, <div>, <body>, <div> in the footer, <footer> in the footer, <svg> in the footer, <img>, <li> in the footer, <ul> in the footer, <svg> in the button, <div> in the button, <button> in the button, <li>, <ul>, <span>, and <svg> |
| type.utility-12px | **Dm Sans 9 Pt** | 12px | 400 | 20px | normal | <p> in the footer |
| type.display-60px | **Dm Sans 9 Pt** | 60px | 600 | 66px | -2.4px | <h2> |
| type.body-16px | **Dm Sans 9 Pt** | 16px | 400 | normal | normal | <li> and <ul> |
| type.display-60px | **Dm Sans 9 Pt** | 60px | 600 | 63px | -1.8px | <h2> and <span> |
| type.body-14px | **Dm Sans 9 Pt** | 14px | 500 | 20px | normal | <a> in the footer |
| type.body-16px | **System** | 16px | 400 | normal | normal | <div> |
| type.display-64px | **Dm Sans 9 Pt** | 64px | 600 | 70.4px | -1.92px | <h2> |
| type.body-14px | **Applesystem** | 14px | 400 | normal | normal | <div> |
| type.body-16px | **Times** | 16px | 400 | 24px | normal | <html> |
| type.body-22px | **Dm Sans 9 Pt** | 22px | 500 | 33px | -0.44px | <p> |
| type.utility-12px | **Dm Sans 9 Pt** | 12px | 600 | 18px | 0.48px | <h3> in the footer |
| type.heading-18px | **Dm Sans 9 Pt** | 18px | 600 | 23.4px | -0.18px | <span> in the button |
| type.heading-18px | **Dm Sans 9 Pt** | 18px | 600 | 27.9px | normal | <li> |
| type.body-15px | **Dm Sans 9 Pt** | 15px | 500 | 23.25px | normal | <p> |
| type.heading-22px | **Dm Sans 9 Pt** | 22px | 700 | 33px | 2.64px | <span> |
| type.heading-14px | **Dm Sans 9 Pt** | 14px | 600 | 21px | normal | <button> in the button |
| type.body-14px | **Dm Sans 9 Pt** | 14px | 400 | normal | normal | <div> |
| type.utility-13px | **Dm Sans 9 Pt** | 13px | 700 | 19.5px | 1.3px | <span> |
| type.body-16px | **Dm Sans 9 Pt** | 16px | 500 | 24px | normal | <p> |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `80px` | padding-right | page content |
| `80px` | padding-left | page content |
| `0px 52.5px` | margin | page content |
| `52.5px` | margin-right | page content |
| `52.5px` | margin-left | page content |
| `80px` | padding-top | page content |
| `80px` | padding-bottom | page content |
| `16px` | gap | page content |

### Shape and depth

The captured pages use `1px 0px 0px solid 48px 48px 0px 0px`, `0px none 64px`, `1px solid 24px`, `0px none 10px`, `0px none 16px`, `0px none 3.35544e+07px`, `0px none 27.5px`, and `1px solid 3.35544e+07px` border treatments. Recorded shadows include `rgba(15, 23, 42, 0.1) 0px 8px 28px 0px`, `rgba(0, 0, 0, 0.2) 0px 4px 8px 0px`, and `rgba(150, 150, 150, 0.2) 0px 10px 30px 0px, rgba(150, 150, 150, 0.2) 0px 0px 0px 1px`.

## Colors

The visual system is predominantly light surface treatment. Surface colors include `#ffffff`, `#f4f4f5`, and `#245fff`. Text colors include `#000000`, `#34343a`, and `#181719`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Dm Sans 9 Pt**, **System**, **Applesystem**, and **Times**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `80px`, `80px`, `0px 52.5px`, `52.5px`, and `52.5px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly light surface treatment. Surface treatment centers on `#ffffff`, `#f4f4f5`, `#245fff`, and `#2c3a30`. Depth is supported by the returned shadows.

## Components and states

The captured pages include repeated styling on <div>, <html>, <section>, <footer>, <p>, <h2>, <h3>, and <a> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

## Responsive behavior

The captured token set does not establish breakpoint values or mobile behavior. Validate stacking, navigation changes, image treatment, and type scaling against the representative captures before implementing a responsive adaptation.

## Practical implementation guidance

- Preserve the light surface relationship and the measured type hierarchy before adding decorative treatment.
- Start from the returned typography, spacing, color, and border values; name any new scale or semantic role as an adaptation rather than as a source fact.
- Keep the captured font families separate from licensing decisions.
- Use screenshots to validate component anatomy, responsive behavior, focus treatment, and motion before shipping.
- Avoid introducing gradients or shadows beyond the captured treatment; the returned evidence includes those treatments.

## Scope note

The guide uses representative captured pages. The evidence supports the values and observations above; it does not establish component semantics, interaction states, motion timing, breakpoint rules, font licensing, or a complete source stylesheet.

## Colors

- `#ffffff`
- `#f4f4f5`
- `#245fff`
- `#2c3a30`
- `#000000`
- `#34343a`
- `#dcf1ff`
- `#181719`
- `#e2f5ee`
- `#0f172a`
- `#969696`
- `#2e66f1`
- `#232325`

## Typography captured from endl.io

- **Dm Sans 9 Pt** — weight 400 · size 16px
- **System** — weight 400 · size 16px
- **Applesystem** — weight 400 · size 14px
- **Times** — weight 400 · size 16px

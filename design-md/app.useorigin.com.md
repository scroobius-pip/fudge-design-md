# How app.useorigin.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/app.useorigin.com-design)

Last updated: 2026-08-03

## Captured pages

[![Origin Financial](https://pin.fontofweb.com/8926?format=jpg)](https://design.withfudge.com/share/pin-8926)

[Origin Financial](https://design.withfudge.com/share/pin-8926)

[![Origin Financial](https://pin.fontofweb.com/8925?format=jpg)](https://design.withfudge.com/share/pin-8925)

[Origin Financial](https://design.withfudge.com/share/pin-8925)

[![Origin Financial](https://pin.fontofweb.com/8924?format=jpg)](https://design.withfudge.com/share/pin-8924)

[Origin Financial](https://design.withfudge.com/share/pin-8924)

## Overview

app.useorigin.com presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#ffffff`, `#000000`, and `#050505`, with typography led by **Inter 18 Pt**, **Lyon App**, and **Roboto Mono**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#ffffff` | text on page content in the aside |
| color.surface | `#000000` | surface on page content in the aside |
| color.surface | `#050505` | surface on page content in the button |
| color.text | `#01000a` | text on page content in the main |
| color.text | `#00b3dd` | text on page content in the main |
| color.text | `#847dff` | text on page content in the button |
| color.surface | `#121212` | surface on page content in the button |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **Inter 18 Pt** | 16px | 400 | normal | normal | <div> in the aside, <ul> in the nav, <div> in the header, <div>, and <div> in the main |
| type.body-14px | **Inter 18 Pt** | 14px | 400 | 20.006px | -0.144px | <li> in the nav, <div> in the nav, <button> in the button, <span> in the nav, <p>, and <p> in the main |
| type.utility-12px | **Inter 18 Pt** | 12px | 400 | 20.004px | -0.112px | <a>, <p>, <p> in the main, and <a> in the main |
| type.display-96px | **Lyon App** | 96px | 400 | 103.968px | -2.4px | <h1> in the main and <h1> |
| type.body-16px | **Inter 18 Pt** | 16px | 400 | 24px | -0.16px | <button> in the button |
| type.display-34px | **Lyon App** | 34px | 400 | 39.984px | -0.8px | <h4> |
| type.utility-13px | **Inter 18 Pt** | 13px | 400 | 19.5px | normal | <div> in the main, <span> in the main, and <div> |
| type.display-48px | **Lyon App** | 48px | 400 | 56.016px | -1.6px | <h3> and <h3> in the main |
| type.body-24px | **Inter 18 Pt** | 24px | 400 | 28.008px | -0.24px | <h5> in the header |
| type.utility-10px | **Roboto Mono** | 10px | 500 | 16px | 1.6px | <span> |
| type.body-14px | **Roboto Mono** | 14px | 400 | 18px | 1px | <button> in the button |
| type.body-16px | **Inter 18 Pt** | 16px | 400 | 23px | -0.16px | <div> in the main |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `16px` | padding | page content |
| `16px 48px` | padding | page content |
| `56px 0px 16px` | padding | page content |
| `12px 24px` | padding | page content |
| `16px 0px 0px` | padding | page content |
| `0px 4.5px` | margin | page content |
| `24px 0px 0px` | padding | page content |
| `0px 0px 24px` | margin | page content |

### Shape and depth

The captured pages use `0px none 16px`, `0px none 4px`, `0px none 8px`, `1px solid 4px`, `1px solid 8px`, and `1px solid 50%` border treatments.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#000000`, `#050505`, and `#121212`. Text colors include `#ffffff`, `#01000a`, and `#00b3dd`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Inter 18 Pt**, **Lyon App**, and **Roboto Mono**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `16px`, `16px 48px`, `56px 0px 16px`, `12px 24px`, and `16px 0px 0px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#000000`, `#050505`, and `#121212`. No structured gradient or shadow treatment is established.

## Components and states

The captured pages include repeated styling on <div>, <li>, <ul>, <button>, <span>, <h5>, <h1>, and <p> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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
- `#050505`
- `#01000a`
- `#00b3dd`
- `#847dff`
- `#121212`

## Typography captured from app.useorigin.com

- **Inter 18 Pt** — weight 400 · size 16px
- **Lyon App** — weight 400 · size 96px
- **Roboto Mono** — weight 400 · size 14px

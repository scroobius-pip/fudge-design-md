# How app.squareup.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/app.squareup.com-design)

Last updated: 2026-08-03

## Captured pages

[![Square: Sign in to Your Dashboard & Manage your Business](https://pin.fontofweb.com/9725?format=jpg)](https://design.withfudge.com/share/pin-9725)

[Square: Sign in to Your Dashboard & Manage your Business](https://design.withfudge.com/share/pin-9725)

[![Square: Sign in to Your Dashboard & Manage your Business](https://pin.fontofweb.com/9724?format=jpg)](https://design.withfudge.com/share/pin-9724)

[Square: Sign in to Your Dashboard & Manage your Business](https://design.withfudge.com/share/pin-9724)

## Overview

app.squareup.com presents a predominantly light surface treatment in the captured pages. The system is anchored by `#101010`, `#ffffff`, and `#000000`, with typography led by **Square Sans Vf**, **Cash Sans**, and **Applesystem**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#101010` | text on page content |
| color.surface | `#ffffff` | surface on page content |
| color.text | `#000000` | text on page content |
| color.text | `#666666` | text on page content in the main |
| color.surface | `#fafafa` | surface on page content |
| color.shadow | `#808080` | shadow on page content |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **Square Sans Vf** | 16px | 400 | normal | normal | <div>, <body>, <img>, <nav> in the nav, <header> in the header, <main> in the main, <form> in the main, and <div> in the main |
| type.display-32.634px | **Square Sans Vf** | 32.634px | 600 | 52.022px | normal | <span> |
| type.body-16px | **Cash Sans** | 16px | 400 | normal | normal | <div> |
| type.body-14px | **Applesystem** | 14px | 400 | normal | normal | <div> |
| type.body-16px | **Applesystem** | 16px | 400 | normal | normal | <html> |
| type.display-32px | **Square Sans Vf** | 32px | 600 | 40px | normal | <h1> |
| type.body-19px | **Square Sans Vf** | 19px | 400 | 28px | normal | <p> |
| type.body-16px | **Square Sans Vf** | 16px | 400 | 24px | normal | <label> in the main |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `24px` | padding-bottom | page content |
| `24px 0px` | padding | page content |
| `24px` | padding-top | page content |
| `48px 64px` | padding | page content |
| `48px` | padding-top | page content |
| `64px` | padding-right | page content |
| `48px` | padding-bottom | page content |
| `64px` | padding-left | page content |

### Shape and depth

The captured pages use `0px none 6px` and `0px none 2px` border treatments. Recorded shadows include `rgba(0, 0, 0, 0.05) 1px 0px 0px 0px inset`, `rgba(0, 0, 0, 0.4) 0px 8px 32px 0px`, and `rgb(128, 128, 128) 0px 0px 5px 0px`.

## Colors

The visual system is predominantly light surface treatment. Surface colors include `#ffffff` and `#fafafa`. Text colors include `#101010`, `#000000`, and `#666666`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Square Sans Vf**, **Cash Sans**, and **Applesystem**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `24px`, `24px 0px`, `24px`, `48px 64px`, and `48px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly light surface treatment. Surface treatment centers on `#ffffff` and `#fafafa`. Depth is supported by the returned shadows.

## Components and states

The captured pages include repeated styling on <div>, <html>, <body>, <span>, <img>, <nav>, <header>, and <main> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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

- `#101010`
- `#ffffff`
- `#000000`
- `#666666`
- `#fafafa`
- `#808080`

## Typography captured from app.squareup.com

- **Square Sans Vf** — weight 400 · size 16px
- **Cash Sans** — weight 400 · size 16px
- **Applesystem** — weight 400 · size 14px

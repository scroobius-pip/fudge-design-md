# How bkid.co is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/bkid.co-design)

Last updated: 2026-08-03

## Captured pages

[![10 Hangul Unit – B K I D](https://pin.fontofweb.com/10283?format=jpg)](https://design.withfudge.com/share/pin-10283)

[10 Hangul Unit – B K I D](https://design.withfudge.com/share/pin-10283)

[![10 Hangul Unit – B K I D](https://pin.fontofweb.com/10282?format=jpg)](https://design.withfudge.com/share/pin-10282)

[10 Hangul Unit – B K I D](https://design.withfudge.com/share/pin-10282)

## Overview

bkid.co presents a predominantly light surface treatment in the captured pages. The system is anchored by `#444444`, `#ffffff`, and `#888888`, with typography led by **Helvetica Neue**, **Applesystem**, **System**, and **Helvetica**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#444444` | text on page content |
| color.surface | `#ffffff` | surface on page content |
| color.text | `#888888` | text on page content in the main |
| color.text | `#000000` | text on page content |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-14px | **Helvetica Neue** | 14px | 400 | 22px | normal | <div>, <body>, <header> in the header, <div> in the main, <article> in the main, <main> in the main, <li> in the nav, <ul> in the nav, <div> in the nav, <nav> in the nav, <div> in the header, <img> in the header, <a> in the header, and <p> in the header |
| type.body-14px | **Helvetica Neue** | 14px | 400 | 24px | normal | <img> in the main and <p> in the main |
| type.body-14px | **Applesystem** | 14px | 400 | normal | normal | <div> |
| type.utility-10px | **System** | 10px | 400 | normal | normal | <html> |
| type.body-14px | **Helvetica** | 14px | 400 | 22px | 1px | <a> in the nav |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `21px` | margin-bottom | page content |
| `0px 63.5px` | margin | page content |
| `63.5px` | margin-right | page content |
| `63.5px` | margin-left | page content |
| `100px 0px 0px` | padding | page content |
| `100px` | padding-top | page content |
| `0px 0px 21px` | margin | page content |
| `5.6px 0px 0px` | margin | page content |

### Shape and depth

No structured border, gradient, or shadow treatment was returned.

## Colors

The visual system is predominantly light surface treatment. Surface colors include `#ffffff`. Text colors include `#444444`, `#888888`, and `#000000`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Helvetica Neue**, **Applesystem**, **System**, and **Helvetica**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `21px`, `0px 63.5px`, `63.5px`, `63.5px`, and `100px 0px 0px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly light surface treatment. Surface treatment centers on `#ffffff`. No structured gradient or shadow treatment is established.

## Components and states

The captured pages include repeated styling on <div>, <html>, <body>, <header>, <img>, <p>, <article>, and <main> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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

- `#444444`
- `#ffffff`
- `#888888`
- `#000000`

## Typography captured from bkid.co

- **Helvetica Neue** — weight 400 · size 14px
- **Applesystem** — weight 400 · size 14px
- **System** — weight 400 · size 10px
- **Helvetica** — weight 400 · size 14px

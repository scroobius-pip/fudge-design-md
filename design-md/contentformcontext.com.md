# How contentformcontext.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/contentformcontext.com-design)

Last updated: 2026-08-03

## Captured pages

[![CFC - SBS 8 News](https://pin.fontofweb.com/10405?format=jpg)](https://design.withfudge.com/share/pin-10405)

[CFC - SBS 8 News](https://design.withfudge.com/share/pin-10405)

[![CFC - SBS 8 News](https://pin.fontofweb.com/10404?format=jpg)](https://design.withfudge.com/share/pin-10404)

[CFC - SBS 8 News](https://design.withfudge.com/share/pin-10404)

## Overview

contentformcontext.com presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#000000`, `#999999`, and `#ffffff`, with typography led by **System**, **Aktiv Grotesk**, and **Applesystem**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#000000` | text on page content |
| color.text | `#999999` | text on page content in the main |
| color.text | `#ffffff` | text on page content in the header |
| color.surface | `#111111` | surface on page content |
| color.text | `#0000ee` | text on page content in the main |
| color.text | `#aeaeae` | text on page content in the nav |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **System** | 16px | 400 | normal | normal | <html>, <div>, <body>, <img> in the main, <div> in the main, <section> in the main, <main> in the main, <header> in the header, <div> in the nav, <nav> in the nav, <div> in the header, <svg> in the main, and <a> in the main |
| type.body-20px | **Aktiv Grotesk** | 20px | 400 | 26px | normal | <span> in the main and <div> in the main |
| type.display-35px | **Aktiv Grotesk** | 35px | 400 | 35px | normal | <div> in the header, <img> in the header, and <a> in the header |
| type.body-14px | **Applesystem** | 14px | 400 | normal | normal | <div> |
| type.body-30px | **Aktiv Grotesk** | 30px | 400 | 34px | normal | <h1> in the header |
| type.body-19px | **Aktiv Grotesk** | 19px | 400 | 19px | normal | <a> in the nav |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `0px 50.5938px` | margin | page content |
| `50.5938px` | margin-right | page content |
| `50.5938px` | margin-left | page content |
| `20px 0px 60px` | padding | page content |
| `20px` | padding-top | page content |
| `60px` | padding-bottom | page content |
| `0px 181.898px` | margin | page content |
| `181.898px` | margin-right | page content |

### Shape and depth

The captured pages use `0px none 60px` border treatments.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#111111`. Text colors include `#000000`, `#999999`, and `#ffffff`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **System**, **Aktiv Grotesk**, and **Applesystem**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `0px 50.5938px`, `50.5938px`, `50.5938px`, `20px 0px 60px`, and `20px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#111111`. No structured gradient or shadow treatment is established.

## Components and states

The captured pages include repeated styling on <div>, <html>, <body>, <img>, <section>, <main>, <header>, and <a> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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
- `#999999`
- `#ffffff`
- `#111111`
- `#0000ee`
- `#aeaeae`

## Typography captured from contentformcontext.com

- **System** — weight 400 · size 16px
- **Aktiv Grotesk** — weight 400 · size 19px
- **Applesystem** — weight 400 · size 14px

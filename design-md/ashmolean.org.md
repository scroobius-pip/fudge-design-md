# How ashmolean.org is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/ashmolean.org-design)

Last updated: 2026-08-03

## Captured pages

[![WORKING AT THE ASHMOLEAN | Ashmolean Museum](https://pin.fontofweb.com/6603?format=jpg)](https://design.withfudge.com/share/pin-6603)

[WORKING AT THE ASHMOLEAN | Ashmolean Museum](https://design.withfudge.com/share/pin-6603)

[![WORKING AT THE ASHMOLEAN | Ashmolean Museum](https://pin.fontofweb.com/6602?format=jpg)](https://design.withfudge.com/share/pin-6602)

[WORKING AT THE ASHMOLEAN | Ashmolean Museum](https://design.withfudge.com/share/pin-6602)

[![BRINGING HISTORY TO LIFE | 2025 ANNUAL APPEAL | Ashmolean Museum](https://pin.fontofweb.com/6601?format=jpg)](https://design.withfudge.com/share/pin-6601)

[BRINGING HISTORY TO LIFE | 2025 ANNUAL APPEAL | Ashmolean Museum](https://design.withfudge.com/share/pin-6601)

[![Plan Your Visit | Ashmolean Museum](https://pin.fontofweb.com/6600?format=jpg)](https://design.withfudge.com/share/pin-6600)

[Plan Your Visit | Ashmolean Museum](https://design.withfudge.com/share/pin-6600)

[![Plan Your Visit | Ashmolean Museum](https://pin.fontofweb.com/6599?format=jpg)](https://design.withfudge.com/share/pin-6599)

[Plan Your Visit | Ashmolean Museum](https://design.withfudge.com/share/pin-6599)

[![Welcome | Ashmolean Museum](https://pin.fontofweb.com/6598?format=jpg)](https://design.withfudge.com/share/pin-6598)

[Welcome | Ashmolean Museum](https://design.withfudge.com/share/pin-6598)

[![Welcome | Ashmolean Museum](https://pin.fontofweb.com/6597?format=jpg)](https://design.withfudge.com/share/pin-6597)

[Welcome | Ashmolean Museum](https://design.withfudge.com/share/pin-6597)

[![Welcome | Ashmolean Museum](https://pin.fontofweb.com/6596?format=jpg)](https://design.withfudge.com/share/pin-6596)

[Welcome | Ashmolean Museum](https://design.withfudge.com/share/pin-6596)

## Overview

ashmolean.org presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#000000`, `#231f20`, and `#444444`, with typography led by **Montserrat**, **Helvetica Neue**, and **Font Awesome 6 Brands**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#000000` | text on page content in the header |
| color.text | `#231f20` | text on page content in the main |
| color.text | `#444444` | text on page content |
| color.surface | `#ffffff` | surface on page content |
| color.surface | `#efefef` | surface on page content in the main |
| color.surface | `#fdfdfd` | surface on page content in the header |
| color.surface | `#e0ded9` | surface on page content in the main |
| color.surface | `#a3b09a` | surface on page content in the main |
| color.surface | `#e5e5e5` | surface on page content in the footer |
| color.surface | `#e9ebe8` | surface on page content in the main |
| color.surface | `#f1f1f1` | surface on page content in the main |
| color.surface | `#f0f0ec` | surface on page content in the button |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-17.6px | **Montserrat** | 17.6px | 300 | 25.1429px | normal | <div> in the main, <ul> in the main, <p> in the main, <li> in the main, and <a> in the main |
| type.body-17.6px | **Montserrat** | 17.6px | 400 | 25.1429px | normal | <a> in the main and <div> in the main |
| type.body-16px | **Helvetica Neue** | 16px | 400 | 22.8571px | normal | <div> in the header, <div>, <ul> in the nav, <div> in the main, <div> in the footer, <div> in the aside, <a> in the aside, and <span> in the aside |
| type.display-35.04px | **Montserrat** | 35.04px | 300 | 50.0571px | normal | <div> in the main and <a> in the main |
| type.body-16px | **Montserrat** | 16px | 300 | 22.8571px | normal | <div> in the main, <p> in the main, <div> in the footer, <a> in the footer, <li> in the footer, and <p> in the footer |
| type.heading-28.8px | **Montserrat** | 28.8px | 600 | 31.68px | normal | <h2> in the main |
| type.heading-16px | **Montserrat** | 16px | 600 | 22.8571px | normal | <div> in the main and <a> in the main |
| type.body-19.04px | **Montserrat** | 19.04px | 300 | 27.2px | normal | <p> in the main |
| type.heading-17.6px | **Montserrat** | 17.6px | 600 | 25.1429px | normal | <div> in the nav and <span> in the nav |
| type.body-22.4px | **Montserrat** | 22.4px | 300 | 32px | normal | <p> in the main |
| type.display-35.04px | **Montserrat** | 35.04px | 600 | 35.04px | normal | <h3> in the main |
| type.body-16px | **Helvetica Neue** | 16px | 400 | 40px | normal | <a> in the header |
| type.heading-19.04px | **Montserrat** | 19.04px | 600 | 27.2px | normal | <a> in the main |
| type.display-35.04px | **Montserrat** | 35.04px | 600 | 38.544px | normal | <h3> in the main |
| type.heading-29.76px | **Montserrat** | 29.76px | 600 | 32.736px | normal | <h3> in the main |
| type.body-25.6px | **Montserrat** | 25.6px | 300 | 36.5714px | normal | <div> in the header |
| type.body-25.6px | **Montserrat** | 25.6px | 300 | 40px | normal | <a> in the header |
| type.heading-16px | **Montserrat** | 16px | 600 | 17.6px | normal | <h3> in the main |
| type.display-32px | **Font Awesome 6 Brands** | 32px | 900 | 32px | normal | <div> in the button |
| type.heading-17.6px | **Montserrat** | 17.6px | 700 | 25.1429px | normal | <strong> in the main |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `0px 64px` | padding | page content |
| `0px -640px` | margin | page content |
| `10.512px 0px 0px` | margin | page content |
| `32px 640px` | padding | page content |
| `0px 0px 10px` | margin | page content |
| `0px 0px 32px` | padding | page content |
| `32px 0px` | padding | page content |
| `0px 0px 14.4px` | margin | page content |

### Shape and depth

The captured pages use `1px solid 0px` border treatments. Recorded shadows include `rgba(0, 0, 0, 0) 0px 0px 1px 0px rgb(0,0,0)`.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#ffffff`, `#efefef`, and `#fdfdfd`. Text colors include `#000000`, `#231f20`, and `#444444`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Montserrat**, **Helvetica Neue**, and **Font Awesome 6 Brands**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `0px 64px`, `0px -640px`, `10.512px 0px 0px`, `32px 640px`, and `0px 0px 10px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#ffffff`, `#efefef`, `#fdfdfd`, and `#e0ded9`. Depth is supported by the returned shadows.

## Components and states

The captured pages include repeated styling on <div>, <a>, <span>, <ul>, <p>, <h2>, <li>, and <button> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

## Responsive behavior

The captured token set does not establish breakpoint values or mobile behavior. Validate stacking, navigation changes, image treatment, and type scaling against the representative captures before implementing a responsive adaptation.

## Practical implementation guidance

- Preserve the dark surface relationship and the measured type hierarchy before adding decorative treatment.
- Start from the returned typography, spacing, color, and border values; name any new scale or semantic role as an adaptation rather than as a source fact.
- Keep the captured font families separate from licensing decisions.
- Use screenshots to validate component anatomy, responsive behavior, focus treatment, and motion before shipping.
- Avoid introducing gradients or shadows beyond the captured treatment; the returned evidence includes those treatments.

## Scope note

The guide uses representative captured pages. The evidence supports the values and observations above; it does not establish component semantics, interaction states, motion timing, breakpoint rules, font licensing, or a complete source stylesheet.

## Colors

- `#000000`
- `#231f20`
- `#444444`
- `#ffffff`
- `#efefef`
- `#fdfdfd`
- `#e0ded9`
- `#a3b09a`
- `#e5e5e5`
- `#e9ebe8`
- `#f1f1f1`
- `#f0f0ec`
- `#555555`
- `#337ab7`

## Typography captured from ashmolean.org

- **Montserrat** — weight 300 · size 17.6px
- **Helvetica Neue** — weight 400 · size 16px
- **Font Awesome 6 Brands** — weight 900 · size 32px

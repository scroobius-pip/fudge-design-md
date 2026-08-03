# How creem.io is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/creem.io-design)

Last updated: 2026-08-03

## Captured pages

[![Creem](https://pin.fontofweb.com/7119?format=jpg)](https://design.withfudge.com/share/pin-7119)

[Creem](https://design.withfudge.com/share/pin-7119)

[![Creem](https://pin.fontofweb.com/7118?format=jpg)](https://design.withfudge.com/share/pin-7118)

[Creem](https://design.withfudge.com/share/pin-7118)

[![Creem](https://pin.fontofweb.com/7117?format=jpg)](https://design.withfudge.com/share/pin-7117)

[Creem](https://design.withfudge.com/share/pin-7117)

[![Creem](https://pin.fontofweb.com/7116?format=jpg)](https://design.withfudge.com/share/pin-7116)

[Creem](https://design.withfudge.com/share/pin-7116)

[![Creem](https://pin.fontofweb.com/6201?format=jpg)](https://design.withfudge.com/share/pin-6201)

[Creem](https://design.withfudge.com/share/pin-6201)

[![Creem](https://pin.fontofweb.com/6200?format=jpg)](https://design.withfudge.com/share/pin-6200)

[Creem](https://design.withfudge.com/share/pin-6200)

## Overview

creem.io presents a mixed light and dark surface treatment in the captured pages. The system is anchored by `#000000`, `#fafaf9`, and `#111827`, with typography led by **Geist**, **Gasoek One**, and **System**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.surface | `#000000` | surface on page content in the footer |
| color.text | `#fafaf9` | text on page content in the footer |
| color.text | `#111827` | text on page content in the main |
| color.border | `#151617` | border on page content in the main |
| color.text | `#ffffff` | text on page content in the footer |
| color.text | `#374151` | text on page content in the main |
| color.border | `#e5e7eb` | border on page content in the main |
| color.surface | `#b09cfb` | surface on page content in the main |
| color.text | `#ffbe98` | text on page content in the main |
| color.text | `#6b7280` | text on page content in the main |
| color.surface | `#5865f2` | surface on page content in the main |
| color.surface | `#4ecb71` | surface on page content in the footer |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **Geist** | 16px | 400 | 24px | normal | <div> in the footer, <a> in the footer, <ul> in the footer, <div> in the main, <div> in the nav, <a> in the main, and <button> in the button |
| type.body-14px | **Geist** | 14px | 400 | 24px | normal | <ul> in the main, <li> in the main, and <div> in the main |
| type.display-124.8px | **Gasoek One** | 124.8px | 400 | 112.32px | -2.496px | <span> in the main |
| type.body-14px | **Geist** | 14px | 400 | 20px | normal | <a> in the footer, <p> in the footer, <span> in the footer, <div> in the main, <button> in the button, and <span> in the main |
| type.display-48px | **Gasoek One** | 48px | 400 | 48px | normal | <h3> in the main and <span> in the main |
| type.body-16px | **Geist** | 16px | 500 | 24px | normal | <p> in the main, <h3> in the main, and <span> in the button |
| type.heading-14px | **Geist** | 14px | 700 | 20px | 0.7px | <h4> in the footer |
| type.heading-14px | **Geist** | 14px | 700 | 20px | normal | <h4> in the main, <a> in the nav, and <button> in the button |
| type.body-16px | **Geist** | 16px | 400 | 26px | normal | <p> in the footer |
| type.body-20px | **Geist** | 20px | 400 | 28px | normal | <p> in the main |
| type.body-14px | **Geist** | 14px | 400 | 22.75px | normal | <p> in the main |
| type.body-18px | **Geist** | 18px | 500 | 28px | normal | <span> in the main and <div> in the main |
| type.body-24px | **Geist** | 24px | 400 | 32px | normal | <h1> in the main |
| type.heading-16px | **Geist** | 16px | 700 | 24px | 0.4px | <a> in the main and <span> in the main |
| type.heading-14px | **Geist** | 14px | 700 | 17.5px | normal | <span> in the main |
| type.heading-14px | **Geist** | 14px | 700 | 24px | normal | <strong> in the main |
| type.utility-12px | **Geist** | 12px | 400 | 16px | normal | <p> in the main and <a> in the footer |
| type.body-14px | **Geist** | 14px | 500 | 20px | normal | <span> in the main and <button> in the button |
| type.body-18px | **Gasoek One** | 18px | 400 | 28px | normal | <h3> in the main |
| type.utility-12px | **Geist** | 12px | 700 | 16px | normal | <span> in the button |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `0px 32px` | padding | page content |
| `0px 212.5px` | margin | page content |
| `0px 0px 320px` | padding | page content |
| `0px 450.953px` | margin | page content |
| `4px 0px` | margin | page content |
| `0px 48px` | padding | page content |
| `0px 0px 24px` | margin | page content |
| `0px 0px 64px` | margin | page content |

### Shape and depth

The captured pages use `2px solid 12px`, `2px solid 16px`, `1px solid 8px`, `1px 0px 0px solid 0px`, `1px 0px 0px solid 0px`, `0px none 8px`, `3px solid 16px`, and `0px none 12px` border treatments. Recorded gradients include `linear-gradient(rgba(255, 255, 255, 0.1) 1px, rgba(0, 0, 0, 0) 1px)` and `linear-gradient(to right, color(srgb 1 0.698039 0.141176 / 0.15)`. Recorded shadows include `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgb(21, 22, 23) 6px 6px 0px 0px`, `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.1) 0px 2px 4px -2px`, `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgb(21, 22, 23) 5px 5px 0px 0px`, `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgb(21, 22, 23) 4px 4px 0px 0px`, `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgb(21, 22, 23) 3px 3px 0px 0px`, `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgb(21, 22, 23) 2px 2px 0px 0px`, `rgb(21, 22, 23) 4px 4px 0px 0px`, and `rgb(21, 22, 23) 6px 6px 0px 0px`.

## Colors

The visual system is mixed light and dark surface treatment. Surface colors include `#000000`, `#b09cfb`, and `#5865f2`. Text colors include `#fafaf9`, `#111827`, and `#ffffff`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Geist** and **Gasoek One**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `0px 32px`, `0px 212.5px`, `0px 0px 320px`, `0px 450.953px`, and `4px 0px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is mixed light and dark surface treatment. Surface treatment centers on `#000000`, `#b09cfb`, `#5865f2`, and `#4ecb71`. Depth is supported by the returned gradients and shadows.

## Components and states

The captured pages include repeated styling on <div>, <p>, <a>, <h4>, <ul>, <span>, <h3>, and <button> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

## Responsive behavior

The captured token set does not establish breakpoint values or mobile behavior. Validate stacking, navigation changes, image treatment, and type scaling against the representative captures before implementing a responsive adaptation.

## Practical implementation guidance

- Preserve the mixed light/dark surface relationship and the measured type hierarchy before adding decorative treatment.
- Start from the returned typography, spacing, color, and border values; name any new scale or semantic role as an adaptation rather than as a source fact.
- Keep the captured font families separate from licensing decisions.
- Use screenshots to validate component anatomy, responsive behavior, focus treatment, and motion before shipping.
- Avoid introducing gradients or shadows beyond the captured treatment; the returned evidence includes those treatments.

## Scope note

The guide uses representative captured pages. The evidence supports the values and observations above; it does not establish component semantics, interaction states, motion timing, breakpoint rules, font licensing, or a complete source stylesheet.

## Colors

- `#000000`
- `#fafaf9`
- `#111827`
- `#151617`
- `#ffffff`
- `#374151`
- `#e5e7eb`
- `#b09cfb`
- `#ffbe98`
- `#6b7280`
- `#5865f2`
- `#4ecb71`
- `#f3f4f6`
- `#1a1b1d`
- `#ffb224`
- `#4752c4`

## Typography captured from creem.io

- **Geist** — weight 400 · size 16px
- **Gasoek One** — weight 400 · size 48px
- **System** — weight 500 · size 9px

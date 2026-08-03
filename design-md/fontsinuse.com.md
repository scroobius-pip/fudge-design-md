# How fontsinuse.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/fontsinuse.com-design)

Last updated: 2026-08-03

## Captured pages

[![Bruket Fjellhamar - Fonts In Use](https://pin.fontofweb.com/6844?format=jpg)](https://design.withfudge.com/share/pin-6844)

[Bruket Fjellhamar - Fonts In Use](https://design.withfudge.com/share/pin-6844)

[![Bruket Fjellhamar - Fonts In Use](https://pin.fontofweb.com/6843?format=jpg)](https://design.withfudge.com/share/pin-6843)

[Bruket Fjellhamar - Fonts In Use](https://design.withfudge.com/share/pin-6843)

[![Bruket Fjellhamar - Fonts In Use](https://pin.fontofweb.com/6842?format=jpg)](https://design.withfudge.com/share/pin-6842)

[Bruket Fjellhamar - Fonts In Use](https://design.withfudge.com/share/pin-6842)

[![Bruket Fjellhamar - Fonts In Use](https://pin.fontofweb.com/6841?format=jpg)](https://design.withfudge.com/share/pin-6841)

[Bruket Fjellhamar - Fonts In Use](https://design.withfudge.com/share/pin-6841)

## Overview

fontsinuse.com presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#000000`, `#cccccc`, and `#999999`, with typography led by **Tn**, **Relay Condensed**, and **Font Awesome**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#000000` | text on page content in the header |
| color.border | `#cccccc` | border on page content in the main |
| color.text | `#999999` | text on page content in the nav |
| color.border | `#f0f0f0` | border on page content in the main |
| color.text | `#ffffff` | text on page content in the main |
| color.border | `#d1d1d1` | border on page content in the main |
| color.text | `#dddddd` | text on page content in the header |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-14px | **Tn** | 14px | 400 | 22.4px | normal | <ul> in the nav, <div> in the header, <div> in the main, <div> in the footer, <a> in the nav, <li> in the main, <div> in the nav, <div>, and <span> in the main |
| type.utility-10px | **Tn** | 10px | 400 | 11px | normal | <ul> in the nav, <span> in the nav, and <li> in the nav |
| type.body-14px | **Tn** | 14px | 400 | 0px | normal | <a> in the header, <div> in the header, and <div> in the main |
| type.display-36px | **Relay Condensed** | 36px | 700 | 36px | normal | <a> in the main, <h2> in the main, <div> in the main, and <h2> in the nav |
| type.heading-24px | **Relay Condensed** | 24px | 700 | 24px | normal | <h4> in the main |
| type.utility-12px | **Tn** | 12px | 400 | 19.2px | normal | <div> in the header, <div> in the main, and <span> in the main |
| type.heading-16px | **Tn** | 16px | 700 | 19.2px | normal | <h5> |
| type.display-48px | **Relay Condensed** | 48px | 700 | 48px | normal | <h1> in the main |
| type.display-36px | **Relay Condensed** | 36px | 400 | 36px | normal | <a> in the nav |
| type.utility-10px | **Tn** | 10px | 400 | 16px | normal | <div> in the header and <li> in the nav |
| type.utility-12px | **Tn** | 12px | 400 | normal | normal | <button> in the button |
| type.body-14px | **Tn** | 14px | 400 | normal | normal | <button> in the button |
| type.heading-18px | **Relay Condensed** | 18px | 700 | 28.8px | normal | <div> in the main |
| type.body-16px | **Font Awesome** | 16px | 400 | 16px | normal | <span> in the header |
| type.body-13.3333px | **Tn** | 13.3333px | 400 | normal | normal | <button> in the button |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `20px 0px 0px 240px` | padding | page content |
| `20px 0px 30px` | margin | page content |
| `30px 0px 0px` | padding | page content |
| `10px 0px 0px` | padding | page content |
| `0px 0px 5px` | margin | page content |
| `0px 0px 10px` | padding | page content |
| `0px 0px 10px` | margin | page content |
| `30px 0px 0px` | margin | page content |

### Shape and depth

The captured pages use `3px 0px 0px solid none none 0px`, `5px 0px 0px solid none none 0px`, `3px 0px 1px solid none 0px`, `1px 0px 0px solid none none 0px`, `0px none 2px`, `75px 0px 0px 75px solid none none solid 0px`, and `1px solid 0px` border treatments. Recorded shadows include `rgba(0, 0, 0, 0.3) 0px 8px 8px -5px inset`.

## Colors

The visual system is predominantly dark surface treatment. Surface roles are not fully established. Text colors include `#000000`, `#999999`, and `#ffffff`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Tn**, **Relay Condensed**, and **Font Awesome**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `20px 0px 0px 240px`, `20px 0px 30px`, `30px 0px 0px`, `10px 0px 0px`, and `0px 0px 5px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. The surface palette is not fully established. Depth is supported by the returned shadows.

## Components and states

The captured pages include repeated styling on <a>, <h5>, <ul>, <span>, <li>, <div>, <button>, and <h2> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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
- `#cccccc`
- `#999999`
- `#f0f0f0`
- `#ffffff`
- `#d1d1d1`
- `#dddddd`

## Typography captured from fontsinuse.com

- **Tn** — weight 400 · size 14px
- **Relay Condensed** — weight 400 · size 36px
- **Font Awesome** — weight 400 · size 16px

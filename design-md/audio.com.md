# How audio.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/audio.com-design)

Last updated: 2026-08-03

## Captured pages

[![audio.com - a better way to upload and share audio online](https://pin.fontofweb.com/6245?format=jpg)](https://design.withfudge.com/share/pin-6245)

[audio.com - a better way to upload and share audio online](https://design.withfudge.com/share/pin-6245)

[![audio.com - a better way to upload and share audio online](https://pin.fontofweb.com/6244?format=jpg)](https://design.withfudge.com/share/pin-6244)

[audio.com - a better way to upload and share audio online](https://design.withfudge.com/share/pin-6244)

[![audio.com - a better way to upload and share audio online](https://pin.fontofweb.com/6243?format=jpg)](https://design.withfudge.com/share/pin-6243)

[audio.com - a better way to upload and share audio online](https://design.withfudge.com/share/pin-6243)

[![audio.com - a better way to upload and share audio online](https://pin.fontofweb.com/6242?format=jpg)](https://design.withfudge.com/share/pin-6242)

[audio.com - a better way to upload and share audio online](https://design.withfudge.com/share/pin-6242)

[![audio.com - a better way to upload and share audio online](https://pin.fontofweb.com/6241?format=jpg)](https://design.withfudge.com/share/pin-6241)

[audio.com - a better way to upload and share audio online](https://design.withfudge.com/share/pin-6241)

[![audio.com - a better way to upload and share audio online](https://pin.fontofweb.com/6240?format=jpg)](https://design.withfudge.com/share/pin-6240)

[audio.com - a better way to upload and share audio online](https://design.withfudge.com/share/pin-6240)

[![audio.com - a better way to upload and share audio online](https://pin.fontofweb.com/6239?format=jpg)](https://design.withfudge.com/share/pin-6239)

[audio.com - a better way to upload and share audio online](https://design.withfudge.com/share/pin-6239)

[![audio.com - a better way to upload and share audio online](https://pin.fontofweb.com/6238?format=jpg)](https://design.withfudge.com/share/pin-6238)

[audio.com - a better way to upload and share audio online](https://design.withfudge.com/share/pin-6238)

## Overview

audio.com presents a mixed light and dark surface treatment in the captured pages. The system is anchored by `#f2f1f4`, `#1a1825`, and `#ffffff`, with typography led by **Poppins**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#f2f1f4` | text on page content in the main |
| color.surface | `#1a1825` | surface on page content in the main |
| color.text | `#ffffff` | text on page content in the header |
| color.surface | `#33313b` | surface on page content in the main |
| color.border | `#4e4b55` | border on page content in the main |
| color.text | `#a7a5aa` | text on page content in the nav |
| color.surface | `#ff8b43` | surface on page content in the main |
| color.surface | `#df135f` | surface on page content in the button |
| color.surface | `#6aabf1` | surface on page content in the main |
| color.surface | `#ff9cca` | surface on page content in the main |
| color.surface | `#f89e9e` | surface on page content in the main |
| color.surface | `#ffd706` | surface on page content in the main |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **Poppins** | 16px | 400 | 24px | normal | <li> in the main, <div> in the main, <p> in the main, <a> in the header, <div> in the nav, <ul> in the nav, <div> in the button, <div> in the header, <span> in the main, <a> in the main, <div>, <button> in the button, and <span> |
| type.body-14px | **Poppins** | 14px | 400 | 22px | normal | <span> in the main, <p> in the main, <a> in the nav, <ul> in the nav, <li> in the nav, <span> in the nav, <div> in the nav, <p> in the nav, and <a> in the main |
| type.display-32px | **Poppins** | 32px | 600 | 40px | normal | <h2> in the main, <h3> in the main, and <p> in the main |
| type.utility-12px | **Poppins** | 12px | 400 | 16px | normal | <span> in the main, <p> in the main, <a> in the main, <button> in the button, and <div> |
| type.display-50px | **Poppins** | 50px | 600 | 64px | normal | <h1> in the main and <h2> in the main |
| type.body-18px | **Poppins** | 18px | 400 | 28px | normal | <p> in the main |
| type.heading-16px | **Poppins** | 16px | 600 | 24px | normal | <p> in the main, <span> in the main, <button> in the button, <a> in the main, and <h1> in the main |
| type.heading-20px | **Poppins** | 20px | 600 | 24px | normal | <p> in the main, <a>, and <a> in the main |
| type.body-16px | **Poppins** | 16px | 400 | 28px | normal | <p> in the main, <button> in the button, <div> in the main, and <a> in the nav |
| type.utility-12px | **Poppins** | 12px | 600 | 20px | normal | <a> in the main, <button> in the button, <a> in the header, and <p> in the main |
| type.heading-16px | **Poppins** | 16px | 600 | 20px | normal | <a> in the main |
| type.heading-24px | **Poppins** | 24px | 600 | 28px | normal | <p> in the main and <h3> in the main |
| type.heading-14px | **Poppins** | 14px | 600 | 18px | normal | <a> in the nav and <a> |
| type.heading-16px | **Poppins** | 16px | 600 | 28px | normal | <a> in the nav |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `32px 24px` | padding | page content |
| `0px 24px` | padding | page content |
| `24px` | padding | page content |
| `12px 24px 12px 12px` | padding | page content |
| `12px 8px` | padding | page content |
| `0px 48px` | padding | page content |
| `0px 8px` | padding | page content |
| `16px 40px` | padding | page content |

### Shape and depth

The captured pages use `0px none 1px`, `1px solid 1px`, `1px solid 0px`, `1px solid 9999px`, `0px none 9999px`, `1px 0px 0px solid 0px`, `1px solid 9999px`, and `1px solid 1px` border treatments.

## Colors

The visual system is mixed light and dark surface treatment. Surface colors include `#1a1825`, `#33313b`, and `#ff8b43`. Text colors include `#f2f1f4`, `#ffffff`, and `#a7a5aa`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Poppins**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `32px 24px`, `0px 24px`, `24px`, `12px 24px 12px 12px`, and `12px 8px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is mixed light and dark surface treatment. Surface treatment centers on `#1a1825`, `#33313b`, `#ff8b43`, and `#df135f`. No structured gradient or shadow treatment is established.

## Components and states

The captured pages include repeated styling on <h2>, <li>, <div>, <span>, <p>, <a>, <h3>, and <ul> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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

- `#f2f1f4`
- `#1a1825`
- `#ffffff`
- `#33313b`
- `#4e4b55`
- `#a7a5aa`
- `#ff8b43`
- `#df135f`
- `#6aabf1`
- `#ff9cca`
- `#f89e9e`
- `#ffd706`
- `#ffad72`
- `#413e48`
- `#e48a23`
- `#4edd6f`

## Typography captured from audio.com

- **Poppins** — weight 600 · size 32px

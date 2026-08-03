# How developers.google.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/developers.google.com-design)

Last updated: 2026-08-03

## Captured pages

[![Plans & Pricing | Google Developer Program  |  Google for Developers](https://pin.fontofweb.com/6327?format=jpg)](https://design.withfudge.com/share/pin-6327)

[Plans & Pricing | Google Developer Program  |  Google for Developers](https://design.withfudge.com/share/pin-6327)

[![Plans & Pricing | Google Developer Program  |  Google for Developers](https://pin.fontofweb.com/6326?format=jpg)](https://design.withfudge.com/share/pin-6326)

[Plans & Pricing | Google Developer Program  |  Google for Developers](https://design.withfudge.com/share/pin-6326)

[![Google Developer Program  |  Google for Developers](https://pin.fontofweb.com/5075?format=jpg)](https://design.withfudge.com/share/pin-5075)

[Google Developer Program  |  Google for Developers](https://design.withfudge.com/share/pin-5075)

## Overview

developers.google.com presents a mixed light and dark surface treatment in the captured pages. The system is anchored by `#202124`, `#dadce0`, and `#1a73e8`, with typography led by **Roboto**, **Google Sans 18 Pt**, and **Material Symbols Outlined**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#202124` | text on page content in the header |
| color.border | `#dadce0` | border on page content in the main |
| color.text | `#1a73e8` | text on page content in the main |
| color.surface | `#ffffff` | surface on page content in the header |
| color.surface | `#e8f0fe` | surface on page content in the main |
| color.text | `#5f6368` | text on page content in the nav |
| color.text | `#1f1f1f` | text on page content in the main |
| color.border | `#c4c7c5` | border on page content in the main |
| color.text | `#174ea6` | text on page content in the main |
| color.text | `#000000` | text on page content in the button |
| color.surface | `#f1f3f4` | surface on page content in the main |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **Roboto** | 16px | 400 | 24px | normal | <div> in the header, <div> in the main, and <ul> in the main |
| type.body-14px | **Roboto** | 14px | 400 | 20px | 0.2px | <div> in the main and <li> in the main |
| type.body-14px | **Roboto** | 14px | 500 | 20px | normal | <div> in the main and <h4> in the main |
| type.body-14px | **Roboto** | 14px | 400 | 20px | normal | <p> in the main |
| type.body-14px | **Google Sans 18 Pt** | 14px | 500 | 20px | normal | <a> in the nav, <button> in the button, <div> in the main, and <h4> in the main |
| type.body-24px | **Google Sans 18 Pt** | 24px | 400 | 32px | normal | <h3> in the main |
| type.display-32px | **Google Sans 18 Pt** | 32px | 400 | 40px | normal | <h2> in the main |
| type.body-20px | **Google Sans 18 Pt** | 20px | 500 | 28px | normal | <h3> in the main |
| type.body-18px | **Google Sans 18 Pt** | 18px | 500 | 26px | normal | <div> in the main and <span> in the main |
| type.body-24px | **Material Symbols Outlined** | 24px | 400 | 24px | normal | <span> in the main |
| type.utility-12px | **Google Sans 18 Pt** | 12px | 500 | 14px | normal | <div> in the main |
| type.body-14px | **Google Sans 18 Pt** | 14px | 500 | 34px | normal | <a> in the main |
| type.body-14px | **Google Sans 18 Pt** | 14px | 500 | 36px | normal | <a> in the main |
| type.utility-13px | **Roboto** | 13px | 400 | normal | normal | <a> in the button |
| type.body-16px | **Roboto** | 16px | 500 | 24px | normal | <button> in the button |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `16px` | padding | page content |
| `2px 0px 0px` | padding | page content |
| `12px 44px 12px 8px` | padding | page content |
| `12px 44px 12px 32px` | padding | page content |
| `4px 0px` | padding | page content |
| `0px 0px 16px` | margin | page content |
| `0px 0px 24px` | margin | page content |
| `12px 0px 4px` | margin | page content |

### Shape and depth

The captured pages use `1px solid 16px`, `0px none 16px`, `0px none 4px`, `0px none 24px`, `1px solid 4px`, `1px solid 24px`, and `0px none 50%` border treatments.

## Colors

The visual system is mixed light and dark surface treatment. Surface colors include `#ffffff`, `#e8f0fe`, and `#f1f3f4`. Text colors include `#202124`, `#1a73e8`, and `#5f6368`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Roboto**, **Google Sans 18 Pt**, and **Material Symbols Outlined**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `16px`, `2px 0px 0px`, `12px 44px 12px 8px`, `12px 44px 12px 32px`, and `4px 0px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is mixed light and dark surface treatment. Surface treatment centers on `#ffffff`, `#e8f0fe`, and `#f1f3f4`. No structured gradient or shadow treatment is established.

## Components and states

The captured pages include repeated styling on <div>, <a>, <span>, <h4>, <p>, <li>, <button>, and <h3> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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

- `#202124`
- `#dadce0`
- `#1a73e8`
- `#ffffff`
- `#e8f0fe`
- `#5f6368`
- `#1f1f1f`
- `#c4c7c5`
- `#174ea6`
- `#000000`
- `#f1f3f4`

## Typography captured from developers.google.com

- **Roboto** — weight 400 · size 16px
- **Google Sans 18 Pt** — weight 500 · size 14px
- **Material Symbols Outlined** — weight 400 · size 24px

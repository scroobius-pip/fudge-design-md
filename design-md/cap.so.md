# How cap.so is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/cap.so-design)

Last updated: 2026-08-03

## Captured pages

[![Pricing — Cap](https://pin.fontofweb.com/6479?format=jpg)](https://design.withfudge.com/share/pin-6479)

[Pricing — Cap](https://design.withfudge.com/share/pin-6479)

[![Cap — Beautiful screen recordings, owned by you.](https://pin.fontofweb.com/6478?format=jpg)](https://design.withfudge.com/share/pin-6478)

[Cap — Beautiful screen recordings, owned by you.](https://design.withfudge.com/share/pin-6478)

[![Cap — Beautiful screen recordings, owned by you.](https://pin.fontofweb.com/6477?format=jpg)](https://design.withfudge.com/share/pin-6477)

[Cap — Beautiful screen recordings, owned by you.](https://design.withfudge.com/share/pin-6477)

[![Cap — Beautiful screen recordings, owned by you.](https://pin.fontofweb.com/6476?format=jpg)](https://design.withfudge.com/share/pin-6476)

[Cap — Beautiful screen recordings, owned by you.](https://design.withfudge.com/share/pin-6476)

[![Cap — Beautiful screen recordings, owned by you.](https://pin.fontofweb.com/6475?format=jpg)](https://design.withfudge.com/share/pin-6475)

[Cap — Beautiful screen recordings, owned by you.](https://design.withfudge.com/share/pin-6475)

[![Early Adopter Pricing — Cap](https://pin.fontofweb.com/4342?format=jpg)](https://design.withfudge.com/share/pin-4342)

[Early Adopter Pricing — Cap](https://design.withfudge.com/share/pin-4342)

[![Early Adopter Pricing — Cap](https://pin.fontofweb.com/4341?format=jpg)](https://design.withfudge.com/share/pin-4341)

[Early Adopter Pricing — Cap](https://design.withfudge.com/share/pin-4341)

[![Early Adopter Pricing — Cap](https://pin.fontofweb.com/4340?format=jpg)](https://design.withfudge.com/share/pin-4340)

[Early Adopter Pricing — Cap](https://design.withfudge.com/share/pin-4340)

## Overview

cap.so presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#000000`, `#ffffff`, and `#71717a`, with typography led by **Neue Montreal** and **System**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#000000` | text on page content in the main |
| color.surface | `#ffffff` | surface on page content in the button |
| color.text | `#71717a` | text on page content in the main |
| color.surface | `#181825` | surface on page content in the main |
| color.surface | `#2563eb` | surface on page content in the button |
| color.border | `#1e40af` | border on page content in the button |
| color.surface | `#3b82f6` | surface on page content in the main |
| color.surface | `#cba6f7` | surface on page content in the main |
| color.surface | `#a6e3a1` | surface on page content in the main |
| color.surface | `#f9e2af` | surface on page content in the main |
| color.surface | `#f38ba8` | surface on page content in the main |
| color.surface | `#89dceb` | surface on page content in the main |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **Neue Montreal** | 16px | 400 | 24px | normal | <div> in the main, <a> in the main, and <p> in the main |
| type.body-14px | **Neue Montreal** | 14px | 400 | 22.75px | normal | <p> in the main |
| type.body-14px | **Neue Montreal** | 14px | 500 | 20px | normal | <button> in the button, <a> in the main, <div> in the main, <a> in the nav, <p> in the main, and <h4> in the main |
| type.body-18px | **Neue Montreal** | 18px | 500 | 28px | normal | <h4> in the main and <h3> in the main |
| type.body-18px | **Neue Montreal** | 18px | 400 | 28px | normal | <p> in the main |
| type.display-60px | **Neue Montreal** | 60px | 500 | 64px | normal | <h1> in the main |
| type.body-14px | **Neue Montreal** | 14px | 400 | 20px | normal | <p> in the main and <a> in the main |
| type.display-36px | **Neue Montreal** | 36px | 400 | 40px | normal | <h2> in the main |
| type.body-16px | **Neue Montreal** | 16px | 500 | 24px | normal | <a> in the main |
| type.body-15px | **Neue Montreal** | 15px | 500 | 24px | normal | <p> in the main |
| type.heading-16px | **Neue Montreal** | 16px | 700 | 24px | normal | <div> in the main |
| type.display-36px | **Neue Montreal** | 36px | 500 | 40px | normal | <h2> in the main |
| type.utility-9px | **Neue Montreal** | 9px | 500 | 24px | normal | <span> in the main |
| type.body-14px | **Neue Montreal** | 14px | 400 | 24px | normal | <span> in the main |
| type.utility-8px | **System** | 8px | 400 | 24px | normal | <span> in the main |
| type.heading-14px | **Neue Montreal** | 14px | 700 | 20px | normal | <strong> in the main |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `0px 20px` | padding | page content |
| `32px` | padding | page content |
| `24px` | padding | page content |
| `100px 0px 0px` | margin | page content |
| `160px 0px` | padding | page content |
| `0px 258px` | margin | page content |
| `16px` | padding | page content |
| `0px 0px 16px` | margin | page content |

### Shape and depth

The captured pages use `1px solid 12px`, `1px solid 9999px`, `1px solid 9999px`, `0px none 9999px`, `0px none 2px`, and `0px none 6px` border treatments. Recorded gradients include `linear-gradient(135deg, rgb(161, 140, 209) 0%, rgb(251, 194, 235) 100%)`, `linear-gradient(to left, rgb(242, 242, 242), rgba(0, 0, 0, 0))`, and `linear-gradient(to right, rgb(242, 242, 242), rgba(0, 0, 0, 0))`. Recorded shadows include `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(255, 255, 255, 0.2) 0px 1.5px 0px 0px inset`, `rgba(255, 255, 255, 0.2) 0px 1.5px 0px 0px inset`, `rgba(255, 255, 255, 0.4) 0px 1.5px 0px 0px inset`, `rgba(0, 0, 0, 0.05) 0px 4px 10px 0px`, and `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.4) 0px 60px 40px 3px`.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#ffffff`, `#181825`, and `#2563eb`. Text colors include `#000000` and `#71717a`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Neue Montreal** and **System**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `0px 20px`, `32px`, `24px`, `100px 0px 0px`, and `160px 0px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#ffffff`, `#181825`, `#2563eb`, and `#3b82f6`. Depth is supported by the returned gradients and shadows.

## Components and states

The captured pages include repeated styling on <div>, <h2>, <button>, <p>, <a>, <span>, <h4>, and <h3> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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
- `#ffffff`
- `#71717a`
- `#181825`
- `#2563eb`
- `#1e40af`
- `#3b82f6`
- `#cba6f7`
- `#a6e3a1`
- `#f9e2af`
- `#f38ba8`
- `#89dceb`

## Typography captured from cap.so

- **Neue Montreal** — weight 400 · size 16px
- **System** — weight 400 · size 8px

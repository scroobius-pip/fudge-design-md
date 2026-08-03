# How crazycreative.design is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/crazycreative.design-design)

Last updated: 2026-08-03

## Captured pages

[![Design That's Crazy Good – Crazy Creative by Nick Jacoy](https://pin.fontofweb.com/9130?format=jpg)](https://design.withfudge.com/share/pin-9130)

[Design That's Crazy Good – Crazy Creative by Nick Jacoy](https://design.withfudge.com/share/pin-9130)

[![Design That's Crazy Good – Crazy Creative by Nick Jacoy](https://pin.fontofweb.com/8777?format=jpg)](https://design.withfudge.com/share/pin-8777)

[Design That's Crazy Good – Crazy Creative by Nick Jacoy](https://design.withfudge.com/share/pin-8777)

[![Design That's Crazy Good – Crazy Creative by Nick Jacoy](https://pin.fontofweb.com/6968?format=jpg)](https://design.withfudge.com/share/pin-6968)

[Design That's Crazy Good – Crazy Creative by Nick Jacoy](https://design.withfudge.com/share/pin-6968)

[![Design That's Crazy Good – Crazy Creative by Nick Jacoy](https://pin.fontofweb.com/6967?format=jpg)](https://design.withfudge.com/share/pin-6967)

[Design That's Crazy Good – Crazy Creative by Nick Jacoy](https://design.withfudge.com/share/pin-6967)

[![Design That's Crazy Good – Crazy Creative](https://pin.fontofweb.com/670?format=jpg)](https://design.withfudge.com/share/pin-670)

[Design That's Crazy Good – Crazy Creative](https://design.withfudge.com/share/pin-670)

[![Design That's Crazy Good – Crazy Creative](https://pin.fontofweb.com/669?format=jpg)](https://design.withfudge.com/share/pin-669)

[Design That's Crazy Good – Crazy Creative](https://design.withfudge.com/share/pin-669)

[![Design That's Crazy Good – Crazy Creative](https://pin.fontofweb.com/668?format=jpg)](https://design.withfudge.com/share/pin-668)

[Design That's Crazy Good – Crazy Creative](https://design.withfudge.com/share/pin-668)

[![Design That's Crazy Good – Crazy Creative](https://pin.fontofweb.com/667?format=jpg)](https://design.withfudge.com/share/pin-667)

[Design That's Crazy Good – Crazy Creative](https://design.withfudge.com/share/pin-667)

## Overview

crazycreative.design presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#000000`, `#ff66c8`, and `#ffffff`, with typography led by **System**, **Bricolage Grotesque 96 Pt**, and **Bricolage Grotesque**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#000000` | text on page content in the main |
| color.surface | `#ff66c8` | surface on page content in the main |
| color.text | `#ffffff` | text on page content in the main |
| color.text | `#0000ee` | text on page content in the button |
| color.text | `#121212` | text on page content in the main |
| color.surface | `#ffd600` | surface on page content in the main |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.utility-12px | **System** | 12px | 400 | normal | normal | <div> in the main and <a> in the button |
| type.display-130px | **Bricolage Grotesque 96 Pt** | 130px | 400 | 110.5px | -2.2px | <h1> in the main |
| type.body-28px | **Bricolage Grotesque** | 28px | 400 | 39.2px | -0.84px | <p> in the main |
| type.heading-18px | **Bricolage Grotesque 96 Pt** | 18px | 700 | 25.2px | -0.3px | <p> in the main |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `0px 24px` | padding | page content |
| `20px 24px 22px` | padding | page content |
| `20px 30px` | padding | page content |

### Shape and depth

The captured pages use `0px none 40px 40px 0px 0px` and `0px none 100px` border treatments. Recorded gradients include `linear-gradient(90deg, rgb(51, 202, 255) 0%, rgb(129, 105, 255) 25.4232%, rgb(255, 127, 229) 48.3894%, rgb(255, 228, 117) 70.3125%, rgb(47, 255, 231) 100%)`.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#ff66c8` and `#ffd600`. Text colors include `#000000`, `#ffffff`, and `#0000ee`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **System**, **Bricolage Grotesque 96 Pt**, and **Bricolage Grotesque**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `0px 24px`, `20px 24px 22px`, and `20px 30px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#ff66c8` and `#ffd600`. Depth is supported by the returned gradients.

## Components and states

The captured pages include repeated styling on <div>, <h1>, <p>, and <a> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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
- `#ff66c8`
- `#ffffff`
- `#0000ee`
- `#121212`
- `#ffd600`

## Typography captured from crazycreative.design

- **System** — weight 400 · size 12px
- **Bricolage Grotesque 96 Pt** — weight 400 · size 130px
- **Bricolage Grotesque** — weight 400 · size 28px

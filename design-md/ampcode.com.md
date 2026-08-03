# How ampcode.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/ampcode.com-design)

Last updated: 2026-08-03

## Captured pages

[![Owner’s Manual - Amp](https://pin.fontofweb.com/9180?format=jpg)](https://design.withfudge.com/share/pin-9180)

[Owner’s Manual - Amp](https://design.withfudge.com/share/pin-9180)

[![Amp](https://pin.fontofweb.com/9179?format=jpg)](https://design.withfudge.com/share/pin-9179)

[Amp](https://design.withfudge.com/share/pin-9179)

[![Amp](https://pin.fontofweb.com/9178?format=jpg)](https://design.withfudge.com/share/pin-9178)

[Amp](https://design.withfudge.com/share/pin-9178)

## Overview

ampcode.com presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#000000`, `#f6f6f6`, and `#f6fff5`, with typography led by **System**, **Iowan Old Style**, **Poly Sans**, **Perfectly Nineties**, **Consolas**, **Sagittaire**, and **Tx 02**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.surface | `#000000` | surface on page content |
| color.text | `#f6f6f6` | text on page content |
| color.text | `#f6fff5` | text on page content |
| color.text | `#fbf1c7` | text on page content |
| color.surface | `#282828` | surface on page content |
| color.border | `#f34e3f` | border on page content |
| color.text | `#9ca49c` | text on page content |
| color.text | `#98971a` | text on page content |
| color.text | `#0b0d0b` | text on page content |
| color.text | `#091c1e` | text on page content in the nav |
| color.surface | `#f6833b` | surface on page content in the nav |
| color.border | `#878b86` | border on page content in the button |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.utility-13px | **System** | 13px | 400 | 20px | normal | <div>, <div> in the nav, <a>, <button> in the button, <div> in the footer, and <a> in the footer |
| type.utility-13px | **Iowan Old Style** | 13px | 400 | 20px | normal | <li> in the nav and <div> |
| type.utility-11.0086px | **Consolas** | 11.0086px | 400 | 14.6781px | normal | <span> |
| type.body-16px | **Iowan Old Style** | 16px | 400 | 20px | normal | <ul>, <p>, and <li> |
| type.body-18.344px | **Poly Sans** | 18.344px | 300 | 25.9384px | normal | <blockquote> |
| type.display-88.44px | **Sagittaire** | 88.44px | 400 | 79.596px | -5.3064px | <span> and <h1> |
| type.heading-16px | **Perfectly Nineties** | 16px | 700 | 24px | normal | <ol> in the nav and <a> in the nav |
| type.display-32px | **Perfectly Nineties** | 32px | 500 | 36px | normal | <h2> |
| type.display-32px | **Perfectly Nineties** | 32px | 400 | 36px | normal | <h1> |
| type.utility-13px | **Perfectly Nineties** | 13px | 700 | 20px | normal | <li> in the nav |
| type.body-31.14px | **Sagittaire** | 31.14px | 400 | 38.925px | -1.2456px | <h2> and <span> |
| type.body-14.9px | **Poly Sans** | 14.9px | 400 | 21.0686px | 0.033px | <p> and <a> |
| type.utility-13px | **Iowan Old Style** | 13px | 500 | 20px | normal | <a> in the nav |
| type.utility-12px | **System** | 12px | 400 | 16px | normal | <span> in the footer, <a> in the footer, and <li> in the footer |
| type.body-18.344px | **Poly Sans** | 18.344px | 400 | 25.9384px | normal | <p> |
| type.body-23.52px | **Sagittaire** | 23.52px | 400 | 33.2573px | -0.9408px | <p> |
| type.utility-13px | **Poly Sans** | 13px | 500 | 16.25px | normal | <a> in the footer |
| type.utility-13px | **Poly Sans** | 13px | 500 | 20px | 0.09px | <a> in the nav |
| type.utility-13px | **Poly Sans** | 13px | 700 | 20px | normal | <h3> in the footer |
| type.utility-12.292px | **Tx 02** | 12.292px | 400 | 17.3809px | normal | <p> |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `0px 24px` | padding | page content |
| `64px 16px 128px 20px` | padding | page content |
| `0px 0px 8px` | margin | page content |
| `16px 0px` | margin | page content |
| `0px 0px 0px 4px` | padding | page content |
| `0px 0px 0px 28px` | margin | page content |
| `48px 0px 48px 94.4856px` | padding | page content |
| `0px 0px 0px 20px` | padding | page content |

### Shape and depth

The captured pages use `2px 0px 0px solid 0px`, `1px solid 4px`, `1px solid 6px`, `0px none 8px`, `1px solid 0px`, `0px none 4px`, and `2px 0px 0px solid 0px` border treatments.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#000000`, `#282828`, and `#f6833b`. Text colors include `#f6f6f6`, `#f6fff5`, and `#fbf1c7`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **System**, **Iowan Old Style**, **Consolas**, **Poly Sans**, **Sagittaire**, **Perfectly Nineties**, and **Tx 02**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `0px 24px`, `64px 16px 128px 20px`, `0px 0px 8px`, `16px 0px`, and `0px 0px 0px 4px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#000000`, `#282828`, `#f6833b`, and `#1d2021`. No structured gradient or shadow treatment is established.

## Components and states

The captured pages include repeated styling on <div>, <a>, <ol>, <li>, <h1>, <strong>, <h2>, and <ul> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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
- `#f6f6f6`
- `#f6fff5`
- `#fbf1c7`
- `#282828`
- `#f34e3f`
- `#9ca49c`
- `#98971a`
- `#0b0d0b`
- `#091c1e`
- `#f6833b`
- `#878b86`
- `#00ff88`
- `#1d2021`
- `#4d4b44`

## Typography captured from ampcode.com

- **System** — weight 400 · size 13px
- **Iowan Old Style** — weight 400 · size 13px
- **Poly Sans** — weight 400 · size 13px
- **Perfectly Nineties** — weight 400 · size 24px
- **Consolas** — weight 400 · size 11.0086px
- **Sagittaire** — weight 400 · size 31.14px
- **Tx 02** — weight 400 · size 13.5px

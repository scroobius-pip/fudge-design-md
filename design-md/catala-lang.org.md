# How catala-lang.org is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/catala-lang.org-design)

Last updated: 2026-08-03

## Captured pages

[![Features - Catala](https://pin.fontofweb.com/9003?format=jpg)](https://design.withfudge.com/share/pin-9003)

[Features - Catala](https://design.withfudge.com/share/pin-9003)

[![Catala - Law to Code](https://pin.fontofweb.com/9002?format=jpg)](https://design.withfudge.com/share/pin-9002)

[Catala - Law to Code](https://design.withfudge.com/share/pin-9002)

[![Catala - Law to Code](https://pin.fontofweb.com/9001?format=jpg)](https://design.withfudge.com/share/pin-9001)

[Catala - Law to Code](https://design.withfudge.com/share/pin-9001)

## Overview

catala-lang.org presents a mixed light and dark surface treatment in the captured pages. The system is anchored by `#000000`, `#fbcc80`, and `#ddd6cd`, with typography led by **Space Grotesk**, **Libre Baskerville**, **Fira Code**, and **System**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#000000` | text on page content |
| color.surface | `#fbcc80` | surface on page content |
| color.border | `#ddd6cd` | border on page content in the main |
| color.surface | `#ffffff` | surface on page content in the main |
| color.text | `#292524` | text on page content in the main |
| color.text | `#4d3006` | text on page content in the main |
| color.text | `#70480d` | text on page content in the main |
| color.text | `#44403b` | text on page content in the main |
| color.surface | `#fafaf9` | surface on page content in the main |
| color.text | `#996633` | text on page content in the main |
| color.text | `#008800` | text on page content in the main |
| color.text | `#bb0066` | text on page content in the main |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **Space Grotesk** | 16px | 400 | 24px | normal | <div>, <div> in the main, <a> in the main, and <div> in the footer |
| type.body-16px | **Space Grotesk** | 16px | 400 | 26px | normal | <p> in the main |
| type.body-30px | **Libre Baskerville** | 30px | 400 | 41.25px | normal | <h1> in the main and <span> in the main |
| type.body-14px | **Space Grotesk** | 14px | 400 | 20px | normal | <div> in the footer, <a> in the footer, <a> in the main, and <div> in the main |
| type.body-16px | **Libre Baskerville** | 16px | 400 | 26px | normal | <p> in the main |
| type.heading-24px | **Libre Baskerville** | 24px | 600 | 32px | normal | <h2> in the main |
| type.display-36px | **Libre Baskerville** | 36px | 600 | 40px | normal | <h1> in the main |
| type.body-16px | **Space Grotesk** | 16px | 500 | 26px | normal | <span> in the main and <p> in the main |
| type.body-16px | **Space Grotesk** | 16px | 500 | 24px | normal | <a> in the main and <span> in the main |
| type.body-16px | **System** | 16px | 400 | 20px | normal | <div> in the main |
| type.body-14.4px | **Fira Code** | 14.4px | 400 | 20px | normal | <span> in the main |
| type.heading-20px | **Libre Baskerville** | 20px | 600 | 28px | normal | <h3> in the main |
| type.heading-14.4px | **Fira Code** | 14.4px | 700 | 20px | normal | <span> in the main |
| type.heading-16px | **Libre Baskerville** | 16px | 600 | 26px | normal | <p> in the footer |
| type.heading-18px | **Space Grotesk** | 18px | 600 | 28px | normal | <a> |
| type.utility-12px | **Space Grotesk** | 12px | 400 | 16px | normal | <span> in the footer |
| type.body-18px | **Space Grotesk** | 18px | 500 | 20px | normal | <a> in the main |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `32px` | padding | page content |
| `0px 32px` | padding | page content |
| `0px 0px 8px` | margin | page content |
| `8px 16px` | padding | page content |
| `0px 0px 16px` | margin | page content |
| `128px 0px 64px` | margin | page content |
| `4px 32px` | padding | page content |
| `0px 8px` | padding | page content |

### Shape and depth

The captured pages use `1px 0px 0px solid 0px`, `1px 0px 0px dashed 0px`, `1px 0px solid 0px`, `1px solid 0px`, and `1px solid 0px` border treatments.

## Colors

The visual system is mixed light and dark surface treatment. Surface colors include `#fbcc80`, `#ffffff`, and `#fafaf9`. Text colors include `#000000`, `#292524`, and `#4d3006`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Space Grotesk**, **Libre Baskerville**, **System**, and **Fira Code**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `32px`, `0px 32px`, `0px 0px 8px`, `8px 16px`, and `0px 0px 16px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is mixed light and dark surface treatment. Surface treatment centers on `#fbcc80`, `#ffffff`, and `#fafaf9`. No structured gradient or shadow treatment is established.

## Components and states

The captured pages include repeated styling on <div>, <a>, <h1>, <h2>, <h3>, <span>, and <p> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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

- `#000000`
- `#fbcc80`
- `#ddd6cd`
- `#ffffff`
- `#292524`
- `#4d3006`
- `#70480d`
- `#44403b`
- `#fafaf9`
- `#996633`
- `#008800`
- `#bb0066`
- `#706a63`
- `#333333`

## Typography captured from catala-lang.org

- **Space Grotesk** — weight 400 · size 16px
- **Libre Baskerville** — weight 600 · size 36px
- **Fira Code** — weight 700 · size 14.4px
- **System** — weight 400 · size 16px

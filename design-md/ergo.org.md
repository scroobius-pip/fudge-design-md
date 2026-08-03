# How ergo.org is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/ergo.org-design)

Last updated: 2026-08-03

## Captured pages

[![Ergo — Philosophy Begins in Wonder](https://pin.fontofweb.com/9974?format=jpg)](https://design.withfudge.com/share/pin-9974)

[Ergo — Philosophy Begins in Wonder](https://design.withfudge.com/share/pin-9974)

[![Ergo — Philosophy Begins in Wonder](https://pin.fontofweb.com/9973?format=jpg)](https://design.withfudge.com/share/pin-9973)

[Ergo — Philosophy Begins in Wonder](https://design.withfudge.com/share/pin-9973)

[![Ergo — Philosophy Begins in Wonder](https://pin.fontofweb.com/9972?format=jpg)](https://design.withfudge.com/share/pin-9972)

[Ergo — Philosophy Begins in Wonder](https://design.withfudge.com/share/pin-9972)

[![Computation as a Universal and Fundamental Concept — Ergo](https://pin.fontofweb.com/9969?format=jpg)](https://design.withfudge.com/share/pin-9969)

[Computation as a Universal and Fundamental Concept — Ergo](https://design.withfudge.com/share/pin-9969)

## Overview

ergo.org presents a mixed light and dark surface treatment in the captured pages. The system is anchored by `#000000`, `#ffffff`, and `#f0ebe4`, with typography led by **Libre Baskerville**, **Times**, **Sabon Lt Std**, and **Applesystem**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#000000` | text on page content |
| color.text | `#ffffff` | text on page content in the main |
| color.surface | `#f0ebe4` | surface on page content |
| color.surface | `#768100` | surface on page content in the footer |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **Libre Baskerville** | 16px | 400 | 20px | normal | <section> in the main, <main> in the main, <body>, <footer> in the footer, <nav> in the nav, <div> in the footer, <div> in the main, <a> in the main, <img> in the main, <img> in the header, <a> in the header, <div> in the header, <header> in the header, <img> in the footer, <a> in the footer, <p> in the main, and <span> in the main |
| type.body-16px | **Libre Baskerville** | 16px | 400 | 21px | normal | <p> in the main, <div> in the main, and <a> in the main |
| type.body-16px | **Times** | 16px | 400 | normal | normal | <html> |
| type.body-28.16px | **Libre Baskerville** | 28.16px | 400 | 29.568px | -0.5632px | <span> in the main and <h3> in the main |
| type.display-48px | **Sabon Lt Std** | 48px | 400 | 52.8px | -0.96px | <span> in the main and <h1> in the main |
| type.body-15px | **Libre Baskerville** | 15px | 400 | 19.995px | normal | <p> in the main and <div> in the main |
| type.body-14.08px | **Libre Baskerville** | 14.08px | 400 | 17.6px | normal | <p> in the main |
| type.display-32px | **Libre Baskerville** | 32px | 400 | 32px | -0.64px | <h3> in the main and <h2> in the main |
| type.body-14px | **Applesystem** | 14px | 400 | normal | normal | <div> |
| type.display-32px | **Sabon Lt Std** | 32px | 400 | 32px | -0.64px | <a> in the nav |
| type.body-16px | **Libre Baskerville** | 16px | 400 | 18.08px | normal | <a> in the nav, <svg> in the nav, <p> in the main, and <a> in the main |
| type.display-48px | **Libre Baskerville** | 48px | 400 | 57.6px | normal | <blockquote> in the main |
| type.body-20px | **Libre Baskerville** | 20px | 400 | 21px | normal | <span> in the main |
| type.heading-14.08px | **Libre Baskerville** | 14.08px | 700 | 17.6px | normal | <strong> in the main |
| type.utility-12px | **Libre Baskerville** | 12px | 400 | 16.8px | normal | <span> in the footer |
| type.body-14.08px | **Libre Baskerville** | 14.08px | 400 | 15.9104px | normal | <a> in the main |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `144px` | padding-bottom | page content |
| `88px 0px 144px` | padding | page content |
| `88px` | padding-top | page content |
| `48px` | padding-right | page content |
| `48px` | padding-left | page content |
| `0px 48px` | padding | page content |
| `0px 348px` | margin | page content |
| `348px` | margin-right | page content |

### Shape and depth

The captured pages use `1px solid 16px`, `0px none 16px`, `1px solid 22px`, and `0px none 22px` border treatments. Recorded gradients include `linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.85) 58%, rgb(0, 0, 0) 72%)`, `linear-gradient(rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 33%, rgba(0, 0, 0, 0.3) 75%, rgba(0, 0, 0, 0.82) 100%)`, and `linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.25) 15%, rgba(0, 0, 0, 0.1) 30%, rgba(0, 0, 0, 0.1) 60%, rgba(0, 0, 0, 0.25) 75%, rgba(0, 0, 0, 0.4) 100%)`. Recorded shadows include `rgba(0, 0, 0, 0.08) 0px 8px 48px 0px`.

## Colors

The visual system is mixed light and dark surface treatment. Surface colors include `#f0ebe4` and `#768100`. Text colors include `#000000` and `#ffffff`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Libre Baskerville**, **Times**, **Sabon Lt Std**, and **Applesystem**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `144px`, `88px 0px 144px`, `88px`, `48px`, and `48px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is mixed light and dark surface treatment. Surface treatment centers on `#f0ebe4` and `#768100`. Depth is supported by the returned gradients and shadows.

## Components and states

The captured pages include repeated styling on <div>, <html>, <section>, <main>, <body>, <footer>, <a>, and <nav> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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
- `#ffffff`
- `#f0ebe4`
- `#768100`

## Typography captured from ergo.org

- **Libre Baskerville** — weight 400 · size 16px
- **Times** — weight 400 · size 16px
- **Sabon Lt Std** — weight 400 · size 32px
- **Applesystem** — weight 400 · size 14px

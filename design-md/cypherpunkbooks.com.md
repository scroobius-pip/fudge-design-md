# How cypherpunkbooks.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/cypherpunkbooks.com-design)

Last updated: 2026-08-03

## Captured pages

[![The Crypto Anarchist Manifesto · The Cypherpunk Library](https://pin.fontofweb.com/9527?format=jpg)](https://design.withfudge.com/share/pin-9527)

[The Crypto Anarchist Manifesto · The Cypherpunk Library](https://design.withfudge.com/share/pin-9527)

[![A Cypherpunk's Manifesto · The Cypherpunk Library](https://pin.fontofweb.com/9526?format=jpg)](https://design.withfudge.com/share/pin-9526)

[A Cypherpunk's Manifesto · The Cypherpunk Library](https://design.withfudge.com/share/pin-9526)

[![Browse the collection · The Cypherpunk Library](https://pin.fontofweb.com/9525?format=jpg)](https://design.withfudge.com/share/pin-9525)

[Browse the collection · The Cypherpunk Library](https://design.withfudge.com/share/pin-9525)

[![The Cypherpunk Library](https://pin.fontofweb.com/9524?format=jpg)](https://design.withfudge.com/share/pin-9524)

[The Cypherpunk Library](https://design.withfudge.com/share/pin-9524)

[![Browse the collection · The Cypherpunk Library](https://pin.fontofweb.com/9523?format=jpg)](https://design.withfudge.com/share/pin-9523)

[Browse the collection · The Cypherpunk Library](https://design.withfudge.com/share/pin-9523)

[![The Cypherpunk Library](https://pin.fontofweb.com/9522?format=jpg)](https://design.withfudge.com/share/pin-9522)

[The Cypherpunk Library](https://design.withfudge.com/share/pin-9522)

## Overview

cypherpunkbooks.com presents a mixed light and dark surface treatment in the captured pages. The system is anchored by `#1c1b12`, `#f1ecd9`, and `#ffffe1`, with typography led by **Inter**, **Times**, **Alpha Lyrae**, and **Applesystem**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#1c1b12` | text on page content |
| color.text | `#f1ecd9` | text on page content |
| color.surface | `#ffffe1` | surface on page content |
| color.surface | `#14130c` | surface on page content |
| color.shadow | `#282412` | shadow on page content in the header |
| color.text | `#000000` | text on page content |
| color.text | `#ffffff` | text on page content in the header |
| color.surface | `#7a1f2b` | surface on page content in the header |
| color.surface | `#14532d` | surface on page content in the main |
| color.surface | `#c2410c` | surface on page content in the main |
| color.surface | `#1a1a1a` | surface on page content in the main |
| color.surface | `#b51d22` | surface on page content in the main |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **Inter** | 16px | 400 | normal | normal | <body>, <div>, <main> in the main, <header> in the header, <div> in the header, <nav> in the nav, <button> in the button, <div> in the main, <a> in the main, <span> in the main, and <svg> in the button |
| type.body-16px | **Times** | 16px | 400 | normal | normal | <html> |
| type.body-19px | **Inter** | 19px | 400 | 33.25px | normal | <p> in the main and <article> in the main |
| type.body-14px | **Applesystem** | 14px | 400 | normal | normal | <div> |
| type.display-56px | **Alpha Lyrae** | 56px | 500 | 56px | -1.4px | <h1> in the header |
| type.body-19.2px | **Alpha Lyrae** | 19.2px | 500 | 21.12px | -0.192px | <span> in the main |
| type.body-15px | **Alpha Lyrae** | 15px | 500 | 18px | -0.15px | <h3> in the main |
| type.body-15px | **Inter** | 15px | 400 | normal | normal | <input> in the main |
| type.utility-13px | **Inter** | 13px | 400 | normal | normal | <p> in the main and <button> in the button |
| type.display-64px | **Alpha Lyrae** | 64px | 500 | 64px | -1.28px | <h1> in the header |
| type.utility-11px | **Inter** | 11px | 400 | normal | normal | <span> in the main |
| type.body-22px | **Alpha Lyrae** | 22px | 500 | 20.24px | -0.22px | <span> in the header and <a> in the header |
| type.body-20px | **Alpha Lyrae** | 20px | 500 | 23.2px | 0.2px | <span> in the main |
| type.utility-8.5px | **Inter** | 8.5px | 500 | normal | 1.36px | <span> in the main |
| type.utility-13px | **Inter** | 13px | 400 | 20.8px | normal | <footer> in the footer, <a> in the footer, <a> in the main, and <p> in the main |
| type.body-16px | **Inter** | 16px | 400 | 26.88px | normal | <p> in the header |
| type.body-17px | **Inter** | 17px | 400 | 27.2px | normal | <p> in the header |
| type.display-35.2px | **Alpha Lyrae** | 35.2px | 500 | 37.312px | -0.352px | <span> in the header |
| type.body-18px | **Inter** | 18px | 400 | normal | normal | <p> in the header |
| type.utility-12px | **Inter** | 12px | 500 | normal | 2.16px | <a> in the main |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `56px` | padding-right | page content |
| `56px` | padding-left | page content |
| `26.44px 56px 140px` | padding | page content |
| `26.44px` | padding-top | page content |
| `140px` | padding-bottom | page content |
| `0px 262.5px` | margin | page content |
| `262.5px` | margin-right | page content |
| `262.5px` | margin-left | page content |

### Shape and depth

The captured pages use `0px none 2px 6px 6px 2px`, `0px none 2px 5px 5px 2px`, `0px none 2px 7px 7px 2px`, `0px none 0px 2px 2px 0px`, `1px solid 8px`, `1px solid 8px`, `1px 0px 0px solid none none 0px`, and `1px solid 999px` border treatments. Recorded gradients include `radial-gradient(125% 70% at 78% -4%, rgb(255, 255, 242) 0%, rgb(255, 255, 225) 52%)`, `radial-gradient(125% 92% at 72% -6%, rgb(255, 255, 242) 0%, rgb(255, 255, 225) 56%)`, `radial-gradient(125% 92% at 72% -6%, rgb(33, 31, 21) 0%, rgb(20, 19, 12) 56%)`, `radial-gradient(125% 70% at 78% -4%, rgb(33, 31, 21) 0%, rgb(20, 19, 12) 52%)`, `linear-gradient(rgba(8, 7, 3, 0) 0%, rgba(8, 7, 3, 0.34) 52%, rgba(8, 7, 3, 0.74) 100%)`, `linear-gradient(rgba(0, 0, 0, 0.12), rgba(0, 0, 0, 0) 12%)`, `linear-gradient(90deg, rgb(239, 233, 218) 0px, rgb(239, 233, 218) 1px, rgb(207, 198, 176) 1px, rgb(207, 198, 176) 2.2px)`, and `linear-gradient(rgb(239, 233, 218), rgb(212, 204, 182))`. Recorded shadows include `rgba(40, 36, 18, 0.16) 0px 1px 1px 0px, rgba(40, 36, 18, 0.2) 0px 14px 30px 0px`, `rgba(0, 0, 0, 0.28) 7px 0px 16px 0px inset, rgba(255, 255, 255, 0.08) -3px 0px 8px 0px inset, rgba(0, 0, 0, 0.14) 0px 0px 0px 1px inset, rgba(40, 36, 18, 0.3) 0px 13px 20px 0px, rgba(40, 36, 18, 0) 0px 0px 0px 0px`, `rgba(40, 36, 18, 0.16) 0px 1px 1px 0px, rgba(40, 36, 18, 0.26) 0px 26px 56px 0px, rgba(0, 0, 0, 0.2) 7px 0px 16px 0px inset`, `rgba(255, 255, 255, 0.14) 0px 1px 0px 0px inset, rgba(0, 0, 0, 0.5) 0px -1px 0px 0px inset, rgba(40, 36, 18, 0.2) 0px 1px 1px 0px, rgba(40, 36, 18, 0.24) 0px 6px 14px 0px, rgba(40, 36, 18, 0.16) 0px 14px 28px 0px`, and `rgba(40, 36, 18, 0.16) 0px 1px 2px 0px`.

## Colors

The visual system is mixed light and dark surface treatment. Surface colors include `#ffffe1`, `#14130c`, and `#7a1f2b`. Text colors include `#1c1b12`, `#f1ecd9`, and `#000000`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Inter**, **Times**, **Applesystem**, and **Alpha Lyrae**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `56px`, `56px`, `26.44px 56px 140px`, `26.44px`, and `140px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is mixed light and dark surface treatment. Surface treatment centers on `#ffffe1`, `#14130c`, `#7a1f2b`, and `#14532d`. Depth is supported by the returned gradients and shadows.

## Components and states

The captured pages include repeated styling on <div>, <body>, <html>, <main>, <p>, <article>, <footer>, and <a> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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

- `#1c1b12`
- `#f1ecd9`
- `#ffffe1`
- `#14130c`
- `#282412`
- `#000000`
- `#ffffff`
- `#7a1f2b`
- `#14532d`
- `#c2410c`
- `#1a1a1a`
- `#b51d22`
- `#0f3d3e`
- `#16243f`
- `#0b1f3a`
- `#3a1d52`

## Typography captured from cypherpunkbooks.com

- **Inter** — weight 400 · size 16px
- **Times** — weight 400 · size 16px
- **Alpha Lyrae** — weight 500 · size 22px
- **Applesystem** — weight 400 · size 14px

# How app.brevo.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/app.brevo.com-design)

Last updated: 2026-08-03

## Captured pages

[![Campaigns - Brevo](https://pin.fontofweb.com/10111?format=jpg)](https://design.withfudge.com/share/pin-10111)

[Campaigns - Brevo](https://design.withfudge.com/share/pin-10111)

[![Hello Simdi - Brevo](https://pin.fontofweb.com/10059?format=jpg)](https://design.withfudge.com/share/pin-10059)

[Hello Simdi - Brevo](https://design.withfudge.com/share/pin-10059)

[![API keys & MCP - Brevo](https://pin.fontofweb.com/10058?format=jpg)](https://design.withfudge.com/share/pin-10058)

[API keys & MCP - Brevo](https://design.withfudge.com/share/pin-10058)

[![Customize Starter plan - Brevo](https://pin.fontofweb.com/5148?format=jpg)](https://design.withfudge.com/share/pin-5148)

[Customize Starter plan - Brevo](https://design.withfudge.com/share/pin-5148)

[![Customize Starter plan - Brevo](https://pin.fontofweb.com/5147?format=jpg)](https://design.withfudge.com/share/pin-5147)

[Customize Starter plan - Brevo](https://design.withfudge.com/share/pin-5147)

[![Customize Starter plan - Brevo](https://pin.fontofweb.com/5146?format=jpg)](https://design.withfudge.com/share/pin-5146)

[Customize Starter plan - Brevo](https://design.withfudge.com/share/pin-5146)

## Overview

app.brevo.com presents a mixed light and dark surface treatment in the captured pages. The system is anchored by `#1b1b1b`, `#ffffff`, and `#e3e3e3`, with typography led by **Inter**, **Applesystem**, **Times**, and **Arial**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#1b1b1b` | text on page content in the nav |
| color.surface | `#ffffff` | surface on page content |
| color.border | `#e3e3e3` | border on page content in the main |
| color.surface | `#f9fff6` | surface on page content in the nav |
| color.shadow | `#1c1c1c` | shadow on page content in the button |
| color.surface | `#fffdf6` | surface on page content in the main |
| color.surface | `#efeefc` | surface on page content in the main |
| color.surface | `#ffecee` | surface on page content |
| color.shadow | `#f0f0f0` | shadow on page content in the main |
| color.text | `#000000` | text on page content |
| color.text | `#6358de` | text on page content in the button |
| color.text | `#696969` | text on page content in the button |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **Inter** | 16px | 400 | 24px | normal | <div> in the nav, <nav> in the nav, <div> in the aside, <aside> in the aside, <div>, <body>, <li> in the nav, <ul> in the nav, <a> in the nav, <span> in the nav, <header> in the header, <main> in the main, <li> in the main, <ul> in the main, <div> in the main, <svg> in the main, <input> in the main, and <p> in the main |
| type.body-16px | **Inter** | 16px | 400 | 16px | normal | <span> in the nav, <div> in the nav, <a> in the nav, and <li> in the nav |
| type.body-14px | **Applesystem** | 14px | 400 | normal | normal | <div> |
| type.body-16px | **Times** | 16px | 400 | 24px | normal | <html> |
| type.body-13.3333px | **Arial** | 13.3333px | 400 | normal | normal | <span> in the button and <button> in the button |
| type.heading-16px | **Inter** | 16px | 600 | 24px | normal | <h2> in the aside |
| type.heading-16px | **Inter** | 16px | 700 | 24px | normal | <div> in the main |
| type.body-14px | **Inter** | 14px | 400 | 16px | normal | <span> in the nav |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `32px` | padding-right | page content |
| `32px` | padding-left | page content |
| `32px` | padding-top | page content |
| `32px` | padding-bottom | page content |
| `32px` | gap | page content |
| `32px` | row-gap | page content |
| `32px` | column-gap | page content |
| `32px` | padding | page content |

### Shape and depth

The captured pages use `1px solid 16px`, `0px 2px 2px 0px none solid solid none 0px 0px 32px`, `0px none 16px`, `0px none 8px`, `1px 1px 0px 0px solid solid none none 0px 32px 0px 0px`, `0px 1px 0px 0px none solid none none 0px`, `0px 0px 2px none none solid 0px`, and `1px solid 16px` border treatments. Recorded gradients include `linear-gradient(0deg, rgb(27, 27, 27) 0%, rgb(44, 44, 44) 100%)`, `linear-gradient(0deg, rgb(250, 250, 250) 0%, rgb(255, 255, 255) 100%)`, `radial-gradient(at 100% 97.9%, rgb(239, 238, 252) 0%, rgba(0, 0, 0, 0) 50%)`, `radial-gradient(at 29.51% 100%, rgb(247, 247, 253) 0%, rgba(0, 0, 0, 0) 50%)`, and `radial-gradient(at 63.63% 3.19%, rgb(248, 247, 254) 0%, rgba(0, 0, 0, 0) 50%)`. Recorded shadows include `rgba(28, 28, 28, 0.08) 0px 1px 2px 0px` and `rgb(240, 240, 240) 0px -1px 0px 0px inset`.

## Colors

The visual system is mixed light and dark surface treatment. Surface colors include `#ffffff`, `#f9fff6`, and `#fffdf6`. Text colors include `#1b1b1b`, `#000000`, and `#6358de`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Inter**, **Applesystem**, **Times**, and **Arial**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `32px`, `32px`, `32px`, `32px`, and `32px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is mixed light and dark surface treatment. Surface treatment centers on `#ffffff`, `#f9fff6`, `#fffdf6`, and `#efeefc`. Depth is supported by the returned gradients and shadows.

## Components and states

The captured pages include repeated styling on <div>, <html>, <nav>, <aside>, <body>, <li>, <ul>, and <a> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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

- `#1b1b1b`
- `#ffffff`
- `#e3e3e3`
- `#f9fff6`
- `#1c1c1c`
- `#fffdf6`
- `#efeefc`
- `#ffecee`
- `#f0f0f0`
- `#000000`
- `#6358de`
- `#696969`
- `#d7fec8`
- `#deaf02`
- `#cfcfcf`
- `#d8efe8`

## Typography captured from app.brevo.com

- **Inter** — weight 400 · size 16px
- **Applesystem** — weight 400 · size 14px
- **Times** — weight 400 · size 16px
- **Arial** — weight 400 · size 13.3333px

# How aeon.co is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/aeon.co-design)

Last updated: 2026-08-03

## Captured pages

[![What the metaphor of ‘rewiring’ gets wrong about neuroplasticity | Aeon Essays](https://pin.fontofweb.com/6526?format=jpg)](https://design.withfudge.com/share/pin-6526)

[What the metaphor of ‘rewiring’ gets wrong about neuroplasticity | Aeon Essays](https://design.withfudge.com/share/pin-6526)

[![What the metaphor of ‘rewiring’ gets wrong about neuroplasticity | Aeon Essays](https://pin.fontofweb.com/6525?format=jpg)](https://design.withfudge.com/share/pin-6525)

[What the metaphor of ‘rewiring’ gets wrong about neuroplasticity | Aeon Essays](https://design.withfudge.com/share/pin-6525)

[![What the metaphor of ‘rewiring’ gets wrong about neuroplasticity | Aeon Essays](https://pin.fontofweb.com/6524?format=jpg)](https://design.withfudge.com/share/pin-6524)

[What the metaphor of ‘rewiring’ gets wrong about neuroplasticity | Aeon Essays](https://design.withfudge.com/share/pin-6524)

[![What the metaphor of ‘rewiring’ gets wrong about neuroplasticity | Aeon Essays](https://pin.fontofweb.com/6523?format=jpg)](https://design.withfudge.com/share/pin-6523)

[What the metaphor of ‘rewiring’ gets wrong about neuroplasticity | Aeon Essays](https://design.withfudge.com/share/pin-6523)

[![What the metaphor of ‘rewiring’ gets wrong about neuroplasticity | Aeon Essays](https://pin.fontofweb.com/6522?format=jpg)](https://design.withfudge.com/share/pin-6522)

[What the metaphor of ‘rewiring’ gets wrong about neuroplasticity | Aeon Essays](https://design.withfudge.com/share/pin-6522)

[![What the metaphor of ‘rewiring’ gets wrong about neuroplasticity | Aeon Essays](https://pin.fontofweb.com/6521?format=jpg)](https://design.withfudge.com/share/pin-6521)

[What the metaphor of ‘rewiring’ gets wrong about neuroplasticity | Aeon Essays](https://design.withfudge.com/share/pin-6521)

## Overview

aeon.co presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#000000`, `#ffffff`, and `#333333`, with typography led by **Atlas Grotesk**, **Acaca**, and **Atlas Typewriter**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#000000` | text on page content in the header |
| color.surface | `#ffffff` | surface on page content in the header |
| color.text | `#333333` | text on page content |
| color.surface | `#930b51` | surface on page content in the main |
| color.text | `#666666` | text on page content in the button |
| color.text | `#035a6d` | text on page content in the header |
| color.text | `#c16e15` | text on page content in the header |
| color.text | `#999999` | text on page content in the main |
| color.text | `#940b52` | text on page content in the header |
| color.text | `#9d120d` | text on page content in the header |
| color.surface | `#ececec` | surface on page content in the aside |
| color.text | `#0c776d` | text on page content in the header |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **Atlas Grotesk** | 16px | 400 | 22.4px | normal | <div> in the header, <div> in the main, <div>, <button> in the button, <div> in the aside, and <span> in the button |
| type.body-22px | **Acaca** | 22px | 400 | 30.8px | normal | <div> in the main, <p> in the main, and <span> in the main |
| type.display-72px | **Acaca** | 72px | 600 | 72px | normal | <h2> in the main |
| type.body-14px | **Atlas Grotesk** | 14px | 400 | 22.4px | normal | <div> in the footer, <p> in the footer, and <a> in the footer |
| type.body-18px | **Atlas Grotesk** | 18px | 400 | 28px | normal | <p> in the main, <span> in the main, <button> in the button, <span>, <p>, and <div> |
| type.heading-16px | **Atlas Grotesk** | 16px | 700 | 24px | normal | <strong> in the main and <div> in the aside |
| type.display-42px | **Atlas Grotesk** | 42px | 600 | 50.4px | normal | <a> in the header |
| type.body-16px | **Atlas Grotesk** | 16px | 400 | 19.2px | normal | <div> in the main |
| type.body-16px | **Atlas Grotesk** | 16px | 400 | 24px | normal | <p> in the main, <div> in the main, <ul>, and <li> |
| type.display-46px | **Acaca** | 46px | 700 | 48px | -1.15px | <span> and <p> |
| type.body-16px | **Atlas Typewriter** | 16px | 400 | 22.4px | normal | <div> in the header |
| type.body-20px | **Atlas Grotesk** | 20px | 400 | 28px | normal | <h1> in the main |
| type.display-32px | **Atlas Grotesk** | 32px | 400 | 44.8px | normal | <a> in the header |
| type.heading-30px | **Acaca** | 30px | 700 | 36px | normal | <p> in the main |
| type.utility-12px | **Atlas Grotesk** | 12px | 400 | 16px | normal | <p> in the footer and <div> in the footer |
| type.heading-28px | **Acaca** | 28px | 700 | 33.6px | normal | <p> in the main |
| type.utility-12px | **Atlas Typewriter** | 12px | 400 | 16px | 1.2px | <button> in the button |
| type.body-14px | **Atlas Grotesk** | 14px | 400 | 22.75px | normal | <a> in the nav |
| type.utility-12px | **Atlas Grotesk** | 12px | 400 | 16.8px | normal | <p> in the main |
| type.body-13.5px | **Atlas Typewriter** | 13.5px | 400 | 18.9px | normal | <span> in the main |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `60px 25px` | padding | page content |
| `40px` | padding | page content |
| `20px 0px` | margin | page content |
| `10px 80px 0px` | padding | page content |
| `0px 338px` | margin | page content |
| `0px 308px` | margin | page content |
| `44px 0px 24px` | margin | page content |
| `0px 0px 10px` | margin | page content |

### Shape and depth

The captured pages use `1px solid 4px`, `0px none 1.67772e+07px`, and `2px solid 1.67772e+07px` border treatments. Recorded shadows include `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px`.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#ffffff`, `#930b51`, and `#ececec`. Text colors include `#000000`, `#333333`, and `#666666`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Atlas Grotesk**, **Acaca**, and **Atlas Typewriter**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `60px 25px`, `40px`, `20px 0px`, `10px 80px 0px`, and `0px 338px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#ffffff`, `#930b51`, `#ececec`, and `#9d1d20`. Depth is supported by the returned shadows.

## Components and states

The captured pages include repeated styling on <div>, <button>, <a>, <h2>, <h1>, <p>, <span>, and <strong> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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
- `#333333`
- `#930b51`
- `#666666`
- `#035a6d`
- `#c16e15`
- `#999999`
- `#940b52`
- `#9d120d`
- `#ececec`
- `#0c776d`
- `#9d1d20`

## Typography captured from aeon.co

- **Atlas Grotesk** — weight 400 · size 16px
- **Acaca** — weight 600 · size 72px
- **Atlas Typewriter** — weight 400 · size 12px

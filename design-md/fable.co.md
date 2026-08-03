# How fable.co is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/fable.co-design)

Last updated: 2026-08-03

## Captured pages

[![Fable | Stories for everyone](https://pin.fontofweb.com/6898?format=jpg)](https://design.withfudge.com/share/pin-6898)

[Fable | Stories for everyone](https://design.withfudge.com/share/pin-6898)

[![Fable | Stories for everyone](https://pin.fontofweb.com/6896?format=jpg)](https://design.withfudge.com/share/pin-6896)

[Fable | Stories for everyone](https://design.withfudge.com/share/pin-6896)

[![Fable | Stories for everyone](https://pin.fontofweb.com/6895?format=jpg)](https://design.withfudge.com/share/pin-6895)

[Fable | Stories for everyone](https://design.withfudge.com/share/pin-6895)

[![Fable: The social app for bookworms and bingewatchers](https://pin.fontofweb.com/6894?format=jpg)](https://design.withfudge.com/share/pin-6894)

[Fable: The social app for bookworms and bingewatchers](https://design.withfudge.com/share/pin-6894)

[![Fable: The social app for bookworms and bingewatchers](https://pin.fontofweb.com/6893?format=jpg)](https://design.withfudge.com/share/pin-6893)

[Fable: The social app for bookworms and bingewatchers](https://design.withfudge.com/share/pin-6893)

[![Fable: The social app for bookworms and bingewatchers](https://pin.fontofweb.com/6892?format=jpg)](https://design.withfudge.com/share/pin-6892)

[Fable: The social app for bookworms and bingewatchers](https://design.withfudge.com/share/pin-6892)

[![Fable: The social app for bookworms and bingewatchers](https://pin.fontofweb.com/6891?format=jpg)](https://design.withfudge.com/share/pin-6891)

[Fable: The social app for bookworms and bingewatchers](https://design.withfudge.com/share/pin-6891)

[![Fable: The social app for bookworms and bingewatchers](https://pin.fontofweb.com/2208?format=jpg)](https://design.withfudge.com/share/pin-2208)

[Fable: The social app for bookworms and bingewatchers](https://design.withfudge.com/share/pin-2208)

## Overview

fable.co presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#000000`, `#161015`, and `#ffffff`, with typography led by **Inter** and **Test Heldane**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#000000` | text on page content in the main |
| color.text | `#161015` | text on page content in the main |
| color.surface | `#ffffff` | surface on page content in the main |
| color.surface | `#070607` | surface on page content in the button |
| color.surface | `#f7f4ee` | surface on page content in the main |
| color.text | `#292229` | text on page content in the main |
| color.surface | `#064c37` | surface on page content in the main |
| color.surface | `#f8f8f8` | surface on page content in the main |
| color.text | `#847f7c` | text on page content |
| color.border | `#bcbcbc` | border on page content |
| color.surface | `#116ecd` | surface on page content in the button |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **Inter** | 16px | 400 | 24px | normal | <div> in the main, <div> in the button, <div>, <button> in the button, and <li> |
| type.utility-12px | **Inter** | 12px | 400 | 16px | -0.2px | <span> in the main, <span> in the button, and <a> in the button |
| type.display-80px | **Test Heldane** | 80px | 400 | 68px | -3px | <h1> in the main |
| type.display-80px | **Test Heldane** | 80px | 500 | 75px | normal | <h2> in the main |
| type.display-36px | **Test Heldane** | 36px | 400 | 36px | -0.5px | <h2> in the main and <h1> in the main |
| type.heading-14px | **Inter** | 14px | 600 | 21px | -0.25px | <button> in the button and <span> in the button |
| type.heading-14px | **Inter** | 14px | 600 | 16px | -0.2px | <h2> in the main and <p> in the main |
| type.display-72px | **Test Heldane** | 72px | 500 | 62px | normal | <h1> in the main |
| type.display-48px | **Test Heldane** | 48px | 500 | 42px | normal | <h2> in the main |
| type.body-14px | **Inter** | 14px | 400 | 20px | -0.2px | <span> in the main and <span> |
| type.body-24px | **Inter** | 24px | 500 | 34px | normal | <h2> in the main |
| type.body-24px | **Inter** | 24px | 500 | 34px | -0.3px | <span> in the main |
| type.body-26px | **Test Heldane** | 26px | 400 | 28px | normal | <h1> in the main |
| type.body-16px | **Inter** | 16px | 500 | 20px | -0.2px | <span> in the main |
| type.heading-18px | **Inter** | 18px | 600 | 24px | -0.2px | <h2> |
| type.body-22px | **Test Heldane** | 22px | 400 | 24px | normal | <h1> |
| type.heading-14px | **Inter** | 14px | 600 | 14px | -0.25px | <span> |
| type.utility-10px | **Inter** | 10px | 400 | 16px | -0.2px | <span> |
| type.heading-24px | **Inter** | 24px | 600 | 28px | -1px | <h2> in the main |
| type.body-14px | **Inter** | 14px | 400 | 21px | -0.25px | <button> in the button |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `60px 0px 0px` | padding | page content |
| `14px 24px` | padding | page content |
| `0px 0px 24px` | margin | page content |
| `0px 80px` | padding | page content |
| `60px 24px 0px` | padding | page content |
| `0px 32px` | padding | page content |
| `100px 52px` | padding | page content |
| `-1px 0px 0px` | margin | page content |

### Shape and depth

The captured pages use `0px none 48px`, `0px none 12px`, `1px 0px solid none 0px`, `2px solid 60px`, `2px solid 60px`, `1px solid 44px`, `2px solid 60px`, and `0px none 24px` border treatments. Recorded shadows include `rgba(0, 0, 0, 0.05) 0px 4px 50px 0px` and `rgba(0, 0, 0, 0.1) 0px 6px 20px 0px`.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#ffffff`, `#070607`, and `#f7f4ee`. Text colors include `#000000`, `#161015`, and `#292229`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Inter** and **Test Heldane**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `60px 0px 0px`, `14px 24px`, `0px 0px 24px`, `0px 80px`, and `60px 24px 0px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#ffffff`, `#070607`, `#f7f4ee`, and `#064c37`. Depth is supported by the returned shadows.

## Components and states

The captured pages include repeated styling on <div>, <h2>, <span>, <h1>, <p>, <button>, <a>, and <li> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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
- `#161015`
- `#ffffff`
- `#070607`
- `#f7f4ee`
- `#292229`
- `#064c37`
- `#f8f8f8`
- `#847f7c`
- `#bcbcbc`
- `#116ecd`

## Typography captured from fable.co

- **Inter** — weight 400 · size 16px
- **Test Heldane** — weight 400 · size 26px

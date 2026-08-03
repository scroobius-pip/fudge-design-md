# How fundable.design is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/fundable.design-design)

Last updated: 2026-08-03

## Captured pages

[![Fundable — Logo Design](https://pin.fontofweb.com/6714?format=jpg)](https://design.withfudge.com/share/pin-6714)

[Fundable — Logo Design](https://design.withfudge.com/share/pin-6714)

[![Fundable](https://pin.fontofweb.com/5699?format=jpg)](https://design.withfudge.com/share/pin-5699)

[Fundable](https://design.withfudge.com/share/pin-5699)

[![Fundable](https://pin.fontofweb.com/5698?format=jpg)](https://design.withfudge.com/share/pin-5698)

[Fundable](https://design.withfudge.com/share/pin-5698)

[![Fundable](https://pin.fontofweb.com/5697?format=jpg)](https://design.withfudge.com/share/pin-5697)

[Fundable](https://design.withfudge.com/share/pin-5697)

[![Fundable](https://pin.fontofweb.com/5696?format=jpg)](https://design.withfudge.com/share/pin-5696)

[Fundable](https://design.withfudge.com/share/pin-5696)

[![Fundable](https://pin.fontofweb.com/5695?format=jpg)](https://design.withfudge.com/share/pin-5695)

[Fundable](https://design.withfudge.com/share/pin-5695)

## Overview

fundable.design presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#000000`, `#ffffff`, and `#0000ee`, with typography led by **System** and **Inter**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#000000` | text on page content |
| color.text | `#ffffff` | text on page content |
| color.text | `#0000ee` | text on page content |
| color.surface | `#cdc4fb` | surface on page content |
| color.shadow | `#924bde` | shadow on page content |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.utility-12px | **System** | 12px | 400 | normal | normal | <div> and <a> |
| type.display-39px | **Inter** | 39px | 600 | 42.9px | -1.09px | <span> and <h1> |
| type.body-14px | **Inter** | 14px | 500 | 18.2px | -0.04px | <p> |
| type.utility-12px | **Inter** | 12px | 500 | 15.6px | 0.01px | <p> and <a> |
| type.body-16px | **Inter** | 16px | 500 | 20.8px | -0.33px | <p> |
| type.body-14px | **Inter** | 14px | 500 | 22.4px | -0.56px | <p> |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `24px` | padding | page content |
| `0px 24px` | padding | page content |
| `12px 16px` | padding | page content |

### Shape and depth

The captured pages use `0px none 100px` and `0px none 10px` border treatments. Recorded shadows include `rgb(146, 75, 222) 0px 0px 0px 0px inset`.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#cdc4fb`. Text colors include `#000000`, `#ffffff`, and `#0000ee`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **System** and **Inter**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `24px`, `0px 24px`, and `12px 16px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#cdc4fb`. Depth is supported by the returned shadows.

## Components and states

The captured pages include repeated styling on <div>, <span>, <p>, <h1>, and <a> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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
- `#0000ee`
- `#cdc4fb`
- `#924bde`

## Typography captured from fundable.design

- **System** — weight 400 · size 12px
- **Inter** — weight 600 · size 39px

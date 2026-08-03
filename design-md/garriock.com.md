# How garriock.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/garriock.com-design)

Last updated: 2026-08-03

## Captured pages

[![Garriock & Co.](https://pin.fontofweb.com/7367?format=jpg)](https://design.withfudge.com/share/pin-7367)

[Garriock & Co.](https://design.withfudge.com/share/pin-7367)

[![Garriock & Co.](https://pin.fontofweb.com/7366?format=jpg)](https://design.withfudge.com/share/pin-7366)

[Garriock & Co.](https://design.withfudge.com/share/pin-7366)

[![Garriock & Co.](https://pin.fontofweb.com/7365?format=jpg)](https://design.withfudge.com/share/pin-7365)

[Garriock & Co.](https://design.withfudge.com/share/pin-7365)

[![Garriock & Co.](https://pin.fontofweb.com/7364?format=jpg)](https://design.withfudge.com/share/pin-7364)

[Garriock & Co.](https://design.withfudge.com/share/pin-7364)

[![Garriock & Co.](https://pin.fontofweb.com/7363?format=jpg)](https://design.withfudge.com/share/pin-7363)

[Garriock & Co.](https://design.withfudge.com/share/pin-7363)

[![Garriock & Co.](https://pin.fontofweb.com/7362?format=jpg)](https://design.withfudge.com/share/pin-7362)

[Garriock & Co.](https://design.withfudge.com/share/pin-7362)

[![Garriock & Co.](https://pin.fontofweb.com/7361?format=jpg)](https://design.withfudge.com/share/pin-7361)

[Garriock & Co.](https://design.withfudge.com/share/pin-7361)

## Overview

garriock.com presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#000000`, `#ffffff`, and `#0000ee`, with typography led by **System**, **Serrif Condensed**, and **Es Allianz**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#000000` | text on page content |
| color.surface | `#ffffff` | surface on page content |
| color.text | `#0000ee` | text on page content |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.utility-12px | **System** | 12px | 400 | normal | normal | <div> and <a> |
| type.display-78px | **Serrif Condensed** | 78px | 300 | 83px | -1.56px | <span>, <p>, and <a> |
| type.body-20px | **Serrif Condensed** | 20px | 300 | 25px | normal | <p> and <a> |
| type.display-36px | **Serrif Condensed** | 36px | 300 | 43px | normal | <h3> and <a> |
| type.body-22px | **Es Allianz** | 22px | 400 | 22px | normal | <p> |
| type.display-72px | **Serrif Condensed** | 72px | 300 | 83px | -1.44px | <p> |
| type.display-72px | **Es Allianz** | 72px | 400 | 83px | -1.44px | <span> |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `0px 60px` | padding | page content |
| `0px 60px 2px` | padding | page content |
| `240px 0px 260px` | padding | page content |
| `260px 0px` | padding | page content |
| `260px 0px 0px` | padding | page content |
| `0px 60px 480px` | padding | page content |
| `100px 0px 0px` | padding | page content |
| `20px 50px 40px` | padding | page content |

### Shape and depth

No structured border, gradient, or shadow treatment was returned.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#ffffff`. Text colors include `#000000` and `#0000ee`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **System**, **Serrif Condensed**, and **Es Allianz**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `0px 60px`, `0px 60px 2px`, `240px 0px 260px`, `260px 0px`, and `260px 0px 0px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#ffffff`. No structured gradient or shadow treatment is established.

## Components and states

The captured pages include repeated styling on <div>, <a>, <p>, <span>, and <h3> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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
- `#ffffff`
- `#0000ee`

## Typography captured from garriock.com

- **System** — weight 400 · size 12px
- **Serrif Condensed** — weight 300 · size 20px
- **Es Allianz** — weight 400 · size 72px

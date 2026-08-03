# How aljazeera.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/aljazeera.com-design)

Last updated: 2026-08-03

## Captured pages

[![Thai police arrest Indonesian wanted for $10m cyberfraud | Cybercrime News | Al Jazeera](https://pin.fontofweb.com/9086?format=jpg)](https://design.withfudge.com/share/pin-9086)

[Thai police arrest Indonesian wanted for $10m cyberfraud | Cybercrime News | Al Jazeera](https://design.withfudge.com/share/pin-9086)

[![Injured Salah has played his last game for Liverpool: Egypt team official | Football News | Al Jazeera](https://pin.fontofweb.com/9085?format=jpg)](https://design.withfudge.com/share/pin-9085)

[Injured Salah has played his last game for Liverpool: Egypt team official | Football News | Al Jazeera](https://design.withfudge.com/share/pin-9085)

[![Zaragoza goalkeeper punches player, sparks brawl in La Liga 2 derby match | Football News | Al Jazeera](https://pin.fontofweb.com/9084?format=jpg)](https://design.withfudge.com/share/pin-9084)

[Zaragoza goalkeeper punches player, sparks brawl in La Liga 2 derby match | Football News | Al Jazeera](https://design.withfudge.com/share/pin-9084)

## Overview

aljazeera.com presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#000000`, `#ffffff`, and `#595959`, with typography led by **Roboto** and **Georgia**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#000000` | text on page content |
| color.surface | `#ffffff` | surface on page content |
| color.text | `#595959` | text on page content in the header |
| color.surface | `#f7f7f7` | surface on page content in the button |
| color.border | `#bebebe` | border on page content in the button |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **Roboto** | 16px | 400 | 24px | normal | <div>, <div> in the main, and <p> in the main |
| type.display-40px | **Roboto** | 40px | 700 | 52px | normal | <h1> in the header |
| type.body-24px | **Georgia** | 24px | 400 | 36px | normal | <p> in the header |
| type.body-14px | **Roboto** | 14px | 400 | 14px | normal | <button> in the button |
| type.body-24px | **Roboto** | 24px | 300 | 32px | normal | <h1> |
| type.body-14px | **Roboto** | 14px | 400 | 21px | normal | <p> in the main |
| type.body-16px | **Roboto** | 16px | 400 | 22.4px | normal | <p> |
| type.body-20px | **Roboto** | 20px | 400 | 23px | normal | <button> in the button |
| type.body-16px | **Roboto** | 16px | 400 | normal | normal | <button> in the button |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `0px 0px 10px` | margin | page content |
| `30px` | padding | page content |
| `24px 0px` | margin | page content |
| `7px 12px 7px 10px` | padding | page content |
| `16.08px 35px 20px 0px` | margin | page content |
| `10px 0px 10px 10px` | padding | page content |
| `12px 35px` | padding | page content |
| `30px 0px 0px` | margin | page content |

### Shape and depth

The captured pages use `0px none 10px`, `1px solid 999px`, and `0px none 22px` border treatments.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#ffffff` and `#f7f7f7`. Text colors include `#000000` and `#595959`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Roboto** and **Georgia**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `0px 0px 10px`, `30px`, `24px 0px`, `7px 12px 7px 10px`, and `16.08px 35px 20px 0px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#ffffff` and `#f7f7f7`. No structured gradient or shadow treatment is established.

## Components and states

The captured pages include repeated styling on <div>, <h1>, <p>, and <button> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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
- `#595959`
- `#f7f7f7`
- `#bebebe`

## Typography captured from aljazeera.com

- **Roboto** — weight 400 · size 16px
- **Georgia** — weight 400 · size 24px

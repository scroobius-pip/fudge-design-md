# How discord.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/discord.com-design)

Last updated: 2026-08-03

## Captured pages

[![What brings you to the Developer Portal? | Discord Developer Portal](https://pin.fontofweb.com/7873?format=jpg)](https://design.withfudge.com/share/pin-7873)

[What brings you to the Developer Portal? | Discord Developer Portal](https://design.withfudge.com/share/pin-7873)

[![(15473) Discord | Friends](https://pin.fontofweb.com/3822?format=jpg)](https://design.withfudge.com/share/pin-3822)

[(15473) Discord | Friends](https://design.withfudge.com/share/pin-3822)

[![Nitro Benefits and Features | Discord](https://pin.fontofweb.com/793?format=jpg)](https://design.withfudge.com/share/pin-793)

[Nitro Benefits and Features | Discord](https://design.withfudge.com/share/pin-793)

[![Nitro Benefits and Features | Discord](https://pin.fontofweb.com/792?format=jpg)](https://design.withfudge.com/share/pin-792)

[Nitro Benefits and Features | Discord](https://design.withfudge.com/share/pin-792)

[![Nitro Benefits and Features | Discord](https://pin.fontofweb.com/791?format=jpg)](https://design.withfudge.com/share/pin-791)

[Nitro Benefits and Features | Discord](https://design.withfudge.com/share/pin-791)

[![Nitro Benefits and Features | Discord](https://pin.fontofweb.com/790?format=jpg)](https://design.withfudge.com/share/pin-790)

[Nitro Benefits and Features | Discord](https://design.withfudge.com/share/pin-790)

[![Nitro Benefits and Features | Discord](https://pin.fontofweb.com/789?format=jpg)](https://design.withfudge.com/share/pin-789)

[Nitro Benefits and Features | Discord](https://design.withfudge.com/share/pin-789)

[![Nitro Benefits and Features | Discord](https://pin.fontofweb.com/788?format=jpg)](https://design.withfudge.com/share/pin-788)

[Nitro Benefits and Features | Discord](https://design.withfudge.com/share/pin-788)

## Overview

discord.com presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#000000`, `#efeff1`, and `#97979f`, with typography led by **Gg Sans**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.surface | `#000000` | surface on page content |
| color.text | `#efeff1` | text on page content |
| color.border | `#97979f` | border on page content in the button |
| color.text | `#fbfbfb` | text on page content |
| color.text | `#ffffff` | text on page content in the button |
| color.surface | `#5865f2` | surface on page content in the button |
| color.text | `#96979e` | text on page content |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **Gg Sans** | 16px | 400 | 24px | normal | <div> |
| type.body-16px | **Gg Sans** | 16px | 400 | normal | normal | <button> in the button |
| type.display-32px | **Gg Sans** | 32px | 600 | 40px | normal | <h2> |
| type.body-16px | **Gg Sans** | 16px | 400 | 20px | normal | <div> in the button |
| type.body-16px | **Gg Sans** | 16px | 500 | 20px | normal | <span> in the button |
| type.body-14px | **Gg Sans** | 14px | 400 | 18px | normal | <div> |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `16px 32px` | padding | page content |
| `16px 24px` | padding | page content |
| `16px` | padding | page content |
| `0px 494px` | margin | page content |

### Shape and depth

The captured pages use `1px solid 12px` and `1px solid 8px` border treatments.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#000000` and `#5865f2`. Text colors include `#efeff1`, `#fbfbfb`, and `#ffffff`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Gg Sans**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `16px 32px`, `16px 24px`, `16px`, and `0px 494px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#000000` and `#5865f2`. No structured gradient or shadow treatment is established.

## Components and states

The captured pages include repeated styling on <div>, <h2>, <button>, and <span> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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
- `#efeff1`
- `#97979f`
- `#fbfbfb`
- `#ffffff`
- `#5865f2`
- `#96979e`

## Typography captured from discord.com

- **Gg Sans** — weight 400 · size 16px

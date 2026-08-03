# How edition.cnn.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/edition.cnn.com-design)

Last updated: 2026-08-03

## Captured pages

[![EOPL: The lawless floating gas station where the Iranian shadow fleet trades oil | CNN](https://pin.fontofweb.com/9108?format=jpg)](https://design.withfudge.com/share/pin-9108)

[EOPL: The lawless floating gas station where the Iranian shadow fleet trades oil | CNN](https://design.withfudge.com/share/pin-9108)

[![Measles vaccine: Record-breaking outbreak may have driven uptake | CNN](https://pin.fontofweb.com/9107?format=jpg)](https://design.withfudge.com/share/pin-9107)

[Measles vaccine: Record-breaking outbreak may have driven uptake | CNN](https://design.withfudge.com/share/pin-9107)

[![Kentucky Derby favorite Renegade faces uphill battle after drawing unfavorable starting position | CNN](https://pin.fontofweb.com/9106?format=jpg)](https://design.withfudge.com/share/pin-9106)

[Kentucky Derby favorite Renegade faces uphill battle after drawing unfavorable starting position | CNN](https://design.withfudge.com/share/pin-9106)

[![A Supreme Court case over pesticides is bringing out the ‘MAHA moms’ — and threats of consequences for the midterms | CNN Politics](https://pin.fontofweb.com/9105?format=jpg)](https://design.withfudge.com/share/pin-9105)

[A Supreme Court case over pesticides is bringing out the ‘MAHA moms’ — and threats of consequences for the midterms | CNN Politics](https://design.withfudge.com/share/pin-9105)

[![Adidas share price boosted by new world record in London Marathon | CNN Business](https://pin.fontofweb.com/9104?format=jpg)](https://design.withfudge.com/share/pin-9104)

[Adidas share price boosted by new world record in London Marathon | CNN Business](https://design.withfudge.com/share/pin-9104)

## Overview

edition.cnn.com presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#000000`, `#0c0c0c`, and `#6e6e6e`, with typography led by **Noto Serif** and **Cnn Sans W 04**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.surface | `#000000` | surface on page content in the main |
| color.text | `#0c0c0c` | text on page content in the main |
| color.text | `#6e6e6e` | text on page content in the main |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-18px | **Noto Serif** | 18px | 400 | 32px | normal | <p> in the main |
| type.body-18px | **Cnn Sans W 04** | 18px | 400 | normal | normal | <div> in the main and <div> in the nav |
| type.body-14px | **Noto Serif** | 14px | 400 | 20px | normal | <span> in the main and <div> in the main |
| type.heading-18px | **Noto Serif** | 18px | 700 | 30px | normal | <a> in the main |
| type.body-15px | **Cnn Sans W 04** | 15px | 500 | 40px | normal | <a> in the nav |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `0px 0px 24px` | margin | page content |
| `24px 0px` | margin | page content |
| `0px 48px` | padding | page content |
| `0px 40.4px` | margin | page content |
| `0px 12px` | padding | page content |
| `8px 0px 0px` | margin | page content |

### Shape and depth

No structured border, gradient, or shadow treatment was returned.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#000000`. Text colors include `#0c0c0c` and `#6e6e6e`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Noto Serif** and **Cnn Sans W 04**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `0px 0px 24px`, `24px 0px`, `0px 48px`, `0px 40.4px`, and `0px 12px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#000000`. No structured gradient or shadow treatment is established.

## Components and states

The captured pages include repeated styling on <p>, <div>, <a>, and <span> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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
- `#0c0c0c`
- `#6e6e6e`

## Typography captured from edition.cnn.com

- **Noto Serif** — weight 400 · size 18px
- **Cnn Sans W 04** — weight 400 · size 18px

# How abcdinamo.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/abcdinamo.com-design)

Last updated: 2026-08-03

## Captured pages

[![Dinamo Typefaces](https://pin.fontofweb.com/8621?format=jpg)](https://design.withfudge.com/share/pin-8621)

[Dinamo Typefaces](https://design.withfudge.com/share/pin-8621)

[![Home — Dinamo Typefaces](https://pin.fontofweb.com/40?format=jpg)](https://design.withfudge.com/share/pin-40)

[Home — Dinamo Typefaces](https://design.withfudge.com/share/pin-40)

[![Blog — Dinamo Typefaces](https://pin.fontofweb.com/39?format=jpg)](https://design.withfudge.com/share/pin-39)

[Blog — Dinamo Typefaces](https://design.withfudge.com/share/pin-39)

[![Blog — Dinamo Typefaces](https://pin.fontofweb.com/38?format=jpg)](https://design.withfudge.com/share/pin-38)

[Blog — Dinamo Typefaces](https://design.withfudge.com/share/pin-38)

[![Blog — Dinamo Typefaces](https://pin.fontofweb.com/37?format=jpg)](https://design.withfudge.com/share/pin-37)

[Blog — Dinamo Typefaces](https://design.withfudge.com/share/pin-37)

[![Hardware — Dinamo Typefaces](https://pin.fontofweb.com/36?format=jpg)](https://design.withfudge.com/share/pin-36)

[Hardware — Dinamo Typefaces](https://design.withfudge.com/share/pin-36)

[![Hardware — Dinamo Typefaces](https://pin.fontofweb.com/35?format=jpg)](https://design.withfudge.com/share/pin-35)

[Hardware — Dinamo Typefaces](https://design.withfudge.com/share/pin-35)

[![Hardware — Dinamo Typefaces](https://pin.fontofweb.com/34?format=jpg)](https://design.withfudge.com/share/pin-34)

[Hardware — Dinamo Typefaces](https://design.withfudge.com/share/pin-34)

## Overview

abcdinamo.com presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#000000`, `#63f450`, and `#a0a0a0`, with typography led by **Monument Grotesk** and **Abc Diatype**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#000000` | text on page content |
| color.surface | `#63f450` | surface on page content in the button |
| color.text | `#a0a0a0` | text on page content in the main |
| color.text | `#6e32e1` | text on page content in the main |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.utility-10.2308px | **Monument Grotesk** | 10.2308px | 400 | 11.2539px | normal | <div>, <div> in the main, and <div> in the header |
| type.display-83.9069px | **Monument Grotesk** | 83.9069px | 400 | 75.5162px | normal | <h1> in the header |
| type.body-17.0921px | **Monument Grotesk** | 17.0921px | 400 | 18.8014px | normal | <h3> in the main, <div> in the main, and <span> in the main |
| type.body-21.7536px | **Monument Grotesk** | 21.7536px | 400 | 23.929px | normal | <span> in the main |
| type.display-67.1255px | **Abc Diatype** | 67.1255px | 400 | 1369.36px | normal | <span> in the button |
| type.utility-6.21532px | **Monument Grotesk** | 6.21532px | 400 | 54.3841px | normal | <button> in the button |
| type.body-17.0921px | **Monument Grotesk** | 17.0921px | 400 | 33.0189px | normal | <span> in the main |
| type.utility-6.21532px | **Monument Grotesk** | 6.21532px | 400 | 5.59379px | normal | <div> in the header |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `0px 15.5383px` | margin | page content |
| `61.3851px 218.188px 0px` | margin | page content |
| `4.89457px 0px` | padding | page content |
| `0px 0px 17.0921px` | padding | page content |
| `-3.88458px` | margin | page content |
| `30.6925px 250.438px 0px 250.422px` | margin | page content |
| `0px 46.6149px 17.0921px` | padding | page content |
| `0px 52.2087px` | padding | page content |

### Shape and depth

The captured pages use `0px none 126.793px` border treatments.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#63f450`. Text colors include `#000000`, `#a0a0a0`, and `#6e32e1`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Monument Grotesk** and **Abc Diatype**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `0px 15.5383px`, `61.3851px 218.188px 0px`, `4.89457px 0px`, `0px 0px 17.0921px`, and `-3.88458px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#63f450`. No structured gradient or shadow treatment is established.

## Components and states

The captured pages include repeated styling on <div>, <h1>, <h3>, <span>, and <button> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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
- `#63f450`
- `#a0a0a0`
- `#6e32e1`

## Typography captured from abcdinamo.com

- **Monument Grotesk** — weight 400 · size 10.2308px
- **Abc Diatype** — weight 400 · size 67.1255px

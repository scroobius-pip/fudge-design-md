# How gaio.club is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/gaio.club-design)

Last updated: 2026-08-03

## Captured pages

[![GAÏO - Restaurant, Cabaret et Club](https://pin.fontofweb.com/8016?format=jpg)](https://design.withfudge.com/share/pin-8016)

[GAÏO - Restaurant, Cabaret et Club](https://design.withfudge.com/share/pin-8016)

[![GAÏO - Restaurant, Cabaret et Club](https://pin.fontofweb.com/8015?format=jpg)](https://design.withfudge.com/share/pin-8015)

[GAÏO - Restaurant, Cabaret et Club](https://design.withfudge.com/share/pin-8015)

[![GAÏO - Restaurant, Cabaret et Club](https://pin.fontofweb.com/8014?format=jpg)](https://design.withfudge.com/share/pin-8014)

[GAÏO - Restaurant, Cabaret et Club](https://design.withfudge.com/share/pin-8014)

[![GAÏO - Restaurant, Cabaret et Club](https://pin.fontofweb.com/4554?format=jpg)](https://design.withfudge.com/share/pin-4554)

[GAÏO - Restaurant, Cabaret et Club](https://design.withfudge.com/share/pin-4554)

[![GAÏO - Restaurant, Cabaret et Club](https://pin.fontofweb.com/4553?format=jpg)](https://design.withfudge.com/share/pin-4553)

[GAÏO - Restaurant, Cabaret et Club](https://design.withfudge.com/share/pin-4553)

[![GAÏO - Restaurant, Cabaret et Club](https://pin.fontofweb.com/4552?format=jpg)](https://design.withfudge.com/share/pin-4552)

[GAÏO - Restaurant, Cabaret et Club](https://design.withfudge.com/share/pin-4552)

[![GAÏO - Restaurant, Cabaret et Club](https://pin.fontofweb.com/4551?format=jpg)](https://design.withfudge.com/share/pin-4551)

[GAÏO - Restaurant, Cabaret et Club](https://design.withfudge.com/share/pin-4551)

[![GAÏO - Restaurant, Cabaret et Club](https://pin.fontofweb.com/4550?format=jpg)](https://design.withfudge.com/share/pin-4550)

[GAÏO - Restaurant, Cabaret et Club](https://design.withfudge.com/share/pin-4550)

## Overview

gaio.club presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#000000`, `#fff2da`, and `#ffffff`, with typography led by **Saans** and **Bethany Elingston**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.surface | `#000000` | surface on page content in the main |
| color.text | `#fff2da` | text on page content in the main |
| color.text | `#ffffff` | text on page content in the header |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-14px | **Saans** | 14px | 400 | 16.8px | 0.56px | <div> in the main, <span> in the header, <span> in the main, and <div> in the header |
| type.display-96px | **Bethany Elingston** | 96px | 400 | 115.2px | 2.88px | <span> in the main |
| type.body-18px | **Saans** | 18px | 400 | 21.6px | 0.72px | <span> in the main |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `7px 0px 0px` | padding | page content |
| `6px` | padding | page content |
| `8px 0px` | padding | page content |
| `0px 0px 26px 26px` | margin | page content |

### Shape and depth

No structured border, gradient, or shadow treatment was returned.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#000000`. Text colors include `#fff2da` and `#ffffff`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Saans** and **Bethany Elingston**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `7px 0px 0px`, `6px`, `8px 0px`, and `0px 0px 26px 26px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#000000`. No structured gradient or shadow treatment is established.

## Components and states

The captured pages include repeated styling on <div> and <span> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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
- `#fff2da`
- `#ffffff`

## Typography captured from gaio.club

- **Saans** — weight 400 · size 14px
- **Bethany Elingston** — weight 400 · size 96px

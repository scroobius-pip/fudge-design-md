# How fontstand.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/fontstand.com-design)

Last updated: 2026-08-03

## Captured pages

[![Fontstand International Typography Conference 2026, Berlin, Germany](https://pin.fontofweb.com/6812?format=jpg)](https://design.withfudge.com/share/pin-6812)

[Fontstand International Typography Conference 2026, Berlin, Germany](https://design.withfudge.com/share/pin-6812)

[![Fontstand International Typography Conference 2026, Berlin, Germany](https://pin.fontofweb.com/6811?format=jpg)](https://design.withfudge.com/share/pin-6811)

[Fontstand International Typography Conference 2026, Berlin, Germany](https://design.withfudge.com/share/pin-6811)

[![Fontstand International Typography Conference 2026, Berlin, Germany](https://pin.fontofweb.com/6810?format=jpg)](https://design.withfudge.com/share/pin-6810)

[Fontstand International Typography Conference 2026, Berlin, Germany](https://design.withfudge.com/share/pin-6810)

[![Application — Fontstand](https://pin.fontofweb.com/5506?format=jpg)](https://design.withfudge.com/share/pin-5506)

[Application — Fontstand](https://design.withfudge.com/share/pin-5506)

[![Application — Fontstand](https://pin.fontofweb.com/5505?format=jpg)](https://design.withfudge.com/share/pin-5505)

[Application — Fontstand](https://design.withfudge.com/share/pin-5505)

[![Pricing — Fontstand](https://pin.fontofweb.com/5493?format=jpg)](https://design.withfudge.com/share/pin-5493)

[Pricing — Fontstand](https://design.withfudge.com/share/pin-5493)

[![Pricing — Fontstand](https://pin.fontofweb.com/5492?format=jpg)](https://design.withfudge.com/share/pin-5492)

[Pricing — Fontstand](https://design.withfudge.com/share/pin-5492)

[![Contact — Fontstand](https://pin.fontofweb.com/5491?format=jpg)](https://design.withfudge.com/share/pin-5491)

[Contact — Fontstand](https://design.withfudge.com/share/pin-5491)

## Overview

fontstand.com presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#000000`, `#ff2200`, and `#f4f4f4`, with typography led by **Zed L**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#000000` | text on page content in the main |
| color.surface | `#ff2200` | surface on page content in the main |
| color.surface | `#f4f4f4` | surface on page content |
| color.text | `#ffffff` | text on page content in the main |
| color.surface | `#f8f8f8` | surface on page content in the main |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-14.4px | **Zed L** | 14.4px | 400 | normal | normal | <ul> in the main, <div> in the main, <li> in the main, <ul>, <div> in the header, <ul> in the header, and <span> in the main |
| type.body-21.6px | **Zed L** | 21.6px | 400 | normal | normal | <div> in the main |
| type.body-14.4px | **Zed L** | 14.4px | 400 | 20.16px | normal | <p> in the main |
| type.body-28.8px | **Zed L** | 28.8px | 400 | 34.56px | normal | <div> in the main |
| type.heading-28.8px | **Zed L** | 28.8px | 700 | normal | normal | <h2> in the main |
| type.display-57.6px | **Zed L** | 57.6px | 900 | 51.84px | normal | <h1> in the header |
| type.heading-21.6px | **Zed L** | 21.6px | 700 | normal | normal | <h3> in the main |
| type.utility-11.52px | **Zed L** | 11.52px | 400 | 16.128px | normal | <p> in the main |
| type.body-14.4px | **Zed L** | 14.4px | 400 | 50px | normal | <a> in the main |
| type.heading-21.6px | **Zed L** | 21.6px | 700 | 21.6px | normal | <p> in the header |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `20px` | padding | page content |
| `0px 0px 20px` | margin | page content |
| `302.664px 0px 0px` | padding | page content |
| `0px 4px 0px 0px` | padding | page content |
| `0px 20px 0px 0px` | padding | page content |
| `40px 0px` | margin | page content |
| `10px 20px` | padding | page content |
| `0px 20px` | padding | page content |

### Shape and depth

The captured pages use `0px none 3px`, `0px none 25px`, `0px none 40px`, and `1px solid 15px` border treatments.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#ff2200`, `#f4f4f4`, and `#f8f8f8`. Text colors include `#000000` and `#ffffff`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Zed L**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `20px`, `0px 0px 20px`, `302.664px 0px 0px`, `0px 4px 0px 0px`, and `0px 20px 0px 0px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#ff2200`, `#f4f4f4`, and `#f8f8f8`. No structured gradient or shadow treatment is established.

## Components and states

The captured pages include repeated styling on <h2>, <ul>, <div>, <li>, <h3>, <p>, <h1>, and <a> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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
- `#ff2200`
- `#f4f4f4`
- `#ffffff`
- `#f8f8f8`

## Typography captured from fontstand.com

- **Zed L** — weight 700 · size 28.8px

# How campaignlive.co.uk is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/campaignlive.co.uk-design)

Last updated: 2026-08-03

## Captured pages

[![UK subscription](https://pin.fontofweb.com/7894?format=jpg)](https://design.withfudge.com/share/pin-7894)

[UK subscription](https://design.withfudge.com/share/pin-7894)

[![UK subscription](https://pin.fontofweb.com/7893?format=jpg)](https://design.withfudge.com/share/pin-7893)

[UK subscription](https://design.withfudge.com/share/pin-7893)

[![UK subscription](https://pin.fontofweb.com/7892?format=jpg)](https://design.withfudge.com/share/pin-7892)

[UK subscription](https://design.withfudge.com/share/pin-7892)

[![UK subscription](https://pin.fontofweb.com/7891?format=jpg)](https://design.withfudge.com/share/pin-7891)

[UK subscription](https://design.withfudge.com/share/pin-7891)

[![History of advertising: No 110: The Hathaway man's eyepatch](https://pin.fontofweb.com/7890?format=jpg)](https://design.withfudge.com/share/pin-7890)

[History of advertising: No 110: The Hathaway man's eyepatch](https://design.withfudge.com/share/pin-7890)

## Overview

campaignlive.co.uk presents a mixed light and dark surface treatment in the captured pages. The system is anchored by `#000000`, `#1c1c1c`, and `#ffffff`, with typography led by **Freightpro**, **Tabletgothicnarrow**, and **Lato**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#000000` | text on page content in the header |
| color.text | `#1c1c1c` | text on page content in the main |
| color.surface | `#ffffff` | surface on page content in the main |
| color.text | `#c5001d` | text on page content in the header |
| color.border | `#e5e5e5` | border on page content in the main |
| color.text | `#3c3c3c` | text on page content in the header |
| color.surface | `#ff0000` | surface on page content in the main |
| color.surface | `#f9f9f9` | surface on page content in the nav |
| color.text | `#0d101a` | text on page content in the main |
| color.text | `#212121` | text on page content in the nav |
| color.border | `#e6e6e6` | border on page content in the nav |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-20px | **Freightpro** | 20px | 400 | 30px | normal | <div> in the main, <span> in the main, <p> in the main, <ul> in the main, and <li> in the main |
| type.body-18px | **Tabletgothicnarrow** | 18px | 400 | 27px | normal | <div> in the header, <a> in the header, <div>, <div> in the nav, <div> in the main, <div> in the aside, <li> in the aside, <a> in the nav, <span> in the main, <a> in the main, <p> in the main, and <a> |
| type.body-20px | **Tabletgothicnarrow** | 20px | 400 | 30px | normal | <p> in the main, <span> in the main, and <div> in the main |
| type.body-20px | **Tabletgothicnarrow** | 20px | 400 | 22px | normal | <div> in the main |
| type.body-15.3px | **Tabletgothicnarrow** | 15.3px | 400 | 26.01px | normal | <li> in the nav, <a> in the nav, and <span> in the nav |
| type.display-58.5px | **Tabletgothicnarrow** | 58.5px | 900 | 70.2px | normal | <h1> in the header |
| type.display-44px | **Tabletgothicnarrow** | 44px | 700 | 51.92px | normal | <strong> in the main |
| type.display-50.0825px | **Tabletgothicnarrow** | 50.0825px | 700 | 59.0973px | normal | <strong> in the main |
| type.display-32px | **Tabletgothicnarrow** | 32px | 700 | 37.76px | normal | <h3> in the main |
| type.heading-18px | **Tabletgothicnarrow** | 18px | 700 | 19.8px | normal | <a> in the main |
| type.display-50.0825px | **Tabletgothicnarrow** | 50.0825px | 400 | 59.0973px | normal | <h3> in the main |
| type.heading-20px | **Freightpro** | 20px | 700 | 30px | normal | <strong> in the main |
| type.heading-23.94px | **Lato** | 23.94px | 700 | 28.728px | normal | <a> in the main and <h3> in the main |
| type.body-18px | **Freightpro** | 18px | 400 | 27px | normal | <a> in the nav |
| type.heading-20.7px | **Tabletgothicnarrow** | 20.7px | 700 | 28.98px | normal | <h3> |
| type.body-20.7px | **Freightpro** | 20.7px | 400 | 28.98px | normal | <p> |
| type.display-32px | **Freightpro** | 32px | 400 | 37.76px | normal | <p> in the main |
| type.display-32px | **Freightpro** | 32px | 700 | 37.76px | normal | <strong> in the main |
| type.display-44px | **Tabletgothicnarrow** | 44px | 900 | 51.92px | normal | <h2> in the main |
| type.body-18px | **Tabletgothicnarrow** | 18px | 300 | 27px | normal | <li> in the nav |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `40px 40px 85px` | padding | page content |
| `10px 20px 24px` | padding | page content |
| `10px 0px` | margin | page content |
| `27px 0px` | margin | page content |
| `3px 0px 10px` | padding | page content |
| `0px 232px` | margin | page content |
| `0px 40px` | padding | page content |
| `0px 0px 9px 22px` | margin | page content |

### Shape and depth

The captured pages use `1px solid 0px`, `0px none 6.3px`, `1px solid 0px`, `1px solid 0px`, `1px solid 50px`, and `1px solid 50%` border treatments. Recorded shadows include `rgba(0, 0, 0, 0) 0px 0px 0px 0px rgb(0,0,0)`.

## Colors

The visual system is mixed light and dark surface treatment. Surface colors include `#ffffff`, `#ff0000`, and `#f9f9f9`. Text colors include `#000000`, `#1c1c1c`, and `#c5001d`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Freightpro**, **Tabletgothicnarrow**, and **Lato**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `40px 40px 85px`, `10px 20px 24px`, `10px 0px`, `27px 0px`, and `3px 0px 10px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is mixed light and dark surface treatment. Surface treatment centers on `#ffffff`, `#ff0000`, and `#f9f9f9`. Depth is supported by the returned shadows.

## Components and states

The captured pages include repeated styling on <div>, <a>, <h3>, <p>, <strong>, <span>, <ul>, and <li> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

## Responsive behavior

The captured token set does not establish breakpoint values or mobile behavior. Validate stacking, navigation changes, image treatment, and type scaling against the representative captures before implementing a responsive adaptation.

## Practical implementation guidance

- Preserve the mixed light/dark surface relationship and the measured type hierarchy before adding decorative treatment.
- Start from the returned typography, spacing, color, and border values; name any new scale or semantic role as an adaptation rather than as a source fact.
- Keep the captured font families separate from licensing decisions.
- Use screenshots to validate component anatomy, responsive behavior, focus treatment, and motion before shipping.
- Avoid introducing gradients or shadows beyond the captured treatment; the returned evidence includes those treatments.

## Scope note

The guide uses representative captured pages. The evidence supports the values and observations above; it does not establish component semantics, interaction states, motion timing, breakpoint rules, font licensing, or a complete source stylesheet.

## Colors

- `#000000`
- `#1c1c1c`
- `#ffffff`
- `#c5001d`
- `#e5e5e5`
- `#3c3c3c`
- `#ff0000`
- `#f9f9f9`
- `#0d101a`
- `#212121`
- `#e6e6e6`

## Typography captured from campaignlive.co.uk

- **Freightpro** — weight 400 · size 20px
- **Tabletgothicnarrow** — weight 400 · size 18px
- **Lato** — weight 700 · size 23.94px

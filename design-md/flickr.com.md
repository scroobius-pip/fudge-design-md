# How flickr.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/flickr.com-design)

Last updated: 2026-08-03

## Captured pages

[![About Flickr | We’re the real deal.](https://pin.fontofweb.com/8230?format=jpg)](https://design.withfudge.com/share/pin-8230)

[About Flickr | We’re the real deal.](https://design.withfudge.com/share/pin-8230)

[![About Flickr | We’re the real deal.](https://pin.fontofweb.com/8229?format=jpg)](https://design.withfudge.com/share/pin-8229)

[About Flickr | We’re the real deal.](https://design.withfudge.com/share/pin-8229)

[![Flickr Pro | Get to know Flickr Pro.](https://pin.fontofweb.com/8228?format=jpg)](https://design.withfudge.com/share/pin-8228)

[Flickr Pro | Get to know Flickr Pro.](https://design.withfudge.com/share/pin-8228)

[![Flickr | Come for the photos, stay for the weirdos.](https://pin.fontofweb.com/8227?format=jpg)](https://design.withfudge.com/share/pin-8227)

[Flickr | Come for the photos, stay for the weirdos.](https://design.withfudge.com/share/pin-8227)

[![Flickr | The best place to be a photographer online.](https://pin.fontofweb.com/8226?format=jpg)](https://design.withfudge.com/share/pin-8226)

[Flickr | The best place to be a photographer online.](https://design.withfudge.com/share/pin-8226)

[![Flickr | The best place to be a photographer online.](https://pin.fontofweb.com/8225?format=jpg)](https://design.withfudge.com/share/pin-8225)

[Flickr | The best place to be a photographer online.](https://design.withfudge.com/share/pin-8225)

## Overview

flickr.com presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#000000`, `#333333`, and `#d9d7ce`, with typography led by **Proxima Nova** and **System**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.surface | `#000000` | surface on page content in the main |
| color.text | `#333333` | text on page content in the main |
| color.text | `#d9d7ce` | text on page content in the main |
| color.text | `#0000ee` | text on page content in the main |
| color.surface | `#232323` | surface on page content in the main |
| color.surface | `#bdbbb3` | surface on page content in the main |
| color.surface | `#f6ff00` | surface on page content in the main |
| color.text | `#ffffff` | text on page content in the main |
| color.surface | `#ff0084` | surface on page content in the header |
| color.surface | `#98d6d9` | surface on page content in the main |
| color.surface | `#0967e7` | surface on page content in the main |
| color.text | `#787878` | text on page content in the main |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-22.3333px | **Proxima Nova** | 22.3333px | 400 | 20px | normal | <a> in the main, <div> in the main, <div> in the header, and <div> |
| type.display-107.2px | **Proxima Nova** | 107.2px | 700 | 80.4px | -5px | <h2> in the main |
| type.display-138.467px | **Proxima Nova** | 138.467px | 700 | 96.9267px | -6px | <h1> in the main and <span> in the main |
| type.display-44.6667px | **Proxima Nova** | 44.6667px | 700 | 44.6667px | -1px | <h2> in the main |
| type.display-55.8333px | **Proxima Nova** | 55.8333px | 700 | 44.6667px | -1px | <h2> in the main |
| type.heading-22.3333px | **Proxima Nova** | 22.3333px | 600 | 20px | normal | <a> in the main and <div> in the main |
| type.body-27.9167px | **Proxima Nova** | 27.9167px | 300 | 36.2917px | normal | <span> in the main and <p> in the main |
| type.body-16px | **Proxima Nova** | 16px | 400 | 20px | normal | <div> in the header |
| type.body-20.1px | **Proxima Nova** | 20.1px | 300 | 30.15px | normal | <p> |
| type.body-22.3333px | **Proxima Nova** | 22.3333px | 300 | 29.0333px | normal | <p> in the main |
| type.display-55.8333px | **Proxima Nova** | 55.8333px | 700 | 41.875px | -1px | <h3> in the main |
| type.heading-20.1px | **Proxima Nova** | 20.1px | 700 | 30.15px | normal | <p> |
| type.body-20.1px | **Proxima Nova** | 20.1px | 400 | 20px | 0.5px | <a> in the nav |
| type.heading-20.1px | **Proxima Nova** | 20.1px | 700 | 25.125px | 1px | <div> in the main |
| type.body-15.075px | **Proxima Nova** | 15.075px | 400 | 25.6275px | normal | <div> in the main |
| type.heading-17.8667px | **Proxima Nova** | 17.8667px | 600 | 26.8px | 1px | <div> in the main |
| type.heading-20.1px | **Proxima Nova** | 20.1px | 700 | 24.12px | 0.5px | <a> in the header |
| type.heading-20.1px | **Proxima Nova** | 20.1px | 700 | 20px | 1px | <a> in the header |
| type.display-107.2px | **Proxima Nova** | 107.2px | 700 | 80.4px | -6px | <h2> in the main |
| type.heading-16px | **Proxima Nova** | 16px | 700 | 16px | 1px | <a> in the main |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `55.8333px 33.5px` | padding | page content |
| `0px 0px -44.6667px` | margin | page content |
| `44.6667px 33.5px 33.5px` | padding | page content |
| `0px 164.844px 0px 164.828px` | margin | page content |
| `26.8px 0px 0px` | margin | page content |
| `22.3333px 0px 0px` | padding | page content |
| `55.8333px 55.8333px 33.5px` | padding | page content |
| `22.3333px` | padding | page content |

### Shape and depth

The captured pages use `22px solid 0px`, `40px solid 0px`, `0px none 7px`, `0px none 5px`, `1px solid 50%`, and `1px solid 50%` border treatments.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#000000`, `#232323`, and `#bdbbb3`. Text colors include `#333333`, `#d9d7ce`, and `#0000ee`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Proxima Nova**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `55.8333px 33.5px`, `0px 0px -44.6667px`, `44.6667px 33.5px 33.5px`, `0px 164.844px 0px 164.828px`, and `26.8px 0px 0px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#000000`, `#232323`, `#bdbbb3`, and `#f6ff00`. No structured gradient or shadow treatment is established.

## Components and states

The captured pages include repeated styling on <a>, <h2>, <div>, <p>, <h3>, <span>, <strong>, and <h1> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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
- `#333333`
- `#d9d7ce`
- `#0000ee`
- `#232323`
- `#bdbbb3`
- `#f6ff00`
- `#ffffff`
- `#ff0084`
- `#98d6d9`
- `#0967e7`
- `#787878`
- `#161613`
- `#cccccc`

## Typography captured from flickr.com

- **Proxima Nova** — weight 400 · size 22.3333px
- **System** — weight 400 · size 14px

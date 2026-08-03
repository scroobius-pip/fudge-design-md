# How bbc.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/bbc.com-design)

Last updated: 2026-08-03

## Captured pages

[![Наступление повстанцев в Мали: три сценария развития событий для военного правительства, которое поддерживает Россия - BBC News Русская служба](https://pin.fontofweb.com/9169?format=jpg)](https://design.withfudge.com/share/pin-9169)

[Наступление повстанцев в Мали: три сценария развития событий для военного правительства, которое поддерживает Россия - BBC News Русская служба](https://design.withfudge.com/share/pin-9169)

[![When Attenborough met the gorillas - the story behind his iconic TV moment](https://pin.fontofweb.com/9109?format=jpg)](https://design.withfudge.com/share/pin-9109)

[When Attenborough met the gorillas - the story behind his iconic TV moment](https://design.withfudge.com/share/pin-9109)

[![BBC Home - Breaking News, World News, US News, Sports, Business, Innovation, Climate, Culture, Travel, Video & Audio](https://pin.fontofweb.com/6962?format=jpg)](https://design.withfudge.com/share/pin-6962)

[BBC Home - Breaking News, World News, US News, Sports, Business, Innovation, Climate, Culture, Travel, Video & Audio](https://design.withfudge.com/share/pin-6962)

## Overview

bbc.com presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#000000`, `#202224`, and `#141414`, with typography led by **Times**, **By Dalton Maag Ltd**, and **Times New Roman**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.surface | `#000000` | surface on page content in the main |
| color.text | `#202224` | text on page content in the main |
| color.text | `#141414` | text on page content in the main |
| color.text | `#545658` | text on page content in the main |
| color.surface | `#f6f6f6` | surface on page content in the main |
| color.text | `#ffffff` | text on page content in the button |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **Times** | 16px | 400 | 16px | normal | <div>, <div> in the header, <div> in the main, and <a> in the main |
| type.body-16px | **By Dalton Maag Ltd** | 16px | 400 | 22px | normal | <span> in the main and <p> in the main |
| type.body-18px | **By Dalton Maag Ltd** | 18px | 400 | 26px | -0.36px | <p> in the main |
| type.body-13.3333px | **Times New Roman** | 13.3333px | 400 | normal | normal | <button> in the button |
| type.body-16px | **Times New Roman** | 16px | 400 | 16px | normal | <div> in the header and <div> in the main |
| type.body-14px | **By Dalton Maag Ltd** | 14px | 400 | 18px | normal | <p> in the main |
| type.body-18px | **By Dalton Maag Ltd** | 18px | 500 | 22px | -0.36px | <h2> in the main |
| type.body-14px | **By Dalton Maag Ltd** | 14px | 500 | 18px | normal | <a> in the nav |
| type.body-16px | **Times New Roman** | 16px | 400 | 21.6px | normal | <li> in the main |
| type.utility-12px | **By Dalton Maag Ltd** | 12px | 400 | 14px | -0.12px | <span> in the main |
| type.body-16px | **By Dalton Maag Ltd** | 16px | 500 | 18px | normal | <span> in the button and <button> in the button |
| type.heading-14px | **By Dalton Maag Ltd** | 14px | 700 | 18px | normal | <a> in the nav |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `0px 40px 24px 0px` | padding | page content |
| `12px 16px` | padding | page content |
| `12px 8px` | padding | page content |
| `-12px 0px 0px` | margin | page content |
| `0px 16px` | margin | page content |
| `0px 0px 4px` | padding | page content |
| `0px 0px 24px` | padding | page content |
| `6px 12px` | padding | page content |

### Shape and depth

The captured pages use `2px solid 0px` border treatments.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#000000` and `#f6f6f6`. Text colors include `#202224`, `#141414`, and `#545658`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Times**, **By Dalton Maag Ltd**, and **Times New Roman**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `0px 40px 24px 0px`, `12px 16px`, `12px 8px`, `-12px 0px 0px`, and `0px 16px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#000000` and `#f6f6f6`. No structured gradient or shadow treatment is established.

## Components and states

The captured pages include repeated styling on <span>, <p>, <li>, <div>, <a>, <button>, and <h2> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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
- `#202224`
- `#141414`
- `#545658`
- `#f6f6f6`
- `#ffffff`

## Typography captured from bbc.com

- **Times** — weight 400 · size 16px
- **By Dalton Maag Ltd** — weight 400 · size 16px
- **Times New Roman** — weight 400 · size 16px

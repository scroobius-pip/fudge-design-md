# How dzen.ru is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/dzen.ru-design)

Last updated: 2026-08-03

## Captured pages

[![В Южно-Сахалинске застрелили медведя, взявшего в осаду учебный центр — подробности события | Дзен](https://pin.fontofweb.com/8996?format=jpg)](https://design.withfudge.com/share/pin-8996)

[В Южно-Сахалинске застрелили медведя, взявшего в осаду учебный центр — подробности события | Дзен](https://design.withfudge.com/share/pin-8996)

[![Дзен: последние новости России и мира сегодня](https://pin.fontofweb.com/8995?format=jpg)](https://design.withfudge.com/share/pin-8995)

[Дзен: последние новости России и мира сегодня](https://design.withfudge.com/share/pin-8995)

## Overview

dzen.ru presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#000000`, `#06060f`, and `#006be7`, with typography led by **Stella Sans Vf**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.surface | `#000000` | surface on page content in the main |
| color.text | `#06060f` | text on page content in the main |
| color.text | `#006be7` | text on page content in the main |
| color.text | `#ffffff` | text on page content in the button |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **Stella Sans Vf** | 16px | 400 | 16px | normal | <div> in the main, <div> in the header, and <a> in the main |
| type.body-18px | **Stella Sans Vf** | 18px | 400 | 28px | 0.16px | <span> in the main, <a> in the main, and <p> in the main |
| type.body-16px | **Stella Sans Vf** | 16px | 400 | 20px | 0.04px | <p> in the main |
| type.heading-24px | **Stella Sans Vf** | 24px | 700 | 28px | 0.36px | <a> in the main and <h1> in the main |
| type.body-16px | **Stella Sans Vf** | 16px | 590 | 20px | 0.04px | <div> in the main |
| type.body-16px | **Stella Sans Vf** | 16px | 400 | 20px | normal | <a> in the main and <div> in the main |
| type.heading-19px | **Stella Sans Vf** | 19px | 700 | 24px | -0.24px | <div> in the button |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `16px 16px 0px 0px` | padding | page content |
| `16px 0px 0px` | padding | page content |
| `12px 0px 0px` | margin | page content |
| `0px 16px 0px 0px` | padding | page content |
| `0px 12px 0px 11px` | margin | page content |
| `0px 12px 0px 0px` | margin | page content |

### Shape and depth

The captured pages use `0px none 20px` and `0px none 50%` border treatments.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#000000`. Text colors include `#06060f`, `#006be7`, and `#ffffff`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Stella Sans Vf**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `16px 16px 0px 0px`, `16px 0px 0px`, `12px 0px 0px`, `0px 16px 0px 0px`, and `0px 12px 0px 11px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#000000`. No structured gradient or shadow treatment is established.

## Components and states

The captured pages include repeated styling on <div>, <a>, <span>, <h1>, and <p> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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
- `#06060f`
- `#006be7`
- `#ffffff`

## Typography captured from dzen.ru

- **Stella Sans Vf** — weight 400 · size 16px

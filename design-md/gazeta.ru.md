# How gazeta.ru is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/gazeta.ru-design)

Last updated: 2026-08-03

## Captured pages

[![Стало известно о последствиях непогоды в Московской области - Газета.Ru | Новости](https://pin.fontofweb.com/9101?format=jpg)](https://design.withfudge.com/share/pin-9101)

[Стало известно о последствиях непогоды в Московской области - Газета.Ru | Новости](https://design.withfudge.com/share/pin-9101)

[![Главные новости России и мира сегодня - Газета.Ru](https://pin.fontofweb.com/9089?format=jpg)](https://design.withfudge.com/share/pin-9089)

[Главные новости России и мира сегодня - Газета.Ru](https://design.withfudge.com/share/pin-9089)

## Overview

gazeta.ru presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#000000`, `#202020`, and `#cccccc`, with typography led by **Source Sans 3** and **Bitter**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#000000` | text on page content |
| color.shadow | `#202020` | shadow on page content in the header |
| color.text | `#cccccc` | text on page content |
| color.surface | `#ffffff` | surface on page content in the header |
| color.surface | `#f5f5f5` | surface on page content |
| color.surface | `#303030` | surface on page content |
| color.surface | `#c9181e` | surface on page content |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-18px | **Source Sans 3** | 18px | 400 | 22.5px | normal | <div> |
| type.body-20px | **Source Sans 3** | 20px | 400 | 30px | normal | <p> and <a> |
| type.body-16px | **Source Sans 3** | 16px | 400 | 20px | normal | <div> in the aside |
| type.heading-16px | **Bitter** | 16px | 700 | 21.6px | normal | <div> |
| type.heading-16px | **Bitter** | 16px | 700 | 20px | normal | <div> |
| type.heading-28px | **Bitter** | 28px | 700 | 37.8px | normal | <h5> |
| type.utility-12px | **Source Sans 3** | 12px | 400 | 16.2px | normal | <div> |
| type.body-14px | **Source Sans 3** | 14px | 400 | 18.9px | normal | <a> and <span> |
| type.heading-20px | **Source Sans 3** | 20px | 700 | 25px | normal | <div> in the aside |
| type.body-16px | **Source Sans 3** | 16px | 400 | 32px | 0.8px | <div> |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `0px 0px 16px` | margin | page content |
| `8px 34px` | padding | page content |
| `16px` | padding | page content |
| `24px 0px 0px` | padding | page content |
| `0px -15.3333px 0px 0px` | margin | page content |
| `0px 0px 0px 24px` | padding | page content |
| `0px 0px 8px` | margin | page content |
| `0px 0px 12px` | padding | page content |

### Shape and depth

The captured pages use `0px none 2px` border treatments. Recorded shadows include `rgba(32, 32, 32, 0.15) 0px 1px 3px 0px`.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#ffffff`, `#f5f5f5`, and `#303030`. Text colors include `#000000` and `#cccccc`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Source Sans 3** and **Bitter**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `0px 0px 16px`, `8px 34px`, `16px`, `24px 0px 0px`, and `0px -15.3333px 0px 0px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#ffffff`, `#f5f5f5`, `#303030`, and `#c9181e`. Depth is supported by the returned shadows.

## Components and states

The captured pages include repeated styling on <div>, <p>, <a>, <h5>, and <span> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

## Responsive behavior

The captured token set does not establish breakpoint values or mobile behavior. Validate stacking, navigation changes, image treatment, and type scaling against the representative captures before implementing a responsive adaptation.

## Practical implementation guidance

- Preserve the dark surface relationship and the measured type hierarchy before adding decorative treatment.
- Start from the returned typography, spacing, color, and border values; name any new scale or semantic role as an adaptation rather than as a source fact.
- Keep the captured font families separate from licensing decisions.
- Use screenshots to validate component anatomy, responsive behavior, focus treatment, and motion before shipping.
- Avoid introducing gradients or shadows beyond the captured treatment; the returned evidence includes those treatments.

## Scope note

The guide uses representative captured pages. The evidence supports the values and observations above; it does not establish component semantics, interaction states, motion timing, breakpoint rules, font licensing, or a complete source stylesheet.

## Colors

- `#000000`
- `#202020`
- `#cccccc`
- `#ffffff`
- `#f5f5f5`
- `#303030`
- `#c9181e`

## Typography captured from gazeta.ru

- **Source Sans 3** — weight 400 · size 20px
- **Bitter** — weight 700 · size 28px

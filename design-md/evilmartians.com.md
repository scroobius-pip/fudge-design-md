# How evilmartians.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/evilmartians.com-design)

Last updated: 2026-08-03

## Captured pages

[![OKLCH in CSS: why we moved from RGB and HSL—Martian Chronicles, Evil Martians’ team blog](https://pin.fontofweb.com/8135?format=jpg)](https://design.withfudge.com/share/pin-8135)

[OKLCH in CSS: why we moved from RGB and HSL—Martian Chronicles, Evil Martians’ team blog](https://design.withfudge.com/share/pin-8135)

[![OKLCH in CSS: why we moved from RGB and HSL—Martian Chronicles, Evil Martians’ team blog](https://pin.fontofweb.com/8134?format=jpg)](https://design.withfudge.com/share/pin-8134)

[OKLCH in CSS: why we moved from RGB and HSL—Martian Chronicles, Evil Martians’ team blog](https://design.withfudge.com/share/pin-8134)

[![OKLCH in CSS: why we moved from RGB and HSL—Martian Chronicles, Evil Martians’ team blog](https://pin.fontofweb.com/8133?format=jpg)](https://design.withfudge.com/share/pin-8133)

[OKLCH in CSS: why we moved from RGB and HSL—Martian Chronicles, Evil Martians’ team blog](https://design.withfudge.com/share/pin-8133)

[![Evil Martians design and develop high performance developer tools that scale](https://pin.fontofweb.com/8132?format=jpg)](https://design.withfudge.com/share/pin-8132)

[Evil Martians design and develop high performance developer tools that scale](https://design.withfudge.com/share/pin-8132)

## Overview

evilmartians.com presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#000000`, `#ffffff`, and `#cb009e`, with typography led by **Martian Grotesk** and **Martian Mono Vf**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#000000` | text on page content |
| color.surface | `#ffffff` | surface on page content in the main |
| color.text | `#cb009e` | text on page content in the main |
| color.text | `#663f4c` | text on page content in the header |
| color.text | `#89868a` | text on page content in the main |
| color.text | `#a1490f` | text on page content in the main |
| color.text | `#550098` | text on page content in the main |
| color.text | `#727d00` | text on page content in the main |
| color.text | `#3b393d` | text on page content in the main |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-15px | **Martian Grotesk** | 15px | 400 | 36px | normal | <div>, <div> in the main, <div> in the header, <a> in the header, <span> in the main, <li> in the main, <ul> in the main, <div> in the aside, and <div> in the nav |
| type.display-60px | **Martian Grotesk** | 60px | 900 | 64px | -1.2px | <h1> in the main |
| type.body-20px | **Martian Grotesk** | 20px | 300 | 48px | normal | <div> in the main and <p> in the main |
| type.utility-12.5px | **Martian Mono Vf** | 12.5px | 400 | 22px | normal | <span> in the main, <code> in the main, and <div> in the main |
| type.heading-30px | **Martian Grotesk** | 30px | 800 | 36px | normal | <h2> in the main |
| type.utility-12.5px | **Martian Grotesk** | 12.5px | 700 | 14px | 0.5px | <div> in the nav |
| type.heading-15px | **Martian Grotesk** | 15px | 700 | 24px | normal | <h2> in the main and <p> in the main |
| type.body-15px | **Martian Grotesk** | 15px | 500 | 36px | normal | <a> in the main and <div> in the main |
| type.body-15px | **Martian Grotesk** | 15px | 400 | 0px | normal | <ul> in the main |
| type.utility-12.5px | **Martian Grotesk** | 12.5px | 700 | 14px | normal | <a> in the main |
| type.utility-12.5px | **Martian Grotesk** | 12.5px | 400 | 22px | normal | <p> in the main |
| type.heading-20px | **Martian Grotesk** | 20px | 700 | 28px | normal | <button> in the button |
| type.display-33px | **Martian Grotesk** | 33px | 900 | 42px | -0.33px | <div> in the header |
| type.body-13.3333px | **Martian Grotesk** | 13.3333px | 400 | normal | normal | <button> in the button |
| type.utility-12.5px | **Martian Mono Vf** | 12.5px | 300 | 22px | normal | <span> in the main |
| type.body-20px | **Martian Grotesk** | 20px | 500 | 48px | normal | <a> in the main |
| type.body-20px | **Martian Mono Vf** | 20px | 300 | 48px | normal | <code> in the main |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `48px 0px` | padding | page content |
| `48px 0px 24px` | padding | page content |
| `24px 0px` | padding | page content |
| `0px 48px` | padding | page content |
| `40px 0px 54px` | padding | page content |
| `48px 0px 12px` | padding | page content |
| `50px` | padding | page content |
| `36px 0px 12px` | padding | page content |

### Shape and depth

The captured pages use `0px none 50%`, `0px none 4px`, and `1px solid 0px` border treatments. Recorded gradients include `linear-gradient(oklch(1 0 0), oklch(1 0 0))` and `linear-gradient(oklch(0 0 0), oklch(0 0 0))`.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#ffffff`. Text colors include `#000000`, `#cb009e`, and `#663f4c`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Martian Grotesk** and **Martian Mono Vf**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `48px 0px`, `48px 0px 24px`, `24px 0px`, `0px 48px`, and `40px 0px 54px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#ffffff`. Depth is supported by the returned gradients.

## Components and states

The captured pages include repeated styling on <div>, <span>, <code>, <a>, <h1>, <h2>, <p>, and <ul> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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
- `#ffffff`
- `#cb009e`
- `#663f4c`
- `#89868a`
- `#a1490f`
- `#550098`
- `#727d00`
- `#3b393d`

## Typography captured from evilmartians.com

- **Martian Grotesk** — weight 400 · size 15px
- **Martian Mono Vf** — weight 400 · size 12.5px

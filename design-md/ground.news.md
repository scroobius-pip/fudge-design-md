# How ground.news is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/ground.news-design)

Last updated: 2026-08-03

## Captured pages

[![Ground News](https://pin.fontofweb.com/8644?format=jpg)](https://design.withfudge.com/share/pin-8644)

[Ground News](https://design.withfudge.com/share/pin-8644)

[![ground.news](https://pin.fontofweb.com/8643?format=jpg)](https://design.withfudge.com/share/pin-8643)

[ground.news](https://design.withfudge.com/share/pin-8643)

[![ground.news](https://pin.fontofweb.com/8642?format=jpg)](https://design.withfudge.com/share/pin-8642)

[ground.news](https://design.withfudge.com/share/pin-8642)

[![ground.news](https://pin.fontofweb.com/8641?format=jpg)](https://design.withfudge.com/share/pin-8641)

[ground.news](https://design.withfudge.com/share/pin-8641)

[![ground.news](https://pin.fontofweb.com/8640?format=jpg)](https://design.withfudge.com/share/pin-8640)

[ground.news](https://design.withfudge.com/share/pin-8640)

## Overview

ground.news presents a mixed light and dark surface treatment in the captured pages. The system is anchored by `#eeefe9`, `#000000`, and `#262626`, with typography led by **Universal Sans 480**, **Universal Sans**, and **Universal Sans 680**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#eeefe9` | text on page content in the header |
| color.surface | `#000000` | surface on page content |
| color.text | `#262626` | text on page content |
| color.surface | `#e6e8de` | surface on page content in the main |
| color.border | `#393938` | border on page content in the main |
| color.border | `#a6a6a1` | border on page content in the main |
| color.surface | `#204986` | surface on page content in the main |
| color.border | `#121212` | border on page content in the main |
| color.surface | `#ffffff` | surface on page content in the main |
| color.text | `#d7d8d3` | text on page content in the main |
| color.surface | `#802727` | surface on page content in the button |
| color.surface | `#282520` | surface on page content in the main |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **Universal Sans 480** | 16px | 400 | 20px | -0.8px | <div> in the main |
| type.heading-16px | **Universal Sans 480** | 16px | 600 | 20px | -0.8px | <div> in the main, <a> in the main, and <span> in the main |
| type.body-14px | **Universal Sans 480** | 14px | 400 | 17.5px | -0.8px | <div> in the main and <a> in the main |
| type.body-18px | **Universal Sans** | 18px | 480 | 27px | -0.45px | <div> in the main |
| type.heading-16px | **Universal Sans** | 16px | 600 | 17.5px | normal | <div> in the main, <span> in the main, <a> in the main, and <button> in the button |
| type.display-42px | **Universal Sans** | 42px | 680 | 52.5px | -0.8px | <h3> in the main and <h1> in the main |
| type.display-42px | **Universal Sans 680** | 42px | 680 | 45px | -1.05px | <h2> in the main |
| type.body-16px | **Universal Sans 480** | 16px | 480 | 20px | -0.8px | <span> in the main |
| type.heading-18px | **Universal Sans 680** | 18px | 680 | 27px | normal | <div> |
| type.heading-26px | **Universal Sans 480** | 26px | 600 | 32.5px | -0.8px | <a> in the main, <span> in the main, and <div> in the main |
| type.body-16px | **Universal Sans** | 16px | 400 | 24px | normal | <div> in the main and <ul> in the main |
| type.body-16px | **Universal Sans** | 16px | 500 | 24px | normal | <div> in the header |
| type.display-42px | **Universal Sans 680** | 42px | 680 | 46.2px | -0.45px | <span> in the main |
| type.body-26px | **Universal Sans** | 26px | 480 | 32.5px | -0.45px | <span> in the main and <div> in the main |
| type.body-18px | **Universal Sans 480** | 18px | 400 | 22.5px | normal | <span> in the main |
| type.utility-12px | **Universal Sans** | 12px | 600 | 18px | normal | <div> in the header |
| type.display-42px | **Universal Sans** | 42px | 680 | 46.2px | -0.8px | <span> in the main |
| type.utility-12px | **Universal Sans** | 12px | 500 | 18px | normal | <div> in the header, <a> in the header, <span> in the header, and <button> in the button |
| type.body-18px | **Universal Sans 480** | 18px | 480 | 22.5px | -0.8px | <span> in the main |
| type.display-42px | **Universal Sans** | 42px | 800 | 46.2px | -0.8px | <h2> in the main |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `20px 10.08px` | padding | page content |
| `80px 0px` | padding | page content |
| `40px 32px` | padding | page content |
| `0px 32px` | padding | page content |
| `-30.4px 0px 0px` | margin | page content |
| `0px 9.6px` | padding | page content |
| `0px 32px -9.6px 0px` | margin | page content |
| `0px 250.906px` | margin | page content |

### Shape and depth

The captured pages use `1px solid 10px 10px 0px 0px`, `2px solid 8px`, `1px solid 20.8px`, `0px none 9.6px`, `2px solid 4px`, `0px none 4px`, `0px none 2.5px`, and `1px solid 4px` border treatments. Recorded gradients include `linear-gradient(to top in oklab, rgb(38, 38, 38) 0%, rgba(0, 0, 0, 0) 100%)`.

## Colors

The visual system is mixed light and dark surface treatment. Surface colors include `#000000`, `#e6e8de`, and `#204986`. Text colors include `#eeefe9`, `#262626`, and `#d7d8d3`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Universal Sans 480**, **Universal Sans**, and **Universal Sans 680**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `20px 10.08px`, `80px 0px`, `40px 32px`, `0px 32px`, and `-30.4px 0px 0px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is mixed light and dark surface treatment. Surface treatment centers on `#000000`, `#e6e8de`, `#204986`, and `#ffffff`. Depth is supported by the returned gradients.

## Components and states

The captured pages include repeated styling on <div>, <a>, <span>, <ul>, <button>, <h2>, <h4>, and <p> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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

- `#eeefe9`
- `#000000`
- `#262626`
- `#e6e8de`
- `#393938`
- `#a6a6a1`
- `#204986`
- `#121212`
- `#ffffff`
- `#d7d8d3`
- `#802727`
- `#282520`
- `#d1bd91`

## Typography captured from ground.news

- **Universal Sans 480** — weight 400 · size 16px
- **Universal Sans** — weight 500 · size 12px
- **Universal Sans 680** — weight 680 · size 18px

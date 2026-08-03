# How arena.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/arena.ai-design)

Last updated: 2026-08-03

## Captured pages

[![LLM Leaderboard - Best Text & Chat AI Models Compared](https://pin.fontofweb.com/9344?format=jpg)](https://design.withfudge.com/share/pin-9344)

[LLM Leaderboard - Best Text & Chat AI Models Compared](https://design.withfudge.com/share/pin-9344)

[![Arena | Benchmark & Compare the Best AI Models](https://pin.fontofweb.com/8747?format=jpg)](https://design.withfudge.com/share/pin-8747)

[Arena | Benchmark & Compare the Best AI Models](https://design.withfudge.com/share/pin-8747)

[![Arena | Benchmark & Compare the Best AI Models](https://pin.fontofweb.com/8746?format=jpg)](https://design.withfudge.com/share/pin-8746)

[Arena | Benchmark & Compare the Best AI Models](https://design.withfudge.com/share/pin-8746)

## Overview

arena.ai presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#f4f0eb`, `#252523`, and `#413d39`, with typography led by **By Chi Long Trieu**, **Inter**, **Martina Plantijn**, **Basel Grotesk Mono**, and **Applesystem**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#f4f0eb` | text on page content |
| color.surface | `#252523` | surface on page content |
| color.border | `#413d39` | border on page content |
| color.surface | `#33302e` | surface on page content in the aside |
| color.text | `#000000` | text on page content |
| color.text | `#e7e1da` | text on page content |
| color.text | `#ffffff` | text on page content in the button |
| color.text | `#c7c2bc` | text on page content in the main |
| color.text | `#f25550` | text on page content in the main |
| color.surface | `#413c3a` | surface on page content in the button |
| color.text | `#67625b` | text on page content in the aside |
| color.text | `#299bff` | text on page content in the main |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **By Chi Long Trieu** | 16px | 400 | 24px | normal | <body>, <div>, <li>, <ul>, <a>, <div> in the nav, <nav> in the nav, <div> in the main, <main> in the main, <button> in the button, <div> in the aside, <aside> in the aside, <p> in the main, and <ol> in the main |
| type.body-14px | **By Chi Long Trieu** | 14px | 400 | 20px | normal | <button> in the button, <div> in the aside, <span> in the button, <label> in the aside, <span> in the main, <div> in the main, and <p> in the main |
| type.body-14px | **Inter** | 14px | 400 | 24px | normal | <p> in the main, <div> in the main, <li> in the main, and <ul> in the main |
| type.body-14px | **Applesystem** | 14px | 400 | normal | normal | <div> |
| type.body-14px | **Basel Grotesk Mono** | 14px | 400 | 20px | normal | <span> in the main and <a> in the main |
| type.body-16px | **Martina Plantijn** | 16px | 300 | 24px | -0.4px | <h3> in the aside |
| type.body-14px | **Martina Plantijn** | 14px | 500 | 20px | -0.4px | <button> in the button and <div> in the button |
| type.utility-12px | **By Chi Long Trieu** | 12px | 400 | 16px | normal | <span> in the button, <button> in the button, <div> in the main, <span> in the main, and <p> in the main |
| type.utility-11px | **Basel Grotesk Mono** | 11px | 400 | 18.3333px | normal | <span> in the main |
| type.body-14px | **By Chi Long Trieu** | 14px | 500 | 20px | normal | <span> in the main and <button> in the button |
| type.utility-12px | **By Chi Long Trieu** | 12px | 500 | 16px | normal | <button> in the button, <svg> in the button, <span> in the main, <div> in the main, and <div> |
| type.body-24px | **Martina Plantijn** | 24px | 300 | 32px | -0.6px | <h1> in the main and <span> in the main |
| type.utility-12px | **Basel Grotesk Mono** | 12px | 500 | 16px | normal | <span> in the main and <span> in the button |
| type.body-14px | **By Chi Long Trieu** | 14px | 400 | 14px | normal | <button> in the button and <span> in the button |
| type.utility-12px | **Basel Grotesk Mono** | 12px | 400 | 20px | normal | <div> in the main |
| type.heading-14px | **Inter** | 14px | 600 | 24px | normal | <strong> in the main |
| type.body-16px | **Martina Plantijn** | 16px | 300 | 20px | -0.4px | <h3> |
| type.utility-12px | **By Chi Long Trieu** | 12px | 400 | 18px | normal | <p> |
| type.heading-18px | **By Chi Long Trieu** | 18px | 600 | 28px | normal | <p> in the main |
| type.body-16px | **By Chi Long Trieu** | 16px | 400 | 24px | -0.4px | <span> in the button |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `32px` | padding-bottom | page content |
| `32px` | padding-right | page content |
| `0px 32px 32px` | padding | page content |
| `32px` | padding-left | page content |
| `8px 0px 0px` | margin | page content |
| `8px` | margin-top | page content |
| `16px` | padding-bottom | page content |
| `12px` | padding-right | page content |

### Shape and depth

The captured pages use `1px solid 8px`, `0px 1px 0px 0px solid 0px`, `0px 0px 1px solid 0px`, `0px none 6px`, `1px 0px 0px solid 0px`, `0px none 8px`, `1px solid 12px`, and `0px none 12px 0px 0px` border treatments. Recorded gradients include `linear-gradient(90deg, rgba(0, 0, 0, 0) calc(50% - 22px), rgb(255, 255, 255), rgba(0, 0, 0, 0) calc(50% + 22px))`. Recorded shadows include `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px`, `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.1) 0px 2px 4px -2px`, `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px`, and `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px`.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#252523`, `#33302e`, and `#413c3a`. Text colors include `#f4f0eb`, `#000000`, and `#e7e1da`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **By Chi Long Trieu**, **Inter**, **Applesystem**, **Basel Grotesk Mono**, and **Martina Plantijn**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `32px`, `32px`, `0px 32px 32px`, `32px`, and `8px 0px 0px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#252523`, `#33302e`, `#413c3a`, and `#23211f`. Depth is supported by the returned gradients and shadows.

## Components and states

The captured pages include repeated styling on <div>, <body>, <button>, <li>, <ul>, <a>, <h3>, and <p> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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

- `#f4f0eb`
- `#252523`
- `#413d39`
- `#33302e`
- `#000000`
- `#e7e1da`
- `#ffffff`
- `#c7c2bc`
- `#f25550`
- `#413c3a`
- `#67625b`
- `#299bff`
- `#9ecbff`
- `#79b8ff`
- `#e1e4e8`
- `#23211f`

## Typography captured from arena.ai

- **By Chi Long Trieu** — weight 400 · size 16px
- **Inter** — weight 400 · size 14px
- **Martina Plantijn** — weight 300 · size 16px
- **Basel Grotesk Mono** — weight 400 · size 14px
- **Applesystem** — weight 400 · size 14px

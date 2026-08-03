# How app.quiver.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/app.quiver.ai-design)

Last updated: 2026-08-03

## Captured pages

[![QuiverAI public beta](https://pin.fontofweb.com/9928?format=jpg)](https://design.withfudge.com/share/pin-9928)

[QuiverAI public beta](https://design.withfudge.com/share/pin-9928)

[![QuiverAI public beta](https://pin.fontofweb.com/9927?format=jpg)](https://design.withfudge.com/share/pin-9927)

[QuiverAI public beta](https://design.withfudge.com/share/pin-9927)

[![QuiverAI public beta](https://pin.fontofweb.com/9926?format=jpg)](https://design.withfudge.com/share/pin-9926)

[QuiverAI public beta](https://design.withfudge.com/share/pin-9926)

## Overview

app.quiver.ai presents a predominantly light surface treatment in the captured pages. The system is anchored by `#000000`, `#f8f8f8`, and `#e5e5e5`, with typography led by **Geist**, **Applesystem**, and **Geist Mono**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#000000` | text on page content |
| color.surface | `#f8f8f8` | surface on page content |
| color.shadow | `#e5e5e5` | shadow on page content |
| color.surface | `#fcfcfc` | surface on page content |
| color.surface | `#ffffff` | surface on page content |
| color.text | `#404040` | text on page content |
| color.text | `#737373` | text on page content |
| color.text | `#171717` | text on page content in the button |
| color.surface | `#f3f3f3` | surface on page content |
| color.surface | `#ececec` | surface on page content |
| color.text | `#a1a1a1` | text on page content in the button |
| color.surface | `#262626` | surface on page content |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **Geist** | 16px | 400 | 24px | normal | <html>, <div>, <body>, <a>, <header> in the header, <img>, <button> in the button, <span>, <svg> in the button, <form>, and <p> |
| type.body-14px | **Geist** | 14px | 400 | 21px | normal | <a>, <div>, <span>, <div> in the button, <button> in the button, <p> in the button, <textarea>, <span> in the button, <svg> in the button, <select>, and <label> |
| type.body-14px | **Applesystem** | 14px | 400 | normal | normal | <div> |
| type.body-14px | **Geist** | 14px | 400 | 20px | normal | <div> in the button and <button> in the button |
| type.display-44px | **Geist** | 44px | 400 | 52.8px | -1.1px | <h1> and <span> |
| type.body-14px | **Geist** | 14px | 400 | 17.6px | normal | <button> in the button and <svg> in the button |
| type.utility-12px | **Geist** | 12px | 400 | 17.6px | normal | <div>, <span>, and <button> in the button |
| type.display-36px | **Geist** | 36px | 400 | 40px | -0.9px | <h1> |
| type.body-30px | **Geist** | 30px | 400 | 36px | -0.75px | <h1> |
| type.utility-12px | **Geist** | 12px | 500 | 17.6px | normal | <a> |
| type.utility-12px | **Geist Mono** | 12px | 500 | 14.4px | 0.72px | <button> in the button |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `24px` | padding-right | page content |
| `24px` | padding-left | page content |
| `24px` | padding-top | page content |
| `14px` | gap | page content |
| `14px` | row-gap | page content |
| `14px` | column-gap | page content |
| `8px` | padding-top | page content |
| `8px` | padding-bottom | page content |

### Shape and depth

The captured pages use `1px solid 8px`, `1px solid 12px`, `0px none 16px`, `0px none 8px`, `0px none 12px`, `0px none 1.67772e+07px`, `0px 0px 1px solid 0px`, and `0px none 10px` border treatments. Recorded gradients include `linear-gradient(to top, oklab(0 0 0 / 0.6) 0%, rgba(0, 0, 0, 0) 100%)`. Recorded shadows include `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.04) 0px 2px 2px 0px, rgba(0, 0, 0, 0.04) 0px 8px 16px -4px`, `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.016) 0px 2px 8px 0px, rgba(0, 0, 0, 0.01) 0px 1px 2px 0px`, `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px rgb(0,0,0)`, `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.02) 0px 1px 1px 0px, rgba(0, 0, 0, 0.04) 0px 4px 8px 0px`, `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, oklch(0.922 0 0) 0px 0px 0px 1px, rgba(0, 0, 0, 0.02) 0px 1px 1px 0px, rgba(0, 0, 0, 0.04) 0px 4px 8px 0px`, `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, oklch(0.922 0 0) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px`, `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, oklab(0.922 0 0 / 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.04) 0px 2px 2px 0px, rgba(0, 0, 0, 0.04) 0px 8px 16px -4px`, and `oklab(0.999994 0.0000455678 0.0000200868 / 0.1) 0px 2px 4px 0px inset, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px`.

## Colors

The visual system is predominantly light surface treatment. Surface colors include `#f8f8f8`, `#fcfcfc`, and `#ffffff`. Text colors include `#000000`, `#404040`, and `#737373`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Geist**, **Applesystem**, and **Geist Mono**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `24px`, `24px`, `24px`, `14px`, and `14px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly light surface treatment. Surface treatment centers on `#f8f8f8`, `#fcfcfc`, `#ffffff`, and `#f3f3f3`. Depth is supported by the returned gradients and shadows.

## Components and states

The captured pages include repeated styling on <div>, <html>, <body>, <a>, <span>, <button>, <p>, and <header> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

## Responsive behavior

The captured token set does not establish breakpoint values or mobile behavior. Validate stacking, navigation changes, image treatment, and type scaling against the representative captures before implementing a responsive adaptation.

## Practical implementation guidance

- Preserve the light surface relationship and the measured type hierarchy before adding decorative treatment.
- Start from the returned typography, spacing, color, and border values; name any new scale or semantic role as an adaptation rather than as a source fact.
- Keep the captured font families separate from licensing decisions.
- Use screenshots to validate component anatomy, responsive behavior, focus treatment, and motion before shipping.
- Avoid introducing gradients or shadows beyond the captured treatment; the returned evidence includes those treatments.

## Scope note

The guide uses representative captured pages. The evidence supports the values and observations above; it does not establish component semantics, interaction states, motion timing, breakpoint rules, font licensing, or a complete source stylesheet.

## Colors

- `#000000`
- `#f8f8f8`
- `#e5e5e5`
- `#fcfcfc`
- `#ffffff`
- `#404040`
- `#737373`
- `#171717`
- `#f3f3f3`
- `#ececec`
- `#a1a1a1`
- `#262626`
- `#dbf58a`
- `#2b7fff`

## Typography captured from app.quiver.ai

- **Geist** — weight 400 · size 16px
- **Applesystem** — weight 400 · size 14px
- **Geist Mono** — weight 500 · size 12px

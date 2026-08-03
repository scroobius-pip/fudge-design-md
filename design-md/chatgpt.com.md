# How chatgpt.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/chatgpt.com-design)

Last updated: 2026-08-03

## Captured pages

[![ChatGPT](https://pin.fontofweb.com/10217?format=jpg)](https://design.withfudge.com/share/pin-10217)

[ChatGPT](https://design.withfudge.com/share/pin-10217)

[![Rater Workspace Instructions](https://pin.fontofweb.com/10192?format=jpg)](https://design.withfudge.com/share/pin-10192)

[Rater Workspace Instructions](https://design.withfudge.com/share/pin-10192)

[![ChatGPT](https://pin.fontofweb.com/10040?format=jpg)](https://design.withfudge.com/share/pin-10040)

[ChatGPT](https://design.withfudge.com/share/pin-10040)

[![HTML CSS Pattern Code](https://pin.fontofweb.com/9739?format=jpg)](https://design.withfudge.com/share/pin-9739)

[HTML CSS Pattern Code](https://design.withfudge.com/share/pin-9739)

[![ChatGPT - Buildy](https://pin.fontofweb.com/9568?format=jpg)](https://design.withfudge.com/share/pin-9568)

[ChatGPT - Buildy](https://design.withfudge.com/share/pin-9568)

[![Fudge - Query Cost Projections](https://pin.fontofweb.com/9540?format=jpg)](https://design.withfudge.com/share/pin-9540)

[Fudge - Query Cost Projections](https://design.withfudge.com/share/pin-9540)

[![Fudge - Query Cost Projections](https://pin.fontofweb.com/9539?format=jpg)](https://design.withfudge.com/share/pin-9539)

[Fudge - Query Cost Projections](https://design.withfudge.com/share/pin-9539)

[![ChatGPT - Fudge](https://pin.fontofweb.com/9538?format=jpg)](https://design.withfudge.com/share/pin-9538)

[ChatGPT - Fudge](https://design.withfudge.com/share/pin-9538)

## Overview

chatgpt.com presents a mixed light and dark surface treatment in the captured pages. The system is anchored by `#ffffff`, `#000000`, and `#0d0d0d`, with typography led by **Applesystembody**, **System**, **Open Ai Sans**, and **Applesystem**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#ffffff` | text on page content |
| color.text | `#000000` | text on page content |
| color.text | `#0d0d0d` | text on page content in the button |
| color.surface | `#f3f3f3` | surface on page content in the main |
| color.surface | `#212121` | surface on page content in the button |
| color.surface | `#fcfcfc` | surface on page content |
| color.surface | `#303030` | surface on page content in the aside |
| color.surface | `#ececec` | surface on page content in the main |
| color.text | `#afafaf` | text on page content in the button |
| color.border | `#414141` | border on page content in the main |
| color.surface | `#181818` | surface on page content in the main |
| color.surface | `#353535` | surface on page content |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **Applesystembody** | 16px | 400 | 24px | normal | <html>, <div> in the nav, <nav> in the nav, <div>, <body>, <div> in the main, <main> in the main, <article> in the main, <section> in the main, <button> in the button, <svg> in the button, <span> in the button, <div> in the button, <span> in the main, <form> in the main, <div> in the aside, <aside> in the aside, <p> in the aside, <form> in the aside, <input> in the aside, <svg>, <span>, <li> in the nav, <ul> in the nav, <section>, <a>, <li>, <ul>, <ol> in the main, and <p> in the main |
| type.body-14px | **Applesystembody** | 14px | 400 | 20px | normal | <a> in the nav, <button> in the button, <div> in the button, <section> in the main, <div> in the main, <span> in the main, <div> in the nav, <span>, <img>, <span> in the nav, <div>, <p>, <a> in the main, <li> in the main, and <span> in the button |
| type.body-14px | **System** | 14px | 400 | 24.0001px | normal | <div> in the main and <span> in the main |
| type.body-16px | **Applesystembody** | 16px | 400 | 26px | normal | <p> in the main, <div> in the main, <button> in the button, <span> in the button, and <span> in the main |
| type.body-16px | **System** | 16px | 400 | 24px | normal | <div>, <button> in the button, <div> in the footer, <span> in the footer, <p> in the footer, <div> in the header, <div> in the main, <p> in the main, and <span> in the button |
| type.body-16px | **Open Ai Sans** | 16px | 400 | 24px | normal | <div> and <p> |
| type.body-14px | **System** | 14px | 400 | 20px | normal | <code> in the main, <a>, <button> in the button, <div> in the button, <div> in the main, <span> in the main, <span> in the aside, and <div> in the aside |
| type.utility-12px | **Applesystembody** | 12px | 400 | 16px | normal | <div> in the main, <img>, <div>, <a>, and <button> in the button |
| type.body-14px | **Applesystem** | 14px | 400 | normal | normal | <div> |
| type.heading-24px | **Applesystembody** | 24px | 600 | 36px | normal | <div> in the main |
| type.utility-12.25px | **System** | 12.25px | 400 | 20px | normal | <span> in the main and <code> in the main |
| type.body-14px | **Applesystembody** | 14px | 500 | 20px | normal | <button> in the button, <svg> in the button, <div> in the button, and <div> in the main |
| type.body-14px | **Applesystembody** | 14px | 400 | 21px | normal | <div>, <svg> in the button, <span> in the button, and <button> in the button |
| type.body-16.8px | **Applesystembody** | 16.8px | 500 | 25.2px | normal | <span> and <div> |
| type.heading-16px | **Applesystembody** | 16px | 600 | 28px | normal | <p> in the main and <h2> in the main |
| type.utility-12px | **Applesystembody** | 12px | 400 | 16.5px | normal | <div> and <a> |
| type.body-14px | **Open Ai Sans** | 14px | 400 | 22.96px | -0.14px | <p>, <div>, and <a> |
| type.body-14px | **Applesystembody** | 14px | 400 | 24.0001px | normal | <div> in the main, <button> in the button, <span> in the main, and <div> |
| type.body-16px | **Applesystembody** | 16px | 500 | 24px | normal | <button> in the button and <div> in the button |
| type.display-64px | **Open Ai Sans** | 64px | 500 | 64px | -1.92px | <h1> |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `64px` | padding-right | page content |
| `64px` | padding-left | page content |
| `16px` | row-gap | page content |
| `16px` | gap | page content |
| `16px` | column-gap | page content |
| `0px 0px 28px` | padding | page content |
| `28px` | padding-bottom | page content |
| `0px 0px -28px` | margin | page content |

### Shape and depth

The captured pages use `0px 1px 0px 0px solid 0px`, `0px 0px 0px 1px solid 0px`, `0px none 16px`, `0px none 22px 8px 22px 22px`, `0px 0px 0px 1px solid 0px`, `0px none 24px`, `1px solid 24px`, and `0px 0px 1px solid 0px` border treatments. Recorded shadows include `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.32) 0px 8px 16px 0px, rgba(255, 255, 255, 0.2) 0px 0px 1px 0px inset, rgba(0, 0, 0, 0.62) 0px 0px 1px 0px`, `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.06) 0px 3px 6px 0px, rgba(255, 255, 255, 0.2) 0px 0px 1px 0px inset`, `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(255, 255, 255, 0.2) 0px 0px 1px 0px inset`, `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, lab(0 0 0 / 0.03) 0px 0px 15px 0px rgb(255,255,255)`, `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px rgb(255,255,255)`, `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px`, `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 4px 4px 0px, rgba(0, 0, 0, 0.05) 0px 4px 80px 0px, rgba(255, 255, 255, 0.2) 0px 0px 1px 0px inset`, and `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(255, 255, 255, 0.2) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px`.

## Colors

The visual system is mixed light and dark surface treatment. Surface colors include `#f3f3f3`, `#212121`, and `#fcfcfc`. Text colors include `#ffffff`, `#000000`, and `#0d0d0d`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Applesystembody**, **System**, **Open Ai Sans**, and **Applesystem**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `64px`, `64px`, `16px`, `16px`, and `16px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is mixed light and dark surface treatment. Surface treatment centers on `#f3f3f3`, `#212121`, `#fcfcfc`, and `#303030`. Depth is supported by the returned shadows.

## Components and states

The captured pages include repeated styling on <div>, <html>, <nav>, <body>, <a>, <button>, <main>, and <p> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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

- `#ffffff`
- `#000000`
- `#0d0d0d`
- `#f3f3f3`
- `#212121`
- `#fcfcfc`
- `#303030`
- `#ececec`
- `#afafaf`
- `#414141`
- `#181818`
- `#353535`
- `#66d492`
- `#323232`
- `#2f2f2f`
- `#f9f9f9`

## Typography captured from chatgpt.com

- **Applesystembody** — weight 400 · size 16px
- **System** — weight 400 · size 14px
- **Open Ai Sans** — weight 400 · size 16px
- **Applesystem** — weight 400 · size 14px

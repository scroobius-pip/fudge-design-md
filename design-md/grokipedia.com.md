# How grokipedia.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/grokipedia.com-design)

Last updated: 2026-08-03

## Captured pages

[![Search — Grokipedia](https://pin.fontofweb.com/9678?format=jpg)](https://design.withfudge.com/share/pin-9678)

[Search — Grokipedia](https://design.withfudge.com/share/pin-9678)

[![Grokipedia](https://pin.fontofweb.com/9677?format=jpg)](https://design.withfudge.com/share/pin-9677)

[Grokipedia](https://design.withfudge.com/share/pin-9677)

[![Robert Kowalski — Grokipedia](https://pin.fontofweb.com/9649?format=jpg)](https://design.withfudge.com/share/pin-9649)

[Robert Kowalski — Grokipedia](https://design.withfudge.com/share/pin-9649)

[![Homoiconicity — Grokipedia](https://pin.fontofweb.com/9343?format=jpg)](https://design.withfudge.com/share/pin-9343)

[Homoiconicity — Grokipedia](https://design.withfudge.com/share/pin-9343)

[![Homoiconicity — Grokipedia](https://pin.fontofweb.com/9342?format=jpg)](https://design.withfudge.com/share/pin-9342)

[Homoiconicity — Grokipedia](https://design.withfudge.com/share/pin-9342)

[![Homoiconicity — Grokipedia](https://pin.fontofweb.com/9341?format=jpg)](https://design.withfudge.com/share/pin-9341)

[Homoiconicity — Grokipedia](https://design.withfudge.com/share/pin-9341)

[![Quine (computing) — Grokipedia](https://pin.fontofweb.com/8828?format=jpg)](https://design.withfudge.com/share/pin-8828)

[Quine (computing) — Grokipedia](https://design.withfudge.com/share/pin-8828)

[![Quine (computing) — Grokipedia](https://pin.fontofweb.com/8827?format=jpg)](https://design.withfudge.com/share/pin-8827)

[Quine (computing) — Grokipedia](https://design.withfudge.com/share/pin-8827)

## Overview

grokipedia.com presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#fcfcfc`, `#141414`, and `#000000`, with typography led by **System**, **Georgia**, and **Applesystem**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#fcfcfc` | text on page content |
| color.surface | `#141414` | surface on page content |
| color.text | `#000000` | text on page content |
| color.surface | `#1f1f1f` | surface on page content in the main |
| color.text | `#858585` | text on page content in the main |
| color.text | `#bfdbfe` | text on page content in the main |
| color.surface | `#242424` | surface on page content |
| color.text | `#9e9e9e` | text on page content in the button |
| color.shadow | `#ffffff` | shadow on page content in the main |
| color.shadow | `#3b82f6` | shadow on page content in the main |
| color.surface | `#ff6e14` | surface on page content in the main |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **System** | 16px | 400 | 24px | normal | <body>, <header> in the header, <html>, <div> in the header, <svg> in the header, <a> in the header, <main> in the main, <div> in the main, <form> in the main, <a> in the main, <button> in the button, <div>, <svg> in the main, <nav> in the nav, and <aside> in the aside |
| type.body-16px | **System** | 16px | 400 | 24px | 0.16px | <div> in the main, <article> in the main, <button> in the button, and <ol> in the main |
| type.body-16px | **System** | 16px | 400 | 29.6px | 0.16px | <span> in the main and <a> in the main |
| type.body-14px | **System** | 14px | 400 | 22.75px | 0.16px | <li> in the main |
| type.body-16px | **System** | 16px | 400 | 26px | 0.16px | <a> in the main and <div> in the main |
| type.body-14px | **System** | 14px | 400 | 20px | normal | <input> in the main, <p> in the main, <span> in the main, <button> in the button, <li> in the nav, <ul> in the nav, <a> in the nav, <a> in the header, and <svg> in the button |
| type.body-14px | **System** | 14px | 400 | 22.75px | normal | <p> in the main |
| type.body-22.8571px | **Georgia** | 22.8571px | 500 | 34.2857px | 0.16px | <h3> in the main, <button> in the button, <span> in the main, and <svg> in the button |
| type.display-34px | **Georgia** | 34px | 600 | 51px | -1px | <h1> in the main |
| type.body-14px | **Applesystem** | 14px | 400 | normal | normal | <div> |
| type.body-27.4286px | **Georgia** | 27.4286px | 500 | 41.1429px | 0.16px | <h2> in the main |
| type.body-14px | **System** | 14px | 500 | 20px | normal | <span> in the main and <button> in the button |
| type.heading-27.4286px | **Georgia** | 27.4286px | 600 | 41.1429px | 0.16px | <h2> in the main |
| type.utility-12px | **System** | 12px | 400 | 16px | normal | <span> in the main |
| type.body-14px | **System** | 14px | 400 | 20px | 0.16px | <code> in the main |
| type.utility-12px | **System** | 12px | 400 | 16px | 0.16px | <a> in the main |
| type.utility-12px | **System** | 12px | 500 | 16px | normal | <span> in the main |
| type.heading-16px | **System** | 16px | 700 | 29.6px | 0.16px | <strong> in the main |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `24px` | padding-left | page content |
| `24px` | padding-right | page content |
| `32px` | padding-top | page content |
| `128px` | padding-bottom | page content |
| `0px 24px` | padding | page content |
| `32px 32px 128px` | padding | page content |
| `32px` | padding-right | page content |
| `32px` | padding-left | page content |

### Shape and depth

The captured pages use `0px none 8px`, `0px 1px 1px solid 0px 0px 12px 12px`, `0px none 6px`, `0px 0px 1px solid 0px`, `1px solid 9999px`, `1px solid 12px`, `0px none 9999px`, and `0px none 4px` border treatments. Recorded shadows include `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px`, `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px rgb(252,252,252)`, and `rgb(255, 255, 255) 0px 0px 0px 0px, rgba(59, 130, 246, 0.5) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px`.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#141414`, `#1f1f1f`, and `#242424`. Text colors include `#fcfcfc`, `#000000`, and `#858585`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **System**, **Georgia**, and **Applesystem**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `24px`, `24px`, `32px`, `128px`, and `0px 24px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#141414`, `#1f1f1f`, `#242424`, and `#ff6e14`. Depth is supported by the returned shadows.

## Components and states

The captured pages include repeated styling on <div>, <body>, <header>, <html>, <svg>, <a>, <main>, and <form> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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

- `#fcfcfc`
- `#141414`
- `#000000`
- `#1f1f1f`
- `#858585`
- `#bfdbfe`
- `#242424`
- `#9e9e9e`
- `#ffffff`
- `#3b82f6`
- `#ff6e14`

## Typography captured from grokipedia.com

- **System** — weight 400 · size 16px
- **Georgia** — weight 600 · size 34px
- **Applesystem** — weight 400 · size 14px

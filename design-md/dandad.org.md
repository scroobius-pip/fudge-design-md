# How dandad.org is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/dandad.org-design)

Last updated: 2026-08-03

## Captured pages

[![Search results for cinematography | D&AD](https://pin.fontofweb.com/9795?format=jpg)](https://design.withfudge.com/share/pin-9795)

[Search results for cinematography | D&AD](https://design.withfudge.com/share/pin-9795)

[![D&AD](https://pin.fontofweb.com/9794?format=jpg)](https://design.withfudge.com/share/pin-9794)

[D&AD](https://design.withfudge.com/share/pin-9794)

[![D&AD](https://pin.fontofweb.com/9793?format=jpg)](https://design.withfudge.com/share/pin-9793)

[D&AD](https://design.withfudge.com/share/pin-9793)

[![D&AD](https://pin.fontofweb.com/9792?format=jpg)](https://design.withfudge.com/share/pin-9792)

[D&AD](https://design.withfudge.com/share/pin-9792)

[![D&AD New Blood Awards archive](https://pin.fontofweb.com/9787?format=jpg)](https://design.withfudge.com/share/pin-9787)

[D&AD New Blood Awards archive](https://design.withfudge.com/share/pin-9787)

## Overview

dandad.org presents a predominantly light surface treatment in the captured pages. The system is anchored by `#161616`, `#ffffff`, and `#ebe8f5`, with typography led by **D** and **Applesystem**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#161616` | text on page content |
| color.surface | `#ffffff` | surface on page content |
| color.surface | `#ebe8f5` | surface on page content |
| color.surface | `#ffc700` | surface on page content in the button |
| color.surface | `#f0eee9` | surface on page content in the button |
| color.text | `#000000` | text on page content |
| color.border | `#cecece` | border on page content in the footer |
| color.border | `#222222` | border on page content |
| color.surface | `#2a2a2a` | surface on page content in the button |
| color.text | `#b6b6b6` | text on page content in the button |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-14px | **D** | 14px | 400 | 20px | 0.5px | <div>, <body>, <section> in the main, <main> in the main, <div> in the main, <aside> in the aside, <footer> in the footer, <p> in the aside, <article> in the main, <p> in the main, <img> in the main, <figure> in the main, <svg> in the footer, <div> in the footer, <article> in the footer, <a> in the footer, <img> in the footer, <form>, <button> in the button, <section>, <article>, <a>, <img>, <figure>, <span>, <ul> in the nav, <li> in the nav, and <div> in the nav |
| type.body-20px | **D** | 20px | 400 | 25px | 0.5px | <a> in the main, <p> in the main, <p> in the footer, <input>, and <h3> |
| type.display-95px | **D** | 95px | 500 | 95px | 1px | <span> in the button, <button> in the button, <svg> in the button, and <h1> in the main |
| type.display-58px | **D** | 58px | 500 | 58px | 1px | <h2>, <p>, and <a> |
| type.body-16px | **D** | 16px | 400 | 24px | normal | <html> |
| type.utility-12px | **D** | 12px | 400 | 14.4px | 0.5px | <button> in the button, <p> in the footer, <span>, <div>, <a> in the nav, <span> in the main, and <div> in the main |
| type.body-14px | **Applesystem** | 14px | 400 | normal | normal | <div> |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `20px` | padding-top | page content |
| `20px` | padding-bottom | page content |
| `20px` | margin-top | page content |
| `20px 0px 0px` | margin | page content |
| `5px` | padding-right | page content |
| `20px 0px` | padding | page content |
| `5px` | padding-left | page content |
| `0px 5px` | padding | page content |

### Shape and depth

The captured pages use `0px none 5px`, `1px solid 5px`, `1px 0px 0px solid 0px`, `5px solid 9999px`, `1px solid 5px`, and `0px none 9999px` border treatments. Recorded shadows include `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 4px 6.9px 0px, rgba(0, 0, 0, 0.04) 0px 1px 0px 0px`.

## Colors

The visual system is predominantly light surface treatment. Surface colors include `#ffffff`, `#ebe8f5`, and `#ffc700`. Text colors include `#161616`, `#000000`, and `#b6b6b6`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **D** and **Applesystem**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `20px`, `20px`, `20px`, `20px 0px 0px`, and `5px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly light surface treatment. Surface treatment centers on `#ffffff`, `#ebe8f5`, `#ffc700`, and `#f0eee9`. Depth is supported by the returned shadows.

## Components and states

The captured pages include repeated styling on <div>, <html>, <body>, <section>, <main>, <aside>, <footer>, and <span> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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

- `#161616`
- `#ffffff`
- `#ebe8f5`
- `#ffc700`
- `#f0eee9`
- `#000000`
- `#cecece`
- `#222222`
- `#2a2a2a`
- `#b6b6b6`

## Typography captured from dandad.org

- **D** — weight 400 · size 16px
- **Applesystem** — weight 400 · size 14px

# How dosu.dev is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/dosu.dev-design)

Last updated: 2026-08-03

## Captured pages

[![Dosu - Knowledge Infrastructure for Agents and Humans](https://pin.fontofweb.com/10413?format=jpg)](https://design.withfudge.com/share/pin-10413)

[Dosu - Knowledge Infrastructure for Agents and Humans](https://design.withfudge.com/share/pin-10413)

[![Dosu - Knowledge Infrastructure for Agents and Humans](https://pin.fontofweb.com/10412?format=jpg)](https://design.withfudge.com/share/pin-10412)

[Dosu - Knowledge Infrastructure for Agents and Humans](https://design.withfudge.com/share/pin-10412)

[![Dosu - Knowledge Infrastructure for Agents and Humans](https://pin.fontofweb.com/10411?format=jpg)](https://design.withfudge.com/share/pin-10411)

[Dosu - Knowledge Infrastructure for Agents and Humans](https://design.withfudge.com/share/pin-10411)

## Overview

dosu.dev presents a predominantly light surface treatment in the captured pages. The system is anchored by `#0f172a`, `#e6e3d7`, and `#fffefc`, with typography led by **Mona Sans**, **Jet Brains Mono**, **Pp Mondwest**, and **Applesystem**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#0f172a` | text on page content in the main |
| color.surface | `#e6e3d7` | surface on page content in the main |
| color.surface | `#fffefc` | surface on page content |
| color.surface | `#0e0e0e` | surface on page content in the main |
| color.border | `#ffffff` | border on page content in the main |
| color.text | `#000000` | text on page content |
| color.border | `#1c1c1c` | border on page content in the main |
| color.surface | `#fafafa` | surface on page content in the main |
| color.surface | `#dad7c9` | surface on page content in the main |
| color.surface | `#111111` | surface on page content in the main |
| color.surface | `#262626` | surface on page content in the main |
| color.text | `#757575` | text on page content in the main |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **Mona Sans** | 16px | 400 | 24px | normal | <html>, <div> in the main, <section> in the main, <main> in the main, <div>, <body>, <svg> in the main, <img> in the main, <nav> in the nav, <a> in the nav, <img> in the nav, <div> in the nav, and <button> in the button |
| type.utility-13px | **Jet Brains Mono** | 13px | 400 | 19.5px | 0.26px | <div> in the main |
| type.utility-10px | **Jet Brains Mono** | 10px | 400 | 15px | normal | <div> in the main and <span> in the main |
| type.display-50px | **Pp Mondwest** | 50px | 400 | 50px | -0.25px | <h2> in the main |
| type.body-14px | **Applesystem** | 14px | 400 | normal | normal | <div> |
| type.display-70px | **Pp Mondwest** | 70px | 400 | 63px | normal | <h1> in the main |
| type.body-16px | **Mona Sans** | 16px | 400 | 24px | 0.16px | <p> in the main |
| type.body-16px | **Mona Sans** | 16px | 500 | 22.4px | normal | <p> in the main |
| type.body-14px | **Jet Brains Mono** | 14px | 500 | 14px | 0.28px | <span> in the button, <button> in the button, and <svg> in the button |
| type.display-40px | **Pp Mondwest** | 40px | 400 | 44px | -0.6px | <h3> in the main |
| type.body-14px | **Jet Brains Mono** | 14px | 500 | 21px | normal | <span> in the main |
| type.heading-14px | **Jet Brains Mono** | 14px | 700 | 14px | 0.28px | <span> in the button and <a> in the nav |
| type.utility-13px | **Jet Brains Mono** | 13px | 700 | 19.5px | normal | <span> in the main |
| type.body-14px | **Pp Mondwest** | 14px | 400 | 21px | 0.14px | <span> in the main |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `64px` | gap | page content |
| `64px` | row-gap | page content |
| `64px` | column-gap | page content |
| `340px 200px 100px` | padding | page content |
| `340px` | padding-top | page content |
| `200px` | padding-right | page content |
| `100px` | padding-bottom | page content |
| `200px` | padding-left | page content |

### Shape and depth

The captured pages use `1px solid 8px`, `1px solid 4px`, `1px solid 8px`, `1.5px dashed 6px`, `0px 0px 1px solid 0px`, `1px solid 6px`, `1px solid 40px`, and `0px none 4px` border treatments. Recorded gradients include `linear-gradient(180deg, rgba(248, 250, 247, 0) 0%, rgba(165, 169, 160, 0.4) 126.39%)`, `linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)`, and `conic-gradient(from 90deg, rgb(215, 255, 120) 0deg, rgb(244, 189, 255) 120deg, rgb(255, 212, 120) 240deg, rgb(178, 235, 247) 360deg)`. Recorded shadows include `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 4px 4px -2px, rgba(0, 0, 0, 0.1) 0px 8px 8px -4px, rgba(255, 255, 255, 0.05) 0px 0px 16px 0px inset`, `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 16px 24px 0px`, `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 8px 8px -4px, rgba(0, 0, 0, 0.1) 0px 4px 4px -2px`, `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.06) 0px 2px 4px 0px, rgba(0, 0, 0, 0.1) 0px 0px 0px 1px`, `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.06) 0px 2px 4px 0px, rgba(0, 0, 0, 0.1) 0px 0px 0px 2px`, `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgb(140, 139, 146) 0px 4px 0px 0px`, `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgb(140, 139, 146) 0px 3px 0px 0px`, and `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgb(137, 137, 137) 0px 3px 0px 0px`.

## Colors

The visual system is predominantly light surface treatment. Surface colors include `#e6e3d7`, `#fffefc`, and `#0e0e0e`. Text colors include `#0f172a`, `#000000`, and `#757575`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Mona Sans**, **Jet Brains Mono**, **Pp Mondwest**, and **Applesystem**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `64px`, `64px`, `64px`, `340px 200px 100px`, and `340px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly light surface treatment. Surface treatment centers on `#e6e3d7`, `#fffefc`, `#0e0e0e`, and `#fafafa`. Depth is supported by the returned gradients and shadows.

## Components and states

The captured pages include repeated styling on <div>, <html>, <section>, <main>, <body>, <svg>, <span>, and <h3> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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

- `#0f172a`
- `#e6e3d7`
- `#fffefc`
- `#0e0e0e`
- `#ffffff`
- `#000000`
- `#1c1c1c`
- `#fafafa`
- `#dad7c9`
- `#111111`
- `#262626`
- `#757575`
- `#222222`
- `#1f2937`
- `#3f3f3f`
- `#ff3e3e`

## Typography captured from dosu.dev

- **Mona Sans** — weight 400 · size 16px
- **Jet Brains Mono** — weight 400 · size 10px
- **Pp Mondwest** — weight 400 · size 14px
- **Applesystem** — weight 400 · size 14px

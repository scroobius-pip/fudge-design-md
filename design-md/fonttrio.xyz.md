# How fonttrio.xyz is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/fonttrio.xyz-design)

Last updated: 2026-08-03

## Captured pages

[![Fonttrio - Font Pairings for shadcn](https://pin.fontofweb.com/7847?format=jpg)](https://design.withfudge.com/share/pin-7847)

[Fonttrio - Font Pairings for shadcn](https://design.withfudge.com/share/pin-7847)

[![Fonttrio - Font Pairings for shadcn](https://pin.fontofweb.com/7846?format=jpg)](https://design.withfudge.com/share/pin-7846)

[Fonttrio - Font Pairings for shadcn](https://design.withfudge.com/share/pin-7846)

## Overview

fonttrio.xyz presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#000000`, `#ededed`, and `#888888`, with typography led by **System**, **Montserrat**, **Karla**, **Archivo**, **Outfit**, **Libre Baskerville**, **Mukta**, **Schibsted Grotesk**, **Pt Serif**, **Pt Sans**, **Inconsolata**, **Space Grotesk**, **Exo 2**, **Titillium**, **Jet Brains Mono**, **Roboto**, **Manrope**, **Source Code Pro**, and **Plus Jakarta Sans**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.surface | `#000000` | surface on page content in the nav |
| color.text | `#ededed` | text on page content in the nav |
| color.text | `#888888` | text on page content in the nav |
| color.border | `#1f1f1f` | border on page content in the button |
| color.surface | `#141414` | surface on page content in the button |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **System** | 16px | 400 | 24px | normal | <div> in the nav, <div>, <button> in the button, and <a> in the nav |
| type.display-192px | **System** | 192px | 400 | 211.2px | -4.8px | <div> |
| type.display-192px | **Montserrat** | 192px | 800 | 192px | -5.76px | <span> |
| type.utility-10px | **System** | 10px | 400 | 15px | 0.5px | <p> |
| type.body-14px | **System** | 14px | 500 | 20px | normal | <h3> and <p> |
| type.body-28px | **Karla** | 28px | 400 | 42px | -0.28px | <span> |
| type.utility-13px | **Karla** | 13px | 400 | 19.5px | normal | <p> |
| type.body-14px | **System** | 14px | 400 | 20px | normal | <div> |
| type.heading-28px | **Outfit** | 28px | 700 | 30.8px | normal | <p> |
| type.utility-13px | **Libre Baskerville** | 13px | 400 | 19.5px | normal | <p> |
| type.heading-28px | **Archivo** | 28px | 800 | 30.8px | normal | <p> |
| type.utility-13px | **Archivo** | 13px | 400 | 19.5px | normal | <p> |
| type.utility-13px | **Mukta** | 13px | 400 | 19.5px | normal | <p> |
| type.heading-28px | **Schibsted Grotesk** | 28px | 700 | 30.8px | normal | <p> |
| type.heading-28px | **Pt Serif** | 28px | 700 | 30.8px | normal | <p> |
| type.utility-13px | **Pt Sans** | 13px | 400 | 19.5px | normal | <p> |
| type.utility-11px | **Inconsolata** | 11px | 400 | 16.5px | normal | <code> in the button |
| type.heading-28px | **Space Grotesk** | 28px | 700 | 30.8px | normal | <p> |
| type.heading-28px | **Exo 2** | 28px | 700 | 30.8px | normal | <p> |
| type.utility-13px | **Titillium** | 13px | 400 | 19.5px | normal | <p> |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `0px 48px 64px` | padding | page content |
| `16px` | padding | page content |
| `12px 16px` | padding | page content |
| `0px 48px` | padding | page content |
| `0px 0px 4px` | margin | page content |
| `12px 32px` | padding | page content |
| `10px 16px` | padding | page content |
| `16px 0px 0px 20px` | margin | page content |

### Shape and depth

The captured pages use `1px 0px 0px solid 0px`, `1px solid 6px`, `1px solid 0px`, and `0px none 8px` border treatments.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#000000` and `#141414`. Text colors include `#ededed` and `#888888`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **System**, **Montserrat**, **Karla**, **Outfit**, **Libre Baskerville**, **Archivo**, **Mukta**, **Schibsted Grotesk**, **Pt Serif**, **Pt Sans**, **Inconsolata**, **Space Grotesk**, **Exo 2**, **Titillium**, **Jet Brains Mono**, **Roboto**, and **Manrope**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `0px 48px 64px`, `16px`, `12px 16px`, `0px 48px`, and `0px 0px 4px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#000000` and `#141414`. No structured gradient or shadow treatment is established.

## Components and states

The captured pages include repeated styling on <div>, <button>, <span>, <p>, <h3>, <code>, and <a> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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
- `#ededed`
- `#888888`
- `#1f1f1f`
- `#141414`

## Typography captured from fonttrio.xyz

- **System** — weight 400 · size 16px
- **Montserrat** — weight 800 · size 28px
- **Karla** — weight 400 · size 13px
- **Archivo** — weight 800 · size 28px
- **Outfit** — weight 700 · size 28px
- **Libre Baskerville** — weight 400 · size 13px
- **Mukta** — weight 400 · size 13px
- **Schibsted Grotesk** — weight 700 · size 28px
- **Pt Serif** — weight 700 · size 28px
- **Pt Sans** — weight 400 · size 13px
- **Inconsolata** — weight 400 · size 11px
- **Space Grotesk** — weight 700 · size 28px
- **Exo 2** — weight 700 · size 28px
- **Titillium** — weight 400 · size 13px
- **Jet Brains Mono** — weight 400 · size 11px
- **Roboto** — weight 400 · size 13px
- **Manrope** — weight 700 · size 28px
- **Source Code Pro** — weight 400 · size 11px
- **Plus Jakarta Sans** — weight 600 · size 28px

# How emmiwu.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/emmiwu.com-design)

Last updated: 2026-08-03

## Captured pages

[![Emmi Wu Portfolio](https://pin.fontofweb.com/8632?format=jpg)](https://design.withfudge.com/share/pin-8632)

[Emmi Wu Portfolio](https://design.withfudge.com/share/pin-8632)

[![Emmi Wu Portfolio](https://pin.fontofweb.com/8631?format=jpg)](https://design.withfudge.com/share/pin-8631)

[Emmi Wu Portfolio](https://design.withfudge.com/share/pin-8631)

## Overview

emmiwu.com presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#000000`, `#f9f8f6`, and `#f2511b`, with typography led by **System**, **Self Modern**, **Ibm Plex Mono**, **Figtree**, and **Kode Mono**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#000000` | text on page content |
| color.surface | `#f9f8f6` | surface on page content |
| color.surface | `#f2511b` | surface on page content |
| color.surface | `#add6f7` | surface on page content |
| color.surface | `#c8d665` | surface on page content |
| color.text | `#444444` | text on page content |
| color.surface | `#ffffff` | surface on page content |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.utility-12px | **System** | 12px | 400 | normal | normal | <div> |
| type.body-24px | **Self Modern** | 24px | 400 | 28.8px | 0.24px | <p> |
| type.body-20px | **Ibm Plex Mono** | 20px | 400 | 24px | 0.2px | <p> |
| type.display-48px | **Figtree** | 48px | 400 | 57.6px | 0.48px | <p> |
| type.heading-15px | **Kode Mono** | 15px | 700 | 17.5px | normal | <p> |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `18px` | padding | page content |
| `12px 24px 24px` | padding | page content |
| `22.5px 20px` | padding | page content |
| `10px` | padding | page content |

### Shape and depth

No structured border, gradient, or shadow treatment was returned.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#f9f8f6`, `#f2511b`, and `#add6f7`. Text colors include `#000000` and `#444444`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **System**, **Self Modern**, **Ibm Plex Mono**, **Figtree**, and **Kode Mono**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `18px`, `12px 24px 24px`, `22.5px 20px`, and `10px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#f9f8f6`, `#f2511b`, `#add6f7`, and `#c8d665`. No structured gradient or shadow treatment is established.

## Components and states

The captured pages include repeated styling on <div> and <p> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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
- `#f9f8f6`
- `#f2511b`
- `#add6f7`
- `#c8d665`
- `#444444`
- `#ffffff`

## Typography captured from emmiwu.com

- **System** — weight 400 · size 12px
- **Self Modern** — weight 400 · size 24px
- **Ibm Plex Mono** — weight 400 · size 20px
- **Figtree** — weight 400 · size 48px
- **Kode Mono** — weight 700 · size 15px

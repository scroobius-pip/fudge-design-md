# How explainers.blog is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/explainers.blog-design)

Last updated: 2026-08-03

## Captured pages

[![Why is the sky blue?](https://pin.fontofweb.com/6337?format=jpg)](https://design.withfudge.com/share/pin-6337)

[Why is the sky blue?](https://design.withfudge.com/share/pin-6337)

[![Why is the sky blue?](https://pin.fontofweb.com/6336?format=jpg)](https://design.withfudge.com/share/pin-6336)

[Why is the sky blue?](https://design.withfudge.com/share/pin-6336)

[![Why is the sky blue?](https://pin.fontofweb.com/6335?format=jpg)](https://design.withfudge.com/share/pin-6335)

[Why is the sky blue?](https://design.withfudge.com/share/pin-6335)

## Overview

explainers.blog presents a predominantly light surface treatment in the captured pages. The system is anchored by `#2d2d2d`, `#424242`, and `#ffffff`, with typography led by **Newsreader 16 Pt**, **Figtree**, and **Pp Supply Mono**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#2d2d2d` | text on page content in the header |
| color.text | `#424242` | text on page content |
| color.text | `#ffffff` | text on page content in the header |
| color.text | `#31359d` | text on page content in the nav |
| color.text | `#5b5bfd` | text on page content |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-28px | **Newsreader 16 Pt** | 28px | 400 | 37.8px | -0.28px | <div> |
| type.body-21px | **Newsreader 16 Pt** | 21px | 400 | 29.4px | normal | <div> in the header, <div> in the footer, <div>, and <p> |
| type.body-30px | **Figtree** | 30px | 500 | 28.2px | normal | <h2> in the header |
| type.body-16px | **Figtree** | 16px | 400 | 22.4px | normal | <a> |
| type.body-15px | **Figtree** | 15px | 400 | 19.5px | normal | <p> |
| type.display-70px | **Newsreader 16 Pt** | 70px | 700 | 65.8px | normal | <h1> in the header |
| type.utility-12px | **Pp Supply Mono** | 12px | 400 | 18px | normal | <div> and <p> |
| type.heading-20px | **Newsreader 16 Pt** | 20px | 700 | 18.8px | -0.2px | <a> in the nav and <a> in the footer |
| type.heading-14px | **Figtree** | 14px | 700 | 29.4px | 0.28px | <h4> |
| type.body-16px | **Figtree** | 16px | 500 | 22.4px | normal | <a> |
| type.heading-15px | **Figtree** | 15px | 600 | 29.4px | normal | <a> in the nav |
| type.utility-13px | **Pp Supply Mono** | 13px | 400 | 19.5px | normal | <span> in the button |
| type.heading-15px | **Figtree** | 15px | 700 | 19.5px | normal | <strong> |
| type.body-16px | **Figtree** | 16px | 400 | 29.4px | normal | <li> |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `50px 45px` | padding | page content |
| `0px 633px` | margin | page content |
| `0px 0px 12px` | margin | page content |
| `24px` | padding | page content |
| `0px 289px` | margin | page content |
| `0px 45px` | padding | page content |
| `0px 273px` | margin | page content |
| `0px 0px 24px` | margin | page content |

### Shape and depth

No structured border, gradient, or shadow treatment was returned.

## Colors

The visual system is predominantly light surface treatment. Surface roles are not fully established. Text colors include `#2d2d2d`, `#424242`, and `#ffffff`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Newsreader 16 Pt**, **Figtree**, and **Pp Supply Mono**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `50px 45px`, `0px 633px`, `0px 0px 12px`, `24px`, and `0px 289px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly light surface treatment. The surface palette is not fully established. No structured gradient or shadow treatment is established.

## Components and states

The captured pages include repeated styling on <a>, <div>, <h1>, <h2>, <p>, <span>, <h4>, and <li> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

## Responsive behavior

The captured token set does not establish breakpoint values or mobile behavior. Validate stacking, navigation changes, image treatment, and type scaling against the representative captures before implementing a responsive adaptation.

## Practical implementation guidance

- Preserve the light surface relationship and the measured type hierarchy before adding decorative treatment.
- Start from the returned typography, spacing, color, and border values; name any new scale or semantic role as an adaptation rather than as a source fact.
- Keep the captured font families separate from licensing decisions.
- Use screenshots to validate component anatomy, responsive behavior, focus treatment, and motion before shipping.
- Avoid introducing gradients or shadows beyond the captured treatment; none are established.

## Scope note

The guide uses representative captured pages. The evidence supports the values and observations above; it does not establish component semantics, interaction states, motion timing, breakpoint rules, font licensing, or a complete source stylesheet.

## Colors

- `#2d2d2d`
- `#424242`
- `#ffffff`
- `#31359d`
- `#5b5bfd`

## Typography captured from explainers.blog

- **Newsreader 16 Pt** — weight 700 · size 20px
- **Figtree** — weight 500 · size 30px
- **Pp Supply Mono** — weight 400 · size 12px

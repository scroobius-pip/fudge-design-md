# How app.fourmula.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/app.fourmula.ai-design)

Last updated: 2026-08-03

## Captured pages

[![Formula AI | Create Assets](https://pin.fontofweb.com/8677?format=jpg)](https://design.withfudge.com/share/pin-8677)

[Formula AI | Create Assets](https://design.withfudge.com/share/pin-8677)

[![Formula AI | Start](https://pin.fontofweb.com/8676?format=jpg)](https://design.withfudge.com/share/pin-8676)

[Formula AI | Start](https://design.withfudge.com/share/pin-8676)

## Overview

app.fourmula.ai presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#ffffff`, `#000000`, and `#111111`, with typography led by **Sf Pro**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#ffffff` | text on page content |
| color.surface | `#000000` | surface on page content |
| color.surface | `#111111` | surface on page content |
| color.surface | `#1a1a1a` | surface on page content |
| color.text | `#686a6e` | text on page content |
| color.text | `#ff6b02` | text on page content |
| color.text | `#020108` | text on page content in the button |
| color.text | `#f94a00` | text on page content |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **Sf Pro** | 16px | 400 | 24px | normal | <div>, <div> in the header, <a> in the header, <span>, <p>, <span> in the button, and <div> in the button |
| type.body-22px | **Sf Pro** | 22px | 500 | 34.2222px | normal | <h2> |
| type.display-52px | **Sf Pro** | 52px | 500 | 52px | -2.08px | <h1> |
| type.body-14px | **Sf Pro** | 14px | 400 | 20px | normal | <button> in the button, <span>, and <span> in the button |
| type.body-16px | **Sf Pro** | 16px | 400 | 22.8571px | normal | <p> |
| type.utility-12px | **Sf Pro** | 12px | 400 | 16px | normal | <span> in the header and <p> |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `0px 0px 24px` | padding | page content |
| `16px` | padding | page content |
| `24px 24px 40px` | padding | page content |
| `0px 24px` | padding | page content |
| `12px 0px 0px` | margin | page content |
| `0px 24px 24px` | padding | page content |
| `0px 0px 12px` | padding | page content |
| `24px` | padding | page content |

### Shape and depth

The captured pages use `0px none 16px`, `0px none 3.35544e+07px`, and `2px solid 16px` border treatments. Recorded gradients include `linear-gradient(90deg, rgba(17, 17, 17, 0.5) 0%, rgb(17, 17, 17) 100%)` and `linear-gradient(90deg, rgba(17, 17, 17, 0.64) 0%, rgb(17, 17, 17) 100%)`.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#000000`, `#111111`, and `#1a1a1a`. Text colors include `#ffffff`, `#686a6e`, and `#ff6b02`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Sf Pro**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `0px 0px 24px`, `16px`, `24px 24px 40px`, `0px 24px`, and `12px 0px 0px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#000000`, `#111111`, and `#1a1a1a`. Depth is supported by the returned gradients.

## Components and states

The captured pages include repeated styling on <div>, <h2>, <a>, <span>, <button>, <p>, and <h1> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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

- `#ffffff`
- `#000000`
- `#111111`
- `#1a1a1a`
- `#686a6e`
- `#ff6b02`
- `#020108`
- `#f94a00`

## Typography captured from app.fourmula.ai

- **Sf Pro** — weight 400 · size 16px

# How arcee.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/arcee.ai-design)

Last updated: 2026-08-03

## Captured pages

[![Arcee AI](https://pin.fontofweb.com/6373?format=jpg)](https://design.withfudge.com/share/pin-6373)

[Arcee AI](https://design.withfudge.com/share/pin-6373)

[![Arcee AI](https://pin.fontofweb.com/6372?format=jpg)](https://design.withfudge.com/share/pin-6372)

[Arcee AI](https://design.withfudge.com/share/pin-6372)

## Overview

arcee.ai presents a predominantly light surface treatment in the captured pages. The system is anchored by `#0a0a0a` and `#008c8c`, with typography led by **Sora** and **Noto Serif Armenian**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#0a0a0a` | text on page content in the main |
| color.text | `#008c8c` | text on page content in the main |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **Sora** | 16px | 400 | 24px | normal | <div> in the main and <p> in the main |
| type.heading-24px | **Noto Serif Armenian** | 24px | 700 | 36px | -0.48px | <h3> in the main |
| type.display-48px | **Noto Serif Armenian** | 48px | 400 | 57.6px | -0.96px | <h2> in the main and <span> in the main |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `40px` | padding | page content |
| `80px 40px` | padding | page content |

### Shape and depth

The captured pages use `1px solid 0px` border treatments.

## Colors

The visual system is predominantly light surface treatment. Surface roles are not fully established. Text colors include `#0a0a0a` and `#008c8c`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Sora** and **Noto Serif Armenian**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `40px` and `80px 40px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly light surface treatment. The surface palette is not fully established. No structured gradient or shadow treatment is established.

## Components and states

The captured pages include repeated styling on <div>, <h3>, <p>, <h2>, and <span> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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

- `#0a0a0a`
- `#008c8c`

## Typography captured from arcee.ai

- **Sora** — weight 400 · size 16px
- **Noto Serif Armenian** — weight 700 · size 24px

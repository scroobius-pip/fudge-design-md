# How astrnt.co is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/astrnt.co-design)

Last updated: 2026-08-03

## Captured pages

[![ASTRNT – Transforming Hiring and Admissions](https://pin.fontofweb.com/8774?format=jpg)](https://design.withfudge.com/share/pin-8774)

[ASTRNT – Transforming Hiring and Admissions](https://design.withfudge.com/share/pin-8774)

[![ASTRNT – Transforming Hiring and Admissions](https://pin.fontofweb.com/8773?format=jpg)](https://design.withfudge.com/share/pin-8773)

[ASTRNT – Transforming Hiring and Admissions](https://design.withfudge.com/share/pin-8773)

## Overview

astrnt.co presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#000000`, `#18244e`, and `#494ca1`, with typography led by **Open Sans**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.surface | `#000000` | surface on page content |
| color.text | `#18244e` | text on page content |
| color.text | `#494ca1` | text on page content in the header |
| color.text | `#db334d` | text on page content in the header |
| color.text | `#ffffff` | text on page content in the header |
| color.text | `#2d26b8` | text on page content in the header |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **Open Sans** | 16px | 400 | 60px | normal | <div> |
| type.body-16px | **Open Sans** | 16px | 400 | 22.8571px | normal | <div>, <a> in the header, <li> in the header, and <ul> in the header |
| type.heading-14px | **Open Sans** | 14px | 700 | 80px | normal | <a> in the header |
| type.display-48px | **Open Sans** | 48px | 700 | 52px | normal | <div> |
| type.heading-14px | **Open Sans** | 14px | 700 | 36px | normal | <a> in the header |
| type.body-14px | **Open Sans** | 14px | 400 | 21px | normal | <div> in the header |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `180px 644.797px 120px 0px` | padding | page content |
| `0px 10px` | padding | page content |
| `0px 16px` | padding | page content |
| `20px 0px` | margin | page content |
| `22px 0px` | padding | page content |
| `0px 50px 0px 0px` | margin | page content |
| `0px -10px` | margin | page content |

### Shape and depth

The captured pages use `2px solid 6px` border treatments.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#000000`. Text colors include `#18244e`, `#494ca1`, and `#db334d`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Open Sans**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `180px 644.797px 120px 0px`, `0px 10px`, `0px 16px`, `20px 0px`, and `22px 0px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#000000`. No structured gradient or shadow treatment is established.

## Components and states

The captured pages include repeated styling on <div>, <a>, <li>, and <ul> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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
- `#18244e`
- `#494ca1`
- `#db334d`
- `#ffffff`
- `#2d26b8`

## Typography captured from astrnt.co

- **Open Sans** — weight 400 · size 16px

# How autogram.id is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/autogram.id-design)

Last updated: 2026-08-03

## Captured pages

[![Autogram](https://pin.fontofweb.com/10168?format=jpg)](https://design.withfudge.com/share/pin-10168)

[Autogram](https://design.withfudge.com/share/pin-10168)

[![Autogram](https://pin.fontofweb.com/10167?format=jpg)](https://design.withfudge.com/share/pin-10167)

[Autogram](https://design.withfudge.com/share/pin-10167)

## Overview

autogram.id presents a predominantly light surface treatment in the captured pages. The system is anchored by `#111111`, `#fdfdfc`, and `#fafafa`, with typography led by **Inter**, **Host Grotesk**, **Applesystem**, and **System**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#111111` | text on page content in the nav |
| color.surface | `#fdfdfc` | surface on page content |
| color.surface | `#fafafa` | surface on page content in the nav |
| color.text | `#000000` | text on page content |
| color.surface | `#005bdb` | surface on page content in the button |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-15px | **Inter** | 15px | 400 | 22.5px | -0.1px | <div> in the nav, <nav> in the nav, <body>, <section> in the main, <main> in the main, <a> in the nav, and <div> in the main |
| type.display-68px | **Host Grotesk** | 68px | 450 | 68px | -2.72px | <span> in the main, <h1> in the main, and <div> in the main |
| type.body-15px | **Inter** | 15px | 500 | 22.5px | -0.1px | <div> in the main |
| type.body-14px | **Applesystem** | 14px | 400 | normal | normal | <div> |
| type.body-16px | **System** | 16px | 400 | 24px | normal | <html> |
| type.body-16px | **Inter** | 16px | 500 | 24px | -0.1px | <div> in the main |
| type.body-20px | **Inter** | 20px | 400 | 28px | -0.1px | <p> in the main |
| type.body-14px | **Inter** | 14px | 550 | 20px | -0.1px | <a> in the nav |
| type.body-16px | **Inter** | 16px | 550 | 24px | -0.1px | <button> in the button |
| type.body-21px | **Host Grotesk** | 21px | 500 | 31.5px | -0.42px | <span> in the nav |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `0px 64px` | padding | page content |
| `64px` | padding-right | page content |
| `64px` | padding-left | page content |
| `8px` | margin-bottom | page content |
| `0px 380px 8px` | margin | page content |
| `380px` | margin-right | page content |
| `380px` | margin-left | page content |
| `0px 32px` | padding | page content |

### Shape and depth

The captured pages use `1px solid 3.35544e+07px`, `0px none 3.35544e+07px`, and `0px none 8px` border treatments.

## Colors

The visual system is predominantly light surface treatment. Surface colors include `#fdfdfc`, `#fafafa`, and `#005bdb`. Text colors include `#111111` and `#000000`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Inter**, **Host Grotesk**, **Applesystem**, and **System**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `0px 64px`, `64px`, `64px`, `8px`, and `0px 380px 8px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly light surface treatment. Surface treatment centers on `#fdfdfc`, `#fafafa`, and `#005bdb`. No structured gradient or shadow treatment is established.

## Components and states

The captured pages include repeated styling on <div>, <html>, <nav>, <body>, <section>, <main>, <a>, and <span> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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

- `#111111`
- `#fdfdfc`
- `#fafafa`
- `#000000`
- `#005bdb`

## Typography captured from autogram.id

- **Inter** — weight 400 · size 15px
- **Host Grotesk** — weight 500 · size 21px
- **Applesystem** — weight 400 · size 14px
- **System** — weight 400 · size 16px

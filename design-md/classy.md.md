# How classy.md is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/classy.md-design)

Last updated: 2026-08-03

## Captured pages

[![Classy](https://pin.fontofweb.com/10090?format=jpg)](https://design.withfudge.com/share/pin-10090)

[Classy](https://design.withfudge.com/share/pin-10090)

[![Classy](https://pin.fontofweb.com/10089?format=jpg)](https://design.withfudge.com/share/pin-10089)

[Classy](https://design.withfudge.com/share/pin-10089)

## Overview

classy.md presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#fafafa`, `#171717`, and `#bababa`, with typography led by **Inter**, **Jet Brains Mono**, and **Applesystem**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#fafafa` | text on page content in the header |
| color.surface | `#171717` | surface on page content in the header |
| color.text | `#bababa` | text on page content in the main |
| color.text | `#ffffff` | text on page content |
| color.text | `#000000` | text on page content |
| color.surface | `#f6339a` | surface on page content in the main |
| color.text | `#74d4ff` | text on page content in the footer |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **Inter** | 16px | 400 | normal | normal | <html>, <header> in the header, and <body> |
| type.body-16px | **Jet Brains Mono** | 16px | 400 | 28px | normal | <main> in the main, <div>, <footer> in the footer, <li> in the main, <ul> in the main, <p> in the main, <p> in the footer, <a> in the footer, and <span> in the main |
| type.body-14px | **Applesystem** | 14px | 400 | normal | normal | <div> |
| type.heading-16px | **Jet Brains Mono** | 16px | 600 | 28px | normal | <strong> in the main, <h2> in the main, and <h1> in the main |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `24px` | padding-right | page content |
| `24px` | padding-left | page content |
| `0px 502.5px` | margin | page content |
| `502.5px` | margin-right | page content |
| `502.5px` | margin-left | page content |
| `28px 24px 0px` | padding | page content |
| `28px` | padding-top | page content |
| `28px 0px` | margin | page content |

### Shape and depth

The captured pages use `0px 0px 1px none none solid 0px` border treatments.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#171717` and `#f6339a`. Text colors include `#fafafa`, `#bababa`, and `#ffffff`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Inter**, **Jet Brains Mono**, and **Applesystem**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `24px`, `24px`, `0px 502.5px`, `502.5px`, and `502.5px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#171717` and `#f6339a`. No structured gradient or shadow treatment is established.

## Components and states

The captured pages include repeated styling on <div>, <html>, <header>, <body>, <main>, <footer>, <li>, and <ul> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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

- `#fafafa`
- `#171717`
- `#bababa`
- `#ffffff`
- `#000000`
- `#f6339a`
- `#74d4ff`

## Typography captured from classy.md

- **Inter** — weight 400 · size 16px
- **Jet Brains Mono** — weight 400 · size 16px
- **Applesystem** — weight 400 · size 14px

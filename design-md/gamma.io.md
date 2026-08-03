# How gamma.io is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/gamma.io-design)

Last updated: 2026-08-03

## Captured pages

[![Gamma | Find & Buy Bitcoin Ordinals and NFTs](https://pin.fontofweb.com/8485?format=jpg)](https://design.withfudge.com/share/pin-8485)

[Gamma | Find & Buy Bitcoin Ordinals and NFTs](https://design.withfudge.com/share/pin-8485)

[![Gamma | Find & Buy Bitcoin Ordinals and NFTs](https://pin.fontofweb.com/8484?format=jpg)](https://design.withfudge.com/share/pin-8484)

[Gamma | Find & Buy Bitcoin Ordinals and NFTs](https://design.withfudge.com/share/pin-8484)

## Overview

gamma.io presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#ffffff`, `#000000`, and `#0c0c0d`, with typography led by **Gamma Sans** and **Universal Sans**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#ffffff` | text on page content |
| color.surface | `#000000` | surface on page content |
| color.text | `#0c0c0d` | text on page content in the button |
| color.surface | `#1d1d1e` | surface on page content |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **Gamma Sans** | 16px | 400 | 24px | 0.32px | <div>, <button> in the button, and <a> |
| type.body-18px | **Gamma Sans** | 18px | 300 | 27px | 0.36px | <div> |
| type.display-72px | **Universal Sans** | 72px | 600 | 82.8px | -0.36px | <div> |
| type.body-16px | **Gamma Sans** | 16px | 300 | 24px | 0.16px | <div> |
| type.display-48px | **Universal Sans** | 48px | 600 | 56px | 0.96px | <a> |
| type.body-14px | **Gamma Sans** | 14px | 400 | 20px | 0.28px | <div> in the button |
| type.heading-16px | **Universal Sans** | 16px | 600 | 24px | 0.16px | <div> |
| type.utility-12px | **Gamma Sans** | 12px | 300 | 16px | 0.12px | <div> |
| type.body-18px | **Gamma Sans** | 18px | 300 | 27px | 0.18px | <div> |
| type.body-14px | **Gamma Sans** | 14px | 400 | 20px | 0.32px | <button> in the button |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `230px 32px` | padding | page content |
| `0px 185.5px` | margin | page content |
| `0px 40px` | padding | page content |
| `140px 84.5px` | margin | page content |
| `88px` | padding | page content |
| `0px 52px` | padding | page content |
| `20px` | padding | page content |
| `0px 84.5px` | margin | page content |

### Shape and depth

The captured pages use `0px none 999px` and `0px none 8px` border treatments. Recorded gradients include `linear-gradient(168.57deg, rgb(255, 255, 255) 14.81%, rgb(251, 240, 237) 22.79%, rgb(224, 166, 181) 81.04%, rgb(220, 148, 213) 91.42%)`.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#000000` and `#1d1d1e`. Text colors include `#ffffff` and `#0c0c0d`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Gamma Sans** and **Universal Sans**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `230px 32px`, `0px 185.5px`, `0px 40px`, `140px 84.5px`, and `88px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#000000` and `#1d1d1e`. Depth is supported by the returned gradients.

## Components and states

The captured pages include repeated styling on <div>, <button>, and <a> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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
- `#0c0c0d`
- `#1d1d1e`

## Typography captured from gamma.io

- **Gamma Sans** — weight 400 · size 16px
- **Universal Sans** — weight 600 · size 72px

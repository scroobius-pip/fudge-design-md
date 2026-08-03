# How gemini.google.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/gemini.google.com-design)

Last updated: 2026-08-03

## Captured pages

[![Replicating Semantic UI Design - Google Gemini](https://pin.fontofweb.com/8794?format=jpg)](https://design.withfudge.com/share/pin-8794)

[Replicating Semantic UI Design - Google Gemini](https://design.withfudge.com/share/pin-8794)

[![Google Gemini](https://pin.fontofweb.com/5688?format=jpg)](https://design.withfudge.com/share/pin-5688)

[Google Gemini](https://design.withfudge.com/share/pin-5688)

## Overview

gemini.google.com presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#000000`, `#e3e3e3`, and `#c4c7c5`, with typography led by **Times**, **Google Sans Code**, **Google Sans**, **Google Sans Flex**, and **Arial**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.surface | `#000000` | surface on page content in the nav |
| color.text | `#e3e3e3` | text on page content in the nav |
| color.text | `#c4c7c5` | text on page content in the nav |
| color.surface | `#1e1f20` | surface on page content in the main |
| color.text | `#81c995` | text on page content in the main |
| color.text | `#c2e7ff` | text on page content in the button |
| color.text | `#8ab4f8` | text on page content in the main |
| color.text | `#fa903e` | text on page content in the main |
| color.text | `#9e9eff` | text on page content in the button |
| color.text | `#a8c7fa` | text on page content in the button |
| color.text | `#f28b82` | text on page content in the main |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **Times** | 16px | 400 | normal | normal | <div> in the nav, <a> in the button, and <div> in the main |
| type.body-14px | **Google Sans Code** | 14px | 400 | 21px | normal | <span> in the main and <code> in the main |
| type.body-14px | **Google Sans** | 14px | 500 | 20px | normal | <div> in the main and <span> in the button |
| type.body-16px | **Google Sans Flex** | 16px | 400 | 24px | normal | <p> in the main |
| type.body-24px | **Arial** | 24px | 400 | normal | normal | <span> in the button |
| type.body-14px | **Google Sans** | 14px | 500 | normal | normal | <span> in the button |
| type.body-24px | **Times** | 24px | 400 | normal | normal | <span> in the nav and <span> in the button |
| type.body-14px | **Google Sans** | 14px | 500 | 0px | normal | <div> in the button |
| type.body-20px | **Google Sans** | 20px | 500 | 28px | normal | <span> in the button |
| type.heading-14px | **Google Sans Code** | 14px | 700 | 21px | normal | <span> in the main |
| type.utility-13px | **Google Sans** | 13px | 400 | 27px | normal | <a> in the button |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `16px` | padding | page content |
| `80px 0px 0px` | padding | page content |
| `0px 0px 24px` | padding | page content |
| `12px` | padding | page content |
| `9px 12px` | padding | page content |
| `0px 0px 8px` | margin | page content |
| `8px 8px 8px 16px` | padding | page content |
| `4px 0px 2px` | margin | page content |

### Shape and depth

The captured pages use `0px none 16px 16px 4px 4px` and `0px none 50%` border treatments.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#000000` and `#1e1f20`. Text colors include `#e3e3e3`, `#c4c7c5`, and `#81c995`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Times**, **Google Sans Code**, **Google Sans**, **Google Sans Flex**, and **Arial**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `16px`, `80px 0px 0px`, `0px 0px 24px`, `12px`, and `9px 12px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#000000` and `#1e1f20`. No structured gradient or shadow treatment is established.

## Components and states

The captured pages include repeated styling on <div>, <span>, <a>, <code>, and <p> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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
- `#e3e3e3`
- `#c4c7c5`
- `#1e1f20`
- `#81c995`
- `#c2e7ff`
- `#8ab4f8`
- `#fa903e`
- `#9e9eff`
- `#a8c7fa`
- `#f28b82`

## Typography captured from gemini.google.com

- **Times** — weight 400 · size 16px
- **Google Sans Code** — weight 400 · size 14px
- **Google Sans** — weight 500 · size 20px
- **Google Sans Flex** — weight 400 · size 16px
- **Arial** — weight 400 · size 24px

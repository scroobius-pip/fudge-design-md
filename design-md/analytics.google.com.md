# How analytics.google.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/analytics.google.com-design)

Last updated: 2026-08-03

## Captured pages

[![Analytics | Home](https://pin.fontofweb.com/6041?format=jpg)](https://design.withfudge.com/share/pin-6041)

[Analytics | Home](https://design.withfudge.com/share/pin-6041)

[![Analytics | Home](https://pin.fontofweb.com/6040?format=jpg)](https://design.withfudge.com/share/pin-6040)

[Analytics | Home](https://design.withfudge.com/share/pin-6040)

## Overview

analytics.google.com presents a predominantly light surface treatment in the captured pages. The system is anchored by `#202124`, `#f1f3f4`, and `#000000`, with typography led by **Roboto** and **Google Sans 18 Pt**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#202124` | text on page content in the main |
| color.surface | `#f1f3f4` | surface on page content in the main |
| color.text | `#000000` | text on page content in the main |
| color.text | `#5f6368` | text on page content in the button |
| color.text | `#1a73e8` | text on page content in the main |
| color.text | `#1967d2` | text on page content in the button |
| color.text | `#188038` | text on page content in the main |
| color.text | `#d93025` | text on page content in the main |
| color.text | `#333333` | text on page content in the main |
| color.border | `#dadce0` | border on page content in the button |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.utility-13px | **Roboto** | 13px | 400 | 14.95px | normal | <div> in the main and <button> in the button |
| type.body-14px | **Google Sans 18 Pt** | 14px | 500 | 14px | 0.25px | <div> in the main |
| type.body-14px | **Google Sans 18 Pt** | 14px | 500 | 20px | 0.25px | <div> in the main and <p> in the main |
| type.body-14px | **Google Sans 18 Pt** | 14px | 500 | 21px | 0.15px | <span> in the button |
| type.body-14px | **Google Sans 18 Pt** | 14px | 500 | 16.1px | 0.15px | <span> in the button |
| type.body-18px | **Google Sans 18 Pt** | 18px | 500 | 24px | normal | <div> in the main |
| type.utility-13px | **Roboto** | 13px | 400 | 20px | 0.2px | <span> in the button |
| type.body-14px | **Google Sans 18 Pt** | 14px | 500 | 16px | 0.15px | <span> in the button |
| type.body-14px | **Google Sans 18 Pt** | 14px | 500 | 18px | 0.15px | <span> in the button |
| type.utility-12px | **Roboto** | 12px | 400 | 13.8px | normal | <text> in the main |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `36px 24px 0px 8px` | margin | page content |
| `24px 40px 40px 32px` | padding | page content |
| `46px 0px 0px` | margin | page content |
| `20px 0px 0px` | padding | page content |
| `0px 24px` | padding | page content |
| `0px 0px 14px` | margin | page content |
| `4px 0px` | padding | page content |
| `0px 4px 0px 0px` | padding | page content |

### Shape and depth

The captured pages use `0px none 8px`, `0.909091px solid 22px`, and `1.81818px 1.81818px 0px 0px solid 0px` border treatments.

## Colors

The visual system is predominantly light surface treatment. Surface colors include `#f1f3f4`. Text colors include `#202124`, `#000000`, and `#5f6368`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Roboto** and **Google Sans 18 Pt**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `36px 24px 0px 8px`, `24px 40px 40px 32px`, `46px 0px 0px`, `20px 0px 0px`, and `0px 24px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly light surface treatment. Surface treatment centers on `#f1f3f4`. No structured gradient or shadow treatment is established.

## Components and states

The captured pages include repeated styling on <span>, <div>, <button>, <text>, and <p> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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

- `#202124`
- `#f1f3f4`
- `#000000`
- `#5f6368`
- `#1a73e8`
- `#1967d2`
- `#188038`
- `#d93025`
- `#333333`
- `#dadce0`

## Typography captured from analytics.google.com

- **Roboto** — weight 400 · size 13px
- **Google Sans 18 Pt** — weight 500 · size 18px

# How blog.google is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/blog.google-design)

Last updated: 2026-08-03

## Captured pages

[![The Keyword | Google Product and Technology News and Stories](https://pin.fontofweb.com/7540?format=jpg)](https://design.withfudge.com/share/pin-7540)

[The Keyword | Google Product and Technology News and Stories](https://design.withfudge.com/share/pin-7540)

[![The Keyword | Google Product and Technology News and Stories](https://pin.fontofweb.com/4979?format=jpg)](https://design.withfudge.com/share/pin-4979)

[The Keyword | Google Product and Technology News and Stories](https://design.withfudge.com/share/pin-4979)

## Overview

blog.google presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#5f6368`, `#000000`, and `#364043`, with typography led by **Google Sans**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#5f6368` | text on page content in the main |
| color.surface | `#000000` | surface on page content in the main |
| color.shadow | `#364043` | shadow on page content in the main |
| color.surface | `#ffffff` | surface on page content in the main |
| color.text | `#202124` | text on page content in the main |
| color.text | `#1a73e8` | text on page content in the main |
| color.text | `#3367d6` | text on page content in the main |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-18px | **Google Sans** | 18px | 300 | 25.992px | normal | <div> in the main |
| type.display-36px | **Google Sans** | 36px | 400 | 44px | normal | <h1> in the main |
| type.body-16px | **Google Sans** | 16px | 400 | 28px | normal | <p> in the main |
| type.body-14px | **Google Sans** | 14px | 500 | 48px | 0.25px | <a> in the main |
| type.body-14px | **Google Sans** | 14px | 500 | 22px | 0.388889px | <span> in the main |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `24px 36px 36px` | padding | page content |
| `0px 0px 0px -72px` | margin | page content |
| `0px 0px 16px` | margin | page content |
| `0px 0px 8px` | margin | page content |

### Shape and depth

The captured pages use `0px none 16px` border treatments. Recorded shadows include `rgba(54, 64, 67, 0.3) 0px 1px 3px 0px, rgba(54, 64, 67, 0.15) 0px 4px 8px 3px`.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#000000` and `#ffffff`. Text colors include `#5f6368`, `#202124`, and `#1a73e8`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Google Sans**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `24px 36px 36px`, `0px 0px 0px -72px`, `0px 0px 16px`, and `0px 0px 8px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#000000` and `#ffffff`. Depth is supported by the returned shadows.

## Components and states

The captured pages include repeated styling on <div>, <a>, <h1>, <p>, and <span> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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

- `#5f6368`
- `#000000`
- `#364043`
- `#ffffff`
- `#202124`
- `#1a73e8`
- `#3367d6`

## Typography captured from blog.google

- **Google Sans** — weight 300 · size 18px

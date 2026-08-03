# How account.nothing.tech is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/account.nothing.tech-design)

Last updated: 2026-08-03

## Captured pages

[![Nothing Account - Login](https://pin.fontofweb.com/8561?format=jpg)](https://design.withfudge.com/share/pin-8561)

[Nothing Account - Login](https://design.withfudge.com/share/pin-8561)

[![Nothing Account - Login](https://pin.fontofweb.com/3303?format=jpg)](https://design.withfudge.com/share/pin-3303)

[Nothing Account - Login](https://design.withfudge.com/share/pin-3303)

## Overview

account.nothing.tech presents a mixed light and dark surface treatment in the captured pages. The system is anchored by `#000000`, `#161317`, and `#ffffff`, with typography led by **Inter** and **N Type 82**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.surface | `#000000` | surface on page content in the nav |
| color.text | `#161317` | text on page content in the nav |
| color.surface | `#ffffff` | surface on page content in the nav |
| color.text | `#929292` | text on page content in the main |
| color.surface | `#eeeeee` | surface on page content in the main |
| color.text | `#323232` | text on page content in the main |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **Inter** | 16px | 400 | 19.2px | normal | <span> in the nav, <div> in the nav, and <div> in the main |
| type.utility-11px | **Inter** | 11px | 400 | 16px | normal | <p> in the main and <a> in the main |
| type.display-32px | **N Type 82** | 32px | 100 | 32px | normal | <h2> in the main |
| type.body-14px | **Inter** | 14px | 500 | 20px | normal | <a> in the main |
| type.body-16px | **Inter** | 16px | 400 | 16px | normal | <div> in the main |
| type.body-14px | **Inter** | 14px | 400 | 16.8px | normal | <a> in the main |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `22.4px 24px` | padding | page content |
| `0px 0px 52px` | margin | page content |
| `8px 10.4px` | padding | page content |
| `52px 0px 0px` | margin | page content |
| `32px 0px 0px` | margin | page content |
| `8px 0px 52px` | margin | page content |
| `8px 12.8px` | padding | page content |
| `0px 0px 0px 10px` | margin | page content |

### Shape and depth

The captured pages use `0px none 16px`, `1px solid 800px`, `0px none 50%`, and `1px solid 50%` border treatments.

## Colors

The visual system is mixed light and dark surface treatment. Surface colors include `#000000`, `#ffffff`, and `#eeeeee`. Text colors include `#161317`, `#929292`, and `#323232`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Inter** and **N Type 82**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `22.4px 24px`, `0px 0px 52px`, `8px 10.4px`, `52px 0px 0px`, and `32px 0px 0px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is mixed light and dark surface treatment. Surface treatment centers on `#000000`, `#ffffff`, and `#eeeeee`. No structured gradient or shadow treatment is established.

## Components and states

The captured pages include repeated styling on <span>, <div>, <h2>, <p>, and <a> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

## Responsive behavior

The captured token set does not establish breakpoint values or mobile behavior. Validate stacking, navigation changes, image treatment, and type scaling against the representative captures before implementing a responsive adaptation.

## Practical implementation guidance

- Preserve the mixed light/dark surface relationship and the measured type hierarchy before adding decorative treatment.
- Start from the returned typography, spacing, color, and border values; name any new scale or semantic role as an adaptation rather than as a source fact.
- Keep the captured font families separate from licensing decisions.
- Use screenshots to validate component anatomy, responsive behavior, focus treatment, and motion before shipping.
- Avoid introducing gradients or shadows beyond the captured treatment; none are established.

## Scope note

The guide uses representative captured pages. The evidence supports the values and observations above; it does not establish component semantics, interaction states, motion timing, breakpoint rules, font licensing, or a complete source stylesheet.

## Colors

- `#000000`
- `#161317`
- `#ffffff`
- `#929292`
- `#eeeeee`
- `#323232`

## Typography captured from account.nothing.tech

- **Inter** — weight 400 · size 16px
- **N Type 82** — weight 100 · size 32px

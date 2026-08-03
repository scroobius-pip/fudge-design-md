# How everyday-practice.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/everyday-practice.com-design)

Last updated: 2026-08-03

## Captured pages

[![일상의실천](https://pin.fontofweb.com/10374?format=jpg)](https://design.withfudge.com/share/pin-10374)

[일상의실천](https://design.withfudge.com/share/pin-10374)

[![일상의실천](https://pin.fontofweb.com/10373?format=jpg)](https://design.withfudge.com/share/pin-10373)

[일상의실천](https://design.withfudge.com/share/pin-10373)

[![일상의실천](https://pin.fontofweb.com/10372?format=jpg)](https://design.withfudge.com/share/pin-10372)

[일상의실천](https://design.withfudge.com/share/pin-10372)

[![일상의실천](https://pin.fontofweb.com/10371?format=jpg)](https://design.withfudge.com/share/pin-10371)

[일상의실천](https://design.withfudge.com/share/pin-10371)

[![일상의실천](https://pin.fontofweb.com/10370?format=jpg)](https://design.withfudge.com/share/pin-10370)

[일상의실천](https://design.withfudge.com/share/pin-10370)

## Overview

everyday-practice.com presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#e2e2e2`, `#131313`, and `#787878`, with typography led by **Font**, **Applesystem**, and **Apple Sd Gothic Neo**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#e2e2e2` | text on page content |
| color.surface | `#131313` | surface on page content |
| color.border | `#787878` | border on page content |
| color.surface | `#ffffff` | surface on page content |
| color.text | `#000000` | text on page content |
| color.surface | `#1c1c1c` | surface on page content |
| color.surface | `#222222` | surface on page content |
| color.surface | `#d8baff` | surface on page content |
| color.surface | `#42ff00` | surface on page content |
| color.surface | `#ffeb3a` | surface on page content |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **Font** | 16px | 400 | normal | normal | <li> in the nav, <ul> in the nav, <nav> in the nav, <div>, <body>, <a>, <img>, <figure>, <form>, <label>, <input>, and <span> |
| type.body-17.6px | **Font** | 17.6px | 400 | normal | normal | <input> and <textarea> |
| type.body-14px | **Applesystem** | 14px | 400 | normal | normal | <div> |
| type.body-16px | **Apple Sd Gothic Neo** | 16px | 400 | normal | normal | <html> |
| type.body-21.3333px | **Font** | 21.3333px | 400 | normal | normal | <a> in the nav, <span>, <div>, and <a> |
| type.body-16px | **Font** | 16px | 400 | 24px | normal | <span>, <p>, and <a> |
| type.body-13.3333px | **Font** | 13.3333px | 400 | normal | normal | <button> in the button |
| type.body-13.8667px | **Font** | 13.8667px | 400 | normal | normal | <div> and <label> |
| type.body-17.6px | **Font** | 17.6px | 400 | 24.64px | normal | <h3> |
| type.body-21.3333px | **Font** | 21.3333px | 400 | 23.4667px | normal | <h2> |
| type.body-16px | **Font** | 16px | 400 | 16px | normal | <div> |
| type.utility-11.5px | **Font** | 11.5px | 500 | normal | normal | <span> |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `10px` | padding-left | page content |
| `10px` | padding-right | page content |
| `0px 10px` | padding | page content |
| `10px` | column-gap | page content |
| `10px` | gap | page content |
| `10px` | row-gap | page content |
| `50px 0px 0px` | padding | page content |
| `50px` | padding-top | page content |

### Shape and depth

The captured pages use `0px 1px 0px 0px none solid none none 0px`, `0px 0px 0px 1px none none none solid 0px`, `0px 0px 1px none none solid 0px`, `0px 0px 1px none none solid 0px`, `0px none 5.175px`, and `1px solid 0px` border treatments.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#131313`, `#ffffff`, and `#1c1c1c`. Text colors include `#e2e2e2` and `#000000`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Font**, **Applesystem**, and **Apple Sd Gothic Neo**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `10px`, `10px`, `0px 10px`, `10px`, and `10px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#131313`, `#ffffff`, `#1c1c1c`, and `#222222`. No structured gradient or shadow treatment is established.

## Components and states

The captured pages include repeated styling on <div>, <html>, <a>, <li>, <ul>, <nav>, <body>, and <span> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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

- `#e2e2e2`
- `#131313`
- `#787878`
- `#ffffff`
- `#000000`
- `#1c1c1c`
- `#222222`
- `#d8baff`
- `#42ff00`
- `#ffeb3a`

## Typography captured from everyday-practice.com

- **Font** — weight 400 · size 21.3333px
- **Applesystem** — weight 400 · size 14px
- **Apple Sd Gothic Neo** — weight 400 · size 16px

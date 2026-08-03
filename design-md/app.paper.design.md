# How app.paper.design is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/app.paper.design-design)

Last updated: 2026-08-03

## Captured pages

[![Files · Paper](https://pin.fontofweb.com/8569?format=jpg)](https://design.withfudge.com/share/pin-8569)

[Files · Paper](https://design.withfudge.com/share/pin-8569)

[![Files · Paper](https://pin.fontofweb.com/8568?format=jpg)](https://design.withfudge.com/share/pin-8568)

[Files · Paper](https://design.withfudge.com/share/pin-8568)

## Overview

app.paper.design presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#000000`, `#373737`, and `#222222`, with typography led by **Applesystem** and **Matter**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.surface | `#000000` | surface on page content |
| color.text | `#373737` | text on page content in the button |
| color.surface | `#222222` | surface on page content in the main |
| color.surface | `#f2f2f2` | surface on page content in the button |
| color.text | `#81adec` | text on page content in the aside |
| color.surface | `#ffffff` | surface on page content in the aside |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.utility-12px | **Applesystem** | 12px | 400 | 16px | normal | <div>, <ul>, <li>, <span>, <div> in the aside, <p> in the nav, <div> in the main, and <button> in the button |
| type.utility-13px | **Applesystem** | 13px | 500 | 16px | normal | <button> in the button, <p> in the aside, and <a> in the aside |
| type.utility-13px | **Applesystem** | 13px | 400 | 16px | normal | <a> in the nav |
| type.utility-12px | **Applesystem** | 12px | 400 | 18px | normal | <p> in the aside |
| type.utility-12px | **Applesystem** | 12px | 465 | 16px | normal | <p> in the nav and <span> in the nav |
| type.body-18px | **Matter** | 18px | 480 | 28px | 0.18px | <h2> |
| type.body-24px | **Matter** | 24px | 480 | 32px | 0.12px | <h2> in the main |
| type.utility-12px | **Applesystem** | 12px | 500 | 12px | normal | <button> in the button |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `64px 0px 128px` | padding | page content |
| `12px` | padding | page content |
| `0px 32px 32px` | padding | page content |
| `32px 0px 0px` | padding | page content |
| `32px 0px 0px` | margin | page content |
| `0px 8px` | padding | page content |
| `0px 0px 2px` | margin | page content |
| `16px` | padding | page content |

### Shape and depth

The captured pages use `0px none 4px` and `1px solid 6px` border treatments.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#000000`, `#222222`, and `#f2f2f2`. Text colors include `#373737` and `#81adec`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Applesystem** and **Matter**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `64px 0px 128px`, `12px`, `0px 32px 32px`, `32px 0px 0px`, and `32px 0px 0px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#000000`, `#222222`, `#f2f2f2`, and `#ffffff`. No structured gradient or shadow treatment is established.

## Components and states

The captured pages include repeated styling on <div>, <h2>, <ul>, <li>, <button>, <span>, <a>, and <p> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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
- `#373737`
- `#222222`
- `#f2f2f2`
- `#81adec`
- `#ffffff`

## Typography captured from app.paper.design

- **Applesystem** — weight 400 · size 12px
- **Matter** — weight 480 · size 18px

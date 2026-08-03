# How app.subframe.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/app.subframe.com-design)

Last updated: 2026-08-03

## Captured pages

[![Context Menu — Subframe](https://pin.fontofweb.com/8787?format=jpg)](https://design.withfudge.com/share/pin-8787)

[Context Menu — Subframe](https://design.withfudge.com/share/pin-8787)

[![Calendar — Subframe](https://pin.fontofweb.com/8786?format=jpg)](https://design.withfudge.com/share/pin-8786)

[Calendar — Subframe](https://design.withfudge.com/share/pin-8786)

[![Accordion — Subframe](https://pin.fontofweb.com/8785?format=jpg)](https://design.withfudge.com/share/pin-8785)

[Accordion — Subframe](https://design.withfudge.com/share/pin-8785)

[![Components — Subframe](https://pin.fontofweb.com/8059?format=jpg)](https://design.withfudge.com/share/pin-8059)

[Components — Subframe](https://design.withfudge.com/share/pin-8059)

[![Pricing Plans — Subframe](https://pin.fontofweb.com/6474?format=jpg)](https://design.withfudge.com/share/pin-6474)

[Pricing Plans — Subframe](https://design.withfudge.com/share/pin-6474)

[![Authorization Successful — Subframe](https://pin.fontofweb.com/6473?format=jpg)](https://design.withfudge.com/share/pin-6473)

[Authorization Successful — Subframe](https://design.withfudge.com/share/pin-6473)

[![Authorize Application — Subframe](https://pin.fontofweb.com/6472?format=jpg)](https://design.withfudge.com/share/pin-6472)

[Authorize Application — Subframe](https://design.withfudge.com/share/pin-6472)

[![Your pages — Subframe](https://pin.fontofweb.com/6471?format=jpg)](https://design.withfudge.com/share/pin-6471)

[Your pages — Subframe](https://design.withfudge.com/share/pin-6471)

## Overview

app.subframe.com presents a mixed light and dark surface treatment in the captured pages. The system is anchored by `#242424`, `#000000`, and `#fcfcfc`, with typography led by **Inter**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#242424` | text on page content |
| color.surface | `#000000` | surface on page content |
| color.surface | `#fcfcfc` | surface on page content in the button |
| color.surface | `#f5f5f5` | surface on page content |
| color.border | `#f0f0f0` | border on page content |
| color.text | `#737373` | text on page content in the button |
| color.surface | `#ffffff` | surface on page content |
| color.border | `#ebebeb` | border on page content in the button |
| color.border | `#ededed` | border on page content |
| color.text | `#171717` | text on page content in the button |
| color.text | `#a3a3a3` | text on page content in the button |
| color.surface | `#2563eb` | surface on page content in the button |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.utility-12px | **Inter** | 12px | 500 | 18px | -0.06px | <div>, <button> in the button, and <div> in the button |
| type.body-14px | **Inter** | 14px | 400 | 20px | -0.14px | <button> in the button, <div>, and <span> |
| type.body-18px | **Inter** | 18px | 500 | 24px | -0.54px | <h2>, <span>, <button> in the button, and <h3> |
| type.utility-12px | **Inter** | 12px | 500 | 16px | -0.06px | <span> and <div> |
| type.utility-12px | **Inter** | 12px | 500 | 16px | normal | <span> in the button, <span>, and <div> |
| type.heading-14px | **Inter** | 14px | 600 | 20px | -0.14px | <div> |
| type.utility-10px | **Inter** | 10px | 500 | 12px | -0.06px | <span> and <div> |
| type.utility-12px | **Inter** | 12px | 400 | 16px | normal | <span> |
| type.utility-12px | **Inter** | 12px | 600 | 16px | normal | <span> |
| type.body-24px | **Inter** | 24px | 500 | 28px | -0.72px | <span> |
| type.utility-13px | **Inter** | 13px | 400 | 20px | -0.13px | <span> |
| type.body-14px | **Inter** | 14px | 500 | 20px | -0.14px | <span> and <span> in the button |
| type.utility-12px | **Inter** | 12px | 500 | 12px | normal | <div> |
| type.body-24px | **Inter** | 24px | 400 | 28px | -0.72px | <span> |
| type.heading-14px | **Inter** | 14px | 700 | 20px | -0.14px | <strong> |
| type.utility-13px | **Inter** | 13px | 500 | 20px | -0.13px | <span> in the button |
| type.utility-12px | **Inter** | 12px | 400 | 18px | -0.06px | <button> in the button |
| type.body-14px | **Inter** | 14px | 500 | 21px | -0.06px | <button> in the button |
| type.utility-11px | **Inter** | 11px | 500 | 16px | normal | <span> |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `48px` | padding | page content |
| `48px 16px` | padding | page content |
| `8px` | padding | page content |
| `64px 48px 48px` | padding | page content |
| `24px` | padding | page content |
| `16px` | padding | page content |
| `0px 0px 48px` | margin | page content |
| `32px` | padding | page content |

### Shape and depth

The captured pages use `1px solid 8px`, `0px none 12px`, `1px solid 6px`, `0px none 6px`, `2px dashed 6px`, `1px solid 12px`, `1px solid 12px`, and `1px solid 6px` border treatments. Recorded shadows include `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.16) 0px 4px 24px -4px, rgba(0, 0, 0, 0.12) 0px 2px 8px -2px`, `rgba(0, 0, 0, 0.08) 0px 4px 16px -4px, rgba(0, 0, 0, 0.08) 0px 2px 8px -2px`, `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.04) 0px 1px 4px -1px, rgba(0, 0, 0, 0.04) 0px 1px 2px 0px`, and `rgba(0, 0, 0, 0.04) 0px 2px 8px -2px, rgba(0, 0, 0, 0.04) 0px 1px 4px -1px`.

## Colors

The visual system is mixed light and dark surface treatment. Surface colors include `#000000`, `#fcfcfc`, and `#f5f5f5`. Text colors include `#242424`, `#737373`, and `#171717`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Inter**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `48px`, `48px 16px`, `8px`, `64px 48px 48px`, and `24px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is mixed light and dark surface treatment. Surface treatment centers on `#000000`, `#fcfcfc`, `#f5f5f5`, and `#ffffff`. Depth is supported by the returned shadows.

## Components and states

The captured pages include repeated styling on <div>, <h2>, <button>, <span>, <strong>, and <h3> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

## Responsive behavior

The captured token set does not establish breakpoint values or mobile behavior. Validate stacking, navigation changes, image treatment, and type scaling against the representative captures before implementing a responsive adaptation.

## Practical implementation guidance

- Preserve the mixed light/dark surface relationship and the measured type hierarchy before adding decorative treatment.
- Start from the returned typography, spacing, color, and border values; name any new scale or semantic role as an adaptation rather than as a source fact.
- Keep the captured font families separate from licensing decisions.
- Use screenshots to validate component anatomy, responsive behavior, focus treatment, and motion before shipping.
- Avoid introducing gradients or shadows beyond the captured treatment; the returned evidence includes those treatments.

## Scope note

The guide uses representative captured pages. The evidence supports the values and observations above; it does not establish component semantics, interaction states, motion timing, breakpoint rules, font licensing, or a complete source stylesheet.

## Colors

- `#242424`
- `#000000`
- `#fcfcfc`
- `#f5f5f5`
- `#f0f0f0`
- `#737373`
- `#ffffff`
- `#ebebeb`
- `#ededed`
- `#171717`
- `#a3a3a3`
- `#2563eb`

## Typography captured from app.subframe.com

- **Inter** — weight 500 · size 12px

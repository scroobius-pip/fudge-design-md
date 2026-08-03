# How accounts.x.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/accounts.x.ai-design)

Last updated: 2026-08-03

## Captured pages

[![Your SpaceXAI API Account | SpaceXAI Accounts](https://pin.fontofweb.com/10437?format=jpg)](https://design.withfudge.com/share/pin-10437)

[Your SpaceXAI API Account | SpaceXAI Accounts](https://design.withfudge.com/share/pin-10437)

[![Device Sign-in | Grok](https://pin.fontofweb.com/10204?format=jpg)](https://design.withfudge.com/share/pin-10204)

[Device Sign-in | Grok](https://design.withfudge.com/share/pin-10204)

[![Authorize — Grok | Grok](https://pin.fontofweb.com/10203?format=jpg)](https://design.withfudge.com/share/pin-10203)

[Authorize — Grok | Grok](https://design.withfudge.com/share/pin-10203)

[![Device Sign-in | Grok](https://pin.fontofweb.com/10202?format=jpg)](https://design.withfudge.com/share/pin-10202)

[Device Sign-in | Grok](https://design.withfudge.com/share/pin-10202)

[![Your xAI API Account | xAI Single-Sign On](https://pin.fontofweb.com/4140?format=jpg)](https://design.withfudge.com/share/pin-4140)

[Your xAI API Account | xAI Single-Sign On](https://design.withfudge.com/share/pin-4140)

[![Your xAI API Account | xAI Single-Sign On](https://pin.fontofweb.com/4139?format=jpg)](https://design.withfudge.com/share/pin-4139)

[Your xAI API Account | xAI Single-Sign On](https://design.withfudge.com/share/pin-4139)

[![Your xAI API Account | xAI Single-Sign On](https://pin.fontofweb.com/4138?format=jpg)](https://design.withfudge.com/share/pin-4138)

[Your xAI API Account | xAI Single-Sign On](https://design.withfudge.com/share/pin-4138)

## Overview

accounts.x.ai presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#ffffff`, `#1a1a1a`, and `#000000`, with typography led by **Inter**, **Applesystem**, and **System**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#ffffff` | text on page content |
| color.surface | `#1a1a1a` | surface on page content |
| color.text | `#000000` | text on page content |
| color.surface | `#0d0d0d` | surface on page content |
| color.surface | `#141414` | surface on page content in the main |
| color.border | `#303030` | border on page content in the main |
| color.text | `#fafafa` | text on page content in the nav |
| color.text | `#acaaaa` | text on page content in the nav |
| color.text | `#f07a82` | text on page content |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **Inter** | 16px | 400 | 24px | normal | <html>, <header> in the header, <div>, <body>, <aside> in the aside, <div> in the aside, <nav> in the nav, <button> in the button, <main> in the main, <div> in the main, <div> in the header, <img> in the main, <span> in the main, <img> in the button, <span> in the button, <svg>, <a>, <span>, and <form> |
| type.body-14px | **Inter** | 14px | 400 | 20px | normal | <svg> in the button, <span> in the button, <a> in the button, <p> in the main, <div> in the main, <span> in the main, <button> in the button, <a> in the main, <span>, and <p> |
| type.body-14px | **Applesystem** | 14px | 400 | normal | normal | <div> |
| type.body-14px | **Inter** | 14px | 500 | 20px | normal | <button> in the button and <span> |
| type.body-30px | **Inter** | 30px | 500 | 36px | -0.75px | <span> in the aside and <h1> in the aside |
| type.body-20px | **Inter** | 20px | 500 | 28px | normal | <a> in the nav |
| type.utility-13px | **Inter** | 13px | 400 | 19.5px | normal | <p> |
| type.utility-12px | **Inter** | 12px | 400 | 18px | normal | <p> |
| type.utility-12px | **Inter** | 12px | 400 | 16px | normal | <span> in the main and <p> |
| type.body-24px | **Inter** | 24px | 400 | 32px | -0.6px | <h1> |
| type.body-14px | **System** | 14px | 400 | 20px | 1.4px | <input> |
| type.body-16px | **Inter** | 16px | 500 | 24px | normal | <p> in the main |
| type.utility-12px | **Inter** | 12px | 600 | 18px | normal | <span> |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `16px` | padding-top | page content |
| `16px` | padding-bottom | page content |
| `20px` | padding-right | page content |
| `20px` | padding-left | page content |
| `16px 20px` | padding | page content |
| `48px 0px 0px` | padding | page content |
| `48px` | padding-top | page content |
| `24px` | gap | page content |

### Shape and depth

The captured pages use `1px solid 16px`, `0px none 12px`, `0px 0px 1px solid 0px`, `0px 0px 0px 2px solid 0px`, `1px solid 3.35544e+07px`, `0px none 3.35544e+07px`, `1px solid 0px`, and `1px solid 3.35544e+07px` border treatments. Recorded gradients include `conic-gradient(from 180deg at 99% 40% in lab, rgb(255, 255, 255) 18deg, rgb(156, 184, 221) 36deg, rgba(17, 17, 17, 0) 90deg, rgba(17, 17, 17, 0) 342deg, rgb(255, 255, 255) 360deg)` and `conic-gradient(at 99% 60% in lab, rgb(255, 255, 255) 0deg, rgba(17, 17, 17, 0) 18deg, rgba(17, 17, 17, 0) 270deg, rgb(156, 184, 221) 324deg, rgb(255, 255, 255) 342deg)`. Recorded shadows include `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px rgb(255,255,255)`.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#1a1a1a`, `#0d0d0d`, and `#141414`. Text colors include `#ffffff`, `#000000`, and `#fafafa`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Inter**, **Applesystem**, and **System**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `16px`, `16px`, `20px`, `20px`, and `16px 20px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#1a1a1a`, `#0d0d0d`, and `#141414`. Depth is supported by the returned gradients and shadows.

## Components and states

The captured pages include repeated styling on <div>, <html>, <header>, <body>, <aside>, <a>, <nav>, and <span> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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
- `#1a1a1a`
- `#000000`
- `#0d0d0d`
- `#141414`
- `#303030`
- `#fafafa`
- `#acaaaa`
- `#f07a82`

## Typography captured from accounts.x.ai

- **Inter** — weight 400 · size 16px
- **Applesystem** — weight 400 · size 14px
- **System** — weight 400 · size 14px

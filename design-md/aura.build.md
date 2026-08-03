# How aura.build is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/aura.build-design)

Last updated: 2026-08-03

## Captured pages

[![Brand Portfolio Website Template | Aura](https://pin.fontofweb.com/8824?format=jpg)](https://design.withfudge.com/share/pin-8824)

[Brand Portfolio Website Template | Aura](https://design.withfudge.com/share/pin-8824)

[![React Generator | Aura](https://pin.fontofweb.com/8823?format=jpg)](https://design.withfudge.com/share/pin-8823)

[React Generator | Aura](https://design.withfudge.com/share/pin-8823)

[![Changelog | Aura](https://pin.fontofweb.com/8663?format=jpg)](https://design.withfudge.com/share/pin-8663)

[Changelog | Aura](https://design.withfudge.com/share/pin-8663)

[![Changelog | Aura](https://pin.fontofweb.com/8662?format=jpg)](https://design.withfudge.com/share/pin-8662)

[Changelog | Aura](https://design.withfudge.com/share/pin-8662)

[![Changelog | Aura](https://pin.fontofweb.com/8661?format=jpg)](https://design.withfudge.com/share/pin-8661)

[Changelog | Aura](https://design.withfudge.com/share/pin-8661)

[![AI Infrastructure Landing Page Template | Aura](https://pin.fontofweb.com/8660?format=jpg)](https://design.withfudge.com/share/pin-8660)

[AI Infrastructure Landing Page Template | Aura](https://design.withfudge.com/share/pin-8660)

[![AI Infrastructure Landing Page Template | Aura](https://pin.fontofweb.com/8659?format=jpg)](https://design.withfudge.com/share/pin-8659)

[AI Infrastructure Landing Page Template | Aura](https://design.withfudge.com/share/pin-8659)

[![Browse Paid Templates - Aura](https://pin.fontofweb.com/8658?format=jpg)](https://design.withfudge.com/share/pin-8658)

[Browse Paid Templates - Aura](https://design.withfudge.com/share/pin-8658)

## Overview

aura.build presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#000000`, `#fafafa`, and `#ffffff`, with typography led by **Inter**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.surface | `#000000` | surface on page content |
| color.text | `#fafafa` | text on page content |
| color.surface | `#ffffff` | surface on page content |
| color.text | `#f5f5f5` | text on page content |
| color.text | `#a3a3a3` | text on page content in the nav |
| color.surface | `#262626` | surface on page content |
| color.border | `#404040` | border on page content |
| color.surface | `#171717` | surface on page content |
| color.text | `#d4d4d4` | text on page content |
| color.text | `#e5e5e5` | text on page content in the main |
| color.text | `#a6a6a6` | text on page content in the nav |
| color.text | `#737373` | text on page content |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **Inter** | 16px | 400 | 24px | -0.16px | <div>, <div> in the header, <button> in the button, <div> in the main, <p> in the main, <a>, <a> in the main, <span> in the button, <span> in the main, <ul> in the main, <li> in the main, and <div> in the button |
| type.body-14px | **Inter** | 14px | 400 | 20px | -0.16px | <a> in the nav, <span>, <div>, <p> in the main, <span> in the main, and <button> in the button |
| type.utility-12px | **Inter** | 12px | 400 | 16px | -0.16px | <a> in the nav, <a>, <span>, <div>, <button> in the button, <div> in the main, <span> in the main, <span> in the header, <a> in the header, <p> in the header, <span> in the button, and <p> in the main |
| type.body-24px | **Inter** | 24px | 500 | 32px | -1.2px | <h2> |
| type.body-14px | **Inter** | 14px | 400 | 22.75px | -0.16px | <p>, <p> in the main, and <span> in the main |
| type.display-48px | **Inter** | 48px | 600 | 48px | -1.2px | <h1> in the main and <h2> in the main |
| type.utility-12px | **Inter** | 12px | 500 | 16px | -0.16px | <span> in the main, <p> in the header, <p> in the main, <button> in the button, and <a> |
| type.body-14px | **Inter** | 14px | 500 | 20px | -0.16px | <span>, <a>, <button> in the button, <span> in the main, <span> in the button, <p> in the main, and <p> |
| type.utility-12px | **Inter** | 12px | 500 | 16px | -0.36px | <h3> in the main |
| type.body-20px | **Inter** | 20px | 500 | 28px | -0.5px | <h3> in the button |
| type.utility-10px | **Inter** | 10px | 400 | 15px | -0.16px | <span>, <button> in the button, <div>, <p>, <p> in the main, <span> in the main, and <span> in the button |
| type.utility-12px | **Inter** | 12px | 500 | 16px | 0.3px | <div> in the main |
| type.body-20px | **Inter** | 20px | 500 | 28px | -0.6px | <h3> in the main |
| type.body-16px | **Inter** | 16px | 400 | 26px | -0.16px | <p> |
| type.display-48px | **Inter** | 48px | 400 | 48px | -2.4px | <h1> |
| type.display-36px | **Inter** | 36px | 600 | 40px | -0.9px | <h3> in the main and <span> in the main |
| type.body-24px | **Inter** | 24px | 500 | 32px | -0.6px | <h3> in the main |
| type.body-16px | **Inter** | 16px | 500 | 24px | -0.16px | <span> and <a> |
| type.utility-11px | **Inter** | 11px | 400 | 16.5px | -0.16px | <span> and <div> |
| type.utility-9px | **Inter** | 9px | 400 | 13.5px | -0.16px | <span>, <span> in the main, and <div> in the main |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `96px 0px` | margin | page content |
| `0px 0px 24px` | margin | page content |
| `0px 24px` | padding | page content |
| `32px` | padding | page content |
| `24px` | padding | page content |
| `12px` | padding | page content |
| `16px 0px 0px` | margin | page content |
| `16px 16px 120px` | padding | page content |

### Shape and depth

The captured pages use `1px solid 16px`, `1px 0px 0px solid 0px`, `1px solid 16px`, `1px solid 12px`, `0px none 6px`, `1px solid 8px`, `0px none 9999px`, and `1px solid 8px` border treatments. Recorded gradients include `linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))`, `linear-gradient(rgb(23, 23, 23), rgb(38, 38, 38))`, `linear-gradient(rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0))`, and `linear-gradient(rgb(59, 130, 246), rgb(37, 99, 235))`. Recorded shadows include `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px, rgba(0, 0, 0, 0.06) 0px 1px 1px -0.5px, rgba(0, 0, 0, 0.06) 0px 3px 3px -1.5px, rgba(0, 0, 0, 0.06) 0px 6px 6px -3px, rgba(0, 0, 0, 0.06) 0px 12px 12px -6px, rgba(0, 0, 0, 0.06) 0px 24px 24px -12px`, `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.1) 0px 8px 10px -6px`, `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px`, `rgb(255, 255, 255) 0px 0px 0px 0px, rgba(255, 255, 255, 0.2) 0px 0px 0px 1px, rgba(0, 0, 0, 0.035) 0px 2.8px 2.2px 0px, rgba(0, 0, 0, 0.047) 0px 6.7px 5.3px 0px, rgba(0, 0, 0, 0.06) 0px 12.5px 10px 0px, rgba(0, 0, 0, 0.07) 0px 22.3px 17.9px 0px, rgba(0, 0, 0, 0.086) 0px 41.8px 33.4px 0px, rgba(0, 0, 0, 0.12) 0px 100px 80px 0px`, `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.035) 0px 2.8px 2.2px 0px, rgba(0, 0, 0, 0.047) 0px 6.7px 5.3px 0px, rgba(0, 0, 0, 0.06) 0px 12.5px 10px 0px, rgba(0, 0, 0, 0.07) 0px 22.3px 17.9px 0px, rgba(0, 0, 0, 0.086) 0px 41.8px 33.4px 0px, rgba(0, 0, 0, 0.12) 0px 100px 80px 0px`, `rgb(255, 255, 255) 0px 0px 0px 0px, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px`, `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 2px 3px -1px, rgba(25, 28, 33, 0.02) 0px 1px 0px 0px, rgba(25, 28, 33, 0.08) 0px 0px 0px 1px`, and `rgba(0, 0, 0, 0.03) 0px 1px 1px 0px, rgba(0, 0, 0, 0.1) 0px 0px 2px 0px, rgba(0, 0, 0, 0.03) 0px 5px 5px 0px`.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#000000`, `#ffffff`, and `#262626`. Text colors include `#fafafa`, `#f5f5f5`, and `#a3a3a3`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Inter**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `96px 0px`, `0px 0px 24px`, `0px 24px`, `32px`, and `24px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#000000`, `#ffffff`, `#262626`, and `#171717`. Depth is supported by the returned gradients and shadows.

## Components and states

The captured pages include repeated styling on <div>, <a>, <h1>, <span>, <button>, <h3>, <strong>, and <p> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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

- `#000000`
- `#fafafa`
- `#ffffff`
- `#f5f5f5`
- `#a3a3a3`
- `#262626`
- `#404040`
- `#171717`
- `#d4d4d4`
- `#e5e5e5`
- `#a6a6a6`
- `#737373`
- `#333333`
- `#f59e0b`
- `#1e3a8a`
- `#191c21`

## Typography captured from aura.build

- **Inter** — weight 400 · size 16px

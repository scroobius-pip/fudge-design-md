# How ami.dev is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/ami.dev-design)

Last updated: 2026-08-03

## Captured pages

[![Ami](https://pin.fontofweb.com/6958?format=jpg)](https://design.withfudge.com/share/pin-6958)

[Ami](https://design.withfudge.com/share/pin-6958)

[![Ami](https://pin.fontofweb.com/6957?format=jpg)](https://design.withfudge.com/share/pin-6957)

[Ami](https://design.withfudge.com/share/pin-6957)

[![Ami](https://pin.fontofweb.com/6956?format=jpg)](https://design.withfudge.com/share/pin-6956)

[Ami](https://design.withfudge.com/share/pin-6956)

[![Ami](https://pin.fontofweb.com/6955?format=jpg)](https://design.withfudge.com/share/pin-6955)

[Ami](https://design.withfudge.com/share/pin-6955)

## Overview

ami.dev presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#000000`, `#ffffff`, and `#434343`, with typography led by **Inter** and **System**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.surface | `#000000` | surface on page content in the main |
| color.surface | `#ffffff` | surface on page content in the main |
| color.text | `#434343` | text on page content in the main |
| color.surface | `#fefefe` | surface on page content in the main |
| color.border | `#aeaeae` | border on page content in the main |
| color.text | `#555555` | text on page content in the button |
| color.border | `#d3d3d3` | border on page content in the main |
| color.text | `#1a0e1e` | text on page content in the main |
| color.surface | `#f5a3ff` | surface on page content in the main |
| color.shadow | `#eb67ff` | shadow on page content in the main |
| color.text | `#55514e` | text on page content in the main |
| color.text | `#3a3a3a` | text on page content in the button |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **Inter** | 16px | 400 | 26px | -0.09008px | <p> in the main, <div> in the main, <button> in the button, <div> in the button, <ul> in the main, and <li> in the main |
| type.utility-13px | **Inter** | 13px | 400 | 20px | -0.26px | <p> in the main, <li> in the main, and <div> in the main |
| type.body-16px | **Inter** | 16px | 500 | 26px | -0.09008px | <p> in the main and <span> in the main |
| type.utility-12.5px | **Inter** | 12.5px | 500 | 16px | -0.09008px | <span> in the button |
| type.utility-12px | **Inter** | 12px | 400 | 16px | -0.09008px | <a> in the main, <span> in the main, <p> in the main, and <span> in the button |
| type.body-14px | **System** | 14px | 400 | 20px | -0.09008px | <span> in the button |
| type.body-16px | **Inter** | 16px | 400 | 24px | -0.09008px | <a> in the footer |
| type.body-14px | **Inter** | 14px | 500 | 20px | -0.09008px | <a> in the main |
| type.utility-12.5px | **Inter** | 12.5px | 500 | 16px | -0.25px | <div> in the main and <span> in the button |
| type.utility-13px | **Inter** | 13px | 500 | 18px | -0.26px | <span> in the main |
| type.utility-13px | **Inter** | 13px | 500 | 16px | -0.09008px | <span> in the button |
| type.heading-14px | **Inter** | 14px | 600 | 20px | -0.28px | <div> in the main and <span> in the button |
| type.body-14px | **Inter** | 14px | 400 | 20px | -0.09008px | <span> in the main |
| type.utility-12px | **Inter** | 12px | 500 | 16px | -0.09008px | <span> in the main |
| type.utility-13px | **Inter** | 13px | 600 | 20px | -0.26px | <strong> in the main |
| type.utility-12.5px | **Inter** | 12.5px | 500 | 16px | -0.125px | <span> in the button |
| type.utility-13px | **Inter** | 13px | 400 | 18px | -0.26px | <span> in the main |
| type.utility-12px | **System** | 12px | 400 | 20px | -0.26px | <code> in the main |
| type.heading-20px | **Inter** | 20px | 600 | 24px | -0.4px | <span> in the main |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `0px 40px` | padding | page content |
| `24px 0px 0px -600px` | margin | page content |
| `16px 15px 10px` | padding | page content |
| `4px 8px` | padding | page content |
| `32px 0px 0px` | margin | page content |
| `30px 20px 0px` | padding | page content |
| `12px 15px 0px` | padding | page content |
| `8px 11px` | padding | page content |

### Shape and depth

The captured pages use `0px none 7px`, `1px solid 8px`, `1px solid 16px`, `0px none 4px`, `1px 1px 0px solid 11px 11px 0px 0px`, `1px solid 3.35544e+07px`, `0px none 3.35544e+07px`, and `1px solid 12px` border treatments. Recorded gradients include `linear-gradient(rgb(255, 255, 255))`. Recorded shadows include `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgb(235, 103, 255) 0px 2px 0px 0px`, `color(display-p3 0.913 0.913 0.913 / 0.34) 0.3px 0.5px 0.7px 0px, color(display-p3 0.913 0.913 0.913 / 0.34) 0.4px 0.8px 1px 0px rgb(0,0,0)`, and `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.08) 0px 0px 20px 0px`.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#000000`, `#ffffff`, and `#fefefe`. Text colors include `#434343`, `#555555`, and `#1a0e1e`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Inter** and **System**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `0px 40px`, `24px 0px 0px -600px`, `16px 15px 10px`, `4px 8px`, and `32px 0px 0px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#000000`, `#ffffff`, `#fefefe`, and `#f5a3ff`. Depth is supported by the returned gradients and shadows.

## Components and states

The captured pages include repeated styling on <p>, <a>, <span>, <div>, <button>, <strong>, <li>, and <ul> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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
- `#ffffff`
- `#434343`
- `#fefefe`
- `#aeaeae`
- `#555555`
- `#d3d3d3`
- `#1a0e1e`
- `#f5a3ff`
- `#eb67ff`
- `#55514e`
- `#3a3a3a`
- `#d6d6d6`
- `#1a1a1a`
- `#f0f0f0`
- `#828282`

## Typography captured from ami.dev

- **Inter** — weight 400 · size 16px
- **System** — weight 400 · size 14px

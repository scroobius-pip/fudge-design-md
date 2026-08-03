# How era.app is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/era.app-design)

Last updated: 2026-08-03

## Captured pages

[![Referrals — Era](https://pin.fontofweb.com/9760?format=jpg)](https://design.withfudge.com/share/pin-9760)

[Referrals — Era](https://design.withfudge.com/share/pin-9760)

[![Support — Era](https://pin.fontofweb.com/9759?format=jpg)](https://design.withfudge.com/share/pin-9759)

[Support — Era](https://design.withfudge.com/share/pin-9759)

[![MCP setup — Era](https://pin.fontofweb.com/9758?format=jpg)](https://design.withfudge.com/share/pin-9758)

[MCP setup — Era](https://design.withfudge.com/share/pin-9758)

[![Transactions — Era](https://pin.fontofweb.com/9757?format=jpg)](https://design.withfudge.com/share/pin-9757)

[Transactions — Era](https://design.withfudge.com/share/pin-9757)

[![Get started — Era](https://pin.fontofweb.com/9756?format=jpg)](https://design.withfudge.com/share/pin-9756)

[Get started — Era](https://design.withfudge.com/share/pin-9756)

[![Get started — Era](https://pin.fontofweb.com/9755?format=jpg)](https://design.withfudge.com/share/pin-9755)

[Get started — Era](https://design.withfudge.com/share/pin-9755)

[![Sign in — Era](https://pin.fontofweb.com/9754?format=jpg)](https://design.withfudge.com/share/pin-9754)

[Sign in — Era](https://design.withfudge.com/share/pin-9754)

[![Pricing — Era](https://pin.fontofweb.com/9753?format=jpg)](https://design.withfudge.com/share/pin-9753)

[Pricing — Era](https://design.withfudge.com/share/pin-9753)

## Overview

era.app presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#f8faf9`, `#0f1720`, and `#191a17`, with typography led by **Saans**, **Applesystem**, and **Times**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#f8faf9` | text on page content in the header |
| color.surface | `#0f1720` | surface on page content |
| color.text | `#191a17` | text on page content in the main |
| color.text | `#f3f3f1` | text on page content in the main |
| color.surface | `#d590a0` | surface on page content in the main |
| color.text | `#000000` | text on page content |
| color.text | `#ffffff` | text on page content |
| color.surface | `#c0d5f4` | surface on page content in the main |
| color.surface | `#323330` | surface on page content in the main |
| color.border | `#bbded8` | border on page content in the main |
| color.border | `#b5aeea` | border on page content in the main |
| color.border | `#d4e5ce` | border on page content in the main |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **Saans** | 16px | 380 | 24px | normal | <header> in the header, <div>, <body>, <main> in the main, <div> in the header, <div> in the main, <span> in the main, <label> in the main, <a> in the main, <svg>, <a> in the nav, <div> in the nav, <nav> in the nav, <span> in the button, <button> in the button, <div> in the button, <svg> in the button, <li> in the main, <ol> in the main, <input>, <section> in the main, <article> in the main, <ul> in the main, <span> in the header, <footer> in the footer, <div> in the footer, and <svg> in the main |
| type.body-14px | **Applesystem** | 14px | 400 | normal | normal | <div> |
| type.body-16px | **Times** | 16px | 400 | normal | normal | <html> |
| type.body-25px | **Saans** | 25px | 500 | 27.5px | -0.5px | <h1> in the header, <h2> in the main, and <h2> in the button |
| type.body-16px | **Saans** | 16px | 380 | 22.4px | normal | <p> in the main and <span> in the main |
| type.display-56px | **Saans** | 56px | 600 | 64.4px | -1.12px | <h1> in the main |
| type.body-15px | **Saans** | 15px | 500 | 22.5px | normal | <button> in the button, <a> in the main, <span> in the main, <div> in the main, <span> in the button, and <div> in the button |
| type.body-20px | **Saans** | 20px | 400 | 26px | normal | <p> in the main |
| type.utility-13px | **Saans** | 13px | 400 | 18.2px | normal | <p> in the main, <p> in the footer, and <a> in the footer |
| type.body-16px | **Saans** | 16px | 400 | 22.4px | normal | <p> in the main |
| type.body-15px | **Saans** | 15px | 500 | 21px | -0.15px | <p> in the main |
| type.display-35px | **Saans** | 35px | 600 | 40.25px | -0.7px | <h2> in the main |
| type.utility-13px | **Saans** | 13px | 380 | 15.6px | normal | <span> in the nav and <p> in the main |
| type.heading-30px | **Saans** | 30px | 600 | 37.5px | -0.6px | <h2> in the main |
| type.display-60px | **Saans** | 60px | 600 | 69px | -1.2px | <h1> in the main |
| type.heading-15px | **Saans** | 15px | 600 | 18px | -0.15px | <span> in the main, <span> in the footer, and <a> in the header |
| type.body-20px | **Saans** | 20px | 380 | 30px | normal | <svg> in the nav |
| type.body-20px | **Saans** | 20px | 380 | 26px | normal | <p> in the main |
| type.body-15px | **Saans** | 15px | 400 | 21px | normal | <p> in the main |
| type.heading-20px | **Saans** | 20px | 670 | 24px | normal | <a> in the main, <p> in the main, and <span> in the main |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `24px` | padding-left | page content |
| `24px` | padding-right | page content |
| `24px` | padding | page content |
| `24px` | padding-top | page content |
| `24px` | padding-bottom | page content |
| `16px` | gap | page content |
| `16px` | row-gap | page content |
| `16px` | column-gap | page content |

### Shape and depth

The captured pages use `0px none 12px`, `0px none 8px`, `1px solid 8px`, `0px 0px 1px none none solid 0px`, `0px none 4px`, `1px 0px 0px solid none none 0px`, `1px solid 8px`, and `1px 0px solid none 0px` border treatments. Recorded gradients include `linear-gradient(135deg in oklch, rgb(208, 203, 239) 0%, rgb(228, 193, 203) 100%)`, `linear-gradient(rgba(243, 243, 241, 0) 20%, rgb(243, 243, 241) 100%)`, and `linear-gradient(90deg, rgb(208, 203, 239) 0%, rgb(236, 218, 225) 100%)`. Recorded shadows include `rgba(15, 23, 32, 0.1) 0px 4px 6px -1px, rgba(15, 23, 32, 0.1) 0px 2px 4px -2px`, `rgba(15, 23, 32, 0.1) 0px 10px 15px -3px, rgba(15, 23, 32, 0.1) 0px 4px 6px -4px`, and `rgba(15, 23, 32, 0.05) 0px 1px 2px 0px`.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#0f1720`, `#d590a0`, and `#c0d5f4`. Text colors include `#f8faf9`, `#191a17`, and `#f3f3f1`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Saans**, **Applesystem**, and **Times**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `24px`, `24px`, `24px`, `24px`, and `24px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#0f1720`, `#d590a0`, `#c0d5f4`, and `#323330`. Depth is supported by the returned gradients and shadows.

## Components and states

The captured pages include repeated styling on <div>, <html>, <header>, <body>, <main>, <h1>, <span>, and <h2> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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

- `#f8faf9`
- `#0f1720`
- `#191a17`
- `#f3f3f1`
- `#d590a0`
- `#000000`
- `#ffffff`
- `#c0d5f4`
- `#323330`
- `#bbded8`
- `#b5aeea`
- `#d4e5ce`
- `#3d3d3d`
- `#d6ece7`
- `#f7f7f8`
- `#d9d9da`

## Typography captured from era.app

- **Saans** — weight 380 · size 16px
- **Applesystem** — weight 400 · size 14px
- **Times** — weight 400 · size 16px

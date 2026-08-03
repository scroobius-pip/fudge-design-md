# How figma.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/figma.com-design)

Last updated: 2026-08-03

## Captured pages

[![Figma Make & Sites Gallery | Community AI Projects](https://pin.fontofweb.com/8790?format=jpg)](https://design.withfudge.com/share/pin-8790)

[Figma Make & Sites Gallery | Community AI Projects](https://design.withfudge.com/share/pin-8790)

[![Figma Make & Sites Gallery | Community AI Projects](https://pin.fontofweb.com/8027?format=jpg)](https://design.withfudge.com/share/pin-8027)

[Figma Make & Sites Gallery | Community AI Projects](https://design.withfudge.com/share/pin-8027)

[![What Is Human-Computer Interaction? | Figma](https://pin.fontofweb.com/7973?format=jpg)](https://design.withfudge.com/share/pin-7973)

[What Is Human-Computer Interaction? | Figma](https://design.withfudge.com/share/pin-7973)

[![What is skeuomorphism? | Figma](https://pin.fontofweb.com/7964?format=jpg)](https://design.withfudge.com/share/pin-7964)

[What is skeuomorphism? | Figma](https://design.withfudge.com/share/pin-7964)

[![24 Best Fonts for Websites in 2026 | Figma](https://pin.fontofweb.com/7963?format=jpg)](https://design.withfudge.com/share/pin-7963)

[24 Best Fonts for Websites in 2026 | Figma](https://design.withfudge.com/share/pin-7963)

[![Inter Font | Figma](https://pin.fontofweb.com/7962?format=jpg)](https://design.withfudge.com/share/pin-7962)

[Inter Font | Figma](https://design.withfudge.com/share/pin-7962)

[![Inter Font | Figma](https://pin.fontofweb.com/7961?format=jpg)](https://design.withfudge.com/share/pin-7961)

[Inter Font | Figma](https://design.withfudge.com/share/pin-7961)

[![Inter Font | Figma](https://pin.fontofweb.com/7960?format=jpg)](https://design.withfudge.com/share/pin-7960)

[Inter Font | Figma](https://design.withfudge.com/share/pin-7960)

## Overview

figma.com presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#000000`, `#ffffff`, and `#f5f5f5`, with typography led by **Figma Vf** and **Figma Mono**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#000000` | text on page content in the header |
| color.surface | `#ffffff` | surface on page content in the header |
| color.surface | `#f5f5f5` | surface on page content in the button |
| color.surface | `#e4ff97` | surface on page content in the main |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **Figma Vf** | 16px | 400 | 23.2px | normal | <div> in the main, <button> in the button, <div> in the button, and <a> in the main |
| type.body-18px | **Figma Vf** | 18px | 330 | 25.2px | normal | <div> in the main, <a> in the main, <li> in the main, <ul> in the main, and <p> in the main |
| type.display-96px | **Figma Vf** | 96px | 400 | 91.2px | -1.92px | <h1> in the main |
| type.body-20px | **Figma Vf** | 20px | 330 | 28px | normal | <ul> in the nav, <li> in the nav, <ul> in the main, <p> in the main, <div> in the main, <li> in the main, and <button> in the button |
| type.body-16px | **Figma Vf** | 16px | 400 | 23.2px | -0.14px | <div> in the header |
| type.display-64px | **Figma Vf** | 64px | 400 | 70.4px | -0.96px | <a> in the main and <h2> in the main |
| type.display-40px | **Figma Vf** | 40px | 360 | 52px | -0.4px | <p> in the main and <button> in the button |
| type.body-26px | **Figma Vf** | 26px | 340 | 35.1px | -0.26px | <p> in the button and <p> in the main |
| type.display-56px | **Figma Vf** | 56px | 400 | 61.6px | -0.84px | <span> in the main and <a> in the main |
| type.display-48px | **Figma Vf** | 48px | 500 | 69.6px | normal | <div> in the main |
| type.display-48px | **Figma Vf** | 48px | 600 | 69.6px | normal | <div> in the main |
| type.display-48px | **Figma Vf** | 48px | 700 | 69.6px | normal | <div> in the main |
| type.display-48px | **Figma Vf** | 48px | 100 | 69.6px | normal | <div> in the main |
| type.display-48px | **Figma Vf** | 48px | 200 | 69.6px | normal | <div> in the main |
| type.display-48px | **Figma Vf** | 48px | 800 | 69.6px | normal | <div> in the main |
| type.body-16px | **Figma Mono** | 16px | 400 | 16px | 0.64px | <p> in the main and <a> in the main |
| type.body-20px | **Figma Vf** | 20px | 400 | 28px | normal | <div> in the main |
| type.body-18px | **Figma Mono** | 18px | 400 | 23.4px | 0.54px | <h2> in the main, <p> in the button, and <p> in the main |
| type.body-18px | **Figma Vf** | 18px | 450 | 25.2px | -0.09px | <h2> in the main |
| type.body-20px | **Figma Vf** | 20px | 330 | 28px | -0.14px | <span> in the button, <button> in the button, <a> in the header, <span> in the header, <ul> in the header, <span> in the nav, and <a> in the nav |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `0px 258px` | margin | page content |
| `24px` | padding | page content |
| `40px 0px 48px` | padding | page content |
| `16px 0px` | padding | page content |
| `32px 0px` | padding | page content |
| `0px 192.5px` | margin | page content |
| `0px 0px 64px` | padding | page content |
| `24px 0px` | padding | page content |

### Shape and depth

The captured pages use `1px solid 24px`, `1px 0px 0px solid none none 0px`, `1px solid 8px`, `0px none 8px`, `0px none 4px`, `0px none 50%`, and `1px solid 8px` border treatments. Recorded shadows include `rgb(0, 0, 0) 0px 0px 0px 1px inset` and `rgba(0, 0, 0, 0.08) 0px 1px 0px 0px`.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#ffffff`, `#f5f5f5`, and `#e4ff97`. Text colors include `#000000`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Figma Vf** and **Figma Mono**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `0px 258px`, `24px`, `40px 0px 48px`, `16px 0px`, and `32px 0px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#ffffff`, `#f5f5f5`, and `#e4ff97`. Depth is supported by the returned shadows.

## Components and states

The captured pages include repeated styling on <div>, <span>, <a>, <button>, <li>, <ul>, <h2>, and <p> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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
- `#f5f5f5`
- `#e4ff97`

## Typography captured from figma.com

- **Figma Vf** — weight 400 · size 16px
- **Figma Mono** — weight 400 · size 12px

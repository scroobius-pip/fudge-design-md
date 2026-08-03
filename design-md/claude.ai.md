# How claude.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/claude.ai-design)

Last updated: 2026-08-03

## Captured pages

[![Sign in - Claude](https://pin.fontofweb.com/9549?format=jpg)](https://design.withfudge.com/share/pin-9549)

[Sign in - Claude](https://design.withfudge.com/share/pin-9549)

[![Sign in - Claude](https://pin.fontofweb.com/9266?format=jpg)](https://design.withfudge.com/share/pin-9266)

[Sign in - Claude](https://design.withfudge.com/share/pin-9266)

[![Axya Design System](https://pin.fontofweb.com/8942?format=jpg)](https://design.withfudge.com/share/pin-8942)

[Axya Design System](https://design.withfudge.com/share/pin-8942)

[![Axya Design System](https://pin.fontofweb.com/8941?format=jpg)](https://design.withfudge.com/share/pin-8941)

[Axya Design System](https://design.withfudge.com/share/pin-8941)

[![Axya Design System](https://pin.fontofweb.com/8940?format=jpg)](https://design.withfudge.com/share/pin-8940)

[Axya Design System](https://design.withfudge.com/share/pin-8940)

[![Axya Design System](https://pin.fontofweb.com/8939?format=jpg)](https://design.withfudge.com/share/pin-8939)

[Axya Design System](https://design.withfudge.com/share/pin-8939)

[![Axya Design System](https://pin.fontofweb.com/8938?format=jpg)](https://design.withfudge.com/share/pin-8938)

[Axya Design System](https://design.withfudge.com/share/pin-8938)

[![Axya Design System](https://pin.fontofweb.com/8937?format=jpg)](https://design.withfudge.com/share/pin-8937)

[Axya Design System](https://design.withfudge.com/share/pin-8937)

## Overview

claude.ai presents a mixed light and dark surface treatment in the captured pages. The system is anchored by `#faf9f5`, `#000000`, and `#ffffff`, with typography led by **Anthropic Sans**, **Applesystem**, **Anthropic Serif**, **Inter**, **Open Dyslexic**, **Jet Brains Mono**, **Arial**, and **System**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#faf9f5` | text on page content |
| color.text | `#000000` | text on page content |
| color.text | `#ffffff` | text on page content |
| color.text | `#f8f8f6` | text on page content |
| color.text | `#111111` | text on page content |
| color.surface | `#141413` | surface on page content |
| color.surface | `#1f1f1e` | surface on page content |
| color.surface | `#1f1e1d` | surface on page content in the main |
| color.surface | `#0f0c08` | surface on page content |
| color.surface | `#262624` | surface on page content in the main |
| color.border | `#dedcd1` | border on page content in the main |
| color.text | `#c2c0b6` | text on page content in the main |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-14px | **Anthropic Sans** | 14px | 400 | 21px | normal | <div>, <svg>, <a>, <div> in the main, <main> in the main, and <form> in the main |
| type.body-16px | **Anthropic Sans** | 16px | 400 | 24px | normal | <body>, <div>, <div> in the main, <div> in the footer, <p>, <ul>, <li>, <div> in the nav, <a> in the main, <button> in the button, <div> in the button, and <div> in the header |
| type.body-16px | **Applesystem** | 16px | 400 | normal | normal | <div> |
| type.utility-13px | **Applesystem** | 13px | 400 | 20.8px | normal | <li>, <p>, <span>, and <div> |
| type.utility-12px | **Anthropic Sans** | 12px | 400 | 16px | normal | <div> in the main, <p> in the main, <div>, <h3> in the footer, <li> in the footer, <a> in the footer, <button> in the button, and <span> |
| type.body-16px | **Anthropic Sans** | 16px | 400 | 22.4px | normal | <input> in the main, <p>, <li>, <p> in the main, <div> in the main, and <div> |
| type.body-14px | **Anthropic Sans** | 14px | 400 | 19.6px | normal | <p> in the main, <div> in the main, <a> in the main, <p>, <button> in the button, <div>, and <span> |
| type.utility-12px | **Applesystem** | 12px | 500 | normal | normal | <div> and <span> |
| type.utility-12px | **Applesystem** | 12px | 400 | normal | normal | <div> |
| type.body-16px | **Anthropic Sans** | 16px | 460 | 24px | normal | <button> in the button |
| type.display-56px | **Anthropic Serif** | 56px | 290 | 67.2px | normal | <h2> in the main |
| type.body-14px | **Anthropic Sans** | 14px | 400 | 20px | normal | <p> in the main, <span>, <div>, <div> in the main, <span> in the main, and <button> in the button |
| type.utility-13px | **Applesystem** | 13px | 400 | normal | normal | <div> |
| type.utility-12px | **Anthropic Sans** | 12px | 400 | 16.8px | normal | <div> in the main |
| type.display-60px | **Anthropic Serif** | 60px | 400 | 60px | normal | <h1> |
| type.utility-10px | **Applesystem** | 10px | 400 | normal | normal | <div> |
| type.display-36px | **Anthropic Serif** | 36px | 500 | 43.2px | normal | <h3> |
| type.display-50px | **Anthropic Serif** | 50px | 500 | 60px | normal | <h2> |
| type.utility-9.6px | **Jet Brains Mono** | 9.6px | 400 | 12.8px | normal | <div> in the main |
| type.utility-11px | **Applesystem** | 11px | 500 | 15.95px | normal | <div> |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `0px 0px 192px` | margin | page content |
| `192px` | margin-bottom | page content |
| `0px 308px` | margin | page content |
| `308px` | margin-right | page content |
| `308px` | margin-left | page content |
| `16px` | gap | page content |
| `16px` | row-gap | page content |
| `16px` | column-gap | page content |

### Shape and depth

The captured pages use `0px none 16px`, `0.5px solid 12px`, `0.5px solid 32px`, `1px solid 24px`, `0px none 8px`, `1px solid 24px`, `1px solid 8px`, and `1px solid 32px` border treatments. Recorded gradients include `linear-gradient(rgb(255, 255, 255), rgb(250, 249, 245))`, `linear-gradient(rgb(38, 38, 36)`, `linear-gradient(to right, rgb(20, 20, 19) 1px, rgba(0, 0, 0, 0) 1px)`, `linear-gradient(rgba(44, 132, 219, 0.01), rgba(44, 132, 219, 0.02))`, `linear-gradient(rgb(242, 240, 234) 0%, rgb(236, 234, 228) 100%)`, `linear-gradient(95.4deg, rgb(217, 119, 87) 0%, rgb(217, 119, 87) 17.7273%, color(srgb 0.910554 0.681123 0.604646) 27.7273%, color(srgb 0.955277 0.840561 0.802323) 37.7273%, color(srgb 0.910554 0.681123 0.604646) 47.7273%, rgb(217, 119, 87) 57.7273%, rgb(217, 119, 87) 100%)`, `linear-gradient(135deg, rgb(253, 232, 224) 0%, rgb(245, 208, 192) 100%)`, and `linear-gradient(rgb(250, 248, 244) 0%, rgb(255, 255, 255) 60%)`. Recorded shadows include `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.04) 0px 4px 20px 0px`, `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.016) 0px 4px 24px 0px, rgba(0, 0, 0, 0.016) 0px 4px 32px 0px, rgba(0, 0, 0, 0.01) 0px 2px 64px 0px, rgba(0, 0, 0, 0.01) 0px 16px 32px 0px`, `rgba(0, 0, 0, 0.04) 0px 1px 2px 0px`, `rgba(20, 20, 19, 0.04) 0px 1px 2px 0px`, `rgba(180, 90, 30, 0.35) 0px 1px 3px 0px, rgba(180, 90, 30, 0.2) 0px 2px 6px 0px, rgba(255, 255, 255, 0.15) 0px 1px 0px 0px inset`, `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.016) 0px 4px 24px 0px, rgba(0, 0, 0, 0.016) 0px 4px 32px 0px, rgba(0, 0, 0, 0.01) 0px 2px 64px 0px, rgba(0, 0, 0, 0.01) 0px 16px 32px 0px`, `rgba(20, 20, 19, 0.06) 0px 1px 3px 0px, rgba(20, 20, 19, 0.04) 0px 1px 2px 0px`, and `rgba(15, 12, 8, 0.25) 0px 1px 3px 0px, rgba(15, 12, 8, 0.15) 0px 2px 6px 0px, rgba(255, 255, 255, 0.08) 0px 1px 0px 0px inset`.

## Colors

The visual system is mixed light and dark surface treatment. Surface colors include `#141413`, `#1f1f1e`, and `#1f1e1d`. Text colors include `#faf9f5`, `#000000`, and `#ffffff`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Anthropic Sans**, **Applesystem**, **Anthropic Serif**, **Jet Brains Mono**, and **Open Dyslexic**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `0px 0px 192px`, `192px`, `0px 308px`, `308px`, and `308px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is mixed light and dark surface treatment. Surface treatment centers on `#141413`, `#1f1f1e`, `#1f1e1d`, and `#0f0c08`. Depth is supported by the returned gradients and shadows.

## Components and states

The captured pages include repeated styling on <div>, <body>, <svg>, <a>, <main>, <h2>, <h3>, and <span> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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

- `#faf9f5`
- `#000000`
- `#ffffff`
- `#f8f8f6`
- `#111111`
- `#141413`
- `#1f1f1e`
- `#1f1e1d`
- `#0f0c08`
- `#262624`
- `#dedcd1`
- `#c2c0b6`
- `#30302e`
- `#9c9a92`
- `#74abe2`
- `#f0eee6`

## Typography captured from claude.ai

- **Anthropic Sans** — weight 400 · size 16px
- **Applesystem** — weight 400 · size 14px
- **Anthropic Serif** — weight 290 · size 56px
- **Inter** — weight 500 · size 10px
- **Open Dyslexic** — weight 400 · size 24px
- **Jet Brains Mono** — weight 400 · size 9.6px
- **Arial** — weight 400 · size 13.3333px
- **System** — weight 400 · size 24px

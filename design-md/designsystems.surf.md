# How designsystems.surf is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/designsystems.surf-design)

Last updated: 2026-08-03

## Captured pages

[![Accordion UI Component in Design Systems](https://pin.fontofweb.com/8109?format=jpg)](https://design.withfudge.com/share/pin-8109)

[Accordion UI Component in Design Systems](https://design.withfudge.com/share/pin-8109)

[![AI DS Starter Stack](https://pin.fontofweb.com/8108?format=jpg)](https://design.withfudge.com/share/pin-8108)

[AI DS Starter Stack](https://design.withfudge.com/share/pin-8108)

[![AI DS Starter Stack](https://pin.fontofweb.com/8107?format=jpg)](https://design.withfudge.com/share/pin-8107)

[AI DS Starter Stack](https://design.withfudge.com/share/pin-8107)

[![AI DS Starter Stack](https://pin.fontofweb.com/8106?format=jpg)](https://design.withfudge.com/share/pin-8106)

[AI DS Starter Stack](https://design.withfudge.com/share/pin-8106)

[![Apple HIG (Human Interface Guidelines) Design System](https://pin.fontofweb.com/8105?format=jpg)](https://design.withfudge.com/share/pin-8105)

[Apple HIG (Human Interface Guidelines) Design System](https://design.withfudge.com/share/pin-8105)

[![Typography Foundation Operating Kit](https://pin.fontofweb.com/8104?format=jpg)](https://design.withfudge.com/share/pin-8104)

[Typography Foundation Operating Kit](https://design.withfudge.com/share/pin-8104)

[![Typography Foundation Operating Kit](https://pin.fontofweb.com/8103?format=jpg)](https://design.withfudge.com/share/pin-8103)

[Typography Foundation Operating Kit](https://design.withfudge.com/share/pin-8103)

[![Typography Foundation Operating Kit](https://pin.fontofweb.com/8102?format=jpg)](https://design.withfudge.com/share/pin-8102)

[Typography Foundation Operating Kit](https://design.withfudge.com/share/pin-8102)

## Overview

designsystems.surf presents a mixed light and dark surface treatment in the captured pages. The system is anchored by `#000000`, `#ffffff`, and `#f5f5f5`, with typography led by **System**, **Inter**, and **Ibm Plex Mono**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.surface | `#000000` | surface on page content |
| color.surface | `#ffffff` | surface on page content |
| color.surface | `#f5f5f5` | surface on page content |
| color.text | `#0000ee` | text on page content |
| color.surface | `#fafafa` | surface on page content |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.utility-12px | **System** | 12px | 400 | normal | normal | <a>, <div>, <button> in the button, <div> in the footer, <div> in the header, <ul>, and <a> in the header |
| type.body-18px | **Inter** | 18px | 400 | 29.7px | -0.18px | <p> |
| type.body-16px | **Inter** | 16px | 400 | 24px | -0.32px | <p>, <p> in the header, and <a> |
| type.body-14px | **Inter** | 14px | 400 | 21px | normal | <p> in the button, <p>, <p> in the footer, <span> in the button, <a> in the footer, <p> in the header, and <a> |
| type.body-16px | **Inter** | 16px | 500 | 24px | -0.32px | <p>, <p> in the button, and <p> in the header |
| type.body-20px | **Inter** | 20px | 500 | 30px | -0.6px | <p> |
| type.display-32px | **Inter** | 32px | 600 | 38.4px | -0.64px | <h2> and <h2> in the header |
| type.body-20px | **Inter** | 20px | 400 | 30px | -0.6px | <p> |
| type.display-56px | **Inter** | 56px | 600 | 61.6px | -1.68px | <h1> |
| type.utility-12px | **Ibm Plex Mono** | 12px | 400 | 18px | normal | <p> and <p> in the header |
| type.display-40px | **Inter** | 40px | 600 | 48px | -1.2px | <h1> and <div> |
| type.display-32px | **Inter** | 32px | 600 | 35.2px | -0.64px | <h1> in the header |
| type.heading-24px | **Inter** | 24px | 600 | 28.8px | -0.96px | <h2> and <h2> in the header |
| type.utility-12px | **Inter** | 12px | 400 | 18px | normal | <p> in the header |
| type.body-14px | **Inter** | 14px | 500 | 21px | normal | <p> |
| type.display-32px | **Inter** | 32px | 400 | 48px | -0.32px | <p> |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `124px 0px 0px` | padding | page content |
| `100px 0px 0px` | padding | page content |
| `16px` | padding | page content |
| `16px 16px 16px 20px` | padding | page content |
| `124px 22px 32px` | padding | page content |
| `16px 16px 16px 0px` | padding | page content |
| `48px 32px` | padding | page content |
| `24px` | padding | page content |

### Shape and depth

The captured pages use `0px none 16px`, `0px none 100px`, `0px none 24px`, `0px none 12px`, `0px none 32px`, `0px none 10px`, `0px none 8px`, and `0px none 200px` border treatments. Recorded gradients include `radial-gradient(50% 50%, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 100%)` and `radial-gradient(75% 150% at 100% 114.2%, rgb(255, 183, 15) 0%, rgb(255, 84, 0) 100%)`.

## Colors

The visual system is mixed light and dark surface treatment. Surface colors include `#000000`, `#ffffff`, and `#f5f5f5`. Text colors include `#0000ee`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **System**, **Inter**, and **Ibm Plex Mono**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `124px 0px 0px`, `100px 0px 0px`, `16px`, `16px 16px 16px 20px`, and `124px 22px 32px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is mixed light and dark surface treatment. Surface treatment centers on `#000000`, `#ffffff`, `#f5f5f5`, and `#fafafa`. Depth is supported by the returned gradients.

## Components and states

The captured pages include repeated styling on <a>, <div>, <button>, <p>, <h1>, <h2>, <span>, and <ul> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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

- `#000000`
- `#ffffff`
- `#f5f5f5`
- `#0000ee`
- `#fafafa`

## Typography captured from designsystems.surf

- **System** — weight 400 · size 12px
- **Inter** — weight 400 · size 14px
- **Ibm Plex Mono** — weight 400 · size 12px

# How api-dashboard.search.brave.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/api-dashboard.search.brave.com-design)

Last updated: 2026-08-03

## Captured pages

[![Brave Search - API](https://pin.fontofweb.com/9446?format=jpg)](https://design.withfudge.com/share/pin-9446)

[Brave Search - API](https://design.withfudge.com/share/pin-9446)

[![Brave Search - API](https://pin.fontofweb.com/9445?format=jpg)](https://design.withfudge.com/share/pin-9445)

[Brave Search - API](https://design.withfudge.com/share/pin-9445)

[![Brave Search - API](https://pin.fontofweb.com/9444?format=jpg)](https://design.withfudge.com/share/pin-9444)

[Brave Search - API](https://design.withfudge.com/share/pin-9444)

[![Brave Search - API](https://pin.fontofweb.com/9443?format=jpg)](https://design.withfudge.com/share/pin-9443)

[Brave Search - API](https://design.withfudge.com/share/pin-9443)

[![Brave Search - API](https://pin.fontofweb.com/9442?format=jpg)](https://design.withfudge.com/share/pin-9442)

[Brave Search - API](https://design.withfudge.com/share/pin-9442)

## Overview

api-dashboard.search.brave.com presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#e4e4e5`, `#141415`, and `#1c1c1d`, with typography led by **Inter** and **Applesystem**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#e4e4e5` | text on page content in the main |
| color.surface | `#141415` | surface on page content |
| color.surface | `#1c1c1d` | surface on page content in the main |
| color.text | `#909093` | text on page content in the main |
| color.border | `#303032` | border on page content in the main |
| color.surface | `#fafafb` | surface on page content |
| color.border | `#464649` | border on page content in the main |
| color.surface | `#252527` | surface on page content in the main |
| color.text | `#c9c9ca` | text on page content in the nav |
| color.text | `#b2c3ff` | text on page content in the button |
| color.surface | `#1f1f23` | surface on page content in the main |
| color.border | `#f2f2f3` | border on page content in the main |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-14px | **Inter** | 14px | 400 | 22px | normal | <div> in the main, <main> in the main, <div>, <body>, <header> in the header, <a> in the header, <img> in the header, <div> in the nav, <nav> in the nav, <aside> in the aside, <a> in the nav, <li> in the nav, <ul> in the nav, <form> in the aside, <div> in the aside, <div> in the header, <p> in the main, <ul> in the main, <form> in the main, and <svg> in the main |
| type.body-20px | **Inter** | 20px | 400 | normal | normal | <html> |
| type.utility-12px | **Inter** | 12px | 600 | 18px | normal | <label> in the main, <div> in the main, and <button> in the button |
| type.body-16px | **Inter** | 16px | 400 | 24px | normal | <p> in the main, <div> in the main, and <li> in the main |
| type.body-14px | **Applesystem** | 14px | 400 | normal | normal | <div> |
| type.heading-14px | **Inter** | 14px | 600 | 22px | normal | <span> in the main, <h5> in the nav, <button> in the button, and <div> in the main |
| type.body-13.3333px | **Inter** | 13.3333px | 400 | normal | normal | <span> in the button and <button> in the button |
| type.display-32px | **Inter** | 32px | 700 | 42px | -0.5px | <span> in the button and <button> in the button |
| type.heading-16px | **Inter** | 16px | 600 | 26px | normal | <div> in the main |
| type.utility-12px | **Inter** | 12px | 600 | 20px | 0.36px | <button> in the button and <a> in the main |
| type.body-14px | **Inter** | 14px | 400 | 24px | normal | <select> in the header |
| type.heading-22px | **Inter** | 22px | 600 | 28px | -0.5px | <h2> in the main and <h3> in the main |
| type.heading-28px | **Inter** | 28px | 600 | 36px | -0.5px | <h2> in the main |
| type.utility-13px | **Inter** | 13px | 600 | 20px | 0.39px | <button> in the button |
| type.utility-12px | **Inter** | 12px | 400 | 18px | normal | <div> in the main |
| type.utility-12px | **Inter** | 12px | 500 | 22px | 0.12px | <label> in the header |
| type.heading-14px | **Inter** | 14px | 600 | 22px | 0.28px | <a> in the main |
| type.heading-16px | **Inter** | 16px | 600 | 24px | -0.2px | <a> in the main |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `8px` | padding-bottom | page content |
| `24px` | padding-left | page content |
| `24px` | padding-right | page content |
| `8px` | padding-right | page content |
| `8px` | padding-left | page content |
| `0px 8px 8px` | padding | page content |
| `24px` | column-gap | page content |
| `24px` | gap | page content |

### Shape and depth

The captured pages use `2px 0px solid none 16px`, `1px solid 24px`, `1px 0px 0px solid none none 0px`, `1px solid 16px`, `0px none 1000px`, `0px 0px 1px none none solid 0px`, `2px solid 12px`, and `1px dashed 24px` border treatments.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#141415`, `#1c1c1d`, and `#fafafb`. Text colors include `#e4e4e5`, `#909093`, and `#c9c9ca`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Inter** and **Applesystem**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `8px`, `24px`, `24px`, `8px`, and `8px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#141415`, `#1c1c1d`, `#fafafb`, and `#252527`. No structured gradient or shadow treatment is established.

## Components and states

The captured pages include repeated styling on <div>, <main>, <body>, <html>, <h2>, <label>, <button>, and <span> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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

- `#e4e4e5`
- `#141415`
- `#1c1c1d`
- `#909093`
- `#303032`
- `#fafafb`
- `#464649`
- `#252527`
- `#c9c9ca`
- `#b2c3ff`
- `#1f1f23`
- `#f2f2f3`
- `#000000`
- `#ffffff`
- `#212848`
- `#7c91ff`

## Typography captured from api-dashboard.search.brave.com

- **Inter** — weight 400 · size 14px
- **Applesystem** — weight 400 · size 14px

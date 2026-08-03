# How developer.chrome.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/developer.chrome.com-design)

Last updated: 2026-08-03

## Captured pages

[![Documentation  |  Docs  |  Chrome for Developers](https://pin.fontofweb.com/6427?format=jpg)](https://design.withfudge.com/share/pin-6427)

[Documentation  |  Docs  |  Chrome for Developers](https://design.withfudge.com/share/pin-6427)

[![Chrome for Developers](https://pin.fontofweb.com/6426?format=jpg)](https://design.withfudge.com/share/pin-6426)

[Chrome for Developers](https://design.withfudge.com/share/pin-6426)

[![Chrome for Developers](https://pin.fontofweb.com/6425?format=jpg)](https://design.withfudge.com/share/pin-6425)

[Chrome for Developers](https://design.withfudge.com/share/pin-6425)

[![Chrome for Developers](https://pin.fontofweb.com/6424?format=jpg)](https://design.withfudge.com/share/pin-6424)

[Chrome for Developers](https://design.withfudge.com/share/pin-6424)

[![404  |  Page Not Found  |  Chrome for Developers](https://pin.fontofweb.com/5809?format=jpg)](https://design.withfudge.com/share/pin-5809)

[404  |  Page Not Found  |  Chrome for Developers](https://design.withfudge.com/share/pin-5809)

## Overview

developer.chrome.com presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#f8f9fa`, `#000000`, and `#202124`, with typography led by **Google Sans 18 Pt**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#f8f9fa` | text on page content in the header |
| color.shadow | `#000000` | shadow on page content in the nav |
| color.surface | `#202124` | surface on page content in the header |
| color.text | `#70b1ff` | text on page content in the main |
| color.text | `#afb2b6` | text on page content in the nav |
| color.shadow | `#dedede` | shadow on page content in the nav |
| color.border | `#4285f4` | border on page content in the main |
| color.text | `#1b3c72` | text on page content in the main |
| color.surface | `#cad1dd` | surface on page content in the main |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **Google Sans 18 Pt** | 16px | 400 | 24px | normal | <div> in the header, <div> in the main, and <ul> in the main |
| type.utility-13px | **Google Sans 18 Pt** | 13px | 400 | 24px | normal | <div> in the nav, <ul> in the nav, and <li> in the nav |
| type.body-14px | **Google Sans 18 Pt** | 14px | 400 | 16px | normal | <a> in the nav, <li> in the nav, and <ul> in the nav |
| type.display-48px | **Google Sans 18 Pt** | 48px | 700 | 60px | normal | <h2> in the header |
| type.display-96px | **Google Sans 18 Pt** | 96px | 700 | 105.6px | normal | <h2> in the header and <span> in the header |
| type.utility-13px | **Google Sans 18 Pt** | 13px | 400 | 18px | normal | <div> in the nav |
| type.body-28px | **Google Sans 18 Pt** | 28px | 500 | 36px | normal | <h3> in the main and <a> in the main |
| type.body-16px | **Google Sans 18 Pt** | 16px | 500 | 24px | 0.5px | <a> in the main |
| type.heading-20px | **Google Sans 18 Pt** | 20px | 700 | 24px | normal | <li> in the nav |
| type.body-16px | **Google Sans 18 Pt** | 16px | 400 | 26px | normal | <h3> in the nav |
| type.body-14px | **Google Sans 18 Pt** | 14px | 500 | 20px | normal | <a> in the nav |
| type.body-20px | **Google Sans 18 Pt** | 20px | 400 | 28px | normal | <h3> in the main |
| type.body-16px | **Google Sans 18 Pt** | 16px | 500 | 20px | 0.5px | <a> in the main and <a> in the header |
| type.utility-12px | **Google Sans 18 Pt** | 12px | 500 | 16px | normal | <span> in the main |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `0px 12px` | padding | page content |
| `18px 0px 0px` | margin | page content |
| `32px` | padding | page content |
| `0px 24px` | padding | page content |
| `0px 212.5px` | margin | page content |
| `16px 0px` | padding | page content |
| `0px 16px 0px 24px` | padding | page content |
| `0px 0px 32px` | margin | page content |

### Shape and depth

The captured pages use `0px none 24px`, `0px none 25px`, `1px 0px 0px solid none none 0px`, `2px solid 25px`, `2px solid 25px`, `0px none 50%`, and `0px none 8px` border treatments. Recorded shadows include `rgba(222, 222, 222, 0.16) 0px 1px 2px 0px, rgba(0, 0, 0, 0.15) 0px 2px 6px 2px, rgba(0, 0, 0, 0.5) 0px 4px 6px -4px inset`.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#202124` and `#cad1dd`. Text colors include `#f8f9fa`, `#70b1ff`, and `#afb2b6`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Google Sans 18 Pt**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `0px 12px`, `18px 0px 0px`, `32px`, `0px 24px`, and `0px 212.5px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#202124` and `#cad1dd`. Depth is supported by the returned shadows.

## Components and states

The captured pages include repeated styling on <div>, <li>, <ul>, <h2>, <a>, <h3>, and <span> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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

- `#f8f9fa`
- `#000000`
- `#202124`
- `#70b1ff`
- `#afb2b6`
- `#dedede`
- `#4285f4`
- `#1b3c72`
- `#cad1dd`

## Typography captured from developer.chrome.com

- **Google Sans 18 Pt** — weight 400 · size 16px

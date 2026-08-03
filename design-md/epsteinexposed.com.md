# How epsteinexposed.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/epsteinexposed.com-design)

Last updated: 2026-08-03

## Captured pages

[![Epstein Emails: 10,000+ Messages Between Key Figures | Epstein Exposed](https://pin.fontofweb.com/6931?format=jpg)](https://design.withfudge.com/share/pin-6931)

[Epstein Emails: 10,000+ Messages Between Key Figures | Epstein Exposed](https://design.withfudge.com/share/pin-6931)

[![Ask About the Epstein Files - AI Research Assistant | Epstein Exposed](https://pin.fontofweb.com/6930?format=jpg)](https://design.withfudge.com/share/pin-6930)

[Ask About the Epstein Files - AI Research Assistant | Epstein Exposed](https://design.withfudge.com/share/pin-6930)

[![Epstein Documents: 1.6M+ Court Filings & DOJ Releases | Epstein Exposed](https://pin.fontofweb.com/6929?format=jpg)](https://design.withfudge.com/share/pin-6929)

[Epstein Documents: 1.6M+ Court Filings & DOJ Releases | Epstein Exposed](https://design.withfudge.com/share/pin-6929)

[![Ghislaine Maxwell - Epstein Files Connection | Epstein Exposed](https://pin.fontofweb.com/6928?format=jpg)](https://design.withfudge.com/share/pin-6928)

[Ghislaine Maxwell - Epstein Files Connection | Epstein Exposed](https://design.withfudge.com/share/pin-6928)

[![Ghislaine Maxwell - Epstein Files Connection | Epstein Exposed](https://pin.fontofweb.com/6927?format=jpg)](https://design.withfudge.com/share/pin-6927)

[Ghislaine Maxwell - Epstein Files Connection | Epstein Exposed](https://design.withfudge.com/share/pin-6927)

[![Epstein Exposed - The Most Comprehensive Epstein Files Database](https://pin.fontofweb.com/6926?format=jpg)](https://design.withfudge.com/share/pin-6926)

[Epstein Exposed - The Most Comprehensive Epstein Files Database](https://design.withfudge.com/share/pin-6926)

## Overview

epsteinexposed.com presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#000000`, `#e6edf3`, and `#6e7681`, with typography led by **Inter** and **Jet Brains Mono**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.surface | `#000000` | surface on page content in the main |
| color.text | `#e6edf3` | text on page content in the main |
| color.text | `#6e7681` | text on page content in the button |
| color.border | `#1b2332` | border on page content in the button |
| color.text | `#7d8590` | text on page content in the button |
| color.surface | `#0c1017` | surface on page content in the main |
| color.surface | `#0d1117` | surface on page content in the button |
| color.text | `#d4a843` | text on page content in the button |
| color.border | `#06080d` | border on page content in the main |
| color.surface | `#131921` | surface on page content in the button |
| color.text | `#c23b22` | text on page content in the button |
| color.border | `#2b7fff` | border on page content |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **Inter** | 16px | 400 | 25.6px | normal | <div> in the main, <div> in the header, <div>, <button> in the button, <span> in the button, <a> in the main, <div> in the aside, and <a> in the aside |
| type.utility-12px | **Inter** | 12px | 400 | 16px | normal | <div> in the main, <span> in the main, <span> in the button, <button> in the button, <p> in the main, <a> in the aside, <p> in the aside, and <a> in the main |
| type.body-14px | **Inter** | 14px | 400 | 22.75px | normal | <p> in the main |
| type.body-14px | **Inter** | 14px | 400 | 20px | normal | <div> in the button, <button> in the button, <div> in the main, <p> in the main, <span> in the aside, and <a> in the main |
| type.body-16px | **Inter** | 16px | 400 | 26px | normal | <p> in the main |
| type.body-14px | **Inter** | 14px | 500 | 20px | normal | <span> in the main, <a> in the nav, <button> in the button, <p> in the aside, and <a> in the main |
| type.heading-16px | **Inter** | 16px | 700 | 19.2px | -0.16px | <h1> in the main |
| type.heading-24px | **Jet Brains Mono** | 24px | 700 | 32px | normal | <div> in the main and <button> in the button |
| type.utility-10px | **Jet Brains Mono** | 10px | 400 | 16px | normal | <button> in the button, <span> in the button, and <span> in the main |
| type.utility-12px | **Inter** | 12px | 500 | 16px | normal | <button> in the button |
| type.heading-14px | **Inter** | 14px | 600 | 20px | normal | <div> in the main, <span> in the main, and <span> |
| type.heading-18px | **Inter** | 18px | 700 | 29.25px | -0.16px | <span> in the main |
| type.utility-12px | **Jet Brains Mono** | 12px | 400 | 16px | normal | <span> in the main, <div> in the main, and <p> in the main |
| type.display-36px | **Inter** | 36px | 700 | 43.2px | -0.36px | <h1> in the main |
| type.body-16px | **Inter** | 16px | 400 | 24px | normal | <p> in the main |
| type.display-72px | **Jet Brains Mono** | 72px | 700 | 72px | -1.8px | <span> in the main |
| type.heading-14px | **Inter** | 14px | 700 | 16.8px | -0.14px | <h2> in the main |
| type.utility-10px | **Jet Brains Mono** | 10px | 400 | 16px | 0.5px | <div> in the main and <p> in the main |
| type.utility-12px | **Jet Brains Mono** | 12px | 400 | 19.2px | normal | <span> in the main |
| type.heading-20px | **Inter** | 20px | 700 | 24px | -0.2px | <h2> in the main |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `0px 216px` | margin | page content |
| `0px 24px` | padding | page content |
| `32px 24px` | padding | page content |
| `12px` | padding | page content |
| `96px 24px` | padding | page content |
| `0px 0px 16px` | margin | page content |
| `16px` | padding | page content |
| `0px 0px 24px` | margin | page content |

### Shape and depth

The captured pages use `1px solid 8px`, `1px 0px 0px solid 0px`, `1px solid 12px`, `0px none 4px`, `1px solid 3.35544e+07px`, `1px solid 3.35544e+07px`, `0px none 6px`, and `1px solid 3.35544e+07px` border treatments. Recorded shadows include `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, oklab(0 0 0 / 0.4) 0px 20px 25px -5px, oklab(0 0 0 / 0.4) 0px 8px 10px -6px` and `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, oklab(0.622989 -0.0378532 -0.210606 / 0.1) 0px 20px 25px -5px, oklab(0.622989 -0.0378532 -0.210606 / 0.1) 0px 8px 10px -6px`.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#000000`, `#0c1017`, and `#0d1117`. Text colors include `#e6edf3`, `#6e7681`, and `#7d8590`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Inter** and **Jet Brains Mono**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `0px 216px`, `0px 24px`, `32px 24px`, `12px`, and `96px 24px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#000000`, `#0c1017`, `#0d1117`, and `#131921`. Depth is supported by the returned shadows.

## Components and states

The captured pages include repeated styling on <div>, <button>, <span>, <p>, <a>, <h2>, <h1>, and <text> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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
- `#e6edf3`
- `#6e7681`
- `#1b2332`
- `#7d8590`
- `#0c1017`
- `#0d1117`
- `#d4a843`
- `#06080d`
- `#131921`
- `#c23b22`
- `#2b7fff`
- `#1a2230`
- `#94a3b8`
- `#dc2626`
- `#ffffff`

## Typography captured from epsteinexposed.com

- **Inter** — weight 400 · size 16px
- **Jet Brains Mono** — weight 400 · size 10px

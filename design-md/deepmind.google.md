# How deepmind.google is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/deepmind.google-design)

Last updated: 2026-08-03

## Captured pages

[![Gemini 3.1 Pro — Google DeepMind](https://pin.fontofweb.com/9520?format=jpg)](https://design.withfudge.com/share/pin-9520)

[Gemini 3.1 Pro — Google DeepMind](https://design.withfudge.com/share/pin-9520)

[![Gemini 3.1 Pro — Google DeepMind](https://pin.fontofweb.com/9519?format=jpg)](https://design.withfudge.com/share/pin-9519)

[Gemini 3.1 Pro — Google DeepMind](https://design.withfudge.com/share/pin-9519)

[![Gemma 4 — Google DeepMind](https://pin.fontofweb.com/8705?format=jpg)](https://design.withfudge.com/share/pin-8705)

[Gemma 4 — Google DeepMind](https://design.withfudge.com/share/pin-8705)

[![Gemma 4 — Google DeepMind](https://pin.fontofweb.com/8704?format=jpg)](https://design.withfudge.com/share/pin-8704)

[Gemma 4 — Google DeepMind](https://design.withfudge.com/share/pin-8704)

[![Gemma 4 — Google DeepMind](https://pin.fontofweb.com/8703?format=jpg)](https://design.withfudge.com/share/pin-8703)

[Gemma 4 — Google DeepMind](https://design.withfudge.com/share/pin-8703)

[![Gemma 4 — Google DeepMind](https://pin.fontofweb.com/8702?format=jpg)](https://design.withfudge.com/share/pin-8702)

[Gemma 4 — Google DeepMind](https://design.withfudge.com/share/pin-8702)

[![Gemma 4 — Google DeepMind](https://pin.fontofweb.com/8701?format=jpg)](https://design.withfudge.com/share/pin-8701)

[Gemma 4 — Google DeepMind](https://design.withfudge.com/share/pin-8701)

[![Gemini 3.1 Pro - Model Card — Google DeepMind](https://pin.fontofweb.com/6854?format=jpg)](https://design.withfudge.com/share/pin-6854)

[Gemini 3.1 Pro - Model Card — Google DeepMind](https://design.withfudge.com/share/pin-6854)

## Overview

deepmind.google presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#f8f9fc`, `#121317`, and `#000000`, with typography led by **Google Sans Flex**, **Times**, **Applesystem**, **Google Symbols**, and **Google Symbols Rounded 48 Pt**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#f8f9fc` | text on page content |
| color.surface | `#121317` | surface on page content |
| color.text | `#000000` | text on page content |
| color.surface | `#212226` | surface on page content in the main |
| color.text | `#b2bbc5` | text on page content in the main |
| color.text | `#0000ee` | text on page content in the main |
| color.surface | `#18191d` | surface on page content in the main |
| color.text | `#f9f9fb` | text on page content in the footer |
| color.text | `#e6eaf0` | text on page content in the button |
| color.surface | `#101218` | surface on page content in the footer |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-17.5px | **Google Sans Flex** | 17.5px | 400 | 25.375px | 0.2079px | <body>, <div> in the main, <section> in the main, <main> in the main, <article> in the main, <button> in the button, <li> in the nav, <ul> in the nav, <div> in the nav, <footer> in the footer, <div> in the footer, <form> in the footer, <input> in the footer, <label> in the footer, <svg> in the footer, <a> in the footer, <p> in the main, <a> in the main, <div> in the header, and <a> in the header |
| type.body-14.5px | **Google Sans Flex** | 14.5px | 400 | 21.025px | 0.165735px | <div> in the main, <span> in the footer, and <div> in the footer |
| type.body-16px | **Times** | 16px | 400 | normal | normal | <html> |
| type.body-17.5px | **Google Sans Flex** | 17.5px | 450 | 25.375px | 0.2079px | <a> in the footer, <div> in the footer, and <span> in the footer |
| type.body-17.5px | **Google Sans Flex** | 17.5px | 450 | 24px | 0.2079px | <a> in the nav, <a> in the main, <button> in the button, and <div> in the main |
| type.display-42px | **Google Sans Flex** | 42px | 450 | 43.68px | -0.97986px | <h1> in the main and <h2> in the main |
| type.display-32px | **Google Sans Flex** | 32px | 500 | 33.92px | -0.544px | <h3> in the main, <h4> in the main, and <span> in the footer |
| type.body-20px | **Google Sans Flex** | 20px | 500 | 29px | -0.0888px | <span> in the footer, <div> in the footer, and <h3> in the main |
| type.body-14.5px | **Google Sans Flex** | 14.5px | 450 | 21.025px | 0.2079px | <div> in the footer |
| type.body-28px | **Google Sans Flex** | 28px | 500 | 30.24px | -0.19824px | <h3> in the main |
| type.body-14px | **Applesystem** | 14px | 400 | normal | normal | <div> |
| type.display-120px | **Google Symbols** | 120px | 300 | 120px | 0.2079px | <span> in the main |
| type.body-14.5px | **Google Sans Flex** | 14.5px | 450 | 18.125px | 0.17226px | <button> in the button and <a> in the header |
| type.body-14.5px | **Google Sans Flex** | 14.5px | 500 | 21.025px | 0.132965px | <a> in the nav |
| type.heading-14.5px | **Google Sans Flex** | 14.5px | 700 | 21.025px | 0.165735px | <strong> in the main |
| type.body-18px | **Google Symbols Rounded 48 Pt** | 18px | 300 | 18px | 0.2079px | <span> in the footer |
| type.body-24px | **Google Symbols** | 24px | 300 | 24px | 0.2079px | <svg> in the button and <span> in the button |
| type.body-18px | **Google Symbols** | 18px | 300 | 18px | 0.2079px | <span> in the footer |
| type.body-14.5px | **Google Sans Flex** | 14.5px | 400 | 21.025px | 0.2079px | <div> in the header |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `72px` | padding-right | page content |
| `72px` | padding-left | page content |
| `64px` | column-gap | page content |
| `72px` | padding-top | page content |
| `308px` | margin-right | page content |
| `308px` | margin-left | page content |
| `64px` | gap | page content |
| `64px` | row-gap | page content |

### Shape and depth

The captured pages use `0px none 16px`, `0px none 9999px`, `0px none 4px`, `2px solid 9999px`, `1px solid 8px`, and `0px none 50%` border treatments. Recorded gradients include `linear-gradient(45deg, rgb(49, 134, 255) 0%, rgb(50, 121, 249) 49.75%, rgb(60, 144, 255) 100%)`. Recorded shadows include `rgba(230, 234, 240, 0.12) 0px 0px 0px 1px`.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#121317`, `#212226`, and `#18191d`. Text colors include `#f8f9fc`, `#000000`, and `#b2bbc5`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Google Sans Flex**, **Times**, **Applesystem**, **Google Symbols**, and **Google Symbols Rounded 48 Pt**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `72px`, `72px`, `64px`, `72px`, and `308px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#121317`, `#212226`, `#18191d`, and `#101218`. Depth is supported by the returned gradients and shadows.

## Components and states

The captured pages include repeated styling on <div>, <body>, <section>, <main>, <html>, <article>, <svg>, and <span> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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

- `#f8f9fc`
- `#121317`
- `#000000`
- `#212226`
- `#b2bbc5`
- `#0000ee`
- `#18191d`
- `#f9f9fb`
- `#e6eaf0`
- `#101218`

## Typography captured from deepmind.google

- **Google Sans Flex** — weight 400 · size 17.5px
- **Times** — weight 400 · size 16px
- **Applesystem** — weight 400 · size 14px
- **Google Symbols** — weight 300 · size 24px
- **Google Symbols Rounded 48 Pt** — weight 300 · size 18px

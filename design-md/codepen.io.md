# How codepen.io is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/codepen.io-design)

Last updated: 2026-08-03

## Captured pages

[![CodePen: Online Code Editor and Front End Web Developer Community](https://pin.fontofweb.com/8438?format=jpg)](https://design.withfudge.com/share/pin-8438)

[CodePen: Online Code Editor and Front End Web Developer Community](https://design.withfudge.com/share/pin-8438)

[![CodePen: Online Code Editor and Front End Web Developer Community](https://pin.fontofweb.com/8437?format=jpg)](https://design.withfudge.com/share/pin-8437)

[CodePen: Online Code Editor and Front End Web Developer Community](https://design.withfudge.com/share/pin-8437)

[![CodePen: Online Code Editor and Front End Web Developer Community](https://pin.fontofweb.com/8436?format=jpg)](https://design.withfudge.com/share/pin-8436)

[CodePen: Online Code Editor and Front End Web Developer Community](https://design.withfudge.com/share/pin-8436)

[![CodePen: Online Code Editor and Front End Web Developer Community](https://pin.fontofweb.com/8435?format=jpg)](https://design.withfudge.com/share/pin-8435)

[CodePen: Online Code Editor and Front End Web Developer Community](https://design.withfudge.com/share/pin-8435)

[![CodePen: Online Code Editor and Front End Web Developer Community](https://pin.fontofweb.com/8434?format=jpg)](https://design.withfudge.com/share/pin-8434)

[CodePen: Online Code Editor and Front End Web Developer Community](https://design.withfudge.com/share/pin-8434)

[![CodePen: Online Code Editor and Front End Web Developer Community](https://pin.fontofweb.com/8433?format=jpg)](https://design.withfudge.com/share/pin-8433)

[CodePen: Online Code Editor and Front End Web Developer Community](https://design.withfudge.com/share/pin-8433)

[![Settings - CodePen](https://pin.fontofweb.com/8432?format=jpg)](https://design.withfudge.com/share/pin-8432)

[Settings - CodePen](https://design.withfudge.com/share/pin-8432)

[![Settings - CodePen](https://pin.fontofweb.com/8431?format=jpg)](https://design.withfudge.com/share/pin-8431)

[Settings - CodePen](https://design.withfudge.com/share/pin-8431)

## Overview

codepen.io presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#000000`, `#ffffff`, and `#2c303a`, with typography led by **Lato**, **Telefon**, **Type**, **Sf Mono**, and **Arial**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.surface | `#000000` | surface on page content in the nav |
| color.text | `#ffffff` | text on page content in the main |
| color.surface | `#2c303a` | surface on page content in the main |
| color.surface | `#1e1f26` | surface on page content in the main |
| color.text | `#76daff` | text on page content in the main |
| color.text | `#c7c9d3` | text on page content in the main |
| color.surface | `#ffdd40` | surface on page content in the main |
| color.text | `#aaaebc` | text on page content in the nav |
| color.surface | `#444857` | surface on page content in the main |
| color.text | `#b7bbc8` | text on page content in the nav |
| color.surface | `#252830` | surface on page content |
| color.text | `#d5d7de` | text on page content in the header |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-15px | **Lato** | 15px | 400 | 22.5px | normal | <div> in the main, <div> in the footer, <a> in the nav, <p> in the main, <div> in the header, <div> in the nav, <a> in the main, <ul> in the main, <div>, <a> in the header, <li> in the main, <p> in the header, <span> in the nav, <span> in the header, and <span> in the main |
| type.body-16.875px | **Lato** | 16.875px | 500 | 16.875px | normal | <a> in the nav and <button> in the button |
| type.body-24px | **Lato** | 24px | 300 | 36px | normal | <p> in the main |
| type.heading-15px | **Lato** | 15px | 700 | 22.5px | normal | <strong> in the main and <span> in the main |
| type.body-16.5px | **Lato** | 16.5px | 400 | 24.75px | normal | <span> in the nav, <p> in the main, <div> in the main, <a> in the nav, and <p> in the header |
| type.body-15px | **Lato** | 15px | 400 | 18px | normal | <a> in the main, <button> in the button, <span> in the main, <a>, and <div> in the main |
| type.body-13.3333px | **Lato** | 13.3333px | 400 | normal | normal | <div> in the button, <button> in the button, and <span> in the button |
| type.display-60px | **Type** | 60px | 400 | 66px | normal | <h1> in the header |
| type.body-13.125px | **Lato** | 13.125px | 400 | 17.0625px | normal | <div>, <p>, and <div> in the header |
| type.body-27px | **Telefon** | 27px | 400 | 32.4px | normal | <h2> in the main |
| type.heading-17px | **Lato** | 17px | 900 | 20.4px | normal | <a> in the header, <h2> in the header, and <a> in the main |
| type.body-19.5px | **Lato** | 19.5px | 400 | 29.25px | normal | <div>, <div> in the main, and <p> in the main |
| type.body-16.875px | **Lato** | 16.875px | 500 | 25.3125px | normal | <a> in the nav and <button> in the button |
| type.heading-18px | **Lato** | 18px | 700 | 21.6px | normal | <h3> in the main and <h4> in the main |
| type.body-18px | **Lato** | 18px | 400 | 27px | normal | <p> in the header and <div> in the main |
| type.body-15px | **Lato** | 15px | 400 | 16.5px | normal | <a> in the nav |
| type.display-45px | **Telefon** | 45px | 400 | 49.5px | normal | <h1> in the header and <span> in the header |
| type.display-45px | **Type** | 45px | 400 | 49.5px | normal | <h1> in the header |
| type.utility-12px | **Lato** | 12px | 400 | 18px | normal | <div> in the footer, <p> in the footer, <a> in the header, and <span> in the button |
| type.body-13.125px | **Lato** | 13.125px | 400 | 18.375px | normal | <p> in the header, <a> in the header, <p> in the main, and <span> in the main |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `15px` | padding | page content |
| `30px` | padding | page content |
| `30px 30px 300px` | padding | page content |
| `0px 0px 10px` | margin | page content |
| `0px 162.5px` | margin | page content |
| `0px 30px` | padding | page content |
| `15px 15px 90px` | margin | page content |
| `11.25px 20.625px` | padding | page content |

### Shape and depth

The captured pages use `0px none 6px`, `0px none 10px`, `0px none 8px`, `1px 0px 0px solid none none 0px`, `3px solid 4px`, `0px none 4px`, `2px 0px solid none 0px`, and `2px solid 2px` border treatments. Recorded gradients include `linear-gradient(109.61deg, rgb(76, 79, 90) 4.26%, rgb(32, 33, 37) 84.84%)`, `radial-gradient(circle at 100% 0%, rgb(255, 16, 53), rgb(115, 55, 144))`, and `radial-gradient(circle at 100% 0%, rgb(0, 136, 84), rgb(0, 117, 160))`. Recorded shadows include `rgba(0, 0, 0, 0.25) 5px 0px 15px 0px`, `rgba(0, 0, 0, 0.4) 0px 2px 6px 0px`, `rgba(0, 0, 0, 0.5) 0px 4px 30px 0px`, `rgba(0, 0, 0, 0.15) 0px 5px 15px 0px`, `rgba(10, 10, 12, 0.6) 0px 6px 12px 0px`, and `rgba(0, 0, 0, 0.5) 0px 0px 5px 0px`.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#000000`, `#2c303a`, and `#1e1f26`. Text colors include `#ffffff`, `#76daff`, and `#c7c9d3`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Lato**, **Type**, **Telefon**, and **Sf Mono**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `15px`, `30px`, `30px 30px 300px`, `0px 0px 10px`, and `0px 162.5px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#000000`, `#2c303a`, `#1e1f26`, and `#ffdd40`. Depth is supported by the returned gradients and shadows.

## Components and states

The captured pages include repeated styling on <div>, <h4>, <a>, <p>, <strong>, <h2>, <span>, and <h3> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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
- `#2c303a`
- `#1e1f26`
- `#76daff`
- `#c7c9d3`
- `#ffdd40`
- `#aaaebc`
- `#444857`
- `#b7bbc8`
- `#252830`
- `#d5d7de`
- `#9b9dad`
- `#868ca0`
- `#f1f1f3`
- `#47cf73`

## Typography captured from codepen.io

- **Lato** — weight 400 · size 15px
- **Telefon** — weight 400 · size 27px
- **Type** — weight 400 · size 45px
- **Sf Mono** — weight 600 · size 11.25px
- **Arial** — weight 400 · size 13.3333px

# How agently.dev is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/agently.dev-design)

Last updated: 2026-08-03

## Captured pages

[![Agently](https://pin.fontofweb.com/6671?format=jpg)](https://design.withfudge.com/share/pin-6671)

[Agently](https://design.withfudge.com/share/pin-6671)

[![Agently](https://pin.fontofweb.com/6670?format=jpg)](https://design.withfudge.com/share/pin-6670)

[Agently](https://design.withfudge.com/share/pin-6670)

[![Agently](https://pin.fontofweb.com/6669?format=jpg)](https://design.withfudge.com/share/pin-6669)

[Agently](https://design.withfudge.com/share/pin-6669)

[![Agently](https://pin.fontofweb.com/6668?format=jpg)](https://design.withfudge.com/share/pin-6668)

[Agently](https://design.withfudge.com/share/pin-6668)

[![Agently](https://pin.fontofweb.com/6667?format=jpg)](https://design.withfudge.com/share/pin-6667)

[Agently](https://design.withfudge.com/share/pin-6667)

[![Agently](https://pin.fontofweb.com/6666?format=jpg)](https://design.withfudge.com/share/pin-6666)

[Agently](https://design.withfudge.com/share/pin-6666)

[![Agently](https://pin.fontofweb.com/6665?format=jpg)](https://design.withfudge.com/share/pin-6665)

[Agently](https://design.withfudge.com/share/pin-6665)

[![Agently](https://pin.fontofweb.com/6664?format=jpg)](https://design.withfudge.com/share/pin-6664)

[Agently](https://design.withfudge.com/share/pin-6664)

## Overview

agently.dev presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#000000`, `#1a1615`, and `#ffffff`, with typography led by **System**, **Dm Sans**, **Inter**, and **Onest**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#000000` | text on page content in the main |
| color.text | `#1a1615` | text on page content in the main |
| color.shadow | `#ffffff` | shadow on page content in the main |
| color.text | `#453f3d` | text on page content in the main |
| color.surface | `#d6abff` | surface on page content in the main |
| color.text | `#1c1c1c` | text on page content in the main |
| color.shadow | `#4d4d4d` | shadow on page content in the main |
| color.text | `#c60dff` | text on page content in the main |
| color.shadow | `#6a1bd1` | shadow on page content in the main |
| color.shadow | `#a91bd1` | shadow on page content in the main |
| color.surface | `#f9f9f9` | surface on page content |
| color.text | `#0000ee` | text on page content in the nav |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.utility-12px | **System** | 12px | 400 | normal | normal | <div> in the main, <a> in the main, <ul> in the main, <div>, <div> in the nav, <a> in the nav, <div> in the footer, and <a> in the footer |
| type.display-52px | **Dm Sans** | 52px | 700 | 52px | -1.56px | <h2> in the main, <h2> in the footer, <strong> in the main, and <h2> |
| type.utility-12px | **Dm Sans** | 12px | 400 | 18px | -0.24px | <p> in the main |
| type.body-16px | **Dm Sans** | 16px | 300 | 24px | normal | <p> in the main |
| type.body-18px | **Dm Sans** | 18px | 400 | 25.2px | normal | <p> in the main |
| type.body-18px | **Inter** | 18px | 500 | 25.2px | -0.36px | <p> in the main |
| type.body-16px | **Dm Sans** | 16px | 400 | 24px | normal | <p> in the footer and <a> in the footer |
| type.heading-15px | **Dm Sans** | 15px | 600 | 18.75px | normal | <p> in the main and <p> in the footer |
| type.body-15px | **Onest** | 15px | 400 | 21px | normal | <p> in the footer |
| type.body-16px | **Dm Sans** | 16px | 500 | 24px | normal | <p> in the main |
| type.display-40px | **Inter** | 40px | 700 | 40px | -1.6px | <div> in the main |
| type.body-18px | **Dm Sans** | 18px | 400 | 27px | -0.36px | <p> in the main |
| type.body-16px | **Dm Sans** | 16px | 400 | 19.2px | normal | <p> in the main and <a> in the nav |
| type.body-16px | **Dm Sans** | 16px | 500 | 19.2px | normal | <p> in the nav |
| type.display-52px | **Dm Sans** | 52px | 400 | 52px | -1.56px | <h2> in the main |
| type.utility-12px | **Inter** | 12px | 400 | 14.4px | normal | <p> in the main |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `0px 0px 160px` | padding | page content |
| `24px` | padding | page content |
| `12px 16px` | padding | page content |
| `0px 0px 20px` | padding | page content |
| `32px 0px 0px` | padding | page content |
| `20px 0px 0px` | margin | page content |
| `6px 40px` | padding | page content |
| `8px 8px 8px 24px` | padding | page content |

### Shape and depth

The captured pages use `0px none 40px`, `0px none 24px`, `0px none 16px`, `0px none 10px`, `0px none 8px`, and `0px none 100px` border treatments. Recorded gradients include `linear-gradient(rgb(164, 94, 255) 0%, rgb(164, 94, 255) 72.6211%)`, `linear-gradient(rgb(125, 25, 255) 0%, rgb(157, 50, 250) 100%)`, and `linear-gradient(rgb(34, 34, 34) 0%, rgb(0, 0, 0) 100%)`. Recorded shadows include `rgba(255, 255, 255, 0.25) 0px -4px 8px -4px inset, rgba(255, 255, 255, 0.25) 0px 8px 8px -4px inset, rgb(255, 255, 255) 0px 0px 8px -3px inset, rgba(0, 0, 0, 0.25) 0px 12px 12px -4px`, `rgba(255, 255, 255, 0.25) 0px -4px 8px -4px inset, rgba(255, 255, 255, 0.5) 0px 8px 8px -4px inset, rgb(255, 255, 255) 0px 0px 8px -3px inset, rgba(106, 27, 209, 0.25) 0px 12px 12px -4px, rgba(170, 27, 209, 0) 0px 0.823006px 1.15221px -0.5625px, rgba(170, 27, 209, 0) 0px 1.95067px 2.73094px -1.125px, rgba(170, 27, 209, 0) 0px 3.55822px 4.98151px -1.6875px, rgba(170, 27, 209, 0) 0px 5.91554px 8.28176px -2.25px, rgba(170, 27, 209, 0) 0px 9.55311px 13.3744px -2.8125px, rgba(170, 27, 209, 0) 0px 15.6375px 21.8925px -3.375px, rgba(170, 27, 209, 0) 0px 26.9267px 37.6974px -3.9375px, rgba(170, 27, 209, 0) 0px 49px 68.6px -4.5px`, `rgba(255, 255, 255, 0.25) 0px 12px 20px 0px inset, rgba(255, 255, 255, 0.25) 0px -12px 20px 0px inset`, `rgba(255, 255, 255, 0.25) 0px -4px 8px -4px inset, rgba(255, 255, 255, 0.5) 0px 8px 8px -4px inset, rgb(255, 255, 255) 0px 0px 8px -3px inset, rgba(106, 27, 209, 0.25) 0px 12px 12px -4px, rgba(170, 27, 209, 0) 0px 0.823006px 1.15221px -0.5625px, rgba(170, 27, 209, 0) 0px 1.95067px 2.73094px -1.125px, rgba(170, 27, 209, 0) 0px 3.55822px 4.98151px -1.6875px, rgba(170, 27, 209, 0) 0px 5.91554px 8.28176px -2.25px, rgba(170, 27, 209, 0) 0px 9.55311px 13.3744px -2.8125px, rgba(170, 27, 209, 0) 0px 15.6375px 21.8925px -3.375px, rgba(170, 27, 209, 0) 0px 26.9267px 37.6974px -3.9375px, rgba(170, 27, 209, 0) 0px 49px 68.6px -4.5px, rgba(255, 255, 255, 0.5) 0px 8px 8px -4px inset, rgb(255, 255, 255) 0px 0px 8px -3px inset, rgba(169, 27, 209, 0.25) 0px 12px 12px -4px, rgba(170, 27, 209, 0) 0px 0.823006px 1.15221px -0.5625px, rgba(170, 27, 209, 0) 0px 1.95067px 2.73094px -1.125px, rgba(170, 27, 209, 0) 0px 3.55822px 4.98151px -1.6875px, rgba(170, 27, 209, 0) 0px 5.91554px 8.28176px -2.25px, rgba(170, 27, 209, 0) 0px 9.55311px 13.3744px -2.8125px, rgba(170, 27, 209, 0) 0px 15.6375px 21.8925px -3.375px, rgba(170, 27, 209, 0) 0px 26.9267px 37.6974px -3.9375px, rgba(170, 27, 209, 0) 0px 49px 68.6px -4.5px`, `rgba(97, 74, 68, 0.1) 0px 4px 50px 0px`, `rgba(255, 255, 255, 0.25) 0px -4px 8px -4px inset, rgba(255, 255, 255, 0.5) 0px 8px 8px -4px inset, rgb(255, 255, 255) 0px 0px 8px -3px inset, rgba(106, 27, 209, 0.25) 0px 12px 12px -4px, rgba(170, 27, 209, 0) 0px 0.823006px 1.15221px -0.5625px, rgba(170, 27, 209, 0) 0px 1.95067px 2.73094px -1.125px, rgba(170, 27, 209, 0) 0px 3.55822px 4.98151px -1.6875px, rgba(170, 27, 209, 0) 0px 5.91554px 8.28176px -2.25px, rgba(170, 27, 209, 0) 0px 9.55312px 13.3744px -2.8125px, rgba(170, 27, 209, 0) 0px 15.6375px 21.8925px -3.375px, rgba(170, 27, 209, 0) 0px 26.9267px 37.6974px -3.9375px, rgba(170, 27, 209, 0) 0px 49px 68.6px -4.5px`, and `rgba(255, 255, 255, 0.15) 0px 0px 20px 1.64px inset, rgba(77, 77, 77, 0.13) 0px 0.839802px 0.503881px -0.3125px, rgba(77, 77, 77, 0.13) 0px 1.99048px 1.19429px -0.625px, rgba(77, 77, 77, 0.13) 0px 3.63084px 2.1785px -0.9375px, rgba(77, 77, 77, 0.13) 0px 6.03627px 3.62176px -1.25px, rgba(77, 77, 77, 0.13) 0px 9.74808px 5.84885px -1.5625px, rgba(77, 77, 77, 0.13) 0px 15.9566px 9.57398px -1.875px, rgba(77, 77, 77, 0.13) 0px 27.4762px 16.4857px -2.1875px, rgba(77, 77, 77, 0.13) 0px 50px 30px -2.5px`.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#d6abff`, `#f9f9f9`, and `#ededed`. Text colors include `#000000`, `#1a1615`, and `#453f3d`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **System**, **Dm Sans**, **Inter**, and **Onest**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `0px 0px 160px`, `24px`, `12px 16px`, `0px 0px 20px`, and `32px 0px 0px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#d6abff`, `#f9f9f9`, and `#ededed`. Depth is supported by the returned gradients and shadows.

## Components and states

The captured pages include repeated styling on <div>, <h2>, <p>, <a>, <ul>, and <strong> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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
- `#1a1615`
- `#ffffff`
- `#453f3d`
- `#d6abff`
- `#1c1c1c`
- `#4d4d4d`
- `#c60dff`
- `#6a1bd1`
- `#a91bd1`
- `#f9f9f9`
- `#0000ee`
- `#424242`
- `#614a44`
- `#ededed`

## Typography captured from agently.dev

- **System** — weight 400 · size 12px
- **Dm Sans** — weight 700 · size 52px
- **Inter** — weight 400 · size 12px
- **Onest** — weight 400 · size 15px

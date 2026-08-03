# How crowdreply.io is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/crowdreply.io-design)

Last updated: 2026-08-03

## Captured pages

[![CrowdReply: The #1 AI Search Visibility Tool](https://pin.fontofweb.com/8154?format=jpg)](https://design.withfudge.com/share/pin-8154)

[CrowdReply: The #1 AI Search Visibility Tool](https://design.withfudge.com/share/pin-8154)

[![CrowdReply: The #1 AI Search Visibility Tool](https://pin.fontofweb.com/8153?format=jpg)](https://design.withfudge.com/share/pin-8153)

[CrowdReply: The #1 AI Search Visibility Tool](https://design.withfudge.com/share/pin-8153)

[![CrowdReply: The #1 AI Search Visibility Tool](https://pin.fontofweb.com/8152?format=jpg)](https://design.withfudge.com/share/pin-8152)

[CrowdReply: The #1 AI Search Visibility Tool](https://design.withfudge.com/share/pin-8152)

[![CrowdReply: The #1 AI Search Visibility Tool](https://pin.fontofweb.com/8151?format=jpg)](https://design.withfudge.com/share/pin-8151)

[CrowdReply: The #1 AI Search Visibility Tool](https://design.withfudge.com/share/pin-8151)

[![CrowdReply: The #1 AI Search Visibility Tool](https://pin.fontofweb.com/8150?format=jpg)](https://design.withfudge.com/share/pin-8150)

[CrowdReply: The #1 AI Search Visibility Tool](https://design.withfudge.com/share/pin-8150)

[![CrowdReply: The #1 AI Search Visibility Tool](https://pin.fontofweb.com/8149?format=jpg)](https://design.withfudge.com/share/pin-8149)

[CrowdReply: The #1 AI Search Visibility Tool](https://design.withfudge.com/share/pin-8149)

[![CrowdReply: The #1 AI Search Visibility Tool](https://pin.fontofweb.com/8148?format=jpg)](https://design.withfudge.com/share/pin-8148)

[CrowdReply: The #1 AI Search Visibility Tool](https://design.withfudge.com/share/pin-8148)

[![CrowdReply: The #1 AI Search Visibility Tool](https://pin.fontofweb.com/8147?format=jpg)](https://design.withfudge.com/share/pin-8147)

[CrowdReply: The #1 AI Search Visibility Tool](https://design.withfudge.com/share/pin-8147)

## Overview

crowdreply.io presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#000000`, `#ffffff`, and `#46484d`, with typography led by **System**, **Inter**, **Outfit**, and **Crisp Noto Sans**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#000000` | text on page content in the footer |
| color.text | `#ffffff` | text on page content |
| color.text | `#46484d` | text on page content in the footer |
| color.text | `#111111` | text on page content in the footer |
| color.surface | `#1b181c` | surface on page content |
| color.text | `#1e1e1e` | text on page content |
| color.surface | `#f5f2e6` | surface on page content |
| color.text | `#8a8692` | text on page content |
| color.surface | `#272329` | surface on page content |
| color.surface | `#dce5fd` | surface on page content |
| color.surface | `#c1d2fc` | surface on page content |
| color.text | `#faf8f0` | text on page content |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.utility-12px | **System** | 12px | 400 | normal | normal | <div> in the footer, <div>, <a> in the footer, <a>, <p>, <button> in the button, and <div> in the nav |
| type.body-14px | **Inter** | 14px | 400 | 19.6px | normal | <p> in the footer, <a> in the footer, and <p> |
| type.body-18px | **Inter** | 18px | 400 | 28.8px | -0.36px | <p> |
| type.display-44px | **Inter** | 44px | 600 | 52.8px | -3px | <h2> |
| type.body-18px | **Inter** | 18px | 400 | 30.6px | normal | <p> |
| type.display-56px | **Outfit** | 56px | 600 | 61.6px | -3.5px | <h1> and <span> |
| type.body-16px | **Inter** | 16px | 500 | 27.2px | normal | <p> |
| type.heading-18px | **Inter** | 18px | 600 | 30.6px | normal | <p> |
| type.body-16px | **Inter** | 16px | 400 | 27.2px | normal | <p> |
| type.body-17px | **Inter** | 17px | 500 | 25.5px | normal | <p> |
| type.body-14px | **Inter** | 14px | 500 | 23.8px | normal | <p>, <span>, <h2>, and <p> in the nav |
| type.body-18px | **Inter** | 18px | 500 | 30.6px | normal | <p> |
| type.display-32px | **Inter** | 32px | 500 | 44.8px | -1.5px | <h3> |
| type.utility-12px | **Inter** | 12px | 600 | 20.4px | 0.12px | <p> |
| type.body-15px | **Inter** | 15px | 500 | 22.5px | normal | <p> |
| type.utility-12px | **Inter** | 12px | 500 | 16px | normal | <p> |
| type.body-16px | **Inter** | 16px | 400 | 19.2px | normal | <span> |
| type.body-14px | **Inter** | 14px | 500 | 20px | -0.14px | <p> |
| type.heading-16px | **Inter** | 16px | 600 | 27.2px | normal | <p> in the footer |
| type.utility-11px | **Crisp Noto Sans** | 11px | 400 | 11px | normal | <span> in the button |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `24px` | padding | page content |
| `32px` | padding | page content |
| `134px 30px 220px` | padding | page content |
| `32px 0px 132px` | padding | page content |
| `12px 16px 24px` | padding | page content |
| `0px 20px` | padding | page content |
| `18px 30px` | padding | page content |
| `40px 0px 0px` | padding | page content |

### Shape and depth

The captured pages use `0px none 12px`, `0px none 18px`, `0px none 9px`, `0px none 10px`, `0px none 6px`, `0px none 8px`, `0px none 14px`, and `0px none 20px` border treatments. Recorded gradients include `linear-gradient(90deg, rgb(249, 111, 75) 0%, rgb(130, 167, 248) 43.7682%, rgb(241, 236, 217) 96.4178%)` and `linear-gradient(120deg, rgb(241, 236, 217), rgb(250, 248, 240), rgb(249, 111, 75))`. Recorded shadows include `rgba(88, 92, 95, 0.16) 0px 16px 40px -8px`, `rgba(198, 198, 198, 0.3) 0px 0.5px 0px 1px inset, rgba(169, 169, 169, 0.03) 0px 0px 40px 20px`, and `rgba(0, 0, 0, 0) 0px 0px 0px 0px rgb(0,0,238)`.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#1b181c`, `#f5f2e6`, and `#272329`. Text colors include `#000000`, `#ffffff`, and `#46484d`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **System**, **Inter**, **Outfit**, and **Crisp Noto Sans**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `24px`, `32px`, `134px 30px 220px`, `32px 0px 132px`, and `12px 16px 24px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#1b181c`, `#f5f2e6`, `#272329`, and `#dce5fd`. Depth is supported by the returned gradients and shadows.

## Components and states

The captured pages include repeated styling on <div>, <p>, <a>, <h1>, <span>, <h2>, <button>, and <h3> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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
- `#46484d`
- `#111111`
- `#1b181c`
- `#1e1e1e`
- `#f5f2e6`
- `#8a8692`
- `#272329`
- `#dce5fd`
- `#c1d2fc`
- `#faf8f0`
- `#fee3d6`
- `#0000ee`
- `#f1ecd9`
- `#f96f4b`

## Typography captured from crowdreply.io

- **System** — weight 400 · size 12px
- **Inter** — weight 400 · size 14px
- **Outfit** — weight 600 · size 56px
- **Crisp Noto Sans** — weight 400 · size 11px

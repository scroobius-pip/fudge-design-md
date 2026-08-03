# How baseten.co is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/baseten.co-design)

Last updated: 2026-08-03

## Captured pages

[![Inference at Scale with Dedicated Deployments | Baseten](https://pin.fontofweb.com/9328?format=jpg)](https://design.withfudge.com/share/pin-9328)

[Inference at Scale with Dedicated Deployments | Baseten](https://design.withfudge.com/share/pin-9328)

[![Inference at Scale with Dedicated Deployments | Baseten](https://pin.fontofweb.com/9327?format=jpg)](https://design.withfudge.com/share/pin-9327)

[Inference at Scale with Dedicated Deployments | Baseten](https://design.withfudge.com/share/pin-9327)

[![Inference at Scale with Dedicated Deployments | Baseten](https://pin.fontofweb.com/9326?format=jpg)](https://design.withfudge.com/share/pin-9326)

[Inference at Scale with Dedicated Deployments | Baseten](https://design.withfudge.com/share/pin-9326)

[![Inference at Scale with Dedicated Deployments | Baseten](https://pin.fontofweb.com/9325?format=jpg)](https://design.withfudge.com/share/pin-9325)

[Inference at Scale with Dedicated Deployments | Baseten](https://design.withfudge.com/share/pin-9325)

[![Inference Platform: Deploy AI models in production | Baseten](https://pin.fontofweb.com/9324?format=jpg)](https://design.withfudge.com/share/pin-9324)

[Inference Platform: Deploy AI models in production | Baseten](https://design.withfudge.com/share/pin-9324)

[![Inference Platform: Deploy AI models in production | Baseten](https://pin.fontofweb.com/9323?format=jpg)](https://design.withfudge.com/share/pin-9323)

[Inference Platform: Deploy AI models in production | Baseten](https://design.withfudge.com/share/pin-9323)

[![Inference Platform: Deploy AI models in production | Baseten](https://pin.fontofweb.com/9008?format=jpg)](https://design.withfudge.com/share/pin-9008)

[Inference Platform: Deploy AI models in production | Baseten](https://design.withfudge.com/share/pin-9008)

## Overview

baseten.co presents a mixed light and dark surface treatment in the captured pages. The system is anchored by `#000000`, `#ffffff`, and `#f5f8f4`, with typography led by **System**, **Neue Alte Grotesk**, and **Chivo Mono**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#000000` | text on page content in the main |
| color.text | `#ffffff` | text on page content in the footer |
| color.surface | `#f5f8f4` | surface on page content in the main |
| color.text | `#333333` | text on page content in the main |
| color.surface | `#19e76e` | surface on page content in the main |
| color.surface | `#e1eadd` | surface on page content in the main |
| color.text | `#b3b3b3` | text on page content in the nav |
| color.surface | `#f0f5ee` | surface on page content in the main |
| color.surface | `#b9c6b3` | surface on page content in the main |
| color.surface | `#00b86b` | surface on page content in the main |
| color.surface | `#ffa9fd` | surface on page content in the main |
| color.border | `#909a8b` | border on page content in the main |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **System** | 16px | 400 | 24px | normal | <div> in the footer, <div> in the nav, <a> in the nav, <ul> in the nav, <div> in the main, <blockquote> in the main, <div>, and <a> in the main |
| type.body-16px | **Neue Alte Grotesk** | 16px | 400 | 24px | normal | <a> in the nav, <p> in the nav, and <p> in the main |
| type.display-32px | **Neue Alte Grotesk** | 32px | 400 | 44px | -1.28px | <p> in the main |
| type.display-48px | **Neue Alte Grotesk** | 48px | 600 | 60px | -1.44px | <p> in the main, <span> in the main, and <h2> in the main |
| type.body-16px | **Chivo Mono** | 16px | 400 | 24px | normal | <a> in the main |
| type.display-88px | **Neue Alte Grotesk** | 88px | 600 | 80px | -1.76px | <h1> in the main |
| type.body-14px | **Chivo Mono** | 14px | 400 | 18px | -0.28px | <div> in the footer, <span> in the main, <span> in the footer, and <span> in the nav |
| type.body-16px | **Neue Alte Grotesk** | 16px | 400 | 24px | -0.32px | <p> in the nav |
| type.body-24px | **Neue Alte Grotesk** | 24px | 400 | 32px | -0.48px | <p> in the main |
| type.heading-24px | **Neue Alte Grotesk** | 24px | 600 | 30px | -0.48px | <p> in the main |
| type.body-16px | **Chivo Mono** | 16px | 400 | 24px | -0.32px | <span> in the main |
| type.body-18px | **Neue Alte Grotesk** | 18px | 400 | 26px | normal | <p> in the main |
| type.heading-18px | **Neue Alte Grotesk** | 18px | 600 | 24px | normal | <p> in the main |
| type.body-16px | **System** | 16px | 400 | 20px | -0.32px | <span> in the button, <button> in the button, <a> in the nav, and <span> in the nav |
| type.display-64px | **Neue Alte Grotesk** | 64px | 600 | 70px | -1.92px | <h2> in the main |
| type.body-16px | **Chivo Mono** | 16px | 400 | 16px | normal | <span> in the main |
| type.utility-12px | **Chivo Mono** | 12px | 400 | 16px | normal | <p> in the footer |
| type.utility-12.98px | **Chivo Mono** | 12.98px | 400 | 19.47px | -0.2596px | <text> in the main |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `40px` | padding | page content |
| `16px 0px` | padding | page content |
| `0px 380px` | margin | page content |
| `24px` | padding | page content |
| `-4px 0px 0px` | margin | page content |
| `56px 0px 44px` | padding | page content |
| `32px 24px` | padding | page content |
| `0px 16px 128px` | padding | page content |

### Shape and depth

The captured pages use `1px solid 0px` border treatments.

## Colors

The visual system is mixed light and dark surface treatment. Surface colors include `#f5f8f4`, `#19e76e`, and `#e1eadd`. Text colors include `#000000`, `#ffffff`, and `#333333`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **System**, **Neue Alte Grotesk**, and **Chivo Mono**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `40px`, `16px 0px`, `0px 380px`, `24px`, and `-4px 0px 0px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is mixed light and dark surface treatment. Surface treatment centers on `#f5f8f4`, `#19e76e`, `#e1eadd`, and `#f0f5ee`. No structured gradient or shadow treatment is established.

## Components and states

The captured pages include repeated styling on <div>, <a>, <p>, <ul>, <h2>, <span>, <blockquote>, and <text> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

## Responsive behavior

The captured token set does not establish breakpoint values or mobile behavior. Validate stacking, navigation changes, image treatment, and type scaling against the representative captures before implementing a responsive adaptation.

## Practical implementation guidance

- Preserve the mixed light/dark surface relationship and the measured type hierarchy before adding decorative treatment.
- Start from the returned typography, spacing, color, and border values; name any new scale or semantic role as an adaptation rather than as a source fact.
- Keep the captured font families separate from licensing decisions.
- Use screenshots to validate component anatomy, responsive behavior, focus treatment, and motion before shipping.
- Avoid introducing gradients or shadows beyond the captured treatment; none are established.

## Scope note

The guide uses representative captured pages. The evidence supports the values and observations above; it does not establish component semantics, interaction states, motion timing, breakpoint rules, font licensing, or a complete source stylesheet.

## Colors

- `#000000`
- `#ffffff`
- `#f5f8f4`
- `#333333`
- `#19e76e`
- `#e1eadd`
- `#b3b3b3`
- `#f0f5ee`
- `#b9c6b3`
- `#00b86b`
- `#ffa9fd`
- `#909a8b`
- `#a4b09f`

## Typography captured from baseten.co

- **System** — weight 400 · size 16px
- **Neue Alte Grotesk** — weight 400 · size 16px
- **Chivo Mono** — weight 400 · size 12px

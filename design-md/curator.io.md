# How curator.io is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/curator.io-design)

Last updated: 2026-08-03

## Captured pages

[![Social Media Aggregator Tips, Guides & News | Curator Blog](https://pin.fontofweb.com/7656?format=jpg)](https://design.withfudge.com/share/pin-7656)

[Social Media Aggregator Tips, Guides & News | Curator Blog](https://design.withfudge.com/share/pin-7656)

[![Pricing – Curator Social Media Aggregator](https://pin.fontofweb.com/7654?format=jpg)](https://design.withfudge.com/share/pin-7654)

[Pricing – Curator Social Media Aggregator](https://design.withfudge.com/share/pin-7654)

[![The Free Social Media Aggregator - Curator](https://pin.fontofweb.com/7653?format=jpg)](https://design.withfudge.com/share/pin-7653)

[The Free Social Media Aggregator - Curator](https://design.withfudge.com/share/pin-7653)

[![The Free Social Media Aggregator - Curator](https://pin.fontofweb.com/7652?format=jpg)](https://design.withfudge.com/share/pin-7652)

[The Free Social Media Aggregator - Curator](https://design.withfudge.com/share/pin-7652)

[![The Free Social Media Aggregator - Curator](https://pin.fontofweb.com/7651?format=jpg)](https://design.withfudge.com/share/pin-7651)

[The Free Social Media Aggregator - Curator](https://design.withfudge.com/share/pin-7651)

## Overview

curator.io presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#000000`, `#0000ee`, and `#ffffff`, with typography led by **System** and **Geist**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#000000` | text on page content in the header |
| color.text | `#0000ee` | text on page content |
| color.surface | `#ffffff` | surface on page content |
| color.text | `#888888` | text on page content |
| color.text | `#333333` | text on page content |
| color.text | `#666666` | text on page content |
| color.surface | `#d62976` | surface on page content |
| color.surface | `#addeff` | surface on page content |
| color.text | `#0099ff` | text on page content |
| color.surface | `#0077b5` | surface on page content |
| color.text | `#1a1a1a` | text on page content |
| color.surface | `#1877f2` | surface on page content |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.utility-12px | **System** | 12px | 400 | normal | normal | <div> in the header, <div>, <a> in the nav, <a>, <a> in the header, and <div> in the footer |
| type.body-16px | **Geist** | 16px | 400 | 24px | normal | <p> and <p> in the footer |
| type.display-56px | **Geist** | 56px | 500 | 67.2px | -1.12px | <h1> |
| type.display-40px | **Geist** | 40px | 500 | 48px | -0.8px | <span>, <h2> in the footer, and <h2> |
| type.heading-20px | **Geist** | 20px | 600 | 30px | -0.4px | <h4> |
| type.body-14px | **Geist** | 14px | 500 | 21px | normal | <p>, <p> in the nav, and <p> in the header |
| type.display-48px | **Geist** | 48px | 500 | 57.6px | -0.96px | <h2> and <span> |
| type.body-20px | **Geist** | 20px | 400 | 30px | -0.2px | <p> |
| type.body-14px | **Geist** | 14px | 400 | 21px | normal | <p> in the footer, <a> in the footer, and <p> |
| type.display-32px | **Geist** | 32px | 400 | 38.4px | -0.64px | <h2> |
| type.heading-16px | **Geist** | 16px | 600 | 24px | -0.16px | <h4> in the footer |
| type.display-32px | **Geist** | 32px | 500 | 38.4px | -0.64px | <h2> |
| type.body-18px | **System** | 18px | 400 | 23.4px | normal | <p> |
| type.body-20px | **Geist** | 20px | 500 | 30px | normal | <p> |
| type.heading-20px | **Geist** | 20px | 600 | 28px | -0.4px | <h3> |
| type.body-14px | **System** | 14px | 500 | normal | normal | <span> |
| type.utility-10px | **Geist** | 10px | 700 | 15px | normal | <p> |
| type.utility-13px | **System** | 13px | 600 | normal | normal | <div> |
| type.heading-14px | **Geist** | 14px | 600 | 21px | normal | <strong> |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `20px 0px` | padding | page content |
| `120px 0px 0px` | padding | page content |
| `40px` | padding | page content |
| `180px 0px 120px` | padding | page content |
| `120px 0px` | padding | page content |
| `32px 0px 0px` | padding | page content |
| `40px 0px 96px` | padding | page content |
| `60px 0px` | padding | page content |

### Shape and depth

The captured pages use `0px none 20px`, `0px none 10px`, `0px none 24px`, `0px none 50%`, and `0px none 18px` border treatments. Recorded shadows include `rgba(0, 0, 0, 0.2) 0px 1px 2px 0px`, `rgba(0, 0, 0, 0.1) 0px 0px 10px 0px`, and `rgba(0, 0, 0, 0.15) 0px 0px 16px 0px`.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#ffffff`, `#d62976`, and `#addeff`. Text colors include `#000000`, `#0000ee`, and `#888888`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **System** and **Geist**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `20px 0px`, `120px 0px 0px`, `40px`, `180px 0px 120px`, and `120px 0px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#ffffff`, `#d62976`, `#addeff`, and `#0077b5`. Depth is supported by the returned shadows.

## Components and states

The captured pages include repeated styling on <div>, <h4>, <p>, <a>, <h1>, <span>, <h3>, and <h2> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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
- `#0000ee`
- `#ffffff`
- `#888888`
- `#333333`
- `#666666`
- `#d62976`
- `#addeff`
- `#0099ff`
- `#0077b5`
- `#1a1a1a`
- `#1877f2`
- `#ff7413`
- `#6e46f9`

## Typography captured from curator.io

- **System** — weight 400 · size 12px
- **Geist** — weight 600 · size 20px

# How coda.co is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/coda.co-design)

Last updated: 2026-08-03

## Captured pages

[![Your MoR Solution for Global Expansion | Coda](https://pin.fontofweb.com/6759?format=jpg)](https://design.withfudge.com/share/pin-6759)

[Your MoR Solution for Global Expansion | Coda](https://design.withfudge.com/share/pin-6759)

[![Your MoR Solution for Global Expansion | Coda](https://pin.fontofweb.com/6758?format=jpg)](https://design.withfudge.com/share/pin-6758)

[Your MoR Solution for Global Expansion | Coda](https://design.withfudge.com/share/pin-6758)

## Overview

coda.co presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#000000`, `#f8f9eb`, and `#5a5a4f`, with typography led by **System**, **Abc Monument Grotesk**, and **Jet Brains Mono**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.surface | `#000000` | surface on page content |
| color.text | `#f8f9eb` | text on page content |
| color.surface | `#5a5a4f` | surface on page content |
| color.text | `#202020` | text on page content in the button |
| color.text | `#ffffff` | text on page content |
| color.surface | `#edeee1` | surface on page content in the button |
| color.surface | `#002eff` | surface on page content |
| color.surface | `#671fff` | surface on page content |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **System** | 16px | 400 | 24px | normal | <div> and <a> |
| type.display-64.2128px | **Abc Monument Grotesk** | 64.2128px | 800 | 57.7915px | -0.642128px | <span> |
| type.utility-12px | **Jet Brains Mono** | 12px | 400 | 14.4px | normal | <span> and <div> |
| type.body-22.9328px | **Abc Monument Grotesk** | 22.9328px | 400 | 29.8126px | 0.229328px | <p> |
| type.body-18.3472px | **Abc Monument Grotesk** | 18.3472px | 400 | 27.5209px | normal | <button> in the button, <a>, <span>, and <div> |
| type.body-16.0528px | **Abc Monument Grotesk** | 16.0528px | 400 | 16.0528px | normal | <div> |
| type.body-18.3472px | **Abc Monument Grotesk** | 18.3472px | 400 | 18.3472px | normal | <button> in the button |
| type.body-16.0528px | **Abc Monument Grotesk** | 16.0528px | 400 | 22.9554px | 0.160528px | <p> |
| type.heading-21.7872px | **Abc Monument Grotesk** | 21.7872px | 800 | 22.223px | -0.217872px | <p> |
| type.body-18.3472px | **Abc Monument Grotesk** | 18.3472px | 500 | 27.5209px | normal | <div> and <a> |
| type.body-14.3328px | **Jet Brains Mono** | 14.3328px | 400 | 14.3328px | normal | <div> |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `91.7328px` | padding | page content |
| `13.76px` | padding | page content |
| `0px 0px 0px -13.76px` | margin | page content |
| `45.8672px` | padding | page content |
| `180.512px 36.6928px 0px` | padding | page content |
| `123.84px 13.76px 13.76px 27.52px` | padding | page content |
| `0px 0px 4.58724px` | margin | page content |
| `13.76px 0px 0px` | margin | page content |

### Shape and depth

The captured pages use `0px none 13.76px`, `0px none 22.9328px`, `0px none 9.17276px`, and `1px solid 9999px` border treatments.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#000000`, `#5a5a4f`, and `#edeee1`. Text colors include `#f8f9eb`, `#202020`, and `#ffffff`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **System**, **Abc Monument Grotesk**, and **Jet Brains Mono**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `91.7328px`, `13.76px`, `0px 0px 0px -13.76px`, `45.8672px`, and `180.512px 36.6928px 0px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#000000`, `#5a5a4f`, `#edeee1`, and `#002eff`. No structured gradient or shadow treatment is established.

## Components and states

The captured pages include repeated styling on <div>, <span>, <p>, <a>, and <button> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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

- `#000000`
- `#f8f9eb`
- `#5a5a4f`
- `#202020`
- `#ffffff`
- `#edeee1`
- `#002eff`
- `#671fff`

## Typography captured from coda.co

- **System** — weight 400 · size 16px
- **Abc Monument Grotesk** — weight 400 · size 16.0528px
- **Jet Brains Mono** — weight 400 · size 12px

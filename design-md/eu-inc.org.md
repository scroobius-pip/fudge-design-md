# How eu-inc.org is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/eu-inc.org-design)

Last updated: 2026-08-03

## Captured pages

[![EU–INC — One Europe. One Standard. — Pan-European legal entity.](https://pin.fontofweb.com/8207?format=jpg)](https://design.withfudge.com/share/pin-8207)

[EU–INC — One Europe. One Standard. — Pan-European legal entity.](https://design.withfudge.com/share/pin-8207)

[![EU–INC — One Europe. One Standard. — Pan-European legal entity.](https://pin.fontofweb.com/8206?format=jpg)](https://design.withfudge.com/share/pin-8206)

[EU–INC — One Europe. One Standard. — Pan-European legal entity.](https://design.withfudge.com/share/pin-8206)

## Overview

eu-inc.org presents a predominantly light surface treatment in the captured pages. The system is anchored by `#000000`, `#f5f5f5`, and `#5e5e5e`, with typography led by **System**, **Apfel Grotezk**, **Custom Apfel Grotezk**, **Inter**, and **Mono Spec**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#000000` | text on page content in the nav |
| color.surface | `#f5f5f5` | surface on page content |
| color.text | `#5e5e5e` | text on page content |
| color.text | `#111111` | text on page content |
| color.text | `#999999` | text on page content |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.utility-12px | **System** | 12px | 400 | normal | normal | <div> in the nav and <div> |
| type.body-16px | **Apfel Grotezk** | 16px | 400 | 24px | normal | <p>, <a>, and <li> |
| type.body-16px | **Custom Apfel Grotezk** | 16px | 400 | 24px | normal | <p> |
| type.heading-22px | **Inter** | 22px | 600 | 26.4px | -0.44px | <p> and <h2> |
| type.utility-12px | **Mono Spec** | 12px | 400 | 16.8px | normal | <p> |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `30px 20px 58px` | padding | page content |
| `20px 0px 100px` | padding | page content |
| `0px 0px 0px 40px` | padding | page content |
| `20px 0px 0px` | margin | page content |
| `0px 0px 0px 20.224px` | padding | page content |

### Shape and depth

Recorded gradients include `linear-gradient(rgb(245, 245, 245) 0%, rgba(245, 245, 245, 0) 100%)`.

## Colors

The visual system is predominantly light surface treatment. Surface colors include `#f5f5f5`. Text colors include `#000000`, `#5e5e5e`, and `#111111`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **System**, **Apfel Grotezk**, **Custom Apfel Grotezk**, **Inter**, and **Mono Spec**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `30px 20px 58px`, `20px 0px 100px`, `0px 0px 0px 40px`, `20px 0px 0px`, and `0px 0px 0px 20.224px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly light surface treatment. Surface treatment centers on `#f5f5f5`. Depth is supported by the returned gradients.

## Components and states

The captured pages include repeated styling on <div>, <p>, <a>, <h2>, and <li> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

## Responsive behavior

The captured token set does not establish breakpoint values or mobile behavior. Validate stacking, navigation changes, image treatment, and type scaling against the representative captures before implementing a responsive adaptation.

## Practical implementation guidance

- Preserve the light surface relationship and the measured type hierarchy before adding decorative treatment.
- Start from the returned typography, spacing, color, and border values; name any new scale or semantic role as an adaptation rather than as a source fact.
- Keep the captured font families separate from licensing decisions.
- Use screenshots to validate component anatomy, responsive behavior, focus treatment, and motion before shipping.
- Avoid introducing gradients or shadows beyond the captured treatment; the returned evidence includes those treatments.

## Scope note

The guide uses representative captured pages. The evidence supports the values and observations above; it does not establish component semantics, interaction states, motion timing, breakpoint rules, font licensing, or a complete source stylesheet.

## Colors

- `#000000`
- `#f5f5f5`
- `#5e5e5e`
- `#111111`
- `#999999`

## Typography captured from eu-inc.org

- **System** — weight 400 · size 12px
- **Apfel Grotezk** — weight 400 · size 16px
- **Custom Apfel Grotezk** — weight 400 · size 16px
- **Inter** — weight 600 · size 22px
- **Mono Spec** — weight 400 · size 12px

# How delve.co is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/delve.co-design)

Last updated: 2026-08-03

## Captured pages

[![Delve | SOC 2 Compliance, HIPAA | Automated Compliance for AI, Startups | Get GDPR, ISO 27001, Cybersecurity Compliant & More | Delve Automated Compliance](https://pin.fontofweb.com/8219?format=jpg)](https://design.withfudge.com/share/pin-8219)

[Delve | SOC 2 Compliance, HIPAA | Automated Compliance for AI, Startups | Get GDPR, ISO 27001, Cybersecurity Compliant & More | Delve Automated Compliance](https://design.withfudge.com/share/pin-8219)

[![Delve | SOC 2 Compliance, HIPAA | Automated Compliance for AI, Startups | Get GDPR, ISO 27001, Cybersecurity Compliant & More | Delve Automated Compliance](https://pin.fontofweb.com/8218?format=jpg)](https://design.withfudge.com/share/pin-8218)

[Delve | SOC 2 Compliance, HIPAA | Automated Compliance for AI, Startups | Get GDPR, ISO 27001, Cybersecurity Compliant & More | Delve Automated Compliance](https://design.withfudge.com/share/pin-8218)

## Overview

delve.co presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#ffffff`, `#000000`, and `#0c0c0c`, with typography led by **Inter Tight** and **Overused Grotesk**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#ffffff` | text on page content in the header |
| color.surface | `#000000` | surface on page content in the main |
| color.surface | `#0c0c0c` | surface on page content in the header |
| color.text | `#dfe0e5` | text on page content in the footer |
| color.surface | `#fb4a02` | surface on page content in the main |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **Inter Tight** | 16px | 400 | 24px | normal | <div> in the header, <div> in the main, <div> in the footer, <a> in the header, and <a> in the main |
| type.display-140.8px | **Overused Grotesk** | 140.8px | 700 | 140.8px | normal | <h1> in the header |
| type.body-14px | **Inter Tight** | 14px | 400 | 21px | normal | <div> in the footer, <a> in the footer, and <button> in the button |
| type.display-64px | **Overused Grotesk** | 64px | 700 | 64px | -0.64px | <h2> in the main |
| type.body-20px | **Inter Tight** | 20px | 400 | 30px | normal | <p> in the header |
| type.body-18px | **Inter Tight** | 18px | 400 | 27px | normal | <div> in the main |
| type.heading-16px | **Inter Tight** | 16px | 600 | 24px | normal | <div> in the footer |
| type.body-16px | **Inter Tight** | 16px | 400 | 19.2px | normal | <div> in the header |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `48px` | padding | page content |
| `0px 0px 128px` | padding | page content |
| `112px 0px` | padding | page content |
| `48px 80px 112px` | padding | page content |
| `0px 85.25px` | padding | page content |
| `48px 0px` | padding | page content |
| `48px 0px 0px` | padding | page content |
| `24px 0px 0px` | margin | page content |

### Shape and depth

The captured pages use `1px 0px solid none 0px`, `1px solid 0px`, and `1px solid 0px` border treatments.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#000000`, `#0c0c0c`, and `#fb4a02`. Text colors include `#ffffff` and `#dfe0e5`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Inter Tight** and **Overused Grotesk**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `48px`, `0px 0px 128px`, `112px 0px`, `48px 80px 112px`, and `0px 85.25px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#000000`, `#0c0c0c`, and `#fb4a02`. No structured gradient or shadow treatment is established.

## Components and states

The captured pages include repeated styling on <div>, <a>, <h2>, <button>, <h1>, and <p> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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

- `#ffffff`
- `#000000`
- `#0c0c0c`
- `#dfe0e5`
- `#fb4a02`

## Typography captured from delve.co

- **Inter Tight** — weight 400 · size 16px
- **Overused Grotesk** — weight 700 · size 64px

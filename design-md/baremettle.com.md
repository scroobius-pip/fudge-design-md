# How baremettle.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/baremettle.com-design)

Last updated: 2026-08-03

## Captured pages

[![Coffee Diary | Bare Mettle Forums](https://pin.fontofweb.com/6254?format=jpg)](https://design.withfudge.com/share/pin-6254)

[Coffee Diary | Bare Mettle Forums](https://design.withfudge.com/share/pin-6254)

[![Coffee Diary | Bare Mettle Forums](https://pin.fontofweb.com/6253?format=jpg)](https://design.withfudge.com/share/pin-6253)

[Coffee Diary | Bare Mettle Forums](https://design.withfudge.com/share/pin-6253)

## Overview

baremettle.com presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#d7d7d7`, `#818181`, and `#ffffff`, with typography led by the captured fallback stack. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#d7d7d7` | text on page content |
| color.text | `#818181` | text on page content |
| color.text | `#ffffff` | text on page content in the header |
| color.text | `#f6eedd` | text on page content |
| color.text | `#8d8d91` | text on page content |
| color.text | `#b0b0b0` | text on page content |
| color.surface | `#101010` | surface on page content |
| color.surface | `#191919` | surface on page content in the nav |
| color.text | `#aaaaaa` | text on page content |
| color.surface | `#404040` | surface on page content |

### Typography

No structured typography observations were returned.

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `12px 9px` | padding | page content |
| `15px` | padding | page content |
| `10px` | padding | page content |
| `0px 0px 12px` | padding | page content |
| `0px 371.5px` | margin | page content |
| `15px 0px` | padding | page content |
| `5px 0px 0px` | margin | page content |
| `0px 0px -5px` | margin | page content |

### Shape and depth

The captured pages use `0px none 4px`, `0px none 3px`, `1px solid 4px`, and `0px none 3px 3px 0px 0px` border treatments. Recorded gradients include `linear-gradient(rgba(255, 255, 255, 0.3)`.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#101010`, `#191919`, and `#404040`. Text colors include `#d7d7d7`, `#818181`, and `#ffffff`. Keep image-derived colors separate from interface colors.

## Typography

No structured typography roles were returned.

## Layout

The captured pages use values such as `12px 9px`, `15px`, `10px`, `0px 0px 12px`, and `0px 371.5px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#101010`, `#191919`, and `#404040`. Depth is supported by the returned gradients.

## Components and states

The captured pages include repeated styling on <div>, <p>, <span>, <a>, <ul>, <h1>, and <li> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

## Responsive behavior

The captured token set does not establish breakpoint values or mobile behavior. Validate stacking, navigation changes, image treatment, and type scaling against the representative captures before implementing a responsive adaptation.

## Practical implementation guidance

- Preserve the dark surface relationship and the measured type hierarchy before adding decorative treatment.
- Start from the returned typography, spacing, color, and border values; name any new scale or semantic role as an adaptation rather than as a source fact.
- Keep the fallback choice separate from licensing decisions.
- Use screenshots to validate component anatomy, responsive behavior, focus treatment, and motion before shipping.
- Avoid introducing gradients or shadows beyond the captured treatment; the returned evidence includes those treatments.

## Scope note

The guide uses representative captured pages. The evidence supports the values and observations above; it does not establish component semantics, interaction states, motion timing, breakpoint rules, font licensing, or a complete source stylesheet.

## Colors

- `#d7d7d7`
- `#818181`
- `#ffffff`
- `#f6eedd`
- `#8d8d91`
- `#b0b0b0`
- `#101010`
- `#191919`
- `#aaaaaa`
- `#404040`

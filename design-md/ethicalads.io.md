# How ethicalads.io is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/ethicalads.io-design)

Last updated: 2026-08-03

## Captured pages

[![Advertise with Us - EthicalAds](https://pin.fontofweb.com/6085?format=jpg)](https://design.withfudge.com/share/pin-6085)

[Advertise with Us - EthicalAds](https://design.withfudge.com/share/pin-6085)

[![Advertise with Us - EthicalAds](https://pin.fontofweb.com/6084?format=jpg)](https://design.withfudge.com/share/pin-6084)

[Advertise with Us - EthicalAds](https://design.withfudge.com/share/pin-6084)

## Overview

ethicalads.io presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#161c2d`, `#869ab8`, and `#384c74`, with typography led by the captured fallback stack. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#161c2d` | text on page content in the footer |
| color.text | `#869ab8` | text on page content in the footer |
| color.text | `#384c74` | text on page content in the main |
| color.text | `#f9fbfd` | text on page content |
| color.surface | `#2c82b9` | surface on page content |
| color.text | `#ffffff` | text on page content |
| color.text | `#505050` | text on page content in the main |
| color.surface | `#000000` | surface on page content in the main |
| color.text | `#506690` | text on page content in the nav |
| color.text | `#088cdb` | text on page content in the main |

### Typography

No structured typography observations were returned.

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `0px 20px` | padding | page content |
| `0px 0px 16px` | margin | page content |
| `0px 0px 12px` | margin | page content |
| `0px -20px` | margin | page content |
| `0px 0px 8px` | margin | page content |
| `0px 508px` | margin | page content |
| `0px 20px 48px` | padding | page content |
| `9px 16px` | padding | page content |

### Shape and depth

The captured pages use `1px solid 6px`, `0px none 3px`, and `1px solid 6px` border treatments.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#2c82b9` and `#000000`. Text colors include `#161c2d`, `#869ab8`, and `#384c74`. Keep image-derived colors separate from interface colors.

## Typography

No structured typography roles were returned.

## Layout

The captured pages use values such as `0px 20px`, `0px 0px 16px`, `0px 0px 12px`, `0px -20px`, and `0px 0px 8px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#2c82b9` and `#000000`. No structured gradient or shadow treatment is established.

## Components and states

The captured pages include repeated styling on <div>, <a>, <p>, <li>, <ul>, <h3>, <h2>, and <strong> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

## Responsive behavior

The captured token set does not establish breakpoint values or mobile behavior. Validate stacking, navigation changes, image treatment, and type scaling against the representative captures before implementing a responsive adaptation.

## Practical implementation guidance

- Preserve the dark surface relationship and the measured type hierarchy before adding decorative treatment.
- Start from the returned typography, spacing, color, and border values; name any new scale or semantic role as an adaptation rather than as a source fact.
- Keep the fallback choice separate from licensing decisions.
- Use screenshots to validate component anatomy, responsive behavior, focus treatment, and motion before shipping.
- Avoid introducing gradients or shadows beyond the captured treatment; none are established.

## Scope note

The guide uses representative captured pages. The evidence supports the values and observations above; it does not establish component semantics, interaction states, motion timing, breakpoint rules, font licensing, or a complete source stylesheet.

## Colors

- `#161c2d`
- `#869ab8`
- `#384c74`
- `#f9fbfd`
- `#2c82b9`
- `#ffffff`
- `#505050`
- `#000000`
- `#506690`
- `#088cdb`

# How deepwiki.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/deepwiki.com-design)

Last updated: 2026-08-03

## Captured pages

[![bagusindrayana/ews-concept-new | DeepWiki](https://pin.fontofweb.com/8114?format=jpg)](https://design.withfudge.com/share/pin-8114)

[bagusindrayana/ews-concept-new | DeepWiki](https://design.withfudge.com/share/pin-8114)

[![bagusindrayana/ews-concept-new | DeepWiki](https://pin.fontofweb.com/8113?format=jpg)](https://design.withfudge.com/share/pin-8113)

[bagusindrayana/ews-concept-new | DeepWiki](https://design.withfudge.com/share/pin-8113)

[![DeepWiki | AI documentation you can talk to, for every repo](https://pin.fontofweb.com/8112?format=jpg)](https://design.withfudge.com/share/pin-8112)

[DeepWiki | AI documentation you can talk to, for every repo](https://design.withfudge.com/share/pin-8112)

## Overview

deepwiki.com presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#333333`, `#000000`, and `#666666`, with typography led by **Geist** and **System**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#333333` | text on page content |
| color.surface | `#000000` | surface on page content |
| color.text | `#666666` | text on page content |
| color.surface | `#e5e5e5` | surface on page content |
| color.surface | `#f2f1f0` | surface on page content in the button |
| color.text | `#71717b` | text on page content |
| color.surface | `#f8f7f6` | surface on page content |
| color.text | `#1e2939` | text on page content |
| color.border | `#c0c0c0` | border on page content |
| color.border | `#d1d1d1` | border on page content |
| color.surface | `#e8e8e8` | surface on page content |
| color.surface | `#f5f5f5` | surface on page content |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **Geist** | 16px | 400 | 24px | normal | <div>, <ul>, <button> in the button, <span>, and <a> |
| type.body-14.8px | **Geist** | 14.8px | 400 | 25.9px | normal | <div>, <li>, <ul>, <p>, and <ol> |
| type.body-14px | **Geist** | 14px | 400 | 20px | normal | <a>, <div>, <ul>, <button> in the button, <li>, and <span> in the button |
| type.utility-12px | **Geist** | 12px | 400 | 16px | normal | <div>, <a>, <p>, and <span> |
| type.heading-22px | **Geist** | 22px | 700 | 30px | -0.55px | <h1> |
| type.heading-20px | **Geist** | 20px | 700 | 28px | -0.3px | <h2> |
| type.body-18px | **Geist** | 18px | 500 | 18px | normal | <span> and <h3> |
| type.heading-14.8px | **Geist** | 14.8px | 600 | 25.9px | normal | <strong> |
| type.body-20px | **Geist** | 20px | 300 | 28px | normal | <h1> |
| type.utility-12px | **System** | 12px | 500 | 16px | normal | <span> |
| type.body-18px | **Geist** | 18px | 400 | 18px | normal | <a> |
| type.utility-12.95px | **Geist** | 12.95px | 600 | 19.425px | normal | <strong> |
| type.body-14px | **Geist** | 14px | 500 | 20px | normal | <button> in the button, <span> in the button, and <a> |
| type.utility-12px | **Geist** | 12px | 300 | 16px | normal | <span> in the button |
| type.body-14px | **Geist** | 14px | 300 | 20px | normal | <p> |
| type.utility-11.0075px | **System** | 11.0075px | 600 | 15px | normal | <code> |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `6px 8px` | padding | page content |
| `12px` | padding | page content |
| `0px 0px 0px 6.66px` | padding | page content |
| `5.18px 0px` | margin | page content |
| `0px 24px` | padding | page content |
| `32px 0px` | padding | page content |
| `17.02px 0px` | margin | page content |
| `0px 0px 4px` | margin | page content |

### Shape and depth

The captured pages use `0px none 4px`, `1px solid 8.4px`, `0px none 8.4px`, `1px 0px 0px solid 0px`, `1px solid 8.4px`, `0px none 6.4px`, `0px none 3.35544e+07px`, and `1px solid 8.4px` border treatments. Recorded gradients include `linear-gradient(68.43deg, rgba(56, 135, 148, 0.2) 0%, rgba(246, 246, 246, 0.2) 85.75%)`. Recorded shadows include `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px` and `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px rgb(51,51,51)`.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#000000`, `#e5e5e5`, and `#f2f1f0`. Text colors include `#333333`, `#666666`, and `#71717b`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Geist** and **System**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `6px 8px`, `12px`, `0px 0px 0px 6.66px`, `5.18px 0px`, and `0px 24px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#000000`, `#e5e5e5`, `#f2f1f0`, and `#f8f7f6`. Depth is supported by the returned gradients and shadows.

## Components and states

The captured pages include repeated styling on <div>, <h1>, <li>, <ul>, <span>, <a>, <button>, and <p> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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

- `#333333`
- `#000000`
- `#666666`
- `#e5e5e5`
- `#f2f1f0`
- `#71717b`
- `#f8f7f6`
- `#1e2939`
- `#c0c0c0`
- `#d1d1d1`
- `#e8e8e8`
- `#f5f5f5`
- `#737373`
- `#e0e0e0`
- `#ffffff`
- `#2b7fff`

## Typography captured from deepwiki.com

- **Geist** — weight 400 · size 16px
- **System** — weight 500 · size 12px

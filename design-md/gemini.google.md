# How gemini.google is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/gemini.google-design)

Last updated: 2026-08-03

## Captured pages

[![Google AI Pro and Ultra — get access to Gemini 3 Pro and more](https://pin.fontofweb.com/6640?format=jpg)](https://design.withfudge.com/share/pin-6640)

[Google AI Pro and Ultra — get access to Gemini 3 Pro and more](https://design.withfudge.com/share/pin-6640)

[![Gemini AI Nano Banana Pro: Google's AI Image Generator & Photo Editor](https://pin.fontofweb.com/4978?format=jpg)](https://design.withfudge.com/share/pin-4978)

[Gemini AI Nano Banana Pro: Google's AI Image Generator & Photo Editor](https://design.withfudge.com/share/pin-4978)

[![Gemini AI Nano Banana Pro: Google's AI Image Generator & Photo Editor](https://pin.fontofweb.com/4977?format=jpg)](https://design.withfudge.com/share/pin-4977)

[Gemini AI Nano Banana Pro: Google's AI Image Generator & Photo Editor](https://design.withfudge.com/share/pin-4977)

[![Gemini AI Nano Banana Pro: Google's AI Image Generator & Photo Editor](https://pin.fontofweb.com/4976?format=jpg)](https://design.withfudge.com/share/pin-4976)

[Gemini AI Nano Banana Pro: Google's AI Image Generator & Photo Editor](https://design.withfudge.com/share/pin-4976)

[![Gemini AI Nano Banana Pro: Google's AI Image Generator & Photo Editor](https://pin.fontofweb.com/4975?format=jpg)](https://design.withfudge.com/share/pin-4975)

[Gemini AI Nano Banana Pro: Google's AI Image Generator & Photo Editor](https://design.withfudge.com/share/pin-4975)

[![Google AI Pro & Ultra — get access to Gemini 2.5 Pro & more](https://pin.fontofweb.com/4442?format=jpg)](https://design.withfudge.com/share/pin-4442)

[Google AI Pro & Ultra — get access to Gemini 2.5 Pro & more](https://design.withfudge.com/share/pin-4442)

[![Google AI Pro & Ultra — get access to Gemini 2.5 Pro & more](https://pin.fontofweb.com/4441?format=jpg)](https://design.withfudge.com/share/pin-4441)

[Google AI Pro & Ultra — get access to Gemini 2.5 Pro & more](https://design.withfudge.com/share/pin-4441)

[![Google AI Pro & Ultra — get access to Gemini 2.5 Pro & more](https://pin.fontofweb.com/4440?format=jpg)](https://design.withfudge.com/share/pin-4440)

[Google AI Pro & Ultra — get access to Gemini 2.5 Pro & more](https://design.withfudge.com/share/pin-4440)

## Overview

gemini.google presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#000000`, `#666666`, and `#078efb`, with typography led by **Google Sans**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#000000` | text on page content in the main |
| color.text | `#666666` | text on page content in the main |
| color.text | `#078efb` | text on page content in the main |
| color.border | `#e5e5e5` | border on page content in the main |
| color.text | `#ffffff` | text on page content in the button |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **Google Sans** | 16px | 400 | 24px | normal | <div> in the main, <ul> in the main, <button> in the button, and <a> in the main |
| type.body-16px | **Google Sans** | 16px | 400 | 22.4px | 0.1px | <p> in the main |
| type.display-48px | **Google Sans** | 48px | 500 | 52.8px | -1.92px | <h2> in the main |
| type.body-20px | **Google Sans** | 20px | 500 | 28px | normal | <h3> in the main |
| type.body-18px | **Google Sans** | 18px | 500 | 25.2px | 0.1px | <div> in the button |
| type.body-16px | **Google Sans** | 16px | 500 | 24px | normal | <div> in the main |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `0px 368px` | padding | page content |
| `0px 16px 10px` | padding | page content |
| `0px 0px 56px` | margin | page content |
| `60px 0px 0px` | margin | page content |
| `0px 160px` | margin | page content |
| `16px 0px 0px` | margin | page content |
| `3px` | padding | page content |
| `12px 24px` | padding | page content |

### Shape and depth

The captured pages use `1px solid 100px`, `0px none 4px`, and `0px none 2px` border treatments.

## Colors

The visual system is predominantly dark surface treatment. Surface roles are not fully established. Text colors include `#000000`, `#666666`, and `#078efb`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Google Sans**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `0px 368px`, `0px 16px 10px`, `0px 0px 56px`, `60px 0px 0px`, and `0px 160px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. The surface palette is not fully established. No structured gradient or shadow treatment is established.

## Components and states

The captured pages include repeated styling on <div>, <ul>, <h3>, <p>, <h2>, <button>, and <a> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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
- `#666666`
- `#078efb`
- `#e5e5e5`
- `#ffffff`

## Typography captured from gemini.google

- **Google Sans** — weight 400 · size 16px

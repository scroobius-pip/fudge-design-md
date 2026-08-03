# How dash.dropbox.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/dash.dropbox.com-design)

Last updated: 2026-08-03

## Captured pages

[![Dropbox Dash: Find anything. Protect everything.](https://pin.fontofweb.com/5914?format=jpg)](https://design.withfudge.com/share/pin-5914)

[Dropbox Dash: Find anything. Protect everything.](https://design.withfudge.com/share/pin-5914)

[![Dropbox Dash x McLaren F1 Team](https://pin.fontofweb.com/3565?format=jpg)](https://design.withfudge.com/share/pin-3565)

[Dropbox Dash x McLaren F1 Team](https://design.withfudge.com/share/pin-3565)

[![Dropbox Dash x McLaren F1 Team](https://pin.fontofweb.com/3564?format=jpg)](https://design.withfudge.com/share/pin-3564)

[Dropbox Dash x McLaren F1 Team](https://design.withfudge.com/share/pin-3564)

[![Dropbox Dash x McLaren F1 Team](https://pin.fontofweb.com/3563?format=jpg)](https://design.withfudge.com/share/pin-3563)

[Dropbox Dash x McLaren F1 Team](https://design.withfudge.com/share/pin-3563)

[![Dropbox Dash x McLaren F1 Team](https://pin.fontofweb.com/3562?format=jpg)](https://design.withfudge.com/share/pin-3562)

[Dropbox Dash x McLaren F1 Team](https://design.withfudge.com/share/pin-3562)

[![Dropbox Dash x McLaren F1 Team](https://pin.fontofweb.com/3561?format=jpg)](https://design.withfudge.com/share/pin-3561)

[Dropbox Dash x McLaren F1 Team](https://design.withfudge.com/share/pin-3561)

[![Dropbox Dash x McLaren F1 Team](https://pin.fontofweb.com/3560?format=jpg)](https://design.withfudge.com/share/pin-3560)

[Dropbox Dash x McLaren F1 Team](https://design.withfudge.com/share/pin-3560)

[![Dropbox Dash x McLaren F1 Team](https://pin.fontofweb.com/3559?format=jpg)](https://design.withfudge.com/share/pin-3559)

[Dropbox Dash x McLaren F1 Team](https://design.withfudge.com/share/pin-3559)

## Overview

dash.dropbox.com presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#000000`, `#736c64`, and `#ffffff`, with typography led by **Atlas Grotesk** and **Sharp Grotesk Db Cyr 20**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#000000` | text on page content in the header |
| color.text | `#736c64` | text on page content in the button |
| color.text | `#ffffff` | text on page content |
| color.text | `#0061fe` | text on page content |
| color.text | `#f7f5f2` | text on page content in the main |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-18.5667px | **Atlas Grotesk** | 18.5667px | 400 | 27.85px | normal | <div> in the header and <div> in the main |
| type.body-23.2083px | **Atlas Grotesk** | 23.2083px | 400 | 34.8125px | normal | <p> in the main |
| type.display-92.8333px | **Sharp Grotesk Db Cyr 20** | 92.8333px | 500 | 83.55px | -2.785px | <h1> in the main |
| type.body-16.2458px | **Atlas Grotesk** | 16.2458px | 500 | 20.7134px | normal | <div> |
| type.body-16.2458px | **Atlas Grotesk** | 16.2458px | 500 | 16.2458px | normal | <div> in the header, <div> in the main, and <a> |
| type.body-16.2458px | **Atlas Grotesk** | 16.2458px | 400 | 20.8874px | normal | <div> in the button and <a> in the header |

### Spacing

No structured spacing observations were returned.

### Shape and depth

Recorded gradients include `linear-gradient(rgb(51, 128, 254)`.

## Colors

The visual system is predominantly dark surface treatment. Surface roles are not fully established. Text colors include `#000000`, `#736c64`, and `#ffffff`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Atlas Grotesk** and **Sharp Grotesk Db Cyr 20**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

No structured spacing values were returned. Container widths, grid rules, and section rhythm require screenshot review.

## Visual language

The captured visual language is predominantly dark surface treatment. The surface palette is not fully established. Depth is supported by the returned gradients.

## Components and states

The captured pages include repeated styling on <div>, <h1>, <p>, and <a> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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
- `#736c64`
- `#ffffff`
- `#0061fe`
- `#f7f5f2`

## Typography captured from dash.dropbox.com

- **Atlas Grotesk** — weight 400 · size 18.5667px
- **Sharp Grotesk Db Cyr 20** — weight 500 · size 92.8333px

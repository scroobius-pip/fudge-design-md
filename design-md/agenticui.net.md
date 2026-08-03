# How agenticui.net is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/agenticui.net-design)

Last updated: 2026-08-03

## Captured pages

[![Agentic Design System](https://pin.fontofweb.com/5933?format=jpg)](https://design.withfudge.com/share/pin-5933)

[Agentic Design System](https://design.withfudge.com/share/pin-5933)

[![Agentic Design System](https://pin.fontofweb.com/5932?format=jpg)](https://design.withfudge.com/share/pin-5932)

[Agentic Design System](https://design.withfudge.com/share/pin-5932)

[![Preorder Agentic UI](https://pin.fontofweb.com/5931?format=jpg)](https://design.withfudge.com/share/pin-5931)

[Preorder Agentic UI](https://design.withfudge.com/share/pin-5931)

[![Preorder Agentic UI](https://pin.fontofweb.com/5930?format=jpg)](https://design.withfudge.com/share/pin-5930)

[Preorder Agentic UI](https://design.withfudge.com/share/pin-5930)

## Overview

agenticui.net presents a mixed light and dark surface treatment in the captured pages. The system is anchored by `#000000`, `#616161`, and `#191919`, with typography led by **Geist**, **Inter**, and **Ibm Plex Mono**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#000000` | text on page content |
| color.text | `#616161` | text on page content |
| color.text | `#191919` | text on page content |
| color.text | `#8c8c8c` | text on page content |
| color.text | `#0000ee` | text on page content |
| color.text | `#7d7d7d` | text on page content |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **Geist** | 16px | 400 | 22.4px | normal | <p> |
| type.utility-13px | **Geist** | 13px | 400 | 16.9px | -0.3px | <p> and <a> |
| type.body-14px | **Inter** | 14px | 400 | 19.6px | -0.3px | <p> |
| type.utility-13px | **Ibm Plex Mono** | 13px | 400 | 16.9px | 0.2px | <p> |
| type.utility-10px | **Ibm Plex Mono** | 10px | 400 | 11px | 0.2px | <p> and <a> |

### Spacing

No structured spacing observations were returned.

### Shape and depth

No structured border, gradient, or shadow treatment was returned.

## Colors

The visual system is mixed light and dark surface treatment. Surface roles are not fully established. Text colors include `#000000`, `#616161`, and `#191919`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Geist**, **Inter**, and **Ibm Plex Mono**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

No structured spacing values were returned. Container widths, grid rules, and section rhythm require screenshot review.

## Visual language

The captured visual language is mixed light and dark surface treatment. The surface palette is not fully established. No structured gradient or shadow treatment is established.

## Components and states

The captured pages include repeated styling on <div>, <p>, and <a> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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
- `#616161`
- `#191919`
- `#8c8c8c`
- `#0000ee`
- `#7d7d7d`

## Typography captured from agenticui.net

- **Geist** — weight 400 · size 16px
- **Inter** — weight 400 · size 14px
- **Ibm Plex Mono** — weight 400 · size 10px

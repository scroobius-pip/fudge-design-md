# How baked.design is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/baked.design-design)

Last updated: 2026-08-03

## Captured pages

[![Baked Design - Product Design Partner](https://pin.fontofweb.com/6495?format=jpg)](https://design.withfudge.com/share/pin-6495)

[Baked Design - Product Design Partner](https://design.withfudge.com/share/pin-6495)

[![Baked Design - Product Design Partner](https://pin.fontofweb.com/6319?format=jpg)](https://design.withfudge.com/share/pin-6319)

[Baked Design - Product Design Partner](https://design.withfudge.com/share/pin-6319)

[![Baked Design - Product Design Partner](https://pin.fontofweb.com/5265?format=jpg)](https://design.withfudge.com/share/pin-5265)

[Baked Design - Product Design Partner](https://design.withfudge.com/share/pin-5265)

[![Baked Design - Product Design Partner](https://pin.fontofweb.com/5264?format=jpg)](https://design.withfudge.com/share/pin-5264)

[Baked Design - Product Design Partner](https://design.withfudge.com/share/pin-5264)

[![Baked Design - Product Design Partner](https://pin.fontofweb.com/5263?format=jpg)](https://design.withfudge.com/share/pin-5263)

[Baked Design - Product Design Partner](https://design.withfudge.com/share/pin-5263)

[![Baked Design - Product Design Partner](https://pin.fontofweb.com/5262?format=jpg)](https://design.withfudge.com/share/pin-5262)

[Baked Design - Product Design Partner](https://design.withfudge.com/share/pin-5262)

[![Baked Design - Product Design Partner](https://pin.fontofweb.com/5261?format=jpg)](https://design.withfudge.com/share/pin-5261)

[Baked Design - Product Design Partner](https://design.withfudge.com/share/pin-5261)

[![Baked Design - Product Design Partner](https://pin.fontofweb.com/5260?format=jpg)](https://design.withfudge.com/share/pin-5260)

[Baked Design - Product Design Partner](https://design.withfudge.com/share/pin-5260)

## Overview

baked.design presents a mixed light and dark surface treatment in the captured pages. The system is anchored by `#000000`, `#ffffff`, and `#404040`, with typography led by **System** and **Inter**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#000000` | text on page content |
| color.text | `#ffffff` | text on page content |
| color.text | `#404040` | text on page content |
| color.text | `#0000ee` | text on page content |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.utility-12px | **System** | 12px | 400 | normal | normal | <div> and <a> |
| type.body-14px | **Inter** | 14px | 400 | 20px | normal | <p> and <span> |
| type.utility-12px | **Inter** | 12px | 400 | 20px | normal | <p> |
| type.body-16px | **Inter** | 16px | 400 | 22px | normal | <p> |
| type.body-14px | **Inter** | 14px | 500 | 16px | -0.2px | <p> |
| type.body-14px | **Inter** | 14px | 400 | 14px | normal | <p> |
| type.body-14px | **Inter** | 14px | 400 | 24px | normal | <p> |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `30px 0px 0px` | padding | page content |
| `30px` | padding | page content |
| `0px 24px 50px` | padding | page content |

### Shape and depth

The captured pages use `0px none 20px`, `0px none 999px`, and `0px none 52px` border treatments. Recorded gradients include `linear-gradient(rgb(0, 86, 161) 0%, rgb(120, 192, 255) 100%)`.

## Colors

The visual system is mixed light and dark surface treatment. Surface roles are not fully established. Text colors include `#000000`, `#ffffff`, and `#404040`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **System** and **Inter**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `30px 0px 0px`, `30px`, and `0px 24px 50px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is mixed light and dark surface treatment. The surface palette is not fully established. Depth is supported by the returned gradients.

## Components and states

The captured pages include repeated styling on <div>, <p>, <a>, and <span> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

## Responsive behavior

The captured token set does not establish breakpoint values or mobile behavior. Validate stacking, navigation changes, image treatment, and type scaling against the representative captures before implementing a responsive adaptation.

## Practical implementation guidance

- Preserve the mixed light/dark surface relationship and the measured type hierarchy before adding decorative treatment.
- Start from the returned typography, spacing, color, and border values; name any new scale or semantic role as an adaptation rather than as a source fact.
- Keep the captured font families separate from licensing decisions.
- Use screenshots to validate component anatomy, responsive behavior, focus treatment, and motion before shipping.
- Avoid introducing gradients or shadows beyond the captured treatment; the returned evidence includes those treatments.

## Scope note

The guide uses representative captured pages. The evidence supports the values and observations above; it does not establish component semantics, interaction states, motion timing, breakpoint rules, font licensing, or a complete source stylesheet.

## Colors

- `#000000`
- `#ffffff`
- `#404040`
- `#0000ee`

## Typography captured from baked.design

- **System** — weight 400 · size 12px
- **Inter** — weight 400 · size 14px

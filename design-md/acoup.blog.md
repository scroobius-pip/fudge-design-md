# How acoup.blog is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/acoup.blog-design)

Last updated: 2026-08-03

## Captured pages

[![Collections: Raising Carthaginian Armies, Part V: How a Carthaginian Army Fights – A Collection of Unmitigated Pedantry](https://pin.fontofweb.com/9512?format=jpg)](https://design.withfudge.com/share/pin-9512)

[Collections: Raising Carthaginian Armies, Part V: How a Carthaginian Army Fights – A Collection of Unmitigated Pedantry](https://design.withfudge.com/share/pin-9512)

[![A Collection of Unmitigated Pedantry – A look at history and popular culture](https://pin.fontofweb.com/9511?format=jpg)](https://design.withfudge.com/share/pin-9511)

[A Collection of Unmitigated Pedantry – A look at history and popular culture](https://design.withfudge.com/share/pin-9511)

[![A Collection of Unmitigated Pedantry – A look at history and popular culture](https://pin.fontofweb.com/9510?format=jpg)](https://design.withfudge.com/share/pin-9510)

[A Collection of Unmitigated Pedantry – A look at history and popular culture](https://design.withfudge.com/share/pin-9510)

## Overview

acoup.blog presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#b5b5b5`, `#413e4a`, and `#ffffff`, with typography led by **Georgia**, **Applesystem**, **Fondamento**, and **System**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#b5b5b5` | text on page content |
| color.surface | `#413e4a` | surface on page content |
| color.text | `#ffffff` | text on page content in the header |
| color.text | `#e8c3df` | text on page content in the main |
| color.text | `#939393` | text on page content in the aside |
| color.text | `#000000` | text on page content |
| color.text | `#bcb2b8` | text on page content in the header |
| color.text | `#b3b3b1` | text on page content in the main |
| color.text | `#404040` | text on page content in the aside |
| color.border | `#a1a1a1` | border on page content in the aside |
| color.text | `#6d6d6d` | text on page content in the main |
| color.text | `#eeeeee` | text on page content in the button |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-18px | **Georgia** | 18px | 400 | 31.5px | normal | <body>, <div>, <header> in the header, <div> in the header, <article> in the main, <main> in the main, <img> in the main, <a> in the main, and <div> in the main |
| type.body-16px | **Georgia** | 16px | 400 | 28px | normal | <label> in the aside, <form> in the aside, <aside> in the aside, <div> in the aside, and <p> in the aside |
| type.body-19px | **Georgia** | 19px | 400 | 33.25px | normal | <p> in the main, <div> in the main, and <a> in the main |
| type.heading-17px | **Applesystem** | 17px | 700 | 29.75px | normal | <ul> in the nav, <div> in the nav, and <nav> in the nav |
| type.body-15px | **Georgia** | 15px | 400 | 26.25px | normal | <aside> in the aside and <ul> in the aside |
| type.body-16px | **System** | 16px | 400 | normal | normal | <html> |
| type.display-47px | **Fondamento** | 47px | 400 | 61.1px | normal | <h1> in the header and <a> in the header |
| type.display-38px | **Fondamento** | 38px | 400 | 45.6px | normal | <p> in the header, <a> in the header, and <h1> in the header |
| type.body-14px | **Applesystem** | 14px | 400 | 24.5px | normal | <div> in the main, <span> in the footer, <div> in the footer, <footer> in the footer, and <a> in the footer |
| type.body-15px | **Georgia** | 15px | 400 | 21px | normal | <li> in the aside |
| type.body-14px | **Applesystem** | 14px | 400 | normal | normal | <div> |
| type.heading-17px | **Georgia** | 17px | 700 | 23.8px | normal | <a> in the aside |
| type.heading-17px | **Applesystem** | 17px | 700 | 18.7px | normal | <h1> in the aside |
| type.body-16px | **Georgia** | 16px | 400 | 32px | normal | <input> in the aside |
| type.body-16px | **Applesystem** | 16px | 400 | 28px | normal | <a> in the main |
| type.body-17px | **Fondamento** | 17px | 400 | 18.7px | normal | <h1> in the aside |
| type.body-13.5501px | **Georgia** | 13.5501px | 400 | 23.7127px | normal | <a> in the aside |
| type.utility-12.1843px | **Georgia** | 12.1843px | 400 | 21.3225px | normal | <a> in the aside |
| type.body-14.1572px | **Georgia** | 14.1572px | 400 | 24.7751px | normal | <a> in the aside |
| type.body-24.7805px | **Georgia** | 24.7805px | 400 | 43.3659px | normal | <a> in the aside |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `47.25px` | margin-top | page content |
| `0px 31.5px` | padding | page content |
| `31.5px` | padding-right | page content |
| `31.5px` | padding-left | page content |
| `47.25px 162px 0px` | margin | page content |
| `162px` | margin-right | page content |
| `162px` | margin-left | page content |
| `0px -342.406px 0px 0px` | margin | page content |

### Shape and depth

The captured pages use `1px 0px 0px solid none none 0px`, `0px none 3px`, `1px solid 3px`, `1px solid 3px`, and `0px none 44px` border treatments.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#413e4a` and `#656565`. Text colors include `#b5b5b5`, `#ffffff`, and `#e8c3df`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Georgia**, **Applesystem**, **System**, and **Fondamento**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `47.25px`, `0px 31.5px`, `31.5px`, `31.5px`, and `47.25px 162px 0px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#413e4a` and `#656565`. No structured gradient or shadow treatment is established.

## Components and states

The captured pages include repeated styling on <div>, <body>, <ul>, <nav>, <html>, <button>, <header>, and <p> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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

- `#b5b5b5`
- `#413e4a`
- `#ffffff`
- `#e8c3df`
- `#939393`
- `#000000`
- `#bcb2b8`
- `#b3b3b1`
- `#404040`
- `#a1a1a1`
- `#6d6d6d`
- `#eeeeee`
- `#656565`

## Typography captured from acoup.blog

- **Georgia** — weight 400 · size 18px
- **Applesystem** — weight 400 · size 14px
- **Fondamento** — weight 400 · size 38px
- **System** — weight 400 · size 16px

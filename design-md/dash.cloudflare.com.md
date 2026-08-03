# How dash.cloudflare.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/dash.cloudflare.com-design)

Last updated: 2026-08-03

## Captured pages

[![fontofweb.com | fontofweb.com | xxx@xxx.com's Account | Cloudflare](https://pin.fontofweb.com/10060?format=jpg)](https://design.withfudge.com/share/pin-10060)

[fontofweb.com | fontofweb.com | xxx@xxx.com's Account | Cloudflare](https://design.withfudge.com/share/pin-10060)

[![Domains | Registrations | xxx@xxx.com's Account | Cloudflare](https://pin.fontofweb.com/10039?format=jpg)](https://design.withfudge.com/share/pin-10039)

[Domains | Registrations | xxx@xxx.com's Account | Cloudflare](https://design.withfudge.com/share/pin-10039)

[![Domains | Registrations | xxx@xxx.com's Account | Cloudflare](https://pin.fontofweb.com/9843?format=jpg)](https://design.withfudge.com/share/pin-9843)

[Domains | Registrations | xxx@xxx.com's Account | Cloudflare](https://design.withfudge.com/share/pin-9843)

[![Domains | Registrations | Cloudflare](https://pin.fontofweb.com/9840?format=jpg)](https://design.withfudge.com/share/pin-9840)

[Domains | Registrations | Cloudflare](https://design.withfudge.com/share/pin-9840)

[![Domains | Registrations | Cloudflare](https://pin.fontofweb.com/9839?format=jpg)](https://design.withfudge.com/share/pin-9839)

[Domains | Registrations | Cloudflare](https://design.withfudge.com/share/pin-9839)

[![Billing | Billable usage | xxx@xxx.com's Account | Cloudflare](https://pin.fontofweb.com/9664?format=jpg)](https://design.withfudge.com/share/pin-9664)

[Billing | Billable usage | xxx@xxx.com's Account | Cloudflare](https://design.withfudge.com/share/pin-9664)

[![Account API tokens | Sim04ful@gmail.com's Account | Cloudflare](https://pin.fontofweb.com/9239?format=jpg)](https://design.withfudge.com/share/pin-9239)

[Account API tokens | Sim04ful@gmail.com's Account | Cloudflare](https://design.withfudge.com/share/pin-9239)

[![Account API tokens | Sim04ful@gmail.com's Account | Cloudflare](https://pin.fontofweb.com/9238?format=jpg)](https://design.withfudge.com/share/pin-9238)

[Account API tokens | Sim04ful@gmail.com's Account | Cloudflare](https://design.withfudge.com/share/pin-9238)

## Overview

dash.cloudflare.com presents a predominantly dark surface treatment in the captured pages. The system is anchored by `#d9d9d9`, `#030303`, and `#000000`, with typography led by **Inter**, **Applesystem**, and **Paper Mono**. The guide below names reusable design roles only where the captured evidence supports them.

The reference set uses representative captured pages. It is a design reference, not a claim about the site's private source code or a complete responsive specification.

## Design tokens

The token names are practical labels for the recorded values. They are not claims about the source site's variable names.

### Colors

| token | value | observed use |
| --- | --- | --- |
| color.text | `#d9d9d9` | text on page content in the aside |
| color.surface | `#030303` | surface on page content in the aside |
| color.text | `#000000` | text on page content |
| color.surface | `#0a0a0a` | surface on page content in the button |
| color.text | `#f5f5f5` | text on page content in the aside |
| color.border | `#333333` | border on page content in the aside |
| color.shadow | `#262626` | shadow on page content in the main |
| color.surface | `#0f0f0f` | surface on page content in the button |
| color.surface | `#060606` | surface on page content in the main |
| color.text | `#ffffff` | text on page content |
| color.text | `#a1a1a1` | text on page content in the button |
| color.text | `#737373` | text on page content in the main |

### Typography

| token | font family | size | weight | line height | letter spacing | observed use |
| --- | --- | --- | --- | --- | --- | --- |
| type.body-16px | **Inter** | 16px | 400 | 24px | -0.16px | <html>, <div> in the aside, <aside> in the aside, <div>, <body>, <div> in the nav, <nav> in the nav, <svg> in the aside, <a> in the aside, <li> in the nav, <ul> in the nav, <a> in the nav, <button> in the button, <header> in the header, <div> in the header, <main> in the main, <div> in the main, <span> in the header, <section> in the main, <ul> in the main, <section>, <a>, <span>, <span> in the main, <div> in the footer, and <div> in the button |
| type.body-14px | **Inter** | 14px | 400 | 20px | -0.16px | <p>, <div> in the main, <div>, <svg>, <input>, <form>, <span>, and <a> |
| type.body-14px | **Inter** | 14px | 500 | 20px | -0.16px | <a> in the header, <span>, <div> in the main, <div>, <span> in the main, <a> in the main, and <a> in the nav |
| type.body-14px | **Inter** | 14px | 500 | 21px | -0.14px | <button> in the button, <span> in the button, and <div> in the button |
| type.utility-13px | **Inter** | 13px | 400 | 15.2941px | -0.16px | <span> in the main, <a> in the main, <div> in the main, <li> in the main, <svg> in the main, <p>, <a> in the footer, <span> in the footer, and <span> |
| type.utility-12px | **Inter** | 12px | 400 | 16px | -0.16px | <p> in the main, <span> in the main, <div> in the main, <a> in the main, <svg> in the main, <span>, <a>, <span> in the button, and <div> in the button |
| type.utility-13px | **Inter** | 13px | 500 | 19.5px | -0.13px | <button> in the button, <div> in the button, and <span> in the button |
| type.utility-13px | **Inter** | 13px | 500 | 15.2941px | -0.16px | <div> in the nav, <a> in the nav, <span> in the nav, <span> in the main, <label> in the main, <div> in the main, and <a> in the main |
| type.body-14px | **Applesystem** | 14px | 400 | normal | normal | <div> |
| type.utility-12px | **Inter** | 12px | 500 | 16px | -0.16px | <span> in the main, <p> in the main, <svg> in the main, <a>, and <div> in the main |
| type.heading-16px | **Inter** | 16px | 600 | 20px | -0.16px | <span> in the main, <h4> in the main, <h2>, and <div> in the main |
| type.utility-13px | **Inter** | 13px | 400 | 21.125px | -0.16px | <span> in the main and <label> in the main |
| type.utility-12px | **Inter** | 12px | 500 | 18px | -0.12px | <button> in the button and <span> in the button |
| type.heading-30px | **Inter** | 30px | 600 | 36px | -0.16px | <h1> |
| type.body-14px | **Inter** | 14px | 500 | 20px | 0.2px | <span> in the main and <div> in the main |
| type.body-14px | **Inter** | 14px | 400 | 21px | -0.14px | <button> in the button, <span> in the button, <div> in the button, and <svg> in the button |
| type.body-16px | **Inter** | 16px | 500 | 24px | -0.16px | <div> in the main |
| type.body-14px | **Inter** | 14px | 400 | 21px | -0.16px | <div> in the main |
| type.display-32px | **Inter** | 32px | 600 | 40px | -0.16px | <span> in the header, <div> in the header, and <h1> in the header |
| type.utility-13px | **Inter** | 13px | 400 | 19.5px | -0.13px | <div> in the button, <span> in the button, and <button> in the button |

### Spacing

| value | property | observed element |
| --- | --- | --- |
| `24px` | padding-left | page content |
| `24px` | padding-right | page content |
| `16px` | padding-top | page content |
| `24px` | gap | page content |
| `24px` | row-gap | page content |
| `24px` | column-gap | page content |
| `32px` | margin-bottom | page content |
| `0px 24px` | padding | page content |

### Shape and depth

The captured pages use `0px none 8px`, `1px solid 8px`, `0px 1px 0px 0px none solid none none 0px`, `0px 0px 1px none none solid 0px`, `0px none 12px`, `1px 0px 0px solid none none 0px`, `1px dashed 6px`, and `1px solid 5px` border treatments. Recorded shadows include `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgb(0, 0, 0) 0px 100px 0px 0px`, `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, oklch(0.269 0 0) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px`, `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, oklch(0.32 0 0) 0px 0px 0px 1px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px`, `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, oklch(0.32 0 0) 0px 0px 0px 1px, oklab(0 0 0 / 0.05) 0px 4px 6px -1px, oklab(0 0 0 / 0.05) 0px 2px 4px -2px`, `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, oklch(0.32 0 0) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px`, `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px`, `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, oklab(0.269 0 0 / 0.7) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px`, and `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px rgb(245,245,245)`.

## Colors

The visual system is predominantly dark surface treatment. Surface colors include `#030303`, `#0a0a0a`, and `#0f0f0f`. Text colors include `#d9d9d9`, `#000000`, and `#f5f5f5`. Keep image-derived colors separate from interface colors.

## Typography

The captured type system uses **Inter** and **Applesystem**. The table records measured size, weight, leading, and tracking where available; it does not establish licensing or a complete fallback stack.

## Layout

The captured pages use values such as `24px`, `24px`, `16px`, `24px`, and `24px` for padding and margin. These are measured usages, not a resolved scale. The available evidence does not establish container widths, grid rules, or breakpoints.

## Visual language

The captured visual language is predominantly dark surface treatment. Surface treatment centers on `#030303`, `#0a0a0a`, `#0f0f0f`, and `#060606`. Depth is supported by the returned shadows.

## Components and states

The captured pages include repeated styling on <div>, <html>, <aside>, <body>, <nav>, <svg>, <a>, and <span> elements. The evidence does not identify reusable component boundaries or interaction states. Treat loading, focus, hover, pressed, error, and disabled states as implementation work to validate rather than as captured facts.

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

- `#d9d9d9`
- `#030303`
- `#000000`
- `#0a0a0a`
- `#f5f5f5`
- `#333333`
- `#262626`
- `#0f0f0f`
- `#060606`
- `#ffffff`
- `#a1a1a1`
- `#737373`
- `#d4d4d4`
- `#171717`
- `#056dff`
- `#fafafa`

## Typography captured from dash.cloudflare.com

- **Inter** — weight 400 · size 16px
- **Applesystem** — weight 400 · size 14px
- **Paper Mono** — weight 700 · size 13px

# How groq.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/groq.com-design)

Last updated: 2026-07-28

## Design character

Groq’s marketing site is **fast, airy, and hardware-confident**. It pairs a warm off-white page canvas with large light-weight display headlines, charcoal body copy, and a single electric orange for primary actions. Hero moments drop a rounded dark stage onto the light page—chip photography, product demos, or copy blocks—so the brand oscillates between clean editorial whitespace and a contained black product theater. It feels premium developer-infrastructure, not neon startup chaos.

What should survive adaptation:
- Warm light page ground with generous margins
- Orange (`#f43e01` family) only on primary pills and key marks
- Huge, light (≈300) display lines with tight negative tracking
- Charcoal secondary/body (`#2d2f33`) instead of pure black paragraphs
- Dark inset stages with large corner radius as featured modules

## Foundations

### Color

Measured roles:
- Accent: `#f43e01`
- Primary text (on dark stages / inverse): `#ffffff`
- Primary/secondary text on light: `#2d2f33`

Visually, the page canvas is a warm off-white/cream; nav sits in that field with dark type. Orange appears on “Start Building”, “Learn More”, and small lightning marks—never as a full-bleed background in the captured frames. Logo wordmark is near-black with a simple bolt. Trust/logo rows stay monochrome so orange remains scarce.

### Typography

Declared families were not captured. Observed scale:
- Display: ~46px / ~60px line-height, weight 300, tracking ≈ -0.92px
- Section display: ~32px / ~42px, weight 300, tracking ≈ -0.64px
- Body / UI: 15–17px / ~21–24px, weight 400
- Fine print / meta: ~13px / ~20px
- Medium labels: 16px weight 500 on some nav/pricing UI

The signature is **light display type at large size**—thin, wide, confident. Body stays regular and compact so pricing tables and feature copy don’t bloat.

### Spacing and layout

Measured habits:
- Wide content gutters (margin-left/right often ~260px on desktop pricing/home stacks)
- Section vertical padding 48–120px
- Nav horizontal padding comfortable; CTA separated on the right
- Dark hero stage inset from the page edge with breathing room above logo strip and below trust bar

Layout grammar: **top marketing nav → full-width light sections alternating with inset dark stages → logo/trust row → optional persistent “try” bar**. Pricing continues the same light canvas with structured comparison blocks rather than a different theme.

## Visual language

**Shape.** Primary controls are full pills (`radius ~1000`). Featured stages use large rounded rectangles (~10px on some inner cards, much softer on the big hero well). The overall feel is continuous curves, not sharp tech grids.

**Borders.** Minimal. Separation is mostly surface color (cream vs charcoal stage) rather than stroked boxes.

**Shadows.** Not meaningfully observed—flat, high-contrast surfaces do the work.

**Imagery.** Hero silicon/chip photography centered on the dark stage; crisp product truth over abstract 3D gradients. Logo wall is flat monochrome marks.

**Motion.** Not established from stills (hardware may animate in product, but captures are static).

## Components and states

- **Nav:** text links with chevrons, centered wordmark, right-side Developers/Enterprise + solid orange “Start Building” pill.
- **Dark stage module:** rounded charcoal panel, small orange bolt, split headline/body, orange outline or solid pill, centered hardware visual.
- **Light sections:** oversized thin headlines, short supporting paragraphs in charcoal, occasional secondary buttons.
- **Trust row:** compact logo strip on cream.
- **Persistent prompt bar:** dark mini-bar (“Try the speed of Groq…”) with orange icon button—product teaser without leaving marketing.
- **Pricing:** same type ramp; structured plans with clear numeric hierarchy (from related pricing captures).

Buttons: solid orange pill (primary), dark/light ghost pills (secondary). Avoid inventing elaborate hover sets; stills show solid fills and simple outline pills.

## Responsive behavior

Captures cluster around large desktop widths (~1600–2048). Wide side margins imply a max content measure that should tighten on smaller viewports by reducing the 260px-class gutters before scaling type down. Dark stages should remain inset cards that can go full-bleed only when necessary. Pill CTAs stay pill-shaped at all widths.

## Practical guidance

**Preserve**
- Cream canvas + charcoal type + one orange
- Weight-300 oversized headlines with negative tracking
- Inset dark stages as the drama device
- Pill CTAs, never square blocks
- Hardware photography as proof, not stock metaphors

**Avoid**
- Purple AI gradients or glass cards that genericize the brand
- Heavy body type competing with thin display
- Orange backgrounds or orange body text
- Dense SaaS dashboard chrome on marketing pages

**Adaptation tips**
- Start with three tokens: canvas cream, ink `#2d2f33`, accent `#f43e01`
- Set display at 300/tight tracking; keep UI at 400–500
- Build sections as light bands interrupted by one rounded dark well each
- Pricing and home must share the same cream world so the site feels continuous

## Scope note

Studied home (multiple crops) and pricing captures. Measured accents and text roles are from structured color roles; the warm off-white canvas and chip photography are confirmed visually. Font family names, gradients, and motion were not declared or observed in depth.

## Captured pages

[![Groq home — silicon stage](https://pin.fontofweb.com/9478?format=jpg)](https://design.withfudge.com/share/pin-9478)

[Groq home — silicon stage](https://design.withfudge.com/share/pin-9478)

[![Groq home alternate](https://pin.fontofweb.com/9479?format=jpg)](https://design.withfudge.com/share/pin-9479)

[Groq home alternate](https://design.withfudge.com/share/pin-9479)

[![Pricing](https://pin.fontofweb.com/9480?format=jpg)](https://design.withfudge.com/share/pin-9480)

[Pricing](https://design.withfudge.com/share/pin-9480)

[![Pricing mid crop](https://pin.fontofweb.com/9481?format=jpg)](https://design.withfudge.com/share/pin-9481)

[Pricing mid crop](https://design.withfudge.com/share/pin-9481)

[![Pricing wide](https://pin.fontofweb.com/9482?format=jpg)](https://design.withfudge.com/share/pin-9482)

[Pricing wide](https://design.withfudge.com/share/pin-9482)

## Colors

- `#f43e01`
- `#ffffff`
- `#2d2f33`

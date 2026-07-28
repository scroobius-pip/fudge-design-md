# How grey.co is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/grey.co-design)

Last updated: 2026-07-28

## Design character

Grey is a **calm, photography-led neobank brand**: soft blue studio gradients, oversized white display type, and lifestyle portraits that feel fashion-editorial more than fintech-dashboard. The product promise (inclusive global banking) is told through people and space—open sky-blue sets, tailored casual wardrobe, phone-in-hand product glimpses—while UI chrome stays minimal: light nav, one solid blue CTA, and dark testimonial stages as contrast bands.

What should survive adaptation:

- **Soft blue atmospheric gradients** as hero environment (not flat corporate blue blocks)
- **Huge white humanist sans display** with slight negative tracking
- **Editorial photography** of real customers in styled sets
- **Single blue filled CTA** (“Get started — it’s free”)
- **Dark charcoal testimonial cards** as a deliberate counterweight to airy heroes

## Foundations

### Color

Measured text roles on the hero capture:

| Role | Hex | Notes |
|------|-----|--------|
| Text primary | `#ffffff` | Display and primary copy on blue/dark |
| Text secondary | `#f0f2f5` | Supporting lines, slightly cool off-white |

Visual system beyond those roles:

- **Hero atmosphere**: soft sky-to-periwinkle blue gradient studio backdrop
- **Primary CTA**: medium saturated blue fill, white label
- **Nav on hero**: white links; ghost/outline secondary control beside solid CTA in the header
- **Testimonial stage**: near-black rounded panel, white quote type, muted role label
- **Light bands** (where present): clean white/off-white resting surfaces between photo chapters

### Typography

Declared families were not captured. Observed hierarchy:

- **Display**: ~50–74px weight **700**, line-height ≈ font-size (tight stacks), tracking about **−1 to −1.5px** on largest lines
- **Subhead / mid**: ~28px medium; ~20px body-lead with ~32px line-height and slight negative tracking
- **Body / UI**: 14–16px at 400–500, line-height 20–24px
- **Eyebrow / labels**: 16px with positive letter-spacing (~2px) on some UI labels
- Tone is **geometric-humanist sans**, confident and friendly—not mono, not serif

### Spacing and layout

- Horizontal page padding commonly **~52–80px** on desktop; some modules pad **~70px** on all sides
- Hero uses large top padding (**~264px** in one measure) so type sits mid-viewport beside the model
- Section vertical padding often **120px**; stacked margins **10–20px** under headlines, **40–64px** between blocks
- Hero is a **split composition**: type + CTA left, full-height portrait right
- Testimonial is a **wide rounded dark card** with photo tile left and quote right; circular prev/next affordances

## Visual language

- **Radii**: soft product feel—**8–22px** on cards and media; **~16–20px** common; occasional **100px** pills on small controls
- **Borders**: 1–2px solid on chips and outline buttons; dashed 1px appears in some structural rules
- **Shadows**: light elevation (`0 4px 8px`, occasional larger blur) under floating cards—not heavy material stacks
- **Imagery**: high-end portrait photography, consistent cool color grade matching the blue set; product UI appears only as phone content inside the photo
- **Corners on testimonials**: large rounded dark stage with a stepped/cut bottom-right where carousel controls sit—distinctive silhouette

## Components and states

1. **Marketing header** — wordmark, language pill, text nav, Login text, outline or solid “Get started”
2. **Hero** — multi-line white display, two-line value prop, primary blue CTA, full-bleed studio portrait
3. **Primary button** — filled blue, medium radius, short benefit-led label
4. **Testimonial carousel** — dark rounded panel, cropped portrait with rounded rect, large quote, name + role, circular icon buttons
5. **Ghost / secondary controls** — light outline pills on blue or dark grounds

States visible: default solid CTA, quiet text links, outline header CTA, carousel chevrons as circular outlines.

## Responsive behavior

Seven homepage captures from roughly **1200–1710px** wide keep the photo-led hero and dark testimonial pattern. At narrower widths within this band, type remains large and photography still anchors the right side; a true mobile single-column system is not fully documented here.

## Practical guidance

**Preserve**

- Soft blue studio gradient + editorial portrait as the brand environment
- Oversized tight white display with restrained body copy
- One blue CTA phrase repeated in header and hero
- Dark rounded testimonial stages for social proof contrast
- Generous padding and sparse density—fintech calm, not trading-terminal density

**Avoid**

- Generic stock-finance icon grids or purple SaaS gradients
- Small timid headlines; Grey’s voice is billboard-scale
- Rainbow accents or multiple CTA colors
- Hard square cards everywhere—soft radii are part of the trust posture
- Crowding the hero with feature bullets; keep the left column short

## Scope note

Based on seven homepage captures of grey.co (hero, mid-page, and testimonial treatments). Measured color roles cover primary/secondary text on the hero; broader blues and charcoal values are from visual reading. Declared font families were not available. App UI, pricing, and logged-in product screens are outside this set.

## Captured pages

[![Hero — inclusive banking](https://pin.fontofweb.com/6719?format=jpg)](https://design.withfudge.com/share/pin-6719)

[Hero — inclusive banking](https://design.withfudge.com/share/pin-6719)

[![Hero alternate crop](https://pin.fontofweb.com/6723?format=jpg)](https://design.withfudge.com/share/pin-6723)

[Hero alternate crop](https://design.withfudge.com/share/pin-6723)

[![Testimonial stage](https://pin.fontofweb.com/6724?format=jpg)](https://design.withfudge.com/share/pin-6724)

[Testimonial stage](https://design.withfudge.com/share/pin-6724)

[![Homepage wide frame](https://pin.fontofweb.com/6725?format=jpg)](https://design.withfudge.com/share/pin-6725)

[Homepage wide frame](https://design.withfudge.com/share/pin-6725)

[![Mid homepage module](https://pin.fontofweb.com/6720?format=jpg)](https://design.withfudge.com/share/pin-6720)

[Mid homepage module](https://design.withfudge.com/share/pin-6720)

## Colors

- `#ffffff`
- `#f0f2f5`

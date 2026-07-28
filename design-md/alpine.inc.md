# How alpine.inc is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/alpine.inc-design)

Last updated: 2026-07-28

## Design character

Alpine.inc presents as **premium dark SaaS theater**: near-black stages, crisp white geometric wordmark, large light headlines, and floating product UI mockups (messaging, calendar-like surfaces) that glow softly above the void. The marketing site sells calm capability—sparse sections, deliberate emptiness, and a single cool blue accent—rather than feature laundry lists.

What should survive adaptation:
- True dark canvas with high-contrast white type
- Product UI shown inside rounded floating frames
- One cool accent (measured blue around `#4595f5`) used sparingly
- Luxury-software pacing: fewer modules, more air

## Foundations

### Color

Measured swatches seen across pages: `#4595f5`, `#ffffff`, `#5b5b62`. Core set: deep black/charcoal background, white primary text, muted gray (`#5b5b62`-range) secondary text, white surfaces inside mockups, and blue accent for interactive or brand sparks. Keep secondary text dim enough for hierarchy but still readable on black.

### Typography

Observed text styles:
- **text**: unknown, weight 400, 12px
- **text**: unknown, weight 400, 12px
- **text**: unknown, weight 400, 20px, lh 32px
- **text**: unknown, weight 400, 40px, lh 48px
- **text**: unknown, weight 400, 12px
- **text**: unknown, weight 400, 40px, lh 48px
- **text**: unknown, weight 400, 20px, lh 34px
- **text**: unknown, weight 400, 20px, lh 24px
- **text**: unknown, weight 400, 52px, lh 52px
- **text**: unknown, weight 400, 29px, lh 34.8px
- **text**: unknown, weight 400, 12px
- **text**: unknown, weight 400, 16px, lh 24px

Large geometric sans headlines in white; smaller gray body; UI inside mockups uses compact app type. Tracking on big lines stays controlled. The wordmark is part of the type system—simple, wide, modern.

### Spacing and layout

Recurring spacing measurements include 2.5px, 16px, 18px, 20px, 32px, 48px, 56px, 62px, 64px, 72px, 100px, 128px, 155px. Sections are vertically roomy. Hero often pairs a short headline stack with a large product visual. Multi-column feature rows appear only when mockups need side-by-side comparison; otherwise single-focus bands dominate. Observed corner radii include 1px, 4px, 12px, 16px, 24px, 9999px.

## Visual language

Soft shadows under mockup cards create the main depth cue. Borders are hairline or absent. Gradients, if present, are subtle atmospheric glows—not rainbow mesh. Avoid cluttering the dark field with bright multi-colored illustrations.

## Components and states

- **Transparent/dark header** with wordmark and minimal text links
- **Hero**: headline + supporting line + primary CTA + product frame
- **Feature bands**: short copy + UI screenshot cards
- **Buttons**: high-contrast light fills or blue accents on dark
- **Mockup chrome**: rounded rectangles, muted internal UI grays

## Responsive behavior

Multiple home widths (~1641–2048px) show the same dark system scaling: mockups shrink, type reflows, margins hold. On smaller screens stack mockups below headlines and keep the black field continuous.

## Practical guidance

**Preserve**
- Dark stage, white type, sparse sectioning
- Floating rounded product frames with soft depth
- Single blue accent discipline

**Avoid**
- Light-mode defaulting that breaks the brand night sky
- Rainbow charts and loud badge rows on the marketing shell
- Tiny low-contrast gray copy on black

## Scope note

Studied 8 page captures on paths /. Some structural families were incomplete on these pages. All studied captures are home marketing views at multiple widths; in-app product chrome beyond mockups is inferred only visually.

## Captured pages

[![Alpine](https://pin.fontofweb.com/7702?format=jpg)](https://design.withfudge.com/share/pin-7702)

[Alpine](https://design.withfudge.com/share/pin-7702)

[![Alpine](https://pin.fontofweb.com/7701?format=jpg)](https://design.withfudge.com/share/pin-7701)

[Alpine](https://design.withfudge.com/share/pin-7701)

[![Alpine](https://pin.fontofweb.com/7700?format=jpg)](https://design.withfudge.com/share/pin-7700)

[Alpine](https://design.withfudge.com/share/pin-7700)

[![Alpine](https://pin.fontofweb.com/7699?format=jpg)](https://design.withfudge.com/share/pin-7699)

[Alpine](https://design.withfudge.com/share/pin-7699)

[![Alpine](https://pin.fontofweb.com/7698?format=jpg)](https://design.withfudge.com/share/pin-7698)

[Alpine](https://design.withfudge.com/share/pin-7698)

[![Alpine](https://pin.fontofweb.com/7697?format=jpg)](https://design.withfudge.com/share/pin-7697)

[Alpine](https://design.withfudge.com/share/pin-7697)

[![Alpine](https://pin.fontofweb.com/7696?format=jpg)](https://design.withfudge.com/share/pin-7696)

[Alpine](https://design.withfudge.com/share/pin-7696)

[![Alpine](https://pin.fontofweb.com/7695?format=jpg)](https://design.withfudge.com/share/pin-7695)

[Alpine](https://design.withfudge.com/share/pin-7695)

## Colors

- `#4595f5`
- `#ffffff`
- `#5b5b62`

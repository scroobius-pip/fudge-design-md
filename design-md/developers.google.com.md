# How developers.google.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/developers.google.com-design)

Last updated: 2026-07-28

## Design character

developers.google.com’s Developer Program surfaces read as **polished Google product marketing**, not a dense API reference. The system is **white-field, Material-adjacent, and conversion-clear**: a calm sans hierarchy, one unmistakable blue for primary actions, and generous product photography that sells the program as a place to learn, build, and ship. Pricing pages feel like a clean SaaS comparison; the program hub feels like a hero launch with floating device chrome and soft gradient orbs.

What should survive adaptation:

- Near-white canvas with **Google Blue** as the only loud accent
- Large, friendly display lines with restrained body gray
- Softly rounded cards and pill/rounded-rectangle CTAs
- Product UI mockups as the main visual theater

## Foundations

### Color

Measured roles:

- Accent: `#1a73e8` (primary buttons, key links, focus energy)
- Primary text: `#202124`
- Secondary text: `#5f6368`

The broader page stays white/off-white with light gray dividers and card edges. Premium plan treatment introduces deeper blue fills on selected cards while Standard stays outlined/white. Avoid inventing a rainbow of Google brand colors—this slice is deliberately blue + neutral.

### Typography

Declared families were not captured. Visually the stack is a **geometric humanist sans** in the Google Product Sans / Roboto tradition:

- Display/hero roughly in the 36–48px range, weight ~400–500
- Section titles ~20–28px
- Body ~14–16px with comfortable line height (~20–24px)
- Small meta/labels ~12px

Hierarchy is achieved with size and color (near-black vs mid gray), not heavy weight stacks.

### Spacing and layout

Recurring spacing steps cluster around **2 / 4 / 8 / 12 / 16 / 24 / 32px**. Marketing sections breathe with large vertical gaps; plan cards sit in a centered multi-column row with consistent gutters. Content width stays moderate—readable marketing measure, not full-bleed app chrome.

## Visual language

- **Radii:** 4px on tight controls, **16px** on cards/panels, **24px** on larger soft containers
- Borders are light hairlines separating white surfaces rather than heavy frames
- Shadows stay minimal; elevation comes more from spacing and soft gray fills than dramatic drop shadows
- Imagery: crisp product screenshots, floating browser/app chrome, soft blue/indigo gradient spheres behind heroes
- Motion is not established from still captures

## Components and states

- **Primary CTA:** filled `#1a73e8` with white label (Join, Get Standard, etc.)
- **Secondary CTA:** white/light fill with gray border (“Other Downloads”-style peers on related Google properties; here often text or quiet outline)
- **Plan cards:** title, price, feature list, bottom CTA; selected/premium may invert to solid blue
- **Top promo strip:** thin dark utility bar above the white marketing nav
- **Nav:** simple text links, restrained iconography

Do not invent hover/focus choreography beyond the obvious filled vs quiet button pairing.

## Practical guidance

**Preserve**

- One blue accent against white + charcoal text
- Soft 16–24px card rounding
- Plan comparison as honest cards, not dense tables
- Product mockups as hero art

**Avoid**

- Neon multi-accent palettes
- Heavy skeuomorphic shadows
- Cramped developer-docs density on marketing pages
- Replacing blue CTAs with generic black pills (loses the Google cue)

## Scope note

Studied viewport captures of `/program` and `/program/plans-and-pricing` (pins 5075, 6326, 6327). Declared font families, motion, and true mobile breakpoints were not established in this set.

## Captured pages

[![Program hub hero with product theater](https://pin.fontofweb.com/5075?format=jpg)](https://design.withfudge.com/share/pin-5075)

[Program hub hero with product theater](https://design.withfudge.com/share/pin-5075)

[![Plans & Pricing comparison](https://pin.fontofweb.com/6327?format=jpg)](https://design.withfudge.com/share/pin-6327)

[Plans & Pricing comparison](https://design.withfudge.com/share/pin-6327)

[![Pricing mid-width viewport](https://pin.fontofweb.com/6326?format=jpg)](https://design.withfudge.com/share/pin-6326)

[Pricing mid-width viewport](https://design.withfudge.com/share/pin-6326)

## Colors

- `#1a73e8`
- `#202124`
- `#5f6368`
- `#ffffff`

# How five-am.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/five-am.com-design)

Last updated: 2026-07-28

## Design character

5AM is a dark, art-directed studio site for a design-and-technology practice. The system is **editorial dark canvas + soft geometric sculpture**: near-charcoal backgrounds, massive condensed white display type, and floating pastel blobs that behave like set pieces rather than decoration stickers. The mood is late-night studio confidence — sparse copy, huge wordmarks, and calm pill CTAs — not neon startup energy.

What should survive adaptation:
- A **true dark field** with near-white type, not muddy mid-gray on gray.
- **Oversized display wordmarks** that own the viewport before body copy appears.
- **Soft pastel geometric forms** (circles, rounded rects, organic blobs) as the primary illustration language.
- **Fully pill-shaped actions** sitting quietly against the dark field.

## Foundations

### Color

Measured structured colors were sparse; the palette below is grounded in the homepage screenshots.

| Role (interpreted) | Hex | Notes |
| --- | --- | --- |
| Canvas | `#1a1a1a` | Near-charcoal full-bleed field |
| Primary text | `#f5f5f5` | White / off-white display and body |
| Muted UI text | `#a8a8a8` | Nav links, legal, secondary labels |
| Primary CTA fill | `#7cb342` | Soft lime-green pill |
| Shape — coral | `#e8a0a0` | Large organic blob |
| Shape — lime | `#c5e063` | Hard circle accent |
| Shape — lavender | `#b8b4e8` | Soft circle |
| Shape — cream | `#e8e0d0` | Rounded rectangle plane |

Relationships: the canvas stays dark and quiet so pastel shapes and the white wordmark carry all of the color interest. Green is reserved for the primary action; secondary actions stay outline-only on dark.

### Typography

Families are not declared in the captures. Visually, the system is a **single condensed grotesque**:

- **Display**: ~80px, weight 400, very tight tracking, almost poster-scale (“5AM”).
- **Body / lead**: ~18px regular on dark.
- **UI / nav / legal**: ~14px regular, muted gray.

Hierarchy is extreme — one monumental wordmark, then a short sentence, then small chrome. Avoid introducing a second decorative display face; the power comes from scale and tracking, not ornament.

### Spacing and layout

Observed spacing clusters around **2 / 4 / 8 / 16px** for tight UI groups, with large open canvas between the wordmark, shapes, and footer. Layout is full-bleed and asymmetric: the wordmark sits left-of-center while geometric forms occupy the right and lower field. Footer content is a thin horizontal band with generous side margins. Do not force a dense marketing grid onto this system — emptiness is part of the brand.

## Visual language

- **Shapes over photos.** Soft circles, rounded rectangles, and irregular blobs float at different depths; some feel slightly translucent or layered.
- **Pill geometry.** Radius reads as fully rounded (`9999`) on CTAs and chips.
- **Hairline structure.** 1px solid borders appear on secondary outline buttons and subtle dividers; no heavy cards or drop shadows were observed.
- **Flat dark field.** No gradients on the canvas itself — color lives in the shapes.
- **Quiet chrome.** Logo wordmark top-left, sparse text nav, minimal footer icons.

## Components and states

- **Primary button:** filled lime-green pill, dark or near-black label, fully rounded.
- **Secondary button:** transparent fill, 1px light border, light label, same pill radius (“Book a call”).
- **Nav links:** small muted text, no underlines in the resting state.
- **Display lockup:** oversized wordmark plus a one-line positioning sentence.
- **Footer:** thin legal row, small social glyphs, optional cookie strip.

Only resting states are visible in the captures — do not invent hover or focus treatments beyond keeping contrast high on dark.

## Practical guidance

**Preserve**
- Dark canvas + white condensed display as the first impression.
- Pastel geometric sculpture instead of stock photography or 3D product shots.
- Two-CTA pair: solid green primary + outline secondary, both pills.
- Extreme type scale jump (poster display → small UI).

**Avoid**
- Bright white marketing sections that break the continuous dark field.
- Hard drop shadows, glassmorphism, or neon gradients on the chrome.
- Crowding the wordmark with feature grids or logo walls.
- Replacing the soft pastels with saturated brand primaries.

## Scope note

Studied two homepage viewports (wide desktop). No multi-width responsive set, no interior case-study pages, and no declared font families. Treat this as a homepage art-direction guide rather than a full product UI kit.

## Captured pages

[![5AM homepage hero](https://pin.fontofweb.com/8238?format=jpg)](https://design.withfudge.com/share/pin-8238)

[5AM homepage hero](https://design.withfudge.com/share/pin-8238)

[![5AM lower field and footer](https://pin.fontofweb.com/8237?format=jpg)](https://design.withfudge.com/share/pin-8237)

[5AM lower field and footer](https://design.withfudge.com/share/pin-8237)

## Colors

- `#1a1a1a`
- `#f5f5f5`
- `#a8a8a8`
- `#7cb342`
- `#e8a0a0`
- `#c5e063`
- `#b8b4e8`
- `#e8e0d0`

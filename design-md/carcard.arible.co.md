# How carcard.arible.co is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/carcard.arible.co-design)

Last updated: 2026-07-28

## Design character

CardScanner (carcard.arible.co) is a **calm document utility**: warm-white canvas, centered serif display (“Business cards, digitized.”), black pill primary button, and a clean list of processed cards with **green completion** status. It feels trustworthy and lightweight—fintech-adjacent ops tool without visual noise.

What should survive adaptation:
- Airy light canvas and centered hero
- Serif display for brand voice, sans for UI
- Black primary CTA; green only for success status
- List rows with thumbnails + metadata

## Foundations

### Color
Measured: accent/success green `#3a7d44`; text `#1a1a1a`; muted `#999999`.
Page ground near `#fafaf7`/`#ffffff`. Header minimal. Status green is functional, not decorative wash.

### Typography
Display serif ~44–48px; UI/body 12–18px weights 400–600. Small caps/eyebrow “Simple & fast” above the hero. Search and list use utilitarian sans.

### Spacing and layout
2–40px UI spacing; large hero gaps (~80, 376). Centered max-width column: hero → dropzone → search → list.

## Visual language
- Radii **4–10px** on inputs/dropzone; primary button more pill-like
- Dotted/light border dropzone
- Hairline row separators
- Flat, light mode

## Components and states
- **Get Started** black button
- Drag-and-drop zone
- Search field
- Expandable card rows with COMPLETED green pill/dot
- Header actions: Export CSV, Clear All (ghost buttons)

## Responsive behavior
Two home captures (including a shorter crop). System is single-column friendly by nature.

## Practical guidance
**Preserve** serif hero + utilitarian list, green-as-status-only, black CTA.
**Avoid** turning success green into a full brand wash; avoid dense admin tables on the marketing hero.

## Scope note
Only `/` captures (product named CardScanner/CarCard in titles).

## Captured pages

[![Home — full workspace](https://pin.fontofweb.com/7743?format=jpg)](https://design.withfudge.com/share/pin-7743)

[Home — full workspace](https://design.withfudge.com/share/pin-7743)

[![Home — wide crop](https://pin.fontofweb.com/7745?format=jpg)](https://design.withfudge.com/share/pin-7745)

[Home — wide crop](https://design.withfudge.com/share/pin-7745)

## Colors

- `#3a7d44`
- `#1a1a1a`
- `#999999`
- `#ffffff`
- `#f7f7f5`

# How builtwith.kit.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/builtwith.kit.com-design)

Last updated: 2026-07-28

## Design character

Kit (builtwith.kit.com) sells creator email with a **friendly, high-energy marketing system**: oversized display headlines, soft 8–12px radii, airy section spacing, and product UI moments embedded in a light, optimistic canvas. It feels approachable and modern without going brutalist or luxury-minimal.

What should survive adaptation:
- Big, confident display type as the primary brand voice
- Soft-rounded interactive elements (not pills-everywhere, not sharp)
- Generous vertical section cadence (40–80px+ gaps)
- Product proof nested inside marketing narrative

## Foundations

### Color
Structured color roles were unsupported in these captures. Visually the home page reads as **light background**, dark text, with Kit’s brand accent (warm/coral-leaning in marketing materials) used for CTAs and highlights. Keep a clean light base and one energetic accent rather than a rainbow.

### Typography
Family undeclared. Observed:
- Body ~**16px / 24px** lh, weight 400, slight negative tracking (~-0.16px)
- Strong display sizes **48–80px** at weight 500 for heroes (scales with viewport)
- Subheads ~18–20px weight 700
- Compact UI labels ~12–16px, weights 600
Hierarchy is size-first; display lines are short and punchy.

### Spacing and layout
Measured spacing includes **4, 16, 20, 24, 40, 44, 64, 80, 160** px. Layout patterns:
- Full-width marketing sections with centered content max-width
- Hero with headline + supporting line + CTA row
- Alternating feature bands with media
- Footer multi-column on large widths

## Visual language
- Radii **8px and 12px** dominate controls and cards
- Minimal shadow reliance; separation via spacing and background bands
- Borders light when present
- Imagery: product screenshots and creator-facing visuals, not stock collage

## Components and states
- Primary CTA buttons with soft radius
- Text nav with simple links
- Feature rows combining icon/media + copy
- Large display headlines as section openers
Interactive hover/focus not established from stills.

## Responsive behavior
Three home captures at different widths (~1280 to 2048). Display type scales down from ~80px toward ~48–64px; body stays ~16px. Section structure holds; columns collapse visually on narrower widths.

## Practical guidance
**Preserve**
- Oversized friendly display
- 8–12px radius system
- Airy section spacing
- Light marketing canvas with one accent

**Avoid**
- Enterprise-dense tables as the default marketing pattern
- Harsh blackfullbleed without relief
- Mixing many radii (stick to 8/12)
- Tiny hero type

## Scope note
All captures are the home page `/` at multiple viewports. Inner product app chrome was not studied.

## Captured pages

[![Home — wide hero](https://pin.fontofweb.com/6374?format=jpg)](https://design.withfudge.com/share/pin-6374)

[Home — wide hero](https://design.withfudge.com/share/pin-6374)

[![Home — mid-wide](https://pin.fontofweb.com/6376?format=jpg)](https://design.withfudge.com/share/pin-6376)

[Home — mid-wide](https://design.withfudge.com/share/pin-6376)

[![Home — narrower](https://pin.fontofweb.com/6375?format=jpg)](https://design.withfudge.com/share/pin-6375)

[Home — narrower](https://design.withfudge.com/share/pin-6375)

## Colors

- `#ffffff`
- `#111111`
- `#f5f5f5`
- `#ff6b4a`

# How app.subframe.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/app.subframe.com-design)

Last updated: 2026-07-28

## Design character

Subframe feels like a **professional component factory**: bright white working surfaces, soft gray side regions, compact medium-weight labels, and specimens (accordions, calendars, pricing layouts) as the star. The chrome is intentionally generic-good so published design systems can vary inside it.

What should survive adaptation:

- **Light mode default** with gray wells, not dark IDE theatrics
- **12px medium UI labels** with slight negative tracking
- **8px default radius** (6–12px secondary steps)
- **Library / editor / playground** IA with docs-like specimen stages

## Foundations

### Color

Screenshot-backed neutrals:

- Canvas: `#ffffff`
- Sidebar/wells: ~`#f6f7f8`
- Borders: ~`#e8eaed`
- Primary ink: slate-black ~`#111827`
- Secondary: `#6b7280`
- Interactive blue: ~`#3b82f6` when needed for links/focus

### Typography

Dominant measured style: **12px / 18px**, weight **500**, tracking ~**-0.06px**. That medium 12px label is the voice of the product chrome. Larger type appears inside user compositions on the canvas, not as default chrome.

### Spacing and layout

- Common padding: **8px**, **16px**, **48px** (section/page)
- Library: nav + specimen stage
- Editor: tool canvas at mid widths (~910px capture still coherent)
- Playground modal: centered white card, stacked integration rows, code snip well

## Visual language

- Radius ladder: **8px** primary, **6px** and **12px** supporting, rare pills (9999)
- Soft shadows sparingly (e.g. ~0 2px 8px / 0 4px 16px on elevated cards)
- Borders + fills define structure more than dramatic elevation
- Integration rows use pale gray chips and brand glyphs without loud color blocks

## Components and states

1. **Library nav + specimen** — docs pattern for each component
2. **Design editor canvas** — artboard with pricing/sections compositions
3. **Playground connect modal** — icon circle, title, accordion-like integration list, CLI copy well
4. **OAuth consent** — simple centered authorization card
5. **Primary/secondary buttons** — compact, medium labels, blue or dark fills depending on context

## Responsive behavior

Captures span ~578–1712px widths across library, editor, oauth, playground. The **light compact system scales down** via narrower columns and stacked cards; it does not flip to a different dark brand at small sizes in this set.

## Practical guidance

**Preserve** white/gray professional shell, 12px medium labels, 8px radius, specimen-as-content, quiet shadows.

**Avoid** turning the builder chrome into a neon AI skin, oversized marketing type in nav, or heavy skeuomorphism.

## Scope note

Eight captures: multiple library component pages, design edit, oauth consent (2), and playground. Font family names not declared; colors largely from visual inspection plus spacing/radius measurements.

## Captured pages

[![Library — Context Menu docs](https://pin.fontofweb.com/8787?format=jpg)](https://design.withfudge.com/share/pin-8787)

[Library — Context Menu docs](https://design.withfudge.com/share/pin-8787)

[![Library — Calendar](https://pin.fontofweb.com/8786?format=jpg)](https://design.withfudge.com/share/pin-8786)

[Library — Calendar](https://design.withfudge.com/share/pin-8786)

[![Library — Accordion](https://pin.fontofweb.com/8785?format=jpg)](https://design.withfudge.com/share/pin-8785)

[Library — Accordion](https://design.withfudge.com/share/pin-8785)

[![Components index](https://pin.fontofweb.com/8059?format=jpg)](https://design.withfudge.com/share/pin-8059)

[Components index](https://design.withfudge.com/share/pin-8059)

[![Design editor — Pricing Plans](https://pin.fontofweb.com/6474?format=jpg)](https://design.withfudge.com/share/pin-6474)

[Design editor — Pricing Plans](https://design.withfudge.com/share/pin-6474)

[![Playground — connect to code](https://pin.fontofweb.com/6471?format=jpg)](https://design.withfudge.com/share/pin-6471)

[Playground — connect to code](https://design.withfudge.com/share/pin-6471)

[![OAuth consent](https://pin.fontofweb.com/6472?format=jpg)](https://design.withfudge.com/share/pin-6472)

[OAuth consent](https://design.withfudge.com/share/pin-6472)

## Colors

- `#ffffff`
- `#f6f7f8`
- `#e8eaed`
- `#111827`
- `#6b7280`
- `#3b82f6`

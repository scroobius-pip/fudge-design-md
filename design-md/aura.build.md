# How aura.build is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/aura.build-design)

Last updated: 2026-07-28

## Design character

Aura is a **dark AI website builder / template marketplace**: charcoal app chrome, light text (`#fafafa` / `#ffffff`), gray secondary (`#a3a3a3`), and soft pastel accents (mint `#bbf7d0` / `#6ee7b7`, cream `#fef3c7`) used as status and highlight chips rather than loud brand blocks. The product feels like a design IDE—grids of template previews, changelogs, and editor panes—with 12–16px radii and subtle layered shadows.

What should survive adaptation:

- Dark marketplace + editor shell.
- Pastel chips for NEW/FEATURE status on dark gray rows.
- Template cards with rich previews, price, and author meta.
- 6–16px radii; soft multi-stop shadows on elevated previews.
- Dense but legible 12–16px UI type.

## Foundations

### Color

Measured accents include `#fef3c7`, `#bbf7d0`, `#6ee7b7`; text `#ffffff` / `#fafafa` / `#f5f5f5`; secondary `#a3a3a3` / `#a6a6a6`. Surfaces near-black. Pastels signal freshness, not primary CTA fills necessarily.

### Typography

Sans 400–600. Body 16/24; UI 12–14/16–20; titles 20–48. Template marketing can step up to 48/48.

### Spacing and layout

Browse: 12–24px card padding, filter chip row, multi-column grid. Changelog: 32px content padding, stacked release rows. Editor: 12–16px panel padding, heavy bottom padding for scroll regions. Template pages: 96px vertical section margins.

## Visual language

- Radii 4–6 controls, 12–16 cards, pills for tags.
- 1px borders around cards/panels.
- Layered shadows (y 1–12.5, blur 1–10) for depth on dark UI.
- Preview thumbnails are the visual star.

## Components and states

- Top product nav (Create, Templates, Components…).
- Search + sort controls.
- Template card grid with price badges.
- Status pills (NEW blue, FEATURE green).
- Changelog timeline entries.
- Editor side panels and canvas chrome.

## Responsive behavior

Includes a narrow template capture (~371) alongside wide desktop—cards stack; nav compresses. Full mobile IA not fully specified.

## Practical guidance

**Preserve:** dark builder aesthetic, pastel status language, preview-first cards, soft depth.

**Avoid:** light generic bootstrap restyle; neon cyber accents that clash with mint/cream chip system; oversized radii that blur dense grids.

## Scope note

Templates browse, changelog, react generator, and template detail captures. No declared font families.

## Captured pages

[![Browse paid templates](https://pin.fontofweb.com/8658?format=jpg)](https://design.withfudge.com/share/pin-8658)

[Browse paid templates](https://design.withfudge.com/share/pin-8658)

[![Changelog](https://pin.fontofweb.com/8662?format=jpg)](https://design.withfudge.com/share/pin-8662)

[Changelog](https://design.withfudge.com/share/pin-8662)

[![React generator workspace](https://pin.fontofweb.com/8823?format=jpg)](https://design.withfudge.com/share/pin-8823)

[React generator workspace](https://design.withfudge.com/share/pin-8823)

[![Brand portfolio template](https://pin.fontofweb.com/8824?format=jpg)](https://design.withfudge.com/share/pin-8824)

[Brand portfolio template](https://design.withfudge.com/share/pin-8824)

[![Futuristic template](https://pin.fontofweb.com/8660?format=jpg)](https://design.withfudge.com/share/pin-8660)

[Futuristic template](https://design.withfudge.com/share/pin-8660)

## Colors

- `#fef3c7`
- `#bbf7d0`
- `#6ee7b7`
- `#ffffff`
- `#fafafa`
- `#a3a3a3`
- `#f5f5f5`
- `#0a0a0a`

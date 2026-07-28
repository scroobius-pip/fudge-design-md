# How assistant-ui.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/assistant-ui.com-design)

Last updated: 2026-07-28

## Design character

assistant-ui’s docs are a **dark developer product surface**: near-black background, off-white primary text (`#fafafa`), muted gray secondary (`#a1a1a1`), and a soft periwinkle accent (`#cdd6f4`) rather than neon blue. It reads as modern shadcn-adjacent documentation—sidebar, prose, and live component previews in one calm toolkit aesthetic.

What should survive adaptation:

- Dark docs default with low-chroma accent.
- 6–10px radii on controls and code/previews.
- 13–16px sans body with comfortable leading (20–24).
- Tight 8–16px padding rhythm inside nav and content.

## Foundations

### Color

Measured: accent `#cdd6f4`, text primary `#fafafa`, secondary `#a1a1a1`. Surfaces charcoal/black; code blocks slightly elevated. Avoid harsh pure primary blue.

### Typography

Sans 400–500. Sizes 13–16 common; line-heights ~17.9–24. Installation fragment also 14/20–23.8.

### Spacing and layout

Docs: left nav + main + sometimes right TOC. Padding 8–16px dominant; some 6–14px micro padding in dense lists.

## Visual language

- Radii 6 / 8 / 10 / 14.
- 1px borders on panels.
- Minimal shadows observed—border and fill define structure.

## Components and states

- Sidebar navigation tree.
- Prose headings and inline code.
- Component preview frames.
- Tabs/segments for examples.
- Copyable installation snippets.

## Responsive behavior

One full desktop docs page and one tiny fragment; mobile docs pattern not established.

## Practical guidance

**Preserve:** dark calm docs, soft accent, medium radii, toolkit density.

**Avoid:** light-only docs restyle without care; loud brand gradients; oversized marketing heroes inside API reference.

## Scope note

Docs pages only (thread + installation). Marketing homepage not in set. No declared font families.

## Captured pages

[![Thread component docs](https://pin.fontofweb.com/8754?format=jpg)](https://design.withfudge.com/share/pin-8754)

[Thread component docs](https://design.withfudge.com/share/pin-8754)

[![Installation docs](https://pin.fontofweb.com/8806?format=jpg)](https://design.withfudge.com/share/pin-8806)

[Installation docs](https://design.withfudge.com/share/pin-8806)

## Colors

- `#cdd6f4`
- `#fafafa`
- `#a1a1a1`
- `#0a0a0a`

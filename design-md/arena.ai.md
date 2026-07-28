# How arena.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/arena.ai-design)

Last updated: 2026-07-28

## Design character

Arena.ai splits into two complementary modes: a **warm light analytics leaderboard** and a **dark dual-pane model battle workspace**. Shared DNA is dense, tool-grade UI—tight tables, clear borders, modest radii—plus a coral-red accent (`#f25550`) that marks brand and key actions without rainbow clutter.

What should survive adaptation:

- Light warm paper (`#f4f0eb` family) for data surfaces; dark charcoal for the live arena.
- Red/coral accent for brand marks and primary emphasis.
- Dense but readable tables with 1px grid borders.
- 6–12px radii and light shadows on elevated panels.

## Foundations

### Color

Measured: accent `#f25550`, text primary on dark `#f4f0eb`. Leaderboard mode uses dark text on warm light gray/off-white. Keep accents sparse so rankings and model text stay legible.

### Typography

Sans UI. Body 14–16px with 20–24 line-height; some 11–12px meta; medium 500–600 for table emphasis. No declared family names.

### Spacing and layout

Leaderboard: heavy 32px padding zones, 8–16px inner gaps, full-width data grids. Arena: tighter 6–16px padding inside panes, dual columns for model outputs.

## Visual language

- Radii 4 / 6 / 8 / 12 (and occasional pill 9999).
- 1px solid borders defining table geometry.
- Soft shadows (`y:1–10`, blur 2–15) for popovers/cards.
- Minimal illustration—UI is the product.

## Components and states

- Ranked tables with sticky headers/filters.
- Model selector chips and tabs.
- Dual response columns with vote/actions.
- Side rails for prompts/history.
- Light elevation on menus.

## Responsive behavior

Desktop-focused captures (1344–1712). Table density implies horizontal scroll or column priority on small screens, but not evidenced.

## Practical guidance

**Preserve:** warm light vs dark arena duality, coral accent, bordered data density.

**Avoid:** turning leaderboards into sparse marketing pages; over-rounding table cells into soft cards that hurt scanability.

## Scope note

One leaderboard and two arena session captures. Font families undeclared.

## Captured pages

[![Text LLM leaderboard](https://pin.fontofweb.com/9344?format=jpg)](https://design.withfudge.com/share/pin-9344)

[Text LLM leaderboard](https://design.withfudge.com/share/pin-9344)

[![Side-by-side model arena](https://pin.fontofweb.com/8747?format=jpg)](https://design.withfudge.com/share/pin-8747)

[Side-by-side model arena](https://design.withfudge.com/share/pin-8747)

[![Arena session workspace](https://pin.fontofweb.com/8746?format=jpg)](https://design.withfudge.com/share/pin-8746)

[Arena session workspace](https://design.withfudge.com/share/pin-8746)

## Colors

- `#f25550`
- `#f4f0eb`
- `#ffffff`
- `#111111`

# How demo.refero.design is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/demo.refero.design-design)

Last updated: 2026-07-28

## Design character

The Refero demo is a **dark AI research workspace** for exploring UI patterns: a near-black canvas, floating charcoal panels, and screenshot grids that behave like search results. Chrome is minimal and conversational — a pill title, a reasoning transcript, result modules, and a bottom follow-up composer — so the captured product screenshots remain the brightest objects on screen.

What should survive adaptation:

- **Editor-dark environment** (not pure OLED black everywhere — elevated panels sit slightly lighter).
- **Card-stacked conversation** with clear module boundaries and soft 12–16px rounding.
- **Thumbnail grids** of real UI captures as the primary content units.
- Typography that stays **small and UI-like** (14–16px); drama comes from the screenshots, not display type.

## Foundations

### Color

No measured palette roles. Visual reading:

- **Page canvas**: deep near-black.
- **Elevated panels**: dark charcoal / graphite cards for reasoning, result groups, and composer.
- **Primary text**: off-white to light gray.
- **Secondary / meta**: dimmer gray for labels like “Platform: web”, “Limit: 20”, captions under thumbs.
- **Hairlines**: subtle 1px borders separating panel edges and grid cells.
- **Accent**: minimal — a small info icon and link affordances; no loud brand hue dominates the chrome.

Keep color energy inside the embedded screenshots; the shell should stay monochrome.

### Typography

Family not captured. System reads as a neutral UI sans.

| Role | Size / weight | Notes |
| --- | --- | --- |
| Body / reasoning | 16px / 400, lh 24 | Dominant reading text |
| Meta / chips / captions | 14px / 400–500, lh ~20 | Labels, platform tags, filenames |
| Small UI | 12–15px / 500–600 | Sparse secondary controls |
| Titles | ~14–16px medium in dark pills | Session title in top capsule |

No marketing display scale appears in these captures — it is an application surface.

### Spacing and layout

- Horizontal padding common at **16 / 24 / 32px** inside panels.
- Top padding near **96px** for the main column; bottom composer reserved.
- Centered column with large side margins (~325–340px) on wide viewports — content reads as a focused chat column, not full-bleed.
- Result modules: internal grids of screenshot tiles with short captions; “N more” overflow tiles.
- Vertical rhythm between stacked cards is comfortable (order-of **16–24px** gaps), not cramped.

## Visual language

- **Radii**: 16px dominant on large panels; 12px on many nested tiles; 6px on small controls; occasional full-pill values on chips.
- **Borders**: 1px solid around cards and many thumbnail frames.
- **Shadows**: very subtle (0 1px 2px) plus flat zero-offset shadows — elevation is slight, not dramatic.
- **Imagery**: rectangular UI screenshots with light backgrounds contrasting the dark shell; mobile and desktop thumbs mixed in separate modules.
- **Top session pill**: dark capsule with close affordance + study title.

## Components and states

1. **Session title chip** — centered top capsule, dismiss control.
2. **User prompt bubble** — right-leaning dark rounded rectangle with the research request.
3. **Reasoning block** — left rule + “Reasoning” label + structured plain text plan.
4. **Result module** — header row (search query, platform, limit) + thumbnail grid + “View on Refero” text link.
5. **Overflow tile** — “11 more ›” / “15 more ›” as a continuation cell in the grid.
6. **Follow-up composer** — bottom full-width dark field, placeholder “Ask a follow-up question…”, send control.
7. **Status footer** — quiet “N messages left today” meta under the column.

Stills show completed answer state with multiple result modules; empty/loading states were not captured.

## Responsive behavior

Two wide desktop captures only (~1700×1310). The centered narrow column suggests the product is optimized as a focused workspace even on large screens. Mobile shell behavior is unknown.

## Practical guidance

**Preserve**

- Dark shell, lighter content screenshots — never invert that relationship.
- Modular stacked cards for each agent step (reason → web results → iOS results).
- Compact UI type; let thumbnails provide visual variety.
- Generous side margins that keep the conversation readable.

**Avoid**

- Bright white app chrome or colorful marketing gradients in the shell.
- Oversized hero type — this is a tool, not a landing page.
- Dense tables of metadata; prefer grids of pictures with short captions.
- Heavy shadows or skeuomorphic depth; keep elevation whisper-quiet.

## Evidence scope

Two homepage/demo workspace captures classified as an editor workspace. No measured colors, font families, or mobile layouts. Guidance is strongest for the dark research-chat presentation shown in the pins.

## Captured pages

[![Research chat — reasoning and web/iOS grids](https://pin.fontofweb.com/7786?format=jpg)](https://design.withfudge.com/share/pin-7786)

[Research chat — reasoning and web/iOS grids](https://design.withfudge.com/share/pin-7786)

[![Workspace — stacked result modules on dark shell](https://pin.fontofweb.com/7776?format=jpg)](https://design.withfudge.com/share/pin-7776)

[Workspace — stacked result modules on dark shell](https://design.withfudge.com/share/pin-7776)

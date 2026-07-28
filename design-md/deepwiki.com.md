# How deepwiki.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/deepwiki.com-design)

Last updated: 2026-07-28

## Design character

DeepWiki is a **light, documentation-first product** for talking to repo wikis. The UI feels like a calm developer tool: off-white canvas, soft white cards, hairline structure, blue primary actions, and a three-zone reading layout (nav / article / secondary). Marketing home is a simple search + repo card grid; interior pages are classic docs with a chat dock.

What should survive adaptation:

- **Light monochrome surfaces** with blue as the only strong action color.
- **Card grid discovery** on home; **tri-pane docs** on repo pages.
- **Soft 8px-class radii** and 1px separators instead of heavy elevation.
- A persistent **ask/chat dock** that does not break the article measure.

## Foundations

### Color

Measured text roles:

- **Primary text**: `#333333`
- **Secondary text**: `#666666`

From screenshots:

- Page background: light gray-white.
- Cards: white with subtle border.
- Primary button: solid blue (Share).
- Links: standard blue underline style in article body.
- Nav active row: light gray fill.
- Dark-mode toggle present (moon icon) though captures are light mode.
- Taxonomy labels the system monochrome/neutral with primary+secondary text roles.

### Typography

Families not declared. Observed:

- Body **16px / 24px** dominant.
- Article secondary **14–14.8px** with comfortable line-height (~20–26px).
- Headings **20–22px** weight 700.
- UI chips/labels **12px**; medium weights 500–600 for emphasis.
- Single sans system across chrome and prose.

### Spacing and layout

- Home cards: padding ~**12px**; section blocks often **32px** vertical padding; large bottom padding ~**96px** on some stacks.
- Docs content: horizontal padding **24px** common; tight control padding **6–8px**.
- Sidebar list spacing compact (margin ~5–17px between items).
- Home grid: multi-column repo cards with consistent gaps; first cell can be a dashed/soft “Add repo” affordance.
- Docs: left tree, main article, right “On this page”; bottom chat bar overlays content width.

## Visual language

- **Radii**: ~**4px** controls, ~**8.4px** cards (full-round pills reserved for rare chips; ignore pathological huge values).
- **Borders**: 1px solid on cards and sidebars—border-separated flat surfaces.
- **Shadows**: very soft (`0 1px 2px` / `0 1px 3px` class) or none; mostly flat.
- **Icons**: simple stroke icons (search, share, star, moon).
- **Code/path chips**: muted gray pills inline in tables.

## Components and states

1. **Top bar** — wordmark, optional repo title, “Index your code with Devin”, ghost Edit, blue Share, theme toggle.
2. **Home search** — centered question + rounded search field.
3. **Repo cards** — title, blurb, star count, chevron; grid of equal cards + “Add repo”.
4. **Docs sidebar** — hierarchical nav, active row highlight.
5. **Article** — H1/H2, lists, tables, source chips, internal links.
6. **Right rail** — “On this page” anchors; dismissible info callout (“Refresh this wiki”).
7. **Chat dock** — “Ask Devin about …” with model/speed select and send.

Default and populated states only; hover not captured.

## Responsive behavior

Captures include wide docs (~1712) and a narrower wiki frame (~766). Narrow keeps the article readable; side rails compress. Home grid drops columns implicitly with width. Detailed breakpoint tokens were not recorded.

## Practical guidance

**Preserve**

- Light gray canvas + white bordered cards.
- `#333` / `#666` text pairing with blue actions/links.
- 8px card radius and 1px structure.
- Home = search + repo grid; repo = nav/article/toc + chat dock.
- Calm developer-tool density—not marketing gradients.

**Avoid**

- Dark neon “AI” skins on the default experience.
- Heavy shadows or glassmorphism.
- Turning docs into a single infinite chat without readable article layout.
- Over-saturating accents; one blue is enough.
- Tiny unreadable secondary text below ~12px for core UI.

## Scope note

Studied home (8112) and repo wiki pages (8113, 8114). Text color roles, radii, borders, spacing, and type sizes are measured; blue button fill and overall light surfaces are confirmed visually. Font family names and full dark-mode tokens were not available in these captures.

## Captured pages

[![Home — repo discovery grid](https://pin.fontofweb.com/8112?format=jpg)](https://design.withfudge.com/share/pin-8112)

[Home — repo discovery grid](https://design.withfudge.com/share/pin-8112)

[![Repo wiki — tri-pane docs](https://pin.fontofweb.com/8113?format=jpg)](https://design.withfudge.com/share/pin-8113)

[Repo wiki — tri-pane docs](https://design.withfudge.com/share/pin-8113)

[![Repo wiki — narrower frame](https://pin.fontofweb.com/8114?format=jpg)](https://design.withfudge.com/share/pin-8114)

[Repo wiki — narrower frame](https://design.withfudge.com/share/pin-8114)

## Colors

- `#333333`
- `#666666`
- `#ffffff`
- `#3b82f6`

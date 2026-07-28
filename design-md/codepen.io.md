# How codepen.io is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/codepen.io-design)

Last updated: 2026-07-28

## Design character

CodePen is a dark, builder-facing product shell: near-black chrome, white primary type, cool gray secondary labels, and a bright cyan accent (`#76daff`) for focus, links, and brand sparkle. The marketing home mixes a left app rail, neon/gradient “Start Coding” energy, topic tiles, sponsor cards, and green solid CTAs for team upgrade moments. Settings stay utilitarian — left nav, bordered panels, light form fields on charcoal.

What should survive adaptation:

- Deep dark canvas with white/`#c7c9d3`/`#aaaebc` type hierarchy
- Cyan accent `#76daff` for highlights and interactive emphasis
- Compact 15px body at 1.5 line-height as the workhorse
- Small radii (4–10px) on cards, inputs, and chips — not oversized soft UI
- Left rail + main stage layout language
- Occasional lime/green solid buttons for high-intent team CTAs; gold `PRO` badges

## Foundations

### Color

Measured roles across home and settings:

| Role | Hex | Use |
|------|-----|-----|
| Accent | `#76daff` | Links, highlights, brand cyan |
| Primary text | `#ffffff` | Headings, primary labels on dark |
| Secondary text | `#c7c9d3` / `#aaaebc` / `#868ca0` | Muted copy, meta, idle nav |

Visually: near-black app chrome; slightly lifted dark panels for cards; light gray/white inputs in settings; lime-green filled buttons on sponsor/team modules; small yellow `PRO` chips. Keep saturated color scarce outside accent cyan and intentional CTA greens.

### Typography

No declared families in the capture set. Match by size/weight:

| Role | Size | Weight | Line-height |
|------|------|--------|-------------|
| Marketing display | ~45px | 400 | ~50px |
| Section title | ~27px | 400 | ~32px |
| Card / UI title | ~18–21px | 700 | ~22–25px |
| Body / nav | 15px | 400 | 22.5px |
| Emphasized UI | 15px | 700 | 22.5px |
| Dense / badge | 12–14px | 400–900 | ~18–20px |

Settings favor 15px regular/bold pairs and ~18px bold section labels. Marketing allows larger light display lines; product chrome stays compact.

### Spacing and layout

- Home content often sits with large side margins (~160px class) and 30–45px section padding.
- Cards and tiles use ~22–30px internal padding; 10–30px vertical rhythm between blocks.
- Settings: 15–30px panel padding, tight form stacks, left settings rail + main column.
- Radius cluster: 4px controls, 6px chips/buttons, 10px larger cards.

## Visual language

- **Shape:** Modest rounding throughout; pills only for a few chips, not the default button.
- **Borders:** 1–3px solid edges on cards, rails, and selected states; settings fields use clear light fills rather than heavy outlines alone.
- **Shadows:** Soft, sparse (e.g. blur ~6–30px) — depth mostly from stacked dark values.
- **Accent graphics:** Cyan/magenta gradient strokes, glowing arcs, framework topic tiles, logo walls in muted white.
- **Imagery:** UI screenshots, framework marks, abstract neon motifs — not lifestyle photography.

## Components and states

1. **App left rail** — logo, primary “Start Coding”, search/challenges/stack links, PRO upsell.
2. **Marketing hero modules** — large type, gradient CTA treatments, topic icon grid.
3. **Sponsor / feature cards** — dark raised panels, logo tile, short copy, solid green button.
4. **Team upsell block** — centered pitch, green CTA, grayscale logo row.
5. **Top utility bar (settings)** — segmented tabs, search, icon buttons, avatar menu.
6. **Settings shell** — vertical nav with active green bar; main panels for profile image upload and form fields (light inputs on dark).
7. **Badges** — small gold `PRO` lozenges.

Stills show default and simple active nav; do not invent drag/drop or editor behaviors beyond visible chrome.

## Responsive behavior

Captures span ~1320–1712px widths on home plus shorter settings crops. Layout stays multi-column with a persistent left rail on marketing and settings. No true mobile captures — do not specify phone collapse patterns.

## Practical guidance

**Preserve**

- Dark-first chrome and white/gray type ladder
- Cyan `#76daff` as the signature accent
- 15/22.5 body rhythm and small 4–10px radii
- Rail + stage information architecture
- Green solid buttons only for strong conversion moments

**Avoid**

- Light-mode default restyles that erase the IDE feel
- Large 16–24px marketing radii everywhere
- Rainbow accents competing with cyan
- Oversized hero type inside dense settings forms

**Adaptation**

For a CodePen-like builder UI: charcoal surfaces, cyan focus, compact type, modest radius, left navigation. Reserve bright fills for primary create/upgrade actions.

## Scope note

Eight captures: home (`/`) at several desktop sizes and `/settings/profile` (pins 8431–8438). Font families undeclared. Exact near-black canvas hexes and motion were not role-measured; read those from the dark UI screenshots.

## Captured pages

[![Home — rail, hero, topic energy](https://pin.fontofweb.com/8436?format=jpg)](https://design.withfudge.com/share/pin-8436)

[Home — rail, hero, topic energy](https://design.withfudge.com/share/pin-8436)

[![Home — sponsor card and team upsell](https://pin.fontofweb.com/8433?format=jpg)](https://design.withfudge.com/share/pin-8433)

[Home — sponsor card and team upsell](https://design.withfudge.com/share/pin-8433)

[![Home — mid-width marketing](https://pin.fontofweb.com/8434?format=jpg)](https://design.withfudge.com/share/pin-8434)

[Home — mid-width marketing](https://design.withfudge.com/share/pin-8434)

[![Home — framework topics band](https://pin.fontofweb.com/8435?format=jpg)](https://design.withfudge.com/share/pin-8435)

[Home — framework topics band](https://design.withfudge.com/share/pin-8435)

[![Settings — profile form](https://pin.fontofweb.com/8432?format=jpg)](https://design.withfudge.com/share/pin-8432)

[Settings — profile form](https://design.withfudge.com/share/pin-8432)

[![Settings — profile with menus](https://pin.fontofweb.com/8431?format=jpg)](https://design.withfudge.com/share/pin-8431)

[Settings — profile with menus](https://design.withfudge.com/share/pin-8431)

## Colors

- `#76daff`
- `#ffffff`
- `#aaaebc`
- `#c7c9d3`
- `#868ca0`

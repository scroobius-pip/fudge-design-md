# How deepmind.google is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/deepmind.google-design)

Last updated: 2026-07-28

## Design character

Google DeepMind’s model pages are a **dark, spacious product-science narrative**: near-black canvas, cool gray surfaces, soft white primary type, and pill navigation that feels closer to a device OS than a docs site. Benchmarks, model stories, and open-model launches (Gemini, Gemma) share one cinematic system—large quiet headlines, airy section padding, and data tables that still look designed rather than dumped.

What should survive adaptation:

- **Dark monochrome base** with cool blue-gray secondary text.
- **Pill / segmented controls** as the primary way to switch narrative chapters.
- **Large radius cards** and soft panels over harsh grids.
- Benchmark and spec content presented as **editorial data**, not dense admin tables.

## Foundations

### Color

Measured text roles:

- **Primary text**: `#f8f9fc`
- **Secondary text**: `#b2bbc5`

Visual canvas (from screenshots): deep charcoal/black page background; elevated panels slightly lighter charcoal; white filled pill for the active tab; hairline column rules in tables at low contrast. Accents are minimal—status is mostly value emphasis (bold white numbers) rather than hue.

Suggested working palette from captures: `#f8f9fc`, `#b2bbc5`, plus near-black surfaces.

### Typography

Families not declared. Observed scale:

- Body ~**17.5px / 25.4px** line-height (dominant).
- Secondary ~**14.5px / 21px**.
- Section titles ~**32px** medium (weight ~500).
- Display on Gemma launch ~**120px** light (weight ~300) and mid display ~**42px**.
- Table numerals inherit body size but read bolder via weight/contrast.
- Single sans system across UI and content; no decorative serif.

### Spacing and layout

Strong, repeated spacing:

- Horizontal content padding **72px**; vertical section padding **64–72px**.
- Wide side margins ~**300–308px** on ultra-wide frames—content stays in a focused column.
- Grid gaps **64px** between major blocks; tighter **16px** gaps inside control clusters.
- Table rows breathe; section stacks are generous (margin-bottom **60–120px** between big chapters).

Layout model: top floating controls → large rounded content stage → narrative sections and comparison tables.

## Visual language

- **Radii**: **16px** panels common; **8px** and **4px** for smaller controls; **9999px** pills/chips everywhere (tabs, tags, some buttons).
- **Borders**: 1–2px solid low-contrast strokes on chips and some cards.
- **Shadows**: nearly absent; depth from surface value shifts.
- **Imagery**: abstract model art and gradient device visuals on launch heroes (Gemma); performance pages stay typographic/data-first.
- **Taxonomy read**: dark mode, muted/monochrome, generative-AI product marketing, moderate density.

## Components and states

1. **Segmented pill nav** — dark track with white active pill (Capabilities / Hands-on / Performance / Model information).
2. **Icon circle buttons** — back/forward chevrons in soft dark circles.
3. **Performance stage card** — large 16px-radius charcoal panel holding headline + benchmark table.
4. **Data table** — multi-column model comparison; primary column emphasized; muted headers; subtle row separation.
5. **Launch hero (Gemma)** — massive light display type, short deck, pill CTAs, optional abstract visual.
6. **Model card chrome** — compact pill/chip clusters with 2px borders (header capture).

Active tab is the clearest state; hover/focus not evidenced.

## Responsive behavior

Captures include ultra-wide (~2048), mid (~1296–1793), and square-ish (~616) viewports on Gemma. Pills and heroes compress; display type scales down but stays light and huge relative to body. Performance table is desktop-oriented in the wide shots. True small-phone patterns were not fully documented.

## Practical guidance

**Preserve**

- Cool dark neutrals with `#f8f9fc` / `#b2bbc5` text pairing.
- Pill chapter navigation.
- 72px section padding and large 16px content radii.
- Benchmark tables as designed editorial objects.
- Sparse accent color—let white type and layout do hierarchy.

**Avoid**

- Bright Material rainbow chrome on these model stories.
- Dense light-mode admin tables.
- Tiny radii or heavy drop shadows.
- Multiple competing type families.
- Filling every section with illustration; data pages should stay calm.

## Scope note

Studied Gemini 3.1 Pro performance/model pages (9520, 9519), Gemma 4 launch viewports (8701–8705), and a model-card header (6854). Background/palette extractions and font family names were unsupported; hex text roles and spacing/radius figures are measured. Surface blacks are visual reads from screenshots.

## Captured pages

[![Gemini 3.1 Pro — Performance table](https://pin.fontofweb.com/9520?format=jpg)](https://design.withfudge.com/share/pin-9520)

[Gemini 3.1 Pro — Performance table](https://design.withfudge.com/share/pin-9520)

[![Gemini 3.1 Pro — alternate frame](https://pin.fontofweb.com/9519?format=jpg)](https://design.withfudge.com/share/pin-9519)

[Gemini 3.1 Pro — alternate frame](https://design.withfudge.com/share/pin-9519)

[![Gemma 4 launch](https://pin.fontofweb.com/8705?format=jpg)](https://design.withfudge.com/share/pin-8705)

[Gemma 4 launch](https://design.withfudge.com/share/pin-8705)

[![Gemini model card chrome](https://pin.fontofweb.com/6854?format=jpg)](https://design.withfudge.com/share/pin-6854)

[Gemini model card chrome](https://design.withfudge.com/share/pin-6854)

## Colors

- `#f8f9fc`
- `#b2bbc5`
- `#0a0a0a`
- `#ffffff`

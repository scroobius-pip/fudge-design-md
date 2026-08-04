# How bolt.new is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/bolt.new-design)

Last updated: 2026-08-04

## Captured pages

[![Dark builder workspace with left chat rail and large preview stage](https://pin.fontofweb.com/6001?format=jpg)](https://design.withfudge.com/share/pin-6001)

[Dark builder workspace with left chat rail and large preview stage](https://design.withfudge.com/share/pin-6001)

[![Centered marketing hero with bordered role cards and dark panels](https://pin.fontofweb.com/6000?format=jpg)](https://design.withfudge.com/share/pin-6000)

[Centered marketing hero with bordered role cards and dark panels](https://design.withfudge.com/share/pin-6000)

[![Blue design-system board with swatches, type samples, and tiles](https://pin.fontofweb.com/5999?format=jpg)](https://design.withfudge.com/share/pin-5999)

[Blue design-system board with swatches, type samples, and tiles](https://design.withfudge.com/share/pin-5999)

## Overview

Bolt.new uses one visual language for two related surfaces: the marketing page and the builder workspace. Both feel like a dark developer cockpit rather than a glossy consumer site. The canvas stays near-black, the borders stay visible, and the blue action color does almost all of the emphasis work. That restraint matters. The page does not depend on ornament or on a heavy display-font hierarchy; it depends on tight geometry, readable Inter text, and large areas of empty space that make the active panel feel intentional.

The workspace view is the clearest expression of the system: a narrow left rail for conversation, a wide preview stage on the right, and a compact top bar that holds mode icons and publishing actions. The marketing views reuse the same attitude at a larger scale. Centered headings sit above bordered cards, and the cards contain nested screenshots, charts, toggles, and short explanatory copy. The result is one family of surfaces that can move from editor to promotional page without changing temperament.

## Colors

The palette is deliberately narrow. Most surfaces live in a dark charcoal range, so tiny shifts in tone separate the shell, the inset panes, and the border lines. Blue carries all action weight. Purple appears only as a secondary accent in the swatch board, which keeps the brand from feeling noisy. White comes in two forms: a clean white for the brightest labels and a slightly softened white for broad headline text. Mid-greys handle secondary copy, status text, and quiet metadata.

The dark charcoal UI is the base layer. Brighter card fills, image-backed panels, and white-headed showcase blocks sit on top of it as contained counter-surfaces, so the page can move between flat shells and brighter content areas without changing tone. Blue and purple stay accent-only treatments for actions and examples; they never replace the dark base mode.

| token | value | use |
|---|---|---|
| `deep-black` | `#000000` | The deepest cuts in the chrome and rare mark details |
| `action` | `#1488FC` | Primary buttons, links, and the strongest interactive emphasis |
| `action-strong` | `#3B82F6` | Secondary blue emphasis in charts, chips, and illustrated highlights |
| `action-soft` | `#2BA6FF` | Lighter blue accents in the design-system board and helper cues |
| `canvas` | `#1E1E21` | Main page background behind the rails and marketing panels |
| `surface` | `#171719` | Inset panels, cards, and the main content stage |
| `surface-raised` | `#2C2C30` | Hairline borders and raised shell edges |
| `muted-ink` | `#525252` | Disabled or low-contrast text and quiet chrome labels |
| `subdued-ink` | `#73737B` | Secondary helper copy and less prominent UI text |
| `soft-ink` | `#A3A3AC` | Supporting text in the workspace and cards |
| `ink-soft` | `#FEFEFF` | Large headline text that should stay crisp but not harsh |
| `ink` | `#FFFFFF` | Strong text, icons, and button labels |
| `accent-purple` | `#8B5CF6` | Rare secondary accent on the swatch board and color samples |

The system works because dark surfaces and blue actions are never separated from one another. Blue appears on top of charcoal, not on white. White appears on dark panels, not on pale backgrounds. That consistent pairing lets the interface stay readable even when the page is mostly empty.

## Typography

Inter is the only visible family. The type system is compact and product-like. It does not chase oversized display drama through family switching; instead, it leans on weight, alignment, and contrast against the dark canvas. In the retained measurements, 18px is the top size, so the page gains presence from boldness and spacing rather than from a huge size ladder. Licensing details for Inter are not supplied here.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Inter | 1.125rem | 700 | 1.2 | -0.02em | Large centered marketing headings |
| `section-display` | Inter | 1rem | 700 | 1.25 | -0.015em | Feature titles and showcase headings |
| `body` | Inter | 1rem | 400 | 1.5 | 0em | Explanatory copy, rail text, and panel body text |
| `body-medium` | Inter | 1rem | 500 | 1.5 | 0em | Button labels, active controls, and emphasized copy |
| `label` | Inter | 0.875rem | 500 | 1.43 | 0em | Tabs, small control text, and short captions |
| `small-note` | Inter | 0.875rem | 400 | 1.43 | 0em | Helper lines, timestamps, and quiet status text |

The hierarchy stays readable because the strongest headings are centered or isolated inside cards, while the body copy remains short and close to the controls it explains. The page should keep line lengths short in the rail and allow the center stage to breathe. That balance is more important than pushing size upward.

## Layout

The workspace layout uses a strong two-column split. The left rail stays narrow and functions like a conversation and control column. It stacks a small header, a message stream, and a bottom composer. The right side is much larger and behaves like a preview or output stage. Its emptiness is part of the layout language: the center of the stage is supposed to feel open, as if the page is waiting for the next build result. Hairline borders and 12px corners keep the split visible without making it feel boxed-in.

The top bar is thin and dense. It holds compact icon groups, a path or mode field, and action buttons at the far edge. This strip should remain visually lighter than the content beneath it. Padding stays close to the 16px, 24px, and 32px steps from the packet, with the larger 40px and 64px measures reserved for the marketing page and the wide sections that need extra air.

The marketing page uses centered composition. The headline stack sits above a row of large cards, each card framed by a dark border and a modest radius. Inside those cards, nested panes, charts, screenshots, or checklist tiles create depth without introducing shadows. The blue design-system showcase pushes that pattern further: a centered title, small color chips, broad sample swatches, and a staged set of type and component examples.

## Visual language

Bolt.new feels like a controlled builder environment, not an office dashboard. The visual language is made from quiet surfaces, thin borders, and small blue flashes rather than from ornament. The brand mark is minimal. Icons are spare. Panels sit close together but still breathe because the borders hold them apart. That combination gives the interface a precise, technical mood without turning hard or mechanical.

The empty preview stage is important. It is not a dead zone; it is the visual pause that makes the rest of the shell feel active. The left rail, by contrast, is dense and conversational. This contrast between dense and open spaces is one of the main ordering principles of the design. The marketing views use the same principle with cards: each card is a contained world, and the grid keeps enough gap between them that the page still feels composed rather than crowded.

Color usage is similarly disciplined. Blue is the only persistent action color. Purple is a supporting accent, not a competing brand note. White text against charcoal surfaces gives the interface its clarity, while the slightly softened white helps larger headings feel less stark. Shadows are not part of the language. Borders and fill contrast do the structural work.

## Components

### Shell and top bar

- **Anatomy:** Brand mark, mode icons, a central field, and right-aligned share or publish actions.
- **Surface:** Near-black chrome with a slightly darker content inset beneath it.
- **Typography:** Small Inter labels and compact button text.
- **Shape:** 12px corners on controls, with pill-like treatment on the strongest actions.
- **Spacing:** Tight horizontal padding; compact vertical rhythm.
- **Visible states:** One icon group reads as active through blue fill, while the main action buttons stay bright against the dark bar.

### Conversation rail

- **Anatomy:** Small header, message history, status line, and a bottom composer.
- **Surface:** Flat charcoal panel with a visible border rather than a shadow.
- **Typography:** 16px body text for the main message, 14px helper text for status and hints.
- **Shape:** Rounded but not soft to the point of blurring; the composer sits inside a 12px panel.
- **Spacing:** The rail compresses content vertically and leaves only a small amount of breathing room between items.
- **Visible states:** The lower input area reads as ready for action through contrast and a blue send control.

### Preview stage

- **Anatomy:** Large empty field with a centered placeholder mark and a quiet footer area.
- **Surface:** The same dark family as the rail, but opened up into a much larger uninterrupted plane.
- **Typography:** Small, low-contrast helper text.
- **Shape:** Wide rounded frame, hairline border, and minimal internal decoration.
- **Spacing:** Generous interior space, especially around the center point.
- **Visible states:** The stage should stay subdued until content arrives; the placeholder exists to mark the center, not to compete with it.

### Marketing role cards

- **Anatomy:** Centered heading stack above a row of bordered cards, each with a title, short copy, and nested product or analytics imagery.
- **Surface:** Deep charcoal with a slight tonal separation between the card fill and the page background.
- **Typography:** Strong 16px titles and lighter supporting copy beneath them.
- **Shape:** 12px to 24px corners depending on the card scale.
- **Spacing:** Cards need enough width to hold small internal demos without feeling crowded.
- **Visible states:** The content inside each card can be a version list, a publish panel, a chart, or a checklist, but the chrome remains the same.

### Design-system showcase

- **Anatomy:** Centered title, color chips, component samples, and oversized type examples.
- **Surface:** A deep, uniform stage that lets the blue swatches and white type read cleanly.
- **Typography:** Heavy heading treatment, then a compact sequence of sample text sizes.
- **Shape:** Rounded panels and swatches, with visible borders around the sample blocks.
- **Spacing:** The composition is open and symmetrical, with enough room around every sample to make the system legible.
- **Visible states:** Bright blue samples become the dominant emphasis, while dark swatches and neutral blocks support them.

## Responsive behavior

The visual system should collapse by preserving order, not by changing character. The rail should stack before the stage becomes cramped. The top bar should keep its compact control language even when it wraps. Marketing cards should move from three across to fewer columns without changing border weight, text color, or the blue action tone. The page can become narrower, but it should not become brighter, flatter, or more decorative. The same dark surfaces and blue emphasis need to remain the anchor at every width.

## Practical implementation guidance

### Preserve

- Keep the dark shell, narrow rail, and wide stage relationship intact.
- Keep 1px borders visible on panels, cards, and controls.
- Keep blue as the only durable action color.
- Keep Inter as the single text family.
- Keep the page calm; empty space is part of the design.

### Avoid

- Avoid drop shadows as the main source of depth.
- Avoid introducing additional bright accent colors.
- Avoid turning panels into soft glass or glossy cards.
- Avoid pushing type beyond the 14/16/18px ladder.
- Avoid filling the preview stage with decorative noise.

### Recommended build order

1. Build the dark shell and border system first.
2. Add the top bar and the left conversation rail.
3. Establish the large preview stage and its empty-state center.
4. Recreate the marketing card grid with the same border and radius language.
5. Finish with the design-system showcase and its blue-led swatches.

### Accessibility

- Keep light text on dark surfaces at strong contrast.
- Make icon-only controls readable with labels or accessible names.
- Preserve visible focus treatment on every control.
- Keep helper text readable; do not let muted text become decorative.
- Avoid relying on color alone for active states; use shape, placement, and border contrast as well.

## Scope note

This guide covers the desktop marketing page and builder workspace shown in the supplied views. It does not include mobile breakpoints, motion, hover or focus choreography, loading states, error states, or alternate authenticated branches that are not visible here. Inter licensing is not specified in the supplied material.

# How deepmind.google is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/deepmind.google-design)

Last updated: 2026-08-08

## Captured pages

[![Tabbed performance table with the footer sitting below the benchmark rows](https://pin.fontofweb.com/9520?format=jpg)](https://design.withfudge.com/share/pin-9520)

[Tabbed performance table with the footer sitting below the benchmark rows](https://design.withfudge.com/share/pin-9520)

[![Large headline block with stacked real-world-knowledge copy on a dark stage](https://pin.fontofweb.com/9519?format=jpg)](https://design.withfudge.com/share/pin-9519)

[Large headline block with stacked real-world-knowledge copy on a dark stage](https://design.withfudge.com/share/pin-9519)

[![Capability cards beside the paired model-size panels on the charcoal page](https://pin.fontofweb.com/8705?format=jpg)](https://design.withfudge.com/share/pin-8705)

[Capability cards beside the paired model-size panels on the charcoal page](https://design.withfudge.com/share/pin-8705)

## Overview

Google DeepMind’s model pages use a dark, centered system that turns technical content into a calm editorial layout. A compact tab rail leads into a large statement block, then the page opens into wide benchmark tables, strong section headings, and generous card panels. The result is serious without feeling cold. The page keeps one clear rhythm from top to bottom, so the reader can move from the lead message to the data and then into supporting sections without losing place.

The design depends on restraint. Dark fields, pale text, and one blue accent do most of the work, while size, spacing, and alignment provide the real hierarchy. The lead block feels spacious and headline-driven. The benchmark section feels orderly and precise. The capability cards and model-size panels keep the same calm tone, so the whole page reads like one system rather than a stack of unrelated modules.

## Colors

The palette stays close to black, charcoal, and cool off-white. `canvas` is the main stage color for the body of the page. `surface` is the deepest black and works best for the footer, small wells, and the darkest control areas. `ink` is the near-white text color for headlines and core copy, while `muted-ink` softens labels, table notes, and secondary descriptions. `border` is the pale line color that separates rows and card edges without creating a heavy frame. `surface-quiet` is the light reversed fill used by the selected pill and other highlighted controls. `action` is the only saturated color, so it should stay small and deliberate.

| token | hex | use |
|---|---|---|
| `action` | `#0000EE` | Small blue marks, links, and other sparse accents |
| `ink` | `#F8F9FC` | Main headings, paragraphs, and table text on dark surfaces |
| `muted-ink` | `#B2BBC5` | Secondary lines, notes, and lower-priority labels |
| `canvas` | `#121317` | Main page background and broad dark panels |
| `surface` | `#000000` | Deep footer areas and the darkest control wells |
| `surface-quiet` | `#F9F9FB` | Selected pill fill and other reversed light controls |
| `border` | `#E6EAF0` | Hairline rules, row dividers, and card outlines |

The relationship between light and dark is simple: dark surfaces carry the page structure, while light text and the bright selected pill create the key contrast points. There is no separate photographic color system in the interface itself, so the page stays UI-first rather than tinted by imagery. The blue accent should remain a small signal color, not a general fill color. If it spreads too far, the page loses the measured, technical tone that makes the layout feel intentional.

## Typography

Google Sans Flex carries the visible page text. Applesystem and Times sit in the fallback stack, but they do not become separate visual voices in the layout. Google Symbols is listed in the family set, but it is not used as a reading face in the visible pages. Verify licensing for these families before production use. The type system stays calm and regular, with size and spacing doing more work than weight changes.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Google Sans Flex | 3.5rem | 400 | 1.05 | -0.03em | Large lead statements and the biggest page headlines |
| `section-display` | Google Sans Flex | 2.5rem | 400 | 1.1 | -0.02em | Section titles such as Performance, Capabilities, and Model sizes |
| `card-heading` | Google Sans Flex | 1.5rem | 400 | 1.15 | -0.01em | Card titles and mid-size headings inside panels |
| `body` | Google Sans Flex | 1rem | 400 | 1.5 | 0em | Paragraphs, notes, and supporting copy |
| `body-medium` | Google Sans Flex | 1rem | 500 | 1.5 | 0em | Tabs, buttons, and emphasized inline labels |
| `label` | Google Sans Flex | 0.75rem | 500 | 1.25 | 0.08em | Small labels, chips, and compact table heads |
| `legal-copy` | Google Sans Flex | 0.75rem | 400 | 1.4 | 0em | Footer text and fine-print lines |
| `auxiliary-face` | Google Symbols | 1rem | 400 | 1 | 0em | Listed family; not used as a reading face in the visible pages |

The hierarchy is deliberately soft at the top and denser in the data sections. Headlines use a regular weight rather than a heavy one, which keeps the page elegant on the dark background. Labels gain clarity through spacing and tracking rather than a different font personality. That choice helps the benchmark matrix, cards, and footer feel like parts of one system.

## Layout

The page is built around a centered reading rail with large dark fields on both sides. On a wide desktop screen, the content sits far inside the viewport, which makes the whole page feel deliberate and composed. That center rail stays consistent from the tab strip through the lead statement, the benchmark table, the card grids, and the footer. The reader always knows where the main content lives because the left edge and the rhythm of the sections do not wander.

The top row is a pill-shaped section navigator. The selected tab turns light and rounded, while the inactive tabs stay dark and quiet. Below that, the lead block uses wide padding and a large text scale so the opening statement lands with weight before the page shifts into dense information. The benchmark panel needs enough width to keep the name column, sublabels, and score columns aligned across many rows. Its vertical rhythm is tight enough to stay compact, but not so tight that the numbers feel crowded.

The capability section changes shape without changing tone. It uses a four-up card grid, each tile holding a centered blue mark, a title, and a short explanation. The model-size section switches to two large panels, each one broad enough for a chip label, a headline, and a diagram-like illustration. These cards still obey the same centered rail and rounded geometry, which keeps the page from feeling like it has moved into a different product. The footer lowers the tempo again with follow links, a sign-up strip, grouped navigation columns, and a final legal row.

The spacing system is generous but controlled. Large horizontal gutters keep the content away from the screen edges. Section gaps are broad enough to make the page feel chapter-based. Smaller gaps within each block keep the copy readable and the cards balanced. The result is a layout that feels spacious, technical, and highly structured.

## Visual language

The visual language is quiet, precise, and slightly futuristic. Most surfaces differ only by a small shift in brightness, so the page relies on scale, alignment, and spacing for emphasis. The selected pill is the most obvious high-contrast element, and the blue accent is used as a technical signal rather than a decorative flourish. Table rules are thin and pale, which gives the benchmark area an edited, almost published feel. Rounded corners soften the large blocks, but they do not become playful or bubbly.

The page avoids glossy effects. It does not need gradients, layered shadows, or complex image treatments to communicate depth. The dark surfaces already create enough separation between sections. Copy stays clear and calm, and the interface never fights the content for attention. That is what makes the page feel authoritative: the layout supports the information instead of performing around it.

## Components

### Lead statement block

**Anatomy:** A large page title, a stacked supporting statement, and a broad panel that frames the opening message.  
**Surface:** The block sits on the same dark canvas as the rest of the page, so it reads as a direct extension of the system rather than a separate hero treatment.  
**Typography:** Use `hero-display` for the main line and `body` for the supporting copy. The lines should stay tightly grouped so the message reads as one unit.  
**Shape:** The surrounding panel uses `rounded.panel`, which keeps the block soft without losing the strong rectangular geometry.  
**Spacing:** Give the block enough internal room for the headline to breathe. The text should feel open at the top and stable at the bottom.  
**Composition:** Keep the title left aligned and the paragraph locked beneath it. The block should feel wide and editorial, not centered and poster-like.  
**Visible states:** No special active state is needed. The strength of the block comes from scale and placement.

### Segmented navigation

**Anatomy:** A dark rail, several chapter pills, and small arrow controls at one end.  
**Surface:** The rail blends into the canvas, while the selected pill flips to the light reversed fill.  
**Typography:** Use `body-medium` so the labels remain readable and compact.  
**Shape:** The rail and each pill are fully rounded, giving the row a smooth capsule profile.  
**Spacing:** Keep the labels spaced comfortably from one another, with enough inset to avoid a crowded strip.  
**Composition:** The row should feel like a chapter switcher that sits above the content, not inside it.  
**Visible states:** The active state needs a visible fill change, not just a text-color shift.

### Benchmark panel

**Anatomy:** Section title, short intro, benchmark names, sublabels, and score columns spread across a long table.  
**Surface:** The panel is a large dark card with pale row rules and quiet text contrast.  
**Typography:** Use `section-display` for the heading and `body` or `body-medium` for the table text.  
**Shape:** The block uses `rounded.panel`, which softens the outer edges without weakening the grid inside it.  
**Spacing:** The panel needs broad outer padding and tight row rhythm so the data stays aligned and easy to scan.  
**Composition:** The left column anchors the row names, while the score columns stay evenly spaced to the right.  
**Visible states:** Strong scores can be bolded sparingly, but the overall table should still feel calm and editorial.

### Capability card

**Anatomy:** A large centered blue mark, a title, and a short explanation below it.  
**Surface:** The card is a dark tile with minimal edge treatment and a very quiet background shift.  
**Typography:** Use `card-heading` for the title and `body` for the description.  
**Shape:** The tile uses `rounded.panel`, which keeps the card clear and sturdy.  
**Spacing:** The icon area needs ample internal room, and the text below should sit with enough separation to feel like a second layer.  
**Variants:** Each tile repeats the same structure with a different topic and mark.  
**Visible states:** The card does not depend on a loud hover effect; consistency and spacing carry the hierarchy.

### Model-size panel

**Anatomy:** A small chip label, a headline, a supporting line, and a diagram-like illustration.  
**Surface:** The panel stays in the same dark family as the rest of the page, but the illustration adds a brighter focal point.  
**Typography:** Use `section-display` or `card-heading` for the headline, depending on length, and `body` for the supporting line.  
**Shape:** Keep the cards large and rounded, with the diagram centered low in the panel.  
**Spacing:** Leave generous space above the illustration so the headline can sit comfortably.  
**Composition:** The chip should act as a quiet tag, not as a decorative badge. The illustration should feel technical and controlled.  
**Visible states:** The two side-by-side panels should read as siblings with the same structure and different content.

### Footer

**Anatomy:** Follow links, a sign-up strip, grouped navigation columns, and a final legal row.  
**Surface:** The footer drops into the deepest surface in the system and should feel quiet and grounded.  
**Typography:** Use `legal-copy` for the smallest lines and `body` or `body-medium` for the link groups and sign-up prompt.  
**Shape:** The input field stays long and low, while the button keeps a pill shape.  
**Spacing:** Keep the columns widely separated and the row gaps restrained so the footer remains orderly.  
**Composition:** Put the sign-up strip above the link columns, then keep the groups aligned in a neat grid.  
**Visible states:** The footer should end the page gently, not restart the visual language.

## Responsive behavior

On narrower screens, reduce the wide side gutters before shrinking the typography too much. The tab rail can stay horizontal, but it should scroll or compress gracefully instead of wrapping into awkward rows. The benchmark table should preserve its order; if the columns become too tight, horizontal scrolling is better than crushing the alignment. The capability cards should step from four columns to two and then to one, while the model-size panels should stack without losing their chip labels or illustration balance. The footer should collapse to fewer columns before the small legal text becomes hard to read.

Keep the same hierarchy at every size: tab rail first, lead statement second, data third, supporting content last. The active pill must stay obvious, the table must stay legible, and the card spacing must stay generous even when the layout tightens.

## Practical implementation guidance

### Preserve

- Keep the page dark, centered, and spacious.
- Use `action` only for small blue accents.
- Retain the pill navigation and the large rounded panels.
- Keep table rules thin and pale.
- Let spacing and alignment do most of the hierarchy work.

### Avoid

- Avoid bright gradients and decorative shadow layers.
- Avoid extra accent colors beyond the blue signal color.
- Avoid serif headings or mixed font personalities.
- Avoid tiny radii that make the cards feel brittle.
- Avoid compressing the benchmark table until the score columns lose their rhythm.

### Recommended build order

1. Set the dark canvas, light text, and type scale.
2. Build the segmented navigation and its active pill state.
3. Add the lead statement block and the benchmark panel.
4. Build the capability cards and model-size panels as reusable dark panels.
5. Finish with the footer, sign-up strip, and grouped links.

### Accessibility

- Keep text contrast strong on the dark canvas and on the darker footer surface.
- Make the active tab obvious through fill, not color alone.
- Give icon-only controls clear labels and visible focus rings.
- Preserve readable line lengths in the lead block and footer text.
- Keep secondary labels legible instead of letting them fade into the background.

## Scope note

This guide covers the dark desktop model pages for Gemini and Gemma, including the tab strip, the lead statement block, the benchmark table, the capability cards, the model-size panels, and the footer. It does not define mobile breakpoints, animation, loading or error states, or alternate light themes. Type and spacing values use a 4px step.

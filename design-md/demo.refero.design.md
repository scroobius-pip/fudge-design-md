# How demo.refero.design is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/demo.refero.design-design)

Last updated: 2026-08-08

## Captured pages

[![Centered transcript, search-result grid, and bottom composer on the dark workspace](https://pin.fontofweb.com/7786?format=jpg)](https://design.withfudge.com/share/pin-7786)

[Centered transcript, search-result grid, and bottom composer on the dark workspace](https://design.withfudge.com/share/pin-7786)

[![Centered logo network, suggestion chip matrix, and the same dark prompt shell](https://pin.fontofweb.com/7776?format=jpg)](https://design.withfudge.com/share/pin-7776)

[Centered logo network, suggestion chip matrix, and the same dark prompt shell](https://design.withfudge.com/share/pin-7776)

## Overview

demo.refero.design is a dark research workspace for comparing interface patterns. The page is built from a near-black canvas, soft charcoal cards, and small system text that keeps attention on the screenshot tiles and suggestion chips. The visual order is consistent across both shown states: a compact top pill, a narrow reading column, one or more result cards, and a bottom composer. The alternate start state replaces the transcript with a centered logo network and a tight chip grid, but the same low-key shell, border rhythm, and white controls hold the page together. The whole system feels analytical and quiet rather than promotional.

The design does not rely on a broad color palette or large type gestures. Instead, it uses repetition: rounded dark containers, faint seams, small labels, and bright thumbnail content inside the cards. That combination makes the page read like a working tool, with the content hierarchy driven by structure and spacing instead of decoration. The result is a controlled workspace that can support long, layered comparisons without losing clarity.

## Colors

This palette is almost entirely monochrome. The outer field stays very close to black, the cards lift only a step above it, and off-white text does most of the work. The brightest tone is reserved for direct controls and the clearest labels, so the shell never feels noisy. Medium gray handles status, counts, and secondary hints. Borders remain visible but restrained, which keeps the cards separated without turning the page into a harsh grid. There is no saturated brand accent; the difference between modes comes from surface depth, not from a shift to brighter hues.

| token | value | role |
|---|---|---|
| `action` | `#FAFAFA` | Primary control fill, top-pill text contrast, and the brightest utility labels |
| `action-ink` | `#09090B` | Glyphs and text sitting inside the bright control fill |
| `ink` | `#FAFAFA` | Main text on dark surfaces and card headers |
| `muted-ink` | `#A1A1AA` | Metadata, helper labels, and the composer placeholder |
| `canvas` | `#09090B` | Main page field and the quiet background around every card |
| `canvas-deep` | `#000000` | The deepest outer edge of the shell |
| `surface` | `#18181B` | Raised cards, chips, prompt bubbles, and docked fields |
| `border` | `#18181B` | Hairline borders around cards, chips, and controls |

The color system works because contrast is kept simple. White text and white button fills stand out against the charcoal field, while gray text stays secondary without disappearing. Thin borders and nearly matching surfaces create separation by tone, not by contrast spikes. That gives the workspace a steady, editorial calm even when it contains many thumbnails and labels at once.

## Typography

The page keeps type compact and UI-like. There is no large display hierarchy; even the top title pill and section headers stay close to body size. Weight, spacing, and placement do the hierarchy work. That choice keeps the interface feeling like a tool for comparison rather than a marketing page. The system font should stay neutral, tight, and readable at small sizes. Verify licensing for this family before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `page-title` | System | 1.125rem | 600 | 1.25 | 0em | Top session pill and the strongest compact labels |
| `section-title` | System | 1rem | 600 | 1.25 | 0em | Card headers and short module titles |
| `body` | System | 0.875rem | 400 | 1.5 | 0em | Reasoning text, helper copy, and general explanation |
| `body-medium` | System | 0.875rem | 500 | 1.45 | 0em | Chips, small controls, and emphasized interface text |
| `meta` | System | 0.75rem | 500 | 1.4 | 0.01em | Platform tags, limits, captions, and status text |
| `composer-placeholder` | System | 0.875rem | 400 | 1.4 | 0em | Bottom input placeholder and quiet field text |

The scale stays in a narrow band around 14 to 18px. That range is what gives the page its calm, technical feeling. Small increases in weight and a little extra leading are enough to separate labels from paragraphs. The cards never ask for decorative type treatment, so the typography should remain plain and disciplined. That restraint is part of the brand feel.

## Layout

The page uses a centered column with generous side gutters that keep the shell calm. On wide screens, the working column stays narrow enough that the transcript and cards can be scanned without much eye travel. The top pill sits near the upper edge, then the prompt bubble shifts to the right so the page reads as a back-and-forth exchange. Below that, the reasoning block forms a thin vertical rail: a compact label, a light left rule, and short paragraphs and list items. It behaves like a preface, not like a full article.

Each result card is a large rounded block with its own header row and a dense thumbnail matrix. The thumbnails sit in a regular grid with even gaps, and the overflow tile completes the row so the card never feels unfinished. The card footer stays quiet and low-contrast, which keeps the thumbnails as the main event. The bottom composer anchors the viewport and uses its own dark tray so the typing area feels separate from the transcript above it.

The alternate start state keeps the same centered logic but swaps in a different focal point. A large connected logo network sits in the middle of the page, with a matrix of suggestion chips below it and the same composer at the bottom. That repetition matters: the page should feel like one system that can switch content modes, not like two unrelated screens stitched together.

## Visual language

The visual language is technical, quiet, and slightly cinematic. Everything sits on flat dark planes with just enough lift from cards, pills, and borders to create depth. The strongest contrast comes from the bright thumbnails inside the result cards; they act like windows inside the shell and keep the page from becoming a wall of dark gray. Corners are rounded but not overly soft. The session pill, chips, and composer button lean into capsule geometry, while the larger cards stay closer to standard panel rounding.

Icons are spare and monochrome, so they read as structural cues rather than decoration. The header magnifier, the close mark in the top pill, and the small send button all support the interface without adding visual clutter. In the home state, the connected logo map adds a sense of relationship and flow. The thin lines and small node dots are important because they give the page a framework without forcing the palette to expand. There are no glossy glows or decorative gradients here; tone, spacing, and content contrast do the work.

The system feels strongest when the shell stays almost empty and the cards stay precise. That emptiness is not a lack of design; it is the frame that lets the search results and chips carry the page.

## Components

### Session pill

The session pill is a compact top capsule with a close mark and a short title. It should use the darkest raised surface, bright text, and fully rounded ends so it reads like a status tag rather than a banner. The text sits tight inside the shape, with just enough padding to keep the pill calm. Keep the title short and centered in the available width. The pill establishes the page’s tone immediately: small, controlled, and workmanlike.

### Prompt bubble

The prompt bubble is a right-aligned dark message box with compact body text. It is wider than the title pill, but it keeps the same low-key surface and a restrained border. Its job is to look like a user message that belongs inside the same workspace, not a floating conversation card. The bubble should have enough internal padding to feel comfortable, but not so much that it becomes soft or promotional. Line length matters here because the bubble needs to hold a few wrapped lines without feeling tall or awkward.

### Reasoning block

The reasoning block is a narrow text rail with a small heading, a vertical rule, and short paragraphs or bullets. Its surface is mostly transparent against the page field, so the structure comes from the rule and the spacing around the text. The copy should remain muted and lower in visual weight than the results below it. This block is strongest when it feels like a working note: concise, ordered, and slightly recessed. It should not compete with the screenshot grids that follow.

### Result card

The result card is the main unit of the page. It begins with a header row that combines a small icon, a search label, and quiet metadata on the right. Below that sits a thumbnail grid with regular spacing and uniform tile sizes. Captions stay close to the thumbnails and remain small enough to support the grid rather than interrupt it. An overflow tile such as “11 more” completes the row and keeps the module compact. The footer link should stay low contrast and understated. The whole card should feel like a self-contained comparison board, not a generic content card.

### Suggestion chip

Suggestion chips appear in the alternate start state. Each chip is a capsule with a search icon and a short query string. They should be evenly sized, evenly spaced, and visually balanced so the grid reads as a clean launcher of ideas. The border must stay subtle, and the text should sit centered enough to make the chip feel deliberate. Chips are a place for micro-contrast: slightly brighter text, slightly lighter border, same deep surface.

### Network hero graphic

The network hero graphic uses a central logo node connected to several app badges by thin lines and small dots. It is a visual map rather than an illustration with a story. The balance is important: no badge should dominate, and the center mark should remain the clear anchor. Keep the surrounding nodes evenly spaced, and let the dark background do most of the framing. The graphic should feel like a diagram of relationships, not like a decorative collage.

### Composer

The composer is a bottom-docked field with a broad typing area and a square action button. The placeholder sits at the upper-left corner of the field, while the button hugs the lower-right edge. That layout makes the action obvious without making the field feel heavy. The field surface should stay slightly lifted from the canvas, with a visible edge and enough internal room for long prompt text. It should feel calm, ready, and uncluttered.

## Responsive behavior

On narrower screens, the same order should hold: title, prompt, reasoning, cards, composer. The cards may stack, but the relationship between the header row, the thumbnail grid, and the footer link should remain intact. The suggestion-chip grid can wrap into fewer columns, yet the chips themselves should keep their capsule feel and consistent height. The composer should stay reachable at the bottom of the viewport without taking over the whole screen. If the top pill or prompt bubble compresses, the text should reflow before the controls do.

The dark shell should remain dark at every width, and the contrast between the shell and the bright thumbnails should stay strong. The result modules should not become full-bleed blocks. The workspace reads best when it remains centered and measured, even on smaller layouts.

## Practical implementation guidance

### Preserve

- Keep the page close to monochrome, with off-white text and one very bright control fill.
- Preserve the centered column and the large side gutters that make the shell feel focused.
- Use small type, short labels, and tight leading so the cards stay worklike.
- Keep result cards, chips, and the composer slightly lifted above the canvas instead of introducing glossy depth.
- Let the thumbnail grids carry most of the visual energy.

### Avoid

- Avoid saturated accents, gradients, or decorative color shifts.
- Avoid large display headlines or marketing-style hero copy.
- Avoid mixing too many corner radii in one screen; keep cards, chips, and controls in a small rounded family.
- Avoid heavy shadows or chrome that makes the shell feel glossy.
- Avoid turning metadata into loud badges.

### Recommended build order

1. Establish the dark canvas, raised surface, and hairline border tokens.
2. Set the compact type scale and the small hierarchy between titles, body copy, and meta text.
3. Build the session pill, prompt bubble, and reasoning block as the core reading stack.
4. Build the result card with its header row, thumbnail grid, overflow tile, and quiet footer link.
5. Add the composer and then the suggestion-chip grid and network hero graphic for the alternate start state.

### Accessibility

- Keep contrast strong between text and the dark shell, and re-check the thumbnail captions against the final surface tone.
- Give icon-only controls clear labels so the close mark and action button are understandable on their own.
- Keep keyboard focus visible on chips, links, and the composer action button.
- Make the placeholder supportive, not the only field label.
- Provide meaningful text alternatives for the thumbnails and the network graphic.

## Scope note

This guide covers the dark desktop research workspace and its alternate start state: session pill, transcript column, result cards, suggestion chips, network graphic, and bottom composer. It does not cover mobile layout, loading or empty variants, motion, or the full interactive state set.

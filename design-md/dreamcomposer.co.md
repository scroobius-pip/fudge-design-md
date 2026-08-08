# How dreamcomposer.co is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/dreamcomposer.co-design)

Last updated: 2026-08-08

## Captured pages

[![Warm burgundy home view with pink dotted wordmark and cream quote cards](https://pin.fontofweb.com/8792?format=jpg)](https://design.withfudge.com/share/pin-8792)

[Warm burgundy home view with pink dotted wordmark and cream quote cards](https://design.withfudge.com/share/pin-8792)

[![Cool charcoal home view with mint dotted wordmark and the same rounded card wall](https://pin.fontofweb.com/8791?format=jpg)](https://design.withfudge.com/share/pin-8791)

[Cool charcoal home view with mint dotted wordmark and the same rounded card wall](https://design.withfudge.com/share/pin-8791)

## Overview

DreamComposer is built like a public idea wall. The page opens with a full-width dotted wordmark, then a large left-aligned statement that explains the product in plain language, with a small credit line anchored at the far right. Beneath that, a tight grid of rounded cards presents short prompts and community-style quotes. The structure is simple, but the contrast between the top banner and the card wall gives the page its character.

The strongest visual signal is the two-theme palette swap. One version uses a warm burgundy canvas with a bright pink logo and accent tile. The other uses a charcoal canvas with a pale mint logo and accent tile. In both versions, the cream cards and black mono text stay constant, so the page feels stable while the atmosphere changes. That balance between repeated structure and shifting mood is the core of the system.

## Colors

DreamComposer relies on a small palette with one dark canvas, one paper surface, two bright accents, and a single black ink color. The card field keeps the same cream surface across both theme variants, which makes the content easy to scan even when the page background changes. The warm and cool canvases carry the mood, while the pink and mint accents animate the top banner and the leading tile in the grid.

| token | value | role | use |
|---|---|---|---|
| `canvas-warm` | `#5A110A` | warm dark canvas | Page background in the burgundy version |
| `canvas-cool` | `#2B2A24` | cool dark canvas | Page background in the charcoal version |
| `canvas-paper` | `#FAFCF6` | paper surface | Prompt cards and pale utility fields |
| `ink` | `#000000` | text ink | Card copy, chips, and small labels |
| `accent-pink` | `#D95AC6` | warm accent | Dotted wordmark and the leading tile in the warm version |
| `accent-mint` | `#C8F3BF` | cool accent | Dotted wordmark and the leading tile in the cool version |

The page depends on contrast more than on decorative layering. Cream cards sit cleanly against the dark canvas, black text stays legible on the paper surface, and the accent colors are reserved for the logo line and the first tile so they feel intentional rather than noisy. There is no need for a large supporting palette; the visual language works because the same few colors repeat with discipline.

## Typography

The page uses a compact typography system built from two families and one utility fallback. `Geist` carries the large statement and the small support line, giving the top of the page a smooth, modern sans voice. `Ibm Plex Mono` carries the card copy and the tag chips, which makes the quote wall feel more handwritten, editorial, and maker-oriented. `System` is limited to tiny utility copy such as the right-side credit line. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Geist | 3.5rem | 700 | 1 | -0.03em | Main two-line statement |
| `hero-support` | Geist | 1rem | 500 | 1.25 | 0em | Small supporting line and similar utility copy |
| `card-copy` | Ibm Plex Mono | 0.875rem | 400 | 1.35 | 0em | Prompt text inside the rounded cards |
| `chip-label` | Ibm Plex Mono | 0.75rem | 500 | 1.1 | 0.01em | Hashtag pills at the bottom of cards |
| `credit-line` | System | 0.75rem | 500 | 1.2 | 0em | Right-aligned maker credit |

The hierarchy is clear because the display line is large and close-set, while the cards are smaller and more mechanical. The card text keeps a steady, compact rhythm, so long phrases remain readable even when they wrap across several lines. The small chip labels should stay lighter than the body text, not heavier; they are indicators, not competing headlines. The dotted wordmark is a separate graphic treatment and should remain outside the normal text stack.

## Layout

The layout is a long, single-column home page with a strong top-to-bottom rhythm. The wordmark spans almost the entire width, sitting right at the top edge of the canvas. Under it, the headline blocks the left side with two lines of large text, while the credit line stays small and quiet on the right. That asymmetry gives the opening section a casual, editorial balance rather than a centered poster look.

The card wall begins immediately below the hero. The first item is a large colored tile, and it works as the anchor for the grid. The rest of the tiles repeat as cream cards with the same rounded corners, the same internal padding, and the same footer structure. The repeated shape creates order, while the varying quote lengths keep the grid from feeling rigid. The outer page margin is generous, but the spacing between cards is still tight enough to read as one field.

The page does not depend on nested frames or obvious section dividers. Instead, the dark canvas does the separation work. The contrast between the background and the paper cards makes each card feel like an item placed on top of the page, not sunk into a dashboard. That is why the layout reads more like a communal notice wall than a software interface.

## Visual language

The visual language mixes playful graphics with plain, direct surfaces. The dotted wordmark feels beaded and handmade, almost like a stitched banner. The rounded cards feel like index cards or note cards, but the high-contrast typography keeps them from becoming nostalgic props. The small dotted chip outlines reinforce the handmade feel without adding weight.

The first colored tile is the loudest object in the grid. In the warm version it uses pink; in the cool version it uses mint. It is smooth, saturated, and nearly empty except for the centered plus-like mark, so it acts as a visual pause before the text cards begin. That one saturated tile makes the rest of the cream cards feel even calmer.

There is very little surface depth. No strong shadows are needed, and no glossy gradients are doing the work. The page gets its energy from contrast: dark canvas versus paper cards, bold title versus small mono copy, dotted top banner versus strict card grid. The result is lively but controlled.

## Components

### Shell and wordmark strip

- **Anatomy:** Full-bleed dark canvas, a wide dotted wordmark, and a tiny right-side credit.
- **Surface:** The warm version uses burgundy; the cool version uses charcoal.
- **Composition:** The wordmark stretches across the width and acts like a banner rather than a normal header.
- **Visible states:** The banner tint swaps between pink and mint, but the structure stays the same.
- **Spacing:** Keep generous top breathing room so the banner can sit close to the page edge without feeling cramped.

### Hero block

- **Anatomy:** A two-line statement on the left and a short credit line on the right.
- **Typography:** Heavy `Geist` with compact leading and slightly tightened tracking.
- **Hierarchy:** This is the main reading entry point after the banner.
- **Composition:** The left side should feel open and grounded; the right-side credit should stay quiet and secondary.
- **Visible states:** No button row or secondary action is shown in this block.

### Accent tile

- **Anatomy:** A large rounded colored tile with a centered plus-like symbol.
- **Surface:** Pink in the warm theme, mint in the cool theme.
- **Shape:** Very large corner rounding so the tile reads as soft and friendly rather than square.
- **Composition:** It begins the grid and sets the emotional tone for the cards that follow.
- **Visible states:** The tile appears as a clean default state, with no visible hover or pressed treatment.

### Prompt card

- **Anatomy:** A cream rectangle, a block of mono text, an author line, and a small dotted chip.
- **Surface:** Paper-colored fill with black ink.
- **Typography:** Card copy uses `Ibm Plex Mono`; the author line should remain small and restrained.
- **Shape:** Rounded corners that match the rest of the grid.
- **Spacing:** Modest internal padding keeps the text close to the top edge and leaves room for the footer row.
- **Composition:** The content sits top-left, while the author and chip sit low in the card, creating a stable reading path.
- **Visible states:** The card is shown in one resting style; do not add a stronger surface treatment unless it is backed by a visible state.

### Chip and byline system

- **Anatomy:** A dotted pill chip and a short author credit.
- **Surface:** The chip sits on the cream card surface and uses the same black ink as the card text.
- **Typography:** Small `Ibm Plex Mono` with a slight weight increase for the chip label.
- **Shape:** Fully rounded pill geometry with a dotted outline.
- **Hierarchy:** The chip is a label, not a badge that should pull attention away from the quote.
- **Visible states:** The author names are underlined in the page design, which gives them a non-color cue and keeps them readable against the card surface.

## Responsive behavior

When the layout narrows, keep the order intact: wordmark first, hero statement second, then the card field. The grid should collapse cleanly without changing the surface language of the cards or the accent tile. The first colored tile should still lead the grid, even if the number of columns drops. Preserve the roomy card padding so the mono copy does not crowd the edges. If the wordmark must scale down, keep its dotted rhythm intact instead of replacing it with a different treatment.

## Practical implementation guidance

### Preserve

- Keep the two dark canvas modes and the shared cream card surface.
- Keep the dotted wordmark as a signature banner.
- Keep the mono card copy and the small dotted chip labels.
- Keep the first colored tile as the anchor for the grid.
- Keep the rounded geometry consistent across cards, tiles, and pills.

### Avoid

- Avoid adding shadows, glossy depth, or layered gradients.
- Avoid introducing extra accent colors beyond the pink and mint pair.
- Avoid sharp corners, thin dividers, or enterprise-style panels.
- Avoid shrinking the card copy so far that the mono text becomes cramped.
- Avoid turning the wordmark into a plain text header.

### Recommended build order

1. Set the dark shell colors for the warm and cool modes.
2. Build the dotted wordmark strip and the small maker credit.
3. Establish the hero statement and its spacing.
4. Build the rounded card component and the chip/footer row.
5. Add the leading accent tile as the grid anchor.
6. Tune the grid gaps and card padding.
7. Test the warm and cool theme swaps against the same layout structure.

### Accessibility

- Keep the cream cards and black copy at strong contrast.
- Keep the light text on the dark canvas clearly legible.
- Do not rely on pink or mint alone to distinguish meaning; pair color with placement and text.
- Make sure the dotted wordmark has an accessible name if it is rendered as artwork.
- Provide visible keyboard focus on the chip and any other interactive element.
- Preserve readable line lengths in the hero and in the longest cards.

## Scope note

This guide covers the home landing page shown in the warm burgundy and cool charcoal modes, including the dotted logo strip, hero statement, and quote-card grid. It does not specify alternate pages, motion, hover states, detailed breakpoints, or unseen mobile arrangements. Measurements are practical adaptation targets.

# How cosmos.so is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/cosmos.so-design)

Last updated: 2026-08-08

## Captured pages

[![Centered sign-up hero with drifting tiles and oversized COSMOS wordmark](https://pin.fontofweb.com/8596?format=jpg)](https://design.withfudge.com/share/pin-8596)

[Centered sign-up hero with drifting tiles and oversized COSMOS wordmark](https://design.withfudge.com/share/pin-8596)

[![Editorial page with a tall image card between a big headline and side copy](https://pin.fontofweb.com/8594?format=jpg)](https://design.withfudge.com/share/pin-8594)

[Editorial page with a tall image card between a big headline and side copy](https://design.withfudge.com/share/pin-8594)

[![Three-card comparison row under a centered headline on a white field](https://pin.fontofweb.com/3791?format=jpg)](https://design.withfudge.com/share/pin-3791)

[Three-card comparison row under a centered headline on a white field](https://design.withfudge.com/share/pin-3791)

[![Dark mobile workspace with a top chip row and a mostly empty canvas](https://pin.fontofweb.com/8595?format=jpg)](https://design.withfudge.com/share/pin-8595)

[Dark mobile workspace with a top chip row and a mostly empty canvas](https://design.withfudge.com/share/pin-8595)

[![Sparse dark profile page with a compact chip row and little content](https://pin.fontofweb.com/3239?format=jpg)](https://design.withfudge.com/share/pin-3239)

[Sparse dark profile page with a compact chip row and little content](https://design.withfudge.com/share/pin-3239)

## Overview

Cosmos.so feels like a calm discovery system built from a paper-white canvas, a black typographic spine, and a loose field of rounded image tiles. The page is not dense or dashboard-like. It opens with a centered call to action surrounded by floating thumbnails, then moves into editorial chapters where a single headline, one image, and a short explanatory block do most of the work. Further down, a three-card comparison row turns the interface into a clearer product explanation, and the dark app shell at the end shifts the mood without changing the restraint.

The strongest pattern is contrast through spacing, not decoration. Large empty margins let the typography breathe, the rounded pills keep interactions soft, and the image collage brings color only where the page wants attention to drift. The whole system reads as curated, minimal, and image-led.

## Colors

Cosmos keeps the interface almost monochrome. Warm paper tones and white surfaces carry the reading experience, black ink supplies the main contrast, and a muted gray handles quieter text. Color appears most clearly in the floating thumbnail collage and in the comparison cards, where the page allows cool blues, lilacs, roses, and olive notes to surface. Those tones should stay secondary so the interface still feels like a clean discovery product rather than a colorful control panel.

### Core UI colors

| token | value | use |
|---|---|---|
| `action` | `#000000` | Solid primary pills, the COSMOS wordmark, and strong emphasis |
| `ink` | `#000000` | Main headlines and body text on light surfaces |
| `mutedInk` | `#6E6962` | Supporting copy, captions, and quieter link text |
| `canvas` | `#F7F4ED` | Page background and the open space around major sections |
| `surface` | `#FFFFFF` | White cards, ghost buttons, and small top-bar chips |
| `surfaceDark` | `#000000` | The dark app stage and high-contrast end sections |
| `border` | `#DDD6CB` | Hairline outlines and card edges |
| `onDark` | `#F7F4ED` | Text and icons on the dark stage |

### Image-led tones

| token | value | use |
|---|---|---|
| `imageBlue` | `#4A87D6` | Blue-toned thumbnail fragments and cool image accents |
| `imageLilac` | `#D4A7D7` | Lilac thumbnail fragments and soft collage accents |
| `imageRose` | `#E3C0BD` | Rose thumbnail fragments and warm collage accents |
| `imageOlive` | `#B7B39B` | Olive thumbnail fragments and muted collage accents |

The light system should stay mostly paper white and black. The darker chapter should switch to `surfaceDark` with `onDark` text, while the colored thumbnail tones should never take over buttons, borders, or background shells. Keep the contrast simple in chrome and let the imagery carry the variety.

## Typography

Cosmos uses two families with different jobs. Favorit carries the interface and editorial reading rhythm, while Cosmos Oracle can support the oversized brand wordmark and any moment that needs a more sculpted, logo-like presence. The scale is bold but not noisy: large headings, short supporting copy, and tiny quiet labels. Spacing in the type system comes from size jumps and tight tracking more than from heavy weight changes.

Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `brandWordmark` | Cosmos Oracle | 7.5rem | 400 | 0.88 | -0.05em | Huge COSMOS logotype at the bottom of the hero |
| `heroDisplay` | Favorit | 4rem | 400 | 0.95 | -0.04em | Large centered statements and main page hooks |
| `sectionDisplay` | Favorit | 3.5rem | 400 | 0.95 | -0.035em | Big editorial headlines beside image cards |
| `cardHeading` | Favorit | 1.5rem | 400 | 1.1 | -0.02em | Card titles and short section labels |
| `body` | Favorit | 1rem | 400 | 1.5 | 0em | Explanatory paragraphs and supporting text |
| `bodyMedium` | Favorit | 1rem | 500 | 1.45 | 0em | Buttons, chips, and short emphasized copy |
| `label` | Favorit | 0.75rem | 500 | 1.2 | 0.08em | Tiny upper labels and chip text |
| `legalCopy` | Favorit | 0.75rem | 400 | 1.4 | 0em | Footer text, legal lines, and minor metadata |

The large headings should feel almost airless, with compact line height and slightly tightened tracking. Body copy should open up enough to read easily against the wide layouts. Labels should stay small, quiet, and precise. Avoid adding a second decorative family for emphasis; the system already gets its character from scale, contrast, and the brand wordmark.

## Layout

The layout is built from wide, centered chapters with generous negative space between them. The hero is the most open section: a small line of copy sits above the main action, the primary pill anchors the center, and small floating tiles drift around the composition while the huge wordmark sits low and wide. That structure makes the page feel airy even before the user reaches the product explanation.

Below the hero, the design turns more editorial. One section pairs a big headline on the left with a tall, rounded image card in the middle and a short supporting paragraph on the right. The image card is the anchor, so the text stays brief and aligned to its edges. Another section uses a three-column comparison row under a centered headline. The cards are evenly spaced and similarly sized, which gives the page a calm explanatory rhythm after the looser hero.

The dark chapter changes the tone without changing the structure. It uses a near-black shell, small top-right controls, and large empty fields that leave the interface breathing room. The layout depends on repetition of rounded rectangles, consistent gutters, and strong horizontal alignment. Use `spacing.hero` for the largest open vertical moments, `spacing.wide` for chapter separation, and `spacing.gutter` to keep the cards from feeling crowded. Smaller controls can sit on `spacing.compact` and `spacing.control` so the interaction layer stays light.

## Visual language

Cosmos is quiet, curated, and slightly playful. The floating thumbnail tiles give the page motion without using animation language in the layout itself. Their rounded corners, soft edges, and varied image content make the page feel like a collection wall. The monochrome chrome keeps that collage from becoming busy. Black pills, white chips, and dark shells create a very stable frame around the imagery.

The system also likes contrast between softness and structure. Pills are fully rounded and friendly, but the headline typography is severe and direct. The image cards are tall and rounded, while the text around them stays open and linear. That balance makes the page feel premium without becoming formal. Flat fills work better than heavy shadows here; the visual interest comes from spacing, image tone, and the shift between paper-white and near-black surfaces. Keep borders light and sparse so the layout keeps its gallery-like calm.

## Components

### Hero stage

- **Anatomy:** A small line of supporting copy, one primary pill, one secondary pill, scattered floating tiles, and the oversized COSMOS wordmark.
- **Surface:** `canvas` for the open field; `action` for the primary pill; `surface` for the secondary pill.
- **Typography:** `bodyMedium` for the pills and `brandWordmark` for the bottom wordmark.
- **Shape:** Use `pill` for the two actions and `tile` for the drifting thumbnails.
- **Composition:** Keep the action centered and the wordmark low and wide. The tiles should feel dispersed, not grouped into a grid.
- **Visible states:** The primary action is solid black with light text. The secondary action is white with a light border and dark text.

### Editorial story card

- **Anatomy:** A tall image card, a large headline block, and a short supporting paragraph.
- **Surface:** White card face on the paper canvas, with the image filling most of the vertical space.
- **Typography:** `sectionDisplay` for the headline and `body` for the supporting text.
- **Shape:** `panel` corners make the card feel substantial without becoming heavy.
- **Spacing:** Keep a wide gutter between headline, image, and supporting text so each part can read on its own.
- **Composition:** Let the image carry the middle of the section. The text should remain brief and aligned to the visual edges of the card.

### Comparison row

- **Anatomy:** Three equal cards with different internal fields and a short label beneath each one.
- **Surface:** Neutral white or canvas-backed cards with image-led color inside the card area.
- **Typography:** `cardHeading` for the card copy and `label` for the small captions below.
- **Shape:** The same panel radius across all three cards keeps the row balanced.
- **Spacing:** Use consistent horizontal gaps and equal vertical alignment so the row reads like one system, not three separate features.
- **Composition:** The cards should be visually distinct through tone, not through size. Blue, slate, and deep indigo fields work well because they preserve the page’s quiet feel.

### Dark app shell

- **Anatomy:** A top-right chip row, a mostly empty black workspace, and a floating round control near the lower edge.
- **Surface:** `surfaceDark` with `onDark` text and light controls.
- **Typography:** `bodyMedium` for the top chips and `body` or `label` for tiny utility text.
- **Shape:** Rounded chips and a soft circular control keep the dark stage from feeling rigid.
- **Spacing:** Leave large amounts of empty black space. The emptiness is part of the composition.
- **Composition:** Keep the controls close to the top edge and the workspace otherwise sparse. The page should feel focused, not filled.

### Top bar chip

- **Anatomy:** Compact rounded buttons, small utility icons, and a colored avatar dot.
- **Surface:** White chips against the surrounding dark or light field.
- **Typography:** `bodyMedium` so the labels stay legible at small size.
- **Shape:** `pill` radii with small horizontal padding.
- **Visible states:** Solid chips are used for the strongest action; lighter chips and simple icons stay visually quieter.
- **Composition:** Group the controls tightly so they feel like a single toolbar rather than scattered buttons.

## Responsive behavior

On smaller screens, keep the order of information intact: hero message first, action next, image or tile collage after that, then supporting details. The oversized wordmark should shrink without losing its wide, low placement. The three-card comparison row should stack cleanly, with consistent gaps and captions that remain attached to their cards. The dark shell should keep its sparse feel, with controls compressed into one compact top row and enough empty space below to preserve the mood. Favor vertical flow over nested side-by-side layouts once the width gets tight.

## Practical implementation guidance

### Preserve

- Keep the page mostly paper white and black in chrome.
- Let the floating thumbnail collage provide color, not the controls.
- Use large type with tight tracking and short blocks of copy.
- Keep rounded pills and rounded cards consistent across the system.
- Preserve the large gaps between sections so the page feels editorial.

### Avoid

- Avoid bright brand colors in navigation, buttons, or borders.
- Avoid dense card shadows or heavy framing.
- Avoid mixing too many radii in one section.
- Avoid long paragraphs beside the biggest headlines.
- Avoid making the thumbnail colors into global chrome colors.

### Recommended build order

1. Build the canvas, ink, and spacing foundation.
2. Add the primary and secondary pill actions.
3. Recreate the hero composition with floating tiles and the wordmark.
4. Build the editorial image card and supporting text layout.
5. Add the comparison row with three equal cards.
6. Finish with the dark app shell and compact top controls.
7. Check the mobile stack so the reading order stays intact.

### Accessibility

- Keep text over imagery backed by strong contrast.
- Make every pill and chip large enough to tap comfortably.
- Use distinct visual cues for the primary and secondary actions.
- Do not rely on color alone to distinguish the comparison cards.
- Keep text alternatives useful for the floating thumbnails and the tall image card.

## Scope note

This guide covers cosmos.so’s homepage hero, editorial story card, comparison row, and dark app shell. Mobile-specific layouts, motion, and interaction states are not included. Measurements are practical adaptation targets for implementation.

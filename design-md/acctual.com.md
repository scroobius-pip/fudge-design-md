# How acctual.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/acctual.com-design)

Last updated: 2026-08-04

## Captured pages

[![About page hero with oversized headline and team note collage](https://pin.fontofweb.com/2028?format=jpg)](https://design.withfudge.com/share/pin-2028)

[About page hero with oversized headline and team note collage](https://design.withfudge.com/share/pin-2028)

[![Blog index with rounded cards and compact date labels](https://pin.fontofweb.com/2027?format=jpg)](https://design.withfudge.com/share/pin-2027)

[Blog index with rounded cards and compact date labels](https://design.withfudge.com/share/pin-2027)

[![Light homepage hero with tablet collage and floating paper props](https://pin.fontofweb.com/2024?format=jpg)](https://design.withfudge.com/share/pin-2024)

[Light homepage hero with tablet collage and floating paper props](https://design.withfudge.com/share/pin-2024)

[![Deep green story stage with central panel and orbiting stickers](https://pin.fontofweb.com/2023?format=jpg)](https://design.withfudge.com/share/pin-2023)

[Deep green story stage with central panel and orbiting stickers](https://design.withfudge.com/share/pin-2023)

[![Blue letter scene with tilted sheet, cash cutout, and sticky note](https://pin.fontofweb.com/2022?format=jpg)](https://design.withfudge.com/share/pin-2022)

[Blue letter scene with tilted sheet, cash cutout, and sticky note](https://design.withfudge.com/share/pin-2022)

[![FAQ grid with four rounded cards under a centered question](https://pin.fontofweb.com/2021?format=jpg)](https://design.withfudge.com/share/pin-2021)

[FAQ grid with four rounded cards under a centered question](https://design.withfudge.com/share/pin-2021)

## Overview

Acctual uses a scrapbook-like editorial language for B2B payments. The page is built from a pale canvas, oversized centered headlines, paper cutouts, sticky-note accents, and soft shadows that make the collage feel physically arranged rather than mechanically assembled. The result is polished, but it keeps a handmade edge through tilted cards, handwritten notes, clipped paper corners, and a small set of loud accent colors.

The system changes mood by chapter. The light pages stay airy and neutral so the black type and floating props can lead. The story sections move into deep green and deep blue fields, where white copy, paper sheets, and bright badges carry the narrative. Across both modes, the typography stays large, the button style stays dark and rounded, and the visual rhythm depends on generous space rather than dense decoration.

## Colors

Acctual’s color system is small and role-based. The light pages rely on a cool off-white wash and a slightly brighter card surface. Dark story panels switch to saturated green or blue backgrounds, while accents appear as tape, badges, sticky notes, and small prop colors. Black is the core action color for buttons and wordmarks. Blue is not the main CTA fill; it is a supporting accent for tape, underlines, and small UI markers. Yellow, purple, and warm paper tones appear only as physical-looking props and notes.

| token | hex | role | use |
|---|---|---|---|
| `action` | `#000000` | Primary action fill | Dark pill buttons, wordmarks, and the strongest text treatment on light surfaces |
| `ink` | `#000000` | Main text | Headlines, nav text, and body copy on pale pages |
| `muted-ink` | `#46403F` | Secondary text | Dates, supporting copy, and quieter labels beneath cards |
| `canvas` | `#F3F6F9` | Page wash | The broad neutral background behind heroes, cards, and FAQ sections |
| `surface` | `#F4F6F9` | Card surface | White-feeling cards and inset panels that sit above the canvas |
| `border` | `#BBB8B7` | Hairline border | Faint dividers and calm card outlines on pale sections |
| `surface-dark` | `#374D40` | Green story stage | The gridded payment scene and other dark green narrative panels |
| `surface-deep` | `#0A4169` | Blue story stage | The letter-style scene with the tilted paper sheet and cash cutout |
| `accent-blue` | `#3A9EDD` | Bright accent | Tape strips, underlines, icon rings, and small payment markers |
| `accent-yellow` | `#D6C12D` | Note accent | Sticky notes and the bright paper labels that add warmth and contrast |
| `accent-purple` | `#5253A4` | Badge accent | Coin-like badges, small icons, and circular product markers |
| `accent-warm` | `#C59E7C` | Paper accent | Cardboard tones, taped paper edges, and warm prop surfaces |

The page moves between these roles cleanly. Light sections use `canvas`, `surface`, and `border` so the layout stays open. Dark sections switch the background entirely and keep the text white or near-white so the stage reads as a separate chapter. Accent colors stay small and deliberate; they make the site feel physical without turning it into a noisy rainbow.

## Typography

Selecta drives the large statements, Inter handles interface text, and Caveat appears only where the page wants a handwritten accent. The hierarchy depends more on size, line length, and tight tracking than on many weight changes. That keeps the system coherent even when the content shifts from a hero statement to nav links, article cards, and note-like labels.

Selecta is credited to Daniel Haettenschwiller / Maxitype. Inter is credited to Rasmus Andersson / Rsms. Caveat has no supplied attribution credit.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Selecta | 4.5rem | 500 | 0.9 | -0.04em | Giant centered hero statements and the strongest opening lines |
| `section-display` | Selecta | 3.5rem | 500 | 0.95 | -0.035em | Section titles such as blog headings and feature-panel leads |
| `card-heading` | Selecta | 1.5rem | 500 | 1.05 | -0.02em | Card titles, feature leads, and short punchy subheads |
| `body` | Inter | 1rem | 400 | 1.5 | 0em | Paragraph copy, explanatory lines, and general page text |
| `body-small` | Inter | 0.875rem | 400 | 1.4 | 0em | Dates, meta text, and quieter supporting details |
| `navigation` | Inter | 0.9375rem | 400 | 1.4 | 0em | Top navigation, utility links, and header actions |
| `button` | Inter | 0.9375rem | 400 | 1.2 | 0em | Pill buttons and short calls to action |
| `handwritten` | Caveat | 1.25rem | 400 | 1.1 | 0.01em | Notes, scribbles, and the playful paper annotations |

The display type should stay compact and direct. Use tight line spacing for the big headlines and keep the supporting copy softer and wider. The page reads best when the large headings feel cut from the same family and the smaller text feels deliberately quieter rather than merely smaller.

## Layout

The layout is centered and spacious, with the hero acting like a poster and the later sections behaving like edited spreads. The first view uses a strong vertical stack: headline, collage, and a small supporting paragraph. The hero keeps the content centered so the tablet collage and the paper props can sit inside a large field of breathing room.

The blog page shows the grid logic clearly. A slim header spans the top, the page title sits centered, and the article cards drop into even columns with a steady gap rhythm. The cards use the same quiet off-white surfaces and rounded corners, so the thumbnail art can do most of the visual work. Dates and titles stay below each tile, with the date set small and the headline given more weight.

The story pages are more theatrical. The green stage uses a gridded field and places a dark central panel in the middle, then lets stickers, chat bubbles, and payment badges orbit that panel. The blue stage uses a tilted white letter sheet, a banknote, and a sticky note to create a looser, asymmetric composition. Both scenes keep the main message centered or near-centered so the props feel like supporting objects rather than competing content.

The FAQ page returns to a calm, table-like rhythm: a centered question, a row of white cards, and a single button beneath. That pattern keeps the site readable even after the more playful story sections. Across the whole system, gutters stay generous, section breaks are obvious, and the page avoids tight nested framing.

## Visual language

Acctual’s visual language feels assembled from paper, tape, and printed scraps. The props are slightly oversized and often tilted, which gives the page a handmade energy without losing clarity. Shadows are soft and directional, more like objects placed on a desk than like software widgets with heavy elevation. The collage language is strongest in the hero and the story stages, where a tablet, notes, badges, and paper slips share the same plane.

The background treatment matters just as much as the props. Pale sections let the type and cards float cleanly. Green and blue sections create a denser mood and make the white paper elements pop. The system avoids glossy gradients and shiny chrome; it prefers matte surfaces, clear edges, and a small amount of depth from shadow alone. Rounded cards keep the interface friendly, but the corners are not so soft that the structure disappears.

Handwritten marks add personality in a controlled way. They belong on sticky notes, quick annotations, and small flourishes beside the more formal Inter and Selecta text. Used sparingly, they make the site feel human. Used too often, they would weaken the strong editorial hierarchy.

## Components

### Masthead

- **Anatomy:** Wordmark on the left, a short navigation row in the middle, and a quiet login action plus a dark pill on the right.
- **Typography:** Inter at navigation size; the action uses the button style.
- **Surface:** Sits on the pale canvas with a very light divider beneath it on the blog page.
- **Shape:** The sign-up control is a pill, not a rectangle.
- **Composition:** Keep the masthead slim and subordinate to the hero statement. It should frame the page, not compete with it.

### Hero collage

- **Anatomy:** Large centered headline, supporting copy, a central tablet or framed photo block, and surrounding paper props.
- **Typography:** Selecta for the headline; Inter for the short supporting lines.
- **Surface:** Pale canvas with a soft, airy tone.
- **Shape:** The tablet and paper items use rounded edges and soft, realistic shadow.
- **Composition:** Let the headline dominate the upper half and keep the collage as one anchored centerpiece. The notes, tape, and badges should read as orbiting objects.

### Article card grid

- **Anatomy:** Thumbnail tile, date line, and a short headline beneath each card.
- **Typography:** Inter for meta text; Selecta for the story title.
- **Surface:** White-feeling cards on a pale page.
- **Shape:** Moderate rounding with faint borders and ample internal padding.
- **Composition:** Use even columns, consistent heights, and generous gaps so the grid feels calm rather than busy.

### Story panel

- **Anatomy:** Full-stage background, central paper or card, supporting notes, and a few floating icons or stickers.
- **Typography:** Selecta for the main statement; Inter for the body; Caveat for handwritten notes.
- **Surface:** Either the green stage or the blue stage, depending on the chapter.
- **Shape:** The central paper is slightly tilted and the props have irregular, cutout-like edges.
- **Composition:** Keep the main message centered, then let the surrounding objects create movement around it. The story should feel playful but controlled.

### FAQ grid

- **Anatomy:** Centered question heading, row of four white cards, and a primary action below.
- **Typography:** Selecta for the heading; Inter for the card labels and body lines.
- **Surface:** Pale canvas with white card inserts.
- **Shape:** Rounded cards with faint borders and very light depth.
- **Composition:** The cards should align evenly and keep the question readable before the grid starts. This section works because the spacing is calmer than the story pages.

### Primary action

- **Anatomy:** Dark pill with white text and a soft shadow.
- **Typography:** Inter button style.
- **Surface:** Uses the action color, which is nearly black.
- **Shape:** Fully rounded ends with a compact horizontal pad.
- **Visible states:** Resting state should be strong but not glossy. Keep the fill flat and the shadow light.

### Handwritten note

- **Anatomy:** Small Cavetalike script on a sticky note or paper scrap.
- **Typography:** Caveat only.
- **Surface:** Yellow, warm paper, or a light card.
- **Shape:** Slight rotation, soft edges, and a casual placement.
- **Composition:** Use it as a detail, not a headline. It should add personality to the scene while leaving the main typography in control.

## Responsive behavior

On narrower widths, keep the hierarchy intact before changing the form. The headline should stay first, the collage or story object should follow, and the supporting copy should remain readable without shrinking into a dense block. The blog grid should step from four columns to two, then to one, while preserving the same card language and small date labels.

The story stages should compress by reducing surrounding props before they reduce the main paper or panel. The floating notes can move closer to the edges, but the centered message should remain clear. The FAQ grid should stack cleanly and keep the cards evenly spaced. Navigation can collapse, but the wordmark and the primary action should still feel like the same page, not a different product.

## Practical implementation guidance

### Preserve

- Keep the centered, poster-like hero treatment.
- Preserve the split between neutral pages and saturated story stages.
- Keep the dark pill button style consistent across the site.
- Use paper-like objects, not glossy interface chrome, for personality.
- Let Selecta own the big statements and Inter own the utility text.

### Avoid

- Avoid adding extra brand colors that do not already belong to the page.
- Avoid glassmorphism, shiny gradients, and heavy neon effects.
- Avoid small-radius card systems that flatten the paper feeling.
- Avoid mixing many font families or weights to fake hierarchy.
- Avoid making blue the main CTA fill; it should stay an accent.

### Recommended build order

1. Set the color roles and the type scale.
2. Build the pale canvas, cards, and dark pill button.
3. Recreate the centered hero with the tablet collage.
4. Build the blog grid and the quiet header.
5. Add the green and blue story stages with reusable prop placement.
6. Finish with the FAQ grid and the handwritten note language.
7. Tune spacing so the page keeps its airy, editorial cadence.

### Accessibility

- Keep strong contrast on the green and blue stages, especially where white text sits over dark surfaces.
- Make the dark pill button readable against every pale section.
- Use focus styles that remain visible on both the canvas and the saturated panels.
- Do not rely on color alone for meaning in badges, notes, or icons.
- Keep line lengths short enough that the centered headings remain legible on smaller screens.

## Scope note

This guide covers the homepage hero, blog index, story panels, FAQ grid, buttons, cards, and handwritten notes on acctual.com. It does not specify mobile breakpoints, motion, loading or error states, or the complete footer. Measurements are practical adaptation targets.

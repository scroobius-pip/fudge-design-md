# How onest.md is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/onest.md-design)

Last updated: 2026-08-10

## Captured pages

[![Wireframe outline of the word 'onest' with construction nodes against a light background, paired with Romanian body copy about the font's voice.](https://pin.fontofweb.com/4268?format=jpg)](https://design.withfudge.com/share/pin-4268)

[Wireframe outline of the word 'onest' with construction nodes against a light background, paired with Romanian body copy about the font's voice.](https://design.withfudge.com/share/pin-4268)

[![Bold lowercase 'timp:' wordmark inside a rounded card with blue colon dots, accompanied by explanatory text about contextual adaptation.](https://pin.fontofweb.com/4267?format=jpg)](https://design.withfudge.com/share/pin-4267)

[Bold lowercase 'timp:' wordmark inside a rounded card with blue colon dots, accompanied by explanatory text about contextual adaptation.](https://design.withfudge.com/share/pin-4267)

[![Alphabet specimen showing black and blue paired letterforms demonstrating the font's intelligent contextual alternates.](https://pin.fontofweb.com/4266?format=jpg)](https://design.withfudge.com/share/pin-4266)

[Alphabet specimen showing black and blue paired letterforms demonstrating the font's intelligent contextual alternates.](https://design.withfudge.com/share/pin-4266)

[![Section header 'Mai multă comoditate' above a large white interactive demo card with two black asterisks.](https://pin.fontofweb.com/4265?format=jpg)](https://design.withfudge.com/share/pin-4265)

[Section header 'Mai multă comoditate' above a large white interactive demo card with two black asterisks.](https://design.withfudge.com/share/pin-4265)

## Overview

The Onest font presentation site is a typographic showcase built around clarity, restraint, and the personality of a single type family. The design treats the font itself as the hero: large wordmarks, construction diagrams, and interactive specimens dominate the viewport while chrome and decoration stay minimal. The visual system rests on three pillars—an almost-white warm gray canvas, stark black typography, and electric blue used sparingly as an accent for interactive or highlighted glyphs. Every section demonstrates a specific feature of the typeface: contextual alternates, glyph construction, or OpenType intelligence. The result feels like a confident product page for a design tool rather than a conventional marketing site. The rhythm alternates between expansive typographic moments and tighter explanatory paragraphs, with generous internal padding keeping each demonstration self-contained.

## Colors

The palette is intentionally narrow, letting the typeforms carry all visual interest. Four semantic colors define every surface and accent.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, wordmarks, borders, and glyph outlines |
| canvas | #F2F2F2 | Page background and section fills behind cards |
| surface | #FFFFFF | Card backgrounds and interactive demo areas |
| accent | #0099FF | Highlighted alternates, punctuation dots, and interactive cues |

The canvas color is a warm light gray that prevents the sterility of pure white while maintaining excellent contrast with black text. Surface white is reserved for elevated cards and interactive playgrounds, creating a subtle layering effect against the canvas. The accent blue appears only in specific glyphs—alternate characters, colons, or contextual substitutions—making it function as a signal of typographic intelligence rather than a generic brand color. No dark mode is visible in the supplied material; the system operates entirely in a light, high-contrast mode. Gradients and shadows are absent; depth is created solely through surface color shifts and generous spacing.

## Typography

The entire site is set in Onest, a geometric sans-serif designed by Andrey Kudryavtsev and distributed by Dmitri Voloshin Andrey Kudryavtsev. Three weights are used: Regular for body and explanatory text, Medium for labels and secondary emphasis, and Bold for display wordmarks and large specimens. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Onest | 6rem | 700 | 1 | -0.02em | Large wordmarks and construction diagrams |
| section-display | Onest | 3rem | 400 | 1.1 | -0.01em | Section headings and feature titles |
| body | Onest | 1.25rem | 400 | 1.5 | 0em | Explanatory paragraphs and feature descriptions |
| label | Onest | 1rem | 500 | 1.2 | 0em | Captions, metadata, and secondary labels |

The type scale is built on a 4px relative unit, with sizes chosen as whole-number multiples: 16px (1rem), 20px (1.25rem), 48px (3rem), and 96px (6rem). Display sizes use tight line heights to keep large words visually compact, while body text receives more generous leading for readability in Romanian copy. Letter spacing is slightly negative at display sizes, giving headlines a refined, contemporary density. The font's geometric construction—visible in the circular bowls of 'o' and 'e', the straight-sided 'n', and the distinctive single-story 'a'—is celebrated through scale rather than ornament.

## Layout

The page uses a centered single-column layout with occasional two-column splits for feature explanations. Maximum content width appears to be approximately 1200px, with generous horizontal padding keeping text comfortable on wider viewports. Sections stack vertically with 4rem of separation, creating clear territorial boundaries between demonstrations.

The construction diagram of the word "onest" (Image 1) spans nearly full width, with body copy offset to the right in a narrower column—roughly 60% of the container width. This asymmetric pairing lets the graphic breathe while keeping the explanation close. Image 2 shows a card-based layout: the wordmark "timp:" sits inside a rounded white card with a subtle border, while explanatory text floats in a column to the right. The card itself uses internal padding of approximately 2rem, with the wordmark centered vertically and horizontally within that frame.

Image 4 demonstrates a stacked layout: a section heading sits above a large white demo card that occupies nearly the full content width. The heading and description occupy a two-column header area, while the card below provides an interactive playground. This pattern—text header paired with full-width demo surface—repeats across sections, creating predictable vertical rhythm.

Spacing between elements follows the 4px base unit. Content gaps within sections are 1.5rem, while section breaks are 4rem. Cards and interactive areas use 2rem internal padding. No sidebar navigation, no persistent header bar, and no footer are visible in the supplied material; the page reads as a continuous scroll of typographic demonstrations.

## Visual language

The visual language is that of a type specimen brought to digital life. Geometric precision is celebrated through wireframe overlays on letterforms, with blue construction nodes marking curve control points. This technical drawing aesthetic—normally hidden in font editors—is surfaced as decoration, reinforcing the message of craft and precision.

Imagery is entirely typographic; no photography or illustration appears. The "images" are the letters themselves, shown at monumental scale. When color appears, it is functional: blue marks the intelligent alternate in a pair of glyphs, or the contextual substitution that proves the font's adaptability. Black and white dominate, with blue acting as a carefully rationed highlight.

Borders are thin and precise—1px hairlines in black or subtle gray—used to define card edges or separate demo areas from their backgrounds. Rounded corners on cards are moderate, approximately 0.75rem, softening the geometric rigor without becoming friendly or casual. The overall impression is clinical, confident, and focused on the material qualities of the typeface.

## Components

### Construction diagram

- **Anatomy**: Large outlined letterforms with visible Bézier control points and handles, set against the canvas background
- **Surface**: Transparent fill with thin black stroke; blue dots mark on-curve and off-curve points
- **Typography**: Uses `{typography.hero-display}` at extreme scale, weight 700
- **Shape**: No border or background; the letters themselves form the visual element
- **Spacing**: Letters touch or nearly touch, creating a continuous word-image; generous margin above and below
- **Composition**: Typically paired with right-aligned body text explaining the font's design philosophy

### Feature card

- **Anatomy**: Rounded rectangle containing a typographic demonstration, with explanatory text in an adjacent column
- **Surface**: `{colors.surface}` background, thin border in dark gray or black, `{rounded.card}` corner radius
- **Typography**: Internal wordmark uses `{typography.hero-display}`; external explanation uses `{typography.body}`
- **Shape**: 0.75rem border radius, 1px border weight
- **Spacing**: 2rem internal padding; external text column offset with 1.5rem gap
- **Composition**: Card occupies roughly 55-60% width, text column the remainder; vertical centering of content within card

### Glyph specimen

- **Anatomy**: Grid of letter pairs showing base glyph and contextual alternate side by side
- **Surface**: Direct on canvas, no card container
- **Typography**: Large display size, approximately `{typography.section-display}` or larger; base glyph in `{colors.ink}`, alternate in `{colors.accent}`
- **Shape**: No borders or backgrounds; pure typographic arrangement
- **Spacing**: Generous horizontal spacing between pairs, consistent vertical rows
- **Composition**: Regular grid, typically two rows of six pairs, demonstrating the font's intelligent substitution across the alphabet

### Interactive demo area

- **Anatomy**: Large white card containing user-editable text or predefined symbols
- **Surface**: `{colors.surface}` fill, no visible border or very subtle shadow
- **Typography**: User content set in `{typography.hero-display}` or larger
- **Shape**: `{rounded.card}` corners, full content width
- **Spacing**: Substantial internal padding, approximately 4rem vertical and 2rem horizontal
- **Composition**: Centered content with minimum surrounding chrome; header and description sit above in two-column layout

## Responsive behavior

No mobile layouts are visible in the supplied material. Based on the desktop compositions, the following responsive adaptations are recommended:

At viewports below 768px, the two-column feature explanations should stack vertically, with the card or demonstration above its description text. Construction diagrams and large wordmarks should scale down to avoid horizontal overflow; a minimum font size of 2rem for display text preserves legibility while fitting narrow screens. The glyph specimen grid may reflow from six columns to three or two, maintaining the pair relationship horizontally.

Card internal padding should reduce to 1.5rem on small screens, and section spacing should compress from 4rem to 2.5rem to maintain scrollable density. The accent blue should remain at the same saturation to preserve its signaling function at smaller sizes.

Touch targets for any interactive demo areas should be at least 44px in height, with adequate spacing between controls. The large white demo cards may require horizontal scroll protection—either `overflow-wrap: break-word` or reduced font size—to prevent layout breakage on narrow devices.

## Practical implementation guidance

### Preserve
- The stark black-on-light-gray contrast as the foundational reading experience
- Monumental scale for wordmarks and construction diagrams; the type is the image
- Restrained, functional use of blue only for highlighted alternates and interactive cues
- Generous whitespace around every demonstration; let the typography command attention
- The technical drawing aesthetic of visible construction nodes and outlines

### Avoid
- Adding decorative imagery or photography that competes with the letterforms
- Using the accent blue for buttons, links, or backgrounds; reserve it for typographic highlights
- Tightening letter spacing on body text; the negative tracking is display-only
- Introducing shadows, gradients, or complex borders that contradict the flat, precise aesthetic
- Mixing additional font families; Onest carries the entire visual identity

### Recommended build order
1. Establish the 4px spacing unit and the four-color palette
2. Implement Onest at Regular, Medium, and Bold weights with the defined type scale
3. Build the construction diagram section with SVG or CSS-outlined letterforms and positioned blue dots
4. Create the feature card component with rounded corners, white fill, and thin border
5. Implement the glyph specimen grid with alternating black and blue character pairs
6. Add the interactive demo card with editable content area
7. Apply responsive stacking and scaling rules for viewports below 768px

### Accessibility
- Maintain a minimum contrast ratio of 7:1 for all black text on canvas or surface backgrounds
- Ensure the blue accent on light backgrounds meets WCAG AA for large text (3:1) if used at display sizes
- Provide visible focus indicators for any interactive demo inputs; a 2px black outline or underline is consistent with the design language
- Allow font size adjustment without breaking the construction diagram layout; consider SVG scaling or `clamp()` for display text
- Include `lang="ro"` on the document root since the interface copy is in Romanian

## Scope note

This guide covers the landing page presentation of the Onest typeface, including construction diagrams, feature cards, glyph specimens, and interactive demo areas. Measurements are practical adaptation targets. Unseen items—mobile breakpoints, navigation systems, footer content, form validation states, motion or animation, and dark mode—are not included and should be designed to match the established typographic and spatial principles.

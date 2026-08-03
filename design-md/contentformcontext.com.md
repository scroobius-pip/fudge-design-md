# How contentformcontext.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/contentformcontext.com-design)

Last updated: 2026-08-03

## Captured pages

[![Centered SBS 8 News intro with compact nav, spaced CFC mark, and a long muted text column](https://pin.fontofweb.com/10404?format=jpg)](https://design.withfudge.com/share/pin-10404)

[Centered SBS 8 News intro with compact nav, spaced CFC mark, and a long muted text column](https://design.withfudge.com/share/pin-10404)

[![Black geometric section with concentric white rings, cyan axis line, and a blue keyword band](https://pin.fontofweb.com/10405?format=jpg)](https://design.withfudge.com/share/pin-10405)

[Black geometric section with concentric white rings, cyan axis line, and a blue keyword band](https://design.withfudge.com/share/pin-10405)

## Overview

Contentformcontext.com presents the SBS 8 News case study as a spare editorial page rather than a product landing page. The system depends on contrast, alignment, and a narrow type ladder. Nearly everything sits on a black field, with white titles, muted gray paragraphs, and one saturated blue accent that marks the strongest visual break in the layout.

The page speaks in two registers. The upper section is quiet and centered: a compact wordmark, a single case title, and stacked explanatory copy with wide side margins. The lower section becomes graphic and symbolic: concentric rings, a cyan vertical axis, a blue block, and a small grid of image tiles. That shift gives the page a deliberate chapter change without introducing a larger palette or a busier component set.

The design feels controlled, minimal, and institutional. It is not decorative through ornament; it is decorative through proportion, spacing, and the way one blue note interrupts the black-and-white base.

## Colors

The palette is extremely small, and that restraint is the main color decision. `canvas` and `surface` are both dark, but they serve different depths: `canvas` is the near-black page field, while `surface` is the deeper black used for the densest sections and graphic voids. `ink` is pure white and carries the page title, the brand letters, and the most important labels. `muted-ink` and `muted-ink-soft` soften the body copy so the text block feels editorial instead of poster-like.

`action` is the only bright chromatic note. It appears as the blue band, the fine vertical line in the geometric graphic, and the tiny interface accent in the lower sections. That blue has to stay isolated. If it spreads into multiple roles, the page loses the precision that makes the layout feel considered.

There is no photographic color wash in the supplied views, so the system does not depend on background imagery to balance the palette. Instead, the page stays almost monochrome and lets the blue element interrupt the black plane. The image strip at the bottom introduces lighter blues and whites, but those are content colors, not UI tokens. They should remain tied to the media blocks rather than promoted into the interface palette.

## Typography

The page uses three material families: Aktiv Grotesk for the main editorial voice, Applesystem for small utility labeling, and System for simple interface copy. The hierarchy depends on size and spacing more than on weight variation. Most visible text sits at Regular weight, which keeps the page calm and formal.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|

| hero-title | Aktiv Grotesk | 1.875rem | 400 | 1.1333333333 | 0em | Centered case title |
| body | Aktiv Grotesk | 1.25rem | 400 | 1.3 | 0em | Main explanatory paragraphs |
| navigation | Aktiv Grotesk | 1.1875rem | 400 | 1 | 0em | Top navigation links |
| utility | System | 1rem | 400 | 1 | 0em | Small interface text and secondary chrome |
| label | Applesystem | 0.875rem | 400 | 1 | 0em | Small section label and compact utility copy |

The type scale is narrow enough to feel like one system. The 35px brand letters read as a structural marker, not as a logo treatment with extra styling. The 30px case title is the only display-like line in the centered intro, and the 20px body copy does most of the explanatory work. That 30/20/19/14 sequence is enough for the whole page. A larger or more diverse hierarchy would fight the quiet tone of the design.

Licensing details for these families are not included here.

## Layout

The layout is built on a centered editorial column with very wide side margins. The upper view shows a compact header line, then the brand letters spaced across the top, then a case title and a long block of centered body copy. The reading measure is narrow enough that the text feels curated rather than filled. It wants to be read as one stacked statement, not as a long article with many separate modules.

The measured spacing supports that restraint. The outer shell sits at about `3.1621rem`, and some of the main content tightens further into a much deeper `11.3686rem` inset. That combination creates a page that feels boxed in the middle of a large dark field. The effect is intentional: the content is protected by blank space instead of by visible card containers.

The blue band acts as a hard horizontal reset. It breaks the black page into chapters and gives the lower half a new base without changing the overall system. The lower graphic block then uses symmetry to anchor the page: a vertical line runs through two overlapping rings, and a field of soft dots keeps the composition from feeling empty.

The bottom media strip sits flush and wide. The tiles are edge-to-edge rather than carded, which keeps the page feeling like a case-study board instead of a component library. The floating round control is the only strongly shaped utility element in the layout; its circular form softens the hard-edged page and gives the eye a place to land at the side.

## Visual language

The strongest visual idea is contrast between void and signal. The black background is not just a backdrop; it is the dominant surface. White text and lines are used sparingly so they hold attention. The blue accent appears only where the page needs a change in tempo: a band, a line, or a small interface cue. That keeps the page from becoming a general-purpose dark theme.

Geometry carries much of the identity. The overlapping rings in the hero-like graphic create a sense of systems thinking, while the vertical cyan line gives the composition a precise axis. The scattered dim dots add a technical or celestial feel without becoming noise. The page uses these shapes to explain rigor and structure more than to decorate.

The bottom image strip adds a different visual mode: dense blue imagery and bright white forms inside compact tiles. Those media blocks feel more energetic than the header and body text, so they act as a release after the centered intro and the black symbolic panel. The system should preserve that contrast in tone, not smooth it out.

The round utility button is important because it is the only clear soft shape. Its 60px radius makes it read as a floating control rather than as another card. That single circular element keeps the page from feeling mechanically rigid.

## Components

### Header

**Anatomy:** A simple top row with left-aligned navigation links and a centered spaced wordmark.

**Surface:** It sits directly on the dark canvas with no visible chrome. The links are muted gray, which keeps them secondary to the title below.

**Typography:** Navigation uses the 19px Aktiv Grotesk role, while the mark uses the 35px role.

**Composition:** The header is intentionally light. It gives orientation, then gets out of the way. The spacing around it is generous enough that the centered story can own the page.

### Brand mark

**Anatomy:** Three separated letters, C, F, and C, spaced across the top center.

**Shape:** No frame, no badge, no icon treatment. The spacing between letters is the shape.

**Visible state:** Static and crisp. It should feel like a fixed page marker rather than a flexible logo lockup.

### Case title and body block

**Anatomy:** One centered title, then several centered paragraphs in a narrow column.

**Typography:** The title uses the 30px Aktiv Grotesk role. The paragraphs use the 20px body role, with a quieter gray tone.

**Spacing:** The title sits apart from the copy, and the paragraphs stack with enough breathing room that each block feels like a separate note.

**Composition:** This block is the editorial heart of the page. It should remain centered and restrained, with no side rails or card borders.

### Design keywords band

**Anatomy:** A flat horizontal blue bar with a small uppercase label at the left edge.

**Surface:** The blue is pure and emphatic. It should read as a section switch, not as a banner ad or highlight chip.

**Typography:** Small utility text stays white or near-white so it can sit cleanly on the blue field.

**Composition:** Keep it full-width and blunt. Its job is to interrupt the black field and start the lower section with a sharp signal.

### Geometric graphic panel

**Anatomy:** Two overlapping white circles, a cyan vertical line, and scattered dim dots across a black field.

**Shape:** The circles use thin outlines. The line is straight and exact. The dots are soft and low-contrast.

**Color:** White outlines and cyan axis against black. The composition depends on precision, so the shapes should stay thin and clean.

**Hierarchy:** This is the most symbolic part of the page. It is not a decorative illustration; it is the page’s visual thesis.

### Image strip

**Anatomy:** A row of adjacent rectangular tiles with strong blue and white imagery.

**Composition:** The tiles sit flush together and feel broad rather than boxed. Their visual energy is higher than the text sections.

**Surface:** These blocks are the brightest content area in the lower page, so they should stay visually dense and edge-to-edge.

**Visible states:** No empty placeholders or alternate treatments are shown. The strip should remain simple and uninterrupted.

### Floating round control

**Anatomy:** A translucent dark circle with a white upward arrow inside.

**Shape:** 3.75rem radius.

**Composition:** It sits off to the side, above the lower media area, so it reads as a utility layer rather than as part of the content grid.

**Hierarchy:** The control should stay quieter than the blue band and the geometric panel, but more visible than the muted body text.

## Responsive behavior

On narrower screens, the safest move is to keep the same order of information: header, centered title, centered paragraphs, blue section break, graphic panel, and media strip. The system should preserve the large blank fields and avoid turning the page into a dense stacked card layout.

The centered text block should remain readable at a smaller measure, with the title still clearly separated from the body copy. The blue band should keep its full-width interruptive role. If the image strip collapses, it should do so in a way that keeps each tile legible and avoids awkward cropping of the strongest blue-white imagery.

The round utility control should remain visibly circular and should not be reduced into a generic square icon button. The page depends on that single soft shape as a counterweight to the otherwise rigid geometry.

## Practical implementation guidance

### Preserve

- Keep the page mostly black, with white text and one blue accent.
- Preserve the centered, editorial reading block instead of converting it into a modular grid.
- Keep the header quiet and the brand letters large and widely spaced.
- Let the lower section feel more graphic than the intro.
- Keep the round utility control as the only major soft shape.

### Avoid

- Avoid adding extra brand colors.
- Avoid turning the body copy into small dense UI text.
- Avoid card borders, shadows, and busy separators.
- Avoid replacing the geometric panel with generic illustrations.
- Avoid shrinking the blue band into a thin underline; it needs to feel like a section break.

### Recommended build order

1. Set the black canvas and the white/gray type palette.
2. Build the centered header and spaced brand letters.
3. Build the title and body copy stack with the narrow reading measure.
4. Add the blue section band as the transition point.
5. Recreate the geometric circle-and-axis panel.
6. Add the image strip and the floating round control.

### Accessibility

- White text on black needs careful contrast checks, especially in the smaller gray copy.
- The centered paragraphs should not become so wide that line length hurts readability.
- Interactive controls should keep a visible focus treatment, even if the visual language stays minimal.
- The floating round control should retain a large hit area.
- If the image strip is interactive, each tile should keep a useful text alternative.

## Scope note

This guide covers the SBS 8 News case-study page on contentformcontext.com, including the top navigation, centered intro, blue section band, lower graphic panel, image strip, and floating round control. Other case pages, motion, hover and focus behavior, loading and error states, and font licensing details are not included here.

# How typographyprinciples.obys.agency is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/typographyprinciples.obys.agency-design)

Last updated: 2026-08-10

## Captured pages

[![Three-panel editorial spread showing Francisco Goya, Post-Impressionism, and Eugène Atget with classical paintings and serif headlines on warm off-white backgrounds](https://pin.fontofweb.com/7785?format=jpg)](https://design.withfudge.com/share/pin-7785)

[Three-panel editorial spread showing Francisco Goya, Post-Impressionism, and Eugène Atget with classical paintings and serif headlines on warm off-white backgrounds](https://design.withfudge.com/share/pin-7785)

[![Dark interface with interactive typography test comparing hierarchy and color-form contrast using pear dessert card layouts](https://pin.fontofweb.com/7784?format=jpg)](https://design.withfudge.com/share/pin-7784)

[Dark interface with interactive typography test comparing hierarchy and color-form contrast using pear dessert card layouts](https://design.withfudge.com/share/pin-7784)

[![Dramatic black marble background with oversized white serif 'Many Thanks' display type and minimal footer credits](https://pin.fontofweb.com/7783?format=jpg)](https://design.withfudge.com/share/pin-7783)

[Dramatic black marble background with oversized white serif 'Many Thanks' display type and minimal footer credits](https://design.withfudge.com/share/pin-7783)

[![Dark page introducing 'Contrast in typography' with numbered hierarchy section, blue circular element, and explanatory body text](https://pin.fontofweb.com/7782?format=jpg)](https://design.withfudge.com/share/pin-7782)

[Dark page introducing 'Contrast in typography' with numbered hierarchy section, blue circular element, and explanatory body text](https://design.withfudge.com/share/pin-7782)

## Overview

This design system governs a typography education platform that teaches fundamental design principles through immersive, interactive demonstrations. The visual language is deliberately austere and academic: a near-black canvas serves as the primary stage, allowing typographic form and photographic content to command full attention. The system balances extreme scale contrast—oversized classical serifs against crisp neo-grotesque body copy—with interactive elements that let users test their understanding of hierarchy, contrast, and alignment. Every page functions as both lesson and exhibition, where the site's own design embodies the principles it teaches. The mood is serious, gallery-like, and contemporary, drawing from editorial print traditions while operating as a native digital experience.

## Colors

The palette is severely restricted, functioning as a controlled environment where color appears only as deliberate accent or content. The dark-mode-first approach inverts typical reading expectations, treating the screen as a dimly lit gallery space.

| token | value | use |
|---|---|---|
| canvas | #000000 | Primary page background; immersive dark field for all principle demonstrations |
| surface | #1A1A1A | Elevated cards, interactive test containers, secondary panels |
| surface-elevated | #282828 | Borders, dividers, subtle depth indicators on dark surfaces |
| ink-primary | #F4F4F4 | Primary text on dark backgrounds; headlines, body copy, navigation |
| ink-secondary | #FFFFFF | Maximum-contrast moments; hero display type, inverted elements |
| ink-muted | #282828 | Text on light surfaces; subtle captions, disabled states |
| accent-blue | #0000EE | Interactive emphasis; circular demonstration elements, principle callouts |

The color logic follows a strict hierarchy: black canvas dominates, off-white text provides primary readability, and pure white reserves itself for moments of maximum typographic impact. The single blue accent functions as a pedagogical tool—drawing the eye to interactive demonstration elements without competing with the content's own color relationships. When photographic or illustrative content appears, it operates within its own color world, framed by the neutral dark surround. No gradients or shadows are used; depth and hierarchy rely entirely on scale, weight, and spatial positioning.

## Typography

The type system is the core of this design, built on a principle of radical contrast between display and functional text. Six families serve distinct roles, from monumental custom serifs to utilitarian interface labels.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Custom 16948 | 4.75rem | 400 | 1 | -0.073em | Monumental closing statements, dramatic page endings |
| section-display | Helvetica Neue | 4.75rem | 400 | 0.84 | -0.026em | Principle titles, major section headers |
| principle-headline | Helvetica Neue | 2.4375rem | 400 | 1 | -0.069em | Sub-section headers, numbered principle introductions |
| body | Inter | 1.125rem | 400 | 2.28 | 0em | Explanatory text, lesson descriptions, long-form content |
| label | Custom 32614 | 0.6875rem | 500 | 1 | 0em | Category tags, metadata, principle identifiers |
| navigation | Roboto | 1rem | 400 | 1 | 0em | Site header, menu items, utility links |
| legal-copy | Helvetica Neue | 0.6875rem | 400 | 1.27 | 0em | Footer credits, copyright, fine print |

Helvetica Neue, designed by Linotype Design Studio, anchors the display hierarchy with its tight leading and negative letter-spacing creating dense, impactful headlines. Inter provides the system's rational, readable voice for explanatory content. Roboto, attributed to Google, handles interface wayfinding with neutral clarity. The custom families—Custom 16948 for dramatic serif moments, Custom 32614 for precise labeling, and Custom 32614-500 for medium-weight label instances—carry no attributed designers or vendors. Verify licensing for these families before production use.

The scale relationship is intentionally extreme: hero-display at 76px against body at 18px creates a 4.2:1 ratio that demonstrates the very contrast principles the site teaches. Tight leading on display type (0.84–1.0) forces vertical compaction, while body copy's generous 2.28 line height ensures comfortable reading during lessons.

## Layout

The layout system rejects conventional container constraints in favor of an expansive, editorial approach that treats the viewport as a spread. Content bleeds to edges, and spatial relationships between elements carry semantic weight.

The page structure follows a consistent pattern: a minimal fixed header containing site identification and menu access, followed by immersive principle content that scrolls vertically through distinct sections. Each principle receives a numbered introduction with large display type, explanatory body copy in a narrower measure, and interactive demonstration elements below.

Grid behavior is asymmetric and content-driven. Text blocks often occupy left or right portions of the viewport while demonstration elements expand into remaining space. The interactive test cards in the Contrast section show a two-up comparison layout with generous internal padding and external spacing. Circular elements break the rectilinear grid, creating focal points that rotate or animate to demonstrate hierarchy concepts.

Spacing derives from a 2px base unit, with major sections separated by 120px or more. Component internal padding uses 20px–40px increments. Margins between demonstration elements and explanatory text maintain clear visual separation without rigid alignment to a column system. The layout prioritizes the demonstration's legibility over grid perfection—elements position to serve the principle being taught.

## Visual language

The visual language synthesizes classical editorial design with contemporary interactive education. Typography itself becomes imagery: oversized letterforms fill viewports, their curves and strokes treated as compositional elements. The custom serif family (Custom 16948) introduces humanist warmth and historical reference, while Helvetica Neue provides modernist discipline.

Photographic content appears framed within demonstration cards or as full-bleed background elements, always subordinate to typographic hierarchy. Images of classical paintings, historical photographs, and contemporary still lifes serve as test subjects for contrast and alignment principles. The site's own design demonstrates what it teaches—hierarchy through scale, contrast through color inversion, alignment through asymmetric placement.

Motion and interaction are implied by the demonstration structure. Circular elements suggest rotation; test cards invite comparison through implied state change. The dark canvas creates a theatrical space where content emerges through scroll or interaction rather than persistent visibility. Minimal chrome—just a header line and footer credits—keeps focus on the lesson material.

The tone is authoritative yet inviting, treating visitors as design students ready for structured learning. There is no decorative excess; every element justifies its presence through pedagogical function.

## Components

### Site header

- **Anatomy**: Left-aligned site identifier in parentheses, right-aligned menu trigger
- **Surface**: Transparent over canvas, with 1px bottom border in surface-elevated
- **Typography**: Navigation token, uppercase or label-style treatment
- **Spacing**: 20px vertical padding, 40px horizontal inset
- **Composition**: Flex row, space-between, fixed position

### Principle section header

- **Anatomy**: Numbered index (large numeral), principle name in section-display, optional explanatory body copy
- **Surface**: Canvas background
- **Typography**: Section-display for title, body for description
- **Spacing**: Generous top margin (120px+), body copy constrained to readable measure (~60 characters)
- **Composition**: Number and title stacked or side-by-side depending on viewport; description offset to create asymmetric rhythm

### Interactive test card

- **Anatomy**: Container with two or more comparison layouts, each showing a design principle applied to identical content
- **Surface**: Surface background with surface-elevated border
- **Typography**: Inherits from demonstrated content—typically body and label tokens
- **Spacing**: 40px internal padding, 20px gap between comparison items
- **Composition**: Grid of equal columns, centered within section
- **Variants**: Hierarchy/accent tests, color-form contrast tests, alignment tests

### Circular accent element

- **Anatomy**: Perfect circle containing rotated or centered text
- **Surface**: Accent-blue fill, ink-secondary text
- **Typography**: Section-display or label, often rotated 90 degrees for vertical reading
- **Shape**: 50% border-radius
- **Composition**: Positioned to overlap or intersect with rectangular content, creating dynamic tension

### Footer

- **Anatomy**: Credits block, contact information, social links, copyright
- **Surface**: Canvas background
- **Typography**: Legal-copy for all elements, with subtle hierarchy through spacing
- **Spacing**: Compact vertical stacking, generous horizontal distribution
- **Composition**: Multi-column on wide viewports, stacking on narrow; baseline-aligned across columns

## Responsive behavior

The system is designed desktop-first, with its immersive demonstrations and extreme scale contrasts optimized for wide viewports. At narrower widths, the following adaptations should occur:

Display type should reduce proportionally while maintaining minimum readable sizes. The 76px hero-display may scale to 41px on tablet and maintain that floor on mobile. Section-display at 76px should similarly reduce, potentially to 39px, preserving the tight leading that characterizes the system's density.

Interactive test cards should stack vertically rather than sitting side-by-side, allowing each comparison to occupy full width for legible examination. Circular accent elements may reduce in size or reposition to avoid overlapping critical text.

The asymmetric text-image relationships in principle sections should collapse to single-column flow, with body copy expanding to full width and demonstration elements following sequentially rather than beside.

Navigation should remain accessible, potentially converting to a full-screen overlay menu triggered by the persistent menu button.

## Practical implementation guidance

### Preserve
- The extreme scale contrast between display and body type; this is the system's defining characteristic and teaching method
- The near-black canvas as default background; light-mode inversions should be treated as demonstration content, not system defaults
- The tight leading and negative letter-spacing on Helvetica Neue headlines; loosening destroys the editorial density
- The custom serif's dramatic form for closing or transitional moments; reserve for maximum impact
- The minimal chrome and maximum content approach; every pixel should serve the lesson

### Avoid
- Adding decorative elements that don't demonstrate a typographic principle
- Using more than one accent color in a single view; the blue is a pedagogical tool, not a palette
- Softening the contrast between canvas and ink; the darkness is intentional and functional
- Introducing border-radius on cards or containers; maintain the system's rectilinear severity
- Mixing display type treatments; each principle section should feel consistent within itself

### Recommended build order
1. Establish the dark canvas and typography scale with Helvetica Neue section headers and Inter body copy
2. Implement the fixed header with navigation pattern
3. Build the principle section structure: number, title, description, demonstration
4. Add interactive test card containers with comparison layouts
5. Integrate custom serif for hero moments and closing sequences
6. Refine spacing and asymmetric compositions based on content needs
7. Add circular accent elements and other demonstration-specific components

### Accessibility
- Ensure body copy maintains sufficient contrast against the dark canvas; the off-white (#F4F4F4) on black (#000000) exceeds WCAG AAA requirements
- Provide focus indicators for interactive test elements that don't rely solely on color
- Consider offering a high-contrast mode if the dark palette causes eye strain during extended reading
- Maintain logical heading hierarchy despite visual scale jumps; screen readers should encounter h1 through h3 in meaningful sequence
- Ensure custom fonts load with appropriate fallbacks; system-ui or sans-serif for Inter/Roboto, Georgia or Times for serif moments

## Scope note

This guide covers the dark-mode principle demonstration pages including Contrast, Fonts, and Intro/Alignments sections. The light-mode editorial spreads shown in comparative demonstrations are content within those lessons, not a separate system variant. Mobile layouts, animation specifications, and menu overlay states are not represented in the supplied material.

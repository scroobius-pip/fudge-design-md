# How cognition.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/cognition.ai-design)

Last updated: 2026-08-10

## Captured pages

[![Hero banner with dark navy background, bracketed teal DEVIN title, and two angled action buttons above a light footer with legal links](https://pin.fontofweb.com/5858?format=jpg)](https://design.withfudge.com/share/pin-5858)

[Hero banner with dark navy background, bracketed teal DEVIN title, and two angled action buttons above a light footer with legal links](https://design.withfudge.com/share/pin-5858)

[![Careers section with light gray background, bracketed category labels, and bordered job listing rows with location and full-time metadata](https://pin.fontofweb.com/5857?format=jpg)](https://design.withfudge.com/share/pin-5857)

[Careers section with light gray background, bracketed category labels, and bordered job listing rows with location and full-time metadata](https://design.withfudge.com/share/pin-5857)

[![Full-bleed ASCII art hero with cross-hatch pattern, bracketed teal DEVIN title, and floating action buttons on dark textured canvas](https://pin.fontofweb.com/5856?format=jpg)](https://design.withfudge.com/share/pin-5856)

[Full-bleed ASCII art hero with cross-hatch pattern, bracketed teal DEVIN title, and floating action buttons on dark textured canvas](https://design.withfudge.com/share/pin-5856)

## Overview

Cognition presents a deliberately technical aesthetic that signals engineering credibility and AI-native product identity. The visual system operates across two dominant modes: a dark, immersive hero environment and a clean, light content surface. The design language draws from terminal interfaces and ASCII art traditions, using monospace textures, bracketed semantic labels, and restrained color to communicate precision and computational depth.

The brand voice is understated and confident. Large condensed sans-serif typography dominates headlines with generous letter spacing and light weights, creating airy, authoritative presence. Supporting text uses a humanist sans-serif for readability at smaller sizes. A single teal accent color provides the only chromatic warmth against near-black and off-white grounds. The overall impression is of a research lab or infrastructure company rather than a consumer application—functional, rigorous, and intentionally sparse.

## Colors

The palette is severely constrained, using color almost exclusively for functional signaling rather than emotional expression. Dark surfaces dominate immersive moments; light surfaces handle information density. The teal accent appears only in bracketed labels and the DEVIN product mark.

| token | value | use |
|---|---|---|
| ink | #0B0F17 | Primary dark background for hero and immersive sections |
| ink-secondary | #1A1F2E | Elevated dark surface for secondary buttons and layered elements |
| canvas | #F0F2F5 | Light section background, footer ground, and content areas |
| surface | #FFFFFF | Card backgrounds, primary buttons, and job listing rows |
| accent | #7EC8C8 | Bracketed labels, DEVIN product name, and primary interactive accent |
| accent-secondary | #8BA4C8 | Secondary accent for ASCII art highlights and subtle emphasis |
| text-primary | #000000 | Body text and headings on light surfaces |
| text-inverse | #FFFFFF | Headlines and primary text on dark surfaces |
| text-muted | #6B7280 | Metadata, locations, and secondary information in listings |
| border | #D1D5DB | Subtle dividers for job listing rows and button outlines |

The dark mode is not a toggle but a sectional strategy: hero and brand moments use ink and ink-secondary, while careers, documentation, and transactional content use canvas and surface. The accent color maintains consistent hue across both contexts, ensuring brand recognition. No gradients or shadows appear in the interface; depth is created through texture and tonal contrast alone.

## Typography

Three IBM Plex families establish a clear hierarchy between display, body, and technical annotation roles. The condensed variant provides the distinctive headline character; the standard sans handles reading text; the monospace handles labels and metadata.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | IBM Plex Sans Condensed | 4rem | 300 | 1 | 0.02em | Primary hero headlines, "HIRE [DEVIN]" |
| section-display | IBM Plex Sans Condensed | 2.5rem | 300 | 1.1 | 0.01em | Section headers, "JOIN OUR TEAM" |
| body | IBM Plex Sans | 1rem | 400 | 1.6 | 0 | Paragraph text and descriptions |
| body-light | IBM Plex Sans | 1rem | 300 | 1.6 | 0 | Lighter body for extended reading |
| label | IBM Plex Mono | 0.75rem | 400 | 1.2 | 0.05em | Bracketed tags, metadata, counts |
| navigation | IBM Plex Sans Condensed | 0.875rem | 400 | 1.2 | 0.02em | Buttons, links, footer navigation |

IBM Plex Sans Condensed Light creates the signature display presence through extreme horizontal compression and light stroke weight. IBM Plex Sans Regular provides neutral, readable body text. IBM Plex Mono Regular handles all technical annotations—bracketed labels like [CAREERS] and [GTM], location pins, and full-time indicators—with appropriate mechanical character.

The type scale uses whole-number multiples of 4px (0.25rem), producing sizes at 12px, 14px, 16px, 40px, and 64px. Verify licensing for these families before production use. The IBM Plex families were designed by Mike Abbink, Paul Van Der Laan, and Pieter Van Rosmalen, and are available through Bold Monday.

## Layout

The layout system favors asymmetry and deliberate negative space. Hero sections use full-bleed dark backgrounds with content anchored to the left and action elements floating to the right. Content sections center text blocks with generous margins while maintaining left-aligned headlines.

The grid is implicit rather than rigid. Hero compositions place the primary headline in the left third, a subtitle or descriptor in the center gap, and call-to-action buttons in the right third. This three-zone arrangement creates visual tension and scanning rhythm. The ASCII art hero extends this principle to the extreme: the entire viewport becomes a textured field with typographic elements floating at natural reading positions.

Section spacing uses 6rem vertical padding to create clear territorial boundaries between dark and light modes. Content width is constrained for readability, with body text blocks measuring approximately 65 characters per line. Job listings expand to wider containers to accommodate multi-column row information.

Horizontal rhythm relies on consistent internal padding of 1.5rem within cards and buttons. The footer compresses this to a tighter multi-column grid with category headers and stacked links. No sidebar navigation appears; the system is fully top-level and scroll-driven.

## Visual language

The most distinctive element is the bracketed label system: semantic categories enclosed in square brackets using monospace type at small sizes, rendered with the teal accent background. These labels function as section markers, category filters, and content tags—appearing as [CAREERS], [GTM], [-9-], and [COGNITION IS AN AGENT LAB]. The brackets themselves are structural, not decorative, and are always included in the selectable text.

ASCII art texture serves as the primary visual interest in dark sections. The cross-hatch pattern of plus signs and hash marks creates a moiré-like field that suggests terminal output, matrix displays, or early computing interfaces. This pattern is not a repeating background image but appears as a full-bleed generative field with varying density and occasional circular voids where content resides.

The DEVIN product name receives special treatment: bracketed, rendered in the accent color, and positioned as a proper noun within larger headlines. The brackets here are larger, matching the display type size, and the color shift from white to teal creates a focal point within headlines.

Button shapes use sharp corners with a single clipped or angled corner—typically the bottom-right—creating a notched, mechanical silhouette that echoes the bracket motif. This asymmetry prevents the interface from feeling too polished or conventional.

## Components

### Hero Banner

The hero banner occupies full viewport width with ink background. Content follows a three-zone composition: left-aligned headline stack, center descriptor, right-aligned button pair. The headline uses hero-display token in white, with the DEVIN name in accent color and enclosed in brackets. A small label or tag may precede the headline using the bracket-label treatment.

**Anatomy:** Background layer, ASCII texture overlay (optional), headline text, descriptor text, primary action button, secondary action button.
**Surface and text color:** ink background, text-inverse headlines, accent for product name.
**Typography:** hero-display for headline, body-light for descriptor, navigation for buttons.
**Shape:** Full-bleed rectangle, no border radius.
**Spacing:** 6rem vertical padding, 1.5rem horizontal content margins.
**Composition:** Asymmetric three-zone layout with floating elements.
**Variants:** With ASCII texture (immersive) or solid dark (minimal).

### Bracket Label

A small inline or block-level tag using monospace type with accent background and ink text. Always includes literal square brackets in the content.

**Anatomy:** Background rectangle, bracketed text content.
**Surface and text color:** accent background, ink text.
**Typography:** label token, uppercase content.
**Shape:** No border radius, sharp rectangle.
**Spacing:** 0.25rem vertical padding, 0.5rem horizontal padding.
**Composition:** Inline with text or positioned above section headers.
**Variants:** Small inline tags or larger section markers.

### Action Button

Two variants appear: primary with white surface and dark text, secondary with dark surface and white text. Both feature the signature clipped corner and may include an external-link arrow.

**Anatomy:** Background shape, text label, optional arrow icon.
**Surface and text color:** surface/ink for primary, ink-secondary/text-inverse for secondary.
**Typography:** navigation token, uppercase.
**Shape:** Rectangle with single clipped corner, 1px border.
**Spacing:** 0.75rem vertical padding, 1.5rem horizontal padding.
**Composition:** Paired horizontally with 1rem gap, right-aligned in hero.
**Variants:** Primary (light), secondary (dark), with or without arrow.

### Job Listing Row

Horizontal rows containing job title, employment type metadata, and location. Separated by 1px borders with no internal background color change on hover visible in still images.

**Anatomy:** Row container, title text, full-time badge, location with pin icon.
**Surface and text color:** surface background, text-primary title, text-muted metadata.
**Typography:** section-display for title (at smaller responsive size), label for metadata.
**Shape:** Full-width rectangle, 1px border bottom.
**Spacing:** 1.5rem internal padding.
**Composition:** Title left-aligned, metadata right-aligned in flex row.
**Variants:** Standard row, category header row with bracket label.

### Footer

Multi-column link grid on canvas background. Columns group links by category with small uppercase headers.

**Anatomy:** Canvas background, column headers, stacked link lists.
**Surface and text color:** canvas background, text-primary headers and links.
**Typography:** navigation for headers and links.
**Shape:** Full-width rectangle, no border radius.
**Spacing:** 3rem vertical padding, multi-column horizontal distribution.
**Composition:** 3-4 equal columns with left-aligned stacks.
**Variants:** Standard full footer.

## Responsive behavior

The three-zone hero composition should stack vertically on narrow viewports, with headline, descriptor, and buttons arranged in sequence. The ASCII art texture may reduce in density or switch to a simpler pattern to maintain performance and legibility.

Job listing rows should maintain horizontal layout as long as possible, but allow metadata to wrap beneath titles on very narrow screens. The bracket labels should not shrink below readable size; consider hiding decorative labels while preserving functional category markers.

Button pairs should stack vertically with full-width treatment when horizontal space is constrained, maintaining the clipped corner on the bottom-right of each.

The condensed display type may require slight size reduction on small screens to prevent excessive line breaks. Consider a 2.5rem to 2rem reduction for hero-display.

## Practical implementation guidance

### Preserve
- The bracketed label system with literal square brackets and monospace type
- The clipped-corner button silhouette
- The stark dark/light sectional contrast
- The ASCII art texture as a distinctive brand element
- The three-zone asymmetric hero composition
- The teal accent used sparingly and consistently for DEVIN and labels only

### Avoid
- Rounded corners on any element except where mechanically necessary
- Gradients, drop shadows, or glassmorphism effects
- Additional accent colors beyond the teal and blue-gray family
- Centered text in hero sections—the left anchor is structural to the brand
- Decorative imagery or photography; the system is typographic and textural

### Recommended Build Order
1. Establish the dark and light background tokens with full-bleed sections
2. Implement the IBM Plex type hierarchy with correct weights and spacing
3. Create the bracket-label component as a reusable primitive
4. Build the hero banner with three-zone composition
5. Develop the ASCII texture system as a generative or pre-rendered background
6. Implement clipped-corner buttons with primary and secondary variants
7. Construct job listing rows with metadata alignment
8. Assemble the footer grid

### Accessibility
Ensure the light text on dark ink backgrounds meets WCAG AA contrast ratios; the current white on near-black should exceed requirements. The teal accent on dark backgrounds should be verified for large text compliance. The ASCII art texture should not interfere with text readability; consider reducing opacity or adding a subtle text shadow for critical content areas. The monospace labels at small sizes should maintain minimum 4.5:1 contrast against their backgrounds. When buttons are paired, ensure focus indicators are clearly visible against both dark and light surfaces.

## Scope note

This guide covers the homepage and careers page surfaces visible in the supplied images. Navigation behavior, mobile layouts, form interactions, motion design, and additional product pages are not represented. The button hover, focus, and active states are not documented from still images. Measurements are practical adaptation targets derived from visual inspection against a 4px base grid. Verify licensing for IBM Plex families before production use.

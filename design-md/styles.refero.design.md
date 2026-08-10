# How styles.refero.design is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/styles.refero.design-design)

Last updated: 2026-08-10

## Captured pages

[![Design system guidelines panel showing DO and DON'T rules alongside typography tokens and spacing scale in a dark interface with code-like formatting](https://pin.fontofweb.com/9858?format=jpg)](https://design.withfudge.com/share/pin-9858)

[Design system guidelines panel showing DO and DON'T rules alongside typography tokens and spacing scale in a dark interface with code-like formatting](https://design.withfudge.com/share/pin-9858)

[![Spacing and Shape specification page with border radius table, elevation examples, and compact spacing scale in a dark-themed documentation layout](https://pin.fontofweb.com/9857?format=jpg)](https://design.withfudge.com/share/pin-9857)

[Spacing and Shape specification page with border radius table, elevation examples, and compact spacing scale in a dark-themed documentation layout](https://design.withfudge.com/share/pin-9857)

[![Typography specimen page showing Cosmica type scale with weight variations and font metadata in a structured dark documentation interface](https://pin.fontofweb.com/9856?format=jpg)](https://design.withfudge.com/share/pin-9856)

[Typography specimen page showing Cosmica type scale with weight variations and font metadata in a structured dark documentation interface](https://design.withfudge.com/share/pin-9856)

[![Color palette grid displaying accent swatches Ember and Orchid Flash with neutral tones from Obsidian to Snow in a dark-themed presentation](https://pin.fontofweb.com/9855?format=jpg)](https://design.withfudge.com/share/pin-9855)

[Color palette grid displaying accent swatches Ember and Orchid Flash with neutral tones from Obsidian to Snow in a dark-themed presentation](https://design.withfudge.com/share/pin-9855)

## Overview

This design system presents a dark-mode-first documentation interface for the Awesomic style reference. The visual language is built on a near-black canvas with carefully layered surface tones, creating depth through subtle elevation rather than heavy shadows. The interface serves as both a specification tool and a demonstration of the system it documents—every element embodies the tokens it describes.

The system prioritizes readability of dense technical content. Code-like formatting appears throughout, with syntax highlighting in muted warm and cool tones against the dark ground. Typography combines a distinctive display serif for hero moments with a precise neo-grotesque sans for interface text, while a monospaced family handles token names and code samples. Surfaces are consistently rounded, with a hierarchy of radii from small badges through large cards to full pills, reinforcing a soft, approachable character that contrasts with the technical subject matter.

Navigation and content areas are separated by subtle borders rather than strong background shifts, maintaining visual continuity while establishing clear information architecture. The overall impression is of a polished, professional tool that treats design documentation with the same craft applied to consumer products.

## Colors

The color system operates on a dark-mode foundation with a disciplined neutral scale and two vivid accent colors used with intentional restraint.

| token | value | use |
|---|---|---|
| canvas | #101216 | Page background, deepest surface layer |
| surface | #181A20 | Primary card and panel backgrounds |
| surface-raised | #1F2026 | Elevated cards, hover states, nested containers |
| ink | #FFFFFF | Primary text, headings, active elements |
| ink-muted | #DED2F1 | Secondary text, labels, captions, token descriptions |
| ink-subtle | #A1A1AA | Tertiary text, disabled states, metadata |
| border | #E1E4E8 | Primary dividers, card outlines, table rules |
| border-subtle | #3F3F46 | Inner borders, inactive states, subtle separators |
| accent-warm | #FF5A00 | Ember accent for badges, highlights, status indicators |
| accent-cool | #FE45E2 | Orchid Flash accent for decorative moments, special callouts |
| code-string | #E1E4E8 | Code sample strings, token values |
| code-keyword | #79B8FF | Code syntax keywords, type names |
| code-property | #FFAB70 | Code properties, CSS attributes |
| shadow | #0C297E | Tinted shadow layer for elevated surfaces |

The neutral scale progresses from near-black canvas through dark surfaces to light borders, with text inverting to pure white for maximum contrast. The two accent colors—warm orange and vivid pink—appear only in small doses: badge backgrounds, decorative card washes, and status indicators. Their power derives from scarcity; they are never used for large fills or repeated interface elements. The code highlighting palette extends this discipline, using muted versions of the accent family for syntax differentiation without introducing new hues.

## Typography

The type system pairs three families across distinct roles, with weight and size variations creating hierarchy within each. The supplied font families are Applesystem, Cosmica, JetBrains Mono, Kalice, and PP Neue Montreal.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| display | Kalice | 3rem | 530 | 1 | -0.035em | Hero headings, page titles |
| heading-large | PP Neue Montreal | 1.25rem | 600 | 1.4 | -0.025em | Section headings, component titles |
| heading | PP Neue Montreal | 1.25rem | 600 | 1.4 | -0.025em | Subsection headings, card titles |
| body | PP Neue Montreal | 1rem | 530 | 1.5 | -0.02em | Primary body text, descriptions |
| body-small | PP Neue Montreal | 0.875rem | 530 | 1.43 | -0.02em | Compact body, list items, metadata |
| label | PP Neue Montreal | 0.75rem | 500 | 1.33 | 0.06em | Uppercase labels, category headers, badges |
| code | JetBrains Mono | 0.8125rem | 530 | 1.32 | -0.02em | Token names, code samples, values |
| code-bold | JetBrains Mono | 0.8125rem | 700 | 1.32 | -0.02em | Emphasized code, keywords |
| nav-brand | PP Neue Montreal | 1.5625rem | 530 | 1.28 | -0.025em | Navigation title, breadcrumb root |

Kalice, designed by Margot Lévêque, provides display character with its regular weight and tight leading. PP Neue Montreal, by Mathieu Desjardins of Pangram Pangram Foundry, serves as the workhorse across all interface text with weights from 500 to 600. JetBrains Mono handles technical content with its clear distinction between weights 530 and 700. Cosmica appears in the source material as a bold weight option for button and display contexts. Applesystem is present as a system font fallback. Verify licensing for these families before production use.

## Layout

The interface uses a split-panel layout with fixed navigation and scrollable content areas. The left panel presents structured specifications—typography specimens, spacing tables, color grids—while the right panel shows the corresponding markdown documentation with live token references.

The main content area employs generous internal padding of 3rem top and right, 3rem bottom, and 2.5rem left, creating breathing room around dense information. Sections stack vertically with 4rem gaps, establishing clear separation between specification categories. Within sections, content flows in single columns for readability, with tables and grids breaking the flow for structured data.

Cards and panels use 1rem internal padding as a base, expanding to 1.25rem for more spacious presentations like typography specimens. The navigation header is compact at 1rem horizontal padding, maintaining presence without consuming excessive vertical space.

Grid layouts for color palettes and component previews use consistent gaps of 1rem, with responsive wrapping that maintains minimum item widths. Elevation is expressed through background color steps rather than shadows—canvas to surface to raised surface—keeping the interface flat and modern while preserving depth perception.

## Visual language

The system's most recognizable trait is its extensive use of rounding. Primary cards carry 1rem radius, badges and tags use 0.75rem, and pill buttons achieve full circular ends. This softness permeates every element, from small interface controls to large content panels, creating a cohesive container language.

Borders are hairline-precise at 1px, using the light border color against dark surfaces for subtle definition. The system avoids heavy outlines; instead, nested surfaces create boundaries through background shifts. Shadows appear sparingly and with purpose—tinted blue for elevated cards, inset highlights for interactive states—never as generic elevation crutches.

Syntax highlighting in code blocks follows a disciplined warm-cool alternation: peach tones for properties, ice blue for keywords, pale gray for strings. This palette derives directly from the accent system, ensuring visual consistency across technical and presentational content.

Iconography is minimal and functional, appearing primarily in navigation and action buttons. Icons sit at 0.75rem with 0.375rem gaps to adjacent text, maintaining the compact density of the overall interface.

## Components

### Navigation header

The header spans the full width with canvas background, separated from content by a 1px bottom border in border color. It contains a breadcrumb trail with brand mark, category label, and page title in nav-brand typography. The header height is implicit from its 1rem vertical padding and 1rem line height content. Surface: canvas background. Typography: nav-brand. Shape: full width, 1px bottom border. Spacing: 1rem horizontal padding.

### Specification card

Cards present structured data like spacing scales and border radius tables. They use surface background with 1rem radius and 1rem internal padding. Cards contain labeled rows with purpose, value, and preview columns. Preview columns show miniature visual representations—bars for spacing, corner arcs for radius—using border-subtle for the preview graphics. Surface: surface background, 1rem radius. Typography: body for labels, body-small for values. Shape: 1rem radius, 1px border. Spacing: 1rem padding, tight gaps between rows.

### Color swatch

Color tokens display as rounded rectangles with 1rem radius, accompanied by token name, hex value, and role description. Accent colors appear at larger sizes to emphasize their visual impact, while neutrals arrange in a descending lightness grid. Each swatch includes a text label in body-small typography, with the hex value in code family for precise reference. Surface: color sample fill, 1rem radius. Typography: body-small for name, code for hex value. Spacing: 1rem padding, tight gaps between elements.

### Typography specimen

Type specimens stack vertically with generous 1.5rem gaps. Each specimen shows the type token name, sample text, and specification details (size, weight, line height) in a compact metadata line. The sample text uses the demonstrated style at full size, creating immediate visual proof of the specification. Specimens for display sizes include additional leading to prevent collision. Surface: transparent or surface background. Typography: demonstrated style for sample, body-small for metadata. Spacing: 1.5rem gaps between specimens.

### Code block

Documentation code blocks use surface-raised background with 1rem radius and 1rem padding. Syntax highlighting applies the code color tokens: code-keyword for language keywords, code-property for CSS properties, code-string for values. The code family appears at 0.8125rem with 1.32 line height, optimized for dense technical reading. Surface: surface-raised background, 1rem radius. Typography: code and code-bold. Spacing: 1rem padding.

### Button

Buttons appear in two primary forms: pill-shaped primary actions with full rounded ends, and compact rectangular secondary actions with 0.75rem radius. Primary buttons use ink text on surface background with subtle border, while secondary buttons use ink-muted text. Both variants include 0.625rem horizontal padding and 0.375rem internal gaps when icons are present. Surface: surface background for primary, transparent for secondary. Typography: body-small or label. Shape: pill or 0.75rem radius. Spacing: 0.625rem horizontal padding, unit gaps.

### Badge

Badges are compact labels with 0.75rem radius, using label typography in uppercase with positive letter spacing. They appear in accent-warm for status indicators and surface-raised for neutral categories. Internal padding is tight at 0.25rem vertical and 0.5rem horizontal. Surface: surface-raised or accent-warm background. Typography: label. Shape: 0.75rem radius. Spacing: 0.25rem vertical, 0.5rem horizontal padding.

## Responsive behavior

The split-panel layout should transition to stacked single-column below approximately 960px viewport width, with the documentation panel preceding the specification panel in source order. Navigation breadcrumbs should truncate gracefully, preserving the current page title while collapsing intermediate segments.

Typography specimens should maintain their full size for impact, though display sizes may scale down to 2.5rem on narrow viewports. Code blocks should enable horizontal scrolling rather than wrapping, preserving line integrity for copy-paste functionality.

Color grids should reflow from multi-column to single column, with swatches expanding to full width for touch accessibility. Spacing and radius tables should convert to card-based layouts on small screens, with each row becoming an independent card to avoid horizontal table scrolling.

## Practical implementation guidance

### Preserve
- The dark-mode-first approach with true near-black canvas rather than softened grays
- The extensive rounding hierarchy from 0.75rem through 1rem to full pills
- The disciplined accent color restraint—warm and cool accents only in small doses
- The syntax highlighting palette derived from interface accents
- The weight-driven hierarchy within PP Neue Montreal rather than family switching

### Avoid
- Lightening the canvas or surfaces for perceived readability—contrast is already high
- Adding drop shadows to cards; depth comes from background color steps
- Using accent colors for large fills, buttons, or repeated interface elements
- Introducing additional font families beyond the three specified
- Tracked-out headlines or tight-tracked display text; the system uses normal to slightly negative tracking

### Recommended build order
1. Establish the dark canvas and surface stack with exact color values
2. Implement PP Neue Montreal at body size with proper weight and tracking
3. Add JetBrains Mono for code content with syntax highlighting
4. Build the card component with 1rem radius and surface background
5. Create the split-panel layout with navigation and content areas
6. Add Kalice for display headings
7. Implement accent colors in badges and decorative elements only
8. Refine spacing tokens and table layouts

### Accessibility
- Maintain the high contrast between ink (#FFFFFF) and canvas (#101216), which exceeds WCAG AAA standards
- Ensure code blocks have visible focus indicators for keyboard navigation
- Provide text alternatives for color swatches that communicate the token name and value
- Consider a light mode variant using the documented neutral scale inversion, though the current system is dark-only
- Verify that 0.75rem label text remains legible at typical viewing distances; increase to 0.875rem if user testing indicates issues

## Scope note

This guide covers the dark-mode documentation interface for the Awesomic design system as presented on the style reference page. It does not include unseen component states, motion behavior, form validation patterns, or light-mode variants. The button component documentation is partial; additional variants and interactive states would require further exploration. Measurements are derived from the exact values present in the interface specification.

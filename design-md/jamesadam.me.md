# How jamesadam.me is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/jamesadam.me-design)

Last updated: 2026-08-10

## Captured pages

[![Full blog post page showing amber monospace typography on near-black background with navigation header, article title, metadata, and section headings with dotted underlines](https://pin.fontofweb.com/6343?format=jpg)](https://design.withfudge.com/share/pin-6343)

[Full blog post page showing amber monospace typography on near-black background with navigation header, article title, metadata, and section headings with dotted underlines](https://design.withfudge.com/share/pin-6343)

[![Lower article section with data table featuring amber borders and text, section heading with dotted underline, and inline code label on dark background](https://pin.fontofweb.com/6344?format=jpg)](https://design.withfudge.com/share/pin-6344)

[Lower article section with data table featuring amber borders and text, section heading with dotted underline, and inline code label on dark background](https://design.withfudge.com/share/pin-6344)

## Overview

This design system captures a dark, terminal-aesthetic personal blog built around a single monospace typeface and a restrained amber-on-black color scheme. The visual language evokes vintage computing interfaces and code editors, prioritizing readability through high contrast and generous line spacing rather than decorative elements. Every textual element uses IBM Plex Mono at a consistent 400 weight, creating a unified rhythm where hierarchy is established through size, letter spacing, and structural spacing rather than weight changes. The near-black background serves as a canvas for long-form technical writing, while the amber ink color provides warmth and distinction from typical blue-white terminal palettes. The system is intentionally minimal: no cards, no shadows, no rounded corners, no gradients. Structure emerges from typographic scale, horizontal dotted rules, and careful vertical spacing. This is a design for readers who expect content density and visual consistency across lengthy technical articles.

## Colors

The palette is extremely constrained, consisting of exactly two functional colors that create a high-contrast, warm-terminal reading environment.

| token | value | use |
|---|---|---|
| canvas | `#0A0A0A` | Page background, table cell backgrounds, inline code backgrounds |
| ink | `#FFC840` | All text, heading underlines, table borders, link colors, navigation |
| muted-ink | `#000000` | Not used in visible interface; retained for potential overlay states |

The canvas color is a deep near-black with subtle warmth, preventing the harshness of pure black while maintaining the terminal aesthetic. The ink color is a rich amber-yellow that provides excellent luminance contrast against the dark background without the clinical coldness of pure white or cyan alternatives.

All text renders in the amber ink color, including body paragraphs, headings, navigation links, metadata, and table content. Links within the article body use the same amber color as surrounding text, distinguished only by context and cursor interaction rather than hue shift. The dotted underlines beneath section headings use the same amber value, creating a consistent decorative language.

The table borders and inline code borders also employ this amber, making every structural line in the interface part of a single chromatic system. There are no accent colors, no success or error states visible in the supplied material, and no photographic imagery requiring palette adaptation.

## Typography

The entire typographic system relies on a single font family at a single weight, with hierarchy created through size, letter spacing, and vertical placement.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | IBM Plex Mono | 1.5rem | 400 | 1.7 | 0.1em | Article title (h1) |
| section-display | IBM Plex Mono | 1.2rem | 400 | 1.7 | 0.1em | Section headings (h2) |
| body | IBM Plex Mono | 1rem | 400 | 1.7 | normal | Paragraphs, table content, general text |
| label | IBM Plex Mono | 0.85rem | 400 | 1.7 | normal | Navigation links, metadata, tags |
| navigation | IBM Plex Mono | 0.85rem | 400 | 1.7 | normal | Header navigation items |
| legal-copy | IBM Plex Mono | 0.85rem | 400 | 1.7 | normal | Footer text, copyright, auxiliary legal content |

IBM Plex Mono was designed by Mike Abbink, Paul Van Der Laan, and Pieter Van Rosmalen, and is available from Bold Monday. Verify licensing for these families before production use.

The hero-display token applies to the article title, featuring the largest size in the system at 24px with expanded letter spacing of 2.4px, giving it a deliberate, almost banner-like quality. Section headings use the section-display token at 19.2px with matching expanded tracking, creating clear document structure without departing from the monospace rhythm.

Body text at 16px with 27.2px line height provides comfortable reading density for technical content. The consistent 1.7 line height across all tokens maintains vertical rhythm regardless of scale. Label, navigation, and legal-copy tokens at 13.6px and 14.4px handle auxiliary information without introducing new visual texture.

The expanded letter spacing on headings is a distinctive feature, giving them an architectural, constructed quality that separates them from the flowing body text. This tracking choice also improves legibility at the amber color's moderate luminance against dark backgrounds.

## Layout

The layout follows a centered, single-column reading model with generous margins and no sidebar elements. The content area appears to occupy roughly 60-70% of viewport width on desktop, creating ample negative space that reinforces the focused, terminal-like reading experience.

The header contains a compact navigation bar with the site identifier "JAMES ADAM $" followed by bracketed category links. This header sits at the top with minimal vertical padding, separated from the main content by a thin horizontal rule. Below the header, the article title receives prominent spacing before metadata elements (date, category, tags) appear in a denser cluster.

Section headings introduce major vertical breaks, with 32px of top margin and 16px of bottom margin creating clear content zones. Paragraphs maintain 16px bottom margins, producing consistent paragraph separation without excessive whitespace.

The data table visible in the material spans the full content width, with cells padded internally and separated by 1px amber borders. Table headers use the same typography as body text but with implicit structural emphasis from their positioning and border context.

No grid system, card containers, or multi-column layouts are present. The design relies on the natural flow of monospace text and deliberate spacing to organize information.

## Visual language

The visual character is austere and systematic, drawing from terminal emulators and early computing interfaces. Every element is rectangular: no rounded corners appear anywhere in the interface. Borders are sharp, 1px lines in amber, whether forming table grids, inline code boxes, or heading underlines.

The dotted underline beneath section headings is a signature decorative element, creating a subtle rhythm of horizontal texture across the page. This dotted pattern suggests punch cards or paper tape, reinforcing the retro-computing aesthetic without becoming ornamental.

Inline code labels appear as bordered rectangles with internal padding, resembling terminal input prompts or command buttons in a text interface. These elements sit within the text flow without background color variation, maintaining the flat, two-plane system of amber on black.

The absence of imagery, icons, or decorative graphics means the visual language is entirely typographic. Even the table structure reads as formatted text rather than a distinct component type. This consistency allows readers to focus on content density without visual interruption.

The warm amber against near-black creates an intimate, focused reading environment distinct from the high-key brightness of typical documentation sites. This color choice also reduces eye strain during extended reading sessions compared to pure white-on-black alternatives.

## Components

### Article header

- **Anatomy**: Site identifier with prompt character, bracketed navigation links, horizontal rule separator, article title, date with category label, tag list
- **Surface and text color**: All text in `{colors.ink}` on `{colors.canvas}` background
- **Typography**: Site identifier uses `{typography.label}` with prompt aesthetic; navigation links use `{typography.navigation}`; title uses `{typography.hero-display}`; metadata uses `{typography.label}`
- **Shape**: No border radius; horizontal rule is 1px solid or dotted `{colors.ink}`
- **Spacing**: Title receives substantial top margin; metadata cluster sits compactly below with 8px separations
- **Composition**: Left-aligned text block, no centered elements

### Section heading

- **Anatomy**: Heading text with dotted underline extending full content width
- **Surface and text color**: `{colors.ink}` text on `{colors.canvas}`
- **Typography**: `{typography.section-display}`
- **Shape**: Dotted bottom border, 1px, `{colors.ink}`
- **Spacing**: 32px top margin, 8px bottom padding, 16px bottom margin
- **Composition**: Full-width block element

### Body paragraph

- **Anatomy**: Plain text block with no indentation
- **Surface and text color**: `{colors.ink}` on `{colors.canvas}`
- **Typography**: `{typography.body}`
- **Spacing**: 16px bottom margin, no top margin
- **Composition**: Flowing text within content column

### Inline code label

- **Anatomy**: Text within rectangular border
- **Surface and text color**: `{colors.ink}` text, `{colors.canvas}` background, `{colors.ink}` border
- **Typography**: `{typography.body}`
- **Shape**: 1px solid border, no border radius
- **Spacing**: Internal padding approximately 4px vertical, 8px horizontal
- **Composition**: Inline with text flow

### Data table

- **Anatomy**: Header row with column labels, body rows with cell content
- **Surface and text color**: `{colors.ink}` text and borders on `{colors.canvas}` background
- **Typography**: `{typography.body}` for all cells
- **Shape**: 1px solid borders in `{colors.ink}`, no border radius
- **Spacing**: Cell padding approximately 16px; row height determined by content plus padding
- **Composition**: Full-width table with explicit column structure

### Navigation link

- **Anatomy**: Bracketed text label
- **Surface and text color**: `{colors.ink}` on `{colors.canvas}`
- **Typography**: `{typography.navigation}`
- **Spacing**: Horizontal margin between links approximately 8px
- **Composition**: Inline within header row

## Responsive behavior

The supplied material shows a single desktop viewport. Based on the design's characteristics, the following responsive approach is recommended:

At narrower viewports, the content column should maintain comfortable margins rather than filling the screen. The monospace body text at 16px remains legible down to approximately 320px viewport width, though line length should be controlled through padding rather than font size reduction.

The header navigation may wrap to multiple lines on very narrow screens, with bracketed links stacking naturally. The site identifier and prompt character should remain visible without truncation.

Table layouts should scroll horizontally when content exceeds viewport width, preserving the monospace column alignment that is essential for the table's readability. Avoid reflowing table cells into card-like stacked layouts, as this would break the terminal aesthetic.

The article title's expanded letter spacing may require slight reduction at narrow widths to prevent excessive line breaks, though the 24px size should remain constant to preserve hierarchy.

No breakpoint-specific layout changes are visible in the material; the system's simplicity suggests a fluid single-column approach with padding adjustments rather than structural transformation.

## Practical implementation guidance

### Preserve
- The single-font, single-weight typographic system. Do not introduce additional weights or families for emphasis.
- The amber-on-black color relationship. This warmth is central to the site's character.
- The dotted underline on section headings. This is a distinctive structural marker.
- The rectangular, zero-radius aesthetic throughout all elements.
- The generous line height of 1.7 across all text sizes.

### Avoid
- Adding shadows, gradients, or background textures that would compromise the flat terminal aesthetic.
- Introducing rounded corners on buttons, inputs, or cards.
- Using pure black (`#000000`) for backgrounds; the near-black `#0A0A0A` provides necessary warmth.
- Adding icon fonts or graphical elements that break the typographic purity.
- Creating color variations for link states that depart from the amber system.

### Recommended build order
1. Establish the canvas background and IBM Plex Mono loading
2. Implement body text styling with correct line height and spacing
3. Build the header with navigation pattern and horizontal rule
4. Create the article title and metadata cluster
5. Implement section headings with dotted underline
6. Add inline code label styling
7. Build the data table with amber borders
8. Fine-tune vertical spacing between all elements

### Accessibility
- The amber-on-black combination provides strong contrast for typical vision, but verify WCAG compliance for the specific amber hue against `#0A0A0A`.
- The dotted underline on headings may not be perceptible to all users; ensure heading hierarchy is clear through spacing and size alone.
- Monospace fonts can be beneficial for users with certain cognitive preferences, but the expanded letter spacing on headings should not interfere with screen reader parsing.
- Consider adding a focus indicator that maintains the 1px rectangular border aesthetic for keyboard navigation.
- No motion or animation is present in the material; any added interactions should respect reduced-motion preferences.

## Scope note

This guide covers the article page surface of jamesadam.me as visible in the supplied material. Navigation pages, index listings, archive views, and any interactive states beyond static reading are not represented. No mobile, tablet, or wide-desktop breakpoint variations are documented. Measurements derive from the exact values provided for this page type.

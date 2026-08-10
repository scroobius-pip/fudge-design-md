# How mattstromawn.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/mattstromawn.com-design)

Last updated: 2026-08-10

## Captured pages

[![Dark theme article page with near-black background, warm light gray headline, and muted body text showing table of contents sidebar](https://pin.fontofweb.com/6300?format=jpg)](https://design.withfudge.com/share/pin-6300)

[Dark theme article page with near-black background, warm light gray headline, and muted body text showing table of contents sidebar](https://design.withfudge.com/share/pin-6300)

[![Light theme article page with white background, dark charcoal headline, and medium gray body text showing identical content layout](https://pin.fontofweb.com/6299?format=jpg)](https://design.withfudge.com/share/pin-6299)

[Light theme article page with white background, dark charcoal headline, and medium gray body text showing identical content layout](https://design.withfudge.com/share/pin-6299)

## Overview

This design system describes a personal writing website that prioritizes long-form reading through typographic restraint and a disciplined two-theme structure. The visual identity centers on a single serif typeface—Charter—used at carefully chosen sizes for headlines, body text, and navigation alike. The site offers a stark contrast between a light theme with white backgrounds and dark charcoal text, and a dark theme with near-black backgrounds and warm light gray text. Both themes share identical layout proportions and component structures, differing only in their color values. The overall impression is one of editorial seriousness: generous line lengths, ample vertical breathing room between paragraphs, and minimal decorative elements. Navigation is sparse, confined to a top bar with the author's name and a few section links. The design treats the article itself as the primary visual event, with supporting elements like the table of contents receding into the background through subtle color differentiation rather than borders or shadows.

## Colors

The color system is built on a functional grayscale with two complete theme variants. Every color serves a specific readable role, with no accent colors or decorative hues beyond what emerges from photography.

| token | light theme | dark theme | use |
|---|---|---|---|
| ink | `#393B3D` | `#CBD0D2` | Primary text: headlines, body copy, navigation links |
| ink-muted | `#72777A` | `#959A9C` | Secondary text: article metadata, captions, de-emphasized content |
| canvas | `#FFFFFF` | `#1A1921` | Page background: fills the full viewport behind all content |
| surface | `#1A1921` | `#FFFFFF` | Inverted surface: used for theme toggle indicators, potential dark-mode cards |
| surface-elevated | `#959A9C` | `#72777A` | Tertiary surfaces: table of contents backgrounds, subtle dividers |
| border | `#CBD0D2` | `#393B3D` | Structural boundaries: table of contents panel background in light mode |

The light theme presents high-contrast readability with near-white canvas against dark charcoal ink. The dark theme inverts this relationship, using a deep navy-black surface with warm light gray text that avoids the harshness of pure white on pure black. The muted ink tones in both themes provide hierarchical depth without introducing chromatic complexity. The table of contents component uses the border token as its background in light mode, creating a subtle gray panel that separates it from the main content without a visible border stroke. No gradients, shadows, or border colors appear in the interface.

## Typography

The typographic system relies exclusively on Charter, a transitional serif distributed by Bitstream Inc Cambridge Ma. A single variable font file serves all weights and sizes. Verify licensing for this family before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| article-display | Charter | 2rem | 500 | 1.1 | -0.02em | Article headlines: H1 elements at top of page |
| article-lead | Charter | 1.0625rem | 400 | 1.55 | normal | Article metadata: date, reading time below headline |
| body | Charter | 1.1875rem | 400 | 1.4 | normal | Body paragraphs, navigation links, table of contents entries |
| body-small | Charter | 1.0625rem | 400 | 1.55 | normal | Compact body contexts: captions, auxiliary notes |
| navigation | Charter | 1.1875rem | 400 | 1.4 | normal | Site header links: Writing, About |
| contents-label | Charter | 1.1875rem | 400 | 1.4 | normal | Table of contents section header: "CONTENTS" |

The article-display token carries a medium weight (500) and tight negative letter spacing that gives headlines presence without heaviness. The body token at 1.1875rem provides comfortable reading at typical viewing distances, with a line height of 1.4 that maintains paragraph cohesion across long passages. The article-lead token at 1.0625rem sits slightly below body size, establishing clear subordination for metadata. The body-small token shares the article-lead size but serves distinct contexts where compact text is needed without the metadata association. The navigation and contents-label tokens match body specifications exactly, reflecting the site's commitment to typographic uniformity across functional roles. All text uses normal letter spacing except the display headline, which tightens tracking for optical density. The type scale derives from a 2px relative unit, with sizes landing on whole-number multiples: 17px becomes 1.0625rem, 19px becomes 1.1875rem, and 32.3px rounds to 2rem.

## Layout

The layout follows a centered single-column model with a narrow reading measure and generous margins. The content column occupies a comfortable portion of the viewport width, creating substantial whitespace on either side that focuses attention on the text.

The site header spans the full viewport width with internal content aligned to the article column. It contains the author's name and a small icon on the left, with navigation links—Writing, About—positioned on the right. This header uses no background color, sitting directly on the canvas.

Below the header, the article title and metadata occupy the main content column with no sidebar intrusion. The headline receives significant top spacing, approximately 2.625rem above it, creating a deliberate pause between navigation and content. Article metadata sits directly beneath the title with standard paragraph spacing.

Body paragraphs flow in a continuous column with consistent vertical rhythm. Each paragraph receives top margin of 1.1875rem, matching the body font size to maintain even spacing without additional gap calculations. The table of contents appears inline with body content, positioned after the introductory paragraphs. It uses a subtle background fill to distinguish itself without breaking the column flow.

No grid system is visible; the layout relies on a single max-width constraint with auto margins for centering. The reading measure appears to fall within the 65–75 character range for body text, an optimal width for sustained reading. No multi-column layouts, cards, or complex assemblages appear in the visible structure.

## Visual language

The visual language is deliberately austere, drawing authority from typographic refinement rather than graphic embellishment. The single typeface choice unifies every textual element, creating a monolithic consistency that feels intentional rather than limited. Serif letterforms in navigation and body alike lend a literary quality appropriate to long-form essays.

Theme switching provides the primary visual variation. The dark theme transforms the reading experience from bright and airy to intimate and focused, with warm gray tones that reduce eye strain in low-light conditions. Both themes maintain identical contrast ratios and hierarchical relationships, ensuring that theme choice affects mood without impairing usability.

The table of contents represents the only structured component beyond basic text flow. It uses a flat list with hierarchical indentation for subsections, rendered in the same typeface and size as body text. A small caps or uppercase label—"CONTENTS"—introduces the list, set in the same weight as body text but distinguished by case transformation. No bullets, numbers, or icons accompany entries; indentation alone conveys hierarchy.

Photography appears sparingly if at all in the visible content. The design assumes text-first presentation, with images serving as content illustrations rather than layout elements. No decorative patterns, textures, or geometric shapes interrupt the reading surface.

## Components

### Site header

- **Anatomy**: Left cluster containing author name "Matt Ström-Awn", a small circular icon, and a grid-like icon; right cluster containing "Writing" and "About" text links
- **Surface and text color**: Transparent background; ink color for all text, inverting with theme
- **Typography**: navigation token for all links; author name appears at same size as navigation
- **Shape**: No border, shadow, or background fill; full-bleed width with content constrained to reading column; 0rem border radius on all elements
- **Spacing**: Compact vertical padding, approximately one body line height; horizontal alignment with article content edges
- **Composition**: Flexbox row with space-between distribution; left and right clusters maintain visual balance

### Article title

- **Anatomy**: Single H1 element containing the article headline
- **Surface and text color**: Transparent background; ink color for text
- **Typography**: article-display token with medium weight and negative tracking
- **Shape**: No border, background, or decorative elements; 0rem border radius
- **Spacing**: Generous top margin of approximately 2.625rem; no bottom margin beyond standard flow
- **Composition**: Full width of content column; left-aligned

### Article metadata

- **Anatomy**: Single line containing date and reading duration, separated by an interpunct or similar separator
- **Surface and text color**: Transparent background; ink-muted color for text
- **Typography**: article-lead token at slightly reduced size from body
- **Shape**: No border or background; 0rem border radius
- **Spacing**: Sits directly below title with standard paragraph gap
- **Composition**: Left-aligned with content column

### Body paragraph

- **Anatomy**: Standard P element containing running text
- **Surface and text color**: Transparent background; ink color for text
- **Typography**: body token with regular weight and comfortable line height
- **Shape**: No border, background, or indent; block paragraphs with space between; 0rem border radius
- **Spacing**: Top margin of 1.1875rem; no bottom margin
- **Composition**: Full width of content column; left-aligned with ragged right edge

### Table of contents

- **Anatomy**: Section label "CONTENTS" followed by flat list of article sections with indented subsections
- **Surface and text color**: border token as background fill in light theme; elevated surface in dark theme; ink color for all text
- **Typography**: contents-label token for the section header; body token for all list entries
- **Shape**: No visible border radius; rectangular panel with internal padding; 0rem border radius
- **Spacing**: Internal padding of approximately one body line height on all sides; entries stack with minimal or no additional gap
- **Composition**: Inset within content column width, not full-bleed; left-aligned entries with incremental indentation for nested items
- **Variants**: Light theme shows as light gray panel; dark theme shows as slightly elevated dark surface

### Inline link

- **Anatomy**: A element within body or navigation text
- **Surface and text color**: No distinct link color; inherits ink from parent context
- **Typography**: Inherits surrounding token; no size or weight change
- **Shape**: No underline visible in default state; subtle or absent text decoration; 0rem border radius
- **Spacing**: Inline with surrounding text
- **Composition**: Flows naturally within paragraph or navigation context

## Responsive behavior

The design appears optimized for desktop reading widths, with a comfortable centered column and ample margins. At narrower viewports, the content column should maintain readable measure through proportional scaling or adjusted margins. The table of contents may shift from an inset panel to a full-width block or collapsible section on small screens. Navigation links in the header should remain accessible without wrapping; if space becomes constrained, the right-aligned cluster could convert to a menu trigger. Font sizes may require slight reduction at very small viewports to preserve line length integrity, though the generous base sizes suggest the design prioritizes readability over information density. No breakpoint-specific layouts are visible in the source material.

## Practical implementation guidance

### Preserve
- The single-typeface discipline: Charter at all sizes creates the site's distinctive literary voice
- The stark theme contrast: light and dark variants should remain complete inversions, not partial adjustments
- Generous paragraph spacing: the 1.1875rem top margin maintains rhythm without crowding
- The narrow reading measure: resist widening the content column beyond comfortable line lengths
- Minimal header treatment: no background fill, shadow, or border separates navigation from content
- Square corners throughout: the 0rem radius on all components maintains the austere editorial character

### Avoid
- Introducing accent colors or decorative hues that would break the grayscale discipline
- Adding borders, shadows, or background fills to body paragraphs
- Using sans-serif typefaces for any interface element, which would fracture the unified voice
- Expanding navigation beyond the minimal Writing/About structure visible in the source
- Creating card-based or multi-column layouts that would disrupt the linear reading flow
- Applying border radius to any component; rounded corners would contradict the site's severe rectilinear aesthetic

### Recommended build order
1. Establish the CSS custom property system for both light and dark themes with complete color token sets
2. Implement the Charter font face with variable font support and appropriate font-display strategy
3. Build the centered content column with max-width constraint and auto margins
4. Create the site header with flexbox space-between composition
5. Style article title and metadata with correct type tokens and spacing
6. Implement body paragraph flow with consistent vertical rhythm
7. Add the table of contents component with theme-aware background and indentation logic
8. Implement theme toggle with persistent user preference storage

### Accessibility
- Ensure both themes meet WCAG AA contrast standards: the light theme's ink on canvas and the dark theme's ink on surface both appear to satisfy this requirement
- Provide a visible, operable theme toggle with appropriate aria-pressed state
- Maintain focus indicators for keyboard navigation that are visible in both themes
- Consider `prefers-color-scheme` media query for initial theme selection
- Ensure the table of contents serves as a genuine navigation aid with proper heading structure and skip links

## Scope note

This guide covers the article page template as visible in the supplied images, including the light and dark theme variants, single-column reading layout, and table of contents component. Footer elements, article pagination, comment systems, search functionality, and mobile-specific layouts are not represented in the available material. All visible components use square corners with 0rem border radius.

# How explosion.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/explosion.ai-design)

Last updated: 2026-08-10

## Captured pages

[![Dark navy footer with circular Explosion logo, multi-column navigation links, and social icons on a deep indigo background](https://pin.fontofweb.com/5848?format=jpg)](https://design.withfudge.com/share/pin-5848)

[Dark navy footer with circular Explosion logo, multi-column navigation links, and social icons on a deep indigo background](https://design.withfudge.com/share/pin-5848)

[![Light homepage with bold hero headline, colored product pills, filter sidebar, and grid of article cards with thumbnails](https://pin.fontofweb.com/5847?format=jpg)](https://design.withfudge.com/share/pin-5847)

[Light homepage with bold hero headline, colored product pills, filter sidebar, and grid of article cards with thumbnails](https://design.withfudge.com/share/pin-5847)

## Overview

Explosion.ai presents a developer-tools company with a visual identity that balances editorial clarity and technical credibility. The homepage opens on a light, spacious canvas dominated by a bold, multi-line headline in dark navy ink. Product offerings appear as rounded, colorful pills embedded directly within the headline flow, creating an informal, approachable rhythm against the otherwise structured layout. Below the hero, the page shifts into a content-discovery mode: a narrow left sidebar presents dense filter tags while a wider right area displays article cards in a responsive grid. The footer inverts the entire mood, plunging into a deep navy surface with white typography, a circular wordmark, and multi-column navigation. The overall impression is of a company that takes its engineering seriously but presents itself with contemporary, friendly restraint—no gratuitous gradients, no heavy shadows, just confident type, clean cards, and purposeful color accents.

## Colors

The palette operates in two distinct modes: a light editorial surface for content and a deep navy footer for structural grounding. The light mode relies on near-black ink against white canvas, with cool gray borders providing subtle separation. Accent colors appear sparingly as product identifiers: a bright teal for spaCy and a vivid purple for Prodigy. The dark footer mode inverts this logic, placing light text on a rich indigo-navy ground.

| token | value | use |
|---|---|---|
| ink | #1a1a2e | Primary text, filter tags, dark pills, headlines |
| canvas | #ffffff | Page background, card surfaces, footer text |
| surface | #f5f5f7 | Subtle secondary backgrounds, hover states |
| accent-teal | #09a3d5 | spaCy product pill, interactive highlights |
| accent-purple | #7c3aed | Prodigy product pill, secondary accent |
| muted-ink | #6b7280 | Secondary labels, timestamps, metadata |
| border | #e5e7eb | Card borders, dividers, input outlines |
| footer-bg | #1e1b2e | Footer background, dark section surfaces |

The light mode dominates the page body, creating an open, readable environment for long-form content discovery. The dark footer serves as a visual anchor, signaling the end of the journey and concentrating utility navigation in a single, high-contrast zone. Accent colors are reserved for product identification rather than general decoration, which preserves their communicative power. The teal and purple carry distinct brand associations that repeat across the interface whenever those products are named.

## Typography

The type system is built on Calibre, a geometric sans-serif from Klim Type Foundry, with Ratio serving as a secondary display face. The supplied font families also include Copyright Klim Type Foundry-Not Licensed For Desktop Use, which appears as a separate family entry in the source files. Calibre appears in two weights: Regular for body and navigation, and Semibold for headlines, labels, and filter tags. The design leverages tight tracking on large sizes to create a compact, confident headline presence, while body text relaxes into neutral, readable settings.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Calibre | 3rem | 600 | 1.1 | -0.02em | Homepage headline, major page titles |
| section-display | Calibre | 1.5rem | 600 | 1.2 | -0.01em | Card titles, section headers |
| body | Calibre | 1rem | 400 | 1.6 | 0em | Paragraphs, descriptions, footer body |
| label | Calibre | 0.75rem | 600 | 1.4 | 0.05em | Filter tags, category labels, pills |
| navigation | Calibre | 0.875rem | 400 | 1.5 | 0em | Header links, footer links, breadcrumbs |

Ratio appears in the circular wordmark, where its distinctive character adds visual interest to the small lockup. Calibre Semibold carries the full weight of the interface's voice, from the commanding hero headline to the dense clusters of filter tags. The type scale is intentionally restrained: only five sizes serve the entire interface, with the largest reserved exclusively for the homepage hero. This discipline prevents visual fragmentation and reinforces the technical, utilitarian character of the brand.

Verify licensing for these families before production use. Calibre is designed by Kris Sowersby at Klim Type Foundry. Copyright Klim Type Foundry-Not Licensed For Desktop Use is also attributed to Kris Sowersby at Klim Type Foundry. Ratio carries no attributed designer or vendor in the available records.

## Layout

The page follows an asymmetric two-column structure below the hero. The left column, approximately one-quarter of the width, contains stacked filter categories with dense pill tags and dropdown selectors. The right column, occupying the remaining three-quarters, presents a grid of article cards in two or three columns depending on available width. This sidebar-main relationship creates a clear hierarchy between discovery tools and discovered content.

The hero section breaks from this grid, spanning the full width with generous vertical padding. The headline sits left-aligned with ample breathing room, while product pills interrupt the text flow inline. Below the hero, the filter sidebar maintains consistent vertical rhythm with uniform gaps between category groups. Each category presents a small uppercase label followed by a wrapping cluster of tags.

The footer abandons the two-column content logic for a four-column navigation grid. The leftmost column carries the brand wordmark and company description; the remaining columns organize links by theme: Navigation, Software, and Topics. A full-width rule separates the link grid from the bottom bar, which distributes social icons on the left and legal links on the right.

Spacing follows a modular rhythm based on a 0.25rem unit. Section breaks use 6rem of vertical space to create clear territorial boundaries. Content gaps within sections measure 2rem, while card internal padding sits at 1.5rem. The filter sidebar compresses these gaps slightly, with category groups separated by 1.5rem to maintain density appropriate for utility navigation.

## Visual language

The visual character is defined by three elements: geometric clarity, purposeful color restraint, and rounded informality. Every interactive element that carries a label uses a fully rounded pill shape, from product identifiers to filter tags to category badges. This consistent rounding softens the otherwise stark typographic presence and creates a family resemblance across all clickable or tappable items.

Photography and illustration within article cards vary widely in style, from technical diagrams to event photography to stylized graphic treatments. The cards themselves provide a neutral white frame with subtle border definition, allowing the thumbnail imagery to carry visual interest without competing with the systematic interface. Thumbnails appear in consistent aspect ratios, creating a regular grid rhythm despite the heterogeneous content.

The circular wordmark in the footer introduces a distinctive brand mark: the word "EXPLOSION" arranged in a ring, with letters oriented radially. This mark repeats in the header at smaller scale, establishing continuity between page zones. The mark's geometric construction echoes the sans-serif type system while adding a memorable, almost stamp-like identity element.

Iconography in the footer social bar uses simple, recognizable silhouettes in white against the dark ground. These icons maintain consistent optical weight and sit on a comfortable 1.5rem grid. No decorative illustration or background pattern appears elsewhere in the interface, maintaining the focus on content and navigation.

## Components

### Hero headline

The homepage hero presents a large, dark headline that incorporates inline product pills as part of the sentence flow. An arrow glyph precedes the pills, creating a visual bridge between the declarative statement and the product offerings.

- **Anatomy**: Multi-line text block with inline pill cluster
- **Surface and text color**: `{colors.ink}` text on `{colors.canvas}` background
- **Typography**: `{typography.hero-display}`
- **Shape**: No container; text flows full-width
- **Spacing**: Generous top and bottom padding, approximately 4rem above and 3rem below
- **Composition**: Left-aligned, maximum line length controlled by container width

### Product pill

Small, fully rounded badges that identify products or services. Three color variants appear: teal for spaCy, purple for Prodigy, and dark navy for Consulting.

- **Anatomy**: Text label within pill container
- **Surface and text color**: Variant backgrounds (`{colors.accent-teal}`, `{colors.accent-purple}`, `{colors.ink}`) with `{colors.canvas}` text
- **Typography**: `{typography.label}`
- **Shape**: `{rounded.pill}` with horizontal padding approximately 1rem
- **Spacing**: Inline with text, separated by word spaces
- **Variants**: Teal, purple, and dark colorways for different product associations

### Filter tag

Dense, dark pills used for content filtering in the sidebar. These appear in stacked clusters under category labels.

- **Anatomy**: Text label within compact pill container
- **Surface and text color**: `{colors.ink}` background, `{colors.canvas}` text
- **Typography**: `{typography.label}`
- **Shape**: `{rounded.pill}` with tight horizontal padding
- **Spacing**: Wrapped in clusters with 0.5rem gap between tags
- **Composition**: Left-aligned clusters under uppercase category headers

### Article card

Content containers for blog posts, talks, and papers. Each card combines a thumbnail image, title, metadata, and excerpt.

- **Anatomy**: Thumbnail image, title, optional author line, excerpt, category badge, date
- **Surface and text color**: `{colors.canvas}` background, `{colors.ink}` text, `{colors.muted-ink}` metadata
- **Typography**: Title uses `{typography.section-display}`, body uses `{typography.body}`, badges use `{typography.label}`
- **Shape**: `{rounded.card}` with `{colors.border}` outline
- **Spacing**: `{spacing.card-padding}` internal padding, 1.5rem gap in grid
- **Composition**: Vertical stack with thumbnail at top, text content below

### Dropdown selector

Form controls for Tasks and Authors filters, presenting as bordered rectangles with placeholder text.

- **Anatomy**: Trigger button with placeholder text and dropdown arrow
- **Surface and text color**: `{colors.canvas}` background, `{colors.ink}` text, `{colors.border}` outline
- **Typography**: `{typography.body}`
- **Shape**: `{rounded.button}` with full-width expansion
- **Spacing**: 1rem vertical margin between selectors

### Footer

Dark structural zone containing brand identity, description, multi-column links, and bottom bar.

- **Anatomy**: Wordmark, description paragraph, four link columns, horizontal rule, social icons, legal links
- **Surface and text color**: `{colors.footer-bg}` background, `{colors.canvas}` text, `{colors.muted-ink}` for secondary elements
- **Typography**: Body uses `{typography.body}`, column headers use `{typography.label}` with uppercase treatment
- **Shape**: Full-width container with no border radius
- **Spacing**: Generous internal padding, approximately 4rem vertical
- **Composition**: Four-column grid above rule, two-row bottom bar below

## Responsive behavior

The two-column content layout should collapse to a single column on narrower viewports, with the filter sidebar moving above the article grid or collapsing into an expandable drawer. The hero headline should reduce in size while maintaining its multi-line structure; the inline pills may wrap to a second line if necessary. The footer four-column grid should reflow to two columns on tablet widths and stack fully on mobile, preserving the brand description and navigation links in a logical reading order.

Article cards in the grid should transition from three columns to two columns at a medium breakpoint, then to a single column on the narrowest screens. Card thumbnails should maintain their aspect ratio throughout these transitions, with text content reflowing naturally within the card boundaries.

The header navigation, visible as text links in the supplied images, should collapse to a menu trigger on smaller screens. The circular wordmark should remain visible in all configurations, serving as a persistent home anchor.

## Practical implementation guidance

### Preserve
- The stark light-to-dark transition between body and footer; this inversion is central to the brand's spatial rhythm
- The inline pill placement within the hero headline; this creates a distinctive, conversational tone
- The consistent pill rounding across all tags, badges, and product identifiers
- The uppercase, tracked category labels in the filter sidebar
- The circular wordmark with its radial letter arrangement

### Avoid
- Adding background colors or gradients behind the hero; the white canvas is intentional
- Using the accent colors for general UI elements; reserve teal and purple for product identification
- Increasing the type scale beyond the five defined sizes; the system's restraint is part of its character
- Introducing shadow effects on cards; the flat border treatment is sufficient
- Using border-radius values other than the defined pill and card tokens

### Recommended build order
1. Establish the type system with Calibre at all five sizes, verifying web font loading and weight availability
2. Implement the color tokens, testing the light-to-dark footer transition early
3. Build the hero section with inline pill placement and responsive line breaking
4. Create the filter sidebar with tag clusters and dropdown selectors
5. Develop the article card component with thumbnail, title, metadata, and badge structure
6. Construct the footer with four-column grid, wordmark, and bottom bar
7. Implement responsive breakpoints for column collapse and type scaling

### Accessibility
- Ensure the teal and purple pills maintain minimum 4.5:1 contrast against their backgrounds; the dark ink pill already satisfies this
- Provide visible focus indicators on all pill-shaped interactive elements, as their fully rounded shape can obscure default browser outlines
- Consider adding `aria-label` to the circular wordmark, as its radial text arrangement may resist standard screen reader interpretation
- Maintain logical heading hierarchy: the hero headline should be the sole `h1`, with card titles as `h2` or `h3` depending on page context
- Ensure dropdown selectors are fully keyboard operable with clear expanded/collapsed state communication

## Scope note

This guide covers the homepage and footer surfaces visible in the supplied images. Interior pages, product-specific layouts, documentation templates, and mobile navigation patterns are not represented. Motion, hover states, loading indicators, and form validation styling are not documented. Measurements are practical adaptation targets derived from the visible interface.

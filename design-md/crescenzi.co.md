# How crescenzi.co is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/crescenzi.co-design)

Last updated: 2026-08-10

## Captured pages

[![Blog listing page with three-column card grid, category labels in uppercase monospace, and light gray canvas background](https://pin.fontofweb.com/2184?format=jpg)](https://design.withfudge.com/share/pin-2184)

[Blog listing page with three-column card grid, category labels in uppercase monospace, and light gray canvas background](https://design.withfudge.com/share/pin-2184)

[![Dark footer section with large taupe contact links featuring arrow icons, and black bottom bar with small text links](https://pin.fontofweb.com/2183?format=jpg)](https://design.withfudge.com/share/pin-2183)

[Dark footer section with large taupe contact links featuring arrow icons, and black bottom bar with small text links](https://design.withfudge.com/share/pin-2183)

[![Hero section with Bulward type specimen collage in taupe and white against near-black background with promotional text](https://pin.fontofweb.com/2182?format=jpg)](https://design.withfudge.com/share/pin-2182)

[Hero section with Bulward type specimen collage in taupe and white against near-black background with promotional text](https://design.withfudge.com/share/pin-2182)

[![Homepage hero with studio description, outlined pill button, and large red UFC Sans project card on dark charcoal ground](https://pin.fontofweb.com/2181?format=jpg)](https://design.withfudge.com/share/pin-2181)

[Homepage hero with studio description, outlined pill button, and large red UFC Sans project card on dark charcoal ground](https://design.withfudge.com/share/pin-2181)

## Overview

Crescenzi Co presents a design studio identity built on deliberate contrast: a restrained, almost monastic interface system that recedes to let typographic work command attention. The visual language operates in two modes—a light editorial canvas for reading and browsing, and a deep, immersive dark ground for portfolio presentation and brand impact. The studio's own work, particularly its type design and brand identity projects, becomes the primary color and energy within the frame. This is a system where hierarchy is established through scale and weight rather than ornament, where generous whitespace creates breathing room around dense typographic specimens, and where every interface element feels precision-tooled to avoid competing with the craft it showcases. The overall impression is of a confident practitioner who trusts the work to speak, using the website as a neutral but beautifully considered container.

## Colors

The palette is intentionally narrow, built from a near-black foundation, warm neutral tones, and a single high-saturation red reserved for project-specific impact. The system derives its visual interest from photography and typographic specimens rather than interface color complexity.

| token | value | use |
|---|---|---|
| ink | `#1A1A1A` | Primary text, dark section backgrounds, navigation on light ground |
| ink-secondary | `#000000` | Deepest footer bar, maximum contrast moments |
| canvas | `#F2F0EE` | Light page backgrounds, blog listing ground |
| surface | `#FFFFFF` | Card backgrounds, elevated panels on light canvas |
| accent | `#E10600` | Project-specific highlights, as seen in the UFC Sans specimen card |
| muted | `#A89888` | Secondary text, footer links, contact link color on dark ground, pill button borders |
| border | `#D4CFC9` | Subtle dividers, hairline rules between sections |

The dark mode dominates the homepage and portfolio presentation, with `#1A1A1A` serving as the primary ground. The light mode appears on the blog and editorial sections, using `#F2F0EE` as a warm alternative to pure white that reduces eye strain during extended reading. The red accent functions as a project-specific color rather than a persistent brand accent—it appears within work specimens but not as a recurring interface element. The warm taupe of the muted token creates an elegant, understated secondary layer that feels intentional rather than like a faded black.

## Typography

The type system pairs a clean, contemporary sans-serif for all interface and editorial text with a monospace family for metadata and labels. The display of custom type specimens and project work happens through imagery rather than live web fonts, preserving the integrity of the designs shown.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Figtree | 4rem | 300 | 1.1 | -0.02em | Large contact links, major section headers |
| section-display | Figtree | 2.5rem | 300 | 1.15 | -0.01em | Blog post titles, project names |
| body | Figtree | 1rem | 400 | 1.6 | 0em | Paragraph text, descriptions |
| body-large | Figtree | 1.25rem | 300 | 1.5 | 0em | Studio description, introductory paragraphs |
| label | Roboto Mono | 0.75rem | 400 | 1.4 | 0.08em | Category tags, metadata, uppercase labels |
| navigation | Figtree | 1rem | 400 | 1 | 0em | Primary navigation, header links |

Figtree, designed by Erik Kennedy, serves as the sole interface typeface across all weights and sizes. Its light weight at display sizes creates an elegant, open feel that avoids heaviness even at large scale. The monospace label style provides useful texture differentiation for metadata without introducing a third visual voice. Roboto Mono, attributed to Google, handles the functional labeling role. The Crescenzi Co Arrows family appears to be a custom icon font for directional indicators. Verify licensing for these families before production use.

## Layout

The layout system favors asymmetry and intentional imbalance rather than rigid grids. The homepage presents a split composition: the studio description and call-to-action occupy the upper right quadrant while the majority of the viewport remains open, creating dramatic negative space before the project work enters below. The blog listing uses a more conventional three-column grid for scanability, with consistent internal spacing and uniform card treatment.

Page margins are generous, approximately 4rem to 6rem on desktop, creating a sense of luxury and focus. Content never extends to the viewport edge except in full-bleed project imagery. The header maintains a fixed or persistent position with the studio wordmark left-aligned and navigation right-aligned, establishing a clear top-level hierarchy.

Vertical rhythm is established through section spacing of 6rem, with internal content gaps of 2rem. The blog grid uses 1.5rem gaps between cards, tight enough to read as a unified collection while maintaining individual card separation. Horizontal rules appear as hairline dividers in `#D4CFC9` between major sections, particularly visible in the footer transition.

The project presentation area on the homepage breaks the asymmetrical pattern with a centered or near-centered large-format card that dominates the lower viewport, suggesting that individual work pieces receive heroic treatment.

## Visual language

The visual character is defined by restraint and precision. Interface elements are reduced to their essential forms: rectangles with zero border radius for cards and panels, pill shapes only for discrete call-to-action buttons. There are no drop shadows, no gradients, no glassmorphism effects. Depth is suggested solely through color value shifts between the dark ground and lighter content surfaces.

Imagery and typographic specimens function as the primary visual energy. The Bulward specimen collage demonstrates how the system handles complex, layered graphic work—multiple type treatments, badges, and dimensional elements coexist within a controlled frame. The UFC Sans card shows how a single bold color field can anchor a project presentation against the dark ground.

Arrow indicators appear as custom glyphs, likely from the Crescenzi Co Arrows family, used consistently for external links and directional cues. These are rendered in the muted taupe rather than the primary ink, keeping them functional but subordinate.

The overall material quality is flat and digital, with no texture or simulated physical properties. This flatness is intentional, creating a neutral ground that reads as contemporary and craft-focused rather than trendy or decorative.

## Components

### Primary Navigation

- **Anatomy**: Left-aligned wordmark "Crescenzi__Co" with right-aligned text links: Studio, Work, Fonts, Blog
- **Surface**: Transparent background over both light and dark sections
- **Typography**: `{typography.navigation}` in `{colors.ink}` on light ground, implied inversion on dark
- **Spacing**: Full-width header with generous horizontal padding, approximately 4rem

### Project Card

- **Anatomy**: Full-bleed image or specimen, optional text overlay, category and title below
- **Surface**: `{colors.surface}` background on light ground, image-direct on dark ground
- **Typography**: `{typography.section-display}` for title, `{typography.label}` for category
- **Shape**: `{rounded.card}`—sharp corners, no radius
- **Spacing**: Internal padding approximately 1.5rem, external grid gap `{spacing.grid-gap}`

### Category Label

- **Anatomy**: Uppercase text with dot separators between multiple categories
- **Typography**: `{typography.label}` in `{colors.muted}`
- **Composition**: Horizontal row, left-aligned within card context

### Contact Link

- **Anatomy**: Large text with trailing arrow glyph, stacked vertically
- **Typography**: `{typography.hero-display}` in `{colors.muted}`
- **Surface**: `{colors.ink}` background section
- **Shape**: Full-width row with hover state implied by interactive convention
- **Composition**: Left-aligned stack with generous vertical spacing between items

### Pill Button

- **Anatomy**: Text label within rounded border container
- **Surface**: Transparent background, `{colors.muted}` border at 1px
- **Typography**: `{typography.body}` in `{colors.muted}`
- **Shape**: `{rounded.pill}`—full capsule shape
- **Spacing**: Horizontal padding approximately 1.5rem, vertical padding approximately 0.75rem

### Footer Bar

- **Anatomy**: Three-column layout with contact info, navigation links, and copyright
- **Surface**: `{colors.ink-secondary}` background
- **Typography**: `{typography.body}` in `{colors.muted}`
- **Spacing**: Generous vertical padding, approximately 3rem, with horizontal rule separator above

## Responsive behavior

The three-column blog grid should collapse to a single column on narrow viewports, with cards stacking vertically and maintaining full-width image treatment. The asymmetric homepage layout requires rethinking for mobile: the studio description should move above the project card, and the large contact links in the footer should reduce in scale to prevent overflow. Navigation may require a collapsed menu treatment at smaller breakpoints, though no mobile pattern is visible in the supplied material. The generous desktop margins should compress to approximately 1.5rem on mobile to preserve content proportion. Project cards should remain full-bleed on all viewport widths to maximize specimen legibility.

## Practical implementation guidance

### Preserve
- The stark contrast between dark presentation sections and light editorial sections
- The zero-border-radius treatment for all cards and primary containers
- The single sans-serif family for all interface typography
- The uppercase monospace label style for metadata and categories
- The generous whitespace that creates a gallery-like presentation quality

### Avoid
- Adding decorative shadows, gradients, or glass effects that contradict the flat material language
- Introducing additional accent colors beyond the project-specific red
- Rounding corners on project cards or image containers
- Using the light weight of Figtree at small sizes where legibility suffers
- Crowding the asymmetric homepage layout with additional elements

### Recommended Build Order
1. Establish the dark ground (`#1A1A1A`) and light ground (`#F2F0EE`) as foundational page modes
2. Implement Figtree at all type sizes with proper weight distribution
3. Build the header navigation with transparent background behavior
4. Create the project card component with sharp corners and consistent internal spacing
5. Develop the blog grid with three-column layout and monospace category labels
6. Add the footer with its distinct black bar and muted text treatment
7. Implement the pill button as the sole rounded element in the system

### Accessibility
- Ensure all text on the dark ground meets WCAG AA contrast ratios; the muted taupe (`#A89888`) on `#1A1A1A` should be verified for large text compliance
- Provide focus indicators for the minimal interface elements, particularly the transparent pill button
- Maintain logical heading hierarchy through the asymmetric layouts
- Consider reduced-motion preferences for any scroll-triggered reveals of project work

## Scope note

This guide covers the homepage, blog listing, and footer surfaces visible in the supplied images. Interior project pages, mobile breakpoints, hover and focus states, and the complete type specimen interactions are not represented. Measurements are practical adaptation targets derived from visual analysis of the desktop presentation.

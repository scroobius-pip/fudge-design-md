# How research.perplexity.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/research.perplexity.ai-design)

Last updated: 2026-08-10

## Captured pages

[![Article hero with large serif headline, abstract dark 3D render, and warm off-white canvas background](https://pin.fontofweb.com/9495?format=jpg)](https://design.withfudge.com/share/pin-9495)

[Article hero with large serif headline, abstract dark 3D render, and warm off-white canvas background](https://design.withfudge.com/share/pin-9495)

[![Article index with paired imagery, category labels, and a pill-shaped Load More button above a careers section](https://pin.fontofweb.com/7990?format=jpg)](https://design.withfudge.com/share/pin-7990)

[Article index with paired imagery, category labels, and a pill-shaped Load More button above a careers section](https://design.withfudge.com/share/pin-7990)

## Overview

Perplexity Research presents a scholarly editorial experience that balances technical authority with refined visual restraint. The system centers on warm, paper-like off-white backgrounds that evoke academic journals and printed manuscripts, while dark near-black typography provides uncompromising readability. The design language draws from two distinct typographic traditions: a dramatic, tightly-tracked serif for editorial voice, and a precise monospace for metadata, labels, and technical annotations. Cinematic abstract imagery—rendered in deep blacks, emeralds, and electric blues—serves as the primary visual accent, creating tension against the light canvas without overwhelming the reading experience. The overall impression is of a research institution that values clarity, craft, and intellectual depth: every element is considered, nothing is decorative without purpose, and the hierarchy between editorial content and supporting information is immediately legible.

## Colors

The palette is intentionally narrow, built around a warm paper canvas and deep ink tones with a single functional accent. This restraint allows the cinematic imagery to carry chromatic interest while maintaining typographic authority.

| token | value | use |
|---|---|---|
| ink | #091717 | Primary headings, body text, logo mark, dominant editorial voice |
| ink-secondary | #2E565E | Secondary text, descriptions, metadata, subdued hierarchy |
| muted | #64645F | Tertiary labels, captions, timestamps, category tags |
| canvas | #F6F5EE | Primary page background, article surfaces, card interiors |
| canvas-warm | #FBFAF4 | Alternate section backgrounds, careers area, subtle spatial division |
| action | #0000EE | Navigation links, interactive text, hiring call-to-action |

The warm canvas tones create an immediate material quality distinct from sterile white screens. The near-black ink carries a subtle green undertone that harmonizes with the emerald and teal frequencies in the abstract imagery. The action blue appears sparingly, reserved for navigation and hiring links where it must compete against dark text for attention. No dark mode is visible in the supplied surfaces; the system operates entirely in this light, warm register. Image palettes extracted from the photography contain deep blacks, saturated teals, and occasional warm amber highlights, but these remain properties of the artwork rather than interface tokens.

## Typography

Four type families establish the editorial voice: a dramatic variable serif for display and body, a clean monospace for technical metadata, system sans-serif for navigation utility, and the specific Gt Canon Vf-L Black instance for the heaviest editorial moments.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Gt Canon Vf | 3.5rem | 900 | 1.05 | -0.02em | Article headlines, major page titles |
| section-display | Gt Canon Vf | 2rem | 900 | 1.3 | 0em | Section headings, careers titles |
| body-large | Gt Canon Vf | 1.125rem | 900 | 1.5 | 0em | Lead paragraphs, prominent descriptions |
| body | Gt Canon Vf | 1rem | 900 | 1.5 | -0.01em | Standard paragraphs, card descriptions |
| body-small | Gt Canon Vf | 0.8125rem | 900 | 1.5 | -0.01em | Compact descriptions, tight spaces |
| label | Gt Mono | 0.75rem | 400 | 1.5 | 0.03em | Category tags, timestamps, metadata labels |
| navigation | System-Sansserif | 0.75rem | 400 | 1.0 | 0em | Site navigation, utility links |
| mono-body | Berkeley Mono | 0.875rem | 400 | 1.2 | 0em | Technical annotations, code references |

Gt Canon Vf, designed by Grilli Type, carries all editorial weight at 900 Black. Its tight tracking on display sizes creates a distinctive scholarly density, while the variable axis allows precise optical sizing. The Gt Canon Vf-L Black instance represents the specific loaded weight used for the heaviest display settings. Gt Mono, also by Grilli Type, provides the technical counterpoint with slightly expanded letterspacing for legibility at small sizes. Berkeley Mono, designed by Neil Panchal and available from Berkeley Graphics, appears for specialized technical contexts. System-Sansserif handles navigation at 12px where neutrality and screen rendering efficiency matter. Verify licensing for these families before production use.

## Layout

The layout follows a centered editorial column with generous margins, creating a reading experience closer to a printed journal than a conventional web application.

The article page establishes a clear hierarchy: a fixed navigation bar spans the full width, followed by a centered content column that holds the headline, metadata, hero imagery, and body text. The headline occupies approximately two-thirds of the column width, breaking across lines with deliberate phrase grouping. Below the headline, a narrow rule line separates the title area from the publication date, which sits right-aligned in monospace. The hero image breaks out to full column width with rounded corners, creating a dramatic visual interruption before the body text resumes in a narrower measure.

The index page uses an asymmetric two-column grid for article listings: imagery occupies the left portion while titles, categories, and descriptions align to the right. This creates a rhythmic alternation between visual and textual information. Category labels and dates sit on a shared baseline with a thin horizontal rule, establishing a consistent scanning pattern across entries.

Spacing follows a 2px base unit, with semantic steps at 8px, 12px, 16px, 32px, 64px, and 96px. Section breaks use the larger values to create clear cognitive rest between content areas. The careers section receives distinct background treatment with canvas-warm, separated by ample vertical space from the article index above.

## Visual language

The visual language derives from the tension between archival materiality and computational abstraction. The warm paper backgrounds reference physical research documents, while the imagery—dark, layered, and luminous—suggests neural networks, data flows, and emergent systems.

Imagery treatment is consistent: full-bleed within rounded containers, no borders, no overlays, no text embedded within images. The photographs and renders stand alone as visual statements, separated from typography by clear spatial margins. The rounded corners on images (6px) are modest, preventing the clinical sharpness of unrounded rectangles without becoming decorative.

The logo mark combines a geometric icon with "PERPLEXITY RESEARCH" in uppercase sans-serif, establishing institutional identity without competing with editorial headlines. Navigation remains minimal: a hiring link in action blue, the logo as home anchor, no visible search or menu proliferation.

Rules and dividers appear as single-pixel horizontal lines in muted or ink tones, serving as subtle structural elements rather than decorative borders. The overall density is restrained: ample whitespace, measured line lengths, and a clear single-column reading path prevent cognitive overload despite the visual complexity of the imagery.

## Components

### Site header

- **Anatomy**: Fixed-position bar containing logo mark left, hiring link right
- **Surface**: Transparent or canvas background, no border, no shadow
- **Typography**: Navigation token, 12px system sans-serif
- **Spacing**: Compact vertical padding, standard horizontal margins
- **Composition**: Flex row, space-between alignment, vertically centered

### Article hero

- **Anatomy**: Publication date rule, headline, description, hero image
- **Surface**: Canvas background
- **Typography**: Hero-display for headline, body-large for description, label for date
- **Shape**: Hero image uses card radius (6px)
- **Spacing**: Generous top padding, relaxed gap between headline and image, standard gap between image and body
- **Composition**: Centered column, headline left-aligned, date right-aligned on rule

### Article card (index)

- **Anatomy**: Thumbnail image, title, category label, date, description
- **Surface**: Canvas background, no visible card border or shadow
- **Typography**: Section-display for title, label for category and date, body for description
- **Shape**: Thumbnail uses card radius (6px)
- **Spacing**: Standard gap between image and text, compact gap between metadata elements
- **Composition**: Two-column grid, image left, text right, baseline-aligned metadata row

### Load more button

- **Anatomy**: Text label within bordered pill
- **Surface**: Canvas background, ink-secondary border
- **Typography**: Label token, Gt Mono
- **Shape**: Full pill radius (60px / 3.75rem)
- **Spacing**: Compact horizontal padding, tight vertical padding
- **Composition**: Centered below article list, isolated by relaxed vertical margins

### Careers section

- **Anatomy**: Section heading, descriptive text, featured roles area
- **Surface**: Canvas-warm background, distinct from main canvas
- **Typography**: Section-display for heading, body for description
- **Spacing**: Generous section padding, relaxed internal gaps
- **Composition**: Left-aligned heading, two-column text layout below

## Responsive behavior

The supplied surfaces show desktop presentation only. Based on the visible structure, recommended responsive adaptations include: reducing hero-display from 3.5rem to approximately 2.5rem on intermediate viewports and 2rem on narrow screens; stacking the article card two-column grid to single column with image above text; maintaining the centered editorial column but increasing side margins proportionally; and ensuring the publication date rule remains visible but may shift to left-aligned below the headline. The monospace label sizes should remain fixed at 12px to preserve technical legibility. Touch targets for navigation and the load more button should maintain minimum 44px height.

## Practical implementation guidance

### Preserve
- The warm paper canvas against near-black ink; this contrast defines the scholarly character
- The strict typographic hierarchy: one serif weight (900 Black) for all editorial, one monospace for metadata
- The generous whitespace around hero imagery; do not crowd the cinematic visuals
- The subtle 6px radius on images; it softens without ornament
- The right-aligned date on a thin rule; this is a distinctive editorial signature

### Avoid
- Introducing additional font weights or families; the restraint is intentional
- Adding borders, shadows, or backgrounds to article cards; the whitespace is the container
- Using the action blue for non-interactive text; reserve it for links and hiring
- Cropping or overlaying imagery with text; keep visual and textual layers separate
- Generic card elevations or material design shadows; the surface is flat and paper-like

### Recommended build order
1. Establish the canvas and ink color tokens with the warm off-white base
2. Implement Gt Canon Vf at 900 Black for all display and body sizes
3. Add Gt Mono for labels and Berkeley Mono for technical annotations
4. Build the centered editorial column with responsive max-width
5. Create the article hero with rule, date alignment, and image container
6. Implement the article card grid with baseline-aligned metadata
7. Add the pill-shaped load more button with monospace label
8. Polish spacing with the 2px base unit and semantic steps

### Accessibility
- Ensure the near-black ink on warm canvas meets WCAG AAA contrast ratios; the combination appears to exceed 7:1
- Maintain the monospace label sizes no smaller than 12px to prevent illegibility
- Provide visible focus states for the action blue links, likely an underline or outline offset
- Preserve semantic heading hierarchy: one h1 per article, section headings as h2 or h3
- Consider reduced motion preferences for any scroll-triggered image reveals

## Scope note

This guide covers the article page and article index surfaces visible in the supplied images. Mobile breakpoints, hover states, form interactions, search functionality, and the complete careers application flow are not represented. The dark abstract imagery palette is described for visual context but should not be used as interface color tokens. Gt Canon Vf-L Black is named as the specific heavy weight instance in the type system.

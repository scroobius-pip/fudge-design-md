# How firehose.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/firehose.com-design)

Last updated: 2026-08-10

## Captured pages

[![Dark hero section with centered serif headline, pill-shaped CTA buttons, and abstract red-orange blob decorations in corners](https://pin.fontofweb.com/10675?format=jpg)](https://design.withfudge.com/share/pin-10675)

[Dark hero section with centered serif headline, pill-shaped CTA buttons, and abstract red-orange blob decorations in corners](https://design.withfudge.com/share/pin-10675)

[![Dark feature section with three-column layout showing human, code, and agent use cases with red accent labels and central abstract shape](https://pin.fontofweb.com/10674?format=jpg)](https://design.withfudge.com/share/pin-10674)

[Dark feature section with three-column layout showing human, code, and agent use cases with red accent labels and central abstract shape](https://design.withfudge.com/share/pin-10674)

[![Light feature section with search query card, results list with red indicators, and serif heading on gray background with red blob accents](https://pin.fontofweb.com/10673?format=jpg)](https://design.withfudge.com/share/pin-10673)

[Light feature section with search query card, results list with red indicators, and serif heading on gray background with red blob accents](https://design.withfudge.com/share/pin-10673)

## Overview

Firehose presents a dark-mode-first visual identity built around dramatic contrast and confident simplicity. The design pairs a near-black canvas with warm off-white typography, using IBM Plex Serif for display headlines that carry editorial authority and IBM Plex Sans for all interface and body text. A vivid red-orange accent color punctuates the experience—appearing in abstract blob decorations, category labels, and interactive highlights. The layout favors generous whitespace, centered compositions, and rounded pill shapes that soften the technical subject matter of web monitoring and API tooling. Every section maintains a deliberate hierarchy: large serif statements establish purpose, compact sans-serif body copy explains value, and pill-shaped buttons invite conversion without visual heaviness.

## Colors

The palette operates in two modes: a dominant dark theme for marketing impact and a light theme for specific feature demonstrations. Both share the same accent and core neutral values.

| token | value | use |
|---|---|---|
| canvas | #1C1E21 | Primary page background, hero sections, feature cards |
| surface | #E7E8EA | Light section backgrounds, search interface backdrop |
| surface-elevated | #F6F7F7 | Card surfaces on light backgrounds, primary button fill |
| ink | #F6F7F7 | Primary text on dark backgrounds, headings on dark |
| ink-secondary | #BDC1C6 | Body text on dark backgrounds, muted descriptions |
| ink-dark | #1C1E21 | Primary text on light backgrounds, button labels |
| ink-dark-secondary | #8A8F98 | Secondary text on light backgrounds, metadata |
| accent | #FF4A2F | Category labels, decorative blobs, active indicators |
| border-light | #F6F7F7 | Subtle dividers on dark surfaces, button borders |

The dark canvas dominates the marketing experience, creating a premium, technical atmosphere. Light surfaces appear selectively—such as in the search demonstration card—where the design needs to simulate a software interface. The accent red-orange is reserved for moments of emphasis: small category labels, dot indicators in result lists, and the abstract organic shapes that frame compositions. This disciplined application prevents the vivid hue from overwhelming the restrained typographic system.

## Typography

The type system pairs three IBM Plex families with platform-native UI fallbacks. Serif display text provides editorial distinction; sans-serif handles all functional and body copy; monospace appears for code demonstrations.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | IBM Plex Serif | 2.625rem | 500 | 1.21 | -0.031em | Hero headlines, major section titles |
| section-display | IBM Plex Serif | 1.5rem | 500 | 1.21 | -0.029em | Feature headings, card titles |
| body-large | IBM Plex Sans | 1.25rem | 400 | 1.5 | 0em | Hero descriptions, introductory paragraphs |
| body | IBM Plex Sans | 1rem | 400 | 1.625 | 0em | Standard body copy, feature descriptions |
| body-small | IBM Plex Sans | 0.875rem | 400 | 1.43 | 0em | Metadata, timestamps, secondary details |
| ui | IBM Plex Sans | 1rem | 600 | 1.375 | 0em | Navigation, buttons, labels |
| ui-small | -apple-system | 0.6875rem | 600 | 1 | 0em | Badges, compact labels |
| code | IBM Plex Mono | 1.5rem | 400 | 1.3 | -0.042em | Code examples, syntax display |

Verify licensing for these families before production use.

The display sizes use tight negative tracking that gives headlines a refined, magazine-like density. Body sizes are spaciously leaded for readability on dark backgrounds. The ui-small token, rendered in the platform sans-serif stack, appears at a compact size for navigation badges and category indicators.

## Layout

The page follows a stacked-section architecture with full-width bands and contained interior content. The maximum content width centers at approximately 82.5rem with symmetric auto margins. Sections alternate between dark canvas and light surface backgrounds, creating clear visual territories without heavy dividers.

The hero section occupies the full viewport height with centered content: a large serif headline, supporting body-large description, and paired pill buttons. Navigation sits in a floating bar at the top, blending into the dark canvas with subtle transparency.

Feature sections use asymmetric compositions. The "Watch it, build on it, or automate it" section places three text blocks around a central decorative shape, with each block anchored by a small accent-colored category label. The search demonstration reverses this logic: a large card occupies the left portion of the frame while explanatory text sits right-aligned with a vertical accent indicator.

Spacing between sections is generous, typically 6rem to 8.75rem, allowing each message to breathe. Internal card padding ranges from 1.5rem for compact elements to 2.5rem for major feature containers.

## Visual language

The visual identity balances technical precision with organic warmth. Abstract blob shapes in accent red-orange float at the edges of dark sections, softening the otherwise austere palette. These shapes are blurred and partially cropped, suggesting motion and depth without literal animation.

Surface treatments are flat and matte. The dark canvas shows no gradient or texture; light sections use solid fills without shadows. Elevation is communicated through background color change rather than drop shadows, maintaining the clean, modernist aesthetic.

Pill shapes dominate the interactive vocabulary. Buttons, navigation items, and category badges all use full rounding. Cards use substantial but not excessive corner radius, creating friendly containers that contrast with the sharp rectangularity of the overall layout grid.

The accent color appears in three modes: as large decorative blobs, as small text labels, and as dot indicators in lists. This tiered application creates visual rhythm—large shapes attract attention from distance, small labels guide reading flow, and dots provide functional status indication.

## Components

### Navigation bar

- **Anatomy**: Logo mark and wordmark left-aligned; link group center-right; pill CTA button far right
- **Surface**: Transparent background over dark canvas, slight backdrop blur
- **Typography**: Navigation links use body-small at regular weight; CTA uses ui token
- **Shape**: Full-width bar with internal pill-shaped container for links and CTA
- **Spacing**: Compact horizontal padding, tight gap between navigation items
- **Composition**: Horizontal flex with space-between alignment

### Hero section

- **Anatomy**: Centered text stack with headline, description, and button pair
- **Surface**: Full-bleed dark canvas with decorative accent blobs in corners
- **Typography**: hero-display for headline, body-large for description
- **Shape**: No containing card; text sits directly on canvas
- **Spacing**: Generous vertical padding creating centered composition
- **Composition**: Single-column centered alignment

### Feature card (dark)

- **Anatomy**: Large rounded container with centered headline and distributed content blocks
- **Surface**: Dark canvas background with lighter interior or direct canvas fill
- **Typography**: section-display for block headings, body for descriptions
- **Shape**: 2rem border radius
- **Spacing**: 6rem vertical padding, 2.5rem horizontal padding
- **Composition**: Three-column asymmetric layout with central decorative element

### Search demonstration card

- **Anatomy**: Query input area at top, scrollable results list below
- **Surface**: surface-elevated background on light section
- **Typography**: code for query display, body-small for result metadata
- **Shape**: 2rem border radius for container, smaller radius for individual results
- **Spacing**: 2.5rem internal padding
- **Composition**: Vertical stack with left-aligned content

### Result list item

- **Anatomy**: Accent dot indicator, title, source URL, timestamp, and progress bar
- **Surface**: Transparent or subtle elevated surface
- **Typography**: body-small for titles and metadata
- **Shape**: Minimal rounding
- **Spacing**: Compact vertical padding with comfortable horizontal padding
- **Composition**: Horizontal flex with dot, text stack, and trailing metadata

### Primary button

- **Anatomy**: Text label only, no icon
- **Surface**: surface-elevated background
- **Typography**: ui token in ink-dark color
- **Shape**: 999px border radius (full pill)
- **Spacing**: 1.5rem vertical padding, 2.5rem horizontal padding
- **Composition**: Inline-flex centered content

### Secondary button

- **Anatomy**: Text label with subtle border
- **Surface**: Transparent background
- **Typography**: ui token in ink color
- **Shape**: 999px border radius with 1px border-light stroke
- **Spacing**: Matches primary button
- **Composition**: Paired with primary button with modest gap

## Responsive behavior

The design appears optimized for desktop viewport widths. The three-column feature layout and side-by-side search demonstration would require adaptation for narrower screens. At reduced widths, the feature blocks should stack vertically, maintaining their internal text hierarchy. The search card would shift to full-width above its descriptive text. Navigation links should collapse to a menu affordance. The generous section spacing can compress proportionally—target 4rem vertical padding on tablets and 3rem on mobile. Pill buttons should remain fully rounded at all sizes, with padding scaling down to 1rem vertical and 1.5rem horizontal on small screens.

## Practical implementation guidance

### Preserve
- The stark dark-canvas-to-light-surface contrast that defines the brand
- The serif-sans pairing: IBM Plex Serif for headlines, IBM Plex Sans for everything functional
- Full pill rounding on all interactive elements
- The restrained accent application: red-orange for labels, dots, and decorative shapes only
- Generous whitespace between sections and around content blocks

### Avoid
- Adding drop shadows to cards or buttons; the design relies on flat color contrast
- Using the accent color for large text blocks or backgrounds
- Introducing additional font families beyond the IBM Plex trio
- Sharp-cornered buttons or inputs that break the pill vocabulary
- Crowding the navigation bar with too many links

### Recommended build order
1. Establish the dark canvas background and load IBM Plex Serif, Sans, and Mono
2. Build the navigation bar with transparent background and pill CTA
3. Create the hero section with centered serif headline and paired buttons
4. Implement the feature card with three-column layout and decorative blobs
5. Add the search demonstration with light surface card and result list
6. Polish spacing, corner radius, and responsive stacking behavior

### Accessibility
- Ensure the accent red-orange against dark canvas meets minimum contrast ratios for non-text elements
- Verify that ink-secondary (#BDC1C6) on canvas (#1C1E21) meets WCAG AA for body text
- Provide focus indicators that respect the pill shape, such as an outline offset or inner ring
- Maintain semantic heading hierarchy: hero-display as h1, section-display as h2
- Ensure the code token renders at a size that remains legible for users with low vision

## Scope note

This guide covers the Firehose marketing landing page as captured: hero section, feature explanation blocks, search demonstration, and footer. Pricing pages, documentation, authenticated dashboard interfaces, and mobile-specific layouts are not represented. Motion behavior for the decorative blobs and any interactive hover states were not captured in still images. Measurements are derived from the supplied design facts and rounded to practical implementation targets.

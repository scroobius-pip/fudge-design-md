# How groq.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/groq.com-design)

Last updated: 2026-08-10

## Captured pages

[![Footer with Groq logo, multi-column link groups, and social icons on warm off-white background](https://pin.fontofweb.com/9482?format=jpg)](https://design.withfudge.com/share/pin-9482)

[Footer with Groq logo, multi-column link groups, and social icons on warm off-white background](https://design.withfudge.com/share/pin-9482)

[![Pricing page section with Built-In Tools table and About Our Pricing card with orange CTA](https://pin.fontofweb.com/9481?format=jpg)](https://design.withfudge.com/share/pin-9481)

[Pricing page section with Built-In Tools table and About Our Pricing card with orange CTA](https://design.withfudge.com/share/pin-9481)

[![Pricing page hero with Unmatched Price Performance heading and Large Language Models data table](https://pin.fontofweb.com/9480?format=jpg)](https://design.withfudge.com/share/pin-9480)

[Pricing page hero with Unmatched Price Performance heading and Large Language Models data table](https://design.withfudge.com/share/pin-9480)

[![Homepage dark card featuring Groq chip photography with orange accent and partner logo strip](https://pin.fontofweb.com/9479?format=jpg)](https://design.withfudge.com/share/pin-9479)

[Homepage dark card featuring Groq chip photography with orange accent and partner logo strip](https://design.withfudge.com/share/pin-9479)

## Overview

Groq's visual identity balances technical credibility with approachable warmth. The system centers on a warm off-white canvas that avoids sterile clinical whites, paired with a bold orange accent that signals energy and speed. Typography splits duties between Space Grotesk—a geometric sans with slight quirks that feels engineered yet human—and IBM Plex Mono, which handles data labels, technical specifications, and small uppercase annotations. The result is a reading experience that feels precise without being cold, suitable for both marketing narratives and dense pricing tables. Dark surfaces appear selectively for high-impact moments like hardware photography, creating dramatic contrast against the predominantly light environment.

## Colors

| token | value | use |
|---|---|---|
| action | #F43E01 | Primary buttons, CTAs, accent text, icon highlights |
| ink | #2D2F33 | Primary text, headings, navigation, footer links |
| muted-ink | #69695D | Secondary text, descriptions, table metadata |
| canvas | #F3F3EE | Page background, footer background |
| surface | #FFFFFF | Cards, panels, content containers on dark sections |
| surface-warm | #E8E8DE | Subtle section backgrounds, dividers |
| border | #CECEBF | Table row dividers, subtle separators |
| dark-surface | #000000 | Hero cards, hardware showcase backgrounds |

The palette operates in two modes. Light mode dominates: warm off-white canvas with near-black ink text and orange action elements. Dark mode appears intentionally for product photography and dramatic statements, where white text and orange accents float on pure black. The orange (#F43E01) is saturated and warm, functioning as the sole accent—no secondary accent colors compete for attention. Muted ink serves a crucial role in data-dense contexts like pricing tables, de-emphasizing secondary information without losing readability. Borders are warm and desaturated, avoiding harsh gray lines.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Space Grotesk | 2.875rem | 300 | 1.3 | -0.0575em | Page titles, major section headings |
| section-display | Space Grotesk | 2rem | 300 | 1.3 | -0.04em | Card headings, subsection titles |
| body | Space Grotesk | 0.9375rem | 400 | 1.4 | 0 | Paragraphs, navigation, general content |
| body-large | Space Grotesk | 1.5rem | 400 | 1.3 | -0.02em | Lead paragraphs, emphasized descriptions |
| body-small | Space Grotesk | 0.875rem | 400 | 1.571 | 0 | Footer links, compact text |
| label | IBM Plex Mono | 0.75rem | 500 | 1.3 | 0.1em | Uppercase section labels, table headers |
| data | IBM Plex Mono | 1rem | 500 | 1.3 | 0 | Technical values, specifications, code |
| navigation | Space Grotesk | 0.9375rem | 400 | 1.3 | 0 | Header navigation items |

Space Grotesk carries the voice: geometric construction with humanist warmth, visible in distinctive letterforms like the lowercase 'g' and 'q'. It renders display text at light weight (300) with tight negative tracking for headlines, shifting to regular weight (400) for body content. IBM Plex Mono, designed by Mike Abbink, Paul Van Der Laan, and Pieter Van Rosmalen of Bold Monday, provides the technical layer—monospace rhythm for data tables and uppercase labels with wide tracking for section markers. Florian Karsten's Space Grotesk completes the pairing. Verify licensing for these families before production use.

## Layout

The layout system relies on generous horizontal margins and vertical breathing room. Content centers within a max-width container with substantial side margins—approximately 16.25rem on desktop—creating a focused reading column that feels premium rather than cramped. Sections stack with significant vertical padding, typically 5rem to 7.5rem, establishing clear hierarchy through whitespace rather than heavy dividers.

The grid adapts to content type. Marketing narratives use asymmetric two-column layouts with headings left and descriptions right. Data tables span full width with generous cell padding. Cards appear as contained white surfaces with rounded corners, floating on the warm canvas. The header remains minimal: logo centered, navigation split left and right, with a prominent orange pill button anchoring the right side.

Spacing follows a 2px base unit. Key increments include 0.5rem for tight internal gaps, 1rem for comfortable element spacing, 2rem for generous internal padding, 3rem for content section gaps, and 7.5rem for major section breaks. This restrained scale prevents visual fragmentation while allowing precise control.

## Visual language

Photography and product imagery receive premium treatment. Hardware shots appear on dark surfaces with subtle depth, letting metallic textures and product details emerge. The Groq chip photograph exemplifies this: centered on black, with minimal surrounding chrome, allowing the silicon to command attention. Orange accents appear as small icons or button surfaces, never overwhelming the composition.

Iconography is minimal and functional. Small geometric marks indicate external links or section types. Social icons in the footer use simple filled shapes at uniform size. The lightning bolt icon appears as a brand signature, small and precise.

Motion and interactivity are implied through button states: solid orange fills with white text for primary actions, outlined pills for secondary choices. The pill shape (62.5rem radius) is the dominant button language, appearing across CTAs from "Start Building" to "Try Now" to "Learn More." This consistency makes interactive elements instantly recognizable regardless of context.

## Components

### Primary button

- **Anatomy**: Text label centered within a pill-shaped container
- **Surface**: Solid action orange (#F43E01) background
- **Typography**: body token, white text (#FFFFFF)
- **Shape**: Full pill radius (62.5rem)
- **Spacing**: 0.625rem vertical padding, 1rem horizontal padding
- **Composition**: Inline or centered within sections
- **Variants**: Header variant uses smaller padding; dark card variant maintains same orange fill against black background

### Secondary button

- **Anatomy**: Text label within pill outline
- **Surface**: Transparent background with border
- **Typography**: body token, ink or white text depending on context
- **Shape**: Full pill radius (62.5rem)
- **Spacing**: Similar padding to primary
- **Composition**: Appears alongside primary buttons or in table rows

### Data table

- **Anatomy**: Column headers in uppercase label style, rows of data values
- **Surface**: Transparent on canvas background
- **Typography**: label token for headers, data token for technical values, body for descriptions
- **Shape**: No outer border; horizontal border lines between rows using border color (#CECEBF)
- **Spacing**: Generous row height with comfortable cell padding
- **Composition**: Full-width within content container; action buttons aligned right

### Content card

- **Anatomy**: Heading, body text, optional CTA button
- **Surface**: White (#FFFFFF) background
- **Typography**: section-display for heading, body for description
- **Shape**: 0.625rem corner radius
- **Spacing**: Substantial internal padding (approximately 5rem)
- **Composition**: Asymmetric two-column layout with heading left, content right; or centered single column

### Footer

- **Anatomy**: Logo, multi-column link groups, legal line, social icons
- **Surface**: Canvas background (#F3F3EE)
- **Typography**: body-small for links, label token for column headers
- **Shape**: No border or radius
- **Spacing**: Generous top padding, compact link spacing within columns
- **Composition**: Logo left-aligned, link columns distributed right, legal and social icons at bottom edge

### Header navigation

- **Anatomy**: Logo center, dropdown navigation left and right, CTA button far right
- **Surface**: Transparent or canvas background
- **Typography**: navigation token
- **Shape**: No visible container; dropdown triggers indicated by small chevron icons
- **Spacing**: Comfortable horizontal gaps between items
- **Composition**: Fixed or sticky top position

## Responsive behavior

The substantial desktop margins (16.25rem) should compress on smaller viewports. At tablet widths, reduce to approximately 3rem side margins. At mobile, content should reach near-full width with 1.5rem margins, stacking asymmetric layouts into single columns.

Data tables require horizontal scroll or reflow on narrow viewports. Consider collapsing model specification tables into card-based layouts where each row becomes a stacked information unit with primary action exposed.

Typography scales down modestly: hero-display reduces to approximately 2rem on mobile, maintaining weight and tracking relationships. The two-column content card should stack vertically, preserving the heading-above-content order.

Navigation collapses to a hamburger menu or simplified list, with the "Start Building" CTA remaining visible as a persistent action.

## Practical implementation guidance

### Preserve
- The warm off-white canvas as the default background; avoid pure white page backgrounds
- The single orange accent discipline; do not introduce additional accent colors
- The Space Grotesk light weight for display headings with negative tracking
- IBM Plex Mono exclusively for technical data and uppercase labels
- Pill-shaped buttons as the sole button shape language
- Generous whitespace between sections; resist compressing vertical rhythm

### Avoid
- Heavy drop shadows or elevation effects; the system relies on flat color contrast
- Multiple accent colors competing with orange
- Pure black text on pure white backgrounds; use the warm ink and canvas pairing
- Rounded corners larger than 0.625rem for cards; keep pills strictly circular-ended
- Body text in monospace; reserve IBM Plex Mono for labels and data

### Recommended build order
1. Establish the canvas background and ink text colors globally
2. Implement Space Grotesk with weight 300 for headings and 400 for body
3. Add IBM Plex Mono at 12px uppercase for labels and 16px for data
4. Build the pill button component with orange fill and white text
5. Create the content card with white surface and asymmetric two-column layout
6. Implement the data table with border-row separators
7. Add the header navigation with centered logo and split navigation
8. Polish with spacing tokens and responsive margin compression

### Accessibility
- Ensure orange action elements meet contrast requirements against both white and black backgrounds; the #F43E01 orange may need adjustment for small text
- Maintain the warm off-white canvas for reduced eye strain during extended reading
- Use IBM Plex Mono's clear distinction between similar characters (0/O, 1/l) for technical data readability
- Preserve generous touch targets for pill buttons; the current padding provides adequate area
- Consider focus indicators that complement the flat aesthetic, such as outline offsets in ink color

## Scope note

This guide covers the Groq marketing site homepage and pricing page surfaces as captured. Dark mode card treatments, hardware photography presentation, and pricing table structures are represented. Mobile breakpoints, form components, animation specifications, and interior documentation pages are not included. Measurements derive from the exact retained values in the source interface.

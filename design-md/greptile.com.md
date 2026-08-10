# How greptile.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/greptile.com-design)

Last updated: 2026-08-10

## Captured pages

[![FAQ section with accordion questions, green bracketed label, and Contact Us button on light textured background](https://pin.fontofweb.com/5614?format=jpg)](https://design.withfudge.com/share/pin-5614)

[FAQ section with accordion questions, green bracketed label, and Contact Us button on light textured background](https://design.withfudge.com/share/pin-5614)

[![Pricing page hero with green grid pattern, two-tier pricing cards, and green primary action buttons](https://pin.fontofweb.com/5613?format=jpg)](https://design.withfudge.com/share/pin-5613)

[Pricing page hero with green grid pattern, two-tier pricing cards, and green primary action buttons](https://design.withfudge.com/share/pin-5613)

[![Homepage hero with centered headline, green and dark action buttons, and structured footer with logo](https://pin.fontofweb.com/5612?format=jpg)](https://design.withfudge.com/share/pin-5612)

[Homepage hero with centered headline, green and dark action buttons, and structured footer with logo](https://design.withfudge.com/share/pin-5612)

[![Content grid with green-linked technical report cards, bullet lists, and external link icons on notebook-style background](https://pin.fontofweb.com/5611?format=jpg)](https://design.withfudge.com/share/pin-5611)

[Content grid with green-linked technical report cards, bullet lists, and external link icons on notebook-style background](https://design.withfudge.com/share/pin-5611)

## Overview

Greptile's design system presents a developer-first identity that merges engineering credibility with approachable clarity. The visual language centers on a mint-green accent palette against warm off-white surfaces, evoking the aesthetic of technical documentation and engineering notebooks. The brand avoids glossy SaaS conventions in favor of textured backgrounds that resemble grid paper and notebook margins, reinforcing the tool's code-review purpose.

The system employs a dual-typography strategy: Tasa Orbiter Text delivers confident, slightly geometric headlines with semibold weight, while Inter handles readable body copy and Geist Mono provides code-native labels, buttons, and technical metadata. This hierarchy creates immediate scannability for developers accustomed to monospace interfaces. The overall density is moderate—generous whitespace in hero sections gives way to tighter information architecture in pricing tables and technical content grids.

Color usage follows a disciplined pattern: mint green signals action and brand identity, near-black provides primary text authority, and warm grays establish subtle boundaries without visual noise. The design avoids gradients and shadows, relying instead on borders, background shifts, and typographic weight to create depth and hierarchy.

## Colors

| token | value | use |
|---|---|---|
| action | #1a8c5a | Primary buttons, links, bracketed labels, logo mark |
| action-hover | #147a4d | Button hover states, interactive element emphasis |
| ink | #1a1a1a | Primary headlines, body text, footer headings |
| muted-ink | #4a4a4a | Secondary descriptions, pricing details, metadata |
| canvas | #f5f5f0 | Page background, textured surface base |
| surface | #ffffff | Card backgrounds, elevated content areas |
| surface-elevated | #fafaf8 | Pricing cards, subtle panel differentiation |
| border | #d4d4d0 | Card outlines, section dividers, accordion separators |
| border-subtle | #e8e8e4 | Hairline rules, internal content boundaries |
| accent-mint | #2ecc71 | Grid pattern overlays, decorative brand elements |
| accent-mint-light | #e8f5ee | Hover backgrounds, subtle tint areas |

The color system operates in a single light mode with no dark variant visible. The mint green functions as the sole accent, appearing in the logo mark, primary buttons, bracketed category labels like `[ CLOUD ]` and `[ FAQ ]`, and the decorative grid pattern that overlays the pricing hero. The near-black ink provides maximum contrast for code-centric content where readability is critical. Warm gray tones in the canvas and border tokens prevent the sterility of pure white-gray systems, aligning with the notebook-paper metaphor.

The pricing page demonstrates the full color choreography: the hero section uses a mint-tinted grid on canvas background, cards sit on surface-elevated with border outlines, and the primary action buttons use solid action green with white text. The FAQ section shifts to a cleaner canvas background with accordion items separated by border-subtle lines.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Tasa Orbiter Text | 3.5rem | 600 | 1.1 | -0.02em | Homepage hero headlines, major page titles |
| section-display | Tasa Orbiter Text | 2.5rem | 600 | 1.15 | -0.01em | Section headings, pricing page title |
| body | Inter | 1rem | 400 | 1.6 | 0 | Paragraph text, descriptions, footer links |
| body-mono | Geist Mono | 0.875rem | 400 | 1.5 | 0 | FAQ content, technical descriptions, code references |
| label | Geist Mono | 0.75rem | 400 | 1.4 | 0.05em | Bracketed category tags, metadata labels |
| navigation | Inter | 0.875rem | 400 | 1.5 | 0 | Footer column headings, nav items |
| button | Geist Mono | 0.875rem | 400 | 1 | 0.02em | Button labels, CTA text |

Tasa Orbiter Text, designed by 本地遙控 (Local Remote), provides the display voice with its semibold weight and compact proportions. Inter, designed by Rasmus Andersson and provided by Rsms, handles all body reading tasks with its variable-font optimization. Geist Mono, from Basement Studio and Vercel, supplies the technical character essential to a developer tool—its use in buttons, labels, and FAQ content creates consistency with code editor environments.

All font sizes derive from a 4px base unit, ensuring whole-number pixel values at standard zoom. The display sizes use tight leading for impact, while body copy relaxes to 1.6 for extended reading. The monospace family's slightly smaller sizes compensate for its larger perceived volume.

Verify licensing for these families before production use. Geist Mono and Inter are generally available under permissive licenses; Tasa Orbiter Text requires direct verification with 本地遙控.

## Layout

The layout system favors centered single-column heroes that transition to structured multi-column content areas. The homepage hero constrains headline and action buttons to a narrow central column, creating focus around the core value proposition. Below, the footer expands to a four-column grid: brand mark, Product links, Company links, and Helpful Links.

The pricing page introduces a two-column card layout for plan comparison, with equal-width Cloud and Enterprise cards separated by consistent gutters. Below the cards, special discount badges align horizontally in a centered row. The FAQ section splits asymmetrically: a left column carries the section label, heading, and contact action, while the right column stacks accordion items full-width.

Content pages like the State of AI Coding report use a responsive card grid—two columns of technical report cards with consistent internal padding and external link icons positioned in the upper right of each card. The notebook-margin aesthetic appears as a subtle sidebar with dot patterns, framing content without consuming functional space.

Spacing follows a 4px base unit. Section vertical padding typically measures 5rem, creating breathable transitions between content types. Card internal padding uses 2rem for pricing cards and 1.5rem for content cards. Content gaps between related elements measure 1.5rem.

The grid system appears decorative rather than structural: a faint mint grid overlays the pricing hero background, suggesting engineering paper without imposing rigid alignment constraints on content.

## Visual language

The visual identity draws from engineering and academic notebooks. The dot-grid sidebar margins, faint graph-paper hero backgrounds, and monospace typography collectively signal technical precision. The mint green accent avoids the aggressive saturation of typical SaaS brands, instead offering a calmer, more scholarly tone.

Surface treatment emphasizes flat planes with subtle borders. Cards use single-pixel borders in warm gray rather than shadows, maintaining the paper-like flatness. The only depth cue comes from background color shifts: canvas to surface-elevated creates gentle elevation without dimensional effects.

Iconography appears minimal and functional: small external-link arrows on content cards, chevrons for accordion expand/collapse, and simple line icons for pricing feature lists. These inherit the muted-ink color at rest and action green on interactive elements.

The bracketed label convention—`[ CLOUD ]`, `[ ENTERPRISE ]`, `[ FAQ ]`—provides a distinctive typographic motif. Set in Geist Mono with letterspacing, these labels function as category markers that reinforce the code-documentation aesthetic. They appear centered above their associated content blocks, creating a ritualized information hierarchy.

Button styling follows a strict two-variant system: solid action green for primary actions, solid ink for secondary or alternate paths. Both use the same monospace typography and compact padding, differing only in background color. This restraint prevents visual fragmentation across call-to-action surfaces.

## Components

### Primary button

- **Anatomy**: Text label centered within a rectangular button shape
- **Surface**: Solid action green background (#1a8c5a) with white text
- **Typography**: Geist Mono at 0.875rem, regular weight, slight positive tracking
- **Shape**: 0.25rem border radius, sharp enough to feel technical but not harsh
- **Spacing**: 0.75rem vertical padding, 1.5rem horizontal padding
- **Composition**: Typically paired with a secondary button, centered or left-aligned in hero contexts
- **Variants**: Full-width in pricing cards; inline in hero sections

### Secondary button

- **Anatomy**: Identical structure to primary, differentiated by color
- **Surface**: Solid ink background (#1a1a1a) with white text
- **Typography**: Same Geist Mono treatment as primary
- **Shape**: Matching 0.25rem radius
- **Composition**: Positioned adjacent to primary button with consistent gap

### Pricing card

- **Anatomy**: Bracketed category label, price display or "Custom" heading, feature list with icons, full-width CTA button
- **Surface**: Surface-elevated background (#fafaf8) with border (#d4d4d0) outline
- **Typography**: Category label in Geist Mono uppercase with brackets; price in Tasa Orbiter Text at large display size; features in Geist Mono at body-mono size
- **Shape**: 0.5rem border radius, subtle corner treatment
- **Spacing**: 2rem internal padding, generous vertical rhythm between price and features
- **Composition**: Two cards side by side with equal width; Cloud card receives decorative corner bracket accents suggesting selection or emphasis
- **Variants**: Cloud plan shows numeric pricing with per-unit suffix; Enterprise shows "Custom" with descriptive feature list

### FAQ accordion

- **Anatomy**: Question text with expand/collapse chevron, optional answer panel below
- **Surface**: Transparent background on canvas; answer text in muted-ink
- **Typography**: Questions in Geist Mono at body-mono size; answers in same family at matching size with relaxed line height
- **Shape**: No visible border radius; items separated by horizontal rules in border-subtle
- **Spacing**: Generous vertical padding between items; answer panel indented or full-width with internal padding
- **Composition**: Stacked vertically in right column of asymmetric two-column layout
- **States**: Collapsed shows question with down chevron; expanded reveals answer with up chevron

### Content card (technical report)

- **Anatomy**: Title link, external link icon, description paragraph, bullet list of key points
- **Surface**: White background with border outline; subtle hover state suggested by link color
- **Typography**: Title in Tasa Orbiter Text at section-display size or smaller, rendered in action green as linked text; body in Geist Mono at body-mono size; bullets as square markers
- **Shape**: 0.5rem border radius
- **Spacing**: 1.5rem internal padding; consistent vertical rhythm between title, description, and bullet list
- **Composition**: Two-column grid with equal cards; external link icon positioned absolute top-right
- **Variants**: Some cards span full width when content demands; bullet lists vary in length based on source material

### Footer

- **Anatomy**: Brand mark, four-column link grid, social icons row, copyright line
- **Surface**: Canvas background continuing from page; no distinct footer background separation
- **Typography**: Column headings in Inter semibold or bold at navigation size; links in Inter regular at same size; social label in Geist Mono uppercase with tracking
- **Composition**: Brand mark left-aligned; Product, Company, Helpful Links columns in horizontal row; socials and copyright stacked below with generous top margin

## Responsive behavior

The two-column pricing layout should collapse to stacked single-column on narrow viewports, with Cloud card preceding Enterprise. The FAQ asymmetric layout should stack vertically, placing the section heading and contact button above the accordion rather than beside it.

The technical report card grid should transition from two columns to single column, maintaining internal card structure. Footer columns should reflow to two-column then single-column arrangements, preserving link groupings.

Button widths should adapt from fixed inline sizing to full-width on mobile, particularly for pricing card CTAs. Typography scales should reduce proportionally: hero-display from 3.5rem toward 2.5rem, section-display from 2.5rem toward 1.75rem, maintaining the 4px base unit for all snapped values.

The notebook-margin sidebar aesthetic should hide or reduce to minimal width on mobile, prioritizing content space over decorative framing.

## Practical implementation guidance

### Preserve
- The mint green accent as the sole brand color; do not introduce additional accent hues
- The monospace voice for buttons, labels, and technical content; this is central to developer credibility
- The bracketed label convention for category markers
- The flat, border-based card treatment without shadows
- The warm off-white canvas background rather than stark white
- The notebook-paper and grid textures as subtle background layers, not dominant elements

### Avoid
- Gradients, drop shadows, or dimensional effects that contradict the flat engineering aesthetic
- Rounded corners larger than 0.5rem; the system favors technical precision over friendly softness
- Multiple button colors beyond the action/ink pair
- Pure black (#000000) for text; the specified ink (#1a1a1a) provides sufficient contrast with warmer character
- Serif typefaces or decorative display fonts that break the technical tone

### Recommended build order
1. Establish the 4px base unit and type scale with Inter body and Geist Mono labels
2. Implement the color tokens, prioritizing action, ink, canvas, and surface
3. Build the button component with primary and secondary variants
4. Create the card component with border-based surface treatment
5. Implement the pricing page layout as the most complex composition
6. Add the FAQ accordion with chevron state indicators
7. Layer in the notebook-texture backgrounds and decorative grid patterns
8. Polish with the bracketed label component and external link icons

### Accessibility
- Ensure action green (#1a8c5a) on white meets WCAG AA contrast ratios for normal text; the dark ink variant provides a safer fallback for small sizes
- Maintain visible focus indicators on all interactive elements; the flat design risks losing focus state visibility without explicit treatment
- Preserve accordion keyboard navigation with Enter/Space toggle and arrow key traversal
- Use semantic heading hierarchy: Tasa Orbiter Text display sizes should map to h1-h2, not be applied purely for visual sizing
- Provide reduced-motion alternatives if implementing the accordion expand/collapse animation

## Scope note

This guide covers the pricing page, homepage hero, and technical content surfaces visible in the supplied materials. Mobile breakpoints, dark mode, loading states, form validation, and dashboard interfaces are not represented. The notebook-margin decorative elements and grid-pattern backgrounds are adaptation targets based on visible imagery. Measurements are practical adaptation targets.

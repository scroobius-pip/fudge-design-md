# How whisprgroup.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/whisprgroup.com-design)

Last updated: 2026-08-10

## Captured pages

[![Footer section with dark navy background, red and outline pill buttons, multi-column link grid, and social icons](https://pin.fontofweb.com/2670?format=jpg)](https://design.withfudge.com/share/pin-2670)

[Footer section with dark navy background, red and outline pill buttons, multi-column link grid, and social icons](https://design.withfudge.com/share/pin-2670)

[![Hero section with full-bleed photography, large serif headline, red pill button, and bottom-right scroll prompt](https://pin.fontofweb.com/2669?format=jpg)](https://design.withfudge.com/share/pin-2669)

[Hero section with full-bleed photography, large serif headline, red pill button, and bottom-right scroll prompt](https://design.withfudge.com/share/pin-2669)

[![Navigation bar with logo, horizontal menu links, and red pill contact button on translucent overlay](https://pin.fontofweb.com/2668?format=jpg)](https://design.withfudge.com/share/pin-2668)

[Navigation bar with logo, horizontal menu links, and red pill contact button on translucent overlay](https://design.withfudge.com/share/pin-2668)

## Overview

Whispr Group's visual system presents a confident, editorial brand identity built on deliberate contrast: deep, atmospheric darkness against warm human photography, and classical serif headlines against clean sans-serif utility text. The design communicates analytical sophistication without coldness, using a rich navy canvas that lets full-bleed imagery breathe while maintaining strong typographic hierarchy. The system is intentionally restrained—two principal type families, a compact palette, and rounded pill-shaped actions that feel approachable within the otherwise serious tone. Every element serves the narrative of data-driven insight delivered with human understanding, creating a cohesive experience across the homepage surfaces.

## Colors

The color system operates on a dark-mode-first philosophy. The canvas is not pure black but a deep navy that photographs and warm skin tones register against naturally. White and near-white provide primary readability, while a single red accent carries all interactive energy.

| token | value | use |
|---|---|---|
| canvas | `#0B1628` | Primary page background, hero overlays, main content areas |
| canvas-deep | `#070F1A` | Footer background, deepest structural layers |
| ink | `#FFFFFF` | Primary text, headings, navigation, primary button labels |
| ink-muted | `#B8C0CC` | Secondary text, footer column headers, legal copy |
| action | `#E1061B` | Primary buttons, logo accent, interactive highlights |
| action-hover | `#C00512` | Darkened action state for hover feedback |
| border-subtle | `#1E2D42` | Dividers, footer rules, subtle separations on dark ground |

The interface maintains this discipline across all visible surfaces. Photography provides the warmth and color variation; the UI palette stays neutral and functional. The red action color appears sparingly—reserved for the moments when the user should commit. When hero photography sits behind text, a dark gradient overlay ensures the white headline remains legible without sacrificing image presence.

## Typography

Three families are present in the system: Tiempos Headline brings editorial authority to large statements, Akkurat Pro handles everything from navigation to body copy with Swiss clarity, and Fontutti supplies iconographic characters through its symbol font encoding. The scale is generous for display and restrained for utility.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Tiempos Headline | 4rem | 300 | 1.1 | -0.02em | Hero headlines, major page statements |
| section-display | Akkurat Pro | 2.5rem | 700 | 1.2 | -0.01em | Section headings, call-to-action titles |
| body | Akkurat Pro | 1rem | 400 | 1.6 | 0 | Paragraphs, descriptions |
| body-small | Akkurat Pro | 0.875rem | 400 | 1.5 | 0 | Buttons, compact descriptions |
| label | Akkurat Pro | 0.75rem | 400 | 1.4 | 0.05em | Footer column headers, metadata |
| navigation | Akkurat Pro | 0.875rem | 400 | 1 | 0.01em | Main navigation links |

Tiempos Headline appears exclusively at display scale, never below 2rem, preserving its ceremonial quality. Akkurat Pro carries the functional load across seven weights but the system uses Regular and Bold primarily. The hero headline's light weight and tight tracking create an elegant, almost fragile presence that contrasts with the bold sans-serif navigation. Verify licensing for these families before production use. Tiempos Headline is designed by Kris Sowersby of Klim Type Foundry.

## Layout

The layout follows a full-bleed, edge-to-edge philosophy with contained content islands. The hero occupies the full viewport height with photography extending to all edges. Text content sits within a centered container, approximately 75% of viewport width at maximum, creating generous side margins that let the photography frame the message.

Navigation floats at the top with a thin horizontal rule beneath it, separating the menu from content without boxing it in. The rule extends full-width, creating a crisp horizon line. Below the hero, content sections stack vertically with substantial breathing room—section spacing at 6rem maintains the unhurried pace.

The footer compresses the layout into a multi-column grid: four content columns plus a full-width legal bar. Column headers use muted color and slightly smaller size to establish hierarchy without heavy weight changes. Social icons cluster in a horizontal row with consistent circular containment. A thin rule separates the link grid from copyright text, echoing the navigation rule above.

## Visual language

Photography drives emotional resonance in this system. Images are warm-toned, human-centered, and often shot in natural light with shallow depth of field. The hero treatment overlays a dark gradient from the bottom and left edges, preserving image detail while creating a text-safe zone. This gradient is not a flat wash but atmospheric, allowing the photograph's texture to remain visible.

The pill shape is the system's signature geometric element. Buttons, contact prompts, and potentially tags all use full rounding—no sharp corners on interactive elements. This softness counterbalances the starkness of the dark canvas and the precision of the sans-serif type.

Iconography appears minimal and functional: social platform marks in simple circles, a downward arrow for scroll indication. The logo combines wordmark with a small red accent mark, integrating the action color into brand identity itself.

Motion is implied by the scroll prompt's placement and arrow icon, suggesting vertical exploration. The overall rhythm is slow and deliberate, matching the confidence of large type and generous spacing.

## Components

### Primary action button

- **Anatomy**: Text label centered within a fully rounded container
- **Surface**: Solid action red background with white text
- **Typography**: `{typography.body-small}`, bold weight
- **Shape**: Pill border radius, padding 0.875rem vertical and 2rem horizontal
- **Spacing**: Typically appears with 1.5rem margin from adjacent content
- **Composition**: Left-aligned in hero context, center-aligned in call-to-action sections
- **Variants**: The "Contact" and "Get started" instances share identical treatment

### Secondary action button

- **Anatomy**: Text label within a transparent container with border
- **Surface**: Transparent background, 1px white border, white text
- **Typography**: `{typography.body-small}`
- **Shape**: Identical pill proportions to primary button
- **Composition**: Appears paired with primary button, separated by 1rem gap

### Navigation bar

- **Anatomy**: Logo left, horizontal link row center, pill contact button right
- **Surface**: Transparent over hero imagery, white text
- **Typography**: `{typography.navigation}` for links
- **Shape**: Full-width with bottom hairline rule at 1px
- **Composition**: Flex row with space-between alignment, vertical padding approximately 1.5rem
- **Hierarchy**: Contact button elevates above plain links through color and shape

### Hero section

- **Anatomy**: Full-bleed background image, gradient overlay, headline, subheadline, action button, scroll prompt
- **Surface**: Photography with dark gradient overlay from left and bottom
- **Typography**: `{typography.hero-display}` for headline, `{typography.body}` for subheadline
- **Composition**: Text block positioned left, vertically centered; scroll prompt anchored bottom-right
- **Hierarchy**: Headline dominates, subheadline provides context at roughly 60% width, button follows with 2rem top margin

### Footer

- **Anatomy**: Logo, four-column link grid, contact details with social icons, legal bar
- **Surface**: `{colors.canvas-deep}` background
- **Typography**: `{typography.label}` for column headers, `{typography.body-small}` for links, `{typography.label}` for legal
- **Shape**: Full-width with internal max-width container; horizontal rules at 1px
- **Spacing**: Generous vertical padding, approximately 4rem top and 2rem bottom
- **Composition**: Logo spans full width above columns; contact column right-aligned with bold labels for phone regions

## Responsive behavior

The system should maintain its dark canvas and typographic hierarchy across viewport sizes. At narrower widths, the multi-column footer grid should collapse to a stacked layout with accordion-style sections if needed. The hero headline, currently at 4rem, should scale down to approximately 2.5rem on tablet and 2rem on mobile to preserve line breaks and readability. Navigation links should collapse to a menu trigger, preserving the contact button as a persistent action. Photography should continue to bleed full-width, with the text safe zone adjusting to maintain padding. Pill buttons should maintain their proportions but may reduce horizontal padding slightly on small screens.

## Practical implementation guidance

### Preserve
- The dark navy canvas as the default ground; never default to pure white backgrounds
- The serif-and-sans pairing; Tiempos Headline for display only, Akkurat Pro for everything else
- The single red accent discipline; do not introduce additional accent colors
- Full-bleed photography with gradient overlays rather than flat color blocks
- Pill-shaped buttons as the exclusive interactive shape language

### Avoid
- Sharp-cornered buttons or cards that break the soft geometric system
- Light backgrounds behind the primary navigation; transparency over imagery is intentional
- Multiple weights of Tiempos Headline; Light carries the display role alone
- Crowded footer layouts; the four-column grid needs room to breathe

### Recommended build order
1. Establish the dark canvas and typography scale with hero headline and body text
2. Implement the navigation bar with transparent background and bottom rule
3. Build the hero section with full-bleed image, gradient overlay, and text positioning
4. Create the pill button component with primary and secondary variants
5. Construct the footer grid with column headers, link lists, and contact block
6. Add the scroll prompt and social icon circles as finishing details

### Accessibility
- Ensure white text on dark navy meets WCAG AA contrast ratios; the current combination should pass for normal and large text
- Provide visible focus states for pill buttons, likely a white outline offset from the red fill
- Maintain keyboard navigation order through the footer columns logically
- Consider reduced-motion preferences for any scroll-linked animations
- Ensure the gradient overlay provides sufficient contrast for hero text across varied photography

## Scope note

This guide covers the homepage hero, navigation, and footer surfaces visible in the supplied images. Interior pages, product detail layouts, form states, and mobile-specific adaptations are not represented. Motion behavior, hover states, and loading sequences are not documented from still images. Measurements are practical adaptation targets derived from visual inspection against a 4px relative unit grid.

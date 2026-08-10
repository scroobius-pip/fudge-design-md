# How portfolio.adobe.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/portfolio.adobe.com-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with blue gradient background, white display headline, and portfolio website preview gallery strip](https://pin.fontofweb.com/7314?format=jpg)](https://design.withfudge.com/share/pin-7314)

[Hero section with blue gradient background, white display headline, and portfolio website preview gallery strip](https://design.withfudge.com/share/pin-7314)

[![Feature grid with six white cards, blue line icons, and centered section heading on light gray background](https://pin.fontofweb.com/7313?format=jpg)](https://design.withfudge.com/share/pin-7313)

[Feature grid with six white cards, blue line icons, and centered section heading on light gray background](https://design.withfudge.com/share/pin-7313)

[![Full hero viewport with Adobe Portfolio navigation, blue background, and centered CTA button with arrow](https://pin.fontofweb.com/7312?format=jpg)](https://design.withfudge.com/share/pin-7312)

[Full hero viewport with Adobe Portfolio navigation, blue background, and centered CTA button with arrow](https://design.withfudge.com/share/pin-7312)

## Overview

Adobe Portfolio's marketing site presents a confident, product-forward visual system built around a signature deep-blue hero experience that immediately establishes brand recognition. The design alternates between immersive, full-bleed color moments and spacious, breathable white content areas, creating a rhythm that guides visitors from emotional appeal to functional detail. The interface relies on a single type family with dramatic weight contrast—ultralight display weights against bold button and navigation treatments—to create clear hierarchy without visual noise. Every element serves the core narrative: portfolio creation should feel effortless, professional, and accessible to creatives who may not write code. The result is a system that feels simultaneously premium and approachable, with enough restraint to let user work samples in the preview gallery become the true visual stars.

## Colors

The color system is built on a high-contrast foundation with a dominant action blue that carries brand identity across every page surface.

| token | value | use |
|---|---|---|
| action | #0768DE | Primary buttons, hero backgrounds, active navigation states, icon accents |
| action-hover | #0769E0 | Button hover state, subtle interactive feedback |
| ink | #000000 | Navigation text, default body text, iconography |
| muted-ink | #293340 | Headlines on light backgrounds, secondary headings |
| body-text | #6D7784 | Descriptive paragraphs, feature card body copy, captions |
| canvas | #FFFFFF | Page backgrounds, card surfaces, button fills on dark backgrounds |
| surface | #F7F9FB | Subtle section backgrounds, gradient start points |
| surface-light | #FDFEFF | Gradient end points, near-white tints |
| accent-blue | #9FC1EA | Decorative line icons, illustration strokes, non-interactive blue accents |

The hero section employs a full-bleed action blue that saturates the viewport, creating an immersive entry point. Below the fold, the design transitions to white canvas with light gray surface sections for feature grids. A subtle linear gradient from surface (#F7F9FB) to surface-light (#FDFEFF) appears in select containers, adding dimensional lift without shadow. The preview gallery strip interrupts the blue hero with a horizontal band of diverse portfolio screenshots, demonstrating product output while breaking the color monotony. Dark text on light backgrounds and white text on blue backgrounds maintain WCAG-compliant contrast ratios throughout.

## Typography

The typographic system uses two related Adobe Clean family variants: a regular weight for body and display, and a bold cut for navigation and button emphasis. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Adobe Clean | 4.125rem | 200 | 1 | normal | Hero headlines on blue backgrounds |
| section-display | Adobe Clean | 2.9375rem | 200 | 1 | normal | Section headings on white backgrounds |
| body-large | Adobe Clean | 1.25rem | 400 | 1.3 | normal | Introductory paragraphs, subhead descriptions |
| body | Adobe Clean | 0.9375rem | 400 | 1.467 | normal | Feature descriptions, card copy, general text |
| label | Adobe Clean | 1.125rem | 600 | 1 | normal | Feature card titles, emphasized inline labels |
| navigation | Adobeclean | 1rem | 700 | 4.375 | normal | Top-bar navigation links |
| button | Adobeclean | 1.125rem | 700 | 2.889 | normal | Primary and secondary button text |

The display hierarchy depends on extreme weight contrast: hero-display and section-display use weight 200 for an elegant, airy quality that feels expansive against the blue background, while navigation and buttons deploy weight 700 for confident, clickable presence. No italic or condensed variants appear in the system. Letter spacing remains normal throughout, letting the clean geometric forms of Adobe Clean breathe naturally. Line heights are tight for display sizes (1.0) and relaxed for body reading (1.3–1.467).

## Layout

The page follows a centered, single-column content model with generous horizontal margins that create a refined, editorial feel. The hero section occupies full viewport height with centered text alignment, pushing the headline and call-to-action to the optical center. Navigation sits fixed at the top with horizontal link distribution and logo lockup on the left.

Content sections below the hero maintain a maximum content width with substantial side margins—approximately 15.7rem on each side at desktop scale—creating a narrow reading column that feels intentional rather than constrained. The feature grid in the middle section breaks into a 3×2 card arrangement with consistent internal padding and even gutters between cards.

The preview gallery strip spans full viewport width, sitting at the boundary between blue hero and white content areas. It presents a continuous horizontal array of portfolio screenshots with no visible gaps, creating a mosaic effect that demonstrates product output density.

Vertical rhythm is established through section spacing of roughly 17.5rem between major content blocks, with internal element spacing of 1.25rem between related items like headings and paragraphs. Cards receive 1.875rem internal padding, giving icon illustrations and text room to separate visually.

## Visual language

The visual language balances corporate confidence with creative appeal. The deep action blue dominates the first impression, signaling Adobe brand heritage while the ultralight display typography keeps the mood open rather than heavy. Photography and portfolio screenshots appear as unframed, edge-to-edge strips without borders or shadows, letting the work speak directly.

Iconography follows a consistent line-art style with single-weight strokes in accent-blue, depicting product concepts—Behance integration, responsive devices, domain names, font selection, Lightroom connectivity, photo grids, and password protection—through simple, readable metaphors. These icons sit centered above feature titles with generous vertical space, creating a calm, scannable rhythm across the grid.

The button language is immediately recognizable: rounded pill shapes with bold text, often accompanied by a rightward arrow that suggests forward progress. On dark backgrounds, buttons invert to white fills with action blue text; on light backgrounds, they use solid action blue with white text. No ghost buttons or outlined variants appear in the visible system.

The overall impression is one of polished restraint: enough color and contrast to feel energetic, enough whitespace to feel premium, and enough product demonstration to feel substantive rather than abstract.

## Components

### Navigation bar

- **Anatomy**: Logo lockup (Pf mark + "Adobe Portfolio" wordmark) left-aligned; horizontal link group center-right with Overview, Photography, Examples, Resources, Plans; user account indicators far right
- **Surface**: Transparent over hero, allowing blue background to show through; text in white for primary links, muted for secondary
- **Typography**: `{typography.navigation}` for link labels
- **Spacing**: Full-width bar with horizontal padding matching content margins; vertical height determined by line-height and padding

### Hero section

- **Anatomy**: Full-viewport container with centered text block; headline, optional subhead, and single CTA button stacked vertically
- **Surface**: Solid action blue background
- **Typography**: `{typography.hero-display}` in canvas white; body text in canvas white or accent-blue depending on hierarchy
- **Spacing**: Generous vertical padding to optical center; button separated from text by substantial margin

### Portfolio preview strip

- **Anatomy**: Full-width horizontal band of portfolio screenshot thumbnails arranged in a continuous mosaic
- **Surface**: Images butt directly against each other with no gaps or borders
- **Composition**: Sits at bottom edge of hero, creating transition to white content below

### Feature card

- **Anatomy**: Centered content with icon illustration above, title below, description paragraph beneath
- **Surface**: White canvas background with no visible border or shadow; cards sit on light gray surface section
- **Typography**: `{typography.label}` for titles in muted-ink; `{typography.body}` for descriptions in body-text
- **Spacing**: `{spacing.card-padding}` internal padding; even gutters in grid arrangement
- **Composition**: Icon centered above text; all elements center-aligned within card

### Primary button

- **Anatomy**: Pill-shaped container with bold text and optional right arrow icon
- **Surface**: Two visible variants—white fill with action blue text on dark backgrounds; action fill with white text on light backgrounds
- **Typography**: `{typography.button}`
- **Shape**: `{rounded.button}` or `{rounded.button-alt}` pill radius
- **Spacing**: Horizontal padding of 1.875rem; height determined by line-height and vertical padding

### Section header

- **Anatomy**: Centered heading with optional subheading paragraph below
- **Typography**: `{typography.section-display}` for heading; `{typography.body-large}` for subheading
- **Spacing**: Heading separated from subheading by `{spacing.content-gap}`; block separated from subsequent content by larger section margin

## Responsive behavior

The desktop layout assumes a wide viewport with side-by-side navigation and multi-column grids. At narrower widths, the feature grid should collapse from three columns to two, then to a single stacked column, maintaining card internal spacing and centered text alignment. The hero headline should scale down proportionally, preserving the ultralight weight but reducing size to maintain line integrity without overflow.

The portfolio preview strip may require horizontal scroll or reduced thumbnail count on smaller viewports to prevent excessive vertical compression. Navigation links should collapse to a menu affordance when horizontal space no longer accommodates the full link set.

Touch targets for buttons should maintain minimum 44×44dp regardless of viewport size. The generous desktop margins should reduce to practical mobile padding—approximately 1rem to 1.5rem on each side—to preserve readability without wasting screen space.

## Practical implementation guidance

### Preserve
- The extreme weight contrast between display (200) and interactive (700) type; this is central to the system's personality
- Full-bleed blue hero with centered, stacked content; the optical centering creates calm confidence
- Unframed, edge-to-edge portfolio preview strip; borders or gaps would diminish the immersive demonstration
- Consistent line-art icon style with accent-blue strokes; mixed illustration styles would fracture the product narrative
- Generous whitespace between sections; the airy quality depends on breathing room

### Avoid
- Adding shadows to cards or buttons; the system achieves depth through color and spacing alone
- Using the ultralight display weight for body text or long paragraphs; it lacks the readability needed at small sizes
- Introducing additional accent colors beyond the blue family; the restrained palette is intentional
- Center-aligning text blocks wider than comfortable reading measure; keep line lengths to 60–75 characters
- Rounding corners on cards or containers; the pill shape is reserved for interactive elements only

### Recommended build order
1. Establish type scale with Adobe Clean at all weights and sizes
2. Implement hero section with full-bleed action blue and centered white display text
3. Build navigation with transparent background and white link treatment
4. Add portfolio preview strip with responsive image handling
5. Construct feature grid with centered cards and line-art icons
6. Implement button variants with pill radius and arrow iconography
7. Apply section spacing and vertical rhythm across all content blocks

### Accessibility
- Ensure white text on action blue meets WCAG AA contrast (4.5:1 for normal text, 3:1 for large text)
- Provide visible focus indicators for keyboard navigation; the default browser outline may clash with the clean aesthetic, so design a custom focus ring using accent-blue
- Maintain logical heading hierarchy: h1 for hero headline, h2 for section headings, h3 or h4 for card titles
- Add aria-labels to icon-only buttons or links in the navigation
- Consider reduced-motion preferences for any scroll-triggered animations; the still images suggest a primarily static experience

## Scope note

This guide covers the Adobe Portfolio marketing homepage visible in the supplied images, including the hero section, portfolio preview gallery, feature grid, and navigation. Pricing pages, plan comparison tables, account dashboards, and mobile-specific layouts are not represented. Footer content, form interactions, and error states fall outside the current scope. Measurements reflect the desktop viewport as captured.

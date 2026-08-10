# How supernova.io is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/supernova.io-design)

Last updated: 2026-08-10

## Captured pages

[![Homepage hero and feature sections with numbered steps, product UI screenshots, and dark header navigation with blue primary action button](https://pin.fontofweb.com/9265?format=jpg)](https://design.withfudge.com/share/pin-9265)

[Homepage hero and feature sections with numbered steps, product UI screenshots, and dark header navigation with blue primary action button](https://design.withfudge.com/share/pin-9265)

[![Pricing comparison table with feature categories, checkmark indicators, and alternating row backgrounds on light grid-patterned canvas](https://pin.fontofweb.com/9264?format=jpg)](https://design.withfudge.com/share/pin-9264)

[Pricing comparison table with feature categories, checkmark indicators, and alternating row backgrounds on light grid-patterned canvas](https://design.withfudge.com/share/pin-9264)

[![Pricing page header with three-tier card layout showing Free, Pro, and Enterprise plans with toggle switch and blue pill-shaped CTAs](https://pin.fontofweb.com/9263?format=jpg)](https://design.withfudge.com/share/pin-9263)

[Pricing page header with three-tier card layout showing Free, Pro, and Enterprise plans with toggle switch and blue pill-shaped CTAs](https://design.withfudge.com/share/pin-9263)

## Overview

Supernova.io presents a technical SaaS aesthetic built on high contrast and spatial precision. The design pairs a near-black navigation header with a pale blue-gray body canvas, using an electric blue accent to guide action. The visual system relies on subtle grid textures, generous whitespace, and restrained typography to communicate engineering credibility without visual noise. Product screenshots appear as floating UI panels with soft shadows, while pricing surfaces use clean tabular layouts with clear hierarchy. The overall impression is of a tool built for design-system practitioners: organized, modern, and deliberately understated.

## Colors

The palette operates in three modes: a dark header band, a light body canvas with photographic accents, and an electric blue action system.

| token | value | use |
|---|---|---|
| action | #1A5EE5 | Primary buttons, active toggles, checkmarks, links |
| ink-primary | #262F40 | Headings, primary text, dark header background |
| ink-secondary | #66728A | Body text, descriptions, secondary content |
| ink-muted | #96A0B5 | Placeholder text, disabled indicators, subtle labels |
| canvas | #F1F3F9 | Page background, table alternating rows |
| surface | #FFFFFF | Cards, panels, pricing tiers, elevated containers |
| surface-elevated | #DEE3ED | Borders, dividers, subtle structural lines |
| border-subtle | #DEE3ED | Card outlines, section separators, table row dividers |

The dark header uses ink-primary as its background with white text, creating immediate contrast against the light canvas below. The body canvas carries a faint dot-grid texture in ink-primary at low opacity, visible in the homepage feature sections and pricing table backgrounds. Blue appears exclusively as action: buttons, toggle switches, checkmark icons, and link text. No gradients define the UI surfaces; the conic gradient visible in one image appears to be a decorative loading or progress element rather than a persistent interface color.

## Typography

The system uses a single font family, Manrope, designed by Mikhail Sharanda and available from the same source. Verify licensing for this family before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Manrope | 6rem | 700 | 1 | -0.02em | Homepage hero numerals, large decorative figures |
| section-display | Manrope | 3.75rem | 700 | 1 | -0.03em | Page titles, major section headings |
| heading-large | Manrope | 1.5rem | 700 | 1.2 | -0.03em | Feature titles, card headers |
| heading-medium | Manrope | 1.25rem | 700 | 1.5 | -0.02em | Subsection titles, pricing plan names |
| body | Manrope | 1rem | 400 | 1.5 | 0 | Paragraphs, descriptions, table content |
| body-small | Manrope | 0.875rem | 400 | 1.5 | 0 | Feature lists, metadata, captions |
| label | Manrope | 0.875rem | 500 | 1.5 | 0 | Buttons, tags, navigation items |
| navigation | Manrope | 0.875rem | 500 | 1.5 | 0 | Header links, dropdown items |

The type scale builds from a 16px root with 2px incremental steps. Display sizes use tight negative tracking for a compact, engineered feel. Body text maintains neutral spacing for readability. Weight distinctions are functional: 400 for content, 500 for interactive elements and labels, 700 for headings and emphasis. The 96px hero numerals on the homepage use the same weight and tight leading as the section display, creating visual continuity between decorative and functional large type.

## Layout

The layout system centers content with generous margins and clear section breaks. The header is fixed or sticky, full-width, with internal padding of 8px vertical and 16px horizontal for compact items, expanding to 12px and 20px for the main navigation row. Body sections use substantial vertical padding: 120px top and 60px bottom for major feature blocks, 24px for card interiors, and 16px for tight component groupings.

Content max-width appears to sit around 1200px, centered with auto margins. The pricing page uses a three-column grid for plan cards, with equal-width columns and 24px gutters. Feature tables span the full content width with internal column divisions aligned to the plan tiers above.

The grid texture on the homepage and pricing surfaces consists of 1px dots at 8px intervals, rendered as a CSS radial gradient. A secondary diagonal line pattern appears in some sections, created with a linear gradient at 135 degrees producing 1px lines with 5px gaps. These textures sit behind content at very low opacity, providing spatial reference without competing for attention.

## Visual language

The visual character combines technical precision with approachable simplicity. Rounded corners are restrained: 8px for panels and cards, full pill shapes only for buttons and badges. Shadows are minimal or absent; elevation is communicated through background color shifts from canvas to surface rather than drop shadows.

Product screenshots appear as floating browser-like frames with subtle rounded corners, often overlapping section boundaries to create depth. The homepage features numbered steps with oversized numerals in muted ink, paired with concise headings and short paragraphs. Checkmarks in feature lists use the action blue, providing consistent positive reinforcement across pricing and product surfaces.

The header maintains a dark, solid presence with white text and a single blue button for the primary call to action. Navigation items use muted text that brightens on interaction. The overall density is low: ample breathing room around elements, clear scan lines for tabular data, and deliberate hierarchy through size and weight rather than color variation.

## Components

### Header navigation

- **Anatomy**: Logo left, horizontal link list center, utility actions right
- **Surface**: Background ink-primary, text white for logo and primary items, muted for secondary
- **Typography**: Navigation token for links, label token for buttons
- **Spacing**: 8px-16px vertical padding, 12px-20px horizontal; 40px margin between major groups
- **Shape**: Full-width bar, no border radius
- **Variants**: Utility area contains text links for Login and Sign up, plus a solid blue pill button for Request a demo

### Primary button

- **Anatomy**: Text label centered, optional icon prefix
- **Surface**: Background action, text surface white
- **Typography**: Label token, 500 weight
- **Shape**: Full pill radius, 0px border
- **Spacing**: 0px 12px horizontal padding, implicit vertical centering
- **States**: Default uses action blue; pressed or hovered states should darken using ink-primary or a manually darkened variant of action

### Secondary button

- **Anatomy**: Text label centered
- **Surface**: Background surface white or transparent, text ink-primary
- **Typography**: Label token, 500 weight
- **Shape**: Full pill radius, 0px border
- **Spacing**: Matches primary button
- **Use**: Alternative actions, sign-up flows, less prominent CTAs

### Pricing card

- **Anatomy**: Plan name, description, price block, feature category sections with checkmark lists, bottom CTA button
- **Surface**: Background surface white, border border-subtle
- **Typography**: Heading-medium for plan name, body for description, heading-large for price figures, body-small for feature items
- **Shape**: 8px border radius, 1px solid border
- **Spacing**: 24px internal padding, 20px top margin between sections
- **Composition**: Three cards in equal grid columns; middle card (Pro) may receive subtle emphasis through border treatment

### Feature comparison table

- **Anatomy**: Category headers with icon, feature name rows, checkmark or value cells per plan tier
- **Surface**: Alternating row backgrounds between canvas and surface; category headers with distinct background
- **Typography**: Body-small for feature names and values, label weight for category titles
- **Shape**: Full-width table, 1px horizontal borders in border-subtle
- **Spacing**: 16px cell padding, 6px bottom margin on list items within cells
- **Composition**: Left column for feature names, subsequent columns aligned to pricing cards above

### Toggle switch

- **Anatomy**: Track with sliding thumb, text labels for states
- **Surface**: Track uses action blue when active, muted gray when inactive; thumb surface white
- **Shape**: Pill-shaped track, circular thumb
- **Use**: Billing period selection on pricing page, switching between Monthly and Yearly

### Product screenshot frame

- **Anatomy**: Browser chrome or clean frame containing application UI screenshot
- **Surface**: Surface white background, subtle border or shadow
- **Shape**: 8px border radius, occasional overflow beyond section boundaries
- **Composition**: Positioned to break section grid, creating visual interest and demonstrating product depth

## Responsive behavior

The three-column pricing grid should collapse to a single column on narrow viewports, with cards stacking vertically and maintaining full width. The feature comparison table requires horizontal scroll or transformation into an accordion or card-based layout at small sizes, as the multi-column structure does not compress gracefully.

The header navigation should collapse to a hamburger menu on mobile, preserving the dark background and blue CTA. Homepage feature sections with side-by-side text and screenshot layouts should stack vertically, with screenshots appearing below their associated text blocks.

The grid texture backgrounds remain visible at all breakpoints but may reduce in opacity or density on very small screens to prevent visual clutter. Type sizes should scale down proportionally: section-display to 2.5rem, heading-large to 1.25rem, with hero-display numerals potentially hidden or reduced to heading scale on mobile.

## Practical implementation guidance

### Preserve
- The strict two-tone header/body contrast: dark ink-primary navigation against light canvas content
- Full pill buttons for all primary actions; this shape is distinctive to the brand
- The 8px panel radius and 2px type scale increment as foundational rhythm
- Blue checkmarks as the exclusive positive indicator; do not introduce additional icon styles
- Generous section padding (120px/60px) for major content breaks

### Avoid
- Drop shadows on cards; the design uses flat color layers for elevation
- Multiple font families; the single-family approach is central to the clean aesthetic
- Gradient backgrounds on UI surfaces; reserve gradients for decorative textures only
- Rounded corners larger than 8px on non-button elements; the contrast between pill buttons and panel corners is intentional

### Recommended build order
1. Establish the color tokens and apply the dark header with light body canvas
2. Implement Manrope at 400/500/700 weights with the full type scale
3. Build the pill button component as the primary interactive element
4. Create the pricing card with proper internal spacing and feature list structure
5. Add the grid texture backgrounds using the documented radial gradient pattern
6. Implement the feature comparison table with alternating row treatments
7. Polish with the toggle switch and product screenshot frame components

### Accessibility
- Ensure the blue action color meets contrast requirements against both white and dark backgrounds; test specifically for the button text on action blue
- Provide visible focus states for pill buttons, likely using an outline or ring in ink-primary
- The feature table should use proper semantic table markup with scope attributes for screen reader navigation
- Maintain logical heading hierarchy: h1 for page titles, h2 for section headings, h3 for card and category titles
- The grid texture background should remain subtle enough to not interfere with text readability; consider reducing opacity further if content overlap occurs

## Scope note

This guide covers the homepage and pricing page surfaces visible in the supplied images. Mobile breakpoints, animation, form validation states, and dashboard or application interiors are not represented. The conic gradient element appears decorative and its exact usage pattern is not fully documented. Measurements are derived from the retained interface values where available.

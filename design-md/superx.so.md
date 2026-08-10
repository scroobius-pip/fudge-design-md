# How superx.so is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/superx.so-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with italic serif accent on 'smart analytics', product screenshot, and video player with orange dot-matrix visualization on black background](https://pin.fontofweb.com/2282?format=jpg)](https://design.withfudge.com/share/pin-2282)

[Hero section with italic serif accent on 'smart analytics', product screenshot, and video player with orange dot-matrix visualization on black background](https://design.withfudge.com/share/pin-2282)

[![Footer CTA panel with gradient spotlight effect, rounded white button, and four-column footer with flame logo and link columns](https://pin.fontofweb.com/2281?format=jpg)](https://design.withfudge.com/share/pin-2281)

[Footer CTA panel with gradient spotlight effect, rounded white button, and four-column footer with flame logo and link columns](https://design.withfudge.com/share/pin-2281)

[![Social proof section with creator testimonial cards in dark rounded containers, X logos, and avatar rows on black background](https://pin.fontofweb.com/2280?format=jpg)](https://design.withfudge.com/share/pin-2280)

[Social proof section with creator testimonial cards in dark rounded containers, X logos, and avatar rows on black background](https://design.withfudge.com/share/pin-2280)

[![Pricing section with PRO and ADVANCED tiers, large numeral pricing, feature checklists, and pill-shaped discount badge](https://pin.fontofweb.com/2279?format=jpg)](https://design.withfudge.com/share/pin-2279)

[Pricing section with PRO and ADVANCED tiers, large numeral pricing, feature checklists, and pill-shaped discount badge](https://design.withfudge.com/share/pin-2279)

## Overview

SuperX presents a premium dark-mode experience built for creators and growth-focused Twitter users. The visual system relies on an almost-black canvas that makes product screenshots, data visualizations, and warm amber accents feel luminous and high-contrast. The design balances two typographic voices: a clean, confident sans-serif for all functional and marketing copy, and an elegant italic serif that appears selectively to add personality and emphasis to key phrases like "smart analytics." The overall impression is of a polished, modern tool—professional enough to trust with social data, yet stylish enough to appeal to individual creators who care about their personal brand aesthetic.

The page architecture follows a classic SaaS landing structure: hero with product demonstration, social proof through creator testimonials, transparent pricing, and a strong footer call-to-action. Each section maintains the dark continuity while using subtle elevation changes in surface color to create depth without breaking the immersive atmosphere. The warm amber accent color functions as the single emotional highlight, appearing in data visualizations, discount badges, and rating stars to draw attention to value and social validation.

## Colors

The color system is intentionally restrained, built on a near-black foundation with a single warm accent and careful gradations of gray for hierarchy.

| token | value | use |
|---|---|---|
| canvas | `#000000` | Page background, hero base, footer base |
| surface | `#111111` | Card backgrounds, pricing panels, testimonial containers |
| surface-elevated | `#1a1a1a` | Elevated cards, hover states, nested containers |
| ink | `#ffffff` | Primary headings, body text, button labels on dark |
| ink-muted | `#888888` | Secondary descriptions, metadata, crossed-out prices |
| ink-dim | `#555555` | Tertiary text, disabled states, subtle labels |
| action | `#f5a623` | Accent highlights, discount badges, star ratings, data visualization dots |
| action-hover | `#ffb84d` | Hover state for accent elements |
| success | `#4ade80` | Positive indicators, verification checkmarks |
| border | `#333333` | Visible dividers, card outlines, pricing feature separators |
| border-subtle | `#222222` | Hairline separators, inactive states |

The palette operates in a single dark mode throughout. The warm amber (`#f5a623`) serves as the only saturated color, creating focal points against the neutral grayscale. Product screenshots and data visualizations embedded in the interface introduce their own color—blues, oranges, and greens from analytics charts—but these are treated as content rather than system colors. The strict absence of cool blues or purples in the UI itself reinforces the warm, energetic personality of the brand.

## Typography

SuperX employs two font families with distinct roles. Inter handles all functional typography with its excellent legibility at small sizes and neutral, modern character. Instrument Serif-Italic appears for display accent moments, adding editorial sophistication to key marketing phrases.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Inter | 3.5rem | 700 | 1.1 | -0.02em | Hero headlines, major section titles |
| section-display | Inter | 2.5rem | 600 | 1.15 | -0.01em | Section headings, pricing titles |
| body | Inter | 1rem | 400 | 1.6 | 0em | Paragraphs, descriptions, feature lists |
| body-small | Inter | 0.875rem | 400 | 1.5 | 0em | Captions, metadata, footer links |
| label | Inter | 0.75rem | 600 | 1.4 | 0.05em | Uppercase labels, badges, category headers |
| accent-display | Instrument Serif-Italic | 3.5rem | 400 | 1.1 | -0.01em | Italic accent words in hero ("smart analytics") |

The type scale uses a 4px base grid, with sizes stepping in whole multiples: 12px (0.75rem), 14px (0.875rem), 16px (1rem), 40px (2.5rem), and 56px (3.5rem). Instrument Serif-Italic, designed by Rodrigo Fuenzalida and available from Frag Type, appears at the same optical size as hero-display to maintain visual parity when mixed in headlines. Inter, designed by Rasmus Andersson and available from Rsms, provides the workhorse typography across all weights. Verify licensing for these families before production use.

## Layout

The layout follows a centered, contained approach with generous vertical breathing room. Sections stack with substantial separation, typically 6rem between major blocks, allowing each message to land with clarity against the dark canvas.

The hero section uses an asymmetric two-column composition: text and primary action anchor the left, while a floating product screenshot and video player occupy the right. This creates diagonal visual tension and draws the eye toward the product demonstration. The video player sits within a rounded container, suggesting depth through its distinct surface treatment.

Content sections below the hero employ centered headings with left-aligned supporting text, maintaining a readable measure of approximately 60 characters for descriptions. The testimonial grid uses a horizontal scroll or multi-column arrangement of uniform cards, each containing an avatar, name, and quote. The pricing section presents two tiers side by side with clear visual hierarchy between the simpler PRO card and the more feature-rich ADVANCED option.

The footer reverses the hero's energy with a contained CTA panel that uses a gradient spotlight effect—lighter in the center, darkening toward the edges—to create a stage for the final conversion moment. Below this, a four-column link grid provides navigation density without visual weight.

Spacing tokens derive from the 4px base unit: 0.25rem increments for tight internal padding, 1.5rem for content gaps within components, and 6rem for section breaks. Border radii follow a semantic system: 0.75rem for cards, 1rem for larger panels, and 9999px for pill-shaped buttons and badges.

## Visual language

The visual language communicates precision and creative energy simultaneously. The near-black canvas creates a theater-like environment where product imagery and amber accents perform. Subtle surface elevation—shifting from `#000000` to `#111111` to `#1a1a1a`—provides depth without resorting to heavy shadows or borders.

The amber accent color appears with discipline: in the dot-matrix data visualization within the video player, on five-star rating indicators, in the "EARLY DISCOUNT" badge, and as a subtle highlight in product screenshots. This restraint makes each appearance feel intentional and valuable.

Imagery and screenshots are treated as content objects with their own internal color systems. The analytics dashboard shown in screenshots uses orange and blue data points against dark gray interfaces—colors that harmonize with the SuperX palette without being formally part of it. The video player's dot-matrix visualization uses the amber accent directly, creating brand continuity between interface and content.

The flame emoji in the footer logo introduces a playful warmth that balances the otherwise stark aesthetic. Creator avatars in testimonials add organic color variation—skin tones, clothing, backgrounds—that humanizes the dark interface without design system intervention.

## Components

### Primary action button
- **Anatomy**: Text label with right-pointing arrow icon, contained within a pill-shaped button
- **Surface**: White (`#ffffff`) background with black (`#000000`) text and icon
- **Typography**: `{typography.label}`—uppercase, 0.75rem, semibold
- **Shape**: Full pill, `border-radius: 9999px`
- **Spacing**: 0.75rem vertical padding, 1.5rem horizontal padding, with additional internal space for the icon
- **Composition**: Icon sits at the right edge, slightly inset within the pill or on a dark circular sub-button
- **Variants**: A dark variant appears on lighter surfaces with inverted colors

### Secondary action button
- **Anatomy**: Text label only, or text with subtle border
- **Surface**: Transparent with `border-subtle` outline
- **Typography**: `{typography.label}` or `{typography.body-small}`
- **Shape**: Pill or rounded rectangle depending on context
- **Spacing**: Similar padding to primary, less visual weight

### Testimonial card
- **Anatomy**: Avatar image (circular), creator name, X logo, and quote text
- **Surface**: `{colors.surface-elevated}` background, `{rounded.card}` corners
- **Typography**: Name in `{typography.body-small}` semibold, quote in `{typography.body-small}` regular
- **Spacing**: `{spacing.card-padding}` internal padding
- **Composition**: Avatar and name in a horizontal row, X logo aligned to the right of the name, quote below with comfortable line height
- **States**: Multiple cards arranged in a grid with consistent internal structure

### Pricing card
- **Anatomy**: Tier label, price display (large numeral with currency and period), description, feature checklist, and action button
- **Surface**: `{colors.surface}` background, `{rounded.panel}` corners
- **Typography**: Tier label in `{typography.label}`, price numeral in `{typography.hero-display}` weight at enlarged size, features in `{typography.body-small}`
- **Shape**: Rounded rectangle with internal padding
- **Composition**: Price dominates the upper portion, features listed with checkmark icons in a column, action button anchored at the bottom
- **Variants**: ADVANCED tier includes an amber "EARLY DISCOUNT" badge and strikethrough original pricing

### CTA panel
- **Anatomy**: Heading, subheading or description, and primary action button
- **Surface**: Gradient from lighter center to dark edges, creating a spotlight effect; contained within a rounded panel with subtle border
- **Typography**: `{typography.section-display}` for heading
- **Shape**: Large rounded rectangle, nearly full-width with side margins
- **Composition**: Centered text and button, generous internal padding (approximately 4rem vertical)

### Footer
- **Anatomy**: Logo and attribution, four link columns (PRODUCT, RESOURCES, LEGAL, plus implied fourth), copyright notice
- **Surface**: `{colors.canvas}` background, continuous with page
- **Typography**: Column headers in `{typography.label}`, links in `{typography.body-small}` with `{colors.ink-muted}`
- **Composition**: Logo block left-aligned, link columns distributed across remaining width, copyright at bottom left

## Responsive behavior

The design should maintain its dark character and typographic hierarchy across viewport sizes. At narrower widths, the hero's two-column layout should stack vertically, placing the product screenshot below the headline and action. The testimonial grid should transition from multiple columns to horizontal scroll or single-column stacking to preserve card readability.

Pricing cards should stack vertically on small screens, with the ADVANCED tier maintaining its visual prominence through the amber badge and expanded feature list. The footer link columns should collapse to an accordion or simplified two-column layout.

Touch targets for buttons should maintain a minimum of 44px height. The pill-shaped buttons adapt naturally to wider tap areas. Font sizes should scale down modestly: hero-display may reduce to 2.5rem on mobile, section-display to 2rem, preserving the hierarchy without overwhelming small screens.

## Practical implementation guidance

### Preserve
- The stark black canvas as the default background; any deviation weakens the premium, focused atmosphere
- The warm amber accent as the single highlight color; introducing additional saturated colors will fragment the brand
- The italic serif accent for select display moments; overuse will dilute its impact
- The generous section spacing; crowding components destroys the breathable, confident pacing

### Avoid
- Light mode variants without complete palette rethinking; the system is built for dark environments
- Additional border weights beyond the subtle and visible tokens; the design relies on surface contrast more than lines
- Cool-toned accents (blues, purples) that compete with the warm amber personality
- Generic placeholder avatars in testimonial cards; the authentic creator photography is essential to social proof

### Recommended build order
1. Establish the black canvas and Inter typography base
2. Implement the hero section with accent serif integration and primary action button
3. Build the card component with surface color and rounded corners
4. Create the pricing section with numeral sizing and feature checklist pattern
5. Add the footer CTA panel with gradient spotlight effect
6. Polish with amber accent applications and micro-interactions

### Accessibility
- Ensure white text on black backgrounds meets WCAG AAA contrast ratios (7:1 for body text)
- The amber accent on black should be verified for minimum 4.5:1 contrast for any text usage
- Provide focus indicators that are visible against dark surfaces, likely using the amber accent with sufficient contrast
- Consider reduced-motion preferences for any video or animated elements
- Maintain semantic heading hierarchy despite the visual similarity between hero and section display sizes

## Scope note

This guide covers the SuperX landing page surface including the hero, social proof, pricing, and footer sections. Measurements are practical adaptation targets. Mobile layouts, form interactions, checkout flows, dashboard interfaces, and motion behavior are not represented in the supplied materials. The design system assumes a single dark mode; light mode variants would require additional color exploration beyond the current palette.

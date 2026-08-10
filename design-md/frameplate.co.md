# How frameplate.co is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/frameplate.co-design)

Last updated: 2026-08-10

## Captured pages

[![Footer section with Frameplate logo, yellow support button, social icons, and multi-column navigation links on black background](https://pin.fontofweb.com/3965?format=jpg)](https://design.withfudge.com/share/pin-3965)

[Footer section with Frameplate logo, yellow support button, social icons, and multi-column navigation links on black background](https://design.withfudge.com/share/pin-3965)

[![Newsletter signup section with heading, email input field, white subscribe button, and geometric logo mark on black background](https://pin.fontofweb.com/3964?format=jpg)](https://design.withfudge.com/share/pin-3964)

[Newsletter signup section with heading, email input field, white subscribe button, and geometric logo mark on black background](https://design.withfudge.com/share/pin-3964)

[![Sponsor pricing page with purple announcement banner, breadcrumb navigation, three-tier pricing cards with purple CTAs and wireframe previews](https://pin.fontofweb.com/3963?format=jpg)](https://design.withfudge.com/share/pin-3963)

[Sponsor pricing page with purple announcement banner, breadcrumb navigation, three-tier pricing cards with purple CTAs and wireframe previews](https://design.withfudge.com/share/pin-3963)

## Overview

Frameplate presents a dark, premium visual environment built around a near-black canvas with electric purple accents and crisp white typography. The system serves a Framer template marketplace, communicating technical credibility and creative energy through restrained color usage and bold typographic hierarchy. The interface relies on depth created through subtle surface elevation rather than heavy shadows, with card-based layouts organizing pricing and content into scannable, self-contained units. The overall impression is that of a specialized tool for designers—polished, confident, and uncluttered. Visual interest comes from the high contrast between the dark foundation and the vibrant action color, supported by clean geometric forms and generous whitespace that prevents the dark theme from feeling heavy or cramped.

## Colors

The color system operates on a dark-mode-only principle with a disciplined palette that reserves purple for action and attention, while neutrals handle structure and readability.

| token | value | use |
|---|---|---|
| canvas | #0a0a0a | Primary page background, deepest layer |
| surface | #141414 | Card backgrounds, footer sections, elevated containers |
| surface-elevated | #1a1a1a | Input fields, hover states, secondary elevations |
| ink | #ffffff | Primary text, headings, logo, primary button text on dark |
| muted-ink | #a3a3a3 | Secondary text, descriptions, placeholder text, footer links |
| action | #7c5cfc | Primary buttons, pricing CTAs, accent highlights, banner badges |
| action-hover | #6b4fd9 | Action hover states, interactive purple elements |
| border | #262626 | Card borders, dividers, subtle separations |
| banner-bg | #2d2a4a | Announcement banner background, promotional bars |
| banner-text | #e8e6f0 | Banner text, promotional messaging |
| success | #facc15 | Support/donation button, positive accent |

The canvas and surface colors create a shallow depth hierarchy: the page sits on near-black, cards lift to slightly lighter charcoal, and interactive elements like inputs sit at a third elevation. The action purple appears exclusively on interactive elements and promotional moments, making it highly salient when it does appear. The announcement banner introduces a desaturated purple-tinted dark tone that harmonizes with the action color while distinguishing promotional content from the main interface. White text maintains excellent contrast across all surfaces, with muted-ink reserved for supporting information that should not compete with primary content.

## Typography

The type system centers on Inter, a neutral, highly legible sans-serif that performs well at both display and text sizes. Poppins-Italic appears for occasional accent usage.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Inter | 3rem | 700 | 1.1 | -0.02em | Page titles, major headings |
| section-display | Inter | 2rem | 600 | 1.2 | -0.01em | Card titles, section headers |
| body-large | Inter | 1.25rem | 400 | 1.5 | 0em | Lead paragraphs, descriptions |
| body | Inter | 1rem | 400 | 1.6 | 0em | General text, card descriptions |
| label | Inter | 0.875rem | 500 | 1.4 | 0.01em | Buttons, navigation labels, tags |
| navigation | Inter | 0.875rem | 400 | 1.5 | 0em | Footer links, secondary navigation |
| legal-copy | Inter | 0.75rem | 400 | 1.5 | 0em | Copyright, disclaimers, fine print |
| price-display | Inter | 2.5rem | 700 | 1 | -0.02em | Pricing amounts, numerical highlights |
| accent-italic | Poppins-Italic | 1rem | 400 | 1.6 | 0em | Occasional italic emphasis |

Inter is designed by Rasmus Andersson and distributed by Rsms. Plus Jakarta Sans is designed by Gumpita Rahayu and distributed by Tokotype. Poppins-Italic is designed by Jonny Pinhorn and distributed by Indian Type Foundry. Verify licensing for these families before production use.

The type scale uses a 4px relative unit, with sizes stepping in whole multiples. Display sizes employ tight leading and negative tracking for a compact, confident presence, while body sizes relax into more generous leading for readability. The weight range is intentionally narrow—400 and 500 handle most needs, with 700 reserved for display and price moments.

## Layout

The layout follows a centered content model with generous horizontal margins that frame the dark canvas. Content max-width appears to sit around 1200px, with internal grids using consistent gap spacing.

The pricing section demonstrates a three-column card grid with equal-width columns and uniform gaps between cards. Cards maintain internal padding that creates breathing room around content while keeping related elements visually connected. The grid collapses to single-column on narrower viewports, though the exact breakpoint is not visible in the supplied images.

Vertical rhythm uses section-level spacing of 6rem between major content areas, with 1.5rem gaps between related elements within a section. The footer expands into a multi-column link grid that organizes extensive navigation into scannable categories, with consistent column widths and aligned baselines.

The announcement banner spans full width with internal padding, sitting above the main content as a persistent promotional layer. Breadcrumb navigation appears below the banner with minimal vertical spacing, using a compact row with icon and text.

## Visual language

The visual language communicates precision and creative tooling through geometric clarity and restrained ornamentation. The Frameplate logo mark is a stark black-and-white geometric form—a right-pointing triangle within a rectangular frame—rendered with hard edges and no rounding, suggesting technical exactness.

Card surfaces are flat with no visible shadow, relying on border color and subtle background shifts to create separation. Rounding is moderate and consistent: cards use 0.75rem, buttons and inputs use 0.5rem, creating a family of related shapes without excessive softness. The pill shape appears only for the announcement banner and promotional badges, providing a distinct silhouette for temporary or highlighted content.

Iconography is minimal and functional, appearing as simple line icons for social links and breadcrumb navigation. The yellow support button introduces a rare warm accent that breaks the cool dark-purple palette for a specific call-to-action, drawing attention through hue contrast rather than size or position.

Wireframe illustrations within pricing cards use the same surface and border colors as the live interface, creating a meta-visual effect where the product preview matches the product itself. This recursive visual strategy reinforces the Framer-template focus of the platform.

## Components

### Announcement Banner

- **Anatomy**: Full-width bar containing promotional text, optional inline badge, and dismiss or action area
- **Surface**: Background uses banner-bg (#2d2a4a), a desaturated purple-tinted dark tone
- **Typography**: label token in banner-text color, with badge in action color
- **Shape**: pill border-radius (9999px) for the full bar, creating a capsule silhouette
- **Spacing**: Compact vertical padding, generous horizontal padding, text centered or left-aligned
- **Composition**: Sits at page top, above navigation and main content

### Pricing Card

- **Anatomy**: Card title, price display with duration suffix, description text, primary CTA button, and wireframe preview image
- **Surface**: surface background (#141414) with border (#262626) on all sides
- **Typography**: section-display for title, price-display for amount, body for description, label for CTA
- **Shape**: card border-radius (0.75rem), consistent internal padding
- **Spacing**: 1.5rem internal padding, content stacked with 1rem gaps between elements
- **Composition**: Equal-height cards in a three-column grid, CTA positioned above preview image
- **Variants**: Three tiers visible—Banner Ad ($97), Listing Ad ($77), Template Ad ($77)—differentiated by title, price, and preview wireframe content

### Primary Button

- **Anatomy**: Text label centered within a rectangular button
- **Surface**: action background (#7c5cfc), ink text (#ffffff)
- **Typography**: label token, medium weight, uppercase or title-case depending on context
- **Shape**: button border-radius (0.5rem), full-width within card context
- **Spacing**: 0.75rem vertical padding, 1.5rem horizontal padding
- **States**: Default appears fully saturated; hover would shift toward action-hover

### Secondary Button

- **Anatomy**: Text label on light background
- **Surface**: ink background (#ffffff), canvas text (#0a0a0a)
- **Typography**: label token, medium weight
- **Shape**: button border-radius (0.5rem)
- **Use**: Subscribe action in newsletter section, contrasting against dark surroundings

### Input Field

- **Anatomy**: Single-line text entry with placeholder text
- **Surface**: surface-elevated background (#1a1a1a), muted-ink placeholder text
- **Typography**: body token for entered text, muted color for placeholder
- **Shape**: input border-radius (0.5rem)
- **Spacing**: 0.75rem vertical padding, 1rem horizontal padding
- **Composition**: Paired with secondary button in newsletter form, with 0.5rem gap between elements

### Footer Navigation

- **Anatomy**: Logo and support button in left column, multiple link category columns to the right
- **Surface**: Transparent or canvas background, no visible card container
- **Typography**: label token for category headers (ink, medium weight), navigation token for links (muted-ink)
- **Spacing**: Generous top padding, 1.5rem gap between category columns, compact vertical spacing between links
- **Composition**: Asymmetric grid with brand area narrower than navigation area, legal copy and disclaimer below main grid

### Support Button

- **Anatomy**: Icon and text label in a compact button
- **Surface**: success background (#facc15), canvas or near-black text
- **Typography**: label token, medium weight
- **Shape**: button border-radius (0.5rem)
- **Use**: Distinct from primary action, reserved for donation/tipping context

## Responsive behavior

The three-column pricing grid should collapse to a single column on narrow viewports, with cards stacking vertically and maintaining full width. The footer navigation should reorganize from a multi-column horizontal layout to a stacked or accordion pattern, preserving category groupings while reducing horizontal space requirements.

The announcement banner text may truncate or wrap on smaller screens; the pill shape should adapt to content height. Newsletter form elements should stack vertically when horizontal space is constrained, with the input field expanding to full width and the button following below.

Typography should scale down modestly on smaller screens: hero-display reducing to 2rem, section-display to 1.5rem, while maintaining the same weight and tracking relationships. Touch targets for buttons and links should maintain minimum 44px height regardless of viewport size.

## Practical implementation guidance

### Preserve
- The dark canvas as the default and only mode—no light mode variant is visible
- The electric purple action color for all primary interactive moments
- The flat card aesthetic without shadows, relying on borders and background shifts
- The tight typographic hierarchy with bold display sizes and restrained body weights
- The geometric logo mark with its hard-edged, high-contrast form
- The recursive wireframe preview style within pricing cards

### Avoid
- Adding drop shadows to cards—the system achieves depth through color, not shadow
- Using the yellow success color for non-support contexts; reserve it for the specific donation CTA
- Introducing additional accent colors beyond the purple action and yellow success
- Rounding corners more aggressively than the established 0.75rem maximum for cards
- Using body text weight below 400 for any readable content

### Recommended Build Order
1. Establish the dark canvas and surface color tokens with proper contrast ratios
2. Implement Inter at all type scale steps, verifying legibility at body and label sizes
3. Build the pricing card component with correct internal spacing and border treatment
4. Create the primary button with action background and verify hover state color
5. Assemble the three-column pricing grid with equal heights and consistent gaps
6. Add the announcement banner with pill shape and promotional content
7. Implement the footer navigation with multi-column link organization
8. Add the newsletter section with input and secondary button pairing

### Accessibility
- Maintain minimum 4.5:1 contrast ratio for all body text against canvas and surface backgrounds
- Ensure the action purple against white text meets WCAG AA for interactive elements
- Provide visible focus indicators for all interactive elements, using a 2px outline in action color or white
- Use semantic heading hierarchy: single h1 per page, followed by h2 for card titles and section headers
- Add aria-label to icon-only buttons such as social links in the footer
- Ensure the yellow support button maintains sufficient contrast; the dark text on yellow should exceed 4.5:1

## Scope note

This guide covers the sponsor and advertise page surface of Frameplate, including the pricing tier presentation, newsletter signup, announcement banner, and footer navigation. Global header navigation, template listing pages, checkout flows, and mobile-specific layouts are not represented in the supplied images. Measurements are practical adaptation targets derived from visible proportions rather than extracted specifications.

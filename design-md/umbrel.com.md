# How umbrel.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/umbrel.com-design)

Last updated: 2026-08-10

## Captured pages

[![Umbrel Pro product page with dark hero, specs grid, and hardware photography on pure black background](https://pin.fontofweb.com/8095?format=jpg)](https://design.withfudge.com/share/pin-8095)

[Umbrel Pro product page with dark hero, specs grid, and hardware photography on pure black background](https://design.withfudge.com/share/pin-8095)

[![umbrelOS Files feature section with light background, app screenshot mosaic, and gradient card grid](https://pin.fontofweb.com/8094?format=jpg)](https://design.withfudge.com/share/pin-8094)

[umbrelOS Files feature section with light background, app screenshot mosaic, and gradient card grid](https://design.withfudge.com/share/pin-8094)

[![Developer community section with code editor screenshot, glassmorphism card, and blue CTA button](https://pin.fontofweb.com/8093?format=jpg)](https://design.withfudge.com/share/pin-8093)

[Developer community section with code editor screenshot, glassmorphism card, and blue CTA button](https://design.withfudge.com/share/pin-8093)

[![Footer area with four white rounded cards, email subscription form, and minimal footer navigation](https://pin.fontofweb.com/8092?format=jpg)](https://design.withfudge.com/share/pin-8092)

[Footer area with four white rounded cards, email subscription form, and minimal footer navigation](https://design.withfudge.com/share/pin-8092)

## Overview

Umbrel's visual system operates in two distinct modes that serve different storytelling needs. Product pages for hardware like Umbrel Pro employ a cinematic dark environment—pure black backgrounds, warm white typography, and generous negative space that lets product photography command attention. Software and feature pages for umbrelOS invert this into a bright, breathable experience with cool gray surfaces, layered cards with subtle depth, and a more information-dense layout. Both modes share a common vocabulary of pill-shaped buttons, rounded containers, and restrained accent color usage that keeps focus on content rather than decoration.

The design prioritizes clarity and trustworthiness for a technical audience. Typography is clean and modern, with Google Sans anchoring product storytelling and Inter handling denser software interfaces. The system uses elevation through layered shadows and glassmorphism effects rather than heavy borders or strong color contrasts. Navigation remains minimal and unobtrusive, typically appearing as a floating pill bar that blends into its surroundings.

## Colors

The color system is built around two primary modes: a dark cinematic mode for hardware products and a light airy mode for software features. Both share a small set of functional accents.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text on light backgrounds, dark mode backgrounds |
| ink-secondary | #242424 | Secondary text, card headings |
| ink-tertiary | #303030 | Tertiary text, subtle labels |
| canvas | #FFFFFF | Primary light background, dark mode text |
| canvas-warm | #FAFAFA | Subtle warm background variation |
| surface | #F7F7F7 | Elevated card backgrounds, footer areas |
| surface-elevated | #F1F2F3 | Higher elevation cards, gradient endpoints |
| surface-cool | #EEEEF1 | Cool-tinted section backgrounds |
| border | #DEDEDE | Hairline borders, dividers |
| border-subtle | #EDEDED | Very subtle separators |
| accent-blue | #5351F3 | Primary action buttons, links, active states |
| accent-blue-deep | #312EE9 | Gradient endpoints, hover states |
| accent-indigo | #0000EE | Deep link color, visited states |
| muted-ink | #69696E | Secondary body text on light backgrounds |
| muted-ink-light | #4C4C4F | Captions, metadata |
| shadow-ink | #0F0E29 | Shadow tinting for depth effects |
| shadow-deep | #10111B | Deep shadow layering |
| product-dark | #1E283B | Dark UI element backgrounds |
| highlight-warm | #D6DDE7 | Warm highlight tinting |
| highlight-cool | #D7DEE6 | Cool highlight tinting |

Dark mode pages use pure black (#000000) as the canvas with white text, creating maximum contrast for product photography. Light mode pages build from white through progressively warmer grays, with cards sitting on #F7F7F7 or #F1F2F3 surfaces. The accent blue appears sparingly—primarily for primary action buttons and active navigation states—keeping the palette restrained and professional. Shadows use a distinctive deep navy tint (#0F0E29) rather than pure black, creating softer, more sophisticated depth.

## Typography

The system uses multiple font families with clear role separation. Google Sans handles product marketing and display text with its friendly geometric character. Google Sans-500 and Google Sans-600 provide the Medium and Semibold weights used in buttons and headings. Inter manages software interfaces and denser reading contexts with excellent legibility at small sizes. System and System-Sansserif serve navigation and utility text where platform-native rendering is preferred.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Google Sans | 3rem | 600 | 1.1 | -0.02em | Product page headlines, hero statements |
| section-display | Google Sans | 2.25rem | 600 | 1.1 | -0.02em | Section headings on dark backgrounds |
| feature-headline | Inter | 2rem | 600 | 1.25 | -0.04em | Software feature headings |
| body-large | Inter | 1.125rem | 500 | 1.33 | -0.02em | Lead paragraphs, feature descriptions |
| body | Google Sans | 1rem | 400 | 1.5 | -0.02em | General body text, descriptions |
| body-small | Google Sans | 0.875rem | 400 | 1.3 | 0.01em | Specs, metadata, captions |
| label | Google Sans | 0.8125rem | 500 | 1.3 | 0em | Buttons, tags, labels |
| caption | Inter | 0.75rem | 500 | 1.2 | -0.02em | Small utility text, footer links |
| navigation | System | 0.75rem | 400 | 1 | 0em | Navigation bar items |

Google Sans is provided by Google Inc. Google Sans-500 and Google Sans-600 are weight variants from the same family, also provided by Google Inc. Inter has no listed vendor attribution. System and System-Sansserif are platform-native fallback families with no listed vendor. SF Pro is designed and provided by Apple Inc. Verify licensing for these families before production use.

Display sizes on dark product pages use tighter tracking (-0.02em to -0.04em) for a more refined, editorial feel. Body text maintains comfortable reading metrics with slightly negative tracking. The system avoids extreme weights, working primarily in 400, 500, and 600 to maintain consistency.

## Layout

The layout system uses a centered content model with generous horizontal padding and clear vertical rhythm. Dark product pages employ full-bleed sections with content constrained to a maximum width, creating dramatic negative space around product photography. Light software pages use contained card grids with consistent internal padding.

Section spacing follows a clear hierarchy: major sections receive 5rem to 6.25rem vertical padding, while content blocks within sections use 2rem gaps. Horizontal padding is consistently 2.5rem (40px) on contained sections, expanding to full viewport on immersive product imagery.

The grid system visible in product pages uses a centered multi-column layout for specs and features. On the Umbrel Pro page, technical specifications arrange in a clean grid with vertical dividers between columns, maintaining visual rhythm through consistent alignment rather than enclosing boxes.

Card layouts on software pages use a two-column grid for larger feature cards, with asymmetric layouts for mixed content—wider cards for primary features alongside narrower supporting cards. The footer area consolidates into a four-card grid with equal-height containers, each with internal padding of 1.875rem.

Navigation appears as a floating horizontal bar, pill-shaped with rounded corners, sitting above content with subtle shadow elevation. This bar uses a blurred background effect to maintain legibility while allowing content to show through.

## Visual language

The visual language balances technical credibility with approachable warmth. Product photography dominates dark pages, shot on black with dramatic lighting that emphasizes hardware materials—matte black surfaces, wood accents, and metallic ports. Software pages rely on screenshot mosaics and interface mockups, presented in rounded containers with soft shadows.

Depth is created through layered shadow systems rather than flat color blocks. Cards on light backgrounds use multi-layer shadows with subtle inset highlights, creating a pressed-glass or neumorphic quality. The effect combines outer shadows for elevation with inner shadows for surface texture, particularly visible on interactive cards and input fields.

Glassmorphism appears selectively—most notably in the developer section where a frosted card overlays a code editor screenshot. This treatment uses background blur with semi-transparent white fills, creating hierarchy without opaque blocking.

Gradients are minimal and functional: linear transitions from white to light gray for subtle surface variation, or blue gradients for primary action buttons. No dramatic angle gradients or vibrant color transitions appear in the system.

Iconography is simple and functional—arrow icons for external links, minimal interface icons in the navigation. The visual system avoids decorative illustration in favor of product photography and authentic interface screenshots.

## Components

### Primary action button

- **Anatomy**: Text label centered within a pill-shaped container
- **Surface**: Solid accent-blue (#5351F3) background with white text, or white background with dark text on dark surfaces
- **Typography**: {typography.label}
- **Shape**: Full pill radius ({rounded.pill})
- **Spacing**: Horizontal padding 1.25rem to 2rem, vertical padding approximately 0.625rem
- **Composition**: Often paired with secondary outline button, separated by 1rem margin
- **Variants**: Filled primary on light backgrounds; filled white or outline on dark backgrounds

### Secondary/outline button

- **Anatomy**: Text label within pill-shaped container with border
- **Surface**: Transparent background with 1px white border on dark surfaces, or dark border on light surfaces
- **Typography**: {typography.label}
- **Shape**: Full pill radius ({rounded.pill})
- **Spacing**: Same padding as primary button
- **Composition**: Positioned adjacent to primary button with 1rem left margin

### Feature card

- **Anatomy**: Rounded container with internal padding, optional icon or image, heading, description, and optional action link
- **Surface**: White (#FFFFFF) or surface (#F7F7F7) background with multi-layer shadow
- **Typography**: {typography.feature-headline} for titles, {typography.body-large} for descriptions
- **Shape**: 1.5rem to 3.75rem radius depending on context; larger radius for prominent cards
- **Spacing**: 1.875rem internal padding, 1.25rem gap between cards
- **Composition**: Grid arrangement with consistent heights; arrow icon in top-right for external links

### Glassmorphism overlay card

- **Anatomy**: Semi-transparent container with blur backdrop, containing heading, description, and action button
- **Surface**: Frosted white with background blur, subtle border
- **Typography**: {typography.feature-headline} and {typography.body-large}
- **Shape**: {rounded.card} radius
- **Spacing**: Generous internal padding, positioned to overlap underlying content
- **Composition**: Layered above screenshots or photography with significant shadow

### Navigation bar

- **Anatomy**: Horizontal pill-shaped container with logo, text links, and utility actions
- **Surface**: Blurred semi-transparent background, floating above page content
- **Typography**: {typography.navigation} for links
- **Shape**: Full pill radius, contained width with centered alignment
- **Spacing**: Horizontal padding approximately 1.25rem, link spacing distributed evenly
- **Composition**: Fixed or sticky positioning at top of viewport

### Email capture field

- **Anatomy**: Rounded input container with placeholder text and inline submit button
- **Surface**: White background with subtle shadow, or transparent with bottom border
- **Typography**: {typography.body} for input text, {typography.label} for submit button
- **Shape**: Full pill radius or {rounded.card} radius
- **Spacing**: Generous horizontal padding, submit button positioned at right edge
- **Composition**: Full-width within card container

### Specs grid

- **Anatomy**: Centered heading with multi-column data grid below, separated by vertical dividers
- **Surface**: Transparent on dark background
- **Typography**: {typography.hero-display} for spec values, {typography.body-small} for labels
- **Shape**: No containing border; vertical 1px dividers between columns
- **Spacing**: 3rem vertical gap between heading and grid, 2rem horizontal gap between columns
- **Composition**: Centered alignment, responsive to stack on narrow viewports

## Responsive behavior

The system adapts through proportional scaling and selective stacking. Navigation collapses from full horizontal links to a compact menu on narrow viewports. Card grids transition from multi-column to single-column stacking, maintaining internal padding and shadow treatments.

Typography scales down modestly: hero-display reduces from 3rem to approximately 2.25rem, feature-headline from 2rem to 1.5rem. Body text maintains 1rem minimum for readability. Section padding compresses from 6.25rem to 3.75rem vertically.

Product photography on dark pages remains full-bleed, with text overlays repositioning to avoid cropping critical image areas. Specs grids stack vertically with horizontal dividers replacing vertical ones.

The floating navigation bar maintains its pill shape but may reduce internal link visibility, showing only logo and primary action on the narrowest viewports.

## Practical implementation guidance

### Preserve
- The stark contrast between dark product pages and light software pages—this duality is central to the brand expression
- Multi-layer shadow systems with inset highlights; single flat shadows lose the refined depth
- Pill-shaped buttons and containers as the signature rounded element
- Generous negative space around product photography on dark backgrounds
- The restrained accent blue usage—sparing application maintains impact

### Avoid
- Adding vibrant accent colors beyond the blue family; the palette is intentionally muted
- Using sharp-cornered containers; the system relies on consistent rounding
- Flattening glassmorphism cards to opaque backgrounds
- Overcrowding dark product pages with too much text; let photography breathe
- Generic shadow values; the layered shadow system is distinctive

### Recommended build order
1. Establish the dual color modes (dark product / light software) with base tokens
2. Implement the pill-shaped button system with primary and secondary variants
3. Build the layered shadow system for cards and elevated surfaces
4. Create the navigation bar with blur backdrop and pill container
5. Develop card components with proper internal spacing and responsive grid behavior
6. Add typography hierarchy with Google Sans for display and Inter for body
7. Implement glassmorphism treatment for overlay cards
8. Fine-tune responsive behavior for navigation collapse and grid stacking

### Accessibility
- Maintain 4.5:1 minimum contrast for body text; the dark mode pure black/white pairing exceeds this
- Ensure focus indicators are visible on pill buttons; consider offset ring or background shift
- Provide text alternatives for product photography that conveys technical specifications
- Test glassmorphism cards for readability; ensure sufficient contrast between overlay text and blurred background
- Respect reduced-motion preferences for any scroll-triggered animations

## Scope note

This guide covers the marketing pages for Umbrel Pro hardware and umbrelOS software as visible in the supplied captures. It does not include the actual product interface, checkout flows, documentation pages, or mobile app designs. Interactive states beyond static presentation—hover, active, loading, error—are not documented. Motion design, video treatments, and responsive breakpoints below desktop width are not covered.

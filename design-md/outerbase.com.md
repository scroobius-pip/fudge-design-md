# How outerbase.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/outerbase.com-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with astronaut spacecraft illustration over Earth horizon and dark footer with green status indicator](https://pin.fontofweb.com/1950?format=jpg)](https://design.withfudge.com/share/pin-1950)

[Hero section with astronaut spacecraft illustration over Earth horizon and dark footer with green status indicator](https://design.withfudge.com/share/pin-1950)

[![Security features grid with eight capability cards and repeated spacecraft hero illustration](https://pin.fontofweb.com/1949?format=jpg)](https://design.withfudge.com/share/pin-1949)

[Security features grid with eight capability cards and repeated spacecraft hero illustration](https://design.withfudge.com/share/pin-1949)

[![Data Catalog feature section with modal dialog showing form inputs and feature icon cards](https://pin.fontofweb.com/1948?format=jpg)](https://design.withfudge.com/share/pin-1948)

[Data Catalog feature section with modal dialog showing form inputs and feature icon cards](https://design.withfudge.com/share/pin-1948)

[![Database connections grid with pixel-art database logos and underwater MySQL card highlight](https://pin.fontofweb.com/1947?format=jpg)](https://design.withfudge.com/share/pin-1947)

[Database connections grid with pixel-art database logos and underwater MySQL card highlight](https://design.withfudge.com/share/pin-1947)

## Overview

Outerbase presents a dark, immersive interface for database management that leans heavily into a space exploration metaphor. The visual system pairs a near-black canvas with crisp white typography, punctuated by a single vibrant green accent for status indicators and interactive highlights. Pixel-art illustrations of spacecraft, astronauts, and database logos reinforce a retro-futuristic personality that distinguishes the product from conventional enterprise software. The layout prioritizes dramatic hero sections with oversized display type, followed by structured feature grids and dense footer navigation. Every section maintains generous breathing room, letting the dark canvas absorb visual weight while content elements float with deliberate precision. The overall impression is of a technical tool that refuses to feel corporate—playful without sacrificing clarity, ambitious without clutter.

## Colors

The color system is intentionally austere: a near-black foundation with white text, a single green accent, and a narrow range of grays for structural elements. This restraint amplifies the impact of the pixel-art illustrations and creates a cinematic depth that suits the space theme.

| token | value | use |
|---|---|---|
| canvas | #000000 | Primary page background, hero sections, footer |
| surface | #1a1a1a | Elevated cards, database connection tiles |
| surface-elevated | #242424 | Modal dialogs, focused input states |
| ink | #ffffff | Primary headings, body text, icons |
| muted-ink | #a3a3a3 | Secondary descriptions, footer links, captions |
| action | #22c55e | Status indicators, success states, live badges |
| action-muted | #15803d | Hover or pressed states for action elements |
| border | #404040 | Visible card outlines, modal borders, input borders |
| border-subtle | #262626 | Divider lines, inactive card borders |

The green accent appears sparingly—most notably in the "All systems normal" status pill and potentially in focus states. The grayscale progression from canvas through surface to surface-elevated creates a subtle depth hierarchy without introducing competing hues. White text maintains consistent readability across all dark backgrounds, while muted-ink provides a clear secondary information tier without the harshness of pure gray. The system assumes a permanently dark mode; no light-mode equivalent is visible in the supplied material.

## Typography

The interface uses Inter as its sole typeface, deployed in a tightly controlled weight range that emphasizes clarity at display sizes and restraint in body contexts. The type scale is built on a 4px relative unit, with sizes snapping to whole-number multiples.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Inter | 4rem | 700 | 1.1 | -0.02em | Main hero headlines, "What will you discover?" |
| section-display | Inter | 3rem | 700 | 1.15 | -0.02em | Section headings, "Secure at any scale", "Bring your own database" |
| body-large | Inter | 1.25rem | 400 | 1.5 | 0 | Introductory paragraphs, hero subcopy |
| body | Inter | 1rem | 400 | 1.6 | 0 | Feature descriptions, form labels, modal content |
| label | Inter | 0.875rem | 500 | 1.4 | 0 | Navigation links, button text, feature titles |
| caption | Inter | 0.75rem | 400 | 1.5 | 0 | Status badges, footer legal, small metadata |

Display sizes use tight negative tracking for a compact, confident presence that matches the technical ambition of the product. Body text maintains neutral tracking and generous line height for sustained readability. The weight range is limited to 400 Regular and 700 Bold, with 500 Medium appearing in label contexts for subtle emphasis. No italic styles are employed. Verify licensing for these families before production use. Inter was designed by Rasmus Andersson and is available from Rsms.

## Layout

The page follows a full-width, edge-to-edge composition with content constrained to a central column. Sections stack vertically with substantial vertical rhythm, typically 6rem or more between major blocks. The hero section occupies the full viewport height, with text positioned in the upper-left quadrant and illustrative elements anchored to the right edge, creating an asymmetrical balance that draws the eye across the dark expanse.

Feature grids use a consistent four-column pattern for security capabilities and a three-column pattern for data catalog features, with equal gutters and no outer margins at the container edge. Database connections arrange in a responsive grid of five and five, with the active MySQL card spanning a larger footprint to indicate selection state. The footer compresses into a multi-column link farm with a narrow left column for branding and status, and wider right columns for categorized navigation.

Modal dialogs center vertically and horizontally, overlaying the page with a subtle darkening treatment. They maintain a fixed width with internal padding that mirrors card spacing. Form inputs stack vertically with consistent label-to-field gaps and required indicators in the action color.

## Visual language

The defining visual characteristic is the collision of cinematic space photography with deliberately lo-fi pixel art. The spacecraft illustration—rendered in a blocky, 8-bit style with an orange pixelated exhaust trail—contrasts against photorealistic Earth horizons and star fields. This tension between high-fidelity photography and retro digital graphics creates a distinctive personality that signals technical sophistication without pomposity.

Iconography follows the pixel-art convention throughout: database logos for Postgres, MySQL, SQLite, MongoDB, and others are rendered as white line-art icons with a blocky, low-resolution aesthetic. Feature icons in the security and data catalog sections use simple geometric shapes in muted tones, avoiding gradient or dimensional treatments.

Photographic imagery appears in two modes: expansive hero backgrounds that bleed to all edges with subtle darkening overlays, and contained card thumbnails like the underwater MySQL scene that use rounded corners and internal padding. The database card hover state reveals a photographic treatment, suggesting depth and discovery.

Motion is implied through the spacecraft's trailing pixels and the dynamic composition of hero sections, though no explicit animation parameters are visible. The visual system would support subtle parallax on scroll and gentle fade transitions between sections.

## Components

### Hero section

The hero section combines a full-bleed background image with left-aligned text and a right-floating illustration. The headline uses hero-display typography in white, stacked across two lines with a natural break point. Below, a pill-shaped button with a light surface background and dark text provides the primary call to action. The spacecraft illustration breaks the section boundary, extending into adjacent content areas to create visual continuity.

- **Anatomy**: Background layer, text block (headline, optional subcopy, action button), floating illustration
- **Surface**: Canvas background with photographic overlay
- **Typography**: Hero-display for headline, label for button
- **Shape**: Full-bleed rectangle, pill button
- **Spacing**: Generous internal padding, text offset from left edge

### Feature card

Feature cards appear in grid formations with minimal chrome. Each card contains an icon, a title in label typography, and a description in body size with muted-ink color. Cards have no visible background by default, sitting directly on the canvas, though some variants use a subtle border treatment.

- **Anatomy**: Icon container, title, description paragraph
- **Surface**: Transparent or subtle border
- **Typography**: Label for title, body for description
- **Shape**: Rectangular with optional rounded corners
- **Spacing**: Consistent internal padding, uniform grid gaps

### Status badge

A compact pill indicator used for system health and live states. The "All systems normal" variant uses a green dot prefix, transparent background, and green border with green text.

- **Anatomy**: Status dot, text label
- **Surface**: Transparent with colored border
- **Typography**: Caption size
- **Shape**: Full pill (9999px radius)
- **Variants**: Success (green), likely error and warning states in other hues

### Database connection card

Grid items for database integrations, featuring a pixel-art logo icon and database name in muted-ink. The active state reveals a photographic background with overlaid white text and a directional arrow, dramatically increasing visual weight.

- **Anatomy**: Icon, label, active state with background image and arrow
- **Surface**: Surface color default, photographic image active
- **Typography**: Label for name
- **Shape**: Rounded panel corners
- **Spacing**: Centered content, generous internal padding

### Modal dialog

Centered overlay for form interactions, with a dark elevated surface, visible border, and internal padding. The header contains a title and close control, followed by descriptive text and stacked form fields.

- **Anatomy**: Header (title, close button), description, form fields, action button
- **Surface**: Elevated surface with border
- **Typography**: Label for title, body for description and inputs
- **Shape**: Rounded panel corners
- **Spacing**: Consistent internal padding, vertical stack with field gaps

### Text input

Dark form fields with visible borders and internal padding. Labels appear above inputs in body size with required indicators in action color. Placeholder text uses muted-ink.

- **Anatomy**: Label, input field
- **Surface**: Canvas background with border
- **Typography**: Body for value, muted-ink for placeholder
- **Shape**: Rounded input corners
- **States**: Default, focused (likely elevated surface or accent border)

## Responsive behavior

The layout assumes a desktop-first presentation with substantial horizontal space. At narrower viewports, the four-column security grid should collapse to two columns and then single column, maintaining card internal spacing. The hero section's asymmetric composition requires rebalancing: the spacecraft illustration likely scales down or repositions below the text stack. Database connection grids should wrap from five-across to three-across and then two-across, with the active card potentially spanning full width on smallest screens. Footer navigation columns should stack vertically, preserving category groupings. Typography should scale down proportionally: hero-display reducing to section-display size, section-display to body-large, maintaining the weight and tracking relationships. Touch targets for database cards and buttons should maintain at least 44px minimum dimension.

## Practical implementation guidance

### Preserve
- The stark black canvas as the dominant background; any lightening weakens the space metaphor
- The single green accent for status and success; resist adding a secondary brand color
- The pixel-art illustration style for icons and hero graphics; substituting smooth vector art loses the distinctive personality
- The tight negative tracking on display sizes; this compactness is essential to the confident tone
- The generous section spacing that lets dark areas breathe

### Avoid
- Introducing gradients or shadows as primary depth cues; the flat, dark aesthetic relies on border and surface differentiation
- Light mode without complete recoloring; the green accent lacks sufficient contrast on light backgrounds
- Rounded corners larger than the panel token; the system uses restrained radii that feel technical, not friendly
- Multiple font families; Inter carries the full typographic load successfully
- Decorative elements that compete with the pixel-art illustrations

### Recommended build order
1. Establish the canvas background and Inter font loading with full weight range
2. Implement the type scale with display, body, and label tokens
3. Build the hero section with background handling and text positioning
4. Create the feature card component with icon, title, and description pattern
5. Implement the database grid with default and active card states
6. Add the modal dialog with form input stack and overlay behavior
7. Polish with status badge, footer layout, and responsive breakpoints

### Accessibility
- Maintain a minimum 4.5:1 contrast ratio for all text; white on black exceeds this, but muted-ink on surface may need verification
- Ensure the green status indicator is not the sole means of conveying state; pair with text labels
- Provide visible focus indicators on interactive elements, likely using the action color border
- Add aria-labels to icon-only database connection cards
- Consider reduced-motion preferences for any parallax or scroll-triggered effects
- Test modal dialog focus trapping and escape key dismissal

## Scope note

This guide covers the Outerbase marketing homepage visible in the supplied images, including hero sections, feature grids, database connections, modal dialogs, and footer navigation. Mobile layouts, component hover states, form validation, loading indicators, and additional interior pages are not represented. Measurements are practical adaptation targets derived from visual inspection against a 4px relative unit grid.

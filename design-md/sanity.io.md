# How sanity.io is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/sanity.io-design)

Last updated: 2026-08-10

## Captured pages

[![Dark testimonial section with G2 badges and blue accent quote text on black background](https://pin.fontofweb.com/624?format=jpg)](https://design.withfudge.com/share/pin-624)

[Dark testimonial section with G2 badges and blue accent quote text on black background](https://design.withfudge.com/share/pin-624)

[![Code recipe cards with syntax-highlighted terminals on dark background showing automation examples](https://pin.fontofweb.com/623?format=jpg)](https://design.withfudge.com/share/pin-623)

[Code recipe cards with syntax-highlighted terminals on dark background showing automation examples](https://design.withfudge.com/share/pin-623)

[![Hero section with large display heading and code editor mockup showing blueprint.json](https://pin.fontofweb.com/622?format=jpg)](https://design.withfudge.com/share/pin-622)

[Hero section with large display heading and code editor mockup showing blueprint.json](https://design.withfudge.com/share/pin-622)

[![Blog grid with category filters, article cards, author avatars, and date metadata](https://pin.fontofweb.com/620?format=jpg)](https://design.withfudge.com/share/pin-620)

[Blog grid with category filters, article cards, author avatars, and date metadata](https://design.withfudge.com/share/pin-620)

## Overview

Sanity's design system presents a dark-first developer platform built around code-centric storytelling. The visual language establishes immediate technical credibility through near-black backgrounds, electric blue accents, and monospace typography that echoes integrated development environments. The system balances editorial warmth with engineering precision: display headings use a distinctive serif-like custom typeface that softens the technical surface, while IBM Plex Mono handles labels, metadata, and code samples with mechanical clarity.

The interface organizes content in generous vertical sections with substantial breathing room between functional areas. Code examples appear as elevated cards with syntax highlighting, often positioned beside explanatory text in asymmetric two-column layouts. Testimonials and social proof integrate through quote blocks that use the action blue as a voice color rather than a background, creating moments of visual energy without disrupting the dark canvas. The overall impression is of a tool built by developers for developers—sophisticated, confident, and unafraid of technical depth.

## Colors

The color system operates on a dark-mode-only principle with a disciplined palette of grays punctuated by electric blue. The near-black canvas creates immersive focus for code and content, while the blue accent carries semantic weight as both interactive indicator and expressive highlight.

| token | value | use |
|---|---|---|
| canvas | #141414 | Primary page background, deepest layer |
| surface | #1a1a1a | Card backgrounds, secondary containers |
| surface-elevated | #1f1f1f | Code blocks, elevated panels, hover states |
| ink | #f5f5f5 | Primary text, headings, active filters |
| ink-muted | #a3a3a3 | Secondary text, descriptions, inactive labels |
| ink-dim | #737373 | Tertiary metadata, timestamps, captions |
| action | #2563eb | Primary buttons, quote text, links, active indicators |
| action-hover | #3b82f6 | Button hover, link hover, interactive emphasis |
| border | #2a2a2a | Card borders, dividers, structural separators |
| border-subtle | #1f1f1f | Invisible borders, subtle elevation boundaries |
| success | #22c55e | Positive states, confirmation indicators |
| warning | #eab308 | Caution states, beta labels |

The dark canvas creates a continuous field that allows code syntax highlighting and photographic content to appear luminous by contrast. The action blue functions dually: in interface elements it signals interactivity, while in editorial contexts like testimonials it becomes an expressive voice color that breaks the monochrome rhythm. Gray values progress in tight steps from canvas through surface to elevated states, maintaining subtle material depth without visual noise. No light-mode variant is visible in the supplied surfaces.

## Typography

The type system pairs a distinctive display serif with a utilitarian monospace, creating tension between editorial personality and technical function. Kmr Waldenburg-Normal serves all proportional text with a slightly condensed, high-contrast character that reads as modern and confident. IBM Plex Mono handles all fixed-width needs including labels, code, and metadata.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Kmr Waldenburg-Normal | 4rem | 400 | 1.05 | -0.03em | Page heroes, major section openings |
| section-display | Kmr Waldenburg-Normal | 2.5rem | 400 | 1.1 | -0.02em | Section headings, feature titles |
| heading | Kmr Waldenburg-Normal | 1.5rem | 400 | 1.2 | -0.01em | Card titles, article headlines |
| body | Kmr Waldenburg-Normal | 1rem | 400 | 1.6 | 0 | Paragraphs, descriptions |
| body-small | Kmr Waldenburg-Normal | 0.875rem | 400 | 1.5 | 0 | Compact descriptions, captions |
| label | IBM Plex Mono | 0.75rem | 400 | 1.4 | 0.05em | Category tags, buttons, navigation |
| code | IBM Plex Mono | 0.875rem | 400 | 1.6 | 0 | Code blocks, inline syntax |

Display sizes use tight negative tracking that increases with scale, creating visual density in headlines without crowding. The hero display at 4rem establishes commanding presence at section openings. Body text maintains generous line height for readability in longer passages. Labels set in monospace with positive tracking achieve an all-caps mechanical rhythm without actual case transformation. Code blocks preserve syntax highlighting colors—cyan for strings, yellow for keywords, pink for properties—against dark surfaces.

IBM Plex Mono is designed by Mike Abbink, Paul Van Der Laan, and Pieter Van Rosmalen, available from Bold Monday. Verify licensing for these families before production use.

## Layout

The layout system builds on a fluid container with generous section spacing and asymmetric content relationships. Sections stack vertically with substantial separation, often introducing horizontal rules or background shifts to mark boundaries.

The page grid uses a central content column with maximum width constraints, flanked by ample margins that expand on larger viewports. Within sections, two-column compositions place editorial text on the left and code examples or imagery on the right, with the visual element frequently breaking into the margin or scaling beyond the text column width. This asymmetry creates dynamic tension and emphasizes the technical artifacts.

Card grids organize in three-column formations for recipe showcases and blog listings, with consistent internal padding and uniform heights within rows. Filter navigation sits above grids as a horizontal scroll or wrap of pill buttons, left-aligned with the content below.

Spacing follows a 4px base unit translated to 0.25rem. Section vertical padding uses 6rem to create dramatic breathing room between functional areas. Content gaps within sections measure 1.5rem. Card internal padding holds at 1.5rem, providing comfortable text margins without excessive bulk.

Navigation appears fixed or persistently available, with logo left and utility links right. The blog index shows category filtering as a pill row beneath the header area, with active states receiving subtle background elevation.

## Visual language

The visual identity centers on code as content and dark surfaces as default. Interface elements avoid decorative gradients and shadows, relying instead on border subtleties and background elevation changes to create material depth. The aesthetic is intentionally restrained—no blur effects, no glassmorphism, no animated backgrounds—allowing technical content to command attention.

Photography and avatars appear as circular crops with consistent sizing, providing human warmth against the technical surface. Code examples receive special treatment: rounded containers with internal padding, line numbers, syntax highlighting, and occasionally a window-chrome header suggesting a terminal or editor context. These code cards often float beside explanatory text, creating a split-focus composition that rewards technical readers.

The blue accent appears sparingly but strategically: primary buttons, active filter states, link underlines, and most expressively in large testimonial quotes where it transforms into a voice color. This disciplined use prevents the action color from becoming decorative noise while ensuring it carries semantic weight when deployed.

Iconography appears minimal and functional, favoring simple geometric marks over illustrative sets. The arrow-in-circle pattern used for external links repeats as a recognizable interaction motif.

## Components

### Primary Button

- **Anatomy**: Text label with optional trailing icon
- **Surface**: Solid action blue background
- **Typography**: Label token in monospace, uppercase rhythm
- **Shape**: 0.5rem border radius, generous horizontal padding
- **Spacing**: 0.75rem vertical, 1.5rem horizontal
- **States**: Hover lightens to action-hover; active state not visible

### Secondary Button

- **Anatomy**: Text label with transparent background
- **Surface**: Transparent with subtle border
- **Typography**: Label token
- **Shape**: 0.5rem border radius
- **Spacing**: Matches primary button dimensions
- **Composition**: Used in pairs with primary or standalone for lower-emphasis actions

### Card

- **Anatomy**: Container with optional header, body text, and footer metadata
- **Surface**: Surface background with subtle border
- **Typography**: Heading token for titles, body-small for descriptions
- **Shape**: 0.5rem border radius
- **Spacing**: 1.5rem internal padding
- **Variants**: Blog cards include category tags and author avatars; recipe cards include code preview thumbnails

### Code Block

- **Anatomy**: Container with optional filename header, line-numbered content area
- **Surface**: Surface-elevated background, slightly lighter than surrounding cards
- **Typography**: Code token with syntax highlighting
- **Shape**: 0.75rem border radius, larger than standard cards
- **Spacing**: 1.5rem padding
- **Composition**: Often positioned right of editorial text in two-column layouts; occasionally full-width

### Filter Pill

- **Anatomy**: Text label in rounded container
- **Surface**: Surface background, transitioning to surface-elevated with border when active
- **Typography**: Label token
- **Shape**: Full pill radius
- **Spacing**: 0.5rem vertical, 1rem horizontal
- **Composition**: Horizontal row with 0.5rem gap between pills; left-aligned above content grids

### Testimonial Quote

- **Anatomy**: Large quotation text with attribution below
- **Surface**: Transparent, inheriting section background
- **Typography**: Section-display token in action blue color
- **Shape**: No border; left border accent visible in some variants
- **Spacing**: Generous vertical padding within section
- **Composition**: Attribution includes circular avatar, name in label style, and role in muted text

### Blog Card

- **Anatomy**: Category tag row, title, excerpt, author avatar with name, date
- **Surface**: Surface background with border
- **Typography**: Heading for title, body-small for excerpt, label for category and date
- **Shape**: 0.5rem border radius
- **Spacing**: 1.5rem padding
- **Composition**: Three-column grid with 1.5rem gap; tags left-aligned, date right-aligned in header row

## Responsive behavior

The layout system appears optimized for desktop presentation with substantial viewport width. The two-column editorial-code compositions likely stack vertically on narrower viewports, with code blocks moving below explanatory text to maintain reading order. The three-column card grids should collapse to two columns at medium widths and single column on mobile, with horizontal scroll for filter pills when space constrains wrapping.

Typography scales down proportionally: hero display should reduce to section-display size on tablet, then heading size on mobile to prevent overflow. Line length controls remain important—the generous body line height supports readability, but container widths should constrain to approximately 65 characters for comfortable reading.

Touch targets for filter pills and buttons should maintain minimum 44px height regardless of viewport. Code blocks should become horizontally scrollable rather than shrinking text to illegible sizes.

## Practical implementation guidance

### Preserve
- The dark-first canvas as default; avoid introducing light backgrounds that break the immersive technical atmosphere
- The pairing of serif-like display type with monospace functional type; this contrast defines the brand voice
- Syntax highlighting colors in code blocks; these are content, not decoration
- Generous section spacing; the vertical rhythm creates premium perception
- The asymmetric two-column compositions with code right; this pattern repeats across multiple surfaces

### Avoid
- Adding shadows or glows to create depth; the system uses borders and background steps exclusively
- Using the action blue for large background fills; it functions best as text color and small-area accent
- Introducing additional font families; the two-family system is tightly controlled
- Decorative gradients behind code cards; the flat dark surfaces are intentional
- Shrinking body text below 1rem for readability on dark backgrounds

### Recommended Build Order
1. Establish the dark canvas and surface color stack with border definitions
2. Implement the type system with both families at all defined sizes
3. Build the code block component with syntax highlighting and proper spacing
4. Create card variants for blog and recipe content
5. Implement the two-column section layout pattern
6. Add filter pill navigation and button components
7. Polish with testimonial quote styling and avatar treatments

### Accessibility
- Maintain minimum 4.5:1 contrast ratio for all body text against dark backgrounds; the ink and ink-muted tokens should be verified
- Ensure code blocks do not rely solely on color for syntax meaning; consider additional semantic markup
- Provide visible focus indicators for keyboard navigation that exceed default browser outlines
- Test filter pill active states for clear differentiation beyond color alone
- Consider reduced-motion preferences for any scroll-triggered section reveals

## Scope note

This guide covers the dark-mode marketing and blog surfaces visible in the supplied images, including the Functions feature page and Blog index. Light-mode variants, mobile-specific layouts, animation specifications, form components, and the Sanity Studio application interface are not represented. Measurements are practical adaptation targets derived from visual inspection.

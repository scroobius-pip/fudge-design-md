# How micro.so is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/micro.so-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with AI assistant headline and three feature cards showing product UI screenshots on dark background](https://pin.fontofweb.com/8733?format=jpg)](https://design.withfudge.com/share/pin-8733)

[Hero section with AI assistant headline and three feature cards showing product UI screenshots on dark background](https://design.withfudge.com/share/pin-8733)

[![Integrations section with orbiting app icons around a central blue ring and four-column feature grid below](https://pin.fontofweb.com/8732?format=jpg)](https://design.withfudge.com/share/pin-8732)

[Integrations section with orbiting app icons around a central blue ring and four-column feature grid below](https://design.withfudge.com/share/pin-8732)

[![Bento grid layout with six feature cards including collaboration, style themes, security certification, and mobile preview](https://pin.fontofweb.com/8731?format=jpg)](https://design.withfudge.com/share/pin-8731)

[Bento grid layout with six feature cards including collaboration, style themes, security certification, and mobile preview](https://design.withfudge.com/share/pin-8731)

[![Founder letter section with Perfectly Nineties italic typography and handwritten signature on dark background](https://pin.fontofweb.com/8730?format=jpg)](https://design.withfudge.com/share/pin-8730)

[Founder letter section with Perfectly Nineties italic typography and handwritten signature on dark background](https://design.withfudge.com/share/pin-8730)

## Overview

Micro's landing page presents a unified workspace tool through a dark, immersive visual environment. The design prioritizes clarity and technical credibility: near-black backgrounds create depth, while high-contrast white and light-gray typography ensures readability. The page structure moves from a bold hero statement through product demonstrations, integration showcases, feature grids, and a personal founder letter. Visual hierarchy is established through scale rather than color variation—large Haffer display type dominates headlines, while a secondary serif face introduces warmth in editorial moments. The overall impression is of a precise, modern productivity tool: restrained in decoration, confident in presentation, and structured around generous whitespace that lets product screenshots and feature cards breathe.

## Colors

The palette is fundamentally monochromatic with strategic accent use. Dark surfaces dominate, creating a cinematic depth that makes product imagery and interface screenshots appear to float.

| token | value | use |
|---|---|---|
| canvas | #0A0A0A | Page background, deepest layer |
| surface | #111111 | Primary card and container backgrounds |
| surface-elevated | #1C1C1C | Elevated cards, hover states, button fills |
| surface-highlight | #282828 | Integration icon tiles, subtle highlights |
| ink | #F2F2F2 | Primary text, headlines, body copy |
| ink-secondary | #828282 | Descriptions, captions, metadata |
| accent-blue | #518BDB | Links, interactive highlights, integration ring |
| accent-green | #7EFA55 | Success states, verification badges |
| border | #FFFFFF | Primary button borders, emphasis dividers |
| border-subtle | #1E1E1E | Card borders, hairline separators |

The system operates in a single dark mode. Light values are reserved for text and borders only—there is no light-background surface. Product screenshots within cards introduce their own color (blues from email interfaces, greens from status indicators), but these are content-derived rather than system accents. The blue accent appears sparingly, primarily in interactive elements and the central integration visualization. Green appears only in certification and success contexts.

## Typography

Two families create the typographic tension: Haffer provides the rational, technical voice, while Perfectly Nineties introduces an editorial, human quality for quotes and founder communications.| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Haffer | 6rem | 900 | 1 | normal | Main hero headline |
| section-display | Haffer | 3rem | 800 | 1 | normal | Section headlines |
| body | Haffer | 1rem | 400 | 1.5 | normal | Default body text |
| body-large | Haffer | 1.125rem | 400 | 1.556 | normal | Lead paragraphs |
| body-small | Haffer | 0.875rem | 400 | 1.429 | normal | Secondary descriptions |
| label | Haffer | 0.75rem | 600 | 1.333 | normal | Tags, badges, button text |
| quote | Perfectly Nineties | 1.875rem | 400 | 1.625 | 0.02em | Founder letter, editorial |

Haffer appears in weights 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold), 800 (Heavy), and 900. The 800 and 900 weights are reserved for display headlines, creating an assertive, almost poster-like impact. Body text remains at 400 for neutrality. Perfectly Nineties appears only at 400 weight with positive letter-spacing, giving it an open, literary quality that contrasts with Haffer's tight precision.

Verify licensing for these families before production use. Haffer is designed by Martin Vácha for Displaay Type Foundry. Perfectly Nineties is designed by Jen Wagner Co. Pp Fraktion Mono is designed by Juri Zaech for Pangram Pangram. No attribution is supported for Tobias or System-Uimonospace.

## Layout

The page uses a centered content column with generous horizontal margins. The main content width is approximately 34.5rem (552px) centered, with wider sections expanding to roughly 55rem (880px) for feature grids. Horizontal padding of 3rem (48px) frames the content on both sides.

Vertical rhythm is spacious and deliberate. Major sections are separated by 6rem to 10rem of padding. The hero section carries substantial top padding (10rem) to create breathing room before the headline. Feature grids use consistent 1.5rem gaps between cards.

The bento-grid layout organizes feature cards in asymmetric arrangements: some cards span full width, others sit in two-column or three-column configurations. Cards maintain internal padding of 2rem, with content aligned to top-left. Product screenshots within cards often break the padding boundary, bleeding to edges or floating with negative margins to create depth.

Integration icons are arranged in a radial, orbital pattern around a central blue ring element, suggesting connectivity and network effects. This is the page's most dynamic compositional element, contrasting with the otherwise rectilinear grid.

## Visual language

Imagery and interface screenshots are presented as dark-mode product UI, often with subtle glow effects and layered cards that suggest depth. Screenshots frequently show email inboxes, contact records, and task lists in their own dark interfaces, creating nested darkness that unifies product and marketing surfaces.

The visual texture is minimal: no gradients on surfaces, no background patterns, no decorative illustrations beyond the functional integration icons. Depth is created through layering—cards on canvas, elevated cards on cards, screenshots with subtle shadows. A soft shadow system uses oklab black at low opacity (0.065) for elevation: small shadows for cards (1px 3px), medium for floating elements (10px 15px), and large for emphasis (25px 50px).

Borders are hairline-precise: 1px solid in either white or near-black, functioning as structural definition rather than decoration. Rounded corners are minimal—2px on most cards, creating a sharp, technical feel rather than friendly softness.

The founder letter introduces the only organic element: a handwritten signature in white, contrasting with the typeset body and adding personal authenticity to the corporate presentation.

## Components

### Feature card

- **Anatomy**: Container with optional header text, body description, and product screenshot or icon
- **Surface**: backgroundColor `{colors.surface}`, 1px solid border `{colors.border-subtle}`, 2px border radius
- **Typography**: Section label uses `{typography.label}` in Semibold; description uses `{typography.body-small}` in ink-secondary
- **Shape**: Sharp 2px radius corners
- **Spacing**: 2rem internal padding; screenshots may bleed or float with negative margins
- **Composition**: Cards tile in bento arrangements—some full-width, some half-width, some with internal grid splits

### Integration orb

- **Anatomy**: Central blue ring with orbiting application icon tiles
- **Surface**: Icon tiles use `{colors.surface-highlight}` with 1px subtle border
- **Typography**: No text within orb; labels appear in surrounding grid
- **Shape**: Circular ring (approximately 80px diameter), square icon tiles with 2px radius
- **Composition**: Radial arrangement with roughly 12 icons in three orbital rings; icons appear to float at varying depths

### Primary button

- **Anatomy**: Text label with optional icon
- **Surface**: Transparent or `{colors.surface-elevated}` fill, 1px white border
- **Typography**: `{typography.label}` in Semibold, ink color
- **Shape**: 2px radius corners, minimal pill-like quality
- **Spacing**: Compact horizontal padding (approximately 0.75rem 1.5rem)
- **Variants**: Default state with border; filled state for emphasis

### Founder letter

- **Anatomy**: Block of editorial text with inline links, handwritten signature, avatar, and attribution
- **Surface**: Transparent on canvas background
- **Typography**: `{typography.quote}` in Perfectly Nineties for body; Haffer Regular for attribution
- **Composition**: Left-aligned text block, signature below, avatar with name and title at bottom

### Navigation header

- **Anatomy**: Logo, navigation links, and CTA button
- **Surface**: Transparent or near-transparent on scroll
- **Typography**: Haffer Regular at 14px for links, Semibold for active states
- **Spacing**: Horizontal padding matching content column, vertical padding approximately 1.25rem

## Responsive behavior

The design is documented from desktop viewport widths. The centered content column and 48px horizontal padding suggest a responsive approach where:

- Content column narrows proportionally on smaller viewports
- Bento grids collapse from multi-column to single-column arrangements
- Hero headline scales down from 96px, likely to 72px and then 48px
- Integration orb may simplify to a linear grid of icons on narrow screens

Implementation should maintain the dark canvas across all breakpoints. Touch targets for buttons and links should expand to minimum 44px height on mobile. Card padding can reduce to 1.5rem on narrow viewports to preserve content density.

## Practical implementation guidance

### Preserve
- The near-black canvas as the dominant surface; never introduce a light background mode
- The sharp 2px corner radius on cards and buttons—this is a defining technical aesthetic
- The weight contrast between 400 body and 800/900 display type
- The two-family typographic system: Haffer for UI, Perfectly Nineties for editorial moments
- Generous vertical spacing between sections; crowding destroys the premium feel

### Avoid
- Rounding corners beyond 2px for primary surfaces; pills are reserved for special badges only
- Introducing additional accent colors beyond the documented blue and green
- Lightening the canvas background; the depth depends on genuine darkness
- Decorative gradients or patterns behind content
- Generic stock photography; product screenshots are the only imagery

### Recommended build order
1. Establish the dark canvas and content column width with horizontal padding
2. Implement Haffer at all weights and sizes, verifying rendering at 900 weight
3. Build the hero section with display type and lead paragraph
4. Create the feature card component with border, padding, and screenshot handling
5. Construct the bento grid with responsive column logic
6. Add the integration section with orbital icon arrangement
7. Implement the founder letter with Perfectly Nineties and signature
8. Polish with shadow system and micro-interactions

### Accessibility
- Maintain minimum 4.5:1 contrast for all body text (ink on canvas exceeds this)
- Ensure interactive elements have visible focus indicators; the minimal border style may need enhancement
- Provide reduced-motion alternatives for the integration orb animation
- Use semantic heading hierarchy: h1 for hero, h2 for sections, h3 for card titles

## Scope note

This guide covers the Micro landing page's marketing surface: hero, features, integrations, and founder letter. Pricing pages, application UI, authentication flows, and mobile-native interfaces are not represented. Motion behavior, hover states, and form interactions were not captured in the supplied still images. Pp Fraktion Mono, Tobias, and System-Uimonospace are listed in the source files but do not appear in the visible landing page typography.

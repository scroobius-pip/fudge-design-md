# How mdx.so is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/mdx.so-design)

Last updated: 2026-08-10

## Captured pages

[![Contact overlay with warm gradient background, dark pill CTA, and vertical navigation menu with orange dot indicators](https://pin.fontofweb.com/6342?format=jpg)](https://design.withfudge.com/share/pin-6342)

[Contact overlay with warm gradient background, dark pill CTA, and vertical navigation menu with orange dot indicators](https://design.withfudge.com/share/pin-6342)

[![Dark footer section with oversized white MDX logotype, email contact, and minimal legal links](https://pin.fontofweb.com/6341?format=jpg)](https://design.withfudge.com/share/pin-6341)

[Dark footer section with oversized white MDX logotype, email contact, and minimal legal links](https://design.withfudge.com/share/pin-6341)

[![Hero section with centered 3D sphere, large display typography, and service category pills on light gray background](https://pin.fontofweb.com/6340?format=jpg)](https://design.withfudge.com/share/pin-6340)

[Hero section with centered 3D sphere, large display typography, and service category pills on light gray background](https://design.withfudge.com/share/pin-6340)

## Overview

MDX presents itself as a high-end creative agency through a restrained yet expressive visual system. The design alternates between expansive light-mode hero sections and immersive dark-mode footer territory, creating dramatic tonal rhythm across the page. A signature 3D sphere—rendered in warm peach and cream tones with crystalline surface texture—anchors the hero as both visual centerpiece and brand metaphor. Typography drives hierarchy through stark scale contrasts: oversized serif-inflected display type for statements, clean geometric sans for supporting content, and minimal Times-based legal text. The overall impression is one of calculated luxury—generous whitespace, precise component geometry, and a palette that shifts from warm neutrality to absolute darkness without losing coherence.

## Colors

The color system operates in two primary modes: a warm light surface for content and an absolute dark ground for footer and contact moments. Interface colors are drawn from a tightly controlled set of near-blacks and off-whites, with warm gray serving as the single accent bridge between modes.

| token | value | use |
|---|---|---|
| ink | #101820 | Primary text, dark backgrounds, primary action surfaces |
| ink-deep | #111822 | Pill button backgrounds, elevated dark surfaces |
| ink-muted | #334049 | Secondary text, navigation items, inactive states |
| canvas | #FFFFFF | Primary page background, service pill fills |
| canvas-warm | #FCFCFD | Overlay backgrounds, subtle surface variation |
| surface | #FEFFFF | Near-white highlights, gradient endpoints |
| accent-warm | #8A8F8D | Muted supporting text, footer secondary content |
| accent-muted | #131313 | Deep shadow tones, near-black details |

The light mode establishes warmth through photography rather than tinting—backgrounds remain neutral white and warm gray, allowing the 3D sphere's peach tones to provide all color energy. Dark mode inverts completely: the footer and contact sections use pure black grounds with white typography, creating maximum contrast for the oversized MDX logotype. The single orange dot indicator in navigation overlays provides the only saturated accent, functioning as an active-state marker rather than a brand color. Shadows use a translucent dark tone at 35% opacity with a subtle 6% hairline, grounding floating panels without heaviness.

## Typography

Three font families create a deliberate hierarchy: Orlean for commanding display statements, Aventa for functional and navigational text, and Times for minimal legal and structural annotations. The system relies on extreme scale contrast rather than weight variation to establish importance.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Orlean | 3.625rem | 500 | 0.8 | 0.034em | Primary headlines, hero statements |
| section-display | Orlean | 2.5rem | 500 | 1 | 0.034em | Secondary headlines, footer prompts |
| body-large | Aventa | 1.375rem | 400 | 1.2 | 0em | Descriptive paragraphs, hero body |
| body | Aventa | 1.125rem | 400 | 1.4 | 0em | Standard content, navigation links |
| label | Aventa | 1.125rem | 400 | 0.87 | 0.111em | Pill buttons, uppercase labels |
| navigation | Aventa | 1.125rem | 400 | 1.4 | 0em | Menu items, header links |
| legal | Times | 0.5625rem | 400 | 1.4 | 0em | Copyright, legal text, structural markers |

Orlean Medium carries the voice of the brand at large sizes with tight leading and positive letter-spacing that lends an elegant, slightly classical rhythm to headlines. Aventa Regular handles all functional typography with clean geometry and open spacing. The Times family appears only at minimal scale for legal and structural elements, rendered so small it functions as texture rather than reading text. Verify licensing for these families before production use; Orlean and Aventa are credited to their respective designers, while Times carries no supported attribution claim.

## Layout

The page structure follows a full-bleed, edge-to-edge philosophy with strategic containment for typographic content. The hero section centers a massive 3D sphere against a neutral ground, with headline and body text positioned in the lower-left quadrant and service category pills anchored to the lower-right. This asymmetric balance creates visual tension while maintaining readability.

Navigation occupies a fixed header with logo left, primary links center, and contact action right. The header uses minimal vertical padding, allowing the hero imagery to begin immediately below. Content sections employ substantial vertical padding—approximately 5.625rem at top and varying bottom measures—to create breathing room around dense typographic moments.

The footer inverts the spatial logic: full black ground, left-aligned contact prompt with mixed-opacity text treatment, right-aligned utility links, and the MDX logotype scaled to dominate the horizontal span. Social icons and legal text compress to the bottom edge with generous separation from the main footer content.

Spacing tokens derive from a 2px base unit, with component gaps at 2.75rem and section breaks at 5.625rem. The contact overlay uses a radial warm gradient that shifts from cream center to peach edge, with content positioned in the lower-left third and a vertical navigation menu floating in the right third.

## Visual language

The design's visual character emerges from the collision of organic 3D imagery with rigorous typographic geometry. The central sphere—peach-cored, white-crystalled, softly lit—suggests tactility and digital craft simultaneously. This single image element carries the entire emotional load of the brand, allowing all surrounding UI to remain austere and functional.

Photography and 3D renders sit against neutral grounds without frames or borders, treated as immersive environmental elements rather than contained assets. The warm gradient overlay in contact moments extends this approach, using soft color diffusion rather than solid panels.

Graphic elements maintain extreme restraint: single-pixel hairlines for navigation separators, circular dot indicators for active states, and arrow icons for external links. The MDX logotype in the footer demonstrates the brand's appetite for scale—letterforms become architectural, spanning the full viewport width at weights that approach monolithic.

Shadow language is subtle and layered: a primary shadow at 10px blur with 36px spread in semi-transparent dark, paired with a 1px hairline shadow at 6% opacity. This creates elevation without floating-card aesthetics, appropriate for the design's premium positioning.

## Components

### Primary action button

- **Anatomy**: Rounded pill containing uppercase label text and diagonal arrow icon
- **Surface**: Solid dark fill at ink-deep, white text
- **Typography**: label token, letter-spaced uppercase
- **Shape**: Full pill radius, generous horizontal padding approximately 2.75rem, vertical padding approximately 1.125rem
- **Spacing**: Icon offset right of text with internal gap
- **Composition**: Typically left-aligned in content blocks, or centered in overlay contexts

### Service category pill

- **Anatomy**: Rounded pill with uppercase category label and optional plus icon
- **Surface**: White fill, dark border, dark text
- **Typography**: label token at reduced size, tightly letter-spaced
- **Shape**: Full pill radius, compact horizontal padding
- **Composition**: Horizontal row in hero lower-right, evenly spaced with consistent gaps

### Navigation header

- **Anatomy**: Fixed bar with logo mark left, text links center, contact action right
- **Surface**: Transparent over hero, transitioning to solid on scroll
- **Typography**: navigation token for links, body token for contact with underline
- **Composition**: Logo and links separated by vertical pipe; hamburger menu trigger rightmost

### Contact overlay

- **Anatomy**: Full-screen layer with radial gradient background, headline prompt, CTA button, vertical link menu, social icons, close control
- **Surface**: Warm radial gradient from cream center to peach edge; dark pill CTA
- **Typography**: hero-display for prompt, section-display for menu items with orange dot indicators
- **Shape**: Rounded close button with X icon in upper right
- **Composition**: Content clustered lower-left, menu floating right, social icons bottom-center

### Footer

- **Anatomy**: Dark ground with contact prompt, email link, utility navigation, oversized logotype, social icons, legal text, scroll-to-top action
- **Surface**: Absolute black background, white and muted gray text
- **Typography**: section-display for prompt with selective opacity fade, body for email and links, legal for copyright
- **Composition**: Two-row structure—content and navigation above, logotype as full-width graphic break, legal and social below

## Responsive behavior

The design's desktop-first composition suggests clear adaptation priorities. The hero sphere should remain centered but scale proportionally, with headline and body text reflowing from lower-left to stacked center alignment at reduced widths. Service pills should wrap to multiple rows rather than compressing horizontally.

The footer logotype must scale to maintain impact without overflow—likely requiring viewport-width sizing or controlled truncation. Navigation should collapse to hamburger-only at intermediate breakpoints, with the overlay menu serving as the primary mobile navigation surface.

The contact overlay's two-column layout should stack vertically on narrow viewports, with the vertical menu converting to standard list flow. Touch targets for pill buttons and menu items should maintain minimum 44px height regardless of breakpoint.

## Practical implementation guidance

### Preserve
- The extreme scale contrast between Orlean display type and Times legal text—this hierarchy is fundamental to the brand voice
- The warm-to-dark mode transition; maintain the tonal rhythm between light content and dark footer
- The single 3D sphere as hero centerpiece; do not fragment or tile this element
- Full-bleed imagery without borders or frames
- The orange dot as the sole saturated accent, used only for active navigation states

### Avoid
- Adding saturated brand colors beyond the warm gray and orange dot system
- Heavy drop shadows or card-based elevation; keep shadow language subtle and layered
- Generic sans-serif substitutions for Orlean or Aventa; the character of these families is distinctive
- Centering all text; the asymmetric left-alignment of headlines is a core compositional principle
- Rounding corners on non-pill elements; maintain geometric precision for panels and containers

### Recommended build order
1. Establish the 2px base grid and spacing tokens
2. Implement Orlean and Aventa with exact scale and tracking values
3. Build the dark-light color system with mode-switching logic
4. Create the pill button component as the primary interactive element
5. Construct the hero section with centered 3D sphere and asymmetric text placement
6. Implement the fixed header with scroll behavior
7. Build the contact overlay with radial gradient and vertical menu
8. Develop the footer with oversized logotype and mixed-opacity text

### Accessibility
- Ensure the dark footer meets WCAG AAA contrast for white-on-black text
- Provide visible focus states for pill buttons and navigation links; the current design shows no visible focus treatment
- Add aria-labels to icon-only controls including the hamburger menu and close button
- Consider reduced-motion preferences for any scroll-triggered transitions
- Maintain minimum touch target sizes for all interactive elements in mobile contexts

## Scope note

This guide covers the homepage hero, contact overlay, and footer surfaces visible in the supplied images. Interior pages, project case studies, services detail views, and mobile-specific layouts are not represented. The 3D sphere render and warm gradient backgrounds are treated as provided assets rather than generatable elements. Measurements reflect the exact values from the desktop interface.

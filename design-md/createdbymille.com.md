# How createdbymille.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/createdbymille.com-design)

Last updated: 2026-08-10

## Captured pages

[![Dark contact section with serif headline 'Got a project in mind?' and bold sans-serif 'Let's talk' on black background with blue lens flare](https://pin.fontofweb.com/1918?format=jpg)](https://design.withfudge.com/share/pin-1918)

[Dark contact section with serif headline 'Got a project in mind?' and bold sans-serif 'Let's talk' on black background with blue lens flare](https://design.withfudge.com/share/pin-1918)

[![Clients list with italic serif 'Clients' label and bold sans-serif brand names in two-column layout on pure black](https://pin.fontofweb.com/1917?format=jpg)](https://design.withfudge.com/share/pin-1917)

[Clients list with italic serif 'Clients' label and bold sans-serif brand names in two-column layout on pure black](https://design.withfudge.com/share/pin-1917)

[![Team portraits in three-column grid with blue underlined names and titles on black background](https://pin.fontofweb.com/1915?format=jpg)](https://design.withfudge.com/share/pin-1915)

[Team portraits in three-column grid with blue underlined names and titles on black background](https://design.withfudge.com/share/pin-1915)

[![About hero with large italic serif 'About' over architectural photography, navigation bar, and 'Creative Freelancers' section](https://pin.fontofweb.com/1914?format=jpg)](https://design.withfudge.com/share/pin-1914)

[About hero with large italic serif 'About' over architectural photography, navigation bar, and 'Creative Freelancers' section](https://design.withfudge.com/share/pin-1914)

## Overview

The createdbymille.com design system is a high-contrast editorial framework built for a creative production company. The visual language operates on a near-black canvas with pure white typography, creating a gallery-like environment where photography and motion content become the primary color. The system pairs two distinct type personalities: a delicate, high-contrast serif for display and editorial moments, and a bold, geometric sans-serif for structural hierarchy and impact. This dual-typography approach signals creative sophistication while maintaining contemporary clarity. The overall impression is restrained, confident, and intentionally dramatic—white type floats on black space, with occasional blue accents providing digital-native punctuation. The design prioritizes full-bleed imagery, generous vertical rhythm, and asymmetric compositions that feel editorial rather than template-driven.

## Colors

The palette is radically reduced, functioning as a stage for photographic and video content rather than competing with it. Black dominates as the structural canvas, with white providing all primary information. A single blue accent appears selectively for interactive emphasis and brand punctuation. Muted gray handles secondary reading material without introducing visual noise.

| token | value | use |
|---|---|---|
| canvas | #000000 | Primary background for all sections, navigation, and footer areas |
| ink | #ffffff | All primary text, headings, navigation labels, and interactive elements |
| muted-ink | #a0a0a0 | Body copy paragraphs, secondary descriptions, and supporting text |
| accent | #0000ff | Underlines on team names, interactive highlights, and focal accent moments |
| surface-elevated | #1a1a1a | Navigation pill background, subtle UI containers on black canvas |

The color logic follows a dark-mode-first principle where the black canvas absorbs attention and directs focus toward content and typography. White ink maintains maximum legibility without chromatic distraction. The blue accent is used sparingly—visible as underlines beneath team member names and potentially on hover states—preventing it from becoming decorative noise. No gradient or shadow tokens are present in the visible system; depth is achieved through photography, typography scale, and spatial rhythm rather than chromatic complexity. When photographic content appears, its natural color becomes the temporary palette, with the neutral system ensuring no clash.

## Typography

Three font families establish the typographic hierarchy: Dt Nightingale serves as the editorial serif for display and labels, Sequel 100 Black 86 provides bold geometric impact for headings and names, and Plus Jakarta Sans handles all functional body and interface text. Dt Nightingale is designed by Celia Yew, available from Dot. Plus Jakarta Sans is designed by Gumpita Rahayu, available from Tokotype. Sequel 100 Black 86 is designed by Oliver Jeschke, available from Ogj Type Design. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Dt Nightingale | 6rem | 300 | 1 | -0.02em | Large page titles, contact section headlines |
| section-display | Sequel 100 Black 86 | 3rem | 400 | 1.1 | -0.01em | Section headings, team names, client names |
| body | Plus Jakarta Sans | 1rem | 400 | 1.6 | 0 | Paragraph text, descriptions |
| body-large | Plus Jakarta Sans | 1.25rem | 400 | 1.5 | 0 | Introductory paragraphs, emphasized body |
| label | Dt Nightingale | 1.5rem | 300 | 1.2 | 0.01em | Category labels, section identifiers |
| navigation | Plus Jakarta Sans | 0.875rem | 400 | 1 | 0.02em | Top navigation, menu items |
| legal | Plus Jakarta Sans | 0.75rem | 400 | 1.2 | 0.05em | Copyright, footer microcopy |

The type scale builds from a 4px relative unit, with display sizes at 96px (24 units) and 48px (12 units), body at 16px (4 units), and descending sizes at 20px, 14px, and 12px. The contrast between Nightingale's light weight and Sequel's heavy black weight creates dramatic hierarchy without size alone. Italic styling on Nightingale labels adds editorial distinction. Line heights remain tight for display (1.0–1.1) and open for body (1.5–1.6) to maintain reading comfort at different scales.

## Layout

The layout system favors full-bleed compositions with asymmetric internal structure. Sections stack vertically with substantial breathing room—typically 8rem between major content zones. Within sections, content often aligns to a loose two-column mental model: a narrow left column for labels or metadata, and a wider right column for primary content. This is visible in the clients list and implied in the about page structure.

The navigation sits as a floating pill in the upper right, detached from the content edge, suggesting a fixed or sticky behavior that maintains accessibility without dominating the viewport. Hero sections occupy the full viewport width with imagery bleeding to all edges, while text overlays center horizontally and sit in the upper-middle vertical zone.

Content sections below the fold transition to contained widths with generous side margins, creating a reading column that feels editorial rather than maximized. The team grid uses three equal columns with consistent internal spacing, while the contact section abandons grid constraints for a free-floating left-aligned composition that emphasizes the conversational tone of "Got a project in mind?"

Vertical rhythm is established through consistent text block spacing of 1.5rem between paragraphs and 2rem between distinct content elements. The overall density is low—black space is treated as an active design element rather than absence.

## Visual language

The visual language draws from editorial fashion publishing and contemporary portfolio practice. High-contrast black-and-white treatment of photography alternates with color imagery, creating rhythm across the page. The blue lens flare visible in the contact section suggests an acceptance of optical artifacts and production imperfection as aesthetic qualities—images feel captured rather than rendered.

Typography treatment reinforces this editorial sensibility: serif italics for labels evoke caption conventions, while bold sans-serif headings suggest poster and album cover design. The combination feels simultaneously refined and street-culture aware, appropriate for a production company working across fashion, music, and automotive clients.

Image treatment varies by context—team portraits receive direct, unfiltered presentation while hero photography may be color-graded warm. No visible border radius on imagery suggests a preference for sharp, print-like edges. The single visible UI radius appears on the navigation pill, softening an otherwise angular system.

The blue underline on team names is the only decorative element beyond typography itself, functioning as a signature detail that connects interactive expectation (hyperlink convention) with brand identity.

## Components

### Navigation Bar

A floating horizontal pill containing text links. The background uses a semi-transparent light tone over the black canvas, creating subtle elevation without departing from the monochrome system. Links are evenly spaced with comfortable horizontal padding. The active or current page receives no distinct visual treatment in the visible state, maintaining visual cleanliness.

- **Anatomy**: Horizontal row of text links inside rounded container
- **Surface**: Semi-transparent light background over black canvas
- **Typography**: Plus Jakarta Sans at navigation size, white ink
- **Shape**: Full pill radius (9999px)
- **Spacing**: Generous horizontal padding, compact vertical padding
- **Composition**: Floats in upper right of viewport, detached from edges

### Hero Section

Full-bleed photographic background with oversized display typography centered horizontally. The "About" hero demonstrates italic serif treatment at massive scale, with the letterforms interacting with the photographic content—appearing to sit within the architectural space rather than simply overlaying it.

- **Anatomy**: Full-width image, centered display text, optional navigation overlay
- **Surface**: Photographic background, no additional treatment
- **Typography**: Dt Nightingale at hero-display size, white ink
- **Shape**: Full bleed, no border radius
- **Spacing**: Text positioned in upper-middle vertical zone
- **Composition**: Centered horizontal alignment, generous margins

### Team Card Grid

Three-column layout of portrait photography with name and role beneath each image. Names receive blue underlines that suggest interactivity. The grid maintains equal column widths with consistent gaps.

- **Anatomy**: Portrait image, name text, role text, stacked vertically
- **Surface**: Black canvas, no card container
- **Typography**: Sequel 100 Black 86 for names, Plus Jakarta Sans for roles
- **Shape**: Sharp corners on images
- **Spacing**: 2rem gap between cards, 1.5rem between image and text
- **Composition**: Three equal columns, left-aligned text beneath images
- **Variants**: Portrait photography varies in treatment (black and white, color, different lighting conditions)

### Client List

Two-column composition with an italic serif label on the left and a vertical stack of bold sans-serif brand names on the right. The names are tightly leaded, creating a dense block of text that contrasts with the sparse surrounding page.

- **Anatomy**: Label text, vertical list of names
- **Surface**: Black canvas
- **Typography**: Dt Nightingale italic for label, Sequel 100 Black 86 for names
- **Shape**: No container
- **Spacing**: Generous left margin for label, compact vertical spacing between names
- **Composition**: Asymmetric two-column, label narrow left, names wide right

### Contact CTA

Dark section with left-aligned text block. The headline uses mixed typography: a light serif question followed by a bold sans-serif call to action. A small legal line appears in the lower left corner.

- **Anatomy**: Headline line one (serif), headline line two (sans-serif), copyright microcopy
- **Surface**: Black canvas, optional photographic or atmospheric background
- **Typography**: Mixed hero-display and section-display tokens
- **Shape**: No container
- **Spacing**: Generous vertical padding, left-aligned with standard margins
- **Composition**: Stacked lines with size contrast, legal text anchored bottom left

## Responsive behavior

The visible desktop layout suggests a system that will require significant adaptation for smaller viewports. The three-column team grid should collapse to single column on narrow screens, maintaining portrait aspect ratios and text alignment. The two-column client list will likely stack vertically with the label above the names. The floating navigation pill may convert to a full-width bar or hamburger menu on mobile.

Hero typography at 6rem will require scaling down—likely to 3rem or 2.5rem—to maintain reasonable line breaks on narrow screens. The mixed headline in the contact section should maintain its two-line structure but may need size reduction to prevent the bold second line from dominating the viewport.

Full-bleed imagery should remain full-bleed across breakpoints, with text overlays gaining additional horizontal padding on small screens to prevent edge collision. The blue accent underlines on team names should remain visible and tappable at minimum 44px touch targets.

## Practical implementation guidance

### Preserve
- The stark black canvas as the dominant background—this is the system's defining atmosphere
- The dual-typography pairing: serif for editorial display, geometric sans for structural impact
- The blue accent used sparingly and specifically for interactive emphasis
- Full-bleed imagery with centered or left-aligned text overlays
- Generous vertical spacing between sections—compressing this will destroy the gallery-like pacing
- The asymmetric two-column compositions for lists and metadata

### Avoid
- Introducing additional accent colors beyond the single blue—this will fragment the disciplined palette
- Border radius on imagery—the sharp edges contribute to the editorial print quality
- Background colors other than black for primary sections—gray or dark navy will dilute the high-contrast identity
- Underlining text that is not interactive—the blue underline is reserved for names and links
- Centering body text—the left-aligned reading column is part of the editorial character

### Recommended Build Order
1. Establish the black canvas and white typography as the foundational layer
2. Implement the three font families with their respective roles
3. Build the navigation pill component with its semi-transparent treatment
4. Create the hero section with full-bleed imagery and centered display type
5. Develop the team grid with portrait ratios and blue underlined names
6. Construct the client list with its asymmetric two-column structure
7. Add the contact CTA with mixed typography treatment
8. Refine spacing tokens and vertical rhythm across all sections

### Accessibility
- Ensure white text on black canvas meets WCAG AAA contrast ratios—the high-contrast system naturally supports this
- Provide visible focus indicators that complement the blue accent rather than relying solely on color change
- Consider a reduced-motion preference for any scroll-triggered animations, as the still images suggest potential motion enhancement
- Maintain semantic heading hierarchy despite the visual mixing of serif and sans-serif—screen readers need logical structure
- Ensure the floating navigation remains reachable via keyboard and does not obscure focused content

## Scope note

This guide covers the About page and its visible components including the hero, team grid, client list, and contact section. The homepage and project detail pages are not represented in the supplied material. No mobile layouts, hover states, loading behavior, or form interactions are documented. Motion design, video playback UI, and additional page templates fall outside this guide. Measurements are practical adaptation targets derived from visual inspection against a 4px relative unit grid.

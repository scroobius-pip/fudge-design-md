# How davincii.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/davincii.com-design)

Last updated: 2026-08-10

## Captured pages

[![Hero viewport with centered serif headline, rotating 3D logo ring, and dark textured circular backdrop with navigation corners](https://pin.fontofweb.com/5754?format=jpg)](https://design.withfudge.com/share/pin-5754)

[Hero viewport with centered serif headline, rotating 3D logo ring, and dark textured circular backdrop with navigation corners](https://design.withfudge.com/share/pin-5754)

[![Footer section with Fibonacci spiral numbering, split navigation columns, QR code whitepaper card, and dark gradient terrain silhouette](https://pin.fontofweb.com/5753?format=jpg)](https://design.withfudge.com/share/pin-5753)

[Footer section with Fibonacci spiral numbering, split navigation columns, QR code whitepaper card, and dark gradient terrain silhouette](https://design.withfudge.com/share/pin-5753)

[![Close-up of mixed-weight serif headline showing italic emphasis on dark textured background](https://pin.fontofweb.com/5326?format=jpg)](https://design.withfudge.com/share/pin-5326)

[Close-up of mixed-weight serif headline showing italic emphasis on dark textured background](https://design.withfudge.com/share/pin-5326)

[![Upper hero crop revealing 3D cylindrical logo reflection and gradient circular frame edge](https://pin.fontofweb.com/5325?format=jpg)](https://design.withfudge.com/share/pin-5325)

[Upper hero crop revealing 3D cylindrical logo reflection and gradient circular frame edge](https://design.withfudge.com/share/pin-5325)

## Overview

DaVincii presents a venture-capital platform identity that merges Renaissance-era typographic refinement with contemporary dark-mode minimalism. The visual system centers on a near-black canvas illuminated by warm off-white typography, creating the impression of carved stone or aged parchment viewed under controlled gallery lighting. The homepage experience is dominated by a massive circular frame that occupies most of the viewport, within which a 3D rotating logotype orbits above centered serif headlines. This circular motif references both classical proportion systems and the mathematical precision expected of financial technology. The overall mood is contemplative and exclusive, positioning the platform as a curator for sophisticated investors rather than a mass-market service. Every element reinforces restraint: limited color range, generous negative space, and typography that privileges elegance over urgency.

## Colors

The palette is severely restricted, operating almost exclusively in achromatic values with subtle warm undertones that prevent the black from feeling digital or cold.

| token | value | use |
|---|---|---|
| canvas | #000000 | Primary page background, deepest shadows, outer viewport |
| ink | #ffffff | Primary text, logo, active navigation, headline emphasis |
| muted-ink | #b6b6b6 | Secondary body text, descriptions, inactive states, footer metadata |
| surface | #1c1c1c | Elevated cards, footer terrain, QR code container backgrounds |
| border | #363636 | Subtle dividers, card outlines, hairline separators |

The canvas color establishes an immersive darkness that allows the circular hero element to read as a lit aperture. Ink appears at full strength only for the most important words and interactive targets. Muted-ink serves the majority of readable content, including the platform description paragraph and footer navigation links. Surface provides just enough lift from pure black to distinguish layered components without breaking the monochromatic atmosphere. Border operates at the threshold of visibility, present only when structural separation is absolutely necessary. No accent colors appear in the interface; the only chromatic variation comes from photographic or rendered imagery that may appear within the circular frame. This discipline reinforces the brand's positioning as serious, timeless, and mathematically grounded.

## Typography

Three type families create a clear hierarchy between classical display, refined body, and utilitarian interface roles.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Kessler | 4rem | 400 | 1.1 | -0.01em | Primary headlines, brand statements |
| body | Trjn Da Vinci | 1rem | 300 | 1.5 | 0em | Descriptions, paragraphs, long-form content |
| label | Inter | 0.75rem | 500 | 1.2 | 0.05em | Captions, metadata, QR card labels |
| navigation | Inter | 0.75rem | 500 | 1 | 0.08em | Menu items, footer links, utility text |

Kessler, designed by Alaric Garnier and available from Production Type, supplies the hero-display voice with high-contrast transitional serifs and delicate stroke modulation. The headline "Venture Capital for the Architects of the future" demonstrates its capacity for both formal authority and expressive rhythm, particularly when paired with italic forms for selective emphasis. Trjn Da Vinci, designed by Virgile Flores, provides the body voice with a lighter weight and more open proportions that maintain readability at small sizes while preserving the classical character. Its italic companion, Trjn Da Vinci-Italic, appears within headlines for words like "for" and "Architects," creating typographic tension between upright and canted forms. Inter Medium, designed by Rasmus Andersson and available from Rsms, handles all interface labeling with neutral clarity and compact proportions. Verify licensing for these families before production use.

## Layout

The layout system is built around a single dominant circular frame that organizes content radially and centrally. The viewport divides into three vertical zones: a narrow top band for navigation and the 3D logo ring, a vast middle area for the primary message, and a bottom band for calls-to-action and legal text. This vertical compression creates a cinematic aspect ratio for the central content.

The circular frame itself appears to be approximately 85-90 percent of the viewport width, centered horizontally and slightly elevated from true center to accommodate the bottom text block. Within this circle, content aligns to optical center rather than mathematical center, with the headline sitting slightly above the midpoint and the call-to-action below it.

Footer layouts abandon the circular motif in favor of a rigorous horizontal grid. Navigation links organize into two columns on the left, a mathematical sequence occupies the center as a decorative structural element, and legal and promotional content anchor the right. The bottom edge maintains a consistent baseline for copyright, partnership marks, and support links.

Spacing follows a 0.25rem base unit. Section padding uses 6rem to create dramatic breathing room between functional areas. Component internal padding typically ranges from 1rem to 2rem. The Fibonacci sequence visible in the footer (0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89) suggests an underlying proportional system that may govern component sizing and grid divisions.

## Visual language

The visual language draws from two seemingly opposed traditions: the organic, weathered textures of Renaissance materials and the precise, mathematical order of computational finance. The circular hero frame exhibits subtle surface variation resembling aged metal or stone, with soft gradients that suggest directional lighting from above. This texture prevents the dark background from feeling flat or screen-like, instead implying physical depth and material presence.

The 3D logo ring introduces the only true motion and dimensionality in the system. The wordmark "DAVINCII" rotates on a cylindrical surface, with a mirrored reflection visible below the equator. This element serves as both brand signature and ambient animation, providing visual interest without demanding interaction. Its metallic sheen and precise geometry contrast with the organic texture behind it.

Typography carries significant visual weight through scale contrast rather than color variation. The hero headline operates at approximately four times the body size, with italic forms creating internal rhythm within the line. The word "Architects" receives particular emphasis through cursive italic, suggesting both historical reference and forward-looking construction.

The footer introduces a landscape silhouette that divides the dark terrain from slightly lighter sky, creating a horizon line that grounds the mathematical sequence and navigation elements. This topographic abstraction reinforces the "architects" metaphor while providing visual closure to the page.

## Components

### Hero section

- **Anatomy**: Full-viewport container with circular frame background, 3D rotating logo ring at top center, primary headline at optical center, call-to-action link below headline, descriptive paragraph at bottom center, corner navigation elements
- **Surface**: Canvas background with textured circular overlay; ink and muted-ink text
- **Typography**: Hero-display for headline with selective italic emphasis; body for description; navigation for corner links
- **Shape**: Circular frame with soft edge gradient; no sharp corners in primary content area
- **Spacing**: Generous vertical padding between logo, headline, action, and description; headline positioned above geometric center
- **Composition**: Radial symmetry with central alignment; corner elements break symmetry with functional utility
- **Variants**: The headline may appear with different italic emphasis patterns depending on message

### Navigation

- **Anatomy**: Top-left menu trigger with directional arrow; top-right partner bracket label; bottom-left copyright and brand mark; bottom-right support link
- **Surface**: Transparent over hero; ink text on dark background
- **Typography**: Navigation token for all elements; uppercase with letterspacing
- **Shape**: Text-only with no visible containers; arrow icon accompanies menu label
- **Spacing**: Positioned at viewport edges with comfortable margin
- **Composition**: Four-corner anchoring creates frame within frame

### Footer

- **Anatomy**: Two-column navigation grid on left; Fibonacci number sequence in center; legal links and whitepaper card on right; bottom bar with copyright, partnership mark, and support link
- **Surface**: Surface background with terrain silhouette gradient at top; border for card outlines
- **Typography**: Label for navigation links and card text; navigation for legal links; body for partnership mark
- **Shape**: QR code card with subtle rounded corners and border; terrain silhouette as organic divider
- **Spacing**: Generous horizontal padding between columns; consistent vertical rhythm for link lists
- **Composition**: Asymmetric three-zone layout with mathematical center decoration

### Whitepaper card

- **Anatomy**: Text block with title and description; adjacent QR code square
- **Surface**: Surface background with border outline
- **Typography**: Label for title and description in muted-ink
- **Shape**: Slightly rounded rectangular container; QR code with white background
- **Spacing**: Internal padding approximately 1.5rem; tight coupling between text and code

## Responsive behavior

The circular hero frame should maintain proportional scaling while preserving the central content alignment. At reduced viewport widths, the headline will require size reduction to prevent line breaks that disrupt the carefully composed typographic rhythm. The italic emphasis words may need to maintain their relative scale even as the overall headline shrinks.

The footer navigation columns should stack vertically on narrow viewports, with the Fibonacci sequence either hiding or scaling down to prevent horizontal overflow. The whitepaper card may relocate below the navigation stack rather than remaining in the right column.

The 3D logo ring should maintain visibility but may reduce in apparent size or simplify its geometry on lower-powered devices. Its reflective surface and animation are decorative rather than functional, so graceful degradation is acceptable.

Touch targets for corner navigation should expand to minimum 44 by 44 pixels on touch devices, with the menu trigger and partner label potentially relocating to a more conventional top bar arrangement.

## Practical implementation guidance

### Preserve
- The severe color restraint; introducing additional hues would break the gallery-like atmosphere
- The contrast between Kessler's formal serifs and Trjn Da Vinci's lighter body weight
- The selective italic emphasis within headlines as a deliberate compositional device
- The textured surface quality of the circular frame, whether achieved through images, gradients, or shaders
- The mathematical references including Fibonacci sequences and proportional circular forms

### Avoid
- Bright accent colors or gradient backgrounds that would compete with the textured dark surfaces
- Sans-serif headlines that would lose the classical authority essential to the brand positioning
- Dense information layouts that contradict the spacious, contemplative mood
- Sharp geometric corners on primary containers; prefer subtle rounding or organic edges
- Auto-playing video or aggressive motion that would disrupt the measured pacing

### Recommended build order
1. Establish the canvas and surface color system with proper contrast ratios
2. Implement the circular hero frame with responsive scaling and texture
3. Integrate Kessler for headlines with italic substitution logic
4. Add Trjn Da Vinci for body text with appropriate weight loading
5. Build the 3D logo ring with performance-conscious animation
6. Construct footer grid with navigation, mathematical sequence, and whitepaper card
7. Refine corner navigation and legal footer bar
8. Polish spacing and proportional relationships across breakpoints

### Accessibility
- Ensure the muted-ink body text meets WCAG AA contrast against the canvas background; the current value may need slight lightening for small text compliance
- Provide reduced-motion alternatives for the rotating logo ring
- Structure the Fibonacci sequence as decorative content with appropriate ARIA roles to prevent screen reader confusion
- Maintain visible focus indicators on all navigation targets despite the minimal visual styling
- Ensure QR code links have equivalent text alternatives for users who cannot scan

## Scope note

This guide covers the homepage hero and footer surfaces visible in the supplied images. Interior pages, interactive states, motion specifications, and mobile breakpoints are not represented. Measurements are practical adaptation targets derived from visual estimation against a 4px base grid. The 3D logo animation and terrain silhouette rendering methods are not specified.

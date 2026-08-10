# How plasticity.xyz is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/plasticity.xyz-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with black background, large white headline, cyan CTA buttons, and colorful category tabs with neon accents](https://pin.fontofweb.com/3494?format=jpg)](https://design.withfudge.com/share/pin-3494)

[Hero section with black background, large white headline, cyan CTA buttons, and colorful category tabs with neon accents](https://design.withfudge.com/share/pin-3494)

[![Footer area with purple geometric banner, green outlined link tree, and neon green UI accents on black](https://pin.fontofweb.com/3471?format=jpg)](https://design.withfudge.com/share/pin-3471)

[Footer area with purple geometric banner, green outlined link tree, and neon green UI accents on black](https://design.withfudge.com/share/pin-3471)

[![FAQ section with three-column card grid, white headings on dark cards, and cyan text link button](https://pin.fontofweb.com/3470?format=jpg)](https://design.withfudge.com/share/pin-3470)

[FAQ section with three-column card grid, white headings on dark cards, and cyan text link button](https://design.withfudge.com/share/pin-3470)

[![Testimonials grid with nine dark cards, avatar images, and white body text with usernames in mono](https://pin.fontofweb.com/3469?format=jpg)](https://design.withfudge.com/share/pin-3469)

[Testimonials grid with nine dark cards, avatar images, and white body text with usernames in mono](https://design.withfudge.com/share/pin-3469)

## Overview

Plasticity's design system is built for a professional 3D modeling audience, combining the aesthetic language of creative software with the clarity of developer tools. The site operates entirely in dark mode, using a pure black canvas that makes neon accent colors and interface elements feel luminous. The visual hierarchy relies on scale contrast between large, calm display typography and dense, information-rich content areas. A distinctive feature is the use of monospace labels for navigation and category tags, creating a technical, precision-engineered atmosphere that aligns with the CAD software positioning. The overall composition balances generous negative space in hero sections with tight, grid-based information density in feature and FAQ areas. Color is used sparingly but strategically: cyan for primary actions, neon green for secondary accents and links, and purple for promotional banners, all against the unchanging black ground.

## Colors

The color system is intentionally minimal, deriving its energy from high-contrast relationships rather than complex palettes. The black canvas is absolute and unmodulated, serving as the constant foundation. White and near-white handle all primary text, while a single mid-gray provides secondary information hierarchy. Accent colors are saturated and luminous, functioning as wayfinding signals rather than decorative elements.

| token | value | use |
|---|---|---|
| canvas | #000000 | Page background, void space, primary dark ground |
| ink | #ffffff | Headlines, primary body text, icon fills |
| muted-ink | #a0a0a0 | Secondary descriptions, captions, de-emphasized content |
| surface | #111111 | Card backgrounds, elevated panels, tab bars |
| action | #00d4ff | Primary buttons, download CTAs, key links |
| action-hover | #33ddff | Action hover state, brighter cyan for emphasis |
| accent-green | #39ff14 | Footer links, category indicators, success states |
| accent-purple | #9333ea | Promotional banners, feature callouts |
| border | #333333 | Card outlines, dividers, subtle separations |

The action cyan appears most prominently in the hero download button and "Try for Free" CTAs, where it creates an immediate focal point against the black ground. The neon green functions as a secondary accent, particularly in the footer navigation tree where it outlines link boundaries and provides hover targets. Purple appears in the "Get Started" promotional banner as a gradient or solid fill behind geometric wireframe illustrations. The surface gray is barely distinguishable from the canvas, creating subtle elevation without visual weight. No light mode variant is present in the visible system.

## Typography

Three font families establish the typographic system: Fk Grotesk Variable for display and headlines, Matter for body content, and Aux Mono for labels, navigation, and technical annotations. The display type is set loosely with negative tracking, while the monospace maintains positive tracking for legibility at small sizes. The contrast between the grotesque's organic curves and the mono's mechanical precision reinforces the software's positioning as creative yet technical.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Fk Grotesk Variable | 4rem | 400 | 1.1 | -0.02em | Hero headlines, major section titles |
| section-display | Fk Grotesk Variable | 2.5rem | 400 | 1.2 | -0.01em | Section headers, FAQ title, testimonials heading |
| body | Matter | 1rem | 300 | 1.6 | 0 | Paragraph text, card descriptions, explanations |
| body-small | Matter | 0.875rem | 300 | 1.5 | 0 | Dense content, specifications, fine print |
| label | Aux Mono | 0.75rem | 400 | 1 | 0.05em | Category tags, button labels, metadata |
| navigation | Aux Mono | 0.75rem | 400 | 1 | 0.08em | Top nav items, footer links, breadcrumb |

Fk Grotesk Variable is designed by Květoslav Bartoš and available from Florian Karsten Type Foundry. Matter is designed by Martin Vácha and published by Displaay. Aux Mono has no attributed designer in the available records. Verify licensing for these families before production use.

The hero display size of 4rem creates commanding presence without overwhelming the black canvas. Section display at 2.5rem maintains hierarchy while allowing more frequent use. Body text at 1rem with 300 weight and 1.6 line height achieves comfortable reading density in the dark theme. The mono labels are consistently uppercase with wide tracking, giving navigation items a command-line aesthetic that technical users find familiar.

## Layout

The layout system alternates between expansive, centered hero compositions and tight, grid-based content areas. The hero section uses a single centered column with generous vertical padding, allowing the headline and subhead to breathe. Below the fold, content shifts to structured grids: three columns for FAQ cards, three columns for testimonials, and full-width tab bars for feature categories.

The page uses a consistent content width of approximately 1200px for text-heavy sections, with some elements like the category tab bar and promotional banner breaking to full width. Horizontal rhythm is established through a 1.5rem gap system in grids, with cards maintaining internal padding of 1.5rem. Vertical section spacing is substantial, typically 6rem between major content blocks, creating clear territorial boundaries.

The category tab bar at the bottom of the hero uses a horizontal flex layout with equal-width segments, each marked by a colored left border and uppercase mono label. This pattern extends to the footer, where link groups are organized in a tree structure with green outline borders connecting parent and child items. The testimonial grid uses a strict 3×3 matrix with uniform card sizing, while the FAQ grid allows variable height cards that align to a common top edge.

## Visual language

The visual language draws from creative software interfaces and technical documentation, avoiding marketing gloss in favor of utilitarian clarity. The persistent dark theme suggests a tool that professionals use for extended sessions, reducing eye strain. Neon accents function like interface highlights in a 3D viewport—indicating selection, active states, and actionable elements.

Geometric precision appears throughout: the promotional banner uses wireframe grids and node points reminiscent of 3D construction planes; the footer link tree uses orthogonal connecting lines; category tabs use sharp rectangular markers rather than rounded pills. This geometric vocabulary reinforces the CAD and modeling positioning.

Imagery is minimal and functional. The testimonial cards use small square avatar thumbnails rather than large portraits. The promotional banner substitutes a technical illustration for photography. Where color appears in the interface, it is always functional: green for "go" actions and links, cyan for primary conversion, purple for educational content. The absence of gradients in most UI elements keeps the aesthetic flat and modern, with solid color blocks providing all necessary hierarchy.

## Components

### Primary action button

- **Anatomy**: Rectangular button with solid cyan fill, white or black text label, and optional right arrow icon
- **Surface**: `backgroundColor: {colors.action}`, color: near-black or white depending on contrast needs
- **Typography**: `{typography.label}` in uppercase with mono family
- **Shape**: `borderRadius: {rounded.button}` (0.25rem), sharp but not square
- **Spacing**: Padding 0.75rem vertical, 1.5rem horizontal
- **Composition**: Often paired with secondary outline button; appears centered in hero, right-aligned in nav
- **Variants**: Download variant includes platform icon (Apple logo); standard variant is text-only with arrow

### Secondary action button

- **Anatomy**: Outlined rectangle with transparent fill, white text, subtle border
- **Surface**: Transparent background, `borderColor: {colors.border}`, color: `{colors.ink}`
- **Typography**: `{typography.label}` uppercase mono
- **Shape**: Same radius as primary, 0.25rem
- **Spacing**: Identical padding to primary for visual pairing
- **Composition**: Always adjacent to primary button, creating a button group

### Content card (FAQ)

- **Anatomy**: Dark rectangle with white headline, gray body text, optional list items
- **Surface**: `backgroundColor: {colors.surface}`, no visible shadow, subtle or no border
- **Typography**: Headline uses section-display at smaller size or body-large; body uses `{typography.body}`
- **Shape**: `borderRadius: {rounded.card}` (0.5rem)
- **Spacing**: Padding 1.5rem all sides, internal gap 1rem between headline and body
- **Composition**: Arranged in 3-column grid with 1.5rem gutters; cards align to top, variable height

### Testimonial card

- **Anatomy**: Dark card with quote text, avatar thumbnail, display name, and username handle
- **Surface**: `backgroundColor: {colors.surface}`, `borderColor: {colors.border}` visible as hairline
- **Typography**: Quote in `{typography.body}`, name in `{typography.body-small}`, username in `{typography.label}` mono
- **Shape**: `borderRadius: {rounded.card}` (0.5rem)
- **Spacing**: Padding 1.5rem, avatar 2rem square with 0.75rem right margin
- **Composition**: 3×3 grid, uniform sizing, text truncated with ellipsis if overflow

### Category tab bar

- **Anatomy**: Full-width horizontal bar with segmented tabs, each with colored left border and mono label
- **Surface**: `backgroundColor: {colors.surface}`, individual segments separated by thin borders
- **Typography**: `{typography.navigation}` uppercase, wide tracking
- **Shape**: No border radius on bar; individual segments have sharp corners
- **Spacing**: Equal width distribution, padding 1rem vertical, 1.5rem horizontal
- **Variants**: Active state indicated by brighter border color; colors include orange, cyan, magenta, green, yellow

### Footer link tree

- **Anatomy**: Hierarchical list with parent headers and child links, connected by green outline borders
- **Surface**: Transparent background, green borders at 1px, no fills
- **Typography**: Headers in `{typography.label}` with green color; links in `{typography.label}` with green color
- **Shape**: Rectangular link containers with full borders, orthogonal connecting lines between levels
- **Spacing**: Generous vertical spacing between groups, consistent 1rem gaps between related links
- **Composition**: Three-column layout at desktop, tree structure extends downward with indentation

## Responsive behavior

The grid systems should collapse from three columns to single column on narrow viewports, with FAQ cards and testimonials stacking vertically. The hero headline should scale down to 2.5rem or 2rem to maintain line length control. The category tab bar should become horizontally scrollable or convert to an accordion on mobile, preserving the colored left-border indicators.

The navigation bar, visible in the hero image with multiple category pills, should collapse to a hamburger menu or consolidate into a single "Menu" label with the accent cyan. Footer link trees should stack vertically rather than maintaining the three-column desktop layout. Touch targets for all interactive elements should maintain minimum 44px height, which may require increasing the mono label buttons from their current compact sizing.

## Practical implementation guidance

### Preserve
- The absolute black canvas; do not introduce gray page backgrounds or gradients
- The monospace navigation and label system; this is the site's most distinctive typographic feature
- The neon accent color palette with cyan as primary action and green as secondary
- The flat, shadowless card aesthetic; elevation is communicated through surface color alone
- The uppercase, wide-tracking treatment of all functional labels

### Avoid
- Adding drop shadows to cards or buttons; the design relies on flat planes
- Using rounded pills or excessive border radius; keep corners sharp or minimally rounded
- Introducing additional accent colors beyond the established cyan, green, and purple
- Setting body text heavier than 300 weight; Matter Light is essential to the delicate hierarchy
- Replacing the mono labels with sans-serif alternatives in navigation contexts

### Recommended build order
1. Establish the black canvas and load all three font families with correct weights
2. Implement the mono label system for navigation and buttons
3. Build the hero section with centered display type and paired action buttons
4. Create the card component with surface background and border treatment
5. Implement the three-column grid for FAQ and testimonials
6. Add the category tab bar with colored left borders
7. Build the footer link tree with green outline borders
8. Apply accent colors to interactive states and hover behaviors

### Accessibility
- Ensure all cyan action elements meet 3:1 contrast against black for UI components, and 4.5:1 for text
- The neon green links in the footer should be verified for contrast; consider a slightly darker green if needed
- Maintain focus indicators that match the accent color system, with visible outlines on keyboard navigation
- The mono labels at 0.75rem should not be used for critical information alone; pair with icons or larger context
- Testimonial avatars should have meaningful alt text with the reviewer's name

## Scope note

This guide covers the desktop homepage and its visible sections: hero, FAQ, testimonials, promotional banner, and footer. Mobile breakpoints, animation, form states, and checkout flows are not represented in the available material. The color values for accent-green and accent-purple are practical adaptation targets derived from image analysis. Measurements are practical adaptation targets.

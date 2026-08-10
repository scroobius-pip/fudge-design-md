# How link2.gysin-vanetti.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/link2.gysin-vanetti.com-design)

Last updated: 2026-08-10

## Captured pages

[![Dark landing page with large white 'Link²' title, project description, and keyboard controls in left-aligned monospace-style layout](https://pin.fontofweb.com/7095?format=jpg)](https://design.withfudge.com/share/pin-7095)

[Dark landing page with large white 'Link²' title, project description, and keyboard controls in left-aligned monospace-style layout](https://design.withfudge.com/share/pin-7095)

[![Grid of six colorful long-exposure LED light sculptures against black backgrounds showing generative geometric forms](https://pin.fontofweb.com/7096?format=jpg)](https://design.withfudge.com/share/pin-7096)

[Grid of six colorful long-exposure LED light sculptures against black backgrounds showing generative geometric forms](https://design.withfudge.com/share/pin-7096)

## Overview

This design system describes a dark, immersive exhibition page for *Link²*, a generative art project by Gysin-Vanetti. The page presents long-exposure LED light photography as both a viewing experience and an archival document. The visual language is deliberately restrained: near-black backgrounds let the saturated artwork imagery dominate, while light gray and white typography provides navigational and contextual information without competing for attention. The layout is left-aligned and vertically stacked, creating a reading rhythm that feels more like a technical document or exhibition catalog than a conventional marketing page. The overall impression is one of precision and restraint—appropriate for work that itself explores mechanical process, light, and geometric form.

## Colors

The palette is extremely limited, built to maximize contrast between the dark interface and the colorful artwork while maintaining readable hierarchy in text.

| token | value | use |
|---|---|---|
| canvas | `#161616` | Primary page background; the deep charcoal establishes darkness without the harshness of pure black |
| ink | `#FFFFFF` | Primary text on dark surfaces; used for the main title and emphasized labels |
| muted-ink | `#969696` | Secondary body text, descriptions, and less prominent information |
| dim-ink | `#BEBEBE` | Tertiary text, keyboard legend labels, and subtle metadata |
| surface | `#000000` | Pure black for image backgrounds and the deepest shadow areas |

The color logic follows a simple principle: the interface recedes so the artwork advances. The `#161616` canvas is dark enough to feel immersive but slightly lifted from pure black, preventing the harsh contrast that would compete with the saturated LED colors in the photographs. Text hierarchy moves from white for the most important elements (the project title), through `#969696` for readable body copy, to `#BEBEBE` for auxiliary information like keyboard controls. No accent colors exist in the interface itself—all color energy comes from the artwork imagery, which contains vivid reds, greens, blues, purples, and yellows against black photographic backgrounds.

## Typography

The type system relies on a single family with weight and size variation to create hierarchy. Helvetica Neue Light provides an airy, technical quality that complements the mechanical and photographic nature of the artwork.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Helvetica Neue | 3.6rem | 700 | 1 | 0em | Page title "Link²" with superscript numeral |
| section-display | Helvetica Neue | 2.16rem | 300 | 1.2 | 0em | Occasional larger light-weight headings for subsections |
| body | Helvetica Neue | 1rem | 300 | 1.4 | 0em | Primary descriptions, project statements, links |
| body-small | Helvetica Neue | 0.8rem | 300 | 1.4 | 0em | Secondary descriptions, metadata, contract details |
| label | Helvetica Neue | 0.8rem | 400 | 1.4 | 0em | Section headings like "Contract and storage" |
| navigation | Helvetica Neue | 1rem | 300 | 1.4 | 0em | Links to external marketplaces and related pages |

The hero display at 3.6rem uses bold weight to anchor the page, while all other text remains in the light 300 weight. This creates a stark contrast between the single bold title and the delicate information architecture below it. The superscript "2" in the title is integrated at the same baseline as the bold weight, maintaining visual unity. Body text at 1rem provides comfortable reading for extended project descriptions, while the 0.8rem size handles denser information like smart contract addresses and keyboard shortcuts without overwhelming the layout. The section-display at 2.16rem offers a mid-scale option for subordinate headings that need more presence than body text without competing with the hero title.

The font is credited to Linotype Design Studio. Verify licensing for these families before production use.

## Layout

The page uses a single-column, left-aligned layout with generous negative space on the right. Content occupies roughly the left half of the viewport, leaving the right side as open dark canvas.

The vertical rhythm is established through consistent spacing between sections. Major content blocks—project description, contract information, marketplaces, exhibition history, installation views, making-of documentation, and keyboard controls—are separated by approximately 1.5rem to 2rem of vertical space. Within each section, related items stack tightly with minimal separation.

The artwork grid visible in the second view uses a strict three-column layout with equal-width cells and thin dark gutters between images. This grid is full-bleed or near-full-bleed, contrasting with the narrow text column of the information view. The grid creates a mosaic effect where each cell contains a single long-exposure photograph against black, allowing the colored light forms to read as discrete objects while the grid structure imposes order.

No sidebar, no navigation bar, no footer with multiple columns—the layout is resolutely single-purpose, directing attention either to the artwork grid or to the project information.

## Visual language

The aesthetic is that of a technical archive or exhibition catalog translated to the web. Visual elements are minimized to let the artwork breathe. There are no buttons with backgrounds, no cards with shadows, no rounded containers. The interface is flat, edge-to-edge, and monochrome except for the photographs themselves.

The artwork imagery shows generative geometric forms created by long-exposure photography of LED arrays moved by drawing plotters. These forms—cylinders, arcs, grids, and abstract shapes—glow with saturated color against pure black. The photographs have a distinctive quality: they are clearly physical, with subtle floor reflections and light falloff that digital rendering would not replicate. This physicality is echoed in the plain, almost raw presentation of the web interface.

The superscript "2" in the title is a small but significant visual detail, indicating this is a second iteration or version of the project. Keyboard controls listed at the bottom (i for info, space for pause, arrows for zoom and step, s for save, R/r for resolution, f for full-screen) reinforce that this is an interactive viewing environment, not merely a static gallery.

## Components

### Artwork grid

- **Anatomy**: Three-column grid of square or near-square image cells with thin dark gutters
- **Surface**: Each cell shows a single long-exposure photograph on black background; no overlays, captions, or hover states visible
- **Typography**: None within grid cells
- **Shape**: Rectangular cells with sharp corners; `{rounded.image}` of 0rem
- **Spacing**: Tight gutters of approximately 2-4px between cells; grid fills available width
- **Composition**: Equal-width columns; images appear to be object-fit cover or similar, filling cells completely

### Info panel

- **Anatomy**: Left-aligned text block containing project title, year, extended description, technical specifications, links, and keyboard legend
- **Surface color**: `{colors.canvas}` background
- **Typography**: Mixed hierarchy using `{typography.hero-display}` for title, `{typography.body}` for descriptions, `{typography.label}` for section headings, `{typography.body-small}` for dense metadata
- **Shape**: No containing border or background panel; text sits directly on canvas; `{rounded.panel}` of 0rem
- **Spacing**: Generous left padding or margin keeping content in left portion of viewport; vertical rhythm through paragraph breaks and section spacing
- **Composition**: Single column, maximum line length naturally constrained by narrow content area rather than explicit max-width

### Keyboard legend

- **Anatomy**: Two-column layout with key symbols on left and action descriptions on right
- **Surface color**: `{colors.canvas}` background
- **Typography**: `{typography.body-small}` in `{colors.dim-ink}` for both keys and descriptions
- **Shape**: No visible borders or buttons; plain text presentation
- **Spacing**: Tight vertical stacking of legend rows; key symbols aligned left, descriptions indented
- **Composition**: Part of info panel; appears at bottom of scrollable content

### Text links

- **Anatomy**: Inline text with no underline in default state
- **Surface color**: `{colors.dim-ink}` text color
- **Typography**: `{typography.navigation}` or `{typography.body}` depending on context
- **Shape**: No background, no border, no border radius; `{rounded.control}` of 0rem
- **Spacing**: Inline with surrounding text
- **Variants**: Links to external marketplaces (Raster, Verse, OpenSea) and project pages; contract address displayed as plain text

## Responsive behavior

The layout appears optimized for desktop viewing given the artwork grid scale and the left-aligned info panel with substantial right margin. For narrower viewports, the three-column artwork grid should collapse to two columns and then single column to maintain image legibility. The info panel's comfortable line length in the left portion of the viewport suggests an implicit max-width of approximately 40-50rem for readability; on narrow screens, this would become the full width with reduced side margins.

The keyboard controls indicate an interactive viewing mode that likely dominates the full viewport. In this mode, the info panel may be toggleable (the "i" key for info), suggesting the responsive behavior should prioritize the artwork display with information available on demand rather than competing for space.

## Practical implementation guidance

### Preserve
- The stark dark canvas and limited grayscale palette—this restraint is essential to the work's presentation
- The single bold title against all-light-weight body text hierarchy
- The three-column grid with tight gutters for artwork display
- The left-aligned, catalog-like information layout with generous right margin
- The explicit keyboard shortcut documentation as part of the interface
- Sharp corners throughout; the 0rem radius is integral to the technical, unadorned aesthetic

### Avoid
- Adding accent colors, gradients, or decorative elements to the interface
- Rounded corners on any containers or images—the aesthetic is sharp and technical
- Heavy shadows or elevation effects; the flatness is intentional
- Multi-column text layouts for the info panel; the narrow single column is part of the character
- Generic UI patterns like cards, badges, or button components that would feel out of place

### Recommended build order
1. Establish the dark canvas background and single-column text layout with proper max-width
2. Implement the typography hierarchy with Helvetica Neue at the specified weights and sizes
3. Build the three-column artwork grid with object-fit images and tight gutters
4. Add the info panel content with proper section spacing and the keyboard legend
5. Implement the interactive viewing mode with keyboard controls as documented
6. Test responsive collapse of grid and comfortable reading width for text

### Accessibility
- The light text on dark background meets contrast requirements for body text; verify that `#969696` on `#161616` meets WCAG AA for the intended size
- Keyboard controls should have visible focus indicators when navigating by tab; the plain text presentation may need subtle enhancement for keyboard-only users
- The interactive artwork viewer should respect `prefers-reduced-motion` if animations are present
- Consider adding `aria-label` descriptions for the artwork images since they lack visible captions

## Scope note

This guide covers the landing and information page for the Link² project. The interactive artwork viewer with its animation, zoom, and step controls is referenced in the keyboard legend but its full implementation details are not documented here. No mobile-specific layouts, loading states, or error handling were visible in the supplied material. The spacing values reflect the limited measurements available; implementers should verify vertical rhythm in context.

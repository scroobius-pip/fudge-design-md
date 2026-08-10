# How jarbus.net is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/jarbus.net-design)

Last updated: 2026-08-10

## Captured pages

[![Blog post page with pixel-art tree illustration, date badge, navigation links, and fiction body text in monospace font on black background](https://pin.fontofweb.com/3824?format=jpg)](https://design.withfudge.com/share/pin-3824)

[Blog post page with pixel-art tree illustration, date badge, navigation links, and fiction body text in monospace font on black background](https://design.withfudge.com/share/pin-3824)

[![Homepage with pixel-art tree logo, navigation, bio paragraph, newest post link, and featured projects list with underlined links](https://pin.fontofweb.com/3823?format=jpg)](https://design.withfudge.com/share/pin-3823)

[Homepage with pixel-art tree logo, navigation, bio paragraph, newest post link, and featured projects list with underlined links](https://design.withfudge.com/share/pin-3823)

## Overview

jarbus.net is a personal website with a distinctive retro-computing aesthetic. The design evokes early terminal interfaces and 8-bit computing through its exclusive use of a monospace bitmap font, pixel-art imagery, and a deliberately constrained color palette. The visual system is built around a pure black canvas that serves as negative space, allowing the mint-green accent color and white text to create sharp, high-contrast focal points. The site structure is minimal and content-forward: a homepage presenting a brief bio, navigation, and featured projects; and interior blog post pages with dated entries and fiction content. The pixel-art tree illustration functions as both logo and thematic anchor, appearing consistently across page types. There are no gradients, no shadows, no rounded corners beyond subtle badge treatments, and no complex layout systems—just vertical stacking, centered alignment, and careful typographic hierarchy achieved through size and spacing rather than weight variation.

## Colors

The color system is intentionally austere, drawing from terminal and early computing palettes. Every color serves a specific functional role with no decorative excess.

| token | value | use |
|---|---|---|
| canvas | #000000 | Page background; dominant surface that creates infinite depth |
| ink | #ffffff | Primary text color; headings, body copy, and list markers |
| accent | #a8f0c6 | Interactive elements; navigation links, underlined project titles, and hyperlink states |
| accent-muted | #5a8a6e | Pixel-art illustration fill; secondary decorative elements |
| surface | #1a1a1a | Elevated containers; date badge background |

The canvas color is absolute black, creating a void-like environment that makes the limited accent colors appear luminous by contrast. The ink color is pure white, maintaining maximum legibility without anti-aliased softness. The accent color is a pale mint green that appears in all interactive text—navigation links, post titles, and project names—creating a consistent affordance pattern. The accent-muted color appears only in the pixel-art tree illustration, where it serves as the foliage and ground fill, connecting the imagery to the site's interactive color language while remaining subordinate. The surface color provides subtle elevation for the date badge component, distinguishing it from the flat canvas without introducing visual noise.

The relationship between colors is hierarchical: black dominates spatially, white carries information, mint green signals interaction, and the muted green anchors the illustrative identity. There is no light mode, no dark mode toggle, and no photographic color integration beyond the pixel-art's own limited palette.

## Typography

The typographic system relies on a single font family rendered at multiple sizes, with hierarchy established through scale and spacing rather than weight or style variation.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| body | Unifont | 1rem | 500 | 1.5 | 0em | Paragraph text, list descriptions, bio content |
| display | Unifont | 1.5rem | 500 | 1.2 | 0em | Page titles, section headings, post titles |
| label | Unifont | 0.75rem | 500 | 1.2 | 0em | Date badges, metadata, small annotations |
| navigation | Unifont | 1rem | 500 | 1.2 | 0em | Primary navigation links, category links |

Unifont is a bitmap monospace font that renders with crisp, pixel-perfect edges at integer sizes. The Medium weight (500) is the sole weight used throughout; there is no Bold or Regular variant in active use. Font sizes are set in rem units based on a 4px relative unit, with display at 24px (6 units), body and navigation at 16px (4 units), and label at 12px (3 units). Line heights are tight to maintain the compact, terminal-like density of the interface. Letter spacing is zero throughout, preserving the font's native bitmap spacing.

The monospace characteristic is essential to the aesthetic: all characters occupy equal width, creating vertical alignment opportunities and reinforcing the computing heritage. Underlined text is used extensively for links, with the underline itself serving as the primary interactive indicator rather than color change or background shift.

Verify licensing for these families before production use.

## Layout

The layout system is fundamentally single-column and centered, with no sidebar, no grid, and no complex responsive breakpoints visible in the supplied material.

Content is constrained to a maximum readable width and centered horizontally within the viewport. The homepage stacks elements vertically: pixel-art tree logo, navigation row, bio paragraph, newest post callout, and featured projects list. The blog post page follows a similar vertical rhythm: date badge, tree logo, navigation, post title, date subtitle, and body text.

Spacing between major sections uses 2rem (8 relative units) as a standard section gap. The navigation row on both pages shows links separated by horizontal whitespace rather than vertical stacking, suggesting a flex or inline layout with gap spacing of approximately 1.5rem between items. List items in the featured projects section use tighter vertical spacing of approximately 0.5rem between the project title and its description, with larger gaps of approximately 1rem between distinct project entries.

The content maximum width is approximately 40rem, creating a narrow reading column that prevents long line lengths in the monospace font. There is no visible container padding on the page edges; the black canvas extends to viewport boundaries, and content alignment is achieved through max-width and auto margins on inner containers.

The pixel-art tree illustration is centered above the navigation on both pages, establishing a consistent header landmark. Its dimensions appear fixed rather than responsive, maintaining pixel-perfect rendering without scaling artifacts.

## Visual language

The visual language of jarbus.net is defined by intentional technological nostalgia and computational minimalism. Every design decision reinforces a reading of the site as a terminal window or early personal computer interface.

The pixel-art tree illustration is the sole visual ornament, rendered in a limited palette of white and muted green against the black background. Its blocky, dithered appearance is consistent with 1980s computer graphics and serves as identity mark rather than mere decoration. The illustration's placement—centered, above navigation, repeated across pages—makes it function as a site logo.

Interactive elements are signaled exclusively through the mint-green accent color and underline text decoration. There are no buttons with backgrounds, no hover state previews visible in still images, and no iconography beyond text characters themselves. The tilde prefix on "~jarbus" in navigation reinforces the Unix-home-directory convention, deepening the terminal aesthetic.

The absence of curves, shadows, and gradients creates a flat, cut-out quality. The single rounded badge (the date stamp on blog posts) uses a minimal 1px border radius, just enough to distinguish it from pure rectangles without softening the overall hardness. Borders are hairline-thin at 1px, used only for the badge container.

List presentation uses standard bullet markers for project lists and hollow circles for nested descriptions, maintaining plain HTML semantics without custom icon substitution. The overall impression is of a document that has been minimally styled rather than heavily designed—authentic to the era it references.

## Components

### Navigation

- **Anatomy**: Horizontal row of text links, centered below the pixel-art tree logo
- **Surface and text color**: Transparent background; accent color (#a8f0c6) text
- **Typography**: navigation token at 1rem
- **Shape and border**: No visible border or background; text-only
- **Spacing**: Links separated by approximately 1.5rem horizontal gap; total navigation block spaced 2rem below logo and 2rem above subsequent content
- **Composition**: Flex row, centered, wrapping permitted
- **Variants**: Homepage shows "~jarbus", "posts", "list", "rss"; blog post shows same set with potential active state indication

### Date Badge

- **Anatomy**: Single-line text container with border, appearing above content on blog posts
- **Surface and text color**: surface (#1a1a1a) background; ink (#ffffff) text
- **Typography**: label token at 0.75rem
- **Shape and border**: 1px solid ink border; 0.25rem border radius
- **Spacing**: Internal padding approximately 0.5rem vertical and 1rem horizontal; positioned centered above tree logo with 2rem clearance
- **Composition**: Inline-block, centered
- **Variants**: Single visible variant showing date and time in technical format ("0x0d-I: March 13th, 2181, 10:00pm")

### Content Block

- **Anatomy**: Max-width text container for bio, post content, and project descriptions
- **Surface and text color**: Transparent background; ink text for body, accent for links
- **Typography**: body token at 1rem for paragraphs; display token at 1.5rem for titles
- **Shape and border**: No border, no background, no radius
- **Spacing**: Paragraph spacing at 1rem; title-to-content spacing at 1.5rem
- **Composition**: Centered block, max-width 40rem, auto horizontal margins
- **Variants**: Homepage bio block; blog post body block; project list with nested description paragraphs

### Project List Item

- **Anatomy**: Bulleted entry with underlined title and indented description paragraph
- **Surface and text color**: Transparent; accent title, ink description
- **Typography**: body token for both title and description; title underlined
- **Shape and border**: No container styling
- **Spacing**: 1rem between list entries; 0.5rem between title and nested description; description indented with list marker
- **Composition**: Standard unordered list with nested unordered list for descriptions
- **Variants**: Multiple project entries with consistent structure

### Link

- **Anatomy**: Inline text with underline decoration
- **Surface and text color**: Transparent background; accent (#a8f0c6) text
- **Typography**: Inherits parent context (body or navigation)
- **Shape and border**: No border; text-decoration underline
- **Spacing**: No additional spacing beyond inline flow
- **Composition**: Inline element within text blocks
- **Variants**: Navigation links (no surrounding text); inline content links (within sentences); project title links (list item leaders)

## Responsive behavior

The supplied images show only desktop-scale presentation. Based on the design's characteristics, the following responsive considerations are recommended:

The single-column layout with centered max-width content should adapt gracefully to narrower viewports without structural change. The navigation row may require wrapping to multiple lines on very narrow screens; this is acceptable given the small link count. The pixel-art tree should maintain its fixed dimensions to prevent scaling artifacts—bitmap graphics do not respond well to fluid resizing.

Font sizes in rem units will scale with browser defaults, maintaining readability. The monospace nature means line lengths are predictable; the 40rem content maximum should be preserved or slightly reduced on small screens to prevent horizontal scrolling.

No breakpoint-specific layout changes are visible in the material. The design's simplicity suggests a largely fluid approach with minimal media query intervention.

## Practical implementation guidance

### Preserve
- The absolute black canvas as the dominant background; any deviation lightens the terminal aesthetic
- Pixel-perfect rendering of the tree illustration; use `image-rendering: pixelated` and display at integer multiples of original dimensions
- Monospace consistency; never mix proportional fonts, even for headings
- The mint-green accent for all interactive elements; maintain this as the sole link color
- Underline as the primary interactive indicator; do not replace with background pills or border buttons

### Avoid
- Anti-aliasing on the Unifont family; bitmap fonts require crisp rendering
- Rounded corners beyond the minimal badge treatment
- Shadows, gradients, or any dimensional effects
- Multi-column layouts that break the vertical reading rhythm
- Custom list markers that depart from browser defaults; the plain circle and bullet are appropriate

### Recommended build order
1. Establish the black canvas and load Unifont with proper font-display strategy
2. Implement centered content container with max-width constraint
3. Add pixel-art tree with fixed dimensions and pixelated rendering
4. Build navigation component with accent color and underline
5. Style typography hierarchy with size-only variation
6. Add badge component with subtle border and surface background
7. Implement project list with nested structure
8. Verify all interactive elements meet minimum touch targets if mobile use is expected

### Accessibility
- The high contrast between ink (#ffffff) and canvas (#000000) exceeds WCAG AAA requirements for normal text
- The accent color against black should be verified for contrast compliance; the mint green may be insufficient for small text at label sizes
- Underline decoration on links provides non-color identification of interactive elements
- The monospace font may present readability challenges for some users; ensure browser font resizing works correctly
- No motion or animation is present to trigger vestibular concerns

## Scope note

This guide covers the homepage and blog post surfaces visible in the supplied images. Measurements are practical adaptation targets. RSS feeds, archive list pages, and any project detail pages are not represented. Mobile layouts, hover states, focus indicators, and loading states are not documented. The complete type scale and spacing system may extend beyond the values shown.

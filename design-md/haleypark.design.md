# How haleypark.design is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/haleypark.design-design)

Last updated: 2026-08-10

## Captured pages

[![Thoughts page with Gothic archway wireframes, centered rosette ornament, and article list with year labels on deep navy ground](https://pin.fontofweb.com/5880?format=jpg)](https://design.withfudge.com/share/pin-5880)

[Thoughts page with Gothic archway wireframes, centered rosette ornament, and article list with year labels on deep navy ground](https://design.withfudge.com/share/pin-5880)

[![About Me footer with arched blackletter 'Let's be friends?' heading, social link grid, and checkerboard border on dark teal ground](https://pin.fontofweb.com/5879?format=jpg)](https://design.withfudge.com/share/pin-5879)

[About Me footer with arched blackletter 'Let's be friends?' heading, social link grid, and checkerboard border on dark teal ground](https://design.withfudge.com/share/pin-5879)

[![Thoughts page full view showing pill-shaped navigation with keyboard shortcuts, page title, and three Gothic arch columns](https://pin.fontofweb.com/5878?format=jpg)](https://design.withfudge.com/share/pin-5878)

[Thoughts page full view showing pill-shaped navigation with keyboard shortcuts, page title, and three Gothic arch columns](https://design.withfudge.com/share/pin-5878)

[![Thoughts page alternate view with identical navigation and arch structure, demonstrating consistent page architecture](https://pin.fontofweb.com/5877?format=jpg)](https://design.withfudge.com/share/pin-5877)

[Thoughts page alternate view with identical navigation and arch structure, demonstrating consistent page architecture](https://design.withfudge.com/share/pin-5877)

## Overview

This design system governs a personal portfolio website with a distinctive Gothic revival aesthetic. The visual language merges architectural drawing conventions—wireframe arches, rosette ornaments, and structural crosshairs—with blackletter-inspired display typography and a restrained dark palette. The result reads as an illuminated manuscript translated into digital space: every page feels like a spread from a carefully constructed book of hours, where content is framed by ornamental structure rather than contained by conventional UI boxes.

The site presents three primary sections—Work, Thoughts, and About Me—accessed through a persistent pill-shaped navigation bar that floats at the top of each page. The Thoughts page, the most fully represented in the available material, organizes writings and talks beneath a hierarchical title structure and within a three-column archway diagram that serves as both navigation and decorative motif. The About Me page culminates in a social connection footer with an arched blackletter invitation. Throughout, the design maintains a consistent dark ground with warm off-white text, creating the impression of candlelit vellum or deep indigo paper.

## Colors

| token | value | use |
|---|---|---|
| ink | #000000 | Deepest shadow areas, pure black for maximum contrast moments |
| canvas | #1a1d29 | Primary page background, the dominant dark navy ground |
| surface | #16202a | Slightly deeper variant for footer sections and layered areas |
| accent | #e8ddd4 | Primary text color, warm off-white with cream undertone |
| muted | #8a9aaa | Secondary text, year labels, wireframe lines, decorative borders |

The color system operates in a near-monochrome dark mode with a single warm accent. The canvas color establishes an immersive, nocturnal atmosphere that allows the architectural wireframes and ornamental typography to emerge as luminous elements against the deep ground. The accent color carries a subtle warmth—more cream than pure white—which prevents the harshness of clinical contrast and reinforces the aged-paper or vellum quality suggested by the blackletter forms.

The muted color serves multiple structural roles: it defines the thin wireframe lines of the Gothic arches, appears in year labels and secondary metadata, and forms the border of the navigation pill. This limited palette creates a disciplined hierarchy where only two values compete for attention—the warm accent for content and the cool muted for structure—while the dark canvas recedes to become pure atmosphere.

No light mode is represented in the available material. The system appears designed for sustained dark viewing, with the warm accent providing sufficient contrast for readability without the fatigue of pure white on pure black.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Bn Wispy | 4rem | 400 | 1 | 0em | Page titles, arched display phrases |
| section-display | Pp Editorial Old | 3rem | 200 | 1.1 | -0.01em | Section subtitles, italicized headers |
| body | Old Standard Tt | 1.25rem | 400 | 1.5 | 0em | Article titles, link labels, body text |
| label | Altesse Std Regular 24 Pt | 0.875rem | 400 | 1.2 | 0.02em | Year markers, navigation shortcuts, metadata |
| ornament | Bodoni Classic Ornaments | 1.5rem | 400 | 1 | 0em | Decorative symbols, section dividers |

The typographic system unites five distinct families into a coherent hierarchy. Bn Wispy provides the blackletter character for primary display, its fractured, calligraphic forms establishing immediate historical resonance. Pp Editorial Old in Ultralight Italic serves secondary display with an elegant, slightly mannered contrast to the heavier blackletter. Old Standard TT anchors the system in classical readability for functional text. Altesse Std Regular 24 Pt contributes a refined, slightly archaic character for small labels and metadata. Bodoni Classic Ornaments supplies purely decorative glyphs.

The scale derives from a 4px relative unit, with sizes locked to whole-number multiples: 0.875rem (14px), 1.25rem (20px), 1.5rem (24px), 3rem (48px), and 4rem (64px). This creates a deliberate, measured rhythm appropriate to the system's archival temperament.

Verify licensing for these families before production use. No designer or vendor attribution is supported by the available records.

## Layout

The layout architecture centers on generous negative space and symmetrical framing. Pages employ a full-bleed dark canvas with content concentrated in measured horizontal bands. The Thoughts page demonstrates a three-zone vertical structure: navigation pill at top, title cluster in the upper third, and the archway diagram occupying the lower two-thirds.

The archway composition represents the system's most distinctive layout gesture. Three Gothic arches stand as wireframe columns, their pointed tops and stepped bases creating a rhythmic architectural screen. The central arch contains a circular rosette ornament; the flanking arches frame article titles with associated year labels. This tripartite structure suggests a cathedral facade or illuminated manuscript border translated into responsive web space.

Horizontal rules with terminal crosshairs divide sections, reinforcing the drafting-table aesthetic. The plus-sign terminals at rule ends echo architectural dimension marks and contribute to the consistent ornamental vocabulary.

Spacing follows a 4px base unit with semantic multiples. Section breaks use 6rem (96px) to create dramatic pauses between content areas. Content gutters employ 2rem (32px) for comfortable reading measure. The navigation pill maintains internal padding of approximately 0.75rem vertical and 2rem horizontal, creating a slender, elegant capsule shape.

The footer section on the About Me page introduces a different spatial rhythm: the arched heading commands the upper portion, followed by a evenly distributed link grid, with a decorative checkerboard border anchoring the bottom edge. This creates a more social, conversational density compared to the contemplative spaciousness of the Thoughts page.

## Visual language

The visual language synthesizes three historical references into a unified digital dialect: medieval manuscript illumination, 19th-century architectural drafting, and early digital brutalism. The blackletter forms evoke the former; the wireframe arches and crosshair terminals reference the middle; the stark dark mode and minimal color palette suggest the latter.

Ornament functions as structure rather than decoration. The rosette in the central arch, the crosshair rule terminals, and the keyboard shortcut badges in navigation all serve functional purposes while maintaining decorative density. This integration of utility and beauty mirrors the medieval principle that every structural element deserves artistic attention.

The wireframe aesthetic—thin lines describing three-dimensional forms without filling them—creates a peculiar depth effect. The arches read simultaneously as solid architecture and as ghostly projection, as if the page were a palimpsest where multiple drawings occupy the same space. This ambiguity suits a portfolio that presents past work as layered archaeological record.

The checkerboard border in the footer introduces a folk-art or vernacular note, contrasting with the high culture references elsewhere. This juxtaposition prevents the system from becoming merely precious or academic; it admits playfulness and personality into the historical frame.

## Components

### Navigation pill

- **Anatomy**: Horizontal capsule containing three section links (Work, Thoughts, About Me), each with a keyboard shortcut badge in superscript position. Decorative plus signs terminate the pill's left and right extremes.
- **Surface**: Transparent background with 1px muted border creating the pill silhouette.
- **Typography**: Label token for section names; smaller label treatment for keyboard shortcuts.
- **Shape**: Full pill radius (9999px), creating an elongated oval that floats above content.
- **Spacing**: Generous horizontal padding, approximately 2rem internal, with links distributed evenly across the width.
- **Composition**: Fixed or sticky positioning at page top, centered horizontally, establishing consistent wayfinding across all pages.

### Page title cluster

- **Anatomy**: Stacked heading pair with primary title above and descriptive subtitle below.
- **Typography**: Hero-display token for the title (Bn Wispy blackletter); section-display token for subtitle (Pp Editorial Old Ultralight Italic).
- **Color**: Accent color for both elements, with the subtitle slightly more restrained through lighter weight and italic posture.
- **Spacing**: Tight vertical coupling, approximately 1rem between title and subtitle, creating a single visual unit.
- **Composition**: Center-aligned, occupying the upper third of the page below navigation.

### Archway diagram

- **Anatomy**: Three identical Gothic arch wireframes arranged horizontally. Each arch features a pointed top, straight sides, and stepped base. Central arch contains a circular rosette ornament.
- **Surface**: Transparent fill with 1px muted border defining all architectural lines.
- **Composition**: Symmetrical distribution across page width, with arches touching or nearly touching at their bases. The rosette centers precisely within the middle arch.
- **Function**: Serves as both decorative frame and content organizer—article titles position beside arch columns, with year labels aligned to arch edges.

### Article list item

- **Anatomy**: Year label paired with article title, positioned adjacent to arch structure.
- **Typography**: Label token for year (muted color); body token for title (accent color).
- **Spacing**: Comfortable vertical breathing room between items, approximately 2rem.
- **Composition**: Left-column items align to left arch; right-column items align to right arch. Year labels sit slightly above and to the side of titles, creating a hanging-indent relationship.

### Social connection footer

- **Anatomy**: Arched blackletter heading ("Let's be friends?"), playful subtitle, evenly distributed social link grid, and bottom checkerboard border.
- **Typography**: Hero-display token for the arched heading, with letters following a pronounced upward curve; body token for links.
- **Surface**: Surface color background, slightly deeper than page canvas.
- **Shape**: Checkerboard border composed of alternating squares, approximately 8px each, creating a decorative baseboard.
- **Composition**: Heading centered and arched; links distributed in two rows of equal spacing; colophon and archive links at bottom corners.

## Responsive behavior

The archway diagram presents the clearest responsive challenge. At narrower viewports, the three-column structure should collapse to a single column with arches stacking vertically or transforming into simplified frame elements. The wireframe lines must remain visible and crisp, suggesting a minimum stroke treatment of 1px regardless of scale.

The navigation pill's three links may require truncation to icons or a compact menu at small sizes, though the keyboard shortcut badges suggest a desktop-primary design. Consider maintaining the pill shape while reducing internal spacing and hiding shortcut indicators below a threshold.

Social link grids should reflow from multiple columns to stacked rows, preserving the even distribution principle. The arched heading may require reduced curvature or simplified letterforms to maintain legibility at smaller sizes.

Typography should scale down proportionally, with the hero-display token reducing to approximately 2.5rem on mobile to prevent excessive line breaks in the blackletter forms. The body token can remain at 1.25rem for comfortable reading.

## Practical implementation guidance

### Preserve
- The dark canvas as immersive default—never compromise the nocturnal atmosphere with light backgrounds
- The exact blackletter forms for primary display; substitute fonts will destroy the historical resonance
- The wireframe aesthetic with genuine 1px strokes, not simulated borders or shadows
- The warm accent against cool muted hierarchy for all text and structural elements
- The symmetrical, centered compositions that create contemplative pacing

### Avoid
- Adding color accents beyond the established palette; the monochrome discipline is essential
- Filling the arch wireframes with solid color or gradients; the transparency is structural
- Using the ornament font for readable text; it serves purely decorative purposes
- Crowding the generous negative space with additional content or advertising modules
- Generic sans-serif substitutions for any established role

### Recommended build order
1. Establish the dark canvas and accent text colors as global defaults
2. Implement the typography scale with all five families loaded and verified
3. Build the navigation pill with proper pill radius and transparent background
4. Create the archway diagram as an SVG or CSS shape system with precise proportions
5. Develop the page title cluster with stacked heading structure
6. Integrate article list items with year-label alignment to arch edges
7. Construct the social footer with arched text path and checkerboard border
8. Add ornamental details: rosette, crosshair terminals, keyboard badges

### Accessibility
- Ensure the 1px wireframe lines meet minimum contrast requirements against the dark canvas; consider a slightly brighter muted value if necessary
- Provide focus indicators that complement the thin-line aesthetic, perhaps a 2px accent outline
- The blackletter forms may present readability challenges for some users; ensure body text remains in the more legible Old Standard TT
- Keyboard shortcut badges in navigation should correspond to actual accesskey implementations
- The arched text path in the footer may require aria-label supplementation for screen reader clarity

## Scope note

This guide covers the Thoughts and About Me pages of a personal portfolio site. The Work page, individual article templates, and any motion or interaction behaviors are not represented in the available material. Measurements are practical adaptation targets derived from visual inspection. No mobile breakpoint behavior, form components, or loading states are documented. Verify licensing for all font families before production use.

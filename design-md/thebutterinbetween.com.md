# How thebutterinbetween.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/thebutterinbetween.com-design)

Last updated: 2026-08-10

## Captured pages

[![Stories page with deep burgundy canvas, centered serif headline, and architectural photograph with green-lit columns](https://pin.fontofweb.com/3324?format=jpg)](https://design.withfudge.com/share/pin-3324)

[Stories page with deep burgundy canvas, centered serif headline, and architectural photograph with green-lit columns](https://design.withfudge.com/share/pin-3324)

[![About page with muted sage-green background, yellow italic introduction paragraph, and oversized yellow logotype at bottom](https://pin.fontofweb.com/3323?format=jpg)](https://design.withfudge.com/share/pin-3323)

[About page with muted sage-green background, yellow italic introduction paragraph, and oversized yellow logotype at bottom](https://design.withfudge.com/share/pin-3323)

[![Home page with full-bleed dark architectural photograph, yellow navigation and metadata, and massive yellow logotype overlay](https://pin.fontofweb.com/3322?format=jpg)](https://design.withfudge.com/share/pin-3322)

[Home page with full-bleed dark architectural photograph, yellow navigation and metadata, and massive yellow logotype overlay](https://design.withfudge.com/share/pin-3322)

## Overview

The Butter In Between is an editorial platform devoted to artist interviews and personal histories. Its visual system treats each page as a distinct atmospheric environment: deep burgundy, muted sage-green, or full-bleed photographic darkness serve as canvases for a consistent vocabulary of yellow typography and oversized display lettering. The design prioritizes emotional immersion over conventional content density. Navigation remains minimal and persistent, while the massive logotype "the Butter" functions as both brand signature and compositional anchor, often cropped at the viewport edge. The interplay between refined serif text and bold grotesque display creates tension between intimacy and monumentality, reflecting the publication's focus on private lives rendered with public weight.

## Colors

The palette is deliberately restrained, built on dark or muted canvases with a single warm accent that carries across every surface. The system shifts canvas color by page while keeping typography consistently legible through the yellow accent.

| token | value | use |
|---|---|---|
| ink | #000000 | Deep shadows, photographic darks, fallback text |
| canvas-burgundy | #6B1A1A | Stories page background; enveloping warm darkness behind centered content |
| canvas-sage | #6B7B72 | About page background; cool muted green for text-heavy reading |
| accent-butter | #FFF066 | Primary text, navigation, logotype, metadata on all dark canvases |
| accent-butter-muted | #E6D85C | Slightly softened yellow for secondary emphasis or hover states |

The burgundy canvas creates a gallery-like enclosure for photographic content, while the sage canvas offers a quieter field for extended reading. The butter yellow maintains consistent visibility against both, with sufficient warmth to feel inviting rather than clinical. Photographic content on the home page introduces deep blacks, emerald greens, and amber browns through imagery, but these remain in the photographic layer rather than the interface palette. No light canvas variant is present; the system operates entirely in dark or muted modes.

## Typography

Three families establish the typographic hierarchy: Alte Haas Grotesk for bold structural elements, Plantin Mt Pro for editorial body and display text, and Abc Marist for small labels and metadata. The contrast between the grotesque's weight and the serif's refinement drives the system's character.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Alte Haas Grotesk | 8rem | 700 | 0.85 | -0.03em | Massive page-bottom logotype, cropped by viewport |
| section-display | Plantin Mt Pro | 2rem | 400 | 1.2 | 0.01em | Story headlines, centered over imagery |
| body | Plantin Mt Pro | 1rem | 400 | 1.5 | 0em | Standard paragraphs, descriptions |
| body-italic | Plantin Mt Pro | 1rem | 400 | 1.5 | 0em | Introductory paragraphs, editorial emphasis |
| label | Abc Marist | 0.75rem | 400 | 1.3 | 0.02em | Location, time, metadata labels and values |
| navigation | Alte Haas Grotesk | 1rem | 700 | 1 | 0.05em | Top-bar page links, uppercase |

The hero display size is intentionally extreme, functioning as graphic architecture rather than conventional reading text. Section display sizes provide elegant hierarchy for story titles without competing with the logotype. Body text remains modest in scale, allowing generous line height for comfortable reading against dark backgrounds. The label style uses a lighter weight and tighter leading to cluster related metadata pairs efficiently.

Alte Haas Grotesk was designed by Yann Le Coroller. Plantin Mt Pro was designed by Frank Hinman Pierpont, available from Monotype Imaging Inc. Abc Marist was designed by Seb Mc Lauchlan, available from Dinamo. Verify licensing for these families before production use.

## Layout

The layout system favors full-bleed immersion with minimal structural scaffolding. Pages operate as single continuous surfaces rather than divided into conventional header-content-footer regions.

The global navigation sits at the top edge with three uppercase links distributed across the full width: left, center, and right. No background container separates navigation from page content; it floats directly on the canvas or photograph.

Content placement varies by page type. The home page presents a full-bleed architectural photograph as the entire viewport, with metadata labels positioned at the left edge, a centered headline, and a brief description at the right edge, all aligned to a common horizontal band across the middle. The massive logotype overlays the bottom edge, partially descending below the visible area. The stories page uses a solid burgundy canvas with the same centered headline pattern, but places the photograph below with generous vertical breathing room. The about page shifts to sage-green, left-aligns an italic introduction paragraph in the upper third, and anchors the logotype at the bottom with even more dramatic scale.

Spacing follows a 0.25rem base unit. Page margins are approximately 1.5rem from viewport edges. Section gaps between content groups measure 4rem. Text blocks maintain 1.5rem internal spacing between paragraphs or metadata pairs. All corners remain square; no border radii appear in any visible element.

## Visual language

The visual language draws from exhibition design and artist monographs. Dark, saturated canvases suggest gallery walls after hours, while the yellow typography evokes caption labels and directional signage. The oversized logotype functions as environmental graphics—scale shifts it from readable word to abstract form, with descenders and terminals disappearing beyond the frame.

Photography receives premium treatment: full-bleed, unbordered, often architectural or spatial in character. Images contain their own color drama—emerald light, amber shadow, deep black voids—so the interface palette deliberately restrains itself to avoid competition. The butter yellow acts as a consistent interpreter between these shifting photographic worlds.

Typography alternates between the warmth of Plantin Mt Pro's classical proportions and the blunt authority of Alte Haas Grotesk. This pairing suggests editorial tradition meeting contemporary graphic confidence. Italic body text appears for introductory or mission statements, signaling a more personal register. Uppercase navigation and mixed-case headlines create rhythm through case contrast rather than size alone.

## Components

### Global navigation

- **Anatomy**: Three text links distributed horizontally across the top edge.
- **Surface and text color**: Transparent background; butter yellow text.
- **Typography**: Navigation token, uppercase, bold weight.
- **Shape and border**: No visible container, borders, or background; square corners throughout.
- **Spacing**: Positioned at the top page margin, approximately 1.5rem from edges.
- **Composition**: Left link ("HOME"), center link ("STORIES"), right link ("ABOUT").
- **Variants**: Remains consistent across all visible pages.

### Story headline

- **Anatomy**: Single line of centered text, often with a name in uppercase.
- **Surface and text color**: Transparent; butter yellow.
- **Typography**: Section display token, with the interviewee's name in uppercase within the line.
- **Shape and border**: No container; square corners.
- **Spacing**: Centered vertically in the upper-middle portion of the viewport or content area.
- **Composition**: Frequently flanked by metadata on the left and descriptive text on the right in the home page variant.

### Metadata block

- **Anatomy**: Label-value pairs stacked vertically.
- **Surface and text color**: Transparent; butter yellow.
- **Typography**: Label token for both labels and values; labels appear slightly bolder through weight or rendering.
- **Shape and border**: No container; square corners.
- **Spacing**: Compact vertical stacking with minimal line separation.
- **Composition**: Left-aligned at the page margin; visible pairs include "Location / Humlebaek, Denmark" and "Time / January 20, 2022".

### Hero logotype

- **Anatomy**: The words "the Butter" in lowercase, with distinctive rounded terminals and a playful, almost blob-like character on certain letters.
- **Surface and text color**: Transparent; butter yellow.
- **Typography**: Hero display token, extremely large.
- **Shape and border**: No container; letters may be partially cropped by viewport bottom.
- **Spacing**: Tight leading, negative tracking, positioned at the bottom edge.
- **Composition**: Spans nearly full viewport width; descenders and final letterforms extend below visible area.
- **Variants**: Appears over both photographic and solid-color canvases.

### Body paragraph

- **Anatomy**: Left-aligned text block.
- **Surface and text color**: Transparent; butter yellow.
- **Typography**: Body or body-italic token.
- **Shape and border**: No container; max-width constrains line length; square corners.
- **Spacing**: 1.5rem below preceding element.
- **Composition**: Positioned in upper portion of about page; italic variant for mission statement.

## Responsive behavior

The system is designed for desktop-first viewing given the extreme scale of the logotype and the horizontal distribution of navigation and metadata. For narrower viewports, the three-part horizontal arrangement of the home page—metadata, headline, description—should stack vertically to maintain readability. The logotype may require reduced scale or adjusted cropping to prevent excessive horizontal overflow. Navigation links should remain accessible but may collapse to a simpler pattern or maintain their distributed layout if space permits. The about page's left-aligned text block should retain comfortable margins rather than extending to viewport edges.

## Practical implementation guidance

### Preserve
- The dramatic scale contrast between hero logotype and body text; this is the system's signature.
- The full-bleed, borderless treatment of photography.
- The consistent butter yellow across all text, regardless of canvas color.
- The uppercase-within-mixed-case pattern in story headlines.
- The three-point navigation distribution and transparent background.
- The square-corner aesthetic throughout; no rounded elements belong in this system.

### Avoid
- Adding background containers or cards around navigation or text; the system relies on direct canvas-to-type relationships.
- Introducing additional accent colors; the single yellow against shifting dark canvases is essential.
- Reducing logotype scale to fully fit within viewport; partial cropping is intentional.
- Using the hero display font for readable body text; reserve it for the logotype only.
- Applying border radii to any element; the rectilinear quality is fundamental.

### Recommended build order
1. Establish canvas color system with burgundy and sage variants.
2. Implement global navigation with uppercase grotesque and transparent background.
3. Add hero logotype with extreme scale and negative tracking, positioned at bottom edge.
4. Build story headline component with centered serif and embedded uppercase.
5. Create metadata block with compact label-value pairs.
6. Integrate full-bleed photography with overlay text positioning.
7. Add body paragraph styles with appropriate max-width constraints.

### Accessibility
- Ensure butter yellow text meets contrast requirements against both burgundy and sage canvases; test specifically for the lighter sage background.
- Provide text alternatives for the logotype when it functions as the primary brand identifier.
- Consider focus indicators for navigation links that remain visible against varying canvas colors.
- When scaling down for smaller viewports, maintain minimum touch targets for navigation links.

## Scope note

This guide covers the home, stories, and about page surfaces visible in the supplied material. Mobile layouts, hover states, loading behavior, form elements, and additional content templates are not represented. Measurements are practical adaptation targets.

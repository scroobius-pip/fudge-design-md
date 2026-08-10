# How mek.gallery is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/mek.gallery-design)

Last updated: 2026-08-10

## Captured pages

[![Dark biography section with pixel-art icon and mixed-weight serif typography describing Michael Alexander as MEK.txt](https://pin.fontofweb.com/5373?format=jpg)](https://design.withfudge.com/share/pin-5373)

[Dark biography section with pixel-art icon and mixed-weight serif typography describing Michael Alexander as MEK.txt](https://design.withfudge.com/share/pin-5373)

[![Homepage grid showing project thumbnails with category filters, navigation bar, and repeated dark biography footer](https://pin.fontofweb.com/5372?format=jpg)](https://design.withfudge.com/share/pin-5372)

[Homepage grid showing project thumbnails with category filters, navigation bar, and repeated dark biography footer](https://design.withfudge.com/share/pin-5372)

[![Vibrant blue project page with four red pixel-art saint figures in ornate frames and two-column body text](https://pin.fontofweb.com/4200?format=jpg)](https://design.withfudge.com/share/pin-4200)

[Vibrant blue project page with four red pixel-art saint figures in ornate frames and two-column body text](https://design.withfudge.com/share/pin-4200)

[![Bold blue poster page with large white display type spelling STYLITES and centered italic attribution details](https://pin.fontofweb.com/4199?format=jpg)](https://design.withfudge.com/share/pin-4199)

[Bold blue poster page with large white display type spelling STYLITES and centered italic attribution details](https://design.withfudge.com/share/pin-4199)

## Overview

MEK.gallery is the portfolio of Michael Alexander, a pixel and visual artist working under the name MEK.txt. The site's visual identity fuses digital minimalism with ecclesiastical and classical references, creating a gallery experience that treats each project as an artifact. The design operates in two distinct modes: a near-black canvas for browsing and biography, and saturated electric-blue surfaces for project presentations. This duality—dark utility versus vivid exhibition—structures the entire system. Typography pairs a refined classical serif for monumental display moments with a utilitarian sans-serif for navigation, metadata, and body reading. Pixel art appears both as content and as identity markers, reinforcing the artist's medium across every surface.

## Colors

The palette is intentionally stark, built on a near-black foundation with high-contrast accents that shift between cool electric blue and warm red depending on the project context.

| token | value | use |
|---|---|---|
| canvas | #000000 | Primary page background, navigation bar, biography sections |
| surface | #0a0a0a | Slightly elevated dark panels, project card backgrounds |
| ink | #ffffff | Primary text on dark backgrounds, display type on blue surfaces |
| muted-ink | #999999 | Secondary text, metadata, dates, captions |
| accent-blue | #0000ff | Project hero backgrounds, exhibition surfaces, poster pages |
| accent-red | #ff0000 | Pixel artwork highlights, decorative crosses, active states |

The dark mode dominates browsing contexts. The homepage grid, navigation, and biography footer all sit on pure or near-pure black, allowing colorful project thumbnails to generate their own visual rhythm. When a project opens, the surface can invert to saturated electric blue with white typography, creating an immersive exhibition environment. Red appears selectively within artwork and as functional decoration—cross motifs, emphasis elements—never as large surface areas. The system avoids gradients and shadows, relying on flat color blocks and sharp edges for spatial definition.

## Typography

Five families are present in the system: Instrument Serif and its italic companion Instrument Serif-Italic for display and editorial moments; Mekmode-Text for functional and body content; Mekmode-Dings for iconographic and symbolic elements; and Redressed for occasional script accents. Instrument Serif was designed by Rodrigo Fuenzalida and is available from Frag Type. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Instrument Serif | 6rem | 400 | 0.9 | -0.02em | Project titles, poster headlines |
| section-display | Instrument Serif | 3rem | 400 | 1 | -0.01em | Section headers, project names in grid |
| body | Mekmode-Text | 1rem | 400 | 1.5 | 0em | Default paragraph text |
| body-large | Mekmode-Text | 1.25rem | 400 | 1.4 | 0em | Biography descriptions, featured text |
| label | Mekmode-Text | 0.75rem | 400 | 1.2 | 0.05em | Dates, categories, metadata |
| navigation | Mekmode-Text | 0.75rem | 400 | 1 | 0.08em | Menu items, filters, uppercase nav |
| legal-copy | Mekmode-Text | 0.75rem | 400 | 1.3 | 0em | Footer text, small print |
| accent-script | Redressed | 1.5rem | 400 | 1.2 | 0em | Emphasized phrases, editorial accents |

Instrument Serif carries the voice of the gallery: classical, slightly austere, with sharp terminals that echo the pixel precision of the artwork. It appears at large scale with tight leading and negative tracking, treated more as image than text. The italic variant serves attribution lines and editorial asides with the same classical temperament. Mekmode-Text provides the utilitarian counterpoint—neutral, evenly spaced, legible at small sizes for navigation and dense information. Mekmode-Dings supplies the symbolic characters and decorative marks visible in navigation and project metadata. Redressed appears sparingly, adding a humanist script warmth to select phrases within otherwise formal compositions.

## Layout

The layout system is grid-based and edge-to-edge, with minimal container padding and no rounded corners. The homepage presents a masonry-style project grid with uniform gaps, each cell containing a thumbnail, project title, category icon, and date. Above the grid, a full-bleed hero carousel or featured project area occupies substantial vertical space, allowing individual works to command attention before the browsing pattern begins.

Navigation sits fixed at the top, compact and uppercase, with category filters aligned to the right. The biography section anchors the bottom of the homepage, repeating across pages as a signature block with a pixel-art icon and mixed-weight text.

Project pages shift to a dedicated presentation mode. The blue poster template centers massive display type with metadata distributed across three columns below. Body content uses a two-column asymmetric layout, with wider text blocks offset by narrower companion columns. Images and artwork sit full-bleed within their sections, separated by generous vertical spacing.

Spacing follows a 0.25rem base unit. Section breaks use 6rem of vertical space. Grid gaps are 1rem. Component internal padding ranges from 1rem to 2rem depending on density requirements.

## Visual language

The visual language draws from three sources: early digital aesthetics, classical religious iconography, and modernist exhibition design. Pixel art is not merely content but a structural element—tiny figures appear as identity marks, navigation hints, and decorative motifs alongside typography. The cross symbol recurs as a personal signature, rendered in red against dark or blue grounds.

Image treatment favors high contrast and limited palettes. Thumbnails preserve their native color but sit within strict rectangular frames. No rounded corners soften the grid; every edge is sharp, every boundary absolute. The blue project surfaces evoke gallery walls or screen glow, immersing the viewer in a single work's world.

Typography and imagery interact directly. Display type may overlap or sit adjacent to pixel figures. The serif's classical forms create deliberate friction with the digital roughness of the artwork, suggesting historical continuity between illuminated manuscripts and contemporary pixel practice.

## Components

### Navigation Bar

- Anatomy: Fixed top bar with left-aligned logo mark, center-aligned primary links (PROJECT, SHOP, MEK.TXT), right-aligned search and utility icons
- Surface: Transparent or matching canvas black, no border or shadow
- Typography: Uppercase navigation token with wide letter-spacing
- Spacing: Compact height, generous horizontal padding

### Project Card

- Anatomy: Square or landscape thumbnail, project title in section-display or label token, category icon, date stamp
- Surface: Surface color background, thumbnail fills frame with no border radius
- Typography: Title in section-display for featured cards, label for compact grid items
- Spacing: 1rem gap between cards, internal padding minimal
- Composition: Thumbnail dominant, text below or overlaid with gradient scrim

### Biography Block

- Anatomy: Pixel-art icon left-aligned, multi-line description with mixed regular and script weight
- Surface: Canvas black, full-width
- Typography: Body-large for primary description, accent-script for emphasized phrases
- Spacing: Centered or left-aligned with substantial vertical padding

### Hero Poster

- Anatomy: Centered display type, small decorative icon above, three-column metadata below
- Surface: Accent-blue full-bleed
- Typography: Hero-display in white, label-sized metadata in white with italic attribution
- Spacing: Generous vertical padding, type centered horizontally

### Filter Bar

- Anatomy: Horizontal list of category tags with active state indicator
- Surface: Transparent over canvas
- Typography: Label token, uppercase
- Composition: Right-aligned below hero or at grid top

## Responsive behavior

The grid should collapse from multi-column to single-column on narrow viewports, maintaining 1rem gaps. Hero display type should scale down proportionally, preserving the dramatic size contrast between headline and body. The three-column metadata on poster pages should stack vertically on small screens, maintaining reading order. Navigation should remain accessible, potentially condensing to a compact menu trigger if horizontal space is constrained. Biography blocks should reflow from side-by-side icon and text to stacked layout.

## Practical implementation guidance

### Preserve
- The absolute black canvas as the default ground; do not lighten the base
- Sharp corners throughout; no border-radius on cards, buttons, or images
- The contrast between classical serif display and utilitarian sans-serif function
- Pixel art icons at their native scale, never blurred or smoothed
- Full-bleed color surfaces for project presentations

### Avoid
- Gradients, shadows, or dimensional effects on any surface
- Rounded buttons or pill-shaped tags
- Generic placeholder imagery; every thumbnail should represent actual work
- Body text in the serif family at small sizes
- Centered paragraphs for long-form reading

### Recommended Build Order
1. Establish the black canvas and base typography scale
2. Implement the navigation bar with uppercase Mekmode-Text
3. Build the project grid with uniform gaps and sharp-cornered thumbnails
4. Add the biography footer with pixel icon and mixed-type treatment
5. Create the blue poster template for project deep-dives
6. Refine responsive collapse for grid and poster layouts

### Accessibility
- Ensure white text on blue surfaces meets contrast minimums; the pure blue may need slight darkening for WCAG compliance
- Provide text alternatives for pixel-art icons that carry semantic meaning
- Maintain keyboard focus indicators that respect the sharp-edge aesthetic
- Consider a reduced-motion preference for any carousel or scroll-driven effects

## Scope note

This guide covers the homepage browsing experience and project poster presentation surfaces visible in the supplied images. Shop pages, individual project detail variations beyond the poster template, mobile navigation patterns, and interactive states are not represented. Measurements are practical adaptation targets derived from visual inspection.

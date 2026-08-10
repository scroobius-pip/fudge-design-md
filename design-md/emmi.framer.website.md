# How emmi.framer.website is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/emmi.framer.website-design)

Last updated: 2026-08-10

## Captured pages

[![Playground page with scattered project cards, handwritten-style icons, and a dotted canvas background showing an exploratory collage layout](https://pin.fontofweb.com/3877?format=jpg)](https://design.withfudge.com/share/pin-3877)

[Playground page with scattered project cards, handwritten-style icons, and a dotted canvas background showing an exploratory collage layout](https://design.withfudge.com/share/pin-3877)

[![About section with rotated orange card, peach text box, blue sticker, and green Chinese character label on warm off-white background](https://pin.fontofweb.com/3876?format=jpg)](https://design.withfudge.com/share/pin-3876)

[About section with rotated orange card, peach text box, blue sticker, and green Chinese character label on warm off-white background](https://design.withfudge.com/share/pin-3876)

[![Dark footer with italic serif quote, ASCII-art garden sprites in pink and green, and minimal navigation columns](https://pin.fontofweb.com/3875?format=jpg)](https://design.withfudge.com/share/pin-3875)

[Dark footer with italic serif quote, ASCII-art garden sprites in pink and green, and minimal navigation columns](https://design.withfudge.com/share/pin-3875)

## Overview

Emmi Wu's portfolio presents a deliberately unpolished, craft-forward visual system that balances editorial refinement with playful spontaneity. The design operates across two distinct modes: a warm off-white canvas for daytime browsing and a near-black dark mode for dramatic contrast. The core personality emerges from the tension between classical serif typography—used for display and poetic moments—and utilitarian monospace for navigation, labels, and functional text. The layout rejects rigid grids in favor of scattered, collage-like compositions where cards, stickers, and image tiles appear to have been placed by hand. Tiny ASCII-art sprites and hand-drawn icons populate the negative space, reinforcing the designer's stated interests in prototyping, storytelling, and visual craft. This is a portfolio that performs personality rather than merely describing it.

## Colors

The palette is intentionally restrained, with warm neutrals and a small set of vivid accents that appear in specific component roles. The system supports light and dark modes through canvas and ink inversion.

| token | value | use |
|---|---|---|
| canvas | `#FAF8F5` | Primary page background in light mode; warm off-white with subtle cream undertone |
| canvas-dark | `#1A1917` | Dark mode background; near-black with warm charcoal quality |
| ink | `#000000` | Primary text on light backgrounds; exact black from interface specification |
| ink-light | `#FAF8F5` | Text on dark backgrounds and orange surfaces |
| accent-orange | `#F05A28` | Primary interactive and highlight surfaces; info cards, active states |
| accent-peach | `#FFD4C2` | Secondary text box backgrounds; softer complement to orange |
| accent-green | `#C4D94E` | Label backgrounds, sprite details, and sporadic highlights |
| accent-blue | `#A8D0F0` | Sticker elements, decorative accents, and icon containers |

The light mode dominates the portfolio's work and about sections, where the warm off-white canvas allows photography and colorful project thumbnails to breathe. The dark mode appears in the footer, creating a dramatic terminal-like atmosphere where the ASCII sprites glow in pink and green against the deep background. Accents are deployed sparingly and semantically: orange signals identity and primary information, peach provides secondary containment, green labels specific metadata, and blue handles decorative and sticker-like elements. No gradients or shadows are employed; color blocks sit flat against the canvas.

## Typography

Four font families establish the typographic hierarchy, each serving a distinct communicative role. The display voice is entirely Self Modern's elegant serif, while functional and technical text belongs to IBM Plex Mono. Body copy uses the lighter weight of Figtree, and Kode Mono appears available for specialized code-like moments.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Self Modern | 3rem | 400 | 1.1 | -0.01em | Large statements, about card headlines, poetic quotes |
| section-display | Self Modern | 2rem | 400 | 1.2 | 0em | Footer quotes, section introductions |
| body | Figtree | 1rem | 300 | 1.6 | 0em | Paragraph text, descriptions, general reading |
| body-mono | IBM Plex Mono | 0.875rem | 400 | 1.5 | 0em | Biographical details, technical annotations |
| label | IBM Plex Mono | 0.75rem | 400 | 1.4 | 0.05em | Small caps, metadata, category tags |
| navigation | IBM Plex Mono | 0.75rem | 400 | 1 | 0.02em | Header links, footer navigation columns |

Self Modern carries the portfolio's editorial soul, its high-contrast letterforms and slight italic lean lending sophistication to even brief phrases. IBM Plex Mono provides the structural backbone, its mechanical regularity creating deliberate friction against the serif's warmth. Figtree at light weight handles extended reading without competing for attention. Kode Mono Bold remains available for specialized emphasis or code-adjacent moments. Verify licensing for these families before production use; Self Modern is attributed to Lucas Le Bihan, IBM Plex Mono to Bold Monday with designers Mike Abbink, Paul Van Der Laan, and Pieter Van Rosmalen, Figtree to Erik Kennedy, and Kode Mono carries no listed attribution.

## Layout

The layout system abandons conventional centered containers in favor of asymmetric, scattered compositions that suggest physical collage. Elements appear to float at slight rotations, with generous and irregular negative space between them.

The playground page demonstrates the most radical expression: project cards of varying dimensions are distributed across a dotted grid background without apparent alignment to a single axis. Some cards overlap slightly; others sit in isolation. The implicit grid is loose, perhaps 12 columns at desktop scale, but items break from it freely. A subtle dot pattern at 1rem or smaller intervals provides texture without enforcing structure.

The about section compresses the collage into a tighter cluster: a large orange card rotated several degrees counter-clockwise anchors the composition, while a smaller peach text box overlaps its lower right corner. A blue square sticker and green rectangular label orbit nearby at independent angles. This creates depth through layering rather than shadow.

The footer returns to relative order with a three-column structure: a wide left column for the poetic quote, a middle column for contact links, and a right column for page navigation. Below this, the ASCII sprites scatter across the full width in a field-like distribution, their positions seemingly randomized but maintaining minimum separation.

Spacing follows a 0.25rem base unit. Section vertical padding is generous at 6rem, allowing each mode shift to feel deliberate. Card internal padding is 1.5rem, providing comfortable breathing room for text without excessive containment. Between scattered elements, distances vary from 1rem to 4rem, creating rhythm through variation rather than repetition.

## Visual language

The visual language is defined by three signature elements: the scattered collage composition, the hand-drawn sprite system, and the deliberate material flatness.

Collage composition manifests as rotated rectangular cards, overlapping edges, and elements that appear to have been placed rather than positioned. The orange about card tilts approximately 8 degrees; the peach text box tilts slightly less in the opposite direction. This imperfection signals human touch and rejects the precision of template-driven portfolios.

The sprite system consists of tiny ASCII-art and line-drawn figures scattered across both light and dark backgrounds. On the light canvas, small green and pink icons appear near card corners and in open space—simple forms resembling plants, faces, and abstract marks. On the dark canvas, these sprites multiply and glow in neon pink and yellow-green, creating a digital garden effect. They function as texture, not content, and their density increases in dark mode.

Material flatness means no drop shadows, no gradients, no glassmorphism. Cards and stickers exist as solid color blocks with crisp edges. The only dimensional cue is the occasional folded corner on text boxes, rendered as a small triangular cutout revealing a darker shade beneath—suggesting paper craft without attempting photorealism.

Photography and project imagery appears unframed within cards, bleeding to the edges without borders or rounded corners on the images themselves. The card container provides the shape; the image provides the content.

## Components

### Navigation bar

- **Anatomy**: Horizontal bar spanning full viewport width, with logo or name at left and link cluster at right
- **Surface**: Transparent background over canvas; no border or shadow
- **Typography**: `{typography.navigation}` in uppercase
- **Spacing**: Approximately 1.5rem vertical padding, 2rem horizontal margins
- **Composition**: Flex row with space-between alignment

### Info card

- **Anatomy**: Large rectangular container with text content, occasionally with small square cutouts along top edge suggesting binder holes or paper texture
- **Surface**: `{colors.accent-orange}` background with `{colors.ink-light}` text
- **Typography**: `{typography.hero-display}` for primary statement; line breaks follow natural phrase rhythm
- **Shape**: `{rounded.card}` corners; slight rotation applied via transform, approximately -8 degrees
- **Spacing**: `{spacing.card-padding}` internal padding
- **Variants**: May appear with or without top-edge square details; rotation angle varies by context

### Text box

- **Anatomy**: Smaller rectangular container for secondary biographical or descriptive content
- **Surface**: `{colors.accent-peach}` background with `{colors.ink}` text
- **Typography**: `{typography.body-mono}` for technical, personal details
- **Shape**: `{rounded.card}` corners; slight rotation, approximately 3 degrees counter to adjacent info card
- **Spacing**: `{spacing.card-padding}` internal padding
- **Composition**: Positioned to overlap info card corner, creating layered depth

### Sticker

- **Anatomy**: Small square decorative element, often containing a simple icon or sprite
- **Surface**: `{colors.accent-blue}` background
- **Shape**: `{rounded.sticker}` corners; perfectly square aspect ratio
- **Spacing**: Compact internal padding of approximately 1rem
- **Composition**: Orbits near larger cards at independent angles

### Label tag

- **Anatomy**: Small rectangular identifier, often containing non-Latin script or short metadata
- **Surface**: `{colors.accent-green}` background with `{colors.ink}` text
- **Typography**: `{typography.label}` or slightly larger depending on script requirements
- **Shape**: `{rounded.card}` corners; minimal padding

### Project card

- **Anatomy**: Image-first container showing photography, illustration, or design work
- **Surface**: Image fills entire card; no border, no overlay, no text within card
- **Shape**: Sharp corners; no radius on image itself
- **Spacing**: Variable external margins creating scattered distribution
- **Composition**: Appears in grid-like but non-aligned distribution across dotted canvas

### Footer

- **Anatomy**: Full-width dark section with three-column top area and full-width sprite field below
- **Surface**: `{colors.canvas-dark}` background
- **Typography**: `{typography.section-display}` in italic for quote; `{typography.label}` for link columns
- **Composition**: Quote left-aligned with generous right margin; link columns center and right; sprites distributed as texture across lower two-thirds

## Responsive behavior

The scattered collage layout presents inherent challenges at narrower viewports. The current desktop implementation shows full card distribution with visible negative space. At reduced widths, the system should maintain the collage spirit while preventing overlap that obscures content.

Recommended approach: maintain the rotation and layering effects but transition from free scatter to a loosely staggered single column. Card rotations should reduce to 2-4 degrees to prevent excessive cropping at viewport edges. The about section's overlapping pair should stack vertically with the peach text box beneath the orange card, preserving the slight rotation on each.

The sprite field should remain visible but reduce in density, perhaps showing one-third of the desktop sprite count distributed across the same vertical space. Navigation should collapse to a compact menu or remain as a small set of uppercase links, depending on link count.

The dark footer quote, being the most text-heavy element in the most dramatic context, should maintain its large display size down to tablet, then scale to `{typography.hero-display}` at mobile to preserve readability against the busy sprite field.

## Practical implementation guidance

### Preserve
- The exact rotation angles and overlapping relationships between about-section cards; these are calibrated for specific visual tension
- The flat color-block aesthetic without shadows or gradients
- The dotted canvas texture on light backgrounds; this is essential to the playground atmosphere
- The two-mode color system with explicit light and dark contexts
- The sprite density difference between modes: sparse and delicate on light, dense and glowing on dark

### Avoid
- Centering all content or enforcing strict grid alignment; this destroys the collage personality
- Adding shadows or elevation to cards; the design achieves depth through overlap and rotation only
- Rounding corners on project images; keep image edges sharp within potentially rounded containers
- Generic sans-serif for display text; Self Modern's character is irreplaceable in this system
- Excessive sprite animation; the static scatter is part of the craft aesthetic

### Recommended build order
1. Establish the two canvas backgrounds and ink colors as root variables
2. Implement the typography hierarchy with Self Modern and IBM Plex Mono loaded first
3. Build the navigation bar as a transparent, flex-based component
4. Create the info card and text box with rotation transforms and overlap positioning
5. Develop the dotted canvas background pattern
6. Implement the project card grid with variable positioning
7. Build the dark footer with sprite field
8. Add accent colors to specific component roles

### Accessibility
- Ensure text on rotated cards maintains sufficient contrast; the orange-to-cream pairing meets requirements, but verify if rotation causes partial background clipping
- Provide `prefers-reduced-motion` alternatives if any sprite or scroll animations are added; the static design should remain fully functional
- Consider the dark mode quote readability; the large serif text against near-black works at display sizes but would fail at body scale
- Maintain keyboard focus indicators that respect the flat aesthetic, perhaps using outline offsets in accent colors rather than default browser rings

## Scope note

This guide covers the portfolio homepage, playground, and footer surfaces visible in the supplied images. Navigation interactions, project detail pages, form behaviors, and any motion or scroll-triggered animations are not represented. Measurements are practical adaptation targets derived from visual inspection. The exact sprite positioning algorithm and any responsive breakpoint specifications are not included.

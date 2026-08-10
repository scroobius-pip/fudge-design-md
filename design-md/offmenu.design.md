# How offmenu.design is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/offmenu.design-design)

Last updated: 2026-08-10

## Captured pages

[![Ditto case study hero with browser mockup showing website redesign and floating 'Let's work together' pill button](https://pin.fontofweb.com/8812?format=jpg)](https://design.withfudge.com/share/pin-8812)

[Ditto case study hero with browser mockup showing website redesign and floating 'Let's work together' pill button](https://design.withfudge.com/share/pin-8812)

[![Ditto brand guidelines spread showing pixel logo and RAL color palette grid with black, gray, white, and yellow swatches](https://pin.fontofweb.com/8811?format=jpg)](https://design.withfudge.com/share/pin-8811)

[Ditto brand guidelines spread showing pixel logo and RAL color palette grid with black, gray, white, and yellow swatches](https://design.withfudge.com/share/pin-8811)

[![Web and experiential section with laptop mockups, yellow brand mark panel, and color system grid](https://pin.fontofweb.com/8810?format=jpg)](https://design.withfudge.com/share/pin-8810)

[Web and experiential section with laptop mockups, yellow brand mark panel, and color system grid](https://design.withfudge.com/share/pin-8810)

[![Case study introduction with two-column layout showing project details and scope section with bottom border rule](https://pin.fontofweb.com/8809?format=jpg)](https://design.withfudge.com/share/pin-8809)

[Case study introduction with two-column layout showing project details and scope section with bottom border rule](https://design.withfudge.com/share/pin-8809)

## Overview

Off Menu presents itself as an AI-native studio through a portfolio website that prioritizes editorial clarity over decorative excess. The system is built on a near-black ink against a warm, slightly cream white canvas, creating a stark but not harsh contrast that feels intentional and premium. The visual language speaks to enterprise technology clients while maintaining the creative confidence of a design-led practice.

The site's architecture follows a case-study-first approach, where each project receives generous spatial treatment. Large typographic statements anchor sections, supported by restrained labeling and metadata. The hierarchy is established through size and weight rather than color variation, with only two tones—ink and canvas—handling nearly all communication. Photography and project mockups sit within rounded containers that soften the otherwise rigorous grid. A persistent floating action button offers contact without interrupting the reading experience.

The overall impression is one of disciplined confidence: every element earns its place, white space is treated as an active material, and the typography carries both the personality and the informational load.

## Colors

The palette is intentionally minimal, relying on a near-black ink and warm white canvas with absolute black and pure white reserved for specific functional moments.

| token | hex | use |
|---|---|---|
| ink | #12110D | Primary text, borders, active UI elements, and the dominant typographic color across all surfaces |
| canvas | #FDFDFC | Page background, card surfaces, and the warm white that prevents the starkness of pure white |
| pure-black | #000000 | Button backgrounds, image regions, and moments requiring maximum contrast |
| pure-white | #FFFFFF | Text reversed onto dark surfaces, occasional button fills, and photographic highlights |

The color logic is straightforward: ink on canvas for reading, pure black for structural elements and media containers, pure white for reversal. The warm cast of canvas prevents the clinical feel that a pure white would introduce, while the slight warmth in ink—visible in its very dark brown undertone—keeps black from feeling like a default. Project imagery introduces color photographically; the interface itself does not compete. Yellow appears in client brand work as seen in case study imagery, but remains outside the site's own functional palette.

## Typography

The entire typographic system is set in PP Neue Montreal, served as the variable font file Pp Neue Montreal-Variable. This is a neo-grotesque from Pangram Pangram Foundry designed by Mathieu Desjardins, handling all weights and sizes with consistent character: open apertures, even color, and a contemporary neutrality that avoids either corporate sterility or expressive excess.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | PP Neue Montreal | 3rem | 500 | 1.11 | normal | Case study introductions, major section headings, and project titles |
| section-display | PP Neue Montreal | 1.875rem | 500 | 1.25 | normal | Sub-section headings and medium-emphasis statements |
| body-large | PP Neue Montreal | 1.5rem | 500 | 1.25 | normal | Pull quotes, introductory paragraphs, and emphasized body |
| body | PP Neue Montreal | 1rem | 400 | 1.5 | normal | Navigation, descriptions, buttons, and general reading text |
| label | PP Neue Montreal | 0.875rem | 500 | 1.43 | normal | Metadata, captions, tags, and secondary information |
| micro-label | PP Neue Montreal | 0.5rem | 400 | 1.5 | normal | Fine print, image annotations, and minimal UI labels |

The type scale is built on a 4px relative unit, with sizes snapping to whole-number multiples. Weight variation is limited: 400 for running text and navigation, 500 for headings and labels. There is no bold weight in active use; emphasis comes from size and spacing rather than heavier strokes. Line heights are tight for display sizes, generous for body, creating a vertical rhythm that feels controlled without being cramped.

Verify licensing for PP Neue Montreal and Pp Neue Montreal-Variable through Pangram Pangram Foundry before production use.

## Layout

The layout system is founded on generous margins and clear horizontal bands. Content sits within a centered container with substantial side padding—64px on desktop—creating a frame that keeps reading lines comfortable and gives imagery room to breathe.

Sections stack vertically with significant separation, often 96px or more between major content blocks. This is not a dense interface; information is paced deliberately. The grid is fundamentally two-column for case study presentations, with an asymmetrical split that favors the narrative content on the left and metadata or supporting imagery on the right.

Navigation occupies a fixed or persistent position at the top, minimal in height and set in the same body size as running text. The logo mark "O/M" sits left, with a menu trigger and optional status indicator right. There is no background differentiation for the header; it floats on canvas like the content below.

The floating action button for "Let's work together" breaks the grid intentionally, positioned fixed at the lower left with pill rounding and generous padding. This element is always accessible without competing with the scroll experience.

Cards and media containers use 16px corner rounding, a subtle softening that prevents the geometry from feeling too sharp against the organic content they hold. Full-bleed imagery is rare; most media is contained, framed, and given context by the surrounding space.

## Visual language

The visual character is editorial and gallery-like, treating each project as an exhibition piece. Photography of work is presented within browser chrome, device frames, or as flat compositions that show the design artifact itself rather than lifestyle context. This artifact-forward approach reinforces the studio's craft focus.

Rounded rectangles appear throughout as the primary containing shape—cards, buttons, image frames, and media chrome all share this DNA. There are no circles except for functional indicators, no triangles, no decorative geometry. The restraint in shape vocabulary keeps attention on the work.

Motion and interaction are implied by the static compositions: the pill button suggests hover potential, the numbered sections suggest sequential navigation, and the contained imagery suggests click-through to larger views. However, the still presentation emphasizes the calm confidence of the underlying design rather than dynamic spectacle.

The "O/M" logotype is set in the same type family as everything else, treated as text rather than as a distinct graphic mark. This typographic consistency extends to all labels, including the small "Website" category tag that appears beneath the logo in case study headers.

## Components

### Primary action button

A persistent floating contact element that anchors the lower left of the viewport.

- **Anatomy**: Pill-shaped container with a dotted circular icon left and text right
- **Surface**: Pure black background with canvas text, or canvas background with ink text in alternate states
- **Typography**: Body size, weight 400, with comfortable padding
- **Shape**: Full pill rounding with 16px vertical and 32px horizontal padding
- **Spacing**: Fixed position with margin from viewport edges
- **Composition**: Icon and text in horizontal arrangement with balanced internal spacing

### Case study introduction

The opening section of each project page, establishing narrative and metadata.

- **Anatomy**: Two-column layout with narrative left and details right
- **Surface**: Canvas background with ink text
- **Typography**: Hero display for the opening statement, body for supporting text, label for metadata keys and values
- **Shape**: No containing border; full-width section with internal padding
- **Spacing**: 64px padding, substantial vertical separation between narrative and detail blocks
- **Composition**: Asymmetrical two-column with left column wider; details aligned right with row separators

### Detail row

Metadata presentation for project specifics like timeframe and role.

- **Anatomy**: Label pair with key left and value right, separated by horizontal rule
- **Surface**: Transparent with ink border
- **Typography**: Label size for both key and value, weight 500
- **Shape**: Full-width with 1px top border in ink
- **Spacing**: 12px vertical padding per row
- **Composition**: Flex row with space-between alignment

### Media card

Containers for project imagery and mockups.

- **Anatomy**: Single image or composite layout within rounded frame
- **Surface**: Canvas or pure black background depending on content
- **Shape**: 16px corner radius
- **Spacing**: Internal padding varies; external margins follow section spacing
- **Composition**: Centered within content column, often with browser chrome or device frame as visible wrapper

### Navigation header

Minimal top-bar navigation.

- **Anatomy**: Logo left, optional status dot, menu trigger right
- **Surface**: Transparent, floating over canvas
- **Typography**: Body size, weight 400
- **Shape**: No background, no border, no shadow
- **Spacing**: Standard horizontal padding
- **Composition**: Flex row with space-between, vertically centered

## Responsive behavior

The system is documented from desktop widths where the two-column case study layout functions with generous side margins. At narrower widths, the introduction column should stack, placing metadata below the narrative rather than beside it. The floating action button maintains its position but may reduce in text length or scale slightly to avoid viewport collision.

Typography scales down proportionally: hero display should reduce to section display size on tablet, and body-large can drop to body size on mobile. The 64px horizontal padding should halve at intermediate breakpoints and reduce to 16px on the narrowest screens. Media cards should lose their external margins and go full-width within the reduced padding container.

The pill button's fixed position may need adjustment on mobile to avoid covering essential content; consider moving to a bottom-center or bottom-right placement when the lower left conflicts with system gestures.

## Practical implementation guidance

### Preserve
- The warm white canvas against near-black ink; this specific temperature relationship is central to the site's premium feel
- Generous vertical spacing between sections; the pacing is as important as the content
- The single type family approach; mixing families would break the editorial coherence
- Pill rounding for primary actions; this shape is a recognizable brand signature
- The two-column introduction layout with metadata separated by hairline rules

### Avoid
- Pure white as a page background; it reads as colder and less considered than the warm canvas
- Additional font weights beyond 400 and 500; the system achieves hierarchy through size, not weight range
- Decorative borders or shadows on cards; the 16px radius is sufficient ornament
- Dense information layouts; the site breathes by design
- Color in the interface beyond the documented tokens; let project imagery provide chromatic interest

### Recommended build order
1. Establish the canvas and ink color variables with the exact hex values
2. Implement PP Neue Montreal with 400 and 500 weights at the documented sizes
3. Build the navigation header with transparent background and flex layout
4. Create the section spacing system with 96px major and 64px minor gaps
5. Develop the two-column introduction component with detail rows
6. Add the floating pill button with fixed positioning
7. Implement media cards with 16px radius and contained imagery
8. Refine responsive stacking for the introduction and padding reduction

### Accessibility
- The ink-on-canvas pairing provides strong contrast while avoiding the harshness of pure black on pure white for extended reading
- Ensure the floating button maintains sufficient contrast in all states; the pure black variant should be the default
- Navigation should be keyboard accessible despite its minimal visual presence
- Image containers should include descriptive alt text since the visual system relies heavily on project imagery
- Consider focus indicators that respect the minimal aesthetic while remaining visible

## Scope note

This guide covers the portfolio and case study surfaces of offmenu.design as visible in the Ditto, Resonant, and Flex project pages. The homepage, contact flows, and any motion or interaction behaviors are not represented in the supplied material. Measurements are drawn from the documented interface values where available.

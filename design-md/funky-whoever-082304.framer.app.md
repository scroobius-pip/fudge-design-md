# How funky-whoever-082304.framer.app is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/funky-whoever-082304.framer.app-design)

Last updated: 2026-08-10

## Captured pages

[![Dark canvas with staggered portrait cards in warm orange and cool blue tones, showing labels like Being Tangoed and Vibrant Wall with a large white nf mark centered](https://pin.fontofweb.com/3871?format=jpg)](https://design.withfudge.com/share/pin-3871)

[Dark canvas with staggered portrait cards in warm orange and cool blue tones, showing labels like Being Tangoed and Vibrant Wall with a large white nf mark centered](https://design.withfudge.com/share/pin-3871)

[![Similar dark canvas with portrait cards arranged in two rows, featuring labels like Sunny Side Up and Earths Elixir with a large white te mark centered between cards](https://pin.fontofweb.com/3870?format=jpg)](https://design.withfudge.com/share/pin-3870)

[Similar dark canvas with portrait cards arranged in two rows, featuring labels like Sunny Side Up and Earths Elixir with a large white te mark centered between cards](https://design.withfudge.com/share/pin-3870)

## Overview

This design system describes a dark, immersive photography portfolio built as an infinite-scrolling grid. The visual language centers on high-contrast portrait photography set against an absolute black canvas, with bold typographic marks interrupting the flow at dramatic scale. The interface feels like a gallery wall that extends endlessly in all directions—cards float in generous negative space, their warm orange and cool blue tones popping against the void. The system prioritizes the photography itself, using minimal UI chrome and letting the images establish rhythm, color, and emotional temperature. A distinctive feature is the oversized, partially visible letterforms that appear between cards, creating typographic texture without competing with the imagery. The overall impression is editorial, contemporary, and deliberately cinematic.

## Colors

The palette is intentionally restrained, letting the photography supply chromatic variety while the interface provides a neutral stage.

| token | value | use |
|---|---|---|
| canvas | #000000 | Page background, empty space between cards, overall ground |
| ink | #ffffff | Primary text, card captions, hero marks, navigation labels |
| muted-ink | #b3b3b3 | Secondary labels, metadata, less prominent text |
| accent-warm | #e85d04 | Warm photographic highlights, orange-toned imagery reference |
| accent-cool | #00b4d8 | Cool photographic highlights, cyan-toned imagery reference |

The canvas color is absolute black, creating maximum contrast with the vivid photography and making the white typography feel luminous. The ink color appears at full strength for all primary reading text, including the card captions positioned at the lower-left corner of each image. Muted ink serves any secondary information that needs to recede visually.

The accent colors do not appear as solid UI fills but rather describe the dominant temperature ranges visible across the photographic content—warm oranges, ambers, and corals versus cool cyans, teals, and deep blues. These temperatures often appear within single images as dramatic color-grading, creating a split-tone effect that defines the site's visual character. No gradients, shadows, or borders are visible in the interface layer; all depth comes from photographic content and spatial arrangement.

## Typography

The type system is minimal and functional, using a single family at carefully chosen scales.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Inter | 8rem | 400 | 1 | -0.03em | Large interruptive marks between card rows |
| section-label | Inter | 1rem | 400 | 1.2 | 0 | Navigation or category labels at page edges |
| card-caption | Inter | 1rem | 400 | 1.2 | 0 | Image titles at bottom-left of each card |

Inter, designed by Rasmus Andersson and available from Rsms, provides clean, neutral readability that does not compete with the expressive photography. The hero-display scale at 8rem creates monumental letterforms that read as texture and rhythm rather than conventional typography—characters are cropped by viewport edges and overlap with card boundaries, becoming compositional elements. The negative tracking at -0.03em tightens the display setting without feeling compressed.

Body and caption scales sit at 1rem, establishing a calm, readable baseline. All weights are Regular (400); no bold or medium weights are employed in the visible interface, maintaining visual quietness around the imagery. Verify licensing for Inter before production use.

## Layout

The layout follows a staggered masonry-like grid with intentional irregularity. Cards appear at multiple sizes and vertical positions, creating a sense of depth and organic movement rather than rigid alignment.

The overall page structure uses a full-bleed dark canvas with content extending to all edges. Cards are positioned in rows that drift horizontally, suggesting an infinite horizontal scroll that complements the vertical page flow. Vertical spacing between card clusters is generous—approximately 3rem to 4.5rem—allowing the black canvas to breathe and preventing visual crowding.

Individual cards maintain consistent internal proportions, appearing as rounded rectangles with aspect ratios close to 4:5 or 1:1 depending on content. The stagger creates overlapping depth planes: some cards sit higher in the z-order, others recede, with the oversized typographic marks occupying a middle plane that weaves between them.

The composition avoids strict columns. Cards offset horizontally from row to row, with some cards extending partially beyond the viewport edge, reinforcing the infinite, boundary-less quality. Captions sit inside the card bounds, positioned at the lower-left with comfortable internal padding of approximately 1rem to 1.5rem from the edges.

## Visual language

The visual language draws from editorial photography and contemporary art direction. The core motif is the portrait treated as color-field object—faces and figures rendered in extreme color grading that pushes toward abstraction. Orange and cyan dominate as complementary temperatures, often appearing within the same image as dramatic split-lighting.

Cards use rounded corners at 1rem, softening the rectilinear grid without becoming overly friendly or casual. The rounding is consistent across all image containers, unifying the varied content. No borders, shadows, or hover states are visible; cards exist as flat planes of color floating in black space.

The typographic marks—large white letters like "nf" and "te"—function as visual punctuation. They appear partially cropped, suggesting a larger hidden alphabet extending beyond the viewport. These marks create rhythm and break the potential monotony of an endless card grid, while their scale makes them feel environmental rather than informational.

Photography style is consistent across cards: high-contrast, color-graded portraits with dramatic lighting, often featuring colored gels or environmental color casts. Subjects are centered or slightly off-center, with strong graphic silhouettes against saturated backgrounds. The treatment feels contemporary and slightly futuristic, aligned with fashion and music editorial aesthetics.

## Components

### Portrait Card

The primary content unit, displaying a single photograph with an overlaid caption.

- **Anatomy**: Rounded rectangular container with full-bleed photograph, text label positioned at lower-left interior corner
- **Surface**: Photographic content fills entire card; no visible background color or border
- **Typography**: Card-caption token for the title, white ink color, positioned with internal padding
- **Shape**: 1rem border radius on all corners
- **Spacing**: Internal padding approximately 1rem to 1.5rem from edges for caption placement
- **Composition**: Image covers full card area; caption sits above image with no visible background scrim, relying on photographic dark areas for legibility
- **Variants**: Cards appear at multiple scales—some are standard grid units, others are taller or wider, creating the staggered rhythm

### Hero Mark

Oversized typographic elements that interrupt the card grid.

- **Anatomy**: Single or paired letters at extreme scale, positioned between card clusters
- **Surface**: Transparent, no background; white text on black canvas
- **Typography**: Hero-display token at 8rem, Regular weight, tight negative tracking
- **Shape**: No container; letters are cropped by viewport and card boundaries
- **Spacing**: Positioned to overlap spatially with card rows, creating layered depth
- **Composition**: Centered or slightly offset horizontally; vertically aligned to sit between card groupings
- **Variants**: Different letter combinations visible (nf, te); likely part of a larger cycling or scrolling typographic element

### Category Pill

Minimal text indicators for image categories or collection names, visible at the top edge of the viewport area.

- **Anatomy**: Plain text string, no visible container or background fill
- **Surface**: Transparent, sitting directly on the black canvas
- **Typography**: Section-label token, muted-ink color for reduced prominence against the photography
- **Shape**: None; no border, radius, or padding
- **Spacing**: Positioned at page margins with section-padding offset from edges
- **Composition**: Appears above card rows, aligned with the horizontal drift of the grid
- **Variants**: Labels like "Earths Elixir" and "Orange Blossom" suggest category or collection grouping; may function as static labels or interactive filters

## Responsive behavior

The grid system should maintain its staggered character across viewport sizes while adapting card density. On narrower viewports, card sizes should reduce proportionally while preserving their aspect ratios. The horizontal drift of rows may become more pronounced on mobile, with fewer cards visible per row—potentially two to three cards rather than four to five.

The hero marks should scale down to maintain their interruptive quality without dominating the reduced canvas. A reduction to 4rem or 5rem on mobile viewports would preserve the compositional role while preventing single letters from consuming the entire screen.

Touch scrolling should feel continuous and momentum-based, matching the infinite-scrolling metaphor. Card captions must remain legible at reduced sizes; consider maintaining 1rem as a minimum rather than scaling text proportionally with cards.

## Practical implementation guidance

### Preserve
- The absolute black canvas as the dominant ground; any deviation toward dark gray will visibly reduce the luminous quality of the photography
- The staggered, non-aligned card positioning; strict grid alignment will destroy the organic, editorial character
- The warm-cool color tension in photography selection; this temperature contrast defines the site's emotional range
- The oversized typographic marks as environmental texture, not readable messages

### Avoid
- Adding borders, shadows, or background scrims to cards; these will clutter the clean photographic presentation
- Using multiple font families or weights; the single-family, single-weight system is essential to the restrained aesthetic
- Aligning all cards to a single baseline or column; the vertical offset is intentional and necessary
- Introducing bright UI accents that compete with the photography's own color drama

### Recommended Build Order
1. Establish the absolute black canvas and base Inter typography at 1rem
2. Implement the card component with 1rem border radius and full-bleed image handling
3. Create the staggered grid layout with variable card sizes and vertical offsets
4. Add caption positioning with lower-left internal padding
5. Implement the hero mark system at 8rem with viewport cropping behavior
6. Refine spacing and rhythm between card clusters

### Accessibility
- Ensure card captions maintain sufficient contrast against all photographic backgrounds; consider a subtle text-shadow or gradient scrim if images contain unpredictable light areas
- Provide alt text for all portrait photography describing subject and visible context
- The infinite scroll pattern should include a pause mechanism and respect reduced-motion preferences
- Hero marks should be marked as decorative if they do not convey meaningful content

## Scope note

This guide covers the visible infinite-scrolling grid page with its portrait card system and typographic interruptions. Measurements are practical adaptation targets. Mobile layouts, loading states, hover interactions, filtering behavior, and any additional page types beyond this single scroll experience are not represented in the supplied material. The full typographic alphabet or animation timing for the hero marks is not visible.

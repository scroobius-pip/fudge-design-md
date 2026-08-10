# How arches-template.framer.website is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/arches-template.framer.website-design)

Last updated: 2026-08-10

## Captured pages

[![About section with split layout showing architectural photography, statistics callouts, and a pill-shaped About us button on white canvas](https://pin.fontofweb.com/5579?format=jpg)](https://design.withfudge.com/share/pin-5579)

[About section with split layout showing architectural photography, statistics callouts, and a pill-shaped About us button on white canvas](https://design.withfudge.com/share/pin-5579)

[![Full-bleed hero with dark interior photography, large white display headline, and subtle left-edge accent line](https://pin.fontofweb.com/5578?format=jpg)](https://design.withfudge.com/share/pin-5578)

[Full-bleed hero with dark interior photography, large white display headline, and subtle left-edge accent line](https://design.withfudge.com/share/pin-5578)

## Overview

This design system describes a sophisticated architecture and interior design portfolio template. The visual language alternates between two distinct modes: immersive dark hero sections that showcase architectural photography at full bleed, and clean white content areas that present firm information with editorial restraint. The system prioritizes photographic storytelling while maintaining typographic clarity through a single geometric sans-serif family. Layouts favor asymmetric compositions where text and imagery occupy clearly defined zones without competing for attention. The overall impression is one of practiced minimalism—every element earns its place, and the generous use of negative space reinforces the premium positioning appropriate for architectural practice.

## Colors

The palette is intentionally narrow, deriving visual interest from photography rather than chromatic variety. The system operates in two modes: a light mode for content readability and a dark mode for dramatic hero presentation.

| token | value | use |
|---|---|---|
| ink | #1A1A1A | Primary text, button fills, strong borders |
| muted-ink | #666666 | Secondary body text, captions, stat labels |
| canvas | #FFFFFF | Page background, hero text on dark, button text on dark fill |
| surface-dark | #2A2A2A | Hero overlay base, dark section backgrounds |
| accent-warm | #8B7355 | Warm photographic tones in imagery, subtle warmth in dark surfaces |

The light mode dominates content sections, pairing near-black text against pure white with gray intermediates for hierarchy. The dark mode employs a deep charcoal rather than pure black, allowing architectural photography to remain visible beneath text overlays while preserving warmth. The accent-warm tone appears primarily through photography—concrete textures, timber elements, and natural light—rather than as applied UI color, ensuring the interface remains neutral and photography-forward.

## Typography

The system uses Poppins, a geometric sans-serif with humanist proportions, across all text roles. The family is employed in Regular (400) and Medium (500) weights only, creating a restrained weight palette that relies on size and spacing for hierarchy rather than dramatic weight contrast.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Poppins | 3.5rem | 500 | 1.1 | -0.02em | Hero headlines, maximum impact statements |
| section-display | Poppins | 2.5rem | 500 | 1.15 | -0.01em | Section headings, about page titles |
| body | Poppins | 1rem | 400 | 1.6 | 0 | Paragraphs, descriptions, general content |
| label | Poppins | 0.75rem | 500 | 1.2 | 0.05em | Navigation, buttons, tags, uppercase treatments |
| stat-display | Poppins | 2rem | 500 | 1 | -0.01em | Numerical statistics, metric callouts |

Tight negative tracking on display sizes prevents the geometric forms from feeling too dispersed at scale. The body size maintains generous line height for extended reading comfort. Label text uses positive tracking and uppercase transformation for navigational and functional elements, creating a clear distinction from editorial content. Verify licensing for these families before production use. Poppins is designed by Jonny Pinhorn and distributed by Indian Type Foundry.

## Layout

The layout system is built on a 4px relative unit (0.25rem), with major structural decisions favoring editorial asymmetry over rigid grid conformity.

**Page structure**: Full-width sections alternate between viewport-height hero moments and content bands with generous vertical padding. The hero section occupies the full viewport with photography as the dominant layer, text positioned in the lower-left quadrant with a subtle left-edge accent line. Content sections use a split composition: text content occupies approximately 40% of the width on the left, while imagery and supporting elements fill the remaining 60%.

**Container behavior**: Content sections appear to use a maximum width with substantial horizontal margins, creating breathing room around all elements. The hero breaks this containment, bleeding to all edges to maximize photographic impact.

**Grid logic**: The about section demonstrates a loose two-column sensibility where the left column carries narrative content and the right column presents imagery and statistics. Statistics appear as inline blocks with ample horizontal separation, each pairing a large numeral with a brief descriptor below.

**Spacing scale**: Section padding uses 6rem (96px) vertical spacing to create clear territorial boundaries between content types. Content gaps within sections use 2rem (32px) for related element grouping. The 0.25rem base unit supports fine adjustments for component internals.

## Visual language

**Photography treatment**: Architectural photography is presented without borders, rounded corners, or decorative frames—images exist as pure rectangular content. The hero uses a darkened overlay to ensure text legibility while preserving photographic detail. Interior shots emphasize natural light, material textures, and spatial depth.

**Line elements**: A subtle vertical line appears at the left edge of hero text blocks, serving as an anchoring device that connects the typographic content to the image edge. This line is thin (1px) and uses the current text color at reduced opacity.

**Button language**: Buttons use a pill shape with fully rounded ends, creating soft terminals that contrast with the rectilinear photography. Primary buttons invert the dark fill against light text; secondary buttons use a hairline border with transparent fill.

**Numerical presentation**: Statistics abandon decorative containers—large figures sit directly on the canvas with only typographic scale and muted labels beneath to establish their role.

**Motion character**: The clean geometry and generous spacing suggest transitions favor direct fades and subtle vertical shifts rather than elaborate choreography.

## Components

**Primary button**
- Anatomy: Pill-shaped container with text label and optional leading icon
- Surface: Solid ink fill (#1A1A1A) with canvas text
- Typography: Label token, uppercase, tracked
- Shape: Full pill (9999px border radius)
- Spacing: 0.75rem vertical padding, 1.5rem horizontal padding
- Composition: Icon and text in horizontal arrangement with 0.5rem gap

**Secondary button**
- Anatomy: Pill-shaped container with text label and optional leading icon
- Surface: Transparent fill with 1px ink border
- Typography: Label token, uppercase, tracked
- Shape: Full pill
- Spacing: Identical padding to primary variant
- States: Visible in about section as "About us" with dark icon circle

**Hero section**
- Anatomy: Full-viewport container with background photography, dark overlay, text block with accent line
- Surface: Surface-dark overlay at approximately 60% opacity atop photography
- Typography: Hero-display for headline, body for subheadline
- Composition: Text anchored to lower-left with consistent margin from edges; accent line positioned at extreme left of text block
- Hierarchy: Tag/label above headline, headline dominant, subheadline beneath with reduced width

**Content section (about)**
- Anatomy: Two-zone layout with narrative left and media right
- Surface: Canvas background
- Typography: Section-display for heading, body for paragraphs
- Spacing: 6rem section padding, 2rem between heading and body, 2rem between body and button
- Composition: Text column maintains readable measure; image column may contain multiple images or single dominant image

**Stat block**
- Anatomy: Numerical value with descriptive label beneath
- Typography: Stat-display for value, body for label
- Color: Ink for value, muted-ink for label
- Composition: Blocks arranged horizontally with substantial gap (approximately 4rem)

**Navigation**
- Anatomy: Fixed or sticky header with logo mark and text links
- Surface: Transparent over hero, likely canvas or blur on scroll
- Typography: Label token for links
- Composition: Logo left, links right with generous spacing

## Responsive behavior

At reduced viewport widths, the split layouts should stack vertically with text preceding imagery to maintain narrative flow. Hero text blocks may require increased margins or reduced type size to preserve legibility against complex photography. The two-column about section should collapse to single column with full-width images. Stat blocks should remain horizontal if space permits, or stack vertically with increased vertical spacing on narrow viewports. Navigation should consolidate to a minimal menu trigger when horizontal space becomes constrained. The pill buttons maintain their shape across all sizes, with touch targets remaining at least 44px in height.

## Practical implementation guidance

**Preserve**
- The strict alternation between dark immersive heroes and light content sections
- Full-bleed photography without decorative borders or shadows
- The single font family approach with weight restraint
- Generous whitespace as a premium signal
- The left-edge accent line as a consistent hero anchoring device

**Avoid**
- Introducing additional font families or weights beyond Regular and Medium
- Rounding corners on photography containers
- Heavy drop shadows or dimensional effects
- Pure black (#000000) in place of the warmer ink and surface-dark tones
- Crowding statistics into bordered cards or boxes

**Recommended build order**
1. Establish the 4px spacing unit and type scale
2. Implement hero section with full-bleed photography and overlay
3. Build pill button variants with icon support
4. Create content section layout with split composition
5. Add stat block component
6. Implement navigation with transparent-to-solid scroll behavior
7. Refine responsive stacking and type scaling

**Accessibility**
- Ensure hero overlay provides sufficient contrast for white text; test with varied photography
- Maintain minimum 4.5:1 contrast ratio for body text in light sections
- Provide alternative text for all architectural photography
- Consider reduced-motion preferences for any scroll-triggered animations
- Ensure pill buttons have visible focus indicators that respect the rounded shape

## Scope note

This guide covers the homepage hero and about section surfaces visible in the supplied images. Interior pages, project detail templates, contact forms, footer content, and mobile-specific layouts are not represented. Measurements are practical adaptation targets.

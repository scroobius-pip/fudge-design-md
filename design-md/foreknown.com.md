# How foreknown.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/foreknown.com-design)

Last updated: 2026-08-10

## Captured pages

[![Services page hero with large elegant serif typography reading 'intersection of vision' against a warm off-white background, demonstrating the brand's refined typographic voice](https://pin.fontofweb.com/5672?format=jpg)](https://design.withfudge.com/share/pin-5672)

[Services page hero with large elegant serif typography reading 'intersection of vision' against a warm off-white background, demonstrating the brand's refined typographic voice](https://design.withfudge.com/share/pin-5672)

[![Greenville Seminary case study showing stationery mockup with deep forest green brand elements, concrete texture photography, and mixed serif and sans-serif typography in a](https://pin.fontofweb.com/5670?format=jpg)](https://design.withfudge.com/share/pin-5670)

[Greenville Seminary case study showing stationery mockup with deep forest green brand elements, concrete texture photography, and mixed serif and sans-serif typography in a](https://design.withfudge.com/share/pin-5670)

## Overview

Foreknown presents a design language built on restraint, material honesty, and typographic contrast. The system pairs an elegant, high-contrast variable serif with a clean geometric sans-serif to create a visual hierarchy that feels both contemporary and timeless. The overall impression is of a studio that values craft over decoration—generous whitespace, muted warm backgrounds, and strategic use of deep forest green as the singular brand accent.

The design operates in a light-dominant mode where the canvas itself becomes a material presence. Rather than pure clinical white, the background carries warmth that suggests natural paper or unbleached linen. Against this field, black typography achieves crisp definition without harshness, while forest green elements introduce depth and authority. The system is intentionally limited in its color range, deriving visual interest from typographic scale, texture photography, and the interplay between the two type families rather than from a broad palette.

The work shown in the case study imagery reinforces this material sensibility through concrete surfaces, dark wood grain, and pressed paper stocks—physical textures that translate into the digital space through color temperature and compositional restraint. The design does not chase trends; it establishes a quiet confidence that allows project imagery and typographic moments to command attention without competitive visual noise.

## Colors

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, display headings, navigation, and all functional reading matter |
| canvas | #F0EFEA | Primary page background, establishing the warm minimal base |
| forest | #2C4A3E | Brand accent for logos, marks, emphasis blocks, and case study highlights |
| stone | #8A8A8A | Secondary text, captions, metadata, and subtle dividers |
| warm-white | #E8E6E1 | Card surfaces, elevated panels, and subtle differentiation from canvas |

The color system is intentionally narrow, creating cohesion through restriction. Ink on canvas provides the fundamental reading experience, with the warm undertone of the canvas preventing the starkness that pure white would introduce against the elegant serif. Forest green functions as the sole chromatic accent, appearing in brand marks, emphasis panels, and select UI moments where authority and permanence are desired. This deep green carries associations of institutional heritage and natural materiality, aligning with the seminary and cultural institution work visible in the portfolio.

Stone serves a utilitarian role for de-emphasized content—dates, categories, secondary labels—maintaining readability without competing for attention. Warm-white creates subtle elevation for contained elements like cards or modals, providing just enough differentiation from the canvas to establish boundaries without introducing shadow or border complexity.

The relationship between these colors remains consistent across contexts: light backgrounds dominate, dark text provides primary information hierarchy, green carries brand meaning, and stone handles metadata. No dark mode is established in the visible material; the system assumes light-environment presentation.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Copyright Rsz Type Sl-Not For Desktop Use | 6rem | 400 | 0.9 | -0.02em | Page hero statements, large editorial openings |
| section-display | Copyright Rsz Type Sl-Not For Desktop Use | 3rem | 400 | 1.1 | -0.01em | Section headings, case study titles |
| body | Arbeit Technik | 1rem | 400 | 1.6 | 0em | Paragraphs, descriptions, general content |
| body-small | Arbeit Technik | 0.875rem | 400 | 1.5 | 0em | Secondary descriptions, card content |
| label | Arbeit Technik | 0.75rem | 400 | 1.4 | 0.05em | Categories, tags, metadata labels |
| navigation | Arbeit Technik | 0.875rem | 400 | 1 | 0.02em | Primary navigation, menu items |

The typographic system derives its character from the deliberate tension between two distinct voices. The display serif, Copyright Rsz Type Sl-Not For Desktop Use, carries high contrast between thick and thin strokes with refined terminals and a slightly condensed proportion. At large sizes, it achieves an elegant, almost editorial fashion sensibility that elevates project presentations and brand statements. The variable weight capability allows subtle refinement, though the visible implementation favors a consistent regular weight that lets form and scale create impact rather than boldness.

Arbeit Technik provides the functional counterpoint—a clean, geometric sans-serif with open apertures and even color that ensures readability at small sizes and in dense information contexts. Its role is to disappear into utility, supporting the serif's expressive moments without competing for attention. The tracking on label text introduces slight expansion that aids scanning for categorical information.

The scale progression follows a clear doubling relationship: hero-display at 6rem anchors the system, section-display at 3rem provides the next structural level, and body at 1rem handles all reading content. The 0.875rem and 0.75rem sizes serve supporting roles where space efficiency matters. Line heights remain tight for display text to maintain visual cohesion in large statements, while body text receives generous leading for comfortable extended reading.

Verify licensing for these families before production use. Copyright Rsz Type Sl-Not For Desktop Use is attributed to Giuseppe Salerno and Paco González of Resistenza Type Foundry. Arbeit Technik is attributed to Studio Few.

## Layout

The layout philosophy centers on editorial spaciousness and asymmetric balance. Page sections receive substantial vertical breathing room, with 8rem establishing the standard section rhythm. Content does not crowd the viewport edges; generous horizontal margins create a framed, gallery-like presentation that respects the material quality of the work shown.

The grid system appears to favor a flexible approach rather than rigid column constraints. Text blocks achieve comfortable measure through width limitation rather than strict grid alignment. In the services page hero, the display typography occupies a lower-weighted position, suggesting either bottom-aligned composition or scroll-responsive placement that treats the viewport as a canvas for typographic art.

Case study presentations employ layered composition where photography, physical mockups, and text interweave. The Greenville Seminary example shows brand collateral arranged in an editorial flat-lay style, with elements positioned at subtle angles and overlapping planes that create depth without breaking the two-dimensional surface. This suggests a layout approach that treats content as curated objects on a surface rather than stacked modular blocks.

Component spacing follows a 2rem standard for related elements within sections, with 0.5rem handling tight groupings like label-text pairs. The 0.25rem base unit provides fine adjustment capability for optical alignment and border positioning. Navigation sits within the component spacing standard, maintaining consistent vertical rhythm with other structural elements.

The overall spatial impression is one of intentional emptiness—negative space functions as an active design element that isolates and elevates content. This requires discipline in implementation; the system will fail if content density increases without corresponding expansion of container dimensions.

## Visual language

The visual language communicates sophistication through material reference and typographic refinement rather than through decorative embellishment. Photography emphasizes texture and surface quality—concrete, wood grain, paper stock, woven fabric—connecting digital presentation to physical craft. Images receive minimal treatment, appearing in their natural color temperature without heavy filtering or gradient overlays.

The brand mark visible in the case study material demonstrates geometric abstraction with institutional weight. The mark combines angular forms suggesting architectural structure or open pages, rendered in solid forest green against warm backgrounds. This mark does not compete with content; it anchors identity moments with quiet confidence.

Typography itself becomes imagery at display scales. The hero serif at large sizes creates pattern and rhythm through stroke contrast and letterform detail. The partial visibility of "intersection of vision" in the services page suggests either intentional cropping for compositional tension or scroll-driven reveal that treats text as a spatial experience.

Color application remains disciplined: green appears as solid blocks or mark fills, never as gradients or tints. The absence of gradients, shadows, and borders in the visible material indicates a flat, material-forward aesthetic that relies on color fields and spacing for separation rather than dimensional effects. This flatness aligns with the print-design heritage evident in the stationery and collateral work.

The system avoids rounded corners on primary containers, preferring sharp edges that reinforce the editorial, print-derived sensibility. Where radius appears, it remains subtle at 0.5rem, suggesting utility for small interactive elements rather than softening of major structural forms.

## Components

**Hero Section**
- Anatomy: Full-viewport or near-full-viewport container with bottom-weighted or centered large display text
- Surface: Canvas background with no additional treatment
- Typography: Hero-display token, ink color
- Shape: Full-bleed rectangle with no border radius
- Spacing: Section-level vertical padding, generous horizontal margins
- Composition: Text positioned to create asymmetric balance, potentially with intentional cropping at viewport edges

**Case Study Card**
- Anatomy: Image-dominant container with overlaid or adjacent text block
- Surface: Warm-white or canvas background depending on context
- Typography: Section-display for project title, body for description, label for category metadata
- Shape: Sharp corners maintaining print-derived aesthetic
- Spacing: Component-level internal padding, section-level external margins
- Composition: Image and text in flexible relationship—sometimes stacked, sometimes with text overlay on photography

**Brand Mark**
- Anatomy: Geometric abstract logoform with architectural or book-like negative space
- Surface: Forest green fill on canvas or warm-white background
- Typography: Not applicable
- Shape: Custom vector paths with angular construction
- Spacing: Tight padding when contained, generous isolation when prominent
- Composition: Left-aligned or centered depending on context, never competing with primary content

**Navigation Bar**
- Anatomy: Horizontal container with text links, potentially with brand mark
- Surface: Canvas background, transparent or matching page
- Typography: Navigation token, ink color
- Shape: Full-width bar with no radius
- Spacing: Component-level vertical padding, tight horizontal spacing between items
- Composition: Left-aligned links or centered distribution, minimal visual weight

**Label/Metadata Group**
- Anatomy: Text pairings of category and value, or standalone categorical tags
- Surface: Transparent, inheriting parent background
- Typography: Label token, stone color for secondary information
- Shape: No container, text-only
- Spacing: Tight vertical stacking with 0.5rem between related items
- Composition: Inline or stacked depending on information density

**Emphasis Block**
- Anatomy: Solid color field containing text, used for brand statements or pull quotes
- Surface: Forest green background with canvas or warm-white text
- Typography: Section-display or body depending on content length
- Shape: Sharp rectangle, potentially with slight radius
- Spacing: Generous internal padding at component level
- Composition: Centered or left-aligned text within constrained width

## Responsive behavior

The design's reliance on large display typography and generous spacing requires careful adaptation for smaller viewports. The hero-display size at 6rem will require substantial reduction on mobile devices, likely scaling to section-display dimensions or below to maintain readability without excessive line breaks. The tight line height of 0.9 on hero text becomes increasingly critical as viewport width constrains; implementation should test for acceptable ascender-descender collisions at reduced sizes.

Navigation should collapse to a minimal menu trigger on narrow viewports, preserving the clean header aesthetic without introducing horizontal scroll or wrapping. The generous horizontal margins that frame content on desktop should reduce proportionally, potentially transitioning to a consistent 1.5rem or 2rem gutter that maintains the gallery-like presentation without consuming excessive screen real estate.

Case study imagery, which appears in complex layered compositions on desktop, should simplify to single-column stacking on mobile. The editorial flat-lay aesthetic does not translate directly to narrow viewports; individual mockup images may need to become sequential rather than overlapping. Text accompanying these images should maintain its relationship—above or below rather than overlaid—to ensure readability on smaller screens.

The typographic scale should maintain its proportional relationships across breakpoints, with all sizes reducing by a consistent ratio rather than selective compression of only the largest elements. This preserves the hierarchy established by the two-type-family system.

## Practical implementation guidance

**Preserve**
- The warm canvas background against pure white alternatives; this temperature is essential to the material quality
- The exclusive pairing of the variable serif for display and geometric sans for function; mixing these roles undermines the system
- The restrained use of forest green as sole chromatic accent; introducing additional colors will fragment the identity
- Generous section spacing; crowding content destroys the editorial gallery effect
- Sharp corners on major containers; the print-derived aesthetic depends on this precision

**Avoid**
- Drop shadows, gradients, or dimensional effects; the system is explicitly flat
- Pure white (#FFFFFF) backgrounds; they introduce clinical coldness against the warm photography
- Bold weight on the display serif; the variable regular weight carries sufficient contrast through form
- Rounded corners on cards or major panels; subtle radius is acceptable only for small interactive elements
- Centered text blocks for extended reading; left alignment maintains the editorial structure

**Recommended build order**
1. Establish the canvas background and ink text defaults
2. Implement the two font families with correct fallbacks
3. Build the typographic scale from hero-display through label
4. Create the hero section with correct spacing and alignment
5. Develop case study card components with image handling
6. Add navigation with minimal visual weight
7. Introduce forest green for brand marks and emphasis blocks
8. Refine responsive scaling and spacing reduction

**Accessibility**
- The warm canvas (#F0EFEA) against ink (#000000) provides strong contrast; verify that forest green on canvas meets WCAG AA standards for any text application
- The display serif's thin strokes may reduce perceived contrast at small sizes; reserve this family for large display applications only
- Generous line height on body text supports readability for extended content
- Ensure navigation remains keyboard accessible without relying on hover states that may not exist in the visible system
- Image-heavy case study presentations require descriptive alt text that conveys the material and compositional qualities shown

## Scope note

This guide covers the services page and case study presentation visible in the supplied material. Interior pages, form interactions, motion behavior, hover states, and mobile-specific layouts are not represented. Measurements are practical adaptation targets derived from visual analysis of the available imagery. The system assumes light-environment presentation with no dark mode established.

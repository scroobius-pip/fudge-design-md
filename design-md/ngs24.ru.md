# How ngs24.ru is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/ngs24.ru-design)

Last updated: 2026-08-10

## Captured pages

[![News article with full-width photograph of garbage bags along a curb, featuring dark slate body text and light gray metadata line below the image](https://pin.fontofweb.com/9098?format=jpg)](https://design.withfudge.com/share/pin-9098)

[News article with full-width photograph of garbage bags along a curb, featuring dark slate body text and light gray metadata line below the image](https://design.withfudge.com/share/pin-9098)

[![Beauty pageant article with three-panel diagonal photo composition, white background, and dark gray headline with attribution line](https://pin.fontofweb.com/9097?format=jpg)](https://design.withfudge.com/share/pin-9097)

[Beauty pageant article with three-panel diagonal photo composition, white background, and dark gray headline with attribution line](https://design.withfudge.com/share/pin-9097)

[![Animal welfare article with circular cropped dog portrait overlapping a residential tower photograph, white text on dark overlay elements](https://pin.fontofweb.com/9096?format=jpg)](https://design.withfudge.com/share/pin-9096)

[Animal welfare article with circular cropped dog portrait overlapping a residential tower photograph, white text on dark overlay elements](https://design.withfudge.com/share/pin-9096)

## Overview

NGS24.ru is a regional news portal serving Krasnoyarsk and the surrounding region. The design prioritizes readability and photographic impact over decorative flourish. Articles open with large, full-bleed lead photographs that dominate the viewport, followed by concise attribution metadata and clean text blocks. The visual system relies on a restrained palette of near-black, dark slate gray, and pure white, with photography providing the primary color and emotional texture. Headlines use a slab-serif typeface for authority and regional character, while body text employs a neutral sans-serif for efficient reading. The overall impression is utilitarian and direct: the design serves the content without competing for attention. Circular image crops and occasional diagonal panel compositions add visual interest to standard article layouts without disrupting the information hierarchy.

## Colors

The interface employs a minimal, high-contrast palette that keeps attention on photography and text content.

| token | value | use |
|---|---|---|
| ink | `#000000` | Primary backgrounds for overlay elements, badge fills, and absolute black needs |
| muted-ink | `#37404D` | Headlines, body text, captions, and all readable content on light surfaces |
| canvas | `#FFFFFF` | Page background, text on dark overlays, and image attribution backgrounds |
| surface | `#F5F5F5` | Subtle secondary backgrounds for metadata bands and divider regions |

The color system operates in a light mode exclusively across the visible pages. Dark values appear only as functional overlays or badge fills, never as page backgrounds. The muted-ink tone provides sufficient contrast against white for extended reading while avoiding the harshness of pure black text. Photographs supply all chromatic variety; the interface itself remains achromatic. This discipline ensures that editorial imagery remains the focal point and that text readability stays consistent regardless of the photographic content above it.

## Typography

Two font families serve distinct roles: Roboto Slab for headlines and Roboto for body text, captions, and interface elements. Roboto was designed by Christian Robertson for Google. Roboto Slab was designed by Google. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| headline | Roboto Slab | 1rem | 400 | 1.5 | normal | Article headlines and lead titles |
| body | Roboto | 1rem | 400 | 1.15 | normal | Body paragraphs and primary content |
| caption | Roboto | 0.75rem | 400 | 1.167 | normal | Image attribution, metadata, source lines |
| lead | Roboto Slab | 1.25rem | 400 | 1.4 | normal | Prominent opening paragraphs or emphasized titles |
| label | Roboto | 0.75rem | 400 | 1.167 | normal | Category tags, source labels, and secondary identifiers |
| overlay-text | Roboto | 1rem | 400 | 1.15 | normal | Text rendered on dark or photographic backgrounds |

The headline token uses a comfortable 1.5 line height suited to multi-line titles in Cyrillic text. The body token compresses leading slightly to 1.15 for dense paragraph efficiency. The caption token at 0.75rem handles secondary information with tighter leading appropriate for single or double-line metadata. The lead token at 1.25rem provides a modest step up for emphasized openings without departing from the restrained scale. The label token serves category and source identifiers with the same compact proportions as caption. The overlay-text token ensures legibility when white text appears on dark surfaces, maintaining the same metrics as body for consistency. No bold weights appear in the visible interface; hierarchy depends on size, family contrast, and color rather than weight variation. Letter spacing remains normal throughout, preserving the natural rhythm of Cyrillic character sets.

## Layout

The page structure follows a single-column editorial pattern with full-width lead media and constrained text blocks. The relative unit of 0.25rem provides fine-grained control over spacing adjustments.

Content sits edge-to-edge at the viewport width for photographs, then relaxes into comfortable reading measure for text. The standard padding of 1rem on the right side of content containers creates asymmetrical breathing room. Vertical spacing between elements uses 0.5rem increments for tight groupings and 1rem for section separations. Lead images occupy the full content width without border radius, creating a sharp rectangular frame against the white page. Attribution lines sit directly beneath images with minimal vertical clearance, typically 0.5rem, establishing immediate context before the headline begins.

The composition in the beauty pageant article demonstrates a more complex treatment: three photographic panels arranged with diagonal white dividers, creating dynamic visual tension while maintaining the overall single-column flow. The animal welfare article introduces a layered composition with a circular cropped portrait overlapping the corner of a rectangular architectural photograph, suggesting depth without abandoning the flat, content-forward approach.

## Visual language

Photography dominates every article page. Images receive no border radius treatment at the container level, presenting as clean rectangles that respect the photographic content. The only geometric flourish is the circular crop applied to inset portraits or detail shots, rendered at 50% border radius with a 4px solid border in pure white to separate the circular element from its background image.

The diagonal panel composition seen in the pageant coverage uses white separator lines at approximately 15-degree angles, cutting across three adjacent photographs. This treatment adds energy to event coverage while maintaining the overall restrained system. The circular portrait overlay in the animal article uses a negative margin offset of roughly 1.25rem to break the grid slightly, creating visual interest through intentional misalignment.

Text hierarchy is flat but clear: attribution in small sans-serif gray, headline in standard-size slab-serif dark slate, body in standard sans-serif dark slate. No rules, dividers, or background blocks separate these layers; whitespace alone carries the structural load.

## Components

**Lead Image**
- Anatomy: Full-width photograph with optional attribution line below
- Surface: No border, no shadow, no radius; photograph extends to content edges
- Typography: Attribution uses caption token in muted-ink on canvas
- Spacing: 0.5rem vertical gap between image bottom and attribution text
- Variants: Standard rectangular crop for most articles; circular inset portrait for human or animal subjects requiring emphasis; diagonal multi-panel arrangement for event coverage with multiple simultaneous photographs

**Image Attribution**
- Anatomy: Source credit and photographer name, sometimes with organization
- Surface: Canvas background, no visible container
- Typography: Caption token, muted-ink color
- Composition: Left-aligned, single line when possible; wraps naturally
- Spacing: 0.5rem below image edge, 1rem above headline when headline follows

**Headline**
- Anatomy: Article title following attribution or image
- Surface: Canvas background
- Typography: Headline token in muted-ink
- Spacing: 1rem vertical clearance from preceding metadata
- Composition: Full content width, left-aligned, no maximum width constraint visible

**Body Paragraph**
- Anatomy: Continuous text blocks with standard paragraph breaks
- Surface: Canvas background
- Typography: Body token in muted-ink
- Leading: 1.15 for efficient Cyrillic reading
- Spacing: 1rem between paragraphs, no indent on first line

**Circular Portrait Overlay**
- Anatomy: Circular cropped image positioned over rectangular lead photograph
- Shape: 50% border radius, 4px solid white border
- Composition: Negative offset positioning, typically overlapping lower-left corner of host image
- Spacing: 0.75rem internal padding when used as standalone badge element
- Border: 4px solid canvas to create separation from underlying photograph

**Overlay Badge**
- Anatomy: Text label on dark rounded background
- Surface: Ink background, canvas text
- Shape: Pill radius for full rounding
- Typography: Body token in canvas color
- Spacing: 0.75rem horizontal padding, 0.75rem vertical padding
- Composition: Positioned over photographic content where contrast demands reversed colors

**Diagonal Panel Composition**
- Anatomy: Multiple photographs arranged side by side with angled white separators
- Surface: Canvas background visible in separator gaps
- Composition: Three panels typical, each containing distinct photographic moment
- Separators: White lines at approximately 15-degree angle, creating dynamic rhythm
- Spacing: Panels touch edge to edge without external margin

## Responsive behavior

The single-column layout adapts naturally to narrower viewports without structural change. Lead images maintain full width and scale proportionally. Text blocks gain comfortable margins on wider screens through the existing right-padding pattern. The diagonal panel composition may stack to single panels on narrow screens; implement this with standard flex or grid column collapse. The circular portrait overlay should maintain its relative positioning and scale down with the host image. No navigation, sidebar, or multi-column structures are visible in the supplied pages; assume a straightforward content stream for all breakpoints.

## Practical implementation guidance

**Preserve**
- The stark white page background against full-bleed photography
- The slab-serif headline and sans-serif body pairing
- The flat hierarchy without bold weights or size jumps
- The circular crop treatment for inset portraits with white border separation
- The immediate proximity of image attribution to its photograph

**Avoid**
- Adding background colors or borders to text containers
- Using pure black for body text; the muted slate tone is essential for comfortable reading
- Introducing card-like elevations or shadows around content
- Decorative rules or dividers between headline, attribution, and body
- Multiple font weights where size and family contrast suffice

**Recommended build order**
1. Establish the canvas background and single-column content flow
2. Implement typography tokens with exact family, size, and leading values
3. Add full-width lead image treatment with zero border radius
4. Layer in attribution caption styling beneath images
5. Build headline and body paragraph spacing rhythm
6. Add circular portrait overlay and diagonal panel variants for special article types
7. Verify color contrast meets standards for the muted-ink on canvas pairing

**Accessibility**
- Ensure the muted-ink text on canvas background meets WCAG AA contrast ratios; the dark slate tone against white should satisfy this
- Provide alt text for all lead photographs and circular portrait overlays
- Maintain logical heading hierarchy with a single h1 per article
- Consider focus indicators for any interactive elements not visible in the supplied pages

## Scope note

This guide covers article page surfaces from the NGS24.ru news portal. Navigation headers, footers, category listing pages, search interfaces, and comment sections are not represented in the supplied material. Interactive states, advertising placements, and video embed treatments are not documented. Measurements reflect the visible implementation targets from the provided pages.

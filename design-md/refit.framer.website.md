# How refit.framer.website is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/refit.framer.website-design)

Last updated: 2026-08-10

## Captured pages

[![About us section with dark pill label, large stacked display heading, and body paragraph on white background](https://pin.fontofweb.com/5556?format=jpg)](https://design.withfudge.com/share/pin-5556)

[About us section with dark pill label, large stacked display heading, and body paragraph on white background](https://design.withfudge.com/share/pin-5556)

[![Overlapping text fragments and interior photography showing warm wood ceiling and neutral wall surfaces](https://pin.fontofweb.com/5555?format=jpg)](https://design.withfudge.com/share/pin-5555)

[Overlapping text fragments and interior photography showing warm wood ceiling and neutral wall surfaces](https://design.withfudge.com/share/pin-5555)

[![Cropped display typography with warm-toned interior photography showing ceiling texture and wall finishes](https://pin.fontofweb.com/5554?format=jpg)](https://design.withfudge.com/share/pin-5554)

[Cropped display typography with warm-toned interior photography showing ceiling texture and wall finishes](https://design.withfudge.com/share/pin-5554)

## Overview

Refit presents a construction and renovation brand through a restrained, editorial visual system. The design pairs stark black typography against expansive white space, creating a gallery-like atmosphere that lets interior photography breathe. The tone is professional and confident without heaviness—achieved through thin, elegant display letterforms and generous margins that suggest precision and care. Warm photographic content showing wood ceilings, neutral walls, and crafted interiors provides the emotional warmth that the typographic system deliberately withholds. This contrast between cool, minimal structure and warm, tactile imagery defines the brand's visual personality: expert craftsmanship delivered with modern clarity.

## Colors

The palette is intentionally narrow, relying on high-contrast black and white for interface elements while drawing warmth from photographic content. Four semantic colors organize the system.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, labels, headings, and all interface typography |
| canvas | #FFFFFF | Page background, label text on dark pills, and negative space |
| warm-surface | #B3A394 | Warm wood and plaster tones visible in interior photography |
| cool-surface | #6A8A9C | Muted blue-gray accents in shadowed architectural details |
| earth-accent | #8B7355 | Deeper wood and material tones in featured project imagery |

The light mode dominates: white canvas with black ink for all text and UI elements. No dark mode is visible in the supplied material. Photographic content carries the full warm palette, with interiors showing honeyed wood ceilings, cool gray wall surfaces, and earthy brown structural elements. These photographic colors should not be applied as flat interface fills but inform image selection, overlay treatments, and adjacent accent choices. The strict two-color interface treatment ensures that photography remains the focal point without chromatic competition.

## Typography

Two families from designer Mikhail Sharanda structure the hierarchy: False-Normal for display impact and Manrope for functional clarity. Both are available via Fontshare; verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | False-Normal | 3.5rem | 400 | 1.1 | -0.02em | Major section headings, stacked multi-line titles |
| body | Manrope | 1rem | 400 | 1.6 | 0em | Paragraphs, descriptions, explanatory content |
| label | Manrope | 0.75rem | 500 | 1.2 | 0.01em | Pill badges, category tags, small annotations |

False-Normal carries the brand voice in large display settings. Its thin stroke weight and slightly condensed proportions create elegant vertical stacks that feel architectural without ornament. The negative letter spacing tightens word shapes at scale, preventing the lightness from feeling tentative. Manrope provides the workhorse layers: body text at a comfortable 1.6 line height for extended reading, and medium-weight labels for small, high-contrast pill elements. The size progression follows a 4px step system, with display at 56px, body at 16px, and label at 12px—each an exact whole-number multiple of the 4px base unit.

## Layout

The page structure favors asymmetric two-column arrangements with substantial breathing room. The left column typically carries section labels and large display headings; the right column holds body paragraphs at a narrower measure. This split creates visual tension between scale and density, guiding the eye from categorical identification through emotional headline to explanatory detail.

Section spacing is generous, with 5rem vertical gaps establishing clear territorial boundaries between content zones. Internal content gaps of 1.5rem separate related elements within a section. The grid appears to use a fluid approach rather than rigid columns, allowing text blocks to find natural widths against image arrays below.

Photography occupies full-bleed or near-full-bleed rows beneath text content, with images presented edge-to-edge or with minimal gutters. The transition from white space to warm photographic surfaces creates rhythm across the scroll: calm typographic passages punctuated by immersive interior views. No sidebar, card grid, or complex container system is visible; the layout prioritizes linear reading and photographic impact over dense information architecture.

## Visual language

The visual language balances editorial restraint with residential warmth. Sharp-cornered rectangles dominate—no rounded cards or soft containers appear in the interface layer. The single exception is the pill-shaped section label, a small black capsule with white text that floats before headings like a categorical marker.

Photography treatment is naturalistic: no heavy filters, no color grading toward brand hues, no geometric cropping into circles or arches. Images show real interior conditions—wood grain, plaster texture, recessed lighting—with honest lighting and minimal post-processing. This authenticity supports the construction brand's promise of tangible, finished spaces.

The contrast between austere typography and inviting photography creates a distinctive tension. Where many construction sites lead with tool imagery or aggressive orange safety colors, Refit leads with lived-in spaces and quiet confidence. The design whispers expertise rather than shouting capability.

## Components

**Section label**
- Anatomy: Text string within a filled capsule, positioned as a categorical marker above section content
- Surface: Solid black background with white text, creating maximum contrast at small scale
- Typography: `{typography.label}`—Manrope Medium, 0.75rem, with slight positive letter spacing for clarity
- Shape: Full pill with `9999px` border radius, making the capsule ends perfectly semicircular
- Spacing: Internal padding of 0.5rem vertical and 1rem horizontal, keeping the label compact but legible
- Composition: Anchored above and slightly offset from the associated heading, establishing hierarchy before the display text begins

**Hero heading**
- Anatomy: Multi-line display text, typically 2–4 words stacked vertically to form a single visual block
- Surface: Transparent background with black text on the white canvas, no container or decorative treatment
- Typography: `{typography.hero-display}`—False-Normal at 3.5rem with weight 400, relying on thin stroke elegance
- Shape: No bounding container, flush left alignment with the page or column edge
- Spacing: Tight leading at 1.1 creates visual cohesion between lines, making stacked words read as one unified form
- Composition: Left-column placement with substantial right margin before body text begins, creating asymmetric balance

**Body paragraph**
- Anatomy: Continuous prose block of 3–5 sentences, forming a self-contained explanatory unit
- Surface: Transparent background with black text, no fill or border to separate it from the canvas
- Typography: `{typography.body}`—Manrope at 1rem with weight 400, optimized for extended reading comfort
- Shape: Ragged right edge following natural line breaks, no defined container width enforced by borders
- Spacing: Comfortable 1.6 line height prevents density fatigue during longer passages
- Composition: Right-column placement at a narrower measure than the heading column, respecting optimal reading width

**Image row**
- Anatomy: Horizontal array of interior photographs, typically 2–4 images abutting or nearly abutting
- Surface: Full photographic content with natural color and lighting, no overlay gradient or border treatment
- Shape: Sharp rectangular edges with zero border radius, maintaining the system's rectilinear discipline
- Spacing: Minimal or zero gutter between adjacent images, creating a continuous band of visual material
- Composition: Full-width band positioned beneath text sections, serving as a visual anchor that breaks the white space rhythm

## Responsive behavior

The two-column text layout should stack vertically on narrow viewports, with the section label and heading preceding the body paragraph. Display type should scale down proportionally, maintaining the 4px grid step—consider 2.5rem or 2rem for tablet and mobile hero sizes. Image rows should maintain horizontal scroll or reflow to single-column presentation rather than shrinking to illegible strips. The pill label may reduce slightly in padding but should retain its full-pill shape at all sizes. Touch targets for any interactive labels should meet minimum 44px height.

## Practical implementation guidance

**Preserve**
- The stark black-on-white typographic treatment for all interface text
- False-Normal for display headings; its thin weight is central to the brand voice
- Generous white space between sections—resist filling the canvas
- Natural, unfiltered photography of finished interiors
- The pill label as the sole rounded element in an otherwise sharp-cornered system

**Avoid**
- Adding brand colors as flat fills or background tints; the palette is intentionally narrow
- Using bold or heavy weights in display settings; the lightness is deliberate
- Card containers, shadows, or borders around content blocks
- Icon fonts or symbol fonts treated as typography; keep the typographic system clean
- Generic construction imagery—tools, hard hats, or before/after comparisons

**Recommended build order**
1. Establish the 4px base grid and set canvas/ink color tokens
2. Implement Manrope for body and label styles with correct weights
3. Add False-Normal for hero-display with negative letter spacing
4. Build the section-label pill component with exact padding and radius
5. Create the two-column text layout with responsive stacking behavior
6. Integrate photography rows with edge-to-edge or minimal-gutter presentation

**Accessibility**
- Ensure sufficient color contrast for the thin False-Normal strokes; the light weight may require careful size thresholds
- Provide alt text for all interior photography describing room type and visible materials
- Maintain logical heading hierarchy with section labels as decorative, non-heading elements
- Test touch targets for pill labels on mobile devices

## Scope note

This guide covers the homepage hero and about section surfaces visible in the supplied images. Footer, navigation, service listings, contact forms, and project detail pages are not represented. Motion, hover states, and mobile breakpoints are not documented. Measurements are practical adaptation targets.

# How matteosrr.webflow.io is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/matteosrr.webflow.io-design)

Last updated: 2026-08-10

## Captured pages

[![Dark section heading with large light-gray 'Recent Projects' display typography on near-black background](https://pin.fontofweb.com/5771?format=jpg)](https://design.withfudge.com/share/pin-5771)

[Dark section heading with large light-gray 'Recent Projects' display typography on near-black background](https://design.withfudge.com/share/pin-5771)

[![Light background with large black body text stating the designer's value proposition in two lines](https://pin.fontofweb.com/5770?format=jpg)](https://design.withfudge.com/share/pin-5770)

[Light background with large black body text stating the designer's value proposition in two lines](https://design.withfudge.com/share/pin-5770)

## Overview

This design system describes a personal portfolio website for a designer and Webflow developer. The visual language is deliberately restrained: a near-monochrome palette, a single type family at large sizes, and an absence of decorative elements. The system prioritizes typographic presence over color complexity, letting the scale and spacing of words carry the visual weight. The overall impression is editorial and confident—content sits in open space, and the contrast between dark and light sections creates rhythm without relying on hue. Every element serves readability and hierarchy, from the oversized section headings to the measured body copy that introduces the creator's services.

## Colors

The palette is strictly achromatic, built from blacks, whites, and grays that create dramatic section-to-section contrast. No accent colors appear in the visible interface; the design relies on value contrast and scale for emphasis.

| token | value | use |
|---|---|---|
| ink | `#111111` | Primary text on light backgrounds; near-black for maximum legibility |
| canvas | `#FEFEFE` | Primary light background; off-white to reduce glare against pure white |
| muted | `#BBBBBB` | Display text on dark backgrounds; secondary or de-emphasized content |
| surface | `#1C1C1C` | Dark section backgrounds; deep charcoal softer than pure black |

The dark sections use `surface` as a field for large display typography in `muted`, creating a low-contrast, atmospheric effect that reads as sophisticated rather than subdued. Light sections invert this relationship, placing `ink` text on `canvas` for crisp readability. The absence of color in the traditional sense means photography or project imagery would introduce the only chromatic variation, making the neutral frame a deliberate choice to let client work speak. No borders, shadows, or gradients are visible in the supplied material; edges are defined by the meeting of flat color fields.

## Typography

The system uses a single type family, By Mathieu Desjardins-15166747416799461226, designed by Mathieu Desjardins and distributed by Pangram Pangram Foundry. Verify licensing for this family before production use. The design exploits the typeface's clean grotesque forms at large sizes, with negative tracking that tightens word shapes and increases visual density.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | By Mathieu Desjardins-15166747416799461226 | 4rem | 400 | 1 | -0.02em | Largest page headings, likely name or title |
| section-display | By Mathieu Desjardins-15166747416799461226 | 3.5rem | 400 | 1.05 | -0.02em | Section headings such as "Recent Projects" |
| body-large | By Mathieu Desjardins-15166747416799461226 | 2rem | 400 | 1.2 | -0.01em | Introductory paragraphs, value propositions |
| body | By Mathieu Desjardins-15166747416799461226 | 1.25rem | 400 | 1.4 | 0em | Standard reading text |
| label | By Mathieu Desjardins-15166747416799461226 | 0.75rem | 400 | 1 | 0.05em | Small captions, metadata, navigation hints |

All sizes are whole-number multiples of the 4px base unit (0.25rem). The weight remains consistently Regular (400) across all roles; hierarchy is established through size and tracking rather than boldness. The tight leading on display sizes—1.0 to 1.05—creates compact, impactful lines that sit as solid blocks of color. Body text relaxes to 1.2–1.4 for comfortable reading. Negative tracking on larger sizes prevents looseness at scale, while the small positive tracking on labels aids legibility at reduced size.

## Layout

The layout follows a full-bleed, section-based architecture with generous vertical padding and centered content blocks. Sections appear to alternate between dark and light backgrounds, creating a striped rhythm down the page. Horizontal margins are substantial, keeping text and imagery away from viewport edges and reinforcing the editorial quality.

The content width for text-heavy sections appears constrained to a readable measure—approximately 48rem for body content—while display headings may extend wider or align to a broader grid. No visible sidebar, card grid, or multi-column structure appears in the supplied material; the layout is fundamentally single-column with scale and spacing as the primary organizing principles.

Vertical spacing between sections uses the `section` token at 6rem, creating deliberate breathing room that separates thematic content. Within sections, `component` spacing at 2rem groups related elements, while `tight` spacing at 0.5rem handles inline or adjacent relationships. The base `unit` of 0.25rem provides fine-grained control for precise adjustments.

No visible borders, dividers, or rules separate sections; the background color change alone provides segmentation. This flat, edge-defined approach extends to components, which appear to sit flush within their containers without elevation or shadow.

## Visual language

The visual character is austere and self-assured, drawing from Swiss-influenced editorial design and contemporary portfolio conventions. The restraint in color and type variation forces attention onto composition and negative space. Large typography functions as both content and image, with words scaled to become graphic elements.

The contrast system is binary: dark sections with light text feel immersive and atmospheric, while light sections with dark text feel declarative and direct. This alternation prevents monotony without introducing complexity. The near-absence of rounded corners—everything appears sharp and rectilinear—reinforces a precision-engineered aesthetic appropriate to a developer's portfolio.

Imagery, when present, would likely sit within this neutral frame without borders or effects, treated as flat content within the section color field. The system suggests that project work would be presented with similar restraint, letting the work's own visual character emerge against the quiet background.

## Components

### Section heading

- **Anatomy**: Single-line or short multi-line heading, centered or left-aligned within a full-bleed dark section.
- **Surface and text color**: `surface` background with `muted` text.
- **Typography**: `section-display` token at 3.5rem, Regular weight, tight leading.
- **Shape and border**: No border radius; sharp rectangular section edges.
- **Spacing**: `section` padding vertically, generous horizontal margins.
- **Composition**: Heading dominates the section, with ample space above and below to isolate it from adjacent content.
- **Variants**: May appear as `hero-display` at 4rem for the most prominent page-level heading.

### Value proposition text block

- **Anatomy**: One to three sentences of introductory copy, left-aligned on light background.
- **Surface and text color**: `canvas` background with `ink` text.
- **Typography**: `body-large` token at 2rem, Regular weight, relaxed 1.2 line height.
- **Shape and border**: No containing border or background shape; text sits directly on the section background.
- **Spacing**: `section` padding vertically, constrained maximum width for optimal line length.
- **Composition**: Text block positioned with clear margins, creating a calm reading zone before more structured content follows.
- **Variants**: May scale down to `body` at 1.25rem for longer explanatory passages.

### Site navigation

- **Anatomy**: Minimal text links—likely name or initials and sparse section links—arranged horizontally.
- **Surface and text color**: Transparent background with `ink` text on light sections, or `muted` text if positioned over dark sections.
- **Typography**: `label` token at 0.75rem with positive tracking for clarity at small size.
- **Shape and border**: No visible button shapes or containers; text links only.
- **Spacing**: `component` padding horizontally, `tight` vertical alignment.
- **Composition**: Horizontal arrangement, likely fixed or sticky at viewport top, with generous whitespace separating link items.
- **Variants**: May shift text color based on underlying section background.

## Responsive behavior

The large display typography should scale down on narrower viewports to maintain fit without excessive wrapping. The `section-display` at 3.5rem may reduce to 2.5rem or 2rem on mobile, preserving the tight leading and negative tracking. Body-large at 2rem should similarly compress, perhaps to 1.5rem, to prevent overly long lines in the constrained viewport width.

Section padding should reduce from 6rem to 4rem or 3rem on mobile, maintaining proportion without consuming excessive vertical space. Horizontal margins should tighten from generous desktop gutters to standard mobile safe areas, approximately 1rem to 1.5rem.

The single-column layout requires no structural breakpoint changes; the primary adaptation is typographic scaling and spacing reduction. If project imagery appears in grids below the visible sections, these should stack to single column on narrow viewports.

## Practical implementation guidance

### Preserve
- The stark monochrome palette; introducing color would undermine the system's deliberate restraint.
- The large, tightly tracked display typography; this is the primary visual signature.
- The alternating dark/light section rhythm; it provides structure without added elements.
- The sharp, unrounded corners throughout; they communicate precision.

### Avoid
- Adding borders, shadows, or elevation effects; the design is flat by intention.
- Introducing additional type families or weights; the single-family, single-weight system is core to the aesthetic.
- Pure black (`#000000`) and pure white (`#FFFFFF`); the slightly softened values in the palette reduce harshness.
- Decorative elements such as icons, rules, or background patterns; negative space is the ornament.

### Recommended build order
1. Establish the color tokens and apply alternating section backgrounds.
2. Implement By Mathieu Desjardins-15166747416799461226 with the full type scale, testing at viewport extremes.
3. Build the section heading component with correct padding and alignment.
4. Add the value proposition text block with width constraints.
5. Implement site navigation with minimal styling to match the quiet system.
6. Add project or portfolio content sections following the established rhythm.

### Accessibility
- Ensure `muted` text on `surface` backgrounds meets minimum contrast ratios; the light gray on dark gray may need verification for WCAG AA compliance.
- Provide focus indicators for interactive elements that do not rely on color alone; visible outlines or underline changes are appropriate.
- Maintain logical heading hierarchy if multiple display sizes appear on one page.
- Consider `prefers-reduced-motion` for any scroll-triggered animations that may accompany the section transitions.

## Scope note

This guide covers the visible homepage surface including the hero introduction and section heading patterns. Footer content, project detail pages, contact forms, and any interactive case-study presentations are not represented in the supplied material. Measurements are practical adaptation targets.

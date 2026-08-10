# How honglyoeng.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/honglyoeng.com-design)

Last updated: 2026-08-10

## Captured pages

[![About Me page with oversized white display typography on black canvas and scattered 3D object decorations](https://pin.fontofweb.com/497?format=jpg)](https://design.withfudge.com/share/pin-497)

[About Me page with oversized white display typography on black canvas and scattered 3D object decorations](https://design.withfudge.com/share/pin-497)

[![Contact footer section with massive Get in Touch headline, three social links, and floating 3D objects on black](https://pin.fontofweb.com/496?format=jpg)](https://design.withfudge.com/share/pin-496)

[Contact footer section with massive Get in Touch headline, three social links, and floating 3D objects on black](https://design.withfudge.com/share/pin-496)

[![Call-to-action band with tilted project thumbnails, white heading, and outlined pill button on black](https://pin.fontofweb.com/495?format=jpg)](https://design.withfudge.com/share/pin-495)

[Call-to-action band with tilted project thumbnails, white heading, and outlined pill button on black](https://design.withfudge.com/share/pin-495)

[![VIBE case study card with left-aligned project metadata, metrics, and device mockups on black background](https://pin.fontofweb.com/494?format=jpg)](https://design.withfudge.com/share/pin-494)

[VIBE case study card with left-aligned project metadata, metrics, and device mockups on black background](https://design.withfudge.com/share/pin-494)

## Overview

Hongly Oeng's portfolio is a statement of maximal minimalism: an unbroken black canvas serves as the stage for enormous white typography and carefully placed 3D objects. The design system rejects conventional grid density in favor of dramatic negative space, letting each element breathe across the full viewport width. The visual hierarchy is established entirely through scale contrast—headlines dominate at sizes that push against the edges of the screen, while supporting text remains modest and centered. Scattered decorative objects—rendered as realistic 3D illustrations of food, cultural artifacts, and everyday items—float across the black void, creating an editorial, almost surreal atmosphere that separates this portfolio from typical template-driven designer sites. The system is built on a single type family, Inter, used in two weights across a wide range of sizes, and a color palette reduced to black, white, and a single mid-tone gray.

## Colors

The palette is deliberately austere, using absolute black as the dominant canvas to make white typography and colorful 3D objects pop with maximum contrast.

| token | value | use |
|---|---|---|
| canvas | #000000 | Primary background for all sections; the defining surface of the site |
| ink | #ffffff | All primary text, headlines, labels, and button borders |
| muted-ink | #b0b0b0 | Secondary descriptive text, metric labels, and supporting copy |
| surface | #1a1a1a | Navigation pill background, subtle elevated containers |
| action | #ffffff | Button text and borders; active navigation states |

The color logic is strictly binary: black absorbs, white announces. The 3D objects provide the only chromatic variation, functioning as photographic content rather than UI color. No gradients, shadows, or transparency effects are visible in the interface layer. The muted-ink token appears sparingly, reserved for de-emphasized information like metric descriptions and category tags. When photographs or device mockups appear within case studies, they retain their natural color against the black field, making them feel like illuminated objects in a dark room.

## Typography

Inter, designed by Rasmus Andersson and distributed by Rsms, is the sole type family. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Inter | 8rem | 700 | 0.9 | -0.03em | Page headlines: "ABOUT ME", "Get in Touch!" |
| section-display | Inter | 2.5rem | 700 | 1.1 | -0.02em | Section headings, CTA headlines |
| body | Inter | 1rem | 400 | 1.6 | 0 | Paragraphs, project descriptions |
| label | Inter | 0.875rem | 400 | 1.4 | 0.01em | Navigation, buttons, metric labels, footer copy |
| metric | Inter | 2rem | 700 | 1 | -0.01em | Case study statistics: "44 NPS", "82 SUS" |

The type scale is anchored by the hero-display token at 8rem, which corresponds to 128px at a 16px root—an exact multiple of the 4px relative unit. This size is used for the most dramatic moments: the "ABOUT ME" headline that spans nearly the full viewport width, and the "Get in Touch!" footer headline. The negative letter spacing is essential to the tight, impactful feel of these oversized words. Body text remains restrained at 1rem with generous line height for readability against the dark background. The metric token at 2rem creates a middle ground for numerical highlights within case studies.

## Layout

The layout system is fundamentally viewport-driven and asymmetrical. Sections stack vertically with substantial padding between them, typically 6rem or more. Content rarely fills a centered column; instead, it aligns to expressive positions—headlines often start near the left edge and extend rightward, while body text and CTAs center themselves in narrower bands.

The case study card in the VIBE example demonstrates a split composition: textual content occupies the left third with left-aligned metadata, while device mockups float in the right two-thirds with no visible bounding container. This creates an editorial spread feeling rather than a boxed card.

Navigation appears as a floating pill bar near the bottom of viewport-height sections, containing three text links with the active state rendered as a lighter pill background. The 3D objects are positioned absolutely or fixed, scattered at various depths and angles across the black canvas, breaking any implied grid.

Spacing between elements within a content block follows a 1.5rem component gap, while section breaks use the full 6rem section spacing to create dramatic pauses in the scrolling experience.

## Visual language

The defining visual characteristic is the collision of stark minimalism with playful maximalism. The interface layer—typography, buttons, navigation—is ruthlessly reduced: black, white, one font, no decoration. Against this restraint, the 3D object illustrations explode with color, texture, and realistic detail. Objects include food items, cultural artifacts, electronics, and personal items, each rendered with soft shadows and material fidelity that makes them appear to sit in physical space.

The 3D objects serve multiple roles: they act as section dividers, as personality markers that reveal the designer's interests and heritage, and as compositional devices that break the horizontal rhythm of text. Their placement feels intentional but not systematic—some cluster, others float in isolation, and their rotations suggest gravity without obeying it strictly.

Device mockups in case studies receive a subtle treatment: phones and monitors appear with realistic bezels and soft ambient reflections, positioned at slight angles to suggest depth. No heavy drop shadows frame them; the black canvas itself provides the contrast.

The overall impression is of a curated personal museum where each scroll reveals a new vitrine containing text, objects, and work samples in deliberate isolation.

## Components

### Navigation Pill Bar

- **Anatomy**: Horizontal row of three text links ("Home", "Playground", "About Me") contained within a rounded pill-shaped background
- **Surface**: Background uses surface token (#1a1a1a); active item uses canvas token (#000000) with ink text
- **Typography**: label token, 0.875rem, regular weight
- **Shape**: Full pill border radius (9999px); generous horizontal padding
- **Spacing**: Centered horizontally near viewport bottom; internal link spacing approximately 2rem
- **Composition**: Floats above content without visible shadow; appears to be position-fixed or sticky

### Primary Action Button

- **Anatomy**: Text label centered within a bordered pill
- **Surface**: Transparent background with 1px solid ink border; ink text
- **Typography**: label token
- **Shape**: Full pill border radius
- **Spacing**: Horizontal padding approximately 1.5rem, vertical padding approximately 0.75rem
- **Variants**: The "Additional Works" CTA uses this treatment; the "Read More" case study button uses a filled surface background with ink text instead

### Case Study Card

- **Anatomy**: Category tag, project title, description paragraph, metric grid (2 columns), primary action button, device mockup image
- **Surface**: Transparent; all text sits directly on canvas
- **Typography**: Category uses label token in muted-ink; title uses section-display; description uses body; metrics use metric token for numbers and label token for descriptions
- **Shape**: No visible card boundary; composition is open
- **Spacing**: Title to description: 1rem; description to metrics: 2rem; metric column gap: 3rem; metrics to button: 2rem
- **Composition**: Left-aligned text block, right-aligned or overlapping device mockups; mockups may break the implied text column

### CTA Band

- **Anatomy**: Three tilted thumbnail images, section-display headline, body description, primary action button
- **Surface**: Transparent on canvas
- **Typography**: Headline uses section-display; description uses body
- **Composition**: Thumbnails arranged in a shallow arc or scattered cluster above centered text; all elements centered horizontally
- **Spacing**: Thumbnails to headline: 2rem; headline to description: 1rem; description to button: 1.5rem

### Footer Contact Block

- **Anatomy**: Hero-display headline, three equal-width link columns, scattered 3D objects, copyright line
- **Surface**: Transparent on canvas
- **Typography**: Headline uses hero-display; links use section-display at smaller effective size or body with increased weight; copyright uses label in muted-ink
- **Composition**: Headline spans full width; three links (Email, LinkedIn, Behance) distribute evenly below; objects scatter across lower portion

## Responsive behavior

The design's reliance on viewport-width headlines suggests a fluid type scale rather than fixed breakpoints. At narrower viewports, the hero-display size should reduce proportionally to maintain edge margins—implementation guidance suggests a minimum 1rem side padding at all times. The three-column footer link layout should collapse to a single stacked column on narrow screens, maintaining the scattered object composition behind or beside the text.

Case study cards with side-by-side text and mockups should stack vertically on narrow viewports, with mockups appearing above or below the text block. The navigation pill bar may need to reduce internal spacing or font size to prevent wrapping on very narrow screens.

The 3D objects, being decorative, should scale down or reduce in count on smaller screens to prevent visual clutter and maintain performance. Their absolute positioning may need to shift from viewport-relative to section-relative to avoid overlapping critical content.

## Practical implementation guidance

### Preserve
- The absolute black canvas as the unbroken background across all sections
- The oversized, tightly-tracked Inter headlines with their edge-to-edge presence
- The scattered 3D object aesthetic as a signature visual element
- The binary color logic: white for everything interactive or primary, gray only for de-emphasized text
- The pill-shaped navigation and button treatments with their full border radius

### Avoid
- Adding background colors, gradients, or textures to sections
- Introducing additional type families or decorative fonts
- Boxing case study content in visible cards with borders or shadows
- Center-aligning headlines that are meant to feel monumental and left-anchored
- Using drop shadows on UI elements—the black canvas provides sufficient contrast

### Recommended build order
1. Establish the black canvas and Inter font loading
2. Implement the fluid hero-display type scale with negative letter spacing
3. Build the navigation pill bar with active state styling
4. Create the primary action button component with pill border variant
5. Develop the case study card layout with asymmetric text/mockup composition
6. Add the CTA band with tilted thumbnail arrangement
7. Implement the footer contact block with scattered object positioning
8. Refine 3D object placement and responsive scaling

### Accessibility
- Ensure white text on black maintains WCAG AAA contrast (the current combination does)
- Provide focus indicators for the pill navigation and buttons that do not rely solely on color change—consider an outline offset or subtle background shift
- The 3D objects should have appropriate alt text describing their content, or be marked decorative if purely ornamental
- The massive headline sizes may trigger viewport zoom issues; test that text remains readable at 200% zoom
- Link text in the footer should have visible focus states and adequate touch targets on mobile

## Scope note

This guide covers the homepage and About Me page surfaces visible in the supplied images, including the hero, case study presentation, call-to-action, and contact footer patterns. Measurements are practical adaptation targets. Mobile breakpoints, hover animations, loading states, form interactions, and additional project pages are not represented in the available material. The 3D object assets and their specific positioning coordinates would need to be recreated or sourced separately.

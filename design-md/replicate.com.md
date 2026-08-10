# How replicate.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/replicate.com-design)

Last updated: 2026-08-10

## Captured pages

[![Playground beta page with dark charcoal background, mint green accent badge, and feature icons for model comparison](https://pin.fontofweb.com/5689?format=jpg)](https://design.withfudge.com/share/pin-5689)

[Playground beta page with dark charcoal background, mint green accent badge, and feature icons for model comparison](https://design.withfudge.com/share/pin-5689)

[![Pricing and infrastructure section with red-orange data visualizations on near-black background](https://pin.fontofweb.com/5292?format=jpg)](https://design.withfudge.com/share/pin-5292)

[Pricing and infrastructure section with red-orange data visualizations on near-black background](https://design.withfudge.com/share/pin-5292)

[![Homepage hero with massive white display type interspersed with AI-generated imagery and code snippets](https://pin.fontofweb.com/5188?format=jpg)](https://design.withfudge.com/share/pin-5188)

[Homepage hero with massive white display type interspersed with AI-generated imagery and code snippets](https://design.withfudge.com/share/pin-5188)

[![Site footer with four-column link grid, Replicate wordmark, and colorful gradient rule above](https://pin.fontofweb.com/5187?format=jpg)](https://design.withfudge.com/share/pin-5187)

[Site footer with four-column link grid, Replicate wordmark, and colorful gradient rule above](https://design.withfudge.com/share/pin-5187)

## Overview

Replicate's design system is a dark-mode-first developer platform aesthetic built for technical credibility and creative energy. The interface rests on a pure black canvas with near-white typography, creating extreme contrast that keeps code, data visualizations, and model outputs legible at any density. The visual identity balances two distinct modes: a restrained, almost monochromatic foundation for navigation and documentation, and explosive accent colors in data visualization and brand gradients that signal capability and technical sophistication.

The homepage communicates through scale rather than ornament. Massive display type from Rb Freigeist Neue Test dominates the hero, with individual words spanning the viewport and interspersed with live model outputs, code snippets, and generated imagery. This collage approach treats AI outputs as first-class content, not decoration. Interior pages like the Playground beta and pricing sections tighten the density, using smaller type scales and more structured grids while maintaining the same dark foundation. The overall impression is of a tool built by and for engineers who expect precision, but with enough visual confidence to appeal to creative technologists.

## Colors

The color system is austere, built from three exact interface values with photographic and data-visualization colors interpreted from imagery rather than asserted as UI tokens.

| token | value | use |
|---|---|---|
| canvas | #000000 | Page background, deepest layer, footer ground |
| surface | #111111 | Elevated panels, cards, input fields |
| ink | #EEEEEE | Primary text, headings, primary button fill, borders |

The dark foundation is absolute: pure black canvas with slightly elevated near-black surfaces. This creates depth without introducing warmth or color cast. The near-white ink reduces eye strain during extended code reading sessions while maintaining the crispness expected of technical interfaces.

Image-derived colors appear throughout the interface but serve specific contextual roles rather than functioning as reusable tokens. The Playground page shows a mint green tone in the "Beta" badge and feature icons, interpreted from the image palette as a functional accent for experimental features. The pricing page uses red-orange tones in charts and graphs, drawn from the image palette as data-visualization emphasis. The homepage footer displays a vibrant gradient rule transitioning through magenta, orange, and yellow, interpreted from image content as brand punctuation. These colors should be sampled directly from source imagery when reproducing specific components.

## Typography

The type system pairs a distinctive display face with workhorse geometric sans and monospace families. Rb Freigeist Neue Test provides personality at large scales, while Basier Circle and Square handle interface text with neutral clarity. The extracted data also identifies By Atipo-9504448690793184050 as a font source present in the system.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Rb Freigeist Neue Test | 6rem | 700 | 1 | -0.03em | Homepage hero words, massive statements |
| section-display | Rb Freigeist Neue Test | 2.5rem | 700 | 1.1 | -0.02em | Section headings, feature titles |
| body | Basier Circle | 1rem | 400 | 1.5 | 0 | Paragraphs, descriptions, navigation |
| body-small | Basier Circle | 0.875rem | 400 | 1.5 | 0 | Captions, metadata, secondary content |
| label | Basier Square | 0.875rem | 600 | 1.25 | 0.01em | Buttons, badges, category labels |
| navigation | Basier Circle | 0.875rem | 400 | 1.25 | 0 | Header links, footer columns |
| code | Jet Brains Mono | 0.875rem | 400 | 1.5 | 0 | Code blocks, terminal output, syntax |

Rb Freigeist Neue Test, designed by Rene Bieder, carries the brand voice. Its tight tracking and high x-height allow words to scale to viewport-spanning sizes without losing cohesion. The bold weight is used exclusively; no lighter weights appear in the display role. Basier Circle and Square, designed by Atipo, provide the technical substrate. Circle handles body and navigation with open apertures for screen readability; Square's semi-bold weight adds density to labels and buttons without requiring a heavier face.

Jet Brains Mono, designed by Philipp Nurullin and Konstantin Bulenkov for JetBrains, serves all monospace needs. Its generous spacing and distinct character forms make code snippets immediately identifiable against prose.

Verify licensing for these families before production use. Basier Circle, Basier Square, and By Atipo are available from Atipo. Rb Freigeist Neue Test is available from Rene Bieder. Jet Brains Mono is available from JetBrains. The By Atipo-9504448690793184050 source is also present in the system's font assets.

## Layout

The layout system favors full-bleed sections with asymmetric internal composition. Homepage heroes abandon centered alignment for a scattered, magazine-like arrangement where display words float at varying horizontal positions, interrupted by rectangular media objects.

The grid is fundamentally two-column for content sections, with a narrow sidebar or metadata column and a wider primary content area. The pricing page uses this structure explicitly: charts occupy the left two-thirds, pricing tables and descriptions the right third. Gutters are tight—16px at standard density—keeping related information visually connected.

Section spacing is generous. Major sections separate with 6rem of vertical padding, creating breathing room that prevents the dark canvas from feeling claustrophobic. Within sections, content stacks at 1.5rem intervals for prose and 0.5rem for tightly coupled label-value pairs.

The footer expands to a four-column link grid on wide viewports, collapsing to stacked groups on narrower screens. The Replicate wordmark anchors the left edge, with category columns (Product, Community, Company) distributing across the remaining width. A thin horizontal rule with a vibrant gradient separates the footer from page content.

Navigation is minimal and persistent. The header carries the Replicate mark, primary links, and a search or account trigger. No background blur or shadow elevates the header; it sits directly on the canvas, trusting the dark value to separate it from content.

## Visual language

The visual language treats technical output as content, not decoration. Code snippets, generated images, and model predictions appear inline with typography, at the same compositional weight as headings and body text. This reflects the platform's purpose: Replicate runs models, and the interface should feel like it contains living results.

Imagery style varies by context. Product screenshots and model outputs appear as rectangular crops with no border radius, maintaining the sharp, engineered aesthetic. The homepage hero intersperses these with terminal-style code blocks showing actual API interactions. Data visualizations use thin stroke weights and minimal fills, letting warm accent tones carry visual interest against the dark ground.

Iconography is simple and geometric. The Playground page uses line-art icons for feature blocks—cubes for model comparison, overlapping frames for rapid prototyping, a circular arrow for iteration. These sit above label text with generous vertical spacing, creating identifiable feature anchors without decorative weight.

The gradient rules that appear at section boundaries and above the footer use horizontal bands of magenta, orange, and yellow. These are the only places where multiple colors blend; elsewhere, color is applied flat and unmodulated. The gradients serve as visual punctuation, marking transitions between the platform's technical and expressive modes.

Motion and interaction are implied rather than explicit in static views. The dark canvas and high-contrast type suggest a system that responds immediately, without transitional fluff. Buttons invert or shift border color on interaction; links underline or shift to lighter tones. The overall impression is of a tool that prioritizes speed over spectacle.

## Components

### Primary button

- **Anatomy**: Text label only, no icon in default state
- **Surface**: Solid near-white (#EEEEEE) fill with black text
- **Typography**: label token, Basier Square semi-bold at 0.875rem
- **Shape**: Zero border radius, sharp rectangular corners
- **Spacing**: 0.625rem vertical padding, 0.75rem horizontal padding
- **Composition**: Typically left-aligned in content flow, or right-aligned in modal contexts
- **Variants**: The "Get Started" and "Get started" instances show consistent treatment across pages

### Secondary button

- **Anatomy**: Text label with optional leading icon
- **Surface**: Transparent fill with near-white text and subtle border
- **Typography**: label token
- **Shape**: Zero border radius
- **Border**: 1px solid #EEEEEE
- **Spacing**: 0.375rem vertical padding, 0.625rem horizontal padding
- **Composition**: Used for destructive or alternative actions, often grouped with primary buttons

### Badge

- **Anatomy**: Text label with optional parenthetical content
- **Surface**: Transparent fill with text and border in near-white or image-derived accent tone
- **Typography**: label token
- **Shape**: Full pill radius (9999px)
- **Border**: 1px solid, matching text color
- **Spacing**: 0.25rem vertical padding, 0.75rem horizontal padding
- **Composition**: Inline with headings or adjacent to navigation items
- **Variants**: "Beta" badge on Playground page appears with mint green tone; "beta" in footer navigation appears in near-white

### Feature block

- **Anatomy**: Icon above, label below, optional description
- **Surface**: Transparent, sitting directly on canvas
- **Typography**: Icon is SVG or simple graphic; label uses body token; description uses body-small
- **Spacing**: Icon and label separated by 1rem; multiple blocks arranged horizontally with 2rem gaps
- **Composition**: Three-column layout on Playground page, centered within section

### Data card

- **Anatomy**: Chart or visualization above, heading below, description beneath
- **Surface**: Transparent or near-black (#111111) fill
- **Typography**: Heading uses section-display; description uses body; metrics use label or code
- **Border**: 1px solid #EEEEEE on some instances, creating contained panels
- **Spacing**: Internal padding of 1rem to 1.5rem
- **Composition**: Two-column grid on pricing page, with charts spanning full column width

### Footer

- **Anatomy**: Wordmark, four link columns, status bar, utility icons
- **Surface**: Pure black canvas, continuous with page
- **Typography**: Category headings use label token; links use navigation token
- **Border**: 1px solid #EEEEEE top rule; gradient rule above at page boundary
- **Spacing**: Generous internal padding, 2rem to 3rem vertical
- **Composition**: Wordmark at left edge; columns distributed across remaining width; status and utilities at bottom

### Code block

- **Anatomy**: Monospace text with syntax highlighting, optional prompt indicator
- **Surface**: Near-black (#111111) fill, sometimes with subtle border
- **Typography**: code token, Jet Brains Mono
- **Spacing**: Internal padding of 1rem
- **Composition**: Inline with hero content or contained in dedicated sections

## Responsive behavior

The design maintains its dark foundation and type scale across viewport sizes, with structural adaptations for readability. The homepage hero's massive display type likely scales down on narrower screens, though the scattered composition may persist as a stacked arrangement. The two-column pricing grid should collapse to single column on mobile, with charts stacking above their descriptions.

Navigation collapses to a hamburger or condensed menu on small screens. The four-column footer reorganizes to stacked sections with category headers as expand/collapse triggers.

Touch targets should maintain the 0.625rem to 0.75rem padding minimum, with button heights never dropping below 44px. The zero-radius button aesthetic works at all sizes but may benefit from slightly increased horizontal padding on touch devices to prevent accidental activation.

Data visualizations should reflow rather than scale down indefinitely. Charts with time-series data may switch to a simplified view or horizontal scroll container on narrow screens, preserving legibility of axis labels and values.

## Practical implementation guidance

### Preserve
- The absolute black canvas as the default ground; do not introduce gray page backgrounds
- Sharp corners on buttons, cards, and media containers; the zero-radius aesthetic is distinctive
- The restrained accent strategy; derive functional colors from specific component imagery rather than inventing a broad palette
- Inline code and model outputs as compositional peers to typography, not decorative aside elements
- The tight internal spacing of data cards and pricing tables; this density signals technical depth

### Avoid
- Border radius on primary interactive elements; it contradicts the engineered precision
- Pure white (#FFFFFF) text; the slightly muted #EEEEEE reduces fatigue
- Centered text blocks for technical content; the asymmetric, left-aligned composition is part of the voice
- Decorative shadows or elevation effects; depth comes from color value, not blur and offset
- Asserting image-palette colors as global tokens; sample them in context instead

### Recommended build order
1. Establish the dark canvas and near-white type system with Basier Circle body and Rb Freigeist Neue Test display
2. Implement the zero-radius button and badge components with exact padding values
3. Build the two-column content grid for pricing and feature sections
4. Add the data visualization layer with warm accent colors drawn from source imagery and thin stroke weights
5. Implement the footer with four-column link grid and gradient top rule
6. Layer in the homepage hero with scattered display type and inline media objects

### Accessibility
- Maintain the 4.5:1 minimum contrast ratio; the #EEEEEE on #000000 pairing exceeds 15:1
- Ensure any accent colors used for text meet WCAG contrast requirements; the near-white ink is the safe default for all reading text
- Provide focus indicators that respect the sharp-corner aesthetic; consider outline-offset with 2px solid #EEEEEE
- Code blocks should include syntax highlighting with sufficient contrast for all token colors; test the full palette against #111111
- The scattered homepage composition should maintain logical reading order in the DOM, even when visual position varies

## Scope note

This guide covers the Replicate marketing site and product surface visible in the homepage, Playground beta, and pricing sections. Model detail pages, dashboard interfaces, and authenticated account flows are not represented. Motion behavior, mobile-specific layouts, and dark/light mode switching are not documented. The By Atipo-9504448690793184050 font source is identified in system assets but its specific visual role is not distinguished from other Basier variants in the extracted data. Measurements reflect the extracted interface values where available; spacing and sizing should be validated against live implementation.

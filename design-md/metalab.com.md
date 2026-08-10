# How metalab.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/metalab.com-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with oversized display typography on black canvas, showing the Robinhood case study introduction with a floating navigation pill containing the Metalab logo and menu](https://pin.fontofweb.com/9784?format=jpg)](https://design.withfudge.com/share/pin-9784)

[Hero section with oversized display typography on black canvas, showing the Robinhood case study introduction with a floating navigation pill containing the Metalab logo and menu](https://design.withfudge.com/share/pin-9784)

[![Body section with a bright lime-green accent bar at top, followed by white paragraph text on black background describing the design process and brand translation work.](https://pin.fontofweb.com/9785?format=jpg)](https://design.withfudge.com/share/pin-9785)

[Body section with a bright lime-green accent bar at top, followed by white paragraph text on black background describing the design process and brand translation work.](https://design.withfudge.com/share/pin-9785)

## Overview

Metalab's case study presentation for Robinhood employs a radically reduced visual vocabulary: a pure black canvas, white typography at dramatic scale, and restrained structural elements that frame the content without competing with it. The system prioritizes readability and editorial confidence over decorative complexity. Every element serves the narrative of the work—large display type establishes the stakes of the project, while restrained body copy explains the process with clarity. The floating navigation pill and section labels provide wayfinding without disrupting the content hierarchy. This is a design language built for showcasing product design work, where the interface itself recedes and the case study content commands full attention. The overall impression is one of sophisticated restraint: confident in its minimalism, precise in its spacing, and intentional in its limited palette.

## Colors

The palette is strictly binary, consisting of only two functional colors with no gradients, shadows, or borders present in the visible interface.

| token | value | use |
|---|---|---|
| canvas | #000000 | Primary background for all sections; establishes the dark editorial environment |
| ink | #FFFFFF | All text, icons, and interactive elements; maximum contrast against black |

The color logic is absolute: black grounds everything and white carries all information. There are no muted grays, no secondary text colors, no border tones, no accent colors in the interface itself. This forces every typographic decision to succeed on weight, size, and spacing alone. The lime-green visible in image content and photographic elements belongs to the Robinhood brand materials being showcased, not to Metalab's presentation layer. When implementing, maintain this strict separation: use canvas and ink for all UI and readable surfaces. Any color beyond these two values should derive from the specific project content being presented, not from the system framework.

## Typography

The system relies on a single type family across all roles, differentiated entirely by size and tracking.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| body | Basis Grotesque Pro | 1rem | 400 | 1.4 | -0.01em | Paragraphs, descriptions, process narrative |
| section-label | Basis Grotesque Pro | 1.25rem | 400 | 1.3 | -0.01em | Small headings, introductory labels, metadata |
| display-large | Basis Grotesque Pro | 3.5rem | 400 | 1.21 | -0.02em | Hero statements, opening paragraphs, major claims |
| display-medium | Basis Grotesque Pro | 2.5rem | 400 | 1.25 | -0.015em | Secondary display, mid-page statements |
| navigation | Basis Grotesque Pro | 1rem | 400 | 1.2 | normal | Menu labels, navigation controls |
| legal-copy | Basis Grotesque Pro | 0.75rem | 400 | 1.4 | normal | Footnotes, timestamps, fine print |

Basis Grotesque Pro, designed by Colophon Foundry, provides the neutral, authoritative tone that lets content speak without stylistic interference. The typeface is used exclusively at Regular weight (400); no bold, medium, or semibold variants appear in the visible system. Scale jumps are dramatic: body at 16px, section labels at 20px, and display-large at 56px—nearly triple the body size. This creates clear hierarchical separation without needing weight variation. Tracking tightens slightly as sizes increase, keeping large type visually dense and connected. Line heights are tight for display use (1.21) and more generous for body reading (1.4). Verify licensing for Basis Grotesque Pro through Colophon Foundry before production use.

## Layout

The layout follows a single-column editorial model with generous horizontal margins and clear vertical rhythm.

Content sits within a fluid container bounded by 24px gutters on each side—equivalent to 1.5rem at the root reference. This creates breathing room without centering content in a rigid max-width box; instead, text blocks appear to float within the black canvas, their edges defined by consistent inset rather than by visible borders or background panels.

Vertical spacing follows a 4px base grid. Paragraphs stack with 16px gaps (1rem), while major section breaks use 28px (1.75rem) to create meaningful separation without excessive whitespace. The hero display type sits directly on the canvas with no top padding, establishing immediate immersion. Subsequent sections begin with image content or direct text continuation, maintaining the uninterrupted flow.

The navigation floats as an independent layer: a rounded pill centered near the top of the viewport, containing the Metalab wordmark, menu trigger, and utility controls. This pill uses a treatment that separates it from the scrolling content without a hard shadow or border. Positioning is fixed or sticky, ensuring persistent access without consuming vertical real estate.

No sidebar, no multi-column grid, no card containers. The layout's power comes from this refusal to compartmentalize—content flows as continuous narrative, punctuated only by scale change and the occasional image break.

## Visual language

The visual language is defined by absence: no borders, no shadows, no gradients, no background textures. The black canvas reads as infinite depth, with white typography emerging from it like light. This creates a cinematic quality appropriate for presenting transformative product work.

The strict two-color palette eliminates visual noise. Every element must justify its presence through form and position rather than chromatic variation. Image content appears full-bleed or with minimal framing, allowing product screenshots and interface details to exist at their natural scale. There are no rounded corners on content images, no drop shadows creating false depth, no borders separating image from canvas. The design trusts the work to speak for itself.

The navigation pill introduces the single rounded element in the system. Its full-pill shape (9999px border radius) contrasts with the otherwise rectilinear environment, marking it as an interface control rather than content. This shape language should not extend to content containers or images.

The lime-green visible in photographic content belongs to the Robinhood brand being presented, not to Metalab's system. This separation between presentation framework and showcased work is deliberate: the system remains neutral so that project-specific colors can emerge naturally within content areas.

## Components

### Navigation pill

- **Anatomy**: Horizontal container with left-aligned "Menu" label, center-aligned "Metalab" wordmark, and right-aligned utility cluster including time display and icon buttons.
- **Surface**: Dark fill that sits above the black canvas; no visible border.
- **Typography**: Navigation token for all text elements; white ink.
- **Shape**: Full pill with 9999px radius; height approximately 48-56px.
- **Spacing**: Internal horizontal padding of roughly 24px; elements distributed with space-between logic.
- **Composition**: Fixed or sticky positioning, centered horizontally, inset from viewport edges by standard gutter.
- **Variants**: Collapsed state showing minimal controls; expanded or active states not visible in supplied images.

### Display paragraph

- **Anatomy**: Single block of text using display-large token; no surrounding container or background.
- **Surface**: Transparent; text renders directly on canvas.
- **Typography**: Display-large token; tight leading creates dense, impactful blocks.
- **Shape**: None; text follows natural line breaks.
- **Spacing**: Bottom margin of 28px (1.75rem) when followed by other content; no top margin in hero position.
- **Composition**: Full width within gutter constraints; left-aligned.
- **Variants**: May appear with or without preceding section label; display-medium token may substitute for secondary emphasis.

### Body paragraph

- **Anatomy**: Standard text block with no special markers.
- **Surface**: Transparent.
- **Typography**: Body token; negative tracking creates slightly compact reading experience.
- **Shape**: None.
- **Spacing**: 16px (1rem) bottom margin; 16px top margin when following another paragraph.
- **Composition**: Full width within gutter constraints.
- **Variants**: May appear in sequences or follow image content.

### Accent bar

- **Anatomy**: Solid horizontal band, full viewport width.
- **Surface**: Derived from showcased project content, not from system tokens.
- **Typography**: None; purely decorative/structural.
- **Shape**: Rectangular; no radius.
- **Spacing**: Acts as section divider; height varies by content.
- **Composition**: Full-bleed edge to edge; interrupts black canvas.
- **Variants**: May vary in height or appear with adjacent image content.

## Responsive behavior

The single-column layout adapts primarily through typographic scaling. At narrower viewports, the display-large token should reduce to maintain readable line lengths—consider a 2.5rem or 2rem floor to preserve impact while preventing overflow. The navigation pill may need to collapse further, potentially hiding the time display or compressing to icon-only controls.

Gutter spacing of 24px should hold constant across breakpoints; this narrow margin is already minimal and reduction would compromise readability. Body text at 16px should not scale down; if anything, slight increases to 18px may improve mobile legibility.

Image content should maintain aspect ratio, scaling down within the viewport rather than cropping. No multi-column behavior is suggested by the visible system. The editorial flow works precisely because it denies complexity; adding columns at wider breakpoints would contradict this intent.

## Practical implementation guidance

### Preserve
- The absolute black canvas; any deviation toward charcoal or near-black weakens the system's impact.
- Single-weight typography; resist adding bold for emphasis—use size change or spacing instead.
- The dramatic scale jump between body and display; this is the primary hierarchy mechanism.
- The floating navigation pill as persistent, non-intrusive wayfinding.
- Strict two-color palette for all UI elements.

### Avoid
- Adding gray tones for secondary text; the system succeeds through binary contrast.
- Rounding corners on content containers or images; reserve radius exclusively for the navigation pill.
- Borders, shadows, or background panels that would create false depth.
- Multiple type families or weights; the restraint of Basis Grotesque Pro Regular is intentional.
- Introducing system accent colors that compete with showcased project content.

### Recommended build order
1. Establish the black canvas and white text defaults.
2. Implement the type scale with exact sizes and tracking values.
3. Add the 24px gutter constraint and vertical spacing rhythm.
4. Build the navigation pill with pill shape and centered composition.
5. Create display and body paragraph components with proper margin stacking.
6. Refine responsive behavior through display type scaling alone.

### Accessibility
- The pure black and white pairing provides maximum color contrast (21:1), exceeding all requirements.
- Tight line heights on display type may require increased spacing for users with cognitive or visual needs; consider a user preference for looser leading.
- The navigation pill's treatment should maintain sufficient contrast against both black canvas and any content that may scroll beneath it.
- Focus indicators will need explicit styling since default browser outlines may be invisible against black; consider a white outline offset.

## Scope note

This guide covers the Robinhood case study page on metalab.com, specifically the hero introduction and body narrative sections. The navigation behavior, footer, additional case study pages, and any interactive or motion elements are not represented in the supplied images. Measurements derive directly from retained interface values.

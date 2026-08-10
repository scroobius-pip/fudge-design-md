# How friend.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/friend.com-design)

Last updated: 2026-08-10

## Captured pages

[![FAQ section with accordion list beneath a large video hero showing the word 'friend' overlaid on lush green foliage](https://pin.fontofweb.com/5604?format=jpg)](https://design.withfudge.com/share/pin-5604)

[FAQ section with accordion list beneath a large video hero showing the word 'friend' overlaid on lush green foliage](https://design.withfudge.com/share/pin-5604)

[![Product hero with serif 'friend' wordmark, iPhone mockup showing app interface, and black pill-shaped order button on white background](https://pin.fontofweb.com/5603?format=jpg)](https://design.withfudge.com/share/pin-5603)

[Product hero with serif 'friend' wordmark, iPhone mockup showing app interface, and black pill-shaped order button on white background](https://design.withfudge.com/share/pin-5603)

## Overview

Friend presents a restrained, editorial visual system built around a single commanding serif wordmark and an otherwise austere black-and-white palette. The design language prioritizes clarity and confidence over decoration: large typography dominates the viewport, photography carries emotional weight, and interactive elements reduce to essential pill-shaped buttons and clean accordion lists. The system feels contemporary yet warm, balancing the organic curves of its display typeface against the precision of its geometric UI components. Every surface serves the product narrative—whether showing a device floating against pure white or immersing the viewer in dense green foliage through video. The overall impression is of a premium consumer hardware brand that trusts its audience to read simplicity as sophistication.

## Colors

The color system is intentionally minimal, relying on high contrast between black and white with subtle supporting tones for hierarchy and warmth.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, wordmark, primary button fill, active UI elements |
| canvas | #FFFFFF | Page background, button text on dark surfaces, card backgrounds |
| muted-ink | #444444 | Secondary text, FAQ item borders, subtle dividers |
| surface-elevated | #F5F5F5 | Device chrome accents, subtle background variations, inactive states |
| accent-green | #4A7C59 | App interface text, nature photography tonal reference, soft gradients |

The interface operates in a strict light mode: black text on white grounds with no dark mode visible. The accent green appears primarily within the product's app interface as rendered on device mockups, suggesting a secondary palette that lives inside the software experience rather than on the marketing surface. Photography introduces rich natural greens that contrast against the neutral UI, creating moments of warmth without complicating the token set. Shadows and depth are achieved through the physical device renders and photographic layering rather than through colored shadows or gradients in the interface itself.

## Typography

The typographic system centers on a single family with two weights, deployed at dramatic scale differences to create clear hierarchy.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Abc Favorit Unlicensed Trial | 4rem | 300 | 1 | -0.02em | Page wordmark, major section titles |
| section-display | Abc Favorit Unlicensed Trial | 3rem | 300 | 1.1 | -0.01em | FAQ heading, secondary page titles |
| body-large | Abc Favorit Unlicensed Trial | 1.25rem | 400 | 1.4 | 0em | Taglines, introductory paragraphs |
| body | Abc Favorit Unlicensed Trial | 1rem | 400 | 1.5 | 0em | FAQ questions, general reading text |
| label | Abc Favorit Unlicensed Trial | 0.875rem | 400 | 1.4 | 0.01em | Buttons, captions, metadata |
| navigation | Abc Favorit Unlicensed Trial | 0.875rem | 400 | 1 | 0.02em | Uppercase or spaced UI labels |

The wordmark "friend" uses the Light weight at display scale with tight negative tracking, allowing the distinctive letterforms—particularly the curved terminal of the 'f' and the generous bowl of the 'r'—to read as a graphic element rather than mere text. Body text employs the Regular weight for clarity at smaller sizes. The typeface carries humanist warmth that softens the otherwise stark monochrome palette.

Verify licensing for these families before production use. The Abc Favorit Unlicensed Trial fonts are designed by Dinamo Typefaces Gmb H.

## Layout

The page employs a centered, contained layout with generous vertical breathing room. Content maxes out at approximately 75rem, creating comfortable line lengths while preserving whitespace on larger viewports. Sections stack vertically with substantial separation—roughly 6rem between major content zones—allowing each narrative moment to register independently.

The hero area in the product presentation uses an asymmetrical two-column composition: the wordmark and tagline anchor the left side while the device mockup occupies the right, creating visual tension through the offset placement. The FAQ section shifts to a narrower centered column for the accordion list, with the section heading positioned to the left of the content rather than above it, suggesting a sidebar-like relationship that breaks the strict centering of other sections.

Vertical rhythm is maintained through consistent spacing multiples of 0.25rem. Component gaps within sections measure approximately 1.5rem, while internal padding for interactive elements like buttons uses tighter 0.75rem vertical and 1.5rem horizontal measures. The device mockup floats with no visible containing frame, relying on its own shadow and physical detail to separate from the white ground.

## Visual language

The visual language merges editorial restraint with product-forward clarity. Photography plays a central role: lush, sun-dappled greenery fills the video hero, suggesting companionship and organic growth that resonates with the product name. The device renders are clinical and precise—white or silver hardware against pure white, with only the screen content providing color.

Graphic elements reduce to essentials: thin horizontal rules separate FAQ items, plus signs indicate expandable content, and a simple upward arrow in a filled circle provides scroll-to-top functionality. No decorative patterns, gradients, or ornamental frames appear on the interface surface. The pill-shaped button with its arrow icon becomes the primary call-to-action gesture, repeated consistently across contexts.

The wordmark functions as both branding and graphic anchor, appearing at sizes that rival the photographic content for visual dominance. This typographic confidence allows the rest of the interface to remain whisper-quiet—small labels, thin rules, and generous empty space.

## Components

### Primary action button

- **Anatomy**: Text label with right-pointing arrow icon, rendered as a single interactive unit
- **Surface**: Filled black pill shape with white text and icon
- **Typography**: `{typography.label}` in white
- **Shape**: Full pill border radius (`{rounded.pill}`), creating a capsule silhouette
- **Spacing**: Compact horizontal padding approximately 1.5rem with 0.75rem vertical padding
- **Composition**: Icon sits immediately right of text with minimal gap, suggesting forward motion
- **Variants**: None visible; single black-filled treatment used for primary conversion action

### FAQ accordion

- **Anatomy**: Stacked list of question rows, each with left-aligned text and right-aligned plus indicator
- **Surface**: Transparent background with bottom border rule in `{colors.muted-ink}`
- **Typography**: `{typography.body}` for question text
- **Shape**: Full-width rows with no visible border radius
- **Spacing**: Generous vertical padding within each row, approximately 1rem, with rules separating items
- **Composition**: Section heading "FAQ" positioned left of the accordion column, creating an asymmetric two-column layout at desktop widths
- **Variants**: Collapsed state visible; plus sign indicates expandability

### Scroll-to-top button

- **Anatomy**: Circular container with upward arrow icon
- **Surface**: Filled black circle with white icon
- **Shape**: Perfect circle, approximately 2.5rem diameter
- **Positioning**: Appears to float at right edge of content area, aligned with section content

### Device mockup

- **Anatomy**: Physical hardware render showing product interface on screen
- **Surface**: Silver or white device body with subtle shadow grounding it against white background
- **Composition**: Centered or right-weighted placement, with companion hardware element (spherical object) positioned at lower left of device
- **Screen content**: Soft green gradient background with centered conversational text, suggesting AI companion interface

## Responsive behavior

The system appears optimized for desktop presentation based on available imagery. The asymmetric hero layout with floating device mockup would require careful adaptation for narrower viewports: the wordmark and tagline should stack above the device image, maintaining typographic scale while allowing the hardware render to remain legible. The FAQ sidebar-heading treatment should collapse to a standard top-aligned heading above the accordion list on mobile.

The pill button maintains its proportions across contexts, though touch targets should expand to minimum 44px height on true mobile interfaces. Video content in the hero should preserve aspect ratio while scaling to fill available width. Typography scale may require reduction: the 4rem wordmark likely drops to 2.5–3rem on tablet and 2rem on mobile to prevent overflow.

## Practical implementation guidance

### Preserve
- The stark black-and-white palette as the primary interface vocabulary; let photography and screen content provide warmth
- The generous wordmark scale relative to other content—it functions as a graphic element, not mere navigation
- The pill-shaped button as the singular, instantly recognizable call-to-action gesture
- Thin, precise border rules for separation rather than background color shifts
- The asymmetry of the hero composition; avoid centering everything

### Avoid
- Adding decorative gradients, shadows, or background textures to the interface surface
- Introducing additional font families or weights beyond the two specified
- Creating multiple button styles that compete with the black pill treatment
- Reducing the wordmark to a conventional logo size; it should remain dominant
- Using colored backgrounds for content sections; maintain white grounds throughout

### Recommended build order
1. Establish the typographic foundation with Abc Favorit at all specified scales
2. Implement the black-and-white color tokens and apply globally
3. Build the hero section with wordmark, tagline, and placeholder for device mockup
4. Create the pill button component with arrow icon
5. Construct the FAQ accordion with proper border treatment and expand/collapse behavior
6. Add the video hero section with nature photography and overlaid wordmark
7. Implement floating scroll-to-top button
8. Refine spacing and vertical rhythm across all sections

### Accessibility
- Ensure the black-on-white text meets WCAG AAA contrast ratios (the current combination exceeds requirements)
- Provide visible focus states for the pill button and accordion items; consider an outline offset or subtle background shift
- Make accordion headers true button elements with expanded/collapsed state communicated to screen readers
- The video hero should include pause controls and avoid autoplay with sound
- Arrow icons in buttons should have hidden text or aria-label equivalents for screen reader users

## Scope note

This guide covers the Friend product marketing page including the hero presentation, FAQ section, and video content area. Mobile breakpoints, navigation systems beyond the visible scroll-to-top control, form components, checkout flows, and footer content are not represented in the supplied materials. Motion behavior, hover states, and loading sequences are not documented. Measurements are practical adaptation targets.

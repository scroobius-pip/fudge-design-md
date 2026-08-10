# How hoopladonuts.ca is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/hoopladonuts.ca-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with abstract coral, sky-blue, and yellow blob shapes behind the split-letter HOOPLA DONUTS wordmark, navigation bar, and ORDER HERE pill button](https://pin.fontofweb.com/2752?format=jpg)](https://design.withfudge.com/share/pin-2752)

[Hero section with abstract coral, sky-blue, and yellow blob shapes behind the split-letter HOOPLA DONUTS wordmark, navigation bar, and ORDER HERE pill button](https://design.withfudge.com/share/pin-2752)

[![Full viewport hero with geometric letterforms, coral background waves, navy accent blobs, and centered update announcement with pill CTA](https://pin.fontofweb.com/2751?format=jpg)](https://design.withfudge.com/share/pin-2751)

[Full viewport hero with geometric letterforms, coral background waves, navy accent blobs, and centered update announcement with pill CTA](https://design.withfudge.com/share/pin-2751)

## Overview

Hoopla Donuts presents a maximalist, graphic-design-forward identity that treats the homepage as a poster. The visual system is built on three core ideas: oversized geometric letterforms that break words into modular shapes, a restricted but high-energy palette of coral, sky blue, and lemon yellow, and a single monospace typeface used at every scale. The result feels closer to contemporary illustration or packaging design than to conventional restaurant web design. There is no photography of donuts; the product is implied through color, shape, and playful confidence. The interface is minimal—just a navigation bar, a central wordmark, a short announcement, and one call-to-action—allowing the abstract background to dominate the viewport. Every element is centered and symmetrical, reinforcing the poster-like composition.

## Colors

The palette is deliberately small and high-contrast, drawn from the abstract blob illustration that fills the entire hero viewport. Coral serves as the dominant ground color, appearing in the largest background shapes. Sky blue and lemon yellow act as secondary accents that interlock with the coral in organic, amoeba-like forms. Midnight navy provides deep contrast for smaller accent blobs and for the primary button. Black and white handle all text and interface chrome.

| token | value | use |
|---|---|---|
| coral | #F05F5F | Dominant hero background, largest abstract shapes, brand warmth |
| sky | #9ECBE8 | Secondary blob accents, interlocking with coral and lemon |
| lemon | #FDE74C | Bright accent blobs, geometric letterform fills, energy |
| midnight | #1A1A3E | Deep accent shapes, primary button background, weight |
| ink | #000000 | Navigation text, interface defaults |
| canvas | #FFFFFF | Wordmark text, announcement text, button label, page ground behind nav |

The color relationship is additive and celebratory rather than hierarchical. No gradients or shadows appear; every shape is a flat, opaque block. The illustration palette and the interface palette are effectively the same set, which unifies brand and UI into one graphic surface. When extending this system, maintain the discipline of using these six colors only—introducing additional hues would dilute the poster-like impact.

## Typography

Space Mono, designed by Colophon Foundry and Benjamin Critton, is the sole type family. Its geometric construction and fixed-width rhythm reinforce the modular, constructed feel of the wordmark. The family is used in Regular and Bold weights only; the Bold weight carries display and label duties, while Regular handles longer reading text.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Space Mono | 4rem | 700 | 1 | 0.12em | Split-letter wordmark, all-caps, maximum impact |
| body-medium | Space Mono | 1.25rem | 400 | 1.4 | 0.02em | Announcement paragraph, short descriptive text |
| label | Space Mono | 0.875rem | 700 | 1 | 0.08em | Primary button text, small emphatic labels |
| navigation | Space Mono | 0.875rem | 700 | 1 | 0.06em | Top-bar links, all-caps |

The hero display treatment is distinctive: each letter of "HOOPLA DONUTS" is treated as an independent geometric module, with some letterforms split horizontally or filled with contrasting colors. This is not standard typesetting—it is a custom logotype execution that happens to use the same family. The extreme letter spacing (0.12em) prevents the split letters from feeling cramped and gives the wordmark an airy, monumental presence. Body text is set with a more natural spacing (0.02em) to preserve readability in sentences.

Verify licensing for Space Mono through Colophon Foundry before production use.

## Layout

The page is built as a single full-viewport hero with no visible scrolling content in the supplied images. The composition is strictly centered and symmetrical along the vertical axis.

The navigation bar sits at the very top, spanning the full width with a white background. It is a single horizontal row of six all-caps links, evenly distributed and centered. No logo appears in the navigation; the brand mark lives only in the hero illustration below.

The hero area fills the remaining viewport height. At its vertical center is the "HOOPLA DONUTS" wordmark, rendered as large split-letter forms. Below the wordmark, a thin horizontal rule creates a subtle separation. Under that rule sits the announcement text, centered and constrained to a comfortable reading width. The primary call-to-action button sits below the text, centered. At the very bottom of the viewport, a small downward chevron hints at additional content below the fold.

The layout uses no visible grid lines, cards, or containers. The abstract shapes themselves create the spatial structure, with text positioned in the negative space between blobs. This requires careful responsive handling: at narrower widths, the wordmark must scale down proportionally and the blob composition may need to crop or reposition to maintain legibility.

## Visual language

The visual language is graphic, flat, and exuberant. Every shape is a solid color with no texture, gradient, or shadow. The organic blob forms suggest dough in motion—stretching, folding, interlocking—without ever depicting a literal donut. This abstraction is the system's strength: it communicates the product category through form and color association rather than through expected food photography.

The split-letter wordmark is the signature element. Letters are deconstructed into halves, quarters, or geometric segments, with some segments filled in contrasting colors from the palette. This treatment echoes the way a donut is a ring with a missing center, or how dough is divided and shaped. The construction is systematic enough to feel designed, yet playful enough to feel handmade.

The overall mood is optimistic and high-energy. The warm coral ground, cool sky accents, and sharp lemon highlights create a sense of freshness and fun. The midnight navy adds just enough gravity to prevent the palette from feeling childish. The absence of photography, realistic shadows, or dimensional effects keeps the identity firmly in the realm of contemporary graphic design.

## Components

### Navigation bar

- **Anatomy**: Full-width horizontal bar containing six text links.
- **Surface**: White background (`{colors.canvas}`), no border or shadow.
- **Typography**: `{typography.navigation}`, all-caps, centered as a group.
- **Spacing**: Links are evenly distributed with generous horizontal breathing room; vertical padding appears balanced with the text size.
- **Composition**: Centered cluster, not left- or right-aligned.

### Hero wordmark

- **Anatomy**: Two lines of text, "HOOPLA" and "DONUTS", with each letter rendered as a geometric module. Some letters are split horizontally; some contain color-block fills.
- **Surface**: Letters are primarily white (`{colors.canvas}`) against the colored blob background. Internal letter segments may use `{colors.lemon}`, `{colors.sky}`, or `{colors.midnight}`.
- **Typography**: `{typography.hero-display}`, all-caps, extreme letter spacing.
- **Composition**: Centered horizontally and vertically within the hero area. The scale is large enough that the wordmark dominates the viewport.

### Announcement text

- **Anatomy**: One to two sentences of centered text below a thin horizontal rule.
- **Surface**: White text (`{colors.canvas}`) directly on the coral blob background.
- **Typography**: `{typography.body-medium}`, with key words such as "NEW" set in Bold for emphasis.
- **Spacing**: Comfortable margin above and below the rule; text block is width-constrained for readability.

### Primary action button

- **Anatomy**: Pill-shaped button containing a short all-caps label.
- **Surface**: `{colors.midnight}` background, `{colors.canvas}` text.
- **Typography**: `{typography.label}`.
- **Shape**: Full pill (`{rounded.pill}`), no visible border.
- **Spacing**: Generous horizontal padding (`2.5rem` left and right), moderate vertical padding (`1rem` top and bottom).
- **Composition**: Centered below the announcement text.

### Scroll indicator

- **Anatomy**: Small downward-pointing chevron or arrow.
- **Surface**: White (`{colors.canvas}`), minimal stroke weight.
- **Composition**: Centered at the bottom edge of the hero viewport.

## Responsive behavior

The supplied images show only a desktop viewport. For narrower screens, the following adaptations are recommended:

- The wordmark should scale down proportionally, maintaining its split-letter construction. At very small widths, consider stacking "HOOPLA" and "DONUTS" vertically if horizontal scaling would make letters illegible.
- Navigation links may collapse into a menu icon or wrap to two rows, preserving the all-caps monospace styling.
- The abstract blob background should remain visible but may crop at the edges; avoid squashing the organic shapes.
- The announcement text should remain centered but increase its line height slightly at small sizes for readability.
- The primary button should maintain its pill shape and padding ratios, scaling text size down by one step if necessary.

## Practical implementation guidance

### Preserve
- The flat, no-shadow, no-gradient aesthetic. Every shape is an opaque color block.
- The single-type-family discipline. Space Mono at every scale creates cohesion.
- The centered, poster-like composition. Asymmetry would break the graphic impact.
- The split-letter wordmark as a custom construction, not as standard typesetting.
- The restricted six-color palette. Additional colors would weaken the identity.

### Avoid
- Adding realistic donut photography or food styling. The abstraction is intentional.
- Introducing serif or sans-serif fonts for "contrast." The monospace voice is the brand.
- Using drop shadows, glows, or dimensional effects. The system is strictly flat.
- Left-aligning major elements in the hero. Centering is structural to the design.
- Darkening the coral or muting the lemon. The palette needs its current saturation to feel energetic.

### Recommended build order
1. Set up the color tokens and apply the coral-sky-lemon-midnight blob background as a full-viewport illustration or SVG.
2. Implement Space Mono with the four defined type tokens.
3. Build the centered navigation bar with all-caps links.
4. Construct the split-letter wordmark, ensuring each letter module can accept independent color fills.
5. Add the horizontal rule, announcement text, and centered pill button.
6. Position the scroll indicator at the bottom edge.
7. Test responsive scaling, prioritizing wordmark legibility and blob composition integrity.

### Accessibility
- Ensure the white wordmark and announcement text meet contrast requirements against the coral and sky background areas. The midnight button provides strong contrast for its label.
- The split-letter wordmark may be difficult for screen readers; provide an `aria-label` with the full brand name.
- If the blob background is implemented as a decorative image, mark it appropriately so it does not interfere with content navigation.
- Keyboard focus indicators should be visible against the colorful background; consider a consistent focus ring color such as `{colors.lemon}` or `{colors.canvas}`.

## Scope note

This guide covers the homepage hero and navigation bar visible in the supplied images. Interior pages, menu displays, ordering flows, gift card interfaces, catering forms, location pages, and mobile layouts are not represented. Motion, hover states, loading behavior, and form components are outside the current scope. Measurements are practical adaptation targets based on visual interpretation of the desktop viewport.

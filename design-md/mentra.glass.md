# How mentra.glass is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/mentra.glass-design)

Last updated: 2026-08-10

## Captured pages

[![Product comparison table with Mentra Live and Meta Ray-Ban columns, green checkmarks, and pill-shaped pre-order button on dark background](https://pin.fontofweb.com/1029?format=jpg)](https://design.withfudge.com/share/pin-1029)

[Product comparison table with Mentra Live and Meta Ray-Ban columns, green checkmarks, and pill-shaped pre-order button on dark background](https://design.withfudge.com/share/pin-1029)

[![Developer SDK section with isometric cloud architecture diagram, green accent text, and outlined pill button on black canvas](https://pin.fontofweb.com/1028?format=jpg)](https://design.withfudge.com/share/pin-1028)

[Developer SDK section with isometric cloud architecture diagram, green accent text, and outlined pill button on black canvas](https://design.withfudge.com/share/pin-1028)

[![POV streaming feature section with phone mockup showing live road footage, platform icons, and green-bordered device frame](https://pin.fontofweb.com/1027?format=jpg)](https://design.withfudge.com/share/pin-1027)

[POV streaming feature section with phone mockup showing live road footage, platform icons, and green-bordered device frame](https://design.withfudge.com/share/pin-1027)

[![Business use cases panel with video player showing factory floor, icon-labeled cards, and green section heading](https://pin.fontofweb.com/1026?format=jpg)](https://design.withfudge.com/share/pin-1026)

[Business use cases panel with video player showing factory floor, icon-labeled cards, and green section heading](https://design.withfudge.com/share/pin-1026)

## Overview

Mentra Glass presents a hardware product—smart glasses for live streaming—through a dark, immersive digital experience. The design system prioritizes technical credibility and developer accessibility, using a near-black canvas as the dominant background to let product photography and green accent elements command attention. The visual language is restrained and precise: generous negative space, sharp geometric forms, and a limited palette that signals sophistication without ornament. Typography pairs a confident, tightly tracked display face for headlines with a lighter, more open body face for readability. The overall impression is of a tool built for creators and developers who value control, transparency, and modern aesthetics. Every section follows a consistent two-column or asymmetric layout pattern, with imagery on one side and declarative copy on the other, reinforcing the product's functional clarity.

## Colors

The color system is intentionally narrow, deriving its energy from a single accent hue against deep neutral grounds. This restraint amplifies the technical, no-nonsense positioning of the brand.

| token | value | use |
|---|---|---|
| canvas | #000000 | Primary page background; establishes immersive dark environment |
| surface | #0a0f0f | Slightly elevated panels and card backgrounds |
| surface-elevated | #111818 | Highlighted comparison columns and active feature cards |
| ink | #ffffff | Primary text, icons, and interactive elements |
| ink-muted | #a0a8a8 | Secondary descriptions, metadata, and disabled states |
| action | #34d399 | Primary accent: headlines, borders, checkmarks, live indicators |
| action-hover | #6ee7b7 | Lighter accent for hover states and emphasis |
| success | #34d399 | Positive indicators, feature availability |
| error | #f87171 | Negative indicators, missing features |
| border-subtle | #1f2a2a | Dividers, table rows, and card outlines |
| border-accent | #34d399 | Focus rings, active borders, and highlighted frames |

The palette operates in a dark-first mode with no light variant visible. The green accent (#34d399) functions as the sole chromatic element, appearing in headlines, interactive borders, status indicators, and the live badge. White text maintains high contrast against all backgrounds. The subtle warm shift in muted text prevents the cool green from feeling clinical. Product photography introduces natural color variation—road scenes, factory floors, device renders—which the neutral canvas absorbs without competition.

## Typography

Two font families establish the typographic hierarchy: Manrope for display and interface elements, Outfit for body copy and descriptions. Both are available as variable fonts, though the system uses fixed weights for consistency.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Manrope | 3rem | 700 | 1.1 | -0.02em | Page titles, major section headers |
| section-display | Manrope | 2.25rem | 700 | 1.15 | -0.01em | Feature headings, comparison titles |
| body | Outfit | 1rem | 300 | 1.6 | 0 | Paragraphs, descriptions, feature details |
| body-large | Outfit | 1.25rem | 300 | 1.5 | 0 | Lead paragraphs, introductory copy |
| label | Manrope | 0.875rem | 500 | 1.4 | 0.01em | Buttons, badges, navigation items |
| navigation | Manrope | 0.875rem | 500 | 1 | 0 | Top-level menu, footer links |

Manrope carries the brand voice: geometric, confident, with slightly rounded terminals that soften its technical precision. It appears at 700 for headlines and 500 for interface labels, never lighter. Outfit at 300 provides the airy, readable counterpoint for longer text, its thin strokes maintaining elegance against dark backgrounds. Headlines use tight negative tracking for density and impact; body text stays neutral for comfort. Verify licensing for these families before production use. Manrope is designed by Mikhail Sharanda; Outfit is designed by Rodrigo Fuenzalida and published by Frag Type.

## Layout

The layout system is built on a 4px relative unit (0.25rem), with major sections separated by 6rem of vertical space. Content is constrained to a maximum width of 75rem, centered with generous horizontal padding.

Sections follow a deliberate asymmetric rhythm. Feature presentations use a two-column split: imagery occupies roughly 55% of the width, text content the remaining 45%, with a 1.5rem gap between. This ratio shifts slightly depending on content density but maintains the visual weight on the product. The comparison table inverts this logic, centering the product columns while pushing descriptive labels to the left margin.

Vertical stacking within text blocks follows a consistent pattern: section heading, 1.5rem gap, lead paragraph or description, 1rem gap, supporting details or icon row, 1.5rem gap, call-to-action. This predictable cadence lets users scan quickly while preserving narrative flow.

Cards and panels use 1rem border radius for contained content areas; interactive elements like buttons and badges use full pill rounding (9999px). The live indicator badge on device mockups uses the same pill shape with a small dot prefix, creating a recognizable status language.

Grid behavior is implied by the compositions: single-column for narrow viewports, expanding to the asymmetric two-column for desktop. The comparison table would likely scroll horizontally on small screens or stack its columns vertically.

## Visual language

The visual language communicates technical openness through restraint and precision. Every element serves a functional purpose; decoration is minimal.

Imagery strategy centers on real-world application: POV footage from glasses, factory environments, architectural diagrams. Photos receive no heavy treatment—no gradients, no overlays—trusting the dark canvas to provide contrast. Device mockups appear with thin green borders (#34d399) that echo the accent system and suggest active, connected status.

Iconography is line-based and monochrome, matching the weight of body text. Platform icons (YouTube, Twitch, X, TikTok, Instagram, code) appear as a horizontal row at uniform size, spaced evenly, suggesting interoperability without visual hierarchy among partners.

The isometric diagram in the developer section introduces a distinctive illustrative style: wireframe geometry, green connection lines, and labeled nodes. This technical illustration language reinforces the SDK's architectural depth and would extend naturally to documentation or tutorial content.

Motion is implied by the live streaming context but not visible in stills. The system would benefit from subtle transitions: accent color shifts on hover, gentle opacity fades for content reveals, and perhaps a pulsing glow for the live indicator.

## Components

### Primary action button

Anatomy: Text label centered within a fully rounded pill container.

Surface: Transparent background with 1px solid border in action green (#34d399). Text in white (#ffffff).

Typography: label token (Manrope, 0.875rem, weight 500).

Shape: Border radius 9999px. Padding 0.75rem vertical, 2rem horizontal.

Spacing: Typically appears 1.5rem below body copy, left-aligned with text block or centered within card.

Variants: The pre-order variant in the comparison column uses identical styling. A filled variant may exist for higher emphasis, though not visible in supplied images.

### Feature card

Anatomy: Icon or illustration top, heading, descriptive paragraph, optional action button.

Surface: Background in surface-elevated (#111818) for highlighted states, or transparent for simple text groupings.

Typography: Heading uses section-display; body uses body token.

Shape: 1rem border radius when contained. Padding 2rem for elevated variants.

Spacing: Stacked vertically with 1.5rem gaps between cards in a list.

Composition: In the business section, three cards stack vertically on the left while a large video player occupies the right two-thirds of the section.

### Comparison table

Anatomy: Row labels in left column; product columns with centered content. Product image, name, price, and feature availability per row.

Surface: Active product column (Mentra Live) uses surface-elevated background with rounded panel shape. Competitor column uses transparent background. Horizontal dividers in border-subtle.

Typography: Product names in section-display; prices and specs in body; feature indicators as icons.

Shape: Panel radius 1rem for highlighted column.

Spacing: Generous internal padding (2rem) within product column. Row height approximately 3.5rem.

States: Green checkmark for available features; red X for unavailable. These icons are small, centered, and use the success and error tokens respectively.

### Device mockup frame

Anatomy: Rounded rectangle containing product screenshot or footage, with optional status badge.

Surface: Content fills frame. Border in action green (#34d399) at 1-2px weight.

Typography: Live badge uses label token with dot prefix.

Shape: Panel radius approximately 1.5rem for the phone frame. Badge is pill-shaped.

Composition: Positioned left or right of accompanying text block, maintaining the asymmetric section rhythm.

### Video player

Anatomy: Large media container with native controls visible at bottom.

Surface: Background inherits canvas black. Controls bar in semi-transparent dark.

Typography: Time display in small monospace or system font.

Shape: Panel radius 1rem matching other media containers.

Composition: Occupies majority width in its section, with feature cards stacked alongside.

## Responsive behavior

The asymmetric two-column layout should stack vertically on viewports below approximately 64rem, with imagery preceding text to maintain visual interest. The comparison table requires horizontal scroll or column stacking below 48rem to preserve readability of row labels. Platform icon rows should wrap naturally rather than compressing. Typography scales down by one step on small viewports: hero-display becomes section-display, section-display becomes 1.75rem. Body text remains at 1rem minimum for accessibility. Touch targets for buttons and cards should maintain 44px minimum height. The live badge and status indicators must remain legible at reduced scale.

## Practical implementation guidance

### Preserve
- The near-black canvas as the dominant background; it is the system's defining atmosphere
- The single green accent for all interactive and highlighted states; do not introduce additional accent colors
- The sharp contrast between heavy Manrope headlines and light Outfit body text
- Full pill rounding for all buttons and badges; partial rounding for cards and panels
- The asymmetric image-text section rhythm that gives product imagery visual priority

### Avoid
- Light backgrounds or inverted color schemes; they would break the immersive technical mood
- Multiple accent colors competing with the green action token
- Heavy shadows or dimensional effects; the flat, precise aesthetic depends on clean surfaces
- Decorative gradients behind text; the palette is intentionally flat
- Small body text below 1rem; thin weights at small sizes compromise readability on dark backgrounds

### Recommended build order
1. Establish the canvas black background and apply the typography scale with correct font loading
2. Implement the section spacing system and max-width container
3. Build the primary action button with transparent fill and green border
4. Create the asymmetric two-column layout pattern with image and text blocks
5. Add the feature card and comparison table components
6. Integrate the device mockup frame with green border treatment
7. Apply platform icon row and live badge patterns
8. Test responsive stacking and touch target sizes

### Accessibility
- Maintain 4.5:1 minimum contrast for all body text; the white-on-black pairing exceeds this
- Ensure the green accent (#34d399) on black meets 3:1 for large text and UI components; it does for large headlines but verify for smaller labels
- Provide visible focus indicators using border-accent or action-hover states
- Include alt text for all product imagery and diagram content
- Ensure video player controls are keyboard accessible and include captions where applicable
- Do not rely solely on color for feature availability; the checkmark and X icons provide necessary shape differentiation

## Scope note

This guide covers the landing page surface for Mentra Glass smart glasses, including feature sections, product comparison, developer SDK promotion, and business use cases. Navigation, footer, checkout flows, mobile menu behavior, animation specifications, and dark-mode variants are not represented in the supplied material. Measurements are practical adaptation targets derived from visible compositions.

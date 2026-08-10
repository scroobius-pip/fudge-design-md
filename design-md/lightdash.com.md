# How lightdash.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/lightdash.com-design)

Last updated: 2026-08-10

## Captured pages

[![Social-proof section with pixel-art poop emoji, testimonial cards on dotted grid background, and Britti Sans headings in dark gray and muted gray tones.](https://pin.fontofweb.com/4118?format=jpg)](https://design.withfudge.com/share/pin-4118)

[Social-proof section with pixel-art poop emoji, testimonial cards on dotted grid background, and Britti Sans headings in dark gray and muted gray tones.](https://design.withfudge.com/share/pin-4118)

[![Dark navy footer with Lightdash logo, G2 badge grid, newsletter email capture with white Subscribe button, and three-column link groups in muted text.](https://pin.fontofweb.com/4117?format=jpg)](https://design.withfudge.com/share/pin-4117)

[Dark navy footer with Lightdash logo, G2 badge grid, newsletter email capture with white Subscribe button, and three-column link groups in muted text.](https://design.withfudge.com/share/pin-4117)

[![Dark CTA banner with gradient purple pixel-art decoration, large Britti Sans heading in white-to-gray gradient, and two buttons with purple fill and dark fill variants.](https://pin.fontofweb.com/4116?format=jpg)](https://design.withfudge.com/share/pin-4116)

[Dark CTA banner with gradient purple pixel-art decoration, large Britti Sans heading in white-to-gray gradient, and two buttons with purple fill and dark fill variants.](https://design.withfudge.com/share/pin-4116)

[![Happiness Curve section with pixel-art smiley, stepped line chart with purple gradient fill, Micro 5 pixel font labels, and purple action button.](https://pin.fontofweb.com/4115?format=jpg)](https://design.withfudge.com/share/pin-4115)

[Happiness Curve section with pixel-art smiley, stepped line chart with purple gradient fill, Micro 5 pixel font labels, and purple action button.](https://design.withfudge.com/share/pin-4115)

## Overview

Lightdash presents a distinctive visual identity that merges contemporary SaaS clarity with nostalgic pixel-art personality. The system operates across two dominant modes: a clean, light canvas for explanatory and social-proof content, and a deep, immersive dark mode for calls-to-action and footer anchoring. Britti Sans provides the brand voice through bold, tightly-tracked headlines that carry slight geometric warmth, while Inter handles functional body text with neutral readability. A pixel-art illustration language—rendered in purple gradients and flat color blocks—appears throughout, from emoji-scale accents to decorative background patterns. The overall impression is technically credible yet approachable, signaling that data tools need not feel corporate or austere. The design rewards attention at multiple scales: large headlines for scanning, detailed card content for reading, and small pixel surprises for delight.

## Colors

The palette is intentionally restrained, relying on mode contrast and a single vibrant accent to create hierarchy and emotional rhythm.

| token | value | use |
|---|---|---|
| ink | `#1A1A2E` | Primary headings, body text on light backgrounds, logo mark |
| ink-secondary | `#2D2D44` | Secondary headings, dark-mode card surfaces, button fills |
| canvas | `#FFFFFF` | Primary page background, light mode base |
| surface | `#F5F5F7` | Subtle section alternation, card backgrounds on light mode |
| surface-dark | `#1A1A2E` | Dark section backgrounds, footer, CTA banner |
| muted | `#6B7280` | Descriptions, captions, footer links, secondary metadata |
| action | `#7C3AED` | Primary buttons, accent marks, pixel-art highlights, gradient endpoints |
| action-hover | `#6D28D9` | Button hover states, interactive accent deepening |
| border | `#E5E7EB` | Card outlines, dividers, input borders on light mode |
| border-dark | `#374151` | Subtle separators on dark backgrounds |

The light mode dominates content-heavy sections, using near-white canvas with soft gray surface for card elevation. Dark mode sections employ ink and ink-secondary as near-black grounds that make white typography and purple accents pop with high contrast. The purple action color appears in gradient form within pixel decorations—shifting from light lavender to deep violet—and as flat fills for primary buttons. Muted gray serves as the workhorse for secondary information, never competing with the accent. Border colors remain subtle optical hairlines rather than structural elements.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Britti Sans | 4rem | 600 | 1.1 | -0.02em | Homepage hero, major section headlines |
| section-display | Britti Sans | 3rem | 600 | 1.15 | -0.01em | Section titles, CTA headlines |
| body | Inter | 1rem | 400 | 1.6 | 0 | Paragraphs, descriptions, card copy |
| body-large | Inter | 1.25rem | 400 | 1.5 | 0 | Lead paragraphs, introductory text |
| label | Inter | 0.875rem | 500 | 1.4 | 0.01em | Button text, form labels, metadata |
| navigation | Inter | 0.875rem | 400 | 1.4 | 0 | Footer links, header navigation |
| pixel-label | Micro 5 | 1.5rem | 400 | 1.2 | 0.05em | Chart axis labels, decorative pixel text |

Britti Sans carries the brand personality with its geometric construction and confident weight. It appears exclusively in Semibold (600) for display use, creating a consistent voice across all large headings. Inter provides the functional layer at Regular (400) and Medium (500) weights, ensuring readability at small sizes and clarity in dense UI contexts. Micro 5, a pixel-art bitmap face, appears sparingly for thematic labels and decorative numerals—its fixed-width grid aesthetic reinforcing the retro-computing motif without compromising legibility at display sizes.

The type scale builds from a 4px relative unit. Display sizes at 48px and 64px (3rem and 4rem) anchor the hierarchy, with body at 16px (1rem) and labels at 14px (0.875rem). The pixel-label at 24px (1.5rem) sits between body and display, reserved for special thematic moments.

Britti Sans is provided by Nois Type Studio. Geist is designed by Basementstudio Andrés Briganti Mateo Zaragoza and provided by Basementstudio Vercel Andrés Briganti Guido Ferreyra Mateo Zaragoza. Inter is designed by Rasmus Andersson and provided by Rsms. Verify licensing for these families before production use.

## Layout

The page structure follows a centered, contained model with generous vertical breathing room. Sections alternate between full-bleed dark bands and contained light panels, creating a rhythmic scroll experience. Maximum content width appears to sit around 1200px, with internal grids using consistent gutters.

Horizontal spacing relies on card-based compositions for social proof and feature content. Cards float with subtle shadow and rounded corners, arranged in staggered or offset grids that suggest depth without complex layering. The testimonial section shows cards at varying horizontal positions, breaking strict alignment for visual interest.

Vertical rhythm is pronounced: section padding at 6rem (96px) separates major content blocks, while internal card padding at 1.5rem (24px) creates comfortable reading containers. The dotted grid background visible in light sections provides subtle texture without competing with content, suggesting an underlying technical precision.

The CTA banner uses asymmetric composition: large left-aligned headline with right-aligned pixel-art decoration, creating diagonal visual tension that draws the eye across the action buttons. The footer compresses information density with a three-column link grid, badge gallery, and newsletter capture in a single dark band.

## Visual language

Pixel art is the defining visual signature, appearing at multiple scales and functions. Small emoji-scale illustrations (poop, smiley face) serve as section anchors and emotional punctuation. Medium-scale pixel patterns form decorative backgrounds with purple gradient fills. Large-scale pixel compositions create abstract data-visualization aesthetics in the CTA banner.

The illustration style is strictly 8-bit: visible square pixels, limited color palettes per sprite, and hard edges without anti-aliasing. Colors within pixel art extend the system purple into lighter lavenders and deeper violets, creating internal gradients that feel digital and luminous.

Photography and realistic imagery are absent; the visual world is entirely constructed from typography, geometric UI, and pixel graphics. This flatness is intentional, keeping focus on information and interaction while the pixel details provide warmth and memorability.

Shadows remain subtle and diffused, suggesting elevation without heavy materiality. Cards lift slightly from their backgrounds with soft, broad shadows rather than sharp directional drops.

## Components

### Primary Button
- **Anatomy**: Text label centered within a filled rectangular container
- **Surface**: Solid action purple (`{colors.action}`) background
- **Typography**: `{typography.label}` in white
- **Shape**: `{rounded.button}` corners
- **Spacing**: Horizontal padding approximately 1.5rem, vertical padding approximately 0.75rem
- **Composition**: Often paired with a secondary button variant, left-aligned in groups
- **Variants**: Dark fill variant using `{colors.ink-secondary}` background for secondary actions on dark sections

### Secondary Button
- **Anatomy**: Text label within a filled darker container
- **Surface**: `{colors.ink-secondary}` background
- **Typography**: `{typography.label}` in white or light gray
- **Shape**: `{rounded.button}` corners
- **Spacing**: Same padding as primary, positioned adjacent with 1rem gap
- **Composition**: Used for "Try live demo" and similar secondary CTAs

### Testimonial Card
- **Anatomy**: Avatar image, name label, message text within a rounded container
- **Surface**: `{colors.canvas}` or `{colors.surface}` background with subtle shadow
- **Typography**: Name in `{typography.label}` weight, message in `{typography.body}` at smaller size
- **Shape**: `{rounded.card}` corners
- **Spacing**: `{spacing.card-padding}` internal padding
- **Composition**: Arranged in staggered horizontal rows, overlapping slightly or offset vertically

### Newsletter Capture
- **Anatomy**: Email input field with inline submit button
- **Surface**: Dark input background (`{colors.ink-secondary}`), white submit button
- **Typography**: Placeholder in `{typography.navigation}` muted, button in `{typography.label}`
- **Shape**: `{rounded.input}` on input, sharp or slightly rounded on submit
- **Spacing**: Tight integration with minimal gap between input and button
- **Composition**: Full-width within footer column, stacked below descriptive text

### Section Heading
- **Anatomy**: Large display text, occasionally with emoji or pixel accent above
- **Surface**: Transparent, inheriting section background
- **Typography**: `{typography.hero-display}` or `{typography.section-display}`
- **Composition**: Centered or left-aligned, with generous margin below before content

### Step/Chart Indicator
- **Anatomy**: Pixel-art icon, heading, description, with optional progress line
- **Surface**: Light background with subtle grid
- **Typography**: Step labels in `{typography.pixel-label}`, descriptions in `{typography.body}`
- **Composition**: Horizontal sequence with connecting gradient line suggesting progression

## Responsive behavior

The design appears optimized for desktop viewing with substantial horizontal space for card grids and side-by-side compositions. At narrower viewports, the following adaptations should be considered:

- Card grids should collapse from multi-column staggered layouts to single-column stacks, maintaining card width and internal spacing
- The CTA banner's asymmetric pixel decoration should scale down or reposition to avoid overwhelming the headline at small sizes
- Footer link columns should stack vertically, with newsletter capture expanding to full width
- Display typography should scale down proportionally; hero-display may reduce to section-display size on mobile
- Pixel-art elements should remain crisp; avoid blurring or excessive scaling that destroys the 8-bit aesthetic

Touch targets for buttons should maintain at least 44px height, with adequate spacing between adjacent actions.

## Practical implementation guidance

### Preserve
- The strict 8-bit pixel aesthetic: visible square pixels, hard edges, limited per-sprite palettes
- The two-mode rhythm: light sections for content, dark sections for CTAs and footer
- Britti Sans exclusively for display headlines at Semibold weight
- The purple-to-lavender gradient language within pixel decorations
- Generous section spacing that lets content breathe

### Avoid
- Anti-aliased or smoothed pixel art that destroys the retro character
- Introducing photography or realistic 3D renders that clash with the flat, constructed world
- Using Micro 5 for body text or long paragraphs—reserve for labels and decorative moments
- Heavy shadows or material design elevation that contradicts the flat aesthetic
- Saturated colors outside the purple accent family

### Recommended Build Order
1. Establish the type scale with Britti Sans and Inter, verifying font loading and weights
2. Implement the two background modes (canvas/surface and surface-dark) with correct text colors
3. Build the button system with primary and dark variants
4. Create the card component with correct padding, radius, and shadow
5. Integrate pixel-art assets with proper scaling (nearest-neighbor) and gradient coloring
6. Compose sections beginning with hero, social proof, CTA banner, and footer

### Accessibility
- Ensure the purple action color meets contrast requirements against both white and dark backgrounds; the vivid `#7C3AED` may need adjustment for small text
- Provide text alternatives for all pixel-art illustrations that convey meaning
- Maintain focus indicators that are visible against both light and dark section backgrounds
- Consider reduced-motion preferences for any scroll-triggered animations of pixel elements

## Scope note

This guide covers the homepage surface including hero, social proof, CTA, and footer sections visible in the supplied images. Navigation header, mobile layouts, interior pages, and interactive states such as hover, focus, and loading are not represented. Measurements are practical adaptation targets derived from visual inspection against a 4px relative unit grid. Verify licensing for all font families before production use.

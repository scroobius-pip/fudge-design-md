# How ziggle.art is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/ziggle.art-design)

Last updated: 2026-08-10

## Captured pages

[![Character showcase sections with horizontal card grids displaying animated mascots on dark background with pill-shaped category labels](https://pin.fontofweb.com/10553?format=jpg)](https://design.withfudge.com/share/pin-10553)

[Character showcase sections with horizontal card grids displaying animated mascots on dark background with pill-shaped category labels](https://design.withfudge.com/share/pin-10553)

[![Hero section featuring large display typography with black cat mascot and primary call-to-action button on near-black canvas](https://pin.fontofweb.com/10552?format=jpg)](https://design.withfudge.com/share/pin-10552)

[Hero section featuring large display typography with black cat mascot and primary call-to-action button on near-black canvas](https://design.withfudge.com/share/pin-10552)

[![Three-column pricing comparison with dark cards, white accent borders, and sleeping cat illustration above section heading](https://pin.fontofweb.com/10551?format=jpg)](https://design.withfudge.com/share/pin-10551)

[Three-column pricing comparison with dark cards, white accent borders, and sleeping cat illustration above section heading](https://design.withfudge.com/share/pin-10551)

## Overview

Ziggle.art presents an AI-powered mascot and character animation service through a dark, immersive landing experience. The visual system prioritizes creative output over interface chrome: near-black backgrounds let colorful character artwork dominate, while restrained typography and generous spacing create a gallery-like atmosphere. The design alternates between full-bleed hero moments with oversized display type and structured content sections with horizontal scrolling card grids. A credit-based pricing model is presented through a three-column comparison with clear visual hierarchy. The overall impression is premium and creative-focused, using high contrast between dark surfaces and white accents to guide attention toward calls-to-action and character showcases.

## Colors

The color system is intentionally minimal, built on a dark-mode foundation with a single high-contrast accent. This restraint ensures that the multicolored character artwork remains the visual focus throughout the experience.

| token | value | use |
|---|---|---|
| canvas | #000000 | Page background, deepest layer |
| surface | #1A1A1A | Card backgrounds, elevated panels |
| surface-elevated | #262626 | Borders, subtle separators, hover states |
| surface-border | #262626 | Card borders, dividers, pill outlines |
| text-primary | #FAFAFA | Headlines, primary body text, button labels |
| text-secondary | #B3B3B3 | Captions, metadata, supporting descriptions |
| accent | #FFFFFF | Primary buttons, featured borders, highlights |
| accent-inverse | #171717 | Text on accent backgrounds |

The dark canvas creates an infinite-depth effect that makes character artwork appear to float. Surfaces are only slightly elevated from the canvas, maintaining subtle depth without visual noise. Text-primary is a warm off-white rather than pure white, reducing eye strain against the black background. The accent color is reserved for interactive elements and featured states, ensuring it carries maximum impact when applied. A gradient from #1A1A1A to #000000 appears on certain surfaces for subtle vertical depth.

## Typography

The type system pairs Lexend as the primary family with the system sans-serif stack for UI elements. Lexend's geometric construction and wide aperture give it a friendly, approachable character that suits the creative tool positioning. Weights range from Light (300) for body text to Medium (500) for display, with Semibold (600) reserved for labels and small caps. Poppins appears in the font stack as an additional family, though its primary visible use in the current materials is for display-scale treatments where a more geometric, tightly-spaced alternative may be employed.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Lexend | 4.5rem | 500 | 1 | -0.025em | Hero headlines, page titles |
| section-display | Lexend | 3rem | 500 | 1 | -0.025em | Section headings, pricing title |
| body | Lexend | 0.875rem | 300 | 1.43 | 0em | Descriptions, card captions |
| body-large | Lexend | 1.125rem | 300 | 1.56 | 0em | Hero subheadings, lead paragraphs |
| label | Lexend | 0.75rem | 600 | 1.33 | 0.025em | Category pills, small caps, tags |
| ui | -apple-system | 0.875rem | 400 | 1.3 | 0em | Navigation, buttons, form elements |
| ui-small | -apple-system | 0.6875rem | 600 | 1 | 0em | Badges, metadata, fine print |

Display sizes use tight line-height and negative letter-spacing for impactful, compact headlines. Body text maintains generous line-height for readability despite the light weight. The label style uses positive tracking for all-caps treatments in category pills. Verify licensing for these families before production use.

## Layout

The page follows a stacked-section architecture with full-bleed hero areas and contained content sections. The hero section spans the full viewport width with asymmetric composition: display typography occupies the left portion while a large character illustration anchors the right. Content sections use centered alignment with maximum width constraints.

Horizontal scrolling galleries are a defining layout pattern. Character showcase sections present cards in a single-row carousel that extends beyond the viewport edge, with partial cards visible at the scroll boundaries to indicate additional content. Cards maintain consistent aspect ratios with square thumbnails and stacked metadata below.

The pricing section uses a three-column grid with equal-width cards. The center card receives featured treatment with enhanced border and a "Most Popular" badge. Cards are separated by consistent gutters, with the outer cards using standard borders while the featured card uses the accent border.

Spacing follows a base-2 system with semantic tokens. Section spacing of 6rem creates clear separation between major content areas. Internal card padding uses 2rem for comfortable content breathing room. Grid gaps of 1.5rem maintain related elements without crowding.

## Visual language

The visual character is dark, premium, and artwork-forward. The interface recedes to let character illustrations command attention. Photography and illustration styles vary across the character library, from painted textures to pixel art to 3D renders, unified by their presentation within consistent card frames.

Pill-shaped elements appear throughout: category labels, primary buttons, and badges all use full rounding. This creates a soft, approachable counterpoint to the sharp rectangular cards. The pill motif reinforces the friendly, creative positioning.

Shadow usage is minimal and functional. A subtle outer shadow (0px 4px 20px rgba(0,0,0,0.12)) provides depth on elevated elements without visible darkness against the already-black canvas. An inset highlight (inset 0px 1px 0px rgba(255,255,255,0.1)) adds subtle top-edge definition to bordered elements.

Character cards use a consistent structure: square artwork area with rounded corners, character name in text-primary below, and category tags in text-secondary. Cards sit on surface-colored backgrounds with subtle borders, creating discrete frames without heavy chrome.

## Components

### Primary Button

- **Anatomy**: Text label centered within a fully rounded pill container
- **Surface**: Solid accent background with accent-inverse text
- **Typography**: label token, uppercase or title-case depending on context
- **Shape**: border-radius 999px, creating a capsule form
- **Spacing**: 0.875rem vertical padding, 2.75rem horizontal padding
- **Composition**: Typically appears below hero text or within card footers

### Secondary Button

- **Anatomy**: Text label within bordered pill container
- **Surface**: Transparent background with surface-border outline, text-primary color
- **Typography**: label token
- **Shape**: border-radius 999px
- **Spacing**: Same padding as primary button
- **Variants**: Used for alternative actions, plan selections in non-featured cards

### Category Pill

- **Anatomy**: Small text label within compact bordered container
- **Surface**: Transparent with surface-border outline
- **Typography**: label token in text-secondary
- **Shape**: border-radius 999px
- **Spacing**: 0.5rem vertical, 1rem horizontal padding
- **Composition**: Appears above section headings as section identifiers ("NO ART SKILLS NEEDED", "ANY ACTION, ANY EMOTION", "PLANS")

### Character Card

- **Anatomy**: Square artwork thumbnail, character name, category tags
- **Surface**: surface background with surface-border outline
- **Typography**: Character name in body token, categories in body token at text-secondary
- **Shape**: 0.75rem border-radius on container
- **Spacing**: 0.5rem padding, artwork fills width
- **Composition**: Arranged in horizontal scrolling row with 1rem gaps

### Pricing Card

- **Anatomy**: Plan name, price with period suffix, feature list with checkmarks, action button
- **Surface**: surface background with surface-border outline
- **Typography**: Plan name in label token uppercase, price in section-display token, features in body token, price period in text-secondary
- **Shape**: 0.75rem border-radius
- **Spacing**: 2rem padding
- **Variants**: Standard card uses 1px border; featured card uses 2px accent border with "Most Popular" badge

### Navigation Bar

- **Anatomy**: Logo mark with text, primary action button
- **Surface**: Transparent over hero, or surface with blur on scroll
- **Typography**: Logo uses ui token, button uses label token
- **Composition**: Horizontal flex with space-between, vertically centered

## Responsive behavior

The design is documented from desktop viewport widths. The hero section's two-column layout should stack vertically on narrower viewports, with the character illustration moving above or below the text block. Horizontal scrolling card galleries should maintain their scroll behavior while showing fewer visible cards. The pricing three-column grid should collapse to a single column with the featured card prominently centered. Typography scales down proportionally: hero-display should reduce to section-display size on tablet, and body-large should maintain readability without reduction. Navigation should collapse to a hamburger menu or simplified logo-plus-button treatment on mobile.

## Practical implementation guidance

### Preserve
- The extreme contrast between dark canvas and white accent elements
- Horizontal scrolling galleries with partial card visibility at edges
- Pill-shaped buttons and category labels as a unifying motif
- Light-weight body typography (300) against dark backgrounds for elegant readability
- Square artwork thumbnails with consistent aspect ratios
- The "Most Popular" badge positioned above the featured pricing card

### Avoid
- Adding background colors or textures behind character artwork
- Using heavy drop shadows that compete with the dark canvas
- Introducing additional accent colors that compete with character illustrations
- Rounding card corners more than moderately; keep artwork areas square
- Using pure white (#FFFFFF) for large text areas; maintain the warm off-white

### Recommended Build Order
1. Establish the dark canvas and surface color foundation
2. Implement Lexend at display and body weights with proper fallbacks
3. Build the pill button component with primary and secondary variants
4. Create the character card with artwork container and metadata stack
5. Implement horizontal scrolling gallery with snap points
6. Build the pricing card grid with featured state logic
7. Add the hero section with asymmetric layout and large character illustration

### Accessibility
- Ensure text-secondary (#B3B3B3) on surface (#1A1A1A) meets WCAG AA contrast for small text; consider lightening to #C0C0C0 if needed
- Provide visible focus indicators on pill buttons, using accent color with offset
- Add aria-labels to horizontal scroll regions indicating scrollable content
- Ensure character names and categories are readable when artwork has similar tones
- Implement reduced-motion preferences that disable horizontal scroll animations

## Scope note

This guide covers the landing page experience including hero, character showcase galleries, and pricing sections. Navigation dropdown states, mobile menu behavior, authentication flows, and character creation interface are not represented in the supplied materials. The footer area and any additional marketing pages beyond pricing are also outside the current scope. Poppins is present in the font stack but its specific applied roles are not fully detailed in the captured surfaces.

# How useforma.app is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/useforma.app-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with large Bueno display type, orange-yellow gradient CTA button, and app dock illustration on dark background](https://pin.fontofweb.com/6496?format=jpg)](https://design.withfudge.com/share/pin-6496)

[Hero section with large Bueno display type, orange-yellow gradient CTA button, and app dock illustration on dark background](https://design.withfudge.com/share/pin-6496)

[![Feature grid with four numbered cards showing canvas, marker, productivity chart, and markdown capabilities on white background](https://pin.fontofweb.com/6497?format=jpg)](https://design.withfudge.com/share/pin-6497)

[Feature grid with four numbered cards showing canvas, marker, productivity chart, and markdown capabilities on white background](https://design.withfudge.com/share/pin-6497)

## Overview

Forma presents itself as a canvas-based productivity tool through a landing page that balances expressive personality with technical precision. The design relies on stark contrast: pure black and white dominate the composition, while a warm orange-to-yellow gradient provides the only chromatic accent. This restraint makes the gradient action elements immediately scannable and memorable.

The visual hierarchy is established through dramatic scale differences. Display headings set in Bueno, a variable display face designed by Rajesh Rajput, render at sizes up to 85 pixels with a tight, confident line height that lets the letterforms breathe as graphic elements. Against this expressive typography, all supporting text appears in Azeret Mono at a consistent 14 pixels, creating a systematic "design tool meets engineering" aesthetic that reinforces the product's positioning as a creative workspace.

The page alternates between dark and light treatments across sections. The hero immerses visitors in a near-black environment with a floating app dock illustration, while feature sections retreat to white backgrounds with subtle grid patterns. This rhythm prevents monotony while maintaining the binary black-white-orange palette throughout.

## Colors

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, dark section backgrounds, card surfaces |
| muted-ink | #5B5B5B | Secondary body text on light backgrounds, subtle labels |
| surface | #2F2E2D | Elevated dark cards, UI chrome in product imagery |
| surface-mid | #626262 | Borders on dark-themed elements, disabled states |
| border-light | #D1D1D1 | Hairline dividers, grid lines, subtle separators |
| accent-orange | #FF8401 | Gradient start, warm emphasis, active states |
| accent-yellow | #FFD501 | Gradient end, highlight accents, completion states |

The color system operates in three modes. The **dark mode** (hero and product showcase) uses ink as the dominant background with white text, creating maximum contrast for the large display typography. The **light mode** (features and capabilities) inverts to white backgrounds with ink text, allowing detailed product imagery to read clearly. The **accent mode** is reserved exclusively for the orange-to-yellow gradient, which appears only on the primary call-to-action button and small decorative square markers that punctuate section headings.

No additional accent colors appear in interface elements. The product imagery contains blues, pinks, and greens within illustrated cards and charts, but these remain confined to content visuals rather than becoming part of the systematic palette.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Bueno | 5.3125rem | 400 | 1 | normal | Primary hero headline, maximum impact statements |
| section-display | Bueno | 3.5rem | 400 | 1 | normal | Section headings, feature introductions |
| body | Azeret Mono | 0.875rem | 400 | 1.6 | normal | Descriptions, feature explanations, UI copy |
| label | Azeret Mono | 0.875rem | 500 | 1 | 0.0625em | Navigation, buttons, uppercase labels |
| legal-copy | Azeret Mono | 0.875rem | 400 | 1.6 | 0.05em | Pricing notes, terms, fine print |
| index-label | Azeret Mono | 0.875rem | 400 | 1 | normal | Numbered card indices (01, 02, 03, 04) |

Bueno serves as the expressive voice of the brand. At 85 pixels in the hero, it renders with substantial presence, its medium weight carrying enough density to feel grounded without becoming heavy. The 56 pixel section size maintains the same proportions for secondary headlines. Both sizes use a tight line height of 1, treating the type as a graphic element rather than flowing text.

Azeret Mono provides the technical counterpoint. Its consistent 14 pixel size across all functional text creates a monolithic, systematic feel. The 400 weight handles body copy with a line height of 1.6 for readability, while the 500 weight with positive letter spacing handles labels and navigation elements that need slightly more presence.

The Bueno typeface is designed by Rajesh Rajput. Verify licensing for these families before production use.

## Layout

The page follows a centered, narrow-column structure that prioritizes vertical rhythm over horizontal complexity. Content maxes out at approximately 720 pixels of effective width, with generous external margins that isolate the composition against the background.

The hero section occupies substantial vertical space, centering its display headline, gradient button, and pricing note in a stacked arrangement with measured gaps between elements. Below, a product screenshot floats with soft shadow depth, suggesting the application interface without competing with the headline hierarchy.

Feature sections employ a two-column grid for capability cards, each card containing a numbered label, Bueno heading, Azeret Mono description, and illustrative product imagery. The grid maintains consistent internal padding and separates cards with hairline borders rather than gap spacing, creating a continuous surface that subdivides cleanly.

Spacing follows a 3-pixel base unit system. Major section breaks use 56.95 pixels (approximately 3.5625rem) of vertical margin. Component internal padding uses 16 pixels for cards and 18-24 pixels for buttons. The 400-pixel left offset seen in one element suggests occasional asymmetric placement for visual interest, though the core rhythm remains centered.

## Visual language

The visual language merges creative tool expressiveness with developer-adjacent precision. This tension appears in every decision: a display typeface with personality against monospace utility, warm gradient energy against stark monochrome restraint, organic product illustrations against rigid grid structures.

Decorative square markers in orange and magenta punctuate section headings, serving as brand signatures that break the typographic line without adding complexity. These small geometric accents appear consistently beside display text, creating a recognizable rhythm across sections.

Product imagery favors soft realism: cards cast subtle shadows, markers appear as physical objects with highlight sheens, and interface elements use rounded rectangles with gentle depth. The hero's app dock illustration renders familiar macOS icons with slight dimensional treatment, grounding the product in actual desktop context.

Grid patterns appear faintly in light sections, suggesting the canvas metaphor without imposing visual noise. These use the border-light color at very low opacity, creating texture that rewards closer inspection without distracting from content hierarchy.

Shadows remain restrained and purposeful. The hero product image uses a multi-layer shadow stack for floating depth, while cards in feature sections use subtler single shadows. No shadow appears purely decorative; each serves to elevate content against its background.

## Components

### Primary action button

- **Anatomy**: Apple icon glyph, uppercase label text, full gradient background
- **Surface**: Linear gradient from accent-orange to accent-yellow, left to right
- **Typography**: label token, black text for maximum contrast against warm background
- **Shape**: 4 pixel border radius, creating a slightly softened rectangle
- **Spacing**: 18 pixels vertical padding, 24 pixels horizontal padding
- **Composition**: Centered within its container, preceded by headline and followed by legal-copy pricing note
- **Variants**: Single visible state; no disabled, hover, or active variations are documented

### Feature card

- **Anatomy**: Numbered index label (01-04), Bueno heading, Azeret Mono description, product illustration
- **Surface**: Transparent background, 1 pixel border-light divider on right and bottom edges
- **Typography**: section-display for heading at 56 pixels, body for description
- **Shape**: 16 pixel border radius on the card container
- **Spacing**: 16 pixels internal padding, generous illustration area below text
- **Composition**: Two-column grid arrangement, cards stack vertically on narrow viewports
- **Variants**: Four content variations (Canvas-based, Marker tool, Productivity Chart, Cards with markdown), unified by identical structure

### Product showcase panel

- **Anatomy**: Dark-themed application interface mockup with floating cards, grid background, handwritten annotations
- **Surface**: surface cards on near-white grid pattern, ink text on cards
- **Typography**: body token for card content, handwritten-style annotations for instructional cues
- **Shape**: 15 pixel border radius on dark cards, creating pill-like softness
- **Spacing**: 16 pixels card padding, cards overlap and offset for spatial depth
- **Composition**: Asymmetric card placement suggesting freeform canvas arrangement
- **Variants**: Single hero showcase state

### Section heading

- **Anatomy**: Small colored square marker, Bueno display text with selective bold emphasis
- **Surface**: Transparent, inheriting section background
- **Typography**: section-display with inline weight variation (some words at heavier weight)
- **Shape**: No bounding shape; marker is approximately 8-12 pixel square
- **Spacing**: Centered with generous vertical margins above and below
- **Composition**: Stacked above body description text, creating clear hierarchy

## Responsive behavior

The supplied views show a single desktop width. Based on the centered narrow-column structure, several responsive adaptations are recommended.

The two-column feature grid should collapse to a single column on viewports below approximately 768 pixels, maintaining card internal structure while stacking vertically. The hero display type at 85 pixels should scale down to the 56 pixel section size on smaller screens to prevent overflow and maintain line integrity.

The product showcase panel, with its carefully composed card arrangement, may require simplified positioning on narrow viewports—potentially reducing to a single centered card or scrolling horizontally to preserve the spatial metaphor.

Navigation elements, not fully visible in the supplied views, should maintain the monospace label treatment while potentially condensing to a hamburger menu on mobile to preserve the centered content rhythm.

## Practical implementation guidance

### Preserve
- The stark black-white binary with single warm gradient accent; this restraint is the brand's signature
- The dramatic scale contrast between Bueno display and Azeret Mono body; never reduce the headline sizes below their expressive threshold
- The centered narrow-column composition; the generous external margins are essential to the premium feel
- The orange-to-yellow gradient on the primary action only; do not extend this gradient to secondary elements or backgrounds
- The numbered index labels (01, 02, 03, 04) on feature cards; these provide systematic wayfinding

### Avoid
- Adding additional accent colors to the interface palette; the product imagery contains color that should not leak into UI elements
- Using Bueno for body text or long passages; its tight line height and display proportions are unsuited to extended reading
- Removing the square markers from section headings; these small elements carry disproportionate brand recognition
- Applying shadows universally; use the layered shadow only for the hero product image, subtler treatments elsewhere
- Centering body text in feature descriptions; the supplied views show left-aligned text within cards for scannability

### Recommended build order
1. Establish the type system with Bueno and Azeret Mono loaded, verifying the 85px/56px/14px hierarchy
2. Implement the dark hero section with gradient button and centered composition
3. Build the feature card component with consistent internal structure and grid placement
4. Add the product showcase panel with asymmetric card positioning
5. Polish with decorative markers, shadow layers, and grid background textures

### Accessibility
- Ensure the gradient button maintains minimum 4.5:1 contrast ratio; the black text on orange-yellow gradient meets this at most points but should be verified at the lightest gradient position
- Provide focus indicators that do not rely solely on color; the monochrome system benefits from visible outline or underline treatments
- Consider reduced-motion preferences for any scroll-triggered animations; the static views suggest motion may enhance but should not be required for comprehension
- Test Azeret Mono at 14 pixels for readability; its monospace structure may benefit from slightly increased line height in dense passages

## Scope note

This guide covers the Forma landing page hero, feature grid, and product showcase sections. Navigation, footer, pricing page, and application interface are not represented in the supplied views. Motion, interaction states, and mobile-specific layouts are not documented. The 3-pixel base unit and derived rem values are practical adaptation targets for reproduction.

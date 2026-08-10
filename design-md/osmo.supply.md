# How osmo.supply is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/osmo.supply-design)

Last updated: 2026-08-10

## Captured pages

[![Login page with dark canvas, floating 3D card carousel, and centered white form panel with purple primary action button](https://pin.fontofweb.com/4546?format=jpg)](https://design.withfudge.com/share/pin-4546)

[Login page with dark canvas, floating 3D card carousel, and centered white form panel with purple primary action button](https://design.withfudge.com/share/pin-4546)

[![Light footer with three-column navigation, black Login pill, coral Join Osmo pill, and circular social icon buttons](https://pin.fontofweb.com/4545?format=jpg)](https://design.withfudge.com/share/pin-4545)

[Light footer with three-column navigation, black Login pill, coral Join Osmo pill, and circular social icon buttons](https://design.withfudge.com/share/pin-4545)

[![Newsletter subscription form on light background with purple checked checkbox, underlined Privacy Policy link, and black submit button](https://pin.fontofweb.com/4544?format=jpg)](https://design.withfudge.com/share/pin-4544)

[Newsletter subscription form on light background with purple checked checkbox, underlined Privacy Policy link, and black submit button](https://design.withfudge.com/share/pin-4544)

[![Dark promotional section with large display typography, purple CTA button, and embedded product screenshot showing locked resource cards](https://pin.fontofweb.com/4543?format=jpg)](https://design.withfudge.com/share/pin-4543)

[Dark promotional section with large display typography, purple CTA button, and embedded product screenshot showing locked resource cards](https://design.withfudge.com/share/pin-4543)

## Overview

Osmo presents itself as a developer toolkit brand with a dark-first visual identity that balances technical credibility with playful energy. The system operates across two distinct modes: an immersive dark environment used for product showcases, authentication, and hero moments, and a clean light mode reserved for functional surfaces like forms, footers, and newsletter capture. The brand's signature purple accent anchors interactive elements, while a coral secondary accent adds warmth to conversion actions. Typography relies on the ultra-thin Haffer Variable for display headlines, creating an elegant contrast against the dense information architecture of a developer-focused product. The visual language incorporates floating 3D card compositions, handwritten script accents, and a monospace label system that signals technical precision without sacrificing approachability.

## Colors

The color system is built on a stark dark-to-light polarity with selective accent injection.

| token | value | use |
|---|---|---|
| canvas | #0a0a0a | Primary dark background for immersive pages and hero sections |
| canvas-elevated | #141414 | Slightly lifted dark surface for cards and panels on dark backgrounds |
| surface | #f5f5f5 | Light background for forms, footers, and functional areas |
| surface-inverse | #1e1e1e | Dark elevated surface for navigation pills and secondary containers |
| ink | #000000 | Primary text on light backgrounds |
| ink-inverse | #ffffff | Primary text on dark backgrounds |
| muted | #737373 | Secondary text, placeholders, and disabled states |
| action | #6b4cff | Primary interactive elements, buttons, checkboxes, and links |
| action-hover | #5a3fe6 | Hover state for action elements |
| accent-coral | #ff6b5b | High-attention conversion buttons and promotional badges |
| accent-lime | #a3e635 | Handwritten script accents and playful decorative elements |
| border | #262626 | Subtle divisions on dark surfaces |
| border-light | #e5e5e5 | Subtle divisions on light surfaces |

The dark canvas dominates the brand experience, creating a theater-like environment for the 3D card showcases and product screenshots. Light surfaces appear as intentional interruptions—form panels, footer zones, and newsletter capture areas that require higher readability density. The purple action color carries consistent semantic weight across both modes, appearing as filled buttons on light backgrounds and as the checkbox fill in the newsletter form. The coral accent is reserved for the highest-priority conversion moment, the "Join Osmo" button, creating a warm counterpoint to the cooler purple. The lime accent appears sparingly as handwritten script overlays, adding organic personality without destabilizing the technical tone.

## Typography

The type system combines an ultra-thin variable display face with a neutral extended sans and a monospace utility face, creating clear hierarchy through weight and width contrast rather than size alone.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Haffer Vf | 4rem | 100 | 1.1 | -0.03em | Page headlines and hero statements |
| section-display | Haffer Vf | 2.5rem | 100 | 1.15 | -0.02em | Section titles and promotional headers |
| body | Haffer Xh | 1rem | 400 | 1.6 | 0 | Primary reading text and form labels |
| body-small | Haffer Xh | 0.875rem | 400 | 1.5 | 0 | Navigation items, captions, and secondary text |
| label | Haffer Mono | 0.75rem | 400 | 1.4 | 0.05em | Uppercase metadata, tags, and technical annotations |
| navigation | Haffer Xh | 0.875rem | 400 | 1.5 | 0 | Header and footer navigation links |
| script-accent | Brisa Pro | 1.5rem | 400 | 1.2 | 0 | Handwritten decorative overlays and playful annotations |

Haffer Vf, designed by Martin Vácha and available from Displaay, provides the dramatic thin-stroke display voice. Haffer Xh serves as the workhorse for all interface text. Haffer Mono handles technical labeling and uppercase metadata. Brisa Pro, designed by Angel Koziupa and digitized by Alejandro Paul, supplies the organic script accent for decorative moments. Verify licensing for these families before production use.

## Layout

The layout system favors centered compositions with generous vertical breathing room and asymmetric depth layers created through 3D-transformed card elements.

Page sections stack vertically with section-large spacing between major content blocks. The immersive dark sections typically employ a centered single-column layout for text content, with the visual interest provided by surrounding 3D card environments rather than complex grid structures. Form panels appear as centered cards with constrained maximum widths, creating focused task surfaces against the expansive dark canvas.

The light-mode functional areas use a more conventional flow: full-width backgrounds with content constrained to comfortable reading widths. Footer navigation organizes into three-column grids at wider viewports, collapsing to stacked columns on narrower screens. Newsletter forms use a two-column input layout with the submit button positioned to the right, maintaining horizontal efficiency.

Card-based content, as seen in the product screenshot embeds, uses dense grid arrangements with small gaps, allowing the individual card thumbnails to create visual rhythm. Navigation elements favor horizontal arrangement with pill-shaped containers, while the 3D showcase cards break from the grid entirely, floating at rotated angles to create spatial depth.

## Visual language

The brand's visual character emerges from the tension between technical precision and playful experimentation. The dark canvas creates a stage-like environment where colorful product screenshots and 3D card compositions become the performers. Handwritten lime script overlays appear as casual annotations, suggesting creative spontaneity within a structured toolkit.

Imagery and screenshots are presented with realistic depth cues—cards cast subtle shadows, rotate on three axes, and overlap in z-space. The product interface screenshots embedded within promotional sections show the actual tool in use, reinforcing credibility through demonstration rather than abstraction.

Iconography appears in two modes: functional Material Icons for interface actions like visibility toggles and navigation, and custom brand marks for social platforms. Social links use circular containers with light backgrounds, creating accessible touch targets while maintaining visual lightness.

The overall density varies dramatically by context: immersive sections are intentionally sparse, with single headlines and isolated calls-to-action surrounded by negative space and floating cards. Functional sections increase density with multi-column navigation, stacked form fields, and grouped action buttons.

## Components

### Primary button
- **Anatomy**: Text label centered within a rectangular container
- **Surface**: Filled action purple background with white text
- **Typography**: body token, medium weight
- **Shape**: 0.5rem border radius, comfortable padding
- **Spacing**: 0.875rem vertical, 1.5rem horizontal
- **Composition**: Typically appears in isolation or as the dominant action in a pair
- **Variants**: On dark backgrounds, maintains filled appearance; on light backgrounds, same treatment provides strong contrast

### Secondary / pill button
- **Anatomy**: Text label within a fully rounded container
- **Surface**: Dark surface-inverse fill with white text, or light surface fill with dark text
- **Typography**: navigation token
- **Shape**: 9999px border radius creating pill silhouette
- **Spacing**: Compact padding, 0.5rem vertical, 1rem horizontal
- **Composition**: Used for navigation actions and secondary conversions

### Coral conversion button
- **Anatomy**: Text label within rectangular container
- **Surface**: Filled accent-coral background with white text
- **Typography**: body token
- **Shape**: 0.5rem border radius
- **Spacing**: Standard button padding
- **Composition**: Reserved for highest-priority conversion actions like "Join Osmo"

### Form panel
- **Anatomy**: Container with stacked label-input pairs, action button, and auxiliary links
- **Surface**: Light surface background on dark canvas, or elevated surface-inverse on dark sections
- **Typography**: label token for field labels, body for inputs, body-small for helper text
- **Shape**: 1rem border radius
- **Spacing**: 1rem internal padding, consistent vertical rhythm between fields
- **Composition**: Centered with maximum width constraint, creating focused task surface

### Input field
- **Anatomy**: Single-line text entry with placeholder text
- **Surface**: Light gray fill (#e8e8e8) with dark text, no visible border
- **Typography**: body token for value, muted color for placeholder
- **Shape**: 0.25rem border radius
- **Spacing**: 0.75rem vertical padding, 1rem horizontal
- **Composition**: Full width within form panel, stacked vertically with label above

### Checkbox
- **Anatomy**: Circular indicator with checkmark icon and adjacent label text
- **Surface**: Filled action purple when checked, with white checkmark
- **Shape**: Perfect circle, 1.5rem diameter
- **Spacing**: Positioned left of label text with tight gap
- **Composition**: Appears in form contexts with legal or preference selections

### 3D showcase card
- **Anatomy**: Rectangular thumbnail with image content, optional lock badge, and caption text
- **Surface**: Dark canvas-elevated background with subtle border
- **Typography**: body-small for captions, label for lock badges
- **Shape**: 1rem border radius
- **Spacing**: Dense grid arrangement with minimal gaps
- **Composition**: Rotated and translated in 3D space, floating around central content or arranged in scrollable grids

### Navigation pill
- **Anatomy**: Text label within rounded container
- **Surface**: Dark fill with light text for header; light fill with dark text for footer social
- **Typography**: navigation token
- **Shape**: 9999px for header pills, 50% for circular social icons
- **Spacing**: Compact internal padding
- **Composition**: Horizontal arrangement in header, grouped clusters in footer

## Responsive behavior

The design maintains its dark-first character across viewport sizes, with layout adaptations focused on content density and touch target sizing. The centered single-column compositions for immersive sections translate naturally to narrower viewports without structural change. Three-column footer navigation should stack to single column on mobile, maintaining readable tap targets for navigation links.

Form panels should remain centered with comfortable side margins, avoiding edge-to-edge inputs that reduce usability on touch devices. The 3D card environments may simplify their spatial transforms on reduced-motion preferences or very narrow viewports, falling back to flatter scrollable arrangements.

Typography scales down proportionally: hero-display should reduce to section-display sizes on mobile, maintaining the ultra-thin weight character without requiring excessive line breaks. Button padding should increase slightly on touch devices to meet minimum 44px tap target recommendations.

## Practical implementation guidance

### Preserve
- The stark dark-to-light mode polarity; do not introduce intermediate gray backgrounds
- The ultra-thin weight of Haffer Vf for display typography; substituting a heavier weight loses the brand's elegant voice
- The electric purple as the consistent interactive accent across both color modes
- The 3D card depth effects as signature brand moments
- The handwritten script accents as sparse decorative elements, not body text

### Avoid
- Using the coral accent for non-conversion actions; it should remain special to signup moments
- Applying the thin display weight to body text sizes; legibility suffers below 2rem
- Removing the rounded corners from form panels; the softness contrasts with the technical content
- Cluttering immersive dark sections with excessive text; let the cards and screenshots breathe
- Using Brisa Pro for functional interface text; reserve it for decorative script moments

### Recommended build order
1. Establish the dark canvas and light surface color modes with CSS custom properties
2. Implement Haffer Vf for hero-display and section-display with variable font weight at 100
3. Build the form panel component with consistent light surface treatment
4. Create the primary button with action purple fill and the coral conversion button variant
5. Implement the 3D card environment with CSS transforms for the showcase sections
6. Add the pill navigation system for header and footer patterns
7. Integrate Brisa Pro script accents as absolutely positioned decorative overlays

### Accessibility
- Ensure the thin display typography meets minimum contrast ratios; the ultra-light weight may require increased size or darker backgrounds
- Provide visible focus indicators for all interactive elements; the purple action color can serve as focus ring color
- Maintain semantic HTML structure for form panels with proper label associations
- Respect reduced-motion preferences for 3D card transforms; provide static fallback layouts
- Ensure the circular checkbox has sufficient size for touch interaction and clear checked-state communication

## Scope note

This guide covers the landing, plans, showcase, and login page surfaces visible in the supplied images. Mobile breakpoints, loading states, error handling, and full component interaction states are not represented. Measurements are practical adaptation targets derived from the visible interface proportions.

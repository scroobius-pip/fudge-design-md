# How workbench.suna.design is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/workbench.suna.design-design)

Last updated: 2026-08-10

## Captured pages

[![Particle workbench tool with dark sidebar controls, sliders, toggles, and color swatches on light gray background](https://pin.fontofweb.com/8419?format=jpg)](https://design.withfudge.com/share/pin-8419)

[Particle workbench tool with dark sidebar controls, sliders, toggles, and color swatches on light gray background](https://design.withfudge.com/share/pin-8419)

[![Workbench landing page with grid of application cards, header navigation, and light gray canvas background](https://pin.fontofweb.com/8418?format=jpg)](https://design.withfudge.com/share/pin-8418)

[Workbench landing page with grid of application cards, header navigation, and light gray canvas background](https://design.withfudge.com/share/pin-8418)

## Overview

Suna's Design Workbench is a monochromatic, engineering-focused interface built around precision and tactile feedback. The visual system draws from classic Mac OS X Aqua aesthetics—soft gradients, dimensional buttons with physical depth, and chiseled controls—while maintaining a contemporary minimalism through strict grayscale palettes and monospace typography. Every interactive element communicates its state through subtle shadows, inset highlights, and carefully calibrated surface treatments rather than flat color alone.

The workbench serves as a launchpad and control environment for creative tools: particle generators, shader composers, color analyzers, and geometric utilities. The landing page presents these applications as a clean grid of raised cards against a light gray canvas, while individual tool interfaces organize dense parameter controls into scannable sidebar panels. The design prioritizes information density without clutter, using typographic hierarchy, consistent spacing rhythms, and dimensional surfaces to separate functional zones.

## Colors

The palette is intentionally restrained, operating entirely in grayscale. Light surfaces dominate the canvas and cards, while near-black provides maximum contrast for primary actions and text. Mid-grays handle secondary information, borders, and inactive states. The system derives its visual interest from surface treatments—gradients, shadows, and highlights—rather than hue variation.

| token | value | use |
|---|---|---|
| canvas | #FAFAFA | Primary page background, empty state areas |
| surface | #E8E8E9 | Sidebar panels, control backgrounds, card surfaces |
| surface-raised | #F0F0F2 | Elevated cards, slider thumbs, toggle knobs |
| ink | #242424 | Primary text, active controls, strong borders |
| ink-secondary | #666666 | Secondary labels, parameter values, descriptions |
| ink-tertiary | #555555 | Tertiary text, inactive tab labels |
| ink-muted | #777777 | Placeholder text, disabled indicators, slider tracks |
| border | #000000 | Button outlines, focus rings, strong separators |
| border-subtle | #AAAAAA | Card borders, divider lines, inactive track backgrounds |
| shadow-base | #B8B8BC | Primary drop-shadow for raised buttons and cards |
| shadow-deep | #111111 | Deep shadow for maximum elevation, dark mode buttons |
| action-primary | #1A1A1A | Primary button fill, dark toggle backgrounds, active states |
| action-primary-hover | #2C2C2C | Primary button hover, subtle gradient endpoint |
| action-secondary | #D4D4D6 | Secondary button fill, light gradient start point |
| action-secondary-hover | #C4C4C6 | Secondary button hover, gradient endpoint |

The light mode system uses warm-tinted grays that prevent the coldness of pure neutrals. Dark accents appear sparingly and purposefully: primary buttons, toggle backgrounds, and the deepest shadows. Gradients always run vertically, lightening toward the top to simulate overhead illumination on convex surfaces. The particle tool interface shows color swatches in pink and blue tones, but these are content values selected by users rather than system interface colors.

## Typography

The entire interface uses a single monospace family, SF Mono Medium, supplied by Apple Inc. This choice reinforces the engineering, code-editor aesthetic while providing excellent legibility at small sizes for dense control panels. Weight variation is minimal—most text uses the single Medium weight with hierarchy established through size, letter-spacing, and color rather than boldness.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| body | SF Mono | 1rem | 400 | 1.5 | normal | Card descriptions, parameter values, general content |
| label | SF Mono | 0.875rem | 400 | 1.5 | 0.1225em | Section headers, control labels, category titles |
| caption | SF Mono | 0.75rem | 400 | 1.5 | 0.1em | Card subtitles, tool descriptions, metadata |
| micro | SF Mono | 0.6875rem | 400 | 1.5 | 0.08em | Button labels, compact UI text, badge text |
| tiny | SF Mono | 0.625rem | 400 | 1.625 | normal | Fine print, legal, minimal annotations |
| display | SF Mono | 1rem | 700 | 1.5 | 0.06em | Page title, major section headers, emphasized labels |

Letter-spacing is consistently positive and generous, particularly at smaller sizes, preventing the density typical of monospace fonts. The display weight (700) appears only for the "Workbench" logotype and card titles, creating a clear hierarchy without introducing additional font files. All text is uppercase in labels and buttons, reinforcing the utilitarian, control-panel character. Verify licensing for SF Mono before production use; it is proprietary to Apple Inc.

## Layout

The workbench employs a spacious, centered layout with generous whitespace that contrasts with the density of its control interfaces. The landing page uses a full-bleed light gray canvas with a fixed header containing the logotype, navigation, and utility actions. Below, application cards flow in a responsive grid with consistent gutters and margins.

The header spans the full viewport width with internal padding of 3rem on all sides. The logotype "Workbench" sits left-aligned in display typography, while the right side holds a descriptive tagline "SUNA'S DESIGN WORKBENCH" in caption style, a dark pill button, and a close control. This horizontal arrangement establishes the primary axis for all page-level navigation.

The card grid uses a four-column layout at desktop widths with 1.25rem gutters between cards and 3.5rem vertical spacing between the section header and card rows. Cards maintain a minimum height through internal padding of 1.25rem, with descriptions occupying the upper portion and a category badge anchored to the bottom-right corner. The grid breaks to two columns and then single column as viewport width decreases, maintaining consistent internal spacing at all breakpoints.

Individual tool interfaces, such as the particle workbench, restructure to a sidebar-and-canvas layout. The sidebar occupies a fixed narrow column on the left, filled edge-to-edge with the surface color and organized into collapsible parameter groups. Each group contains labeled controls—sliders, toggles, dropdowns, color pickers—stacked vertically with 1rem vertical padding between groups and 0.5rem between individual controls within a group. The main canvas area fills the remaining viewport, displaying the live preview or output.

## Visual language

The visual language centers on dimensional, tactile surfaces that recall physical control hardware. Buttons are not flat rectangles but convex forms with gradient fills, drop shadows, and inset highlights that suggest they can be pressed. This skeuomorphic approach is applied with restraint—only to interactive elements—while containers and backgrounds remain flat and minimal.

Cards float above the canvas through subtle shadow layers: a base shadow in medium gray offset downward, combined with a softer ambient shadow for depth. The card surfaces themselves are slightly lighter than the canvas, creating natural separation without borders. On hover or focus, cards may elevate slightly through increased shadow spread, though this must be implemented with care to maintain the restrained character.

Sliders extend this dimensional language with custom track and thumb treatments. The track appears as a recessed channel with a subtle inner shadow, while the thumb is a raised rectangle with vertical grip lines, catching a top highlight and casting a small shadow. Fill colors on active portions of tracks use muted grays and desaturated warm tones—terracotta, olive, slate—rather than the interface's pure grays, providing functional color coding without breaking the monochrome system.

Toggles switch between recessed and raised states. The inactive position shows the knob flush left within a dark channel; active position shifts the knob right with the surface-raised fill visible through the track aperture. This two-state physical metaphor is consistent across all binary controls.

## Components

### Application Card

Anatomy: Rectangular container with rounded corners, internal padding, title in display typography at top, description in caption style below, category badge in bottom-right corner.

Surface: Background in surface-raised color (#F0F0F2), subtle border in border-subtle, multi-layer shadow creating elevation above canvas.

Typography: Title uses display token (1rem, weight 700, letter-spacing 0.06em, uppercase). Description uses caption token (0.75rem, weight 400, letter-spacing 0.1em). Badge uses caption token in ink-muted color.

Shape: Border radius of 0.75rem. No visible border on default state; subtle 1px border may appear on hover.

Spacing: Internal padding of 1.25rem on all sides. Title-to-description gap of 0.5rem. Badge positioned with 1.25rem inset from bottom-right corner.

Composition: Flex column layout with title and description at top, badge absolutely positioned at bottom-right. Minimum aspect ratio maintained through padding rather than fixed height.

Variants: Default state shows full shadow. Hover state may increase shadow spread and translate card upward by 2px. Active/pressed state flattens shadow and removes translation.

### Primary Button

Anatomy: Rectangular button with rounded corners, containing centered uppercase label.

Surface: Dark gradient from action-primary (#1A1A1A) to action-primary-hover (#2C2C2C), simulating convex surface. Multi-part shadow: deep offset shadow in shadow-deep (#111111) for ground contact, ambient shadow for softness, and inset top highlight in white at reduced opacity for specular reflection.

Typography: Micro token (0.6875rem, weight 400, letter-spacing 0.08em), color in canvas (#FAFAFA) or near-white.

Shape: Border radius of 0.1875rem. 1px solid border in border (#000000).

Spacing: Padding of 0.625rem vertical, 0.625rem horizontal for compact variant; 0.625rem vertical, 1rem horizontal for standard variant.

Composition: Single-line text, centered. Icon may precede text with 0.5rem gap.

States: Default shows full gradient and shadow. Hover may lighten gradient endpoint. Active/pressed reverses gradient direction (darker at top), compresses shadow to inset, and removes offset shadow to simulate depression.

### Secondary Button

Anatomy: Same structure as primary button with inverted value scale.

Surface: Light gradient from action-secondary (#D4D4D6) to action-secondary-hover (#C4C4C6), with shadow-base (#B8B8BC) offset shadow and white inset highlight.

Typography: Same micro token, color in ink (#242424).

Shape, Spacing, Composition: Identical to primary button.

States: Same press behavior with gradient reversal and shadow compression.

### Toggle Switch

Anatomy: Horizontal rounded track containing a circular or rounded-square knob.

Surface: Track uses action-primary (#1A1A1A) with inset shadows suggesting a channel. Knob uses surface-raised (#F0F0F2) with convex treatment—gradient, shadow, highlight.

Typography: Adjacent label in body or caption token.

Shape: Full pill radius (9999px). Knob is slightly smaller than track height, allowing visible track color at edges.

Spacing: Track height approximately 1.5rem, width approximately 2.5rem. Label positioned 0.5rem to right.

States: Inactive—knob left, track shows dark channel. Active—knob right, track shows surface-raised through aperture with possible subtle tint. Transition between states should animate knob position and track fill over 150-200ms.

### Slider Control

Anatomy: Horizontal track with draggable thumb, optional fill indicating value, numeric value display to right.

Surface: Track as recessed channel with subtle inner shadow in shadow-deep at low opacity. Thumb as raised rectangle with vertical grip lines, gradient from surface-raised to slightly darker, with small drop shadow and top highlight.

Typography: Label above in label token (0.875rem, uppercase, letter-spacing 0.1225em). Value to right in body token.

Shape: Track height approximately 0.375rem with full pill radius. Thumb width approximately 1.25rem, height approximately 0.75rem, radius 0.1875rem.

Spacing: Full control height approximately 2.5rem including label. Thumb sits centered on track vertically.

Composition: Label and value on same horizontal line above track, or label left and value right with track below. Fill color extends from left edge to thumb position.

Variants: Different parameter types use distinct fill colors—terracotta for size/scale, olive for speed, slate for turbulence—providing at-a-glance identification without label reading.

### Dropdown/Select

Anatomy: Rectangular trigger showing current selection, expanding to list below.

Surface: Trigger matches secondary button treatment—light gradient, shadow, inset highlight. List appears as surface-raised panel with shadow.

Typography: Trigger text in micro token. List items in body token.

Shape: Trigger radius 0.1875rem. List radius 0.375rem.

Spacing: Trigger padding 0.625rem vertical, 1rem horizontal. List item padding 0.5rem 1rem.

States: Open state adds downward-pointing indicator rotation and list expansion with fade-in.

### Color Swatch

Anatomy: Small circular or square preview of selected color, with hex value label.

Surface: Swatch shows solid fill of selected color, with subtle border in border-subtle for light colors. Add button uses secondary button treatment.

Typography: Hex value in caption token. Label in label token.

Shape: Circular swatch at approximately 1.5rem diameter. Square variant at 1.25rem with 0.1875rem radius.

Spacing: Swatch-to-label gap 0.75rem. Swatch-to-remove gap 0.5rem.

Composition: Horizontal row with swatch, value, and remove action. Multiple swatches stack vertically with 0.5rem gap.

## Responsive behavior

The workbench assumes a desktop-first context given its dense control-panel nature, but key adaptations ensure usability across viewport sizes.

At viewports below approximately 1024px, the four-column card grid transitions to two columns with maintained gutters and internal spacing. Below 640px, cards stack to a single column with full-width expansion. Card internal padding remains constant; only the grid container margins reduce from 3rem to 1.5rem and finally to 1rem.

The tool sidebar collapses to an overlay or drawer pattern below 768px, triggered by a menu button in the header. When expanded, it slides over the canvas with a backdrop scrim at 50% opacity in ink. Canvas content remains visible but inactive behind the overlay.

Typography scales minimally—the smallest sizes (micro, tiny) remain fixed to preserve control density. Body and label sizes may reduce by one step (0.125rem) on the smallest viewports if horizontal space is critically constrained.

Touch targets for sliders, toggles, and buttons expand to minimum 44px height on touch devices, achieved through increased padding rather than visual size change. Slider thumbs widen to 1.5rem for easier finger acquisition.

## Practical implementation guidance

### Preserve
- The dimensional button language: gradients, multi-part shadows, and inset highlights are essential to the tactile character. Flat replacements lose the design's core personality.
- Monospace typography throughout; mixing in proportional fonts breaks the engineering aesthetic.
- Generous letter-spacing on small text, particularly uppercase labels and buttons.
- The warm gray palette; pure neutral grays appear colder and less refined.
- Consistent uppercase treatment for labels, buttons, and category text.

### Avoid
- Pure black (#000000) for large fills; reserve it for borders, outlines, and the deepest shadows only.
- Border-radius inconsistency; the system uses specific radii for specific roles (controls vs. pills vs. cards).
- Flat shadowless buttons except in explicitly disabled states.
- Saturated accent colors as interface tokens; the grayscale system cannot support arbitrary hues in its surface language.
- Tight letter-spacing on monospace text, which reduces legibility and feels cramped.

### Recommended Build Order
1. Establish the color tokens and typography scale first—these constrain all subsequent decisions.
2. Implement the button system with its gradient and shadow stack; this is the most visually distinctive element and validates the surface language.
3. Build card components with their elevation shadows and internal spacing.
4. Create form controls (slider, toggle, dropdown) with consistent dimensional treatment.
5. Assemble page layouts—landing grid and tool sidebar—using established spacing tokens.
6. Add responsive behavior and touch adaptations last, preserving desktop density while ensuring accessibility.

### Accessibility
- Ensure all text meets WCAG AA contrast ratios: ink (#242424) on canvas (#FAFAFA) exceeds 4.5:1; verify micro text on surface backgrounds.
- Provide visible focus indicators that do not rely solely on shadow changes; consider 2px outline in ink with 2px offset.
- Slider controls need keyboard operation (arrow keys, Home/End) with visible focus state on the thumb.
- Toggle switches require explicit aria-pressed or role="switch" with state announcement.
- Color swatches should expose their hex value as accessible text, not rely on color perception alone.
- The dimensional button style must not prevent screen reader identification; ensure proper button semantics and activation via Enter/Space.

## Scope note

This guide covers the workbench landing page and particle tool interface as visible in the supplied images. Mobile layouts, animation specifications, additional tool interfaces, error states, loading sequences, and dark mode variants are not documented. The dimensional button shadows and slider customizations require careful CSS implementation to match the reference appearance.

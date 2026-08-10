# How noon.design is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/noon.design-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with centered headline, orange accent words, and dotted grid background on near-black canvas](https://pin.fontofweb.com/8620?format=jpg)](https://design.withfudge.com/share/pin-8620)

[Hero section with centered headline, orange accent words, and dotted grid background on near-black canvas](https://design.withfudge.com/share/pin-8620)

[![Large split headline 'Let design build.' with body copy and floating UI component previews](https://pin.fontofweb.com/8619?format=jpg)](https://design.withfudge.com/share/pin-8619)

[Large split headline 'Let design build.' with body copy and floating UI component previews](https://design.withfudge.com/share/pin-8619)

[![Component showcase with headline block, scroll progress, theme toggle, and one-time password inputs](https://pin.fontofweb.com/8618?format=jpg)](https://design.withfudge.com/share/pin-8618)

[Component showcase with headline block, scroll progress, theme toggle, and one-time password inputs](https://design.withfudge.com/share/pin-8618)

[![Three staggered draggable text blocks with orange selection borders and dimensional labels](https://pin.fontofweb.com/8617?format=jpg)](https://design.withfudge.com/share/pin-8617)

[Three staggered draggable text blocks with orange selection borders and dimensional labels](https://design.withfudge.com/share/pin-8617)

## Overview

Noon presents itself as a design tool rebuilt for product designers who work at the intersection of visual design and production code. The landing page communicates this positioning through a deliberately stark visual system: a near-black canvas serves as the primary stage, allowing oversized white typography and burnt-orange accents to command attention without competition. The interface rejects conventional SaaS landing page patterns—there are no gradient backgrounds, no soft shadows, no rounded card containers. Instead, the design relies on extreme scale contrasts, precise geometric alignment, and the strategic deployment of color to create hierarchy.

The page structure unfolds as a vertical scroll experience where massive display headlines anchor each section, supported by concise body copy and floating UI component demonstrations. These components—text inputs, radio buttons, scroll progress indicators, theme toggles, and one-time password fields—appear to hover in the canvas space, suggesting the tool's output without enclosing them in conventional device frames or browser chrome. A subtle dotted grid pattern overlays the dark background, reinforcing the design-tool metaphor and providing spatial orientation without visual noise.

## Colors

| token | value | use |
|---|---|---|
| canvas | #000000 | Primary page background, deepest layer |
| surface | #1F1F1F | Elevated panels, component containers |
| surface-elevated | #2A2A2A | Hover states, secondary elevations |
| surface-subtle | #353535 | Tertiary backgrounds, subtle separations |
| accent | #D2451A | Primary action buttons, highlighted text, selection borders |
| accent-muted | #432E28 | Warm dark tone for accent-adjacent surfaces |
| accent-blue | #1379A5 | Secondary accent, subtle borders, teal-cyan highlights |
| text-primary | #FFFFFF | Headlines, primary body copy, button labels |
| text-muted | #FDFBF7 | Secondary text, legal copy, footer links |
| border-subtle | #1379A5 | Hairline borders on components, selection outlines |

The color system operates on a principle of maximum contrast with surgical accent deployment. The near-black canvas (#000000) dominates the viewport, creating an immersive dark environment that makes white typography appear to emit light. The burnt orange (#D2451A) functions as the sole warm accent, reserved for calls to action, highlighted words within headlines, and selection states on draggable components. A teal-cyan (#1379A5) appears as a secondary accent, primarily in border contexts and subtle UI chrome, providing cool counterbalance to the warm orange.

The palette avoids gradients entirely. Surfaces are flat, borders are single-pixel solids, and text achieves hierarchy through weight and scale rather than color variation. When orange appears behind text as a selection highlight, it uses reduced opacity rather than solid fill, preserving text legibility while indicating active state.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Abc Diatype | 10rem | 350 | 1 | -0.03em | Maximum impact headlines, split across lines |
| section-display | Abc Diatype | 5rem | 350 | 1.05 | -0.025em | Section headlines, draggable text blocks |
| body-large | Abc Diatype | 1.75rem | 385 | 1.4 | 0em | Introductory paragraphs, manifesto copy |
| body | Abc Diatype | 1rem | 385 | 1 | 0.03em | Navigation, labels, secondary text |
| label | Abc Diatype Semi Mono | 0.75rem | 385 | 1.45 | 0.04em | Component annotations, dimensional readouts |
| button | Abc Diatype | 0.875rem | 500 | 1 | 0.03em | Primary action buttons, CTAs |

The typographic system centers on Abc Diatype, a contemporary sans-serif from Dinamo, with two cuts: the standard Regular for all display and body text, and Semi Mono for technical annotations and dimensional labels. The design exploits an unusually wide range of scale, from 10rem hero headlines that dominate the viewport to 0.75rem mono labels that recede into the interface chrome.

Display typography employs tight negative tracking (-0.03em to -0.025em) and weights at the lighter end of the spectrum (350), creating an elegant, airy quality despite the massive scale. Body text shifts to weight 385 with neutral or slightly positive tracking, prioritizing readability over character. The mono variant adds technical credibility to component labels, appearing in orange-tinted boxes that overlay the canvas during selection states.

The supplied design facts also list Times and Arial among detected font families. Times appears at 16px weight 400 in div and nav regions, while Arial appears at 13.3333px weight 400 in button contexts. These families function as fallback or system-level fonts in the interface rather than primary design typography. Verify licensing for all families before production use. Abc Diatype and Abc Diatype Semi Mono are designed by Johannes Breyer, Fabian Harb, Elias Hanzer, Renan Rosatti, and Erkin Karamemet, and distributed by Dinamo.

## Layout

The page employs a full-bleed canvas with centered content columns and asymmetric component placement. The primary content area spans approximately 75% of viewport width, with generous margins that allow floating UI components to occupy peripheral space without crowding the reading line.

Section spacing follows a dramatic rhythm: hero headlines receive substantial vertical breathing room, often sitting in the upper third of the viewport with the lower two-thirds reserved for supporting elements or empty canvas. Body copy blocks are narrower than headlines, creating a deliberate width contrast that guides reading flow from large to small.

The dotted grid background establishes a 24px implicit grid, visible as subtle reference points across the dark canvas. Components appear to snap to this grid, with floating elements positioned at non-symmetric coordinates that suggest a workspace rather than a rigid template. The "Code View" button anchors the lower right corner across sections, providing persistent access to implementation details.

Content hierarchy progresses through scale rather than enclosure. There are no bordered cards or shadowed containers separating sections; instead, whitespace and typographic scale create natural boundaries. When components are selected, orange bounding boxes with dimensional readouts appear, temporarily introducing structure that disappears on deselection.

## Visual language

The visual identity communicates precision tooling through restraint. Every element serves a functional purpose; decoration is limited to the dot grid and the occasional floating component. The aesthetic references professional design software—Figma, Sketch, code editors—without mimicking any single tool.

Imagery is absent; the page relies entirely on typography and live UI components to demonstrate capability. This absence is strategic: by showing actual interface elements (radio inputs, password fields, progress bars) rather than screenshots or illustrations, Noon argues that its output is indistinguishable from production code.

Motion and interaction are implied through static states. Selected text blocks show orange selection borders with width and height labels; component previews include dimensional annotations. These frozen moments suggest a dynamic system without requiring animation to communicate functionality.

The orange accent operates as both functional signal and brand identifier. It appears in the logo, primary buttons, highlighted headline words, selection borders, and component labels. This disciplined single-accent approach prevents visual fragmentation and ensures that every orange element demands attention.

## Components

### Primary action button

- **Anatomy**: Text label centered within a rounded rectangle
- **Surface**: Solid burnt-orange (#D2451A) background
- **Typography**: `{typography.button}` in white (#FFFFFF)
- **Shape**: 0.75rem border radius, pill-like but not fully circular
- **Spacing**: 0.75rem vertical padding, 1rem horizontal padding
- **Composition**: Positioned in upper right of viewport, fixed or persistent across scroll
- **Variants**: "Join early access" primary variant; possible secondary states not visible

### Announcement pill

- **Anatomy**: Text label with inline "Read" button, combined in rounded container
- **Surface**: Dark surface (#1F1F1F) background with subtle border
- **Typography**: `{typography.body}` for announcement text, `{typography.label}` for "Read" button
- **Shape**: 9999px full pill radius
- **Spacing**: Compact internal padding, positioned centered below navigation
- **Composition**: Appears as dismissible or temporary banner

### Draggable text block

- **Anatomy**: Headline text with selection border and dimensional labels
- **Surface**: Transparent background, orange (#D2451A) 1px dashed border on selection
- **Typography**: `{typography.section-display}` in white, with orange dimensional annotations in `{typography.label}`
- **Shape**: Rectangular bounds matching text dimensions
- **Spacing**: Generous external margins, staggered vertical placement across sections
- **Composition**: Multiple blocks arranged in asymmetric cascade, suggesting freeform canvas arrangement
- **States**: Default (no border), selected (orange dashed border with width/height readouts)

### Floating UI component preview

- **Anatomy**: Functional UI elements (text input, radio group, scroll progress, theme toggle, OTP fields)
- **Surface**: Dark surface (#1F1F1F) or transparent with subtle borders
- **Typography**: `{typography.label}` for component names, `{typography.body}` for input values
- **Shape**: Varies by component type—rectangular inputs, circular radio buttons, linear progress bars
- **Spacing**: 0.5rem internal padding, positioned in peripheral canvas areas
- **Composition**: Scattered placement suggesting workspace organization rather than rigid grid
- **Variants**: Text Input, Radio Input (Speed/Craft options), Scroll Progress (35% shown), Theme Toggle (sun/moon/monitor icons), One-Time Password (six empty fields), Aspect Ratio (4×3 shown)

### Navigation bar

- **Anatomy**: Logo mark left, action button right
- **Surface**: Transparent or matching canvas
- **Typography**: `{typography.body}` for any text links
- **Shape**: Full-width, minimal height
- **Spacing**: 1.5rem horizontal padding
- **Composition**: Fixed or sticky top positioning

### Footer links

- **Anatomy**: Inline text links
- **Surface**: Transparent
- **Typography**: `{typography.body}` in muted text color
- **Spacing**: Compact horizontal separation
- **Composition**: Centered or left-aligned at page bottom

## Responsive behavior

The design prioritizes desktop viewport presentation, with component demonstrations and oversized headlines optimized for widths exceeding 1200px. At narrower viewports, the following adaptations should occur:

- Hero headlines should reduce from 10rem to 5rem, maintaining line breaks that preserve semantic grouping
- Draggable text blocks should stack vertically rather than maintaining staggered horizontal offsets
- Floating component previews should reposition to avoid overlapping body copy, potentially collapsing to a single column
- The announcement pill should remain centered but may truncate text with ellipsis
- Horizontal padding should reduce from 1.5rem to 1rem on narrow viewports

The dot grid background should scale proportionally or fade at smaller sizes to prevent visual noise. Touch targets for floating components should expand to minimum 44px for accessibility.

## Practical implementation guidance

### Preserve
- The extreme scale contrast between 10rem headlines and 0.75rem labels—this ratio defines the system's dramatic character
- Single-accent discipline: restrict warm color to #D2451A exclusively
- Flat surfaces without gradients, shadows, or backdrop blur
- The dotted grid background at low opacity as spatial reference
- Mono-spaced annotations for technical credibility during selection states

### Avoid
- Adding background images, illustrations, or photography—the system is intentionally image-free
- Introducing additional accent colors beyond orange and teal-cyan
- Rounding corners beyond 0.75rem for primary actions; full pills are reserved for special cases
- Card containers with borders or shadows for content grouping
- Generic placeholder text; every headline should carry product positioning weight

### Recommended build order
1. Establish the dark canvas (#000000) and dot grid background
2. Implement Abc Diatype at all scale tokens with correct weights and tracking
3. Build the hero section with centered headline, orange accent words, and primary CTA
4. Add floating component previews with correct surface colors and border treatments
5. Implement selection states with orange dashed borders and dimensional labels
6. Add announcement pill and navigation with persistent positioning
7. Polish spacing rhythm and section transitions

### Accessibility
- Ensure white text on black canvas meets WCAG AAA contrast standards (it does at these combinations)
- Provide visible focus indicators that match or exceed the orange selection border style
- Add `prefers-reduced-motion` support for any scroll-triggered animations
- Maintain keyboard operability for all floating component previews
- Consider a light mode variant using the documented surface and text color inversions, though none is visible in the current system

## Scope note

This guide covers the Noon landing page as a desktop marketing experience. Mobile layouts, component interaction states beyond selection, form validation, authentication flows, and the actual design tool interface are not represented in the supplied material. The floating UI components are demonstrative previews rather than functional inputs within this context. Times and Arial appear as detected system-level families but are not part of the intentional design typography.

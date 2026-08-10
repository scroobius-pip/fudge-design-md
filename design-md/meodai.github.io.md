# How meodai.github.io is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/meodai.github.io-design)

Last updated: 2026-08-10

## Captured pages

[![Querying Voxels section with dark 3D voxel sculpture, syntax-highlighted code block, and right-side settings panel with camera controls and style sliders](https://pin.fontofweb.com/8509?format=jpg)](https://design.withfudge.com/share/pin-8509)

[Querying Voxels section with dark 3D voxel sculpture, syntax-highlighted code block, and right-side settings panel with camera controls and style sliders](https://design.withfudge.com/share/pin-8509)

[![Rotation section showing white wireframe voxel L-shape, code example with rotation API, and settings panel with oblique camera type selected](https://pin.fontofweb.com/8508?format=jpg)](https://design.withfudge.com/share/pin-8508)

[Rotation section showing white wireframe voxel L-shape, code example with rotation API, and settings panel with oblique camera type selected](https://design.withfudge.com/share/pin-8508)

[![Boxes section featuring large white voxel cube grid, code snippet with addBox parameters, and interactive dimension sliders below the canvas](https://pin.fontofweb.com/8507?format=jpg)](https://design.withfudge.com/share/pin-8507)

[Boxes section featuring large white voxel cube grid, code snippet with addBox parameters, and interactive dimension sliders below the canvas](https://design.withfudge.com/share/pin-8507)

[![Hero section Creating an Engine with large display type, import code block with syntax highlighting, and explanatory paragraphs on dark canvas background](https://pin.fontofweb.com/8506?format=jpg)](https://design.withfudge.com/share/pin-8506)

[Hero section Creating an Engine with large display type, import code block with syntax highlighting, and explanatory paragraphs on dark canvas background](https://design.withfudge.com/share/pin-8506)

## Overview

This design system governs a technical documentation site for Heerich, a JavaScript voxel engine that renders 3D grids as 2D SVG. The visual language pairs a near-black canvas with warm off-white typography, creating a high-contrast, code-editor aesthetic that lets interactive voxel demonstrations and syntax-highlighted examples dominate the experience. The layout splits each section into a left column for live 3D previews and a right column for explanatory text and API code, with a persistent settings panel floating at the upper right for real-time parameter manipulation. The overall impression is that of a sophisticated developer tool—precise, minimal, and intentionally austere, where every element serves the documentation of geometric primitives and their programmatic control.

## Colors

The palette is built on extreme contrast: a warm near-black canvas against creamy off-white text, with cool syntax-highlighting accents drawn from a restrained spectrum.

| token | hex | use |
|---|---|---|
| canvas | #0E0E0E | Primary page background, code block backgrounds, voxel demo canvases |
| surface | #131313 | Settings panel background, elevated UI containers |
| surface-elevated | #252423 | Borders, dividers between sections, hairline separators |
| ink | #FBF4EA | Primary text, headings, body copy, navigation links |
| ink-muted | #928E88 | Secondary labels, disabled states, subtle UI text |
| ink-dim | #8B949E | Tertiary information, metadata, less prominent labels |
| accent-blue | #79C0FF | Code keywords, function names, API methods in syntax highlighting |
| accent-cyan | #A5D6FF | Code strings, property values, numeric literals |
| accent-purple | #D2A8FF | Code types, class names, import sources |
| accent-red | #FF7B72 | Code operators, punctuation, error emphasis |
| accent-salmon | #C9D1D9 | Code comments, secondary syntax elements |
| border | #252423 | Section dividers, panel borders, canvas outlines |

The warm undertone of the off-white ink (#FBF4EA) prevents the interface from feeling clinical against the cool dark canvas. Syntax highlighting uses a familiar code-editor palette where blue tones dominate active code elements, purple marks types and imports, and red handles operators and control flow. No light mode is present in the visible interface; the entire experience maintains this dark, focused environment.

## Typography

Three font families create a clear hierarchy: Aboreto for dramatic section headings, Work Sans for readable body text and UI labels, and SF Mono for all code and technical content.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Aboreto | 4.91875rem | 400 | 1 | -0.05em | Page title, major section introductions |
| section-display | Aboreto | 4.426875rem | 400 | 1 | -0.03em | Section headings like "BOXES", "ROTATION", "QUERYING VOXELS" |
| body | Work Sans | 0.984375rem | 300 | 1.65 | normal | Paragraph explanations, descriptions |
| body-large | Work Sans | 1.046875rem | 300 | 1.65 | normal | Introductory paragraphs, emphasized body text |
| label | Work Sans | 0.83625rem | 300 | 1.55 | normal | Settings panel labels, UI controls, navigation |
| code | SF Mono | 0.806675rem | 400 | 1.5 | normal | Code blocks, inline code, API examples |
| code-small | SF Mono | 0.74765rem | 300 | 1.65 | normal | Compact code annotations, secondary technical text |

Aboreto's geometric, all-caps character gives section headings monumental presence against the dark canvas. The tight letter spacing (-0.05em for hero, -0.03em for section) and exact line-height of 1 create stacked, architectural word forms. Work Sans at weight 300 provides light, airy readability for extended explanations without competing with the display type. SF Mono carries all technical content at a slightly smaller size, with weight 400 for primary code and 300 for annotations or secondary examples.

Verify licensing for these families before production use. SF Mono is attributed to Apple Inc.

## Layout

The page uses a two-column editorial layout with a fixed settings panel overlay. The left column (approximately 45% width) contains interactive voxel canvas demonstrations, while the right column (approximately 55% width) carries section headings, explanatory text, and code examples. A narrow settings panel floats at the upper right edge, providing persistent access to camera and style controls.

Section spacing follows a dramatic vertical rhythm. Major sections are separated by approximately 7.87rem of margin, creating clear breathing room between distinct topics. Within each section, the heading sits with substantial top padding (approximately 8.85rem) and a generous bottom margin (approximately 5.31rem), establishing hierarchical pause before body content begins. Body paragraphs maintain consistent bottom margins of roughly 0.935rem for comfortable reading flow.

Code blocks receive left indentation of approximately 3.935rem, visually aligning them with the content column while distinguishing them from body text. The voxel canvas areas include interactive controls below the visualization—sliders for dimensions, dropdowns for axis selection—placed with compact spacing (approximately 0.59rem padding) to keep focus on the 3D preview.

The settings panel uses a contained width with internal padding of roughly 0.787rem vertical and 1.05rem horizontal, stacking labeled controls with consistent gaps. Each control row pairs a text label with an input element, maintaining the site's light-weight typographic treatment even in functional UI.

## Visual language

The aesthetic is deliberately austere: maximum contrast, minimal decoration, and an emphasis on technical clarity. The near-black canvas (#0E0E0E) extends edge-to-edge without visible page margins, creating an immersive, application-like environment. Content floats within this void with careful attention to negative space.

Voxel demonstrations use a clean, architectural rendering style. The default appearance shows white or light-gray voxel faces with subtle stroke outlines, creating readable geometric forms against the dark background. When interactive controls adjust parameters—exposure, rotation, dimensions—the voxel forms update in real-time, with some modes showing neighbor-based coloring that shifts voxels through muted blues, teals, and warm tones based on their geometric properties.

Syntax highlighting in code blocks follows a consistent semantic coloring: comments in muted salmon (#C9D1D9), keywords and functions in blue (#79C0FF), strings and values in cyan (#A5D6FF), types and imports in purple (#D2A8FF), and operators in red (#FF7B72). This creates scannable, familiar code presentation that matches the expectations of developers accustomed to modern editor themes.

Horizontal rules using the border color (#252423) separate major content zones with 1px hairlines, providing subtle structure without visual weight. No shadows, gradients, or rounded corners appear on primary content containers; the only radius is a minimal 2px on inline code elements.

## Components

### Section heading

Anatomy: Large display text, occasionally stacked across two lines for longer phrases like "QUERYING VOXELS" or "CREATING AN ENGINE".

Surface and text color: Transparent background, ink (#FBF4EA) text.

Typography: section-display token for standard sections; hero-display token for the page title.

Shape and border: No border, no background, no radius.

Spacing: Extensive top padding (approximately 8.85rem) and bottom margin (approximately 5.31rem), creating dramatic separation from preceding content.

Composition: Left-aligned within the content column, full width of the text area.

### Voxel canvas

Anatomy: SVG-based 3D visualization area, interactive parameter controls below, optional code example to the right or below.

Surface and text color: Canvas (#0E0E0E) background, with voxel faces rendered in white or programmatically determined colors.

Typography: label token for control labels; code token for parameter readouts.

Shape and border: Subtle 1px top border (#252423) on the control area below the canvas.

Spacing: Canvas area fills available left-column width; controls sit with compact padding (approximately 0.59rem vertical, 0.787rem horizontal).

Composition: Canvas dominates the left portion of the section; controls anchor to the bottom edge of the canvas area.

Variants: Different visualization modes include wireframe outlines, solid fills with exposure-based coloring, and smooth solid rendering with adjustable stroke width.

### Code block

Anatomy: Multi-line code example with syntax highlighting, occasionally preceded by a comment line in italics.

Surface and text color: Canvas (#0E0E0E) background; syntax elements use the accent color palette.

Typography: code token for primary content; code-small for compact or secondary examples.

Shape and border: No visible border, no radius on the block container; inline code elements use 2px radius.

Spacing: Left indentation of approximately 3.935rem from content edge; internal padding creates comfortable reading margins.

Composition: Positioned in the right content column, aligned with body text above and below.

### Settings panel

Anatomy: Collapsible vertical panel with section headers (SETTINGS, CAMERA, STYLE), labeled controls, dropdown selects, sliders, and color swatches.

Surface and text color: Surface (#131313) background; ink (#FBF4EA) for section headers; ink-muted (#928E88) or ink-dim (#8B949E) for control labels.

Typography: label token for all text elements.

Shape and border: 1px border (#252423) on the panel container; no radius.

Spacing: Internal padding of approximately 0.787rem vertical, 1.05rem horizontal; control rows stack with tight gaps.

Composition: Fixed position at upper right, overlaying page content without affecting document flow.

Variants: Expanded state shows all controls; collapsed state hides content behind the header bar.

### Inline parameter controls

Anatomy: Slider with numeric readout, or dropdown select with current value displayed.

Surface and text color: Transparent or canvas background; ink text for values.

Typography: code-small token for numeric values; label token for dimension names.

Shape and border: Minimal visual chrome; sliders use simple track and thumb styling.

Spacing: Compact horizontal arrangement with label, control, and value in a single row.

Composition: Grouped below voxel canvases or within settings panel sections.

## Responsive behavior

The two-column layout likely collapses to a single column on narrower viewports, with voxel canvases stacking above their associated text and code content. The fixed settings panel should become a collapsible overlay or move to a bottom sheet on mobile to preserve screen real estate for the interactive demonstrations.

Text scaling should maintain the dramatic proportions of Aboreto display type; consider reducing hero-display to approximately 3rem and section-display to approximately 2.5rem on small screens to prevent excessive line wrapping. Body text at Work Sans weight 300 remains readable down to 0.875rem if necessary.

The settings panel's camera and style controls are essential to the interactive experience; ensure they remain accessible via a persistent toggle button when the panel is hidden. Touch targets for sliders and dropdowns should expand to at least 44px height on mobile devices.

## Practical implementation guidance

### Preserve
- The extreme dark-to-light contrast ratio; this is central to the site's technical, focused character.
- The three-tier type hierarchy with Aboreto for display, Work Sans for body, and SF Mono for code.
- The left-canvas, right-content section pairing that lets users see results alongside explanation.
- The syntax highlighting color semantics: blue for functions, purple for types, cyan for values, red for operators.
- The generous vertical spacing between sections that creates a scroll-driven, reveal-based reading experience.

### Avoid
- Adding background colors or cards behind content; the flat, edge-to-edge canvas is intentional.
- Rounded corners on major containers; keep the aesthetic sharp and architectural.
- Decorative imagery or illustrations; the voxel demos are the only visual content needed.
- Heavy borders or shadows; the 1px hairline is the maximum structural ornamentation.
- Saturated accent colors outside the syntax palette; the existing accents are deliberately muted against the dark canvas.

### Recommended build order
1. Establish the dark canvas background and base text color.
2. Implement the Aboreto display type for section headings with exact letter spacing.
3. Build the two-column section layout with responsive collapse behavior.
4. Add Work Sans body text with proper weight 300 and line height.
5. Integrate SF Mono for code blocks with syntax highlighting.
6. Create the settings panel as a fixed-position overlay with sectioned controls.
7. Implement voxel canvas containers with SVG rendering and parameter binding.
8. Add interactive controls (sliders, dropdowns) with compact styling.
9. Polish spacing rhythm and section dividers.

### Accessibility
- Ensure code blocks are keyboard-navigable and screen-reader friendly with proper `pre` and `code` semantics.
- Provide visible focus indicators on interactive controls in the settings panel; the default browser outline may be insufficient against the dark canvas.
- Consider adding a high-contrast mode option for users who need stronger differentiation than the warm off-white on near-black provides.
- Label all slider controls with visible value readouts, not just visual position.
- Maintain a minimum contrast ratio of 4.5:1 for all body text; the current ink (#FBF4EA) on canvas (#0E0E0E) exceeds 15:1, which is excellent.

## Scope note

This guide covers the visible documentation page for the Heerich voxel engine, including its section-based layout, interactive canvas demonstrations, settings panel, and syntax-highlighted code presentation. Mobile breakpoints, animation behavior, form validation states, and additional pages beyond this single documentation surface are not represented in the available material. The spacing and type scale values derive from the exact measurements present in the rendered interface.

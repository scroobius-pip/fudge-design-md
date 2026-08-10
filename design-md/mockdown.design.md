# How mockdown.design is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/mockdown.design-design)

Last updated: 2026-08-10

## Captured pages

[![Left sidebar with tool categories, selected blue Select button, and grid canvas area showing the ASCII wireframe editor's dark interface with monospace typography](https://pin.fontofweb.com/6673?format=jpg)](https://design.withfudge.com/share/pin-6673)

[Left sidebar with tool categories, selected blue Select button, and grid canvas area showing the ASCII wireframe editor's dark interface with monospace typography](https://design.withfudge.com/share/pin-6673)

[![Canvas with drawn wireframe elements including a Dialog box, Title card, and OK button rendered in blue ASCII-style outlines on a grid background](https://pin.fontofweb.com/6672?format=jpg)](https://design.withfudge.com/share/pin-6672)

[Canvas with drawn wireframe elements including a Dialog box, Title card, and OK button rendered in blue ASCII-style outlines on a grid background](https://design.withfudge.com/share/pin-6672)

## Overview

Mockdown is an ASCII wireframe editor built for technical designers and developers who need to sketch interface structures quickly. The visual system draws from terminal aesthetics and early computing interfaces: a near-black canvas, electric blue wireframe outlines, and a single monospace typeface throughout. Every element communicates through precise geometry rather than decorative styling. The interface divides into a narrow left sidebar containing tools and element categories, and a large grid-backed canvas where wireframe components are placed, resized, and connected. The design prioritizes information density and scanning speed over visual richness. There are no gradients, no shadows, no border effects—just flat color fields, hairline borders, and the rhythmic regularity of fixed-width characters. The blue accent color functions as both interactive highlight and drawing ink, creating a cohesive relationship between the tools you select and the marks you make.

## Colors

The palette is severely constrained, built from four interface colors that serve distinct functional roles. Black dominates as the working canvas, establishing maximum contrast for the blue wireframe elements. A slightly lifted near-black provides sidebar depth without introducing true hierarchy. Electric blue handles every interactive and drawn element. White appears only for text on active buttons.

| token | value | use |
|---|---|---|
| canvas | `#000000` | Main drawing area background, primary workspace ground |
| surface | `#0A0A0A` | Sidebar background, secondary panel ground |
| action | `#2563EB` | Selected tool buttons, wireframe outlines, active element borders |
| ink | `#FFFFFF` | Text on primary buttons, high-contrast labels |
| muted-ink | `#0A0A0A` | Text on inactive buttons in dark contexts |
| wireframe | `#2563EB` | All drawn elements: boxes, lines, arrows, dialog borders |

The color logic follows a simple rule: blue means active or drawn, dark means background or inactive, white means selected. The wireframe elements on canvas use the same blue as the selected "Select" button in the sidebar, visually linking tool state with output. No photographic or gradient colors appear in the interface; the palette is fully synthetic and optimized for extended screen work. The near-black sidebar (`#0A0A0A`) is just perceptibly lighter than the canvas, enough to separate panels without the distraction of a true mid-tone.

## Typography

A single monospace family drives every text element, reinforcing the technical, code-adjacent character of the tool. Jet Brains Mono appears in six distinct sizes that map to specific interface roles, from body text in the canvas to micro-labels for section headers and coordinate readouts.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| body | Jet Brains Mono | 1rem | 400 | 1.5 | normal | Canvas element text, dialog content, wireframe labels |
| label | Jet Brains Mono | 0.75rem | 500 | 1.333 | normal | Button text, tool names, category items |
| micro-label | Jet Brains Mono | 0.625rem | 600 | 1.5 | 0.05em | Section headers like "BASICS", "UI ELEMENTS", "DRAW" |
| display | Jet Brains Mono | 1.875rem | 400 | 1 | normal | Large canvas indicators, coordinate readouts |
| wireframe-text | Jet Brains Mono | 1rem | 400 | 1.5 | normal | Text inside drawn elements: "[ OK ]", "Dialog", "Title" |
| coordinate-readout | Jet Brains Mono | 0.625rem | 400 | 1.5 | normal | Status bar position indicators: "Ln 26, Col 20" |

The weight progression is purposeful: Regular (400) for readable body text and wireframe content, Medium (500) for interactive labels that need slight emphasis, Semibold (600) for the tiny uppercase section headers. The micro-label's positive letter spacing compensates for its small size and all-caps rendering, preventing visual compression. Line heights stay tight to maintain the compact vertical rhythm essential for a dense sidebar. The coordinate-readout role at 0.625rem Regular provides subtle status information without competing with the working area. Verify licensing for these families before production use.

## Layout

The interface follows a classic two-column application layout with fixed sidebar and fluid canvas. The sidebar occupies a narrow persistent strip along the left edge, while the remaining viewport becomes the drawing surface.

The sidebar contains three stacked regions: a top toolbar with Generate and the logo mark, a scrollable middle section organized by category, and a bottom action bar with history controls and the primary "Copy Markdown" button. Categories group related tools under uppercase micro-labels: BASICS, UI ELEMENTS, DRAW. Each category contains a vertical stack of tool buttons with consistent left-aligned icons and text.

The canvas fills all remaining space with a subtle grid pattern providing alignment reference without competing with content. Wireframe elements float above this grid as absolutely positioned boxes with blue borders. The coordinate system appears to use character-based or pixel-snapped positioning, appropriate for ASCII output.

Spacing derives from a 2px base unit, yielding a tight but legible system. Sidebar padding is 20px horizontal and 16px vertical. Tool buttons use 6px vertical and 10px horizontal padding as the default, with compact variants at 2px vertical and comfortable variants at 8px vertical. Section headers receive 0px horizontal and 10px horizontal padding with 2px bottom margin, creating the slight indent that separates categories. Element gaps of 8px separate related controls, while canvas padding of 16px provides breathing room at the viewport edge.

## Visual language

The aesthetic is deliberately austere: terminal minimalism adapted for a graphical tool. Every visual decision serves the goal of fast, precise wireframing without decorative interference.

Grid patterns on the canvas use faint dots or hairlines that disappear at working distance but provide alignment aid when needed. Wireframe elements render as pure outlines—no fills, no shadows, no rounded corners on drawn objects. The blue border color (`#2563EB`) is consistent across all element types: dialogs, buttons, cards, arrows, and freeform boxes. This uniformity reinforces that all elements are provisional sketches rather than finished designs.

Icons preceding tool names in the sidebar are simple line drawings, matching the wireframe style of the canvas output. The "Generate" lightning bolt, the "Select" cursor arrow, the geometric primitives for Box and Line—all share the same visual vocabulary as the elements they produce.

The active state uses filled blue buttons with white text, while inactive tools sit as dark buttons with near-black text. This binary state system eliminates ambiguity: you always know which tool is selected and what color your next element will use.

## Components

### Sidebar tool button

Anatomy: Icon (16px square, left-aligned) + label text, arranged horizontally within a full-width button container.

Surface and text color: Default state uses `canvas` background with `muted-ink` text. Selected state uses `action` background with `ink` text.

Typography: `{typography.label}` at 0.75rem, Medium weight.

Shape and border: 10px border radius, no border. The rounded corners are the only curved geometry in the interface, softening the sidebar slightly against the rigid canvas.

Spacing: Default padding of 6px vertical, 10px horizontal. Compact variant at 2px vertical for dense sections.

Composition: Full-width within sidebar, icon and text left-aligned with consistent 10px gap.

Variants: Selected (filled blue), default (dark), hover state not visible in supplied images.

### Canvas wireframe element

Anatomy: Rectangular border enclosing text labels and optional child elements. Dialogs show title bar with close control, content area, and action row. Cards show title and content boundary. Buttons render as bracketed text: `[ OK ]`, `[ Cancel ]`.

Surface and text color: Transparent fill, `wireframe` border and text.

Typography: `{typography.wireframe-text}` at 1rem, Regular weight. Bracket characters included in label text.

Shape and border: 1px solid `wireframe` border, no border-radius on drawn elements. Sharp corners maintain the ASCII aesthetic.

Spacing: Internal padding appears to be 8-12px based on visual proportion. Title bars separate from content with horizontal border.

Composition: Absolutely positioned on canvas grid. Dialogs stack with title bar at top, action buttons right-aligned in footer. Child elements nest visually through border enclosure.

### Section header

Anatomy: Uppercase text label, sometimes with expand/collapse chevron.

Surface and text color: Transparent background, `muted-ink` text at reduced opacity or direct `muted-ink` value.

Typography: `{typography.micro-label}` at 0.625rem, Semibold weight, 0.05em letter spacing.

Shape and border: No border, no background.

Spacing: 0px top, 10px horizontal padding, 2px bottom margin. Sits above its tool button stack with compact vertical separation.

Composition: Full-width, left-aligned, establishes category boundary in sidebar.

### Primary action button

Anatomy: Icon + text label, full-width at bottom of sidebar.

Surface and text color: `action` background, `ink` text.

Typography: `{typography.label}` at 0.75rem, Semibold weight for the "Copy Markdown" variant.

Shape and border: 10px border radius, no border.

Spacing: Comfortable padding at 8px vertical, 12px horizontal.

Composition: Fixed to bottom of sidebar, full-width, prominent placement for export action.

### Bottom toolbar

Anatomy: Horizontal row of icon buttons: undo, redo, delete, grid toggle, refresh/reset.

Surface and text color: `surface` background, `muted-ink` icons.

Typography: No text, icon-only.

Shape and border: Square or slightly rounded buttons, no visible border.

Spacing: Compact 6px padding, clustered at bottom left.

Composition: Inline row, left-aligned, above the primary action button.

## Responsive behavior

The interface appears optimized for desktop use given the precision required for canvas placement and the density of the sidebar. No mobile layouts are visible in the supplied images.

For smaller viewports, the sidebar should collapse to an icon-only rail or slide-out panel, preserving the 2px grid alignment of the canvas. The monospace body text at 1rem remains readable down to approximately 320px width, though wireframe element labels may require truncation or scaling.

Touch targets for sidebar buttons meet minimum 44px height when using the comfortable 8px vertical padding variant. The default 6px padding yields 28px total height, which may need expansion for touch interfaces.

Canvas zoom controls, if implemented, should maintain the grid snapping behavior to preserve ASCII output fidelity. The coordinate readout visible in images ("Ln 26, Col 20") suggests character-based positioning that should adapt to viewport scale rather than absolute pixels.

## Practical implementation guidance

### Preserve
- The strict four-color palette: black canvas, near-black sidebar, electric blue for all active and drawn elements, white for selected button text.
- Single monospace family throughout; do not introduce proportional fonts for "polish."
- Sharp corners on all canvas elements; reserve rounded corners exclusively for sidebar buttons.
- The bracket convention for button elements: `[ Label ]` with space between bracket and text.
- Grid background on canvas at all times; it is functional, not decorative.

### Avoid
- Gradients, shadows, or any depth effects that would compromise the flat wireframe aesthetic.
- Rounded corners on drawn elements; they break the ASCII illusion.
- Color variation in wireframe elements; all outlines should use the same blue.
- Decorative icons that do not directly represent the element type being created.
- Mid-tone grays that would introduce visual hierarchy where none is intended.

### Recommended build order
1. Establish the 2px base grid and implement the four-color CSS custom properties.
2. Load Jet Brains Mono and set up the type scale with the six defined roles.
3. Build the sidebar structure: scrollable category list, fixed bottom toolbar, fixed primary action.
4. Implement tool button states with exact 10px radius and padding variants.
5. Create the canvas with dotted grid background and absolute positioning system.
6. Build wireframe element renderers: box, dialog with title bar, button with brackets, arrow.
7. Add selection state management linking sidebar active tool to canvas drawing color.
8. Implement coordinate tracking and status bar readout.

### Accessibility
- The blue-on-black wireframe elements (`#2563EB` on `#000000`) should be verified against WCAG contrast requirements; the 4.5:1 ratio for normal text may be marginal at 1px borders.
- All interactive buttons require visible focus indicators; consider a 2px outline offset or background shift since the default state has no border.
- The grid background should respect `prefers-reduced-motion` and `prefers-contrast` settings, potentially increasing dot opacity for visibility.
- Tool buttons need `aria-pressed` or similar state communication for the selected variant.
- Keyboard navigation through the sidebar should follow DOM order with visible focus rings.

## Scope note

This guide covers the desktop wireframe editor interface visible on the landing page, including the sidebar tool palette, canvas grid, and wireframe element rendering system. Mobile layouts, animation behavior, export functionality beyond the "Copy Markdown" button, and any settings or preference panels are not represented in the supplied images. The color and spacing values derive from direct interface measurement rather than photographic interpretation.

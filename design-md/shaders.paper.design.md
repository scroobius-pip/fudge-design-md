# How shaders.paper.design is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/shaders.paper.design-design)

Last updated: 2026-08-10

## Captured pages

[![Dark-themed documentation table showing common props with parameter names, descriptions, types, and value ranges for the fluted glass shader effect.](https://pin.fontofweb.com/8567?format=jpg)](https://design.withfudge.com/share/pin-8567)

[Dark-themed documentation table showing common props with parameter names, descriptions, types, and value ranges for the fluted glass shader effect.](https://design.withfudge.com/share/pin-8567)

[![Shader props table listing image, color, and distortion parameters with their types and accepted values for the fluted glass filter.](https://pin.fontofweb.com/8566?format=jpg)](https://design.withfudge.com/share/pin-8566)

[Shader props table listing image, color, and distortion parameters with their types and accepted values for the fluted glass filter.](https://design.withfudge.com/share/pin-8566)

[![Full fluted glass shader demo page with live preview of distorted flower image, parameter control panel with sliders and presets, and code installation section.](https://pin.fontofweb.com/8565?format=jpg)](https://design.withfudge.com/share/pin-8565)

[Full fluted glass shader demo page with live preview of distorted flower image, parameter control panel with sliders and presets, and code installation section.](https://design.withfudge.com/share/pin-8565)

[![Paper Shaders homepage showing hero section with tagline, npm install command, and grid of image filter thumbnails including paper texture, fluted glass, water, and halftone](https://pin.fontofweb.com/7130?format=jpg)](https://design.withfudge.com/share/pin-7130)

[Paper Shaders homepage showing hero section with tagline, npm install command, and grid of image filter thumbnails including paper texture, fluted glass, water, and halftone](https://design.withfudge.com/share/pin-7130)

## Overview

Paper Shaders is a technical documentation and showcase site for ultra-fast, zero-dependency WebGL shader effects. The design language is deliberately dark and utilitarian, creating a high-contrast environment where shader previews and code examples take center stage. The visual system pairs a warm off-white text color against a pure black canvas, with subtle gray surfaces for elevated UI elements like parameter control panels and code blocks.

The site serves dual purposes: it is both a marketing landing page and deep technical documentation. The homepage presents shader effects as browsable image thumbnails, while individual shader pages provide live interactive previews, exhaustive parameter tables, and copy-paste installation instructions. The design prioritizes information density and readability for developers, with monospace typography for code and technical values, and clean sans-serif for explanatory text.

## Colors

The color system is intentionally restrained, built around a dark-mode foundation with minimal accent variation. Every color serves a functional role in the technical interface.

| token | hex | use |
|---|---|---|
| canvas | #000000 | Page background, deepest surface layer |
| surface | #3C3C3C | Elevated panels, control backgrounds, table header rows |
| surface-elevated | #777775 | Active controls, slider tracks, secondary buttons |
| ink | #F0EFE4 | Primary text, headings, body copy, table content |
| ink-bright | #FEFEFE | High-emphasis text, button labels on dark backgrounds, code values |

The canvas color is pure black, creating maximum contrast with the warm off-white ink. This pairing reduces eye strain during extended code reading sessions and allows shader previews with bright colors to appear luminous against the dark environment. The surface tokens form a stepped gray scale for UI hierarchy: surface for panels and tables, surface-elevated for interactive elements like sliders and preset buttons.

No light mode variant is visible in the supplied material. The warm tones that appear in shader preview photography derive from the source imagery rather than the UI palette.

## Typography

The type system uses two families: Matter for all interface and reading text, and Paper Mono for code, parameter values, and technical labels. Matter is loaded as Matter-Thin at weight 400, with heavier weights at 500 for section headings and 330 for hero display sizes. Paper Mono appears in Regular weight only.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Matter | 2.25rem | 300 | 1.11 | normal | Page titles, hero headings |
| section-display | Matter | 1.75rem | 500 | 1.14 | normal | Section headings, shader names |
| body | Matter | 1.125rem | 400 | 1.33 | normal | Paragraphs, descriptions, table body |
| body-large | Matter | 1.125rem | 400 | 1.56 | normal | Hero taglines, longer reading passages |
| label | Matter | 0.875rem | 400 | 1.43 | normal | Captions, thumbnail labels, secondary text |
| code | Paper Mono | 0.7875rem | 400 | 1.43 | normal | Inline code, parameter values in tables |
| code-small | Paper Mono | 0.6875rem | 400 | 1.33 | normal | Dense code blocks, installation commands |
| mono-ui | Paper Mono | 1rem | 400 | 1.5 | normal | Button labels, control panel text |

Matter is designed by Martin Vácha and published by Displaay Type Foundry Sro. Paper Mono is designed by Guido Ferreyra and Javier Quintana Godoy. Verify licensing for these families before production use.

The type scale is built on a 2px relative unit. Hero display at 36px (2.25rem) and section display at 28px (1.75rem) anchor the hierarchy. Body text at 18px (1.125rem) provides comfortable reading for documentation. Paper Mono sizes are slightly smaller than their Matter counterparts at equivalent roles, reflecting the visual density of monospace characters.

## Layout

The layout follows a centered single-column pattern with generous horizontal margins. Content is constrained to a readable maximum width and centered within the viewport.

The global container uses horizontal padding of 48px (3rem) on each side, with a bottom padding of 96px (6rem) on major sections. The content width is controlled through auto margins of 68.5px (approximately 4.28rem) on each side, creating a centered column that feels spacious on wide screens without losing readability.

Section spacing follows a consistent rhythm. Major content blocks are separated by 40px (2.5rem) top margins. Headings receive 32px (2rem) bottom margins to create clear visual separation from subsequent content. The homepage hero section uses 64px (4rem) bottom padding to establish breathing room before the filter grid.

The shader detail page uses a two-column layout at desktop widths: the main content area holds the live preview, installation instructions, and documentation tables, while a fixed or sticky sidebar contains the parameter control panel. This sidebar has its own internal padding and rounded corners, creating a floating panel appearance against the black canvas.

Grid layouts for thumbnail collections use consistent gaps, with each thumbnail receiving rounded corners and a label beneath. The homepage shows four image filters per row, with logo animations displayed in a separate section below.

## Visual language

The visual language is technical and precise, with a gallery-like presentation of shader effects. Every element serves the goal of showcasing WebGL capabilities while providing clear developer documentation.

Shader previews are the dominant visual elements. They display photographic content transformed by real-time shader effects—fluted glass distortions, water ripples, halftone patterns, and paper textures. These previews use the full color range of the source photography, creating vibrant focal points against the dark interface. Each preview is framed with subtle rounded corners and accompanied by a short descriptive label in Matter.

Code blocks use a slightly elevated surface color with rounded corners, creating contained environments for installation commands and implementation examples. The copy-to-clipboard button sits at the right edge of code block headers, providing immediate utility without visual clutter.

Parameter tables are dense and information-rich. They use alternating row treatments with subtle border separators, column headers in a slightly elevated surface tone, and monospace typography for technical values. The table structure emphasizes scannability: parameter names are left-aligned, descriptions wrap as needed, types are indicated with pipe-separated values, and accepted ranges appear in the rightmost column.

Control panels for live shader previews use a compact vertical stack of labeled inputs. Sliders show numeric values to two decimal places. Color inputs display as small swatches with hex values. Dropdown selectors use custom styling with downward chevrons. Preset buttons appear in a horizontal row at the panel top, using the surface-elevated color for inactive states.

## Components

### Navigation Bar

- **Anatomy**: Logo mark with "Paper" wordmark on the left, GitHub icon link on the right
- **Surface**: Transparent background over canvas, no border
- **Typography**: Label token for wordmark, with a small square icon preceding the text
- **Spacing**: Horizontal padding matches global container at 48px, vertical padding of 20px
- **Composition**: Flex row with space-between alignment

### Hero Section

- **Anatomy**: Centered heading, tagline paragraph, and install command button
- **Surface**: Canvas background, no additional surface
- **Typography**: Hero-display token for "paper shaders" title, body-large for tagline, mono-ui for the install command
- **Shape**: Install command uses rounded panel corners with a copy icon button at the right edge
- **Spacing**: 64px bottom padding, 32px gap between title and tagline, 8px margin below tagline
- **Composition**: All elements center-aligned, maximum width constrained for readability

### Shader Thumbnail Card

- **Anatomy**: Rounded image preview with shader effect applied, text label below
- **Surface**: No explicit surface; image sits directly on canvas
- **Typography**: Label token for the effect name, center-aligned below image
- **Shape**: 12px (0.75rem) border radius on images
- **Spacing**: Consistent gap between thumbnails in grid layout
- **Composition**: Square or near-square aspect ratios, uniform sizing across grid

### Parameter Control Panel

- **Anatomy**: Vertical stack of labeled controls including sliders, color pickers, dropdowns, and preset buttons
- **Surface**: Surface token for panel background, with rounded panel corners
- **Typography**: Label token for parameter names, code-small for numeric values, mono-ui for dropdown selections
- **Shape**: 6px (0.375rem) border radius on panel, 3px (0.1875rem) on individual buttons
- **Spacing**: Internal padding of 10px, parameter rows stacked with consistent vertical rhythm
- **Composition**: Fixed width sidebar, right-aligned on desktop, full-width on narrow viewports
- **Variants**: Preset buttons in horizontal row at top; sliders with numeric readouts; color swatches with hex inputs

### Props Table

- **Anatomy**: Column headers for name, description, type, and values; body rows for each parameter
- **Surface**: Surface token for header row, canvas for body rows, with 1px top borders in ink color separating rows
- **Typography**: Body token for descriptions, code token for parameter names and type values
- **Shape**: No border radius on table; full-width within content column
- **Spacing**: 10px vertical padding on cells, horizontal padding for readability
- **Composition**: Four-column layout with name and description taking majority width

### Code Block

- **Anatomy**: Container with optional header label, copy button, and preformatted code content
- **Surface**: Slightly elevated from canvas, using a dark gray surface with rounded corners
- **Typography**: Code-small for block content, label for section headers like "installation" and "code"
- **Shape**: Rounded panel corners
- **Spacing**: Generous internal padding, copy button positioned at right of header area
- **Composition**: Full-width within content column, stacked vertically with other documentation sections

### Action Button

- **Anatomy**: Text label with optional icon, in two visible variants
- **Surface**: Surface-elevated background for primary actions, transparent for text links
- **Typography**: Mono-ui for button labels on dark backgrounds, body for text links
- **Shape**: 3px (0.1875rem) border radius for small buttons, 6px (0.375rem) for larger panel buttons
- **Spacing**: Horizontal padding of 8px, negative margin adjustments for alignment in some contexts
- **Variants**: Copy link and open Paper buttons use icon-plus-text pattern; preset buttons use compact horizontal arrangement

## Responsive behavior

The layout adapts from a wide desktop presentation to narrower viewports through progressive simplification. At desktop widths, the shader detail page maintains its two-column layout with the control panel fixed to the right. The homepage thumbnail grid shows four items per row.

As viewport width decreases, the thumbnail grid should reduce to two columns and eventually a single column. The control panel on shader pages should stack below the main content rather than remaining sidebar-fixed. Table layouts should allow horizontal scrolling rather than compressing column widths, preserving the scannability of parameter documentation.

Typography remains consistent across breakpoints. The relative unit scale ensures that text sizes maintain their proportional relationships. Horizontal page padding of 48px may reduce on very narrow viewports to preserve content width.

No mobile-specific breakpoints are confirmed in the supplied material. Implementers should test at standard widths: 768px for tablet transition, 480px for mobile.

## Practical implementation guidance

### Preserve
- The pure black canvas with warm off-white text; this high contrast is central to the technical aesthetic
- The two-family type system: Matter for reading, Paper Mono for code and values
- Rounded corners on images and panels; the 12px thumbnail radius and 6px panel radius are distinctive
- The parameter table structure with four columns: name, description, type, values
- Live preview panels with real-time shader output and synchronized controls

### Avoid
- Adding decorative gradients or background patterns behind shader previews; the black canvas lets effects shine
- Using border colors other than the subtle ink tone for table separators
- Increasing font weight on Matter beyond 500; the thin weights are intentional
- Crowding the control panel with too many preset buttons; the current compact row is the maximum density

### Recommended Build Order
1. Establish the black canvas and warm ink text color system
2. Implement Matter and Paper Mono font loading with correct weights
3. Build the global container with 48px horizontal padding and centered content column
4. Create the navigation bar with logo and external link icon
5. Develop the hero section with centered typography and install command block
6. Construct the thumbnail grid for homepage shader browsing
7. Build the shader detail page layout with main content and sidebar control panel
8. Implement parameter tables with proper column structure and monospace values
9. Add code blocks with copy functionality
10. Polish interactive controls: sliders, color pickers, dropdowns, and preset buttons

### Accessibility
- Ensure all text meets WCAG AA contrast ratios against the black canvas; the ink and ink-bright tokens do
- Provide visible focus indicators on interactive controls in the parameter panel
- Add aria-labels to icon-only buttons like copy-to-clipboard and GitHub link
- Consider reducing motion for shader previews when prefers-reduced-motion is active
- Ensure parameter tables are navigable by screen readers with proper header associations

## Scope note

This guide covers the homepage and shader detail page surfaces visible in the supplied material. Mobile layouts, additional shader effect pages beyond fluted glass and grain gradient, hover and focus states for interactive controls, and animation specifications for logo effects are not included. The control panel's exact slider styling and color picker implementation are inferred from visible structure rather than confirmed pixel measurements. Verify licensing for Matter and Paper Mono families before production use.

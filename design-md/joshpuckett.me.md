# How joshpuckett.me is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/joshpuckett.me-design)

Last updated: 2026-08-10

## Captured pages

[![Personal homepage with dark canvas, serif nameplate, and project list with muted descriptions](https://pin.fontofweb.com/8402?format=jpg)](https://design.withfudge.com/share/pin-8402)

[Personal homepage with dark canvas, serif nameplate, and project list with muted descriptions](https://design.withfudge.com/share/pin-8402)

[![DialKit Photo Stack control panel with dark surface, segmented controls, and spring curve graph](https://pin.fontofweb.com/8401?format=jpg)](https://design.withfudge.com/share/pin-8401)

[DialKit Photo Stack control panel with dark surface, segmented controls, and spring curve graph](https://design.withfudge.com/share/pin-8401)

## Overview

Josh Puckett's personal site presents a stark, editor-like aesthetic that treats the browser as a canvas for precise typographic and interactive craft. The homepage operates as a minimal portfolio: a near-black field with a single column of text, where a serif nameplate anchors the top and a structured project list occupies the lower portion. The DialKit tool interface extends this vocabulary into a dense control-panel layout, maintaining the dark theme while introducing interactive surfaces, segmented controls, and data visualization. The system favors restraint over ornament—every element serves a navigational or functional purpose, and the limited palette amplifies the hierarchy between primary content, secondary metadata, and interactive states. The overall impression is of a designer's workspace made public: confident, uncluttered, and technically precise.

## Colors

The color system is built on a near-monochrome dark foundation with a single warm accent family. Two distinct surface depths create spatial hierarchy without introducing chromatic noise.

| token | value | use |
|---|---|---|
| canvas | `#0A0A0A` | Primary page background; establishes the dark field |
| surface | `#212121` | Elevated panels, control rows, and secondary containers |
| surface-elevated | `#000000` | Deepest shadows, segmented control inactive states |
| ink | `#FAFAFA` | Primary text, headings, active control labels, links |
| muted-ink | `#A3A3A3` | Secondary descriptions, parameter values, inactive metadata |
| border | `#FFFFFF` | Hairline dividers at 1px on elevated surfaces |

The homepage uses canvas as a continuous field with no visible panel boundaries, allowing the typography to float with maximum contrast. The DialKit interface introduces surface as a contained panel with rounded corners, where parameter rows sit flush against each other with subtle tonal separation. Border appears sparingly—only as a 1px hairline on specific elevated elements in the tool interface, not as a structural grid. The absence of hue across both contexts means that any future accent color would carry significant semantic weight; the current system relies entirely on value contrast and typographic weight for hierarchy.

## Typography

Three type families divide the labor: Signifier, a refined serif, handles display and identity moments; System manages body text and most functional labels; and System-Systemui appears in the header navigation context. This pairing creates tension between editorial presence and interface utility.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| nameplate | Signifier | 1.5rem | 400 | 1.5 | -0.01em | Homepage identity, section headings |
| section-display | Signifier | 1.5rem | 400 | 1.5 | -0.01em | Project category labels, tool panel titles |
| body | System | 1rem | 400 | 1.625 | normal | Paragraphs, descriptions, link lists |
| label | System | 0.8125rem | 500 | 1.5 | normal | Control labels, button text, metadata keys |
| caption | System | 0.9375rem | 600 | 1.5 | -0.01em | Emphasized inline terms, small headings |
| navigation | System-Systemui | 1rem | 400 | 1.625 | normal | Header links, top-level navigation items |

Signifier appears at 24px with a comfortable 36px line height and subtle negative tracking, giving the nameplate and section headings a crisp, contemporary serif presence without historical heaviness. The body size of 16px at 26px line height provides generous reading rhythm for the homepage's biographical and project content. The label size at 13px with medium weight is optimized for dense control-panel layouts where multiple parameters must scan quickly. Caption at 15px with semibold weight handles emphasized terms within body contexts, such as company names or technical parameters. System-Systemui at 16px serves the header navigation with the same metrics as body text, maintaining consistency across the functional layer.

Signifier is designed by Kris Sowersby of Klim Type Foundry. Verify licensing for these families before production use.

## Layout

The homepage employs a single-column centered layout with generous but not excessive margins. Content occupies a narrow measure—approximately 640px at desktop scale—creating an intimate reading experience that resists full-bleed expansion. The nameplate sits at the top with a short horizontal rule beneath it, establishing a deliberate pause before the biographical text begins. Project listings stack vertically with consistent vertical rhythm, each item comprising a bold link title and a muted description line.

The DialKit interface inverts this spaciousness into a dense, information-rich panel. The control surface uses a fixed or modal width with internal scrolling, organizing parameters into collapsible sections with disclosure arrows. Each parameter row spans the full panel width, placing the label at the left and the value or control at the right. This two-column internal grid maintains alignment across variable content lengths. Section headers like "Back Photo," "Shadow," and "Transition Spring" introduce hierarchical breaks without heavy visual weight.

Spacing tokens derive from a 2px base unit. The homepage uses 24px (12 units) for paragraph spacing and 40px (20 units) for major section separation. The control panel uses 12px (6 units) for internal padding on rows, 16px (8 units) for button padding, and 40px (20 units) for panel edge padding. The system avoids arbitrary gaps; every spacing decision reinforces the structural grid.

## Visual language

The visual language is characterized by editorial restraint and tool-like precision. The homepage offers no imagery, no decorative graphics, and no background texture—only type and space. This absence of visual noise signals confidence in the work itself, which is accessed through the project links. The horizontal rules beneath headings are short, thin, and unobtrusive, functioning as section anchors rather than decorative dividers.

In the DialKit interface, the visual language shifts to data density while maintaining the same tonal restraint. The spring curve graph is the sole illustrative element, rendered as a simple line chart with grid lines on the dark surface. Controls favor direct manipulation: sliders with visible tracks, segmented toggles with clear active states, and numeric inputs with immediate feedback. The panel's rounded corners (12px) soften the technical density without becoming friendly or casual.

Shadow appears once in the system: a deep, diffuse shadow (`rgba(0, 0, 0, 0.5) 0px 8px 32px`) that elevates the control panel above its context. This is the only non-flat depth cue in either context. The homepage rejects shadow entirely, relying on spatial isolation and contrast for hierarchy.

## Components

### Project item

- **Anatomy**: Linked title in body weight and size, followed by description in muted-ink at the same size
- **Surface**: Transparent; sits directly on canvas
- **Typography**: Title uses `{typography.body}` in ink; description uses `{typography.body}` in muted-ink
- **Spacing**: 24px bottom margin between items, 4px top margin on description creating tight coupling with title
- **Composition**: Full-width within content measure; title and description stack vertically with no horizontal separation
- **Variants**: Standard and first-item (no additional top spacing)

### Control panel

- **Anatomy**: Container with rounded corners, internal sections with collapsible headers, parameter rows, and action buttons
- **Surface**: `{colors.surface}` background, `{rounded.panel}` border radius
- **Typography**: Panel title uses `{typography.nameplate}`; section headers use `{typography.label}` in ink; parameter labels use `{typography.label}` in muted-ink
- **Spacing**: 40px padding on all sides; 12px horizontal padding on internal rows; 10px bottom padding on parameter groups
- **Shape**: 12px radius on container; 8px on internal rows and buttons; 14px on pill-shaped segmented controls
- **Composition**: Vertical stack with full-width sections; parameter rows use implicit two-column layout with label left and value right

### Segmented control

- **Anatomy**: Container with multiple mutually exclusive options, one active
- **Surface**: `{colors.surface-elevated}` for inactive segments; `{colors.surface}` or elevated treatment for active segment
- **Typography**: `{typography.label}` in ink
- **Shape**: `{rounded.control}` on container; individual segments may have internal separation
- **Spacing**: 8px vertical padding, 12px horizontal padding per segment
- **States**: Active segment receives tonal elevation; inactive segments remain flat

### Parameter row

- **Anatomy**: Label left, value or control right; optional slider track
- **Surface**: `{colors.surface}` background, `{rounded.control}` radius
- **Typography**: Label uses `{typography.label}` in muted-ink; value uses `{typography.label}` in ink or numeric variant
- **Spacing**: 10px vertical padding, 12px horizontal padding; 2px internal padding on slider containers
- **Composition**: Flex row with space-between justification; slider tracks occupy partial width when present

### Action button

- **Anatomy**: Text label with optional icon prefix
- **Surface**: `{colors.surface}` background, `{rounded.control}` radius; or transparent with border
- **Typography**: `{typography.label}` in ink
- **Spacing**: 10px vertical, 16px horizontal for primary; 8px vertical, 12px horizontal for compact
- **Variants**: Filled (dark surface), outlined (transparent with border), and icon-only

## Responsive behavior

The homepage's narrow single-column layout adapts gracefully to reduced widths by maintaining its measure and allowing margins to compress. The content does not reflow into multiple columns at any visible breakpoint; the design assumes a reading experience centered in the viewport.

The DialKit control panel likely maintains a fixed width on larger screens, behaving as a modal or sidebar overlay. On smaller viewports, the panel should transition to full-width with reduced padding (from 40px to 24px or 16px) to preserve the density of parameter rows. The two-column parameter layout may need to stack vertically on very narrow screens, with labels above controls.

The type scale does not appear to shift across contexts; the 16px body and 13px label sizes are chosen for legibility at standard device pixel densities. If implementing for high-density mobile screens, maintain the absolute pixel sizes rather than scaling proportionally.

## Practical implementation guidance

### Preserve
- The stark contrast between near-black canvas and warm off-white ink; this is the system's signature
- The generous line height on body text (26px for 16px type) that creates the homepage's measured reading rhythm
- The precise pairing of Signifier for identity moments and system ui for all functional text
- The rounded-corner vocabulary: 12px for panels, 8px for controls, 14px for pills
- The single deep shadow on the control panel; do not add shadows elsewhere

### Avoid
- Introducing additional colors beyond the monochrome family; the system derives its character from restraint
- Using Signifier for body text or interface labels; it is reserved for display and identity
- Adding background images, gradients, or textures to the homepage canvas
- Expanding the content measure beyond approximately 640px; the narrow column is essential to the intimate tone
- Creating heavy borders or separators; rely on spacing and tonal contrast instead

### Recommended build order
1. Establish the dark canvas (`#0A0A0A`) and load Signifier and system ui font files
2. Implement the homepage single-column layout with nameplate, horizontal rule, and biographical text
3. Build the project list component with linked titles and muted descriptions
4. Create the control panel container with 12px radius and 40px padding
5. Implement parameter rows with two-column layout and slider controls
6. Add segmented controls and button variants
7. Polish with the single shadow treatment and spacing refinements

### Accessibility
- Ensure the `#FAFAFA` on `#0A0A0A` combination meets WCAG AAA contrast for normal text (it exceeds 7:1)
- The muted-ink (`#A3A3A3`) on canvas should be verified for large text or UI component compliance; it may need adjustment for small labels
- Provide visible focus indicators on all interactive elements; the current flat design risks invisible focus states
- Ensure the DialKit panel is keyboard-navigable with logical tab order through parameter rows
- Consider a light mode variant for users with photophobia, as the current system offers no alternative

## Scope note

This guide covers the personal homepage and DialKit Photo Stack tool interface as visible in the supplied images. Other project subpages, additional DialKit modules, and any mobile-specific layouts are not represented. Motion behavior, hover states, and form validation styling are not documented. Measurements are exact values from the retained interface data.

# How app.revenuecat.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/app.revenuecat.com-design)

Last updated: 2026-08-10

## Captured pages

[![SDK installation page with split-panel layout showing framework selector, API key field, code snippet with syntax highlighting, and action buttons on dark background](https://pin.fontofweb.com/4612?format=jpg)](https://design.withfudge.com/share/pin-4612)

[SDK installation page with split-panel layout showing framework selector, API key field, code snippet with syntax highlighting, and action buttons on dark background](https://design.withfudge.com/share/pin-4612)

[![Project survey form with stacked text inputs and dropdowns, section heading, descriptive text, and submit button on dark background](https://pin.fontofweb.com/4611?format=jpg)](https://design.withfudge.com/share/pin-4611)

[Project survey form with stacked text inputs and dropdowns, section heading, descriptive text, and submit button on dark background](https://design.withfudge.com/share/pin-4611)

## Overview

The RevenueCat app dashboard presents a developer-focused interface built around SDK integration and project configuration. The visual system employs a near-black canvas with layered gray surfaces that create depth without introducing visual noise. Purple serves as the singular accent color, reserved exclusively for primary actions and active states, which makes progress buttons and selected tabs immediately scannable against the dark environment. The interface prioritizes code readability through dedicated syntax-highlighted blocks with their own slightly darker surface treatment, while forms and selectors follow a consistent pattern of muted borders and generous internal spacing. The overall impression is of a technical tool that respects developer attention: information density is high, but hierarchy is clear through surface elevation, type weight, and the disciplined use of color.

## Colors

The palette is built on a dark-mode foundation with three distinct surface layers and a single vibrant accent. Every color serves a specific structural or interactive role.

| token | value | use |
|---|---|---|
| canvas | `#1a1a1a` | Page background, deepest layer behind all content |
| surface | `#242424` | Card backgrounds, input fields, secondary containers |
| surface-elevated | `#2a2a2a` | Hover states on interactive surfaces, subtle elevation |
| ink | `#e8e8e8` | Primary text, headings, active navigation |
| ink-muted | `#a0a0a0` | Secondary text, descriptions, placeholders, inactive tabs |
| action | `#7c8cfc` | Primary buttons, active tab indicators, links |
| action-hover | `#6b7beb` | Primary button hover state |
| border | `#3a3a3a` | Visible input borders, card outlines, dividers |
| border-subtle | `#2e2e2e` | Code block borders, inactive field states |
| code-surface | `#1e1e1e` | Dedicated background for syntax-highlighted code |
| success | `#4ade80` | Confirmation states, optional positive feedback |

The dark surfaces progress from canvas to surface to surface-elevated in 4-6 lightness steps, creating a shallow but perceptible depth system. The action purple is a cool blue-violet that maintains visibility against all dark backgrounds without the harshness of pure blue. Ink-muted is used strategically to de-emphasize explanatory text and placeholder content, ensuring that actionable elements and primary labels draw the eye first. The code-surface sits between canvas and surface in value, establishing code blocks as distinct zones without breaking the overall dark continuity. Borders are consistently desaturated, functioning as structural hairlines rather than visual accents.

## Typography

The type system relies on a single sans-serif family with weight and size variation to establish hierarchy. All sizes are derived from a 4px base unit.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Inter | 2rem | 700 | 1.2 | -0.02em | Page titles, major section headings |
| section-display | Inter | 1.5rem | 600 | 1.3 | -0.01em | Form headings, panel titles |
| body | Inter | 1rem | 400 | 1.5 | 0 | Descriptions, primary content |
| body-small | Inter | 0.875rem | 400 | 1.5 | 0 | Input values, code content, metadata |
| label | Inter | 0.75rem | 500 | 1.4 | 0.01em | Button text, field labels, badges |
| navigation | Inter | 0.875rem | 500 | 1.4 | 0 | Tab labels, secondary navigation |

The hierarchy moves from hero-display through section-display to body with clear 0.5rem decrements, while label and navigation occupy the smaller end of the scale for interface chrome. Negative tracking on display sizes tightens word spacing for headings without affecting legibility. The 500 weight for labels and navigation provides enough emphasis to distinguish interactive elements from body text without competing with bold headings. Code content uses body-small at a fixed weight, with syntax coloring providing the necessary differentiation rather than typographic variation. Verify licensing for these families before production use.

## Layout

The interface uses a split-panel layout for its primary workflow pages, with configuration controls on the left and live code output on the right. This creates a natural reading flow from selection to result, mirroring the mental model of choosing options and receiving generated code.

The left panel occupies approximately 40% of the viewport width and contains vertically stacked form elements: framework selectors, API key displays, and action buttons. Elements within this panel follow a consistent 1.5rem vertical rhythm, with 0.5rem gaps between related label-input pairs. The right panel takes the remaining 60% and centers its code block vertically with generous surrounding negative space, emphasizing the code as the primary output artifact.

Form pages use a single centered column with a maximum width constraint, placing the heading, description, and stacked inputs in a clear vertical sequence. The submit action aligns to the right at the column's bottom edge, following conventional form completion patterns.

Spacing tokens derive from a 0.25rem base unit. Section-level vertical padding uses 3rem, while content gaps within panels use 1.5rem. Tight spacing at 0.5rem handles internal element grouping, such as label-to-input proximity. The overall density is moderate: enough padding to prevent crowding on dark surfaces, but tight enough to keep related information visually connected.

## Visual language

The visual character is restrained and technical, with rounded corners softening what would otherwise be a severe dark interface. Panels and cards use 0.75rem corner radius, while inputs and buttons use the slightly tighter 0.5rem. This creates a subtle size hierarchy where larger containers feel more approachable and smaller interactive elements feel precise.

Shadows are minimal or absent; depth is communicated entirely through surface value differences. The progression from canvas to surface to surface-elevated provides sufficient spatial cues without the performance and visual complexity of layered shadows.

Code presentation receives special treatment: syntax highlighting uses a standard dark-theme palette with blue for keywords, green for strings, orange for functions, and purple for types, all against the dedicated code-surface background. A copy action sits at the block's top-right corner, available on hover or persistently visible depending on state.

The purple accent appears sparingly: primary buttons, active tab underlines, and link text. This restraint makes the accent highly salient when it does appear, guiding users toward forward progress in multi-step workflows.

## Components

### Primary action button

- **Anatomy**: Text label centered within a filled container; no icon in the standard variant
- **Surface**: Solid action purple background with ink-colored text
- **Typography**: label token at 500 weight, 0.75rem size
- **Shape**: 0.5rem border radius, creating a pill-like rectangle
- **Spacing**: 0.625rem vertical padding, 1.25rem horizontal padding
- **Composition**: Typically appears at the end of form sequences or alongside secondary actions
- **Variants**: Standard filled state; hover shifts to action-hover background

### Secondary action button

- **Anatomy**: Text label centered within a bordered container
- **Surface**: Transparent background with border-colored outline
- **Typography**: label token at 500 weight
- **Shape**: 0.5rem border radius matching primary buttons
- **Spacing**: Identical padding to primary for visual pairing
- **Composition**: Positioned adjacent to primary actions, often to the left

### Input field

- **Anatomy**: Single-line text container with optional icon or copy action at right edge
- **Surface**: surface background with border-colored 1px outline
- **Typography**: body-small for entered values, ink color
- **Shape**: 0.5rem border radius
- **Spacing**: 0.625rem vertical padding, 0.875rem horizontal padding
- **Composition**: Full-width within parent panel; label positioned 0.5rem above
- **States**: Default shows border; focus would elevate to action-colored border

### Dropdown selector

- **Anatomy**: Trigger button showing selected value with downward chevron indicator
- **Surface**: surface background matching inputs
- **Typography**: body-small for selected value
- **Shape**: 0.5rem border radius
- **Spacing**: Identical to input fields for visual consistency
- **Composition**: Often paired in horizontal rows with related selectors

### Code block

- **Anatomy**: Multi-line preformatted text container with tab navigation above and copy action
- **Surface**: code-surface background with border-subtle outline
- **Typography**: body-small with monospace rendering for code content
- **Shape**: 0.75rem border radius, larger than inputs to match panel scale
- **Spacing**: 1.25rem internal padding; tab bar sits flush at top with 0.75rem horizontal padding
- **Composition**: Tab labels in a horizontal row at top; active tab shows action-colored underline
- **Variants**: Multiple language/framework variants selectable via tabs

### Form card

- **Anatomy**: Heading, description, and stacked input groups within a bounded container
- **Surface**: Transparent or canvas-matching background; no visible card boundary on form pages
- **Typography**: section-display for heading, body for description, label for field labels
- **Shape**: No border radius when flush with page; 0.75rem when elevated
- **Spacing**: 1.5rem between heading and first input group; 1.25rem between successive fields
- **Composition**: Centered column with maximum width; right-aligned submit action

## Responsive behavior

The split-panel layout should stack vertically on narrower viewports, with the configuration panel preceding the code output to maintain the selection-to-result reading order. The code block requires horizontal scrolling or reduced font size to prevent overflow, as line length is determined by generated content rather than designed copy.

Form pages naturally adapt to single-column layouts; the maximum width constraint prevents excessive line lengths on large screens while maintaining comfortable reading measure on smaller devices. Input fields and dropdowns should remain full-width within their container at all breakpoints.

The tab navigation within code blocks may wrap to multiple lines or collapse to a dropdown on very narrow viewports, though the current design shows a simple three-tab set that likely fits horizontally on most devices.

## Practical implementation guidance

### Preserve
- The disciplined single-accent palette; introducing additional accent colors would fragment the clear progress signaling
- The surface value progression for depth without shadows
- The generous internal padding on code blocks, which improves readability of dense technical content
- The right-aligned submit pattern on forms, which follows established completion conventions

### Avoid
- Lightening the canvas or surface values, which would reduce the professional developer-tool aesthetic
- Adding border-radius to code block content areas; keep the monospace text against straight edges for readability
- Using the action purple for non-interactive elements, which would dilute its navigational function
- Shrinking the code block padding, which would make syntax highlighting feel cramped

### Recommended build order
1. Establish the dark canvas and surface layer system with exact color values
2. Implement the type scale with Inter at the specified sizes and weights
3. Build the input and button components with matching border-radius and padding
4. Create the code block with syntax highlighting and tab navigation
5. Assemble the split-panel layout with proper panel proportions
6. Add the form page template with centered column and stacked field pattern

### Accessibility
- Ensure the action purple meets minimum contrast ratios against dark surfaces; the current value may need slight lightening for WCAG AA compliance on small text
- Provide visible focus indicators on all interactive elements, using the action color for consistency
- Maintain keyboard navigation order through the split-panel layout, ensuring the code block copy action is reachable
- Consider adding aria-labels to icon-only actions such as the copy buttons

## Scope note

This guide covers the SDK installation workflow and project survey surfaces visible in the supplied images. Navigation patterns beyond the tab bar, data visualization, notification systems, and mobile-specific adaptations are not represented. Measurements are practical adaptation targets derived from the visible interface proportions.

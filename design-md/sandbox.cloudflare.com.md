# How sandbox.cloudflare.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/sandbox.cloudflare.com-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with large 'sandbox' display type, wireframe decorative graphics, and code snippet panel on dark canvas](https://pin.fontofweb.com/3669?format=jpg)](https://design.withfudge.com/share/pin-3669)

[Hero section with large 'sandbox' display type, wireframe decorative graphics, and code snippet panel on dark canvas](https://design.withfudge.com/share/pin-3669)

[![Oval pill buttons showing 'Get Started' with arrow icon and 'npm i @cloudflare/sandbox' install command](https://pin.fontofweb.com/3668?format=jpg)](https://design.withfudge.com/share/pin-3668)

[Oval pill buttons showing 'Get Started' with arrow icon and 'npm i @cloudflare/sandbox' install command](https://design.withfudge.com/share/pin-3668)

[![Testimonials section with staggered quote cards, decorative quotation marks, and grid-line background pattern](https://pin.fontofweb.com/3667?format=jpg)](https://design.withfudge.com/share/pin-3667)

[Testimonials section with staggered quote cards, decorative quotation marks, and grid-line background pattern](https://design.withfudge.com/share/pin-3667)

[![Examples section with expandable sidebar navigation and syntax-highlighted code block in bordered panel](https://pin.fontofweb.com/3666?format=jpg)](https://design.withfudge.com/share/pin-3666)

[Examples section with expandable sidebar navigation and syntax-highlighted code block in bordered panel](https://design.withfudge.com/share/pin-3666)

## Overview

The Cloudflare Sandbox SDK site presents a dark, technical aesthetic built for developer credibility. The visual system relies on near-black canvas tones, precise wireframe decorations, and a rigid grid structure that evokes engineering diagrams and terminal interfaces. Large display typography dominates section headers, with the word "sandbox" and section titles like "Testimonials" and "Examples" rendered at monumental scale with tight letter spacing. The overall impression is of a tool that is precise, powerful, and built for infrastructure work.

The design balances density with clarity. Code appears as first-class content, not an afterthought—syntax-highlighted blocks sit within bordered panels, and installation commands receive pill-shaped treatment equal to call-to-action buttons. Decorative elements include repeating wireframe arc patterns, diagonal hash fills, dotted grids, and thin structural lines that divide the canvas into measured zones. The color palette is severely restricted: black, near-black, off-white text, and a single warm orange accent for interactive emphasis and syntax highlighting.

## Colors

| token | value | use |
|---|---|---|
| canvas | #0a0a0a | Primary page background, deepest layer |
| surface | #111111 | Card backgrounds, code panels, elevated containers |
| surface-elevated | #1a1a1a | Active sidebar items, hover states, subtle elevation |
| ink | #e8e8e8 | Primary text, headings, body copy, code foreground |
| ink-muted | #7a7a7a | Secondary text, metadata, attribution, decorative marks |
| accent | #f5a623 | Syntax highlighting strings, interactive emphasis, Cloudflare logo orange |
| border | #333333 | Primary dividers, card outlines, panel borders |
| border-subtle | #222222 | Grid lines, hairline separators, inactive state borders |

The color system operates in a single dark mode with no light variant. The canvas and surface tokens create depth through value steps rather than shadow. The accent color appears sparingly—reserved for strings in code blocks, the Cloudflare logo mark, and interactive highlights—preventing visual fatigue on the dark ground. Ink-muted serves for attribution text, quotation mark decorations, and secondary metadata, maintaining hierarchy without introducing additional hues. Borders are structural rather than decorative; they define the grid and contain content panels with mechanical precision.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Inter | 6rem | 400 | 0.9 | -0.03em | Page hero "sandbox" wordmark, monumental section titles |
| section-display | Inter | 4.5rem | 400 | 0.95 | -0.02em | Section headers: "Testimonials", "Examples" |
| body | Inter | 1rem | 400 | 1.6 | 0 | Testimonial quotes, descriptive paragraphs |
| body-small | Inter | 0.875rem | 400 | 1.5 | 0.01em | Sidebar navigation items, compact labels |
| label | Inter | 0.875rem | 400 | 1.4 | 0.01em | Button text, command labels |
| code | IBM Plex Mono | 0.875rem | 400 | 1.7 | 0 | Code blocks, installation commands, API examples |
| code-small | IBM Plex Mono | 0.75rem | 400 | 1.6 | 0 | Inline code, compact terminal output |

The type system pairs Inter for all interface and display text with IBM Plex Mono for code and technical content. Display sizes are aggressively large with negative tracking, creating impact through scale rather than weight. The hero display at 6rem renders the "sandbox" wordmark as a dominant visual element that competes with the wireframe decorations behind it. Body text remains restrained and readable at 1rem with generous line height for comfortable scanning of technical documentation.

Inter is designed by Rasmus Andersson and distributed by Rsms. IBM Plex Mono is designed by Mike Abbink, Paul Van Der Laan, and Pieter Van Rosmalen, and distributed by Bold Monday. Verify licensing for these families before production use.

## Layout

The layout follows a strict grid system visible as thin lines across the entire canvas. The grid divides the viewport into rectangular modules with 1px borders in border-subtle, creating an architectural blueprint aesthetic. Content occupies specific grid cells rather than flowing in conventional centered containers.

The hero section spans multiple grid modules vertically. The "sandbox" display type sits in the upper portion, with wireframe arc decorations filling adjacent cells. Below, a code snippet panel occupies a right-aligned grid cell, while descriptive text and a "Get Started" link sit in a central cell. The grid creates intentional asymmetry—empty cells with diagonal hash fills or pure black serve as negative space.

Section transitions maintain the grid. "Testimonials" and "Examples" headers span full width at display scale, with content cards staggered across grid cells to create visual rhythm. The testimonials section places quote cards in offset positions, with decorative quotation marks in circular outlines occupying intermediate cells.

The examples section uses a sidebar-panel composition: a left column of expandable navigation items occupies roughly one-third width, while a code block panel fills the remaining two-thirds. Both sit within the grid, separated by visible borders.

Spacing derives from the 0.25rem base unit. Section vertical padding uses 6rem to create breathing room between major areas. Content padding within cards and panels uses 2rem. Grid gaps are rendered as 1px borders rather than empty space, making the structure itself a visual element.

## Visual language

The visual language communicates technical precision through decorative systems that reference engineering and computing history. Wireframe arcs—repeating semi-circular lines—form patterns behind the hero type, suggesting waveforms, memory addressing, or architectural blueprints. These appear in white outline against the black canvas, creating moiré-like interference with the bold "sandbox" letterforms.

Diagonal hash fills appear in inactive or decorative grid cells, providing texture without color variation. Dotted grids create subtle background patterns behind testimonial cards. Thin structural lines in border-subtle divide every element, making the layout feel assembled rather than composed.

The Cloudflare logo appears as an orange silhouette mark, the only full-color photographic element in the interface. Python and JavaScript icons appear as white glyphs in circular outlines, maintaining the wireframe treatment.

Quotation marks receive special treatment: large decorative marks in ink-muted sit outside quote cards, while smaller marks appear within cards as attribution prefixes. The overall effect is of a design system that treats documentation as artifact—something built, measured, and inspected.

## Components

### Primary action button

- **Anatomy**: Text label with optional arrow icon, contained in an oval pill shape
- **Surface**: Transparent or surface-elevated background with border
- **Typography**: label token, Inter at 0.875rem
- **Shape**: Full pill with 9999px border radius, generous horizontal padding
- **Spacing**: 1.25rem vertical, 2.5rem horizontal padding
- **Composition**: Centered text, icon offset to the right with arrow pointing northeast
- **Variants**: "Get Started" variant includes arrow icon; install command variant uses monospace text

### Install command

- **Anatomy**: Monospace text string with copy action, in pill container
- **Surface**: surface background with border
- **Typography**: code token, IBM Plex Mono at 0.875rem
- **Shape**: Full pill matching primary action proportions
- **Spacing**: 1.25rem vertical, 2rem horizontal padding
- **Composition**: Left-aligned command text, copy icon at right edge
- **States**: Hover state likely inverts or highlights border; copy feedback not visible

### Code block panel

- **Anatomy**: Bordered rectangle containing syntax-highlighted code with line breaks
- **Surface**: surface background, no border radius
- **Typography**: code token for body, code-small for compact lines
- **Shape**: Sharp corners, single border
- **Spacing**: 2rem internal padding
- **Composition**: Left-aligned code with consistent indentation, syntax highlighting in accent for strings, muted tones for comments and keywords
- **Variants**: Full panel for examples; inline snippet for hero section

### Testimonial card

- **Anatomy**: Quotation mark prefix, body text, horizontal rule separator, name, title and company
- **Surface**: surface background with border
- **Typography**: body token for quote, body-small for attribution in ink-muted
- **Shape**: Sharp corners, generous internal padding
- **Spacing**: 2rem padding, quote text separated from attribution by horizontal rule
- **Composition**: Top-left quotation mark in ink-muted, text block below, attribution at bottom left
- **Variants**: Cards appear at staggered grid positions; some cards show partial content indicating scroll

### Sidebar navigation

- **Anatomy**: Stacked text items with right-facing chevron, separated by horizontal rules
- **Surface**: Transparent background, surface-elevated for active item
- **Typography**: body-small token, Inter at 0.875rem
- **Shape**: Full-width items, no border radius
- **Spacing**: 1rem vertical, 1.5rem horizontal padding
- **Composition**: Left-aligned title, optional subtitle below, chevron at right edge
- **Variants**: Default state transparent; active state with surface-elevated background; items with subtitles stack two lines

### Decorative quotation mark

- **Anatomy**: Large quotation mark glyph in circular outline
- **Surface**: Transparent or surface background
- **Typography**: Display-scale quotation mark in ink-muted
- **Shape**: Circle outline containing centered mark
- **Composition**: Positioned between or behind testimonial cards as spatial anchor

## Responsive behavior

The grid-based layout suggests a system that reconfigures at narrower viewports by stacking grid cells vertically. The sidebar-panel composition in the examples section should transition to a vertical stack, with the sidebar becoming a collapsible accordion or horizontal tab bar below 768px.

Display type scales down proportionally: hero-display at 6rem may reduce to 3rem on tablet and 2.5rem on mobile. Section-display at 4.5rem scales to 2.5rem and 2rem respectively. The wireframe decorations behind hero type may crop or simplify to maintain legibility.

Testimonial cards, currently staggered across grid cells, should stack in a single column with consistent spacing. The decorative quotation marks may hide or reduce to inline elements on narrow screens.

Code blocks require horizontal scroll or reduced font size on mobile. The code-small token at 0.75rem serves as a minimum readable size; below this, horizontal scrolling with preserved font size is preferable.

The pill-shaped buttons and install commands maintain their proportions but may expand to full width on mobile for easier touch targets.

## Practical implementation guidance

### Preserve
- The strict dark palette with single warm accent; do not introduce additional hues
- The visible grid structure as a core visual element, not merely a layout aid
- The pairing of Inter for interface text with IBM Plex Mono for code
- The monumental display type with negative tracking for section headers
- The wireframe and hash-fill decorative systems as identity elements
- The sharp-cornered panels for code and testimonials against pill-shaped actions

### Avoid
- Rounded corners on content panels; the design uses 0 radius for containers and 9999px for actions
- Centered text blocks; left alignment dominates the grid system
- Drop shadows for elevation; use surface value steps instead
- Generic button styling; actions must be pill-shaped with generous proportions
- Light mode without complete recoloring of decorative elements

### Recommended build order
1. Establish the grid system with 1px borders and the base 0.25rem unit
2. Implement the dark color tokens and apply canvas background
3. Add Inter and IBM Plex Mono with the full type scale
4. Build the hero section with display type and wireframe decorations
5. Create the code block panel component with syntax highlighting
6. Implement pill buttons and install command components
7. Add the examples section with sidebar navigation
8. Build testimonial cards with staggered grid placement
9. Add decorative elements: quotation marks, hash fills, dotted grids

### Accessibility
- Maintain minimum 4.5:1 contrast for all body text; the ink on canvas pairing exceeds this
- Ensure code blocks are keyboard-focusable and scrollable with visible focus indicators
- Provide visible focus states for grid-navigable elements; the thin borders may need enhancement
- Consider reduced-motion preferences for any wireframe decoration animations
- Add aria-labels to decorative quotation marks and wireframe graphics to prevent screen reader verbosity

## Scope note

This guide covers the Cloudflare Sandbox SDK marketing and documentation page as visible in the supplied images. Mobile layouts, animation behavior, form interactions, and additional interior pages are not represented. The wireframe decorative graphics and their responsive behavior require custom implementation. Measurements are practical adaptation targets derived from visual inspection of the grid-based composition.

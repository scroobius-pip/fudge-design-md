# How igerman.cc is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/igerman.cc-design)

Last updated: 2026-08-10

## Captured pages

[![Light theme blog post page showing orange-accented header with dotted underline on title, cyan definition box, and monospace body text on white background](https://pin.fontofweb.com/9529?format=jpg)](https://design.withfudge.com/share/pin-9529)

[Light theme blog post page showing orange-accented header with dotted underline on title, cyan definition box, and monospace body text on white background](https://design.withfudge.com/share/pin-9529)

[![Dark theme blog post page with deep navy background, periwinkle accent links, cyan definition box, and matching monospace typography structure](https://pin.fontofweb.com/9528?format=jpg)](https://design.withfudge.com/share/pin-9528)

[Dark theme blog post page with deep navy background, periwinkle accent links, cyan definition box, and matching monospace typography structure](https://design.withfudge.com/share/pin-9528)

## Overview

This design system describes a personal blog and portfolio site built around programmer aesthetics. The visual language centers on monospace typography, dual high-contrast themes, and terminal-inspired decorative elements. The site presents long-form writing with a distinctive voice: playful, self-aware, and technically literate. Every surface reinforces the identity of a developer who treats their personal site as both craft and statement.

The design operates in two modes: a light theme with white canvas and vivid orange accents, and a dark theme with deep navy canvas and periwinkle accents. Both modes share identical structural spacing and typography, ensuring content remains equally readable while the mood shifts dramatically. The header features a bold site title badge followed by a decorative ruler of vertical bars, establishing immediate visual personality before any content appears.

## Colors

The color system is intentionally constrained, with each theme using exactly five functional roles. The light theme prioritizes maximum contrast for daytime reading, while the dark theme reduces eye strain with desaturated, cooler tones.

| token | light hex | dark hex | use |
|---|---|---|---|
| canvas | #FFFFFF | #1E2030 | page background |
| ink | #1A1A1A | #CAD3F5 | primary body text, headings |
| accent | #FF4500 | #8AADF4 | site header badge, links, title underlines, active navigation |
| muted | #66D9EF | #66D9EF | definition box borders, decorative borders, secondary emphasis |
| border | #66D9EF | #66D9EF | section borders, definition box borders |

The light theme's accent is a pure, aggressive orange-red that commands attention in the header badge and link underlines. In the dark theme, this becomes a soft periwinkle that maintains prominence without visual fatigue. The muted cyan (#66D9EF) serves as a consistent bridge between themes, appearing identically in both modes for borders and the definition box treatment. This creates recognizable continuity when switching themes.

Body text in light mode uses near-black (#1A1A1A) against pure white. Dark mode inverts this relationship with light lavender-gray text (#CAD3F5) against deep navy (#1E2030). The dark theme's background carries subtle warmth in its navy depth, preventing the cold sterility of pure black.

## Typography

The type system is built on Fira Code, a monospace font designed by Nikita Prokopov, with Applesystem and Times appearing as system-level fallbacks in the retained data. Fira Code unifies every text element, from navigation to body copy to headings, creating the unmistakable texture of a terminal or code editor. The designer and vendor attribution for Fira Code is Nikita Prokopov. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| body | Fira Code | 1rem | 400 | 1.54 | 0em | paragraphs, navigation, general content |
| section-display | Fira Code | 1.45rem | 700 | 1.07 | 0em | h2 section headings |
| page-title | Fira Code | 1.45rem | 700 | 1.07 | 0em | h1 article title |
| label | Fira Code | 1rem | 700 | 1.54 | 0em | site header badge, emphasized labels |
| navigation | Fira Code | 1rem | 400 | 1.54 | 0em | navigation links, metadata |
| fallback | Times | 1rem | 400 | 1 | 0em | html root fallback only |

The type scale is compact, with only two distinct sizes: 1rem (16px) for all body and UI text, and 1.45rem (23.2px) for headings. This restraint reinforces the utilitarian, code-editor aesthetic. Headings use bold weight (700) with tight line-height (1.07) to maintain their visual punch without excessive vertical consumption. Body text at weight 400 with line-height 1.54 provides comfortable reading for long-form content.

A secondary heading size of 1.35rem (21.6px) appears for intermediate hierarchy. The monospace character width becomes a design feature: text blocks have predictable measure, and the rhythm of fixed-width characters creates visual texture distinct from proportional alternatives.

## Layout

The page uses a centered, narrow column layout that prioritizes reading focus over expansive whitespace. The body carries substantial horizontal margins (420.5px each side at desktop widths), creating a content column roughly 480px wide. This narrow measure suits the monospace typeface, preventing long lines that would strain reading in a fixed-width font.

Vertical rhythm is established through consistent spacing tokens. The page gutter provides 2.5rem padding on all sides. Navigation sits below the header with 1.25rem vertical margins. Article content receives 1.875rem vertical padding. Sections within articles use 1.5625rem padding with matching vertical margins, creating clear content grouping without card-like separation.

The header composition is distinctive: a bold badge reading "beware, the german!" in white text on an accent background, followed immediately by a decorative sequence of vertical bars extending to the right edge. This creates a banner-like identity that spans the full content width. Below this, navigation links appear in a horizontal list with 1.25rem column gaps.

Content sections use a 1px solid border in muted cyan, with 1.5625rem internal padding. This border treatment appears on the definition box and content sections, creating visual containers without background color shifts. Paragraphs maintain 1.5625rem vertical margins, with occasional tighter 1rem spacing for related paragraphs.

## Visual language

The site's visual personality emerges from the collision of raw technical aesthetics with personal expression. The monospace font is not merely functional—it is the entire visual identity. Every text element participates in this code-editor fantasy, from the navigation links to the article metadata to the body copy itself.

The decorative vertical bar ruler in the header transforms a simple site title into a terminal-like banner. This motif suggests command-line interfaces and system output, reinforcing the developer persona. The dotted underline beneath the page title continues this technical vocabulary, evoking ASCII art and plain-text conventions.

The definition box component—styled with a cyan border and terminal-inspired prompt character ($)—explicitly references command-line help documentation. This is not mere decoration but a structural metaphor: the article defines its terms as a system would define a command.

Color usage is disciplined and semantic. Orange (light) or periwinkle (dark) always signals interactivity: links, the header badge, and title underlines. Cyan always indicates structural boundaries: borders, definition boxes, and section containers. This consistency allows readers to learn the interface vocabulary quickly.

## Components

### Site header

- **Anatomy**: Bold text badge with site title, followed by decorative vertical bar sequence
- **Surface**: Accent background (#FF4500 light, #8AADF4 dark) on badge; transparent on bars
- **Typography**: Label token, white text, bold weight
- **Shape**: 0rem border radius; sharp corners maintain the technical aesthetic
- **Spacing**: 0.3125rem vertical padding, 0.625rem horizontal padding on badge
- **Composition**: Badge left-aligned, bars extending to right edge; bars use character repetition rather than CSS borders

### Navigation

- **Anatomy**: Horizontal list of text links with optional theme toggle
- **Typography**: Navigation token, regular weight
- **Spacing**: 0.625rem row gap, 1.25rem column gap; 0.625rem bottom padding on list
- **Composition**: Left-aligned links, theme control positioned at right edge
- **Variants**: Default links use ink color; active/hover states use accent color

### Page title

- **Anatomy**: h1 element with dotted bottom border
- **Typography**: Page-title token, bold weight, accent color
- **Surface**: 3px dotted bottom border in accent color
- **Spacing**: 0.9375rem bottom padding, 0.9375rem bottom margin
- **Composition**: Full content width, left-aligned

### Definition box

- **Anatomy**: Bordered container with prompt prefix, command text, and definition paragraph
- **Surface**: Transparent background, 1px solid muted cyan border
- **Typography**: Body token for definition text; label styling for command text
- **Shape**: 0rem border radius; sharp rectangular outline
- **Spacing**: 1.5625rem padding on all sides
- **Composition**: Full content width; prompt character ($) followed by command in accent color

### Content section

- **Anatomy**: Bordered container for grouped content, typically containing h2 and paragraphs
- **Surface**: 1px solid muted cyan border
- **Typography**: Section-display token for headings; body token for paragraphs
- **Shape**: 0rem border radius
- **Spacing**: 1.5625rem padding, 1.5625rem vertical margins
- **Composition**: Full content width, nested content left-aligned

### Article metadata

- **Anatomy**: Date, reading time, and tag links below title
- **Typography**: Navigation token, regular weight
- **Spacing**: Compact inline presentation with separator characters
- **Composition**: Left-aligned below title; tags use accent color with hash prefix

## Responsive behavior

The narrow content column (approximately 480px at desktop) suggests the design is already optimized for focused reading. At smaller viewports, the substantial side margins should collapse to maintain readable line lengths without horizontal scrolling. The 2.5rem page gutter provides adequate breathing room on mobile devices.

Navigation links may wrap to multiple lines on narrow viewports; the 0.625rem row gap accommodates this gracefully. The header's vertical bar decoration will truncate or scale based on available width; consider reducing bar count or switching to a shorter decorative sequence below 480px viewport width.

The monospace typeface remains legible at standard sizes across devices. No font size adjustments are required for mobile, though the 1.45rem headings may benefit from slight reduction on very small screens to prevent excessive line wrapping.

## Practical implementation guidance

### Preserve
- The monospace-only typography stack; do not introduce proportional fonts for body or headings
- The dual theme system with semantic color roles preserved across modes
- The terminal-inspired decorative elements: header bars, dotted underlines, prompt characters
- The narrow content column and generous side margins for reading focus
- The restrained type scale with only two functional sizes
- The sharp 0rem border radius throughout all components; no rounded corners

### Avoid
- Adding background colors to content sections; rely on borders for visual grouping
- Introducing border-radius or soft shadows; maintain the flat, technical aesthetic
- Using the accent color for large background areas beyond the header badge
- Breaking the monospace rhythm with icon fonts or graphical buttons

### Recommended build order
1. Establish the CSS custom property theme system with light/dark mode variables
2. Implement the Fira Code font loading with proper fallbacks
3. Build the centered column layout with responsive margin collapse
4. Create the header component with badge and decorative bars
5. Implement navigation with theme toggle functionality
6. Style article typography: title, metadata, body, headings
7. Build the definition box and content section bordered containers
8. Add interactive states: link hover, focus indicators, active navigation

### Accessibility
- Ensure the orange accent (#FF4500) on white meets WCAG AA contrast ratios for text; it may need darkening for small text compliance
- The dark theme's periwinkle (#8AADF4) on navy (#1E2030) generally provides excellent contrast
- Maintain visible focus indicators on all interactive elements; the dotted underline pattern can extend to focus states
- Respect `prefers-color-scheme` for initial theme selection while allowing manual override
- The monospace font may affect readability for some users; ensure browser font override options remain functional

## Scope note

This guide covers the blog post page surface as represented in the supplied images. The homepage, project listings, guestbook, and other site sections are not documented here. Measurements reflect the exact values retained from the interface. Motion, hover states, focus styling beyond basic link underlines, and mobile-specific layouts are not included in this reference. Applesystem and Times appear in the retained data as system fallbacks but are not actively used in the visible interface. Verify licensing for Fira Code before production use.

# How buildkite.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/buildkite.com-design)

Last updated: 2026-08-10

## Captured pages

[![Homepage hero with ASCII-art butterfly, terminal-style navigation, and command prompt interface on deep navy canvas](https://pin.fontofweb.com/5480?format=jpg)](https://design.withfudge.com/share/pin-5480)

[Homepage hero with ASCII-art butterfly, terminal-style navigation, and command prompt interface on deep navy canvas](https://design.withfudge.com/share/pin-5480)

[![Capabilities page with section headings, dotted dividers, inline docs links, and terminal footer with build statistics](https://pin.fontofweb.com/5481?format=jpg)](https://design.withfudge.com/share/pin-5481)

[Capabilities page with section headings, dotted dividers, inline docs links, and terminal footer with build statistics](https://design.withfudge.com/share/pin-5481)

## Overview

Buildkite's design system presents a terminal-inspired visual language that treats the web interface as a command-line environment. The system centers on a deep navy canvas that evokes late-night coding sessions, paired with monospace typography throughout to reinforce the developer-tool positioning. ASCII art serves as the primary decorative element, appearing as large-scale illustrations that anchor key pages. The navigation model mimics terminal commands with bracketed shortcuts, typed paths, and interactive prompts. This is not merely aesthetic theming—the entire information architecture adopts CLI conventions, from the breadcrumb-style path indicators to the help-command discovery pattern at the bottom of pages. The result is a cohesive environment that speaks directly to engineering teams who live in terminals, making the marketing site feel like an extension of their daily workflow rather than a departure from it.

## Colors

The color system operates in a dark-mode-only configuration with a restricted palette that prioritizes readability and terminal authenticity. The deep navy canvas establishes an immersive environment, while accent colors appear sparingly to highlight interactive elements and command outputs.

| token | value | use |
|---|---|---|
| canvas | #0a0a1a | Primary page background, terminal screen base |
| surface | #141428 | Elevated panels, command prompt containers, footer regions |
| ink | #e8e8f0 | Primary text, headings, body copy |
| muted-ink | #a0a0b8 | Secondary text, timestamps, statistics labels, prompt hints |
| accent-green | #4ade80 | ASCII art illustrations, success states, active commands |
| accent-cyan | #60d0d8 | Interactive links, documentation references, command suggestions |
| accent-magenta | #c084c0 | Special highlights, variant command options |
| border-dim | #2a2a4a | Section dividers, panel borders, subtle separators |

The palette maintains extremely low luminance for backgrounds, with the canvas at near-black navy and surface elevations adding minimal lightness. Text contrast relies on the ink and muted-ink tokens against these dark grounds. Accent colors derive from classic terminal color schemes—green for primary output, cyan for hyperlinks and references, magenta for secondary highlights. No light mode variant is present in the visible system. Photographic content is absent; all imagery is generated through ASCII characters, which inherit the accent-green color token. The interface avoids gradients and shadows, relying instead on flat color blocks and single-pixel borders for spatial definition.

## Typography

The typographic system is exclusively monospace, treating the entire page as a fixed-width terminal output. No proportional typefaces appear in headings, body, or navigation. This constraint creates a distinctive rhythm where alignment and spacing follow character-grid logic rather than optical refinement.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | monospace | 1.5rem | 400 | 1.4 | 0em | Page titles, major section headings |
| section-display | monospace | 1.25rem | 400 | 1.4 | 0em | Feature section headings, capability names |
| body | monospace | 1rem | 400 | 1.6 | 0em | Paragraph text, descriptions, explanations |
| label | monospace | 0.875rem | 400 | 1.4 | 0em | Command labels, shortcuts, metadata |
| navigation | monospace | 0.875rem | 400 | 1.4 | 0em | Top bar links, path indicators, footer stats |

All sizes are whole-number multiples of the 0.25rem base unit. The hierarchy operates through size contrast rather than weight variation—every visible text element uses Regular (400) weight. Line heights are generous for body text to maintain readability in the monospace constraint, while headings and labels compress slightly. Letter spacing remains at zero throughout, preserving the natural metrics of the monospace grid. The system avoids italic styles and relies on color and bracketing conventions for emphasis. Verify licensing for these families before production use.

## Layout

The layout follows a single-column reading flow with generous margins that evoke terminal window padding. Content occupies a centered container that maintains comfortable line lengths for monospace text. The top navigation bar spans full width with left-aligned branding and right-aligned utility links. Below this, a path indicator shows the current location in filesystem-like notation, followed by the main content area.

Section spacing uses 4rem vertical gaps between major content blocks, with 1.5rem gaps between related elements within a section. The command prompt footer anchors the bottom of the viewport, creating a persistent terminal input metaphor. This footer contains a path badge, hint text, and operational statistics in a horizontal arrangement.

The ASCII art illustrations break the linear flow with large-scale character compositions that occupy substantial vertical space—roughly 20-30 lines of characters. These elements are left-aligned rather than centered, maintaining the terminal's default left-justified output convention. Content sections below the art follow a consistent pattern: heading, explanatory paragraphs, and optional command-reference links.

Horizontal rules between sections use dotted or dashed character patterns rather than solid lines, reinforcing the text-based aesthetic. The overall density is moderate—generous whitespace prevents the monospace constraint from feeling cramped, while the dark canvas absorbs visual weight that would otherwise expand in a light interface.

## Visual language

The visual language derives entirely from terminal and command-line interface conventions, translated to a web context without losing their essential character. ASCII art functions as the primary illustration medium, replacing conventional photography and vector graphics with typographic compositions built from characters. The butterfly illustration on the homepage demonstrates this approach at scale—hundreds of characters arranged to form a recognizable image while remaining readable as text.

The command metaphor extends to every interactive element. Navigation items include bracketed keyboard shortcuts: [D] for Docs, [C] for Contact, [S] for Signup, [L] for Login. Links to documentation append a small arrow indicator. The footer presents a command prompt with cursor-ready positioning, suggesting the page itself is an interactive shell.

Color usage follows terminal conventions where green indicates normal output, cyan marks interactive or referenced elements, and magenta provides secondary emphasis. The absence of warm colors—no red error states, no yellow warnings in the visible content—creates a calm, controlled atmosphere that aligns with the reliability messaging.

The dotted dividers between sections recall printer output or legacy terminal displays, creating rhythm without introducing foreign visual elements. Every decorative choice reinforces the core premise: this is a tool for engineers, presented in their native visual language.

## Components

**Terminal Navigation Bar**
- Anatomy: Left-aligned brand mark "Buildkite" followed by inline command hints, then right-aligned utility links with bracketed shortcuts
- Surface: Transparent over canvas background, no visible border or shadow
- Typography: Navigation token, all items same size
- Spacing: Tight horizontal packing with character-space gaps between elements
- Composition: Single horizontal row, flex-spread alignment

**ASCII Art Illustration**
- Anatomy: Large-scale character composition, left-aligned within content area
- Color: Accent-green on canvas background
- Typography: Body token size, though characters form image rather than readable text
- Spacing: Generous vertical margins above and below, approximately 3rem each
- Composition: Fixed-width character grid, natural line breaks preserved

**Section Heading with Description**
- Anatomy: Heading line followed by one or more paragraph blocks
- Typography: Section-display for heading, body for descriptions
- Spacing: 1.5rem gap between heading and first paragraph, 1rem between subsequent paragraphs
- Composition: Left-aligned, full content width

**Inline Documentation Link**
- Anatomy: Text label followed by bordered badge containing "Docs" and outbound arrow
- Surface: Transparent background, 1px border in border-dim
- Typography: Label token
- Color: Accent-cyan for text, muted-ink for border
- Spacing: Tight internal padding, inline with preceding text

**Command Prompt Footer**
- Anatomy: Path badge, hint text, and statistics row
- Surface: Surface color background, rounded panel corners
- Typography: Label token for path and hints, smaller size for statistics
- Color: Muted-ink for secondary information, ink for primary
- Composition: Horizontal arrangement with left-aligned path, center hint, right-aligned stats

**Dotted Section Divider**
- Anatomy: Horizontal line of repeated characters (periods or dashes)
- Color: Border-dim
- Spacing: 2rem vertical margins
- Composition: Full content width, single line

## Responsive behavior

The terminal aesthetic suggests specific responsive considerations. The monospace grid and ASCII art assume fixed-width rendering that may require horizontal scrolling or scaled display on narrow viewports. The single-column layout naturally adapts to mobile widths, though the character-based illustrations may need size reduction or truncation to maintain legibility.

Navigation items with bracketed shortcuts should remain accessible on touch devices where keyboard shortcuts are irrelevant. Consider expanding these to full text labels or maintaining the compact form as a recognizable brand element. The command prompt footer, with its multiple horizontal elements, should stack vertically on narrow screens to prevent overflow.

Line lengths for body text should remain constrained—monospace fonts at full viewport width become difficult to track across long lines. A maximum width of approximately 80 characters (roughly 40-45rem) honors the terminal convention while maintaining readability.

## Practical implementation guidance

**Preserve**
- The exclusive use of monospace typography; mixing in proportional fonts would break the terminal illusion
- Dark canvas as the only background mode; no light theme variant is present
- Bracketed keyboard shortcuts in navigation as a distinctive interaction pattern
- ASCII art as the sole illustration medium, avoiding conventional imagery
- The command prompt footer as a persistent page element

**Avoid**
- Adding shadows, gradients, or dimensional effects that contradict the flat terminal aesthetic
- Using rounded buttons or pill shapes that suggest modern UI conventions
- Introducing color beyond the established terminal palette
- Center-aligning text or art that should remain left-justified per terminal convention
- Animating text or cursors in ways that mimic actual terminal behavior without functional purpose

**Recommended build order**
1. Establish the canvas background and monospace font stack
2. Build the top navigation with bracketed shortcut pattern
3. Implement the content container with appropriate max-width and padding
4. Create the section heading and body text styles
5. Add the dotted divider component
6. Develop the inline documentation link with bordered badge
7. Construct the command prompt footer with path, hint, and statistics
8. Integrate ASCII art rendering capability for illustrations

**Accessibility**
- Ensure the dark canvas with muted-ink text maintains WCAG AA contrast ratios; the current muted-ink may need lightening for small text compliance
- Provide visible focus indicators that work on the dark canvas without relying on browser defaults
- Consider that ASCII art illustrations require alternative text descriptions for screen reader users
- The bracketed keyboard shortcuts should not interfere with actual keyboard navigation; ensure they are decorative rather than functional shortcuts
- Command prompt hint text should not be the only path to content; provide equivalent visible links

## Scope note

This guide covers the homepage and capabilities page surfaces visible in the supplied images. The design system appears to operate as a dark-mode-only terminal aesthetic with no light variant shown. Measurements are practical adaptation targets. Mobile layouts, interactive states beyond static presentation, form components, and animation behavior are not represented in the available material. The exact font family is unspecified in the source; implementers should select a suitable monospace stack and verify licensing before production use.

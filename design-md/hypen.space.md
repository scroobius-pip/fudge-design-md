# How hypen.space is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/hypen.space-design)

Last updated: 2026-08-10

## Captured pages

[![Roadmap section with version timeline from V0.5 to V1.0, pink accent labels, and CTA footer with START BUILDING button](https://pin.fontofweb.com/9381?format=jpg)](https://design.withfudge.com/share/pin-9381)

[Roadmap section with version timeline from V0.5 to V1.0, pink accent labels, and CTA footer with START BUILDING button](https://design.withfudge.com/share/pin-9381)

[![Close-up of roadmap timeline showing CURRENT and STABLE badges with pink and muted text on black background](https://pin.fontofweb.com/9380?format=jpg)](https://design.withfudge.com/share/pin-9380)

[Close-up of roadmap timeline showing CURRENT and STABLE badges with pink and muted text on black background](https://design.withfudge.com/share/pin-9380)

[![Remote UI feature section with code editor tabs, embedded app previews, and stacked APPPS typography](https://pin.fontofweb.com/9379?format=jpg)](https://design.withfudge.com/share/pin-9379)

[Remote UI feature section with code editor tabs, embedded app previews, and stacked APPPS typography](https://design.withfudge.com/share/pin-9379)

[![Every Screen Natively hero with three platform mockups showing iOS SwiftUI, Web, and Android Compose with pink buttons](https://pin.fontofweb.com/9378?format=jpg)](https://design.withfudge.com/share/pin-9378)

[Every Screen Natively hero with three platform mockups showing iOS SwiftUI, Web, and Android Compose with pink buttons](https://design.withfudge.com/share/pin-9378)

## Overview

Hypen presents a dark, developer-centric visual identity built on absolute black canvas with warm off-white typography and a single vivid pink accent. The system communicates technical credibility through monospace code elements, expansive display typography, and structured section layouts that feel like a premium IDE or technical documentation platform. The design balances dramatic scale contrasts—massive condensed headlines against small, precise labels—with dense information architecture that serves engineering audiences. Every surface reinforces the product's positioning as a declarative UI language: code snippets appear as first-class content, platform mockups demonstrate cross-platform rendering, and timeline roadmaps communicate technical progress with clinical precision.

## Colors

The palette operates on a near-black foundation with warm neutrals and a singular hot-pink accent that provides all energy and interactive signaling.

| token | value | use |
|---|---|---|
| canvas | #000000 | Page background, deepest surface |
| surface | #09090B | Card backgrounds, elevated panels |
| surface-elevated | #18181B | Active states, hover surfaces, code blocks |
| ink | #F0E6D8 | Primary headings, body text on dark |
| ink-muted | #9F9FA9 | Secondary text, captions, disabled states |
| accent | #FFA7E1 | Primary buttons, active states, links, badges |
| accent-glow | #FBCFE8 | Glow effects, hover highlights, subtle emphasis |
| border | #27272A | Dividers, section separators, card outlines |
| border-subtle | #3F3F46 | Inner borders, inactive states |
| code-keyword | #C586C0 | Syntax highlighting for reserved words |
| code-string | #CE9178 | Syntax highlighting for string literals |
| code-function | #51A2FF | Syntax highlighting for function names |
| code-comment | #71717B | Syntax highlighting for comments |
| success | #05DF72 | Positive states, completion indicators |

The warm off-white ink avoids the clinical harshness of pure white against black, while the pink accent is saturated enough to function as the sole attention mechanism. No gradients appear in the interface; all depth comes from solid color layers and subtle glow shadows. The code palette extends the dark theme convention established by popular editor themes, making the documentation feel native to developer workflows.

## Typography

The system draws on multiple families for distinct roles. Zalando Sans Expanded anchors monumental headlines with extreme width and tight negative tracking. Inter carries all interface text with neutral readability. Jet Brains Mono provides technical authority for code blocks, labels, and timestamps. Anton appears in decorative graphic treatments at large sizes, such as the stacked "APPS" repetition visible in feature imagery, but is not used for functional interface text. Menlo surfaces in code contexts alongside Jet Brains Mono, particularly for syntax-highlighted spans within terminal-style outputs. Ques appears in select graphic text elements at display sizes with distinctive letterforms. Applesystem and System-Uisansserif appear in fallback stacks for system-level rendering where custom fonts are not loaded. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Zalando Sans Expanded | 5rem | 800 | 0.95 | -0.025em | Page titles, major section headers |
| section-display | Zalando Sans Expanded | 3.75rem | 800 | 0.9 | -0.025em | Section headlines, feature titles |
| feature-headline | Zalando Sans Expanded | 2.5rem | 800 | 1.2 | -0.031em | Subsection headers, card titles |
| body | Inter | 1rem | 400 | 1.5 | 0em | Paragraphs, descriptions, navigation |
| body-large | Inter | 1.125rem | 400 | 1.625 | 0em | Lead paragraphs, feature descriptions |
| label | Jet Brains Mono | 0.75rem | 400 | 1.333 | 0.25em | Version badges, category labels, timestamps |
| code | Jet Brains Mono | 0.875rem | 400 | 1.625 | 0em | Code blocks, inline syntax, file paths |
| navigation | Inter | 0.875rem | 600 | 1.429 | 0.15em | Nav links, buttons, CTAs |
| button | Inter | 0.875rem | 600 | 1.429 | 0.15em | Button labels with uppercase treatment |

## Layout

The page structure follows a full-width, edge-to-edge pattern with consistent horizontal padding and generous vertical section spacing.

Sections stack vertically with `112px` top and bottom padding, creating clear breathing room between content areas. Internal content containers use `40px` horizontal padding on desktop, narrowing to `16px` on smaller viewports. The maximum content width is not explicitly constrained in the visible layout; text blocks appear to flow within their grid cells rather than hitting a hard maximum.

A two-column asymmetric grid dominates feature sections: left column carries the massive display headline and descriptive text, right column presents code examples, platform mockups, or interactive demonstrations. The ratio appears roughly 45/55 or 50/50 depending on content density.

The roadmap section introduces a horizontal timeline layout with six equidistant columns, each topped by a version label and filled with bullet-point feature lists. A dotted connector line runs across the top, with the current version marked by a filled pink circle and others by empty circles.

Vertical rhythm is established through consistent `56px` gaps between major content blocks within sections, and `24px` between related elements like headlines and body text.

## Visual language

The aesthetic merges brutalist scale with developer-tool precision. Headlines are enormous, often spanning multiple lines with aggressive line-height compression, while supporting text remains small and measured. The black canvas absorbs light, making the pink accent appear to emit it—an effect reinforced by subtle glow shadows on interactive elements and platform mockups.

Decorative elements include thin dashed lines that connect visual concepts, small circular progress indicators, and monospace labels that prefix sections with numeric identifiers like `// 04 — DEVICES`. These conventions borrow from code comments and version control, reinforcing the technical product positioning.

Platform mockups are rendered as framed windows with title bars, window controls, and internal content that demonstrates actual UI output. This "screenshot of code producing UI" pattern appears repeatedly, making abstract capabilities tangible.

The pink accent is used sparingly but decisively: primary buttons, active timeline markers, current version labels, link hover states, and subtle glow effects. No other saturated colors compete for attention.

## Components

### Primary button
- **Anatomy**: Text label with optional trailing arrow icon
- **Surface**: Solid `accent` background with `canvas` text
- **Typography**: `{typography.button}` in uppercase with wide tracking
- **Shape**: `4px` border radius
- **Spacing**: `12px` vertical padding, `24px` horizontal padding
- **Composition**: Inline-flex with `12px` gap between text and icon
- **States**: Default shows solid fill; hover likely intensifies via shadow

### Secondary button / text link
- **Anatomy**: Text with underline or arrow indicator
- **Surface**: Transparent with `ink` text
- **Typography**: `{typography.navigation}` with uppercase treatment
- **Shape**: No background, optional bottom border
- **Spacing**: `24px` horizontal padding in navigation context
- **Composition**: Inline with `12px` gap to icon

### Version badge
- **Anatomy**: Monospace label in small caps
- **Surface**: `surface-elevated` background with `accent` border
- **Typography**: `{typography.label}` at `10px` with `2px` letter-spacing
- **Shape**: `4px` border radius
- **Spacing**: `4px` vertical, `8px` horizontal padding
- **Variants**: "CURRENT" and "STABLE" labels appear in roadmap

### Platform mockup
- **Anatomy**: Window chrome with title bar, traffic lights/controls, content area
- **Surface**: `surface` background with `border` outline
- **Typography**: Title bar uses `{typography.label}` for platform name
- **Shape**: `14px` border radius on outer frame
- **Spacing**: `24px` internal padding
- **Shadow**: `0 0 20px -10px rgba(255, 167, 225, 0.12)` for subtle glow
- **Composition**: Centered content demonstrating actual UI output

### Code block / editor tab
- **Anatomy**: Tab bar with file names, active tab highlight, code content area
- **Surface**: `surface` background, active tab uses `accent` background
- **Typography**: `{typography.code}` with syntax highlighting colors
- **Shape**: `14px` border radius on container
- **Spacing**: `24px` padding, `8px` tab padding
- **Composition**: Tabs arranged horizontally with `1px` dividers

### Roadmap timeline
- **Anatomy**: Horizontal dotted connector, version circles, version columns
- **Surface**: Transparent, circles are `accent` fill or `border` stroke
- **Typography**: Version numbers in `{typography.section-display}`, feature lists in `{typography.body}` at `13px`
- **Shape**: Circles are `60px` diameter with `14px` border
- **Spacing**: Columns distributed evenly with `40px` top gap to connector
- **Composition**: Six-column grid with bullet-point lists beneath each version

### Section header
- **Anatomy**: Optional comment-style prefix, massive headline, body text
- **Surface**: Transparent on `canvas`
- **Typography**: Prefix in `{typography.label}`, headline in `{typography.hero-display}` or `{typography.section-display}`
- **Spacing**: `56px` gap between prefix and headline, `24px` between headline and body

## Responsive behavior

The visible desktop layout suggests a breakpoint strategy where the two-column feature sections stack vertically on narrower viewports, with the visual demonstration moving below the text description. The roadmap timeline, which shows six columns on desktop, would likely transform into a horizontal scroll or accordion on smaller screens, or reduce visible columns.

Typography scales down proportionally: the `80px` hero display would reduce to `60px` and then `48px` as viewport narrows. The `40px` horizontal padding reduces to `16px` on mobile, maintaining readable margins without excessive whitespace.

Platform mockups would stack vertically rather than appearing side-by-side. Navigation would collapse to a hamburger menu or simplify to essential links.

## Practical implementation guidance

### Preserve
- The absolute black canvas as the foundation; any deviation to dark gray weakens the dramatic contrast
- The single pink accent discipline; resist adding secondary accent colors
- The massive scale contrast between display headlines and body text
- Monospace labels for technical metadata and section numbering
- The warm off-white ink rather than pure white for reduced eye strain
- Subtle glow shadows on interactive elements and mockups

### Avoid
- Gradients or complex background patterns that compete with content
- Rounded corners larger than `14px` on containers; the system prefers near-rectangular precision
- Multiple accent colors; the pink carries all interactive and emphasis weight
- Pure white text on black; the warm tint is intentional
- Decorative imagery without technical purpose; all visuals should demonstrate capability

### Recommended build order
1. Establish the black canvas and warm ink text foundation
2. Implement Zalando Sans Expanded at display sizes with tight tracking
3. Add Inter for all body and navigation text
4. Introduce Jet Brains Mono for code and label contexts
5. Build the primary button with pink fill and uppercase label
6. Create the platform mockup component with window chrome and glow shadow
7. Implement the two-column feature section layout
8. Add the roadmap timeline with version columns and connector line
9. Refine syntax highlighting colors in code blocks

### Accessibility
- Ensure the pink accent on black meets minimum contrast ratios for interactive elements; the `accent` against `canvas` combination should be verified
- Provide focus indicators that extend beyond color alone, such as outline offsets on buttons and links
- Maintain readable line lengths in body text even when containers are wide; consider `max-width` constraints for paragraphs
- Ensure code blocks support horizontal scrolling and avoid text truncation
- Add `prefers-reduced-motion` support for any scroll-triggered animations or glow pulsing

## Scope note

This guide covers the marketing homepage surface including hero, feature sections, roadmap timeline, and footer. Documentation pages, interactive playgrounds, and authenticated dashboard interfaces are not represented. Motion behavior, mobile breakpoints, and form validation states are not visible in the supplied material. Measurements are derived from the exact values in the design facts.

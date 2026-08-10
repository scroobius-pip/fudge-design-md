# How openknowledge.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/openknowledge.ai-design)

Last updated: 2026-08-10

## Captured pages

[![Dark sidebar navigation with Open Knowledge logo, search field, and categorized doc links on near-black background](https://pin.fontofweb.com/9812?format=jpg)](https://design.withfudge.com/share/pin-9812)

[Dark sidebar navigation with Open Knowledge logo, search field, and categorized doc links on near-black background](https://design.withfudge.com/share/pin-9812)

[![Quickstart documentation page with three-column layout showing sidebar, numbered steps, and right-hand table of contents on dark theme](https://pin.fontofweb.com/9811?format=jpg)](https://design.withfudge.com/share/pin-9811)

[Quickstart documentation page with three-column layout showing sidebar, numbered steps, and right-hand table of contents on dark theme](https://design.withfudge.com/share/pin-9811)

[![Light hero section with soft blue gradient blob, 'Start building knowledge' headline, and blue pill download button](https://pin.fontofweb.com/9810?format=jpg)](https://design.withfudge.com/share/pin-9810)

[Light hero section with soft blue gradient blob, 'Start building knowledge' headline, and blue pill download button](https://design.withfudge.com/share/pin-9810)

[![Light feature section with 'Own your knowledge' heading, three-column icon grid, and privacy-first messaging](https://pin.fontofweb.com/9809?format=jpg)](https://design.withfudge.com/share/pin-9809)

[Light feature section with 'Own your knowledge' heading, three-column icon grid, and privacy-first messaging](https://design.withfudge.com/share/pin-9809)

## Overview

OpenKnowledge presents a distinctive dual-personality interface: a bright, spacious marketing site that introduces an AI-native markdown editor, and a deep, focused documentation environment for technical users. The marketing layer favors generous whitespace, soft gradient accents, and approachable DM Sans typography that signals creative tooling rather than enterprise software. The documentation layer inverts to a near-black canvas with subtle gray hierarchies, prioritizing long-form readability and navigational density.

The system is built around two core typefaces—DM Sans for all editorial and interface text, and JetBrains Mono for code samples and technical labels. Color operates in strict light and dark modes with no mid-tone ambiguity: marketing pages use warm off-white backgrounds with cool blue accents, while documentation commits to charcoal surfaces with restrained gray text layers. Component vocabulary is intentionally small—pills, cards, and sidebar rows carry most of the interaction load without decorative excess.

## Colors

The palette divides cleanly into light-mode marketing surfaces and dark-mode documentation surfaces, with a shared accent system.

| token | value | use |
|---|---|---|
| canvas | #FAFAFA | Primary marketing page background |
| canvas-dark | #0A0A0A | Documentation and sidebar background |
| surface | #FFFFFF | Elevated cards, buttons, and modals in light mode |
| surface-dark | #121212 | Elevated panels in documentation |
| surface-elevated | #FDFDFC | Subtle lift for feature cards and code blocks |
| surface-elevated-dark | #191919 | Active navigation items, hovered rows in sidebar |
| ink | #1A1A1A | Primary headings and body text in light mode |
| ink-dark | #EBEBEB | Primary text on dark surfaces |
| muted-ink | #71717A | Secondary descriptions, captions, footer links |
| muted-ink-dark | #B8B8B8 | Secondary text in documentation body |
| accent | #3783FD | Primary buttons, links, active indicators, icons |
| accent-hover | #69A3FF | Hover states for accent elements |
| accent-text | #5C4DC0 | Gradient companion and special emphasis |
| border | #E6E6E6 | Card outlines, dividers, subtle separators in light mode |
| border-dark | #2E2E2E | Sidebar dividers, panel borders in dark mode |
| hairline | #CCCCCC | One-pixel rules, table borders |
| hairline-dark | #666666 | One-pixel rules on dark backgrounds |
| code-bg | #F0F0EE | Inline code and block backgrounds in light mode |
| code-bg-dark | #1A1A1A | Code blocks in documentation |
| info | #3784FF | Informational callouts and badges |
| success | #3783FD | Positive confirmation states |
| warning | #B45309 | Cautionary alerts |
| danger | #D97757 | Error states and destructive actions |

The marketing site employs a soft, diffused blue gradient blob as a background element behind hero text, creating atmospheric depth without competing with content. Documentation abandons color decoration entirely, relying on value contrast alone to establish hierarchy. Both modes share the same accent blue, ensuring brand continuity across contexts.

## Typography

The type system centers on DM Sans for its geometric clarity and friendly proportions, with JetBrains Mono providing technical texture. System-Uisansserif serves as the fallback for navigation and interface chrome where custom font loading might delay rendering.| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | DM Sans | 3.75rem | 300 | 1 | -0.025em | Marketing hero headlines |
| section-display | DM Sans | 3rem | 300 | 1.25 | -0.02em | Section headings on homepage |
| heading-large | DM Sans | 1.875rem | 600 | 1.3 | -0.01em | Feature section titles |
| heading | DM Sans | 1.125rem | 600 | 1.375 | 0 | Card titles, subsection headers |
| body-large | DM Sans | 1.25rem | 400 | 1.375 | 0 | Lead paragraphs, descriptions |
| body | DM Sans | 1rem | 400 | 1.5 | 0 | Primary body text |
| body-small | DM Sans | 0.875rem | 400 | 1.429 | 0 | Captions, metadata, sidebar items |
| label | DM Sans | 0.6875rem | 600 | 1.375 | 0.125em | Overlines, category labels, badges |
| code | JetBrains Mono | 0.75rem | 400 | 1.5 | 0.025em | Inline code, small snippets |
| code-medium | JetBrains Mono | 1rem | 500 | 1.5 | 0.025em | Featured code blocks, terminal text |
| navigation | System-Uisansserif | 0.875rem | 400 | 1.429 | 0 | Sidebar links, table of contents |
| navigation-active | System-Uisansserif | 0.875rem | 500 | 1.429 | 0 | Current page indicator |

DM Sans is designed by Colophon Foundry (Jonny Pinhorn). JetBrains Mono, Inter, Applesystem, DM Sans 9 Pt, and System-Uisansserif carry no attributed designer or vendor in the supplied records. Verify licensing for these families before production use.

## Layout

The marketing site uses a centered, max-width container with generous horizontal breathing room. Sections stack vertically with substantial vertical padding, creating a scroll narrative that pauses at each value proposition. The documentation site switches to a fixed three-column layout: a persistent left sidebar for navigation, a central content column for prose and examples, and a right-hand table of contents for in-page wayfinding.

Marketing pages constrain content to approximately 73rem centered width with 2.75rem horizontal padding per section. The hero section breaks this rhythm with full-bleed atmospheric gradients that sit behind centered text. Feature grids use three-column layouts with 2rem gaps, collapsing to single column on narrower viewports.

Documentation fixes the sidebar at 17.875rem width with a 1px right border in hairline-dark. The main content area receives 3rem top padding and 2rem horizontal padding, offset by the sidebar width. The table of contents column sits flush right with 1rem horizontal padding, linking to heading anchors with muted-ink-dark text that brightens on hover.

Spacing follows a 0.125rem base unit. Common increments include 0.5rem for compact internal padding, 1rem for component breathing room, 2rem for card gaps, 4rem for section breaks, and 7rem for major section vertical padding.

## Visual language

The visual personality shifts dramatically between marketing and documentation contexts while maintaining underlying structural consistency.

Marketing surfaces feel luminous and weightless. The hero gradient blob uses soft, blurred edges rather than sharp geometric shapes, suggesting creativity and fluidity. Cards and buttons carry generous border radii—pills at 9999px for primary actions, 1.75rem for large feature cards, 1rem for standard panels. Shadows are subtle and cool-tinted, lifting surfaces without heavy material presence. Icons are simple line drawings in accent blue, paired with bold feature titles in near-black.

Documentation surfaces are austere and functional. The near-black canvas eliminates visual noise for extended reading. Hierarchy is established through value steps: ink-dark for primary text, muted-ink-dark for secondary, and hairline-dark for structural borders. The only color intrusion is the accent blue on active navigation items and inline links. Code blocks sit in slightly elevated dark surfaces with JetBrains Mono providing monospace rhythm against the sans-serif body.

Both contexts share a preference for rounded geometry over sharp corners, and both use pill-shaped buttons as the primary call-to-action form. The transition between modes should feel like flipping a switch—same components, different atmospheric conditions.

## Components

### Primary Action Button

A filled pill button used for downloads, sign-ups, and major transitions.

- **Anatomy**: Text label with optional trailing icon, centered within a rounded container.
- **Surface**: Background uses accent (#3783FD), text uses surface (#FFFFFF).
- **Typography**: body token, weight 500, with -0.04em letter spacing for tighter button fit.
- **Shape**: Full pill at 9999px border radius.
- **Spacing**: 0.875rem vertical padding, 1.25rem horizontal padding, with 0.5rem gap between text and icon.
- **Composition**: Inline-flex with centered alignment.
- **Variants**: A secondary variant uses transparent background with ink text and border token stroke for less prominent actions.

### Sidebar Navigation

The persistent documentation navigation anchored to the viewport left.

- **Anatomy**: Logo and search field at top, followed by categorized link lists, with footer icons at bottom.
- **Surface**: canvas-dark background with border-right in border-dark.
- **Typography**: navigation token for links, label token for category headers in muted-ink-dark.
- **Shape**: Fixed width, full viewport height, no border radius.
- **Spacing**: 1rem padding for category headers, 0.5rem padding for individual links with 0.5rem vertical margin between categories.
- **Composition**: Vertical stack with consistent left alignment.
- **Variants**: Active link uses surface-elevated-dark background with ink-dark text; hover state brightens text to ink-dark without background change.

### Feature Card

Marketing component for presenting product capabilities in a three-column grid.

- **Anatomy**: Icon in accent blue, bold heading in ink, descriptive paragraph in muted-ink.
- **Surface**: surface background with border token stroke, or transparent for simpler presentations.
- **Typography**: heading token for titles, body-small for descriptions.
- **Shape**: 0.75rem border radius for standard cards, 1.75rem for hero feature panels.
- **Spacing**: 1.5rem internal padding, 2rem gap between cards in grid.
- **Composition**: Vertical stack with icon top-aligned, text left-aligned below.

### Code Block

Technical content container for documentation and marketing feature demonstrations.

- **Anatomy**: Monospace text with optional language label, copy button, or line numbers.
- **Surface**: code-bg in light mode, code-bg-dark in documentation.
- **Typography**: code or code-medium token depending on prominence.
- **Shape**: 0.5rem border radius.
- **Spacing**: 0.75rem vertical padding, 1rem horizontal padding.
- **Composition**: Block-level with overflow-x scrolling for long lines.

### Table of Contents

Right-column documentation wayfinding.

- **Anatomy**: "On this page" header followed by nested heading links.
- **Surface**: Transparent, inheriting canvas-dark.
- **Typography**: navigation token, with active section in ink-dark and inactive in muted-ink-dark.
- **Spacing**: 1rem horizontal padding, 0.5rem vertical padding per link.
- **Composition**: Fixed position on scroll, vertically centered or top-aligned depending on content length.

### Search Field

Documentation sidebar utility for finding content across the knowledge base.

- **Anatomy**: Text input with magnifying glass icon and keyboard shortcut hint.
- **Surface**: surface-elevated-dark background with subtle border.
- **Typography**: body-small for input text, label for shortcut badge.
- **Shape**: 0.5rem border radius.
- **Spacing**: 0.5rem vertical padding, 0.75rem horizontal padding, with 0.5rem gap between icon and text.

## Responsive behavior

The marketing site reflows from three-column feature grids to single-column stacks below approximately 64rem viewport width. Hero text scales down from hero-display to section-display token. Section vertical padding reduces from 7rem to 4rem on narrow viewports.

The documentation sidebar collapses to a hamburger-triggered overlay below 64rem, freeing the full width for content. The table of contents hides entirely on narrow screens, with heading anchor links remaining accessible via the collapsed menu. Main content padding reduces from 3rem to 1.5rem horizontal.

Touch targets maintain minimum 2.75rem tap area. Font sizes do not scale below 1rem for body text to preserve readability. Code blocks gain horizontal scroll rather than text wrapping to prevent broken syntax display.

## Practical implementation guidance

### Preserve
- The stark contrast between light marketing and dark documentation modes—this duality is central to brand recognition.
- DM Sans at light weights (300) for large headings; the thin stroke creates elegance at display sizes.
- JetBrains Mono for all technical content, including inline code, terminal examples, and API references.
- Pill-shaped primary buttons with accent fill; this is the most recognizable interactive element.
- Generous section padding on marketing pages; the whitespace conveys confidence and clarity.

### Avoid
- Mixing light and dark surfaces within the same page context; mode switches should be complete, not partial.
- Using pure black (#000000) for backgrounds; the slightly warmed canvas-dark (#0A0A0A) reduces eye strain.
- Shrinking body text below 1rem in documentation; the long-form reading context demands minimum comfortable size.
- Adding decorative gradients or shadows to documentation surfaces; the dark mode succeeds through restraint.
- Using accent color for large background fills; reserve it for interactive elements and small indicators.

### Recommended Build Order
1. Establish CSS custom properties for both color modes with a data-attribute or class toggle.
2. Implement DM Sans with the full weight range (300, 400, 500, 600) and JetBrains Mono at 400 and 500.
3. Build the documentation shell first—sidebar, content area, and table of contents—since this has the most rigid grid requirements.
4. Add marketing components atop the same foundation, leveraging the light mode tokens.
5. Implement the mode switch mechanism and verify all components render correctly in both contexts.

### Accessibility
- Ensure accent blue (#3783FD) against white meets WCAG AA for large text and UI components; against dark backgrounds, verify contrast with ink-dark.
- Documentation links should show visible focus rings in accent color, not relying solely on color change.
- Code blocks need semantic HTML (pre and code elements) with appropriate ARIA labels for screen reader users.
- The sidebar navigation should be reachable via keyboard and announce current page state with aria-current.
- Motion for the hero gradient blob should respect prefers-reduced-motion, settling to a static gradient or solid fill.

## Scope note

This guide covers the marketing homepage and documentation quickstart page as visible in the supplied materials. Mobile layouts, animation specifications, form validation states, and the in-app editor interface are not represented.

# How lit.dev is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/lit.dev-design)

Last updated: 2026-08-10

## Captured pages

[![Homepage hero with Lit logo, npm install command, and three-column feature grid with code snippet preview](https://pin.fontofweb.com/7865?format=jpg)](https://design.withfudge.com/share/pin-7865)

[Homepage hero with Lit logo, npm install command, and three-column feature grid with code snippet preview](https://design.withfudge.com/share/pin-7865)

[![Vibrant blue brand band showcasing Adobe, Google, Microsoft, and other company logos in a grid](https://pin.fontofweb.com/7864?format=jpg)](https://design.withfudge.com/share/pin-7864)

[Vibrant blue brand band showcasing Adobe, Google, Microsoft, and other company logos in a grid](https://design.withfudge.com/share/pin-7864)

[![Dark-themed documentation page with left navigation sidebar, article content, and right table of contents](https://pin.fontofweb.com/1679?format=jpg)](https://design.withfudge.com/share/pin-1679)

[Dark-themed documentation page with left navigation sidebar, article content, and right table of contents](https://design.withfudge.com/share/pin-1679)

[![Dark footer with centered Lit logo mark, social media icons, and copyright licensing text](https://pin.fontofweb.com/1678?format=jpg)](https://design.withfudge.com/share/pin-1678)

[Dark footer with centered Lit logo mark, social media icons, and copyright licensing text](https://design.withfudge.com/share/pin-1678)

## Overview

The Lit website presents a dual-mode visual system optimized for developer audiences. The homepage operates in a light, airy mode with generous whitespace, a prominent brand hero, and clear feature exposition. The documentation and deeper pages switch to a high-contrast dark theme that reduces eye strain during extended reading sessions. The design prioritizes code readability through careful typographic pairing: Manrope handles all interface and marketing text with a friendly geometric sensibility, while Roboto Mono provides syntax highlighting for code examples. Electric blue serves as the unifying accent across both modes, appearing in the logo mark, primary actions, links, and section borders. The overall impression is technical credibility balanced with approachable clarity—appropriate for a library that aims to simplify web component development.

## Colors

The color system supports two distinct modes with shared accent logic.

| token | value | use |
|---|---|---|
| action | #334EFF | Primary buttons, active navigation states, logo accent, section top borders |
| action-hover | #005CC5 | Link hover states, deeper blue for emphasis |
| ink | #242424 | Primary text on light backgrounds, headings |
| muted-ink | #3E3E3E | Secondary headings, feature titles |
| canvas | #FFFFFF | Homepage background, light mode surface |
| surface | #F4F4F4 | Alternate section backgrounds, code block surrounds |
| surface-dark | #000000 | Documentation page background |
| border | #E2E2E2 | Subtle dividers, hairline separators |
| border-accent | #334EFF | Feature card top borders, active indicators |
| text-inverse | #FFFFFF | Text on dark backgrounds, buttons, brand band |
| text-muted | #6E6E6E | Captions, auxiliary information |
| code-keyword | #D92F3F | Syntax: keywords, control flow |
| code-function | #005CC5 | Syntax: functions, methods |
| code-string | #032F62 | Syntax: string literals |
| code-type | #008176 | Syntax: types, interfaces |
| code-comment | #6E6E6E | Syntax: comments |

The light mode homepage uses white canvas with dark ink text, creating maximum readability for marketing content. The dark documentation mode inverts this relationship, using pure black for the deepest background with content areas rendered in near-black tones derived from the image palette. The electric blue accent remains consistent across both modes, ensuring brand recognition and wayfinding continuity. Code syntax highlighting adds a controlled palette of red, blue, deep navy, and teal against neutral grays for comments.

## Typography

The type system pairs a geometric sans-serif for interface text with a monospace face for code.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Manrope | 1.25rem | 800 | 1.7 | normal | Feature card titles, emphasized labels |
| section-display | Manrope | 1.375rem | 600 | 1.7 | normal | Section headings, feature subtitles |
| body | Manrope | 1.125rem | 400 | 1.7 | normal | Marketing copy, descriptions |
| body-small | Manrope | 1rem | 400 | 1.7 | normal | Dense text, secondary descriptions |
| label | Manrope | 0.8125rem | 400 | 1.5 | normal | Captions, small metadata |
| navigation | Manrope | 1.0125rem | 600 | 1.5 | normal | Top nav, sidebar section headers |
| code | Roboto Mono | 1rem | 400 | 1.6 | normal | Code blocks, inline syntax |

Manrope appears in weights 400 (Regular), 600 (Semi Bold), 700 (Bold), and 800 (Extra Bold). The Extra Bold weight serves display purposes with strong presence at small sizes, while Semi Bold handles navigation and interactive emphasis. Regular weight at 1.125rem provides the primary reading experience with comfortable line height. Roboto Mono at 1rem with 1.6 line height gives code blocks breathing room without excessive vertical spread.

The Manrope family is designed by Mikhail Sharanda. Open Sans and Roboto Mono credits are available in the source files. Verify licensing for these families before production use.

## Layout

The homepage follows a centered single-column flow with controlled width. Content lives within a maximum width container of approximately 82.8125rem, centered with auto margins. Sections stack vertically with 3.375rem vertical padding creating rhythmic breathing room. The hero area presents the Lit logo mark and wordmark left-aligned with a tagline and call-to-action group to the right, establishing immediate brand recognition and developer utility through the visible npm install command.

Below the hero, a three-column feature grid divides the content area with equal-width columns separated by subtle vertical rules. Each column contains an icon, a colored title, and descriptive text. This grid collapses to single column on narrower viewports. Further down, a split layout pairs a code example block with explanatory text, demonstrating the library's API in context.

The documentation layout switches to a three-zone system: a fixed left sidebar for navigation hierarchy, a central content column for prose and examples, and a right sidebar for in-page table of contents. The left sidebar uses nested collapsible sections with clear indentation and active state indicators. The content column maintains comfortable measure for reading, while the right sidebar provides persistent wayfinding through longer articles.

Spacing derives from a 0.125rem base unit. Common increments include 1rem for tight internal padding, 1.6875rem for component gaps, 3.375rem for section rhythm, and 8.25rem for major horizontal margins.

## Visual language

The visual identity centers on the Lit logo mark: a geometric crystalline form built from overlapping triangles in electric blue and cyan, suggesting light refraction and web component composition. This mark appears at multiple scales—from favicon to hero centerpiece—always maintaining clear space around it.

Iconography throughout the interface uses simple geometric shapes with the same electric blue accent. Feature icons sit in rounded square containers with subtle background tints, creating visual anchors in the feature grid. The brand band inverts the entire palette, flooding the section with solid electric blue and presenting partner logos in white, creating a bold social proof moment.

Code presentation receives special visual treatment. Blocks sit on light gray surfaces with subtle rounded corners, using syntax highlighting that differentiates keywords, functions, strings, and types through color alone—no additional weight or style changes needed. The JS/TS language toggle appears as a compact segmented control above code examples.

The dark documentation mode maintains this visual discipline: the logo mark inverts to white, navigation uses muted grays with blue active indicators, and code blocks shift to a darker surface while preserving the same syntax highlighting palette for consistency.

## Components

### Primary action button

- **Anatomy**: Text label centered within a solid rectangular container
- **Surface**: Background `{colors.action}`, text `{colors.text-inverse}`
- **Typography**: `{typography.navigation}` at 1rem, weight 600
- **Shape**: Zero border radius, sharp rectangular corners
- **Spacing**: Padding 1px 1.125rem, compact height
- **Composition**: Often paired with a secondary text input or command display
- **Variants**: Appears in hero alongside the npm install command; also in navigation as active state

### Feature card

- **Anatomy**: Icon container, colored title, descriptive paragraph
- **Surface**: Transparent on white canvas; top border `{colors.border-accent}` at 2px
- **Typography**: Title uses `{typography.hero-display}` in blue; body uses `{typography.body-small}` in `{colors.ink}`
- **Shape**: No border radius; separated by vertical rules in three-column layout
- **Spacing**: Internal padding 3.375rem top, generous bottom margin
- **Composition**: Equal-width columns with 1.6875rem gutters; icon left-aligned above text

### Code block

- **Anatomy**: Language toggle, code content with syntax highlighting
- **Surface**: `{colors.surface}` background, subtle rounded corners
- **Typography**: `{typography.code}` with color-coded tokens
- **Shape**: 0.5rem border radius
- **Spacing**: Internal padding 1.6875rem; external margin separates from prose
- **Composition**: Often placed in split layout with explanatory text; JS/TS toggle floats top-right

### Navigation bar

- **Anatomy**: Logo mark and wordmark left, link group center-right, utility icons far right
- **Surface**: Transparent or white matching page mode
- **Typography**: Links use `{typography.navigation}` in `{colors.text-muted}`, active in `{colors.action}`
- **Shape**: Full-width bar, no border
- **Spacing**: Links padded 0.304rem 0.506rem with 0.253rem horizontal margins
- **Composition**: Documentation dropdown with version badge; search and theme toggle as icon buttons

### Documentation sidebar

- **Anatomy**: Nested collapsible sections with bullet indicators, active page highlight
- **Surface**: `{colors.surface-dark}` background
- **Typography**: Section headers in `{typography.navigation}` muted; active item in `{colors.action}`
- **Shape**: Fixed position, full viewport height
- **Spacing**: Section headers with 1rem vertical padding; nested items indented
- **Composition**: Left zone of three-column documentation layout; scrolls independently

### Footer

- **Anatomy**: Logo mark centered, social icon row, copyright and licensing text
- **Surface**: Dark background matching documentation mode
- **Typography**: Legal text in `{typography.body-small}` muted; links in `{colors.action}`
- **Shape**: Full-width, no border radius
- **Spacing**: Generous vertical padding; icons evenly distributed horizontally
- **Composition**: Three-zone horizontal layout: wordmark left, mark center, social icons right

## Responsive behavior

The three-column feature grid should collapse to single column on viewports below approximately 60rem, with vertical rules becoming horizontal dividers. The documentation three-zone layout should stack: the table of contents moves above content or collapses into a dropdown, while the left sidebar becomes a toggleable overlay. The homepage hero maintains its horizontal arrangement on tablet but stacks vertically on mobile with the npm command and button full-width. Code blocks should remain horizontally scrollable rather than wrapping, preserving line integrity. Font sizes remain consistent across breakpoints; spacing scales down proportionally using the base unit.

## Practical implementation guidance

### Preserve
- The sharp zero-radius button aesthetic; this is a deliberate technical, utilitarian choice
- The dual-mode light/dark system with shared blue accent
- Manrope's weight range from Regular through Extra Bold for clear hierarchy without size inflation
- Syntax highlighting colors exactly as specified for code readability
- The logo mark's clear space and proportional relationship to the wordmark

### Avoid
- Rounding corners on primary actions; this contradicts the established technical tone
- Using Open Sans for body text; Manrope carries the full typographic load
- Introducing additional accent colors beyond the electric blue family
- Lightening the dark documentation background; the near-black serves extended reading sessions
- Removing the vertical rules from the feature grid without replacing them with equivalent separation

### Recommended build order
1. Establish the base spacing unit and type scale with Manrope loaded at all required weights
2. Implement the light mode homepage with hero, feature grid, and code block sections
3. Add the dark documentation mode with sidebar navigation and content styling
4. Integrate Roboto Mono with syntax highlighting rules
5. Build the navigation component with mode toggle and documentation dropdown
6. Polish responsive behavior for the feature grid and documentation layout

### Accessibility
- Ensure the electric blue on white meets WCAG AA contrast ratios; the #334EFF value should be verified against both white and near-white backgrounds
- In dark mode, confirm that body text on near-black surfaces maintains sufficient contrast
- The JS/TS code toggle should use aria-pressed to indicate active state
- Sidebar navigation requires proper heading hierarchy and aria-expanded for collapsible sections
- Code blocks need scrollable containers with visible focus indicators for keyboard navigation

## Scope note

This guide covers the homepage and documentation page surfaces visible in the supplied images. The Playground, Blog, and Learn sections are not represented. Mobile layouts, animation behavior, hover states beyond basic color shifts, and form validation states are not documented. The spacing and type scales derive from exact pixel measurements in the source interface.

# How projectfluent.org is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/projectfluent.org-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with centered Fluent title, tagline, and outlined Learn more button on white background with script logo and minimal navigation](https://pin.fontofweb.com/5619?format=jpg)](https://design.withfudge.com/share/pin-5619)

[Hero section with centered Fluent title, tagline, and outlined Learn more button on white background with script logo and minimal navigation](https://design.withfudge.com/share/pin-5619)

[![Interactive walkthrough with syntax-highlighted code panel showing pluralization examples and explanatory body text with inline code styling](https://pin.fontofweb.com/5618?format=jpg)](https://design.withfudge.com/share/pin-5618)

[Interactive walkthrough with syntax-highlighted code panel showing pluralization examples and explanatory body text with inline code styling](https://design.withfudge.com/share/pin-5618)

[![Homepage with feature sections, live code playground demonstrating asymmetric localization with variable interpolation and gender cases](https://pin.fontofweb.com/5617?format=jpg)](https://design.withfudge.com/share/pin-5617)

[Homepage with feature sections, live code playground demonstrating asymmetric localization with variable interpolation and gender cases](https://design.withfudge.com/share/pin-5617)

## Overview

Project Fluent presents itself as a developer-focused localization framework with a visual identity that prioritizes clarity and technical credibility over decorative flourish. The site opens with a dramatic, airy hero: a single word "Fluent" rendered in an extremely light weight, centered in vast whitespace, anchored by a script wordmark in the upper left and a minimal navigation bar. This establishes immediate confidence through restraint rather than density.

The design system operates on a principle of progressive disclosure. The homepage introduces the concept through large typography and brief feature descriptions, then immediately demonstrates capability through embedded, interactive code playgrounds. These playgrounds are not decorative screenshots but live syntax-highlighted environments showing real Fluent syntax—variable interpolation, plural selectors, gender cases—with editable inputs and live output. This pattern of "explain, then demonstrate" repeats throughout the visible surfaces.

Color is used sparingly and purposefully. The base palette is almost monochromatic: black text on white canvas, with grays for hierarchy and borders. Color enters primarily through syntax highlighting in code blocks, where a restrained set of semantic colors distinguishes keywords, strings, variables, and comments. The Sarina script face provides the only organic, humanizing element in an otherwise rational, engineered aesthetic.

The overall impression is of a mature open-source tool: confident enough to let whitespace speak, technically precise in its presentation of code, and structured to guide developers from concept to implementation without visual distraction.

## Colors

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, headings, button borders, logo |
| canvas | #FFFFFF | Page background, button fill, input backgrounds |
| muted-ink | #555555 | Secondary text, navigation links, feature descriptions |
| surface | #F5F5F5 | Code playground backgrounds, alternate section fills |
| border | #CCCCCC | Button outlines, playground borders, dividers |
| syntax-keyword | #0000FF | Fluent syntax keywords like `->`, selectors |
| syntax-string | #008000 | String literals in code examples |
| syntax-variable | #800080 | Variable references like `$userName`, `$tabCount` |
| syntax-comment | #808080 | Comments in code blocks, italicized |
| syntax-function | #000080 | Function-like terms and identifiers |
| accent-link | #0000FF | Inline text links, CLDR reference |

The color system divides into two modes: interface and syntax. The interface mode is deliberately austere—black, white, and a narrow gray scale—creating maximum contrast for reading and scanning documentation. The syntax mode introduces controlled color coding for code comprehension, using classic terminal-inspired hues that remain legible against the light gray playground surface.

No dark mode is visible in the supplied surfaces. The design assumes light-environment reading throughout. Photographic or illustrative elements are absent; the visual interest comes from typography scale and code structure rather than imagery.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | system-ui | 4rem | 200 | 1.1 | -0.02em | Homepage hero title |
| section-display | system-ui | 2.5rem | 200 | 1.2 | -0.01em | Feature section headings |
| body | system-ui | 1rem | 400 | 1.6 | 0 | Paragraph text, descriptions |
| body-large | system-ui | 1.25rem | 300 | 1.5 | 0 | Hero tagline, introductory text |
| label | system-ui | 0.875rem | 400 | 1.4 | 0.01em | Button text, captions |
| navigation | system-ui | 0.875rem | 400 | 1 | 0 | Header navigation links |
| code | monospace | 0.875rem | 400 | 1.5 | 0 | Inline code references |
| code-block | monospace | 0.8125rem | 400 | 1.6 | 0 | Playground and block code |
| wordmark | Sarina | 1.5rem | 400 | 1 | 0 | Logo wordmark |

The typographic system centers on a single sans-serif family used across all interface text, with weight and scale providing hierarchy rather than family change. The hero and section displays use an extremely light weight (200) that creates an elegant, almost tentative quality—surprising for a technical tool, and distinctive against typical developer-documentation aesthetics. This lightness requires careful size thresholds; below 1.5rem, the 200 weight would lose legibility.

The Sarina family serves exclusively as the script wordmark. Its flowing, connected letterforms contrast deliberately with the geometric neutrality of the system UI face, giving the brand a human, approachable signature without affecting the functional typography of the interface. Verify licensing for these families before production use.

Code typography uses a generic monospace family at slightly reduced sizes, with block code smaller than inline code to accommodate dense playground content. Line heights are generous in code blocks to support the structural indentation visible in the Fluent syntax examples.

## Layout

The layout follows a centered, single-column model with strategic asymmetry in content sections. The homepage hero occupies substantial vertical space—approximately 60% of the viewport—before any secondary content appears. This vertical generosity signals confidence and gives the lightweight display typography room to breathe.

Navigation sits at the top in a horizontal bar, left-aligned with the wordmark and right-aligned with text links. No container bounds the navigation; it floats in the same whitespace as the hero, creating an open, unbounded feel.

Below the hero, the layout shifts to a split pattern: textual feature descriptions occupy the left portion, while live code playgrounds occupy the right. This two-column arrangement is not rigidly grid-based; the code panels appear to have their own internal padding and border, sitting as distinct objects within the flow rather than cells in a strict grid. The asymmetry—wider text column, narrower playground—creates visual rhythm and emphasizes the explanatory role of the text.

Content width appears constrained to a comfortable reading measure, approximately 64rem maximum, with generous horizontal margins on larger viewports. The code playgrounds break this containment slightly, extending toward the right edge or sitting as self-contained panels with their own background and border.

Vertical spacing between sections is substantial, using multiples of the base unit to create clear separation without explicit dividers. The code playgrounds introduce internal structure through their own padding, border, and syntax-highlighted content, functioning as both demonstration and visual anchor.

## Visual language

The visual language of Project Fluent is one of radical simplicity and technical demonstration. Every element earns its place; there are no decorative backgrounds, no gradient flourishes, no shadow systems creating artificial depth. The design trusts that well-structured code, clear typography, and ample whitespace will communicate competence more effectively than visual noise.

The signature gesture is the outlined button: a simple rectangle with a thin border, no fill, no radius beyond the minimal. This appears in the hero as the "Learn more" call-to-action and establishes a pattern of restraint that extends throughout. Buttons do not invite touch through padding alone; they declare themselves through border presence and centered text.

Code playgrounds are the most visually complex elements, yet even these maintain discipline. They use a light gray background to separate from the white canvas, a thin border to define edges, and syntax coloring that follows established conventions rather than inventing new ones. The syntax highlighting itself becomes a visual texture—blocks of blue, purple, green, and gray creating pattern and rhythm within the technical content.

The wordmark introduces the only organic curve in the system. Its script flow contrasts with the rectilinear precision of everything else, serving as brand warmth without compromising functional clarity. This single humanizing element prevents the design from feeling sterile while maintaining its technical authority.

## Components

### Primary Button

- **Anatomy**: Text label centered within a rectangular border
- **Surface**: Transparent background (`{colors.canvas}`), 1px solid border in `{colors.border}`
- **Typography**: `{typography.label}`, `{colors.ink}`
- **Shape**: Sharp corners, no border-radius
- **Spacing**: 0.75rem vertical padding, 1.5rem horizontal padding
- **Composition**: Centered within its container, standalone rather than grouped
- **Variants**: No visible hover, active, or disabled states in supplied images

The button is deliberately understated—more a labeled frame than a conventional push button. This suits the documentation context where aggressive calls-to-action would feel out of place.

### Navigation Bar

- **Anatomy**: Wordmark left, horizontal text links right
- **Surface**: Transparent, no background separation from page
- **Typography**: `{typography.navigation}`, `{colors.muted-ink}` for links
- **Spacing**: Generous horizontal padding, moderate vertical padding
- **Composition**: Flex row, space-between alignment
- **Variants**: No visible active state indicator; current page not distinguished in supplied images

### Code Playground

- **Anatomy**: Block-level container with internal code display, optional interactive inputs below
- **Surface**: `{colors.surface}` background, 1px `{colors.border}` border
- **Typography**: `{typography.code-block}` for code, `{typography.code}` for inline elements within explanatory text
- **Shape**: Sharp corners, no radius
- **Spacing**: Internal padding approximately 1rem, code lines separated by standard line height
- **Composition**: Self-contained panel, often paired with explanatory text in adjacent column
- **Variants**: Some playgrounds show editable inputs (text fields, radio buttons) with live output; others are static demonstrations

The playground is the most complex visible component, embedding syntax-highlighted code with color-coded elements: keywords in `{colors.syntax-keyword}`, variables in `{colors.syntax-variable}`, strings in `{colors.syntax-string}`, comments in `{colors.syntax-comment}`. Interactive variants include form inputs that update displayed output, demonstrating Fluent's dynamic capabilities.

### Feature Section

- **Anatomy**: Heading, descriptive paragraph, optional code playground companion
- **Surface**: Transparent, inherits `{colors.canvas}`
- **Typography**: `{typography.section-display}` for heading, `{typography.body}` for description
- **Spacing**: Substantial vertical margin between sections, heading margin-bottom approximately 1rem
- **Composition**: Text block left-aligned, playground right-aligned in two-column arrangement

### Inline Code

- **Anatomy**: Monospace text span within body copy
- **Typography**: `{typography.code}`
- **Surface**: No visible background highlight or border in supplied images
- **Composition**: Flows within paragraph text, distinguished by family change alone

## Responsive behavior

No mobile layouts are visible in the supplied images. Based on the desktop structure, the following responsive adaptations are recommended:

At viewports below approximately 768px, the two-column feature layout should stack vertically, with code playgrounds following their explanatory text rather than sitting beside it. The hero display size should reduce to `{typography.section-display}` or smaller to maintain line integrity.

Navigation links may collapse to a menu or reduce to essential items on narrow viewports. The wordmark should remain visible as the primary brand anchor.

Code playgrounds require horizontal scroll or reduced font size on narrow screens, as Fluent syntax examples rely on indentation and line structure that cannot wrap arbitrarily. Consider `overflow-x: auto` with preserved whitespace.

The outlined button should maintain its proportions but may increase touch target size through additional padding on touch devices.

## Practical implementation guidance

### Preserve
- The extreme lightness of display typography (weight 200) at large sizes; this is the site's most distinctive quality
- The script wordmark as the sole organic element, used only for brand identification
- The syntax highlighting color conventions: blue for keywords, purple for variables, green for strings, gray for comments
- The outlined, unfilled button as the primary action pattern
- Generous whitespace around the hero and between sections

### Avoid
- Adding background colors, gradients, or shadows to create artificial depth
- Using the Sarina script face for any text beyond the wordmark
- Introducing border-radius to buttons or panels; the sharp corners are intentional
- Making code playgrounds visually heavier than their content; the light gray surface is sufficient
- Using dark mode without careful testing of the light-weight display typography

### Recommended Build Order
1. Establish the base typography scale with the light-weight display sizes and system UI family
2. Implement the navigation bar with transparent background and muted link colors
3. Build the hero section with centered alignment and substantial vertical padding
4. Create the code playground component with syntax highlighting and light gray surface
5. Develop the two-column feature layout with text and playground pairing
6. Add the outlined button pattern for calls-to-action

### Accessibility
- The weight 200 display text requires sufficient size; do not use below 2rem
- Code playgrounds need keyboard-navigable inputs when interactive
- Syntax highlighting should not be the sole means of conveying code structure; consider additional semantic markup
- The light gray playground background (`{colors.surface}`) against white canvas provides subtle separation; ensure code text maintains adequate contrast
- Navigation links should have visible focus indicators despite the minimal styling

## Scope note

This guide covers the homepage and interactive walkthrough surfaces visible in the supplied images. Mobile breakpoints, additional interior pages, hover and focus states, loading indicators, and error handling are not represented. Measurements are practical adaptation targets derived from visible proportions rather than extracted values.

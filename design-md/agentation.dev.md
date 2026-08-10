# How agentation.dev is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/agentation.dev-design)

Last updated: 2026-08-10

## Captured pages

[![Collapsed mobile navigation showing logo, path breadcrumb, and vertical menu with NEW badge](https://pin.fontofweb.com/6235?format=jpg)](https://design.withfudge.com/share/pin-6235)

[Collapsed mobile navigation showing logo, path breadcrumb, and vertical menu with NEW badge](https://design.withfudge.com/share/pin-6235)

[![Full desktop documentation page with sidebar navigation, hero screenshot, and floating action bar](https://pin.fontofweb.com/6234?format=jpg)](https://design.withfudge.com/share/pin-6234)

[Full desktop documentation page with sidebar navigation, hero screenshot, and floating action bar](https://design.withfudge.com/share/pin-6234)

## Overview

Agentation's documentation site presents a developer tool through a restrained, highly legible visual system. The design prioritizes content clarity over decorative flourish, using a monochrome palette and single type family to keep attention on the product's functionality. The interface is organized around a persistent sidebar navigation and a scrolling content area, a pattern familiar from technical documentation and SaaS marketing sites. The overall impression is one of precision and utility: every element serves the goal of explaining how the annotation tool works and how developers can integrate it into their workflow.

The visual identity centers on the product's name rendered as a path-like string—`/agentation`—which appears in the sidebar and reinforces the developer-centric positioning. Product screenshots are embedded directly in the content flow, showing the floating annotation interface in context. These screenshots use rounded corners and subtle shadow to distinguish them from the flat page surface. The design maintains consistency across viewport sizes, collapsing the sidebar into a vertical stack on narrow screens while preserving the same typographic hierarchy and spacing logic.

## Colors

The color system is strictly monochrome, using black, near-black, light gray, and white. This restraint supports the technical, utilitarian character of the site and ensures maximum contrast for code-heavy content.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, headings, active navigation, floating bar background, action buttons |
| muted-ink | #111111 | Secondary text, body copy, inactive navigation items, subtle UI elements |
| canvas | #FFFFFF | Page background, sidebar background, card surfaces, primary badge backgrounds |
| surface | #F5F5F5 | Screenshot card backgrounds, subtle fill areas, secondary badge backgrounds, browser chrome mockups |
| action | #000000 | Primary button fills, floating action bar, emphasis surfaces |
| action-text | #FFFFFF | Text on dark buttons and bars, inverted for contrast |
| border | #000000 | Hairline dividers, input outlines, subtle separators |

The monochrome palette creates a document-like reading experience. Black text on white canvas provides optimal legibility for long-form technical content. The near-black muted-ink is reserved for secondary information, establishing hierarchy without introducing chromatic distraction. The light gray surface tone appears in product screenshots as the browser chrome and card fill, creating subtle depth without breaking the monochrome discipline. The action and action-text pairing inverts the primary relationship for interactive elements, drawing attention through contrast reversal rather than color. No gradients, tints, or accent colors appear in the interface. Photographic content within product screenshots introduces the only color variation, which makes the embedded images more prominent against the neutral field.

## Typography

The type system uses Inter exclusively, a choice that reinforces the modern, technical character of the tool. The hierarchy is established through weight and size variation rather than family changes, creating a cohesive reading experience.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Inter | 1.125rem | 600 | 1.2 | -0.02em | Page title, major section headings |
| section-display | Inter | 1.125rem | 600 | 1.2 | -0.02em | Subsection headings, feature titles |
| body | Inter | 0.875rem | 400 | 1.6 | 0 | Paragraph text, descriptions, explanations |
| body-small | Inter | 0.75rem | 400 | 1.5 | 0 | Captions, metadata, secondary descriptions |
| label | Inter | 0.75rem | 500 | 1.4 | 0.01em | Buttons, badges, navigation labels, UI chrome |
| navigation | Inter | 0.75rem | 400 | 1.4 | 0 | Sidebar menu items, table of contents |
| code | Inter | 0.75rem | 400 | 1.5 | 0 | Inline code, technical terms, path strings |

The type scale is compact, with most functional text set at 0.75rem or 0.875rem. This density supports the documentation use case where scanning and reference are primary activities. Headings receive tighter tracking and slightly larger sizing to create clear landmarks without dramatic scale jumps. The path-style branding `/agentation` uses the same family at a slightly heavier weight, integrating the identity into the typographic flow rather than treating it as a separate logo mark.

Verify licensing for these families before production use.

## Layout

The page structure follows a classic documentation layout with a fixed sidebar and scrollable main content. On desktop viewports, the sidebar occupies a narrow left column while the content area centers readable text with generous margins.

The sidebar contains the product identity at top—a stylized face icon followed by the `/agentation` path string—then a vertical navigation menu with items for Overview, Install, Features, Output, API, Changelog, and FAQ. The API item carries a "NEW" badge. Version information appears at the bottom. The sidebar width is approximately 16rem, creating enough room for the navigation labels without dominating the viewport.

The content area uses a centered single-column layout for text, with product screenshots breaking the text measure to full content width. Maximum line length for body text appears constrained to roughly 65 characters, supporting comfortable reading. Sections are separated by substantial vertical whitespace, with headings positioned closer to their following content than to preceding sections.

Spacing follows a modular system based on 0.125rem increments. Common values include 0.5rem for tight internal padding, 0.75rem for button padding, 1rem for card internal spacing, 1.5rem for content gaps, and 3rem for major section separations. The floating action bar at the bottom of product screenshots uses 0.625rem corner radius, while larger cards and screenshots use 1rem radius.

## Visual language

The visual language communicates technical competence through restraint. Every element is flat—no gradients, no glassmorphism, no decorative textures. Depth is suggested only through the layered composition of screenshots and the subtle shadow on floating interface elements within those screenshots.

The product screenshots are the most visually complex elements. They show browser-like chrome with traffic-light dots, then the annotation interface with numbered badges, selection highlights, and a dark floating action bar. These images use rounded corners to soften their rectilinear forms and integrate them into the page. The dark floating bar within screenshots echoes the site's own monochrome logic, creating visual rhyme between the product and its documentation.

Iconography is minimal and functional. The sidebar includes a small face-like logo mark. Navigation items are text-only. Within screenshots, tool icons appear as simple glyphs on the dark bar. The "NEW" badge uses uppercase text in a small rounded rectangle, treating status as typography rather than decoration.

The overall density is moderate—neither cramped nor spacious. Information is chunked into scannable sections with numbered lists, short paragraphs, and embedded visuals. This supports both first-time reading and later reference, matching how developers typically consume documentation.

## Components

### Sidebar Navigation

- **Anatomy**: Vertical stack containing logo mark, brand path, navigation links, and version footer
- **Surface**: Transparent or white background, no visible border
- **Typography**: `{typography.navigation}` for items, `{typography.label}` for active state and badges
- **Spacing**: Compact vertical rhythm with approximately 0.5rem between items
- **Composition**: Left-aligned text, full-width clickable rows
- **Variants**: Active state uses darker text; "NEW" badge appears as small rounded pill beside API label

### Content Section

- **Anatomy**: Heading, optional subheading, body text, and embedded media
- **Surface**: White canvas background
- **Typography**: `{typography.hero-display}` for major headings, `{typography.section-display}` for subsections, `{typography.body}` for paragraphs
- **Spacing**: 3rem before major headings, 1.5rem between related blocks
- **Composition**: Single column with automatic line length constraint

### Product Screenshot Card

- **Anatomy**: Rounded container holding browser chrome mockup, annotated interface image, and overlaid floating bar
- **Surface**: `{colors.surface}` background, with subtle shadow suggesting elevation
- **Shape**: 1rem border radius
- **Spacing**: 1.5rem vertical margin, full content width
- **Composition**: Centered, breaking the text column

### Floating Action Bar

- **Anatomy**: Dark horizontal bar containing icon buttons
- **Surface**: `{colors.ink}` background
- **Typography**: `{typography.label}` for any text, icon glyphs for tools
- **Shape**: 0.625rem border radius, pill-like proportions
- **Spacing**: Compact internal padding, approximately 0.5rem horizontal, 0.375rem vertical

### Primary Button

- **Anatomy**: Text label on solid fill
- **Surface**: `{colors.action}` background, `{colors.action-text}` text
- **Typography**: `{typography.label}`
- **Shape**: 0.5rem border radius
- **Spacing**: 0.75rem horizontal padding, 0.625rem vertical padding

### Inline Link

- **Anatomy**: Text within body copy
- **Surface**: Transparent
- **Typography**: `{typography.body}` with underline decoration
- **Color**: `{colors.ink}`

### Badge

- **Anatomy**: Small text label in rounded container
- **Surface**: `{colors.surface}` background, subtle border or none
- **Typography**: `{typography.label}` uppercase
- **Shape**: 0.1875rem border radius

## Responsive behavior

The layout adapts from a two-column sidebar-plus-content arrangement on desktop to a single-column stack on narrow viewports. The sidebar collapses to a header section containing the logo, path, and a vertically stacked navigation menu. Content sections retain their single-column flow with maintained text measure.

On the narrowest viewports, navigation items stack with increased touch targets. The product screenshots scale proportionally, maintaining their rounded corners and internal composition. The floating action bars within screenshots remain visually coherent at reduced sizes.

When implementing responsive behavior, maintain the monochrome palette and typographic scale across breakpoints. The sidebar collapse should be immediate rather than animated, preserving the utilitarian character. Touch targets for navigation should be at least 44px in the collapsed view.

## Practical implementation guidance

### Preserve
- The strict monochrome palette—any addition of color would break the technical identity
- The single-family type system with its tight, functional scale
- The generous whitespace around major sections and embedded screenshots
- The rounded corners on screenshots and interactive elements, which soften the otherwise austere aesthetic
- The path-style brand string `/agentation` as a distinctive identity element

### Avoid
- Adding accent colors or gradient backgrounds that would compete with product screenshots
- Increasing type scale dramatically—this is a reading interface, not a marketing page
- Removing the sidebar on desktop—navigation persistence is key to the documentation experience
- Using serif fonts or decorative type that would contradict the technical tone
- Making screenshots edge-to-edge without rounded corners or internal padding

### Recommended build order
1. Establish the 0.125rem spacing unit and implement the sidebar-content grid
2. Set Inter as the sole font family with the documented scale
3. Apply the monochrome palette to all text and surface tokens
4. Build the sidebar navigation with active states and badge support
5. Create the content section component with constrained line length
6. Implement screenshot cards with rounded corners and shadow
7. Add the floating action bar pattern for interactive demonstrations
8. Implement responsive collapse for narrow viewports

### Accessibility
- Maintain the 4.5:1 contrast ratio between ink and canvas for all body text
- Ensure the near-black muted-ink still meets contrast requirements for secondary text
- Provide visible focus indicators on navigation items and buttons, using outline or background shift
- Preserve semantic heading hierarchy for screen reader navigation
- Add aria-labels to icon-only buttons in floating bars
- Consider a skip link for the sidebar navigation on repeated page visits

## Scope note

This guide covers the documentation landing and overview page of agentation.dev. Motion, hover states, focus styles, loading indicators, error pages, and additional marketing pages are not represented in the supplied material. The dark floating bars and annotation interfaces shown are product screenshots rather than live page components. Measurements are practical adaptation targets derived from visible proportions.

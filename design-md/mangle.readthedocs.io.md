# How mangle.readthedocs.io is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/mangle.readthedocs.io-design)

Last updated: 2026-08-10

## Captured pages

[![Main content area showing Datalog code blocks with steel-blue section headers, data tables with blue column headers, and collapsible SQL translation panels with right-aligned](https://pin.fontofweb.com/6083?format=jpg)](https://design.withfudge.com/share/pin-6083)

[Main content area showing Datalog code blocks with steel-blue section headers, data tables with blue column headers, and collapsible SQL translation panels with right-aligned](https://design.withfudge.com/share/pin-6083)

[![Full page layout with left sidebar navigation featuring steel-blue section headers, breadcrumb trail, main article with inline code and syntax-highlighted blocks, and top](https://pin.fontofweb.com/6082?format=jpg)](https://design.withfudge.com/share/pin-6082)

[Full page layout with left sidebar navigation featuring steel-blue section headers, breadcrumb trail, main article with inline code and syntax-highlighted blocks, and top](https://design.withfudge.com/share/pin-6082)

## Overview

This design system describes a technical documentation website built on the ReadTheDocs platform, serving as the reference for Mangle, a Datalog-based programming language. The visual language prioritizes readability and information hierarchy for developers learning a formal logic system. The interface follows a classic documentation layout with a persistent left sidebar for navigation, a main content area for explanatory prose and code examples, and supplementary navigation at the top of the page.

The aesthetic is utilitarian and academic, with a restrained color palette centered on steel-blue accents against neutral grays and white. The design emphasizes clear typographic hierarchy through size and weight contrasts, with distinctive visual treatment for code blocks and data tables that help readers distinguish explanatory text from executable examples. The overall impression is that of a trustworthy, well-organized technical reference where the visual system serves the content rather than competing with it.

## Colors

The color system is built around a steel-blue accent family that provides navigation structure and visual interest against an otherwise neutral ground. The palette is intentionally limited, with most interface elements using black, white, and grays, while steel-blue carries the brand identity and interactive affordances.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary body text, paragraph content, and default text throughout the main content area |
| muted-ink | #333333 | Secondary text, code elements, and slightly de-emphasized content |
| steel-blue | #336699 | Primary accent for sidebar section headers, active navigation states, and heading links |
| steel-blue-dark | #165E83 | Collapsible panel backgrounds, deeper accent states, and emphasis backgrounds |
| steel-blue-muted | #4070A0 | Data table column headers, secondary accent surfaces |
| mid-gray | #666666 | Tertiary text, captions, and de-emphasized metadata |
| border-light | #CCCCCC | Code block left borders, subtle dividers, and container outlines |
| surface-warm | #F2F2F2 | Alternate code block backgrounds, subtle surface variations |
| surface-cool | #F7F7F7 | Primary code block backgrounds, preformatted text areas |
| canvas | #FFFFFF | Page background, sidebar text on colored headers, and content areas |

The color logic separates content into three layers: the neutral reading layer (ink on canvas), the structural navigation layer (steel-blue family), and the illustrative code layer (surface-cool with border-light accents). The steel-blue family progresses from light to dark to create depth: steel-blue-muted for table headers that need to recede slightly, steel-blue for active navigation elements, and steel-blue-dark for interactive collapsible panels that demand attention. No dark mode is present in the visible interface; the design assumes a light-background reading environment typical of technical documentation.

## Typography

The type system relies on system sans-serif for all prose and navigation, with monospace reserved for code elements. The hierarchy is established through size and weight rather than elaborate styling, creating a clean, academic presentation suitable for technical content.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| page-title | sans-serif | 1.5rem | 700 | 1.2 | 0 | Main article headings at the top of each documentation page |
| section-heading | sans-serif | 1.25rem | 700 | 1.2 | 0 | H2-level section dividers within articles, rendered in steel-blue |
| body | sans-serif | 1rem | 400 | 1.5 | 0 | Paragraph text, explanations, and general prose content |
| code-inline | monospace | 0.875rem | 400 | 1.4 | 0 | Inline code fragments, variable names, and syntax references within paragraphs |
| code-block | monospace | 0.875rem | 400 | 1.4 | 0 | Multi-line code examples in preformatted blocks with background shading |
| nav-heading | sans-serif | 0.875rem | 700 | 1.2 | 0 | Sidebar section headers and collapsible panel titles |
| nav-item | sans-serif | 0.875rem | 400 | 1.4 | 0 | Sidebar navigation links and table of contents entries |
| breadcrumb | sans-serif | 0.875rem | 400 | 1.2 | 0 | Top navigation path showing current location in documentation hierarchy |

The page-title and section-heading tokens use bold weight to create clear document structure, while body text remains regular weight for extended reading comfort. Code elements are slightly smaller than body text to distinguish them visually while maintaining readability. The nav-heading and nav-item tokens share a size but diverge in weight, creating hierarchy within the sidebar without excessive size variation. Verify licensing for these families before production use; the system appears to use generic system fonts without custom typeface requirements.

## Layout

The page follows a fixed two-column layout with a left sidebar and a main content area. The sidebar occupies approximately 15rem of width and contains the table of contents, section navigation, search, and utility links. The main content area fills the remaining viewport width, with internal padding that keeps text lines at a comfortable reading measure.

The top of the page features a full-width utility bar with breadcrumb navigation on the left and sequential page navigation (previous, next, index) on the right. This bar sits above the two-column body and provides orientation within the documentation structure.

Within the main content area, the layout is single-column with generous vertical spacing between sections. Paragraphs flow at full width with no text columns. Code blocks break out slightly with left border accents and internal padding. Data tables are constrained to their content width rather than stretching full-width, creating a more compact presentation that aligns with the explanatory text.

The sidebar contains multiple distinct regions stacked vertically: a "Table of Contents" header with nested page links, "Previous topic" and "Next topic" navigation blocks, a "This Page" section with show source link, and a "Quick search" form with text input and submit button. Each region is separated by the steel-blue section headers that create clear visual divisions.

Spacing follows a consistent rhythm based on a 0.125rem unit. Content padding in the main area is 1.25rem, while section gaps between major content blocks are 1.5rem. The sidebar uses tighter padding of 0.5rem to 0.75rem for its more compact information density.

## Visual language

The visual character is that of mature, trustworthy technical documentation. The steel-blue accent color evokes institutional and academic associations, appropriate for a formal logic programming reference. The design avoids decorative elements in favor of clear information architecture.

Code blocks are the most visually distinctive content elements, rendered with a light gray background (#F7F7F7), a 3px solid left border in light gray (#CCCCCC), and internal padding that sets them apart from flowing prose. This treatment creates a "card" effect for code without full borders on all sides, suggesting quotation or special material. Syntax highlighting within code blocks uses color to distinguish strings (rendered in a reddish tone), comments, keywords, and identifiers, though the exact highlighting palette is not fully visible.

Data tables use a reversed color scheme for headers: steel-blue-muted backgrounds with white text, creating clear column identification. Table body cells use standard black text on white with subtle row boundaries.

Collapsible panels for SQL translations use a full steel-blue-dark background with white text and a right-aligned arrow indicator, creating strong interactive affordance. These panels span the full content width and use bold text to announce their function.

The sidebar section headers use a similar treatment to the collapsible panels but with the lighter steel-blue, creating a family relationship between navigation structure and interactive elements. The consistent use of steel-blue across these elements unifies the interface while the value variation provides appropriate emphasis levels.

## Components

### Sidebar navigation

The sidebar provides persistent access to documentation structure and tools.

- **Anatomy**: Stacked vertical regions separated by steel-blue section headers. Each header contains white bold text on a steel-blue background with a 1px solid border in matching color. Below headers, navigation links appear as regular text with bullet markers for nested items.
- **Surface and text color**: Section headers use `{colors.steel-blue}` background with `{colors.canvas}` text. Navigation links use `{colors.ink}` text on the page background.
- **Typography**: Section headers use `{typography.nav-heading}`. Navigation links use `{typography.nav-item}`.
- **Shape and border**: All corners are square with `{rounded.panel}` radius. Borders are 1px solid steel-blue on headers, with horizontal rules between major sidebar sections.
- **Spacing**: Headers have padding of 0.5rem vertical and 0.75rem horizontal. Navigation lists have 0.625rem left padding for indentation.
- **Composition**: Regions stack vertically with no gaps between header and its content. Active or current page items may have distinct treatment.

### Code block

Preformatted code examples are central to this documentation.

- **Anatomy**: A block-level container with monospace text, left border accent, and background shading. Contains syntax-highlighted code with preserved whitespace.
- **Surface and text color**: Background is `{colors.surface-cool}`. Left border is 3px solid `{colors.border-light}`. Text color varies by syntax element with strings in a reddish tone, keywords in darker tones.
- **Typography**: Uses `{typography.code-block}` for all content.
- **Shape and border**: All corners are square with `{rounded.panel}` radius. The left border provides the primary visual definition.
- **Spacing**: Padding of 0.5rem vertical and 1.25rem horizontal. Margins separate blocks from surrounding prose.
- **Composition**: Blocks break the text flow, spanning most of the content width. Internal indentation preserves code structure.

### Data table

Tables illustrate database concepts with clear columnar structure.

- **Anatomy**: Header row with column labels above body rows with data cells.
- **Surface and text color**: Header row uses `{colors.steel-blue-muted}` background with `{colors.canvas}` text. Body uses default `{colors.ink}` on `{colors.canvas}`.
- **Typography**: Header uses `{typography.nav-heading}`. Body uses `{typography.body}` at standard size.
- **Shape and border**: All corners are square with `{rounded.panel}` radius. No visible outer borders. Cell boundaries implied by alignment and header background.
- **Spacing**: Compact cell padding appropriate for data density.
- **Composition**: Tables are width-constrained to content rather than full-width, aligning with explanatory text flow.

### Collapsible panel

Interactive disclosure panels reveal additional content.

- **Anatomy**: A full-width bar with title text and a right-aligned arrow indicator. Clicking expands or collapses hidden content below.
- **Surface and text color**: Background is `{colors.steel-blue-dark}`. Text is `{colors.canvas}`. Arrow indicator is white or light gray.
- **Typography**: Uses `{typography.nav-heading}` for the panel title.
- **Shape and border**: All corners are square with `{rounded.panel}` radius. Full width of content area.
- **Spacing**: Padding of 0.5rem vertical and 1.25rem horizontal.
- **Composition**: Title left-aligned, arrow right-aligned with "Click to show" helper text. Expanded state reveals content below with standard body styling.

### Breadcrumb navigation

Top-bar orientation showing current location.

- **Anatomy**: Horizontal text path with page title segments separated by markers.
- **Surface and text color**: Uses default `{colors.ink}` text.
- **Typography**: Uses `{typography.breadcrumb}`.
- **Composition**: Left-aligned in top bar, with previous/next/index links right-aligned in the same bar.

## Responsive behavior

The visible interface shows a desktop-optimized layout with the sidebar permanently visible. For narrower viewports, the sidebar should collapse into a toggleable drawer or hamburger menu to preserve content readability. The main content area should maintain comfortable line lengths, ideally between 45 and 75 characters per line; if the viewport exceeds this, max-width constraints with centered content would improve readability.

Code blocks should remain horizontally scrollable rather than wrapping, as line breaks in code change meaning. Data tables may need horizontal scroll containers on narrow screens to preserve column relationships.

The top navigation bar should remain accessible, with breadcrumb text potentially truncating with ellipsis on very narrow viewports. The previous/next links may collapse to icon-only or move below the breadcrumb on small screens.

Font sizes should remain consistent across breakpoints; this documentation design does not rely on dramatic scale changes for hierarchy. Spacing may compress slightly on mobile but should maintain clear section separation.

## Practical implementation guidance

### Preserve
- The steel-blue accent family and its systematic use for navigation structure and interactive elements
- The distinctive code block treatment with left border accent and light background
- The clear typographic hierarchy using weight and size rather than color variation for headings
- The sidebar's stacked section pattern with colored headers
- The data table header reversal for clear column identification
- The monospace sizing that is slightly smaller than body text for clear code distinction

### Avoid
- Adding decorative elements, gradients, or shadows that would detract from the academic clarity
- Using full borders on code blocks; the left-border-only treatment is distinctive and effective
- Making data tables full-width; their content-constrained width aligns with the explanatory text
- Using the steel-blue family for large background areas; reserve it for headers, accents, and interactive elements
- Excessive border-radius; the interface uses sharp corners throughout for a precise, technical feel

### Recommended build order
1. Establish the two-column grid with sidebar width and main content padding
2. Implement the typography scale with sans-serif stack and monospace for code
3. Apply the color system, starting with steel-blue headers in the sidebar
4. Build code block components with background, left border, and syntax highlighting
5. Create collapsible panel with steel-blue-dark background and arrow indicator
6. Add data table styling with reversed header row
7. Implement top navigation bar with breadcrumb and sequential links
8. Refine spacing rhythm and responsive behavior

### Accessibility
- Ensure all steel-blue text on white meets WCAG AA contrast ratios; the darker steel-blue values should suffice
- Provide visible focus indicators for sidebar navigation and collapsible panels, as the default browser outline may be insufficient against colored backgrounds
- Maintain keyboard operability for collapsible panels with Enter and Space activation
- Use semantic heading hierarchy (h1 for page title, h2 for sections) to support screen reader navigation
- Ensure code blocks are announced as preformatted content and remain navigable by character for screen reader users
- Provide skip links to main content for keyboard users navigating past the extensive sidebar

## Scope note

This guide covers the documentation page surface visible in the supplied images, specifically the "Getting to know Datalog" article and its surrounding navigation structure. Mobile layouts, print styles, search results pages, and dark mode are not represented. Hover states, focus styles, and active navigation indicators beyond the visible static state are not documented. The exact syntax highlighting color palette within code blocks is partially visible but not fully specified.

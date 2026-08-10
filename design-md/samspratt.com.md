# How samspratt.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/samspratt.com-design)

Last updated: 2026-08-10

## Captured pages

[![Sam Spratt Archive story page showing the Luci chapter index with concentric circular diagram, left sidebar navigation with numbered chapters, and category filter tabs](https://pin.fontofweb.com/9182?format=jpg)](https://design.withfudge.com/share/pin-9182)

[Sam Spratt Archive story page showing the Luci chapter index with concentric circular diagram, left sidebar navigation with numbered chapters, and category filter tabs](https://design.withfudge.com/share/pin-9182)

[![Sam Spratt Archive story page with active radial selection line connecting sidebar to the circular diagram, showing interactive node highlighting](https://pin.fontofweb.com/9181?format=jpg)](https://design.withfudge.com/share/pin-9181)

[Sam Spratt Archive story page with active radial selection line connecting sidebar to the circular diagram, showing interactive node highlighting](https://design.withfudge.com/share/pin-9181)

## Overview

The Sam Spratt Archive presents a dark, museum-like interface for exploring interconnected creative narratives. The design centers on a radial diagram that visualizes relationships between story chapters, skulls, players, and masks as concentric rings of nodes. A persistent left sidebar provides hierarchical navigation through numbered chapters and categorized subsections, while the main canvas area dedicates most of its space to the interactive diagram. The visual system prioritizes information density and wayfinding clarity over decorative elements, using a near-black background with warm stone typography to create an archival, contemplative atmosphere. The interface avoids gradients, shadows, and rounded corners in favor of precise lines, uniform spacing, and stark contrast. Every element serves the core purpose of helping visitors navigate complex narrative structures without visual distraction.

## Colors

The palette is extremely restrained, built on a near-black canvas with warm stone text and hairline borders. This creates the impression of aged paper or parchment viewed in a dim archive room.

| token | value | use |
|---|---|---|
| canvas | #000000 | Page background, the dominant surface |
| surface | #0C0A09 | Elevated panels, sidebar background, button backgrounds |
| ink | #E2DDD6 | Primary text, headings, body copy, navigation labels |
| muted-ink | #E2DDD6 | Secondary text, captions, diagram labels (same value as ink, used semantically for hierarchy) |
| border | #E2DDD6 | Hairline dividers, node outlines, active indicators |
| action | #E2DDD6 | Interactive elements, selected states, hover targets |

The warm stone tone (#E2DDD6) carries all text and interface chrome against the black canvas. There are no accent colors, no semantic color coding for categories, and no state colors like success or error. The diagram nodes use the same border color for their outlines, with fill states toggling between transparent and filled to indicate selection. The photographic and illustrative content within the archive provides the only color variation, making the interface itself recede and the artwork advance.

## Typography

Two families drive the typographic system: Neue Haas Grotesk Pro for all interface text and Sono Monospace for metadata, counts, and category labels. The pairing creates tension between humanist clarity and mechanical precision. The source files also reference Neue Haas Grotesk Pro-65 Medium as a specific weight variant of the Neue Haas Grotesk Pro family.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Neue Haas Grotesk Pro | 1.875rem | 500 | 1.25 | -0.025em | Page titles, chapter headings |
| body | Neue Haas Grotesk Pro | 1rem | 400 | 1.5 | 0 | Navigation items, chapter names, descriptions |
| body-small | Neue Haas Grotesk Pro | 0.75rem | 500 | 1.375 | 0 | Dense list items, secondary content |
| label | Neue Haas Grotesk Pro | 0.8125rem | 400 | 1.5 | 0.04875em | Small interface labels, metadata |
| navigation | Neue Haas Grotesk Pro | 1rem | 400 | 1.5 | 0 | Primary navigation, sidebar links |
| mono-label | Sono Monospace | 0.625rem | 500 | 1.5 | 0.2em | Category tabs, filter labels, counts |
| mono-caption | Sono Monospace | 0.59375rem | 500 | 1.5 | 0.1em | Inline metadata, small annotations |

Neue Haas Grotesk Pro appears in Medium weight (500) for headings and Regular weight (400) for body and navigation. The font is designed by Christian Schwartz and distributed by Linotype Gmb H. Sono Monospace serves a functional role at small sizes with expanded letter spacing for legibility. Verify licensing for these families before production use.

## Layout

The interface uses a fixed left sidebar with a fluid main canvas. The sidebar occupies approximately one-third of the viewport width and contains the brand mark, primary navigation, chapter index, and category filters. The main canvas fills the remaining two-thirds, centering the radial diagram within its bounds.

The sidebar structure stacks vertically: the Sam Spratt logomark at top, followed by breadcrumb navigation ("STORY / ECOSYSTEM"), the current chapter title in hero-display size, date range with play indicator, category filter tabs, and the scrollable chapter list. Chapter numbers (1–6) appear as large numerals in the left margin with connecting vertical lines, while chapter titles and subsections indent to the right. The bottom of the sidebar holds persistent links: ECOSYSTEM, ARCHIVE, ABOUT, INQUIRIES.

The main canvas centers the radial diagram with concentric rings labeled Story, Skulls, Players, and Masks from inner to outer. Each ring contains evenly spaced nodes connected by thin lines. The diagram responds to sidebar selection by drawing radial connection lines from the active node toward the left edge, creating a visual bridge between list and spatial representation.

Spacing follows a tight system: 2rem horizontal padding in content areas, 1.5rem vertical gaps between major sections, 0.5rem between related items, and 3rem for major section breaks. The sidebar uses 2rem left padding for text alignment and 0 for the left edge where the chapter numerals sit flush.

## Visual language

The aesthetic is archival and systematic, drawing from scientific diagrams, museum catalogs, and early digital interfaces. Every element is rectilinear—no rounded corners appear on buttons, panels, or containers. Borders are 1px solid hairlines in the stone tone, used sparingly to separate filter tabs and indicate selected states.

The radial diagram is the visual centerpiece. Concentric circles create depth through line weight variation: heavier strokes for ring boundaries, lighter strokes for node connections. Nodes are simple circles, unfilled by default, filling when selected. Text labels float outside the outermost ring, positioned at cardinal points. The diagram's mathematical precision contrasts with the organic artwork it catalogs.

The chapter index in the sidebar uses a timeline metaphor: vertical lines connect numbered milestones to their content. Selected chapters receive emphasis through weight change rather than color shift, maintaining the monochrome discipline. Small icons—a play triangle, category glyphs—provide scannable markers without breaking the tonal restraint.

Photography and illustration appear as circular thumbnails within diagram nodes, cropped to fit the geometric system. The circular frame is the only curved element in the interface, and it serves to contain representational content within the abstract diagram language.

## Components

### Sidebar Navigation

- **Anatomy**: Fixed-width vertical panel containing brand mark, breadcrumb, title block, filter tabs, scrollable chapter list, and footer links.
- **Surface**: Background uses canvas color (#000000) with no border or shadow.
- **Typography**: Breadcrumb in mono-label, title in hero-display, chapter list in body and body-small, footer links in mono-label.
- **Shape**: Sharp corners throughout; border-radius of 0rem.
- **Spacing**: 2rem left padding for text blocks, 0 left padding for chapter numerals, 1.5rem vertical rhythm between sections.
- **Composition**: Chapter numerals float left with connecting vertical lines; titles and subsections stack with 0.5rem gaps.

### Category Filter Tabs

- **Anatomy**: Horizontal row of rectangular buttons with text labels and optional count badges.
- **Surface**: Transparent background, 1px solid border (#E2DDD6) on all sides, border-radius of 0rem.
- **Typography**: mono-label token, uppercase or small-caps treatment.
- **Spacing**: 0.75rem horizontal padding, 0.5rem vertical padding, 0.5rem gap between tabs.
- **States**: Active tab fills with surface color (#0C0A09) and maintains border; inactive tabs show transparent background.

### Radial Diagram

- **Anatomy**: Concentric circular rings with labeled node positions, connection lines, and radial selection indicators.
- **Surface**: Transparent background, lines and nodes in border color (#E2DDD6).
- **Typography**: Ring labels in body-small, positioned outside the outermost ring.
- **Shape**: Perfect circles for rings and nodes; line weights vary from 1px for connections to 2px for ring boundaries. Nodes use 50% border-radius to achieve circular form.
- **Composition**: Centered in main canvas with generous padding; nodes evenly distributed by angle along each ring.
- **States**: Selected node fills with ink color; radial line draws from selected node to left edge; connected nodes may highlight.

### Chapter List Item

- **Anatomy**: Numbered entry with optional icon, title, and subsection children.
- **Typography**: Number in body size, title in body-small weight 500, subsections in body-small weight 400.
- **Spacing**: 1rem vertical padding per entry, 0.5rem between subsections.
- **States**: Selected entry may shift weight or show connecting line to diagram.

### Logomark

- **Anatomy**: Abstract circular mark with concentric curved lines, positioned above the "Sam Spratt" wordmark.
- **Surface**: Ink color on transparent background.
- **Spacing**: 2rem top padding, 1rem bottom padding before navigation.

## Responsive behavior

The interface appears optimized for desktop viewing given the complexity of the radial diagram and the density of the sidebar content. At narrower viewports, the sidebar would likely need to collapse into a drawer or overlay, with the diagram scaling to maintain legibility of node labels. The concentric ring structure requires minimum dimensions to remain usable; below approximately 800px width, the diagram may need to switch to a linear or scrollable representation.

The chapter index could adapt by hiding chapter numerals and reducing indentation. Filter tabs may wrap to two rows or collapse into a dropdown. The mono-label typography at small sizes with expanded tracking remains legible down to mobile scales, though the 0.59375rem mono-caption approaches practical limits and may need slight enlargement.

Touch interaction would replace hover states; the radial diagram should support tap-to-select with clear visual feedback. The connection line animation between sidebar and diagram, visible in the active state, should simplify or disable on reduced-motion preferences.

## Practical implementation guidance

### Preserve
- The absolute monochrome palette—any introduction of color would destroy the archival atmosphere.
- The sharp corner treatment on all interactive elements; resist the urge to round buttons or panels.
- The mathematical precision of the radial diagram; node spacing and ring proportions carry meaning.
- The two-family typographic hierarchy; mixing additional faces would dilute the systematic feel.
- The generous negative space in the main canvas; the diagram needs room to breathe.

### Avoid
- Shadows, gradients, or glow effects—the interface achieves depth through line weight and spatial arrangement only.
- Semantic color coding (red for error, green for success); the palette cannot accommodate this without breaking its discipline.
- Rounded corners on any element; even small radii contradict the visual system.
- Animated transitions that compete with the diagram's radial line drawing; motion should be purposeful and minimal.
- Breaking the sidebar's fixed position; scrolling the navigation away loses the primary wayfinding mechanism.

### Recommended build order
1. Establish the canvas and surface colors with the typography scale.
2. Build the sidebar shell with fixed positioning and scrollable chapter list.
3. Implement the chapter index with numbered milestones and connecting lines.
4. Create the radial diagram as an SVG or canvas element with configurable ring counts and node positions.
5. Add the selection interaction and radial connection line.
6. Polish filter tabs, breadcrumb, and footer links.
7. Test diagram scaling and sidebar collapse behavior.

### Accessibility
- Ensure the near-black background with stone text meets minimum contrast ratios; the current combination should satisfy WCAG AA for large text and likely AAA given the darkness of the background and lightness of the text.
- Provide keyboard navigation for the radial diagram; arrow keys to move between rings, Enter to select.
- Add aria-labels to the abstract logomark and diagram nodes.
- Respect prefers-reduced-motion for the radial line animation.
- Ensure the small mono-label text remains legible; consider a minimum font-size threshold for critical labels.

## Scope note

This guide covers the Sam Spratt Archive story page with its radial diagram navigation and chapter index. The full site may include additional page types, artwork galleries, and transactional flows not represented here. Motion behavior, mobile adaptations, and disabled or error states are not documented from the available material. Measurements are drawn from the exact values supplied.

# How maxitype.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/maxitype.com-design)

Last updated: 2026-08-10

## Captured pages

[![Footer section with multi-column credits layout, address blocks, typeface list, and gray bottom bar with contact links](https://pin.fontofweb.com/5224?format=jpg)](https://design.withfudge.com/share/pin-5224)

[Footer section with multi-column credits layout, address blocks, typeface list, and gray bottom bar with contact links](https://design.withfudge.com/share/pin-5224)

[![Student discount promotional section with large green circular badge showing 77% and italic body text in two columns](https://pin.fontofweb.com/5223?format=jpg)](https://design.withfudge.com/share/pin-5223)

[Student discount promotional section with large green circular badge showing 77% and italic body text in two columns](https://design.withfudge.com/share/pin-5223)

[![About page hero with black navigation bar, green newsletter highlight, geometric grid artwork, and team member bios in four columns](https://pin.fontofweb.com/5222?format=jpg)](https://design.withfudge.com/share/pin-5222)

[About page hero with black navigation bar, green newsletter highlight, geometric grid artwork, and team member bios in four columns](https://design.withfudge.com/share/pin-5222)

## Overview

Maxitype presents itself as a Swiss type foundry with a deliberately restrained visual system that lets typography and geometric artwork command attention. The interface operates on a near-monochrome foundation of black and white, punctuated by vivid green accents that appear in promotional badges, highlighted links, and large-scale generative artwork. The design philosophy favors clarity over decoration: information is organized into rigorous multi-column grids, navigation is minimal and functional, and the single typeface family—Selecta—handles every textual role from body copy to display numbers. This creates a cohesive reading experience where the foundry's own products remain the focus. The overall impression is editorial and contemporary, with enough systematic repetition that a coding agent could reconstruct the layout logic from a small set of rules.

## Colors

The color system is intentionally small, relying on high contrast and a single electric accent to create visual hierarchy.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, navigation bar background, geometric artwork fills |
| canvas | #FFFFFF | Page background, text on dark surfaces, card backgrounds |
| accent | #00FF00 | Promotional badges, highlighted links, generative artwork backgrounds, newsletter call-to-action |
| muted | #999999 | Footer bar background, secondary labels, disabled or tertiary text states |

The black-and-white foundation establishes a neutral field that foregrounds the type specimens and team photography. The green accent functions as an attention mechanism: it draws the eye to commercial incentives like the student discount, marks interactive elements like the newsletter subscription, and provides the ground for the large geometric compositions that anchor page sections. The muted gray appears only in the footer bar and occasional secondary labels, serving as a resting state that separates the main content from legal and contact information. No gradients or shadows are present in the interface; all depth and hierarchy come from color blocking and spatial arrangement.

## Typography

The entire typographic system is built on a single family, Selecta, designed by Daniel Haettenschwiller and distributed by Maxitype. Both Regular and Regular Italic cuts are used.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| body | Selecta | 1rem | 400 | 1.25 | 0em | Paragraphs, descriptions, team bios, contact details |
| body-italic | Selecta | 1rem | 400 | 1.25 | 0em | Emphasized phrases, promotional descriptions, quoted text |
| label | Selecta | 0.875rem | 400 | 1.25 | 0em | Navigation items, section headers, footer links, metadata |
| display | Selecta | 3rem | 400 | 1 | -0.02em | Large promotional numbers, badge content |

The typeface exhibits a clean neo-grotesque character with even stroke weights and open apertures, making it highly legible at both text and display sizes. Italic is deployed strategically for emphasis rather than continuous reading, appearing in promotional copy and occasional inline highlights. The display size is reserved for the large percentage figures in circular badges. No bold weight is used in the visible interface; hierarchy is achieved through size, color, and spatial separation rather than weight contrast. Verify licensing for these families before production use.

## Layout

The page structure follows a consistent grid system with clear vertical rhythm. The navigation bar spans the full width at the top, set against a black background with white text links arranged horizontally. Below this, content sections alternate between full-width compositions and contained multi-column arrangements.

The main content area employs a four-column grid for team bios and a three-column structure for footer information. Column gutters appear consistent, creating even spacing between content blocks. The generative artwork section breaks the grid by occupying roughly half the viewport width with a large square composition, while adjacent text flows in the remaining space.

Vertical spacing between sections is generous, with clear separation between the hero area, promotional content, team listings, and footer. The footer itself is divided into two zones: a white multi-column credits area and a full-width gray bar containing contact links and copyright information. This two-tier footer creates a visual base that grounds the page.

Content alignment is predominantly left-aligned, with labels and headers sitting above their associated content blocks. The circular promotional badge introduces a centered composition within its own container, creating a focal point that interrupts the otherwise rectilinear flow.

## Visual language

The visual identity is defined by the tension between systematic restraint and moments of high-energy color. The generative artwork features nested geometric forms—squares within squares, rotated and repeated—rendered in black, white, and gray against the green field. This motif echoes the modular nature of type design itself, where simple forms combine into complex systems.

Photography and portraiture are absent from the visible interface; instead, identity is conveyed through typographic specimens and abstract pattern. The circular badge form introduces a single organic shape that contrasts with the otherwise angular vocabulary. Text links are underlined or highlighted with green backgrounds rather than using color change alone, making interactive states explicit and accessible.

The overall aesthetic aligns with contemporary Swiss design traditions: rational grids, sans-serif typography, and a belief that information architecture is itself a form of expression. The green accent prevents the system from feeling austere, injecting personality that matches the foundry's positioning as a contemporary independent practice.

## Components

### Navigation bar

- Anatomy: Horizontal row of text links, right-aligned utility links including Shop and Cart
- Surface: Solid black background
- Typography: `{typography.label}` in white
- Shape: Full-width bar, no border radius
- Spacing: Compact vertical padding, generous horizontal margins
- Composition: Left-side logo mark, center navigation cluster, right-side commerce links

### Promotional badge

- Anatomy: Circular container with large display number, supporting text below
- Surface: `{colors.accent}` background with `{colors.ink}` text
- Typography: `{typography.display}` for the percentage figure, `{typography.body}` for terms
- Shape: Perfect circle
- Spacing: Centered content with internal padding
- Composition: Floats left of adjacent text columns, creates asymmetric layout

### Team bio card

- Anatomy: Name header, paragraph description, occasional additional member entry
- Surface: Transparent, inherits `{colors.canvas}`
- Typography: Name in `{typography.label}` with muted gray color, body in `{typography.body-italic}`
- Shape: Rectangular, no border
- Spacing: Consistent bottom margin between entries
- Composition: Four-column grid at desktop width, equal column widths

### Footer credits block

- Anatomy: Multiple columns with category headers and lists of names or links
- Surface: `{colors.canvas}` background
- Typography: Category labels in muted gray, entries in `{typography.body}`
- Shape: Full-width container
- Spacing: Generous internal padding, column gutters
- Composition: Asymmetric column widths matching content density

### Footer bar

- Anatomy: Single row of text links and copyright notice
- Surface: `{colors.muted}` background
- Typography: `{typography.label}` in white or light text
- Shape: Full-width bar, no border radius
- Spacing: Compact vertical padding
- Composition: Right-aligned link cluster, left-aligned or centered copyright

## Responsive behavior

The multi-column layouts should collapse to single-column stacking on narrow viewports, with the four-column team grid becoming a sequential list and the three-column footer reorganizing into accordion sections or a stacked list. The circular promotional badge should scale down proportionally while maintaining its centered composition; on very small screens, it may need to sit above rather than beside the accompanying text. Navigation items should consolidate into a menu trigger when horizontal space is insufficient. The generative artwork should remain visible but may shift from a side-by-side layout to a stacked arrangement with text below.

## Practical implementation guidance

### Preserve
- The strict black-white-green palette; do not introduce additional accent colors
- The single-family typographic system; maintain Selecta for all text roles
- The four-column grid for team listings and similar content
- The two-tier footer structure with colored bottom bar
- The geometric artwork motif with nested square forms

### Avoid
- Adding drop shadows, gradients, or other dimensional effects
- Using bold weights where the source relies on size and spacing for hierarchy
- Introducing border radii on rectangular containers; keep edges sharp except for the circular badge
- Center-aligning body text; maintain left alignment throughout

### Recommended build order
1. Establish the grid system and spacing scale with the 0.25rem base unit
2. Implement the navigation bar with correct color inversion
3. Set up typography tokens for body, label, and display roles
4. Build the footer structure as the most complex layout component
5. Add the promotional badge with its circular shape and accent color
6. Integrate the generative artwork as a responsive image or canvas element

### Accessibility
- Ensure the green accent meets contrast requirements when used for text; the bright #00FF00 against white may fail WCAG guidelines for small text
- Provide focus indicators that match the green accent color on interactive elements
- Maintain the explicit underlining or background highlighting for links rather than relying on color alone
- Test the black navigation bar for sufficient contrast with white text at the label size

## Scope note

This guide covers the About page surface including navigation, promotional content, team listings, and footer. Measurements are practical adaptation targets. Mobile layouts, hover states, focus styles, loading sequences, error handling, and the complete type specimen or shop interfaces are not represented in the supplied material. The generative artwork system and its animation behavior are described visually but not technically specified.

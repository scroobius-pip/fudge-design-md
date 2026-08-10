# How column.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/column.com-design)

Last updated: 2026-08-10

## Captured pages

[![Footer section with three-column link grid and large 'Start building today' heading on light gray background](https://pin.fontofweb.com/5251?format=jpg)](https://design.withfudge.com/share/pin-5251)

[Footer section with three-column link grid and large 'Start building today' heading on light gray background](https://design.withfudge.com/share/pin-5251)

[![Products section showing categorized financial building blocks with icon tags in two-column layout](https://pin.fontofweb.com/5250?format=jpg)](https://design.withfudge.com/share/pin-5250)

[Products section showing categorized financial building blocks with icon tags in two-column layout](https://design.withfudge.com/share/pin-5250)

[![Industry selector with vertical tab list and green halftone bank illustration on dotted background](https://pin.fontofweb.com/5249?format=jpg)](https://design.withfudge.com/share/pin-5249)

[Industry selector with vertical tab list and green halftone bank illustration on dotted background](https://design.withfudge.com/share/pin-5249)

[![Dark-themed card programs feature with code snippet and floating 3D card visualization](https://pin.fontofweb.com/5248?format=jpg)](https://design.withfudge.com/share/pin-5248)

[Dark-themed card programs feature with code snippet and floating 3D card visualization](https://design.withfudge.com/share/pin-5248)

## Overview

Column presents itself as a platform bank built for developers and technology companies, with a visual system that balances institutional credibility and engineering precision. The design employs a predominantly light mode with generous whitespace, punctuated by strategic dark-themed feature sections that create dramatic contrast. The aesthetic draws from Swiss design traditions through its typographic discipline, grid-based layouts, and restrained color palette. Every element serves a functional purpose—there is no decorative excess. The system communicates trust through clarity: large readable type, consistent spacing rhythms, and modular components that organize complex financial products into scannable, actionable units. The visual language speaks to both technical decision-makers and business stakeholders, using code snippets, API references, and clean iconography alongside polished product imagery.

## Colors

The color system operates across two distinct modes: a light mode for general browsing and a dark mode for immersive feature presentations. Both modes share a common structural logic with inverted values.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, headings, active navigation |
| canvas | #F5F5F7 | Page background in light mode |
| surface | #FFFFFF | Cards, elevated panels, footer sections |
| surface-elevated | #F0F0F2 | Product tags, subtle backgrounds, hover states |
| muted-ink | #6B7280 | Secondary text, descriptions, footer links |
| dark-canvas | #0A1628 | Deep background for feature sections |
| dark-surface | #111D2E | Primary dark panel background |
| dark-elevated | #1A2740 | Code blocks, nested dark containers |
| accent-teal | #2DD4A8 | Interactive highlights, icon accents, halftone illustrations |
| accent-green | #34D399 | Success states, financial product icons |
| accent-yellow | #FDE047 | Code syntax highlighting, warning accents |
| border-light | #E5E5E8 | Card borders, dividers, subtle separations |
| border-dark | #1E3A5F | Dark mode borders, subtle edge definitions |

The light mode dominates the experience, using near-white and light gray surfaces to create breathing room around dense financial information. The dark mode appears selectively for high-impact feature sections—particularly around developer tools and card program visualizations—where the deep navy-black canvas makes floating UI elements and code snippets feel immersive. Accent colors are used sparingly: teal and green appear primarily in iconography and the distinctive halftone dot illustrations, while yellow serves a functional role in code syntax highlighting. The system avoids pure black backgrounds in favor of tinted darks that reduce eye strain and maintain color depth.

## Typography

Column's typographic system is built on Suisse Intl, a neo-grotesque family from Swiss Typefaces. The design facts identify three related family labels in the source materials: "Font-Copyright C 2014 Swiss Typefaces Sàrl All Rights Reserved", "Font-Copyright C 2016 Swiss Typefaces Sàrl All Rights Reserved", and "Suisse Intl". All refer to the Suisse Intl type family with variations in weight and copyright year. The design leverages this family's extensive weight range to create clear hierarchy without introducing additional typefaces.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Suisse Intl | 3.5rem | 600 | 1.05 | -0.03em | Homepage headlines, major section titles |
| section-display | Suisse Intl | 2.5rem | 600 | 1.1 | -0.02em | Product category headings, feature titles |
| body-large | Suisse Intl | 1.25rem | 400 | 1.5 | 0 | Lead paragraphs, introductory copy |
| body | Suisse Intl | 1rem | 400 | 1.6 | 0 | General content, descriptions, footer links |
| label | Suisse Intl | 0.75rem | 500 | 1.2 | 0.05em | Category tags, uppercase section labels |
| navigation | Suisse Intl | 0.875rem | 500 | 1.4 | 0 | Primary navigation, menu items |
| code | Suisse Intl | 0.75rem | 400 | 1.6 | 0 | API examples, terminal output |

The type scale is tightly controlled, with display sizes using negative tracking for a compact, authoritative presence. Body text maintains generous line height for readability of technical content. Labels and navigation employ the medium weight to distinguish interactive elements from content. The code token uses the same family at a smaller size, preserving typographic unity while accommodating monospaced conventions through spacing rather than a separate font. Verify licensing for these families before production use. Suisse Intl is designed by Swiss Typefaces.

## Layout

The layout system follows a consistent two-column rhythm that adapts to content density. Primary content occupies the left portion of the grid, while supporting visuals, code examples, or product imagery fill the right. This asymmetry creates visual interest while maintaining predictable scanning patterns.

Section spacing uses 6rem vertical padding to establish clear content territories. Within sections, a 2rem gap separates related elements. The product grid in the building blocks section demonstrates a nested layout: category labels anchor the left edge while a two-column tag grid occupies the remaining space. Cards and panels use 1.5rem internal padding, creating comfortable touch targets without excessive bulk.

The footer expands this logic into a multi-column link grid, with the brand mark occupying significant left-side real estate and navigation columns distributed across the right portion. Horizontal rules in 1px border-light separate major sections.

In dark mode sections, the layout inverts spatial expectations: content floats on the deep canvas with generous surrounding whitespace, while a contained panel with rounded corners holds the primary visual demonstration. This creates a stage-like presentation that focuses attention on complex interactions.

## Visual language

The visual language communicates technical sophistication through restraint and precision. The most distinctive element is the halftone dot illustration style used in feature imagery—green and teal dots of varying density create representational images of banks and financial buildings without resorting to literal photography. This technique bridges the gap between abstract data visualization and recognizable architecture.

Iconography follows a consistent system: small square icons with rounded corners, each containing a simple line or filled symbol representing the financial product. These icons use color coding—blue tones for payments, green for cards, red for lending—to create instant category recognition. The icons sit within elevated tag containers that provide tactile affordance.

The code presentation is treated as a first-class visual element, not an afterthought. Terminal-style blocks with dark backgrounds and syntax highlighting demonstrate API usage directly within marketing content. This integration signals developer credibility.

Surface treatments vary by context: light sections use flat colors with subtle borders, while dark sections employ a fine dot-grid background pattern that adds texture without competing with foreground content. Cards in dark mode receive gentle gradients and soft shadows that suggest physical depth.

## Components

### Product tag

A compact, interactive element representing a single financial product or API capability.

- **Anatomy**: Rounded rectangle containing a small icon (left) and product name text.
- **Surface**: backgroundColor `{colors.surface-elevated}` with no visible border in default state.
- **Typography**: `{typography.body}` at 1rem, weight 500 for product names.
- **Shape**: borderRadius `{rounded.tag}` (0.5rem).
- **Spacing**: padding 0.75rem vertical, 1rem horizontal; internal gap 0.75rem between icon and text.
- **Composition**: Arranged in two-column grids within product categories.
- **Variants**: Icons vary by product category—blue-tinted for payments, green for cards, red for lending.

### Feature card

Larger containers for destination links or highlighted actions.

- **Anatomy**: Card with top icon area, headline, and optional description.
- **Surface**: backgroundColor `{colors.surface}` with 1px border `{colors.border-light}`.
- **Typography**: Headline uses `{typography.body}` at 1rem weight 600; description uses `{typography.body}` at 0.875rem weight 400 in `{colors.muted-ink}`.
- **Shape**: borderRadius `{rounded.card}` (0.75rem).
- **Spacing**: padding `{spacing.card-padding}` (1.5rem); internal vertical gap 1rem.
- **Composition**: Three-column grid in the "Start building today" section.

### Industry selector

A tabbed interface for switching between customer verticals.

- **Anatomy**: Vertical list of industry names with active state indicator; paired with contextual imagery and description.
- **Surface**: Transparent background; active item receives subtle highlight.
- **Typography**: Inactive items use `{typography.section-display}` at 2.5rem in muted tone; active item uses `{colors.ink}` with bank icon prefix.
- **Spacing**: Items stack with 0.5rem vertical gap.
- **Composition**: Left column for selector, right two-thirds for halftone illustration and body copy.

### Dark feature panel

Immersive container for developer-focused or high-value features.

- **Anatomy**: Full-width dark section containing text content, code block, and visual demonstration in a contained panel.
- **Surface**: backgroundColor `{colors.dark-canvas}` with dot-grid texture; inner panel uses `{colors.dark-surface}` with borderRadius `{rounded.panel}`.
- **Typography**: Headline uses `{typography.section-display}` in white; body uses `{typography.body}` in light gray; code uses `{typography.code}` with `{colors.accent-yellow}` for string values.
- **Shape**: Inner panel borderRadius 1rem.
- **Spacing**: Section padding 6rem vertical; internal panel padding 2rem.
- **Composition**: Left text and code, right visual demonstration with floating elements.

### Code block

Terminal-style presentation of API examples.

- **Anatomy**: Dark rectangle with monospace-formatted text, syntax highlighting.
- **Surface**: backgroundColor `{colors.dark-elevated}`; borderRadius `{rounded.card}`.
- **Typography**: `{typography.code}`; strings in `{colors.accent-yellow}`, parameters in white, URLs in light blue.
- **Spacing**: padding 1.5rem.
- **Composition**: Full width within text column; often paired with explanatory paragraph above.

### Footer navigation

Multi-column link grid with brand mark.

- **Anatomy**: Large brand wordmark left; category columns right with stacked links.
- **Surface**: backgroundColor `{colors.canvas}`.
- **Typography**: Category headers use `{typography.navigation}` weight 600; links use `{typography.body}` at 0.875rem in `{colors.muted-ink}`.
- **Spacing**: padding 4rem vertical; column gap 3rem.
- **Composition**: Brand mark spans left 40%; remaining space divided into 3-4 equal columns.

## Responsive behavior

The two-column layout pattern should stack vertically on narrower viewports, with content preceding visuals in the DOM order. Product tag grids should collapse from two columns to single column when container width falls below 640px equivalent. The industry selector should transform from vertical tabs to a horizontal scroll or dropdown on small screens, preserving the illustration's prominence. Dark feature panels should maintain their immersive quality by reducing internal padding proportionally rather than eliminating the stage-like presentation. Typography should scale down by approximately 15% on mobile, with hero-display reducing to 2.5rem to prevent excessive line breaks. Navigation should collapse to a hamburger menu with the same typographic treatment in a full-screen overlay.

## Practical implementation guidance

### Preserve
- The strict typographic hierarchy using Suisse Intl exclusively; the system's credibility depends on this consistency.
- The light/dark mode contrast strategy; dark sections should be used sparingly for maximum impact.
- The halftone dot illustration style for feature imagery; this is a distinctive brand asset.
- The product tag grid pattern for organizing dense product catalogs.
- The code-first presentation in developer-facing sections.

### Avoid
- Introducing additional font families; the single-family system is integral to the Swiss aesthetic.
- Using accent colors for large backgrounds; they should remain functional highlights.
- Flattening the dark mode panels to pure black; the tinted navy maintains visual sophistication.
- Overcrowding product tags; the generous spacing within each tag is essential for scannability.

### Recommended build order
1. Establish the typographic scale with Suisse Intl at all weights.
2. Implement the light mode color system and base spacing tokens.
3. Build the product tag component as the most frequently used element.
4. Create the two-column layout pattern for feature sections.
5. Add the dark mode palette and panel components.
6. Implement the industry selector with tab state management.
7. Polish with halftone imagery and code syntax highlighting.

### Accessibility
- Ensure dark mode sections meet WCAG AA contrast ratios; the light gray body text on dark surfaces may need adjustment to pure white or increased size.
- Provide keyboard navigation for the industry selector tabs with clear focus indicators.
- Use semantic heading hierarchy despite the visual similarity between section-display and hero-display sizes.
- Include visible focus states on product tags that complement the rounded shape without relying on color alone.
- Consider `prefers-reduced-motion` for any halftone illustration transitions.

## Scope note

This guide covers the Column homepage and primary product overview surfaces. Interior pages, documentation layouts, authenticated dashboard interfaces, and mobile-specific adaptations are not represented in the supplied materials. Motion design, hover states, and form interactions are not documented. Measurements are practical adaptation targets derived from visual inspection.

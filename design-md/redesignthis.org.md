# How redesignthis.org is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/redesignthis.org-design)

Last updated: 2026-08-10

## Captured pages

[![Background spacing reference showing Apple, IMDb, and Lyft brand logos with measured padding values in a light gray card on white canvas](https://pin.fontofweb.com/5718?format=jpg)](https://design.withfudge.com/share/pin-5718)

[Background spacing reference showing Apple, IMDb, and Lyft brand logos with measured padding values in a light gray card on white canvas](https://design.withfudge.com/share/pin-5718)

[![Typography scale reference displaying H1 through Small Subtitle sizes across Apple, IMDb, and Lyft with content text, CTA, NAV, BODY, and META categories in a structured table](https://pin.fontofweb.com/5717?format=jpg)](https://design.withfudge.com/share/pin-5717)

[Typography scale reference displaying H1 through Small Subtitle sizes across Apple, IMDb, and Lyft with content text, CTA, NAV, BODY, and META categories in a structured table](https://design.withfudge.com/share/pin-5717)

## Overview

This design system documents real-world interface standards from major consumer applications and websites. The visual language is deliberately clinical and reference-oriented: large neutral surfaces, precise measurement annotations, and systematic brand comparisons arranged in tabular formats. The system serves as a practical lookup tool for designers making typography, spacing, color, and layout decisions.

The interface organizes content around platform selectors (App versus Web), brand filters (Apple, IMDb, Lyft, and others), and category tabs (Color, Typography, Padding, Radius). Each view presents measured values from actual interfaces rather than abstract rules. The overall impression is authoritative and utilitarian—black text on white and light gray grounds, with minimal decorative elements beyond brand logos themselves.

The design relies on two type families: a distinctive display face for large-scale measurement figures and section headings, and a neutral sans-serif for tabular data, labels, and body content. Spacing follows a tight modular scale derived from 4-pixel increments. The color palette is intentionally restrained, allowing brand colors from the documented interfaces to provide the only chromatic variety.

## Colors

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, measurement figures, table headers, active tab labels |
| canvas | #FFFFFF | Page background, card interiors, measurement bar backgrounds |
| surface | #F5F5F5 | Inactive tab backgrounds, subtle section divisions, reference card fills |
| border | #D4D4D4 | Card outlines, tab borders, divider lines, measurement bar borders |
| accent-yellow | #F5C518 | IMDb brand identifier, active selection indicator |
| accent-blue | #96D4D4 | Lyft brand identifier, secondary accent |

The color model is strictly functional. Black ink carries all information hierarchy, from the massive 195px display figures down to 12px meta labels. White canvas provides uninterrupted reading space. Light gray surface creates shallow depth for cards and inactive states without introducing visual noise. The single gray border color unifies all structural lines at 1px weight.

Brand colors appear only as logo identifiers and platform markers. The IMDb yellow and Lyft blue are preserved as found in source interfaces, not reinterpreted. No gradients, shadows, or transparency effects are present in the reference documentation itself. The system assumes its subject matter—the documented apps and websites—will supply whatever chromatic richness the viewer requires.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | False-Normal | 12rem | 400 | 1 | -0.02em | Large measurement figures (195px, 50px, etc.) |
| section-display | False-Normal | 3rem | 400 | 1.1 | -0.01em | Page title "Design standards" |
| heading-large | Manrope | 2.25rem | 600 | 1.2 | -0.01em | Category headers, major section divisions |
| heading-medium | Manrope | 1.75rem | 600 | 1.2 | 0em | Subsection titles within reference tables |
| subheading | Manrope | 1.5rem | 600 | 1.3 | 0em | Column headers (H1, H2, Subheading, Small Subtitle) |
| small-subtitle | Manrope | 1rem | 500 | 1.4 | 0em | Row labels, brand names |
| body | Manrope | 0.875rem | 400 | 1.5 | 0em | Descriptive text, average values, general content |
| body-small | Manrope | 0.75rem | 400 | 1.5 | 0em | Measurement unit labels, minor annotations |
| label | Manrope | 0.75rem | 600 | 1.4 | 0.02em | Tab labels, chip text, category identifiers |
| navigation | Manrope | 0.875rem | 500 | 1.4 | 0em | Platform selector text (App, Web) |
| cta | Manrope | 0.875rem | 600 | 1.4 | 0em | Call-to-action emphasis within tables |
| meta | Manrope | 0.75rem | 400 | 1.4 | 0.01em | Smallest data points, secondary measurements |

The type system separates display and functional roles distinctly. False-Normal, designed by Mikhail Sharanda, handles only large-scale expressive moments with its characteristic geometric construction and tight apertures. Manrope, also by Mikhail Sharanda, manages all information-dense settings with its clean, open forms and broad weight range from Regular through Semi Bold.

Verify licensing for these families before production use. Both False-Normal and Manrope are distributed through Fontshare; confirm current license terms for web embedding and commercial application.

## Layout

The page structure centers content in a single-column arrangement with generous horizontal margins. The maximum content width appears constrained to approximately 800px, creating a focused reading experience appropriate for reference documentation.

Vertical rhythm proceeds through three zones: header, controls, and reference content. The header contains the page title and subtitle flush left. Controls center-align: platform chips, brand icon row, and category tabs stack with consistent vertical spacing. The reference content area presents either typography tables or spacing diagrams within bordered cards.

The reference cards use full-width containment with internal padding of 2rem. Within cards, content organizes in rows with left-aligned brand icons and right-aligned measurement data. Tables employ implicit grid structures: column headers in light gray bands, data rows alternating between white and near-white for subtle scanability.

Brand icons maintain consistent 2rem circular containers, some with filled backgrounds (IMDb yellow, Lyft blue) and others with transparent grounds (Apple black). These icons anchor each data row, creating immediate visual association between measurement and source interface.

Spacing between major sections follows 4rem, with 2rem between related elements within a section. The control cluster maintains tighter 0.75rem gaps between chips and tabs.

## Visual language

The visual character is that of a technical specimen book or engineering reference. Every element serves measurement or comparison. There are no decorative illustrations, no marketing language, no persuasive visuals beyond the inherent authority of precise data.

Brand representation is limited to small circular logos and color swatches. The documented interfaces speak for themselves through their extracted values. The documentation system never competes with its subject matter.

Measurement visualization uses horizontal bars with red dimension lines and numerical labels. These bars appear within light containers, their lengths proportional to the values they represent. The red annotation color provides the only warm accent in an otherwise cool, neutral system.

Tab and chip interactions suggest a toggle pattern: filled background for active, outlined for inactive. The active state uses surface gray fill with ink text; inactive uses white fill with border outline. This creates clear state distinction without color variation.

The overall density is moderate to high. Tables pack multiple data points per row, yet the generous line height and clear column alignment prevent overwhelming the reader. White space concentrates at section boundaries rather than within data structures.

## Components

### Reference card

The primary content container for all documentation views.

- Anatomy: Border wrapper, optional header band, content area with internal padding
- Surface: White or light gray background with 1px border in gray
- Shape: 0.5rem corner radius
- Spacing: 2rem internal padding, 4rem external margin to adjacent sections
- Composition: Full-width within content column, centered

### Platform chip

Binary selector for App versus Web contexts.

- Anatomy: Text label within rounded rectangular container
- Surface: Active state uses surface gray fill; inactive uses white with border
- Typography: Label style, 0.75rem, semi-bold
- Shape: 0.25rem radius, pill-like proportions
- Spacing: 0.5rem vertical padding, 1rem horizontal padding
- Composition: Horizontally paired with 0.75rem gap between chips

### Category tab

Four-way selector for Color, Typography, Padding, Radius views.

- Anatomy: Text label within rounded rectangular container, matching chip styling
- Surface: Identical to platform chip active/inactive pattern
- Typography: Label style
- Shape: 0.25rem radius
- Spacing: 0.5rem vertical, 1.5rem horizontal padding for broader click targets
- Composition: Horizontal row with 0.75rem gaps, centered below brand icons

### Brand icon

Circular identifier for documented interface source.

- Anatomy: Logo mark centered in circle
- Surface: Variable—transparent for Apple, filled yellow for IMDb, filled blue for Lyft
- Shape: Perfect circle, 2rem diameter
- Composition: Left-aligned in table rows, vertically centered with adjacent measurement data

### Measurement bar

Visual representation of spacing or dimension values.

- Anatomy: Horizontal rectangle with height fixed at 2rem, width proportional to value
- Surface: White fill with 1px border
- Typography: Value label in body-small above or beside bar
- Shape: Sharp corners, no radius
- Composition: Aligned in columns with consistent left edge, variable right edge indicating magnitude

### Data table

Structured comparison of values across brands and categories.

- Anatomy: Header row with column labels, data rows with brand icon and values
- Surface: Header band in light gray, data rows alternating white and near-white
- Typography: Subheading for headers, body for values, body-small for units
- Spacing: 1.5rem row height, 1rem column gaps
- Composition: Full-width within card, left-aligned brand column, right-aligned value columns

## Responsive behavior

The reference documentation assumes desktop viewing given its tabular density. At narrower viewports, tables should scroll horizontally rather than reflow, preserving column alignment critical to comparison reading.

Platform and category controls should wrap to two rows on narrow screens, maintaining touch-friendly minimum heights of 44px. Brand icons may reduce to single-column presentation with stacked measurement bars below each.

Font sizes should scale down modestly: hero-display from 12rem to 6rem on tablet, 4rem on mobile. Section-display reduces from 3rem to 2rem. Tabular data maintains fixed small sizes for readability of dense information.

The content column should maintain minimum 1rem side margins at all breakpoints, expanding to centered 800px maximum on larger screens.

## Practical implementation guidance

### Preserve
- The strict separation between display type (False-Normal) and functional type (Manrope)
- The 4px base grid for all spacing and sizing decisions
- The neutral documentation palette that never competes with documented brand colors
- The circular brand icon convention with consistent 2rem sizing
- The active/inactive chip pattern using fill versus outline states
- The measurement bar visualization for spatial values

### Avoid
- Adding decorative elements or marketing visuals to the reference interface
- Using brand accent colors for UI chrome or interactive states
- Introducing shadows, gradients, or transparency effects
- Creating additional type sizes outside the established scale
- Replacing tabular layouts with card-based alternatives for dense data

### Recommended build order
1. Establish the 4px grid and spacing token system
2. Implement Manrope at body, label, and heading sizes
3. Add False-Normal for display and hero figures only
4. Build the card container with border, radius, and padding
5. Create chip and tab components with active/inactive states
6. Implement data table structure with header bands and row alternation
7. Add brand icon components with correct source colors
8. Construct measurement bar visualization with proportional widths

### Accessibility
- Maintain minimum 4.5:1 contrast for all body text; the black-on-white and black-on-light-gray pairings exceed this
- Ensure table headers are programmatically associated with data cells
- Provide aria-pressed or similar state indication for active chips and tabs
- Allow keyboard navigation through the category tab sequence
- Consider adding visible focus rings to interactive elements, using the ink color with 2px offset
- For measurement bars, supplement visual length with explicit numerical values readable by screen readers

## Scope note

This guide covers the design standards documentation page at redesignthis.org, specifically the typography and padding reference views for App and Web platforms across selected brand interfaces. Motion, interaction feedback beyond active states, additional category views (Color, Radius), and mobile-optimized layouts are not represented in the supplied material. Measurements are practical adaptation targets derived from visible reference values.

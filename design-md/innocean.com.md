# How innocean.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/innocean.com-design)

Last updated: 2026-08-10

## Captured pages

[![Awards list page showing 2026 entries with black horizontal rule separators and a Load More pill button on white canvas.](https://pin.fontofweb.com/10650?format=jpg)](https://design.withfudge.com/share/pin-10650)

[Awards list page showing 2026 entries with black horizontal rule separators and a Load More pill button on white canvas.](https://design.withfudge.com/share/pin-10650)

[![Awards table with sticky black header bar containing YEAR, AWARD, PROJECT columns and scrollable data rows.](https://pin.fontofweb.com/10649?format=jpg)](https://design.withfudge.com/share/pin-10649)

[Awards table with sticky black header bar containing YEAR, AWARD, PROJECT columns and scrollable data rows.](https://design.withfudge.com/share/pin-10649)

[![Hero section with large AWARDS display type and scattered black award logos above a filterable data table.](https://pin.fontofweb.com/10648?format=jpg)](https://design.withfudge.com/share/pin-10648)

[Hero section with large AWARDS display type and scattered black award logos above a filterable data table.](https://design.withfudge.com/share/pin-10648)

[![Dark contact section with oversized Korean display type, pill CTA button, and minimal footer on near-black canvas.](https://pin.fontofweb.com/10645?format=jpg)](https://design.withfudge.com/share/pin-10645)

[Dark contact section with oversized Korean display type, pill CTA button, and minimal footer on near-black canvas.](https://design.withfudge.com/share/pin-10645)

## Overview

The INNOCEAN design system presents a bold, editorial visual language built on extreme contrast and typographic confidence. The system serves a global creative agency's digital presence, moving between pristine white canvases for content-heavy pages and immersive near-black environments for emotional landing moments. The core identity relies on Pretendard, a Korean-designed sans-serif, deployed across a wide weight range from medium body text to extra-bold display headlines. Layouts favor generous whitespace, precise horizontal rules, and full-bleed tabular structures that feel more editorial spreadsheet than conventional web table. The overall impression is one of restrained sophistication—every element earns its place through scale, weight, or position rather than decorative embellishment.

## Colors

The palette is intentionally monochrome with a single functional accent. Light pages use pure white canvas with black ink; dark pages invert this relationship for dramatic section breaks.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, table headers, primary buttons, logo |
| canvas | #FFFFFF | Page backgrounds, light surfaces, inverted text on dark |
| canvas-dark | #101010 | Hero sections, contact page backgrounds, footer areas |
| muted-ink | #282828 | Secondary text, subtle UI elements on dark backgrounds |
| hairline | #F0F0F0 | Table row separators, subtle dividers, border accents |
| accent-blue | #0088FF | Interactive highlights, focus indicators, link hover states |

The light mode dominates content pages: white backgrounds with black text and light gray hairlines creating rhythm through horizontal rules. Dark mode appears selectively on landing and contact pages, where near-black canvas-dark backgrounds carry white text at display scale. The accent blue functions as a reserved interactive signal rather than a brand color, appearing sparingly for hover states and focus rings. No gradients are used; all surfaces are flat and opaque.

## Typography

The type system centers on Pretendard, a Korean sans-serif with excellent Latin character support, supplemented by -apple-system for microscopic UI labels. The design facts also record Suisse Intl at weight 700 with a size of 58.713px, though this family does not appear in the final rendered type roles and may be used for specific display contexts or fallback scenarios. Weights range from 500 (medium) for body text to 800 (extra-bold) for hero display.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Pretendard | 4.667rem | 800 | 1.2 | -0.027em | Page titles, section heroes, emotional headlines |
| section-display | Pretendard | 3.333rem | 700 | 1.4 | -0.01em | Sub-hero headings, major section intros |
| heading-large | Pretendard | 2.25rem | 700 | 1.4 | -0.01em | Content headings, award category titles |
| heading-medium | Pretendard | 1.25rem | 600 | 1.5 | -0.01em | Table column headers, card titles, filter labels |
| body | Pretendard | 0.938rem | 500 | 1.5 | -0.005em | Paragraph text, descriptions, table cell content |
| body-small | Pretendard | 0.813rem | 500 | 1.5 | -0.004em | Captions, metadata, secondary descriptions |
| label | Pretendard | 1.063rem | 600 | 1.5 | 0em | Buttons, navigation items, active filters |
| navigation | Pretendard | 0.938rem | 500 | 1.5 | 0em | Top nav links, footer links |
| ui-small | -apple-system | 0.875rem | 400 | 1.3 | 0em | System labels, timestamps, auxiliary data |
| ui-tiny | -apple-system | 0.688rem | 600 | 1 | 0em | Badges, tags, minimal indicators |

Display sizes use tight negative tracking for visual density and impact. Body sizes maintain slight negative tracking for Korean text optimization. The -apple-system family appears only at small sizes where system rendering precision matters. Verify licensing for Pretendard and Suisse Intl before production use.

## Layout

The layout architecture follows a strict editorial grid with asymmetric content zones. Pages are built on a 12-column implicit grid with content typically anchored to the left third for navigation and metadata, while the right two-thirds carries primary content.

Page sections use substantial vertical spacing: 12.5rem between major sections, with internal component gaps of 2.625rem to 3.75rem. Horizontal padding is generous at 2.5rem for navigation and 1.5rem for table cells, creating breathing room around dense information.

The data table layout is a defining structural pattern: full-width tables with sticky black header bars, left-aligned year indicators in large display type, and multi-line award entries separated by hairline rules. Tables scroll vertically within their containers while headers remain fixed.

On dark pages, the layout inverts: content centers or left-aligns against the full-bleed dark canvas, with oversized display type breaking across multiple lines. The contact page demonstrates this with Korean text at hero scale, address details at heading size, and a single centered pill button as the focal action.

## Visual language

The visual character is decisively minimal and institutional. Every surface is flat—no gradients, no shadows on content cards, no rounded corners on primary containers. The only radius variation appears on pill buttons (full rounding) and tiny filter indicators (4px).

Photography and media treatment is direct: images appear at natural aspect ratios without decorative frames or overlays. On the awards page, a scattered field of black award logos creates visual energy above the disciplined table structure below. This logo cloud uses no grid alignment, producing an organic, celebratory texture that contrasts with the rigid table.

Motion and interaction are implied rather than explicit in still images: the Load More button suggests pagination, filter dropdowns indicate dynamic content refinement, and the scroll-to-top button implies smooth return navigation. The system avoids decorative animation in favor of immediate state changes.

Iconography is reduced to functional essentials: a search magnifier, globe language indicator, chevron dropdowns, and directional arrows. All icons are simple line forms matching the stroke weight of hairline borders.

## Components

### Primary Action Button
- Anatomy: Text label centered within a fully rounded pill container
- Surface: Solid black background with white text, or transparent with black border on light backgrounds
- Typography: `{typography.label}` at 1.063rem, weight 600
- Shape: `{rounded.pill}` — complete capsule rounding
- Spacing: 1.5rem vertical padding, 2.5rem horizontal padding
- Composition: Centered or left-aligned depending on context; stands alone as primary CTA
- Variants: Solid fill (dark pages), outline (light pages), icon-plus-text for Load More

### Data Table
- Anatomy: Sticky header row with column labels, scrollable body with variable-height rows, hairline separators
- Surface: Header is solid black with white text; rows alternate white background with black text
- Typography: Header uses `{typography.heading-medium}`; body uses `{typography.body}` at 0.938rem
- Shape: `{rounded.none}` — sharp corners throughout
- Spacing: 1rem header padding, 1.75rem row vertical padding, 1.5rem horizontal cell padding
- Composition: Full-width with three columns (Year, Award, Project); year column carries oversized display numeral
- Variants: Filterable with dropdown pills above; expandable rows implied by multi-line award descriptions

### Top Navigation
- Anatomy: Logo left, primary links center-right, utility icons far right
- Surface: Transparent or white background depending on scroll position
- Typography: `{typography.navigation}` at 0.938rem, weight 500
- Shape: `{rounded.none}`
- Spacing: 1.5rem vertical, 2.5rem horizontal
- Composition: Flex row with space-between; links use generous gap of 3.75rem

### Filter Dropdown
- Anatomy: Label text with downward chevron, expanding to option list
- Surface: White background with subtle border
- Typography: `{typography.label}` at 1.063rem
- Shape: `{rounded.small}` at 4px
- Spacing: 0.75rem vertical, 1rem horizontal
- Composition: Inline with sibling filters, separated by 1.5rem gap

### Scroll-to-Top Button
- Anatomy: Circular button with upward arrow icon
- Surface: White or light background with dark icon; subtle shadow
- Shape: `{rounded.pill}` — perfect circle
- Spacing: Fixed position, bottom-right viewport corner with 2.5rem offset

## Responsive behavior

The design targets desktop as the primary viewport with a minimum width of approximately 1280px. At this width, the asymmetric content grid and full data table display as intended.

For narrower viewports, the following adaptations should be considered: the data table should transform to a stacked card layout or horizontal scroll to maintain readability of the three-column structure; the oversized display type should scale down proportionally, with hero-display reducing to section-display size; navigation links should collapse to a hamburger menu; the award logo cloud should reduce in density or scroll horizontally.

The dark contact page with its large Korean typography will require careful line-break management at smaller sizes to preserve the intentional staggered layout.

## Practical implementation guidance

### Preserve
- The stark black-and-white contrast ratio; do not introduce gray text on gray backgrounds
- The single-family type system using Pretendard across all weights
- The precise hairline separators at 1px using `{colors.hairline}`
- The full pill rounding on all primary actions
- The sticky table header pattern for long data lists
- The generous whitespace between sections (minimum 12.5rem)

### Avoid
- Adding background colors to table rows; keep them white with hairline separation
- Using border-radius on cards or containers; maintain sharp corners for editorial severity
- Introducing secondary accent colors beyond the functional blue
- Reducing the weight contrast between display and body text
- Crowding the navigation links; maintain the wide gap pattern

### Recommended Build Order
1. Establish the type scale with Pretendard at all weights (500, 600, 700, 800)
2. Implement the color tokens with strict light/dark mode pairing
3. Build the data table component with sticky header and hairline rows
4. Create the pill button system with solid and outline variants
5. Construct the top navigation with logo, links, and utility icons
6. Add the filter dropdown pattern for table refinement
7. Implement the dark section variant for landing/contact pages

### Accessibility
- Ensure the black-on-white and white-on-black pairings meet WCAG AAA contrast standards
- Provide visible focus indicators using `{colors.accent-blue}` for keyboard navigation
- Add `aria-label` to the scroll-to-top button and search icon
- Maintain table semantics with proper `th` scope attributes for the sticky header
- Ensure filter dropdowns are operable via keyboard with Escape to close

## Scope note

This guide covers the awards listing page, contact section, and shared navigation patterns visible in the supplied captures. Mobile breakpoints, hover animations, form validation states, and additional page templates are not represented. Measurements derive from the documented pixel values converted to the relative unit scale.

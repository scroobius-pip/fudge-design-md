# How joodaloop.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/joodaloop.com-design)

Last updated: 2026-08-10

## Captured pages

[![Article page with deep navy headline, navigation bar, and structured info panel with metadata fields](https://pin.fontofweb.com/4626?format=jpg)](https://design.withfudge.com/share/pin-4626)

[Article page with deep navy headline, navigation bar, and structured info panel with metadata fields](https://design.withfudge.com/share/pin-4626)

[![STUFF section with two-column grid of bordered cards featuring navy headers and link lists](https://pin.fontofweb.com/4393?format=jpg)](https://design.withfudge.com/share/pin-4393)

[STUFF section with two-column grid of bordered cards featuring navy headers and link lists](https://design.withfudge.com/share/pin-4393)

[![Homepage with oversized JOODALOOP logotype, italic tagline cloud, and stacked sidebar link groups](https://pin.fontofweb.com/4392?format=jpg)](https://design.withfudge.com/share/pin-4392)

[Homepage with oversized JOODALOOP logotype, italic tagline cloud, and stacked sidebar link groups](https://design.withfudge.com/share/pin-4392)

## Overview

Joodaloop is a personal website and portfolio that commits to an austere, editorial visual language. The design rejects decoration in favor of structural clarity: every element sits within precise rectangular boundaries, typography commands the hierarchy, and a single deep navy color carries almost all visual weight against an unblemished white ground. The homepage presents an enormous uppercase logotype as its immediate greeting, followed by an italicized tagline cloud that reads like a manifesto in fragments. Navigation is stripped to essential uppercase labels, and content organizes into bordered panels and gridded cards that feel closer to print layout than conventional web design. The overall impression is of a designer's notebook made public—intentional, opinionated, and rigorously minimal.

## Colors

The palette is severely restricted, operating almost exclusively in a binary of deep navy against white with black used for structural borders and hover states.

| token | value | use |
|---|---|---|
| ink | `#000000` | Primary text, borders, hover states for links |
| navy | `#000080` | Headlines, logotype, card headers, navigation, links at rest |
| canvas | `#ffffff` | Page background, card body backgrounds, header text on navy |
| muted-ink | `#3d3d6b` | Secondary text, metadata values, less prominent labels |
| surface | `#f5f5f5` | Subtle background variation for code or highlighted terms |
| border | `#000000` | Hairline rules around panels, cards, and sidebar groups |
| action | `#000080` | Interactive elements, links, navigation items |
| action-hover | `#000000` | Links under hover or active state |

The navy serves as the site's singular chromatic identity, appearing in the massive JOODALOOP logotype, article headlines, card headers, and all navigation. Black functions as the structural and interactive dark—borders are black hairlines, and links shift from navy to black on interaction. White provides the only relief, creating stark contrast that makes the navy feel even more saturated and deliberate. No gradients, shadows, or transparency effects appear. The occasional muted-ink tone appears in metadata and secondary labels, softening the contrast without introducing a new hue. This is a light-mode-only system with no dark variant visible.

## Typography

The site uses a single type family, Figtree, designed by Erik Kennedy. All weights and styles derive from this family.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Figtree | 5rem | 700 | 1 | -0.02em | Homepage logotype, major page titles |
| section-display | Figtree | 2.5rem | 700 | 1.1 | -0.01em | Article headlines, section headers like "STUFF" |
| body | Figtree | 1rem | 400 | 1.6 | 0 | Paragraph text, descriptions, list items |
| body-bold | Figtree | 1rem | 700 | 1.6 | 0 | Emphasized terms, numbered list introductions |
| label | Figtree | 0.875rem | 700 | 1.2 | 0.05em | Panel headers, card titles, metadata labels |
| navigation | Figtree | 1rem | 400 | 1 | 0.05em | Primary navigation items |
| tagline | Figtree | 1rem | 400 | 1.5 | 0 | Italicized descriptive phrases, tagline cloud |

The type scale is built on a 4px relative unit. Hero display at 5rem (80px) creates monumental impact for the logotype. Section display at 2.5rem (40px) establishes article hierarchy. Body text at 1rem (16px) with generous 1.6 line height ensures readability in longform content. Labels at 0.875rem (14px) with positive tracking and uppercase transformation create distinct hierarchy for panel headers. The tagline style uses the same 1rem size as body but applies italic styling for the floating descriptor phrases on the homepage.

Navigation and labels both employ positive letter spacing and uppercase text transformation, creating a consistent voice of quiet authority across the interface. The bold weight appears sparingly—headlines, labels, and occasional inline emphasis—while regular weight carries most of the reading experience.

Verify licensing for Figtree before production use. The family is credited to designer Erik Kennedy.

## Layout

The layout follows an asymmetric two-column structure on content pages, with a wider primary column for editorial content and a narrower sidebar for metadata, links, and navigation alternatives. The homepage compresses this relationship: the logotype dominates the upper left, with secondary links floating to its right, and the two-column body sits below.

Page margins are generous, creating breathing room that emphasizes the precision of the bordered elements within. The navigation sits as a horizontal row of uppercase labels at the top of content pages, separated from the headline by substantial vertical space.

The grid for card layouts uses a strict two-column arrangement with equal widths and consistent gutters. Cards themselves are rectangular containers with no border radius—sharp corners throughout reinforce the print-like, architectural quality. Sidebar groups stack vertically with identical widths, each bounded by the same hairline border.

Vertical rhythm is established through consistent section spacing of 4rem (64px) between major content blocks. Within panels and cards, internal padding appears to follow a 1rem (16px) standard, creating comfortable but not generous containment for text.

The overall layout philosophy treats the browser viewport as a sheet of paper: elements are positioned with deliberate care, white space is active and meaningful, and the grid is visible through the alignment of borders and text blocks rather than through background colors or separators.

## Visual language

The visual language is defined by restraint and structural honesty. Every container announces itself with a visible border—there are no ghost buttons, no shadowed elevations, no rounded corners to soften the geometry. The effect is reminiscent of technical documentation or a well-designed book: the interface does not pretend to be physical, but rather exposes its own architecture.

Photography and illustration appear absent from the visible surfaces. The homepage's tagline cloud—"abundance grindset... integrity... prickly-soft techboy... ordinary genius... lightness... guerrilla design... HTML handiwork... balling... excelsior..."—functions as the primary visual texture, an italicized cascade of self-descriptors that replaces a traditional bio or hero image. This typographic texture is unique to the homepage and establishes personality without visual noise.

Links are indicated by color (navy at rest, shifting to black) and occasionally by underline, particularly in body text where multiple links appear in sequence. The underline is a solid rule without offset, maintaining the crisp linear quality of the borders.

The navy color carries symbolic weight: it evokes classic web hyperlinks, institutional authority, and midnight seriousness simultaneously. Against the white ground, it reads as confident rather than heavy, especially given the generous spacing that prevents any sense of density.

No icons, symbols, or decorative marks appear in the visible interface. Even the navigation lacks hover indicators or active state markers beyond color change. The design trusts typography and spacing to communicate hierarchy and interactivity.

## Components

### Navigation bar

- **Anatomy**: Horizontal row of text links, left-aligned, with consistent spacing between items
- **Typography**: `{typography.navigation}` — uppercase, regular weight, positive tracking
- **Color**: Navy at rest, black on hover
- **Spacing**: Items separated by approximately 2rem, with substantial top margin from page edge
- **Composition**: Sits above the main headline, establishing site structure before content

### Hero logotype

- **Anatomy**: Single line of uppercase text, massively scaled
- **Typography**: `{typography.hero-display}` — 5rem, bold, tight negative tracking
- **Color**: Navy on white
- **Composition**: Left-aligned, dominating the upper portion of the homepage; secondary links float to its right at baseline

### Article headline

- **Anatomy**: One or two lines of bold text, left-aligned
- **Typography**: `{typography.section-display}` — 2.5rem, bold, slight negative tracking
- **Color**: Navy
- **Spacing**: Generous margin below before body text begins

### Info panel

- **Anatomy**: Bordered rectangle with labeled rows of metadata
- **Surface**: White background, 1px black border
- **Typography**: Label uses `{typography.label}` (uppercase, bold, small); values use `{typography.body}`
- **Spacing**: Internal padding approximately 1rem; row spacing comfortable for scanning
- **Composition**: Right sidebar on article pages; rows align label left, value right with implied grid

### Link card

- **Anatomy**: Rectangular container with navy header bar and white body containing link list
- **Surface**: Header is solid navy; body is white with 1px black border
- **Typography**: Header uses `{typography.label}` in white; body links use `{typography.body}` in navy
- **Shape**: Zero border radius, sharp corners
- **Spacing**: Internal padding approximately 1rem; link items stacked with comfortable vertical rhythm
- **Variants**: Two-column grid arrangement on "STUFF" page; single column in sidebar contexts

### Sidebar group

- **Anatomy**: Bordered rectangle with uppercase label header and stacked link list
- **Surface**: White background, 1px black border
- **Typography**: Label uses `{typography.label}` with horizontal rule extension; links use `{typography.body}`
- **Spacing**: Consistent with info panel; groups stack with section spacing between them
- **Composition**: Right column on homepage, containing "ELSEWHERE", "READING", "ADMIRING" sections

### Body content

- **Anatomy**: Flowing paragraphs with occasional bold emphasis and numbered lists
- **Typography**: `{typography.body}` with `{typography.body-bold}` for emphasis
- **Color**: Navy text, with inline links shifting to black on interaction
- **Spacing**: Paragraph spacing follows line height; list items indented with numeral markers

## Responsive behavior

The two-column layout with sidebar should collapse to a single column on narrower viewports, with sidebar panels stacking below the primary content in source order. The hero logotype should reduce in scale to maintain margins without overflow; a reduction to 3rem or 2.5rem would preserve hierarchy while fitting smaller screens.

Navigation items may wrap to multiple lines on very narrow viewports, though the short labels suggest they will remain single-line on most devices. Card grids should transition from two columns to single column below approximately 640px viewport width.

The hairline borders and precise spacing that define the visual character must be maintained across breakpoints; these are not decorative flourishes but structural necessities. Touch targets for links should meet minimum 44px height even where the visual design does not explicitly define button-like areas.

## Practical implementation guidance

### Preserve
- The stark navy-and-white contrast as the fundamental identity
- Sharp rectangular borders on every container—no border radius
- Uppercase, tracked labels for panel and card headers
- Generous white space around and within all elements
- The italic tagline cloud as a homepage-specific personality element
- Single type family throughout, with weight and tracking as the primary variables

### Avoid
- Adding background colors, gradients, or shadows to create depth
- Rounding corners on cards, buttons, or panels
- Introducing additional hues beyond the navy-black-white system
- Replacing the hairline borders with thicker rules or alternative separators
- Using multiple type families or decorative display faces

### Recommended build order
1. Establish the type scale with Figtree at all defined sizes
2. Implement the border system—1px black rules on all containers
3. Build the navigation and hero logotype as the primary hierarchy
4. Create the info panel and sidebar group components with consistent padding
5. Develop the two-column grid for cards and content pages
6. Add link hover states (navy to black) and ensure adequate touch targets

### Accessibility
- Ensure the navy (`#000080`) on white meets WCAG AA contrast ratios for all text sizes; the dark value appears sufficient for large headlines and likely adequate for body text, though verification is recommended
- Maintain visible focus indicators since the design lacks explicit button shapes; a black outline or underline shift would align with the existing visual language
- Preserve semantic heading hierarchy despite the visual flattening—the logotype should not be the only `h1` if it appears on every page
- Consider increasing link underline visibility in body text for colorblind users who may not distinguish navy from black

## Scope note

This guide covers the homepage and article page surfaces visible in the supplied images. The "STUFF" page with its card grid and the homepage sidebar groups are represented, but interior page states, form interactions, animation, and any dark mode variant are not included. Measurements are practical adaptation targets based on visual estimation from the provided images. Mobile breakpoints and behavior are inferred from desktop layouts and should be validated in implementation.

# How pepperl-fuchs.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/pepperl-fuchs.com-design)

Last updated: 2026-08-10

## Captured pages

[![Technical data accordion with teal active state and grey collapsed rows showing product specifications in a structured table format](https://pin.fontofweb.com/5873?format=jpg)](https://design.withfudge.com/share/pin-5873)

[Technical data accordion with teal active state and grey collapsed rows showing product specifications in a structured table format](https://design.withfudge.com/share/pin-5873)

[![Product detail page featuring hero image of green industrial converter, breadcrumb navigation, key benefits list, and add-to-cart controls](https://pin.fontofweb.com/5872?format=jpg)](https://design.withfudge.com/share/pin-5872)

[Product detail page featuring hero image of green industrial converter, breadcrumb navigation, key benefits list, and add-to-cart controls](https://design.withfudge.com/share/pin-5872)

[![Product category landing page with dark slate hero banner, search filter bar, and grid of product cards with bookmark icons and cart buttons](https://pin.fontofweb.com/5871?format=jpg)](https://design.withfudge.com/share/pin-5871)

[Product category landing page with dark slate hero banner, search filter bar, and grid of product cards with bookmark icons and cart buttons](https://design.withfudge.com/share/pin-5871)

## Overview

The Pepperl+Fuchs design system serves an industrial automation audience with a visual language that prioritizes clarity, technical credibility, and efficient product discovery. The system balances a distinctive teal brand accent against neutral greys and whites, creating a clean environment where technical specifications and product imagery take center stage. The overall impression is utilitarian and precise—every element supports the goal of helping engineers and procurement professionals find, evaluate, and purchase automation components quickly.

The design employs a strict rectangular aesthetic with zero border radius throughout, reinforcing the industrial, engineered quality of the products. Information density is high but well-organized through clear typographic hierarchy, accordion patterns for technical data, and card-based product grids. The system moves from dark slate hero sections into bright white content areas, creating natural visual landmarks that guide users through complex product hierarchies without overwhelming them.

## Colors

| token | value | use |
|---|---|---|
| action | #009B77 | Primary buttons, active accordion states, bookmark icons, cart icons, breadcrumb links, section headings |
| action-hover | #007A5E | Hover state for primary actions |
| ink | #333333 | Primary body text, headings, navigation labels |
| ink-secondary | #666666 | Secondary text, descriptions, metadata |
| canvas | #FFFFFF | Page background, card surfaces, input fields |
| surface | #F5F5F5 | Accordion headers, quantity stepper backgrounds, subtle section backgrounds |
| surface-elevated | #FFFFFF | Product cards on grey backgrounds |
| border | #E5E5E5 | Default dividers, card borders, table row separators |
| border-strong | #CCCCCC | Input borders, stepper borders, stronger structural dividers |
| hero-slate | #3D4F5F | Hero banner backgrounds, category page headers |
| hero-slate-light | #4A5D6E | Search bar background within hero sections |
| muted | #999999 | Disabled states, placeholder text, tertiary information |

The color strategy centers on a single vibrant teal (#009B77) that functions as the brand's unmistakable signature. This teal appears in functional contexts—active states, interactive icons, and primary actions—rather than decorative ones, which reinforces its practical, industrial character. The dark slate hero-slate provides dramatic contrast for category landing pages, creating a clear visual threshold between navigation and content. The neutral grey scale handles all structural and informational needs, from subtle surface differentiation to strong text contrast. White dominates product detail pages where technical accuracy and readability are paramount. The system avoids gradients and shadows, relying instead on flat color blocks and precise borders to define space.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Inter | 2.5rem | 700 | 1.1 | -0.01em | Category page titles, major section headers |
| section-display | Inter | 2rem | 700 | 1.2 | -0.01em | Product detail page titles |
| heading-large | Inter | 1.5rem | 600 | 1.3 | 0 | Subsection headings, card titles |
| heading-medium | Inter | 1.25rem | 600 | 1.4 | 0 | Accordion headers, feature titles |
| body | Inter | 1rem | 400 | 1.6 | 0 | Primary body text, descriptions |
| body-small | Inter | 0.875rem | 400 | 1.5 | 0 | Secondary descriptions, metadata, captions |
| label | Inter | 0.75rem | 600 | 1.4 | 0.02em | Button text, tags, filter labels |
| navigation | Inter | 0.875rem | 500 | 1.4 | 0 | Main navigation, breadcrumbs |
| price | Inter | 1.5rem | 700 | 1.2 | 0 | Product pricing display |

The typographic system relies entirely on Inter, a neutral, highly legible sans-serif that performs well at technical sizes and supports the system's utilitarian character. The hierarchy is established through weight and size rather than style variation—no italics or condensed variants appear in the interface. Display sizes use tight negative tracking for a modern, compact feel appropriate to industrial branding. Body text maintains generous line height for readability in dense technical specifications. The label style, with its slight positive tracking and semibold weight, gives buttons and tags clear affordance without competing with headings.

Verify licensing for Inter through Rasmus Andersson and Rsms before production use.

## Layout

The layout system follows a full-width fluid approach with contained content areas. The header spans the full viewport width with a white background, containing the Pepperl+Fuchs logo left-aligned and utility icons right-aligned. Below the logo, a secondary navigation bar presents primary categories in a horizontal list with generous horizontal spacing between items.

Hero sections on category pages use the full viewport width with a dark slate background, extending from the navigation edge to edge. Within this hero, a search bar occupies a prominent central position, flanked by filter controls and category tags below. The search input stretches nearly the full container width with a teal search button attached to its right edge.

Content areas below the hero use a contained width with centered alignment. Product grids display three cards per row with consistent gaps, each card containing product imagery, a bookmark icon in the upper left, a cart icon in the upper right, product code, title, description, and a link to the product detail page. The left sidebar on category pages contains category description text on a dark background, creating a persistent information panel.

Product detail pages use a two-column layout with product information and purchase controls on the left and product imagery on the right. The image area includes a main hero image with thumbnail navigation below. Technical data appears below the product summary in a full-width accordion pattern.

Spacing follows a 4px base unit. Section vertical padding uses 4rem as a standard rhythm. Component internal padding ranges from 0.75rem for compact elements like buttons to 1.5rem for cards and accordion content. The grid gap for product cards measures 1.5rem, creating clear separation without excessive whitespace.

## Visual language

The visual language communicates precision engineering and technical reliability through strict geometry and minimal ornamentation. Every interactive element uses sharp 90-degree corners—buttons, inputs, cards, and accordions all share this zero-radius treatment, which subtly echoes the machined edges of industrial equipment.

Iconography appears as simple line icons or custom symbols from the Icomoon set, rendered in teal for interactive states and grey for inactive or decorative purposes. The bookmark ribbon icon on product cards uses a distinctive flag shape that provides visual interest without breaking the utilitarian tone. Cart icons follow a standard shopping cart silhouette.

Product photography dominates the right side of detail pages, showing industrial components against clean white backgrounds with subtle shadows that suggest physical presence without dramatic styling. Thumbnail images below the main view offer alternate angles and technical diagrams, maintaining the same clinical presentation.

The accordion pattern for technical specifications is a defining interaction model: collapsed rows show a grey background with a teal plus icon, while the active row inverts to a solid teal background with white text and a minus icon. This high-contrast state change provides immediate orientation within dense technical content.

## Components

### Primary Button

- Anatomy: Text label with optional icon, full-bleed background
- Surface and text color: `{colors.action}` background with `{colors.canvas}` text
- Typography: `{typography.label}` in uppercase or title case
- Shape: Zero border radius, rectangular form
- Spacing: 0.75rem vertical padding, 1.5rem horizontal padding
- Composition: Icon positioned to the right of text with 0.5rem gap
- Variants: Default state; hover shifts to `{colors.action-hover}`

### Secondary Button

- Anatomy: Text label with optional icon, bordered outline
- Surface and text color: `{colors.canvas}` background with `{colors.action}` text and border
- Typography: `{typography.label}`
- Shape: Zero border radius, 1px solid border using `{colors.action}`
- Spacing: Matches primary button dimensions
- Composition: Used for lower-priority actions like "Show more" or contact links

### Quantity Stepper

- Anatomy: Minus button, numeric input field, plus button in horizontal arrangement
- Surface and text color: `{colors.surface}` background, `{colors.ink}` text, `{colors.border-strong}` borders
- Typography: `{typography.body}` for numeric value
- Shape: Zero border radius, 1px borders separating segments
- Spacing: Compact 0.5rem internal padding
- Composition: Buttons flank the centered number, used adjacent to "Add to cart"

### Product Card

- Anatomy: Product image, bookmark icon (upper left), cart icon (upper right), product code, title, description, "Go to Product" link
- Surface and text color: `{colors.surface-elevated}` background, `{colors.ink}` text, `{colors.action}` for interactive elements
- Typography: Product code in `{typography.body-small}`, title in `{typography.heading-large}`, description in `{typography.body-small}`
- Shape: Zero border radius, 1px `{colors.border}` border
- Spacing: 1.5rem internal padding
- Composition: Image area occupies top portion, text content below with consistent vertical rhythm

### Technical Data Accordion

- Anatomy: Expandable row header with section title and toggle icon, expandable content area with specification table
- Surface and text color: Collapsed state uses `{colors.surface}` background with `{colors.ink}` text; active state uses `{colors.action}` background with `{colors.canvas}` text
- Typography: Header uses `{typography.heading-medium}`, table labels in semibold, values in regular weight
- Shape: Full-width rows with zero border radius, stacked vertically with small gaps
- Spacing: 1rem vertical padding in header, 1.5rem in expanded content
- Composition: Toggle icon (plus/minus) positioned at right edge; expanded content shows two-column specification layout with property names left and values right

### Search Bar

- Anatomy: Text input field with search icon, submit button
- Surface and text color: `{colors.canvas}` input background, `{colors.ink-secondary}` placeholder text, `{colors.action}` submit button
- Typography: Input text in `{typography.body}`, button text in `{typography.label}`
- Shape: Zero border radius, button attached flush to input right edge
- Spacing: 0.75rem vertical padding in input, 1rem horizontal
- Composition: Search icon positioned inside input at left, full-width within container

### Breadcrumb Navigation

- Anatomy: Home icon followed by hierarchical path with chevron separators
- Surface and text color: `{colors.ink-secondary}` for inactive items, `{colors.action}` for current page
- Typography: `{typography.navigation}`
- Shape: Inline horizontal flow
- Spacing: 0.5rem between items
- Composition: Truncates with ellipsis on deep paths, current page non-interactive

## Responsive behavior

The system appears optimized for desktop viewing with wide layouts that accommodate detailed product information side-by-side with imagery. At narrower viewports, the two-column product detail layout should stack vertically with imagery preceding purchase information. The three-column product grid should reduce to two columns on tablet and single column on mobile, maintaining card proportions and internal spacing.

The navigation bar likely collapses to a hamburger menu on mobile, though this pattern is not visible in the supplied material. Search and filter controls in hero sections should remain accessible, potentially stacking vertically on narrow screens.

Technical data accordions remain effective across all viewport widths due to their full-width, single-column nature. The specification tables within may require horizontal scrolling or reflowed layouts on very narrow screens to maintain readability of paired property-value relationships.

## Practical implementation guidance

### Preserve
- The strict zero-radius aesthetic on all components; this is a defining brand characteristic
- The teal-to-white inversion pattern for active accordion states
- The dark slate hero sections for category landing pages
- The two-column specification table layout within expanded accordions
- The bookmark and cart icon positioning on product cards

### Avoid
- Rounded corners on any component; they contradict the industrial precision of the brand
- Drop shadows for elevation; rely on flat color blocks and borders instead
- Multiple accent colors; the single teal carries all interactive and brand weight
- Decorative gradients or photographic backgrounds behind text
- Italic typography, which appears absent from the system

### Recommended Build Order
1. Establish the color tokens and typography scale with Inter at all weights
2. Build the zero-radius button components with primary and secondary variants
3. Implement the accordion pattern with its distinctive active state inversion
4. Create the product card with proper icon positioning and text hierarchy
5. Construct the two-column product detail layout with image gallery and purchase controls
6. Add the hero banner with search integration for category pages
7. Implement breadcrumb navigation and header with utility icons

### Accessibility
- Ensure the teal action color meets contrast requirements against white; the dark text on grey accordion headers should be verified for WCAG AA compliance
- Provide clear focus indicators for keyboard navigation, likely using outline offsets given the zero-radius aesthetic
- The accordion toggle icons should have accessible labels indicating expand/collapse state
- Product images require descriptive alt text for technical equipment identification
- The quantity stepper should support direct numeric entry and keyboard increment/decrement

## Scope note

This guide covers the product category landing page and product detail page surfaces visible in the supplied images. Header navigation, footer, checkout flows, account pages, and mobile-specific layouts are not represented. Motion, hover states, and form validation patterns are not documented. Measurements are practical adaptation targets derived from visual inspection against a 4px base unit.

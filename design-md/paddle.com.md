# How paddle.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/paddle.com-design)

Last updated: 2026-08-10

## Captured pages

[![Pricing page hero with dual-panel layout showing Pay-as-you-go and Custom pricing tiers against near-black background with subtle card surfaces](https://pin.fontofweb.com/6765?format=jpg)](https://design.withfudge.com/share/pin-6765)

[Pricing page hero with dual-panel layout showing Pay-as-you-go and Custom pricing tiers against near-black background with subtle card surfaces](https://design.withfudge.com/share/pin-6765)

[![Expanded navigation mega-menu with product categories, use cases, partner programs, and customer story highlights on dark background](https://pin.fontofweb.com/6750?format=jpg)](https://design.withfudge.com/share/pin-6750)

[Expanded navigation mega-menu with product categories, use cases, partner programs, and customer story highlights on dark background](https://design.withfudge.com/share/pin-6750)

[![Customer results section with metric cards for Renderforest, remove.bg, and MacPaw, plus large statistics row showing transactions and revenue scale](https://pin.fontofweb.com/6749?format=jpg)](https://design.withfudge.com/share/pin-6749)

[Customer results section with metric cards for Renderforest, remove.bg, and MacPaw, plus large statistics row showing transactions and revenue scale](https://design.withfudge.com/share/pin-6749)

[![Three-column footer CTA band with gradient-tinted Explore Paddle panel and dark Pricing and Get started panels with arrow indicators](https://pin.fontofweb.com/6748?format=jpg)](https://design.withfudge.com/share/pin-6748)

[Three-column footer CTA band with gradient-tinted Explore Paddle panel and dark Pricing and Get started panels with arrow indicators](https://design.withfudge.com/share/pin-6748)

## Overview

Paddle's design system presents a dark, premium aesthetic built for enterprise SaaS credibility. The visual language relies on near-black backgrounds with carefully layered surface tones that create depth without visual noise. Typography alternates between a distinctive display typeface for headlines and Inter for all functional text, establishing clear hierarchy through weight and scale rather than color variation. The system favors generous whitespace, rounded containers with subtle borders, and restrained use of accent colors—primarily white and near-white against dark surfaces. This approach produces a confident, technical atmosphere appropriate for financial infrastructure software while maintaining readability and approachable density across marketing pages, pricing interfaces, and navigation systems.

## Colors

The color system operates on a dark-first principle with a narrow, purposeful palette. All interface colors derive from a spectrum of blacks, near-blacks, and whites with minimal chromatic variation.

| token | value | use |
|---|---|---|
| canvas | #000000 | Primary page background, deepest layer |
| surface | #0E1414 | Navigation dropdowns, secondary backgrounds |
| surface-elevated | #181C1D | Card backgrounds, elevated containers |
| surface-highlight | #293232 | Active states, selected items, emphasis surfaces |
| border | #2B3232 | Card borders, dividers, container outlines |
| border-subtle | #2B3033 | Hairline separators, inactive borders |
| ink | #FCFCFC | Primary text, headlines, primary button fills |
| ink-muted | #696D6D | Secondary text, labels, disabled states |
| ink-dim | #E0E0E0 | Tertiary text, captions, metadata |
| accent | #0E1414 | Button text on light backgrounds |
| accent-text | #F8F8F8 | Inverse text on dark accent surfaces |

The dark hierarchy progresses from pure black canvas through slightly warmed dark grays for surfaces. Border colors sit just above surface tones to create subtle definition without harsh contrast. The near-white ink color avoids pure white to reduce eye strain at high brightness levels. No vibrant accent colors appear in the core system—visual interest comes from typography scale, photography, and occasional gradient treatments rather than chromatic accents.

## Typography

Two type families serve distinct roles: By Johannes Breyer Fabian Harb Erkin Karamemet for headlines and structural hierarchy, and Inter for all body text, labels, navigation, and interactive elements.| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | By Johannes Breyer Fabian Harb Erkin Karamemet | 4.5rem | 400 | 1 | -0.01em | Page headlines, hero statements |
| section-display | By Johannes Breyer Fabian Harb Erkin Karamemet | 2.5rem | 400 | 1.2 | -0.01em | Section headings, feature titles |
| subhead-display | By Johannes Breyer Fabian Harb Erkin Karamemet | 1.5rem | 400 | 1.2 | -0.01em | Card titles, sub-section headers |
| metric-display | Inter | 3rem | 400 | 1.5 | -0.01em | Large statistics, numbers |
| body-large | Inter | 1.25rem | 400 | 1.5 | -0.025em | Lead paragraphs, descriptions |
| body | Inter | 1rem | 400 | 1.5 | -0.025em | Standard paragraphs, card copy |
| label | Inter | 0.875rem | 500 | 1 | 0.03em | Uppercase labels, metadata |
| navigation | Inter | 0.875rem | 500 | 1 | 0.03em | Nav links, menu items |
| button-primary | Inter | 1rem | 500 | 1 | -0.025em | Button text, CTAs |

The By Johannes Breyer Fabian Harb Erkin Karamemet family appears exclusively at display sizes with tight line-height and minimal tracking, giving headlines a composed, editorial quality. Inter handles all functional typography with slightly negative tracking at body sizes and positive tracking for labels and navigation to improve legibility at small sizes. Weight variations are limited: Regular (400) for body and display, Medium (500) for labels, navigation, and buttons. Verify licensing for these families before production use. The display typeface is credited to designers Johannes Breyer, Fabian Harb, and Erkin Karamemet, available through Dinamo Typefaces.

## Layout

The layout system uses a consistent spacing scale based on a 0.25rem unit, with section spacing at 4rem, 8rem, and 8rem increments for small, standard, and large vertical rhythm. Horizontal padding typically follows 1.5rem to 2.5rem for comfortable reading widths.

Content containers center with generous maximum widths, allowing headline text to breathe against the dark canvas. The pricing page demonstrates a two-column card layout with asymmetric content distribution—descriptive text and feature lists occupy the left portion while pricing figures center in dedicated panels. Cards use 1rem border radius with 1px solid borders in the border color token.

The navigation system expands into a full-width mega-menu with multi-column content organization. Dropdown panels float below the navigation bar with substantial vertical padding (2rem top, 1.5rem bottom) and internal grid divisions separating use cases, product categories, partner programs, and customer highlights. Menu items stack with 0.75rem to 1rem vertical spacing between entries.

Section transitions maintain consistent vertical rhythm. The customer results section shows a headline row with right-aligned secondary action, followed by a two-column card grid with 1.5rem gaps, then a full-width statistics row with three large metric displays. Below this, a logo bar provides social proof with horizontal distribution.

Footer treatment uses a distinctive three-column band where the first panel receives a subtle gradient tint (lavender-to-blue shift) while remaining panels stay in the standard dark surface. Each panel contains a display heading, descriptive text, and a right-aligned arrow indicator, with 1px vertical dividers between columns.

## Visual language

Surface treatment defines the system's material quality. The near-black canvas provides absolute depth; elevated surfaces appear in #181C1D with 1px #2B3232 borders creating subtle containment. No shadows appear on standard cards, maintaining flat precision. Elevated menus receive layered box shadows: a tight 20px 45px shadow at 39% opacity, a broader 81px 81px shadow at 34% opacity, and extended 183px and 326px falloffs for dramatic depth on navigation dropdowns.

Borders function as optical hairlines rather than structural elements. The 1px solid style predominates, with occasional top-border-only treatments for section dividers. Radius values cluster at 12px for buttons and 16px for cards and containers, with full pill shapes for primary actions.

Imagery and photography appear desaturated and cool-toned, integrating with the dark environment. Customer logos display in monochrome or near-monochrome treatments. The gradient accent in the footer CTA represents the sole chromatic departure—a soft lavender-to-cyan shift that suggests technological sophistication without disrupting the restrained palette.

Iconography uses simple line weights, often paired with text labels in feature lists. The pricing page shows globe, shield, and sparkle icons at 1.25rem scale beside feature descriptions, maintaining the muted ink-dim color for secondary information.

## Components

**Navigation bar**
- Anatomy: Logo left, primary links center, utility actions right
- Surface: Transparent over canvas, or surface color when menu expanded
- Typography: navigation token, Medium weight
- Spacing: 2rem vertical padding, 0.75rem horizontal link spacing
- Composition: Flex row with space-between alignment
- Variants: Collapsed state shows links only; expanded state reveals full mega-menu

**Mega-menu dropdown**
- Anatomy: Full-width panel with multi-column grid, section headers, link lists, and featured content blocks
- Surface: surface color with layered shadow treatment
- Typography: navigation for headers, body for descriptions, label for metadata
- Shape: 1rem border radius on container
- Spacing: 2rem top padding, 1.5rem bottom padding, 2.5rem internal column gaps
- Composition: Asymmetric grid with wider left columns for navigation, narrower right columns for customer stories and metrics
- States: Visible when parent navigation item activated

**Pricing card**
- Anatomy: Header with tier name, feature list with icons, pricing figure, and call-to-action button
- Surface: surface-elevated with 1px border
- Typography: section-display for tier names, body for features, metric-display for pricing figures, button-primary for actions
- Shape: 1rem border radius
- Spacing: 2.5rem internal padding, 1.5rem between content blocks
- Composition: Vertical stack with left-aligned content; pricing figure centers in dedicated sub-panel
- Variants: Standard tier with solid border; featured tier may receive subtle background texture or gradient treatment

**Metric card**
- Anatomy: Company logo, large statistic, context label, and case study link
- Surface: surface-elevated with 1px border
- Typography: label for company names, metric-display for statistics, body for descriptions
- Shape: 1rem border radius
- Spacing: 2rem padding, 1.5rem between statistic and description
- Composition: Vertical stack with logo at top, large figure centered, supporting text below

**Statistics row**
- Anatomy: Three or more large metric displays with supporting labels
- Surface: Transparent over canvas
- Typography: metric-display for numbers, body for labels
- Spacing: 4rem between metric groups, centered alignment
- Composition: Horizontal flex with equal distribution

**Primary button**
- Anatomy: Text label with optional arrow icon
- Surface: ink background with accent text
- Typography: button-primary
- Shape: Full pill (9999px radius)
- Spacing: 0.75rem vertical padding, 1.25rem horizontal padding
- States: Default shows solid fill; hover may invert to transparent with border

**Secondary button**
- Anatomy: Text label with optional arrow icon
- Surface: Transparent with ink border
- Typography: button-primary
- Shape: Full pill
- Spacing: 0.75rem vertical padding, 1.25rem horizontal padding

**Footer CTA band**
- Anatomy: Three equal panels with heading, description, and arrow indicator
- Surface: First panel with gradient tint (lavender-to-blue); remaining panels in surface color
- Typography: section-display for headings, body-large for descriptions
- Shape: Full-width band with 1px vertical dividers between panels
- Spacing: 3rem to 4rem padding per panel
- Composition: Three-column grid with equal widths

## Responsive behavior

The design system prioritizes desktop presentation with established patterns for adaptation. Navigation collapses to a compact bar with hamburger menu on smaller viewports; the mega-menu transforms to stacked accordion sections or a full-screen overlay. Pricing cards stack vertically on narrow screens, with the asymmetric two-column layout becoming a single scrolling column. Metric cards in the results section transition from multi-column grids to horizontal scroll or stacked arrangement. Statistics row wraps to vertical stacking with centered alignment. Footer CTA panels stack vertically, with gradient treatment applying to top panel only. Typography scales down proportionally: hero-display reduces to 2.5rem, section-display to 1.5rem, maintaining the By Johannes Breyer Fabian Harb Erkin Karamemet/Inter hierarchy at all sizes.

## Practical implementation guidance

**Preserve**
- The dark-first canvas as default background; light surfaces should be exceptional and purposeful
- The strict two-typeface hierarchy: By Johannes Breyer Fabian Harb Erkin Karamemet exclusively for display, Inter for everything functional
- Generous section spacing (8rem) to let dark surfaces breathe
- Subtle border treatments rather than heavy shadows for elevation
- The near-white ink color (#FCFCFC) rather than pure white for primary text

**Avoid**
- Introducing vibrant accent colors that compete with the restrained palette
- Using By Johannes Breyer Fabian Harb Erkin Karamemet at body sizes or for functional text
- Adding shadows to standard cards—the flat precision is intentional
- Pure black (#000000) for text or borders; the system uses warmed darks
- Crowding the mega-menu with excessive content density

**Recommended build order**
1. Establish the dark canvas and surface color tokens
2. Implement Inter at body and navigation sizes with correct tracking
3. Add By Johannes Breyer Fabian Harb Erkin Karamemet at hero and section display sizes
4. Build the card component with border and radius treatment
5. Create primary and secondary button variants with pill shapes
6. Implement navigation bar with transparent default state
7. Add mega-menu with shadow layering and multi-column grid
8. Construct pricing page layout with asymmetric card distribution
9. Build metric cards and statistics row for social proof sections
10. Add footer CTA band with gradient panel treatment

**Accessibility**
- Maintain minimum 4.5:1 contrast ratios; the ink (#FCFCFC) on canvas (#000000) exceeds 15:1
- Ensure interactive elements have visible focus indicators, potentially using surface-highlight or border color shifts
- Provide reduced-motion alternatives for any dropdown animations
- Structure mega-menu content with proper heading hierarchy for screen reader navigation
- Use aria-expanded and aria-controls on navigation triggers

## Scope note

This guide covers the marketing site surface including homepage, pricing page, navigation system, and footer patterns. Component states such as hover, active, focus, loading, and disabled are not documented from the available material. Mobile breakpoint behavior, form components, and checkout interfaces are not included. The gradient treatment in the footer CTA appears limited to that specific component context. The font family By Johannes Breyer Fabian Harb Erkin Karamemet-3588810752899380830 appears in source data as a specific file variant of the display typeface.

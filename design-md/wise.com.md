# How wise.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/wise.com-design)

Last updated: 2026-08-10

## Captured pages

[![Dark green hero section with large lime-green display heading and centered currency converter card on the Currency Converter page.](https://pin.fontofweb.com/6933?format=jpg)](https://design.withfudge.com/share/pin-6933)

[Dark green hero section with large lime-green display heading and centered currency converter card on the Currency Converter page.](https://design.withfudge.com/share/pin-6933)

[![Bright lime-green comparison section showing a white fee-comparison table with provider logos and a dark pill-shaped Send money button.](https://pin.fontofweb.com/6935?format=jpg)](https://design.withfudge.com/share/pin-6935)

[Bright lime-green comparison section showing a white fee-comparison table with provider logos and a dark pill-shaped Send money button.](https://design.withfudge.com/share/pin-6935)

[![White feature section with left-aligned dark heading, three icon-list items with circular borders, and a large rounded video panel on the right.](https://pin.fontofweb.com/6934?format=jpg)](https://design.withfudge.com/share/pin-6934)

[White feature section with left-aligned dark heading, three icon-list items with circular borders, and a large rounded video panel on the right.](https://design.withfudge.com/share/pin-6934)

[![White FAQ accordion section with bold stacked display heading, expand/collapse items, and a lime-green active state circle with X icon.](https://pin.fontofweb.com/6936?format=jpg)](https://design.withfudge.com/share/pin-6936)

[White FAQ accordion section with bold stacked display heading, expand/collapse items, and a lime-green active state circle with X icon.](https://design.withfudge.com/share/pin-6936)

## Overview

Wise's visual system is built on dramatic contrast: deep forest-green hero surfaces anchor the experience, while electric lime-green accents signal action and progress. The interface feels confident and uncluttered, using generous whitespace and a strict two-typeface hierarchy. Wise Sans, a heavy geometric display face, handles all large headlines with tight leading and a slightly compressed stance, giving marketing pages immediate visual authority. Inter, in Regular and Semibold weights, manages everything else—body copy, labels, navigation, and interactive text—ensuring readability at small sizes and maintaining a neutral, trustworthy tone.

The design moves between three distinct modes: dark immersive heroes for conversion moments, bright accent sections for comparison and proof points, and clean white surfaces for detailed content and feature explanations. Components are consistently rounded, with pills for buttons, large radii for cards and panels, and perfect circles for icon containers and toggle states. This creates a friendly, approachable personality that balances financial credibility with consumer ease.

## Colors

| token | value | use |
|---|---|---|
| ink | #0E0F0C | Primary text, dark backgrounds, button borders |
| ink-secondary | #454745 | Body text on light surfaces, secondary descriptions |
| ink-muted | #6A6C6A | Tertiary text, captions, disabled states |
| canvas | #FFFFFF | Primary background, card surfaces, input fields |
| surface | #E8EBE6 | Subtle section backgrounds, footer areas |
| surface-dark | #163300 | Hero backgrounds, dark immersive sections |
| action-primary | #9FE870 | Primary buttons, active states, success highlights |
| action-primary-text | #0D1F00 | Text on lime-green buttons and accents |
| action-secondary | #38C8FF | Informational highlights, secondary accents |
| accent-warm | #A8200D | Error states, warning text, negative comparisons |
| border | #868685 | Input borders, dividers, subtle separators |
| border-light | #E8EBE6 | FAQ item borders, list separators |

The color system operates in three distinct modes. Dark mode uses surface-dark as the dominant background with action-primary for headlines and interactive elements, creating high-impact conversion zones. Light mode uses canvas and surface backgrounds with ink and ink-secondary text for reading and browsing. Accent mode deploys action-primary as a full background color for comparison and proof sections, where dark text on bright lime creates urgency and draws attention to Wise's competitive advantages. The accent-warm red appears sparingly, reserved for competitor pricing in comparison tables and error messaging.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Wise Sans | 5.8125rem | 900 | 0.85 | normal | Page heroes, major campaign headlines |
| section-display | Wise Sans | 4rem | 900 | 0.85 | normal | Section headings, FAQ titles |
| heading-large | Inter | 3.10625rem | 600 | 1.15 | -0.03em | Feature section headings |
| heading-medium | Inter | 1.375rem | 600 | 1.45 | 0.01em | FAQ questions, card titles, list headings |
| body | Inter | 1.125rem | 400 | 1.45 | -0.006em | Primary body text, descriptions |
| body-small | Inter | 1rem | 400 | 1.5 | -0.011em | Secondary descriptions, table data |
| label | Inter | 0.875rem | 600 | 1.5 | -0.006em | Buttons, navigation, tags |
| navigation | Inter | 0.9375rem | 600 | 1.6 | -0.011em | Top-bar links, secondary navigation |

Wise Sans, designed by Mario Feliciano of Feliciano Type, serves exclusively as the display voice. Its heavy weight and compact proportions demand attention at large sizes while remaining legible in all-caps treatments. The typeface never appears below 4rem in the visible system, preserving its impact for major moments only.

Inter, designed by Rasmus Andersson of Rsms, handles the entire functional hierarchy. The system uses Regular (400) for body and descriptions, Semibold (600) for headings, labels, and interactive text. Letter spacing is consistently tight, with negative values on larger Inter sizes and near-neutral tracking on display type. Line heights are compact for display (0.85) and comfortable for reading (1.45–1.5).

Verify licensing for these families before production use.

## Layout

The layout follows a centered, contained model with generous breathing room. Maximum content width is approximately 1200px, achieved through auto margins and horizontal padding of 2rem on mobile expanding to consistent desktop gutters. Sections stack vertically with substantial vertical rhythm—section spacing of 3.625rem creates clear separation between content types.

Hero sections use full-bleed dark backgrounds with centered content alignment. The currency converter hero places a large display heading above a centered subheading, then floats a white converter card below with substantial top margin. This card overlaps the dark hero and the white content area below, creating depth through elevation rather than shadow.

Feature sections alternate between single-column centered layouts and two-column splits. The two-column pattern places text content on the left with a large media panel on the right, maintaining asymmetric balance through the media's rounded corners and generous internal padding. Icon lists stack vertically with consistent item spacing, each item comprising a circular icon container, bold heading, and description paragraph.

Comparison sections use full-width accent backgrounds with centered introductory text, then present data in contained white cards with internal grid layouts. Tables use implicit grid alignment rather than visible borders, with row labels left-aligned and data columns evenly distributed.

The footer and secondary content areas revert to dark backgrounds with muted text, creating a visual bookend that signals the page conclusion.

## Visual language

Imagery and illustration follow a clean, contemporary approach. Photography appears in large rounded panels with 2rem corner radii, often showing lifestyle or travel contexts with slightly desaturated, natural color grading. Video content uses the same rounded container treatment with a small circular pause button floating in the upper right corner.

Iconography is simple and geometric, rendered in thin strokes within circular borders. Feature list icons use 1px circular outlines with centered symbols—globe, card, arrow—creating a consistent visual rhythm that echoes the rounded component language. The icon containers are perfectly circular with subtle borders, sitting to the left of text content with comfortable gutter spacing.

The Wise logo appears in lime green on dark backgrounds and dark green on light backgrounds, maintaining consistent contrast. Navigation uses pill-shaped active states for the current section, with outlined pills for primary calls-to-action like Register.

Motion and interaction are implied through state changes: FAQ items expand with a rotating plus-to-X transformation in a lime-green circle; comparison tables likely animate value changes; converter cards suggest real-time updates. These patterns reinforce the system's living, data-driven personality without overwhelming the financial context.

## Components

### Primary button
- Anatomy: Text label centered within a pill-shaped container
- Surface: action-primary background with action-primary-text color
- Typography: label token, Semibold weight
- Shape: pill border radius (9999px)
- Spacing: 0.6875rem vertical padding, 1.5rem horizontal padding
- Composition: Full-width in cards, auto-width in navigation
- Variants: Dark background variant uses surface-dark background with canvas text for secondary actions

### Secondary button
- Anatomy: Text label centered within a pill-shaped container with visible border
- Surface: canvas background with ink border and ink text
- Typography: label token, Semibold weight
- Shape: pill border radius with 1px solid border
- Spacing: identical to primary button
- Composition: Appears alongside primary buttons as alternative actions

### Converter card
- Anatomy: White rounded panel containing amount inputs, currency selectors, converted value display, action buttons, and informational callouts
- Surface: canvas background with subtle shadow elevation
- Shape: 2rem border radius on all corners
- Spacing: 2rem internal padding, generous vertical gaps between elements
- Composition: Centered within hero, approximately 640px maximum width
- Internal elements: Rounded input fields with currency flags, circular swap button between inputs, full-width primary button, full-width secondary button below, informational banner with icon and link

### Comparison table
- Anatomy: White card containing provider columns with logos, recipient amounts, exchange rates, markups, fees, and totals
- Surface: canvas background
- Shape: 1.875rem border radius
- Spacing: 2rem top padding, 2.5rem horizontal padding, generous row spacing
- Composition: Grid layout with Wise column highlighted in action-primary background, competitor columns in white
- Typography: body-small for labels, body for values, accent-warm for negative competitor values
- Variants: Compact row labels on left, provider columns evenly distributed

### FAQ accordion
- Anatomy: Stacked items with question text, expand/collapse icon, and expandable answer area
- Surface: Transparent background, border-light top borders between items
- Typography: heading-medium for questions, body for answers
- Shape: Perfectly circular icon containers (50% radius) with 40px diameter
- Spacing: 1.25rem vertical padding per item, answer text with top margin
- Composition: Full-width within content container, centered section heading above
- States: Collapsed state shows plus icon in light circle; expanded state shows X icon in action-primary circle

### Feature list item
- Anatomy: Circular icon container, bold heading, description paragraph
- Surface: Icon container has canvas background with border outline
- Shape: Circle icon container (50% radius), approximately 48px diameter
- Typography: heading-medium for title, body for description
- Spacing: 1.5rem vertical gap between items, icon container margin-right for text gutter
- Composition: Horizontal arrangement with icon left, text stack right; vertical stacking for multiple items

### Navigation bar
- Anatomy: Logo left, primary links center-left, utility links right, CTA button far right
- Surface: Transparent or surface-dark background depending on section
- Typography: navigation token for links, label token for CTA
- Shape: Pill-shaped active indicator for current section, pill-shaped CTA button
- Spacing: Tight horizontal link spacing with 0.5rem padding, 1rem gaps between groups
- Composition: Full-width with contained internal layout

## Responsive behavior

The system maintains its core personality across breakpoints through proportional scaling and strategic reflowing. Hero display type scales down to section-display size on smaller viewports, preserving the heavy weight and tight leading that defines the brand voice. The two-column feature layout stacks to single-column, with the media panel moving above or below text content.

The converter card remains centered but expands to near-full-width on narrow screens, with internal elements stacking vertically. Currency selectors and amount inputs may shift from horizontal arrangement to stacked. Comparison tables likely transform to horizontal scroll or accordion presentation on mobile, preserving the Wise highlight column while managing limited width.

Navigation collapses to a hamburger menu on smaller screens, with the pill-shaped CTA potentially becoming a full-width fixed button. FAQ accordions maintain their full-width presentation with touch-optimized tap targets for the expand/collapse circles.

## Practical implementation guidance

### Preserve
- The stark contrast between dark green heroes and bright lime accents; this pairing is the system's signature
- Wise Sans exclusively for display headlines above 4rem; never use it for body text or UI labels
- Pill-shaped buttons with generous horizontal padding; the 9999px radius is intentional and distinctive
- Circular icon containers with thin borders for feature lists and toggle states
- The centered, contained layout model with substantial vertical section spacing

### Avoid
- Using Wise Sans at small sizes or for functional text; it loses legibility and dilutes brand impact
- Replacing the lime green with generic success greens; the specific saturation and yellow undertone matter
- Sharp corners on primary components; the rounded language is consistent across all surfaces
- Cluttering comparison tables with visible grid borders; rely on spacing and alignment instead
- Using the dark green background without sufficient lime or white contrast elements

### Recommended build order
1. Establish the type hierarchy with Inter and Wise Sans loaded, implementing the display and body scales
2. Build the dark hero section with surface-dark background and action-primary headlines
3. Implement the converter card component with its rounded container, input fields, and stacked buttons
4. Create the pill button system with primary and secondary variants
5. Add the FAQ accordion with circular toggle states and border separators
6. Build the comparison table with highlighted Wise column
7. Implement the feature list with circular icon containers
8. Add navigation with pill-shaped active states and CTA

### Accessibility
- Ensure action-primary text on lime backgrounds meets contrast ratios; the dark green text (#0D1F00) on lime (#9FE870) should be verified
- Provide focus indicators that maintain the rounded shape language
- Use semantic heading hierarchy despite the visual weight of Wise Sans; h1 for hero, h2 for sections
- Ensure FAQ accordion toggles are keyboard accessible with clear expanded/collapsed state announcements
- Consider a reduced-motion variant for the converter card and comparison animations
- Verify that dark hero sections with lime text maintain sufficient contrast for large display type

## Scope note

This guide covers the marketing and conversion surfaces of wise.com, including the Currency Converter page, feature sections, and comparison tools. It does not include the authenticated account dashboard, transfer flow screens, mobile application interfaces, or the full set of regional homepage variations. Motion specifications, loading states, and form validation patterns are not documented. Measurements are practical adaptation targets.

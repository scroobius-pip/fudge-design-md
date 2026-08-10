# How tradingview.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/tradingview.com-design)

Last updated: 2026-08-10

## Captured pages

[![Economic Calendar page showing light-themed data table with country flags, time stamps, and forecast columns under a clean white header with pill-shaped category filters.](https://pin.fontofweb.com/9494?format=jpg)](https://design.withfudge.com/share/pin-9494)

[Economic Calendar page showing light-themed data table with country flags, time stamps, and forecast columns under a clean white header with pill-shaped category filters.](https://design.withfudge.com/share/pin-9494)

[![Pricing page with dark hero background featuring aurora imagery, large Swiss-type display headline, four-column pricing grid with gradient-accented cards, and monthly-annual](https://pin.fontofweb.com/9493?format=jpg)](https://design.withfudge.com/share/pin-9493)

[Pricing page with dark hero background featuring aurora imagery, large Swiss-type display headline, four-column pricing grid with gradient-accented cards, and monthly-annual](https://design.withfudge.com/share/pin-9493)

## Overview

TradingView's design system operates across two distinct modes: a light, data-dense interface for financial tools and calendars, and a dark, cinematic presentation for marketing and subscription pages. The light mode prioritizes rapid scanning of tabular information with high-contrast neutrals, subtle borders, and compact typography. The dark mode leverages deep black backgrounds, aurora-like gradient imagery, and large Swiss-style display type to create emotional impact for conversion-oriented pages. Both modes share a consistent structural language of rounded panels, generous horizontal gutters, and a clear hierarchy from navigation through content to calls-to-action. The system balances the functional demands of financial data display with the persuasive needs of subscription marketing through disciplined color restraint and typographic contrast.

## Colors

The color system is built around two complete palettes—light and dark—unified by a single accent blue and shared semantic roles.

| token | value | use |
|---|---|---|
| ink | #0F0F0F | Primary text on light backgrounds, dark mode surface |
| ink-secondary | #2E2E2E | Secondary text, dark mode elevated surfaces |
| ink-tertiary | #4A4A4A | Tertiary text, muted labels |
| muted-ink | #707070 | Timestamps, metadata, disabled states |
| muted-ink-light | #8C8C8C | Placeholder text, subtle hints |
| canvas | #FFFFFF | Primary light background, dark mode text on buttons |
| surface | #F2F2F2 | Light mode card backgrounds, table alternates |
| surface-elevated | #EBEBEB | Hover states, active row backgrounds |
| border | #DBDBDB | Primary dividers, table rules, card borders |
| border-light | #EBEBEB | Subtle separators, hairline borders |
| action | #5B9CF6 | Links, active states, primary buttons |
| negative | #F23645 | Loss indicators, delete actions, alert badges |
| dark-canvas | #000000 | Dark mode primary background |
| dark-surface | #0F0F0F | Dark mode cards, panels |
| dark-surface-elevated | #2E2E2E | Dark mode hover, focused states |
| dark-border | #2E2E2E | Dark mode dividers |
| dark-ink | #FFFFFF | Primary text on dark backgrounds |
| dark-ink-secondary | #DBDBDB | Secondary text on dark backgrounds |
| dark-ink-tertiary | #8C8C8C | Muted text on dark backgrounds |

The light mode establishes trust through clinical neutrality: near-black text on pure white with gray intermediates for information hierarchy. The dark mode inverts this relationship for dramatic effect, using pure black as canvas and reserving white for primary headlines and pricing. The action blue (#5B9CF6) appears consistently across both modes, often extending into a gradient for primary calls-to-action on dark surfaces. The negative red (#F23645) serves exclusively for financial loss indication and alert states, never as a brand accent.

## Typography

The system employs two type families: Font (Copyright C 2018 Swiss Typefaces Sarl All Rights Reserved) for display and marketing headlines, and Applesystem for all interface text.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Font | 5rem | 600 | 1 | -0.02em | Dark mode page headlines |
| section-display | Font | 3rem | 600 | 1.17 | -0.02em | Section headings, pricing hero |
| price-display | Font | 2rem | 600 | 1.17 | normal | Pricing amounts, large numbers |
| body-large | Applesystem | 1.25rem | 400 | 1.5 | normal | Lead paragraphs, descriptions |
| body | Applesystem | 0.875rem | 400 | 1.29 | normal | Primary interface text, table data |
| body-small | Applesystem | 0.75rem | 400 | 1.33 | normal | Timestamps, metadata, captions |
| label | Applesystem | 0.875rem | 600 | 1.29 | normal | Column headers, emphasized data |
| navigation | Applesystem | 1rem | 500 | 1.5 | normal | Top-level navigation items |

Font, credited to Swiss Typefaces, carries the brand voice in marketing contexts with its geometric precision and tight negative tracking. Applesystem handles all functional text at 14px and 16px sizes with weights from 400 to 600. Line heights remain compact (1.29 for body) to support dense data layouts, while marketing body text relaxes to 1.5 for readability. Verify licensing for these families before production use.

## Layout

The layout system uses a consistent page gutter of 100px (6.25rem) on desktop, creating generous breathing room that frames content without excessive width. Content areas center within this gutter with max-width constraints that vary by page type.

The header spans full width with internal padding matching the page gutter. Navigation items align left of center, with utility actions (language, account, primary CTA) grouped at the right edge. Below the header, page content follows one of two patterns: full-bleed sections for dark marketing pages, or contained card-and-table layouts for light data pages.

On the Economic Calendar, the layout stacks vertically: page title and controls, horizontal date selector with individual day cards, category filter pills, then the main data table. The table uses a complex grid with time, country flag, event name, and forecast columns, with expandable rows that indent child events under parent time slots.

The Pricing page uses a hero section with asymmetric composition: large headline and subhead left-aligned, with a floating summary card offset to the right. Below, a full-width section with aurora background image centers the plan comparison. Four pricing cards sit in a grid with equal widths, each containing plan name, price, CTA button, and feature list with checkmark indicators.

Spacing between major sections uses 48px to 64px (3rem to 4rem). Internal component padding ranges from 12px to 32px depending on density needs. Cards and panels use 12px to 24px border radius, with pills and chips at full 9999px for categorical items.

## Visual language

The visual language shifts dramatically between functional and marketing contexts while maintaining structural consistency.

In light mode, the aesthetic is clinical and information-dense. White cards float on slightly warmer white backgrounds (#F2F2F2), separated by 1px borders in #DBDBDB. Country flags and small colored dots provide the only chromatic relief in data tables. Red text (#F23645) indicates negative values and pending states. The date selector uses subtle hover states with background shifts to #EBEBEB.

In dark mode, the aesthetic becomes cinematic. Pure black backgrounds support full-bleed aurora photography with blue and purple light streaks. A subtle gradient overlay (linear-gradient at 130deg from rgba(255,255,255,0.4) to rgba(255,255,255,0.12)) adds depth to card surfaces without obscuring imagery. Typography inverts to white, with size and weight creating hierarchy rather than color variation.

The gradient accent appears exclusively on primary action buttons and as a subtle border treatment on featured pricing cards. This creates a clear signal hierarchy: gradient elements are the most important interactive targets on the page.

Iconography uses simple line icons at 16px to 20px, matching text color at 60% opacity for inactive states and full opacity for active. Small circular indicators in red, green, or gray communicate status without text.

## Components

### Header navigation

- **Anatomy**: Logo left, search field with keyboard shortcut hint, primary navigation links (Products, Community, Markets, Brokers, More), utility group (language selector, account icon, primary CTA button)
- **Surface**: Transparent on light pages, dark-ink text; transparent on dark pages, dark-ink text with inverted logo
- **Typography**: `{typography.navigation}` for links, `{typography.body}` for search placeholder
- **Shape**: Full-width bar, no border or shadow
- **Spacing**: 16px vertical padding, 100px horizontal gutters
- **Composition**: Flex row with space-between, navigation links centered-left, utilities right-aligned

### Primary button

- **Anatomy**: Text label with optional icon, full gradient background on dark mode, solid fill on light mode
- **Surface**: Light mode: #0F0F0F background, #FFFFFF text; Dark mode: gradient background, #FFFFFF text
- **Typography**: `{typography.navigation}` weight 500
- **Shape**: 8px radius on standard, 17px radius on large promotional variant
- **Spacing**: 0px 23px padding on standard, 0px 15px on compact
- **Variants**: Standard (dark fill), Gradient (dark mode primary), Outline (transparent with border)

### Category filter pills

- **Anatomy**: Text label, optional close icon, grouped horizontally with 8px gaps
- **Surface**: Active: #0F0F0F background, #FFFFFF text; Inactive: transparent, #0F0F0F text with #DBDBDB border
- **Typography**: `{typography.body}`
- **Shape**: 9999px full pill radius
- **Spacing**: 6px 12px padding
- **Composition**: Horizontal scroll container on narrow viewports, inline-flex on desktop

### Data table row

- **Anatomy**: Time cell, country flag with code, event name with expand chevron, forecast/prior value columns, optional impact indicator
- **Surface**: #FFFFFF background, #DBDBDB top border; expanded children indented with left margin
- **Typography**: `{typography.body}` for values, `{typography.body-small}` for timestamps, `{typography.label}` weight 600 for emphasized data
- **Shape**: No row radius, full-width with internal padding
- **Spacing**: 12px vertical padding, 16px left indent per hierarchy level
- **States**: Hover shifts background to #F2F2F2; expanded reveals child rows with 8px left margin

### Pricing card

- **Anatomy**: Plan name, price with period suffix, billing note, CTA button, feature list with checkmarks and progress-bar indicators
- **Surface**: #0F0F0F background on dark page, subtle gradient border on featured plan; #FFFFFF on light page
- **Typography**: Plan name `{typography.label}`, price `{typography.price-display}`, features `{typography.body}`
- **Shape**: 24px radius, optional 2px gradient border
- **Spacing**: 48px 32px padding, 24px gap between price and CTA, 16px gap between features
- **Composition**: Vertical stack, features left-aligned with icon prefix

### Date selector

- **Anatomy**: Previous/next arrows, date range text, individual day cards with event counts
- **Surface**: Cards on #FFFFFF with #DBDBDB border; active day with #EBEBEB background and underline accent
- **Typography**: `{typography.body}` for day names, `{typography.body-small}` for counts
- **Shape**: 12px radius on cards
- **Spacing**: 12px gap between cards, 10px internal padding

## Responsive behavior

The design targets desktop as the primary viewport for complex data interactions. The 100px page gutter scales down to 20px-40px on narrower screens. The pricing grid collapses from four columns to two, then to a single stacked column with horizontal scroll for plan comparison. The economic calendar table hides less critical columns (forecast, prior) on narrow viewports, maintaining time, country, and event name as the persistent core.

Navigation collapses to a hamburger menu below approximately 1024px, with search becoming an icon-only trigger. Date selector cards scroll horizontally when container width is insufficient for all seven days. Category filter pills maintain horizontal scroll with fade indicators at edges.

Touch targets maintain minimum 44px height for all interactive elements. Table rows expand via tap on the chevron area rather than full-row tap to prevent accidental navigation.

## Practical implementation guidance

### Preserve
- The strict separation of light data surfaces from dark marketing surfaces; do not mix modes on a single page
- Font for display headlines only, never for body text or UI labels
- The 100px desktop gutter as a brand-defining spatial rhythm
- Gradient accents exclusively for primary CTAs on dark backgrounds
- Red (#F23645) reserved for negative financial indicators and alerts

### Avoid
- Adding shadows to light mode cards; the system uses borders and background shifts exclusively
- Using the gradient on light backgrounds where contrast against white fails
- Shrinking body text below 14px for data-dense views; use column hiding instead
- Applying border radius to table rows; keep rows rectangular with internal padding
- Mixing dark mode cards on light mode pages without full section inversion

### Recommended build order
1. Establish the two complete color palettes with semantic token mapping
2. Implement Applesystem at 14px/16px with 400/500/600 weights
3. Add Font with @font-face, restricted to display tokens
4. Build the header with transparent background and gutter-based padding
5. Create the button system with three variants: solid, gradient, outline
6. Implement the data table with expandable row pattern and indent hierarchy
7. Add the pricing card with feature list and progress-bar indicators
8. Apply dark mode section with aurora background and gradient overlays

### Accessibility
- Maintain 4.5:1 minimum contrast for all body text; the #0F0F0F on #FFFFFF pairing exceeds 15:1
- Ensure gradient buttons have sufficient perceived contrast; add subtle dark overlay behind text if needed
- Provide aria-expanded states for expandable table rows
- Use semantic table markup with proper scope attributes for economic data
- Include visible focus indicators that override the subtle hover states

## Scope note

This guide covers the desktop economic calendar and pricing subscription pages. Mobile layouts, charting interfaces, trading panels, and real-time data widgets are not represented in the supplied material. Motion design, loading states, and form validation patterns are not documented. Verify licensing for Applesystem and Font-Copyright C 2018 Swiss Typefaces Sarl All Rights Reserved before production use.

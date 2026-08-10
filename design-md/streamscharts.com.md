# How streamscharts.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/streamscharts.com-design)

Last updated: 2026-08-10

## Captured pages

[![Pricing page with dark platform cards, blue gradient background, and tiered subscription plans with discount badges](https://pin.fontofweb.com/4661?format=jpg)](https://design.withfudge.com/share/pin-4661)

[Pricing page with dark platform cards, blue gradient background, and tiered subscription plans with discount badges](https://design.withfudge.com/share/pin-4661)

[![News listing page with featured article hero, category filter chips, and grid of article cards with thumbnails](https://pin.fontofweb.com/4660?format=jpg)](https://design.withfudge.com/share/pin-4660)

[News listing page with featured article hero, category filter chips, and grid of article cards with thumbnails](https://design.withfudge.com/share/pin-4660)

[![Footer and CTA section with dark theme, partner logos, multi-column links, and contact form](https://pin.fontofweb.com/4659?format=jpg)](https://design.withfudge.com/share/pin-4659)

[Footer and CTA section with dark theme, partner logos, multi-column links, and contact form](https://design.withfudge.com/share/pin-4659)

[![Social proof section with embedded tweet cards showing influencer mentions on dark background](https://pin.fontofweb.com/4658?format=jpg)](https://design.withfudge.com/share/pin-4658)

[Social proof section with embedded tweet cards showing influencer mentions on dark background](https://design.withfudge.com/share/pin-4658)

## Overview

Streams Charts presents a dark-mode analytics platform built for the live-streaming ecosystem. The visual system prioritizes data density and scannability through a near-black canvas, layered surface elevations, and electric blue accents that guide attention to actions and key metrics. The interface avoids decorative flourishes in favor of functional clarity: cards organize platform data, pills and chips filter content, and rounded buttons invite conversion. The overall impression is technical and authoritative, suited to professionals who need streaming insights at a glance. Typography is set in By Mark Simonson-2021 across all weights, giving the system a neutral, modern voice that recedes behind the data. The design balances information-heavy screens with generous whitespace in marketing sections, creating rhythm between dense dashboards and persuasive landing content.

## Colors

The palette is built on a dark-mode foundation with a single vibrant accent. Surfaces progress from deep black through elevated navy-gray, while text maintains high contrast through pure white and desaturated slate. The blue accent appears sparingly to mark interactive elements, selected states, and calls to action.

| token | value | use |
|---|---|---|
| canvas | `#08080c` | Page background, deepest layer |
| surface | `#111118` | Primary cards, panels, and content containers |
| surface-elevated | `#1a1a24` | Hover states, selected platform cards, elevated panels |
| action | `#3b82f6` | Primary buttons, active filters, links, selected indicators |
| action-hover | `#2563eb` | Button hover states, link hover |
| ink | `#f8fafc` | Headings, primary text, icons on dark surfaces |
| muted-ink | `#94a3b8` | Secondary text, descriptions, placeholders, inactive states |
| border | `#27273a` | Card borders, dividers, subtle separators |
| success | `#22c55e` | Positive metrics, confirmation states |
| warning | `#eab308` | Alerts, discount badges, promotional highlights |

The interface relies on photographic and platform-brand color from external sources—game artwork, streamer thumbnails, and platform logos—against the neutral dark system. This allows colorful content to remain legible and vibrant without competing with the UI. The pricing page introduces a blue gradient wash behind the main panel, creating depth without departing from the core palette.

## Typography

All text is set in By Mark Simonson-2021, a typeface by Mark Simonson of Mark Simonson Studio Llc. The family supports Regular, Medium, Semibold, and Bold weights, enabling clear hierarchy without introducing additional typefaces. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | By Mark Simonson-2021 | 3rem | 700 | 1.1 | -0.02em | Page titles, major section headlines |
| section-display | By Mark Simonson-2021 | 2rem | 600 | 1.2 | -0.01em | Section headers, card group titles |
| body | By Mark Simonson-2021 | 1rem | 400 | 1.5 | 0 | Paragraphs, descriptions, form labels |
| body-small | By Mark Simonson-2021 | 0.875rem | 400 | 1.5 | 0 | Card content, metadata, captions |
| label | By Mark Simonson-2021 | 0.75rem | 600 | 1.25 | 0.02em | Buttons, tags, category labels, badges |
| navigation | By Mark Simonson-2021 | 0.875rem | 500 | 1.25 | 0 | Top-level navigation, breadcrumbs |

Display sizes use tight negative tracking for a compact, engineered feel appropriate to data products. Body text maintains neutral tracking for readability at small sizes. Labels and buttons are set in all-uppercase or sentence case depending on context, with the label token favoring a slightly wider tracking for optical balance at small sizes.

## Layout

The layout system is built on a fluid container with consistent internal padding. Major sections stack vertically with generous separation, while content within sections uses grid-based card arrangements.

The page canvas fills the viewport with `canvas` color. Content containers center with maximum widths appropriate to their purpose: reading-focused sections narrow to comfortable line lengths, while data grids and pricing tables expand to use available space. Horizontal padding scales with viewport but maintains a minimum of `1.5rem` on mobile and `3rem` on desktop.

Card grids use responsive columns: article listings appear in four-column arrangements on large screens, pricing cards in four equal columns, and platform selectors in flexible grids that adapt to item count. Gap spacing between cards is consistently `1.5rem`.

The pricing page demonstrates a split-panel layout: the main configuration area occupies roughly two-thirds width, while a sticky or adjacent summary panel occupies the remainder. This creates a workspace-and-preview pattern common to configuration interfaces.

Vertical rhythm follows a section spacing of `5rem` between major content blocks, with `2.5rem` between related subsections. Internal card padding is `1.5rem` on all sides, with tighter `1rem` padding for compact list items and chips.

## Visual language

The visual language communicates precision and authority through restrained geometry and consistent elevation. Surfaces are flat with single-pixel borders rather than shadows, maintaining a clean technical aesthetic. The only depth cue is the subtle gradient wash on the pricing page background, which frames the central workspace.

Icons appear as simple glyphs or platform-native logos, never ornate. The platform selector cards use small circular platform icons with plus/minus affordances, treating each service as a toggleable module. Selected states gain a brighter border and slightly elevated background.

Photography and thumbnails are presented without border radius when full-bleed within cards, or with slight rounding when standalone. The news page shows article thumbnails as rectangular crops with `0.5rem` radius, preserving image content while maintaining the card aesthetic.

Interactive elements follow consistent patterns: buttons are fully rounded pills, chips are slightly rounded rectangles, and cards have moderate corner radius. This hierarchy of roundness—pill for primary action, rounded rectangle for secondary, panel for container—creates intuitive affordance without explicit labels.

## Components

### Platform Selector Card
An interactive toggle for adding streaming platforms to a subscription. Each card shows a platform icon, name, and price, with a plus icon for addition and a checkmark for selected state.

- **Anatomy**: Icon (24px), platform name, price, action indicator
- **Surface**: `surface-elevated` background, `border` border, transitions to brighter border on selection
- **Typography**: `body-small` for name and price
- **Shape**: `rounded.card` with `1px` border
- **Spacing**: `1rem` internal padding, `0.75rem` gap between icon and text
- **Composition**: Horizontal flex layout with action icon at trailing edge
- **Variants**: Default (plus icon), selected (checkmark, brighter border, slightly elevated background)

### Pricing Tier Card
A vertical plan card showing commitment period, monthly rate, total calculation, and purchase button.

- **Anatomy**: Period badge, price display, price-per-month label, strikethrough original total, discounted total, CTA button
- **Surface**: `surface` background, `border` border; featured tier uses `ink` background with dark text for contrast
- **Typography**: `hero-display` for price numerals, `body-small` for period and total, `label` for button
- **Shape**: `rounded.panel`
- **Spacing**: `1.5rem` padding, `1rem` vertical gap between elements
- **Composition**: Centered text stack with button at bottom
- **Variants**: Standard (dark), featured (light background with promotional badge)

### Article Card
A content preview with thumbnail, category tags, headline, excerpt, and metadata.

- **Anatomy**: Thumbnail image, category tag(s), headline, excerpt, date, read time
- **Surface**: `surface` background, no border on image area, `1px` border optional on card edge
- **Typography**: `section-display` for headline, `body-small` for excerpt and metadata, `label` for category tags
- **Shape**: `rounded.panel` on card, `0` radius on thumbnail
- **Spacing**: `1.5rem` padding on text area, `1rem` gap between elements
- **Composition**: Vertical stack with image top, text below; featured variant uses larger horizontal layout

### Filter Chip
A compact toggle for filtering content by category, platform, or tag.

- **Anatomy**: Label text, optional count badge, optional close icon
- **Surface**: `surface-elevated` background, transparent border
- **Typography**: `body-small`
- **Shape**: `rounded.chip`
- **Spacing**: `0.5rem` vertical, `1rem` horizontal padding
- **Composition**: Inline flex with adjacent chips wrapping
- **Variants**: Default, active (action background or border), dismissible (with close icon)

### CTA Banner
A prominent conversion section with headline, description, and action button.

- **Anatomy**: Headline, supporting text, primary button, optional secondary button
- **Surface**: `surface-elevated` with `action` border, or gradient wash on pricing page
- **Typography**: `section-display` for headline, `body` for description
- **Shape**: `rounded.panel`
- **Spacing**: `2.5rem` padding
- **Composition**: Horizontal flex with text left and button right, or vertical stack on narrow viewports

### Footer
A comprehensive site footer with navigation columns, social links, contact form, and legal bar.

- **Anatomy**: Logo lockup, link columns grouped by audience, social icon row, email and message form, legal text, partner logos
- **Surface**: `canvas` background, `border` top separator
- **Typography**: `body-small` for links, `label` for column headers, `body` for form inputs
- **Shape**: Full-width, no radius
- **Spacing**: `3rem` vertical padding, `2rem` gap between major zones
- **Composition**: Multi-column grid collapsing to single column on narrow viewports

## Responsive behavior

The design adapts through fluid grids and selective reflow rather than dramatic breakpoint changes. Card grids reduce column count progressively: four columns become two, then one as viewport narrows. The pricing page's split-panel layout stacks vertically on smaller screens, with the summary panel moving below the configuration area.

Navigation collapses to a compact form, though the supplied images do not show mobile navigation patterns. Filter rows on the news page become horizontally scrollable when chip counts exceed viewport width, preserving single-tap access without wrapping into excessive vertical space.

Typography scales down modestly: hero display reduces to `2rem` on narrow viewports, maintaining hierarchy without overwhelming small screens. Touch targets maintain minimum `44px` height for all interactive elements.

## Practical implementation guidance

### Preserve
- The dark canvas with layered surface elevations; this is the core identity
- By Mark Simonson-2021 at all weights for typographic consistency
- Pill-shaped primary buttons with full rounding
- Platform iconography in circular containers with consistent sizing
- The blue accent as the sole vibrant color against neutral surfaces

### Avoid
- Light backgrounds for primary content areas; the dark theme is integral
- Multiple accent colors competing for attention; reserve blue for actions
- Heavy shadows for elevation; rely on borders and background shifts
- Decorative gradients except in specific marketing contexts
- Borders thicker than `1px` on cards and containers

### Recommended Build Order
1. Establish the dark canvas and surface color tokens
2. Implement By Mark Simonson-2021 with the full type scale
3. Build the card component with border and padding variants
4. Create button components (primary pill, secondary outline)
5. Implement platform selector with toggle states
6. Build pricing card with featured variant
7. Add article card for content listings
8. Compose page layouts with section spacing and grid systems
9. Add filter chips and navigation patterns
10. Implement footer with form and link columns

### Accessibility
- Ensure all text on `surface` backgrounds meets WCAG AA contrast (the `ink` on `surface` combination exceeds requirements)
- Add visible focus indicators to all interactive cards, not just buttons
- Provide text alternatives for platform icons and thumbnail images
- Maintain keyboard operability for platform selector toggles
- Use `aria-pressed` or similar for selected states in filter chips and platform cards
- Consider a reduced-motion preference for any animated transitions

## Scope note

This guide covers the marketing, pricing, and news surfaces of Streams Charts as visible in the supplied images. Dashboard analytics views, account management flows, and mobile-specific layouts are not represented. Measurements are practical adaptation targets. Platform-specific brand colors from game and service logos are excluded from the core token set.

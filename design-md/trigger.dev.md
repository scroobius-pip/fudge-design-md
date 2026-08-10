# How trigger.dev is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/trigger.dev-design)

Last updated: 2026-08-10

## Captured pages

[![Blog article page with dark theme, roadmap timeline graphic with blue accent ring, and author attribution block](https://pin.fontofweb.com/1512?format=jpg)](https://design.withfudge.com/share/pin-1512)

[Blog article page with dark theme, roadmap timeline graphic with blue accent ring, and author attribution block](https://design.withfudge.com/share/pin-1512)

[![Blog card featuring Trigger.dev v4 beta announcement with gradient hero image and category metadata](https://pin.fontofweb.com/1511?format=jpg)](https://design.withfudge.com/share/pin-1511)

[Blog card featuring Trigger.dev v4 beta announcement with gradient hero image and category metadata](https://design.withfudge.com/share/pin-1511)

[![Blog grid layout showing six article cards with varied hero imagery including Docker, Comp AI, and Cursor integrations](https://pin.fontofweb.com/1510?format=jpg)](https://design.withfudge.com/share/pin-1510)

[Blog grid layout showing six article cards with varied hero imagery including Docker, Comp AI, and Cursor integrations](https://design.withfudge.com/share/pin-1510)

[![Blog index page with filter tabs, featured roadmap article, and three-column card grid with product screenshots](https://pin.fontofweb.com/1509?format=jpg)](https://design.withfudge.com/share/pin-1509)

[Blog index page with filter tabs, featured roadmap article, and three-column card grid with product screenshots](https://design.withfudge.com/share/pin-1509)

## Overview

Trigger.dev presents a developer-centric visual system built around a near-black canvas with carefully modulated surface layers. The design prioritizes readability of technical content through high-contrast typography and restrained color usage. Electric blue serves as the singular accent, appearing in interactive states, timeline graphics, and gradient compositions. The overall impression is one of precision engineering—clean lines, generous whitespace, and content hierarchy that guides readers through complex product documentation and blog narratives. The system balances aesthetic sophistication with functional clarity, using dark surfaces to reduce eye strain during extended reading sessions while maintaining sufficient luminance contrast for accessibility.

## Colors

The color system operates on a dark-mode-first principle with four semantic layers plus one accent. All values derive from the visible interface.

| token | value | use |
|---|---|---|
| canvas | #0a0a0a | Page background, deepest layer |
| surface | #141414 | Card backgrounds, content wells |
| surface-elevated | #1a1a1a | Featured content, hover states |
| ink | #f5f5f5 | Primary headings, body text |
| muted-ink | #a3a3a3 | Secondary text, metadata, captions |
| action | #3b82f6 | Interactive elements, timeline rings, links |
| action-hover | #2563eb | Button hover, link active states |
| border | #262626 | Card outlines, dividers |
| border-subtle | #1f1f1f | Invisible boundaries, ghost states |

The canvas-to-surface progression creates subtle depth without harsh shadows. The ink value is warm-tinted rather than pure white, reducing glare against the dark ground. Muted-ink carries enough luminance for comfortable reading at small sizes. The action blue appears most prominently in the roadmap timeline graphic as a hand-drawn circular ring, establishing it as the brand's energetic signature. Border colors are desaturated to avoid visual noise in dense layouts.

## Typography

The system uses a single type family, Satoshi, designed by Deni Anggara and distributed by Indian Type Foundry. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Satoshi | 3rem | 700 | 1.1 | -0.02em | Page titles, article headlines |
| section-display | Satoshi | 2rem | 700 | 1.2 | -0.01em | Section headers, card titles |
| body | Satoshi | 1rem | 400 | 1.6 | 0 | Paragraphs, descriptions |
| body-small | Satoshi | 0.875rem | 400 | 1.5 | 0 | Card excerpts, metadata |
| label | Satoshi | 0.75rem | 500 | 1.4 | 0.01em | Tags, dates, categories |
| navigation | Satoshi | 0.875rem | 500 | 1 | 0 | Menu items, filter tabs |

Type sizes follow a 4px grid with display sizes at 48px and 32px, body at 16px, and descending sizes at 14px and 12px. The tight leading on display sizes (1.1-1.2) creates compact headline blocks, while body text receives generous 1.6 line height for extended reading. Negative tracking on headlines prevents looseness at large sizes. Weight 700 is reserved for display and emphasis; 500 handles navigation and labels; 400 carries body content.

## Layout

The page structure employs a centered content column with responsive margins. Blog index pages use a hybrid layout: a featured article spans the full content width above a three-column grid of standard cards. Article pages split into a main reading column with a narrower sidebar for table-of-contents navigation and social sharing.

Grid configurations include:
- Featured article: single column, full width with horizontal flex layout on desktop (image left, text right)
- Card grid: three columns with equal distribution and 1.5rem gutters
- Article body: maximum readable width approximately 65 characters per line
- Sidebar: fixed narrow column with sticky positioning for in-page navigation

Spacing follows a 4px base unit. Section vertical padding is 5rem, creating clear separation between content groups. Card internal padding is 1.5rem. Content gaps within cards are 1rem between title and excerpt, 0.5rem between metadata elements.

The filter tab bar on blog index pages uses horizontal flex with 0.5rem gaps between pill-shaped buttons, right-aligned opposite the page title.

## Visual language

Imagery plays a central role in the system's visual identity. Blog cards feature hero images with rich gradient backgrounds—deep purples, greens, and blues that complement the dark interface. These gradients often incorporate brand marks or integration partner logos. The gradient style is smooth and radial, creating luminous focal points against dark grounds.

The timeline graphic on the roadmap article uses a distinctive hand-drawn aesthetic: a rough blue circular ring encircles a "SEP" month marker, contrasting with the precise geometry of adjacent square nodes. This introduces organic warmth into an otherwise technical presentation.

Card surfaces are flat with single-pixel borders rather than shadows, maintaining the dark-mode aesthetic without depth illusions. Hover states likely elevate cards through border color shifts or subtle background lightening.

Iconography appears minimal and functional—small partner logos, category indicators, and social sharing icons in muted-ink or white.

## Components

### Blog Card

- **Anatomy**: Hero image (aspect-ratio 16:9), title, excerpt paragraph, metadata row with author avatar and date
- **Surface**: Background {colors.surface}, border 1px solid {colors.border-subtle}, border-radius {rounded.card}
- **Typography**: Title uses {typography.section-display} at 1.25rem adapted size, excerpt uses {typography.body-small}, metadata uses {typography.label} in {colors.muted-ink}
- **Spacing**: Internal padding 1.5rem, 1rem gap between image and text block, 0.75rem gap between title and excerpt
- **Composition**: Vertical stack, image full-bleed to card edges at top
- **Variants**: Featured variant spans full width with horizontal layout; standard variant is vertical in grid

### Filter Tab

- **Anatomy**: Text label within pill-shaped container
- **Surface**: Transparent background, 1px border {colors.border}, border-radius {rounded.pill}
- **Typography**: {typography.label} in {colors.ink}
- **States**: Active state likely uses filled background or border color shift to {colors.action}; inactive shows muted treatment

### Featured Article Block

- **Anatomy**: Large hero image, title, description paragraph, category tag, date
- **Surface**: {colors.surface-elevated} with {colors.border}, larger border-radius
- **Typography**: Title at {typography.hero-display} scaled to 2.5rem, description at {typography.body}
- **Composition**: Horizontal flex on desktop with image occupying 50% width, text content vertically centered

### Timeline Node

- **Anatomy**: Month label within geometric container, active state circled by hand-drawn ring
- **Shape**: Square with rounded corners for inactive nodes; circular ring overlay for active
- **Color**: Ring uses {colors.action} at 2px stroke; inactive borders use {colors.border}

### Author Attribution

- **Anatomy**: Circular avatar image, name, role or publication date
- **Typography**: Name at {typography.body-small} weight 500, role at {typography.label} in {colors.muted-ink}
- **Spacing**: 0.75rem gap between avatar and text block, 0.25rem between name and role

## Responsive behavior

The three-column card grid should collapse to two columns at medium viewports and single column on mobile. Featured article blocks should stack vertically on narrow screens with image preceding text. Sidebar navigation should either collapse to a horizontal scroll or convert to a collapsible drawer on mobile. Filter tabs should wrap to multiple lines rather than truncate. Typography scales down proportionally: hero-display reduces to 2rem on mobile, section-display to 1.5rem. Section vertical padding compresses from 5rem to 3rem on smaller viewports.

## Practical implementation guidance

### Preserve
- The near-black canvas with subtle surface elevation layers
- Single accent color discipline—blue only for interactive and emphasis moments
- High-contrast typography with tight display leading
- Gradient-rich hero imagery with dark, saturated color palettes
- Flat card surfaces with hairline borders instead of shadows

### Avoid
- Introducing additional accent colors that compete with the blue signature
- Using pure white (#ffffff) for text—maintain the warm-tinted ink value
- Adding drop shadows to cards in dark mode; rely on border and surface differentiation
- Exceeding three surface layers (canvas, surface, elevated) to prevent muddy hierarchy
- Light mode implementations without complete color remapping

### Recommended Build Order
1. Establish dark canvas and surface color tokens
2. Implement Satoshi type scale with display and body hierarchies
3. Build card component with image, title, excerpt structure
4. Create grid layout system for three-column responsiveness
5. Add filter tab navigation with active states
6. Implement featured article variant with horizontal layout
7. Polish with timeline graphic and author attribution patterns

### Accessibility
- Ensure body text maintains minimum 4.5:1 contrast ratio against canvas
- Action blue should reach 3:1 against dark surfaces for interactive elements
- Provide focus indicators that do not rely solely on color change
- Respect reduced-motion preferences for any hover transitions
- Timeline graphic should have text equivalent for month labels

## Scope note

This guide covers the blog index and article page surfaces visible in the supplied images. Navigation header, footer, pricing tables, product feature pages, and mobile breakpoints are not represented. Measurements are practical adaptation targets derived from the visible interface. Motion, loading states, and form components fall outside this scope.

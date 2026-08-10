# How refero.design is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/refero.design-design)

Last updated: 2026-08-10

## Captured pages

[![Homepage hero with sidebar navigation, search input, and category links on dark canvas](https://pin.fontofweb.com/9837?format=jpg)](https://design.withfudge.com/share/pin-9837)

[Homepage hero with sidebar navigation, search input, and category links on dark canvas](https://design.withfudge.com/share/pin-9837)

[![Upgrade banner with rounded pill button and search bar with filter chips](https://pin.fontofweb.com/9685?format=jpg)](https://design.withfudge.com/share/pin-9685)

[Upgrade banner with rounded pill button and search bar with filter chips](https://design.withfudge.com/share/pin-9685)

[![Research page with follow-up input and mobile app preview card](https://pin.fontofweb.com/9684?format=jpg)](https://design.withfudge.com/share/pin-9684)

[Research page with follow-up input and mobile app preview card](https://design.withfudge.com/share/pin-9684)

[![Homepage hero with centered display heading and expanded category grid](https://pin.fontofweb.com/9683?format=jpg)](https://design.withfudge.com/share/pin-9683)

[Homepage hero with centered display heading and expanded category grid](https://design.withfudge.com/share/pin-9683)

## Overview

Refero is a design research platform built for the AI era, helping designers, builders, and AI systems discover real product screens, flows, and patterns. The visual system is immediately distinctive: a deep, near-black canvas serves as the stage for elegant serif display typography and a prominent AI search interface. The homepage centers on a large, inviting search input that encourages natural language queries, surrounded by category navigation and example prompts. The overall impression is sophisticated yet approachable—premium without being cold, technical without being sterile.

The design employs a dark-first palette with carefully calibrated elevation layers. Surfaces rise from the canvas through subtle shifts in lightness rather than heavy borders or shadows. Typography creates clear hierarchy through family contrast: a refined serif for emotional impact in headlines, and a precise geometric sans-serif for all functional UI text. The interface feels spacious and breathable, with generous horizontal margins and deliberate vertical rhythm.

## Colors

The color system is built on a dark foundation with restrained accent usage. Every surface exists on a continuum from deep canvas to elevated panels, creating depth through value rather than chroma.

| token | value | use |
|---|---|---|
| canvas | #101216 | Primary page background, deepest layer |
| canvas-elevated | #181A20 | Secondary backgrounds, banner surfaces |
| surface | #1D1F27 | Cards, inputs, elevated containers |
| surface-highlight | #24252B | Hover states, active selections |
| ink | #FFFFFF | Primary text, icons, emphasis |
| ink-muted | #9399AD | Secondary text, descriptions, placeholders |
| ink-dim | #6D768E | Tertiary text, disabled states |
| ink-subtle | #4B546B | Decorative elements, subtle dividers |
| border-subtle | #2F323D | Hairline borders, separators |
| border-highlight | #BABCF3 | Focus rings, active indicators |
| accent-blue | #00AAFF | Links, interactive highlights |
| accent-coral | #FF6154 | Badges, alerts, destructive actions |
| accent-orange | #FF4400 | Strong emphasis, gradient stops |
| action-primary | #FFFFFF | Primary button background |
| action-primary-text | #101216 | Primary button text |
| action-secondary-bg | #1D1F27 | Secondary button background |
| action-secondary-text | #FFFFFF | Secondary button text |
| shadow-glow | #BAC0EF | Subtle ambient glow on elevated surfaces |

The dark palette creates a cinematic quality that makes screenshot previews and image content pop. Elevation is achieved through layered surfaces: canvas at the bottom, canvas-elevated for mid-ground elements like banners, surface for interactive containers like the search bar, and surface-highlight for pressed or selected states. The ink scale provides four distinct text intensities for flexible hierarchy without introducing additional colors. Accent colors appear sparingly—blue for links and interactive elements, coral and orange for attention-grabbing moments like badges or gradient accents.

## Typography

The type system pairs two distinct families for emotional and functional roles. Kalice, a refined serif designed by Margot Lévêque, handles display headlines with elegant curves and moderate contrast. PP Neue Montreal, a geometric sans-serif from Pangram Pangram Foundry designed by Mathieu Desjardins, manages all interface text with clean lines and excellent legibility at small sizes. The platform also loads Satoshi, a variable sans-serif by Deni Anggara via Indian Type Foundry, for use on search and results surfaces. Applesystem and System-Monospace appear in the font stack as system-level fallbacks for native UI rendering and code blocks respectively.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Kalice | 3.125rem | 400 | 1.2 | -0.02em | Homepage headlines, hero statements |
| section-display | Recoleta | 3.375rem | 400 | 1.13 | normal | Section titles, feature headings |
| body | PP Neue Montreal | 1rem | 500 | 1.5 | -0.02em | Primary UI text, navigation, descriptions |
| body-small | PP Neue Montreal | 0.8125rem | 500 | 1.54 | -0.015em | Secondary descriptions, metadata |
| label | PP Neue Montreal | 0.75rem | 500 | 1.33 | -0.02em | Tags, timestamps, fine print |
| navigation | PP Neue Montreal | 1rem | 500 | 1.5 | -0.02em | Sidebar links, category names |
| button | PP Neue Montreal | 1rem | 600 | 1.5 | -0.02em | Button labels, call-to-action text |

Kalice appears at 50px (3.125rem) for hero headlines with tight tracking that gives it a contemporary editorial feel. PP Neue Montreal serves as the workhorse at 16px (1rem) for body text, with a slightly smaller 13px (0.8125rem) variant for secondary information and 12px (0.75rem) for labels. Weights range from 500 (Medium) for most text to 600 (Semibold) for buttons and emphasis. The system maintains consistent negative letter spacing across sizes to preserve the geometric character of PP Neue Montreal.

Verify licensing for Kalice, PP Neue Montreal, Recoleta, and Satoshi before production use. Kalice is by Margot Lévêque. PP Neue Montreal is by Mathieu Desjardins via Pangram Pangram Foundry. Recoleta is by Jorge Cisterna via Latinotype Ltda. Satoshi is by Deni Anggara via Indian Type Foundry.

## Layout

The layout system uses a centered content model with generous horizontal breathing room. The homepage places its primary search interface in the optical center of the viewport, with navigation elements anchored to the periphery.

Page margins are substantial: 96px (6rem) horizontal padding on main containers, with content often further constrained by max-width centers. The search bar and category grid sit within a narrower central column, creating a focused workspace effect. Vertical rhythm uses 28px (1.75rem) as a standard section gap, with larger 80px (5rem) and 90px (5.625rem) spacers for major section breaks.

The sidebar navigation on the homepage uses a fixed or sticky positioning pattern, occupying the left edge with compact link items stacked vertically. Each link includes an icon and text label with comfortable 8px (0.5rem) gaps. The main content area flows independently, allowing the search interface to remain centered regardless of sidebar state.

Grid patterns for category links use multi-column layouts with consistent 16px (1rem) gaps between items. The composition balances density with scannability—enough items to suggest depth, spaced to prevent visual fatigue.

## Visual language

The visual language communicates precision and creative sophistication. Rounded corners are a defining feature: panels use 24px (1.5rem), cards use 18px (1.125rem), and buttons use 12px (0.75rem) radii. Full pill shapes appear for filter chips and certain badges, creating a friendly, approachable character against the dark canvas.

Shadows are extremely subtle, functioning as inner glows rather than drop shadows. The signature shadow is an inset 1px ring in `rgba(186, 192, 239, 0.047)`—barely perceptible but essential for defining surface boundaries without harsh borders. A secondary shadow layer adds slight depth with `rgba(12, 41, 126, 0.09)` for floating elements.

Borders are hairline-thin, typically 0.5px to 1px in `border-subtle` or `border-highlight`. The search bar uses no visible border, relying entirely on the background value difference and subtle inner shadow to define its shape.

Iconography is simple and functional, paired with text labels in navigation and filter chips. The "Research mode" chip uses a sparkle icon to denote AI-powered functionality, with a coral accent color that draws attention without overwhelming.

## Components

### Search bar

The search bar is the central interaction point of the homepage. It presents as a large, rounded panel floating on the canvas.

- **Anatomy**: Container with placeholder text, filter chip row, and submit button
- **Surface**: `surface` background with `shadow-glow` inset ring
- **Typography**: Placeholder uses `ink-muted` at body size; active input uses `ink`
- **Shape**: `rounded.panel` (24px) with full width up to max-width constraint
- **Spacing**: 20px (1.25rem) internal padding, 15px (0.9375rem) vertical padding
- **Composition**: Filter chips arranged horizontally with 8px (0.5rem) gaps; submit button as circular icon at right edge

### Filter chip

Compact toggle buttons for refining search scope.

- **Anatomy**: Icon + text label, optionally with active state indicator
- **Surface**: `action-secondary-bg` background, transparent when inactive
- **Typography**: `typography.body-small` in `action-secondary-text`
- **Shape**: `rounded.chip` (12px) or full `rounded.pill`
- **Spacing**: 10px (0.625rem) vertical, 16px (1rem) horizontal padding; 8px (0.5rem) internal gap
- **Variants**: Active state uses `accent-coral` icon and slightly elevated background

### Upgrade banner

A persistent notification bar for plan limitations.

- **Anatomy**: Text block with headline and description, plus primary action button
- **Surface**: `canvas-elevated` background
- **Typography**: Headline uses `typography.body` at 600 weight; description uses `typography.body-small` in `ink-muted`
- **Shape**: `rounded.card` (18px)
- **Spacing**: 12px (0.75rem) to 14px (0.875rem) padding; button aligned to right
- **Composition**: Horizontal flex with space-between, button as prominent pill

### Category link grid

Organized lists of searchable topics with icon prefixes.

- **Anatomy**: Icon + text label, arranged in multi-column grid
- **Typography**: `typography.navigation` in `ink`
- **Spacing**: 16px (1rem) gap between items; 8px (0.5rem) icon-text gap
- **Composition**: Left-aligned category tabs with right-aligned link columns; 45px (2.8125rem) gap between major groupings

### Sidebar navigation

Vertical stack of primary navigation destinations.

- **Anatomy**: Icon + text label, with optional badge
- **Typography**: `typography.navigation` in `ink`
- **Spacing**: 8px (0.5rem) vertical padding per item; 8px (0.5rem) icon-text gap
- **Composition**: Fixed left position; items stack with consistent 8px gaps

## Responsive behavior

The design appears optimized for desktop viewing with its generous margins and centered search interface. At narrower viewports, the sidebar navigation should collapse to a horizontal top bar or hamburger menu, and the category grid should reflow from multiple columns to a single scrollable list. The search bar should maintain its central prominence but expand to full width minus safe margins.

The large display typography scales down proportionally: hero-display should reduce to approximately 2rem on tablet and 1.5rem on mobile to maintain line-length readability. Section margins compress from 96px to 24px on narrow screens.

## Practical implementation guidance

### Preserve
- The dark canvas as the default and primary viewing mode
- The serif/sans-serif pairing for display and body text
- Extremely subtle shadows and borders—elevation should be felt, not seen
- Generous horizontal margins and centered content composition
- Rounded corners at all scales, from chips to panels
- The search bar as the dominant visual and interactive element

### Avoid
- Light mode as the default experience
- Heavy drop shadows or pronounced borders
- Additional accent colors beyond the established blue-coral-orange trio
- Tight line spacing on display text
- Removing the icon from navigation and filter items

### Recommended build order
1. Establish the dark canvas and surface elevation layers
2. Implement PP Neue Montreal as the primary typeface with size/weight hierarchy
3. Add Kalice for hero display text
4. Build the search bar component with inner shadow and filter chips
5. Create the sidebar navigation and category grid
6. Add the upgrade banner and other secondary components
7. Polish with micro-interactions and focus states

### Accessibility
- Ensure all `ink-muted` text meets WCAG AA contrast against `canvas` backgrounds; use `ink` for essential information
- Provide visible focus indicators using `border-highlight` for keyboard navigation
- Maintain touch targets of at least 44px for filter chips and navigation items
- Include aria-labels on icon-only buttons like the search submit

## Scope note

This guide covers the homepage and research interface surfaces visible in the supplied images. Interior pages such as search results, individual design entries, and account settings are not represented. Motion design, loading states, and mobile-specific layouts are not documented. Measurements are exact where retained in the source data.

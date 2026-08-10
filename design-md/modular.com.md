# How modular.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/modular.com-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with large display headline, product dashboard screenshot, and navigation bar with announcement banner](https://pin.fontofweb.com/8627?format=jpg)](https://design.withfudge.com/share/pin-8627)

[Hero section with large display headline, product dashboard screenshot, and navigation bar with announcement banner](https://design.withfudge.com/share/pin-8627)

[![Dark call-to-action section with large white heading, demo request card, and abstract geometric shapes](https://pin.fontofweb.com/8629?format=jpg)](https://design.withfudge.com/share/pin-8629)

[Dark call-to-action section with large white heading, demo request card, and abstract geometric shapes](https://design.withfudge.com/share/pin-8629)

[![Hardware scaling section with diagram showing GPU targets and feature subheadings on white background](https://pin.fontofweb.com/8628?format=jpg)](https://design.withfudge.com/share/pin-8628)

[Hardware scaling section with diagram showing GPU targets and feature subheadings on white background](https://design.withfudge.com/share/pin-8628)

[![Three-column pricing cards with tiered editions, feature lists, and purple call-to-action buttons](https://pin.fontofweb.com/8630?format=jpg)](https://design.withfudge.com/share/pin-8630)

[Three-column pricing cards with tiered editions, feature lists, and purple call-to-action buttons](https://design.withfudge.com/share/pin-8630)

## Overview

Modular's design system presents a technical infrastructure brand built for AI engineers and platform operators. The visual language balances extreme clarity with subtle technical sophistication: generous white space, precise geometric typography, and a restrained palette anchored by deep navy against bright white canvas. Electric purple serves as the singular accent, appearing in call-to-action buttons, highlighted keywords, and interactive states. The system alternates between light and dark modes—white sections for explanatory content and near-black surfaces for immersive calls to action. Component architecture favors card-based layouts with consistent internal padding, hairline borders, and rounded corners that soften the technical precision without undermining it. The overall impression is of a platform that is powerful, modern, and immediately comprehensible.

## Colors

The color system operates on a high-contrast binary with a single vibrant accent. Dark values carry the brand's technical weight; the purple accent provides energy and actionability.

| token | value | use |
|---|---|---|
| ink | `#010812` | Primary text, dark section backgrounds, maximum contrast headings |
| ink-secondary | `#020C13` | Subtle dark variations, hover states on dark surfaces |
| canvas | `#FFFFFF` | Page background, card surfaces, button text on dark |
| surface | `#181C1F` | Elevated dark cards, CTA section backgrounds |
| surface-elevated | `#E5E9EF` | Light borders, divider lines, subtle background tints |
| action | `#637BFF` | Primary buttons, accent text, interactive highlights, keyword emphasis |
| action-hover | `#676D71` | Secondary text, muted interactive states |
| muted | `#9A9EAA` | Tertiary text, captions, disabled indicators |
| border | `#E5E9EF` | Card outlines, hairline dividers, secondary button borders |

The light mode dominates product and explanatory pages: white canvas with ink text and purple accents. Dark mode appears strategically in conversion sections, where `#181C1F` or `#010812` backgrounds create visual drama and focus attention on white headings and purple buttons. The purple accent (`#637BFF`) is reserved for actionable elements and key message emphasis—never used as a background wash. Border colors remain consistently light and desaturated, functioning as optical separators rather than visual elements.

## Typography

Two families create a clear hierarchy: TT Hoves for display and interface leadership, Inter for body and supporting text. TT Hoves carries a geometric, engineered character appropriate for infrastructure messaging; Inter provides neutral, highly legible reading at small sizes.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | TT Hoves | 3.75rem | 500 | 1 | -0.06em | Homepage hero headlines, major section titles |
| section-display | TT Hoves | 2.5rem | 500 | 1.1 | -0.06em | Section headings, feature introductions |
| card-heading | TT Hoves | 1.5rem | 500 | 1.25 | -0.04em | Pricing tier names, card titles |
| body | Inter | 1rem | 400 | 1.375 | -0.02em | Paragraphs, descriptions, feature explanations |
| body-small | Inter | 0.875rem | 400 | 1.5 | -0.02em | Secondary descriptions, metadata, captions |
| label | Inter | 0.625rem | 400 | 1.5 | normal | Navigation labels, microcopy, tags |
| navigation | Inter | 0.875rem | 500 | 1.5 | -0.04em | Top-bar links, dropdown items |
| button | TT Hoves | 1rem | 500 | 1.25 | -0.06em | Primary and secondary button labels |

TT Hoves is designed by Type Type. Verify licensing for these families before production use. Display sizes employ tight negative tracking for visual density; body text relaxes tracking slightly while maintaining the system's crisp character. The 10px label size is used sparingly for navigation microcopy and technical tags.

## Layout

The layout system relies on generous horizontal margins and consistent vertical rhythm. Page content sits within a centered container with `60px` (3.75rem) side padding, creating breathing room that signals confidence and clarity. Sections stack with `20px` to `60px` vertical margins, establishing clear content boundaries without heavy separators.

Grid behavior favors single-column centered layouts for explanatory content and multi-column arrangements for feature comparisons and pricing. The pricing page uses a three-column card grid with equal-width columns, each card containing internal vertical stacks: icon, label, heading, description, feature list, action button, and footer note. Feature pages employ asymmetric two-column layouts for text-and-diagram pairings.

Spacing tokens derive from a `2px` base unit:
- `0.125rem` (2px): minimum adjustment, hairline positioning
- `0.5rem` (8px): tight internal padding, icon gaps
- `0.75rem` (12px): compact element spacing
- `1rem` (16px): standard element gaps
- `1.25rem` (20px): paragraph spacing, small section gaps
- `1.5rem` (24px): card internal padding
- `2rem` (32px): section sub-spacing
- `3.75rem` (60px): major section margins, page horizontal padding

Cards use `8px` (0.5rem) corner radius for a subtle softened rectangle. Buttons use `4px` (0.25rem) for a more compact, immediate interactive feel.

## Visual language

Imagery and illustration follow a technical, abstract aesthetic. Product screenshots appear within rounded containers against gradient or dark backgrounds, creating depth through layering. Diagrams use clean vector lines in the brand purple to connect nodes and illustrate system architecture. Hardware and partner logos appear in monochrome or near-monochrome treatments, maintaining visual hierarchy.

The geometric motif extends to decorative elements: abstract rectangular blocks in dark navy create compositional interest in CTA sections without competing with content. A large, faint "M" mark appears as a watermark in dark sections, reinforcing brand presence at scale.

Iconography is minimal and functional: small line icons precede feature list items, and simple glyphs accompany button labels. Icons share the text color of their context, shifting from purple in light sections to white in dark sections.

The overall visual density is low. White space is treated as an active design element that guides attention and reduces cognitive load for technical audiences.

## Components

### Primary button
- **Anatomy**: Text label with optional leading icon, centered within a rectangular container
- **Surface**: Solid `#637BFF` background, white text
- **Typography**: `{typography.button}` — TT Hoves Medium, 16px, tight tracking
- **Shape**: `4px` border radius
- **Spacing**: `14px` vertical padding, `22px` horizontal padding
- **Composition**: Full-width within card contexts; intrinsic width in navigation and hero

### Secondary button
- **Anatomy**: Text label with optional icon, bordered container
- **Surface**: Transparent background, `#010812` text, `#E5E9EF` border
- **Typography**: `{typography.button}`
- **Shape**: `4px` border radius
- **Spacing**: `14px` vertical padding, `22px` horizontal padding
- **Composition**: Paired with primary buttons in hero sections; standalone in navigation

### Pricing card
- **Anatomy**: Vertical stack containing icon, tier label, heading, description, feature list with checkmarks, primary button, footer note
- **Surface**: White background, `#E5E9EF` border
- **Typography**: Tier label in purple TT Hoves Demi Bold at 14px; heading in `{typography.card-heading}`; body in `{typography.body-small}` at `#676D71`; feature list in `{typography.body-small}`
- **Shape**: `8px` border radius
- **Spacing**: `24px` internal padding
- **Composition**: Equal-width column in three-column grid; full-width button at bottom

### Dark CTA card
- **Anatomy**: Heading, description, checklist with icons, profile-linked action button, footer text
- **Surface**: `#181C1F` background, white text
- **Typography**: Heading in `{typography.section-display}` at white; body in `{typography.body-small}` at muted gray; button in `{typography.button}`
- **Shape**: `8px` border radius
- **Spacing**: `24px` internal padding
- **Composition**: Positioned within dark section, offset from large display heading

### Navigation bar
- **Anatomy**: Logo left, dropdown links center, action buttons right, optional announcement banner above
- **Surface**: White or transparent background; announcement banner in solid `#637BFF`
- **Typography**: Links in `{typography.navigation}` at `#676D71`; active/hover in `#637BFF`
- **Spacing**: `8px` to `12px` link padding
- **Composition**: Fixed or sticky top position; full-width with internal centered container

### Feature list item
- **Anatomy**: Leading checkmark icon, text label
- **Surface**: Inherits parent background
- **Typography**: `{typography.body-small}` or `{typography.label}` depending on context
- **Composition**: Vertical stack with `8px` to `12px` item spacing; icon and text in horizontal row

## Responsive behavior

The design system is documented from desktop viewport widths. At narrower widths, the three-column pricing grid should collapse to a single column with cards stacking vertically. Navigation dropdowns should convert to a collapsible menu or drawer pattern. Hero headlines should scale down proportionally, maintaining the tight tracking and line-height ratios. The `60px` page margins should reduce to `24px` or `32px` on tablet and mobile to preserve content proportion.

Dark CTA sections should maintain their two-column asymmetry on tablet, stacking to single column on mobile with the heading above the card. Product screenshots and diagrams should remain centered and scale to full container width, preserving their internal aspect ratios.

Button groups in hero sections should stack vertically on mobile, with the primary button full-width above the secondary button.

## Practical implementation guidance

### Preserve
- The stark contrast between light explanatory sections and dark conversion sections
- TT Hoves for all display and button text; Inter for body and labels only
- The single purple accent (`#637BFF`) for all interactive and emphasized elements
- Generous `60px` page margins and `24px` card padding
- Tight negative tracking on display sizes, especially the `-0.06em` on hero headings
- Hairline borders (`1px` `#E5E9EF`) on card containers rather than shadows

### Avoid
- Adding additional accent colors beyond the purple; the system derives energy from restraint
- Using TT Hoves at small sizes or for long reading passages
- Applying border-radius larger than `8px`; the system favors crisp geometry
- Dark backgrounds on explanatory content sections; reserve for CTAs only
- Centering body text except in narrow feature introductions

### Recommended build order
1. Establish the color tokens and apply canvas/ink backgrounds to page sections
2. Implement TT Hoves and Inter with exact tracking values
3. Build the navigation bar with dropdown behavior and announcement banner
4. Create the button components with exact padding and radius
5. Implement the pricing card with full internal spacing and typography stack
6. Build the dark CTA section with asymmetric layout
7. Add feature list patterns with icon alignment

### Accessibility
- Ensure purple buttons on white meet WCAG AA contrast; the `#637BFF` on white may need verification for small text
- Dark section headings at white on `#181C1F` should exceed AA requirements
- Maintain focus indicators that match the purple accent color
- Dropdown navigation should support keyboard traversal and screen reader announcements
- Product screenshots require descriptive alt text conveying the interface purpose

## Scope note

This guide covers the homepage and pricing page surfaces visible in the supplied images. Footer content, mobile navigation behavior, form validation states, loading indicators, and animation specifications are not included. The documentation reflects desktop viewport measurements; responsive adaptations are recommended targets rather than verified implementations.

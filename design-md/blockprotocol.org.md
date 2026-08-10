# How blockprotocol.org is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/blockprotocol.org-design)

Last updated: 2026-08-10

## Captured pages

[![Paid add-ons section showing API usage pricing table with purple-accented service names, light gray borders, and a code-slash icon heading on a near-white background.](https://pin.fontofweb.com/3932?format=jpg)](https://design.withfudge.com/share/pin-3932)

[Paid add-ons section showing API usage pricing table with purple-accented service names, light gray borders, and a code-slash icon heading on a near-white background.](https://design.withfudge.com/share/pin-3932)

[![Pricing cards with vibrant purple-to-pink gradient backgrounds, white typography, feature grids, and contrasting pink and purple call-to-action buttons on a light gray surface.](https://pin.fontofweb.com/3931?format=jpg)](https://design.withfudge.com/share/pin-3931)

[Pricing cards with vibrant purple-to-pink gradient backgrounds, white typography, feature grids, and contrasting pink and purple call-to-action buttons on a light gray surface.](https://design.withfudge.com/share/pin-3931)

## Overview

The Block Protocol pricing page presents a developer-centric visual system that balances expressive brand moments with functional clarity. The interface is built around a dramatic contrast: vibrant, gradient-saturated pricing cards sit above clean, light-surface data tables. This dual-mode approach serves two distinct communicative needs—emotional persuasion through the plan cards, and rational comparison through the add-ons table.

The design language speaks directly to technical audiences. Purple dominates as the primary brand color, appearing in gradients, interactive elements, and accent text. Pink functions as a secondary accent, creating visual distinction between plan tiers and call-to-action states. The typography pairs a geometric sans-serif display face with a highly legible body face, ensuring that dense technical information remains scannable while headlines carry appropriate weight.

The overall composition is restrained in its use of decorative elements. Icons are simple and functional, appearing as service identifiers in tables and feature markers in lists. The layout relies on generous whitespace and clear hierarchical separation rather than ornamental dividers or heavy shadows. This creates a system that feels precise, trustworthy, and appropriately technical for a platform serving developers and power users.

## Colors

The color system operates across three distinct modes: vibrant gradient surfaces for plan cards, clean light surfaces for data and documentation, and a unified accent palette that ties both modes together.

| token | value | use |
|---|---|---|
| action | #7C3AED | Primary buttons, links, interactive accents, gradient start |
| action-hover | #6D28D9 | Hover states for primary interactive elements |
| accent-pink | #EC4899 | Secondary buttons, Pro plan highlights, gradient end |
| ink | #111827 | Primary text on light surfaces, table body text |
| muted-ink | #6B7280 | Secondary text, captions, table headers, metadata |
| canvas | #F9FAFB | Page background, section separators |
| surface | #FFFFFF | Card backgrounds, table surfaces, elevated panels |
| surface-elevated | #F3F4F6 | Subtle backgrounds, alternating table rows, icon containers |
| border | #E5E7EB | Table dividers, card outlines, structural separators |
| border-subtle | #F3F4F6 | Very light separators, internal card divisions |
| gradient-start | #7C3AED | Purple origin for plan card backgrounds |
| gradient-end | #EC4899 | Pink terminus for plan card backgrounds |
| plan-card-ink | #FFFFFF | All text on gradient plan card surfaces |
| plan-card-muted | #E9D5FF | Secondary text on gradient surfaces, subtle labels |

The gradient mode defines the visual identity of the pricing cards, flowing from deep violet through magenta. This creates an energetic, distinctive presence that differentiates the paid plans from the surrounding interface. On these gradient surfaces, all text inverts to white or near-white for maximum contrast.

The light mode governs the add-ons table and supporting content. Here, the palette is deliberately subdued: near-black ink on white surfaces, with muted gray for secondary information. This creates a neutral, scannable environment for dense technical data.

Purple serves as the unifying thread, appearing in both modes: as the dominant gradient hue in cards, and as the accent color for linked service names and interactive elements in tables. Pink is reserved for the Pro tier distinction and secondary actions, creating a clear visual hierarchy between plan levels.

## Typography

The type system pairs Colfax for display and structural hierarchy with Inter for body text and data presentation. This combination provides geometric precision in headlines alongside excellent readability in dense technical content.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Colfax | 2.5rem | 700 | 1.1 | -0.02em | Page titles, major section headings |
| section-display | Colfax | 1.5rem | 600 | 1.2 | -0.01em | Card titles, subsection headings |
| price-display | Colfax | 2rem | 700 | 1.1 | -0.02em | Plan prices, prominent numerical values |
| body | Inter | 1rem | 400 | 1.6 | 0em | Paragraphs, descriptions, general content |
| body-small | Inter | 0.875rem | 400 | 1.5 | 0em | Table cells, compact descriptions, metadata |
| label | Inter | 0.75rem | 600 | 1.4 | 0.05em | Uppercase labels, badges, category headers |
| navigation | Inter | 0.875rem | 500 | 1.5 | 0em | Buttons, navigation items, interactive labels |
| legal-copy | Inter | 0.75rem | 400 | 1.5 | 0em | Footnotes, disclaimers, fine print |

Colfax carries the brand voice in headlines and pricing displays. Its geometric construction with subtle humanist adjustments gives it a contemporary technical character without feeling cold. The tight negative tracking on display sizes creates compact, impactful headlines that hold their own against the vibrant gradient backgrounds.

Inter handles all functional text with neutrality and precision. At body sizes, its large x-height and open apertures maintain clarity across long reading sessions. In tables, the slightly reduced body-small size preserves information density without sacrificing legibility.

The weight contrast between Regular (400) and Semibold (600) or Bold (700) creates clear hierarchy without requiring additional font variants. Labels and navigation items use medium weights (500–600) to signal interactivity without the heaviness of full bold.

Verify licensing for these families before production use. Inter is designed by Rasmus Andersson and available from Rsms. No designer or vendor attribution is supported for Colfax.

## Layout

The page layout follows a centered, single-column structure with modular sections that stack vertically. Each section maintains consistent horizontal margins, creating a reading experience that feels contained and focused.

The pricing cards section employs a two-column grid at desktop widths, presenting Hobby and Pro plans as equal-width panels. These cards share a continuous gradient background that spans both columns, visually unifying the tier presentation while maintaining distinct content zones within each half. The gradient flows horizontally across the full width, with purple dominating the left (Hobby) side and pink emerging toward the right (Pro) side.

Below the cards, the add-ons table occupies the full content width. The table uses a clean, border-separated row structure with generous vertical padding in each cell. Columns align to a logical reading order: provider, service name, price, and unit. Service names receive purple accent color and link styling, creating scannable visual anchors within the dense data.

Spacing follows a modular rhythm based on a 0.25rem unit. Section vertical padding uses 4rem (16 units) to create clear separation between major content blocks. Component internal padding uses 2rem (8 units) for cards and 1.5rem (6 units) for table cells. This consistent modular approach ensures that relationships between elements remain predictable across the page.

The content area appears to max out at a readable width, likely between 72rem and 80rem, with comfortable side margins that prevent text lines from extending too long. Within this container, the pricing cards break to full-bleed gradient backgrounds while maintaining internal content alignment with the page grid.

## Visual language

The visual identity of this system emerges from the tension between expressive brand surfaces and utilitarian data presentation. The gradient plan cards deliver emotional impact and tier differentiation through color, while the add-ons table prioritizes information clarity through restraint.

Iconography is minimal and functional. Small service logos identify API providers in the table, while simple line icons mark features in plan lists. A code-slash icon (`</>`) introduces the add-ons section, reinforcing the developer audience. These icons are small, typically 1rem to 1.25rem, and rendered in muted tones or white depending on their background.

The gradient treatment on pricing cards is the most distinctive visual element. It is not a subtle background tint but a bold, saturated flow from violet to magenta. Text on these surfaces is universally light, with careful attention to contrast hierarchy: prices and plan names are largest and brightest, while feature descriptions and metadata are smaller and slightly muted.

On light surfaces, the visual language shifts to precision and scannability. The table uses horizontal rules as the primary structural element, with alternating row backgrounds or subtle hover states to aid row tracking. Purple appears sparingly as an accent on interactive elements—linked service names, the "spend cap" reference, and the "Find out more" call-to-action.

Badges and status indicators use uppercase label styling with tight tracking. The "PLANNED" status appears in pink, creating a consistent association between this accent color and forthcoming features. This color coding helps users quickly distinguish available capabilities from roadmap items.

## Components

### Pricing card

The pricing card is the system's most visually dominant component, appearing as a full-height panel within the two-tier grid.

- **Anatomy**: Price display, plan name label, description text, feature grid with icon markers, full-width call-to-action button, and optional "view full details" link.
- **Surface**: Gradient background from `{colors.gradient-start}` to `{colors.gradient-end}`, with all text in `{colors.plan-card-ink}`. The gradient spans continuously across adjacent cards.
- **Typography**: Price uses `{typography.price-display}`, plan name uses `{typography.label}` in uppercase, descriptions use `{typography.body}`, and features use `{typography.body-small}`.
- **Shape**: No visible border radius on the card itself; it extends to grid edges. Internal feature items have subtle rounded containers.
- **Spacing**: `{spacing.card-padding}` internal padding. Feature grid uses `{spacing.component-gap}` between items.
- **Composition**: Two-column internal layout for feature grids, with features presented as icon-plus-text pairs.
- **Variants**: Hobby tier (left, more purple-dominant) and Pro tier (right, more pink-emergent). Pro tier features include "PLANNED" status badges in pink.

### Primary action button

- **Anatomy**: Text label with optional arrow icon.
- **Surface**: `{colors.action}` background with `{colors.plan-card-ink}` text, or `{colors.accent-pink}` background for secondary prominence.
- **Typography**: `{typography.navigation}`.
- **Shape**: Full pill via `{rounded.button}`.
- **Spacing**: Horizontal padding approximately 1.5rem, vertical padding approximately 0.75rem.
- **Composition**: Right-aligned within card headers, or full-width within card bodies.

### Data table

- **Anatomy**: Column headers, data rows with provider logos, service names, prices, and units.
- **Surface**: `{colors.surface}` background with `{colors.border}` horizontal rules between rows.
- **Typography**: Headers use `{typography.label}` in uppercase with muted color. Body uses `{typography.body-small}`. Service names use `{colors.action}` for linked state.
- **Shape**: No outer border; internal row separators only.
- **Spacing**: `{spacing.table-cell-y}` vertical padding, `{spacing.table-cell-x}` horizontal padding.
- **Composition**: Four-column layout with left-aligned text. Provider and service columns are wider; price and unit columns are narrower and right-aligned or centered.

### Feature list item

- **Anatomy**: Icon marker, text description, optional status badge.
- **Surface**: Transparent on gradient cards; subtle elevated background on light surfaces.
- **Typography**: `{typography.body}` or `{typography.body-small}` depending on context.
- **Composition**: Icon left, text flowing right. Status badges inline at text end.
- **Variants**: Available features show check or service icons. Planned features show "PLANNED" in `{colors.accent-pink}`.

### Section heading

- **Anatomy**: Optional icon, text label, optional subtitle.
- **Typography**: `{typography.section-display}` for main text. "PAID" prefix in `{typography.label}` with heavier weight.
- **Composition**: Icon and label on baseline, with subtitle below or beside.

## Responsive behavior

The two-column pricing card grid should stack vertically on narrower viewports, with each card becoming full-width. The continuous gradient treatment may need to shift to vertical flow or individual card gradients when stacked, preserving the purple-to-pink relationship with Hobby above Pro.

The add-ons table requires horizontal scroll or column reflow on small screens. Priority should be given to service name and price visibility; provider and unit columns may collapse or stack beneath the primary information.

Typography scales down proportionally. The hero display and price display sizes should reduce by approximately 25–30% on mobile to prevent overflow and maintain comfortable line lengths. Body text may remain at base size for readability.

Touch targets for buttons and table rows should maintain minimum 44px height. The pill buttons in pricing cards should expand to full width on mobile for easy thumb reach.

## Practical implementation guidance

### Preserve
- The bold gradient-to-light contrast between plan cards and data tables. This dual-mode approach is central to the page's visual identity.
- The precise weight hierarchy between Colfax display and Inter functional text. Substituting either with a generic sans-serif would weaken the technical character.
- The full-pill button shape for primary actions. This soft, approachable form contrasts effectively with the angular data table.
- The uppercase, tracked label style for plan names and table headers. This small detail creates clear structural scanning points.

### Avoid
- Adding heavy shadows or elevation effects. The design relies on color and spacing for hierarchy, not dimensional depth.
- Using the gradient palette on light-surface components. Reserve purple-pink gradients for the plan cards only to maintain their special status.
- Rendering body text in Colfax. The geometric display face lacks the readability features needed for extended reading.
- Creating additional accent colors. The purple-pink pairing is distinctive; introducing more hues would dilute the brand recognition.

### Recommended build order
1. Establish the color tokens and gradient definition, as these drive all subsequent decisions.
2. Implement the typography scale with both font families loaded and tested for web performance.
3. Build the pricing card component with its gradient background, internal grid, and feature list structure.
4. Create the data table with proper column alignment, row separators, and linked service name styling.
5. Add interactive states: button hovers, link underlines or color shifts, and table row hover backgrounds.
6. Implement responsive stacking for the card grid and table overflow behavior.

### Accessibility
- Ensure gradient text meets contrast requirements. White text on the vibrant gradient should achieve WCAG AA for large text; test specific color stops.
- Provide focus indicators for all interactive elements. The purple link color should have a visible focus state distinct from hover.
- Use semantic table markup with proper `th` and `td` relationships for the add-ons pricing data.
- Consider adding `aria-label` context to icon-only elements, particularly service provider logos in the table.
- When "PLANNED" features are present, ensure the status is communicated to screen readers, not just visually indicated by color.

## Scope note

This guide covers the pricing page surface including plan cards and add-ons table. Navigation, footer, form interactions, checkout flows, and mobile-specific layouts are not represented in the supplied material. Motion, hover states, and disabled appearances are inferred from static images and should be verified in implementation. Measurements are practical adaptation targets.

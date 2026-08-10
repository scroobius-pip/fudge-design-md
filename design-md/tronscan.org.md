# How tronscan.org is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/tronscan.org-design)

Last updated: 2026-08-10

## Captured pages

[![TRONSCAN homepage showing network statistics dashboard with search bar, TRX price panel, blocks list, transactions table, and Total Value Locked chart with cookie consent banner](https://pin.fontofweb.com/9186?format=jpg)](https://design.withfudge.com/share/pin-9186)

[TRONSCAN homepage showing network statistics dashboard with search bar, TRX price panel, blocks list, transactions table, and Total Value Locked chart with cookie consent banner](https://design.withfudge.com/share/pin-9186)

[![TRONSCAN homepage variant with updated block numbers and transaction hashes, showing live data refresh in blocks and transactions sections with identical layout structure](https://pin.fontofweb.com/9185?format=jpg)](https://design.withfudge.com/share/pin-9185)

[TRONSCAN homepage variant with updated block numbers and transaction hashes, showing live data refresh in blocks and transactions sections with identical layout structure](https://design.withfudge.com/share/pin-9185)

## Overview

TRONSCAN presents a blockchain explorer interface built for rapid data consumption. The design prioritizes numerical clarity over decorative elements, organizing dense network statistics into scannable card grids and tabular lists. A light gray canvas keeps attention on the white data surfaces, while a restrained red accent marks the TRON brand identity and highlights critical actions. The interface balances institutional credibility with the urgency of real-time financial data, using subtle green indicators for positive network growth and muted grays for secondary metadata. Every element serves the core task: helping users verify transactions, monitor network health, and track asset movements across the TRON blockchain.

## Colors

The color system operates on a functional hierarchy that separates data surfaces from interactive elements. The palette is intentionally restrained, with most chromatic energy reserved for status indicators and the primary brand accent.

| token | value | use |
|---|---|---|
| action | #C23631 | Primary buttons, active navigation states, TRX branding elements, negative chart lines |
| action-hover | #D4726F | Hover states on primary actions, subtle emphasis |
| ink | #101010 | Primary headings, block numbers, transaction hashes, maximum contrast data |
| ink-secondary | #333333 | Navigation text, secondary labels, body copy in elevated surfaces |
| ink-tertiary | #3E3F3A | Tertiary metadata, timestamps, less critical identifiers |
| muted-ink | #91979D | Disabled states, placeholder text, chart axes, subtle borders |
| canvas | #F6F7FB | Page background, fills the viewport behind all content |
| surface | #FFFFFF | Cards, tables, search bar, all elevated content containers |
| surface-elevated | #FFFFFF | Modal backgrounds, dropdown menus, cookie consent banner |
| border | #DBDEE2 | Dividers between major sections, outer card boundaries |
| border-subtle | #EAEEFB | Inner table borders, tag backgrounds, subtle separations |
| success | #2D912C | Positive percentage changes, network growth indicators, upward trends |
| chart-blue | #404245 | Primary chart lines, data visualization strokes |
| chart-red | #C23631 | Secondary chart series, contrast data lines |

The light canvas creates necessary breathing room around densely packed data cards. White surfaces establish clear figure-ground relationships, ensuring that numerical values remain legible at small sizes. The red accent derives from TRON's brand identity and appears sparingly: in the logo, primary buttons, and negative value indicators. Green serves exclusively for positive network metrics, creating an immediate semantic association with growth. The near-black ink family provides three stepping stones of emphasis, from dominant headings to supporting metadata, without introducing additional hues that would compete with the data itself.

## Typography

The interface relies entirely on Lato, a humanist sans-serif that maintains clarity at small sizes while offering enough weight variation to structure information hierarchically. The type system is compact, reflecting the data-dense nature of blockchain exploration.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Lato | 1.25rem | 700 | 1.6 | normal | Large statistics, primary values like account totals and TVL |
| section-display | Lato | 1.125rem | 600 | 1.5 | normal | Section headings, card titles, chart headers |
| body | Lato | 0.875rem | 400 | 1.5 | normal | Primary body text, transaction details, addresses |
| body-small | Lato | 0.75rem | 400 | 1.33 | normal | Timestamps, metadata, secondary labels, tags |
| label | Lato | 0.75rem | 600 | 1.33 | normal | Table headers, category labels, emphasized small text |
| navigation | Lato | 0.8125rem | 500 | 1.69 | normal | Top navigation items, dropdown menus |
| stat-value | Lato | 1.25rem | 700 | 1.6 | normal | Network statistics, large numerical displays |
| stat-label | Lato | 0.75rem | 400 | 1.33 | normal | Labels accompanying statistics, unit indicators |

Weight variation carries significant semantic load. Bold weights (700) reserve for the most critical numerical values that users scan first. Semibold (600) marks section boundaries and interactive headings. Medium (500) handles navigation, creating subtle elevation above body text. Regular (400) carries the bulk of data presentation. The compact line heights, particularly the 1.33 ratio for small text, enable tight stacking of transaction rows without sacrificing legibility. Verify licensing for these families before production use.

## Layout

The page follows a centered container model with a maximum width that constrains the data density to readable proportions. The layout stacks vertically in distinct bands: global navigation, search and trending tokens, statistics dashboard, block grid, transactions table, and TVL analysis.

The top navigation spans the full viewport width with a white background, containing the TRONSCAN logo, primary navigation links, and user actions on the right. Below this, the search bar occupies a prominent centered position with a dropdown filter and search icon. Trending token tags sit immediately beneath, forming a horizontal scrollable row of pill-shaped identifiers.

The statistics dashboard uses a split composition. The left two-thirds contains a 2x2 grid of major network metrics: Total Accounts, Total Value Locked, Total Transactions, and Total Transfer Volume. Each metric pairs a large bold value with a 24-hour change indicator. The right third holds the TRX price panel with an embedded sparkline chart, market cap, volume, supply, and staking data. This asymmetric weighting reflects user priorities, with aggregate network health taking precedence over single-asset tracking.

Below the dashboard, the Blocks section presents a horizontal carousel of recent blocks. Each block card contains the block number, producer name, transaction count, and reward breakdown. The Transactions section splits into a wide table on the left and a multi-line chart on the right, showing transaction volume over time with series for total transactions, TRX transfers, and USDT transfers.

The Total Value Locked section at the bottom combines a large area chart with a ranked project table. The chart occupies roughly half the width, with the table consuming the remainder. A cookie consent banner fixes to the bottom viewport edge, overlaying content with a semi-transparent dark backdrop.

Spacing between major sections uses 1.25rem gaps, while internal card padding holds at 1.25rem to maintain consistent data density. Card corners are rounded at 0.625rem, softening the technical severity without compromising the grid's precision.

## Visual language

The visual language communicates institutional reliability and technical precision. Rounded rectangles dominate the shape vocabulary, with 0.625rem corners on major panels and tighter 0.375rem on internal elements. This creates a nested hierarchy of containment: softer outer boundaries, crisper inner structures.

Shadow usage is minimal and functional. A subtle shadow appears on elevated elements like dropdown menus and the cookie banner, using a near-black at 10% opacity with 20px blur. The search bar and primary button carry no shadow, relying on border definition instead.

Iconography appears as simple line icons in the statistics dashboard: a person silhouette for accounts, a lock for value locked, stacked layers for transactions, and arrows for transfer volume. These icons use the muted ink color and sit to the left of their associated values. Transaction type tags in the table use small rounded rectangles with light backgrounds and dark text, creating discrete categorical labels without visual noise.

The TRX price panel includes a circular logo mark with the TRON symbol, establishing brand presence without dominating the data. Sparkline charts use thin strokes with no fill, preserving the clean aesthetic while conveying trend direction. The larger area charts in the TVL section use filled regions with low opacity, creating depth without obscuring grid lines.

Data visualization employs a restrained palette: blue-gray for primary series, red for secondary or contrasting data, and green exclusively for positive indicators. Chart axes and grid lines use the muted ink at reduced opacity, receding behind the data. No chart legends use decorative elements; simple colored dots with adjacent labels suffice.

## Components

### Search bar

- **Anatomy**: Rounded rectangle containing a search icon, placeholder text, a filter dropdown with "All" label, and a submit button
- **Surface**: White background with subtle border
- **Typography**: Body token for placeholder, navigation token for dropdown
- **Shape**: 0.625rem radius, full-width within container
- **Spacing**: Internal padding of 0.8125rem vertical, 1rem horizontal

### Statistics card

- **Anatomy**: Icon, label, primary value, and 24-hour change indicator with directional color
- **Surface**: White background, no visible border in default state
- **Typography**: Stat-value for the number, stat-label for the description and change percentage
- **Shape**: 0.625rem radius
- **Spacing**: 1.25rem internal padding, arranged in 2x2 grid with 0.9375rem gaps
- **Variants**: Positive changes render in success green with upward implication; negative changes use action red

### Block card

- **Anatomy**: Block number as link, producer name with arrow, timestamp, transaction count, and reward breakdown with three token amounts
- **Surface**: White background, subtle bottom border or shadow for separation
- **Typography**: Section-display for block number, body-small for timestamps and counts, body for values
- **Shape**: 0.375rem radius
- **Composition**: Horizontal carousel with partial next-card visibility, indicating scrollability

### Transaction row

- **Anatomy**: Transaction hash as truncated link, From/To addresses with directional labels, value with unit, and action tag
- **Surface**: Alternating or subtle hover states on white background
- **Typography**: Body for addresses and values, body-small for timestamps, label for action tags
- **Spacing**: 0.8125rem vertical padding, generous horizontal spacing between columns
- **Composition**: Fixed-width columns for hash, addresses, value, and tag; addresses truncate with ellipsis

### Transaction tag

- **Anatomy**: Rounded pill containing action type text
- **Surface**: Border-subtle background, ink-secondary text
- **Typography**: Body-small
- **Shape**: 0.25rem radius
- **Spacing**: 0.125rem vertical, 0.5rem horizontal padding

### TRX price panel

- **Anatomy**: Logo mark, TRX symbol, current price, percentage change, market cap, volume, supply metrics, and sparkline chart
- **Surface**: White background, 0.625rem radius
- **Typography**: Hero-display for price, body for metrics, stat-label for descriptions
- **Composition**: Price and change on top row, metrics stacked below, sparkline spanning full width

### Chart container

- **Anatomy**: Title, legend with colored dots, and SVG chart area
- **Surface**: White background, optional subtle border
- **Typography**: Section-display for title, body-small for legend labels and axis values
- **Shape**: 0.625rem radius
- **Spacing**: 1.25rem padding, internal margins for title and legend

### Cookie consent banner

- **Anatomy**: Text notice with "Terms of Service" and "Privacy Policy" links, and "Got It" dismiss button
- **Surface**: Dark semi-transparent backdrop overlaying page content
- **Typography**: Body-small for notice text, label for button
- **Shape**: Full-width bar at viewport bottom

## Responsive behavior

The interface appears optimized for desktop viewing given the data density and multi-column layouts. At narrower viewports, the statistics grid should collapse from 2x2 to a single column, with the TRX price panel moving below the network metrics. The blocks carousel would benefit from touch-friendly swipe gestures and reduced card width. The transactions table requires horizontal scroll or column prioritization, with the chart potentially stacking below. The TVL section's side-by-side chart and table should stack vertically, with the chart consuming full width. Navigation items collapse to a hamburger menu with the search bar remaining prominent. These adaptations preserve data accessibility while respecting smaller screen constraints.

## Practical implementation guidance

### Preserve
- The strict typographic hierarchy using weight rather than size for emphasis
- The light gray canvas with white card surfaces for maximum data legibility
- The restrained accent palette: red for brand and negative, green for positive
- The compact spacing that enables dense information display without clutter
- The rounded rectangle vocabulary with consistent corner radii per elevation level

### Avoid
- Adding decorative shadows or gradients that compete with data visualization
- Introducing additional accent colors that dilute the semantic meaning of green and red
- Increasing line heights or padding beyond the compact system, which would break the density model
- Using borders where spacing alone can separate elements
- Rendering blockchain addresses in monospaced fonts that disrupt the Lato rhythm

### Recommended build order
1. Establish the canvas and surface color tokens with the Lato font stack
2. Build the search bar and navigation as the top structural elements
3. Implement the statistics grid with live number formatting and change indicators
4. Create the block card component with truncated text handling
5. Develop the transactions table with columnar layout and tag system
6. Add chart containers with responsive SVG implementations
7. Integrate the TRX price panel with sparkline visualization
8. Polish with hover states, loading skeletons, and the cookie consent flow

### Accessibility
- Ensure all numerical values have associated labels for screen reader context
- Provide text alternatives for the directional change indicators (not color alone)
- Maintain minimum 4.5:1 contrast ratios for body text; the ink on surface pairing exceeds this
- Make transaction hashes fully readable via title attributes or expandable rows
- Support keyboard navigation through the blocks carousel and table sorting
- Consider a dark mode variant given the extended viewing sessions typical of blockchain monitoring

## Scope note

This guide covers the TRONSCAN homepage dashboard as visible in desktop viewport captures. Internal pages for individual blocks, transactions, accounts, and token details are not represented. Mobile breakpoints, animation specifications, and real-time data update transitions fall outside the current scope. Measurements derive from the documented interface values.

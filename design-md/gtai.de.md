# How gtai.de is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/gtai.de-design)

Last updated: 2026-08-10

## Captured pages

[![Footer section with GTAI logo, Medtec China event card, and Federal Ministry partner branding on dark background](https://pin.fontofweb.com/10805?format=jpg)](https://design.withfudge.com/share/pin-10805)

[Footer section with GTAI logo, Medtec China event card, and Federal Ministry partner branding on dark background](https://design.withfudge.com/share/pin-10805)

[![News and Industries section with article headlines, category icons, and search input fields](https://pin.fontofweb.com/10804?format=jpg)](https://design.withfudge.com/share/pin-10804)

[News and Industries section with article headlines, category icons, and search input fields](https://design.withfudge.com/share/pin-10804)

[![Hero banner with AI-Assist feature promotion, navigation bar, and page heading with supporting imagery](https://pin.fontofweb.com/10803?format=jpg)](https://design.withfudge.com/share/pin-10803)

[Hero banner with AI-Assist feature promotion, navigation bar, and page heading with supporting imagery](https://design.withfudge.com/share/pin-10803)

## Overview

The GTAI design system serves Germany Trade & Invest's digital presence as a formal, authoritative gateway for international business investment. The visual language balances governmental credibility with modern accessibility through a restrained palette, clear typographic hierarchy, and purposeful use of color to guide users through dense informational content. The system employs a light canvas for primary content areas, with strategic deployment of deep purple accent panels to highlight key features like the AI-Assist tool. Editorial content is presented with generous whitespace and structured grid layouts that accommodate both news listings and industry category navigation without visual clutter.

## Colors

The color system operates on a principle of functional restraint with selective boldness. The primary interface relies on near-black ink against white canvas, with a bright cyan action color providing interactive emphasis. A deep purple serves as the distinctive accent for feature panels and promotional content, creating visual landmarks within the page flow.

| token | value | use |
|---|---|---|
| action | #008BD2 | Primary buttons, links, active navigation states, search icons |
| action-hover | #6F4F99 | Hover states for action elements, secondary accent |
| ink | #333333 | Primary body text, headings, footer content |
| muted-ink | #5A5A5A | Secondary text, industry labels, supporting descriptions |
| subtle-ink | #939393 | Tertiary text, timestamps, metadata |
| canvas | #FFFFFF | Page background, card surfaces, input fields |
| surface | #EDEDED | Subtle background variations, divider regions |
| surface-dark | #303133 | Dark footer background, inverted text regions |
| accent-panel | #6F4F99 | Feature promotion panels, AI-Assist banner |
| border-subtle | #A3A3A3 | Hairline borders, inactive states, input borders |

The purple accent panel (#6F4F99) appears as a full-width banner with white typography, creating maximum contrast for featured content. The dark footer (#303133) inverts the standard light scheme, grounding the page with institutional weight. Action elements use cyan consistently across links, buttons, and interactive icons to establish a predictable interaction pattern.

## Typography

The typographic system pairs a refined serif display face with a clean sans-serif for interface elements, creating editorial distinction without sacrificing readability at small sizes. The documented families include Tiempos-medium, Tiempos-regular, Bernina-regular, Bernina-semibold, Arial, and -apple-system. Tiempos-medium and Tiempos-regular serve display and editorial roles, while Bernina-regular and Bernina-semibold handle interface and body text. Arial and -apple-system appear as system fallback fonts in the computed stacks.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Tiempos-medium | 2.25rem | 400 | 1.22 | 0em | Page headlines, feature banner titles |
| section-display | Tiempos-medium | 1.5rem | 400 | 1.25 | 0em | Section headings, news category titles |
| body | Bernina-regular | 1rem | 400 | 1.5 | -0.01em | Paragraph text, descriptions, card content |
| body-bold | Bernina-regular | 1rem | 700 | 1.5 | 0em | Emphasized body text, card titles |
| label | Bernina-semibold | 0.875rem | 400 | 1.29 | 0em | Buttons, tags, timestamps, metadata |
| navigation | Bernina-semibold | 1rem | 400 | 1.5 | 0em | Main navigation, menu items |
| legal-copy | Bernina-semibold | 0.875rem | 400 | 2 | 0em | Footer legal text, copyright notices |

Tiempos-medium delivers the editorial gravitas appropriate for a government investment portal, with its slightly condensed proportions and classical serifs. Bernina-regular and Bernina-semibold handle all interface and body text, with the semibold variant providing weight differentiation without requiring true bold rendering. The system maintains consistent negative letter-spacing on body text (-0.01em) for tighter, more polished paragraph rendering. Tiempos-regular supports body copy at 1rem when a lighter editorial tone is needed. Arial and -apple-system serve as fallback families in the computed font stacks.

Verify licensing for these families before production use.

## Layout

The page architecture follows a centered, contained model with generous horizontal margins that scale with viewport width. The main content area is constrained by substantial left and right padding (approximately 6.25rem on desktop), creating a focused reading experience that prevents line lengths from becoming unwieldy.

The header occupies a fixed position with full-width background, containing the GTAI wordmark and primary navigation. Below the header, a promotional banner may appear with contrasting dark background, followed by the main content flow. Content sections stack vertically with consistent vertical rhythm, typically separated by 5rem to 7.5rem of whitespace.

Grid structures within content areas employ flexible multi-column arrangements. The news section uses a two-column split: a primary column for editorial listings and a secondary column for industry category navigation. Industry categories arrange as a three-column grid of icon-centered cards with labels beneath. Card-based content, such as event promotions, uses single-column stacking within their containers.

Spacing follows a base unit of 0.125rem (2px), with derived values at 0.5rem, 1rem, 1.5rem, 2rem, 2.5rem, 3rem, 5rem, 6.25rem, and 7.5rem serving component and layout needs. Component internal padding typically uses 1.5rem for cards and 1rem for compact elements like tags and labels.

## Visual language

The visual character communicates institutional authority through restraint and precision. Photography appears desaturated and professionally composed, depicting business environments, manufacturing, and collaborative workspaces without overt styling. Iconography for industry categories uses thin-line geometric symbols in muted gray, maintaining consistency with the understated palette.

Shadow usage is minimal and functional: a subtle elevation shadow (0px 4px 20px rgba(0,0,0,0.12)) may appear on floating elements or dropdown containers, while a deeper shadow (0px 0px 24px rgba(0,0,0,0.16)) supports modal overlays. The AI-Assist panel demonstrates the system's capacity for bold color blocking when promoting key features.

Border radii remain conservative: 0.25rem for panels and cards, 2.5rem for pill-shaped buttons, and 9999px for circular icon containers. The GTAI wordmark uses a distinctive color-gradient treatment (orange to yellow) that serves as the primary brand identifier against the otherwise neutral interface.

## Components

### Primary Navigation
- Anatomy: GTAI wordmark left-aligned, horizontal link list center-right, utility actions (AI-Assist, search) far right
- Surface: Transparent or white background, bottom border on scroll
- Typography: `{typography.navigation}` in `{colors.ink}`
- Spacing: Horizontal padding of 6.25rem, vertical padding of 1rem
- Composition: Flex row with space-between alignment

### Promotional Banner
- Anatomy: Full-width container, dismissible close control, text with optional action button
- Surface: `{colors.surface-dark}` background, `{colors.canvas}` text
- Typography: Body text at 1rem, action button as pill
- Shape: Full-width, no border radius
- Spacing: Vertical padding of 0.75rem, horizontal padding matching content container

### AI-Assist Feature Panel
- Anatomy: Heading, descriptive paragraph, primary action button, secondary text link
- Surface: `{colors.accent-panel}` background
- Typography: `{typography.hero-display}` in white, `{typography.body}` in white at 90% opacity
- Shape: No border radius, full-width within content constraints
- Spacing: Generous internal padding of 3rem to 5rem
- Composition: Left-aligned text block, button below with inline link beneath

### News Listing Card
- Anatomy: Timestamp and category label, headline as linked text, optional excerpt
- Surface: Transparent, with bottom border separator
- Typography: `{typography.label}` for metadata, `{typography.body-bold}` at `{colors.action}` for headline
- Border: 1px solid `{colors.border-subtle}` below each item
- Spacing: Vertical padding of 1.5rem per item, gap of 0.5rem between metadata and headline

### Industry Category Card
- Anatomy: Centered icon symbol, category label below
- Surface: `{colors.canvas}` background
- Typography: `{typography.label}` in `{colors.muted-ink}`
- Spacing: Internal padding of 1.5rem, centered alignment
- Composition: Vertical flex, icon at 48px nominal size

### Search Input
- Anatomy: Text field with placeholder, search icon button
- Surface: `{colors.canvas}` background
- Typography: `{typography.body}` in `{colors.ink}`
- Border: 1px solid `{colors.border-subtle}`
- Shape: `{rounded.panel}` (0.25rem)
- Spacing: Padding of 0.75rem horizontal, 1rem vertical

### Footer
- Anatomy: Partner branding block, copyright notice, legal links
- Surface: `{colors.surface-dark}` background
- Typography: `{typography.legal-copy}` in `{colors.canvas}` at reduced opacity
- Spacing: Vertical padding of 3rem, horizontal padding matching content container

## Responsive behavior

The design targets desktop as the primary viewport, with content constrained to a maximum readable width. The navigation collapses to a hamburger menu on smaller viewports, though this behavior is not visible in the supplied captures. Industry category grids should reflow from three columns to two, then single column as viewport narrows. News listings maintain single-column stacking across all breakpoints. The AI-Assist panel text should remain left-aligned with comfortable line lengths; consider increasing internal padding on larger viewports to maintain proportional whitespace.

## Practical implementation guidance

### Preserve
- The distinctive purple (#6F4F99) for feature panels and promotional content only; do not dilute by applying elsewhere
- The Tiempos-medium and Bernina type pairing that establishes editorial credibility
- Generous horizontal margins that create focus and breathing room
- The cyan link color consistency across all interactive text elements
- Desaturated, professional photography treatment

### Avoid
- Introducing additional accent colors beyond the established cyan and purple
- Reducing horizontal padding below 6.25rem on desktop viewports
- Using the dark footer background for content sections
- Crowding industry category cards; maintain centered icon with clear label separation
- Bold weights on Tiempos; the medium weight provides sufficient presence

### Recommended Build Order
1. Establish base typography with Tiempos-medium for headings and Bernina-regular/semibold for body
2. Implement color tokens, ensuring purple and cyan are applied to their designated roles
3. Build the content container with maximum width and horizontal padding constraints
4. Create the header with navigation and wordmark placement
5. Develop the AI-Assist panel as the primary visual landmark
6. Implement news listing and industry grid components
7. Construct the dark footer with inverted text treatment

### Accessibility
- Ensure purple panel text maintains 4.5:1 contrast ratio; the white-on-purple combination meets this threshold
- Provide visible focus indicators on all interactive elements, using the cyan action color for outlines
- Structure news listings as ordered lists or articles with proper heading hierarchy
- Include descriptive alt text for industry category icons
- Maintain keyboard navigability through the navigation dropdown and search functionality

## Scope note

This guide covers the desktop landing and content page surfaces visible in the supplied captures, including the header navigation, AI-Assist promotional panel, news listings, industry category grid, and footer. Mobile breakpoints, form validation states, dropdown menu animations, and interior page templates are not represented. The families -apple-system, Arial, Bernina-regular, Bernina-semibold, Tiempos-medium, and Tiempos-regular are named as present in the source. Measurements derive from the documented computed styles and should be verified against live implementation before production use.

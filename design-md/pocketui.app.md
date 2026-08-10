# How pocketui.app is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/pocketui.app-design)

Last updated: 2026-08-10

## Captured pages

[![Features section with four feature cards showing Smart detection, Component preview, AI library, and asset organization with purple accent headings and product screenshots](https://pin.fontofweb.com/9860?format=jpg)](https://design.withfudge.com/share/pin-9860)

[Features section with four feature cards showing Smart detection, Component preview, AI library, and asset organization with purple accent headings and product screenshots](https://design.withfudge.com/share/pin-9860)

[![Hero area with tabbed navigation bar and centered product screenshot showing a component export interface with Copy Tailwind button on dark device frame](https://pin.fontofweb.com/9859?format=jpg)](https://design.withfudge.com/share/pin-9859)

[Hero area with tabbed navigation bar and centered product screenshot showing a component export interface with Copy Tailwind button on dark device frame](https://design.withfudge.com/share/pin-9859)

## Overview

PocketUI presents a developer-focused SaaS product through a restrained, light-themed landing page. The visual system prioritizes clarity and trust: generous white space, subtle gray borders that define structure without heaviness, and a disciplined typographic hierarchy in Inter. The overall impression is of a precision tool—clean surfaces, measured spacing, and occasional accent color used sparingly to guide attention. Product screenshots appear within rounded device frames or card containers, reinforcing the tool's output quality. The design avoids decorative excess; every border, shadow, and spacing choice serves readability and conversion. Applesystem appears as a secondary system font in limited contexts.

## Colors

The palette is fundamentally monochrome with a single functional accent. Light grays create depth through layered surfaces rather than heavy shadows.

| token | value | use |
|---|---|---|
| ink | #0A0A0A | Primary headings, body text, strong emphasis |
| ink-secondary | #737373 | Secondary descriptions, muted labels, tab inactive text |
| ink-tertiary | #E5E5E5 | Disabled states, placeholder borders |
| canvas | #FFFFFF | Page background, primary surface |
| surface | #FAFAFA | Card backgrounds, elevated panels |
| surface-elevated | #F5F5F5 | Inner card areas, screenshot containers |
| border | #E2E2E4 | Card outlines, section dividers, tab borders |
| border-subtle | #E5E5E5 | Hairline separators, inner boundaries |
| accent | #007AFF | Interactive links, copy buttons, active indicators |
| accent-purple | #B8A9E8 | Feature category labels, decorative headings |

The system operates in a light mode exclusively. Text hierarchy relies on opacity-through-color rather than transparency: near-black ink for primary content, mid-gray for secondary, with the blue accent reserved for actionable elements like "Copy" buttons and external links. The purple accent appears as a decorative treatment for feature category labels, creating visual rhythm in the features grid without competing with the functional blue. Shadows are minimal and soft—typically a 1px inset border or a subtle drop shadow for elevated cards—avoiding the heavy layered shadows common in consumer products.

## Typography

Inter serves as the primary typeface, providing a neutral, highly legible foundation appropriate for a developer audience. Applesystem appears in limited fallback contexts at 14px. The scale ranges from micro labels to prominent section headings, with weight and tracking adjustments creating hierarchy rather than dramatic size jumps.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| body | Inter | 1rem | 400 | 1.5 | normal | Default paragraph text, descriptions |
| body-medium | Inter | 1rem | 500 | 1.5 | normal | Emphasized body, button labels |
| section-display | Inter | 2.25rem | 600 | 1.25 | -0.025em | Major section headings |
| feature-heading | Inter | 1.5rem | 500 | 1.167 | normal | Feature card titles |
| label | Inter | 0.875rem | 500 | 1.429 | normal | Tab labels, navigation items |
| caption | Inter | 0.8125rem | 600 | 1.5 | -0.025em | Small headings, metadata |
| small-label | Inter | 0.6875rem | 500 | 1.455 | normal | Tags, micro labels |
| micro | Inter | 0.625rem | 500 | 1.5 | normal | Minimal indicators |
| hero-lead | Inter | 1.125rem | 500 | 1.375 | normal | Hero subheadings, lead paragraphs |
| code | System UI Monospace | 0.75rem | 500 | 1.5 | -0.025em | Inline code, technical values |

Verify licensing for these families before production use. The type system favors medium weight (500) for interactive and emphasized text, with semibold (600) reserved for display headings and small captions. Negative letter spacing tightens larger headings for a more refined appearance, while body text maintains normal spacing for readability.

## Layout

The page employs a centered, max-width container system with generous horizontal margins that scale with viewport width. Content sections stack vertically with substantial vertical rhythm, separated by full-width border rules.

The main content area uses a centered container with approximately 191px to 215px horizontal margins on desktop, creating a narrow, focused reading experience. Sections receive 96px vertical padding, establishing clear territorial boundaries between content areas. The features grid uses a two-column layout with 48px gaps between cards, each card containing internal padding of 32px.

Component-level spacing follows a tight system: 16px gaps between related elements, 12px for grouped items, 8px for icon-text pairs, and 4px for micro-adjustments. Cards and elevated surfaces use 18px to 20px border radii for outer corners, with 16px radii for inner content areas. Buttons and compact elements use 10px to 14px radii depending on context.

The tab navigation in the hero area spans the full container width with equal distribution, separated by 1px vertical borders. Product screenshots sit within rounded containers that may include subtle shadow treatments, creating depth without visual noise.

## Visual language

The aesthetic is intentionally restrained: Swiss-influenced clarity meets contemporary SaaS conventions. Rounded rectangles dominate—cards, buttons, device frames, and containers all share the same family of radii, creating cohesion. The absence of strong background colors means photography and product screenshots become the primary visual interest.

Borders function as the primary structural device. A 1px solid rule in light gray separates sections, defines cards, and creates the tab navigation. These borders are nearly invisible at first glance but essential to the page's organization. Shadows appear only for elevation: a soft multi-layer shadow for prominent cards, and an inset shadow for subtle depth on input-like areas.

Product imagery is presented honestly—screenshots show actual interface states with realistic data. Device frames are minimal, often just rounded rectangles with thin borders rather than elaborate hardware chrome. The "Copy" action appears repeatedly as a blue text button with an icon, reinforcing the tool's core workflow.

Iconography is simple and functional, typically 16px to 20px, placed inline with text or as list markers. Checkmarks in feature lists use a muted purple or gray, avoiding the accent blue to prevent confusion with actions.

## Components

### Feature card

- **Anatomy**: Rounded container with internal padding, optional product screenshot or illustration at bottom, text block at top with category label, heading, description, and feature list.
- **Surface**: Background `{colors.surface}` or `{colors.canvas}`, 1px border `{colors.border}`, 18px to 20px border radius.
- **Typography**: Category label uses `{typography.small-label}` in `{colors.accent-purple}`; heading uses `{typography.feature-heading}` in `{colors.ink}`; description and list items use `{typography.body}` in `{colors.ink}`.
- **Shape**: Rounded rectangle with consistent internal padding of 32px.
- **Spacing**: 12px gap between label and heading; 16px between heading and description; 8px between list items.
- **Composition**: Text occupies upper portion, visual content anchors bottom. Cards in grid have equal height with aligned tops.
- **Variants**: Some cards include full-bleed screenshots; others use abstract illustrations or code samples.

### Tab navigation

- **Anatomy**: Horizontal row of text labels with optional icons, separated by vertical borders, with active state indicator.
- **Surface**: Transparent background, 1px bottom border in `{colors.border}`.
- **Typography**: `{typography.label}` in `{colors.ink-secondary}` for inactive, `{colors.ink}` for active.
- **Shape**: Full-width bar with equal-width tabs.
- **Spacing**: 16px to 20px vertical padding; 6px gap between icon and label.
- **Composition**: Four to five items distributed evenly; active item may have bottom border indicator or text color change.
- **States**: Active tab shows darker text; inactive tabs show `{colors.ink-secondary}`.

### Product screenshot container

- **Anatomy**: Rounded rectangle containing a device mockup or interface screenshot, often with shadow and subtle background.
- **Surface**: `{colors.canvas}` or `{colors.surface-elevated}` background, optional multi-layer shadow for elevation.
- **Shape**: 18px to 20px border radius; may include top-radius-only treatment (20px 20px 0 0) for card-like presentation.
- **Spacing**: 24px to 48px internal padding; centered within parent section.
- **Composition**: Screenshot centered with generous surrounding space; may include caption or action button below.

### Action button (copy/link)

- **Anatomy**: Text label with inline icon, compact padding, no visible border or subtle border.
- **Surface**: Transparent or `{colors.canvas}` background; `{colors.accent}` text.
- **Typography**: `{typography.label}` or `{typography.body-medium}`.
- **Shape**: 10px to 14px border radius; pill shape for prominent actions.
- **Spacing**: 10px to 14px horizontal padding, 8px to 10px vertical.
- **Composition**: Icon precedes text with 6px to 8px gap.

### Feature list item

- **Anatomy**: Checkmark icon followed by descriptive text.
- **Surface**: Transparent.
- **Typography**: `{typography.body}` in `{colors.ink}`.
- **Spacing**: 8px gap between icon and text; 6px to 8px vertical spacing between items.
- **Composition**: Icon aligned to first line of text; items stack vertically within card.

## Responsive behavior

The two-column features grid should collapse to a single column on narrower viewports, maintaining card internal spacing. The centered container with wide horizontal margins should narrow progressively, transitioning to 20px to 24px side padding on mobile. Tab navigation may scroll horizontally or stack into a dropdown when space is insufficient. Section vertical padding should reduce from 96px to 48px or 64px on smaller screens. Feature card screenshots should remain visible but may scale down; text should never crowd against card edges.

## Practical implementation guidance

### Preserve
- The generous whitespace and light gray border system; these define the premium, precise character.
- Inter as the sole typeface with its specific weight distribution (400 body, 500 emphasis, 600 display).
- The purple accent for decorative category labels only; reserve blue for interactive elements.
- Rounded corners in the 16px to 20px range for cards and containers.
- Honest product screenshots without heavy stylization or mockup embellishment.

### Avoid
- Dark mode implementations without explicit design direction; the current system is built for light surfaces.
- Heavy drop shadows or elevation systems; the current shadows are minimal and purposeful.
- Additional accent colors beyond the blue and purple; the restrained palette is intentional.
- Tightening the wide container margins; the narrow reading experience is part of the calm aesthetic.
- Generic placeholder imagery; the design relies on actual product interface shots.

### Recommended build order
1. Establish the base typography with Inter at 16px/24px line height.
2. Implement the centered container with wide margins and section vertical rhythm.
3. Build the border and surface color system (canvas, surface, border tokens).
4. Create the feature card component with consistent padding and radius.
5. Add the tab navigation with border-separated items.
6. Implement product screenshot containers with appropriate shadow treatment.
7. Apply accent colors to interactive elements and decorative labels.

### Accessibility
- Ensure the light gray borders (`#E2E2E4`) against white backgrounds meet minimum contrast ratios for UI boundaries; consider darkening to `#D1D1D6` if needed.
- The blue accent (`#007AFF`) on white should provide sufficient contrast for text links and buttons.
- Maintain focus indicators for tab navigation and copy buttons; the minimal visual style should not suppress accessibility affordances.
- Feature list checkmarks should have appropriate `aria-hidden` treatment with text alternatives as needed.

## Scope note

This guide covers the PocketUI landing page's light-themed marketing surface, including the hero area with tabbed navigation, features grid, and product presentation components. Pricing pages, authentication flows, application interface, dark mode, motion design, and mobile-specific layouts are not represented in the supplied material. Measurements derive from the documented interface values.

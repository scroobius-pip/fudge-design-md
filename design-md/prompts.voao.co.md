# How prompts.voao.co is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/prompts.voao.co-design)

Last updated: 2026-08-10

## Captured pages

[![Gallery page showing filter tabs, promotional banner, and dense masonry grid of AI-generated artwork with dark UI chrome](https://pin.fontofweb.com/8541?format=jpg)](https://design.withfudge.com/share/pin-8541)

[Gallery page showing filter tabs, promotional banner, and dense masonry grid of AI-generated artwork with dark UI chrome](https://design.withfudge.com/share/pin-8541)

[![Landing page hero with centered Preview Gallery heading and sparse four-column grid of placeholder slots and vibrant AI artwork thumbnails](https://pin.fontofweb.com/8540?format=jpg)](https://design.withfudge.com/share/pin-8540)

[Landing page hero with centered Preview Gallery heading and sparse four-column grid of placeholder slots and vibrant AI artwork thumbnails](https://design.withfudge.com/share/pin-8540)

## Overview

VOAO/AI is a dark-themed gallery interface for discovering and browsing premium Midjourney prompts and style references (sref). The design prioritizes the artwork itself by wrapping it in near-black chrome with restrained typography and minimal decorative elements. The visual system is built on a foundation of absolute black canvas, pure white text, and a single warm gray for secondary information. Two type families divide labor: Funnel handles display and card titles with a geometric, slightly condensed character, while Inter manages all body text, labels, and interface elements with neutral clarity. The layout is grid-centric, with masonry-style arrangements on the gallery page and a cleaner four-column preview grid on the landing page. Every interactive element is flat, with hairline borders or subtle background shifts rather than shadows or gradients, keeping the interface feeling lightweight against the heavy visual weight of the AI-generated imagery.

## Colors

The color system is intentionally austere, using a near-monochrome palette that lets colorful artwork dominate. Black serves as the infinite canvas, with layered grays for elevated surfaces and white for all primary text and borders.

| token | value | use |
|---|---|---|
| canvas | #000000 | Page background, header background, scroll gutter |
| surface | #1A1A1A | Card backgrounds, promotional banner, secondary buttons |
| surface-elevated | #404040 | Tertiary button backgrounds, subtle hover states |
| ink | #FFFFFF | Primary text, headings, borders, icon strokes |
| muted-ink | #737373 | Secondary descriptions, placeholder text, disabled tab labels |
| border | #FFFFFF | Hairline dividers, card outlines, tag borders |
| action-primary-bg | #FFFFFF | Primary CTA buttons (Get Pro, active states) |
| action-primary-ink | #000000 | Text on primary buttons |
| action-secondary-bg | #1A1A1A | Filter tabs, secondary actions |
| action-secondary-ink | #FFFFFF | Text on secondary buttons and tabs |
| action-tertiary-bg | #404040 | Inactive or low-priority buttons |
| action-tertiary-ink | #A3A3A3 | Text on tertiary buttons |

The interface operates in a single dark mode with no light variant. Image gradients provide the only color variation: cards use a bottom-to-top linear gradient from `rgba(0, 0, 0, 0.9)` through `rgba(0, 0, 0, 0.2)` to transparent, ensuring white text remains legible over unpredictable artwork. No accent colors are used for UI elements; the artwork itself supplies all chromatic energy.

## Typography

Two families define the typographic hierarchy. Funnel appears exclusively in display contexts with a bold, geometric presence. Inter handles everything else with neutral readability across weights from Regular to Medium.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Funnel | 2.25rem | 700 | 1.11 | -0.025em | Page titles (Gallery, Preview Gallery) |
| section-display | Funnel | 1.875rem | 700 | 1.2 | normal | Landing page hero heading |
| card-title | Funnel | 1.125rem | 400 | 1.56 | normal | Artwork card titles, prompt names |
| body | Inter | 1rem | 400 | 1.5 | normal | Navigation, descriptions, general content |
| body-small | Inter | 0.875rem | 400 | 1.43 | normal | Secondary descriptions, metadata |
| label | Inter | 0.75rem | 500 | 1.33 | normal | Filter tabs, buttons, tags |
| micro-label | Inter | 0.625rem | 400 | 1.5 | 0.05em | Small badges, category pills, fine print |

Funnel is used at 18px for card titles and 14px for compact headings, with a 30px landing display and 36px page hero. Inter scales from 10px micro-labels through 12px labels to 16px body, with Medium weight reserved for button and tab labels. Verify licensing for these families before production use.

## Layout

The layout system centers content within a constrained maximum width while allowing the gallery grid to breathe against the black canvas.

**Page structure.** A fixed header spans the full viewport width with internal horizontal padding of 24px. The logo "VOAO/AI" sits left, a search field occupies the center, and a "Sign In" action sits right. Below the header, content sections stack vertically with generous vertical rhythm.

**Content width.** The landing page hero section uses a centered narrow column with horizontal margins of 252.5px, creating a focused reading experience. The gallery page uses a wider content area with 212.5px side margins, accommodating the denser masonry grid.

**Grid system.** The gallery employs a responsive masonry or dense grid with consistent 8px gaps between cards. Cards maintain aspect ratios close to 3:4 or 4:5 for portrait artwork, with some landscape variations. The landing preview grid uses a strict four-column layout with equal-width columns and 8px gutters.

**Spacing scale.** Built on a 2px base unit:
- 4px (0.25rem): micro gaps, tag padding vertical
- 6px (0.375rem): small button padding
- 8px (0.5rem): tag padding horizontal, grid gaps
- 12px (0.75rem): button padding horizontal, heading margin bottom
- 16px (1rem): card internal padding, section padding
- 24px (1.5rem): header padding horizontal, section padding horizontal
- 32px (2rem): section margin bottom
- 48px (3rem): large section margin bottom
- 64px (4rem): hero section padding vertical

## Visual language

The visual language is deliberately restrained, treating the interface as a neutral frame for highly saturated, often surreal imagery.

**Imagery treatment.** Artwork thumbnails are displayed without rounded corners or shadows, bleeding edge-to-edge within their card containers. The only image treatment is the mandatory bottom gradient that fades from near-black opacity to transparent, creating a safe zone for overlaid text. No borders, frames, or hover zoom effects are visible.

**Iconography.** Icons are minimal line drawings in white, matching the 1px hairline aesthetic. The gallery view toggle uses simple grid and list icons. Category indicators use small sparkles or geometric marks at 12px scale.

**Tags and badges.** Small rectangular pills with 1px white borders and 2px corner radius contain micro-label text. These sit above or beside card titles, indicating categories like "FREE" or style types. Padding is tight at 4px vertical and 8px horizontal.

**Empty states.** Placeholder slots in the preview grid show a dark gray (#1A1A1A) textured or noise-filled surface, suggesting content loading without breaking the visual rhythm.

**Motion and feedback.** The flat design suggests immediate state changes rather than animated transitions. No shadows or elevation changes signal interactivity.

## Components

### Header

- **Anatomy:** Full-width bar containing logo mark, centered search input, and sign-in action
- **Surface:** Background `{colors.canvas}`, no border or shadow
- **Typography:** Logo uses `{typography.body}` in white; search placeholder uses `{typography.body}` in muted tone
- **Spacing:** Height approximately 56px, horizontal padding 24px
- **Composition:** Flexbox row with space-between alignment; search field flexes to fill center space with rounded corners and subtle inner border

### Search Field

- **Anatomy:** Text input with magnifying glass icon, placeholder text, and keyboard shortcut hint
- **Surface:** Background slightly elevated from canvas or transparent with 1px border
- **Typography:** `{typography.body}` for input text, `{typography.label}` for shortcut badge
- **Shape:** 4px corner radius, full rounded pill or soft rectangle
- **Spacing:** Internal padding approximately 8px 12px

### Filter Tab Bar

- **Anatomy:** Horizontal row of pill buttons with optional icon prefix, view toggle icons, and scroll action
- **Surface:** Active tab uses `{colors.action-primary-bg}` with `{colors.action-primary-ink}`; inactive tabs use `{colors.action-secondary-bg}` with 1px white border
- **Typography:** `{typography.label}` in Medium weight
- **Shape:** 4px corner radius on all tabs
- **Spacing:** 8px gap between tabs, 12px horizontal padding, 0px vertical padding
- **Variants:** Icon+text tabs (Prompts, Styles), text-only tabs (All, Free, Premium, Recent, Oldest), icon-only toggles (grid density), text action (Scroll)

### Promotional Banner

- **Anatomy:** Full-width card with headline, subtext, and right-aligned CTA button
- **Surface:** `{colors.surface}` background, 1px white border, 2px corner radius
- **Typography:** Headline `{typography.body}` in white, subtext `{typography.body-small}` in muted gray
- **Spacing:** 16px internal padding, generous vertical margin separating from grid
- **Composition:** Flexbox row, text left, button right

### Artwork Card

- **Anatomy:** Image thumbnail with optional bottom gradient overlay, title text, and optional metadata line
- **Surface:** No card background visible—image fills container; gradient overlay provides text legibility
- **Typography:** Title `{typography.card-title}` in white, positioned over gradient; metadata `{typography.body-small}` or `{typography.micro-label}`
- **Shape:** 2px corner radius on container
- **Spacing:** 16px internal padding where text overlays image bottom
- **Composition:** Image aspect ratio varies; text anchored to bottom-left within gradient zone

### CTA Button

- **Anatomy:** Text label with optional price display
- **Surface:** Primary variant uses `{colors.action-primary-bg}` with `{colors.action-primary-ink}`; secondary uses `{colors.action-secondary-bg}` with border
- **Typography:** `{typography.body-small}` or `{typography.label}` depending on context
- **Shape:** 4px corner radius
- **Spacing:** 8px 16px padding for prominent actions, 6px for compact variants

### View Toggle

- **Anatomy:** Group of two or three icon buttons for grid density
- **Surface:** Active state uses filled or bordered selection; inactive uses transparent
- **Shape:** 2px corner radius per button
- **Spacing:** Tight grouping with shared border or minimal gap

## Responsive behavior

The system is documented at desktop widths only. The following responsive adaptations are recommended:

At viewports below approximately 1024px, the four-column grid should collapse to three columns, then two below 768px. The landing page's narrow centered column should expand to standard page margins. The header search field should shrink or collapse to an icon-only trigger below 640px.

The masonry gallery grid likely uses CSS `grid-template-columns: repeat(auto-fill, minmax(280px, 1fr))` or similar, which naturally adapts without breakpoint-specific rules. Filter tabs should remain horizontally scrollable on narrow viewports rather than wrapping.

Typography scales should remain fixed; the display sizes are already restrained and do not require reduction on smaller screens. Card text may need slight size reduction to 14px on mobile to prevent truncation.

## Practical implementation guidance

### Preserve
- The absolute black canvas (#000000) as the dominant background; any deviation lightens the dramatic contrast with artwork
- The strict two-family type hierarchy: Funnel for display, Inter for everything functional
- 1px white hairlines for borders and dividers—never heavier, never colored
- The bottom-to-top gradient overlay on all artwork cards for text safety
- The 8px grid gap as a consistent rhythm across all gallery layouts

### Avoid
- Adding shadows to cards or buttons; the flat aesthetic is intentional
- Using accent colors for UI elements; let the artwork supply color
- Rounding card corners beyond 2px; the sharpness complements the geometric type
- Light mode variants without complete recoloring of the image gradient system
- Generic placeholder gray blocks; the textured dark gray empty states are distinctive

### Recommended build order
1. Establish the black canvas and Inter body text at 16px
2. Implement the header with search field and sign-in action
3. Build the filter tab bar with active/inactive states
4. Create the artwork card component with gradient overlay and text positioning
5. Assemble the masonry grid with 8px gaps
6. Add Funnel display type for page titles and card headings
7. Implement the promotional banner as a full-width bordered card
8. Polish with micro-labels, tags, and view toggle icons

### Accessibility
- Ensure all artwork images have descriptive alt text or aria-labels, as the visual content is the primary purpose
- The gradient overlay must maintain sufficient contrast; verify the 90% black stop provides WCAG AA compliance for white text
- Search field should have visible focus indicators, likely a 1px white border shift or subtle background change
- Filter tabs need clear active-state differentiation beyond color; the filled white background on active tabs satisfies this
- Keyboard shortcut hints (⌘K) should be discoverable and functional

## Scope note

This guide covers the gallery and landing page surfaces of prompts.voao.co as visible in desktop screenshots. Mobile layouts, breakpoint-specific behavior, loading skeletons, empty state messaging, checkout flows, and authenticated user features are not represented. Motion design, hover states, and focus styles are not visible in the provided images and should be validated in implementation.

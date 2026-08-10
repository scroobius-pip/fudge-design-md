# How seesaw.website is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/seesaw.website-design)

Last updated: 2026-08-10

## Captured pages

[![Aileen Luo profile page showing a centered hero with name, description, and pill-shaped visit button above a large screenshot preview of the designer's portfolio website with](https://pin.fontofweb.com/10229?format=jpg)](https://design.withfudge.com/share/pin-10229)

[Aileen Luo profile page showing a centered hero with name, description, and pill-shaped visit button above a large screenshot preview of the designer's portfolio website with](https://design.withfudge.com/share/pin-10229)

[![SEESAW homepage featuring a left sidebar category navigation, bold hero headline with subscribe call-to-action, and a responsive grid of website preview cards with thumbnail](https://pin.fontofweb.com/10228?format=jpg)](https://design.withfudge.com/share/pin-10228)

[SEESAW homepage featuring a left sidebar category navigation, bold hero headline with subscribe call-to-action, and a responsive grid of website preview cards with thumbnail](https://design.withfudge.com/share/pin-10228)

## Overview

SEESAW is a curated design inspiration directory that presents website showcases in a clean, editorial format. The visual system prioritizes readability and content hierarchy through a near-white canvas, high-contrast dark typography, and generous whitespace. The interface balances functional density with breathing room: a persistent top navigation provides global actions, while the main content area alternates between hero messaging and dense card grids of website previews. The overall impression is that of a refined design journal—authoritative but approachable, with subtle borders and soft shadows defining containers without heavy visual weight.

## Colors

The palette is intentionally restrained, built on a grayscale foundation with precise role separation. Every color serves a structural or communicative purpose.

| token | value | use |
|---|---|---|
| ink | `#1C1C1C` | Primary text, headings, active navigation, dark button fills |
| ink-secondary | `#525252` | Secondary descriptions, card subtitles, muted emphasis |
| ink-tertiary | `#737373` | Tertiary metadata, timestamps, category hints |
| muted | `#A3A3A3` | Placeholder text, disabled states, subtle dividers |
| border | `#E5E5E5` | Card outlines, navigation pill borders, container separators |
| surface | `#F5F5F5` | Hover states, secondary backgrounds, input fields |
| canvas | `#FFFFFF` | Page background, card fills, navigation bar |
| action | `#1C1C1C` | Primary button backgrounds, active states |
| action-inverse | `#FFFFFF` | Text on dark buttons, inverted badges |

The system operates in a single light mode. Dark values are reserved for text and interactive emphasis, while light values establish spatial depth through layering. The near-black ink against white canvas creates the primary reading experience, with secondary grays stepping back for supporting information. No accent colors appear in the interface chrome; color emerges only through the photographic website previews within cards.

## Typography

The type system uses Inter as its primary interface typeface, deployed across a compact range of sizes with consistent negative tracking. The source data also records Applesystem and System-Uisansserif as present font families, though these appear to serve fallback or system-level roles rather than the primary reading experience. Weights are limited to Regular (400) and Semibold (600), creating distinction through size and weight rather than style variation.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Inter | 2.25rem | 600 | 1.11 | -0.04em | Page headlines, hero statements |
| section-display | Inter | 2rem | 600 | 1.25 | -0.005em | Profile names, section titles |
| body-large | Inter | 1.25rem | 400 | 1.6 | -0.005em | Hero descriptions, lead paragraphs |
| body | Inter | 1rem | 400 | 1.5 | -0.005em | Navigation, buttons, card titles |
| body-small | Inter | 0.875rem | 400 | 1.43 | -0.005em | Metadata, captions, small labels |
| label | Inter | 0.875rem | 400 | 1.43 | -0.005em | Category tags, timestamps |
| navigation | Inter | 1rem | 400 | 1.5 | -0.005em | Top nav links, sidebar items |

The consistent `-0.005em` letter spacing (rendered as `-0.16px` at 16px root) tightens the texture of body text without condensing readability. The hero display uses tighter `-0.04em` tracking for impactful headlines. Line heights are compact: 1.11 for large display text, 1.25 for section headings, and 1.5–1.6 for body sizes. Verify licensing for Inter, Applesystem, and System-Uisansserif before production use.

## Layout

The page architecture follows a predictable hierarchy: fixed top navigation, optional left sidebar for category filtering, and a main content area with generous top padding.

The top navigation spans full width with `24px` horizontal padding, containing the wordmark left, search center, and action buttons right. Navigation links and category pills sit within this bar with `16px` gaps between elements. The main content area receives `67px` top padding on the homepage and `80px` horizontal padding on profile pages, creating clear separation from the navigation.

The homepage introduces a left sidebar at `250px` width with `16px` internal padding, presenting vertical category navigation with `8px` gaps between items. The main content grid sits beside this sidebar with `24px` row gaps and `16px` column gaps between cards.

Card grids use a responsive column layout. On the homepage, cards appear in three columns with consistent internal padding of `32px` vertical and `12px` horizontal. Profile pages center a single large preview with `40px`–`48px` top margins separating content blocks.

Spacing tokens derive from a `2px` base unit: `0.125rem` (2px), `0.5rem` (8px), `0.75rem` (12px), `1rem` (16px), `1.125rem` (18px), `1.5rem` (24px), `2rem` (32px), `2.5rem` (40px), `3rem` (48px), `3.25rem` (52px), `4.1875rem` (67px), `5rem` (80px), and `15.625rem` (250px).

## Visual language

The visual character is editorial and utilitarian, drawing from design directory conventions while maintaining warmth through rounded interactions. Corner radii are purposefully varied: full pills (`9999px`) for navigation links and tags, `10px` for primary buttons, `8px` for cards and preview containers, and `6px` for smaller nested elements. This creates a subtle hierarchy of roundness—more organic for human actions, slightly more structured for content containers.

Borders are hairline `1px` solid strokes in `#E5E5E5`, appearing on cards, navigation pills, and container edges. A single soft shadow appears on certain interactive elements: `rgba(0, 0, 0, 0.06) 0px 0px 0px 1px, rgba(0, 0, 0, 0.06) 0px 1px 2px -1px, rgba(0, 0, 0, 0.04) 0px 2px 4px 0px`, creating a barely-there elevation that separates without floating.

Imagery dominates the content area. Website preview cards contain large screenshot thumbnails with `8px` internal radii, often showing the actual website being featured. These thumbnails sit above metadata rows containing favicon, site name, and brief description. The photography and screenshots bring color and visual interest to an otherwise neutral chrome.

## Components

### Top navigation

- **Anatomy**: Fixed bar containing wordmark ("SEE + SAW" with decorative stars), centered search input with keyboard shortcut hint, and right-aligned "Submit" and "Subscribe" buttons.
- **Surface**: White background (`#FFFFFF`), no border or shadow on scroll.
- **Typography**: Navigation links use `body` token; search placeholder uses `body` in `ink-tertiary`.
- **Shape**: Full-width bar with `24px` horizontal padding. Search input uses rounded container. Action buttons use `pill` radius.
- **Spacing**: `16px` gap between nav elements. `24px` left margin on action cluster.
- **Composition**: Flex row with space-between alignment. Wordmark left, search center-weighted, actions right.

### Category sidebar

- **Anatomy**: Vertical stack of category links with icons, "All" header at top.
- **Surface**: White background, no visible border.
- **Typography**: `navigation` token for all items, `ink` color.
- **Spacing**: `16px` padding around container. `8px` gap between category rows. `12px` gap between icon and label within each row.
- **Composition**: Fixed width `250px`, left-aligned, vertically stacked.

### Website preview card

- **Anatomy**: Large thumbnail image, followed by metadata row (favicon, site name, description).
- **Surface**: White card with `1px` `#E5E5E5` border and `8px` radius. Thumbnail sits in light gray surface area.
- **Typography**: Site name uses `body` token in `ink`. Description uses `body-small` in `ink-secondary`.
- **Shape**: `8px` outer radius on card. Thumbnail may have internal rounding.
- **Spacing**: `32px` vertical padding, `12px` horizontal padding within card. `8px` gap between thumbnail and metadata. `24px` row gap, `16px` column gap between cards in grid.
- **Variants**: Some cards feature dark thumbnail backgrounds with white text overlays; others show light website screenshots directly.

### Profile hero

- **Anatomy**: Centered stack of date stamp, large name, description, and pill-shaped visit button.
- **Surface**: White background, no card container.
- **Typography**: Date uses `label` in `ink-tertiary`. Name uses `section-display` in `ink`. Description uses `body-large` in `ink-secondary`.
- **Shape**: Visit button uses `pill` radius with `1px` border.
- **Spacing**: `52px` top margin above date. Tight vertical stacking with default line height separation.

### Primary button

- **Anatomy**: Text label with optional icon.
- **Surface**: `action` background (`#1C1C1C`), `action-inverse` text (`#FFFFFF`).
- **Typography**: `body` token.
- **Shape**: `10px` radius. `10px` vertical padding, `18px` horizontal padding.
- **Variants**: Secondary style uses `surface` background with `ink` text and smaller `6px`/`12px` padding.

### Navigation pill

- **Anatomy**: Text label with optional icon, often with arrow indicator.
- **Surface**: White background, `1px` `border` stroke.
- **Typography**: `body` token.
- **Shape**: `pill` radius (`9999px`). `8px` vertical padding, `10px` horizontal padding.
- **Spacing**: `6px` gap between icon and text.

## Responsive behavior

The layout adapts through content reflow rather than dramatic transformation. The left sidebar category navigation, visible on the homepage at desktop widths, should collapse to a horizontal scrollable chip list or dropdown on narrower viewports. The main card grid transitions from three columns to two and then single column as viewport width decreases, maintaining `16px`–`24px` gaps between cards.

The top navigation search input should shrink or collapse to icon-only on small screens, preserving the Submit and Subscribe actions. Profile pages with centered hero content maintain center alignment across breakpoints, with the large website preview scaling to fit available width while preserving aspect ratio.

Typography scales down modestly: the `hero-display` at `2.25rem` may reduce to `1.75rem` on mobile, and `section-display` from `2rem` to `1.5rem`. Body sizes remain at `1rem` to preserve readability. Touch targets for navigation pills and buttons should maintain minimum `44px` height.

## Practical implementation guidance

### Preserve
- The stark light-on-dark contrast of the primary reading experience.
- Consistent `2px`-based spacing scale throughout.
- The interplay of rounded pills for actions and slightly sharper `8px` cards for content.
- Generous top padding (`67px`) between navigation and content.
- Favicon + name + description metadata pattern on every card.

### Avoid
- Adding saturated accent colors to the interface chrome; let preview imagery provide color.
- Heavy shadows or elevated cards; the single soft shadow is sufficient.
- Tightening body text line height below `1.5`; the current spacing is integral to readability.
- Removing borders from cards; the hairline stroke defines the editorial grid.

### Recommended build order
1. Establish the `2px` spacing scale and grayscale color tokens.
2. Implement Inter with specified weights and tracking values.
3. Build the fixed top navigation with search and action buttons.
4. Create the card component with thumbnail, metadata row, and border treatment.
5. Assemble the homepage grid with sidebar and responsive column behavior.
6. Implement profile hero with centered alignment and pill visit button.
7. Add category sidebar with icon + label rows.

### Accessibility
- Ensure search input has visible focus indicator; the current design relies on subtle borders.
- Category sidebar icons should have `aria-hidden` with visible text labels.
- Card thumbnails need descriptive alt text or `aria-label` combining site name and description.
- Color contrast exceeds WCAG AA: `ink` on `canvas` is approximately 15:1.
- Keyboard navigation should follow logical order: nav → sidebar → main content grid → individual cards.

## Scope note

This guide covers the homepage directory and individual profile pages as visible in the supplied images. Mobile layouts, hover states, loading skeletons, search result pages, and submission flows are not represented. The subscription modal and any authenticated user states fall outside the current scope. Measurements are exact where retained in the source data.

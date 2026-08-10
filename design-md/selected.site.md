# How selected.site is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/selected.site-design)

Last updated: 2026-08-10

## Captured pages

[![Explore page with hero collections, category pills, and post cards on a near-black canvas](https://pin.fontofweb.com/8205?format=jpg)](https://design.withfudge.com/share/pin-8205)

[Explore page with hero collections, category pills, and post cards on a near-black canvas](https://design.withfudge.com/share/pin-8205)

[![Search modal overlay with trending results, category sidebar, and cookie consent banner](https://pin.fontofweb.com/8204?format=jpg)](https://design.withfudge.com/share/pin-8204)

[Search modal overlay with trending results, category sidebar, and cookie consent banner](https://design.withfudge.com/share/pin-8204)

[![Homepage hero with bento grid of tool cards, tag filters, and right-rail article summaries](https://pin.fontofweb.com/8203?format=jpg)](https://design.withfudge.com/share/pin-8203)

[Homepage hero with bento grid of tool cards, tag filters, and right-rail article summaries](https://design.withfudge.com/share/pin-8203)

[![Tag filter dropdown with color swatches and three-column tag list against dark background](https://pin.fontofweb.com/8202?format=jpg)](https://design.withfudge.com/share/pin-8202)

[Tag filter dropdown with color swatches and three-column tag list against dark background](https://design.withfudge.com/share/pin-8202)

## Overview

Selected.site is a dark-first curation platform that surfaces tools, websites, templates, and resources for founders and creators. The visual system is built on a near-black canvas with high-contrast off-white typography, creating a gallery-like environment where colorful content thumbnails become the primary visual interest. The interface employs a bento-grid layout philosophy—irregular, content-dense card arrangements that break rigid symmetry while maintaining clear hierarchy. Pill-shaped interactive elements appear throughout, from navigation tabs to category filters to action buttons, giving the system a soft, approachable character against the stark dark background. The overall impression is of a premium discovery layer: minimal chrome, maximum content, with subtle borders and gradients providing depth without competing with the curated imagery.

## Colors

The palette is intentionally restrained, using a near-black family for all surfaces and a single off-white family for text, allowing photographic and brand imagery to carry color. Accent colors appear sparingly in functional contexts.

| token | value | use |
|---|---|---|
| canvas | #050505 | Page background; the deepest layer |
| surface | #0F0F0F | Primary card and container backgrounds |
| surface-elevated | #1A1A1A | Hover states, dropdowns, search field, modal shells |
| surface-highlight | #242424 | Active tag pills, selected filter states |
| ink | #F2F2F2 | Primary headings, body text, navigation labels |
| muted-ink | #737373 | Secondary descriptions, metadata, placeholder text |
| border | #262626 | Visible card borders, dividers, button outlines |
| border-subtle | #1A1A1A | Invisible structural borders, separator lines |
| action | #FFFFFF | Primary button fills, high-emphasis CTAs |
| action-inverse | #000000 | Text on white buttons |
| accent-blue | #4299E1 | Category indicators, interactive highlights |
| accent-purple | #9F7AEA | Tag system, creative tool categorization |
| accent-coral | #FF5724 | Urgency markers, featured badges |
| accent-slate | #A0AEC0 | Neutral system indicators |

The dark mode is not an alternate theme—it is the sole environment. Light values exist only as content (photography, screenshots) or as the occasional white button for maximum contrast on critical actions. Gradients appear as image overlays: linear gradients from transparent to rgba(0,0,0,0.8) at the bottom of hero cards, ensuring text legibility over varied imagery. No light-mode equivalent is present in the system.

## Typography

The type system uses a single family, Inter, across all roles, relying on weight and size to establish hierarchy rather than family contrast. This creates a cohesive, utilitarian feel appropriate for a tool-discovery platform.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Inter | 1.875rem | 700 | 1.2 | normal | Page titles, hero statements |
| section-display | Inter | 1.5rem | 700 | 1.33 | normal | Section headers, collection titles |
| body | Inter | 1rem | 400 | 1.5 | normal | Primary body text, descriptions |
| body-small | Inter | 0.875rem | 400 | 1.43 | normal | Card descriptions, metadata |
| label | Inter | 0.75rem | 500 | 1.33 | normal | Tags, pills, timestamps, counts |
| navigation | Inter | 0.875rem | 400 | 1.43 | normal | Nav links, secondary actions |
| navigation-active | Inter | 0.875rem | 500 | 1.43 | normal | Active nav, primary buttons |

The weight range spans 300 to 700, with 400 as the default body weight, 500 for interactive and label contexts, 600 for subheadings, and 700 for display and emphasis. Line heights are tight for display sizes (1.2) and generous for body (1.5), reflecting the platform's need for both impact and readability in dense layouts. Letter spacing remains normal throughout; no condensed or expanded tracking is used.

Verify licensing for these families before production use.

## Layout

The layout follows a full-bleed dark canvas with contained content regions. The maximum content width appears to center around a comfortable reading measure, with generous horizontal padding on viewport edges.

**Grid and spacing model.** The system uses a 2px base unit (0.125rem), from which all spacing derives. Common increments include 4px (0.25rem) for tight internal gaps, 8px (0.5rem) for element pairs, 12px (0.75rem) for button padding and small gaps, 16px (1rem) for card internal padding, 20px (1.25rem) for section gaps, 24px (1.5rem) for card padding, 32px (2rem) for section separations, and 40px (2.5rem) for major section breaks. The 48px (3rem) vertical padding appears on major section dividers.

**Page structure.** A fixed or sticky navigation bar spans the top, containing logo, primary navigation (Feed, Explore, Creators), a centered search field, and utility actions (theme toggle, Sign In, Submit). Below this, the main content area uses a bento-grid approach: irregular card sizes arranged in a responsive grid, with some cards spanning multiple columns, others single columns, creating visual rhythm.

**Content density.** The platform embraces high information density. Cards pack imagery, titles, descriptions, metadata, and action links into compact footprints. The right rail on wider viewports contains article summaries, tool comparisons, and newsletter signup, creating an asymmetric two-column feel even within the main grid.

**Z-index and layering.** Modals and search overlays sit above a dimmed backdrop. Cookie consent appears as a bottom-right panel. Dropdown menus for tags and filters float above content with subtle shadows.

## Visual language

**Card system.** Cards are the fundamental unit. They use 12px (0.75rem) corner radius, creating rounded rectangles that feel friendly but not playful. Borders are 1px solid #262626, visible but not prominent. Cards contain rich media (screenshots, mockups, video thumbnails) with text overlays or below-card text stacks. Some cards use gradient overlays from bottom to ensure text legibility over busy imagery.

**Pill shapes.** The pill (9999px border-radius) is the signature interactive shape. Navigation tabs, category filters, tag buttons, and primary actions all use this full rounding. This creates visual consistency across interactive elements and softens the otherwise rectilinear grid.

**Imagery treatment.** Content imagery appears unfiltered—full-color screenshots, photographs, and illustrations retain their native palettes. This intentional contrast against the monochrome interface makes content pop. Hero collection cards use larger imagery with gradient overlays and bottom-left text placement.

**Tag and filter system.** A horizontal scroll or wrap of pill-shaped tags appears below the hero on listing pages. Active tags use filled backgrounds; inactive tags use subtle borders or ghost styling. A color dot system categorizes tags by theme (design, AI, UI, website, app), with small circular swatches preceding tag labels.

**Empty and loading states.** The dark surface provides a natural skeleton screen environment. Shimmer effects, if used, would animate across the #0F0F0F to #1A1A1A range.

## Components

**Navigation bar**
- Anatomy: Logo mark + wordmark left, primary links center-left, search field center, utility actions right
- Surface: Transparent or #050505 background, blending with page
- Typography: navigation token for links, navigation-active for current page
- Shape: Full-width bar, height approximately 56-64px
- Spacing: 16px horizontal padding, 12px gap between nav items
- Composition: Flex row, space-between alignment, vertically centered
- Variants: Scrolled state may gain subtle border-bottom or background solidification

**Search field**
- Anatomy: Magnifying glass icon left, placeholder text, keyboard shortcut hint right (⌘K), optional clear button
- Surface: #1A1A1A fill, #262626 border, pill shape
- Typography: body token for input, label token for shortcut
- Shape: 9999px radius, height ~40px
- Spacing: 12px horizontal padding, 8px internal gap
- Composition: Centered in nav on desktop, full-width on mobile

**Search modal**
- Anatomy: Backdrop dimmer, centered modal with search input top, filter sidebar left, results grid right
- Surface: #1A1A1A modal, rgba(0,0,0,0.8) backdrop
- Typography: label for section headers, body for result titles
- Shape: 12px modal radius, pill-shaped category pills in sidebar
- Spacing: 24px modal padding, 16px result gaps
- Composition: Three-column internal layout (sidebar, results, preview)

**Content card**
- Anatomy: Media container (image/video), optional gradient overlay, title, description, metadata row (source, date, resource count)
- Surface: #0F0F0F background, #262626 border, 12px radius
- Typography: section-display or body for title, body-small for description, label for metadata
- Shape: 12px radius, 1px border, optional overflow-hidden for media
- Spacing: 20px internal padding when text is below media; 16px when overlaid
- Composition: Stacked vertical or media-with-overlay variants
- Variants: Hero card (large, gradient overlay, bottom text), Standard card (text below), Compact card (horizontal, image left)

**Category pill**
- Anatomy: Text label, optional count, optional arrow icon
- Surface: #1A1A1A fill when inactive, #242424 when active/hover
- Typography: label token
- Shape: 9999px radius
- Spacing: 6px vertical, 12px horizontal padding
- Composition: Inline-flex, horizontal scroll container or wrap

**Tag filter button**
- Anatomy: Color dot (8-12px circle) + text label
- Surface: Transparent or subtle fill, #262626 border optional
- Typography: label token
- Shape: 9999px radius
- Spacing: 4px gap between dot and text, 8px horizontal padding
- Composition: Horizontal arrangement in scrollable row or dropdown grid

**Primary button**
- Anatomy: Text label, optional icon
- Surface: #FFFFFF fill, #000000 text
- Typography: navigation-active token
- Shape: 9999px radius
- Spacing: 8px vertical, 16px horizontal padding
- Composition: Centered text, inline-flex

**Secondary/Ghost button**
- Anatomy: Text label, optional icon
- Surface: Transparent fill, #262626 border, #F2F2F2 text
- Typography: navigation token
- Shape: 9999px radius
- Spacing: 6px vertical, 12px horizontal padding

**Cookie consent banner**
- Anatomy: Text block, policy link, Reject button, Accept button
- Surface: #1A1A1A panel, subtle shadow
- Typography: body-small for text, label for buttons
- Shape: ~12px radius, positioned bottom-right
- Spacing: 16px padding, 12px gap between buttons
- Composition: Stacked text above horizontal button row

**Article/Tool comparison block**
- Anatomy: Title, description, thumbnail grid, "Read more" link
- Surface: Transparent or #0F0F0F card
- Typography: section-display for title, body-small for description, label for link
- Shape: Thumbnails at 12px radius
- Spacing: 16px between elements
- Composition: Vertical stack with 2x2 thumbnail grid

## Responsive behavior

The bento-grid layout adapts through column reduction: full desktop shows 4-5 columns of mixed-width cards, tablet reduces to 2-3 columns with hero cards spanning full width, and mobile collapses to a single column with horizontal scroll for category pills and tag filters. The navigation search field collapses to an icon on narrow viewports, expanding to full search on tap. The right-rail content (article summaries, tool comparisons) stacks below the main grid on tablet and mobile. Modal overlays transition to full-screen sheets on mobile, with the search input fixed at top and scrollable results below. Touch targets maintain minimum 44px height for all interactive elements.

## Practical implementation guidance

**Preserve**
- The near-black canvas as the default and only mode; do not introduce a light theme
- Pill-shaped interactive elements as the consistent button and tag language
- High content density with clear typographic hierarchy
- Full-bleed imagery within cards with gradient overlays for text legibility
- The 2px base grid for spacing consistency

**Avoid**
- Adding background colors to cards beyond the surface family; let content imagery provide color
- Sharp-cornered buttons or inputs; maintain 9999px radius for all interactive shapes
- Multiple font families; Inter handles all roles through weight variation
- Heavy shadows; the dark environment needs only subtle depth cues

**Recommended build order**
1. Establish the dark canvas (#050505) and surface hierarchy (#0F0F0F, #1A1A1A, #242424)
2. Implement Inter at 400/500/700 weights with the type scale
3. Build the pill button component as the primary interactive primitive
4. Create the card component with 12px radius, 1px border, and flexible media containers
5. Implement the bento-grid layout system with span variants
6. Add the navigation bar with search field and modal behavior
7. Build tag and filter systems with color dot indicators
8. Polish with gradient overlays, empty states, and responsive breakpoints

**Accessibility**
- Maintain minimum 4.5:1 contrast for all text; the #F2F2F2 on #050505 pairing exceeds 15:1
- Ensure focus indicators are visible on dark surfaces; consider #FFFFFF 2px outline offset
- Provide aria-labels for icon-only buttons (search, theme toggle, close)
- Support keyboard navigation through the modal trap and pill-row horizontal scroll
- Respect reduced-motion preferences for any grid layout animations

## Scope note

This guide covers the homepage, explore page, search modal, and tag filter surfaces visible in the supplied images. Mobile breakpoints, animation specifications, form validation states, user profile pages, and the submission flow are not represented. The color and spacing values derive from the retained interface measurements; verify against production if implementing dynamic or personalized content areas.

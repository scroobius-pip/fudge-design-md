# How labs.google is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/labs.google-design)

Last updated: 2026-08-10

## Captured pages

[![Media gallery grid with left navigation rail showing All Media, Videos, Characters, Scenes, Tools categories and bottom prompt input bar](https://pin.fontofweb.com/9426?format=jpg)](https://design.withfudge.com/share/pin-9426)

[Media gallery grid with left navigation rail showing All Media, Videos, Characters, Scenes, Tools categories and bottom prompt input bar](https://design.withfudge.com/share/pin-9426)

[![Explore Tools page with hero banner of colorful 3D app icons, Discover and My Tools tabs, and tool card grid with thumbnails](https://pin.fontofweb.com/9425?format=jpg)](https://design.withfudge.com/share/pin-9425)

[Explore Tools page with hero banner of colorful 3D app icons, Discover and My Tools tabs, and tool card grid with thumbnails](https://design.withfudge.com/share/pin-9425)

[![Google Flow landing page with hero carousel showing mobile app promotion, project thumbnails, and New project creation card](https://pin.fontofweb.com/9424?format=jpg)](https://design.withfudge.com/share/pin-9424)

[Google Flow landing page with hero carousel showing mobile app promotion, project thumbnails, and New project creation card](https://design.withfudge.com/share/pin-9424)

[![Shared Tool modal dialog for Shader Effects with app icon, trust warning, and centered action buttons on dark overlay](https://pin.fontofweb.com/9423?format=jpg)](https://design.withfudge.com/share/pin-9423)

[Shared Tool modal dialog for Shader Effects with app icon, trust warning, and centered action buttons on dark overlay](https://design.withfudge.com/share/pin-9423)

## Overview

Google Flow is a dark-mode-first creative platform for generating and managing visual media. The interface immerses users in a near-black canvas that makes generated imagery and video content the focal point. The design language is restrained and utilitarian: cool grays provide subtle hierarchy, rounded corners soften the technical density, and typography stays light and readable at all scales. Navigation relies on a persistent left rail for primary wayfinding, while the main content area presents media in responsive grids and carousels. The system balances creative expression with functional clarity—every surface exists to support the content rather than compete with it.

## Colors

The palette is built on a dark foundation with a narrow range of cool grays and pure white for maximum contrast on generated media.

| token | hex | use |
|---|---|---|
| canvas | #000000 | Page background, empty states, base layer behind all content |
| surface | #161718 | Card backgrounds, navigation rail, elevated panels |
| surface-elevated | #303030 | Hover states, secondary buttons, input borders, active tool highlights |
| ink | #FFFFFF | Primary text, icons on dark backgrounds, button labels on dark fills |
| ink-muted | #E8EAED | Secondary text, descriptions, metadata labels |
| ink-dim | #DADCE0 | Tertiary text, placeholder content, disabled states |
| border | #DADCE0 | Hairline borders on buttons, input outlines, dividers |
| border-subtle | #303030 | Internal card borders, separator lines between content sections |

The dark canvas serves a functional purpose: it eliminates visual noise when users review generated imagery and video. Surface layers step up in lightness only when content needs containment or separation. The cool cast in the grays prevents the interface from feeling warm or dated. White ink is reserved for primary actions and readable text; muted and dim variants create hierarchy without introducing additional hues. No accent colors appear in the interface chrome—color is supplied entirely by user-generated content.

## Typography

Google Sans carries the primary typographic load, used in weights from 400 to 700 for all interface text. Google Sans 18 Pt appears in the font sources as a related width variant. Applesystem serves as a system-level fallback at 14px for certain UI contexts. Google Symbols provides the icon font used for navigation and action icons throughout the interface. Material Icons Outlined and Material Icons Extended are also present in the source for additional icon coverage.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Google Sans | 3.5625rem | 400 | 1.12 | normal | Hero banner headlines, landing page titles |
| section-display | Google Sans | 1rem | 500 | 1.5 | normal | Section headers, category labels |
| body | Google Sans | 1rem | 400 | 1.5 | normal | Primary body text, descriptions, card copy |
| body-small | Google Sans | 0.875rem | 400 | 1.43 | normal | Secondary descriptions, metadata, captions |
| label | Google Sans | 0.6875rem | 500 | 1.45 | normal | Button text, badges, compact UI labels |
| label-small | Google Sans | 0.75rem | 700 | 1.33 | normal | Warning labels, emphasized small text |
| navigation | Google Sans | 1rem | 400 | 1.5 | normal | Navigation rail items, top bar links |

The hero display at 57px (3.5625rem) with tight leading creates impact in promotional banners without feeling oversized. Body text stays at 16px for readability across long descriptions. The 11px label size handles dense button chrome in toolbars. Weight distinctions are minimal—Regular for almost all text, Medium for section headers and buttons, Bold only for warning or emphasis moments. Verify licensing for these families before production use.

## Layout

The interface uses a two-zone layout: a fixed left navigation rail and a scrollable main content area.

The navigation rail spans the full viewport height and provides persistent access to primary categories: All Media, Videos, Characters, Scenes, Tools, and sub-items like Shader Effects. Rail items stack vertically with icon-and-label pairs, using 8px gaps between items and 16px left padding to align with the page gutter. The rail width accommodates comfortable text labels without truncation.

The main content area fills the remaining viewport width. Page-level padding uses 24px left and 20px right in standard views, expanding to 32px in wider layouts. Top padding of 76px clears the fixed header bar. Content sections stack with 80px bottom padding to create breathing room between major areas.

Grids are responsive and content-dense. Media galleries use auto-flow layouts with 16px gaps between cards. Tool discovery pages present cards in horizontal rows with 24px gaps. The hero banner occupies the full content width with internal padding of 32px to 50px, placing text over a gradient-shielded background image.

Modal dialogs center in the viewport with a dark scrim overlay, constrained to a maximum width that keeps reading lines comfortable. Input bars at the bottom of creation interfaces use rounded pill shapes with internal padding and gap spacing for icon buttons.

## Visual language

Rounded corners are a defining characteristic. Media cards use 16px radius, large promotional banners use 24px, and avatar or icon buttons use full pills. This consistency softens the technical density of a dark creative tool interface.

Shadows are minimal and functional. A subtle inset shadow using `rgba(218, 220, 224, 0.15)` at 1px creates hairline depth on elevated surfaces without visible blur. No drop shadows appear on cards—the dark background makes them unnecessary.

Gradients serve protective purposes. Hero banners use left-to-right dark gradients that fade from 70% black to transparent, ensuring white headline text remains legible over photographic backgrounds. These gradients are anchored to the left edge and extend roughly 40% across the image width.

Imagery dominates every view. Generated media fills card thumbnails edge-to-edge, with aspect ratios varying by content type. Tool icons use stylized 3D rendered shapes with saturated colors that pop against the dark chrome. No decorative patterns or textures appear in the interface itself.

Iconography uses Google Symbols and Material Icons in outlined and filled variants at 16px and 24px sizes. Icons sit inline with text in navigation items, buttons, and input fields, using 8px gaps between icon and label.

## Components

### Media card

An image or video container with rounded corners and optional overlay controls.

- **Anatomy**: Thumbnail image fills the card boundary. A play icon appears in the top-left corner for video content. Bottom-left labels show generation metadata or titles.
- **Surface**: Background inherits from `canvas` when empty; filled cards show media edge-to-edge with no border.
- **Typography**: Title uses `body-small` in `ink-muted`; metadata uses `label` in `ink-dim`.
- **Shape**: `rounded.card` (16px) on all corners.
- **Spacing**: 16px gap between cards in grid layouts.
- **Composition**: Cards flow in responsive grids, maintaining consistent gaps while stretching to fill available width.

### Tool card

A promotional container for discoverable creative tools.

- **Anatomy**: Thumbnail image at top, title and author below, description text at bottom. A three-dot menu triggers additional options.
- **Surface**: `surface` background with no visible border.
- **Typography**: Title uses `section-display` in `ink`; author and description use `body-small` in `ink-muted`.
- **Shape**: `rounded.card` (16px).
- **Spacing**: Internal padding of 24px to 32px; 24px gap between cards in horizontal rows.
- **Composition**: Cards align in rows with consistent thumbnail heights, creating a browsable catalog.

### Hero banner

A full-width promotional section with background imagery and overlaid text.

- **Anatomy**: Background image or video, left-aligned headline and description, call-to-action button below. A gradient overlay protects text legibility.
- **Surface**: Background media with `linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.4) 40%, transparent)` overlay.
- **Typography**: Headline uses `hero-display` in `ink`; description uses `body` in `ink-muted`; button uses `label`.
- **Shape**: `rounded.card-large` (24px).
- **Spacing**: Internal padding of 32px top, 50px bottom, 32px left.
- **Composition**: Text block occupies left 40% of banner width; remaining space shows unobstructed imagery.

### Navigation rail

Persistent vertical navigation for primary categories.

- **Anatomy**: Icon-and-label items stacked vertically, with expandable sections for nested tools.
- **Surface**: `canvas` background, blending with page.
- **Typography**: Items use `navigation` in `ink`; active states use `ink` at full opacity with `surface-elevated` background pill.
- **Shape**: Active item indicators use `rounded.button` (10px) or full pill radius.
- **Spacing**: 8px gap between items; 16px left padding; 12px vertical padding per item.
- **Composition**: Fixed position, full height, width accommodates longest label without truncation.

### Primary button

High-emphasis action trigger.

- **Anatomy**: Text label with optional leading icon.
- **Surface**: `ink` background with `canvas` text; no border.
- **Typography**: `label` token, Medium weight.
- **Shape**: `rounded.button-pill` (9999px).
- **Spacing**: Horizontal padding of 20px to 24px; vertical padding of 8px to 10px; 8px gap between icon and text.
- **Variants**: Compact icon-only buttons use 8px padding with 12px icon size.

### Secondary button

Medium-emphasis action with outline treatment.

- **Anatomy**: Text label with optional icon.
- **Surface**: Transparent background, `border` hairline, `ink` text.
- **Typography**: `label` token.
- **Shape**: `rounded.button-pill` (9999px).
- **Spacing**: Similar padding to primary button.

### Input bar

Text entry field for prompts and searches.

- **Anatomy**: Rounded container with placeholder text, trailing action buttons.
- **Surface**: `surface-elevated` background with `border-subtle` outline; focused state uses `border`.
- **Typography**: Input text uses `body` in `ink`; placeholder uses `body` in `ink-dim`.
- **Shape**: `rounded.input` (16px).
- **Spacing**: Internal padding of 10px vertical, 16px horizontal; 6px gap between inline elements.

### Modal dialog

Centered overlay for confirmations and tool sharing.

- **Anatomy**: Header with title and close action, content area with icon and description, footer with primary and secondary actions.
- **Surface**: `surface` background with subtle inset shadow; dark scrim overlay at full viewport coverage.
- **Typography**: Title uses `section-display`; body uses `body-small`; warning labels use `label-small` with Bold weight.
- **Shape**: `rounded.modal` (24px).
- **Spacing**: 24px to 32px internal padding; 16px gap between content sections; centered layout with maximum width constraint.

## Responsive behavior

The navigation rail collapses to icon-only or hides entirely on narrow viewports, with a toggle control in the header bar. Content grids reflow from three columns to two and then single column as viewport width decreases. Hero banner text blocks expand to full width on narrow screens, with gradients extending to cover more of the background image. Card gaps reduce from 24px to 16px and then 8px on the smallest screens. The bottom input bar remains fixed, ensuring prompt entry is always accessible during scroll.

## Practical implementation guidance

### Preserve
- The near-black canvas as the default background; it is essential to the content-first experience.
- Consistent 16px and 24px corner radii across card components; this creates visual rhythm.
- The left navigation rail pattern for primary wayfinding in tool interfaces.
- Generous internal padding on hero banners to protect text legibility over imagery.

### Avoid
- Adding bright accent colors to the interface chrome; let user content supply color.
- Using drop shadows on cards; the dark background makes them ineffective.
- Truncating navigation labels; the rail width should accommodate full text.
- Introducing additional type families; the single-family hierarchy is intentionally restrained.

### Recommended build order
1. Establish the dark canvas and surface layer tokens.
2. Implement the navigation rail with icon-and-label items.
3. Build the media card grid with responsive flow and consistent gaps.
4. Add the hero banner with gradient overlay and text positioning.
5. Implement button variants with pill shapes and proper padding.
6. Create the modal dialog system for tool sharing and confirmations.
7. Add the bottom input bar with rounded container and inline actions.

### Accessibility
- Ensure all text over imagery meets WCAG contrast ratios by maintaining gradient overlays.
- Provide visible focus indicators on navigation rail items and buttons.
- Use `aria-label` on icon-only buttons in the header and input bar.
- Consider reducing motion for users who prefer it, especially for carousel transitions.
- Maintain keyboard navigation order through the rail, content grid, and fixed input bar.

## Scope note

This guide covers the Flow creative tool interface as visible in desktop layouts. Mobile-specific adaptations, animation specifications, loading and error states, and disabled component treatments are not included. Measurements reflect the extracted interface values.
